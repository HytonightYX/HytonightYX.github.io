(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{238:function(a,t,s){"use strict";s.r(t);var e=s(4),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"从零搭建-react-开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从零搭建-react-开发环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 从零搭建 React 开发环境")]),a._v(" "),s("p",[a._v("https://www.valentinog.com/blog/babel/")]),a._v(" "),s("h3",{attrs:{id:"安装-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-webpack","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 webpack")]),a._v(" "),s("p",[a._v("初始化目录，安装 webpack")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir react-starter && cd react-starter\nnpm init -y\nnpm i webpack webpack-cli --save-dev\n")])])]),s("p",[a._v("package.json 添加 "),s("code",[a._v("scripts")])]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack --mode production"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h3",{attrs:{id:"babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel","aria-hidden":"true"}},[a._v("#")]),a._v(" Babel")]),a._v(" "),s("p",[a._v("现代 React 开发几乎都用上了最新 ES6+ 的语法，比如 class、箭头函数等等，但是一些游览器不认识这些新语法，所以我们要转为更通用的 ES5，这种转换叫做“transpiling”。")]),a._v(" "),s("p",[a._v("当然 webpack 本身不知道如何转换，它需要依赖一种叫做 loader 的东西。"),s("strong",[a._v("一个 loader 能将输入的内容做一些处理后输出，输出的结果就叫做 bundle。")])]),a._v(" "),s("p",[a._v("babel-loader 就是这样一个负责将 ES6+ 代码转换为 ES5 的 loader。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("@babel/preset-env")]),a._v(" 用于将 ES6+ 代码转换为 ES5")]),a._v(" "),s("li",[s("strong",[a._v("@babel/preset-react")]),a._v(" 用于解析 JSX 为 JavaScript")])]),a._v(" "),s("p",[a._v("安装 bebel 环境")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev\n")])])]),s("p",[a._v("然后，新建 "),s("code",[a._v(".babelrc")]),a._v("，这里面是用来配置 babel 的")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"presets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"@babel/preset-env"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"@babel/preset-react"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("现在配置完成，可以告诉 webpack 要用 babel-loader 来编译代码了。")]),a._v(" "),s("p",[a._v("新建 "),s("code",[a._v("webpack.config.js")])]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/\\.(js|jsx)$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 正则匹配 *.js 和 *.jsx")]),a._v("\n        exclude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/node_modules/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 排除 node_modules")]),a._v("\n        use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"babel-loader"')]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 匹配到的这些文件用 babel-loader 处理")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"安装-react"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-react","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 React")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i react react-dom\n\nmkdir -p src/components\n")])])]),s("h1",{attrs:{id:"webpack-基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-基本配置","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack 基本配置")]),a._v(" "),s("h2",{attrs:{id:"拆分配置和-merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拆分配置和-merge","aria-hidden":"true"}},[a._v("#")]),a._v(" 拆分配置和 merge")]),a._v(" "),s("p",[a._v("常用 loader")]),a._v(" "),s("p",[a._v("babel-loader")]),a._v(" "),s("p",[a._v("postcss-loader 游览器兼容性的")]),a._v(" "),s("p",[a._v("postcss.config.js 加 autoprefixer")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybply1gcaqtu959lj30fi03b75e.jpg",alt:"image-20200227102029661"}})])])},[],!1,null,null,null);t.default=n.exports}}]);