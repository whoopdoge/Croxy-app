self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('croxyproxy-pwa').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './assets/css/main.css',
        './assets/js/main.js',
        './assets/js/main.js.map',
        './assets/images/croxy-logo.svg',
        './assets/images/croxy-icon.png',
        './assets/images/favicon.png',
        './assets/fonts/Lato-Regular.woff2',
        './assets/fonts/Lato-Regular.woff'
]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
