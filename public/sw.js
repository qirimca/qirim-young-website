// Service Worker for QIRI'M YOUNG website
// Optimized for Core Web Vitals and performance

const CACHE_NAME = 'qirim-young-v2.1.1';
const STATIC_CACHE = 'qirim-young-static-v2.1.1';
const CROWDIN_CACHE = 'qirim-young-crowdin-v1';

// Critical resources to cache first
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/favicon.svg',
  '/logo.svg',
  '/fonts/e-Ukraine-Regular.woff2',
  '/fonts/e-UkraineHead-Regular.woff2',
  '/fonts/e-Ukraine-Medium.woff2',
  '/favicon-96x96.webp',
  '/favicon-32x32.webp',
  '/favicon-16x16.webp'
];

// API endpoints and dynamic content
const DYNAMIC_CACHE_PATTERNS = [
  /^https:\/\/distributions\.crowdin\.net\//,
  /^https:\/\/proxy-translator\.app\.crowdin\.net\//,
  /^https:\/\/www\.google-analytics\.com\//
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('[SW] Critical resources cached');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME && 
                     cacheName !== STATIC_CACHE && 
                     cacheName !== CROWDIN_CACHE;
            })
            .map((cacheName) => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - intelligent caching strategy
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip Google Analytics and external analytics
  if (url.hostname.includes('google-analytics.com') || 
      url.hostname.includes('googletagmanager.com')) {
    return;
  }

  // Handle different resource types with appropriate strategies
  if (isStaticResource(url)) {
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE));
  } else if (isCrowdinResource(url)) {
    event.respondWith(networkFirstStrategy(request, CROWDIN_CACHE));
  } else if (isAPIResource(url)) {
    event.respondWith(networkFirstStrategy(request, CACHE_NAME));
  } else {
    event.respondWith(staleWhileRevalidateStrategy(request, CACHE_NAME));
  }
});

// Cache-first strategy for static resources
async function cacheFirstStrategy(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      console.log('[SW] Serving from cache:', request.url);
      return cached;
    }
    
    console.log('[SW] Fetching and caching:', request.url);
    const response = await fetch(request);
    
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Cache-first strategy failed:', error);
    return new Response('Resource not available', { status: 503 });
  }
}

// Network-first strategy for dynamic content
async function networkFirstStrategy(request, cacheName) {
  try {
    console.log('[SW] Network-first for:', request.url);
    const response = await fetch(request);
    
    if (response.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    return cached || new Response('Resource not available', { status: 503 });
  }
}

// Stale-while-revalidate strategy for optimal performance
async function staleWhileRevalidateStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  // Always try to fetch in background
  const fetchPromise = fetch(request).then((response) => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);

  // Return cached version immediately if available
  if (cached) {
    console.log('[SW] Serving stale while revalidating:', request.url);
    return cached;
  }
  
  // If no cache, wait for network
  console.log('[SW] No cache, waiting for network:', request.url);
  return fetchPromise || new Response('Resource not available', { status: 503 });
}

// Helper functions
function isStaticResource(url) {
  return url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|otf|ttf|ico)$/);
}

function isCrowdinResource(url) {
  return DYNAMIC_CACHE_PATTERNS.some(pattern => pattern.test(url.href));
}

function isAPIResource(url) {
  return url.pathname.includes('/api/') || 
         url.pathname.includes('.json') ||
         url.search.includes('api');
}

// Background sync for offline support
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('[SW] Background sync triggered');
    event.waitUntil(
      // Perform background sync operations
      syncData()
    );
  }
});

async function syncData() {
  try {
    // Sync any pending data when back online
    console.log('[SW] Syncing data...');
    // Implementation depends on specific requirements
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_CACHE_SIZE') {
    getCacheSize().then(size => {
      event.ports[0].postMessage({ cacheSize: size });
    });
  }
});

async function getCacheSize() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  
  for (const name of cacheNames) {
    const cache = await caches.open(name);
    const keys = await cache.keys();
    totalSize += keys.length;
  }
  
  return totalSize;
}