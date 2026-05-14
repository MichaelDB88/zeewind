// ════════════════════════════════════════════════════════════════
//  BOOKED DATES — add/remove dates here to control the calendar
//  Format: "YYYY-MM-DD"
// ════════════════════════════════════════════════════════════════
var BOOKED = [
  "2026-06-01","2026-06-02","2026-06-03","2026-06-04","2026-06-05","2026-06-06","2026-06-07",
  "2026-07-12","2026-07-13","2026-07-14","2026-07-15","2026-07-16","2026-07-17","2026-07-18","2026-07-19",
  "2026-08-02","2026-08-03","2026-08-04","2026-08-05","2026-08-06","2026-08-07","2026-08-08",
  "2026-08-09","2026-08-10","2026-08-11","2026-08-12","2026-08-13","2026-08-14","2026-08-15"
];

// ── Calendar ──────────────────────────────────────────────────
var bookedSet = {};
for (var i = 0; i < BOOKED.length; i++) bookedSet[BOOKED[i]] = true;

var today = new Date();
today.setHours(0,0,0,0);
var viewYear  = today.getFullYear();
var viewMonth = today.getMonth();
var checkIn  = null;
var checkOut = null;
var pickIn   = true;

var DEFAULT_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var DEFAULT_DAYS   = ["Mo","Tu","We","Th","Fr","Sa","Su"];

function i18n(key, fallback) {
  if (window.ZeewindI18n) return window.ZeewindI18n.t('bookingDynamic.' + key, fallback);
  return fallback;
}

function i18nArray(key, fallback) {
  var value = i18n(key, fallback);
  return Array.isArray(value) ? value : fallback;
}

function i18nTemplate(key, fallback, values) {
  var text = i18n(key, fallback);
  for (var name in values) {
    text = text.replace(new RegExp('\\{' + name + '\\}', 'g'), values[name]);
  }
  return text;
}

function currentLocale() {
  return window.ZeewindI18n ? window.ZeewindI18n.locale() : 'en-GB';
}

function dateKey(d) {
  var mm = String(d.getMonth()+1).padStart(2,'0');
  var dd = String(d.getDate()).padStart(2,'0');
  return d.getFullYear() + '-' + mm + '-' + dd;
}

function isBooked(d) { return !!bookedSet[dateKey(d)]; }
function isPast(d)   { return d < today; }

function fmtDate(d) {
  if (!d) return '?';
  return d.toLocaleDateString(currentLocale(), {day:'numeric', month:'short', year:'numeric'});
}

function rangeHasBooked(a, b) {
  var cur = new Date(a.getTime());
  cur.setDate(cur.getDate() + 1);
  while (cur < b) {
    if (isBooked(cur)) return true;
    cur.setDate(cur.getDate() + 1);
  }
  return false;
}

function renderCalendar() {
  var grid  = document.getElementById('calGrid');
  var label = document.getElementById('calMonth');
  var months = i18nArray('months', DEFAULT_MONTHS);
  var days = i18nArray('days', DEFAULT_DAYS);
  grid.innerHTML = '';
  label.textContent = months[viewMonth] + ' ' + viewYear;

  for (var n = 0; n < days.length; n++) {
    var dn = document.createElement('div');
    dn.className = 'cal-dn';
    dn.textContent = days[n];
    grid.appendChild(dn);
  }

  var first = new Date(viewYear, viewMonth, 1);
  var startCol = first.getDay() === 0 ? 6 : first.getDay() - 1;

  for (var e = 0; e < startCol; e++) {
    var emp = document.createElement('div');
    emp.className = 'cal-d empty';
    grid.appendChild(emp);
  }

  var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  for (var day = 1; day <= daysInMonth; day++) {
    var date = new Date(viewYear, viewMonth, day);
    date.setHours(0,0,0,0);
    var el = document.createElement('div');
    el.textContent = day;
    var key  = dateKey(date);
    var isCi = checkIn  && dateKey(checkIn)  === key;
    var isCo = checkOut && dateKey(checkOut) === key;
    var inRng = checkIn && checkOut && date > checkIn && date < checkOut;

    if (isCi || isCo) {
      el.className = 'cal-d sel';
    } else if (inRng) {
      el.className = 'cal-d range';
    } else if (isPast(date)) {
      el.className = 'cal-d past';
    } else if (isBooked(date)) {
      el.className = 'cal-d booked';
    } else {
      el.className = 'cal-d avail';
      (function(d){ el.onclick = function(){ dayClick(d); }; })(date);
    }
    grid.appendChild(el);
  }

  var nowMonth = today.getFullYear() === viewYear && today.getMonth() === viewMonth;
  document.getElementById('btnPrev').disabled = nowMonth;
  updateSummary();
}

function dayClick(date) {
  if (isPast(date) || isBooked(date)) return;
  if (pickIn || (checkIn && date <= checkIn)) {
    checkIn  = date;
    checkOut = null;
    pickIn   = false;
  } else {
    if (rangeHasBooked(checkIn, date)) {
      alert(i18n('bookedRangeAlert', 'Your range includes booked dates. Please choose different dates.'));
      return;
    }
    checkOut = date;
    pickIn   = true;
    document.getElementById('inDate').value  = dateKey(checkIn);
    document.getElementById('outDate').value = dateKey(checkOut);
  }
  renderCalendar();
}

function updateSummary() {
  var el = document.getElementById('selSummary');
  if (!checkIn) {
    el.innerHTML = i18n('clickCheckin', 'Click a date to set your check-in.');
  } else if (!checkOut) {
    el.innerHTML = i18nTemplate('pickCheckout', 'Check-in: <b>{date}</b> — Now pick your check-out.', {
      date: fmtDate(checkIn)
    });
  } else {
    var nights = Math.round((checkOut - checkIn) / 86400000);
    el.innerHTML = i18nTemplate('rangeSummary', '<b>{checkin}</b> → <b>{checkout}</b> &nbsp; {nights} {nightLabel}', {
      checkin: fmtDate(checkIn),
      checkout: fmtDate(checkOut),
      nights: nights,
      nightLabel: i18n(nights === 1 ? 'night' : 'nights', nights === 1 ? 'night' : 'nights')
    });
  }
}

document.getElementById('btnPrev').onclick = function() {
  viewMonth--;
  if (viewMonth < 0) { viewMonth = 11; viewYear--; }
  renderCalendar();
};
document.getElementById('btnNext').onclick = function() {
  viewMonth++;
  if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  renderCalendar();
};

// ── Guest steppers ────────────────────────────────────────────
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
  tEl.textContent = i18nTemplate('guestTotal', 'Total: {total} / 6 guests', { total: total });
  tEl.className = 'guest-total' + (total > 6 ? ' over' : '');
  document.getElementById('aMin').disabled  = (g.a <= 1);
  document.getElementById('kMin').disabled  = (g.k <= 0);
  document.getElementById('bMin').disabled  = (g.b <= 0);
  document.getElementById('aPlus').disabled = (total >= 6);
  document.getElementById('kPlus').disabled = (total >= 6);
  document.getElementById('bPlus').disabled = (total >= 6);
}

document.getElementById('aMin').onclick  = function() { if (g.a > 1) { g.a--; updateGuests(); } };
document.getElementById('aPlus').onclick = function() { if (g.a+g.k+g.b < 6) { g.a++; updateGuests(); } };
document.getElementById('kMin').onclick  = function() { if (g.k > 0) { g.k--; updateGuests(); } };
document.getElementById('kPlus').onclick = function() { if (g.a+g.k+g.b < 6) { g.k++; updateGuests(); } };
document.getElementById('bMin').onclick  = function() { if (g.b > 0) { g.b--; updateGuests(); } };
document.getElementById('bPlus').onclick = function() { if (g.a+g.k+g.b < 6) { g.b++; updateGuests(); } };

// ── Extras ───────────────────────────────────────────────────
function toggleExtra(el) {
  var cb = el.querySelector('input');
  cb.checked = !cb.checked;
  el.classList.toggle('on', cb.checked);
}

// ── Form submit ───────────────────────────────────────────────
document.getElementById('bookingForm').onsubmit = function(e) {
  e.preventDefault();
  var data = new FormData(this);
  fetch(this.action, {
    method: 'POST', body: data,
    headers: { 'Accept': 'application/json' }
  }).then(function(r) {
    if (r.ok) {
      document.getElementById('formArea').style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
    } else {
      alert(i18n('formError', 'Something went wrong. Please try again or contact us directly.'));
    }
  }).catch(function() {
    alert(i18n('networkError', 'Could not send. Please contact us directly by email.'));
  });
};

// ── Init ─────────────────────────────────────────────────────
renderCalendar();
updateGuests();

window.addEventListener('zeewind:languagechange', function() {
  renderCalendar();
  updateGuests();
});
