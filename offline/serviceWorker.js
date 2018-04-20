// no more used, now using "sw-precache-webpack-plugin" (for production only)

// service workers rocks: https://developers.google.com/web/fundamentals/primers/service-workers/
const CACHE_NAME = 'rrnm-cache-v1';
const urlsToCache = [
  '/',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
];
const cacheWhitelist = [CACHE_NAME]; // by default current CACHE_NAME will persist on acivation (non whitelisted one will be deleted)

self.addEventListener('install', event => {
  const addAllToCache = cache => cache.addAll(urlsToCache);
  const preLoaded = caches.open(CACHE_NAME).then(addAllToCache);
  event.waitUntil(preLoaded);
});

self.addEventListener('fetch', event => {
  const cacheNonMatchedThenReturnFetchReponse = eventRequest =>
    fetch(eventRequest).then(fetchResponse =>
      caches.open(CACHE_NAME).then(cache => {
        cache.put(eventRequest, fetchResponse.clone());
        return fetchResponse;
      }),
    );

  const response = caches
    .match(event.request)
    .then(
      match => match || cacheNonMatchedThenReturnFetchReponse(event.request),
    );
  event.respondWith(response);
});

self.addEventListener('activate', event => {
  const cachesCleaned = caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames.map(cacheName => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
        return Promise.resolve();
      }),
    );
  });

  event.waitUntil(cachesCleaned);
});
