(function () {
  var STORAGE_KEY = 'zeewind-language';

  var LANGUAGES = {
    nl: { label: 'Nederlands', flag: 'nl', htmlLang: 'nl', locale: 'nl-BE' },
    fr: { label: 'Français', flag: 'fr', htmlLang: 'fr', locale: 'fr-BE' },
    de: { label: 'Deutsch', flag: 'de', htmlLang: 'de', locale: 'de-DE' },
    en: { label: 'English', flag: 'gb', htmlLang: 'en', locale: 'en-GB' }
  };

  var COPY = {
    en: {
      meta: {
        homeTitle: 'Zeewind - Vacation Home at the Belgian Coast',
        homeDescription: 'Zeewind - a beautiful holiday home at the Belgian coast. Pet-friendly, private garden, parking, and access to pool. Book your stay today.',
        bookingTitle: 'Book Your Stay - Zeewind',
        bookingDescription: 'Check availability and send a booking request for Zeewind holiday home in Bredene.',
        thingsTitle: 'Things to Do Near Zeewind in Bredene | Belgian Coast',
        thingsDescription: 'Discover things to do near Zeewind II Holiday Park in Bredene, including the new LAGO Bredene Grasduinen swimming pool, beaches, dunes, and family-friendly activities on the Belgian coast.'
      },
      common: {
        navHouse: 'Our Home',
        navAmenities: 'Amenities',
        navGallery: 'Gallery',
        navLocation: 'Location',
        navThings: 'In the Area',
        navBook: 'Book',
        navContact: 'Contact',
        languageLabel: 'Language',
        footer: '2025 Zeewind · Holiday Home at the Belgian Coast · All rights reserved',
        checkAvailability: 'Check Availability'
      },
      home: {
        heroEyebrow: 'Belgian Coast · Holiday Home',
        heroTagline: 'Wake up to sea air, step outside to your private garden, and spend your days between pool and beach.',
        discoverMore: 'Discover More',
        badgeBeach: '🌊 Near the Beach',
        badgePet: '🐾 Pet Friendly',
        badgePool: '🏊 Pool Access',
        badgeGarden: '🌿 Private Garden',
        badgeParking: '🚗 Free Parking',
        houseLabel: 'Our Home',
        houseTitle: 'A home away from home on the Belgian coast',
        houseCopy1: 'Zeewind is a charming holiday home nestled within a peaceful vacation domain, just steps from the Belgian coastline. With its warm atmosphere and thoughtful amenities, it is the perfect retreat for families, couples, and friends — four-legged companions welcome too.',
        houseCopy2: 'Enjoy your morning coffee in the private garden, spend lazy afternoons at the shared pool, and end the day with a stroll along the beach. Everything you need for a perfect holiday is right here.',
        bedrooms: 'Bedrooms',
        bathroom: 'Bathroom',
        maxGuests: 'Max Guests',
        beachAlt: 'The beach near Zeewind, just minutes away',
        amenitiesLabel: 'Amenities',
        amenitiesTitle: 'Everything you need',
        amenitiesSub: 'Zeewind is equipped and ready so you can truly switch off and enjoy.',
        featureBeachTitle: 'Near the Beach',
        featureBeachCopy: 'Just a short walk to the sea — enjoy morning swims and evening strolls on the sand.',
        featurePoolTitle: 'Pool Access',
        featurePoolCopy: 'Cool off in the shared pool of the vacation domain — perfect for kids and adults alike.',
        featureGardenTitle: 'Private Garden & Terrace',
        featureGardenCopy: 'Relax in your own outdoor space. BBQ evenings and morning coffees in the fresh sea air.',
        featureParkingTitle: 'Free Parking',
        featureParkingCopy: 'Private parking on-site means no stress — arrive and unload with ease.',
        featurePetTitle: 'Pet Friendly',
        featurePetCopy: 'Your furry family members are welcome. The garden gives pets room to roam safely.',
        featureDomainTitle: 'Vacation Domain',
        featureDomainCopy: 'Part of a well-maintained holiday park with facilities and peaceful surroundings.',
        galleryLabel: 'Gallery',
        galleryTitle: 'See it for yourself',
        gallerySub: 'A few glimpses of what awaits you at Zeewind.',
        galleryBeachAlt: 'The beach near Zeewind',
        galleryDunesAlt: 'Dunes near Zeewind',
        comingSoon: '📷 Coming soon',
        galleryNote: 'Photos of the house coming soon. The beach is just minutes away.',
        locationLabel: 'Location',
        locationTitle: 'Where to find us',
        locationCopy: 'Zeewind is located in Zeewind II Holiday Park in Bredene, close to the Belgian coast. Exact address provided upon booking confirmation.',
        nearbyPool: '<span class="nearby-icon">&#127946;</span> LAGO Bredene Grasduinen - new swimming pool nearby',
        nearbyBeach: '<span class="nearby-icon">🌊</span> Beach — short walk',
        nearbySupermarket: '<span class="nearby-icon">🛒</span> Supermarket — nearby',
        nearbyRestaurants: '<span class="nearby-icon">🍽️</span> Restaurants — within easy reach',
        nearbyTrain: '<span class="nearby-icon">🚂</span> Train station — accessible by car',
        exploreThings: 'Explore Things to Do',
        mapPlaceholder: '🗺️ Map will go here<br><br>We will embed a Google Map in the next step',
        contactLabel: 'Get in Touch',
        contactTitle: 'Ready to book your stay?',
        contactSub: 'Reach out and we will check availability for your dates and answer any questions.',
        emailTitle: 'Email us',
        phoneTitle: 'WhatsApp / Phone',
        phoneCopy: 'We will add your number here in the next step'
      },
      booking: {
        headerTitle: 'Check Availability',
        headerSub: 'Select your dates and send a booking request — we confirm within 24 hours.',
        calendarTitle: 'Availability Calendar',
        calendarSub: 'Green dates are available. Click check-in then check-out.',
        legendAvailable: 'Available',
        legendBooked: 'Booked',
        legendSelection: 'Your selection',
        infoBox: '<strong>How it works:</strong> Pick your dates, fill in your details, and send your request. We reply within 24 hours to confirm and arrange payment.',
        requestTitle: 'Booking Request',
        requestSub: 'Fill in your details and we will be in touch to confirm.',
        firstName: 'First name *',
        lastName: 'Last name *',
        email: 'Email *',
        phone: 'Phone / WhatsApp',
        checkin: 'Check-in *',
        checkout: 'Check-out *',
        guests: 'Guests * <span style="font-weight:normal;color:#99a;">(max 6 total)</span>',
        adults: 'Adults',
        adultsSub: 'Age 12 and over',
        children: 'Children',
        childrenSub: 'Age 2 to 12',
        babies: 'Babies',
        babiesSub: 'Age 0 to 2',
        pets: 'Bringing a dog?',
        petNo: 'No pets',
        petSmall1: 'Yes - 1 small dog',
        petSmall2: 'Yes - 2 small dogs',
        petBig1: 'Yes - 1 big dog',
        extras: 'Extras (optional)',
        extraBabycot: 'Baby cot<small>For babies 0-2</small>',
        extraHighchair: 'High chair<small>For toddlers</small>',
        extraLinen: 'Bed linen<small>Sheets and pillowcases</small>',
        extraTowels: 'Towels<small>Bath and beach towels</small>',
        extraBabybath: 'Baby bath<small>Portable tub</small>',
        extraWelcome: 'Welcome pack<small>Arrival essentials</small>',
        onRequest: 'on request',
        welcomeTip: 'Fresh bread, water, coffee, tea, milk and local treats to start your stay.',
        message: 'Questions or special requests?',
        submit: 'Send Booking Request',
        note: 'No payment is taken now. We confirm your dates and arrange payment separately.',
        successTitle: 'Request sent!',
        successCopy: 'Thank you! We will reply within 24 hours to confirm your booking.',
        placeholderFirst: 'Jane',
        placeholderLast: 'Smith',
        placeholderEmail: 'jane@example.com',
        placeholderPhone: '+32 ...',
        placeholderMessage: 'e.g. early check-in, arrival time...'
      },
      things: {
        heroEyebrow: 'Bredene & Belgian Coast',
        heroTitle: 'Things to Do Near Zeewind',
        heroCopy: 'Zeewind II Holiday Park is a relaxed base for beach days, family outings, and easy trips around Bredene and the Belgian coast.',
        guideLabel: 'Local Guide',
        guideTitle: 'Plan more than a place to sleep',
        guideCopy: 'Guests often choose a holiday home because the area feels easy: something for children, something for rainy days, somewhere to swim, and a few simple ideas close to home. This guide starts with one of the newest family-friendly spots in Bredene.',
        introCard: '<strong>Staying at Zeewind II:</strong> you are in Bredene, close to the coast and within reach of local leisure spots, beaches, dunes, restaurants, and day trips along the Belgian seaside.',
        featuredLabel: 'Featured Nearby',
        kicker: 'New in Bredene',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'LAGO Bredene Grasduinen is the new sport and recreation centre in Bredene. It is a strong option for families who want a swimming day nearby, especially when the weather turns or children need a change from the beach.',
        lagoCopy2: 'According to LAGO, the centre includes a swimming paradise with an interactive children\'s pool, a wild-water attraction, outdoor pools, a sauna, a play creek, a bistro, fitness options, and an indoor play area.',
        bestFor: '<strong>Best for</strong> Families, children, swimming, rainy days',
        address: '<strong>Address</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        useful: '<strong>Useful to know</strong> Check opening hours before you go',
        tickets: '<strong>Tickets</strong> Available through the official LAGO website',
        visit: 'Visit LAGO Bredene',
        reasonTitle: 'A handy extra reason to book Zeewind',
        reasonCopy: 'A beach holiday is easier when there is also a nearby pool, play area, and bistro. It gives families another plan without needing a long day trip.',
        official: 'Official LAGO Bredene website',
        moreLabel: 'More Local Ideas',
        moreTitle: 'More tips coming soon',
        moreCopy: 'This guide will grow with more recommendations around Bredene and the Belgian coast.',
        beachTitle: 'Beach and dunes',
        beachCopy: 'Simple coastal days close to Zeewind, with room for walks, sandcastles, and fresh sea air.',
        foodTitle: 'Food and drinks',
        foodCopy: 'Local cafes, restaurants, and easy places to eat after a day outside.',
        tripsTitle: 'Day trips',
        tripsCopy: 'Ideas for exploring more of the Belgian coast from Bredene.',
        ctaLabel: 'Stay at Zeewind',
        ctaTitle: 'Make Bredene your holiday base',
        ctaCopy: 'Choose Zeewind for an easy coastal stay with beach days, family activities, and local outings close by.'
      },
      bookingDynamic: {
        months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        days: ['Mo','Tu','We','Th','Fr','Sa','Su'],
        clickCheckin: 'Click a date to set your check-in.',
        pickCheckout: 'Check-in: <b>{date}</b> — Now pick your check-out.',
        rangeSummary: '<b>{checkin}</b> → <b>{checkout}</b> &nbsp; {nights} {nightLabel}',
        night: 'night',
        nights: 'nights',
        guestTotal: 'Total: {total} / 6 guests',
        bookedRangeAlert: 'Your range includes booked dates. Please choose different dates.',
        formError: 'Something went wrong. Please try again or contact us directly.',
        networkError: 'Could not send. Please contact us directly by email.'
      }
    },
    nl: {
      meta: {
        homeTitle: 'Zeewind - Vakantiehuis aan de Belgische kust',
        homeDescription: 'Zeewind - een mooi vakantiehuis aan de Belgische kust. Hondvriendelijk, private tuin, parking en toegang tot zwembad. Boek vandaag je verblijf.',
        bookingTitle: 'Boek je verblijf - Zeewind',
        bookingDescription: 'Bekijk de beschikbaarheid en stuur een boekingsaanvraag voor vakantiehuis Zeewind in Bredene.',
        thingsTitle: 'Wat te doen in de buurt van Zeewind in Bredene | Belgische kust',
        thingsDescription: 'Ontdek wat er te doen is bij Zeewind II Holiday Park in Bredene, inclusief het nieuwe LAGO Bredene Grasduinen zwembad, stranden, duinen en gezinsvriendelijke activiteiten aan de Belgische kust.'
      },
      common: {
        navHouse: 'Ons huis',
        navAmenities: 'Voorzieningen',
        navGallery: 'Foto’s',
        navLocation: 'Ligging',
        navThings: 'In de Buurt',
        navBook: 'Boeken',
        navContact: 'Contact',
        languageLabel: 'Taal',
        footer: '2025 Zeewind · Vakantiehuis aan de Belgische kust · Alle rechten voorbehouden',
        checkAvailability: 'Bekijk beschikbaarheid'
      },
      home: {
        heroEyebrow: 'Belgische kust · Vakantiehuis',
        heroTagline: 'Word wakker met zeelucht, stap buiten naar je private tuin en geniet van dagen tussen zwembad en strand.',
        discoverMore: 'Ontdek meer',
        badgeBeach: '🌊 Dicht bij het strand',
        badgePet: '🐾 Hondvriendelijk',
        badgePool: '🏊 Zwembadtoegang',
        badgeGarden: '🌿 Private tuin',
        badgeParking: '🚗 Gratis parking',
        houseLabel: 'Het huis',
        houseTitle: 'Een thuis weg van huis aan de Belgische kust',
        houseCopy1: 'Zeewind is een charmant vakantiehuis in een rustig vakantiedomein, vlak bij de Belgische kust. Met zijn warme sfeer en praktische voorzieningen is het een ideale plek voor gezinnen, koppels en vrienden — viervoeters zijn ook welkom.',
        houseCopy2: 'Geniet van je ochtendkoffie in de private tuin, breng ontspannen namiddagen door aan het gedeelde zwembad en sluit de dag af met een wandeling op het strand. Alles voor een fijne vakantie is dichtbij.',
        bedrooms: 'Slaapkamers',
        bathroom: 'Badkamer',
        maxGuests: 'Max. gasten',
        beachAlt: 'Het strand bij Zeewind, op slechts enkele minuten',
        amenitiesLabel: 'Voorzieningen',
        amenitiesTitle: 'Alles wat je nodig hebt',
        amenitiesSub: 'Zeewind is uitgerust en klaar zodat je echt kunt ontspannen en genieten.',
        featureBeachTitle: 'Dicht bij het strand',
        featureBeachCopy: 'Op korte wandelafstand van zee — ideaal voor ochtendzwemmen en avondwandelingen op het zand.',
        featurePoolTitle: 'Zwembadtoegang',
        featurePoolCopy: 'Koel af in het gedeelde zwembad van het vakantiedomein — fijn voor kinderen en volwassenen.',
        featureGardenTitle: 'Private tuin & terras',
        featureGardenCopy: 'Ontspan in je eigen buitenruimte. Barbecue-avonden en ochtendkoffie in de frisse zeelucht.',
        featureParkingTitle: 'Gratis parking',
        featureParkingCopy: 'Private parking ter plaatse betekent zorgeloos aankomen en uitladen.',
        featurePetTitle: 'Hondvriendelijk',
        featurePetCopy: 'Je trouwe huisgenoot is welkom. De tuin geeft huisdieren ruimte om veilig buiten te zijn.',
        featureDomainTitle: 'Vakantiedomein',
        featureDomainCopy: 'Gelegen in een goed onderhouden vakantiepark met faciliteiten en een rustige omgeving.',
        galleryLabel: 'Foto’s',
        galleryTitle: 'Bekijk de sfeer',
        gallerySub: 'Een paar beelden van wat je bij Zeewind mag verwachten.',
        galleryBeachAlt: 'Het strand bij Zeewind',
        galleryDunesAlt: 'Duinen bij Zeewind',
        comingSoon: '📷 Binnenkort meer',
        galleryNote: 'Foto’s van het huis volgen binnenkort. Het strand ligt op slechts enkele minuten.',
        locationLabel: 'Ligging',
        locationTitle: 'Waar vind je ons?',
        locationCopy: 'Zeewind ligt in Zeewind II Holiday Park in Bredene, dicht bij de Belgische kust. Het exacte adres krijg je bij de boekingsbevestiging.',
        nearbyPool: '<span class="nearby-icon">&#127946;</span> LAGO Bredene Grasduinen - nieuw zwembad vlakbij',
        nearbyBeach: '<span class="nearby-icon">🌊</span> Strand — korte wandeling',
        nearbySupermarket: '<span class="nearby-icon">🛒</span> Supermarkt — dichtbij',
        nearbyRestaurants: '<span class="nearby-icon">🍽️</span> Restaurants — makkelijk bereikbaar',
        nearbyTrain: '<span class="nearby-icon">🚂</span> Station — bereikbaar met de auto',
        exploreThings: 'Ontdek wat er te doen is',
        mapPlaceholder: '🗺️ Hier komt de kaart<br><br>In een volgende stap voegen we een Google Map toe',
        contactLabel: 'Contact',
        contactTitle: 'Klaar om je verblijf te boeken?',
        contactSub: 'Neem contact op en we bekijken de beschikbaarheid voor je data en beantwoorden je vragen.',
        emailTitle: 'Mail ons',
        phoneTitle: 'WhatsApp / telefoon',
        phoneCopy: 'We voegen je nummer hier in een volgende stap toe'
      },
      booking: {
        headerTitle: 'Bekijk beschikbaarheid',
        headerSub: 'Kies je data en stuur een boekingsaanvraag — we bevestigen binnen 24 uur.',
        calendarTitle: 'Beschikbaarheidskalender',
        calendarSub: 'Groene data zijn beschikbaar. Klik eerst op aankomst en daarna op vertrek.',
        legendAvailable: 'Beschikbaar',
        legendBooked: 'Geboekt',
        legendSelection: 'Jouw selectie',
        infoBox: '<strong>Zo werkt het:</strong> Kies je data, vul je gegevens in en stuur je aanvraag. We antwoorden binnen 24 uur om te bevestigen en de betaling af te spreken.',
        requestTitle: 'Boekingsaanvraag',
        requestSub: 'Vul je gegevens in en we nemen contact op om te bevestigen.',
        firstName: 'Voornaam *',
        lastName: 'Achternaam *',
        email: 'E-mail *',
        phone: 'Telefoon / WhatsApp',
        checkin: 'Aankomst *',
        checkout: 'Vertrek *',
        guests: 'Gasten * <span style="font-weight:normal;color:#99a;">(max. 6 in totaal)</span>',
        adults: 'Volwassenen',
        adultsSub: 'Vanaf 12 jaar',
        children: 'Kinderen',
        childrenSub: 'Van 2 tot 12 jaar',
        babies: 'Baby’s',
        babiesSub: 'Van 0 tot 2 jaar',
        pets: 'Breng je een hond mee?',
        petNo: 'Geen huisdieren',
        petSmall1: 'Ja - 1 kleine hond',
        petSmall2: 'Ja - 2 kleine honden',
        petBig1: 'Ja - 1 grote hond',
        extras: 'Extra’s (optioneel)',
        extraBabycot: 'Babybed<small>Voor baby’s 0-2</small>',
        extraHighchair: 'Kinderstoel<small>Voor peuters</small>',
        extraLinen: 'Bedlinnen<small>Lakens en kussenslopen</small>',
        extraTowels: 'Handdoeken<small>Bad- en strandhanddoeken</small>',
        extraBabybath: 'Babybad<small>Draagbaar badje</small>',
        extraWelcome: 'Welkomstpakket<small>Basis voor aankomst</small>',
        onRequest: 'op aanvraag',
        welcomeTip: 'Vers brood, water, koffie, thee, melk en lokale lekkernijen om je verblijf goed te starten.',
        message: 'Vragen of speciale wensen?',
        submit: 'Verstuur boekingsaanvraag',
        note: 'Er wordt nu geen betaling gevraagd. We bevestigen je data en spreken de betaling apart af.',
        successTitle: 'Aanvraag verzonden!',
        successCopy: 'Bedankt! We antwoorden binnen 24 uur om je boeking te bevestigen.',
        placeholderFirst: 'Jane',
        placeholderLast: 'Smith',
        placeholderEmail: 'jane@example.com',
        placeholderPhone: '+32 ...',
        placeholderMessage: 'bv. vroege check-in, aankomstuur...'
      },
      things: {
        heroEyebrow: 'Bredene & Belgische kust',
        heroTitle: 'Wat te doen in de buurt van Zeewind',
        heroCopy: 'Zeewind II Holiday Park is een ontspannen uitvalsbasis voor stranddagen, gezinsuitstappen en eenvoudige trips rond Bredene en de Belgische kust.',
        guideLabel: 'Lokale gids',
        guideTitle: 'Meer dan alleen een plek om te slapen',
        guideCopy: 'Gasten kiezen vaak voor een vakantiehuis omdat de omgeving makkelijk aanvoelt: iets voor kinderen, iets voor regenachtige dagen, een plek om te zwemmen en enkele eenvoudige ideeën dichtbij. Deze gids start met een van de nieuwste gezinsvriendelijke plekken in Bredene.',
        introCard: '<strong>Verblijf in Zeewind II:</strong> je zit in Bredene, dicht bij de kust en vlak bij lokale ontspanning, stranden, duinen, restaurants en daguitstappen langs de Belgische kust.',
        featuredLabel: 'Aanrader dichtbij',
        kicker: 'Nieuw in Bredene',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'LAGO Bredene Grasduinen is het nieuwe sport- en recreatiecentrum in Bredene. Het is een sterke optie voor gezinnen die dichtbij willen zwemmen, zeker wanneer het weer omslaat of kinderen eens iets anders willen dan het strand.',
        lagoCopy2: 'Volgens LAGO vind je er een zwemparadijs met interactief kinderbad, wildwaterbaan, buitenbaden, sauna, speelkreek, bistro, fitnessmogelijkheden en een binnenspeeltuin.',
        bestFor: '<strong>Ideaal voor</strong> Gezinnen, kinderen, zwemmen, regenachtige dagen',
        address: '<strong>Adres</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        useful: '<strong>Goed om te weten</strong> Controleer de openingsuren voor vertrek',
        tickets: '<strong>Tickets</strong> Beschikbaar via de officiële LAGO-website',
        visit: 'Bezoek LAGO Bredene',
        reasonTitle: 'Een extra goede reden om Zeewind te boeken',
        reasonCopy: 'Een strandvakantie wordt makkelijker wanneer er ook een zwembad, speelruimte en bistro in de buurt zijn. Zo hebben gezinnen een extra plan zonder lange uitstap.',
        official: 'Officiële website van LAGO Bredene',
        moreLabel: 'Meer lokale tips',
        moreTitle: 'Binnenkort meer tips',
        moreCopy: 'Deze gids groeit verder met meer aanbevelingen rond Bredene en de Belgische kust.',
        beachTitle: 'Strand en duinen',
        beachCopy: 'Eenvoudige kustdagen dicht bij Zeewind, met ruimte voor wandelingen, zandkastelen en frisse zeelucht.',
        foodTitle: 'Eten en drinken',
        foodCopy: 'Lokale cafés, restaurants en makkelijke plekken om te eten na een dag buiten.',
        tripsTitle: 'Daguitstappen',
        tripsCopy: 'Ideeën om meer van de Belgische kust te ontdekken vanuit Bredene.',
        ctaLabel: 'Verblijf in Zeewind',
        ctaTitle: 'Maak van Bredene je vakantiebasis',
        ctaCopy: 'Kies Zeewind voor een zorgeloos verblijf aan de kust met stranddagen, gezinsactiviteiten en lokale uitstappen dichtbij.'
      },
      bookingDynamic: {
        months: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'],
        days: ['Ma','Di','Wo','Do','Vr','Za','Zo'],
        clickCheckin: 'Klik op een datum om je aankomst te kiezen.',
        pickCheckout: 'Aankomst: <b>{date}</b> — Kies nu je vertrekdatum.',
        rangeSummary: '<b>{checkin}</b> → <b>{checkout}</b> &nbsp; {nights} {nightLabel}',
        night: 'nacht',
        nights: 'nachten',
        guestTotal: 'Totaal: {total} / 6 gasten',
        bookedRangeAlert: 'Je periode bevat geboekte data. Kies andere data.',
        formError: 'Er ging iets mis. Probeer opnieuw of neem rechtstreeks contact op.',
        networkError: 'Verzenden lukte niet. Neem rechtstreeks contact op via e-mail.'
      }
    },
    fr: {
      meta: {
        homeTitle: 'Zeewind - Maison de vacances à la côte belge',
        homeDescription: 'Zeewind - une belle maison de vacances à la côte belge. Chien admis, jardin privé, parking et accès à la piscine. Réservez votre séjour.',
        bookingTitle: 'Réserver votre séjour - Zeewind',
        bookingDescription: 'Consultez les disponibilités et envoyez une demande de réservation pour la maison de vacances Zeewind à Bredene.',
        thingsTitle: 'Que faire près de Zeewind à Bredene | Côte belge',
        thingsDescription: 'Découvrez les activités près du Zeewind II Holiday Park à Bredene, dont la nouvelle piscine LAGO Bredene Grasduinen, les plages, les dunes et les sorties familiales à la côte belge.'
      },
      common: {
        navHouse: 'Notre maison',
        navAmenities: 'Équipements',
        navGallery: 'Photos',
        navLocation: 'Situation',
        navThings: 'Dans les environs',
        navBook: 'Réserver',
        navContact: 'Contact',
        languageLabel: 'Langue',
        footer: '2025 Zeewind · Maison de vacances à la côte belge · Tous droits réservés',
        checkAvailability: 'Voir les disponibilités'
      },
      home: {
        heroEyebrow: 'Côte belge · Maison de vacances',
        heroTagline: 'Réveillez-vous avec l’air marin, profitez de votre jardin privé et passez vos journées entre piscine et plage.',
        discoverMore: 'Découvrir',
        badgeBeach: '🌊 Près de la plage',
        badgePet: '🐾 Chien admis',
        badgePool: '🏊 Accès piscine',
        badgeGarden: '🌿 Jardin privé',
        badgeParking: '🚗 Parking gratuit',
        houseLabel: 'La maison',
        houseTitle: 'Un chez-soi à la côte belge',
        houseCopy1: 'Zeewind est une charmante maison de vacances située dans un domaine paisible, à deux pas de la côte belge. Avec son atmosphère chaleureuse et ses équipements pratiques, c’est un refuge idéal pour familles, couples et amis — compagnons à quatre pattes bienvenus.',
        houseCopy2: 'Savourez votre café du matin dans le jardin privé, profitez des après-midis à la piscine commune et terminez la journée par une promenade sur la plage. Tout est réuni pour de belles vacances.',
        bedrooms: 'Chambres',
        bathroom: 'Salle de bain',
        maxGuests: 'Pers. max.',
        beachAlt: 'La plage près de Zeewind, à quelques minutes',
        amenitiesLabel: 'Équipements',
        amenitiesTitle: 'Tout ce qu’il faut',
        amenitiesSub: 'Zeewind est équipé et prêt pour vous permettre de vraiment déconnecter.',
        featureBeachTitle: 'Près de la plage',
        featureBeachCopy: 'À courte distance à pied de la mer — parfait pour nager le matin et se promener le soir.',
        featurePoolTitle: 'Accès piscine',
        featurePoolCopy: 'Rafraîchissez-vous dans la piscine commune du domaine — idéale pour petits et grands.',
        featureGardenTitle: 'Jardin privé & terrasse',
        featureGardenCopy: 'Détendez-vous dans votre espace extérieur. Barbecues et cafés du matin au grand air marin.',
        featureParkingTitle: 'Parking gratuit',
        featureParkingCopy: 'Parking privé sur place pour arriver et décharger sans stress.',
        featurePetTitle: 'Chien admis',
        featurePetCopy: 'Votre compagnon est le bienvenu. Le jardin lui offre un espace extérieur agréable.',
        featureDomainTitle: 'Domaine de vacances',
        featureDomainCopy: 'Situé dans un parc de vacances bien entretenu, avec installations et environnement calme.',
        galleryLabel: 'Photos',
        galleryTitle: 'Voyez par vous-même',
        gallerySub: 'Quelques images de l’atmosphère qui vous attend à Zeewind.',
        galleryBeachAlt: 'La plage près de Zeewind',
        galleryDunesAlt: 'Les dunes près de Zeewind',
        comingSoon: '📷 Bientôt',
        galleryNote: 'Les photos de la maison arrivent bientôt. La plage est à quelques minutes.',
        locationLabel: 'Situation',
        locationTitle: 'Où nous trouver',
        locationCopy: 'Zeewind se trouve au Zeewind II Holiday Park à Bredene, près de la côte belge. L’adresse exacte est communiquée lors de la confirmation de réservation.',
        nearbyPool: '<span class="nearby-icon">&#127946;</span> LAGO Bredene Grasduinen - nouvelle piscine à proximité',
        nearbyBeach: '<span class="nearby-icon">🌊</span> Plage — courte promenade',
        nearbySupermarket: '<span class="nearby-icon">🛒</span> Supermarché — à proximité',
        nearbyRestaurants: '<span class="nearby-icon">🍽️</span> Restaurants — faciles d’accès',
        nearbyTrain: '<span class="nearby-icon">🚂</span> Gare — accessible en voiture',
        exploreThings: 'Découvrir les activités',
        mapPlaceholder: '🗺️ La carte viendra ici<br><br>Nous ajouterons une carte Google à l’étape suivante',
        contactLabel: 'Contact',
        contactTitle: 'Prêt à réserver votre séjour ?',
        contactSub: 'Contactez-nous et nous vérifierons les disponibilités pour vos dates.',
        emailTitle: 'Envoyez-nous un e-mail',
        phoneTitle: 'WhatsApp / téléphone',
        phoneCopy: 'Nous ajouterons votre numéro ici à l’étape suivante'
      },
      booking: {
        headerTitle: 'Voir les disponibilités',
        headerSub: 'Sélectionnez vos dates et envoyez une demande — nous confirmons sous 24 heures.',
        calendarTitle: 'Calendrier des disponibilités',
        calendarSub: 'Les dates vertes sont disponibles. Cliquez sur l’arrivée puis sur le départ.',
        legendAvailable: 'Disponible',
        legendBooked: 'Réservé',
        legendSelection: 'Votre sélection',
        infoBox: '<strong>Comment ça marche :</strong> Choisissez vos dates, remplissez vos coordonnées et envoyez votre demande. Nous répondons sous 24 heures pour confirmer et organiser le paiement.',
        requestTitle: 'Demande de réservation',
        requestSub: 'Remplissez vos coordonnées et nous vous recontacterons pour confirmer.',
        firstName: 'Prénom *',
        lastName: 'Nom *',
        email: 'E-mail *',
        phone: 'Téléphone / WhatsApp',
        checkin: 'Arrivée *',
        checkout: 'Départ *',
        guests: 'Voyageurs * <span style="font-weight:normal;color:#99a;">(max. 6 au total)</span>',
        adults: 'Adultes',
        adultsSub: '12 ans et plus',
        children: 'Enfants',
        childrenSub: 'De 2 à 12 ans',
        babies: 'Bébés',
        babiesSub: 'De 0 à 2 ans',
        pets: 'Vous venez avec un chien ?',
        petNo: 'Pas d’animaux',
        petSmall1: 'Oui - 1 petit chien',
        petSmall2: 'Oui - 2 petits chiens',
        petBig1: 'Oui - 1 grand chien',
        extras: 'Extras (facultatif)',
        extraBabycot: 'Lit bébé<small>Pour bébés 0-2</small>',
        extraHighchair: 'Chaise haute<small>Pour tout-petits</small>',
        extraLinen: 'Linge de lit<small>Draps et taies</small>',
        extraTowels: 'Serviettes<small>Bain et plage</small>',
        extraBabybath: 'Baignoire bébé<small>Baignoire portable</small>',
        extraWelcome: 'Pack de bienvenue<small>Essentiels d’arrivée</small>',
        onRequest: 'sur demande',
        welcomeTip: 'Pain frais, eau, café, thé, lait et douceurs locales pour bien commencer votre séjour.',
        message: 'Questions ou demandes spéciales ?',
        submit: 'Envoyer la demande',
        note: 'Aucun paiement n’est demandé maintenant. Nous confirmons vos dates et organisons le paiement séparément.',
        successTitle: 'Demande envoyée !',
        successCopy: 'Merci ! Nous répondrons sous 24 heures pour confirmer votre réservation.',
        placeholderFirst: 'Jane',
        placeholderLast: 'Smith',
        placeholderEmail: 'jane@example.com',
        placeholderPhone: '+32 ...',
        placeholderMessage: 'p. ex. arrivée anticipée, heure d’arrivée...'
      },
      things: {
        heroEyebrow: 'Bredene & côte belge',
        heroTitle: 'Que faire près de Zeewind',
        heroCopy: 'Le Zeewind II Holiday Park est une base détendue pour les journées à la plage, les sorties en famille et les excursions autour de Bredene et de la côte belge.',
        guideLabel: 'Guide local',
        guideTitle: 'Plus qu’un endroit où dormir',
        guideCopy: 'Les voyageurs choisissent souvent une maison de vacances parce que la région est facile à vivre : quelque chose pour les enfants, une idée pour les jours de pluie, un endroit pour nager et des sorties simples à proximité. Ce guide commence par l’une des nouveautés familiales de Bredene.',
        introCard: '<strong>Séjourner à Zeewind II :</strong> vous êtes à Bredene, près de la côte et à portée des loisirs locaux, plages, dunes, restaurants et excursions à la côte belge.',
        featuredLabel: 'À proximité',
        kicker: 'Nouveau à Bredene',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'LAGO Bredene Grasduinen est le nouveau centre sportif et récréatif de Bredene. C’est une bonne option pour les familles qui veulent nager près de Zeewind, surtout quand la météo change ou que les enfants veulent varier de la plage.',
        lagoCopy2: 'Selon LAGO, le centre comprend un paradis aquatique avec pataugeoire interactive, rivière sauvage, bassins extérieurs, sauna, ruisseau de jeu, bistro, fitness et aire de jeux intérieure.',
        bestFor: '<strong>Idéal pour</strong> Familles, enfants, natation, jours de pluie',
        address: '<strong>Adresse</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        useful: '<strong>Bon à savoir</strong> Vérifiez les heures d’ouverture avant de partir',
        tickets: '<strong>Tickets</strong> Disponibles via le site officiel de LAGO',
        visit: 'Visiter LAGO Bredene',
        reasonTitle: 'Une bonne raison de plus de réserver Zeewind',
        reasonCopy: 'Des vacances à la plage sont plus simples lorsqu’il y a aussi une piscine, une aire de jeux et un bistro à proximité. Les familles ont ainsi un plan de plus sans longue excursion.',
        official: 'Site officiel de LAGO Bredene',
        moreLabel: 'Plus d’idées locales',
        moreTitle: 'Plus de conseils bientôt',
        moreCopy: 'Ce guide s’enrichira avec d’autres recommandations autour de Bredene et de la côte belge.',
        beachTitle: 'Plage et dunes',
        beachCopy: 'Des journées simples au bord de la mer, près de Zeewind, entre promenades, châteaux de sable et air marin.',
        foodTitle: 'Manger et boire',
        foodCopy: 'Cafés locaux, restaurants et bonnes adresses faciles après une journée dehors.',
        tripsTitle: 'Excursions',
        tripsCopy: 'Des idées pour explorer davantage la côte belge depuis Bredene.',
        ctaLabel: 'Séjourner à Zeewind',
        ctaTitle: 'Faites de Bredene votre base de vacances',
        ctaCopy: 'Choisissez Zeewind pour un séjour facile à la côte, entre plage, activités familiales et sorties locales.'
      },
      bookingDynamic: {
        months: ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
        days: ['Lu','Ma','Me','Je','Ve','Sa','Di'],
        clickCheckin: 'Cliquez sur une date pour choisir votre arrivée.',
        pickCheckout: 'Arrivée : <b>{date}</b> — Choisissez maintenant le départ.',
        rangeSummary: '<b>{checkin}</b> → <b>{checkout}</b> &nbsp; {nights} {nightLabel}',
        night: 'nuit',
        nights: 'nuits',
        guestTotal: 'Total : {total} / 6 voyageurs',
        bookedRangeAlert: 'Votre période contient des dates déjà réservées. Veuillez choisir d’autres dates.',
        formError: 'Une erreur s’est produite. Réessayez ou contactez-nous directement.',
        networkError: 'L’envoi a échoué. Veuillez nous contacter directement par e-mail.'
      }
    },
    de: {
      meta: {
        homeTitle: 'Zeewind - Ferienhaus an der belgischen Küste',
        homeDescription: 'Zeewind - ein schönes Ferienhaus an der belgischen Küste. Hundefreundlich, privater Garten, Parkplatz und Zugang zum Pool. Buchen Sie Ihren Aufenthalt.',
        bookingTitle: 'Aufenthalt buchen - Zeewind',
        bookingDescription: 'Prüfen Sie die Verfügbarkeit und senden Sie eine Buchungsanfrage für das Ferienhaus Zeewind in Bredene.',
        thingsTitle: 'Aktivitäten in der Nähe von Zeewind in Bredene | Belgische Küste',
        thingsDescription: 'Entdecken Sie Aktivitäten beim Zeewind II Holiday Park in Bredene, darunter das neue Schwimmbad LAGO Bredene Grasduinen, Strände, Dünen und familienfreundliche Ausflüge an der belgischen Küste.'
      },
      common: {
        navHouse: 'Unser Zuhause',
        navAmenities: 'Ausstattung',
        navGallery: 'Galerie',
        navLocation: 'Lage',
        navThings: 'In der Umgebung',
        navBook: 'Buchen',
        navContact: 'Kontakt',
        languageLabel: 'Sprache',
        footer: '2025 Zeewind · Ferienhaus an der belgischen Küste · Alle Rechte vorbehalten',
        checkAvailability: 'Verfügbarkeit prüfen'
      },
      home: {
        heroEyebrow: 'Belgische Küste · Ferienhaus',
        heroTagline: 'Wachen Sie mit Meeresluft auf, treten Sie in Ihren privaten Garten und verbringen Sie die Tage zwischen Pool und Strand.',
        discoverMore: 'Mehr entdecken',
        badgeBeach: '🌊 Strandnah',
        badgePet: '🐾 Hundefreundlich',
        badgePool: '🏊 Poolzugang',
        badgeGarden: '🌿 Privater Garten',
        badgeParking: '🚗 Kostenlos parken',
        houseLabel: 'Das Haus',
        houseTitle: 'Ein Zuhause an der belgischen Küste',
        houseCopy1: 'Zeewind ist ein charmantes Ferienhaus in einer ruhigen Ferienanlage, nur wenige Schritte von der belgischen Küste entfernt. Mit warmer Atmosphäre und praktischer Ausstattung ist es ideal für Familien, Paare und Freunde — vierbeinige Begleiter sind ebenfalls willkommen.',
        houseCopy2: 'Genießen Sie den Morgenkaffee im privaten Garten, entspannte Nachmittage am Gemeinschaftspool und abends einen Spaziergang am Strand. Alles für einen gelungenen Urlaub ist da.',
        bedrooms: 'Schlafzimmer',
        bathroom: 'Bad',
        maxGuests: 'Max. Gäste',
        beachAlt: 'Der Strand bei Zeewind, nur wenige Minuten entfernt',
        amenitiesLabel: 'Ausstattung',
        amenitiesTitle: 'Alles, was Sie brauchen',
        amenitiesSub: 'Zeewind ist ausgestattet und bereit, damit Sie wirklich abschalten können.',
        featureBeachTitle: 'Strandnah',
        featureBeachCopy: 'Nur ein kurzer Spaziergang bis zum Meer — ideal zum morgendlichen Schwimmen und für Abendspaziergänge.',
        featurePoolTitle: 'Poolzugang',
        featurePoolCopy: 'Abkühlen im Gemeinschaftspool der Ferienanlage — perfekt für Kinder und Erwachsene.',
        featureGardenTitle: 'Privater Garten & Terrasse',
        featureGardenCopy: 'Entspannen Sie in Ihrem eigenen Außenbereich. Grillabende und Morgenkaffee in frischer Meeresluft.',
        featureParkingTitle: 'Kostenlos parken',
        featureParkingCopy: 'Privater Parkplatz vor Ort: stressfrei ankommen und ausladen.',
        featurePetTitle: 'Hundefreundlich',
        featurePetCopy: 'Ihr vierbeiniger Freund ist willkommen. Der Garten bietet sicheren Platz im Freien.',
        featureDomainTitle: 'Ferienanlage',
        featureDomainCopy: 'Teil eines gepflegten Ferienparks mit Einrichtungen und ruhiger Umgebung.',
        galleryLabel: 'Galerie',
        galleryTitle: 'Ein erster Eindruck',
        gallerySub: 'Ein paar Eindrücke von dem, was Sie bei Zeewind erwartet.',
        galleryBeachAlt: 'Der Strand bei Zeewind',
        galleryDunesAlt: 'Dünen bei Zeewind',
        comingSoon: '📷 Demnächst',
        galleryNote: 'Fotos vom Haus folgen bald. Der Strand ist nur wenige Minuten entfernt.',
        locationLabel: 'Lage',
        locationTitle: 'Wo Sie uns finden',
        locationCopy: 'Zeewind liegt im Zeewind II Holiday Park in Bredene, nahe der belgischen Küste. Die genaue Adresse erhalten Sie mit der Buchungsbestätigung.',
        nearbyPool: '<span class="nearby-icon">&#127946;</span> LAGO Bredene Grasduinen - neues Schwimmbad in der Nähe',
        nearbyBeach: '<span class="nearby-icon">🌊</span> Strand — kurzer Spaziergang',
        nearbySupermarket: '<span class="nearby-icon">🛒</span> Supermarkt — in der Nähe',
        nearbyRestaurants: '<span class="nearby-icon">🍽️</span> Restaurants — gut erreichbar',
        nearbyTrain: '<span class="nearby-icon">🚂</span> Bahnhof — mit dem Auto erreichbar',
        exploreThings: 'Aktivitäten entdecken',
        mapPlaceholder: '🗺️ Hier kommt die Karte hin<br><br>Im nächsten Schritt binden wir eine Google Map ein',
        contactLabel: 'Kontakt',
        contactTitle: 'Bereit, Ihren Aufenthalt zu buchen?',
        contactSub: 'Kontaktieren Sie uns, und wir prüfen die Verfügbarkeit für Ihre Reisedaten.',
        emailTitle: 'E-Mail senden',
        phoneTitle: 'WhatsApp / Telefon',
        phoneCopy: 'Wir fügen Ihre Nummer im nächsten Schritt hier ein'
      },
      booking: {
        headerTitle: 'Verfügbarkeit prüfen',
        headerSub: 'Wählen Sie Ihre Daten und senden Sie eine Anfrage — wir bestätigen innerhalb von 24 Stunden.',
        calendarTitle: 'Verfügbarkeitskalender',
        calendarSub: 'Grüne Daten sind verfügbar. Klicken Sie zuerst auf Anreise und dann auf Abreise.',
        legendAvailable: 'Verfügbar',
        legendBooked: 'Gebucht',
        legendSelection: 'Ihre Auswahl',
        infoBox: '<strong>So funktioniert es:</strong> Wählen Sie Ihre Daten, füllen Sie Ihre Angaben aus und senden Sie die Anfrage. Wir antworten innerhalb von 24 Stunden zur Bestätigung und Zahlungsabsprache.',
        requestTitle: 'Buchungsanfrage',
        requestSub: 'Füllen Sie Ihre Angaben aus und wir melden uns zur Bestätigung.',
        firstName: 'Vorname *',
        lastName: 'Nachname *',
        email: 'E-Mail *',
        phone: 'Telefon / WhatsApp',
        checkin: 'Anreise *',
        checkout: 'Abreise *',
        guests: 'Gäste * <span style="font-weight:normal;color:#99a;">(max. 6 insgesamt)</span>',
        adults: 'Erwachsene',
        adultsSub: 'Ab 12 Jahren',
        children: 'Kinder',
        childrenSub: 'Von 2 bis 12 Jahren',
        babies: 'Babys',
        babiesSub: 'Von 0 bis 2 Jahren',
        pets: 'Bringen Sie einen Hund mit?',
        petNo: 'Keine Haustiere',
        petSmall1: 'Ja - 1 kleiner Hund',
        petSmall2: 'Ja - 2 kleine Hunde',
        petBig1: 'Ja - 1 großer Hund',
        extras: 'Extras (optional)',
        extraBabycot: 'Babybett<small>Für Babys 0-2</small>',
        extraHighchair: 'Hochstuhl<small>Für Kleinkinder</small>',
        extraLinen: 'Bettwäsche<small>Laken und Kissenbezüge</small>',
        extraTowels: 'Handtücher<small>Bad und Strand</small>',
        extraBabybath: 'Babybadewanne<small>Tragbare Wanne</small>',
        extraWelcome: 'Willkommenspaket<small>Essentials bei Ankunft</small>',
        onRequest: 'auf Anfrage',
        welcomeTip: 'Frisches Brot, Wasser, Kaffee, Tee, Milch und lokale Kleinigkeiten für einen guten Start.',
        message: 'Fragen oder besondere Wünsche?',
        submit: 'Buchungsanfrage senden',
        note: 'Jetzt wird keine Zahlung vorgenommen. Wir bestätigen Ihre Daten und regeln die Zahlung separat.',
        successTitle: 'Anfrage gesendet!',
        successCopy: 'Vielen Dank! Wir antworten innerhalb von 24 Stunden, um Ihre Buchung zu bestätigen.',
        placeholderFirst: 'Jane',
        placeholderLast: 'Smith',
        placeholderEmail: 'jane@example.com',
        placeholderPhone: '+32 ...',
        placeholderMessage: 'z. B. frühe Anreise, Ankunftszeit...'
      },
      things: {
        heroEyebrow: 'Bredene & belgische Küste',
        heroTitle: 'Aktivitäten in der Nähe von Zeewind',
        heroCopy: 'Der Zeewind II Holiday Park ist ein entspannter Ausgangspunkt für Strandtage, Familienausflüge und einfache Touren rund um Bredene und die belgische Küste.',
        guideLabel: 'Lokaler Guide',
        guideTitle: 'Mehr als nur ein Schlafplatz',
        guideCopy: 'Gäste wählen ein Ferienhaus oft, weil die Umgebung unkompliziert ist: etwas für Kinder, etwas für Regentage, ein Ort zum Schwimmen und ein paar Ideen in der Nähe. Dieser Guide startet mit einem der neuesten familienfreundlichen Orte in Bredene.',
        introCard: '<strong>Aufenthalt in Zeewind II:</strong> Sie sind in Bredene, nahe der Küste und in Reichweite lokaler Freizeitangebote, Strände, Dünen, Restaurants und Tagesausflüge an der belgischen Küste.',
        featuredLabel: 'In der Nähe',
        kicker: 'Neu in Bredene',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'LAGO Bredene Grasduinen ist das neue Sport- und Freizeitzentrum in Bredene. Es ist eine gute Option für Familien, die in der Nähe schwimmen möchten, besonders bei wechselhaftem Wetter oder wenn Kinder Abwechslung vom Strand brauchen.',
        lagoCopy2: 'Laut LAGO umfasst das Zentrum ein Schwimmparadies mit interaktivem Kinderbecken, Wildwasserattraktion, Außenbecken, Sauna, Spielbach, Bistro, Fitnessangeboten und Indoor-Spielbereich.',
        bestFor: '<strong>Ideal für</strong> Familien, Kinder, Schwimmen, Regentage',
        address: '<strong>Adresse</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        useful: '<strong>Gut zu wissen</strong> Öffnungszeiten vor dem Besuch prüfen',
        tickets: '<strong>Tickets</strong> Über die offizielle LAGO-Website erhältlich',
        visit: 'LAGO Bredene besuchen',
        reasonTitle: 'Ein zusätzlicher Grund, Zeewind zu buchen',
        reasonCopy: 'Ein Strandurlaub ist einfacher, wenn es auch einen Pool, Spielbereich und ein Bistro in der Nähe gibt. So haben Familien einen weiteren Plan ohne langen Ausflug.',
        official: 'Offizielle Website von LAGO Bredene',
        moreLabel: 'Weitere lokale Ideen',
        moreTitle: 'Weitere Tipps folgen',
        moreCopy: 'Dieser Guide wird mit weiteren Empfehlungen rund um Bredene und die belgische Küste wachsen.',
        beachTitle: 'Strand und Dünen',
        beachCopy: 'Einfache Küstentage nahe Zeewind, mit Platz für Spaziergänge, Sandburgen und frische Meeresluft.',
        foodTitle: 'Essen und Trinken',
        foodCopy: 'Lokale Cafés, Restaurants und einfache Adressen für eine Mahlzeit nach einem Tag draußen.',
        tripsTitle: 'Tagesausflüge',
        tripsCopy: 'Ideen, um mehr von der belgischen Küste ab Bredene zu entdecken.',
        ctaLabel: 'Aufenthalt in Zeewind',
        ctaTitle: 'Machen Sie Bredene zu Ihrer Urlaubsbasis',
        ctaCopy: 'Wählen Sie Zeewind für einen unkomplizierten Küstenaufenthalt mit Strandtagen, Familienaktivitäten und lokalen Ausflügen in der Nähe.'
      },
      bookingDynamic: {
        months: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
        days: ['Mo','Di','Mi','Do','Fr','Sa','So'],
        clickCheckin: 'Klicken Sie auf ein Datum für Ihre Anreise.',
        pickCheckout: 'Anreise: <b>{date}</b> — Wählen Sie nun Ihre Abreise.',
        rangeSummary: '<b>{checkin}</b> → <b>{checkout}</b> &nbsp; {nights} {nightLabel}',
        night: 'Nacht',
        nights: 'Nächte',
        guestTotal: 'Gesamt: {total} / 6 Gäste',
        bookedRangeAlert: 'Der gewählte Zeitraum enthält gebuchte Daten. Bitte wählen Sie andere Daten.',
        formError: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
        networkError: 'Senden nicht möglich. Bitte kontaktieren Sie uns direkt per E-Mail.'
      }
    }
  };

  var COMMON_RULES = [
    ['.nav-links a[href="#about"], .nav-links a[href="index.html#about"]', 'common.navHouse'],
    ['.nav-links a[href="#features"], .nav-links a[href="index.html#features"]', 'common.navAmenities'],
    ['.nav-links a[href="#gallery"], .nav-links a[href="index.html#gallery"]', 'common.navGallery'],
    ['.nav-links a[href="#location"], .nav-links a[href="index.html#location"]', 'common.navLocation'],
    ['.nav-links a[href="things-to-do.html"]', 'common.navThings'],
    ['.nav-links a[href="booking.html"]', 'common.navBook'],
    ['.nav-links a[href="#contact"], .nav-links a[href="index.html#contact"]', 'common.navContact'],
    ['footer p', 'common.footer']
  ];

  var PAGE_RULES = {
    home: [
      ['.hero-eyebrow', 'home.heroEyebrow'],
      ['.hero-tagline', 'home.heroTagline'],
      ['.hero .btn-primary', 'common.checkAvailability'],
      ['.hero .btn-outline', 'home.discoverMore'],
      ['.hero-badges .badge:nth-child(1)', 'home.badgeBeach'],
      ['.hero-badges .badge:nth-child(2)', 'home.badgePet'],
      ['.hero-badges .badge:nth-child(3)', 'home.badgePool'],
      ['.hero-badges .badge:nth-child(4)', 'home.badgeGarden'],
      ['.hero-badges .badge:nth-child(5)', 'home.badgeParking'],
      ['#about .section-label', 'home.houseLabel'],
      ['#about .section-title', 'home.houseTitle'],
      ['#about p[style*="margin-bottom:1rem"]', 'home.houseCopy1'],
      ['#about p[style*="margin-bottom:2rem"]', 'home.houseCopy2'],
      ['#about div[style*="display:flex"] > div:nth-child(1) div:nth-child(2)', 'home.bedrooms'],
      ['#about div[style*="display:flex"] > div:nth-child(2) div:nth-child(2)', 'home.bathroom'],
      ['#about div[style*="display:flex"] > div:nth-child(3) div:nth-child(2)', 'home.maxGuests'],
      ['#about .btn-primary', 'common.checkAvailability'],
      ['.about-image img', 'home.beachAlt', 'alt'],
      ['#features .section-label', 'home.amenitiesLabel'],
      ['#features .section-title', 'home.amenitiesTitle'],
      ['#features .section-sub', 'home.amenitiesSub'],
      ['#features .feature-card:nth-child(1) h3', 'home.featureBeachTitle'],
      ['#features .feature-card:nth-child(1) p', 'home.featureBeachCopy'],
      ['#features .feature-card:nth-child(2) h3', 'home.featurePoolTitle'],
      ['#features .feature-card:nth-child(2) p', 'home.featurePoolCopy'],
      ['#features .feature-card:nth-child(3) h3', 'home.featureGardenTitle'],
      ['#features .feature-card:nth-child(3) p', 'home.featureGardenCopy'],
      ['#features .feature-card:nth-child(4) h3', 'home.featureParkingTitle'],
      ['#features .feature-card:nth-child(4) p', 'home.featureParkingCopy'],
      ['#features .feature-card:nth-child(5) h3', 'home.featurePetTitle'],
      ['#features .feature-card:nth-child(5) p', 'home.featurePetCopy'],
      ['#features .feature-card:nth-child(6) h3', 'home.featureDomainTitle'],
      ['#features .feature-card:nth-child(6) p', 'home.featureDomainCopy'],
      ['#gallery .section-label', 'home.galleryLabel'],
      ['#gallery .section-title', 'home.galleryTitle'],
      ['#gallery .section-sub', 'home.gallerySub'],
      ['#gallery img[src="beach1.png"]', 'home.galleryBeachAlt', 'alt'],
      ['#gallery img[src="beach2.png"]', 'home.galleryDunesAlt', 'alt'],
      ['#gallery .gallery-item:nth-child(3)', 'home.comingSoon'],
      ['#gallery .gallery-item:nth-child(4)', 'home.comingSoon'],
      ['#gallery .gallery-item:nth-child(5)', 'home.comingSoon'],
      ['#gallery .gallery-note', 'home.galleryNote'],
      ['#location .section-label', 'home.locationLabel'],
      ['#location .section-title', 'home.locationTitle'],
      ['#location p[style*="margin-bottom:1.5rem"]', 'home.locationCopy'],
      ['#location .nearby-list li:nth-child(1)', 'home.nearbyPool', 'html'],
      ['#location .nearby-list li:nth-child(2)', 'home.nearbyBeach', 'html'],
      ['#location .nearby-list li:nth-child(3)', 'home.nearbySupermarket', 'html'],
      ['#location .nearby-list li:nth-child(4)', 'home.nearbyRestaurants', 'html'],
      ['#location .nearby-list li:nth-child(5)', 'home.nearbyTrain', 'html'],
      ['#location .btn-primary', 'home.exploreThings'],
      ['#location .location-map span', 'home.mapPlaceholder', 'html'],
      ['#contact .section-label', 'home.contactLabel'],
      ['#contact .section-title', 'home.contactTitle'],
      ['#contact .section-sub', 'home.contactSub'],
      ['#contact .contact-card:nth-child(1) h3', 'home.emailTitle'],
      ['#contact .contact-card:nth-child(2) h3', 'home.phoneTitle'],
      ['#contact .contact-card:nth-child(2) p', 'home.phoneCopy']
    ],
    booking: [
      ['.page-header h1', 'booking.headerTitle'],
      ['.page-header p', 'booking.headerSub'],
      ['.booking-wrapper > div:first-child .card h2', 'booking.calendarTitle'],
      ['.booking-wrapper > div:first-child .card .sub', 'booking.calendarSub'],
      ['.legend .legend-item:nth-child(1)', 'booking.legendAvailable', 'legend'],
      ['.legend .legend-item:nth-child(2)', 'booking.legendBooked', 'legend'],
      ['.legend .legend-item:nth-child(3)', 'booking.legendSelection', 'legend'],
      ['.info-box', 'booking.infoBox', 'html'],
      ['.booking-wrapper > .card h2', 'booking.requestTitle'],
      ['.booking-wrapper > .card .sub', 'booking.requestSub'],
      ['input[name="first_name"]', 'booking.placeholderFirst', 'placeholder'],
      ['input[name="last_name"]', 'booking.placeholderLast', 'placeholder'],
      ['input[name="email"]', 'booking.placeholderEmail', 'placeholder'],
      ['input[name="phone"]', 'booking.placeholderPhone', 'placeholder'],
      ['textarea[name="message"]', 'booking.placeholderMessage', 'placeholder'],
      ['.form-row:nth-of-type(1) .form-group:nth-child(1) label', 'booking.firstName'],
      ['.form-row:nth-of-type(1) .form-group:nth-child(2) label', 'booking.lastName'],
      ['input[name="email"]', 'booking.email', 'previousLabel'],
      ['input[name="phone"]', 'booking.phone', 'previousLabel'],
      ['input[name="checkin"]', 'booking.checkin', 'previousLabel'],
      ['input[name="checkout"]', 'booking.checkout', 'previousLabel'],
      ['.form-group:nth-of-type(4) > label', 'booking.guests', 'html'],
      ['.guest-row:nth-child(1) .g-label', 'booking.adults'],
      ['.guest-row:nth-child(1) .g-sub', 'booking.adultsSub'],
      ['.guest-row:nth-child(2) .g-label', 'booking.children'],
      ['.guest-row:nth-child(2) .g-sub', 'booking.childrenSub'],
      ['.guest-row:nth-child(3) .g-label', 'booking.babies'],
      ['.guest-row:nth-child(3) .g-sub', 'booking.babiesSub'],
      ['select[name="pets"]', 'booking.pets', 'previousLabel'],
      ['select[name="pets"] option[value="No pets"]', 'booking.petNo'],
      ['select[name="pets"] option[value="1 small dog"]', 'booking.petSmall1'],
      ['select[name="pets"] option[value="2 small dogs"]', 'booking.petSmall2'],
      ['select[name="pets"] option[value="1 big dog"]', 'booking.petBig1'],
      ['.extras-grid', 'booking.extras', 'previousLabel'],
      ['.extras-grid .extra-item:nth-child(1) .el', 'booking.extraBabycot', 'html'],
      ['.extras-grid .extra-item:nth-child(2) .el', 'booking.extraHighchair', 'html'],
      ['.extras-grid .extra-item:nth-child(3) .el', 'booking.extraLinen', 'html'],
      ['.extras-grid .extra-item:nth-child(4) .el', 'booking.extraTowels', 'html'],
      ['.extras-grid .extra-item:nth-child(5) .el', 'booking.extraBabybath', 'html'],
      ['.extras-grid .extra-item:nth-child(6) .el', 'booking.extraWelcome', 'html'],
      ['.extras-grid .ep', 'booking.onRequest'],
      ['.tip-box', 'booking.welcomeTip'],
      ['textarea[name="message"]', 'booking.message', 'previousLabel'],
      ['.submit-btn', 'booking.submit'],
      ['.form-note', 'booking.note'],
      ['#successMsg h3', 'booking.successTitle'],
      ['#successMsg p', 'booking.successCopy']
    ],
    things: [
      ['.page-hero .eyebrow', 'things.heroEyebrow'],
      ['.page-hero h1', 'things.heroTitle'],
      ['.page-hero .hero-copy', 'things.heroCopy'],
      ['.page-hero .btn-primary', 'common.checkAvailability'],
      ['.intro .section-label', 'things.guideLabel'],
      ['.intro .section-title', 'things.guideTitle'],
      ['.intro .section-sub', 'things.guideCopy'],
      ['.intro-card p', 'things.introCard', 'html'],
      ['.activity .section-label', 'things.featuredLabel'],
      ['.activity-kicker', 'things.kicker'],
      ['.activity-body h2', 'things.lagoTitle'],
      ['.activity-body p:nth-of-type(1)', 'things.lagoCopy1'],
      ['.activity-body p:nth-of-type(2)', 'things.lagoCopy2'],
      ['.details-list li:nth-child(1)', 'things.bestFor', 'html'],
      ['.details-list li:nth-child(2)', 'things.address', 'html'],
      ['.details-list li:nth-child(3)', 'things.useful', 'html'],
      ['.details-list li:nth-child(4)', 'things.tickets', 'html'],
      ['.activity-body .btn-secondary', 'things.visit'],
      ['.activity-aside h3', 'things.reasonTitle'],
      ['.activity-aside p', 'things.reasonCopy'],
      ['.official-link', 'things.official'],
      ['.coming-next .section-label', 'things.moreLabel'],
      ['.coming-next .section-title', 'things.moreTitle'],
      ['.coming-next .section-sub', 'things.moreCopy'],
      ['.idea:nth-child(1) h3', 'things.beachTitle'],
      ['.idea:nth-child(1) p', 'things.beachCopy'],
      ['.idea:nth-child(2) h3', 'things.foodTitle'],
      ['.idea:nth-child(2) p', 'things.foodCopy'],
      ['.idea:nth-child(3) h3', 'things.tripsTitle'],
      ['.idea:nth-child(3) p', 'things.tripsCopy'],
      ['.cta .section-label', 'things.ctaLabel'],
      ['.cta .section-title', 'things.ctaTitle'],
      ['.cta .section-sub', 'things.ctaCopy'],
      ['.cta .btn-primary', 'common.checkAvailability']
    ]
  };

  function get(obj, path) {
    return path.split('.').reduce(function (current, key) {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  function pageName() {
    var path = window.location.pathname.toLowerCase();
    if (path.indexOf('booking') !== -1) return 'booking';
    if (path.indexOf('things-to-do') !== -1) return 'things';
    return 'home';
  }

  function getLanguage() {
    var saved = null;
    try {
      saved = window.localStorage && window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {}
    return LANGUAGES[saved] ? saved : 'en';
  }

  function setText(selector, value, mode) {
    if (value === undefined) return;
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      if (mode === 'html') {
        nodes[i].innerHTML = value;
      } else if (mode === 'placeholder') {
        nodes[i].setAttribute('placeholder', value);
      } else if (mode === 'alt') {
        nodes[i].setAttribute('alt', value);
      } else if (mode === 'previousLabel') {
        var label = nodes[i].closest('.form-group').querySelector('label');
        if (label) label.textContent = value;
      } else if (mode === 'legend') {
        while (nodes[i].childNodes.length > 1) nodes[i].removeChild(nodes[i].lastChild);
        nodes[i].appendChild(document.createTextNode(' ' + value));
      } else {
        nodes[i].textContent = value;
      }
    }
  }

  function applyRules(copy, rules) {
    for (var i = 0; i < rules.length; i++) {
      setText(rules[i][0], get(copy, rules[i][1]), rules[i][2]);
    }
  }

  function updateMeta(copy, page) {
    var key = page === 'booking' ? 'booking' : page === 'things' ? 'things' : 'home';
    document.title = copy.meta[key + 'Title'];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', copy.meta[key + 'Description']);
  }

  function updateLanguageUi(lang, copy) {
    var info = LANGUAGES[lang];
    var switchers = document.querySelectorAll('.language-switcher');
    for (var i = 0; i < switchers.length; i++) {
      var switcher = switchers[i];
      var toggle = switcher.querySelector('.language-toggle');
      var flag = switcher.querySelector('.language-current-flag');
      var label = switcher.querySelector('.language-current-label');
      if (toggle) {
        toggle.setAttribute('aria-label', copy.common.languageLabel);
        toggle.setAttribute('aria-expanded', switcher.classList.contains('open') ? 'true' : 'false');
      }
      var menu = switcher.querySelector('.language-menu');
      if (menu) menu.setAttribute('aria-label', copy.common.languageLabel);
      if (flag) { flag.textContent = ''; flag.className = 'fi fi-' + info.flag + ' language-flag language-current-flag'; }
      if (label) label.textContent = info.label;
      var options = switcher.querySelectorAll('.language-option');
      for (var j = 0; j < options.length; j++) {
        var active = options[j].getAttribute('data-lang') === lang;
        options[j].classList.toggle('active', active);
        options[j].setAttribute('aria-selected', active ? 'true' : 'false');
      }
    }
  }

  function applyLanguage(lang) {
    if (!LANGUAGES[lang]) lang = 'en';
    var copy = COPY[lang];
    var page = pageName();
    document.documentElement.lang = LANGUAGES[lang].htmlLang;
    updateMeta(copy, page);
    applyRules(copy, COMMON_RULES);
    applyRules(copy, PAGE_RULES[page] || []);
    updateLanguageUi(lang, copy);
    window.dispatchEvent(new CustomEvent('zeewind:languagechange', { detail: { lang: lang } }));
  }

  function setLanguage(lang) {
    if (!LANGUAGES[lang]) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {}
    applyLanguage(lang);
  }

  function initLanguageMenus() {
    var switchers = document.querySelectorAll('.language-switcher');
    for (var i = 0; i < switchers.length; i++) {
      (function (switcher) {
        var toggle = switcher.querySelector('.language-toggle');
        if (toggle) {
          toggle.addEventListener('click', function () {
            var open = !switcher.classList.contains('open');
            closeMenus();
            switcher.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
          });
        }
        var options = switcher.querySelectorAll('.language-option');
        for (var j = 0; j < options.length; j++) {
          options[j].addEventListener('click', function () {
            setLanguage(this.getAttribute('data-lang'));
            closeMenus();
          });
        }
      })(switchers[i]);
    }
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.language-switcher')) closeMenus();
    });
  }

  function closeMenus() {
    var switchers = document.querySelectorAll('.language-switcher');
    for (var i = 0; i < switchers.length; i++) {
      switchers[i].classList.remove('open');
      var toggle = switchers[i].querySelector('.language-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  }

  window.ZeewindI18n = {
    t: function (path, fallback) {
      var value = get(COPY[getLanguage()], path);
      return value === undefined ? fallback : value;
    },
    language: getLanguage,
    locale: function () {
      return LANGUAGES[getLanguage()].locale;
    },
    setLanguage: setLanguage,
    applyLanguage: applyLanguage
  };

  initLanguageMenus();
  applyLanguage(getLanguage());
})();
