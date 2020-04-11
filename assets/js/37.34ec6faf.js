(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{234:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"react-进阶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-进阶","aria-hidden":"true"}},[t._v("#")]),t._v(" React 进阶")]),t._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("p",[s("strong",[t._v("现象")])]),t._v(" "),s("ol",[s("li",[t._v("不可变值")]),t._v(" "),s("li",[t._v("可能异步")]),t._v(" "),s("li",[t._v("可能会被合并")])]),t._v(" "),s("p",[s("strong",[t._v("原理")])]),t._v(" "),s("ul",[s("li",[t._v("函数式编程")]),t._v(" "),s("li",[t._v("VDOM 和 diff")]),t._v(" "),s("li",[t._v("JSX 的本质")]),t._v(" "),s("li",[t._v("合成事件")]),t._v(" "),s("li",[t._v("setState batchUpdate")]),t._v(" "),s("li",[t._v("组件渲染过程")]),t._v(" "),s("li",[t._v("前端路由")])]),t._v(" "),s("h2",{attrs:{id:"不能直接修改-state，要用不可变值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不能直接修改-state，要用不可变值","aria-hidden":"true"}},[t._v("#")]),t._v(" 不能直接修改 state，要用不可变值")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"setstate-可能是异步，也可能是同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate-可能是异步，也可能是同步","aria-hidden":"true"}},[t._v("#")]),t._v(" setState 可能是异步，也可能是同步")]),t._v(" "),s("p",[t._v("直接使用是异步的")]),t._v(" "),s("p",[t._v("setTimeout 中，setState 是同步的")]),t._v(" "),s("p",[t._v("自己定义的 DOM 事件，setState 是同步的")]),t._v(" "),s("p",[t._v("##合并")]),t._v(" "),s("h3",{attrs:{id:"传入对象，会被合并，只执行一次-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传入对象，会被合并，只执行一次-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 传入对象，会被合并，只执行一次 +1")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最终只加1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类比：Object.assign")]),t._v("\n")])])]),s("h3",{attrs:{id:"传入函数，不会被合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传入函数，不会被合并","aria-hidden":"true"}},[t._v("#")]),t._v(" 传入函数，不会被合并")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevState")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数无法合并")]),t._v("\n")])])]),s("h1",{attrs:{id:"原理梳理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理梳理","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理梳理")]),t._v(" "),s("p",[t._v("函数式编程")]),t._v(" "),s("ul",[s("li",[t._v("一种编程范式")]),t._v(" "),s("li",[t._v("纯函数")]),t._v(" "),s("li",[t._v("不可变值")])]),t._v(" "),s("h2",{attrs:{id:"vdom-和-diff-是-react-的基石"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vdom-和-diff-是-react-的基石","aria-hidden":"true"}},[t._v("#")]),t._v(" VDOM 和 diff 是 React 的基石")]),t._v(" "),s("h3",{attrs:{id:"vdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vdom","aria-hidden":"true"}},[t._v("#")]),t._v(" VDOM")]),t._v(" "),s("p",[t._v("h 函数")]),t._v(" "),s("p",[t._v("vnode 数据结构，树")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gc8zfcbh0nj30am0do0tw.jpg",alt:"image-20200225214648201"}})]),t._v(" "),s("p",[t._v("patch 函数")]),t._v(" "),s("h3",{attrs:{id:"diff-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff-算法","aria-hidden":"true"}},[t._v("#")]),t._v(" diff 算法")]),t._v(" "),s("ul",[s("li",[t._v("同级比较")]),t._v(" "),s("li",[t._v("tag 不同，则直接删掉重建，不再深度比较")]),t._v(" "),s("li",[t._v("tag 和 key，两者都相同，则认为是相同节点，不再深度比较")])]),t._v(" "),s("p",[t._v("O(n^3) 改进为 O(n)")]),t._v(" "),s("h3",{attrs:{id:"jsx-的本质？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx-的本质？","aria-hidden":"true"}},[t._v("#")]),t._v(" JSX 的本质？")]),t._v(" "),s("p",[t._v("JSX 不是 JS。")]),t._v(" "),s("ul",[s("li",[t._v("编译后成为一堆 "),s("code",[t._v("React.createElement()")]),t._v(" ；")]),t._v(" "),s("li",[s("code",[t._v("React.createElement()")]),t._v(" 执行返回的是一个 vnode，能通过后续的 patch 来渲染；")]),t._v(" "),s("li",[t._v("第一个参数，可能是组件，也可能是个 HTML 标签；")]),t._v(" "),s("li",[t._v("组件名首字母必须大写，就是为了区分组件和 tag。")])]),t._v(" "),s("h2",{attrs:{id:"合成事件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合成事件机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 合成事件机制")]),t._v(" "),s("ul",[s("li",[t._v("event 是 SyntheticEvent，模拟出 DOM 事件所有能力")]),t._v(" "),s("li",[t._v("event.nativeEvent 是原生对象事件")]),t._v(" "),s("li",[t._v("所有的事件，都被挂载到 document 上")]),t._v(" "),s("li",[t._v("和 DOM 事件不一样")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gc90bxjx1dj30q00bjtbg.jpg",alt:"image-20200225221807193"}})]),t._v(" "),s("p",[t._v("React 通过这种合成事件机制，模拟了每一个原生 event 的行为。相当于在原生 event 上包装了一层。")]),t._v(" "),s("h3",{attrs:{id:"为什么需要合成事件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要合成事件机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么需要合成事件机制")]),t._v(" "),s("ul",[s("li",[t._v("更好的兼容性和跨平台")]),t._v(" "),s("li",[t._v("挂载到 document 上，"),s("strong",[t._v("减少内存消耗")]),t._v("，避免频繁解绑 （事件委托？）\n"),s("ul",[s("li",[t._v("比如 "),s("code",[t._v("<a onClick={fn} />")]),t._v("，其实没有直接在 a 上挂事件，而是挂载 document 上，这样当组件销毁的时候也不用去解绑")])])]),t._v(" "),s("li",[t._v("方便事件统一管理（如事物机制）")])]),t._v(" "),s("h2",{attrs:{id:"setstate-和-batchupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate-和-batchupdate","aria-hidden":"true"}},[t._v("#")]),t._v(" setState 和 batchUpdate")]),t._v(" "),s("p",[s("strong",[t._v("回顾现象：")])]),t._v(" "),s("ul",[s("li",[t._v("setState 有时"),s("strong",[t._v("异步")]),t._v("（普通使用），有时"),s("strong",[t._v("同步")]),t._v("（setTimeout，DOM 事件）")]),t._v(" "),s("li",[t._v("有时合并（对象形式），有时不合并（函数形式）")]),t._v(" "),s("li",[t._v("后者好理解（类似 Object.assign），主要理解 setState")])]),t._v(" "),s("p",[s("strong",[t._v("核心要点：")])]),t._v(" "),s("ul",[s("li",[t._v("setState 的主要流程")]),t._v(" "),s("li",[t._v("batchUpdate 机制")]),t._v(" "),s("li",[t._v("transaction （事务）机制")])]),t._v(" "),s("h3",{attrs:{id:"setstate-的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate-的流程","aria-hidden":"true"}},[t._v("#")]),t._v(" setState 的流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gc9gqugd88j30ht0cemz9.jpg",alt:"image-20200226074600085"}})]),t._v(" "),s("p",[t._v("上面的结果最终是 1，在"),s("code",[t._v("setState")]),t._v("的时候 react 内部会创建一个"),s("code",[t._v("updateQueue")]),t._v("，通过"),s("code",[t._v("firstUpdate")]),t._v("、"),s("code",[t._v("lastUpdate")]),t._v("、"),s("code",[t._v("lastUpdate.next")]),t._v("去维护一个更新的队列，在最终的"),s("code",[t._v("performWork")]),t._v("中，相同的 key 会被覆盖，只会对最后一次的"),s("code",[t._v("setState")]),t._v("进行更新。")]),t._v(" "),s("h3",{attrs:{id:"batchupdate-机制以及-isbatchingupdates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#batchupdate-机制以及-isbatchingupdates","aria-hidden":"true"}},[t._v("#")]),t._v(" batchUpdate 机制以及 isBatchingUpdates")]),t._v(" "),s("p",[t._v("举个 🌰，放在 setTimeout 中")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gc9gtpyrobj30sp0d20zu.jpg",alt:"image-20200226074848656"}})]),t._v(" "),s("p",[t._v("看右边，开始处于 "),s("code",[t._v("batchUpdate")]),t._v(" 中，"),s("code",[t._v("isBatchingUpdates = true")]),t._v("，接着开始执行 "),s("code",[t._v("setTimeout")]),t._v("，但是里面的 "),s("code",[t._v("setState")]),t._v(" 是异步的，所以还没执行，紧接着 "),s("code",[t._v("isBatchingUpdates = false")]),t._v(" 。因此之后 "),s("code",[t._v("setState")]),t._v(" 执行的时候，"),s("code",[t._v("isBatchingUpdates = false")]),t._v(" ，所以开始走流程图的右边了。")]),t._v(" "),s("p",[t._v("其实 React 所有函数都是这样的逻辑。")]),t._v(" "),s("p",[t._v("自定义事件也是一样的：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gc9gzybiulj30lt0bjgqd.jpg",alt:"image-20200226075447475"}})]),t._v(" "),s("p",[t._v("总结：")]),t._v(" "),s("ul",[s("li",[t._v("同步异步不是由 setState 自己决定的")]),t._v(" "),s("li",[t._v("就是看能否命中 batchUpdate 机制")]),t._v(" "),s("li",[t._v("判断 "),s("code",[t._v("isBatchingUpdate")])])]),t._v(" "),s("p",[t._v("能命中 batchUpdate 机制：")]),t._v(" "),s("ul",[s("li",[t._v("生命周期以及其调用的函数")]),t._v(" "),s("li",[t._v("React 中注册的事件（和它调用的函数）")]),t._v(" "),s("li",[t._v("React 可以“管理”的入口")])]),t._v(" "),s("p",[t._v("不能命中：")]),t._v(" "),s("ul",[s("li",[t._v("setTimeout，setInterval（和它调用的函数）")]),t._v(" "),s("li",[t._v("自定义的 DOM 事件")]),t._v(" "),s("li",[t._v("React “管不到” 的入口，不是 React 那儿注册的")])]),t._v(" "),s("h3",{attrs:{id:"transction-机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transction-机制","aria-hidden":"true"}},[t._v("#")]),t._v(" transction 机制")]),t._v(" "),s("p",[t._v("![image-20200226080322386](/Users/husiyuan/Library/Application Support/typora-user-images/image-20200226080322386.png)")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gc9ha7qr8hj30jq0d7gpa.jpg",alt:"image-20200226080439053"}})]),t._v(" "),s("p",[t._v("可以看到，这两个"),s("code",[t._v("wrapper")]),t._v("的"),s("code",[t._v("initialize")]),t._v("都没有做什么事情，但是在 callback 执行完之后，"),s("code",[t._v("RESET_BATCHED_UPDATES")]),t._v(" 的作用是将"),s("code",[t._v("isBatchingUpdates")]),t._v("置为"),s("code",[t._v("false")]),t._v(", "),s("code",[t._v("FLUSH_BATCHED_UPDATES")]),t._v(" 的作用是执行"),s("code",[t._v("flushBatchedUpdates")]),t._v(",然后里面会循环所有"),s("code",[t._v("dirtyComponent")]),t._v(",调用"),s("code",[t._v("updateComponent")]),t._v("来执行所有的生命周期方法，"),s("code",[t._v("componentWillReceiveProps")]),t._v(", "),s("code",[t._v("shouldComponentUpdate")]),t._v(", "),s("code",[t._v("componentWillUpdate")]),t._v(", "),s("code",[t._v("render")]),t._v(", "),s("code",[t._v("componentDidUpdate")]),t._v(" 最后实现组件的更新。")]),t._v(" "),s("h2",{attrs:{id:"组件渲染和更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件渲染和更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件渲染和更新")]),t._v(" "),s("h3",{attrs:{id:"组件渲染和更新的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件渲染和更新的过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件渲染和更新的过程")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("setState(newState)")]),t._v(" => dirtyComponents （可能有子组件）")]),t._v(" "),s("li",[s("code",[t._v("render()")]),t._v(" 生成 newVnode")]),t._v(" "),s("li",[s("code",[t._v("patch(vnode, newVnode)")]),t._v(" "),s("ol",[s("li",[t._v("reconciliation 阶段：执行 diff 算法，纯 JS 计算")]),t._v(" "),s("li",[t._v("commit 阶段：将 diff 结果渲染到 DOM")])])])]),t._v(" "),s("h3",{attrs:{id:"为何-patch-分为两个阶段？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何-patch-分为两个阶段？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为何 patch 分为两个阶段？")]),t._v(" "),s("ul",[s("li",[t._v("js 是单线程的，和 DOM 渲染公用一个线程（类比回流的过程）")]),t._v(" "),s("li",[t._v("组件复杂的时候，组件更新计算和渲染都压力很大")]),t._v(" "),s("li",[t._v("同时有 DOM 操作需求的时候（动画、鼠标拖拽），会卡顿。解决方案是 "),s("code",[t._v("fiber")])])]),t._v(" "),s("h3",{attrs:{id:"何为-fiber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何为-fiber","aria-hidden":"true"}},[t._v("#")]),t._v(" 何为 fiber")]),t._v(" "),s("p",[t._v("单线程调度算法")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5ab7b3a2f265da2378403e57",target:"_blank",rel:"noopener noreferrer"}},[t._v("fiber 介绍"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("react 在进行组件渲染时，从 setState 开始到渲染完成整个过程是同步的（“一气呵成”）。如果需要渲染的组件比较庞大，js 执行会占据主线程时间较长，会导致页面响应度变差，使得 react 在动画、手势等应用中效果比较差。")]),t._v(" "),s("p",[t._v("为了解决这个问题，react 团队经过两年的工作，重写了 react 中核心算法——"),s("a",{attrs:{href:"https://reactjs.org/docs/reconciliation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("reconciliation"),s("OutboundLink")],1),t._v("。并在 v16 版本中发布了这个新的特性。为了区别之前和之后的 reconciler，通常将之前的 reconciler 称为 stack reconciler，重写后的称为 fiber reconciler，简称为 Fiber。")]),t._v(" "),s("ul",[s("li",[t._v("将 reconciliation（重写了） 阶段进行拆分（commit 无法拆分，一次执行完）")]),t._v(" "),s("li",[t._v("DOM 需要渲染时候暂停，空闲时恢复")]),t._v(" "),s("li",[t._v("何时暂停何时恢复呢？ "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback",target:"_blank",rel:"noopener noreferrer"}},[t._v("window.requestIdleCallback"),s("OutboundLink")],1),t._v(" (Edge,IE,Safari 不支持，用 polyfill)")])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("函数式编程：纯函数，不可变值")]),t._v(" "),s("li",[t._v("VDOM 和 diff")]),t._v(" "),s("li",[t._v("JSX 的本质")]),t._v(" "),s("li",[t._v("合成事件")]),t._v(" "),s("li",[t._v("setState 和 batchUpdate")]),t._v(" "),s("li",[t._v("组件渲染和更新的过程")]),t._v(" "),s("li",[t._v("fiber 架构")])])])},[],!1,null,null,null);a.default=n.exports}}]);