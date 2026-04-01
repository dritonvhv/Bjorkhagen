// =============================================
// Björkhagens Lås – Main JavaScript
// =============================================

(function () {
  'use strict';

  // ===== HEADER SCROLL EFFECT =====
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===== MOBILE MENU =====
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggleBtn.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close on nav link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          navLinks.classList.remove('open');
          toggleBtn.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ===== SCROLL ANIMATIONS =====
  const animateElements = document.querySelectorAll('[data-animate]');
  if (animateElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Staggered delay for grid children
            const siblings = entry.target.parentElement.querySelectorAll('[data-animate]');
            const idx = Array.from(siblings).indexOf(entry.target);
            const delay = Math.min(idx * 80, 400);
            setTimeout(() => {
              entry.target.classList.add('visible');
              
              // Counter animation
              const counter = entry.target.querySelector('.stat-number');
              if (counter && counter.hasAttribute('data-target')) {
                const targetVal = parseInt(counter.getAttribute('data-target'), 10);
                if (!isNaN(targetVal)) {
                  let startVal = 0;
                  const duration = 1500;
                  const stepTime = Math.abs(Math.floor(duration / targetVal)) || 10;
                  const timer = setInterval(() => {
                    startVal += Math.max(1, Math.floor(targetVal / 50));
                    if (startVal >= targetVal) {
                      counter.innerText = targetVal + (targetVal > 100 ? '+' : '+');
                      clearInterval(timer);
                    } else {
                      counter.innerText = startVal;
                    }
                  }, stepTime);
                }
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    animateElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    animateElements.forEach(el => el.classList.add('visible'));
  }

  // ===== SMOOTH SCROLL for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== ACTIVE NAV LINK (highlight current page) =====
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    // Do not highlight 'Hem' (index.html) by default to keep it clean.
    if (href && href !== 'index.html' && href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ===== CONTACT FORM SUBMISSION =====
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Skickar…';
      }

      // Simulate async submit
      setTimeout(() => {
        const successMsg = document.getElementById('form-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Skicka meddelande';
        }
      }, 1200);
    });
  }

})();
