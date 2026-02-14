self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("puzzle-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "puzzle.html",
        "script.js",
        "puzzle.js",
        "style.css",
        "images/photo1.jpg",
        "images/photo1,1.jpg",
        "images/photo1,2.jpg"
      ]);
    })
  );
});
