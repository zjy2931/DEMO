(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BdCheck"],{"1ecc":function(t,s,e){"use strict";var o=e("ed08");s["a"]={created:function(){this.reportTime()},beforeDestroy:function(){clearTimeout(this.timer)},methods:{reportTime:function(){var t=this;clearTimeout(this.timer);var s=Object(o["e"])();this.timer=setTimeout((function(){t.$apis.userOperator.reportTime(s)}),8e3)}}}},4818:function(t,s,e){"use strict";e.d(s,"a",(function(){return o}));var o={3e4:{msg:"您已经学习过此课程",report:{}},30006:{msg:"您已购买过此课程",report:{}},33003:{msg:"请填写手机号",report:{}},33004:{msg:"手机号有误,请重新填",report:{}},33005:{msg:"请填写验证码",report:{}}}},"561d":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA6CAMAAADiHHsGAAAAAXNSR0IArs4c6QAAAGBQTFRFAAAAw8PDxsbGxcXFvLy8wsLCwcHBwMDAwsLCw8PDwsLCwcHBwsLCwsLCw8PDwsLCwsLCwsLCw8PDwcHBwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCcaaRZAAAAB90Uk5TABESFhcZJTU2e4aRkqSltLW5uuTm5+3v8fL2+Pr7/Nig7p8AAAB3SURBVDjL7dW5DoAgEEVRcEHBFUUU1///SyON1QzGRKu59UnINDyWdYPpwYzROTuC/Un2ZQVbdk/KJAVLSk8kQ5KeKIwoIkSIECFykwefahHFYFHhyeZmMLe9W5LJhUjFeY0Te11hUTJeZMQfaoRov9nGTJvAlJ+n/lRC9wsQRAAAAABJRU5ErkJggg=="},6232:function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("VanCountDown",{ref:"countDown",staticClass:"button",attrs:{millisecond:"",time:6e4,"time-data":"timeData","auto-start":!1,format:"ss"},on:{finish:t.finish},scopedSlots:t._u([{key:"default",fn:function(s){return[e("span",{staticClass:"block",staticStyle:{"text-align":"center"},on:{click:t.start}},[t._v(t._s(s.milliseconds?s.seconds+"s":t.text))])]}}])})},n=[],i={props:{beforeSend:{type:Function,default:function(){}},text:{type:String,default:"获取验证码"}},data:function(){return{isFinish:!0}},methods:{finish:function(t){this.isFinish=!0,this.$refs.countDown.reset()},start:function(){this.$refs.countDown.timeData.milliseconds||(this.isFinish=!1,this.beforeSend(this.$refs.countDown.start))}}},c=i,a=(e("fd44"),e("2877")),r=Object(a["a"])(c,o,n,!1,null,"516eb4de",null);s["a"]=r.exports},bd09:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"bdCheck"},[o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/1.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/2.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/3.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/4.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/5.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/form.jpg",alt:""}}),o("div",{staticClass:"part6"},[o("VanForm",{ref:"form",attrs:{"show-error":!1,"validate-first":"","show-error-message":!1},on:{submit:t.onSubmit,failed:t.showErrorMsg}},[o("VanField",{attrs:{name:"phone",placeholder:"请输入手机号",rules:[{required:!0,message:"33003"},{pattern:t.phoneReg,message:"33004"}]},scopedSlots:t._u([{key:"left-icon",fn:function(){return[o("span",{staticClass:"prefix"},[o("img",{staticClass:"code_icon",attrs:{src:e("561d"),alt:""}}),t._v(" +86 ")])]},proxy:!0}]),model:{value:t.form.phone,callback:function(s){t.$set(t.form,"phone",s)},expression:"form.phone"}}),o("div",{staticClass:"wrap"},[o("VanField",{staticClass:"phonecode",attrs:{name:"code",placeholder:"请输入验证码",rules:[{required:!0,message:"33005"}]},model:{value:t.form.code,callback:function(s){t.$set(t.form,"code",s)},expression:"form.code"}}),o("div",{staticClass:"button"},[o("CountDown",{attrs:{"before-send":t.beforeSend}})],1)],1),o("div",{staticClass:"btn",on:{click:t.submit}},[o("div",{staticClass:"submit"},[t._v("点击报名抢占课程优惠")])])],1)],1),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/6.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/7.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/8.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/9.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/10.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/11.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/12.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/13.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/14.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/15.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/16.jpg",alt:""}}),o("img",{staticClass:"pic",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/red/17.jpg",alt:""}}),o("VanDialog",{attrs:{"close-on-click-overlay":!0,"show-confirm-button":!1},model:{value:t.showDialog,callback:function(s){t.showDialog=s},expression:"showDialog"}},[o("div",{staticClass:"tips"},[o("img",{staticClass:"qr",attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/BdCheck/qrcode1.png",alt:""}}),o("img",{staticClass:"qrcode",attrs:{src:t.qrcode,alt:""}})])])],1)},n=[],i=e("1da1"),c=e("5530"),a=(e("96cf"),e("6232")),r=e("ed08"),m=e("f121"),l=e("4818"),u=e("1ecc"),d={components:{CountDown:a["a"]},mixins:[u["a"]],data:function(){return{showDialog:!1,qrcode:"",form:{phone:"",code:""}}},methods:{onSubmit:function(t){var s=this;console.log("验证通过",t);var e=Object(r["e"])();this.$apis.userOperator.getLastOrderInfo(Object(c["a"])(Object(c["a"])({},t),e)).then((function(t){s.qrcode=t.qrcode,s.showDialog=!0})).catch((function(t){s.showMsg(t)}))},submit:function(){this.$refs.form.submit()},goMini:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var e,o,n,i,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e="pages/index/index",o=t.form.phone,n=Object(c["a"])(Object(c["a"])({},Object(r["e"])()),{},{phone:o}),s.next=5,t.$apis.userOperator.getMiniHref({path:e,appid:m["b"],query:n});case 5:i=s.sent,a=i.url,window.location.href=a;case 8:case"end":return s.stop()}}),s)})))()},showMsg:function(t){var s=this;console.log(l["a"]);var e=t.code,o=t.msg;if(30006===e)return console.log("小程序分班"),void this.$dialog({message:o,confirmButtonText:"去分班",cancelButtonText:"返回",showCancelButton:!0}).then((function(t){s.goMini()}));3e4!==e?l["a"][e]&&this.$dialog({message:l["a"][e].msg}):this.$dialog({message:o,confirmButtonText:"去购买",cancelButtonText:"返回",showCancelButton:!0}).then((function(t){location.href="https://tf.weimiao.cn/?id=429&typeId=1&teamId=32&medId=1210&demId=1&dicId=1&planId=1&push_id=C1000&account=210702395#/landPage?from=wm"}))},beforeSend:function(t){var s=this;this.$refs.form.validate("phone").then((function(e){t(),s.$apis.userOperator.getPhoneCode({phone:s.form.phone})})).catch((function(t){s.showMsg({code:t.message})}))},showErrorMsg:function(t){var s=t.errors[0].message;this.showMsg({code:s})}}},g=d,f=(e("f173"),e("2877")),p=Object(f["a"])(g,o,n,!1,null,"6277eba4",null);s["default"]=p.exports},cf61:function(t,s,e){},ee58:function(t,s,e){},f121:function(t,s,e){"use strict";e.d(s,"a",(function(){return o})),e.d(s,"b",(function(){return n}));"".concat(window.location.origin,"/#/");var o="wx69a543fde6e86cc7",n="wx0c53f7af757e5261"},f173:function(t,s,e){"use strict";e("ee58")},fd44:function(t,s,e){"use strict";e("cf61")}}]);
//# sourceMappingURL=BdCheck.60cbf9ea.js.map