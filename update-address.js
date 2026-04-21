const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Replace generic address mentions globally
  if (content.includes('>Johanneshov, Stockholm<')) {
    content = content.replace(/>Johanneshov, Stockholm</g, '>Trollesundsvägen 175, 124 57 Stockholm<');
    changed = true;
  }
  
  // Specifically for the contact map URL
  if (content.includes('q=Johanneshov+Stockholm')) {
    content = content.replace(/q=Johanneshov\+Stockholm/g, 'q=Trollesundsvägen+175,+124+57+Stockholm');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Updated address in ' + file);
  }
});
