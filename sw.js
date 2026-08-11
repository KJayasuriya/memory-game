const CACHE_NAME = "memory-game-v6";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./main.css",
    "./game-logic.js",
    "./assets/favicon.png",
    "./assets/icon-192.png",
    "./assets/icon-512.png",
    "./assets/cat.svg",
    "./assets/dog.svg",
    "./assets/fox.svg",
    "./assets/frog.svg",
    "./assets/koala.svg",
    "./assets/lion.svg",
    "./assets/panda.svg",
    "./assets/penguin.svg"
];

self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );

    self.clients.claim();
});