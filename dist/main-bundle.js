!function(e){function _(_){for(var t,a,s=_[0],o=_[1],u=_[2],d=0,c=[];d<s.length;d++)a=s[d],n[a]&&c.push(n[a][0]),n[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(i&&i(_);c.length;)c.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,_=0;_<l.length;_++){for(var r,a=l[_],s=!0,o=1;o<a.length;o++)r=a[o],0!==n[r]&&(s=!1);s&&(l.splice(_--,1),e=t(t.s=a[0]))}return e}function t(_){if(a[_])return a[_].exports;var r=a[_]={i:_,l:!1,exports:{}};return e[_].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var a={},n={0:0},l=[];t.m=e,t.c=a,t.d=function(e,_,r){t.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,_){if(1&_&&(e=t(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var a in e)t.d(r,a,function(_){return e[_]}.bind(null,a));return r},t.n=function(e){var _=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(_,"a",_),_},t.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},t.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=_,s=s.slice();for(var u=0;u<s.length;u++)_(s[u]);var i=o;l.push([0,1]),r()}({"./data/bio.js":function(e){e.exports={heading:"New profile",bioText:"Hello there!"}},"./data/post.md":function(e){e.exports={title:"Great article about something",author:"Me",__content:'<h1 id="long-time-ago">Long time ago</h1>\n<p>Long time ago here some post had been written...</p>\n'}},"./src/app.js":function(e,_,r){"use strict";r.r(_),function(e){function _(e){l.a.render(a.a.createElement(s.AppContainer,null,a.a.createElement(e,{heading:i.a.heading,bio:i.a.bioText})),document.getElementById("react-root"))}var t=r("./node_modules/react/index.js"),a=r.n(t),n=r("./node_modules/react-dom/index.js"),l=r.n(n),s=r("./node_modules/react-hot-loader/index.js"),o=(r.n(s),r("./src/components/appRoot.js")),u=r("./data/bio.js"),i=r.n(u);(function(){var _=r("./node_modules/react-hot-loader/index.js").enterModule;_&&_(e)})(),_(o.a),function(){var t=r("./node_modules/react-hot-loader/index.js").default,a=r("./node_modules/react-hot-loader/index.js").leaveModule;t&&(t.register(_,"render","/Users/ruslan/test/webpack-best-practices/src/app.js"),a(e))}()}.call(this,r("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/appRoot.js":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _temp,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_data_post_md__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./data/post.md"),_data_post_md__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_data_post_md__WEBPACK_IMPORTED_MODULE_8__),a;a=__webpack_require__("./node_modules/react-hot-loader/index.js").enterModule,a&&a(module);var _default=(_temp=function(_PureComponent){function _default(){var e,_;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,_default);for(var r=arguments.length,t=Array(r),a=0;a<r;a++)t[a]=arguments[a];return _=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(e=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default)).call.apply(e,[this].concat(t))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_)),"state",{count:0}),_}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(_default,_PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default,[{key:"render",value:function(){var e=this.props,_=e.heading;e.bio;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"profile"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1",null,_),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img",{src:__webpack_require__("./src/images/test.jpg")}),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:_data_post_md__WEBPACK_IMPORTED_MODULE_8___default.a.__content}}))}},{key:"__reactstandin__regenerateByEval",value:function(key,code){this[key]=eval(code)}}]),_default}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent),_temp);__webpack_exports__.a=_default,function(){var e=__webpack_require__("./node_modules/react-hot-loader/index.js").default,_=__webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;e&&(e.register(_default,"default","/Users/ruslan/test/webpack-best-practices/src/components/appRoot.js"),_(module))}()}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/images/test.jpg":function(e,_,r){e.exports=r.p+"images/test.jpg"},"./src/main.js":function(e,_,r){"use strict";r.r(_),function(e){var _,t=r("./node_modules/@babel/runtime/regenerator/index.js"),a=r.n(t),n=r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),l=r.n(n);(_=r("./node_modules/react-hot-loader/index.js").enterModule)&&_(e),r("./src/main.styl"),r("./src/app.js");var s=function(){var e=l()(a.a.mark(function e(_){var r,t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=_.a,t=_.b,e.next=3,console.log("Hello from the future",r,t);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();s({a:1,b:2}),function(){var _=r("./node_modules/react-hot-loader/index.js").default,t=r("./node_modules/react-hot-loader/index.js").leaveModule;_&&(_.register(s,"a","/Users/ruslan/test/webpack-best-practices/src/main.js"),t(e))}()}.call(this,r("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/main.styl":function(){},0:function(e,_,r){e.exports=r("./src/main.js")}});