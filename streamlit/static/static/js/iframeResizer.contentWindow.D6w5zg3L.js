import{g as it}from"./index.Phesr84n.js";function ot(k,u){for(var p=0;p<u.length;p++){const O=u[p];if(typeof O!="string"&&!Array.isArray(O)){for(const E in O)if(E!=="default"&&!(E in k)){const S=Object.getOwnPropertyDescriptor(O,E);S&&Object.defineProperty(k,E,S.get?S:{enumerable:!0,get:()=>O[E]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var Re={exports:{}};(function(k){(function(u){if(typeof window>"u")return;var p=!0,O=10,E="",S=0,D="",_=null,oe="",W=!1,Ne={resize:1,click:1},V=128,re=!0,P=1,U="bodyOffset",h=U,ae=!0,se="",R={},I=32,ce=null,J=!1,X=!1,H="[iFrameSizer]",ue=H.length,B="",le={max:1,min:1,bodyScroll:1,documentElementScroll:1},Y="child",fe=window.parent,A="*",K=0,j=!1,de=null,N=16,x=1,me="scroll",v=me,xe=window,Q=function(){T("onMessage function not defined")},G=function(){},Z=function(){},$={height:function(){return T("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return T("Custom width calculation function not defined"),document.body.scrollWidth}},ee={},ge=!1;function he(){}try{var pe=Object.create({},{passive:{get:function(){ge=!0}}});window.addEventListener("test",he,pe),window.removeEventListener("test",he,pe)}catch{}function C(e,t,n,i){e.addEventListener(t,n,ge?i||{}:!1)}function De(e,t,n){e.removeEventListener(t,n,!1)}function ve(e){return e.charAt(0).toUpperCase()+e.slice(1)}function We(e){var t,n,i,a=null,f=0,m=function(){f=Date.now(),a=null,i=e.apply(t,n),a||(t=n=null)};return function(){var d=Date.now();f||(f=d);var s=N-(d-f);return t=this,n=arguments,s<=0||s>N?(a&&(clearTimeout(a),a=null),f=d,i=e.apply(t,n),a||(t=n=null)):a||(a=setTimeout(m,s)),i}}function ye(e){return H+"["+B+"] "+e}function o(e){J&&typeof window.console=="object"&&console.log(ye(e))}function T(e){typeof window.console=="object"&&console.warn(ye(e))}function He(){Be(),o("Initialising iFrame ("+window.location.href+")"),qe(),Ve(),te("background",E),te("padding",oe),Ye(),Te(),Me(),Ue(),Ge(),Qe(),Ee(),R=Ke(),L("init","Init message from host page"),G()}function Be(){function e(n){return n==="true"}var t=se.slice(ue).split(":");B=t[0],S=u===t[1]?S:Number(t[1]),W=u===t[2]?W:e(t[2]),J=u===t[3]?J:e(t[3]),I=u===t[4]?I:Number(t[4]),p=u===t[6]?p:e(t[6]),D=t[7],h=u===t[8]?h:t[8],E=t[9],oe=t[10],K=u===t[11]?K:Number(t[11]),R.enable=u===t[12]?!1:e(t[12]),Y=u===t[13]?Y:t[13],v=u===t[14]?v:t[14],X=u===t[15]?X:e(t[15])}function je(e){var t=e.split("Callback");if(t.length===2){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],T("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function qe(){function e(){var n=window.iFrameResizer;o("Reading data from page: "+JSON.stringify(n)),Object.keys(n).forEach(je,n),Q="onMessage"in n?n.onMessage:Q,G="onReady"in n?n.onReady:G,A="targetOrigin"in n?n.targetOrigin:A,h="heightCalculationMethod"in n?n.heightCalculationMethod:h,v="widthCalculationMethod"in n?n.widthCalculationMethod:v}function t(n,i){return typeof n=="function"&&(o("Setup custom "+i+"CalcMethod"),$[i]=n,n="custom"),n}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),h=t(h,"height"),v=t(v,"width")),o("TargetOrigin for parent set to: "+A)}function _e(e,t){return t.indexOf("-")!==-1&&(T("Negative CSS value ignored for "+e),t=""),t}function te(e,t){u!==t&&t!==""&&t!=="null"&&(document.body.style[e]=t,o("Body "+e+' set to "'+t+'"'))}function Ve(){u===D&&(D=S+"px"),te("margin",_e("margin",D))}function Ue(){document.documentElement.style.height="",document.body.style.height="",o('HTML & body height set to "auto"')}function g(e){var t={add:function(n){function i(){L(e.eventName,e.eventType)}ee[n]=i,C(window,n,i,{passive:!0})},remove:function(n){var i=ee[n];delete ee[n],De(window,n,i)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),o(ve(e.method)+" event listener: "+e.eventType)}function we(e){g({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),g({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),g({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),g({method:e,eventType:"Input",eventName:"input"}),g({method:e,eventType:"Mouse Up",eventName:"mouseup"}),g({method:e,eventType:"Mouse Down",eventName:"mousedown"}),g({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),g({method:e,eventType:"Print",eventNames:["afterprint","beforeprint"]}),g({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),g({method:e,eventType:"Touch Start",eventName:"touchstart"}),g({method:e,eventType:"Touch End",eventName:"touchend"}),g({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),g({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),g({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),g({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),Y==="child"&&g({method:e,eventType:"IFrame Resized",eventName:"resize"})}function be(e,t,n,i){return t!==e&&(e in n||(T(e+" is not a valid option for "+i+"CalculationMethod."),e=t),o(i+' calculation method set to "'+e+'"')),e}function Te(){h=be(h,U,M,"height")}function Me(){v=be(v,me,F,"width")}function Ee(){p===!0?(we("add"),$e()):o("Auto Resize disabled")}function Je(){_!==null&&_.disconnect()}function Xe(){we("remove"),Je(),clearInterval(ce)}function Ye(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e)}function Ke(){function e(){return{x:window.pageXOffset===u?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===u?document.documentElement.scrollTop:window.pageYOffset}}function t(s){var l=s.getBoundingClientRect(),c=e();return{x:parseInt(l.left,10)+parseInt(c.x,10),y:parseInt(l.top,10)+parseInt(c.y,10)}}function n(s){function l(b){var z=t(b);o("Moving to in page link (#"+c+") at x: "+z.x+" y: "+z.y),y(z.y,z.x,"scrollToOffset")}var c=s.split("#")[1]||s,r=decodeURIComponent(c),w=document.getElementById(r)||document.getElementsByName(r)[0];u===w?(o("In page link (#"+c+") not found in iFrame, so sending to parent"),y(0,0,"inPageLink","#"+c)):l(w)}function i(){var s=window.location.hash,l=window.location.href;s!==""&&s!=="#"&&n(l)}function a(){function s(l){function c(r){r.preventDefault(),n(this.getAttribute("href"))}l.getAttribute("href")!=="#"&&C(l,"click",c)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),s)}function f(){C(window,"hashchange",i)}function m(){setTimeout(i,V)}function d(){Array.prototype.forEach&&document.querySelectorAll?(o("Setting up location.hash handlers"),a(),f(),m()):T("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return R.enable?d():o("In page linking not enabled"),{findTarget:n}}function Qe(){if(X!==!0)return;function e(n){y(0,0,n.type,n.screenY+":"+n.screenX)}function t(n,i){o("Add event listener: "+i),C(window.document,n,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}function Ge(){o("Enable public methods"),xe.parentIFrame={autoResize:function(t){return t===!0&&p===!1?(p=!0,Ee()):t===!1&&p===!0&&(p=!1,Xe()),y(0,0,"autoResize",JSON.stringify(p)),p},close:function(){y(0,0,"close")},getId:function(){return B},getPageInfo:function(t){typeof t=="function"?(Z=t,y(0,0,"pageInfo")):(Z=function(){},y(0,0,"pageInfoStop"))},moveToAnchor:function(t){R.findTarget(t)},reset:function(){ze("parentIFrame.reset")},scrollTo:function(t,n){y(n,t,"scrollTo")},scrollToOffset:function(t,n){y(n,t,"scrollToOffset")},sendMessage:function(t,n){y(0,0,"message",JSON.stringify(t),n)},setHeightCalculationMethod:function(t){h=t,Te()},setWidthCalculationMethod:function(t){v=t,Me()},setTargetOrigin:function(t){o("Set targetOrigin: "+t),A=t},size:function(t,n){var i=""+(t||"")+(n?","+n:"");L("size","parentIFrame.size("+i+")",t,n)}}}function Oe(){I!==0&&(o("setInterval: "+I+"ms"),ce=setInterval(function(){L("interval","setInterval: "+I)},Math.abs(I)))}function Ze(){function e(r){function w(b){b.complete===!1&&(o("Attach listeners to "+b.src),b.addEventListener("load",a,!1),b.addEventListener("error",f,!1),s.push(b))}r.type==="attributes"&&r.attributeName==="src"?w(r.target):r.type==="childList"&&Array.prototype.forEach.call(r.target.querySelectorAll("img"),w)}function t(r){s.splice(s.indexOf(r),1)}function n(r){o("Remove listeners from "+r.src),r.removeEventListener("load",a,!1),r.removeEventListener("error",f,!1),t(r)}function i(r,w,b){n(r.target),L(w,b+": "+r.target.src)}function a(r){i(r,"imageLoad","Image loaded")}function f(r){i(r,"imageLoadFailed","Image load failed")}function m(r){L("mutationObserver","mutationObserver: "+r[0].target+" "+r[0].type),r.forEach(e)}function d(){var r=document.querySelector("body"),w={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return c=new l(m),o("Create body MutationObserver"),c.observe(r,w),c}var s=[],l=window.MutationObserver||window.WebKitMutationObserver,c=d();return{disconnect:function(){"disconnect"in c&&(o("Disconnect body MutationObserver"),c.disconnect(),s.forEach(n))}}}function $e(){var e=0>I;window.MutationObserver||window.WebKitMutationObserver?e?Oe():_=Ze():(o("MutationObserver not supported in this browser!"),Oe())}function ne(e,t){var n=0;return t=t||document.body,n=document.defaultView.getComputedStyle(t,null),n=n===null?0:n[e],parseInt(n,O)}function et(e){e>N/2&&(N=2*e,o("Event throttle increased to "+N+"ms"))}function ie(e,t){for(var n=t.length,i=0,a=0,f=ve(e),m=Date.now(),d=0;d<n;d++)i=t[d].getBoundingClientRect()[e]+ne("margin"+f,t[d]),i>a&&(a=i);return m=Date.now()-m,o("Parsed "+n+" HTML elements"),o("Element position calculated in "+m+"ms"),et(m),a}function q(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function Se(e,t){function n(){return T("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")}var i=document.querySelectorAll("["+t+"]");return i.length===0&&n(),ie(e,i)}function Ie(){return document.querySelectorAll("body *")}var M={bodyOffset:function(){return document.body.offsetHeight+ne("marginTop")+ne("marginBottom")},offset:function(){return M.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return $.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,q(M))},min:function(){return Math.min.apply(null,q(M))},grow:function(){return M.max()},lowestElement:function(){return Math.max(M.bodyOffset()||M.documentElementOffset(),ie("bottom",Ie()))},taggedElement:function(){return Se("bottom","data-iframe-height")}},F={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return $.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(F.bodyScroll(),F.documentElementScroll())},max:function(){return Math.max.apply(null,q(F))},min:function(){return Math.min.apply(null,q(F))},rightMostElement:function(){return ie("right",Ie())},taggedElement:function(){return Se("right","data-iframe-width")}};function Fe(e,t,n,i){function a(){P=c,x=r,y(P,x,e)}function f(){function w(b,z){var nt=Math.abs(b-z)<=K;return!nt}return c=u===n?M[h]():n,r=u===i?F[v]():i,w(P,c)||W&&w(x,r)}function m(){return!(e in{init:1,interval:1,size:1})}function d(){return h in le||W&&v in le}function s(){o("No change in size detected")}function l(){m()&&d()?ze(t):e in{interval:1}||s()}var c,r;f()||e==="init"?(Le(),a()):l()}var tt=We(Fe);function L(e,t,n,i){function a(){e in{reset:1,resetPage:1,init:1}||o("Trigger event: "+t)}function f(){return j&&e in Ne}f()?o("Trigger event cancelled: "+e):(a(),e==="init"?Fe(e,t,n,i):tt(e,t,n,i))}function Le(){j||(j=!0,o("Trigger event lock on")),clearTimeout(de),de=setTimeout(function(){j=!1,o("Trigger event lock off"),o("--")},V)}function Ce(e){P=M[h](),x=F[v](),y(P,x,e)}function ze(e){var t=h;h=U,o("Reset trigger event: "+e),Le(),Ce("reset"),h=t}function y(e,t,n,i,a){function f(){u===a?a=A:o("Message targetOrigin: "+a)}function m(){var d=e+":"+t,s=B+":"+d+":"+n+(u===i?"":":"+i);o("Sending message to host page ("+s+")"),fe.postMessage(H+s,a)}f(),m()}function ke(e){var t={init:function(){se=e.data,fe=e.source,He(),re=!1,setTimeout(function(){ae=!1},V)},reset:function(){ae?o("Page reset ignored by init"):(o("Page size reset by host page"),Ce("resetPage"))},resize:function(){L("resizeParent","Parent window requested size check")},moveToAnchor:function(){R.findTarget(a())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var c=a();o("PageInfoFromParent called from parent: "+c),Z(JSON.parse(c)),o(" --")},message:function(){var c=a();o("onMessage called from parent: "+c),Q(JSON.parse(c)),o(" --")}};function n(){return H===(""+e.data).slice(0,ue)}function i(){return e.data.split("]")[1].split(":")[0]}function a(){return e.data.slice(e.data.indexOf(":")+1)}function f(){return!k.exports&&"iFrameResize"in window||window.jQuery!==u&&"iFrameResize"in window.jQuery.prototype}function m(){return e.data.split(":")[2]in{true:1,false:1}}function d(){var l=i();l in t?t[l]():!f()&&!m()&&T("Unexpected message ("+e.data+")")}function s(){re===!1?d():m()?t.init():o('Ignored message of type "'+i()+'". Received before initialization.')}n()&&s()}function Pe(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}"iframeResizer"in window||(window.iframeChildListener=function(e){ke({data:e,sameDomian:!0})},C(window,"message",ke),C(window,"readystatechange",Pe),Pe())})()})(Re);var Ae=Re.exports;const rt=it(Ae),st=ot({__proto__:null,default:rt},[Ae]);export{st as i};