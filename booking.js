// ════════════════════════════════════════════════════════════════
//  BOOKING CALENDAR — Holiday Home Zeebries
//  Changeover days: Monday and Friday only
//  Valid blocks:
//    Midweek       Mon → Fri  (4 nights)
//    Short weekend Fri → Sun  (2 nights)   ← only valid Sun checkout
//    Long weekend  Fri → Mon  (3 nights)
//    Full week     Mon → Mon or Fri → Fri  (7 nights)
//    Longer stays: valid combinations of the above
// ════════════════════════════════════════════════════════════════

// ── Booked dates ─────────────────────────────────────────────────
//  Add / remove dates here (format: "YYYY-MM-DD") to block nights
// ════════════════════════════════════════════════════════════════
var BOOKED = [
  "2026-06-01","2026-06-02","2026-06-03","2026-06-04","2026-06-05","2026-06-06","2026-06-07",
  "2026-07-12","2026-07-13","2026-07-14","2026-07-15","2026-07-16","2026-07-17","2026-07-18","2026-07-19",
  "2026-08-02","2026-08-03","2026-08-04","2026-08-05","2026-08-06","2026-08-07","2026-08-08",
  "2026-08-09","2026-08-10","2026-08-11","2026-08-12","2026-08-13","2026-08-14","2026-08-15"
];

// ── Season prices ─────────────────────────────────────────────────
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
  mayJune:       'May–June',
  summerHigh:    'Summer High',
  summerPeak:    'Summer Peak',
  september:     'September',
  autumnHoliday: 'Autumn holiday',
  christmasNy:   'Christmas & New Year'
};

// ── 2026 season date ranges ───────────────────────────────────────
var SEASON_RANGES = [
  { from: '2025-12-21', to: '2026-01-04', s: 'christmasNy'   },
  { from: '2026-01-05', to: '2026-02-22', s: 'low'           }, // incl. Krokus holiday
  { from: '2026-02-23', to: '2026-02-28', s: 'low'           },
  { from: '2026-03-01', to: '2026-04-02', s: 'shoulder'      },
  { from: '2026-04-03', to: '2026-04-19', s: 'springHoliday' }, // Easter
  { from: '2026-04-20', to: '2026-04-30', s: 'shoulder'      },
  { from: '2026-05-01', to: '2026-06-30', s: 'mayJune'       }, // incl. Ascension & Pentecost (surcharge applied separately)
  { from: '2026-07-01', to: '2026-07-10', s: 'summerHigh'    },
  { from: '2026-07-11', to: '2026-08-16', s: 'summerPeak'    },
  { from: '2026-08-17', to: '2026-08-31', s: 'summerHigh'    },
  { from: '2026-09-01', to: '2026-09-30', s: 'september'     },
  { from: '2026-10-01', to: '2026-10-29', s: 'shoulder'      },
  { from: '2026-10-30', to: '2026-11-08', s: 'autumnHoliday' },
  { from: '2026-11-09', to: '2026-12-20', s: 'low'           },
  { from: '2026-12-21', to: '2027-01-04', s: 'christmasNy'   }
];

// ── Special surcharge weekends (long weekend component only) ──────
var SPECIAL_WKNDS = [
  { from: '2026-05-14', to: '2026-05-17', mult: 1.25, name: 'Ascension (+25%)' },
  { from: '2026-05-22', to: '2026-05-25', mult: 1.20, name: 'Pentecost (+20%)' }
];

// ── Calendar limits ───────────────────────────────────────────────
var MAX_CO = new Date(2027, 0, 4); // Jan 4 2027 — last valid checkout
MAX_CO.setHours(0, 0, 0, 0);

// ── State ─────────────────────────────────────────────────────────
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

// ── Utilities ─────────────────────────────────────────────────────
function dateKey(d) {
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}
function isBooked(d)   { return !!bookedSet[dateKey(d)]; }
function isPast(d)     { return d < today; }
function addDays(d, n) { var r = new Date(d.getTime()); r.setDate(r.getDate() + n); return r; }
function fmtDate(d)    { return d ? d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '?'; }
function fmtEur(n)     { return '€ ' + n.toLocaleString('en-GB'); }

// ── Season & price lookups ────────────────────────────────────────
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

// ── Booking validation ────────────────────────────────────────────
function isValidCheckin(date) {
  var dow = date.getDay();
  return (dow === 1 || dow === 5) &&   // Monday or Friday only
         !isPast(date) &&
         !isBooked(date) &&
         date < MAX_CO;                 // must have room for a stay
}

function isValidCheckout(ci, co) {
  if (!co || co <= ci)  return false;
  if (co > MAX_CO)      return false;
  // No booked nights inside the stay (exclusive of ci, exclusive of co)
  var cur = addDays(ci, 1);
  while (cur < co) {
    if (isBooked(cur)) return false;
    cur = addDays(cur, 1);
  }
  var ciD = ci.getDay();
  var coD = co.getDay();
  var n   = Math.round((co - ci) / 86400000);
  if (ciD === 1) {                       // Monday check-in
    if (coD === 5) return (n - 4) % 7 === 0; // 4, 11, 18 …
    if (coD === 1) return  n      % 7 === 0; // 7, 14, 21 …
    return false;
  }
  if (ciD === 5) {                       // Friday check-in
    if (coD === 0) return n === 2;           // short weekend only
    if (coD === 1) return (n - 3) % 7 === 0; // 3, 10, 17 …
    if (coD === 5) return  n      % 7 === 0; // 7, 14, 21 …
    return false;
  }
  return false;
}

// ── Booking decomposition ─────────────────────────────────────────
// Splits any valid stay into its midweek / short-wknd / long-wknd components
function decomposeBooking(ci, co) {
  var parts = [];
  var cur   = new Date(ci.getTime()); cur.setHours(0, 0, 0, 0);
  var end   = new Date(co.getTime()); end.setHours(0, 0, 0, 0);
  while (cur.getTime() < end.getTime