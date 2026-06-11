// ================================================================
//  BOOKING CALENDAR -- Holiday Home Zeebries
//  Changeover days: Monday and Friday (Saturday in July-August)
//  Valid blocks:
//    Midweek   Mon -> Fri  (4 nights)
//    Weekend   Fri -> Mon  (3 nights)
//    Week      7 nights  (week package price)
//    Two weeks 14 nights (two-week package price, maximum stay)
//    July-August: weekly rental only, Saturday to Saturday (7 or 14 nights)
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
// Per-stay package prices (price list 2026). All prices include 6% VAT.
var PRICES = {
  low:           { midweek: 315, weekend: 350, week:  525, twoWeeks:  950 },
  shoulder:      { midweek: 395, weekend: 450, week:  675, twoWeeks: 1250 },
  holiday:       { midweek: 475, weekend: 525, week:  825, twoWeeks: 1550 },
  easter:        { midweek: 525, weekend: 575, week:  895, twoWeeks: 1675 },
  summerHigh:    { midweek: null, weekend: null, week: 1050, twoWeeks: 2095 },
  summerPeak:    { midweek: null, weekend: null, week: 1150, twoWeeks: 2095 },
  christmasWeek: { midweek: 525, weekend: 625, week:  895, twoWeeks: 1695 },
  newYearWeek:   { midweek: 550, weekend: 675, week:  925, twoWeeks: 1695 }
};

var FEES = {
  cleaning: 85,
  deposit: 250,
  dogPerStay: 30,            // per dog per stay, max 2 dogs
  bedLinenPerPerson: 15,
  bathTowelsPerPerson: 10,
  beachTowelsPerPerson: 10,
  babyPack: 20,
  comfortPack: 50
};

var SEASON_LABELS = {
  low:           'Low season',
  shoulder:      'Mid season',
  holiday:       'School holiday',
  easter:        'Easter holiday',
  summerHigh:    'Summer',
  summerPeak:    'Summer peak',
  christmasWeek: 'Christmas week',
  newYearWeek:   'New Year week'
};

// -- 2026 season date ranges --------------------------------------
var SEASON_RANGES = [
  { from: '2025-12-21', to: '2025-12-27', s: 'christmasWeek' },
  { from: '2025-12-28', to: '2026-01-04', s: 'newYearWeek'   },
  { from: '2026-01-05', to: '2026-02-13', s: 'low'           },
  { from: '2026-02-14', to: '2026-02-22', s: 'holiday'       },
  { from: '2026-02-23', to: '2026-03-15', s: 'low'           },
  { from: '2026-03-16', to: '2026-04-02', s: 'shoulder'      },
  { from: '2026-04-03', to: '2026-04-19', s: 'easter'        },
  { from: '2026-04-20', to: '2026-07-03', s: 'shoulder'      },
  { from: '2026-07-04', to: '2026-07-10', s: 'summerHigh'    },
  { from: '2026-07-11', to: '2026-08-14', s: 'summerPeak'    },
  { from: '2026-08-15', to: '2026-08-30', s: 'summerHigh'    },
  { from: '2026-08-31', to: '2026-10-29', s: 'shoulder'      },
  { from: '2026-10-30', to: '2026-11-08', s: 'holiday'       },
  { from: '2026-11-09', to: '2026-12-18', s: 'low'           },
  { from: '2026-12-19', to: '2026-12-27', s: 'christmasWeek' },
  { from: '2026-12-28', to: '2027-01-04', s: 'newYearWeek'   }
];

// -- Public-holiday weekends (flat weekend price) ------------------
var HOLIDAY_WEEKEND_PRICE = 625;
var HOLIDAY_WKNDS = [
  { from: '2026-04-03', to: '2026-04-06', name: 'Easter weekend'      },
  { from: '2026-05-01', to: '2026-05-04', name: '1 May weekend'       },
  { from: '2026-05-15', to: '2026-05-18', name: 'Ascension weekend'   },
  { from: '2026-05-22', to: '2026-05-25', name: 'Pentecost weekend'   },
  { from: '2026-10-30', to: '2026-11-02', name: 'All Saints weekend'  }
];

// -- Summer Saturday-to-Saturday week grid (July-August) -----------
var SUMMER_FIRST_SAT = '2026-07-04';
var SUMMER_LAST_SAT  = '2026-08-29';

function stayTouchesSummer(ci, co) {
  return dateKey(co) > SUMMER_FIRST_SAT && dateKey(ci) < SUMMER_LAST_SAT;
}

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

function getHolidayWeekend(date) {
  var d = dateKey(date);
  for (var i = 0; i < HOLIDAY_WKNDS.length; i++) {
    var hw = HOLIDAY_WKNDS[i];
    if (d >= hw.from && d < hw.to) return hw;
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
  if (isPast(date) || isBooked(date) || date >= MAX_CO) return false;
  var k = dateKey(date);
  if (k >= SUMMER_FIRST_SAT && k < SUMMER_LAST_SAT) return date.getDay() === 6;
  var dow = date.getDay();
  return dow === 1 || dow === 5;
}

function decomposeBooking(ci, co) {
  if (!ci || !co || co <= ci || co > MAX_CO || hasBlockedDate(ci, co)) return null;

  var nights = dateDiff(ci, co);
  if (nights > 14) return null;

  // July-August: Saturday-to-Saturday weeks only (7 or 14 nights)
  if (stayTouchesSummer(ci, co)) {
    if (ci.getDay() !== 6 || co.getDay() !== 6) return null;
    if (nights !== 7 && nights !== 14) return null;
    if (dateKey(ci) < SUMMER_FIRST_SAT || dateKey(co) > SUMMER_LAST_SAT) return null;
    var weeks = [];
    var c = cloneDate(ci);
    while (c < co) {
      weeks.push({ type: 'week', from: cloneDate(c), to: addDays(c, 7), nights: 7 });
      c = addDays(c, 7);
    }
    return weeks;
  }

  // Outside summer: Monday/Friday changeovers, midweek + weekend blocks
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
      next = addDays(cur, 3);
      type = 'weekend';
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
  midweek:  'Midweek (Mon-Fri)',
  weekend:  'Weekend (Fri-Mon)',
  week:     'Week (7 nights)',
  twoWeeks: 'Two weeks (14 nights)'
};

function blockLabel(type) {
  return i18nText('block_' + type, BLOCK_LABELS[type] || type);
}

function calcPrice(ci, co) {
  var parts  = decomposeBooking(ci, co) || [];
  var nights = dateDiff(ci, co);
  var rows   = [];
  var rental = 0;

  if (!parts.length) return { rows: rows, rental: rental };

  // Summer: priced per Saturday week, or as a two-week package
  if (parts[0].type === 'week') {
    if (nights === 14) {
      var skTwo = getSeasonKey(ci);
      var amtTwo = PRICES[skTwo].twoWeeks;
      rows.push({ label: blockLabel('twoWeeks'), note: getSeasonLabel(skTwo), amt: amtTwo });
      return { rows: rows, rental: amtTwo };
    }
    parts.forEach(function(p) {
      var sk = getSeasonKey(p.from);
      var amt = PRICES[sk].week;
      rows.push({ label: blockLabel('week'), note: getSeasonLabel(sk), amt: amt });
      rental += amt;
    });
    return { rows: rows, rental: rental };
  }

  // Two-week package price (covers Christmas + New Year combination too)
  if (nights === 14) {
    var sk14 = getSeasonKey(ci);
    var amt14 = PRICES[sk14].twoWeeks;
    rows.push({ label: blockLabel('twoWeeks'), note: getSeasonLabel(sk14), amt: amt14 });
    return { rows: rows, rental: amt14 };
  }

  var remaining = parts.slice();

  // First 7 nights of stays of a week or longer use the week package price
  if (nights >= 7) {
    var skW = getSeasonKey(ci);
    var amtW = PRICES[skW].week;
    rows.push({ label: blockLabel('week'), note: getSeasonLabel(skW), amt: amtW });
    rental += amtW;
    var acc = 0;
    while (acc < 7 && remaining.length) {
      acc += remaining[0].nights;
      remaining.shift();
    }
  }

  remaining.forEach(function(p) {
    var sk = getSeasonKey(p.from);
    var amt, note = getSeasonLabel(sk);
    if (p.type === 'midweek') {
      amt = PRICES[sk].midweek;
    } else {
      var hw = getHolidayWeekend(p.from);
      if (hw) {
        amt = HOLIDAY_WEEKEND_PRICE;
        note += ' - ' + i18nText('holidayWeekend', 'Public-holiday weekend');
      } else {
        amt = PRICES[sk].weekend;
      }
    }
    rental += amt;
    rows.push({ label: blockLabel(p.type), note: note, amt: amt });
  });

  return { rows: rows, rental: rental };
}

function petSelection() {
  var select = document.querySelector('select[name="pets"]');
  if (!select || select.value === 'No dog') return { count: 0, fee: 0 };
  var count = select.value === '2 dogs' ? 2 : 1;
  return { count: count, fee: count * FEES.dogPerStay };
}

function selectedExtras() {
  var totalGuests = g.a + g.k + g.b;
  var extras = [];

  function checked(name) {
    var input = document.querySelector('input[name="' + name + '"]');
    return input && input.checked;
  }

  if (checked('extra_linen')) {
    extras.push({ label: i18nText('extraLinenPlain', 'Bed linen'), amt: FEES.bedLinenPerPerson * totalGuests });
  }
  if (checked('extra_bath_towels')) {
    extras.push({ label: i18nText('extraBathTowelsPlain', 'Bath towels'), amt: FEES.bathTowelsPerPerson * totalGuests });
  }
  if (checked('extra_beach_towels')) {
    extras.push({ label: i18nText('extraBeachTowelsPlain', 'Beach towels'), amt: FEES.beachTowelsPerPerson * totalGuests });
  }
  if (checked('extra_babypack')) {
    extras.push({ label: i18nText('extraBabyPackPlain', 'Baby package'), amt: FEES.babyPack });
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
      '<p>' + i18nText('pricePrompt', 'Please choose your dates, number of guests and extras to see an estimate before sending your request.') + '</p>' +
      '<p>' + i18nText('vatNote', 'All prices shown include VAT.') + '</p>';
    setHidden('hPrice', '');
    setHidden('hNights', '');
    setHidden('hDogFee', '0');
    setHidden('hExtrasTotal', '0');
    setHidden('hEstimateTotal', '');
    return;
  }

  var info = calcPrice(checkIn, checkOut);
  var pet = petSelection();
  var dogs = pet.count;
  var dogFee = pet.fee;
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
  html += '<div class="ps-note">' + i18nText('vatNote', 'All prices shown include VAT.') + '</div>';
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
    alert(i18nText('invalidCheckin', 'Check-in is only possible on Monday or Friday (Saturday in July and August) on an available date.'));
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
    alert(i18nText('invalidCheckout', 'Choose a valid check-out on Monday or Friday (Saturday in July and August).'));
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
    el.innerHTML = i18nText('clickCheckin', 'Click a Monday or Friday (Saturday in July and August) to choose your check-in.');
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
