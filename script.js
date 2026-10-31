// Clean URLs: Seamlessly remove .html extension from browser address bar
(function cleanUrlBar() {
  if (typeof window !== 'undefined' && window.location && window.history && window.history.replaceState) {
    const pathname = window.location.pathname;
    if (pathname.endsWith('.html')) {
      let clean = pathname.replace(/\.html$/, '');
      if (clean.endsWith('/index')) clean = clean.slice(0, -5) || '/';
      window.history.replaceState(null, '', clean + window.location.search + window.location.hash);
    }
  }
})();

const progress=document.getElementById('progress'),glow=document.querySelector('.pointer-glow');function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%'}window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
// Pill Navbar Mobile Toggle, Backdrop & Dropdown
const pillToggle = document.getElementById('pillMenuToggle');
const pillDropdown = document.getElementById('pillMobileDropdown');
const pillBackdrop = document.getElementById('pillNavBackdrop');
const pillEmailBtn = document.getElementById('pillEmailBtn');
const pillEmailText = document.getElementById('pillEmailText');

if (pillToggle && pillDropdown) {
  function closeMobileMenu() {
    pillDropdown.classList.remove('open');
    pillToggle.classList.remove('open');
    if (pillBackdrop) pillBackdrop.classList.remove('open');
    pillToggle.setAttribute('aria-expanded', 'false');
  }

  pillToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = pillDropdown.classList.toggle('open');
    pillToggle.classList.toggle('open', isOpen);
    if (pillBackdrop) pillBackdrop.classList.toggle('open', isOpen);
    pillToggle.setAttribute('aria-expanded', String(isOpen));
  });

  if (pillBackdrop) {
    pillBackdrop.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  pillDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (pillDropdown.classList.contains('open') &&
        !pillDropdown.contains(e.target) &&
        !pillToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pillDropdown.classList.contains('open')) {
      closeMobileMenu();
    }
  });
}

// Pill "Let's talk" CTA button click
if (pillEmailBtn) {
  pillEmailBtn.addEventListener('click', () => {
    if (typeof closeMobileMenu === 'function') {
      closeMobileMenu();
    }
  });
}

// Scrollspy for Pill Nav Links
const navLinks = document.querySelectorAll('.pill-nav-item, .mobile-nav-link');
const trackedSections = [
  { id: 'top', linkText: 'Home' },
  { id: 'work', linkText: 'Work' },
  { id: 'showreel', linkText: 'Reel' },
  { id: 'projects', linkText: 'Projects' },
  { id: 'approach', linkText: 'Approach' },
  { id: 'about', linkText: 'About' },
  { id: 'contact', linkText: 'Contact' }
];

function updateActiveNav() {
  const scrollPos = window.scrollY + 180;
  let currentId = 'top';

  for (const s of trackedSections) {
    const el = document.getElementById(s.id);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = s.id;
      }
    }
  }

  // Ensure contact is active if scrolled to the very bottom
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
    currentId = 'contact';
  }

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${currentId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
const revealIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealIO.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});document.querySelectorAll('.reveal').forEach(el=>revealIO.observe(el));const sectionIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');sectionIO.unobserve(e.target)}}),{threshold:.4});document.querySelectorAll('.section-kicker').forEach(el=>sectionIO.observe(el));
const portraitCutout = document.querySelector('.folio-portrait-img, .hero-portrait-cutout');
if (portraitCutout && matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    portraitCutout.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
  }, { passive: true });
}

// Floating Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
  function handleBackToTopVisibility() {
    if (window.scrollY > 250) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
  window.addEventListener('resize', handleBackToTopVisibility, { passive: true });
  // Initial check
  handleBackToTopVisibility();

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

document.querySelectorAll('.art').forEach(art=>{art.addEventListener('pointermove',e=>{if(matchMedia('(pointer:fine)').matches){const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;art.style.transform=`perspective(800px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-4px)`}});art.addEventListener('pointerleave',()=>art.style.removeProperty('transform'))});
const stage = document.getElementById('playgroundStage');
const shapes = [...document.querySelectorAll('.play-shape')];
let dragged = null, offsetX = 0, offsetY = 0;

const defaultLogoPositions = [
  ['8%', '16%', 'auto', 'auto', 'rotate(-8deg)', 'floatLogo1 6.5s ease-in-out infinite alternate'],
  ['82%', '14%', 'auto', 'auto', 'rotate(10deg)', 'floatLogo2 7s 0.8s ease-in-out infinite alternate'],
  ['14%', '60%', 'auto', 'auto', 'rotate(12deg)', 'floatLogo3 6.8s 1.5s ease-in-out infinite alternate'],
  ['64%', '12%', 'auto', 'auto', 'rotate(6deg)', 'floatLogo6 7.2s 0.4s ease-in-out infinite alternate'],
  ['78%', '58%', 'auto', 'auto', 'rotate(-10deg)', 'floatLogo4 6.6s 2s ease-in-out infinite alternate'],
  ['32%', '66%', 'auto', 'auto', 'rotate(-5deg)', 'floatLogo5 7.4s 1.2s ease-in-out infinite alternate']
];

shapes.forEach(shape => {
  shape.addEventListener('pointerdown', e => {
    dragged = shape;
    const r = shape.getBoundingClientRect();
    offsetX = e.clientX - r.left;
    offsetY = e.clientY - r.top;
    shape.setPointerCapture(e.pointerId);
    shape.style.transition = 'none';
    shape.style.animation = 'none';
    shape.style.zIndex = '12';
  });

  shape.addEventListener('pointermove', e => {
    if (dragged !== shape) return;
    const r = stage.getBoundingClientRect();
    let x = e.clientX - r.left - offsetX;
    let y = e.clientY - r.top - offsetY;
    x = Math.max(0, Math.min(r.width - shape.offsetWidth, x));
    y = Math.max(0, Math.min(r.height - shape.offsetHeight, y));
    shape.style.left = (x / r.width * 100) + '%';
    shape.style.top = (y / r.height * 100) + '%';
    shape.style.right = 'auto';
    shape.style.bottom = 'auto';
  });

  const end = () => {
    if (dragged === shape) {
      dragged = null;
      shape.style.transition = 'box-shadow .25s, transform .25s';
      shape.style.zIndex = '3';
      const playMsg = document.getElementById('playMessage');
      if (playMsg) playMsg.innerHTML = 'NICE MOVE.<br><span>MAKE IT YOURS.</span>';
    }
  };

  shape.addEventListener('pointerup', end);
  shape.addEventListener('pointercancel', end);
});

const scatterBtn = document.getElementById('scatterBtn');
if (scatterBtn) {
  scatterBtn.addEventListener('click', () => {
    shapes.forEach(s => {
      s.style.animation = 'none';
      s.style.transition = 'left 0.4s ease, top 0.4s ease, transform 0.4s ease';
      s.style.left = (6 + Math.random() * 78) + '%';
      s.style.top = (10 + Math.random() * 62) + '%';
      s.style.right = 'auto';
      s.style.bottom = 'auto';
      s.style.transform = `rotate(${Math.round(Math.random() * 50 - 25)}deg)`;
    });
    const msg = document.getElementById('playMessage');
    if (msg) msg.innerHTML = 'A LITTLE CHAOS.<br><span>LOOKS GOOD.</span>';
  });
}

const resetBtn = document.getElementById('resetBtn');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    defaultLogoPositions.forEach((p, i) => {
      const s = shapes[i];
      if (s) {
        s.style.transition = 'left 0.5s ease, top 0.5s ease, transform 0.5s ease';
        [s.style.left, s.style.top, s.style.right, s.style.bottom, s.style.transform] = p.slice(0, 5);
        setTimeout(() => {
          if (p[5]) s.style.animation = p[5];
        }, 500);
      }
    });
    const msg = document.getElementById('playMessage');
    if (msg) msg.innerHTML = 'NOTHING IS TOO SERIOUS.<br><span>MOVE SOMETHING.</span>';
  });
}
const emailCopy = document.getElementById('emailCopy');
const copyFeedback = document.getElementById('copyFeedback');
if (emailCopy) {
  emailCopy.addEventListener('click', async e => {
    e.preventDefault();
    const email = 'shibeebrahman@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      if (copyFeedback) copyFeedback.textContent = 'COPIED. TALK SOON.';
      const action = emailCopy.querySelector('.email-action');
      if (action) {
        action.textContent = 'COPIED ✓';
        setTimeout(() => action.textContent = 'COPY EMAIL ↗', 2200);
      }
    } catch (err) {
      window.location.href = 'mailto:' + email;
      if (copyFeedback) copyFeedback.textContent = 'OPENING YOUR EMAIL APP…';
    }
  });
}

// Contact Pill Buttons (Copy feedback on click)
const contactPillButtons = document.querySelectorAll('.contact-pill-button');
contactPillButtons.forEach(btn => {
  btn.addEventListener('click', async () => {
    const email = 'shibeebrahman@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      if (copyFeedback) {
        copyFeedback.textContent = 'COPIED EMAIL TO CLIPBOARD · OPENING MAIL APP…';
        setTimeout(() => {
          if (copyFeedback && copyFeedback.textContent === 'COPIED EMAIL TO CLIPBOARD · OPENING MAIL APP…') {
            copyFeedback.textContent = '';
          }
        }, 3500);
      }
    } catch (_) {
      // Let mailto link proceed naturally
    }
  });
});

// Full-screen scroll to #contact
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      e.preventDefault();
      if (typeof closeMobileMenu === 'function') {
        closeMobileMenu();
      }
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '#contact');
      }
    }
  });
});


/* ========================================================
   PORTFOLIO SHOWREEL VIDEO CONTROLLER

/* ========================================================
   PORTFOLIO SHOWREEL AUTOPLAY CONTROLLER
   ======================================================== */
(function initHorizontalReelGallery() {
  const container = document.getElementById('reelGalleryContainer');
  const viewport = document.getElementById('reelTrackViewport');
  const track = document.getElementById('reelTrack');
  const panels = document.querySelectorAll('.reel-panel');
  const prevBtn = document.getElementById('reelPrevBtn');
  const nextBtn = document.getElementById('reelNextBtn');
  const currentIndexEl = document.getElementById('reelCurrentIndex');
  const progressFill = document.getElementById('reelProgressFill');
  const pills = document.querySelectorAll('.reel-pill-btn');

  // Theater modal elements
  const theaterModal = document.getElementById('reelTheaterModal');
  const theaterVideo = document.getElementById('reelTheaterVideo');
  const theaterClose = document.getElementById('reelTheaterClose');
  const theaterBackdrop = document.getElementById('reelTheaterBackdrop');
  const theaterTag = document.getElementById('reelTheaterTag');
  const theaterTitle = document.getElementById('reelTheaterTitle');

  if (!viewport || !panels.length) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let isDragging = false;
  let currentActiveIndex = 0;

  // 1. Smooth Mouse Wheel to Horizontal Scroll
  viewport.addEventListener('wheel', (e) => {
    // Only hijack if dominant vertical wheel on the gallery
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const atStart = viewport.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = viewport.scrollLeft >= maxScroll - 2 && e.deltaY > 0;

      if (!atStart && !atEnd) {
        e.preventDefault();
        viewport.scrollLeft += e.deltaY * 1.15;
      }
    }
  }, { passive: false });

  // 2. Click-and-Drag Momentum Scrolling
  viewport.addEventListener('mousedown', (e) => {
    if (e.target.closest('.reel-action-btn') || e.target.closest('.reel-center-action')) return;
    isDown = true;
    isDragging = false;
    viewport.classList.add('is-dragging');
    startX = e.pageX - viewport.offsetLeft;
    scrollLeft = viewport.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    viewport.classList.remove('is-dragging');
    setTimeout(() => { isDragging = false; }, 60);
  });

  viewport.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 4) isDragging = true;
    viewport.scrollLeft = scrollLeft - walk;
  });

  // 3. Parallax Media Shift & Active Panel Detection on Scroll
  function updateParallax() {
    const vpRect = viewport.getBoundingClientRect();
    const vpCenter = vpRect.left + vpRect.width / 2;
    let closestIndex = 0;
    let minDiff = Infinity;

    panels.forEach((panel, idx) => {
      const pRect = panel.getBoundingClientRect();
      const pCenter = pRect.left + pRect.width / 2;
      const diff = Math.abs(pCenter - vpCenter);

      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }

      // Parallax shift calculation for the video element inside
      const progress = (pCenter - vpCenter) / (vpRect.width || 1);
      const video = panel.querySelector('.reel-video');
      if (video && !panel.classList.contains('is-vertical')) {
        const offset = Math.max(-60, Math.min(60, progress * -45));
        video.style.transform = `translate3d(${offset.toFixed(1)}px, 0, 0) scale(1.08)`;
      }
    });

    currentActiveIndex = closestIndex;

    // Update active panel class and play state
    panels.forEach((panel, idx) => {
      const isActive = idx === closestIndex;
      panel.classList.toggle('is-active', isActive);

      const video = panel.querySelector('.reel-video');
      if (video) {
        if (isActive) {
          if (video.paused && !video.dataset.userPaused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      }
    });

    // Update Counter & HUD
    if (currentIndexEl) {
      currentIndexEl.textContent = String(closestIndex + 1).padStart(2, '0');
    }

    // Update Progress Fill
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const scrollPct = maxScroll > 0 ? (viewport.scrollLeft / maxScroll) : (closestIndex / (panels.length - 1));
    if (progressFill) {
      progressFill.style.width = `${Math.max(12, Math.min(100, (scrollPct * 88) + 12))}%`;
    }

    // Update Pills
    pills.forEach((pill, idx) => {
      pill.classList.toggle('is-active', idx === closestIndex);
    });
  }

  let rAF = null;
  viewport.addEventListener('scroll', () => {
    if (rAF) cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(updateParallax);
  }, { passive: true });

  // 4. Smooth Scrolling to Panel
  function scrollToPanel(index) {
    if (index < 0 || index >= panels.length) return;
    const targetPanel = panels[index];
    const vpWidth = viewport.clientWidth;
    const panelWidth = targetPanel.offsetWidth;
    const targetScroll = targetPanel.offsetLeft - (vpWidth / 2) + (panelWidth / 2);
    
    viewport.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: 'smooth'
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => scrollToPanel(currentActiveIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => scrollToPanel(currentActiveIndex + 1));
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.getAttribute('data-index'), 10);
      scrollToPanel(idx);
    });
  });

  // 5. Card Hover & Sound Controls
  panels.forEach(panel => {
    const video = panel.querySelector('.reel-video');
    const soundBtn = panel.querySelector('.reel-sound-toggle');
    const soundText = soundBtn ? soundBtn.querySelector('.sound-text') : null;
    const iconOff = soundBtn ? soundBtn.querySelector('.icon-sound-off') : null;
    const iconOn = soundBtn ? soundBtn.querySelector('.icon-sound-on') : null;

    panel.addEventListener('mouseenter', () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    });

    if (soundBtn && video) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (video.muted) {
          // Mute all other videos
          document.querySelectorAll('.reel-video').forEach(v => {
            if (v !== video) {
              v.muted = true;
              const p = v.closest('.reel-panel');
              if (p) {
                const s = p.querySelector('.reel-sound-toggle');
                if (s) {
                  s.querySelector('.icon-sound-off').style.display = 'inline-block';
                  s.querySelector('.icon-sound-on').style.display = 'none';
                  s.querySelector('.sound-text').textContent = 'SOUND';
                }
              }
            }
          });

          video.muted = false;
          iconOff.style.display = 'none';
          iconOn.style.display = 'inline-block';
          soundText.textContent = 'MUTED';
          video.play().catch(() => {});
        } else {
          video.muted = true;
          iconOff.style.display = 'inline-block';
          iconOn.style.display = 'none';
          soundText.textContent = 'SOUND';
        }
      });
    }

    // Play Trigger / Theater Open
    const centerTrigger = panel.querySelector('.reel-center-action');
    const expandBtn = panel.querySelector('.reel-fullscreen-trigger');

    function openTheater() {
      if (isDragging) return;
      const src = panel.getAttribute('data-video-src');
      const title = panel.getAttribute('data-title');
      const tag = panel.getAttribute('data-tag');

      if (!theaterModal || !theaterVideo) return;

      theaterVideo.src = src;
      theaterVideo.muted = false;
      if (theaterTag) theaterTag.textContent = tag;
      if (theaterTitle) theaterTitle.textContent = title;

      theaterModal.classList.add('is-open');
      theaterModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Pause all gallery previews
      document.querySelectorAll('.reel-video').forEach(v => v.pause());

      theaterVideo.play().catch(() => {});
    }

    if (centerTrigger) centerTrigger.addEventListener('click', openTheater);
    if (expandBtn) expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openTheater();
    });
  });

  // 6. Theater Modal Close & Keyboard Navigation
  function closeTheater() {
    if (!theaterModal || !theaterVideo) return;
    theaterVideo.pause();
    theaterVideo.src = '';
    theaterModal.classList.remove('is-open');
    theaterModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Resume active panel video
    const activePanel = panels[currentActiveIndex];
    if (activePanel) {
      const v = activePanel.querySelector('.reel-video');
      if (v) v.play().catch(() => {});
    }
  }

  if (theaterClose) theaterClose.addEventListener('click', closeTheater);
  if (theaterBackdrop) theaterBackdrop.addEventListener('click', closeTheater);

  window.addEventListener('keydown', (e) => {
    if (theaterModal && theaterModal.classList.contains('is-open')) {
      if (e.key === 'Escape') closeTheater();
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        if (theaterVideo.paused) theaterVideo.play();
        else theaterVideo.pause();
      }
    }
  });

  // Handle header nav anchor click for #showreel
  document.querySelectorAll('a[href="#showreel"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const section = document.getElementById('showreel');
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => scrollToPanel(0), 400);
      }
    });
  });

  // Initial trigger
  updateParallax();
  setTimeout(updateParallax, 200);
})();

/* ========================================================
   PORTFOLIO GALLERY FILTERING & FULLSCREEN LIGHTBOX
   ======================================================== */
(function initPortfolioGallery() {
  const filterPills = document.querySelectorAll('.work-filter-pill');
  const cards = document.querySelectorAll('.portfolio-card');
  const lightbox = document.getElementById('projectLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxBadge = document.getElementById('lightboxBadge');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const backdrop = document.getElementById('lightboxBackdrop');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!cards.length) return;

  // 1. Category Filtering
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-filter');

      cards.forEach(card => {
        const itemCat = card.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Lightbox Modal
  if (!lightbox) return;

  let currentIndex = 0;
  const projectData = Array.from(cards).map(card => ({
    src: card.getAttribute('data-src') || card.querySelector('img')?.src,
    videoSrc: card.getAttribute('data-video-src') || null,
    title: card.getAttribute('data-title') || card.querySelector('h3')?.textContent,
    desc: card.getAttribute('data-desc') || card.querySelector('p')?.textContent,
    badge: card.getAttribute('data-badge') || 'PROJECT',
  }));

  function openLightbox(index) {
    currentIndex = (index + projectData.length) % projectData.length;
    const item = projectData[currentIndex];
    if (!item) return;

    if (item.videoSrc && lightboxVideo) {
      if (lightboxImg) lightboxImg.style.display = 'none';
      lightboxVideo.style.display = 'block';
      lightboxVideo.src = item.videoSrc;
      lightboxVideo.play().catch(() => {});
    } else {
      if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.src = '';
        lightboxVideo.style.display = 'none';
      }
      if (lightboxImg) {
        lightboxImg.style.display = 'block';
        lightboxImg.src = item.src;
        lightboxImg.alt = item.title;
      }
    }

    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
    if (lightboxBadge) lightboxBadge.textContent = item.badge;
    if (lightboxCounter) {
      const curNum = (currentIndex + 1).toString().padStart(2, '0');
      const totalNum = projectData.length.toString().padStart(2, '0');
      lightboxCounter.textContent = `${curNum} / ${totalNum}`;
    }

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
    }
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showNext() {
    openLightbox(currentIndex + 1);
  }

  function showPrev() {
    openLightbox(currentIndex - 1);
  }

  // Open on card click
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  // Controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
})();


// ==========================================================================
// Service Worker Registration & Live Network Offline Detector
// ==========================================================================
(function initServiceWorkerAndNetwork() {
  // Register Service Worker for offline support
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .catch(() => {
          navigator.serviceWorker.register('sw.js').catch(() => {});
        });
    });
  }

  // Floating Offline Network Banner
  function createNetworkBanner() {
    let banner = document.getElementById('offlineNetworkBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'offlineNetworkBanner';
      banner.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(120px);
        background: rgba(22, 22, 19, 0.94);
        border: 1px solid #f59e0b;
        color: #fde68a;
        padding: 10px 22px;
        border-radius: 999px;
        font-family: 'DM Mono', monospace;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        backdrop-filter: blur(12px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
      `;
      banner.innerHTML = `
        <span style="width:7px; height:7px; border-radius:50%; background:#f59e0b; box-shadow:0 0 10px #f59e0b; display:inline-block;"></span>
        <span id="offlineBannerText">Network Connection Lost • Offline</span>
        <a href="offline.html" style="color:#ffffff; text-decoration:underline; margin-left:4px;">Offline Canvas ↗</a>
      `;
      document.body.appendChild(banner);
    }
    return banner;
  }

  window.addEventListener('offline', () => {
    const banner = createNetworkBanner();
    banner.style.borderColor = '#f59e0b';
    banner.querySelector('span').style.background = '#f59e0b';
    document.getElementById('offlineBannerText').textContent = 'Network Connection Lost • Offline';
    banner.style.transform = 'translateX(-50%) translateY(0)';
  });

  window.addEventListener('online', () => {
    const banner = createNetworkBanner();
    banner.style.borderColor = '#10b981';
    banner.querySelector('span').style.background = '#10b981';
    document.getElementById('offlineBannerText').textContent = '✓ Back Online! Reconnected';
    setTimeout(() => {
      banner.style.transform = 'translateX(-50%) translateY(120px)';
    }, 2800);
  });
})();

// ============================================================
// ESPACEX SPACE-LAUNCH PRELOADER ENGINE
// ============================================================
(function initEspaceXPreloader() {
  const preloader = document.getElementById('sitePreloader');
  if (!preloader) return;

  const counterEl = document.getElementById('espaceCounter');
  const barFill = document.getElementById('espaceProgressFill');
  const statusText = document.getElementById('espaceStatusText');
  const skipBtn = document.getElementById('espaceSkipBtn');
  const canvas = document.getElementById('espaceStars');
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  htmlEl.classList.add('is-loading');
  bodyEl.classList.add('is-loading');

  // Starfield Canvas Animation
  let starsAnimId = null;
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const stars = [];
    const STAR_COUNT = Math.min(140, Math.floor((width * height) / 9000));
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.8 + 0.3
      });
    }

    function renderStars() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 210, 255, ${s.alpha})`;
        ctx.fill();

        // Drift downward giving feeling of rocket climbing
        s.y += s.speed;
        if (s.y > height) {
          s.y = 0;
          s.x = Math.random() * width;
        }
      }
      starsAnimId = requestAnimationFrame(renderStars);
    }
    renderStars();
  }

  // Realistic Space Mission Progress Logic
  let currentPercent = 0;
  let targetPercent = 14;
  let isWindowLoaded = false;
  let isExiting = false;

  const statusPhases = [
    { max: 25, text: "INITIALIZING AVIONICS & GRAPHICS ENGINES..." },
    { max: 55, text: "LOADING 43+ CLIENT CAMPAIGNS & MOTION REELS..." },
    { max: 80, text: "SYNCHRONIZING 3D ASSETS & BRAND SYSTEMS..." },
    { max: 99, text: "ALL SYSTEMS NOMINAL • PREPARING ORBITAL INSERTION..." },
    { max: 100, text: "LAUNCH VECTOR CONFIRMED • WELCOME TO SHIBEEB.STUDIO" }
  ];

  function getStatusText(percent) {
    for (let phase of statusPhases) {
      if (percent <= phase.max) return phase.text;
    }
    return statusPhases[statusPhases.length - 1].text;
  }

  function dismissPreloader() {
    if (isExiting) return;
    isExiting = true;

    if (counterEl) counterEl.textContent = '100%';
    if (barFill) barFill.style.width = '100%';
    if (statusText) statusText.textContent = "LAUNCH VECTOR CONFIRMED • WELCOME TO SHIBEEB.STUDIO";

    // 1. Rocket blast-off overdrive
    preloader.classList.add('is-launching');

    // 2. Curtain slide up after 380ms
    setTimeout(() => {
      preloader.classList.add('is-loaded');
      htmlEl.classList.remove('is-loading');
      bodyEl.classList.remove('is-loading');

      // 3. Remove DOM elements and stop star loop
      setTimeout(() => {
        if (starsAnimId) cancelAnimationFrame(starsAnimId);
        preloader.setAttribute('aria-hidden', 'true');
        preloader.style.display = 'none';
      }, 950);
    }, 380);
  }

  function updateProgress() {
    if (currentPercent < targetPercent) {
      const step = Math.max(1, Math.ceil((targetPercent - currentPercent) * 0.16));
      currentPercent += step;
      if (currentPercent > targetPercent) currentPercent = targetPercent;

      const formatted = (currentPercent < 10 ? '0' : '') + currentPercent + '%';
      if (counterEl) counterEl.textContent = formatted;
      if (barFill) barFill.style.width = currentPercent + '%';
      if (statusText) statusText.textContent = getStatusText(currentPercent);
    }

    if (currentPercent < 100) {
      requestAnimationFrame(updateProgress);
    } else {
      setTimeout(dismissPreloader, 180);
    }
  }

  requestAnimationFrame(updateProgress);

  // Simulated progressive load
  const stepInterval = setInterval(() => {
    if (!isWindowLoaded) {
      if (targetPercent < 42) {
        targetPercent += Math.floor(Math.random() * 12) + 7;
      } else if (targetPercent < 76) {
        targetPercent += Math.floor(Math.random() * 10) + 5;
      } else if (targetPercent < 94) {
        targetPercent += Math.floor(Math.random() * 4) + 2;
      }
    }
  }, 75);

  function finish() {
    if (isWindowLoaded) return;
    isWindowLoaded = true;
    clearInterval(stepInterval);
    targetPercent = 100;
  }

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish);
  }

  // Safety timer: Never block more than 2 seconds
  setTimeout(finish, 2000);

  // Skip button click handler
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      clearInterval(stepInterval);
      dismissPreloader();
    });
  }
})();
