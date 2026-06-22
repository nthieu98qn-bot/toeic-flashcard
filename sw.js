const CACHE_NAME = "toeic-flashcard-v1";
const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./vocab.json",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
