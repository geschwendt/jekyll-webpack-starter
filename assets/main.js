webpackJsonp([0],{"./node_modules/offline-plugin/runtime.js":function(n,e){function t(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function o(n){if(n||(n={}),t()){navigator.serviceWorker.register("/assets/scripts/sw.js")}else;}function i(n,e){}function r(){t()&&navigator.serviceWorker.getRegistration().then(function(n){if(n)return n.update()})}e.install=o,e.applyUpdate=i,e.update=r},"./src/index.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("./src/main/index.js");new o.a;t("./node_modules/offline-plugin/runtime.js").install()},"./src/index.scss":function(n,e){},"./src/main/index.js":function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),r=function(){function n(){o(this,n),this.create()}return i(n,[{key:"performHotReload",value:function(){for(var n,e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];(n=console).log.apply(n,["[Class::Main] hot reload..."].concat(t)),this.destroy(),this.create()}},{key:"create",value:function(){console.log("[Class::Main] initializing")}},{key:"destroy",value:function(){console.log("[Class::Main] destroying")}}]),n}();e.a=r},0:function(n,e,t){t("./src/index.js"),n.exports=t("./src/index.scss")}},[0]);
//# sourceMappingURL=main.js.map