// Shibeeb Rahiman Portfolio — Service Worker (Offline Support)
const CACHE_NAME = 'shibeeb-portfolio-v1';
const OFFLINE_URL = 'offline.html';

const ASSETS_TO_PRECACHE = [
  '/',
  'index.html',
  'offline.html',
  'assets/css/styles.css',
  'assets/js/script.js',
  'assets/images/favicon.svg',
  'favicon.svg'
];

// Install: Pre-cache offline page & core styles
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_PRECACHE).catch((err) => {
        // Fallback: at least ensure offline.html is cached
        return cache.add(OFFLINE_URL);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up old cache versions & take control
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Network-first, fallback to offline.html for navigation when disconnected
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // If this is a page navigation (HTML document)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // If valid response, clone into cache for offline viewing
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Network failed (ERR_INTERNET_DISCONNECTED / offline)
          const cache = await caches.open(CACHE_NAME);
          const cachedPage = await cache.match(event.request);
          if (cachedPage) {
            return cachedPage;
          }
          const offlinePage = await cache.match(OFFLINE_URL);
          return offlinePage || new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: { 'Content-Type': 'text/html' }
          });
        })
    );
    return;
  }

  // For static assets (CSS, JS, images, fonts)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached and update in background
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).catch(async () => {
        // If image fails offline, try fallback
        if (event.request.destination === 'image') {
          const cache = await caches.open(CACHE_NAME);
          return cache.match('assets/images/favicon.svg');
        }
      });
    })
  );
});
