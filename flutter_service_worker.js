'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9ccc1df845a4538b7f9d2c38a4dd511c",
".git/config": "4693268ce84a38cb6dde151bdc80a59f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "11501305d8bb1355f450c3620ffaac1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72af9b20bfbe89719c8d3c8cfe45f35d",
".git/logs/refs/heads/master": "72af9b20bfbe89719c8d3c8cfe45f35d",
".git/logs/refs/remotes/origin/master": "75634246dd7708517716d351cfd8deb6",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/13/53d7bc0d77091389483dff09ea6ef44eb2e718": "55eb78271d61084b088f552c0ba18729",
".git/objects/19/f49dc09206030af48a7e05fe0cdbec3ddbe879": "379d67225fb80e1c6b33b21804466a48",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/83bedffcd96e04418ea403c18c2979eca7abb3": "6b23d27b157c52fd5c7fa66a4eae9ecb",
".git/objects/21/227a201c793f36d01a75d03f55e077dc7253d0": "19d8e0e8c9098fb5625ee742074978b3",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/f243d6ca8c6a08e4a10e392a1fa4135d9e8393": "c93bcc98313fa413e5e5c9ee4c31c175",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/b29af874a4055627a4e7d459bdb3ad0adea81c": "929a96a2a84f2510764341f2105df60a",
".git/objects/40/162bdede3703eda4718a54893100f0978b25ba": "e1cfb820538d0f31c5282cb43d1c5210",
".git/objects/41/f78b48d59a29defdcb6f52e7ea9abc858ad682": "ffe1f002f3da5241913ebc5ed1fa3778",
".git/objects/42/ee5b349d661c288be72a12c2b7f53c95d57e32": "646a905e0eaee86aaf105ca32fbb6619",
".git/objects/46/ce0b83d6e889856ebf57ddab1b0e0704ed3ed4": "27650691c8074ce1887db5f8d2ba6581",
".git/objects/5a/5ef1a75fea3e3ef54c950b477ac18904ec937b": "c1a735b3f2cb22cf8671a1bc09045a23",
".git/objects/5b/15cdd7d0362a7bde979d95e52cb472dda382c4": "597ab922f2e937ace2d6f9887557c2d9",
".git/objects/66/546b940e94bc8601c957c650916c067a22bd15": "9555676e99565ba40d6a9c92b9cab4d6",
".git/objects/6b/8a4c158bb3b23c6c67a8cda7824321fcb861a4": "9fb53f693942498610138d6af94c5de1",
".git/objects/79/09281039dfb7088c68dbaa055c573d976faf9e": "d328b7726c73c1f92d19fc9ec5681b32",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/ada76e89d96257100eb33196e22717a2020df4": "878466572b07dceaa8c685a8b2141910",
".git/objects/7d/bf2d1eb7ba4bafe5c6b00e8e3342bf6317e105": "2b60843e31dd47c8c21a7dd57ba957fc",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/516a62b13fc87cd458be4f0106f96b3b720526": "28ff9573a26b1069dfb65f25f48e1e61",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/96/d2378717fe6713b2e86dd2887838660895a7aa": "3c6b99f14f935ae9eaff07da7d4f1bd7",
".git/objects/9c/27b7851f63fb0539438ac453afa35cde223db4": "24a2f1b3984b8a4aaeeb3254be4e149b",
".git/objects/9e/5929db4a0ac3bb284c4558bb9c55b743d11bad": "0e35f6f2bf16ce5ba1650a811c4a965f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/2800353dd5766a4976b3c8a1024532d4285ee7": "c7ba3c4b13628e4309cc454dfa9dc574",
".git/objects/b6/7d7b618e8ef400d4540a2aefc6401dce47c7ae": "aadbf14d86c60eb621ba3a4c3249ffb1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/master": "5690f31e8d41b4b397d49c0bf4423c8b",
".git/refs/remotes/origin/master": "5690f31e8d41b4b397d49c0bf4423c8b",
"assets/AssetManifest.json": "4558590b06c428141b919df47556bc6f",
"assets/assets/images/bg_image.jpg": "aa427a972822e75ad945f5266de3695c",
"assets/assets/images/body_treatment.png": "236833ea94d9c846cf5c07f460d12fe0",
"assets/assets/images/facials.png": "e17addfec73d4ad754f5c95a557ecd97",
"assets/assets/images/hair.png": "d5eb285370e2c669fa799c0ccffbf7c0",
"assets/assets/images/img_spa_login.jpg": "82160ddc2ad027625eeec667bfbfbd7d",
"assets/assets/images/logo.png": "7a645b7e4ad116984f2ea30572688807",
"assets/assets/images/massage.png": "f2534e91cf0db5cd49e4ec8e2361ac5f",
"assets/assets/images/nail.png": "9d4c240cae1bcc6a687141c6315f239a",
"assets/assets/images/spa_intro_1.jpg": "8c128aaa14ea9347b4dd958ce6f1cea8",
"assets/assets/images/spa_intro_2.jpg": "43c87dc1990fb61d50c23ff4d7c6ee9d",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6c1f14d184808ed38586efdac9985b86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d1b62a173ff7d829c4b7b3c39dd8683a",
"/": "d1b62a173ff7d829c4b7b3c39dd8683a",
"main.dart.js": "f8fddd95e4589f2c0ae259bb0d785203",
"manifest.json": "4a51febe0c252b1cb064118734ad2026",
"version.json": "5d0debcfb8b11d0b95fb7f904b74c414"
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
