(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{231:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("blockquote",[a("p",[t._v("涉及面试题：什么是跨域？为什么浏览器要使用同源策略？你有几种方式可以解决跨域问题？了解预检请求嘛？")])]),t._v(" "),a("ul",[a("li",[t._v("因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，"),a("code",[t._v("Ajax")]),t._v(" 请求会失败。")]),t._v(" "),a("li",[t._v("那么是出于什么安全考虑才会引入这种机制呢？ 其实主要是用来防止 "),a("code",[t._v("CSRF")]),t._v(" 攻击的。简单点说，"),a("code",[t._v("CSRF")]),t._v(" 攻击是利用用户的登录态发起恶意请求。")]),t._v(" "),a("li",[t._v("也就是说，没有同源策略的情况下，"),a("code",[t._v("A")]),t._v(" 网站可以被任意其他来源的 "),a("code",[t._v("Ajax")]),t._v(" 访问到内容。如果你当前 "),a("code",[t._v("A")]),t._v(" 网站还存在登录态，那么对方就可以通过 "),a("code",[t._v("Ajax")]),t._v(" 获得你的任何信息。当然跨域并不能完全阻止 "),a("code",[t._v("CSRF")]),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[t._v("然后我们来考虑一个问题，请求跨域了，那么请求到底发出去没有？ 请求必然是发出去了，但是浏览器拦截了响应。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 "),a("code",[t._v("Ajax")]),t._v("就不会。因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，"),a("code",[t._v("Ajax")]),t._v(" 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 "),a("code",[t._v("CSRF")]),t._v("，因为请求毕竟是发出去了。")])]),t._v(" "),a("p",[t._v("接下来我们将来学习几种常见的方式来解决跨域的问题")]),t._v(" "),a("h2",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp","aria-hidden":"true"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("JSONP")]),t._v(" 的原理很简单，就是利用 "),a("code",[t._v("标签没有跨域限制的漏洞。通过")]),t._v("标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://domain/api?param1=a&param2=b&callback=jsonp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("JSONP")]),t._v(" 使用简单且兼容性不错，但是只限于 "),a("code",[t._v("get")]),t._v(" 请求。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在开发中可能会遇到多个 "),a("code",[t._v("JSONP")]),t._v(" 请求的回调函数名是相同的，这时候就需要自己封装一个 "),a("code",[t._v("JSONP")]),t._v("，以下是简单实现")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jsonpCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("async "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("jsonpCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    success "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xxx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors","aria-hidden":"true"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("CORS")]),t._v(" 需要浏览器和后端同时支持。"),a("code",[t._v("IE 8")]),t._v(" 和 "),a("code",[t._v("9")]),t._v(" 需要通过 "),a("code",[t._v("XDomainRequest")]),t._v(" 来实现。")]),t._v(" "),a("li",[t._v("浏览器会自动进行 "),a("code",[t._v("CORS")]),t._v(" 通信，实现 "),a("code",[t._v("CORS")]),t._v(" 通信的关键是后端。只要后端实现了 "),a("code",[t._v("CORS")]),t._v("，就实现了跨域。")]),t._v(" "),a("li",[t._v("服务端设置 "),a("code",[t._v("Access-Control-Allow-Origin")]),t._v(" 就可以开启 "),a("code",[t._v("CORS")]),t._v("。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。 虽然设置 "),a("code",[t._v("CORS")]),t._v("和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为简单请求和复杂请求。")])]),t._v(" "),a("p",[a("strong",[t._v("简单请求")])]),t._v(" "),a("blockquote",[a("p",[t._v("以 "),a("code",[t._v("Ajax")]),t._v(" 为例，当满足以下条件时，会触发简单请求")])]),t._v(" "),a("ol",[a("li",[t._v("使用下列方法之一：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("GET")])]),t._v(" "),a("li",[a("code",[t._v("HEAD")])]),t._v(" "),a("li",[a("code",[t._v("POST")])])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Content-Type")]),t._v(" 的值仅限于下列三者之一：")])]),t._v(" "),a("ul",[a("li",[t._v("text/plain")]),t._v(" "),a("li",[a("code",[t._v("multipart/form-data")])]),t._v(" "),a("li",[a("code",[t._v("application/x-www-form-urlencoded")])])]),t._v(" "),a("blockquote",[a("p",[t._v("请求中的任意 "),a("code",[t._v("XMLHttpRequestUpload")]),t._v(" 对象均没有注册任何事件监听器； "),a("code",[t._v("XMLHttpRequestUpload")]),t._v(" 对象可以使用 "),a("code",[t._v("XMLHttpRequest.upload")]),t._v(" 属性访问")])]),t._v(" "),a("p",[a("strong",[t._v("复杂请求")])]),t._v(" "),a("blockquote",[a("p",[t._v("对于复杂请求来说，首先会发起一个预检请求，该请求是 "),a("code",[t._v("option")]),t._v(" 方法的，通过该请求来知道服务端是否允许跨域请求。")])]),t._v(" "),a("p",[t._v("对于预检请求来说，如果你使用过 "),a("code",[t._v("Node")]),t._v(" 来设置 "),a("code",[t._v("CORS")]),t._v(" 的话，可能会遇到过这么一个坑。")]),t._v(" "),a("p",[t._v("以下以 "),a("code",[t._v("express")]),t._v("框架举例")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUT, GET, POST, DELETE, OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("该请求会验证你的 "),a("code",[t._v("Authorization")]),t._v(" 字段，没有的话就会报错。")]),t._v(" "),a("li",[t._v("当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 "),a("code",[t._v("next")]),t._v(" 方法，因为预检请求并不包含 "),a("code",[t._v("Authorization")]),t._v(" 字段，所以服务端会报错。")])]),t._v(" "),a("blockquote",[a("p",[t._v("想解决这个问题很简单，只需要在回调中过滤 "),a("code",[t._v("option")]),t._v(" 方法即可")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),t._v("\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Length'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"cors-如何跨域发送-cookie-？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-如何跨域发送-cookie-？","aria-hidden":"true"}},[t._v("#")]),t._v(" CORS 如何跨域发送 Cookie ？")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://harttle.land/2016/12/28/cors-with-cookie.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("客户端方面")])]),t._v(" "),a("ul",[a("li",[t._v("设置"),a("code",[t._v("withCredentials")]),t._v("为"),a("code",[t._v("true")]),t._v("即可让该跨域请求携带 Cookie。 注意携带的是目标页面所在域的 Cookie。")])]),t._v(" "),a("p",[a("strong",[t._v("服务端方面")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("设置"),a("a",{attrs:{href:"https://www.w3.org/TR/cors/#access-control-allow-credentials-response-header",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Access-Control-Allow-Credentials")]),a("OutboundLink")],1),t._v("响应头为"),a("code",[t._v("true")]),t._v("， 即可允许跨域请求携带 Cookie。")])]),t._v(" "),a("li",[a("p",[t._v("除了"),a("code",[t._v("Access-Control-Allow-Credentials")]),t._v("之外，跨域发送 Cookie 还要求 "),a("code",[t._v("Access-Control-Allow-Origin")]),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("不允许使用通配符"),a("OutboundLink")],1),t._v("。 事实上不仅不允许通配符，而且"),a("a",{attrs:{href:"https://www.w3.org/TR/2010/WD-cors-20100727/#resource-sharing-check0",target:"_blank",rel:"noopener noreferrer"}},[t._v("只能指定单一域名"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("因此，服务器可能需要维护一个接受 Cookie 的 Origin 列表， 验证 "),a("code",[t._v("Origin")]),t._v(" 请求头字段后直接将其设置为"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("的值")])])])])},[],!1,null,null,null);s.default=e.exports}}]);