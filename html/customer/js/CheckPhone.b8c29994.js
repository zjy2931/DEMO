(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CheckPhone"],{5247:function(e,t,n){},8604:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"checkPhone"},[n("div",{staticClass:"form"},[n("div",{staticClass:"title"},[e._v("请输入报名时的手机号")]),n("VanField",{attrs:{"title-width":"50","bind:input":"phoneChange",center:"",clearable:"",placeholder:"请输入手机号",border:!1},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}},[n("div",{staticClass:"phone_lable",attrs:{slot:"label"},slot:"label"},[e._v(" +86 "),n("text",{staticStyle:{"font-size":"30px"}},[e._v("▾")])])]),n("VanButton",{staticClass:"btn",attrs:{type:"primary",size:"normal",block:""},on:{click:e.fenban}},[e._v("获取老师微信")]),e._m(0)],1),n("VanDialog",{attrs:{id:"van-dialog"}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tips"},[n("span",[e._v("注意："),n("br"),e._v("手机号是上课唯一凭证，只有正确输入报名手机号，才能添加班主任老师上课！")])])}],o=n("5530"),i=n("1da1"),s=(n("96cf"),n("2f62")),c=n("4360"),u=n("ed08"),l=n("d69a"),f={beforeRouteEnter:function(e,t,n){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["a"])({getTokenQuery:Object(o["a"])({},Object(u["e"])())});case 2:t=c["a"].state.user.userInfo||{},r=t.id,c["a"].$log.update({mid:r}),n();case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{phone:""}},created:function(){this.getProductNameList()},methods:Object(o["a"])(Object(o["a"])({},Object(s["c"])("user",["SET_CLASS_INFO","SET_CLASS_NAME"])),{},{fenban:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.phone,e.$log.update({alternate:JSON.stringify({buttonname:""})}),e.$log.click({module_part:"106_tf_h5_00057",module_ori:"表单提交模块"}),n){t.next=7;break}return e.$log.update({alternate:JSON.stringify({buttonname:"请填写手机号"})}),e.$log.click({module_part:"106_tf_h5_00058",module_ori:"表单错误模块"}),t.abrupt("return",e.$toast("请填写手机号"));case 7:if(Object(u["g"])(n)){t.next=11;break}return e.$log.update({alternate:JSON.stringify({buttonname:"手机号有误,请重填"})}),e.$log.click({module_part:"106_tf_h5_00058",module_ori:"表单错误模块"}),t.abrupt("return",e.$toast("手机号有误,请重填"));case 11:e.$apis.user.fenban({phone:n,version:"1.1"}).then((function(t){e.SET_CLASS_INFO(t),e.$router.push({name:"Question"})})).catch((function(t){e.$log.update({alternate:JSON.stringify({buttonname:t.msg})}),e.$log.click({module_part:"106_tf_h5_00058",module_ori:"表单错误模块"})}));case 12:case"end":return t.stop()}}),t)})))()},getProductNameList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$apis.user.getProductNameList();case 2:n=t.sent,e.SET_CLASS_NAME(n);case 4:case"end":return t.stop()}}),t)})))()}})},p=f,d=(n("c206"),n("2877")),h=Object(d["a"])(p,r,a,!1,null,"021f2aea",null);t["default"]=h.exports},c206:function(e,t,n){"use strict";n("5247")},d69a:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("4360"));t["a"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t||{},r=n.notUserInfo,o=n.notWxConfig,i=n.getTokenQuery,!localStorage.getItem("wxauth")){e.next=4;break}return e.next=4,a["a"].dispatch("user/getToken",i);case 4:if(r||a["a"].state.user.userInfo){e.next=7;break}return e.next=7,a["a"].dispatch("user/getUserInfo");case 7:if(o||a["a"].state.user.wxConfig){e.next=10;break}return e.next=10,a["a"].dispatch("user/getWxConfig");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=CheckPhone.b8c29994.js.map