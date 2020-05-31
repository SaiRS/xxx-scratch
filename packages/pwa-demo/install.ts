
// 地址栏出现加号
window.addEventListener("beforeinstallprompt", (event: Event) => {
  console.log("beforeinstallprompt");
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
});

// 安装成功
window.addEventListener("appinstalled", (evt: any) => {
  // Log install to analytics
  console.log("INSTALL: Success", evt);
});