const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.includes('Gemini_Generated_Image_btheg8btheg8bthe.png')) {
    content = content.replace(/Gemini_Generated_Image_btheg8btheg8bthe\.png/g, 'logo.png');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed logos in: ' + file);
  }
});
