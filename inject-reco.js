const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Find the recensioner section boundaries
const start = html.indexOf('<section class="section" id="recensioner"');
const end = html.indexOf('<!-- ===== AREAS =====');

if (start === -1 || end === -1) {
  console.error('Could not find section boundaries. start=' + start + ' end=' + end);
  process.exit(1);
}

const before = html.substring(0, start);
const after = html.substring(end);

const newSection = `    <section class="section" id="recensioner">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Kundrecensioner</span>
          <h2 class="section-title">Vad våra kunder säger</h2>
          <p class="section-subtitle">Äkta recensioner från riktiga kunder – direkt från Reco.</p>
        </div>

        <!-- Reco live widget -->
        <div style="max-width:960px;margin:0 auto;background:var(--white);border-radius:var(--radius-xl);border:1px solid var(--border);box-shadow:var(--shadow-md);overflow:hidden;">
          <iframe
            src="https://widget.reco.se/v2/venues/3087541/horizontal/xlarge?inverted=false&border=false&lang=sv"
            title="Björkhagens Lås - Omdömen på Reco"
            height="225"
            loading="lazy"
            style="width:100%;border:0;display:block;overflow:hidden;"
          ></iframe>
        </div>

        <div style="text-align:center;margin-top:24px;">
          <a href="https://www.reco.se/bjorkhagens-las" target="_blank" rel="noopener noreferrer" class="btn-ghost" style="display:inline-flex;align-items:center;gap:8px;">
            <span class="material-symbols-outlined" style="font-size:18px;">open_in_new</span>
            Se alla recensioner på Reco
          </a>
        </div>
      </div>
    </section>

    `;

fs.writeFileSync('index.html', before + newSection + after, 'utf8');
console.log('Done – Reco widget injected successfully.');
