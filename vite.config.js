import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const ROUTES = ['/', '/services', '/works', '/contact'];

/**
 * Emits sitemap.xml and robots.txt at build time using VITE_SITE_URL.
 * Set the final domain in a `.env.production` file (see README) before deploying.
 */
function seoFiles(siteUrl) {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      const base = (siteUrl || '').replace(/\/$/, '');
      if (!base) {
        this.warn('VITE_SITE_URL is not set — sitemap.xml will be skipped and robots.txt will not reference it.');
      } else {
        const today = new Date().toISOString().slice(0, 10);
        const urls = ROUTES.map(
          (r) => `  <url>\n    <loc>${base}${r}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
        ).join('\n');
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
      }
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n${base ? `\nSitemap: ${base}/sitemap.xml\n` : ''}`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), seoFiles(env.VITE_SITE_URL)],
  };
});
