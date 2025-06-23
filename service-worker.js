
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('tjquiz-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/quiz-biblique.html',
        '/quiz-biblique-500.html',
        '/quiz-completion.html',
        '/icone-tjquiz.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
