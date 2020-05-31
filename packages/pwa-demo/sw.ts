const OFFLINE_VERSION = 1;
const CACHE_NAME = "offline";
// Customize this with a different URL if needed.
const OFFLINE_URL = "offline.html";

const expectedCaches = ["static-v2"];

// @ts-ignore
let serviceWorkerInstance: ServiceWorkerGlobalScope = self;

serviceWorkerInstance.addEventListener("install", function onInstall(
  event: ExtendableEvent
) {
  console.log("serverice worker 安装中......");

  event.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    // await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));

    await cache.add("./horse.svg");

    return true;
  });
});

// serviceWorkerInstance.addEventListener('activate', function onActive(event: ExtendableEvent) {
//   event.waitUntil(
//     (async () => {
//       // Enable navigation preload if it's supported.
//       // See https://developers.google.com/web/updates/2017/02/navigation-preload
//       if ("navigationPreload" in serviceWorkerInstance.registration) {
//         await serviceWorkerInstance.registration.navigationPreload.enable();
//       }
//     })()
//   );

//   // 立马接管页面
//   serviceWorkerInstance.clients.claim();
// });

serviceWorkerInstance.addEventListener("activate", (event: ExtendableEvent) => {
  // 清除其余的缓存
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (!CACHE_NAME.match(key)) {
              return caches.delete(key);
            }
            return undefined;
          })
        )
      )
      .then(() => {
        console.log("V2 now ready to handle fetches!");
      })
      .catch((error) => {
        console.error(error);
      })
  );
});

serviceWorkerInstance.addEventListener("fetch", (event: FetchEvent) => {
  let url = new URL(event.request.url);

  console.log("is match ", url.pathname.match("/dog.svg"));

  if (url.origin == location.origin && url.pathname.match("/dog.svg")) {
    // @ts-ignore
    event.respondWith(caches.match("./horse.svg"));
  }
});

serviceWorkerInstance.addEventListener("push", (event: PushEvent) => {
  console.log("收到push消息", event.data?.text());
});

serviceWorkerInstance.addEventListener("sync", (event: SyncEvent) => {
  console.log("收到new sync消息", event.tag);

  // 发送浏览器通知
  serviceWorkerInstance.registration.showNotification('来自sw的问候');
});
