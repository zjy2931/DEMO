(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ScondLive"],{"0a63":function(e,t,a){e.exports=a.p+"img/aliPay.146d9e1e.png"},"0cb2":function(e,t,a){var r=a("7b0b"),o=Math.floor,i="".replace,n=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,a,c,l,u){var d=a+e.length,m=c.length,h=s;return void 0!==l&&(l=r(l),h=n),i.call(u,h,(function(r,i){var n;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(d);case"<":n=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>m){var u=o(s/10);return 0===u?r:u<=m?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):r}n=c[s-1]}return void 0===n?"":n}))}},1601:function(e,t,a){},"26f4":function(e,t,a){},3300:function(e,t,a){"use strict";var r=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("VanPopup",{staticClass:"components-payTypeDialog",style:{height:"30%"},attrs:{value:t.value,round:"",position:"bottom",closeable:"","close-icon":"close"},on:{input:function(t){return e.$emit("input",t)}}},[r("div",{staticClass:"title"},[t._v("请选择支付方式")]),r("div",{staticClass:"icon-box"},t._l(t.iconList,(function(e,a){return r("img",{key:a,class:["img-box",{ml__130:a}],attrs:{src:e.img},on:{click:function(a){return t.select(e.key)}}})})),0)])},o=[],i={name:"PayTypeDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{iconList:[{img:a("0a63"),key:"1"},{img:a("641e"),key:"2"}]}},methods:{select:function(e){this.$emit("change",e),this.$emit("input",!1)}}},n=i,s=(a("4beb"),a("2877")),c=Object(s["a"])(n,r,o,!1,null,null,null);t["a"]=c.exports},3679:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABGCAMAAACEwFYyAAABzlBMVEUAAAD/AAD/AAD/AAC/AADMMwDVKgDbJADjHADmGgDRFwDYFADbEgDdIgDfIADVHADXGwDZDQDbDADcDADVCwDWFADYFADZEwDcEgDWEADXEADYDwDaDwDcFQDWFQDYFADZEwDbEgDbEgDYFgDaFQDbFADYFADaFwDXEgDZEQDaEADXFADYFADYEwDaEwDaEgDXEgDZEQDaFADbFADYEwDZEwDaEgDYFQDZFADaFADaFADYFADYEQDZFQDYEgDZEgDaFADZEwDYEgDZFADYEwDYEwDZEwDaFQDYFADcEgDaEgDZFQDZEwDcEwDbEgDbEgDcEwDYEgDaFADbFADaEwDaEwDbFADaFADaFADbEgDbEgDaEwDbEwDaEwDaEgDbFADbEwDaEwDaEwDaEwDaEwDbEwDaFADaFADaFADaFADbFADaEwDaFADbFADbFADaFADaEwDaEgDbEgDbEwDaEwDaEwDaEwDaEwDbEwDaEwDaEwDaFADaFADaEwDaEwDaEwDaEwDaEwDaEwDaEwDaFADaFADaFADaEwDbEwDaEwDaEwDaFADaFADaFADaEwDaEwDaEwDaEwDaEgDaEgDaEwDaEwDaEwDaEwDaEwD//wBKtbxcAAAAmHRSTlMAAQIDBAUGBwkKCw0ODxASExQVFhgZGhsdHyAhIiQlJygqKy4wMjQ3Ojw+QEFCREVHSUxNT1BTVVhZWltcX2JlaGxvc3Z3ent9goOFh4mMjZCYmZyen6KlpqmrrrGytbe4ubq7vL3AwcLDxMfKy8zNztDS09TV1tfZ29zd3t/h4uPk5ebo6uvt7u/w8vP09fb3+Pn6+/z9/j2NFucAAAIlSURBVEjHldfpO1VRFAbwxa3jXlxXuKF00aCodKVIZZ7paqCJ0qiBBkI0kFAaRBly+m9Lnljvl/We1ofz6fec5zz77L3Wu0XWK3rhalu+8Pq1/gjdc//Uz1icN37f3ahLcV54sfuvOuM98I5N7l72cd61xd0rPsqbFXev+Rjfs6z99W1sZRo1d7sdwiUGvschXNrB33QIl1bwvQmESwv4237CpQn83QDh0gC+L0C41IN/mEi41K1p/ziJcKkF3x8kXGrADwQJl2rwT1MIl6pV7Z+HCJdK8IM7CJez4IfSCJcK8CPphEv5ivYvMwiXsiXtx3YSLifBj2cSLqXgX2cRLiU/tH+bTbhEF7Wf2E24HFvQfjKHcDkKfipCuBR90346l3A5DPtzJmzz7d1wHDvstzs9oGP2tzs3QLfbK5PQC7rVXnf/LdAt9l8N3AHdZO+ZQB/oBntHJj4AXW/v96RHGq/V2acpuR90rX1WgwOga+xOkPIEdLXdZ0LPtF6tsrtY6iDoSrtHpg2BPmN34PRh0Kfs/p4xqvVyuT09wmNaL5XZsylzHPQJe/JlvQJ93J6r2W+0/l5iT+1dE1ovRu1MkDOp9UKxnTgi70AfsfNM7nut54vstJQ3o/XXQjuLhae0/nKIJL2LoA+yHPlZ6U8FLKUmKz13gGbg+K2h8nG/h4S92ZU/7POS3/PmN/TsXm+3g8K/6/4i4vUy4T99/lypT7zy/6jfcfBC7U6QPngAAAAASUVORK5CYII="},"3be3":function(e,t,a){e.exports=a.p+"img/bg.5bde78df.jpg"},"4beb":function(e,t,a){"use strict";a("1601")},5319:function(e,t,a){"use strict";var r=a("d784"),o=a("d039"),i=a("825a"),n=a("50c4"),s=a("a691"),c=a("1d80"),l=a("8aa5"),u=a("0cb2"),d=a("14c3"),m=a("b622"),h=m("replace"),p=Math.max,f=Math.min,g=function(e){return void 0===e?e:String(e)},_=function(){return"$0"==="a".replace(/./,"$0")}(),D=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),b=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,a){var r=D?"$":"$0";return[function(e,a){var r=c(this),o=void 0==e?void 0:e[h];return void 0!==o?o.call(e,r,a):t.call(String(r),e,a)},function(e,o){if("string"===typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var c=a(t,this,e,o);if(c.done)return c.value}var m=i(this),h=String(e),_="function"===typeof o;_||(o=String(o));var D=m.global;if(D){var b=m.unicode;m.lastIndex=0}var v=[];while(1){var w=d(m,h);if(null===w)break;if(v.push(w),!D)break;var A=String(w[0]);""===A&&(m.lastIndex=l(h,n(m.lastIndex),b))}for(var E="",y=0,x=0;x<v.length;x++){w=v[x];for(var k=String(w[0]),S=p(f(s(w.index),h.length),0),C=[],F=1;F<w.length;F++)C.push(g(w[F]));var O=w.groups;if(_){var I=[k].concat(C,S,h);void 0!==O&&I.push(O);var $=String(o.apply(void 0,I))}else $=u(k,h,S,C,O,o);S>=y&&(E+=h.slice(y,S)+$,y=S+k.length)}return E+h.slice(y)}]}),!b||!_||D)},5661:function(e,t,a){},6232:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VanCountDown",{ref:"countDown",staticClass:"button",attrs:{millisecond:"",time:6e4,"time-data":"timeData","auto-start":!1,format:"ss"},on:{finish:e.finish},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"block",staticStyle:{"text-align":"center"},on:{click:e.start}},[e._v(e._s(t.milliseconds?t.seconds+"s":e.text))])]}}])})},o=[],i={props:{beforeSend:{type:Function,default:function(){}},text:{type:String,default:"获取验证码"}},data:function(){return{isFinish:!0}},methods:{finish:function(e){this.isFinish=!0,this.$refs.countDown.reset()},start:function(){this.$refs.countDown.timeData.milliseconds||(this.isFinish=!1,this.beforeSend(this.$refs.countDown.start))}}},n=i,s=(a("fd44"),a("2877")),c=Object(s["a"])(n,r,o,!1,null,"516eb4de",null);t["a"]=c.exports},"641e":function(e,t,a){e.exports=a.p+"img/wxPay.67d5a157.png"},"74e9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"secondLive"},[r("img",{attrs:{src:"https://wm-front-common.oss-cn-beijing.aliyuncs.com/wm-front-landing-page-mobile-custom/assets/callback/1.png",alt:""}}),r("div",{staticClass:"form"},[r("div",{staticClass:"content"},[r("VanForm",{ref:"form",attrs:{"validate-first":"","show-error":!1,"show-error-message":!1},on:{submit:e.onSubmit,failed:e.showErrorMsg}},[r("VanField",{attrs:{name:"phone",placeholder:"请填写手机号",rules:[{required:!0,message:"33003"},{pattern:e.phoneReg,message:"33004"}]},scopedSlots:e._u([{key:"left-icon",fn:function(){return[r("span",{staticClass:"prefix"},[e._v(" +86 "),r("span",{staticClass:"icon"},[e._v("▼")])])]},proxy:!0}]),model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),r("div",{staticClass:"wrap"},[r("VanField",{staticClass:"phonecode",attrs:{name:"code",placeholder:"请填写验证码",rules:[{required:!0,message:"33005"}]},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),r("div",{staticClass:"code"},[r("CountDown",{attrs:{"before-send":e.beforeSend}})],1)],1)],1)],1)]),r("img",{attrs:{src:a("3be3"),alt:""}}),e.sum<=0?r("div",{staticClass:"submit",on:{click:e.submit}},[e._m(0),e._m(1)]):e._e(),e.sum>0?r("Footer",{attrs:{nums:e.sum},on:{click:e.submit}}):e._e(),r("VanSwipe",{staticClass:"swipe",attrs:{"show-indicators":!1,vertical:"",autoplay:3e3}},e._l(e.swiperList,(function(t,a){return r("VanSwipeItem",{key:a},[r("img",{staticClass:"icon",attrs:{src:t.portrait,alt:""}}),r("div",{staticClass:"text"},[e._v(e._s(t.phone)+" "+e._s(t.time)+"秒前 报名成功")])])})),1),r("PayTypeDialog",{on:{change:e.pay},model:{value:e.showPaySelet,callback:function(t){e.showPaySelet=t},expression:"showPaySelet"}}),r("VanDialog",{attrs:{"show-confirm-button":!1,"overlay-style":{backgroundColor:e.maskColor}},model:{value:e.showMpDialog,callback:function(t){e.showMpDialog=t},expression:"showMpDialog"}},[r("Dialog",{attrs:{options:e.reportData,src:e.src}},[r("span",{domProps:{innerHTML:e._s(e.dialogTitle)}}),r("span",{attrs:{slot:"des"},domProps:{innerHTML:e._s(e.dialogDes)},slot:"des"})])],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("div",{staticClass:"text"},[e._v("抢先体验"),a("span",{staticClass:"big"},[e._v("微淼实践班")])]),a("div",{staticClass:"price"},[e._v("仅需"),a("span",{staticClass:"num"},[e._v("199")]),e._v("元")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"right"},[e._v(" 立即报名 "),r("img",{staticClass:"icon",attrs:{src:a("3679"),alt:""}})])}],i=a("5530"),n=a("1da1"),s=(a("4de4"),a("caad"),a("ac1f"),a("5319"),a("96cf"),a("ed08")),c=a("3300"),l=a("6232"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sign_up",on:{click:function(t){return e.$emit("click")}}},[a("div",{staticClass:"num"},[a("span",[e._v("当天免费名额仅剩"),a("span",{staticClass:"tips"},[e._v(e._s(e.nums))]),e._v("个")])]),e._m(0)])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right"},[a("div",{staticClass:"content"},[a("div",{staticClass:"btn"},[e._v("立即0元报名")]),a("div",{staticClass:"price"},[e._v("原价199元")])])])}],m=(a("a9e3"),{props:{nums:{type:Number,default:3008}}}),h=m,p=(a("a40c"),a("2877")),f=Object(p["a"])(h,u,d,!1,null,"c197bdfe",null),g=f.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog"},[a("div",{staticClass:"title"},[e._t("default",(function(){return[e._v("抱歉～ "),a("br"),e._v("该课程仅适合小白学习")]}))],2),a("div",{staticClass:"des"},[e._t("des",(function(){return[e._v("小淼向您推荐《微淼大咖课》"),a("br"),e._v(" 每周一位理财大咖，直播分享理财真经")]}))],2),a("div",{staticClass:"qrcode"},[a("img",{directives:[{name:"log",rawName:"v-log:long",value:{options:e.options},expression:"{options:options}",arg:"long"}],attrs:{src:e.src,alt:""}}),a("div",{staticClass:"tips"},[e._v("长按或扫描二维码 关注公众号后学习")])])])},D=[],b={props:{options:{type:Object,default:function(){return{}}},src:{type:String,default:"https://cdn-xiaobai-market.weimiaocaishang.com/Public/xun/qrcode/weimiaoxuetang.png"}}},v=b,w=(a("eb06"),Object(p["a"])(v,_,D,!1,null,"5d8b28b8",null)),A=w.exports,E={30005:{msg:"您已经学习过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0261"}},30006:{msg:"您已购买过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0262"}},30007:{msg:"您已购买过此课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0263"}},30011:{msg:"您已购买过同类课程",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0264"}},33002:{msg:"验证码有误,请重填",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0260"}},33003:{msg:"请填写手机号",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0257"}},33004:{msg:"手机号有误,请重新填",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0258"}},33005:{msg:"请填写验证码",report:{current_page:location.href,module_ori:"表单错误模块",module_part:"106_toufang_lcx_0259"}},39106:{report:{module_ori:"页面弹窗",module_part:"107_xbyzb_h5_eczh_00001"}},39104:{report:{module_ori:"页面弹窗",module_part:"107_xbyzb_h5_eczh_00002"}},39100:{report:{module_ori:"页面弹窗",module_part:"107_xbyzb_h5_eczh_00003"}},39105:{report:{module_ori:"页面弹窗",module_part:"107_xbyzb_h5_eczh_00004"}},39102:{report:{module_ori:"页面弹窗",module_part:"107_xbyzb_h5_eczh_00005"}},39101:{report:{module_ori:"页面弹窗",module_part:"107_xbyzb_h5_eczh_00006"}},39103:{report:{module_ori:"页面弹窗",module_part:"107_xbyzb_h5_eczh_00006"}}};function y(e,t){var a=t-e,r=Math.random(),o=e+Math.round(r*a);return o}function x(e){for(var t=[],a=0;a<e;a++)t.push(y(0,20));return t}function k(e){return e.reduce((function(e,t,a,r){return e+t}))}function S(){var e=JSON.parse(localStorage.getItem("rdmArray"));return e||(e=x(300),localStorage.setItem("rdmArray",JSON.stringify(e))),{arr:e,sum:k(e)}}var C=S(),F=a("d2823"),O={components:{PayTypeDialog:c["a"],CountDown:l["a"],Footer:g,Dialog:A},data:function(){return{swiperList:[],form:{},isFinsh:!0,showPaySelet:!1,sum:0,text:0,showMpDialog:!1,showBtnDialog:!0,dialogTitle:"",dialogDes:"",reportData:{},maskColor:"rgba(0,0,0,0.7)",src:"https://cdn-xiaobai-market.weimiaocaishang.com/Public/xun/qrcode/weimiaoxuetang.png"}},beforeRouteEnter:function(e,t,a){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!localStorage.getItem("uid_recall")){e.next=2;break}return e.abrupt("return",a());case 2:return e.next=4,F["a"].user.newClickId();case 4:t=e.sent,r=t.wm_click_id,localStorage.setItem("uid_recall",r),a();case 8:case"end":return e.stop()}}),e)})))()},computed:{nums:function(){return this.sum>0?this.sum:0}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form={phone:localStorage.getItem("callback-phone"),code:localStorage.getItem("callback-code")},e.initLog(),e.$log.show({module_ori:"短信→H5分班入口-浏览器H5落地页访问",module_part:"107_h5_xbzb_formal__hyj_0045"}),t.next=5,e.$apis.userOperator.getLatestUser();case 5:if(a=t.sent,e.swiperList=a,e.form.phone){t.next=9;break}return t.abrupt("return");case 9:e.needCheck=!!Object(s["e"])("checkOrder"),e.changeQuery("checkOrder"),e.checkOrder(!0),e.timer=setInterval((function(){e.checkOrder()}),3e3);case 13:case"end":return t.stop()}}),t)})))()},mounted:function(){this.contInterval(),this.$toast.setDefaultOptions({className:"secondLiveToast"}),this.heartbeat=this.$log.heartbeat({event:"heart",module_ori:"短信→H5分班入口-浏览器H5落地页访问时长",module_part:"107_h5_xbzb_formal__hyj_0046"},5e3,1),this.$log.show({module_part:"107_h5_xbzb_formal__hyj_0047",module_ori:"短信→H5分班入口-浏览器H5落地页访问长度"}),this.heartbeat.start()},beforeDestroy:function(){this.stop()},methods:{initLog:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=Object(s["e"])(),r=localStorage.getItem("uid_recall"),e.$log.update({alternate:JSON.stringify({message_touch:1,message_id:a.message_id,activity_id:a.activity_id,uid_recall:r,uv4recall:"1",screen_loc:2}),current_page:location.href});case 3:case"end":return t.stop()}}),t)})))()},contInterval:function(){var e=this,t=C.sum,a=Date.parse(new Date)/1e3,r=localStorage.getItem("firtSeconds"),o=0;r?o=300-(a-r):(localStorage.setItem("firtSeconds",a),o=300);var i=C.arr.filter((function(e,t){return t>o})).reduce((function(e,t,a,r){return e+t}),0);this.sum=t-i,this.timer1=setInterval((function(){if(e.sum<=0)return clearInterval(e.timer1),e.text=199,void(e.sum=0);o--,e.sum=e.sum-(C.arr[o]||1)}),1e3)},stop:function(){clearInterval(this.timer),clearInterval(this.timer1),this.heartbeat.stop()},submit:function(){var e={module_ori:"短信→H5分班入口-浏览器H5落地页-点我分班按钮-0元课",module_part:"107_h5_xbzb_formal__hyj_0048"};this.sum<=0&&(e={module_ori:"短信→H5分班入口-浏览器H5落地页-点我分班按钮-199元",module_part:"107_h5_xbzb_formal__hyj_0051"}),this.$log.click(e),this.$refs.form.submit()},ZeroSubmit:function(){var e=this,t=Object(s["e"])(),a=localStorage.getItem("uid_recall");this.$apis.userOperator.signUp(Object(i["a"])(Object(i["a"])(Object(i["a"])({message_id:t.message_id,activity_id:t.activity_id},this.form),t),{},{uid_recall:a})).then((function(t){e.goSucccess()})).catch((function(t){e.showMsg(t)}))},showMsg:function(e){var t=this;this.$dialog.close();var a=e.msg,r=e.code;if(console.log(a,E),this.reportData=E[r].report,39100!==r){if([39103,39101].includes(r))return this.maskColor="rgba(0,0,0,1)",this.dialogTitle="抱歉～<br/> 课程太火爆了, 名额已满",this.dialogDes="小淼提醒您关注《微淼学堂》公众号<br/>了解下期活动开启时间",this.showMpDialog=!0,void(this.src="https://cdn-xiaobai-market.weimiaocaishang.com/Public/xun/qrcode/weimiaoxuetang.png");if(39102===r)return this.dialogTitle="本期活动已结束",this.dialogDes="小淼提醒您关注《微淼学堂》公众号 <br/> 了解下期活动开启时间",this.showMpDialog=!0,void(this.src="https://cdn-xiaobai-market.weimiaocaishang.com/Public/xun/qrcode/weimiaoxuetang.png");if([30007,39104].includes(r))return this.dialogTitle="您已经学过该课程啦",this.dialogDes="小淼向您推荐《微淼大咖课》 <br/>每周一位理财大咖，直播分享理财真经",this.showMpDialog=!0,void(this.src="https://cdn-xiaobai-market.weimiaocaishang.com/Public/xun/qrcode/weimiaodaka.png");if(39105!==r)return 39106===r?(this.dialogTitle="抱歉～ <br/> 该课程仅适合小白学习",this.dialogDes="小淼向您推荐《微淼大咖课》 <br/> 每周一位理财大咖，直播分享理财真经",this.showMpDialog=!0,void(this.src="https://cdn-xiaobai-market.weimiaocaishang.com/Public/xun/qrcode/weimiaodaka.png")):void this.$toast(a||E[r].msg);this.$dialog({message:"该课程为进阶课程，\n小淼建议您先学习基础课程",theme:"round-button",confirmButtonText:"立即报名"}).then((function(e){t.$log.click(t.reportData),location.href="https://info.weimiaoxuetang.top/customer/?site_id=152#/Scene/LiveEnhance12?from=wm"}))}else this.$dialog({title:"您已报名该课程",theme:"round-button",confirmButtonText:"查看老师"}).then((function(e){t.$log.click(t.reportData),t.goSucccess()}))},goSucccess:function(){this.$router.push({name:"SecondLiveResult",query:Object(i["a"])({},this.$route.query)})},checkOrder:function(e){var t=this,a=localStorage.getItem("callback-phone");if(a){var r=Object(s["e"])();r.activity_id&&r.message_id&&this.$apis.userOperator.checkActiveUser({phone:this.form.phone,message_id:r.message_id,activity_id:r.activity_id}).catch((function(a){39100===a.code&&t.needCheck?t.goSucccess():(t.showMsg(a),clearInterval(t.timer),e&&39100!==a.code&&t.setPhone())}))}},setPhone:function(){localStorage.removeItem("callback-phone"),localStorage.removeItem("callback-code"),this.form={phone:"",code:""}},beforeSend:function(e){var t=this;this.$refs.form.validate("phone").then((function(a){e(),t.$apis.userOperator.getPhoneCode({phone:t.form.phone})})).catch((function(e){e={code:e.message},t.showMsg(e)}))},showErrorMsg:function(e){e={code:e.errors[0].message},this.showMsg(e)},onSubmit:function(e){var t=this,a=Object(s["e"])();localStorage.setItem("callback-phone",this.form.phone),localStorage.setItem("callback-code",this.form.code),this.$apis.payment.payBeforeCheck(Object(i["a"])(Object(i["a"])({},this.form),{},{message_id:a.message_id,activity_id:a.activity_id,product_sn:"PRODUCT_SN_XIAOBAI_199_LIVE"})).then(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.sum>0)){e.next=2;break}return e.abrupt("return",t.ZeroSubmit());case 2:t.showPaySelet=!0;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){if(t.$dialog.close(),30001===e.code)return t.goSucccess();33002!==e.code?t.checkOrder():t.showMsg(e)}))},pay:function(e){var t=this;e&&localStorage.setItem("payType",e),e=localStorage.getItem("payType");var a=Object(s["e"])(),r=localStorage.getItem("uid_recall"),o=location.href+"&checkOrder=yes";this.$apis.payment.pay(Object(i["a"])(Object(i["a"])(Object(i["a"])({},a),this.form),{},{pay_type:e,return_url:encodeURIComponent(o),product_sn:"PRODUCT_SN_XIAOBAI_199_LIVE",uid_recall:r})).then((function(a){"1"===e&&t.aliPay(a),"2"===e&&t.wxPay(a)})).catch((function(e){console.log(e),33002!==e.code?t.checkOrder():t.showMsg(e)}))},wxPay:function(e){window.location.replace(decodeURIComponent(e.url))},aliPay:function(e){this.changeQuery("checkOrder","yes");var t=document.getElementById("aLiPay");t&&t.parentNode.removeChild(t);var a=document.createElement("div");a.id="aLiPay",a.innerHTML=e,document.body.appendChild(a),a.children[0].submit()},changeQuery:function(e,t){var a=JSON.parse(JSON.stringify(this.$route.query));t?a[e]=t:delete a[e],this.$router.replace(Object(i["a"])(Object(i["a"])({},this.$route),{},{query:Object(i["a"])({},a)}))}}},I=O,$=(a("d3e8"),Object(p["a"])(I,r,o,!1,null,"2328621c",null));t["default"]=$.exports},a40c:function(e,t,a){"use strict";a("cc89")},cc89:function(e,t,a){},cf61:function(e,t,a){},d3e8:function(e,t,a){"use strict";a("26f4")},eb06:function(e,t,a){"use strict";a("5661")},fd44:function(e,t,a){"use strict";a("cf61")}}]);
//# sourceMappingURL=ScondLive.2b34e932.js.map