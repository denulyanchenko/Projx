var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/Projx/',
  '/Projx/img/main.jpg',
  '/Projx/script/main.js'
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
      event.respondWith(fetch('/pwa'));

      fetch(event.request.url);
    }

});