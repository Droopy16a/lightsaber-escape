(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function I0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ah={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function Wx(){if(x_)return Lo;x_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var p=null;if(u!==void 0&&(p=""+u),l.key!==void 0&&(p=""+l.key),"key"in l){u={};for(var m in l)m!=="key"&&(u[m]=l[m])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:p,ref:l!==void 0?l:null,props:u}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var y_;function qx(){return y_||(y_=1,ah.exports=Wx()),ah.exports}var je=qx(),rh={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function Yx(){if(M_)return ie;M_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function x(N,J,St){this.props=N,this.context=J,this.refs=T,this.updater=St||y}x.prototype.isReactComponent={},x.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=x.prototype;function U(N,J,St){this.props=N,this.context=J,this.refs=T,this.updater=St||y}var R=U.prototype=new S;R.constructor=U,M(R,x.prototype),R.isPureReactComponent=!0;var L=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function z(N,J,St,yt,K,ft){return St=ft.ref,{$$typeof:s,type:N,key:J,ref:St!==void 0?St:null,props:ft}}function W(N,J){return z(N.type,J,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function C(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(St){return J[St]})}var F=/\/+/g;function rt(N,J){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):J.toString(36)}function nt(){}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(nt,nt):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function lt(N,J,St,yt,K){var ft=typeof N;(ft==="undefined"||ft==="boolean")&&(N=null);var vt=!1;if(N===null)vt=!0;else switch(ft){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(N.$$typeof){case s:case t:vt=!0;break;case g:return vt=N._init,lt(vt(N._payload),J,St,yt,K)}}if(vt)return K=K(N),vt=yt===""?"."+rt(N,0):yt,L(K)?(St="",vt!=null&&(St=vt.replace(F,"$&/")+"/"),lt(K,J,St,"",function(Wt){return Wt})):K!=null&&(D(K)&&(K=W(K,St+(K.key==null||N&&N.key===K.key?"":(""+K.key).replace(F,"$&/")+"/")+vt)),J.push(K)),1;vt=0;var wt=yt===""?".":yt+":";if(L(N))for(var Lt=0;Lt<N.length;Lt++)yt=N[Lt],ft=wt+rt(yt,Lt),vt+=lt(yt,J,St,ft,K);else if(Lt=_(N),typeof Lt=="function")for(N=Lt.call(N),Lt=0;!(yt=N.next()).done;)yt=yt.value,ft=wt+rt(yt,Lt++),vt+=lt(yt,J,St,ft,K);else if(ft==="object"){if(typeof N.then=="function")return lt(ut(N),J,St,yt,K);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return vt}function O(N,J,St){if(N==null)return N;var yt=[],K=0;return lt(N,yt,"","",function(ft){return J.call(St,ft,K++)}),yt}function q(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(St){(N._status===0||N._status===-1)&&(N._status=1,N._result=St)},function(St){(N._status===0||N._status===-1)&&(N._status=2,N._result=St)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var Z=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Et(){}return ie.Children={map:O,forEach:function(N,J,St){O(N,function(){J.apply(this,arguments)},St)},count:function(N){var J=0;return O(N,function(){J++}),J},toArray:function(N){return O(N,function(J){return J})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ie.Component=x,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=U,ie.StrictMode=r,ie.Suspense=f,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ie.__COMPILER_RUNTIME={__proto__:null,c:function(N){return G.H.useMemoCache(N)}},ie.cache=function(N){return function(){return N.apply(null,arguments)}},ie.cloneElement=function(N,J,St){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=M({},N.props),K=N.key,ft=void 0;if(J!=null)for(vt in J.ref!==void 0&&(ft=void 0),J.key!==void 0&&(K=""+J.key),J)!B.call(J,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&J.ref===void 0||(yt[vt]=J[vt]);var vt=arguments.length-2;if(vt===1)yt.children=St;else if(1<vt){for(var wt=Array(vt),Lt=0;Lt<vt;Lt++)wt[Lt]=arguments[Lt+2];yt.children=wt}return z(N.type,K,void 0,void 0,ft,yt)},ie.createContext=function(N){return N={$$typeof:p,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ie.createElement=function(N,J,St){var yt,K={},ft=null;if(J!=null)for(yt in J.key!==void 0&&(ft=""+J.key),J)B.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(K[yt]=J[yt]);var vt=arguments.length-2;if(vt===1)K.children=St;else if(1<vt){for(var wt=Array(vt),Lt=0;Lt<vt;Lt++)wt[Lt]=arguments[Lt+2];K.children=wt}if(N&&N.defaultProps)for(yt in vt=N.defaultProps,vt)K[yt]===void 0&&(K[yt]=vt[yt]);return z(N,ft,void 0,void 0,null,K)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(N){return{$$typeof:m,render:N}},ie.isValidElement=D,ie.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:q}},ie.memo=function(N,J){return{$$typeof:h,type:N,compare:J===void 0?null:J}},ie.startTransition=function(N){var J=G.T,St={};G.T=St;try{var yt=N(),K=G.S;K!==null&&K(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,Z)}catch(ft){Z(ft)}finally{G.T=J}},ie.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ie.use=function(N){return G.H.use(N)},ie.useActionState=function(N,J,St){return G.H.useActionState(N,J,St)},ie.useCallback=function(N,J){return G.H.useCallback(N,J)},ie.useContext=function(N){return G.H.useContext(N)},ie.useDebugValue=function(){},ie.useDeferredValue=function(N,J){return G.H.useDeferredValue(N,J)},ie.useEffect=function(N,J,St){var yt=G.H;if(typeof St=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,J)},ie.useId=function(){return G.H.useId()},ie.useImperativeHandle=function(N,J,St){return G.H.useImperativeHandle(N,J,St)},ie.useInsertionEffect=function(N,J){return G.H.useInsertionEffect(N,J)},ie.useLayoutEffect=function(N,J){return G.H.useLayoutEffect(N,J)},ie.useMemo=function(N,J){return G.H.useMemo(N,J)},ie.useOptimistic=function(N,J){return G.H.useOptimistic(N,J)},ie.useReducer=function(N,J,St){return G.H.useReducer(N,J,St)},ie.useRef=function(N){return G.H.useRef(N)},ie.useState=function(N){return G.H.useState(N)},ie.useSyncExternalStore=function(N,J,St){return G.H.useSyncExternalStore(N,J,St)},ie.useTransition=function(){return G.H.useTransition()},ie.version="19.1.0",ie}var E_;function Rd(){return E_||(E_=1,rh.exports=Yx()),rh.exports}var ht=Rd();const ln=I0(ht);var sh={exports:{}},No={},oh={exports:{}},lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function jx(){return T_||(T_=1,function(s){function t(O,q){var Z=O.length;O.push(q);t:for(;0<Z;){var Et=Z-1>>>1,N=O[Et];if(0<l(N,q))O[Et]=q,O[Z]=N,Z=Et;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var q=O[0],Z=O.pop();if(Z!==q){O[0]=Z;t:for(var Et=0,N=O.length,J=N>>>1;Et<J;){var St=2*(Et+1)-1,yt=O[St],K=St+1,ft=O[K];if(0>l(yt,Z))K<N&&0>l(ft,yt)?(O[Et]=ft,O[K]=Z,Et=K):(O[Et]=yt,O[St]=Z,Et=St);else if(K<N&&0>l(ft,Z))O[Et]=ft,O[K]=Z,Et=K;else break t}}return q}function l(O,q){var Z=O.sortIndex-q.sortIndex;return Z!==0?Z:O.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var p=Date,m=p.now();s.unstable_now=function(){return p.now()-m}}var f=[],h=[],g=1,v=null,_=3,y=!1,M=!1,T=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var q=i(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=O)r(h),q.sortIndex=q.expirationTime,t(f,q);else break;q=i(h)}}function G(O){if(T=!1,L(O),!M)if(i(f)!==null)M=!0,B||(B=!0,rt());else{var q=i(h);q!==null&&lt(G,q.startTime-O)}}var B=!1,z=-1,W=5,D=-1;function C(){return x?!0:!(s.unstable_now()-D<W)}function F(){if(x=!1,B){var O=s.unstable_now();D=O;var q=!0;try{t:{M=!1,T&&(T=!1,U(z),z=-1),y=!0;var Z=_;try{e:{for(L(O),v=i(f);v!==null&&!(v.expirationTime>O&&C());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,_=v.priorityLevel;var N=Et(v.expirationTime<=O);if(O=s.unstable_now(),typeof N=="function"){v.callback=N,L(O),q=!0;break e}v===i(f)&&r(f),L(O)}else r(f);v=i(f)}if(v!==null)q=!0;else{var J=i(h);J!==null&&lt(G,J.startTime-O),q=!1}}break t}finally{v=null,_=Z,y=!1}q=void 0}}finally{q?rt():B=!1}}}var rt;if(typeof R=="function")rt=function(){R(F)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ut=nt.port2;nt.port1.onmessage=F,rt=function(){ut.postMessage(null)}}else rt=function(){S(F,0)};function lt(O,q){z=S(function(){O(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var Z=_;_=q;try{return O()}finally{_=Z}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=_;_=O;try{return q()}finally{_=Z}},s.unstable_scheduleCallback=function(O,q,Z){var Et=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Et+Z:Et):Z=Et,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Z+N,O={id:g++,callback:q,priorityLevel:O,startTime:Z,expirationTime:N,sortIndex:-1},Z>Et?(O.sortIndex=Z,t(h,O),i(f)===null&&O===i(h)&&(T?(U(z),z=-1):T=!0,lt(G,Z-Et))):(O.sortIndex=N,t(f,O),M||y||(M=!0,B||(B=!0,rt()))),O},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(O){var q=_;return function(){var Z=_;_=q;try{return O.apply(this,arguments)}finally{_=Z}}}}(lh)),lh}var b_;function Zx(){return b_||(b_=1,oh.exports=jx()),oh.exports}var uh={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function Kx(){if(A_)return En;A_=1;var s=Rd();function t(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(f,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:f,containerInfo:h,implementation:g}}var p=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,En.createPortal=function(f,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return u(f,h,null,g)},En.flushSync=function(f){var h=p.T,g=r.p;try{if(p.T=null,r.p=2,f)return f()}finally{p.T=h,r.p=g,r.d.f()}},En.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(f,h))},En.prefetchDNS=function(f){typeof f=="string"&&r.d.D(f)},En.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var g=h.as,v=m(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&r.d.X(f,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},En.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=m(h.as,h.crossOrigin);r.d.M(f,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(f)},En.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=m(g,h.crossOrigin);r.d.L(f,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},En.preloadModule=function(f,h){if(typeof f=="string")if(h){var g=m(h.as,h.crossOrigin);r.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(f)},En.requestFormReset=function(f){r.d.r(f)},En.unstable_batchedUpdates=function(f,h){return f(h)},En.useFormState=function(f,h,g){return p.H.useFormState(f,h,g)},En.useFormStatus=function(){return p.H.useHostTransitionStatus()},En.version="19.1.0",En}var R_;function Qx(){if(R_)return uh.exports;R_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),uh.exports=Kx(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Jx(){if(C_)return No;C_=1;var s=Zx(),t=Rd(),i=Qx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function f(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return m(c),e;if(d===o)return m(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var E=!1,b=c.child;b;){if(b===a){E=!0,a=c,o=d;break}if(b===o){E=!0,o=c,a=d;break}b=b.sibling}if(!E){for(b=d.child;b;){if(b===a){E=!0,a=d,o=c;break}if(b===o){E=!0,o=d,a=c;break}b=b.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function h(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=h(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),R=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case T:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case R:return(e.displayName||"Context")+".Provider";case U:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var lt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Et=[],N=-1;function J(e){return{current:e}}function St(e){0>N||(e.current=Et[N],Et[N]=null,N--)}function yt(e,n){N++,Et[N]=e.current,e.current=n}var K=J(null),ft=J(null),vt=J(null),wt=J(null);function Lt(e,n){switch(yt(vt,n),yt(ft,e),yt(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?jg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=jg(n),e=Zg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}St(K),yt(K,e)}function Wt(){St(K),St(ft),St(vt)}function ae(e){e.memoizedState!==null&&yt(wt,e);var n=K.current,a=Zg(n,e.type);n!==a&&(yt(ft,e),yt(K,a))}function Ne(e){ft.current===e&&(St(K),St(ft)),wt.current===e&&(St(wt),Ro._currentValue=Z)}var H=Object.prototype.hasOwnProperty,Ge=s.unstable_scheduleCallback,Se=s.unstable_cancelCallback,Te=s.unstable_shouldYield,kt=s.unstable_requestPaint,Me=s.unstable_now,te=s.unstable_getCurrentPriorityLevel,ee=s.unstable_ImmediatePriority,P=s.unstable_UserBlockingPriority,A=s.unstable_NormalPriority,ot=s.unstable_LowPriority,_t=s.unstable_IdlePriority,Mt=s.log,xt=s.unstable_setDisableYieldValue,Vt=null,At=null;function Ut(e){if(typeof Mt=="function"&&xt(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Vt,e)}catch{}}var Xt=Math.clz32?Math.clz32:de,Rt=Math.log,Pt=Math.LN2;function de(e){return e>>>=0,e===0?32:31-(Rt(e)/Pt|0)|0}var Zt=256,Ot=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ne(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?c=qt(o):(E&=b,E!==0?c=qt(E):a||(a=b&~e,a!==0&&(c=qt(a))))):(b=o&~d,b!==0?c=qt(b):E!==0?c=qt(E):a||(a=o&~e,a!==0&&(c=qt(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function Ae(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function X(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),e}function pt(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function gt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ct(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qt(e,n,a,o,c,d){var E=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=E&~a;0<a;){var ct=31-Xt(a),mt=1<<ct;b[ct]=0,I[ct]=-1;var et=$[ct];if(et!==null)for($[ct]=null,ct=0;ct<et.length;ct++){var at=et[ct];at!==null&&(at.lane&=-536870913)}a&=~mt}o!==0&&pe(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(E&~n))}function pe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Xt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function We(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Xt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function tn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function me(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zn(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:p_(e.type))}function Kn(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var si=Math.random().toString(36).slice(2),Ve="__reactFiber$"+si,pn="__reactProps$"+si,Ci="__reactContainer$"+si,Tr="__reactEvents$"+si,br="__reactListeners$"+si,el="__reactHandles$"+si,ka="__reactResources$"+si,aa="__reactMarker$"+si;function Ar(e){delete e[Ve],delete e[pn],delete e[Tr],delete e[br],delete e[el]}function ra(e){var n=e[Ve];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ci]||a[Ve]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$g(e);e!==null;){if(a=e[Ve])return a;e=$g(e)}return n}e=a,a=e.parentNode}return null}function sa(e){if(e=e[Ve]||e[Ci]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function w(e){var n=e[ka];return n||(n=e[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[aa]=!0}var it=new Set,st={};function j(e,n){Tt(e,n),Tt(e+"Capture",n)}function Tt(e,n){for(st[e]=n,e=0;e<n.length;e++)it.add(n[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},zt={};function Jt(e){return H.call(zt,e)?!0:H.call(It,e)?!1:Nt.test(e)?zt[e]=!0:(It[e]=!0,!1)}function Yt(e,n,a){if(Jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ft(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function re(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Pe,ze;function an(e){if(Pe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pe=n&&n[1]||"",ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+ze}var ge=!1;function Ht(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(at){var et=at}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(at){et=at}e.call(mt.prototype)}}else{try{throw Error()}catch(at){et=at}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(at){if(at&&et&&typeof at.stack=="string")return[at.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],b=d[1];if(E&&b){var I=E.split(`
`),$=b.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===$.length)for(o=I.length-1,c=$.length-1;1<=o&&0<=c&&I[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==$[c]){var ct=`
`+I[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?an(a):""}function un(e){switch(e.tag){case 26:case 27:case 5:return an(e.type);case 16:return an("Lazy");case 13:return an("Suspense");case 19:return an("SuspenseList");case 0:case 15:return Ht(e.type,!1);case 11:return Ht(e.type.render,!1);case 1:return Ht(e.type,!0);case 31:return an("Activity");default:return""}}function xe(e){try{var n="";do n+=un(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wi(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function An(e){var n=wi(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function oa(e){e._valueTracker||(e._valueTracker=An(e))}function qe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=wi(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bs=/[\n"\\]/g;function Be(e){return e.replace(Bs,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wa(e,n,a,o,c,d,E,b){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),n!=null?E==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ke(n)):e.value!==""+ke(n)&&(e.value=""+ke(n)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),n!=null?Rr(e,E,ke(n)):a!=null?Rr(e,E,ke(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ke(b):e.removeAttribute("name")}function nl(e,n,a,o,c,d,E,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+ke(a):"",n=n!=null?""+ke(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Rr(e,n,a){n==="number"&&Bn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Cr(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ke(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function qd(e,n,a){if(n!=null&&(n=""+ke(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ke(a):""}function Yd(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ke(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function wr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Vv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Vv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Zd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&jd(e,c,o)}else for(var d in n)n.hasOwnProperty(d)&&jd(e,d,n[d])}function nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return Xv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ic=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function Kd(e){var n=sa(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Wa(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Be(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[pn]||null;if(!c)throw Error(r(90));Wa(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&qe(o)}break t;case"textarea":qd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Cr(e,!!a.multiple,n,!1)}}}var rc=!1;function Qd(e,n,a){if(rc)return e(n,a);rc=!0;try{var o=e(n);return o}finally{if(rc=!1,(Dr!==null||Ur!==null)&&(Vl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,Kd(n),e)))for(n=0;n<e.length;n++)Kd(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=!1;if(Di)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{sc=!1}var la=null,oc=null,al=null;function Jd(){if(al)return al;var e,n=oc,a=n.length,o,c="value"in la?la.value:la.textContent,d=c.length;for(e=0;e<a&&n[e]===c[e];e++);var E=a-e;for(o=1;o<=E&&n[a-o]===c[d-o];o++);return al=c.slice(e,1<o?1-o:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function $d(){return!1}function wn(e){function n(a,o,c,d,E){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?sl:$d,this.isPropagationStopped=$d,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=wn(qa),Gs=g({},qa,{view:0,detail:0}),Wv=wn(Gs),lc,uc,Vs,ll=g({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(lc=e.screenX-Vs.screenX,uc=e.screenY-Vs.screenY):uc=lc=0,Vs=e),lc)},movementY:function(e){return"movementY"in e?e.movementY:uc}}),tp=wn(ll),qv=g({},ll,{dataTransfer:0}),Yv=wn(qv),jv=g({},Gs,{relatedTarget:0}),cc=wn(jv),Zv=g({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=wn(Zv),Qv=g({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jv=wn(Qv),$v=g({},qa,{data:0}),ep=wn($v),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nS[e])?!!n[e]:!1}function fc(){return iS}var aS=g({},Gs,{key:function(e){if(e.key){var n=tS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rS=wn(aS),sS=g({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=wn(sS),oS=g({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),lS=wn(oS),uS=g({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=wn(uS),fS=g({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=wn(fS),dS=g({},qa,{newState:0,oldState:0}),pS=wn(dS),mS=[9,13,27,32],hc=Di&&"CompositionEvent"in window,ks=null;Di&&"documentMode"in document&&(ks=document.documentMode);var gS=Di&&"TextEvent"in window&&!ks,ip=Di&&(!hc||ks&&8<ks&&11>=ks),ap=" ",rp=!1;function sp(e,n){switch(e){case"keyup":return mS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function _S(e,n){switch(e){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(rp=!0,ap);case"textInput":return e=n.data,e===ap&&rp?null:e;default:return null}}function vS(e,n){if(Lr)return e==="compositionend"||!hc&&sp(e,n)?(e=Jd(),al=oc=la=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ip&&n.locale!=="ko"?null:n.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!SS[e.type]:n==="textarea"}function up(e,n,a,o){Dr?Ur?Ur.push(o):Ur=[o]:Dr=o,n=jl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xs=null,Ws=null;function xS(e){kg(e,0)}function ul(e){var n=Xa(e);if(qe(n))return e}function cp(e,n){if(e==="change")return n}var fp=!1;if(Di){var dc;if(Di){var pc="oninput"in document;if(!pc){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),pc=typeof hp.oninput=="function"}dc=pc}else dc=!1;fp=dc&&(!document.documentMode||9<document.documentMode)}function dp(){Xs&&(Xs.detachEvent("onpropertychange",pp),Ws=Xs=null)}function pp(e){if(e.propertyName==="value"&&ul(Ws)){var n=[];up(n,Ws,e,ac(e)),Qd(xS,n)}}function yS(e,n,a){e==="focusin"?(dp(),Xs=n,Ws=a,Xs.attachEvent("onpropertychange",pp)):e==="focusout"&&dp()}function MS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Ws)}function ES(e,n){if(e==="click")return ul(n)}function TS(e,n){if(e==="input"||e==="change")return ul(n)}function bS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fn=typeof Object.is=="function"?Object.is:bS;function qs(e,n){if(Fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!H.call(n,c)||!Fn(e[c],n[c]))return!1}return!0}function mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gp(e,n){var a=mp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=mp(a)}}function _p(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_p(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function vp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Bn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Bn(e.document)}return n}function mc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var AS=Di&&"documentMode"in document&&11>=document.documentMode,Nr=null,gc=null,Ys=null,_c=!1;function Sp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_c||Nr==null||Nr!==Bn(o)||(o=Nr,"selectionStart"in o&&mc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&qs(Ys,o)||(Ys=o,o=jl(gc,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Nr)))}function Ya(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},vc={},xp={};Di&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function ja(e){if(vc[e])return vc[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return vc[e]=n[a];return e}var yp=ja("animationend"),Mp=ja("animationiteration"),Ep=ja("animationstart"),RS=ja("transitionrun"),CS=ja("transitionstart"),wS=ja("transitioncancel"),Tp=ja("transitionend"),bp=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function oi(e,n){bp.set(e,n),j(n,[e])}var Ap=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var a=Ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:xe(n)},Ap.set(e,n),n)}return{value:e,source:n,stack:xe(n)}}var Jn=[],Pr=0,xc=0;function cl(){for(var e=Pr,n=xc=Pr=0;n<e;){var a=Jn[n];Jn[n++]=null;var o=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var d=Jn[n];if(Jn[n++]=null,o!==null&&c!==null){var E=o.pending;E===null?c.next=c:(c.next=E.next,E.next=c),o.pending=c}d!==0&&Rp(a,c,d)}}function fl(e,n,a,o){Jn[Pr++]=e,Jn[Pr++]=n,Jn[Pr++]=a,Jn[Pr++]=o,xc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yc(e,n,a,o){return fl(e,n,a,o),hl(e)}function Ir(e,n){return fl(e,null,null,n),hl(e)}function Rp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&n!==null&&(c=31-Xt(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function hl(e){if(50<So)throw So=0,Cf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function DS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,n,a,o){return new DS(e,n,a,o)}function Mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ui(e,n){var a=e.alternate;return a===null?(a=Hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,a,o,c,d){var E=0;if(o=e,typeof e=="function")Mc(e)&&(E=1);else if(typeof e=="string")E=Lx(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Hn(31,a,n,c),e.elementType=D,e.lanes=d,e;case M:return Za(a.children,c,d,n);case T:E=8,c|=24;break;case x:return e=Hn(12,a,n,c|2),e.elementType=x,e.lanes=d,e;case G:return e=Hn(13,a,n,c),e.elementType=G,e.lanes=d,e;case B:return e=Hn(19,a,n,c),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case R:E=10;break t;case U:E=9;break t;case L:E=11;break t;case z:E=14;break t;case W:E=16,o=null;break t}E=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Hn(E,a,n,c),n.elementType=e,n.type=o,n.lanes=d,n}function Za(e,n,a,o){return e=Hn(7,e,o,n),e.lanes=a,e}function Ec(e,n,a){return e=Hn(6,e,null,n),e.lanes=a,e}function Tc(e,n,a){return n=Hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Br=[],Fr=0,pl=null,ml=0,$n=[],ti=0,Ka=null,Li=1,Ni="";function Qa(e,n){Br[Fr++]=ml,Br[Fr++]=pl,pl=e,ml=n}function wp(e,n,a){$n[ti++]=Li,$n[ti++]=Ni,$n[ti++]=Ka,Ka=e;var o=Li;e=Ni;var c=32-Xt(o)-1;o&=~(1<<c),a+=1;var d=32-Xt(n)+c;if(30<d){var E=c-c%5;d=(o&(1<<E)-1).toString(32),o>>=E,c-=E,Li=1<<32-Xt(n)+c|a<<c|o,Ni=d+e}else Li=1<<d|a<<c|o,Ni=e}function bc(e){e.return!==null&&(Qa(e,1),wp(e,1,0))}function Ac(e){for(;e===pl;)pl=Br[--Fr],Br[Fr]=null,ml=Br[--Fr],Br[Fr]=null;for(;e===Ka;)Ka=$n[--ti],$n[ti]=null,Ni=$n[--ti],$n[ti]=null,Li=$n[--ti],$n[ti]=null}var Rn=null,Ke=null,Ee=!1,Ja=null,mi=!1,Rc=Error(r(519));function $a(e){var n=Error(r(418,""));throw Ks(Qn(n,e)),Rc}function Dp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ve]=e,n[pn]=o,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)fe(yo[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),nl(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),oa(n);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),Yd(n,o.value,o.defaultValue,o.children),oa(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Yg(n.textContent,a)?(o.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),o.onScroll!=null&&fe("scroll",n),o.onScrollEnd!=null&&fe("scrollend",n),o.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||$a(e)}function Up(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Rn=Rn.return}}function js(e){if(e!==Rn)return!1;if(!Ee)return Up(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&Ke&&$a(e),Up(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ke=ui(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ke=null}}else n===27?(n=Ke,Ta(e.type)?(e=jf,jf=null,Ke=e):Ke=n):Ke=Rn?ui(e.stateNode.nextSibling):null;return!0}function Zs(){Ke=Rn=null,Ee=!1}function Lp(){var e=Ja;return e!==null&&(Ln===null?Ln=e:Ln.push.apply(Ln,e),Ja=null),e}function Ks(e){Ja===null?Ja=[e]:Ja.push(e)}var Cc=J(null),tr=null,Oi=null;function ua(e,n,a){yt(Cc,n._currentValue),n._currentValue=a}function Pi(e){e._currentValue=Cc.current,St(Cc)}function wc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Dc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var E=c.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),wc(d.return,a,e),o||(E=null);break t}d=b.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(r(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),wc(E,a,e),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===e){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function Qs(e,n,a,o){e=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var b=c.type;Fn(c.pendingProps.value,E.value)||(e!==null?e.push(b):e=[b])}}else if(c===wt.current){if(E=c.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}c=c.return}e!==null&&Dc(n,e,a,o),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function er(e){tr=e,Oi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Np(tr,e)}function _l(e,n){return tr===null&&er(e),Np(e,n)}function Np(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(e===null)throw Error(r(308));Oi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Oi=Oi.next=n;return a}var US=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},LS=s.unstable_scheduleCallback,NS=s.unstable_NormalPriority,cn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new US,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&LS(NS,function(){e.controller.abort()})}var $s=null,Lc=0,Hr=0,Gr=null;function OS(e,n){if($s===null){var a=$s=[];Lc=0,Hr=Pf(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lc++,n.then(Op,Op),n}function Op(){if(--Lc===0&&$s!==null){Gr!==null&&(Gr.status="fulfilled");var e=$s;$s=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function PS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Pp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&OS(e,n),Pp!==null&&Pp(e,n)};var nr=J(null);function Nc(){var e=nr.current;return e!==null?e:Ie.pooledCache}function vl(e,n){n===null?yt(nr,nr.current):yt(nr,n.pool)}function Ip(){var e=Nc();return e===null?null:{parent:cn._currentValue,pool:e}}var to=Error(r(460)),zp=Error(r(474)),Sl=Error(r(542)),Oc={then:function(){}};function Bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xl(){}function Fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(xl,xl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gp(e),e;default:if(typeof n.status=="string")n.then(xl,xl);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gp(e),e}throw eo=n,to}}var eo=null;function Hp(){if(eo===null)throw Error(r(459));var e=eo;return eo=null,e}function Gp(e){if(e===to||e===Sl)throw Error(r(483))}var ca=!1;function Pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ic(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=hl(e),Rp(e,null,a),n}return fl(e,o,n,a),hl(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,We(e,a)}}function zc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bc=!1;function io(){if(Bc){var e=Gr;if(e!==null)throw e}}function ao(e,n,a,o){Bc=!1;var c=e.updateQueue;ca=!1;var d=c.firstBaseUpdate,E=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,$=I.next;I.next=null,E===null?d=$:E.next=$,E=I;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==E&&(b===null?ct.firstBaseUpdate=$:b.next=$,ct.lastBaseUpdate=I))}if(d!==null){var mt=c.baseState;E=0,ct=$=I=null,b=d;do{var et=b.lane&-536870913,at=et!==b.lane;if(at?(_e&et)===et:(o&et)===et){et!==0&&et===Hr&&(Bc=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var $t=e,jt=b;et=n;var Le=a;switch(jt.tag){case 1:if($t=jt.payload,typeof $t=="function"){mt=$t.call(Le,mt,et);break t}mt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=jt.payload,et=typeof $t=="function"?$t.call(Le,mt,et):$t,et==null)break t;mt=g({},mt,et);break t;case 2:ca=!0}}et=b.callback,et!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[et]:at.push(et))}else at={lane:et,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?($=ct=at,I=mt):ct=ct.next=at,E|=et;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;at=b,b=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ct===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,d===null&&(c.shared.lanes=0),xa|=E,e.lanes=E,e.memoizedState=mt}}function Vp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Vp(a[e],n)}var Vr=J(null),yl=J(0);function Xp(e,n){e=Vi,yt(yl,e),yt(Vr,n),Vi=e|n.baseLanes}function Fc(){yt(yl,Vi),yt(Vr,Vr.current)}function Hc(){Vi=yl.current,St(Vr),St(yl)}var da=0,le=null,De=null,rn=null,Ml=!1,kr=!1,ir=!1,El=0,ro=0,Xr=null,IS=0;function en(){throw Error(r(321))}function Gc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Fn(e[a],n[a]))return!1;return!0}function Vc(e,n,a,o,c,d){return da=d,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Rm:Cm,ir=!1,d=a(o,c),ir=!1,kr&&(d=qp(n,a,o,c)),Wp(e),d}function Wp(e){O.H=wl;var n=De!==null&&De.next!==null;if(da=0,rn=De=le=null,Ml=!1,ro=0,Xr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&gl(e)&&(mn=!0))}function qp(e,n,a,o){le=e;var c=0;do{if(kr&&(Xr=null),ro=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,rn=De=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=kS,d=n(a,o)}while(kr);return d}function zS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(le.flags|=1024),n}function kc(){var e=El!==0;return El=0,e}function Xc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wc(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}da=0,rn=De=le=null,kr=!1,ro=El=0,Xr=null}function Dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?le.memoizedState=rn=e:rn=rn.next=e,rn}function sn(){if(De===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=rn===null?le.memoizedState:rn.next;if(n!==null)rn=n,De=e;else{if(e===null)throw le.alternate===null?Error(r(467)):Error(r(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},rn===null?le.memoizedState=rn=e:rn=rn.next=e}return rn}function qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,Xr===null&&(Xr=[]),e=Fp(Xr,e,n),n=le,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Rm:Cm),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===R)return Mn(e)}throw Error(r(438,String(e)))}function Yc(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=qc(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=sn();return jc(n,De,e)}function jc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var E=c.next;c.next=d.next,d.next=E}n.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{n=c.next;var b=E=null,I=null,$=n,ct=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(_e&mt)===mt:(da&mt)===mt){var et=$.revertLane;if(et===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Hr&&(ct=!0);else if((da&et)===et){$=$.next,et===Hr&&(ct=!0);continue}else mt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=mt,E=d):I=I.next=mt,le.lanes|=et,xa|=et;mt=$.action,ir&&a(d,mt),d=$.hasEagerState?$.eagerState:a(d,mt)}else et={lane:mt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(b=I=et,E=d):I=I.next=et,le.lanes|=mt,xa|=mt;$=$.next}while($!==null&&$!==n);if(I===null?E=d:I.next=b,!Fn(d,e.memoizedState)&&(mn=!0,ct&&(a=Gr,a!==null)))throw a;e.memoizedState=d,e.baseState=E,e.baseQueue=I,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Zc(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var E=c=c.next;do d=e(d,E.action),E=E.next;while(E!==c);Fn(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Yp(e,n,a){var o=le,c=sn(),d=Ee;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!Fn((De||c).memoizedState,a);E&&(c.memoizedState=a,mn=!0),c=c.queue;var b=Kp.bind(null,o,c,e);if(oo(2048,8,b,[e]),c.getSnapshot!==n||E||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Wr(9,Al(),Zp.bind(null,o,c,a,n),null),Ie===null)throw Error(r(349));d||(da&124)!==0||jp(o,n,a)}return a}function jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=qc(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Zp(e,n,a,o){n.value=a,n.getSnapshot=o,Qp(n)&&Jp(e)}function Kp(e,n,a){return a(function(){Qp(n)&&Jp(e)})}function Qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Fn(e,a)}catch{return!0}}function Jp(e){var n=Ir(e,2);n!==null&&Wn(n,e,2)}function Kc(e){var n=Dn();if(typeof e=="function"){var a=e;if(e=a(),ir){Ut(!0);try{a()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function $p(e,n,a,o){return e.baseState=a,jc(e,De,typeof o=="function"?o:Ii)}function BS(e,n,a,o,c){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,tm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function tm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var d=O.T,E={};O.T=E;try{var b=a(c,o),I=O.S;I!==null&&I(E,b),em(e,n,b)}catch($){Qc(e,n,$)}finally{O.T=d}}else try{d=a(c,o),em(e,n,d)}catch($){Qc(e,n,$)}}function em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){nm(e,n,o)},function(o){return Qc(e,n,o)}):nm(e,n,a)}function nm(e,n,a){n.status="fulfilled",n.value=a,im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,tm(e,a)))}function Qc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==o)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function am(e,n){return n}function rm(e,n){if(Ee){var a=Ie.formState;if(a!==null){t:{var o=le;if(Ee){if(Ke){e:{for(var c=Ke,d=mi;c.nodeType!==8;){if(!d){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Ke=ui(c.nextSibling),o=c.data==="F!";break t}}$a(o)}o=!1}o&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=o,a=Tm.bind(null,le,o),o.dispatch=a,o=Kc(!1),d=nf.bind(null,le,!1,o.queue),o=Dn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=BS.bind(null,le,c,d,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function sm(e){var n=sn();return om(n,De,e)}function om(e,n,a){if(n=jc(e,n,am)[0],e=bl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(E){throw E===to?Sl:E}else o=n;n=sn();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Wr(9,Al(),FS.bind(null,c,a),null)),[o,d,e]}function FS(e,n){e.action=n}function lm(e){var n=sn(),a=De;if(a!==null)return om(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Wr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=qc(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Al(){return{destroy:void 0,resource:void 0}}function um(){return sn().memoizedState}function Rl(e,n,a,o){var c=Dn();o=o===void 0?null:o,le.flags|=e,c.memoizedState=Wr(1|n,Al(),a,o)}function oo(e,n,a,o){var c=sn();o=o===void 0?null:o;var d=c.memoizedState.inst;De!==null&&o!==null&&Gc(o,De.memoizedState.deps)?c.memoizedState=Wr(n,d,a,o):(le.flags|=e,c.memoizedState=Wr(1|n,d,a,o))}function cm(e,n){Rl(8390656,8,e,n)}function fm(e,n){oo(2048,8,e,n)}function hm(e,n){return oo(4,2,e,n)}function dm(e,n){return oo(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mm(e,n,a){a=a!=null?a.concat([e]):null,oo(4,4,pm.bind(null,n,e),a)}function Jc(){}function gm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function _m(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gc(n,o[1]))return o[0];if(o=e(),ir){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o}function $c(e,n,a){return a===void 0||(da&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=xg(),le.lanes|=e,xa|=e,a)}function vm(e,n,a,o){return Fn(a,n)?a:Vr.current!==null?(e=$c(e,a,o),Fn(e,n)||(mn=!0),e):(da&42)===0?(mn=!0,e.memoizedState=a):(e=xg(),le.lanes|=e,xa|=e,n)}function Sm(e,n,a,o,c){var d=q.p;q.p=d!==0&&8>d?d:8;var E=O.T,b={};O.T=b,nf(e,!1,n,a);try{var I=c(),$=O.S;if($!==null&&$(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=PS(I,o);lo(e,n,ct,Xn(e))}else lo(e,n,o,Xn(e))}catch(mt){lo(e,n,{then:function(){},status:"rejected",reason:mt},Xn())}finally{q.p=d,O.T=E}}function HS(){}function tf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=xm(e).queue;Sm(e,c,n,Z,a===null?HS:function(){return ym(e),a(o)})}function xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ym(e){var n=xm(e).next.queue;lo(e,n,{},Xn())}function ef(){return Mn(Ro)}function Mm(){return sn().memoizedState}function Em(){return sn().memoizedState}function GS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();e=fa(a);var o=ha(n,e,a);o!==null&&(Wn(o,n,a),no(o,n,a)),n={cache:Uc()},e.payload=n;return}n=n.return}}function VS(e,n,a){var o=Xn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?bm(n,a):(a=yc(e,n,a,o),a!==null&&(Wn(a,e,o),Am(a,n,o)))}function Tm(e,n,a){var o=Xn();lo(e,n,a,o)}function lo(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))bm(n,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,b=d(E,a);if(c.hasEagerState=!0,c.eagerState=b,Fn(b,E))return fl(e,n,c,0),Ie===null&&cl(),!1}catch{}finally{}if(a=yc(e,n,c,o),a!==null)return Wn(a,e,o),Am(a,n,o),!0}return!1}function nf(e,n,a,o){if(o={lane:2,revertLane:Pf(),action:o,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=yc(e,a,o,2),n!==null&&Wn(n,e,2)}function Cl(e){var n=e.alternate;return e===le||n!==null&&n===le}function bm(e,n){kr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Am(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,We(e,a)}}var wl={readContext:Mn,use:Tl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},Rm={readContext:Mn,use:Tl,useCallback:function(e,n){return Dn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:cm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,pm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=Dn();n=n===void 0?null:n;var o=e();if(ir){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Dn();if(a!==void 0){var c=a(n);if(ir){Ut(!0);try{a(n)}finally{Ut(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=VS.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Dn();return e={current:e},n.memoizedState=e},useState:function(e){e=Kc(e);var n=e.queue,a=Tm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Jc,useDeferredValue:function(e,n){var a=Dn();return $c(a,e,n)},useTransition:function(){var e=Kc(!1);return e=Sm.bind(null,le,e.queue,!0,!1),Dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,c=Dn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(_e&124)!==0||jp(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,cm(Kp.bind(null,o,d,e),[e]),o.flags|=2048,Wr(9,Al(),Zp.bind(null,o,d,a,n),null),a},useId:function(){var e=Dn(),n=Ie.identifierPrefix;if(Ee){var a=Ni,o=Li;a=(o&~(1<<32-Xt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=IS++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:rm,useActionState:rm,useOptimistic:function(e){var n=Dn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yc,useCacheRefresh:function(){return Dn().memoizedState=GS.bind(null,le)}},Cm={readContext:Mn,use:Tl,useCallback:gm,useContext:Mn,useEffect:fm,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:bl,useRef:um,useState:function(){return bl(Ii)},useDebugValue:Jc,useDeferredValue:function(e,n){var a=sn();return vm(a,De.memoizedState,e,n)},useTransition:function(){var e=bl(Ii)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Yp,useId:Mm,useHostTransitionStatus:ef,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var a=sn();return $p(a,De,e,n)},useMemoCache:Yc,useCacheRefresh:Em},kS={readContext:Mn,use:Tl,useCallback:gm,useContext:Mn,useEffect:fm,useImperativeHandle:mm,useInsertionEffect:hm,useLayoutEffect:dm,useMemo:_m,useReducer:Zc,useRef:um,useState:function(){return Zc(Ii)},useDebugValue:Jc,useDeferredValue:function(e,n){var a=sn();return De===null?$c(a,e,n):vm(a,De.memoizedState,e,n)},useTransition:function(){var e=Zc(Ii)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:Yp,useId:Mm,useHostTransitionStatus:ef,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=sn();return De!==null?$p(a,De,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yc,useCacheRefresh:Em},qr=null,uo=0;function Dl(e){var n=uo;return uo+=1,qr===null&&(qr=[]),Fp(qr,e,n)}function co(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function wm(e){var n=e._init;return n(e._payload)}function Dm(e){function n(Y,V){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Ui(Y,V),Y.index=0,Y.sibling=null,Y}function d(Y,V,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function E(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function b(Y,V,Q,dt){return V===null||V.tag!==6?(V=Ec(Q,Y.mode,dt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function I(Y,V,Q,dt){var Bt=Q.type;return Bt===M?ct(Y,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===W&&wm(Bt)===V.type)?(V=c(V,Q.props),co(V,Q),V.return=Y,V):(V=dl(Q.type,Q.key,Q.props,null,Y.mode,dt),co(V,Q),V.return=Y,V)}function $(Y,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Tc(Q,Y.mode,dt),V.return=Y,V):(V=c(V,Q.children||[]),V.return=Y,V)}function ct(Y,V,Q,dt,Bt){return V===null||V.tag!==7?(V=Za(Q,Y.mode,dt,Bt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function mt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ec(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return Q=dl(V.type,V.key,V.props,null,Y.mode,Q),co(Q,V),Q.return=Y,Q;case y:return V=Tc(V,Y.mode,Q),V.return=Y,V;case W:var dt=V._init;return V=dt(V._payload),mt(Y,V,Q)}if(lt(V)||rt(V))return V=Za(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,Dl(V),Q);if(V.$$typeof===R)return mt(Y,_l(Y,V),Q);Ul(Y,V)}return null}function et(Y,V,Q,dt){var Bt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Bt!==null?null:b(Y,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Bt?I(Y,V,Q,dt):null;case y:return Q.key===Bt?$(Y,V,Q,dt):null;case W:return Bt=Q._init,Q=Bt(Q._payload),et(Y,V,Q,dt)}if(lt(Q)||rt(Q))return Bt!==null?null:ct(Y,V,Q,dt,null);if(typeof Q.then=="function")return et(Y,V,Dl(Q),dt);if(Q.$$typeof===R)return et(Y,V,_l(Y,Q),dt);Ul(Y,Q)}return null}function at(Y,V,Q,dt,Bt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(Q)||null,b(V,Y,""+dt,Bt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case _:return Y=Y.get(dt.key===null?Q:dt.key)||null,I(V,Y,dt,Bt);case y:return Y=Y.get(dt.key===null?Q:dt.key)||null,$(V,Y,dt,Bt);case W:var ue=dt._init;return dt=ue(dt._payload),at(Y,V,Q,dt,Bt)}if(lt(dt)||rt(dt))return Y=Y.get(Q)||null,ct(V,Y,dt,Bt,null);if(typeof dt.then=="function")return at(Y,V,Q,Dl(dt),Bt);if(dt.$$typeof===R)return at(Y,V,Q,_l(V,dt),Bt);Ul(V,dt)}return null}function $t(Y,V,Q,dt){for(var Bt=null,ue=null,Gt=V,Kt=V=0,_n=null;Gt!==null&&Kt<Q.length;Kt++){Gt.index>Kt?(_n=Gt,Gt=null):_n=Gt.sibling;var ye=et(Y,Gt,Q[Kt],dt);if(ye===null){Gt===null&&(Gt=_n);break}e&&Gt&&ye.alternate===null&&n(Y,Gt),V=d(ye,V,Kt),ue===null?Bt=ye:ue.sibling=ye,ue=ye,Gt=_n}if(Kt===Q.length)return a(Y,Gt),Ee&&Qa(Y,Kt),Bt;if(Gt===null){for(;Kt<Q.length;Kt++)Gt=mt(Y,Q[Kt],dt),Gt!==null&&(V=d(Gt,V,Kt),ue===null?Bt=Gt:ue.sibling=Gt,ue=Gt);return Ee&&Qa(Y,Kt),Bt}for(Gt=o(Gt);Kt<Q.length;Kt++)_n=at(Gt,Y,Kt,Q[Kt],dt),_n!==null&&(e&&_n.alternate!==null&&Gt.delete(_n.key===null?Kt:_n.key),V=d(_n,V,Kt),ue===null?Bt=_n:ue.sibling=_n,ue=_n);return e&&Gt.forEach(function(wa){return n(Y,wa)}),Ee&&Qa(Y,Kt),Bt}function jt(Y,V,Q,dt){if(Q==null)throw Error(r(151));for(var Bt=null,ue=null,Gt=V,Kt=V=0,_n=null,ye=Q.next();Gt!==null&&!ye.done;Kt++,ye=Q.next()){Gt.index>Kt?(_n=Gt,Gt=null):_n=Gt.sibling;var wa=et(Y,Gt,ye.value,dt);if(wa===null){Gt===null&&(Gt=_n);break}e&&Gt&&wa.alternate===null&&n(Y,Gt),V=d(wa,V,Kt),ue===null?Bt=wa:ue.sibling=wa,ue=wa,Gt=_n}if(ye.done)return a(Y,Gt),Ee&&Qa(Y,Kt),Bt;if(Gt===null){for(;!ye.done;Kt++,ye=Q.next())ye=mt(Y,ye.value,dt),ye!==null&&(V=d(ye,V,Kt),ue===null?Bt=ye:ue.sibling=ye,ue=ye);return Ee&&Qa(Y,Kt),Bt}for(Gt=o(Gt);!ye.done;Kt++,ye=Q.next())ye=at(Gt,Y,Kt,ye.value,dt),ye!==null&&(e&&ye.alternate!==null&&Gt.delete(ye.key===null?Kt:ye.key),V=d(ye,V,Kt),ue===null?Bt=ye:ue.sibling=ye,ue=ye);return e&&Gt.forEach(function(Xx){return n(Y,Xx)}),Ee&&Qa(Y,Kt),Bt}function Le(Y,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:t:{for(var Bt=Q.key;V!==null;){if(V.key===Bt){if(Bt=Q.type,Bt===M){if(V.tag===7){a(Y,V.sibling),dt=c(V,Q.props.children),dt.return=Y,Y=dt;break t}}else if(V.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===W&&wm(Bt)===V.type){a(Y,V.sibling),dt=c(V,Q.props),co(dt,Q),dt.return=Y,Y=dt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}Q.type===M?(dt=Za(Q.props.children,Y.mode,dt,Q.key),dt.return=Y,Y=dt):(dt=dl(Q.type,Q.key,Q.props,null,Y.mode,dt),co(dt,Q),dt.return=Y,Y=dt)}return E(Y);case y:t:{for(Bt=Q.key;V!==null;){if(V.key===Bt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),dt=c(V,Q.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}dt=Tc(Q,Y.mode,dt),dt.return=Y,Y=dt}return E(Y);case W:return Bt=Q._init,Q=Bt(Q._payload),Le(Y,V,Q,dt)}if(lt(Q))return $t(Y,V,Q,dt);if(rt(Q)){if(Bt=rt(Q),typeof Bt!="function")throw Error(r(150));return Q=Bt.call(Q),jt(Y,V,Q,dt)}if(typeof Q.then=="function")return Le(Y,V,Dl(Q),dt);if(Q.$$typeof===R)return Le(Y,V,_l(Y,Q),dt);Ul(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),dt=c(V,Q),dt.return=Y,Y=dt):(a(Y,V),dt=Ec(Q,Y.mode,dt),dt.return=Y,Y=dt),E(Y)):a(Y,V)}return function(Y,V,Q,dt){try{uo=0;var Bt=Le(Y,V,Q,dt);return qr=null,Bt}catch(Gt){if(Gt===to||Gt===Sl)throw Gt;var ue=Hn(29,Gt,null,Y.mode);return ue.lanes=dt,ue.return=Y,ue}finally{}}}var Yr=Dm(!0),Um=Dm(!1),ei=J(null),gi=null;function pa(e){var n=e.alternate;yt(fn,fn.current&1),yt(ei,e),gi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(gi=e)}function Lm(e){if(e.tag===22){if(yt(fn,fn.current),yt(ei,e),gi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(gi=e)}}else ma()}function ma(){yt(fn,fn.current),yt(ei,ei.current)}function zi(e){St(ei),gi===e&&(gi=null),St(fn)}var fn=J(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function af(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Xn(),c=fa(o);c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,o),n!==null&&(Wn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Xn(),c=fa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ha(e,c,o),n!==null&&(Wn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Xn(),o=fa(a);o.tag=2,n!=null&&(o.callback=n),n=ha(e,o,a),n!==null&&(Wn(n,e,a),no(n,e,a))}};function Nm(e,n,a,o,c,d,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!qs(a,o)||!qs(c,d):!0}function Om(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&rf.enqueueReplaceState(n,n.state,null)}function ar(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Pm(e){Nl(e)}function Im(e){console.error(e)}function zm(e){Nl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function sf(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Fm(e){return e=fa(e),e.tag=3,e}function Hm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){Bm(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Bm(n,a,o),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function XS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,c,!0),a=ei.current,a!==null){switch(a.tag){case 13:return gi===null?Df():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Oc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(e,o,c)),!1;case 22:return a.flags|=65536,o===Oc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(e,o,c)),!1}throw Error(r(435,a.tag))}return Lf(e,o,c),Df(),!1}if(Ee)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Rc&&(e=Error(r(422),{cause:o}),Ks(Qn(e,a)))):(o!==Rc&&(n=Error(r(423),{cause:o}),Ks(Qn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Qn(o,a),c=sf(e.stateNode,o,c),zc(e,c),Qe!==4&&(Qe=2)),!1;var d=Error(r(520),{cause:o});if(d=Qn(d,a),vo===null?vo=[d]:vo.push(d),Qe!==4&&(Qe=2),n===null)return!0;o=Qn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=sf(a.stateNode,o,e),zc(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ya===null||!ya.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Fm(c),Hm(c,e,a,o),zc(a,c),!1}a=a.return}while(a!==null);return!1}var Gm=Error(r(461)),mn=!1;function Sn(e,n,a,o){n.child=e===null?Um(n,null,a,o):Yr(n,e.child,a,o)}function Vm(e,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var b in o)b!=="ref"&&(E[b]=o[b])}else E=o;return er(n),o=Vc(e,n,a,E,d,c),b=kc(),e!==null&&!mn?(Xc(e,n,c),Bi(e,n,c)):(Ee&&b&&bc(n),n.flags|=1,Sn(e,n,o,c),n.child)}function km(e,n,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!Mc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Xm(e,n,d,o,c)):(e=dl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!pf(e,c)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:qs,a(E,o)&&e.ref===n.ref)return Bi(e,n,c)}return n.flags|=1,e=Ui(d,o),e.ref=n.ref,e.return=n,n.child=e}function Xm(e,n,a,o,c){if(e!==null){var d=e.memoizedProps;if(qs(d,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=d,pf(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Bi(e,n,c)}return of(e,n,a,o,c)}function Wm(e,n,a){var o=n.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(c=n.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return qm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,d!==null?d.cachePool:null),d!==null?Xp(n,d):Fc(),Lm(n);else return n.lanes=n.childLanes=536870912,qm(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(vl(n,d.cachePool),Xp(n,d),ma(),n.memoizedState=null):(e!==null&&vl(n,null),Fc(),ma());return Sn(e,n,c,a),n.child}function qm(e,n,a,o){var c=Nc();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&vl(n,null),Fc(),Lm(n),e!==null&&Qs(e,n,o,!0),null}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function of(e,n,a,o,c){return er(n),a=Vc(e,n,a,o,void 0,c),o=kc(),e!==null&&!mn?(Xc(e,n,c),Bi(e,n,c)):(Ee&&o&&bc(n),n.flags|=1,Sn(e,n,a,c),n.child)}function Ym(e,n,a,o,c,d){return er(n),n.updateQueue=null,a=qp(n,o,a,c),Wp(e),o=kc(),e!==null&&!mn?(Xc(e,n,d),Bi(e,n,d)):(Ee&&o&&bc(n),n.flags|=1,Sn(e,n,a,d),n.child)}function jm(e,n,a,o,c){if(er(n),n.stateNode===null){var d=zr,E=a.contextType;typeof E=="object"&&E!==null&&(d=Mn(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=rf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Pc(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?Mn(E):zr,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(af(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&rf.enqueueReplaceState(d,d.state,null),ao(n,o,d,c),io(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,I=ar(a,b);d.props=I;var $=d.context,ct=a.contextType;E=zr,typeof ct=="object"&&ct!==null&&(E=Mn(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||$!==E)&&Om(n,d,o,E),ca=!1;var et=n.memoizedState;d.state=et,ao(n,o,d,c),io(),$=n.memoizedState,b||et!==$||ca?(typeof mt=="function"&&(af(n,a,mt,o),$=n.memoizedState),(I=ca||Nm(n,a,I,o,et,$,E))?(ct||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=E,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ic(e,n),E=n.memoizedProps,ct=ar(a,E),d.props=ct,mt=n.pendingProps,et=d.context,$=a.contextType,I=zr,typeof $=="object"&&$!==null&&(I=Mn($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==mt||et!==I)&&Om(n,d,o,I),ca=!1,et=n.memoizedState,d.state=et,ao(n,o,d,c),io();var at=n.memoizedState;E!==mt||et!==at||ca||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof b=="function"&&(af(n,a,b,o),at=n.memoizedState),(ct=ca||Nm(n,a,ct,o,et,at,I)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,at,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,at,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),d.props=o,d.state=at,d.context=I,o=ct):(typeof d.componentDidUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Pl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Yr(n,e.child,null,c),n.child=Yr(n,null,a,c)):Sn(e,n,a,c),n.memoizedState=d.state,e=n.child):e=Bi(e,n,c),e}function Zm(e,n,a,o){return Zs(),n.flags|=256,Sn(e,n,a,o),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:Ip()}}function cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function Km(e,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),E&&(c=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(c?pa(n):ma(),Ee){var b=Ke,I;if(I=b){t:{for(I=b,b=mi;I.nodeType!==8;){if(!b){b=null;break t}if(I=ui(I.nextSibling),I===null){b=null;break t}}b=I}b!==null?(n.memoizedState={dehydrated:b,treeContext:Ka!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},I=Hn(18,null,null,0),I.stateNode=b,I.return=n,n.child=I,Rn=n,Ke=null,I=!0):I=!1}I||$a(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Yf(b)?n.lanes=32:n.lanes=536870912,null;zi(n)}return b=o.children,o=o.fallback,c?(ma(),c=n.mode,b=Il({mode:"hidden",children:b},c),o=Za(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=uf(a),c.childLanes=cf(e,E,a),n.memoizedState=lf,o):(pa(n),ff(n,b))}if(I=e.memoizedState,I!==null&&(b=I.dehydrated,b!==null)){if(d)n.flags&256?(pa(n),n.flags&=-257,n=hf(e,n,a)):n.memoizedState!==null?(ma(),n.child=e.child,n.flags|=128,n=null):(ma(),c=o.fallback,b=n.mode,o=Il({mode:"visible",children:o.children},b),c=Za(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Yr(n,e.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=cf(e,E,a),n.memoizedState=lf,n=c);else if(pa(n),Yf(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var $=E.dgst;E=$,o=Error(r(419)),o.stack="",o.digest=E,Ks({value:o,source:null,stack:null}),n=hf(e,n,a)}else if(mn||Qs(e,n,a,!1),E=(a&e.childLanes)!==0,mn||E){if(E=Ie,E!==null&&(o=a&-a,o=(o&42)!==0?1:tn(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Ir(e,o),Wn(E,e,o),Gm;b.data==="$?"||Df(),n=hf(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ke=ui(b.nextSibling),Rn=n,Ee=!0,Ja=null,mi=!1,e!==null&&($n[ti++]=Li,$n[ti++]=Ni,$n[ti++]=Ka,Li=e.id,Ni=e.overflow,Ka=n),n=ff(n,o.children),n.flags|=4096);return n}return c?(ma(),c=o.fallback,b=n.mode,I=e.child,$=I.sibling,o=Ui(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?c=Ui($,c):(c=Za(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=e.child.memoizedState,b===null?b=uf(a):(I=b.cachePool,I!==null?($=cn._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=Ip(),b={baseLanes:b.baseLanes|a,cachePool:I}),c.memoizedState=b,c.childLanes=cf(e,E,a),n.memoizedState=lf,o):(pa(n),a=e.child,e=a.sibling,a=Ui(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(E=n.deletions,E===null?(n.deletions=[e],n.flags|=16):E.push(e)),n.child=a,n.memoizedState=null,a)}function ff(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Hn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function hf(e,n,a){return Yr(n,e.child,null,a),e=ff(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),wc(e.return,n,a)}function df(e,n,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function Jm(e,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;if(Sn(e,n,o.children,a),o=fn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(fn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),df(n,!1,c,a,d);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Ll(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}df(n,!0,a,null,d);break;case"together":df(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ui(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ui(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function WS(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),ua(n,cn,e.memoizedState.cache),Zs();break;case 27:case 5:ae(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(e,n,a):(pa(n),e=Bi(e,n,a),e!==null?e.sibling:null);pa(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Jm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(fn,fn.current),o)break;return null;case 22:case 23:return n.lanes=0,Wm(e,n,a);case 24:ua(n,cn,e.memoizedState.cache)}return Bi(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!pf(e,a)&&(n.flags&128)===0)return mn=!1,WS(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ee&&(n.flags&1048576)!==0&&wp(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Mc(o)?(e=ar(o,e),n.tag=1,n=jm(null,n,o,e,a)):(n.tag=0,n=of(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===L){n.tag=11,n=Vm(null,n,o,e,a);break t}else if(c===z){n.tag=14,n=km(null,n,o,e,a);break t}}throw n=ut(o)||o,Error(r(306,n,""))}}return n;case 0:return of(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ar(o,n.pendingProps),jm(e,n,o,c,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,Ic(e,n),ao(n,o,null,a);var E=n.memoizedState;if(o=E.cache,ua(n,cn,o),o!==d.cache&&Dc(n,[cn],a,!0),io(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Zm(e,n,o,a);break t}else if(o!==c){c=Qn(Error(r(424)),n),Ks(c),n=Zm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=ui(e.firstChild),Rn=n,Ee=!0,Ja=null,mi=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zs(),o===c){n=Bi(e,n,a);break t}Sn(e,n,o,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=i_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=Kl(vt.current).createElement(a),o[Ve]=n,o[pn]=e,yn(o,a,e),k(o),n.stateNode=o):n.memoizedState=i_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ae(n),e===null&&Ee&&(o=n.stateNode=t_(n.type,n.pendingProps,vt.current),Rn=n,mi=!0,c=Ke,Ta(n.type)?(jf=c,Ke=ui(o.firstChild)):Ke=c),Sn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((c=o=Ke)&&(o=Sx(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Rn=n,Ke=ui(o.firstChild),mi=!1,c=!0):c=!1),c||$a(n)),ae(n),c=n.type,d=n.pendingProps,E=e!==null?e.memoizedProps:null,o=d.children,Xf(c,d)?o=null:E!==null&&Xf(c,E)&&(n.flags|=32),n.memoizedState!==null&&(c=Vc(e,n,zS,null,null,a),Ro._currentValue=c),Pl(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Ke)&&(a=xx(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Rn=n,Ke=null,e=!0):e=!1),e||$a(n)),null;case 13:return Km(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Yr(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return Vm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ua(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,er(n),c=Mn(c),o=o(c),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Xm(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Il(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ui(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Wm(e,n,a);case 24:return er(n),o=Mn(cn),e===null?(c=Nc(),c===null&&(c=Ie,d=Uc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},Pc(n),ua(n,cn,c)):((e.lanes&a)!==0&&(Ic(e,n),ao(n,null,null,a),io()),c=e.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ua(n,cn,o)):(o=d.cache,ua(n,cn,o),o!==c.cache&&Dc(n,[cn],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Fi(e){e.flags|=4}function tg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l_(n)){if(n=ei.current,n!==null&&((_e&4194048)===_e?gi!==null:(_e&62914560)!==_e&&(_e&536870912)===0||n!==gi))throw eo=Oc,zp;e.flags|=8192}}function zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?pt():536870912,e.lanes|=n,Qr|=n)}function fo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function qS(e,n,a){var o=n.pendingProps;switch(Ac(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Pi(cn),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(n)?Fi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lp())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(Fi(n),a!==null?(Ye(n),tg(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Fi(n),Ye(n),tg(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&Fi(n),Ye(n),n.flags&=-16777217),null;case 27:Ne(n),a=vt.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Fi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}e=K.current,js(n)?Dp(n):(e=t_(c,o,a),n.stateNode=e,Fi(n))}return Ye(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Fi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(e=K.current,js(n))Dp(n);else{switch(c=Kl(vt.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[Ve]=n,e[pn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(yn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Fi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Fi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=vt.current,js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Ve]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(e.nodeValue,a)),e||$a(n)}else e=Kl(e).createTextNode(o),e[Ve]=n,n.stateNode=e}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ve]=n}else Zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),c=!1}else c=Lp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(zi(n),n):(zi(n),null)}if(zi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),Ye(n),null;case 4:return Wt(),e===null&&Ff(n.stateNode.containerInfo),Ye(n),null;case 10:return Pi(n.type),Ye(n),null;case 19:if(St(fn),c=n.memoizedState,c===null)return Ye(n),null;if(o=(n.flags&128)!==0,d=c.rendering,d===null)if(o)fo(c,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Ll(e),d!==null){for(n.flags|=128,fo(c,!1),e=d.updateQueue,n.updateQueue=e,zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Cp(a,e),a=a.sibling;return yt(fn,fn.current&1|2),n.child}e=e.sibling}c.tail!==null&&Me()>Hl&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304)}else{if(!o)if(e=Ll(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,zl(n,e),fo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ee)return Ye(n),null}else 2*Me()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,o=!0,fo(c,!1),n.lanes=4194304);c.isBackwards?(d.sibling=n.child,n.child=d):(e=c.last,e!==null?e.sibling=d:n.child=d,c.last=d)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Me(),n.sibling=null,e=fn.current,yt(fn,o?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return zi(n),Hc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&St(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pi(cn),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function YS(e,n){switch(Ac(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Pi(cn),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(zi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return St(fn),null;case 4:return Wt(),null;case 10:return Pi(n.type),null;case 22:case 23:return zi(n),Hc(),e!==null&&St(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Pi(cn),null;case 25:return null;default:return null}}function eg(e,n){switch(Ac(n),n.tag){case 3:Pi(cn),Wt();break;case 26:case 27:case 5:Ne(n);break;case 4:Wt();break;case 13:zi(n);break;case 19:St(fn);break;case 10:Pi(n.type);break;case 22:case 23:zi(n),Hc(),e!==null&&St(nr);break;case 24:Pi(cn)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==c)}}catch(b){Oe(n,n.return,b)}}function ga(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var E=o.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,c=n;var I=a,$=b;try{$()}catch(ct){Oe(c,I,ct)}}}o=o.next}while(o!==d)}}catch(ct){Oe(n,n.return,ct)}}function ng(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kp(n,a)}catch(o){Oe(e,e.return,o)}}}function ig(e,n,a){a.props=ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Oe(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Oe(e,n,c)}}function _i(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Oe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Oe(e,n,c)}else a.current=null}function ag(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Oe(e,e.return,c)}}function mf(e,n,a){try{var o=e.stateNode;px(o,e.type,a,n),o[pn]=n}catch(c){Oe(e,e.return,c)}}function rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(o!==4&&(o===27&&Ta(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_f(e,n,a),e=e.sibling;e!==null;)_f(e,n,a),e=e.sibling}function Bl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bl(e,n,a),e=e.sibling;e!==null;)Bl(e,n,a),e=e.sibling}function sg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,o,a),n[Ve]=e,n[pn]=a}catch(d){Oe(e,e.return,d)}}var Hi=!1,nn=!1,vf=!1,og=typeof WeakSet=="function"?WeakSet:Set,gn=null;function jS(e,n){if(e=e.containerInfo,Vf=nu,e=vp(e),mc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var E=0,b=-1,I=-1,$=0,ct=0,mt=e,et=null;e:for(;;){for(var at;mt!==a||c!==0&&mt.nodeType!==3||(b=E+c),mt!==d||o!==0&&mt.nodeType!==3||(I=E+o),mt.nodeType===3&&(E+=mt.nodeValue.length),(at=mt.firstChild)!==null;)et=mt,mt=at;for(;;){if(mt===e)break e;if(et===a&&++$===c&&(b=E),et===d&&++ct===o&&(I=E),(at=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=at}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},nu=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var $t=ar(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate($t,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(jt){Oe(a,a.return,jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function lg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),o&4&&ho(5,a);break;case 1:if(_a(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(E){Oe(a,a.return,E)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Oe(a,a.return,E)}}o&64&&ng(a),o&512&&po(a,a.return);break;case 3:if(_a(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(e,n)}catch(E){Oe(a,a.return,E)}}break;case 27:n===null&&o&4&&sg(a);case 26:case 5:_a(e,a),n===null&&o&4&&ag(a),o&512&&po(a,a.return);break;case 12:_a(e,a);break;case 13:_a(e,a),o&4&&fg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ix.bind(null,a),yx(e,a))));break;case 22:if(o=a.memoizedState!==null||Hi,!o){n=n!==null&&n.memoizedState!==null||nn,c=Hi;var d=nn;Hi=o,(nn=n)&&!d?va(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),Hi=c,nn=d}break;case 30:break;default:_a(e,a)}}function ug(e){var n=e.alternate;n!==null&&(e.alternate=null,ug(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ar(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Un=!1;function Gi(e,n,a){for(a=a.child;a!==null;)cg(e,n,a),a=a.sibling}function cg(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Vt,a)}catch{}switch(a.tag){case 26:nn||_i(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||_i(a,n);var o=Xe,c=Un;Ta(a.type)&&(Xe=a.stateNode,Un=!1),Gi(e,n,a),Eo(a.stateNode),Xe=o,Un=c;break;case 5:nn||_i(a,n);case 6:if(o=Xe,c=Un,Xe=null,Gi(e,n,a),Xe=o,Un=c,Xe!==null)if(Un)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(d){Oe(a,n,d)}else try{Xe.removeChild(a.stateNode)}catch(d){Oe(a,n,d)}break;case 18:Xe!==null&&(Un?(e=Xe,Jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Uo(e)):Jg(Xe,a.stateNode));break;case 4:o=Xe,c=Un,Xe=a.stateNode.containerInfo,Un=!0,Gi(e,n,a),Xe=o,Un=c;break;case 0:case 11:case 14:case 15:nn||ga(2,a,n),nn||ga(4,a,n),Gi(e,n,a);break;case 1:nn||(_i(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ig(a,n,o)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,Gi(e,n,a),nn=o;break;default:Gi(e,n,a)}}function fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uo(e)}catch(a){Oe(n,n.return,a)}}function ZS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new og),n;default:throw Error(r(435,e.tag))}}function Sf(e,n){var a=ZS(e);n.forEach(function(o){var c=ax.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,E=n,b=E;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Xe=b.stateNode,Un=!1;break t}break;case 5:Xe=b.stateNode,Un=!1;break t;case 3:case 4:Xe=b.stateNode.containerInfo,Un=!0;break t}b=b.return}if(Xe===null)throw Error(r(160));cg(d,E,c),Xe=null,Un=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)hg(n,e),n=n.sibling}var li=null;function hg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),o&4&&(ga(3,e,e.return),ho(3,e),ga(5,e,e.return));break;case 1:Gn(n,e),Vn(e),o&512&&(nn||a===null||_i(a,a.return)),o&64&&Hi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=li;if(Gn(n,e),Vn(e),o&512&&(nn||a===null||_i(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[aa]||d[Ve]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),yn(d,o,a),d[Ve]=e,k(d),o=d;break t;case"link":var E=s_("link","href",c).get(o+(a.href||""));if(E){for(var b=0;b<E.length;b++)if(d=E[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(b,1);break e}}d=c.createElement(o),yn(d,o,a),c.head.appendChild(d);break;case"meta":if(E=s_("meta","content",c).get(o+(a.content||""))){for(b=0;b<E.length;b++)if(d=E[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(b,1);break e}}d=c.createElement(o),yn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[Ve]=e,k(d),o=d}e.stateNode=o}else o_(c,e.type,e.stateNode);else e.stateNode=r_(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?o_(c,e.type,e.stateNode):r_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),o&512&&(nn||a===null||_i(a,a.return)),a!==null&&o&4&&mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),o&512&&(nn||a===null||_i(a,a.return)),e.flags&32){c=e.stateNode;try{wr(c,"")}catch(at){Oe(e,e.return,at)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,mf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(vf=!0);break;case 6:if(Gn(n,e),Vn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Oe(e,e.return,at)}}break;case 3:if($l=null,c=li,li=Ql(n.containerInfo),Gn(n,e),li=c,Vn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(at){Oe(e,e.return,at)}vf&&(vf=!1,dg(e));break;case 4:o=li,li=Ql(e.stateNode.containerInfo),Gn(n,e),Vn(e),li=o;break;case 12:Gn(n,e),Vn(e);break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bf=Me()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=Hi,ct=nn;if(Hi=$||c,nn=ct||I,Gn(n,e),nn=ct,Hi=$,Vn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||Hi||nn||rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,c)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=I.stateNode;var mt=I.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(at){Oe(I,I.return,at)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(at){Oe(I,I.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Sf(e,a))));break;case 19:Gn(n,e),Vn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(rg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=gf(e);Bl(e,d,c);break;case 5:var E=a.stateNode;a.flags&32&&(wr(E,""),a.flags&=-33);var b=gf(e);Bl(e,b,E);break;case 3:case 4:var I=a.stateNode.containerInfo,$=gf(e);_f(e,$,I);break;default:throw Error(r(161))}}catch(ct){Oe(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)lg(e,n.alternate,n),n=n.sibling}function rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),rr(n);break;case 1:_i(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ig(n,n.return,a),rr(n);break;case 27:Eo(n.stateNode);case 26:case 5:_i(n,n.return),rr(n);break;case 22:n.memoizedState===null&&rr(n);break;case 30:rr(n);break;default:rr(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:va(c,d,a),ho(4,d);break;case 1:if(va(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Oe(o,o.return,$)}if(o=d,c=o.updateQueue,c!==null){var b=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Vp(I[c],b)}catch($){Oe(o,o.return,$)}}a&&E&64&&ng(d),po(d,d.return);break;case 27:sg(d);case 26:case 5:va(c,d,a),a&&o===null&&E&4&&ag(d),po(d,d.return);break;case 12:va(c,d,a);break;case 13:va(c,d,a),a&&E&4&&fg(c,d);break;case 22:d.memoizedState===null&&va(c,d,a),po(d,d.return);break;case 30:break;default:va(c,d,a)}n=n.sibling}}function xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function vi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)pg(e,n,a,o),n=n.sibling}function pg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,o),c&2048&&ho(9,n);break;case 1:vi(e,n,a,o);break;case 3:vi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(c&2048){vi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,E=d.id,b=d.onPostCommit;typeof b=="function"&&b(E,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Oe(n,n.return,I)}}else vi(e,n,a,o);break;case 13:vi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?vi(e,n,a,o):mo(e,n):d._visibility&2?vi(e,n,a,o):(d._visibility|=2,jr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&xf(E,n);break;case 24:vi(e,n,a,o),c&2048&&yf(n.alternate,n);break;default:vi(e,n,a,o)}}function jr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,E=n,b=a,I=o,$=E.flags;switch(E.tag){case 0:case 11:case 15:jr(d,E,b,I,c),ho(8,E);break;case 23:break;case 22:var ct=E.stateNode;E.memoizedState!==null?ct._visibility&2?jr(d,E,b,I,c):mo(d,E):(ct._visibility|=2,jr(d,E,b,I,c)),c&&$&2048&&xf(E.alternate,E);break;case 24:jr(d,E,b,I,c),c&&$&2048&&yf(E.alternate,E);break;default:jr(d,E,b,I,c)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:mo(a,o),c&2048&&xf(o.alternate,o);break;case 24:mo(a,o),c&2048&&yf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function Zr(e){if(e.subtreeFlags&go)for(e=e.child;e!==null;)mg(e),e=e.sibling}function mg(e){switch(e.tag){case 26:Zr(e),e.flags&go&&e.memoizedState!==null&&Ox(li,e.memoizedState,e.memoizedProps);break;case 5:Zr(e);break;case 3:case 4:var n=li;li=Ql(e.stateNode.containerInfo),Zr(e),li=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,Zr(e),go=n):Zr(e));break;default:Zr(e)}}function gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,vg(o,e)}gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&ga(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fl(e)):_o(e);break;default:_o(e)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,vg(o,e)}gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ga(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}e=e.sibling}}function vg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var c=o.sibling,d=o.return;if(ug(o),o===a){gn=null;break t}if(c!==null){c.return=d,gn=c;break t}gn=d}}}var KS={getCacheForType:function(e){var n=Mn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},QS=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ie=null,ce=null,_e=0,Ce=0,kn=null,Sa=!1,Kr=!1,Mf=!1,Vi=0,Qe=0,xa=0,sr=0,Ef=0,ni=0,Qr=0,vo=null,Ln=null,Tf=!1,bf=0,Hl=1/0,Gl=null,ya=null,xn=0,Ma=null,Jr=null,$r=0,Af=0,Rf=null,Sg=null,So=0,Cf=null;function Xn(){if((Re&2)!==0&&_e!==0)return _e&-_e;if(O.T!==null){var e=Hr;return e!==0?e:Pf()}return Zn()}function xg(){ni===0&&(ni=(_e&536870912)===0||Ee?bt():536870912);var e=ei.current;return e!==null&&(e.flags|=32),ni}function Wn(e,n,a){(e===Ie&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(ts(e,0),Ea(e,_e,ni,!1)),Ct(e,a),((Re&2)===0||e!==Ie)&&(e===Ie&&((Re&2)===0&&(sr|=a),Qe===4&&Ea(e,_e,ni,!1)),Si(e))}function yg(e,n,a){if((Re&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ae(e,n),c=o?tx(e,n):Uf(e,n,!0),d=o;do{if(c===0){Kr&&!o&&Ea(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!JS(a)){c=Uf(e,n,!1),d=!1;continue}if(c===2){if(d=n,e.errorRecoveryDisabledLanes&d)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;t:{var b=e;c=vo;var I=b.current.memoizedState.isDehydrated;if(I&&(ts(b,E).flags|=256),E=Uf(b,E,!1),E!==2){if(Mf&&!I){b.errorRecoveryDisabledLanes|=d,sr|=d,c=4;break t}d=Ln,Ln=c,d!==null&&(Ln===null?Ln=d:Ln.push.apply(Ln,d))}c=E}if(d=!1,c!==2)continue}}if(c===1){ts(e,0),Ea(e,n,0,!0);break}t:{switch(o=e,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ea(o,n,ni,!Sa);break t;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=bf+300-Me(),10<c)){if(Ea(o,n,ni,!Sa),ne(o,0,!0)!==0)break t;o.timeoutHandle=Kg(Mg.bind(null,o,a,Ln,Gl,Tf,n,ni,sr,Qr,Sa,d,2,-0,0),c);break t}Mg(o,a,Ln,Gl,Tf,n,ni,sr,Qr,Sa,d,0,-0,0)}}break}while(!0);Si(e)}function Mg(e,n,a,o,c,d,E,b,I,$,ct,mt,et,at){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:Nx},mg(n),mt=Px(),mt!==null)){e.cancelPendingCommit=mt(wg.bind(null,e,n,d,a,o,c,E,b,I,ct,1,et,at)),Ea(e,d,E,!$);return}wg(e,n,d,a,o,c,E,b,I)}function JS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!Fn(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(e,n,a,o){n&=~Ef,n&=~sr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var d=31-Xt(c),E=1<<d;o[d]=-1,c&=~E}a!==0&&pe(e,a,n)}function Vl(){return(Re&6)===0?(xo(0),!1):!0}function wf(){if(ce!==null){if(Ce===0)var e=ce.return;else e=ce,Oi=tr=null,Wc(e),qr=null,uo=0,e=ce;for(;e!==null;)eg(e.alternate,e),e=e.return;ce=null}}function ts(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wf(),Ie=e,ce=a=Ui(e.current,null),_e=n,Ce=0,kn=null,Sa=!1,Kr=Ae(e,n),Mf=!1,Qr=ni=Ef=sr=xa=Qe=0,Ln=vo=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Xt(o),d=1<<c;n|=e[c],o&=~d}return Vi=n,cl(),a}function Eg(e,n){le=null,O.H=wl,n===to||n===Sl?(n=Hp(),Ce=3):n===zp?(n=Hp(),Ce=4):Ce=n===Gm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,ce===null&&(Qe=1,Ol(e,Qn(n,e.current)))}function Tg(){var e=O.H;return O.H=wl,e===null?wl:e}function bg(){var e=O.A;return O.A=KS,e}function Df(){Qe=4,Sa||(_e&4194048)!==_e&&ei.current!==null||(Kr=!0),(xa&134217727)===0&&(sr&134217727)===0||Ie===null||Ea(Ie,_e,ni,!1)}function Uf(e,n,a){var o=Re;Re|=2;var c=Tg(),d=bg();(Ie!==e||_e!==n)&&(Gl=null,ts(e,n)),n=!1;var E=Qe;t:do try{if(Ce!==0&&ce!==null){var b=ce,I=kn;switch(Ce){case 8:wf(),E=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var $=Ce;if(Ce=0,kn=null,es(e,b,I,$),a&&Kr){E=0;break t}break;default:$=Ce,Ce=0,kn=null,es(e,b,I,$)}}$S(),E=Qe;break}catch(ct){Eg(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Oi=tr=null,Re=o,O.H=c,O.A=d,ce===null&&(Ie=null,_e=0,cl()),E}function $S(){for(;ce!==null;)Ag(ce)}function tx(e,n){var a=Re;Re|=2;var o=Tg(),c=bg();Ie!==e||_e!==n?(Gl=null,Hl=Me()+500,ts(e,n)):Kr=Ae(e,n);t:do try{if(Ce!==0&&ce!==null){n=ce;var d=kn;e:switch(Ce){case 1:Ce=0,kn=null,es(e,n,d,1);break;case 2:case 9:if(Bp(d)){Ce=0,kn=null,Rg(n);break}n=function(){Ce!==2&&Ce!==9||Ie!==e||(Ce=7),Si(e)},d.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:Bp(d)?(Ce=0,kn=null,Rg(n)):(Ce=0,kn=null,es(e,n,d,7));break;case 5:var E=null;switch(ce.tag){case 26:E=ce.memoizedState;case 5:case 27:var b=ce;if(!E||l_(E)){Ce=0,kn=null;var I=b.sibling;if(I!==null)ce=I;else{var $=b.return;$!==null?(ce=$,kl($)):ce=null}break e}}Ce=0,kn=null,es(e,n,d,5);break;case 6:Ce=0,kn=null,es(e,n,d,6);break;case 8:wf(),Qe=6;break t;default:throw Error(r(462))}}ex();break}catch(ct){Eg(e,ct)}while(!0);return Oi=tr=null,O.H=o,O.A=c,Re=a,ce!==null?0:(Ie=null,_e=0,cl(),Qe)}function ex(){for(;ce!==null&&!Te();)Ag(ce)}function Ag(e){var n=$m(e.alternate,e,Vi);e.memoizedProps=e.pendingProps,n===null?kl(e):ce=n}function Rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Wc(n);default:eg(a,n),n=ce=Cp(n,Vi),n=$m(a,n,Vi)}e.memoizedProps=e.pendingProps,n===null?kl(e):ce=n}function es(e,n,a,o){Oi=tr=null,Wc(n),qr=null,uo=0;var c=n.return;try{if(XS(e,c,n,a,_e)){Qe=1,Ol(e,Qn(a,e.current)),ce=null;return}}catch(d){if(c!==null)throw ce=c,d;Qe=1,Ol(e,Qn(a,e.current)),ce=null;return}n.flags&32768?(Ee||o===1?e=!0:Kr||(_e&536870912)!==0?e=!1:(Sa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Cg(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){Cg(n,Sa);return}e=n.return;var a=qS(n.alternate,n,Vi);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=e}while(n!==null);Qe===0&&(Qe=5)}function Cg(e,n){do{var a=YS(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);Qe=6,ce=null}function wg(e,n,a,o,c,d,E,b,I){e.cancelPendingCommit=null;do Xl();while(xn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=xc,Qt(e,a,d,E,b,I),e===Ie&&(ce=Ie=null,_e=0),Jr=n,Ma=e,$r=a,Af=d,Rf=c,Sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rx(A,function(){return Og(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=q.p,q.p=2,E=Re,Re|=4;try{jS(e,n,a)}finally{Re=E,q.p=c,O.T=o}}xn=1,Dg(),Ug(),Lg()}}function Dg(){if(xn===1){xn=0;var e=Ma,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=q.p;q.p=2;var c=Re;Re|=4;try{hg(n,e);var d=kf,E=vp(e.containerInfo),b=d.focusedElem,I=d.selectionRange;if(E!==b&&b&&b.ownerDocument&&_p(b.ownerDocument.documentElement,b)){if(I!==null&&mc(b)){var $=I.start,ct=I.end;if(ct===void 0&&(ct=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ct,b.value.length);else{var mt=b.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var at=et.getSelection(),$t=b.textContent.length,jt=Math.min(I.start,$t),Le=I.end===void 0?jt:Math.min(I.end,$t);!at.extend&&jt>Le&&(E=Le,Le=jt,jt=E);var Y=gp(b,jt),V=gp(b,Le);if(Y&&V&&(at.rangeCount!==1||at.anchorNode!==Y.node||at.anchorOffset!==Y.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(Y.node,Y.offset),at.removeAllRanges(),jt>Le?(at.addRange(Q),at.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),at.addRange(Q))}}}}for(mt=[],at=b;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var dt=mt[b];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}nu=!!Vf,kf=Vf=null}finally{Re=c,q.p=o,O.T=a}}e.current=n,xn=2}}function Ug(){if(xn===2){xn=0;var e=Ma,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=q.p;q.p=2;var c=Re;Re|=4;try{lg(e,n.alternate,n)}finally{Re=c,q.p=o,O.T=a}}xn=3}}function Lg(){if(xn===4||xn===3){xn=0,kt();var e=Ma,n=Jr,a=$r,o=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Jr=Ma=null,Ng(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ya=null),me(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Vt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=q.p,q.p=2,O.T=null;try{for(var d=e.onRecoverableError,E=0;E<o.length;E++){var b=o[E];d(b.value,{componentStack:b.stack})}}finally{O.T=n,q.p=c}}($r&3)!==0&&Xl(),Si(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Cf?So++:(So=0,Cf=e):So=0,xo(0)}}function Ng(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Xl(e){return Dg(),Ug(),Lg(),Og()}function Og(){if(xn!==5)return!1;var e=Ma,n=Af;Af=0;var a=me($r),o=O.T,c=q.p;try{q.p=32>a?32:a,O.T=null,a=Rf,Rf=null;var d=Ma,E=$r;if(xn=0,Jr=Ma=null,$r=0,(Re&6)!==0)throw Error(r(331));var b=Re;if(Re|=4,_g(d.current),pg(d,d.current,E,a),Re=b,xo(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Vt,d)}catch{}return!0}finally{q.p=c,O.T=o,Ng(e,n)}}function Pg(e,n,a){n=Qn(a,n),n=sf(e.stateNode,n,2),e=ha(e,n,2),e!==null&&(Ct(e,2),Si(e))}function Oe(e,n,a){if(e.tag===3)Pg(e,e,a);else for(;n!==null;){if(n.tag===3){Pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ya===null||!ya.has(o))){e=Qn(a,e),a=Fm(2),o=ha(n,a,2),o!==null&&(Hm(a,o,n,e),Ct(o,2),Si(o));break}}n=n.return}}function Lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new QS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Mf=!0,c.add(a),e=nx.bind(null,e,n,a),n.then(e,e))}function nx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(_e&a)===a&&(Qe===4||Qe===3&&(_e&62914560)===_e&&300>Me()-bf?(Re&2)===0&&ts(e,0):Ef|=a,Qr===_e&&(Qr=0)),Si(e)}function Ig(e,n){n===0&&(n=pt()),e=Ir(e,n),e!==null&&(Ct(e,n),Si(e))}function ix(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ig(e,a)}function ax(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ig(e,a)}function rx(e,n){return Ge(e,n)}var Wl=null,ns=null,Nf=!1,ql=!1,Of=!1,or=0;function Si(e){e!==ns&&e.next===null&&(ns===null?Wl=ns=e:ns=ns.next=e),ql=!0,Nf||(Nf=!0,ox())}function xo(e,n){if(!Of&&ql){Of=!0;do for(var a=!1,o=Wl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var E=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-Xt(42|e)+1)-1,d&=c&~(E&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Hg(o,d))}else d=_e,d=ne(o,o===Ie?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ae(o,d)||(a=!0,Hg(o,d));o=o.next}while(a);Of=!1}}function sx(){zg()}function zg(){ql=Nf=!1;var e=0;or!==0&&(mx()&&(e=or),or=0);for(var n=Me(),a=null,o=Wl;o!==null;){var c=o.next,d=Bg(o,n);d===0?(o.next=null,a===null?Wl=c:a.next=c,c===null&&(ns=a)):(a=o,(e!==0||(d&3)!==0)&&(ql=!0)),o=c}xo(e)}function Bg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var E=31-Xt(d),b=1<<E,I=c[E];I===-1?((b&a)===0||(b&o)!==0)&&(c[E]=X(b,n)):I<=n&&(e.expiredLanes|=b),d&=~b}if(n=Ie,a=_e,a=ne(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Se(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ae(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Se(o),me(a)){case 2:case 8:a=P;break;case 32:a=A;break;case 268435456:a=_t;break;default:a=A}return o=Fg.bind(null,e),a=Ge(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Se(o),e.callbackPriority=2,e.callbackNode=null,2}function Fg(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var o=_e;return o=ne(e,e===Ie?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(yg(e,o,n),Bg(e,Me()),e.callbackNode!=null&&e.callbackNode===a?Fg.bind(null,e):null)}function Hg(e,n){if(Xl())return null;yg(e,n,!0)}function ox(){_x(function(){(Re&6)!==0?Ge(ee,sx):zg()})}function Pf(){return or===0&&(or=bt()),or}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function Vg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function lx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=Gg((c[pn]||null).action),E=o.submitter;E&&(n=(n=E[pn]||null)?Gg(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var b=new ol("action","action",null,o,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var I=E?Vg(c,E):new FormData(c);tf(a,{pending:!0,data:I,method:c.method,action:d},null,I)}}else typeof d=="function"&&(b.preventDefault(),I=E?Vg(c,E):new FormData(c),tf(a,{pending:!0,data:I,method:c.method,action:d},d,I))},currentTarget:c}]})}}for(var If=0;If<Sc.length;If++){var zf=Sc[If],ux=zf.toLowerCase(),cx=zf[0].toUpperCase()+zf.slice(1);oi(ux,"on"+cx)}oi(yp,"onAnimationEnd"),oi(Mp,"onAnimationIteration"),oi(Ep,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(RS,"onTransitionRun"),oi(CS,"onTransitionStart"),oi(wS,"onTransitionCancel"),oi(Tp,"onTransitionEnd"),Tt("onMouseEnter",["mouseout","mouseover"]),Tt("onMouseLeave",["mouseout","mouseover"]),Tt("onPointerEnter",["pointerout","pointerover"]),Tt("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var b=o[E],I=b.instance,$=b.currentTarget;if(b=b.listener,I!==d&&c.isPropagationStopped())break t;d=b,c.currentTarget=$;try{d(c)}catch(ct){Nl(ct)}c.currentTarget=null,d=I}else for(E=0;E<o.length;E++){if(b=o[E],I=b.instance,$=b.currentTarget,b=b.listener,I!==d&&c.isPropagationStopped())break t;d=b,c.currentTarget=$;try{d(c)}catch(ct){Nl(ct)}c.currentTarget=null,d=I}}}}function fe(e,n){var a=n[Tr];a===void 0&&(a=n[Tr]=new Set);var o=e+"__bubble";a.has(o)||(Xg(n,e,2,!1),a.add(o))}function Bf(e,n,a){var o=0;n&&(o|=4),Xg(a,e,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Ff(e){if(!e[Yl]){e[Yl]=!0,it.forEach(function(a){a!=="selectionchange"&&(fx.has(a)||Bf(a,!1,e),Bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Bf("selectionchange",!1,n))}}function Xg(e,n,a,o){switch(p_(n)){case 2:var c=Bx;break;case 8:c=Fx;break;default:c=$f}a=c.bind(null,n,a,e),c=void 0,!sc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var b=o.stateNode.containerInfo;if(b===c)break;if(E===4)for(E=o.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===c)return;E=E.return}for(;b!==null;){if(E=ra(b),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){o=d=E;continue t}b=b.parentNode}}o=o.return}Qd(function(){var $=d,ct=ac(a),mt=[];t:{var et=bp.get(e);if(et!==void 0){var at=ol,$t=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":at=rS;break;case"focusin":$t="focus",at=cc;break;case"focusout":$t="blur",at=cc;break;case"beforeblur":case"afterblur":at=cc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=lS;break;case yp:case Mp:case Ep:at=Kv;break;case Tp:at=cS;break;case"scroll":case"scrollend":at=Wv;break;case"wheel":at=hS;break;case"copy":case"cut":case"paste":at=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=np;break;case"toggle":case"beforetoggle":at=pS}var jt=(n&4)!==0,Le=!jt&&(e==="scroll"||e==="scrollend"),Y=jt?et!==null?et+"Capture":null:et;jt=[];for(var V=$,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||Y===null||(dt=Fs(V,Y),dt!=null&&jt.push(Mo(V,dt,Q))),Le)break;V=V.return}0<jt.length&&(et=new at(et,$t,null,a,ct),mt.push({event:et,listeners:jt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",et&&a!==ic&&($t=a.relatedTarget||a.fromElement)&&(ra($t)||$t[Ci]))break t;if((at||et)&&(et=ct.window===ct?ct:(et=ct.ownerDocument)?et.defaultView||et.parentWindow:window,at?($t=a.relatedTarget||a.toElement,at=$,$t=$t?ra($t):null,$t!==null&&(Le=u($t),jt=$t.tag,$t!==Le||jt!==5&&jt!==27&&jt!==6)&&($t=null)):(at=null,$t=$),at!==$t)){if(jt=tp,dt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(jt=np,dt="onPointerLeave",Y="onPointerEnter",V="pointer"),Le=at==null?et:Xa(at),Q=$t==null?et:Xa($t),et=new jt(dt,V+"leave",at,a,ct),et.target=Le,et.relatedTarget=Q,dt=null,ra(ct)===$&&(jt=new jt(Y,V+"enter",$t,a,ct),jt.target=Q,jt.relatedTarget=Le,dt=jt),Le=dt,at&&$t)e:{for(jt=at,Y=$t,V=0,Q=jt;Q;Q=is(Q))V++;for(Q=0,dt=Y;dt;dt=is(dt))Q++;for(;0<V-Q;)jt=is(jt),V--;for(;0<Q-V;)Y=is(Y),Q--;for(;V--;){if(jt===Y||Y!==null&&jt===Y.alternate)break e;jt=is(jt),Y=is(Y)}jt=null}else jt=null;at!==null&&Wg(mt,et,at,jt,!1),$t!==null&&Le!==null&&Wg(mt,Le,$t,jt,!0)}}t:{if(et=$?Xa($):window,at=et.nodeName&&et.nodeName.toLowerCase(),at==="select"||at==="input"&&et.type==="file")var Bt=cp;else if(lp(et))if(fp)Bt=TS;else{Bt=MS;var ue=yS}else at=et.nodeName,!at||at.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&nc($.elementType)&&(Bt=cp):Bt=ES;if(Bt&&(Bt=Bt(e,$))){up(mt,Bt,a,ct);break t}ue&&ue(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&Rr(et,"number",et.value)}switch(ue=$?Xa($):window,e){case"focusin":(lp(ue)||ue.contentEditable==="true")&&(Nr=ue,gc=$,Ys=null);break;case"focusout":Ys=gc=Nr=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,Sp(mt,a,ct);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Sp(mt,a,ct)}var Gt;if(hc)t:{switch(e){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else Lr?sp(e,a)&&(Kt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(ip&&a.locale!=="ko"&&(Lr||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&Lr&&(Gt=Jd()):(la=ct,oc="value"in la?la.value:la.textContent,Lr=!0)),ue=jl($,Kt),0<ue.length&&(Kt=new ep(Kt,e,null,a,ct),mt.push({event:Kt,listeners:ue}),Gt?Kt.data=Gt:(Gt=op(a),Gt!==null&&(Kt.data=Gt)))),(Gt=gS?_S(e,a):vS(e,a))&&(Kt=jl($,"onBeforeInput"),0<Kt.length&&(ue=new ep("onBeforeInput","beforeinput",null,a,ct),mt.push({event:ue,listeners:Kt}),ue.data=Gt)),lx(mt,e,$,a,ct)}kg(mt,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Fs(e,a),c!=null&&o.unshift(Mo(e,c,d)),c=Fs(e,n),c!=null&&o.push(Mo(e,c,d))),e.tag===3)return o;e=e.return}return[]}function is(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,n,a,o,c){for(var d=n._reactName,E=[];a!==null&&a!==o;){var b=a,I=b.alternate,$=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||$===null||(I=$,c?($=Fs(a,d),$!=null&&E.unshift(Mo(a,$,I))):c||($=Fs(a,d),$!=null&&E.push(Mo(a,$,I)))),a=a.return}E.length!==0&&e.push({event:n,listeners:E})}var hx=/\r\n?/g,dx=/\u0000|\uFFFD/g;function qg(e){return(typeof e=="string"?e:""+e).replace(hx,`
`).replace(dx,"")}function Yg(e,n){return n=qg(n),qg(e)===n}function Zl(){}function Ue(e,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wr(e,""+o);break;case"className":Ft(e,"class",o);break;case"tabIndex":Ft(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,a,o);break;case"style":Zd(e,o,d);break;case"data":if(n!=="object"){Ft(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=il(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ue(e,n,"name",c.name,c,null),Ue(e,n,"formEncType",c.formEncType,c,null),Ue(e,n,"formMethod",c.formMethod,c,null),Ue(e,n,"formTarget",c.formTarget,c,null)):(Ue(e,n,"encType",c.encType,c,null),Ue(e,n,"method",c.method,c,null),Ue(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=il(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"onScroll":o!=null&&fe("scroll",e);break;case"onScrollEnd":o!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=il(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Yt(e,"popover",o);break;case"xlinkActuate":re(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":re(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":re(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":re(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":re(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":re(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":re(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Yt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kv.get(a)||a,Yt(e,a,o))}}function Gf(e,n,a,o,c,d){switch(a){case"style":Zd(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wr(e,o):(typeof o=="number"||typeof o=="bigint")&&wr(e,""+o);break;case"onScroll":o!=null&&fe("scroll",e);break;case"onScrollEnd":o!=null&&fe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=e[pn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Yt(e,a,o)}}}function yn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(e,n,d,E,a,null)}}c&&Ue(e,n,"srcSet",a.srcSet,a,null),o&&Ue(e,n,"src",a.src,a,null);return;case"input":fe("invalid",e);var b=d=E=c=null,I=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":E=ct;break;case"checked":I=ct;break;case"defaultChecked":$=ct;break;case"value":d=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ue(e,n,o,ct,a,null)}}nl(e,d,b,I,$,E,c,!1),oa(e);return;case"select":fe("invalid",e),o=E=d=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":d=b;break;case"defaultValue":E=b;break;case"multiple":o=b;default:Ue(e,n,c,b,a,null)}n=d,a=E,e.multiple=!!o,n!=null?Cr(e,!!o,n,!1):a!=null&&Cr(e,!!o,a,!0);return;case"textarea":fe("invalid",e),d=c=o=null;for(E in a)if(a.hasOwnProperty(E)&&(b=a[E],b!=null))switch(E){case"value":o=b;break;case"defaultValue":c=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ue(e,n,E,b,a,null)}Yd(e,o,c,d),oa(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ue(e,n,I,o,a,null)}return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)fe(yo[o],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(e,n,$,o,a,null)}return;default:if(nc(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&Gf(e,n,ct,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ue(e,n,b,o,a,null))}function px(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,E=null,b=null,I=null,$=null,ct=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":I=mt;default:o.hasOwnProperty(at)||Ue(e,n,at,null,o,mt)}}for(var et in o){var at=o[et];if(mt=a[et],o.hasOwnProperty(et)&&(at!=null||mt!=null))switch(et){case"type":d=at;break;case"name":c=at;break;case"checked":$=at;break;case"defaultChecked":ct=at;break;case"value":E=at;break;case"defaultValue":b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==mt&&Ue(e,n,et,at,o,mt)}}Wa(e,E,b,I,$,ct,d,c);return;case"select":at=E=b=et=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":at=I;default:o.hasOwnProperty(d)||Ue(e,n,d,null,o,I)}for(c in o)if(d=o[c],I=a[c],o.hasOwnProperty(c)&&(d!=null||I!=null))switch(c){case"value":et=d;break;case"defaultValue":b=d;break;case"multiple":E=d;default:d!==I&&Ue(e,n,c,d,o,I)}n=b,a=E,o=at,et!=null?Cr(e,!!a,et,!1):!!o!=!!a&&(n!=null?Cr(e,!!a,n,!0):Cr(e,!!a,a?[]:"",!1));return;case"textarea":at=et=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ue(e,n,b,null,o,c)}for(E in o)if(c=o[E],d=a[E],o.hasOwnProperty(E)&&(c!=null||d!=null))switch(E){case"value":et=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Ue(e,n,E,c,o,d)}qd(e,et,at);return;case"option":for(var $t in a)if(et=a[$t],a.hasOwnProperty($t)&&et!=null&&!o.hasOwnProperty($t))switch($t){case"selected":e.selected=!1;break;default:Ue(e,n,$t,null,o,et)}for(I in o)if(et=o[I],at=a[I],o.hasOwnProperty(I)&&et!==at&&(et!=null||at!=null))switch(I){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ue(e,n,I,et,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)et=a[jt],a.hasOwnProperty(jt)&&et!=null&&!o.hasOwnProperty(jt)&&Ue(e,n,jt,null,o,et);for($ in o)if(et=o[$],at=a[$],o.hasOwnProperty($)&&et!==at&&(et!=null||at!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ue(e,n,$,et,o,at)}return;default:if(nc(n)){for(var Le in a)et=a[Le],a.hasOwnProperty(Le)&&et!==void 0&&!o.hasOwnProperty(Le)&&Gf(e,n,Le,void 0,o,et);for(ct in o)et=o[ct],at=a[ct],!o.hasOwnProperty(ct)||et===at||et===void 0&&at===void 0||Gf(e,n,ct,et,o,at);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!o.hasOwnProperty(Y)&&Ue(e,n,Y,null,o,et);for(mt in o)et=o[mt],at=a[mt],!o.hasOwnProperty(mt)||et===at||et==null&&at==null||Ue(e,n,mt,et,o,at)}var Vf=null,kf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function mx(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,gx=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(e){return Qg.resolve(null).then(e).catch(vx)}:Kg;function vx(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Jg(e,n){var a=n,o=0,c=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var E=e.ownerDocument;if(a&1&&Eo(E.documentElement),a&2&&Eo(E.body),a&4)for(a=E.head,Eo(a),E=a.firstChild;E;){var b=E.nextSibling,I=E.nodeName;E[aa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=b}}if(c===0){e.removeChild(d),Uo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Uo(n)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),Ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function xx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var jf=null;function $g(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function t_(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ar(e)}var ii=new Map,e_=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ki=q.d;q.d={f:Mx,r:Ex,D:Tx,C:bx,L:Ax,m:Rx,X:wx,S:Cx,M:Dx};function Mx(){var e=ki.f(),n=Vl();return e||n}function Ex(e){var n=sa(e);n!==null&&n.tag===5&&n.type==="form"?ym(n):ki.r(e)}var as=typeof document>"u"?null:document;function n_(e,n,a){var o=as;if(o&&typeof n=="string"&&n){var c=Be(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),e_.has(c)||(e_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),yn(n,"link",e),k(n),o.head.appendChild(n)))}}function Tx(e){ki.D(e),n_("dns-prefetch",e,null)}function bx(e,n){ki.C(e,n),n_("preconnect",e,n)}function Ax(e,n,a){ki.L(e,n,a);var o=as;if(o&&e&&n){var c='link[rel="preload"][as="'+Be(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Be(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Be(a.imageSizes)+'"]')):c+='[href="'+Be(e)+'"]';var d=c;switch(n){case"style":d=rs(e);break;case"script":d=ss(e)}ii.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ii.set(d,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(To(d))||n==="script"&&o.querySelector(bo(d))||(n=o.createElement("link"),yn(n,"link",e),k(n),o.head.appendChild(n)))}}function Rx(e,n){ki.m(e,n);var a=as;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Be(o)+'"][href="'+Be(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ss(e)}if(!ii.has(d)&&(e=g({rel:"modulepreload",href:e},n),ii.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(d)))return}o=a.createElement("link"),yn(o,"link",e),k(o),a.head.appendChild(o)}}}function Cx(e,n,a){ki.S(e,n,a);var o=as;if(o&&e){var c=w(o).hoistableStyles,d=rs(e);n=n||"default";var E=c.get(d);if(!E){var b={loading:0,preload:null};if(E=o.querySelector(To(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ii.get(d))&&Zf(e,a);var I=E=o.createElement("link");k(I),yn(I,"link",e),I._p=new Promise(function($,ct){I.onload=$,I.onerror=ct}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:b},c.set(d,E)}}}function wx(e,n){ki.X(e,n);var a=as;if(a&&e){var o=w(a).hoistableScripts,c=ss(e),d=o.get(c);d||(d=a.querySelector(bo(c)),d||(e=g({src:e,async:!0},n),(n=ii.get(c))&&Kf(e,n),d=a.createElement("script"),k(d),yn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Dx(e,n){ki.M(e,n);var a=as;if(a&&e){var o=w(a).hoistableScripts,c=ss(e),d=o.get(c);d||(d=a.querySelector(bo(c)),d||(e=g({src:e,async:!0,type:"module"},n),(n=ii.get(c))&&Kf(e,n),d=a.createElement("script"),k(d),yn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function i_(e,n,a,o){var c=(c=vt.current)?Ql(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=w(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rs(a.href);var d=w(c).hoistableStyles,E=d.get(e);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,E),(d=c.querySelector(To(e)))&&!d._p&&(E.instance=d,E.state.loading=5),ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(e,a),d||Ux(c,e,a,E.state))),n&&o===null)throw Error(r(528,""));return E}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=w(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function rs(e){return'href="'+Be(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function a_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ux(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),yn(n,"link",a),k(n),e.head.appendChild(n))}function ss(e){return'[src="'+Be(e)+'"]'}function bo(e){return"script[async]"+e}function r_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Be(a.href)+'"]');if(o)return n.instance=o,k(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),k(o),yn(o,"style",c),Jl(o,a.precedence,e),n.instance=o;case"stylesheet":c=rs(a.href);var d=e.querySelector(To(c));if(d)return n.state.loading|=4,n.instance=d,k(d),d;o=a_(a),(c=ii.get(c))&&Zf(o,c),d=(e.ownerDocument||e).createElement("link"),k(d);var E=d;return E._p=new Promise(function(b,I){E.onload=b,E.onerror=I}),yn(d,"link",o),n.state.loading|=4,Jl(d,a.precedence,e),n.instance=d;case"script":return d=ss(a.src),(c=e.querySelector(bo(d)))?(n.instance=c,k(c),c):(o=a,(c=ii.get(d))&&(o=g({},a),Kf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),k(c),yn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,e));return n.instance}function Jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,E=0;E<o.length;E++){var b=o[E];if(b.dataset.precedence===n)d=b;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function s_(e,n,a){if($l===null){var o=new Map,c=$l=new Map;c.set(a,o)}else c=$l,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[aa]||d[Ve]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=e+E;var b=o.get(E);b?b.push(d):o.set(E,[d])}}return o}function o_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Lx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function l_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ao=null;function Nx(){}function Ox(e,n,a){if(Ao===null)throw Error(r(475));var o=Ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=rs(a.href),d=e.querySelector(To(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=tu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,k(d);return}d=e.ownerDocument||e,a=a_(a),(c=ii.get(c))&&Zf(a,c),d=d.createElement("link"),k(d);var E=d;E._p=new Promise(function(b,I){E.onload=b,E.onerror=I}),yn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Px(){if(Ao===null)throw Error(r(475));var e=Ao;return e.stylesheets&&e.count===0&&Qf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Qf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var eu=null;function Qf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eu=new Map,n.forEach(Ix,e),eu=null,tu.call(e))}function Ix(e,n){if(!(n.state.loading&4)){var a=eu.get(e);if(a)var o=a.get(null);else{a=new Map,eu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var E=c[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}c=n.instance,E=c.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,c),a.set(E,c),this.count++,o=tu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:R,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function zx(e,n,a,o,c,d,E,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.hiddenUpdates=gt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function u_(e,n,a,o,c,d,E,b,I,$,ct,mt){return e=new zx(e,n,a,E,b,I,$,mt),n=1,d===!0&&(n|=24),d=Hn(3,null,null,n),e.current=d,d.stateNode=e,n=Uc(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Pc(d),e}function c_(e){return e?(e=zr,e):zr}function f_(e,n,a,o,c,d){c=c_(c),o.context===null?o.context=c:o.pendingContext=c,o=fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ha(e,o,n),a!==null&&(Wn(a,e,n),no(a,e,n))}function h_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jf(e,n){h_(e,n),(e=e.alternate)&&h_(e,n)}function d_(e){if(e.tag===13){var n=Ir(e,67108864);n!==null&&Wn(n,e,67108864),Jf(e,67108864)}}var nu=!0;function Bx(e,n,a,o){var c=O.T;O.T=null;var d=q.p;try{q.p=2,$f(e,n,a,o)}finally{q.p=d,O.T=c}}function Fx(e,n,a,o){var c=O.T;O.T=null;var d=q.p;try{q.p=8,$f(e,n,a,o)}finally{q.p=d,O.T=c}}function $f(e,n,a,o){if(nu){var c=th(o);if(c===null)Hf(e,n,o,iu,a),m_(e,o);else if(Gx(c,e,n,a,o))o.stopPropagation();else if(m_(e,o),n&4&&-1<Hx.indexOf(e)){for(;c!==null;){var d=sa(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=qt(d.pendingLanes);if(E!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var I=1<<31-Xt(E);b.entanglements[1]|=I,E&=~I}Si(d),(Re&6)===0&&(Hl=Me()+500,xo(0))}}break;case 13:b=Ir(d,2),b!==null&&Wn(b,d,2),Vl(),Jf(d,2)}if(d=th(o),d===null&&Hf(e,n,o,iu,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function th(e){return e=ac(e),eh(e)}var iu=null;function eh(e){if(iu=null,e=ra(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return iu=e,null}function p_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case ee:return 2;case P:return 8;case A:case ot:return 32;case _t:return 268435456;default:return 32}default:return 32}}var nh=!1,ba=null,Aa=null,Ra=null,Co=new Map,wo=new Map,Ca=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(e,n){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(e,n,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=sa(n),n!==null&&d_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Gx(e,n,a,o,c){switch(n){case"focusin":return ba=Do(ba,e,n,a,o,c),!0;case"dragenter":return Aa=Do(Aa,e,n,a,o,c),!0;case"mouseover":return Ra=Do(Ra,e,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Co.set(d,Do(Co.get(d)||null,e,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,wo.set(d,Do(wo.get(d)||null,e,n,a,o,c)),!0}return!1}function g_(e){var n=ra(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=p(a),n!==null){e.blockedOn=n,Kn(e.priority,function(){if(a.tag===13){var o=Xn();o=tn(o);var c=Ir(a,o);c!==null&&Wn(c,a,o),Jf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=th(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ic=o,a.target.dispatchEvent(o),ic=null}else return n=sa(a),n!==null&&d_(n),e.blockedOn=a,!1;n.shift()}return!0}function __(e,n,a){au(e)&&a.delete(n)}function Vx(){nh=!1,ba!==null&&au(ba)&&(ba=null),Aa!==null&&au(Aa)&&(Aa=null),Ra!==null&&au(Ra)&&(Ra=null),Co.forEach(__),wo.forEach(__)}function ru(e,n){e.blockedOn===n&&(e.blockedOn=null,nh||(nh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Vx)))}var su=null;function v_(e){su!==e&&(su=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){su===e&&(su=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(eh(o||a)===null)continue;break}var d=sa(a);d!==null&&(e.splice(n,3),n-=3,tf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Uo(e){function n(I){return ru(I,e)}ba!==null&&ru(ba,e),Aa!==null&&ru(Aa,e),Ra!==null&&ru(Ra,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<Ca.length;a++){var o=Ca[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)g_(a),a.blockedOn===null&&Ca.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],E=c[pn]||null;if(typeof d=="function")E||v_(a);else if(E){var b=null;if(d&&d.hasAttribute("formAction")){if(c=d,E=d[pn]||null)b=E.formAction;else if(eh(c)!==null)continue}else b=E.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),v_(a)}}}function ih(e){this._internalRoot=e}ou.prototype.render=ih.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Xn();f_(a,o,e,n,null,null)},ou.prototype.unmount=ih.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;f_(e.current,2,null,e,null,null),Vl(),n[Ci]=null}};function ou(e){this._internalRoot=e}ou.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,e),a===0&&g_(e)}};var S_=t.version;if(S_!=="19.1.0")throw Error(r(527,S_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=f(n),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var kx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Vt=lu.inject(kx),At=lu}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Pm,d=Im,E=zm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=u_(e,1,!1,null,null,a,o,c,d,E,b,null),e[Ci]=n.current,Ff(e),new ih(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",d=Pm,E=Im,b=zm,I=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=u_(e,1,!0,n,a??null,o,c,d,E,b,I,$),n.context=c_(null),a=n.current,o=Xn(),o=tn(o),c=fa(o),c.callback=null,ha(a,c,o),a=o,n.current.lanes=a,Ct(n,a),Si(n),e[Ci]=n.current,Ff(e),new ou(n)},No.version="19.1.0",No}var w_;function $x(){if(w_)return sh.exports;w_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sh.exports=Jx(),sh.exports}var ty=$x();const ey=I0(ty);var Oo={},D_;function ny(){if(D_)return Oo;D_=1,Object.defineProperty(Oo,"__esModule",{value:!0}),Oo.parse=p,Oo.serialize=h;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function p(_,y){const M=new u,T=_.length;if(T<2)return M;const x=y?.decode||g;let S=0;do{const U=_.indexOf("=",S);if(U===-1)break;const R=_.indexOf(";",S),L=R===-1?T:R;if(U>L){S=_.lastIndexOf(";",U-1)+1;continue}const G=m(_,S,U),B=f(_,U,G),z=_.slice(G,B);if(M[z]===void 0){let W=m(_,U+1,L),D=f(_,L,W);const C=x(_.slice(W,D));M[z]=C}S=L+1}while(S<T);return M}function m(_,y,M){do{const T=_.charCodeAt(y);if(T!==32&&T!==9)return y}while(++y<M);return M}function f(_,y,M){for(;y>M;){const T=_.charCodeAt(--y);if(T!==32&&T!==9)return y+1}return M}function h(_,y,M){const T=M?.encode||encodeURIComponent;if(!s.test(_))throw new TypeError(`argument name is invalid: ${_}`);const x=T(y);if(!t.test(x))throw new TypeError(`argument val is invalid: ${y}`);let S=_+"="+x;if(!M)return S;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);S+="; Max-Age="+M.maxAge}if(M.domain){if(!i.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);S+="; Domain="+M.domain}if(M.path){if(!r.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);S+="; Path="+M.path}if(M.expires){if(!v(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);S+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(S+="; HttpOnly"),M.secure&&(S+="; Secure"),M.partitioned&&(S+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":S+="; Priority=Low";break;case"medium":S+="; Priority=Medium";break;case"high":S+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":S+="; SameSite=Strict";break;case"lax":S+="; SameSite=Lax";break;case"none":S+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return S}function g(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function v(_){return l.call(_)==="[object Date]"}return Oo}ny();var U_="popstate";function iy(s={}){function t(r,l){let{pathname:u,search:p,hash:m}=r.location;return Vh("",{pathname:u,search:p,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Wo(l)}return ry(t,i,null,s)}function Ze(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ai(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ay(){return Math.random().toString(36).substring(2,10)}function L_(s,t){return{usr:s.state,key:s.key,idx:t}}function Vh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Os(t):t,state:i,key:t&&t.key||r||ay()}}function Wo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Os(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function ry(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,p=l.history,m="POP",f=null,h=g();h==null&&(h=0,p.replaceState({...p.state,idx:h},""));function g(){return(p.state||{idx:null}).idx}function v(){m="POP";let x=g(),S=x==null?null:x-h;h=x,f&&f({action:m,location:T.location,delta:S})}function _(x,S){m="PUSH";let U=Vh(T.location,x,S);h=g()+1;let R=L_(U,h),L=T.createHref(U);try{p.pushState(R,"",L)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(L)}u&&f&&f({action:m,location:T.location,delta:1})}function y(x,S){m="REPLACE";let U=Vh(T.location,x,S);h=g();let R=L_(U,h),L=T.createHref(U);p.replaceState(R,"",L),u&&f&&f({action:m,location:T.location,delta:0})}function M(x){return sy(x)}let T={get action(){return m},get location(){return s(l,p)},listen(x){if(f)throw new Error("A history only accepts one active listener");return l.addEventListener(U_,v),f=x,()=>{l.removeEventListener(U_,v),f=null}},createHref(x){return t(l,x)},createURL:M,encodeLocation(x){let S=M(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:_,replace:y,go(x){return p.go(x)}};return T}function sy(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ze(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Wo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function z0(s,t,i="/"){return oy(s,t,i,!1)}function oy(s,t,i,r){let l=typeof t=="string"?Os(t):t,u=ta(l.pathname||"/",i);if(u==null)return null;let p=B0(s);ly(p);let m=null;for(let f=0;m==null&&f<p.length;++f){let h=Sy(u);m=_y(p[f],h,r)}return m}function B0(s,t=[],i=[],r=""){let l=(u,p,m)=>{let f={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:p,route:u};f.relativePath.startsWith("/")&&(Ze(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let h=$i([r,f.relativePath]),g=i.concat(f);u.children&&u.children.length>0&&(Ze(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),B0(u.children,t,g,h)),!(u.path==null&&!u.index)&&t.push({path:h,score:my(h,u.index),routesMeta:g})};return s.forEach((u,p)=>{if(u.path===""||!u.path?.includes("?"))l(u,p);else for(let m of F0(u.path))l(u,p,m)}),t}function F0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let p=F0(r.join("/")),m=[];return m.push(...p.map(f=>f===""?u:[u,f].join("/"))),l&&m.push(...p),m.map(f=>s.startsWith("/")&&f===""?"/":f)}function ly(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:gy(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var uy=/^:[\w-]+$/,cy=3,fy=2,hy=1,dy=10,py=-2,N_=s=>s==="*";function my(s,t){let i=s.split("/"),r=i.length;return i.some(N_)&&(r+=py),t&&(r+=fy),i.filter(l=>!N_(l)).reduce((l,u)=>l+(uy.test(u)?cy:u===""?hy:dy),r)}function gy(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function _y(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",p=[];for(let m=0;m<r.length;++m){let f=r[m],h=m===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=Gu({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},g),_=f.route;if(!v&&h&&i&&!r[r.length-1].route.index&&(v=Gu({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),p.push({params:l,pathname:$i([u,v.pathname]),pathnameBase:Ey($i([u,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(u=$i([u,v.pathnameBase]))}return p}function Gu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=vy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],p=u.replace(/(.)\/+$/,"$1"),m=l.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:v},_)=>{if(g==="*"){let M=m[_]||"";p=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const y=m[_];return v&&!y?h[g]=void 0:h[g]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:p,pattern:s}}function vy(s,t=!1,i=!0){Ai(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,m,f)=>(r.push({paramName:m,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Sy(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ai(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ta(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function xy(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Os(s):s;return{pathname:i?i.startsWith("/")?i:yy(i,t):t,search:Ty(r),hash:by(l)}}function yy(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ch(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function My(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function H0(s){let t=My(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function G0(s,t,i,r=!1){let l;typeof s=="string"?l=Os(s):(l={...s},Ze(!l.pathname||!l.pathname.includes("?"),ch("?","pathname","search",l)),Ze(!l.pathname||!l.pathname.includes("#"),ch("#","pathname","hash",l)),Ze(!l.search||!l.search.includes("#"),ch("#","search","hash",l)));let u=s===""||l.pathname==="",p=u?"/":l.pathname,m;if(p==null)m=i;else{let v=t.length-1;if(!r&&p.startsWith("..")){let _=p.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}m=v>=0?t[v]:"/"}let f=xy(l,m),h=p&&p!=="/"&&p.endsWith("/"),g=(u||p===".")&&i.endsWith("/");return!f.pathname.endsWith("/")&&(h||g)&&(f.pathname+="/"),f}var $i=s=>s.join("/").replace(/\/\/+/g,"/"),Ey=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,by=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ay(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var V0=["POST","PUT","PATCH","DELETE"];new Set(V0);var Ry=["GET",...V0];new Set(Ry);var Ps=ht.createContext(null);Ps.displayName="DataRouter";var Zu=ht.createContext(null);Zu.displayName="DataRouterState";var k0=ht.createContext({isTransitioning:!1});k0.displayName="ViewTransition";var Cy=ht.createContext(new Map);Cy.displayName="Fetchers";var wy=ht.createContext(null);wy.displayName="Await";var Ri=ht.createContext(null);Ri.displayName="Navigation";var Yo=ht.createContext(null);Yo.displayName="Location";var ia=ht.createContext({outlet:null,matches:[],isDataRoute:!1});ia.displayName="Route";var Cd=ht.createContext(null);Cd.displayName="RouteError";function Dy(s,{relative:t}={}){Ze(jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ht.useContext(Ri),{hash:l,pathname:u,search:p}=Zo(s,{relative:t}),m=u;return i!=="/"&&(m=u==="/"?i:$i([i,u])),r.createHref({pathname:m,search:p,hash:l})}function jo(){return ht.useContext(Yo)!=null}function Er(){return Ze(jo(),"useLocation() may be used only in the context of a <Router> component."),ht.useContext(Yo).location}var X0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function W0(s){ht.useContext(Ri).static||ht.useLayoutEffect(s)}function Uy(){let{isDataRoute:s}=ht.useContext(ia);return s?Xy():Ly()}function Ly(){Ze(jo(),"useNavigate() may be used only in the context of a <Router> component.");let s=ht.useContext(Ps),{basename:t,navigator:i}=ht.useContext(Ri),{matches:r}=ht.useContext(ia),{pathname:l}=Er(),u=JSON.stringify(H0(r)),p=ht.useRef(!1);return W0(()=>{p.current=!0}),ht.useCallback((f,h={})=>{if(Ai(p.current,X0),!p.current)return;if(typeof f=="number"){i.go(f);return}let g=G0(f,JSON.parse(u),l,h.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:$i([t,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[t,i,u,l,s])}ht.createContext(null);function Zo(s,{relative:t}={}){let{matches:i}=ht.useContext(ia),{pathname:r}=Er(),l=JSON.stringify(H0(i));return ht.useMemo(()=>G0(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function Ny(s,t){return q0(s,t)}function q0(s,t,i,r){Ze(jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=ht.useContext(Ri),{matches:u}=ht.useContext(ia),p=u[u.length-1],m=p?p.params:{},f=p?p.pathname:"/",h=p?p.pathnameBase:"/",g=p&&p.route;{let S=g&&g.path||"";Y0(f,!g||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let v=Er(),_;if(t){let S=typeof t=="string"?Os(t):t;Ze(h==="/"||S.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${S.pathname}" was given in the \`location\` prop.`),_=S}else _=v;let y=_.pathname||"/",M=y;if(h!=="/"){let S=h.replace(/^\//,"").split("/");M="/"+y.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=z0(s,{pathname:M});Ai(g||T!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Ai(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=By(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},m,S.params),pathname:$i([h,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:$i([h,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),u,i,r);return t&&x?ht.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},x):x}function Oy(){let s=ky(),t=Ay(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},p=null;return console.error("Error handled by React Router default ErrorBoundary:",s),p=ht.createElement(ht.Fragment,null,ht.createElement("p",null,"💿 Hey developer 👋"),ht.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ht.createElement("code",{style:u},"ErrorBoundary")," or"," ",ht.createElement("code",{style:u},"errorElement")," prop on your route.")),ht.createElement(ht.Fragment,null,ht.createElement("h2",null,"Unexpected Application Error!"),ht.createElement("h3",{style:{fontStyle:"italic"}},t),i?ht.createElement("pre",{style:l},i):null,p)}var Py=ht.createElement(Oy,null),Iy=class extends ht.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ht.createElement(ia.Provider,{value:this.props.routeContext},ht.createElement(Cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function zy({routeContext:s,match:t,children:i}){let r=ht.useContext(Ps);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ht.createElement(ia.Provider,{value:s},i)}function By(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i?.errors;if(u!=null){let f=l.findIndex(h=>h.route.id&&u?.[h.route.id]!==void 0);Ze(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,f+1))}let p=!1,m=-1;if(i)for(let f=0;f<l.length;f++){let h=l[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(m=f),h.route.id){let{loaderData:g,errors:v}=i,_=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!v||v[h.route.id]===void 0);if(h.route.lazy||_){p=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}return l.reduceRight((f,h,g)=>{let v,_=!1,y=null,M=null;i&&(v=u&&h.route.id?u[h.route.id]:void 0,y=h.route.errorElement||Py,p&&(m<0&&g===0?(Y0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,M=null):m===g&&(_=!0,M=h.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,g+1)),x=()=>{let S;return v?S=y:_?S=M:h.route.Component?S=ht.createElement(h.route.Component,null):h.route.element?S=h.route.element:S=f,ht.createElement(zy,{match:h,routeContext:{outlet:f,matches:T,isDataRoute:i!=null},children:S})};return i&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?ht.createElement(Iy,{location:i.location,revalidation:i.revalidation,component:y,error:v,children:x(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):x()},null)}function wd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fy(s){let t=ht.useContext(Ps);return Ze(t,wd(s)),t}function Hy(s){let t=ht.useContext(Zu);return Ze(t,wd(s)),t}function Gy(s){let t=ht.useContext(ia);return Ze(t,wd(s)),t}function Dd(s){let t=Gy(s),i=t.matches[t.matches.length-1];return Ze(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Vy(){return Dd("useRouteId")}function ky(){let s=ht.useContext(Cd),t=Hy("useRouteError"),i=Dd("useRouteError");return s!==void 0?s:t.errors?.[i]}function Xy(){let{router:s}=Fy("useNavigate"),t=Dd("useNavigate"),i=ht.useRef(!1);return W0(()=>{i.current=!0}),ht.useCallback(async(l,u={})=>{Ai(i.current,X0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var O_={};function Y0(s,t,i){!t&&!O_[s]&&(O_[s]=!0,Ai(!1,i))}ht.memo(Wy);function Wy({routes:s,future:t,state:i}){return q0(s,void 0,i,t)}function kh(s){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qy({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Ze(!jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=s.replace(/^\/*/,"/"),m=ht.useMemo(()=>({basename:p,navigator:l,static:u,future:{}}),[p,l,u]);typeof i=="string"&&(i=Os(i));let{pathname:f="/",search:h="",hash:g="",state:v=null,key:_="default"}=i,y=ht.useMemo(()=>{let M=ta(f,p);return M==null?null:{location:{pathname:M,search:h,hash:g,state:v,key:_},navigationType:r}},[p,f,h,g,v,_,r]);return Ai(y!=null,`<Router basename="${p}"> is not able to match the URL "${f}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ht.createElement(Ri.Provider,{value:m},ht.createElement(Yo.Provider,{children:t,value:y}))}function Yy({children:s,location:t}){return Ny(Xh(s),t)}function Xh(s,t=[]){let i=[];return ht.Children.forEach(s,(r,l)=>{if(!ht.isValidElement(r))return;let u=[...t,l];if(r.type===ht.Fragment){i.push.apply(i,Xh(r.props.children,u));return}Ze(r.type===kh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!r.props.index||!r.props.children,"An index route cannot have child routes.");let p={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(p.children=Xh(r.props.children,u)),i.push(p)}),i}var Nu="get",Ou="application/x-www-form-urlencoded";function Ku(s){return s!=null&&typeof s.tagName=="string"}function jy(s){return Ku(s)&&s.tagName.toLowerCase()==="button"}function Zy(s){return Ku(s)&&s.tagName.toLowerCase()==="form"}function Ky(s){return Ku(s)&&s.tagName.toLowerCase()==="input"}function Qy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Jy(s,t){return s.button===0&&(!t||t==="_self")&&!Qy(s)}var uu=null;function $y(){if(uu===null)try{new FormData(document.createElement("form"),0),uu=!1}catch{uu=!0}return uu}var tM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fh(s){return s!=null&&!tM.has(s)?(Ai(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ou}"`),null):s}function eM(s,t){let i,r,l,u,p;if(Zy(s)){let m=s.getAttribute("action");r=m?ta(m,t):null,i=s.getAttribute("method")||Nu,l=fh(s.getAttribute("enctype"))||Ou,u=new FormData(s)}else if(jy(s)||Ky(s)&&(s.type==="submit"||s.type==="image")){let m=s.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=s.getAttribute("formaction")||m.getAttribute("action");if(r=f?ta(f,t):null,i=s.getAttribute("formmethod")||m.getAttribute("method")||Nu,l=fh(s.getAttribute("formenctype"))||fh(m.getAttribute("enctype"))||Ou,u=new FormData(m,s),!$y()){let{name:h,type:g,value:v}=s;if(g==="image"){let _=h?`${h}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else h&&u.append(h,v)}}else{if(Ku(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nu,r=null,l=Ou,p=s}return u&&l==="text/plain"&&(p=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:p}}function Ud(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function nM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function aM(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let p=await nM(u,i);return p.links?p.links():[]}return[]}));return lM(r.flat(1).filter(iM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function P_(s,t,i,r,l,u){let p=(f,h)=>i[h]?f.route.id!==i[h].route.id:!0,m=(f,h)=>i[h].pathname!==f.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==f.params["*"];return u==="assets"?t.filter((f,h)=>p(f,h)||m(f,h)):u==="data"?t.filter((f,h)=>{let g=r.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(p(f,h)||m(f,h))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function rM(s,t,{includeHydrateFallback:i}={}){return sM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function sM(s){return[...new Set(s)]}function oM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function lM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(oM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var uM=new Set([100,101,204,205]);function cM(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&ta(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function j0(){let s=ht.useContext(Ps);return Ud(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function fM(){let s=ht.useContext(Zu);return Ud(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ld=ht.createContext(void 0);Ld.displayName="FrameworkContext";function Z0(){let s=ht.useContext(Ld);return Ud(s,"You must render this element inside a <HydratedRouter> element"),s}function hM(s,t){let i=ht.useContext(Ld),[r,l]=ht.useState(!1),[u,p]=ht.useState(!1),{onFocus:m,onBlur:f,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=t,_=ht.useRef(null);ht.useEffect(()=>{if(s==="render"&&p(!0),s==="viewport"){let T=S=>{S.forEach(U=>{p(U.isIntersecting)})},x=new IntersectionObserver(T,{threshold:.5});return _.current&&x.observe(_.current),()=>{x.disconnect()}}},[s]),ht.useEffect(()=>{if(r){let T=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(T)}}},[r]);let y=()=>{l(!0)},M=()=>{l(!1),p(!1)};return i?s!=="intent"?[u,_,{}]:[u,_,{onFocus:Po(m,y),onBlur:Po(f,M),onMouseEnter:Po(h,y),onMouseLeave:Po(g,M),onTouchStart:Po(v,y)}]:[!1,_,{}]}function Po(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function dM({page:s,...t}){let{router:i}=j0(),r=ht.useMemo(()=>z0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ht.createElement(mM,{page:s,matches:r,...t}):null}function pM(s){let{manifest:t,routeModules:i}=Z0(),[r,l]=ht.useState([]);return ht.useEffect(()=>{let u=!1;return aM(s,t,i).then(p=>{u||l(p)}),()=>{u=!0}},[s,t,i]),r}function mM({page:s,matches:t,...i}){let r=Er(),{manifest:l,routeModules:u}=Z0(),{basename:p}=j0(),{loaderData:m,matches:f}=fM(),h=ht.useMemo(()=>P_(s,t,f,l,r,"data"),[s,t,f,l,r]),g=ht.useMemo(()=>P_(s,t,f,l,r,"assets"),[s,t,f,l,r]),v=ht.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let M=new Set,T=!1;if(t.forEach(S=>{let U=l.routes[S.route.id];!U||!U.hasLoader||(!h.some(R=>R.route.id===S.route.id)&&S.route.id in m&&u[S.route.id]?.shouldRevalidate||U.hasClientLoader?T=!0:M.add(S.route.id))}),M.size===0)return[];let x=cM(s,p);return T&&M.size>0&&x.searchParams.set("_routes",t.filter(S=>M.has(S.route.id)).map(S=>S.route.id).join(",")),[x.pathname+x.search]},[p,m,r,l,h,t,s,u]),_=ht.useMemo(()=>rM(g,l),[g,l]),y=pM(g);return ht.createElement(ht.Fragment,null,v.map(M=>ht.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),_.map(M=>ht.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),y.map(({key:M,link:T})=>ht.createElement("link",{key:M,...T})))}function gM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var K0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{K0&&(window.__reactRouterVersion="7.6.3")}catch{}function _M({basename:s,children:t,window:i}){let r=ht.useRef();r.current==null&&(r.current=iy({window:i,v5Compat:!0}));let l=r.current,[u,p]=ht.useState({action:l.action,location:l.location}),m=ht.useCallback(f=>{ht.startTransition(()=>p(f))},[p]);return ht.useLayoutEffect(()=>l.listen(m),[l,m]),ht.createElement(qy,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J0=ht.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:p,state:m,target:f,to:h,preventScrollReset:g,viewTransition:v,..._},y){let{basename:M}=ht.useContext(Ri),T=typeof h=="string"&&Q0.test(h),x,S=!1;if(typeof h=="string"&&T&&(x=h,K0))try{let D=new URL(window.location.href),C=h.startsWith("//")?new URL(D.protocol+h):new URL(h),F=ta(C.pathname,M);C.origin===D.origin&&F!=null?h=F+C.search+C.hash:S=!0}catch{Ai(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=Dy(h,{relative:l}),[R,L,G]=hM(r,_),B=yM(h,{replace:p,state:m,target:f,preventScrollReset:g,relative:l,viewTransition:v});function z(D){t&&t(D),D.defaultPrevented||B(D)}let W=ht.createElement("a",{..._,...G,href:x||U,onClick:S||u?t:z,ref:gM(y,L),target:f,"data-discover":!T&&i==="render"?"true":void 0});return R&&!T?ht.createElement(ht.Fragment,null,W,ht.createElement(dM,{page:U})):W});J0.displayName="Link";var vM=ht.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:p,viewTransition:m,children:f,...h},g){let v=Zo(p,{relative:h.relative}),_=Er(),y=ht.useContext(Zu),{navigator:M,basename:T}=ht.useContext(Ri),x=y!=null&&AM(v)&&m===!0,S=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,U=_.pathname,R=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(U=U.toLowerCase(),R=R?R.toLowerCase():null,S=S.toLowerCase()),R&&T&&(R=ta(R,T)||R);const L=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let G=U===S||!l&&U.startsWith(S)&&U.charAt(L)==="/",B=R!=null&&(R===S||!l&&R.startsWith(S)&&R.charAt(S.length)==="/"),z={isActive:G,isPending:B,isTransitioning:x},W=G?t:void 0,D;typeof r=="function"?D=r(z):D=[r,G?"active":null,B?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(z):u;return ht.createElement(J0,{...h,"aria-current":W,className:D,ref:g,style:C,to:p,viewTransition:m},typeof f=="function"?f(z):f)});vM.displayName="NavLink";var SM=ht.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:p=Nu,action:m,onSubmit:f,relative:h,preventScrollReset:g,viewTransition:v,..._},y)=>{let M=TM(),T=bM(m,{relative:h}),x=p.toLowerCase()==="get"?"get":"post",S=typeof m=="string"&&Q0.test(m),U=R=>{if(f&&f(R),R.defaultPrevented)return;R.preventDefault();let L=R.nativeEvent.submitter,G=L?.getAttribute("formmethod")||p;M(L||R.currentTarget,{fetcherKey:t,method:G,navigate:i,replace:l,state:u,relative:h,preventScrollReset:g,viewTransition:v})};return ht.createElement("form",{ref:y,method:x,action:T,onSubmit:r?f:U,..._,"data-discover":!S&&s==="render"?"true":void 0})});SM.displayName="Form";function xM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $0(s){let t=ht.useContext(Ps);return Ze(t,xM(s)),t}function yM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:p}={}){let m=Uy(),f=Er(),h=Zo(s,{relative:u});return ht.useCallback(g=>{if(Jy(g,t)){g.preventDefault();let v=i!==void 0?i:Wo(f)===Wo(h);m(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:p})}},[f,m,h,i,r,t,s,l,u,p])}var MM=0,EM=()=>`__${String(++MM)}__`;function TM(){let{router:s}=$0("useSubmit"),{basename:t}=ht.useContext(Ri),i=Vy();return ht.useCallback(async(r,l={})=>{let{action:u,method:p,encType:m,formData:f,body:h}=eM(r,t);if(l.navigate===!1){let g=l.fetcherKey||EM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:f,body:h,formMethod:l.method||p,formEncType:l.encType||m,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:f,body:h,formMethod:l.method||p,formEncType:l.encType||m,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function bM(s,{relative:t}={}){let{basename:i}=ht.useContext(Ri),r=ht.useContext(ia);Ze(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Zo(s||".",{relative:t})},p=Er();if(s==null){u.search=p.search;let m=new URLSearchParams(u.search),f=m.getAll("index");if(f.some(g=>g==="")){m.delete("index"),f.filter(v=>v).forEach(v=>m.append("index",v));let g=m.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:$i([i,u.pathname])),Wo(u)}function AM(s,t={}){let i=ht.useContext(k0);Ze(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=$0("useViewTransitionState"),l=Zo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=ta(i.currentLocation.pathname,r)||i.currentLocation.pathname,p=ta(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Gu(l.pathname,p)!=null||Gu(l.pathname,u)!=null}[...uM];var RM=Object.defineProperty,Vu=Object.getOwnPropertySymbols,tv=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,I_=(s,t,i)=>t in s?RM(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,Wh=(s,t)=>{for(var i in t||(t={}))tv.call(t,i)&&I_(s,i,t[i]);if(Vu)for(var i of Vu(t))ev.call(t,i)&&I_(s,i,t[i]);return s},qh=(s,t)=>{var i={};for(var r in s)tv.call(s,r)&&t.indexOf(r)<0&&(i[r]=s[r]);if(s!=null&&Vu)for(var r of Vu(s))t.indexOf(r)<0&&ev.call(s,r)&&(i[r]=s[r]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var xr;(s=>{const t=class he{constructor(f,h,g,v){if(this.version=f,this.errorCorrectionLevel=h,this.modules=[],this.isFunction=[],f<he.MIN_VERSION||f>he.MAX_VERSION)throw new RangeError("Version value out of range");if(v<-1||v>7)throw new RangeError("Mask value out of range");this.size=f*4+17;let _=[];for(let M=0;M<this.size;M++)_.push(!1);for(let M=0;M<this.size;M++)this.modules.push(_.slice()),this.isFunction.push(_.slice());this.drawFunctionPatterns();const y=this.addEccAndInterleave(g);if(this.drawCodewords(y),v==-1){let M=1e9;for(let T=0;T<8;T++){this.applyMask(T),this.drawFormatBits(T);const x=this.getPenaltyScore();x<M&&(v=T,M=x),this.applyMask(T)}}l(0<=v&&v<=7),this.mask=v,this.applyMask(v),this.drawFormatBits(v),this.isFunction=[]}static encodeText(f,h){const g=s.QrSegment.makeSegments(f);return he.encodeSegments(g,h)}static encodeBinary(f,h){const g=s.QrSegment.makeBytes(f);return he.encodeSegments([g],h)}static encodeSegments(f,h,g=1,v=40,_=-1,y=!0){if(!(he.MIN_VERSION<=g&&g<=v&&v<=he.MAX_VERSION)||_<-1||_>7)throw new RangeError("Invalid value");let M,T;for(M=g;;M++){const R=he.getNumDataCodewords(M,h)*8,L=p.getTotalBits(f,M);if(L<=R){T=L;break}if(M>=v)throw new RangeError("Data too long")}for(const R of[he.Ecc.MEDIUM,he.Ecc.QUARTILE,he.Ecc.HIGH])y&&T<=he.getNumDataCodewords(M,R)*8&&(h=R);let x=[];for(const R of f){i(R.mode.modeBits,4,x),i(R.numChars,R.mode.numCharCountBits(M),x);for(const L of R.getData())x.push(L)}l(x.length==T);const S=he.getNumDataCodewords(M,h)*8;l(x.length<=S),i(0,Math.min(4,S-x.length),x),i(0,(8-x.length%8)%8,x),l(x.length%8==0);for(let R=236;x.length<S;R^=253)i(R,8,x);let U=[];for(;U.length*8<x.length;)U.push(0);return x.forEach((R,L)=>U[L>>>3]|=R<<7-(L&7)),new he(M,h,U,_)}getModule(f,h){return 0<=f&&f<this.size&&0<=h&&h<this.size&&this.modules[h][f]}getModules(){return this.modules}drawFunctionPatterns(){for(let g=0;g<this.size;g++)this.setFunctionModule(6,g,g%2==0),this.setFunctionModule(g,6,g%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const f=this.getAlignmentPatternPositions(),h=f.length;for(let g=0;g<h;g++)for(let v=0;v<h;v++)g==0&&v==0||g==0&&v==h-1||g==h-1&&v==0||this.drawAlignmentPattern(f[g],f[v]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(f){const h=this.errorCorrectionLevel.formatBits<<3|f;let g=h;for(let _=0;_<10;_++)g=g<<1^(g>>>9)*1335;const v=(h<<10|g)^21522;l(v>>>15==0);for(let _=0;_<=5;_++)this.setFunctionModule(8,_,r(v,_));this.setFunctionModule(8,7,r(v,6)),this.setFunctionModule(8,8,r(v,7)),this.setFunctionModule(7,8,r(v,8));for(let _=9;_<15;_++)this.setFunctionModule(14-_,8,r(v,_));for(let _=0;_<8;_++)this.setFunctionModule(this.size-1-_,8,r(v,_));for(let _=8;_<15;_++)this.setFunctionModule(8,this.size-15+_,r(v,_));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let f=this.version;for(let g=0;g<12;g++)f=f<<1^(f>>>11)*7973;const h=this.version<<12|f;l(h>>>18==0);for(let g=0;g<18;g++){const v=r(h,g),_=this.size-11+g%3,y=Math.floor(g/3);this.setFunctionModule(_,y,v),this.setFunctionModule(y,_,v)}}drawFinderPattern(f,h){for(let g=-4;g<=4;g++)for(let v=-4;v<=4;v++){const _=Math.max(Math.abs(v),Math.abs(g)),y=f+v,M=h+g;0<=y&&y<this.size&&0<=M&&M<this.size&&this.setFunctionModule(y,M,_!=2&&_!=4)}}drawAlignmentPattern(f,h){for(let g=-2;g<=2;g++)for(let v=-2;v<=2;v++)this.setFunctionModule(f+v,h+g,Math.max(Math.abs(v),Math.abs(g))!=1)}setFunctionModule(f,h,g){this.modules[h][f]=g,this.isFunction[h][f]=!0}addEccAndInterleave(f){const h=this.version,g=this.errorCorrectionLevel;if(f.length!=he.getNumDataCodewords(h,g))throw new RangeError("Invalid argument");const v=he.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][h],_=he.ECC_CODEWORDS_PER_BLOCK[g.ordinal][h],y=Math.floor(he.getNumRawDataModules(h)/8),M=v-y%v,T=Math.floor(y/v);let x=[];const S=he.reedSolomonComputeDivisor(_);for(let R=0,L=0;R<v;R++){let G=f.slice(L,L+T-_+(R<M?0:1));L+=G.length;const B=he.reedSolomonComputeRemainder(G,S);R<M&&G.push(0),x.push(G.concat(B))}let U=[];for(let R=0;R<x[0].length;R++)x.forEach((L,G)=>{(R!=T-_||G>=M)&&U.push(L[R])});return l(U.length==y),U}drawCodewords(f){if(f.length!=Math.floor(he.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let h=0;for(let g=this.size-1;g>=1;g-=2){g==6&&(g=5);for(let v=0;v<this.size;v++)for(let _=0;_<2;_++){const y=g-_,T=(g+1&2)==0?this.size-1-v:v;!this.isFunction[T][y]&&h<f.length*8&&(this.modules[T][y]=r(f[h>>>3],7-(h&7)),h++)}}l(h==f.length*8)}applyMask(f){if(f<0||f>7)throw new RangeError("Mask value out of range");for(let h=0;h<this.size;h++)for(let g=0;g<this.size;g++){let v;switch(f){case 0:v=(g+h)%2==0;break;case 1:v=h%2==0;break;case 2:v=g%3==0;break;case 3:v=(g+h)%3==0;break;case 4:v=(Math.floor(g/3)+Math.floor(h/2))%2==0;break;case 5:v=g*h%2+g*h%3==0;break;case 6:v=(g*h%2+g*h%3)%2==0;break;case 7:v=((g+h)%2+g*h%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[h][g]&&v&&(this.modules[h][g]=!this.modules[h][g])}}getPenaltyScore(){let f=0;for(let _=0;_<this.size;_++){let y=!1,M=0,T=[0,0,0,0,0,0,0];for(let x=0;x<this.size;x++)this.modules[_][x]==y?(M++,M==5?f+=he.PENALTY_N1:M>5&&f++):(this.finderPenaltyAddHistory(M,T),y||(f+=this.finderPenaltyCountPatterns(T)*he.PENALTY_N3),y=this.modules[_][x],M=1);f+=this.finderPenaltyTerminateAndCount(y,M,T)*he.PENALTY_N3}for(let _=0;_<this.size;_++){let y=!1,M=0,T=[0,0,0,0,0,0,0];for(let x=0;x<this.size;x++)this.modules[x][_]==y?(M++,M==5?f+=he.PENALTY_N1:M>5&&f++):(this.finderPenaltyAddHistory(M,T),y||(f+=this.finderPenaltyCountPatterns(T)*he.PENALTY_N3),y=this.modules[x][_],M=1);f+=this.finderPenaltyTerminateAndCount(y,M,T)*he.PENALTY_N3}for(let _=0;_<this.size-1;_++)for(let y=0;y<this.size-1;y++){const M=this.modules[_][y];M==this.modules[_][y+1]&&M==this.modules[_+1][y]&&M==this.modules[_+1][y+1]&&(f+=he.PENALTY_N2)}let h=0;for(const _ of this.modules)h=_.reduce((y,M)=>y+(M?1:0),h);const g=this.size*this.size,v=Math.ceil(Math.abs(h*20-g*10)/g)-1;return l(0<=v&&v<=9),f+=v*he.PENALTY_N4,l(0<=f&&f<=2568888),f}getAlignmentPatternPositions(){if(this.version==1)return[];{const f=Math.floor(this.version/7)+2,h=this.version==32?26:Math.ceil((this.version*4+4)/(f*2-2))*2;let g=[6];for(let v=this.size-7;g.length<f;v-=h)g.splice(1,0,v);return g}}static getNumRawDataModules(f){if(f<he.MIN_VERSION||f>he.MAX_VERSION)throw new RangeError("Version number out of range");let h=(16*f+128)*f+64;if(f>=2){const g=Math.floor(f/7)+2;h-=(25*g-10)*g-55,f>=7&&(h-=36)}return l(208<=h&&h<=29648),h}static getNumDataCodewords(f,h){return Math.floor(he.getNumRawDataModules(f)/8)-he.ECC_CODEWORDS_PER_BLOCK[h.ordinal][f]*he.NUM_ERROR_CORRECTION_BLOCKS[h.ordinal][f]}static reedSolomonComputeDivisor(f){if(f<1||f>255)throw new RangeError("Degree out of range");let h=[];for(let v=0;v<f-1;v++)h.push(0);h.push(1);let g=1;for(let v=0;v<f;v++){for(let _=0;_<h.length;_++)h[_]=he.reedSolomonMultiply(h[_],g),_+1<h.length&&(h[_]^=h[_+1]);g=he.reedSolomonMultiply(g,2)}return h}static reedSolomonComputeRemainder(f,h){let g=h.map(v=>0);for(const v of f){const _=v^g.shift();g.push(0),h.forEach((y,M)=>g[M]^=he.reedSolomonMultiply(y,_))}return g}static reedSolomonMultiply(f,h){if(f>>>8||h>>>8)throw new RangeError("Byte out of range");let g=0;for(let v=7;v>=0;v--)g=g<<1^(g>>>7)*285,g^=(h>>>v&1)*f;return l(g>>>8==0),g}finderPenaltyCountPatterns(f){const h=f[1];l(h<=this.size*3);const g=h>0&&f[2]==h&&f[3]==h*3&&f[4]==h&&f[5]==h;return(g&&f[0]>=h*4&&f[6]>=h?1:0)+(g&&f[6]>=h*4&&f[0]>=h?1:0)}finderPenaltyTerminateAndCount(f,h,g){return f&&(this.finderPenaltyAddHistory(h,g),h=0),h+=this.size,this.finderPenaltyAddHistory(h,g),this.finderPenaltyCountPatterns(g)}finderPenaltyAddHistory(f,h){h[0]==0&&(f+=this.size),h.pop(),h.unshift(f)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],s.QrCode=t;function i(m,f,h){if(f<0||f>31||m>>>f)throw new RangeError("Value out of range");for(let g=f-1;g>=0;g--)h.push(m>>>g&1)}function r(m,f){return(m>>>f&1)!=0}function l(m){if(!m)throw new Error("Assertion error")}const u=class Je{constructor(f,h,g){if(this.mode=f,this.numChars=h,this.bitData=g,h<0)throw new RangeError("Invalid argument");this.bitData=g.slice()}static makeBytes(f){let h=[];for(const g of f)i(g,8,h);return new Je(Je.Mode.BYTE,f.length,h)}static makeNumeric(f){if(!Je.isNumeric(f))throw new RangeError("String contains non-numeric characters");let h=[];for(let g=0;g<f.length;){const v=Math.min(f.length-g,3);i(parseInt(f.substring(g,g+v),10),v*3+1,h),g+=v}return new Je(Je.Mode.NUMERIC,f.length,h)}static makeAlphanumeric(f){if(!Je.isAlphanumeric(f))throw new RangeError("String contains unencodable characters in alphanumeric mode");let h=[],g;for(g=0;g+2<=f.length;g+=2){let v=Je.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g))*45;v+=Je.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g+1)),i(v,11,h)}return g<f.length&&i(Je.ALPHANUMERIC_CHARSET.indexOf(f.charAt(g)),6,h),new Je(Je.Mode.ALPHANUMERIC,f.length,h)}static makeSegments(f){return f==""?[]:Je.isNumeric(f)?[Je.makeNumeric(f)]:Je.isAlphanumeric(f)?[Je.makeAlphanumeric(f)]:[Je.makeBytes(Je.toUtf8ByteArray(f))]}static makeEci(f){let h=[];if(f<0)throw new RangeError("ECI assignment value out of range");if(f<128)i(f,8,h);else if(f<16384)i(2,2,h),i(f,14,h);else if(f<1e6)i(6,3,h),i(f,21,h);else throw new RangeError("ECI assignment value out of range");return new Je(Je.Mode.ECI,0,h)}static isNumeric(f){return Je.NUMERIC_REGEX.test(f)}static isAlphanumeric(f){return Je.ALPHANUMERIC_REGEX.test(f)}getData(){return this.bitData.slice()}static getTotalBits(f,h){let g=0;for(const v of f){const _=v.mode.numCharCountBits(h);if(v.numChars>=1<<_)return 1/0;g+=4+_+v.bitData.length}return g}static toUtf8ByteArray(f){f=encodeURI(f);let h=[];for(let g=0;g<f.length;g++)f.charAt(g)!="%"?h.push(f.charCodeAt(g)):(h.push(parseInt(f.substring(g+1,g+3),16)),g+=2);return h}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let p=u;s.QrSegment=u})(xr||(xr={}));(s=>{(t=>{const i=class{constructor(l,u){this.ordinal=l,this.formatBits=u}};i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),t.Ecc=i})(s.QrCode||(s.QrCode={}))})(xr||(xr={}));(s=>{(t=>{const i=class{constructor(l,u){this.modeBits=l,this.numBitsCharCount=u}numCharCountBits(l){return this.numBitsCharCount[Math.floor((l+7)/17)]}};i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),t.Mode=i})(s.QrSegment||(s.QrSegment={}))})(xr||(xr={}));var Ts=xr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var CM={L:Ts.QrCode.Ecc.LOW,M:Ts.QrCode.Ecc.MEDIUM,Q:Ts.QrCode.Ecc.QUARTILE,H:Ts.QrCode.Ecc.HIGH},nv=128,iv="L",av="#FFFFFF",rv="#000000",sv=!1,ov=1,wM=4,DM=0,UM=.1;function lv(s,t=0){const i=[];return s.forEach(function(r,l){let u=null;r.forEach(function(p,m){if(!p&&u!==null){i.push(`M${u+t} ${l+t}h${m-u}v1H${u+t}z`),u=null;return}if(m===r.length-1){if(!p)return;u===null?i.push(`M${m+t},${l+t} h1v1H${m+t}z`):i.push(`M${u+t},${l+t} h${m+1-u}v1H${u+t}z`);return}p&&u===null&&(u=m)})}),i.join("")}function uv(s,t){return s.slice().map((i,r)=>r<t.y||r>=t.y+t.h?i:i.map((l,u)=>u<t.x||u>=t.x+t.w?l:!1))}function LM(s,t,i,r){if(r==null)return null;const l=s.length+i*2,u=Math.floor(t*UM),p=l/t,m=(r.width||u)*p,f=(r.height||u)*p,h=r.x==null?s.length/2-m/2:r.x*p,g=r.y==null?s.length/2-f/2:r.y*p,v=r.opacity==null?1:r.opacity;let _=null;if(r.excavate){let M=Math.floor(h),T=Math.floor(g),x=Math.ceil(m+h-M),S=Math.ceil(f+g-T);_={x:M,y:T,w:x,h:S}}const y=r.crossOrigin;return{x:h,y:g,h:f,w:m,excavation:_,opacity:v,crossOrigin:y}}function NM(s,t){return t!=null?Math.max(Math.floor(t),0):s?wM:DM}function cv({value:s,level:t,minVersion:i,includeMargin:r,marginSize:l,imageSettings:u,size:p,boostLevel:m}){let f=ln.useMemo(()=>{const M=(Array.isArray(s)?s:[s]).reduce((T,x)=>(T.push(...Ts.QrSegment.makeSegments(x)),T),[]);return Ts.QrCode.encodeSegments(M,CM[t],i,void 0,void 0,m)},[s,t,i,m]);const{cells:h,margin:g,numCells:v,calculatedImageSettings:_}=ln.useMemo(()=>{let y=f.getModules();const M=NM(r,l),T=y.length+M*2,x=LM(y,p,M,u);return{cells:y,margin:M,numCells:T,calculatedImageSettings:x}},[f,p,u,r,l]);return{qrcode:f,margin:g,cells:h,numCells:v,calculatedImageSettings:_}}var OM=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),PM=ln.forwardRef(function(t,i){const r=t,{value:l,size:u=nv,level:p=iv,bgColor:m=av,fgColor:f=rv,includeMargin:h=sv,minVersion:g=ov,boostLevel:v,marginSize:_,imageSettings:y}=r,T=qh(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:x}=T,S=qh(T,["style"]),U=y?.src,R=ln.useRef(null),L=ln.useRef(null),G=ln.useCallback(ut=>{R.current=ut,typeof i=="function"?i(ut):i&&(i.current=ut)},[i]),[B,z]=ln.useState(!1),{margin:W,cells:D,numCells:C,calculatedImageSettings:F}=cv({value:l,level:p,minVersion:g,boostLevel:v,includeMargin:h,marginSize:_,imageSettings:y,size:u});ln.useEffect(()=>{if(R.current!=null){const ut=R.current,lt=ut.getContext("2d");if(!lt)return;let O=D;const q=L.current,Z=F!=null&&q!==null&&q.complete&&q.naturalHeight!==0&&q.naturalWidth!==0;Z&&F.excavation!=null&&(O=uv(D,F.excavation));const Et=window.devicePixelRatio||1;ut.height=ut.width=u*Et;const N=u/C*Et;lt.scale(N,N),lt.fillStyle=m,lt.fillRect(0,0,C,C),lt.fillStyle=f,OM?lt.fill(new Path2D(lv(O,W))):D.forEach(function(J,St){J.forEach(function(yt,K){yt&&lt.fillRect(K+W,St+W,1,1)})}),F&&(lt.globalAlpha=F.opacity),Z&&lt.drawImage(q,F.x+W,F.y+W,F.w,F.h)}}),ln.useEffect(()=>{z(!1)},[U]);const rt=Wh({height:u,width:u},x);let nt=null;return U!=null&&(nt=ln.createElement("img",{src:U,key:U,style:{display:"none"},onLoad:()=>{z(!0)},ref:L,crossOrigin:F?.crossOrigin})),ln.createElement(ln.Fragment,null,ln.createElement("canvas",Wh({style:rt,height:u,width:u,ref:G,role:"img"},S)),nt)});PM.displayName="QRCodeCanvas";var fv=ln.forwardRef(function(t,i){const r=t,{value:l,size:u=nv,level:p=iv,bgColor:m=av,fgColor:f=rv,includeMargin:h=sv,minVersion:g=ov,boostLevel:v,title:_,marginSize:y,imageSettings:M}=r,T=qh(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:x,cells:S,numCells:U,calculatedImageSettings:R}=cv({value:l,level:p,minVersion:g,boostLevel:v,includeMargin:h,marginSize:y,imageSettings:M,size:u});let L=S,G=null;M!=null&&R!=null&&(R.excavation!=null&&(L=uv(S,R.excavation)),G=ln.createElement("image",{href:M.src,height:R.h,width:R.w,x:R.x+x,y:R.y+x,preserveAspectRatio:"none",opacity:R.opacity,crossOrigin:R.crossOrigin}));const B=lv(L,x);return ln.createElement("svg",Wh({height:u,width:u,viewBox:`0 0 ${U} ${U}`,ref:i,role:"img"},T),!!_&&ln.createElement("title",null,_),ln.createElement("path",{fill:m,d:`M0,0 h${U}v${U}H0z`,shapeRendering:"crispEdges"}),ln.createElement("path",{fill:f,d:B,shapeRendering:"crispEdges"}),G)});fv.displayName="QRCodeSVG";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="168",IM=0,z_=1,zM=2,hv=1,BM=2,Zi=3,Fa=0,Pn=1,Ki=2,za=0,As=1,B_=2,F_=3,H_=4,FM=5,gr=100,HM=101,GM=102,VM=103,kM=104,XM=200,WM=201,qM=202,YM=203,Yh=204,jh=205,jM=206,ZM=207,KM=208,QM=209,JM=210,$M=211,tE=212,eE=213,nE=214,iE=0,aE=1,rE=2,ku=3,sE=4,oE=5,lE=6,uE=7,dv=0,cE=1,fE=2,Ba=0,hE=1,dE=2,pE=3,mE=4,gE=5,_E=6,vE=7,pv=300,ws=301,Ds=302,Zh=303,Kh=304,Qu=306,Qh=1e3,vr=1001,Jh=1002,ri=1003,SE=1004,cu=1005,di=1006,hh=1007,Sr=1008,ea=1009,mv=1010,gv=1011,qo=1012,Od=1013,yr=1014,Qi=1015,Ko=1016,Pd=1017,Id=1018,Us=1020,_v=35902,vv=1021,Sv=1022,pi=1023,xv=1024,yv=1025,Rs=1026,Ls=1027,Mv=1028,zd=1029,Ev=1030,Bd=1031,Fd=1033,Pu=33776,Iu=33777,zu=33778,Bu=33779,$h=35840,td=35841,ed=35842,nd=35843,id=36196,ad=37492,rd=37496,sd=37808,od=37809,ld=37810,ud=37811,cd=37812,fd=37813,hd=37814,dd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,Sd=37821,Fu=36492,xd=36494,yd=36495,Tv=36283,Md=36284,Ed=36285,Td=36286,xE=3200,yE=3201,ME=0,EE=1,Ia="",xi="srgb",Ga="srgb-linear",Hd="display-p3",Ju="display-p3-linear",Xu="linear",Fe="srgb",Wu="rec709",qu="p3",os=7680,G_=519,TE=512,bE=513,AE=514,bv=515,RE=516,CE=517,wE=518,DE=519,V_=35044,k_="300 es",Ji=2e3,Yu=2001;class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,p=l.length;u<p;u++)l[u].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,bd=180/Math.PI;function Qo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function On(s,t,i){return Math.max(t,Math.min(i,s))}function UE(s,t){return(s%t+t)%t}function ph(s,t,i){return(1-i)*s+i*t}function Io(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(On(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,p=this.y-t.y;return this.x=u*r-p*l+t.x,this.y=u*l+p*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,r,l,u,p,m,f,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,p,m,f,h)}set(t,i,r,l,u,p,m,f,h){const g=this.elements;return g[0]=t,g[1]=l,g[2]=m,g[3]=i,g[4]=u,g[5]=f,g[6]=r,g[7]=p,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,p=r[0],m=r[3],f=r[6],h=r[1],g=r[4],v=r[7],_=r[2],y=r[5],M=r[8],T=l[0],x=l[3],S=l[6],U=l[1],R=l[4],L=l[7],G=l[2],B=l[5],z=l[8];return u[0]=p*T+m*U+f*G,u[3]=p*x+m*R+f*B,u[6]=p*S+m*L+f*z,u[1]=h*T+g*U+v*G,u[4]=h*x+g*R+v*B,u[7]=h*S+g*L+v*z,u[2]=_*T+y*U+M*G,u[5]=_*x+y*R+M*B,u[8]=_*S+y*L+M*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],p=t[4],m=t[5],f=t[6],h=t[7],g=t[8];return i*p*g-i*m*h-r*u*g+r*m*f+l*u*h-l*p*f}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],p=t[4],m=t[5],f=t[6],h=t[7],g=t[8],v=g*p-m*h,_=m*f-g*u,y=h*u-p*f,M=i*v+r*_+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(l*h-g*r)*T,t[2]=(m*r-l*p)*T,t[3]=_*T,t[4]=(g*i-l*f)*T,t[5]=(l*u-m*i)*T,t[6]=y*T,t[7]=(r*f-h*i)*T,t[8]=(p*i-r*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,p,m){const f=Math.cos(u),h=Math.sin(u);return this.set(r*f,r*h,-r*(f*p+h*m)+p+t,-l*h,l*f,-l*(-h*p+f*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(mh.makeScale(t,i)),this}rotate(t){return this.premultiply(mh.makeRotation(-t)),this}translate(t,i){return this.premultiply(mh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new oe;function Av(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ju(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function LE(){const s=ju("canvas");return s.style.display="block",s}const X_={};function Xo(s){s in X_||(X_[s]=!0,console.warn(s))}function NE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const W_=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),q_=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zo={[Ga]:{transfer:Xu,primaries:Wu,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[xi]:{transfer:Fe,primaries:Wu,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ju]:{transfer:Xu,primaries:qu,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(q_),fromReference:s=>s.applyMatrix3(W_)},[Hd]:{transfer:Fe,primaries:qu,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(q_),fromReference:s=>s.applyMatrix3(W_).convertLinearToSRGB()}},OE=new Set([Ga,Ju]),be={enabled:!0,_workingColorSpace:Ga,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!OE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,i){if(this.enabled===!1||t===i||!t||!i)return s;const r=zo[t].toReference,l=zo[i].fromReference;return l(r(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return zo[s].primaries},getTransfer:function(s){return s===Ia?Xu:zo[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(zo[t].luminanceCoefficients)}};function Cs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class PE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ls===void 0&&(ls=ju("canvas")),ls.width=t.width,ls.height=t.height;const r=ls.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ls}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ju("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let p=0;p<u.length;p++)u[p]=Cs(u[p]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Cs(i[r]/255)*255):i[r]=Cs(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let IE=0;class Rv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Qo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let p=0,m=l.length;p<m;p++)l[p].isDataTexture?u.push(_h(l[p].image)):u.push(_h(l[p]))}else u=_h(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function _h(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?PE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zE=0;class In extends Is{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=vr,l=vr,u=di,p=Sr,m=pi,f=ea,h=In.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Qo(),this.name="",this.source=new Rv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=p,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=f,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qh:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case Jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qh:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case Jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=pv;In.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,p=t.elements;return this.x=p[0]*i+p[4]*r+p[8]*l+p[12]*u,this.y=p[1]*i+p[5]*r+p[9]*l+p[13]*u,this.z=p[2]*i+p[6]*r+p[10]*l+p[14]*u,this.w=p[3]*i+p[7]*r+p[11]*l+p[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const f=t.elements,h=f[0],g=f[4],v=f[8],_=f[1],y=f[5],M=f[9],T=f[2],x=f[6],S=f[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(h+1)/2,L=(y+1)/2,G=(S+1)/2,B=(g+_)/4,z=(v+T)/4,W=(M+x)/4;return R>L&&R>G?R<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(R),l=B/r,u=z/r):L>G?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=B/l,u=W/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=z/u,l=W/u),this.set(r,l,u,i),this}let U=Math.sqrt((x-M)*(x-M)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(x-M)/U,this.y=(v-T)/U,this.z=(_-g)/U,this.w=Math.acos((h+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends Is{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new In(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const p=r.count;for(let m=0;m<p;m++)this.textures[m]=u.clone(),this.textures[m].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Rv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends BE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Cv extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class FE extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,p,m){let f=r[l+0],h=r[l+1],g=r[l+2],v=r[l+3];const _=u[p+0],y=u[p+1],M=u[p+2],T=u[p+3];if(m===0){t[i+0]=f,t[i+1]=h,t[i+2]=g,t[i+3]=v;return}if(m===1){t[i+0]=_,t[i+1]=y,t[i+2]=M,t[i+3]=T;return}if(v!==T||f!==_||h!==y||g!==M){let x=1-m;const S=f*_+h*y+g*M+v*T,U=S>=0?1:-1,R=1-S*S;if(R>Number.EPSILON){const G=Math.sqrt(R),B=Math.atan2(G,S*U);x=Math.sin(x*B)/G,m=Math.sin(m*B)/G}const L=m*U;if(f=f*x+_*L,h=h*x+y*L,g=g*x+M*L,v=v*x+T*L,x===1-m){const G=1/Math.sqrt(f*f+h*h+g*g+v*v);f*=G,h*=G,g*=G,v*=G}}t[i]=f,t[i+1]=h,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,p){const m=r[l],f=r[l+1],h=r[l+2],g=r[l+3],v=u[p],_=u[p+1],y=u[p+2],M=u[p+3];return t[i]=m*M+g*v+f*y-h*_,t[i+1]=f*M+g*_+h*v-m*y,t[i+2]=h*M+g*y+m*_-f*v,t[i+3]=g*M-m*v-f*_-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,p=t._order,m=Math.cos,f=Math.sin,h=m(r/2),g=m(l/2),v=m(u/2),_=f(r/2),y=f(l/2),M=f(u/2);switch(p){case"XYZ":this._x=_*g*v+h*y*M,this._y=h*y*v-_*g*M,this._z=h*g*M+_*y*v,this._w=h*g*v-_*y*M;break;case"YXZ":this._x=_*g*v+h*y*M,this._y=h*y*v-_*g*M,this._z=h*g*M-_*y*v,this._w=h*g*v+_*y*M;break;case"ZXY":this._x=_*g*v-h*y*M,this._y=h*y*v+_*g*M,this._z=h*g*M+_*y*v,this._w=h*g*v-_*y*M;break;case"ZYX":this._x=_*g*v-h*y*M,this._y=h*y*v+_*g*M,this._z=h*g*M-_*y*v,this._w=h*g*v+_*y*M;break;case"YZX":this._x=_*g*v+h*y*M,this._y=h*y*v+_*g*M,this._z=h*g*M-_*y*v,this._w=h*g*v-_*y*M;break;case"XZY":this._x=_*g*v-h*y*M,this._y=h*y*v-_*g*M,this._z=h*g*M+_*y*v,this._w=h*g*v+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+p)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],p=i[1],m=i[5],f=i[9],h=i[2],g=i[6],v=i[10],_=r+m+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-f)*y,this._y=(u-h)*y,this._z=(p-l)*y}else if(r>m&&r>v){const y=2*Math.sqrt(1+r-m-v);this._w=(g-f)/y,this._x=.25*y,this._y=(l+p)/y,this._z=(u+h)/y}else if(m>v){const y=2*Math.sqrt(1+m-r-v);this._w=(u-h)/y,this._x=(l+p)/y,this._y=.25*y,this._z=(f+g)/y}else{const y=2*Math.sqrt(1+v-r-m);this._w=(p-l)/y,this._x=(u+h)/y,this._y=(f+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(On(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,p=t._w,m=i._x,f=i._y,h=i._z,g=i._w;return this._x=r*g+p*m+l*h-u*f,this._y=l*g+p*f+u*m-r*h,this._z=u*g+p*h+r*f-l*m,this._w=p*g-r*m-l*f-u*h,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,p=this._w;let m=p*t._w+r*t._x+l*t._y+u*t._z;if(m<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,m=-m):this.copy(t),m>=1)return this._w=p,this._x=r,this._y=l,this._z=u,this;const f=1-m*m;if(f<=Number.EPSILON){const y=1-i;return this._w=y*p+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const h=Math.sqrt(f),g=Math.atan2(h,m),v=Math.sin((1-i)*g)/h,_=Math.sin(i*g)/h;return this._w=p*v+this._w*_,this._x=r*v+this._x*_,this._y=l*v+this._y*_,this._z=u*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,p=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*p,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*p,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*p,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,p=t.y,m=t.z,f=t.w,h=2*(p*l-m*r),g=2*(m*i-u*l),v=2*(u*r-p*i);return this.x=i+f*h+p*v-m*g,this.y=r+f*g+m*h-u*v,this.z=l+f*v+u*g-p*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,p=i.x,m=i.y,f=i.z;return this.x=l*f-u*m,this.y=u*p-r*f,this.z=r*m-l*p,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return vh.copy(this).projectOnVector(t),this.sub(vh)}reflect(t){return this.sub(vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(On(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vh=new tt,Y_=new Jo;class $o{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let p=0,m=u.count;p<m;p++)t.isMesh===!0?t.getVertexPosition(p,ci):ci.fromBufferAttribute(u,p),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(t.matrixWorld),this.union(fu)}const l=t.children;for(let u=0,p=l.length;u<p;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),hu.subVectors(this.max,Bo),us.subVectors(t.a,Bo),cs.subVectors(t.b,Bo),fs.subVectors(t.c,Bo),Da.subVectors(cs,us),Ua.subVectors(fs,cs),lr.subVectors(us,fs);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-lr.z,lr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,lr.z,0,-lr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-lr.y,lr.x,0];return!Sh(i,us,cs,fs,hu)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,us,cs,fs,hu))?!1:(du.crossVectors(Da,Ua),i=[du.x,du.y,du.z],Sh(i,us,cs,fs,hu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],ci=new tt,fu=new $o,us=new tt,cs=new tt,fs=new tt,Da=new tt,Ua=new tt,lr=new tt,Bo=new tt,hu=new tt,du=new tt,ur=new tt;function Sh(s,t,i,r,l){for(let u=0,p=s.length-3;u<=p;u+=3){ur.fromArray(s,u);const m=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),f=t.dot(ur),h=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>m)return!1}return!0}const HE=new $o,Fo=new tt,xh=new tt;class Gd{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):HE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,p=t.length;u<p;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(xh)),this.expandByPoint(Fo.copy(t.center).sub(xh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new tt,yh=new tt,pu=new tt,La=new tt,Mh=new tt,mu=new tt,Eh=new tt;class GE{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Wi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,i),Wi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){yh.copy(t).add(i).multiplyScalar(.5),pu.copy(i).sub(t).normalize(),La.copy(this.origin).sub(yh);const u=t.distanceTo(i)*.5,p=-this.direction.dot(pu),m=La.dot(this.direction),f=-La.dot(pu),h=La.lengthSq(),g=Math.abs(1-p*p);let v,_,y,M;if(g>0)if(v=p*f-m,_=p*m-f,M=u*g,v>=0)if(_>=-M)if(_<=M){const T=1/g;v*=T,_*=T,y=v*(v+p*_+2*m)+_*(p*v+_+2*f)+h}else _=u,v=Math.max(0,-(p*_+m)),y=-v*v+_*(_+2*f)+h;else _=-u,v=Math.max(0,-(p*_+m)),y=-v*v+_*(_+2*f)+h;else _<=-M?(v=Math.max(0,-(-p*u+m)),_=v>0?-u:Math.min(Math.max(-u,-f),u),y=-v*v+_*(_+2*f)+h):_<=M?(v=0,_=Math.min(Math.max(-u,-f),u),y=_*(_+2*f)+h):(v=Math.max(0,-(p*u+m)),_=v>0?u:Math.min(Math.max(-u,-f),u),y=-v*v+_*(_+2*f)+h);else _=p>0?-u:u,v=Math.max(0,-(p*_+m)),y=-v*v+_*(_+2*f)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(yh).addScaledVector(pu,_),y}intersectSphere(t,i){Wi.subVectors(t.center,this.origin);const r=Wi.dot(this.direction),l=Wi.dot(Wi)-r*r,u=t.radius*t.radius;if(l>u)return null;const p=Math.sqrt(u-l),m=r-p,f=r+p;return f<0?null:m<0?this.at(f,i):this.at(m,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,p,m,f;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(t.min.x-_.x)*h,l=(t.max.x-_.x)*h):(r=(t.max.x-_.x)*h,l=(t.min.x-_.x)*h),g>=0?(u=(t.min.y-_.y)*g,p=(t.max.y-_.y)*g):(u=(t.max.y-_.y)*g,p=(t.min.y-_.y)*g),r>p||u>l||((u>r||isNaN(r))&&(r=u),(p<l||isNaN(l))&&(l=p),v>=0?(m=(t.min.z-_.z)*v,f=(t.max.z-_.z)*v):(m=(t.max.z-_.z)*v,f=(t.min.z-_.z)*v),r>f||m>l)||((m>r||r!==r)&&(r=m),(f<l||l!==l)&&(l=f),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,i,r,l,u){Mh.subVectors(i,t),mu.subVectors(r,t),Eh.crossVectors(Mh,mu);let p=this.direction.dot(Eh),m;if(p>0){if(l)return null;m=1}else if(p<0)m=-1,p=-p;else return null;La.subVectors(this.origin,t);const f=m*this.direction.dot(mu.crossVectors(La,mu));if(f<0)return null;const h=m*this.direction.dot(Mh.cross(La));if(h<0||f+h>p)return null;const g=-m*La.dot(Eh);return g<0?null:this.at(g/p,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,r,l,u,p,m,f,h,g,v,_,y,M,T,x){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,p,m,f,h,g,v,_,y,M,T,x)}set(t,i,r,l,u,p,m,f,h,g,v,_,y,M,T,x){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=p,S[9]=m,S[13]=f,S[2]=h,S[6]=g,S[10]=v,S[14]=_,S[3]=y,S[7]=M,S[11]=T,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),u=1/hs.setFromMatrixColumn(t,1).length(),p=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*p,i[9]=r[9]*p,i[10]=r[10]*p,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,p=Math.cos(r),m=Math.sin(r),f=Math.cos(l),h=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const _=p*g,y=p*v,M=m*g,T=m*v;i[0]=f*g,i[4]=-f*v,i[8]=h,i[1]=y+M*h,i[5]=_-T*h,i[9]=-m*f,i[2]=T-_*h,i[6]=M+y*h,i[10]=p*f}else if(t.order==="YXZ"){const _=f*g,y=f*v,M=h*g,T=h*v;i[0]=_+T*m,i[4]=M*m-y,i[8]=p*h,i[1]=p*v,i[5]=p*g,i[9]=-m,i[2]=y*m-M,i[6]=T+_*m,i[10]=p*f}else if(t.order==="ZXY"){const _=f*g,y=f*v,M=h*g,T=h*v;i[0]=_-T*m,i[4]=-p*v,i[8]=M+y*m,i[1]=y+M*m,i[5]=p*g,i[9]=T-_*m,i[2]=-p*h,i[6]=m,i[10]=p*f}else if(t.order==="ZYX"){const _=p*g,y=p*v,M=m*g,T=m*v;i[0]=f*g,i[4]=M*h-y,i[8]=_*h+T,i[1]=f*v,i[5]=T*h+_,i[9]=y*h-M,i[2]=-h,i[6]=m*f,i[10]=p*f}else if(t.order==="YZX"){const _=p*f,y=p*h,M=m*f,T=m*h;i[0]=f*g,i[4]=T-_*v,i[8]=M*v+y,i[1]=v,i[5]=p*g,i[9]=-m*g,i[2]=-h*g,i[6]=y*v+M,i[10]=_-T*v}else if(t.order==="XZY"){const _=p*f,y=p*h,M=m*f,T=m*h;i[0]=f*g,i[4]=-v,i[8]=h*g,i[1]=_*v+T,i[5]=p*g,i[9]=y*v-M,i[2]=M*v-y,i[6]=m*g,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VE,t,kE)}lookAt(t,i,r){const l=this.elements;return qn.subVectors(t,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Na.crossVectors(r,qn),Na.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Na.crossVectors(r,qn)),Na.normalize(),gu.crossVectors(qn,Na),l[0]=Na.x,l[4]=gu.x,l[8]=qn.x,l[1]=Na.y,l[5]=gu.y,l[9]=qn.y,l[2]=Na.z,l[6]=gu.z,l[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,p=r[0],m=r[4],f=r[8],h=r[12],g=r[1],v=r[5],_=r[9],y=r[13],M=r[2],T=r[6],x=r[10],S=r[14],U=r[3],R=r[7],L=r[11],G=r[15],B=l[0],z=l[4],W=l[8],D=l[12],C=l[1],F=l[5],rt=l[9],nt=l[13],ut=l[2],lt=l[6],O=l[10],q=l[14],Z=l[3],Et=l[7],N=l[11],J=l[15];return u[0]=p*B+m*C+f*ut+h*Z,u[4]=p*z+m*F+f*lt+h*Et,u[8]=p*W+m*rt+f*O+h*N,u[12]=p*D+m*nt+f*q+h*J,u[1]=g*B+v*C+_*ut+y*Z,u[5]=g*z+v*F+_*lt+y*Et,u[9]=g*W+v*rt+_*O+y*N,u[13]=g*D+v*nt+_*q+y*J,u[2]=M*B+T*C+x*ut+S*Z,u[6]=M*z+T*F+x*lt+S*Et,u[10]=M*W+T*rt+x*O+S*N,u[14]=M*D+T*nt+x*q+S*J,u[3]=U*B+R*C+L*ut+G*Z,u[7]=U*z+R*F+L*lt+G*Et,u[11]=U*W+R*rt+L*O+G*N,u[15]=U*D+R*nt+L*q+G*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],p=t[1],m=t[5],f=t[9],h=t[13],g=t[2],v=t[6],_=t[10],y=t[14],M=t[3],T=t[7],x=t[11],S=t[15];return M*(+u*f*v-l*h*v-u*m*_+r*h*_+l*m*y-r*f*y)+T*(+i*f*y-i*h*_+u*p*_-l*p*y+l*h*g-u*f*g)+x*(+i*h*v-i*m*y-u*p*v+r*p*y+u*m*g-r*h*g)+S*(-l*m*g-i*f*v+i*m*_+l*p*v-r*p*_+r*f*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],p=t[4],m=t[5],f=t[6],h=t[7],g=t[8],v=t[9],_=t[10],y=t[11],M=t[12],T=t[13],x=t[14],S=t[15],U=v*x*h-T*_*h+T*f*y-m*x*y-v*f*S+m*_*S,R=M*_*h-g*x*h-M*f*y+p*x*y+g*f*S-p*_*S,L=g*T*h-M*v*h+M*m*y-p*T*y-g*m*S+p*v*S,G=M*v*f-g*T*f-M*m*_+p*T*_+g*m*x-p*v*x,B=i*U+r*R+l*L+u*G;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=U*z,t[1]=(T*_*u-v*x*u-T*l*y+r*x*y+v*l*S-r*_*S)*z,t[2]=(m*x*u-T*f*u+T*l*h-r*x*h-m*l*S+r*f*S)*z,t[3]=(v*f*u-m*_*u-v*l*h+r*_*h+m*l*y-r*f*y)*z,t[4]=R*z,t[5]=(g*x*u-M*_*u+M*l*y-i*x*y-g*l*S+i*_*S)*z,t[6]=(M*f*u-p*x*u-M*l*h+i*x*h+p*l*S-i*f*S)*z,t[7]=(p*_*u-g*f*u+g*l*h-i*_*h-p*l*y+i*f*y)*z,t[8]=L*z,t[9]=(M*v*u-g*T*u-M*r*y+i*T*y+g*r*S-i*v*S)*z,t[10]=(p*T*u-M*m*u+M*r*h-i*T*h-p*r*S+i*m*S)*z,t[11]=(g*m*u-p*v*u-g*r*h+i*v*h+p*r*y-i*m*y)*z,t[12]=G*z,t[13]=(g*T*l-M*v*l+M*r*_-i*T*_-g*r*x+i*v*x)*z,t[14]=(M*m*l-p*T*l-M*r*f+i*T*f+p*r*x-i*m*x)*z,t[15]=(p*v*l-g*m*l+g*r*f-i*v*f-p*r*_+i*m*_)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,p=t.x,m=t.y,f=t.z,h=u*p,g=u*m;return this.set(h*p+r,h*m-l*f,h*f+l*m,0,h*m+l*f,g*m+r,g*f-l*p,0,h*f-l*m,g*f+l*p,u*f*f+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,p){return this.set(1,r,u,0,t,1,p,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,p=i._y,m=i._z,f=i._w,h=u+u,g=p+p,v=m+m,_=u*h,y=u*g,M=u*v,T=p*g,x=p*v,S=m*v,U=f*h,R=f*g,L=f*v,G=r.x,B=r.y,z=r.z;return l[0]=(1-(T+S))*G,l[1]=(y+L)*G,l[2]=(M-R)*G,l[3]=0,l[4]=(y-L)*B,l[5]=(1-(_+S))*B,l[6]=(x+U)*B,l[7]=0,l[8]=(M+R)*z,l[9]=(x-U)*z,l[10]=(1-(_+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=hs.set(l[0],l[1],l[2]).length();const p=hs.set(l[4],l[5],l[6]).length(),m=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],fi.copy(this);const h=1/u,g=1/p,v=1/m;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,i.setFromRotationMatrix(fi),r.x=u,r.y=p,r.z=m,this}makePerspective(t,i,r,l,u,p,m=Ji){const f=this.elements,h=2*u/(i-t),g=2*u/(r-l),v=(i+t)/(i-t),_=(r+l)/(r-l);let y,M;if(m===Ji)y=-(p+u)/(p-u),M=-2*p*u/(p-u);else if(m===Yu)y=-p/(p-u),M=-p*u/(p-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return f[0]=h,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,i,r,l,u,p,m=Ji){const f=this.elements,h=1/(i-t),g=1/(r-l),v=1/(p-u),_=(i+t)*h,y=(r+l)*g;let M,T;if(m===Ji)M=(p+u)*v,T=-2*v;else if(m===Yu)M=u*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=T,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new tt,fi=new $e,VE=new tt(0,0,0),kE=new tt(1,1,1),Na=new tt,gu=new tt,qn=new tt,j_=new $e,Z_=new Jo;class na{constructor(t=0,i=0,r=0,l=na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],p=l[4],m=l[8],f=l[1],h=l[5],g=l[9],v=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(On(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-p,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-On(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(m,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(On(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-p,h)):(this._y=0,this._z=Math.atan2(f,u));break;case"ZYX":this._y=Math.asin(-On(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,u)):(this._x=0,this._z=Math.atan2(-p,h));break;case"YZX":this._z=Math.asin(On(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(m,y));break;case"XZY":this._z=Math.asin(-On(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(m,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return j_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(j_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z_.setFromEuler(this),this.setFromQuaternion(Z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class wv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let XE=0;const K_=new tt,ds=new Jo,qi=new $e,_u=new tt,Ho=new tt,WE=new tt,qE=new Jo,Q_=new tt(1,0,0),J_=new tt(0,1,0),$_=new tt(0,0,1),t0={type:"added"},YE={type:"removed"},ps={type:"childadded",child:null},Th={type:"childremoved",child:null};class zn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new tt,i=new na,r=new Jo,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function p(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(p),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new oe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Q_,t)}rotateY(t){return this.rotateOnAxis(J_,t)}rotateZ(t){return this.rotateOnAxis($_,t)}translateOnAxis(t,i){return K_.copy(t).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q_,t)}translateY(t){return this.translateOnAxis(J_,t)}translateZ(t){return this.translateOnAxis($_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_u.copy(t):_u.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ho,_u,this.up):qi.lookAt(_u,Ho,this.up),this.quaternion.setFromRotationMatrix(qi),l&&(qi.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(qi),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(t0),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(YE),Th.child=t,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(t0),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const p=this.children[r].getObjectByProperty(t,i);if(p!==void 0)return p}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,p=l.length;u<p;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,WE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,qE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,p=l.length;u<p;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(m=>({boxInitialized:m.boxInitialized,boxMin:m.box.min.toArray(),boxMax:m.box.max.toArray(),sphereInitialized:m.sphereInitialized,sphereRadius:m.sphere.radius,sphereCenter:m.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(m,f){return m[f.uuid]===void 0&&(m[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const f=m.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const v=f[h];u(t.shapes,v)}else u(t.shapes,f)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let f=0,h=this.material.length;f<h;f++)m.push(u(t.materials,this.material[f]));l.material=m}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const f=this.animations[m];l.animations.push(u(t.animations,f))}}if(i){const m=p(t.geometries),f=p(t.materials),h=p(t.textures),g=p(t.images),v=p(t.shapes),_=p(t.skeletons),y=p(t.animations),M=p(t.nodes);m.length>0&&(r.geometries=m),f.length>0&&(r.materials=f),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=l,r;function p(m){const f=[];for(const h in m){const g=m[h];delete g.metadata,f.push(g)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}zn.DEFAULT_UP=new tt(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new tt,Yi=new tt,bh=new tt,ji=new tt,ms=new tt,gs=new tt,e0=new tt,Ah=new tt,Rh=new tt,Ch=new tt;class Mi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),hi.subVectors(t,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){hi.subVectors(l,i),Yi.subVectors(r,i),bh.subVectors(t,i);const p=hi.dot(hi),m=hi.dot(Yi),f=hi.dot(bh),h=Yi.dot(Yi),g=Yi.dot(bh),v=p*h-m*m;if(v===0)return u.set(0,0,0),null;const _=1/v,y=(h*f-m*g)*_,M=(p*g-m*f)*_;return u.set(1-y-M,M,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,i,r,l,u,p,m,f){return this.getBarycoord(t,i,r,l,ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(u,ji.x),f.addScaledVector(p,ji.y),f.addScaledVector(m,ji.z),f)}static isFrontFacing(t,i,r,l){return hi.subVectors(r,i),Yi.subVectors(t,i),hi.cross(Yi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let p,m;ms.subVectors(l,r),gs.subVectors(u,r),Ah.subVectors(t,r);const f=ms.dot(Ah),h=gs.dot(Ah);if(f<=0&&h<=0)return i.copy(r);Rh.subVectors(t,l);const g=ms.dot(Rh),v=gs.dot(Rh);if(g>=0&&v<=g)return i.copy(l);const _=f*v-g*h;if(_<=0&&f>=0&&g<=0)return p=f/(f-g),i.copy(r).addScaledVector(ms,p);Ch.subVectors(t,u);const y=ms.dot(Ch),M=gs.dot(Ch);if(M>=0&&y<=M)return i.copy(u);const T=y*h-f*M;if(T<=0&&h>=0&&M<=0)return m=h/(h-M),i.copy(r).addScaledVector(gs,m);const x=g*M-y*v;if(x<=0&&v-g>=0&&y-M>=0)return e0.subVectors(u,l),m=(v-g)/(v-g+(y-M)),i.copy(l).addScaledVector(e0,m);const S=1/(x+T+_);return p=T*S,m=_*S,i.copy(r).addScaledVector(ms,p).addScaledVector(gs,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},vu={h:0,s:0,l:0};function wh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=be.workingColorSpace){if(t=UE(t,1),i=On(i,0,1),r=On(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,p=2*r-u;this.r=wh(p,u,t+1/3),this.g=wh(p,u,t),this.b=wh(p,u,t-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(t,i=xi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const p=l[1],m=l[2];switch(p){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],p=u.length;if(p===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(p===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const r=Dv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=gh(t.r),this.g=gh(t.g),this.b=gh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return be.fromWorkingColorSpace(bn.copy(this),t),Math.round(On(bn.r*255,0,255))*65536+Math.round(On(bn.g*255,0,255))*256+Math.round(On(bn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.fromWorkingColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,u=bn.b,p=Math.max(r,l,u),m=Math.min(r,l,u);let f,h;const g=(m+p)/2;if(m===p)f=0,h=0;else{const v=p-m;switch(h=g<=.5?v/(p+m):v/(2-p-m),p){case r:f=(l-u)/v+(l<u?6:0);break;case l:f=(u-r)/v+2;break;case u:f=(r-l)/v+4;break}f/=6}return t.h=f,t.s=h,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.fromWorkingColorSpace(bn.copy(this),i),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=xi){be.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,l=bn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+t,Oa.s+i,Oa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Oa),t.getHSL(vu);const r=ph(Oa.h,vu.h,i),l=ph(Oa.s,vu.s,i),u=ph(Oa.l,vu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new we;we.NAMES=Dv;let jE=0;class $u extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=As,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=jh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ku,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ku&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const p=[];for(const m in u){const f=u[m];delete f.metadata,p.push(f)}return p}if(i){const u=l(t.textures),p=l(t.images);u.length>0&&(r.textures=u),p.length>0&&(r.images=p)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vd extends $u{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new tt,Su=new ve;class Ti{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=V_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Xo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Su.fromBufferAttribute(this,i),Su.applyMatrix3(t),this.setXY(i,Su.x,Su.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Nn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array),u=Nn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==V_&&(t.usage=this.usage),t}}class Uv extends Ti{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Lv extends Ti{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class bi extends Ti{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ZE=0;const ai=new $e,Dh=new zn,_s=new tt,Yn=new $o,Go=new $o,vn=new tt;class Va extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Av(t)?Lv:Uv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,i,r){return ai.makeTranslation(t,i,r),this.applyMatrix4(ai),this}scale(t,i,r){return ai.makeScale(t,i,r),this.applyMatrix4(ai),this}lookAt(t){return Dh.lookAt(t),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new bi(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Yn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),i)for(let u=0,p=i.length;u<p;u++){const m=i[u];Go.setFromBufferAttribute(m),this.morphTargetsRelative?(vn.addVectors(Yn.min,Go.min),Yn.expandByPoint(vn),vn.addVectors(Yn.max,Go.max),Yn.expandByPoint(vn)):(Yn.expandByPoint(Go.min),Yn.expandByPoint(Go.max))}Yn.getCenter(r);let l=0;for(let u=0,p=t.count;u<p;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,p=i.length;u<p;u++){const m=i[u],f=this.morphTargetsRelative;for(let h=0,g=m.count;h<g;h++)vn.fromBufferAttribute(m,h),f&&(_s.fromBufferAttribute(t,h),vn.add(_s)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const p=this.getAttribute("tangent"),m=[],f=[];for(let W=0;W<r.count;W++)m[W]=new tt,f[W]=new tt;const h=new tt,g=new tt,v=new tt,_=new ve,y=new ve,M=new ve,T=new tt,x=new tt;function S(W,D,C){h.fromBufferAttribute(r,W),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),_.fromBufferAttribute(u,W),y.fromBufferAttribute(u,D),M.fromBufferAttribute(u,C),g.sub(h),v.sub(h),y.sub(_),M.sub(_);const F=1/(y.x*M.y-M.x*y.y);isFinite(F)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(F),x.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(F),m[W].add(T),m[D].add(T),m[C].add(T),f[W].add(x),f[D].add(x),f[C].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let W=0,D=U.length;W<D;++W){const C=U[W],F=C.start,rt=C.count;for(let nt=F,ut=F+rt;nt<ut;nt+=3)S(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const R=new tt,L=new tt,G=new tt,B=new tt;function z(W){G.fromBufferAttribute(l,W),B.copy(G);const D=m[W];R.copy(D),R.sub(G.multiplyScalar(G.dot(D))).normalize(),L.crossVectors(B,D);const F=L.dot(f[W])<0?-1:1;p.setXYZW(W,R.x,R.y,R.z,F)}for(let W=0,D=U.length;W<D;++W){const C=U[W],F=C.start,rt=C.count;for(let nt=F,ut=F+rt;nt<ut;nt+=3)z(t.getX(nt+0)),z(t.getX(nt+1)),z(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const l=new tt,u=new tt,p=new tt,m=new tt,f=new tt,h=new tt,g=new tt,v=new tt;if(t)for(let _=0,y=t.count;_<y;_+=3){const M=t.getX(_+0),T=t.getX(_+1),x=t.getX(_+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),p.fromBufferAttribute(i,x),g.subVectors(p,u),v.subVectors(l,u),g.cross(v),m.fromBufferAttribute(r,M),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,x),m.add(g),f.add(g),h.add(g),r.setXYZ(M,m.x,m.y,m.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),p.fromBufferAttribute(i,_+2),g.subVectors(p,u),v.subVectors(l,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(m,f){const h=m.array,g=m.itemSize,v=m.normalized,_=new h.constructor(f.length*g);let y=0,M=0;for(let T=0,x=f.length;T<x;T++){m.isInterleavedBufferAttribute?y=f[T]*m.data.stride+m.offset:y=f[T]*g;for(let S=0;S<g;S++)_[M++]=h[y++]}return new Ti(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Va,r=this.index.array,l=this.attributes;for(const m in l){const f=l[m],h=t(f,r);i.setAttribute(m,h)}const u=this.morphAttributes;for(const m in u){const f=[],h=u[m];for(let g=0,v=h.length;g<v;g++){const _=h[g],y=t(_,r);f.push(y)}i.morphAttributes[m]=f}i.morphTargetsRelative=this.morphTargetsRelative;const p=this.groups;for(let m=0,f=p.length;m<f;m++){const h=p[m];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(t[h]=f[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const f in r){const h=r[f];t.data.attributes[f]=h.toJSON(t.data)}const l={};let u=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let v=0,_=h.length;v<_;v++){const y=h[v];g.push(y.toJSON(t.data))}g.length>0&&(l[f]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const p=this.groups;p.length>0&&(t.data.groups=JSON.parse(JSON.stringify(p)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere={center:m.center.toArray(),radius:m.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const u=t.morphAttributes;for(const h in u){const g=[],v=u[h];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;const p=t.groups;for(let h=0,g=p.length;h<g;h++){const v=p[h];this.addGroup(v.start,v.count,v.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const n0=new $e,cr=new GE,xu=new Gd,i0=new tt,vs=new tt,Ss=new tt,xs=new tt,Uh=new tt,yu=new tt,Mu=new ve,Eu=new ve,Tu=new ve,a0=new tt,r0=new tt,s0=new tt,bu=new tt,Au=new tt;class Ei extends zn{constructor(t=new Va,i=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,p=l.length;u<p;u++){const m=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,p=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(u&&m){yu.set(0,0,0);for(let f=0,h=u.length;f<h;f++){const g=m[f],v=u[f];g!==0&&(Uh.fromBufferAttribute(v,t),p?yu.addScaledVector(Uh,g):yu.addScaledVector(Uh.sub(i),g))}i.add(yu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(u),cr.copy(t.ray).recast(t.near),!(xu.containsPoint(cr.origin)===!1&&(cr.intersectSphere(xu,i0)===null||cr.origin.distanceToSquared(i0)>(t.far-t.near)**2))&&(n0.copy(u).invert(),cr.copy(t.ray).applyMatrix4(n0),!(r.boundingBox!==null&&cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,cr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,p=this.material,m=u.index,f=u.attributes.position,h=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,y=u.drawRange;if(m!==null)if(Array.isArray(p))for(let M=0,T=_.length;M<T;M++){const x=_[M],S=p[x.materialIndex],U=Math.max(x.start,y.start),R=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let L=U,G=R;L<G;L+=3){const B=m.getX(L),z=m.getX(L+1),W=m.getX(L+2);l=Ru(this,S,t,r,h,g,v,B,z,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let x=M,S=T;x<S;x+=3){const U=m.getX(x),R=m.getX(x+1),L=m.getX(x+2);l=Ru(this,p,t,r,h,g,v,U,R,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(f!==void 0)if(Array.isArray(p))for(let M=0,T=_.length;M<T;M++){const x=_[M],S=p[x.materialIndex],U=Math.max(x.start,y.start),R=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=U,G=R;L<G;L+=3){const B=L,z=L+1,W=L+2;l=Ru(this,S,t,r,h,g,v,B,z,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let x=M,S=T;x<S;x+=3){const U=x,R=x+1,L=x+2;l=Ru(this,p,t,r,h,g,v,U,R,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function KE(s,t,i,r,l,u,p,m){let f;if(t.side===Pn?f=r.intersectTriangle(p,u,l,!0,m):f=r.intersectTriangle(l,u,p,t.side===Fa,m),f===null)return null;Au.copy(m),Au.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Au);return h<i.near||h>i.far?null:{distance:h,point:Au.clone(),object:s}}function Ru(s,t,i,r,l,u,p,m,f,h){s.getVertexPosition(m,vs),s.getVertexPosition(f,Ss),s.getVertexPosition(h,xs);const g=KE(s,t,i,r,vs,Ss,xs,bu);if(g){l&&(Mu.fromBufferAttribute(l,m),Eu.fromBufferAttribute(l,f),Tu.fromBufferAttribute(l,h),g.uv=Mi.getInterpolation(bu,vs,Ss,xs,Mu,Eu,Tu,new ve)),u&&(Mu.fromBufferAttribute(u,m),Eu.fromBufferAttribute(u,f),Tu.fromBufferAttribute(u,h),g.uv1=Mi.getInterpolation(bu,vs,Ss,xs,Mu,Eu,Tu,new ve)),p&&(a0.fromBufferAttribute(p,m),r0.fromBufferAttribute(p,f),s0.fromBufferAttribute(p,h),g.normal=Mi.getInterpolation(bu,vs,Ss,xs,a0,r0,s0,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:m,b:f,c:h,normal:new tt,materialIndex:0};Mi.getNormal(vs,Ss,xs,v.normal),g.face=v}return g}class tl extends Va{constructor(t=1,i=1,r=1,l=1,u=1,p=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:p};const m=this;l=Math.floor(l),u=Math.floor(u),p=Math.floor(p);const f=[],h=[],g=[],v=[];let _=0,y=0;M("z","y","x",-1,-1,r,i,t,p,u,0),M("z","y","x",1,-1,r,i,-t,p,u,1),M("x","z","y",1,1,t,r,i,l,p,2),M("x","z","y",1,-1,t,r,-i,l,p,3),M("x","y","z",1,-1,t,i,r,l,u,4),M("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(f),this.setAttribute("position",new bi(h,3)),this.setAttribute("normal",new bi(g,3)),this.setAttribute("uv",new bi(v,2));function M(T,x,S,U,R,L,G,B,z,W,D){const C=L/z,F=G/W,rt=L/2,nt=G/2,ut=B/2,lt=z+1,O=W+1;let q=0,Z=0;const Et=new tt;for(let N=0;N<O;N++){const J=N*F-nt;for(let St=0;St<lt;St++){const yt=St*C-rt;Et[T]=yt*U,Et[x]=J*R,Et[S]=ut,h.push(Et.x,Et.y,Et.z),Et[T]=0,Et[x]=0,Et[S]=B>0?1:-1,g.push(Et.x,Et.y,Et.z),v.push(St/z),v.push(1-N/W),q+=1}}for(let N=0;N<W;N++)for(let J=0;J<z;J++){const St=_+J+lt*N,yt=_+J+lt*(N+1),K=_+(J+1)+lt*(N+1),ft=_+(J+1)+lt*N;f.push(St,yt,ft),f.push(yt,K,ft),Z+=6}m.addGroup(y,Z,D),y+=Z,_+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Cn(s){const t={};for(let i=0;i<s.length;i++){const r=Ns(s[i]);for(const l in r)t[l]=r[l]}return t}function QE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Nv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const JE={clone:Ns,merge:Cn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends $u{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=tT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=QE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const p=this.uniforms[l].value;p&&p.isTexture?i.uniforms[l]={type:"t",value:p.toJSON(t).uuid}:p&&p.isColor?i.uniforms[l]={type:"c",value:p.getHex()}:p&&p.isVector2?i.uniforms[l]={type:"v2",value:p.toArray()}:p&&p.isVector3?i.uniforms[l]={type:"v3",value:p.toArray()}:p&&p.isVector4?i.uniforms[l]={type:"v4",value:p.toArray()}:p&&p.isMatrix3?i.uniforms[l]={type:"m3",value:p.toArray()}:p&&p.isMatrix4?i.uniforms[l]={type:"m4",value:p.toArray()}:i.uniforms[l]={value:p}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ov extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ji}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new tt,o0=new ve,l0=new ve;class jn extends Ov{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-t/Pa.z)}getViewSize(t,i){return this.getViewBounds(t,o0,l0),i.subVectors(l0,o0)}setViewOffset(t,i,r,l,u,p){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const p=this.view;if(this.view!==null&&this.view.enabled){const f=p.fullWidth,h=p.fullHeight;u+=p.offsetX*l/f,i-=p.offsetY*r/h,l*=p.width/f,r*=p.height/h}const m=this.filmOffset;m!==0&&(u+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ms=1;class eT extends zn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new jn(ys,Ms,t,i);l.layers=this.layers,this.add(l);const u=new jn(ys,Ms,t,i);u.layers=this.layers,this.add(u);const p=new jn(ys,Ms,t,i);p.layers=this.layers,this.add(p);const m=new jn(ys,Ms,t,i);m.layers=this.layers,this.add(m);const f=new jn(ys,Ms,t,i);f.layers=this.layers,this.add(f);const h=new jn(ys,Ms,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,p,m,f]=i;for(const h of i)this.remove(h);if(t===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),p.up.set(0,0,1),p.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===Yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),p.up.set(0,0,-1),p.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,p,m,f,h,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,p),t.setRenderTarget(r,2,l),t.render(i,m),t.setRenderTarget(r,3,l),t.render(i,f),t.setRenderTarget(r,4,l),t.render(i,h),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,_,y),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Pv extends In{constructor(t,i,r,l,u,p,m,f,h,g){t=t!==void 0?t:[],i=i!==void 0?i:ws,super(t,i,r,l,u,p,m,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nT extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Pv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:za});u.uniforms.tEquirect.value=i;const p=new Ei(l,u),m=i.minFilter;return i.minFilter===Sr&&(i.minFilter=di),new eT(1,10,this).update(t,p),i.minFilter=m,p.geometry.dispose(),p.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let p=0;p<6;p++)t.setRenderTarget(this,p),t.clear(i,r,l);t.setRenderTarget(u)}}const Lh=new tt,iT=new tt,aT=new oe;class pr{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Lh.subVectors(r,i).cross(iT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||aT.getNormalMatrix(t),l=this.coplanarPoint(Lh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Gd,Cu=new tt;class kd{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,p=new pr){this.planes=[t,i,r,l,u,p]}set(t,i,r,l,u,p){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(u),m[5].copy(p),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ji){const r=this.planes,l=t.elements,u=l[0],p=l[1],m=l[2],f=l[3],h=l[4],g=l[5],v=l[6],_=l[7],y=l[8],M=l[9],T=l[10],x=l[11],S=l[12],U=l[13],R=l[14],L=l[15];if(r[0].setComponents(f-u,_-h,x-y,L-S).normalize(),r[1].setComponents(f+u,_+h,x+y,L+S).normalize(),r[2].setComponents(f+p,_+g,x+M,L+U).normalize(),r[3].setComponents(f-p,_-g,x-M,L-U).normalize(),r[4].setComponents(f-m,_-v,x-T,L-R).normalize(),i===Ji)r[5].setComponents(f+m,_+v,x+T,L+R).normalize();else if(i===Yu)r[5].setComponents(m,v,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?t.max.x:t.min.x,Cu.y=l.normal.y>0?t.max.y:t.min.y,Cu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iv(){let s=null,t=!1,i=null,r=null;function l(u,p){i(u,p),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function rT(s){const t=new WeakMap;function i(m,f){const h=m.array,g=m.usage,v=h.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,h,g),m.onUploadCallback();let y;if(h instanceof Float32Array)y=s.FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=s.SHORT;else if(h instanceof Uint32Array)y=s.UNSIGNED_INT;else if(h instanceof Int32Array)y=s.INT;else if(h instanceof Int8Array)y=s.BYTE;else if(h instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:v}}function r(m,f,h){const g=f.array,v=f._updateRange,_=f.updateRanges;if(s.bindBuffer(h,m),v.count===-1&&_.length===0&&s.bufferSubData(h,0,g),_.length!==0){for(let y=0,M=_.length;y<M;y++){const T=_[y];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}f.clearUpdateRanges()}v.count!==-1&&(s.bufferSubData(h,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count),v.count=-1),f.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function u(m){m.isInterleavedBufferAttribute&&(m=m.data);const f=t.get(m);f&&(s.deleteBuffer(f.buffer),t.delete(m))}function p(m,f){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const g=t.get(m);(!g||g.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=t.get(m);if(h===void 0)t.set(m,i(m,f));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,f),h.version=m.version}}return{get:l,remove:u,update:p}}class tc extends Va{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,p=i/2,m=Math.floor(r),f=Math.floor(l),h=m+1,g=f+1,v=t/m,_=i/f,y=[],M=[],T=[],x=[];for(let S=0;S<g;S++){const U=S*_-p;for(let R=0;R<h;R++){const L=R*v-u;M.push(L,-U,0),T.push(0,0,1),x.push(R/m),x.push(1-S/f)}}for(let S=0;S<f;S++)for(let U=0;U<m;U++){const R=U+h*S,L=U+h*(S+1),G=U+1+h*(S+1),B=U+1+h*S;y.push(R,L,B),y.push(L,G,B)}this.setIndex(y),this.setAttribute("position",new bi(M,3)),this.setAttribute("normal",new bi(T,3)),this.setAttribute("uv",new bi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tc(t.width,t.height,t.widthSegments,t.heightSegments)}}var sT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oT=`#ifdef USE_ALPHAHASH
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
#endif`,lT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
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
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pT=`#ifdef USE_BATCHING
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
#endif`,mT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ST=`#ifdef USE_IRIDESCENCE
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
#endif`,xT=`#ifdef USE_BUMPMAP
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wT=`#define PI 3.141592653589793
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
} // validated`,DT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UT=`vec3 transformedNormal = objectNormal;
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
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",zT=`
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
}`,BT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YT=`#ifdef USE_GRADIENTMAP
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
}`,jT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QT=`uniform bool receiveShadow;
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
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,$T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
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
#endif`,ab=`struct PhysicalMaterial {
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
}`,rb=`
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mb=`#if defined( USE_POINTS_UV )
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
#endif`,gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
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
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
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
#endif`,wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sA=`uniform sampler2D t2D;
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`#include <common>
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
}`,hA=`#if DEPTH_PACKING == 3200
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
}`,dA=`#define DISTANCE
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
}`,pA=`#define DISTANCE
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`uniform float scale;
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
}`,vA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,xA=`uniform vec3 diffuse;
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
}`,yA=`#define LAMBERT
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
}`,MA=`#define LAMBERT
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
}`,EA=`#define MATCAP
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
}`,TA=`#define MATCAP
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
}`,bA=`#define NORMAL
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
}`,AA=`#define NORMAL
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
}`,RA=`#define PHONG
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
}`,CA=`#define PHONG
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
}`,wA=`#define STANDARD
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
}`,DA=`#define STANDARD
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
}`,UA=`#define TOON
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
}`,LA=`#define TOON
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
}`,NA=`uniform float size;
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
}`,OA=`uniform vec3 diffuse;
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
}`,PA=`#include <common>
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
}`,IA=`uniform vec3 color;
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
}`,zA=`uniform float rotation;
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
}`,BA=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:sT,alphahash_pars_fragment:oT,alphamap_fragment:lT,alphamap_pars_fragment:uT,alphatest_fragment:cT,alphatest_pars_fragment:fT,aomap_fragment:hT,aomap_pars_fragment:dT,batching_pars_vertex:pT,batching_vertex:mT,begin_vertex:gT,beginnormal_vertex:_T,bsdfs:vT,iridescence_fragment:ST,bumpmap_pars_fragment:xT,clipping_planes_fragment:yT,clipping_planes_pars_fragment:MT,clipping_planes_pars_vertex:ET,clipping_planes_vertex:TT,color_fragment:bT,color_pars_fragment:AT,color_pars_vertex:RT,color_vertex:CT,common:wT,cube_uv_reflection_fragment:DT,defaultnormal_vertex:UT,displacementmap_pars_vertex:LT,displacementmap_vertex:NT,emissivemap_fragment:OT,emissivemap_pars_fragment:PT,colorspace_fragment:IT,colorspace_pars_fragment:zT,envmap_fragment:BT,envmap_common_pars_fragment:FT,envmap_pars_fragment:HT,envmap_pars_vertex:GT,envmap_physical_pars_fragment:JT,envmap_vertex:VT,fog_vertex:kT,fog_pars_vertex:XT,fog_fragment:WT,fog_pars_fragment:qT,gradientmap_pars_fragment:YT,lightmap_pars_fragment:jT,lights_lambert_fragment:ZT,lights_lambert_pars_fragment:KT,lights_pars_begin:QT,lights_toon_fragment:$T,lights_toon_pars_fragment:tb,lights_phong_fragment:eb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:ab,lights_fragment_begin:rb,lights_fragment_maps:sb,lights_fragment_end:ob,logdepthbuf_fragment:lb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:cb,logdepthbuf_vertex:fb,map_fragment:hb,map_pars_fragment:db,map_particle_fragment:pb,map_particle_pars_fragment:mb,metalnessmap_fragment:gb,metalnessmap_pars_fragment:_b,morphinstance_vertex:vb,morphcolor_vertex:Sb,morphnormal_vertex:xb,morphtarget_pars_vertex:yb,morphtarget_vertex:Mb,normal_fragment_begin:Eb,normal_fragment_maps:Tb,normal_pars_fragment:bb,normal_pars_vertex:Ab,normal_vertex:Rb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:wb,clearcoat_normal_fragment_maps:Db,clearcoat_pars_fragment:Ub,iridescence_pars_fragment:Lb,opaque_fragment:Nb,packing:Ob,premultiplied_alpha_fragment:Pb,project_vertex:Ib,dithering_fragment:zb,dithering_pars_fragment:Bb,roughnessmap_fragment:Fb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Vb,shadowmap_vertex:kb,shadowmask_pars_fragment:Xb,skinbase_vertex:Wb,skinning_pars_vertex:qb,skinning_vertex:Yb,skinnormal_vertex:jb,specularmap_fragment:Zb,specularmap_pars_fragment:Kb,tonemapping_fragment:Qb,tonemapping_pars_fragment:Jb,transmission_fragment:$b,transmission_pars_fragment:tA,uv_pars_fragment:eA,uv_pars_vertex:nA,uv_vertex:iA,worldpos_vertex:aA,background_vert:rA,background_frag:sA,backgroundCube_vert:oA,backgroundCube_frag:lA,cube_vert:uA,cube_frag:cA,depth_vert:fA,depth_frag:hA,distanceRGBA_vert:dA,distanceRGBA_frag:pA,equirect_vert:mA,equirect_frag:gA,linedashed_vert:_A,linedashed_frag:vA,meshbasic_vert:SA,meshbasic_frag:xA,meshlambert_vert:yA,meshlambert_frag:MA,meshmatcap_vert:EA,meshmatcap_frag:TA,meshnormal_vert:bA,meshnormal_frag:AA,meshphong_vert:RA,meshphong_frag:CA,meshphysical_vert:wA,meshphysical_frag:DA,meshtoon_vert:UA,meshtoon_frag:LA,points_vert:NA,points_frag:OA,shadow_vert:PA,shadow_frag:IA,sprite_vert:zA,sprite_frag:BA},Dt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},yi={basic:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Cn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Cn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Cn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Cn([Dt.points,Dt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Cn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Cn([Dt.common,Dt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Cn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Cn([Dt.sprite,Dt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Cn([Dt.common,Dt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Cn([Dt.lights,Dt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};yi.physical={uniforms:Cn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const wu={r:0,b:0,g:0},hr=new na,FA=new $e;function HA(s,t,i,r,l,u,p){const m=new we(0);let f=u===!0?0:1,h,g,v=null,_=0,y=null;function M(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?i:t).get(R)),R}function T(U){let R=!1;const L=M(U);L===null?S(m,f):L&&L.isColor&&(S(L,1),R=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,p):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,p),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(U,R){const L=M(R);L&&(L.isCubeTexture||L.mapping===Qu)?(g===void 0&&(g=new Ei(new tl(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Ns(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hr.copy(R.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(hr)),g.material.toneMapped=be.getTransfer(L.colorSpace)!==Fe,(v!==L||_!==L.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=L,_=L.version,y=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Ei(new tc(2,2),new Ha({name:"BackgroundMaterial",uniforms:Ns(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=be.getTransfer(L.colorSpace)!==Fe,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||_!==L.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,v=L,_=L.version,y=s.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function S(U,R){U.getRGB(wu,Nv(s)),r.buffers.color.setClear(wu.r,wu.g,wu.b,R,p)}return{getClearColor:function(){return m},setClearColor:function(U,R=1){m.set(U),f=R,S(m,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,S(m,f)},render:T,addToRenderList:x}}function GA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,p=!1;function m(C,F,rt,nt,ut){let lt=!1;const O=v(nt,rt,F);u!==O&&(u=O,h(u.object)),lt=y(C,nt,rt,ut),lt&&M(C,nt,rt,ut),ut!==null&&t.update(ut,s.ELEMENT_ARRAY_BUFFER),(lt||p)&&(p=!1,L(C,F,rt,nt),ut!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function f(){return s.createVertexArray()}function h(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,F,rt){const nt=rt.wireframe===!0;let ut=r[C.id];ut===void 0&&(ut={},r[C.id]=ut);let lt=ut[F.id];lt===void 0&&(lt={},ut[F.id]=lt);let O=lt[nt];return O===void 0&&(O=_(f()),lt[nt]=O),O}function _(C){const F=[],rt=[],nt=[];for(let ut=0;ut<i;ut++)F[ut]=0,rt[ut]=0,nt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:rt,attributeDivisors:nt,object:C,attributes:{},index:null}}function y(C,F,rt,nt){const ut=u.attributes,lt=F.attributes;let O=0;const q=rt.getAttributes();for(const Z in q)if(q[Z].location>=0){const N=ut[Z];let J=lt[Z];if(J===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;O++}return u.attributesNum!==O||u.index!==nt}function M(C,F,rt,nt){const ut={},lt=F.attributes;let O=0;const q=rt.getAttributes();for(const Z in q)if(q[Z].location>=0){let N=lt[Z];N===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),ut[Z]=J,O++}u.attributes=ut,u.attributesNum=O,u.index=nt}function T(){const C=u.newAttributes;for(let F=0,rt=C.length;F<rt;F++)C[F]=0}function x(C){S(C,0)}function S(C,F){const rt=u.newAttributes,nt=u.enabledAttributes,ut=u.attributeDivisors;rt[C]=1,nt[C]===0&&(s.enableVertexAttribArray(C),nt[C]=1),ut[C]!==F&&(s.vertexAttribDivisor(C,F),ut[C]=F)}function U(){const C=u.newAttributes,F=u.enabledAttributes;for(let rt=0,nt=F.length;rt<nt;rt++)F[rt]!==C[rt]&&(s.disableVertexAttribArray(rt),F[rt]=0)}function R(C,F,rt,nt,ut,lt,O){O===!0?s.vertexAttribIPointer(C,F,rt,ut,lt):s.vertexAttribPointer(C,F,rt,nt,ut,lt)}function L(C,F,rt,nt){T();const ut=nt.attributes,lt=rt.getAttributes(),O=F.defaultAttributeValues;for(const q in lt){const Z=lt[q];if(Z.location>=0){let Et=ut[q];if(Et===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),Et!==void 0){const N=Et.normalized,J=Et.itemSize,St=t.get(Et);if(St===void 0)continue;const yt=St.buffer,K=St.type,ft=St.bytesPerElement,vt=K===s.INT||K===s.UNSIGNED_INT||Et.gpuType===Od;if(Et.isInterleavedBufferAttribute){const wt=Et.data,Lt=wt.stride,Wt=Et.offset;if(wt.isInstancedInterleavedBuffer){for(let ae=0;ae<Z.locationSize;ae++)S(Z.location+ae,wt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let ae=0;ae<Z.locationSize;ae++)x(Z.location+ae);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ae=0;ae<Z.locationSize;ae++)R(Z.location+ae,J/Z.locationSize,K,N,Lt*ft,(Wt+J/Z.locationSize*ae)*ft,vt)}else{if(Et.isInstancedBufferAttribute){for(let wt=0;wt<Z.locationSize;wt++)S(Z.location+wt,Et.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let wt=0;wt<Z.locationSize;wt++)x(Z.location+wt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let wt=0;wt<Z.locationSize;wt++)R(Z.location+wt,J/Z.locationSize,K,N,J*ft,J/Z.locationSize*wt*ft,vt)}}else if(O!==void 0){const N=O[q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Z.location,N);break;case 3:s.vertexAttrib3fv(Z.location,N);break;case 4:s.vertexAttrib4fv(Z.location,N);break;default:s.vertexAttrib1fv(Z.location,N)}}}}U()}function G(){W();for(const C in r){const F=r[C];for(const rt in F){const nt=F[rt];for(const ut in nt)g(nt[ut].object),delete nt[ut];delete F[rt]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const rt in F){const nt=F[rt];for(const ut in nt)g(nt[ut].object),delete nt[ut];delete F[rt]}delete r[C.id]}function z(C){for(const F in r){const rt=r[F];if(rt[C.id]===void 0)continue;const nt=rt[C.id];for(const ut in nt)g(nt[ut].object),delete nt[ut];delete rt[C.id]}}function W(){D(),p=!0,u!==l&&(u=l,h(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:W,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:x,disableUnusedAttributes:U}}function VA(s,t,i){let r;function l(h){r=h}function u(h,g){s.drawArrays(r,h,g),i.update(g,r,1)}function p(h,g,v){v!==0&&(s.drawArraysInstanced(r,h,g,v),i.update(g,r,v))}function m(h,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,v);let y=0;for(let M=0;M<v;M++)y+=g[M];i.update(y,r,1)}function f(h,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)p(h[M],g[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T];for(let T=0;T<_.length;T++)i.update(M,r,_[T])}}this.setMode=l,this.render=u,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=f}function kA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function p(B){return!(B!==pi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(B){const z=B===Ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ea&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qi&&!z)}function f(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=f(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:f,textureFormatReadable:p,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:v,maxTextures:_,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:S,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:L,maxSamples:G}}function XA(s){const t=this;let i=null,r=0,l=!1,u=!1;const p=new pr,m=new oe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||r!==0||l;return l=_,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,y){const M=v.clippingPlanes,T=v.clipIntersection,x=v.clipShadows,S=s.get(v);if(!l||M===null||M.length===0||u&&!x)u?g(null):h();else{const U=u?0:r,R=U*4;let L=S.clippingState||null;f.value=L,L=g(M,_,R,y);for(let G=0;G!==R;++G)L[G]=i[G];S.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function h(){f.value!==i&&(f.value=i,f.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,y,M){const T=v!==null?v.length:0;let x=null;if(T!==0){if(x=f.value,M!==!0||x===null){const S=y+T*4,U=_.matrixWorldInverse;m.getNormalMatrix(U),(x===null||x.length<S)&&(x=new Float32Array(S));for(let R=0,L=y;R!==T;++R,L+=4)p.copy(v[R]).applyMatrix4(U,m),p.normal.toArray(x,L),x[L+3]=p.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}function WA(s){let t=new WeakMap;function i(p,m){return m===Zh?p.mapping=ws:m===Kh&&(p.mapping=Ds),p}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===Zh||m===Kh)if(t.has(p)){const f=t.get(p).texture;return i(f,p.mapping)}else{const f=p.image;if(f&&f.height>0){const h=new nT(f.height);return h.fromEquirectangularTexture(s,p),t.set(p,h),p.addEventListener("dispose",l),i(h.texture,p.mapping)}else return null}}return p}function l(p){const m=p.target;m.removeEventListener("dispose",l);const f=t.get(m);f!==void 0&&(t.delete(m),f.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}class qA extends Ov{constructor(t=-1,i=1,r=1,l=-1,u=.1,p=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=p,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,p){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,p=r+t,m=l+i,f=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,p=u+h*this.view.width,m-=g*this.view.offsetY,f=m-g*this.view.height}this.projectionMatrix.makeOrthographic(u,p,m,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const bs=4,u0=[.125,.215,.35,.446,.526,.582],_r=20,Nh=new qA,c0=new we;let Oh=null,Ph=0,Ih=0,zh=!1;const mr=(1+Math.sqrt(5))/2,Es=1/mr,f0=[new tt(-mr,Es,0),new tt(mr,Es,0),new tt(-Es,0,mr),new tt(Es,0,mr),new tt(0,mr,-Es),new tt(0,mr,Es),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class h0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oh,Ph,Ih),this._renderer.xr.enabled=zh,t.scissorTest=!1,Du(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ko,format:pi,colorSpace:Ga,depthBuffer:!1},l=d0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YA(u)),this._blurMaterial=jA(u,t,i)}return l}_compileMaterial(t){const i=new Ei(this._lodPlanes[0],t);this._renderer.compile(i,Nh)}_sceneToCubeUV(t,i,r,l){const m=new jn(90,1,i,r),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(c0),g.toneMapping=Ba,g.autoClear=!1;const y=new Vd({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),M=new Ei(new tl,y);let T=!1;const x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,T=!0):(y.color.copy(c0),T=!0);for(let S=0;S<6;S++){const U=S%3;U===0?(m.up.set(0,f[S],0),m.lookAt(h[S],0,0)):U===1?(m.up.set(0,0,f[S]),m.lookAt(0,h[S],0)):(m.up.set(0,f[S],0),m.lookAt(0,0,h[S]));const R=this._cubeSize;Du(l,U*R,S>2?R:0,R,R),g.setRenderTarget(l),T&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=_,g.autoClear=v,t.background=x}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ws||t.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const u=l?this._cubemapMaterial:this._equirectMaterial,p=new Ei(this._lodPlanes[0],u),m=u.uniforms;m.envMap.value=t;const f=this._cubeSize;Du(i,0,0,3*f,2*f),r.setRenderTarget(i),r.render(p,Nh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const p=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),m=f0[(l-u-1)%f0.length];this._blur(t,u-1,u,p,m)}i.autoClear=r}_blur(t,i,r,l,u){const p=this._pingPongRenderTarget;this._halfBlur(t,p,i,r,l,"latitudinal",u),this._halfBlur(p,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,p,m){const f=this._renderer,h=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ei(this._lodPlanes[l],h),_=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*_r-1),T=u/M,x=isFinite(u)?1+Math.floor(g*T):_r;x>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_r}`);const S=[];let U=0;for(let z=0;z<_r;++z){const W=z/T,D=Math.exp(-W*W/2);S.push(D),z===0?U+=D:z<x&&(U+=2*D)}for(let z=0;z<S.length;z++)S[z]=S[z]/U;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=S,_.latitudinal.value=p==="latitudinal",m&&(_.poleAxis.value=m);const{_lodMax:R}=this;_.dTheta.value=M,_.mipInt.value=R-r;const L=this._sizeLods[l],G=3*L*(l>R-bs?l-R+bs:0),B=4*(this._cubeSize-L);Du(i,G,B,3*L,2*L),f.setRenderTarget(i),f.render(v,Nh)}}function YA(s){const t=[],i=[],r=[];let l=s;const u=s-bs+1+u0.length;for(let p=0;p<u;p++){const m=Math.pow(2,l);i.push(m);let f=1/m;p>s-bs?f=u0[p-s+bs-1]:p===0&&(f=0),r.push(f);const h=1/(m-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,T=3,x=2,S=1,U=new Float32Array(T*M*y),R=new Float32Array(x*M*y),L=new Float32Array(S*M*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,W=B>2?0:-1,D=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];U.set(D,T*M*B),R.set(_,x*M*B);const C=[B,B,B,B,B,B];L.set(C,S*M*B)}const G=new Va;G.setAttribute("position",new Ti(U,T)),G.setAttribute("uv",new Ti(R,x)),G.setAttribute("faceIndex",new Ti(L,S)),t.push(G),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function d0(s,t,i){const r=new Mr(s,t,i);return r.texture.mapping=Qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Du(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function jA(s,t,i){const r=new Float32Array(_r),l=new tt(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function p0(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function m0(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Xd(){return`

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
	`}function ZA(s){let t=new WeakMap,i=null;function r(m){if(m&&m.isTexture){const f=m.mapping,h=f===Zh||f===Kh,g=f===ws||f===Ds;if(h||g){let v=t.get(m);const _=v!==void 0?v.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new h0(s)),v=h?i.fromEquirectangular(m,v):i.fromCubemap(m,v),v.texture.pmremVersion=m.pmremVersion,t.set(m,v),v.texture;if(v!==void 0)return v.texture;{const y=m.image;return h&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new h0(s)),v=h?i.fromEquirectangular(m):i.fromCubemap(m),v.texture.pmremVersion=m.pmremVersion,t.set(m,v),m.addEventListener("dispose",u),v.texture):null}}}return m}function l(m){let f=0;const h=6;for(let g=0;g<h;g++)m[g]!==void 0&&f++;return f===h}function u(m){const f=m.target;f.removeEventListener("dispose",u);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function p(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function KA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Xo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function QA(s,t,i,r){const l={},u=new WeakMap;function p(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);for(const M in _.morphAttributes){const T=_.morphAttributes[M];for(let x=0,S=T.length;x<S;x++)t.remove(T[x])}_.removeEventListener("dispose",p),delete l[_.id];const y=u.get(_);y&&(t.remove(y),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function m(v,_){return l[_.id]===!0||(_.addEventListener("dispose",p),l[_.id]=!0,i.memory.geometries++),_}function f(v){const _=v.attributes;for(const M in _)t.update(_[M],s.ARRAY_BUFFER);const y=v.morphAttributes;for(const M in y){const T=y[M];for(let x=0,S=T.length;x<S;x++)t.update(T[x],s.ARRAY_BUFFER)}}function h(v){const _=[],y=v.index,M=v.attributes.position;let T=0;if(y!==null){const U=y.array;T=y.version;for(let R=0,L=U.length;R<L;R+=3){const G=U[R+0],B=U[R+1],z=U[R+2];_.push(G,B,B,z,z,G)}}else if(M!==void 0){const U=M.array;T=M.version;for(let R=0,L=U.length/3-1;R<L;R+=3){const G=R+0,B=R+1,z=R+2;_.push(G,B,B,z,z,G)}}else return;const x=new(Av(_)?Lv:Uv)(_,1);x.version=T;const S=u.get(v);S&&t.remove(S),u.set(v,x)}function g(v){const _=u.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&h(v)}else h(v);return u.get(v)}return{get:m,update:f,getWireframeAttribute:g}}function JA(s,t,i){let r;function l(_){r=_}let u,p;function m(_){u=_.type,p=_.bytesPerElement}function f(_,y){s.drawElements(r,y,u,_*p),i.update(y,r,1)}function h(_,y,M){M!==0&&(s.drawElementsInstanced(r,y,u,_*p,M),i.update(y,r,M))}function g(_,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,_,0,M);let x=0;for(let S=0;S<M;S++)x+=y[S];i.update(x,r,1)}function v(_,y,M,T){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<_.length;S++)h(_[S]/p,y[S],T[S]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,u,_,0,T,0,M);let S=0;for(let U=0;U<M;U++)S+=y[U];for(let U=0;U<T.length;U++)i.update(S,r,T[U])}}this.setMode=l,this.setIndex=m,this.render=f,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function $A(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,p,m){switch(i.calls++,p){case s.TRIANGLES:i.triangles+=m*(u/3);break;case s.LINES:i.lines+=m*(u/2);break;case s.LINE_STRIP:i.lines+=m*(u-1);break;case s.LINE_LOOP:i.lines+=m*u;break;case s.POINTS:i.points+=m*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function t1(s,t,i){const r=new WeakMap,l=new He;function u(p,m,f){const h=p.morphTargetInfluences,g=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(m);if(_===void 0||_.count!==v){let C=function(){W.dispose(),r.delete(m),m.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const M=m.morphAttributes.position!==void 0,T=m.morphAttributes.normal!==void 0,x=m.morphAttributes.color!==void 0,S=m.morphAttributes.position||[],U=m.morphAttributes.normal||[],R=m.morphAttributes.color||[];let L=0;M===!0&&(L=1),T===!0&&(L=2),x===!0&&(L=3);let G=m.attributes.position.count*L,B=1;G>t.maxTextureSize&&(B=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*B*4*v),W=new Cv(z,G,B,v);W.type=Qi,W.needsUpdate=!0;const D=L*4;for(let F=0;F<v;F++){const rt=S[F],nt=U[F],ut=R[F],lt=G*B*4*F;for(let O=0;O<rt.count;O++){const q=O*D;M===!0&&(l.fromBufferAttribute(rt,O),z[lt+q+0]=l.x,z[lt+q+1]=l.y,z[lt+q+2]=l.z,z[lt+q+3]=0),T===!0&&(l.fromBufferAttribute(nt,O),z[lt+q+4]=l.x,z[lt+q+5]=l.y,z[lt+q+6]=l.z,z[lt+q+7]=0),x===!0&&(l.fromBufferAttribute(ut,O),z[lt+q+8]=l.x,z[lt+q+9]=l.y,z[lt+q+10]=l.z,z[lt+q+11]=ut.itemSize===4?l.w:1)}}_={count:v,texture:W,size:new ve(G,B)},r.set(m,_),m.addEventListener("dispose",C)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",p.morphTexture,i);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const T=m.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",T),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:u}}function e1(s,t,i,r){let l=new WeakMap;function u(f){const h=r.render.frame,g=f.geometry,v=t.get(f,g);if(l.get(v)!==h&&(t.update(v),l.set(v,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",m)===!1&&f.addEventListener("dispose",m),l.get(f)!==h&&(i.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&i.update(f.instanceColor,s.ARRAY_BUFFER),l.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;l.get(_)!==h&&(_.update(),l.set(_,h))}return v}function p(){l=new WeakMap}function m(f){const h=f.target;h.removeEventListener("dispose",m),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:u,dispose:p}}class zv extends In{constructor(t,i,r,l,u,p,m,f,h,g=Rs){if(g!==Rs&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Rs&&(r=yr),r===void 0&&g===Ls&&(r=Us),super(null,l,u,p,m,f,g,r,h),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=m!==void 0?m:ri,this.minFilter=f!==void 0?f:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Bv=new In,g0=new zv(1,1),Fv=new Cv,Hv=new FE,Gv=new Pv,_0=[],v0=[],S0=new Float32Array(16),x0=new Float32Array(9),y0=new Float32Array(4);function zs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=_0[l];if(u===void 0&&(u=new Float32Array(l),_0[l]=u),t!==0){r.toArray(u,0);for(let p=1,m=0;p!==t;++p)m+=i,s[p].toArray(u,m)}return u}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ec(s,t){let i=v0[t];i===void 0&&(i=new Int32Array(t),v0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function n1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function i1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function a1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function r1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function s1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;y0.set(r),s.uniformMatrix2fv(this.addr,!1,y0),dn(i,r)}}function o1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;x0.set(r),s.uniformMatrix3fv(this.addr,!1,x0),dn(i,r)}}function l1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;S0.set(r),s.uniformMatrix4fv(this.addr,!1,S0),dn(i,r)}}function u1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function c1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function f1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function h1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function d1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function p1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function m1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function g1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function _1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(g0.compareFunction=bv,u=g0):u=Bv,i.setTexture2D(t||u,l)}function v1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Hv,l)}function S1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Gv,l)}function x1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Fv,l)}function y1(s){switch(s){case 5126:return n1;case 35664:return i1;case 35665:return a1;case 35666:return r1;case 35674:return s1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return u1;case 35667:case 35671:return c1;case 35668:case 35672:return f1;case 35669:case 35673:return h1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return x1}}function M1(s,t){s.uniform1fv(this.addr,t)}function E1(s,t){const i=zs(t,this.size,2);s.uniform2fv(this.addr,i)}function T1(s,t){const i=zs(t,this.size,3);s.uniform3fv(this.addr,i)}function b1(s,t){const i=zs(t,this.size,4);s.uniform4fv(this.addr,i)}function A1(s,t){const i=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function R1(s,t){const i=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function C1(s,t){const i=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function w1(s,t){s.uniform1iv(this.addr,t)}function D1(s,t){s.uniform2iv(this.addr,t)}function U1(s,t){s.uniform3iv(this.addr,t)}function L1(s,t){s.uniform4iv(this.addr,t)}function N1(s,t){s.uniform1uiv(this.addr,t)}function O1(s,t){s.uniform2uiv(this.addr,t)}function P1(s,t){s.uniform3uiv(this.addr,t)}function I1(s,t){s.uniform4uiv(this.addr,t)}function z1(s,t,i){const r=this.cache,l=t.length,u=ec(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let p=0;p!==l;++p)i.setTexture2D(t[p]||Bv,u[p])}function B1(s,t,i){const r=this.cache,l=t.length,u=ec(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let p=0;p!==l;++p)i.setTexture3D(t[p]||Hv,u[p])}function F1(s,t,i){const r=this.cache,l=t.length,u=ec(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let p=0;p!==l;++p)i.setTextureCube(t[p]||Gv,u[p])}function H1(s,t,i){const r=this.cache,l=t.length,u=ec(i,l);hn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let p=0;p!==l;++p)i.setTexture2DArray(t[p]||Fv,u[p])}function G1(s){switch(s){case 5126:return M1;case 35664:return E1;case 35665:return T1;case 35666:return b1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return w1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return L1;case 5125:return N1;case 36294:return O1;case 36295:return P1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return H1}}class V1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=y1(i.type)}}class k1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=G1(i.type)}}class X1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,p=l.length;u!==p;++u){const m=l[u];m.setValue(t,i[m.id],r)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function M0(s,t){s.seq.push(t),s.map[t.id]=t}function W1(s,t,i){const r=s.name,l=r.length;for(Bh.lastIndex=0;;){const u=Bh.exec(r),p=Bh.lastIndex;let m=u[1];const f=u[2]==="]",h=u[3];if(f&&(m=m|0),h===void 0||h==="["&&p+2===l){M0(i,h===void 0?new V1(m,s,t):new k1(m,s,t));break}else{let v=i.map[m];v===void 0&&(v=new X1(m),M0(i,v)),i=v}}}class Hu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),p=t.getUniformLocation(i,u.name);W1(u,p,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,p=i.length;u!==p;++u){const m=i[u],f=r[m.id];f.needsUpdate!==!1&&m.setValue(t,f.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const p=t[l];p.id in i&&r.push(p)}return r}}function E0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const q1=37297;let Y1=0;function j1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let p=l;p<u;p++){const m=p+1;r.push(`${m===t?">":" "} ${m}: ${i[p]}`)}return r.join(`
`)}function Z1(s){const t=be.getPrimaries(be.workingColorSpace),i=be.getPrimaries(s);let r;switch(t===i?r="":t===qu&&i===Wu?r="LinearDisplayP3ToLinearSRGB":t===Wu&&i===qu&&(r="LinearSRGBToLinearDisplayP3"),s){case Ga:case Ju:return[r,"LinearTransferOETF"];case xi:case Hd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function T0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const p=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+j1(s.getShaderSource(t),p)}else return l}function K1(s,t){const i=Z1(t);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Q1(s,t){let i;switch(t){case hE:i="Linear";break;case dE:i="Reinhard";break;case pE:i="Cineon";break;case mE:i="ACESFilmic";break;case _E:i="AgX";break;case vE:i="Neutral";break;case gE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uu=new tt;function J1(){be.getLuminanceCoefficients(Uu);const s=Uu.x.toFixed(4),t=Uu.y.toFixed(4),i=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function tR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function eR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),p=u.name;let m=1;u.type===s.FLOAT_MAT2&&(m=2),u.type===s.FLOAT_MAT3&&(m=3),u.type===s.FLOAT_MAT4&&(m=4),i[p]={type:u.type,location:s.getAttribLocation(t,p),locationSize:m}}return i}function ko(s){return s!==""}function b0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function A0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(s){return s.replace(nR,aR)}const iR=new Map;function aR(s,t){let i=se[t];if(i===void 0){const r=iR.get(t);if(r!==void 0)i=se[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ad(i)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R0(s){return s.replace(rR,sR)}function sR(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function C0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function oR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===BM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zi&&(t="SHADOWMAP_TYPE_VSM"),t}function lR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ws:case Ds:t="ENVMAP_TYPE_CUBE";break;case Qu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function cR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dv:t="ENVMAP_BLENDING_MULTIPLY";break;case cE:t="ENVMAP_BLENDING_MIX";break;case fE:t="ENVMAP_BLENDING_ADD";break}return t}function fR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function hR(s,t,i,r){const l=s.getContext(),u=i.defines;let p=i.vertexShader,m=i.fragmentShader;const f=oR(i),h=lR(i),g=uR(i),v=cR(i),_=fR(i),y=$1(i),M=tR(u),T=l.createProgram();let x,S,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(ko).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(ko).join(`
`),S.length>0&&(S+=`
`)):(x=[C0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+f:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),S=[C0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+f:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?se.tonemapping_pars_fragment:"",i.toneMapping!==Ba?Q1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,K1("linearToOutputTexel",i.outputColorSpace),J1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),p=Ad(p),p=b0(p,i),p=A0(p,i),m=Ad(m),m=b0(m,i),m=A0(m,i),p=R0(p),m=R0(m),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",i.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const R=U+x+p,L=U+S+m,G=E0(l,l.VERTEX_SHADER,R),B=E0(l,l.FRAGMENT_SHADER,L);l.attachShader(T,G),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(F){if(s.debug.checkShaderErrors){const rt=l.getProgramInfoLog(T).trim(),nt=l.getShaderInfoLog(G).trim(),ut=l.getShaderInfoLog(B).trim();let lt=!0,O=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,G,B);else{const q=T0(l,G,"vertex"),Z=T0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+q+`
`+Z)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(nt===""||ut==="")&&(O=!1);O&&(F.diagnostics={runnable:lt,programLog:rt,vertexShader:{log:nt,prefix:x},fragmentShader:{log:ut,prefix:S}})}l.deleteShader(G),l.deleteShader(B),W=new Hu(l,T),D=eR(l,T)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,q1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Y1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=B,this}let dR=0;class pR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),p=this._getShaderCacheForMaterial(t);return p.has(l)===!1&&(p.add(l),l.usedTimes++),p.has(u)===!1&&(p.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new mR(t),i.set(t,r)),r}}class mR{constructor(t){this.id=dR++,this.code=t,this.usedTimes=0}}function gR(s,t,i,r,l,u,p){const m=new wv,f=new pR,h=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let y=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return h.add(D),D===0?"uv":`uv${D}`}function x(D,C,F,rt,nt){const ut=rt.fog,lt=nt.geometry,O=D.isMeshStandardMaterial?rt.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),Z=q&&q.mapping===Qu?q.image.height:null,Et=M[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const N=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=N!==void 0?N.length:0;let St=0;lt.morphAttributes.position!==void 0&&(St=1),lt.morphAttributes.normal!==void 0&&(St=2),lt.morphAttributes.color!==void 0&&(St=3);let yt,K,ft,vt;if(Et){const me=yi[Et];yt=me.vertexShader,K=me.fragmentShader}else yt=D.vertexShader,K=D.fragmentShader,f.update(D),ft=f.getVertexShaderID(D),vt=f.getFragmentShaderID(D);const wt=s.getRenderTarget(),Lt=nt.isInstancedMesh===!0,Wt=nt.isBatchedMesh===!0,ae=!!D.map,Ne=!!D.matcap,H=!!q,Ge=!!D.aoMap,Se=!!D.lightMap,Te=!!D.bumpMap,kt=!!D.normalMap,Me=!!D.displacementMap,te=!!D.emissiveMap,ee=!!D.metalnessMap,P=!!D.roughnessMap,A=D.anisotropy>0,ot=D.clearcoat>0,_t=D.dispersion>0,Mt=D.iridescence>0,xt=D.sheen>0,Vt=D.transmission>0,At=A&&!!D.anisotropyMap,Ut=ot&&!!D.clearcoatMap,Xt=ot&&!!D.clearcoatNormalMap,Rt=ot&&!!D.clearcoatRoughnessMap,Pt=Mt&&!!D.iridescenceMap,de=Mt&&!!D.iridescenceThicknessMap,Zt=xt&&!!D.sheenColorMap,Ot=xt&&!!D.sheenRoughnessMap,qt=!!D.specularMap,ne=!!D.specularColorMap,Ae=!!D.specularIntensityMap,X=Vt&&!!D.transmissionMap,bt=Vt&&!!D.thicknessMap,pt=!!D.gradientMap,gt=!!D.alphaMap,Ct=D.alphaTest>0,Qt=!!D.alphaHash,pe=!!D.extensions;let We=Ba;D.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(We=s.toneMapping);const tn={shaderID:Et,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:K,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:vt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Wt,batchingColor:Wt&&nt._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&nt.instanceColor!==null,instancingMorph:Lt&&nt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Ga,alphaToCoverage:!!D.alphaToCoverage,map:ae,matcap:Ne,envMap:H,envMapMode:H&&q.mapping,envMapCubeUVHeight:Z,aoMap:Ge,lightMap:Se,bumpMap:Te,normalMap:kt,displacementMap:_&&Me,emissiveMap:te,normalMapObjectSpace:kt&&D.normalMapType===EE,normalMapTangentSpace:kt&&D.normalMapType===ME,metalnessMap:ee,roughnessMap:P,anisotropy:A,anisotropyMap:At,clearcoat:ot,clearcoatMap:Ut,clearcoatNormalMap:Xt,clearcoatRoughnessMap:Rt,dispersion:_t,iridescence:Mt,iridescenceMap:Pt,iridescenceThicknessMap:de,sheen:xt,sheenColorMap:Zt,sheenRoughnessMap:Ot,specularMap:qt,specularColorMap:ne,specularIntensityMap:Ae,transmission:Vt,transmissionMap:X,thicknessMap:bt,gradientMap:pt,opaque:D.transparent===!1&&D.blending===As&&D.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Qt,combine:D.combine,mapUv:ae&&T(D.map.channel),aoMapUv:Ge&&T(D.aoMap.channel),lightMapUv:Se&&T(D.lightMap.channel),bumpMapUv:Te&&T(D.bumpMap.channel),normalMapUv:kt&&T(D.normalMap.channel),displacementMapUv:Me&&T(D.displacementMap.channel),emissiveMapUv:te&&T(D.emissiveMap.channel),metalnessMapUv:ee&&T(D.metalnessMap.channel),roughnessMapUv:P&&T(D.roughnessMap.channel),anisotropyMapUv:At&&T(D.anisotropyMap.channel),clearcoatMapUv:Ut&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(D.sheenRoughnessMap.channel),specularMapUv:qt&&T(D.specularMap.channel),specularColorMapUv:ne&&T(D.specularColorMap.channel),specularIntensityMapUv:Ae&&T(D.specularIntensityMap.channel),transmissionMapUv:X&&T(D.transmissionMap.channel),thicknessMapUv:bt&&T(D.thicknessMap.channel),alphaMapUv:gt&&T(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(kt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!lt.attributes.uv&&(ae||gt),fog:!!ut,useFog:D.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:nt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:St,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:ae&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ki,flipSided:D.side===Pn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:pe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&D.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return tn.vertexUv1s=h.has(1),tn.vertexUv2s=h.has(2),tn.vertexUv3s=h.has(3),h.clear(),tn}function S(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)C.push(F),C.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(U(C,D),R(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function U(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function R(D,C){m.disableAll(),C.supportsVertexTextures&&m.enable(0),C.instancing&&m.enable(1),C.instancingColor&&m.enable(2),C.instancingMorph&&m.enable(3),C.matcap&&m.enable(4),C.envMap&&m.enable(5),C.normalMapObjectSpace&&m.enable(6),C.normalMapTangentSpace&&m.enable(7),C.clearcoat&&m.enable(8),C.iridescence&&m.enable(9),C.alphaTest&&m.enable(10),C.vertexColors&&m.enable(11),C.vertexAlphas&&m.enable(12),C.vertexUv1s&&m.enable(13),C.vertexUv2s&&m.enable(14),C.vertexUv3s&&m.enable(15),C.vertexTangents&&m.enable(16),C.anisotropy&&m.enable(17),C.alphaHash&&m.enable(18),C.batching&&m.enable(19),C.dispersion&&m.enable(20),C.batchingColor&&m.enable(21),D.push(m.mask),m.disableAll(),C.fog&&m.enable(0),C.useFog&&m.enable(1),C.flatShading&&m.enable(2),C.logarithmicDepthBuffer&&m.enable(3),C.skinning&&m.enable(4),C.morphTargets&&m.enable(5),C.morphNormals&&m.enable(6),C.morphColors&&m.enable(7),C.premultipliedAlpha&&m.enable(8),C.shadowMapEnabled&&m.enable(9),C.doubleSided&&m.enable(10),C.flipSided&&m.enable(11),C.useDepthPacking&&m.enable(12),C.dithering&&m.enable(13),C.transmission&&m.enable(14),C.sheen&&m.enable(15),C.opaque&&m.enable(16),C.pointsUvs&&m.enable(17),C.decodeVideoTexture&&m.enable(18),C.alphaToCoverage&&m.enable(19),D.push(m.mask)}function L(D){const C=M[D.type];let F;if(C){const rt=yi[C];F=JE.clone(rt.uniforms)}else F=D.uniforms;return F}function G(D,C){let F;for(let rt=0,nt=g.length;rt<nt;rt++){const ut=g[rt];if(ut.cacheKey===C){F=ut,++F.usedTimes;break}}return F===void 0&&(F=new hR(s,C,D,u),g.push(F)),F}function B(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function z(D){f.remove(D)}function W(){f.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:L,acquireProgram:G,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:W}}function _R(){let s=new WeakMap;function t(p){return s.has(p)}function i(p){let m=s.get(p);return m===void 0&&(m={},s.set(p,m)),m}function r(p){s.delete(p)}function l(p,m,f){s.get(p)[m]=f}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function vR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function w0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function D0(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function p(v,_,y,M,T,x){let S=s[t];return S===void 0?(S={id:v.id,object:v,geometry:_,material:y,groupOrder:M,renderOrder:v.renderOrder,z:T,group:x},s[t]=S):(S.id=v.id,S.object=v,S.geometry=_,S.material=y,S.groupOrder=M,S.renderOrder=v.renderOrder,S.z=T,S.group=x),t++,S}function m(v,_,y,M,T,x){const S=p(v,_,y,M,T,x);y.transmission>0?r.push(S):y.transparent===!0?l.push(S):i.push(S)}function f(v,_,y,M,T,x){const S=p(v,_,y,M,T,x);y.transmission>0?r.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function h(v,_){i.length>1&&i.sort(v||vR),r.length>1&&r.sort(_||w0),l.length>1&&l.sort(_||w0)}function g(){for(let v=t,_=s.length;v<_;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:f,finish:g,sort:h}}function SR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let p;return u===void 0?(p=new D0,s.set(r,[p])):l>=u.length?(p=new D0,u.push(p)):p=u[l],p}function i(){s=new WeakMap}return{get:t,dispose:i}}function xR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new we};break;case"SpotLight":i={position:new tt,direction:new tt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function yR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let MR=0;function ER(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function TR(s){const t=new xR,i=yR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new tt);const l=new tt,u=new $e,p=new $e;function m(h){let g=0,v=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,M=0,T=0,x=0,S=0,U=0,R=0,L=0,G=0,B=0,z=0;h.sort(ER);for(let D=0,C=h.length;D<C;D++){const F=h[D],rt=F.color,nt=F.intensity,ut=F.distance,lt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=rt.r*nt,v+=rt.g*nt,_+=rt.b*nt;else if(F.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(F.sh.coefficients[O],nt);z++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const q=F.shadow,Z=i.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=F.shadow.matrix,U++}r.directional[y]=O,y++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(rt).multiplyScalar(nt),O.distance=ut,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,r.spot[T]=O;const q=F.shadow;if(F.map&&(r.spotLightMap[G]=F.map,G++,q.updateMatrices(F),F.castShadow&&B++),r.spotLightMatrix[T]=q.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,r.spotShadow[T]=Z,r.spotShadowMap[T]=lt,L++}T++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(rt).multiplyScalar(nt),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=O,x++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const q=F.shadow,Z=i.get(F);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,r.pointShadow[M]=Z,r.pointShadowMap[M]=lt,r.pointShadowMatrix[M]=F.shadow.matrix,R++}r.point[M]=O,M++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar(nt),O.groundColor.copy(F.groundColor).multiplyScalar(nt),r.hemi[S]=O,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==y||W.pointLength!==M||W.spotLength!==T||W.rectAreaLength!==x||W.hemiLength!==S||W.numDirectionalShadows!==U||W.numPointShadows!==R||W.numSpotShadows!==L||W.numSpotMaps!==G||W.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=x,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=L+G-B,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,W.directionalLength=y,W.pointLength=M,W.spotLength=T,W.rectAreaLength=x,W.hemiLength=S,W.numDirectionalShadows=U,W.numPointShadows=R,W.numSpotShadows=L,W.numSpotMaps=G,W.numLightProbes=z,r.version=MR++)}function f(h,g){let v=0,_=0,y=0,M=0,T=0;const x=g.matrixWorldInverse;for(let S=0,U=h.length;S<U;S++){const R=h[S];if(R.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),v++}else if(R.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),y++}else if(R.isRectAreaLight){const L=r.rectArea[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),p.identity(),u.copy(R.matrixWorld),u.premultiply(x),p.extractRotation(u),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(p),L.halfHeight.applyMatrix4(p),M++}else if(R.isPointLight){const L=r.point[_];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(x),_++}else if(R.isHemisphereLight){const L=r.hemi[T];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(x),T++}}}return{setup:m,setupView:f,state:r}}function U0(s){const t=new TR(s),i=[],r=[];function l(g){h.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function p(g){r.push(g)}function m(){t.setup(i)}function f(g){t.setupView(i,g)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:m,setupLightsView:f,pushLight:u,pushShadow:p}}function bR(s){let t=new WeakMap;function i(l,u=0){const p=t.get(l);let m;return p===void 0?(m=new U0(s),t.set(l,[m])):u>=p.length?(m=new U0(s),p.push(m)):m=p[u],m}function r(){t=new WeakMap}return{get:i,dispose:r}}class AR extends $u{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class RR extends $u{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const CR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
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
}`;function DR(s,t,i){let r=new kd;const l=new ve,u=new ve,p=new He,m=new AR({depthPacking:yE}),f=new RR,h={},g=i.maxTextureSize,v={[Fa]:Pn,[Pn]:Fa,[Ki]:Ki},_=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:CR,fragmentShader:wR}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new Va;M.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ei(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let S=this.type;this.render=function(B,z,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),rt=s.state;rt.setBlending(za),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const nt=S!==Zi&&this.type===Zi,ut=S===Zi&&this.type!==Zi;for(let lt=0,O=B.length;lt<O;lt++){const q=B[lt],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Et=Z.getFrameExtents();if(l.multiply(Et),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Et.x),l.x=u.x*Et.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Et.y),l.y=u.y*Et.y,Z.mapSize.y=u.y)),Z.map===null||nt===!0||ut===!0){const J=this.type!==Zi?{minFilter:ri,magFilter:ri}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Mr(l.x,l.y,J),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const N=Z.getViewportCount();for(let J=0;J<N;J++){const St=Z.getViewport(J);p.set(u.x*St.x,u.y*St.y,u.x*St.z,u.y*St.w),rt.viewport(p),Z.updateMatrices(q,J),r=Z.getFrustum(),L(z,W,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===Zi&&U(Z,W),Z.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(D,C,F)};function U(B,z){const W=t.update(T);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Mr(l.x,l.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(z,null,W,_,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(z,null,W,y,T,null)}function R(B,z,W,D){let C=null;const F=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)C=F;else if(C=W.isPointLight===!0?f:m,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const rt=C.uuid,nt=z.uuid;let ut=h[rt];ut===void 0&&(ut={},h[rt]=ut);let lt=ut[nt];lt===void 0&&(lt=C.clone(),ut[nt]=lt,z.addEventListener("dispose",G)),C=lt}if(C.visible=z.visible,C.wireframe=z.wireframe,D===Zi?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const rt=s.properties.get(C);rt.light=W}return C}function L(B,z,W,D,C){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Zi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const nt=t.update(B),ut=B.material;if(Array.isArray(ut)){const lt=nt.groups;for(let O=0,q=lt.length;O<q;O++){const Z=lt[O],Et=ut[Z.materialIndex];if(Et&&Et.visible){const N=R(B,Et,D,C);B.onBeforeShadow(s,B,z,W,nt,N,Z),s.renderBufferDirect(W,null,nt,N,B,Z),B.onAfterShadow(s,B,z,W,nt,N,Z)}}}else if(ut.visible){const lt=R(B,ut,D,C);B.onBeforeShadow(s,B,z,W,nt,lt,null),s.renderBufferDirect(W,null,nt,lt,B,null),B.onAfterShadow(s,B,z,W,nt,lt,null)}}const rt=B.children;for(let nt=0,ut=rt.length;nt<ut;nt++)L(rt[nt],z,W,D,C)}function G(B){B.target.removeEventListener("dispose",G);for(const W in h){const D=h[W],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function UR(s){function t(){let X=!1;const bt=new He;let pt=null;const gt=new He(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!X&&(s.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,Qt,pe,We,tn){tn===!0&&(Ct*=We,Qt*=We,pe*=We),bt.set(Ct,Qt,pe,We),gt.equals(bt)===!1&&(s.clearColor(Ct,Qt,pe,We),gt.copy(bt))},reset:function(){X=!1,pt=null,gt.set(-1,0,0,0)}}}function i(){let X=!1,bt=null,pt=null,gt=null;return{setTest:function(Ct){Ct?vt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(Ct){bt!==Ct&&!X&&(s.depthMask(Ct),bt=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case iE:s.depthFunc(s.NEVER);break;case aE:s.depthFunc(s.ALWAYS);break;case rE:s.depthFunc(s.LESS);break;case ku:s.depthFunc(s.LEQUAL);break;case sE:s.depthFunc(s.EQUAL);break;case oE:s.depthFunc(s.GEQUAL);break;case lE:s.depthFunc(s.GREATER);break;case uE:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=Ct}},setLocked:function(Ct){X=Ct},setClear:function(Ct){gt!==Ct&&(s.clearDepth(Ct),gt=Ct)},reset:function(){X=!1,bt=null,pt=null,gt=null}}}function r(){let X=!1,bt=null,pt=null,gt=null,Ct=null,Qt=null,pe=null,We=null,tn=null;return{setTest:function(me){X||(me?vt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(me){bt!==me&&!X&&(s.stencilMask(me),bt=me)},setFunc:function(me,Zn,Kn){(pt!==me||gt!==Zn||Ct!==Kn)&&(s.stencilFunc(me,Zn,Kn),pt=me,gt=Zn,Ct=Kn)},setOp:function(me,Zn,Kn){(Qt!==me||pe!==Zn||We!==Kn)&&(s.stencilOp(me,Zn,Kn),Qt=me,pe=Zn,We=Kn)},setLocked:function(me){X=me},setClear:function(me){tn!==me&&(s.clearStencil(me),tn=me)},reset:function(){X=!1,bt=null,pt=null,gt=null,Ct=null,Qt=null,pe=null,We=null,tn=null}}}const l=new t,u=new i,p=new r,m=new WeakMap,f=new WeakMap;let h={},g={},v=new WeakMap,_=[],y=null,M=!1,T=null,x=null,S=null,U=null,R=null,L=null,G=null,B=new we(0,0,0),z=0,W=!1,D=null,C=null,F=null,rt=null,nt=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,O=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(q)[1]),lt=O>=1):q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),lt=O>=2);let Z=null,Et={};const N=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),St=new He().fromArray(N),yt=new He().fromArray(J);function K(X,bt,pt,gt){const Ct=new Uint8Array(4),Qt=s.createTexture();s.bindTexture(X,Qt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<pt;pe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Ct):s.texImage2D(bt+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ct);return Qt}const ft={};ft[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),p.setClear(0),vt(s.DEPTH_TEST),u.setFunc(ku),Te(!1),kt(z_),vt(s.CULL_FACE),Ge(za);function vt(X){h[X]!==!0&&(s.enable(X),h[X]=!0)}function wt(X){h[X]!==!1&&(s.disable(X),h[X]=!1)}function Lt(X,bt){return g[X]!==bt?(s.bindFramebuffer(X,bt),g[X]=bt,X===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=bt),X===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(X,bt){let pt=_,gt=!1;if(X){pt=v.get(bt),pt===void 0&&(pt=[],v.set(bt,pt));const Ct=X.textures;if(pt.length!==Ct.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let Qt=0,pe=Ct.length;Qt<pe;Qt++)pt[Qt]=s.COLOR_ATTACHMENT0+Qt;pt.length=Ct.length,gt=!0}}else pt[0]!==s.BACK&&(pt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(pt)}function ae(X){return y!==X?(s.useProgram(X),y=X,!0):!1}const Ne={[gr]:s.FUNC_ADD,[HM]:s.FUNC_SUBTRACT,[GM]:s.FUNC_REVERSE_SUBTRACT};Ne[VM]=s.MIN,Ne[kM]=s.MAX;const H={[XM]:s.ZERO,[WM]:s.ONE,[qM]:s.SRC_COLOR,[Yh]:s.SRC_ALPHA,[JM]:s.SRC_ALPHA_SATURATE,[KM]:s.DST_COLOR,[jM]:s.DST_ALPHA,[YM]:s.ONE_MINUS_SRC_COLOR,[jh]:s.ONE_MINUS_SRC_ALPHA,[QM]:s.ONE_MINUS_DST_COLOR,[ZM]:s.ONE_MINUS_DST_ALPHA,[$M]:s.CONSTANT_COLOR,[tE]:s.ONE_MINUS_CONSTANT_COLOR,[eE]:s.CONSTANT_ALPHA,[nE]:s.ONE_MINUS_CONSTANT_ALPHA};function Ge(X,bt,pt,gt,Ct,Qt,pe,We,tn,me){if(X===za){M===!0&&(wt(s.BLEND),M=!1);return}if(M===!1&&(vt(s.BLEND),M=!0),X!==FM){if(X!==T||me!==W){if((x!==gr||R!==gr)&&(s.blendEquation(s.FUNC_ADD),x=gr,R=gr),me)switch(X){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B_:s.blendFunc(s.ONE,s.ONE);break;case F_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case H_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case F_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case H_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}S=null,U=null,L=null,G=null,B.set(0,0,0),z=0,T=X,W=me}return}Ct=Ct||bt,Qt=Qt||pt,pe=pe||gt,(bt!==x||Ct!==R)&&(s.blendEquationSeparate(Ne[bt],Ne[Ct]),x=bt,R=Ct),(pt!==S||gt!==U||Qt!==L||pe!==G)&&(s.blendFuncSeparate(H[pt],H[gt],H[Qt],H[pe]),S=pt,U=gt,L=Qt,G=pe),(We.equals(B)===!1||tn!==z)&&(s.blendColor(We.r,We.g,We.b,tn),B.copy(We),z=tn),T=X,W=!1}function Se(X,bt){X.side===Ki?wt(s.CULL_FACE):vt(s.CULL_FACE);let pt=X.side===Pn;bt&&(pt=!pt),Te(pt),X.blending===As&&X.transparent===!1?Ge(za):Ge(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const gt=X.stencilWrite;p.setTest(gt),gt&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),te(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(X){D!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),D=X)}function kt(X){X!==IM?(vt(s.CULL_FACE),X!==C&&(X===z_?s.cullFace(s.BACK):X===zM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),C=X}function Me(X){X!==F&&(lt&&s.lineWidth(X),F=X)}function te(X,bt,pt){X?(vt(s.POLYGON_OFFSET_FILL),(rt!==bt||nt!==pt)&&(s.polygonOffset(bt,pt),rt=bt,nt=pt)):wt(s.POLYGON_OFFSET_FILL)}function ee(X){X?vt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function P(X){X===void 0&&(X=s.TEXTURE0+ut-1),Z!==X&&(s.activeTexture(X),Z=X)}function A(X,bt,pt){pt===void 0&&(Z===null?pt=s.TEXTURE0+ut-1:pt=Z);let gt=Et[pt];gt===void 0&&(gt={type:void 0,texture:void 0},Et[pt]=gt),(gt.type!==X||gt.texture!==bt)&&(Z!==pt&&(s.activeTexture(pt),Z=pt),s.bindTexture(X,bt||ft[X]),gt.type=X,gt.texture=bt)}function ot(){const X=Et[Z];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _t(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(X){St.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),St.copy(X))}function Ot(X){yt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),yt.copy(X))}function qt(X,bt){let pt=f.get(bt);pt===void 0&&(pt=new WeakMap,f.set(bt,pt));let gt=pt.get(X);gt===void 0&&(gt=s.getUniformBlockIndex(bt,X.name),pt.set(X,gt))}function ne(X,bt){const gt=f.get(bt).get(X);m.get(bt)!==gt&&(s.uniformBlockBinding(bt,gt,X.__bindingPointIndex),m.set(bt,gt))}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,Et={},g={},v=new WeakMap,_=[],y=null,M=!1,T=null,x=null,S=null,U=null,R=null,L=null,G=null,B=new we(0,0,0),z=0,W=!1,D=null,C=null,F=null,rt=null,nt=null,St.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),p.reset()}return{buffers:{color:l,depth:u,stencil:p},enable:vt,disable:wt,bindFramebuffer:Lt,drawBuffers:Wt,useProgram:ae,setBlending:Ge,setMaterial:Se,setFlipSided:Te,setCullFace:kt,setLineWidth:Me,setPolygonOffset:te,setScissorTest:ee,activeTexture:P,bindTexture:A,unbindTexture:ot,compressedTexImage2D:_t,compressedTexImage3D:Mt,texImage2D:Pt,texImage3D:de,updateUBOMapping:qt,uniformBlockBinding:ne,texStorage2D:Xt,texStorage3D:Rt,texSubImage2D:xt,texSubImage3D:Vt,compressedTexSubImage2D:At,compressedTexSubImage3D:Ut,scissor:Zt,viewport:Ot,reset:Ae}}function L0(s,t,i,r){const l=LR(r);switch(i){case vv:return s*t;case xv:return s*t;case yv:return s*t*2;case Mv:return s*t/l.components*l.byteLength;case zd:return s*t/l.components*l.byteLength;case Ev:return s*t*2/l.components*l.byteLength;case Bd:return s*t*2/l.components*l.byteLength;case Sv:return s*t*3/l.components*l.byteLength;case pi:return s*t*4/l.components*l.byteLength;case Fd:return s*t*4/l.components*l.byteLength;case Pu:case Iu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zu:case Bu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case td:case nd:return Math.max(s,16)*Math.max(t,8)/4;case $h:case ed:return Math.max(s,8)*Math.max(t,8)/2;case id:case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fu:case xd:case yd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Tv:case Md:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ed:case Td:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LR(s){switch(s){case ea:case mv:return{byteLength:1,components:1};case qo:case gv:case Ko:return{byteLength:2,components:1};case Pd:case Id:return{byteLength:2,components:4};case yr:case Od:case Qi:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function NR(s,t,i,r,l,u,p){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ve,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return y?new OffscreenCanvas(P,A):ju("canvas")}function T(P,A,ot){let _t=1;const Mt=ee(P);if((Mt.width>ot||Mt.height>ot)&&(_t=ot/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const xt=Math.floor(_t*Mt.width),Vt=Math.floor(_t*Mt.height);v===void 0&&(v=M(xt,Vt));const At=A?M(xt,Vt):v;return At.width=xt,At.height=Vt,At.getContext("2d").drawImage(P,0,0,xt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+xt+"x"+Vt+")."),At}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function x(P){return P.generateMipmaps&&P.minFilter!==ri&&P.minFilter!==di}function S(P){s.generateMipmap(P)}function U(P,A,ot,_t,Mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xt=A;if(A===s.RED&&(ot===s.FLOAT&&(xt=s.R32F),ot===s.HALF_FLOAT&&(xt=s.R16F),ot===s.UNSIGNED_BYTE&&(xt=s.R8)),A===s.RED_INTEGER&&(ot===s.UNSIGNED_BYTE&&(xt=s.R8UI),ot===s.UNSIGNED_SHORT&&(xt=s.R16UI),ot===s.UNSIGNED_INT&&(xt=s.R32UI),ot===s.BYTE&&(xt=s.R8I),ot===s.SHORT&&(xt=s.R16I),ot===s.INT&&(xt=s.R32I)),A===s.RG&&(ot===s.FLOAT&&(xt=s.RG32F),ot===s.HALF_FLOAT&&(xt=s.RG16F),ot===s.UNSIGNED_BYTE&&(xt=s.RG8)),A===s.RG_INTEGER&&(ot===s.UNSIGNED_BYTE&&(xt=s.RG8UI),ot===s.UNSIGNED_SHORT&&(xt=s.RG16UI),ot===s.UNSIGNED_INT&&(xt=s.RG32UI),ot===s.BYTE&&(xt=s.RG8I),ot===s.SHORT&&(xt=s.RG16I),ot===s.INT&&(xt=s.RG32I)),A===s.RGB&&ot===s.UNSIGNED_INT_5_9_9_9_REV&&(xt=s.RGB9_E5),A===s.RGBA){const Vt=Mt?Xu:be.getTransfer(_t);ot===s.FLOAT&&(xt=s.RGBA32F),ot===s.HALF_FLOAT&&(xt=s.RGBA16F),ot===s.UNSIGNED_BYTE&&(xt=Vt===Fe?s.SRGB8_ALPHA8:s.RGBA8),ot===s.UNSIGNED_SHORT_4_4_4_4&&(xt=s.RGBA4),ot===s.UNSIGNED_SHORT_5_5_5_1&&(xt=s.RGB5_A1)}return(xt===s.R16F||xt===s.R32F||xt===s.RG16F||xt===s.RG32F||xt===s.RGBA16F||xt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function R(P,A){let ot;return P?A===null||A===yr||A===Us?ot=s.DEPTH24_STENCIL8:A===Qi?ot=s.DEPTH32F_STENCIL8:A===qo&&(ot=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===yr||A===Us?ot=s.DEPTH_COMPONENT24:A===Qi?ot=s.DEPTH_COMPONENT32F:A===qo&&(ot=s.DEPTH_COMPONENT16),ot}function L(P,A){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==ri&&P.minFilter!==di?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function G(P){const A=P.target;A.removeEventListener("dispose",G),z(A),A.isVideoTexture&&g.delete(A)}function B(P){const A=P.target;A.removeEventListener("dispose",B),D(A)}function z(P){const A=r.get(P);if(A.__webglInit===void 0)return;const ot=P.source,_t=_.get(ot);if(_t){const Mt=_t[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&W(P),Object.keys(_t).length===0&&_.delete(ot)}r.remove(P)}function W(P){const A=r.get(P);s.deleteTexture(A.__webglTexture);const ot=P.source,_t=_.get(ot);delete _t[A.__cacheKey],p.memory.textures--}function D(P){const A=r.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let Mt=0;Mt<A.__webglFramebuffer[_t].length;Mt++)s.deleteFramebuffer(A.__webglFramebuffer[_t][Mt]);else s.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)s.deleteFramebuffer(A.__webglFramebuffer[_t]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ot=P.textures;for(let _t=0,Mt=ot.length;_t<Mt;_t++){const xt=r.get(ot[_t]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),p.memory.textures--),r.remove(ot[_t])}r.remove(P)}let C=0;function F(){C=0}function rt(){const P=C;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),C+=1,P}function nt(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function ut(P,A){const ot=r.get(P);if(P.isVideoTexture&&Me(P),P.isRenderTargetTexture===!1&&P.version>0&&ot.__version!==P.version){const _t=P.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(ot,P,A);return}}i.bindTexture(s.TEXTURE_2D,ot.__webglTexture,s.TEXTURE0+A)}function lt(P,A){const ot=r.get(P);if(P.version>0&&ot.__version!==P.version){yt(ot,P,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ot.__webglTexture,s.TEXTURE0+A)}function O(P,A){const ot=r.get(P);if(P.version>0&&ot.__version!==P.version){yt(ot,P,A);return}i.bindTexture(s.TEXTURE_3D,ot.__webglTexture,s.TEXTURE0+A)}function q(P,A){const ot=r.get(P);if(P.version>0&&ot.__version!==P.version){K(ot,P,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture,s.TEXTURE0+A)}const Z={[Qh]:s.REPEAT,[vr]:s.CLAMP_TO_EDGE,[Jh]:s.MIRRORED_REPEAT},Et={[ri]:s.NEAREST,[SE]:s.NEAREST_MIPMAP_NEAREST,[cu]:s.NEAREST_MIPMAP_LINEAR,[di]:s.LINEAR,[hh]:s.LINEAR_MIPMAP_NEAREST,[Sr]:s.LINEAR_MIPMAP_LINEAR},N={[TE]:s.NEVER,[DE]:s.ALWAYS,[bE]:s.LESS,[bv]:s.LEQUAL,[AE]:s.EQUAL,[wE]:s.GEQUAL,[RE]:s.GREATER,[CE]:s.NOTEQUAL};function J(P,A){if(A.type===Qi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===di||A.magFilter===hh||A.magFilter===cu||A.magFilter===Sr||A.minFilter===di||A.minFilter===hh||A.minFilter===cu||A.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Z[A.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Z[A.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Z[A.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Et[A.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Et[A.minFilter]),A.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ri||A.minFilter!==cu&&A.minFilter!==Sr||A.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ot=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function St(P,A){let ot=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",G));const _t=A.source;let Mt=_.get(_t);Mt===void 0&&(Mt={},_.set(_t,Mt));const xt=nt(A);if(xt!==P.__cacheKey){Mt[xt]===void 0&&(Mt[xt]={texture:s.createTexture(),usedTimes:0},p.memory.textures++,ot=!0),Mt[xt].usedTimes++;const Vt=Mt[P.__cacheKey];Vt!==void 0&&(Mt[P.__cacheKey].usedTimes--,Vt.usedTimes===0&&W(A)),P.__cacheKey=xt,P.__webglTexture=Mt[xt].texture}return ot}function yt(P,A,ot){let _t=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=s.TEXTURE_3D);const Mt=St(P,A),xt=A.source;i.bindTexture(_t,P.__webglTexture,s.TEXTURE0+ot);const Vt=r.get(xt);if(xt.version!==Vt.__version||Mt===!0){i.activeTexture(s.TEXTURE0+ot);const At=be.getPrimaries(be.workingColorSpace),Ut=A.colorSpace===Ia?null:be.getPrimaries(A.colorSpace),Xt=A.colorSpace===Ia||At===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Rt=T(A.image,!1,l.maxTextureSize);Rt=te(A,Rt);const Pt=u.convert(A.format,A.colorSpace),de=u.convert(A.type);let Zt=U(A.internalFormat,Pt,de,A.colorSpace,A.isVideoTexture);J(_t,A);let Ot;const qt=A.mipmaps,ne=A.isVideoTexture!==!0,Ae=Vt.__version===void 0||Mt===!0,X=xt.dataReady,bt=L(A,Rt);if(A.isDepthTexture)Zt=R(A.format===Ls,A.type),Ae&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Zt,Rt.width,Rt.height):i.texImage2D(s.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Pt,de,null));else if(A.isDataTexture)if(qt.length>0){ne&&Ae&&i.texStorage2D(s.TEXTURE_2D,bt,Zt,qt[0].width,qt[0].height);for(let pt=0,gt=qt.length;pt<gt;pt++)Ot=qt[pt],ne?X&&i.texSubImage2D(s.TEXTURE_2D,pt,0,0,Ot.width,Ot.height,Pt,de,Ot.data):i.texImage2D(s.TEXTURE_2D,pt,Zt,Ot.width,Ot.height,0,Pt,de,Ot.data);A.generateMipmaps=!1}else ne?(Ae&&i.texStorage2D(s.TEXTURE_2D,bt,Zt,Rt.width,Rt.height),X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Pt,de,Rt.data)):i.texImage2D(s.TEXTURE_2D,0,Zt,Rt.width,Rt.height,0,Pt,de,Rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ne&&Ae&&i.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Zt,qt[0].width,qt[0].height,Rt.depth);for(let pt=0,gt=qt.length;pt<gt;pt++)if(Ot=qt[pt],A.format!==pi)if(Pt!==null)if(ne){if(X)if(A.layerUpdates.size>0){const Ct=L0(Ot.width,Ot.height,A.format,A.type);for(const Qt of A.layerUpdates){const pe=Ot.data.subarray(Qt*Ct/Ot.data.BYTES_PER_ELEMENT,(Qt+1)*Ct/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,Qt,Ot.width,Ot.height,1,Pt,pe,0,0)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Ot.width,Ot.height,Rt.depth,Pt,Ot.data,0,0)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,Zt,Ot.width,Ot.height,Rt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Ot.width,Ot.height,Rt.depth,Pt,de,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,pt,Zt,Ot.width,Ot.height,Rt.depth,0,Pt,de,Ot.data)}else{ne&&Ae&&i.texStorage2D(s.TEXTURE_2D,bt,Zt,qt[0].width,qt[0].height);for(let pt=0,gt=qt.length;pt<gt;pt++)Ot=qt[pt],A.format!==pi?Pt!==null?ne?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,Ot.width,Ot.height,Pt,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,pt,Zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?X&&i.texSubImage2D(s.TEXTURE_2D,pt,0,0,Ot.width,Ot.height,Pt,de,Ot.data):i.texImage2D(s.TEXTURE_2D,pt,Zt,Ot.width,Ot.height,0,Pt,de,Ot.data)}else if(A.isDataArrayTexture)if(ne){if(Ae&&i.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Zt,Rt.width,Rt.height,Rt.depth),X)if(A.layerUpdates.size>0){const pt=L0(Rt.width,Rt.height,A.format,A.type);for(const gt of A.layerUpdates){const Ct=Rt.data.subarray(gt*pt/Rt.data.BYTES_PER_ELEMENT,(gt+1)*pt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Rt.width,Rt.height,1,Pt,de,Ct)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,de,Rt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Zt,Rt.width,Rt.height,Rt.depth,0,Pt,de,Rt.data);else if(A.isData3DTexture)ne?(Ae&&i.texStorage3D(s.TEXTURE_3D,bt,Zt,Rt.width,Rt.height,Rt.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,de,Rt.data)):i.texImage3D(s.TEXTURE_3D,0,Zt,Rt.width,Rt.height,Rt.depth,0,Pt,de,Rt.data);else if(A.isFramebufferTexture){if(Ae)if(ne)i.texStorage2D(s.TEXTURE_2D,bt,Zt,Rt.width,Rt.height);else{let pt=Rt.width,gt=Rt.height;for(let Ct=0;Ct<bt;Ct++)i.texImage2D(s.TEXTURE_2D,Ct,Zt,pt,gt,0,Pt,de,null),pt>>=1,gt>>=1}}else if(qt.length>0){if(ne&&Ae){const pt=ee(qt[0]);i.texStorage2D(s.TEXTURE_2D,bt,Zt,pt.width,pt.height)}for(let pt=0,gt=qt.length;pt<gt;pt++)Ot=qt[pt],ne?X&&i.texSubImage2D(s.TEXTURE_2D,pt,0,0,Pt,de,Ot):i.texImage2D(s.TEXTURE_2D,pt,Zt,Pt,de,Ot);A.generateMipmaps=!1}else if(ne){if(Ae){const pt=ee(Rt);i.texStorage2D(s.TEXTURE_2D,bt,Zt,pt.width,pt.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,de,Rt)}else i.texImage2D(s.TEXTURE_2D,0,Zt,Pt,de,Rt);x(A)&&S(_t),Vt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function K(P,A,ot){if(A.image.length!==6)return;const _t=St(P,A),Mt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ot);const xt=r.get(Mt);if(Mt.version!==xt.__version||_t===!0){i.activeTexture(s.TEXTURE0+ot);const Vt=be.getPrimaries(be.workingColorSpace),At=A.colorSpace===Ia?null:be.getPrimaries(A.colorSpace),Ut=A.colorSpace===Ia||Vt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,Rt=A.image[0]&&A.image[0].isDataTexture,Pt=[];for(let gt=0;gt<6;gt++)!Xt&&!Rt?Pt[gt]=T(A.image[gt],!0,l.maxCubemapSize):Pt[gt]=Rt?A.image[gt].image:A.image[gt],Pt[gt]=te(A,Pt[gt]);const de=Pt[0],Zt=u.convert(A.format,A.colorSpace),Ot=u.convert(A.type),qt=U(A.internalFormat,Zt,Ot,A.colorSpace),ne=A.isVideoTexture!==!0,Ae=xt.__version===void 0||_t===!0,X=Mt.dataReady;let bt=L(A,de);J(s.TEXTURE_CUBE_MAP,A);let pt;if(Xt){ne&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,bt,qt,de.width,de.height);for(let gt=0;gt<6;gt++){pt=Pt[gt].mipmaps;for(let Ct=0;Ct<pt.length;Ct++){const Qt=pt[Ct];A.format!==pi?Zt!==null?ne?X&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Qt.width,Qt.height,Zt,Qt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,qt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Qt.width,Qt.height,Zt,Ot,Qt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,qt,Qt.width,Qt.height,0,Zt,Ot,Qt.data)}}}else{if(pt=A.mipmaps,ne&&Ae){pt.length>0&&bt++;const gt=ee(Pt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,bt,qt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Rt){ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt[gt].width,Pt[gt].height,Zt,Ot,Pt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,Pt[gt].width,Pt[gt].height,0,Zt,Ot,Pt[gt].data);for(let Ct=0;Ct<pt.length;Ct++){const pe=pt[Ct].image[gt].image;ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,pe.width,pe.height,Zt,Ot,pe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,qt,pe.width,pe.height,0,Zt,Ot,pe.data)}}else{ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Zt,Ot,Pt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,qt,Zt,Ot,Pt[gt]);for(let Ct=0;Ct<pt.length;Ct++){const Qt=pt[Ct];ne?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Zt,Ot,Qt.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,qt,Zt,Ot,Qt.image[gt])}}}x(A)&&S(s.TEXTURE_CUBE_MAP),xt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ft(P,A,ot,_t,Mt,xt){const Vt=u.convert(ot.format,ot.colorSpace),At=u.convert(ot.type),Ut=U(ot.internalFormat,Vt,At,ot.colorSpace);if(!r.get(A).__hasExternalTextures){const Rt=Math.max(1,A.width>>xt),Pt=Math.max(1,A.height>>xt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?i.texImage3D(Mt,xt,Ut,Rt,Pt,A.depth,0,Vt,At,null):i.texImage2D(Mt,xt,Ut,Rt,Pt,0,Vt,At,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),kt(A)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,Mt,r.get(ot).__webglTexture,0,Te(A)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,Mt,r.get(ot).__webglTexture,xt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(P,A,ot){if(s.bindRenderbuffer(s.RENDERBUFFER,P),A.depthBuffer){const _t=A.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,xt=R(A.stencilBuffer,Mt),Vt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=Te(A);kt(A)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,xt,A.width,A.height):ot?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,xt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,P)}else{const _t=A.textures;for(let Mt=0;Mt<_t.length;Mt++){const xt=_t[Mt],Vt=u.convert(xt.format,xt.colorSpace),At=u.convert(xt.type),Ut=U(xt.internalFormat,Vt,At,xt.colorSpace),Xt=Te(A);ot&&kt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Ut,A.width,A.height):kt(A)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Ut,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ut,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ut(A.depthTexture,0);const _t=r.get(A.depthTexture).__webglTexture,Mt=Te(A);if(A.depthTexture.format===Rs)kt(A)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_t,0);else if(A.depthTexture.format===Ls)kt(A)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0,Mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Lt(P){const A=r.get(P),ot=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const _t=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=_t}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");wt(A.__webglFramebuffer,P)}else if(ot){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=s.createRenderbuffer(),vt(A.__webglDepthbuffer[_t],P,!1);else{const Mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,xt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),vt(A.__webglDepthbuffer,P,!1);else{const _t=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,Mt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(P,A,ot){const _t=r.get(P);A!==void 0&&ft(_t.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ot!==void 0&&Lt(P)}function ae(P){const A=P.texture,ot=r.get(P),_t=r.get(A);P.addEventListener("dispose",B);const Mt=P.textures,xt=P.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=A.version,p.memory.textures++),xt){ot.__webglFramebuffer=[];for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0){ot.__webglFramebuffer[At]=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)ot.__webglFramebuffer[At][Ut]=s.createFramebuffer()}else ot.__webglFramebuffer[At]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ot.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)ot.__webglFramebuffer[At]=s.createFramebuffer()}else ot.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let At=0,Ut=Mt.length;At<Ut;At++){const Xt=r.get(Mt[At]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),p.memory.textures++)}if(P.samples>0&&kt(P)===!1){ot.__webglMultisampledFramebuffer=s.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Ut=Mt[At];ot.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ot.__webglColorRenderbuffer[At]);const Xt=u.convert(Ut.format,Ut.colorSpace),Rt=u.convert(Ut.type),Pt=U(Ut.internalFormat,Xt,Rt,Ut.colorSpace,P.isXRRenderTarget===!0),de=Te(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,Pt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,ot.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ot.__webglDepthRenderbuffer=s.createRenderbuffer(),vt(ot.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){i.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),J(s.TEXTURE_CUBE_MAP,A);for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)ft(ot.__webglFramebuffer[At][Ut],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ut);else ft(ot.__webglFramebuffer[At],P,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);x(A)&&S(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let At=0,Ut=Mt.length;At<Ut;At++){const Xt=Mt[At],Rt=r.get(Xt);i.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),J(s.TEXTURE_2D,Xt),ft(ot.__webglFramebuffer,P,Xt,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),x(Xt)&&S(s.TEXTURE_2D)}i.unbindTexture()}else{let At=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(At=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(At,_t.__webglTexture),J(At,A),A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)ft(ot.__webglFramebuffer[Ut],P,A,s.COLOR_ATTACHMENT0,At,Ut);else ft(ot.__webglFramebuffer,P,A,s.COLOR_ATTACHMENT0,At,0);x(A)&&S(At),i.unbindTexture()}P.depthBuffer&&Lt(P)}function Ne(P){const A=P.textures;for(let ot=0,_t=A.length;ot<_t;ot++){const Mt=A[ot];if(x(Mt)){const xt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Vt=r.get(Mt).__webglTexture;i.bindTexture(xt,Vt),S(xt),i.unbindTexture()}}}const H=[],Ge=[];function Se(P){if(P.samples>0){if(kt(P)===!1){const A=P.textures,ot=P.width,_t=P.height;let Mt=s.COLOR_BUFFER_BIT;const xt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=r.get(P),At=A.length>1;if(At)for(let Ut=0;Ut<A.length;Ut++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ut=0;Ut<A.length;Ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ut]);const Xt=r.get(A[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,ot,_t,0,0,ot,_t,Mt,s.NEAREST),f===!0&&(H.length=0,Ge.length=0,H.push(s.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&P.resolveDepthBuffer===!1&&(H.push(xt),Ge.push(xt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Ut=0;Ut<A.length;Ut++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ut]);const Xt=r.get(A[Ut]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,Xt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const A=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Te(P){return Math.min(l.maxSamples,P.samples)}function kt(P){const A=r.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Me(P){const A=p.render.frame;g.get(P)!==A&&(g.set(P,A),P.update())}function te(P,A){const ot=P.colorSpace,_t=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ot!==Ga&&ot!==Ia&&(be.getTransfer(ot)===Fe?(_t!==pi||Mt!==ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),A}function ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=rt,this.resetTextureUnits=F,this.setTexture2D=ut,this.setTexture2DArray=lt,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=Wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=kt}function OR(s,t){function i(r,l=Ia){let u;const p=be.getTransfer(l);if(r===ea)return s.UNSIGNED_BYTE;if(r===Pd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return s.BYTE;if(r===gv)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===Od)return s.INT;if(r===yr)return s.UNSIGNED_INT;if(r===Qi)return s.FLOAT;if(r===Ko)return s.HALF_FLOAT;if(r===vv)return s.ALPHA;if(r===Sv)return s.RGB;if(r===pi)return s.RGBA;if(r===xv)return s.LUMINANCE;if(r===yv)return s.LUMINANCE_ALPHA;if(r===Rs)return s.DEPTH_COMPONENT;if(r===Ls)return s.DEPTH_STENCIL;if(r===Mv)return s.RED;if(r===zd)return s.RED_INTEGER;if(r===Ev)return s.RG;if(r===Bd)return s.RG_INTEGER;if(r===Fd)return s.RGBA_INTEGER;if(r===Pu||r===Iu||r===zu||r===Bu)if(p===Fe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Pu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Pu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$h||r===td||r===ed||r===nd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===$h)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===td)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ed)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id||r===ad||r===rd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===id||r===ad)return p===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===rd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===Sd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===sd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===od)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ld)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ud)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===md)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_d)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return p===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fu||r===xd||r===yd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Fu)return p===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tv||r===Md||r===Ed||r===Td)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Fu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Md)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ed)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Td)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class PR extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lu extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IR={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,p=null;const m=this._targetRay,f=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){p=!0;for(const T of t.hand.values()){const x=i.getJointPose(T,r),S=this._getHandJoint(h,T);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,u.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(u.linearVelocity)):f.hasLinearVelocity=!1,u.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(u.angularVelocity)):f.hasAngularVelocity=!1));m!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(IR)))}return m!==null&&(m.visible=l!==null),f!==null&&(f.visible=u!==null),h!==null&&(h.visible=p!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Lu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const zR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
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

}`;class FR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new In,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ha({vertexShader:zR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new tc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HR extends Is{constructor(t,i){super();const r=this;let l=null,u=1,p=null,m="local-floor",f=1,h=null,g=null,v=null,_=null,y=null,M=null;const T=new FR,x=i.getContextAttributes();let S=null,U=null;const R=[],L=[],G=new ve;let B=null;const z=new jn;z.layers.enable(1),z.viewport=new He;const W=new jn;W.layers.enable(2),W.viewport=new He;const D=[z,W],C=new PR;C.layers.enable(1),C.layers.enable(2);let F=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ft=R[K];return ft===void 0&&(ft=new Fh,R[K]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(K){let ft=R[K];return ft===void 0&&(ft=new Fh,R[K]=ft),ft.getGripSpace()},this.getHand=function(K){let ft=R[K];return ft===void 0&&(ft=new Fh,R[K]=ft),ft.getHandSpace()};function nt(K){const ft=L.indexOf(K.inputSource);if(ft===-1)return;const vt=R[ft];vt!==void 0&&(vt.update(K.inputSource,K.frame,h||p),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function ut(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",lt);for(let K=0;K<R.length;K++){const ft=L[K];ft!==null&&(L[K]=null,R[K].disconnect(ft))}F=null,rt=null,T.reset(),t.setRenderTarget(S),y=null,_=null,v=null,l=null,U=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){m=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||p},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(S=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",lt),x.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(G),l.renderState.layers===void 0){const ft={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Mr(y.framebufferWidth,y.framebufferHeight,{format:pi,type:ea,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ft=null,vt=null,wt=null;x.depth&&(wt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=x.stencil?Ls:Rs,vt=x.stencil?Us:yr);const Lt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};v=new XRWebGLBinding(l,i),_=v.createProjectionLayer(Lt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new Mr(_.textureWidth,_.textureHeight,{format:pi,type:ea,depthTexture:new zv(_.textureWidth,_.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(f),h=null,p=await l.requestReferenceSpace(m),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function lt(K){for(let ft=0;ft<K.removed.length;ft++){const vt=K.removed[ft],wt=L.indexOf(vt);wt>=0&&(L[wt]=null,R[wt].disconnect(vt))}for(let ft=0;ft<K.added.length;ft++){const vt=K.added[ft];let wt=L.indexOf(vt);if(wt===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=L.length){L.push(vt),wt=Wt;break}else if(L[Wt]===null){L[Wt]=vt,wt=Wt;break}if(wt===-1)break}const Lt=R[wt];Lt&&Lt.connect(vt)}}const O=new tt,q=new tt;function Z(K,ft,vt){O.setFromMatrixPosition(ft.matrixWorld),q.setFromMatrixPosition(vt.matrixWorld);const wt=O.distanceTo(q),Lt=ft.projectionMatrix.elements,Wt=vt.projectionMatrix.elements,ae=Lt[14]/(Lt[10]-1),Ne=Lt[14]/(Lt[10]+1),H=(Lt[9]+1)/Lt[5],Ge=(Lt[9]-1)/Lt[5],Se=(Lt[8]-1)/Lt[0],Te=(Wt[8]+1)/Wt[0],kt=ae*Se,Me=ae*Te,te=wt/(-Se+Te),ee=te*-Se;if(ft.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const P=ae+te,A=Ne+te,ot=kt-ee,_t=Me+(wt-ee),Mt=H*Ne/A*P,xt=Ge*Ne/A*P;K.projectionMatrix.makePerspective(ot,_t,Mt,xt,P,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Et(K,ft){ft===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ft.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ft=K.near,vt=K.far;T.texture!==null&&(T.depthNear>0&&(ft=T.depthNear),T.depthFar>0&&(vt=T.depthFar)),C.near=W.near=z.near=ft,C.far=W.far=z.far=vt,(F!==C.near||rt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,rt=C.far);const wt=K.parent,Lt=C.cameras;Et(C,wt);for(let Wt=0;Wt<Lt.length;Wt++)Et(Lt[Wt],wt);Lt.length===2?Z(C,z,W):C.projectionMatrix.copy(z.projectionMatrix),N(K,C,wt)};function N(K,ft,vt){vt===null?K.matrix.copy(ft.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ft.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ft.projectionMatrix),K.projectionMatrixInverse.copy(ft.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=bd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(K){f=K,_!==null&&(_.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let J=null;function St(K,ft){if(g=ft.getViewerPose(h||p),M=ft,g!==null){const vt=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let wt=!1;vt.length!==C.cameras.length&&(C.cameras.length=0,wt=!0);for(let Wt=0;Wt<vt.length;Wt++){const ae=vt[Wt];let Ne=null;if(y!==null)Ne=y.getViewport(ae);else{const Ge=v.getViewSubImage(_,ae);Ne=Ge.viewport,Wt===0&&(t.setRenderTargetTextures(U,Ge.colorTexture,_.ignoreDepthValues?void 0:Ge.depthStencilTexture),t.setRenderTarget(U))}let H=D[Wt];H===void 0&&(H=new jn,H.layers.enable(Wt),H.viewport=new He,D[Wt]=H),H.matrix.fromArray(ae.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(ae.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Wt===0&&(C.matrix.copy(H.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),wt===!0&&C.cameras.push(H)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Wt=v.getDepthInformation(vt[0]);Wt&&Wt.isValid&&Wt.texture&&T.init(t,Wt,l.renderState)}}for(let vt=0;vt<R.length;vt++){const wt=L[vt],Lt=R[vt];wt!==null&&Lt!==void 0&&Lt.update(wt,ft,h||p)}J&&J(K,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),M=null}const yt=new Iv;yt.setAnimationLoop(St),this.setAnimationLoop=function(K){J=K},this.dispose=function(){}}}const dr=new na,GR=new $e;function VR(s,t){function i(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,Nv(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function l(x,S,U,R,L){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(x,S):S.isMeshToonMaterial?(u(x,S),v(x,S)):S.isMeshPhongMaterial?(u(x,S),g(x,S)):S.isMeshStandardMaterial?(u(x,S),_(x,S),S.isMeshPhysicalMaterial&&y(x,S,L)):S.isMeshMatcapMaterial?(u(x,S),M(x,S)):S.isMeshDepthMaterial?u(x,S):S.isMeshDistanceMaterial?(u(x,S),T(x,S)):S.isMeshNormalMaterial?u(x,S):S.isLineBasicMaterial?(p(x,S),S.isLineDashedMaterial&&m(x,S)):S.isPointsMaterial?f(x,S,U,R):S.isSpriteMaterial?h(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,i(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Pn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,i(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Pn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,i(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,i(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const U=t.get(S),R=U.envMap,L=U.envMapRotation;R&&(x.envMap.value=R,dr.copy(L),dr.x*=-1,dr.y*=-1,dr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),x.envMapRotation.value.setFromMatrix4(GR.makeRotationFromEuler(dr)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,x.aoMapTransform))}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform))}function m(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function f(x,S,U,R){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*U,x.scale.value=R*.5,S.map&&(x.map.value=S.map,i(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function h(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,i(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,i(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function g(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function v(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function _(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,U){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Pn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,S){S.matcap&&(x.matcap.value=S.matcap)}function T(x,S){const U=t.get(S).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function kR(s,t,i,r){let l={},u={},p=[];const m=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(U,R){const L=R.program;r.uniformBlockBinding(U,L)}function h(U,R){let L=l[U.id];L===void 0&&(M(U),L=g(U),l[U.id]=L,U.addEventListener("dispose",x));const G=R.program;r.updateUBOMapping(U,G);const B=t.render.frame;u[U.id]!==B&&(_(U),u[U.id]=B)}function g(U){const R=v();U.__bindingPointIndex=R;const L=s.createBuffer(),G=U.__size,B=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,G,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,L),L}function v(){for(let U=0;U<m;U++)if(p.indexOf(U)===-1)return p.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const R=l[U.id],L=U.uniforms,G=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let B=0,z=L.length;B<z;B++){const W=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,C=W.length;D<C;D++){const F=W[D];if(y(F,B,D,G)===!0){const rt=F.__offset,nt=Array.isArray(F.value)?F.value:[F.value];let ut=0;for(let lt=0;lt<nt.length;lt++){const O=nt[lt],q=T(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,rt+ut,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,ut),ut+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,rt,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(U,R,L,G){const B=U.value,z=R+"_"+L;if(G[z]===void 0)return typeof B=="number"||typeof B=="boolean"?G[z]=B:G[z]=B.clone(),!0;{const W=G[z];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return G[z]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function M(U){const R=U.uniforms;let L=0;const G=16;for(let z=0,W=R.length;z<W;z++){const D=Array.isArray(R[z])?R[z]:[R[z]];for(let C=0,F=D.length;C<F;C++){const rt=D[C],nt=Array.isArray(rt.value)?rt.value:[rt.value];for(let ut=0,lt=nt.length;ut<lt;ut++){const O=nt[ut],q=T(O),Z=L%G,Et=Z%q.boundary,N=Z+Et;L+=Et,N!==0&&G-N<q.storage&&(L+=G-N),rt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=L,L+=q.storage}}}const B=L%G;return B>0&&(L+=G-B),U.__size=L,U.__cache={},this}function T(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),R}function x(U){const R=U.target;R.removeEventListener("dispose",x);const L=p.indexOf(R.__bindingPointIndex);p.splice(L,1),s.deleteBuffer(l[R.id]),delete l[R.id],delete u[R.id]}function S(){for(const U in l)s.deleteBuffer(l[U]);p=[],l={},u={}}return{bind:f,update:h,dispose:S}}class XR{constructor(t={}){const{canvas:i=LE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:p=!1,antialias:m=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=t;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=p;const y=new Uint32Array(4),M=new Int32Array(4);let T=null,x=null;const S=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=Ba,this.toneMappingExposure=1;const R=this;let L=!1,G=0,B=0,z=null,W=-1,D=null;const C=new He,F=new He;let rt=null;const nt=new we(0);let ut=0,lt=i.width,O=i.height,q=1,Z=null,Et=null;const N=new He(0,0,lt,O),J=new He(0,0,lt,O);let St=!1;const yt=new kd;let K=!1,ft=!1;const vt=new $e,wt=new tt,Lt=new He,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Ne(){return z===null?q:1}let H=r;function Ge(w,k){return i.getContext(w,k)}try{const w={alpha:!0,depth:l,stencil:u,antialias:m,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nd}`),i.addEventListener("webglcontextlost",pt,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),H===null){const k="webgl2";if(H=Ge(k,w),H===null)throw Ge(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,Te,kt,Me,te,ee,P,A,ot,_t,Mt,xt,Vt,At,Ut,Xt,Rt,Pt,de,Zt,Ot,qt,ne,Ae;function X(){Se=new KA(H),Se.init(),qt=new OR(H,Se),Te=new kA(H,Se,t,qt),kt=new UR(H),Me=new $A(H),te=new _R,ee=new NR(H,Se,kt,te,Te,qt,Me),P=new WA(R),A=new ZA(R),ot=new rT(H),ne=new GA(H,ot),_t=new QA(H,ot,Me,ne),Mt=new e1(H,_t,ot,Me),de=new t1(H,Te,ee),Xt=new XA(te),xt=new gR(R,P,A,Se,Te,ne,Xt),Vt=new VR(R,te),At=new SR,Ut=new bR(Se),Pt=new HA(R,P,A,kt,Mt,_,f),Rt=new DR(R,Mt,Te),Ae=new kR(H,Me,Te,kt),Zt=new VA(H,Se,Me),Ot=new JA(H,Se,Me),Me.programs=xt.programs,R.capabilities=Te,R.extensions=Se,R.properties=te,R.renderLists=At,R.shadowMap=Rt,R.state=kt,R.info=Me}X();const bt=new HR(R,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(lt,O,!1))},this.getSize=function(w){return w.set(lt,O)},this.setSize=function(w,k,it=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}lt=w,O=k,i.width=Math.floor(w*q),i.height=Math.floor(k*q),it===!0&&(i.style.width=w+"px",i.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(lt*q,O*q).floor()},this.setDrawingBufferSize=function(w,k,it){lt=w,O=k,q=it,i.width=Math.floor(w*it),i.height=Math.floor(k*it),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,k,it,st){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,k,it,st),kt.viewport(C.copy(N).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,k,it,st){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,it,st),kt.scissor(F.copy(J).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){kt.setScissorTest(St=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){Et=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(w=!0,k=!0,it=!0){let st=0;if(w){let j=!1;if(z!==null){const Tt=z.texture.format;j=Tt===Fd||Tt===Bd||Tt===zd}if(j){const Tt=z.texture.type,Nt=Tt===ea||Tt===yr||Tt===qo||Tt===Us||Tt===Pd||Tt===Id,It=Pt.getClearColor(),zt=Pt.getClearAlpha(),Jt=It.r,Yt=It.g,Ft=It.b;Nt?(y[0]=Jt,y[1]=Yt,y[2]=Ft,y[3]=zt,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=Jt,M[1]=Yt,M[2]=Ft,M[3]=zt,H.clearBufferiv(H.COLOR,0,M))}else st|=H.COLOR_BUFFER_BIT}k&&(st|=H.DEPTH_BUFFER_BIT),it&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",pt,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),At.dispose(),Ut.dispose(),te.dispose(),P.dispose(),A.dispose(),Mt.dispose(),ne.dispose(),Ae.dispose(),xt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Kn),bt.removeEventListener("sessionend",si),Ve.stop()};function pt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=Me.autoReset,k=Rt.enabled,it=Rt.autoUpdate,st=Rt.needsUpdate,j=Rt.type;X(),Me.autoReset=w,Rt.enabled=k,Rt.autoUpdate=it,Rt.needsUpdate=st,Rt.type=j}function Ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qt(w){const k=w.target;k.removeEventListener("dispose",Qt),pe(k)}function pe(w){We(w),te.remove(w)}function We(w){const k=te.get(w).programs;k!==void 0&&(k.forEach(function(it){xt.releaseProgram(it)}),w.isShaderMaterial&&xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,it,st,j,Tt){k===null&&(k=Wt);const Nt=j.isMesh&&j.matrixWorld.determinant()<0,It=ra(w,k,it,st,j);kt.setMaterial(st,Nt);let zt=it.index,Jt=1;if(st.wireframe===!0){if(zt=_t.getWireframeAttribute(it),zt===void 0)return;Jt=2}const Yt=it.drawRange,Ft=it.attributes.position;let re=Yt.start*Jt,Pe=(Yt.start+Yt.count)*Jt;Tt!==null&&(re=Math.max(re,Tt.start*Jt),Pe=Math.min(Pe,(Tt.start+Tt.count)*Jt)),zt!==null?(re=Math.max(re,0),Pe=Math.min(Pe,zt.count)):Ft!=null&&(re=Math.max(re,0),Pe=Math.min(Pe,Ft.count));const ze=Pe-re;if(ze<0||ze===1/0)return;ne.setup(j,st,It,it,zt);let an,ge=Zt;if(zt!==null&&(an=ot.get(zt),ge=Ot,ge.setIndex(an)),j.isMesh)st.wireframe===!0?(kt.setLineWidth(st.wireframeLinewidth*Ne()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(j.isLine){let Ht=st.linewidth;Ht===void 0&&(Ht=1),kt.setLineWidth(Ht*Ne()),j.isLineSegments?ge.setMode(H.LINES):j.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else j.isPoints?ge.setMode(H.POINTS):j.isSprite&&ge.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ge.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ht=j._multiDrawStarts,un=j._multiDrawCounts,xe=j._multiDrawCount,ke=zt?ot.get(zt).bytesPerElement:1,wi=te.get(st).currentProgram.getUniforms();for(let An=0;An<xe;An++)wi.setValue(H,"_gl_DrawID",An),ge.render(Ht[An]/ke,un[An])}else if(j.isInstancedMesh)ge.renderInstances(re,ze,j.count);else if(it.isInstancedBufferGeometry){const Ht=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,un=Math.min(it.instanceCount,Ht);ge.renderInstances(re,ze,un)}else ge.render(re,ze)};function tn(w,k,it){w.transparent===!0&&w.side===Ki&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,ka(w,k,it),w.side=Fa,w.needsUpdate=!0,ka(w,k,it),w.side=Ki):ka(w,k,it)}this.compile=function(w,k,it=null){it===null&&(it=w),x=Ut.get(it),x.init(k),U.push(x),it.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),w!==it&&w.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const st=new Set;return w.traverse(function(j){const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Nt=0;Nt<Tt.length;Nt++){const It=Tt[Nt];tn(It,it,j),st.add(It)}else tn(Tt,it,j),st.add(Tt)}),U.pop(),x=null,st},this.compileAsync=function(w,k,it=null){const st=this.compile(w,k,it);return new Promise(j=>{function Tt(){if(st.forEach(function(Nt){te.get(Nt).currentProgram.isReady()&&st.delete(Nt)}),st.size===0){j(w);return}setTimeout(Tt,10)}Se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let me=null;function Zn(w){me&&me(w)}function Kn(){Ve.stop()}function si(){Ve.start()}const Ve=new Iv;Ve.setAnimationLoop(Zn),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(w){me=w,bt.setAnimationLoop(w),w===null?Ve.stop():Ve.start()},bt.addEventListener("sessionstart",Kn),bt.addEventListener("sessionend",si),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(k),k=bt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,k,z),x=Ut.get(w,U.length),x.init(k),U.push(x),vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),yt.setFromProjectionMatrix(vt),ft=this.localClippingEnabled,K=Xt.init(this.clippingPlanes,ft),T=At.get(w,S.length),T.init(),S.push(T),bt.enabled===!0&&bt.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&pn(Tt,k,-1/0,R.sortObjects)}pn(w,k,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Z,Et),ae=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ae&&Pt.addToRenderList(T,w),this.info.render.frame++,K===!0&&Xt.beginShadows();const it=x.state.shadowsArray;Rt.render(it,w,k),K===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=T.opaque,j=T.transmissive;if(x.setupLights(),k.isArrayCamera){const Tt=k.cameras;if(j.length>0)for(let Nt=0,It=Tt.length;Nt<It;Nt++){const zt=Tt[Nt];Tr(st,j,w,zt)}ae&&Pt.render(w);for(let Nt=0,It=Tt.length;Nt<It;Nt++){const zt=Tt[Nt];Ci(T,w,zt,zt.viewport)}}else j.length>0&&Tr(st,j,w,k),ae&&Pt.render(w),Ci(T,w,k);z!==null&&(ee.updateMultisampleRenderTarget(z),ee.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(R,w,k),ne.resetDefaultState(),W=-1,D=null,U.pop(),U.length>0?(x=U[U.length-1],K===!0&&Xt.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?T=S[S.length-1]:T=null};function pn(w,k,it,st){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||yt.intersectsSprite(w)){st&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);const Nt=Mt.update(w),It=w.material;It.visible&&T.push(w,Nt,It,it,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||yt.intersectsObject(w))){const Nt=Mt.update(w),It=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Lt.copy(Nt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(It)){const zt=Nt.groups;for(let Jt=0,Yt=zt.length;Jt<Yt;Jt++){const Ft=zt[Jt],re=It[Ft.materialIndex];re&&re.visible&&T.push(w,Nt,re,it,Lt.z,Ft)}}else It.visible&&T.push(w,Nt,It,it,Lt.z,null)}}const Tt=w.children;for(let Nt=0,It=Tt.length;Nt<It;Nt++)pn(Tt[Nt],k,it,st)}function Ci(w,k,it,st){const j=w.opaque,Tt=w.transmissive,Nt=w.transparent;x.setupLightsView(it),K===!0&&Xt.setGlobalState(R.clippingPlanes,it),st&&kt.viewport(C.copy(st)),j.length>0&&br(j,k,it),Tt.length>0&&br(Tt,k,it),Nt.length>0&&br(Nt,k,it),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Tr(w,k,it,st){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new Mr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Ko:ea,minFilter:Sr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[st.id],Nt=st.viewport||C;Tt.setSize(Nt.z,Nt.w);const It=R.getRenderTarget();R.setRenderTarget(Tt),R.getClearColor(nt),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),ae&&Pt.render(it);const zt=R.toneMapping;R.toneMapping=Ba;const Jt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),K===!0&&Xt.setGlobalState(R.clippingPlanes,st),br(w,it,st),ee.updateMultisampleRenderTarget(Tt),ee.updateRenderTargetMipmap(Tt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ft=0,re=k.length;Ft<re;Ft++){const Pe=k[Ft],ze=Pe.object,an=Pe.geometry,ge=Pe.material,Ht=Pe.group;if(ge.side===Ki&&ze.layers.test(st.layers)){const un=ge.side;ge.side=Pn,ge.needsUpdate=!0,el(ze,it,st,an,ge,Ht),ge.side=un,ge.needsUpdate=!0,Yt=!0}}Yt===!0&&(ee.updateMultisampleRenderTarget(Tt),ee.updateRenderTargetMipmap(Tt))}R.setRenderTarget(It),R.setClearColor(nt,ut),Jt!==void 0&&(st.viewport=Jt),R.toneMapping=zt}function br(w,k,it){const st=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Tt=w.length;j<Tt;j++){const Nt=w[j],It=Nt.object,zt=Nt.geometry,Jt=st===null?Nt.material:st,Yt=Nt.group;It.layers.test(it.layers)&&el(It,k,it,zt,Jt,Yt)}}function el(w,k,it,st,j,Tt){w.onBeforeRender(R,k,it,st,j,Tt),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(R,k,it,st,w,Tt),j.transparent===!0&&j.side===Ki&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,R.renderBufferDirect(it,k,st,j,w,Tt),j.side=Fa,j.needsUpdate=!0,R.renderBufferDirect(it,k,st,j,w,Tt),j.side=Ki):R.renderBufferDirect(it,k,st,j,w,Tt),w.onAfterRender(R,k,it,st,j,Tt)}function ka(w,k,it){k.isScene!==!0&&(k=Wt);const st=te.get(w),j=x.state.lights,Tt=x.state.shadowsArray,Nt=j.state.version,It=xt.getParameters(w,j.state,Tt,k,it),zt=xt.getProgramCacheKey(It);let Jt=st.programs;st.environment=w.isMeshStandardMaterial?k.environment:null,st.fog=k.fog,st.envMap=(w.isMeshStandardMaterial?A:P).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",Qt),Jt=new Map,st.programs=Jt);let Yt=Jt.get(zt);if(Yt!==void 0){if(st.currentProgram===Yt&&st.lightsStateVersion===Nt)return Ar(w,It),Yt}else It.uniforms=xt.getUniforms(w),w.onBeforeCompile(It,R),Yt=xt.acquireProgram(It,zt),Jt.set(zt,Yt),st.uniforms=It.uniforms;const Ft=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=Xt.uniform),Ar(w,It),st.needsLights=Xa(w),st.lightsStateVersion=Nt,st.needsLights&&(Ft.ambientLightColor.value=j.state.ambient,Ft.lightProbe.value=j.state.probe,Ft.directionalLights.value=j.state.directional,Ft.directionalLightShadows.value=j.state.directionalShadow,Ft.spotLights.value=j.state.spot,Ft.spotLightShadows.value=j.state.spotShadow,Ft.rectAreaLights.value=j.state.rectArea,Ft.ltc_1.value=j.state.rectAreaLTC1,Ft.ltc_2.value=j.state.rectAreaLTC2,Ft.pointLights.value=j.state.point,Ft.pointLightShadows.value=j.state.pointShadow,Ft.hemisphereLights.value=j.state.hemi,Ft.directionalShadowMap.value=j.state.directionalShadowMap,Ft.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ft.spotShadowMap.value=j.state.spotShadowMap,Ft.spotLightMatrix.value=j.state.spotLightMatrix,Ft.spotLightMap.value=j.state.spotLightMap,Ft.pointShadowMap.value=j.state.pointShadowMap,Ft.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=Yt,st.uniformsList=null,Yt}function aa(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Hu.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ar(w,k){const it=te.get(w);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function ra(w,k,it,st,j){k.isScene!==!0&&(k=Wt),ee.resetTextureUnits();const Tt=k.fog,Nt=st.isMeshStandardMaterial?k.environment:null,It=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ga,zt=(st.isMeshStandardMaterial?A:P).get(st.envMap||Nt),Jt=st.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Yt=!!it.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Ft=!!it.morphAttributes.position,re=!!it.morphAttributes.normal,Pe=!!it.morphAttributes.color;let ze=Ba;st.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ze=R.toneMapping);const an=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ge=an!==void 0?an.length:0,Ht=te.get(st),un=x.state.lights;if(K===!0&&(ft===!0||w!==D)){const Be=w===D&&st.id===W;Xt.setState(st,w,Be)}let xe=!1;st.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==un.state.version||Ht.outputColorSpace!==It||j.isBatchedMesh&&Ht.batching===!1||!j.isBatchedMesh&&Ht.batching===!0||j.isBatchedMesh&&Ht.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ht.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ht.instancing===!1||!j.isInstancedMesh&&Ht.instancing===!0||j.isSkinnedMesh&&Ht.skinning===!1||!j.isSkinnedMesh&&Ht.skinning===!0||j.isInstancedMesh&&Ht.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ht.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ht.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ht.instancingMorph===!1&&j.morphTexture!==null||Ht.envMap!==zt||st.fog===!0&&Ht.fog!==Tt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Xt.numPlanes||Ht.numIntersection!==Xt.numIntersection)||Ht.vertexAlphas!==Jt||Ht.vertexTangents!==Yt||Ht.morphTargets!==Ft||Ht.morphNormals!==re||Ht.morphColors!==Pe||Ht.toneMapping!==ze||Ht.morphTargetsCount!==ge)&&(xe=!0):(xe=!0,Ht.__version=st.version);let ke=Ht.currentProgram;xe===!0&&(ke=ka(st,k,j));let wi=!1,An=!1,oa=!1;const qe=ke.getUniforms(),Bn=Ht.uniforms;if(kt.useProgram(ke.program)&&(wi=!0,An=!0,oa=!0),st.id!==W&&(W=st.id,An=!0),wi||D!==w){qe.setValue(H,"projectionMatrix",w.projectionMatrix),qe.setValue(H,"viewMatrix",w.matrixWorldInverse);const Be=qe.map.cameraPosition;Be!==void 0&&Be.setValue(H,wt.setFromMatrixPosition(w.matrixWorld)),Te.logarithmicDepthBuffer&&qe.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&qe.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,An=!0,oa=!0)}if(j.isSkinnedMesh){qe.setOptional(H,j,"bindMatrix"),qe.setOptional(H,j,"bindMatrixInverse");const Be=j.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),qe.setValue(H,"boneTexture",Be.boneTexture,ee))}j.isBatchedMesh&&(qe.setOptional(H,j,"batchingTexture"),qe.setValue(H,"batchingTexture",j._matricesTexture,ee),qe.setOptional(H,j,"batchingIdTexture"),qe.setValue(H,"batchingIdTexture",j._indirectTexture,ee),qe.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&qe.setValue(H,"batchingColorTexture",j._colorsTexture,ee));const Bs=it.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&de.update(j,it,ke),(An||Ht.receiveShadow!==j.receiveShadow)&&(Ht.receiveShadow=j.receiveShadow,qe.setValue(H,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Bn.envMap.value=zt,Bn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&k.environment!==null&&(Bn.envMapIntensity.value=k.environmentIntensity),An&&(qe.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ht.needsLights&&sa(Bn,oa),Tt&&st.fog===!0&&Vt.refreshFogUniforms(Bn,Tt),Vt.refreshMaterialUniforms(Bn,st,q,O,x.state.transmissionRenderTarget[w.id]),Hu.upload(H,aa(Ht),Bn,ee)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Hu.upload(H,aa(Ht),Bn,ee),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&qe.setValue(H,"center",j.center),qe.setValue(H,"modelViewMatrix",j.modelViewMatrix),qe.setValue(H,"normalMatrix",j.normalMatrix),qe.setValue(H,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Be=st.uniformsGroups;for(let Wa=0,nl=Be.length;Wa<nl;Wa++){const Rr=Be[Wa];Ae.update(Rr,ke),Ae.bind(Rr,ke)}}return ke}function sa(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Xa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,k,it){te.get(w.texture).__webglTexture=k,te.get(w.depthTexture).__webglTexture=it;const st=te.get(w);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=it===void 0,st.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const it=te.get(w);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,it=0){z=w,G=k,B=it;let st=!0,j=null,Tt=!1,Nt=!1;if(w){const zt=te.get(w);if(zt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)ee.setupRenderTarget(w);else if(zt.__hasExternalTextures)ee.rebindTextures(w,te.get(w.texture).__webglTexture,te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ft=w.depthTexture;if(zt.__boundDepthTexture!==Ft){if(Ft!==null&&te.has(Ft)&&(w.width!==Ft.image.width||w.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(w)}}const Jt=w.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Nt=!0);const Yt=te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?j=Yt[k][it]:j=Yt[k],Tt=!0):w.samples>0&&ee.useMultisampledRTT(w)===!1?j=te.get(w).__webglMultisampledFramebuffer:Array.isArray(Yt)?j=Yt[it]:j=Yt,C.copy(w.viewport),F.copy(w.scissor),rt=w.scissorTest}else C.copy(N).multiplyScalar(q).floor(),F.copy(J).multiplyScalar(q).floor(),rt=St;if(kt.bindFramebuffer(H.FRAMEBUFFER,j)&&st&&kt.drawBuffers(w,j),kt.viewport(C),kt.scissor(F),kt.setScissorTest(rt),Tt){const zt=te.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,zt.__webglTexture,it)}else if(Nt){const zt=te.get(w.texture),Jt=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.__webglTexture,it||0,Jt)}W=-1},this.readRenderTargetPixels=function(w,k,it,st,j,Tt,Nt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Nt!==void 0&&(It=It[Nt]),It){kt.bindFramebuffer(H.FRAMEBUFFER,It);try{const zt=w.texture,Jt=zt.format,Yt=zt.type;if(!Te.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-st&&it>=0&&it<=w.height-j&&H.readPixels(k,it,st,j,qt.convert(Jt),qt.convert(Yt),Tt)}finally{const zt=z!==null?te.get(z).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(w,k,it,st,j,Tt,Nt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Nt!==void 0&&(It=It[Nt]),It){kt.bindFramebuffer(H.FRAMEBUFFER,It);try{const zt=w.texture,Jt=zt.format,Yt=zt.type;if(!Te.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-st&&it>=0&&it<=w.height-j){const Ft=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ft),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),H.readPixels(k,it,st,j,qt.convert(Jt),qt.convert(Yt),0),H.flush();const re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);await NE(H,re,4);try{H.bindBuffer(H.PIXEL_PACK_BUFFER,Ft),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt)}finally{H.deleteBuffer(Ft),H.deleteSync(re)}return Tt}}finally{const zt=z!==null?te.get(z).__webglFramebuffer:null;kt.bindFramebuffer(H.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(w,k=null,it=0){w.isTexture!==!0&&(Xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const st=Math.pow(2,-it),j=Math.floor(w.image.width*st),Tt=Math.floor(w.image.height*st),Nt=k!==null?k.x:0,It=k!==null?k.y:0;ee.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,it,0,0,Nt,It,j,Tt),kt.unbindTexture()},this.copyTextureToTexture=function(w,k,it=null,st=null,j=0){w.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,w=arguments[1],k=arguments[2],j=arguments[3]||0,it=null);let Tt,Nt,It,zt,Jt,Yt;it!==null?(Tt=it.max.x-it.min.x,Nt=it.max.y-it.min.y,It=it.min.x,zt=it.min.y):(Tt=w.image.width,Nt=w.image.height,It=0,zt=0),st!==null?(Jt=st.x,Yt=st.y):(Jt=0,Yt=0);const Ft=qt.convert(k.format),re=qt.convert(k.type);ee.setTexture2D(k,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);const Pe=H.getParameter(H.UNPACK_ROW_LENGTH),ze=H.getParameter(H.UNPACK_IMAGE_HEIGHT),an=H.getParameter(H.UNPACK_SKIP_PIXELS),ge=H.getParameter(H.UNPACK_SKIP_ROWS),Ht=H.getParameter(H.UNPACK_SKIP_IMAGES),un=w.isCompressedTexture?w.mipmaps[j]:w.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,un.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,un.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,It),H.pixelStorei(H.UNPACK_SKIP_ROWS,zt),w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,j,Jt,Yt,Tt,Nt,Ft,re,un.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,j,Jt,Yt,un.width,un.height,Ft,un.data):H.texSubImage2D(H.TEXTURE_2D,j,Jt,Yt,Tt,Nt,Ft,re,un),H.pixelStorei(H.UNPACK_ROW_LENGTH,Pe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ze),H.pixelStorei(H.UNPACK_SKIP_PIXELS,an),H.pixelStorei(H.UNPACK_SKIP_ROWS,ge),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ht),j===0&&k.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),kt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,it=null,st=null,j=0){w.isTexture!==!0&&(Xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,st=arguments[1]||null,w=arguments[2],k=arguments[3],j=arguments[4]||0);let Tt,Nt,It,zt,Jt,Yt,Ft,re,Pe;const ze=w.isCompressedTexture?w.mipmaps[j]:w.image;it!==null?(Tt=it.max.x-it.min.x,Nt=it.max.y-it.min.y,It=it.max.z-it.min.z,zt=it.min.x,Jt=it.min.y,Yt=it.min.z):(Tt=ze.width,Nt=ze.height,It=ze.depth,zt=0,Jt=0,Yt=0),st!==null?(Ft=st.x,re=st.y,Pe=st.z):(Ft=0,re=0,Pe=0);const an=qt.convert(k.format),ge=qt.convert(k.type);let Ht;if(k.isData3DTexture)ee.setTexture3D(k,0),Ht=H.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)ee.setTexture2DArray(k,0),Ht=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,k.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,k.unpackAlignment);const un=H.getParameter(H.UNPACK_ROW_LENGTH),xe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ke=H.getParameter(H.UNPACK_SKIP_PIXELS),wi=H.getParameter(H.UNPACK_SKIP_ROWS),An=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ze.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ze.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,zt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Jt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt),w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ht,j,Ft,re,Pe,Tt,Nt,It,an,ge,ze.data):k.isCompressedArrayTexture?H.compressedTexSubImage3D(Ht,j,Ft,re,Pe,Tt,Nt,It,an,ze.data):H.texSubImage3D(Ht,j,Ft,re,Pe,Tt,Nt,It,an,ge,ze),H.pixelStorei(H.UNPACK_ROW_LENGTH,un),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,wi),H.pixelStorei(H.UNPACK_SKIP_IMAGES,An),j===0&&k.generateMipmaps&&H.generateMipmap(Ht),kt.unbindTexture()},this.initRenderTarget=function(w){te.get(w).__webglFramebuffer===void 0&&ee.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ee.setTextureCube(w,0):w.isData3DTexture?ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ee.setTexture2DArray(w,0):ee.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){G=0,B=0,z=null,kt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Hd?"display-p3":"srgb",i.unpackColorSpace=be.workingColorSpace===Ju?"display-p3":"srgb"}}class WR extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Wd extends Va{constructor(t=1,i=1,r=1,l=32,u=1,p=!1,m=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:p,thetaStart:m,thetaLength:f};const h=this;l=Math.floor(l),u=Math.floor(u);const g=[],v=[],_=[],y=[];let M=0;const T=[],x=r/2;let S=0;U(),p===!1&&(t>0&&R(!0),i>0&&R(!1)),this.setIndex(g),this.setAttribute("position",new bi(v,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(y,2));function U(){const L=new tt,G=new tt;let B=0;const z=(i-t)/r;for(let W=0;W<=u;W++){const D=[],C=W/u,F=C*(i-t)+t;for(let rt=0;rt<=l;rt++){const nt=rt/l,ut=nt*f+m,lt=Math.sin(ut),O=Math.cos(ut);G.x=F*lt,G.y=-C*r+x,G.z=F*O,v.push(G.x,G.y,G.z),L.set(lt,z,O).normalize(),_.push(L.x,L.y,L.z),y.push(nt,1-C),D.push(M++)}T.push(D)}for(let W=0;W<l;W++)for(let D=0;D<u;D++){const C=T[D][W],F=T[D+1][W],rt=T[D+1][W+1],nt=T[D][W+1];g.push(C,F,nt),g.push(F,rt,nt),B+=6}h.addGroup(S,B,0),S+=B}function R(L){const G=M,B=new ve,z=new tt;let W=0;const D=L===!0?t:i,C=L===!0?1:-1;for(let rt=1;rt<=l;rt++)v.push(0,x*C,0),_.push(0,C,0),y.push(.5,.5),M++;const F=M;for(let rt=0;rt<=l;rt++){const ut=rt/l*f+m,lt=Math.cos(ut),O=Math.sin(ut);z.x=D*O,z.y=x*C,z.z=D*lt,v.push(z.x,z.y,z.z),_.push(0,C,0),B.x=lt*.5+.5,B.y=O*.5*C+.5,y.push(B.x,B.y),M++}for(let rt=0;rt<l;rt++){const nt=G+rt,ut=F+rt;L===!0?g.push(ut,ut+1,nt):g.push(ut+1,ut,nt),W+=3}h.addGroup(S,W,L===!0?1:2),S+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qR extends zn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Hh=new $e,N0=new tt,O0=new tt;class YR{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;N0.setFromMatrixPosition(t.matrixWorld),i.position.copy(N0),O0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(O0),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const P0=new $e,Vo=new tt,Gh=new tt;class jR extends YR{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,u=t.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Vo),Gh.copy(r.position),Gh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Gh),r.updateMatrixWorld(),l.makeTranslation(-Vo.x,-Vo.y,-Vo.z),P0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P0)}}class ZR extends qR{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new jR}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);function KR(){const[s,t]=ht.useState(""),i=ht.useRef(null),r=ht.useRef(null),l=ht.useRef(null);ht.useEffect(()=>{const m=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});i.current=m,m.ondatachannel=x=>{const S=x.channel;console.log("Data channel received on desktop"),S.onmessage=U=>{console.log("Data channel message received:",U.data);const{alpha:R,beta:L,gamma:G}=JSON.parse(U.data);r.current&&(r.current.rotation.x=(L||0)*(Math.PI/180),r.current.rotation.y=(G||0)*(Math.PI/180),r.current.rotation.z=(R||0)*(Math.PI/180))}},m.createOffer().then(x=>m.setLocalDescription(x)).then(()=>{const x=JSON.stringify(m.localDescription);return console.log("Offer JSON:",x),console.log("Offer length:",x.length),fetch("https://a98f-2a01-cb00-18c7-a00-e5bd-ab4f-c883-93d9.ngrok-free.app/store-offer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({offer:x})})}).then(x=>x.json()).then(x=>{t(x.id),console.log("Offer ID:",x.id)}).catch(x=>console.error("Error storing offer:",x));const f=new WR,h=new jn(75,window.innerWidth/window.innerHeight,.1,1e3),g=new XR({antialias:!0});g.setSize(window.innerWidth,window.innerHeight),l.current&&l.current.appendChild(g.domElement);const v=new ZR(16777215,1);v.position.set(10,10,10),f.add(v);const _=new Wd(.1,.1,3,32),y=new Vd({color:65280}),M=new Ei(_,y);M.position.y=1.5,f.add(M),r.current=M,h.position.z=5;const T=()=>{requestAnimationFrame(T),g.render(f,h)};return T(),()=>{l.current&&g.domElement&&l.current.removeChild(g.domElement),g.dispose(),f.clear(),i.current&&i.current.close()}},[]),ht.useEffect(()=>{if(!s)return;const m=setInterval(()=>{console.log("Polling for answer with offerId:",s),fetch(`https://a98f-2a01-cb00-18c7-a00-e5bd-ab4f-c883-93d9.ngrok-free.app/get-answer/${s}`).then(f=>f.json()).then(f=>{if(console.log("Poll response:",f),f.answer){const h=new RTCSessionDescription(JSON.parse(f.answer));i.current.setRemoteDescription(h).then(()=>console.log("WebRTC connection established!")).catch(g=>console.error("Error setting remote description:",g)),clearInterval(m)}}).catch(f=>console.error("Error polling answer:",f))},1e3);return()=>clearInterval(m)},[s]);const p=s?`https://a6cc-2a01-cb00-18c7-a00-e5bd-ab4f-c883-93d9.ngrok-free.app/mobile?offerId=${s}`:"";return je.jsxs("div",{children:[je.jsx("div",{ref:l,style:{width:"100vw",height:"70vh"}}),je.jsx("h2",{children:"📱 Scan this QR code with your phone:"}),s?je.jsx(fv,{value:p,size:300,level:"L",bgColor:"#ffffff",fgColor:"#000000"}):je.jsx("p",{style:{color:"red"},children:"Loading QR code... Check console for errors."})]})}function QR(){const[s,t]=ht.useState({x:0,y:0,z:0}),[i,r]=ht.useState({alpha:0,beta:0,gamma:0});return ht.useEffect(()=>{const l=async()=>{if(typeof DeviceMotionEvent<"u"&&typeof DeviceMotionEvent.requestPermission=="function")try{await DeviceMotionEvent.requestPermission()==="granted"&&(window.addEventListener("devicemotion",u),window.addEventListener("deviceorientation",p))}catch(m){console.error("Motion permission error:",m)}else window.addEventListener("devicemotion",u),window.addEventListener("deviceorientation",p)},u=m=>{const f=m.accelerationIncludingGravity||m.acceleration;f&&t({x:f.x?.toFixed(2),y:f.y?.toFixed(2),z:f.z?.toFixed(2)})},p=m=>{r({alpha:m.alpha?.toFixed(2),beta:m.beta?.toFixed(2),gamma:m.gamma?.toFixed(2)})};return l(),()=>{window.removeEventListener("devicemotion",u),window.removeEventListener("deviceorientation",p)}},[]),je.jsxs("div",{style:{padding:"2rem"},children:[je.jsx("h2",{children:"📱 Phone Motion Tracker"}),je.jsx("h3",{children:"Acceleration (with gravity)"}),je.jsxs("p",{children:["X: ",s.x]}),je.jsxs("p",{children:["Y: ",s.y]}),je.jsxs("p",{children:["Z: ",s.z]}),je.jsx("h3",{children:"Orientation"}),je.jsxs("p",{children:["Alpha (compass): ",i.alpha,"°"]}),je.jsxs("p",{children:["Beta (front-back): ",i.beta,"°"]}),je.jsxs("p",{children:["Gamma (left-right): ",i.gamma,"°"]})]})}function JR(){return je.jsxs(Yy,{children:[je.jsx(kh,{path:"/lightsaber-escape",element:je.jsx(KR,{})}),je.jsx(kh,{path:"/lightsaber-escape/mobile",element:je.jsx(QR,{})})]})}ey.createRoot(document.getElementById("root")).render(je.jsx(ln.StrictMode,{children:je.jsx(_M,{children:je.jsx(JR,{})})}));
