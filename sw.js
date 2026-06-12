const CACHE_NAME = 'shanxian-pig-study-club-v110';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/app.v110.css',
  './assets/app.v110.js',
  './assets/icon.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/brand-logo-calligraphy.png',
  './assets/hero-banner-calligraphy-pigs.png',
  './sample_data.json',
  './version.json',
  './GITHUB_PAGES_DEPLOY.md',
  './README.md',
  './templates/member_import_template.csv',
  './templates/member_import_template.xlsx',
  './templates/course_import_template.csv',
  './templates/course_import_template.xlsx'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin.includes('script.google.com') || url.origin.includes('googleusercontent.com')) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
      return response;
    }).catch(() => cached)));
});
