const fs = require('fs');

const findLogoTop = /(<a href="index\.html" class="nav-logo"[^>]*>)\s*<img src="logo\.png" alt="Björkhagens Lås Logo" class="brand-logo" \/>\s*<\/a>/s;
const replaceLogoTop = `$1\n        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:4px;">\n          <img src="logo.png" alt="Björkhagens Lås Logo" class="brand-logo" />\n          <span class="logo-tagline" style="font-size:9px; letter-spacing:0.12em; color:var(--text-muted); font-weight:600; text-transform:uppercase;">Sedan 1987</span>\n        </div>\n      </a>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (findLogoTop.test(content)) {
    content = content.replace(findLogoTop, replaceLogoTop);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Added tagline to: ' + file);
  }
});
