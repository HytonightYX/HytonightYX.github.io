(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{219:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js-异步编程：种类和原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-异步编程：种类和原理","aria-hidden":"true"}},[t._v("#")]),t._v(" JS 异步编程：种类和原理")]),t._v(" "),s("h2",{attrs:{id:"_1-回调函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-回调函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 回调函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api/user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 发生错误 */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api/userinfo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 回调地狱 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("错误处理困难")])]),t._v(" "),s("ul",[s("li",[t._v("回调函数发生错误时，无法使用 try-catch 来处理错误。由于事件循环机制，回调执行和 try-catch 不会位于同一步骤中；")]),t._v(" "),s("li",[t._v("因此，一般回调函数要手动传入 err，来处理错误，也就产生了大量样板代码")])]),t._v(" "),s("p",[s("strong",[t._v("回调地狱")])]),t._v(" "),s("ul",[s("li",[t._v("回调套回调，执行连续步骤非常棘手")])]),t._v(" "),s("p",[s("strong",[t._v("代码耦合，维护困难")])]),t._v(" "),s("h2",{attrs:{id:"_2-promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-promise","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 Promise")]),t._v(" "),s("h2",{attrs:{id:"_3-generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-generator","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 Generator")]),t._v(" "),s("p",[t._v("我们一步步引出 "),s("code",[t._v("generator")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"for-of"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-of","aria-hidden":"true"}},[t._v("#")]),t._v(" for...of")]),t._v(" "),s("p",[s("code",[t._v("for...of")]),t._v("在"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/iterable",target:"_blank",rel:"noopener noreferrer"}},[t._v("可迭代对象"),s("OutboundLink")],1),t._v("上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。")]),t._v(" "),s("h3",{attrs:{id:"可迭代对象？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可迭代对象？","aria-hidden":"true"}},[t._v("#")]),t._v(" 可迭代对象？")]),t._v(" "),s("p",[s("code",[t._v("String")]),t._v(", "),s("code",[t._v("Array")]),t._v(", "),s("code",[t._v("TypedArray")]),t._v(", "),s("code",[t._v("Map")]),t._v(" and "),s("code",[t._v("Set")]),t._v(" 是所有内置可迭代对象， 因为它们的原型对象都有一个 @@iterator 方法。")]),t._v(" "),s("ul",[s("li",[t._v("可迭代协议：原型中都实现了一个方法 "),s("code",[t._v("Symbol.iterator")]),t._v("，返回一个对象的无参函数，被返回对象符合迭代器协议。")]),t._v(" "),s("li",[t._v("迭代器协议：实现一个"),s("code",[t._v("next()")]),t._v("方法，返回"),s("code",[t._v("{value: [any], done: [boolean]}")]),t._v(" 对象。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/euop2.png",alt:"image-20200323120323292"}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("iterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 {value: 1, done: false}")]),t._v("\niterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 {value: 2, done: false}")]),t._v("\niterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 {value: 3, done: false}")]),t._v("\niterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 {value: undefined, done: true}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// done 了之后，value = undefined")]),t._v("\n")])])]),s("p",[t._v("所以， 为什么不能用 "),s("code",[t._v("for...of")]),t._v(" 来遍历一个对象呢？ 原因很简单："),s("code",[t._v("JavaScript")]),t._v(" 的对象中没有实现一个这样的 "),s("code",[t._v("iterator")]),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"generator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generator","aria-hidden":"true"}},[t._v("#")]),t._v(" Generator")]),t._v(" "),s("p",[t._v("来看看写法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/jjfx0.png",alt:"image-20200323134805237"}})]),t._v(" "),s("p",[t._v("熟悉的配方，熟悉的味道～")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://qn-noter.yunxi.site/imagehost/rlneo.png",alt:"image-20200323135021029"}})]),t._v(" "),s("h3",{attrs:{id:"generator-有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generator-有什么用","aria-hidden":"true"}},[t._v("#")]),t._v(" Generator 有什么用?")]),t._v(" "),s("p",[t._v("它能够中断执行代码的特性，可以帮助我们来控制异步代码的执行顺序。")]),t._v(" "),s("p",[t._v("例如有两个异步的函数 "),s("code",[t._v("A")]),t._v(" 和 "),s("code",[t._v("B")]),t._v(", 并且 "),s("code",[t._v("B")]),t._v(" 的参数是 "),s("code",[t._v("A")]),t._v(" 的返回值，也就是说，如果 "),s("code",[t._v("A")]),t._v(" 没有执行结束，我们不能执行 "),s("code",[t._v("B")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("effect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" param "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iterator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("effect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\niterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\niterator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拿到result")]),t._v("\n")])])]),s("p",[t._v("执行两次 "),s("code",[t._v("next()")]),t._v(" 得到结果，看起来很傻不是吗？有没有好的办法呢？（废话，肯定有啊） 假设你在每次执行 "),s("code",[t._v("A()")]),t._v(" / "),s("code",[t._v("B()")]),t._v(" 的请求结束之后，都会自动执行 "),s("code",[t._v("next()")]),t._v(" 方法呢？")]),t._v(" "),s("h3",{attrs:{id:"generator-promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generator-promise","aria-hidden":"true"}},[t._v("#")]),t._v(" Generator + Promise")]),t._v(" "),s("p",[s("code",[t._v("Generator")]),t._v("作为 "),s("code",[t._v("ES6")]),t._v(" 中使用协程的解决方案来处理异步编程的具体实现，它的特点是:")]),t._v(" "),s("p",[s("code",[t._v("Generator")]),t._v(" 中可以使用 "),s("code",[t._v("yield")]),t._v(" 关键字配合实例 "),s("code",[t._v("gen")]),t._v(" 调用 "),s("code",[t._v("next()")]),t._v(" 方法，来将其内部的语句分割执行。简言之 : "),s("code",[t._v("next()")]),t._v(" 被调用一次，则 "),s("code",[t._v("yield")]),t._v(" 语句被执行一句，随着 "),s("code",[t._v("next()")]),t._v(" 调用， "),s("code",[t._v("yield")]),t._v(" 语句被依次执行。")]),t._v(" "),s("p",[t._v("所以,异步编程使用 "),s("code",[t._v("Generator")]),t._v(" 和 "),s("code",[t._v("Promise")]),t._v(" 来实现的原理是什么呢？")]),t._v(" "),s("ol",[s("li",[t._v("因为 "),s("code",[t._v("Generator")]),t._v(" 本身 "),s("code",[t._v("yield")]),t._v(" 语句是分离执行的，所以我们利用这一点，在 "),s("code",[t._v("yield")]),t._v(" 语句中返回一个 "),s("code",[t._v("Promise")]),t._v(" 对象；")]),t._v(" "),s("li",[t._v("首次调用 "),s("code",[t._v("Generator")]),t._v(" 中的 "),s("code",[t._v("next()")]),t._v(" 后, 假设返回值叫 "),s("code",[t._v("result")]),t._v(" ,那么此时 "),s("code",[t._v("result.value")]),t._v(" 就是我们定义在 "),s("code",[t._v("yield")]),t._v(" 语句中的 "),s("code",[t._v("Promise")]),t._v(" 对象。")])]),t._v(" "),s("p",[t._v("Generator实现的核心在于"),s("code",[t._v("上下文的保存")]),t._v("，函数并没有真的被挂起，每一次yield，其实都执行了一遍传入的生成器函数，只是在这个过程中间用了一个context对象储存上下文，使得每次执行生成器函数的时候，都可以从上一个执行结果开始执行，看起来就像函数被挂起了一样")]),t._v(" "),s("h2",{attrs:{id:"_4-async-await"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-async-await","aria-hidden":"true"}},[t._v("#")]),t._v(" 4 Async/Await")]),t._v(" "),s("p",[t._v("是 "),s("code",[t._v("Generator")]),t._v(" 的语法糖。")]),t._v(" "),s("p",[t._v("和 Generator 的对比：")]),t._v(" "),s("p",[t._v("1、Generator 出现在ES2015中，async 出现在ES2017中，async 是 Generator 的语法糖；")]),t._v(" "),s("p",[t._v("2、执行方式不同，Generator 执行需要使用执行器（next()等方法）；async 函数自带执行器，与普通函数的执行一样；")]),t._v(" "),s("p",[t._v("3、async 的语法语义更加清楚，async 表示异步，await 表示等待；而 Generator 函数的(*)号和 yield 的语义就没那么直接了；")]),t._v(" "),s("p",[t._v("4、Generator 中 yield 后面只能跟 Thunk 函数或 Promise 对象；而 async 函数中 await 后面可以是 promise 对象或者原始类型的值（会自动转为立即resovle的promise对象）；")]),t._v(" "),s("p",[t._v("5、返回值不同，Generator 返回遍历器，相比于 async 返回 promise 对象操作更加麻烦。")])])},[],!1,null,null,null);a.default=n.exports}}]);