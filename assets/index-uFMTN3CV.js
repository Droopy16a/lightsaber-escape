function lx(s,t){for(var i=0;i<t.length;i++){const r=t[i];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in s)){const c=Object.getOwnPropertyDescriptor(r,l);c&&Object.defineProperty(s,l,c.get?c:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ud(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gf={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function ux(){if(t_)return Eo;t_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var e_;function cx(){return e_||(e_=1,Gf.exports=ux()),Gf.exports}var qn=cx(),Vf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function fx(){if(n_)return ie;n_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function S(M,L,ot){this.props=M,this.context=L,this.refs=R,this.updater=ot||E}S.prototype.isReactComponent={},S.prototype.setState=function(M,L){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,L,"setState")},S.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function _(){}_.prototype=S.prototype;function P(M,L,ot){this.props=M,this.context=L,this.refs=R,this.updater=ot||E}var U=P.prototype=new _;U.constructor=P,b(U,S.prototype),U.isPureReactComponent=!0;var N=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function B(M,L,ot,lt,X,ut){return ot=ut.ref,{$$typeof:s,type:M,key:L,ref:ot!==void 0?ot:null,props:ut}}function Q(M,L){return B(M.type,L,void 0,void 0,void 0,M.props)}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function w(M){var L={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ot){return L[ot]})}var G=/\/+/g;function nt(M,L){return typeof M=="object"&&M!==null&&M.key!=null?w(""+M.key):L.toString(36)}function it(){}function dt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(it,it):(M.status="pending",M.then(function(L){M.status==="pending"&&(M.status="fulfilled",M.value=L)},function(L){M.status==="pending"&&(M.status="rejected",M.reason=L)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function ht(M,L,ot,lt,X){var ut=typeof M;(ut==="undefined"||ut==="boolean")&&(M=null);var ct=!1;if(M===null)ct=!0;else switch(ut){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(M.$$typeof){case s:case t:ct=!0;break;case g:return ct=M._init,ht(ct(M._payload),L,ot,lt,X)}}if(ct)return X=X(M),ct=lt===""?"."+nt(M,0):lt,N(X)?(ot="",ct!=null&&(ot=ct.replace(G,"$&/")+"/"),ht(X,L,ot,"",function(Xt){return Xt})):X!=null&&(D(X)&&(X=Q(X,ot+(X.key==null||M&&M.key===X.key?"":(""+X.key).replace(G,"$&/")+"/")+ct)),L.push(X)),1;ct=0;var At=lt===""?".":lt+":";if(N(M))for(var Et=0;Et<M.length;Et++)lt=M[Et],ut=At+nt(lt,Et),ct+=ht(lt,L,ot,ut,X);else if(Et=x(M),typeof Et=="function")for(M=Et.call(M),Et=0;!(lt=M.next()).done;)lt=lt.value,ut=At+nt(lt,Et++),ct+=ht(lt,L,ot,ut,X);else if(ut==="object"){if(typeof M.then=="function")return ht(dt(M),L,ot,lt,X);throw L=String(M),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ct}function O(M,L,ot){if(M==null)return M;var lt=[],X=0;return ht(M,lt,"","",function(ut){return L.call(ot,ut,X++)}),lt}function Z(M){if(M._status===-1){var L=M._result;L=L(),L.then(function(ot){(M._status===0||M._status===-1)&&(M._status=1,M._result=ot)},function(ot){(M._status===0||M._status===-1)&&(M._status=2,M._result=ot)}),M._status===-1&&(M._status=0,M._result=L)}if(M._status===1)return M._result.default;throw M._result}var K=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function Mt(){}return ie.Children={map:O,forEach:function(M,L,ot){O(M,function(){L.apply(this,arguments)},ot)},count:function(M){var L=0;return O(M,function(){L++}),L},toArray:function(M){return O(M,function(L){return L})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ie.Component=S,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=P,ie.StrictMode=r,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ie.__COMPILER_RUNTIME={__proto__:null,c:function(M){return V.H.useMemoCache(M)}},ie.cache=function(M){return function(){return M.apply(null,arguments)}},ie.cloneElement=function(M,L,ot){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var lt=b({},M.props),X=M.key,ut=void 0;if(L!=null)for(ct in L.ref!==void 0&&(ut=void 0),L.key!==void 0&&(X=""+L.key),L)!H.call(L,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&L.ref===void 0||(lt[ct]=L[ct]);var ct=arguments.length-2;if(ct===1)lt.children=ot;else if(1<ct){for(var At=Array(ct),Et=0;Et<ct;Et++)At[Et]=arguments[Et+2];lt.children=At}return B(M.type,X,void 0,void 0,ut,lt)},ie.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},ie.createElement=function(M,L,ot){var lt,X={},ut=null;if(L!=null)for(lt in L.key!==void 0&&(ut=""+L.key),L)H.call(L,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(X[lt]=L[lt]);var ct=arguments.length-2;if(ct===1)X.children=ot;else if(1<ct){for(var At=Array(ct),Et=0;Et<ct;Et++)At[Et]=arguments[Et+2];X.children=At}if(M&&M.defaultProps)for(lt in ct=M.defaultProps,ct)X[lt]===void 0&&(X[lt]=ct[lt]);return B(M,ut,void 0,void 0,null,X)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(M){return{$$typeof:p,render:M}},ie.isValidElement=D,ie.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:Z}},ie.memo=function(M,L){return{$$typeof:h,type:M,compare:L===void 0?null:L}},ie.startTransition=function(M){var L=V.T,ot={};V.T=ot;try{var lt=M(),X=V.S;X!==null&&X(ot,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Mt,K)}catch(ut){K(ut)}finally{V.T=L}},ie.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ie.use=function(M){return V.H.use(M)},ie.useActionState=function(M,L,ot){return V.H.useActionState(M,L,ot)},ie.useCallback=function(M,L){return V.H.useCallback(M,L)},ie.useContext=function(M){return V.H.useContext(M)},ie.useDebugValue=function(){},ie.useDeferredValue=function(M,L){return V.H.useDeferredValue(M,L)},ie.useEffect=function(M,L,ot){var lt=V.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return lt.useEffect(M,L)},ie.useId=function(){return V.H.useId()},ie.useImperativeHandle=function(M,L,ot){return V.H.useImperativeHandle(M,L,ot)},ie.useInsertionEffect=function(M,L){return V.H.useInsertionEffect(M,L)},ie.useLayoutEffect=function(M,L){return V.H.useLayoutEffect(M,L)},ie.useMemo=function(M,L){return V.H.useMemo(M,L)},ie.useOptimistic=function(M,L){return V.H.useOptimistic(M,L)},ie.useReducer=function(M,L,ot){return V.H.useReducer(M,L,ot)},ie.useRef=function(M){return V.H.useRef(M)},ie.useState=function(M){return V.H.useState(M)},ie.useSyncExternalStore=function(M,L,ot){return V.H.useSyncExternalStore(M,L,ot)},ie.useTransition=function(){return V.H.useTransition()},ie.version="19.1.0",ie}var i_;function cd(){return i_||(i_=1,Vf.exports=fx()),Vf.exports}var Oo=cd();const hx=ud(Oo);var kf={exports:{}},To={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function dx(){return a_||(a_=1,function(s){function t(O,Z){var K=O.length;O.push(Z);t:for(;0<K;){var Mt=K-1>>>1,M=O[Mt];if(0<l(M,Z))O[Mt]=Z,O[K]=M,K=Mt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Z=O[0],K=O.pop();if(K!==Z){O[0]=K;t:for(var Mt=0,M=O.length,L=M>>>1;Mt<L;){var ot=2*(Mt+1)-1,lt=O[ot],X=ot+1,ut=O[X];if(0>l(lt,K))X<M&&0>l(ut,lt)?(O[Mt]=ut,O[X]=K,Mt=X):(O[Mt]=lt,O[ot]=K,Mt=ot);else if(X<M&&0>l(ut,K))O[Mt]=ut,O[X]=K,Mt=X;else break t}}return Z}function l(O,Z){var K=O.sortIndex-Z.sortIndex;return K!==0?K:O.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],g=1,v=null,x=3,E=!1,b=!1,R=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function N(O){for(var Z=i(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=O)r(h),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(h)}}function V(O){if(R=!1,N(O),!b)if(i(m)!==null)b=!0,H||(H=!0,nt());else{var Z=i(h);Z!==null&&ht(V,Z.startTime-O)}}var H=!1,B=-1,Q=5,D=-1;function w(){return S?!0:!(s.unstable_now()-D<Q)}function G(){if(S=!1,H){var O=s.unstable_now();D=O;var Z=!0;try{t:{b=!1,R&&(R=!1,P(B),B=-1),E=!0;var K=x;try{e:{for(N(O),v=i(m);v!==null&&!(v.expirationTime>O&&w());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var M=Mt(v.expirationTime<=O);if(O=s.unstable_now(),typeof M=="function"){v.callback=M,N(O),Z=!0;break e}v===i(m)&&r(m),N(O)}else r(m);v=i(m)}if(v!==null)Z=!0;else{var L=i(h);L!==null&&ht(V,L.startTime-O),Z=!1}}break t}finally{v=null,x=K,E=!1}Z=void 0}}finally{Z?nt():H=!1}}}var nt;if(typeof U=="function")nt=function(){U(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,dt=it.port2;it.port1.onmessage=G,nt=function(){dt.postMessage(null)}}else nt=function(){_(G,0)};function ht(O,Z){B=_(function(){O(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var K=x;x=Z;try{return O()}finally{x=K}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=x;x=O;try{return Z()}finally{x=K}},s.unstable_scheduleCallback=function(O,Z,K){var Mt=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Mt+K:Mt):K=Mt,O){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=K+M,O={id:g++,callback:Z,priorityLevel:O,startTime:K,expirationTime:M,sortIndex:-1},K>Mt?(O.sortIndex=K,t(h,O),i(m)===null&&O===i(h)&&(R?(P(B),B=-1):R=!0,ht(V,K-Mt))):(O.sortIndex=M,t(m,O),b||E||(b=!0,H||(H=!0,nt()))),O},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(O){var Z=x;return function(){var K=x;x=Z;try{return O.apply(this,arguments)}finally{x=K}}}}(Wf)),Wf}var r_;function px(){return r_||(r_=1,Xf.exports=dx()),Xf.exports}var qf={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function mx(){if(s_)return Sn;s_=1;var s=cd();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Sn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,g)},Sn.flushSync=function(m){var h=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=g,r.d.f()}},Sn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Sn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Sn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Sn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Sn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Sn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Sn.requestFormReset=function(m){r.d.r(m)},Sn.unstable_batchedUpdates=function(m,h){return m(h)},Sn.useFormState=function(m,h,g){return d.H.useFormState(m,h,g)},Sn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Sn.version="19.1.0",Sn}var o_;function gx(){if(o_)return qf.exports;o_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qf.exports=mx(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function _x(){if(l_)return To;l_=1;var s=px(),t=cd(),i=gx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===o)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,T=u.child;T;){if(T===a){y=!0,a=u,o=f;break}if(T===o){y=!0,o=u,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,o=u;break}if(T===o){y=!0,o=f,a=u;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function h(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=h(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case R:return"StrictMode";case V:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ht=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Mt=[],M=-1;function L(e){return{current:e}}function ot(e){0>M||(e.current=Mt[M],Mt[M]=null,M--)}function lt(e,n){M++,Mt[M]=e.current,e.current=n}var X=L(null),ut=L(null),ct=L(null),At=L(null);function Et(e,n){switch(lt(ct,n),lt(ut,e),lt(X,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Cg(n),e=wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ot(X),lt(X,e)}function Xt(){ot(X),ot(ut),ot(ct)}function re(e){e.memoizedState!==null&&lt(At,e);var n=X.current,a=wg(n,e.type);n!==a&&(lt(ut,e),lt(X,a))}function Ne(e){ut.current===e&&(ot(X),ot(ut)),At.current===e&&(ot(At),vo._currentValue=K)}var F=Object.prototype.hasOwnProperty,Ge=s.unstable_scheduleCallback,Se=s.unstable_cancelCallback,Te=s.unstable_shouldYield,Vt=s.unstable_requestPaint,Me=s.unstable_now,$t=s.unstable_getCurrentPriorityLevel,te=s.unstable_ImmediatePriority,z=s.unstable_UserBlockingPriority,A=s.unstable_NormalPriority,ft=s.unstable_LowPriority,St=s.unstable_IdlePriority,yt=s.log,xt=s.unstable_setDisableYieldValue,Gt=null,Rt=null;function Ut(e){if(typeof yt=="function"&&xt(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Gt,e)}catch{}}var kt=Math.clz32?Math.clz32:de,Ct=Math.log,Ot=Math.LN2;function de(e){return e>>>=0,e===0?32:31-(Ct(e)/Ot|0)|0}var jt=256,Nt=4194304;function Wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ee(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Wt(o):(y&=T,y!==0?u=Wt(y):a||(a=T&~e,a!==0&&(u=Wt(a))))):(T=o&~f,T!==0?u=Wt(T):y!==0?u=Wt(y):a||(a=o&~e,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function q(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function gt(){var e=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),e}function vt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Kt(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=y&~a;0<a;){var pt=31-kt(a),_t=1<<pt;T[pt]=0,I[pt]=-1;var et=$[pt];if(et!==null)for($[pt]=null,pt=0;pt<et.length;pt++){var rt=et[pt];rt!==null&&(rt.lane&=-536870913)}a&=~_t}o!==0&&pe(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function pe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function We(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Qe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function me(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function jn(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function Zn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var ri=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ri,cn="__reactProps$"+ri,Ai="__reactContainer$"+ri,_r="__reactEvents$"+ri,vr="__reactListeners$"+ri,Go="__reactHandles$"+ri,Ba="__reactResources$"+ri,Ji="__reactMarker$"+ri;function Sr(e){delete e[Ve],delete e[cn],delete e[_r],delete e[vr],delete e[Go]}function $i(e){var n=e[Ve];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ai]||a[Ve]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ng(e);e!==null;){if(a=e[Ve])return a;e=Ng(e)}return n}e=a,a=e.parentNode}return null}function ta(e){if(e=e[Ve]||e[Ai]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Fa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function C(e){var n=e[Ba];return n||(n=e[Ba]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(e){e[Ji]=!0}var at=new Set,st={};function j(e,n){Tt(e,n),Tt(e+"Capture",n)}function Tt(e,n){for(st[e]=n,e=0;e<n.length;e++)at.add(n[e])}var Lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pt={},zt={};function Qt(e){return F.call(zt,e)?!0:F.call(Pt,e)?!1:Lt.test(e)?zt[e]=!0:(Pt[e]=!0,!1)}function qt(e,n,a){if(Qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Bt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function se(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Pe,Ie;function tn(e){if(Pe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pe=n&&n[1]||"",Ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+Ie}var ge=!1;function Ft(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(rt){var et=rt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(rt){et=rt}e.call(_t.prototype)}}else{try{throw Error()}catch(rt){et=rt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var I=y.split(`
`),$=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===$.length)for(o=I.length-1,u=$.length-1;1<=o&&0<=u&&I[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==$[u]){var pt=`
`+I[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?tn(a):""}function rn(e){switch(e.tag){case 26:case 27:case 5:return tn(e.type);case 16:return tn("Lazy");case 13:return tn("Suspense");case 19:return tn("SuspenseList");case 0:case 15:return Ft(e.type,!1);case 11:return Ft(e.type.render,!1);case 1:return Ft(e.type,!0);case 31:return tn("Activity");default:return""}}function xe(e){try{var n="";do n+=rn(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bi(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function En(e){var n=bi(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ea(e){e._valueTracker||(e._valueTracker=En(e))}function qe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=bi(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ws=/[\n"\\]/g;function Be(e){return e.replace(ws,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ha(e,n,a,o,u,f,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ke(n)):e.value!==""+ke(n)&&(e.value=""+ke(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?xr(e,y,ke(n)):a!=null?xr(e,y,ke(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ke(T):e.removeAttribute("name")}function Vo(e,n,a,o,u,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ke(a):"",n=n!=null?""+ke(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function xr(e,n,a){n==="number"&&zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yr(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ke(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bd(e,n,a){if(n!=null&&(n=""+ke(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ke(a):""}function Rd(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ke(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Mr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var r0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||r0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Cd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Cd(e,f,n[f])}function Fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var s0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return o0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Hu=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Tr=null;function Dd(e){var n=ta(e);if(n&&(e=n.stateNode)){var a=e[cn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ha(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Be(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[cn]||null;if(!u)throw Error(r(90));Ha(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&qe(o)}break t;case"textarea":bd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yr(e,!!a.multiple,n,!1)}}}var Vu=!1;function Ud(e,n,a){if(Vu)return e(n,a);Vu=!0;try{var o=e(n);return o}finally{if(Vu=!1,(Er!==null||Tr!==null)&&(Cl(),Er&&(n=Er,e=Tr,Tr=Er=null,Dd(n),e)))for(n=0;n<e.length;n++)Dd(e[n])}}function Ds(e,n){var a=e.stateNode;if(a===null)return null;var o=a[cn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(Ri)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{ku=!1}var na=null,Xu=null,Xo=null;function Ld(){if(Xo)return Xo;var e,n=Xu,a=n.length,o,u="value"in na?na.value:na.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Xo=u.slice(e,1<o?1-o:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Nd(){return!1}function bn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Nd,this.isPropagationStopped=Nd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=bn(Ga),Ls=g({},Ga,{view:0,detail:0}),l0=bn(Ls),Wu,qu,Ns,jo=g({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ns&&(Ns&&e.type==="mousemove"?(Wu=e.screenX-Ns.screenX,qu=e.screenY-Ns.screenY):qu=Wu=0,Ns=e),Wu)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),Od=bn(jo),u0=g({},jo,{dataTransfer:0}),c0=bn(u0),f0=g({},Ls,{relatedTarget:0}),Yu=bn(f0),h0=g({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),d0=bn(h0),p0=g({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m0=bn(p0),g0=g({},Ga,{data:0}),Pd=bn(g0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=S0[e])?!!n[e]:!1}function ju(){return x0}var y0=g({},Ls,{key:function(e){if(e.key){var n=_0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?v0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M0=bn(y0),E0=g({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=bn(E0),T0=g({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),A0=bn(T0),b0=g({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=bn(b0),C0=g({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=bn(C0),D0=g({},Ga,{newState:0,oldState:0}),U0=bn(D0),L0=[9,13,27,32],Zu=Ri&&"CompositionEvent"in window,Os=null;Ri&&"documentMode"in document&&(Os=document.documentMode);var N0=Ri&&"TextEvent"in window&&!Os,Id=Ri&&(!Zu||Os&&8<Os&&11>=Os),Bd=" ",Fd=!1;function Hd(e,n){switch(e){case"keyup":return L0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ar=!1;function O0(e,n){switch(e){case"compositionend":return Gd(n);case"keypress":return n.which!==32?null:(Fd=!0,Bd);case"textInput":return e=n.data,e===Bd&&Fd?null:e;default:return null}}function P0(e,n){if(Ar)return e==="compositionend"||!Zu&&Hd(e,n)?(e=Ld(),Xo=Xu=na=null,Ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Id&&n.locale!=="ko"?null:n.data;default:return null}}var z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!z0[e.type]:n==="textarea"}function kd(e,n,a,o){Er?Tr?Tr.push(o):Tr=[o]:Er=o,n=Ol(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ps=null,zs=null;function I0(e){Eg(e,0)}function Zo(e){var n=Fa(e);if(qe(n))return e}function Xd(e,n){if(e==="change")return n}var Wd=!1;if(Ri){var Ku;if(Ri){var Qu="oninput"in document;if(!Qu){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),Qu=typeof qd.oninput=="function"}Ku=Qu}else Ku=!1;Wd=Ku&&(!document.documentMode||9<document.documentMode)}function Yd(){Ps&&(Ps.detachEvent("onpropertychange",jd),zs=Ps=null)}function jd(e){if(e.propertyName==="value"&&Zo(zs)){var n=[];kd(n,zs,e,Gu(e)),Ud(I0,n)}}function B0(e,n,a){e==="focusin"?(Yd(),Ps=n,zs=a,Ps.attachEvent("onpropertychange",jd)):e==="focusout"&&Yd()}function F0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(zs)}function H0(e,n){if(e==="click")return Zo(n)}function G0(e,n){if(e==="input"||e==="change")return Zo(n)}function V0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:V0;function Is(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!F.call(n,u)||!In(e[u],n[u]))return!1}return!0}function Zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,n){var a=Zd(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zd(a)}}function Qd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=zn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=zn(e.document)}return n}function Ju(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var k0=Ri&&"documentMode"in document&&11>=document.documentMode,br=null,$u=null,Bs=null,tc=!1;function $d(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tc||br==null||br!==zn(o)||(o=br,"selectionStart"in o&&Ju(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Bs&&Is(Bs,o)||(Bs=o,o=Ol($u,"onSelect"),0<o.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=br)))}function Va(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Rr={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},ec={},tp={};Ri&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function ka(e){if(ec[e])return ec[e];if(!Rr[e])return e;var n=Rr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in tp)return ec[e]=n[a];return e}var ep=ka("animationend"),np=ka("animationiteration"),ip=ka("animationstart"),X0=ka("transitionrun"),W0=ka("transitionstart"),q0=ka("transitioncancel"),ap=ka("transitionend"),rp=new Map,nc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nc.push("scrollEnd");function si(e,n){rp.set(e,n),j(n,[e])}var sp=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=sp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:xe(n)},sp.set(e,n),n)}return{value:e,source:n,stack:xe(n)}}var Qn=[],Cr=0,ic=0;function Ko(){for(var e=Cr,n=ic=Cr=0;n<e;){var a=Qn[n];Qn[n++]=null;var o=Qn[n];Qn[n++]=null;var u=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&op(a,u,f)}}function Qo(e,n,a,o){Qn[Cr++]=e,Qn[Cr++]=n,Qn[Cr++]=a,Qn[Cr++]=o,ic|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ac(e,n,a,o){return Qo(e,n,a,o),Jo(e)}function wr(e,n){return Qo(e,null,null,n),Jo(e)}function op(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-kt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Jo(e){if(50<uo)throw uo=0,ff=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function Y0(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(e,n,a,o){return new Y0(e,n,a,o)}function rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,n){var a=e.alternate;return a===null?(a=Bn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $o(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")rc(e)&&(y=1);else if(typeof e=="string")y=ZS(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Bn(31,a,n,u),e.elementType=D,e.lanes=f,e;case b:return Xa(a.children,u,f,n);case R:y=8,u|=24;break;case S:return e=Bn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case V:return e=Bn(13,a,n,u),e.elementType=V,e.lanes=f,e;case H:return e=Bn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case U:y=10;break t;case P:y=9;break t;case N:y=11;break t;case B:y=14;break t;case Q:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Bn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Xa(e,n,a,o){return e=Bn(7,e,o,n),e.lanes=a,e}function sc(e,n,a){return e=Bn(6,e,null,n),e.lanes=a,e}function oc(e,n,a){return n=Bn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ur=[],Lr=0,tl=null,el=0,Jn=[],$n=0,Wa=null,wi=1,Di="";function qa(e,n){Ur[Lr++]=el,Ur[Lr++]=tl,tl=e,el=n}function up(e,n,a){Jn[$n++]=wi,Jn[$n++]=Di,Jn[$n++]=Wa,Wa=e;var o=wi;e=Di;var u=32-kt(o)-1;o&=~(1<<u),a+=1;var f=32-kt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,wi=1<<32-kt(n)+u|a<<u|o,Di=f+e}else wi=1<<f|a<<u|o,Di=e}function lc(e){e.return!==null&&(qa(e,1),up(e,1,0))}function uc(e){for(;e===tl;)tl=Ur[--Lr],Ur[Lr]=null,el=Ur[--Lr],Ur[Lr]=null;for(;e===Wa;)Wa=Jn[--$n],Jn[$n]=null,Di=Jn[--$n],Jn[$n]=null,wi=Jn[--$n],Jn[$n]=null}var Tn=null,je=null,Ee=!1,Ya=null,pi=!1,cc=Error(r(519));function ja(e){var n=Error(r(418,""));throw Gs(Kn(n,e)),cc}function cp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ve]=e,n[cn]=o,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)he(fo[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Vo(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ea(n);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),Rd(n,o.value,o.defaultValue,o.children),ea(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Rg(n.textContent,a)?(o.popover!=null&&(he("beforetoggle",n),he("toggle",n)),o.onScroll!=null&&he("scroll",n),o.onScrollEnd!=null&&he("scrollend",n),o.onClick!=null&&(n.onclick=Pl),n=!0):n=!1,n||ja(e)}function fp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Tn=Tn.return}}function Fs(e){if(e!==Tn)return!1;if(!Ee)return fp(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rf(e.type,e.memoizedProps)),a=!a),a&&je&&ja(e),fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=li(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,va(e.type)?(e=Uf,Uf=null,je=e):je=n):je=Tn?li(e.stateNode.nextSibling):null;return!0}function Hs(){je=Tn=null,Ee=!1}function hp(){var e=Ya;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),Ya=null),e}function Gs(e){Ya===null?Ya=[e]:Ya.push(e)}var fc=L(null),Za=null,Ui=null;function ia(e,n,a){lt(fc,n._currentValue),n._currentValue=a}function Li(e){e._currentValue=fc.current,ot(fc)}function hc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function dc(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),hc(f.return,a,e),o||(y=null);break t}f=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),hc(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Vs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=u.type;In(u.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(u===At.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}u=u.return}e!==null&&dc(n,e,a,o),n.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ka(e){Za=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vn(e){return dp(Za,e)}function il(e,n){return Za===null&&Ka(e),dp(e,n)}function dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ui===null){if(e===null)throw Error(r(308));Ui=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ui=Ui.next=n;return a}var j0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Z0=s.unstable_scheduleCallback,K0=s.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pc(){return{controller:new j0,data:new Map,refCount:0}}function ks(e){e.refCount--,e.refCount===0&&Z0(K0,function(){e.controller.abort()})}var Xs=null,mc=0,Nr=0,Or=null;function Q0(e,n){if(Xs===null){var a=Xs=[];mc=0,Nr=vf(),Or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mc++,n.then(pp,pp),n}function pp(){if(--mc===0&&Xs!==null){Or!==null&&(Or.status="fulfilled");var e=Xs;Xs=null,Nr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function J0(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Q0(e,n),mp!==null&&mp(e,n)};var Qa=L(null);function gc(){var e=Qa.current;return e!==null?e:ze.pooledCache}function al(e,n){n===null?lt(Qa,Qa.current):lt(Qa,n.pool)}function gp(){var e=gc();return e===null?null:{parent:sn._currentValue,pool:e}}var Ws=Error(r(460)),_p=Error(r(474)),rl=Error(r(542)),_c={then:function(){}};function vp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function Sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sl,sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yp(e),e;default:if(typeof n.status=="string")n.then(sl,sl);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,yp(e),e}throw qs=n,Ws}}var qs=null;function xp(){if(qs===null)throw Error(r(459));var e=qs;return qs=null,e}function yp(e){if(e===Ws||e===rl)throw Error(r(483))}var aa=!1;function vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Jo(e),op(e,null,a),n}return Qo(e,o,n,a),Jo(e)}function Ys(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,We(e,a)}}function xc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var yc=!1;function js(){if(yc){var e=Or;if(e!==null)throw e}}function Zs(e,n,a,o){yc=!1;var u=e.updateQueue;aa=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,$=I.next;I.next=null,y===null?f=$:y.next=$,y=I;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,T=pt.lastBaseUpdate,T!==y&&(T===null?pt.firstBaseUpdate=$:T.next=$,pt.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;y=0,pt=$=I=null,T=f;do{var et=T.lane&-536870913,rt=et!==T.lane;if(rt?(_e&et)===et:(o&et)===et){et!==0&&et===Nr&&(yc=!0),pt!==null&&(pt=pt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Jt=e,Yt=T;et=n;var Le=a;switch(Yt.tag){case 1:if(Jt=Yt.payload,typeof Jt=="function"){_t=Jt.call(Le,_t,et);break t}_t=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=Yt.payload,et=typeof Jt=="function"?Jt.call(Le,_t,et):Jt,et==null)break t;_t=g({},_t,et);break t;case 2:aa=!0}}et=T.callback,et!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pt===null?($=pt=rt,I=_t):pt=pt.next=rt,y|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);pt===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=$,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),pa|=y,e.lanes=y,e.memoizedState=_t}}function Mp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ep(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mp(a[e],n)}var Pr=L(null),ol=L(0);function Tp(e,n){e=Fi,lt(ol,e),lt(Pr,n),Fi=e|n.baseLanes}function Mc(){lt(ol,Fi),lt(Pr,Pr.current)}function Ec(){Fi=ol.current,ot(Pr),ot(ol)}var oa=0,ue=null,De=null,en=null,ll=!1,zr=!1,Ja=!1,ul=0,Ks=0,Ir=null,$0=0;function Je(){throw Error(r(321))}function Tc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!In(e[a],n[a]))return!1;return!0}function Ac(e,n,a,o,u,f){return oa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?om:lm,Ja=!1,f=a(o,u),Ja=!1,zr&&(f=bp(n,a,o,u)),Ap(e),f}function Ap(e){O.H=ml;var n=De!==null&&De.next!==null;if(oa=0,en=De=ue=null,ll=!1,Ks=0,Ir=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&nl(e)&&(fn=!0))}function bp(e,n,a,o){ue=e;var u=0;do{if(zr&&(Ir=null),Ks=0,zr=!1,25<=u)throw Error(r(301));if(u+=1,en=De=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=sS,f=n(a,o)}while(zr);return f}function tS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Qs(n):n,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ue.flags|=1024),n}function bc(){var e=ul!==0;return ul=0,e}function Rc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cc(e){if(ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ll=!1}oa=0,en=De=ue=null,zr=!1,Ks=ul=0,Ir=null}function Rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?ue.memoizedState=en=e:en=en.next=e,en}function nn(){if(De===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=en===null?ue.memoizedState:en.next;if(n!==null)en=n,De=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},en===null?ue.memoizedState=en=e:en=en.next=e}return en}function wc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qs(e){var n=Ks;return Ks+=1,Ir===null&&(Ir=[]),e=Sp(Ir,e,n),n=ue,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?om:lm),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qs(e);if(e.$$typeof===U)return vn(e)}throw Error(r(438,String(e)))}function Dc(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wc(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Ni(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=nn();return Uc(n,De,e)}function Uc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=y=null,I=null,$=n,pt=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(_e&_t)===_t:(oa&_t)===_t){var et=$.revertLane;if(et===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Nr&&(pt=!0);else if((oa&et)===et){$=$.next,et===Nr&&(pt=!0);continue}else _t={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(T=I=_t,y=f):I=I.next=_t,ue.lanes|=et,pa|=et;_t=$.action,Ja&&a(f,_t),f=$.hasEagerState?$.eagerState:a(f,_t)}else et={lane:_t,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(T=I=et,y=f):I=I.next=et,ue.lanes|=_t,pa|=_t;$=$.next}while($!==null&&$!==n);if(I===null?y=f:I.next=T,!In(f,e.memoizedState)&&(fn=!0,pt&&(a=Or,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Lc(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);In(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Rp(e,n,a){var o=ue,u=nn(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!In((De||u).memoizedState,a);y&&(u.memoizedState=a,fn=!0),u=u.queue;var T=Dp.bind(null,o,u,e);if(Js(2048,8,T,[e]),u.getSnapshot!==n||y||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Br(9,hl(),wp.bind(null,o,u,a,n),null),ze===null)throw Error(r(349));f||(oa&124)!==0||Cp(o,n,a)}return a}function Cp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=wc(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wp(e,n,a,o){n.value=a,n.getSnapshot=o,Up(n)&&Lp(e)}function Dp(e,n,a){return a(function(){Up(n)&&Lp(e)})}function Up(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!In(e,a)}catch{return!0}}function Lp(e){var n=wr(e,2);n!==null&&kn(n,e,2)}function Nc(e){var n=Rn();if(typeof e=="function"){var a=e;if(e=a(),Ja){Ut(!0);try{a()}finally{Ut(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},n}function Np(e,n,a,o){return e.baseState=a,Uc(e,De,typeof o=="function"?o:Ni)}function eS(e,n,a,o,u){if(pl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Op(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,y={};O.T=y;try{var T=a(u,o),I=O.S;I!==null&&I(y,T),Pp(e,n,T)}catch($){Oc(e,n,$)}finally{O.T=f}}else try{f=a(u,o),Pp(e,n,f)}catch($){Oc(e,n,$)}}function Pp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zp(e,n,o)},function(o){return Oc(e,n,o)}):zp(e,n,a)}function zp(e,n,a){n.status="fulfilled",n.value=a,Ip(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Op(e,a)))}function Oc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ip(n),n=n.next;while(n!==o)}e.action=null}function Ip(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Bp(e,n){return n}function Fp(e,n){if(Ee){var a=ze.formState;if(a!==null){t:{var o=ue;if(Ee){if(je){e:{for(var u=je,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=li(u.nextSibling),o=u.data==="F!";break t}}ja(o)}o=!1}o&&(n=a[0])}}return a=Rn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bp,lastRenderedState:n},a.queue=o,a=am.bind(null,ue,o),o.dispatch=a,o=Nc(!1),f=Fc.bind(null,ue,!1,o.queue),o=Rn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=eS.bind(null,ue,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Hp(e){var n=nn();return Gp(n,De,e)}function Gp(e,n,a){if(n=Uc(e,n,Bp)[0],e=fl(Ni)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Qs(n)}catch(y){throw y===Ws?rl:y}else o=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Br(9,hl(),nS.bind(null,u,a),null)),[o,f,e]}function nS(e,n){e.action=n}function Vp(e){var n=nn(),a=De;if(a!==null)return Gp(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Br(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=wc(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function hl(){return{destroy:void 0,resource:void 0}}function kp(){return nn().memoizedState}function dl(e,n,a,o){var u=Rn();o=o===void 0?null:o,ue.flags|=e,u.memoizedState=Br(1|n,hl(),a,o)}function Js(e,n,a,o){var u=nn();o=o===void 0?null:o;var f=u.memoizedState.inst;De!==null&&o!==null&&Tc(o,De.memoizedState.deps)?u.memoizedState=Br(n,f,a,o):(ue.flags|=e,u.memoizedState=Br(1|n,f,a,o))}function Xp(e,n){dl(8390656,8,e,n)}function Wp(e,n){Js(2048,8,e,n)}function qp(e,n){return Js(4,2,e,n)}function Yp(e,n){return Js(4,4,e,n)}function jp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zp(e,n,a){a=a!=null?a.concat([e]):null,Js(4,4,jp.bind(null,n,e),a)}function Pc(){}function Kp(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Tc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Qp(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Tc(n,o[1]))return o[0];if(o=e(),Ja){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o}function zc(e,n,a){return a===void 0||(oa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=tg(),ue.lanes|=e,pa|=e,a)}function Jp(e,n,a,o){return In(a,n)?a:Pr.current!==null?(e=zc(e,a,o),In(e,n)||(fn=!0),e):(oa&42)===0?(fn=!0,e.memoizedState=a):(e=tg(),ue.lanes|=e,pa|=e,n)}function $p(e,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var y=O.T,T={};O.T=T,Fc(e,!1,n,a);try{var I=u(),$=O.S;if($!==null&&$(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=J0(I,o);$s(e,n,pt,Vn(e))}else $s(e,n,o,Vn(e))}catch(_t){$s(e,n,{then:function(){},status:"rejected",reason:_t},Vn())}finally{Z.p=f,O.T=y}}function iS(){}function Ic(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=tm(e).queue;$p(e,u,n,K,a===null?iS:function(){return em(e),a(o)})}function tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=tm(e).next.queue;$s(e,n,{},Vn())}function Bc(){return vn(vo)}function nm(){return nn().memoizedState}function im(){return nn().memoizedState}function aS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Vn();e=ra(a);var o=sa(n,e,a);o!==null&&(kn(o,n,a),Ys(o,n,a)),n={cache:pc()},e.payload=n;return}n=n.return}}function rS(e,n,a){var o=Vn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pl(e)?rm(n,a):(a=ac(e,n,a,o),a!==null&&(kn(a,e,o),sm(a,n,o)))}function am(e,n,a){var o=Vn();$s(e,n,a,o)}function $s(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(e))rm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(u.hasEagerState=!0,u.eagerState=T,In(T,y))return Qo(e,n,u,0),ze===null&&Ko(),!1}catch{}finally{}if(a=ac(e,n,u,o),a!==null)return kn(a,e,o),sm(a,n,o),!0}return!1}function Fc(e,n,a,o){if(o={lane:2,revertLane:vf(),action:o,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(n)throw Error(r(479))}else n=ac(e,a,o,2),n!==null&&kn(n,e,2)}function pl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function rm(e,n){zr=ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function sm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,We(e,a)}}var ml={readContext:vn,use:cl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},om={readContext:vn,use:cl,useCallback:function(e,n){return Rn().memoizedState=[e,n===void 0?null:n],e},useContext:vn,useEffect:Xp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,dl(4194308,4,jp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return dl(4194308,4,e,n)},useInsertionEffect:function(e,n){dl(4,2,e,n)},useMemo:function(e,n){var a=Rn();n=n===void 0?null:n;var o=e();if(Ja){Ut(!0);try{e()}finally{Ut(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Rn();if(a!==void 0){var u=a(n);if(Ja){Ut(!0);try{a(n)}finally{Ut(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=rS.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Rn();return e={current:e},n.memoizedState=e},useState:function(e){e=Nc(e);var n=e.queue,a=am.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pc,useDeferredValue:function(e,n){var a=Rn();return zc(a,e,n)},useTransition:function(){var e=Nc(!1);return e=$p.bind(null,ue,e.queue,!0,!1),Rn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Rn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));(_e&124)!==0||Cp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Xp(Dp.bind(null,o,f,e),[e]),o.flags|=2048,Br(9,hl(),wp.bind(null,o,f,a,n),null),a},useId:function(){var e=Rn(),n=ze.identifierPrefix;if(Ee){var a=Di,o=wi;a=(o&~(1<<32-kt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=ul++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=$0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Bc,useFormState:Fp,useActionState:Fp,useOptimistic:function(e){var n=Rn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fc.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Dc,useCacheRefresh:function(){return Rn().memoizedState=aS.bind(null,ue)}},lm={readContext:vn,use:cl,useCallback:Kp,useContext:vn,useEffect:Wp,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:fl,useRef:kp,useState:function(){return fl(Ni)},useDebugValue:Pc,useDeferredValue:function(e,n){var a=nn();return Jp(a,De.memoizedState,e,n)},useTransition:function(){var e=fl(Ni)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Qs(e),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:Bc,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var a=nn();return Np(a,De,e,n)},useMemoCache:Dc,useCacheRefresh:im},sS={readContext:vn,use:cl,useCallback:Kp,useContext:vn,useEffect:Wp,useImperativeHandle:Zp,useInsertionEffect:qp,useLayoutEffect:Yp,useMemo:Qp,useReducer:Lc,useRef:kp,useState:function(){return Lc(Ni)},useDebugValue:Pc,useDeferredValue:function(e,n){var a=nn();return De===null?zc(a,e,n):Jp(a,De.memoizedState,e,n)},useTransition:function(){var e=Lc(Ni)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Qs(e),n]},useSyncExternalStore:Rp,useId:nm,useHostTransitionStatus:Bc,useFormState:Vp,useActionState:Vp,useOptimistic:function(e,n){var a=nn();return De!==null?Np(a,De,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Dc,useCacheRefresh:im},Fr=null,to=0;function gl(e){var n=to;return to+=1,Fr===null&&(Fr=[]),Sp(Fr,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function um(e){var n=e._init;return n(e._payload)}function cm(e){function n(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Ci(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function y(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,J,mt){return k===null||k.tag!==6?(k=sc(J,Y.mode,mt),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function I(Y,k,J,mt){var It=J.type;return It===b?pt(Y,k,J.props.children,mt,J.key):k!==null&&(k.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===Q&&um(It)===k.type)?(k=u(k,J.props),eo(k,J),k.return=Y,k):(k=$o(J.type,J.key,J.props,null,Y.mode,mt),eo(k,J),k.return=Y,k)}function $(Y,k,J,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=oc(J,Y.mode,mt),k.return=Y,k):(k=u(k,J.children||[]),k.return=Y,k)}function pt(Y,k,J,mt,It){return k===null||k.tag!==7?(k=Xa(J,Y.mode,mt,It),k.return=Y,k):(k=u(k,J),k.return=Y,k)}function _t(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=sc(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return J=$o(k.type,k.key,k.props,null,Y.mode,J),eo(J,k),J.return=Y,J;case E:return k=oc(k,Y.mode,J),k.return=Y,k;case Q:var mt=k._init;return k=mt(k._payload),_t(Y,k,J)}if(ht(k)||nt(k))return k=Xa(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return _t(Y,gl(k),J);if(k.$$typeof===U)return _t(Y,il(Y,k),J);_l(Y,k)}return null}function et(Y,k,J,mt){var It=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:T(Y,k,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return J.key===It?I(Y,k,J,mt):null;case E:return J.key===It?$(Y,k,J,mt):null;case Q:return It=J._init,J=It(J._payload),et(Y,k,J,mt)}if(ht(J)||nt(J))return It!==null?null:pt(Y,k,J,mt,null);if(typeof J.then=="function")return et(Y,k,gl(J),mt);if(J.$$typeof===U)return et(Y,k,il(Y,J),mt);_l(Y,J)}return null}function rt(Y,k,J,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get(J)||null,T(k,Y,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return Y=Y.get(mt.key===null?J:mt.key)||null,I(k,Y,mt,It);case E:return Y=Y.get(mt.key===null?J:mt.key)||null,$(k,Y,mt,It);case Q:var ce=mt._init;return mt=ce(mt._payload),rt(Y,k,J,mt,It)}if(ht(mt)||nt(mt))return Y=Y.get(J)||null,pt(k,Y,mt,It,null);if(typeof mt.then=="function")return rt(Y,k,J,gl(mt),It);if(mt.$$typeof===U)return rt(Y,k,J,il(k,mt),It);_l(k,mt)}return null}function Jt(Y,k,J,mt){for(var It=null,ce=null,Ht=k,Zt=k=0,dn=null;Ht!==null&&Zt<J.length;Zt++){Ht.index>Zt?(dn=Ht,Ht=null):dn=Ht.sibling;var ye=et(Y,Ht,J[Zt],mt);if(ye===null){Ht===null&&(Ht=dn);break}e&&Ht&&ye.alternate===null&&n(Y,Ht),k=f(ye,k,Zt),ce===null?It=ye:ce.sibling=ye,ce=ye,Ht=dn}if(Zt===J.length)return a(Y,Ht),Ee&&qa(Y,Zt),It;if(Ht===null){for(;Zt<J.length;Zt++)Ht=_t(Y,J[Zt],mt),Ht!==null&&(k=f(Ht,k,Zt),ce===null?It=Ht:ce.sibling=Ht,ce=Ht);return Ee&&qa(Y,Zt),It}for(Ht=o(Ht);Zt<J.length;Zt++)dn=rt(Ht,Y,Zt,J[Zt],mt),dn!==null&&(e&&dn.alternate!==null&&Ht.delete(dn.key===null?Zt:dn.key),k=f(dn,k,Zt),ce===null?It=dn:ce.sibling=dn,ce=dn);return e&&Ht.forEach(function(Ea){return n(Y,Ea)}),Ee&&qa(Y,Zt),It}function Yt(Y,k,J,mt){if(J==null)throw Error(r(151));for(var It=null,ce=null,Ht=k,Zt=k=0,dn=null,ye=J.next();Ht!==null&&!ye.done;Zt++,ye=J.next()){Ht.index>Zt?(dn=Ht,Ht=null):dn=Ht.sibling;var Ea=et(Y,Ht,ye.value,mt);if(Ea===null){Ht===null&&(Ht=dn);break}e&&Ht&&Ea.alternate===null&&n(Y,Ht),k=f(Ea,k,Zt),ce===null?It=Ea:ce.sibling=Ea,ce=Ea,Ht=dn}if(ye.done)return a(Y,Ht),Ee&&qa(Y,Zt),It;if(Ht===null){for(;!ye.done;Zt++,ye=J.next())ye=_t(Y,ye.value,mt),ye!==null&&(k=f(ye,k,Zt),ce===null?It=ye:ce.sibling=ye,ce=ye);return Ee&&qa(Y,Zt),It}for(Ht=o(Ht);!ye.done;Zt++,ye=J.next())ye=rt(Ht,Y,Zt,ye.value,mt),ye!==null&&(e&&ye.alternate!==null&&Ht.delete(ye.key===null?Zt:ye.key),k=f(ye,k,Zt),ce===null?It=ye:ce.sibling=ye,ce=ye);return e&&Ht.forEach(function(ox){return n(Y,ox)}),Ee&&qa(Y,Zt),It}function Le(Y,k,J,mt){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case x:t:{for(var It=J.key;k!==null;){if(k.key===It){if(It=J.type,It===b){if(k.tag===7){a(Y,k.sibling),mt=u(k,J.props.children),mt.return=Y,Y=mt;break t}}else if(k.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===Q&&um(It)===k.type){a(Y,k.sibling),mt=u(k,J.props),eo(mt,J),mt.return=Y,Y=mt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===b?(mt=Xa(J.props.children,Y.mode,mt,J.key),mt.return=Y,Y=mt):(mt=$o(J.type,J.key,J.props,null,Y.mode,mt),eo(mt,J),mt.return=Y,Y=mt)}return y(Y);case E:t:{for(It=J.key;k!==null;){if(k.key===It)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),mt=u(k,J.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}mt=oc(J,Y.mode,mt),mt.return=Y,Y=mt}return y(Y);case Q:return It=J._init,J=It(J._payload),Le(Y,k,J,mt)}if(ht(J))return Jt(Y,k,J,mt);if(nt(J)){if(It=nt(J),typeof It!="function")throw Error(r(150));return J=It.call(J),Yt(Y,k,J,mt)}if(typeof J.then=="function")return Le(Y,k,gl(J),mt);if(J.$$typeof===U)return Le(Y,k,il(Y,J),mt);_l(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),mt=u(k,J),mt.return=Y,Y=mt):(a(Y,k),mt=sc(J,Y.mode,mt),mt.return=Y,Y=mt),y(Y)):a(Y,k)}return function(Y,k,J,mt){try{to=0;var It=Le(Y,k,J,mt);return Fr=null,It}catch(Ht){if(Ht===Ws||Ht===rl)throw Ht;var ce=Bn(29,Ht,null,Y.mode);return ce.lanes=mt,ce.return=Y,ce}finally{}}}var Hr=cm(!0),fm=cm(!1),ti=L(null),mi=null;function la(e){var n=e.alternate;lt(on,on.current&1),lt(ti,e),mi===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(mi=e)}function hm(e){if(e.tag===22){if(lt(on,on.current),lt(ti,e),mi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(mi=e)}}else ua()}function ua(){lt(on,on.current),lt(ti,ti.current)}function Oi(e){ot(ti),mi===e&&(mi=null),ot(on)}var on=L(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Df(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Hc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gc={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Vn(),u=ra(o);u.payload=n,a!=null&&(u.callback=a),n=sa(e,u,o),n!==null&&(kn(n,e,o),Ys(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Vn(),u=ra(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=sa(e,u,o),n!==null&&(kn(n,e,o),Ys(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Vn(),o=ra(a);o.tag=2,n!=null&&(o.callback=n),n=sa(e,o,a),n!==null&&(kn(n,e,a),Ys(n,e,a))}};function dm(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Is(a,o)||!Is(u,f):!0}function pm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Gc.enqueueReplaceState(n,n.state,null)}function $a(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function mm(e){Sl(e)}function gm(e){console.error(e)}function _m(e){Sl(e)}function xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function vm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Vc(e,n,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(e,n)},a}function Sm(e){return e=ra(e),e.tag=3,e}function xm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){vm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){vm(n,a,o),typeof u!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function oS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 13:return mi===null?df():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===_c?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),mf(e,o,u)),!1;case 22:return a.flags|=65536,o===_c?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),mf(e,o,u)),!1}throw Error(r(435,a.tag))}return mf(e,o,u),df(),!1}if(Ee)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==cc&&(e=Error(r(422),{cause:o}),Gs(Kn(e,a)))):(o!==cc&&(n=Error(r(423),{cause:o}),Gs(Kn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Kn(o,a),u=Vc(e.stateNode,o,u),xc(e,u),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:o});if(f=Kn(f,a),lo===null?lo=[f]:lo.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=Kn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Vc(a.stateNode,o,e),xc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ma===null||!ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Sm(u),xm(u,e,a,o),xc(a,u),!1}a=a.return}while(a!==null);return!1}var ym=Error(r(461)),fn=!1;function mn(e,n,a,o){n.child=e===null?fm(n,null,a,o):Hr(n,e.child,a,o)}function Mm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return Ka(n),o=Ac(e,n,a,y,f,u),T=bc(),e!==null&&!fn?(Rc(e,n,u),Pi(e,n,u)):(Ee&&T&&lc(n),n.flags|=1,mn(e,n,o,u),n.child)}function Em(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!rc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Tm(e,n,f,o,u)):(e=$o(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Kc(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(y,o)&&e.ref===n.ref)return Pi(e,n,u)}return n.flags|=1,e=Ci(f,o),e.ref=n.ref,e.return=n,n.child=e}function Tm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Is(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Kc(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Pi(e,n,u)}return kc(e,n,a,o,u)}function Am(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return bm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,f!==null?f.cachePool:null),f!==null?Tp(n,f):Mc(),hm(n);else return n.lanes=n.childLanes=536870912,bm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(al(n,f.cachePool),Tp(n,f),ua(),n.memoizedState=null):(e!==null&&al(n,null),Mc(),ua());return mn(e,n,u,a),n.child}function bm(e,n,a,o){var u=gc();return u=u===null?null:{parent:sn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&al(n,null),Mc(),hm(n),e!==null&&Vs(e,n,o,!0),null}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function kc(e,n,a,o,u){return Ka(n),a=Ac(e,n,a,o,void 0,u),o=bc(),e!==null&&!fn?(Rc(e,n,u),Pi(e,n,u)):(Ee&&o&&lc(n),n.flags|=1,mn(e,n,a,u),n.child)}function Rm(e,n,a,o,u,f){return Ka(n),n.updateQueue=null,a=bp(n,o,a,u),Ap(e),o=bc(),e!==null&&!fn?(Rc(e,n,f),Pi(e,n,f)):(Ee&&o&&lc(n),n.flags|=1,mn(e,n,a,f),n.child)}function Cm(e,n,a,o,u){if(Ka(n),n.stateNode===null){var f=Dr,y=a.contextType;typeof y=="object"&&y!==null&&(f=vn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},vc(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?vn(y):Dr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Hc(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Gc.enqueueReplaceState(f,f.state,null),Zs(n,o,f,u),js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=$a(a,T);f.props=I;var $=f.context,pt=a.contextType;y=Dr,typeof pt=="object"&&pt!==null&&(y=vn(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==y)&&pm(n,f,o,y),aa=!1;var et=n.memoizedState;f.state=et,Zs(n,o,f,u),js(),$=n.memoizedState,T||et!==$||aa?(typeof _t=="function"&&(Hc(n,a,_t,o),$=n.memoizedState),(I=aa||dm(n,a,I,o,et,$,y))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=y,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Sc(e,n),y=n.memoizedProps,pt=$a(a,y),f.props=pt,_t=n.pendingProps,et=f.context,$=a.contextType,I=Dr,typeof $=="object"&&$!==null&&(I=vn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==_t||et!==I)&&pm(n,f,o,I),aa=!1,et=n.memoizedState,f.state=et,Zs(n,o,f,u),js();var rt=n.memoizedState;y!==_t||et!==rt||aa||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof T=="function"&&(Hc(n,a,T,o),rt=n.memoizedState),(pt=aa||dm(n,a,pt,o,et,rt,I)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=I,o=pt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,yl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Hr(n,e.child,null,u),n.child=Hr(n,null,a,u)):mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Pi(e,n,u),e}function wm(e,n,a,o){return Hs(),n.flags|=256,mn(e,n,a,o),n.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wc(e){return{baseLanes:e,cachePool:gp()}}function qc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Dm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?la(n):ua(),Ee){var T=je,I;if(I=T){t:{for(I=T,T=pi;I.nodeType!==8;){if(!T){T=null;break t}if(I=li(I.nextSibling),I===null){T=null;break t}}T=I}T!==null?(n.memoizedState={dehydrated:T,treeContext:Wa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},I=Bn(18,null,null,0),I.stateNode=T,I.return=n,n.child=I,Tn=n,je=null,I=!0):I=!1}I||ja(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Df(T)?n.lanes=32:n.lanes=536870912,null;Oi(n)}return T=o.children,o=o.fallback,u?(ua(),u=n.mode,T=Ml({mode:"hidden",children:T},u),o=Xa(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=Wc(a),u.childLanes=qc(e,y,a),n.memoizedState=Xc,o):(la(n),Yc(n,T))}if(I=e.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(la(n),n.flags&=-257,n=jc(e,n,a)):n.memoizedState!==null?(ua(),n.child=e.child,n.flags|=128,n=null):(ua(),u=o.fallback,T=n.mode,o=Ml({mode:"visible",children:o.children},T),u=Xa(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Hr(n,e.child,null,a),o=n.child,o.memoizedState=Wc(a),o.childLanes=qc(e,y,a),n.memoizedState=Xc,n=u);else if(la(n),Df(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(r(419)),o.stack="",o.digest=y,Gs({value:o,source:null,stack:null}),n=jc(e,n,a)}else if(fn||Vs(e,n,a,!1),y=(a&e.childLanes)!==0,fn||y){if(y=ze,y!==null&&(o=a&-a,o=(o&42)!==0?1:Qe(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,wr(e,o),kn(y,e,o),ym;T.data==="$?"||df(),n=jc(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,je=li(T.nextSibling),Tn=n,Ee=!0,Ya=null,pi=!1,e!==null&&(Jn[$n++]=wi,Jn[$n++]=Di,Jn[$n++]=Wa,wi=e.id,Di=e.overflow,Wa=n),n=Yc(n,o.children),n.flags|=4096);return n}return u?(ua(),u=o.fallback,T=n.mode,I=e.child,$=I.sibling,o=Ci(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,$!==null?u=Ci($,u):(u=Xa(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=Wc(a):(I=T.cachePool,I!==null?($=sn._currentValue,I=I.parent!==$?{parent:$,pool:$}:I):I=gp(),T={baseLanes:T.baseLanes|a,cachePool:I}),u.memoizedState=T,u.childLanes=qc(e,y,a),n.memoizedState=Xc,o):(la(n),a=e.child,e=a.sibling,a=Ci(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Yc(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=Bn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function jc(e,n,a){return Hr(n,e.child,null,a),e=Yc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Um(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),hc(e.return,n,a)}function Zc(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Lm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(mn(e,n,o.children,a),o=on.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Um(e,a,n);else if(e.tag===19)Um(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(lt(on,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Zc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Zc(n,!0,a,null,f);break;case"together":Zc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ci(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ci(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Kc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function lS(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),ia(n,sn,e.memoizedState.cache),Hs();break;case 27:case 5:re(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:ia(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(la(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dm(e,n,a):(la(n),e=Pi(e,n,a),e!==null?e.sibling:null);la(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Vs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Lm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),lt(on,on.current),o)break;return null;case 22:case 23:return n.lanes=0,Am(e,n,a);case 24:ia(n,sn,e.memoizedState.cache)}return Pi(e,n,a)}function Nm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Kc(e,a)&&(n.flags&128)===0)return fn=!1,lS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Ee&&(n.flags&1048576)!==0&&up(n,el,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")rc(o)?(e=$a(o,e),n.tag=1,n=Cm(null,n,o,e,a)):(n.tag=0,n=kc(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===N){n.tag=11,n=Mm(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=Em(null,n,o,e,a);break t}}throw n=dt(o)||o,Error(r(306,n,""))}}return n;case 0:return kc(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=$a(o,n.pendingProps),Cm(e,n,o,u,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Sc(e,n),Zs(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ia(n,sn,o),o!==f.cache&&dc(n,[sn],a,!0),js(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wm(e,n,o,a);break t}else if(o!==u){u=Kn(Error(r(424)),n),Gs(u),n=wm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=li(e.firstChild),Tn=n,Ee=!0,Ya=null,pi=!0,a=fm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Hs(),o===u){n=Pi(e,n,a);break t}mn(e,n,o,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=Ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=zl(ct.current).createElement(a),o[Ve]=n,o[cn]=e,_n(o,a,e),W(o),n.stateNode=o):n.memoizedState=Ig(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return re(n),e===null&&Ee&&(o=n.stateNode=Og(n.type,n.pendingProps,ct.current),Tn=n,pi=!0,u=je,va(n.type)?(Uf=u,je=li(o.firstChild)):je=u),mn(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=je)&&(o=zS(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Tn=n,je=li(o.firstChild),pi=!1,u=!0):u=!1),u||ja(n)),re(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Rf(u,f)?o=null:y!==null&&Rf(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Ac(e,n,tS,null,null,a),vo._currentValue=u),yl(e,n),mn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=je)&&(a=IS(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Tn=n,je=null,e=!0):e=!1),e||ja(n)),null;case 13:return Dm(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Hr(n,null,o,a):mn(e,n,o,a),n.child;case 11:return Mm(e,n,n.type,n.pendingProps,a);case 7:return mn(e,n,n.pendingProps,a),n.child;case 8:return mn(e,n,n.pendingProps.children,a),n.child;case 12:return mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ia(n,n.type,o.value),mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ka(n),u=vn(u),o=o(u),n.flags|=1,mn(e,n,o,a),n.child;case 14:return Em(e,n,n.type,n.pendingProps,a);case 15:return Tm(e,n,n.type,n.pendingProps,a);case 19:return Lm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ml(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ci(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Am(e,n,a);case 24:return Ka(n),o=vn(sn),e===null?(u=gc(),u===null&&(u=ze,f=pc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},vc(n),ia(n,sn,u)):((e.lanes&a)!==0&&(Sc(e,n),Zs(n,null,null,a),js()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ia(n,sn,o)):(o=f.cache,ia(n,sn,o),o!==u.cache&&dc(n,[sn],a,!0))),mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function zi(e){e.flags|=4}function Om(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vg(n)){if(n=ti.current,n!==null&&((_e&4194048)===_e?mi!==null:(_e&62914560)!==_e&&(_e&536870912)===0||n!==mi))throw qs=_c,_p;e.flags|=8192}}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?gt():536870912,e.lanes|=n,Xr|=n)}function no(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function uS(e,n,a){var o=n.pendingProps;switch(uc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Li(sn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fs(n)?zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hp())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(zi(n),a!==null?(Ye(n),Om(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(zi(n),Ye(n),Om(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&zi(n),Ye(n),n.flags&=-16777217),null;case 27:Ne(n),a=ct.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}e=X.current,Fs(n)?cp(n):(e=Og(u,o,a),n.stateNode=e,zi(n))}return Ye(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(e=X.current,Fs(n))cp(n);else{switch(u=zl(ct.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[Ve]=n,e[cn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(_n(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ct.current,Fs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ve]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Rg(e.nodeValue,a)),e||ja(n)}else e=zl(e).createTextNode(o),e[Ve]=n,n.stateNode=e}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ve]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=hp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Oi(n),n):(Oi(n),null)}if(Oi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Ye(n),null;case 4:return Xt(),e===null&&Mf(n.stateNode.containerInfo),Ye(n),null;case 10:return Li(n.type),Ye(n),null;case 19:if(ot(on),u=n.memoizedState,u===null)return Ye(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)no(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,no(u,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lp(a,e),a=a.sibling;return lt(on,on.current&1|2),n.child}e=e.sibling}u.tail!==null&&Me()>bl&&(n.flags|=128,o=!0,no(u,!1),n.lanes=4194304)}else{if(!o)if(e=vl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),no(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ee)return Ye(n),null}else 2*Me()-u.renderingStartTime>bl&&a!==536870912&&(n.flags|=128,o=!0,no(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Me(),n.sibling=null,e=on.current,lt(on,o?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return Oi(n),Ec(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ot(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Li(sn),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function cS(e,n){switch(uc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Li(sn),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Oi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ot(on),null;case 4:return Xt(),null;case 10:return Li(n.type),null;case 22:case 23:return Oi(n),Ec(),e!==null&&ot(Qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Li(sn),null;case 25:return null;default:return null}}function Pm(e,n){switch(uc(n),n.tag){case 3:Li(sn),Xt();break;case 26:case 27:case 5:Ne(n);break;case 4:Xt();break;case 13:Oi(n);break;case 19:ot(on);break;case 10:Li(n.type);break;case 22:case 23:Oi(n),Ec(),e!==null&&ot(Qa);break;case 24:Li(sn)}}function io(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(T){Oe(n,n.return,T)}}function ca(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var I=a,$=T;try{$()}catch(pt){Oe(u,I,pt)}}}o=o.next}while(o!==f)}}catch(pt){Oe(n,n.return,pt)}}function zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ep(n,a)}catch(o){Oe(e,e.return,o)}}}function Im(e,n,a){a.props=$a(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Oe(e,n,o)}}function ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Oe(e,n,u)}}function gi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Oe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(e,n,u)}else a.current=null}function Bm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Oe(e,e.return,u)}}function Qc(e,n,a){try{var o=e.stateNode;US(o,e.type,a,n),o[cn]=n}catch(u){Oe(e,e.return,u)}}function Fm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function Jc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pl));else if(o!==4&&(o===27&&va(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for($c(e,n,a),e=e.sibling;e!==null;)$c(e,n,a),e=e.sibling}function Tl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tl(e,n,a),e=e.sibling;e!==null;)Tl(e,n,a),e=e.sibling}function Hm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);_n(n,o,a),n[Ve]=e,n[cn]=a}catch(f){Oe(e,e.return,f)}}var Ii=!1,$e=!1,tf=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,hn=null;function fS(e,n){if(e=e.containerInfo,Af=Vl,e=Jd(e),Ju(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,T=-1,I=-1,$=0,pt=0,_t=e,et=null;e:for(;;){for(var rt;_t!==a||u!==0&&_t.nodeType!==3||(T=y+u),_t!==f||o!==0&&_t.nodeType!==3||(I=y+o),_t.nodeType===3&&(y+=_t.nodeValue.length),(rt=_t.firstChild)!==null;)et=_t,_t=rt;for(;;){if(_t===e)break e;if(et===a&&++$===u&&(T=y),et===f&&++pt===o&&(I=y),(rt=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=rt}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(bf={focusedElem:e,selectionRange:a},Vl=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Jt=$a(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Jt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Yt){Oe(a,a.return,Yt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}}function Vm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),o&4&&io(5,a);break;case 1:if(fa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Oe(a,a.return,y)}else{var u=$a(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Oe(a,a.return,y)}}o&64&&zm(a),o&512&&ao(a,a.return);break;case 3:if(fa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ep(e,n)}catch(y){Oe(a,a.return,y)}}break;case 27:n===null&&o&4&&Hm(a);case 26:case 5:fa(e,a),n===null&&o&4&&Bm(a),o&512&&ao(a,a.return);break;case 12:fa(e,a);break;case 13:fa(e,a),o&4&&Wm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xS.bind(null,a),BS(e,a))));break;case 22:if(o=a.memoizedState!==null||Ii,!o){n=n!==null&&n.memoizedState!==null||$e,u=Ii;var f=$e;Ii=o,($e=n)&&!f?ha(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),Ii=u,$e=f}break;case 30:break;default:fa(e,a)}}function km(e){var n=e.alternate;n!==null&&(e.alternate=null,km(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Sr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Cn=!1;function Bi(e,n,a){for(a=a.child;a!==null;)Xm(e,n,a),a=a.sibling}function Xm(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Gt,a)}catch{}switch(a.tag){case 26:$e||gi(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||gi(a,n);var o=Xe,u=Cn;va(a.type)&&(Xe=a.stateNode,Cn=!1),Bi(e,n,a),po(a.stateNode),Xe=o,Cn=u;break;case 5:$e||gi(a,n);case 6:if(o=Xe,u=Cn,Xe=null,Bi(e,n,a),Xe=o,Cn=u,Xe!==null)if(Cn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Oe(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Oe(a,n,f)}break;case 18:Xe!==null&&(Cn?(e=Xe,Lg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mo(e)):Lg(Xe,a.stateNode));break;case 4:o=Xe,u=Cn,Xe=a.stateNode.containerInfo,Cn=!0,Bi(e,n,a),Xe=o,Cn=u;break;case 0:case 11:case 14:case 15:$e||ca(2,a,n),$e||ca(4,a,n),Bi(e,n,a);break;case 1:$e||(gi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Im(a,n,o)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:$e=(o=$e)||a.memoizedState!==null,Bi(e,n,a),$e=o;break;default:Bi(e,n,a)}}function Wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){Oe(n,n.return,a)}}function hS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Gm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Gm),n;default:throw Error(r(435,e.tag))}}function ef(e,n){var a=hS(e);n.forEach(function(o){var u=yS.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(va(T.type)){Xe=T.stateNode,Cn=!1;break t}break;case 5:Xe=T.stateNode,Cn=!1;break t;case 3:case 4:Xe=T.stateNode.containerInfo,Cn=!0;break t}T=T.return}if(Xe===null)throw Error(r(160));Xm(f,y,u),Xe=null,Cn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)qm(n,e),n=n.sibling}var oi=null;function qm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Hn(e),o&4&&(ca(3,e,e.return),io(3,e),ca(5,e,e.return));break;case 1:Fn(n,e),Hn(e),o&512&&($e||a===null||gi(a,a.return)),o&64&&Ii&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=oi;if(Fn(n,e),Hn(e),o&512&&($e||a===null||gi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ji]||f[Ve]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),_n(f,o,a),f[Ve]=e,W(f),o=f;break t;case"link":var y=Hg("link","href",u).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(f=y[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break e}}f=u.createElement(o),_n(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Hg("meta","content",u).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(f=y[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break e}}f=u.createElement(o),_n(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[Ve]=e,W(f),o=f}e.stateNode=o}else Gg(u,e.type,e.stateNode);else e.stateNode=Fg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Gg(u,e.type,e.stateNode):Fg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),Hn(e),o&512&&($e||a===null||gi(a,a.return)),a!==null&&o&4&&Qc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),Hn(e),o&512&&($e||a===null||gi(a,a.return)),e.flags&32){u=e.stateNode;try{Mr(u,"")}catch(rt){Oe(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Qc(e,u,a!==null?a.memoizedProps:u)),o&1024&&(tf=!0);break;case 6:if(Fn(n,e),Hn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){Oe(e,e.return,rt)}}break;case 3:if(Fl=null,u=oi,oi=Il(n.containerInfo),Fn(n,e),oi=u,Hn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(rt){Oe(e,e.return,rt)}tf&&(tf=!1,Ym(e));break;case 4:o=oi,oi=Il(e.stateNode.containerInfo),Fn(n,e),Hn(e),oi=o;break;case 12:Fn(n,e),Hn(e);break;case 13:Fn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lf=Me()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ef(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,$=Ii,pt=$e;if(Ii=$||u,$e=pt||I,Fn(n,e),$e=pt,Ii=$,Hn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ii||$e||tr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=I.stateNode;var _t=I.memoizedProps.style,et=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(rt){Oe(I,I.return,rt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(rt){Oe(I,I.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ef(e,a))));break;case 19:Fn(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ef(e,o)));break;case 30:break;case 21:break;default:Fn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Fm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Jc(e);Tl(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Mr(y,""),a.flags&=-33);var T=Jc(e);Tl(e,T,y);break;case 3:case 4:var I=a.stateNode.containerInfo,$=Jc(e);$c(e,$,I);break;default:throw Error(r(161))}}catch(pt){Oe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vm(e,n.alternate,n),n=n.sibling}function tr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ca(4,n,n.return),tr(n);break;case 1:gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Im(n,n.return,a),tr(n);break;case 27:po(n.stateNode);case 26:case 5:gi(n,n.return),tr(n);break;case 22:n.memoizedState===null&&tr(n);break;case 30:tr(n);break;default:tr(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),io(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Oe(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Mp(I[u],T)}catch($){Oe(o,o.return,$)}}a&&y&64&&zm(f),ao(f,f.return);break;case 27:Hm(f);case 26:case 5:ha(u,f,a),a&&o===null&&y&4&&Bm(f),ao(f,f.return);break;case 12:ha(u,f,a);break;case 13:ha(u,f,a),a&&y&4&&Wm(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),ao(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ks(a))}function af(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ks(e))}function _i(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jm(e,n,a,o),n=n.sibling}function jm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,o),u&2048&&io(9,n);break;case 1:_i(e,n,a,o);break;case 3:_i(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ks(e)));break;case 12:if(u&2048){_i(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,T=f.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Oe(n,n.return,I)}}else _i(e,n,a,o);break;case 13:_i(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,o):ro(e,n):f._visibility&2?_i(e,n,a,o):(f._visibility|=2,Gr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&nf(y,n);break;case 24:_i(e,n,a,o),u&2048&&af(n.alternate,n);break;default:_i(e,n,a,o)}}function Gr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,y=n,T=a,I=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:Gr(f,y,T,I,u),io(8,y);break;case 23:break;case 22:var pt=y.stateNode;y.memoizedState!==null?pt._visibility&2?Gr(f,y,T,I,u):ro(f,y):(pt._visibility|=2,Gr(f,y,T,I,u)),u&&$&2048&&nf(y.alternate,y);break;case 24:Gr(f,y,T,I,u),u&&$&2048&&af(y.alternate,y);break;default:Gr(f,y,T,I,u)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ro(a,o),u&2048&&nf(o.alternate,o);break;case 24:ro(a,o),u&2048&&af(o.alternate,o);break;default:ro(a,o)}n=n.sibling}}var so=8192;function Vr(e){if(e.subtreeFlags&so)for(e=e.child;e!==null;)Zm(e),e=e.sibling}function Zm(e){switch(e.tag){case 26:Vr(e),e.flags&so&&e.memoizedState!==null&&QS(oi,e.memoizedState,e.memoizedProps);break;case 5:Vr(e);break;case 3:case 4:var n=oi;oi=Il(e.stateNode.containerInfo),Vr(e),oi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=so,so=16777216,Vr(e),so=n):Vr(e));break;default:Vr(e)}}function Km(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function oo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];hn=o,Jm(o,e)}Km(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qm(e),e=e.sibling}function Qm(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&ca(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Al(e)):oo(e);break;default:oo(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];hn=o,Jm(o,e)}Km(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ca(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}e=e.sibling}}function Jm(e,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ks(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,hn=o;else t:for(a=e;hn!==null;){o=hn;var u=o.sibling,f=o.return;if(km(o),o===a){hn=null;break t}if(u!==null){u.return=f,hn=u;break t}hn=f}}}var dS={getCacheForType:function(e){var n=vn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},pS=typeof WeakMap=="function"?WeakMap:Map,Re=0,ze=null,fe=null,_e=0,Ce=0,Gn=null,da=!1,kr=!1,rf=!1,Fi=0,Ze=0,pa=0,er=0,sf=0,ei=0,Xr=0,lo=null,wn=null,of=!1,lf=0,bl=1/0,Rl=null,ma=null,gn=0,ga=null,Wr=null,qr=0,uf=0,cf=null,$m=null,uo=0,ff=null;function Vn(){if((Re&2)!==0&&_e!==0)return _e&-_e;if(O.T!==null){var e=Nr;return e!==0?e:vf()}return jn()}function tg(){ei===0&&(ei=(_e&536870912)===0||Ee?bt():536870912);var e=ti.current;return e!==null&&(e.flags|=32),ei}function kn(e,n,a){(e===ze&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),_a(e,_e,ei,!1)),wt(e,a),((Re&2)===0||e!==ze)&&(e===ze&&((Re&2)===0&&(er|=a),Ze===4&&_a(e,_e,ei,!1)),vi(e))}function eg(e,n,a){if((Re&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||be(e,n),u=o?_S(e,n):pf(e,n,!0),f=o;do{if(u===0){kr&&!o&&_a(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mS(a)){u=pf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;u=lo;var I=T.current.memoizedState.isDehydrated;if(I&&(Yr(T,y).flags|=256),y=pf(T,y,!1),y!==2){if(rf&&!I){T.errorRecoveryDisabledLanes|=f,er|=f,u=4;break t}f=wn,wn=u,f!==null&&(wn===null?wn=f:wn.push.apply(wn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Yr(e,0),_a(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:_a(o,n,ei,!da);break t;case 2:wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=lf+300-Me(),10<u)){if(_a(o,n,ei,!da),ee(o,0,!0)!==0)break t;o.timeoutHandle=Dg(ng.bind(null,o,a,wn,Rl,of,n,ei,er,Xr,da,f,2,-0,0),u);break t}ng(o,a,wn,Rl,of,n,ei,er,Xr,da,f,0,-0,0)}}break}while(!0);vi(e)}function ng(e,n,a,o,u,f,y,T,I,$,pt,_t,et,rt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(_o={stylesheets:null,count:0,unsuspend:KS},Zm(n),_t=JS(),_t!==null)){e.cancelPendingCommit=_t(ug.bind(null,e,n,f,a,o,u,y,T,I,pt,1,et,rt)),_a(e,f,y,!$);return}ug(e,n,f,a,o,u,y,T,I)}function mS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!In(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _a(e,n,a,o){n&=~sf,n&=~er,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-kt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&pe(e,a,n)}function Cl(){return(Re&6)===0?(co(0),!1):!0}function hf(){if(fe!==null){if(Ce===0)var e=fe.return;else e=fe,Ui=Za=null,Cc(e),Fr=null,to=0,e=fe;for(;e!==null;)Pm(e.alternate,e),e=e.return;fe=null}}function Yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,NS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),hf(),ze=e,fe=a=Ci(e.current,null),_e=n,Ce=0,Gn=null,da=!1,kr=be(e,n),rf=!1,Xr=ei=sf=er=pa=Ze=0,wn=lo=null,of=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-kt(o),f=1<<u;n|=e[u],o&=~f}return Fi=n,Ko(),a}function ig(e,n){ue=null,O.H=ml,n===Ws||n===rl?(n=xp(),Ce=3):n===_p?(n=xp(),Ce=4):Ce=n===ym?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Gn=n,fe===null&&(Ze=1,xl(e,Kn(n,e.current)))}function ag(){var e=O.H;return O.H=ml,e===null?ml:e}function rg(){var e=O.A;return O.A=dS,e}function df(){Ze=4,da||(_e&4194048)!==_e&&ti.current!==null||(kr=!0),(pa&134217727)===0&&(er&134217727)===0||ze===null||_a(ze,_e,ei,!1)}function pf(e,n,a){var o=Re;Re|=2;var u=ag(),f=rg();(ze!==e||_e!==n)&&(Rl=null,Yr(e,n)),n=!1;var y=Ze;t:do try{if(Ce!==0&&fe!==null){var T=fe,I=Gn;switch(Ce){case 8:hf(),y=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var $=Ce;if(Ce=0,Gn=null,jr(e,T,I,$),a&&kr){y=0;break t}break;default:$=Ce,Ce=0,Gn=null,jr(e,T,I,$)}}gS(),y=Ze;break}catch(pt){ig(e,pt)}while(!0);return n&&e.shellSuspendCounter++,Ui=Za=null,Re=o,O.H=u,O.A=f,fe===null&&(ze=null,_e=0,Ko()),y}function gS(){for(;fe!==null;)sg(fe)}function _S(e,n){var a=Re;Re|=2;var o=ag(),u=rg();ze!==e||_e!==n?(Rl=null,bl=Me()+500,Yr(e,n)):kr=be(e,n);t:do try{if(Ce!==0&&fe!==null){n=fe;var f=Gn;e:switch(Ce){case 1:Ce=0,Gn=null,jr(e,n,f,1);break;case 2:case 9:if(vp(f)){Ce=0,Gn=null,og(n);break}n=function(){Ce!==2&&Ce!==9||ze!==e||(Ce=7),vi(e)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:vp(f)?(Ce=0,Gn=null,og(n)):(Ce=0,Gn=null,jr(e,n,f,7));break;case 5:var y=null;switch(fe.tag){case 26:y=fe.memoizedState;case 5:case 27:var T=fe;if(!y||Vg(y)){Ce=0,Gn=null;var I=T.sibling;if(I!==null)fe=I;else{var $=T.return;$!==null?(fe=$,wl($)):fe=null}break e}}Ce=0,Gn=null,jr(e,n,f,5);break;case 6:Ce=0,Gn=null,jr(e,n,f,6);break;case 8:hf(),Ze=6;break t;default:throw Error(r(462))}}vS();break}catch(pt){ig(e,pt)}while(!0);return Ui=Za=null,O.H=o,O.A=u,Re=a,fe!==null?0:(ze=null,_e=0,Ko(),Ze)}function vS(){for(;fe!==null&&!Te();)sg(fe)}function sg(e){var n=Nm(e.alternate,e,Fi);e.memoizedProps=e.pendingProps,n===null?wl(e):fe=n}function og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Rm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Rm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Cc(n);default:Pm(a,n),n=fe=lp(n,Fi),n=Nm(a,n,Fi)}e.memoizedProps=e.pendingProps,n===null?wl(e):fe=n}function jr(e,n,a,o){Ui=Za=null,Cc(n),Fr=null,to=0;var u=n.return;try{if(oS(e,u,n,a,_e)){Ze=1,xl(e,Kn(a,e.current)),fe=null;return}}catch(f){if(u!==null)throw fe=u,f;Ze=1,xl(e,Kn(a,e.current)),fe=null;return}n.flags&32768?(Ee||o===1?e=!0:kr||(_e&536870912)!==0?e=!1:(da=e=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),lg(n,e)):wl(n)}function wl(e){var n=e;do{if((n.flags&32768)!==0){lg(n,da);return}e=n.return;var a=uS(n.alternate,n,Fi);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);Ze===0&&(Ze=5)}function lg(e,n){do{var a=cS(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Ze=6,fe=null}function ug(e,n,a,o,u,f,y,T,I){e.cancelPendingCommit=null;do Dl();while(gn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ic,Kt(e,a,f,y,T,I),e===ze&&(fe=ze=null,_e=0),Wr=n,ga=e,qr=a,uf=f,cf=u,$m=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,MS(A,function(){return pg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=Z.p,Z.p=2,y=Re,Re|=4;try{fS(e,n,a)}finally{Re=y,Z.p=u,O.T=o}}gn=1,cg(),fg(),hg()}}function cg(){if(gn===1){gn=0;var e=ga,n=Wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=Z.p;Z.p=2;var u=Re;Re|=4;try{qm(n,e);var f=bf,y=Jd(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(y!==T&&T&&T.ownerDocument&&Qd(T.ownerDocument.documentElement,T)){if(I!==null&&Ju(T)){var $=I.start,pt=I.end;if(pt===void 0&&(pt=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(pt,T.value.length);else{var _t=T.ownerDocument||document,et=_t&&_t.defaultView||window;if(et.getSelection){var rt=et.getSelection(),Jt=T.textContent.length,Yt=Math.min(I.start,Jt),Le=I.end===void 0?Yt:Math.min(I.end,Jt);!rt.extend&&Yt>Le&&(y=Le,Le=Yt,Yt=y);var Y=Kd(T,Yt),k=Kd(T,Le);if(Y&&k&&(rt.rangeCount!==1||rt.anchorNode!==Y.node||rt.anchorOffset!==Y.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var J=_t.createRange();J.setStart(Y.node,Y.offset),rt.removeAllRanges(),Yt>Le?(rt.addRange(J),rt.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),rt.addRange(J))}}}}for(_t=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var mt=_t[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Vl=!!Af,bf=Af=null}finally{Re=u,Z.p=o,O.T=a}}e.current=n,gn=2}}function fg(){if(gn===2){gn=0;var e=ga,n=Wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=Z.p;Z.p=2;var u=Re;Re|=4;try{Vm(e,n.alternate,n)}finally{Re=u,Z.p=o,O.T=a}}gn=3}}function hg(){if(gn===4||gn===3){gn=0,Vt();var e=ga,n=Wr,a=qr,o=$m;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,Wr=ga=null,dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ma=null),me(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Gt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=Z.p,Z.p=2,O.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var T=o[y];f(T.value,{componentStack:T.stack})}}finally{O.T=n,Z.p=u}}(qr&3)!==0&&Dl(),vi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===ff?uo++:(uo=0,ff=e):uo=0,co(0)}}function dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ks(n)))}function Dl(e){return cg(),fg(),hg(),pg()}function pg(){if(gn!==5)return!1;var e=ga,n=uf;uf=0;var a=me(qr),o=O.T,u=Z.p;try{Z.p=32>a?32:a,O.T=null,a=cf,cf=null;var f=ga,y=qr;if(gn=0,Wr=ga=null,qr=0,(Re&6)!==0)throw Error(r(331));var T=Re;if(Re|=4,Qm(f.current),jm(f,f.current,y,a),Re=T,co(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Gt,f)}catch{}return!0}finally{Z.p=u,O.T=o,dg(e,n)}}function mg(e,n,a){n=Kn(a,n),n=Vc(e.stateNode,n,2),e=sa(e,n,2),e!==null&&(wt(e,2),vi(e))}function Oe(e,n,a){if(e.tag===3)mg(e,e,a);else for(;n!==null;){if(n.tag===3){mg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ma===null||!ma.has(o))){e=Kn(a,e),a=Sm(2),o=sa(n,a,2),o!==null&&(xm(a,o,n,e),wt(o,2),vi(o));break}}n=n.return}}function mf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new pS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(rf=!0,u.add(a),e=SS.bind(null,e,n,a),n.then(e,e))}function SS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(_e&a)===a&&(Ze===4||Ze===3&&(_e&62914560)===_e&&300>Me()-lf?(Re&2)===0&&Yr(e,0):sf|=a,Xr===_e&&(Xr=0)),vi(e)}function gg(e,n){n===0&&(n=gt()),e=wr(e,n),e!==null&&(wt(e,n),vi(e))}function xS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),gg(e,a)}function yS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),gg(e,a)}function MS(e,n){return Ge(e,n)}var Ul=null,Zr=null,gf=!1,Ll=!1,_f=!1,nr=0;function vi(e){e!==Zr&&e.next===null&&(Zr===null?Ul=Zr=e:Zr=Zr.next=e),Ll=!0,gf||(gf=!0,TS())}function co(e,n){if(!_f&&Ll){_f=!0;do for(var a=!1,o=Ul;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-kt(42|e)+1)-1,f&=u&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,xg(o,f))}else f=_e,f=ee(o,o===ze?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||be(o,f)||(a=!0,xg(o,f));o=o.next}while(a);_f=!1}}function ES(){_g()}function _g(){Ll=gf=!1;var e=0;nr!==0&&(LS()&&(e=nr),nr=0);for(var n=Me(),a=null,o=Ul;o!==null;){var u=o.next,f=vg(o,n);f===0?(o.next=null,a===null?Ul=u:a.next=u,u===null&&(Zr=a)):(a=o,(e!==0||(f&3)!==0)&&(Ll=!0)),o=u}co(e)}function vg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-kt(f),T=1<<y,I=u[y];I===-1?((T&a)===0||(T&o)!==0)&&(u[y]=q(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=ze,a=_e,a=ee(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Se(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Se(o),me(a)){case 2:case 8:a=z;break;case 32:a=A;break;case 268435456:a=St;break;default:a=A}return o=Sg.bind(null,e),a=Ge(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Se(o),e.callbackPriority=2,e.callbackNode=null,2}function Sg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dl()&&e.callbackNode!==a)return null;var o=_e;return o=ee(e,e===ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(eg(e,o,n),vg(e,Me()),e.callbackNode!=null&&e.callbackNode===a?Sg.bind(null,e):null)}function xg(e,n){if(Dl())return null;eg(e,n,!0)}function TS(){OS(function(){(Re&6)!==0?Ge(te,ES):_g()})}function vf(){return nr===0&&(nr=bt()),nr}function yg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function Mg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function AS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=yg((u[cn]||null).action),y=o.submitter;y&&(n=(n=y[cn]||null)?yg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Yo("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(nr!==0){var I=y?Mg(u,y):new FormData(u);Ic(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=y?Mg(u,y):new FormData(u),Ic(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Sf=0;Sf<nc.length;Sf++){var xf=nc[Sf],bS=xf.toLowerCase(),RS=xf[0].toUpperCase()+xf.slice(1);si(bS,"on"+RS)}si(ep,"onAnimationEnd"),si(np,"onAnimationIteration"),si(ip,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(X0,"onTransitionRun"),si(W0,"onTransitionStart"),si(q0,"onTransitionCancel"),si(ap,"onTransitionEnd"),Tt("onMouseEnter",["mouseout","mouseover"]),Tt("onMouseLeave",["mouseout","mouseover"]),Tt("onPointerEnter",["pointerout","pointerover"]),Tt("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function Eg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],I=T.instance,$=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(pt){Sl(pt)}u.currentTarget=null,f=I}else for(y=0;y<o.length;y++){if(T=o[y],I=T.instance,$=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(pt){Sl(pt)}u.currentTarget=null,f=I}}}}function he(e,n){var a=n[_r];a===void 0&&(a=n[_r]=new Set);var o=e+"__bubble";a.has(o)||(Tg(n,e,2,!1),a.add(o))}function yf(e,n,a){var o=0;n&&(o|=4),Tg(a,e,o,n)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Mf(e){if(!e[Nl]){e[Nl]=!0,at.forEach(function(a){a!=="selectionchange"&&(CS.has(a)||yf(a,!1,e),yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Nl]||(n[Nl]=!0,yf("selectionchange",!1,n))}}function Tg(e,n,a,o){switch(jg(n)){case 2:var u=ex;break;case 8:u=nx;break;default:u=zf}a=u.bind(null,n,a,e),u=void 0,!ku||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Ef(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=$i(T),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=f=y;continue t}T=T.parentNode}}o=o.return}Ud(function(){var $=f,pt=Gu(a),_t=[];t:{var et=rp.get(e);if(et!==void 0){var rt=Yo,Jt=e;switch(e){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":rt=M0;break;case"focusin":Jt="focus",rt=Yu;break;case"focusout":Jt="blur",rt=Yu;break;case"beforeblur":case"afterblur":rt=Yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=c0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=A0;break;case ep:case np:case ip:rt=d0;break;case ap:rt=R0;break;case"scroll":case"scrollend":rt=l0;break;case"wheel":rt=w0;break;case"copy":case"cut":case"paste":rt=m0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=zd;break;case"toggle":case"beforetoggle":rt=U0}var Yt=(n&4)!==0,Le=!Yt&&(e==="scroll"||e==="scrollend"),Y=Yt?et!==null?et+"Capture":null:et;Yt=[];for(var k=$,J;k!==null;){var mt=k;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Y===null||(mt=Ds(k,Y),mt!=null&&Yt.push(ho(k,mt,J))),Le)break;k=k.return}0<Yt.length&&(et=new rt(et,Jt,null,a,pt),_t.push({event:et,listeners:Yt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",et&&a!==Hu&&(Jt=a.relatedTarget||a.fromElement)&&($i(Jt)||Jt[Ai]))break t;if((rt||et)&&(et=pt.window===pt?pt:(et=pt.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(Jt=a.relatedTarget||a.toElement,rt=$,Jt=Jt?$i(Jt):null,Jt!==null&&(Le=c(Jt),Yt=Jt.tag,Jt!==Le||Yt!==5&&Yt!==27&&Yt!==6)&&(Jt=null)):(rt=null,Jt=$),rt!==Jt)){if(Yt=Od,mt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Yt=zd,mt="onPointerLeave",Y="onPointerEnter",k="pointer"),Le=rt==null?et:Fa(rt),J=Jt==null?et:Fa(Jt),et=new Yt(mt,k+"leave",rt,a,pt),et.target=Le,et.relatedTarget=J,mt=null,$i(pt)===$&&(Yt=new Yt(Y,k+"enter",Jt,a,pt),Yt.target=J,Yt.relatedTarget=Le,mt=Yt),Le=mt,rt&&Jt)e:{for(Yt=rt,Y=Jt,k=0,J=Yt;J;J=Kr(J))k++;for(J=0,mt=Y;mt;mt=Kr(mt))J++;for(;0<k-J;)Yt=Kr(Yt),k--;for(;0<J-k;)Y=Kr(Y),J--;for(;k--;){if(Yt===Y||Y!==null&&Yt===Y.alternate)break e;Yt=Kr(Yt),Y=Kr(Y)}Yt=null}else Yt=null;rt!==null&&Ag(_t,et,rt,Yt,!1),Jt!==null&&Le!==null&&Ag(_t,Le,Jt,Yt,!0)}}t:{if(et=$?Fa($):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var It=Xd;else if(Vd(et))if(Wd)It=G0;else{It=F0;var ce=B0}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Fu($.elementType)&&(It=Xd):It=H0;if(It&&(It=It(e,$))){kd(_t,It,a,pt);break t}ce&&ce(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&xr(et,"number",et.value)}switch(ce=$?Fa($):window,e){case"focusin":(Vd(ce)||ce.contentEditable==="true")&&(br=ce,$u=$,Bs=null);break;case"focusout":Bs=$u=br=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,$d(_t,a,pt);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":$d(_t,a,pt)}var Ht;if(Zu)t:{switch(e){case"compositionstart":var Zt="onCompositionStart";break t;case"compositionend":Zt="onCompositionEnd";break t;case"compositionupdate":Zt="onCompositionUpdate";break t}Zt=void 0}else Ar?Hd(e,a)&&(Zt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Zt="onCompositionStart");Zt&&(Id&&a.locale!=="ko"&&(Ar||Zt!=="onCompositionStart"?Zt==="onCompositionEnd"&&Ar&&(Ht=Ld()):(na=pt,Xu="value"in na?na.value:na.textContent,Ar=!0)),ce=Ol($,Zt),0<ce.length&&(Zt=new Pd(Zt,e,null,a,pt),_t.push({event:Zt,listeners:ce}),Ht?Zt.data=Ht:(Ht=Gd(a),Ht!==null&&(Zt.data=Ht)))),(Ht=N0?O0(e,a):P0(e,a))&&(Zt=Ol($,"onBeforeInput"),0<Zt.length&&(ce=new Pd("onBeforeInput","beforeinput",null,a,pt),_t.push({event:ce,listeners:Zt}),ce.data=Ht)),AS(_t,e,$,a,pt)}Eg(_t,n)})}function ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ol(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ds(e,a),u!=null&&o.unshift(ho(e,u,f)),u=Ds(e,n),u!=null&&o.push(ho(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ag(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var T=a,I=T.alternate,$=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||$===null||(I=$,u?($=Ds(a,f),$!=null&&y.unshift(ho(a,$,I))):u||($=Ds(a,f),$!=null&&y.push(ho(a,$,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var wS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function bg(e){return(typeof e=="string"?e:""+e).replace(wS,`
`).replace(DS,"")}function Rg(e,n){return n=bg(n),bg(e)===n}function Pl(){}function Ue(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Mr(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Mr(e,""+o);break;case"className":Bt(e,"class",o);break;case"tabIndex":Bt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(e,a,o);break;case"style":wd(e,o,f);break;case"data":if(n!=="object"){Bt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ko(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(e,n,"name",u.name,u,null),Ue(e,n,"formEncType",u.formEncType,u,null),Ue(e,n,"formMethod",u.formMethod,u,null),Ue(e,n,"formTarget",u.formTarget,u,null)):(Ue(e,n,"encType",u.encType,u,null),Ue(e,n,"method",u.method,u,null),Ue(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ko(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Pl);break;case"onScroll":o!=null&&he("scroll",e);break;case"onScrollEnd":o!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":he("beforetoggle",e),he("toggle",e),qt(e,"popover",o);break;case"xlinkActuate":se(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":se(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":se(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":se(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":se(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":se(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":se(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":se(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":se(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=s0.get(a)||a,qt(e,a,o))}}function Tf(e,n,a,o,u,f){switch(a){case"style":wd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Mr(e,o):(typeof o=="number"||typeof o=="bigint")&&Mr(e,""+o);break;case"onScroll":o!=null&&he("scroll",e);break;case"onScrollEnd":o!=null&&he("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[cn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):qt(e,a,o)}}}function _n(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(e,n,f,y,a,null)}}u&&Ue(e,n,"srcSet",a.srcSet,a,null),o&&Ue(e,n,"src",a.src,a,null);return;case"input":he("invalid",e);var T=f=y=u=null,I=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":y=pt;break;case"checked":I=pt;break;case"defaultChecked":$=pt;break;case"value":f=pt;break;case"defaultValue":T=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Ue(e,n,o,pt,a,null)}}Vo(e,f,T,I,$,y,u,!1),ea(e);return;case"select":he("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:Ue(e,n,u,T,a,null)}n=f,a=y,e.multiple=!!o,n!=null?yr(e,!!o,n,!1):a!=null&&yr(e,!!o,a,!0);return;case"textarea":he("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ue(e,n,y,T,a,null)}Rd(e,o,u,f),ea(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ue(e,n,I,o,a,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(o=0;o<fo.length;o++)he(fo[o],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(e,n,$,o,a,null)}return;default:if(Fu(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Tf(e,n,pt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ue(e,n,T,o,a,null))}function US(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,T=null,I=null,$=null,pt=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=_t;default:o.hasOwnProperty(rt)||Ue(e,n,rt,null,o,_t)}}for(var et in o){var rt=o[et];if(_t=a[et],o.hasOwnProperty(et)&&(rt!=null||_t!=null))switch(et){case"type":f=rt;break;case"name":u=rt;break;case"checked":$=rt;break;case"defaultChecked":pt=rt;break;case"value":y=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==_t&&Ue(e,n,et,rt,o,_t)}}Ha(e,y,T,I,$,pt,f,u);return;case"select":rt=y=T=et=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":rt=I;default:o.hasOwnProperty(f)||Ue(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":y=f;default:f!==I&&Ue(e,n,u,f,o,I)}n=T,a=y,o=rt,et!=null?yr(e,!!a,et,!1):!!o!=!!a&&(n!=null?yr(e,!!a,n,!0):yr(e,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ue(e,n,T,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":et=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ue(e,n,y,u,o,f)}bd(e,et,rt);return;case"option":for(var Jt in a)if(et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!o.hasOwnProperty(Jt))switch(Jt){case"selected":e.selected=!1;break;default:Ue(e,n,Jt,null,o,et)}for(I in o)if(et=o[I],rt=a[I],o.hasOwnProperty(I)&&et!==rt&&(et!=null||rt!=null))switch(I){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ue(e,n,I,et,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)et=a[Yt],a.hasOwnProperty(Yt)&&et!=null&&!o.hasOwnProperty(Yt)&&Ue(e,n,Yt,null,o,et);for($ in o)if(et=o[$],rt=a[$],o.hasOwnProperty($)&&et!==rt&&(et!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ue(e,n,$,et,o,rt)}return;default:if(Fu(n)){for(var Le in a)et=a[Le],a.hasOwnProperty(Le)&&et!==void 0&&!o.hasOwnProperty(Le)&&Tf(e,n,Le,void 0,o,et);for(pt in o)et=o[pt],rt=a[pt],!o.hasOwnProperty(pt)||et===rt||et===void 0&&rt===void 0||Tf(e,n,pt,et,o,rt);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!o.hasOwnProperty(Y)&&Ue(e,n,Y,null,o,et);for(_t in o)et=o[_t],rt=a[_t],!o.hasOwnProperty(_t)||et===rt||et==null&&rt==null||Ue(e,n,_t,et,o,rt)}var Af=null,bf=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function LS(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(PS)}:Dg;function PS(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function Lg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=e.ownerDocument;if(a&1&&po(y.documentElement),a&2&&po(y.body),a&4)for(a=y.head,po(a),y=a.firstChild;y;){var T=y.nextSibling,I=y.nodeName;y[Ji]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=T}}if(u===0){e.removeChild(f),Mo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Mo(n)}function wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),Sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ji])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function IS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function BS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Uf=null;function Ng(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Og(e,n,a){switch(n=zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Sr(e)}var ni=new Map,Pg=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=Z.d;Z.d={f:FS,r:HS,D:GS,C:VS,L:kS,m:XS,X:qS,S:WS,M:YS};function FS(){var e=Hi.f(),n=Cl();return e||n}function HS(e){var n=ta(e);n!==null&&n.tag===5&&n.type==="form"?em(n):Hi.r(e)}var Qr=typeof document>"u"?null:document;function zg(e,n,a){var o=Qr;if(o&&typeof n=="string"&&n){var u=Be(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Pg.has(u)||(Pg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),_n(n,"link",e),W(n),o.head.appendChild(n)))}}function GS(e){Hi.D(e),zg("dns-prefetch",e,null)}function VS(e,n){Hi.C(e,n),zg("preconnect",e,n)}function kS(e,n,a){Hi.L(e,n,a);var o=Qr;if(o&&e&&n){var u='link[rel="preload"][as="'+Be(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Be(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Be(a.imageSizes)+'"]')):u+='[href="'+Be(e)+'"]';var f=u;switch(n){case"style":f=Jr(e);break;case"script":f=$r(e)}ni.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ni.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(mo(f))||n==="script"&&o.querySelector(go(f))||(n=o.createElement("link"),_n(n,"link",e),W(n),o.head.appendChild(n)))}}function XS(e,n){Hi.m(e,n);var a=Qr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Be(o)+'"][href="'+Be(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(e)}if(!ni.has(f)&&(e=g({rel:"modulepreload",href:e},n),ni.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}o=a.createElement("link"),_n(o,"link",e),W(o),a.head.appendChild(o)}}}function WS(e,n,a){Hi.S(e,n,a);var o=Qr;if(o&&e){var u=C(o).hoistableStyles,f=Jr(e);n=n||"default";var y=u.get(f);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(mo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ni.get(f))&&Lf(e,a);var I=y=o.createElement("link");W(I),_n(I,"link",e),I._p=new Promise(function($,pt){I.onload=$,I.onerror=pt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Bl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(f,y)}}}function qS(e,n){Hi.X(e,n);var a=Qr;if(a&&e){var o=C(a).hoistableScripts,u=$r(e),f=o.get(u);f||(f=a.querySelector(go(u)),f||(e=g({src:e,async:!0},n),(n=ni.get(u))&&Nf(e,n),f=a.createElement("script"),W(f),_n(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function YS(e,n){Hi.M(e,n);var a=Qr;if(a&&e){var o=C(a).hoistableScripts,u=$r(e),f=o.get(u);f||(f=a.querySelector(go(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ni.get(u))&&Nf(e,n),f=a.createElement("script"),W(f),_n(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ig(e,n,a,o){var u=(u=ct.current)?Il(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=C(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var f=C(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(mo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),ni.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(e,a),f||jS(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=C(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Jr(e){return'href="'+Be(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function Bg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function jS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),_n(n,"link",a),W(n),e.head.appendChild(n))}function $r(e){return'[src="'+Be(e)+'"]'}function go(e){return"script[async]"+e}function Fg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Be(a.href)+'"]');if(o)return n.instance=o,W(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),W(o),_n(o,"style",u),Bl(o,a.precedence,e),n.instance=o;case"stylesheet":u=Jr(a.href);var f=e.querySelector(mo(u));if(f)return n.state.loading|=4,n.instance=f,W(f),f;o=Bg(a),(u=ni.get(u))&&Lf(o,u),f=(e.ownerDocument||e).createElement("link"),W(f);var y=f;return y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),_n(f,"link",o),n.state.loading|=4,Bl(f,a.precedence,e),n.instance=f;case"script":return f=$r(a.src),(u=e.querySelector(go(f)))?(n.instance=u,W(u),u):(o=a,(u=ni.get(f))&&(o=g({},a),Nf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),W(u),_n(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Bl(o,a.precedence,e));return n.instance}function Bl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fl=null;function Hg(e,n,a){if(Fl===null){var o=new Map,u=Fl=new Map;u.set(a,o)}else u=Fl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ji]||f[Ve]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var T=o.get(y);T?T.push(f):o.set(y,[f])}}return o}function Gg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ZS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Vg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var _o=null;function KS(){}function QS(e,n,a){if(_o===null)throw Error(r(475));var o=_o;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Jr(a.href),f=e.querySelector(mo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Hl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,W(f);return}f=e.ownerDocument||e,a=Bg(a),(u=ni.get(u))&&Lf(a,u),f=f.createElement("link"),W(f);var y=f;y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),_n(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Hl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function JS(){if(_o===null)throw Error(r(475));var e=_o;return e.stylesheets&&e.count===0&&Of(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Of(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)Of(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function Of(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,n.forEach($S,e),Gl=null,Hl.call(e))}function $S(e,n){if(!(n.state.loading&4)){var a=Gl.get(e);if(a)var o=a.get(null);else{a=new Map,Gl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=Hl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function tx(e,n,a,o,u,f,y,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vt(0),this.hiddenUpdates=vt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function kg(e,n,a,o,u,f,y,T,I,$,pt,_t){return e=new tx(e,n,a,y,T,I,$,_t),n=1,f===!0&&(n|=24),f=Bn(3,null,null,n),e.current=f,f.stateNode=e,n=pc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},vc(f),e}function Xg(e){return e?(e=Dr,e):Dr}function Wg(e,n,a,o,u,f){u=Xg(u),o.context===null?o.context=u:o.pendingContext=u,o=ra(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=sa(e,o,n),a!==null&&(kn(a,e,n),Ys(a,e,n))}function qg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){qg(e,n),(e=e.alternate)&&qg(e,n)}function Yg(e){if(e.tag===13){var n=wr(e,67108864);n!==null&&kn(n,e,67108864),Pf(e,67108864)}}var Vl=!0;function ex(e,n,a,o){var u=O.T;O.T=null;var f=Z.p;try{Z.p=2,zf(e,n,a,o)}finally{Z.p=f,O.T=u}}function nx(e,n,a,o){var u=O.T;O.T=null;var f=Z.p;try{Z.p=8,zf(e,n,a,o)}finally{Z.p=f,O.T=u}}function zf(e,n,a,o){if(Vl){var u=If(o);if(u===null)Ef(e,n,o,kl,a),Zg(e,o);else if(ax(u,e,n,a,o))o.stopPropagation();else if(Zg(e,o),n&4&&-1<ix.indexOf(e)){for(;u!==null;){var f=ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Wt(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var I=1<<31-kt(y);T.entanglements[1]|=I,y&=~I}vi(f),(Re&6)===0&&(bl=Me()+500,co(0))}}break;case 13:T=wr(f,2),T!==null&&kn(T,f,2),Cl(),Pf(f,2)}if(f=If(o),f===null&&Ef(e,n,o,kl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Ef(e,n,o,null,a)}}function If(e){return e=Gu(e),Bf(e)}var kl=null;function Bf(e){if(kl=null,e=$i(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return kl=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($t()){case te:return 2;case z:return 8;case A:case ft:return 32;case St:return 268435456;default:return 32}default:return 32}}var Ff=!1,Sa=null,xa=null,ya=null,So=new Map,xo=new Map,Ma=[],ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zg(e,n){switch(e){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function yo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ta(n),n!==null&&Yg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ax(e,n,a,o,u){switch(n){case"focusin":return Sa=yo(Sa,e,n,a,o,u),!0;case"dragenter":return xa=yo(xa,e,n,a,o,u),!0;case"mouseover":return ya=yo(ya,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return So.set(f,yo(So.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,xo.set(f,yo(xo.get(f)||null,e,n,a,o,u)),!0}return!1}function Kg(e){var n=$i(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Zn(e.priority,function(){if(a.tag===13){var o=Vn();o=Qe(o);var u=wr(a,o);u!==null&&kn(u,a,o),Pf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Hu=o,a.target.dispatchEvent(o),Hu=null}else return n=ta(a),n!==null&&Yg(n),e.blockedOn=a,!1;n.shift()}return!0}function Qg(e,n,a){Xl(e)&&a.delete(n)}function rx(){Ff=!1,Sa!==null&&Xl(Sa)&&(Sa=null),xa!==null&&Xl(xa)&&(xa=null),ya!==null&&Xl(ya)&&(ya=null),So.forEach(Qg),xo.forEach(Qg)}function Wl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,rx)))}var ql=null;function Jg(e){ql!==e&&(ql=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Bf(o||a)===null)continue;break}var f=ta(a);f!==null&&(e.splice(n,3),n-=3,Ic(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mo(e){function n(I){return Wl(I,e)}Sa!==null&&Wl(Sa,e),xa!==null&&Wl(xa,e),ya!==null&&Wl(ya,e),So.forEach(n),xo.forEach(n);for(var a=0;a<Ma.length;a++){var o=Ma[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Kg(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[cn]||null;if(typeof f=="function")y||Jg(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[cn]||null)T=y.formAction;else if(Bf(u)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Jg(a)}}}function Hf(e){this._internalRoot=e}Yl.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Vn();Wg(a,o,e,n,null,null)},Yl.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Wg(e.current,2,null,e,null,null),Cl(),n[Ai]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=jn();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ma.length&&n!==0&&n<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Kg(e)}};var $g=t.version;if($g!=="19.1.0")throw Error(r(527,$g,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var sx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Gt=jl.inject(sx),Rt=jl}catch{}}return To.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=mm,f=gm,y=_m,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=kg(e,1,!1,null,null,a,o,u,f,y,T,null),e[Ai]=n.current,Mf(e),new Hf(n)},To.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=mm,y=gm,T=_m,I=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=kg(e,1,!0,n,a??null,o,u,f,y,T,I,$),n.context=Xg(null),a=n.current,o=Vn(),o=Qe(o),u=ra(o),u.callback=null,sa(a,u,o),a=o,n.current.lanes=a,wt(n,a),vi(n),e[Ai]=n.current,Mf(e),new Yl(n)},To.version="19.1.0",To}var u_;function vx(){if(u_)return kf.exports;u_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),kf.exports=_x(),kf.exports}var Sx=vx();const xx=ud(Sx);var Yf={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function yx(){if(c_)return ae;c_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function S(M,L,ot){this.props=M,this.context=L,this.refs=R,this.updater=ot||E}S.prototype.isReactComponent={},S.prototype.setState=function(M,L){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,L,"setState")},S.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function _(){}_.prototype=S.prototype;function P(M,L,ot){this.props=M,this.context=L,this.refs=R,this.updater=ot||E}var U=P.prototype=new _;U.constructor=P,b(U,S.prototype),U.isPureReactComponent=!0;var N=Array.isArray,V={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function B(M,L,ot,lt,X,ut){return ot=ut.ref,{$$typeof:s,type:M,key:L,ref:ot!==void 0?ot:null,props:ut}}function Q(M,L){return B(M.type,L,void 0,void 0,void 0,M.props)}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function w(M){var L={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ot){return L[ot]})}var G=/\/+/g;function nt(M,L){return typeof M=="object"&&M!==null&&M.key!=null?w(""+M.key):L.toString(36)}function it(){}function dt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(it,it):(M.status="pending",M.then(function(L){M.status==="pending"&&(M.status="fulfilled",M.value=L)},function(L){M.status==="pending"&&(M.status="rejected",M.reason=L)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function ht(M,L,ot,lt,X){var ut=typeof M;(ut==="undefined"||ut==="boolean")&&(M=null);var ct=!1;if(M===null)ct=!0;else switch(ut){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(M.$$typeof){case s:case t:ct=!0;break;case g:return ct=M._init,ht(ct(M._payload),L,ot,lt,X)}}if(ct)return X=X(M),ct=lt===""?"."+nt(M,0):lt,N(X)?(ot="",ct!=null&&(ot=ct.replace(G,"$&/")+"/"),ht(X,L,ot,"",function(Xt){return Xt})):X!=null&&(D(X)&&(X=Q(X,ot+(X.key==null||M&&M.key===X.key?"":(""+X.key).replace(G,"$&/")+"/")+ct)),L.push(X)),1;ct=0;var At=lt===""?".":lt+":";if(N(M))for(var Et=0;Et<M.length;Et++)lt=M[Et],ut=At+nt(lt,Et),ct+=ht(lt,L,ot,ut,X);else if(Et=x(M),typeof Et=="function")for(M=Et.call(M),Et=0;!(lt=M.next()).done;)lt=lt.value,ut=At+nt(lt,Et++),ct+=ht(lt,L,ot,ut,X);else if(ut==="object"){if(typeof M.then=="function")return ht(dt(M),L,ot,lt,X);throw L=String(M),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ct}function O(M,L,ot){if(M==null)return M;var lt=[],X=0;return ht(M,lt,"","",function(ut){return L.call(ot,ut,X++)}),lt}function Z(M){if(M._status===-1){var L=M._result;L=L(),L.then(function(ot){(M._status===0||M._status===-1)&&(M._status=1,M._result=ot)},function(ot){(M._status===0||M._status===-1)&&(M._status=2,M._result=ot)}),M._status===-1&&(M._status=0,M._result=L)}if(M._status===1)return M._result.default;throw M._result}var K=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function Mt(){}return ae.Children={map:O,forEach:function(M,L,ot){O(M,function(){L.apply(this,arguments)},ot)},count:function(M){var L=0;return O(M,function(){L++}),L},toArray:function(M){return O(M,function(L){return L})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=P,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ae.act=function(){throw Error("act(...) is not supported in production builds of React.")},ae.cache=function(M){return function(){return M.apply(null,arguments)}},ae.cloneElement=function(M,L,ot){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var lt=b({},M.props),X=M.key,ut=void 0;if(L!=null)for(ct in L.ref!==void 0&&(ut=void 0),L.key!==void 0&&(X=""+L.key),L)!H.call(L,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&L.ref===void 0||(lt[ct]=L[ct]);var ct=arguments.length-2;if(ct===1)lt.children=ot;else if(1<ct){for(var At=Array(ct),Et=0;Et<ct;Et++)At[Et]=arguments[Et+2];lt.children=At}return B(M.type,X,void 0,void 0,ut,lt)},ae.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},ae.createElement=function(M,L,ot){var lt,X={},ut=null;if(L!=null)for(lt in L.key!==void 0&&(ut=""+L.key),L)H.call(L,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(X[lt]=L[lt]);var ct=arguments.length-2;if(ct===1)X.children=ot;else if(1<ct){for(var At=Array(ct),Et=0;Et<ct;Et++)At[Et]=arguments[Et+2];X.children=At}if(M&&M.defaultProps)for(lt in ct=M.defaultProps,ct)X[lt]===void 0&&(X[lt]=ct[lt]);return B(M,ut,void 0,void 0,null,X)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(M){return{$$typeof:p,render:M}},ae.isValidElement=D,ae.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:Z}},ae.memo=function(M,L){return{$$typeof:h,type:M,compare:L===void 0?null:L}},ae.startTransition=function(M){var L=V.T,ot={};V.T=ot;try{var lt=M(),X=V.S;X!==null&&X(ot,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Mt,K)}catch(ut){K(ut)}finally{V.T=L}},ae.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ae.use=function(M){return V.H.use(M)},ae.useActionState=function(M,L,ot){return V.H.useActionState(M,L,ot)},ae.useCallback=function(M,L){return V.H.useCallback(M,L)},ae.useContext=function(M){return V.H.useContext(M)},ae.useDebugValue=function(){},ae.useDeferredValue=function(M,L){return V.H.useDeferredValue(M,L)},ae.useEffect=function(M,L){return V.H.useEffect(M,L)},ae.useId=function(){return V.H.useId()},ae.useImperativeHandle=function(M,L,ot){return V.H.useImperativeHandle(M,L,ot)},ae.useInsertionEffect=function(M,L){return V.H.useInsertionEffect(M,L)},ae.useLayoutEffect=function(M,L){return V.H.useLayoutEffect(M,L)},ae.useMemo=function(M,L){return V.H.useMemo(M,L)},ae.useOptimistic=function(M,L){return V.H.useOptimistic(M,L)},ae.useReducer=function(M,L,ot){return V.H.useReducer(M,L,ot)},ae.useRef=function(M){return V.H.useRef(M)},ae.useState=function(M){return V.H.useState(M)},ae.useSyncExternalStore=function(M,L,ot){return V.H.useSyncExternalStore(M,L,ot)},ae.useTransition=function(){return V.H.useTransition()},ae.version="19.0.0",ae}var f_;function xv(){return f_||(f_=1,Yf.exports=yx()),Yf.exports}var ne=xv();const Mx=ud(ne),Ex=lx({__proto__:null,default:Mx},[ne]);var jf={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function Tx(){if(h_)return xn;h_=1;var s=xv();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,xn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,g)},xn.flushSync=function(m){var h=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=g,r.d.f()}},xn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},xn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},xn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},xn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},xn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=p(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},xn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},xn.requestFormReset=function(m){r.d.r(m)},xn.unstable_batchedUpdates=function(m,h){return m(h)},xn.useFormState=function(m,h,g){return d.H.useFormState(m,h,g)},xn.useFormStatus=function(){return d.H.useHostTransitionStatus()},xn.version="19.0.0",xn}var d_;function Ax(){if(d_)return jf.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),jf.exports=Tx(),jf.exports}Ax();/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Tu.apply(this,arguments)}var Ua;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Ua||(Ua={}));const p_="popstate";function bx(s){s===void 0&&(s={});function t(r,l){let{pathname:c,search:d,hash:p}=r.location;return Ah("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:yv(l)}return Cx(t,i,null,s)}function Pn(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function fd(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rx(){return Math.random().toString(36).substr(2,8)}function m_(s,t){return{usr:s.state,key:s.key,idx:t}}function Ah(s,t,i,r){return i===void 0&&(i=null),Tu({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof t=="string"?Uu(t):t,{state:i,key:t&&t.key||r||Rx()})}function yv(s){let{pathname:t="/",search:i="",hash:r=""}=s;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Uu(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substr(i),s=s.substr(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substr(r),s=s.substr(0,r)),s&&(t.pathname=s)}return t}function Cx(s,t,i,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:c=!1}=r,d=l.history,p=Ua.Pop,m=null,h=g();h==null&&(h=0,d.replaceState(Tu({},d.state,{idx:h}),""));function g(){return(d.state||{idx:null}).idx}function v(){p=Ua.Pop;let S=g(),_=S==null?null:S-h;h=S,m&&m({action:p,location:R.location,delta:_})}function x(S,_){p=Ua.Push;let P=Ah(R.location,S,_);h=g()+1;let U=m_(P,h),N=R.createHref(P);try{d.pushState(U,"",N)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(N)}c&&m&&m({action:p,location:R.location,delta:1})}function E(S,_){p=Ua.Replace;let P=Ah(R.location,S,_);h=g();let U=m_(P,h),N=R.createHref(P);d.replaceState(U,"",N),c&&m&&m({action:p,location:R.location,delta:0})}function b(S){let _=l.location.origin!=="null"?l.location.origin:l.location.href,P=typeof S=="string"?S:yv(S);return Pn(_,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,_)}let R={get action(){return p},get location(){return s(l,d)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(p_,v),m=S,()=>{l.removeEventListener(p_,v),m=null}},createHref(S){return t(l,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:E,go(S){return d.go(S)}};return R}var g_;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(g_||(g_={}));function wx(s,t,i){i===void 0&&(i="/");let r=typeof t=="string"?Uu(t):t,l=Tv(r.pathname||"/",i);if(l==null)return null;let c=Mv(s);Dx(c);let d=null;for(let p=0;d==null&&p<c.length;++p)d=Fx(c[p],Vx(l));return d}function Mv(s,t,i,r){t===void 0&&(t=[]),i===void 0&&(i=[]),r===void 0&&(r="");let l=(c,d,p)=>{let m={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};m.relativePath.startsWith("/")&&(Pn(m.relativePath.startsWith(r),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(r.length));let h=vs([r,m.relativePath]),g=i.concat(m);c.children&&c.children.length>0&&(Pn(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Mv(c.children,t,g,h)),!(c.path==null&&!c.index)&&t.push({path:h,score:Ix(h,c.index),routesMeta:g})};return s.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,d);else for(let m of Ev(c.path))l(c,d,m)}),t}function Ev(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let d=Ev(r.join("/")),p=[];return p.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&p.push(...d),p.map(m=>s.startsWith("/")&&m===""?"/":m)}function Dx(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:Bx(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const Ux=/^:\w+$/,Lx=3,Nx=2,Ox=1,Px=10,zx=-2,__=s=>s==="*";function Ix(s,t){let i=s.split("/"),r=i.length;return i.some(__)&&(r+=zx),t&&(r+=Nx),i.filter(l=>!__(l)).reduce((l,c)=>l+(Ux.test(c)?Lx:c===""?Ox:Px),r)}function Bx(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function Fx(s,t){let{routesMeta:i}=s,r={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],m=d===i.length-1,h=l==="/"?t:t.slice(l.length)||"/",g=Hx({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},h);if(!g)return null;Object.assign(r,g.params);let v=p.route;c.push({params:r,pathname:vs([l,g.pathname]),pathnameBase:Xx(vs([l,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(l=vs([l,g.pathnameBase]))}return c}function Hx(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Gx(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:r.reduce((h,g,v)=>{let{paramName:x,isOptional:E}=g;if(x==="*"){let R=p[v]||"";d=c.slice(0,c.length-R.length).replace(/(.)\/+$/,"$1")}const b=p[v];return E&&!b?h[x]=void 0:h[x]=kx(b||"",x),h},{}),pathname:c,pathnameBase:d,pattern:s}}function Gx(s,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),fd(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(d,p,m)=>(r.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Vx(s){try{return decodeURI(s)}catch(t){return fd(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),s}}function kx(s,t){try{return decodeURIComponent(s)}catch(i){return fd(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+s+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+i+").")),s}}function Tv(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}const vs=s=>s.join("/").replace(/\/\/+/g,"/"),Xx=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/");function Wx(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Av=["post","put","patch","delete"];new Set(Av);const qx=["get",...Av];new Set(qx);/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bh(){return bh=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},bh.apply(this,arguments)}const Yx=ne.createContext(null),jx=ne.createContext(null),bv=ne.createContext(null),Lu=ne.createContext(null),Nu=ne.createContext({outlet:null,matches:[],isDataRoute:!1}),Rv=ne.createContext(null);function hd(){return ne.useContext(Lu)!=null}function Zx(){return hd()||Pn(!1),ne.useContext(Lu).location}function Kx(s,t){return Qx(s,t)}function Qx(s,t,i){hd()||Pn(!1);let{navigator:r}=ne.useContext(bv),{matches:l}=ne.useContext(Nu),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let m=Zx(),h;if(t){var g;let R=typeof t=="string"?Uu(t):t;p==="/"||(g=R.pathname)!=null&&g.startsWith(p)||Pn(!1),h=R}else h=m;let v=h.pathname||"/",x=p==="/"?v:v.slice(p.length)||"/",E=wx(s,{pathname:x}),b=ny(E&&E.map(R=>Object.assign({},R,{params:Object.assign({},d,R.params),pathname:vs([p,r.encodeLocation?r.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?p:vs([p,r.encodeLocation?r.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),l,i);return t&&b?ne.createElement(Lu.Provider,{value:{location:bh({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ua.Pop}},b):b}function Jx(){let s=sy(),t=Wx(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ne.createElement(ne.Fragment,null,ne.createElement("h2",null,"Unexpected Application Error!"),ne.createElement("h3",{style:{fontStyle:"italic"}},t),i?ne.createElement("pre",{style:l},i):null,null)}const $x=ne.createElement(Jx,null);class ty extends ne.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error?ne.createElement(Nu.Provider,{value:this.props.routeContext},ne.createElement(Rv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ey(s){let{routeContext:t,match:i,children:r}=s,l=ne.useContext(Yx);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),ne.createElement(Nu.Provider,{value:t},r)}function ny(s,t,i){var r;if(t===void 0&&(t=[]),i===void 0&&(i=null),s==null){var l;if((l=i)!=null&&l.errors)s=i.matches;else return null}let c=s,d=(r=i)==null?void 0:r.errors;if(d!=null){let p=c.findIndex(m=>m.route.id&&d?.[m.route.id]);p>=0||Pn(!1),c=c.slice(0,Math.min(c.length,p+1))}return c.reduceRight((p,m,h)=>{let g=m.route.id?d?.[m.route.id]:null,v=null;i&&(v=m.route.errorElement||$x);let x=t.concat(c.slice(0,h+1)),E=()=>{let b;return g?b=v:m.route.Component?b=ne.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=p,ne.createElement(ey,{match:m,routeContext:{outlet:p,matches:x,isDataRoute:i!=null},children:b})};return i&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?ne.createElement(ty,{location:i.location,revalidation:i.revalidation,component:v,error:g,children:E(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):E()},null)}var Cv=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(Cv||{});function iy(s){let t=ne.useContext(jx);return t||Pn(!1),t}function ay(s){let t=ne.useContext(Nu);return t||Pn(!1),t}function ry(s){let t=ay(),i=t.matches[t.matches.length-1];return i.route.id||Pn(!1),i.route.id}function sy(){var s;let t=ne.useContext(Rv),i=iy(Cv.UseRouteError),r=ry();return t||((s=i.errors)==null?void 0:s[r])}function Rh(s){Pn(!1)}function oy(s){let{basename:t="/",children:i=null,location:r,navigationType:l=Ua.Pop,navigator:c,static:d=!1}=s;hd()&&Pn(!1);let p=t.replace(/^\/*/,"/"),m=ne.useMemo(()=>({basename:p,navigator:c,static:d}),[p,c,d]);typeof r=="string"&&(r=Uu(r));let{pathname:h="/",search:g="",hash:v="",state:x=null,key:E="default"}=r,b=ne.useMemo(()=>{let R=Tv(h,p);return R==null?null:{location:{pathname:R,search:g,hash:v,state:x,key:E},navigationType:l}},[p,h,g,v,x,E,l]);return b==null?null:ne.createElement(bv.Provider,{value:m},ne.createElement(Lu.Provider,{children:i,value:b}))}function ly(s){let{children:t,location:i}=s;return Kx(Ch(t),i)}new Promise(()=>{});function Ch(s,t){t===void 0&&(t=[]);let i=[];return ne.Children.forEach(s,(r,l)=>{if(!ne.isValidElement(r))return;let c=[...t,l];if(r.type===ne.Fragment){i.push.apply(i,Ch(r.props.children,c));return}r.type!==Rh&&Pn(!1),!r.props.index||!r.props.children||Pn(!1);let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Ch(r.props.children,c)),i.push(d)}),i}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const uy="startTransition",v_=Ex[uy];function cy(s){let{basename:t,children:i,future:r,window:l}=s,c=ne.useRef();c.current==null&&(c.current=bx({window:l,v5Compat:!0}));let d=c.current,[p,m]=ne.useState({action:d.action,location:d.location}),{v7_startTransition:h}=r||{},g=ne.useCallback(v=>{h&&v_?v_(()=>m(v)):m(v)},[m,h]);return ne.useLayoutEffect(()=>d.listen(g),[d,g]),ne.createElement(oy,{basename:t,children:i,location:p.location,navigationType:p.action,navigator:d})}var S_;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(S_||(S_={}));var x_;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(x_||(x_={}));function fy(){const[s,t]=Oo.useState("Connexion...");return Oo.useEffect(()=>{const i=new WebSocket("wss://TON_SERVEUR_WS");i.onopen=()=>{t("Connecté au sabre !"),i.send(JSON.stringify({type:"register",role:"mobile"}))};const r=l=>{const{alpha:c,beta:d,gamma:p}=l;i.readyState===WebSocket.OPEN&&i.send(JSON.stringify({type:"motion",payload:{alpha:c,beta:d,gamma:p}}))};return window.addEventListener("deviceorientation",r),()=>{window.removeEventListener("deviceorientation",r),i.close()}},[]),qn.jsxs("div",{style:{padding:30,fontSize:24},children:[qn.jsx("h1",{children:"🟢 Contrôle du sabre"}),qn.jsx("p",{children:s}),qn.jsx("p",{children:"Bouge ton téléphone pour faire bouger le sabre !"})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="168",hy=0,y_=1,dy=2,wv=1,py=2,qi=3,Oa=0,Ln=1,Yi=2,La=0,Ss=1,M_=2,E_=3,T_=4,my=5,fr=100,gy=101,_y=102,vy=103,Sy=104,xy=200,yy=201,My=202,Ey=203,wh=204,Dh=205,Ty=206,Ay=207,by=208,Ry=209,Cy=210,wy=211,Dy=212,Uy=213,Ly=214,Ny=0,Oy=1,Py=2,Au=3,zy=4,Iy=5,By=6,Fy=7,Dv=0,Hy=1,Gy=2,Na=0,Vy=1,ky=2,Xy=3,Wy=4,qy=5,Yy=6,jy=7,Uv=300,Ms=301,Es=302,Uh=303,Lh=304,Ou=306,Nh=1e3,dr=1001,Oh=1002,ai=1003,Zy=1004,Zl=1005,hi=1006,Zf=1007,pr=1008,Ki=1009,Lv=1010,Nv=1011,Po=1012,pd=1013,mr=1014,ji=1015,zo=1016,md=1017,gd=1018,Ts=1020,Ov=35902,Pv=1021,zv=1022,di=1023,Iv=1024,Bv=1025,xs=1026,As=1027,Fv=1028,_d=1029,Hv=1030,vd=1031,Sd=1033,vu=33776,Su=33777,xu=33778,yu=33779,Ph=35840,zh=35841,Ih=35842,Bh=35843,Fh=36196,Hh=37492,Gh=37496,Vh=37808,kh=37809,Xh=37810,Wh=37811,qh=37812,Yh=37813,jh=37814,Zh=37815,Kh=37816,Qh=37817,Jh=37818,$h=37819,td=37820,ed=37821,Mu=36492,nd=36494,id=36495,Gv=36283,ad=36284,rd=36285,sd=36286,Ky=3200,Qy=3201,Jy=0,$y=1,Da="",Si="srgb",za="srgb-linear",xd="display-p3",Pu="display-p3-linear",bu="linear",Fe="srgb",Ru="rec709",Cu="p3",ts=7680,A_=519,tM=512,eM=513,nM=514,Vv=515,iM=516,aM=517,rM=518,sM=519,b_=35044,R_="300 es",Zi=2e3,wu=2001;class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,od=180/Math.PI;function Io(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Un(s,t,i){return Math.max(t,Math.min(i,s))}function oM(s,t){return(s%t+t)%t}function Qf(s,t,i){return(1-i)*s+i*t}function Ao(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Un(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,r,l,c,d,p,m,h){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h)}set(t,i,r,l,c,d,p,m,h){const g=this.elements;return g[0]=t,g[1]=l,g[2]=p,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],g=r[4],v=r[7],x=r[2],E=r[5],b=r[8],R=l[0],S=l[3],_=l[6],P=l[1],U=l[4],N=l[7],V=l[2],H=l[5],B=l[8];return c[0]=d*R+p*P+m*V,c[3]=d*S+p*U+m*H,c[6]=d*_+p*N+m*B,c[1]=h*R+g*P+v*V,c[4]=h*S+g*U+v*H,c[7]=h*_+g*N+v*B,c[2]=x*R+E*P+b*V,c[5]=x*S+E*U+b*H,c[8]=x*_+E*N+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],g=t[8];return i*d*g-i*p*h-r*c*g+r*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],g=t[8],v=g*d-p*h,x=p*m-g*c,E=h*c-d*m,b=i*v+r*x+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(l*h-g*r)*R,t[2]=(p*r-l*d)*R,t[3]=x*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=E*R,t[7]=(r*m-h*i)*R,t[8]=(d*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Jf.makeScale(t,i)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new le;function kv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Du(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lM(){const s=Du("canvas");return s.style.display="block",s}const C_={};function No(s){s in C_||(C_[s]=!0,console.warn(s))}function uM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const w_=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),D_=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[za]:{transfer:bu,primaries:Ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Si]:{transfer:Fe,primaries:Ru,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Pu]:{transfer:bu,primaries:Cu,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(D_),fromReference:s=>s.applyMatrix3(w_)},[xd]:{transfer:Fe,primaries:Cu,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(D_),fromReference:s=>s.applyMatrix3(w_).convertLinearToSRGB()}},cM=new Set([za,Pu]),Ae={enabled:!0,_workingColorSpace:za,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cM.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,i){if(this.enabled===!1||t===i||!t||!i)return s;const r=bo[t].toReference,l=bo[i].fromReference;return l(r(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return bo[s].primaries},getTransfer:function(s){return s===Da?bu:bo[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(bo[t].luminanceCoefficients)}};function ys(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $f(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class fM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{es===void 0&&(es=Du("canvas")),es.width=t.width,es.height=t.height;const r=es.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=es}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Du("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ys(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ys(i[r]/255)*255):i[r]=ys(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hM=0;class Xv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Io(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(th(l[d].image)):c.push(th(l[d]))}else c=th(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function th(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dM=0;class Nn extends Rs{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=dr,l=dr,c=hi,d=pr,p=di,m=Ki,h=Nn.DEFAULT_ANISOTROPY,g=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Io(),this.name="",this.source=new Xv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nh:t.x=t.x-Math.floor(t.x);break;case dr:t.x=t.x<0?0:1;break;case Oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nh:t.y=t.y-Math.floor(t.y);break;case dr:t.y=t.y<0?0:1;break;case Oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Uv;Nn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,r=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,h=m[0],g=m[4],v=m[8],x=m[1],E=m[5],b=m[9],R=m[2],S=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+R)<.1&&Math.abs(b+S)<.1&&Math.abs(h+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,N=(E+1)/2,V=(_+1)/2,H=(g+x)/4,B=(v+R)/4,Q=(b+S)/4;return U>N&&U>V?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=H/r,c=B/r):N>V?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=H/l,c=Q/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=B/c,l=Q/c),this.set(r,l,c,i),this}let P=Math.sqrt((S-b)*(S-b)+(v-R)*(v-R)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(S-b)/P,this.y=(v-R)/P,this.z=(x-g)/P,this.w=Math.acos((h+E+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pM extends Rs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Nn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Xv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends pM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Wv extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mM extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],g=r[l+2],v=r[l+3];const x=c[d+0],E=c[d+1],b=c[d+2],R=c[d+3];if(p===0){t[i+0]=m,t[i+1]=h,t[i+2]=g,t[i+3]=v;return}if(p===1){t[i+0]=x,t[i+1]=E,t[i+2]=b,t[i+3]=R;return}if(v!==R||m!==x||h!==E||g!==b){let S=1-p;const _=m*x+h*E+g*b+v*R,P=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const V=Math.sqrt(U),H=Math.atan2(V,_*P);S=Math.sin(S*H)/V,p=Math.sin(p*H)/V}const N=p*P;if(m=m*S+x*N,h=h*S+E*N,g=g*S+b*N,v=v*S+R*N,S===1-p){const V=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=V,h*=V,g*=V,v*=V}}t[i]=m,t[i+1]=h,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],g=r[l+3],v=c[d],x=c[d+1],E=c[d+2],b=c[d+3];return t[i]=p*b+g*v+m*E-h*x,t[i+1]=m*b+g*x+h*v-p*E,t[i+2]=h*b+g*E+p*x-m*v,t[i+3]=g*b-p*v-m*x-h*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(r/2),g=p(l/2),v=p(c/2),x=m(r/2),E=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=x*g*v+h*E*b,this._y=h*E*v-x*g*b,this._z=h*g*b+x*E*v,this._w=h*g*v-x*E*b;break;case"YXZ":this._x=x*g*v+h*E*b,this._y=h*E*v-x*g*b,this._z=h*g*b-x*E*v,this._w=h*g*v+x*E*b;break;case"ZXY":this._x=x*g*v-h*E*b,this._y=h*E*v+x*g*b,this._z=h*g*b+x*E*v,this._w=h*g*v-x*E*b;break;case"ZYX":this._x=x*g*v-h*E*b,this._y=h*E*v+x*g*b,this._z=h*g*b-x*E*v,this._w=h*g*v+x*E*b;break;case"YZX":this._x=x*g*v+h*E*b,this._y=h*E*v+x*g*b,this._z=h*g*b-x*E*v,this._w=h*g*v-x*E*b;break;case"XZY":this._x=x*g*v-h*E*b,this._y=h*E*v-x*g*b,this._z=h*g*b+x*E*v,this._w=h*g*v+x*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],g=i[6],v=i[10],x=r+p+v;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-m)*E,this._y=(c-h)*E,this._z=(d-l)*E}else if(r>p&&r>v){const E=2*Math.sqrt(1+r-p-v);this._w=(g-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+h)/E}else if(p>v){const E=2*Math.sqrt(1+p-r-v);this._w=(c-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+v-r-p);this._w=(d-l)/E,this._x=(c+h)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Un(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+d*p+l*h-c*m,this._y=l*g+d*m+c*p-r*h,this._z=c*g+d*h+r*m-l*p,this._w=d*g-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,d=this._w;let p=d*t._w+r*t._x+l*t._y+c*t._z;if(p<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,p=-p):this.copy(t),p>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-p*p;if(m<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const h=Math.sqrt(m),g=Math.atan2(h,p),v=Math.sin((1-i)*g)/h,x=Math.sin(i*g)/h;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(U_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(U_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*r),g=2*(p*i-c*l),v=2*(c*r-d*i);return this.x=i+m*h+d*v-p*g,this.y=r+m*g+p*h-c*v,this.z=l+m*v+c*g-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return eh.copy(this).projectOnVector(t),this.sub(eh)}reflect(t){return this.sub(eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Un(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eh=new tt,U_=new Bo;class Fo{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,ui):ui.fromBufferAttribute(c,d),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(t.matrixWorld),this.union(Kl)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),Ql.subVectors(this.max,Ro),ns.subVectors(t.a,Ro),is.subVectors(t.b,Ro),as.subVectors(t.c,Ro),Ta.subVectors(is,ns),Aa.subVectors(as,is),ir.subVectors(ns,as);let i=[0,-Ta.z,Ta.y,0,-Aa.z,Aa.y,0,-ir.z,ir.y,Ta.z,0,-Ta.x,Aa.z,0,-Aa.x,ir.z,0,-ir.x,-Ta.y,Ta.x,0,-Aa.y,Aa.x,0,-ir.y,ir.x,0];return!nh(i,ns,is,as,Ql)||(i=[1,0,0,0,1,0,0,0,1],!nh(i,ns,is,as,Ql))?!1:(Jl.crossVectors(Ta,Aa),i=[Jl.x,Jl.y,Jl.z],nh(i,ns,is,as,Ql))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],ui=new tt,Kl=new Fo,ns=new tt,is=new tt,as=new tt,Ta=new tt,Aa=new tt,ir=new tt,Ro=new tt,Ql=new tt,Jl=new tt,ar=new tt;function nh(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){ar.fromArray(s,c);const p=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),m=t.dot(ar),h=i.dot(ar),g=r.dot(ar);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>p)return!1}return!0}const gM=new Fo,Co=new tt,ih=new tt;class yd{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):gM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(ih)),this.expandByPoint(Co.copy(t.center).sub(ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new tt,ah=new tt,$l=new tt,ba=new tt,rh=new tt,tu=new tt,sh=new tt;class _M{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Vi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Vi.copy(this.origin).addScaledVector(this.direction,i),Vi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ah.copy(t).add(i).multiplyScalar(.5),$l.copy(i).sub(t).normalize(),ba.copy(this.origin).sub(ah);const c=t.distanceTo(i)*.5,d=-this.direction.dot($l),p=ba.dot(this.direction),m=-ba.dot($l),h=ba.lengthSq(),g=Math.abs(1-d*d);let v,x,E,b;if(g>0)if(v=d*m-p,x=d*p-m,b=c*g,v>=0)if(x>=-b)if(x<=b){const R=1/g;v*=R,x*=R,E=v*(v+d*x+2*p)+x*(d*v+x+2*m)+h}else x=c,v=Math.max(0,-(d*x+p)),E=-v*v+x*(x+2*m)+h;else x=-c,v=Math.max(0,-(d*x+p)),E=-v*v+x*(x+2*m)+h;else x<=-b?(v=Math.max(0,-(-d*c+p)),x=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+x*(x+2*m)+h):x<=b?(v=0,x=Math.min(Math.max(-c,-m),c),E=x*(x+2*m)+h):(v=Math.max(0,-(d*c+p)),x=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+x*(x+2*m)+h);else x=d>0?-c:c,v=Math.max(0,-(d*x+p)),E=-v*v+x*(x+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ah).addScaledVector($l,x),E}intersectSphere(t,i){Vi.subVectors(t.center,this.origin);const r=Vi.dot(this.direction),l=Vi.dot(Vi)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return h>=0?(r=(t.min.x-x.x)*h,l=(t.max.x-x.x)*h):(r=(t.max.x-x.x)*h,l=(t.min.x-x.x)*h),g>=0?(c=(t.min.y-x.y)*g,d=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,d=(t.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),v>=0?(p=(t.min.z-x.z)*v,m=(t.max.z-x.z)*v):(p=(t.max.z-x.z)*v,m=(t.min.z-x.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Vi)!==null}intersectTriangle(t,i,r,l,c){rh.subVectors(i,t),tu.subVectors(r,t),sh.crossVectors(rh,tu);let d=this.direction.dot(sh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ba.subVectors(this.origin,t);const m=p*this.direction.dot(tu.crossVectors(ba,tu));if(m<0)return null;const h=p*this.direction.dot(rh.cross(ba));if(h<0||m+h>d)return null;const g=-p*ba.dot(sh);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,r,l,c,d,p,m,h,g,v,x,E,b,R,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h,g,v,x,E,b,R,S)}set(t,i,r,l,c,d,p,m,h,g,v,x,E,b,R,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=g,_[10]=v,_[14]=x,_[3]=E,_[7]=b,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),c=1/rs.setFromMatrixColumn(t,1).length(),d=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=d*g,E=d*v,b=p*g,R=p*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=E+b*h,i[5]=x-R*h,i[9]=-p*m,i[2]=R-x*h,i[6]=b+E*h,i[10]=d*m}else if(t.order==="YXZ"){const x=m*g,E=m*v,b=h*g,R=h*v;i[0]=x+R*p,i[4]=b*p-E,i[8]=d*h,i[1]=d*v,i[5]=d*g,i[9]=-p,i[2]=E*p-b,i[6]=R+x*p,i[10]=d*m}else if(t.order==="ZXY"){const x=m*g,E=m*v,b=h*g,R=h*v;i[0]=x-R*p,i[4]=-d*v,i[8]=b+E*p,i[1]=E+b*p,i[5]=d*g,i[9]=R-x*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const x=d*g,E=d*v,b=p*g,R=p*v;i[0]=m*g,i[4]=b*h-E,i[8]=x*h+R,i[1]=m*v,i[5]=R*h+x,i[9]=E*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,E=d*h,b=p*m,R=p*h;i[0]=m*g,i[4]=R-x*v,i[8]=b*v+E,i[1]=v,i[5]=d*g,i[9]=-p*g,i[2]=-h*g,i[6]=E*v+b,i[10]=x-R*v}else if(t.order==="XZY"){const x=d*m,E=d*h,b=p*m,R=p*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=x*v+R,i[5]=d*g,i[9]=E*v-b,i[2]=b*v-E,i[6]=p*g,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vM,t,SM)}lookAt(t,i,r){const l=this.elements;return Xn.subVectors(t,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Ra.crossVectors(r,Xn),Ra.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Ra.crossVectors(r,Xn)),Ra.normalize(),eu.crossVectors(Xn,Ra),l[0]=Ra.x,l[4]=eu.x,l[8]=Xn.x,l[1]=Ra.y,l[5]=eu.y,l[9]=Xn.y,l[2]=Ra.z,l[6]=eu.z,l[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],g=r[1],v=r[5],x=r[9],E=r[13],b=r[2],R=r[6],S=r[10],_=r[14],P=r[3],U=r[7],N=r[11],V=r[15],H=l[0],B=l[4],Q=l[8],D=l[12],w=l[1],G=l[5],nt=l[9],it=l[13],dt=l[2],ht=l[6],O=l[10],Z=l[14],K=l[3],Mt=l[7],M=l[11],L=l[15];return c[0]=d*H+p*w+m*dt+h*K,c[4]=d*B+p*G+m*ht+h*Mt,c[8]=d*Q+p*nt+m*O+h*M,c[12]=d*D+p*it+m*Z+h*L,c[1]=g*H+v*w+x*dt+E*K,c[5]=g*B+v*G+x*ht+E*Mt,c[9]=g*Q+v*nt+x*O+E*M,c[13]=g*D+v*it+x*Z+E*L,c[2]=b*H+R*w+S*dt+_*K,c[6]=b*B+R*G+S*ht+_*Mt,c[10]=b*Q+R*nt+S*O+_*M,c[14]=b*D+R*it+S*Z+_*L,c[3]=P*H+U*w+N*dt+V*K,c[7]=P*B+U*G+N*ht+V*Mt,c[11]=P*Q+U*nt+N*O+V*M,c[15]=P*D+U*it+N*Z+V*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],g=t[2],v=t[6],x=t[10],E=t[14],b=t[3],R=t[7],S=t[11],_=t[15];return b*(+c*m*v-l*h*v-c*p*x+r*h*x+l*p*E-r*m*E)+R*(+i*m*E-i*h*x+c*d*x-l*d*E+l*h*g-c*m*g)+S*(+i*h*v-i*p*E-c*d*v+r*d*E+c*p*g-r*h*g)+_*(-l*p*g-i*m*v+i*p*x+l*d*v-r*d*x+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],g=t[8],v=t[9],x=t[10],E=t[11],b=t[12],R=t[13],S=t[14],_=t[15],P=v*S*h-R*x*h+R*m*E-p*S*E-v*m*_+p*x*_,U=b*x*h-g*S*h-b*m*E+d*S*E+g*m*_-d*x*_,N=g*R*h-b*v*h+b*p*E-d*R*E-g*p*_+d*v*_,V=b*v*m-g*R*m-b*p*x+d*R*x+g*p*S-d*v*S,H=i*P+r*U+l*N+c*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return t[0]=P*B,t[1]=(R*x*c-v*S*c-R*l*E+r*S*E+v*l*_-r*x*_)*B,t[2]=(p*S*c-R*m*c+R*l*h-r*S*h-p*l*_+r*m*_)*B,t[3]=(v*m*c-p*x*c-v*l*h+r*x*h+p*l*E-r*m*E)*B,t[4]=U*B,t[5]=(g*S*c-b*x*c+b*l*E-i*S*E-g*l*_+i*x*_)*B,t[6]=(b*m*c-d*S*c-b*l*h+i*S*h+d*l*_-i*m*_)*B,t[7]=(d*x*c-g*m*c+g*l*h-i*x*h-d*l*E+i*m*E)*B,t[8]=N*B,t[9]=(b*v*c-g*R*c-b*r*E+i*R*E+g*r*_-i*v*_)*B,t[10]=(d*R*c-b*p*c+b*r*h-i*R*h-d*r*_+i*p*_)*B,t[11]=(g*p*c-d*v*c-g*r*h+i*v*h+d*r*E-i*p*E)*B,t[12]=V*B,t[13]=(g*R*l-b*v*l+b*r*x-i*R*x-g*r*S+i*v*S)*B,t[14]=(b*p*l-d*R*l-b*r*m+i*R*m+d*r*S-i*p*S)*B,t[15]=(d*v*l-g*p*l+g*r*m-i*v*m-d*r*x+i*p*x)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,m=t.z,h=c*d,g=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,g*p+r,g*m-l*d,0,h*m-l*p,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,g=d+d,v=p+p,x=c*h,E=c*g,b=c*v,R=d*g,S=d*v,_=p*v,P=m*h,U=m*g,N=m*v,V=r.x,H=r.y,B=r.z;return l[0]=(1-(R+_))*V,l[1]=(E+N)*V,l[2]=(b-U)*V,l[3]=0,l[4]=(E-N)*H,l[5]=(1-(x+_))*H,l[6]=(S+P)*H,l[7]=0,l[8]=(b+U)*B,l[9]=(S-P)*B,l[10]=(1-(x+R))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=rs.set(l[0],l[1],l[2]).length();const d=rs.set(l[4],l[5],l[6]).length(),p=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],ci.copy(this);const h=1/c,g=1/d,v=1/p;return ci.elements[0]*=h,ci.elements[1]*=h,ci.elements[2]*=h,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,i.setFromRotationMatrix(ci),r.x=c,r.y=d,r.z=p,this}makePerspective(t,i,r,l,c,d,p=Zi){const m=this.elements,h=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),x=(r+l)/(r-l);let E,b;if(p===Zi)E=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(p===wu)E=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=h,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=Zi){const m=this.elements,h=1/(i-t),g=1/(r-l),v=1/(d-c),x=(i+t)*h,E=(r+l)*g;let b,R;if(p===Zi)b=(d+c)*v,R=-2*v;else if(p===wu)b=c*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=2*h,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new tt,ci=new Ke,vM=new tt(0,0,0),SM=new tt(1,1,1),Ra=new tt,eu=new tt,Xn=new tt,L_=new Ke,N_=new Bo;class Qi{constructor(t=0,i=0,r=0,l=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],g=l[9],v=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Un(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Un(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Un(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Un(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return L_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(L_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return N_.setFromEuler(this),this.setFromQuaternion(N_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class qv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xM=0;const O_=new tt,ss=new Bo,ki=new Ke,nu=new tt,wo=new tt,yM=new tt,MM=new Bo,P_=new tt(1,0,0),z_=new tt(0,1,0),I_=new tt(0,0,1),B_={type:"added"},EM={type:"removed"},os={type:"childadded",child:null},oh={type:"childremoved",child:null};class On extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new tt,i=new Qi,r=new Bo,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new le}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(P_,t)}rotateY(t){return this.rotateOnAxis(z_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return O_.copy(t).applyQuaternion(this.quaternion),this.position.add(O_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(P_,t)}translateY(t){return this.translateOnAxis(z_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?nu.copy(t):nu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(wo,nu,this.up):ki.lookAt(nu,wo,this.up),this.quaternion.setFromRotationMatrix(ki),l&&(ki.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(ki),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(B_),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(EM),oh.child=t,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(B_),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,yM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,MM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(p=>({boxInitialized:p.boxInitialized,boxMin:p.box.min.toArray(),boxMax:p.box.max.toArray(),sphereInitialized:p.sphereInitialized,sphereRadius:p.sphere.radius,sphereCenter:p.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),g=d(t.images),v=d(t.shapes),x=d(t.skeletons),E=d(t.animations),b=d(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(p){const m=[];for(const h in p){const g=p[h];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new tt(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new tt,Xi=new tt,lh=new tt,Wi=new tt,ls=new tt,us=new tt,F_=new tt,uh=new tt,ch=new tt,fh=new tt;class yi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),fi.subVectors(t,i),l.cross(fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){fi.subVectors(l,i),Xi.subVectors(r,i),lh.subVectors(t,i);const d=fi.dot(fi),p=fi.dot(Xi),m=fi.dot(lh),h=Xi.dot(Xi),g=Xi.dot(lh),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const x=1/v,E=(h*m-p*g)*x,b=(d*g-p*m)*x;return c.set(1-E-b,b,E)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,i,r,l,c,d,p,m){return this.getBarycoord(t,i,r,l,Wi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Wi.x),m.addScaledVector(d,Wi.y),m.addScaledVector(p,Wi.z),m)}static isFrontFacing(t,i,r,l){return fi.subVectors(r,i),Xi.subVectors(t,i),fi.cross(Xi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),fi.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;ls.subVectors(l,r),us.subVectors(c,r),uh.subVectors(t,r);const m=ls.dot(uh),h=us.dot(uh);if(m<=0&&h<=0)return i.copy(r);ch.subVectors(t,l);const g=ls.dot(ch),v=us.dot(ch);if(g>=0&&v<=g)return i.copy(l);const x=m*v-g*h;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(ls,d);fh.subVectors(t,c);const E=ls.dot(fh),b=us.dot(fh);if(b>=0&&E<=b)return i.copy(c);const R=E*h-m*b;if(R<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(us,p);const S=g*b-E*v;if(S<=0&&v-g>=0&&E-b>=0)return F_.subVectors(c,l),p=(v-g)/(v-g+(E-b)),i.copy(l).addScaledVector(F_,p);const _=1/(S+R+x);return d=R*_,p=x*_,i.copy(r).addScaledVector(ls,d).addScaledVector(us,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ca={h:0,s:0,l:0},iu={h:0,s:0,l:0};function hh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ae.workingColorSpace){if(t=oM(t,1),i=Un(i,0,1),r=Un(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=hh(d,c,t+1/3),this.g=hh(d,c,t),this.b=hh(d,c,t-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(t,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const r=Yv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=$f(t.r),this.g=$f(t.g),this.b=$f(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ae.fromWorkingColorSpace(Mn.copy(this),t),Math.round(Un(Mn.r*255,0,255))*65536+Math.round(Un(Mn.g*255,0,255))*256+Math.round(Un(Mn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,c=Mn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const g=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=g<=.5?v/(d+p):v/(2-d-p),d){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=h,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Mn.copy(this),i),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=Si){Ae.fromWorkingColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,l=Mn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ca),this.setHSL(Ca.h+t,Ca.s+i,Ca.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ca),t.getHSL(iu);const r=Qf(Ca.h,iu.h,i),l=Qf(Ca.s,iu.s,i),c=Qf(Ca.l,iu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new we;we.NAMES=Yv;let TM=0;class zu extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=Ss,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wh&&(r.blendSrc=this.blendSrc),this.blendDst!==Dh&&(r.blendDst=this.blendDst),this.blendEquation!==fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Au&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Md extends zu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new tt,au=new ve;class Ei{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=b_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return No("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)au.fromBufferAttribute(this,i),au.applyMatrix3(t),this.setXY(i,au.x,au.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Dn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(t,i){return this.normalized&&(i=Dn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Dn(i,this.array),r=Dn(r,this.array),l=Dn(l,this.array),c=Dn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==b_&&(t.usage=this.usage),t}}class jv extends Ei{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Zv extends Ei{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ti extends Ei{constructor(t,i,r){super(new Float32Array(t),i,r)}}let AM=0;const ii=new Ke,dh=new On,cs=new tt,Wn=new Fo,Do=new Fo,pn=new tt;class Ia extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kv(t)?Zv:jv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new le().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,i,r){return ii.makeTranslation(t,i,r),this.applyMatrix4(ii),this}scale(t,i,r){return ii.makeScale(t,i,r),this.applyMatrix4(ii),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Ti(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Wn.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Do.setFromBufferAttribute(p),this.morphTargetsRelative?(pn.addVectors(Wn.min,Do.min),Wn.expandByPoint(pn),pn.addVectors(Wn.max,Do.max),Wn.expandByPoint(pn)):(Wn.expandByPoint(Do.min),Wn.expandByPoint(Do.max))}Wn.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)pn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(pn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,g=p.count;h<g;h++)pn.fromBufferAttribute(p,h),m&&(cs.fromBufferAttribute(t,h),pn.add(cs)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let Q=0;Q<r.count;Q++)p[Q]=new tt,m[Q]=new tt;const h=new tt,g=new tt,v=new tt,x=new ve,E=new ve,b=new ve,R=new tt,S=new tt;function _(Q,D,w){h.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,w),x.fromBufferAttribute(c,Q),E.fromBufferAttribute(c,D),b.fromBufferAttribute(c,w),g.sub(h),v.sub(h),E.sub(x),b.sub(x);const G=1/(E.x*b.y-b.x*E.y);isFinite(G)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-E.y).multiplyScalar(G),S.copy(v).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(G),p[Q].add(R),p[D].add(R),p[w].add(R),m[Q].add(S),m[D].add(S),m[w].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Q=0,D=P.length;Q<D;++Q){const w=P[Q],G=w.start,nt=w.count;for(let it=G,dt=G+nt;it<dt;it+=3)_(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const U=new tt,N=new tt,V=new tt,H=new tt;function B(Q){V.fromBufferAttribute(l,Q),H.copy(V);const D=p[Q];U.copy(D),U.sub(V.multiplyScalar(V.dot(D))).normalize(),N.crossVectors(H,D);const G=N.dot(m[Q])<0?-1:1;d.setXYZW(Q,U.x,U.y,U.z,G)}for(let Q=0,D=P.length;Q<D;++Q){const w=P[Q],G=w.start,nt=w.count;for(let it=G,dt=G+nt;it<dt;it+=3)B(t.getX(it+0)),B(t.getX(it+1)),B(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new tt,c=new tt,d=new tt,p=new tt,m=new tt,h=new tt,g=new tt,v=new tt;if(t)for(let x=0,E=t.count;x<E;x+=3){const b=t.getX(x+0),R=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,S),p.add(g),m.add(g),h.add(g),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),v.subVectors(l,c),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)pn.fromBufferAttribute(t,i),pn.normalize(),t.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function t(p,m){const h=p.array,g=p.itemSize,v=p.normalized,x=new h.constructor(m.length*g);let E=0,b=0;for(let R=0,S=m.length;R<S;R++){p.isInterleavedBufferAttribute?E=m[R]*p.data.stride+p.offset:E=m[R]*g;for(let _=0;_<g;_++)x[b++]=h[E++]}return new Ei(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ia,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let g=0,v=h.length;g<v;g++){const x=h[g],E=t(x,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,x=h.length;v<x;v++){const E=h[v];g.push(E.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const c=t.morphAttributes;for(const h in c){const g=[],v=c[h];for(let x=0,E=v.length;x<E;x++)g.push(v[x].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,g=d.length;h<g;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const H_=new Ke,rr=new _M,ru=new yd,G_=new tt,fs=new tt,hs=new tt,ds=new tt,ph=new tt,su=new tt,ou=new ve,lu=new ve,uu=new ve,V_=new tt,k_=new tt,X_=new tt,cu=new tt,fu=new tt;class Mi extends On{constructor(t=new Ia,i=new Md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){su.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=p[m],v=c[m];g!==0&&(ph.fromBufferAttribute(v,t),d?su.addScaledVector(ph,g):su.addScaledVector(ph.sub(i),g))}i.add(su)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(c),rr.copy(t.ray).recast(t.near),!(ru.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ru,G_)===null||rr.origin.distanceToSquared(G_)>(t.far-t.near)**2))&&(H_.copy(c).invert(),rr.copy(t.ray).applyMatrix4(H_),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,rr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,R=x.length;b<R;b++){const S=x[b],_=d[S.materialIndex],P=Math.max(S.start,E.start),U=Math.min(p.count,Math.min(S.start+S.count,E.start+E.count));for(let N=P,V=U;N<V;N+=3){const H=p.getX(N),B=p.getX(N+1),Q=p.getX(N+2);l=hu(this,_,t,r,h,g,v,H,B,Q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),R=Math.min(p.count,E.start+E.count);for(let S=b,_=R;S<_;S+=3){const P=p.getX(S),U=p.getX(S+1),N=p.getX(S+2);l=hu(this,d,t,r,h,g,v,P,U,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,R=x.length;b<R;b++){const S=x[b],_=d[S.materialIndex],P=Math.max(S.start,E.start),U=Math.min(m.count,Math.min(S.start+S.count,E.start+E.count));for(let N=P,V=U;N<V;N+=3){const H=N,B=N+1,Q=N+2;l=hu(this,_,t,r,h,g,v,H,B,Q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),R=Math.min(m.count,E.start+E.count);for(let S=b,_=R;S<_;S+=3){const P=S,U=S+1,N=S+2;l=hu(this,d,t,r,h,g,v,P,U,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function bM(s,t,i,r,l,c,d,p){let m;if(t.side===Ln?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,t.side===Oa,p),m===null)return null;fu.copy(p),fu.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(fu);return h<i.near||h>i.far?null:{distance:h,point:fu.clone(),object:s}}function hu(s,t,i,r,l,c,d,p,m,h){s.getVertexPosition(p,fs),s.getVertexPosition(m,hs),s.getVertexPosition(h,ds);const g=bM(s,t,i,r,fs,hs,ds,cu);if(g){l&&(ou.fromBufferAttribute(l,p),lu.fromBufferAttribute(l,m),uu.fromBufferAttribute(l,h),g.uv=yi.getInterpolation(cu,fs,hs,ds,ou,lu,uu,new ve)),c&&(ou.fromBufferAttribute(c,p),lu.fromBufferAttribute(c,m),uu.fromBufferAttribute(c,h),g.uv1=yi.getInterpolation(cu,fs,hs,ds,ou,lu,uu,new ve)),d&&(V_.fromBufferAttribute(d,p),k_.fromBufferAttribute(d,m),X_.fromBufferAttribute(d,h),g.normal=yi.getInterpolation(cu,fs,hs,ds,V_,k_,X_,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new tt,materialIndex:0};yi.getNormal(fs,hs,ds,v.normal),g.face=v}return g}class Ho extends Ia{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],g=[],v=[];let x=0,E=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ti(h,3)),this.setAttribute("normal",new Ti(g,3)),this.setAttribute("uv",new Ti(v,2));function b(R,S,_,P,U,N,V,H,B,Q,D){const w=N/B,G=V/Q,nt=N/2,it=V/2,dt=H/2,ht=B+1,O=Q+1;let Z=0,K=0;const Mt=new tt;for(let M=0;M<O;M++){const L=M*G-it;for(let ot=0;ot<ht;ot++){const lt=ot*w-nt;Mt[R]=lt*P,Mt[S]=L*U,Mt[_]=dt,h.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[S]=0,Mt[_]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(ot/B),v.push(1-M/Q),Z+=1}}for(let M=0;M<Q;M++)for(let L=0;L<B;L++){const ot=x+L+ht*M,lt=x+L+ht*(M+1),X=x+(L+1)+ht*(M+1),ut=x+(L+1)+ht*M;m.push(ot,lt,ut),m.push(lt,X,ut),K+=6}p.addGroup(E,K,D),E+=K,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function An(s){const t={};for(let i=0;i<s.length;i++){const r=bs(s[i]);for(const l in r)t[l]=r[l]}return t}function RM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Kv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const CM={clone:bs,merge:An};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pa extends zu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=DM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=RM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Qv extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Zi}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wa=new tt,W_=new ve,q_=new ve;class Yn extends Qv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return od*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-t/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wa.x,wa.y).multiplyScalar(-t/wa.z)}getViewSize(t,i){return this.getViewBounds(t,W_,q_),i.subVectors(q_,W_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ps=-90,ms=1;class UM extends On{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Yn(ps,ms,t,i);l.layers=this.layers,this.add(l);const c=new Yn(ps,ms,t,i);c.layers=this.layers,this.add(c);const d=new Yn(ps,ms,t,i);d.layers=this.layers,this.add(d);const p=new Yn(ps,ms,t,i);p.layers=this.layers,this.add(p);const m=new Yn(ps,ms,t,i);m.layers=this.layers,this.add(m);const h=new Yn(ps,ms,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,p),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,h),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,E),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Jv extends Nn{constructor(t,i,r,l,c,d,p,m,h,g){t=t!==void 0?t:[],i=i!==void 0?i:Ms,super(t,i,r,l,c,d,p,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class LM extends gr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Jv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:hi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ho(5,5,5),c=new Pa({name:"CubemapFromEquirect",uniforms:bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:La});c.uniforms.tEquirect.value=i;const d=new Mi(l,c),p=i.minFilter;return i.minFilter===pr&&(i.minFilter=hi),new UM(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}const mh=new tt,NM=new tt,OM=new le;class ur{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=mh.subVectors(r,i).cross(NM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(mh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||OM.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new yd,du=new tt;class Ed{constructor(t=new ur,i=new ur,r=new ur,l=new ur,c=new ur,d=new ur){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Zi){const r=this.planes,l=t.elements,c=l[0],d=l[1],p=l[2],m=l[3],h=l[4],g=l[5],v=l[6],x=l[7],E=l[8],b=l[9],R=l[10],S=l[11],_=l[12],P=l[13],U=l[14],N=l[15];if(r[0].setComponents(m-c,x-h,S-E,N-_).normalize(),r[1].setComponents(m+c,x+h,S+E,N+_).normalize(),r[2].setComponents(m+d,x+g,S+b,N+P).normalize(),r[3].setComponents(m-d,x-g,S-b,N-P).normalize(),r[4].setComponents(m-p,x-v,S-R,N-U).normalize(),i===Zi)r[5].setComponents(m+p,x+v,S+R,N+U).normalize();else if(i===wu)r[5].setComponents(p,v,R,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(du.x=l.normal.x>0?t.max.x:t.min.x,du.y=l.normal.y>0?t.max.y:t.min.y,du.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(du)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $v(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function PM(s){const t=new WeakMap;function i(p,m){const h=p.array,g=p.usage,v=h.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,h,g),p.onUploadCallback();let E;if(h instanceof Float32Array)E=s.FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=s.SHORT;else if(h instanceof Uint32Array)E=s.UNSIGNED_INT;else if(h instanceof Int32Array)E=s.INT;else if(h instanceof Int8Array)E=s.BYTE;else if(h instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,h){const g=m.array,v=m._updateRange,x=m.updateRanges;if(s.bindBuffer(h,p),v.count===-1&&x.length===0&&s.bufferSubData(h,0,g),x.length!==0){for(let E=0,b=x.length;E<b;E++){const R=x[E];s.bufferSubData(h,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}v.count!==-1&&(s.bufferSubData(h,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count),v.count=-1),m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(s.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=t.get(p);(!g||g.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}class Iu extends Ia{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,g=m+1,v=t/p,x=i/m,E=[],b=[],R=[],S=[];for(let _=0;_<g;_++){const P=_*x-d;for(let U=0;U<h;U++){const N=U*v-c;b.push(N,-P,0),R.push(0,0,1),S.push(U/p),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<p;P++){const U=P+h*_,N=P+h*(_+1),V=P+1+h*(_+1),H=P+1+h*_;E.push(U,N,H),E.push(N,V,H)}this.setIndex(E),this.setAttribute("position",new Ti(b,3)),this.setAttribute("normal",new Ti(R,3)),this.setAttribute("uv",new Ti(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Iu(t.width,t.height,t.widthSegments,t.heightSegments)}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
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
#endif`,BM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XM=`#ifdef USE_BATCHING
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
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
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
#endif`,KM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rE=`#define PI 3.141592653589793
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
} // validated`,sE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oE=`vec3 transformedNormal = objectNormal;
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
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`
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
}`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gE=`#ifdef USE_ENVMAP
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
#endif`,_E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ME=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EE=`#ifdef USE_GRADIENTMAP
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
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
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
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NE=`PhysicalMaterial material;
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
#endif`,OE=`struct PhysicalMaterial {
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
}`,PE=`
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
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
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WE=`#if defined( USE_POINTS_UV )
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
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
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
#endif`,JE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ST=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xT=`float getShadowMask() {
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
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MT=`#ifdef USE_SKINNING
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
#endif`,ET=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,AT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wT=`#ifdef USE_TRANSMISSION
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
#endif`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
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
}`,VT=`#if DEPTH_PACKING == 3200
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
}`,kT=`#define DISTANCE
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
}`,XT=`#define DISTANCE
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,KT=`uniform vec3 diffuse;
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
}`,QT=`#define LAMBERT
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
}`,JT=`#define LAMBERT
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
}`,$T=`#define MATCAP
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
}`,tA=`#define MATCAP
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
}`,eA=`#define NORMAL
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
}`,nA=`#define NORMAL
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
}`,iA=`#define PHONG
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
}`,aA=`#define PHONG
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
}`,rA=`#define STANDARD
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
}`,sA=`#define STANDARD
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
}`,oA=`#define TOON
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
}`,lA=`#define TOON
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
}`,uA=`uniform float size;
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
}`,cA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,hA=`uniform vec3 color;
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
}`,dA=`uniform float rotation;
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
}`,pA=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:zM,alphahash_pars_fragment:IM,alphamap_fragment:BM,alphamap_pars_fragment:FM,alphatest_fragment:HM,alphatest_pars_fragment:GM,aomap_fragment:VM,aomap_pars_fragment:kM,batching_pars_vertex:XM,batching_vertex:WM,begin_vertex:qM,beginnormal_vertex:YM,bsdfs:jM,iridescence_fragment:ZM,bumpmap_pars_fragment:KM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:tE,color_fragment:eE,color_pars_fragment:nE,color_pars_vertex:iE,color_vertex:aE,common:rE,cube_uv_reflection_fragment:sE,defaultnormal_vertex:oE,displacementmap_pars_vertex:lE,displacementmap_vertex:uE,emissivemap_fragment:cE,emissivemap_pars_fragment:fE,colorspace_fragment:hE,colorspace_pars_fragment:dE,envmap_fragment:pE,envmap_common_pars_fragment:mE,envmap_pars_fragment:gE,envmap_pars_vertex:_E,envmap_physical_pars_fragment:CE,envmap_vertex:vE,fog_vertex:SE,fog_pars_vertex:xE,fog_fragment:yE,fog_pars_fragment:ME,gradientmap_pars_fragment:EE,lightmap_pars_fragment:TE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:bE,lights_pars_begin:RE,lights_toon_fragment:wE,lights_toon_pars_fragment:DE,lights_phong_fragment:UE,lights_phong_pars_fragment:LE,lights_physical_fragment:NE,lights_physical_pars_fragment:OE,lights_fragment_begin:PE,lights_fragment_maps:zE,lights_fragment_end:IE,logdepthbuf_fragment:BE,logdepthbuf_pars_fragment:FE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:GE,map_fragment:VE,map_pars_fragment:kE,map_particle_fragment:XE,map_particle_pars_fragment:WE,metalnessmap_fragment:qE,metalnessmap_pars_fragment:YE,morphinstance_vertex:jE,morphcolor_vertex:ZE,morphnormal_vertex:KE,morphtarget_pars_vertex:QE,morphtarget_vertex:JE,normal_fragment_begin:$E,normal_fragment_maps:tT,normal_pars_fragment:eT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:lT,opaque_fragment:uT,packing:cT,premultiplied_alpha_fragment:fT,project_vertex:hT,dithering_fragment:dT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:vT,shadowmap_vertex:ST,shadowmask_pars_fragment:xT,skinbase_vertex:yT,skinning_pars_vertex:MT,skinning_vertex:ET,skinnormal_vertex:TT,specularmap_fragment:AT,specularmap_pars_fragment:bT,tonemapping_fragment:RT,tonemapping_pars_fragment:CT,transmission_fragment:wT,transmission_pars_fragment:DT,uv_pars_fragment:UT,uv_pars_vertex:LT,uv_vertex:NT,worldpos_vertex:OT,background_vert:PT,background_frag:zT,backgroundCube_vert:IT,backgroundCube_frag:BT,cube_vert:FT,cube_frag:HT,depth_vert:GT,depth_frag:VT,distanceRGBA_vert:kT,distanceRGBA_frag:XT,equirect_vert:WT,equirect_frag:qT,linedashed_vert:YT,linedashed_frag:jT,meshbasic_vert:ZT,meshbasic_frag:KT,meshlambert_vert:QT,meshlambert_frag:JT,meshmatcap_vert:$T,meshmatcap_frag:tA,meshnormal_vert:eA,meshnormal_frag:nA,meshphong_vert:iA,meshphong_frag:aA,meshphysical_vert:rA,meshphysical_frag:sA,meshtoon_vert:oA,meshtoon_frag:lA,points_vert:uA,points_frag:cA,shadow_vert:fA,shadow_frag:hA,sprite_vert:dA,sprite_frag:pA},Dt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},xi={basic:{uniforms:An([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:An([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:An([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:An([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:An([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new we(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:An([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:An([Dt.points,Dt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:An([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:An([Dt.common,Dt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:An([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:An([Dt.sprite,Dt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:An([Dt.common,Dt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:An([Dt.lights,Dt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};xi.physical={uniforms:An([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const pu={r:0,b:0,g:0},or=new Qi,mA=new Ke;function gA(s,t,i,r,l,c,d){const p=new we(0);let m=c===!0?0:1,h,g,v=null,x=0,E=null;function b(P){let U=P.isScene===!0?P.background:null;return U&&U.isTexture&&(U=(P.backgroundBlurriness>0?i:t).get(U)),U}function R(P){let U=!1;const N=b(P);N===null?_(p,m):N&&N.isColor&&(_(N,1),U=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,U){const N=b(U);N&&(N.isCubeTexture||N.mapping===Ou)?(g===void 0&&(g=new Mi(new Ho(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:bs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,H,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),or.copy(U.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(mA.makeRotationFromEuler(or)),g.material.toneMapped=Ae.getTransfer(N.colorSpace)!==Fe,(v!==N||x!==N.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=N,x=N.version,E=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Mi(new Iu(2,2),new Pa({name:"BackgroundMaterial",uniforms:bs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.toneMapped=Ae.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||E!==s.toneMapping)&&(h.material.needsUpdate=!0,v=N,x=N.version,E=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function _(P,U){P.getRGB(pu,Kv(s)),r.buffers.color.setClear(pu.r,pu.g,pu.b,U,d)}return{getClearColor:function(){return p},setClearColor:function(P,U=1){p.set(P),m=U,_(p,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,_(p,m)},render:R,addToRenderList:S}}function _A(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function p(w,G,nt,it,dt){let ht=!1;const O=v(it,nt,G);c!==O&&(c=O,h(c.object)),ht=E(w,it,nt,dt),ht&&b(w,it,nt,dt),dt!==null&&t.update(dt,s.ELEMENT_ARRAY_BUFFER),(ht||d)&&(d=!1,N(w,G,nt,it),dt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return s.createVertexArray()}function h(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,G,nt){const it=nt.wireframe===!0;let dt=r[w.id];dt===void 0&&(dt={},r[w.id]=dt);let ht=dt[G.id];ht===void 0&&(ht={},dt[G.id]=ht);let O=ht[it];return O===void 0&&(O=x(m()),ht[it]=O),O}function x(w){const G=[],nt=[],it=[];for(let dt=0;dt<i;dt++)G[dt]=0,nt[dt]=0,it[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:it,object:w,attributes:{},index:null}}function E(w,G,nt,it){const dt=c.attributes,ht=G.attributes;let O=0;const Z=nt.getAttributes();for(const K in Z)if(Z[K].location>=0){const M=dt[K];let L=ht[K];if(L===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),M===void 0||M.attribute!==L||L&&M.data!==L.data)return!0;O++}return c.attributesNum!==O||c.index!==it}function b(w,G,nt,it){const dt={},ht=G.attributes;let O=0;const Z=nt.getAttributes();for(const K in Z)if(Z[K].location>=0){let M=ht[K];M===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(M=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(M=w.instanceColor));const L={};L.attribute=M,M&&M.data&&(L.data=M.data),dt[K]=L,O++}c.attributes=dt,c.attributesNum=O,c.index=it}function R(){const w=c.newAttributes;for(let G=0,nt=w.length;G<nt;G++)w[G]=0}function S(w){_(w,0)}function _(w,G){const nt=c.newAttributes,it=c.enabledAttributes,dt=c.attributeDivisors;nt[w]=1,it[w]===0&&(s.enableVertexAttribArray(w),it[w]=1),dt[w]!==G&&(s.vertexAttribDivisor(w,G),dt[w]=G)}function P(){const w=c.newAttributes,G=c.enabledAttributes;for(let nt=0,it=G.length;nt<it;nt++)G[nt]!==w[nt]&&(s.disableVertexAttribArray(nt),G[nt]=0)}function U(w,G,nt,it,dt,ht,O){O===!0?s.vertexAttribIPointer(w,G,nt,dt,ht):s.vertexAttribPointer(w,G,nt,it,dt,ht)}function N(w,G,nt,it){R();const dt=it.attributes,ht=nt.getAttributes(),O=G.defaultAttributeValues;for(const Z in ht){const K=ht[Z];if(K.location>=0){let Mt=dt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const M=Mt.normalized,L=Mt.itemSize,ot=t.get(Mt);if(ot===void 0)continue;const lt=ot.buffer,X=ot.type,ut=ot.bytesPerElement,ct=X===s.INT||X===s.UNSIGNED_INT||Mt.gpuType===pd;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Et=At.stride,Xt=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let re=0;re<K.locationSize;re++)_(K.location+re,At.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let re=0;re<K.locationSize;re++)S(K.location+re);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let re=0;re<K.locationSize;re++)U(K.location+re,L/K.locationSize,X,M,Et*ut,(Xt+L/K.locationSize*re)*ut,ct)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<K.locationSize;At++)_(K.location+At,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<K.locationSize;At++)S(K.location+At);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let At=0;At<K.locationSize;At++)U(K.location+At,L/K.locationSize,X,M,L*ut,L/K.locationSize*At*ut,ct)}}else if(O!==void 0){const M=O[Z];if(M!==void 0)switch(M.length){case 2:s.vertexAttrib2fv(K.location,M);break;case 3:s.vertexAttrib3fv(K.location,M);break;case 4:s.vertexAttrib4fv(K.location,M);break;default:s.vertexAttrib1fv(K.location,M)}}}}P()}function V(){Q();for(const w in r){const G=r[w];for(const nt in G){const it=G[nt];for(const dt in it)g(it[dt].object),delete it[dt];delete G[nt]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const nt in G){const it=G[nt];for(const dt in it)g(it[dt].object),delete it[dt];delete G[nt]}delete r[w.id]}function B(w){for(const G in r){const nt=r[G];if(nt[w.id]===void 0)continue;const it=nt[w.id];for(const dt in it)g(it[dt].object),delete it[dt];delete nt[w.id]}}function Q(){D(),d=!0,c!==l&&(c=l,h(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Q,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:S,disableUnusedAttributes:P}}function vA(s,t,i){let r;function l(h){r=h}function c(h,g){s.drawArrays(r,h,g),i.update(g,r,1)}function d(h,g,v){v!==0&&(s.drawArraysInstanced(r,h,g,v),i.update(g,r,v))}function p(h,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b];i.update(E,r,1)}function m(h,g,v,x){if(v===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<h.length;b++)d(h[b],g[b],x[b]);else{E.multiDrawArraysInstancedWEBGL(r,h,0,g,0,x,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R];for(let R=0;R<x.length;R++)i.update(b,r,x[R])}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function SA(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(H){return!(H!==di&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const B=H===zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Ki&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ji&&!B)}function m(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),R=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:R,maxAttributes:S,maxVertexUniforms:_,maxVaryings:P,maxFragmentUniforms:U,vertexTextures:N,maxSamples:V}}function xA(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new ur,p=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const E=v.length!==0||x||r!==0||l;return l=x,r=v.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,E){const b=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!S)c?g(null):h();else{const P=c?0:r,U=P*4;let N=_.clippingState||null;m.value=N,N=g(b,x,U,E);for(let V=0;V!==U;++V)N[V]=i[V];_.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,E,b){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=m.value,b!==!0||S===null){const _=E+R*4,P=x.matrixWorldInverse;p.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,N=E;U!==R;++U,N+=4)d.copy(v[U]).applyMatrix4(P,p),d.normal.toArray(S,N),S[N+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}function yA(s){let t=new WeakMap;function i(d,p){return p===Uh?d.mapping=Ms:p===Lh&&(d.mapping=Es),d}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Uh||p===Lh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const h=new LM(m.height);return h.fromEquirectangularTexture(s,d),t.set(d,h),d.addEventListener("dispose",l),i(h.texture,d.mapping)}else return null}}return d}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}class MA extends Qv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=g*this.view.offsetY,m=p-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const _s=4,Y_=[.125,.215,.35,.446,.526,.582],hr=20,gh=new MA,j_=new we;let _h=null,vh=0,Sh=0,xh=!1;const cr=(1+Math.sqrt(5))/2,gs=1/cr,Z_=[new tt(-cr,gs,0),new tt(cr,gs,0),new tt(-gs,0,cr),new tt(gs,0,cr),new tt(0,cr,-gs),new tt(0,cr,gs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class K_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_h,vh,Sh),this._renderer.xr.enabled=xh,t.scissorTest=!1,mu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ms||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:zo,format:di,colorSpace:za,depthBuffer:!1},l=Q_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EA(c)),this._blurMaterial=TA(c,t,i)}return l}_compileMaterial(t){const i=new Mi(this._lodPlanes[0],t);this._renderer.compile(i,gh)}_sceneToCubeUV(t,i,r,l){const p=new Yn(90,1,i,r),m=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(j_),g.toneMapping=Na,g.autoClear=!1;const E=new Md({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),b=new Mi(new Ho,E);let R=!1;const S=t.background;S?S.isColor&&(E.color.copy(S),t.background=null,R=!0):(E.color.copy(j_),R=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(p.up.set(0,m[_],0),p.lookAt(h[_],0,0)):P===1?(p.up.set(0,0,m[_]),p.lookAt(0,h[_],0)):(p.up.set(0,m[_],0),p.lookAt(0,0,h[_]));const U=this._cubeSize;mu(l,P*U,_>2?U:0,U,U),g.setRenderTarget(l),R&&g.render(b,p),g.render(t,p)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ms||t.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Mi(this._lodPlanes[0],c),p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;mu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,gh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),p=Z_[(l-c-1)%Z_.length];this._blur(t,c-1,c,d,p)}i.autoClear=r}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Mi(this._lodPlanes[l],h),x=h.uniforms,E=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*hr-1),R=c/b,S=isFinite(c)?1+Math.floor(g*R):hr;S>hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${hr}`);const _=[];let P=0;for(let B=0;B<hr;++B){const Q=B/R,D=Math.exp(-Q*Q/2);_.push(D),B===0?P+=D:B<S&&(P+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=d==="latitudinal",p&&(x.poleAxis.value=p);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const N=this._sizeLods[l],V=3*N*(l>U-_s?l-U+_s:0),H=4*(this._cubeSize-N);mu(i,V,H,3*N,2*N),m.setRenderTarget(i),m.render(v,gh)}}function EA(s){const t=[],i=[],r=[];let l=s;const c=s-_s+1+Y_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);i.push(p);let m=1/p;d>s-_s?m=Y_[d-s+_s-1]:d===0&&(m=0),r.push(m);const h=1/(p-2),g=-h,v=1+h,x=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,b=6,R=3,S=2,_=1,P=new Float32Array(R*b*E),U=new Float32Array(S*b*E),N=new Float32Array(_*b*E);for(let H=0;H<E;H++){const B=H%3*2/3-1,Q=H>2?0:-1,D=[B,Q,0,B+2/3,Q,0,B+2/3,Q+1,0,B,Q,0,B+2/3,Q+1,0,B,Q+1,0];P.set(D,R*b*H),U.set(x,S*b*H);const w=[H,H,H,H,H,H];N.set(w,_*b*H)}const V=new Ia;V.setAttribute("position",new Ei(P,R)),V.setAttribute("uv",new Ei(U,S)),V.setAttribute("faceIndex",new Ei(N,_)),t.push(V),l>_s&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Q_(s,t,i){const r=new gr(s,t,i);return r.texture.mapping=Ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function TA(s,t,i){const r=new Float32Array(hr),l=new tt(0,1,0);return new Pa({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Td(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function J_(){return new Pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function $_(){return new Pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function AA(s){let t=new WeakMap,i=null;function r(p){if(p&&p.isTexture){const m=p.mapping,h=m===Uh||m===Lh,g=m===Ms||m===Es;if(h||g){let v=t.get(p);const x=v!==void 0?v.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return i===null&&(i=new K_(s)),v=h?i.fromEquirectangular(p,v):i.fromCubemap(p,v),v.texture.pmremVersion=p.pmremVersion,t.set(p,v),v.texture;if(v!==void 0)return v.texture;{const E=p.image;return h&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new K_(s)),v=h?i.fromEquirectangular(p):i.fromCubemap(p),v.texture.pmremVersion=p.pmremVersion,t.set(p,v),p.addEventListener("dispose",c),v.texture):null}}}return p}function l(p){let m=0;const h=6;for(let g=0;g<h;g++)p[g]!==void 0&&m++;return m===h}function c(p){const m=p.target;m.removeEventListener("dispose",c);const h=t.get(m);h!==void 0&&(t.delete(m),h.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function bA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&No("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function RA(s,t,i,r){const l={},c=new WeakMap;function d(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);for(const b in x.morphAttributes){const R=x.morphAttributes[b];for(let S=0,_=R.length;S<_;S++)t.remove(R[S])}x.removeEventListener("dispose",d),delete l[x.id];const E=c.get(x);E&&(t.remove(E),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function p(v,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const b in x)t.update(x[b],s.ARRAY_BUFFER);const E=v.morphAttributes;for(const b in E){const R=E[b];for(let S=0,_=R.length;S<_;S++)t.update(R[S],s.ARRAY_BUFFER)}}function h(v){const x=[],E=v.index,b=v.attributes.position;let R=0;if(E!==null){const P=E.array;R=E.version;for(let U=0,N=P.length;U<N;U+=3){const V=P[U+0],H=P[U+1],B=P[U+2];x.push(V,H,H,B,B,V)}}else if(b!==void 0){const P=b.array;R=b.version;for(let U=0,N=P.length/3-1;U<N;U+=3){const V=U+0,H=U+1,B=U+2;x.push(V,H,H,B,B,V)}}else return;const S=new(kv(x)?Zv:jv)(x,1);S.version=R;const _=c.get(v);_&&t.remove(_),c.set(v,S)}function g(v){const x=c.get(v);if(x){const E=v.index;E!==null&&x.version<E.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:g}}function CA(s,t,i){let r;function l(x){r=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function m(x,E){s.drawElements(r,E,c,x*d),i.update(E,r,1)}function h(x,E,b){b!==0&&(s.drawElementsInstanced(r,E,c,x*d,b),i.update(E,r,b))}function g(x,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,x,0,b);let S=0;for(let _=0;_<b;_++)S+=E[_];i.update(S,r,1)}function v(x,E,b,R){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)h(x[_]/d,E[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(r,E,0,c,x,0,R,0,b);let _=0;for(let P=0;P<b;P++)_+=E[P];for(let P=0;P<R.length;P++)i.update(_,r,R[P])}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function wA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(c/3);break;case s.LINES:i.lines+=p*(c/2);break;case s.LINE_STRIP:i.lines+=p*(c-1);break;case s.LINE_LOOP:i.lines+=p*c;break;case s.POINTS:i.points+=p*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function DA(s,t,i){const r=new WeakMap,l=new He;function c(d,p,m){const h=d.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(p);if(x===void 0||x.count!==v){let w=function(){Q.dispose(),r.delete(p),p.removeEventListener("dispose",w)};var E=w;x!==void 0&&x.texture.dispose();const b=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),R===!0&&(N=2),S===!0&&(N=3);let V=p.attributes.position.count*N,H=1;V>t.maxTextureSize&&(H=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const B=new Float32Array(V*H*4*v),Q=new Wv(B,V,H,v);Q.type=ji,Q.needsUpdate=!0;const D=N*4;for(let G=0;G<v;G++){const nt=_[G],it=P[G],dt=U[G],ht=V*H*4*G;for(let O=0;O<nt.count;O++){const Z=O*D;b===!0&&(l.fromBufferAttribute(nt,O),B[ht+Z+0]=l.x,B[ht+Z+1]=l.y,B[ht+Z+2]=l.z,B[ht+Z+3]=0),R===!0&&(l.fromBufferAttribute(it,O),B[ht+Z+4]=l.x,B[ht+Z+5]=l.y,B[ht+Z+6]=l.z,B[ht+Z+7]=0),S===!0&&(l.fromBufferAttribute(dt,O),B[ht+Z+8]=l.x,B[ht+Z+9]=l.y,B[ht+Z+10]=l.z,B[ht+Z+11]=dt.itemSize===4?l.w:1)}}x={count:v,texture:Q,size:new ve(V,H)},r.set(p,x),p.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const R=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function UA(s,t,i,r){let l=new WeakMap;function c(m){const h=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==h&&(t.update(v),l.set(v,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==h&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,h))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==h&&(x.update(),l.set(x,h))}return v}function d(){l=new WeakMap}function p(m){const h=m.target;h.removeEventListener("dispose",p),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:c,dispose:d}}class t0 extends Nn{constructor(t,i,r,l,c,d,p,m,h,g=xs){if(g!==xs&&g!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===xs&&(r=mr),r===void 0&&g===As&&(r=Ts),super(null,l,c,d,p,m,g,r,h),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=p!==void 0?p:ai,this.minFilter=m!==void 0?m:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const e0=new Nn,tv=new t0(1,1),n0=new Wv,i0=new mM,a0=new Jv,ev=[],nv=[],iv=new Float32Array(16),av=new Float32Array(9),rv=new Float32Array(4);function Cs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=ev[l];if(c===void 0&&(c=new Float32Array(l),ev[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,s[d].toArray(c,p)}return c}function ln(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function un(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Bu(s,t){let i=nv[t];i===void 0&&(i=new Int32Array(t),nv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function LA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function NA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;s.uniform2fv(this.addr,t),un(i,t)}}function OA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;s.uniform3fv(this.addr,t),un(i,t)}}function PA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;s.uniform4fv(this.addr,t),un(i,t)}}function zA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;rv.set(r),s.uniformMatrix2fv(this.addr,!1,rv),un(i,r)}}function IA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;av.set(r),s.uniformMatrix3fv(this.addr,!1,av),un(i,r)}}function BA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(ln(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(ln(i,r))return;iv.set(r),s.uniformMatrix4fv(this.addr,!1,iv),un(i,r)}}function FA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function HA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;s.uniform2iv(this.addr,t),un(i,t)}}function GA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;s.uniform3iv(this.addr,t),un(i,t)}}function VA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;s.uniform4iv(this.addr,t),un(i,t)}}function kA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function XA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;s.uniform2uiv(this.addr,t),un(i,t)}}function WA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;s.uniform3uiv(this.addr,t),un(i,t)}}function qA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;s.uniform4uiv(this.addr,t),un(i,t)}}function YA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(tv.compareFunction=Vv,c=tv):c=e0,i.setTexture2D(t||c,l)}function jA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||i0,l)}function ZA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||a0,l)}function KA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||n0,l)}function QA(s){switch(s){case 5126:return LA;case 35664:return NA;case 35665:return OA;case 35666:return PA;case 35674:return zA;case 35675:return IA;case 35676:return BA;case 5124:case 35670:return FA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return VA;case 5125:return kA;case 36294:return XA;case 36295:return WA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return KA}}function JA(s,t){s.uniform1fv(this.addr,t)}function $A(s,t){const i=Cs(t,this.size,2);s.uniform2fv(this.addr,i)}function tb(s,t){const i=Cs(t,this.size,3);s.uniform3fv(this.addr,i)}function eb(s,t){const i=Cs(t,this.size,4);s.uniform4fv(this.addr,i)}function nb(s,t){const i=Cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ib(s,t){const i=Cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function ab(s,t){const i=Cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function rb(s,t){s.uniform1iv(this.addr,t)}function sb(s,t){s.uniform2iv(this.addr,t)}function ob(s,t){s.uniform3iv(this.addr,t)}function lb(s,t){s.uniform4iv(this.addr,t)}function ub(s,t){s.uniform1uiv(this.addr,t)}function cb(s,t){s.uniform2uiv(this.addr,t)}function fb(s,t){s.uniform3uiv(this.addr,t)}function hb(s,t){s.uniform4uiv(this.addr,t)}function db(s,t,i){const r=this.cache,l=t.length,c=Bu(i,l);ln(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||e0,c[d])}function pb(s,t,i){const r=this.cache,l=t.length,c=Bu(i,l);ln(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||i0,c[d])}function mb(s,t,i){const r=this.cache,l=t.length,c=Bu(i,l);ln(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||a0,c[d])}function gb(s,t,i){const r=this.cache,l=t.length,c=Bu(i,l);ln(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||n0,c[d])}function _b(s){switch(s){case 5126:return JA;case 35664:return $A;case 35665:return tb;case 35666:return eb;case 35674:return nb;case 35675:return ib;case 35676:return ab;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ob;case 35669:case 35673:return lb;case 5125:return ub;case 36294:return cb;case 36295:return fb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}class vb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=QA(i.type)}}class Sb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_b(i.type)}}class xb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const yh=/(\w+)(\])?(\[|\.)?/g;function sv(s,t){s.seq.push(t),s.map[t.id]=t}function yb(s,t,i){const r=s.name,l=r.length;for(yh.lastIndex=0;;){const c=yh.exec(r),d=yh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){sv(i,h===void 0?new vb(p,s,t):new Sb(p,s,t));break}else{let v=i.map[p];v===void 0&&(v=new xb(p),sv(i,v)),i=v}}}class Eu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);yb(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function ov(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const Mb=37297;let Eb=0;function Tb(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}function Ab(s){const t=Ae.getPrimaries(Ae.workingColorSpace),i=Ae.getPrimaries(s);let r;switch(t===i?r="":t===Cu&&i===Ru?r="LinearDisplayP3ToLinearSRGB":t===Ru&&i===Cu&&(r="LinearSRGBToLinearDisplayP3"),s){case za:case Pu:return[r,"LinearTransferOETF"];case Si:case xd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function lv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Tb(s.getShaderSource(t),d)}else return l}function bb(s,t){const i=Ab(t);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Rb(s,t){let i;switch(t){case Vy:i="Linear";break;case ky:i="Reinhard";break;case Xy:i="Cineon";break;case Wy:i="ACESFilmic";break;case Yy:i="AgX";break;case jy:i="Neutral";break;case qy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gu=new tt;function Cb(){Ae.getLuminanceCoefficients(gu);const s=gu.x.toFixed(4),t=gu.y.toFixed(4),i=gu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Db(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Ub(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let p=1;c.type===s.FLOAT_MAT2&&(p=2),c.type===s.FLOAT_MAT3&&(p=3),c.type===s.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:p}}return i}function Lo(s){return s!==""}function uv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(s){return s.replace(Lb,Ob)}const Nb=new Map;function Ob(s,t){let i=oe[t];if(i===void 0){const r=Nb.get(t);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ld(i)}const Pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(s){return s.replace(Pb,zb)}function zb(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function hv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Ib(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===py?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function Bb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ms:case Es:t="ENVMAP_TYPE_CUBE";break;case Ou:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fb(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function Hb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dv:t="ENVMAP_BLENDING_MULTIPLY";break;case Hy:t="ENVMAP_BLENDING_MIX";break;case Gy:t="ENVMAP_BLENDING_ADD";break}return t}function Gb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Vb(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=Ib(i),h=Bb(i),g=Fb(i),v=Hb(i),x=Gb(i),E=wb(i),b=Db(c),R=l.createProgram();let S,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Lo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(S=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[hv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?oe.tonemapping_pars_fragment:"",i.toneMapping!==Na?Rb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,bb("linearToOutputTexel",i.outputColorSpace),Cb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=ld(d),d=uv(d,i),d=cv(d,i),p=ld(p),p=uv(p,i),p=cv(p,i),d=fv(d),p=fv(p),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=P+S+d,N=P+_+p,V=ov(l,l.VERTEX_SHADER,U),H=ov(l,l.FRAGMENT_SHADER,N);l.attachShader(R,V),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(G){if(s.debug.checkShaderErrors){const nt=l.getProgramInfoLog(R).trim(),it=l.getShaderInfoLog(V).trim(),dt=l.getShaderInfoLog(H).trim();let ht=!0,O=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,V,H);else{const Z=lv(l,V,"vertex"),K=lv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+nt+`
`+Z+`
`+K)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(it===""||dt==="")&&(O=!1);O&&(G.diagnostics={runnable:ht,programLog:nt,vertexShader:{log:it,prefix:S},fragmentShader:{log:dt,prefix:_}})}l.deleteShader(V),l.deleteShader(H),Q=new Eu(l,R),D=Ub(l,R)}let Q;this.getUniforms=function(){return Q===void 0&&B(this),Q};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,Mb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Eb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=H,this}let kb=0;class Xb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Wb(t),i.set(t,r)),r}}class Wb{constructor(t){this.id=kb++,this.code=t,this.usedTimes=0}}function qb(s,t,i,r,l,c,d){const p=new qv,m=new Xb,h=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return h.add(D),D===0?"uv":`uv${D}`}function S(D,w,G,nt,it){const dt=nt.fog,ht=it.geometry,O=D.isMeshStandardMaterial?nt.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),K=Z&&Z.mapping===Ou?Z.image.height:null,Mt=b[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const M=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,L=M!==void 0?M.length:0;let ot=0;ht.morphAttributes.position!==void 0&&(ot=1),ht.morphAttributes.normal!==void 0&&(ot=2),ht.morphAttributes.color!==void 0&&(ot=3);let lt,X,ut,ct;if(Mt){const me=xi[Mt];lt=me.vertexShader,X=me.fragmentShader}else lt=D.vertexShader,X=D.fragmentShader,m.update(D),ut=m.getVertexShaderID(D),ct=m.getFragmentShaderID(D);const At=s.getRenderTarget(),Et=it.isInstancedMesh===!0,Xt=it.isBatchedMesh===!0,re=!!D.map,Ne=!!D.matcap,F=!!Z,Ge=!!D.aoMap,Se=!!D.lightMap,Te=!!D.bumpMap,Vt=!!D.normalMap,Me=!!D.displacementMap,$t=!!D.emissiveMap,te=!!D.metalnessMap,z=!!D.roughnessMap,A=D.anisotropy>0,ft=D.clearcoat>0,St=D.dispersion>0,yt=D.iridescence>0,xt=D.sheen>0,Gt=D.transmission>0,Rt=A&&!!D.anisotropyMap,Ut=ft&&!!D.clearcoatMap,kt=ft&&!!D.clearcoatNormalMap,Ct=ft&&!!D.clearcoatRoughnessMap,Ot=yt&&!!D.iridescenceMap,de=yt&&!!D.iridescenceThicknessMap,jt=xt&&!!D.sheenColorMap,Nt=xt&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,ee=!!D.specularColorMap,be=!!D.specularIntensityMap,q=Gt&&!!D.transmissionMap,bt=Gt&&!!D.thicknessMap,gt=!!D.gradientMap,vt=!!D.alphaMap,wt=D.alphaTest>0,Kt=!!D.alphaHash,pe=!!D.extensions;let We=Na;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(We=s.toneMapping);const Qe={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:lt,fragmentShader:X,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:ct,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:Xt,batchingColor:Xt&&it._colorsTexture!==null,instancing:Et,instancingColor:Et&&it.instanceColor!==null,instancingMorph:Et&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:za,alphaToCoverage:!!D.alphaToCoverage,map:re,matcap:Ne,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:K,aoMap:Ge,lightMap:Se,bumpMap:Te,normalMap:Vt,displacementMap:x&&Me,emissiveMap:$t,normalMapObjectSpace:Vt&&D.normalMapType===$y,normalMapTangentSpace:Vt&&D.normalMapType===Jy,metalnessMap:te,roughnessMap:z,anisotropy:A,anisotropyMap:Rt,clearcoat:ft,clearcoatMap:Ut,clearcoatNormalMap:kt,clearcoatRoughnessMap:Ct,dispersion:St,iridescence:yt,iridescenceMap:Ot,iridescenceThicknessMap:de,sheen:xt,sheenColorMap:jt,sheenRoughnessMap:Nt,specularMap:Wt,specularColorMap:ee,specularIntensityMap:be,transmission:Gt,transmissionMap:q,thicknessMap:bt,gradientMap:gt,opaque:D.transparent===!1&&D.blending===Ss&&D.alphaToCoverage===!1,alphaMap:vt,alphaTest:wt,alphaHash:Kt,combine:D.combine,mapUv:re&&R(D.map.channel),aoMapUv:Ge&&R(D.aoMap.channel),lightMapUv:Se&&R(D.lightMap.channel),bumpMapUv:Te&&R(D.bumpMap.channel),normalMapUv:Vt&&R(D.normalMap.channel),displacementMapUv:Me&&R(D.displacementMap.channel),emissiveMapUv:$t&&R(D.emissiveMap.channel),metalnessMapUv:te&&R(D.metalnessMap.channel),roughnessMapUv:z&&R(D.roughnessMap.channel),anisotropyMapUv:Rt&&R(D.anisotropyMap.channel),clearcoatMapUv:Ut&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:kt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:de&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(D.sheenRoughnessMap.channel),specularMapUv:Wt&&R(D.specularMap.channel),specularColorMapUv:ee&&R(D.specularColorMap.channel),specularIntensityMapUv:be&&R(D.specularIntensityMap.channel),transmissionMapUv:q&&R(D.transmissionMap.channel),thicknessMapUv:bt&&R(D.thicknessMap.channel),alphaMapUv:vt&&R(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Vt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ht.attributes.uv&&(re||vt),fog:!!dt,useFog:D.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:it.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:re&&D.map.isVideoTexture===!0&&Ae.getTransfer(D.map.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Yi,flipSided:D.side===Ln,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:pe&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&D.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(P(w,D),U(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function P(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function U(D,w){p.disableAll(),w.supportsVertexTextures&&p.enable(0),w.instancing&&p.enable(1),w.instancingColor&&p.enable(2),w.instancingMorph&&p.enable(3),w.matcap&&p.enable(4),w.envMap&&p.enable(5),w.normalMapObjectSpace&&p.enable(6),w.normalMapTangentSpace&&p.enable(7),w.clearcoat&&p.enable(8),w.iridescence&&p.enable(9),w.alphaTest&&p.enable(10),w.vertexColors&&p.enable(11),w.vertexAlphas&&p.enable(12),w.vertexUv1s&&p.enable(13),w.vertexUv2s&&p.enable(14),w.vertexUv3s&&p.enable(15),w.vertexTangents&&p.enable(16),w.anisotropy&&p.enable(17),w.alphaHash&&p.enable(18),w.batching&&p.enable(19),w.dispersion&&p.enable(20),w.batchingColor&&p.enable(21),D.push(p.mask),p.disableAll(),w.fog&&p.enable(0),w.useFog&&p.enable(1),w.flatShading&&p.enable(2),w.logarithmicDepthBuffer&&p.enable(3),w.skinning&&p.enable(4),w.morphTargets&&p.enable(5),w.morphNormals&&p.enable(6),w.morphColors&&p.enable(7),w.premultipliedAlpha&&p.enable(8),w.shadowMapEnabled&&p.enable(9),w.doubleSided&&p.enable(10),w.flipSided&&p.enable(11),w.useDepthPacking&&p.enable(12),w.dithering&&p.enable(13),w.transmission&&p.enable(14),w.sheen&&p.enable(15),w.opaque&&p.enable(16),w.pointsUvs&&p.enable(17),w.decodeVideoTexture&&p.enable(18),w.alphaToCoverage&&p.enable(19),D.push(p.mask)}function N(D){const w=b[D.type];let G;if(w){const nt=xi[w];G=CM.clone(nt.uniforms)}else G=D.uniforms;return G}function V(D,w){let G;for(let nt=0,it=g.length;nt<it;nt++){const dt=g[nt];if(dt.cacheKey===w){G=dt,++G.usedTimes;break}}return G===void 0&&(G=new Vb(s,w,D,c),g.push(G)),G}function H(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function Q(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:N,acquireProgram:V,releaseProgram:H,releaseShaderCache:B,programs:g,dispose:Q}}function Yb(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function jb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function dv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(v,x,E,b,R,S){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:E,groupOrder:b,renderOrder:v.renderOrder,z:R,group:S},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=E,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=S),t++,_}function p(v,x,E,b,R,S){const _=d(v,x,E,b,R,S);E.transmission>0?r.push(_):E.transparent===!0?l.push(_):i.push(_)}function m(v,x,E,b,R,S){const _=d(v,x,E,b,R,S);E.transmission>0?r.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function h(v,x){i.length>1&&i.sort(v||jb),r.length>1&&r.sort(x||dv),l.length>1&&l.sort(x||dv)}function g(){for(let v=t,x=s.length;v<x;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:g,sort:h}}function Zb(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new pv,s.set(r,[d])):l>=c.length?(d=new pv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function Kb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new we};break;case"SpotLight":i={position:new tt,direction:new tt,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function Qb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Jb=0;function $b(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function t1(s){const t=new Kb,i=Qb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new tt);const l=new tt,c=new Ke,d=new Ke;function p(h){let g=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let E=0,b=0,R=0,S=0,_=0,P=0,U=0,N=0,V=0,H=0,B=0;h.sort($b);for(let D=0,w=h.length;D<w;D++){const G=h[D],nt=G.color,it=G.intensity,dt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=nt.r*it,v+=nt.g*it,x+=nt.b*it;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],it);B++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,K=i.get(G);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.directionalShadow[E]=K,r.directionalShadowMap[E]=ht,r.directionalShadowMatrix[E]=G.shadow.matrix,P++}r.directional[E]=O,E++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(nt).multiplyScalar(it),O.distance=dt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[R]=O;const Z=G.shadow;if(G.map&&(r.spotLightMap[V]=G.map,V++,Z.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[R]=Z.matrix,G.castShadow){const K=i.get(G);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.spotShadow[R]=K,r.spotShadowMap[R]=ht,N++}R++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(nt).multiplyScalar(it),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=O,S++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const Z=G.shadow,K=i.get(G);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,r.pointShadow[b]=K,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=G.shadow.matrix,U++}r.point[b]=O,b++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(it),O.groundColor.copy(G.groundColor).multiplyScalar(it),r.hemi[_]=O,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==E||Q.pointLength!==b||Q.spotLength!==R||Q.rectAreaLength!==S||Q.hemiLength!==_||Q.numDirectionalShadows!==P||Q.numPointShadows!==U||Q.numSpotShadows!==N||Q.numSpotMaps!==V||Q.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=R,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=N+V-H,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,Q.directionalLength=E,Q.pointLength=b,Q.spotLength=R,Q.rectAreaLength=S,Q.hemiLength=_,Q.numDirectionalShadows=P,Q.numPointShadows=U,Q.numSpotShadows=N,Q.numSpotMaps=V,Q.numLightProbes=B,r.version=Jb++)}function m(h,g){let v=0,x=0,E=0,b=0,R=0;const S=g.matrixWorldInverse;for(let _=0,P=h.length;_<P;_++){const U=h[_];if(U.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),v++}else if(U.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),E++}else if(U.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),d.identity(),c.copy(U.matrixWorld),c.premultiply(S),d.extractRotation(c),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(U.matrixWorld),N.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(U.matrixWorld),N.direction.transformDirection(S),R++}}}return{setup:p,setupView:m,state:r}}function mv(s){const t=new t1(s),i=[],r=[];function l(g){h.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function p(){t.setup(i)}function m(g){t.setupView(i,g)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function e1(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new mv(s),t.set(l,[p])):c>=d.length?(p=new mv(s),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}class n1 extends zu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i1 extends zu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
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
}`;function s1(s,t,i){let r=new Ed;const l=new ve,c=new ve,d=new He,p=new n1({depthPacking:Qy}),m=new i1,h={},g=i.maxTextureSize,v={[Oa]:Ln,[Ln]:Oa,[Yi]:Yi},x=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:a1,fragmentShader:r1}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const b=new Ia;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Mi(b,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wv;let _=this.type;this.render=function(H,B,Q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(La),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const it=_!==qi&&this.type===qi,dt=_===qi&&this.type!==qi;for(let ht=0,O=H.length;ht<O;ht++){const Z=H[ht],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const Mt=K.getFrameExtents();if(l.multiply(Mt),c.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,K.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,K.mapSize.y=c.y)),K.map===null||it===!0||dt===!0){const L=this.type!==qi?{minFilter:ai,magFilter:ai}:{};K.map!==null&&K.map.dispose(),K.map=new gr(l.x,l.y,L),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const M=K.getViewportCount();for(let L=0;L<M;L++){const ot=K.getViewport(L);d.set(c.x*ot.x,c.y*ot.y,c.x*ot.z,c.y*ot.w),nt.viewport(d),K.updateMatrices(Z,L),r=K.getFrustum(),N(B,Q,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===qi&&P(K,Q),K.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,w,G)};function P(H,B){const Q=t.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new gr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(B,null,Q,x,R,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(B,null,Q,E,R,null)}function U(H,B,Q,D){let w=null;const G=Q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)w=G;else if(w=Q.isPointLight===!0?m:p,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const nt=w.uuid,it=B.uuid;let dt=h[nt];dt===void 0&&(dt={},h[nt]=dt);let ht=dt[it];ht===void 0&&(ht=w.clone(),dt[it]=ht,B.addEventListener("dispose",V)),w=ht}if(w.visible=B.visible,w.wireframe=B.wireframe,D===qi?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:v[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,Q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=s.properties.get(w);nt.light=Q}return w}function N(H,B,Q,D,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===qi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,H.matrixWorld);const it=t.update(H),dt=H.material;if(Array.isArray(dt)){const ht=it.groups;for(let O=0,Z=ht.length;O<Z;O++){const K=ht[O],Mt=dt[K.materialIndex];if(Mt&&Mt.visible){const M=U(H,Mt,D,w);H.onBeforeShadow(s,H,B,Q,it,M,K),s.renderBufferDirect(Q,null,it,M,H,K),H.onAfterShadow(s,H,B,Q,it,M,K)}}}else if(dt.visible){const ht=U(H,dt,D,w);H.onBeforeShadow(s,H,B,Q,it,ht,null),s.renderBufferDirect(Q,null,it,ht,H,null),H.onAfterShadow(s,H,B,Q,it,ht,null)}}const nt=H.children;for(let it=0,dt=nt.length;it<dt;it++)N(nt[it],B,Q,D,w)}function V(H){H.target.removeEventListener("dispose",V);for(const Q in h){const D=h[Q],w=H.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}function o1(s){function t(){let q=!1;const bt=new He;let gt=null;const vt=new He(0,0,0,0);return{setMask:function(wt){gt!==wt&&!q&&(s.colorMask(wt,wt,wt,wt),gt=wt)},setLocked:function(wt){q=wt},setClear:function(wt,Kt,pe,We,Qe){Qe===!0&&(wt*=We,Kt*=We,pe*=We),bt.set(wt,Kt,pe,We),vt.equals(bt)===!1&&(s.clearColor(wt,Kt,pe,We),vt.copy(bt))},reset:function(){q=!1,gt=null,vt.set(-1,0,0,0)}}}function i(){let q=!1,bt=null,gt=null,vt=null;return{setTest:function(wt){wt?ct(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(wt){bt!==wt&&!q&&(s.depthMask(wt),bt=wt)},setFunc:function(wt){if(gt!==wt){switch(wt){case Ny:s.depthFunc(s.NEVER);break;case Oy:s.depthFunc(s.ALWAYS);break;case Py:s.depthFunc(s.LESS);break;case Au:s.depthFunc(s.LEQUAL);break;case zy:s.depthFunc(s.EQUAL);break;case Iy:s.depthFunc(s.GEQUAL);break;case By:s.depthFunc(s.GREATER);break;case Fy:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=wt}},setLocked:function(wt){q=wt},setClear:function(wt){vt!==wt&&(s.clearDepth(wt),vt=wt)},reset:function(){q=!1,bt=null,gt=null,vt=null}}}function r(){let q=!1,bt=null,gt=null,vt=null,wt=null,Kt=null,pe=null,We=null,Qe=null;return{setTest:function(me){q||(me?ct(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(me){bt!==me&&!q&&(s.stencilMask(me),bt=me)},setFunc:function(me,jn,Zn){(gt!==me||vt!==jn||wt!==Zn)&&(s.stencilFunc(me,jn,Zn),gt=me,vt=jn,wt=Zn)},setOp:function(me,jn,Zn){(Kt!==me||pe!==jn||We!==Zn)&&(s.stencilOp(me,jn,Zn),Kt=me,pe=jn,We=Zn)},setLocked:function(me){q=me},setClear:function(me){Qe!==me&&(s.clearStencil(me),Qe=me)},reset:function(){q=!1,bt=null,gt=null,vt=null,wt=null,Kt=null,pe=null,We=null,Qe=null}}}const l=new t,c=new i,d=new r,p=new WeakMap,m=new WeakMap;let h={},g={},v=new WeakMap,x=[],E=null,b=!1,R=null,S=null,_=null,P=null,U=null,N=null,V=null,H=new we(0,0,0),B=0,Q=!1,D=null,w=null,G=null,nt=null,it=null;const dt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ht=!1,O=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ht=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ht=O>=2);let K=null,Mt={};const M=s.getParameter(s.SCISSOR_BOX),L=s.getParameter(s.VIEWPORT),ot=new He().fromArray(M),lt=new He().fromArray(L);function X(q,bt,gt,vt){const wt=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(q,Kt),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<gt;pe++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(bt+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Kt}const ut={};ut[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ct(s.DEPTH_TEST),c.setFunc(Au),Te(!1),Vt(y_),ct(s.CULL_FACE),Ge(La);function ct(q){h[q]!==!0&&(s.enable(q),h[q]=!0)}function At(q){h[q]!==!1&&(s.disable(q),h[q]=!1)}function Et(q,bt){return g[q]!==bt?(s.bindFramebuffer(q,bt),g[q]=bt,q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=bt),q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function Xt(q,bt){let gt=x,vt=!1;if(q){gt=v.get(bt),gt===void 0&&(gt=[],v.set(bt,gt));const wt=q.textures;if(gt.length!==wt.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,pe=wt.length;Kt<pe;Kt++)gt[Kt]=s.COLOR_ATTACHMENT0+Kt;gt.length=wt.length,vt=!0}}else gt[0]!==s.BACK&&(gt[0]=s.BACK,vt=!0);vt&&s.drawBuffers(gt)}function re(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const Ne={[fr]:s.FUNC_ADD,[gy]:s.FUNC_SUBTRACT,[_y]:s.FUNC_REVERSE_SUBTRACT};Ne[vy]=s.MIN,Ne[Sy]=s.MAX;const F={[xy]:s.ZERO,[yy]:s.ONE,[My]:s.SRC_COLOR,[wh]:s.SRC_ALPHA,[Cy]:s.SRC_ALPHA_SATURATE,[by]:s.DST_COLOR,[Ty]:s.DST_ALPHA,[Ey]:s.ONE_MINUS_SRC_COLOR,[Dh]:s.ONE_MINUS_SRC_ALPHA,[Ry]:s.ONE_MINUS_DST_COLOR,[Ay]:s.ONE_MINUS_DST_ALPHA,[wy]:s.CONSTANT_COLOR,[Dy]:s.ONE_MINUS_CONSTANT_COLOR,[Uy]:s.CONSTANT_ALPHA,[Ly]:s.ONE_MINUS_CONSTANT_ALPHA};function Ge(q,bt,gt,vt,wt,Kt,pe,We,Qe,me){if(q===La){b===!0&&(At(s.BLEND),b=!1);return}if(b===!1&&(ct(s.BLEND),b=!0),q!==my){if(q!==R||me!==Q){if((S!==fr||U!==fr)&&(s.blendEquation(s.FUNC_ADD),S=fr,U=fr),me)switch(q){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case M_:s.blendFunc(s.ONE,s.ONE);break;case E_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case T_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case M_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case E_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case T_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}_=null,P=null,N=null,V=null,H.set(0,0,0),B=0,R=q,Q=me}return}wt=wt||bt,Kt=Kt||gt,pe=pe||vt,(bt!==S||wt!==U)&&(s.blendEquationSeparate(Ne[bt],Ne[wt]),S=bt,U=wt),(gt!==_||vt!==P||Kt!==N||pe!==V)&&(s.blendFuncSeparate(F[gt],F[vt],F[Kt],F[pe]),_=gt,P=vt,N=Kt,V=pe),(We.equals(H)===!1||Qe!==B)&&(s.blendColor(We.r,We.g,We.b,Qe),H.copy(We),B=Qe),R=q,Q=!1}function Se(q,bt){q.side===Yi?At(s.CULL_FACE):ct(s.CULL_FACE);let gt=q.side===Ln;bt&&(gt=!gt),Te(gt),q.blending===Ss&&q.transparent===!1?Ge(La):Ge(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const vt=q.stencilWrite;d.setTest(vt),vt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),$t(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(q){D!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),D=q)}function Vt(q){q!==hy?(ct(s.CULL_FACE),q!==w&&(q===y_?s.cullFace(s.BACK):q===dy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),w=q}function Me(q){q!==G&&(ht&&s.lineWidth(q),G=q)}function $t(q,bt,gt){q?(ct(s.POLYGON_OFFSET_FILL),(nt!==bt||it!==gt)&&(s.polygonOffset(bt,gt),nt=bt,it=gt)):At(s.POLYGON_OFFSET_FILL)}function te(q){q?ct(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function z(q){q===void 0&&(q=s.TEXTURE0+dt-1),K!==q&&(s.activeTexture(q),K=q)}function A(q,bt,gt){gt===void 0&&(K===null?gt=s.TEXTURE0+dt-1:gt=K);let vt=Mt[gt];vt===void 0&&(vt={type:void 0,texture:void 0},Mt[gt]=vt),(vt.type!==q||vt.texture!==bt)&&(K!==gt&&(s.activeTexture(gt),K=gt),s.bindTexture(q,bt||ut[q]),vt.type=q,vt.texture=bt)}function ft(){const q=Mt[K];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function St(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function yt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Gt(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(q){ot.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),ot.copy(q))}function Nt(q){lt.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),lt.copy(q))}function Wt(q,bt){let gt=m.get(bt);gt===void 0&&(gt=new WeakMap,m.set(bt,gt));let vt=gt.get(q);vt===void 0&&(vt=s.getUniformBlockIndex(bt,q.name),gt.set(q,vt))}function ee(q,bt){const vt=m.get(bt).get(q);p.get(bt)!==vt&&(s.uniformBlockBinding(bt,vt,q.__bindingPointIndex),p.set(bt,vt))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,Mt={},g={},v=new WeakMap,x=[],E=null,b=!1,R=null,S=null,_=null,P=null,U=null,N=null,V=null,H=new we(0,0,0),B=0,Q=!1,D=null,w=null,G=null,nt=null,it=null,ot.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ct,disable:At,bindFramebuffer:Et,drawBuffers:Xt,useProgram:re,setBlending:Ge,setMaterial:Se,setFlipSided:Te,setCullFace:Vt,setLineWidth:Me,setPolygonOffset:$t,setScissorTest:te,activeTexture:z,bindTexture:A,unbindTexture:ft,compressedTexImage2D:St,compressedTexImage3D:yt,texImage2D:Ot,texImage3D:de,updateUBOMapping:Wt,uniformBlockBinding:ee,texStorage2D:kt,texStorage3D:Ct,texSubImage2D:xt,texSubImage3D:Gt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ut,scissor:jt,viewport:Nt,reset:be}}function gv(s,t,i,r){const l=l1(r);switch(i){case Pv:return s*t;case Iv:return s*t;case Bv:return s*t*2;case Fv:return s*t/l.components*l.byteLength;case _d:return s*t/l.components*l.byteLength;case Hv:return s*t*2/l.components*l.byteLength;case vd:return s*t*2/l.components*l.byteLength;case zv:return s*t*3/l.components*l.byteLength;case di:return s*t*4/l.components*l.byteLength;case Sd:return s*t*4/l.components*l.byteLength;case vu:case Su:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xu:case yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zh:case Bh:return Math.max(s,16)*Math.max(t,8)/4;case Ph:case Ih:return Math.max(s,8)*Math.max(t,8)/2;case Fh:case Hh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $h:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case td:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ed:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Mu:case nd:case id:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Gv:case ad:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rd:case sd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function l1(s){switch(s){case Ki:case Lv:return{byteLength:1,components:1};case Po:case Nv:case zo:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case mr:case pd:case ji:return{byteLength:4,components:1};case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function u1(s,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ve,g=new WeakMap;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,A){return E?new OffscreenCanvas(z,A):Du("canvas")}function R(z,A,ft){let St=1;const yt=te(z);if((yt.width>ft||yt.height>ft)&&(St=ft/Math.max(yt.width,yt.height)),St<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const xt=Math.floor(St*yt.width),Gt=Math.floor(St*yt.height);v===void 0&&(v=b(xt,Gt));const Rt=A?b(xt,Gt):v;return Rt.width=xt,Rt.height=Gt,Rt.getContext("2d").drawImage(z,0,0,xt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+xt+"x"+Gt+")."),Rt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),z;return z}function S(z){return z.generateMipmaps&&z.minFilter!==ai&&z.minFilter!==hi}function _(z){s.generateMipmap(z)}function P(z,A,ft,St,yt=!1){if(z!==null){if(s[z]!==void 0)return s[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let xt=A;if(A===s.RED&&(ft===s.FLOAT&&(xt=s.R32F),ft===s.HALF_FLOAT&&(xt=s.R16F),ft===s.UNSIGNED_BYTE&&(xt=s.R8)),A===s.RED_INTEGER&&(ft===s.UNSIGNED_BYTE&&(xt=s.R8UI),ft===s.UNSIGNED_SHORT&&(xt=s.R16UI),ft===s.UNSIGNED_INT&&(xt=s.R32UI),ft===s.BYTE&&(xt=s.R8I),ft===s.SHORT&&(xt=s.R16I),ft===s.INT&&(xt=s.R32I)),A===s.RG&&(ft===s.FLOAT&&(xt=s.RG32F),ft===s.HALF_FLOAT&&(xt=s.RG16F),ft===s.UNSIGNED_BYTE&&(xt=s.RG8)),A===s.RG_INTEGER&&(ft===s.UNSIGNED_BYTE&&(xt=s.RG8UI),ft===s.UNSIGNED_SHORT&&(xt=s.RG16UI),ft===s.UNSIGNED_INT&&(xt=s.RG32UI),ft===s.BYTE&&(xt=s.RG8I),ft===s.SHORT&&(xt=s.RG16I),ft===s.INT&&(xt=s.RG32I)),A===s.RGB&&ft===s.UNSIGNED_INT_5_9_9_9_REV&&(xt=s.RGB9_E5),A===s.RGBA){const Gt=yt?bu:Ae.getTransfer(St);ft===s.FLOAT&&(xt=s.RGBA32F),ft===s.HALF_FLOAT&&(xt=s.RGBA16F),ft===s.UNSIGNED_BYTE&&(xt=Gt===Fe?s.SRGB8_ALPHA8:s.RGBA8),ft===s.UNSIGNED_SHORT_4_4_4_4&&(xt=s.RGBA4),ft===s.UNSIGNED_SHORT_5_5_5_1&&(xt=s.RGB5_A1)}return(xt===s.R16F||xt===s.R32F||xt===s.RG16F||xt===s.RG32F||xt===s.RGBA16F||xt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function U(z,A){let ft;return z?A===null||A===mr||A===Ts?ft=s.DEPTH24_STENCIL8:A===ji?ft=s.DEPTH32F_STENCIL8:A===Po&&(ft=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===mr||A===Ts?ft=s.DEPTH_COMPONENT24:A===ji?ft=s.DEPTH_COMPONENT32F:A===Po&&(ft=s.DEPTH_COMPONENT16),ft}function N(z,A){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==ai&&z.minFilter!==hi?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function V(z){const A=z.target;A.removeEventListener("dispose",V),B(A),A.isVideoTexture&&g.delete(A)}function H(z){const A=z.target;A.removeEventListener("dispose",H),D(A)}function B(z){const A=r.get(z);if(A.__webglInit===void 0)return;const ft=z.source,St=x.get(ft);if(St){const yt=St[A.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&Q(z),Object.keys(St).length===0&&x.delete(ft)}r.remove(z)}function Q(z){const A=r.get(z);s.deleteTexture(A.__webglTexture);const ft=z.source,St=x.get(ft);delete St[A.__cacheKey],d.memory.textures--}function D(z){const A=r.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(A.__webglFramebuffer[St]))for(let yt=0;yt<A.__webglFramebuffer[St].length;yt++)s.deleteFramebuffer(A.__webglFramebuffer[St][yt]);else s.deleteFramebuffer(A.__webglFramebuffer[St]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[St])}else{if(Array.isArray(A.__webglFramebuffer))for(let St=0;St<A.__webglFramebuffer.length;St++)s.deleteFramebuffer(A.__webglFramebuffer[St]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let St=0;St<A.__webglColorRenderbuffer.length;St++)A.__webglColorRenderbuffer[St]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[St]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ft=z.textures;for(let St=0,yt=ft.length;St<yt;St++){const xt=r.get(ft[St]);xt.__webglTexture&&(s.deleteTexture(xt.__webglTexture),d.memory.textures--),r.remove(ft[St])}r.remove(z)}let w=0;function G(){w=0}function nt(){const z=w;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),w+=1,z}function it(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function dt(z,A){const ft=r.get(z);if(z.isVideoTexture&&Me(z),z.isRenderTargetTexture===!1&&z.version>0&&ft.__version!==z.version){const St=z.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(ft,z,A);return}}i.bindTexture(s.TEXTURE_2D,ft.__webglTexture,s.TEXTURE0+A)}function ht(z,A){const ft=r.get(z);if(z.version>0&&ft.__version!==z.version){lt(ft,z,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ft.__webglTexture,s.TEXTURE0+A)}function O(z,A){const ft=r.get(z);if(z.version>0&&ft.__version!==z.version){lt(ft,z,A);return}i.bindTexture(s.TEXTURE_3D,ft.__webglTexture,s.TEXTURE0+A)}function Z(z,A){const ft=r.get(z);if(z.version>0&&ft.__version!==z.version){X(ft,z,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture,s.TEXTURE0+A)}const K={[Nh]:s.REPEAT,[dr]:s.CLAMP_TO_EDGE,[Oh]:s.MIRRORED_REPEAT},Mt={[ai]:s.NEAREST,[Zy]:s.NEAREST_MIPMAP_NEAREST,[Zl]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Zf]:s.LINEAR_MIPMAP_NEAREST,[pr]:s.LINEAR_MIPMAP_LINEAR},M={[tM]:s.NEVER,[sM]:s.ALWAYS,[eM]:s.LESS,[Vv]:s.LEQUAL,[nM]:s.EQUAL,[rM]:s.GEQUAL,[iM]:s.GREATER,[aM]:s.NOTEQUAL};function L(z,A){if(A.type===ji&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===hi||A.magFilter===Zf||A.magFilter===Zl||A.magFilter===pr||A.minFilter===hi||A.minFilter===Zf||A.minFilter===Zl||A.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,K[A.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,K[A.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,K[A.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,Mt[A.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,Mt[A.minFilter]),A.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,M[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ai||A.minFilter!==Zl&&A.minFilter!==pr||A.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ft=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ot(z,A){let ft=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",V));const St=A.source;let yt=x.get(St);yt===void 0&&(yt={},x.set(St,yt));const xt=it(A);if(xt!==z.__cacheKey){yt[xt]===void 0&&(yt[xt]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ft=!0),yt[xt].usedTimes++;const Gt=yt[z.__cacheKey];Gt!==void 0&&(yt[z.__cacheKey].usedTimes--,Gt.usedTimes===0&&Q(A)),z.__cacheKey=xt,z.__webglTexture=yt[xt].texture}return ft}function lt(z,A,ft){let St=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(St=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(St=s.TEXTURE_3D);const yt=ot(z,A),xt=A.source;i.bindTexture(St,z.__webglTexture,s.TEXTURE0+ft);const Gt=r.get(xt);if(xt.version!==Gt.__version||yt===!0){i.activeTexture(s.TEXTURE0+ft);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Ut=A.colorSpace===Da?null:Ae.getPrimaries(A.colorSpace),kt=A.colorSpace===Da||Rt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Ct=R(A.image,!1,l.maxTextureSize);Ct=$t(A,Ct);const Ot=c.convert(A.format,A.colorSpace),de=c.convert(A.type);let jt=P(A.internalFormat,Ot,de,A.colorSpace,A.isVideoTexture);L(St,A);let Nt;const Wt=A.mipmaps,ee=A.isVideoTexture!==!0,be=Gt.__version===void 0||yt===!0,q=xt.dataReady,bt=N(A,Ct);if(A.isDepthTexture)jt=U(A.format===As,A.type),be&&(ee?i.texStorage2D(s.TEXTURE_2D,1,jt,Ct.width,Ct.height):i.texImage2D(s.TEXTURE_2D,0,jt,Ct.width,Ct.height,0,Ot,de,null));else if(A.isDataTexture)if(Wt.length>0){ee&&be&&i.texStorage2D(s.TEXTURE_2D,bt,jt,Wt[0].width,Wt[0].height);for(let gt=0,vt=Wt.length;gt<vt;gt++)Nt=Wt[gt],ee?q&&i.texSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Ot,de,Nt.data):i.texImage2D(s.TEXTURE_2D,gt,jt,Nt.width,Nt.height,0,Ot,de,Nt.data);A.generateMipmaps=!1}else ee?(be&&i.texStorage2D(s.TEXTURE_2D,bt,jt,Ct.width,Ct.height),q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ct.width,Ct.height,Ot,de,Ct.data)):i.texImage2D(s.TEXTURE_2D,0,jt,Ct.width,Ct.height,0,Ot,de,Ct.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ee&&be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,bt,jt,Wt[0].width,Wt[0].height,Ct.depth);for(let gt=0,vt=Wt.length;gt<vt;gt++)if(Nt=Wt[gt],A.format!==di)if(Ot!==null)if(ee){if(q)if(A.layerUpdates.size>0){const wt=gv(Nt.width,Nt.height,A.format,A.type);for(const Kt of A.layerUpdates){const pe=Nt.data.subarray(Kt*wt/Nt.data.BYTES_PER_ELEMENT,(Kt+1)*wt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,Kt,Nt.width,Nt.height,1,Ot,pe,0,0)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,Ct.depth,Ot,Nt.data,0,0)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,jt,Nt.width,Nt.height,Ct.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?q&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,Ct.depth,Ot,de,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,gt,jt,Nt.width,Nt.height,Ct.depth,0,Ot,de,Nt.data)}else{ee&&be&&i.texStorage2D(s.TEXTURE_2D,bt,jt,Wt[0].width,Wt[0].height);for(let gt=0,vt=Wt.length;gt<vt;gt++)Nt=Wt[gt],A.format!==di?Ot!==null?ee?q&&i.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Ot,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,gt,jt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?q&&i.texSubImage2D(s.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,Ot,de,Nt.data):i.texImage2D(s.TEXTURE_2D,gt,jt,Nt.width,Nt.height,0,Ot,de,Nt.data)}else if(A.isDataArrayTexture)if(ee){if(be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,bt,jt,Ct.width,Ct.height,Ct.depth),q)if(A.layerUpdates.size>0){const gt=gv(Ct.width,Ct.height,A.format,A.type);for(const vt of A.layerUpdates){const wt=Ct.data.subarray(vt*gt/Ct.data.BYTES_PER_ELEMENT,(vt+1)*gt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,Ct.width,Ct.height,1,Ot,de,wt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Ot,de,Ct.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Ct.width,Ct.height,Ct.depth,0,Ot,de,Ct.data);else if(A.isData3DTexture)ee?(be&&i.texStorage3D(s.TEXTURE_3D,bt,jt,Ct.width,Ct.height,Ct.depth),q&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Ot,de,Ct.data)):i.texImage3D(s.TEXTURE_3D,0,jt,Ct.width,Ct.height,Ct.depth,0,Ot,de,Ct.data);else if(A.isFramebufferTexture){if(be)if(ee)i.texStorage2D(s.TEXTURE_2D,bt,jt,Ct.width,Ct.height);else{let gt=Ct.width,vt=Ct.height;for(let wt=0;wt<bt;wt++)i.texImage2D(s.TEXTURE_2D,wt,jt,gt,vt,0,Ot,de,null),gt>>=1,vt>>=1}}else if(Wt.length>0){if(ee&&be){const gt=te(Wt[0]);i.texStorage2D(s.TEXTURE_2D,bt,jt,gt.width,gt.height)}for(let gt=0,vt=Wt.length;gt<vt;gt++)Nt=Wt[gt],ee?q&&i.texSubImage2D(s.TEXTURE_2D,gt,0,0,Ot,de,Nt):i.texImage2D(s.TEXTURE_2D,gt,jt,Ot,de,Nt);A.generateMipmaps=!1}else if(ee){if(be){const gt=te(Ct);i.texStorage2D(s.TEXTURE_2D,bt,jt,gt.width,gt.height)}q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,de,Ct)}else i.texImage2D(s.TEXTURE_2D,0,jt,Ot,de,Ct);S(A)&&_(St),Gt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function X(z,A,ft){if(A.image.length!==6)return;const St=ot(z,A),yt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+ft);const xt=r.get(yt);if(yt.version!==xt.__version||St===!0){i.activeTexture(s.TEXTURE0+ft);const Gt=Ae.getPrimaries(Ae.workingColorSpace),Rt=A.colorSpace===Da?null:Ae.getPrimaries(A.colorSpace),Ut=A.colorSpace===Da||Gt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const kt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ct=A.image[0]&&A.image[0].isDataTexture,Ot=[];for(let vt=0;vt<6;vt++)!kt&&!Ct?Ot[vt]=R(A.image[vt],!0,l.maxCubemapSize):Ot[vt]=Ct?A.image[vt].image:A.image[vt],Ot[vt]=$t(A,Ot[vt]);const de=Ot[0],jt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),Wt=P(A.internalFormat,jt,Nt,A.colorSpace),ee=A.isVideoTexture!==!0,be=xt.__version===void 0||St===!0,q=yt.dataReady;let bt=N(A,de);L(s.TEXTURE_CUBE_MAP,A);let gt;if(kt){ee&&be&&i.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Wt,de.width,de.height);for(let vt=0;vt<6;vt++){gt=Ot[vt].mipmaps;for(let wt=0;wt<gt.length;wt++){const Kt=gt[wt];A.format!==di?jt!==null?ee?q&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,0,0,Kt.width,Kt.height,jt,Kt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,Wt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,0,0,Kt.width,Kt.height,jt,Nt,Kt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt,Wt,Kt.width,Kt.height,0,jt,Nt,Kt.data)}}}else{if(gt=A.mipmaps,ee&&be){gt.length>0&&bt++;const vt=te(Ot[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Wt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Ct){ee?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot[vt].width,Ot[vt].height,jt,Nt,Ot[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Wt,Ot[vt].width,Ot[vt].height,0,jt,Nt,Ot[vt].data);for(let wt=0;wt<gt.length;wt++){const pe=gt[wt].image[vt].image;ee?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,0,0,pe.width,pe.height,jt,Nt,pe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,Wt,pe.width,pe.height,0,jt,Nt,pe.data)}}else{ee?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,jt,Nt,Ot[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Wt,jt,Nt,Ot[vt]);for(let wt=0;wt<gt.length;wt++){const Kt=gt[wt];ee?q&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,0,0,jt,Nt,Kt.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,wt+1,Wt,jt,Nt,Kt.image[vt])}}}S(A)&&_(s.TEXTURE_CUBE_MAP),xt.__version=yt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function ut(z,A,ft,St,yt,xt){const Gt=c.convert(ft.format,ft.colorSpace),Rt=c.convert(ft.type),Ut=P(ft.internalFormat,Gt,Rt,ft.colorSpace);if(!r.get(A).__hasExternalTextures){const Ct=Math.max(1,A.width>>xt),Ot=Math.max(1,A.height>>xt);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,xt,Ut,Ct,Ot,A.depth,0,Gt,Rt,null):i.texImage2D(yt,xt,Ut,Ct,Ot,0,Gt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,z),Vt(A)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,yt,r.get(ft).__webglTexture,0,Te(A)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,St,yt,r.get(ft).__webglTexture,xt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(z,A,ft){if(s.bindRenderbuffer(s.RENDERBUFFER,z),A.depthBuffer){const St=A.depthTexture,yt=St&&St.isDepthTexture?St.type:null,xt=U(A.stencilBuffer,yt),Gt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=Te(A);Vt(A)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,xt,A.width,A.height):ft?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,xt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Gt,s.RENDERBUFFER,z)}else{const St=A.textures;for(let yt=0;yt<St.length;yt++){const xt=St[yt],Gt=c.convert(xt.format,xt.colorSpace),Rt=c.convert(xt.type),Ut=P(xt.internalFormat,Gt,Rt,xt.colorSpace),kt=Te(A);ft&&Vt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Ut,A.width,A.height):Vt(A)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,Ut,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ut,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(z,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),dt(A.depthTexture,0);const St=r.get(A.depthTexture).__webglTexture,yt=Te(A);if(A.depthTexture.format===xs)Vt(A)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(A.depthTexture.format===As)Vt(A)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Et(z){const A=r.get(z),ft=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const St=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),St){const yt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,St.removeEventListener("dispose",yt)};St.addEventListener("dispose",yt),A.__depthDisposeCallback=yt}A.__boundDepthTexture=St}if(z.depthTexture&&!A.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");At(A.__webglFramebuffer,z)}else if(ft){A.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[St]),A.__webglDepthbuffer[St]===void 0)A.__webglDepthbuffer[St]=s.createRenderbuffer(),ct(A.__webglDepthbuffer[St],z,!1);else{const yt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=A.__webglDepthbuffer[St];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,xt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ct(A.__webglDepthbuffer,z,!1);else{const St=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,yt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(z,A,ft){const St=r.get(z);A!==void 0&&ut(St.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ft!==void 0&&Et(z)}function re(z){const A=z.texture,ft=r.get(z),St=r.get(A);z.addEventListener("dispose",H);const yt=z.textures,xt=z.isWebGLCubeRenderTarget===!0,Gt=yt.length>1;if(Gt||(St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture()),St.__version=A.version,d.memory.textures++),xt){ft.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0){ft.__webglFramebuffer[Rt]=[];for(let Ut=0;Ut<A.mipmaps.length;Ut++)ft.__webglFramebuffer[Rt][Ut]=s.createFramebuffer()}else ft.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ft.__webglFramebuffer=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)ft.__webglFramebuffer[Rt]=s.createFramebuffer()}else ft.__webglFramebuffer=s.createFramebuffer();if(Gt)for(let Rt=0,Ut=yt.length;Rt<Ut;Rt++){const kt=r.get(yt[Rt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),d.memory.textures++)}if(z.samples>0&&Vt(z)===!1){ft.__webglMultisampledFramebuffer=s.createFramebuffer(),ft.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let Rt=0;Rt<yt.length;Rt++){const Ut=yt[Rt];ft.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ft.__webglColorRenderbuffer[Rt]);const kt=c.convert(Ut.format,Ut.colorSpace),Ct=c.convert(Ut.type),Ot=P(Ut.internalFormat,kt,Ct,Ut.colorSpace,z.isXRRenderTarget===!0),de=Te(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,Ot,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(ft.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(ft.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){i.bindTexture(s.TEXTURE_CUBE_MAP,St.__webglTexture),L(s.TEXTURE_CUBE_MAP,A);for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)ut(ft.__webglFramebuffer[Rt][Ut],z,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ut);else ut(ft.__webglFramebuffer[Rt],z,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Rt=0,Ut=yt.length;Rt<Ut;Rt++){const kt=yt[Rt],Ct=r.get(kt);i.bindTexture(s.TEXTURE_2D,Ct.__webglTexture),L(s.TEXTURE_2D,kt),ut(ft.__webglFramebuffer,z,kt,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),S(kt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Rt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,St.__webglTexture),L(Rt,A),A.mipmaps&&A.mipmaps.length>0)for(let Ut=0;Ut<A.mipmaps.length;Ut++)ut(ft.__webglFramebuffer[Ut],z,A,s.COLOR_ATTACHMENT0,Rt,Ut);else ut(ft.__webglFramebuffer,z,A,s.COLOR_ATTACHMENT0,Rt,0);S(A)&&_(Rt),i.unbindTexture()}z.depthBuffer&&Et(z)}function Ne(z){const A=z.textures;for(let ft=0,St=A.length;ft<St;ft++){const yt=A[ft];if(S(yt)){const xt=z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Gt=r.get(yt).__webglTexture;i.bindTexture(xt,Gt),_(xt),i.unbindTexture()}}}const F=[],Ge=[];function Se(z){if(z.samples>0){if(Vt(z)===!1){const A=z.textures,ft=z.width,St=z.height;let yt=s.COLOR_BUFFER_BIT;const xt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Gt=r.get(z),Rt=A.length>1;if(Rt)for(let Ut=0;Ut<A.length;Ut++)i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Ut=0;Ut<A.length;Ut++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ut]);const kt=r.get(A[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,ft,St,0,0,ft,St,yt,s.NEAREST),m===!0&&(F.length=0,Ge.length=0,F.push(s.COLOR_ATTACHMENT0+Ut),z.depthBuffer&&z.resolveDepthBuffer===!1&&(F.push(xt),Ge.push(xt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Ut=0;Ut<A.length;Ut++){i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Ut]);const kt=r.get(A[Ut]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,kt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const A=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Te(z){return Math.min(l.maxSamples,z.samples)}function Vt(z){const A=r.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Me(z){const A=d.render.frame;g.get(z)!==A&&(g.set(z,A),z.update())}function $t(z,A){const ft=z.colorSpace,St=z.format,yt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ft!==za&&ft!==Da&&(Ae.getTransfer(ft)===Fe?(St!==di||yt!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),A}function te(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=nt,this.resetTextureUnits=G,this.setTexture2D=dt,this.setTexture2DArray=ht,this.setTexture3D=O,this.setTextureCube=Z,this.rebindTextures=Xt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Vt}function c1(s,t){function i(r,l=Da){let c;const d=Ae.getTransfer(l);if(r===Ki)return s.UNSIGNED_BYTE;if(r===md)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ov)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Lv)return s.BYTE;if(r===Nv)return s.SHORT;if(r===Po)return s.UNSIGNED_SHORT;if(r===pd)return s.INT;if(r===mr)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===zo)return s.HALF_FLOAT;if(r===Pv)return s.ALPHA;if(r===zv)return s.RGB;if(r===di)return s.RGBA;if(r===Iv)return s.LUMINANCE;if(r===Bv)return s.LUMINANCE_ALPHA;if(r===xs)return s.DEPTH_COMPONENT;if(r===As)return s.DEPTH_STENCIL;if(r===Fv)return s.RED;if(r===_d)return s.RED_INTEGER;if(r===Hv)return s.RG;if(r===vd)return s.RG_INTEGER;if(r===Sd)return s.RGBA_INTEGER;if(r===vu||r===Su||r===xu||r===yu)if(d===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===vu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===vu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ph||r===zh||r===Ih||r===Bh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ph)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fh||r===Hh||r===Gh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Fh||r===Hh)return d===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Gh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Vh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$h)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===td)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ed)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mu||r===nd||r===id)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Mu)return d===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gv||r===ad||r===rd||r===sd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Mu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ad)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class f1 extends Yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _u extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,r),_=this._getHandJoint(h,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],x=g.position.distanceTo(v.position),E=.02,b=.005;h.inputState.pinching&&x>E+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&x<=E-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new _u;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const d1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
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

}`;class m1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Nn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Pa({vertexShader:d1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mi(new Iu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g1 extends Rs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,g=null,v=null,x=null,E=null,b=null;const R=new m1,S=i.getContextAttributes();let _=null,P=null;const U=[],N=[],V=new ve;let H=null;const B=new Yn;B.layers.enable(1),B.viewport=new He;const Q=new Yn;Q.layers.enable(2),Q.viewport=new He;const D=[B,Q],w=new f1;w.layers.enable(1),w.layers.enable(2);let G=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ut=U[X];return ut===void 0&&(ut=new Mh,U[X]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(X){let ut=U[X];return ut===void 0&&(ut=new Mh,U[X]=ut),ut.getGripSpace()},this.getHand=function(X){let ut=U[X];return ut===void 0&&(ut=new Mh,U[X]=ut),ut.getHandSpace()};function it(X){const ut=N.indexOf(X.inputSource);if(ut===-1)return;const ct=U[ut];ct!==void 0&&(ct.update(X.inputSource,X.frame,h||d),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function dt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",ht);for(let X=0;X<U.length;X++){const ut=N[X];ut!==null&&(N[X]=null,U[X].disconnect(ut))}G=null,nt=null,R.reset(),t.setRenderTarget(_),E=null,x=null,v=null,l=null,P=null,lt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){p=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(V),l.renderState.layers===void 0){const ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),P=new gr(E.framebufferWidth,E.framebufferHeight,{format:di,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let ut=null,ct=null,At=null;S.depth&&(At=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=S.stencil?As:xs,ct=S.stencil?Ts:mr);const Et={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(Et),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new gr(x.textureWidth,x.textureHeight,{format:di,type:Ki,depthTexture:new t0(x.textureWidth,x.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),lt.setContext(l),lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(X){for(let ut=0;ut<X.removed.length;ut++){const ct=X.removed[ut],At=N.indexOf(ct);At>=0&&(N[At]=null,U[At].disconnect(ct))}for(let ut=0;ut<X.added.length;ut++){const ct=X.added[ut];let At=N.indexOf(ct);if(At===-1){for(let Xt=0;Xt<U.length;Xt++)if(Xt>=N.length){N.push(ct),At=Xt;break}else if(N[Xt]===null){N[Xt]=ct,At=Xt;break}if(At===-1)break}const Et=U[At];Et&&Et.connect(ct)}}const O=new tt,Z=new tt;function K(X,ut,ct){O.setFromMatrixPosition(ut.matrixWorld),Z.setFromMatrixPosition(ct.matrixWorld);const At=O.distanceTo(Z),Et=ut.projectionMatrix.elements,Xt=ct.projectionMatrix.elements,re=Et[14]/(Et[10]-1),Ne=Et[14]/(Et[10]+1),F=(Et[9]+1)/Et[5],Ge=(Et[9]-1)/Et[5],Se=(Et[8]-1)/Et[0],Te=(Xt[8]+1)/Xt[0],Vt=re*Se,Me=re*Te,$t=At/(-Se+Te),te=$t*-Se;if(ut.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(te),X.translateZ($t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy(ut.projectionMatrix),X.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const z=re+$t,A=Ne+$t,ft=Vt-te,St=Me+(At-te),yt=F*Ne/A*z,xt=Ge*Ne/A*z;X.projectionMatrix.makePerspective(ft,St,yt,xt,z,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Mt(X,ut){ut===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ut.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let ut=X.near,ct=X.far;R.texture!==null&&(R.depthNear>0&&(ut=R.depthNear),R.depthFar>0&&(ct=R.depthFar)),w.near=Q.near=B.near=ut,w.far=Q.far=B.far=ct,(G!==w.near||nt!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),G=w.near,nt=w.far);const At=X.parent,Et=w.cameras;Mt(w,At);for(let Xt=0;Xt<Et.length;Xt++)Mt(Et[Xt],At);Et.length===2?K(w,B,Q):w.projectionMatrix.copy(B.projectionMatrix),M(X,w,At)};function M(X,ut,ct){ct===null?X.matrix.copy(ut.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(ut.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ut.projectionMatrix),X.projectionMatrixInverse.copy(ut.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=od*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(X){m=X,x!==null&&(x.fixedFoveation=X),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=X)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let L=null;function ot(X,ut){if(g=ut.getViewerPose(h||d),b=ut,g!==null){const ct=g.views;E!==null&&(t.setRenderTargetFramebuffer(P,E.framebuffer),t.setRenderTarget(P));let At=!1;ct.length!==w.cameras.length&&(w.cameras.length=0,At=!0);for(let Xt=0;Xt<ct.length;Xt++){const re=ct[Xt];let Ne=null;if(E!==null)Ne=E.getViewport(re);else{const Ge=v.getViewSubImage(x,re);Ne=Ge.viewport,Xt===0&&(t.setRenderTargetTextures(P,Ge.colorTexture,x.ignoreDepthValues?void 0:Ge.depthStencilTexture),t.setRenderTarget(P))}let F=D[Xt];F===void 0&&(F=new Yn,F.layers.enable(Xt),F.viewport=new He,D[Xt]=F),F.matrix.fromArray(re.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(re.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Xt===0&&(w.matrix.copy(F.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),At===!0&&w.cameras.push(F)}const Et=l.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Xt=v.getDepthInformation(ct[0]);Xt&&Xt.isValid&&Xt.texture&&R.init(t,Xt,l.renderState)}}for(let ct=0;ct<U.length;ct++){const At=N[ct],Et=U[ct];At!==null&&Et!==void 0&&Et.update(At,ut,h||d)}L&&L(X,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),b=null}const lt=new $v;lt.setAnimationLoop(ot),this.setAnimationLoop=function(X){L=X},this.dispose=function(){}}}const lr=new Qi,_1=new Ke;function v1(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Kv(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,P,U,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&E(S,_,N)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),R(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&p(S,_)):_.isPointsMaterial?m(S,_,P,U):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Ln&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Ln&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=t.get(_),U=P.envMap,N=P.envMapRotation;U&&(S.envMap.value=U,lr.copy(N),lr.x*=-1,lr.y*=-1,lr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),S.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(lr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function p(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,P,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function E(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ln&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const P=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function S1(s,t,i,r){let l={},c={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const N=U.program;r.uniformBlockBinding(P,N)}function h(P,U){let N=l[P.id];N===void 0&&(b(P),N=g(P),l[P.id]=N,P.addEventListener("dispose",S));const V=U.program;r.updateUBOMapping(P,V);const H=t.render.frame;c[P.id]!==H&&(x(P),c[P.id]=H)}function g(P){const U=v();P.__bindingPointIndex=U;const N=s.createBuffer(),V=P.__size,H=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,V,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,N),N}function v(){for(let P=0;P<p;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=l[P.id],N=P.uniforms,V=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let H=0,B=N.length;H<B;H++){const Q=Array.isArray(N[H])?N[H]:[N[H]];for(let D=0,w=Q.length;D<w;D++){const G=Q[D];if(E(G,H,D,V)===!0){const nt=G.__offset,it=Array.isArray(G.value)?G.value:[G.value];let dt=0;for(let ht=0;ht<it.length;ht++){const O=it[ht],Z=R(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,nt+dt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,dt),dt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(P,U,N,V){const H=P.value,B=U+"_"+N;if(V[B]===void 0)return typeof H=="number"||typeof H=="boolean"?V[B]=H:V[B]=H.clone(),!0;{const Q=V[B];if(typeof H=="number"||typeof H=="boolean"){if(Q!==H)return V[B]=H,!0}else if(Q.equals(H)===!1)return Q.copy(H),!0}return!1}function b(P){const U=P.uniforms;let N=0;const V=16;for(let B=0,Q=U.length;B<Q;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let w=0,G=D.length;w<G;w++){const nt=D[w],it=Array.isArray(nt.value)?nt.value:[nt.value];for(let dt=0,ht=it.length;dt<ht;dt++){const O=it[dt],Z=R(O),K=N%V,Mt=K%Z.boundary,M=K+Mt;N+=Mt,M!==0&&V-M<Z.storage&&(N+=V-M),nt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=N,N+=Z.storage}}}const H=N%V;return H>0&&(N+=V-H),P.__size=N,P.__cache={},this}function R(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function S(P){const U=P.target;U.removeEventListener("dispose",S);const N=d.indexOf(U.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const P in l)s.deleteBuffer(l[P]);d=[],l={},c={}}return{bind:m,update:h,dispose:_}}class x1{constructor(t={}){const{canvas:i=lM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const E=new Uint32Array(4),b=new Int32Array(4);let R=null,S=null;const _=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this.toneMapping=Na,this.toneMappingExposure=1;const U=this;let N=!1,V=0,H=0,B=null,Q=-1,D=null;const w=new He,G=new He;let nt=null;const it=new we(0);let dt=0,ht=i.width,O=i.height,Z=1,K=null,Mt=null;const M=new He(0,0,ht,O),L=new He(0,0,ht,O);let ot=!1;const lt=new Ed;let X=!1,ut=!1;const ct=new Ke,At=new tt,Et=new He,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ne(){return B===null?Z:1}let F=r;function Ge(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${dd}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),F===null){const W="webgl2";if(F=Ge(W,C),F===null)throw Ge(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Se,Te,Vt,Me,$t,te,z,A,ft,St,yt,xt,Gt,Rt,Ut,kt,Ct,Ot,de,jt,Nt,Wt,ee,be;function q(){Se=new bA(F),Se.init(),Wt=new c1(F,Se),Te=new SA(F,Se,t,Wt),Vt=new o1(F),Me=new wA(F),$t=new Yb,te=new u1(F,Se,Vt,$t,Te,Wt,Me),z=new yA(U),A=new AA(U),ft=new PM(F),ee=new _A(F,ft),St=new RA(F,ft,Me,ee),yt=new UA(F,St,ft,Me),de=new DA(F,Te,te),kt=new xA($t),xt=new qb(U,z,A,Se,Te,ee,kt),Gt=new v1(U,$t),Rt=new Zb,Ut=new e1(Se),Ot=new gA(U,z,A,Vt,yt,x,m),Ct=new s1(U,yt,Te),be=new S1(F,Me,Te,Vt),jt=new vA(F,Se,Me),Nt=new CA(F,Se,Me),Me.programs=xt.programs,U.capabilities=Te,U.extensions=Se,U.properties=$t,U.renderLists=Rt,U.shadowMap=Ct,U.state=Vt,U.info=Me}q();const bt=new g1(U,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Se.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Se.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(ht,O,!1))},this.getSize=function(C){return C.set(ht,O)},this.setSize=function(C,W,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=C,O=W,i.width=Math.floor(C*Z),i.height=Math.floor(W*Z),at===!0&&(i.style.width=C+"px",i.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ht*Z,O*Z).floor()},this.setDrawingBufferSize=function(C,W,at){ht=C,O=W,Z=at,i.width=Math.floor(C*at),i.height=Math.floor(W*at),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(M)},this.setViewport=function(C,W,at,st){C.isVector4?M.set(C.x,C.y,C.z,C.w):M.set(C,W,at,st),Vt.viewport(w.copy(M).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(L)},this.setScissor=function(C,W,at,st){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,W,at,st),Vt.scissor(G.copy(L).multiplyScalar(Z).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(C){Vt.setScissorTest(ot=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){Mt=C},this.getClearColor=function(C){return C.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(C=!0,W=!0,at=!0){let st=0;if(C){let j=!1;if(B!==null){const Tt=B.texture.format;j=Tt===Sd||Tt===vd||Tt===_d}if(j){const Tt=B.texture.type,Lt=Tt===Ki||Tt===mr||Tt===Po||Tt===Ts||Tt===md||Tt===gd,Pt=Ot.getClearColor(),zt=Ot.getClearAlpha(),Qt=Pt.r,qt=Pt.g,Bt=Pt.b;Lt?(E[0]=Qt,E[1]=qt,E[2]=Bt,E[3]=zt,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=Qt,b[1]=qt,b[2]=Bt,b[3]=zt,F.clearBufferiv(F.COLOR,0,b))}else st|=F.COLOR_BUFFER_BIT}W&&(st|=F.DEPTH_BUFFER_BIT),at&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Rt.dispose(),Ut.dispose(),$t.dispose(),z.dispose(),A.dispose(),yt.dispose(),ee.dispose(),be.dispose(),xt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Zn),bt.removeEventListener("sessionend",ri),Ve.stop()};function gt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=Me.autoReset,W=Ct.enabled,at=Ct.autoUpdate,st=Ct.needsUpdate,j=Ct.type;q(),Me.autoReset=C,Ct.enabled=W,Ct.autoUpdate=at,Ct.needsUpdate=st,Ct.type=j}function wt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Kt(C){const W=C.target;W.removeEventListener("dispose",Kt),pe(W)}function pe(C){We(C),$t.remove(C)}function We(C){const W=$t.get(C).programs;W!==void 0&&(W.forEach(function(at){xt.releaseProgram(at)}),C.isShaderMaterial&&xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,at,st,j,Tt){W===null&&(W=Xt);const Lt=j.isMesh&&j.matrixWorld.determinant()<0,Pt=$i(C,W,at,st,j);Vt.setMaterial(st,Lt);let zt=at.index,Qt=1;if(st.wireframe===!0){if(zt=St.getWireframeAttribute(at),zt===void 0)return;Qt=2}const qt=at.drawRange,Bt=at.attributes.position;let se=qt.start*Qt,Pe=(qt.start+qt.count)*Qt;Tt!==null&&(se=Math.max(se,Tt.start*Qt),Pe=Math.min(Pe,(Tt.start+Tt.count)*Qt)),zt!==null?(se=Math.max(se,0),Pe=Math.min(Pe,zt.count)):Bt!=null&&(se=Math.max(se,0),Pe=Math.min(Pe,Bt.count));const Ie=Pe-se;if(Ie<0||Ie===1/0)return;ee.setup(j,st,Pt,at,zt);let tn,ge=jt;if(zt!==null&&(tn=ft.get(zt),ge=Nt,ge.setIndex(tn)),j.isMesh)st.wireframe===!0?(Vt.setLineWidth(st.wireframeLinewidth*Ne()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(j.isLine){let Ft=st.linewidth;Ft===void 0&&(Ft=1),Vt.setLineWidth(Ft*Ne()),j.isLineSegments?ge.setMode(F.LINES):j.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else j.isPoints?ge.setMode(F.POINTS):j.isSprite&&ge.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ge.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ft=j._multiDrawStarts,rn=j._multiDrawCounts,xe=j._multiDrawCount,ke=zt?ft.get(zt).bytesPerElement:1,bi=$t.get(st).currentProgram.getUniforms();for(let En=0;En<xe;En++)bi.setValue(F,"_gl_DrawID",En),ge.render(Ft[En]/ke,rn[En])}else if(j.isInstancedMesh)ge.renderInstances(se,Ie,j.count);else if(at.isInstancedBufferGeometry){const Ft=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,rn=Math.min(at.instanceCount,Ft);ge.renderInstances(se,Ie,rn)}else ge.render(se,Ie)};function Qe(C,W,at){C.transparent===!0&&C.side===Yi&&C.forceSinglePass===!1?(C.side=Ln,C.needsUpdate=!0,Ba(C,W,at),C.side=Oa,C.needsUpdate=!0,Ba(C,W,at),C.side=Yi):Ba(C,W,at)}this.compile=function(C,W,at=null){at===null&&(at=C),S=Ut.get(at),S.init(W),P.push(S),at.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),C!==at&&C.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights();const st=new Set;return C.traverse(function(j){const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Pt=Tt[Lt];Qe(Pt,at,j),st.add(Pt)}else Qe(Tt,at,j),st.add(Tt)}),P.pop(),S=null,st},this.compileAsync=function(C,W,at=null){const st=this.compile(C,W,at);return new Promise(j=>{function Tt(){if(st.forEach(function(Lt){$t.get(Lt).currentProgram.isReady()&&st.delete(Lt)}),st.size===0){j(C);return}setTimeout(Tt,10)}Se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let me=null;function jn(C){me&&me(C)}function Zn(){Ve.stop()}function ri(){Ve.start()}const Ve=new $v;Ve.setAnimationLoop(jn),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(C){me=C,bt.setAnimationLoop(C),C===null?Ve.stop():Ve.start()},bt.addEventListener("sessionstart",Zn),bt.addEventListener("sessionend",ri),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(W),W=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,W,B),S=Ut.get(C,P.length),S.init(W),P.push(S),ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),lt.setFromProjectionMatrix(ct),ut=this.localClippingEnabled,X=kt.init(this.clippingPlanes,ut),R=Rt.get(C,_.length),R.init(),_.push(R),bt.enabled===!0&&bt.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&cn(Tt,W,-1/0,U.sortObjects)}cn(C,W,0,U.sortObjects),R.finish(),U.sortObjects===!0&&R.sort(K,Mt),re=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,re&&Ot.addToRenderList(R,C),this.info.render.frame++,X===!0&&kt.beginShadows();const at=S.state.shadowsArray;Ct.render(at,C,W),X===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=R.opaque,j=R.transmissive;if(S.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(j.length>0)for(let Lt=0,Pt=Tt.length;Lt<Pt;Lt++){const zt=Tt[Lt];_r(st,j,C,zt)}re&&Ot.render(C);for(let Lt=0,Pt=Tt.length;Lt<Pt;Lt++){const zt=Tt[Lt];Ai(R,C,zt,zt.viewport)}}else j.length>0&&_r(st,j,C,W),re&&Ot.render(C),Ai(R,C,W);B!==null&&(te.updateMultisampleRenderTarget(B),te.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(U,C,W),ee.resetDefaultState(),Q=-1,D=null,P.pop(),P.length>0?(S=P[P.length-1],X===!0&&kt.setGlobalState(U.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function cn(C,W,at,st){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||lt.intersectsSprite(C)){st&&Et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ct);const Lt=yt.update(C),Pt=C.material;Pt.visible&&R.push(C,Lt,Pt,at,Et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||lt.intersectsObject(C))){const Lt=yt.update(C),Pt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Et.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Et.copy(Lt.boundingSphere.center)),Et.applyMatrix4(C.matrixWorld).applyMatrix4(ct)),Array.isArray(Pt)){const zt=Lt.groups;for(let Qt=0,qt=zt.length;Qt<qt;Qt++){const Bt=zt[Qt],se=Pt[Bt.materialIndex];se&&se.visible&&R.push(C,Lt,se,at,Et.z,Bt)}}else Pt.visible&&R.push(C,Lt,Pt,at,Et.z,null)}}const Tt=C.children;for(let Lt=0,Pt=Tt.length;Lt<Pt;Lt++)cn(Tt[Lt],W,at,st)}function Ai(C,W,at,st){const j=C.opaque,Tt=C.transmissive,Lt=C.transparent;S.setupLightsView(at),X===!0&&kt.setGlobalState(U.clippingPlanes,at),st&&Vt.viewport(w.copy(st)),j.length>0&&vr(j,W,at),Tt.length>0&&vr(Tt,W,at),Lt.length>0&&vr(Lt,W,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function _r(C,W,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[st.id]===void 0&&(S.state.transmissionRenderTarget[st.id]=new gr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?zo:Ki,minFilter:pr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=S.state.transmissionRenderTarget[st.id],Lt=st.viewport||w;Tt.setSize(Lt.z,Lt.w);const Pt=U.getRenderTarget();U.setRenderTarget(Tt),U.getClearColor(it),dt=U.getClearAlpha(),dt<1&&U.setClearColor(16777215,.5),U.clear(),re&&Ot.render(at);const zt=U.toneMapping;U.toneMapping=Na;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),X===!0&&kt.setGlobalState(U.clippingPlanes,st),vr(C,at,st),te.updateMultisampleRenderTarget(Tt),te.updateRenderTargetMipmap(Tt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Bt=0,se=W.length;Bt<se;Bt++){const Pe=W[Bt],Ie=Pe.object,tn=Pe.geometry,ge=Pe.material,Ft=Pe.group;if(ge.side===Yi&&Ie.layers.test(st.layers)){const rn=ge.side;ge.side=Ln,ge.needsUpdate=!0,Go(Ie,at,st,tn,ge,Ft),ge.side=rn,ge.needsUpdate=!0,qt=!0}}qt===!0&&(te.updateMultisampleRenderTarget(Tt),te.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Pt),U.setClearColor(it,dt),Qt!==void 0&&(st.viewport=Qt),U.toneMapping=zt}function vr(C,W,at){const st=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Tt=C.length;j<Tt;j++){const Lt=C[j],Pt=Lt.object,zt=Lt.geometry,Qt=st===null?Lt.material:st,qt=Lt.group;Pt.layers.test(at.layers)&&Go(Pt,W,at,zt,Qt,qt)}}function Go(C,W,at,st,j,Tt){C.onBeforeRender(U,W,at,st,j,Tt),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(U,W,at,st,C,Tt),j.transparent===!0&&j.side===Yi&&j.forceSinglePass===!1?(j.side=Ln,j.needsUpdate=!0,U.renderBufferDirect(at,W,st,j,C,Tt),j.side=Oa,j.needsUpdate=!0,U.renderBufferDirect(at,W,st,j,C,Tt),j.side=Yi):U.renderBufferDirect(at,W,st,j,C,Tt),C.onAfterRender(U,W,at,st,j,Tt)}function Ba(C,W,at){W.isScene!==!0&&(W=Xt);const st=$t.get(C),j=S.state.lights,Tt=S.state.shadowsArray,Lt=j.state.version,Pt=xt.getParameters(C,j.state,Tt,W,at),zt=xt.getProgramCacheKey(Pt);let Qt=st.programs;st.environment=C.isMeshStandardMaterial?W.environment:null,st.fog=W.fog,st.envMap=(C.isMeshStandardMaterial?A:z).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",Kt),Qt=new Map,st.programs=Qt);let qt=Qt.get(zt);if(qt!==void 0){if(st.currentProgram===qt&&st.lightsStateVersion===Lt)return Sr(C,Pt),qt}else Pt.uniforms=xt.getUniforms(C),C.onBeforeCompile(Pt,U),qt=xt.acquireProgram(Pt,zt),Qt.set(zt,qt),st.uniforms=Pt.uniforms;const Bt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Bt.clippingPlanes=kt.uniform),Sr(C,Pt),st.needsLights=Fa(C),st.lightsStateVersion=Lt,st.needsLights&&(Bt.ambientLightColor.value=j.state.ambient,Bt.lightProbe.value=j.state.probe,Bt.directionalLights.value=j.state.directional,Bt.directionalLightShadows.value=j.state.directionalShadow,Bt.spotLights.value=j.state.spot,Bt.spotLightShadows.value=j.state.spotShadow,Bt.rectAreaLights.value=j.state.rectArea,Bt.ltc_1.value=j.state.rectAreaLTC1,Bt.ltc_2.value=j.state.rectAreaLTC2,Bt.pointLights.value=j.state.point,Bt.pointLightShadows.value=j.state.pointShadow,Bt.hemisphereLights.value=j.state.hemi,Bt.directionalShadowMap.value=j.state.directionalShadowMap,Bt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Bt.spotShadowMap.value=j.state.spotShadowMap,Bt.spotLightMatrix.value=j.state.spotLightMatrix,Bt.spotLightMap.value=j.state.spotLightMap,Bt.pointShadowMap.value=j.state.pointShadowMap,Bt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=qt,st.uniformsList=null,qt}function Ji(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Eu.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Sr(C,W){const at=$t.get(C);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function $i(C,W,at,st,j){W.isScene!==!0&&(W=Xt),te.resetTextureUnits();const Tt=W.fog,Lt=st.isMeshStandardMaterial?W.environment:null,Pt=B===null?U.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:za,zt=(st.isMeshStandardMaterial?A:z).get(st.envMap||Lt),Qt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,qt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Bt=!!at.morphAttributes.position,se=!!at.morphAttributes.normal,Pe=!!at.morphAttributes.color;let Ie=Na;st.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ie=U.toneMapping);const tn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ge=tn!==void 0?tn.length:0,Ft=$t.get(st),rn=S.state.lights;if(X===!0&&(ut===!0||C!==D)){const Be=C===D&&st.id===Q;kt.setState(st,C,Be)}let xe=!1;st.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==rn.state.version||Ft.outputColorSpace!==Pt||j.isBatchedMesh&&Ft.batching===!1||!j.isBatchedMesh&&Ft.batching===!0||j.isBatchedMesh&&Ft.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ft.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ft.instancing===!1||!j.isInstancedMesh&&Ft.instancing===!0||j.isSkinnedMesh&&Ft.skinning===!1||!j.isSkinnedMesh&&Ft.skinning===!0||j.isInstancedMesh&&Ft.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ft.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ft.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ft.instancingMorph===!1&&j.morphTexture!==null||Ft.envMap!==zt||st.fog===!0&&Ft.fog!==Tt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==kt.numPlanes||Ft.numIntersection!==kt.numIntersection)||Ft.vertexAlphas!==Qt||Ft.vertexTangents!==qt||Ft.morphTargets!==Bt||Ft.morphNormals!==se||Ft.morphColors!==Pe||Ft.toneMapping!==Ie||Ft.morphTargetsCount!==ge)&&(xe=!0):(xe=!0,Ft.__version=st.version);let ke=Ft.currentProgram;xe===!0&&(ke=Ba(st,W,j));let bi=!1,En=!1,ea=!1;const qe=ke.getUniforms(),zn=Ft.uniforms;if(Vt.useProgram(ke.program)&&(bi=!0,En=!0,ea=!0),st.id!==Q&&(Q=st.id,En=!0),bi||D!==C){qe.setValue(F,"projectionMatrix",C.projectionMatrix),qe.setValue(F,"viewMatrix",C.matrixWorldInverse);const Be=qe.map.cameraPosition;Be!==void 0&&Be.setValue(F,At.setFromMatrixPosition(C.matrixWorld)),Te.logarithmicDepthBuffer&&qe.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&qe.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,En=!0,ea=!0)}if(j.isSkinnedMesh){qe.setOptional(F,j,"bindMatrix"),qe.setOptional(F,j,"bindMatrixInverse");const Be=j.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),qe.setValue(F,"boneTexture",Be.boneTexture,te))}j.isBatchedMesh&&(qe.setOptional(F,j,"batchingTexture"),qe.setValue(F,"batchingTexture",j._matricesTexture,te),qe.setOptional(F,j,"batchingIdTexture"),qe.setValue(F,"batchingIdTexture",j._indirectTexture,te),qe.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&qe.setValue(F,"batchingColorTexture",j._colorsTexture,te));const ws=at.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&de.update(j,at,ke),(En||Ft.receiveShadow!==j.receiveShadow)&&(Ft.receiveShadow=j.receiveShadow,qe.setValue(F,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(zn.envMap.value=zt,zn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&W.environment!==null&&(zn.envMapIntensity.value=W.environmentIntensity),En&&(qe.setValue(F,"toneMappingExposure",U.toneMappingExposure),Ft.needsLights&&ta(zn,ea),Tt&&st.fog===!0&&Gt.refreshFogUniforms(zn,Tt),Gt.refreshMaterialUniforms(zn,st,Z,O,S.state.transmissionRenderTarget[C.id]),Eu.upload(F,Ji(Ft),zn,te)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Eu.upload(F,Ji(Ft),zn,te),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&qe.setValue(F,"center",j.center),qe.setValue(F,"modelViewMatrix",j.modelViewMatrix),qe.setValue(F,"normalMatrix",j.normalMatrix),qe.setValue(F,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Be=st.uniformsGroups;for(let Ha=0,Vo=Be.length;Ha<Vo;Ha++){const xr=Be[Ha];be.update(xr,ke),be.bind(xr,ke)}}return ke}function ta(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Fa(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,W,at){$t.get(C.texture).__webglTexture=W,$t.get(C.depthTexture).__webglTexture=at;const st=$t.get(C);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=at===void 0,st.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const at=$t.get(C);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,at=0){B=C,V=W,H=at;let st=!0,j=null,Tt=!1,Lt=!1;if(C){const zt=$t.get(C);if(zt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)te.setupRenderTarget(C);else if(zt.__hasExternalTextures)te.rebindTextures(C,$t.get(C.texture).__webglTexture,$t.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Bt=C.depthTexture;if(zt.__boundDepthTexture!==Bt){if(Bt!==null&&$t.has(Bt)&&(C.width!==Bt.image.width||C.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(C)}}const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Lt=!0);const qt=$t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qt[W])?j=qt[W][at]:j=qt[W],Tt=!0):C.samples>0&&te.useMultisampledRTT(C)===!1?j=$t.get(C).__webglMultisampledFramebuffer:Array.isArray(qt)?j=qt[at]:j=qt,w.copy(C.viewport),G.copy(C.scissor),nt=C.scissorTest}else w.copy(M).multiplyScalar(Z).floor(),G.copy(L).multiplyScalar(Z).floor(),nt=ot;if(Vt.bindFramebuffer(F.FRAMEBUFFER,j)&&st&&Vt.drawBuffers(C,j),Vt.viewport(w),Vt.scissor(G),Vt.setScissorTest(nt),Tt){const zt=$t.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,at)}else if(Lt){const zt=$t.get(C.texture),Qt=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,at||0,Qt)}Q=-1},this.readRenderTargetPixels=function(C,W,at,st,j,Tt,Lt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=$t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt){Vt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const zt=C.texture,Qt=zt.format,qt=zt.type;if(!Te.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-st&&at>=0&&at<=C.height-j&&F.readPixels(W,at,st,j,Wt.convert(Qt),Wt.convert(qt),Tt)}finally{const zt=B!==null?$t.get(B).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,W,at,st,j,Tt,Lt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=$t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Pt=Pt[Lt]),Pt){Vt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const zt=C.texture,Qt=zt.format,qt=zt.type;if(!Te.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-st&&at>=0&&at<=C.height-j){const Bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Bt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(W,at,st,j,Wt.convert(Qt),Wt.convert(qt),0),F.flush();const se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await uM(F,se,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,Bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt)}finally{F.deleteBuffer(Bt),F.deleteSync(se)}return Tt}}finally{const zt=B!==null?$t.get(B).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(C,W=null,at=0){C.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const st=Math.pow(2,-at),j=Math.floor(C.image.width*st),Tt=Math.floor(C.image.height*st),Lt=W!==null?W.x:0,Pt=W!==null?W.y:0;te.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Lt,Pt,j,Tt),Vt.unbindTexture()},this.copyTextureToTexture=function(C,W,at=null,st=null,j=0){C.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,C=arguments[1],W=arguments[2],j=arguments[3]||0,at=null);let Tt,Lt,Pt,zt,Qt,qt;at!==null?(Tt=at.max.x-at.min.x,Lt=at.max.y-at.min.y,Pt=at.min.x,zt=at.min.y):(Tt=C.image.width,Lt=C.image.height,Pt=0,zt=0),st!==null?(Qt=st.x,qt=st.y):(Qt=0,qt=0);const Bt=Wt.convert(W.format),se=Wt.convert(W.type);te.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Pe=F.getParameter(F.UNPACK_ROW_LENGTH),Ie=F.getParameter(F.UNPACK_IMAGE_HEIGHT),tn=F.getParameter(F.UNPACK_SKIP_PIXELS),ge=F.getParameter(F.UNPACK_SKIP_ROWS),Ft=F.getParameter(F.UNPACK_SKIP_IMAGES),rn=C.isCompressedTexture?C.mipmaps[j]:C.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,rn.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rn.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,Qt,qt,Tt,Lt,Bt,se,rn.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,Qt,qt,rn.width,rn.height,Bt,rn.data):F.texSubImage2D(F.TEXTURE_2D,j,Qt,qt,Tt,Lt,Bt,se,rn),F.pixelStorei(F.UNPACK_ROW_LENGTH,Pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie),F.pixelStorei(F.UNPACK_SKIP_PIXELS,tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ge),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft),j===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,at=null,st=null,j=0){C.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,st=arguments[1]||null,C=arguments[2],W=arguments[3],j=arguments[4]||0);let Tt,Lt,Pt,zt,Qt,qt,Bt,se,Pe;const Ie=C.isCompressedTexture?C.mipmaps[j]:C.image;at!==null?(Tt=at.max.x-at.min.x,Lt=at.max.y-at.min.y,Pt=at.max.z-at.min.z,zt=at.min.x,Qt=at.min.y,qt=at.min.z):(Tt=Ie.width,Lt=Ie.height,Pt=Ie.depth,zt=0,Qt=0,qt=0),st!==null?(Bt=st.x,se=st.y,Pe=st.z):(Bt=0,se=0,Pe=0);const tn=Wt.convert(W.format),ge=Wt.convert(W.type);let Ft;if(W.isData3DTexture)te.setTexture3D(W,0),Ft=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)te.setTexture2DArray(W,0),Ft=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const rn=F.getParameter(F.UNPACK_ROW_LENGTH),xe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ke=F.getParameter(F.UNPACK_SKIP_PIXELS),bi=F.getParameter(F.UNPACK_SKIP_ROWS),En=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt),C.isDataTexture||C.isData3DTexture?F.texSubImage3D(Ft,j,Bt,se,Pe,Tt,Lt,Pt,tn,ge,Ie.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Ft,j,Bt,se,Pe,Tt,Lt,Pt,tn,Ie.data):F.texSubImage3D(Ft,j,Bt,se,Pe,Tt,Lt,Pt,tn,ge,Ie),F.pixelStorei(F.UNPACK_ROW_LENGTH,rn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,bi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,En),j===0&&W.generateMipmaps&&F.generateMipmap(Ft),Vt.unbindTexture()},this.initRenderTarget=function(C){$t.get(C).__webglFramebuffer===void 0&&te.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?te.setTextureCube(C,0):C.isData3DTexture?te.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?te.setTexture2DArray(C,0):te.setTexture2D(C,0),Vt.unbindTexture()},this.resetState=function(){V=0,H=0,B=null,Vt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===xd?"display-p3":"srgb",i.unpackColorSpace=Ae.workingColorSpace===Pu?"display-p3":"srgb"}}class y1 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ad extends Ia{constructor(t=1,i=1,r=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],x=[],E=[];let b=0;const R=[],S=r/2;let _=0;P(),d===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new Ti(v,3)),this.setAttribute("normal",new Ti(x,3)),this.setAttribute("uv",new Ti(E,2));function P(){const N=new tt,V=new tt;let H=0;const B=(i-t)/r;for(let Q=0;Q<=c;Q++){const D=[],w=Q/c,G=w*(i-t)+t;for(let nt=0;nt<=l;nt++){const it=nt/l,dt=it*m+p,ht=Math.sin(dt),O=Math.cos(dt);V.x=G*ht,V.y=-w*r+S,V.z=G*O,v.push(V.x,V.y,V.z),N.set(ht,B,O).normalize(),x.push(N.x,N.y,N.z),E.push(it,1-w),D.push(b++)}R.push(D)}for(let Q=0;Q<l;Q++)for(let D=0;D<c;D++){const w=R[D][Q],G=R[D+1][Q],nt=R[D+1][Q+1],it=R[D][Q+1];g.push(w,G,it),g.push(G,nt,it),H+=6}h.addGroup(_,H,0),_+=H}function U(N){const V=b,H=new ve,B=new tt;let Q=0;const D=N===!0?t:i,w=N===!0?1:-1;for(let nt=1;nt<=l;nt++)v.push(0,S*w,0),x.push(0,w,0),E.push(.5,.5),b++;const G=b;for(let nt=0;nt<=l;nt++){const dt=nt/l*m+p,ht=Math.cos(dt),O=Math.sin(dt);B.x=D*O,B.y=S*w,B.z=D*ht,v.push(B.x,B.y,B.z),x.push(0,w,0),H.x=ht*.5+.5,H.y=O*.5*w+.5,E.push(H.x,H.y),b++}for(let nt=0;nt<l;nt++){const it=V+nt,dt=G+nt;N===!0?g.push(dt,dt+1,it):g.push(dt+1,dt,it),Q+=3}h.addGroup(_,Q,N===!0?1:2),_+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ad(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class M1 extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Eh=new Ke,_v=new tt,vv=new tt;class E1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;_v.setFromMatrixPosition(t.matrixWorld),i.position.copy(_v),vv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(vv),i.updateMatrixWorld(),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sv=new Ke,Uo=new tt,Th=new tt;class T1 extends E1{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(t,i=0){const r=this.camera,l=this.matrix,c=t.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Uo.setFromMatrixPosition(t.matrixWorld),r.position.copy(Uo),Th.copy(r.position),Th.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Th),r.updateMatrixWorld(),l.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Sv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sv)}}class A1 extends M1{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new T1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);function b1(){const s=Oo.useRef(null);return Oo.useEffect(()=>{const t=new WebSocket("wss://TON_SERVEUR_WS");t.onopen=()=>{t.send(JSON.stringify({type:"register",role:"desktop"}))};const i=new y1,r=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3),l=new x1({antialias:!0});l.setSize(window.innerWidth,window.innerHeight),s.current.appendChild(l.domElement);const c=new A1(16777215,1);c.position.set(10,10,10),i.add(c);const d=new Ad(.1,.1,3,32),p=new Md({color:65280}),m=new Mi(d,p);m.position.y=1.5,i.add(m),r.position.z=5;const h=()=>{requestAnimationFrame(h),l.render(i,r)};return h(),t.onmessage=g=>{const v=JSON.parse(g.data);if(v.type==="motion"){const{alpha:x,beta:E,gamma:b}=v.payload;m.rotation.x=(E||0)*(Math.PI/180),m.rotation.y=(b||0)*(Math.PI/180),m.rotation.z=(x||0)*(Math.PI/180)}},()=>{t.close(),s.current.removeChild(l.domElement)}},[]),qn.jsx("div",{ref:s})}function R1(){return qn.jsx(cy,{children:qn.jsxs(ly,{children:[qn.jsx(Rh,{path:"/mobile",element:qn.jsx(fy,{})}),qn.jsx(Rh,{path:"/desktop",element:qn.jsx(b1,{})})]})})}xx.createRoot(document.getElementById("root")).render(qn.jsx(hx.StrictMode,{children:qn.jsx(R1,{})}));
