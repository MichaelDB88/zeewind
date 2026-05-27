(function () {
  var REVIEWS = window.ZeewindApprovedReviews || [];
  var activeFilter = 'all';

  var TEXT = {
    en: {
      featuredLabel: 'Guest Reviews',
      featuredTitle: 'What guests say',
      featuredIntro: 'Read what guests say about their stay at Holiday Home Zeebries.',
      readAll: 'Read all reviews',
      allReviewsTitle: 'Guest Reviews',
      allReviewsIntro: 'Warm stories from guests who chose Holiday Home Zeebries for a relaxed stay near the Belgian coast.',
      approvedLabel: 'Guest stories',
      approvedTitle: 'Why guests choose us',
      empty: 'Guest reviews will appear here soon.',
      basedOn: 'Based on {count} guest reviews',
      average: '{average}/5',
      all: 'All',
      positive: 'Positive',
      critical: 'Good to know',
      previous: 'Previous review',
      next: 'Next review',
      goTo: 'Show review {index}',
      stars: '{rating} out of 5 stars',
      formTitle: 'Leave a review',
      formIntro: 'Stayed with us? Share what made your time at the coast memorable.',
      name: 'Name',
      email: 'Email address',
      rating: 'Rating',
      rating5: '5 - Excellent',
      rating4: '4 - Very good',
      rating3: '3 - Good',
      rating2: '2 - Fair',
      rating1: '1 - Poor',
      stayDate: 'When did you stay?',
      house: 'Holiday home',
      houseHetVissershuisje: 'Holiday Home Zeebries',
      reviewText: 'Your review',
      consent: 'I agree that my review may be displayed on this website.',
      submit: 'Submit review',
      moderation: 'Your email address is only used if we need to follow up.',
      chooseRating: 'Choose a rating',
      chooseHouse: 'Choose a holiday home',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      consentRequired: 'Please confirm the publication consent.',
      tooLong: 'Please keep your review under 1,000 characters.',
      success: 'Thank you. Your review has been received.',
      mailtoSuccess: 'Your email app should open with the review details. Send the email to share your experience with us.',
      error: 'Something went wrong. Please try again or contact us directly.',
      characterCount: '{count} / 1000 characters'
    },
    nl: {
      featuredLabel: 'Gastbeoordelingen',
      featuredTitle: 'Wat gasten zeggen',
      featuredIntro: 'Lees wat gasten vertellen over hun verblijf in Vakantiehuis Zeebries.',
      readAll: 'Lees alle beoordelingen',
      allReviewsTitle: 'Gastbeoordelingen',
      allReviewsIntro: 'Warme verhalen van gasten die Vakantiehuis Zeebries kozen voor een ontspannen verblijf aan de Belgische kust.',
      approvedLabel: 'Gastenverhalen',
      approvedTitle: 'Waarom gasten voor ons kiezen',
      empty: 'Gastbeoordelingen verschijnen hier binnenkort.',
      basedOn: 'Gebaseerd op {count} gastbeoordelingen',
      average: '{average}/5',
      all: 'Alles',
      positive: 'Positief',
      critical: 'Goed om te weten',
      previous: 'Vorige beoordeling',
      next: 'Volgende beoordeling',
      goTo: 'Toon beoordeling {index}',
      stars: '{rating} van 5 sterren',
      formTitle: 'Laat een beoordeling achter',
      formIntro: 'Verbleef je bij ons? Deel wat je verblijf aan zee bijzonder maakte.',
      name: 'Naam',
      email: 'E-mailadres',
      rating: 'Score',
      rating5: '5 - Uitstekend',
      rating4: '4 - Zeer goed',
      rating3: '3 - Goed',
      rating2: '2 - Redelijk',
      rating1: '1 - Matig',
      stayDate: 'Wanneer verbleef je?',
      house: 'Vakantiehuis',
      houseHetVissershuisje: 'Vakantiehuis Zeebries',
      reviewText: 'Je beoordeling',
      consent: 'Ik ga ermee akkoord dat mijn beoordeling op deze website mag verschijnen.',
      submit: 'Beoordeling verzenden',
      moderation: 'Je e-mailadres wordt alleen gebruikt als we iets willen opvolgen.',
      chooseRating: 'Kies een score',
      chooseHouse: 'Kies een vakantiehuis',
      required: 'Dit veld is verplicht.',
      invalidEmail: 'Vul een geldig e-mailadres in.',
      consentRequired: 'Bevestig de toestemming voor publicatie.',
      tooLong: 'Hou je beoordeling onder 1.000 tekens.',
      success: 'Bedankt. Je beoordeling is ontvangen.',
      mailtoSuccess: 'Je e-mailprogramma opent met de beoordelingsgegevens. Verstuur de e-mail om je ervaring met ons te delen.',
      error: 'Er ging iets mis. Probeer opnieuw of neem rechtstreeks contact op.',
      characterCount: '{count} / 1000 tekens'
    },
    fr: {
      featuredLabel: 'Avis des voyageurs',
      featuredTitle: 'Ce que disent les voyageurs',
      featuredIntro: 'Lisez ce que les voyageurs disent de leur séjour à Maison de vacances Zeebries.',
      readAll: 'Lire tous les avis',
      allReviewsTitle: 'Avis des voyageurs',
      allReviewsIntro: 'Des témoignages chaleureux de voyageurs qui ont choisi Maison de vacances Zeebries pour un séjour détendu à la côte belge.',
      approvedLabel: 'Récits de voyageurs',
      approvedTitle: 'Pourquoi les voyageurs nous choisissent',
      empty: 'Les avis des voyageurs apparaîtront bientôt ici.',
      basedOn: 'Basé sur {count} avis de voyageurs',
      average: '{average}/5',
      all: 'Tous',
      positive: 'Positifs',
      critical: 'Bon à savoir',
      previous: 'Avis précédent',
      next: 'Avis suivant',
      goTo: 'Afficher l’avis {index}',
      stars: '{rating} sur 5 étoiles',
      formTitle: 'Laisser un avis',
      formIntro: 'Vous avez séjourné chez nous ? Partagez ce qui a rendu votre séjour à la côte mémorable.',
      name: 'Nom',
      email: 'Adresse e-mail',
      rating: 'Note',
      rating5: '5 - Excellent',
      rating4: '4 - Très bien',
      rating3: '3 - Bien',
      rating2: '2 - Correct',
      rating1: '1 - Faible',
      stayDate: 'Quand avez-vous séjourné ?',
      house: 'Maison de vacances',
      houseHetVissershuisje: 'Maison de vacances Zeebries',
      reviewText: 'Votre avis',
      consent: 'J’accepte que mon avis puisse être affiché sur ce site.',
      submit: 'Envoyer l’avis',
      moderation: 'Votre adresse e-mail sert uniquement si nous devons vous recontacter.',
      chooseRating: 'Choisir une note',
      chooseHouse: 'Choisir une maison',
      required: 'Ce champ est obligatoire.',
      invalidEmail: 'Entrez une adresse e-mail valide.',
      consentRequired: 'Veuillez confirmer le consentement de publication.',
      tooLong: 'Merci de limiter votre avis à 1 000 caractères.',
      success: 'Merci. Votre avis a bien été reçu.',
      mailtoSuccess: 'Votre application e-mail devrait s’ouvrir avec les détails de l’avis. Envoyez l’e-mail pour partager votre expérience avec nous.',
      error: 'Une erreur s’est produite. Réessayez ou contactez-nous directement.',
      characterCount: '{count} / 1000 caractères'
    },
    de: {
      featuredLabel: 'Gästebewertungen',
      featuredTitle: 'Was Gäste sagen',
      featuredIntro: 'Lesen Sie, was Gäste über ihren Aufenthalt im Ferienhaus Zeebries sagen.',
      readAll: 'Alle Bewertungen lesen',
      allReviewsTitle: 'Gästebewertungen',
      allReviewsIntro: 'Warme Eindrücke von Gästen, die Ferienhaus Zeebries für eine entspannte Auszeit an der belgischen Küste gewählt haben.',
      approvedLabel: 'Gästestimmen',
      approvedTitle: 'Warum Gäste uns wählen',
      empty: 'Gästebewertungen erscheinen hier bald.',
      basedOn: 'Basierend auf {count} Gästebewertungen',
      average: '{average}/5',
      all: 'Alle',
      positive: 'Positiv',
      critical: 'Gut zu wissen',
      previous: 'Vorherige Bewertung',
      next: 'Nächste Bewertung',
      goTo: 'Bewertung {index} anzeigen',
      stars: '{rating} von 5 Sternen',
      formTitle: 'Bewertung abgeben',
      formIntro: 'Waren Sie bei uns zu Gast? Teilen Sie, was Ihren Aufenthalt an der Küste besonders gemacht hat.',
      name: 'Name',
      email: 'E-Mail-Adresse',
      rating: 'Bewertung',
      rating5: '5 - Ausgezeichnet',
      rating4: '4 - Sehr gut',
      rating3: '3 - Gut',
      rating2: '2 - Ausreichend',
      rating1: '1 - Schwach',
      stayDate: 'Wann waren Sie zu Gast?',
      house: 'Ferienhaus',
      houseHetVissershuisje: 'Ferienhaus Zeebries',
      reviewText: 'Ihre Bewertung',
      consent: 'Ich stimme zu, dass meine Bewertung auf dieser Website angezeigt werden darf.',
      submit: 'Bewertung senden',
      moderation: 'Ihre E-Mail-Adresse wird nur genutzt, wenn wir Rückfragen haben.',
      chooseRating: 'Bewertung wählen',
      chooseHouse: 'Ferienhaus wählen',
      required: 'Dieses Feld ist erforderlich.',
      invalidEmail: 'Geben Sie eine gültige E-Mail-Adresse ein.',
      consentRequired: 'Bitte bestätigen Sie die Einwilligung zur Veröffentlichung.',
      tooLong: 'Bitte halten Sie Ihre Bewertung unter 1.000 Zeichen.',
      success: 'Vielen Dank. Ihre Bewertung ist eingegangen.',
      mailtoSuccess: 'Ihr E-Mail-Programm sollte sich mit den Bewertungsdetails öffnen. Senden Sie die E-Mail, um Ihre Erfahrung mit uns zu teilen.',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
      characterCount: '{count} / 1000 Zeichen'
    }
  };

  var HOUSE_LABELS = {
    'Ferienhaus Zeebries': 'houseHetVissershuisje'
  };

  function language() {
    return window.ZeewindI18n ? window.ZeewindI18n.language() : 'en';
  }

  function locale() {
    return window.ZeewindI18n ? window.ZeewindI18n.locale() : 'en-GB';
  }

  function copy(key) {
    var lang = language();
    return (TEXT[lang] && TEXT[lang][key]) || TEXT.en[key] || key;
  }

  function template(key, values) {
    var text = copy(key);
    for (var name in values) {
      text = text.replace(new RegExp('\\{' + name + '\\}', 'g'), values[name]);
    }
    return text;
  }

  function approvedReviews() {
    return REVIEWS.filter(function (review) {
      return review && review.id && review.name && review.rating && review.text;
    });
  }

  function featuredReviews() {
    return approvedReviews().filter(function (review) {
      return review.featured === true;
    });
  }

  function averageRating(reviews) {
    if (!reviews.length) return 0;
    var total = reviews.reduce(function (sum, review) { return sum + Number(review.rating || 0); }, 0);
    return Math.round((total / reviews.length) * 10) / 10;
  }

  function stars(rating) {
    var rounded = Math.round(Number(rating) || 0);
    var html = '<span class="review-stars" role="img" aria-label="' + template('stars', { rating: rating }) + '">';
    for (var i = 1; i <= 5; i++) {
      html += '<span aria-hidden="true"' + (i > rounded ? ' class="empty"' : '') + '>&#9733;</span>';
    }
    return html + '</span>';
  }

  function formatDate(value) {
    if (!value) return '';
    var parts = String(value).split('-');
    if (parts.length >= 2) {
      var date = new Date(Number(parts[0]), Number(parts[1]) - 1, 1);
      return date.toLocaleDateString(locale(), { month: 'long', year: 'numeric' });
    }
    return value;
  }

  function houseLabel(value) {
    return HOUSE_LABELS[value] ? copy(HOUSE_LABELS[value]) : value;
  }

  function reviewProperty(review) {
    return review.house || review.property || '';
  }

  function localizedReviewText(review) {
    var lang = language();
    return review['text_' + lang] || review.text || '';
  }

  function reviewSentiment(review) {
    if (review.sentiment) return review.sentiment;
    return Number(review.rating || 0) >= 5 ? 'positive' : 'critical';
  }

  function meta(review) {
    var bits = ['<strong>' + escapeHtml(review.name) + '</strong>'];
    var property = reviewProperty(review);
    if (review.location && String(review.name).indexOf(review.location) === -1) bits.push(escapeHtml(review.location));
    if (review.date) bits.push(escapeHtml(formatDate(review.date)));
    if (property) bits.push(escapeHtml(houseLabel(property)));
    if (review.source) bits.push(escapeHtml(review.source));
    return bits.join(' · ');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderSummary(target, reviews) {
    if (!target) return;
    if (!reviews.length) {
      target.innerHTML = '<p class="review-empty">' + copy('empty') + '</p>';
      return;
    }
    var average = averageRating(reviews).toFixed(1);
    target.innerHTML =
      stars(Math.round(average)) +
      '<span class="review-score">' + template('average', { average: average }) + '</span>' +
      '<span>' + template('basedOn', { count: reviews.length }) + '</span>';
  }

  function renderReviewCard(review) {
    return (
      '<article class="review-card">' +
        stars(review.rating) +
        '<p class="review-quote">“' + escapeHtml(localizedReviewText(review)) + '”</p>' +
        '<p class="review-meta">' + meta(review) + '</p>' +
      '</article>'
    );
  }

  function renderHomeCarousel() {
    var section = document.getElementById('guest-reviews');
    var root = document.getElementById('home-review-carousel');
    if (!section || !root) return;

    var reviews = featuredReviews();
    section.querySelector('[data-review-copy="featuredLabel"]').textContent = copy('featuredLabel');
    section.querySelector('[data-review-copy="featuredTitle"]').textContent = copy('featuredTitle');
    section.querySelector('[data-review-copy="featuredIntro"]').textContent = copy('featuredIntro');
    section.querySelector('[data-review-copy="readAll"]').textContent = copy('readAll');
    renderSummary(document.getElementById('home-review-summary'), approvedReviews());

    if (!reviews.length) {
      root.innerHTML = '<p class="review-empty">' + copy('empty') + '</p>';
      return;
    }

    var state = root._reviewState || { index: 0, timer: null, paused: false, initialized: false };
    state.index = Math.min(state.index, reviews.length - 1);
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function cardMarkup(review) {
      return (
        '<div class="review-carousel-card" tabindex="0" aria-live="polite">' +
          stars(review.rating) +
          '<p class="review-quote">“' + escapeHtml(localizedReviewText(review)) + '”</p>' +
          '<p class="review-meta">' + meta(review) + '</p>' +
        '</div>'
      );
    }

    function controlsMarkup() {
      var dots = reviews.map(function (_, idx) {
        return '<button type="button" class="review-dot' + (idx === state.index ? ' active' : '') + '" data-review-dot="' + idx + '" aria-label="' + template('goTo', { index: idx + 1 }) + '"' + (idx === state.index ? ' aria-current="true"' : '') + '></button>';
      }).join('');
      return (
        '<div class="review-controls">' +
          '<button type="button" class="review-arrow" data-review-prev aria-label="' + copy('previous') + '">&#8249;</button>' +
          '<div class="review-dots">' + dots + '</div>' +
          '<button type="button" class="review-arrow" data-review-next aria-label="' + copy('next') + '">&#8250;</button>' +
        '</div>'
      );
    }

    function render(animate) {
      var currentCard = root.querySelector('.review-carousel-card');
      if (animate && currentCard && !reduceMotion) {
        currentCard.classList.add('is-changing');
        setTimeout(function () {
          root.innerHTML = cardMarkup(reviews[state.index]) + controlsMarkup();
          bindControls();
        }, 180);
      } else {
        root.innerHTML = cardMarkup(reviews[state.index]) + controlsMarkup();
        bindControls();
      }
    }

    function go(nextIndex, animate) {
      state.index = (nextIndex + reviews.length) % reviews.length;
      render(animate);
    }

    function start() {
      stop();
      if (reviews.length < 2 || reduceMotion) return;
      state.timer = setInterval(function () {
        if (!state.paused) go(state.index + 1, true);
      }, 5000);
    }

    function stop() {
      if (state.timer) clearInterval(state.timer);
      state.timer = null;
    }

    function bindControls() {
      var prev = root.querySelector('[data-review-prev]');
      var next = root.querySelector('[data-review-next]');
      if (prev) prev.addEventListener('click', function () { go(state.index - 1, true); start(); });
      if (next) next.addEventListener('click', function () { go(state.index + 1, true); start(); });
      var dots = root.querySelectorAll('[data-review-dot]');
      for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
          go(Number(this.getAttribute('data-review-dot')), true);
          start();
        });
      }
    }

    if (!state.initialized) {
      root.addEventListener('mouseenter', function () { state.paused = true; });
      root.addEventListener('mouseleave', function () { state.paused = false; });
      root.addEventListener('focusin', function () { state.paused = true; });
      root.addEventListener('focusout', function () { state.paused = false; });
      state.initialized = true;
    }

    root._reviewState = state;
    render(false);
    start();
  }

  function renderReviewsPage() {
    var list = document.getElementById('reviews-list');
    if (!list) return;

    setCopy('allReviewsTitle');
    setCopy('allReviewsIntro');
    setCopy('approvedLabel');
    setCopy('approvedTitle');
    setCopy('formTitle');
    setCopy('formIntro');
    setCopy('moderation');

    var reviews = approvedReviews();
    renderSummary(document.getElementById('reviews-summary'), reviews);
    renderFilters(reviews);

    var visible = activeFilter === 'all' ? reviews : reviews.filter(function (review) {
      return reviewSentiment(review) === activeFilter;
    });

    list.innerHTML = visible.length
      ? visible.map(renderReviewCard).join('')
      : '<p class="review-empty">' + copy('empty') + '</p>';

    applyFormCopy();
  }

  function renderFilters(reviews) {
    var target = document.getElementById('review-filters');
    if (!target) return;
    var filters = [
      { key: 'all', label: copy('all') },
      { key: 'positive', label: copy('positive') },
      { key: 'critical', label: copy('critical') }
    ];
    target.innerHTML = filters.map(function (filter) {
      return '<button type="button" class="review-filter' + (filter.key === activeFilter ? ' active' : '') + '" data-review-filter="' + escapeHtml(filter.key) + '" aria-pressed="' + (filter.key === activeFilter ? 'true' : 'false') + '">' + escapeHtml(filter.label) + '</button>';
    }).join('');
    var buttons = target.querySelectorAll('[data-review-filter]');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        activeFilter = this.getAttribute('data-review-filter');
        renderReviewsPage();
      });
    }
  }

  function applyFormCopy() {
    var form = document.getElementById('reviewForm');
    if (!form) return;
    setLabel('reviewName', copy('name'));
    setLabel('reviewEmail', copy('email'));
    setLabel('reviewRating', copy('rating'));
    setLabel('reviewStayDate', copy('stayDate'));
    setLabel('reviewHouse', copy('house'));
    setLabel('reviewText', copy('reviewText'));
    var consent = document.getElementById('reviewConsentLabel');
    if (consent) consent.textContent = copy('consent');
    var submit = form.querySelector('[type="submit"]');
    if (submit) submit.textContent = copy('submit');
    var ratingFirst = document.querySelector('#reviewRating option[value=""]');
    if (ratingFirst) ratingFirst.textContent = copy('chooseRating');
    setOptionLabel('reviewRating', '5', copy('rating5'));
    setOptionLabel('reviewRating', '4', copy('rating4'));
    setOptionLabel('reviewRating', '3', copy('rating3'));
    setOptionLabel('reviewRating', '2', copy('rating2'));
    setOptionLabel('reviewRating', '1', copy('rating1'));
    var houseFirst = document.querySelector('#reviewHouse option[value=""]');
    if (houseFirst) houseFirst.textContent = copy('chooseHouse');
    setOptionLabel('reviewHouse', 'Ferienhaus Zeebries', copy('houseHetVissershuisje'));
    updateCount();
  }

  function setCopy(key) {
    var node = document.querySelector('[data-review-copy="' + key + '"]');
    if (node) node.textContent = copy(key);
  }

  function setLabel(id, text) {
    var field = document.getElementById(id);
    if (!field) return;
    var label = document.querySelector('label[for="' + id + '"]');
    if (label) label.textContent = text;
  }

  function setOptionLabel(selectId, value, text) {
    var option = document.querySelector('#' + selectId + ' option[value="' + value + '"]');
    if (option) option.textContent = text;
  }

  function initReviewForm() {
    var form = document.getElementById('reviewForm');
    if (!form) return;
    var reviewText = document.getElementById('reviewText');
    if (reviewText) reviewText.addEventListener('input', updateCount);
    form.addEventListener('submit', submitReview);
    applyFormCopy();
  }

  function updateCount() {
    var field = document.getElementById('reviewText');
    var count = document.getElementById('reviewCharCount');
    if (!field || !count) return;
    count.textContent = template('characterCount', { count: field.value.length });
  }

  function submitReview(event) {
    event.preventDefault();
    var form = event.currentTarget;
    if (!validateForm(form)) return;

    var endpoint = form.getAttribute('action') || form.getAttribute('data-form-endpoint') || '';
    var configuredEndpoint = /^https?:\/\//.test(endpoint) && endpoint.indexOf('REPLACE_WITH_FORM_ID') === -1;
    var data = new FormData(form);

    if (configuredEndpoint) {
      fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (!response.ok) throw new Error('Form submission failed');
        form.reset();
        updateCount();
        showStatus('success', copy('success'));
      }).catch(function () {
        showStatus('error', copy('error'));
      });
      return;
    }

    var mailto = buildMailto(form);
    window.location.href = mailto;
    form.reset();
    updateCount();
    showStatus('success', copy('mailtoSuccess'));
  }

  function validateForm(form) {
    clearErrors(form);
    var valid = true;
    valid = requireField('reviewName') && valid;
    valid = requireEmail('reviewEmail') && valid;
    valid = requireRating('reviewRating') && valid;
    valid = requireField('reviewText') && valid;
    valid = requireConsent('reviewConsent') && valid;
    var text = document.getElementById('reviewText');
    if (text && text.value.length > 1000) {
      setError('reviewText', copy('tooLong'));
      valid = false;
    }
    if (!valid) showStatus('error', copy('error'));
    return valid;
  }

  function clearErrors(form) {
    var errors = form.querySelectorAll('.field-error');
    for (var i = 0; i < errors.length; i++) errors[i].textContent = '';
    var invalid = form.querySelectorAll('[aria-invalid="true"]');
    for (var j = 0; j < invalid.length; j++) invalid[j].removeAttribute('aria-invalid');
  }

  function requireField(id) {
    var field = document.getElementById(id);
    if (!field || String(field.value).trim()) return true;
    setError(id, copy('required'));
    return false;
  }

  function requireRating(id) {
    var field = document.getElementById(id);
    if (!field || !String(field.value).trim()) {
      setError(id, copy('required'));
      return false;
    }
    var rating = Number(field.value);
    if (rating < 1 || rating > 5) {
      setError(id, copy('required'));
      return false;
    }
    return true;
  }

  function requireEmail(id) {
    var field = document.getElementById(id);
    if (!field) return true;
    var value = String(field.value).trim();
    if (!value) {
      setError(id, copy('required'));
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError(id, copy('invalidEmail'));
      return false;
    }
    return true;
  }

  function requireConsent(id) {
    var field = document.getElementById(id);
    if (!field || field.checked) return true;
    setError(id, copy('consentRequired'));
    return false;
  }

  function setError(id, message) {
    var field = document.getElementById(id);
    var error = document.getElementById(id + 'Error');
    if (field) field.setAttribute('aria-invalid', 'true');
    if (error) error.textContent = message;
  }

  function showStatus(type, message) {
    var status = document.getElementById('reviewFormStatus');
    if (!status) return;
    status.className = 'review-status show ' + type;
    status.textContent = message;
  }

  function buildMailto(form) {
    var recipient = (form.getAttribute('data-review-email') || 'your@email.com').trim();
    var subject = 'Guest review submission - Ferienhaus Zeebries';
    var body = [
      'Name: ' + document.getElementById('reviewName').value,
      'Email: ' + document.getElementById('reviewEmail').value,
      'Rating: ' + document.getElementById('reviewRating').value + '/5',
      'Stay date: ' + document.getElementById('reviewStayDate').value,
      'Holiday home: ' + document.getElementById('reviewHouse').value,
      '',
      'Review:',
      document.getElementById('reviewText').value,
      '',
      'Consent to display review on website: yes'
    ].join('\n');
    return 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  function renderAll() {
    renderHomeCarousel();
    renderReviewsPage();
  }

  initReviewForm();
  renderAll();
  window.addEventListener('zeewind:languagechange', renderAll);
})();
