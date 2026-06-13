const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let n = 0;
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Replace any variant of the .se domain with .com
  const u = c.replace(/bjorkhagensl[åa]s\.se/g, 'bjorkhagenslas.com');
  if (u !== c) {
    fs.writeFileSync(f, u);
    console.log('Fixed: ' + f);
    n++;
  }
});
console.log('Done: ' + n + ' files updated.');
