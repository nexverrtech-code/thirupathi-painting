/**
 * UI translations. Access with t('section.key') from useLanguage().
 * Keep the shape of `en` and `ta` identical — missing Tamil keys fall back to English.
 */

const en = {
  meta: {
    home: {
      title: 'Thirupathi Painting Contractors | Painting, Putty & Polish Work in Erode',
      description:
        'Professional interior and exterior painting, wall putty and polish work for homes and commercial spaces in Erode. Call or WhatsApp Thirupathi Painting Contractors, Periyar Nagar.',
    },
    services: {
      title: 'Painting Services in Erode — Interior, Exterior, Putty & Polish | Thirupathi Painting Contractors',
      description:
        'Interior painting, exterior painting, wall putty and surface preparation, and polish work in Erode. Enquire on WhatsApp with Thirupathi Painting Contractors.',
    },
    works: {
      title: 'Our Works — Painting Gallery | Thirupathi Painting Contractors, Erode',
      description:
        'Browse interior, exterior, residential and commercial painting inspiration and before-and-after comparisons from Thirupathi Painting Contractors, Erode.',
    },
    contact: {
      title: 'Contact Thirupathi Painting Contractors — Call or WhatsApp | Erode',
      description:
        'Contact Thirupathi Painting Contractors in Periyar Nagar, Erode. Call us directly or send your painting enquiry on WhatsApp for interior, exterior, putty and polish work.',
    },
    notFound: {
      title: 'Page not found | Thirupathi Painting Contractors',
      description: 'The page you were looking for could not be found.',
    },
  },

  nav: {
    home: 'Home',
    services: 'Services',
    works: 'Our Works',
    contact: 'Contact',
    quote: 'Request a Quote',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to main content',
    primary: 'Primary navigation',
  },

  lang: {
    label: 'Language',
    switchTo: 'Switch language',
  },

  brand: {
    line1: 'Thirupathi',
    line2: 'Painting Contractors',
    homeLink: 'Thirupathi Painting Contractors — home',
  },

  common: {
    enquireWhatsApp: 'Enquire on WhatsApp',
    chatWhatsApp: 'Chat on WhatsApp',
    whatsapp: 'WhatsApp',
    callNow: 'Call now',
    call: 'Call',
    requestQuote: 'Request a Quote',
    exploreWorks: 'Explore Our Works',
    viewAllServices: 'View all services',
    viewGallery: 'View the full gallery',
    sample: 'Sample image',
    sampleLong: 'Representative inspiration image — not a completed project by Thirupathi Painting Contractors.',
    phone: 'Phone',
    address: 'Address',
    openMaps: 'Search on Google Maps',
    opensNewTab: '(opens in a new tab)',
    owner: 'Proprietor',
    imageUnavailable: 'Image unavailable',
    discover: 'Discover',
  },

  hero: {
    eyebrow: 'Thoughtfully painted. Beautifully transformed.',
    title: 'Give Your Walls a Beautiful New Beginning.',
    text: 'Professional painting, putty and polish work for homes and commercial spaces in Erode.',
    primary: 'Request a Quote',
    secondary: 'Explore Our Works',
    scroll: 'Scroll',
    location: 'Periyar Nagar · Erode',
    imageAlt: 'Elegant living room with a deep green painted feature wall (sample inspiration image)',
  },

  intro: {
    eyebrow: 'About the studio',
    title: 'Every wall deserves the right finish.',
    text: 'We help transform spaces through painting, surface preparation, putty work and polish services — for homes and commercial spaces in and around Erode.',
    text2: 'From the first conversation to the final coat, the focus stays on careful preparation, clean application and a finish that suits the way you live and work.',
    pillars: [
      { title: 'Painting', text: 'Interior and exterior walls, ceilings and surfaces.' },
      { title: 'Putty work', text: 'Surface preparation for a smoother base before painting.' },
      { title: 'Polish work', text: 'Finishes chosen to suit the surface and material.' },
    ],
    signature: 'Thirupathi Painting Contractors',
    imageAlt: 'Painter rolling fresh blue paint onto a wall (sample image)',
  },

  featured: {
    eyebrow: 'What we do',
    title: 'Services shaped around your surfaces.',
    text: 'Four focused services — each one discussed with you and planned around the condition of your walls and the finish you want.',
  },

  showcase: {
    eyebrow: 'Before & after',
    title: 'See the difference a fresh finish makes.',
    text: 'Drag the handle to compare. A new coat of paint can change the light, mood and feel of an entire room.',
    before: 'Before',
    after: 'After',
    handle: 'Drag to compare before and after',
    note: 'Illustrative comparison created from a sample image. Real before-and-after photographs of our projects will be added here.',
  },

  selected: {
    eyebrow: 'Selected works',
    title: 'Spaces that inspire a change of colour.',
    text: 'A curated look at the kind of interiors and exteriors we paint and finish.',
    cta: 'View the full gallery',
  },

  process: {
    eyebrow: 'How we work',
    title: 'A clear, careful process.',
    text: 'Good painting starts long before the first coat. Here is how a typical job comes together.',
    steps: [
      { title: 'Enquiry', text: 'Share your requirements on WhatsApp or by phone — the space, the surfaces and the finish you have in mind.' },
      { title: 'Understanding the site', text: 'Where needed, a site visit helps us understand wall condition, area and the preparation required.' },
      { title: 'Surface preparation', text: 'Surfaces are cleaned and prepared, with putty work applied where the wall requires it.' },
      { title: 'Painting & polish', text: 'Paint or polish is applied according to the agreed colour, finish and surface.' },
      { title: 'Review & handover', text: 'The completed work is walked through with you before the job is closed.' },
    ],
  },

  inspiration: {
    eyebrow: 'Colour & finish',
    title: 'Find the mood for your walls.',
    text: 'Tap a colour to preview it on the wall, then explore the finishes commonly used for different surfaces.',
    paletteLabel: 'Choose a wall colour',
    previewLabel: 'Room preview with the selected wall colour',
    finishesTitle: 'Popular finishes',
    note: 'Colours on screen are indicative only. Final shades should always be checked on a physical shade card or a sample patch on your wall.',
    colours: ['Warm Ivory', 'Sage Grey', 'Terracotta', 'Deep Emerald', 'Dusty Blue', 'Charcoal', 'Champagne', 'Blush Clay'],
    finishes: [
      { name: 'Matt', text: 'A soft, low-sheen look often chosen for living rooms and bedrooms.' },
      { name: 'Satin / Eggshell', text: 'A gentle sheen that is easier to wipe — suited to busier areas.' },
      { name: 'Gloss / Enamel', text: 'A higher shine commonly used on doors, grills and trims.' },
      { name: 'Wood polish', text: 'Brings out the natural grain of wooden doors, frames and furniture.' },
    ],
  },

  faq: {
    eyebrow: 'Questions',
    title: 'Frequently asked questions.',
    items: [
      {
        q: 'Which services do you offer?',
        a: 'We offer interior painting, exterior painting, wall putty and surface preparation, and polish work. Tell us about your space and we will discuss what it needs.',
      },
      {
        q: 'How do I get a quotation?',
        a: 'Send your requirements on WhatsApp or call us. The cost depends on the area, the condition of the surface, the preparation required and the finish you choose, so we discuss these before giving a quotation.',
      },
      {
        q: 'Can you visit the site before quoting?',
        a: 'Yes, you can request a site visit by phone or WhatsApp. The visit is arranged directly with you based on location and availability.',
      },
      {
        q: 'Is putty work needed before painting?',
        a: 'Not always. Putty work is recommended when walls have cracks, unevenness or rough patches. We advise you after understanding the surface condition.',
      },
      {
        q: 'Do you take up commercial work?',
        a: 'We paint homes as well as commercial spaces. Share the details of your property and we will confirm whether the work can be taken up.',
      },
      {
        q: 'Which areas do you work in?',
        a: 'We are based in Periyar Nagar, Erode. Please contact us with your property location so we can confirm whether we can take up the work.',
      },
    ],
  },

  cta: {
    eyebrow: 'Start your project',
    title: 'Ready to give your space a new beginning?',
    text: 'Send us a message on WhatsApp with a few details about your property. We will get back to you to discuss your requirements.',
    primary: 'Enquire on WhatsApp',
    secondary: 'Call us',
    siteVisit: 'Request a site visit',
  },

  footer: {
    description: 'Painting, putty and polish work for homes and commercial spaces in Erode — planned carefully and finished with attention to detail.',
    explore: 'Explore',
    services: 'Services',
    contact: 'Contact',
    rights: 'All rights reserved.',
    sampleNote: 'Photographs on this website are representative sample images unless stated otherwise.',
    backToTop: 'Back to top',
  },

  servicesPage: {
    eyebrow: 'Our services',
    title: 'Painting, putty and polish — done with care.',
    text: 'Each service is planned around your surface, your space and the finish you would like. Choose a service below to learn more or send an enquiry.',
    includes: 'What this can include',
    jumpTo: 'Jump to a service',
    optionalTitle: 'Additional services',
    optionalText: 'The following services are pending confirmation from the business and are hidden from the public site until approved.',
    optionalBadge: 'Pending approval — not published',
    pricingNote: 'We do not publish fixed prices, as every job depends on area, surface condition and finish. Contact us for a quotation.',
  },

  worksPage: {
    eyebrow: 'Our works',
    title: 'A gallery of colour, texture and light.',
    text: 'Filter by category, open any image for a closer look, and compare before-and-after finishes.',
    disclaimerTitle: 'About these images',
    disclaimer:
      'The photographs currently shown are representative inspiration images, not completed projects by Thirupathi Painting Contractors. Photographs of our own completed work will be added and clearly marked.',
    filterLabel: 'Filter projects by category',
    filters: { all: 'All', interior: 'Interior', exterior: 'Exterior', residential: 'Residential', commercial: 'Commercial' },
    empty: 'No images in this category yet.',
    count: (n) => `${n} ${n === 1 ? 'image' : 'images'}`,
    open: 'Open image',
    compareTitle: 'Before & after',
    compareText: 'Drag the handle, or use the arrow keys, to compare the finish.',
    lightbox: {
      label: 'Image viewer',
      close: 'Close viewer',
      prev: 'Previous image',
      next: 'Next image',
      position: (i, n) => `${i} of ${n}`,
    },
    completed: 'Completed project',
  },

  contactPage: {
    eyebrow: 'Contact',
    title: 'Let’s talk about your walls.',
    text: 'Call us, send a WhatsApp message, or fill in the form below. Your enquiry opens in WhatsApp so you can review it and send it yourself.',
    reach: 'Reach us directly',
    callLabel: 'Call',
    whatsappLabel: 'WhatsApp',
    whatsappText: 'Send a quick message',
    visitLabel: 'Location',
    formTitle: 'Enquiry form',
    formText: 'Fill in a few details and we will prepare a WhatsApp message for you to send.',
    faqTitle: 'Before you get in touch',
    closingTitle: 'Prefer to talk it through?',
    closingText: 'A quick call is often the easiest way to explain your requirements.',
  },

  form: {
    name: 'Your name',
    phone: 'Phone number',
    phoneHint: '10-digit mobile number',
    propertyType: 'Property type',
    service: 'Required service',
    location: 'Property location',
    locationHint: 'Area or town, e.g. Periyar Nagar, Erode',
    contactLanguage: 'Preferred contact language',
    details: 'Additional requirements',
    detailsHint: 'e.g. number of rooms, approximate area, wall condition, preferred timing',
    optional: 'optional',
    select: 'Select an option',
    propertyTypes: ['Independent house', 'Apartment / flat', 'Villa', 'Shop / showroom', 'Office', 'Other'],
    services: [
      'Interior painting',
      'Exterior painting',
      'Wall putty & surface preparation',
      'Polish work',
      'Not sure yet — need advice',
    ],
    languages: ['English', 'Tamil'],
    submit: 'Prepare WhatsApp message',
    privacy: 'Nothing is sent from this website. Your details open in WhatsApp, where you can review the message and press send.',
    errorsSummary: 'Please check the highlighted fields.',
    errors: {
      nameRequired: 'Please enter your name.',
      nameShort: 'Please enter at least 2 characters.',
      phoneRequired: 'Please enter your phone number.',
      phoneInvalid: 'Please enter a valid 10-digit Indian mobile number.',
      propertyRequired: 'Please choose a property type.',
      serviceRequired: 'Please choose the service you need.',
      locationRequired: 'Please tell us where the property is located.',
      languageRequired: 'Please choose a contact language.',
      detailsLong: 'Please keep this under 800 characters.',
    },
    readyTitle: 'Your enquiry is ready',
    readyText: 'Tap the button below to open WhatsApp with your details filled in. The message is only sent when you press send in WhatsApp.',
    openWhatsApp: 'Open WhatsApp to send',
    edit: 'Edit details',
    preview: 'Message preview',
  },

  wa: {
    general:
      'Hello Thirupathi Painting Contractors, I would like to enquire about your painting services. Please contact me to discuss my requirements.',
    interior:
      'Hello Thirupathi Painting Contractors, I would like to enquire about interior painting for my property. Please contact me to discuss my requirements.',
    exterior:
      'Hello Thirupathi Painting Contractors, I would like to enquire about exterior painting for my property. Please contact me to discuss my requirements.',
    putty:
      'Hello Thirupathi Painting Contractors, I would like to enquire about wall putty and surface preparation work. Please contact me to discuss my requirements.',
    polish:
      'Hello Thirupathi Painting Contractors, I would like to enquire about polish work. Please contact me to discuss my requirements.',
    siteVisit:
      'Hello Thirupathi Painting Contractors, I would like to request a site visit for painting work at my property. Please contact me to arrange a suitable time.',
    formIntro: 'Hello Thirupathi Painting Contractors, I would like a quotation for painting work. My details:',
    formLabels: {
      name: 'Name',
      phone: 'Phone',
      propertyType: 'Property type',
      service: 'Service',
      location: 'Location',
      contactLanguage: 'Preferred language',
      details: 'Requirements',
    },
  },

  notFound: {
    title: 'This page has been painted over.',
    text: 'The page you were looking for does not exist or has moved.',
    back: 'Back to home',
  },
};

const ta = {
  meta: {
    home: {
      title: 'திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ் | ஈரோட்டில் பெயிண்டிங், புட்டி & பாலிஷ் வேலை',
      description:
        'ஈரோட்டில் வீடுகள் மற்றும் வணிக இடங்களுக்கான உட்புற, வெளிப்புற பெயிண்டிங், சுவர் புட்டி மற்றும் பாலிஷ் வேலைகள். பெரியார் நகர், திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸை அழைக்கவும் அல்லது வாட்ஸ்அப் செய்யவும்.',
    },
    services: {
      title: 'ஈரோட்டில் பெயிண்டிங் சேவைகள் — உட்புறம், வெளிப்புறம், புட்டி & பாலிஷ் | திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ்',
      description:
        'ஈரோட்டில் உட்புற பெயிண்டிங், வெளிப்புற பெயிண்டிங், சுவர் புட்டி மற்றும் மேற்பரப்பு தயாரிப்பு, பாலிஷ் வேலைகள். வாட்ஸ்அப்பில் விசாரிக்கவும்.',
    },
    works: {
      title: 'எங்கள் பணிகள் — பெயிண்டிங் கேலரி | திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், ஈரோடு',
      description:
        'உட்புற, வெளிப்புற, குடியிருப்பு மற்றும் வணிக பெயிண்டிங் மாதிரிகள் மற்றும் முன்–பின் ஒப்பீடுகளைப் பாருங்கள்.',
    },
    contact: {
      title: 'திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸைத் தொடர்பு கொள்ள — அழைப்பு அல்லது வாட்ஸ்அப் | ஈரோடு',
      description:
        'பெரியார் நகர், ஈரோடு. உட்புற, வெளிப்புற பெயிண்டிங், புட்டி மற்றும் பாலிஷ் வேலைகளுக்கு எங்களை நேரடியாக அழைக்கவும் அல்லது வாட்ஸ்அப்பில் விசாரணை அனுப்பவும்.',
    },
    notFound: {
      title: 'பக்கம் கிடைக்கவில்லை | திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ்',
      description: 'நீங்கள் தேடிய பக்கம் கிடைக்கவில்லை.',
    },
  },

  nav: {
    home: 'முகப்பு',
    services: 'சேவைகள்',
    works: 'எங்கள் பணிகள்',
    contact: 'தொடர்பு',
    quote: 'விலைப்புள்ளி கேளுங்கள்',
    openMenu: 'மெனுவைத் திற',
    closeMenu: 'மெனுவை மூடு',
    skip: 'முதன்மை உள்ளடக்கத்திற்குச் செல்ல',
    primary: 'முதன்மை வழிசெலுத்தல்',
  },

  lang: {
    label: 'மொழி',
    switchTo: 'மொழியை மாற்று',
  },

  brand: {
    line1: 'Thirupathi',
    line2: 'Painting Contractors',
    homeLink: 'திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ் — முகப்பு',
  },

  common: {
    enquireWhatsApp: 'வாட்ஸ்அப்பில் விசாரிக்க',
    chatWhatsApp: 'வாட்ஸ்அப்பில் பேச',
    whatsapp: 'வாட்ஸ்அப்',
    callNow: 'இப்போதே அழைக்க',
    call: 'அழைக்க',
    requestQuote: 'விலைப்புள்ளி கேளுங்கள்',
    exploreWorks: 'எங்கள் பணிகளைப் பாருங்கள்',
    viewAllServices: 'அனைத்து சேவைகளும்',
    viewGallery: 'முழு கேலரியைப் பாருங்கள்',
    sample: 'மாதிரி படம்',
    sampleLong: 'இது ஒரு மாதிரி / ஊக்கப் படம் — திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ் முடித்த பணி அல்ல.',
    phone: 'தொலைபேசி',
    address: 'முகவரி',
    openMaps: 'கூகுள் மேப்ஸில் தேடுங்கள்',
    opensNewTab: '(புதிய தாவலில் திறக்கும்)',
    owner: 'உரிமையாளர்',
    imageUnavailable: 'படம் கிடைக்கவில்லை',
    discover: 'மேலும் அறிய',
  },

  hero: {
    eyebrow: 'கவனத்துடன் வண்ணம். அழகான மாற்றம்.',
    title: 'உங்கள் சுவர்களுக்கு ஓர் அழகான புதிய தொடக்கம்.',
    text: 'ஈரோட்டில் வீடுகள் மற்றும் வணிக இடங்களுக்கான தொழில்முறை பெயிண்டிங், புட்டி மற்றும் பாலிஷ் வேலைகள்.',
    primary: 'விலைப்புள்ளி கேளுங்கள்',
    secondary: 'எங்கள் பணிகளைப் பாருங்கள்',
    scroll: 'கீழே',
    location: 'பெரியார் நகர் · ஈரோடு',
    imageAlt: 'அடர் பச்சை வண்ணச் சுவருடன் கூடிய அழகான வரவேற்பறை (மாதிரி படம்)',
  },

  intro: {
    eyebrow: 'எங்களைப் பற்றி',
    title: 'ஒவ்வொரு சுவருக்கும் சரியான ஃபினிஷ் தேவை.',
    text: 'பெயிண்டிங், மேற்பரப்பு தயாரிப்பு, புட்டி வேலை மற்றும் பாலிஷ் சேவைகள் மூலம், ஈரோடு மற்றும் சுற்றுவட்டாரத்தில் உள்ள வீடுகளையும் வணிக இடங்களையும் அழகாக மாற்ற உதவுகிறோம்.',
    text2: 'முதல் உரையாடல் முதல் கடைசி கோட் வரை — கவனமான தயாரிப்பு, சுத்தமான பூச்சு, உங்கள் வாழ்க்கை முறைக்கும் பணிக்கும் ஏற்ற ஃபினிஷ் ஆகியவற்றிலேயே எங்கள் கவனம்.',
    pillars: [
      { title: 'பெயிண்டிங்', text: 'உட்புற, வெளிப்புறச் சுவர்கள், மேற்கூரைகள் மற்றும் மேற்பரப்புகள்.' },
      { title: 'புட்டி வேலை', text: 'பெயிண்டிங்கிற்கு முன் மென்மையான அடித்தளத்திற்கான மேற்பரப்பு தயாரிப்பு.' },
      { title: 'பாலிஷ் வேலை', text: 'மேற்பரப்பு மற்றும் பொருளுக்கு ஏற்ப தேர்ந்தெடுக்கப்படும் ஃபினிஷ்கள்.' },
    ],
    signature: 'திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ்',
    imageAlt: 'சுவரில் நீல வண்ணம் ரோலரால் பூசப்படுகிறது (மாதிரி படம்)',
  },

  featured: {
    eyebrow: 'எங்கள் சேவைகள்',
    title: 'உங்கள் மேற்பரப்புக்கு ஏற்ற சேவைகள்.',
    text: 'நான்கு முக்கியச் சேவைகள் — ஒவ்வொன்றும் உங்கள் சுவரின் நிலை மற்றும் நீங்கள் விரும்பும் ஃபினிஷை உங்களுடன் கலந்து பேசித் திட்டமிடப்படுகிறது.',
  },

  showcase: {
    eyebrow: 'முன் & பின்',
    title: 'புதிய ஃபினிஷ் தரும் மாற்றத்தைப் பாருங்கள்.',
    text: 'ஒப்பிட, கைப்பிடியை இழுக்கவும். ஒரு புதிய கோட் பெயிண்ட், அறையின் ஒளி, மனநிலை, உணர்வு அனைத்தையும் மாற்றும்.',
    before: 'முன்',
    after: 'பின்',
    handle: 'முன் மற்றும் பின் படங்களை ஒப்பிட இழுக்கவும்',
    note: 'இது ஒரு மாதிரி படத்திலிருந்து உருவாக்கப்பட்ட விளக்க ஒப்பீடு. எங்கள் பணிகளின் உண்மையான முன்–பின் புகைப்படங்கள் விரைவில் இங்கே சேர்க்கப்படும்.',
  },

  selected: {
    eyebrow: 'தேர்ந்தெடுத்த பணிகள்',
    title: 'புதிய வண்ணத்திற்கு ஊக்கம் தரும் இடங்கள்.',
    text: 'நாங்கள் பெயிண்ட் செய்து ஃபினிஷ் செய்யும் உட்புற, வெளிப்புற இடங்களின் ஒரு தொகுப்பு.',
    cta: 'முழு கேலரியைப் பாருங்கள்',
  },

  process: {
    eyebrow: 'எங்கள் செயல்முறை',
    title: 'தெளிவான, கவனமான செயல்முறை.',
    text: 'நல்ல பெயிண்டிங் முதல் கோட்டுக்கு முன்பே தொடங்குகிறது. ஒரு பணி பொதுவாக இப்படித்தான் நடைபெறுகிறது.',
    steps: [
      { title: 'விசாரணை', text: 'உங்கள் தேவைகளை — இடம், மேற்பரப்புகள், விரும்பும் ஃபினிஷ் — வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் பகிருங்கள்.' },
      { title: 'இடத்தைப் புரிந்துகொள்ளுதல்', text: 'தேவைப்பட்டால், சுவரின் நிலை, பரப்பளவு மற்றும் தேவையான தயாரிப்பைப் புரிந்துகொள்ள நேரில் வந்து பார்க்கிறோம்.' },
      { title: 'மேற்பரப்பு தயாரிப்பு', text: 'மேற்பரப்புகள் சுத்தம் செய்யப்பட்டு தயார் செய்யப்படுகின்றன; தேவையான இடங்களில் புட்டி வேலை செய்யப்படுகிறது.' },
      { title: 'பெயிண்டிங் & பாலிஷ்', text: 'ஒப்புக்கொண்ட வண்ணம், ஃபினிஷ் மற்றும் மேற்பரப்புக்கு ஏற்ப பெயிண்ட் அல்லது பாலிஷ் செய்யப்படுகிறது.' },
      { title: 'சரிபார்ப்பு & ஒப்படைப்பு', text: 'பணி முடிவதற்கு முன், முடிக்கப்பட்ட வேலையை உங்களுடன் சேர்ந்து பார்வையிடுகிறோம்.' },
    ],
  },

  inspiration: {
    eyebrow: 'வண்ணம் & ஃபினிஷ்',
    title: 'உங்கள் சுவர்களுக்கான மனநிலையைக் கண்டறியுங்கள்.',
    text: 'சுவரில் பார்க்க ஒரு வண்ணத்தைத் தொடுங்கள்; பிறகு வெவ்வேறு மேற்பரப்புகளுக்குப் பொதுவாகப் பயன்படும் ஃபினிஷ்களைப் பாருங்கள்.',
    paletteLabel: 'சுவர் வண்ணத்தைத் தேர்ந்தெடுக்கவும்',
    previewLabel: 'தேர்ந்தெடுத்த சுவர் வண்ணத்துடன் அறையின் முன்னோட்டம்',
    finishesTitle: 'பிரபலமான ஃபினிஷ்கள்',
    note: 'திரையில் தெரியும் வண்ணங்கள் தோராயமானவை மட்டுமே. இறுதி நிறத்தை ஷேட் கார்டு அல்லது உங்கள் சுவரில் ஒரு சிறிய மாதிரிப் பூச்சு மூலம் சரிபார்க்கவும்.',
    colours: ['இளம் தந்த நிறம்', 'சேஜ் சாம்பல்', 'டெரகோட்டா', 'அடர் மரகதம்', 'மென் நீலம்', 'கரி சாம்பல்', 'ஷாம்பெயின்', 'களிமண் ரோஜா'],
    finishes: [
      { name: 'மேட்', text: 'பளபளப்பு குறைந்த மென்மையான தோற்றம் — வரவேற்பறை, படுக்கையறைகளுக்குப் பெரும்பாலும் தேர்ந்தெடுக்கப்படுகிறது.' },
      { name: 'சாட்டின் / எக்ஷெல்', text: 'லேசான பளபளப்பு, எளிதில் துடைக்கலாம் — அதிகம் பயன்படும் இடங்களுக்கு ஏற்றது.' },
      { name: 'கிளாஸ் / எனாமல்', text: 'அதிக பளபளப்பு — கதவுகள், கிரில்கள், விளிம்புகளுக்குப் பொதுவாகப் பயன்படுகிறது.' },
      { name: 'மரப் பாலிஷ்', text: 'மரக் கதவுகள், சட்டங்கள், மரச்சாமான்களின் இயற்கையான வரியமைப்பை எடுத்துக்காட்டுகிறது.' },
    ],
  },

  faq: {
    eyebrow: 'கேள்விகள்',
    title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்.',
    items: [
      {
        q: 'நீங்கள் என்னென்ன சேவைகளை வழங்குகிறீர்கள்?',
        a: 'உட்புற பெயிண்டிங், வெளிப்புற பெயிண்டிங், சுவர் புட்டி மற்றும் மேற்பரப்பு தயாரிப்பு, பாலிஷ் வேலை ஆகியவற்றை வழங்குகிறோம். உங்கள் இடத்தைப் பற்றிச் சொல்லுங்கள்; அதற்கு என்ன தேவை என்பதைக் கலந்து பேசுவோம்.',
      },
      {
        q: 'விலைப்புள்ளி எப்படிப் பெறுவது?',
        a: 'உங்கள் தேவைகளை வாட்ஸ்அப்பில் அனுப்புங்கள் அல்லது எங்களை அழையுங்கள். செலவு பரப்பளவு, மேற்பரப்பின் நிலை, தேவையான தயாரிப்பு மற்றும் நீங்கள் தேர்ந்தெடுக்கும் ஃபினிஷைப் பொறுத்தது; எனவே இவற்றைப் பேசிய பிறகே விலைப்புள்ளி தருகிறோம்.',
      },
      {
        q: 'விலைப்புள்ளிக்கு முன் இடத்தை நேரில் பார்வையிடுவீர்களா?',
        a: 'ஆம், தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் நேரில் பார்வையிடக் கோரலாம். இடம் மற்றும் நேர வசதியைப் பொறுத்து உங்களுடன் நேரடியாக ஏற்பாடு செய்யப்படும்.',
      },
      {
        q: 'பெயிண்டிங்கிற்கு முன் புட்டி வேலை அவசியமா?',
        a: 'எப்போதும் அல்ல. சுவரில் விரிசல், சீரற்ற தன்மை அல்லது கரடுமுரடான பகுதிகள் இருந்தால் புட்டி வேலை பரிந்துரைக்கப்படுகிறது. மேற்பரப்பின் நிலையைப் பார்த்த பிறகு ஆலோசனை வழங்குகிறோம்.',
      },
      {
        q: 'வணிக இடங்களுக்கும் பணி செய்வீர்களா?',
        a: 'வீடுகளுடன் வணிக இடங்களுக்கும் பெயிண்டிங் செய்கிறோம். உங்கள் இடத்தின் விவரங்களைப் பகிருங்கள்; பணியை ஏற்க முடியுமா என்பதை உறுதி செய்வோம்.',
      },
      {
        q: 'எந்தெந்தப் பகுதிகளில் பணி செய்கிறீர்கள்?',
        a: 'நாங்கள் ஈரோடு, பெரியார் நகரில் இருக்கிறோம். உங்கள் இடத்தின் முகவரியுடன் தொடர்பு கொள்ளுங்கள்; பணியை ஏற்க முடியுமா என்பதை உறுதி செய்வோம்.',
      },
    ],
  },

  cta: {
    eyebrow: 'உங்கள் பணியைத் தொடங்குங்கள்',
    title: 'உங்கள் இடத்திற்கு ஒரு புதிய தொடக்கம் தரத் தயாரா?',
    text: 'உங்கள் இடத்தைப் பற்றிய சில விவரங்களுடன் வாட்ஸ்அப்பில் செய்தி அனுப்புங்கள். உங்கள் தேவைகளைப் பற்றிப் பேச நாங்கள் உங்களைத் தொடர்பு கொள்வோம்.',
    primary: 'வாட்ஸ்அப்பில் விசாரிக்க',
    secondary: 'எங்களை அழைக்க',
    siteVisit: 'நேரில் பார்வையிடக் கோர',
  },

  footer: {
    description: 'ஈரோட்டில் வீடுகள் மற்றும் வணிக இடங்களுக்கான பெயிண்டிங், புட்டி மற்றும் பாலிஷ் வேலைகள் — கவனமாகத் திட்டமிட்டு, நுணுக்கத்துடன் முடிக்கப்படுகின்றன.',
    explore: 'பக்கங்கள்',
    services: 'சேவைகள்',
    contact: 'தொடர்பு',
    rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    sampleNote: 'வேறுவிதமாகக் குறிப்பிடப்படாவிட்டால், இந்த இணையதளத்தில் உள்ள புகைப்படங்கள் மாதிரிப் படங்கள் ஆகும்.',
    backToTop: 'மேலே செல்ல',
  },

  servicesPage: {
    eyebrow: 'எங்கள் சேவைகள்',
    title: 'பெயிண்டிங், புட்டி, பாலிஷ் — கவனத்துடன்.',
    text: 'ஒவ்வொரு சேவையும் உங்கள் மேற்பரப்பு, இடம் மற்றும் நீங்கள் விரும்பும் ஃபினிஷுக்கு ஏற்பத் திட்டமிடப்படுகிறது. மேலும் அறிய அல்லது விசாரிக்க கீழே ஒரு சேவையைத் தேர்ந்தெடுங்கள்.',
    includes: 'இதில் அடங்கக்கூடியவை',
    jumpTo: 'சேவைக்குச் செல்ல',
    optionalTitle: 'கூடுதல் சேவைகள்',
    optionalText: 'பின்வரும் சேவைகள் நிறுவனத்தின் உறுதிப்படுத்தலுக்காகக் காத்திருக்கின்றன; ஒப்புதல் கிடைக்கும் வரை பொதுத் தளத்தில் காட்டப்படாது.',
    optionalBadge: 'ஒப்புதலுக்குக் காத்திருக்கிறது — வெளியிடப்படவில்லை',
    pricingNote: 'ஒவ்வொரு பணியும் பரப்பளவு, மேற்பரப்பின் நிலை மற்றும் ஃபினிஷைப் பொறுத்தது என்பதால் நிலையான விலைகளை வெளியிடுவதில்லை. விலைப்புள்ளிக்கு எங்களைத் தொடர்பு கொள்ளுங்கள்.',
  },

  worksPage: {
    eyebrow: 'எங்கள் பணிகள்',
    title: 'வண்ணம், அமைப்பு, ஒளியின் கேலரி.',
    text: 'வகைப்படி வடிகட்டுங்கள், எந்தப் படத்தையும் பெரிதாகத் திறந்து பாருங்கள், முன்–பின் ஃபினிஷ்களை ஒப்பிடுங்கள்.',
    disclaimerTitle: 'இந்தப் படங்களைப் பற்றி',
    disclaimer:
      'தற்போது காட்டப்படும் புகைப்படங்கள் மாதிரி / ஊக்கப் படங்கள் மட்டுமே; திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ் முடித்த பணிகள் அல்ல. எங்கள் சொந்தப் பணிகளின் புகைப்படங்கள் தெளிவாகக் குறிக்கப்பட்டுச் சேர்க்கப்படும்.',
    filterLabel: 'வகைப்படி பணிகளை வடிகட்டு',
    filters: { all: 'அனைத்தும்', interior: 'உட்புறம்', exterior: 'வெளிப்புறம்', residential: 'குடியிருப்பு', commercial: 'வணிகம்' },
    empty: 'இந்த வகையில் இன்னும் படங்கள் இல்லை.',
    count: (n) => `${n} படங்கள்`,
    open: 'படத்தைத் திற',
    compareTitle: 'முன் & பின்',
    compareText: 'ஃபினிஷை ஒப்பிட கைப்பிடியை இழுக்கவும், அல்லது அம்பு விசைகளைப் பயன்படுத்தவும்.',
    lightbox: {
      label: 'பட பார்வையாளர்',
      close: 'பார்வையாளரை மூடு',
      prev: 'முந்தைய படம்',
      next: 'அடுத்த படம்',
      position: (i, n) => `${n} இல் ${i}`,
    },
    completed: 'முடிக்கப்பட்ட பணி',
  },

  contactPage: {
    eyebrow: 'தொடர்பு',
    title: 'உங்கள் சுவர்களைப் பற்றிப் பேசுவோம்.',
    text: 'எங்களை அழையுங்கள், வாட்ஸ்அப் செய்யுங்கள், அல்லது கீழே உள்ள படிவத்தை நிரப்புங்கள். உங்கள் விசாரணை வாட்ஸ்அப்பில் திறக்கும்; நீங்களே சரிபார்த்து அனுப்பலாம்.',
    reach: 'நேரடியாகத் தொடர்பு கொள்ள',
    callLabel: 'அழைப்பு',
    whatsappLabel: 'வாட்ஸ்அப்',
    whatsappText: 'விரைவாகச் செய்தி அனுப்புங்கள்',
    visitLabel: 'இருப்பிடம்',
    formTitle: 'விசாரணைப் படிவம்',
    formText: 'சில விவரங்களை நிரப்புங்கள்; நீங்கள் அனுப்புவதற்காக ஒரு வாட்ஸ்அப் செய்தியைத் தயார் செய்து தருகிறோம்.',
    faqTitle: 'தொடர்பு கொள்ளும் முன்',
    closingTitle: 'நேரில் பேச விரும்புகிறீர்களா?',
    closingText: 'உங்கள் தேவைகளை விளக்க ஒரு சிறிய அழைப்பே பெரும்பாலும் எளிதான வழி.',
  },

  form: {
    name: 'உங்கள் பெயர்',
    phone: 'தொலைபேசி எண்',
    phoneHint: '10 இலக்க மொபைல் எண்',
    propertyType: 'இடத்தின் வகை',
    service: 'தேவையான சேவை',
    location: 'இடம் அமைந்துள்ள பகுதி',
    locationHint: 'பகுதி அல்லது ஊர், எ.கா. பெரியார் நகர், ஈரோடு',
    contactLanguage: 'தொடர்பு கொள்ள விரும்பும் மொழி',
    details: 'கூடுதல் தேவைகள்',
    detailsHint: 'எ.கா. அறைகளின் எண்ணிக்கை, தோராயமான பரப்பளவு, சுவரின் நிலை, விரும்பும் நேரம்',
    optional: 'விருப்பத்தேர்வு',
    select: 'ஒன்றைத் தேர்ந்தெடுக்கவும்',
    propertyTypes: ['தனி வீடு', 'அடுக்குமாடி / ஃபிளாட்', 'வில்லா', 'கடை / ஷோரூம்', 'அலுவலகம்', 'மற்றவை'],
    services: [
      'உட்புற பெயிண்டிங்',
      'வெளிப்புற பெயிண்டிங்',
      'சுவர் புட்டி & மேற்பரப்பு தயாரிப்பு',
      'பாலிஷ் வேலை',
      'இன்னும் உறுதியில்லை — ஆலோசனை தேவை',
    ],
    languages: ['ஆங்கிலம்', 'தமிழ்'],
    submit: 'வாட்ஸ்அப் செய்தியைத் தயார் செய்',
    privacy: 'இந்த இணையதளத்திலிருந்து எதுவும் அனுப்பப்படுவதில்லை. உங்கள் விவரங்கள் வாட்ஸ்அப்பில் திறக்கும்; செய்தியைச் சரிபார்த்து நீங்களே அனுப்பலாம்.',
    errorsSummary: 'குறிக்கப்பட்ட புலங்களைச் சரிபார்க்கவும்.',
    errors: {
      nameRequired: 'உங்கள் பெயரை உள்ளிடவும்.',
      nameShort: 'குறைந்தது 2 எழுத்துகளை உள்ளிடவும்.',
      phoneRequired: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்.',
      phoneInvalid: 'சரியான 10 இலக்க இந்திய மொபைல் எண்ணை உள்ளிடவும்.',
      propertyRequired: 'இடத்தின் வகையைத் தேர்ந்தெடுக்கவும்.',
      serviceRequired: 'உங்களுக்குத் தேவையான சேவையைத் தேர்ந்தெடுக்கவும்.',
      locationRequired: 'இடம் எங்கு அமைந்துள்ளது என்பதைக் குறிப்பிடவும்.',
      languageRequired: 'தொடர்பு மொழியைத் தேர்ந்தெடுக்கவும்.',
      detailsLong: 'தயவுசெய்து 800 எழுத்துகளுக்குள் எழுதவும்.',
    },
    readyTitle: 'உங்கள் விசாரணை தயார்',
    readyText: 'உங்கள் விவரங்களுடன் வாட்ஸ்அப்பைத் திறக்க கீழே உள்ள பொத்தானைத் தொடுங்கள். வாட்ஸ்அப்பில் நீங்கள் அனுப்பு பொத்தானை அழுத்தும்போது மட்டுமே செய்தி அனுப்பப்படும்.',
    openWhatsApp: 'அனுப்ப வாட்ஸ்அப்பைத் திற',
    edit: 'விவரங்களைத் திருத்து',
    preview: 'செய்தி முன்னோட்டம்',
  },

  wa: {
    general:
      'வணக்கம் திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், உங்கள் பெயிண்டிங் சேவைகள் பற்றி விசாரிக்க விரும்புகிறேன். என் தேவைகளைப் பற்றிப் பேச என்னைத் தொடர்பு கொள்ளவும்.',
    interior:
      'வணக்கம் திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், என் இடத்திற்கான உட்புற பெயிண்டிங் பற்றி விசாரிக்க விரும்புகிறேன். என் தேவைகளைப் பற்றிப் பேச என்னைத் தொடர்பு கொள்ளவும்.',
    exterior:
      'வணக்கம் திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், என் இடத்திற்கான வெளிப்புற பெயிண்டிங் பற்றி விசாரிக்க விரும்புகிறேன். என் தேவைகளைப் பற்றிப் பேச என்னைத் தொடர்பு கொள்ளவும்.',
    putty:
      'வணக்கம் திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், சுவர் புட்டி மற்றும் மேற்பரப்பு தயாரிப்பு வேலை பற்றி விசாரிக்க விரும்புகிறேன். என் தேவைகளைப் பற்றிப் பேச என்னைத் தொடர்பு கொள்ளவும்.',
    polish:
      'வணக்கம் திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், பாலிஷ் வேலை பற்றி விசாரிக்க விரும்புகிறேன். என் தேவைகளைப் பற்றிப் பேச என்னைத் தொடர்பு கொள்ளவும்.',
    siteVisit:
      'வணக்கம் திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், என் இடத்தில் பெயிண்டிங் வேலைக்காக நேரில் வந்து பார்வையிடக் கோருகிறேன். வசதியான நேரத்தை ஏற்பாடு செய்ய என்னைத் தொடர்பு கொள்ளவும்.',
    formIntro: 'வணக்கம் திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ், பெயிண்டிங் வேலைக்கான விலைப்புள்ளி வேண்டும். என் விவரங்கள்:',
    formLabels: {
      name: 'பெயர்',
      phone: 'தொலைபேசி',
      propertyType: 'இடத்தின் வகை',
      service: 'சேவை',
      location: 'இடம்',
      contactLanguage: 'விரும்பும் மொழி',
      details: 'தேவைகள்',
    },
  },

  notFound: {
    title: 'இந்தப் பக்கம் மறைந்துவிட்டது.',
    text: 'நீங்கள் தேடிய பக்கம் இல்லை அல்லது இடம் மாறியுள்ளது.',
    back: 'முகப்புக்குத் திரும்ப',
  },
};

export const translations = { en, ta };
export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ta', label: 'தமிழ்', short: 'தமிழ்' },
];
