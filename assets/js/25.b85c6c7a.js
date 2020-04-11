(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{224:function(e,s,a){"use strict";a.r(s);var t=a(4),o=Object(t.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"浅谈-cookie-session-、jwt-两种身份认证机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅谈-cookie-session-、jwt-两种身份认证机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 浅谈 Cookie-Session 、Jwt 两种身份认证机制")]),e._v(" "),a("p",[e._v("https://juejin.im/post/5d567e09e51d453c12504dfc")]),e._v(" "),a("h2",{attrs:{id:"跨域认证的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域认证的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 跨域认证的问题")]),e._v(" "),a("p",[e._v("互联网服务离不开用户认证。一般流程是下面这样。")]),e._v(" "),a("blockquote",[a("p",[e._v("1、用户向服务器发送用户名和密码。")]),e._v(" "),a("p",[e._v("2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。")]),e._v(" "),a("p",[e._v("3、服务器向用户返回一个 session_id，写入用户的 Cookie。")]),e._v(" "),a("p",[e._v("4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。")]),e._v(" "),a("p",[e._v("5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。")])]),e._v(" "),a("p",[e._v("这种模式的问题在于，扩展性（scaling）不好。单机当然没有问题，如果是服务器集群，或者是跨域的服务导向架构，就要求 session 数据共享，每台服务器都能够读取 session。")]),e._v(" "),a("p",[e._v("举例来说，A 网站和 B 网站是同一家公司的关联服务。现在要求，用户只要在其中一个网站登录，再访问另一个网站就会自动登录，请问怎么实现？")]),e._v(" "),a("p",[e._v("一种解决方案是 session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。")]),e._v(" "),a("p",[e._v("另一种方案是服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表。")]),e._v(" "),a("h2",{attrs:{id:"http-是无状态的协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-是无状态的协议","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP 是无状态的协议")]),e._v(" "),a("p",[e._v("我们都知道 HTTP 是无状态（"),a("em",[e._v("stateless")]),e._v("）的协议：HTTP 对于事务处理没有记忆能力，不对请求和响应之间的通信状态进行保存。 使用 HTTP 协议，每当有新的请求发送时，就会有对应的新响应产生。协议本身并不保留之前一切的请求或响应报文的信息。这是"),a("strong",[e._v("为了更快地处理大量事务，确保协议的可伸缩性")]),e._v("，而特意把 HTTP 协议设计成如此简单的。")]),e._v(" "),a("p",[e._v("可是，随着 Web 的发展，早期这种无状态的特性却带来了很多不方便性，比如说用户登录新浪微博，在登录页输入用户名、密码之后进入首页，但是由于 HTTP 是无状态的，HTTP 并不知道上一次的 HTTP 请求是否通过了验证，更无法得知当前用户的具体信息。")]),e._v(" "),a("p",[e._v("最简单的解决方案就是在所有的请求里面都带上用户名和密码，这样虽然可行，但是大大加重了服务器的负担（对于每个 request 都需要到数据库验证），而且用户也要每进入一个页面输入一次密码，毫无用户体验可言。")]),e._v(" "),a("p",[e._v("为此，引入了各种身份认证机制，这里说一下 Cookie-Session 和 Jwt 机制。")]),e._v(" "),a("h2",{attrs:{id:"cookie-session-机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session-机制","aria-hidden":"true"}},[e._v("#")]),e._v(" Cookie-Session 机制")]),e._v(" "),a("h3",{attrs:{id:"什么是-cookie？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-cookie？","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是 Cookie？")]),e._v(" "),a("p",[a("strong",[e._v("Cookie 是由 HTTP 服务器设置的，保存在浏览器中的小型文本文件")]),e._v("，其内容为一系列的键值对。在 Chrome 中，通过开发者工具 -> Application -> Cookies 可查看")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gczhphbs8hj311q0fhjx3.jpg",alt:"image-20200319200359701"}})]),e._v(" "),a("p",[e._v("这里简单介绍一下一些字段意思：")]),e._v(" "),a("p",[e._v("Expires：Cookie 的过期时间，默认过期时间为用户关闭浏览器时。")]),e._v(" "),a("p",[e._v("HttpOnly：指示浏览器不要在除了 HTTP（或者 HTTPS)请求之外暴露 Cookie。通过 JavaScript 脚本无法访问到 Cookie，能有效防止 "),a("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[e._v("XSS 攻击"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Secure：设置 Cookie 的 Secure 属性为 "),a("code",[e._v("true")]),e._v(" 时，意味着 Cookie 通信只限于加密传输，指示浏览器仅仅在通过安全/加密连接才能使用 Cookie。也就是说 Cookie 只有在 HTTPS 协议下才能上传到服务器，而 HTTP 协议下是无法上传的。")]),e._v(" "),a("h4",{attrs:{id:"cookie-传递过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-传递过程","aria-hidden":"true"}},[e._v("#")]),e._v(" Cookie 传递过程")]),e._v(" "),a("ol",[a("li",[e._v("浏览器向某个 URL 发送请求")]),e._v(" "),a("li",[e._v("对应的服务器收到该 HTTP 请求，生成要发给浏览器的 HTTP 响应")]),e._v(" "),a("li",[e._v("在响应头中加入 "),a("code",[e._v("Set-Cookie")]),e._v(" 字段，值为要设置的的Cookie")]),e._v(" "),a("li",[e._v("浏览器收到来自服务器的 HTTP 响应")]),e._v(" "),a("li",[e._v("浏览器在响应头中发现了 "),a("code",[e._v("Set-Cookie")]),e._v(" 字段，就会将该字段的值保存在内存或者是硬盘中。")]),e._v(" "),a("li",[e._v("当下一次向该服务器发送 HTTP 请求时，会将服务器设置的 Cookie 附加在 HTTP 请求的字段 "),a("code",[e._v("Cookie")]),e._v(" 中。")]),e._v(" "),a("li",[e._v("服务器收到这个 HTTP 请求之后，发现请求头中有 "),a("code",[e._v("Cookie")]),e._v(" 字段，就知道了已经处理过这个用户的请求了。")]),e._v(" "),a("li",[e._v("过期的 Cookie 会被删除")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/00831rSTly1gczhpp5wopj30b405jjrf.jpg",alt:"image-20200319200414265"}})]),e._v(" "),a("h3",{attrs:{id:"什么是-session？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-session？","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是 Session？")]),e._v(" "),a("p",[e._v("相对于保存在浏览器中的 Cookie，Session 是存储在服务器端的，避免了在客户端中储存敏感数据。并且存取方式不同，Cookie 只能保存 ASCII 字符串，例如需要存取 Unicode 字符或者二进制数据，需要先进行编码。而Session中能够存取任何类型的数据。Session 一般配合 Cookie 使用，也就是接下来要说到的 Cookie-Session 机制。")]),e._v(" "),a("h3",{attrs:{id:"基于-cookie-session-身份验证机制的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-cookie-session-身份验证机制的过程","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于 Cookie-Session 身份验证机制的过程")]),e._v(" "),a("ol",[a("li",[e._v("用户输入登录信息")]),e._v(" "),a("li",[e._v("服务端验证登录信息是否正确，如果正确就在服务器端为这个用户创建一个 Session，并把 Session 存入数据库")]),e._v(" "),a("li",[e._v("服务器端会向客户端返回带有 sessionID 的 Cookie")]),e._v(" "),a("li",[e._v("客户端接收到服务器端发来的请求之后，看见响应头中的 "),a("code",[e._v("Set-Cookie")]),e._v(" 字段，将 Cookie 保存起来")]),e._v(" "),a("li",[e._v("接下来的请求中都会带上这个 Cookie，服务器将 sessionID 和 数据库中的相匹配，如果有效则处理该请求")]),e._v(" "),a("li",[e._v("如果用户登出，Session 会在客户端和服务器端都被销毁")])]),e._v(" "),a("h2",{attrs:{id:"session-cookie-机制的缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session-cookie-机制的缺陷","aria-hidden":"true"}},[e._v("#")]),e._v(" Session-Cookie 机制的缺陷")]),e._v(" "),a("ol",[a("li",[e._v("扩展性不好，当拥有多台服务器的情况下，如何共享 Session 会成为一个问题，也就是说，用户第一个访问的时候是服务器 A，而第二个请求被转发给了服务器 B，那服务器 B 无法得知其状态。（举例来说，A 网站和 B 网站是同一家公司的关联服务。用户只要在其中一个网站登录，再访问另一个网站自动登录）")]),e._v(" "),a("li",[e._v("安全性不好，攻击者可以利用本地 Cookie 进行欺骗和 CSRF 攻击。")]),e._v(" "),a("li",[e._v("Session 保存在服务器端，如果短时间内有大量用户，会影响服务器性能。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c23993de51d457b8c1f4ee1#heading-11",target:"_blank",rel:"noopener noreferrer"}},[e._v("跨域问题"),a("OutboundLink")],1),e._v("，Cookie 属于同源策略限制的内容之一。")])]),e._v(" "),a("h2",{attrs:{id:"jwt-机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-机制","aria-hidden":"true"}},[e._v("#")]),e._v(" Jwt 机制")]),e._v(" "),a("h3",{attrs:{id:"jwt-组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-组成","aria-hidden":"true"}},[e._v("#")]),e._v(" JWT 组成")]),e._v(" "),a("p",[e._v("JWT 由三个部分组成：header、payload、signature 每个部分中间使用 "),a("code",[e._v(".")]),e._v(" 来分隔，其中，header 和 payload 使用 Base64URL 进行编码：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("base64UrlEncode(header).base64UrlEncode(payload).signature\n")])])]),a("h4",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header","aria-hidden":"true"}},[e._v("#")]),e._v(" header")]),e._v(" "),a("p",[e._v("header 部分是一个 JSON 对象，用来描述 JWT 的元数据：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "typ": "JWT",   //  表示对象是一个 JWT\n  "alg": "HS256"  //  表示使用哪种 Hash 算法来创建签名，这里是 HMAC-SHA256\n}\n复制代码\n')])])]),a("h4",{attrs:{id:"payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload","aria-hidden":"true"}},[e._v("#")]),e._v(" payload")]),e._v(" "),a("p",[e._v("payload 部分也是一个 JSON 对象，实际需要传递的数据被存放在这里。我们除了使用"),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/JSON_Web_Token#Standard_fields",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方提供的七个字段"),a("OutboundLink")],1),e._v("之外，也可以使用自定义的私有字段。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "sub": "title",\n  "name": "Yeoman"\n}\n复制代码\n')])])]),a("p",[a("strong",[e._v("JWT 默认是不加密的，任何人都可以读到，所以不要把秘密信息放在这个部分。")])]),e._v(" "),a("h4",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature","aria-hidden":"true"}},[e._v("#")]),e._v(" signature")]),e._v(" "),a("p",[e._v("signature 是对前两个部分的签名，防止数据被篡改。")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("base64urlEncode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" header "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("base64urlEncode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" payload "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nsignature "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("Hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" secret "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("使用 Base64URL 编码的 header 和 payload 中间用 "),a("code",[e._v(".")]),e._v(" 隔开，再使用 header 中指定的 Hash 算法，加上密钥对这个字符串进行 Hash 得到 signature")]),e._v(" "),a("h3",{attrs:{id:"工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 工作流程")]),e._v(" "),a("ol",[a("li",[e._v("前端将自己的用户名和密码发送到后端的接口")]),e._v(" "),a("li",[e._v("后端核对用户名和密码之后，将用户的一些信息作为 payload，生成 JWT")]),e._v(" "),a("li",[e._v("后端将 JWT 作为登录成功的返回结果返回给前端。前端可以将其结果保存在 localStorage/sessionStorage 中，登出时删除 JWT 即可。（最好不要保存在 Cookie 中，用了 Cookie 就不能设置 HTTPonly，并且存在跨域问题）")]),e._v(" "),a("li",[e._v("每一次请求都将 JWT 放在 HTTP 请求头中的 "),a("code",[e._v("Authorization")]),e._v(" 位，这样相比放在 Cookie 中可以跨域。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Authorization: Bearer <token>\n")])])]),a("ol",[a("li",[e._v("服务器解码 JWT，如果 token 有效，那么处理这个请求")]),e._v(" "),a("li",[e._v("用户登出，在客户端删除 token 即可，与服务端无关")])]),e._v(" "),a("h2",{attrs:{id:"jwt-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-特点","aria-hidden":"true"}},[e._v("#")]),e._v(" JWT 特点")]),e._v(" "),a("ol",[a("li",[e._v("JWT 默认是不加密的")]),e._v(" "),a("li",[e._v("JWT 的目的是用来验证来源可靠性，并不是保护数据和防止未经授权的访问。（可以类比成一张电影票，只能验证电影票是否是真的，电影票也有一些基本信息，但是他人也可以使用你的电影票，如果可能的话）一旦暴露，任何人都可以获得权限。为了减少盗用，JWT 的有效期应该设置得比较短，对于一些比较重要的权限，使用时应该再次对用户进行认证。")]),e._v(" "),a("li",[e._v("最大的缺点是 token 过期处理问题，由于服务器不保存 Session 状态，因此无法在使用过程中废止或者更改权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。")])]),e._v(" "),a("h2",{attrs:{id:"复习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复习","aria-hidden":"true"}},[e._v("#")]),e._v(" 复习")]),e._v(" "),a("p",[e._v("这里再次复习一下相关知识：")]),e._v(" "),a("h3",{attrs:{id:"同源策略限制的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略限制的内容","aria-hidden":"true"}},[e._v("#")]),e._v(" 同源策略限制的内容")]),e._v(" "),a("ol",[a("li",[e._v("Cookie、LocalStorage、SessionStorage、IndexedDB 等存储性内容")]),e._v(" "),a("li",[e._v("DOM 节点")]),e._v(" "),a("li",[e._v("Ajax 发送请求后，结果被浏览器拦截")])]),e._v(" "),a("h3",{attrs:{id:"cookie-和-session-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session-的区别","aria-hidden":"true"}},[e._v("#")]),e._v(" Cookie 和 Session 的区别")]),e._v(" "),a("ol",[a("li",[e._v("存取方式不同：Cookie 只能保存 ASCII 字符串，例如需要存取 Unicode 字符或者二进制数据，需要先进行编码。而Session中能够存取任何类型的数据")]),e._v(" "),a("li",[e._v("隐私策略不同：Cookie 存储在浏览器中，Session 存储在服务器上。")]),e._v(" "),a("li",[e._v("服务器压力不同：Session 是保管在服务器上的，每个用户都会产生一个 Session 。假如并发访问的用户十分\n多，会产生大量的 Session ，耗费大量的内存。")])]),e._v(" "),a("h3",{attrs:{id:"分布式情况下的session和token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式情况下的session和token","aria-hidden":"true"}},[e._v("#")]),e._v(" 分布式情况下的session和token")]),e._v(" "),a("p",[e._v("我们已经知道session时有状态的，一般存于服务器内存或硬盘中，当服务器采用分布式或集群时，session就会面对负载均衡问题。")]),e._v(" "),a("p",[e._v("在互联网公司为了可以支撑更大的流量，后端往往需要多台服务器共同来支撑前端用户请求，那如果用户在 A 服务器登录了，第二次请求跑到服务 B 就会出现登录失效问题。")]),e._v(" "),a("p",[e._v("分布式 Session 一般会有以下几种解决方案：")]),e._v(" "),a("ul",[a("li",[e._v("Nginx ip_hash 策略，服务端使用 Nginx 代理，每个请求按访问 IP 的 hash 分配，这样来自同一 IP 固定访问一个后台服务器，避免了在服务器 A 创建 Session，第二次分发到服务器 B 的现象。")]),e._v(" "),a("li",[e._v("Session 复制，任何一个服务器上的 Session 发生改变（增删改），该节点会把这个 Session 的所有内容序列化，然后广播给所有其它节点。")]),e._v(" "),a("li",[e._v("共享 Session，服务端无状态话，将用户的 Session 等信息使用缓存中间件来统一管理，保障分发到每一个服务器的响应结果都一致。")])]),e._v(" "),a("p",[e._v("建议采用第三种方案。")]),e._v(" "),a("p",[e._v("而token是无状态的，token字符串里就保存了所有的用户信息")]),e._v(" "),a("ul",[a("li",[e._v("客户端登陆传递信息给服务端，服务端收到后把用户信息加密（token）传给客户端，客户端将token存放于localStroage等容器中。客户端每次访问都传递token，服务端解密token，就知道这个用户是谁了。通过cpu加解密，服务端就不需要存储session占用存储空间，就很好的解决负载均衡多服务器的问题了。这个方法叫做[JWT(Json Web Token)](https://huanqiang.wang/2017/12/28/JWT 介绍/)")])])])},[],!1,null,null,null);s.default=o.exports}}]);