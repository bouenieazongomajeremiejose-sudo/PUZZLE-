self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("puzzle-cache").then(cache => {
      return cache.addAll([
        "/",
        "index.html",
        "puzzle.html",
        "script.js",
        "puzzle.js"
      ]);
    })
  );
});
