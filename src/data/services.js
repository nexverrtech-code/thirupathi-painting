import { IMAGES } from './images';

/**
 * Confirmed services (from the business card: painting, putty work, polish work).
 * Bilingual fields use { en, ta } and are read with pick() from useLanguage().
 */
export const SERVICES = [
  {
    id: 'interior-painting',
    number: '01',
    icon: 'PaintRoller',
    waKey: 'interior',
    image: IMAGES.livingSage,
    imageAlt: {
      en: 'Living room with soft sage-green painted walls (sample image)',
      ta: 'மென்மையான சேஜ் பச்சை வண்ணச் சுவர்களுடன் வரவேற்பறை (மாதிரி படம்)',
    },
    title: { en: 'Interior Painting', ta: 'உட்புற பெயிண்டிங்' },
    short: {
      en: 'Fresh, even colour for interior walls and ceilings, planned around your rooms.',
      ta: 'உங்கள் அறைகளுக்கு ஏற்பத் திட்டமிடப்பட்ட, உட்புறச் சுவர்கள் மற்றும் மேற்கூரைகளுக்கான சீரான புதிய வண்ணம்.',
    },
    description: {
      en: 'Painting solutions for interior walls and ceilings, subject to the customer’s requirements. We discuss the rooms, the colours you have in mind and the finish you prefer before work begins.',
      ta: 'வாடிக்கையாளரின் தேவைக்கேற்ப உட்புறச் சுவர்கள் மற்றும் மேற்கூரைகளுக்கான பெயிண்டிங். பணி தொடங்கும் முன், அறைகள், நீங்கள் நினைக்கும் வண்ணங்கள், விரும்பும் ஃபினிஷ் ஆகியவற்றைக் கலந்து பேசுகிறோம்.',
    },
    items: {
      en: ['Living rooms, bedrooms and kitchens', 'Ceilings', 'Feature and accent walls', 'Repainting of existing walls'],
      ta: ['வரவேற்பறை, படுக்கையறை, சமையலறை', 'மேற்கூரைகள்', 'சிறப்பு / அக்சென்ட் சுவர்கள்', 'ஏற்கனவே உள்ள சுவர்களுக்கு மீண்டும் பெயிண்டிங்'],
    },
  },
  {
    id: 'exterior-painting',
    number: '02',
    icon: 'House',
    waKey: 'exterior',
    image: IMAGES.exteriorModern,
    imageAlt: {
      en: 'Modern house with freshly painted exterior walls (sample image)',
      ta: 'புதிதாக வண்ணம் பூசப்பட்ட வெளிப்புறச் சுவர்களுடன் நவீன வீடு (மாதிரி படம்)',
    },
    title: { en: 'Exterior Painting', ta: 'வெளிப்புற பெயிண்டிங்' },
    short: {
      en: 'Exterior painting that refreshes the face of your house or building.',
      ta: 'உங்கள் வீடு அல்லது கட்டடத்தின் முகப்பைப் புதுப்பிக்கும் வெளிப்புற பெயிண்டிங்.',
    },
    description: {
      en: 'Exterior painting services for houses and other suitable properties. The scope is agreed with you after understanding the walls, the height and the surface condition.',
      ta: 'வீடுகள் மற்றும் பொருத்தமான பிற கட்டடங்களுக்கான வெளிப்புற பெயிண்டிங். சுவர்கள், உயரம், மேற்பரப்பின் நிலை ஆகியவற்றைப் புரிந்துகொண்ட பிறகு பணியின் அளவு உங்களுடன் முடிவு செய்யப்படுகிறது.',
    },
    items: {
      en: ['Front elevations and compound walls', 'Exterior walls of houses', 'Grills, gates and trims', 'Repainting of weathered surfaces'],
      ta: ['முகப்புகள் மற்றும் சுற்றுச்சுவர்கள்', 'வீடுகளின் வெளிப்புறச் சுவர்கள்', 'கிரில்கள், கேட்கள், விளிம்புகள்', 'மங்கிய மேற்பரப்புகளுக்கு மீண்டும் பெயிண்டிங்'],
    },
  },
  {
    id: 'wall-putty',
    number: '03',
    icon: 'Layers',
    waKey: 'putty',
    image: IMAGES.tools,
    imageAlt: {
      en: 'Paint tray, roller and tools ready for surface preparation (sample image)',
      ta: 'மேற்பரப்பு தயாரிப்புக்குத் தயாரான பெயிண்ட் தட்டு, ரோலர், கருவிகள் (மாதிரி படம்)',
    },
    title: { en: 'Wall Putty & Surface Preparation', ta: 'சுவர் புட்டி & மேற்பரப்பு தயாரிப்பு' },
    short: {
      en: 'Careful preparation and putty work for a smoother base before painting.',
      ta: 'பெயிண்டிங்கிற்கு முன் மென்மையான அடித்தளத்திற்கான கவனமான தயாரிப்பு மற்றும் புட்டி வேலை.',
    },
    description: {
      en: 'Surface preparation and putty work before painting, where required. A well-prepared wall helps the final coat look smoother and more even.',
      ta: 'தேவைப்படும் இடங்களில், பெயிண்டிங்கிற்கு முன் மேற்பரப்பு தயாரிப்பு மற்றும் புட்டி வேலை. நன்கு தயார் செய்யப்பட்ட சுவர், இறுதி கோட்டை மேலும் மென்மையாகவும் சீராகவும் காட்ட உதவுகிறது.',
    },
    items: {
      en: ['Cleaning and preparing wall surfaces', 'Filling minor cracks and uneven patches', 'Wall putty application', 'Sanding before the final coats'],
      ta: ['சுவர் மேற்பரப்புகளைச் சுத்தம் செய்து தயார் செய்தல்', 'சிறு விரிசல்கள், சீரற்ற பகுதிகளை நிரப்புதல்', 'சுவர் புட்டி பூசுதல்', 'இறுதி கோட்டுக்கு முன் தேய்த்து மென்மையாக்குதல்'],
    },
  },
  {
    id: 'polish-work',
    number: '04',
    icon: 'Sparkles',
    waKey: 'polish',
    image: IMAGES.woodCabinet,
    imageAlt: {
      en: 'Polished wooden cabinetry with a warm natural finish (sample image)',
      ta: 'இதமான இயற்கை ஃபினிஷுடன் பாலிஷ் செய்யப்பட்ட மர அலமாரி (மாதிரி படம்)',
    },
    title: { en: 'Polish Work', ta: 'பாலிஷ் வேலை' },
    short: {
      en: 'Polish finishes chosen to suit your surface, material and desired look.',
      ta: 'உங்கள் மேற்பரப்பு, பொருள், விரும்பும் தோற்றத்திற்கு ஏற்ற பாலிஷ் ஃபினிஷ்கள்.',
    },
    description: {
      en: 'Polish work based on the customer’s surface, material and desired finish. We talk through the look you want — natural, matt or glossy — before recommending an approach.',
      ta: 'வாடிக்கையாளரின் மேற்பரப்பு, பொருள், விரும்பும் ஃபினிஷ் ஆகியவற்றைப் பொறுத்து பாலிஷ் வேலை. இயற்கையான, மேட் அல்லது பளபளப்பான தோற்றம் — நீங்கள் விரும்புவதைக் கேட்ட பிறகே வழிமுறையைப் பரிந்துரைக்கிறோம்.',
    },
    items: {
      en: ['Wooden doors and frames', 'Furniture and woodwork', 'Choice of finish to suit the material', 'Surface preparation before polishing'],
      ta: ['மரக் கதவுகள் மற்றும் சட்டங்கள்', 'மரச்சாமான்கள் மற்றும் மர வேலைப்பாடுகள்', 'பொருளுக்கு ஏற்ற ஃபினிஷ் தேர்வு', 'பாலிஷுக்கு முன் மேற்பரப்பு தயாரிப்பு'],
    },
  },
];

/**
 * Additional services that have NOT been confirmed by the business.
 * They are never shown on the public site while `approved` is false.
 * In development (`npm run dev`) they are listed in a clearly marked
 * "pending approval" panel on the Services page so they can be reviewed.
 *
 * To publish one: confirm with the business, then set approved: true.
 */
export const OPTIONAL_SERVICES = [
  { id: 'texture-painting', approved: false, title: { en: 'Texture Painting', ta: 'டெக்ஸ்சர் பெயிண்டிங்' } },
  { id: 'decorative-finishes', approved: false, title: { en: 'Decorative Finishes', ta: 'அலங்கார ஃபினிஷ்கள்' } },
  { id: 'commercial-painting', approved: false, title: { en: 'Commercial Painting', ta: 'வணிக பெயிண்டிங்' } },
  { id: 'waterproofing', approved: false, title: { en: 'Waterproofing', ta: 'நீர்க்கசிவு தடுப்பு' } },
  { id: 'specialised-coatings', approved: false, title: { en: 'Specialised Coatings', ta: 'சிறப்பு பூச்சுகள்' } },
];
