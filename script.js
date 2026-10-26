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
   ======================================================== */
(function initShowreel() {
  const frame = document.getElementById('showreelFrame');
  const video = document.getElementById('portfolioVideo');
  const overlay = document.getElementById('videoPosterOverlay');
  const playBtn = document.getElementById('videoPlayBtn');
  const ctrlPlayBtn = document.getElementById('ctrlPlayBtn');
  const ctrlPlayIcon = document.getElementById('ctrlPlayIcon');
  const progressWrap = document.getElementById('ctrlProgressWrap');
  const progressBar = document.getElementById('ctrlProgressBar');
  const timeDisplay = document.getElementById('ctrlTime');
  const muteBtn = document.getElementById('ctrlMuteBtn');
  const fsBtn = document.getElementById('ctrlFullscreenBtn');
  const toast = document.getElementById('videoToast');

  if (!frame || !video) return;

  let isSimulating = false;
  let simProgress = 0;
  let simInterval = null;

  function hasRealVideo() {
    const src = video.getAttribute('src') || (video.querySelector('source') && video.querySelector('source').getAttribute('src'));
    return Boolean(src && src.trim().length > 0);
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');
  }

  let toastTimer = null;
  function showToast(text, duration) {
    duration = duration || 4500;
    if (!toast) return;
    if (text) {
      const textSpan = toast.querySelector('.toast-text');
      if (textSpan) textSpan.innerHTML = text;
    }
    toast.classList.add('is-active');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-active');
    }, duration);
  }

  function togglePlay() {
    if (hasRealVideo()) {
      if (video.paused) {
        video.play().then(() => {
          overlay.classList.add('is-hidden');
          frame.classList.add('is-playing');
          if (ctrlPlayIcon) ctrlPlayIcon.setAttribute('points', '5,4 9,4 9,20 5,20 15,4 19,4 19,20 15,20');
        }).catch(() => {
          overlay.classList.add('is-hidden');
          frame.classList.add('is-playing');
        });
      } else {
        video.pause();
        frame.classList.remove('is-playing');
        if (ctrlPlayIcon) ctrlPlayIcon.setAttribute('points', '6,3 20,12 6,21');
      }
    } else {
      // Placeholder demo mode
      isSimulating = !isSimulating;
      if (isSimulating) {
        frame.classList.add('is-playing');
        overlay.classList.add('is-hidden');
        if (ctrlPlayIcon) ctrlPlayIcon.setAttribute('points', '5,4 9,4 9,20 5,20 15,4 19,4 19,20 15,20');
        showToast('🎬 Showcase slot active! Replace <code>src=""</code> in <code>index.html</code> with your video file.');
        clearInterval(simInterval);
        simInterval = setInterval(() => {
          simProgress = (simProgress + 0.8) % 100;
          if (progressBar) progressBar.style.width = simProgress + '%';
          const currentSec = (simProgress / 100) * 84;
          if (timeDisplay) timeDisplay.textContent = formatTime(currentSec) + ' / 01:24';
        }, 100);
      } else {
        frame.classList.remove('is-playing');
        overlay.classList.remove('is-hidden');
        if (ctrlPlayIcon) ctrlPlayIcon.setAttribute('points', '6,3 20,12 6,21');
        clearInterval(simInterval);
      }
    }
  }

  if (playBtn) playBtn.addEventListener('click', togglePlay);
  if (ctrlPlayBtn) ctrlPlayBtn.addEventListener('click', togglePlay);

  video.addEventListener('timeupdate', () => {
    if (!video.duration) return;
    const pct = (video.currentTime / video.duration) * 100;
    if (progressBar) progressBar.style.width = pct + '%';
    if (timeDisplay) timeDisplay.textContent = formatTime(video.currentTime) + ' / ' + formatTime(video.duration);
  });

  video.addEventListener('ended', () => {
    frame.classList.remove('is-playing');
    overlay.classList.remove('is-hidden');
    if (ctrlPlayIcon) ctrlPlayIcon.setAttribute('points', '6,3 20,12 6,21');
  });

  if (progressWrap) {
    progressWrap.addEventListener('click', (e) => {
      const rect = progressWrap.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (hasRealVideo() && video.duration) {
        video.currentTime = pos * video.duration;
      } else {
        simProgress = pos * 100;
        if (progressBar) progressBar.style.width = simProgress + '%';
        if (timeDisplay) timeDisplay.textContent = formatTime(pos * 84) + ' / 01:24';
      }
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.style.opacity = video.muted ? '0.5' : '1';
    });
  }

  if (fsBtn) {
    fsBtn.addEventListener('click', () => {
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
})();
