(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TencentQuestion"],{"280f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tencentQuestion"})},a=[],c=n("1da1"),o=(n("96cf"),n("ed08")),s=n("d69a"),u={beforeRouteEnter:function(e,t,n){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])({getTokenQuery:Object(o["e"])()});case 2:n();case 3:case"end":return e.stop()}}),e)})))()},created:function(){var e=Object(o["e"])(),t=e.urlType;console.log(t);var n=this.$store.state.user.userInfo.id,r="https://wj.qq.com/s2/8928062/7451/?openid=mid".concat(n);"2"===t&&(r="https://wj.qq.com/s2/8905000/bd18/?openid=mid".concat(n)),"3"===t&&(r="https://wj.qq.com/s2/8991498/3e4e/?openid=mid".concat(n)),location.href=r}},i=u,f=n("2877"),p=Object(f["a"])(i,r,a,!1,null,null,null);t["default"]=p.exports},d69a:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("4360"));t["a"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t||{},r=n.notUserInfo,c=n.notWxConfig,o=n.getTokenQuery,!localStorage.getItem("wxauth")){e.next=4;break}return e.next=4,a["a"].dispatch("user/getToken",o);case 4:if(r||a["a"].state.user.userInfo){e.next=7;break}return e.next=7,a["a"].dispatch("user/getUserInfo");case 7:if(c||a["a"].state.user.wxConfig){e.next=10;break}return e.next=10,a["a"].dispatch("user/getWxConfig");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=TencentQuestion.7b4c058f.js.map