'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "efd21632159ea74ea9bc2c86896cbcff",
".git/config": "8a2c5cb0b6e195246a641e7ae164826d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "89a754140bd566b4edcadfc49356924f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ecdb335cb75eabeb0eda59c9dac1a3aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "22ed62555c63c33e934533a677769710",
".git/logs/refs/heads/main": "0e6f2de2d91c763e2463a108d460bfb9",
".git/logs/refs/remotes/origin/main": "273c4f507ba4b23898b3e9bd7cd6d2dc",
".git/logs/refs/remotes/origin/master": "f4153549cee576bf51573d9a2b8ce488",
".git/objects/02/01aaa6f36ea2fb6f7186befd0a01c48a3e4bc2": "c34251b1d1e471ab9b84d606f6b1a203",
".git/objects/02/364aad2552f2f54f9c3ef8ecdaddb3fa03a47c": "e27becfb54a096bbf7cd5d4114880d07",
".git/objects/02/ef02f470ec09d647dc35d0a12e5fe016201f87": "a8102a97ec2a036398437229f819b6b4",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/81dd16f85fe87f1103e1b8ef31688d00a020de": "42c5d153a69e75354e48e7930850833b",
".git/objects/20/3a14134640d848da99ec674bfe0d92b4ddee6f": "48cf547de68d6e90366750485be52e2c",
".git/objects/21/b691a47ff12ebfab5e4a35e17a412db5e9d878": "50b345cce7ce1cf3c416842d2a960e89",
".git/objects/24/6472a0c754d1c0fe233eba219e32f0662f4872": "e7985c7f79d5bb472cc31a6b2a198582",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/7edbe27f9ca3752b0262c6b8021e106e5e0cb3": "5909929f6ef75c6bea326a398eee6573",
".git/objects/2a/d614ea00717483dc6b93feabea6ba362a527a9": "b7ee7e5df92f6bf4f48a7c3c5d21d9f8",
".git/objects/2c/5bf3601ad00546d0c61fd7a9fc18617e3f242c": "7e2f6fa872703727fc7c5214dbe6f4ec",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/7f39fbbf4ebdd5cef2d55f65d1766029c22064": "217132823c04ace8c89401201e503571",
".git/objects/31/a47dfaa0584b4fc2f9e09109df7dfdcac85451": "609c844efbca3907a7679eac6b0a788c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c2cee593d04d9aa7295a5e4212d4777cf98c35": "671f07fb3523bf085f7ee469ec549ffa",
".git/objects/46/c946aad4b641af54f1b8a6b1194002b01d735f": "d50362244399612ea84adf4658435fcf",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/2c9704178c30a44427360512dd379c8ceaed4b": "1148914f7dbebd432bc476cf603622f0",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/52927fd34073ebad0263a9d7a57eb7a8c831b4": "a52ce7fa95d4eeed44a5dd4c1e99bbc7",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/62/a835fa845c246fb789ce669df89f8971d55e3b": "cb9423a3de95786f0a56be24e47a8f61",
".git/objects/6a/3dad418dd4dd0bb35cd3458fed7c59ac8fc382": "c51bca3e14ab8350481883a9aef813ce",
".git/objects/6e/90272eb6501396f8f7114a4cff1227a86e4f34": "5f5d6e90998d0005270e2fdd99a017f9",
".git/objects/70/31ca3ffb71ba0788176b36abd05f241d5bec20": "3e0702287f4c792d0a4b0ee73d7b0486",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/49a4b842e2928d4a33b40e9f8046deae8bdcb6": "c29141c160a97f3b66043be8708a8f53",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9e/2b8d872826858f669bd4bdb7a847cb25271fae": "840d89808e8b85ee626f47a7f675f3d5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/df95b1c353198ae5199df993a2e16d9dc31b49": "467a59b8d269392a9761e46ed150adf7",
".git/objects/a6/de32f7af7ab476e1edac127c908c70f671e96d": "85d00e9105047353243ed69ebb4c3890",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/7ed84940841a281695d6b190d52c2fc84b5b22": "c0a2ca14b61568c0bc1ef8b0f21dad95",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/e01c4e9ec37afe6fc00f079591dfd49a4429dd": "33f3176582cbbdd75660249e0ae13b69",
".git/objects/c2/9560245a0fa898869aa49c04aa04e19291d92a": "957c2d4f8f613960f9d9b7d80a0338b4",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/bb8a68153c17d275ec2d9c3c5fa88483c8e3f7": "90990a3317e851e6b76abe8f8a0dea42",
".git/objects/cb/40bb82715b5003c9590bef13910d4f627bf0a3": "13b5fb4fe1403211a70125a17c263fd8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/9a5bd072e0f1b622fc6b2c61e3487458ef0542": "622a43accf5e1bb97c3dcf8fb61c52f0",
".git/objects/d8/f82b3bb1178f3294b030a875e234421efa2f70": "9d795d0df36f962b76af3077a23f6207",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/cf8c73bd9f86296dc869c8c8a104a6e24a9c09": "e12fdb75e74df259133b5651510eee28",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/d8374f991ad30c5b5e7261233c8b14482e965f": "ef5449c6a6f3669a736215ae74de0d0c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ff/588bff4ce18d4a3f8b445659f561cd9f4bdc3e": "2fefab5781bcc60ce22e9748247db0ce",
".git/ORIG_HEAD": "b7563ee5e95bb615f4a9ed5eb2fdada9",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "7d303840c45ff854eae41df3a002d14d",
".git/refs/remotes/origin/main": "7d303840c45ff854eae41df3a002d14d",
".git/refs/remotes/origin/master": "59aa16f9434f50883743cd2d6044e19f",
"assets/AssetManifest.json": "21d7ea482bdcdc1a3944c57f755a8c19",
"assets/assets/animations/cat.json": "4380106c13fe41d4f78e18db54eee6a6",
"assets/assets/audio/bubblemp3.mp3": "c695a4e74fd1f0c4138d2f278ab9686f",
"assets/assets/icones/icone_store_puzzle.png": "06b757ad536a3fa0bacefa502a609e29",
"assets/assets/icones/insta_without_credit.png": "eb88aba47cce12d0b92d028b3d39367f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "6b4b60f40404a275b37fe23790496cd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b53e0136b91b8222d5af24a424bd1f4",
"/": "3b53e0136b91b8222d5af24a424bd1f4",
"main.dart.js": "9998d472008faee2bc7e18089fd4705e",
"manifest.json": "0a500695db9edb0a8c3563bcdeb805fd",
"version.json": "b0f8cc86b6969306c374030ad63f48e3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
