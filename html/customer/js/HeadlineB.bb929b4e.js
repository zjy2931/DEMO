(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HeadlineB"],{"0a63":function(e,t,n){e.exports=n.p+"img/aliPay.146d9e1e.png"},"0cb2":function(e,t,n){var o=n("7b0b"),a=Math.floor,r="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,l,u){var m=n+e.length,f=c.length,p=s;return void 0!==l&&(l=o(l),p=i),r.call(u,p,(function(o,r){var i;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(m);case"<":i=l[r.slice(1,-1)];break;default:var s=+r;if(0===s)return o;if(s>f){var u=a(s/10);return 0===u?o:u<=f?void 0===c[u-1]?r.charAt(1):c[u-1]+r.charAt(1):o}i=c[s-1]}return void 0===i?"":i}))}},1601:function(e,t,n){},3300:function(e,t,n){"use strict";var o=function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return o("VanPopup",{staticClass:"components-payTypeDialog",style:{height:"30%"},attrs:{value:t.value,round:"",position:"bottom",closeable:"","close-icon":"close"},on:{input:function(t){return e.$emit("input",t)}}},[o("div",{staticClass:"title"},[t._v("请选择支付方式")]),o("div",{staticClass:"icon-box"},t._l(t.iconList,(function(e,n){return o("img",{key:n,class:["img-box",{ml__130:n}],attrs:{src:e.img},on:{click:function(n){return t.select(e.key)}}})})),0)])},a=[],r={name:"PayTypeDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{iconList:[{img:n("0a63"),key:"1"},{img:n("641e"),key:"2"}]}},methods:{select:function(e){this.$emit("change",e),this.$emit("input",!1)}}},i=r,s=(n("4beb"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null);t["a"]=c.exports},"4beb":function(e,t,n){"use strict";n("1601")},"4cac":function(e,t,n){"use strict";n("899a")},5319:function(e,t,n){"use strict";var o=n("d784"),a=n("d039"),r=n("825a"),i=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("0cb2"),m=n("14c3"),f=n("b622"),p=f("replace"),d=Math.max,h=Math.min,g=function(e){return void 0===e?e:String(e)},_=function(){return"$0"==="a".replace(/./,"$0")}(),v=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),y=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var o=v?"$":"$0";return[function(e,n){var o=c(this),a=void 0==e?void 0:e[p];return void 0!==a?a.call(e,o,n):t.call(String(o),e,n)},function(e,a){if("string"===typeof a&&-1===a.indexOf(o)&&-1===a.indexOf("$<")){var c=n(t,this,e,a);if(c.done)return c.value}var f=r(this),p=String(e),_="function"===typeof a;_||(a=String(a));var v=f.global;if(v){var y=f.unicode;f.lastIndex=0}var b=[];while(1){var w=m(f,p);if(null===w)break;if(b.push(w),!v)break;var $=String(w[0]);""===$&&(f.lastIndex=l(p,i(f.lastIndex),y))}for(var S="",k=0,C=0;C<b.length;C++){w=b[C];for(var x=String(w[0]),O=d(h(s(w.index),p.length),0),I=[],D=1;D<w.length;D++)I.push(g(w[D]));var j=w.groups;if(_){var B=[x].concat(I,O,p);void 0!==j&&B.push(j);var P=String(a.apply(void 0,B))}else P=u(x,p,O,I,j,a);O>=k&&(S+=p.slice(k,O)+P,k=O+x.length)}return S+p.slice(k)}]}),!y||!_||v)},"61ce":function(e,t,n){},6232:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VanCountDown",{ref:"countDown",staticClass:"button",attrs:{millisecond:"",time:6e4,"time-data":"timeData","auto-start":!1,format:"ss"},on:{finish:e.finish},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"block",staticStyle:{"text-align":"center"},on:{click:e.start}},[e._v(e._s(t.milliseconds?t.seconds+"s":e.text))])]}}])})},a=[],r={props:{beforeSend:{type:Function,default:function(){}},text:{type:String,default:"获取验证码"}},data:function(){return{isFinish:!0}},methods:{finish:function(e){this.isFinish=!0,this.$refs.countDown.reset()},start:function(){this.$refs.countDown.timeData.milliseconds||(this.isFinish=!1,this.beforeSend(this.$refs.countDown.start))}}},i=r,s=(n("fd44"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,"516eb4de",null);t["a"]=c.exports},"641e":function(e,t,n){e.exports=n.p+"img/wxPay.67d5a157.png"},"899a":function(e,t,n){},"93cd":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gdt"},[n("img",{attrs:{src:e.headerImg,alt:""}}),n("p",{staticClass:"headerTip"},[e._v(" 你离财富自由只差这1步 ")]),n("div",{staticClass:"formPay"},[n("VanForm",{ref:"form",attrs:{"validate-first":"","show-error":!1,"show-error-message":!1},on:{submit:e.onSubmit,failed:e.showErrorMsg}},[n("VanField",{attrs:{name:"phone",placeholder:"请输入手机号",rules:[{required:!0,message:"33003"},{pattern:e.phoneReg,message:"33004"}]},scopedSlots:e._u([{key:"left-icon",fn:function(){return[n("span",{staticClass:"prefix"},[e._v("+86"),n("span",{staticClass:"icon"},[e._v("▼")])])]},proxy:!0}]),model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),n("VanField",{attrs:{name:"code",placeholder:"请输入验证码",rules:[{required:!0,message:"33005"}]},scopedSlots:e._u([{key:"button",fn:function(){return[n("div",{staticClass:"code"},[n("CountDown",{attrs:{"before-send":e.beforeSend}})],1)]},proxy:!0}]),model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),n("div",{staticClass:"btn",on:{click:e.submit}},[e._v("立即报名")])],1),n("div",{staticClass:"formTip"},[e._v("- 开课3天内，不满意全额退款 -")])],1),e._l(e.detailImg,(function(e,t){return n("img",{key:t,attrs:{src:e,alt:""}})})),n("div",{staticClass:"footer"},[e._m(0),n("a",{staticClass:"submitBtn",on:{click:e.submit}},[e._v("立即报名")])]),n("BackDiaLog",{on:{confirm:e.pay,cancel:e.stop},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}}),n("PayTypeDialog",{on:{change:e.pay},model:{value:e.showPaySelet,callback:function(t){e.showPaySelet=t},expression:"showPaySelet"}})],2)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("span",{staticClass:"only"},[e._v("只要")]),n("span",{staticClass:"price"},[e._v("12")]),n("span",{staticClass:"unit"},[e._v("元")])])}],r=n("5530"),i=n("1da1"),s=(n("ac1f"),n("5319"),n("96cf"),n("ed08")),c=n("f1dc"),l=n("3300"),u=n("6232"),m={30005:{msg:"您已经学习过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0362"}},30006:{msg:"您已购买过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0363"}},30007:{msg:"您已购买过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0364"}},30011:{msg:"您已购买过同类课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0365"}},33002:{msg:"验证码有误,请重填",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0361"}},33003:{msg:"请填写手机号",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0358"}},33004:{msg:"手机号有误,请重新填",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0359"}},33005:{msg:"请填写验证码",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_zsy_0360"}}},f=n("4360"),p={components:{BackDiaLog:c["a"],PayTypeDialog:l["a"],CountDown:u["a"]},data:function(){return{countDown:{time:36e5,format:"mm 分 ss 秒"},form:{},showPaySelet:!1,showDialog:!1,headerImg:"http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/HeadlineBC/header.png",detailImg:["http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/HeadlineBC/p2.png","http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/HeadlineBC/p3.png","http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/HeadlineBC/p4.png","http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/HeadlineBC/p5.png","http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/HeadlineBC/p6.png","http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/HeadlineBC/p7.png"]}},beforeRouteEnter:function(e,t,n){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=localStorage.getItem("headLineLog")||"{}",f["a"].$log.update({alternate:t}),n();case 3:case"end":return e.stop()}}),e)})))()},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.form={phone:localStorage.getItem("HeadlineB-phone"),code:localStorage.getItem("HeadlineB-code")},n=Object(s["e"])("checkOrder"),n&&(e.changeQuery("checkOrder"),e.showDialog=!0,e.checkOrder(),e.timer=setInterval((function(){e.checkOrder()}),3e3));case 3:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){clearInterval(this.timer)},methods:{stop:function(){clearInterval(this.timer)},submit:function(){this.$log.click({current_page:location.href,module_ori:"表单提交",module_part:"106_toufang_zsy_0357"}),this.$refs.form.submit()},showMsg:function(e){var t=this,n=e.msg,o=e.code,a="确定";30006===e.code&&(a="查看分班"),this.$dialog({message:n||m[o].msg,confirmButtonText:a}).then((function(n){30006===o&&t.goSucccess(),t.$log.click(m[e.code].report)}))},goSucccess:function(){this.$router.push({name:"Officals",query:Object(r["a"])({},this.$route.query)})},checkOrder:function(){var e=this;this.form.phone&&this.$apis.payment.checkOrder({phone:this.form.phone,product_sn:"PRODUCT_SN_XIAOBAI_12"}).catch((function(t){var n=t.code;return clearInterval(e.timer),e.showDialog=!1,30006===n?e.goSucccess():e.showMsg(t)}))},beforeSend:function(e){var t=this;this.$log.click({current_page:location.href,module_ori:"表单提交",module_part:"106_toufang_zsy_0356"}),this.$refs.form.validate("phone").then((function(n){e(),t.$apis.userOperator.getPhoneCode({phone:t.form.phone})})).catch((function(e){e={code:e.message},t.showMsg(e)}))},showErrorMsg:function(e){e={code:e.errors[0].message},this.showMsg(e)},onSubmit:function(e){var t=this;localStorage.setItem("HeadlineB-phone",this.form.phone),localStorage.setItem("HeadlineB-code",this.form.code),this.$apis.payment.payBeforeCheck(this.form).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.showPaySelet=!0;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.showMsg(e)}))},pay:function(e){var t=this;e&&localStorage.setItem("payType",e),e=localStorage.getItem("payType");var n=Object(s["e"])(),o=location.href+"&checkOrder=yes";this.$apis.payment.pay(Object(r["a"])(Object(r["a"])(Object(r["a"])({},n),this.form),{},{pay_type:e,return_url:encodeURIComponent(o),product_sn:"PRODUCT_SN_XIAOBAI_12",ext_param:[{domain:JSON.parse(localStorage.getItem("headLineLog")).domain,abKey:"gdt3",group:JSON.parse(localStorage.getItem("headLineLog")).ab_group,uniqFlag:JSON.parse(localStorage.getItem("headLineLog")).ab_uniq_user}]})).then((function(n){"1"===e&&t.aliPay(n),"2"===e&&t.wxPay(n)})).catch((function(e){t.showMsg(e)}))},wxPay:function(e){window.location.replace(decodeURIComponent(e.url))},aliPay:function(e){this.changeQuery("checkOrder","yes");var t=document.getElementById("aLiPay");t&&t.parentNode.removeChild(t);var n=document.createElement("div");n.id="aLiPay",n.innerHTML=e,document.body.appendChild(n),n.children[0].submit()},changeQuery:function(e,t){var n=JSON.parse(JSON.stringify(this.$route.query));t?n[e]=t:delete n[e],this.$router.replace(Object(r["a"])(Object(r["a"])({},this.$route),{},{query:Object(r["a"])({},n)}))}}},d=p,h=(n("a2da"),n("2877")),g=Object(h["a"])(d,o,a,!1,null,"126b1038",null);t["default"]=g.exports},a2da:function(e,t,n){"use strict";n("61ce")},cf61:function(e,t,n){},f1dc:function(e,t,n){"use strict";var o=function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return o("VanDialog",{attrs:{"show-confirm-button":!1,value:t.value},on:{input:function(t){return e.$emit("input",t)}}},[o("div",{staticClass:"components-backDialog"},[o("div",{staticClass:"title"},[t._v("要放弃付款吗？")]),o("div",{staticClass:"money-box"}),o("div",{staticClass:"btn-box"},[o("div",{staticClass:"btn__notPay",on:{click:t.cancel}},[t._v("放弃支付")]),o("div",{staticClass:"btn__pay",on:{click:t.confirm}},[t._v("继续支付 ")])])])])},a=[],r={props:{value:{type:Boolean,default:!1}},methods:{confirm:function(){this.$emit("input",!1),this.$emit("confirm")},cancel:function(){this.$emit("input",!1),this.$emit("cancel")}}},i=r,s=(n("4cac"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null);t["a"]=c.exports},fd44:function(e,t,n){"use strict";n("cf61")}}]);
//# sourceMappingURL=HeadlineB.bb929b4e.js.map