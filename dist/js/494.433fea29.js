(self["webpackChunkproject_macaron"]=self["webpackChunkproject_macaron"]||[]).push([[494],{6905:function(e,t,n){n(3429),function(t,n){e.exports=n()}(0,(function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n(1),r=(i(a),n(6)),s=i(r),c=n(7),l=i(c),d=n(8),u=i(d),p=n(9),m=i(p),f=n(10),b=i(f),g=n(11),h=i(g),v=n(14),y=i(v),w=[],x=!1,k={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(x=!0),x)return w=(0,h.default)(w,k),(0,b.default)(w,k.once),w},_=function(){w=(0,y.default)(),D()},j=function(){w.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},F=function(e){return!0===e||"mobile"===e&&m.default.mobile()||"phone"===e&&m.default.phone()||"tablet"===e&&m.default.tablet()||"function"==typeof e&&!0===e()},B=function(e){k=o(k,e),w=(0,y.default)();var t=document.all&&!window.atob;return F(k.disable)||t?j():(k.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),k.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),"DOMContentLoaded"===k.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?D(!0):"load"===k.startEvent?window.addEventListener(k.startEvent,(function(){D(!0)})):document.addEventListener(k.startEvent,(function(){D(!0)})),window.addEventListener("resize",(0,l.default)(D,k.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(D,k.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,b.default)(w,k.once)}),k.throttleDelay)),k.disableMutationObserver||u.default.ready("[data-aos]",_),w)};e.exports={init:B,refresh:D,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,i=g;return b=g=void 0,x=t,v=e.apply(i,n)}function a(e){return x=e,y=setTimeout(d,t),j?i(e):v}function r(e){var n=e-w,i=e-x,o=t-n;return F?D(o,h-i):o}function c(e){var n=e-w,i=e-x;return void 0===w||n>=t||n<0||F&&i>=h}function d(){var e=_();return c(e)?u(e):void(y=setTimeout(d,r(e)))}function u(e){return y=void 0,B&&b?i(e):(b=g=void 0,v)}function p(){void 0!==y&&clearTimeout(y),x=0,b=w=g=y=void 0}function m(){return void 0===y?v:u(_())}function f(){var e=_(),n=c(e);if(b=arguments,g=this,w=e,n){if(void 0===y)return a(w);if(F)return y=setTimeout(d,t),i(w)}return void 0===y&&(y=setTimeout(d,t)),v}var b,g,h,v,y,w,x=0,j=!1,F=!1,B=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,o(n)&&(j=!!n.leading,F="maxWait"in n,h=F?k(s(n.maxWait)||0,t):h,B="trailing"in n?!!n.trailing:B),f.cancel=p,f.flush=m,f}function i(e,t,i){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(l);return o(i)&&(a="leading"in i?!!i.leading:a,r="trailing"in i?!!i.trailing:r),n(e,t,{leading:a,maxWait:t,trailing:r})}function o(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||a(e)&&x.call(e)==u}function s(e){if("number"==typeof e)return e;if(r(e))return d;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=f.test(e);return n||b.test(e)?g(e.slice(2),n?2:8):m.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,u="[object Symbol]",p=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt,h="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=h||v||Function("return this")(),w=Object.prototype,x=w.toString,k=Math.max,D=Math.min,_=function(){return y.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,i=g;return b=g=void 0,_=t,v=e.apply(i,n)}function a(e){return _=e,y=setTimeout(d,t),j?o(e):v}function s(e){var n=e-w,i=e-_,o=t-n;return F?k(o,h-i):o}function l(e){var n=e-w,i=e-_;return void 0===w||n>=t||n<0||F&&i>=h}function d(){var e=D();return l(e)?u(e):void(y=setTimeout(d,s(e)))}function u(e){return y=void 0,B&&b?o(e):(b=g=void 0,v)}function p(){void 0!==y&&clearTimeout(y),_=0,b=w=g=y=void 0}function m(){return void 0===y?v:u(D())}function f(){var e=D(),n=l(e);if(b=arguments,g=this,w=e,n){if(void 0===y)return a(w);if(F)return y=setTimeout(d,t),o(w)}return void 0===y&&(y=setTimeout(d,t)),v}var b,g,h,v,y,w,_=0,j=!1,F=!1,B=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,i(n)&&(j=!!n.leading,F="maxWait"in n,h=F?x(r(n.maxWait)||0,t):h,B="trailing"in n?!!n.trailing:B),f.cancel=p,f.flush=m,f}function i(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||o(e)&&w.call(e)==d}function r(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=m.test(e);return n||f.test(e)?b(e.slice(2),n?2:8):p.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",u=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,f=/^0o[0-7]+$/i,b=parseInt,g="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,v=g||h||Function("return this")(),y=Object.prototype,w=y.toString,x=Math.max,k=Math.min,D=function(){return v.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(i=e[t],i.dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function a(e,t){var n=window.document,o=i(),a=new o(r);s=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes),o=t.concat(i);if(n(o))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:o,ready:a}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=i();return!(!a.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,a){n(e,o+i,t)}))};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),a=i(o),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),a=i(o),r=function(e,t){var n=0,i=0,o=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(i=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,a.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+e.offsetHeight;break;case"center-center":n+=o/2+e.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=e.offsetHeight+o;break;case"center-top":n+=e.offsetHeight/2+o}return r.anchorPlacement||r.offset||isNaN(t)||(i=t),n+i};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])}))},1462:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var i=n(3396),o=n(7139),a=n(9242);const r={class:"card h-100"},s={class:"zIndex position-absolute end-0 text-end p-2 icon-bg",style:{height:"5rem",width:"5rem"}},c=(0,i._)("i",{class:"bi bi-suit-heart"},null,-1),l=[c],d={key:0,class:"zIndex position-absolute mt-3 p-2 text-white smallTag bg-secondary"},u={key:1,class:"zIndex position-absolute mt-3 p-2 text-white smallTag"},p=["src","alt"],m={class:"card-body position-relative"},f={class:"d-flex flex-column justify-content-between h-100"},b={class:"card-title fw-bolder"},g={class:"mb-2"},h={key:0,class:"mb-2"},v={key:1,class:"mb-2"},y={class:"text-gray me-2"},w={class:"text-danger"},x=(0,i._)("i",{class:"bi bi-cart-plus me-2"},null,-1);function k(e,t,n,c,k,D){const _=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",s,[(0,i._)("a",{href:"#",class:(0,o.C_)(["link-dark fs-4",{collected:D.isCollected}]),onClick:t[0]||(t[0]=(0,a.iM)((e=>D.setCollect(n.product.id)),["prevent"]))},l,2)]),"期間限定"===n.product.category?((0,i.wg)(),(0,i.iD)("p",d," 期間限定 ")):n.product.origin_price!==n.product.price?((0,i.wg)(),(0,i.iD)("p",u," 特價 "+(0,o.zw)(Math.floor(n.product.price/n.product.origin_price*10))+" 折 ",1)):(0,i.kq)("",!0),(0,i.Wm)(_,{to:`/product/${n.product.id}`,class:"overflow-hidden rounded-top"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:n.product.imageUrl,class:"card-img-top productImg",alt:n.product.title,style:{height:"300px","object-fit":"cover"}},null,8,p)])),_:1},8,["to"]),(0,i._)("div",m,[(0,i.Wm)(_,{to:`/product/${n.product.id}`,class:"stretched-link"},null,8,["to"]),(0,i._)("div",f,[(0,i._)("h5",b,(0,o.zw)(n.product.title),1),(0,i._)("div",null,[(0,i._)("p",g,(0,o.zw)(n.product.unit),1),n.product.origin_price===n.product.price?((0,i.wg)(),(0,i.iD)("p",h," NT$"+(0,o.zw)(e.$filters.currency(n.product.origin_price))+"元 ",1)):((0,i.wg)(),(0,i.iD)("p",v,[(0,i._)("del",y,"NT$"+(0,o.zw)(e.$filters.currency(n.product.origin_price))+"元",1),(0,i._)("span",w,"NT$"+(0,o.zw)(e.$filters.currency(n.product.price))+"元",1)])),(0,i._)("a",{href:"#",class:"zIndex position-relative btn btn-outline-secondary w-100",onClick:t[1]||(t[1]=(0,a.iM)((e=>this.emitter.emit("addCart",{product_id:n.product.id,qty:1})),["prevent"]))},[x,(0,i.Uk)("加到購物車")])])])])])}var D={data(){return{collect:""}},computed:{isCollected(){return this.collect.findIndex((e=>e===this.product.id))>-1}},props:["product"],inject:["emitter"],methods:{setCollect(e){this.emitter.emit("setCollect",e)}},created(){this.emitter.on("collectInfo",(e=>{this.collect=e})),this.emitter.emit("getCollectInfo")}},_=n(89);const j=(0,_.Z)(D,[["render",k]]);var F=j},436:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var i=n(3396),o=n(7139);const a={class:"container py-5"},r={class:"d-flex flex-wrap justify-content-between align-items-center mb-3"},s={class:"fw-bolder text-primary-emphasis mb-0"},c=(0,i._)("i",{class:"bi bi-caret-right-fill"},null,-1),l={class:"row row-cols-md-3 row-cols-lg-5 g-4"},d={key:0,class:"card border-0"},u=["src","alt"],p={class:"position-absolute bottom-0"},m={key:0,class:"fs-6 ms-3 badge rounded-pill text-bg-primary"},f={key:1,class:"fs-6 ms-3 badge rounded-pill text-bg-secondary"},b={class:"card-img-overlay p-0"},g={class:"d-flex justify-content-center align-items-center rounded py-3 d-lg-none",style:{background:"linear-gradient(\r\n                    rgba(41, 41, 43, 0.5) 20%,\r\n                    transparent\r\n                  )"}},h={class:"fw-bolder text-white px-2 fs-5 text-center"},v={class:"h-100 d-none d-lg-flex flex-column justify-content-center align-items-center rounded productTitle",style:{"background-color":"rgba(41, 41, 43, 0.5)"}},y={class:"fw-bolder text-white px-3 fs-5 text-center mb-5"},w=(0,i._)("p",{class:"fw-bolder text-white fs-5 linkIcon"},[(0,i._)("i",{class:"bi bi-search"})],-1);function x(e,t,n,x,k,D){const _=(0,i.up)("router-link"),j=(0,i.up)("ProductCard");return k.showData.length>0?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,o.C_)({"bg-primary-subtle":n.bgColor})},[(0,i._)("div",a,[(0,i._)("div",r,[(0,i._)("h5",s,[(0,i.WI)(e.$slots,"title",{},(()=>[(0,i.Uk)("推薦給您 ...")]))]),(0,i.Wm)(_,{to:"/products",class:"link-secondary text-decoration-none",onClick:t[0]||(t[0]=e=>D.emitter.emit("setFilterStore",""))},{default:(0,i.w5)((()=>[(0,i.Uk)("看更多產品"),c])),_:1})]),(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.showData,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"col-12 flex-fill",key:"showData"+t},[n.classicType?((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("img",{src:e.imageUrl,class:"card-img productImg",alt:e.title,style:{height:"300px","object-fit":"cover"}},null,8,u),(0,i._)("div",p,["期間限定"===e.category?((0,i.wg)(),(0,i.iD)("p",m," 期間限定 ")):e.origin_price!==e.price?((0,i.wg)(),(0,i.iD)("p",f," 特價 "+(0,o.zw)(Math.floor(e.price/e.origin_price*10))+" 折 ",1)):(0,i.kq)("",!0)]),(0,i._)("div",b,[(0,i._)("div",g,[(0,i._)("p",h,(0,o.zw)(e.title),1)]),(0,i.Wm)(_,{to:`/product/${e.id}`,class:"stretched-link productLink"},null,8,["to"]),(0,i._)("div",v,[(0,i._)("p",y,(0,o.zw)(e.title),1),w])])])):((0,i.wg)(),(0,i.j4)(j,{key:1,product:e,onAddCart:D.addCart},null,8,["product","onAddCart"]))])))),128))])])],2)):(0,i.kq)("",!0)}var k=n(1462),D={data(){return{allData:[],showData:[],isLoading:!1}},inject:["emitter"],props:["num","bgColor","isRandom","classicType"],emits:["addCart"],components:{ProductCard:k.Z},methods:{getData(){const e="https://vue3-course-api.hexschool.io/api/nn_macaron/products/all";this.isLoading=!0,this.axios.get(e).then((e=>{this.isLoading=!1,e.data.success?(this.allData=e.data.products,this.setShowData()):this.getDataError(`(${e.data.message})`)})).catch((e=>{this.isLoading=!1,this.getDataError(`(${e})`)}))},getDataError(e=""){this.emitter.emit("sendMsg",{message:`產品無法載入 ${e}`,status:"error"})},setShowData(){let e=0;this.isRandom&&(e=Math.floor(Math.random()*(this.allData.length-this.num))),this.showData=this.allData.slice(e,e+this.num)},addCart(e){this.$emit("addCart",e)}},created(){this.getData()}},_=n(89);const j=(0,_.Z)(D,[["render",x]]);var F=j},2494:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ye}});var i=n(3396),o=n(7139),a=n(9242);const r={class:"bg-white overflow-hidden"},s={class:"container py-3 py-md-5"},c={class:"col-md-4 feature-describe rounded text-primary-emphasis"},l=["data-aos"],d={class:"fw-bolder"},u={class:"m-0"},p={class:"col-md-5 feature-image"},m=["data-aos","src","alt"],f={class:"container pe-md-5"},b={class:"row justify-content-end align-items-center",style:{"min-height":"300px"}},g={class:"col-lg-6 text-primary-emphasis",style:{"backdrop-filter":"blur(2px)"}},h=(0,i._)("h3",{class:"fw-bolder"},"訂閱我們",-1),v=(0,i._)("p",{class:"mb-2"}," 訂閱 macarOn 電子報，獲得最新優惠與活動訊息，還可享有訂閱限定的折扣優惠！ ",-1),y={class:"input-group"},w=["onClick"],x=(0,i._)("div",{class:"fixed-top w-100 h-100 subscribeBackground"},null,-1),k={class:"position-fixed",style:{"z-index":"1058","backdrop-filter":"blur(5px)",top:"-100vh",height:"300vh",left:"-100vw",width:"300vw"}},D={class:"d-flex flex-column justify-content-center align-items-center h-100"},_={class:"card text-primary-emphasis border-dark px-3 py-1 bg-light shadow-lg",style:{"max-width":"90vw"}},j=(0,i._)("i",{class:"bi bi-x-lg"},null,-1),F=[j],B={class:"card-body"},z=(0,i._)("h3",{class:"fw-bolder"},"訂閱成功！",-1),C={class:"mb-2 text-secondary d-inline-block",style:{"background-image":"linear-gradient(\r\n                transparent 60%,\r\n                var(--bs-secondary-bg-subtle) 40%\r\n              )"},ref:"subscribeEmail"},E=(0,i._)("p",{class:"mb-2"},"感謝您訂閱 macarOn 電子報！",-1),I=(0,i._)("p",{class:"mb-2"},"搶先獻上訂閱折扣碼，結帳金額享八折優惠",-1),O={class:"d-flex flex-wrap mb-4 mb-md-3"},S={class:"mb-2 display-6 me-2"},L=(0,i._)("i",{class:"bi bi-ticket-perforated-fill me-2"},null,-1),A={ref:"discountCode"},W={class:"text-center"},V={class:"bg-white"},M={class:"container pt-5 pb-4 text-center text-primary-emphasis"},T=(0,i._)("h3",{class:"fw-bolder"},[(0,i._)("span",{class:"text-secondary"},"周年慶開跑"),(0,i.Uk)(" 不限金額免運費 ")],-1),H=(0,i._)("p",{class:"mb-0"},"提供三大取貨服務",-1),Q={class:"d-flex flex-wrap justify-content-evenly align-items-center"},q={class:"delivery"},N=["src","alt"],P={class:"fw-bolder mt-3"};function G(e,t,n,j,G,Y){const U=(0,i.up)("BannerCarousel"),Z=(0,i.up)("VField"),R=(0,i.up)("ErrorMessage"),K=(0,i.up)("VForm"),X=(0,i.up)("WebRecommand");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(U,{"sorce-images":G.bannerImages},null,8,["sorce-images"]),(0,i._)("div",r,[(0,i._)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(G.featureDescribe,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)(["row feature justify-content-center align-items-center mb-4",{"flex-row-reverse":t%2===1}]),key:"feature"+t},[(0,i._)("div",c,[(0,i._)("div",{class:"text-center p-3","data-aos":t%2===0?"fade-right":"fade-left"},[(0,i._)("h4",d,(0,o.zw)(e.title),1),(0,i._)("p",u,(0,o.zw)(e.content),1)],8,l)]),(0,i._)("div",p,[(0,i._)("img",{class:"img-fluid rounded","data-aos":t%2===0?"fade-left":"fade-right",src:e.image,alt:e.title},null,8,m)])],2)))),128))])]),(0,i._)("div",null,[(0,i._)("div",f,[(0,i._)("div",b,[(0,i._)("div",g,[h,v,(0,i.Wm)(K,null,{default:(0,i.w5)((({errors:e,validate:n})=>[(0,i._)("div",y,[(0,i.Wm)(Z,{name:"信箱",type:"email",class:(0,o.C_)(["form-control border border-secondary border-end-0 rounded-0",{"is-invalid":e["信箱"]}]),placeholder:"請輸入 Email",ref:"userEmail",modelValue:G.userEmail,"onUpdate:modelValue":t[0]||(t[0]=e=>G.userEmail=e),rules:"email|required"},null,8,["class","modelValue"]),(0,i._)("button",{class:"btn btn-secondary rounded-0",type:"button",onClick:e=>Y.subscribe(n)}," 訂閱 ",8,w),(0,i.Wm)(R,{name:"信箱",class:"invalid-feedback"})])])),_:1})])])])]),x,(0,i.wy)((0,i._)("div",k,[(0,i._)("div",D,[(0,i._)("div",_,[(0,i._)("button",{type:"button",class:"btn btn-sm btn-dark position-absolute border border-secondary rounded-circle top-0 start-100 translate-middle",onClick:t[1]||(t[1]=(...e)=>Y.closeSubscribeView&&Y.closeSubscribeView(...e))},F),(0,i._)("div",B,[z,(0,i._)("p",C," 訂閱Email ",512),E,I,(0,i._)("div",O,[(0,i._)("p",S,[L,(0,i._)("span",A,"MCOmemb",512)]),(0,i._)("button",{type:"button",class:"btn btn-sm btn-primary align-self-center",onClick:t[2]||(t[2]=(...e)=>Y.copyCode&&Y.copyCode(...e)),ref:"copyBtn"}," 複製折扣碼 ",512)]),(0,i._)("div",W,[(0,i._)("button",{type:"button",class:"btn btn-dark",onClick:t[3]||(t[3]=(...e)=>Y.closeSubscribeView&&Y.closeSubscribeView(...e))}," 關閉 ")])])])])],512),[[a.F8,G.subscribeView]]),(0,i._)("div",V,[(0,i._)("div",M,[T,H,(0,i._)("div",Q,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(G.deliveryWays,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"text-center m-3",key:"delivery"+t,"data-aos":"fade-up"},[(0,i._)("div",q,[(0,i._)("img",{src:e.image,alt:e.way},null,8,N)]),(0,i._)("h4",P,(0,o.zw)(e.way),1)])))),128))])])]),(0,i.Wm)(X,{num:5,bgColor:!0,isRandom:!1,classicType:!0},{title:(0,i.w5)((()=>[(0,i.Uk)("人氣商品")])),_:1})],64)}const Y={key:0,class:"position-relative overflow-hidden"},U={class:"banner position-relative"},Z=["src","alt"],R={key:0,class:"position-absolute top-0 w-100 h-100 d-flex justify-content-center justify-content-md-between align-items-center"},K=(0,i._)("i",{class:"bi bi-caret-left-fill"},null,-1),X=[K],J={class:"flex-fill d-flex flex-column h-100"},$=(0,i._)("h2",{class:"fw-bolder mt-3"},"精品級法式點心",-1),ee=(0,i._)("p",{class:"fs-2"},"每一口都值得回味",-1),te={class:"flex-fill d-flex d-lg-none align-sm-items-end"},ne={class:"container d-sm-flex flex-column-reverse"},ie=(0,i._)("h2",{class:"fs-5 fw-bolder text-white text-sm-center my-2"},"精品級法式點心",-1),oe=(0,i._)("i",{class:"bi bi-caret-right-fill ms-2"},null,-1),ae={class:"d-flex justify-content-center mt-auto"},re=["onClick"],se=(0,i._)("i",{class:"bi bi-caret-right-fill"},null,-1),ce=[se];function le(e,t,n,a,r,s){const c=(0,i.up)("router-link");return r.bannerImages.length>0?((0,i.wg)(),(0,i.iD)("div",Y,[(0,i._)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.bannerImages,((e,t)=>((0,i.wg)(),(0,i.iD)("img",{class:"bannerImg position-absolute",style:(0,o.j5)({left:100*t+"%"}),src:e,alt:"banner"+t,key:"image"+t},null,12,Z)))),128))]),r.bannerImages.length>1?((0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("button",{class:"btn btn-light rounded-0 h-100 d-none d-md-block carousel-btn",onClick:t[0]||(t[0]=e=>s.changeIndex(r.index-1))},X),(0,i._)("div",J,[(0,i._)("div",{class:(0,o.C_)(["align-self-end d-none d-lg-flex flex-column align-items-center justify-content-center p-3 text-primary-emphasis fw-bolder rounded-circle mt-5 me-5",{"opacity-25":r.bannerDisable}]),style:{"background-color":"rgba(255, 255, 255, 0.5)","backdrop-filter":"blur(5px)","box-shadow":"0 0 5px 5px rgba(255, 255, 255, 0.5)",transition:"opacity 1s","aspect-ratio":"1 / 1"}},[$,ee,(0,i.Wm)(c,{to:"/products",class:"btn btn-light opacity-75 fw-bolder text-secondary"},{default:(0,i.w5)((()=>[(0,i.Uk)("看更多產品")])),_:1})],2),(0,i._)("div",te,[(0,i._)("div",ne,[ie,(0,i.Wm)(c,{to:"/products",class:"btn btn-light opacity-75 fw-bolder text-primary-emphasis align-self-center"},{default:(0,i.w5)((()=>[(0,i.Uk)("看更多產品"),oe])),_:1})])]),(0,i._)("div",ae,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.sorceImages,((e,t)=>((0,i.wg)(),(0,i.iD)("button",{class:(0,o.C_)(["btn btn-sm btn-light rounded-1 opacity-25 mx-1 mb-3",{"opacity-50":r.index===t}]),style:{width:"40px"},onClick:e=>s.changeIndex(t),key:"control"+t},null,10,re)))),128))])]),(0,i._)("button",{class:"btn btn-light rounded-0 h-100 d-none d-md-block carousel-btn",onClick:t[1]||(t[1]=e=>s.changeIndex(r.index+1))},ce)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)}var de={data(){return{index:0,timeCounter:"",bannerImages:[],banner:{},moveStep:0,bannerDisable:!0}},props:["sorceImages"],watch:{index(){const e=1.5;this.banner.style.transition=`transform ${e}s`,this.banner.style.transform=`translateX(${100*this.moveStep}%)`}},methods:{changeIndex(e){this.bannerDisable||(this.moveStep=this.index-e,e<0?this.index=this.sorceImages.length-1:e>=this.sorceImages.length?this.index=0:this.index=e,clearInterval(this.timeCounter),this.setCounter())},setCounter(){this.timeCounter=setInterval((()=>{this.changeIndex(this.index+1)}),5e3)},setBanner(){this.bannerImages=[...this.sorceImages.slice(this.index),...this.sorceImages.slice(0,this.index)],this.bannerImages=[...this.bannerImages.slice(1),...this.bannerImages]}},created(){this.setBanner()},mounted(){this.banner=document.querySelector(".banner"),this.banner.style.left=-100*(this.sorceImages.length-1)+"%",this.banner.addEventListener("transitionstart",(()=>{this.bannerDisable=!0})),this.banner.addEventListener("transitionend",(()=>{this.banner.style.transition="transform 0s",this.banner.style.transform="translateX(0%)",this.setBanner(),this.bannerDisable=!1})),this.sorceImages.length>1&&(this.setCounter(),this.bannerDisable=!1)}},ue=n(89);const pe=(0,ue.Z)(de,[["render",le]]);var me=pe,fe=n(436),be=n(6905),ge=n.n(be);ge().init({offset:100,delay:300,duration:1e3});var he={data(){return{bannerImages:["https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1702358908364.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bF%2FbqfCcl%2FD2m%2FeXkv3W9ivbpbkfL4L%2B8zPl14vt0ByA9LVHrm%2Fk5wnk3cmLPKNIu9sCxXrNuEgBpNRBYVIhZF1ctjA5ckdXPCftnGuGrDEH2qgjUCNHQeonUgoAVk8rqjgZBpg6ywebVApWs%2FS0TfqWGxtbWBmz%2FOuwKYnsZtF9TPwIx0heL4l0d2a32aeh%2FkkOSYWe1WsddM2dnncdvxitJYiwU2mfgYZpf1WzrHRfErCUSUv5L%2Bhl%2Bj%2FpY%2FVVvOruqK3AmlEQOyWAkRE8p0g%2Fl20goW0U651wMRtshVqASYANN7ruUj0KCpH4GTwa8mcRzjP7Cl6YdZXafMVg8A%3D%3D","https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547377040.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YcHDUtduB8Xb3pJQnRrJnnkqfuiQDDiLNmGN6uV4S9gX4gbXo7a9bXBAhmUZRAS9djNdOGeYjcr8RpPlgFHX7zpw7ApodoQoPse43guX3Yp%2FugHwDbWMDpUSYUEiM0rwlTeVry7ugQDiA2HneBmcdel5cO4qeesGojC%2F%2FH8hznQG%2BP8vHEEpPd7vf7XQfXR2c2YOS7J6v7emTfOAlt1IwBwF9tVegVVuD1j4OO2kEF2t0QaWfRuc3I4x8jcCdQtbnweb7JZYZjlsW3%2Fs8cxDXXvQ%2FC5NaxLQco%2FNZbpR6TeLOZGTyvjwl58M4l6KP%2FT34HWjMJuXBtBOE0vIf4ptbg%3D%3D","https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547322880.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FNhU%2F2KjMjyrak3XDCaSByEqsv%2FHBGu6wpOM6c%2Flv3kbWuMsIlsQhO4jBDoBCYmDQUeOItGevqL7OUHXJgMgGPucfXoR%2FPcD6RgJ7JNZ%2Bt35pjDYoGgRWwvjBbF6joeHQCtHaTaNYb9xVectAnQfapwCedezLtJllXlyBYm8wIYRMNXwyWMPcSF%2FMRuzgbLEKmheBHOaICF88m4ST8qbI%2FigNpOq%2F%2F0YlP%2BkLbnZcP4hsPiVlzBCmqlvDBM1%2FTJs4SVa5yQKcYIr8qaRGOEFFQ9dbeQhxL1q5sb0phNlRudxQxZDOrUC4HIPI98ol6%2BqJA%2B75Pse2eWnoD3x0lf7sA%3D%3D","https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547350774.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hesbZ0j88e85SU04AWUaDDPgKswQjaGRBVNPSGcD477dPD%2F94ob7TvIEvIHOziJQmqs9fBaoJeU63uYcj%2FzBh%2FYOS4t1WaMOB%2FZ2j7VDoWmjdHhDXy0J%2FKzkiOJcUJblsyQ5Y4Ozy4bjtm%2FfWlvRrCN9UDBWhMlktARUfgHmLKtZnZVoepYGNphLuPOuWhNi5dwdctg1Ev3NhXBs9C5xfWwTrF0rlZhyRXVUtrG1xcdWned2wI1erRvSmaKpf%2BZVd%2Fbj6VKIVD7m52sQB0gdo9mfwndl6%2BzTdsRWxmDFxzd1JCCHJpz6%2BBXWjGz6h9PWWU8VwDiJkcvwHkMlo7YYDA%3D%3D","https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700547331394.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dZKsiPqgpqTxYrjp3Ip6VILxX9VWJVcO1W7XF8m2%2BdPUFolE1pDTyL9imU0JKQa5IATWkQhr7lIJ8zPEqqXkD0kQkPXt5H5Jh2ewGyU6ORZiPFEW92jmonjuClq5F%2BpMDtMoM7WfV0mDE1ZFEp0V%2FKeSQnKdqsoWfdztTfAssLUR6Zsj6fZu%2B9JFuUL7pHY8tbtuEQKuXv4qPL%2F8ogEb5pEk0coBRaLkk138vGsXZRSWXxKyIc1cZ7rZrbgkWG2Vy%2FOtG%2F1Han%2BznIak%2BEGiSpzYUW4dQR0au0ksCQqhZCTUPOHGdnxRqFhbf75brWx2wKHhYpfeX%2BKJoPA3DtQUVQ%3D%3D"],featureDescribe:[{title:"嚴選新鮮食材",content:"選用高品質食材製成，外殼酥脆、內餡飽滿",image:"https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700550140065.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IBKFyCkQ%2FHKuMiczpTGxWcUnu0Enb0D%2FJjFrXhPXehMISaVXLnPODLGtjGnmb3ZZn9lZCN9nLtBLKUgXBzuLSHL4fzaDwcI3VbcCQqp6wM9Utewg1w7MUSybN5SHMjmqOkdwiVkqtqt%2FZ0NSOcSugTCsJ8Inma8NVDw0e6tUqDCO0ZsTxuHxNIn8hk%2BarurdVrIBxk8Pm%2FANeqX7g0kYDLRuLcwaO3esGFh92nSlKEsrvxEGruGoYssyXVICD8rWovp6YgQrITJJCowgzd6OSaDYVS%2FmSuTbre4zNrTBPEcC18AR3twQ8VhH9mWRWdUABbzToG%2Bk%2BfM3kGk5iFFN4A%3D%3D"},{title:"手工精心製作",content:"我們用心，讓每一顆馬卡龍都是完美組合",image:"https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700623562475.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=h5SwGs8PVy6KAjR%2BoGbtF1M70j7%2BDfDNIpHng3EB4F8DIjKmqc0b2A8v6y%2FpWQe861ywEPaQAla5mjpwJ4lz3nrhy7IBndvp2fAkB5u6zAsL%2FypFFmv%2B1OMUozZOw4pVsOR9iM8zqnO8%2F4Lz4Q59O5oDWecnpoXVeji68B0krWgkI0VyQf5iKMtVx1bfpyBfqryU4rdLjuqNtiE0XHRrqbgGq5irfORWqIOW4SflQBOQF1CWieWINb6GW2gmB%2BZcsJ54EMPxNUd43uYy2Noo68ZnbnQ4kKAqQuyR9c5QKePT574h5U2Vi3%2FJ%2BfephfpoZ6kobHc0HfRqiCmHo7%2Fo9A%3D%3D"},{title:"多樣化口味",content:"從經典口味到當季限定風味，滿足您的味蕾",image:"https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700623591077.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iq%2FabU1zLVE%2F7hLIrCXeVj3kmnhxrtgTuwxUTuP%2FNrAHTMmye%2FqPINTRL3akO1vEmbbHd1F31lk5HzJ4XaIBiOklPLoERFFEw8OJgrHj0WNvnto5i5kPyWE2DEsVkyrurjIMuYvZ3I%2FAZ%2Bwi4kYQK8%2Fn1886%2B2jx1RP%2FvgzUlKsEGgoYHbJGnDd43tBeT7%2F3zQqGPN9%2BCqW3xcV%2Fi6cfiOrLp4EVTPlLdlx%2Bgwx7q23VyX4bVH6Dz%2F%2F74hNfpsB6zQ0om9IQKz6EmC56tIV5f%2F1UfxZMyCP3jRrAeHGfX6zrLjAI924sWtYhsQwTvaue9PlzgvD802NLn65VakVfQg%3D%3D"},{title:"獨特禮盒包裝",content:"精美的禮盒包裝，為每一刻增添奢華",image:"https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700624298368.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PND61nSJZ02VdjulofkCsDUj3XSzwHA04VkHt8oItnxgACweO7ZpO2PdVAtIWR8sK9FlyBilT574xXJGya%2BM54SqFY6i2pQuNyQpEsXgJZ3B9utTwkHHxW%2F0%2FL5QNO811z%2BmvIaMXUnlpt89vjS5nJN46xDgLaSwekdjzO4B82bYV6F4mueuFsSflLTEDeZwsZ2nfiJ7JeCrT8u6MHyfalzzgjdp6PYYlZ1dx1ALvrnbR%2BUhOlRiH%2BT2bmohOCGQVbSfbWfo1WQ0iV4S5wTtrzpAswru%2BGYpHcERtkqRD3z7UZy3JMPA%2B%2BfQ5bykkQ9g3GcqfdvyFx5C52t%2FAq%2BIvA%3D%3D"}],deliveryWays:[{way:"門市取貨",image:"https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700578441045.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=N%2BdqoBj8M7oNyrw0LbdGiE2Br53t0QzOwbxYo3ur8a3SgAagv4r3TyjGw4wggEGnob6JE%2F2MiKeA2tibZ11PYH%2Fa3EIkv6OaAxggPsHNvLt4mB2PkRkQ2FUXfQDWF%2F9HPBjdz7oAWNfOMP6L8SJoTvl4%2FqjPQHs34WQ%2BthGEhf024KtCUsTKlCN0T%2BaXxQno%2FEG4GGhr7hOy%2FBCQvjptDUp5uPvjAYb%2FBgQuKEnpai12pz%2BL98kywSOmfs1YnlNKU9oj0atg02uDYSpS8O9mGl0YlFYnQ5IRwqQFpxR8LOhSZxWLZvMMD1FX6kn%2BLJW1RVxTocu%2BdZ6ZrzQe2ndizw%3D%3D"},{way:"貨運低溫宅配",image:"https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700578452764.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bxjQ3tCE2k4uVjA5Re90Wy%2FQV24EBuNDGrbPui73O5cC08PDOeVozY4eJdxlyRzaPYYoqC7PV0Q2v%2ByExrE%2Fsif8hJBxsFZCwup21%2FlgT8iWonn0mKO%2FpC9aRlM2Zc%2BKeD0Dn2pKLe4Ge%2FIyGJJsAxEiCueaytif2rRkMHcxVbgP%2F9q9UgY0eKNMn8xMLCPT13c4am7%2BHh6QejxTN2IfT%2B%2F6MflAxBS4nrs2cmEqOejKpciBBxbmB0vCpT2In%2FiZ5UjQ7Byq5LL0%2BicLLBfptXzGkcdJ%2FuiyhhgYEIIZgHGuSmvqNUyUHPK78P72KBXOYafOZaZj1NvA2CQ5TM4JIg%3D%3D"},{way:"超商冷藏運送",image:"https://storage.googleapis.com/vue-course-api.appspot.com/nn_macaron/1700578463742.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hHuIA7adBvasOabvHeE4TVkZQfF6WBKwjDSKX8j%2F4LrK0KgQmJFeVkNNNC93IN3bidDasud0Y7TyuFmUL3FW99Y3SZ0sf0g36N6kwV0dBu5bpaif0IE6wWjtmugxF92V7xazVDEdB9emFAHFCWVz8VBFBQpHwLV3b6TTiELmGR8xRR3Gp01ydb9YlIEbgh1K0OT48cw1Z0l35KK564p86zFLvm3313Kssin4cJfX7OCAm9GlVlvdYAMwCEKfEwnuT9wQzyvNRuzl7G1HZULpleS6poTQTiD%2Bunbdh2pokYKAewepxniahoNnoImEyWbOHOFS9AbuCCUQqQC4s0ykyQ%3D%3D"}],subscribeView:!1,userEmail:""}},inject:["emitter"],components:{BannerCarousel:me,WebRecommand:fe.Z},methods:{async subscribe(e){try{const t=await e();if(!t.valid)return;this.$refs.subscribeEmail.textContent=this.userEmail,this.subscribeView=!0,this.$refs.userEmail.reset()}catch(t){this.emitter.emit("sendMsg",{message:"信箱格式錯誤",status:"error"})}},copyCode(){this.$refs.copyBtn.classList.add("disabled"),navigator.clipboard?navigator.clipboard.writeText(this.$refs.discountCode.textContent).then((()=>{this.$refs.copyBtn.innerHTML='<i class="bi bi-check me-1"></i>已複製',this.$refs.copyBtn.classList.add("btn-success")})).catch((()=>{this.$refs.copyBtn.textContent="複製失敗",this.$refs.copyBtn.classList.add("btn-danger")})):(this.$refs.copyBtn.textContent="複製失敗",this.$refs.copyBtn.classList.add("btn-danger"))},closeSubscribeView(){this.subscribeView=!1,this.btnReset()},btnReset(){this.$refs.copyBtn.classList.remove("disabled"),this.$refs.copyBtn.classList.remove("btn-success"),this.$refs.copyBtn.classList.remove("btn-danger"),this.$refs.copyBtn.innerHTML="複製折扣碼"}}};const ve=(0,ue.Z)(he,[["render",G]]);var ye=ve}}]);
//# sourceMappingURL=494.433fea29.js.map