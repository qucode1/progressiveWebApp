webpackJsonp([4],[,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),o=a(0),r=a(21),l=(a.n(r),a(22)),i=(a.n(l),a(23));o.render(n.default.createElement(i.a,null),document.getElementById("app")),r.install({onUpdating:function(){console.log("SW Event:","onUpdating")},onUpdateReady:function(){console.log("SW Event:","onUpdateReady"),r.applyUpdate()},onUpdated:function(){console.log("SW Event:","onUpdated"),window.location.reload()},onUpdateFailed:function(){console.log("SW Event:","onUpdateFailed")}})},,,,,,,function(e,t){function a(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function n(e){if(e||(e={}),a()){navigator.serviceWorker.register("/sw.js")}else if(window.applicationCache){var t=function(){var e=document.createElement("iframe");e.src="/appcache/manifest.html",e.style.display="none",l=e,document.body.appendChild(e)};return void("complete"===document.readyState?setTimeout(t):window.addEventListener("load",t))}}function o(e,t){}function r(){if(a()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()}),l)try{l.contentWindow.applicationCache.update()}catch(e){}}var l;t.install=n,t.applyUpdate=o,t.update=r},function(e,t){},function(e,t,a){"use strict";var n=a(0),o=a(5),r=a(50),l=a(52),i=a(61),s=a.n(i),c=function(){return n.default.createElement(o.BrowserRouter,null,n.default.createElement("div",null,n.default.createElement(r.a,null),n.default.createElement("div",{className:s.a.container},n.default.createElement(l.a,null))))};t.a=c},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(0),o=a(51),r=a.n(o),l=a(5),i=function(){return n.default.createElement("header",{className:r.a.heading},n.default.createElement("div",{className:r.a.container},n.default.createElement("h1",{className:r.a.title},n.default.createElement(l.Link,{to:"/",className:r.a.link},"Aletta")),n.default.createElement("nav",null,n.default.createElement("ul",{className:r.a.list},n.default.createElement("li",{className:r.a.listItem},n.default.createElement(l.Link,{className:r.a.link,to:"/posts"},"Posts")),n.default.createElement("li",{className:r.a.listItem},n.default.createElement(l.Link,{className:r.a.link,to:"/about"},"About"))))))};t.a=i},function(e,t){e.exports={heading:"Header-heading-t3AMrsU3",container:"Header-container-1rGbtAXZ",title:"Header-title-3XuFenmf",list:"Header-list-3s4BxC7P","list-item":"Header-list-item-24sQigwQ",listItem:"Header-list-item-24sQigwQ",link:"Header-link-1y9I5yvj"}},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(0),i=a(5),s=a(53),c=a(56),u=a.n(c),d=a(57),p=a.n(d),f=a(58),m=a.n(f),y=a(59),h=a.n(y),g=a(60),w=a.n(g),b=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),x=function(e){return l.default.createElement(s.a,{load:u.a},function(t){return l.default.createElement(t,e)})},v=function(e){return l.default.createElement(s.a,{load:p.a},function(t){return l.default.createElement(t,e)})},S=function(e){return l.default.createElement(s.a,{load:m.a},function(t){return l.default.createElement(t,e)})},k=function(e){return l.default.createElement(s.a,{load:h.a},function(t){return l.default.createElement(t,e)})},E=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"componentDidMount",value:function(){u.a(function(){}),p.a(function(){}),m.a(function(){}),h.a(function(){})}},{key:"render",value:function(){return l.default.createElement(i.Switch,null,l.default.createElement(i.Route,{exact:!0,path:"/",render:function(){return l.default.createElement("h2",null,"Welcome to my Blog! My Web App SW should update automatically...!")}}),l.default.createElement(i.Route,{path:"/posts/:slug",component:function(e){return l.default.createElement(S,{posts:w.a,match:e.match})}}),l.default.createElement(i.Route,{path:"/posts",component:function(){return l.default.createElement(v,{posts:w.a})}}),l.default.createElement(i.Route,{exact:!0,path:"/about",component:x}),l.default.createElement(i.Route,{component:function(){return l.default.createElement(k,{message:"Url does not exist"})}}))}}]),t}(l.Component);t.a=E},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(0),i=a(54),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:"getInitialState",value:function(){return{mod:null}}},{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentWillReceiveProps",value:function(e){e.load!==this.props.load&&this.load(e)}},{key:"load",value:function(e){var t=this;this.setState({mod:null}),e.load(function(e){t.setState({mod:e.default?e.default:e})})}},{key:"render",value:function(){return this.state.mod?this.props.children(this.state.mod):l.default.createElement(i.a,null)}}]),t}(l.Component);t.a=c},function(e,t,a){"use strict";var n=a(0),o=a(55),r=a.n(o),l=function(){return n.default.createElement("div",{className:r.a.loader},n.default.createElement("div",{className:r.a.inner+" "+r.a.one}),n.default.createElement("div",{className:r.a.inner+" "+r.a.two}),n.default.createElement("div",{className:r.a.inner+" "+r.a.three}))};t.a=l},function(e,t){e.exports={loader:"Loading-loader-1lz5tLcr",inner:"Loading-inner-24Dcb7Dc",one:"Loading-one-2XxHMe8C","rotate-one":"Loading-rotate-one-DDN2p-XB",rotateOne:"Loading-rotate-one-DDN2p-XB",two:"Loading-two-1T3SsiwY","rotate-two":"Loading-rotate-two-2FNenr5h",rotateTwo:"Loading-rotate-two-2FNenr5h",three:"Loading-three-11YCB2ij","rotate-three":"Loading-rotate-three-Zrc7XpMx",rotateThree:"Loading-rotate-three-Zrc7XpMx"}},function(e,t,a){e.exports=function(e){a.e(2).then(function(t){e(a(65))}.bind(null,a)).catch(a.oe)}},function(e,t,a){e.exports=function(e){a.e(1).then(function(t){e(a(66))}.bind(null,a)).catch(a.oe)}},function(e,t,a){e.exports=function(e){a.e(0).then(function(t){e(a(67))}.bind(null,a)).catch(a.oe)}},function(e,t,a){e.exports=function(e){a.e(3).then(function(t){e(a(64))}.bind(null,a)).catch(a.oe)}},function(e,t){e.exports={posts:[{title:"How to build a progressive web app with React",slug:"how-to-build-a-progressive-web-app-with-react",excerpt:"One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on.",content:"One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on."},{title:"Testing with Jest and Enzyme",slug:"testing-with-jest-and-enzyme",excerpt:"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools.",content:"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools."},{title:"Getting started with CSS modules in Webpack",slug:"getting-started-with-css-modules-in-webpack",excerpt:"A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files.",content:"A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. "}]}},function(e,t){e.exports={container:"App-container-1la2SIOw"}},,function(e,t){function a(e,t){var a=e[1]||"",o=e[3];if(!o)return a;if(t&&"function"==typeof btoa){var r=n(o);return[a].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[a].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=a(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var l=e[o];"number"==typeof l[0]&&n[l[0]]||(a&&!l[2]?l[2]=a:a&&(l[2]="("+l[2]+") and ("+a+")"),t.push(l))}},t}}],[14]);
//# sourceMappingURL=app.fd64e1.js.map