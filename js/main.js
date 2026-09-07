/**
 * HAVEN & HEIR - Luxury Home Staging & Interior Styling Template
 * Main JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initStickyNavbar();
  initMobileMenu();
  initScrollAnimations();
  initStatsCounter();
  initModals();
  initScrollToTop();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode with localStorage)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('haven_theme') || localStorage.getItem('aura_theme') || 'light';
  applyTheme(savedTheme);

  document.querySelectorAll('.theme-toggle-btn, #themeToggleBtn, #navThemeToggle, #mobileThemeToggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('haven_theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-toggle-btn, #themeToggleBtn, #navThemeToggle, #mobileThemeToggle').forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
        btn.setAttribute('title', 'Switch to Light Mode');
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        icon.className = 'fa-solid fa-moon';
        btn.setAttribute('title', 'Switch to Dark Mode');
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    }
  });
}

/* ==========================================================================
   2. RTL / LTR SWITCHER (Bidirectional Layout with localStorage)
   ========================================================================== */
function initDirection() {
  const savedDir = localStorage.getItem('haven_dir') || localStorage.getItem('aura_dir') || 'ltr';
  applyDirection(savedDir);

  document.querySelectorAll('.rtl-toggle-btn, #rtlToggleBtn, #navRtlToggle, #mobileRtlToggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(newDir);
      localStorage.setItem('haven_dir', newDir);
    });
  });
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  document.querySelectorAll('.rtl-toggle-btn, #rtlToggleBtn, #navRtlToggle, #mobileRtlToggle').forEach(btn => {
    btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
    btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
    const span = btn.querySelector('span');
    if (span) {
      span.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    }
  });
}

/* ==========================================================================
   3. STICKY NAVBAR (Transparent on Hero -> Solid on Scroll)
   ========================================================================== */
function initStickyNavbar() {
  const navbar = document.querySelector('.site-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ==========================================================================
   4. MOBILE NAVIGATION DRAWER & DROPDOWNS
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Mobile Dropdown Accordion
  const dropdownItems = navMenu.querySelectorAll('.nav-item.dropdown');
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    if (link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });

  // Close mobile menu on clicking any navigation link
  const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 991) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

/* ==========================================================================
   5. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-fade');
  if (!revealElements.length || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. ANIMATED STATISTICS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const counterElements = document.querySelectorAll('.stat-number[data-target]');
  if (!counterElements.length) return;

  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      el.textContent = currentVal;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(updateCount);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(counter => observer.observe(counter));
  } else {
    counterElements.forEach(animateCount);
  }
}

/* ==========================================================================
   7. SERVICES DETAIL MODAL CONTROLLER
   ========================================================================== */
const servicesData = {
  vacant: {
    title: "Vacant Home Staging",
    category: "Full Property Transformation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Our comprehensive vacant staging service turns cold, empty spaces into warm, emotionally captivating dream homes. We curate designer luxury furniture, high-end artwork, custom lighting, and bespoke accessories specifically tailored to highlight the architecture and layout of your property.",
    features: [
      "Custom whole-home interior curation",
      "Full living, dining, primary suite & patio setups",
      "Professional delivery, placement & de-staging",
      "Tailored to target high-intent home buyers",
      "Optimized room flow & spatial perspective",
      "Includes 60-day rental period with extensions"
    ]
  },
  rental: {
    title: "Furniture & Decor Rental",
    category: "Short & Long-Term Packages",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description: "Access our vast, private warehouse collection of designer sofas, dining suites, accent chairs, luxury rugs, lamps, and statement decor pieces. Available for property viewings, open houses, model homes, and film or editorial productions.",
    features: [
      "Access to luxury designer furniture collections",
      "Flexible weekly and monthly lease options",
      "White-glove delivery, assembly, and pick-up",
      "Damage protection coverage included",
      "Trend-aligned neutral palettes and luxe finishes",
      "Discounts for multi-month staging campaigns"
    ]
  },
  interior: {
    title: "Interior Styling & Redesign",
    category: "Occupied Homes & Upgrades",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    description: "Designed for occupied properties or homeowners looking to elevate their living atmosphere. We optimize existing layouts, introduce tasteful accent pieces, revamp color schemes, and reorganize spaces to maximize beauty, light, and functional appeal.",
    features: [
      "On-site spatial audit and layout optimization",
      "Artful integration of client pieces with curated accents",
      "Color theory and lighting design enhancements",
      "Decluttering and strategic focal point creation",
      "Soft furnishings, pillows, throws & vignette styling",
      "Comprehensive room-by-room styling guide"
    ]
  },
  photography: {
    title: "Photography-Ready Styling",
    category: "MLS & Media Editorial Staging",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    description: "Homes that look exquisite on camera sell faster and for higher prices. Our stylists prepare every angle specifically for real estate photographers, videographers, and 3D virtual tour cameras, ensuring every shot captures peak light and symmetry.",
    features: [
      "Angle-specific composition and sightline framing",
      "Natural and ambient lighting optimization",
      "Micro-styling of kitchen counters, vanity tops & shelves",
      "Bed dressing and luxury pillow fluffing techniques",
      "Stylist on-site assistance during photo shoots",
      "High-resolution digital presentation ready"
    ]
  },
  consultation: {
    title: "Property Staging Consultation",
    category: "Expert Architectural Review",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "An intensive 2-hour walk-through consultation tailored for homeowners, realtors, and developers. Receive an actionable, room-by-room staging report outlining high-ROI modifications, paint recommendations, repairs, and furniture layout plans.",
    features: [
      "Comprehensive 2-hour property walk-through",
      "Detailed written staging action plan & checklist",
      "Paint color swatches and fixture upgrade suggestions",
      "Curb appeal and entryway enhancement advice",
      "Budget-friendly staging recommendations",
      "Vendor recommendations for painting and repairs"
    ]
  },
  openhouse: {
    title: "Open House & Event Styling",
    category: "VIP Property Launches",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    description: "Create an unforgettable sensory experience for brokers and prospective buyers during open houses and VIP preview events. We incorporate luxury floral arrangements, ambient scents, curated background music playlists, and bar vignettes.",
    features: [
      "Fresh luxury floral design & botanical accents",
      "Bespoke champagne bar and kitchen styling setups",
      "Aromatherapy and ambient luxury scent diffusers",
      "Outdoor terrace and lounge styling",
      "Day-of-event styling touch-ups and presentation",
      "Evening twilight lighting coordination"
    ]
  }
};

function initModals() {
  const modalBackdrop = document.getElementById('serviceModalBackdrop');
  if (!modalBackdrop) return;

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');

  const openModal = (serviceKey) => {
    const data = servicesData[serviceKey];
    if (!data) return;

    if (modalImg) modalImg.src = data.image;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalDesc) modalDesc.textContent = data.description;
    
    if (modalFeatures) {
      modalFeatures.innerHTML = data.features.map(f => `
        <div class="modal-feature-item">
          <i class="fa-solid fa-circle-check"></i>
          <span>${f}</span>
        </div>
      `).join('');
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-service-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = trigger.getAttribute('data-service-modal');
      openModal(serviceKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   8. BACK TO TOP BUTTON
   ========================================================================== */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
