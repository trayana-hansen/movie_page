const staticCacheName = "site-static-v2";

const dynamicCacheName = "site-dynamic-v1";

const assets = [
  "./",
  "./index.html",
  "./assets/js/app.js",
  "./assets/js/footer.js",
  "./assets/js/frontPage.js",
  "./assets/js/loader.js",
  "./assets/js/model.jss",
  "./assets/js/nav.js",
  "./assets/styles/main.css",
  "./assets/styles/loader.css",
  "./pages/fallback.html",
];

const limitCacheSize = (cacheName, numAllowedFiles) => {
  caches.open(cacheName).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > numAllowedFiles) {
        cache.delete(keys[0]).then(limitCacheSize(cacheName, numAllowedFiles));
      }
    });
  });
};

self.addEventListener("install", (event) => {
  //console.log("Service Worker has been installed");

  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      //console.log("Caching all assets");
      cache.addAll(assets);
    })
  );
});
self.addEventListener("activate", (event) => {
  //console.log("Service Worker has been activated");

  console.log("Service worker has been activated...");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
  return;
});

self.addEventListener("fetch", (event) => {
  limitCacheSize(dynamicCacheName, 2);

  if (!(event.request.url.indexOf("http") === 0)) return;
  event.respondWith(
    caches
      .match(event.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(event.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(event.request.url, fetchRes.clone());
              limitCacheSize(dynamicCacheName, 2);
              return fetchRes;
            });
          })
        );
      })
      .catch(() => caches.match("/pages/fallback.html"))
  );
});
