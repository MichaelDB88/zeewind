(function () {
  var STORAGE_KEY = 'de-zilte-zee-language';

  var LANGUAGES = {
    nl: { label: 'Nederlands', flag: 'nl', htmlLang: 'nl', locale: 'nl-BE' },
    fr: { label: 'Français', flag: 'fr', htmlLang: 'fr', locale: 'fr-BE' },
    de: { label: 'Deutsch', flag: 'de', htmlLang: 'de', locale: 'de-DE' },
    en: { label: 'English', flag: 'gb', htmlLang: 'en', locale: 'en-GB' }
  };

  var COPY = {
    en: {
      meta: {
        homeTitle: 'Het Vissershuisje - Vacation Home at the Belgian Coast',
        homeDescription: 'Het Vissershuisje - a beautiful holiday home at the Belgian coast. Pet-friendly, private garden, parking, and access to pool. Book your stay today.',
        bookingTitle: 'Book Your Stay - Het Vissershuisje',
        bookingDescription: 'Check availability and send a booking request for Het Vissershuisje holiday home in Bredene.',
        thingsTitle: 'Things to Do Near Het Vissershuisje in Bredene | Belgian Coast',
        thingsDescription: 'Discover things to do near Het Vissershuisje in the holiday park in Bredene, including the new LAGO Bredene Grasduinen swimming pool, beaches, dunes, and family-friendly activities on the Belgian coast.',
        reviewsTitle: 'Guest Reviews | Het Vissershuisje',
        reviewsDescription: 'Read guest reviews and experiences from stays at Het Vissershuisje holiday home in Bredene.'
      },
      common: {
        navHouse: 'Our Home',
        navAmenities: 'Amenities',
        navGallery: 'Gallery',
        navLocation: 'Location',
        navThings: 'In the Area',
        navReviews: 'Reviews',
        navBook: 'Book',
        navContact: 'Contact',
        languageLabel: 'Language',
        menuLabel: 'Menu',
        footer: '2025 Het Vissershuisje · Holiday Home at the Belgian Coast · All rights reserved',
        checkAvailability: 'Check Availability'
      },
      home: {
        heroEyebrow: 'Bredene · Holiday Home by the Sea',
        heroTagline: 'Awaken to the crisp sea air, where every breath feels like a new beginning.',
        discoverMore: 'Discover More',
        badgeBeach: '🌊 Near the Beach',
        badgePet: '🐾 Pet Friendly',
        badgePool: '🏊 Pool Access',
        badgeGarden: '🌿 Private Garden',
        badgeParking: '🚗 Free Parking',
        houseLabel: 'Our Home',
        houseTitle: 'A home away from home on the Belgian coast',
        houseCopy1: 'Het Vissershuisje is a charming holiday home nestled within a peaceful vacation domain, just steps from the Belgian coastline. With its warm atmosphere and thoughtful amenities, it is the perfect retreat for families, couples, and friends — four-legged companions welcome too.',
        houseCopy2: 'Enjoy your morning coffee in the private garden, spend lazy afternoons at the shared pool, and end the day with a stroll along the beach. Everything you need for a perfect holiday is right here.',
        bedrooms: 'Bedrooms',
        bathroom: 'Bathroom',
        maxGuests: 'Max Guests',
        beachAlt: 'The beach near Het Vissershuisje, just minutes away',
        amenitiesLabel: 'Amenities',
        amenitiesTitle: 'Everything you need',
        amenitiesSub: 'Het Vissershuisje is equipped and ready so you can truly switch off and enjoy.',
        featureBeachTitle: 'Near the Beach',
        featureBeachCopy: 'Just a short walk to the sea — enjoy morning swims and evening strolls on the sand.',
        featurePoolTitle: 'Pool Access',
        featurePoolCopy: 'Cool off in the shared pool of the vacation domain — perfect for kids and adults alike.',
        featureGardenTitle: 'Private Garden & Terrace',
        featureGardenCopy: 'Relax in your own outdoor space. BBQ evenings and morning coffees in the fresh sea air.',
        featureParkingTitle: 'Free Parking',
        featureParkingCopy: 'Private parking right at your doorstep — arrive and unload with ease.',
        featurePetTitle: 'Pet Friendly',
        featurePetCopy: 'Your furry family members are welcome. The garden gives pets room to roam safely.',
        featureDomainTitle: 'Vacation Domain',
        featureDomainCopy: 'Part of a well-maintained holiday park with facilities and peaceful surroundings.',
        parkLabel: 'In the Park',
        parkTitle: 'Right on your doorstep',
        parkCopy: 'Zeewind II Holiday Park has its own heated pool and restaurant — no need to go anywhere else.',
        parkPoolAlt: 'Heated outdoor pool at Het Vissershuisje',
        parkPoolTitle: '&#127944; Heated Outdoor Pool',
        parkPoolCopy: 'From 15 June to mid-September, enjoy the heated outdoor swimming pool — perfect for relaxing or having fun with the whole family.',
        parkBrasserieAlt: 'Brasserie Duinenhoeve',
        parkBrasserieTitle: '&#127869; Brasserie Duinenhoeve',
        parkBrasserieCopy: 'The park\'s own restaurant, right next to the pool. Child-friendly with an indoor play corner, free parking, and a menu for every occasion.',
        parkBrasserieLink: 'Visit website →',
        galleryLabel: 'Gallery',
        galleryTitle: 'See it for yourself',
        gallerySub: 'A few glimpses of what awaits you at Het Vissershuisje.',
        galleryBeachAlt: 'The beach near Het Vissershuisje',
        galleryDunesAlt: 'Dunes near Het Vissershuisje',
        comingSoon: '📷 Coming soon',
        galleryNote: 'Photos of the house coming soon. The beach is just minutes away.',
        locationLabel: 'Location',
        locationTitle: 'Where to find us',
        locationCopy: 'Het Vissershuisje is located at the holiday park in Bredene, close to the Belgian coast. Exact address provided upon booking confirmation.',
        nearbyPool: '<span class="nearby-icon">&#127946;</span> LAGO Bredene Grasduinen - new swimming pool nearby',
        nearbyBeach: '<span class="nearby-icon">🌊</span> Beach — short walk',
        nearbySupermarket: '<span class="nearby-icon">🛒</span> Supermarket — nearby',
        nearbyRestaurants: '<span class="nearby-icon">🍽️</span> Restaurants — within easy reach',
        nearbyTrain: '<span class="nearby-icon">🚂</span> Train station — accessible by car',
        exploreThings: 'Explore Things to Do',
        mapPlaceholder: '🗺️ Map will go here<br><br>We will embed a Google Map in the next step',
        contactLabel: 'Get in Touch',
        contactTitle: 'Ready to book your stay?',
        contactSub: 'Have a question? Send us a message and we will get back to you within 24 hours.',
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
        infoBox: '<strong>How it works:</strong> Fill in your details and send your request. Submitting this form is not a confirmed booking — your reservation is only confirmed once you receive a written confirmation from us. We aim to reply within 24 hours to confirm availability and arrange payment.',
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
        heroTitle: 'Things to Do Near Het Vissershuisje',
        heroCopy: 'Our holiday home at Zeewind II Holiday Park is in the heart of Bredene — a relaxed base for beach days, family activities, food and drinks, and easy day trips along the Belgian coast.',
        guideLabel: 'Local Guide',
        guideTitle: 'A holiday home in the heart of Bredene',
        guideCopy: 'Whether you are travelling with children, planning a relaxed coastal break, or looking for easy activities close to your holiday home in Bredene, Het Vissershuisje puts you close to many of the area\'s most practical and enjoyable options.',
        guideCopy2: 'From swimming and family fun to a cultural day trip in Ostend, a meal inside the holiday park or a slow morning on the dunes — this guide covers the easiest things to do near Het Vissershuisje without needing to plan a complicated itinerary.',
        activitiesLabel: 'Activities & Ideas',
        activitiesTitle: 'What to do near Het Vissershuisje',
        gridSub: 'All recommendations are easy to combine with a stay at Zeewind II Holiday Park in Bredene. Add your own photos to each card whenever you have them.',
        lagoImgAlt: 'LAGO Bredene Grasduinen swimming and recreation centre',
        lagoTag: 'Swimming & Family Fun',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'One of the easiest family activities near Het Vissershuisje. A modern swimming and recreation centre with children\'s water play, indoor play area, outdoor pools, sauna and bistro. A practical choice on a rainy day or when children want a change from the beach.',
        lagoFact1: '<strong>Best for:</strong> Families, children, rainy days, active afternoons',
        lagoFact2: '<strong>Location:</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        lagoFact3: '<strong>Tip:</strong> Check opening hours before visiting',
        lagoLink: 'Visit LAGO Bredene Grasduinen →',
        fortImgAlt: 'Fort Napoleon historic coastal fort in Ostend',
        fortTag: 'Historic Day Trip',
        fortTitle: 'Fort Napoleon in Ostend',
        fortCopy: 'A historic coastal landmark on the Oosteroever in Ostend, within easy reach of Bredene. Follow the story trail through the fort, explore its atmospheric rooms and discover changing exhibitions. A good half-day excursion for both adults and children.',
        fortFact1: '<strong>Best for:</strong> History, culture, families, rainy days',
        fortFact2: '<strong>Address:</strong> Vuurtorenweg 13, 8400 Oostende',
        fortFact3: '<strong>Tip:</strong> Booking tickets in advance is recommended',
        fortLink: 'Visit Fort Napoleon →',
        beachImgAlt: 'The beach and dunes near Het Vissershuisje in Bredene',
        beachTag: 'Beach & Nature',
        beachTitle: 'Beach and dunes',
        beachCopy: 'Bredene is known for its natural beach and dunes — perfect for slow mornings, long walks, sandcastles and fresh sea air. From Het Vissershuisje, beach time can easily become part of your daily rhythm without needing a car or a plan.',
        beachFact1: '<strong>Best for:</strong> All ages, walks, relaxing, families',
        beachFact2: '<strong>Distance:</strong> Short walk from Het Vissershuisje',
        cyclingImgAlt: 'Cycling routes near Bredene and the Belgian coast',
        cyclingTag: 'Cycling & Walking',
        cyclingTitle: 'Cycling and walking',
        cyclingCopy: 'The Belgian coast is easy to explore by bike or on foot. From Het Vissershuisje, guests can enjoy routes through Bredene, the dunes and nearby coastal towns at their own pace — a short family walk, a longer bike ride, or a scenic route towards the sea.',
        cyclingFact1: '<strong>Best for:</strong> Families, active guests, all ages',
        cyclingFact2: '<strong>Tip:</strong> Bike rental available in Bredene and Ostend',
        ostendImgAlt: 'Ostend marina and harbour on the Belgian coast',
        ostendTag: 'Day Trip',
        ostendTitle: 'Ostend day trip',
        ostendCopy: 'Ostend is close enough for a relaxed day trip from Bredene. Combine Fort Napoleon with the Oosteroever seafront, shops, restaurants, museums, or a coastal walk. Works well for a few hours or a full day — with or without sunshine.',
        ostendFact1: '<strong>Best for:</strong> All ages, culture, food, rainy days',
        ostendFact2: '<strong>Distance:</strong> A short drive or bike ride from Het Vissershuisje',
        dehaanImgAlt: 'De Haan charming seaside town on the Belgian coast',
        dehaanTag: 'Nearby Seaside Town',
        dehaanTitle: 'De Haan and nearby towns',
        dehaanCopy: 'De Haan is known for its charming coastal atmosphere and Belle Époque villas. A good option when you want a change of scenery while keeping the day simple. Enjoy a walk, a drink, a meal, or just the different coastal feeling before returning to Het Vissershuisje.',
        dehaanFact1: '<strong>Best for:</strong> Leisurely outings, couples, families',
        dehaanFact2: '<strong>Distance:</strong> Easy drive along the coast',
        grasduinenTag: 'Outdoor Play & Nature',
        grasduinenTitle: 'Recreatiedomein Grasduinen',
        grasduinenCopy: 'A nine-hectare outdoor recreation domain right on your doorstep — perfect for families, cyclists and nature lovers. Children can burn off energy on the playground or the sports fields, while adults enjoy the mountain bike circuit, walking paths or a quiet moment by the pond. Free showers, toilets and covered bike storage are all on site.',
        grasduinenFact1: '<strong>Best for:</strong> Families, cyclists, walkers, nature lovers, all ages',
        grasduinenFact2: '<strong>What\'s there:</strong> Playground, mountain bike trail, cycling & walking paths, pond, sports fields, fitness trail',
        grasduinenFact3: '<strong>Tip:</strong> Free showers and covered bike storage on site',
        tourismLabel: 'Local Resources',
        tourismTitle: 'More information and events in Bredene',
        tourismCopy1: 'For the latest events, local tips, brochures and practical visitor information in Bredene, the official Bredene tourism website is a useful resource. It covers family activities, cultural events, beach information, markets and seasonal recommendations.',
        tourismCopy2: 'This link is especially helpful for up-to-date things to do in Bredene that change throughout the year, while this page covers the most practical options for guests staying at Het Vissershuisje.',
        tourismLink: 'Visit the official Bredene tourism website',
        ctaLabel: 'Stay at Het Vissershuisje',
        ctaTitle: 'Make Bredene your holiday base',
        ctaCopy: 'Stay at Het Vissershuisje and enjoy a holiday home in the heart of Bredene, close to the beach, swimming, food and drinks, family activities and easy day trips along the Belgian coast.'
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
        homeTitle: 'Het Vissershuisje - Vakantiehuis aan de Belgische kust',
        homeDescription: 'Het Vissershuisje - een mooi vakantiehuis aan de Belgische kust. Hondvriendelijk, private tuin, parking en toegang tot zwembad. Boek vandaag je verblijf.',
        bookingTitle: 'Boek je verblijf - Het Vissershuisje',
        bookingDescription: 'Bekijk de beschikbaarheid en stuur een boekingsaanvraag voor vakantiehuis Het Vissershuisje in Bredene.',
        thingsTitle: 'Wat te doen in de buurt van Het Vissershuisje in Bredene | Belgische kust',
        thingsDescription: 'Ontdek wat er te doen is bij Het Vissershuisje in het vakantiepark in Bredene, inclusief het nieuwe LAGO Bredene Grasduinen zwembad, stranden, duinen en gezinsvriendelijke activiteiten aan de Belgische kust.',
        reviewsTitle: 'Gastbeoordelingen | Het Vissershuisje',
        reviewsDescription: 'Lees ervaringen en beoordelingen van gasten die verbleven in vakantiehuis Het Vissershuisje in Bredene.'
      },
      common: {
        navHouse: 'Ons huis',
        navAmenities: 'Voorzieningen',
        navGallery: 'Foto’s',
        navLocation: 'Ligging',
        navThings: 'In de Buurt',
        navReviews: 'Beoordelingen',
        navBook: 'Boeken',
        navContact: 'Contact',
        languageLabel: 'Taal',
        menuLabel: 'Menu',
        footer: '2025 Het Vissershuisje · Vakantiehuis aan de Belgische kust · Alle rechten voorbehouden',
        checkAvailability: 'Bekijk beschikbaarheid'
      },
      home: {
        heroEyebrow: 'Bredene · Vakantiehuis aan zee',
        heroTagline: 'Ontwaak in de zilte zeelucht, waar elke adem een nieuw begin fluistert.',
        discoverMore: 'Ontdek meer',
        badgeBeach: '🌊 Dicht bij het strand',
        badgePet: '🐾 Hondvriendelijk',
        badgePool: '🏊 Zwembadtoegang',
        badgeGarden: '🌿 Private tuin',
        badgeParking: '🚗 Gratis parking',
        houseLabel: 'Het huis',
        houseTitle: 'Een thuis weg van huis aan de Belgische kust',
        houseCopy1: 'Het Vissershuisje is een charmant vakantiehuis in een rustig vakantiedomein, vlak bij de Belgische kust. Met zijn warme sfeer en praktische voorzieningen is het een ideale plek voor gezinnen, koppels en vrienden — viervoeters zijn ook welkom.',
        houseCopy2: 'Geniet van je ochtendkoffie in de private tuin, breng ontspannen namiddagen door aan het gedeelde zwembad en sluit de dag af met een wandeling op het strand. Alles voor een fijne vakantie is dichtbij.',
        bedrooms: 'Slaapkamers',
        bathroom: 'Badkamer',
        maxGuests: 'Max. gasten',
        beachAlt: 'Het strand bij Het Vissershuisje, op slechts enkele minuten',
        amenitiesLabel: 'Voorzieningen',
        amenitiesTitle: 'Alles wat je nodig hebt',
        amenitiesSub: 'Het Vissershuisje is uitgerust en klaar zodat je echt kunt ontspannen en genieten.',
        featureBeachTitle: 'Dicht bij het strand',
        featureBeachCopy: 'Op korte wandelafstand van zee — ideaal voor ochtendzwemmen en avondwandelingen op het zand.',
        featurePoolTitle: 'Zwembadtoegang',
        featurePoolCopy: 'Koel af in het gedeelde zwembad van het vakantiedomein — fijn voor kinderen en volwassenen.',
        featureGardenTitle: 'Private tuin & terras',
        featureGardenCopy: 'Ontspan in je eigen buitenruimte. Barbecue-avonden en ochtendkoffie in de frisse zeelucht.',
        featureParkingTitle: 'Gratis parking',
        featureParkingCopy: 'Private parking vlak voor de deur — zorgeloos aankomen en uitladen.',
        featurePetTitle: 'Hondvriendelijk',
        featurePetCopy: 'Je trouwe huisgenoot is welkom. De tuin geeft huisdieren ruimte om veilig buiten te zijn.',
        featureDomainTitle: 'Vakantiedomein',
        featureDomainCopy: 'Gelegen in een goed onderhouden vakantiepark met faciliteiten en een rustige omgeving.',
        parkLabel: 'In het park',
        parkTitle: 'Alles vlak voor de deur',
        parkCopy: 'Vakantiepark Zeewind II heeft een eigen verwarmd zwembad en restaurant — je hoeft nergens anders heen.',
        parkPoolAlt: 'Verwarmd buitenzwembad bij Het Vissershuisje',
        parkPoolTitle: '&#127944; Verwarmd buitenzwembad',
        parkPoolCopy: 'Van 15 juni tot half september geniet je van het verwarmde buitenzwembad — ideaal om te ontspannen of plezier te maken met het hele gezin.',
        parkBrasserieAlt: 'Brasserie Duinenhoeve',
        parkBrasserieTitle: '&#127869; Brasserie Duinenhoeve',
        parkBrasserieCopy: 'Het restaurant van het park, direct naast het zwembad. Kindvriendelijk, met een binnenspeelhoek, gratis parking en een menu voor elk moment.',
        parkBrasserieLink: 'Bezoek website →',
        galleryLabel: 'Foto’s',
        galleryTitle: 'Bekijk de sfeer',
        gallerySub: 'Een paar beelden van wat je bij Het Vissershuisje mag verwachten.',
        galleryBeachAlt: 'Het strand bij Het Vissershuisje',
        galleryDunesAlt: 'Duinen bij Het Vissershuisje',
        comingSoon: '📷 Binnenkort meer',
        galleryNote: 'Foto’s van het huis volgen binnenkort. Het strand ligt op slechts enkele minuten.',
        locationLabel: 'Ligging',
        locationTitle: 'Waar vind je ons?',
        locationCopy: 'Het Vissershuisje ligt in het vakantiepark in Bredene, dicht bij de Belgische kust. Het exacte adres krijg je bij de boekingsbevestiging.',
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
        infoBox: '<strong>Zo werkt het:</strong> Vul je gegevens in en stuur je aanvraag. Het indienen van dit formulier is geen bevestigde boeking — je reservering is pas definitief wanneer je een schriftelijke bevestiging van ons ontvangt. We streven ernaar binnen 24 uur te antwoorden om beschikbaarheid te bevestigen en de betaling te regelen.',
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
        heroTitle: 'Wat te doen in de buurt van Het Vissershuisje',
        heroCopy: 'Ons vakantiehuis in Vakantiepark Zeewind II ligt in het hart van Bredene — een ontspannen uitvalsbasis voor stranddagen, gezinsactiviteiten, eten en drinken en eenvoudige uitstappen langs de Belgische kust.',
        guideLabel: 'Lokale gids',
        guideTitle: 'Een vakantiehuis in het hart van Bredene',
        guideCopy: 'Of je nu met kinderen reist, een ontspannen kustvakantie plant of leuke activiteiten zoekt dicht bij je vakantiehuis in Bredene: vanuit Het Vissershuisje zit je vlak bij veel praktische en aangename opties in de omgeving.',
        guideCopy2: 'Van zwemmen en gezinsplezier tot een culturele uitstap naar Oostende, een maaltijd in het vakantiepark of een rustige ochtend in de duinen — deze gids bundelt de makkelijkste dingen om te doen bij Het Vissershuisje zonder ingewikkelde planning.',
        activitiesLabel: 'Activiteiten & ideeën',
        activitiesTitle: 'Wat te doen nabij Het Vissershuisje',
        gridSub: 'Alle aanbevelingen zijn makkelijk te combineren met een verblijf in Vakantiepark Zeewind II in Bredene. Voeg gerust eigen foto’s toe aan elke kaart wanneer je die hebt.',
        lagoImgAlt: 'LAGO Bredene Grasduinen zwembad en recreatiecentrum',
        lagoTag: 'Zwemmen & gezinsplezier',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'Een van de makkelijkste gezinsactiviteiten vlak bij Het Vissershuisje. Een modern zwem- en recreatiecentrum met waterspel voor kinderen, binnenspeeltuin, buitenbaden, sauna en bistro. Een praktische keuze op een regenachtige dag of wanneer kinderen eens iets anders willen dan het strand.',
        lagoFact1: '<strong>Ideaal voor:</strong> Gezinnen, kinderen, regenachtige dagen, actieve namiddagen',
        lagoFact2: '<strong>Locatie:</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        lagoFact3: '<strong>Tip:</strong> Controleer de openingsuren voor je vertrekt',
        lagoLink: 'Bezoek LAGO Bredene Grasduinen →',
        fortImgAlt: 'Fort Napoleon historisch kustfort in Oostende',
        fortTag: 'Historische uitstap',
        fortTitle: 'Fort Napoleon in Oostende',
        fortCopy: 'Een historische kustlocatie op de Oosteroever in Oostende, vlot bereikbaar vanuit Bredene. Volg het belevingsparcours door het fort, ontdek de sfeervolle ruimtes en bekijk wisselende tentoonstellingen. Een fijne halve dag uitstap voor volwassenen én kinderen.',
        fortFact1: '<strong>Ideaal voor:</strong> Geschiedenis, cultuur, gezinnen, regenachtige dagen',
        fortFact2: '<strong>Adres:</strong> Vuurtorenweg 13, 8400 Oostende',
        fortFact3: '<strong>Tip:</strong> Tickets vooraf boeken is aanbevolen',
        fortLink: 'Bezoek Fort Napoleon →',
        beachImgAlt: 'Het strand en de duinen nabij Het Vissershuisje in Bredene',
        beachTag: 'Strand & natuur',
        beachTitle: 'Strand en duinen',
        beachCopy: 'Bredene staat bekend om zijn natuurlijke strand en duinen — perfect voor rustige ochtenden, lange wandelingen, zandkastelen en frisse zeelucht. Vanuit Het Vissershuisje wordt strandtijd makkelijk deel van je dagelijkse ritme, zonder auto of groot plan.',
        beachFact1: '<strong>Ideaal voor:</strong> Alle leeftijden, wandelingen, ontspannen, gezinnen',
        beachFact2: '<strong>Afstand:</strong> Korte wandeling vanaf Het Vissershuisje',
        cyclingImgAlt: 'Fietsroutes nabij Bredene en de Belgische kust',
        cyclingTag: 'Fietsen & wandelen',
        cyclingTitle: 'Fietsen en wandelen',
        cyclingCopy: 'De Belgische kust verken je makkelijk met de fiets of te voet. Vanuit Het Vissershuisje kunnen gasten op hun eigen tempo routes door Bredene, de duinen en nabijgelegen kustplaatsen volgen — een korte gezinswandeling, een langere fietstocht of een mooie route richting zee.',
        cyclingFact1: '<strong>Ideaal voor:</strong> Gezinnen, actieve gasten, alle leeftijden',
        cyclingFact2: '<strong>Tip:</strong> Fietsverhuur is beschikbaar in Bredene en Oostende',
        ostendImgAlt: 'Jachthaven en haven van Oostende aan de Belgische kust',
        ostendTag: 'Daguitstap',
        ostendTitle: 'Daguitstap naar Oostende',
        ostendCopy: 'Oostende ligt dichtbij genoeg voor een ontspannen daguitstap vanuit Bredene. Combineer Fort Napoleon met de zeedijk aan de Oosteroever, winkels, restaurants, musea of een kustwandeling. Geschikt voor enkele uren of een volledige dag — met of zonder zon.',
        ostendFact1: '<strong>Ideaal voor:</strong> Alle leeftijden, cultuur, eten, regenachtige dagen',
        ostendFact2: '<strong>Afstand:</strong> Korte rit met de auto of fiets vanaf Het Vissershuisje',
        dehaanImgAlt: 'De Haan sfeervolle badplaats aan de Belgische kust',
        dehaanTag: 'Nabijgelegen kustplaats',
        dehaanTitle: 'De Haan en nabije kustplaatsen',
        dehaanCopy: 'De Haan staat bekend om zijn charmante kustsfeer en Belle Époque-villa’s. Een goede keuze wanneer je eens een andere omgeving wilt zonder de dag ingewikkeld te maken. Geniet van een wandeling, een drankje, een maaltijd of gewoon een andere kustsfeer voor je terugkeert naar Het Vissershuisje.',
        dehaanFact1: '<strong>Ideaal voor:</strong> Rustige uitstappen, koppels, gezinnen',
        dehaanFact2: '<strong>Afstand:</strong> Makkelijke rit langs de kust',
        tourismLabel: 'Lokale bronnen',
        tourismTitle: 'Meer informatie en evenementen in Bredene',
        tourismCopy1: 'Voor de nieuwste evenementen, lokale tips, brochures en praktische bezoekersinformatie in Bredene is de officiële toeristische website van Bredene een handige bron. Je vindt er gezinsactiviteiten, culturele evenementen, strandinformatie, markten en seizoensaanraders.',
        tourismCopy2: 'Deze link is vooral handig voor actuele dingen om te doen in Bredene die doorheen het jaar veranderen, terwijl deze pagina de meest praktische opties bundelt voor gasten die in Het Vissershuisje verblijven.',
        tourismLink: 'Bezoek de officiële toeristische website van Bredene',
        ctaLabel: 'Verblijf in Het Vissershuisje',
        ctaTitle: 'Maak van Bredene je vakantiebasis',
        ctaCopy: 'Verblijf in Het Vissershuisje en geniet van een vakantiehuis in het hart van Bredene, dicht bij strand, zwemmen, eten en drinken, gezinsactiviteiten en eenvoudige uitstappen langs de Belgische kust.'
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
        homeTitle: 'Het Vissershuisje - Maison de vacances à la côte belge',
        homeDescription: 'Het Vissershuisje - une belle maison de vacances à la côte belge. Chien admis, jardin privé, parking et accès à la piscine. Réservez votre séjour.',
        bookingTitle: 'Réserver votre séjour - Het Vissershuisje',
        bookingDescription: 'Consultez les disponibilités et envoyez une demande de réservation pour la maison de vacances Het Vissershuisje à Bredene.',
        thingsTitle: 'Que faire près de Het Vissershuisje à Bredene | Côte belge',
        thingsDescription: 'Découvrez les activités près de Het Vissershuisje dans le parc de vacances à Bredene, dont la nouvelle piscine LAGO Bredene Grasduinen, les plages, les dunes et les sorties familiales à la côte belge.',
        reviewsTitle: 'Avis des voyageurs | Het Vissershuisje',
        reviewsDescription: 'Lisez les avis et expériences des voyageurs ayant séjourné à Het Vissershuisje, maison de vacances à Bredene.'
      },
      common: {
        navHouse: 'Notre maison',
        navAmenities: 'Équipements',
        navGallery: 'Photos',
        navLocation: 'Situation',
        navThings: 'Dans les environs',
        navReviews: 'Avis',
        navBook: 'Réserver',
        navContact: 'Contact',
        languageLabel: 'Langue',
        menuLabel: 'Menu',
        footer: '2025 Het Vissershuisje · Maison de vacances à la côte belge · Tous droits réservés',
        checkAvailability: 'Voir les disponibilités'
      },
      home: {
        heroEyebrow: 'Bredene · Maison de vacances au bord de la mer',
        heroTagline: 'Réveillez-vous avec l’air marin, profitez de votre jardin privé et passez vos journées entre piscine et plage.',
        discoverMore: 'Découvrir',
        badgeBeach: '🌊 Près de la plage',
        badgePet: '🐾 Chien admis',
        badgePool: '🏊 Accès piscine',
        badgeGarden: '🌿 Jardin privé',
        badgeParking: '🚗 Parking gratuit',
        houseLabel: 'La maison',
        houseTitle: 'Un chez-soi à la côte belge',
        houseCopy1: 'Het Vissershuisje est une charmante maison de vacances située dans un domaine paisible, à deux pas de la côte belge. Avec son atmosphère chaleureuse et ses équipements pratiques, c’est un refuge idéal pour familles, couples et amis — compagnons à quatre pattes bienvenus.',
        houseCopy2: 'Savourez votre café du matin dans le jardin privé, profitez des après-midis à la piscine commune et terminez la journée par une promenade sur la plage. Tout est réuni pour de belles vacances.',
        bedrooms: 'Chambres',
        bathroom: 'Salle de bain',
        maxGuests: 'Pers. max.',
        beachAlt: 'La plage près de Het Vissershuisje, à quelques minutes',
        amenitiesLabel: 'Équipements',
        amenitiesTitle: 'Tout ce qu’il faut',
        amenitiesSub: 'Het Vissershuisje est équipée et prête pour vous permettre de vraiment déconnecter.',
        featureBeachTitle: 'Près de la plage',
        featureBeachCopy: 'À courte distance à pied de la mer — parfait pour nager le matin et se promener le soir.',
        featurePoolTitle: 'Accès piscine',
        featurePoolCopy: 'Rafraîchissez-vous dans la piscine commune du domaine — idéale pour petits et grands.',
        featureGardenTitle: 'Jardin privé & terrasse',
        featureGardenCopy: 'Détendez-vous dans votre espace extérieur. Barbecues et cafés du matin au grand air marin.',
        featureParkingTitle: 'Parking gratuit',
        featureParkingCopy: 'Parking privé juste devant la porte — arriver et décharger sans stress.',
        featurePetTitle: 'Chien admis',
        featurePetCopy: 'Votre compagnon est le bienvenu. Le jardin lui offre un espace extérieur agréable.',
        featureDomainTitle: 'Domaine de vacances',
        featureDomainCopy: 'Situé dans un parc de vacances bien entretenu, avec installations et environnement calme.',
        parkLabel: 'Dans le parc',
        parkTitle: 'Tout près de votre porte',
        parkCopy: 'Le Holiday Park Zeewind II dispose de sa propre piscine chauffée et d’un restaurant — pas besoin d’aller loin.',
        parkPoolAlt: 'Piscine extérieure chauffée à Het Vissershuisje',
        parkPoolTitle: '&#127944; Piscine extérieure chauffée',
        parkPoolCopy: 'Du 15 juin à la mi-septembre, profitez de la piscine extérieure chauffée — parfaite pour se détendre ou s’amuser en famille.',
        parkBrasserieAlt: 'Brasserie Duinenhoeve',
        parkBrasserieTitle: '&#127869; Brasserie Duinenhoeve',
        parkBrasserieCopy: 'Le restaurant du parc, juste à côté de la piscine. Adapté aux enfants, avec coin de jeux intérieur, parking gratuit et une carte pour chaque occasion.',
        parkBrasserieLink: 'Visiter le site →',
        galleryLabel: 'Photos',
        galleryTitle: 'Voyez par vous-même',
        gallerySub: 'Quelques images de l’atmosphère qui vous attend à Het Vissershuisje.',
        galleryBeachAlt: 'La plage près de Het Vissershuisje',
        galleryDunesAlt: 'Les dunes près de Het Vissershuisje',
        comingSoon: '📷 Bientôt',
        galleryNote: 'Les photos de la maison arrivent bientôt. La plage est à quelques minutes.',
        locationLabel: 'Situation',
        locationTitle: 'Où nous trouver',
        locationCopy: 'Het Vissershuisje se trouve dans le parc de vacances à Bredene, près de la côte belge. L’adresse exacte est communiquée lors de la confirmation de réservation.',
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
        infoBox: '<strong>Comment ça marche :</strong> Remplissez vos coordonnées et envoyez votre demande. L\'envoi de ce formulaire ne constitue pas une réservation confirmée — votre séjour n\'est confirmé qu\'à la réception d\'une confirmation écrite de notre part. Nous visons à répondre sous 24 heures pour confirmer la disponibilité et organiser le paiement.',
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
        heroTitle: 'Que faire près de Het Vissershuisje',
        heroCopy: 'Notre maison de vacances au Holiday Park Zeewind II se trouve au cœur de Bredene — une base détendue pour les journées à la plage, les activités en famille, les repas et les excursions faciles le long de la côte belge.',
        guideLabel: 'Guide local',
        guideTitle: 'Une maison de vacances au cœur de Bredene',
        guideCopy: 'Que vous voyagiez avec des enfants, prépariez une pause tranquille à la côte ou cherchiez des activités faciles près de votre maison de vacances à Bredene, Het Vissershuisje vous place près de nombreuses options pratiques et agréables.',
        guideCopy2: 'De la natation et des activités familiales à une excursion culturelle à Ostende, un repas dans le parc de vacances ou une matinée calme dans les dunes — ce guide rassemble les choses les plus simples à faire près de Het Vissershuisje sans itinéraire compliqué.',
        activitiesLabel: 'Activités & idées',
        activitiesTitle: 'Que faire près de Het Vissershuisje',
        gridSub: 'Toutes les recommandations se combinent facilement avec un séjour au Holiday Park Zeewind II à Bredene. Ajoutez vos propres photos à chaque carte lorsque vous en avez.',
        lagoImgAlt: 'Piscine et centre de loisirs LAGO Bredene Grasduinen',
        lagoTag: 'Piscine & plaisir en famille',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'L’une des activités familiales les plus faciles près de Het Vissershuisje. Un centre moderne de natation et de loisirs avec jeux d’eau pour enfants, aire de jeux intérieure, bassins extérieurs, sauna et bistro. Un choix pratique par temps de pluie ou lorsque les enfants veulent changer de la plage.',
        lagoFact1: '<strong>Idéal pour :</strong> Familles, enfants, jours de pluie, après-midis actifs',
        lagoFact2: '<strong>Lieu :</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        lagoFact3: '<strong>Conseil :</strong> Vérifiez les heures d’ouverture avant votre visite',
        lagoLink: 'Visiter LAGO Bredene Grasduinen →',
        fortImgAlt: 'Fort Napoleon, fort côtier historique à Ostende',
        fortTag: 'Excursion historique',
        fortTitle: 'Fort Napoleon à Ostende',
        fortCopy: 'Un site historique du littoral sur l’Oosteroever à Ostende, facilement accessible depuis Bredene. Suivez le parcours dans le fort, explorez ses salles pleines d’atmosphère et découvrez les expositions temporaires. Une bonne excursion d’une demi-journée pour adultes et enfants.',
        fortFact1: '<strong>Idéal pour :</strong> Histoire, culture, familles, jours de pluie',
        fortFact2: '<strong>Adresse :</strong> Vuurtorenweg 13, 8400 Oostende',
        fortFact3: '<strong>Conseil :</strong> Il est recommandé de réserver les billets à l’avance',
        fortLink: 'Visiter Fort Napoleon →',
        beachImgAlt: 'La plage et les dunes près de Het Vissershuisje à Bredene',
        beachTag: 'Plage & nature',
        beachTitle: 'Plage et dunes',
        beachCopy: 'Bredene est connue pour sa plage naturelle et ses dunes — parfaites pour les matinées lentes, les longues promenades, les châteaux de sable et l’air marin. Depuis Het Vissershuisje, la plage s’intègre facilement au rythme quotidien, sans voiture ni grand plan.',
        beachFact1: '<strong>Idéal pour :</strong> Tous les âges, promenades, détente, familles',
        beachFact2: '<strong>Distance :</strong> Courte promenade depuis Het Vissershuisje',
        cyclingImgAlt: 'Itinéraires cyclables près de Bredene et de la côte belge',
        cyclingTag: 'Vélo & promenade',
        cyclingTitle: 'Vélo et promenade',
        cyclingCopy: 'La côte belge se découvre facilement à vélo ou à pied. Depuis Het Vissershuisje, les hôtes peuvent suivre à leur rythme des itinéraires à travers Bredene, les dunes et les communes côtières voisines — une courte promenade en famille, une plus longue balade à vélo ou un trajet panoramique vers la mer.',
        cyclingFact1: '<strong>Idéal pour :</strong> Familles, hôtes actifs, tous les âges',
        cyclingFact2: '<strong>Conseil :</strong> Location de vélos disponible à Bredene et Ostende',
        ostendImgAlt: 'Marina et port d’Ostende sur la côte belge',
        ostendTag: 'Excursion d’une journée',
        ostendTitle: 'Excursion à Ostende',
        ostendCopy: 'Ostende est assez proche pour une excursion détendue depuis Bredene. Combinez Fort Napoleon avec le front de mer de l’Oosteroever, les boutiques, restaurants, musées ou une promenade côtière. Idéal pour quelques heures ou une journée complète — avec ou sans soleil.',
        ostendFact1: '<strong>Idéal pour :</strong> Tous les âges, culture, gastronomie, jours de pluie',
        ostendFact2: '<strong>Distance :</strong> Court trajet en voiture ou à vélo depuis Het Vissershuisje',
        dehaanImgAlt: 'De Haan, station balnéaire charmante sur la côte belge',
        dehaanTag: 'Ville côtière voisine',
        dehaanTitle: 'De Haan et les villes voisines',
        dehaanCopy: 'De Haan est connue pour son atmosphère côtière charmante et ses villas Belle Époque. Une bonne option lorsque vous voulez changer de décor tout en gardant la journée simple. Profitez d’une promenade, d’un verre, d’un repas ou simplement d’une autre ambiance de bord de mer avant de revenir à Het Vissershuisje.',
        dehaanFact1: '<strong>Idéal pour :</strong> Sorties tranquilles, couples, familles',
        dehaanFact2: '<strong>Distance :</strong> Trajet facile le long de la côte',
        grasduinenTag: 'Jeux de plein air & nature',
        grasduinenTitle: 'Recreatiedomein Grasduinen',
        grasduinenCopy: 'Un domaine de loisirs de neuf hectares juste à votre porte — idéal pour les familles, les cyclistes et les amoureux de la nature. Les enfants se dépensent sur l\'aire de jeux ou les terrains de sport, tandis que les adultes profitent du parcours VTT, des sentiers de promenade ou d\'un moment calme au bord de l\'étang. Douches gratuites, toilettes et parking vélos couvert sur place.',
        grasduinenFact1: '<strong>Idéal pour :</strong> Familles, cyclistes, promeneurs, amateurs de nature, tous âges',
        grasduinenFact2: '<strong>Sur place :</strong> Aire de jeux, parcours VTT, chemins vélo et pédestres, étang, terrains de sport, parcours de fitness',
        grasduinenFact3: '<strong>Conseil :</strong> Douches gratuites et abri vélos couvert sur place',
        tourismLabel: 'Ressources locales',
        tourismTitle: 'Plus d’informations et d’événements à Bredene',
        tourismCopy1: 'Pour les derniers événements, conseils locaux, brochures et informations pratiques à Bredene, le site touristique officiel de Bredene est une ressource utile. Il couvre les activités familiales, les événements culturels, les informations sur la plage, les marchés et les recommandations saisonnières.',
        tourismCopy2: 'Ce lien est particulièrement utile pour les choses à faire à Bredene qui changent au fil de l’année, tandis que cette page reprend les options les plus pratiques pour les hôtes séjournant à Het Vissershuisje.',
        tourismLink: 'Visiter le site touristique officiel de Bredene',
        ctaLabel: 'Séjourner à Het Vissershuisje',
        ctaTitle: 'Faites de Bredene votre base de vacances',
        ctaCopy: 'Séjournez à Het Vissershuisje et profitez d’une maison de vacances au cœur de Bredene, près de la plage, de la piscine, des restaurants, des activités familiales et des excursions faciles le long de la côte belge.'
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
        homeTitle: 'Het Vissershuisje - Ferienhaus an der belgischen Küste',
        homeDescription: 'Het Vissershuisje - ein schönes Ferienhaus an der belgischen Küste. Hundefreundlich, privater Garten, Parkplatz und Zugang zum Pool. Buchen Sie Ihren Aufenthalt.',
        bookingTitle: 'Aufenthalt buchen - Het Vissershuisje',
        bookingDescription: 'Prüfen Sie die Verfügbarkeit und senden Sie eine Buchungsanfrage für das Ferienhaus Het Vissershuisje in Bredene.',
        thingsTitle: 'Aktivitäten in der Nähe von Het Vissershuisje in Bredene | Belgische Küste',
        thingsDescription: 'Entdecken Sie Aktivitäten bei Het Vissershuisje im Ferienpark in Bredene, darunter das neue Schwimmbad LAGO Bredene Grasduinen, Strände, Dünen und familienfreundliche Ausflüge an der belgischen Küste.',
        reviewsTitle: 'Gästebewertungen | Het Vissershuisje',
        reviewsDescription: 'Lesen Sie Bewertungen und Erfahrungen von Gästen des Ferienhauses Het Vissershuisje in Bredene.'
      },
      common: {
        navHouse: 'Unser Zuhause',
        navAmenities: 'Ausstattung',
        navGallery: 'Galerie',
        navLocation: 'Lage',
        navThings: 'In der Umgebung',
        navReviews: 'Bewertungen',
        navBook: 'Buchen',
        navContact: 'Kontakt',
        languageLabel: 'Sprache',
        menuLabel: 'Menü',
        footer: '2025 Het Vissershuisje · Ferienhaus an der belgischen Küste · Alle Rechte vorbehalten',
        checkAvailability: 'Verfügbarkeit prüfen'
      },
      home: {
        heroEyebrow: 'Bredene · Ferienhaus am Meer',
        heroTagline: 'Erwachen Sie in der klaren Meeresluft, in der jeder Atemzug wie ein neuer Anfang wirkt.',
        discoverMore: 'Mehr entdecken',
        badgeBeach: '🌊 Strandnah',
        badgePet: '🐾 Hundefreundlich',
        badgePool: '🏊 Poolzugang',
        badgeGarden: '🌿 Privater Garten',
        badgeParking: '🚗 Kostenlos parken',
        houseLabel: 'Das Haus',
        houseTitle: 'Ein Zuhause an der belgischen Küste',
        houseCopy1: 'Het Vissershuisje ist ein charmantes Ferienhaus in einer ruhigen Ferienanlage, nur wenige Schritte von der belgischen Küste entfernt. Mit warmer Atmosphäre und praktischer Ausstattung ist es ideal für Familien, Paare und Freunde — vierbeinige Begleiter sind ebenfalls willkommen.',
        houseCopy2: 'Genießen Sie den Morgenkaffee im privaten Garten, entspannte Nachmittage am Gemeinschaftspool und abends einen Spaziergang am Strand. Alles für einen gelungenen Urlaub ist da.',
        bedrooms: 'Schlafzimmer',
        bathroom: 'Bad',
        maxGuests: 'Max. Gäste',
        beachAlt: 'Der Strand bei Het Vissershuisje, nur wenige Minuten entfernt',
        amenitiesLabel: 'Ausstattung',
        amenitiesTitle: 'Alles, was Sie brauchen',
        amenitiesSub: 'Het Vissershuisje ist ausgestattet und bereit, damit Sie wirklich abschalten können.',
        featureBeachTitle: 'Strandnah',
        featureBeachCopy: 'Nur ein kurzer Spaziergang bis zum Meer — ideal zum morgendlichen Schwimmen und für Abendspaziergänge.',
        featurePoolTitle: 'Poolzugang',
        featurePoolCopy: 'Abkühlen im Gemeinschaftspool der Ferienanlage — perfekt für Kinder und Erwachsene.',
        featureGardenTitle: 'Privater Garten & Terrasse',
        featureGardenCopy: 'Entspannen Sie in Ihrem eigenen Außenbereich. Grillabende und Morgenkaffee in frischer Meeresluft.',
        featureParkingTitle: 'Kostenlos parken',
        featureParkingCopy: 'Privater Parkplatz direkt vor der Tür — stressfrei ankommen und ausladen.',
        featurePetTitle: 'Hundefreundlich',
        featurePetCopy: 'Ihr vierbeiniger Freund ist willkommen. Der Garten bietet sicheren Platz im Freien.',
        featureDomainTitle: 'Ferienanlage',
        featureDomainCopy: 'Teil eines gepflegten Ferienparks mit Einrichtungen und ruhiger Umgebung.',
        parkLabel: 'Im Park',
        parkTitle: 'Direkt vor Ihrer Tür',
        parkCopy: 'Der Holiday Park Zeewind II hat einen eigenen beheizten Pool und ein Restaurant — Sie müssen nicht weit gehen.',
        parkPoolAlt: 'Beheizter Außenpool bei Het Vissershuisje',
        parkPoolTitle: '&#127944; Beheizter Außenpool',
        parkPoolCopy: 'Von 15. Juni bis Mitte September genießen Sie den beheizten Außenpool — perfekt zum Entspannen oder für Spaß mit der ganzen Familie.',
        parkBrasserieAlt: 'Brasserie Duinenhoeve',
        parkBrasserieTitle: '&#127869; Brasserie Duinenhoeve',
        parkBrasserieCopy: 'Das parkeigene Restaurant direkt neben dem Pool. Kinderfreundlich, mit Indoor-Spielecke, kostenlosem Parkplatz und einer Speisekarte für jeden Anlass.',
        parkBrasserieLink: 'Website besuchen →',
        galleryLabel: 'Galerie',
        galleryTitle: 'Ein erster Eindruck',
        gallerySub: 'Ein paar Eindrücke von dem, was Sie bei Het Vissershuisje erwartet.',
        galleryBeachAlt: 'Der Strand bei Het Vissershuisje',
        galleryDunesAlt: 'Dünen bei Het Vissershuisje',
        comingSoon: '📷 Demnächst',
        galleryNote: 'Fotos vom Haus folgen bald. Der Strand ist nur wenige Minuten entfernt.',
        locationLabel: 'Lage',
        locationTitle: 'Wo Sie uns finden',
        locationCopy: 'Het Vissershuisje liegt im Ferienpark in Bredene, nahe der belgischen Küste. Die genaue Adresse erhalten Sie mit der Buchungsbestätigung.',
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
        infoBox: '<strong>So funktioniert es:</strong> Füllen Sie Ihre Angaben aus und senden Sie Ihre Anfrage. Das Absenden dieses Formulars ist keine bestätigte Buchung — Ihre Reservierung gilt erst als bestätigt, wenn Sie eine schriftliche Bestätigung von uns erhalten. Wir bemühen uns, innerhalb von 24 Stunden zu antworten, um die Verfügbarkeit zu bestätigen und die Zahlung zu regeln.',
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
        heroTitle: 'Aktivitäten in der Nähe von Het Vissershuisje',
        heroCopy: 'Unser Ferienhaus im Holiday Park Zeewind II liegt im Herzen von Bredene — ein entspannter Ausgangspunkt für Strandtage, Familienaktivitäten, Essen und Trinken sowie einfache Ausflüge entlang der belgischen Küste.',
        guideLabel: 'Lokaler Guide',
        guideTitle: 'Ein Ferienhaus im Herzen von Bredene',
        guideCopy: 'Ob Sie mit Kindern reisen, eine entspannte Küstenpause planen oder einfache Aktivitäten nahe Ihrem Ferienhaus in Bredene suchen: Von Het Vissershuisje aus sind viele praktische und schöne Möglichkeiten in der Umgebung schnell erreichbar.',
        guideCopy2: 'Vom Schwimmen und Familienspaß über einen kulturellen Ausflug nach Ostende bis zu einem Essen im Ferienpark oder einem ruhigen Morgen in den Dünen — dieser Guide bündelt die einfachsten Aktivitäten nahe Het Vissershuisje ohne komplizierte Planung.',
        activitiesLabel: 'Aktivitäten & Ideen',
        activitiesTitle: 'Was tun nahe Het Vissershuisje',
        gridSub: 'Alle Empfehlungen lassen sich leicht mit einem Aufenthalt im Holiday Park Zeewind II in Bredene kombinieren. Fügen Sie jeder Karte eigene Fotos hinzu, sobald Sie welche haben.',
        lagoImgAlt: 'LAGO Bredene Grasduinen Schwimm- und Freizeitzentrum',
        lagoTag: 'Schwimmen & Familienspaß',
        lagoTitle: 'LAGO Bredene Grasduinen',
        lagoCopy1: 'Eine der einfachsten Familienaktivitäten nahe Het Vissershuisje. Ein modernes Schwimm- und Freizeitzentrum mit Wasserspielbereich für Kinder, Indoor-Spielbereich, Außenbecken, Sauna und Bistro. Eine praktische Wahl an Regentagen oder wenn Kinder Abwechslung vom Strand möchten.',
        lagoFact1: '<strong>Ideal für:</strong> Familien, Kinder, Regentage, aktive Nachmittage',
        lagoFact2: '<strong>Ort:</strong> Oscar Goethalsstraat 4, 8450 Bredene',
        lagoFact3: '<strong>Tipp:</strong> Öffnungszeiten vor dem Besuch prüfen',
        lagoLink: 'LAGO Bredene Grasduinen besuchen →',
        fortImgAlt: 'Fort Napoleon historisches Küstenfort in Ostende',
        fortTag: 'Historischer Ausflug',
        fortTitle: 'Fort Napoleon in Ostende',
        fortCopy: 'Ein historisches Küstenbauwerk am Oosteroever in Ostende, von Bredene aus gut erreichbar. Folgen Sie dem Erlebnisrundgang durch das Fort, erkunden Sie die stimmungsvollen Räume und entdecken Sie wechselnde Ausstellungen. Ein guter Halbtagesausflug für Erwachsene und Kinder.',
        fortFact1: '<strong>Ideal für:</strong> Geschichte, Kultur, Familien, Regentage',
        fortFact2: '<strong>Adresse:</strong> Vuurtorenweg 13, 8400 Oostende',
        fortFact3: '<strong>Tipp:</strong> Tickets im Voraus zu buchen wird empfohlen',
        fortLink: 'Fort Napoleon besuchen →',
        beachImgAlt: 'Strand und Dünen nahe Het Vissershuisje in Bredene',
        beachTag: 'Strand & Natur',
        beachTitle: 'Strand und Dünen',
        beachCopy: 'Bredene ist für seinen natürlichen Strand und seine Dünen bekannt — perfekt für ruhige Morgen, lange Spaziergänge, Sandburgen und frische Meeresluft. Von Het Vissershuisje aus wird Strandzeit leicht Teil des täglichen Rhythmus, ohne Auto oder großen Plan.',
        beachFact1: '<strong>Ideal für:</strong> Alle Altersgruppen, Spaziergänge, Entspannung, Familien',
        beachFact2: '<strong>Entfernung:</strong> Kurzer Spaziergang ab Het Vissershuisje',
        cyclingImgAlt: 'Fahrradrouten nahe Bredene und der belgischen Küste',
        cyclingTag: 'Radfahren & Spazieren',
        cyclingTitle: 'Radfahren und Spazieren',
        cyclingCopy: 'Die belgische Küste lässt sich leicht mit dem Rad oder zu Fuß erkunden. Von Het Vissershuisje aus können Gäste in ihrem eigenen Tempo Routen durch Bredene, die Dünen und nahe Küstenorte genießen — einen kurzen Familienspaziergang, eine längere Radtour oder eine schöne Strecke Richtung Meer.',
        cyclingFact1: '<strong>Ideal für:</strong> Familien, aktive Gäste, alle Altersgruppen',
        cyclingFact2: '<strong>Tipp:</strong> Fahrradverleih gibt es in Bredene und Ostende',
        ostendImgAlt: 'Marina und Hafen von Ostende an der belgischen Küste',
        ostendTag: 'Tagesausflug',
        ostendTitle: 'Tagesausflug nach Ostende',
        ostendCopy: 'Ostende ist nah genug für einen entspannten Tagesausflug ab Bredene. Kombinieren Sie Fort Napoleon mit der Promenade am Oosteroever, Geschäften, Restaurants, Museen oder einem Küstenspaziergang. Geeignet für ein paar Stunden oder einen ganzen Tag — mit oder ohne Sonne.',
        ostendFact1: '<strong>Ideal für:</strong> Alle Altersgruppen, Kultur, Essen, Regentage',
        ostendFact2: '<strong>Entfernung:</strong> Kurze Auto- oder Radfahrt ab Het Vissershuisje',
        dehaanImgAlt: 'De Haan charmante Küstenstadt an der belgischen Küste',
        dehaanTag: 'Nahe Küstenstadt',
        dehaanTitle: 'De Haan und nahe Orte',
        dehaanCopy: 'De Haan ist für seine charmante Küstenatmosphäre und Belle-Époque-Villen bekannt. Eine gute Option, wenn Sie eine andere Umgebung möchten und den Tag trotzdem einfach halten wollen. Genießen Sie einen Spaziergang, ein Getränk, eine Mahlzeit oder einfach ein anderes Küstengefühl, bevor Sie nach Het Vissershuisje zurückkehren.',
        dehaanFact1: '<strong>Ideal für:</strong> Ruhige Ausflüge, Paare, Familien',
        dehaanFact2: '<strong>Entfernung:</strong> Einfache Fahrt entlang der Küste',
        grasduinenTag: 'Outdoor-Spiel & Natur',
        grasduinenTitle: 'Recreatiedomein Grasduinen',
        grasduinenCopy: 'Ein neun Hektar großes Freizeitgelände direkt vor der Tür — ideal für Familien, Radfahrer und Naturliebhaber. Kinder toben sich auf dem Spielplatz oder den Sportfeldern aus, während Erwachsene den Mountainbike-Parcours, die Wanderwege oder eine ruhige Minute am Teich genießen. Kostenlose Duschen, Toiletten und überdachter Fahrradunterstand vor Ort.',
        grasduinenFact1: '<strong>Ideal für:</strong> Familien, Radfahrer, Wanderer, Naturliebhaber, alle Altersgruppen',
        grasduinenFact2: '<strong>Vor Ort:</strong> Spielplatz, Mountainbike-Parcours, Rad- und Wanderwege, Teich, Sportplätze, Fitness-Parcours',
        grasduinenFact3: '<strong>Tipp:</strong> Kostenlose Duschen und überdachter Fahrradunterstand vor Ort',
        tourismLabel: 'Lokale Ressourcen',
        tourismTitle: 'Weitere Informationen und Veranstaltungen in Bredene',
        tourismCopy1: 'Für aktuelle Veranstaltungen, lokale Tipps, Broschüren und praktische Besucherinformationen in Bredene ist die offizielle Tourismus-Website von Bredene eine hilfreiche Ressource. Sie enthält Familienaktivitäten, kulturelle Veranstaltungen, Strandinformationen, Märkte und saisonale Empfehlungen.',
        tourismCopy2: 'Dieser Link ist besonders hilfreich für aktuelle Aktivitäten in Bredene, die sich im Laufe des Jahres ändern, während diese Seite die praktischsten Optionen für Gäste in Het Vissershuisje zusammenfasst.',
        tourismLink: 'Offizielle Tourismus-Website von Bredene besuchen',
        ctaLabel: 'Aufenthalt in Het Vissershuisje',
        ctaTitle: 'Machen Sie Bredene zu Ihrer Urlaubsbasis',
        ctaCopy: 'Übernachten Sie in Het Vissershuisje und genießen Sie ein Ferienhaus im Herzen von Bredene, nahe Strand, Schwimmen, Essen und Trinken, Familienaktivitäten und einfachen Ausflügen entlang der belgischen Küste.'
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
    ['.nav-links a[href="reviews.html"]', 'common.navReviews'],
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
      ['#features .feature-card:nth-child(2) h3', 'home.featureGardenTitle'],
      ['#features .feature-card:nth-child(2) p', 'home.featureGardenCopy'],
      ['#features .feature-card:nth-child(3) h3', 'home.featureParkingTitle'],
      ['#features .feature-card:nth-child(3) p', 'home.featureParkingCopy'],
      ['#features .feature-card:nth-child(4) h3', 'home.featurePetTitle'],
      ['#features .feature-card:nth-child(4) p', 'home.featurePetCopy'],
      ['#features .feature-card:nth-child(5) h3', 'home.featureDomainTitle'],
      ['#features .feature-card:nth-child(5) p', 'home.featureDomainCopy'],
      ['#features .park-label', 'home.parkLabel'],
      ['#features .park-title', 'home.parkTitle'],
      ['#features .park-copy', 'home.parkCopy'],
      ['#features .park-pool-card img', 'home.parkPoolAlt', 'alt'],
      ['#features .park-pool-card .park-card-title', 'home.parkPoolTitle', 'html'],
      ['#features .park-pool-card .park-card-copy', 'home.parkPoolCopy'],
      ['#features .park-brasserie-card img', 'home.parkBrasserieAlt', 'alt'],
      ['#features .park-brasserie-card .park-card-title', 'home.parkBrasserieTitle', 'html'],
      ['#features .park-brasserie-card .park-card-copy', 'home.parkBrasserieCopy'],
      ['#features .park-brasserie-card .park-card-link', 'home.parkBrasserieLink'],
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
      ['.page-hero .hero-sub', 'things.heroCopy'],
      ['.page-hero .btn-primary', 'common.checkAvailability'],
      ['.intro .section-label', 'things.guideLabel'],
      ['.intro .section-title', 'things.guideTitle'],
      ['.intro .section-sub', 'things.guideCopy'],
      ['.intro-text p:nth-of-type(3)', 'things.guideCopy2'],
      ['.activities .section-label', 'things.activitiesLabel'],
      ['.activities h2', 'things.activitiesTitle'],
      ['.activities .grid-sub', 'things.gridSub'],
      ['#card-beach img', 'things.beachImgAlt', 'alt'],
      ['#card-beach .card-tag', 'things.beachTag'],
      ['#card-beach h3', 'things.beachTitle'],
      ['#card-beach .card-body > p', 'things.beachCopy'],
      ['#card-beach .card-facts li:nth-child(1)', 'things.beachFact1', 'html'],
      ['#card-beach .card-facts li:nth-child(2)', 'things.beachFact2', 'html'],
      ['#card-lago img', 'things.lagoImgAlt', 'alt'],
      ['#card-lago .card-tag', 'things.lagoTag'],
      ['#card-lago h3', 'things.lagoTitle'],
      ['#card-lago .card-body > p', 'things.lagoCopy1'],
      ['#card-lago .card-facts li:nth-child(1)', 'things.lagoFact1', 'html'],
      ['#card-lago .card-facts li:nth-child(2)', 'things.lagoFact2', 'html'],
      ['#card-lago .card-facts li:nth-child(3)', 'things.lagoFact3', 'html'],
      ['#card-lago .card-link', 'things.lagoLink'],
      ['#card-grasduinen .card-tag', 'things.grasduinenTag'],
      ['#card-grasduinen h3', 'things.grasduinenTitle'],
      ['#card-grasduinen .card-body > p', 'things.grasduinenCopy'],
      ['#card-grasduinen .card-facts li:nth-child(1)', 'things.grasduinenFact1', 'html'],
      ['#card-grasduinen .card-facts li:nth-child(2)', 'things.grasduinenFact2', 'html'],
      ['#card-grasduinen .card-facts li:nth-child(3)', 'things.grasduinenFact3', 'html'],
      ['#card-cycling img', 'things.cyclingImgAlt', 'alt'],
      ['#card-cycling .card-tag', 'things.cyclingTag'],
      ['#card-cycling h3', 'things.cyclingTitle'],
      ['#card-cycling .card-body > p', 'things.cyclingCopy'],
      ['#card-cycling .card-facts li:nth-child(1)', 'things.cyclingFact1', 'html'],
      ['#card-cycling .card-facts li:nth-child(2)', 'things.cyclingFact2', 'html'],
      ['#card-fort img', 'things.fortImgAlt', 'alt'],
      ['#card-fort .card-tag', 'things.fortTag'],
      ['#card-fort h3', 'things.fortTitle'],
      ['#card-fort .card-body > p', 'things.fortCopy'],
      ['#card-fort .card-facts li:nth-child(1)', 'things.fortFact1', 'html'],
      ['#card-fort .card-facts li:nth-child(2)', 'things.fortFact2', 'html'],
      ['#card-fort .card-facts li:nth-child(3)', 'things.fortFact3', 'html'],
      ['#card-fort .card-link', 'things.fortLink'],
      ['#card-ostend img', 'things.ostendImgAlt', 'alt'],
      ['#card-ostend .card-tag', 'things.ostendTag'],
      ['#card-ostend h3', 'things.ostendTitle'],
      ['#card-ostend .card-body > p', 'things.ostendCopy'],
      ['#card-ostend .card-facts li:nth-child(1)', 'things.ostendFact1', 'html'],
      ['#card-ostend .card-facts li:nth-child(2)', 'things.ostendFact2', 'html'],
      ['#card-dehaan img', 'things.dehaanImgAlt', 'alt'],
      ['#card-dehaan .card-tag', 'things.dehaanTag'],
      ['#card-dehaan h3', 'things.dehaanTitle'],
      ['#card-dehaan .card-body > p', 'things.dehaanCopy'],
      ['#card-dehaan .card-facts li:nth-child(1)', 'things.dehaanFact1', 'html'],
      ['#card-dehaan .card-facts li:nth-child(2)', 'things.dehaanFact2', 'html'],
      ['.tourism .section-label', 'things.tourismLabel'],
      ['.tourism h2', 'things.tourismTitle'],
      ['.tourism-box p:nth-of-type(2)', 'things.tourismCopy1'],
      ['.tourism-box p:nth-of-type(3)', 'things.tourismCopy2'],
      ['.tourism .btn-secondary', 'things.tourismLink'],
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
    if (path.indexOf('reviews') !== -1) return 'reviews';
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
    var key = page === 'booking' ? 'booking' : page === 'things' ? 'things' : page === 'reviews' ? 'reviews' : 'home';
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

  function updateMobileNavigationUi(copy) {
    var toggles = document.querySelectorAll('.mobile-menu-toggle');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].setAttribute('aria-label', copy.common.menuLabel);
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
    updateMobileNavigationUi(copy);
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

  function closeMobileNavigation() {
    var links = document.querySelectorAll('.nav-links');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('open');
    }
    var toggles = document.querySelectorAll('.mobile-menu-toggle');
    for (var j = 0; j < toggles.length; j++) {
      toggles[j].classList.remove('open');
      toggles[j].setAttribute('aria-expanded', 'false');
    }
  }

  function initMobileNavigation() {
    var toggles = document.querySelectorAll('.mobile-menu-toggle');
    for (var i = 0; i < toggles.length; i++) {
      (function (toggle) {
        var navId = toggle.getAttribute('aria-controls');
        var navLinks = navId ? document.getElementById(navId) : null;
        if (!navLinks) return;
        toggle.addEventListener('click', function (event) {
          event.stopPropagation();
          var open = !navLinks.classList.contains('open');
          closeMobileNavigation();
          navLinks.classList.toggle('open', open);
          toggle.classList.toggle('open', open);
          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        var links = navLinks.querySelectorAll('a');
        for (var j = 0; j < links.length; j++) {
          links[j].addEventListener('click', closeMobileNavigation);
        }
      })(toggles[i]);
    }

    document.addEventListener('click', function (event) {
      if (!event.target.closest('nav')) closeMobileNavigation();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMobileNavigation();
    });
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
  initMobileNavigation();
  applyLanguage(getLanguage());
})();
