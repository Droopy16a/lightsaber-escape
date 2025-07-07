(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Rv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Jf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function TS(){if(h_)return Ro;h_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var d_;function bS(){return d_||(d_=1,Jf.exports=TS()),Jf.exports}var tn=bS(),$f={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function AS(){if(p_)return ie;p_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(U,J,St){this.props=U,this.context=J,this.refs=T,this.updater=St||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(U,J,St){this.props=U,this.context=J,this.refs=T,this.updater=St||M}var w=L.prototype=new _;w.constructor=L,E(w,S.prototype),w.isPureReactComponent=!0;var N=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function I(U,J,St,yt,K,ft){return St=ft.ref,{$$typeof:s,type:U,key:J,ref:St!==void 0?St:null,props:ft}}function Y(U,J){return I(U.type,J,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function R(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(St){return J[St]})}var H=/\/+/g;function st(U,J){return typeof U=="object"&&U!==null&&U.key!=null?R(""+U.key):J.toString(36)}function at(){}function ct(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(at,at):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,J,St,yt,K){var ft=typeof U;(ft==="undefined"||ft==="boolean")&&(U=null);var vt=!1;if(U===null)vt=!0;else switch(ft){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(U.$$typeof){case s:case t:vt=!0;break;case g:return vt=U._init,lt(vt(U._payload),J,St,yt,K)}}if(vt)return K=K(U),vt=yt===""?"."+st(U,0):yt,N(K)?(St="",vt!=null&&(St=vt.replace(H,"$&/")+"/"),lt(K,J,St,"",function(Wt){return Wt})):K!=null&&(D(K)&&(K=Y(K,St+(K.key==null||U&&U.key===K.key?"":(""+K.key).replace(H,"$&/")+"/")+vt)),J.push(K)),1;vt=0;var wt=yt===""?".":yt+":";if(N(U))for(var Lt=0;Lt<U.length;Lt++)yt=U[Lt],ft=wt+st(yt,Lt),vt+=lt(yt,J,St,ft,K);else if(Lt=v(U),typeof Lt=="function")for(U=Lt.call(U),Lt=0;!(yt=U.next()).done;)yt=yt.value,ft=wt+st(yt,Lt++),vt+=lt(yt,J,St,ft,K);else if(ft==="object"){if(typeof U.then=="function")return lt(ct(U),J,St,yt,K);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return vt}function O(U,J,St){if(U==null)return U;var yt=[],K=0;return lt(U,yt,"","",function(ft){return J.call(St,ft,K++)}),yt}function Z(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(St){(U._status===0||U._status===-1)&&(U._status=1,U._result=St)},function(St){(U._status===0||U._status===-1)&&(U._status=2,U._result=St)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var j=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Et(){}return ie.Children={map:O,forEach:function(U,J,St){O(U,function(){J.apply(this,arguments)},St)},count:function(U){var J=0;return O(U,function(){J++}),J},toArray:function(U){return O(U,function(J){return J})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ie.Component=S,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=L,ie.StrictMode=r,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ie.__COMPILER_RUNTIME={__proto__:null,c:function(U){return k.H.useMemoCache(U)}},ie.cache=function(U){return function(){return U.apply(null,arguments)}},ie.cloneElement=function(U,J,St){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),K=U.key,ft=void 0;if(J!=null)for(vt in J.ref!==void 0&&(ft=void 0),J.key!==void 0&&(K=""+J.key),J)!B.call(J,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&J.ref===void 0||(yt[vt]=J[vt]);var vt=arguments.length-2;if(vt===1)yt.children=St;else if(1<vt){for(var wt=Array(vt),Lt=0;Lt<vt;Lt++)wt[Lt]=arguments[Lt+2];yt.children=wt}return I(U.type,K,void 0,void 0,ft,yt)},ie.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ie.createElement=function(U,J,St){var yt,K={},ft=null;if(J!=null)for(yt in J.key!==void 0&&(ft=""+J.key),J)B.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(K[yt]=J[yt]);var vt=arguments.length-2;if(vt===1)K.children=St;else if(1<vt){for(var wt=Array(vt),Lt=0;Lt<vt;Lt++)wt[Lt]=arguments[Lt+2];K.children=wt}if(U&&U.defaultProps)for(yt in vt=U.defaultProps,vt)K[yt]===void 0&&(K[yt]=vt[yt]);return I(U,ft,void 0,void 0,null,K)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(U){return{$$typeof:d,render:U}},ie.isValidElement=D,ie.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},ie.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},ie.startTransition=function(U){var J=k.T,St={};k.T=St;try{var yt=U(),K=k.S;K!==null&&K(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,j)}catch(ft){j(ft)}finally{k.T=J}},ie.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},ie.use=function(U){return k.H.use(U)},ie.useActionState=function(U,J,St){return k.H.useActionState(U,J,St)},ie.useCallback=function(U,J){return k.H.useCallback(U,J)},ie.useContext=function(U){return k.H.useContext(U)},ie.useDebugValue=function(){},ie.useDeferredValue=function(U,J){return k.H.useDeferredValue(U,J)},ie.useEffect=function(U,J,St){var yt=k.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,J)},ie.useId=function(){return k.H.useId()},ie.useImperativeHandle=function(U,J,St){return k.H.useImperativeHandle(U,J,St)},ie.useInsertionEffect=function(U,J){return k.H.useInsertionEffect(U,J)},ie.useLayoutEffect=function(U,J){return k.H.useLayoutEffect(U,J)},ie.useMemo=function(U,J){return k.H.useMemo(U,J)},ie.useOptimistic=function(U,J){return k.H.useOptimistic(U,J)},ie.useReducer=function(U,J,St){return k.H.useReducer(U,J,St)},ie.useRef=function(U){return k.H.useRef(U)},ie.useState=function(U){return k.H.useState(U)},ie.useSyncExternalStore=function(U,J,St){return k.H.useSyncExternalStore(U,J,St)},ie.useTransition=function(){return k.H.useTransition()},ie.version="19.1.0",ie}var m_;function xd(){return m_||(m_=1,$f.exports=AS()),$f.exports}var ht=xd();const RS=Rv(ht);var th={exports:{}},Co={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function CS(){return g_||(g_=1,function(s){function t(O,Z){var j=O.length;O.push(Z);t:for(;0<j;){var Et=j-1>>>1,U=O[Et];if(0<l(U,Z))O[Et]=Z,O[j]=U,j=Et;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Z=O[0],j=O.pop();if(j!==Z){O[0]=j;t:for(var Et=0,U=O.length,J=U>>>1;Et<J;){var St=2*(Et+1)-1,yt=O[St],K=St+1,ft=O[K];if(0>l(yt,j))K<U&&0>l(ft,yt)?(O[Et]=ft,O[K]=j,Et=K):(O[Et]=yt,O[St]=j,Et=St);else if(K<U&&0>l(ft,j))O[Et]=ft,O[K]=j,Et=K;else break t}}return Z}function l(O,Z){var j=O.sortIndex-Z.sortIndex;return j!==0?j:O.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,M=!1,E=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=O)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function k(O){if(T=!1,N(O),!E)if(i(m)!==null)E=!0,B||(B=!0,st());else{var Z=i(p);Z!==null&&lt(k,Z.startTime-O)}}var B=!1,I=-1,Y=5,D=-1;function R(){return S?!0:!(s.unstable_now()-D<Y)}function H(){if(S=!1,B){var O=s.unstable_now();D=O;var Z=!0;try{t:{E=!1,T&&(T=!1,L(I),I=-1),M=!0;var j=v;try{e:{for(N(O),x=i(m);x!==null&&!(x.expirationTime>O&&R());){var Et=x.callback;if(typeof Et=="function"){x.callback=null,v=x.priorityLevel;var U=Et(x.expirationTime<=O);if(O=s.unstable_now(),typeof U=="function"){x.callback=U,N(O),Z=!0;break e}x===i(m)&&r(m),N(O)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var J=i(p);J!==null&&lt(k,J.startTime-O),Z=!1}}break t}finally{x=null,v=j,M=!1}Z=void 0}}finally{Z?st():B=!1}}}var st;if(typeof w=="function")st=function(){w(H)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ct=at.port2;at.port1.onmessage=H,st=function(){ct.postMessage(null)}}else st=function(){_(H,0)};function lt(O,Z){I=_(function(){O(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(O){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var j=v;v=Z;try{return O()}finally{v=j}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=v;v=O;try{return Z()}finally{v=j}},s.unstable_scheduleCallback=function(O,Z,j){var Et=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Et+j:Et):j=Et,O){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=j+U,O={id:g++,callback:Z,priorityLevel:O,startTime:j,expirationTime:U,sortIndex:-1},j>Et?(O.sortIndex=j,t(p,O),i(m)===null&&O===i(p)&&(T?(L(I),I=-1):T=!0,lt(k,j-Et))):(O.sortIndex=U,t(m,O),E||M||(E=!0,B||(B=!0,st()))),O},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(O){var Z=v;return function(){var j=v;v=Z;try{return O.apply(this,arguments)}finally{v=j}}}}(nh)),nh}var __;function wS(){return __||(__=1,eh.exports=CS()),eh.exports}var ih={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function DS(){if(v_)return Sn;v_=1;var s=xd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Sn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Sn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Sn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Sn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Sn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Sn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Sn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Sn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Sn.requestFormReset=function(m){r.d.r(m)},Sn.unstable_batchedUpdates=function(m,p){return m(p)},Sn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Sn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Sn.version="19.1.0",Sn}var x_;function US(){if(x_)return ih.exports;x_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=DS(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function LS(){if(S_)return Co;S_=1;var s=wS(),t=xd(),i=US();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,o=f;break}if(b===o){y=!0,o=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,o=c;break}if(b===o){y=!0,o=f,a=c;break}b=b.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),w=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var at=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===at?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case k:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case w:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var lt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Et=[],U=-1;function J(e){return{current:e}}function St(e){0>U||(e.current=Et[U],Et[U]=null,U--)}function yt(e,n){U++,Et[U]=e.current,e.current=n}var K=J(null),ft=J(null),vt=J(null),wt=J(null);function Lt(e,n){switch(yt(vt,n),yt(ft,e),yt(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Hg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Hg(n),e=Gg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(K),yt(K,e)}function Wt(){St(K),St(ft),St(vt)}function ae(e){e.memoizedState!==null&&yt(wt,e);var n=K.current,a=Gg(n,e.type);n!==a&&(yt(ft,e),yt(K,a))}function Le(e){ft.current===e&&(St(K),St(ft)),wt.current===e&&(St(wt),Mo._currentValue=j)}var F=Object.prototype.hasOwnProperty,He=s.unstable_scheduleCallback,ve=s.unstable_cancelCallback,Ee=s.unstable_shouldYield,kt=s.unstable_requestPaint,ye=s.unstable_now,te=s.unstable_getCurrentPriorityLevel,ee=s.unstable_ImmediatePriority,P=s.unstable_UserBlockingPriority,A=s.unstable_NormalPriority,ot=s.unstable_LowPriority,_t=s.unstable_IdlePriority,Mt=s.log,xt=s.unstable_setDisableYieldValue,Vt=null,At=null;function Ut(e){if(typeof Mt=="function"&&xt(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Vt,e)}catch{}}var Xt=Math.clz32?Math.clz32:he,Rt=Math.log,Pt=Math.LN2;function he(e){return e>>>=0,e===0?32:31-(Rt(e)/Pt|0)|0}var jt=256,Ot=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ne(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=qt(o):(y&=b,y!==0?c=qt(y):a||(a=b&~e,a!==0&&(c=qt(a))))):(b=o&~f,b!==0?c=qt(b):y!==0?c=qt(y):a||(a=o&~e,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function X(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function pt(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function gt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ct(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qt(e,n,a,o,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(a=y&~a;0<a;){var ut=31-Xt(a),mt=1<<ut;b[ut]=0,z[ut]=-1;var et=$[ut];if(et!==null)for($[ut]=null,ut=0;ut<et.length;ut++){var it=et[ut];it!==null&&(it.lane&=-536870913)}a&=~mt}o!==0&&de(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function de(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Xt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Xe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Xt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Qe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qn(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:s_(e.type))}function Yn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var ii=Math.random().toString(36).slice(2),Ge="__reactFiber$"+ii,fn="__reactProps$"+ii,bi="__reactContainer$"+ii,yr="__reactEvents$"+ii,Mr="__reactListeners$"+ii,Ko="__reactHandles$"+ii,Ha="__reactResources$"+ii,ea="__reactMarker$"+ii;function Er(e){delete e[Ge],delete e[fn],delete e[yr],delete e[Mr],delete e[Ko]}function na(e){var n=e[Ge];if(n)return n;for(var a=e.parentNode;a;){if(n=a[bi]||a[Ge]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Wg(e);e!==null;){if(a=e[Ge])return a;e=Wg(e)}return n}e=a,a=e.parentNode}return null}function ia(e){if(e=e[Ge]||e[bi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ga(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function C(e){var n=e[Ha];return n||(n=e[Ha]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function V(e){e[ea]=!0}var nt=new Set,rt={};function q(e,n){Tt(e,n),Tt(e+"Capture",n)}function Tt(e,n){for(rt[e]=n,e=0;e<n.length;e++)nt.add(n[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zt={},It={};function Jt(e){return F.call(It,e)?!0:F.call(zt,e)?!1:Nt.test(e)?It[e]=!0:(zt[e]=!0,!1)}function Yt(e,n,a){if(Jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ft(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function re(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Oe,ze;function en(e){if(Oe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Oe=n&&n[1]||"",ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oe+e+ze}var me=!1;function Ht(e,n){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var et=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){et=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){et=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var z=y.split(`
`),$=b.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===$.length)for(o=z.length-1,c=$.length-1;1<=o&&0<=c&&z[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==$[c]){var ut=`
`+z[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?en(a):""}function sn(e){switch(e.tag){case 26:case 27:case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 15:return Ht(e.type,!1);case 11:return Ht(e.type.render,!1);case 1:return Ht(e.type,!0);case 31:return en("Activity");default:return""}}function xe(e){try{var n="";do n+=sn(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ai(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function En(e){var n=Ai(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function aa(e){e._valueTracker||(e._valueTracker=En(e))}function We(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ai(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ns=/[\n"\\]/g;function Ie(e){return e.replace(Ns,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Va(e,n,a,o,c,f,y,b){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ve(n)):e.value!==""+Ve(n)&&(e.value=""+Ve(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Tr(e,y,Ve(n)):a!=null?Tr(e,y,Ve(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ve(b):e.removeAttribute("name")}function Qo(e,n,a,o,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Ve(a):"",n=n!=null?""+Ve(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function Tr(e,n,a){n==="number"&&Pn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function br(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ve(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Bd(e,n,a){if(n!=null&&(n=""+Ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ve(a):""}function Fd(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ve(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ar(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var y0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||y0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Hd(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Hd(e,f,n[f])}function Ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),E0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return E0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Qu=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,Cr=null;function Vd(e){var n=ia(e);if(n&&(e=n.stateNode)){var a=e[fn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Va(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[fn]||null;if(!c)throw Error(r(90));Va(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&We(o)}break t;case"textarea":Bd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&br(e,!!a.multiple,n,!1)}}}var $u=!1;function kd(e,n,a){if($u)return e(n,a);$u=!0;try{var o=e(n);return o}finally{if($u=!1,(Rr!==null||Cr!==null)&&(Il(),Rr&&(n=Rr,e=Cr,Cr=Rr=null,Vd(n),e)))for(n=0;n<e.length;n++)Vd(e[n])}}function Os(e,n){var a=e.stateNode;if(a===null)return null;var o=a[fn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=!1;if(Ri)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){tc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{tc=!1}var ra=null,ec=null,$o=null;function Xd(){if($o)return $o;var e,n=ec,a=n.length,o,c="value"in ra?ra.value:ra.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return $o=c.slice(e,1<o?1-o:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Wd(){return!1}function An(e){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Wd,this.isPropagationStopped=Wd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=An(ka),zs=g({},ka,{view:0,detail:0}),T0=An(zs),nc,ic,Is,il=g({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(nc=e.screenX-Is.screenX,ic=e.screenY-Is.screenY):ic=nc=0,Is=e),nc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),qd=An(il),b0=g({},il,{dataTransfer:0}),A0=An(b0),R0=g({},zs,{relatedTarget:0}),ac=An(R0),C0=g({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=An(C0),D0=g({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U0=An(D0),L0=g({},ka,{data:0}),Yd=An(L0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=P0[e])?!!n[e]:!1}function rc(){return z0}var I0=g({},zs,{key:function(e){if(e.key){var n=N0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B0=An(I0),F0=g({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=An(F0),H0=g({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),G0=An(H0),V0=g({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=An(V0),X0=g({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=An(X0),q0=g({},ka,{newState:0,oldState:0}),Y0=An(q0),Z0=[9,13,27,32],sc=Ri&&"CompositionEvent"in window,Bs=null;Ri&&"documentMode"in document&&(Bs=document.documentMode);var j0=Ri&&"TextEvent"in window&&!Bs,jd=Ri&&(!sc||Bs&&8<Bs&&11>=Bs),Kd=" ",Qd=!1;function Jd(e,n){switch(e){case"keyup":return Z0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function K0(e,n){switch(e){case"compositionend":return $d(n);case"keypress":return n.which!==32?null:(Qd=!0,Kd);case"textInput":return e=n.data,e===Kd&&Qd?null:e;default:return null}}function Q0(e,n){if(wr)return e==="compositionend"||!sc&&Jd(e,n)?(e=Xd(),$o=ec=ra=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jd&&n.locale!=="ko"?null:n.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!J0[e.type]:n==="textarea"}function ep(e,n,a,o){Rr?Cr?Cr.push(o):Cr=[o]:Rr=o,n=kl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Fs=null,Hs=null;function $0(e){Pg(e,0)}function al(e){var n=Ga(e);if(We(n))return e}function np(e,n){if(e==="change")return n}var ip=!1;if(Ri){var oc;if(Ri){var lc="oninput"in document;if(!lc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),lc=typeof ap.oninput=="function"}oc=lc}else oc=!1;ip=oc&&(!document.documentMode||9<document.documentMode)}function rp(){Fs&&(Fs.detachEvent("onpropertychange",sp),Hs=Fs=null)}function sp(e){if(e.propertyName==="value"&&al(Hs)){var n=[];ep(n,Hs,e,Ju(e)),kd($0,n)}}function tx(e,n,a){e==="focusin"?(rp(),Fs=n,Hs=a,Fs.attachEvent("onpropertychange",sp)):e==="focusout"&&rp()}function ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Hs)}function nx(e,n){if(e==="click")return al(n)}function ix(e,n){if(e==="input"||e==="change")return al(n)}function ax(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zn=typeof Object.is=="function"?Object.is:ax;function Gs(e,n){if(zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!F.call(n,c)||!zn(e[c],n[c]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lp(e,n){var a=op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=op(a)}}function up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Pn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Pn(e.document)}return n}function uc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var rx=Ri&&"documentMode"in document&&11>=document.documentMode,Dr=null,cc=null,Vs=null,fc=!1;function fp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Dr==null||Dr!==Pn(o)||(o=Dr,"selectionStart"in o&&uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Vs&&Gs(Vs,o)||(Vs=o,o=kl(cc,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Dr)))}function Xa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ur={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},hc={},hp={};Ri&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Wa(e){if(hc[e])return hc[e];if(!Ur[e])return e;var n=Ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in hp)return hc[e]=n[a];return e}var dp=Wa("animationend"),pp=Wa("animationiteration"),mp=Wa("animationstart"),sx=Wa("transitionrun"),ox=Wa("transitionstart"),lx=Wa("transitioncancel"),gp=Wa("transitionend"),_p=new Map,dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dc.push("scrollEnd");function ai(e,n){_p.set(e,n),q(n,[e])}var vp=new WeakMap;function Zn(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:xe(n)},vp.set(e,n),n)}return{value:e,source:n,stack:xe(n)}}var jn=[],Lr=0,pc=0;function rl(){for(var e=Lr,n=pc=Lr=0;n<e;){var a=jn[n];jn[n++]=null;var o=jn[n];jn[n++]=null;var c=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&xp(a,c,f)}}function sl(e,n,a,o){jn[Lr++]=e,jn[Lr++]=n,jn[Lr++]=a,jn[Lr++]=o,pc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function mc(e,n,a,o){return sl(e,n,a,o),ol(e)}function Nr(e,n){return sl(e,null,null,n),ol(e)}function xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Xt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<po)throw po=0,Mf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,n,a,o){return new ux(e,n,a,o)}function gc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,n){var a=e.alternate;return a===null?(a=In(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,o,c,f){var y=0;if(o=e,typeof e=="function")gc(e)&&(y=1);else if(typeof e=="string")y=fS(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=In(31,a,n,c),e.elementType=D,e.lanes=f,e;case E:return qa(a.children,c,f,n);case T:y=8,c|=24;break;case S:return e=In(12,a,n,c|2),e.elementType=S,e.lanes=f,e;case k:return e=In(13,a,n,c),e.elementType=k,e.lanes=f,e;case B:return e=In(19,a,n,c),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case w:y=10;break t;case L:y=9;break t;case N:y=11;break t;case I:y=14;break t;case Y:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=In(y,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function qa(e,n,a,o){return e=In(7,e,o,n),e.lanes=a,e}function _c(e,n,a){return e=In(6,e,null,n),e.lanes=a,e}function vc(e,n,a){return n=In(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pr=[],zr=0,ul=null,cl=0,Kn=[],Qn=0,Ya=null,wi=1,Di="";function Za(e,n){Pr[zr++]=cl,Pr[zr++]=ul,ul=e,cl=n}function yp(e,n,a){Kn[Qn++]=wi,Kn[Qn++]=Di,Kn[Qn++]=Ya,Ya=e;var o=wi;e=Di;var c=32-Xt(o)-1;o&=~(1<<c),a+=1;var f=32-Xt(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,wi=1<<32-Xt(n)+c|a<<c|o,Di=f+e}else wi=1<<f|a<<c|o,Di=e}function xc(e){e.return!==null&&(Za(e,1),yp(e,1,0))}function Sc(e){for(;e===ul;)ul=Pr[--zr],Pr[zr]=null,cl=Pr[--zr],Pr[zr]=null;for(;e===Ya;)Ya=Kn[--Qn],Kn[Qn]=null,Di=Kn[--Qn],Kn[Qn]=null,wi=Kn[--Qn],Kn[Qn]=null}var Tn=null,Ze=null,Me=!1,ja=null,di=!1,yc=Error(r(519));function Ka(e){var n=Error(r(418,""));throw Ws(Zn(n,e)),yc}function Mp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ge]=e,n[fn]=o,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)fe(go[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),Qo(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),aa(n);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),Fd(n,o.value,o.defaultValue,o.children),aa(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Fg(n.textContent,a)?(o.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),o.onScroll!=null&&fe("scroll",n),o.onScrollEnd!=null&&fe("scrollend",n),o.onClick!=null&&(n.onclick=Xl),n=!0):n=!1,n||Ka(e)}function Ep(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function ks(e){if(e!==Tn)return!1;if(!Me)return Ep(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bf(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ka(e),Ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=si(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,ya(e.type)?(e=Vf,Vf=null,Ze=e):Ze=n):Ze=Tn?si(e.stateNode.nextSibling):null;return!0}function Xs(){Ze=Tn=null,Me=!1}function Tp(){var e=ja;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),ja=null),e}function Ws(e){ja===null?ja=[e]:ja.push(e)}var Mc=J(null),Qa=null,Ui=null;function sa(e,n,a){yt(Mc,n._currentValue),n._currentValue=a}function Li(e){e._currentValue=Mc.current,St(Mc)}function Ec(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Ec(f.return,a,e),o||(y=null);break t}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ec(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function qs(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=c.type;zn(c.pendingProps.value,y.value)||(e!==null?e.push(b):e=[b])}}else if(c===wt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}c=c.return}e!==null&&Tc(n,e,a,o),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){Qa=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return bp(Qa,e)}function hl(e,n){return Qa===null&&Ja(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ui===null){if(e===null)throw Error(r(308));Ui=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ui=Ui.next=n;return a}var cx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},fx=s.unstable_scheduleCallback,hx=s.unstable_NormalPriority,on={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new cx,data:new Map,refCount:0}}function Ys(e){e.refCount--,e.refCount===0&&fx(hx,function(){e.controller.abort()})}var Zs=null,Ac=0,Ir=0,Br=null;function dx(e,n){if(Zs===null){var a=Zs=[];Ac=0,Ir=wf(),Br={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ac++,n.then(Ap,Ap),n}function Ap(){if(--Ac===0&&Zs!==null){Br!==null&&(Br.status="fulfilled");var e=Zs;Zs=null,Ir=0,Br=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function px(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Rp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&dx(e,n),Rp!==null&&Rp(e,n)};var $a=J(null);function Rc(){var e=$a.current;return e!==null?e:Pe.pooledCache}function dl(e,n){n===null?yt($a,$a.current):yt($a,n.pool)}function Cp(){var e=Rc();return e===null?null:{parent:on._currentValue,pool:e}}var js=Error(r(460)),wp=Error(r(474)),pl=Error(r(542)),Cc={then:function(){}};function Dp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ml(){}function Up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ml,ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(ml,ml);else{if(e=Pe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw Ks=n,js}}var Ks=null;function Lp(){if(Ks===null)throw Error(r(459));var e=Ks;return Ks=null,e}function Np(e){if(e===js||e===pl)throw Error(r(483))}var oa=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ae&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ol(e),xp(e,null,a),n}return sl(e,o,n,a),ol(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xe(e,a)}}function Uc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lc=!1;function Js(){if(Lc){var e=Br;if(e!==null)throw e}}function $s(e,n,a,o){Lc=!1;var c=e.updateQueue;oa=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,$=z.next;z.next=null,y===null?f=$:y.next=$,y=z;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,b=ut.lastBaseUpdate,b!==y&&(b===null?ut.firstBaseUpdate=$:b.next=$,ut.lastBaseUpdate=z))}if(f!==null){var mt=c.baseState;y=0,ut=$=z=null,b=f;do{var et=b.lane&-536870913,it=et!==b.lane;if(it?(ge&et)===et:(o&et)===et){et!==0&&et===Ir&&(Lc=!0),ut!==null&&(ut=ut.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var $t=e,Zt=b;et=n;var Ue=a;switch(Zt.tag){case 1:if($t=Zt.payload,typeof $t=="function"){mt=$t.call(Ue,mt,et);break t}mt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=Zt.payload,et=typeof $t=="function"?$t.call(Ue,mt,et):$t,et==null)break t;mt=g({},mt,et);break t;case 2:oa=!0}}et=b.callback,et!==null&&(e.flags|=64,it&&(e.flags|=8192),it=c.callbacks,it===null?c.callbacks=[et]:it.push(et))}else it={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ut===null?($=ut=it,z=mt):ut=ut.next=it,y|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ut===null&&(z=mt),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),_a|=y,e.lanes=y,e.memoizedState=mt}}function Op(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var Fr=J(null),gl=J(0);function zp(e,n){e=Fi,yt(gl,e),yt(Fr,n),Fi=e|n.baseLanes}function Nc(){yt(gl,Fi),yt(Fr,Fr.current)}function Oc(){Fi=gl.current,St(Fr),St(gl)}var ca=0,le=null,we=null,nn=null,_l=!1,Hr=!1,tr=!1,vl=0,to=0,Gr=null,mx=0;function Je(){throw Error(r(321))}function Pc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!zn(e[a],n[a]))return!1;return!0}function zc(e,n,a,o,c,f){return ca=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?xm:Sm,tr=!1,f=a(o,c),tr=!1,Hr&&(f=Bp(n,a,o,c)),Ip(e),f}function Ip(e){O.H=Tl;var n=we!==null&&we.next!==null;if(ca=0,nn=we=le=null,_l=!1,to=0,Gr=null,n)throw Error(r(300));e===null||hn||(e=e.dependencies,e!==null&&fl(e)&&(hn=!0))}function Bp(e,n,a,o){le=e;var c=0;do{if(Hr&&(Gr=null),to=0,Hr=!1,25<=c)throw Error(r(301));if(c+=1,nn=we=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Mx,f=n(a,o)}while(Hr);return f}function gx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(we!==null?we.memoizedState:null)!==e&&(le.flags|=1024),n}function Ic(){var e=vl!==0;return vl=0,e}function Bc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fc(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ca=0,nn=we=le=null,Hr=!1,to=vl=0,Gr=null}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?le.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(we===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=nn===null?le.memoizedState:nn.next;if(n!==null)nn=n,we=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},nn===null?le.memoizedState=nn=e:nn=nn.next=e}return nn}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=to;return to+=1,Gr===null&&(Gr=[]),e=Up(Gr,e,n),n=le,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?xm:Sm),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===w)return xn(e)}throw Error(r(438,String(e)))}function Gc(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hc(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Ni(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=an();return Vc(n,we,e)}function Vc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var b=y=null,z=null,$=n,ut=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ge&mt)===mt:(ca&mt)===mt){var et=$.revertLane;if(et===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Ir&&(ut=!0);else if((ca&et)===et){$=$.next,et===Ir&&(ut=!0);continue}else mt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(b=z=mt,y=f):z=z.next=mt,le.lanes|=et,_a|=et;mt=$.action,tr&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else et={lane:mt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(b=z=et,y=f):z=z.next=et,le.lanes|=mt,_a|=mt;$=$.next}while($!==null&&$!==n);if(z===null?y=f:z.next=b,!zn(f,e.memoizedState)&&(hn=!0,ut&&(a=Br,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=z,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function kc(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);zn(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Fp(e,n,a){var o=le,c=an(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!zn((we||c).memoizedState,a);y&&(c.memoizedState=a,hn=!0),c=c.queue;var b=Vp.bind(null,o,c,e);if(no(2048,8,b,[e]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Vr(9,yl(),Gp.bind(null,o,c,a,n),null),Pe===null)throw Error(r(349));f||(ca&124)!==0||Hp(o,n,a)}return a}function Hp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Hc(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,o){n.value=a,n.getSnapshot=o,kp(n)&&Xp(e)}function Vp(e,n,a){return a(function(){kp(n)&&Xp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!zn(e,a)}catch{return!0}}function Xp(e){var n=Nr(e,2);n!==null&&Vn(n,e,2)}function Xc(e){var n=Rn();if(typeof e=="function"){var a=e;if(e=a(),tr){Ut(!0);try{a()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},n}function Wp(e,n,a,o){return e.baseState=a,Vc(e,we,typeof o=="function"?o:Ni)}function _x(e,n,a,o,c){if(El(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=O.T,y={};O.T=y;try{var b=a(c,o),z=O.S;z!==null&&z(y,b),Yp(e,n,b)}catch($){Wc(e,n,$)}finally{O.T=f}}else try{f=a(c,o),Yp(e,n,f)}catch($){Wc(e,n,$)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Zp(e,n,o)},function(o){return Wc(e,n,o)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,qp(e,a)))}function Wc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==o)}e.action=null}function jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Kp(e,n){return n}function Qp(e,n){if(Me){var a=Pe.formState;if(a!==null){t:{var o=le;if(Me){if(Ze){e:{for(var c=Ze,f=di;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=si(c.nextSibling),o=c.data==="F!";break t}}Ka(o)}o=!1}o&&(n=a[0])}}return a=Rn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kp,lastRenderedState:n},a.queue=o,a=gm.bind(null,le,o),o.dispatch=a,o=Xc(!1),f=Kc.bind(null,le,!1,o.queue),o=Rn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=_x.bind(null,le,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Jp(e){var n=an();return $p(n,we,e)}function $p(e,n,a){if(n=Vc(e,n,Kp)[0],e=Sl(Ni)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=eo(n)}catch(y){throw y===js?pl:y}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Vr(9,yl(),vx.bind(null,c,a),null)),[o,f,e]}function vx(e,n){e.action=n}function tm(e){var n=an(),a=we;if(a!==null)return $p(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Vr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Hc(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function yl(){return{destroy:void 0,resource:void 0}}function em(){return an().memoizedState}function Ml(e,n,a,o){var c=Rn();o=o===void 0?null:o,le.flags|=e,c.memoizedState=Vr(1|n,yl(),a,o)}function no(e,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;we!==null&&o!==null&&Pc(o,we.memoizedState.deps)?c.memoizedState=Vr(n,f,a,o):(le.flags|=e,c.memoizedState=Vr(1|n,f,a,o))}function nm(e,n){Ml(8390656,8,e,n)}function im(e,n){no(2048,8,e,n)}function am(e,n){return no(4,2,e,n)}function rm(e,n){return no(4,4,e,n)}function sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function om(e,n,a){a=a!=null?a.concat([e]):null,no(4,4,sm.bind(null,n,e),a)}function qc(){}function lm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function um(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pc(n,o[1]))return o[0];if(o=e(),tr){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o}function Yc(e,n,a){return a===void 0||(ca&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=hg(),le.lanes|=e,_a|=e,a)}function cm(e,n,a,o){return zn(a,n)?a:Fr.current!==null?(e=Yc(e,a,o),zn(e,n)||(hn=!0),e):(ca&42)===0?(hn=!0,e.memoizedState=a):(e=hg(),le.lanes|=e,_a|=e,n)}function fm(e,n,a,o,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var y=O.T,b={};O.T=b,Kc(e,!1,n,a);try{var z=c(),$=O.S;if($!==null&&$(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=px(z,o);io(e,n,ut,Gn(e))}else io(e,n,o,Gn(e))}catch(mt){io(e,n,{then:function(){},status:"rejected",reason:mt},Gn())}finally{Z.p=f,O.T=y}}function xx(){}function Zc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=hm(e).queue;fm(e,c,n,j,a===null?xx:function(){return dm(e),a(o)})}function hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=hm(e).next.queue;io(e,n,{},Gn())}function jc(){return xn(Mo)}function pm(){return an().memoizedState}function mm(){return an().memoizedState}function Sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Gn();e=la(a);var o=ua(n,e,a);o!==null&&(Vn(o,n,a),Qs(o,n,a)),n={cache:bc()},e.payload=n;return}n=n.return}}function yx(e,n,a){var o=Gn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?_m(n,a):(a=mc(e,n,a,o),a!==null&&(Vn(a,e,o),vm(a,n,o)))}function gm(e,n,a){var o=Gn();io(e,n,a,o)}function io(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))_m(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,zn(b,y))return sl(e,n,c,0),Pe===null&&rl(),!1}catch{}finally{}if(a=mc(e,n,c,o),a!==null)return Vn(a,e,o),vm(a,n,o),!0}return!1}function Kc(e,n,a,o){if(o={lane:2,revertLane:wf(),action:o,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(r(479))}else n=mc(e,a,o,2),n!==null&&Vn(n,e,2)}function El(e){var n=e.alternate;return e===le||n!==null&&n===le}function _m(e,n){Hr=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xe(e,a)}}var Tl={readContext:xn,use:xl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},xm={readContext:xn,use:xl,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:nm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Rn();n=n===void 0?null:n;var o=e();if(tr){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Rn();if(a!==void 0){var c=a(n);if(tr){Ut(!0);try{a(n)}finally{Ut(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=yx.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xc(e);var n=e.queue,a=gm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qc,useDeferredValue:function(e,n){var a=Rn();return Yc(a,e,n)},useTransition:function(){var e=Xc(!1);return e=fm.bind(null,le,e.queue,!0,!1),Rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,c=Rn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Pe===null)throw Error(r(349));(ge&124)!==0||Hp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,nm(Vp.bind(null,o,f,e),[e]),o.flags|=2048,Vr(9,yl(),Gp.bind(null,o,f,a,n),null),a},useId:function(){var e=Rn(),n=Pe.identifierPrefix;if(Me){var a=Di,o=wi;a=(o&~(1<<32-Xt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=mx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:jc,useFormState:Qp,useActionState:Qp,useOptimistic:function(e){var n=Rn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kc.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gc,useCacheRefresh:function(){return Rn().memoizedState=Sx.bind(null,le)}},Sm={readContext:xn,use:xl,useCallback:lm,useContext:xn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:um,useReducer:Sl,useRef:em,useState:function(){return Sl(Ni)},useDebugValue:qc,useDeferredValue:function(e,n){var a=an();return cm(a,we.memoizedState,e,n)},useTransition:function(){var e=Sl(Ni)[0],n=an().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:jc,useFormState:Jp,useActionState:Jp,useOptimistic:function(e,n){var a=an();return Wp(a,we,e,n)},useMemoCache:Gc,useCacheRefresh:mm},Mx={readContext:xn,use:xl,useCallback:lm,useContext:xn,useEffect:im,useImperativeHandle:om,useInsertionEffect:am,useLayoutEffect:rm,useMemo:um,useReducer:kc,useRef:em,useState:function(){return kc(Ni)},useDebugValue:qc,useDeferredValue:function(e,n){var a=an();return we===null?Yc(a,e,n):cm(a,we.memoizedState,e,n)},useTransition:function(){var e=kc(Ni)[0],n=an().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Fp,useId:pm,useHostTransitionStatus:jc,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=an();return we!==null?Wp(a,we,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:mm},kr=null,ao=0;function bl(e){var n=ao;return ao+=1,kr===null&&(kr=[]),Up(kr,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ym(e){var n=e._init;return n(e._payload)}function Mm(e){function n(W,G){if(e){var Q=W.deletions;Q===null?(W.deletions=[G],W.flags|=16):Q.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function o(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Ci(W,G),W.index=0,W.sibling=null,W}function f(W,G,Q){return W.index=Q,e?(Q=W.alternate,Q!==null?(Q=Q.index,Q<G?(W.flags|=67108866,G):Q):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function y(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function b(W,G,Q,dt){return G===null||G.tag!==6?(G=_c(Q,W.mode,dt),G.return=W,G):(G=c(G,Q),G.return=W,G)}function z(W,G,Q,dt){var Bt=Q.type;return Bt===E?ut(W,G,Q.props.children,dt,Q.key):G!==null&&(G.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===Y&&ym(Bt)===G.type)?(G=c(G,Q.props),ro(G,Q),G.return=W,G):(G=ll(Q.type,Q.key,Q.props,null,W.mode,dt),ro(G,Q),G.return=W,G)}function $(W,G,Q,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=vc(Q,W.mode,dt),G.return=W,G):(G=c(G,Q.children||[]),G.return=W,G)}function ut(W,G,Q,dt,Bt){return G===null||G.tag!==7?(G=qa(Q,W.mode,dt,Bt),G.return=W,G):(G=c(G,Q),G.return=W,G)}function mt(W,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=_c(""+G,W.mode,Q),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return Q=ll(G.type,G.key,G.props,null,W.mode,Q),ro(Q,G),Q.return=W,Q;case M:return G=vc(G,W.mode,Q),G.return=W,G;case Y:var dt=G._init;return G=dt(G._payload),mt(W,G,Q)}if(lt(G)||st(G))return G=qa(G,W.mode,Q,null),G.return=W,G;if(typeof G.then=="function")return mt(W,bl(G),Q);if(G.$$typeof===w)return mt(W,hl(W,G),Q);Al(W,G)}return null}function et(W,G,Q,dt){var Bt=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Bt!==null?null:b(W,G,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===Bt?z(W,G,Q,dt):null;case M:return Q.key===Bt?$(W,G,Q,dt):null;case Y:return Bt=Q._init,Q=Bt(Q._payload),et(W,G,Q,dt)}if(lt(Q)||st(Q))return Bt!==null?null:ut(W,G,Q,dt,null);if(typeof Q.then=="function")return et(W,G,bl(Q),dt);if(Q.$$typeof===w)return et(W,G,hl(W,Q),dt);Al(W,Q)}return null}function it(W,G,Q,dt,Bt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(Q)||null,b(G,W,""+dt,Bt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case v:return W=W.get(dt.key===null?Q:dt.key)||null,z(G,W,dt,Bt);case M:return W=W.get(dt.key===null?Q:dt.key)||null,$(G,W,dt,Bt);case Y:var ue=dt._init;return dt=ue(dt._payload),it(W,G,Q,dt,Bt)}if(lt(dt)||st(dt))return W=W.get(Q)||null,ut(G,W,dt,Bt,null);if(typeof dt.then=="function")return it(W,G,Q,bl(dt),Bt);if(dt.$$typeof===w)return it(W,G,Q,hl(G,dt),Bt);Al(G,dt)}return null}function $t(W,G,Q,dt){for(var Bt=null,ue=null,Gt=G,Kt=G=0,pn=null;Gt!==null&&Kt<Q.length;Kt++){Gt.index>Kt?(pn=Gt,Gt=null):pn=Gt.sibling;var Se=et(W,Gt,Q[Kt],dt);if(Se===null){Gt===null&&(Gt=pn);break}e&&Gt&&Se.alternate===null&&n(W,Gt),G=f(Se,G,Kt),ue===null?Bt=Se:ue.sibling=Se,ue=Se,Gt=pn}if(Kt===Q.length)return a(W,Gt),Me&&Za(W,Kt),Bt;if(Gt===null){for(;Kt<Q.length;Kt++)Gt=mt(W,Q[Kt],dt),Gt!==null&&(G=f(Gt,G,Kt),ue===null?Bt=Gt:ue.sibling=Gt,ue=Gt);return Me&&Za(W,Kt),Bt}for(Gt=o(Gt);Kt<Q.length;Kt++)pn=it(Gt,W,Kt,Q[Kt],dt),pn!==null&&(e&&pn.alternate!==null&&Gt.delete(pn.key===null?Kt:pn.key),G=f(pn,G,Kt),ue===null?Bt=pn:ue.sibling=pn,ue=pn);return e&&Gt.forEach(function(Aa){return n(W,Aa)}),Me&&Za(W,Kt),Bt}function Zt(W,G,Q,dt){if(Q==null)throw Error(r(151));for(var Bt=null,ue=null,Gt=G,Kt=G=0,pn=null,Se=Q.next();Gt!==null&&!Se.done;Kt++,Se=Q.next()){Gt.index>Kt?(pn=Gt,Gt=null):pn=Gt.sibling;var Aa=et(W,Gt,Se.value,dt);if(Aa===null){Gt===null&&(Gt=pn);break}e&&Gt&&Aa.alternate===null&&n(W,Gt),G=f(Aa,G,Kt),ue===null?Bt=Aa:ue.sibling=Aa,ue=Aa,Gt=pn}if(Se.done)return a(W,Gt),Me&&Za(W,Kt),Bt;if(Gt===null){for(;!Se.done;Kt++,Se=Q.next())Se=mt(W,Se.value,dt),Se!==null&&(G=f(Se,G,Kt),ue===null?Bt=Se:ue.sibling=Se,ue=Se);return Me&&Za(W,Kt),Bt}for(Gt=o(Gt);!Se.done;Kt++,Se=Q.next())Se=it(Gt,W,Kt,Se.value,dt),Se!==null&&(e&&Se.alternate!==null&&Gt.delete(Se.key===null?Kt:Se.key),G=f(Se,G,Kt),ue===null?Bt=Se:ue.sibling=Se,ue=Se);return e&&Gt.forEach(function(ES){return n(W,ES)}),Me&&Za(W,Kt),Bt}function Ue(W,G,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:t:{for(var Bt=Q.key;G!==null;){if(G.key===Bt){if(Bt=Q.type,Bt===E){if(G.tag===7){a(W,G.sibling),dt=c(G,Q.props.children),dt.return=W,W=dt;break t}}else if(G.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===Y&&ym(Bt)===G.type){a(W,G.sibling),dt=c(G,Q.props),ro(dt,Q),dt.return=W,W=dt;break t}a(W,G);break}else n(W,G);G=G.sibling}Q.type===E?(dt=qa(Q.props.children,W.mode,dt,Q.key),dt.return=W,W=dt):(dt=ll(Q.type,Q.key,Q.props,null,W.mode,dt),ro(dt,Q),dt.return=W,W=dt)}return y(W);case M:t:{for(Bt=Q.key;G!==null;){if(G.key===Bt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){a(W,G.sibling),dt=c(G,Q.children||[]),dt.return=W,W=dt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}dt=vc(Q,W.mode,dt),dt.return=W,W=dt}return y(W);case Y:return Bt=Q._init,Q=Bt(Q._payload),Ue(W,G,Q,dt)}if(lt(Q))return $t(W,G,Q,dt);if(st(Q)){if(Bt=st(Q),typeof Bt!="function")throw Error(r(150));return Q=Bt.call(Q),Zt(W,G,Q,dt)}if(typeof Q.then=="function")return Ue(W,G,bl(Q),dt);if(Q.$$typeof===w)return Ue(W,G,hl(W,Q),dt);Al(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(a(W,G.sibling),dt=c(G,Q),dt.return=W,W=dt):(a(W,G),dt=_c(Q,W.mode,dt),dt.return=W,W=dt),y(W)):a(W,G)}return function(W,G,Q,dt){try{ao=0;var Bt=Ue(W,G,Q,dt);return kr=null,Bt}catch(Gt){if(Gt===js||Gt===pl)throw Gt;var ue=In(29,Gt,null,W.mode);return ue.lanes=dt,ue.return=W,ue}finally{}}}var Xr=Mm(!0),Em=Mm(!1),Jn=J(null),pi=null;function fa(e){var n=e.alternate;yt(ln,ln.current&1),yt(Jn,e),pi===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(pi=e)}function Tm(e){if(e.tag===22){if(yt(ln,ln.current),yt(Jn,e),pi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(pi=e)}}else ha()}function ha(){yt(ln,ln.current),yt(Jn,Jn.current)}function Oi(e){St(Jn),pi===e&&(pi=null),St(ln)}var ln=J(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jc={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Gn(),c=la(o);c.payload=n,a!=null&&(c.callback=a),n=ua(e,c,o),n!==null&&(Vn(n,e,o),Qs(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Gn(),c=la(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ua(e,c,o),n!==null&&(Vn(n,e,o),Qs(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Gn(),o=la(a);o.tag=2,n!=null&&(o.callback=n),n=ua(e,o,a),n!==null&&(Vn(n,e,a),Qs(n,e,a))}};function bm(e,n,a,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Gs(a,o)||!Gs(c,f):!0}function Am(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Jc.enqueueReplaceState(n,n.state,null)}function er(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Rm(e){Cl(e)}function Cm(e){console.error(e)}function wm(e){Cl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Dm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $c(e,n,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function Um(e){return e=la(e),e.tag=3,e}function Lm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Dm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Dm(n,a,o),typeof c!="function"&&(va===null?va=new Set([this]):va.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Ex(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&qs(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return pi===null?Tf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(e,o,c)),!1;case 22:return a.flags|=65536,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(e,o,c)),!1}throw Error(r(435,a.tag))}return Af(e,o,c),Tf(),!1}if(Me)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==yc&&(e=Error(r(422),{cause:o}),Ws(Zn(e,a)))):(o!==yc&&(n=Error(r(423),{cause:o}),Ws(Zn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Zn(o,a),c=$c(e.stateNode,o,c),Uc(e,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:o});if(f=Zn(f,a),ho===null?ho=[f]:ho.push(f),je!==4&&(je=2),n===null)return!0;o=Zn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=$c(a.stateNode,o,e),Uc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(va===null||!va.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Um(c),Lm(c,e,a,o),Uc(a,c),!1}a=a.return}while(a!==null);return!1}var Nm=Error(r(461)),hn=!1;function gn(e,n,a,o){n.child=e===null?Em(n,null,a,o):Xr(n,e.child,a,o)}function Om(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return Ja(n),o=zc(e,n,a,y,f,c),b=Ic(),e!==null&&!hn?(Bc(e,n,c),Pi(e,n,c)):(Me&&b&&xc(n),n.flags|=1,gn(e,n,o,c),n.child)}function Pm(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,o,c)):(e=ll(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gs,a(y,o)&&e.ref===n.ref)return Pi(e,n,c)}return n.flags|=1,e=Ci(f,o),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Gs(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,lf(e,c))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,Pi(e,n,c)}return tf(e,n,a,o,c)}function Im(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Bm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Nc(),Tm(n);else return n.lanes=n.childLanes=536870912,Bm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(dl(n,f.cachePool),zp(n,f),ha(),n.memoizedState=null):(e!==null&&dl(n,null),Nc(),ha());return gn(e,n,c,a),n.child}function Bm(e,n,a,o){var c=Rc();return c=c===null?null:{parent:on._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&dl(n,null),Nc(),Tm(n),e!==null&&qs(e,n,o,!0),null}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,o,c){return Ja(n),a=zc(e,n,a,o,void 0,c),o=Ic(),e!==null&&!hn?(Bc(e,n,c),Pi(e,n,c)):(Me&&o&&xc(n),n.flags|=1,gn(e,n,a,c),n.child)}function Fm(e,n,a,o,c,f){return Ja(n),n.updateQueue=null,a=Bp(n,o,a,c),Ip(e),o=Ic(),e!==null&&!hn?(Bc(e,n,f),Pi(e,n,f)):(Me&&o&&xc(n),n.flags|=1,gn(e,n,a,f),n.child)}function Hm(e,n,a,o,c){if(Ja(n),n.stateNode===null){var f=Or,y=a.contextType;typeof y=="object"&&y!==null&&(f=xn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wc(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?xn(y):Or,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Qc(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Jc.enqueueReplaceState(f,f.state,null),$s(n,o,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,z=er(a,b);f.props=z;var $=f.context,ut=a.contextType;y=Or,typeof ut=="object"&&ut!==null&&(y=xn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==y)&&Am(n,f,o,y),oa=!1;var et=n.memoizedState;f.state=et,$s(n,o,f,c),Js(),$=n.memoizedState,b||et!==$||oa?(typeof mt=="function"&&(Qc(n,a,mt,o),$=n.memoizedState),(z=oa||bm(n,a,z,o,et,$,y))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=y,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Dc(e,n),y=n.memoizedProps,ut=er(a,y),f.props=ut,mt=n.pendingProps,et=f.context,$=a.contextType,z=Or,typeof $=="object"&&$!==null&&(z=xn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==mt||et!==z)&&Am(n,f,o,z),oa=!1,et=n.memoizedState,f.state=et,$s(n,o,f,c),Js();var it=n.memoizedState;y!==mt||et!==it||oa||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof b=="function"&&(Qc(n,a,b,o),it=n.memoizedState),(ut=oa||bm(n,a,ut,o,et,it,z)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=z,o=ut):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Xr(n,e.child,null,c),n.child=Xr(n,null,a,c)):gn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Pi(e,n,c),e}function Gm(e,n,a,o){return Xs(),n.flags|=256,gn(e,n,a,o),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Cp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function Vm(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(c?fa(n):ha(),Me){var b=Ze,z;if(z=b){t:{for(z=b,b=di;z.nodeType!==8;){if(!b){b=null;break t}if(z=si(z.nextSibling),z===null){b=null;break t}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:Ya!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},z=In(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,Tn=n,Ze=null,z=!0):z=!1}z||Ka(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Gf(b)?n.lanes=32:n.lanes=536870912,null;Oi(n)}return b=o.children,o=o.fallback,c?(ha(),c=n.mode,b=Ul({mode:"hidden",children:b},c),o=qa(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=nf(a),c.childLanes=af(e,y,a),n.memoizedState=ef,o):(fa(n),rf(n,b))}if(z=e.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(fa(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(ha(),n.child=e.child,n.flags|=128,n=null):(ha(),c=o.fallback,b=n.mode,o=Ul({mode:"visible",children:o.children},b),c=qa(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Xr(n,e.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(e,y,a),n.memoizedState=ef,n=c);else if(fa(n),Gf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(r(419)),o.stack="",o.digest=y,Ws({value:o,source:null,stack:null}),n=sf(e,n,a)}else if(hn||qs(e,n,a,!1),y=(a&e.childLanes)!==0,hn||y){if(y=Pe,y!==null&&(o=a&-a,o=(o&42)!==0?1:Qe(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Nr(e,o),Vn(y,e,o),Nm;b.data==="$?"||Tf(),n=sf(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ze=si(b.nextSibling),Tn=n,Me=!0,ja=null,di=!1,e!==null&&(Kn[Qn++]=wi,Kn[Qn++]=Di,Kn[Qn++]=Ya,wi=e.id,Di=e.overflow,Ya=n),n=rf(n,o.children),n.flags|=4096);return n}return c?(ha(),c=o.fallback,b=n.mode,z=e.child,$=z.sibling,o=Ci(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?c=Ci($,c):(c=qa(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=nf(a):(z=b.cachePool,z!==null?($=on._currentValue,z=z.parent!==$?{parent:$,pool:$}:z):z=Cp(),b={baseLanes:b.baseLanes|a,cachePool:z}),c.memoizedState=b,c.childLanes=af(e,y,a),n.memoizedState=ef,o):(fa(n),a=e.child,e=a.sibling,a=Ci(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=In(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function sf(e,n,a){return Xr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ec(e.return,n,a)}function of(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Xm(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(gn(e,n,o.children,a),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,a,n);else if(e.tag===19)km(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(ln,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Rl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),_a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ci(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ci(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function Tx(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),sa(n,on,e.memoizedState.cache),Xs();break;case 27:case 5:ae(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:sa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vm(e,n,a):(fa(n),e=Pi(e,n,a),e!==null?e.sibling:null);fa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(qs(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Xm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,Im(e,n,a);case 24:sa(n,on,e.memoizedState.cache)}return Pi(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return hn=!1,Tx(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,Me&&(n.flags&1048576)!==0&&yp(n,cl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")gc(o)?(e=er(o,e),n.tag=1,n=Hm(null,n,o,e,a)):(n.tag=0,n=tf(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===N){n.tag=11,n=Om(null,n,o,e,a);break t}else if(c===I){n.tag=14,n=Pm(null,n,o,e,a);break t}}throw n=ct(o)||o,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=er(o,n.pendingProps),Hm(e,n,o,c,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Dc(e,n),$s(n,o,null,a);var y=n.memoizedState;if(o=y.cache,sa(n,on,o),o!==f.cache&&Tc(n,[on],a,!0),Js(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(e,n,o,a);break t}else if(o!==c){c=Zn(Error(r(424)),n),Ws(c),n=Gm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=si(e.firstChild),Tn=n,Me=!0,ja=null,di=!0,a=Em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xs(),o===c){n=Pi(e,n,a);break t}gn(e,n,o,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Wl(vt.current).createElement(a),o[Ge]=n,o[fn]=e,vn(o,a,e),V(o),n.stateNode=o):n.memoizedState=jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&Me&&(o=n.stateNode=qg(n.type,n.pendingProps,vt.current),Tn=n,di=!0,c=Ze,ya(n.type)?(Vf=c,Ze=si(o.firstChild)):Ze=c),gn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((c=o=Ze)&&(o=Jx(o,n.type,n.pendingProps,di),o!==null?(n.stateNode=o,Tn=n,Ze=si(o.firstChild),di=!1,c=!0):c=!1),c||Ka(n)),ae(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Bf(c,f)?o=null:y!==null&&Bf(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=zc(e,n,gx,null,null,a),Mo._currentValue=c),Dl(e,n),gn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=Ze)&&(a=$x(a,n.pendingProps,di),a!==null?(n.stateNode=a,Tn=n,Ze=null,e=!0):e=!1),e||Ka(n)),null;case 13:return Vm(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Xr(n,null,o,a):gn(e,n,o,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return gn(e,n,n.pendingProps,a),n.child;case 8:return gn(e,n,n.pendingProps.children,a),n.child;case 12:return gn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,sa(n,n.type,o.value),gn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Ja(n),c=xn(c),o=o(c),n.flags|=1,gn(e,n,o,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ul(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ci(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Im(e,n,a);case 24:return Ja(n),o=xn(on),e===null?(c=Rc(),c===null&&(c=Pe,f=bc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},wc(n),sa(n,on,c)):((e.lanes&a)!==0&&(Dc(e,n),$s(n,null,null,a),Js()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),sa(n,on,o)):(o=f.cache,sa(n,on,o),o!==c.cache&&Tc(n,[on],a,!0))),gn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function zi(e){e.flags|=4}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t_(n)){if(n=Jn.current,n!==null&&((ge&4194048)===ge?pi!==null:(ge&62914560)!==ge&&(ge&536870912)===0||n!==pi))throw Ks=Cc,wp;e.flags|=8192}}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pt():536870912,e.lanes|=n,Zr|=n)}function so(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function bx(e,n,a){var o=n.pendingProps;switch(Sc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Li(on),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ks(n)?zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(zi(n),a!==null?(qe(n),qm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(zi(n),qe(n),qm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&zi(n),qe(n),n.flags&=-16777217),null;case 27:Le(n),a=vt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=K.current,ks(n)?Mp(n):(e=qg(c,o,a),n.stateNode=e,zi(n))}return qe(n),null;case 5:if(Le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=K.current,ks(n))Mp(n);else{switch(c=Wl(vt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[Ge]=n,e[fn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(vn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=vt.current,ks(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Ge]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Fg(e.nodeValue,a)),e||Ka(n)}else e=Wl(e).createTextNode(o),e[Ge]=n,n.stateNode=e}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ks(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ge]=n}else Xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Tp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Oi(n),n):(Oi(n),null)}if(Oi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),qe(n),null;case 4:return Wt(),e===null&&Nf(n.stateNode.containerInfo),qe(n),null;case 10:return Li(n.type),qe(n),null;case 19:if(St(ln),c=n.memoizedState,c===null)return qe(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)so(c,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,so(c,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return yt(ln,ln.current&1|2),n.child}e=e.sibling}c.tail!==null&&ye()>Pl&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304)}else{if(!o)if(e=Rl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Me)return qe(n),null}else 2*ye()-c.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ye(),n.sibling=null,e=ln.current,yt(ln,o?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return Oi(n),Oc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&St($a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Li(on),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ax(e,n){switch(Sc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Li(on),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 13:if(Oi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return St(ln),null;case 4:return Wt(),null;case 10:return Li(n.type),null;case 22:case 23:return Oi(n),Oc(),e!==null&&St($a),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Li(on),null;case 25:return null;default:return null}}function Ym(e,n){switch(Sc(n),n.tag){case 3:Li(on),Wt();break;case 26:case 27:case 5:Le(n);break;case 4:Wt();break;case 13:Oi(n);break;case 19:St(ln);break;case 10:Li(n.type);break;case 22:case 23:Oi(n),Oc(),e!==null&&St($a);break;case 24:Li(on)}}function oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(b){Ne(n,n.return,b)}}function da(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var z=a,$=b;try{$()}catch(ut){Ne(c,z,ut)}}}o=o.next}while(o!==f)}}catch(ut){Ne(n,n.return,ut)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pp(n,a)}catch(o){Ne(e,e.return,o)}}}function jm(e,n,a){a.props=er(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ne(e,n,o)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ne(e,n,c)}}function mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ne(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ne(e,n,c)}else a.current=null}function Km(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ne(e,e.return,c)}}function uf(e,n,a){try{var o=e.stateNode;Yx(o,e.type,a,n),o[fn]=n}catch(c){Ne(e,e.return,c)}}function Qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xl));else if(o!==4&&(o===27&&ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Nl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function Jm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);vn(n,o,a),n[Ge]=e,n[fn]=a}catch(f){Ne(e,e.return,f)}}var Ii=!1,$e=!1,hf=!1,$m=typeof WeakSet=="function"?WeakSet:Set,dn=null;function Rx(e,n){if(e=e.containerInfo,zf=Ql,e=cp(e),uc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,b=-1,z=-1,$=0,ut=0,mt=e,et=null;e:for(;;){for(var it;mt!==a||c!==0&&mt.nodeType!==3||(b=y+c),mt!==f||o!==0&&mt.nodeType!==3||(z=y+o),mt.nodeType===3&&(y+=mt.nodeValue.length),(it=mt.firstChild)!==null;)et=mt,mt=it;for(;;){if(mt===e)break e;if(et===a&&++$===c&&(b=y),et===f&&++ut===o&&(z=y),(it=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=it}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},Ql=!1,dn=n;dn!==null;)if(n=dn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,dn=e;else for(;dn!==null;){switch(n=dn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var $t=er(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate($t,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Ne(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,dn=e;break}dn=n.return}}function tg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),o&4&&oo(5,a);break;case 1:if(pa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ne(a,a.return,y)}else{var c=er(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ne(a,a.return,y)}}o&64&&Zm(a),o&512&&lo(a,a.return);break;case 3:if(pa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pp(e,n)}catch(y){Ne(a,a.return,y)}}break;case 27:n===null&&o&4&&Jm(a);case 26:case 5:pa(e,a),n===null&&o&4&&Km(a),o&512&&lo(a,a.return);break;case 12:pa(e,a);break;case 13:pa(e,a),o&4&&ig(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zx.bind(null,a),tS(e,a))));break;case 22:if(o=a.memoizedState!==null||Ii,!o){n=n!==null&&n.memoizedState!==null||$e,c=Ii;var f=$e;Ii=o,($e=n)&&!f?ma(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),Ii=c,$e=f}break;case 30:break;default:pa(e,a)}}function eg(e){var n=e.alternate;n!==null&&(e.alternate=null,eg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Er(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Cn=!1;function Bi(e,n,a){for(a=a.child;a!==null;)ng(e,n,a),a=a.sibling}function ng(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Vt,a)}catch{}switch(a.tag){case 26:$e||mi(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||mi(a,n);var o=ke,c=Cn;ya(a.type)&&(ke=a.stateNode,Cn=!1),Bi(e,n,a),vo(a.stateNode),ke=o,Cn=c;break;case 5:$e||mi(a,n);case 6:if(o=ke,c=Cn,ke=null,Bi(e,n,a),ke=o,Cn=c,ke!==null)if(Cn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode)}catch(f){Ne(a,n,f)}else try{ke.removeChild(a.stateNode)}catch(f){Ne(a,n,f)}break;case 18:ke!==null&&(Cn?(e=ke,Xg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ao(e)):Xg(ke,a.stateNode));break;case 4:o=ke,c=Cn,ke=a.stateNode.containerInfo,Cn=!0,Bi(e,n,a),ke=o,Cn=c;break;case 0:case 11:case 14:case 15:$e||da(2,a,n),$e||da(4,a,n),Bi(e,n,a);break;case 1:$e||(mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&jm(a,n,o)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:$e=(o=$e)||a.memoizedState!==null,Bi(e,n,a),$e=o;break;default:Bi(e,n,a)}}function ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ao(e)}catch(a){Ne(n,n.return,a)}}function Cx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new $m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new $m),n;default:throw Error(r(435,e.tag))}}function df(e,n){var a=Cx(e);n.forEach(function(o){var c=Ix.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,y=n,b=y;t:for(;b!==null;){switch(b.tag){case 27:if(ya(b.type)){ke=b.stateNode,Cn=!1;break t}break;case 5:ke=b.stateNode,Cn=!1;break t;case 3:case 4:ke=b.stateNode.containerInfo,Cn=!0;break t}b=b.return}if(ke===null)throw Error(r(160));ng(f,y,c),ke=null,Cn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ag(n,e),n=n.sibling}var ri=null;function ag(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Fn(e),o&4&&(da(3,e,e.return),oo(3,e),da(5,e,e.return));break;case 1:Bn(n,e),Fn(e),o&512&&($e||a===null||mi(a,a.return)),o&64&&Ii&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ri;if(Bn(n,e),Fn(e),o&512&&($e||a===null||mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ea]||f[Ge]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),vn(f,o,a),f[Ge]=e,V(f),o=f;break t;case"link":var y=Jg("link","href",c).get(o+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break e}}f=c.createElement(o),vn(f,o,a),c.head.appendChild(f);break;case"meta":if(y=Jg("meta","content",c).get(o+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break e}}f=c.createElement(o),vn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[Ge]=e,V(f),o=f}e.stateNode=o}else $g(c,e.type,e.stateNode);else e.stateNode=Qg(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?$g(c,e.type,e.stateNode):Qg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Fn(e),o&512&&($e||a===null||mi(a,a.return)),a!==null&&o&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Fn(e),o&512&&($e||a===null||mi(a,a.return)),e.flags&32){c=e.stateNode;try{Ar(c,"")}catch(it){Ne(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,uf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(hf=!0);break;case 6:if(Bn(n,e),Fn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ne(e,e.return,it)}}break;case 3:if(Zl=null,c=ri,ri=ql(n.containerInfo),Bn(n,e),ri=c,Fn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ao(n.containerInfo)}catch(it){Ne(e,e.return,it)}hf&&(hf=!1,rg(e));break;case 4:o=ri,ri=ql(e.stateNode.containerInfo),Bn(n,e),Fn(e),ri=o;break;case 12:Bn(n,e),Fn(e);break;case 13:Bn(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=ye()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=Ii,ut=$e;if(Ii=$||c,$e=ut||z,Bn(n,e),$e=ut,Ii=$,Fn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Ii||$e||nr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=z.stateNode;var mt=z.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){Ne(z,z.return,it)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(it){Ne(z,z.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,df(e,a))));break;case 19:Bn(n,e),Fn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 30:break;case 21:break;default:Bn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Qm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(e);Nl(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(Ar(y,""),a.flags&=-33);var b=cf(e);Nl(e,b,y);break;case 3:case 4:var z=a.stateNode.containerInfo,$=cf(e);ff(e,$,z);break;default:throw Error(r(161))}}catch(ut){Ne(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function rg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function pa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tg(e,n.alternate,n),n=n.sibling}function nr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:da(4,n,n.return),nr(n);break;case 1:mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),nr(n);break;case 27:vo(n.stateNode);case 26:case 5:mi(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}e=e.sibling}}function ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ma(c,f,a),oo(4,f);break;case 1:if(ma(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ne(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Op(z[c],b)}catch($){Ne(o,o.return,$)}}a&&y&64&&Zm(f),lo(f,f.return);break;case 27:Jm(f);case 26:case 5:ma(c,f,a),a&&o===null&&y&4&&Km(f),lo(f,f.return);break;case 12:ma(c,f,a);break;case 13:ma(c,f,a),a&&y&4&&ig(c,f);break;case 22:f.memoizedState===null&&ma(c,f,a),lo(f,f.return);break;case 30:break;default:ma(c,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ys(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e))}function gi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(e,n,a,o),n=n.sibling}function sg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(e,n,a,o),c&2048&&oo(9,n);break;case 1:gi(e,n,a,o);break;case 3:gi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ys(e)));break;case 12:if(c&2048){gi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ne(n,n.return,z)}}else gi(e,n,a,o);break;case 13:gi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?gi(e,n,a,o):uo(e,n):f._visibility&2?gi(e,n,a,o):(f._visibility|=2,Wr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&pf(y,n);break;case 24:gi(e,n,a,o),c&2048&&mf(n.alternate,n);break;default:gi(e,n,a,o)}}function Wr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,b=a,z=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:Wr(f,y,b,z,c),oo(8,y);break;case 23:break;case 22:var ut=y.stateNode;y.memoizedState!==null?ut._visibility&2?Wr(f,y,b,z,c):uo(f,y):(ut._visibility|=2,Wr(f,y,b,z,c)),c&&$&2048&&pf(y.alternate,y);break;case 24:Wr(f,y,b,z,c),c&&$&2048&&mf(y.alternate,y);break;default:Wr(f,y,b,z,c)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:uo(a,o),c&2048&&pf(o.alternate,o);break;case 24:uo(a,o),c&2048&&mf(o.alternate,o);break;default:uo(a,o)}n=n.sibling}}var co=8192;function qr(e){if(e.subtreeFlags&co)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 26:qr(e),e.flags&co&&e.memoizedState!==null&&dS(ri,e.memoizedState,e.memoizedProps);break;case 5:qr(e);break;case 3:case 4:var n=ri;ri=ql(e.stateNode.containerInfo),qr(e),ri=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=co,co=16777216,qr(e),co=n):qr(e));break;default:qr(e)}}function lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,cg(o,e)}lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ug(e),e=e.sibling}function ug(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&da(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):fo(e);break;default:fo(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];dn=o,cg(o,e)}lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:da(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function cg(e,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:da(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,dn=o;else t:for(a=e;dn!==null;){o=dn;var c=o.sibling,f=o.return;if(eg(o),o===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}var wx={getCacheForType:function(e){var n=xn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Dx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Pe=null,ce=null,ge=0,Re=0,Hn=null,ga=!1,Yr=!1,gf=!1,Fi=0,je=0,_a=0,ir=0,_f=0,$n=0,Zr=0,ho=null,wn=null,vf=!1,xf=0,Pl=1/0,zl=null,va=null,_n=0,xa=null,jr=null,Kr=0,Sf=0,yf=null,fg=null,po=0,Mf=null;function Gn(){if((Ae&2)!==0&&ge!==0)return ge&-ge;if(O.T!==null){var e=Ir;return e!==0?e:wf()}return qn()}function hg(){$n===0&&($n=(ge&536870912)===0||Me?bt():536870912);var e=Jn.current;return e!==null&&(e.flags|=32),$n}function Vn(e,n,a){(e===Pe&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Sa(e,ge,$n,!1)),Ct(e,a),((Ae&2)===0||e!==Pe)&&(e===Pe&&((Ae&2)===0&&(ir|=a),je===4&&Sa(e,ge,$n,!1)),_i(e))}function dg(e,n,a){if((Ae&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||be(e,n),c=o?Nx(e,n):bf(e,n,!0),f=o;do{if(c===0){Yr&&!o&&Sa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ux(a)){c=bf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=e;c=ho;var z=b.current.memoizedState.isDehydrated;if(z&&(Qr(b,y).flags|=256),y=bf(b,y,!1),y!==2){if(gf&&!z){b.errorRecoveryDisabledLanes|=f,ir|=f,c=4;break t}f=wn,wn=c,f!==null&&(wn===null?wn=f:wn.push.apply(wn,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Qr(e,0),Sa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Sa(o,n,$n,!ga);break t;case 2:wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-ye(),10<c)){if(Sa(o,n,$n,!ga),ne(o,0,!0)!==0)break t;o.timeoutHandle=Vg(pg.bind(null,o,a,wn,zl,vf,n,$n,ir,Zr,ga,f,2,-0,0),c);break t}pg(o,a,wn,zl,vf,n,$n,ir,Zr,ga,f,0,-0,0)}}break}while(!0);_i(e)}function pg(e,n,a,o,c,f,y,b,z,$,ut,mt,et,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(yo={stylesheets:null,count:0,unsuspend:hS},og(n),mt=pS(),mt!==null)){e.cancelPendingCommit=mt(yg.bind(null,e,n,f,a,o,c,y,b,z,ut,1,et,it)),Sa(e,f,y,!$);return}yg(e,n,f,a,o,c,y,b,z)}function Ux(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!zn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sa(e,n,a,o){n&=~_f,n&=~ir,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Xt(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&de(e,a,n)}function Il(){return(Ae&6)===0?(mo(0),!1):!0}function Ef(){if(ce!==null){if(Re===0)var e=ce.return;else e=ce,Ui=Qa=null,Fc(e),kr=null,ao=0,e=ce;for(;e!==null;)Ym(e.alternate,e),e=e.return;ce=null}}function Qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ef(),Pe=e,ce=a=Ci(e.current,null),ge=n,Re=0,Hn=null,ga=!1,Yr=be(e,n),gf=!1,Zr=$n=_f=ir=_a=je=0,wn=ho=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Xt(o),f=1<<c;n|=e[c],o&=~f}return Fi=n,rl(),a}function mg(e,n){le=null,O.H=Tl,n===js||n===pl?(n=Lp(),Re=3):n===wp?(n=Lp(),Re=4):Re=n===Nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Hn=n,ce===null&&(je=1,wl(e,Zn(n,e.current)))}function gg(){var e=O.H;return O.H=Tl,e===null?Tl:e}function _g(){var e=O.A;return O.A=wx,e}function Tf(){je=4,ga||(ge&4194048)!==ge&&Jn.current!==null||(Yr=!0),(_a&134217727)===0&&(ir&134217727)===0||Pe===null||Sa(Pe,ge,$n,!1)}function bf(e,n,a){var o=Ae;Ae|=2;var c=gg(),f=_g();(Pe!==e||ge!==n)&&(zl=null,Qr(e,n)),n=!1;var y=je;t:do try{if(Re!==0&&ce!==null){var b=ce,z=Hn;switch(Re){case 8:Ef(),y=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var $=Re;if(Re=0,Hn=null,Jr(e,b,z,$),a&&Yr){y=0;break t}break;default:$=Re,Re=0,Hn=null,Jr(e,b,z,$)}}Lx(),y=je;break}catch(ut){mg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Ui=Qa=null,Ae=o,O.H=c,O.A=f,ce===null&&(Pe=null,ge=0,rl()),y}function Lx(){for(;ce!==null;)vg(ce)}function Nx(e,n){var a=Ae;Ae|=2;var o=gg(),c=_g();Pe!==e||ge!==n?(zl=null,Pl=ye()+500,Qr(e,n)):Yr=be(e,n);t:do try{if(Re!==0&&ce!==null){n=ce;var f=Hn;e:switch(Re){case 1:Re=0,Hn=null,Jr(e,n,f,1);break;case 2:case 9:if(Dp(f)){Re=0,Hn=null,xg(n);break}n=function(){Re!==2&&Re!==9||Pe!==e||(Re=7),_i(e)},f.then(n,n);break t;case 3:Re=7;break t;case 4:Re=5;break t;case 7:Dp(f)?(Re=0,Hn=null,xg(n)):(Re=0,Hn=null,Jr(e,n,f,7));break;case 5:var y=null;switch(ce.tag){case 26:y=ce.memoizedState;case 5:case 27:var b=ce;if(!y||t_(y)){Re=0,Hn=null;var z=b.sibling;if(z!==null)ce=z;else{var $=b.return;$!==null?(ce=$,Bl($)):ce=null}break e}}Re=0,Hn=null,Jr(e,n,f,5);break;case 6:Re=0,Hn=null,Jr(e,n,f,6);break;case 8:Ef(),je=6;break t;default:throw Error(r(462))}}Ox();break}catch(ut){mg(e,ut)}while(!0);return Ui=Qa=null,O.H=o,O.A=c,Ae=a,ce!==null?0:(Pe=null,ge=0,rl(),je)}function Ox(){for(;ce!==null&&!Ee();)vg(ce)}function vg(e){var n=Wm(e.alternate,e,Fi);e.memoizedProps=e.pendingProps,n===null?Bl(e):ce=n}function xg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fm(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Fm(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Fc(n);default:Ym(a,n),n=ce=Sp(n,Fi),n=Wm(a,n,Fi)}e.memoizedProps=e.pendingProps,n===null?Bl(e):ce=n}function Jr(e,n,a,o){Ui=Qa=null,Fc(n),kr=null,ao=0;var c=n.return;try{if(Ex(e,c,n,a,ge)){je=1,wl(e,Zn(a,e.current)),ce=null;return}}catch(f){if(c!==null)throw ce=c,f;je=1,wl(e,Zn(a,e.current)),ce=null;return}n.flags&32768?(Me||o===1?e=!0:Yr||(ge&536870912)!==0?e=!1:(ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Sg(n,e)):Bl(n)}function Bl(e){var n=e;do{if((n.flags&32768)!==0){Sg(n,ga);return}e=n.return;var a=bx(n.alternate,n,Fi);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=e}while(n!==null);je===0&&(je=5)}function Sg(e,n){do{var a=Ax(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);je=6,ce=null}function yg(e,n,a,o,c,f,y,b,z){e.cancelPendingCommit=null;do Fl();while(_n!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pc,Qt(e,a,f,y,b,z),e===Pe&&(ce=Pe=null,ge=0),jr=n,xa=e,Kr=a,Sf=f,yf=c,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bx(A,function(){return Ag(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=Z.p,Z.p=2,y=Ae,Ae|=4;try{Rx(e,n,a)}finally{Ae=y,Z.p=c,O.T=o}}_n=1,Mg(),Eg(),Tg()}}function Mg(){if(_n===1){_n=0;var e=xa,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=Z.p;Z.p=2;var c=Ae;Ae|=4;try{ag(n,e);var f=If,y=cp(e.containerInfo),b=f.focusedElem,z=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&up(b.ownerDocument.documentElement,b)){if(z!==null&&uc(b)){var $=z.start,ut=z.end;if(ut===void 0&&(ut=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ut,b.value.length);else{var mt=b.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var it=et.getSelection(),$t=b.textContent.length,Zt=Math.min(z.start,$t),Ue=z.end===void 0?Zt:Math.min(z.end,$t);!it.extend&&Zt>Ue&&(y=Ue,Ue=Zt,Zt=y);var W=lp(b,Zt),G=lp(b,Ue);if(W&&G&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var Q=mt.createRange();Q.setStart(W.node,W.offset),it.removeAllRanges(),Zt>Ue?(it.addRange(Q),it.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),it.addRange(Q))}}}}for(mt=[],it=b;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var dt=mt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Ql=!!zf,If=zf=null}finally{Ae=c,Z.p=o,O.T=a}}e.current=n,_n=2}}function Eg(){if(_n===2){_n=0;var e=xa,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=Z.p;Z.p=2;var c=Ae;Ae|=4;try{tg(e,n.alternate,n)}finally{Ae=c,Z.p=o,O.T=a}}_n=3}}function Tg(){if(_n===4||_n===3){_n=0,kt();var e=xa,n=jr,a=Kr,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,jr=xa=null,bg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(va=null),pe(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Vt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=Z.p,Z.p=2,O.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var b=o[y];f(b.value,{componentStack:b.stack})}}finally{O.T=n,Z.p=c}}(Kr&3)!==0&&Fl(),_i(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Mf?po++:(po=0,Mf=e):po=0,mo(0)}}function bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ys(n)))}function Fl(e){return Mg(),Eg(),Tg(),Ag()}function Ag(){if(_n!==5)return!1;var e=xa,n=Sf;Sf=0;var a=pe(Kr),o=O.T,c=Z.p;try{Z.p=32>a?32:a,O.T=null,a=yf,yf=null;var f=xa,y=Kr;if(_n=0,jr=xa=null,Kr=0,(Ae&6)!==0)throw Error(r(331));var b=Ae;if(Ae|=4,ug(f.current),sg(f,f.current,y,a),Ae=b,mo(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Vt,f)}catch{}return!0}finally{Z.p=c,O.T=o,bg(e,n)}}function Rg(e,n,a){n=Zn(a,n),n=$c(e.stateNode,n,2),e=ua(e,n,2),e!==null&&(Ct(e,2),_i(e))}function Ne(e,n,a){if(e.tag===3)Rg(e,e,a);else for(;n!==null;){if(n.tag===3){Rg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(va===null||!va.has(o))){e=Zn(a,e),a=Um(2),o=ua(n,a,2),o!==null&&(Lm(a,o,n,e),Ct(o,2),_i(o));break}}n=n.return}}function Af(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Dx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(gf=!0,c.add(a),e=Px.bind(null,e,n,a),n.then(e,e))}function Px(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Pe===e&&(ge&a)===a&&(je===4||je===3&&(ge&62914560)===ge&&300>ye()-xf?(Ae&2)===0&&Qr(e,0):_f|=a,Zr===ge&&(Zr=0)),_i(e)}function Cg(e,n){n===0&&(n=pt()),e=Nr(e,n),e!==null&&(Ct(e,n),_i(e))}function zx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(e,a)}function Ix(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Cg(e,a)}function Bx(e,n){return He(e,n)}var Hl=null,$r=null,Rf=!1,Gl=!1,Cf=!1,ar=0;function _i(e){e!==$r&&e.next===null&&($r===null?Hl=$r=e:$r=$r.next=e),Gl=!0,Rf||(Rf=!0,Hx())}function mo(e,n){if(!Cf&&Gl){Cf=!0;do for(var a=!1,o=Hl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Xt(42|e)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Lg(o,f))}else f=ge,f=ne(o,o===Pe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||be(o,f)||(a=!0,Lg(o,f));o=o.next}while(a);Cf=!1}}function Fx(){wg()}function wg(){Gl=Rf=!1;var e=0;ar!==0&&(Zx()&&(e=ar),ar=0);for(var n=ye(),a=null,o=Hl;o!==null;){var c=o.next,f=Dg(o,n);f===0?(o.next=null,a===null?Hl=c:a.next=c,c===null&&($r=a)):(a=o,(e!==0||(f&3)!==0)&&(Gl=!0)),o=c}mo(e)}function Dg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Xt(f),b=1<<y,z=c[y];z===-1?((b&a)===0||(b&o)!==0)&&(c[y]=X(b,n)):z<=n&&(e.expiredLanes|=b),f&=~b}if(n=Pe,a=ge,a=ne(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ve(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ve(o),pe(a)){case 2:case 8:a=P;break;case 32:a=A;break;case 268435456:a=_t;break;default:a=A}return o=Ug.bind(null,e),a=He(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ve(o),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var o=ge;return o=ne(e,e===Pe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(dg(e,o,n),Dg(e,ye()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(Fl())return null;dg(e,n,!0)}function Hx(){Kx(function(){(Ae&6)!==0?He(ee,Fx):wg()})}function wf(){return ar===0&&(ar=bt()),ar}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function Og(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Gx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ng((c[fn]||null).action),y=o.submitter;y&&(n=(n=y[fn]||null)?Ng(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new nl("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ar!==0){var z=y?Og(c,y):new FormData(c);Zc(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=y?Og(c,y):new FormData(c),Zc(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var Df=0;Df<dc.length;Df++){var Uf=dc[Df],Vx=Uf.toLowerCase(),kx=Uf[0].toUpperCase()+Uf.slice(1);ai(Vx,"on"+kx)}ai(dp,"onAnimationEnd"),ai(pp,"onAnimationIteration"),ai(mp,"onAnimationStart"),ai("dblclick","onDoubleClick"),ai("focusin","onFocus"),ai("focusout","onBlur"),ai(sx,"onTransitionRun"),ai(ox,"onTransitionStart"),ai(lx,"onTransitionCancel"),ai(gp,"onTransitionEnd"),Tt("onMouseEnter",["mouseout","mouseover"]),Tt("onMouseLeave",["mouseout","mouseover"]),Tt("onPointerEnter",["pointerout","pointerover"]),Tt("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Pg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],z=b.instance,$=b.currentTarget;if(b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){Cl(ut)}c.currentTarget=null,f=z}else for(y=0;y<o.length;y++){if(b=o[y],z=b.instance,$=b.currentTarget,b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=$;try{f(c)}catch(ut){Cl(ut)}c.currentTarget=null,f=z}}}}function fe(e,n){var a=n[yr];a===void 0&&(a=n[yr]=new Set);var o=e+"__bubble";a.has(o)||(zg(n,e,2,!1),a.add(o))}function Lf(e,n,a){var o=0;n&&(o|=4),zg(a,e,o,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Vl]){e[Vl]=!0,nt.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Lf(a,!1,e),Lf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Lf("selectionchange",!1,n))}}function zg(e,n,a,o){switch(s_(n)){case 2:var c=_S;break;case 8:c=vS;break;default:c=Yf}a=c.bind(null,n,a,e),c=void 0,!tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Of(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=o.return;y!==null;){var z=y.tag;if((z===3||z===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=na(b),y===null)return;if(z=y.tag,z===5||z===6||z===26||z===27){o=f=y;continue t}b=b.parentNode}}o=o.return}kd(function(){var $=f,ut=Ju(a),mt=[];t:{var et=_p.get(e);if(et!==void 0){var it=nl,$t=e;switch(e){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":it=B0;break;case"focusin":$t="focus",it=ac;break;case"focusout":$t="blur",it=ac;break;case"beforeblur":case"afterblur":it=ac;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=G0;break;case dp:case pp:case mp:it=w0;break;case gp:it=k0;break;case"scroll":case"scrollend":it=T0;break;case"wheel":it=W0;break;case"copy":case"cut":case"paste":it=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Zd;break;case"toggle":case"beforetoggle":it=Y0}var Zt=(n&4)!==0,Ue=!Zt&&(e==="scroll"||e==="scrollend"),W=Zt?et!==null?et+"Capture":null:et;Zt=[];for(var G=$,Q;G!==null;){var dt=G;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||W===null||(dt=Os(G,W),dt!=null&&Zt.push(_o(G,dt,Q))),Ue)break;G=G.return}0<Zt.length&&(et=new it(et,$t,null,a,ut),mt.push({event:et,listeners:Zt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",et&&a!==Qu&&($t=a.relatedTarget||a.fromElement)&&(na($t)||$t[bi]))break t;if((it||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,it?($t=a.relatedTarget||a.toElement,it=$,$t=$t?na($t):null,$t!==null&&(Ue=u($t),Zt=$t.tag,$t!==Ue||Zt!==5&&Zt!==27&&Zt!==6)&&($t=null)):(it=null,$t=$),it!==$t)){if(Zt=qd,dt="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Zd,dt="onPointerLeave",W="onPointerEnter",G="pointer"),Ue=it==null?et:Ga(it),Q=$t==null?et:Ga($t),et=new Zt(dt,G+"leave",it,a,ut),et.target=Ue,et.relatedTarget=Q,dt=null,na(ut)===$&&(Zt=new Zt(W,G+"enter",$t,a,ut),Zt.target=Q,Zt.relatedTarget=Ue,dt=Zt),Ue=dt,it&&$t)e:{for(Zt=it,W=$t,G=0,Q=Zt;Q;Q=ts(Q))G++;for(Q=0,dt=W;dt;dt=ts(dt))Q++;for(;0<G-Q;)Zt=ts(Zt),G--;for(;0<Q-G;)W=ts(W),Q--;for(;G--;){if(Zt===W||W!==null&&Zt===W.alternate)break e;Zt=ts(Zt),W=ts(W)}Zt=null}else Zt=null;it!==null&&Ig(mt,et,it,Zt,!1),$t!==null&&Ue!==null&&Ig(mt,Ue,$t,Zt,!0)}}t:{if(et=$?Ga($):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var Bt=np;else if(tp(et))if(ip)Bt=ix;else{Bt=ex;var ue=tx}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Ku($.elementType)&&(Bt=np):Bt=nx;if(Bt&&(Bt=Bt(e,$))){ep(mt,Bt,a,ut);break t}ue&&ue(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&Tr(et,"number",et.value)}switch(ue=$?Ga($):window,e){case"focusin":(tp(ue)||ue.contentEditable==="true")&&(Dr=ue,cc=$,Vs=null);break;case"focusout":Vs=cc=Dr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,fp(mt,a,ut);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":fp(mt,a,ut)}var Gt;if(sc)t:{switch(e){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else wr?Jd(e,a)&&(Kt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(jd&&a.locale!=="ko"&&(wr||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&wr&&(Gt=Xd()):(ra=ut,ec="value"in ra?ra.value:ra.textContent,wr=!0)),ue=kl($,Kt),0<ue.length&&(Kt=new Yd(Kt,e,null,a,ut),mt.push({event:Kt,listeners:ue}),Gt?Kt.data=Gt:(Gt=$d(a),Gt!==null&&(Kt.data=Gt)))),(Gt=j0?K0(e,a):Q0(e,a))&&(Kt=kl($,"onBeforeInput"),0<Kt.length&&(ue=new Yd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:ue,listeners:Kt}),ue.data=Gt)),Gx(mt,e,$,a,ut)}Pg(mt,n)})}function _o(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Os(e,a),c!=null&&o.unshift(_o(e,c,f)),c=Os(e,n),c!=null&&o.push(_o(e,c,f))),e.tag===3)return o;e=e.return}return[]}function ts(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var b=a,z=b.alternate,$=b.stateNode;if(b=b.tag,z!==null&&z===o)break;b!==5&&b!==26&&b!==27||$===null||(z=$,c?($=Os(a,f),$!=null&&y.unshift(_o(a,$,z))):c||($=Os(a,f),$!=null&&y.push(_o(a,$,z)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Bg(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(qx,"")}function Fg(e,n){return n=Bg(n),Bg(e)===n}function Xl(){}function De(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ar(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ar(e,""+o);break;case"className":Ft(e,"class",o);break;case"tabIndex":Ft(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,a,o);break;case"style":Gd(e,o,f);break;case"data":if(n!=="object"){Ft(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(e,n,"name",c.name,c,null),De(e,n,"formEncType",c.formEncType,c,null),De(e,n,"formMethod",c.formMethod,c,null),De(e,n,"formTarget",c.formTarget,c,null)):(De(e,n,"encType",c.encType,c,null),De(e,n,"method",c.method,c,null),De(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Jo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"onScroll":o!=null&&fe("scroll",e);break;case"onScrollEnd":o!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Yt(e,"popover",o);break;case"xlinkActuate":re(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":re(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":re(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":re(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":re(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":re(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":re(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Yt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M0.get(a)||a,Yt(e,a,o))}}function Pf(e,n,a,o,c,f){switch(a){case"style":Gd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ar(e,o):(typeof o=="number"||typeof o=="bigint")&&Ar(e,""+o);break;case"onScroll":o!=null&&fe("scroll",e);break;case"onScrollEnd":o!=null&&fe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[fn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Yt(e,a,o)}}}function vn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(e,n,f,y,a,null)}}c&&De(e,n,"srcSet",a.srcSet,a,null),o&&De(e,n,"src",a.src,a,null);return;case"input":fe("invalid",e);var b=f=y=c=null,z=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":y=ut;break;case"checked":z=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:De(e,n,o,ut,a,null)}}Qo(e,f,b,z,$,y,c,!1),aa(e);return;case"select":fe("invalid",e),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:De(e,n,c,b,a,null)}n=f,a=y,e.multiple=!!o,n!=null?br(e,!!o,n,!1):a!=null&&br(e,!!o,a,!0);return;case"textarea":fe("invalid",e),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:De(e,n,y,b,a,null)}Fd(e,o,c,f),aa(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:De(e,n,z,o,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(o=0;o<go.length;o++)fe(go[o],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(e,n,$,o,a,null)}return;default:if(Ku(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Pf(e,n,ut,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&De(e,n,b,o,a,null))}function Yx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,z=null,$=null,ut=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":z=mt;default:o.hasOwnProperty(it)||De(e,n,it,null,o,mt)}}for(var et in o){var it=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(it!=null||mt!=null))switch(et){case"type":f=it;break;case"name":c=it;break;case"checked":$=it;break;case"defaultChecked":ut=it;break;case"value":y=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==mt&&De(e,n,et,it,o,mt)}}Va(e,y,b,z,$,ut,f,c);return;case"select":it=y=b=et=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":it=z;default:o.hasOwnProperty(f)||De(e,n,f,null,o,z)}for(c in o)if(f=o[c],z=a[c],o.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":et=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==z&&De(e,n,c,f,o,z)}n=b,a=y,o=it,et!=null?br(e,!!a,et,!1):!!o!=!!a&&(n!=null?br(e,!!a,n,!0):br(e,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:De(e,n,b,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":et=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&De(e,n,y,c,o,f)}Bd(e,et,it);return;case"option":for(var $t in a)if(et=a[$t],a.hasOwnProperty($t)&&et!=null&&!o.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:De(e,n,$t,null,o,et)}for(z in o)if(et=o[z],it=a[z],o.hasOwnProperty(z)&&et!==it&&(et!=null||it!=null))switch(z){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:De(e,n,z,et,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)et=a[Zt],a.hasOwnProperty(Zt)&&et!=null&&!o.hasOwnProperty(Zt)&&De(e,n,Zt,null,o,et);for($ in o)if(et=o[$],it=a[$],o.hasOwnProperty($)&&et!==it&&(et!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:De(e,n,$,et,o,it)}return;default:if(Ku(n)){for(var Ue in a)et=a[Ue],a.hasOwnProperty(Ue)&&et!==void 0&&!o.hasOwnProperty(Ue)&&Pf(e,n,Ue,void 0,o,et);for(ut in o)et=o[ut],it=a[ut],!o.hasOwnProperty(ut)||et===it||et===void 0&&it===void 0||Pf(e,n,ut,et,o,it);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!o.hasOwnProperty(W)&&De(e,n,W,null,o,et);for(mt in o)et=o[mt],it=a[mt],!o.hasOwnProperty(mt)||et===it||et==null&&it==null||De(e,n,mt,et,o,it)}var zf=null,If=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function Hg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Zx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var Vg=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,kg=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof kg<"u"?function(e){return kg.resolve(null).then(e).catch(Qx)}:Vg;function Qx(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function Xg(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&vo(y.documentElement),a&2&&vo(y.body),a&4)for(a=y.head,vo(a),y=a.firstChild;y;){var b=y.nextSibling,z=y.nodeName;y[ea]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){e.removeChild(f),Ao(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Ao(n)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ea])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function $x(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function tS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Vf=null;function Wg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function qg(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function vo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Er(e)}var ti=new Map,Yg=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=Z.d;Z.d={f:eS,r:nS,D:iS,C:aS,L:rS,m:sS,X:lS,S:oS,M:uS};function eS(){var e=Hi.f(),n=Il();return e||n}function nS(e){var n=ia(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):Hi.r(e)}var es=typeof document>"u"?null:document;function Zg(e,n,a){var o=es;if(o&&typeof n=="string"&&n){var c=Ie(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yg.has(c)||(Yg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),vn(n,"link",e),V(n),o.head.appendChild(n)))}}function iS(e){Hi.D(e),Zg("dns-prefetch",e,null)}function aS(e,n){Hi.C(e,n),Zg("preconnect",e,n)}function rS(e,n,a){Hi.L(e,n,a);var o=es;if(o&&e&&n){var c='link[rel="preload"][as="'+Ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ie(a.imageSizes)+'"]')):c+='[href="'+Ie(e)+'"]';var f=c;switch(n){case"style":f=ns(e);break;case"script":f=is(e)}ti.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ti.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(xo(f))||n==="script"&&o.querySelector(So(f))||(n=o.createElement("link"),vn(n,"link",e),V(n),o.head.appendChild(n)))}}function sS(e,n){Hi.m(e,n);var a=es;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ie(o)+'"][href="'+Ie(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!ti.has(f)&&(e=g({rel:"modulepreload",href:e},n),ti.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}o=a.createElement("link"),vn(o,"link",e),V(o),a.head.appendChild(o)}}}function oS(e,n,a){Hi.S(e,n,a);var o=es;if(o&&e){var c=C(o).hoistableStyles,f=ns(e);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(xo(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ti.get(f))&&kf(e,a);var z=y=o.createElement("link");V(z),vn(z,"link",e),z._p=new Promise(function($,ut){z.onload=$,z.onerror=ut}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function lS(e,n){Hi.X(e,n);var a=es;if(a&&e){var o=C(a).hoistableScripts,c=is(e),f=o.get(c);f||(f=a.querySelector(So(c)),f||(e=g({src:e,async:!0},n),(n=ti.get(c))&&Xf(e,n),f=a.createElement("script"),V(f),vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function uS(e,n){Hi.M(e,n);var a=es;if(a&&e){var o=C(a).hoistableScripts,c=is(e),f=o.get(c);f||(f=a.querySelector(So(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ti.get(c))&&Xf(e,n),f=a.createElement("script"),V(f),vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function jg(e,n,a,o){var c=(c=vt.current)?ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=C(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var f=C(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(xo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ti.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ti.set(e,a),f||cS(c,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=C(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ns(e){return'href="'+Ie(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function cS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),vn(n,"link",a),V(n),e.head.appendChild(n))}function is(e){return'[src="'+Ie(e)+'"]'}function So(e){return"script[async]"+e}function Qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ie(a.href)+'"]');if(o)return n.instance=o,V(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),V(o),vn(o,"style",c),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":c=ns(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,V(f),f;o=Kg(a),(c=ti.get(c))&&kf(o,c),f=(e.ownerDocument||e).createElement("link"),V(f);var y=f;return y._p=new Promise(function(b,z){y.onload=b,y.onerror=z}),vn(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=is(a.src),(c=e.querySelector(So(f)))?(n.instance=c,V(c),c):(o=a,(c=ti.get(f))&&(o=g({},a),Xf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),V(c),vn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function Jg(e,n,a){if(Zl===null){var o=new Map,c=Zl=new Map;c.set(a,o)}else c=Zl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[ea]||f[Ge]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var b=o.get(y);b?b.push(f):o.set(y,[f])}}return o}function $g(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var yo=null;function hS(){}function dS(e,n,a){if(yo===null)throw Error(r(475));var o=yo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ns(a.href),f=e.querySelector(xo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=jl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,V(f);return}f=e.ownerDocument||e,a=Kg(a),(c=ti.get(c))&&kf(a,c),f=f.createElement("link"),V(f);var y=f;y._p=new Promise(function(b,z){y.onload=b,y.onerror=z}),vn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=jl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function pS(){if(yo===null)throw Error(r(475));var e=yo;return e.stylesheets&&e.count===0&&Wf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function jl(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Wf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(mS,e),Kl=null,jl.call(e))}function mS(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=jl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:w,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function gS(e,n,a,o,c,f,y,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.hiddenUpdates=gt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function e_(e,n,a,o,c,f,y,b,z,$,ut,mt){return e=new gS(e,n,a,y,b,z,$,mt),n=1,f===!0&&(n|=24),f=In(3,null,null,n),e.current=f,f.stateNode=e,n=bc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wc(f),e}function n_(e){return e?(e=Or,e):Or}function i_(e,n,a,o,c,f){c=n_(c),o.context===null?o.context=c:o.pendingContext=c,o=la(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ua(e,o,n),a!==null&&(Vn(a,e,n),Qs(a,e,n))}function a_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){a_(e,n),(e=e.alternate)&&a_(e,n)}function r_(e){if(e.tag===13){var n=Nr(e,67108864);n!==null&&Vn(n,e,67108864),qf(e,67108864)}}var Ql=!0;function _S(e,n,a,o){var c=O.T;O.T=null;var f=Z.p;try{Z.p=2,Yf(e,n,a,o)}finally{Z.p=f,O.T=c}}function vS(e,n,a,o){var c=O.T;O.T=null;var f=Z.p;try{Z.p=8,Yf(e,n,a,o)}finally{Z.p=f,O.T=c}}function Yf(e,n,a,o){if(Ql){var c=Zf(o);if(c===null)Of(e,n,o,Jl,a),o_(e,o);else if(SS(c,e,n,a,o))o.stopPropagation();else if(o_(e,o),n&4&&-1<xS.indexOf(e)){for(;c!==null;){var f=ia(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=qt(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var z=1<<31-Xt(y);b.entanglements[1]|=z,y&=~z}_i(f),(Ae&6)===0&&(Pl=ye()+500,mo(0))}}break;case 13:b=Nr(f,2),b!==null&&Vn(b,f,2),Il(),qf(f,2)}if(f=Zf(o),f===null&&Of(e,n,o,Jl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Of(e,n,o,null,a)}}function Zf(e){return e=Ju(e),jf(e)}var Jl=null;function jf(e){if(Jl=null,e=na(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function s_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case ee:return 2;case P:return 8;case A:case ot:return 32;case _t:return 268435456;default:return 32}default:return 32}}var Kf=!1,Ma=null,Ea=null,Ta=null,Eo=new Map,To=new Map,ba=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,n){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ia(n),n!==null&&r_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function SS(e,n,a,o,c){switch(n){case"focusin":return Ma=bo(Ma,e,n,a,o,c),!0;case"dragenter":return Ea=bo(Ea,e,n,a,o,c),!0;case"mouseover":return Ta=bo(Ta,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,o,c)),!0}return!1}function l_(e){var n=na(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Yn(e.priority,function(){if(a.tag===13){var o=Gn();o=Qe(o);var c=Nr(a,o);c!==null&&Vn(c,a,o),qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Qu=o,a.target.dispatchEvent(o),Qu=null}else return n=ia(a),n!==null&&r_(n),e.blockedOn=a,!1;n.shift()}return!0}function u_(e,n,a){$l(e)&&a.delete(n)}function yS(){Kf=!1,Ma!==null&&$l(Ma)&&(Ma=null),Ea!==null&&$l(Ea)&&(Ea=null),Ta!==null&&$l(Ta)&&(Ta=null),Eo.forEach(u_),To.forEach(u_)}function tu(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yS)))}var eu=null;function c_(e){eu!==e&&(eu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){eu===e&&(eu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(jf(o||a)===null)continue;break}var f=ia(a);f!==null&&(e.splice(n,3),n-=3,Zc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ao(e){function n(z){return tu(z,e)}Ma!==null&&tu(Ma,e),Ea!==null&&tu(Ea,e),Ta!==null&&tu(Ta,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<ba.length;a++){var o=ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ba.length&&(a=ba[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[fn]||null;if(typeof f=="function")y||c_(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[fn]||null)b=y.formAction;else if(jf(c)!==null)continue}else b=y.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),c_(a)}}}function Qf(e){this._internalRoot=e}nu.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Gn();i_(a,o,e,n,null,null)},nu.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;i_(e.current,2,null,e,null,null),Il(),n[bi]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var n=qn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ba.length&&n!==0&&n<ba[a].priority;a++);ba.splice(a,0,e),a===0&&l_(e)}};var f_=t.version;if(f_!=="19.1.0")throw Error(r(527,f_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var MS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Vt=iu.inject(MS),At=iu}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Rm,f=Cm,y=wm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=e_(e,1,!1,null,null,a,o,c,f,y,b,null),e[bi]=n.current,Nf(e),new Qf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=Rm,y=Cm,b=wm,z=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=e_(e,1,!0,n,a??null,o,c,f,y,b,z,$),n.context=n_(null),a=n.current,o=Gn(),o=Qe(o),c=la(o),c.callback=null,ua(a,c,o),a=o,n.current.lanes=a,Ct(n,a),_i(n),e[bi]=n.current,Nf(e),new nu(n)},Co.version="19.1.0",Co}var y_;function NS(){if(y_)return th.exports;y_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),th.exports=LS(),th.exports}var OS=NS();const PS=Rv(OS);var wo={},M_;function zS(){if(M_)return wo;M_=1,Object.defineProperty(wo,"__esModule",{value:!0}),wo.parse=h,wo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function h(v,M){const E=new u,T=v.length;if(T<2)return E;const S=M?.decode||g;let _=0;do{const L=v.indexOf("=",_);if(L===-1)break;const w=v.indexOf(";",_),N=w===-1?T:w;if(L>N){_=v.lastIndexOf(";",L-1)+1;continue}const k=d(v,_,L),B=m(v,L,k),I=v.slice(k,B);if(E[I]===void 0){let Y=d(v,L+1,N),D=m(v,N,Y);const R=S(v.slice(Y,D));E[I]=R}_=N+1}while(_<T);return E}function d(v,M,E){do{const T=v.charCodeAt(M);if(T!==32&&T!==9)return M}while(++M<E);return E}function m(v,M,E){for(;M>E;){const T=v.charCodeAt(--M);if(T!==32&&T!==9)return M+1}return E}function p(v,M,E){const T=E?.encode||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=T(M);if(!t.test(S))throw new TypeError(`argument val is invalid: ${M}`);let _=v+"="+S;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return wo}zS();var E_="popstate";function IS(s={}){function t(l,u){let{pathname:h="/",search:d="",hash:m=""}=xr(l.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),zh("",{pathname:h,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let h=l.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");d=p===-1?m:m.slice(0,p)}return d+"#"+(typeof u=="string"?u:Ho(u))}function r(l,u){hi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return FS(t,i,r,s)}function Ye(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function hi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function BS(){return Math.random().toString(36).substring(2,10)}function T_(s,t){return{usr:s.state,key:s.key,idx:t}}function zh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?xr(t):t,state:i,key:t&&t.key||r||BS()}}function Ho({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function xr(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function FS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=g();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function g(){return(h.state||{idx:null}).idx}function x(){d="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:d,location:T.location,delta:_})}function v(S,_){d="PUSH";let L=zh(T.location,S,_);i&&i(L,S),p=g()+1;let w=T_(L,p),N=T.createHref(L);try{h.pushState(w,"",N)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(N)}u&&m&&m({action:d,location:T.location,delta:1})}function M(S,_){d="REPLACE";let L=zh(T.location,S,_);i&&i(L,S),p=g();let w=T_(L,p),N=T.createHref(L);h.replaceState(w,"",N),u&&m&&m({action:d,location:T.location,delta:0})}function E(S){return HS(S)}let T={get action(){return d},get location(){return s(l,h)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(E_,x),m=S,()=>{l.removeEventListener(E_,x),m=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:M,go(S){return h.go(S)}};return T}function HS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Ho(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Cv(s,t,i="/"){return GS(s,t,i,!1)}function GS(s,t,i,r){let l=typeof t=="string"?xr(t):t,u=Qi(l.pathname||"/",i);if(u==null)return null;let h=wv(s);VS(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=$S(u);d=QS(h[m],p,r)}return d}function wv(s,t=[],i=[],r=""){let l=(u,h,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(Ye(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=Ki([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(Ye(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),wv(u.children,t,g,p)),!(u.path==null&&!u.index)&&t.push({path:p,score:jS(p,u.index),routesMeta:g})};return s.forEach((u,h)=>{if(u.path===""||!u.path?.includes("?"))l(u,h);else for(let d of Dv(u.path))l(u,h,d)}),t}function Dv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=Dv(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function VS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:KS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var kS=/^:[\w-]+$/,XS=3,WS=2,qS=1,YS=10,ZS=-2,b_=s=>s==="*";function jS(s,t){let i=s.split("/"),r=i.length;return i.some(b_)&&(r+=ZS),t&&(r+=WS),i.filter(l=>!b_(l)).reduce((l,u)=>l+(kS.test(u)?XS:u===""?qS:YS),r)}function KS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function QS(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",x=zu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=zu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),h.push({params:l,pathname:Ki([u,x.pathname]),pathnameBase:iy(Ki([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=Ki([u,x.pathnameBase]))}return h}function zu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=JS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";h=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return x&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function JS(s,t=!1,i=!0){hi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function $S(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Qi(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function ty(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?xr(s):s;return{pathname:i?i.startsWith("/")?i:ey(i,t):t,search:ay(r),hash:ry(l)}}function ey(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ah(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ny(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Uv(s){let t=ny(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Lv(s,t,i,r=!1){let l;typeof s=="string"?l=xr(s):(l={...s},Ye(!l.pathname||!l.pathname.includes("?"),ah("?","pathname","search",l)),Ye(!l.pathname||!l.pathname.includes("#"),ah("#","pathname","hash",l)),Ye(!l.search||!l.search.includes("#"),ah("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let x=t.length-1;if(!r&&h.startsWith("..")){let v=h.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let m=ty(l,d),p=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var Ki=s=>s.join("/").replace(/\/\/+/g,"/"),iy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ry=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function sy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Nv=["POST","PUT","PATCH","DELETE"];new Set(Nv);var oy=["GET",...Nv];new Set(oy);var Ds=ht.createContext(null);Ds.displayName="DataRouter";var ku=ht.createContext(null);ku.displayName="DataRouterState";var Ov=ht.createContext({isTransitioning:!1});Ov.displayName="ViewTransition";var ly=ht.createContext(new Map);ly.displayName="Fetchers";var uy=ht.createContext(null);uy.displayName="Await";var Ti=ht.createContext(null);Ti.displayName="Navigation";var Vo=ht.createContext(null);Vo.displayName="Location";var ta=ht.createContext({outlet:null,matches:[],isDataRoute:!1});ta.displayName="Route";var Sd=ht.createContext(null);Sd.displayName="RouteError";function cy(s,{relative:t}={}){Ye(ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ht.useContext(Ti),{hash:l,pathname:u,search:h}=Xo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:Ki([i,u])),r.createHref({pathname:d,search:h,hash:l})}function ko(){return ht.useContext(Vo)!=null}function Sr(){return Ye(ko(),"useLocation() may be used only in the context of a <Router> component."),ht.useContext(Vo).location}var Pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zv(s){ht.useContext(Ti).static||ht.useLayoutEffect(s)}function fy(){let{isDataRoute:s}=ht.useContext(ta);return s?Ty():hy()}function hy(){Ye(ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=ht.useContext(Ds),{basename:t,navigator:i}=ht.useContext(Ti),{matches:r}=ht.useContext(ta),{pathname:l}=Sr(),u=JSON.stringify(Uv(r)),h=ht.useRef(!1);return zv(()=>{h.current=!0}),ht.useCallback((m,p={})=>{if(hi(h.current,Pv),!h.current)return;if(typeof m=="number"){i.go(m);return}let g=Lv(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ki([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,u,l,s])}ht.createContext(null);function Xo(s,{relative:t}={}){let{matches:i}=ht.useContext(ta),{pathname:r}=Sr(),l=JSON.stringify(Uv(i));return ht.useMemo(()=>Lv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function dy(s,t){return Iv(s,t)}function Iv(s,t,i,r){Ye(ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=ht.useContext(Ti),{matches:u}=ht.useContext(ta),h=u[u.length-1],d=h?h.params:{},m=h?h.pathname:"/",p=h?h.pathnameBase:"/",g=h&&h.route;{let _=g&&g.path||"";Bv(m,!g||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let x=Sr(),v;if(t){let _=typeof t=="string"?xr(t):t;Ye(p==="/"||_.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=x;let M=v.pathname||"/",E=M;if(p!=="/"){let _=p.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(_.length).join("/")}let T=Cv(s,{pathname:E});hi(g||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),hi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=vy(T&&T.map(_=>Object.assign({},_,{params:Object.assign({},d,_.params),pathname:Ki([p,l.encodeLocation?l.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?p:Ki([p,l.encodeLocation?l.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),u,i,r);return t&&S?ht.createElement(Vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function py(){let s=Ey(),t=sy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=ht.createElement(ht.Fragment,null,ht.createElement("p",null,"💿 Hey developer 👋"),ht.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ht.createElement("code",{style:u},"ErrorBoundary")," or"," ",ht.createElement("code",{style:u},"errorElement")," prop on your route.")),ht.createElement(ht.Fragment,null,ht.createElement("h2",null,"Unexpected Application Error!"),ht.createElement("h3",{style:{fontStyle:"italic"}},t),i?ht.createElement("pre",{style:l},i):null,h)}var my=ht.createElement(py,null),gy=class extends ht.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ht.createElement(ta.Provider,{value:this.props.routeContext},ht.createElement(Sd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _y({routeContext:s,match:t,children:i}){let r=ht.useContext(Ds);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ht.createElement(ta.Provider,{value:s},i)}function vy(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i?.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&u?.[p.route.id]!==void 0);Ye(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let h=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:x}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){h=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,v=!1,M=null,E=null;i&&(x=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||my,h&&(d<0&&g===0?(Bv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,g+1)),S=()=>{let _;return x?_=M:v?_=E:p.route.Component?_=ht.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,ht.createElement(_y,{match:p,routeContext:{outlet:m,matches:T,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?ht.createElement(gy,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:S(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):S()},null)}function yd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xy(s){let t=ht.useContext(Ds);return Ye(t,yd(s)),t}function Sy(s){let t=ht.useContext(ku);return Ye(t,yd(s)),t}function yy(s){let t=ht.useContext(ta);return Ye(t,yd(s)),t}function Md(s){let t=yy(s),i=t.matches[t.matches.length-1];return Ye(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function My(){return Md("useRouteId")}function Ey(){let s=ht.useContext(Sd),t=Sy("useRouteError"),i=Md("useRouteError");return s!==void 0?s:t.errors?.[i]}function Ty(){let{router:s}=xy("useNavigate"),t=Md("useNavigate"),i=ht.useRef(!1);return zv(()=>{i.current=!0}),ht.useCallback(async(l,u={})=>{hi(i.current,Pv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var A_={};function Bv(s,t,i){!t&&!A_[s]&&(A_[s]=!0,hi(!1,i))}ht.memo(by);function by({routes:s,future:t,state:i}){return Iv(s,void 0,i,t)}function Ih(s){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ay({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Ye(!ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=ht.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=xr(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=i,M=ht.useMemo(()=>{let E=Qi(m,h);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:r}},[h,m,p,g,x,v,r]);return hi(M!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:ht.createElement(Ti.Provider,{value:d},ht.createElement(Vo.Provider,{children:t,value:M}))}function Ry({children:s,location:t}){return dy(Bh(s),t)}function Bh(s,t=[]){let i=[];return ht.Children.forEach(s,(r,l)=>{if(!ht.isValidElement(r))return;let u=[...t,l];if(r.type===ht.Fragment){i.push.apply(i,Bh(r.props.children,u));return}Ye(r.type===Ih,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=Bh(r.props.children,u)),i.push(h)}),i}var Cu="get",wu="application/x-www-form-urlencoded";function Xu(s){return s!=null&&typeof s.tagName=="string"}function Cy(s){return Xu(s)&&s.tagName.toLowerCase()==="button"}function wy(s){return Xu(s)&&s.tagName.toLowerCase()==="form"}function Dy(s){return Xu(s)&&s.tagName.toLowerCase()==="input"}function Uy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ly(s,t){return s.button===0&&(!t||t==="_self")&&!Uy(s)}var au=null;function Ny(){if(au===null)try{new FormData(document.createElement("form"),0),au=!1}catch{au=!0}return au}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rh(s){return s!=null&&!Oy.has(s)?(hi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wu}"`),null):s}function Py(s,t){let i,r,l,u,h;if(wy(s)){let d=s.getAttribute("action");r=d?Qi(d,t):null,i=s.getAttribute("method")||Cu,l=rh(s.getAttribute("enctype"))||wu,u=new FormData(s)}else if(Cy(s)||Dy(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?Qi(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Cu,l=rh(s.getAttribute("formenctype"))||rh(d.getAttribute("enctype"))||wu,u=new FormData(d,s),!Ny()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,x)}}else{if(Xu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Cu,r=null,l=wu,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}function Ed(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function zy(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Iy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function By(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let h=await zy(u,i);return h.links?h.links():[]}return[]}));return Vy(r.flat(1).filter(Iy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function R_(s,t,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Fy(s,t,{includeHydrateFallback:i}={}){return Hy(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Hy(s){return[...new Set(s)]}function Gy(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Vy(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(Gy(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ky=new Set([100,101,204,205]);function Xy(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&Qi(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Fv(){let s=ht.useContext(Ds);return Ed(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Wy(){let s=ht.useContext(ku);return Ed(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Td=ht.createContext(void 0);Td.displayName="FrameworkContext";function Hv(){let s=ht.useContext(Td);return Ed(s,"You must render this element inside a <HydratedRouter> element"),s}function qy(s,t){let i=ht.useContext(Td),[r,l]=ht.useState(!1),[u,h]=ht.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=t,v=ht.useRef(null);ht.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let T=_=>{_.forEach(L=>{h(L.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),ht.useEffect(()=>{if(r){let T=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Do(d,M),onBlur:Do(m,E),onMouseEnter:Do(p,M),onMouseLeave:Do(g,E),onTouchStart:Do(x,M)}]:[!1,v,{}]}function Do(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function Yy({page:s,...t}){let{router:i}=Fv(),r=ht.useMemo(()=>Cv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ht.createElement(jy,{page:s,matches:r,...t}):null}function Zy(s){let{manifest:t,routeModules:i}=Hv(),[r,l]=ht.useState([]);return ht.useEffect(()=>{let u=!1;return By(s,t,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,t,i]),r}function jy({page:s,matches:t,...i}){let r=Sr(),{manifest:l,routeModules:u}=Hv(),{basename:h}=Fv(),{loaderData:d,matches:m}=Wy(),p=ht.useMemo(()=>R_(s,t,m,l,r,"data"),[s,t,m,l,r]),g=ht.useMemo(()=>R_(s,t,m,l,r,"assets"),[s,t,m,l,r]),x=ht.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(t.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(w=>w.route.id===_.route.id)&&_.route.id in d&&u[_.route.id]?.shouldRevalidate||L.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let S=Xy(s,h);return T&&E.size>0&&S.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[h,d,r,l,p,t,s,u]),v=ht.useMemo(()=>Fy(g,l),[g,l]),M=Zy(g);return ht.createElement(ht.Fragment,null,x.map(E=>ht.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>ht.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:T})=>ht.createElement("link",{key:E,...T})))}function Ky(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Gv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gv&&(window.__reactRouterVersion="7.6.3")}catch{}function Qy({basename:s,children:t,window:i}){let r=ht.useRef();r.current==null&&(r.current=IS({window:i,v5Compat:!0}));let l=r.current,[u,h]=ht.useState({action:l.action,location:l.location}),d=ht.useCallback(m=>{ht.startTransition(()=>h(m))},[h]);return ht.useLayoutEffect(()=>l.listen(d),[l,d]),ht.createElement(Ay,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kv=ht.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},M){let{basename:E}=ht.useContext(Ti),T=typeof p=="string"&&Vv.test(p),S,_=!1;if(typeof p=="string"&&T&&(S=p,Gv))try{let D=new URL(window.location.href),R=p.startsWith("//")?new URL(D.protocol+p):new URL(p),H=Qi(R.pathname,E);R.origin===D.origin&&H!=null?p=H+R.search+R.hash:_=!0}catch{hi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=cy(p,{relative:l}),[w,N,k]=qy(r,v),B=eM(p,{replace:h,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:x});function I(D){t&&t(D),D.defaultPrevented||B(D)}let Y=ht.createElement("a",{...v,...k,href:S||L,onClick:_||u?t:I,ref:Ky(M,N),target:m,"data-discover":!T&&i==="render"?"true":void 0});return w&&!T?ht.createElement(ht.Fragment,null,Y,ht.createElement(Yy,{page:L})):Y});kv.displayName="Link";var Jy=ht.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},g){let x=Xo(h,{relative:p.relative}),v=Sr(),M=ht.useContext(ku),{navigator:E,basename:T}=ht.useContext(Ti),S=M!=null&&sM(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,L=v.pathname,w=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),w=w?w.toLowerCase():null,_=_.toLowerCase()),w&&T&&(w=Qi(w,T)||w);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let k=L===_||!l&&L.startsWith(_)&&L.charAt(N)==="/",B=w!=null&&(w===_||!l&&w.startsWith(_)&&w.charAt(_.length)==="/"),I={isActive:k,isPending:B,isTransitioning:S},Y=k?t:void 0,D;typeof r=="function"?D=r(I):D=[r,k?"active":null,B?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof u=="function"?u(I):u;return ht.createElement(kv,{...p,"aria-current":Y,className:D,ref:g,style:R,to:h,viewTransition:d},typeof m=="function"?m(I):m)});Jy.displayName="NavLink";var $y=ht.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Cu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},M)=>{let E=aM(),T=rM(d,{relative:p}),S=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Vv.test(d),L=w=>{if(m&&m(w),w.defaultPrevented)return;w.preventDefault();let N=w.nativeEvent.submitter,k=N?.getAttribute("formmethod")||h;E(N||w.currentTarget,{fetcherKey:t,method:k,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:x})};return ht.createElement("form",{ref:M,method:S,action:T,onSubmit:r?m:L,...v,"data-discover":!_&&s==="render"?"true":void 0})});$y.displayName="Form";function tM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xv(s){let t=ht.useContext(Ds);return Ye(t,tM(s)),t}function eM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=fy(),m=Sr(),p=Xo(s,{relative:u});return ht.useCallback(g=>{if(Ly(g,t)){g.preventDefault();let x=i!==void 0?i:Ho(m)===Ho(p);d(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,t,s,l,u,h])}var nM=0,iM=()=>`__${String(++nM)}__`;function aM(){let{router:s}=Xv("useSubmit"),{basename:t}=ht.useContext(Ti),i=My();return ht.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=Py(r,t);if(l.navigate===!1){let g=l.fetcherKey||iM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function rM(s,{relative:t}={}){let{basename:i}=ht.useContext(Ti),r=ht.useContext(ta);Ye(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Xo(s||".",{relative:t})},h=Sr();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Ki([i,u.pathname])),Ho(u)}function sM(s,t={}){let i=ht.useContext(Ov);Ye(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xv("useViewTransitionState"),l=Xo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=Qi(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=Qi(i.nextLocation.pathname,r)||i.nextLocation.pathname;return zu(l.pathname,h)!=null||zu(l.pathname,u)!=null}[...ky];/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="168",oM=0,C_=1,lM=2,Wv=1,uM=2,qi=3,za=0,Ln=1,Yi=2,Oa=0,Ms=1,w_=2,D_=3,U_=4,cM=5,dr=100,fM=101,hM=102,dM=103,pM=104,mM=200,gM=201,_M=202,vM=203,Fh=204,Hh=205,xM=206,SM=207,yM=208,MM=209,EM=210,TM=211,bM=212,AM=213,RM=214,CM=0,wM=1,DM=2,Iu=3,UM=4,LM=5,NM=6,OM=7,qv=0,PM=1,zM=2,Pa=0,IM=1,BM=2,FM=3,HM=4,GM=5,VM=6,kM=7,Yv=300,bs=301,As=302,Gh=303,Vh=304,Wu=306,kh=1e3,mr=1001,Xh=1002,ni=1003,XM=1004,ru=1005,ci=1006,sh=1007,gr=1008,Ji=1009,Zv=1010,jv=1011,Go=1012,Ad=1013,_r=1014,Zi=1015,Wo=1016,Rd=1017,Cd=1018,Rs=1020,Kv=35902,Qv=1021,Jv=1022,fi=1023,$v=1024,t0=1025,Es=1026,Cs=1027,e0=1028,wd=1029,n0=1030,Dd=1031,Ud=1033,Du=33776,Uu=33777,Lu=33778,Nu=33779,Wh=35840,qh=35841,Yh=35842,Zh=35843,jh=36196,Kh=37492,Qh=37496,Jh=37808,$h=37809,td=37810,ed=37811,nd=37812,id=37813,ad=37814,rd=37815,sd=37816,od=37817,ld=37818,ud=37819,cd=37820,fd=37821,Ou=36492,hd=36494,dd=36495,i0=36283,pd=36284,md=36285,gd=36286,WM=3200,qM=3201,YM=0,ZM=1,Na="",vi="srgb",Ba="srgb-linear",Ld="display-p3",qu="display-p3-linear",Bu="linear",Be="srgb",Fu="rec709",Hu="p3",as=7680,L_=519,jM=512,KM=513,QM=514,a0=515,JM=516,$M=517,tE=518,eE=519,N_=35044,O_="300 es",ji=2e3,Gu=2001;class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=Math.PI/180,_d=180/Math.PI;function qo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Un(s,t,i){return Math.max(t,Math.min(i,s))}function nE(s,t){return(s%t+t)%t}function lh(s,t,i){return(1-i)*s+i*t}function Uo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class _e{constructor(t=0,i=0){_e.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Un(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,r,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],M=r[5],E=r[8],T=l[0],S=l[3],_=l[6],L=l[1],w=l[4],N=l[7],k=l[2],B=l[5],I=l[8];return u[0]=h*T+d*L+m*k,u[3]=h*S+d*w+m*B,u[6]=h*_+d*N+m*I,u[1]=p*T+g*L+x*k,u[4]=p*S+g*w+x*B,u[7]=p*_+g*N+x*I,u[2]=v*T+M*L+E*k,u[5]=v*S+M*w+E*B,u[8]=v*_+M*N+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,v=d*m-g*u,M=p*u-h*m,E=i*x+r*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(l*p-g*r)*T,t[2]=(d*r-l*h)*T,t[3]=v*T,t[4]=(g*i-l*m)*T,t[5]=(l*u-d*i)*T,t[6]=M*T,t[7]=(r*m-p*i)*T,t[8]=(h*i-r*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(uh.makeScale(t,i)),this}rotate(t){return this.premultiply(uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new oe;function r0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iE(){const s=Vu("canvas");return s.style.display="block",s}const P_={};function Fo(s){s in P_||(P_[s]=!0,console.warn(s))}function aE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const z_=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),I_=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[Ba]:{transfer:Bu,primaries:Fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[vi]:{transfer:Be,primaries:Fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[qu]:{transfer:Bu,primaries:Hu,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(I_),fromReference:s=>s.applyMatrix3(z_)},[Ld]:{transfer:Be,primaries:Hu,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(I_),fromReference:s=>s.applyMatrix3(z_).convertLinearToSRGB()}},rE=new Set([Ba,qu]),Te={enabled:!0,_workingColorSpace:Ba,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!rE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,i){if(this.enabled===!1||t===i||!t||!i)return s;const r=Lo[t].toReference,l=Lo[i].fromReference;return l(r(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Lo[s].primaries},getTransfer:function(s){return s===Na?Bu:Lo[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(Lo[t].luminanceCoefficients)}};function Ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ch(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let rs;class sE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{rs===void 0&&(rs=Vu("canvas")),rs.width=t.width,rs.height=t.height;const r=rs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=rs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ts(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ts(i[r]/255)*255):i[r]=Ts(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oE=0;class s0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(fh(l[h].image)):u.push(fh(l[h]))}else u=fh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lE=0;class Nn extends Us{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=mr,l=mr,u=ci,h=gr,d=fi,m=Ji,p=Nn.DEFAULT_ANISOTROPY,g=Na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=qo(),this.name="",this.source=new s0(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kh:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kh:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Yv;Nn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,i=0,r=0,l=1){Fe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],M=m[5],E=m[9],T=m[2],S=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,N=(M+1)/2,k=(_+1)/2,B=(g+v)/4,I=(x+T)/4,Y=(E+S)/4;return w>N&&w>k?w<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(w),l=B/r,u=I/r):N>k?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=B/l,u=Y/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=I/u,l=Y/u),this.set(r,l,u,i),this}let L=Math.sqrt((S-E)*(S-E)+(x-T)*(x-T)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(x-T)/L,this.z=(v-g)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends Us{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Fe(0,0,t,i),this.scissorTest=!1,this.viewport=new Fe(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Nn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new s0(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends uE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class o0 extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[h+0],M=u[h+1],E=u[h+2],T=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=M,t[i+2]=E,t[i+3]=T;return}if(x!==T||m!==v||p!==M||g!==E){let S=1-d;const _=m*v+p*M+g*E+x*T,L=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const k=Math.sqrt(w),B=Math.atan2(k,_*L);S=Math.sin(S*B)/k,d=Math.sin(d*B)/k}const N=d*L;if(m=m*S+v*N,p=p*S+M*N,g=g*S+E*N,x=x*S+T*N,S===1-d){const k=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=k,p*=k,g*=k,x*=k}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],v=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+g*x+m*M-p*v,t[i+1]=m*E+g*v+p*x-d*M,t[i+2]=p*E+g*M+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"YXZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"ZXY":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"ZYX":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"YZX":this._x=v*g*x+p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x-v*M*E;break;case"XZY":this._x=v*g*x-p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Un(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(B_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(B_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return hh.copy(this).projectOnVector(t),this.sub(hh)}reflect(t){return this.sub(hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Un(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new tt,B_=new Yo;class Zo{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,oi):oi.fromBufferAttribute(u,h),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),su.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),su.copy(r.boundingBox)),su.applyMatrix4(t.matrixWorld),this.union(su)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),ou.subVectors(this.max,No),ss.subVectors(t.a,No),os.subVectors(t.b,No),ls.subVectors(t.c,No),Ra.subVectors(os,ss),Ca.subVectors(ls,os),rr.subVectors(ss,ls);let i=[0,-Ra.z,Ra.y,0,-Ca.z,Ca.y,0,-rr.z,rr.y,Ra.z,0,-Ra.x,Ca.z,0,-Ca.x,rr.z,0,-rr.x,-Ra.y,Ra.x,0,-Ca.y,Ca.x,0,-rr.y,rr.x,0];return!dh(i,ss,os,ls,ou)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,ss,os,ls,ou))?!1:(lu.crossVectors(Ra,Ca),i=[lu.x,lu.y,lu.z],dh(i,ss,os,ls,ou))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],oi=new tt,su=new Zo,ss=new tt,os=new tt,ls=new tt,Ra=new tt,Ca=new tt,rr=new tt,No=new tt,ou=new tt,lu=new tt,sr=new tt;function dh(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){sr.fromArray(s,u);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),m=t.dot(sr),p=i.dot(sr),g=r.dot(sr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const fE=new Zo,Oo=new tt,ph=new tt;class Nd{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):fE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(ph)),this.expandByPoint(Oo.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new tt,mh=new tt,uu=new tt,wa=new tt,gh=new tt,cu=new tt,_h=new tt;class hE{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Vi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,i),Vi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){mh.copy(t).add(i).multiplyScalar(.5),uu.copy(i).sub(t).normalize(),wa.copy(this.origin).sub(mh);const u=t.distanceTo(i)*.5,h=-this.direction.dot(uu),d=wa.dot(this.direction),m=-wa.dot(uu),p=wa.lengthSq(),g=Math.abs(1-h*h);let x,v,M,E;if(g>0)if(x=h*m-d,v=h*d-m,E=u*g,x>=0)if(v>=-E)if(v<=E){const T=1/g;x*=T,v*=T,M=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),M=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(mh).addScaledVector(uu,v),M}intersectSphere(t,i){Vi.subVectors(t.center,this.origin);const r=Vi.dot(this.direction),l=Vi.dot(Vi)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(u=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,i,r,l,u){gh.subVectors(i,t),cu.subVectors(r,t),_h.crossVectors(gh,cu);let h=this.direction.dot(_h),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;wa.subVectors(this.origin,t);const m=d*this.direction.dot(cu.crossVectors(wa,cu));if(m<0)return null;const p=d*this.direction.dot(gh.cross(wa));if(p<0||m+p>h)return null;const g=-d*wa.dot(_h);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,r,l,u,h,d,m,p,g,x,v,M,E,T,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,x,v,M,E,T,S)}set(t,i,r,l,u,h,d,m,p,g,x,v,M,E,T,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=M,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),u=1/us.setFromMatrixColumn(t,1).length(),h=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=h*g,M=h*x,E=d*g,T=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=v-T*p,i[9]=-d*m,i[2]=T-v*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,M=m*x,E=p*g,T=p*x;i[0]=v+T*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=T+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,M=m*x,E=p*g,T=p*x;i[0]=v-T*d,i[4]=-h*x,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=T-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,M=h*x,E=d*g,T=d*x;i[0]=m*g,i[4]=E*p-M,i[8]=v*p+T,i[1]=m*x,i[5]=T*p+v,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,M=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-v*x,i[8]=E*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+E,i[10]=v-T*x}else if(t.order==="XZY"){const v=h*m,M=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+T,i[5]=h*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=d*g,i[10]=T*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dE,t,pE)}lookAt(t,i,r){const l=this.elements;return kn.subVectors(t,i),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Da.crossVectors(r,kn),Da.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Da.crossVectors(r,kn)),Da.normalize(),fu.crossVectors(kn,Da),l[0]=Da.x,l[4]=fu.x,l[8]=kn.x,l[1]=Da.y,l[5]=fu.y,l[9]=kn.y,l[2]=Da.z,l[6]=fu.z,l[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],M=r[13],E=r[2],T=r[6],S=r[10],_=r[14],L=r[3],w=r[7],N=r[11],k=r[15],B=l[0],I=l[4],Y=l[8],D=l[12],R=l[1],H=l[5],st=l[9],at=l[13],ct=l[2],lt=l[6],O=l[10],Z=l[14],j=l[3],Et=l[7],U=l[11],J=l[15];return u[0]=h*B+d*R+m*ct+p*j,u[4]=h*I+d*H+m*lt+p*Et,u[8]=h*Y+d*st+m*O+p*U,u[12]=h*D+d*at+m*Z+p*J,u[1]=g*B+x*R+v*ct+M*j,u[5]=g*I+x*H+v*lt+M*Et,u[9]=g*Y+x*st+v*O+M*U,u[13]=g*D+x*at+v*Z+M*J,u[2]=E*B+T*R+S*ct+_*j,u[6]=E*I+T*H+S*lt+_*Et,u[10]=E*Y+T*st+S*O+_*U,u[14]=E*D+T*at+S*Z+_*J,u[3]=L*B+w*R+N*ct+k*j,u[7]=L*I+w*H+N*lt+k*Et,u[11]=L*Y+w*st+N*O+k*U,u[15]=L*D+w*at+N*Z+k*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],M=t[14],E=t[3],T=t[7],S=t[11],_=t[15];return E*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*M-r*m*M)+T*(+i*m*M-i*p*v+u*h*v-l*h*M+l*p*g-u*m*g)+S*(+i*p*x-i*d*M-u*h*x+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],M=t[11],E=t[12],T=t[13],S=t[14],_=t[15],L=x*S*p-T*v*p+T*m*M-d*S*M-x*m*_+d*v*_,w=E*v*p-g*S*p-E*m*M+h*S*M+g*m*_-h*v*_,N=g*T*p-E*x*p+E*d*M-h*T*M-g*d*_+h*x*_,k=E*x*m-g*T*m-E*d*v+h*T*v+g*d*S-h*x*S,B=i*L+r*w+l*N+u*k;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=L*I,t[1]=(T*v*u-x*S*u-T*l*M+r*S*M+x*l*_-r*v*_)*I,t[2]=(d*S*u-T*m*u+T*l*p-r*S*p-d*l*_+r*m*_)*I,t[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*M-r*m*M)*I,t[4]=w*I,t[5]=(g*S*u-E*v*u+E*l*M-i*S*M-g*l*_+i*v*_)*I,t[6]=(E*m*u-h*S*u-E*l*p+i*S*p+h*l*_-i*m*_)*I,t[7]=(h*v*u-g*m*u+g*l*p-i*v*p-h*l*M+i*m*M)*I,t[8]=N*I,t[9]=(E*x*u-g*T*u-E*r*M+i*T*M+g*r*_-i*x*_)*I,t[10]=(h*T*u-E*d*u+E*r*p-i*T*p-h*r*_+i*d*_)*I,t[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*M-i*d*M)*I,t[12]=k*I,t[13]=(g*T*l-E*x*l+E*r*v-i*T*v-g*r*S+i*x*S)*I,t[14]=(E*d*l-h*T*l-E*r*m+i*T*m+h*r*S-i*d*S)*I,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,v=u*p,M=u*g,E=u*x,T=h*g,S=h*x,_=d*x,L=m*p,w=m*g,N=m*x,k=r.x,B=r.y,I=r.z;return l[0]=(1-(T+_))*k,l[1]=(M+N)*k,l[2]=(E-w)*k,l[3]=0,l[4]=(M-N)*B,l[5]=(1-(v+_))*B,l[6]=(S+L)*B,l[7]=0,l[8]=(E+w)*I,l[9]=(S-L)*I,l[10]=(1-(v+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const h=us.set(l[4],l[5],l[6]).length(),d=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],li.copy(this);const p=1/u,g=1/h,x=1/d;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=x,li.elements[9]*=x,li.elements[10]*=x,i.setFromRotationMatrix(li),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=ji){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let M,E;if(d===ji)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Gu)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ji){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(h-u),v=(i+t)*p,M=(r+l)*g;let E,T;if(d===ji)E=(h+u)*x,T=-2*x;else if(d===Gu)E=u*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=T,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new tt,li=new Ke,dE=new tt(0,0,0),pE=new tt(1,1,1),Da=new tt,fu=new tt,kn=new tt,F_=new Ke,H_=new Yo;class $i{constructor(t=0,i=0,r=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Un(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Un(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Un(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return F_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(F_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return H_.setFromEuler(this),this.setFromQuaternion(H_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class l0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mE=0;const G_=new tt,cs=new Yo,ki=new Ke,hu=new tt,Po=new tt,gE=new tt,_E=new Yo,V_=new tt(1,0,0),k_=new tt(0,1,0),X_=new tt(0,0,1),W_={type:"added"},vE={type:"removed"},fs={type:"childadded",child:null},vh={type:"childremoved",child:null};class On extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new tt,i=new $i,r=new Yo,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new oe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return cs.setFromAxisAngle(t,i),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,i){return cs.setFromAxisAngle(t,i),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(V_,t)}rotateY(t){return this.rotateOnAxis(k_,t)}rotateZ(t){return this.rotateOnAxis(X_,t)}translateOnAxis(t,i){return G_.copy(t).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(V_,t)}translateY(t){return this.translateOnAxis(k_,t)}translateZ(t){return this.translateOnAxis(X_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hu.copy(t):hu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Po,hu,this.up):ki.lookAt(hu,Po,this.up),this.quaternion.setFromRotationMatrix(ki),l&&(ki.extractRotation(l.matrixWorld),cs.setFromRotationMatrix(ki),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(W_),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vE),vh.child=t,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(W_),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,gE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,_E,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),v=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new tt(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new tt,Xi=new tt,xh=new tt,Wi=new tt,hs=new tt,ds=new tt,q_=new tt,Sh=new tt,yh=new tt,Mh=new tt;class Si{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),ui.subVectors(t,i),l.cross(ui);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){ui.subVectors(l,i),Xi.subVectors(r,i),xh.subVectors(t,i);const h=ui.dot(ui),d=ui.dot(Xi),m=ui.dot(xh),p=Xi.dot(Xi),g=Xi.dot(xh),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,M=(p*m-d*g)*v,E=(h*g-d*m)*v;return u.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,Wi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Wi.x),m.addScaledVector(h,Wi.y),m.addScaledVector(d,Wi.z),m)}static isFrontFacing(t,i,r,l){return ui.subVectors(r,i),Xi.subVectors(t,i),ui.cross(Xi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ui.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),ui.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;hs.subVectors(l,r),ds.subVectors(u,r),Sh.subVectors(t,r);const m=hs.dot(Sh),p=ds.dot(Sh);if(m<=0&&p<=0)return i.copy(r);yh.subVectors(t,l);const g=hs.dot(yh),x=ds.dot(yh);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(hs,h);Mh.subVectors(t,u);const M=hs.dot(Mh),E=ds.dot(Mh);if(E>=0&&M<=E)return i.copy(u);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(ds,d);const S=g*E-M*x;if(S<=0&&x-g>=0&&M-E>=0)return q_.subVectors(u,l),d=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(q_,d);const _=1/(S+T+v);return h=T*_,d=v*_,i.copy(r).addScaledVector(hs,h).addScaledVector(ds,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ua={h:0,s:0,l:0},du={h:0,s:0,l:0};function Eh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ce{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=r,Te.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Te.workingColorSpace){if(t=nE(t,1),i=Un(i,0,1),r=Un(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Eh(h,u,t+1/3),this.g=Eh(h,u,t),this.b=Eh(h,u,t-1/3)}return Te.toWorkingColorSpace(this,l),this}setStyle(t,i=vi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const r=u0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}copyLinearToSRGB(t){return this.r=ch(t.r),this.g=ch(t.g),this.b=ch(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Te.fromWorkingColorSpace(Mn.copy(this),t),Math.round(Un(Mn.r*255,0,255))*65536+Math.round(Un(Mn.g*255,0,255))*256+Math.round(Un(Mn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,u=Mn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Te.workingColorSpace){return Te.fromWorkingColorSpace(Mn.copy(this),i),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=vi){Te.fromWorkingColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,l=Mn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ua),this.setHSL(Ua.h+t,Ua.s+i,Ua.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ua),t.getHSL(du);const r=lh(Ua.h,du.h,i),l=lh(Ua.s,du.s,i),u=lh(Ua.l,du.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ce;Ce.NAMES=u0;let xE=0;class Yu extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Ms,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Hh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fh&&(r.blendSrc=this.blendSrc),this.blendDst!==Hh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Iu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==L_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Od extends Yu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new tt,pu=new _e;class Mi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=N_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Fo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pu.fromBufferAttribute(this,i),pu.applyMatrix3(t),this.setXY(i,pu.x,pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Dn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array),u=Dn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==N_&&(t.usage=this.usage),t}}class c0 extends Mi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class f0 extends Mi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ei extends Mi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let SE=0;const ei=new Ke,Th=new On,ps=new tt,Xn=new Zo,zo=new Zo,mn=new tt;class Fa extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r0(t)?f0:c0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,i,r){return ei.makeTranslation(t,i,r),this.applyMatrix4(ei),this}scale(t,i,r){return ei.makeScale(t,i,r),this.applyMatrix4(ei),this}lookAt(t){return Th.lookAt(t),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ei(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Xn.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(Xn.min,zo.min),Xn.expandByPoint(mn),mn.addVectors(Xn.max,zo.max),Xn.expandByPoint(mn)):(Xn.expandByPoint(zo.min),Xn.expandByPoint(zo.max))}Xn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)mn.fromBufferAttribute(d,p),m&&(ps.fromBufferAttribute(t,p),mn.add(ps)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<r.count;Y++)d[Y]=new tt,m[Y]=new tt;const p=new tt,g=new tt,x=new tt,v=new _e,M=new _e,E=new _e,T=new tt,S=new tt;function _(Y,D,R){p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,R),v.fromBufferAttribute(u,Y),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,R),g.sub(p),x.sub(p),M.sub(v),E.sub(v);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(H),S.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(H),d[Y].add(T),d[D].add(T),d[R].add(T),m[Y].add(S),m[D].add(S),m[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let Y=0,D=L.length;Y<D;++Y){const R=L[Y],H=R.start,st=R.count;for(let at=H,ct=H+st;at<ct;at+=3)_(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const w=new tt,N=new tt,k=new tt,B=new tt;function I(Y){k.fromBufferAttribute(l,Y),B.copy(k);const D=d[Y];w.copy(D),w.sub(k.multiplyScalar(k.dot(D))).normalize(),N.crossVectors(B,D);const H=N.dot(m[Y])<0?-1:1;h.setXYZW(Y,w.x,w.y,w.z,H)}for(let Y=0,D=L.length;Y<D;++Y){const R=L[Y],H=R.start,st=R.count;for(let at=H,ct=H+st;at<ct;at+=3)I(t.getX(at+0)),I(t.getX(at+1)),I(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new tt,u=new tt,h=new tt,d=new tt,m=new tt,p=new tt,g=new tt,x=new tt;if(t)for(let v=0,M=t.count;v<M;v+=3){const E=t.getX(v+0),T=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let M=0,E=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*g;for(let _=0;_<g;_++)v[E++]=p[M++]}return new Mi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],M=t(v,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Y_=new Ke,or=new hE,mu=new Nd,Z_=new tt,ms=new tt,gs=new tt,_s=new tt,bh=new tt,gu=new tt,_u=new _e,vu=new _e,xu=new _e,j_=new tt,K_=new tt,Q_=new tt,Su=new tt,yu=new tt;class yi extends On{constructor(t=new Fa,i=new Od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){gu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(bh.fromBufferAttribute(x,t),h?gu.addScaledVector(bh,g):gu.addScaledVector(bh.sub(i),g))}i.add(gu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mu.copy(r.boundingSphere),mu.applyMatrix4(u),or.copy(t.ray).recast(t.near),!(mu.containsPoint(or.origin)===!1&&(or.intersectSphere(mu,Z_)===null||or.origin.distanceToSquared(Z_)>(t.far-t.near)**2))&&(Y_.copy(u).invert(),or.copy(t.ray).applyMatrix4(Y_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const S=v[E],_=h[S.materialIndex],L=Math.max(S.start,M.start),w=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,k=w;N<k;N+=3){const B=d.getX(N),I=d.getX(N+1),Y=d.getX(N+2);l=Mu(this,_,t,r,p,g,x,B,I,Y),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const L=d.getX(S),w=d.getX(S+1),N=d.getX(S+2);l=Mu(this,h,t,r,p,g,x,L,w,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=v.length;E<T;E++){const S=v[E],_=h[S.materialIndex],L=Math.max(S.start,M.start),w=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,k=w;N<k;N+=3){const B=N,I=N+1,Y=N+2;l=Mu(this,_,t,r,p,g,x,B,I,Y),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let S=E,_=T;S<_;S+=3){const L=S,w=S+1,N=S+2;l=Mu(this,h,t,r,p,g,x,L,w,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yE(s,t,i,r,l,u,h,d){let m;if(t.side===Ln?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===za,d),m===null)return null;yu.copy(d),yu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(yu);return p<i.near||p>i.far?null:{distance:p,point:yu.clone(),object:s}}function Mu(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,ms),s.getVertexPosition(m,gs),s.getVertexPosition(p,_s);const g=yE(s,t,i,r,ms,gs,_s,Su);if(g){l&&(_u.fromBufferAttribute(l,d),vu.fromBufferAttribute(l,m),xu.fromBufferAttribute(l,p),g.uv=Si.getInterpolation(Su,ms,gs,_s,_u,vu,xu,new _e)),u&&(_u.fromBufferAttribute(u,d),vu.fromBufferAttribute(u,m),xu.fromBufferAttribute(u,p),g.uv1=Si.getInterpolation(Su,ms,gs,_s,_u,vu,xu,new _e)),h&&(j_.fromBufferAttribute(h,d),K_.fromBufferAttribute(h,m),Q_.fromBufferAttribute(h,p),g.normal=Si.getInterpolation(Su,ms,gs,_s,j_,K_,Q_,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new tt,materialIndex:0};Si.getNormal(ms,gs,_s,x.normal),g.face=x}return g}class jo extends Fa{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(x,2));function E(T,S,_,L,w,N,k,B,I,Y,D){const R=N/I,H=k/Y,st=N/2,at=k/2,ct=B/2,lt=I+1,O=Y+1;let Z=0,j=0;const Et=new tt;for(let U=0;U<O;U++){const J=U*H-at;for(let St=0;St<lt;St++){const yt=St*R-st;Et[T]=yt*L,Et[S]=J*w,Et[_]=ct,p.push(Et.x,Et.y,Et.z),Et[T]=0,Et[S]=0,Et[_]=B>0?1:-1,g.push(Et.x,Et.y,Et.z),x.push(St/I),x.push(1-U/Y),Z+=1}}for(let U=0;U<Y;U++)for(let J=0;J<I;J++){const St=v+J+lt*U,yt=v+J+lt*(U+1),K=v+(J+1)+lt*(U+1),ft=v+(J+1)+lt*U;m.push(St,yt,ft),m.push(yt,K,ft),j+=6}d.addGroup(M,j,D),M+=j,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function bn(s){const t={};for(let i=0;i<s.length;i++){const r=ws(s[i]);for(const l in r)t[l]=r[l]}return t}function ME(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function h0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const EE={clone:ws,merge:bn};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Yu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=bE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=ME(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class d0 extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ji}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new tt,J_=new _e,$_=new _e;class Wn extends d0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=_d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-t/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(La.x,La.y).multiplyScalar(-t/La.z)}getViewSize(t,i){return this.getViewBounds(t,J_,$_),i.subVectors($_,J_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(oh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class AE extends On{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wn(vs,xs,t,i);l.layers=this.layers,this.add(l);const u=new Wn(vs,xs,t,i);u.layers=this.layers,this.add(u);const h=new Wn(vs,xs,t,i);h.layers=this.layers,this.add(h);const d=new Wn(vs,xs,t,i);d.layers=this.layers,this.add(d);const m=new Wn(vs,xs,t,i);m.layers=this.layers,this.add(m);const p=new Wn(vs,xs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class p0 extends Nn{constructor(t,i,r,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:bs,super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RE extends vr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new p0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ci}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new jo(5,5,5),u=new Ia({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:Oa});u.uniforms.tEquirect.value=i;const h=new yi(l,u),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=ci),new AE(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}const Ah=new tt,CE=new tt,wE=new oe;class fr{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ah.subVectors(r,i).cross(CE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ah),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||wE.getNormalMatrix(t),l=this.coplanarPoint(Ah).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Nd,Eu=new tt;class Pd{constructor(t=new fr,i=new fr,r=new fr,l=new fr,u=new fr,h=new fr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ji){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],M=l[8],E=l[9],T=l[10],S=l[11],_=l[12],L=l[13],w=l[14],N=l[15];if(r[0].setComponents(m-u,v-p,S-M,N-_).normalize(),r[1].setComponents(m+u,v+p,S+M,N+_).normalize(),r[2].setComponents(m+h,v+g,S+E,N+L).normalize(),r[3].setComponents(m-h,v-g,S-E,N-L).normalize(),r[4].setComponents(m-d,v-x,S-T,N-w).normalize(),i===ji)r[5].setComponents(m+d,v+x,S+T,N+w).normalize();else if(i===Gu)r[5].setComponents(d,x,T,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Eu.x=l.normal.x>0?t.max.x:t.min.x,Eu.y=l.normal.y>0?t.max.y:t.min.y,Eu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m0(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function DE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m._updateRange,v=m.updateRanges;if(s.bindBuffer(p,d),x.count===-1&&v.length===0&&s.bufferSubData(p,0,g),v.length!==0){for(let M=0,E=v.length;M<E;M++){const T=v[M];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}x.count!==-1&&(s.bufferSubData(p,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count),x.count=-1),m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}class Zu extends Fa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,M=[],E=[],T=[],S=[];for(let _=0;_<g;_++){const L=_*v-h;for(let w=0;w<p;w++){const N=w*x-u;E.push(N,-L,0),T.push(0,0,1),S.push(w/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const w=L+p*_,N=L+p*(_+1),k=L+1+p*(_+1),B=L+1+p*_;M.push(w,N,B),M.push(N,k,B)}this.setIndex(M),this.setAttribute("position",new Ei(E,3)),this.setAttribute("normal",new Ei(T,3)),this.setAttribute("uv",new Ei(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.width,t.height,t.widthSegments,t.heightSegments)}}var UE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,HE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",lT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ST=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ET=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,YT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_b=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ub=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:UE,alphahash_pars_fragment:LE,alphamap_fragment:NE,alphamap_pars_fragment:OE,alphatest_fragment:PE,alphatest_pars_fragment:zE,aomap_fragment:IE,aomap_pars_fragment:BE,batching_pars_vertex:FE,batching_vertex:HE,begin_vertex:GE,beginnormal_vertex:VE,bsdfs:kE,iridescence_fragment:XE,bumpmap_pars_fragment:WE,clipping_planes_fragment:qE,clipping_planes_pars_fragment:YE,clipping_planes_pars_vertex:ZE,clipping_planes_vertex:jE,color_fragment:KE,color_pars_fragment:QE,color_pars_vertex:JE,color_vertex:$E,common:tT,cube_uv_reflection_fragment:eT,defaultnormal_vertex:nT,displacementmap_pars_vertex:iT,displacementmap_vertex:aT,emissivemap_fragment:rT,emissivemap_pars_fragment:sT,colorspace_fragment:oT,colorspace_pars_fragment:lT,envmap_fragment:uT,envmap_common_pars_fragment:cT,envmap_pars_fragment:fT,envmap_pars_vertex:hT,envmap_physical_pars_fragment:ET,envmap_vertex:dT,fog_vertex:pT,fog_pars_vertex:mT,fog_fragment:gT,fog_pars_fragment:_T,gradientmap_pars_fragment:vT,lightmap_pars_fragment:xT,lights_lambert_fragment:ST,lights_lambert_pars_fragment:yT,lights_pars_begin:MT,lights_toon_fragment:TT,lights_toon_pars_fragment:bT,lights_phong_fragment:AT,lights_phong_pars_fragment:RT,lights_physical_fragment:CT,lights_physical_pars_fragment:wT,lights_fragment_begin:DT,lights_fragment_maps:UT,lights_fragment_end:LT,logdepthbuf_fragment:NT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:zT,map_fragment:IT,map_pars_fragment:BT,map_particle_fragment:FT,map_particle_pars_fragment:HT,metalnessmap_fragment:GT,metalnessmap_pars_fragment:VT,morphinstance_vertex:kT,morphcolor_vertex:XT,morphnormal_vertex:WT,morphtarget_pars_vertex:qT,morphtarget_vertex:YT,normal_fragment_begin:ZT,normal_fragment_maps:jT,normal_pars_fragment:KT,normal_pars_vertex:QT,normal_vertex:JT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:ab,packing:rb,premultiplied_alpha_fragment:sb,project_vertex:ob,dithering_fragment:lb,dithering_pars_fragment:ub,roughnessmap_fragment:cb,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:hb,shadowmap_pars_vertex:db,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:_b,skinning_vertex:vb,skinnormal_vertex:xb,specularmap_fragment:Sb,specularmap_pars_fragment:yb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:bb,uv_pars_fragment:Ab,uv_pars_vertex:Rb,uv_vertex:Cb,worldpos_vertex:wb,background_vert:Db,background_frag:Ub,backgroundCube_vert:Lb,backgroundCube_frag:Nb,cube_vert:Ob,cube_frag:Pb,depth_vert:zb,depth_frag:Ib,distanceRGBA_vert:Bb,distanceRGBA_frag:Fb,equirect_vert:Hb,equirect_frag:Gb,linedashed_vert:Vb,linedashed_frag:kb,meshbasic_vert:Xb,meshbasic_frag:Wb,meshlambert_vert:qb,meshlambert_frag:Yb,meshmatcap_vert:Zb,meshmatcap_frag:jb,meshnormal_vert:Kb,meshnormal_frag:Qb,meshphong_vert:Jb,meshphong_frag:$b,meshphysical_vert:tA,meshphysical_frag:eA,meshtoon_vert:nA,meshtoon_frag:iA,points_vert:aA,points_frag:rA,shadow_vert:sA,shadow_frag:oA,sprite_vert:lA,sprite_frag:uA},Dt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},xi={basic:{uniforms:bn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:bn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:bn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:bn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:bn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:bn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:bn([Dt.points,Dt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:bn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:bn([Dt.common,Dt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:bn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:bn([Dt.sprite,Dt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:bn([Dt.common,Dt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:bn([Dt.lights,Dt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};xi.physical={uniforms:bn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Tu={r:0,b:0,g:0},ur=new $i,cA=new Ke;function fA(s,t,i,r,l,u,h){const d=new Ce(0);let m=u===!0?0:1,p,g,x=null,v=0,M=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function T(L){let w=!1;const N=E(L);N===null?_(d,m):N&&N.isColor&&(_(N,1),w=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,w){const N=E(w);N&&(N.isCubeTexture||N.mapping===Wu)?(g===void 0&&(g=new yi(new jo(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:ws(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,B,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(w.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(cA.makeRotationFromEuler(ur)),g.material.toneMapped=Te.getTransfer(N.colorSpace)!==Be,(x!==N||v!==N.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,x=N,v=N.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new yi(new Zu(2,2),new Ia({name:"BackgroundMaterial",uniforms:ws(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Te.getTransfer(N.colorSpace)!==Be,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||v!==N.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=N,v=N.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,w){L.getRGB(Tu,h0(s)),r.buffers.color.setClear(Tu.r,Tu.g,Tu.b,w,h)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:T,addToRenderList:S}}function hA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(R,H,st,at,ct){let lt=!1;const O=x(at,st,H);u!==O&&(u=O,p(u.object)),lt=M(R,at,st,ct),lt&&E(R,at,st,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,N(R,H,st,at),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,H,st){const at=st.wireframe===!0;let ct=r[R.id];ct===void 0&&(ct={},r[R.id]=ct);let lt=ct[H.id];lt===void 0&&(lt={},ct[H.id]=lt);let O=lt[at];return O===void 0&&(O=v(m()),lt[at]=O),O}function v(R){const H=[],st=[],at=[];for(let ct=0;ct<i;ct++)H[ct]=0,st[ct]=0,at[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:at,object:R,attributes:{},index:null}}function M(R,H,st,at){const ct=u.attributes,lt=H.attributes;let O=0;const Z=st.getAttributes();for(const j in Z)if(Z[j].location>=0){const U=ct[j];let J=lt[j];if(J===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function E(R,H,st,at){const ct={},lt=H.attributes;let O=0;const Z=st.getAttributes();for(const j in Z)if(Z[j].location>=0){let U=lt[j];U===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),ct[j]=J,O++}u.attributes=ct,u.attributesNum=O,u.index=at}function T(){const R=u.newAttributes;for(let H=0,st=R.length;H<st;H++)R[H]=0}function S(R){_(R,0)}function _(R,H){const st=u.newAttributes,at=u.enabledAttributes,ct=u.attributeDivisors;st[R]=1,at[R]===0&&(s.enableVertexAttribArray(R),at[R]=1),ct[R]!==H&&(s.vertexAttribDivisor(R,H),ct[R]=H)}function L(){const R=u.newAttributes,H=u.enabledAttributes;for(let st=0,at=H.length;st<at;st++)H[st]!==R[st]&&(s.disableVertexAttribArray(st),H[st]=0)}function w(R,H,st,at,ct,lt,O){O===!0?s.vertexAttribIPointer(R,H,st,ct,lt):s.vertexAttribPointer(R,H,st,at,ct,lt)}function N(R,H,st,at){T();const ct=at.attributes,lt=st.getAttributes(),O=H.defaultAttributeValues;for(const Z in lt){const j=lt[Z];if(j.location>=0){let Et=ct[Z];if(Et===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),Et!==void 0){const U=Et.normalized,J=Et.itemSize,St=t.get(Et);if(St===void 0)continue;const yt=St.buffer,K=St.type,ft=St.bytesPerElement,vt=K===s.INT||K===s.UNSIGNED_INT||Et.gpuType===Ad;if(Et.isInterleavedBufferAttribute){const wt=Et.data,Lt=wt.stride,Wt=Et.offset;if(wt.isInstancedInterleavedBuffer){for(let ae=0;ae<j.locationSize;ae++)_(j.location+ae,wt.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let ae=0;ae<j.locationSize;ae++)S(j.location+ae);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ae=0;ae<j.locationSize;ae++)w(j.location+ae,J/j.locationSize,K,U,Lt*ft,(Wt+J/j.locationSize*ae)*ft,vt)}else{if(Et.isInstancedBufferAttribute){for(let wt=0;wt<j.locationSize;wt++)_(j.location+wt,Et.meshPerAttribute);R.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let wt=0;wt<j.locationSize;wt++)S(j.location+wt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let wt=0;wt<j.locationSize;wt++)w(j.location+wt,J/j.locationSize,K,U,J*ft,J/j.locationSize*wt*ft,vt)}}else if(O!==void 0){const U=O[Z];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(j.location,U);break;case 3:s.vertexAttrib3fv(j.location,U);break;case 4:s.vertexAttrib4fv(j.location,U);break;default:s.vertexAttrib1fv(j.location,U)}}}}L()}function k(){Y();for(const R in r){const H=r[R];for(const st in H){const at=H[st];for(const ct in at)g(at[ct].object),delete at[ct];delete H[st]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const st in H){const at=H[st];for(const ct in at)g(at[ct].object),delete at[ct];delete H[st]}delete r[R.id]}function I(R){for(const H in r){const st=r[H];if(st[R.id]===void 0)continue;const at=st[R.id];for(const ct in at)g(at[ct].object),delete at[ct];delete st[R.id]}}function Y(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function dA(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E];i.update(M,r,1)}function m(p,g,x,v){if(x===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let T=0;T<x;T++)E+=g[T];for(let T=0;T<v.length;T++)i.update(E,r,v[T])}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function pA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==fi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const I=B===Wo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ji&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Zi&&!I)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,maxTextures:v,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:T,maxAttributes:S,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:N,maxSamples:k}}function mA(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new fr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||r!==0||l;return l=v,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!S)u?g(null):p();else{const L=u?0:r,w=L*4;let N=_.clippingState||null;m.value=N,N=g(E,v,w,M);for(let k=0;k!==w;++k)N[k]=i[k];_.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,M,E){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=m.value,E!==!0||S===null){const _=M+T*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let w=0,N=M;w!==T;++w,N+=4)h.copy(x[w]).applyMatrix4(L,d),h.normal.toArray(S,N),S[N+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function gA(s){let t=new WeakMap;function i(h,d){return d===Gh?h.mapping=bs:d===Vh&&(h.mapping=As),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Gh||d===Vh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new RE(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}class _A extends d0{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ys=4,tv=[.125,.215,.35,.446,.526,.582],pr=20,Rh=new _A,ev=new Ce;let Ch=null,wh=0,Dh=0,Uh=!1;const hr=(1+Math.sqrt(5))/2,Ss=1/hr,nv=[new tt(-hr,Ss,0),new tt(hr,Ss,0),new tt(-Ss,0,hr),new tt(Ss,0,hr),new tt(0,hr,-Ss),new tt(0,hr,Ss),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class iv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,wh,Dh),this._renderer.xr.enabled=Uh,t.scissorTest=!1,bu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Wo,format:fi,colorSpace:Ba,depthBuffer:!1},l=av(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vA(u)),this._blurMaterial=xA(u,t,i)}return l}_compileMaterial(t){const i=new yi(this._lodPlanes[0],t);this._renderer.compile(i,Rh)}_sceneToCubeUV(t,i,r,l){const d=new Wn(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(ev),g.toneMapping=Pa,g.autoClear=!1;const M=new Od({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),E=new yi(new jo,M);let T=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,T=!0):(M.color.copy(ev),T=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):L===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const w=this._cubeSize;bu(l,L*w,_>2?w:0,w,w),g.setRenderTarget(l),T&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=x,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===bs||t.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new yi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;bu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Rh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=nv[(l-u-1)%nv.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new yi(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*pr-1),T=u/E,S=isFinite(u)?1+Math.floor(g*T):pr;S>pr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${pr}`);const _=[];let L=0;for(let I=0;I<pr;++I){const Y=I/T,D=Math.exp(-Y*Y/2);_.push(D),I===0?L+=D:I<S&&(L+=2*D)}for(let I=0;I<_.length;I++)_[I]=_[I]/L;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-r;const N=this._sizeLods[l],k=3*N*(l>w-ys?l-w+ys:0),B=4*(this._cubeSize-N);bu(i,k,B,3*N,2*N),m.setRenderTarget(i),m.render(x,Rh)}}function vA(s){const t=[],i=[],r=[];let l=s;const u=s-ys+1+tv.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-ys?m=tv[h-s+ys-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,T=3,S=2,_=1,L=new Float32Array(T*E*M),w=new Float32Array(S*E*M),N=new Float32Array(_*E*M);for(let B=0;B<M;B++){const I=B%3*2/3-1,Y=B>2?0:-1,D=[I,Y,0,I+2/3,Y,0,I+2/3,Y+1,0,I,Y,0,I+2/3,Y+1,0,I,Y+1,0];L.set(D,T*E*B),w.set(v,S*E*B);const R=[B,B,B,B,B,B];N.set(R,_*E*B)}const k=new Fa;k.setAttribute("position",new Mi(L,T)),k.setAttribute("uv",new Mi(w,S)),k.setAttribute("faceIndex",new Mi(N,_)),t.push(k),l>ys&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function av(s,t,i){const r=new vr(s,t,i);return r.texture.mapping=Wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function xA(s,t,i){const r=new Float32Array(pr),l=new tt(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function rv(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function sv(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Gh||m===Vh,g=m===bs||m===As;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new iv(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new iv(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function MA(s,t,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);for(const E in v.morphAttributes){const T=v.morphAttributes[E];for(let S=0,_=T.length;S<_;S++)t.remove(T[S])}v.removeEventListener("dispose",h),delete l[v.id];const M=u.get(v);M&&(t.remove(M),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const E in v)t.update(v[E],s.ARRAY_BUFFER);const M=x.morphAttributes;for(const E in M){const T=M[E];for(let S=0,_=T.length;S<_;S++)t.update(T[S],s.ARRAY_BUFFER)}}function p(x){const v=[],M=x.index,E=x.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let w=0,N=L.length;w<N;w+=3){const k=L[w+0],B=L[w+1],I=L[w+2];v.push(k,B,B,I,I,k)}}else if(E!==void 0){const L=E.array;T=E.version;for(let w=0,N=L.length/3-1;w<N;w+=3){const k=w+0,B=w+1,I=w+2;v.push(k,B,B,I,I,k)}}else return;const S=new(r0(v)?f0:c0)(v,1);S.version=T;const _=u.get(x);_&&t.remove(_),u.set(x,S)}function g(x){const v=u.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function EA(s,t,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,M){s.drawElements(r,M,u,v*h),i.update(M,r,1)}function p(v,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,v*h,E),i.update(M,r,E))}function g(v,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,v,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,r,1)}function x(v,M,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)p(v[_]/h,M[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,v,0,T,0,E);let _=0;for(let L=0;L<E;L++)_+=M[L];for(let L=0;L<T.length;L++)i.update(_,r,T[L])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function TA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function bA(s,t,i){const r=new WeakMap,l=new Fe;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let R=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),S===!0&&(N=3);let k=d.attributes.position.count*N,B=1;k>t.maxTextureSize&&(B=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*B*4*x),Y=new o0(I,k,B,x);Y.type=Zi,Y.needsUpdate=!0;const D=N*4;for(let H=0;H<x;H++){const st=_[H],at=L[H],ct=w[H],lt=k*B*4*H;for(let O=0;O<st.count;O++){const Z=O*D;E===!0&&(l.fromBufferAttribute(st,O),I[lt+Z+0]=l.x,I[lt+Z+1]=l.y,I[lt+Z+2]=l.z,I[lt+Z+3]=0),T===!0&&(l.fromBufferAttribute(at,O),I[lt+Z+4]=l.x,I[lt+Z+5]=l.y,I[lt+Z+6]=l.z,I[lt+Z+7]=0),S===!0&&(l.fromBufferAttribute(ct,O),I[lt+Z+8]=l.x,I[lt+Z+9]=l.y,I[lt+Z+10]=l.z,I[lt+Z+11]=ct.itemSize===4?l.w:1)}}v={count:x,texture:Y,size:new _e(k,B)},r.set(d,v),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function AA(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class g0 extends Nn{constructor(t,i,r,l,u,h,d,m,p,g=Es){if(g!==Es&&g!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Es&&(r=_r),r===void 0&&g===Cs&&(r=Rs),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:ni,this.minFilter=m!==void 0?m:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const _0=new Nn,ov=new g0(1,1),v0=new o0,x0=new cE,S0=new p0,lv=[],uv=[],cv=new Float32Array(16),fv=new Float32Array(9),hv=new Float32Array(4);function Ls(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=lv[l];if(u===void 0&&(u=new Float32Array(l),lv[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function un(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function cn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ju(s,t){let i=uv[t];i===void 0&&(i=new Int32Array(t),uv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function RA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function CA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;s.uniform2fv(this.addr,t),cn(i,t)}}function wA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(un(i,t))return;s.uniform3fv(this.addr,t),cn(i,t)}}function DA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;s.uniform4fv(this.addr,t),cn(i,t)}}function UA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(un(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(un(i,r))return;hv.set(r),s.uniformMatrix2fv(this.addr,!1,hv),cn(i,r)}}function LA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(un(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(un(i,r))return;fv.set(r),s.uniformMatrix3fv(this.addr,!1,fv),cn(i,r)}}function NA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(un(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(un(i,r))return;cv.set(r),s.uniformMatrix4fv(this.addr,!1,cv),cn(i,r)}}function OA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function PA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;s.uniform2iv(this.addr,t),cn(i,t)}}function zA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;s.uniform3iv(this.addr,t),cn(i,t)}}function IA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;s.uniform4iv(this.addr,t),cn(i,t)}}function BA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function FA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(un(i,t))return;s.uniform2uiv(this.addr,t),cn(i,t)}}function HA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(un(i,t))return;s.uniform3uiv(this.addr,t),cn(i,t)}}function GA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(un(i,t))return;s.uniform4uiv(this.addr,t),cn(i,t)}}function VA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(ov.compareFunction=a0,u=ov):u=_0,i.setTexture2D(t||u,l)}function kA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||x0,l)}function XA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||S0,l)}function WA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||v0,l)}function qA(s){switch(s){case 5126:return RA;case 35664:return CA;case 35665:return wA;case 35666:return DA;case 35674:return UA;case 35675:return LA;case 35676:return NA;case 5124:case 35670:return OA;case 35667:case 35671:return PA;case 35668:case 35672:return zA;case 35669:case 35673:return IA;case 5125:return BA;case 36294:return FA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return WA}}function YA(s,t){s.uniform1fv(this.addr,t)}function ZA(s,t){const i=Ls(t,this.size,2);s.uniform2fv(this.addr,i)}function jA(s,t){const i=Ls(t,this.size,3);s.uniform3fv(this.addr,i)}function KA(s,t){const i=Ls(t,this.size,4);s.uniform4fv(this.addr,i)}function QA(s,t){const i=Ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function JA(s,t){const i=Ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function $A(s,t){const i=Ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function t1(s,t){s.uniform1iv(this.addr,t)}function e1(s,t){s.uniform2iv(this.addr,t)}function n1(s,t){s.uniform3iv(this.addr,t)}function i1(s,t){s.uniform4iv(this.addr,t)}function a1(s,t){s.uniform1uiv(this.addr,t)}function r1(s,t){s.uniform2uiv(this.addr,t)}function s1(s,t){s.uniform3uiv(this.addr,t)}function o1(s,t){s.uniform4uiv(this.addr,t)}function l1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);un(r,u)||(s.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||_0,u[h])}function u1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);un(r,u)||(s.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||x0,u[h])}function c1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);un(r,u)||(s.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||S0,u[h])}function f1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);un(r,u)||(s.uniform1iv(this.addr,u),cn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||v0,u[h])}function h1(s){switch(s){case 5126:return YA;case 35664:return ZA;case 35665:return jA;case 35666:return KA;case 35674:return QA;case 35675:return JA;case 35676:return $A;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return a1;case 36294:return r1;case 36295:return s1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return f1}}class d1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qA(i.type)}}class p1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=h1(i.type)}}class m1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function dv(s,t){s.seq.push(t),s.map[t.id]=t}function g1(s,t,i){const r=s.name,l=r.length;for(Lh.lastIndex=0;;){const u=Lh.exec(r),h=Lh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){dv(i,p===void 0?new d1(d,s,t):new p1(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new m1(d),dv(i,x)),i=x}}}class Pu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);g1(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function pv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const _1=37297;let v1=0;function x1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function S1(s){const t=Te.getPrimaries(Te.workingColorSpace),i=Te.getPrimaries(s);let r;switch(t===i?r="":t===Hu&&i===Fu?r="LinearDisplayP3ToLinearSRGB":t===Fu&&i===Hu&&(r="LinearSRGBToLinearDisplayP3"),s){case Ba:case qu:return[r,"LinearTransferOETF"];case vi:case Ld:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function mv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+x1(s.getShaderSource(t),h)}else return l}function y1(s,t){const i=S1(t);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function M1(s,t){let i;switch(t){case IM:i="Linear";break;case BM:i="Reinhard";break;case FM:i="Cineon";break;case HM:i="ACESFilmic";break;case VM:i="AgX";break;case kM:i="Neutral";break;case GM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Au=new tt;function E1(){Te.getLuminanceCoefficients(Au);const s=Au.x.toFixed(4),t=Au.y.toFixed(4),i=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function b1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function A1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Bo(s){return s!==""}function gv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _v(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(s){return s.replace(R1,w1)}const C1=new Map;function w1(s,t){let i=se[t];if(i===void 0){const r=C1.get(t);if(r!==void 0)i=se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return vd(i)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(s){return s.replace(D1,U1)}function U1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function xv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===uM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function N1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case As:t="ENVMAP_TYPE_CUBE";break;case Wu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function P1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qv:t="ENVMAP_BLENDING_MULTIPLY";break;case PM:t="ENVMAP_BLENDING_MIX";break;case zM:t="ENVMAP_BLENDING_ADD";break}return t}function z1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function I1(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=L1(i),p=N1(i),g=O1(i),x=P1(i),v=z1(i),M=T1(i),E=b1(u),T=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(S=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pa?"#define TONE_MAPPING":"",i.toneMapping!==Pa?se.tonemapping_pars_fragment:"",i.toneMapping!==Pa?M1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,y1("linearToOutputTexel",i.outputColorSpace),E1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=vd(h),h=gv(h,i),h=_v(h,i),d=vd(d),d=gv(d,i),d=_v(d,i),h=vv(h),d=vv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=L+S+h,N=L+_+d,k=pv(l,l.VERTEX_SHADER,w),B=pv(l,l.FRAGMENT_SHADER,N);l.attachShader(T,k),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(H){if(s.debug.checkShaderErrors){const st=l.getProgramInfoLog(T).trim(),at=l.getShaderInfoLog(k).trim(),ct=l.getShaderInfoLog(B).trim();let lt=!0,O=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,k,B);else{const Z=mv(l,k,"vertex"),j=mv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+Z+`
`+j)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(at===""||ct==="")&&(O=!1);O&&(H.diagnostics={runnable:lt,programLog:st,vertexShader:{log:at,prefix:S},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(k),l.deleteShader(B),Y=new Pu(l,T),D=A1(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&I(this),Y};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,_1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=v1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=B,this}let B1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new H1(t),i.set(t,r)),r}}class H1{constructor(t){this.id=B1++,this.code=t,this.usedTimes=0}}function G1(s,t,i,r,l,u,h){const d=new l0,m=new F1,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,R,H,st,at){const ct=st.fog,lt=at.geometry,O=D.isMeshStandardMaterial?st.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),j=Z&&Z.mapping===Wu?Z.image.height:null,Et=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=U!==void 0?U.length:0;let St=0;lt.morphAttributes.position!==void 0&&(St=1),lt.morphAttributes.normal!==void 0&&(St=2),lt.morphAttributes.color!==void 0&&(St=3);let yt,K,ft,vt;if(Et){const pe=xi[Et];yt=pe.vertexShader,K=pe.fragmentShader}else yt=D.vertexShader,K=D.fragmentShader,m.update(D),ft=m.getVertexShaderID(D),vt=m.getFragmentShaderID(D);const wt=s.getRenderTarget(),Lt=at.isInstancedMesh===!0,Wt=at.isBatchedMesh===!0,ae=!!D.map,Le=!!D.matcap,F=!!Z,He=!!D.aoMap,ve=!!D.lightMap,Ee=!!D.bumpMap,kt=!!D.normalMap,ye=!!D.displacementMap,te=!!D.emissiveMap,ee=!!D.metalnessMap,P=!!D.roughnessMap,A=D.anisotropy>0,ot=D.clearcoat>0,_t=D.dispersion>0,Mt=D.iridescence>0,xt=D.sheen>0,Vt=D.transmission>0,At=A&&!!D.anisotropyMap,Ut=ot&&!!D.clearcoatMap,Xt=ot&&!!D.clearcoatNormalMap,Rt=ot&&!!D.clearcoatRoughnessMap,Pt=Mt&&!!D.iridescenceMap,he=Mt&&!!D.iridescenceThicknessMap,jt=xt&&!!D.sheenColorMap,Ot=xt&&!!D.sheenRoughnessMap,qt=!!D.specularMap,ne=!!D.specularColorMap,be=!!D.specularIntensityMap,X=Vt&&!!D.transmissionMap,bt=Vt&&!!D.thicknessMap,pt=!!D.gradientMap,gt=!!D.alphaMap,Ct=D.alphaTest>0,Qt=!!D.alphaHash,de=!!D.extensions;let Xe=Pa;D.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const Qe={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:K,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:vt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Wt,batchingColor:Wt&&at._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&at.instanceColor!==null,instancingMorph:Lt&&at.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Ba,alphaToCoverage:!!D.alphaToCoverage,map:ae,matcap:Le,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:j,aoMap:He,lightMap:ve,bumpMap:Ee,normalMap:kt,displacementMap:v&&ye,emissiveMap:te,normalMapObjectSpace:kt&&D.normalMapType===ZM,normalMapTangentSpace:kt&&D.normalMapType===YM,metalnessMap:ee,roughnessMap:P,anisotropy:A,anisotropyMap:At,clearcoat:ot,clearcoatMap:Ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:Rt,dispersion:_t,iridescence:Mt,iridescenceMap:Pt,iridescenceThicknessMap:he,sheen:xt,sheenColorMap:jt,sheenRoughnessMap:Ot,specularMap:qt,specularColorMap:ne,specularIntensityMap:be,transmission:Vt,transmissionMap:X,thicknessMap:bt,gradientMap:pt,opaque:D.transparent===!1&&D.blending===Ms&&D.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Qt,combine:D.combine,mapUv:ae&&T(D.map.channel),aoMapUv:He&&T(D.aoMap.channel),lightMapUv:ve&&T(D.lightMap.channel),bumpMapUv:Ee&&T(D.bumpMap.channel),normalMapUv:kt&&T(D.normalMap.channel),displacementMapUv:ye&&T(D.displacementMap.channel),emissiveMapUv:te&&T(D.emissiveMap.channel),metalnessMapUv:ee&&T(D.metalnessMap.channel),roughnessMapUv:P&&T(D.roughnessMap.channel),anisotropyMapUv:At&&T(D.anisotropyMap.channel),clearcoatMapUv:Ut&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:he&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(D.sheenRoughnessMap.channel),specularMapUv:qt&&T(D.specularMap.channel),specularColorMapUv:ne&&T(D.specularColorMap.channel),specularIntensityMapUv:be&&T(D.specularIntensityMap.channel),transmissionMapUv:X&&T(D.transmissionMap.channel),thicknessMapUv:bt&&T(D.thicknessMap.channel),alphaMapUv:gt&&T(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(kt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!lt.attributes.uv&&(ae||gt),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:at.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:St,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ae&&D.map.isVideoTexture===!0&&Te.getTransfer(D.map.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Yi,flipSided:D.side===Ln,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:de&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&D.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Qe.vertexUv1s=p.has(1),Qe.vertexUv2s=p.has(2),Qe.vertexUv3s=p.has(3),p.clear(),Qe}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(L(R,D),w(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function L(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function w(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.skinning&&d.enable(4),R.morphTargets&&d.enable(5),R.morphNormals&&d.enable(6),R.morphColors&&d.enable(7),R.premultipliedAlpha&&d.enable(8),R.shadowMapEnabled&&d.enable(9),R.doubleSided&&d.enable(10),R.flipSided&&d.enable(11),R.useDepthPacking&&d.enable(12),R.dithering&&d.enable(13),R.transmission&&d.enable(14),R.sheen&&d.enable(15),R.opaque&&d.enable(16),R.pointsUvs&&d.enable(17),R.decodeVideoTexture&&d.enable(18),R.alphaToCoverage&&d.enable(19),D.push(d.mask)}function N(D){const R=E[D.type];let H;if(R){const st=xi[R];H=EE.clone(st.uniforms)}else H=D.uniforms;return H}function k(D,R){let H;for(let st=0,at=g.length;st<at;st++){const ct=g[st];if(ct.cacheKey===R){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new I1(s,R,D,u),g.push(H)),H}function B(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function Y(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:N,acquireProgram:k,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:Y}}function V1(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function k1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,v,M,E,T,S){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:M,groupOrder:E,renderOrder:x.renderOrder,z:T,group:S},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=M,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=T,_.group=S),t++,_}function d(x,v,M,E,T,S){const _=h(x,v,M,E,T,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,v,M,E,T,S){const _=h(x,v,M,E,T,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||k1),r.length>1&&r.sort(v||Sv),l.length>1&&l.sort(v||Sv)}function g(){for(let x=t,v=s.length;x<v;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function X1(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new yv,s.set(r,[h])):l>=u.length?(h=new yv,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function W1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new Ce};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function q1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Y1=0;function Z1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function j1(s){const t=new W1,i=q1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,u=new Ke,h=new Ke;function d(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,T=0,S=0,_=0,L=0,w=0,N=0,k=0,B=0,I=0;p.sort(Z1);for(let D=0,R=p.length;D<R;D++){const H=p[D],st=H.color,at=H.intensity,ct=H.distance,lt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=st.r*at,x+=st.g*at,v+=st.b*at;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],at);I++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=H.shadow.matrix,L++}r.directional[M]=O,M++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(st).multiplyScalar(at),O.distance=ct,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[T]=O;const Z=H.shadow;if(H.map&&(r.spotLightMap[k]=H.map,k++,Z.updateMatrices(H),H.castShadow&&B++),r.spotLightMatrix[T]=Z.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[T]=j,r.spotShadowMap[T]=lt,N++}T++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(st).multiplyScalar(at),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=O,S++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=H.shadow.matrix,w++}r.point[E]=O,E++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(at),O.groundColor.copy(H.groundColor).multiplyScalar(at),r.hemi[_]=O,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==S||Y.hemiLength!==_||Y.numDirectionalShadows!==L||Y.numPointShadows!==w||Y.numSpotShadows!==N||Y.numSpotMaps!==k||Y.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=N+k-B,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=I,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=S,Y.hemiLength=_,Y.numDirectionalShadows=L,Y.numPointShadows=w,Y.numSpotShadows=N,Y.numSpotMaps=k,Y.numLightProbes=I,r.version=Y1++)}function m(p,g){let x=0,v=0,M=0,E=0,T=0;const S=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const w=p[_];if(w.isDirectionalLight){const N=r.directional[x];N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),x++}else if(w.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(w.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(S),h.identity(),u.copy(w.matrixWorld),u.premultiply(S),h.extractRotation(u),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(w.isPointLight){const N=r.point[v];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(S),v++}else if(w.isHemisphereLight){const N=r.hemi[T];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(S),T++}}}return{setup:d,setupView:m,state:r}}function Mv(s){const t=new j1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function K1(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Mv(s),t.set(l,[d])):u>=h.length?(d=new Mv(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}class Q1 extends Yu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class J1 extends Yu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eR(s,t,i){let r=new Pd;const l=new _e,u=new _e,h=new Fe,d=new Q1({depthPacking:qM}),m=new J1,p={},g=i.maxTextureSize,x={[za]:Ln,[Ln]:za,[Yi]:Yi},v=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:$1,fragmentShader:tR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Fa;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new yi(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wv;let _=this.type;this.render=function(B,I,Y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),st=s.state;st.setBlending(Oa),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const at=_!==qi&&this.type===qi,ct=_===qi&&this.type!==qi;for(let lt=0,O=B.length;lt<O;lt++){const Z=B[lt],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Et=j.getFrameExtents();if(l.multiply(Et),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,j.mapSize.y=u.y)),j.map===null||at===!0||ct===!0){const J=this.type!==qi?{minFilter:ni,magFilter:ni}:{};j.map!==null&&j.map.dispose(),j.map=new vr(l.x,l.y,J),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const U=j.getViewportCount();for(let J=0;J<U;J++){const St=j.getViewport(J);h.set(u.x*St.x,u.y*St.y,u.x*St.z,u.y*St.w),st.viewport(h),j.updateMatrices(Z,J),r=j.getFrustum(),N(I,Y,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===qi&&L(j,Y),j.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,R,H)};function L(B,I){const Y=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new vr(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(I,null,Y,v,T,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(I,null,Y,M,T,null)}function w(B,I,Y,D){let R=null;const H=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)R=H;else if(R=Y.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const st=R.uuid,at=I.uuid;let ct=p[st];ct===void 0&&(ct={},p[st]=ct);let lt=ct[at];lt===void 0&&(lt=R.clone(),ct[at]=lt,I.addEventListener("dispose",k)),R=lt}if(R.visible=I.visible,R.wireframe=I.wireframe,D===qi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:x[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const st=s.properties.get(R);st.light=Y}return R}function N(B,I,Y,D,R){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===qi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const at=t.update(B),ct=B.material;if(Array.isArray(ct)){const lt=at.groups;for(let O=0,Z=lt.length;O<Z;O++){const j=lt[O],Et=ct[j.materialIndex];if(Et&&Et.visible){const U=w(B,Et,D,R);B.onBeforeShadow(s,B,I,Y,at,U,j),s.renderBufferDirect(Y,null,at,U,B,j),B.onAfterShadow(s,B,I,Y,at,U,j)}}}else if(ct.visible){const lt=w(B,ct,D,R);B.onBeforeShadow(s,B,I,Y,at,lt,null),s.renderBufferDirect(Y,null,at,lt,B,null),B.onAfterShadow(s,B,I,Y,at,lt,null)}}const st=B.children;for(let at=0,ct=st.length;at<ct;at++)N(st[at],I,Y,D,R)}function k(B){B.target.removeEventListener("dispose",k);for(const Y in p){const D=p[Y],R=B.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function nR(s){function t(){let X=!1;const bt=new Fe;let pt=null;const gt=new Fe(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!X&&(s.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Qt,de,Xe,Qe){Qe===!0&&(Ct*=Xe,Qt*=Xe,de*=Xe),bt.set(Ct,Qt,de,Xe),gt.equals(bt)===!1&&(s.clearColor(Ct,Qt,de,Xe),gt.copy(bt))},reset:function(){X=!1,pt=null,gt.set(-1,0,0,0)}}}function i(){let X=!1,bt=null,pt=null,gt=null;return{setTest:function(Ct){Ct?vt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(Ct){bt!==Ct&&!X&&(s.depthMask(Ct),bt=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case CM:s.depthFunc(s.NEVER);break;case wM:s.depthFunc(s.ALWAYS);break;case DM:s.depthFunc(s.LESS);break;case Iu:s.depthFunc(s.LEQUAL);break;case UM:s.depthFunc(s.EQUAL);break;case LM:s.depthFunc(s.GEQUAL);break;case NM:s.depthFunc(s.GREATER);break;case OM:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=Ct}},setLocked:function(Ct){X=Ct},setClear:function(Ct){gt!==Ct&&(s.clearDepth(Ct),gt=Ct)},reset:function(){X=!1,bt=null,pt=null,gt=null}}}function r(){let X=!1,bt=null,pt=null,gt=null,Ct=null,Qt=null,de=null,Xe=null,Qe=null;return{setTest:function(pe){X||(pe?vt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(pe){bt!==pe&&!X&&(s.stencilMask(pe),bt=pe)},setFunc:function(pe,qn,Yn){(pt!==pe||gt!==qn||Ct!==Yn)&&(s.stencilFunc(pe,qn,Yn),pt=pe,gt=qn,Ct=Yn)},setOp:function(pe,qn,Yn){(Qt!==pe||de!==qn||Xe!==Yn)&&(s.stencilOp(pe,qn,Yn),Qt=pe,de=qn,Xe=Yn)},setLocked:function(pe){X=pe},setClear:function(pe){Qe!==pe&&(s.clearStencil(pe),Qe=pe)},reset:function(){X=!1,bt=null,pt=null,gt=null,Ct=null,Qt=null,de=null,Xe=null,Qe=null}}}const l=new t,u=new i,h=new r,d=new WeakMap,m=new WeakMap;let p={},g={},x=new WeakMap,v=[],M=null,E=!1,T=null,S=null,_=null,L=null,w=null,N=null,k=null,B=new Ce(0,0,0),I=0,Y=!1,D=null,R=null,H=null,st=null,at=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,O=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),lt=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),lt=O>=2);let j=null,Et={};const U=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),St=new Fe().fromArray(U),yt=new Fe().fromArray(J);function K(X,bt,pt,gt){const Ct=new Uint8Array(4),Qt=s.createTexture();s.bindTexture(X,Qt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<pt;de++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(bt+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return Qt}const ft={};ft[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),vt(s.DEPTH_TEST),u.setFunc(Iu),Ee(!1),kt(C_),vt(s.CULL_FACE),He(Oa);function vt(X){p[X]!==!0&&(s.enable(X),p[X]=!0)}function wt(X){p[X]!==!1&&(s.disable(X),p[X]=!1)}function Lt(X,bt){return g[X]!==bt?(s.bindFramebuffer(X,bt),g[X]=bt,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=bt),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(X,bt){let pt=v,gt=!1;if(X){pt=x.get(bt),pt===void 0&&(pt=[],x.set(bt,pt));const Ct=X.textures;if(pt.length!==Ct.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let Qt=0,de=Ct.length;Qt<de;Qt++)pt[Qt]=s.COLOR_ATTACHMENT0+Qt;pt.length=Ct.length,gt=!0}}else pt[0]!==s.BACK&&(pt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(pt)}function ae(X){return M!==X?(s.useProgram(X),M=X,!0):!1}const Le={[dr]:s.FUNC_ADD,[fM]:s.FUNC_SUBTRACT,[hM]:s.FUNC_REVERSE_SUBTRACT};Le[dM]=s.MIN,Le[pM]=s.MAX;const F={[mM]:s.ZERO,[gM]:s.ONE,[_M]:s.SRC_COLOR,[Fh]:s.SRC_ALPHA,[EM]:s.SRC_ALPHA_SATURATE,[yM]:s.DST_COLOR,[xM]:s.DST_ALPHA,[vM]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[MM]:s.ONE_MINUS_DST_COLOR,[SM]:s.ONE_MINUS_DST_ALPHA,[TM]:s.CONSTANT_COLOR,[bM]:s.ONE_MINUS_CONSTANT_COLOR,[AM]:s.CONSTANT_ALPHA,[RM]:s.ONE_MINUS_CONSTANT_ALPHA};function He(X,bt,pt,gt,Ct,Qt,de,Xe,Qe,pe){if(X===Oa){E===!0&&(wt(s.BLEND),E=!1);return}if(E===!1&&(vt(s.BLEND),E=!0),X!==cM){if(X!==T||pe!==Y){if((S!==dr||w!==dr)&&(s.blendEquation(s.FUNC_ADD),S=dr,w=dr),pe)switch(X){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case w_:s.blendFunc(s.ONE,s.ONE);break;case D_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case U_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case w_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case D_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case U_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}_=null,L=null,N=null,k=null,B.set(0,0,0),I=0,T=X,Y=pe}return}Ct=Ct||bt,Qt=Qt||pt,de=de||gt,(bt!==S||Ct!==w)&&(s.blendEquationSeparate(Le[bt],Le[Ct]),S=bt,w=Ct),(pt!==_||gt!==L||Qt!==N||de!==k)&&(s.blendFuncSeparate(F[pt],F[gt],F[Qt],F[de]),_=pt,L=gt,N=Qt,k=de),(Xe.equals(B)===!1||Qe!==I)&&(s.blendColor(Xe.r,Xe.g,Xe.b,Qe),B.copy(Xe),I=Qe),T=X,Y=!1}function ve(X,bt){X.side===Yi?wt(s.CULL_FACE):vt(s.CULL_FACE);let pt=X.side===Ln;bt&&(pt=!pt),Ee(pt),X.blending===Ms&&X.transparent===!1?He(Oa):He(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const gt=X.stencilWrite;h.setTest(gt),gt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),te(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function kt(X){X!==oM?(vt(s.CULL_FACE),X!==R&&(X===C_?s.cullFace(s.BACK):X===lM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),R=X}function ye(X){X!==H&&(lt&&s.lineWidth(X),H=X)}function te(X,bt,pt){X?(vt(s.POLYGON_OFFSET_FILL),(st!==bt||at!==pt)&&(s.polygonOffset(bt,pt),st=bt,at=pt)):wt(s.POLYGON_OFFSET_FILL)}function ee(X){X?vt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function P(X){X===void 0&&(X=s.TEXTURE0+ct-1),j!==X&&(s.activeTexture(X),j=X)}function A(X,bt,pt){pt===void 0&&(j===null?pt=s.TEXTURE0+ct-1:pt=j);let gt=Et[pt];gt===void 0&&(gt={type:void 0,texture:void 0},Et[pt]=gt),(gt.type!==X||gt.texture!==bt)&&(j!==pt&&(s.activeTexture(pt),j=pt),s.bindTexture(X,bt||ft[X]),gt.type=X,gt.texture=bt)}function ot(){const X=Et[j];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _t(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(X){St.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Ot(X){yt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),yt.copy(X))}function qt(X,bt){let pt=m.get(bt);pt===void 0&&(pt=new WeakMap,m.set(bt,pt));let gt=pt.get(X);gt===void 0&&(gt=s.getUniformBlockIndex(bt,X.name),pt.set(X,gt))}function ne(X,bt){const gt=m.get(bt).get(X);d.get(bt)!==gt&&(s.uniformBlockBinding(bt,gt,X.__bindingPointIndex),d.set(bt,gt))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},j=null,Et={},g={},x=new WeakMap,v=[],M=null,E=!1,T=null,S=null,_=null,L=null,w=null,N=null,k=null,B=new Ce(0,0,0),I=0,Y=!1,D=null,R=null,H=null,st=null,at=null,St.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:vt,disable:wt,bindFramebuffer:Lt,drawBuffers:Wt,useProgram:ae,setBlending:He,setMaterial:ve,setFlipSided:Ee,setCullFace:kt,setLineWidth:ye,setPolygonOffset:te,setScissorTest:ee,activeTexture:P,bindTexture:A,unbindTexture:ot,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:Pt,texImage3D:he,updateUBOMapping:qt,uniformBlockBinding:ne,texStorage2D:Xt,texStorage3D:Rt,texSubImage2D:xt,texSubImage3D:Vt,compressedTexSubImage2D:At,compressedTexSubImage3D:Ut,scissor:jt,viewport:Ot,reset:be}}function Ev(s,t,i,r){const l=iR(r);switch(i){case Qv:return s*t;case $v:return s*t;case t0:return s*t*2;case e0:return s*t/l.components*l.byteLength;case wd:return s*t/l.components*l.byteLength;case n0:return s*t*2/l.components*l.byteLength;case Dd:return s*t*2/l.components*l.byteLength;case Jv:return s*t*3/l.components*l.byteLength;case fi:return s*t*4/l.components*l.byteLength;case Ud:return s*t*4/l.components*l.byteLength;case Du:case Uu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lu:case Nu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qh:case Zh:return Math.max(s,16)*Math.max(t,8)/4;case Wh:case Yh:return Math.max(s,8)*Math.max(t,8)/2;case jh:case Kh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case td:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case nd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case id:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ad:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case rd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case od:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ld:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ud:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case cd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ou:case hd:case dd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case i0:case pd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case md:case gd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function iR(s){switch(s){case Ji:case Zv:return{byteLength:1,components:1};case Go:case jv:case Wo:return{byteLength:2,components:1};case Rd:case Cd:return{byteLength:2,components:4};case _r:case Ad:case Zi:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function aR(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _e,g=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,A){return M?new OffscreenCanvas(P,A):Vu("canvas")}function T(P,A,ot){let _t=1;const Mt=ee(P);if((Mt.width>ot||Mt.height>ot)&&(_t=ot/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const xt=Math.floor(_t*Mt.width),Vt=Math.floor(_t*Mt.height);x===void 0&&(x=E(xt,Vt));const At=A?E(xt,Vt):x;return At.width=xt,At.height=Vt,At.getContext("2d").drawImage(P,0,0,xt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+xt+"x"+Vt+")."),At}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function S(P){return P.generateMipmaps&&P.minFilter!==ni&&P.minFilter!==ci}function _(P){s.generateMipmap(P)}function L(P,A,ot,_t,Mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xt=A;if(A===s.RED&&(ot===s.FLOAT&&(xt=s.R32F),ot===s.HALF_FLOAT&&(xt=s.R16F),ot===s.UNSIGNED_BYTE&&(xt=s.R8)),A===s.RED_INTEGER&&(ot===s.UNSIGNED_BYTE&&(xt=s.R8UI),ot===s.UNSIGNED_SHORT&&(xt=s.R16UI),ot===s.UNSIGNED_INT&&(xt=s.R32UI),ot===s.BYTE&&(xt=s.R8I),ot===s.SHORT&&(xt=s.R16I),ot===s.INT&&(xt=s.R32I)),A===s.RG&&(ot===s.FLOAT&&(xt=s.RG32F),ot===s.HALF_FLOAT&&(xt=s.RG16F),ot===s.UNSIGNED_BYTE&&(xt=s.RG8)),A===s.RG_INTEGER&&(ot===s.UNSIGNED_BYTE&&(xt=s.RG8UI),ot===s.UNSIGNED_SHORT&&(xt=s.RG16UI),ot===s.UNSIGNED_INT&&(xt=s.RG32UI),ot===s.BYTE&&(xt=s.RG8I),ot===s.SHORT&&(xt=s.RG16I),ot===s.INT&&(xt=s.RG32I)),A===s.RGB&&ot===s.UNSIGNED_INT_5_9_9_9_REV&&(xt=s.RGB9_E5),A===s.RGBA){const Vt=Mt?Bu:Te.getTransfer(_t);ot===s.FLOAT&&(xt=s.RGBA32F),ot===s.HALF_FLOAT&&(xt=s.RGBA16F),ot===s.UNSIGNED_BYTE&&(xt=Vt===Be?s.SRGB8_ALPHA8:s.RGBA8),ot===s.UNSIGNED_SHORT_4_4_4_4&&(xt=s.RGBA4),ot===s.UNSIGNED_SHORT_5_5_5_1&&(xt=s.RGB5_A1)}return(xt===s.R16F||xt===s.R32F||xt===s.RG16F||xt===s.RG32F||xt===s.RGBA16F||xt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function w(P,A){let ot;return P?A===null||A===_r||A===Rs?ot=s.DEPTH24_STENCIL8:A===Zi?ot=s.DEPTH32F_STENCIL8:A===Go&&(ot=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_r||A===Rs?ot=s.DEPTH_COMPONENT24:A===Zi?ot=s.DEPTH_COMPONENT32F:A===Go&&(ot=s.DEPTH_COMPONENT16),ot}function N(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==ni&&P.minFilter!==ci?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function k(P){const A=P.target;A.removeEventListener("dispose",k),I(A),A.isVideoTexture&&g.delete(A)}function B(P){const A=P.target;A.removeEventListener("dispose",B),D(A)}function I(P){const A=r.get(P);if(A.__webglInit===void 0)return;const ot=P.source,_t=v.get(ot);if(_t){const Mt=_t[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&Y(P),Object.keys(_t).length===0&&v.delete(ot)}r.remove(P)}function Y(P){const A=r.get(P);s.deleteTexture(A.__webglTexture);const ot=P.source,_t=v.get(ot);delete _t[A.__cacheKey],h.memory.textures--}function D(P){const A=r.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let Mt=0;Mt<A.__webglFramebuffer[_t].length;Mt++)s.deleteFramebuffer(A.__webglFramebuffer[_t][Mt]);else s.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)s.deleteFramebuffer(A.__webglFramebuffer[_t]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ot=P.textures;for(let _t=0,Mt=ot.length;_t<Mt;_t++){const xt=r.get(ot[_t]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),h.memory.textures--),r.remove(ot[_t])}r.remove(P)}let R=0;function H(){R=0}function st(){const P=R;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),R+=1,P}function at(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ct(P,A){const ot=r.get(P);if(P.isVideoTexture&&ye(P),P.isRenderTargetTexture===!1&&P.version>0&&ot.__version!==P.version){const _t=P.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(ot,P,A);return}}i.bindTexture(s.TEXTURE_2D,ot.__webglTexture,s.TEXTURE0+A)}function lt(P,A){const ot=r.get(P);if(P.version>0&&ot.__version!==P.version){yt(ot,P,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ot.__webglTexture,s.TEXTURE0+A)}function O(P,A){const ot=r.get(P);if(P.version>0&&ot.__version!==P.version){yt(ot,P,A);return}i.bindTexture(s.TEXTURE_3D,ot.__webglTexture,s.TEXTURE0+A)}function Z(P,A){const ot=r.get(P);if(P.version>0&&ot.__version!==P.version){K(ot,P,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture,s.TEXTURE0+A)}const j={[kh]:s.REPEAT,[mr]:s.CLAMP_TO_EDGE,[Xh]:s.MIRRORED_REPEAT},Et={[ni]:s.NEAREST,[XM]:s.NEAREST_MIPMAP_NEAREST,[ru]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[gr]:s.LINEAR_MIPMAP_LINEAR},U={[jM]:s.NEVER,[eE]:s.ALWAYS,[KM]:s.LESS,[a0]:s.LEQUAL,[QM]:s.EQUAL,[tE]:s.GEQUAL,[JM]:s.GREATER,[$M]:s.NOTEQUAL};function J(P,A){if(A.type===Zi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ci||A.magFilter===sh||A.magFilter===ru||A.magFilter===gr||A.minFilter===ci||A.minFilter===sh||A.minFilter===ru||A.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,j[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,j[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,j[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Et[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Et[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ni||A.minFilter!==ru&&A.minFilter!==gr||A.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ot=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function St(P,A){let ot=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",k));const _t=A.source;let Mt=v.get(_t);Mt===void 0&&(Mt={},v.set(_t,Mt));const xt=at(A);if(xt!==P.__cacheKey){Mt[xt]===void 0&&(Mt[xt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,ot=!0),Mt[xt].usedTimes++;const Vt=Mt[P.__cacheKey];Vt!==void 0&&(Mt[P.__cacheKey].usedTimes--,Vt.usedTimes===0&&Y(A)),P.__cacheKey=xt,P.__webglTexture=Mt[xt].texture}return ot}function yt(P,A,ot){let _t=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=s.TEXTURE_3D);const Mt=St(P,A),xt=A.source;i.bindTexture(_t,P.__webglTexture,s.TEXTURE0+ot);const Vt=r.get(xt);if(xt.version!==Vt.__version||Mt===!0){i.activeTexture(s.TEXTURE0+ot);const At=Te.getPrimaries(Te.workingColorSpace),Ut=A.colorSpace===Na?null:Te.getPrimaries(A.colorSpace),Xt=A.colorSpace===Na||At===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Rt=T(A.image,!1,l.maxTextureSize);Rt=te(A,Rt);const Pt=u.convert(A.format,A.colorSpace),he=u.convert(A.type);let jt=L(A.internalFormat,Pt,he,A.colorSpace,A.isVideoTexture);J(_t,A);let Ot;const qt=A.mipmaps,ne=A.isVideoTexture!==!0,be=Vt.__version===void 0||Mt===!0,X=xt.dataReady,bt=N(A,Rt);if(A.isDepthTexture)jt=w(A.format===Cs,A.type),be&&(ne?i.texStorage2D(s.TEXTURE_2D,1,jt,Rt.width,Rt.height):i.texImage2D(s.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,he,null));else if(A.isDataTexture)if(qt.length>0){ne&&be&&i.texStorage2D(s.TEXTURE_2D,bt,jt,qt[0].width,qt[0].height);for(let pt=0,gt=qt.length;pt<gt;pt++)Ot=qt[pt],ne?X&&i.texSubImage2D(s.TEXTURE_2D,pt,0,0,Ot.width,Ot.height,Pt,he,Ot.data):i.texImage2D(s.TEXTURE_2D,pt,jt,Ot.width,Ot.height,0,Pt,he,Ot.data);A.generateMipmaps=!1}else ne?(be&&i.texStorage2D(s.TEXTURE_2D,bt,jt,Rt.width,Rt.height),X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Pt,he,Rt.data)):i.texImage2D(s.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Pt,he,Rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ne&&be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,bt,jt,qt[0].width,qt[0].height,Rt.depth);for(let pt=0,gt=qt.length;pt<gt;pt++)if(Ot=qt[pt],A.format!==fi)if(Pt!==null)if(ne){if(X)if(A.layerUpdates.size>0){const Ct=Ev(Ot.width,Ot.height,A.format,A.type);for(const Qt of A.layerUpdates){const de=Ot.data.subarray(Qt*Ct/Ot.data.BYTES_PER_ELEMENT,(Qt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,Qt,Ot.width,Ot.height,1,Pt,de,0,0)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Ot.width,Ot.height,Rt.depth,Pt,Ot.data,0,0)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,jt,Ot.width,Ot.height,Rt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Ot.width,Ot.height,Rt.depth,Pt,he,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,pt,jt,Ot.width,Ot.height,Rt.depth,0,Pt,he,Ot.data)}else{ne&&be&&i.texStorage2D(s.TEXTURE_2D,bt,jt,qt[0].width,qt[0].height);for(let pt=0,gt=qt.length;pt<gt;pt++)Ot=qt[pt],A.format!==fi?Pt!==null?ne?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,Ot.width,Ot.height,Pt,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,pt,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?X&&i.texSubImage2D(s.TEXTURE_2D,pt,0,0,Ot.width,Ot.height,Pt,he,Ot.data):i.texImage2D(s.TEXTURE_2D,pt,jt,Ot.width,Ot.height,0,Pt,he,Ot.data)}else if(A.isDataArrayTexture)if(ne){if(be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,bt,jt,Rt.width,Rt.height,Rt.depth),X)if(A.layerUpdates.size>0){const pt=Ev(Rt.width,Rt.height,A.format,A.type);for(const gt of A.layerUpdates){const Ct=Rt.data.subarray(gt*pt/Rt.data.BYTES_PER_ELEMENT,(gt+1)*pt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Rt.width,Rt.height,1,Pt,he,Ct)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,he,Rt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,he,Rt.data);else if(A.isData3DTexture)ne?(be&&i.texStorage3D(s.TEXTURE_3D,bt,jt,Rt.width,Rt.height,Rt.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,he,Rt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,Rt.width,Rt.height,Rt.depth,0,Pt,he,Rt.data);else if(A.isFramebufferTexture){if(be)if(ne)i.texStorage2D(s.TEXTURE_2D,bt,jt,Rt.width,Rt.height);else{let pt=Rt.width,gt=Rt.height;for(let Ct=0;Ct<bt;Ct++)i.texImage2D(s.TEXTURE_2D,Ct,jt,pt,gt,0,Pt,he,null),pt>>=1,gt>>=1}}else if(qt.length>0){if(ne&&be){const pt=ee(qt[0]);i.texStorage2D(s.TEXTURE_2D,bt,jt,pt.width,pt.height)}for(let pt=0,gt=qt.length;pt<gt;pt++)Ot=qt[pt],ne?X&&i.texSubImage2D(s.TEXTURE_2D,pt,0,0,Pt,he,Ot):i.texImage2D(s.TEXTURE_2D,pt,jt,Pt,he,Ot);A.generateMipmaps=!1}else if(ne){if(be){const pt=ee(Rt);i.texStorage2D(s.TEXTURE_2D,bt,jt,pt.width,pt.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,he,Rt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Pt,he,Rt);S(A)&&_(_t),Vt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function K(P,A,ot){if(A.image.length!==6)return;const _t=St(P,A),Mt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ot);const xt=r.get(Mt);if(Mt.version!==xt.__version||_t===!0){i.activeTexture(s.TEXTURE0+ot);const Vt=Te.getPrimaries(Te.workingColorSpace),At=A.colorSpace===Na?null:Te.getPrimaries(A.colorSpace),Ut=A.colorSpace===Na||Vt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,Rt=A.image[0]&&A.image[0].isDataTexture,Pt=[];for(let gt=0;gt<6;gt++)!Xt&&!Rt?Pt[gt]=T(A.image[gt],!0,l.maxCubemapSize):Pt[gt]=Rt?A.image[gt].image:A.image[gt],Pt[gt]=te(A,Pt[gt]);const he=Pt[0],jt=u.convert(A.format,A.colorSpace),Ot=u.convert(A.type),qt=L(A.internalFormat,jt,Ot,A.colorSpace),ne=A.isVideoTexture!==!0,be=xt.__version===void 0||_t===!0,X=Mt.dataReady;let bt=N(A,he);J(s.TEXTURE_CUBE_MAP,A);let pt;if(Xt){ne&&be&&i.texStorage2D(s.TEXTURE_CUBE_MAP,bt,qt,he.width,he.height);for(let gt=0;gt<6;gt++){pt=Pt[gt].mipmaps;for(let Ct=0;Ct<pt.length;Ct++){const Qt=pt[Ct];A.format!==fi?jt!==null?ne?X&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Qt.width,Qt.height,jt,Qt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,qt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Qt.width,Qt.height,jt,Ot,Qt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,qt,Qt.width,Qt.height,0,jt,Ot,Qt.data)}}}else{if(pt=A.mipmaps,ne&&be){pt.length>0&&bt++;const gt=ee(Pt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,bt,qt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Rt){ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt[gt].width,Pt[gt].height,jt,Ot,Pt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,Pt[gt].width,Pt[gt].height,0,jt,Ot,Pt[gt].data);for(let Ct=0;Ct<pt.length;Ct++){const de=pt[Ct].image[gt].image;ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,de.width,de.height,jt,Ot,de.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,qt,de.width,de.height,0,jt,Ot,de.data)}}else{ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,jt,Ot,Pt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,jt,Ot,Pt[gt]);for(let Ct=0;Ct<pt.length;Ct++){const Qt=pt[Ct];ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,jt,Ot,Qt.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,qt,jt,Ot,Qt.image[gt])}}}S(A)&&_(s.TEXTURE_CUBE_MAP),xt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ft(P,A,ot,_t,Mt,xt){const Vt=u.convert(ot.format,ot.colorSpace),At=u.convert(ot.type),Ut=L(ot.internalFormat,Vt,At,ot.colorSpace);if(!r.get(A).__hasExternalTextures){const Rt=Math.max(1,A.width>>xt),Pt=Math.max(1,A.height>>xt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?i.texImage3D(Mt,xt,Ut,Rt,Pt,A.depth,0,Vt,At,null):i.texImage2D(Mt,xt,Ut,Rt,Pt,0,Vt,At,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),kt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,Mt,r.get(ot).__webglTexture,0,Ee(A)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,Mt,r.get(ot).__webglTexture,xt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(P,A,ot){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const _t=A.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,xt=w(A.stencilBuffer,Mt),Vt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=Ee(A);kt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,xt,A.width,A.height):ot?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,xt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,P)}else{const _t=A.textures;for(let Mt=0;Mt<_t.length;Mt++){const xt=_t[Mt],Vt=u.convert(xt.format,xt.colorSpace),At=u.convert(xt.type),Ut=L(xt.internalFormat,Vt,At,xt.colorSpace),Xt=Ee(A);ot&&kt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Ut,A.width,A.height):kt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Ut,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ut,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ct(A.depthTexture,0);const _t=r.get(A.depthTexture).__webglTexture,Mt=Ee(A);if(A.depthTexture.format===Es)kt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0);else if(A.depthTexture.format===Cs)kt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Lt(P){const A=r.get(P),ot=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const _t=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=_t}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");wt(A.__webglFramebuffer,P)}else if(ot){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=s.createRenderbuffer(),vt(A.__webglDepthbuffer[_t],P,!1);else{const Mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,xt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),vt(A.__webglDepthbuffer,P,!1);else{const _t=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,Mt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(P,A,ot){const _t=r.get(P);A!==void 0&&ft(_t.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ot!==void 0&&Lt(P)}function ae(P){const A=P.texture,ot=r.get(P),_t=r.get(A);P.addEventListener("dispose",B);const Mt=P.textures,xt=P.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=A.version,h.memory.textures++),xt){ot.__webglFramebuffer=[];for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0){ot.__webglFramebuffer[At]=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)ot.__webglFramebuffer[At][Ut]=s.createFramebuffer()}else ot.__webglFramebuffer[At]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ot.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)ot.__webglFramebuffer[At]=s.createFramebuffer()}else ot.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let At=0,Ut=Mt.length;At<Ut;At++){const Xt=r.get(Mt[At]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),h.memory.textures++)}if(P.samples>0&&kt(P)===!1){ot.__webglMultisampledFramebuffer=s.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Ut=Mt[At];ot.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ot.__webglColorRenderbuffer[At]);const Xt=u.convert(Ut.format,Ut.colorSpace),Rt=u.convert(Ut.type),Pt=L(Ut.internalFormat,Xt,Rt,Ut.colorSpace,P.isXRRenderTarget===!0),he=Ee(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,Pt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,ot.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ot.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(ot.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){i.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),J(s.TEXTURE_CUBE_MAP,A);for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)ft(ot.__webglFramebuffer[At][Ut],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ut);else ft(ot.__webglFramebuffer[At],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let At=0,Ut=Mt.length;At<Ut;At++){const Xt=Mt[At],Rt=r.get(Xt);i.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),J(s.TEXTURE_2D,Xt),ft(ot.__webglFramebuffer,P,Xt,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),S(Xt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let At=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(At=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(At,_t.__webglTexture),J(At,A),A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)ft(ot.__webglFramebuffer[Ut],P,A,s.COLOR_ATTACHMENT0,At,Ut);else ft(ot.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,At,0);S(A)&&_(At),i.unbindTexture()}P.depthBuffer&&Lt(P)}function Le(P){const A=P.textures;for(let ot=0,_t=A.length;ot<_t;ot++){const Mt=A[ot];if(S(Mt)){const xt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Vt=r.get(Mt).__webglTexture;i.bindTexture(xt,Vt),_(xt),i.unbindTexture()}}}const F=[],He=[];function ve(P){if(P.samples>0){if(kt(P)===!1){const A=P.textures,ot=P.width,_t=P.height;let Mt=s.COLOR_BUFFER_BIT;const xt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=r.get(P),At=A.length>1;if(At)for(let Ut=0;Ut<A.length;Ut++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ut=0;Ut<A.length;Ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ut]);const Xt=r.get(A[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,ot,_t,0,0,ot,_t,Mt,s.NEAREST),m===!0&&(F.length=0,He.length=0,F.push(s.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&P.resolveDepthBuffer===!1&&(F.push(xt),He.push(xt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Ut=0;Ut<A.length;Ut++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ut]);const Xt=r.get(A[Ut]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,Xt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ee(P){return Math.min(l.maxSamples,P.samples)}function kt(P){const A=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ye(P){const A=h.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function te(P,A){const ot=P.colorSpace,_t=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ot!==Ba&&ot!==Na&&(Te.getTransfer(ot)===Be?(_t!==fi||Mt!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),A}function ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=H,this.setTexture2D=ct,this.setTexture2DArray=lt,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=Wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=kt}function rR(s,t){function i(r,l=Na){let u;const h=Te.getTransfer(l);if(r===Ji)return s.UNSIGNED_BYTE;if(r===Rd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zv)return s.BYTE;if(r===jv)return s.SHORT;if(r===Go)return s.UNSIGNED_SHORT;if(r===Ad)return s.INT;if(r===_r)return s.UNSIGNED_INT;if(r===Zi)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===Qv)return s.ALPHA;if(r===Jv)return s.RGB;if(r===fi)return s.RGBA;if(r===$v)return s.LUMINANCE;if(r===t0)return s.LUMINANCE_ALPHA;if(r===Es)return s.DEPTH_COMPONENT;if(r===Cs)return s.DEPTH_STENCIL;if(r===e0)return s.RED;if(r===wd)return s.RED_INTEGER;if(r===n0)return s.RG;if(r===Dd)return s.RG_INTEGER;if(r===Ud)return s.RGBA_INTEGER;if(r===Du||r===Uu||r===Lu||r===Nu)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Du)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Du)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wh||r===qh||r===Yh||r===Zh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Wh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jh||r===Kh||r===Qh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===jh||r===Kh)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Qh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Jh)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$h)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===td)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===id)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ad)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===od)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ld)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ou||r===hd||r===dd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Ou)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===i0||r===pd||r===md||r===gd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ou)return u.COMPRESSED_RED_RGTC1_EXT;if(r===pd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===md)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class sR extends Wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ru extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oR={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,r),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(oR)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ru;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const lR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Nn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ia({vertexShader:lR,fragmentShader:uR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new Zu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fR extends Us{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,M=null,E=null;const T=new cR,S=i.getContextAttributes();let _=null,L=null;const w=[],N=[],k=new _e;let B=null;const I=new Wn;I.layers.enable(1),I.viewport=new Fe;const Y=new Wn;Y.layers.enable(2),Y.viewport=new Fe;const D=[I,Y],R=new sR;R.layers.enable(1),R.layers.enable(2);let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=w[K];return ft===void 0&&(ft=new Nh,w[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=w[K];return ft===void 0&&(ft=new Nh,w[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=w[K];return ft===void 0&&(ft=new Nh,w[K]=ft),ft.getHandSpace()};function at(K){const ft=N.indexOf(K.inputSource);if(ft===-1)return;const vt=w[ft];vt!==void 0&&(vt.update(K.inputSource,K.frame,p||h),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function ct(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",lt);for(let K=0;K<w.length;K++){const ft=N[K];ft!==null&&(N[K]=null,w[K].disconnect(ft))}H=null,st=null,T.reset(),t.setRenderTarget(_),M=null,v=null,x=null,l=null,L=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",lt),S.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(k),l.renderState.layers===void 0){const ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new vr(M.framebufferWidth,M.framebufferHeight,{format:fi,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let ft=null,vt=null,wt=null;S.depth&&(wt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=S.stencil?Cs:Es,vt=S.stencil?Rs:_r);const Lt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Lt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new vr(v.textureWidth,v.textureHeight,{format:fi,type:Ji,depthTexture:new g0(v.textureWidth,v.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function lt(K){for(let ft=0;ft<K.removed.length;ft++){const vt=K.removed[ft],wt=N.indexOf(vt);wt>=0&&(N[wt]=null,w[wt].disconnect(vt))}for(let ft=0;ft<K.added.length;ft++){const vt=K.added[ft];let wt=N.indexOf(vt);if(wt===-1){for(let Wt=0;Wt<w.length;Wt++)if(Wt>=N.length){N.push(vt),wt=Wt;break}else if(N[Wt]===null){N[Wt]=vt,wt=Wt;break}if(wt===-1)break}const Lt=w[wt];Lt&&Lt.connect(vt)}}const O=new tt,Z=new tt;function j(K,ft,vt){O.setFromMatrixPosition(ft.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);const wt=O.distanceTo(Z),Lt=ft.projectionMatrix.elements,Wt=vt.projectionMatrix.elements,ae=Lt[14]/(Lt[10]-1),Le=Lt[14]/(Lt[10]+1),F=(Lt[9]+1)/Lt[5],He=(Lt[9]-1)/Lt[5],ve=(Lt[8]-1)/Lt[0],Ee=(Wt[8]+1)/Wt[0],kt=ae*ve,ye=ae*Ee,te=wt/(-ve+Ee),ee=te*-ve;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const P=ae+te,A=Le+te,ot=kt-ee,_t=ye+(wt-ee),Mt=F*Le/A*P,xt=He*Le/A*P;K.projectionMatrix.makePerspective(ot,_t,Mt,xt,P,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Et(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ft=K.near,vt=K.far;T.texture!==null&&(T.depthNear>0&&(ft=T.depthNear),T.depthFar>0&&(vt=T.depthFar)),R.near=Y.near=I.near=ft,R.far=Y.far=I.far=vt,(H!==R.near||st!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,st=R.far);const wt=K.parent,Lt=R.cameras;Et(R,wt);for(let Wt=0;Wt<Lt.length;Wt++)Et(Lt[Wt],wt);Lt.length===2?j(R,I,Y):R.projectionMatrix.copy(I.projectionMatrix),U(K,R,wt)};function U(K,ft,vt){vt===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_d*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(K){m=K,v!==null&&(v.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let J=null;function St(K,ft){if(g=ft.getViewerPose(p||h),E=ft,g!==null){const vt=g.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let wt=!1;vt.length!==R.cameras.length&&(R.cameras.length=0,wt=!0);for(let Wt=0;Wt<vt.length;Wt++){const ae=vt[Wt];let Le=null;if(M!==null)Le=M.getViewport(ae);else{const He=x.getViewSubImage(v,ae);Le=He.viewport,Wt===0&&(t.setRenderTargetTextures(L,He.colorTexture,v.ignoreDepthValues?void 0:He.depthStencilTexture),t.setRenderTarget(L))}let F=D[Wt];F===void 0&&(F=new Wn,F.layers.enable(Wt),F.viewport=new Fe,D[Wt]=F),F.matrix.fromArray(ae.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(ae.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Le.x,Le.y,Le.width,Le.height),Wt===0&&(R.matrix.copy(F.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),wt===!0&&R.cameras.push(F)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Wt=x.getDepthInformation(vt[0]);Wt&&Wt.isValid&&Wt.texture&&T.init(t,Wt,l.renderState)}}for(let vt=0;vt<w.length;vt++){const wt=N[vt],Lt=w[vt];wt!==null&&Lt!==void 0&&Lt.update(wt,ft,p||h)}J&&J(K,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const yt=new m0;yt.setAnimationLoop(St),this.setAnimationLoop=function(K){J=K},this.dispose=function(){}}}const cr=new $i,hR=new Ke;function dR(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,h0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,w,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),v(S,_),_.isMeshPhysicalMaterial&&M(S,_,N)):_.isMeshMatcapMaterial?(u(S,_),E(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),T(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,L,w):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Ln&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Ln&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=t.get(_),w=L.envMap,N=L.envMapRotation;w&&(S.envMap.value=w,cr.copy(N),cr.x*=-1,cr.y*=-1,cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),S.envMapRotation.value.setFromMatrix4(hR.makeRotationFromEuler(cr)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,w){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=w*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ln&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const L=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function pR(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,w){const N=w.program;r.uniformBlockBinding(L,N)}function p(L,w){let N=l[L.id];N===void 0&&(E(L),N=g(L),l[L.id]=N,L.addEventListener("dispose",S));const k=w.program;r.updateUBOMapping(L,k);const B=t.render.frame;u[L.id]!==B&&(v(L),u[L.id]=B)}function g(L){const w=x();L.__bindingPointIndex=w;const N=s.createBuffer(),k=L.__size,B=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,k,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,N),N}function x(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const w=l[L.id],N=L.uniforms,k=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let B=0,I=N.length;B<I;B++){const Y=Array.isArray(N[B])?N[B]:[N[B]];for(let D=0,R=Y.length;D<R;D++){const H=Y[D];if(M(H,B,D,k)===!0){const st=H.__offset,at=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let lt=0;lt<at.length;lt++){const O=at[lt],Z=T(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,st+ct,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ct),ct+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,st,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,w,N,k){const B=L.value,I=w+"_"+N;if(k[I]===void 0)return typeof B=="number"||typeof B=="boolean"?k[I]=B:k[I]=B.clone(),!0;{const Y=k[I];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return k[I]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function E(L){const w=L.uniforms;let N=0;const k=16;for(let I=0,Y=w.length;I<Y;I++){const D=Array.isArray(w[I])?w[I]:[w[I]];for(let R=0,H=D.length;R<H;R++){const st=D[R],at=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,lt=at.length;ct<lt;ct++){const O=at[ct],Z=T(O),j=N%k,Et=j%Z.boundary,U=j+Et;N+=Et,U!==0&&k-U<Z.storage&&(N+=k-U),st.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=N,N+=Z.storage}}}const B=N%k;return B>0&&(N+=k-B),L.__size=N,L.__cache={},this}function T(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),w}function S(L){const w=L.target;w.removeEventListener("dispose",S);const N=h.indexOf(w.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(l[w.id]),delete l[w.id],delete u[w.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class mR{constructor(t={}){const{canvas:i=iE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=t;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=h;const M=new Uint32Array(4),E=new Int32Array(4);let T=null,S=null;const _=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=Pa,this.toneMappingExposure=1;const w=this;let N=!1,k=0,B=0,I=null,Y=-1,D=null;const R=new Fe,H=new Fe;let st=null;const at=new Ce(0);let ct=0,lt=i.width,O=i.height,Z=1,j=null,Et=null;const U=new Fe(0,0,lt,O),J=new Fe(0,0,lt,O);let St=!1;const yt=new Pd;let K=!1,ft=!1;const vt=new Ke,wt=new tt,Lt=new Fe,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Le(){return I===null?Z:1}let F=r;function He(C,V){return i.getContext(C,V)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bd}`),i.addEventListener("webglcontextlost",pt,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),F===null){const V="webgl2";if(F=He(V,C),F===null)throw He(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Ee,kt,ye,te,ee,P,A,ot,_t,Mt,xt,Vt,At,Ut,Xt,Rt,Pt,he,jt,Ot,qt,ne,be;function X(){ve=new yA(F),ve.init(),qt=new rR(F,ve),Ee=new pA(F,ve,t,qt),kt=new nR(F),ye=new TA(F),te=new V1,ee=new aR(F,ve,kt,te,Ee,qt,ye),P=new gA(w),A=new SA(w),ot=new DE(F),ne=new hA(F,ot),_t=new MA(F,ot,ye,ne),Mt=new AA(F,_t,ot,ye),he=new bA(F,Ee,ee),Xt=new mA(te),xt=new G1(w,P,A,ve,Ee,ne,Xt),Vt=new dR(w,te),At=new X1,Ut=new K1(ve),Pt=new fA(w,P,A,kt,Mt,v,m),Rt=new eR(w,Mt,Ee),be=new pR(F,ye,Ee,kt),jt=new dA(F,ve,ye),Ot=new EA(F,ve,ye),ye.programs=xt.programs,w.capabilities=Ee,w.extensions=ve,w.properties=te,w.renderLists=At,w.shadowMap=Rt,w.state=kt,w.info=ye}X();const bt=new fR(w,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(lt,O,!1))},this.getSize=function(C){return C.set(lt,O)},this.setSize=function(C,V,nt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=C,O=V,i.width=Math.floor(C*Z),i.height=Math.floor(V*Z),nt===!0&&(i.style.width=C+"px",i.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(lt*Z,O*Z).floor()},this.setDrawingBufferSize=function(C,V,nt){lt=C,O=V,Z=nt,i.width=Math.floor(C*nt),i.height=Math.floor(V*nt),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,V,nt,rt){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,V,nt,rt),kt.viewport(R.copy(U).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,V,nt,rt){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,V,nt,rt),kt.scissor(H.copy(J).multiplyScalar(Z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(C){kt.setScissorTest(St=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){Et=C},this.getClearColor=function(C){return C.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(C=!0,V=!0,nt=!0){let rt=0;if(C){let q=!1;if(I!==null){const Tt=I.texture.format;q=Tt===Ud||Tt===Dd||Tt===wd}if(q){const Tt=I.texture.type,Nt=Tt===Ji||Tt===_r||Tt===Go||Tt===Rs||Tt===Rd||Tt===Cd,zt=Pt.getClearColor(),It=Pt.getClearAlpha(),Jt=zt.r,Yt=zt.g,Ft=zt.b;Nt?(M[0]=Jt,M[1]=Yt,M[2]=Ft,M[3]=It,F.clearBufferuiv(F.COLOR,0,M)):(E[0]=Jt,E[1]=Yt,E[2]=Ft,E[3]=It,F.clearBufferiv(F.COLOR,0,E))}else rt|=F.COLOR_BUFFER_BIT}V&&(rt|=F.DEPTH_BUFFER_BIT),nt&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",pt,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),At.dispose(),Ut.dispose(),te.dispose(),P.dispose(),A.dispose(),Mt.dispose(),ne.dispose(),be.dispose(),xt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Yn),bt.removeEventListener("sessionend",ii),Ge.stop()};function pt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=ye.autoReset,V=Rt.enabled,nt=Rt.autoUpdate,rt=Rt.needsUpdate,q=Rt.type;X(),ye.autoReset=C,Rt.enabled=V,Rt.autoUpdate=nt,Rt.needsUpdate=rt,Rt.type=q}function Ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Qt(C){const V=C.target;V.removeEventListener("dispose",Qt),de(V)}function de(C){Xe(C),te.remove(C)}function Xe(C){const V=te.get(C).programs;V!==void 0&&(V.forEach(function(nt){xt.releaseProgram(nt)}),C.isShaderMaterial&&xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,nt,rt,q,Tt){V===null&&(V=Wt);const Nt=q.isMesh&&q.matrixWorld.determinant()<0,zt=na(C,V,nt,rt,q);kt.setMaterial(rt,Nt);let It=nt.index,Jt=1;if(rt.wireframe===!0){if(It=_t.getWireframeAttribute(nt),It===void 0)return;Jt=2}const Yt=nt.drawRange,Ft=nt.attributes.position;let re=Yt.start*Jt,Oe=(Yt.start+Yt.count)*Jt;Tt!==null&&(re=Math.max(re,Tt.start*Jt),Oe=Math.min(Oe,(Tt.start+Tt.count)*Jt)),It!==null?(re=Math.max(re,0),Oe=Math.min(Oe,It.count)):Ft!=null&&(re=Math.max(re,0),Oe=Math.min(Oe,Ft.count));const ze=Oe-re;if(ze<0||ze===1/0)return;ne.setup(q,rt,zt,nt,It);let en,me=jt;if(It!==null&&(en=ot.get(It),me=Ot,me.setIndex(en)),q.isMesh)rt.wireframe===!0?(kt.setLineWidth(rt.wireframeLinewidth*Le()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(q.isLine){let Ht=rt.linewidth;Ht===void 0&&(Ht=1),kt.setLineWidth(Ht*Le()),q.isLineSegments?me.setMode(F.LINES):q.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else q.isPoints?me.setMode(F.POINTS):q.isSprite&&me.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)me.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ht=q._multiDrawStarts,sn=q._multiDrawCounts,xe=q._multiDrawCount,Ve=It?ot.get(It).bytesPerElement:1,Ai=te.get(rt).currentProgram.getUniforms();for(let En=0;En<xe;En++)Ai.setValue(F,"_gl_DrawID",En),me.render(Ht[En]/Ve,sn[En])}else if(q.isInstancedMesh)me.renderInstances(re,ze,q.count);else if(nt.isInstancedBufferGeometry){const Ht=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,sn=Math.min(nt.instanceCount,Ht);me.renderInstances(re,ze,sn)}else me.render(re,ze)};function Qe(C,V,nt){C.transparent===!0&&C.side===Yi&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,Ha(C,V,nt),C.side=za,C.needsUpdate=!0,Ha(C,V,nt),C.side=Yi):Ha(C,V,nt)}this.compile=function(C,V,nt=null){nt===null&&(nt=C),S=Ut.get(nt),S.init(V),L.push(S),nt.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),C!==nt&&C.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights();const rt=new Set;return C.traverse(function(q){const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let Nt=0;Nt<Tt.length;Nt++){const zt=Tt[Nt];Qe(zt,nt,q),rt.add(zt)}else Qe(Tt,nt,q),rt.add(Tt)}),L.pop(),S=null,rt},this.compileAsync=function(C,V,nt=null){const rt=this.compile(C,V,nt);return new Promise(q=>{function Tt(){if(rt.forEach(function(Nt){te.get(Nt).currentProgram.isReady()&&rt.delete(Nt)}),rt.size===0){q(C);return}setTimeout(Tt,10)}ve.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let pe=null;function qn(C){pe&&pe(C)}function Yn(){Ge.stop()}function ii(){Ge.start()}const Ge=new m0;Ge.setAnimationLoop(qn),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(C){pe=C,bt.setAnimationLoop(C),C===null?Ge.stop():Ge.start()},bt.addEventListener("sessionstart",Yn),bt.addEventListener("sessionend",ii),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(V),V=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,V,I),S=Ut.get(C,L.length),S.init(V),L.push(S),vt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),yt.setFromProjectionMatrix(vt),ft=this.localClippingEnabled,K=Xt.init(this.clippingPlanes,ft),T=At.get(C,_.length),T.init(),_.push(T),bt.enabled===!0&&bt.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&fn(Tt,V,-1/0,w.sortObjects)}fn(C,V,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(j,Et),ae=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ae&&Pt.addToRenderList(T,C),this.info.render.frame++,K===!0&&Xt.beginShadows();const nt=S.state.shadowsArray;Rt.render(nt,C,V),K===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=T.opaque,q=T.transmissive;if(S.setupLights(),V.isArrayCamera){const Tt=V.cameras;if(q.length>0)for(let Nt=0,zt=Tt.length;Nt<zt;Nt++){const It=Tt[Nt];yr(rt,q,C,It)}ae&&Pt.render(C);for(let Nt=0,zt=Tt.length;Nt<zt;Nt++){const It=Tt[Nt];bi(T,C,It,It.viewport)}}else q.length>0&&yr(rt,q,C,V),ae&&Pt.render(C),bi(T,C,V);I!==null&&(ee.updateMultisampleRenderTarget(I),ee.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(w,C,V),ne.resetDefaultState(),Y=-1,D=null,L.pop(),L.length>0?(S=L[L.length-1],K===!0&&Xt.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null};function fn(C,V,nt,rt){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||yt.intersectsSprite(C)){rt&&Lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);const Nt=Mt.update(C),zt=C.material;zt.visible&&T.push(C,Nt,zt,nt,Lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||yt.intersectsObject(C))){const Nt=Mt.update(C),zt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Lt.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Lt.copy(Nt.boundingSphere.center)),Lt.applyMatrix4(C.matrixWorld).applyMatrix4(vt)),Array.isArray(zt)){const It=Nt.groups;for(let Jt=0,Yt=It.length;Jt<Yt;Jt++){const Ft=It[Jt],re=zt[Ft.materialIndex];re&&re.visible&&T.push(C,Nt,re,nt,Lt.z,Ft)}}else zt.visible&&T.push(C,Nt,zt,nt,Lt.z,null)}}const Tt=C.children;for(let Nt=0,zt=Tt.length;Nt<zt;Nt++)fn(Tt[Nt],V,nt,rt)}function bi(C,V,nt,rt){const q=C.opaque,Tt=C.transmissive,Nt=C.transparent;S.setupLightsView(nt),K===!0&&Xt.setGlobalState(w.clippingPlanes,nt),rt&&kt.viewport(R.copy(rt)),q.length>0&&Mr(q,V,nt),Tt.length>0&&Mr(Tt,V,nt),Nt.length>0&&Mr(Nt,V,nt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function yr(C,V,nt,rt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[rt.id]===void 0&&(S.state.transmissionRenderTarget[rt.id]=new vr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Wo:Ji,minFilter:gr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const Tt=S.state.transmissionRenderTarget[rt.id],Nt=rt.viewport||R;Tt.setSize(Nt.z,Nt.w);const zt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(at),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),ae&&Pt.render(nt);const It=w.toneMapping;w.toneMapping=Pa;const Jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),S.setupLightsView(rt),K===!0&&Xt.setGlobalState(w.clippingPlanes,rt),Mr(C,nt,rt),ee.updateMultisampleRenderTarget(Tt),ee.updateRenderTargetMipmap(Tt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ft=0,re=V.length;Ft<re;Ft++){const Oe=V[Ft],ze=Oe.object,en=Oe.geometry,me=Oe.material,Ht=Oe.group;if(me.side===Yi&&ze.layers.test(rt.layers)){const sn=me.side;me.side=Ln,me.needsUpdate=!0,Ko(ze,nt,rt,en,me,Ht),me.side=sn,me.needsUpdate=!0,Yt=!0}}Yt===!0&&(ee.updateMultisampleRenderTarget(Tt),ee.updateRenderTargetMipmap(Tt))}w.setRenderTarget(zt),w.setClearColor(at,ct),Jt!==void 0&&(rt.viewport=Jt),w.toneMapping=It}function Mr(C,V,nt){const rt=V.isScene===!0?V.overrideMaterial:null;for(let q=0,Tt=C.length;q<Tt;q++){const Nt=C[q],zt=Nt.object,It=Nt.geometry,Jt=rt===null?Nt.material:rt,Yt=Nt.group;zt.layers.test(nt.layers)&&Ko(zt,V,nt,It,Jt,Yt)}}function Ko(C,V,nt,rt,q,Tt){C.onBeforeRender(w,V,nt,rt,q,Tt),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(w,V,nt,rt,C,Tt),q.transparent===!0&&q.side===Yi&&q.forceSinglePass===!1?(q.side=Ln,q.needsUpdate=!0,w.renderBufferDirect(nt,V,rt,q,C,Tt),q.side=za,q.needsUpdate=!0,w.renderBufferDirect(nt,V,rt,q,C,Tt),q.side=Yi):w.renderBufferDirect(nt,V,rt,q,C,Tt),C.onAfterRender(w,V,nt,rt,q,Tt)}function Ha(C,V,nt){V.isScene!==!0&&(V=Wt);const rt=te.get(C),q=S.state.lights,Tt=S.state.shadowsArray,Nt=q.state.version,zt=xt.getParameters(C,q.state,Tt,V,nt),It=xt.getProgramCacheKey(zt);let Jt=rt.programs;rt.environment=C.isMeshStandardMaterial?V.environment:null,rt.fog=V.fog,rt.envMap=(C.isMeshStandardMaterial?A:P).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",Qt),Jt=new Map,rt.programs=Jt);let Yt=Jt.get(It);if(Yt!==void 0){if(rt.currentProgram===Yt&&rt.lightsStateVersion===Nt)return Er(C,zt),Yt}else zt.uniforms=xt.getUniforms(C),C.onBeforeCompile(zt,w),Yt=xt.acquireProgram(zt,It),Jt.set(It,Yt),rt.uniforms=zt.uniforms;const Ft=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=Xt.uniform),Er(C,zt),rt.needsLights=Ga(C),rt.lightsStateVersion=Nt,rt.needsLights&&(Ft.ambientLightColor.value=q.state.ambient,Ft.lightProbe.value=q.state.probe,Ft.directionalLights.value=q.state.directional,Ft.directionalLightShadows.value=q.state.directionalShadow,Ft.spotLights.value=q.state.spot,Ft.spotLightShadows.value=q.state.spotShadow,Ft.rectAreaLights.value=q.state.rectArea,Ft.ltc_1.value=q.state.rectAreaLTC1,Ft.ltc_2.value=q.state.rectAreaLTC2,Ft.pointLights.value=q.state.point,Ft.pointLightShadows.value=q.state.pointShadow,Ft.hemisphereLights.value=q.state.hemi,Ft.directionalShadowMap.value=q.state.directionalShadowMap,Ft.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ft.spotShadowMap.value=q.state.spotShadowMap,Ft.spotLightMatrix.value=q.state.spotLightMatrix,Ft.spotLightMap.value=q.state.spotLightMap,Ft.pointShadowMap.value=q.state.pointShadowMap,Ft.pointShadowMatrix.value=q.state.pointShadowMatrix),rt.currentProgram=Yt,rt.uniformsList=null,Yt}function ea(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Pu.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Er(C,V){const nt=te.get(C);nt.outputColorSpace=V.outputColorSpace,nt.batching=V.batching,nt.batchingColor=V.batchingColor,nt.instancing=V.instancing,nt.instancingColor=V.instancingColor,nt.instancingMorph=V.instancingMorph,nt.skinning=V.skinning,nt.morphTargets=V.morphTargets,nt.morphNormals=V.morphNormals,nt.morphColors=V.morphColors,nt.morphTargetsCount=V.morphTargetsCount,nt.numClippingPlanes=V.numClippingPlanes,nt.numIntersection=V.numClipIntersection,nt.vertexAlphas=V.vertexAlphas,nt.vertexTangents=V.vertexTangents,nt.toneMapping=V.toneMapping}function na(C,V,nt,rt,q){V.isScene!==!0&&(V=Wt),ee.resetTextureUnits();const Tt=V.fog,Nt=rt.isMeshStandardMaterial?V.environment:null,zt=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ba,It=(rt.isMeshStandardMaterial?A:P).get(rt.envMap||Nt),Jt=rt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Yt=!!nt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ft=!!nt.morphAttributes.position,re=!!nt.morphAttributes.normal,Oe=!!nt.morphAttributes.color;let ze=Pa;rt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ze=w.toneMapping);const en=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,me=en!==void 0?en.length:0,Ht=te.get(rt),sn=S.state.lights;if(K===!0&&(ft===!0||C!==D)){const Ie=C===D&&rt.id===Y;Xt.setState(rt,C,Ie)}let xe=!1;rt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==sn.state.version||Ht.outputColorSpace!==zt||q.isBatchedMesh&&Ht.batching===!1||!q.isBatchedMesh&&Ht.batching===!0||q.isBatchedMesh&&Ht.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ht.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ht.instancing===!1||!q.isInstancedMesh&&Ht.instancing===!0||q.isSkinnedMesh&&Ht.skinning===!1||!q.isSkinnedMesh&&Ht.skinning===!0||q.isInstancedMesh&&Ht.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ht.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ht.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ht.instancingMorph===!1&&q.morphTexture!==null||Ht.envMap!==It||rt.fog===!0&&Ht.fog!==Tt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Xt.numPlanes||Ht.numIntersection!==Xt.numIntersection)||Ht.vertexAlphas!==Jt||Ht.vertexTangents!==Yt||Ht.morphTargets!==Ft||Ht.morphNormals!==re||Ht.morphColors!==Oe||Ht.toneMapping!==ze||Ht.morphTargetsCount!==me)&&(xe=!0):(xe=!0,Ht.__version=rt.version);let Ve=Ht.currentProgram;xe===!0&&(Ve=Ha(rt,V,q));let Ai=!1,En=!1,aa=!1;const We=Ve.getUniforms(),Pn=Ht.uniforms;if(kt.useProgram(Ve.program)&&(Ai=!0,En=!0,aa=!0),rt.id!==Y&&(Y=rt.id,En=!0),Ai||D!==C){We.setValue(F,"projectionMatrix",C.projectionMatrix),We.setValue(F,"viewMatrix",C.matrixWorldInverse);const Ie=We.map.cameraPosition;Ie!==void 0&&Ie.setValue(F,wt.setFromMatrixPosition(C.matrixWorld)),Ee.logarithmicDepthBuffer&&We.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&We.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,En=!0,aa=!0)}if(q.isSkinnedMesh){We.setOptional(F,q,"bindMatrix"),We.setOptional(F,q,"bindMatrixInverse");const Ie=q.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),We.setValue(F,"boneTexture",Ie.boneTexture,ee))}q.isBatchedMesh&&(We.setOptional(F,q,"batchingTexture"),We.setValue(F,"batchingTexture",q._matricesTexture,ee),We.setOptional(F,q,"batchingIdTexture"),We.setValue(F,"batchingIdTexture",q._indirectTexture,ee),We.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&We.setValue(F,"batchingColorTexture",q._colorsTexture,ee));const Ns=nt.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&he.update(q,nt,Ve),(En||Ht.receiveShadow!==q.receiveShadow)&&(Ht.receiveShadow=q.receiveShadow,We.setValue(F,"receiveShadow",q.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Pn.envMap.value=It,Pn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&V.environment!==null&&(Pn.envMapIntensity.value=V.environmentIntensity),En&&(We.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ht.needsLights&&ia(Pn,aa),Tt&&rt.fog===!0&&Vt.refreshFogUniforms(Pn,Tt),Vt.refreshMaterialUniforms(Pn,rt,Z,O,S.state.transmissionRenderTarget[C.id]),Pu.upload(F,ea(Ht),Pn,ee)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Pu.upload(F,ea(Ht),Pn,ee),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&We.setValue(F,"center",q.center),We.setValue(F,"modelViewMatrix",q.modelViewMatrix),We.setValue(F,"normalMatrix",q.normalMatrix),We.setValue(F,"modelMatrix",q.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ie=rt.uniformsGroups;for(let Va=0,Qo=Ie.length;Va<Qo;Va++){const Tr=Ie[Va];be.update(Tr,Ve),be.bind(Tr,Ve)}}return Ve}function ia(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Ga(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,V,nt){te.get(C.texture).__webglTexture=V,te.get(C.depthTexture).__webglTexture=nt;const rt=te.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=nt===void 0,rt.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const nt=te.get(C);nt.__webglFramebuffer=V,nt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,nt=0){I=C,k=V,B=nt;let rt=!0,q=null,Tt=!1,Nt=!1;if(C){const It=te.get(C);if(It.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(It.__webglFramebuffer===void 0)ee.setupRenderTarget(C);else if(It.__hasExternalTextures)ee.rebindTextures(C,te.get(C.texture).__webglTexture,te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ft=C.depthTexture;if(It.__boundDepthTexture!==Ft){if(Ft!==null&&te.has(Ft)&&(C.width!==Ft.image.width||C.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Nt=!0);const Yt=te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Yt[V])?q=Yt[V][nt]:q=Yt[V],Tt=!0):C.samples>0&&ee.useMultisampledRTT(C)===!1?q=te.get(C).__webglMultisampledFramebuffer:Array.isArray(Yt)?q=Yt[nt]:q=Yt,R.copy(C.viewport),H.copy(C.scissor),st=C.scissorTest}else R.copy(U).multiplyScalar(Z).floor(),H.copy(J).multiplyScalar(Z).floor(),st=St;if(kt.bindFramebuffer(F.FRAMEBUFFER,q)&&rt&&kt.drawBuffers(C,q),kt.viewport(R),kt.scissor(H),kt.setScissorTest(st),Tt){const It=te.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,It.__webglTexture,nt)}else if(Nt){const It=te.get(C.texture),Jt=V||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,nt||0,Jt)}Y=-1},this.readRenderTargetPixels=function(C,V,nt,rt,q,Tt,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){kt.bindFramebuffer(F.FRAMEBUFFER,zt);try{const It=C.texture,Jt=It.format,Yt=It.type;if(!Ee.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-rt&&nt>=0&&nt<=C.height-q&&F.readPixels(V,nt,rt,q,qt.convert(Jt),qt.convert(Yt),Tt)}finally{const It=I!==null?te.get(I).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(C,V,nt,rt,q,Tt,Nt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){kt.bindFramebuffer(F.FRAMEBUFFER,zt);try{const It=C.texture,Jt=It.format,Yt=It.type;if(!Ee.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-rt&&nt>=0&&nt<=C.height-q){const Ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(V,nt,rt,q,qt.convert(Jt),qt.convert(Yt),0),F.flush();const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await aE(F,re,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,Ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt)}finally{F.deleteBuffer(Ft),F.deleteSync(re)}return Tt}}finally{const It=I!==null?te.get(I).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(C,V=null,nt=0){C.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);const rt=Math.pow(2,-nt),q=Math.floor(C.image.width*rt),Tt=Math.floor(C.image.height*rt),Nt=V!==null?V.x:0,zt=V!==null?V.y:0;ee.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,nt,0,0,Nt,zt,q,Tt),kt.unbindTexture()},this.copyTextureToTexture=function(C,V,nt=null,rt=null,q=0){C.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,C=arguments[1],V=arguments[2],q=arguments[3]||0,nt=null);let Tt,Nt,zt,It,Jt,Yt;nt!==null?(Tt=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,zt=nt.min.x,It=nt.min.y):(Tt=C.image.width,Nt=C.image.height,zt=0,It=0),rt!==null?(Jt=rt.x,Yt=rt.y):(Jt=0,Yt=0);const Ft=qt.convert(V.format),re=qt.convert(V.type);ee.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=F.getParameter(F.UNPACK_ROW_LENGTH),ze=F.getParameter(F.UNPACK_IMAGE_HEIGHT),en=F.getParameter(F.UNPACK_SKIP_PIXELS),me=F.getParameter(F.UNPACK_SKIP_ROWS),Ht=F.getParameter(F.UNPACK_SKIP_IMAGES),sn=C.isCompressedTexture?C.mipmaps[q]:C.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,sn.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,sn.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,Jt,Yt,Tt,Nt,Ft,re,sn.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,Jt,Yt,sn.width,sn.height,Ft,sn.data):F.texSubImage2D(F.TEXTURE_2D,q,Jt,Yt,Tt,Nt,Ft,re,sn),F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze),F.pixelStorei(F.UNPACK_SKIP_PIXELS,en),F.pixelStorei(F.UNPACK_SKIP_ROWS,me),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht),q===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),kt.unbindTexture()},this.copyTextureToTexture3D=function(C,V,nt=null,rt=null,q=0){C.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,rt=arguments[1]||null,C=arguments[2],V=arguments[3],q=arguments[4]||0);let Tt,Nt,zt,It,Jt,Yt,Ft,re,Oe;const ze=C.isCompressedTexture?C.mipmaps[q]:C.image;nt!==null?(Tt=nt.max.x-nt.min.x,Nt=nt.max.y-nt.min.y,zt=nt.max.z-nt.min.z,It=nt.min.x,Jt=nt.min.y,Yt=nt.min.z):(Tt=ze.width,Nt=ze.height,zt=ze.depth,It=0,Jt=0,Yt=0),rt!==null?(Ft=rt.x,re=rt.y,Oe=rt.z):(Ft=0,re=0,Oe=0);const en=qt.convert(V.format),me=qt.convert(V.type);let Ht;if(V.isData3DTexture)ee.setTexture3D(V,0),Ht=F.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)ee.setTexture2DArray(V,0),Ht=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const sn=F.getParameter(F.UNPACK_ROW_LENGTH),xe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ve=F.getParameter(F.UNPACK_SKIP_PIXELS),Ai=F.getParameter(F.UNPACK_SKIP_ROWS),En=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,It),F.pixelStorei(F.UNPACK_SKIP_ROWS,Jt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt),C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ht,q,Ft,re,Oe,Tt,Nt,zt,en,me,ze.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(Ht,q,Ft,re,Oe,Tt,Nt,zt,en,ze.data):F.texSubImage3D(Ht,q,Ft,re,Oe,Tt,Nt,zt,en,me,ze),F.pixelStorei(F.UNPACK_ROW_LENGTH,sn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ai),F.pixelStorei(F.UNPACK_SKIP_IMAGES,En),q===0&&V.generateMipmaps&&F.generateMipmap(Ht),kt.unbindTexture()},this.initRenderTarget=function(C){te.get(C).__webglFramebuffer===void 0&&ee.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ee.setTextureCube(C,0):C.isData3DTexture?ee.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ee.setTexture2DArray(C,0):ee.setTexture2D(C,0),kt.unbindTexture()},this.resetState=function(){k=0,B=0,I=null,kt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Ld?"display-p3":"srgb",i.unpackColorSpace=Te.workingColorSpace===qu?"display-p3":"srgb"}}class gR extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Id extends Fa{constructor(t=1,i=1,r=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const g=[],x=[],v=[],M=[];let E=0;const T=[],S=r/2;let _=0;L(),h===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(g),this.setAttribute("position",new Ei(x,3)),this.setAttribute("normal",new Ei(v,3)),this.setAttribute("uv",new Ei(M,2));function L(){const N=new tt,k=new tt;let B=0;const I=(i-t)/r;for(let Y=0;Y<=u;Y++){const D=[],R=Y/u,H=R*(i-t)+t;for(let st=0;st<=l;st++){const at=st/l,ct=at*m+d,lt=Math.sin(ct),O=Math.cos(ct);k.x=H*lt,k.y=-R*r+S,k.z=H*O,x.push(k.x,k.y,k.z),N.set(lt,I,O).normalize(),v.push(N.x,N.y,N.z),M.push(at,1-R),D.push(E++)}T.push(D)}for(let Y=0;Y<l;Y++)for(let D=0;D<u;D++){const R=T[D][Y],H=T[D+1][Y],st=T[D+1][Y+1],at=T[D][Y+1];g.push(R,H,at),g.push(H,st,at),B+=6}p.addGroup(_,B,0),_+=B}function w(N){const k=E,B=new _e,I=new tt;let Y=0;const D=N===!0?t:i,R=N===!0?1:-1;for(let st=1;st<=l;st++)x.push(0,S*R,0),v.push(0,R,0),M.push(.5,.5),E++;const H=E;for(let st=0;st<=l;st++){const ct=st/l*m+d,lt=Math.cos(ct),O=Math.sin(ct);I.x=D*O,I.y=S*R,I.z=D*lt,x.push(I.x,I.y,I.z),v.push(0,R,0),B.x=lt*.5+.5,B.y=O*.5*R+.5,M.push(B.x,B.y),E++}for(let st=0;st<l;st++){const at=k+st,ct=H+st;N===!0?g.push(ct,ct+1,at):g.push(ct+1,ct,at),Y+=3}p.addGroup(_,Y,N===!0?1:2),_+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Id(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _R extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Oh=new Ke,Tv=new tt,bv=new tt;class vR{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Tv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tv),bv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(bv),i.updateMatrixWorld(),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Av=new Ke,Io=new tt,Ph=new tt;class xR extends vR{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Io.setFromMatrixPosition(t.matrixWorld),r.position.copy(Io),Ph.copy(r.position),Ph.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Ph),r.updateMatrixWorld(),l.makeTranslation(-Io.x,-Io.y,-Io.z),Av.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Av)}}class SR extends _R{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new xR}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);function yR(){const s=ht.useRef(null),t=ht.useRef(null),i=ht.useRef(null),r=ht.useRef({x:0,y:0,z:0});return ht.useEffect(()=>{i.current=new window.WebSocket("wss://192.168.1.19:4000"),i.current.onopen=()=>console.log("WebSocket connected (desktop)"),i.current.onerror=v=>console.error("WebSocket error",v),i.current.onclose=()=>console.log("WebSocket closed"),i.current.onmessage=v=>{try{const M=JSON.parse(v.data);if(M.rotation){const{alpha:E,beta:T,gamma:S}=M.rotation,{x:_,y:L,z:w}=M.motion;console.log("Received rotation:",{alpha:E,beta:T,gamma:S}),(T!==0||E!==0||S!==0)&&(r.current={x:(parseFloat(T)+90)*(Math.PI/180),y:0,z:parseFloat(S)*(Math.PI/180)})}}catch{console.error("Invalid WebSocket message:",v.data)}};const l=new gR,u=new Wn(75,window.innerWidth/window.innerHeight,.1,1e3),h=new mR({antialias:!0});h.setSize(window.innerWidth,window.innerHeight),t.current.appendChild(h.domElement);const d=new SR(16777215,1);d.position.set(10,10,10),l.add(d);const m=new Id(.1,.1,3,32),p=new Od({color:65280}),g=new yi(m,p);g.position.y=1.5,l.add(g),s.current=g,u.position.z=5;const x=()=>{if(requestAnimationFrame(x),s.current){const v=s.current.rotation,M=r.current;v.x+=(M.x-v.x)*.1,v.y+=(M.y-v.y)*.1,v.z+=(M.z-v.z)*.1,console.log("Applying rotation:",{x:v.x.toFixed(2),y:v.y.toFixed(2),z:v.z.toFixed(2)})}h.render(l,u)};return x(),()=>{t.current&&h.domElement&&t.current.removeChild(h.domElement),h.dispose(),l.clear(),i.current&&i.current.close()}},[]),tn.jsxs("div",{children:[tn.jsx("div",{ref:t,style:{width:"100vw",height:"70vh"}}),tn.jsx("h2",{children:"Waiting for phone motion data..."})]})}function MR(){const[s,t]=ht.useState({x:0,y:0,z:0}),[i,r]=ht.useState({alpha:0,beta:0,gamma:0}),l=ht.useRef(null);return ht.useEffect(()=>{l.current=new window.WebSocket("wss://192.168.1.19:4000"),l.current.onopen=()=>console.log("WebSocket connected"),l.current.onerror=p=>console.error("WebSocket error",p),l.current.onclose=()=>console.log("WebSocket closed");const u=async()=>{if(typeof DeviceMotionEvent<"u"&&typeof DeviceMotionEvent.requestPermission=="function")try{await DeviceMotionEvent.requestPermission()==="granted"&&(window.addEventListener("devicemotion",h),window.addEventListener("deviceorientation",d))}catch(p){console.error("Motion permission error:",p)}else window.addEventListener("devicemotion",h),window.addEventListener("deviceorientation",d)},h=p=>{const g=p.accelerationIncludingGravity||p.acceleration;if(g){const x={x:g.x?.toFixed(2),y:g.y?.toFixed(2),z:g.z?.toFixed(2)};t(x),m({motion:x,rotation:i})}},d=p=>{const g={alpha:p.alpha?.toFixed(2),beta:p.beta?.toFixed(2),gamma:p.gamma?.toFixed(2)};r(g),m({motion:s,rotation:g})},m=p=>{l.current&&l.current.readyState===1&&l.current.send(JSON.stringify(p))};return u(),()=>{window.removeEventListener("devicemotion",h),window.removeEventListener("deviceorientation",d),l.current&&l.current.close()}},[]),tn.jsxs("div",{style:{padding:"2rem"},children:[tn.jsx("h2",{children:"📱 Phone Motion Tracker"}),tn.jsx("h3",{children:"Acceleration (with gravity)"}),tn.jsxs("p",{children:["X: ",s.x]}),tn.jsxs("p",{children:["Y: ",s.y]}),tn.jsxs("p",{children:["Z: ",s.z]}),tn.jsx("h3",{children:"Orientation"}),tn.jsxs("p",{children:["Alpha (compass): ",i.alpha,"°"]}),tn.jsxs("p",{children:["Beta (front-back): ",i.beta,"°"]}),tn.jsxs("p",{children:["Gamma (left-right): ",i.gamma,"°"]})]})}function ER(){return tn.jsxs(Ry,{children:[tn.jsx(Ih,{path:"",element:tn.jsx(yR,{})}),tn.jsx(Ih,{path:"/mobile",element:tn.jsx(MR,{})})]})}PS.createRoot(document.getElementById("root")).render(tn.jsx(RS.StrictMode,{children:tn.jsx(Qy,{children:tn.jsx(ER,{})})}));
