// ================================================================
//  BOOKING CALENDAR -- Holiday Home Zeebries
//  Changeover days: Monday and Friday only
//  Valid blocks:
//    Midweek       Mon -> Fri  (4 nights)
//    Short weekend Fri -> Sun  (2 nights)
//    Long weekend  Fri -> Mon  (3 nights)
//    Longer stays: valid combinations of the above
// ================================================================

// -- Booked dates -------------------------------------------------
// Add / remove dates here (format: "YYYY-MM-DD") to block dates.
var BOOKED = [
  "2026-06-01","2026-06-02","2026-06-03","2026-06-04","2026-06-05","2026-06-06","2026-06-07",
  "2026-07-12","2026-07-13","2026-07-14","2026-07-15","2026-07-16","2026-07-17","2026-07-18","2026-07-19",
  "2026-08-02","2026-08-03","2026-08-04","2026-08-05","2026-08-06","2026-08-07","2026-08-08",
  "2026-08-09","2026-08-10","2026-08-11","2026-08-12","2026-08-13","2026-08-14","2026-08-15"
];

// -- Prices and fees ---------------------------------------------
var PRICES = {
  low:           { midweek:  450, short:  395, long:  475 },
  shoulder:      { midweek:  525, short:  475, long:  575 },
  springHoliday: { midweek:  725, short:  625, long:  750 },
  mayJune:       { midweek:  700, short:  625, long:  750 },
  summerHigh:    { midweek:  950, short:  875, long: 1050 },
  summerPeak:    { midweek: 1100, short: 1050, long: 1250 },
  september:     { midweek:  675, short:  600, long:  725 },
  autumnHoliday: { midweek:  725, short:  625, long:  750 },
  christmasNy:   { midweek:  825, short:  775, long:  925 }
};

var FEES = {
  cleaning: 110,
  deposit: 350,
  dog: 30,
  bedLinen: 10,
  bathTowelsPerPerson: 10,
  beachTowelsPerPerson: 10,
  comfortPack: 50
};

var SEASON_LABELS = {
  low:           'Low season',
  shoulder:      'Shoulder season',
  springHoliday: 'Spring holiday',
  mayJune:       'May-June',
  summerHigh:    'Summer High',
  summerPeak:    'Summer Peak',
  september:     'September',
  autumnHoliday: 'Autumn holiday',
  christmasNy:   'Christmas & New Year'
};

// -- 2026 season date ranges --------------------------------------
var SEASON_RANGES = [
  { from: '2025-12-21', to: '2026-01-04', s: 'christmasNy'   },
  { from: '2026-01-05', to: '2026-02-28', s: 'low'           },
  { from: '2026-03-01', to: '2026-04-02', s: 'shoulder'      },
  { from: '2026-04-03', to: '2026-04-19', s: 'springHoliday' },
  { from: '2026-04-20', to: '2026-04-30', s: 'shoulder'      },
  { from: '2026-05-01', to: '2026-06-30', s: 'mayJune'       },
  { from: '2026-07-01', to: '2026-07-10', s: 'summerHigh'    },
  { from: '2026-07-11', to: '2026-08-16', s: 'summerPeak'    },
  { from: '2026-08-17', to: '2026-08-31', s: 'summerHigh'    },
  { from: '2026-09-01', to: '2026-09-30', s: 'september'     },
  { from: '2026-10-01', to: '2026-10-29', s: 'shoulder'      },
  { from: '2026-10-30', to: '2026-11-08', s: 'autumnHoliday' },
  { from: '2026-11-09', to: '2026-12-20', s: 'low'           },
  { from: '2026-12-21', to: '2027-01-04', s: 'christmasNy'   }
];

// -- Special surcharge weekends (long weekend component only) -----
var SPECIAL_WKNDS = [
  { from: '2026-05-14', to: '2026-05-17', mult: 1.25, name: 'Ascension (+25%)' },
  { from: '2026-05-22', to: '2026-05-25', mult: 1.20, name: 'Pentecost (+20%)' },
  { from: '2026-12-31', to: '2027-01-03', mult: 1.15, name: 'New Year (+15%)' }
];

// -- Calendar limits ----------------------------------------------
var MAX_CO = new Date(2027, 0, 4);
MAX_CO.setHours(0, 0, 0, 0);

// -- State --------------------------------------------------------
var bookedSet = {};
for (var i = 0; i < BOOKED.length; i++) bookedSet[BOOKED[i]] = true;

var today = new Date();
today.setHours(0, 0, 0, 0);
var viewYear  = today.getFullYear();
var viewMonth = today.getMonth();
var checkIn   = null;
var checkOut  = null;

var FALLBACK_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var FALLBACK_DAYS   = ['Mo','Tu','We','Th','Fr','Sa','Su'];

// -- Utilities ----------------------------------------------------
function i18nText(path, fallback) {
  if (window.ZeewindI18n && window.ZeewindI18n.t) {
    return window.ZeewindI18n.t('bookingDynamic.' + path, fallback);
  }
  return fallback;
}

function i18nFormat(path, fallback, values) {
  var text = i18nText(path, fallback);
  values = values || {};
  return text.replace(/\{([a-zA-Z0-9_]+)\}/g, function(match, key) {
    return values[key] === undefined ? match : values[key];
  });
}

function currentLocale() {
  return window.ZeewindI18n && window.ZeewindI18n.locale ? window.ZeewindI18n.locale() : 'en-GB';
}

function dateKey(d) {
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}

function sameDate(a, b) {
  return !!a && !!b && dateKey(a) === dateKey(b);
}

function cloneDate(d) {
  var r = new Date(d.getTime());
  r.setHours(0, 0, 0, 0);
  return r;
}

function addDays(d, n) {
  var r = cloneDate(d);
  r.setDate(r.getDate() + n);
  return r;
}

function dateDiff(a, b) {
  return Math.round((b - a) / 86400000);
}

function parseInputDate(value) {
  if (!value) return null;
  var parts = value.split('-');
  if (parts.length !== 3) return null;
  var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  date.setHours(0, 0, 0, 0);
  return isNaN(date.getTime()) ? null : date;
}

function isBooked(d) { return !!bookedSet[dateKey(d)]; }
function isPast(d)   { return d < today; }

function fmtDate(d) {
  return d ? d.toLocaleDateString(currentLocale(), { day: 'numeric', month: 'short', year: 'numeric' }) : '?';
}

function fmtEur(n) {
  return new Intl.NumberFormat(currentLocale(), {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(n);
}

function setHidden(id, value) {
  var input = document.getElementById(id);
  if (input) input.value = value;
}

// -- Season & price lookups ---------------------------------------
function getSeasonKey(date) {
  var d = dateKey(date);
  for (var i = 0; i < SEASON_RANGES.length; i++) {
    var r = SEASON_RANGES[i];
    if (d >= r.from && d <= r.to) return r.s;
  }
  return 'low';
}

function getSeasonLabel(key) {
  return i18nText('season_' + key, SEASON_LABELS[key] || key);
}

function getPrices(date) {
  return PRICES[getSeasonKey(date)];
}

function getSpecialMult(date) {
  var d = dateKey(date);
  for (var i = 0; i < SPECIAL_WKNDS.length; i++) {
    var sw = SPECIAL_WKNDS[i];
    if (d >= sw.from && d <= sw.to) return sw;
  }
  return null;
}

// -- Booking validation -------------------------------------------
function hasBlockedDate(ci, co) {
  var cur = cloneDate(ci);
  while (cur <= co) {
    if (isBooked(cur)) return true;
    cur = addDays(cur, 1);
  }
  return false;
}

function isValidCheckin(date) {
  var dow = date.getDay();
  return (dow === 1 || dow === 5) &&
         !isPast(date) &&
         !isBooked(date) &&
         date < MAX_CO;
}

function decomposeBooking(ci, co) {
  if (!ci || !co || co <= ci || co > MAX_CO || hasBlockedDate(ci, co)) return null;

  var parts = [];
  var cur = cloneDate(ci);
  var end = cloneDate(co);

  while (cur < end) {
    var dow = cur.getDay();
    var next = null;
    var type = null;

    if (dow === 1) {
      next = addDays(cur, 4);
      type = 'midweek';
    } else if (dow === 5) {
      if (sameDate(addDays(cur, 2), end)) {
        next = addDays(cur, 2);
        type = 'short';
      } else {
        next = addDays(cur, 3);
        type = 'long';
      }
    } else {
      return null;
    }

    if (!next || next > end) return null;
    parts.push({ type: type, from: cloneDate(cur), to: cloneDate(next), nights: dateDiff(cur, next) });
    cur = next;
  }

  return sameDate(cur, end) ? parts : null;
}

function isValidCheckout(ci, co) {
  return !!decomposeBooking(ci, co);
}

function isClickableCalendarDate(date) {
  if (isPast(date) || date > MAX_CO || isBooked(date)) return false;
  if ((checkIn && sameDate(date, checkIn)) || (checkOut && sameDate(date, checkOut))) return true;
  if (!checkIn || checkOut) return isValidCheckin(date);
  if (date > checkIn) return isValidCheckout(checkIn, date);
  return isValidCheckin(date);
}

// -- Price calculation --------------------------------------------
var BLOCK_LABELS = {
  midweek: 'Midweek (Mon-Fri)',
  short:   'Short weekend (Fri-Sun)',
  long:    'Long weekend (Fri-Mon)'
};

function blockLabel(type) {
  return i18nText('block_' + type, BLOCK_LABELS[type] || type);
}

function calcPrice(ci, co) {
  var parts  = decomposeBooking(ci, co) || [];
  var rows   = [];
  var rental = 0;

  parts.forEach(function(p) {
    var pr   = getPrices(p.from);
    var sk   = getSeasonKey(p.from);
    var base = p.type === 'midweek' ? pr.midweek : p.type === 'short' ? pr.short : pr.long;
    var amt  = base;
    var note = getSeasonLabel(sk);

    if (p.type === 'long') {
      var sp = getSpecialMult(p.from);
      if (sp) {
        amt = Math.round(base * sp.mult);
        note += ' - ' + sp.name;
      }
    }

    rental += amt;
    rows.push({ label: blockLabel(p.type), note: note, amt: amt });
  });

  return { rows: rows, rental: rental };
}

function petCount() {
  var select = document.querySelector('select[name="pets"]');
  if (!select || select.value === 'No dog') return 0;
  return select.value === '2 small dogs' ? 2 : 1;
}

function selectedExtras() {
  var totalGuests = g.a + g.k + g.b;
  var extras = [];

  function checked(name) {
    var input = document.querySelector('input[name="' + name + '"]');
    return input && input.checked;
  }

  if (checked('extra_linen')) {
    extras.push({ label: i18nText('extraLinenPlain', 'Bed linen'), amt: FEES.bedLinen });
  }
  if (checked('extra_bath_towels')) {
    extras.push({ label: i18nText('extraBathTowelsPlain', 'Bath towels'), amt: FEES.bathTowelsPerPerson * totalGuests });
  }
  if (checked('extra_beach_towels')) {
    extras.push({ label: i18nText('extraBeachTowelsPlain', 'Beach towels'), amt: FEES.beachTowelsPerPerson * totalGuests });
  }
  if (checked('extra_comfortpack')) {
    extras.push({ label: i18nText('extraComfortPlain', 'Comfort pack'), amt: FEES.comfortPack });
  }

  return extras;
}

function updatePriceSummary() {
  var el = document.getElementById('priceSummary');
  if (!el) return;

  if (!checkIn || !checkOut) {
    el.innerHTML = '<h3>' + i18nText('priceTitle', 'Price estimate') + '</h3>' +
      '<p>' + i18nText('pricePrompt', 'Choose your dates, dogs and extras to see an estimate before sending your request.') + '</p>';
    setHidden('hPrice', '');
    setHidden('hNights', '');
    setHidden('hDogFee', '0');
    setHidden('hExtrasTotal', '0');
    setHidden('hEstimateTotal', '');
    return;
  }

  var info = calcPrice(checkIn, checkOut);
  var dogs = petCount();
  var dogFee = dogs * FEES.dog;
  var extras = selectedExtras();
  var extrasTotal = extras.reduce(function(sum, item) { return sum + item.amt; }, 0);
  var total = info.rental + FEES.cleaning + dogFee + extrasTotal;
  var nights = dateDiff(checkIn, checkOut);

  var html = '<h3>' + i18nText('priceTitle', 'Price estimate') + '</h3>';
  info.rows.forEach(function(row) {
    html += '<div class="ps-row"><span class="ps-label">' + row.label + '<br><small>' + row.note + '</small></span>' +
      '<span class="ps-amt">' + fmtEur(row.amt) + '</span></div>';
  });
  html += '<div class="ps-div"></div>';
  html += '<div class="ps-row"><span class="ps-label">' + i18nText('rentalPrice', 'Rental price') + '</span><span class="ps-amt">' + fmtEur(info.rental) + '</span></div>';
  html += '<div class="ps-row"><span class="ps-label">' + i18nText('cleaningFee', 'Cleaning fee') + '</span><span class="ps-amt">' + fmtEur(FEES.cleaning) + '</span></div>';
  if (dogFee > 0) {
    html += '<div class="ps-row"><span class="ps-label">' + i18nFormat('dogSupplement', 'Dog supplement ({count})', { count: dogs }) + '</span><span class="ps-amt">' + fmtEur(dogFee) + '</span></div>';
  }
  extras.forEach(function(extra) {
    html += '<div class="ps-row"><span class="ps-label">' + extra.label + '</span><span class="ps-amt">' + fmtEur(extra.amt) + '</span></div>';
  });
  html += '<div class="ps-div"></div>';
  html += '<div class="ps-row ps-total"><span class="ps-label">' + i18nText('estimatedTotal', 'Estimated total (excl. deposit & tourist tax)') + '</span><span class="ps-amt">' + fmtEur(total) + '</span></div>';
  html += '<div class="ps-note">' + i18nFormat('depositNote', 'Refundable security deposit {amount} payable separately.', { amount: fmtEur(FEES.deposit) }) + '</div>';
  html += '<div class="ps-note">' + i18nText('taxNote', 'Tourist tax is charged separately according to the applicable local rules.') + '</div>';

  el.innerHTML = html;

  setHidden('hPrice', [
    'Rental: ' + fmtEur(info.rental),
    'Cleaning: ' + fmtEur(FEES.cleaning),
    'Dog supplement: ' + fmtEur(dogFee),
    'Optional extras: ' + fmtEur(extrasTotal),
    'Estimated total excl. tax/deposit: ' + fmtEur(total)
  ].join(' | '));
  setHidden('hNights', nights + ' night' + (nights !== 1 ? 's' : ''));
  setHidden('hDogFee', dogFee);
  setHidden('hExtrasTotal', extrasTotal);
  setHidden('hEstimateTotal', total);
}

// -- Calendar render ----------------------------------------------
function renderCalendar() {
  var grid  = document.getElementById('calGrid');
  var label = document.getElementById('calMonth');
  var months = i18nText('months', FALLBACK_MONTHS);
  var days = i18nText('days', FALLBACK_DAYS);

  grid.innerHTML = '';
  label.textContent = months[viewMonth] + ' ' + viewYear;

  days.forEach(function(d) {
    var el = document.createElement('div');
    el.className = 'cal-dn';
    el.textContent = d;
    grid.appendChild(el);
  });

  var first = new Date(viewYear, viewMonth, 1);
  var startCol = first.getDay() === 0 ? 6 : first.getDay() - 1;
  for (var e = 0; e < startCol; e++) {
    var emp = document.createElement('div');
    emp.className = 'cal-d empty';
    grid.appendChild(emp);
  }

  var dim = new Date(viewYear, viewMonth + 1, 0).getDate();
  for (var day = 1; day <= dim; day++) {
    var date = new Date(viewYear, viewMonth, day);
    date.setHours(0, 0, 0, 0);
    var el = document.createElement('div');
    el.textContent = day;

    var isCi = sameDate(date, checkIn);
    var isCo = sameDate(date, checkOut);
    var inRng = checkIn && checkOut && date > checkIn && date < checkOut;
    var clickable = isClickableCalendarDate(date);

    if (isCi || isCo) {
      el.className = 'cal-d sel';
      el.setAttribute('aria-pressed', 'true');
    } else if (inRng) {
      el.className = 'cal-d range';
    } else if (isPast(date) || date > MAX_CO) {
      el.className = 'cal-d past';
    } else if (isBooked(date)) {
      el.className = 'cal-d booked';
    } else if (clickable) {
      el.className = 'cal-d avail';
    } else {
      el.className = 'cal-d nostart';
    }

    if (clickable) {
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      (function(d) {
        el.onclick = function() { dayClick(d); };
        el.onkeydown = function(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            dayClick(d);
          }
        };
      })(date);
    }
    grid.appendChild(el);
  }

  var atMin = today.getFullYear() === viewYear && today.getMonth() === viewMonth;
  var atMax = viewYear === 2027 && viewMonth === 0;
  document.getElementById('btnPrev').disabled = atMin;
  document.getElementById('btnNext').disabled = atMax;
  updateSummary();
}

// -- Day click ----------------------------------------------------
function clearSelection(keepCheckin) {
  if (!keepCheckin) checkIn = null;
  checkOut = null;
  syncDateInputs();
}

function syncDateInputs() {
  document.getElementById('inDate').value = checkIn ? dateKey(checkIn) : '';
  document.getElementById('outDate').value = checkOut ? dateKey(checkOut) : '';
}

function dayClick(date) {
  if (isPast(date) || date > MAX_CO || isBooked(date)) return;

  if (!checkIn) {
    if (isValidCheckin(date)) checkIn = date;
  } else if (!checkOut) {
    if (sameDate(date, checkIn)) {
      clearSelection(false);
    } else if (date > checkIn && isValidCheckout(checkIn, date)) {
      checkOut = date;
    } else if (isValidCheckin(date)) {
      checkIn = date;
      checkOut = null;
    }
  } else {
    if (sameDate(date, checkOut)) {
      clearSelection(true);
    } else if (sameDate(date, checkIn)) {
      clearSelection(false);
    } else if (isValidCheckin(date)) {
      checkIn = date;
      checkOut = null;
    }
  }

  syncDateInputs();
  renderCalendar();
}

function syncInputDates() {
  var ci = parseInputDate(document.getElementById('inDate').value);
  var co = parseInputDate(document.getElementById('outDate').value);

  if (!ci && !co) {
    checkIn = null;
    checkOut = null;
    renderCalendar();
    return;
  }

  if (!ci || !isValidCheckin(ci)) {
    alert(i18nText('invalidCheckin', 'Check-in is only possible on Monday or Friday on an available date.'));
    syncDateInputs();
    return;
  }

  checkIn = ci;
  if (!co) {
    checkOut = null;
    renderCalendar();
    return;
  }

  if (!isValidCheckout(ci, co)) {
    alert(i18nText('invalidCheckout', 'Choose a valid check-out: Friday or Monday, or Sunday only for a short weekend.'));
    checkOut = null;
    syncDateInputs();
    renderCalendar();
    return;
  }

  checkOut = co;
  renderCalendar();
}

// -- Summary ------------------------------------------------------
function updateSummary() {
  var el = document.getElementById('selSummary');
  if (!checkIn) {
    el.innerHTML = i18nText('clickCheckin', 'Click a Monday or Friday to choose your check-in.');
  } else if (!checkOut) {
    el.innerHTML = i18nFormat('pickCheckout', 'Check-in: <b>{date}</b> - now select a valid check-out.', { date: fmtDate(checkIn) });
  } else {
    var nights = dateDiff(checkIn, checkOut);
    var nightLabel = nights === 1 ? i18nText('night', 'night') : i18nText('nights', 'nights');
    el.innerHTML = i18nFormat('rangeSummary', '<b>{checkin}</b> to <b>{checkout}</b> - {nights} {nightLabel}', {
      checkin: fmtDate(checkIn),
      checkout: fmtDate(checkOut),
      nights: nights,
      nightLabel: nightLabel
    });
  }
  updatePriceSummary();
}

// -- Calendar navigation ------------------------------------------
document.getElementById('btnPrev').onclick = function() {
  viewMonth--;
  if (viewMonth < 0) { viewMonth = 11; viewYear--; }
  renderCalendar();
};

document.getElementById('btnNext').onclick = function() {
  if (viewYear === 2027 && viewMonth === 0) return;
  viewMonth++;
  if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  renderCalendar();
};

// -- Guest steppers -----------------------------------------------
var g = { a: 1, k: 0, b: 0 };

function updateGuests() {
  document.getElementById('aVal').textContent = g.a;
  document.getElementById('kVal').textContent = g.k;
  document.getElementById('bVal').textContent = g.b;
  var total = g.a + g.k + g.b;
  document.getElementById('hAdults').value = g.a;
  document.getElementById('hKids').value = g.k;
  document.getElementById('hBabies').value = g.b;
  document.getElementById('hTotal').value = total;
  var tEl = document.getElementById('gTotal');
  tEl.textContent = i18nFormat('guestTotal', 'Total: {total} / 6 guests', { total: total });
  tEl.className = 'guest-total' + (total > 6 ? ' over' : '');
  document.getElementById('aMin').disabled = (g.a <= 1);
  document.getElementById('kMin').disabled = (g.k <= 0);
  document.getElementById('bMin').disabled = (g.b <= 0);
  document.getElementById('aPlus').disabled = (total >= 6);
  document.getElementById('kPlus').disabled = (total >= 6);
  document.getElementById('bPlus').disabled = (total >= 6);
  updatePriceSummary();
}

document.getElementById('aMin').onclick  = function() { if (g.a > 1) { g.a--; updateGuests(); } };
document.getElementById('aPlus').onclick = function() { if (g.a + g.k + g.b < 6) { g.a++; updateGuests(); } };
document.getElementById('kMin').onclick  = function() { if (g.k > 0) { g.k--; updateGuests(); } };
document.getElementById('kPlus').onclick = function() { if (g.a + g.k + g.b < 6) { g.k++; updateGuests(); } };
document.getElementById('bMin').onclick  = function() { if (g.b > 0) { g.b--; updateGuests(); } };
document.getElementById('bPlus').onclick = function() { if (g.a + g.k + g.b < 6) { g.b++; updateGuests(); } };

// -- Extras -------------------------------------------------------
function setExtraState(input) {
  var item = input.closest('.extra-item');
  if (item) item.classList.toggle('on', input.checked);
}

function initExtras() {
  var inputs = document.querySelectorAll('.extra-item input[type="checkbox"]');
  for (var i = 0; i < inputs.length; i++) {
    setExtraState(inputs[i]);
    inputs[i].addEventListener('change', function() {
      setExtraState(this);
      updatePriceSummary();
    });
  }

  var tips = document.querySelectorAll('.tip-wrap');
  for (var j = 0; j < tips.length; j++) {
    tips[j].addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
    });
  }

  var pets = document.querySelector('select[name="pets"]');
  if (pets) {
    pets.addEventListener('change', updatePriceSummary);
  }
}

function toggleExtra(el) {
  var input = el.querySelector('input[type="checkbox"]');
  if (!input) return;
  input.checked = !input.checked;
  setExtraState(input);
  updatePriceSummary();
}

// -- Form submit --------------------------------------------------
function validateStay() {
  if (!checkIn || !checkOut || !isValidCheckout(checkIn, checkOut)) {
    alert(i18nText('missingStay', 'Please choose a valid check-in and check-out date.'));
    return false;
  }
  return true;
}

document.getElementById('bookingForm').onsubmit = function(e) {
  e.preventDefault();
  if (!validateStay()) return;

  var data = new FormData(this);
  fetch(this.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(r) {
    if (r.ok) {
      document.getElementById('formArea').style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
    } else {
      alert(i18nText('formError', 'Something went wrong. Please try again or contact us directly.'));
    }
  }).catch(function() {
    alert(i18nText('networkError', 'Could not send. Please contact us directly by email.'));
  });
};

// -- Init ---------------------------------------------------------
document.getElementById('inDate').addEventListener('change', syncInputDates);
document.getElementById('outDate').addEventListener('change', syncInputDates);
window.addEventListener('zeewind:languagechange', function() {
  renderCalendar();
  updateGuests();
});

renderCalendar();
updateGuests();
initExtras();
