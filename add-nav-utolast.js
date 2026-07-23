const fs = require('fs');

const files = fs.readdirSync('.').filter(f => 
  f.endsWith('.html') && 
  f !== 'utolast-stockholm.html' &&
  !f.startsWith('temp_') &&
  !f.startsWith('code.')
);

let updated = 0;
files.forEach(file => {
  let c = fs.readFileSync(file, 'utf8');
  // Add Utelåst Stockholm link after lasoppning.html in Tjänster dropdown
  if (c.includes('<li><a href="lasoppning.html">Låsöppning</a></li>') && !c.includes('utolast-stockholm.html')) {
    c = c.replace(
      '<li><a href="lasoppning.html">Låsöppning</a></li>',
      '<li><a href="lasoppning.html">Låsöppning</a></li>\n            <li><a href="utolast-stockholm.html">Utelåst Stockholm</a></li>'
    );
    fs.writeFileSync(file, c);
    console.log('Nav updated: ' + file);
    updated++;
  }
});
console.log('Done: ' + updated + ' files updated.');
