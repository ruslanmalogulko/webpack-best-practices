!function(e){var r={};function _(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,_),n.l=!0,n.exports}_.m=e,_.c=r,_.d=function(e,r,t){_.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,r){if(1&r&&(e=_(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)_.d(t,n,function(r){return e[r]}.bind(null,n));return t},_.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(r,"a",r),r},_.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},_.p="",_(_.s=17)}([function(e,r){e.exports=require("react-hot-loader")},function(e,r){e.exports=require("react")},function(e,r){e.exports=require("webpack")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,r){e.exports=function(e){if(!e.webpackPolyfill){var r=Object.create(e);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}},function(e,r,_){(function(e,r){var t;(t=_(0).enterModule)&&t(e);var n,a,s=_(3),l=_(2),o=_(27),i=_(28).BundleAnalyzerPlugin;e.exports={output:{filename:"[name]-bundle.js",path:s.resolve(r,"../dist")},entry:{main:["@babel/runtime/regenerator","react-hot-loader/patch","@babel/register","webpack-hot-middleware/client?reload=true","./src/main.js"]},mode:"development",devServer:{contentBase:"dist",overlay:!0,hot:!0,stats:{colors:!0}},devtool:"source-map",module:{rules:[{test:/\.styl$/,use:[{loader:"style-loader"},{loader:"css-loader"},{loader:"postcss-loader"},{loader:"stylus-loader"}]},{test:/\.js$/,use:{loader:"babel-loader"},exclude:/node_modules/},{test:/\.md$/,use:[{loader:"markdown-with-front-matter-loader"}]},{test:/\.html$/,use:[{loader:"html-loader",options:{attrs:["img:src"]}}]},{test:/\.jpg$/,use:[{loader:"file-loader",options:{name:"images/[name].[ext]"}}]}]},optimization:{splitChunks:{chunks:"all",cacheGroups:{vendor:{name:"vendor",chunks:"initial",minChunks:2}}}},plugins:[new l.HotModuleReplacementPlugin,new l.NamedModulesPlugin,new i({generateStatsFile:!0}),new o({template:"./src/index.ejs",title:"Links journal"})]},n=_(0).default,a=_(0).leaveModule,n&&(n.register(i,"BundleAnalyzerPlugin","/Users/ruslan/test/webpack-best-practices/config/webpack.dev.js"),a(e))}).call(this,_(26)(e),"/")},function(e,r,_){(function(r){var t=_(3),n=(_(2),_(29)),a=_(30),s=_(31),l=_(32),o=_(33);e.exports={output:{filename:"[name]-bundle.js",path:t.resolve(r,"../dist")},entry:{main:["./src/main.js"]},mode:"production",module:{rules:[{test:/\.styl$/,use:[{loader:n.loader},{loader:"css-loader"},{loader:"postcss-loader"},{loader:"stylus-loader"}]},{test:/\.js$/,use:{loader:"babel-loader"},exclude:/node_modules/},{test:/\.md$/,use:[{loader:"markdown-with-front-matter-loader"}]},{test:/\.jpg$/,use:[{loader:"file-loader",options:{name:"images/[name].[ext]"}}]}]},optimization:{splitChunks:{chunks:"all",cacheGroups:{vendor:{name:"vendor",chunks:"initial",minChunks:2}}}},plugins:[new a,new n({filename:"[name].css"}),new s,new l({algorithm:"gzip"}),new o]}}).call(this,"/")},function(e,r,_){(function(r){var t=_(3),n=_(34);e.exports={entry:{server:["./src/server/main.js"]},output:{filename:"[name]-bundle.js",path:t.resolve(r,"../build")},mode:"production",target:"node",externals:n(),module:{rules:[{test:/\.styl$/,use:[{loader:"css-loader"},{loader:"postcss-loader"},{loader:"stylus-loader"}]},{test:/\.js$/,use:{loader:"babel-loader"},exclude:/node_modules/},{test:/\.md$/,use:[{loader:"markdown-with-front-matter-loader"}]},{test:/\.jpg$/,use:[{loader:"file-loader",options:{name:"images/[name].[ext]",emitFile:!1}}]}]}}}).call(this,"/")},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_data_post_md__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(16),_data_post_md__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_data_post_md__WEBPACK_IMPORTED_MODULE_8__),_temp,enterModule;enterModule=__webpack_require__(0).enterModule,enterModule&&enterModule(module);var _default=(_temp=function(_PureComponent){function _default(){var e,r;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,_default);for(var _=arguments.length,t=new Array(_),n=0;n<_;n++)t[n]=arguments[n];return r=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(e=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default)).call.apply(e,[this].concat(t))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(r)),"state",{count:0}),r}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(_default,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default,[{key:"render",value:function(){var e=this.props,r=e.heading;e.bio;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"profile"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,r),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img",{src:__webpack_require__(24)}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:_data_post_md__WEBPACK_IMPORTED_MODULE_8___default.a.__content}}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),_default}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent),_temp),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(0).default,leaveModule=__webpack_require__(0).leaveModule,reactHotLoader&&(reactHotLoader.register(_default,"default","/Users/ruslan/test/webpack-best-practices/src/components/appRoot.js"),leaveModule(module))}).call(this,__webpack_require__(5)(module))},function(e,r){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,r){e.exports=require("@babel/runtime/helpers/createClass")},function(e,r){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,r){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,r){e.exports=require("@babel/runtime/helpers/inherits")},function(e,r){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,r){e.exports={title:"Great article about something",author:"Me",__content:'<h1 id="long-time-ago">Long time ago</h1>\n<p>Long time ago here some post had been written...</p>\n'}},function(e,r,_){e.exports=_(18)},function(e,r,_){_(19),_(20)},function(e,r){e.exports=require("@babel/register")},function(e,r,_){"use strict";_.r(r),function(e){var r,t=_(9);(r=_(0).enterModule)&&r(e);var n=_(21),a=_(22),s=_(1),l=_(23),o=n(),i=_(2),u=_(25)("./webpack.".concat("prod")),c=i(u),p=_(35)(c,u.devServer),d=_(36)(c);o.use(a("dist",{enableBrotli:!0,orderPreference:["br"]})),o.get("*",function(e,r){r.send('\n    <html>\n        <head>\n            <link href="/main.css" rel="stylesheet" />\n            <title>Hello title !!!</title>\n        </head>\n        <body>\n            <div id="react-root">\n                '.concat(l.renderToString(s.createElement(t.a,null)),'\n            </div>\n            <script src="vendors~main-bundle.js"><\/script>\n            <script src="main-bundle.js"><\/script>\n        </body>\n    </html>\n    '))});var b,f,m=process.env.PORT||8080;o.listen(m,function(){console.log("Server is listening on port ".concat(m))}),b=_(0).default,f=_(0).leaveModule,b&&(b.register(o,"server","/Users/ruslan/test/webpack-best-practices/src/server/express.js"),b.register(!0,"isProd","/Users/ruslan/test/webpack-best-practices/src/server/express.js"),b.register(c,"compiler","/Users/ruslan/test/webpack-best-practices/src/server/express.js"),b.register(p,"webpackDevMiddleware","/Users/ruslan/test/webpack-best-practices/src/server/express.js"),b.register(d,"webpackHotMiddleware","/Users/ruslan/test/webpack-best-practices/src/server/express.js"),b.register(m,"PORT","/Users/ruslan/test/webpack-best-practices/src/server/express.js"),f(e))}.call(this,_(5)(e))},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("express-static-gzip")},function(e,r){e.exports=require("react-dom/server")},function(e,r,_){e.exports=_.p+"images/test.jpg"},function(e,r,_){var t={"./webpack.dev":6,"./webpack.dev.js":6,"./webpack.prod":7,"./webpack.prod.js":7,"./webpack.server":8,"./webpack.server.js":8};function n(e){var r=a(e);return _(r)}function a(e){var r=t[e];if(!(r+1)){var _=new Error("Cannot find module '"+e+"'");throw _.code="MODULE_NOT_FOUND",_}return r}n.keys=function(){return Object.keys(t)},n.resolve=a,e.exports=n,n.id=25},function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,r){e.exports=require("html-webpack-plugin")},function(e,r){e.exports=require("webpack-bundle-analyzer")},function(e,r){e.exports=require("mini-css-extract-plugin")},function(e,r){e.exports=require("optimize-css-assets-webpack-plugin")},function(e,r){e.exports=require("babel-minify-webpack-plugin")},function(e,r){e.exports=require("compression-webpack-plugin")},function(e,r){e.exports=require("brotli-webpack-plugin")},function(e,r){e.exports=require("webpack-node-externals")},function(e,r){e.exports=require("webpack-dev-middleware")},function(e,r){e.exports=require("webpack-hot-middleware")}]);