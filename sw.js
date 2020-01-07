var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/Projx/',
  '/Projx/pwa.html',
  '/Projx/img/main.jpg',
  '/Projx/js/src.js'
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
      event.respondWith(fetch('/Projx/pwa.html'));

      fetch(event.request.url);
    }

});