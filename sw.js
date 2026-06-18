const CACHE_NAME = "matdadum-moim-v3";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./assets/photos/motsunabe.jpg",
  "./assets/photos/hakata-ramen.jpg",
  "./assets/photos/mentaiko.jpg",
  "./assets/photos/drugstore.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  const isAppShellRequest =
    requestUrl.origin === self.location.origin &&
    (
      requestUrl.pathname.endsWith("/") ||
      requestUrl.pathname.endsWith("/index.html") ||
      requestUrl.pathname.endsWith("/styles.css") ||
      requestUrl.pathname.endsWith("/app.js") ||
      requestUrl.pathname.endsWith("/manifest.webmanifest")
    );

  event.respondWith(
    isAppShellRequest
     
