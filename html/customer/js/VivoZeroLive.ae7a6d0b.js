(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["VivoZeroLive"],{"041d":function(e,t,n){e.exports=n.p+"img/4.dc5c5c8b.png"},"253a":function(e,t,n){e.exports=n.p+"img/2.78fab14a.png"},"36ca":function(e,t,n){"use strict";n("f449")},"4e6b":function(e,t,n){var o={"./1.png":"b61d","./2.png":"253a","./3.png":"affe","./4.png":"041d","./5.png":"fd04","./5c.png":"b738","./footer_img.png":"b94f","./icon_phone-arrow.png":"946b"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="4e6b"},"54b4":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{on:{click:e.getPhoneCode}},[e._v(" "+e._s(e.codeTime?e.codeTime+"s":"获取验证码")+" ")])},r=[],a=n("5530"),c=n("1da1"),s=(n("96cf"),n("8b2e")),i={props:{getCodeSuccessBack:{type:Function,default:null},getCodeErrorBack:{type:Function,default:null},phone:{type:String,default:""},params:{type:Object,default:function(){return{}}}},data:function(){return{codeTime:0,timerObj:1}},methods:{getPhoneCode:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var o,r,c,i,u,_;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=e.successBack,r=void 0===o?t.getCodeSuccessBack:o,c=e.errorBack,i=void 0===c?t.getCodeErrorBack:c,u=t.phone,_=t.codeTime,!_){n.next=4;break}return n.abrupt("return");case 4:if(Object(s["a"])(u)){n.next=7;break}return"function"===typeof i&&i(),n.abrupt("return");case 7:return n.prev=7,t.codeTime=60,t.timerObj=setInterval((function(){t.codeTime--,t.codeTime||clearInterval(t.timerObj)}),1e3),n.next=12,t.$apis.userOperator.getPhoneCode(Object(a["a"])({phone:u},t.params));case 12:localStorage.setItem("getCodeTime",(new Date).getTime()),"function"===typeof r&&r(),n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](7),"function"===typeof i&&i(n.t0);case 19:case"end":return n.stop()}}),n,null,[[7,16]])})))()}}},u=i,_=n("2877"),p=Object(_["a"])(u,o,r,!1,null,null,null);t["a"]=p.exports},"7b5d":function(e,t,n){"use strict";n("7e4d")},"7e4d":function(e,t,n){},"8b2e":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("e17f");var o=n("2241");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"手机号码有误，请重填";return e?!!/^[1]([3-9])[0-9]{9}$/.test(e)||(Object(o["a"])({message:t}),!1):(Object(o["a"])({message:"请填写手机号"}),!1)}},"946b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADQAAAACsJSLBAAAAmklEQVQoFZ1SgQ2AIAwD4QY/IOEij9B7fEIfghfkCFxJZtTgRJcsDGhLm6BjjKNSqqf+U5vNOSdizn/YxBk67/1KA/prreB2YBljJq01nDQVsOAAXAScc4milIMWBWDBOQQwfIhSrPNDxQFv3qKcrTPnIvAW5Wy9KoBDIcrF+qMALu5RatZFgXuUmnUWENcQwoKWQFa65M8iYXYqxz9oiUTGCAAAAABJRU5ErkJggg=="},affe:function(e,t,n){e.exports=n.p+"img/3.a5a155ee.png"},b61d:function(e,t,n){e.exports=n.p+"img/1.60e35ddf.png"},b738:function(e,t,n){e.exports=n.p+"img/5c.870be6c7.png"},b94f:function(e,t,n){e.exports=n.p+"img/footer_img.d06526db.png"},e031:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VanDialog",{staticClass:"statement",attrs:{value:!0,"show-confirm-button":!1}},[n("div",{staticClass:"statement__container"},[n("h6",[e._v("个人信息授权与保护声明")]),n("div",{staticClass:"mt__20"},[n("p",[e._v("尊敬的用户，“快手”及其关联公司(以下简称“我们”)将按照本声明及《隐私权保护政策》的规定收集、保存、使用、储存、分享、披露及保护您的个人信息。因此请您务必认真完整阅读并理解本声明，尤其是黑体加粗的部分，如果您不同意本声明，请勿进行下一步操作。")]),n("h6",[e._v("一、我们收集和使用您的个人信息类型和目的")]),n("p",[e._v("1、为给您提供完善的服务，需要您向我们提供一些信息，我们收集您的个人信息的最终目的是为了向您提供更好的产品、服务，优化并丰富您的用户体验，这些个人信息系能够单独或者与其他信息结合识别您的个人身份的信息，包括但不限于：")]),n("p",[e._v("（1）姓名")]),n("p",[e._v("（2）手机号码")]),n("p",[e._v("（3）您在服务提供方所建落地页面输入或上载的其他个人信息。")]),n("p",[e._v("2、您授权我们将上述信息共享给您在浏览界面所看到的特定行业对应的服务提供方，之后您会收到来自该服务提供方的电话或短信，以向您提供相关服务的邀请或需求沟通，包含但不限于：")]),n("p",[e._v("（1）姓名")]),n("p",[e._v("（2）手机号码")]),n("p",[e._v("（3）您在服务提供方所建落地页面输入或上载的其他个人信息。")]),n("p",[e._v("3、您授权我们将上述信息共享给您在浏览界面所看到的特定行业对应的服务提供方，之后您会收到来自该服务提供方的电话或短信，以向您提供相关服务的邀请或需求沟通，包含但不限于：")]),n("p",[e._v("（1）汽车行业服务提供方，邀请您试驾、到4s店看车、参与车友会活动；")]),n("p",[e._v("（2）教育行业服务提供方，邀请您试听课程、沟通课程需求;")]),n("p",[e._v("（3）旅游行业服务提供方，与您预约沟通自由行需求，或沟通定制游需求;")]),n("p",[e._v("（4）家装行业服务提供方，与您预约上门测量、预约设计师沟通装修需求;")]),n("p",[e._v("（5）其他需要联系您，以便您接受线下服务，实地体验的场景。")]),n("p",[e._v("4、当您使用在线通话服务时，为了保证服务方的服务质量，您的通话可能会被录音。如您对此有所异议，请您不要点击“电话”按钮。")]),n("p",[e._v("5、以上个人信息均是您自愿提供，如果您拒绝同意提供的，将无法使用该产品功能，但不会影响您正常使用其它功能。")]),n("p",[e._v("6、对于不满18周岁的用户，须在其法定监护人已经阅读本政策并且许可的情况下，通过网站提交个人信息。")]),n("h6",[e._v("二、我们如何使用及共享您的个人信息")]),n("p",[e._v("1、您同意我们通过如下方式使用及对外共享您个人信息的情况（包含对于个人信息的存储和处理）：")]),n("p",[e._v("1）我们在合法正当的范围内使用；")]),n("p",[e._v("2）我们向您授权的服务提供方分享并由其在合法正当的范围内使用；")]),n("p",[e._v("3）我们及相关特定行业的服务提供方为满足您的需求，可能会通过您提供的信息与您联系；")]),n("p",[e._v("4）为了省去您手动输入的操作，您用于注册快手的手机号可能已经展示在信息录入界面，但这并不代表第三方已经获取相关信息。当且仅当在同意《个人信息授权与保护声明》的前提下，我方获得您授权快手与第三方分享您的相关信息（具体授权信息类型以页面提示为准）的许可后，我方才会向第三方办法访问您信息的令牌。若您拒绝使用预填充功能，或者拟撤回使用预填充功能的授权，不影响您主动输入相关信息并继续使用第三方的产品/服务")]),n("p",[e._v("5）我们及您授权范围内的服务提供方可能定期或不定期向您发送有关产品、服务或相关活动的信息，您同意接收上述信息。当我们超出与本声明及《隐私权保护政策》所声称的目的具有直接或合理关联的范围后使用您的个人信息的，我们会再次向您告知并征得您的同意。您同意免除上述个人信息的接收和/或使用方在按照本声明所述情形下进行信息披露和使用而导致的或可能导致的所有索赔、责任和损失")]),n("p",[e._v("2、我们已在相应的功能模块明示征得了您的同意。我们已经要求其应对您的个人信息进行严格保密，要求其按照我们的说明、《隐私权保护政策》以及其他任何相关的保密和安全措施来处理个人信息。")]),n("p",[e._v("3、在个人信息匿名化或去标识化的前提下，本平台有权对您提供的个人信息进行数据分析，并对用户数据库加以商业化使用。")]),n("h6",[e._v("三、更正或投诉")]),n("p",[e._v("如果您需要查询、修改或更正、撤销授权您的个人信息，或对个人信息保护问题有任何疑问或投诉，您可以通过以下方式联系我们：拨打电话4001260088。")]),n("h6",[e._v("四、通知和修订")]),n("p",[e._v("我们可能适时修改本声明，对于重大变更，我们会提供更显著的通知，您可以选择停止使用快手提供的产品/服务；在该种情况下，如您仍然继续使用我们的产品/服务，即表示同意接受经修订的本声明及《隐私权保护政策》的约束。")])]),n("p",{staticClass:"statement__ikonw",on:{click:function(t){return e.$emit("onCloseMask")}}},[e._v("知道了")])])])},r=[],a={},c=a,s=(n("7b5d"),n("2877")),i=Object(s["a"])(c,o,r,!1,null,"19f0e5d5",null);t["a"]=i.exports},ef7d:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"zero"},[o("img",{staticClass:"zero__img-auto",attrs:{src:e.baseUrl+"zeroLive/header.png"}}),o("div",{staticClass:"zero__form-item mt__70"},[o("p",{staticClass:"ml__30 mr__20"},[e._v("+86")]),o("img",{attrs:{src:n("946b"),alt:""}}),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.phone,expression:"phone",modifiers:{trim:!0}}],ref:"phoneInput",attrs:{id:"phoneInput",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),o("div",{staticClass:"zero__form-item mt__20"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.code,expression:"code",modifiers:{trim:!0}}],attrs:{placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),o("CountDownBtn",{staticClass:"pl__10 phone-code",attrs:{phone:e.phone,params:{product_sn:"PRODUCT_SN_XIAOBAI_0"},"get-code-success-back":e.getCodeSuccessBack,"get-code-error-back":e.getCodeErrorBack}})],1),o("p",{directives:[{name:"show",rawName:"v-show",value:e.stateIsShow,expression:"stateIsShow"}],staticClass:"zero__state mt__20 mb__20",on:{click:function(t){e.stateModelShow=!0}}},[e._v(" 《个人信息授权与保护声明》 ")]),o("div",{staticClass:"zero__form-btn-wrap"},[o("div",{staticClass:"mt__20",on:{click:e.onZeroSubmitPay}},[e._v("0元抢购")])]),o("div",{staticClass:"zero__line"}),o("div",{staticClass:"zero__line-title"},[e._v("最新报名客户")]),o("VanSwipe",{staticClass:"zero__swipe-box",attrs:{autoplay:3e3,"show-indicators":!1,vertical:""}},e._l(e.swipeList,(function(t,n){return o("VanSwipeItem",{key:n},e._l(t,(function(t,n){return o("div",{key:n,staticClass:"zero__swipe-box__item"},[o("p",[e._v(e._s(t.phone))]),o("p",[e._v(e._s(t.state))]),o("p",[e._v(e._s(t.time))])])})),0)})),1),e._l(4,(function(e,t){return o("img",{key:t,class:["zero__img-auto",{mt__40:!t}],attrs:{src:n("4e6b")("./"+(t+1)+".png")}})})),o("img",{staticClass:"zero__img-auto",attrs:{src:n("b738"),alt:""}}),e._m(0),o("div",{staticClass:"zero__footer"},[e._m(1),o("div",{staticClass:"zero__footer__btn",on:{click:e.onZeroSubmitPay}},[o("span",[e._v("免费报名")])])]),e.stateModelShow?o("Statement",{on:{onCloseMask:function(t){e.stateModelShow=!1}}}):e._e()],2)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"right"},[n("div",{staticClass:"name"},[e._v("北京微淼财商科技有限公司")]),n("div",{staticClass:"num"},[e._v("京ICP备19026951号-4")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"zero__footer__topic"},[n("div",[n("div",{staticClass:"zero__footer__topic__number"},[e._v("限时特惠")])]),n("p",{staticClass:"zero__footer__topic__money"},[n("i",[e._v("0")]),e._v("元")])])}],a=(n("e17f"),n("2241")),c=n("1da1"),s=n("5530"),i=(n("4b0a"),n("2bb1")),u=(n("7844"),n("5596")),_=(n("96cf"),[[{phone:"152****6681",state:"报名成功",time:"6秒前"},{phone:"158****6688",state:"报名成功",time:"12秒前"}],[{phone:"186****6736",state:"报名成功",time:"9秒前"},{phone:"150****6291",state:"报名成功",time:"12秒前"}],[{phone:"138****1194",state:"报名成功",time:"13秒前"},{phone:"156****0212",state:"报名成功",time:"6秒前"}],[{phone:"139****1386",state:"报名成功",time:"9秒前"},{phone:"158****8585",state:"报名成功",time:"8秒前"}],[{phone:"133****6347",state:"报名成功",time:"12秒前"},{phone:"139****1386",state:"报名成功",time:"13秒前"}],[{phone:"186****3459",state:"报名成功",time:"6秒前"},{phone:"185****9992",state:"报名成功",time:"8秒前"}],[{phone:"135****7510",state:"报名成功",time:"11秒前"},{phone:"186****6066",state:"报名成功",time:"9秒前"}],[{phone:"187****1967",state:"报名成功",time:"10秒前"},{phone:"188****5458",state:"报名成功",time:"11秒前"}],[{phone:"150****5153",state:"报名成功",time:"10秒前"},{phone:"135****9329",state:"报名成功",time:"11秒前"}],[{phone:"155****8258",state:"报名成功",time:"16秒前"},{phone:"151****3513",state:"报名成功",time:"7秒前"}]]),p={GET_CODE:"106_toufang_lcx_0136",SUBMIT_BTN:"106_toufang_lcx_0137",ERROR_PHONE:"106_toufang_lcx_0138",ERROR_CODE:"106_toufang_lcx_0139",STUDENT_OVER:"106_toufang_lcx_0140",ERROR_ORDER:"106_toufang_lcx_0142",ERROR_BUYED:"106_toufang_lcx_0141"},l=n("ed08"),m=n("54b4"),d=n("e031"),f={components:{VanSwipe:u["a"],VanSwipeItem:i["a"],CountDownBtn:m["a"],Statement:d["a"]},data:function(){return Object(s["a"])(Object(s["a"])({stateIsShow:"1610"===Object(l["e"])("medId"),stateModelShow:!1},p),{},{swipeList:_,phone:"",code:"",paytype:1})},created:function(){this.init()},methods:{init:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("buyPhone"),n){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e.$apis.payment.checkOrder({phone:n,product_sn:"PRODUCT_SN_XIAOBAI_0"});case 6:t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](3),o=t.t0.code,r=t.t0.data,30006===o&&e.hrefToSuccess(r.product_sn,r.order_num);case 12:case"end":return t.stop()}}),t,null,[[3,8]])})))()},onZeroSubmitPay:function(){var e=arguments,t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var o,r,c,i,u,_,p,m,d,f,v;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=e.length>0&&void 0!==e[0]?e[0]:{},!t.click){n.next=3;break}return n.abrupt("return");case 3:if(t.click=!0,r=o.successBack,c=void 0===r?t.paySuccessBack:r,i=o.errorBack,u=void 0===i?t.payErrorBack:i,n.prev=5,_=t.phone,p=t.code,Object(l["g"])(_)){n.next=11;break}return Object(a["a"])({message:"手机号码有误，请重填"}).then((function(){t.$refs.phoneInput.focus()})),t.click=!1,n.abrupt("return");case 11:return n.next=13,t.$apis.payment.pay(Object(s["a"])({phone:_,code:p,product_sn:"PRODUCT_SN_XIAOBAI_0"},Object(l["e"])()));case 13:m=n.sent,d=m.order_num,f=m.product_sn,localStorage.setItem("buyPhone",_),localStorage.setItem("is_pay","1"),"function"===typeof c&&c(),t.click=!1,t.hrefToSuccess(f,d),n.next=29;break;case 23:n.prev=23,n.t0=n["catch"](5),t.click=!1,v=n.t0.data,"function"===typeof u&&u(v),30006===n.t0.code&&t.$dialog({message:n.t0.msg,confirmButtonText:"查看分班"}).then((function(e){t.hrefToSuccess(n.t0.data.product_sn,n.t0.data.order_num)}));case 29:case"end":return n.stop()}}),n,null,[[5,23]])})))()},hrefToSuccess:function(e,t){var n={PRODUCT_SN_XIAOBAI_12:"SuccessEnrollWM",PRODUCT_SN_XIAOBAI_7:"SuccessEnrollWM",PRODUCT_SN_XIAOBAI_1:"SuccessEnrollMH",PRODUCT_SN_XIAOBAI_0:"SuccessEnrollMH"};localStorage.setItem("productSn",e),localStorage.setItem("orderNum",t),this.$router.push({name:n[e],query:{orderNum:t}}).catch((function(e){console.log(e)}))},paySuccessBack:function(){this.$log.click({current_page:location.href,module_ori:"表单提交",module_part:this.SUBMIT_BTN})},payErrorBack:function(e){var t={33002:this.ERROR_CODE,30001:this.STUDENT_OVER,30003:this.STUDENT_OVER,30004:this.ERROR_BUYED,30002:this.ERROR_BUYED};t[e.code]&&this.$log.click({current_page:location.href,module_ori:"表单错误模块",module_part:t[e.code]})},getCodeSuccessBack:function(){this.$log.click({module_ori:"表单提交",module_part:this.GET_CODE})},getCodeErrorBack:function(){this.$log.click({current_page:location.href,module_ori:"表单错误模块",module_part:this.ERROR_PHONE})}}},v=f,h=(n("36ca"),n("2877")),A=Object(h["a"])(v,o,r,!1,null,null,null);t["default"]=A.exports},f449:function(e,t,n){},fd04:function(e,t,n){e.exports=n.p+"img/5.273d7065.png"}}]);
//# sourceMappingURL=VivoZeroLive.ae7a6d0b.js.map