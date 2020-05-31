setTimeout(() => {
  const img = new Image();
  img.src = "./dog.svg";
  img.width = 300;
  document.body.appendChild(img);
}, 3 * 1000);

if (window.navigator.serviceWorker) {
  window.navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => {
      console.log("SW registered!", reg);

      console.log("installing", reg.installing);
      console.log("waiting", reg.waiting);
      console.log("active", reg.active);

      reg.addEventListener("updatefound", (event) => {
        console.log("update found", event);
        // A wild service worker has appeared in reg.installing!
        const newWorker = reg.installing;

        if (newWorker) {
          console.log("newWorker state", newWorker.state);
          newWorker.state;
          // "installing" - the install event has fired, but not yet complete
          // "installed"  - install complete
          // "activating" - the activate event has fired, but not yet complete
          // "activated"  - fully active
          // "redundant"  - discarded. Either failed install, or it's been
          //                replaced by a newer version

          newWorker.addEventListener("statechange", (changeEvent) => {
            // newWorker.state has changed
            console.log("new worker state changed", changeEvent);
          });
        }
      });
      reg.installing;
    })
    .catch((err) => console.log("Boo!", err));
}

let button = document.querySelector("#send_message_button_id_js");
if (button) {
  button.addEventListener("click", () => {
    window.navigator.serviceWorker.ready.then((swRegistration) => {
      console.log("service worker 注册成功");

      Notification.requestPermission()
        .then((result: NotificationPermission) => {
          if (result === "granted") {
            // 发送sync消息
            return swRegistration.sync.register("firstSyncMessage");
          } else {
            console.log("用户拒绝了发送通知的权限");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  });
}
