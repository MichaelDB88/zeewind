# NordHuys website

Website for **Holiday Home NordHuys** (Vakantiehuis NordHuys), a 6-person holiday home in
Zeewind II Holiday Park, Bredene, at the Belgian coast.

- **Live site:** https://www.nordhuys.be (GitHub Pages, custom domain via Cloudflare DNS)
- **Stack:** static HTML/CSS/JavaScript - no build step, no framework, no dependencies.
  Every file is served exactly as committed.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero video, about, amenities, gallery, location, contact |
| `booking.html` + `booking.js` | Availability calendar, price calculation, booking request form |
| `booking-terms.html` | Booking terms & conditions (English only) |
| `privacy-policy.html` | Privacy policy (English only) |
| `reviews.html` + `reviews.js` + `reviews.css` | Guest reviews page and review submission form |
| `reviews-data.js` | The approved reviews that are shown publicly (see below) |
| `things-to-do.html` | Local area guide |
| `i18n.js` | All translations (EN/NL/FR/DE) + DOM bindings (see below) |
| `language.css` | Language switcher styling |
| `images/` | Photos, hero video (`hero-waves.mp4`) and its poster (`hero-poster.jpg`) |
| `CNAME` | Custom domain for GitHub Pages - **do not delete** |

## Common maintenance tasks

### Block booked dates
Edit the `BOOKED` array at the top of `booking.js`:

```js
var BOOKED = [
  "2026-07-12", "2026-07-13", ...   // one entry per blocked night
];
```

### Change prices or seasons
Everything lives at the top of `booking.js`:

- `PRICES` - per-season package prices (midweek / weekend / week / twoWeeks), incl. 6% VAT
- `FEES` - cleaning, deposit, dog supplement, linen, baby package, comfort pack
- `SEASON_RANGES` - date ranges per season (currently defined through 4 Jan 2027 -
  **extend this each year**, together with `MAX_CO`, `HOLIDAY_WKNDS` and the summer
  Saturday grid `SUMMER_FIRST_SAT` / `SUMMER_LAST_SAT`)
- Booking rules: Mon/Fri changeovers, min. 3 nights, max. 3 weeks;
  July-August is Saturday-to-Saturday weekly rental only.

If prices change, also update the amounts mentioned in `booking-terms.html` and the
pet/extras option labels in `booking.html` and `i18n.js` (all four languages).

### Edit text on the site
All visible text exists in up to two places:

1. The English default directly in the HTML file.
2. The four translations in `i18n.js` (`en`, `nl`, `fr`, `de` blocks - same key names).

At the bottom of `i18n.js` a selector table maps CSS selectors to translation keys.
If you change HTML structure (classes, order of elements), check those selectors too.

### Publish a guest review
Review submissions arrive via Formspree (endpoint configured in `reviews.html`); they do
**not** go live automatically. To publish one: clean it up (remove private info), add it
to `reviews-data.js`, commit. `"featured": true` shows it in the homepage carousel.

### Hero video
The hero uses `images/hero-waves.mp4` (keep it <= ~2 MB, H.264, no audio, `faststart`)
with poster `images/hero-poster.jpg` (<= ~250 KB). A visitor-facing toggle (bottom right)
can switch the video off; the preference is stored in `localStorage` under `heroVideo`.

## Deployment

Pushing to `main` triggers the automatic **pages build and deployment** workflow -
the site is live a minute later. The custom domain is configured in the repo's
Pages settings; DNS is managed in Cloudflare (www = CNAME to `michaeldb88.github.io`,
apex = GitHub Pages A/AAAA records, all records DNS-only / unproxied).

## Conventions

- Keep pages self-contained (CSS inline per page) - consistent with the existing files.
- All prices shown to visitors include 6% VAT.
- Images: JPEG, max ~1920px wide, target < 400 KB each.
- Family bookings only - marketing copy deliberately avoids mentioning "groups"
  or "friends" (see booking terms art. 4).
