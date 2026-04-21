const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.includes('align-items:flex-start')) {
    content = content.replace(/align-items:flex-start/g, 'align-items:center');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Centered tagline in: ' + file);
  }
});
