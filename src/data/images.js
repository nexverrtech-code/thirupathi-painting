/**
 * Image registry.
 *
 * All photographs below are REPRESENTATIVE SAMPLE / INSPIRATION images from
 * Unsplash (https://unsplash.com/license). They are NOT completed projects by
 * Thirupathi Painting Contractors and must never be labelled as such.
 *
 * To use your own photos, put files in /public/images/ and replace an entry
 * with a local path, e.g.  hero: local('/images/hero.webp')
 */

const UNSPLASH = 'https://images.unsplash.com/photo-';
const WIDTHS = [480, 800, 1200, 1600, 2200];

function unsplash(id) {
  return {
    remote: true,
    src: `${UNSPLASH}${id}?auto=format&fit=crop&q=72&w=1200`,
    srcSet: WIDTHS.map((w) => `${UNSPLASH}${id}?auto=format&fit=crop&q=72&w=${w} ${w}w`).join(', '),
  };
}

/** Local image helper. Optionally pass a srcSet string for responsive sizes. */
export function local(src, srcSet) {
  return { remote: false, src, srcSet };
}

export const IMAGES = {
  hero: unsplash('1615873968403-89e068629265'),
  heroAlt: unsplash('1615529182904-14819c35db37'),
  roller: unsplash('1562259949-e8e7689d7828'),
  tools: unsplash('1599619585752-c3edb42a414c'),
  swatches: unsplash('1525909002-1b05e0c869d8'),
  woodwork: unsplash('1558618666-fcd25c85cd64'),
  woodCabinet: unsplash('1595515106969-1ce29566ff1c'),
  woodShelf: unsplash('1595428774223-ef52624120d2'),
  whiteBrick: unsplash('1513161455079-7dc1de15ef3e'),

  livingGallery: unsplash('1600210492486-724fe5c67fb0'),
  livingWarm: unsplash('1618221195710-dd6b41faaea6'),
  livingBright: unsplash('1600607687939-ce8a6c25118c'),
  livingSage: unsplash('1554995207-c18c203602cb'),
  livingCalm: unsplash('1616137466211-f939a420be84'),
  livingNeutral: unsplash('1616486338812-3dadae4b4ace'),
  livingDark: unsplash('1600121848594-d8644e57abab'),
  diningGreen: unsplash('1617806118233-18e1de247200'),
  bedroom: unsplash('1505691938895-1758d7feb511'),
  kitchen: unsplash('1484154218962-a197022b5858'),
  staircase: unsplash('1502005229762-cf1b2da7c5d6'),
  yellowChair: unsplash('1586023492125-27b2c045efd7'),
  minimal: unsplash('1513694203232-719a280e022f'),

  exteriorDusk: unsplash('1600585154340-be6161a56a0c'),
  exteriorWhite: unsplash('1600596542815-ffad4c1539a9'),
  exteriorModern: unsplash('1600566753190-17f0baa2a6c3'),
  exteriorColonial: unsplash('1570129477492-45c003edd2be'),
  exteriorLilac: unsplash('1574359411659-15573a27fd0c'),
  exteriorBlock: unsplash('1600047509807-ba8f99d2cdde'),
  exteriorTraditional: unsplash('1572120360610-d971b9d7767c'),
  exteriorVilla: unsplash('1512917774080-9991f1c4c750'),

  officeOpen: unsplash('1497366216548-37526070297c'),
  officeLounge: unsplash('1497366811353-6870744d04b2'),
  officeStudio: unsplash('1524758631624-e2822e304c36'),
};
