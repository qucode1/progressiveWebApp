webpackJsonp([0],[,,,,,,,,,,,,,,function(e,t,a){"use strict";var o=a(0),n=a(3),l=a(15),s=a.n(l),i=function(e){return o.default.createElement("div",null,o.default.createElement("h2",{className:s.a.title},e.details?e.title:o.default.createElement(n.Link,{to:"/posts/"+e.slug,className:s.a.link},e.title)),o.default.createElement("p",{className:s.a.content},e.details?e.content:e.excerpt),e.details&&o.default.createElement(n.Link,{to:"/posts",className:s.a.link},"Go back to Posts"))};t.a=i},function(e,t){e.exports={title:"Post-title-1k3xjRYU",content:"Post-content-2KG4rT4-",link:"Post-link-32GMHx9h"}},function(e,t,a){"use strict";var o=a(0),n=function(e){return o.default.createElement("div",null,o.default.createElement("h2",null,"Nothing to see here :("),o.default.createElement("p",null,e.message))};t.a=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),n=a(0),l=a(24),s=(a.n(l),a(25)),i=(a.n(s),a(26));n.render(o.default.createElement(i.a,null),document.getElementById("app")),l.install()},,,,,,,function(e,t){function a(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function o(e){if(e||(e={}),a()){navigator.serviceWorker.register("/sw.js")}else if(window.applicationCache){var t=function(){var e=document.createElement("iframe");e.src="/appcache/manifest.html",e.style.display="none",s=e,document.body.appendChild(e)};return void("complete"===document.readyState?setTimeout(t):window.addEventListener("load",t))}}function n(e,t){}function l(){if(a()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()}),s)try{s.contentWindow.applicationCache.update()}catch(e){}}var s;t.install=o,t.applyUpdate=n,t.update=l},function(e,t){},function(e,t,a){"use strict";var o=a(0),n=a(3),l=a(53),s=a(55),i=a(61),r=a.n(i),c=function(){return o.default.createElement(n.BrowserRouter,null,o.default.createElement("div",null,o.default.createElement(l.a,null),o.default.createElement("div",{className:r.a.container},o.default.createElement(s.a,null))))};t.a=c},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var o=a(0),n=a(54),l=a.n(n),s=a(3),i=function(){return o.default.createElement("header",{className:l.a.heading},o.default.createElement("div",{className:l.a.container},o.default.createElement("h1",{className:l.a.title},o.default.createElement(s.Link,{to:"/",className:l.a.link},"Aletta")),o.default.createElement("nav",null,o.default.createElement("ul",{className:l.a.list},o.default.createElement("li",{className:l.a.listItem},o.default.createElement(s.Link,{className:l.a.link,to:"/posts"},"Posts")),o.default.createElement("li",{className:l.a.listItem},o.default.createElement(s.Link,{className:l.a.link,to:"/about"},"About"))))))};t.a=i},function(e,t){e.exports={heading:"Header-heading-t3AMrsU3",container:"Header-container-1rGbtAXZ",title:"Header-title-3XuFenmf",list:"Header-list-3s4BxC7P","list-item":"Header-list-item-24sQigwQ",listItem:"Header-list-item-24sQigwQ",link:"Header-link-1y9I5yvj"}},function(e,t,a){"use strict";var o=a(0),n=a(3),l=a(56),s=a(58),i=a(59),r=a(16),c=a(60),u=a.n(c),d=function(){return o.default.createElement(n.Switch,null,o.default.createElement(n.Route,{exact:!0,path:"/",render:function(){return o.default.createElement("h2",null,"Welcome to my Blog!")}}),o.default.createElement(n.Route,{path:"/posts/:slug",component:function(e){return o.default.createElement(i.a,{posts:u.a,match:e.match})}}),o.default.createElement(n.Route,{path:"/posts",component:function(){return o.default.createElement(s.a,{posts:u.a})}}),o.default.createElement(n.Route,{exact:!0,path:"/about",component:l.a}),o.default.createElement(n.Route,{component:function(){return o.default.createElement(r.a,{message:"Url does not exist"})}}))};t.a=d},function(e,t,a){"use strict";var o=a(0),n=a(57),l=a.n(n),s=function(){return o.default.createElement("div",null,o.default.createElement("h1",{className:l.a.title},"Hi, I am Yannick"),o.default.createElement("p",{className:l.a.content},"This section is all about me, yay!"))};t.a=s},function(e,t){e.exports={title:"About-title-3cMfCrid"}},function(e,t,a){"use strict";var o=a(0),n=a(3),l=a(14),s=a(15),i=a.n(s),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},c=function(e){return o.default.createElement("div",null,e.posts.posts.map(function(e){return o.default.createElement(l.a,r({key:e.slug},e,{details:!1}))}),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(n.Link,{to:"/posts/test"},o.default.createElement("h2",{className:i.a.title},"Using TravisCI (will not work)"))),o.default.createElement("li",null,o.default.createElement(n.Link,{to:"/test"},"Go Somewhere (Won't work)")),o.default.createElement("li",null,o.default.createElement(n.Link,{to:"/about/cyxc/7sy"},"Go Somewhere (Won't work)"))))};t.a=c},function(e,t,a){"use strict";var o=a(0),n=a(14),l=a(16),s=a(3),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r=function(e){var t=e.posts.posts.find(function(t){return t.slug===e.match.params.slug});return o.default.createElement("div",null,t?o.default.createElement(n.a,i({},t,{details:!0})):o.default.createElement(s.Route,{component:function(){return o.default.createElement(l.a,{message:"Post not found"})}}))};t.a=r},function(e,t){e.exports={posts:[{title:"How to build a progressive web app with React",slug:"how-to-build-a-progressive-web-app-with-react",excerpt:"One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on.",content:"One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on. One of the easiest ways to get a job in the early GitHub days was to work on one of our open source projects. We’d start to recognize your username and ability, and you’d be able to get a better idea of how we operated internally. For a small, scrappy, bootstrapped company, this was a huge time saver for us early on."},{title:"Testing with Jest and Enzyme",slug:"testing-with-jest-and-enzyme",excerpt:"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools.",content:"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools. Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools."},{title:"Getting started with CSS modules in Webpack",slug:"getting-started-with-css-modules-in-webpack",excerpt:"A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files.",content:"A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules). CSS Modules compile to a low-level interchange format called ICSS or Interoperable CSS, but are written like normal CSS files. "}]}},function(e,t){e.exports={container:"App-container-1la2SIOw"}}],[17]);
//# sourceMappingURL=app.c3ba73.js.map