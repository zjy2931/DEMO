(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GiftBoxWhite"],{"0cb2":function(e,t,r){var n=r("7b0b"),a=Math.floor,c="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,s,u,l){var f=r+e.length,d=s.length,v=i;return void 0!==u&&(u=n(u),v=o),c.call(l,v,(function(n,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(f);case"<":o=u[c.slice(1,-1)];break;default:var i=+c;if(0===i)return n;if(i>d){var l=a(i/10);return 0===l?n:l<=d?void 0===s[l-1]?c.charAt(1):s[l-1]+c.charAt(1):n}o=s[i-1]}return void 0===o?"":o}))}},"36f1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VanPopup",{attrs:{round:"","close-on-popstate":e.closeOnPopstate,"close-on-click-overlay":e.closeOnclickOverlay,"safe-area-inset-bottom":e.safeAreaInsetBottom},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("VanLoading",{attrs:{size:"50"}})],1)},a=[],c=r("1da1"),o=(r("96cf"),r("ac1f"),r("841c"),r("5319"),r("99af"),r("1276"),{data:function(){return{show:!0,closeOnclickOverlay:!1,closeOnPopstate:!0,safeAreaInsetBottom:!0}},beforeCreate:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n,a,c,o,i,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=location,n=r.origin,a=r.pathname,c=r.search,o=r.hash,i=localStorage.getItem("giftBoxPhone"),t.prev=2,t.next=5,e.$apis.giftBox.checkOrder({phone:i,product_sn:e.productSn});case 5:location.replace(decodeURIComponent("".concat(n).concat(a).concat(c,"#/GiftBoxPay?").concat(o.split("?")[1]))),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](2),s=t.t0.code,u=t.t0.data.order_num,30006===s&&(localStorage.setItem("giftBoxOrderNum",u),e.$router.replace("/GiftBoxPaySuccess"));case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))()}}),i=o,s=(r("4766"),r("2877")),u=Object(s["a"])(i,n,a,!1,null,"797594c0",null);t["default"]=u.exports},"46dc":function(e,t,r){},4766:function(e,t,r){"use strict";r("46dc")},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("d039"),c=r("825a"),o=r("50c4"),i=r("a691"),s=r("1d80"),u=r("8aa5"),l=r("0cb2"),f=r("14c3"),d=r("b622"),v=d("replace"),p=Math.max,h=Math.min,g=function(e){return void 0===e?e:String(e)},x=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),m=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));n("replace",(function(e,t,r){var n=b?"$":"$0";return[function(e,r){var n=s(this),a=void 0==e?void 0:e[v];return void 0!==a?a.call(e,n,r):t.call(String(n),e,r)},function(e,a){if("string"===typeof a&&-1===a.indexOf(n)&&-1===a.indexOf("$<")){var s=r(t,this,e,a);if(s.done)return s.value}var d=c(this),v=String(e),x="function"===typeof a;x||(a=String(a));var b=d.global;if(b){var m=d.unicode;d.lastIndex=0}var $=[];while(1){var w=f(d,v);if(null===w)break;if($.push(w),!b)break;var k=String(w[0]);""===k&&(d.lastIndex=u(v,o(d.lastIndex),m))}for(var O="",S=0,y=0;y<$.length;y++){w=$[y];for(var B=String(w[0]),I=p(h(i(w.index),v.length),0),P=[],A=1;A<w.length;A++)P.push(g(w[A]));var _=w.groups;if(x){var G=[B].concat(P,I,v);void 0!==_&&G.push(_);var M=String(a.apply(void 0,G))}else M=l(B,v,I,P,_,a);I>=S&&(O+=v.slice(S,I)+M,S=I+B.length)}return O+v.slice(S)}]}),!m||!x||b)}}]);
//# sourceMappingURL=GiftBoxWhite.1ff6a556.js.map