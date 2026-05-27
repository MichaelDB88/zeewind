// ================================================================
//  BOOKING CALENDAR -- Holiday Home Zeebries
//  Changeover days: Monday and Friday only
//  Valid blocks:
//    Midweek       Mon -> Fri  (4 nights)
//    Short weekend Fri -> Sun  (2 nights)   <- only valid Sun checkout
//    Long weekend  Fri -> Mon  (3 nights)
//    Full week     Mon -> Mon or Fri -> Fri  (7 nights)
//    Longer stays: valid combinations of the above
// ================================================================

// -- Booked dates -------------------------------------------------
//  Add / remove dates here (format: "YYYY-MM-DD") to block nights
// ================================================================
var BOOKED = [
  "2026-06-01","2026-06-02","2026-06-03","2026-06-04","2026-06-05","2026-06-06","2026-06-07",
  "2026-07-12","2026-07-13","2026-07-14","2026-07-15","2026-07-16","2026-07-17","2026-07-18","2026-07-19",
  "2026-08-02","2026-08-03","2026-08-04","2026-08-05","2026-08-06","2026-08-07","2026-08-08",
  "2026-08-09","2026-08-10","2026-08-11","2026-08-12","2026-08-13","2026-08-14","2026-08-15"
];

// -- Season prices ------------------------------------------------
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
  { from: '2026-01-05', to: '2026-02-22', s: 'low'           },
  { from: '2026-02-23', to: '2026-02-28', s: 'low'           },
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
  { from: '2026-05-22', to: '2026-05-25', mult: 1.20, name: 'Pentecost (+20%)' }
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

var MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var DAYS   = ['Mo','Tu','We','Th','Fr','Sa','Su'];

// -- Utilities ----------------------------------------------------
function dateKey(d) {
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}
function isBooked(d)   { return !!bookedSet[dateKey(d)]; }
function isPast(d)     { return d < today; }
function addDays(d, n) { var r = new Date(d.getTime()); r.setDate(r.getDate() + n); return r; }
function fmtDate(d)    { return d ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '?'; }
function fmtEur(n)     { return '€ ' + n.toLocaleString('en-GB'); }

// -- Season & price lookups ---------------------------------------
function getSeasonKey(date) {
  var d = dateKey(date);
  for (var i = 0; i < SEASON_RANGES.length; i++) {
    var r = SEASON_RANGES[i];
    if (d >= r.from && d <= r.to) return r.s;
  }
  return 'low';
}
function getPrices(date) { return PRICES[getSeasonKey(date)]; }

function getSpecialMult(date) {
  var d = dateKey(date);
  for (var i = 0; i < SPECIAL_WKNDS.length; i++) {
    var sw = SPECIAL_WKNDS[i];
    if (d >= sw.from && d <= sw.to) return sw;
  }
  return null;
}

// -- Booking validation -------------------------------------------
function isValidCheckin(date) {
  var dow = date.getDay();
  return (dow === 1 || dow === 5) &&
         !isPast(date) &&
         !isBooked(date) &&
         date < MAX_CO;
}

function isValidCheckout(ci, co) {
  if (!co || co <= ci)  return false;
  if (co > MAX_CO)      return false;
  var cur = addDays(ci, 1);
  while (cur < co) {
    if (isBooked(cur)) return false;
    cur = addDays(cur, 1);
  }
  var ciD = ci.getDay();
  var coD = co.getDay();
  var n   = Math.round((co - ci) / 86400000);
  if (ciD === 1) {
    if (coD === 5) return (n - 4) % 7 === 0;
    if (coD === 1) return  n      % 7 === 0;
    return false;
  }
  if (ciD === 5) {
    if (coD === 0) return n === 2;
    if (coD === 1) return (n - 3) % 7 === 0;
    if (coD === 5) return  n      % 7 === 0;
    return false;
  }
  return false;
}

// -- Booking decomposition ----------------------------------------
function decomposeBooking(ci, co) {
  var parts = [];
  var cur   = new Date(ci.getTime()); cur.setHours(0, 0, 0, 0);
  var end   = new Date(co.getTime()); end.setHours(0, 0, 0, 0);
  while (cur.getTime() < end.getTime()) {
    var dow = cur.getDay();
    if (dow === 1) {
      parts.push({ type: 'midweek', from: new Date(cur) });
      cur = addDays(cur, 4);
    } else if (dow === 5) {
      var sun = addDays(cur, 2);
      if (end.getTime() === sun.getTime()) {
        parts.push({ type: 'short', from: new Date(cur) });
        cur = sun;
      } else {
        parts.push({ type: 'long', from: new Date(cur) });
        cur = addDays(cur, 3);
      }
    } else { break; }
  }
  return parts;
}

// -- Price calculation --------------------------------------------
var BLOCK_LABELS = {
  midweek: 'Midweek (Mon-Fri)',
  short:   'Short weekend (Fri-Sun)',
  long:    'Long weekend (Fri-Mon)'
};

function calcPrice(ci, co) {
  var parts  = decomposeBooking(ci, co);
  var rows   = [];
  var rental = 0;
  parts.forEach(function(p) {
    var pr   = getPrices(p.from);
    var sk   = getSeasonKey(p.from);
    var base = p.type === 'midweek' ? pr.midweek : p.type === 'short' ? pr.short : pr.long;
    var amt  = base;
    var note = SEASON_LABELS[sk];
    if (p.type === 'long') {
      var sp = getSpecialMult(p.from);
      if (sp) { amt = Math.round(base * sp.mult); note += ' - ' + sp.name; }
    }
    rental += amt;
    rows.push({ label: BLOCK_LABELS[p.type], note: note, amt: amt });
  });
  return { rows: rows, rental: rental, cleaning: 110, deposit: 350 };
}

// -- Calendar render ----------------------------------------------
function renderCalendar() {
  var grid  = document.getElementById('calGrid');
  var label = document.getElementById('calMonth');
  grid.innerHTML = '';
  label.textContent = MONTHS[viewMonth] + ' ' + viewYear;

  DAYS.forEach(function(d) {
    var el = document.createElement('div');
    el.className = 'cal-dn'; el.textContent = d; grid.appendChild(el);
  });

  var first    = new Date(viewYear, viewMonth, 1);
  var startCol = first.getDay() === 0 ? 6 : first.getDay() - 1;
  for (var e = 0; e < startCol; e++) {
    var emp = document.createElement('div'); emp.className = 'cal-d empty'; grid.appendChild(emp);
  }

  var dim = new Date(viewYear, viewMonth + 1, 0).getDate();
  for (var day = 1; day <= dim; day++) {
    var date = new Date(viewYear, viewMonth, day);
    date.setHours(0, 0, 0, 0);
    var el  = document.createElement('div');
    el.textContent = day;
    var key   = dateKey(date);
    var isCi  = checkIn  && dateKey(checkIn)  === key;
    var isCo  = checkOut && dateKey(checkOut) === key;
    var inRng = checkIn && checkOut && date > checkIn && date < checkOut;
    var cls;

    if (isCi || isCo) {
      cls = 'cal-d sel';
    } else if (inRng) {
      cls = 'cal-d range';
    } else if (isPast(date) || date > MAX_CO) {
      cls = 'cal-d past';
    } else if (isBooked(date)) {
      cls = 'cal-d booked';
    } else if (!checkIn) {
      if (isValidCheckin(date)) {
        cls = 'cal-d avail';
        (function(d) { el.onclick = function() { dayClick(d); }; })(date);
      } else {
        cls = 'cal-d nostart';
      }
    } else {
      if (isValidCheckout(checkIn, date)) {
        cls = 'cal-d avail';
        (function(d) { el.onclick = function() { dayClick(d); }; })(date);
      } else if (date > checkIn) {
        cls = 'cal-d nostart';
      } else {
        cls = 'cal-d past';
      }
    }
    el.className = cls;
    grid.appendChild(el);
  }

  var atMin = today.getFullYear() === viewYear && today.getMonth() === viewMonth;
  var atMax = viewYear === 2027 && viewMonth === 0;
  document.getElementById('btnPrev').disabled = atMin;
  document.getElementById('btnNext').disabled = atMax;
  updateSummary();
}

// -- Day click ----------------------------------------------------
function dayClick(date) {
  var key = dateKey(date);
  if (!checkIn) {
    if (isValidCheckin(date)) { checkIn = date; checkOut = null; }
  } else if (!checkOut) {
    if (key === dateKey(checkIn)) {
      checkIn = null; checkOut = null;
    } else if (isValidCheckout(checkIn, date)) {
      checkOut = date;
      document.getElementById('inDate').value  = dateKey(checkIn);
      document.getElementById('outDate').value = dateKey(checkOut);
      var info   = calcPrice(checkIn, checkOut);
      var nights = Math.round((checkOut - checkIn) / 86400000);
      var hp = document.getElementById('hPrice');
      if (hp) hp.value = '€' + info.rental + ' rental + €110 cleaning';
      var hn = document.getElementById('hNights');
      if (hn) hn.value = nights + ' night' + (nights !== 1 ? 's' : '');
    } else if (isValidCheckin(date)) {
      checkIn = date; checkOut = null;
      document.getElementById('inDate').value  = '';
      document.getElementById('outDate').value = '';
    }
  } else {
    checkIn = null; checkOut = null;
    document.getElementById('inDate').value  = '';
    document.getElementById('outDate').value = '';
    if (isValidCheckin(date)) checkIn = date;
  }
  renderCalendar();
}

// -- Price summary ------------------------------------------------
function updateSummary() {
  var el = document.getElementById('selSummary');
  if (!checkIn) {
    el.innerHTML = 'Click a <strong>Monday</strong> or <strong>Friday</strong> to set your check-in.';
    return;
  }
  if (!checkOut) {
    el.innerHTML = 'Check-in: <b>' + fmtDate(checkIn) + '</b> &mdash; now select a check-out date.';
    return;
  }
  var n    = Math.round((checkOut - checkIn) / 86400000);
  var info = calcPrice(checkIn, checkOut);

  var h = '<div class="ps-dates"><b>' + fmtDate(checkIn) + '</b>&nbsp;&rarr;&nbsp;<b>' + fmtDate(checkOut) + '</b>' +
          '<span class="ps-nights">&nbsp;&nbsp;' + n + '&thinsp;night' + (n !== 1 ? 's' : '') + '</span></div>';

  info.rows.forEach(function(r) {
    h += '<div class="ps-row"><span class="ps-label">' + r.label + '<br><small>' + r.note + '</small></span>' +
         '<span class="ps-amt">' + fmtEur(r.amt) + '</span></div>';
  });

  h += '<div class="ps-row"><span class="ps-label">Cleaning fee</span>' +
       '<span class="ps-amt">' + fmtEur(110) + '</span></div>';
  h += '<div class="ps-div"></div>';
  h += '<div class="ps-row ps-total"><span class="ps-label">Total (excl. deposit &amp; taxes)</span>' +
       '<span class="ps-amt">' + fmtEur(info.rental + 110) + '</span></div>';
  h += '<div class="ps-note">+ Refundable security deposit ' + fmtEur(350) + ' payable at check-in</div>';
  h += '<div class="ps-note">+ Tourist tax charged separately &middot; Dog supplement ' + fmtEur(35) + '/dog if applicable</div>';
  el.innerHTML = h;
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
  document.getElementById('hAdults').value  = g.a;
  document.getElementById('hKids').value    = g.k;
  document.getElementById('hBabies').value  = g.b;
  document.getElementById('hTotal').value   = total;
  var tEl = document.getElementById('gTotal');
  tEl.textContent = 'Total: ' + total + ' / 6 guests';
  tEl.className = 'guest-total' + (total > 6 ? ' over' : '');
  document.getElementById('aMin').disabled  = (g.a <= 1);
  document.getElementById('kMin').disabled  = (g.k <= 0);
  document.getElementById('bMin').disabled  = (g.b <= 0);
  document.getElementById('aPlus').disabled = (total >= 6);
  document.getElementById('kPlus').disabled = (total >= 6);
  document.getElementById('bPlus').disabled = (total >= 6);
}
document.getElementById('aMin').onclick  = function() { if (g.a > 1)         { g.a--; updateGuests(); } };
document.getElementById('aPlus').onclick = function() { if (g.a+g.k+g.b < 6) { g.a++; updateGuests(); } };
document.getElementById('kMin').onclick  = function() { if (g.k > 0)         { g.k--; updateGuests(); } };
document.getElementById('kPlus').onclick = function() { if (g.a+g.k+g.b < 6) { g.k++; updateGuests(); } };
document.getElementById('bMin').onclick  = function() { if (g.b > 0)         { g.b--; updateGuests(); } };
document.getElementById('bPlus').onclick = function() { if (g.a+g.k+g.b < 6) { g.b++; updateGuests(); } };

// -- Extras -------------------------------------------------------
function toggleExtra(el) {
  var cb = el.querySelector('input');
  cb.checked = !cb.checked;
  el.classList.toggle('on', cb.checked);
}

// -- Form submit --------------------------------------------------
document.getElementById('bookingForm').onsubmit = function(e) {
  e.preventDefault();
  var data = new FormData(this);
  fetch(this.action, {
    method: 'POST', body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(r) {
    if (r.ok) {
      document.getElementById('formArea').style.display  = 'none';
      document.getElementById('successMsg').style.display = 'block';
    } else {
      alert('Something went wrong. Please try again or contact us directly.');
    }
  }).catch(function() {
    alert('Could not send. Please contact us directly by email.');
  });
};

// -- Init ---------------------------------------------------------
renderCalendar();
updateGuests();
