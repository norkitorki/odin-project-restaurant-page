/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t,e,n={266:(t,e,n)=>{n.d(e,{Z:()=>a});var i=n(81),s=n.n(i),o=n(645),r=n.n(o)()(s());r.push([t.id,'/*! PhotoSwipe main CSS by Dmytro Semenov | photoswipe.com */\n\n.pswp {\n  --pswp-bg: #000;\n  --pswp-placeholder-bg: #222;\n  \n\n  --pswp-root-z-index: 100000;\n  \n  --pswp-preloader-color: rgba(79, 79, 79, 0.4);\n  --pswp-preloader-color-secondary: rgba(255, 255, 255, 0.9);\n  \n  /* defined via js:\n  --pswp-transition-duration: 333ms; */\n  \n  --pswp-icon-color: #fff;\n  --pswp-icon-color-secondary: #4f4f4f;\n  --pswp-icon-stroke-color: #4f4f4f;\n  --pswp-icon-stroke-width: 2px;\n\n  --pswp-error-text-color: var(--pswp-icon-color);\n}\n\n\n/*\n\tStyles for basic PhotoSwipe (pswp) functionality (sliding area, open/close transitions)\n*/\n\n.pswp {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: var(--pswp-root-z-index);\n\tdisplay: none;\n\ttouch-action: none;\n\toutline: 0;\n\topacity: 0.003;\n\tcontain: layout style size;\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n/* Prevents focus outline on the root element,\n  (it may be focused initially) */\n.pswp:focus {\n  outline: 0;\n}\n\n.pswp * {\n  box-sizing: border-box;\n}\n\n.pswp img {\n  max-width: none;\n}\n\n.pswp--open {\n\tdisplay: block;\n}\n\n.pswp,\n.pswp__bg {\n\ttransform: translateZ(0);\n\twill-change: opacity;\n}\n\n.pswp__bg {\n  opacity: 0.005;\n\tbackground: var(--pswp-bg);\n}\n\n.pswp,\n.pswp__scroll-wrap {\n\toverflow: hidden;\n}\n\n.pswp__scroll-wrap,\n.pswp__bg,\n.pswp__container,\n.pswp__item,\n.pswp__content,\n.pswp__img,\n.pswp__zoom-wrap {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.pswp__img,\n.pswp__zoom-wrap {\n\twidth: auto;\n\theight: auto;\n}\n\n.pswp--click-to-zoom.pswp--zoom-allowed .pswp__img {\n\tcursor: -webkit-zoom-in;\n\tcursor: -moz-zoom-in;\n\tcursor: zoom-in;\n}\n\n.pswp--click-to-zoom.pswp--zoomed-in .pswp__img {\n\tcursor: move;\n\tcursor: -webkit-grab;\n\tcursor: -moz-grab;\n\tcursor: grab;\n}\n\n.pswp--click-to-zoom.pswp--zoomed-in .pswp__img:active {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n\n/* :active to override grabbing cursor */\n.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img,\n.pswp--no-mouse-drag.pswp--zoomed-in .pswp__img:active,\n.pswp__img {\n\tcursor: -webkit-zoom-out;\n\tcursor: -moz-zoom-out;\n\tcursor: zoom-out;\n}\n\n\n/* Prevent selection and tap highlights */\n.pswp__container,\n.pswp__img,\n.pswp__button,\n.pswp__counter {\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n.pswp__item {\n\t/* z-index for fade transition */\n\tz-index: 1;\n\toverflow: hidden;\n}\n\n.pswp__hidden {\n\tdisplay: none !important;\n}\n\n/* Allow to click through pswp__content element, but not its children */\n.pswp__content {\n  pointer-events: none;\n}\n.pswp__content > * {\n  pointer-events: auto;\n}\n\n\n/*\n\n  PhotoSwipe UI\n\n*/\n\n/*\n\tError message appears when image is not loaded\n\t(JS option errorMsg controls markup)\n*/\n.pswp__error-msg-container {\n  display: grid;\n}\n.pswp__error-msg {\n\tmargin: auto;\n\tfont-size: 1em;\n\tline-height: 1;\n\tcolor: var(--pswp-error-text-color);\n}\n\n/*\nclass pswp__hide-on-close is applied to elements that\nshould hide (for example fade out) when PhotoSwipe is closed\nand show (for example fade in) when PhotoSwipe is opened\n */\n.pswp .pswp__hide-on-close {\n\topacity: 0.005;\n\twill-change: opacity;\n\ttransition: opacity var(--pswp-transition-duration) cubic-bezier(0.4, 0, 0.22, 1);\n\tz-index: 10; /* always overlap slide content */\n\tpointer-events: none; /* hidden elements should not be clickable */\n}\n\n/* class pswp--ui-visible is added when opening or closing transition starts */\n.pswp--ui-visible .pswp__hide-on-close {\n\topacity: 1;\n\tpointer-events: auto;\n}\n\n/* <button> styles, including css reset */\n.pswp__button {\n\tposition: relative;\n\tdisplay: block;\n\twidth: 50px;\n\theight: 60px;\n\tpadding: 0;\n\tmargin: 0;\n\toverflow: hidden;\n\tcursor: pointer;\n\tbackground: none;\n\tborder: 0;\n\tbox-shadow: none;\n\topacity: 0.85;\n\t-webkit-appearance: none;\n\t-webkit-touch-callout: none;\n}\n\n.pswp__button:hover,\n.pswp__button:active,\n.pswp__button:focus {\n  transition: none;\n  padding: 0;\n  background: none;\n  border: 0;\n  box-shadow: none;\n  opacity: 1;\n}\n\n.pswp__button:disabled {\n  opacity: 0.3;\n  cursor: auto;\n}\n\n.pswp__icn {\n  fill: var(--pswp-icon-color);\n  color: var(--pswp-icon-color-secondary);\n}\n\n.pswp__icn {\n  position: absolute;\n  top: 14px;\n  left: 9px;\n  width: 32px;\n  height: 32px;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.pswp__icn-shadow {\n  stroke: var(--pswp-icon-stroke-color);\n  stroke-width: var(--pswp-icon-stroke-width);\n  fill: none;\n}\n\n.pswp__icn:focus {\n\toutline: 0;\n}\n\n/*\n\tdiv element that matches size of large image,\n\tlarge image loads on top of it,\n\tused when msrc is not provided\n*/\ndiv.pswp__img--placeholder,\n.pswp__img--with-bg {\n\tbackground: var(--pswp-placeholder-bg);\n}\n\n.pswp__top-bar {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 60px;\n\tdisplay: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n\tz-index: 10;\n\n\t/* allow events to pass through top bar itself */\n\tpointer-events: none !important;\n}\n.pswp__top-bar > * {\n  pointer-events: auto;\n  /* this makes transition significantly more smooth,\n     even though inner elements are not animated */\n  will-change: opacity;\n}\n\n\n/*\n\n  Close button\n\n*/\n.pswp__button--close {\n  margin-right: 6px;\n}\n\n\n/*\n\n  Arrow buttons\n\n*/\n.pswp__button--arrow {\n  position: absolute;\n  top: 0;\n  width: 75px;\n  height: 100px;\n  top: 50%;\n  margin-top: -50px;\n}\n\n.pswp__button--arrow:disabled {\n  display: none;\n  cursor: default;\n}\n\n.pswp__button--arrow .pswp__icn {\n  top: 50%;\n  margin-top: -30px;\n  width: 60px;\n  height: 60px;\n  background: none;\n  border-radius: 0;\n}\n\n.pswp--one-slide .pswp__button--arrow {\n  display: none;\n}\n\n/* hide arrows on touch screens */\n.pswp--touch .pswp__button--arrow {\n  visibility: hidden;\n}\n\n/* show arrows only after mouse was used */\n.pswp--has_mouse .pswp__button--arrow {\n  visibility: visible;\n}\n\n.pswp__button--arrow--prev {\n  right: auto;\n  left: 0px;\n}\n\n.pswp__button--arrow--next {\n  right: 0px;\n}\n.pswp__button--arrow--next .pswp__icn {\n  left: auto;\n  right: 14px;\n  /* flip horizontally */\n  transform: scale(-1, 1);\n}\n\n/*\n\n  Zoom button\n\n*/\n.pswp__button--zoom {\n  display: none;\n}\n\n.pswp--zoom-allowed .pswp__button--zoom {\n  display: block;\n}\n\n/* "+" => "-" */\n.pswp--zoomed-in .pswp__zoom-icn-bar-v {\n  display: none;\n}\n\n\n/*\n\n  Loading indicator\n\n*/\n.pswp__preloader {\n  position: relative;\n  overflow: hidden;\n  width: 50px;\n  height: 60px;\n  margin-right: auto;\n}\n\n.pswp__preloader .pswp__icn {\n  opacity: 0;\n  transition: opacity 0.2s linear;\n  animation: pswp-clockwise 600ms linear infinite;\n}\n\n.pswp__preloader--active .pswp__icn {\n  opacity: 0.85;\n}\n\n@keyframes pswp-clockwise {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n/*\n\n  "1 of 10" counter\n\n*/\n.pswp__counter {\n  height: 30px;\n  margin-top: 15px;\n  margin-inline-start: 20px;\n  font-size: 14px;\n  line-height: 30px;\n  color: var(--pswp-icon-color);\n  text-shadow: 1px 1px 3px var(--pswp-icon-color-secondary);\n  opacity: 0.85;\n}\n\n.pswp--one-slide .pswp__counter {\n  display: none;\n}\n',""]);const a=r},426:(t,e,n)=>{n.d(e,{Z:()=>h});var i=n(81),s=n.n(i),o=n(645),r=n.n(o),a=n(667),l=n.n(a),p=new URL(n(37),n.b),d=r()(s()),c=l()(p);d.push([t.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Custom CSS */\n\n@font-face {\n  font-family: Friendlist;\n  src: url(${c});\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif, 'Segoe UI', Tahoma, Geneva, Verdana;\n  background-color: #a75823;\n  color: #ffffff;\n}\n\n.main-heading {\n  font-family: Friendlist;\n  font-size: 3.5rem;\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n}\n\n#content { display: flex; }\n\n.main-wrapper { width: 100%; }\n\nnav {\n  margin: 1rem 0 0 1rem;\n  display: flex;\n  gap: .6rem;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\nnav a { border-radius: .5rem .5rem 0 0; }\n\nnav a:hover,\nnav a:focus { color:#a75823; }\n\nmain {\n  line-height: 1.5;\n  padding: 1.5rem;\n  background-color: #441b1b;\n  text-align: center;\n  gap: 1.5rem;\n}\n\n.main-navigation > a {\n  color: black;\n  text-decoration: none;\n  background-color: #ffffff;\n  padding: .5rem;\n}\n\n.main-image {\n  width: 600px;\n  height: 100%;\n}\n\nform { text-align: center; }\n\nlabel {\n  display: flex;\n  flex-direction: column;\n  margin: .8rem auto;\n  font-family: FriendList;\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n\ninput {\n  margin: .8rem auto;\n  padding: .6rem .4rem;\n}\n\ninput[type="submit"] {\n  font-weight: bold;\n  padding: .4rem .6rem;\n}\n\nfooter {\n  border-top: 3px solid #ffffff;\n  flex-grow: 1;\n  padding: 2rem 1rem;\n  font-size: 0.8rem;\n  font-weight: bold;\n  background-color: #441b1b;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.socials {\n  display: flex;\n  gap: .8rem;\n}\n\n.socials img {\n  width: 30px;\n  height: 30px;\n}\n\n.socials img:hover, .socials img:focus {\n  transform: scale(1.2);\n  cursor: pointer;\n}\n\n@media (max-width: 1050px) {\n  #content {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  nav { justify-content: center; }\n}\n`,""]);const h=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(r[l]=!0)}for(var p=0;p<t.length;p++){var d=[].concat(t[p]);i&&r[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},r=[],a=0;a<t.length;a++){var l=t[a],p=i.base?l[0]+i.base:l[0],d=o[p]||0,c="".concat(p," ").concat(d);o[p]=d+1;var h=n(c),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var m=s(u,i);i.byIndex=a,e.splice(a,0,{identifier:c,updater:m,references:1})}r.push(c)}return r}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var o=i(t=t||[],s=s||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var a=n(o[r]);e[a].references--}for(var l=i(t,s),p=0;p<o.length;p++){var d=n(o[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},37:(t,e,n)=>{t.exports=n.p+"eb271e61ce2e9da96021.otf"}},i={};function s(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={id:t,exports:{}};return n[t](o,o.exports,s),o.exports}s.m=n,s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.f={},s.e=t=>Promise.all(Object.keys(s.f).reduce(((e,n)=>(s.f[n](t,e),e)),[])),s.u=t=>t+".main.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="odin-project-restaurant-page:",s.l=(n,i,o,r)=>{if(t[n])t[n].push(i);else{var a,l;if(void 0!==o)for(var p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var c=p[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==e+o){a=c;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",e+o),a.src=n),t[n]=[i];var h=(e,i)=>{a.onerror=a.onload=null,clearTimeout(u);var s=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((t=>t(i))),e)return e(i)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}},s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&!t;)t=n[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})(),(()=>{s.b=document.baseURI||self.location.href;var t={179:0};s.f.j=(e,n)=>{var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,s)=>i=t[e]=[n,s]));n.push(i[2]=o);var r=s.p+s.u(e),a=new Error;s.l(r,(n=>{if(s.o(t,e)&&(0!==(i=t[e])&&(t[e]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",a.name="ChunkLoadError",a.type=o,a.request=r,i[1](a)}}),"chunk-"+e,e)}};var e=(e,n)=>{var i,o,[r,a,l]=n,p=0;if(r.some((e=>0!==t[e]))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);l&&l(s)}for(e&&e(n);p<r.length;p++)o=r[p],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0},n=self.webpackChunkodin_project_restaurant_page=self.webpackChunkodin_project_restaurant_page||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),s.nc=void 0,(()=>{var t=s(379),e=s.n(t),n=s(795),i=s.n(n),o=s(569),r=s.n(o),a=s(565),l=s.n(a),p=s(216),d=s.n(p),c=s(589),h=s.n(c),u=s(426),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=r().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),e()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;const f=s.p+"6fce52e3204fcc58a392.jpg",g=s.p+"263ba123b4da16ebbced.jpg",w=s.p+"94f5a8c7ee8f8678099d.png",v=s.p+"69b956bab42af010b47d.png",y=s.p+"966ea5cdaa8adf0267eb.png";function b(t,e,n){const i=document.createElement(e);return t&&(i.className=t),n&&n.appendChild(i),i}function _(t,e,n){t.style.width="number"==typeof e?`${e}px`:e,t.style.height="number"==typeof n?`${n}px`:n}const x="loading",S="loaded",E="error";function z(t,e,n=document){let i=[];if(t instanceof Element)i=[t];else if(t instanceof NodeList||Array.isArray(t))i=Array.from(t);else{const s="string"==typeof t?t:e;s&&(i=Array.from(n.querySelectorAll(s)))}return i}function k(){return!(!navigator.vendor||!navigator.vendor.match(/apple/i))}class C{constructor(t,e){this.type=t,this.defaultPrevented=!1,e&&Object.assign(this,e)}preventDefault(){this.defaultPrevented=!0}}class I{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,e,n=100){var i,s,o;this._filters[t]||(this._filters[t]=[]),null===(i=this._filters[t])||void 0===i||i.push({fn:e,priority:n}),null===(s=this._filters[t])||void 0===s||s.sort(((t,e)=>t.priority-e.priority)),null===(o=this.pswp)||void 0===o||o.addFilter(t,e,n)}removeFilter(t,e){this._filters[t]&&(this._filters[t]=this._filters[t].filter((t=>t.fn!==e))),this.pswp&&this.pswp.removeFilter(t,e)}applyFilters(t,...e){var n;return null===(n=this._filters[t])||void 0===n||n.forEach((t=>{e[0]=t.fn.apply(this,e)})),e[0]}on(t,e){var n,i;this._listeners[t]||(this._listeners[t]=[]),null===(n=this._listeners[t])||void 0===n||n.push(e),null===(i=this.pswp)||void 0===i||i.on(t,e)}off(t,e){var n;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter((t=>e!==t))),null===(n=this.pswp)||void 0===n||n.off(t,e)}dispatch(t,e){var n;if(this.pswp)return this.pswp.dispatch(t,e);const i=new C(t,e);return null===(n=this._listeners[t])||void 0===n||n.forEach((t=>{t.call(this,i)})),i}}class P{constructor(t,e){if(this.element=b("pswp__img pswp__img--placeholder",t?"img":"div",e),t){const e=this.element;e.decoding="async",e.alt="",e.src=t,e.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,e){this.element&&("IMG"===this.element.tagName?(_(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=function(t,e,n){let i="translate3d(0px,0px,0)";return void 0!==n&&(i+=` scale3d(${n},${n},1)`),i}(0,0,t/250)):_(this.element,t,e))}destroy(){var t;null!==(t=this.element)&&void 0!==t&&t.parentNode&&this.element.remove(),this.element=null}}class L{constructor(t,e,n){this.instance=e,this.data=t,this.index=n,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state="idle",this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout((()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)}),1e3)}load(t,e){if(this.slide&&this.usePlaceholder())if(this.placeholder){const t=this.placeholder.element;t&&!t.parentElement&&this.slide.container.prepend(t)}else{const t=this.instance.applyFilters("placeholderSrc",!(!this.data.msrc||!this.slide.isFirstSlide)&&this.data.msrc,this);this.placeholder=new P(t,this.slide.container)}this.element&&!e||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=b("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=b("pswp__content","div"),this.element.innerHTML=this.data.html||""),e&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var e,n;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const i=this.element;this.updateSrcsetSizes(),this.data.srcset&&(i.srcset=this.data.srcset),i.src=null!==(e=this.data.src)&&void 0!==e?e:"",i.alt=null!==(n=this.data.alt)&&void 0!==n?n:"",this.state=x,i.complete?this.onLoaded():(i.onload=()=>{this.onLoaded()},i.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=S,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),this.state!==S&&this.state!==E||this.removePlaceholder())}onError(){this.state=E,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===x,this)}isError(){return this.state===E}isImageContent(){return"image"===this.type}setDisplayedSize(t,e){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,e),!this.instance.dispatch("contentResize",{content:this,width:t,height:e}).defaultPrevented&&(_(this.element,t,e),this.isImageContent()&&!this.isError()))){const n=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=e,n?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:e,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==E,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented||(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var t,e;let n=b("pswp__error-msg","div");n.innerText=null!==(t=null===(e=this.instance.options)||void 0===e?void 0:e.errorMsg)&&void 0!==t?t:"",n=this.instance.applyFilters("contentErrorElement",n,this),this.element=b("pswp__content pswp__error-msg-container","div"),this.element.appendChild(n),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===E)return void this.displayError();if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||k())?(this.isDecoding=!0,this.element.decode().catch((()=>{})).finally((()=>{this.isDecoding=!1,this.appendImage()}))):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){!this.instance.dispatch("contentActivate",{content:this}).defaultPrevented&&this.slide&&(this.isImageContent()&&this.isDecoding&&!k()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,this.instance.dispatch("contentRemove",{content:this}).defaultPrevented||(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),this.state!==S&&this.state!==E||this.removePlaceholder()))}}function A(t,e,n,i,s){let o=0;if(e.paddingFn)o=e.paddingFn(n,i,s)[t];else if(e.padding)o=e.padding[t];else{const n="padding"+t[0].toUpperCase()+t.slice(1);e[n]&&(o=e[n])}return Number(o)||0}class M{constructor(t,e,n,i){this.pswp=i,this.options=t,this.itemData=e,this.index=n,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,e,n){const i={x:t,y:e};this.elementSize=i,this.panAreaSize=n;const s=n.x/i.x,o=n.y/i.y;this.fit=Math.min(1,s<o?s:o),this.fill=Math.min(1,s>o?s:o),this.vFill=Math.min(1,o),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const e=t+"ZoomLevel",n=this.options[e];if(n)return"function"==typeof n?n(this):"fill"===n?this.fill:"fit"===n?this.fit:Number(n)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,3*this.fit),this.elementSize&&t*this.elementSize.x>4e3&&(t=4e3/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,4*this.fit)}}function T(t,e,n){const i=e.createContentFromData(t,n);let s;const{options:o}=e;if(o){let r;s=new M(o,t,-1),r=e.pswp?e.pswp.viewportSize:function(t,e){if(t.getViewportSizeFn){const n=t.getViewportSizeFn(t,e);if(n)return n}return{x:document.documentElement.clientWidth,y:window.innerHeight}}(o,e);const a=function(t,e,n,i){return{x:e.x-A("left",t,e,n,i)-A("right",t,e,n,i),y:e.y-A("top",t,e,n,i)-A("bottom",t,e,n,i)}}(o,r,t,n);s.update(i.width,i.height,a)}return i.lazyLoad(),s&&i.setDisplayedSize(Math.ceil(i.width*s.initial),Math.ceil(i.height*s.initial)),i}class F extends I{getNumItems(){var t;let e=0;const n=null===(t=this.options)||void 0===t?void 0:t.dataSource;n&&"length"in n?e=n.length:n&&"gallery"in n&&(n.items||(n.items=this._getGalleryDOMElements(n.gallery)),n.items&&(e=n.items.length));const i=this.dispatch("numItems",{dataSource:n,numItems:e});return this.applyFilters("numItems",i.numItems,n)}createContentFromData(t,e){return new L(t,this,e)}getItemData(t){var e;const n=null===(e=this.options)||void 0===e?void 0:e.dataSource;let i={};Array.isArray(n)?i=n[t]:n&&"gallery"in n&&(n.items||(n.items=this._getGalleryDOMElements(n.gallery)),i=n.items[t]);let s=i;s instanceof Element&&(s=this._domElementToItemData(s));const o=this.dispatch("itemData",{itemData:s||{},index:t});return this.applyFilters("itemData",o.itemData,t)}_getGalleryDOMElements(t){var e,n;return null!==(e=this.options)&&void 0!==e&&e.children||null!==(n=this.options)&&void 0!==n&&n.childSelector?z(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const e={element:t},n="A"===t.tagName?t:t.querySelector("a");if(n){e.src=n.dataset.pswpSrc||n.href,n.dataset.pswpSrcset&&(e.srcset=n.dataset.pswpSrcset),e.width=n.dataset.pswpWidth?parseInt(n.dataset.pswpWidth,10):0,e.height=n.dataset.pswpHeight?parseInt(n.dataset.pswpHeight,10):0,e.w=e.width,e.h=e.height,n.dataset.pswpType&&(e.type=n.dataset.pswpType);const s=t.querySelector("img");var i;s&&(e.msrc=s.currentSrc||s.src,e.alt=null!==(i=s.getAttribute("alt"))&&void 0!==i?i:""),(n.dataset.pswpCropped||n.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,n)}lazyLoadData(t,e){return T(t,this,e)}}class D extends F{constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){z(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.addEventListener("click",this.onThumbnailsClick,!1)}))}onThumbnailsClick(t){if(function(t){return"button"in t&&1===t.button||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey}(t)||window.pswp)return;let e={x:t.clientX,y:t.clientY};e.x||e.y||(e=null);let n=this.getClickedIndex(t);n=this.applyFilters("clickedIndex",n,t,this);const i={gallery:t.currentTarget};n>=0&&(t.preventDefault(),this.loadAndOpen(n,i,e))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const e=t.target,n=z(this.options.children,this.options.childSelector,t.currentTarget).findIndex((t=>t===e||t.contains(e)));return-1!==n?n:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,e,n){if(window.pswp||!this.options)return!1;if(!e&&this.options.gallery&&this.options.children){const t=z(this.options.gallery);t[0]&&(e={gallery:t[0]})}return this.options.index=t,this.options.initialPointerPos=n,this.shouldOpen=!0,this.preload(t,e),!0}preload(t,e){const{options:n}=this;e&&(n.dataSource=e);const i=[],s=typeof n.pswpModule;if("function"==typeof(o=n.pswpModule)&&o.prototype&&o.prototype.goTo)i.push(Promise.resolve(n.pswpModule));else{if("string"===s)throw new Error("pswpModule as string is no longer supported");if("function"!==s)throw new Error("pswpModule is not valid");i.push(n.pswpModule())}var o;"function"==typeof n.openPromise&&i.push(n.openPromise()),!1!==n.preloadFirstSlide&&t>=0&&(this._preloadedContent=function(t,e){const n=e.getItemData(t);if(!e.dispatch("lazyLoadSlide",{index:t,itemData:n}).defaultPrevented)return T(n,e,t)}(t,this));const r=++this._uid;Promise.all(i).then((t=>{if(this.shouldOpen){const e=t[0];this._openPhotoswipe(e,r)}}))}_openPhotoswipe(t,e){if(e!==this._uid&&this.shouldOpen)return;if(this.shouldOpen=!1,window.pswp)return;const n="object"==typeof t?new t.default(this.options):new t(this.options);this.pswp=n,window.pswp=n,Object.keys(this._listeners).forEach((t=>{var e;null===(e=this._listeners[t])||void 0===e||e.forEach((e=>{n.on(t,e)}))})),Object.keys(this._filters).forEach((t=>{var e;null===(e=this._filters[t])||void 0===e||e.forEach((e=>{n.addFilter(t,e.fn,e.priority)}))})),this._preloadedContent&&(n.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),n.on("destroy",(()=>{this.pswp=void 0,delete window.pswp})),n.init()}destroy(){var t;null===(t=this.pswp)||void 0===t||t.destroy(),this.shouldOpen=!1,this._listeners={},z(this.options.gallery,this.options.gallerySelector).forEach((t=>{t.removeEventListener("click",this.onThumbnailsClick,!1)}))}}var N=s(266),O={};O.styleTagTransform=h(),O.setAttributes=l(),O.insert=r().bind(null,"head"),O.domAPI=i(),O.insertStyleElement=d(),e()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;const j=document.getElementById("content"),q=document.createElement("main");function Z(...t){t.forEach((t=>this.appendChild(t)))}const H=document.createElement("img");H.classList.add("main-image"),H.src=f;const U=document.createElement("div");U.classList.add("main-wrapper");const W=document.createElement("nav");W.classList.add("main-navigation"),W.addEventListener("click",(t=>{if("A"!==t.target.nodeName)return;const e=t.target.textContent.toLowerCase(),n=document.getElementById(e).content.cloneNode(!0);q.innerHTML="",q.appendChild(n),"gallery"===e&&(t=>{new D({gallery:`#${t.id}`,children:"a",pswpModule:()=>s.e(826).then(s.bind(s,826))}).init()})($)})),["Home","Gallery","Menu","Book"].forEach((t=>{let e=document.createElement("a");e.textContent=t,e.href="#",W.appendChild(e)}));const $=((t,e)=>{const n=document.createElement("div");let i,s;n.id="image-gallery";for(let t=1;t<=8;t++)i=document.createElement("a"),i.href=`https://source.unsplash.com/random/1280x720/?restaurant/?sig=${t}`,i.dataset.pswpWidth="1280",i.dataset.pswpHeight="720",i.target="_blank",s=document.createElement("img"),s.src=i.href,s.width="320",i.appendChild(s),n.appendChild(i);return n})();Z.call(document.getElementById("gallery").content,$);const B=document.createElement("img");document.createElement("div"),B.classList.add("menu-image"),B.src=g,Z.call(document.getElementById("menu").content,B);const R=(t,e=nil)=>{const n=document.createElement("label");return n.textContent=t,e&&n.appendChild(e),n},G=(t={})=>{const e=document.createElement("input");return Object.entries(t).forEach((t=>e[t[0]]=t[1])),e},K=document.createElement("p"),V=document.createElement("form"),J=R("Name",G({type:"text",required:!0})),Q=R("Phone Number",G({type:"tel",required:!0})),X=R("Email",G({type:"email",required:!0})),Y=R("Date",G({type:"date",required:!0})),tt=R("Number of Persons",G({type:"number",value:1,min:0,max:8,required:!0})),et=G({type:"submit",value:"Send Request"});K.textContent="We would love to have you dine with us. Request a table today!",Z.apply(V,[J,Q,X,Y,tt,et]),Z.apply(document.getElementById("book").content,[K,V]);const nt=document.createElement("footer"),it=document.createElement("div"),st=document.createElement("div"),ot=document.createElement("div"),rt=document.createElement("img"),at=document.createElement("img"),lt=document.createElement("img");ot.classList.add("socials"),rt.src=w,at.src=v,lt.src=y,Z.apply(ot,[rt,at,lt]),it.textContent="Lorem Ipsum street Amsterdam, 00001",st.textContent="odinrestaurant.com",Z.apply(nt,[it,st,ot]),Z.apply(U,[W,q]),Z.apply(j,[H,U]),Z.call(document.body,nt);const pt=document.getElementById("home").content.cloneNode(!0);q.appendChild(pt)})()})();