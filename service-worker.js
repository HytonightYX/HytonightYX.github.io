/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "947a2ffdf984bbf7e9bcde598b60026e"
  },
  {
    "url": "assets/css/0.styles.05cc7eb5.css",
    "revision": "7b44f7d70564866c5bff49fa46f3f606"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.726ceeda.js",
    "revision": "f83dd1e12f7d1c6592270d9a6020b300"
  },
  {
    "url": "assets/js/11.cc1411d8.js",
    "revision": "dd61c25dfd088c73544e13b260450eb9"
  },
  {
    "url": "assets/js/12.2d961c16.js",
    "revision": "a280fa157828838e80fcb666394cc188"
  },
  {
    "url": "assets/js/13.4534349c.js",
    "revision": "1989011ad581b159e424d7e5e726c425"
  },
  {
    "url": "assets/js/14.25b1e7f3.js",
    "revision": "89f1a1db5a02d625a7a9852218361e9a"
  },
  {
    "url": "assets/js/15.9a2ebaed.js",
    "revision": "84b6c90b1f16e5a8ff463b0111ef3adc"
  },
  {
    "url": "assets/js/16.2e7b832c.js",
    "revision": "c5a4023284955f5f651fcb08a2260c89"
  },
  {
    "url": "assets/js/17.c3355b63.js",
    "revision": "856249ad086df854bb2f7b60ec2278f9"
  },
  {
    "url": "assets/js/18.853dd12d.js",
    "revision": "ffc16daa0f7afa420a08e4e45acf7b35"
  },
  {
    "url": "assets/js/19.d6bc92e9.js",
    "revision": "b2ec615f09e0ab31675942aa0f47dc42"
  },
  {
    "url": "assets/js/20.79e63114.js",
    "revision": "030b9e60ca61b0666a8083ec76d8c66a"
  },
  {
    "url": "assets/js/21.5b26b4a7.js",
    "revision": "b4123b41b7e8d41d90caf580bf017538"
  },
  {
    "url": "assets/js/22.f545d988.js",
    "revision": "4feebbf05fae745ecd93713c33237416"
  },
  {
    "url": "assets/js/23.1ef08a80.js",
    "revision": "af2853184c381c4adcb4b481003abb46"
  },
  {
    "url": "assets/js/24.52c1504b.js",
    "revision": "7f0dd9385ab152694d4f7d2c06ed031a"
  },
  {
    "url": "assets/js/25.b85c6c7a.js",
    "revision": "6de8eb7b41130df1afb773a2d462bb40"
  },
  {
    "url": "assets/js/26.7e1ce755.js",
    "revision": "20985eeb824cffbcbf4918233019d512"
  },
  {
    "url": "assets/js/27.b76dc2c4.js",
    "revision": "48c72bd4119ea1e0bf17dc3bde1cdd36"
  },
  {
    "url": "assets/js/28.728d4234.js",
    "revision": "32123360eee03e0335a6587c4dd1943c"
  },
  {
    "url": "assets/js/29.b0d656bb.js",
    "revision": "28b82b022ed64b5b002fa0cfe2b4b1b5"
  },
  {
    "url": "assets/js/3.d459fbac.js",
    "revision": "fc400464cd0c13987d38342ba6ed9650"
  },
  {
    "url": "assets/js/30.86cd0a9c.js",
    "revision": "a4f262e1a934d524159078d00ff3de96"
  },
  {
    "url": "assets/js/31.18f13b4e.js",
    "revision": "f439ccfb4f0b367ee16d4509cfcd2078"
  },
  {
    "url": "assets/js/32.83a55f7d.js",
    "revision": "c185e37dc37247cccf82fae4f705d564"
  },
  {
    "url": "assets/js/33.8c2cb966.js",
    "revision": "9223bbf39eaa9c5a2bea7a842166aa51"
  },
  {
    "url": "assets/js/34.749d688a.js",
    "revision": "3befa52dcded750c878ea127fa849003"
  },
  {
    "url": "assets/js/35.0a7990df.js",
    "revision": "1267a32566fda9663c1cec82a0d59273"
  },
  {
    "url": "assets/js/36.8e1c8cef.js",
    "revision": "bd73e49deb8e7049a42d7a15994285b7"
  },
  {
    "url": "assets/js/37.34ec6faf.js",
    "revision": "f720b0753c4739854105f258ed0225e7"
  },
  {
    "url": "assets/js/38.8f5ef488.js",
    "revision": "394e843c236806cd6213bd4962669c26"
  },
  {
    "url": "assets/js/39.d32ba925.js",
    "revision": "5195d51cf6483a906829b07f3ec5e666"
  },
  {
    "url": "assets/js/4.79676fe3.js",
    "revision": "d160c99c3a10cde96e56b6f460d4c78f"
  },
  {
    "url": "assets/js/40.17ab7d00.js",
    "revision": "2c800e1196ca3ceea362416e2a24a73f"
  },
  {
    "url": "assets/js/41.68be4954.js",
    "revision": "165d8cfb95ec3359dfb310da6e1e4032"
  },
  {
    "url": "assets/js/42.da32c428.js",
    "revision": "967cabe7fac6261828d6b381fc34fbc0"
  },
  {
    "url": "assets/js/43.3f651e5b.js",
    "revision": "248424e61d63c9a121c6262bb688e56d"
  },
  {
    "url": "assets/js/44.7e0185a5.js",
    "revision": "9e1878ad8d69fb2d9784d78d3e44b80e"
  },
  {
    "url": "assets/js/45.309ead5b.js",
    "revision": "213b03276ea78b81dd98f24818087992"
  },
  {
    "url": "assets/js/46.6f7aeb62.js",
    "revision": "c2dbae5c25df6aa39259ed35e25fd386"
  },
  {
    "url": "assets/js/47.361ce141.js",
    "revision": "41610efde366c1c52b0b779d54546237"
  },
  {
    "url": "assets/js/48.e6d8a8f3.js",
    "revision": "47db6654beb886d16fcfd49d1827bc30"
  },
  {
    "url": "assets/js/49.33d9f0ac.js",
    "revision": "b7d9ab5abfd33a70be1c2d9b2aa7800c"
  },
  {
    "url": "assets/js/5.51d5e42c.js",
    "revision": "74d7c876731af43a0707651f8e504998"
  },
  {
    "url": "assets/js/50.8b8c70c1.js",
    "revision": "254c5fcc1109f735070b57a5c9784867"
  },
  {
    "url": "assets/js/51.27f1ce7d.js",
    "revision": "5d2da14c1c3b890ee38c7a0f0fdb96ef"
  },
  {
    "url": "assets/js/52.64320734.js",
    "revision": "0987d5651cbb949b2d5387d907054265"
  },
  {
    "url": "assets/js/53.c732a5fa.js",
    "revision": "6c160922abe95a21c611995fb431f300"
  },
  {
    "url": "assets/js/54.541148e9.js",
    "revision": "9149832cd8907534c39d53e8051d0f30"
  },
  {
    "url": "assets/js/55.36cb41de.js",
    "revision": "063ef63dafa1c014604c7a2772a81db0"
  },
  {
    "url": "assets/js/56.14a7959d.js",
    "revision": "65f0bf0f99a12f460411ce55a84560b8"
  },
  {
    "url": "assets/js/57.6a5f2316.js",
    "revision": "618b49b16dbe0a64d2c86496f7dd38b3"
  },
  {
    "url": "assets/js/58.1707cf09.js",
    "revision": "d6beb883025c3884f0fefce224595578"
  },
  {
    "url": "assets/js/59.176b3d1a.js",
    "revision": "9d9131e8f39e3e9a6555c6490a88e711"
  },
  {
    "url": "assets/js/6.da654ace.js",
    "revision": "d5b8479ffc50807434e8af24c7d4c8b3"
  },
  {
    "url": "assets/js/60.fbfd06af.js",
    "revision": "123e787cb82cee7b41e734cfeef332b1"
  },
  {
    "url": "assets/js/61.c2d4f52a.js",
    "revision": "d90d1bf222c85f2b0a080f34653b0ace"
  },
  {
    "url": "assets/js/62.0952ea43.js",
    "revision": "14cdfde572ff8440b76f7861329af912"
  },
  {
    "url": "assets/js/63.40b1da1b.js",
    "revision": "5746d6cf248954fcd7e83e04226aaaae"
  },
  {
    "url": "assets/js/64.a4581053.js",
    "revision": "ca2499ee52b8208c0c1988ce6aa10272"
  },
  {
    "url": "assets/js/65.72c37f85.js",
    "revision": "eaa690487f6e2d9d56178915f37354d4"
  },
  {
    "url": "assets/js/66.33de2ae0.js",
    "revision": "4e31b31d3fb39761483596898fe50469"
  },
  {
    "url": "assets/js/7.aa6f379f.js",
    "revision": "548d4577e8f9b0f8a4da3dee40cc0f4e"
  },
  {
    "url": "assets/js/8.d5676b08.js",
    "revision": "c49f30508cfebf3911d7ca68b25bdb5c"
  },
  {
    "url": "assets/js/9.e418b8d5.js",
    "revision": "8ad24cf6bf0869eebedbbfea7e9b5452"
  },
  {
    "url": "assets/js/app.dcf74adf.js",
    "revision": "d48eda0d8a5e0e81f0ab9938585f4942"
  },
  {
    "url": "assets/js/vendors~notification.7bcb2342.js",
    "revision": "f1da5da4d829aadd97d7df812de33155"
  },
  {
    "url": "fedoc/01-计算机网络/CDN和DNS.html",
    "revision": "6fc83a2da786c2ee95352172745f827b"
  },
  {
    "url": "fedoc/01-计算机网络/HTTP.html",
    "revision": "11bd0e5c4ff3a3737f870af7342a4a3e"
  },
  {
    "url": "fedoc/01-计算机网络/前端缓存最佳实践.html",
    "revision": "387fb13f7b06ea13d4f76d73a4c2a45f"
  },
  {
    "url": "fedoc/02-CSS&HTML/CSS 基础.html",
    "revision": "814a692565fe960a88487f24b324f7e4"
  },
  {
    "url": "fedoc/02-CSS&HTML/HTML.html",
    "revision": "04f9107a92f3bcf4d84ed3240e020f03"
  },
  {
    "url": "fedoc/03-JavaScript/JavaScript基础.html",
    "revision": "530b290056842d35c97f42ff6462dd9d"
  },
  {
    "url": "fedoc/03-JavaScript/JS 继承的八种写法.html",
    "revision": "1e90784e705fec8cf7ed2b7b0ae1f69c"
  },
  {
    "url": "fedoc/03-JavaScript/JS异步编程原理.html",
    "revision": "240a5f06790e6fdf926b6c7a10523b14"
  },
  {
    "url": "fedoc/03-JavaScript/异步-手写async_await.html",
    "revision": "ff443ff30db74d6e9ff2d8c91bc0ec0b"
  },
  {
    "url": "fedoc/03-JavaScript/异步编程专题.html",
    "revision": "d0a804383c3f3841c1ae1b41519a8bbc"
  },
  {
    "url": "fedoc/03-JavaScript/手写系列.html",
    "revision": "4e415ca5fb8cb58eb665b0604cdeeff1"
  },
  {
    "url": "fedoc/03-JavaScript/防抖节流.html",
    "revision": "4d6531480cd1edcb869055da75fbf47f"
  },
  {
    "url": "fedoc/04-游览器与BOM/Cookie-Session ,JWT认证机制.html",
    "revision": "e6a75c4557aa589969263643af6bc45f"
  },
  {
    "url": "fedoc/04-游览器与BOM/Session的概念和安全问题.html",
    "revision": "f8a05cd2cea69c1f252fe28bcad8804d"
  },
  {
    "url": "fedoc/04-游览器与BOM/V8优化之对象中的快属性与慢属性.html",
    "revision": "1ab54acf84098a86f89d6c81498198b5"
  },
  {
    "url": "fedoc/04-游览器与BOM/Web Storage 总结.html",
    "revision": "6e0872356aad5e8c2be256a4d1a5968f"
  },
  {
    "url": "fedoc/04-游览器与BOM/前端安全.html",
    "revision": "82b6410d5f221734b27c5a717ee68beb"
  },
  {
    "url": "fedoc/04-游览器与BOM/前端路由的原理.html",
    "revision": "122f1b1c030ed2341c758215ef95f879"
  },
  {
    "url": "fedoc/04-游览器与BOM/原生事件.html",
    "revision": "64944443a75e82fbd3418c0694688945"
  },
  {
    "url": "fedoc/04-游览器与BOM/跨域.html",
    "revision": "1d52b63c916be331881eaf77422be9af"
  },
  {
    "url": "fedoc/04-游览器与BOM/输入URL1—输入URL和DNS_TCP_HTTP.html",
    "revision": "bf03e695e2c5e49d9addc40d68ef982e"
  },
  {
    "url": "fedoc/04-游览器与BOM/输入URL2—网络篇.html",
    "revision": "3a97779bd292bf6e038aab3d37885118"
  },
  {
    "url": "fedoc/04-游览器与BOM/输入URL3—渲染树形成+原理.html",
    "revision": "335dd3618f0172cc7889b1650ead5cad"
  },
  {
    "url": "fedoc/05-React/React基础.html",
    "revision": "e1f8f81b3a6ef70c78825daf478c72fc"
  },
  {
    "url": "fedoc/05-React/React进阶.html",
    "revision": "5569b8b204024d08b6e5e754204e1af9"
  },
  {
    "url": "fedoc/06-前端工程化/Babel 工作原理.html",
    "revision": "1ab319a14d0f3dfca551e3594c853e7d"
  },
  {
    "url": "fedoc/06-前端工程化/Git.html",
    "revision": "b19be8d2f85b8c72344828a149861558"
  },
  {
    "url": "fedoc/06-前端工程化/webpack 的工作原理.html",
    "revision": "c6eafdd9c5040ec5e6c7df92f92e9f04"
  },
  {
    "url": "fedoc/06-前端工程化/webpack.html",
    "revision": "8c92b8ec20fe0fe3b01e3f79207f8145"
  },
  {
    "url": "fedoc/06-前端工程化/实现一个简易的webpack可选链loader.html",
    "revision": "6032acfda43f7a65a3307dc7431f8bf8"
  },
  {
    "url": "fedoc/06-前端工程化/性能优化总结.html",
    "revision": "2061a619e35c3c69f7dc74165ad88a42"
  },
  {
    "url": "fedoc/07-前端架构/Node秒杀系统架构.html",
    "revision": "cf26dffabedd7d072b4705211cb735aa"
  },
  {
    "url": "fedoc/07-前端架构/前端监控和埋点方案设计.html",
    "revision": "d29b097f533e8cb54d5c765f940db8b2"
  },
  {
    "url": "fedoc/07-前端架构/支付宝架构师眼里的高并发架构.html",
    "revision": "001a29f35bb1c74e3ca43960756f9d08"
  },
  {
    "url": "fedoc/07-前端架构/架构要考虑什么.html",
    "revision": "09d841792bd2928ce7b40ca3296340ea"
  },
  {
    "url": "fedoc/07-前端架构/说说前后端分离.html",
    "revision": "f052e4fcc37452d4abe030306ad17586"
  },
  {
    "url": "fedoc/08-Node/Koa2深度解析.html",
    "revision": "2e1652965821ea707c1df81e1c44285b"
  },
  {
    "url": "fedoc/08-Node/Koa2源码和原理浅析.html",
    "revision": "9159c01482ed8b5ad22fb4ac61a7f1aa"
  },
  {
    "url": "fedoc/08-Node/Node.js多进程底层原理.html",
    "revision": "af02fbfecdc826aef40e4dca4839ab50"
  },
  {
    "url": "fedoc/08-Node/Node.js调试之内存泄漏篇.html",
    "revision": "a62752f9336557e83f401f6af1bab0ef"
  },
  {
    "url": "fedoc/08-Node/初探 Node.js 中的事件循环.html",
    "revision": "060b77586424e422344f38f0343551bc"
  },
  {
    "url": "fedoc/08-Node/操作系统.html",
    "revision": "cc802fb4d82051a9885f8e83ddc5efbf"
  },
  {
    "url": "fedoc/09-算法和数据结构/算法.html",
    "revision": "5ab10c21e3b5731fa742c53078a957f5"
  },
  {
    "url": "fedoc/10-知识广度/200409如何在数据库中存储密码更安全.html",
    "revision": "4971a8bc8a99dc8243cdc2fb2f8f1798"
  },
  {
    "url": "fedoc/10-知识广度/200410如何设计一个良好的API接口.html",
    "revision": "597742068eae62d74dbe013053ced773"
  },
  {
    "url": "fedoc/10-知识广度/200411二维码扫描登录是什么原理.html",
    "revision": "92d7cfa77ae261998e29a1b992ab0d98"
  },
  {
    "url": "fedoc/index.html",
    "revision": "a917c918e23d6f578c97cd9783e5a9c2"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "7226812f83b0e3fd7a49c084061619eb"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  },
  {
    "url": "其他文档/09-面试之道/HR面试题.html",
    "revision": "d2a1721a4bb3f65a8164b4e54f1e21af"
  },
  {
    "url": "其他文档/09-面试之道/个人相关.html",
    "revision": "900efef7e0b99f9131ab22bf330bbed2"
  },
  {
    "url": "其他文档/09-面试之道/盒马.html",
    "revision": "86493fc9a446346e94f589c19f0da826"
  },
  {
    "url": "其他文档/09-面试之道/项目经历.html",
    "revision": "0e17de3284ecfb86699df0868e59eaff"
  },
  {
    "url": "其他文档/每日看文总结.html",
    "revision": "74664dcbb6a23238490d155c5aa382db"
  },
  {
    "url": "其他文档/面试题汇总.html",
    "revision": "23cc9d47f7b9aaec7ed68479f810a5fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
