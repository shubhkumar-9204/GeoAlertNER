/**
 * GeoAlertNER Service Worker
 * Network-first for the app shell so every visit/login receives current HTML,
 * JavaScript and CSS. Cached copies are only an offline fallback.
 */
const CACHE_NAME = 'geoalertner-core-v14';
const DATA_CACHE_NAME = 'geoalertner-data-v14';

const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './bundle.js',
  './app.js',
  './api.js',
  './map.js',
  './i18n.js',
  './offlineSync.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] App-shell pre-cache warning:', err);
      }))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.map((name) => {
        if (name !== CACHE_NAME && name !== DATA_CACHE_NAME) {
          return caches.delete(name);
        }
        return Promise.resolve();
      })))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Keep API data network-first, with cached data available only offline.
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(DATA_CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(async () => {
        const cached = await caches.match(request);
        return cached || new Response(JSON.stringify({
          offline: true,
          message: 'You are offline and no cached data is available.'
        }), { headers: { 'Content-Type': 'application/json' } });
      })
    );
    return;
  }

  // Navigation, scripts and styles must never serve a stale cached copy first.
  const isNavigation = request.mode === 'navigate' || request.destination === 'document';
  const isAppCode = ['script', 'style'].includes(request.destination);
  if (isNavigation || isAppCode) {
    event.respondWith(
      fetch(request, { cache: 'no-cache' }).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (isNavigation) {
          const offlinePage = await caches.match('./index.html');
          if (offlinePage) return offlinePage;
        }
        return Response.error();
      })
    );
    return;
  }

  // Other app-shell assets: cache-first is suitable for images and icons.
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      }
      return response;
    }))
  );
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'geoalertner-sync-reports') {
    event.waitUntil(self.clients.matchAll().then((clients) => {
      clients.forEach((client) => client.postMessage({ type: 'TRIGGER_OFFLINE_SYNC' }));
    }));
  }
});

self.addEventListener('push', (event) => {
  let data = { title: 'GeoAlertNER Disaster Warning', body: 'Immediate hazard alert in your region!' };
  if (event.data) {
    try { data = event.data.json(); } catch (e) { data.body = event.data.text(); }
  }
  event.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    vibrate: [200, 100, 200, 100, 400],
    data: { url: data.url || './index.html' },
    actions: [
      { action: 'view-map', title: 'View Map' },
      { action: 'evacuate', title: 'Find Shelter' }
    ]
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(self.clients.matchAll({ type: 'window' }).then((clients) => {
    for (const client of clients) {
      if (client.url.includes('index.html') && 'focus' in client) return client.focus();
    }
    if (self.clients.openWindow) return self.clients.openWindow('./index.html');
  }));
});
