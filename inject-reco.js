const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const start = html.indexOf('<section class="section" id="recensioner"');
const end = html.indexOf('<!-- ===== AREAS =====');

if (start === -1 || end === -1) {
  console.error('Boundaries not found. start=' + start + ' end=' + end);
  process.exit(1);
}

const before = html.substring(0, start);
const after = html.substring(end);

const newSection = `    <section class="section" id="recensioner">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Kundrecensioner</span>
          <h2 class="section-title">Vad våra kunder säger</h2>
        </div>

        <!-- Review Carousel -->
        <div class="review-carousel" id="reviewCarousel">
          <div class="review-carousel-track" id="reviewTrack">

            <div class="review-slide">
              <div class="review-card-single">
                <div class="review-card-top">
                  <div class="reco-logo-badge">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1a73e8"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial,sans-serif" font-weight="700">R</text></svg>
                    <span>Reco</span>
                  </div>
                  <div class="review-stars-row">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
                <p class="review-quote">&ldquo;Låste ut mig och har en svårare säkerhetsdörr. Hade en låskolv på dörren och det tog nästan en timme att borra upp. Trodde inte det skulle gå, var helt förtvivlad. MEN Bengt lyckades med detta! Stort tack... jag kom in och allt blev bra till slut.&rdquo;</p>
                <div class="review-author-row">
                  <div class="review-avatar-circle">H</div>
                  <div>
                    <strong>Hannele</strong>
                    <span>Blåsut – Reco</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="review-slide">
              <div class="review-card-single">
                <div class="review-card-top">
                  <div class="reco-logo-badge">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1a73e8"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial,sans-serif" font-weight="700">R</text></svg>
                    <span>Reco</span>
                  </div>
                  <div class="review-stars-row">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
                <p class="review-quote">&ldquo;Mycket kompetent, väldigt trevlig, gav det där &lsquo;lilla extra&rsquo; i serviceväg man som kund gärna vill ha. Fick hjälp samma förmiddag som jag kontaktade företaget. Ca halva priset mot många konkurrenter. Rekommenderas verkligen!&rdquo;</p>
                <div class="review-author-row">
                  <div class="review-avatar-circle">A</div>
                  <div>
                    <strong>Anita</strong>
                    <span>Stockholm – Reco</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="review-slide">
              <div class="review-card-single">
                <div class="review-card-top">
                  <div class="reco-logo-badge">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1a73e8"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial,sans-serif" font-weight="700">R</text></svg>
                    <span>Reco</span>
                  </div>
                  <div class="review-stars-row">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
                <p class="review-quote">&ldquo;Kom snabbt då vi behövde byta trasig låskista i entrédörr, bytte snabbt till måttligt pris.&rdquo;</p>
                <div class="review-author-row">
                  <div class="review-avatar-circle">S</div>
                  <div>
                    <strong>Sven-Lennart</strong>
                    <span>Stockholm – Reco</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="review-slide">
              <div class="review-card-single">
                <div class="review-card-top">
                  <div class="reco-logo-badge">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1a73e8"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial,sans-serif" font-weight="700">R</text></svg>
                    <span>Reco</span>
                  </div>
                  <div class="review-stars-row">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
                <p class="review-quote">&ldquo;Snabb och proffsig hjälp som fick ordning på vår dörr som kärvade och nu fungerar utmärkt igen. Tack Bengt för hjälpen!&rdquo;</p>
                <div class="review-author-row">
                  <div class="review-avatar-circle">L</div>
                  <div>
                    <strong>Lars</strong>
                    <span>Stockholm – Reco</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="review-slide">
              <div class="review-card-single">
                <div class="review-card-top">
                  <div class="reco-logo-badge">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1a73e8"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial,sans-serif" font-weight="700">R</text></svg>
                    <span>Reco</span>
                  </div>
                  <div class="review-stars-row">
                    <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                  </div>
                </div>
                <p class="review-quote">&ldquo;Supertrevlig och proffs! Bästa låssmed i Stockholm – inga konstiga avgifter och löste problemet direkt.&rdquo;</p>
                <div class="review-author-row">
                  <div class="review-avatar-circle">M</div>
                  <div>
                    <strong>Maria</strong>
                    <span>Södermalm – Reco</span>
                  </div>
                </div>
              </div>
            </div>

          </div><!-- /track -->

          <!-- Controls BELOW the card -->
          <div class="review-carousel-controls">
            <button class="review-prev" id="reviewPrev" aria-label="Föregående recension">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </button>
            <div class="review-dots" id="reviewDots"></div>
            <button class="review-next" id="reviewNext" aria-label="Nästa recension">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor"><path d="M400-240l-56-56 184-184-184-184 56-56 240 240-240 240Z"/></svg>
            </button>
          </div>
        </div>

        <div style="text-align:center;margin-top:28px;">
          <a href="https://www.reco.se/bjorkhagens-las" target="_blank" rel="noopener noreferrer" class="btn-ghost" style="display:inline-flex;align-items:center;gap:8px;">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#1a73e8"/><text x="16" y="21" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial,sans-serif" font-weight="700">R</text></svg>
            Se alla omdömen på Reco
          </a>
        </div>
      </div>
    </section>

    `;

fs.writeFileSync('index.html', before + newSection + after, 'utf8');
console.log('Done – custom review carousel injected.');
