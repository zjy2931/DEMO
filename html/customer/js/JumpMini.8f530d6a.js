(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["JumpMini"],{"15fd":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("b64b");function n(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}function i(t,e){if(null==t)return{};var r,i,a=n(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(i=0;i<c.length;i++)r=c[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}},"180f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumpMini"},[n("img",{staticClass:"bg",attrs:{src:r("792e"),alt:""}}),n("img",{staticClass:"btn",attrs:{src:r("811d"),alt:""},on:{click:t.jumpMini}})])},i=[],a=r("1da1"),c=r("5530"),o=r("15fd"),l=(r("96cf"),r("9911"),r("ed08")),u=["protocol","host","link"],s=["protocol","host","link"],d={created:function(){var t=Object(l["e"])(),e=(t.protocol,t.host,t.link,Object(o["a"])(t,u)),r=this.getUid();this.$log.show({module_ori:"基于页面",module_part:"106_tf_wxxcx_00076",alternate:JSON.stringify(Object(c["a"])(Object(c["a"])({},e),{},{pageName:"微淼李老师",uid_recall:r}))})},methods:{jumpMini:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,n,i,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(l["e"])(),r.protocol,r.host,r.link,n=Object(o["a"])(r,s),i=t.getUid(),t.$log.click({module_ori:"点击事件",module_part:"106_tf_wxxcx_00077",alternate:JSON.stringify(Object(c["a"])(Object(c["a"])({},n),{},{pageName:"微淼李老师",uid_recall:i}))}),e.next=5,t.$apis.userOperator.getMiniHref({path:"pages/officalCode/index",appid:"wxdd51b8f4efa83b83",query:Object(c["a"])(Object(c["a"])({},n),{},{uid_recall:i})});case 5:a=e.sent,u=a.url,window.location.href=u;case 8:case"end":return e.stop()}}),e)})))()},getUid:function(){var t=localStorage.getItem("uid_recall");return t||(t=Object(l["e"])("wm_click_id"),localStorage.setItem("uid_recall",t)),t}}},f=d,p=(r("e547"),r("2877")),b=Object(p["a"])(f,n,i,!1,null,"4cb05a8b",null);e["default"]=b.exports},"792e":function(t,e,r){t.exports=r.p+"img/bg.e1b77d1d.png"},"811d":function(t,e,r){t.exports=r.p+"img/btn.4dedd4f7.png"},b466:function(t,e,r){},e547:function(t,e,r){"use strict";r("b466")}}]);
//# sourceMappingURL=JumpMini.8f530d6a.js.map