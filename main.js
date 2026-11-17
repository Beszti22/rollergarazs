// RollerGarázs — Main Application & Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize i18n Engine
  if (window.RollerI18n) {
    window.RollerI18n.init();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        window.RollerI18n.setLanguage(lang);
        updateStatusTicker();
        updateCalculation();
      });
    });
  }

  // 2. Real-Time Workshop Status Engine
  function updateStatusTicker() {
    const statusTextEl = document.getElementById('statusText');
    const pulseDot = document.querySelector('.pulse-dot');
    if (!statusTextEl) return;

    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const currentMins = now.getHours() * 60 + now.getMinutes();

    const isWeekday = day >= 1 && day <= 5;
    const openMins = 9 * 60; // 09:00
    const closeMins = 18 * 60; // 18:00
    const isOpen = isWeekday && (currentMins >= openMins && currentMins < closeMins);

    const lang = window.RollerI18n ? window.RollerI18n.currentLang : 'hu';

    if (isOpen) {
      statusTextEl.textContent = lang === 'hu' 
        ? 'Műhely nyitva (18:00-ig) • Bejelentkezés ajánlott' 
        : 'Workshop open (until 18:00) • Booking recommended';
      if (pulseDot) {
        pulseDot.style.backgroundColor = 'var(--color-success)';
      }
    } else {
      statusTextEl.textContent = lang === 'hu'
        ? 'Műhely zárva • Üzenetküldés & online időpont 0-24'
        : 'Workshop closed • 24/7 online message & booking';
      if (pulseDot) {
        pulseDot.style.backgroundColor = 'var(--color-secondary)';
      }
    }
  }

  updateStatusTicker();
  setInterval(updateStatusTicker, 60000);

  // 3. Header Scroll Glass Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 4. Mobile Navigation Menu
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  function toggleNav() {
    const isOpen = navMenu?.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
    if (mobileToggle) {
      mobileToggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    }
  }

  mobileToggle?.addEventListener('click', toggleNav);

  // Close nav on clicking links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu?.classList.contains('open')) {
        toggleNav();
      }
    });
  });

  // 5. Típushibák & Megoldások Tab Switching
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });

  // 6. Interactive Quote & Diagnosis Calculator
  let selectedBrand = 'kukirin';
  let selectedIssue = 'unboxing';

  const brandButtons = document.querySelectorAll('.brand-pill');
  const issueButtons = document.querySelectorAll('.issue-pill');
  const estPriceEl = document.getElementById('calcEstPrice');
  const estTimeEl = document.getElementById('calcEstTime');
  const descInput = document.getElementById('calcDesc');

  // Pricing matrix (Brand + Issue)
  const priceMatrix = {
    flat: {
      kukirin: { hu: '8 500 – 14 500 Ft', en: '8,500 – 14,500 HUF', timeHu: 'Akár aznap (1-3 óra)', timeEn: 'Same-day (1-3 hrs)' },
      xiaomi: { hu: '7 500 – 12 000 Ft', en: '7,500 – 12,000 HUF', timeHu: 'Akár aznapra', timeEn: 'Same day' },
      ninebot: { hu: '8 000 – 13 500 Ft', en: '8,000 – 13,500 HUF', timeHu: 'Akár aznapra', timeEn: 'Same day' },
      joyor: { hu: '8 500 – 14 000 Ft', en: '8,500 – 14,000 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      performance: { hu: '12 000 – 22 000 Ft', en: '12,000 – 22,000 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      other: { hu: '8 500 – 15 000 Ft', en: '8,500 – 15,000 HUF', timeHu: '1 munkanap', timeEn: '1 working day' }
    },
    unboxing: {
      kukirin: { hu: '14 900 – 18 900 Ft', en: '14,900 – 18,900 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      xiaomi: { hu: '9 900 – 12 900 Ft', en: '9,900 – 12,900 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      ninebot: { hu: '11 900 – 14 900 Ft', en: '11,900 – 14,900 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      joyor: { hu: '13 900 – 17 900 Ft', en: '13,900 – 17,900 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      performance: { hu: '18 900 – 26 900 Ft', en: '18,900 – 26,900 HUF', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      other: { hu: '12 900 – 18 900 Ft', en: '12,900 – 18,900 HUF', timeHu: '1 munkanap', timeEn: '1 working day' }
    },
    brakes: {
      kukirin: { hu: '9 900 Ft-tól + hidraulika szett', en: 'From 9,900 HUF + hydraulic kit', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      xiaomi: { hu: '6 500 – 11 000 Ft', en: '6,500 – 11,000 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      ninebot: { hu: '7 500 – 12 500 Ft', en: '7,500 – 12,500 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      joyor: { hu: '9 900 – 16 000 Ft', en: '9,900 – 16,000 HUF', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      performance: { hu: '14 900 Ft-tól (Zoom/Nutt)', en: 'From 14,900 HUF (Zoom/Nutt)', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      other: { hu: '8 500 Ft-tól', en: 'From 8,500 HUF', timeHu: '1-2 munkanap', timeEn: '1-2 working days' }
    },
    wobble: {
      kukirin: { hu: '11 900 – 16 900 Ft', en: '11,900 – 16,900 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      xiaomi: { hu: '5 500 – 9 500 Ft', en: '5,500 – 9,500 HUF', timeHu: 'Akár aznapra', timeEn: 'Same day' },
      ninebot: { hu: '6 500 – 10 500 Ft', en: '6,500 – 10,500 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      joyor: { hu: '9 900 – 14 500 Ft', en: '9,900 – 14,500 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      performance: { hu: '14 900 – 24 900 Ft (gátlóval)', en: '14,900 – 24,900 HUF (w/ damper)', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      other: { hu: '8 500 – 15 000 Ft', en: '8,500 – 15,000 HUF', timeHu: '1 munkanap', timeEn: '1 working day' }
    },
    electric: {
      kukirin: { hu: 'Egyedi diagnosztika alapján', en: 'Based on diagnosis', timeHu: '1-3 munkanap', timeEn: '1-3 working days' },
      xiaomi: { hu: '8 500 Ft-tól (Error kódok)', en: 'From 8,500 HUF (Error codes)', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      ninebot: { hu: '9 500 Ft-tól', en: 'From 9,500 HUF', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      joyor: { hu: 'Egyedi felmérés alapján', en: 'Based on diagnosis', timeHu: '1-3 munkanap', timeEn: '1-3 working days' },
      performance: { hu: 'Egyedi felmérés alapján', en: 'Based on diagnosis', timeHu: '2-4 munkanap', timeEn: '2-4 working days' },
      other: { hu: 'Egyedi felmérés alapján', en: 'Based on diagnosis', timeHu: '1-3 munkanap', timeEn: '1-3 working days' }
    },
    waterproof: {
      kukirin: { hu: '12 500 – 17 500 Ft', en: '12,500 – 17,500 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      xiaomi: { hu: '9 500 – 12 500 Ft', en: '9,500 – 12,500 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      ninebot: { hu: '10 500 – 13 500 Ft', en: '10,500 – 13,500 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      joyor: { hu: '11 500 – 15 500 Ft', en: '11,500 – 15,500 HUF', timeHu: '1 munkanap', timeEn: '1 working day' },
      performance: { hu: '16 500 – 24 500 Ft', en: '16,500 – 24,500 HUF', timeHu: '1-2 munkanap', timeEn: '1-2 working days' },
      other: { hu: '12 000 – 18 000 Ft', en: '12,000 – 18,000 HUF', timeHu: '1 munkanap', timeEn: '1 working day' }
    }
  };

  function updateCalculation() {
    const lang = window.RollerI18n ? window.RollerI18n.currentLang : 'hu';
    const data = priceMatrix[selectedIssue]?.[selectedBrand] || {
      hu: 'Egyedi egyeztetés szerint',
      en: 'Based on physical inspection',
      timeHu: '1-2 munkanap',
      timeEn: '1-2 working days'
    };

    if (estPriceEl) {
      estPriceEl.textContent = lang === 'hu' ? data.hu : data.en;
    }
    if (estTimeEl) {
      estTimeEl.textContent = lang === 'hu' ? data.timeHu : data.timeEn;
    }
  }

  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedBrand = btn.getAttribute('data-brand') || 'kukirin';
      updateCalculation();
    });
  });

  issueButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      issueButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedIssue = btn.getAttribute('data-issue') || 'unboxing';
      updateCalculation();
    });
  });

  updateCalculation();

  // 7. Booking / Issue Report Form Submission
  const calcForm = document.getElementById('calcBookingForm');
  const formFeedback = document.getElementById('formFeedback');

  calcForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('calcName')?.value;
    const phone = document.getElementById('calcPhone')?.value;
    const notes = document.getElementById('calcDesc')?.value;

    const submitBtn = calcForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = window.RollerI18n?.t('calc.form.submitting') || 'Küldés...';
    }

    // Realistic delay simulating fast serverless submission
    setTimeout(() => {
      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>✓ ${window.RollerI18n?.t('calc.form.success') || 'Sikeres beküldés!'}</strong><br>
          <span style="font-size:0.85rem; color:var(--text-muted);">
            Márka: <strong>${selectedBrand.toUpperCase()}</strong> | Probléma: <strong>${selectedIssue}</strong><br>
            Telefonszám: <strong>${phone}</strong>
          </span>
          <div style="margin-top:0.75rem;">
            <a href="tel:+36308947739" class="btn btn-primary" style="padding:0.4rem 0.9rem; font-size:0.85rem; min-height:36px;">
              Azonnali hívás: +36 30 894 7739
            </a>
          </div>
        `;
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = window.RollerI18n?.t('calc.form.submit') || 'Hibabejelentés elküldése';
      }
      calcForm.reset();
    }, 700);
  });

  // 8. Smooth Internal Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
});
