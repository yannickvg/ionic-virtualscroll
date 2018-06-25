/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{d as e}from"./chunk-ce917615.js";const n="$ionRelocated";function o(t,e,o,i=0){if(t[n]!==o){if(e.value,o){!function(t,e){const n=t.parentElement,o=t.ownerDocument;if(t&&n){const i=t.offsetTop,r=t.offsetLeft,s=t.offsetWidth,c=t.offsetHeight,a=o.createElement("div"),l=a.style;a.classList.add(...Array.from(t.classList)),a.classList.add("cloned-input"),a.setAttribute("aria-hidden","true"),l.pointerEvents="none",l.position="absolute",l.top=i+"px",l.left=r+"px",l.width=s+"px",l.height=c+"px";const u=o.createElement("input");u.classList.add(...Array.from(e.classList)),u.value=e.value,u.type=e.type,u.placeholder=e.placeholder,u.tabIndex=-1,a.appendChild(u),n.appendChild(a),t.style.pointerEvents="none"}e.style.transform="scale(0)"}(t,e);const n="rtl"===t.ownerDocument.dir?9999:-9999;e.style.transform=`translate3d(${n}px,${i}px,0)`}else!function(t,e){if(t&&t.parentElement){const e=t.parentElement.querySelectorAll(".cloned-input");for(let t=0;t<e.length;t++)e[t].remove();t.style.pointerEvents=""}e.style.transform="",e.style.opacity=""}(t,e);t[n]=o}}function i(t){return t===t.ownerDocument.activeElement}const r=["INPUT","TEXTAREA","ION-INPUT","ION-TEXTAREA"],s=.3;function c(t,n,r,c){let a;const l=t=>{a=e(t),t.type},u=l=>{if(l.type,!a)return;const u=e(l);(function(t,e,n){if(e&&n){const t=e.x-n.x,o=e.y-n.y;return t*t+o*o>36}return!1})(0,a,u)||i(n)||(l.preventDefault(),l.stopPropagation(),function(t,e,n,i){const r=function(t,e,n){return e?function(t,e,n,o){const i=t.top,r=t.bottom,c=e.top+10,a=Math.min(e.bottom,o-n)/2-r,l=c-i,u=Math.round(a<0?-a:l>0?-l:0),d=Math.abs(u)/s;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,d)),scrollPadding:n,inputSafeY:4-(i-c)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight):{scrollAmount:0,scrollPadding:0,scrollDuration:0,inputSafeY:0}}(t,n,i);Math.abs(r.scrollAmount)<4?e.focus():(o(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration,()=>{o(t,e,!1,r.inputSafeY),e.focus()}))}(t,n,r,c))};return t.addEventListener("touchstart",l,!0),t.addEventListener("touchend",u,!0),()=>{t.removeEventListener("touchstart",l,!0),t.removeEventListener("touchend",u,!0)}}const a="$ionPaddingTimer";function l(t,e){if("INPUT"!==t.tagName)return;if(t.parentElement&&"ION-INPUT"===t.parentElement.tagName)return;const n=t.closest(".scroll-inner");if(!n)return;const o=n[a];o&&clearTimeout(o),e>0?n.style.paddingBottom=e+"px":n[a]=setTimeout(()=>{n.style.paddingBottom=""},120)}const u=!0,d=!0;function f(t,e){const n=e.getNumber("keyboardHeight",290),s=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",!0),f=e.getBoolean("inputBlurring",!0),p=e.getBoolean("scrollPadding",!0),m=new WeakMap,E=new WeakMap;function v(t){const e=t.querySelector("input"),r=t.closest("ion-scroll"),l=t.closest("ion-content");if(e){if(r&&a&&!m.has(t)){const n=function(t,e,n){if(!n||!e)return()=>{};const r=n=>{i(e)&&o(t,e,n)},s=()=>o(t,e,!1),c=()=>r(!0),a=()=>r(!1);return n&&n.addEventListener("ionScrollStart",c),n&&n.addEventListener("ionScrollEnd",a),e.addEventListener("blur",s),()=>{n.removeEventListener("ionScrollStart",c),n.removeEventListener("ionScrollEnd",a),e.addEventListener("ionBlur",s)}}(t,e,r);m.set(t,n)}if(l&&s&&!E.has(t)){const o=c(t,e,l,n);E.set(t,o)}}}f&&u&&function(t){let e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)return void(n=!1);const i=t.activeElement;if(!i)return;if(-1===r.indexOf(i.tagName))return;const s=o.target;s!==i&&(r.indexOf(s.tagName)>=0||s.classList.contains("input-cover")||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)}(t),p&&d&&function(t,e){t.addEventListener("focusin",function(t){l(t.target,e)}),t.addEventListener("focusout",function(t){l(t.target,0)})}(t,n);const g=Array.from(t.querySelectorAll("ion-input"));for(const t of g)v(t);t.body.addEventListener("ionInputDidLoad",t=>{v(t.target)}),t.body.addEventListener("ionInputDidUnload",t=>{!function(t){if(a){const e=m.get(t);e&&e(),m.delete(t)}if(s){const e=E.get(t);e&&e(),E.delete(t)}}(t.target)})}export{f as startInputShims};