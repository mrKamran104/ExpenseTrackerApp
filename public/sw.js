var cacheName = 'ExpenseTracker';
var filesToCache = [
  '/',
  'manifest.json',
  'index.html',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  'favicon.ico',
  'logo192.png',
  'https://fonts.googleapis.com/css?family=Lato&display=swap',
];

this.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

this.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

// self.addEventListener('activate', (e) => {
//   e.waitUntil(
//     caches.keys().then((keyList) => {
//       console.log('Delete Old Files')
//       return Promise.all(keyList.map((key) => {
//         if (key !== cacheName) {
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
// });
