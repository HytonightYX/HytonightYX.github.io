(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{241:function(a,t,s){"use strict";s.r(t);var e=s(4),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"性能优化总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能优化总结")]),a._v(" "),s("ul",[s("li",[a._v("静态资源优化（bundle-analizer 分析）和网络层优化\n"),s("ul",[s("li",[a._v("(webpack)路由懒加载 React(二次封装lazy)，Webpack，require.ensure()")]),a._v(" "),s("li",[a._v("(webpack)代码分割，第三方库和业务代码")]),a._v(" "),s("li",[a._v("(webpack)开启 production 模式，打开 tree-shaking")]),a._v(" "),s("li",[a._v("(webpack)拆分CSS，优化CSS")]),a._v(" "),s("li",[a._v("(webpack)scope hosting。合并函数，减少作用域")]),a._v(" "),s("li",[a._v("图片懒加载(提前占位) + (webpack)小图片base64 + 首页图片降质+七牛云对象存储")]),a._v(" "),s("li",[a._v("Nginx 的 Gzip 压缩")]),a._v(" "),s("li",[a._v("(webpack) externals 第三方库通过 CDN 引入（React，Mobx...）")]),a._v(" "),s("li",[a._v("AntD 的图标引入问题")]),a._v(" "),s("li",[a._v("DNS预解析")]),a._v(" "),s("li",[a._v("升级服务器！！！")]),a._v(" "),s("li",[s("em",[a._v("大组件预加载")])]),a._v(" "),s("li",[s("em",[a._v("图片webp格式")])])])]),a._v(" "),s("li",[a._v("缓存\n"),s("ul",[s("li",[a._v("设置 contenthash，提高缓存命中率")]),a._v(" "),s("li",[a._v("NGINX 配置静态文件（js，css，图片）缓存时间为max-age=31536000")])])]),a._v(" "),s("li",[a._v("渲染层优化\n"),s("ul",[s("li",[a._v("良好的组件设计")]),a._v(" "),s("li",[a._v("良好的state，props的设计")]),a._v(" "),s("li",[a._v("合理的SCU，设置纯组件")])])]),a._v(" "),s("li",[a._v("webpack 构建优化\n"),s("ul",[s("li",[a._v("减少打包时间 Happypack——将 loader 由单进程转为多进程")]),a._v(" "),s("li",[a._v("TerserJSPlugin "),s("em",[a._v("多进程压缩JS")]),a._v("，设置缓存，清除调试代码比如console.log")])])])]),a._v(" "),s("h2",{attrs:{id:"静态资源优化（bundle-analizer-分析）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态资源优化（bundle-analizer-分析）","aria-hidden":"true"}},[a._v("#")]),a._v(" 静态资源优化（bundle-analizer 分析）")]),a._v(" "),s("h3",{attrs:{id:"gzip（50-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip（50-）","aria-hidden":"true"}},[a._v("#")]),a._v(" Gzip（50%）")]),a._v(" "),s("p",[a._v("Gzip 压缩背后的原理，是在一个文本文件中找出一些重复出现的字符串、临时替换它们，从而使整个文件变小。根据这个原理，文件中代码的重复率越高，那么压缩的效率就越高，使用 Gzip 的收益也就越大。反之亦然。")]),a._v(" "),s("p",[a._v("所以应该排除掉图片类型，因为已经经过压缩，再次 Gzip 只是白白浪费 CPU 性能。")]),a._v(" "),s("p",[a._v("webpack 的 Gzip 和服务端的 Gzip：权衡。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/30075.png-style1",alt:"image-20200308232047857"}})]),a._v(" "),s("h3",{attrs:{id:"资源缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源缓存","aria-hidden":"true"}},[a._v("#")]),a._v(" 资源缓存")]),a._v(" "),s("p",[a._v("Weback 设置 8 位 contentHash，方便游览器命中某些资源的缓存")]),a._v(" "),s("h3",{attrs:{id:"第三方库-cdn-引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方库-cdn-引入","aria-hidden":"true"}},[a._v("#")]),a._v(" 第三方库 CDN 引入")]),a._v(" "),s("p",[a._v("webpack 配置 "),s("code",[a._v("externals")])]),a._v(" "),s("p",[a._v("同时也能让减少打包大小")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('externals: {\n react: "React",\n react-dom: "ReactDOM"\n}\n')])])]),s("h1",{attrs:{id:"构建优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建优化","aria-hidden":"true"}},[a._v("#")]),a._v(" 构建优化")]),a._v(" "),s("h3",{attrs:{id:"_1-默认-tree-shaking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认-tree-shaking","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.默认 tree shaking")]),a._v(" "),s("blockquote",[s("p",[a._v("webpack 在 mode 为 production 下默认执行 tree shaking，不设置 mode 默认为 production")]),a._v(" "),s("p",[a._v("注意项：tree shaking 只会检测 ES2015 模块语法（即 import 和 export）。")])]),a._v(" "),s("h3",{attrs:{id:"_2-code-spiltting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-code-spiltting","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.code spiltting")]),a._v(" "),s("p",[s("code",[a._v("splitChunks")]),a._v(" 将第三方模块、公共模块单独打包，这么能产生两个好处")]),a._v(" "),s("ul",[s("li",[a._v("变动极少第三方模块和修改频率高的业务代码分离，也就意味着 chunk 的 hash 保存时间长，用户命中缓存几率大")]),a._v(" "),s("li",[a._v("缓存，打包时间短")])]),a._v(" "),s("h3",{attrs:{id:"webp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webp","aria-hidden":"true"}},[a._v("#")]),a._v(" WebP")]),a._v(" "),s("p",[a._v("关键字："),s("strong",[a._v("年轻的全能型选手")])]),a._v(" "),s("p",[a._v("WebP 是今天在座各类图片格式中最年轻的一位，它于 2010 年被提出， 是 Google 专为 Web 开发的一种"),s("strong",[a._v("旨在加快图片加载速度")]),a._v("的图片格式，它支持有损压缩和无损压缩。")]),a._v(" "),s("h4",{attrs:{id:"webp-的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webp-的优点","aria-hidden":"true"}},[a._v("#")]),a._v(" WebP 的优点")]),a._v(" "),s("p",[a._v("WebP 像 JPEG 一样对细节丰富的图片信手拈来，像 PNG 一样支持透明，像 GIF 一样可以显示动态图片——它集多种图片文件格式的优点于一身。\nWebP 的官方介绍对这一点有着更权威的阐述：")]),a._v(" "),s("blockquote",[s("p",[a._v("与 PNG 相比，WebP 无损图像的尺寸缩小了 26％。在等效的 SSIM 质量指数下，WebP 有损图像比同类 JPEG 图像小 25-34％。 无损 WebP 支持透明度（也称为 alpha 通道），仅需 22％ 的额外字节。对于有损 RGB 压缩可接受的情况，有损 WebP 也支持透明度，与 PNG 相比，通常提供 3 倍的文件大小。")])]),a._v(" "),s("p",[a._v("我们开篇提到，图片优化是质量与性能的博弈，从这个角度看，WebP 无疑是真正的赢家。")]),a._v(" "),s("h4",{attrs:{id:"webp-的局限性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webp-的局限性","aria-hidden":"true"}},[a._v("#")]),a._v(" WebP 的局限性")]),a._v(" "),s("p",[a._v("WebP 纵有千般好，但它毕竟"),s("strong",[a._v("太年轻")]),a._v("。我们知道，任何新生事物，都逃不开兼容性的大坑。现在是 2018 年 9 月，WebP 的支持情况是这样的：")]),a._v(" "),s("p",[a._v("坦白地说，虽然没有特别惨（毕竟还有亲爹 Chrome 在撑腰），但也足够让人望而却步了。")]),a._v(" "),s("p",[a._v("此外，WebP 还会增加服务器的负担——和编码 JPG 文件相比，编码同样质量的 WebP 文件会占用更多的计算资源。")]),a._v(" "),s("h4",{attrs:{id:"webp-的应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webp-的应用场景","aria-hidden":"true"}},[a._v("#")]),a._v(" WebP 的应用场景")]),a._v(" "),s("p",[a._v("现在限制我们使用 WebP 的最大问题不是“这个图片是否适合用 WebP 呈现”的问题，而是“浏览器是否允许 WebP”的问题，即我们上文谈到的兼容性问题。具体来说，一旦我们选择了 WebP，就要考虑在 Safari 等浏览器下它无法显示的问题，也就是说我们需要准备 PlanB，准备降级方案。")]),a._v(" "),s("p",[a._v("目前真正把 WebP 格式落地到网页中的网站并不是很多，这其中淘宝首页对 WebP 兼容性问题的处理方式就非常有趣。我们可以打开 Chrome 的开发者工具搜索其源码里的 WebP 关键字：")]),a._v(" "),s("p",[a._v("我们会发现检索结果还是挺多的（单就图示的加载结果来看，足足有 200 多条），下面大家注意一下这些 WebP 图片的链接地址（以其中一个为例）：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<img src="//img.alicdn.com/tps/i4/TB1CKSgIpXXXXccXXXX07tlTXXX-200-200.png_60x60.jpg_.webp" alt="手机app - 聚划算" class="app-icon">\n')])])]),s("p",[a._v(".webp 前面，还跟了一个 .jpg 后缀！")]),a._v(" "),s("p",[a._v("我们现在先大胆地猜测，这个图片应该至少存在 jpg 和 webp 两种格式，程序会根据浏览器的型号、以及该型号是否支持 WebP 这些信息来决定当前浏览器显示的是 .webp 后缀还是 .jpg 后缀。带着这个预判，我们打开并不支持 WebP 格式的 Safari 来进入同样的页面，再次搜索 WebP 关键字：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/15/165dd6aa9ffcf484?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),a._v(" "),s("p",[a._v("Safari 提示我们找不到，这也是情理之中。我们定位到刚刚示例的 WebP 图片所在的元素，查看一下它在 Safari 里的图片链接：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<img src="//img.alicdn.com/tps/i4/TB1CKSgIpXXXXccXXXX07tlTXXX-200-200.png_60x60.jpg" alt="手机app - 聚划算" class="app-icon">\n')])])]),s("p",[a._v("我们看到同样的一张图片，在 Safari 中的后缀从 .webp 变成了 .jpg！看来果然如此——站点确实是先进行了兼容性的预判，在浏览器环境支持 WebP 的情况下，优先使用 WebP 格式，否则就把图片降级为 JPG 格式（本质是对图片的链接地址作简单的字符串切割）。")]),a._v(" "),s("p",[a._v("此外，还有另一个维护性更强、更加灵活的方案——把判断工作交给后端，由服务器根据 HTTP 请求头部的 Accept 字段来决定返回什么格式的图片。当 Accept 字段包含 image/webp 时，就返回 WebP 格式的图片，否则返回原图。这种做法的好处是，当浏览器对 WebP 格式图片的兼容支持发生改变时，我们也不用再去更新自己的兼容判定代码，只需要服务端像往常一样对 Accept 字段进行检查即可。")]),a._v(" "),s("h3",{attrs:{id:"_4-代码压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-代码压缩","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.代码压缩")]),a._v(" "),s("h4",{attrs:{id:"压缩-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩-css","aria-hidden":"true"}},[a._v("#")]),a._v(" 压缩 CSS")]),a._v(" "),s("p",[a._v("生产环境")]),a._v(" "),s("p",[s("code",[a._v("mini-css-extract-plugin")]),a._v(" （单独提取 CSS，不要和 JS 揉在一起）")]),a._v(" "),s("p",[s("code",[a._v("optimize-css-assets-webpack-plugin")]),a._v(" （css tree shaking）")]),a._v(" "),s("h4",{attrs:{id:"压缩-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩-js","aria-hidden":"true"}},[a._v("#")]),a._v(" 压缩 JS")]),a._v(" "),s("p",[s("code",[a._v("terser-webpack-plugin")]),a._v(" 开启多进程，开启缓存，删除 console")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("optimization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  minimizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 多进程压缩")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TerserJSPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 设置缓存目录")]),a._v("\n      cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'.cache'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      parallel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      terserOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        compress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          drop_console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 删除所有的 console.log()")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("OptimizeCSSAssetsPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 压缩CSS")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n")])])]),s("h2",{attrs:{id:"优化过程中遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化过程中遇到的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 优化过程中遇到的问题")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\tpublicPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h2",{attrs:{id:"产出优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产出优化","aria-hidden":"true"}},[a._v("#")]),a._v(" 产出优化")]),a._v(" "),s("ul",[s("li",[a._v("小图片 base64 编码")]),a._v(" "),s("li",[a._v("bundle 加 hash")]),a._v(" "),s("li",[a._v("懒加载")]),a._v(" "),s("li",[a._v("提取公共代码")]),a._v(" "),s("li",[a._v("CDN 加速")]),a._v(" "),s("li",[a._v("production 模式，开启 tree shaking")])])])},[],!1,null,null,null);t.default=n.exports}}]);