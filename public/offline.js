const CACHE_NAME = 'basa_finder_cache_v1';
const urlCached = ['/offline'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files.....');
        return cache.addAll(urlCached);
      })
      .then(() => {
        console.log('All files cached.');
        self.skipWaiting();
      })
      .catch(error => {
        console.log('Error caching files:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(urlCached[0]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting cache: ' + cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
