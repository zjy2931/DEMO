(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Vivo12"],{"0837":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gdt"},[n("img",{staticClass:"part1",attrs:{src:"http://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/Vivo12/header.png",alt:""}}),n("div",{staticClass:"part6"},[n("div",{staticClass:"tuikuan"},[t._v("- 开课3天内，对课程不满意无条件退还12元 -")]),n("VanForm",{ref:"form",attrs:{"validate-first":"","show-error":!1,"show-error-message":!1},on:{submit:t.onSubmit,failed:t.showErrorMsg}},[n("VanField",{attrs:{name:"phone",placeholder:"请填写手机号",rules:[{required:!0,message:"33003"},{pattern:t.phoneReg,message:"33004"}]},scopedSlots:t._u([{key:"left-icon",fn:function(){return[n("span",{staticClass:"prefix"},[t._v(" +86 "),n("span",{staticClass:"icon"},[t._v("▼")])])]},proxy:!0}]),model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),n("VanField",{attrs:{name:"code",placeholder:"请填写验证码",rules:[{required:!0,message:"33005"}]},scopedSlots:t._u([{key:"button",fn:function(){return[n("div",{staticClass:"code"},[n("CountDown",{attrs:{"before-send":t.beforeSend}})],1)]},proxy:!0}]),model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),n("div",{staticClass:"btn",on:{click:t.submit}},[n("div",{staticClass:"submit"},[t._v("立即报名")])])],1)],1),n("div",{staticClass:"zero__line-title"},[t._v("最新报名客户")]),n("VanSwipe",{staticClass:"zero__swipe-box",attrs:{autoplay:3e3,"show-indicators":!1,vertical:""}},t._l(t.swipeList,(function(e,a){return n("VanSwipeItem",{key:a},t._l(e,(function(e,a){return n("div",{key:a,staticClass:"zero__swipe-box__item"},[n("p",[t._v(t._s(e.phone))]),n("p",[t._v("报名成功")]),n("p",[t._v(t._s(e.time)+"秒前")])])})),0)})),1),n("img",{staticClass:"part1",attrs:{src:"https://oss-market.weimiaocaishang.com/Public/infoflow-admin/2248phpohoUV31608026265201215.jpg",alt:""}}),n("img",{staticClass:"part1",attrs:{src:"https://oss-market.weimiaocaishang.com/Public/infoflow-admin/9435phpwui8261608026276201215.jpg",alt:""}}),n("img",{staticClass:"part1",attrs:{src:"https://oss-market.weimiaocaishang.com/Public/infoflow-admin/4107php2sgE5q1608026287201215.jpg",alt:""}}),n("img",{staticClass:"part1",attrs:{src:"https://oss-market.weimiaocaishang.com/Public/infoflow-admin/8986phpNCoUOc1608026301201215.png",alt:""}}),n("img",{staticClass:"part1",attrs:{src:"https://oss-market.weimiaocaishang.com/Public/xun/InfoFlow/partA7.png",alt:""}}),t._m(0),n("div",{staticClass:"footer"},[t._m(1),n("a",{staticClass:"baoming",on:{click:t.submit}},[t._v("立即报名")])]),n("BackDiaLog",{on:{confirm:t.pay,cancel:t.stop},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}}),n("PayTypeDialog",{on:{change:t.pay},model:{value:t.showPaySelet,callback:function(e){t.showPaySelet=e},expression:"showPaySelet"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right"},[n("div",{staticClass:"name"},[t._v("北京微淼财商科技有限公司")]),n("div",{staticClass:"num"},[t._v("京ICP备19026951号-4")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticStyle:{"text-align":"center","font-size":"16px","font-weight":"bold"}},[t._v(" 仅售 "),n("span",{staticStyle:{"font-size":"22px",color:"#ff2c12","font-weight":"bold"}},[t._v("12元")])])])}],i=n("5530"),r=n("1da1"),s=(n("ac1f"),n("5319"),n("96cf"),n("ed08")),c=n("f1dc"),l=n("3300"),u=n("6232"),f={30005:{msg:"您已经学习过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0261"}},30006:{msg:"您已购买过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0262"}},30007:{msg:"您已购买过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0263"}},30011:{msg:"您已购买过同类课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0264"}},33002:{msg:"验证码有误,请重填",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0260"}},33003:{msg:"请填写手机号",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0257"}},33004:{msg:"手机号有误,请重新填",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0258"}},33005:{msg:"请填写验证码",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0259"}}},p={components:{BackDiaLog:c["a"],PayTypeDialog:l["a"],CountDown:u["a"]},data:function(){return{swipeList:[],form:{},isFinsh:!0,showPaySelet:!1,showDialog:!1}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form={phone:localStorage.getItem("Headline-phone"),code:localStorage.getItem("Headline-code")},n=Object(s["e"])("checkOrder"),n&&(t.changeQuery("checkOrder"),t.showDialog=!0,t.checkOrder(),t.timer=setInterval((function(){t.checkOrder()}),3e3)),e.next=5,t.$apis.userOperator.getLatestUser();case 5:a=e.sent,t.swipeList=Object(s["a"])(a,2);case 7:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){clearInterval(this.timer)},methods:{stop:function(){clearInterval(this.timer)},submit:function(){this.$log.click({current_page:location.href,module_ori:"表单提交",module_part:"106_toufang_lcx_0163"}),this.$refs.form.submit()},showMsg:function(t){var e=this,n=t.msg,a=t.code,o="确定";30006===t.code&&(o="查看分班"),this.$dialog({message:n||f[a].msg,confirmButtonText:o}).then((function(n){30006===a&&e.goSucccess(),e.$log.click(f[t.code].report)}))},goSucccess:function(){this.$router.push({name:"Officals",query:Object(i["a"])({},this.$route.query)})},checkOrder:function(){var t=this;this.form.phone&&this.$apis.payment.checkOrder({phone:this.form.phone,product_sn:"PRODUCT_SN_XIAOBAI_12"}).catch((function(e){var n=e.code;return clearInterval(t.timer),t.showDialog=!1,30006===n?t.goSucccess():t.showMsg(e)}))},beforeSend:function(t){var e=this;this.$log.click({current_page:location.href,module_ori:"表单提交",module_part:"106_toufang_lcx_0244"}),this.$refs.form.validate("phone").then((function(n){t(),e.$apis.userOperator.getPhoneCode({phone:e.form.phone})})).catch((function(t){t={code:t.message},e.showMsg(t)}))},showErrorMsg:function(t){t={code:t.errors[0].message},this.showMsg(t)},onSubmit:function(t){var e=this;localStorage.setItem("Headline-phone",this.form.phone),localStorage.setItem("Headline-code",this.form.code),this.$apis.payment.payBeforeCheck(this.form).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.showPaySelet=!0;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.showMsg(t)}))},pay:function(t){var e=this;t&&localStorage.setItem("payType",t),t=localStorage.getItem("payType");var n=Object(s["e"])(),a=location.href+"&checkOrder=yes";this.$apis.payment.pay(Object(i["a"])(Object(i["a"])(Object(i["a"])({},n),this.form),{},{pay_type:t,return_url:encodeURIComponent(a),product_sn:"PRODUCT_SN_XIAOBAI_12"})).then((function(n){"1"===t&&e.aliPay(n),"2"===t&&e.wxPay(n)})).catch((function(t){e.showMsg(t)}))},wxPay:function(t){window.location.replace(decodeURIComponent(t.url))},aliPay:function(t){this.changeQuery("checkOrder","yes");var e=document.getElementById("aLiPay");e&&e.parentNode.removeChild(e);var n=document.createElement("div");n.id="aLiPay",n.innerHTML=t,document.body.appendChild(n),n.children[0].submit()},changeQuery:function(t,e){var n=JSON.parse(JSON.stringify(this.$route.query));e?n[t]=e:delete n[t],this.$router.replace(Object(i["a"])(Object(i["a"])({},this.$route),{},{query:Object(i["a"])({},n)}))}}},h=p,m=(n("6e85"),n("2877")),d=Object(m["a"])(h,a,o,!1,null,"6a6e5f6e",null);e["default"]=d.exports},"0a63":function(t,e,n){t.exports=n.p+"img/aliPay.146d9e1e.png"},"0cb2":function(t,e,n){var a=n("7b0b"),o=Math.floor,i="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,u){var f=n+t.length,p=c.length,h=s;return void 0!==l&&(l=a(l),h=r),i.call(u,h,(function(a,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":r=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return a;if(s>p){var u=o(s/10);return 0===u?a:u<=p?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):a}r=c[s-1]}return void 0===r?"":r}))}},1601:function(t,e,n){},3300:function(t,e,n){"use strict";var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("VanPopup",{staticClass:"components-payTypeDialog",style:{height:"30%"},attrs:{value:e.value,round:"",position:"bottom",closeable:"","close-icon":"close"},on:{input:function(e){return t.$emit("input",e)}}},[a("div",{staticClass:"title"},[e._v("请选择支付方式")]),a("div",{staticClass:"icon-box"},e._l(e.iconList,(function(t,n){return a("img",{key:n,class:["img-box",{ml__130:n}],attrs:{src:t.img},on:{click:function(n){return e.select(t.key)}}})})),0)])},o=[],i={name:"PayTypeDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{iconList:[{img:n("0a63"),key:"1"},{img:n("641e"),key:"2"}]}},methods:{select:function(t){this.$emit("change",t),this.$emit("input",!1)}}},r=i,s=(n("4beb"),n("2877")),c=Object(s["a"])(r,a,o,!1,null,null,null);e["a"]=c.exports},"4beb":function(t,e,n){"use strict";n("1601")},"4cac":function(t,e,n){"use strict";n("899a")},5319:function(t,e,n){"use strict";var a=n("d784"),o=n("d039"),i=n("825a"),r=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("0cb2"),f=n("14c3"),p=n("b622"),h=p("replace"),m=Math.max,d=Math.min,g=function(t){return void 0===t?t:String(t)},_=function(){return"$0"==="a".replace(/./,"$0")}(),v=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),b=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));a("replace",(function(t,e,n){var a=v?"$":"$0";return[function(t,n){var a=c(this),o=void 0==t?void 0:t[h];return void 0!==o?o.call(t,a,n):e.call(String(a),t,n)},function(t,o){if("string"===typeof o&&-1===o.indexOf(a)&&-1===o.indexOf("$<")){var c=n(e,this,t,o);if(c.done)return c.value}var p=i(this),h=String(t),_="function"===typeof o;_||(o=String(o));var v=p.global;if(v){var b=p.unicode;p.lastIndex=0}var y=[];while(1){var w=f(p,h);if(null===w)break;if(y.push(w),!v)break;var x=String(w[0]);""===x&&(p.lastIndex=l(h,r(p.lastIndex),b))}for(var k="",$=0,C=0;C<y.length;C++){w=y[C];for(var S=String(w[0]),O=m(d(s(w.index),h.length),0),P=[],D=1;D<w.length;D++)P.push(g(w[D]));var I=w.groups;if(_){var j=[S].concat(P,O,h);void 0!==I&&j.push(I);var M=String(o.apply(void 0,j))}else M=u(S,h,O,P,I,o);O>=$&&(k+=h.slice($,O)+M,$=O+S.length)}return k+h.slice($)}]}),!b||!_||v)},6232:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VanCountDown",{ref:"countDown",staticClass:"button",attrs:{millisecond:"",time:6e4,"time-data":"timeData","auto-start":!1,format:"ss"},on:{finish:t.finish},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"block",staticStyle:{"text-align":"center"},on:{click:t.start}},[t._v(t._s(e.milliseconds?e.seconds+"s":t.text))])]}}])})},o=[],i={props:{beforeSend:{type:Function,default:function(){}},text:{type:String,default:"获取验证码"}},data:function(){return{isFinish:!0}},methods:{finish:function(t){this.isFinish=!0,this.$refs.countDown.reset()},start:function(){this.$refs.countDown.timeData.milliseconds||(this.isFinish=!1,this.beforeSend(this.$refs.countDown.start))}}},r=i,s=(n("fd44"),n("2877")),c=Object(s["a"])(r,a,o,!1,null,"516eb4de",null);e["a"]=c.exports},"641e":function(t,e,n){t.exports=n.p+"img/wxPay.67d5a157.png"},"6e85":function(t,e,n){"use strict";n("dfca")},"899a":function(t,e,n){},cf61:function(t,e,n){},dfca:function(t,e,n){},f1dc:function(t,e,n){"use strict";var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("VanDialog",{attrs:{"show-confirm-button":!1,value:e.value},on:{input:function(e){return t.$emit("input",e)}}},[a("div",{staticClass:"components-backDialog"},[a("div",{staticClass:"title"},[e._v("要放弃付款吗？")]),a("div",{staticClass:"money-box"}),a("div",{staticClass:"btn-box"},[a("div",{staticClass:"btn__notPay",on:{click:e.cancel}},[e._v("放弃支付")]),a("div",{staticClass:"btn__pay",on:{click:e.confirm}},[e._v("继续支付 ")])])])])},o=[],i={props:{value:{type:Boolean,default:!1}},methods:{confirm:function(){this.$emit("input",!1),this.$emit("confirm")},cancel:function(){this.$emit("input",!1),this.$emit("cancel")}}},r=i,s=(n("4cac"),n("2877")),c=Object(s["a"])(r,a,o,!1,null,null,null);e["a"]=c.exports},fd44:function(t,e,n){"use strict";n("cf61")}}]);
//# sourceMappingURL=Vivo12.9e268323.js.map