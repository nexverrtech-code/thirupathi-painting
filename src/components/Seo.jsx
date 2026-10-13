import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { BUSINESS, SITE_URL } from '../data/business';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (content == null) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Per-page metadata. Updates the existing tags from index.html in place
 * (so there are never duplicates) whenever the page or language changes.
 * Canonical and og:url are only emitted once VITE_SITE_URL is configured.
 */
export default function Seo({ page, path, noindex = false }) {
  const { t, lang } = useLanguage();
  const title = t(`meta.${page}.title`);
  const description = t(`meta.${page}.description`);

  useEffect(() => {
    document.title = title;
    const url = SITE_URL ? `${SITE_URL}${path}` : null;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : null);
    upsertLink('canonical', url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:site_name', BUSINESS.name);
    upsertMeta('property', 'og:locale', lang === 'ta' ? 'ta_IN' : 'en_IN');
    upsertMeta('property', 'og:locale:alternate', lang === 'ta' ? 'en_IN' : 'ta_IN');
    upsertMeta('property', 'og:image', SITE_URL ? `${SITE_URL}/og-image.jpg` : null);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
  }, [title, description, path, lang, noindex]);

  return null;
}
