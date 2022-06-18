var cacheName = 'TegorInternational';
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js',
  'https://tegorinternational.github.io/GitHub.io/tailwind.css',
  'https://tegorinternational.github.io/GitHub.io/css/cdncss/swipercdn.css',
  'https://tegorinternational.github.io/GitHub.io/css/sidenav.css',
  'https://tegorinternational.github.io/GitHub.io/js/sidenav.js',
  'https://tegorinternational.github.io/GitHub.io/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
