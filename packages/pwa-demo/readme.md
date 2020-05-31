pwa的一个简单demo。
参考自[Service Worker 生命周期](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#updates)
主要是利用service worker先缓存一些资源，然后在service worker接管页面之后，把请求的资源替换为缓存的资源。

注意：因为service worker需要运行在https上边，在本地搭建https的的做法可以参考[本地https服务器](https://www.notion.so/xjiaxiang/a72a09aa06bb4619b047f52e23d670f9)
