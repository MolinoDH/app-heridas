const CACHE_NAME = "heridas-v2";
const urlsToCache = [
  "index.html",
  "riesgo.html",
  "clasificacion.html",
  "valoracion.html",
  "timers.html",
  "materiales.html",
  "eleccion.html",
  "bibliografia.html",
  "sobre.html"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );

});

