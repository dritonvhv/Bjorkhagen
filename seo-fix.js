const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://bjorkhagenslås.se'; // Current (wrong) domain
const NEW_DOMAIN = 'https://bjorkhagenslås.se'; // Keep .se but strip special char

// Map each file to its canonical slug
const canonicalMap = {
  'index.html':                   '/',
  'tjanster.html':                '/tjanster',
  'lasoppning.html':              '/lasoppning',
  'lasbyte.html':                 '/lasbyte',
  'jour.html':                    '/jour',
  'reparation.html':              '/reparation',
  'cylinderbyte.html':            '/cylinderbyte',
  'omraden.html':                 '/omraden',
  'lassmed-stockholm.html':       '/lassmed-stockholm',
  'lassmed-sodermalm.html':       '/lassmed-sodermalm',
  'lassmed-nacka.html':           '/lassmed-nacka',
  'lassmed-huddinge.html':        '/lassmed-huddinge',
  'lassmed-arsta.html':           '/lassmed-arsta',
  'lassmed-enskede.html':         '/lassmed-enskede',
  'lassmed-liljeholmen.html':     '/lassmed-liljeholmen',
  'lassmed-östermalm.html':       '/lassmed-ostermalm',
  'om-oss.html':                  '/om-oss',
  'kontakt.html':                 '/kontakt',
};

const BASE = 'https://bjorkhagenslås.se';

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.startsWith('temp_') && !f.startsWith('code.'));

let totalChanges = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // 1. Fix / add canonical tag
  const slug = canonicalMap[file];
  if (slug !== undefined) {
    const correctCanonical = `<link rel="canonical" href="${BASE}${slug}" />`;
    // Replace existing canonical
    content = content.replace(/<link rel="canonical"[^>]*>/g, correctCanonical);
    // Add canonical if missing (after <meta name="robots"... or after </title>)
    if (!content.includes('<link rel="canonical"')) {
      content = content.replace(
        /(<\/title>)/,
        `$1\n  ${correctCanonical}`
      );
    }
  }

  // 2. Remove meta keywords
  content = content.replace(/\n?\s*<meta name="keywords"[^>]*\/>/g, '');
  content = content.replace(/\n?\s*<meta name="keywords"[^/]*\/>/g, '');

  // 3. Fix schema URL: bjorkhagenslås.se → bjorkhagenslås.se (remove wrong domain variants)
  content = content.replace(/"url": "https:\/\/bjorkhagenslås\.se[^"]*"/g, `"url": "${BASE}"`);
  content = content.replace(/"url": "https:\/\/bjorkhagenslas\.com[^"]*"/g, `"url": "${BASE}"`);

  // 4. Fix schema address (update from Johanneshov to real address)
  content = content.replace(
    /"addressLocality": "Johanneshov"/g,
    '"streetAddress": "Trollesundsvägen 175", "addressLocality": "Stockholm", "postalCode": "124 57"'
  );

  // 5. Fix copyright year 2024 → 2026
  content = content.replace(/© 2024 Björkhagens/g, '© 2026 Björkhagens');

  // 6. Fix stat counters: set fallback text inside data-target divs
  content = content.replace(
    /<div class="stat-number" data-target="30">0<\/div>/g,
    '<div class="stat-number" data-target="30">30</div>'
  );
  content = content.replace(
    /<div class="stat-number" data-target="1200">0<\/div>/g,
    '<div class="stat-number" data-target="1200">1 200</div>'
  );
  content = content.replace(
    /<div class="stat-number" data-target="5000">0<\/div>/g,
    '<div class="stat-number" data-target="5000">5 000</div>'
  );
  content = content.replace(
    /<div class="stat-number" data-target="100">0<\/div>/g,
    '<div class="stat-number" data-target="100">100</div>'
  );

  if (content !== original) {
    fs.writeFileSync(file, content);
    totalChanges++;
    console.log(`✓ Fixed: ${file}`);
  } else {
    console.log(`  (no change): ${file}`);
  }
});

console.log(`\nDone! ${totalChanges} files updated.`);
