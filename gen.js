const fs = require('fs');
const indexHtml = fs.readFileSync('index.html', 'utf8');

const headHeader = indexHtml.split('<main>')[0];
const footerScript = indexHtml.split('</main>')[1];

const servicesStr = '<section class="section" id="tjanster">';
const areasStr = '<section class="section section--subtle" id="omraden">';

const beforeAreas = indexHtml.split(areasStr)[0];
const servicesBlock = servicesStr + beforeAreas.split(servicesStr)[1];
const areasBlock = areasStr + indexHtml.split(areasStr)[1].split('</section>')[0] + '</section>';

const tjansterHtml = headHeader.replace(/<title>.*?<\/title>/, '<title>Våra Tjänster | Björkhagens Lås</title>')
  + '<main><div style="padding-top:80px"></div>'
  + servicesBlock
  + '</main>' 
  + footerScript;

const omradenHtml = headHeader.replace(/<title>.*?<\/title>/, '<title>Våra Områden | Björkhagens Lås</title>')
  + '<main><div style="padding-top:80px"></div>'
  + areasBlock
  + '</main>'
  + footerScript;

fs.writeFileSync('tjanster.html', tjansterHtml);
fs.writeFileSync('omraden.html', omradenHtml);
