importScripts('workbox-v3.2.0/workbox-sw.js')

self.workbox.skipWaiting();
self.workbox.clientsClaim();

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.css",
    "revision": "9601024828efce727fc1c02ac040bc87"
  },
  {
    "url": "build/app.js",
    "revision": "f6d1aeb40d92332add3184184d415931"
  },
  {
    "url": "build/app/1t6vshu0.es5.js",
    "revision": "2119a95e7d047f62185706b87cd0823e"
  },
  {
    "url": "build/app/1t6vshu0.js",
    "revision": "e3f5690c7cda10dd15ec1d9ea9e8a6d2"
  },
  {
    "url": "build/app/6cfr5stp.es5.js",
    "revision": "9f0ec009c15a0841b5ba023caad437f6"
  },
  {
    "url": "build/app/6cfr5stp.js",
    "revision": "3bd78c22b0c96bb2d29e4d2709098660"
  },
  {
    "url": "build/app/9237bzg1.es5.js",
    "revision": "051cdc91117d9a791dcee52911c0846a"
  },
  {
    "url": "build/app/9237bzg1.js",
    "revision": "8868cca1151e46bbc6de09fd4b3cb442"
  },
  {
    "url": "build/app/app.a0fgg8rr.js",
    "revision": "4a331f3ad61049fd1fb659d4bae9ae30"
  },
  {
    "url": "build/app/app.h30gjsux.js",
    "revision": "4c160468736f7f41ee58e4f9f0fe4fcd"
  },
  {
    "url": "build/app/chunk-33efde6b.es5.js",
    "revision": "58ae8a471eec4916ca8522c1ce1cd7d4"
  },
  {
    "url": "build/app/chunk-4620ed8e.js",
    "revision": "6d269b2e12814466c700019fb14f1485"
  },
  {
    "url": "build/app/chunk-62950a0c.es5.js",
    "revision": "4cb1736512a9a584b634d6b4cc71584f"
  },
  {
    "url": "build/app/chunk-8cfbbd86.es5.js",
    "revision": "ac55b11a95cea918cf09a5994b95a3df"
  },
  {
    "url": "build/app/chunk-ce917615.js",
    "revision": "42ec62ceecac55275e541309a7502983"
  },
  {
    "url": "build/app/chunk-d7be1947.js",
    "revision": "585649500754855a3149e51b104f692a"
  },
  {
    "url": "build/app/f1vewe6c.es5.js",
    "revision": "9f77d18038c949931fcf31814e0842b5"
  },
  {
    "url": "build/app/f1vewe6c.js",
    "revision": "e0c4f19e8547ac3d4ebefb3e00ba9e4c"
  },
  {
    "url": "build/app/fgguzavc.es5.js",
    "revision": "d3ad756b8ece12b87641f94333b6e105"
  },
  {
    "url": "build/app/fgguzavc.js",
    "revision": "c052074e5ba6183e4f455f7420e7cd12"
  },
  {
    "url": "build/app/input-shims.es5.js",
    "revision": "e5e7212f77ead9daaabf0cce7f3fde14"
  },
  {
    "url": "build/app/input-shims.js",
    "revision": "9709bf7e115a785328721eae96e9247d"
  },
  {
    "url": "build/app/ios.transition.es5.js",
    "revision": "5ebb399a1333bef3dbf08989eec211d9"
  },
  {
    "url": "build/app/ios.transition.js",
    "revision": "b51681ca9b9bb1d3389b349da7315f65"
  },
  {
    "url": "build/app/md.transition.es5.js",
    "revision": "73cf6d8bcb2ed7aa330fabec37e9f28d"
  },
  {
    "url": "build/app/md.transition.js",
    "revision": "7359b7b45653d81a6f78368552a953bb"
  },
  {
    "url": "build/app/uohekrbt.es5.js",
    "revision": "2d2c89ae6e0626de97d433a676926820"
  },
  {
    "url": "build/app/uohekrbt.js",
    "revision": "2133b9fc7c49212d5d04a4a23ced6c2c"
  },
  {
    "url": "build/app/xfkxcxpt.es5.js",
    "revision": "1bdaaf8eca81d97566f3f35e5bfe1c87"
  },
  {
    "url": "build/app/xfkxcxpt.js",
    "revision": "23b35278c47921f8f71773ee134e0496"
  },
  {
    "url": "build/app/xwncaqcy.es5.js",
    "revision": "078788705aa4b6175641573153462274"
  },
  {
    "url": "build/app/xwncaqcy.js",
    "revision": "9cd7ebe1bce36222a67858d38ea5685d"
  },
  {
    "url": "build/app/zmdbhs2m.es5.js",
    "revision": "7373d4609bd0719fbe187db5052a74a7"
  },
  {
    "url": "build/app/zmdbhs2m.js",
    "revision": "6128558f1dc553a7c8070cf17de379cb"
  },
  {
    "url": "index.html",
    "revision": "c2cedb1fd0e3cd6182767b652b5d5c25"
  },
  {
    "url": "manifest.json",
    "revision": "cc7f1c51d25c54795f7d9e3d0f7a5a30"
  }
]);