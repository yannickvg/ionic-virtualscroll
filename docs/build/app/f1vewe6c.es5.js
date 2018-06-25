/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(a,i){function s(t){try{l(n.next(t))}catch(t){i(t)}}function r(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){t.done?a(t.value):new o(function(e){e(t.value)}).then(s,r)}l((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var o,n,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],n=0}finally{o=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}};App.loadBundle("f1vewe6c",["exports","./chunk-33efde6b.js","./chunk-62950a0c.js"],function(t,e,o){var n=window.App.h;function a(t,e,o){var n,a=new t,i=new t,s=e.querySelector(".toast-wrapper");i.addElement(s),CSS.supports("bottom","env(safe-area-inset-bottom)")?n="env":CSS.supports("bottom","constant(safe-area-inset-bottom)")&&(n="constant");var r=n?"calc(-10px - "+n+"(safe-area-inset-bottom))":"-10px",l=n?"calc("+n+"(safe-area-inset-top) + 10px)":"10px";switch(o){case"top":i.fromTo("translateY","-100%",l);break;case"middle":var c=Math.floor(e.clientHeight/2-s.clientHeight/2);s.style.top=c+"px",i.fromTo("opacity",.01,1);break;default:i.fromTo("translateY","100%",r)}return Promise.resolve(a.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(i))}function i(t,e,o){var n,a=new t,i=new t,s=e.querySelector(".toast-wrapper");i.addElement(s),CSS.supports("bottom","env(safe-area-inset-bottom)")?n="env":CSS.supports("bottom","constant(safe-area-inset-bottom)")&&(n="constant");var r=n?"calc(-10px - "+n+"(safe-area-inset-bottom))":"-10px",l=n?"calc("+n+"(safe-area-inset-top) + 10px)":"10px";switch(o){case"top":i.fromTo("translateY",l,"-100%");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("translateY",r,"100%")}return Promise.resolve(a.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}function s(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","-100%","0%");break;case"middle":var s=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=s+"px",a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(a))}function r(t,e,o){var n=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","0px","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}var l=function(){function t(){this.presented=!1,this.keyboardClose=!1,this.showCloseButton=!1,this.translucent=!1,this.willAnimate=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(o){switch(o.label){case 0:return[4,e.present(this,"toastEnter",a,s,this.position)];case 1:return o.sent(),this.duration&&(this.durationTimeout=setTimeout(function(){return t.dismiss()},this.duration)),[2]}})})},t.prototype.dismiss=function(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),e.dismiss(this,t,o,"toastLeave",i,r,this.position)},t.prototype.onDidDismiss=function(t){return e.eventMethod(this.el,"ionToastDidDismiss",t)},t.prototype.onWillDismiss=function(t){return e.eventMethod(this.el,"ionToastWillDismiss",t)},t.prototype.hostData=function(){var t=this.translucent?o.createThemedClasses(this.mode,this.color,"toast-translucent"):{};return{class:Object.assign({},t,o.getClassMap(this.cssClass))}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+(this.position?this.position:"bottom")]=!0,t);return n("div",{class:o},n("div",{class:"toast-container"},this.message?n("div",{class:"toast-message"},this.message):null,this.showCloseButton?n("ion-button",{fill:"clear",color:"light",class:"toast-button",onClick:function(){return e.dismiss()}},this.closeButtonText||"Close"):null))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"toast"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-toast{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;pointer-events:none;contain:strict}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-ios{font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;position:absolute;z-index:10;display:block;max-width:700px;background:var(--ion-background-ios-color-step-50,var(--ion-background-color-step-50,#f2f2f2))}.toast-translucent-ios .toast-wrapper{background:rgba(var(--ion-background-ios-color-rgb,var(--ion-background-color-rgb,255,255,255)),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-ios .toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-ios .toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-ios .toast-wrapper.toast-middle{opacity:.01}.toast-ios .toast-message{padding:15px;font-size:14px;color:var(--ion-text-ios-color-step-150,var(--ion-text-color-step-150,#262626))}.toast-ios .toast-button{color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#666))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();t.IonToast=l,Object.defineProperty(t,"__esModule",{value:!0})});