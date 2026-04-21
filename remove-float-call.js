const fs = require('fs');

const findFloatCall = /<a href="tel:[^"]+" class="float-call"(?:.*?)>[\s\S]*?<\/a>/g;

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (findFloatCall.test(content)) {
    content = content.replace(findFloatCall, '');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Removed float-call from: ' + file);
  }
});
