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
  { id: 'prices', linkText: 'Prices' },
  { id: 'projects', linkText: 'Projects' },
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
const stage=document.getElementById('playgroundStage'),shapes=[...document.querySelectorAll('.play-shape')];let dragged=null,offsetX=0,offsetY=0;shapes.forEach(shape=>{shape.addEventListener('pointerdown',e=>{dragged=shape;const r=shape.getBoundingClientRect();offsetX=e.clientX-r.left;offsetY=e.clientY-r.top;shape.setPointerCapture(e.pointerId);shape.style.transition='none';shape.style.zIndex='8'});shape.addEventListener('pointermove',e=>{if(dragged!==shape)return;const r=stage.getBoundingClientRect();let x=e.clientX-r.left-offsetX,y=e.clientY-r.top-offsetY;x=Math.max(0,Math.min(r.width-shape.offsetWidth,x));y=Math.max(0,Math.min(r.height-shape.offsetHeight,y));shape.style.left=x/r.width*100+'%';shape.style.top=y/r.height*100+'%';shape.style.right='auto';shape.style.bottom='auto'});const end=()=>{if(dragged===shape){dragged=null;shape.style.transition='box-shadow .25s,scale .25s';shape.style.zIndex='2';document.getElementById('playMessage').innerHTML='NICE MOVE.<br><span>MAKE IT YOURS.</span>'}};shape.addEventListener('pointerup',end);shape.addEventListener('pointercancel',end)});
const scatterBtn = document.getElementById('scatterBtn');
if (scatterBtn) {
  scatterBtn.addEventListener('click', () => {
    shapes.forEach(s => {
      s.style.left = (8 + Math.random() * 75) + '%';
      s.style.top = (8 + Math.random() * 65) + '%';
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
    [['13%', '20%', 'auto', 'auto', 'rotate(-16deg)'], ['auto', '18%', '17%', 'auto', 'rotate(13deg)'], ['28%', 'auto', 'auto', '13%', 'rotate(22deg)']].forEach((p, i) => {
      const s = shapes[i];
      if (s) [s.style.left, s.style.top, s.style.right, s.style.bottom, s.style.transform] = p;
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
