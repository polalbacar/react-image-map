(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/example.3373acbe.png"},33:function(e,t,n){e.exports=n(52)},38:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),o=n.n(r);n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(10),l=n(11),u=n(32),s=n(31),m=n(5),f=n(30),d=n(20),p=n(13),g=n(16),h=n(7),v=(n(39),n(25)),b=n.n(v),E=(n(40),n(17)),y=n.n(E),N=(n(44),function(e){var t=e.className,n=void 0===t?"":t,a=e.src,r=void 0===a?"":a,o=e.map,i=void 0===o?[]:o,l=e.onMapClick,u=void 0===l?function(e,t){}:l,s=e.onClick,m=void 0===s?function(){}:s,f=function(e,t){return function(){u(e,t)}};return c.a.createElement("div",{className:"image-map__content ".concat(n)},c.a.createElement("img",{src:r,alt:"",onClick:m}),i.map(function(e,t){return c.a.createElement("span",{key:t,style:e,onClick:f(e,t)})}))}),O=n(26),w=n.n(O);new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"local";function t(e,t,n){var a,c;n?((a=new Date).setTime(a.getTime()+24*n*60*60*1e3),c="; expires="+a.toUTCString()):c="",document.cookie=e+"="+t+c+"; path=/"}function n(n){n=JSON.stringify(n),"session"===e?window.name=n:t("localStorage",n,365)}var a=function(){var t="session"===e?window.name:function(e){var t,n,a=e+"=",c=document.cookie.split(";");for(t=0;t<c.length;t++){for(n=c[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(a))return n.substring(a.length,n.length)}return null}("localStorage");return t?JSON.parse(t):{}}();return{length:0,clear:function(){a={},this.length=0,"session"===e?window.name="":t("localStorage","",365)},getItem:function(e){return void 0===a[e]?null:a[e]},key:function(e){var t=0;for(var n in a){if(t===e)return n;t++}return null},removeItem:function(e){delete a[e],this.length--,n(a)},setItem:function(e,t){a[e]=t+"",this.length++,n(a)}}},S=function(){try{return localStorage.setItem("setItemNotWork","true"),localStorage.removeItem("setItemNotWork"),localStorage}catch(e){return console.log(e),k()}}(),x=(new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"getItem",value:function(e){var t=S.getItem(e);return"undefined"!==t?JSON.parse(t):void 0}},{key:"setItem",value:function(e,t){S.setItem(e,JSON.stringify(t))}},{key:"removeItem",value:function(e){S.removeItem(e)}},{key:"key",value:function(e){return S.key(e)}},{key:"clear",value:function(){S.clear()}},{key:"length",get:function(){return S.length}}]),e}()),n(27)),j=n.n(x);var C=[{left:"0",top:"6",height:"12",width:"33",href:""}],J={unit:"%",x:0,y:6,height:12,width:33},I=function(e){return e.map(function(e){var t={};return Object.keys(e).forEach(function(n){t[n]="href"!==n?"".concat(parseFloat(e[n]),"%"):e[n]}),t})},F=function(){var e=window.location.href.split("?")[1];return j.a.parse(e)}(),z=F.imgSrc,L=F.postmessage,R=[{path:"/",Component:function(){var e=Object(a.useState)(z||w.a),t=Object(h.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(C),i=Object(h.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(J),m=Object(h.a)(s,2),f=m[0],v=m[1],E=Object(a.useState)(JSON.stringify(I(l))),O=Object(h.a)(E,2),k=O[0],S=O[1],x=Object(a.useState)(JSON.stringify(I(l),null,4)),j=Object(h.a)(x,2),F=j[0],R=j[1];L&&window.addEventListener("message",function(e){console.log(e);var t=e.data;if(t){var n=function(e){var t=[];try{t=JSON.parse(e)}catch(n){console.log(n)}return t}(t);u(n),S(JSON.stringify(I(n))),R(JSON.stringify(I(n),null,4))}},!1),Object(a.useEffect)(function(){var e=document.querySelector(".ReactCrop"),t=function(e){var t=document.querySelector(".ReactCrop__crop-selection");e.target===t&&W("add")()};if(e)return e.addEventListener("dblclick",t),function(){return e.removeEventListener("dblclick",t)}});var T=function(e,t){return function(n){var a=n.target.value,c=l.map(function(n,c){return t===c?Object(g.a)(Object(g.a)({},n),{},Object(p.a)({},e,a)):n});u(c),S(JSON.stringify(I(c))),R(JSON.stringify(I(c),null,4))}},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var n={},a=[];if("add"===e){var c=f.x,r=f.y;n={width:f.width,height:f.height,left:c,top:r,href:""},a=[].concat(Object(d.a)(l),[n])}else l.splice(t,1),a=Object(d.a)(l);u(a),S(JSON.stringify(I(a))),R(JSON.stringify(I(a),null,4))}},_=function(e,t){var n="click map ".concat(e.href||t+1);console.log(n,e),alert(n)},A=c.a.useMemo(function(){return c.a.createElement(N,{className:"usage-map",src:n,map:I(l),onMapClick:_})},[l,n]);return c.a.createElement("div",{className:"images-map-content"},c.a.createElement("div",{className:"crop-box"},c.a.createElement(b.a,{src:n,crop:f,ruleOfThirds:!0,style:{width:"50%"},onChange:function(e,t){v(t)}}),c.a.createElement("div",{className:"map-box"},c.a.createElement("div",{className:"map-box-img"},c.a.createElement("img",{src:n,alt:""}),n&&l.map(function(e,t){return c.a.createElement("span",{className:"crop-item",key:t,style:{width:"".concat(parseFloat(e.width),"%"),height:"".concat(parseFloat(e.height),"%"),left:"".concat(parseFloat(e.left),"%"),top:"".concat(parseFloat(e.top),"%")}})})))),n&&l.map(function(e,t){return c.a.createElement("div",{className:"map-area",key:t},c.a.createElement("label",{className:"title"},"map",t+1),c.a.createElement("div",{className:"setting-box"},c.a.createElement("div",{className:"setting-box-item"},c.a.createElement("label",null,"width: "),c.a.createElement("input",{value:parseFloat(e.width),type:"number",onChange:T("width",t)})),c.a.createElement("div",{className:"setting-box-item"},c.a.createElement("label",null,"height: "),c.a.createElement("input",{value:parseFloat(e.height),type:"number",onChange:T("height",t)})),c.a.createElement("div",{className:"setting-box-item"},c.a.createElement("label",null,"left: "),c.a.createElement("input",{value:parseFloat(e.left),type:"number",onChange:T("left",t)})),c.a.createElement("div",{className:"setting-box-item"},c.a.createElement("label",null,"top: "),c.a.createElement("input",{value:parseFloat(e.top),type:"number",onChange:T("top",t)})),c.a.createElement("div",{className:"setting-box-item"},c.a.createElement("label",null,"href: "),c.a.createElement("input",{value:e.href,type:"text",onChange:T("href",t)}))),c.a.createElement("i",{className:"cad-iconfont icon-sub",onClick:W("sub",t)}))}),c.a.createElement("div",{className:"opt-box"},c.a.createElement("button",{className:"cad-iconfont icon-dotted-box",onClick:W("add")},"Add map"),c.a.createElement(y.a,{text:k},c.a.createElement("button",{className:"cad-iconfont icon-copy"},"Copy")),c.a.createElement(y.a,{text:F},c.a.createElement("button",{className:"cad-iconfont icon-copy"},"Format copy")),c.a.createElement("button",{className:"cad-iconfont icon-image"},c.a.createElement("input",{type:"file",accept:"image/*",className:"picker-image",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",function(){r(t.result),u([]),v(J)}),t.readAsDataURL(e.target.files[0])}}}),"Select images")),c.a.createElement("textarea",{cols:3,value:k,onChange:function(e){var t=e.target.value,n=[];try{n=JSON.parse(t),u(n),S(JSON.stringify(I(n))),R(JSON.stringify(I(n),null,4))}catch(a){console.log(a)}}}),c.a.createElement("h3",null,"Click on you set of map\uff1a"),c.a.createElement("div",{className:"usage"},A))},exact:!0}],T=function(){return a.createElement(m.d,null,R.map(function(e,t){var n=e.path,c=e.Component,r=e.exact;return a.createElement(m.b,{key:t,path:"".concat("/react-image-map").concat(n),exact:r,render:function(e){return a.createElement(c,e)}})}),a.createElement(m.a,{to:"".concat("/react-image-map")}))},W=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.createElement(f.a,null,a.createElement(T,null))}}]),n}(a.Component);o.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);