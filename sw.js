var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/projx/index.html',
  '/projx/pwa.html',
  '/projx/img/main.jpg',
  '/projx/js/src.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
      event.respondWith(fetch('/projx/pwa.html'));

      fetch(event.request.url);
    }

});