const fs = require('fs');

const oldLogoTopPattern = /(<a href="index\.html" class="nav-logo"[^>]*>)\s*<span class="material-symbols-outlined logo-icon">lock<\/span>\s*<div class="logo-text">.*?<\/div>\s*<\/a>/s;
const newLogoTop = `$1\n        <img src="Gemini_Generated_Image_btheg8btheg8bthe.png" alt="Björkhagens Lås Logo" class="brand-logo" />\n      </a>`;

const oldLogoFooterPattern = /<div class="footer-logo">\s*<span class="material-symbols-outlined">lock<\/span>\s*<span>Björkhagens Lås<\/span>\s*<\/div>/s;
const newLogoFooter = `<div class="footer-logo">\n          <img src="Gemini_Generated_Image_btheg8btheg8bthe.png" alt="Björkhagens Lås Logo" class="brand-logo" />\n        </div>`;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (oldLogoTopPattern.test(content)) {
    content = content.replace(oldLogoTopPattern, newLogoTop);
    changed = true;
  }
  
  if (oldLogoFooterPattern.test(content)) {
    content = content.replace(oldLogoFooterPattern, newLogoFooter);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed logos in: ' + file);
  }
});
