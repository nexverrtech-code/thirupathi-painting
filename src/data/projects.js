import { IMAGES } from './images';

/**
 * Gallery entries.
 *
 * `kind` MUST be accurate:
 *   - 'sample'    → stock / inspiration image. Shown with a "Sample image" badge.
 *   - 'completed' → a real project completed by Thirupathi Painting Contractors.
 *
 * `categories` drive the Works page filters: interior | exterior | residential | commercial
 * `size` controls the editorial grid tile: 'tall' | 'wide' | 'large' | undefined (standard)
 *
 * To add a real project:
 *   1. Save photos to /public/images/projects/ (WebP, ~1600px wide recommended)
 *   2. Add an entry with image: local('/images/projects/your-photo.webp') and kind: 'completed'
 */
export const PROJECTS = [
  {
    id: 'emerald-lounge',
    kind: 'sample',
    image: IMAGES.hero,
    categories: ['interior', 'residential'],
    size: 'large',
    title: { en: 'Emerald feature wall', ta: 'மரகதப் பச்சைச் சிறப்புச் சுவர்' },
    caption: {
      en: 'A deep green wall gives a living room warmth and a sense of occasion.',
      ta: 'அடர் பச்சைச் சுவர், வரவேற்பறைக்கு இதமும் சிறப்பும் தருகிறது.',
    },
  },
  {
    id: 'white-villa',
    kind: 'sample',
    image: IMAGES.exteriorWhite,
    categories: ['exterior', 'residential'],
    size: 'wide',
    title: { en: 'Crisp white exterior', ta: 'தூய வெண்மை வெளிப்புறம்' },
    caption: {
      en: 'Clean white walls keep a contemporary home bright under strong sunlight.',
      ta: 'வெண்மையான சுவர்கள், கடும் வெயிலிலும் நவீன வீட்டைப் பிரகாசமாக வைக்கின்றன.',
    },
  },
  {
    id: 'gallery-living',
    kind: 'sample',
    image: IMAGES.livingGallery,
    categories: ['interior', 'residential'],
    title: { en: 'Soft neutral living room', ta: 'மென்மையான நியூட்ரல் வரவேற்பறை' },
    caption: {
      en: 'Warm neutrals let artwork and furniture take centre stage.',
      ta: 'இதமான நியூட்ரல் வண்ணங்கள், ஓவியங்களையும் மரச்சாமான்களையும் முன்னிலைப்படுத்துகின்றன.',
    },
  },
  {
    id: 'lilac-facade',
    kind: 'sample',
    image: IMAGES.exteriorLilac,
    categories: ['exterior', 'residential'],
    size: 'tall',
    title: { en: 'Lilac facade', ta: 'லைலாக் முகப்பு' },
    caption: {
      en: 'A bold exterior colour can give a house a distinct personality.',
      ta: 'துணிச்சலான வெளிப்புற வண்ணம், வீட்டிற்குத் தனித்துவமான அடையாளம் தருகிறது.',
    },
  },
  {
    id: 'open-office',
    kind: 'sample',
    image: IMAGES.officeOpen,
    categories: ['interior', 'commercial'],
    size: 'wide',
    title: { en: 'Open-plan workspace', ta: 'திறந்த அலுவலக இடம்' },
    caption: {
      en: 'Calm, light walls help a workspace feel open and organised.',
      ta: 'அமைதியான, வெளிர் நிறச் சுவர்கள் அலுவலகத்தை விசாலமாகவும் ஒழுங்காகவும் உணரவைக்கின்றன.',
    },
  },
  {
    id: 'green-dining',
    kind: 'sample',
    image: IMAGES.diningGreen,
    categories: ['interior', 'residential'],
    title: { en: 'Dining in green', ta: 'பச்சை வண்ண உணவறை' },
    caption: {
      en: 'Rich green tones bring depth to a dining space.',
      ta: 'செழுமையான பச்சை நிறங்கள் உணவறைக்கு ஆழம் சேர்க்கின்றன.',
    },
  },
  {
    id: 'dusk-residence',
    kind: 'sample',
    image: IMAGES.exteriorDusk,
    categories: ['exterior', 'residential'],
    title: { en: 'Contemporary residence', ta: 'நவீன குடியிருப்பு' },
    caption: {
      en: 'Dark and light exterior tones create a striking contrast at dusk.',
      ta: 'அடர் மற்றும் வெளிர் வெளிப்புற நிறங்கள் மாலை நேரத்தில் அழகான மாறுபாட்டைத் தருகின்றன.',
    },
  },
  {
    id: 'warm-bedroom',
    kind: 'sample',
    image: IMAGES.bedroom,
    categories: ['interior', 'residential'],
    size: 'tall',
    title: { en: 'Restful bedroom', ta: 'அமைதியான படுக்கையறை' },
    caption: {
      en: 'Gentle, muted walls make a bedroom feel restful.',
      ta: 'மென்மையான, அடங்கிய நிறச் சுவர்கள் படுக்கையறையை அமைதியாக உணரவைக்கின்றன.',
    },
  },
  {
    id: 'studio-office',
    kind: 'sample',
    image: IMAGES.officeStudio,
    categories: ['interior', 'commercial'],
    title: { en: 'Bright studio office', ta: 'பிரகாசமான ஸ்டுடியோ அலுவலகம்' },
    caption: {
      en: 'White walls and natural light keep a studio fresh and focused.',
      ta: 'வெண்மைச் சுவர்களும் இயற்கை ஒளியும் ஸ்டுடியோவைப் புத்துணர்வுடன் வைக்கின்றன.',
    },
  },
  {
    id: 'colonial-home',
    kind: 'sample',
    image: IMAGES.exteriorColonial,
    categories: ['exterior', 'residential'],
    size: 'wide',
    title: { en: 'Classic family home', ta: 'பாரம்பரியக் குடும்ப இல்லம்' },
    caption: {
      en: 'Classic white with darker accents gives a timeless exterior.',
      ta: 'வெண்மையுடன் அடர் நிற விளிம்புகள், காலத்தால் அழியாத தோற்றம் தருகின்றன.',
    },
  },
  {
    id: 'kitchen-light',
    kind: 'sample',
    image: IMAGES.kitchen,
    categories: ['interior', 'residential'],
    title: { en: 'Light-filled kitchen', ta: 'ஒளி நிறைந்த சமையலறை' },
    caption: {
      en: 'Wipeable finishes are a practical choice for kitchens.',
      ta: 'எளிதில் துடைக்கக்கூடிய ஃபினிஷ்கள் சமையலறைக்கு நடைமுறைக்கு ஏற்றவை.',
    },
  },
  {
    id: 'office-lounge',
    kind: 'sample',
    image: IMAGES.officeLounge,
    categories: ['interior', 'commercial'],
    title: { en: 'Commercial lounge', ta: 'வணிக ஓய்வறை' },
    caption: {
      en: 'Neutral walls suit shared commercial spaces with heavy daily use.',
      ta: 'தினமும் அதிகம் பயன்படும் வணிக இடங்களுக்கு நியூட்ரல் சுவர்கள் பொருத்தமானவை.',
    },
  },
  {
    id: 'polished-wood',
    kind: 'sample',
    image: IMAGES.woodShelf,
    categories: ['interior', 'residential'],
    title: { en: 'Polished woodwork', ta: 'பாலிஷ் செய்த மர வேலைப்பாடு' },
    caption: {
      en: 'A polish finish brings out the natural warmth of wood.',
      ta: 'பாலிஷ் ஃபினிஷ் மரத்தின் இயற்கையான இதத்தை வெளிப்படுத்துகிறது.',
    },
  },
  {
    id: 'staircase',
    kind: 'sample',
    image: IMAGES.staircase,
    categories: ['interior', 'residential'],
    size: 'tall',
    title: { en: 'Staircase and hall', ta: 'படிக்கட்டு மற்றும் கூடம்' },
    caption: {
      en: 'Clean white walls make a staircase feel airy and open.',
      ta: 'வெண்மைச் சுவர்கள் படிக்கட்டுப் பகுதியை விசாலமாக்குகின்றன.',
    },
  },
];

/**
 * Before / after pairs.
 * When `before` is null, the "before" state is SIMULATED from the after image
 * with a CSS filter, and must be labelled as illustrative. Replace with real
 * photo pairs (kind: 'completed') when available.
 */
export const COMPARISONS = [
  {
    id: 'compare-lounge',
    kind: 'sample',
    after: IMAGES.livingWarm,
    before: null,
    title: { en: 'Living room refresh', ta: 'வரவேற்பறைப் புதுப்பிப்பு' },
    alt: {
      en: 'Living room with freshly painted walls (sample image)',
      ta: 'புதிதாக வண்ணம் பூசப்பட்ட சுவர்களுடன் வரவேற்பறை (மாதிரி படம்)',
    },
  },
  {
    id: 'compare-exterior',
    kind: 'sample',
    after: IMAGES.exteriorBlock,
    before: null,
    title: { en: 'Exterior repaint', ta: 'வெளிப்புற மறுபெயிண்டிங்' },
    alt: {
      en: 'House exterior with a fresh coat of paint (sample image)',
      ta: 'புதிய வண்ணப் பூச்சுடன் வீட்டின் வெளிப்புறம் (மாதிரி படம்)',
    },
  },
];

export const CATEGORIES = ['all', 'interior', 'exterior', 'residential', 'commercial'];
