(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TwelveMpResult"],{"0b9d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result"},[a("div",{staticClass:"header"},[a("img",{attrs:{src:t.baseOssUrl+"header.jpg",alt:""}})]),a("div",{staticClass:"detail"},[a("img",{attrs:{src:t.baseOssUrl+"detail1.jpg",alt:""}}),a("img",{attrs:{src:t.baseOssUrl+"detail2.jpg",alt:""}}),a("img",{attrs:{src:t.baseOssUrl+"detail3.jpg",id:"target",alt:""}}),a("div",{staticClass:"getBtn",on:{click:function(e){return t.copy(0)}}},[t._v("一键获取")])]),a("div",{staticClass:"steps"},[a("img",{attrs:{src:t.baseOssUrl+"stepBg1.jpg",alt:""}}),a("img",{attrs:{src:t.baseOssUrl+"stepBg2.jpg",alt:""}}),a("img",{attrs:{src:t.baseOssUrl+"stepBg3.jpg",alt:""}}),a("VanSwipe",{staticClass:"swiper-container swiper1",attrs:{autoplay:3e3,"indicator-color":"white"}},[a("VanSwipeItem",[a("img",{attrs:{src:t.baseOssUrl+"swiper2-0.png",alt:""}})]),a("VanSwipeItem",[a("img",{attrs:{src:t.baseOssUrl+"swiper2-1.png",alt:""}})])],1),a("VanSwipe",{staticClass:"swiper-container swiper2",attrs:{autoplay:3e3,"indicator-color":"white"}},[a("VanSwipeItem",[a("img",{attrs:{src:t.baseOssUrl+"swiper3-0.png",alt:""}})]),a("VanSwipeItem",[a("img",{attrs:{src:t.baseOssUrl+"swiper3-1.png",alt:""}})])],1)],1),a("footer",[a("img",{attrs:{src:t.baseOssUrl+"footerBtn.png",alt:""},on:{click:function(e){return t.goTarget()}}})]),a("VanDialog",{staticClass:"dialog",attrs:{"show-confirm-button":!1,"close-on-click-overlay":!0},on:{close:t.toClose},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("img",{attrs:{src:t.baseOssUrl+"dialog_bg.png"}}),a("img",{staticClass:"close",attrs:{src:s("d8b9"),alt:""},on:{click:t.toClose}}),a("div",{staticClass:"dialog-copyBtn",on:{click:function(e){return t.copy(1)}}},[t._v("点我获取公众号二维码")])])],1)},r=[],i=s("5530"),o=s("1da1"),n=(s("96cf"),s("ed08")),c=s("e102"),l={0:{module_ori:"首屏复制按钮",module_part:"106_toufang_lm_0340"},1:{module_ori:"挽留弹窗",module_part:"106_tf_h5_00010"}},u={mixins:[c["a"]],data:function(){return{show:!1,baseOssUrl:"http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/TwelveMp/result/"}},mounted:function(){var t=this;this.$on("userBack",(function(){t.$log.click({module_ori:"挽留弹窗",module_part:"106_tf_h5_00008"}),t.show=!0}))},methods:{goAnchor:n["f"],goTarget:function(){this.$log.click({module_ori:"悬浮按钮",module_part:"106_toufang_lm_0341"}),this.goAnchor("#target")},toClose:function(){this.$log.click({module_ori:"挽留弹窗",module_part:"106_tf_h5_00009"}),this.show=!1},copy:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,r,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.$log.click(l[t]),a=Object(n["e"])(),s.prev=2,Object(n["b"])("新手干货社","复制成功"),s.next=6,e.$apis.Tiktok.copy(Object(i["a"])(Object(i["a"])({},a),{},{vage:1}));case 6:return s.next=8,e.$apis.userOperator.getMiniHref({path:"xby/pages/qrcode/index",appid:"wxdd51b8f4efa83b83",query:a});case 8:r=s.sent,o=r.url,window.location.href=o,s.next=16;break;case 13:s.prev=13,s.t0=s["catch"](2),console.log(s.t0);case 16:case"end":return s.stop()}}),s,null,[[2,13]])})))()}}},p=u,d=(s("a5de"),s("2877")),g=Object(d["a"])(p,a,r,!1,null,"71f915ab",null);e["default"]=g.exports},"3a7f":function(t,e,s){},a5de:function(t,e,s){"use strict";s("3a7f")},d8b9:function(t,e,s){t.exports=s.p+"img/close.1cdc45b6.png"},e102:function(t,e,s){"use strict";var a={methods:{prevent_back:function(){var t=this,e=this.$route.fullPath;"hash"===this.$router.mode&&(e="#"+e),window.pushStateFun=function(){t.$emit("userBack")};var s={title:null,url:e};window.history.pushState(s,null,e),window.addEventListener("popstate",window.pushStateFun,!1)}},mounted:function(){this.$vnode&&this.$vnode.data.keepAlive||this.prevent_back()},activated:function(){this.prevent_back()},beforeRouteLeave:function(t,e,s){window.removeEventListener("popstate",window.pushStateFun,!1),s()}};e["a"]=a}}]);
//# sourceMappingURL=TwelveMpResult.19305685.js.map