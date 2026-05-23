# Het Vissershuisje website

This is a static HTML/CSS/JavaScript site. There is no build step at the moment; pages are served directly from the repository.

## Managing guest reviews

Approved public reviews are stored in `reviews-data.js`.

The starter reviews in that file are placeholders so the feature can be previewed. Replace them with real, manually approved guest feedback before treating the reviews as live social proof.

Guest submissions from the website do not go live automatically. The review form on `reviews.html` sends submissions to the configured Formspree endpoint:

`https://formspree.io/f/meenbjjv`

To use a different form inbox or dashboard, replace the `action` value on the `#reviewForm` form in `reviews.html`. Do not put private tokens or secrets in frontend code. If no external form handler is configured, replace the action with the placeholder `https://formspree.io/f/REPLACE_WITH_FORM_ID` and set `data-review-email` to the owner email address to use the mailto fallback.

To publish a review:

1. Review the submission in the form inbox or email.
2. Remove private information such as email address.
3. Optionally edit only for spelling, formatting, or privacy.
4. Add the approved review to `reviews-data.js`.
5. Commit and deploy the site.

Set `"featured": true` on a review to include it in the homepage carousel. Set it to `false` to keep the review on the dedicated reviews page only.

Set `property` to the holiday home the guest stayed in, for example `"Het Vissershuisje"`. Set `sentiment` to `"positive"` or `"critical"` to control the review filters on the reviews page.

Only reviews in `reviews-data.js` are shown publicly. Visitor-submitted reviews stay separate until they are manually reviewed, approved, added to that file, and deployed.
