


const CACHE_NAME = "puzzle-app-v1";

const urlsToCache = [
  "index.html",
  "puzzle.html",
  "style.css",
  "script.js",
  "puzzle.js",

  // AJOUTE TOUTES TES IMAGES ICI
  "image/photo1.jpg",
  "image/photo1,1.jpg",
  "image/photo1,,2.jpg",
  "image/photo4.jpg",
  "image/photo5.jpg",
  "image/photo6.jpg",
  "image/photo7.jpg",
  "image/photo8.jpg",
  "image/photo9.jpg",
  "image/photo10.jpg",
  "image/photo11.jpg",
  "image/photo12.jpg",
  "image/photo13.jpg",
  "image/photo14.jpg",
  "image/photo15.jpg",
  "image/photo16.jpg",
  "image/photo17.jpg",
  "image/photo18.jpg",
  "image/photo19.jpg",
  "image/photo20.jpg",
  "image/photo21.jpg",
  "image/photo22.jpg",
  "image/photo23.jpg",
  "image/photo24.jpg",
  "image/photo25.jpg",
  "image/photo26.jpg",
  "image/photo27.jpg",
  "image/photo28.jpg",
  "image/photo29.jpg",
  "image/photo30.jpg",
  "image/photo31.jpg",
  "image/photo32.jpg",
  "image/photo33.jpg",
  "image/photo34.jpg",
  "image/photo35.jpg",
  "image/photo36.jpg",
  "image/photo37.jpg",
  "image/photo38.jpg",
  "image/photo39.jpg",
  "image/photo40.jpg"
   "image/VIDEO2.mp4,
   "image/video.mp4",
 "image/vidéO 4.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

