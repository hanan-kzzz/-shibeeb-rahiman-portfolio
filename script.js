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
(function initShowreel() {
  const frame = document.getElementById('showreelFrame');
  const video = document.getElementById('portfolioVideo');
  const overlay = document.getElementById('videoPosterOverlay');
  const loader = document.getElementById('videoLoadingIndicator');
  const ctrlPlayBtn = document.getElementById('ctrlPlayBtn');
  const progressWrap = document.getElementById('ctrlProgressWrap');
  const progressBar = document.getElementById('ctrlProgressBar');
  const timeDisplay = document.getElementById('ctrlTime');
  const muteBtn = document.getElementById('ctrlMuteBtn');
  const fsBtn = document.getElementById('ctrlFullscreenBtn');

  if (!frame || !video) return;

  const playIcon = ctrlPlayBtn ? ctrlPlayBtn.querySelector('.ctrl-icon-play') : null;
  const pauseIcon = ctrlPlayBtn ? ctrlPlayBtn.querySelector('.ctrl-icon-pause') : null;
  const mutedIcon = muteBtn ? muteBtn.querySelector('.ctrl-icon-muted') : null;
  const unmutedIcon = muteBtn ? muteBtn.querySelector('.ctrl-icon-unmuted') : null;

  let userPaused = false;
  let controlsTimeout = null;

  function formatTime(sec) {
    if (!sec || isNaN(sec)) return '00:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
  }

  function showLoader() {
    if (loader) loader.classList.add('is-visible');
  }

  function hideLoader() {
    if (loader) loader.classList.remove('is-visible');
  }

  function wakeControls() {
    frame.classList.add('controls-active');
    clearTimeout(controlsTimeout);
    if (!video.paused && !video.ended) {
      controlsTimeout = setTimeout(() => {
        frame.classList.remove('controls-active');
      }, 2500);
    }
  }

  frame.addEventListener('mousemove', wakeControls);
  frame.addEventListener('touchstart', wakeControls, { passive: true });

  function updatePlayPauseUI() {
    const isPlaying = !video.paused && !video.ended;
    if (isPlaying) {
      if (overlay) overlay.classList.add('is-hidden');
      frame.classList.add('is-playing');
      frame.classList.remove('is-paused');
      if (playIcon) playIcon.style.display = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
      if (ctrlPlayBtn) {
        ctrlPlayBtn.setAttribute('title', 'Pause Video');
        ctrlPlayBtn.setAttribute('aria-label', 'Pause Video');
      }
      wakeControls();
    } else {
      frame.classList.remove('is-playing');
      frame.classList.add('is-paused');
      frame.classList.add('controls-active');
      clearTimeout(controlsTimeout);
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
      if (ctrlPlayBtn) {
        ctrlPlayBtn.setAttribute('title', 'Resume Video');
        ctrlPlayBtn.setAttribute('aria-label', 'Resume Video');
      }
    }
  }

  function updateSoundUI() {
    if (!muteBtn) return;
    if (video.muted) {
      if (mutedIcon) mutedIcon.style.display = 'block';
      if (unmutedIcon) unmutedIcon.style.display = 'none';
      muteBtn.setAttribute('title', 'Click to Unmute');
      muteBtn.setAttribute('aria-label', 'Click to Unmute');
    } else {
      if (mutedIcon) mutedIcon.style.display = 'none';
      if (unmutedIcon) unmutedIcon.style.display = 'block';
      muteBtn.setAttribute('title', 'Click to Mute');
      muteBtn.setAttribute('aria-label', 'Click to Mute');
    }
  }

  function playVideo() {
    userPaused = false;
    const promise = video.play();
    if (promise !== undefined) {
      promise.then(() => {
        updatePlayPauseUI();
      }).catch(() => {
        video.muted = true;
        updateSoundUI();
        video.play().then(() => updatePlayPauseUI()).catch(() => {});
      });
    }
  }

  function pauseVideo() {
    video.pause();
    updatePlayPauseUI();
  }

  function togglePlay(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    if (video.paused || video.ended) {
      userPaused = false;
      playVideo();
    } else {
      userPaused = true;
      pauseVideo();
    }
  }

  // Loading and buffer events
  video.addEventListener('loadstart', () => {
    if (video.readyState < 3) showLoader();
  });
  video.addEventListener('waiting', showLoader);
  video.addEventListener('seeking', showLoader);
  video.addEventListener('canplay', hideLoader);
  video.addEventListener('canplaythrough', hideLoader);
  video.addEventListener('playing', () => {
    hideLoader();
    updatePlayPauseUI();
  });
  video.addEventListener('pause', () => {
    hideLoader();
    updatePlayPauseUI();
  });
  video.addEventListener('seeked', hideLoader);
  video.addEventListener('error', hideLoader);

  video.addEventListener('play', updatePlayPauseUI);
  video.addEventListener('ended', () => {
    userPaused = false;
    updatePlayPauseUI();
  });

  video.addEventListener('volumechange', updateSoundUI);

  if (ctrlPlayBtn) ctrlPlayBtn.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);

  // Time & Progress Bar
  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    if (progressBar) progressBar.style.width = pct + '%';
    if (timeDisplay) timeDisplay.textContent = formatTime(video.currentTime) + ' / ' + formatTime(video.duration);
  });

  // Initialize video timeline display and auto-start playback
  function initializeVideoPlayback() {
    const dur = video.duration || 46.41;
    const cur = video.currentTime || 0;
    if (timeDisplay) {
      timeDisplay.textContent = formatTime(cur) + ' / ' + formatTime(dur);
    }
    if (progressBar && dur > 0) {
      progressBar.style.width = ((cur / dur) * 100) + '%';
    }
    updateSoundUI();
    updatePlayPauseUI();

    // Auto-start playback when metadata is ready
    if (!userPaused && video.paused) {
      playVideo();
    }
  }

  video.addEventListener('loadedmetadata', initializeVideoPlayback);
  video.addEventListener('canplay', () => {
    if (!userPaused && video.paused) {
      playVideo();
    }
  });
  if (video.readyState >= 1) initializeVideoPlayback();

  // Autoplay as soon as the showreel scrolls into view
  if ('IntersectionObserver' in window) {
    const reelObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!userPaused && video.paused) {
            playVideo();
          }
        }
      });
    }, {
      root: null,
      threshold: 0.15
    });
    reelObserver.observe(frame);
  }

  // Backup: First user touch or scroll anywhere starts playback if blocked by browser policy
  const triggerAutoplayOnGesture = () => {
    if (!userPaused && video.paused) {
      playVideo();
    }
    ['touchstart', 'scroll', 'click', 'keydown'].forEach(evt => {
      window.removeEventListener(evt, triggerAutoplayOnGesture);
    });
  };
  ['touchstart', 'scroll', 'click', 'keydown'].forEach(evt => {
    window.addEventListener(evt, triggerAutoplayOnGesture, { passive: true, once: true });
  });

  // Progress timeline seeking
  if (progressWrap) {
    progressWrap.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = progressWrap.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (video.duration) {
        video.currentTime = pos * video.duration;
      }
    });
  }

  // Sound toggle
  if (muteBtn) {
    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      updateSoundUI();
    });
  }

  // Fullscreen toggle
  if (fsBtn) {
    fsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        if (frame.requestFullscreen) {
          frame.requestFullscreen();
        } else if (frame.webkitRequestFullscreen) {
          frame.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  // Smooth scroll directly to center the showreel frame under the navbar
  function scrollToReelFrame() {
    const target = document.getElementById('showreelFrame') || document.getElementById('showreel');
    if (target) {
      const navContainer = document.querySelector('.pill-nav-container');
      const navOffset = navContainer ? (navContainer.offsetHeight + 18) : 80;
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    }
  }

  // Navigation click trigger for "Reel"
  document.querySelectorAll('a[href="#showreel"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToReelFrame();
      if (!userPaused && video.paused) {
        playVideo();
      }
    });
  });

  if (window.location.hash === '#showreel') {
    setTimeout(() => {
      scrollToReelFrame();
      if (!userPaused && video.paused) {
        playVideo();
      }
    }, 400);
  }

  // Auto-play immediately on script execution
  video.muted = true;
  updateSoundUI();
  updatePlayPauseUI();
  playVideo();
})();

/* ========================================================
   PORTFOLIO GALLERY FILTERING & FULLSCREEN LIGHTBOX
   ======================================================== */
(function initPortfolioGallery() {
  const filterPills = document.querySelectorAll('.work-filter-pill');
  const cards = document.querySelectorAll('.portfolio-card');
  const lightbox = document.getElementById('projectLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
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
    title: card.getAttribute('data-title') || card.querySelector('h3')?.textContent,
    desc: card.getAttribute('data-desc') || card.querySelector('p')?.textContent,
    badge: card.getAttribute('data-badge') || 'PROJECT',
  }));

  function openLightbox(index) {
    currentIndex = (index + projectData.length) % projectData.length;
    const item = projectData[currentIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.title;
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
