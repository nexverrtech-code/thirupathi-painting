/**
 * Single source of truth for verified business details.
 * Every component reads from here — never hard-code these values elsewhere.
 *
 * Only add information that the business has confirmed.
 */
export const BUSINESS = {
  name: 'Thirupathi Painting Contractors',
  nameTa: 'திருப்பதி பெயிண்டிங் கான்ட்ராக்டர்ஸ்',
  owner: 'P. Logu',
  ownerTa: 'பெ. லோகு',

  phones: [
    { display: '+91 99440 56433', tel: '+919944056433', primary: true },
    { display: '+91 85083 58886', tel: '+918508358886', primary: false },
  ],

  // Digits only, with country code — used for https://wa.me/ links.
  // Confirm this number is WhatsApp-enabled before going live.
  whatsapp: '919944056433',

  address: {
    locality: 'Periyar Nagar',
    city: 'Erode',
    postalCodeHint: 'Erode – 1',
    region: 'Tamil Nadu',
    country: 'India',
    countryCode: 'IN',
    en: 'Periyar Nagar, Erode – 1, Tamil Nadu, India.',
    ta: 'பெரியார் நகர், ஈரோடு – 1, தமிழ்நாடு, இந்தியா.',
  },

  // Google Maps *search* link — deliberately not a pin, since exact
  // coordinates have not been confirmed.
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Periyar Nagar, Erode, Tamil Nadu'),

  // Set to an object such as { en: 'Mon–Sat, 9am–7pm', ta: '...' } once confirmed.
  hours: null,

  // Leave empty until confirmed. Do not invent.
  email: null,
  social: [],
};

export const SITE_URL = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');

export function waLink(message) {
  const base = `https://wa.me/${BUSINESS.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const primaryPhone = BUSINESS.phones.find((p) => p.primary) ?? BUSINESS.phones[0];
