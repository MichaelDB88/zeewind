# CLAUDE.md - guidance for AI-assisted work on this repo

Read README.md first; it explains the structure and maintenance tasks. Key rules:

1. **Static site, no build step.** Never introduce npm, bundlers or frameworks.
   Files are served as-is by GitHub Pages.
2. **Four languages.** Any visible text change must be applied in the HTML file
   (English default) AND in all four language blocks of `i18n.js` (en/nl/fr/de).
   The selector table at the bottom of `i18n.js` binds keys to DOM elements -
   keep it in sync when HTML structure changes.
3. **Prices live in one place:** `booking.js` (`PRICES`, `FEES`, `SEASON_RANGES`).
   When changing them, mirror the amounts in `booking-terms.html` and the labels
   in `booking.html` + `i18n.js`. All prices include 6% VAT.
4. **Booking rules** (per the owner's 2026 price list): Mon/Fri changeovers,
   min. 3 nights, max. 3 weeks, July-August Saturday-to-Saturday weeks only.
   Don't relax these without asking.
5. **Verify before committing:** `node --check` every edited .js file, and unit-test
   `calcPrice`/`decomposeBooking` in booking.js against the price table when touching
   pricing logic.
6. **Never delete `CNAME`** (custom domain) and don't change the Pages/DNS setup.
7. **Tone & content:** family-friendly marketing; never mention "groups" or
   "friends" in copy (the owner wants to avoid attracting party groups).
   No em-dashes in Dutch marketing copy.
8. **Media budget:** images JPEG < 400 KB; hero video < ~2 MB, H.264, muted.
9. **Yearly chore:** extend `SEASON_RANGES`, `HOLIDAY_WKNDS`, `MAX_CO` and the
   summer Saturday grid in booking.js before the calendar runs out (currently 4 Jan 2027).
