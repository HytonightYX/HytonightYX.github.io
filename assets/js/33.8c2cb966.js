(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{235:function(t,e,v){"use strict";v.r(e);var _=v(4),a=Object(_.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"url1—输入-url-和游览器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#url1—输入-url-和游览器","aria-hidden":"true"}},[t._v("#")]),t._v(" URL1—输入 URL 和游览器")]),t._v(" "),v("h2",{attrs:{id:"总览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总览","aria-hidden":"true"}},[t._v("#")]),t._v(" 总览")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/mx7tg.png",alt:"image-20200321120456313"}})]),t._v(" "),v("p",[t._v("从图中可以看出，"),v("strong",[t._v("整个过程需要各个进程之间的配合")])]),t._v(" "),v("ul",[v("li",[t._v("浏览器进程主要负责用户交互、子进程管理和文件储存等功能。")]),t._v(" "),v("li",[t._v("网络进程是面向渲染进程和浏览器进程等提供网络下载功能。")]),t._v(" "),v("li",[t._v("渲染进程的主要职责是把从网络下载的 HTML、JavaScript、CSS、图片等资源解析为可以显示和交互的页面。因为渲染进程所有的内容都是通过网络获取的，会存在一些恶意代码利用浏览器漏洞对系统进行攻击，所以运行在渲染进程里面的代码是不被信任的。这也是为什么 Chrome 会让渲染进程运行在安全沙箱里，就是为了保证系统的安全。")])]),t._v(" "),v("p",[t._v("过程可以大致描述如下")]),t._v(" "),v("ul",[v("li",[t._v("首先，"),v("strong",[t._v("浏览器进程")]),t._v("接收到用户输入的 URL 请求，浏览器进程便将该 URL 转发给网络进程。")]),t._v(" "),v("li",[t._v("然后，在"),v("strong",[t._v("网络进程")]),t._v("中发起真正的 URL 请求。"),v("em",[t._v("进入 DNS/TCP/HTTP 领域")])]),t._v(" "),v("li",[t._v("接着"),v("strong",[t._v("网络进程")]),t._v("接收到了响应头数据，便解析响应头数据，并将数据转发给浏览器进程。")]),t._v(" "),v("li",[t._v("浏览器进程接收到网络进程的响应头数据之后，发送“提交导航 (CommitNavigation)”消息到渲染进程；渲染进程接收到“提交导航”的消息之后，便开始准备接收 HTML 数据，接收数据的方式是直接和网络进程建立数据管道；")]),t._v(" "),v("li",[t._v("最后渲染进程会向浏览器进程“确认提交”，这是告诉浏览器进程：“已经准备好接受和解析页面数据了”。")]),t._v(" "),v("li",[t._v("浏览器进程接收到渲染进程“提交文档”的消息之后，便开始移除之前旧的文档，然后更新浏览器进程中的页面状态。")])]),t._v(" "),v("p",[t._v("这其中，"),v("strong",[t._v("用户发出 URL 请求到页面开始解析的这整个过程，就叫做导航")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"一、输入-url-小细节"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、输入-url-小细节","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、输入 URL(小细节)")]),t._v(" "),v("p",[t._v("当用户输入 URL 并键入回车之后，这意味着当前页面即将要被替换成新的页面，不过在这个流程继续之前，浏览器还给了当前页面一次执行 "),v("code",[t._v("beforeunload")]),t._v(" 事件的机会，"),v("code",[t._v("beforeunload")]),t._v(" 事件允许页面在退出之前执行一些数据清理操作，还可以询问用户是否要离开当前页面，比如当前页面可能有未提交完成的表单等情况，因此用户可以通过 "),v("code",[t._v("beforeunload")]),t._v(" 事件来"),v("strong",[t._v("取消导航")]),t._v("，让浏览器不再执行任何后续工作。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/sg7b7.png-style1",alt:"image-20200321122437698"}})]),t._v(" "),v("p",[t._v("当前页面没有监听 beforeunload 事件或者同意了继续后续流程，那么浏览器便进入下图的状态：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/0sq9q.png-style1",alt:"image-20200321122521400"}})]),t._v(" "),v("p",[t._v("从图中可以看出，当浏览器刚开始加载一个地址之后，标签页上的图标便进入了加载状态。但此时图中页面显示的依然是之前打开的页面内容，并没立即替换为极客时间的页面。因为需要等待提交文档阶段，页面内容才会被替换。")]),t._v(" "),v("h2",{attrs:{id:"二、url-请求过程（缓存、dns、tls、tcp、http）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、url-请求过程（缓存、dns、tls、tcp、http）","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、URL 请求过程（缓存、DNS、TLS、TCP、HTTP）")]),t._v(" "),v("p",[t._v("接下来，便进入了页面资源请求过程。这时，"),v("strong",[t._v("浏览器进程会通过进程间通信（IPC）把 URL 请求发送至网络进程")]),t._v("，网络进程接收到 URL 请求后，会在这里发起真正的 URL 请求流程。那具体流程是怎样的呢？")]),t._v(" "),v("p",[t._v("首先，网络进程会查找"),v("strong",[t._v("本地缓存")]),t._v("是否缓存了该资源。如果有缓存资源，那么直接返回资源给浏览器进程；如果在缓存中没有查找到资源，那么直接进入网络请求流程。这请求前的第一步是要进行 DNS 解析，以获取请求域名的服务器 IP 地址。如果请求协议是 HTTPS，那么还需要建立 TLS 连接。")]),t._v(" "),v("p",[t._v("接下来就是利用 IP 地址和服务器"),v("strong",[t._v("建立 TCP 连接")]),t._v("。连接建立之后，浏览器端会构建请求行、请求头等信息，并把和该域名相关的 Cookie 等数据附加到请求头中，然后向服务器发送构建的请求信息。")]),t._v(" "),v("p",[t._v("服务器接收到请求信息后，会根据请求信息生成响应数据（包括响应行、响应头和响应体等信息），并发给网络进程。等网络进程接收了响应行和响应头之后，就开始解析响应头的内容了。（为了方便讲述，下面我将服务器返回的响应头和响应行统称为响应头。）")]),t._v(" "),v("h4",{attrs:{id:"（1）重定向"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#（1）重定向","aria-hidden":"true"}},[t._v("#")]),t._v(" （1）重定向")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/bk6tl.png-style1",alt:"image-20200321123354737"}})]),t._v(" "),v("p",[t._v("从图中可以看出，极客时间服务器会通过重定向的方式把所有 HTTP 请求转换为 HTTPS 请求。也就是说你使用 HTTP 向极客时间服务器请求时，服务器会返回一个包含有 301 或者 302 状态码响应头，并把响应头的 Location 字段中填上 HTTPS 的地址，这就是告诉了浏览器要重新导航到新的地址上。")]),t._v(" "),v("p",[t._v("好了，以上是重定向内容的介绍。现在你应该理解了，"),v("strong",[t._v("在导航过程中，如果服务器响应行的状态码包含了 301、302 一类的跳转信息，浏览器会跳转到新的地址继续导航；如果响应行是 200，那么表示浏览器可以继续处理该请求")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"（2）响应数据类型处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#（2）响应数据类型处理","aria-hidden":"true"}},[t._v("#")]),t._v(" （2）响应数据类型处理")]),t._v(" "),v("p",[t._v("在处理了跳转信息之后，我们继续导航流程的分析。URL 请求的数据类型，有时候是一个下载类型，有时候是正常的 HTML 页面，那么浏览器是如何区分它们呢？")]),t._v(" "),v("p",[t._v("答案是 Content-Type。"),v("strong",[t._v("Content-Type 是 HTTP 头中一个非常重要的字段， 它告诉浏览器服务器返回的响应体数据是什么类型，然后浏览器会根据 Content-Type 的值来决定如何显示响应体的内容")]),t._v("。")]),t._v(" "),v("p",[t._v("所以，不同 Content-Type 的后续处理流程也截然不同。"),v("strong",[t._v("如果 Content-Type 字段的值被浏览器判断为下载类型，那么该请求会被提交给浏览器的下载管理器，同时该 URL 请求的导航流程就此结束。但如果是 HTML，那么浏览器则会继续进行导航流程")]),t._v("。由于 Chrome 的页面渲染是运行在渲染进程中的，所以接下来就需要准备渲染进程了。")]),t._v(" "),v("h2",{attrs:{id:"三、准备渲染进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、准备渲染进程","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、准备渲染进程")]),t._v(" "),v("p",[t._v("默认情况下，Chrome 会为每个页面分配一个渲染进程，也就是说，每打开一个新页面就会配套创建一个新的渲染进程。但是，也有一些例外，在某些情况下，浏览器会让多个页面直接运行在同一个渲染进程中。")]),t._v(" "),v("p",[t._v("我们看下图的 Chrome 的任务管理器截图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/u6x7x.png-style1",alt:"image-20200321143335111"}})]),t._v(" "),v("p",[t._v("从图中可以看出，打开的这三个页面都是运行在同一个渲染进程中，进程 ID 是 23601。")]),t._v(" "),v("p",[v("strong",[t._v("那什么情况下多个页面会同时运行在一个渲染进程中呢")]),t._v("？")]),t._v(" "),v("p",[t._v("要解决这个问题，我们就需要先了解下什么是"),v("strong",[t._v("同一站点（same-site）")]),t._v("。具体地讲，我们将“同一站点”定义为注册的域名(registered domain name)（例如，baidu.com, google.com）加上协议（例如，https:// 或者 http://），还包含了该根域名下的所有子域名和不同的端口，比如下面这三个：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("https://time.geekbang.org\nhttps://www.geekbang.org\nhttps://www.geekbang.org:8080\n")])])]),v("p",[t._v("它们都是属于同一站点，因为它们的协议都是 HTTPS，而且二级域名也都是 geekbang.org。")]),t._v(" "),v("blockquote",[v("p",[t._v('Concretely, we define a "site" as a registered domain name (e.g., google.com or bbc.co.uk) plus a scheme (e.g., https://). This is similar to the origin defined by the Same Origin Policy, but it groups subdomains (e.g., mail.google.com and docs.google.com) and ports (e.g., http://foo.com:8080) into the same site. This is necessary to allow pages that are in different subdomains or ports of a site to access each other via Javascript, which is permitted by the Same Origin Policy if they set their document.domain variables to be identical.')])]),t._v(" "),v("p",[t._v("Chrome 的默认策略是，"),v("strong",[t._v("每个标签对应一个渲染进程")]),t._v("。"),v("strong",[t._v("但如果从一个页面打开了另一个新页面，而新页面和当前页面属于同一站点的话，那么新页面会复用父页面的渲染进程")]),t._v("。这个策略在 chromium 官方文档里叫 "),v("code",[t._v("process-per-site-instance")]),t._v("。")]),t._v(" "),v("p",[t._v("那若新页面和当前页面不属于同一站点，情况又会发生什么样的变化呢？比如我通过极客邦页面里的链接打开 InfoQ 的官网（https://www.infoq.cn/ ）， 因为 infoq.cn 和 geekbang.org 不属于同一站点，所以 infoq.cn 会使用一个新的渲染进程。")]),t._v(" "),v("p",[t._v("总结来说，打开一个新页面采用的"),v("strong",[t._v("渲染进程策略")]),t._v("就是：")]),t._v(" "),v("ul",[v("li",[t._v("通常情况下，打开新的页面都会使用单独的渲染进程；如果从 A 页面打开 B 页面，且 A 和 B 都属于同一站点的话，那么 B 页面复用 A 页面的渲染进程；")]),t._v(" "),v("li",[t._v("如果是其他情况，浏览器进程则会为 B 创建一个新的渲染进程。")])]),t._v(" "),v("p",[t._v("渲染进程准备好之后，还不能立即进入文档解析状态，因为此时的文档数据还在网络进程中，并没有提交给渲染进程，所以下一步就进入了提交文档阶段。")]),t._v(" "),v("h2",{attrs:{id:"四、提交文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、提交文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、提交文档")]),t._v(" "),v("p",[t._v("所谓提交文档，就是指浏览器进程将网络进程接收到的 HTML 数据提交给渲染进程，具体流程是这样的：")]),t._v(" "),v("ul",[v("li",[t._v("首先当浏览器进程接收到网络进程的响应头数据之后，便向渲染进程发起“提交文档”的消息；")]),t._v(" "),v("li",[t._v("渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“管道”；")]),t._v(" "),v("li",[t._v("等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程；")]),t._v(" "),v("li",[t._v("浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。")])]),t._v(" "),v("p",[t._v("这也就解释了为什么在浏览器的地址栏里面输入了一个地址后，之前的页面没有立马消失，而是要加载一会儿才会更新页面。")]),t._v(" "),v("p",[t._v("其中，当浏览器进程"),v("strong",[t._v("确认提交")]),t._v("之后，更新内容如下图所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/rjrjh.png-style1",alt:"image-20200321144500954"}})]),t._v(" "),v("p",[t._v("这也就解释了为什么在浏览器的地址栏里面输入了一个地址后，之前的页面没有立马消失，而是要加载一会儿才会更新页面。")]),t._v(" "),v("p",[t._v("到这里，一个完整的导航流程就“走”完了，这之后就要进入渲染阶段了。")])])},[],!1,null,null,null);e.default=a.exports}}]);