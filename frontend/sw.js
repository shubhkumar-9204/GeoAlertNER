/**
 * GeoAlertNER Service Worker (PWA v1.0)
 * GeoAlertNER - Disaster Early Warning System
 * Caching Strategy: Network-First with Cache Fallback for APIs, Cache-First for App Shell
 */

const CACHE_NAME = 'geoalertner-core-v7';
const DATA_CACHE_NAME = 'geoalertner-data-v7';

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
  './icons/icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Install Event: Cache Core App Shell
self.addEventListener('install', (event) => {
  console.log('[SW] Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline app shell');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SW] Non-critical pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean Old Caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME && name !== DATA_CACHE_NAME) {
            console.log('[SW] Deleting legacy cache:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Intelligent Strategy
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Skip non-GET requests (handled by OfflineSyncManager)
  if (event.request.method !== 'GET') {
    return;
  }

  // API Requests: Network-first with Cache Fallback
  if (requestUrl.pathname.startsWith('/api/') || requestUrl.port === '8000') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(DATA_CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) {
            console.log('[SW] Serving cached API response for offline:', requestUrl.pathname);
            return cachedResponse;
          }
          // Return generic offline payload if no cache
          return new Response(
            JSON.stringify({
              offline: true,
              message: 'You are currently offline. Displaying cached disaster data.'
            }),
            { headers: { 'Content-Type': 'application/json' } }
          );
        })
    );
    return;
  }

  // App Shell & Static Assets: Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

// Background Sync Event
self.addEventListener('sync', (event) => {
  if (event.tag === 'geoalertner-sync-reports') {
    console.log('[SW] Triggering background sync for citizen telemetry...');
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'TRIGGER_OFFLINE_SYNC' });
        });
      })
    );
  }
});

// Push Notification Event (Critical Early Warnings)
self.addEventListener('push', (event) => {
  let data = { title: 'GeoAlertNER Disaster Warning', body: 'Immediate hazard alert in your region!' };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png',
    vibrate: [200, 100, 200, 100, 400],
    data: {
      url: data.url || './index.html'
    },
    actions: [
      { action: 'view-map', title: 'View Map' },
      { action: 'evacuate', title: 'Find Shelter' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./index.html');
      }
    })
  );
});
