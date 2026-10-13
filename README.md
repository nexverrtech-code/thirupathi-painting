# Thirupathi Painting Contractors — Website

A bilingual (English / தமிழ்) marketing website for **Thirupathi Painting Contractors**, Periyar Nagar, Erode.
It's built with React + Vite and has no backend. Enquiries are handed off to WhatsApp.

- **Pages:** Home `/`, Services `/services`, Our Works `/works`, Contact `/contact` (plus a 404 page)
- **Stack:** React 19, Vite, React Router, Motion (`motion/react`), Lucide icons, plain CSS with design tokens
- **No backend, no database, no tracking scripts, no API keys**

---

## 1. Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build in /dist
npm run preview   # serve the production build locally
```

---

## 2. Project structure

```
index.html                 Default meta tags, fonts, LocalBusiness JSON-LD
vite.config.js             Vite config + build-time sitemap.xml / robots.txt
public/                    favicon.svg, apple-touch-icon.png, og-image.jpg, site.webmanifest, _redirects
src/
  main.jsx                 Entry: router + language provider
  App.jsx                  Layout, routes, page transitions, hash scrolling
  context/LanguageContext.jsx   Language state, t() and pick() helpers, <html lang>
  hooks/useLanguage.js     Hook to access translations
  hooks/useMediaQuery.js
  data/
    business.js            ★ The only place business details live (name, phones, WhatsApp, address)
    translations.js        ★ All UI text in English and Tamil
    services.js            Confirmed services + optional (unapproved) services
    projects.js            Gallery items and before/after pairs
    images.js              Image registry (swap placeholders for real photos here)
  components/              Header, Footer, LanguageSwitcher, WhatsAppButton, ServiceCard,
                           ProjectCard, BeforeAfterSlider, Lightbox, SectionHeading, FAQ,
                           ColourStudio, EnquiryForm, ContactCards, CtaSection, Hero,
                           PageHero, SmartImage, Seo, Motion helpers, Icons, Logo
  pages/                   Home, Services, Works, Contact, NotFound
  styles/
    tokens.css             Colours, type scale, spacing, motion tokens (+ Tamil overrides)
    global.css             Reset, base, utilities, focus styles, reduced motion
    components.css         Component styles
    pages.css              Page and section styles
```

---

## 3. Business details

All contact details come from **`src/data/business.js`**. Nothing is hard-coded in components.
The only exceptions are `index.html` (the JSON-LD block and the `<noscript>` fallback), which need to be edited by hand if the details change.

| Field | Current value |
|---|---|
| Name | Thirupathi Painting Contractors |
| Proprietor | P. Logu |
| Phones | +91 99440 56433 (primary), +91 85083 58886 |
| WhatsApp | 919944056433 |
| Address | Periyar Nagar, Erode – 1, Tamil Nadu, India |

These fields are intentionally empty until they're confirmed. The UI only shows them once they are filled in:

- `hours`: business hours. Set it to `{ en: '…', ta: '…' }` and they appear on the Contact page.
- `email`, `social`: not displayed anywhere yet.

> ⚠️ **Before going live, confirm that +91 99440 56433 is WhatsApp-enabled.** All WhatsApp buttons use it.

### WhatsApp messages

Prefilled messages live in `translations.js` under `wa.*`: `general`, `interior`, `exterior`, `putty`, `polish` and `siteVisit`.
Links follow the official `https://wa.me/<digits>?text=<url-encoded message>` format. The enquiry form builds its message from the fields the visitor fills in.
The form never submits anything to a server. It tells visitors that WhatsApp will open and that they send the message themselves.

---

## 4. Replacing the placeholder images

**Every photograph currently on the site is a representative sample image from Unsplash. None of them show completed work by Thirupathi Painting Contractors.** The site says so in several places: "Sample image" badges, the notice on the Works page, a note in the footer, and the caption on each before/after slider.

### Add a real completed project

1. Export the photo as WebP (or JPEG), about 1600 px on the long edge, under ~300 KB.
2. Save it in `public/images/projects/`, e.g. `public/images/projects/living-room-repaint.webp`.
3. Add an entry in `src/data/projects.js`:

```js
import { local } from './images';

{
  id: 'living-room-repaint',
  kind: 'completed',               // ← real project: shows a "Completed project" badge
  image: local('/images/projects/living-room-repaint.webp'),
  categories: ['interior', 'residential'],   // interior | exterior | residential | commercial
  size: 'wide',                    // optional: 'tall' | 'wide' | 'large'
  title:   { en: 'Living room repaint', ta: 'வரவேற்பறை மறுபெயிண்டிங்' },
  caption: { en: 'Walls prepared with putty and repainted in warm ivory.', ta: '…' },
},
```

4. Delete the `kind: 'sample'` entries you no longer need. The disclaimer on the Works page disappears automatically once no sample items are left.

For responsive sizes, you can pass a `srcSet` too:
`local('/images/projects/a-800.webp', '/images/projects/a-800.webp 800w, /images/projects/a-1600.webp 1600w')`.

### Before/after pairs

In `COMPARISONS` (`src/data/projects.js`), set both `before` and `after` to real photos taken from the same angle, and set `kind: 'completed'`.
While `before` is `null`, the "before" side is **simulated** from the "after" photo with a CSS filter, and the slider is labelled as illustrative.

### Other images

The hero, service and section images are registered in `src/data/images.js`. To use your own file instead, replace an entry, e.g. `hero: local('/images/hero.webp')`.
If an image fails to load, `SmartImage` shows a styled fallback instead of a broken image.

---

## 5. Services

The four confirmed services (Interior Painting, Exterior Painting, Wall Putty & Surface Preparation, Polish Work) are in `src/data/services.js`.

Texture painting, decorative finishes, commercial painting, waterproofing and specialised coatings are listed in `OPTIONAL_SERVICES` with `approved: false`.
They are **never shown on the production site**. During `npm run dev`, they appear in a dashed "Pending approval" panel on the Services page so they can be reviewed.
Once the business confirms one, set `approved: true` and it will appear publicly.

No prices are published.

---

## 6. Languages

- Toggle: English / தமிழ் in the header, mobile menu and footer.
- The choice is kept while navigating and saved in `localStorage`. If storage isn't available, the site falls back to English.
- `<html lang>` switches between `en-IN` and `ta-IN`. The page `<title>`, description and `og:locale` update too.
- All UI text is in `src/data/translations.js` (`en` and `ta` have the same shape). Content that has two versions (services, projects) uses `{ en, ta }` objects, read with `pick()`.
- Fonts: Cormorant Garamond (headings) and Manrope (body), with Noto Serif Tamil and Noto Sans Tamil as fallbacks for Tamil characters. Tamil gets its own type scale in `tokens.css`.

> Have a native Tamil speaker review the Tamil text before launch.

---

## 7. SEO

- Each page sets its own title, meta description and Open Graph tags (`src/components/Seo.jsx`), in both languages.
- The `HousePainter` (LocalBusiness) JSON-LD in `index.html` uses verified details only. It has no ratings, hours, geo-coordinates or URL.
- **Set the domain** once it's confirmed. Create `.env.production`:

  ```bash
  VITE_SITE_URL=https://www.your-confirmed-domain.in
  ```

  When this is set, the build:
  - adds canonical URLs, `og:url` and an absolute `og:image` (`/og-image.jpg`)
  - generates `dist/sitemap.xml` for `/`, `/services`, `/works` and `/contact`
  - adds a `Sitemap:` line to `dist/robots.txt`

  Without it, the build still produces `robots.txt`, skips the sitemap and prints a warning. This stops a wrong domain from being published.
- Also add `"url": "https://…"` to the JSON-LD in `index.html` once the domain is confirmed.
- This is a client-rendered SPA. Google renders JavaScript, but you could add pre-rendering later (e.g. `vite-prerender-plugin`) so other crawlers see the content straight away.

---

## 8. Accessibility & performance

- Semantic landmarks, a skip link, labelled navigation, visible focus rings (gold on dark backgrounds, emerald on light ones)
- Keyboard support everywhere:
  - Before/after slider: arrow keys, Page Up/Down, Home/End
  - Lightbox: Esc and arrow keys, with focus trapped and restored on close
  - Mobile menu: Esc, with focus trapped
- Touch support: swipe in the lightbox and drag on the slider (vertical page scrolling still works)
- `prefers-reduced-motion`: Motion is set to `reducedMotion="user"`. The hero paint-reveal, parallax and clip reveals are skipped, and CSS transitions are reduced.
- Responsive `srcset` images, lazy-loaded below the fold, with fixed aspect ratios so the layout doesn't shift. The hero image uses `fetchpriority="high"`.
- Fonts load with `display=swap`. Inner pages are code-split.

---

## 9. Deployment

Run `npm run build` and upload the `dist/` folder to any static host. The host must serve `index.html` for unknown paths (SPA fallback), and **HTTPS must be enabled**.

- **Netlify:** build command `npm run build`, publish directory `dist`. `public/_redirects` already provides the SPA fallback. Add `VITE_SITE_URL` under Site settings → Environment variables.
- **Vercel:** framework preset "Vite". `vercel.json` already provides the rewrites. Add `VITE_SITE_URL` as an environment variable.
- **Cloudflare Pages:** build command `npm run build`, output `dist`. `_redirects` is supported.
- **Other hosts (Apache / Nginx):** rewrite every non-file request to `/index.html`.

---

## 10. Pre-launch checklist

- [ ] Confirm +91 99440 56433 is WhatsApp-enabled
- [ ] Replace sample photos with real project photos (`kind: 'completed'`)
- [ ] Add real before/after pairs
- [ ] Confirm the domain → set `VITE_SITE_URL` and add `url` to the JSON-LD
- [ ] Confirm business hours (optional) → `BUSINESS.hours`
- [ ] Decide on the optional services (`approved: true/false`)
- [ ] Native-speaker review of the Tamil text
- [ ] Submit `sitemap.xml` in Google Search Console and create or claim the Google Business Profile with the same name, address and phone

Sample photographs: [Unsplash](https://unsplash.com/license).
