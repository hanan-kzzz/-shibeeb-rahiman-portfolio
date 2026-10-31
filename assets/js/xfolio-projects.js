/**
 * Xfolio Projects Page Logic
 * Category filtering, smooth pagination & lightbox integration
 */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initXfolioProjects);
  } else {
    initXfolioProjects();
  }

  function initXfolioProjects() {
    const grid = document.getElementById('xfolioGrid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.portfolio-two__single'));
    const filterButtons = document.querySelectorAll('.xfolio-filter-pill');
    const paginationList = document.getElementById('xfolioPagination');
    const paginationRange = document.getElementById('xfolioPageRange');
    const paginationTotal = document.getElementById('xfolioTotalCount');

    // Lightbox elements
    const lightbox = document.getElementById('projectLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxVideo = document.getElementById('lightboxVideo');
    const lightboxBadge = document.getElementById('lightboxBadge');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    const lightboxNextBtn = document.getElementById('lightboxNextBtn');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');

    const ITEMS_PER_PAGE = 8;
    let currentCategory = 'all';
    let currentPage = 1;
    let activeProjects = [...cards];
    let currentLightboxIndex = 0;

    // 1. Initialize Card & Button Click Events for Lightbox
    cards.forEach((card, idx) => {
      const openHandler = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const globalIndex = activeProjects.indexOf(card);
        openLightbox(globalIndex >= 0 ? globalIndex : idx);
      };

      card.addEventListener('click', openHandler);

      const circleBtn = card.querySelector('.circle-btn');
      if (circleBtn) circleBtn.addEventListener('click', openHandler);

      const btnWrap = card.querySelector('.btn-wrap');
      if (btnWrap) btnWrap.addEventListener('click', openHandler);

      const thumb = card.querySelector('.thumb');
      if (thumb) thumb.addEventListener('click', openHandler);

      const titleLink = card.querySelector('.content h4 a');
      if (titleLink) titleLink.addEventListener('click', openHandler);

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          openHandler(e);
        }
      });
    });

    // 2. Filter Button Clicks
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) return;

        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        currentCategory = btn.getAttribute('data-filter') || 'all';
        currentPage = 1;

        applyFilterAndPagination(true);
      });
    });

    // 3. Filter & Pagination Engine
    function applyFilterAndPagination(scrollOnPageChange = false) {
      // Filter items
      if (currentCategory === 'all') {
        activeProjects = [...cards];
      } else {
        activeProjects = cards.filter(
          (c) => c.getAttribute('data-category') === currentCategory
        );
      }

      const totalItems = activeProjects.length;
      const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

      // Hide all cards first
      cards.forEach((card) => {
        card.classList.add('is-hidden');
      });

      // Show only cards for current page of active filter
      activeProjects.slice(startIndex, endIndex).forEach((card) => {
        card.classList.remove('is-hidden');
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
      });

      // Update counters
      if (paginationRange && paginationTotal) {
        paginationRange.textContent = totalItems === 0 ? '0' : `${startIndex + 1}–${endIndex}`;
        paginationTotal.textContent = `${totalItems}`;
      }

      renderPagination(totalPages);

      if (scrollOnPageChange) {
        const header = document.querySelector('.xfolio-section-header');
        if (header) {
          const y = header.getBoundingClientRect().top + window.pageYOffset - 110;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }

    // 4. Render Dynamic Pagination Controls
    function renderPagination(totalPages) {
      if (!paginationList) return;
      paginationList.innerHTML = '';

      if (totalPages <= 1) {
        paginationList.style.display = 'none';
        return;
      }
      paginationList.style.display = 'flex';

      // Previous Arrow
      const prevLi = document.createElement('li');
      const prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'xfolio-page-btn nav-arrow';
      prevBtn.setAttribute('aria-label', 'Previous page');
      prevBtn.disabled = currentPage === 1;
      prevBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>`;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          applyFilterAndPagination(true);
        }
      });
      prevLi.appendChild(prevBtn);
      paginationList.appendChild(prevLi);

      // Number Buttons
      for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = `xfolio-page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.setAttribute('aria-label', `Page ${i}`);
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
          if (currentPage !== i) {
            currentPage = i;
            applyFilterAndPagination(true);
          }
        });
        li.appendChild(pageBtn);
        paginationList.appendChild(li);
      }

      // Next Arrow
      const nextLi = document.createElement('li');
      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'xfolio-page-btn nav-arrow';
      nextBtn.setAttribute('aria-label', 'Next page');
      nextBtn.disabled = currentPage === totalPages;
      nextBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>`;
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          applyFilterAndPagination(true);
        }
      });
      nextLi.appendChild(nextBtn);
      paginationList.appendChild(nextLi);
    }

    // 5. Lightbox Functions
    function openLightbox(index) {
      if (!lightbox || !activeProjects[index]) return;
      currentLightboxIndex = index;
      renderLightboxContent();
      lightbox.classList.add('is-open', 'active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('is-open', 'active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.src = '';
        lightboxVideo.style.display = 'none';
      }
    }

    function renderLightboxContent() {
      const card = activeProjects[currentLightboxIndex];
      if (!card) return;

      const title = card.getAttribute('data-title') || '';
      const badge = card.getAttribute('data-badge') || '';
      const desc = card.getAttribute('data-desc') || '';
      const src = card.getAttribute('data-src') || '';
      const videoSrc = card.getAttribute('data-video-src') || '';

      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxBadge) lightboxBadge.textContent = badge;
      if (lightboxDesc) lightboxDesc.textContent = desc;
      if (lightboxCounter) {
        const current = String(currentLightboxIndex + 1).padStart(2, '0');
        const total = String(activeProjects.length).padStart(2, '0');
        lightboxCounter.textContent = `${current} / ${total}`;
      }

      if (videoSrc && lightboxVideo) {
        if (lightboxImg) lightboxImg.style.display = 'none';
        lightboxVideo.style.display = 'block';
        lightboxVideo.src = videoSrc;
        lightboxVideo.load();
        lightboxVideo.play().catch(() => {});
      } else if (lightboxImg) {
        if (lightboxVideo) {
          lightboxVideo.pause();
          lightboxVideo.style.display = 'none';
        }
        lightboxImg.style.display = 'block';
        lightboxImg.src = src;
        lightboxImg.alt = title;
      }
    }

    function prevLightbox() {
      if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
      } else {
        currentLightboxIndex = activeProjects.length - 1;
      }
      renderLightboxContent();
    }

    function nextLightbox() {
      if (currentLightboxIndex < activeProjects.length - 1) {
        currentLightboxIndex++;
      } else {
        currentLightboxIndex = 0;
      }
      renderLightboxContent();
    }

    // Lightbox Event Listeners
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightbox);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightbox);

    document.addEventListener('keydown', (e) => {
      if (!lightbox || !lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    });

    // Initial Execution
    applyFilterAndPagination(false);
  }
})();
