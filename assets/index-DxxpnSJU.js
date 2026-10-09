(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function BM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sd={exports:{}},dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function IM(){if(g_)return dl;g_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return dl.Fragment=t,dl.jsx=i,dl.jsxs=i,dl}var v_;function FM(){return v_||(v_=1,sd.exports=IM()),sd.exports}var rt=FM(),od={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function HM(){if(__)return ye;__=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),M=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=M&&U[M]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function P(U,W,pt){this.props=U,this.context=W,this.refs=x,this.updater=pt||T}P.prototype.isReactComponent={},P.prototype.setState=function(U,W){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,W,"setState")},P.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function N(){}N.prototype=P.prototype;function R(U,W,pt){this.props=U,this.context=W,this.refs=x,this.updater=pt||T}var F=R.prototype=new N;F.constructor=R,S(F,P.prototype),F.isPureReactComponent=!0;var z=Array.isArray;function L(){}var H={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function b(U,W,pt){var ft=pt.ref;return{$$typeof:r,type:U,key:W,ref:ft!==void 0?ft:null,props:pt}}function B(U,W){return b(U.type,W,U.props)}function Z(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function k(U){var W={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(pt){return W[pt]})}var tt=/\/+/g;function lt(U,W){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):W.toString(36)}function q(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(W){U.status==="pending"&&(U.status="fulfilled",U.value=W)},function(W){U.status==="pending"&&(U.status="rejected",U.reason=W)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function it(U,W,pt,ft,xt){var Lt=typeof U;(Lt==="undefined"||Lt==="boolean")&&(U=null);var It=!1;if(U===null)It=!0;else switch(Lt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(U.$$typeof){case r:case t:It=!0;break;case v:return It=U._init,it(It(U._payload),W,pt,ft,xt)}}if(It)return xt=xt(U),It=ft===""?"."+lt(U,0):ft,z(xt)?(pt="",It!=null&&(pt=It.replace(tt,"$&/")+"/"),it(xt,W,pt,"",function(re){return re})):xt!=null&&(Z(xt)&&(xt=B(xt,pt+(xt.key==null||U&&U.key===xt.key?"":(""+xt.key).replace(tt,"$&/")+"/")+It)),W.push(xt)),1;It=0;var Ct=ft===""?".":ft+":";if(z(U))for(var Ut=0;Ut<U.length;Ut++)ft=U[Ut],Lt=Ct+lt(ft,Ut),It+=it(ft,W,pt,Lt,xt);else if(Ut=E(U),typeof Ut=="function")for(U=Ut.call(U),Ut=0;!(ft=U.next()).done;)ft=ft.value,Lt=Ct+lt(ft,Ut++),It+=it(ft,W,pt,Lt,xt);else if(Lt==="object"){if(typeof U.then=="function")return it(q(U),W,pt,ft,xt);throw W=String(U),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return It}function Y(U,W,pt){if(U==null)return U;var ft=[],xt=0;return it(U,ft,"","",function(Lt){return W.call(pt,Lt,xt++)}),ft}function bt(U){if(U._status===-1){var W=U._result,pt=W();pt.then(function(ft){(U._status===0||U._status===-1)&&(U._status=1,U._result=ft,pt.status===void 0&&(pt.status="fulfilled",pt.value=ft))},function(ft){(U._status===0||U._status===-1)&&(U._status=2,U._result=ft,pt.status===void 0&&(pt.status="rejected",pt.reason=ft))}),U._status===-1&&(U._status=0,U._result=pt)}if(U._status===1)return U._result.default;throw U._result}var vt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(U){var W=H.T,pt={};pt.types=W!==null?W.types:null,H.T=pt;try{var ft=U(),xt=H.S;xt!==null&&xt(pt,ft),typeof ft=="object"&&ft!==null&&typeof ft.then=="function"&&ft.then(L,vt)}catch(Lt){vt(Lt)}finally{W!==null&&pt.types!==null&&(W.types=pt.types),H.T=W}}function Dt(U){var W=H.T;if(W!==null){var pt=W.types;pt===null?W.types=[U]:pt.indexOf(U)===-1&&pt.push(U)}else Mt(Dt.bind(null,U))}var fe={map:Y,forEach:function(U,W,pt){Y(U,function(){W.apply(this,arguments)},pt)},count:function(U){var W=0;return Y(U,function(){W++}),W},toArray:function(U){return Y(U,function(W){return W})||[]},only:function(U){if(!Z(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ye.Activity=m,ye.Children=fe,ye.Component=P,ye.Fragment=i,ye.Profiler=l,ye.PureComponent=R,ye.StrictMode=s,ye.Suspense=p,ye.ViewTransition=_,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,ye.__COMPILER_RUNTIME={__proto__:null,c:function(U){return H.H.useMemoCache(U)}},ye.addTransitionType=Dt,ye.cache=function(U){return function(){return U.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(U,W,pt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var ft=S({},U.props),xt=U.key;if(W!=null)for(Lt in W.key!==void 0&&(xt=""+W.key),W)!D.call(W,Lt)||Lt==="key"||Lt==="__self"||Lt==="__source"||Lt==="ref"&&W.ref===void 0||(ft[Lt]=W[Lt]);var Lt=arguments.length-2;if(Lt===1)ft.children=pt;else if(1<Lt){for(var It=Array(Lt),Ct=0;Ct<Lt;Ct++)It[Ct]=arguments[Ct+2];ft.children=It}return b(U.type,xt,ft)},ye.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},ye.createElement=function(U,W,pt){var ft,xt={},Lt=null;if(W!=null)for(ft in W.key!==void 0&&(Lt=""+W.key),W)D.call(W,ft)&&ft!=="key"&&ft!=="__self"&&ft!=="__source"&&(xt[ft]=W[ft]);var It=arguments.length-2;if(It===1)xt.children=pt;else if(1<It){for(var Ct=Array(It),Ut=0;Ut<It;Ut++)Ct[Ut]=arguments[Ut+2];xt.children=Ct}if(U&&U.defaultProps)for(ft in It=U.defaultProps,It)xt[ft]===void 0&&(xt[ft]=It[ft]);return b(U,Lt,xt)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(U){return{$$typeof:d,render:U}},ye.isValidElement=Z,ye.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:bt}},ye.memo=function(U,W){return{$$typeof:g,type:U,compare:W===void 0?null:W}},ye.startTransition=Mt,ye.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},ye.use=function(U){return H.H.use(U)},ye.useActionState=function(U,W,pt){return H.H.useActionState(U,W,pt)},ye.useCallback=function(U,W){return H.H.useCallback(U,W)},ye.useContext=function(U){return H.H.useContext(U)},ye.useDebugValue=function(){},ye.useDeferredValue=function(U,W){return H.H.useDeferredValue(U,W)},ye.useEffect=function(U,W){return H.H.useEffect(U,W)},ye.useEffectEvent=function(U){return H.H.useEffectEvent(U)},ye.useId=function(){return H.H.useId()},ye.useImperativeHandle=function(U,W,pt){return H.H.useImperativeHandle(U,W,pt)},ye.useInsertionEffect=function(U,W){return H.H.useInsertionEffect(U,W)},ye.useLayoutEffect=function(U,W){return H.H.useLayoutEffect(U,W)},ye.useMemo=function(U,W){return H.H.useMemo(U,W)},ye.useOptimistic=function(U,W){return H.H.useOptimistic(U,W)},ye.useReducer=function(U,W,pt){return H.H.useReducer(U,W,pt)},ye.useRef=function(U){return H.H.useRef(U)},ye.useState=function(U){return H.H.useState(U)},ye.useSyncExternalStore=function(U,W,pt){return H.H.useSyncExternalStore(U,W,pt)},ye.useTransition=function(){return H.H.useTransition()},ye.version="19.3.0",ye}var x_;function Kp(){return x_||(x_=1,od.exports=HM()),od.exports}var ut=Kp();const GM=BM(ut);var ld={exports:{}},pl={},ud={exports:{}},cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function VM(){return y_||(y_=1,(function(r){function t(q,it){var Y=q.length;q.push(it);t:for(;0<Y;){var bt=Y-1>>>1,vt=q[bt];if(0<l(vt,it))q[bt]=it,q[Y]=vt,Y=bt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var it=q[0],Y=q.pop();if(Y!==it){q[0]=Y;t:for(var bt=0,vt=q.length,Mt=vt>>>1;bt<Mt;){var Dt=2*(bt+1)-1,fe=q[Dt],U=Dt+1,W=q[U];if(0>l(fe,Y))U<vt&&0>l(W,fe)?(q[bt]=W,q[U]=Y,bt=U):(q[bt]=fe,q[Dt]=Y,bt=Dt);else if(U<vt&&0>l(W,Y))q[bt]=W,q[U]=Y,bt=U;else break t}}return it}function l(q,it){var Y=q.sortIndex-it.sortIndex;return Y!==0?Y:q.id-it.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],g=[],v=1,m=null,_=3,M=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function R(q){for(var it=i(g);it!==null;){if(it.callback===null)s(g);else if(it.startTime<=q)s(g),it.sortIndex=it.expirationTime,t(p,it);else break;it=i(g)}}function F(q){if(T=!1,R(q),!E)if(i(p)!==null)E=!0,z||(z=!0,Z());else{var it=i(g);it!==null&&lt(F,it.startTime-q)}}var z=!1,L=-1,H=5,D=-1;function b(){return S?!0:!(r.unstable_now()-D<H)}function B(){if(S=!1,z){var q=r.unstable_now();D=q;var it=!0;try{t:{E=!1,T&&(T=!1,P(L),L=-1),M=!0;var Y=_;try{e:{for(R(q),m=i(p);m!==null&&!(m.expirationTime>q&&b());){var bt=m.callback;if(typeof bt=="function"){m.callback=null,_=m.priorityLevel;var vt=bt(m.expirationTime<=q);if(q=r.unstable_now(),typeof vt=="function"){m.callback=vt,R(q),it=!0;break e}m===i(p)&&s(p),R(q)}else s(p);m=i(p)}if(m!==null)it=!0;else{var Mt=i(g);Mt!==null&&lt(F,Mt.startTime-q),it=!1}}break t}finally{m=null,_=Y,M=!1}it=void 0}}finally{it?Z():z=!1}}}var Z;if(typeof N=="function")Z=function(){N(B)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,tt=k.port2;k.port1.onmessage=B,Z=function(){tt.postMessage(null)}}else Z=function(){x(B,0)};function lt(q,it){L=x(function(){q(r.unstable_now())},it)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(q){switch(_){case 1:case 2:case 3:var it=3;break;default:it=_}var Y=_;_=it;try{return q()}finally{_=Y}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(q,it){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Y=_;_=q;try{return it()}finally{_=Y}},r.unstable_scheduleCallback=function(q,it,Y){var bt=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?bt+Y:bt):Y=bt,q){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=Y+vt,q={id:v++,callback:it,priorityLevel:q,startTime:Y,expirationTime:vt,sortIndex:-1},Y>bt?(q.sortIndex=Y,t(g,q),i(p)===null&&q===i(g)&&(T?(P(L),L=-1):T=!0,lt(F,Y-bt))):(q.sortIndex=vt,t(p,q),E||M||(E=!0,z||(z=!0,Z()))),q},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(q){var it=_;return function(){var Y=_;_=it;try{return q.apply(this,arguments)}finally{_=Y}}}})(cd)),cd}var S_;function XM(){return S_||(S_=1,ud.exports=VM()),ud.exports}var fd={exports:{}},Xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function kM(){if(M_)return Xn;M_=1;var r=Kp();function t(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:v,containerInfo:m,implementation:_}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xn.browser=function(v){return{$$typeof:u,_reason:v}},Xn.createPortal=function(v,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return d(v,m,null,_)},Xn.flushSync=function(v){var m=p.T,_=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=_,s.d.f()}},Xn.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Xn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Xn.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var _=m.as,M=g(_,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:E,fetchPriority:T}):_==="script"&&s.d.X(v,{crossOrigin:M,integrity:E,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Xn.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=g(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Xn.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,M=g(_,m.crossOrigin);s.d.L(v,_,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Xn.preloadModule=function(v,m){if(typeof v=="string")if(m){var _=g(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Xn.requestFormReset=function(v){s.d.r(v)},Xn.unstable_batchedUpdates=function(v,m){return v(m)},Xn.useFormState=function(v,m,_){return p.H.useFormState(v,m,_)},Xn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Xn.version="19.3.0",Xn}var E_;function qM(){if(E_)return fd.exports;E_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),fd.exports=kM(),fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function YM(){if(T_)return pl;T_=1;var r=XM(),t=Kp(),i=qM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function g(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===o)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,A=c.child;A;){if(A===a){y=!0,a=c,o=f;break}if(A===o){y=!0,o=c,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=c;break}if(A===o){y=!0,o=f,a=c;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function m(e,n,a,o,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&m(e.child,n,a,o,c,f))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=_(e);return a===null||T(n,e,a.child,{foundSelf:!1}),n}function T(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(e,n,a.child,o))return!0;a=a.sibling}return!1}function S(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,P=null;function N(e,n,a){return e===a?!0:e===n?(x=e,!0):!1}function R(e,n,a){return e===a?(P=e,!1):e===n?(P!==null&&(x=e),!0):!1}function F(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function z(e,n,a){for(var o=0,c=e;c;c=a(c))o++;c=0;for(var f=n;f;f=a(f))c++;for(;0<o-c;)e=a(e),o--;for(;0<c-o;)n=a(n),c--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var L=Object.assign,H=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),tt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),bt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Mt=Symbol.for("react.activity"),Dt=Symbol.for("react.legacy_hidden"),fe=Symbol.for("react.memo_cache_sentinel"),U=Symbol.for("react.view_transition"),W=Symbol.for("react.recoverable"),pt=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=pt&&e[pt]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Symbol.for("react.client.reference");function Lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case k:return"Profiler";case Z:return"StrictMode";case it:return"Suspense";case Y:return"SuspenseList";case Mt:return"Activity";case U:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case lt:return e.displayName||"Context";case tt:return(e._context.displayName||"Context")+".Consumer";case q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bt:return n=e.displayName||null,n!==null?n:Lt(e.type)||"Memo";case vt:n=e._payload,e=e._init;try{return Lt(e(n))}catch{}}return null}var It=Array.isArray,Ct=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},G=[],Ve=-1;function ee(e){return{current:e}}function se(e){0>Ve||(e.current=G[Ve],G[Ve]=null,Ve--)}function Pt(e,n){Ve++,G[Ve]=e.current,e.current=n}var ve=ee(null),Xt=ee(null),O=ee(null),C=ee(null);function st(e,n){switch(Pt(O,n),Pt(Xt,e),Pt(ve,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?bv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=bv(n),e=Av(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}se(ve),Pt(ve,e)}function Et(){se(ve),se(Xt),se(O)}function Rt(e){var n=e.memoizedState;n!==null&&(Vs._currentValue=n.memoizedState,Pt(C,e)),n=ve.current;var a=Av(n,e.type);n!==a&&(Pt(Xt,e),Pt(ve,a))}function gt(e){Xt.current===e&&(se(ve),se(Xt)),C.current===e&&(se(C),Vs._currentValue=re)}var Kt,Gt;function kt(e){if(Kt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Kt=n&&n[1]||"",Gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kt+e+Gt}var xe=!1;function Ot(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Qt){var Q=Qt}Reflect.construct(e,[],St)}else{try{St.call()}catch(Qt){Q=Qt}St=!1;try{var ot=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new e}finally{St&&(ot!==void 0?Object.defineProperty(e.prototype,"props",ot):delete e.prototype.props)}}}else{try{throw Error()}catch(Qt){Q=Qt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Qt){if(Qt&&Q&&typeof Qt.stack=="string")return[Qt.stack,Q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var I=y.split(`
`),$=A.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===$.length)for(o=I.length-1,c=$.length-1;1<=o&&0<=c&&I[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==$[c]){var ct=`
`+I[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?kt(a):""}function qt(e,n){switch(e.tag){case 26:case 27:case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return e.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Ot(e.type,!1);case 11:return Ot(e.type.render,!1);case 1:return Ot(e.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function $t(e){try{var n="",a=null;do n+=qt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var te=Object.prototype.hasOwnProperty,Tt=r.unstable_scheduleCallback,zt=r.unstable_cancelCallback,ue=r.unstable_shouldYield,ge=r.unstable_requestPaint,V=r.unstable_now,Ht=r.unstable_getCurrentPriorityLevel,ht=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,jt=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,he=r.unstable_IdlePriority,We=r.log,Je=r.unstable_setDisableYieldValue,wt=null,_t=null;function Ft(e){if(typeof We=="function"&&Je(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(wt,e)}catch{}}var oe=Math.clz32?Math.clz32:Ue,mt=Math.log,Ee=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(mt(e)/Ee|0)|0}var Te=256,Xe=262144,ln=4194304;function hn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tn(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?c=hn(o):(y&=A,y!==0?c=hn(y):a||(a=A&~e,a!==0&&(c=hn(a))))):(A=o&~f,A!==0?c=hn(A):y!==0?c=hn(y):a||(a=o&~e,a!==0&&(c=hn(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function On(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Pn(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-oe(a),c=1<<o;n|=e[o],a&=~c}return n}function ca(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function br(){var e=ln;return ln<<=1,(ln&62914560)===0&&(ln=4194304),e}function Ga(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Wi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yt(e,n,a,o,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,$=e.hiddenUpdates;for(a=y&~a;0<a;){var ct=31-oe(a),St=1<<ct;A[ct]=0,I[ct]=-1;var Q=$[ct];if(Q!==null)for($[ct]=null,ct=0;ct<Q.length;ct++){var ot=Q[ct];ot!==null&&(ot.lane&=-536870913)}a&=~St}o!==0&&$e(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function $e(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-oe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function w(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-oe(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function j(e,n){var a=n&-n;return a=(a&42)!==0?1:at(a),(a&(e.suspendedLanes|n))!==0?0:a}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function K(){var e=Ut.p;return e!==0?e:(e=window.event,e===void 0?32:u_(e.type))}function Nt(e,n){var a=Ut.p;try{return Ut.p=e,n()}finally{Ut.p=a}}var Vt=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Vt,Wt="__reactProps$"+Vt,ie="__reactContainer$"+Vt,de="__reactEvents$"+Vt,ce="__reactListeners$"+Vt,Se="__reactHandles$"+Vt,Me="__reactResources$"+Vt,Ne="__reactMarker$"+Vt,Fe="__reactLoad$"+Vt;function me(e){delete e[Bt],delete e[Wt],delete e[ce],delete e[Se]}function ae(e){var n;if(n=e[Bt])return n;for(var a=e.parentNode;a;){if(n=a[ie]||a[Bt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Xv(e);e!==null;){if(a=e[Bt])return a;e=Xv(e)}return n}e=a,a=e.parentNode}return null}function nn(e){if(e=e[Bt]||e[ie]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Pe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function wn(e){var n=e[Me];return n||(n=e[Me]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[Ne]=!0}function kn(e){e[Fe]=void 0}var Va=new Set,an={};function vn(e,n){bn(e,n),bn(e+"Capture",n)}function bn(e,n){for(an[e]=n,e=0;e<n.length;e++)Va.add(n[e])}var zn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},rs={};function fa(e){return te.call(rs,e)?!0:te.call(Bn,e)?!1:zn.test(e)?rs[e]=!0:(Bn[e]=!0,!1)}var ke=!1;function fm(){var e=ke;return ke=!1,e}function Ul(e,n,a){if(fa(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Nl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function ha(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function ui(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function iy(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pc(e){if(!e._valueTracker){var n=hm(e)?"checked":"value";e._valueTracker=iy(e,n,""+e[n])}}function dm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=hm(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var ay=/[\n"\\]/g;function yi(e){return e.replace(ay,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zc(e,n,a,o,c,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ui(n)):e.value!==""+ui(n)&&(e.value=""+ui(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?y==="number"&&e.value==n?Bc(e,ui(e.value)):Bc(e,ui(n)):a!=null?Bc(e,ui(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ui(A):e.removeAttribute("name")}function pm(e,n,a,o,c,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Pc(e);return}a=a!=null?""+ui(a):"",n=n!=null?""+ui(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Pc(e)}function Bc(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ss(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ui(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mm(e,n,a){if(n!=null&&(n=""+ui(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ui(a):""}function gm(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(It(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ui(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pc(e)}function os(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ry=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vm(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ry.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function _m(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",ke=!0);for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&(vm(e,c,o),ke=!0)}else for(var f in n)n.hasOwnProperty(f)&&vm(e,f,n[f])}function Ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return oy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var Fc=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,us=null;function xm(e){var n=nn(e);if(n&&(e=n.stateNode)){var a=e[Wt]||null;t:switch(e=n.stateNode,n.type){case"input":if(zc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Wt]||null;if(!c)throw Error(s(90));zc(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&dm(o)}break t;case"textarea":mm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ss(e,!!a.multiple,n,!1)}}}var Gc=!1;function ym(e,n,a){if(Gc)return e(n,a);Gc=!0;try{var o=e(n);return o}finally{if(Gc=!1,(ls!==null||us!==null)&&(Lu(),ls&&(n=ls,e=us,us=ls=null,xm(n),e)))for(n=0;n<e.length;n++)xm(e[n])}}function bo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Wt]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(da)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Vc=!1}var Xa=null,Xc=null,Ol=null;function Sm(){if(Ol)return Ol;var e,n=Xc,a=n.length,o,c="value"in Xa?Xa.value:Xa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return Ol=c.slice(e,1<o?1-o:void 0)}function Pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function Mm(){return!1}function jn(e){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?zl:Mm,this.isPropagationStopped=Mm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=jn(ka),Ro=L({},ka,{view:0,detail:0}),ly=jn(Ro),kc,qc,Co,Il=L({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Co&&(Co&&e.type==="mousemove"?(kc=e.screenX-Co.screenX,qc=e.screenY-Co.screenY):qc=kc=0,Co=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:qc}}),Em=jn(Il),uy=L({},Il,{dataTransfer:0}),cy=jn(uy),fy=L({},Ro,{relatedTarget:0}),Yc=jn(fy),hy=L({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),dy=jn(hy),py=L({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),my=jn(py),gy=L({},ka,{data:0}),Tm=jn(gy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xy[e])?!!n[e]:!1}function Wc(){return yy}var Sy=L({},Ro,{key:function(e){if(e.key){var n=vy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?Pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),My=jn(Sy),Ey=L({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=jn(Ey),Ty=L({},ka,{submitter:0}),by=jn(Ty),Ay=L({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),Ry=jn(Ay),Cy=L({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=jn(Cy),Dy=L({},Il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=jn(Dy),Ny=L({},ka,{newState:0,oldState:0,source:0}),Ly=jn(Ny),Oy=[9,13,27,32],jc=da&&"CompositionEvent"in window,wo=null;da&&"documentMode"in document&&(wo=document.documentMode);var Py=da&&"TextEvent"in window&&!wo,Am=da&&(!jc||wo&&8<wo&&11>=wo),Rm=" ",Cm=!1;function wm(e,n){switch(e){case"keyup":return Oy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cs=!1;function zy(e,n){switch(e){case"compositionend":return Dm(n);case"keypress":return n.which!==32?null:(Cm=!0,Rm);case"textInput":return e=n.data,e===Rm&&Cm?null:e;default:return null}}function By(e,n){if(cs)return e==="compositionend"||!jc&&wm(e,n)?(e=Sm(),Ol=Xc=Xa=null,cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Am&&n.locale!=="ko"?null:n.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Iy[e.type]:n==="textarea"}function Nm(e,n,a,o){ls?us?us.push(o):us=[o]:ls=o,n=Fu(n,"onChange"),0<n.length&&(a=new Bl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Do=null,Uo=null;function Fy(e){xv(e,0)}function Fl(e){var n=Pe(e);if(dm(n))return e}function Lm(e,n){if(e==="change")return n}var Om=!1;if(da){var Zc;if(da){var Qc="oninput"in document;if(!Qc){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),Qc=typeof Pm.oninput=="function"}Zc=Qc}else Zc=!1;Om=Zc&&(!document.documentMode||9<document.documentMode)}function zm(){Do&&(Do.detachEvent("onpropertychange",Bm),Uo=Do=null)}function Bm(e){if(e.propertyName==="value"&&Fl(Uo)){var n=[];Nm(n,Uo,e,Hc(e)),ym(Fy,n)}}function Hy(e,n,a){e==="focusin"?(zm(),Do=n,Uo=a,Do.attachEvent("onpropertychange",Bm)):e==="focusout"&&zm()}function Gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(Uo)}function Vy(e,n){if(e==="click")return Fl(n)}function Xy(e,n){if(e==="input"||e==="change")return Fl(n)}function ky(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:ky;function No(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!te.call(n,c)||!ci(e[c],n[c]))return!1}return!0}function Kc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Im(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fm(e,n){var a=Im(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Im(a)}}function Hm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Gm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kc(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kc(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var qy=da&&"documentMode"in document&&11>=document.documentMode,fs=null,$c=null,Lo=null,tf=!1;function Vm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tf||fs==null||fs!==Kc(o)||(o=fs,"selectionStart"in o&&Jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Lo&&No(Lo,o)||(Lo=o,o=Fu($c,"onSelect"),0<o.length&&(n=new Bl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=fs)))}function Ar(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var hs={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionrun:Ar("Transition","TransitionRun"),transitionstart:Ar("Transition","TransitionStart"),transitioncancel:Ar("Transition","TransitionCancel"),transitionend:Ar("Transition","TransitionEnd")},ef={},Xm={};da&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Rr(e){if(ef[e])return ef[e];if(!hs[e])return e;var n=hs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xm)return ef[e]=n[a];return e}var km=Rr("animationend"),qm=Rr("animationiteration"),Ym=Rr("animationstart"),Yy=Rr("transitionrun"),Wy=Rr("transitionstart"),jy=Rr("transitioncancel"),Wm=Rr("transitionend"),jm=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Ui(e,n){jm.set(e,n),vn(n,[e])}var Zy=0;function pa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Pi.identifierPrefix;var a=Zy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Zm(e){if(e==null||typeof e=="string")return e;var n=null,a=Ns;if(a!==null)for(var o=0;o<a.length;o++){var c=e[a[o]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ma(e,n){return e=Zm(e),n=Zm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],ds=0,af=0;function Gl(){for(var e=ds,n=af=ds=0;n<e;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var c=Si[n];Si[n++]=null;var f=Si[n];if(Si[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&Qm(a,c,f)}}function Vl(e,n,a,o){Si[ds++]=e,Si[ds++]=n,Si[ds++]=a,Si[ds++]=o,af|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function rf(e,n,a,o){return Vl(e,n,a,o),Xl(e)}function Cr(e,n){return Vl(e,null,null,n),Xl(e)}function Qm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-oe(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function Xl(e){if(50<el)throw el=0,Nu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ps={};function Qy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,o){return new Qy(e,n,a,o)}function sf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ga(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Km(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function kl(e,n,a,o,c,f){var y=0;if(o=e,typeof o=="function")sf(o)&&(y=1);else if(typeof o=="string")y=TM(e,a,ve.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Mt:return e=ni(31,a,n,c),e.elementType=Mt,e.lanes=f,e;case B:return wr(a.children,c,f,n);case Z:y=8,c|=24;break;case k:return e=ni(12,a,n,c|2),e.elementType=k,e.lanes=f,e;case it:return e=ni(13,a,n,c),e.elementType=it,e.lanes=f,e;case Y:return e=ni(19,a,n,c),e.elementType=Y,e.lanes=f,e;case Dt:case U:return e=c|32,e=ni(30,a,n,e),e.elementType=U,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case lt:y=10;break t;case tt:y=9;break t;case q:y=11;break t;case bt:y=14;break t;case vt:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ni(y,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function wr(e,n,a,o){return e=ni(7,e,o,n),e.lanes=a,e}function of(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Jm(e){var n=ni(18,null,null,0);return n.stateNode=e,n}function lf(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var $m=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=$m.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$t(n)},$m.set(e,n),n)}return{value:e,source:n,stack:$t(n)}}var ms=[],gs=0,ql=null,Oo=0,Ei=[],Ti=0,qa=null,Zi=1,Qi="";function va(e,n){ms[gs++]=Oo,ms[gs++]=ql,ql=e,Oo=n}function tg(e,n,a){Ei[Ti++]=Zi,Ei[Ti++]=Qi,Ei[Ti++]=qa,qa=e;var o=Zi;e=Qi;var c=32-oe(o)-1;o&=~(1<<c),a+=1;var f=32-oe(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Zi=1<<32-oe(n)+c|a<<c|o,Qi=f+e}else Zi=1<<f|a<<c|o,Qi=e}function Yl(e){e.return!==null&&(va(e,1),tg(e,1,0))}function uf(e){for(;e===ql;)ql=ms[--gs],ms[gs]=null,Oo=ms[--gs],ms[gs]=null;for(;e===qa;)qa=Ei[--Ti],Ei[Ti]=null,Qi=Ei[--Ti],Ei[Ti]=null,Zi=Ei[--Ti],Ei[Ti]=null}function eg(e,n){Ei[Ti++]=Zi,Ei[Ti++]=Qi,Ei[Ti++]=qa,Zi=n.id,Qi=n.overflow,qa=e}var Dn=null,sn=null,De=!1,Ya=null,bi=!1,cf=Error(s(519));function Wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(Mi(n,e)),cf}function ng(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Bt]=e,n[Wt]=o,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)Oe(il[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),pm(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),gm(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ev(n.textContent,a)?(o.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),o.onScroll!=null&&Oe("scroll",n),o.onScrollEnd!=null&&Oe("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Wa(e,!0)}function Wl(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Dn=Dn.return}}function vs(e){if(e!==Dn)return!1;if(!De)return Wl(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hh(e.type,e.memoizedProps)),a=!a),a&&sn&&Wa(e),Wl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=Vv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=Vv(e)}else n===27?(n=sn,ur(e.type)?(e=Zh,Zh=null,sn=e):sn=n):sn=Dn?Ri(e.stateNode.nextSibling):null;return!0}function Dr(){sn=Dn=null,De=!1}function ff(){var e=Ya;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),Ya=null),e}function Po(e){Ya===null?Ya=[e]:Ya.push(e)}var hf=ee(null),Ur=null,_a=null;function ja(e,n,a){Pt(hf,n._currentValue),n._currentValue=a}function xa(e){e._currentValue=hf.current,se(hf)}function jl(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function df(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),jl(f.return,a,e),o||(y=null);break t}f=A.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),jl(y,a,e),y=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),jl(c.return,a,e),y=c.child,y=y!==null?y.sibling:null):y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Nr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=c.type;ci(c.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(c===C.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Vs):e=[Vs])}c=c.return}return e!==null&&df(n,e,a,o),n.flags|=262144,e!==null}function Zl(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Lr(e){Ur=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return ig(Ur,e)}function Ql(e,n){return Ur===null&&Lr(e),ig(e,n)}function ig(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(e===null)throw Error(s(308));_a=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _a=_a.next=n;return a}var Ky=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Jy=r.unstable_scheduleCallback,$y=r.unstable_NormalPriority,_n={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new Ky,data:new Map,refCount:0}}function zo(e){e.refCount--,e.refCount===0&&Jy($y,function(){e.controller.abort()})}function ag(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var Bo=null;function tS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Io=null,mf=0,Or=0,_s=null;function eS(e,n){if(Io===null){var a=Io=[];mf=0,Or=Uh(),_s={status:"pending",value:void 0,then:function(o){a.push(o)}}}return mf++,n.then(rg,rg),n}function rg(){if(--mf===0&&(Bo=null,Io!==null)){_s!==null&&(_s.status="fulfilled");var e=Io;Io=null,Or=0,_s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function nS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var sg=Ct.S;Ct.S=function(e,n){if(J0=V(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&eS(e,n),Bo!==null)for(var a=zs;a!==null;)ag(a,Bo),a=a.next;if(a=e.types,a!==null){for(var o=zs;o!==null;)ag(o,a),o=o.next;if(Or!==0){o=Bo,o===null&&(o=Bo=[]);for(var c=0;c<a.length;c++){var f=a[c];o.indexOf(f)===-1&&o.push(f)}}}sg!==null&&sg(e,n)};var Pr=ee(null);function gf(){var e=Pr.current;return e!==null?e:rn.pooledCache}function Kl(e,n){n===null?Pt(Pr,Pr.current):Pt(Pr,n.pool)}function og(){var e=gf();return e===null?null:{parent:_n._currentValue,pool:e}}var xs=Error(s(460)),vf=Error(s(474)),Jl=Error(s(542)),$l={then:function(){}};function lg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ug(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fg(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=rn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fg(e),e}throw Br=n,xs}}function zr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Br=a,xs):a}}var Br=null;function cg(){if(Br===null)throw Error(s(459));var e=Br;return Br=null,e}function fg(e){if(e===xs||e===Jl)throw Error(s(483))}var ys=null,Fo=0;function tu(e){var n=Fo;return Fo+=1,ys===null&&(ys=[]),ug(ys,e,n)}function Za(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function eu(e,n){throw n.$$typeof===H?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function hg(e){function n(J,X){if(e){var et=J.deletions;et===null?(J.deletions=[X],J.flags|=16):et.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key===null?X.set(J.index,J):X.set(J.key,J),J=J.sibling;return X}function c(J,X){return J=ga(J,X),J.index=0,J.sibling=null,J}function f(J,X,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<X?(J.flags|=2,X):et):(J.flags|=134217730,X)):(J.flags|=1048576,X)}function y(J){return e&&J.alternate===null&&(J.flags|=134217730),J}function A(J,X,et,yt){return X===null||X.tag!==6?(X=of(et,J.mode,yt),X.return=J,X):(X=c(X,et),X.return=J,X)}function I(J,X,et,yt){var ne=et.type;return ne===B?(J=ct(J,X,et.props.children,yt,et.key),Za(J,et),J):X!==null&&(X.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===vt&&zr(ne)===X.type)?(X=c(X,et.props),Za(X,et),X.return=J,X):(X=kl(et.type,et.key,et.props,null,J.mode,yt),Za(X,et),X.return=J,X)}function $(J,X,et,yt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=lf(et,J.mode,yt),X.return=J,X):(X=c(X,et.children||[]),X.return=J,X)}function ct(J,X,et,yt,ne){return X===null||X.tag!==7?(X=wr(et,J.mode,yt,ne),X.return=J,X):(X=c(X,et),X.return=J,X)}function St(J,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=of(""+X,J.mode,et),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return et=kl(X.type,X.key,X.props,null,J.mode,et),Za(et,X),et.return=J,et;case b:return X=lf(X,J.mode,et),X.return=J,X;case vt:return X=zr(X),St(J,X,et)}if(It(X)||ft(X))return X=wr(X,J.mode,et,null),X.return=J,X;if(typeof X.then=="function")return St(J,tu(X),et);if(X.$$typeof===lt)return St(J,Ql(J,X),et);eu(J,X)}return null}function Q(J,X,et,yt){var ne=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ne!==null?null:A(J,X,""+et,yt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case D:return et.key===ne?I(J,X,et,yt):null;case b:return et.key===ne?$(J,X,et,yt):null;case vt:return et=zr(et),Q(J,X,et,yt)}if(It(et)||ft(et))return ne!==null?null:ct(J,X,et,yt,null);if(typeof et.then=="function")return Q(J,X,tu(et),yt);if(et.$$typeof===lt)return Q(J,X,Ql(J,et),yt);eu(J,et)}return null}function ot(J,X,et,yt,ne){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return J=J.get(et)||null,A(X,J,""+yt,ne);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case D:return J=J.get(yt.key===null?et:yt.key)||null,I(X,J,yt,ne);case b:return J=J.get(yt.key===null?et:yt.key)||null,$(X,J,yt,ne);case vt:return yt=zr(yt),ot(J,X,et,yt,ne)}if(It(yt)||ft(yt))return J=J.get(et)||null,ct(X,J,yt,ne,null);if(typeof yt.then=="function")return ot(J,X,et,tu(yt),ne);if(yt.$$typeof===lt)return ot(J,X,et,Ql(X,yt),ne);eu(X,yt)}return null}function Qt(J,X,et,yt){for(var ne=null,Be=null,pe=X,_e=X=0,Sn=null;pe!==null&&_e<et.length;_e++){pe.index>_e?(Sn=pe,pe=null):Sn=pe.sibling;var He=Q(J,pe,et[_e],yt);if(He===null){pe===null&&(pe=Sn);break}e&&pe&&He.alternate===null&&n(J,pe),X=f(He,X,_e),Be===null?ne=He:Be.sibling=He,Be=He,pe=Sn}if(_e===et.length)return a(J,pe),De&&va(J,_e),ne;if(pe===null){for(;_e<et.length;_e++)pe=St(J,et[_e],yt),pe!==null&&(X=f(pe,X,_e),Be===null?ne=pe:Be.sibling=pe,Be=pe);return De&&va(J,_e),ne}for(pe=o(pe);_e<et.length;_e++)Sn=ot(pe,J,_e,et[_e],yt),Sn!==null&&(e&&(He=Sn.alternate,He!==null&&pe.delete(He.key===null?_e:He.key)),X=f(Sn,X,_e),Be===null?ne=Sn:Be.sibling=Sn,Be=Sn);return e&&pe.forEach(function(pr){return n(J,pr)}),De&&va(J,_e),ne}function le(J,X,et,yt){if(et==null)throw Error(s(151));for(var ne=null,Be=null,pe=X,_e=X=0,Sn=null,He=et.next();pe!==null&&!He.done;_e++,He=et.next()){pe.index>_e?(Sn=pe,pe=null):Sn=pe.sibling;var pr=Q(J,pe,He.value,yt);if(pr===null){pe===null&&(pe=Sn);break}e&&pe&&pr.alternate===null&&n(J,pe),X=f(pr,X,_e),Be===null?ne=pr:Be.sibling=pr,Be=pr,pe=Sn}if(He.done)return a(J,pe),De&&va(J,_e),ne;if(pe===null){for(;!He.done;_e++,He=et.next())He=St(J,He.value,yt),He!==null&&(X=f(He,X,_e),Be===null?ne=He:Be.sibling=He,Be=He);return De&&va(J,_e),ne}for(pe=o(pe);!He.done;_e++,He=et.next())He=ot(pe,J,_e,He.value,yt),He!==null&&(e&&(Sn=He.alternate,Sn!==null&&pe.delete(Sn.key===null?_e:Sn.key)),X=f(He,X,_e),Be===null?ne=He:Be.sibling=He,Be=He);return e&&pe.forEach(function(zM){return n(J,zM)}),De&&va(J,_e),ne}function Ae(J,X,et,yt){if(typeof et=="object"&&et!==null&&et.type===B&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case D:t:{for(var ne=et.key;X!==null;){if(X.key===ne){if(ne=et.type,ne===B){if(X.tag===7){a(J,X.sibling),yt=c(X,et.props.children),Za(yt,et),yt.return=J,J=yt;break t}}else if(X.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===vt&&zr(ne)===X.type){a(J,X.sibling),yt=c(X,et.props),Za(yt,et),yt.return=J,J=yt;break t}a(J,X);break}else n(J,X);X=X.sibling}et.type===B?(yt=wr(et.props.children,J.mode,yt,et.key),Za(yt,et),yt.return=J,J=yt):(yt=kl(et.type,et.key,et.props,null,J.mode,yt),Za(yt,et),yt.return=J,J=yt)}return y(J);case b:t:{for(ne=et.key;X!==null;){if(X.key===ne)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(J,X.sibling),yt=c(X,et.children||[]),yt.return=J,J=yt;break t}else{a(J,X);break}else n(J,X);X=X.sibling}yt=lf(et,J.mode,yt),yt.return=J,J=yt}return y(J);case vt:return et=zr(et),Ae(J,X,et,yt)}if(It(et))return Qt(J,X,et,yt);if(ft(et)){if(ne=ft(et),typeof ne!="function")throw Error(s(150));return et=ne.call(et),le(J,X,et,yt)}if(typeof et.then=="function")return Ae(J,X,tu(et),yt);if(et.$$typeof===lt)return Ae(J,X,Ql(J,et),yt);eu(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(J,X.sibling),yt=c(X,et),yt.return=J,J=yt):(a(J,X),yt=of(et,J.mode,yt),yt.return=J,J=yt),y(J)):a(J,X)}return function(J,X,et,yt){try{Fo=0;var ne=Ae(J,X,et,yt);return ys=null,ne}catch(pe){if(pe===xs||pe===Jl)throw pe;var Be=ni(29,pe,null,J.mode);return Be.lanes=yt,Be.return=J,Be}finally{}}}var Ir=hg(!0),dg=hg(!1),Qa=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ye&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Xl(e),Qm(e,null,a),n}return Vl(e,o,n,a),Xl(e)}function Ho(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,w(e,a)}}function yf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Sf=!1;function Go(){if(Sf){var e=_s;if(e!==null)throw e}}function Vo(e,n,a,o){Sf=!1;var c=e.updateQueue;Qa=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,$=I.next;I.next=null,y===null?f=$:y.next=$,y=I;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==y&&(A===null?ct.firstBaseUpdate=$:A.next=$,ct.lastBaseUpdate=I))}if(f!==null){var St=c.baseState;y=0,ct=$=I=null,A=f;do{var Q=A.lane&-536870913,ot=Q!==A.lane;if(ot?(ze&Q)===Q:(o&Q)===Q){Q!==0&&Q===Or&&(Sf=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Qt=e,le=A;Q=n;var Ae=a;switch(le.tag){case 1:if(Qt=le.payload,typeof Qt=="function"){St=Qt.call(Ae,St,Q);break t}St=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=le.payload,Q=typeof Qt=="function"?Qt.call(Ae,St,Q):Qt,Q==null)break t;St=L({},St,Q);break t;case 2:Qa=!0}}Q=A.callback,Q!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[Q]:ot.push(Q))}else ot={lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?($=ct=ot,I=St):ct=ct.next=ot,y|=Q;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ct===null&&(I=St),c.baseState=I,c.firstBaseUpdate=$,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),rr|=y,e.lanes=y,e.memoizedState=St}}function pg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function mg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)pg(a[e],n)}var $a=ee(null),nu=ee(0);function gg(e,n){e=Ta,Pt(nu,e),Pt($a,n),Ta=e|n.baseLanes}function Mf(){Pt(nu,Ta),Pt($a,$a.current)}function Ef(){Ta=nu.current,se($a),se(nu)}var Fn=ee(null),qn=null;function tr(e){var n=e.alternate;Pt(Hn,Hn.current&1),Pt(Fn,e),qn===null&&(n===null||$a.current!==null||n.memoizedState!==null)&&(qn=e)}function Tf(e){Pt(Hn,Hn.current),Pt(Fn,e),qn===null&&(qn=e)}function vg(e){e.tag===22?(Pt(Hn,Hn.current),Pt(Fn,e),qn===null&&(qn=e)):er()}function er(){Pt(Hn,Hn.current),Pt(Fn,Fn.current)}function fi(e){se(Fn),qn===e&&(qn=null),se(Hn)}var Hn=ee(0);function Xo(e,n){Pt(Fn,Fn.current),Pt(Hn,n)}function bf(e){se(Hn),se(Fn),qn===e&&(qn=null)}function iu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wh(a)||jh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,be=null,tn=null,xn=null,au=!1,Ss=!1,Fr=!1,ru=0,ko=0,Ms=null,iS=0;function dn(){throw Error(s(321))}function Af(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function Rf(e,n,a,o,c,f){return ya=f,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ct.H=e===null||e.memoizedState===null?t0:e0,Fr=!1,f=a(o,c),Fr=!1,Ss&&(f=xg(n,a,o,c)),_g(e),f}function _g(e){Ct.H=hu;var n=tn!==null&&tn.next!==null;if(ya=0,xn=tn=be=null,au=!1,ko=0,Ms=null,n)throw Error(s(300));e===null||yn||(e=e.dependencies,e!==null&&Zl(e)&&(yn=!0))}function xg(e,n,a,o){be=e;var c=0;do{if(Ss&&(Ms=null),ko=0,Ss=!1,25<=c)throw Error(s(301));if(c+=1,xn=tn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Ct.H=fS,f=n(a,o)}while(Ss);return f}function aS(){var e=Ct.H,n=e.useState()[0];return n=typeof n.then=="function"?qo(n):n,e=e.useState()[0],(tn!==null?tn.memoizedState:null)!==e&&(be.flags|=1024),n}function Cf(){var e=ru!==0;return ru=0,e}function wf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Df(e){if(au){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}au=!1}ya=0,xn=tn=be=null,Ss=!1,ko=ru=0,Ms=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?be.memoizedState=xn=e:xn=xn.next=e,xn}function mn(){if(tn===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=tn.next;var n=xn===null?be.memoizedState:xn.next;if(n!==null)xn=n,tn=e;else{if(e===null)throw be.alternate===null?Error(s(467)):Error(s(310));tn=e,e={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},xn===null?be.memoizedState=xn=e:xn=xn.next=e}return xn}function su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(e){var n=ko;return ko+=1,Ms===null&&(Ms=[]),e=ug(Ms,e,n),n=be,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,Ct.H=n===null||n.memoizedState===null?t0:e0),e}function ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qo(e);if(e.$$typeof===W)return;if(e.$$typeof===lt)return In(e)}throw Error(s(438,String(e)))}function Uf(e){var n=null,a=be.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=be.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=su(),be.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=fe;return n.index++,a}function Sa(e,n){return typeof n=="function"?n(e):n}function lu(e){var n=mn();return Nf(n,tn,e)}function Nf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=y=null,I=null,$=n,ct=!1;do{var St=$.lane&-536870913;if(St!==$.lane?(ze&St)===St:(ya&St)===St){var Q=$.revertLane;if(Q===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),St===Or&&(ct=!0);else if((ya&Q)===Q){$=$.next,Q===Or&&(ct=!0);continue}else St={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=St,y=f):I=I.next=St,be.lanes|=Q,rr|=Q;St=$.action,Fr&&a(f,St),f=$.hasEagerState?$.eagerState:a(f,St)}else Q={lane:St,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=Q,y=f):I=I.next=Q,be.lanes|=St,rr|=St;$=$.next}while($!==null&&$!==n);if(I===null?y=f:I.next=A,!ci(f,e.memoizedState)&&(yn=!0,ct&&(a=_s,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=I,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Lf(e){var n=mn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);ci(f,n.memoizedState)||(yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function yg(e,n,a){var o=be,c=mn(),f=De;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ci((tn||c).memoizedState,a);if(y&&(c.memoizedState=a,yn=!0),c=c.queue,zf(Eg.bind(null,o,c,e),[e]),e=c.getSnapshot!==n||y||xn!==null&&(xn.memoizedState.tag&1)!==0,Es(e?9:8,{destroy:void 0},Mg.bind(null,o,c,a,n),null),e){if(o.flags|=2048,rn===null)throw Error(s(349));f||(ya&127)!==0||Sg(o,n,a)}return a}function Sg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=be.updateQueue,n===null?(n=su(),be.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Mg(e,n,a,o){n.value=a,n.getSnapshot=o,Tg(n)&&bg(e)}function Eg(e,n,a){return a(function(){Tg(n)&&bg(e)})}function Tg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function bg(e){var n=Cr(e,2);n!==null&&si(n,e,2)}function Of(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),Fr){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},n}function Ag(e,n,a,o){return e.baseState=a,Nf(e,tn,typeof o=="function"?o:Sa)}function rS(e,n,a,o,c){if(fu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};Ct.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Rg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Rg(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=Ct.T,y={};y.types=f!==null?f.types:null,Ct.T=y;try{var A=a(c,o),I=Ct.S;I!==null&&I(y,A),Cg(e,n,A)}catch($){Pf(e,n,$)}finally{f!==null&&y.types!==null&&(f.types=y.types),Ct.T=f}}else try{f=a(c,o),Cg(e,n,f)}catch($){Pf(e,n,$)}}function Cg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wg(e,n,o)},function(o){return Pf(e,n,o)}):wg(e,n,a)}function wg(e,n,a){n.status="fulfilled",n.value=a,Dg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Rg(e,a)))}function Pf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Dg(n),n=n.next;while(n!==o)}e.action=null}function Dg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ug(e,n){return n}function Ng(e,n){if(De){var a=rn.formState;if(a!==null){t:{var o=be;if(De){if(sn){e:{for(var c=sn,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){sn=Ri(c.nextSibling),o=c.data==="F!";break t}}Wa(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ug,lastRenderedState:n},a.queue=o,a=Kg.bind(null,be,o),o.dispatch=a,o=Of(!1),f=Gf.bind(null,be,!1,o.queue),o=Zn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=rS.bind(null,be,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Lg(e){var n=mn();return Og(n,tn,e)}function Og(e,n,a){if(n=Nf(e,n,Ug)[0],e=lu(Sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=qo(n)}catch(y){throw y===xs?Jl:y}else o=n;n=mn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(be.flags|=2048,Es(9,{destroy:void 0},sS.bind(null,c,a),null)),[o,f,e]}function sS(e,n){e.action=n}function Pg(e){var n=mn(),a=tn;if(a!==null)return Og(n,a,e);mn(),n=n.memoizedState,a=mn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Es(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=be.updateQueue,n===null&&(n=su(),be.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function zg(){return mn().memoizedState}function uu(e,n,a,o){var c=Zn();be.flags|=e,c.memoizedState=Es(1|n,{destroy:void 0},a,o===void 0?null:o)}function cu(e,n,a,o){var c=mn();o=o===void 0?null:o;var f=c.memoizedState.inst;tn!==null&&o!==null&&Af(o,tn.memoizedState.deps)?c.memoizedState=Es(n,f,a,o):(be.flags|=e,c.memoizedState=Es(1|n,f,a,o))}function Bg(e,n){uu(8390656,8,e,n)}function zf(e,n){cu(2048,8,e,n)}function oS(e){be.flags|=4;var n=be.updateQueue;if(n===null)n=su(),be.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ig(e){var n=mn().memoizedState;return oS({ref:n,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Fg(e,n){return cu(4,2,e,n)}function Hg(e,n){return cu(4,4,e,n)}function Gg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vg(e,n,a){a=a!=null?a.concat([e]):null,cu(4,4,Gg.bind(null,n,e),a)}function Bf(){}function Xg(e,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Af(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function kg(e,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Af(n,o[1]))return o[0];if(o=e(),Fr){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o}function If(e,n,a){return a===void 0||(ya&1073741824)!==0&&(ze&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=tv(),be.lanes|=e,rr|=e,a)}function qg(e,n,a,o){return ci(a,n)?a:$a.current!==null?(e=If(e,a,o),ci(e,n)||(yn=!0),e):(ya&106)===0||(ya&1073741824)!==0&&(ze&261930)===0?(yn=!0,e.memoizedState=a):(e=tv(),be.lanes|=e,rr|=e,n)}function Yg(e,n,a,o,c){var f=Ut.p;Ut.p=f!==0&&8>f?f:8;var y=Ct.T,A={};A.types=y!==null?y.types:null,Ct.T=A,Gf(e,!1,n,a);try{var I=c(),$=Ct.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=nS(I,o);Yo(e,n,ct,mi(e))}else Yo(e,n,o,mi(e))}catch(St){Yo(e,n,{then:function(){},status:"rejected",reason:St},mi())}finally{Ut.p=f,y!==null&&A.types!==null&&(y.types=A.types),Ct.T=y}}function lS(){}function Ff(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Wg(e).queue;Yg(e,c,n,re,a===null?lS:function(){return jg(e),a(o)})}function Wg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jg(e){var n=Wg(e);n.next===null&&(n=e.alternate.memoizedState),Yo(e,n.next.queue,{},mi())}function Hf(){return In(Vs)}function Zg(){return mn().memoizedState}function Qg(){return mn().memoizedState}function uS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();e=Ka(a);var o=Ja(n,e,a);o!==null&&(si(o,n,a),Ho(o,n,a)),n={cache:pf()},e.payload=n;return}n=n.return}}function cS(e,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(e)?Jg(n,a):(a=rf(e,n,a,o),a!==null&&(si(a,e,o),$g(a,n,o)))}function Kg(e,n,a){var o=mi();Yo(e,n,a,o)}function Yo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fu(e))Jg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(c.hasEagerState=!0,c.eagerState=A,ci(A,y))return Vl(e,n,c,0),rn===null&&Gl(),!1}catch{}finally{}if(a=rf(e,n,c,o),a!==null)return si(a,e,o),$g(a,n,o),!0}return!1}function Gf(e,n,a,o){if(o={lane:2,revertLane:Uh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},fu(e)){if(n)throw Error(s(479))}else n=rf(e,a,o,2),n!==null&&si(n,e,2)}function fu(e){var n=e.alternate;return e===be||n!==null&&n===be}function Jg(e,n){Ss=au=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function $g(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,w(e,a)}}var hu={readContext:In,use:ou,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn,useEffectEvent:dn},t0={readContext:In,use:ou,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:In,useEffect:Bg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,uu(4194308,4,Gg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return uu(4194308,4,e,n)},useInsertionEffect:function(e,n){uu(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(Fr){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var c=a(n);if(Fr){Ft(!0);try{a(n)}finally{Ft(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=cS.bind(null,be,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Of(e);var n=e.queue,a=Kg.bind(null,be,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Bf,useDeferredValue:function(e,n){var a=Zn();return If(a,e,n)},useTransition:function(){var e=Of(!1);return e=Yg.bind(null,be,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=be,c=Zn();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),rn===null)throw Error(s(349));(ze&127)!==0||Sg(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Bg(Eg.bind(null,o,f,e),[e]),o.flags|=2048,Es(9,{destroy:void 0},Mg.bind(null,o,f,a,n),null),a},useId:function(){var e=Zn(),n=rn.identifierPrefix;if(De){var a=Qi,o=Zi;a=(o&~(1<<32-oe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ru++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=iS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Hf,useFormState:Ng,useActionState:Ng,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Gf.bind(null,be,!0,a),a.dispatch=n,[e,n]},useMemoCache:Uf,useCacheRefresh:function(){return Zn().memoizedState=uS.bind(null,be)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},e0={readContext:In,use:ou,useCallback:Xg,useContext:In,useEffect:zf,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:lu,useRef:zg,useState:function(){return lu(Sa)},useDebugValue:Bf,useDeferredValue:function(e,n){var a=mn();return qg(a,tn.memoizedState,e,n)},useTransition:function(){var e=lu(Sa)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:qo(e),n]},useSyncExternalStore:yg,useId:Zg,useHostTransitionStatus:Hf,useFormState:Lg,useActionState:Lg,useOptimistic:function(e,n){var a=mn();return Ag(a,tn,e,n)},useMemoCache:Uf,useCacheRefresh:Qg,useEffectEvent:Ig},fS={readContext:In,use:ou,useCallback:Xg,useContext:In,useEffect:zf,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:Lf,useRef:zg,useState:function(){return Lf(Sa)},useDebugValue:Bf,useDeferredValue:function(e,n){var a=mn();return tn===null?If(a,e,n):qg(a,tn.memoizedState,e,n)},useTransition:function(){var e=Lf(Sa)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:qo(e),n]},useSyncExternalStore:yg,useId:Zg,useHostTransitionStatus:Hf,useFormState:Pg,useActionState:Pg,useOptimistic:function(e,n){var a=mn();return tn!==null?Ag(a,tn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:Qg,useEffectEvent:Ig};function Vf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:L({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=mi(),c=Ka(o);c.payload=n,a!=null&&(c.callback=a),n=Ja(e,c,o),n!==null&&(si(n,e,o),Ho(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=mi(),c=Ka(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ja(e,c,o),n!==null&&(si(n,e,o),Ho(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mi(),o=Ka(a);o.tag=2,n!=null&&(o.callback=n),n=Ja(e,o,a),n!==null&&(si(n,e,a),Ho(n,e,a))}};function n0(e,n,a,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!No(a,o)||!No(c,f):!0}function i0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Xf.enqueueReplaceState(n,n.state,null)}function Hr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=L({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function a0(e){Hl(e)}function r0(e){console.error(e)}function s0(e){Hl(e)}function du(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function o0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function kf(e,n,a){return a=Ka(a),a.tag=3,a.payload={element:null},a.callback=function(){du(e,n)},a}function l0(e){return e=Ka(e),e.tag=3,e}function u0(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){o0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){o0(n,a,o),typeof c!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function hS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Nr(n,a,c,!0),a=Fn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return qn===null?Ou():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===$l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ch(e,o,c)),!1;case 22:return a.flags|=65536,o===$l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ch(e,o,c)),!1}throw Error(s(435,a.tag))}return Ch(e,o,c),Ou(),!1}if(De)return n=Fn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==cf&&(e=Error(s(422),{cause:o}),Po(Mi(e,a)))):(o!==cf&&(n=Error(s(423),{cause:o}),Po(Mi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Mi(o,a),c=kf(e.stateNode,o,c),yf(e,c),pn!==4&&(pn=2)),!1;var f=Error(s(520),{cause:o});if(f=Mi(f,a),tl===null?tl=[f]:tl.push(f),pn!==4&&(pn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=kf(a.stateNode,o,e),yf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sr===null||!sr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=l0(c),u0(c,e,a,o),yf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var qf=Error(s(461)),yn=!1;function An(e,n,a,o){n.child=e===null?dg(n,null,a,o):Ir(n,e.child,a,o)}function c0(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return Lr(n),o=Rf(e,n,a,y,f,c),A=Cf(),e!==null&&!yn?(wf(e,n,c),Ma(e,n,c)):(De&&A&&Yl(n),n.flags|=1,An(e,n,o,c),n.child)}function f0(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!sf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,h0(e,n,f,o,c)):(e=kl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!$f(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(y,o)&&e.ref===n.ref)return Ma(e,n,c)}return n.flags|=1,e=ga(f,o),e.ref=n.ref,e.return=n,n.child=e}function h0(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(No(f,o)&&e.ref===n.ref)if(yn=!1,n.pendingProps=o=f,$f(e,c))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,Ma(e,n,c)}return Yf(e,n,a,o,c)}function d0(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return p0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kl(n,f!==null?f.cachePool:null),f!==null?gg(n,f):Mf(),vg(n);else return o=n.lanes=536870912,p0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Kl(n,f.cachePool),gg(n,f),er(),n.memoizedState=null):(e!==null&&Kl(n,null),Mf(),er());return An(e,n,c,a),n.child}function Wo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function p0(e,n,a,o,c){var f=gf();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Kl(n,null),Mf(),vg(n),e!==null&&Nr(e,n,o,!0),n.childLanes=c,null}function pu(e,n){return n=mu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function m0(e,n,a){return Ir(n,e.child,null,a),e=pu(n,n.pendingProps),e.flags|=2,fi(n),n.memoizedState=null,e}function dS(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(De){if(o.mode==="hidden")return e=pu(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Wo(null,e);if(Tf(n),(e=sn)?(e=Gv(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=Jm(e),a.return=n,n.child=a,Dn=n,sn=null)):e=null,e===null)throw Wa(n);return n.lanes=536870912,null}return pu(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Tf(n),c)if(n.flags&256)n.flags&=-257,n=m0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(yn||Nr(e,n,a,!1),c=(a&e.childLanes)!==0,yn||c){if($a.current===null){if(o=rn,o!==null&&(y=j(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Cr(e,y),si(o,e,y),qf;Ou()}n=m0(e,n,a)}else e=f.treeContext,sn=Ri(y.nextSibling),Dn=n,De=!0,Ya=null,bi=!1,e!==null&&eg(n,e),n=pu(n,o),n.flags|=134221824;return n}return e=ga(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ts(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Yf(e,n,a,o,c){return Lr(n),a=Rf(e,n,a,o,void 0,c),o=Cf(),e!==null&&!yn?(wf(e,n,c),Ma(e,n,c)):(De&&o&&Yl(n),n.flags|=1,An(e,n,a,c),n.child)}function g0(e,n,a,o,c,f){return Lr(n),n.updateQueue=null,a=xg(n,o,a,c),_g(e),o=Cf(),e!==null&&!yn?(wf(e,n,f),Ma(e,n,f)):(De&&o&&Yl(n),n.flags|=1,An(e,n,a,f),n.child)}function v0(e,n,a,o,c){if(Lr(n),n.stateNode===null){var f=ps,y=a.contextType;typeof y=="object"&&y!==null&&(f=In(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},_f(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?In(y):ps,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Vf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Xf.enqueueReplaceState(f,f.state,null),Vo(n,o,f,c),Go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=Hr(a,A);f.props=I;var $=f.context,ct=a.contextType;y=ps,typeof ct=="object"&&ct!==null&&(y=In(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==y)&&i0(n,f,o,y),Qa=!1;var Q=n.memoizedState;f.state=Q,Vo(n,o,f,c),Go(),$=n.memoizedState,A||Q!==$||Qa?(typeof St=="function"&&(Vf(n,a,St,o),$=n.memoizedState),(I=Qa||n0(n,a,I,o,Q,$,y))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=y,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,xf(e,n),y=n.memoizedProps,ct=Hr(a,y),f.props=ct,St=n.pendingProps,Q=f.context,$=a.contextType,I=ps,typeof $=="object"&&$!==null&&(I=In($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==St||Q!==I)&&i0(n,f,o,I),Qa=!1,Q=n.memoizedState,f.state=Q,Vo(n,o,f,c),Go();var ot=n.memoizedState;y!==St||Q!==ot||Qa||e!==null&&e.dependencies!==null&&Zl(e.dependencies)?(typeof A=="function"&&(Vf(n,a,A,o),ot=n.memoizedState),(ct=Qa||n0(n,a,ct,o,Q,ot,I)||e!==null&&e.dependencies!==null&&Zl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=I,o=ct):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ts(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ir(n,e.child,null,c),n.child=Ir(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ma(e,n,c),e}function _0(e,n,a,o){return Dr(),n.flags|=256,An(e,n,a,o),n.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:og()}}function Zf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function x0(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Hn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(c?tr(n):er(),(e=sn)?(e=Gv(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:qa!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=Jm(e),a.return=n,n.child=a,Dn=n,sn=null)):e=null,e===null)throw Wa(n);return jh(e)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,c?(er(),c=n.mode,f=mu({mode:"hidden",children:f},c),o=wr(o,c,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=jf(a),o.childLanes=Zf(e,y,a),n.memoizedState=Wf,Wo(null,o)):(tr(n),Qf(n,f))}var A=e.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return pS(e,n,f,y,o,I,A,a)}return c?(er(),c=o.fallback,f=n.mode,A=e.child,I=A.sibling,o=ga(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&1206910976,I!==null?c=ga(I,c):(c=wr(c,f,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,Wo(null,o),o=n.child,c=e.child.memoizedState,c===null?c=jf(a):(f=c.cachePool,f!==null?(A=_n._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=og(),c={baseLanes:c.baseLanes|a,cachePool:f}),o.memoizedState=c,o.childLanes=Zf(e,y,a),n.memoizedState=Wf,Wo(e.child,o)):(tr(n),a=e.child,e=a.sibling,a=ga(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Qf(e,n){return n=mu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function mu(e,n){return e=ni(22,e,null,n),e.lanes=0,e}function gu(e,n,a){return Ir(n,e.child,null,a),e=Qf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pS(e,n,a,o,c,f,y,A){if(a)return n.flags&256?(tr(n),n.flags&=-257,gu(e,n,A)):n.memoizedState!==null?(er(),n.child=e.child,n.flags|=128,null):(er(),f=c.fallback,y=n.mode,c=mu({mode:"visible",children:c.children},y),f=wr(f,y,A,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Ir(n,e.child,null,A),c=n.child,c.memoizedState=jf(A),c.childLanes=Zf(e,o,A),n.memoizedState=Wf,Wo(null,c));if(tr(n),jh(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var I=o.dgst;return o=I,o!==""&&(c=Error(s(419)),c.stack="",c.digest=o,Po({value:c,source:null,stack:null})),gu(e,n,A)}if(yn||Nr(e,n,A,!1),o=(A&e.childLanes)!==0,yn||o){if($a.current!==null)return gu(e,n,A);if(o=rn,o!==null&&(c=j(o,A),c!==0&&c!==y.retryLane))throw y.retryLane=c,Cr(e,c),si(o,e,c),qf;return Wh(f)||Ou(),gu(e,n,A)}return Wh(f)?(n.flags|=192,n.child=e.child,null):(e=y.treeContext,sn=Ri(f.nextSibling),Dn=n,De=!0,Ya=null,bi=!1,e!==null&&eg(n,e),n=Qf(n,c.children),n.flags|=134221824,n)}function y0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),jl(e.return,n,a)}function S0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&iu(a)===null&&(n=e),e=e.sibling}return n}function vu(e,n,a,o,c,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function Kf(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Jf(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var y=Hn.current;if(n.flags&128)return Xo(n,y),null;var A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Xo(n,y),c==="backwards"&&e!==null?(Kf(e),An(e,n,o,a),Kf(e)):An(e,n,o,a),o=De?Oo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&y0(e,a,n);else if(e.tag===19)y0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=S0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Kf(n)),vu(n,!0,c,null,f,o);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&iu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}vu(n,!0,a,null,f,o);break;case"together":vu(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=S0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),vu(n,!1,c,a,f,o)}return n.child}function M0(e,n,a){var o=n.pendingProps;return ja(n,n.type,o.value),An(e,n,o.children,a),n.child}function Ma(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),rr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ga(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ga(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $f(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Zl(e)))}function mS(e,n,a){switch(n.tag){case 3:st(n,n.stateNode.containerInfo),ja(n,_n,e.memoizedState.cache),Dr();break;case 27:case 5:Rt(n);break;case 4:st(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return tr(n),n.flags|=128,null;o=Nr(e,n,a,!1);var c=n.child.childLanes;return o||(a&c)!==0?x0(e,n,a):(tr(n),e=Ma(e,n,a),e!==null?e.sibling:null)}tr(n);break;case 19:if(n.flags&128)return Jf(e,n,a);if(c=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Nr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Jf(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xo(n,Hn.current),o)break;return null;case 22:return n.lanes=0,d0(e,n,a,n.pendingProps);case 24:ja(n,_n,e.memoizedState.cache)}return Ma(e,n,a)}function E0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!$f(e,a)&&(n.flags&128)===0)return yn=!1,mS(e,n,a);yn=(e.flags&131072)!==0}else yn=!1,De&&(n.flags&1048576)!==0&&tg(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=zr(n.elementType),n.type=e,typeof e=="function")sf(e)?(o=Hr(e,o),n.tag=1,n=v0(null,n,e,o,a)):(n.tag=0,n=Yf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===q){n.tag=11,n=c0(null,n,e,o,a);break t}else if(c===bt){n.tag=14,n=f0(null,n,e,o,a);break t}else if(c===lt){n.tag=10,n.type=e,n=M0(null,n,a);break t}}throw n=Lt(e)||e,Error(s(306,n,""))}}return n;case 0:return Yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Hr(o,n.pendingProps),v0(e,n,o,c,a);case 3:t:{if(st(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,xf(e,n),Vo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ja(n,_n,o),o!==f.cache&&df(n,[_n],a,!0),Go(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=_0(e,n,o,a);break t}else if(o!==c){c=Mi(Error(s(424)),n),Po(c),n=_0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(sn=Ri(e.firstChild),Dn=n,De=!0,Ya=null,bi=!0,a=dg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Dr(),o===c){n=Ma(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Ts(e,n),e===null?(a=jv(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(n.stateNode=Rv(n.type,n.pendingProps,O.current,n)):n.memoizedState=jv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Rt(n),e===null&&De&&(o=n.stateNode=kv(n.type,n.pendingProps,O.current),Dn=n,bi=!0,c=sn,ur(n.type)?(Zh=c,sn=Ri(o.firstChild)):sn=c),An(e,n,n.pendingProps.children,a),Ts(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((c=o=sn)&&(o=uM(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Dn=n,sn=Ri(o.firstChild),bi=!1,c=!0):c=!1),c||Wa(n)),Rt(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Hh(c,f)?o=null:y!==null&&Hh(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Rf(e,n,aS,null,null,a),Vs._currentValue=c),Ts(e,n),An(e,n,o,a),n.child;case 6:return e===null&&De&&((e=a=sn)&&(a=cM(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Dn=n,sn=null,e=!0):e=!1),e||Wa(n)),null;case 13:return x0(e,n,a);case 4:return st(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ir(n,null,o,a):An(e,n,o,a),n.child;case 11:return c0(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Ts(e,n),An(e,n,o,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return M0(e,n,a);case 9:return c=n.type._context,o=n.pendingProps.children,Lr(n),c=In(c),o=o(c),n.flags|=1,An(e,n,o,a),n.child;case 14:return f0(e,n,n.type,n.pendingProps,a);case 15:return h0(e,n,n.type,n.pendingProps,a);case 19:return Jf(e,n,a);case 31:return dS(e,n,a);case 22:return d0(e,n,a,n.pendingProps);case 24:return Lr(n),o=In(_n),e===null?(c=gf(),c===null&&(c=rn,f=pf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},_f(n),ja(n,_n,c)):((e.lanes&a)!==0&&(xf(e,n),Vo(n,null,null,a),Go()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ja(n,_n,o)):(o=f.cache,ja(n,_n,o),o!==c.cache&&df(n,[_n],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:De&&Yl(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Ts(e,n),An(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ea(e){e.flags|=4}function th(e,n,a,o,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?Jv(n,o):Jv(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(av())e.flags|=8192;else throw Br=$l,vf}else e.flags&=-16777217}function T0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$v(n))if(av())e.flags|=8192;else throw Br=$l,vf}function _u(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?br():536870912,e.lanes|=n,ws|=n)}function jo(e,n){if(!De)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function on(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&1206910976,o|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function gS(e,n,a){var o=n.pendingProps;switch(uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(n),null;case 1:return on(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),xa(_n),Et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(vs(n)?Ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ff())),on(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ea(n),f!==null?(on(n),T0(n,f)):(on(n),th(n,c,null,o,a))):f?f!==e.memoizedState?(Ea(n),on(n),T0(n,f)):(on(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ea(n),on(n),th(n,c,e,o,a)),null;case 27:if(gt(n),a=O.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return on(n),n.subtreeFlags&=-33554433,null}e=ve.current,vs(n)?ng(n):(e=kv(c,o,a),n.stateNode=e,Ea(n))}return on(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return on(n),n.subtreeFlags&=-33554433,null}if(f=ve.current,vs(n))ng(n);else{var y=rl(O.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(c,{is:o.is}):y.createElement(c)}}f[Bt]=n,f[Wt]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Vn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ea(n)}}return on(n),n.subtreeFlags&=-33554433,th(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=O.current,vs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Bt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ev(e.nodeValue,a)),e||Wa(n,!0)}else e=rl(e).createTextNode(o),e[Bt]=n,n.stateNode=e}return on(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=vs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Bt]=n}else Dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),e=!1}else a=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return on(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=vs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Bt]=n}else Dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),c=!1}else c=ff(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),_u(n,n.updateQueue),on(n),null);case 4:return Et(),e===null&&Ph(n.stateNode.containerInfo),n.flags|=67108864,on(n),null;case 10:return xa(n.type),on(n),null;case 19:if(bf(n),o=n.memoizedState,o===null)return on(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)jo(o,!1);else{if(pn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=iu(e),f!==null){for(n.flags|=128,jo(o,!1),e=f.updateQueue,n.updateQueue=e,_u(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Km(a,e),a=a.sibling;return Xo(n,Hn.current&1|2),De&&va(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&V()>Du&&(n.flags|=128,c=!0,jo(o,!1),n.lanes=4194304)}else{if(!c)if(e=iu(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,_u(n,e),jo(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!De)return on(n),null}else 2*V()-o.renderingStartTime>Du&&a!==536870912&&(n.flags|=128,c=!0,jo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){e=o.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=V(),e.sibling=null,f=Hn.current,f=c?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||De?Xo(n,f):(a=f,Pt(Fn,n),Pt(Hn,a),qn===null&&(qn=n)),De&&va(n,o.treeForkCount),e}return on(n),null;case 22:case 23:return fi(n),Ef(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(on(n),n.subtreeFlags&6&&(n.flags|=8192)):on(n),a=n.updateQueue,a!==null&&_u(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&se(Pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(_n),on(n),null;case 25:return null;case 30:return n.flags|=33554432,on(n),null}throw Error(s(156,n.tag))}function vS(e,n){switch(uf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xa(_n),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(s(340));Dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return bf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Et(),null;case 10:return xa(n.type),null;case 22:case 23:return fi(n),Ef(),e!==null&&se(Pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return xa(_n),null;case 25:return null;default:return null}}function b0(e,n){switch(uf(n),n.tag){case 3:xa(_n),Et();break;case 26:case 27:case 5:gt(n);break;case 4:Et();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:bf(n);break;case 10:xa(n.type);break;case 22:case 23:fi(n),Ef(),e!==null&&se(Pr);break;case 24:xa(_n)}}function Zo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(A){Qe(n,n.return,A)}}function nr(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,c=n;var I=a,$=A;try{$()}catch(ct){Qe(c,I,ct)}}}o=o.next}while(o!==f)}}catch(ct){Qe(n,n.return,ct)}}function A0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{mg(n,a)}catch(o){Qe(e,e.return,o)}}}function R0(e,n,a){a.props=Hr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Qe(e,n,o)}}function Ki(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var c=e.stateNode,f=pa(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=Ov(f)),o=c.ref;break;case 7:if(e.stateNode===null){var y=new gi(e);m(e.child,!1,oM,y,void 0,void 0),e.stateNode=y}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(A){Qe(e,n,A)}}function Gn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Qe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Qe(e,n,c)}else a.current=null}function xu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Hv(e.stateNode,n[a])}function C0(e){for(var n=e.return;n!==null&&(nh(n)&&Hv(e.stateNode,n.stateNode),!eh(n));)n=n.return}function Qo(e){for(var n=e.return;n!==null&&(nh(n)&&lM(e.stateNode,n.stateNode),!eh(n));)n=n.return}function eh(e){return e.tag===5||e.tag===3||e.tag===27}function nh(e){return e&&e.tag===7&&e.stateNode!==null}function ih(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Qe(e,e.return,c)}}function ah(e,n,a){try{var o=e.stateNode;XS(o,e.type,a,n),o[Wt]=n}catch(c){Qe(e,e.return,c)}}function w0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function rh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||w0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sh(e,n,a,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),xu(e,o),ke=!0;else if(c!==4&&(c===27&&(xu(e,o),o=null,ur(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(sh(e,n,a,o),e=e.sibling;e!==null;)sh(e,n,a,o),e=e.sibling}function yu(e,n,a,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),xu(e,o),ke=!0;else if(c!==4&&(c===27&&(xu(e,o),o=null,ur(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(yu(e,n,a,o),e=e.sibling;e!==null;)yu(e,n,a,o),e=e.sibling}function D0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Vn(n,o,a),n[Bt]=e,n[Wt]=a}catch(f){Qe(e,e.return,f)}}var Su=!1,hi=null;function U0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Su=!0)}var Ji=null;function N0(){var e=Ji;return Ji=null,e}var ii=0;function bs(e,n,a,o,c){return ii=0,L0(e.child,n,a,o,c)}function L0(e,n,a,o,c){for(var f=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(o!==null){var A=Xh(y);o.push(A),A.view&&(f=!0)}else f||Xh(y).view&&(f=!0);Su=!0,Nv(y,ii===0?n:n+"_"+ii,a),ii++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||L0(e.child,n,a,o,c)&&(f=!0));e=e.sibling}return f}function $i(e,n){for(;e!==null;)e.tag===5?Lv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||$i(e.child,n)),e=e.sibling}function Mu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Mu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ma(n.default,n.share),n!=="none"&&(bs(e,a,n,null,!1)||$i(e.child,!1))}e=e.sibling}}function oh(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,c=pa(o,a),f=ma(o.default,a.paired?o.share:o.enter);f!=="none"?bs(e,c,f,null,!1)?(Mu(e),a.paired||n||Ls(e,o.onEnter)):$i(e.child,!1):Mu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)oh(e,n),e=e.sibling;else Mu(e)}function lh(e){if(hi!==null&&hi.size!==0){var n=hi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var c=n.get(o);if(c!==void 0){var f=ma(a.default,a.share);if(f!=="none"&&(bs(e,o,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Ls(e,a.onShare)):$i(e.child,!1)),n.delete(o),n.size===0)break}}}lh(e)}e=e.sibling}}}function uh(e){if(e.tag===30){var n=e.memoizedProps,a=pa(n,e.stateNode),o=hi!==null?hi.get(a):void 0,c=ma(n.default,o!==void 0?n.share:n.exit);c!=="none"&&(bs(e,a,c,null,!1)?o!==void 0?(c=e.stateNode,o.paired=c,c.paired=o,hi.delete(a),Ls(e,n.onShare)):Ls(e,n.onExit):$i(e.child,!1)),hi!==null&&lh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)uh(e),e=e.sibling;else hi!==null&&lh(e)}function O0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=pa(n,e.stateNode);n=ma(n.default,n.update),e.flags&=-5,n!=="none"&&bs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&O0(e);e=e.sibling}}function ch(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,$i(e.child,!1))}ch(e)}e=e.sibling}}function Eu(e){if(e.tag===30)e.stateNode.paired=null,$i(e.child,!1),ch(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Eu(e),e=e.sibling;else ch(e)}function P0(e){for(e=e.child;e!==null;)e.tag===30?$i(e.child,!1):(e.subtreeFlags&33554432)!==0&&P0(e),e=e.sibling}function fh(e,n,a,o,c,f,y){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&ii<f.length){var $=f[ii],ct=Xh(I);($.view||ct.view)&&(A=!0);var St;if(St=(e.flags&4)===0)if(ct.clip)St=!0;else{St=$.rect;var Q=ct.rect;St=St.y!==Q.y||St.x!==Q.x||St.height!==Q.height||St.width!==Q.width}St&&(e.flags|=4),ct.abs?ct=!$.abs:($=$.rect,ct=ct.rect,ct=$.height!==ct.height||$.width!==ct.width),ct&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Nv(I,ii===0?a:a+"_"+ii,c),A&&(e.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(I,ii===0?o:o+"_"+ii,n.memoizedProps)),ii++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?e.flags|=n.flags&32:fh(e,n.child,a,o,c,f,y)&&(A=!0));n=n.sibling}return A}function z0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,c=pa(a,o),f=ma(a.default,a.update),y;y=e.memoizedState,e.memoizedState=null,o=e;var A=e.child;ii=0,c=fh(o,A,c,c,f,y,!1),(e.flags&4)!==0&&c&&Ls(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&z0(e);e=e.sibling}}var Un=!1,je=!1,ta=!1,hh=!1,B0=typeof WeakSet=="function"?WeakSet:Set,Nn=null,ea=!1,Ko=!1,Tu=!1,dh=!1;function _S(e,n,a){if(e=e.containerInfo,Ih=Xs,e=Gm(e),Jc(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{o.nodeType,y.nodeType}catch{o=null;break t}var A=0,I=-1,$=-1,ct=0,St=0,Q=e,ot=null;e:for(;;){for(var Qt;Q!==o||f!==0&&Q.nodeType!==3||(I=A+f),Q!==y||c!==0&&Q.nodeType!==3||($=A+c),Q.nodeType===3&&(A+=Q.nodeValue.length),(Qt=Q.firstChild)!==null;)ot=Q,Q=Qt;for(;;){if(Q===e)break e;if(ot===o&&++ct===f&&(I=A),ot===y&&++St===c&&($=A),(Qt=Q.nextSibling)!==null)break;Q=ot,ot=Q.parentNode}Q=Qt}o=I===-1||$===-1?null:{start:I,end:$}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fh={focusedElem:e,selectionRange:o},Xs=!1,a=(a&335544064)===a,Nn=n,n=a?9270:1024;Nn!==null;){if(e=Nn,a&&(o=e.deletions,o!==null))for(f=0;f<o.length;f++)a&&uh(o[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&U0(e),bu(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&uh(o),bu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&U0(e),bu(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Nn=o):(a&&O0(e),bu(a))}}hi=null}function bu(e){for(;Nn!==null;){var n=Nn,a=e,o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&o!==null){a=void 0,c=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var y=Hr(n.type,c);a=f.getSnapshotBeforeUpdate(y,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){Qe(n,n.return,A)}}break;case 3:if((c&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)Yh(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Yh(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=pa(o.memoizedProps,o.stateNode),c=n.memoizedProps,c=ma(c.default,c.update),c!=="none"&&bs(o,a,c,o.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,Nn=o;break}Nn=n.return}}function I0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&Zo(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Qe(a,a.return,y)}else{var c=Hr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Qe(a,a.return,y)}}o&64&&A0(a),o&512&&Ki(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mg(e,n)}catch(y){Qe(a,a.return,y)}}break;case 27:n===null&&o&4&&D0(a);case 26:case 5:na(e,a),n===null&&o&4&&ih(a),o&512&&Ki(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&V0(e,a);break;case 13:na(e,a),o&4&&X0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=DS.bind(null,a),fM(e,a))));break;case 22:if(o=a.memoizedState!==null||Un,!o){var f=n!==null&&n.memoizedState!==null||je;n=Un,c=je,Un=o,(je=f)&&!c?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Oi(e,a,o)):na(e,a),Un=n,je=c}break;case 30:na(e,a),o&512&&Ki(a,a.return);break;case 7:o&512&&Ki(a,a.return);default:na(e,a)}}function ph(e,n){for(e=e.child;e!==null;)F0(e,n),e=e.sibling}function F0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(I){Qe(e,e.return,I)}mh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ke=!0}catch(I){Qe(e,e.return,I)}break;case 18:try{var A=e.stateNode;n?Uv(A,!0):Uv(e.stateNode,!1)}catch(I){Qe(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&ph(e,n);break;default:ph(e,n)}}function mh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,o=n;switch(a.tag){case 4:F0(a,o);break t;case 22:a.memoizedState===null&&mh(a,o);break t;default:mh(a,o)}}e=e.sibling}}function H0(e){var n=e.alternate;n!==null&&(e.alternate=null,H0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&me(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cn=null,ai=!1;function Ni(e,n,a){for(a=a.child;a!==null;)G0(e,n,a),a=a.sibling}function G0(e,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(wt,a)}catch{}switch(a.tag){case 26:je||Gn(a,n),Ni(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!je&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||Gn(a,n),Qo(a);var o=cn,c=ai;ur(a.type)&&(cn=a.stateNode,ai=!1),Ni(e,n,a),qv(a.stateNode,a.type,a.memoizedProps),cn=o,ai=c;break;case 5:je||Gn(a,n),Qo(a);case 6:if(a.tag===6&&Qo(a),o=cn,c=ai,cn=null,Ni(e,n,a),cn=o,ai=c,cn!==null)if(ai)try{(cn.nodeType===9?cn.body:cn.nodeName==="HTML"?cn.ownerDocument.body:cn).removeChild(a.stateNode),ke=!0}catch(f){Qe(a,n,f)}else try{cn.removeChild(a.stateNode),ke=!0}catch(f){Qe(a,n,f)}break;case 18:cn!==null&&(ai?(e=cn,Dv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ks(e)):Dv(cn,a.stateNode));break;case 4:o=cn,c=ai,cn=a.stateNode.containerInfo,ai=!0,Ni(e,n,a),cn=o,ai=c;break;case 0:case 11:case 14:case 15:nr(2,a,n),je||nr(4,a,n),Ni(e,n,a);break;case 1:je||(Gn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&R0(a,n,o)),Ni(e,n,a);break;case 21:Ni(e,n,a);break;case 22:je=(o=je)||a.memoizedState!==null,Ni(e,n,a),je=o;break;case 30:Gn(a,n),Ni(e,n,a);break;case 7:je||Gn(a,n),Ni(e,n,a);break;default:Ni(e,n,a)}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ks(e)}catch(a){Qe(n,n.return,a)}}}function X0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ks(e)}catch(a){Qe(n,n.return,a)}}function xS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new B0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new B0),n;default:throw Error(s(435,e.tag))}}function Au(e,n){var a=xS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=US.bind(null,e,o);o.then(c,c)}})}function Qn(e,n,a){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],y=e,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(ur(I.type)){cn=I.stateNode,ai=!1;break t}break;case 5:cn=I.stateNode,ai=!1;break t;case 3:case 4:cn=I.stateNode.containerInfo,ai=!0;break t}I=I.return}if(cn===null)throw Error(s(160));G0(y,A,f),cn=null,ai=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,e,a),n=n.sibling}var Li=null;function k0(e,n,a){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var y=o[f];y.ref.impl=y.nextImpl}Qn(n,e,a),Kn(e),c&4&&(nr(3,e,e.return),Zo(3,e),nr(5,e,e.return));break;case 1:Qn(n,e,a),Kn(e),c&512&&(je||o===null||Gn(o,o.return)),c&64&&Un&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Li,Qn(n,e,a),Kn(e),c&512&&(je||o===null||Gn(o,o.return)),c&4)if(c=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(Un)e.stateNode=Rv(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":o=c.getElementsByTagName("title")[0],(!o||o[Ne]||o[Bt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=c.createElement(n),c.head.insertBefore(o,c.querySelector("head > title"))),Vn(o,n,a),o[Bt]=e,un(o),n=o;break t;case"link":if(f=Kv("link","href",c).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}o=c.createElement(n),Vn(o,n,a),c.head.appendChild(o);break;case"meta":if(f=Kv("meta","content",c).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}o=c.createElement(n),Vn(o,n,a),c.head.appendChild(o);break;default:throw Error(s(468,n))}o[Bt]=e,un(o),n=o}e.stateNode=n}else Un||$h(f,e.type,e.stateNode);else e.stateNode=Qv(f,a,e.memoizedProps);else c!==a?(c===null?(n=o.stateNode,n===null||je||n.parentNode.removeChild(n)):c.count--,a===null?Un||$h(f,e.type,e.stateNode):Qv(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ah(e,e.memoizedProps,o.memoizedProps);break;case 27:Qn(n,e,a),Kn(e),c&512&&(je||o===null||Gn(o,o.return)),o!==null&&c&4&&ah(e,e.memoizedProps,o.memoizedProps);break;case 5:if(f=ta,ta=!1,Qn(n,e,a),ta=f,Kn(e),c&512&&(je||o===null||Gn(o,o.return)),e.flags&32){n=e.stateNode;try{os(n,""),ke=!0}catch(ct){Qe(e,e.return,ct)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,ah(e,n,o!==null?o.memoizedProps:n)),c&1024&&(hh=!0);break;case 6:if(Qn(n,e,a),Kn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ke=!0}catch(ct){Qe(e,e.return,ct)}}break;case 3:if(ke=!1,Gu=null,f=Li,Li=sl(n.containerInfo),Qn(n,e,a),Li=f,Kn(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ks(n.containerInfo)}catch(ct){Qe(e,e.return,ct)}hh&&(hh=!1,q0(e)),ke=!1;break;case 4:c=ta,ta=Un,o=fm(),f=Li,Li=sl(e.stateNode.containerInfo),Qn(n,e,a),Kn(e),Li=f,ke&&Ko&&(Tu=!0),ke=o,ta=c;break;case 12:Qn(n,e,a),Kn(e);break;case 31:Qn(n,e,a),Kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Au(e,n)));break;case 13:Qn(n,e,a),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(wu=V()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Au(e,n)));break;case 22:f=e.memoizedState!==null,y=o!==null&&o.memoizedState!==null;var A=Un,I=je,$=ta;Un=A||f,ta=$||f,je=I||y,Qn(n,e,a),je=I,ta=$,Un=A,Kn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||y||Un||je||(n=y||je,a=Un,o=je,Un=f||Un,je=n,ir(e,2),Un=a,je=o),!f&&ta||ph(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Au(e,a))));break;case 19:Qn(n,e,a),Kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Au(e,n)));break;case 30:c&512&&(je||o===null||Gn(o,o.return)),c=fm(),f=Ko,y=(a&335544064)===a,A=e.memoizedProps,Ko=y&&ma(A.default,A.update)!=="none",Qn(n,e,a),Kn(e),y&&o!==null&&ke&&(e.flags|=4),Ko=f,ke=c;break;case 21:break;case 7:c&512&&(je||o===null||Gn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:Qn(n,e,a),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(w0(o)){a=o;break}o=o.return}o=null;for(var c=e.return;c!==null;){if(nh(c)){var f=c.stateNode;o===null?o=[f]:o.push(f)}if(eh(c))break;c=c.return}var y=o;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,I=rh(e);yu(e,I,A,y);break;case 5:var $=a.stateNode;a.flags&32&&(os($,""),a.flags&=-33);var ct=rh(e);yu(e,ct,$,y);break;case 3:case 4:var St=a.stateNode.containerInfo,Q=rh(e);sh(e,Q,St,y);break;default:throw Error(s(161))}}catch(ot){Qe(e,e.return,ot)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function q0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;q0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xs=!0,n.reset(),Xs=!1),e=e.sibling}}function As(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Y0(n,e),n=n.sibling;else z0(n)}function Y0(e,n){var a=e.alternate;if(a===null)oh(e,!1);else switch(e.tag){case 3:if(dh=ea=!1,N0(),As(n,e),!ea&&!Tu){if(e=Ji,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var c=e[o+1];Lv(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),dh=!0}Ji=null;break;case 5:As(n,e);break;case 4:o=ea,ea=!1,As(n,e),ea&&(Tu=!0),ea=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?oh(e,!1):As(n,e));break;case 30:o=ea,c=N0(),ea=!1,As(n,e),ea&&(e.flags|=4);var f=e.memoizedProps,y=e.stateNode;n=pa(f,y),y=pa(a.memoizedProps,y);var A=ma(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ii=0,n=fh(e,a,n,y,A,f,!0),ii!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Ls(e,e.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ea=(e.flags&32)!==0?!0:o;break;default:As(n,e)}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(e,n.alternate,n),n=n.sibling}function ir(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:nr(4,a,a.return),ir(a,o);break;case 1:Gn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&R0(a,a.return,c),ir(a,o);break;case 27:(o&2)!==0&&qv(a.stateNode,a.type,a.memoizedProps);case 5:Gn(a,a.return),a.tag!==5&&a.tag!==27||Qo(a),ir(a,o);break;case 6:Qo(a);break;case 26:Gn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||je||c.parentNode.removeChild(c),ir(a,o);break;case 22:a.memoizedState===null&&ir(a,o);break;case 30:Gn(a,a.return),ir(a,o);break;case 7:Gn(a,a.return);default:ir(a,o)}e=e.sibling}}function Oi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,y=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Oi(c,f,a),Zo(4,f);break;case 1:if(Oi(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ct){Qe(o,o.return,ct)}if(o=f,c=o.updateQueue,c!==null){var I=o.stateNode;try{var $=c.shared.hiddenCallbacks;if($!==null)for(c.shared.hiddenCallbacks=null,c=0;c<$.length;c++)pg($[c],I)}catch(ct){Qe(o,o.return,ct)}}A&&y&64&&A0(f),Ki(f,f.return);break;case 27:(a&2)!==0&&D0(f);case 5:f.tag!==5&&f.tag!==27||C0(f),Oi(c,f,a),A&&o===null&&y&4&&ih(f),Ki(f,f.return);break;case 6:C0(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||Un||$h(sl(I.ownerDocument),f.type,I),Oi(c,f,a),A&&o===null&&y&4&&ih(f),Ki(f,f.return);break;case 12:Oi(c,f,a);break;case 31:Oi(c,f,a),A&&y&4&&V0(c,f);break;case 13:Oi(c,f,a),A&&y&4&&X0(c,f);break;case 22:f.memoizedState===null&&Oi(c,f,a),Ki(f,f.return);break;case 30:Oi(c,f,a),Ki(f,f.return);break;case 7:Ki(f,f.return);default:Oi(c,f,a)}n=n.sibling}}function gh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zo(a))}function vh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zo(e))}function Ai(e,n,a,o){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)W0(e,n,a,o),n=n.sibling;else c&&P0(n)}function W0(e,n,a,o){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Eu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),f&2048&&Zo(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),c&&dh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&zo(f)));break;case 12:if(f&2048){Ai(e,n,a,o),f=n.stateNode;try{var y=n.memoizedProps,A=y.id,I=y.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch($){Qe(n,n.return,$)}}else Ai(e,n,a,o);break;case 31:Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:y=n.stateNode,A=n.alternate,n.memoizedState!==null?(c&&A!==null&&A.memoizedState===null&&Eu(A),y._visibility&2?Ai(e,n,a,o):Jo(e,n)):(c&&A!==null&&A.memoizedState!==null&&Eu(n),y._visibility&2?Ai(e,n,a,o):(y._visibility|=2,Rs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&gh(A,n);break;case 24:Ai(e,n,a,o),f&2048&&vh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&($i(f.child,!0),$i(n.child,!0))),Ai(e,n,a,o);break;default:Ai(e,n,a,o)}}function Rs(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,A=a,I=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:Rs(f,y,A,I,c),Zo(8,y);break;case 23:break;case 22:var ct=y.stateNode;y.memoizedState!==null?ct._visibility&2?Rs(f,y,A,I,c):Jo(f,y):(ct._visibility|=2,Rs(f,y,A,I,c)),c&&$&2048&&gh(y.alternate,y);break;case 24:Rs(f,y,A,I,c),c&&$&2048&&vh(y.alternate,y);break;default:Rs(f,y,A,I,c)}n=n.sibling}}function Jo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:Jo(a,o),c&2048&&gh(o.alternate,o);break;case 24:Jo(a,o),c&2048&&vh(o.alternate,o);break;default:Jo(a,o)}n=n.sibling}}var Gr=8192;function Vr(e,n,a){if(e.subtreeFlags&Gr)for(e=e.child;e!==null;)j0(e,n,a),e=e.sibling}function j0(e,n,a){switch(e.tag){case 26:Vr(e,n,a),e.flags&Gr&&(e.memoizedState!==null?bM(a,Li,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&e_(a,e)));break;case 5:Vr(e,n,a),e.flags&Gr&&(e=e.stateNode,(n&335544128)===n&&e_(a,e));break;case 3:case 4:var o=Li;Li=sl(e.stateNode.containerInfo),Vr(e,n,a),Li=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Gr,Gr=16777216,Vr(e,n,a),Gr=o):Vr(e,n,a));break;case 30:if((e.flags&Gr)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var c=e.stateNode;c.paired=null,hi===null&&(hi=new Map),hi.set(o,c)}Vr(e,n,a);break;default:Vr(e,n,a)}}function Z0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function $o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,K0(o,e)}Z0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Q0(e),e=e.sibling}function Q0(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&nr(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ru(e)):$o(e);break;default:$o(e)}}function Ru(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,K0(o,e)}Z0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:nr(8,n,n.return),Ru(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ru(n));break;default:Ru(n)}e=e.sibling}}function K0(e,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:nr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:zo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Nn=o;else t:for(a=e;Nn!==null;){o=Nn;var c=o.sibling,f=o.return;if(H0(o),o===a){Nn=null;break t}if(c!==null){c.return=f,Nn=c;break t}Nn=f}}}var yS={getCacheForType:function(e){var n=In(_n),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return In(_n).controller.signal}},SS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,rn=null,Le=null,ze=0,Ze=0,di=null,ar=!1,Cs=!1,_h=!1,Ta=0,pn=0,rr=0,Xr=0,Cu=0,pi=0,ws=0,tl=null,ri=null,xh=!1,wu=0,J0=0,Du=1/0,Uu=null,sr=null,fn=0,Pi=null,kr=null,ia=0,yh=0,Sh=null,$0=null,Ds=null,Us=null,Ns=null,el=0,Nu=null;function mi(){return(Ye&2)!==0&&ze!==0?ze&-ze:Ct.T!==null?Uh():K()}function tv(){if(pi===0)if((ze&536870912)===0||De){var e=Xe;Xe<<=1,(Xe&3932160)===0&&(Xe=262144),pi=e}else pi=536870912;return e=Fn.current,e!==null&&(e.flags|=32),pi}function Ls(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=Ov(pa(e.memoizedProps,a))),Us===null&&(Us=[]),Us.push(n.bind(null,o))}}function si(e,n,a){(e===rn&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)&&(Os(e,0),or(e,ze,pi,!1)),Wi(e,a),((Ye&2)===0||e!==rn)&&(e===rn&&((Ye&2)===0&&(Xr|=a),pn===4&&or(e,ze,pi,!1)),aa(e))}function ev(e,n,a){if((Ye&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||On(e,n),c=o?TS(e,n):Eh(e,n,!0),f=o;do{if(c===0){Cs&&!o&&or(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!MS(a)){c=Eh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;c=tl;var I=A.current.memoizedState.isDehydrated;if(I&&(Os(A,y).flags|=256),y=Eh(A,y,!1),y!==2&&y!==6){if(_h&&!I){A.errorRecoveryDisabledLanes|=f,Xr|=f,c=4;break t}f=ri,ri=c,f!==null&&(ri===null?ri=f:ri.push.apply(ri,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Os(e,0),or(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:or(o,n,pi,!ar);break t;case 2:ri=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=wu+300-V(),10<c)){if(or(o,n,pi,!ar),Tn(o,0,!0)!==0)break t;ia=n,o.timeoutHandle=Vh(nv.bind(null,o,a,ri,Uu,xh,n,pi,Xr,ws,ar,f,"Throttled",-0,0),c);break t}nv(o,a,ri,Uu,xh,n,pi,Xr,ws,ar,f,null,-0,0)}}break}while(!0);aa(e)}function nv(e,n,a,o,c,f,y,A,I,$,ct,St,Q,ot){e.timeoutHandle=-1;var Qt=n.subtreeFlags,le=(f&335544064)===f;if(St=null,(le||Qt&8192||(Qt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},hi=null,j0(n,f,St),le&&(Qt=St,le=e.containerInfo,le=(le.nodeType===9?le:le.ownerDocument).__reactViewTransition,le!=null&&(Qt.count++,Qt.waitingForViewTransition=!0,Qt=ul.bind(Qt),le.finished.then(Qt,Qt))),Qt=(f&62914560)===f?wu-V():(f&4194048)===f?J0-V():0,Qt=AM(St,Qt),Qt!==null)){ia=f,e.cancelPendingCommit=Qt(cv.bind(null,e,n,f,a,o,c,y,A,I,$,ct,St,null,Q,ot)),or(e,f,y,!$);return}cv(e,n,f,a,o,c,y,A,I,$,ct,St)}function MS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ci(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function or(e,n,a,o){n=Pn(e,n),n&=~Cu,n&=~Xr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-oe(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&$e(e,a,n)}function Lu(){return(Ye&6)===0?(nl(0),!1):!0}function Mh(){if(Le!==null){if(Ze===0)var e=Le.return;else e=Le,_a=Ur=null,Df(e),ys=null,Fo=0,e=Le;for(;e!==null;)b0(e.alternate,e),e=e.return;Le=null}}function Os(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,YS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,Mh(),rn=e,Le=a=ga(e.current,null),ze=n,Ze=0,di=null,ar=!1,Cs=On(e,n),_h=!1,ws=pi=Cu=Xr=rr=pn=0,ri=tl=null,xh=!1,Ta=Pn(e,n),Gl(),a}function iv(e,n){be=null,Ct.H=hu,n===xs||n===Jl?(n=cg(),Ze=3):n===vf?(n=cg(),Ze=4):Ze=n===qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Le===null&&(pn=1,du(e,Mi(n,e.current)))}function av(){var e=Fn.current;return e===null?!0:(ze&4194048)===ze?qn===null:(ze&62914560)===ze||(ze&536870912)!==0?e===qn:!1}function rv(){var e=Ct.H;return Ct.H=hu,e===null?hu:e}function sv(){var e=Ct.A;return Ct.A=yS,e}function Ou(){pn=4,ar||(ze&4194048)!==ze&&Fn.current!==null||(Cs=!0),(rr&134217727)===0&&(Xr&134217727)===0||rn===null||or(rn,ze,pi,!1)}function Eh(e,n,a){var o=Ye;Ye|=2;var c=rv(),f=sv();(rn!==e||ze!==n)&&(Uu=null,Os(e,n)),n=!1;var y=pn;t:do try{if(Ze!==0&&Le!==null){var A=Le,I=di;switch(Ze){case 8:Mh(),y=6;break t;case 3:case 2:case 9:case 6:Fn.current===null&&(n=!0);var $=Ze;if(Ze=0,di=null,Ps(e,A,I,$),a&&Cs){y=0;break t}break;default:$=Ze,Ze=0,di=null,Ps(e,A,I,$)}}ES(),y=pn;break}catch(ct){iv(e,ct)}while(!0);return n&&e.shellSuspendCounter++,_a=Ur=null,Ye=o,Ct.H=c,Ct.A=f,Le===null&&(rn=null,ze=0,Gl()),y}function ES(){for(;Le!==null;)ov(Le)}function TS(e,n){var a=Ye;Ye|=2;var o=rv(),c=sv();rn!==e||ze!==n?(Uu=null,Du=V()+500,Os(e,n)):Cs=On(e,n);t:do try{if(Ze!==0&&Le!==null){n=Le;var f=di;e:switch(Ze){case 1:Ze=0,di=null,Ps(e,n,f,1);break;case 2:case 9:if(lg(f)){Ze=0,di=null,lv(n);break}n=function(){Ze!==2&&Ze!==9||rn!==e||(Ze=7),aa(e)},f.then(n,n);break t;case 3:Ze=7;break t;case 4:Ze=5;break t;case 7:lg(f)?(Ze=0,di=null,lv(n)):(Ze=0,di=null,Ps(e,n,f,7));break;case 5:var y=null;switch(Le.tag){case 26:y=Le.memoizedState;case 5:case 27:var A=Le;if(y?$v(y):A.stateNode.complete){Ze=0,di=null;var I=A.sibling;if(I!==null)Le=I;else{var $=A.return;$!==null?(Le=$,Pu($)):Le=null}break e}}Ze=0,di=null,Ps(e,n,f,5);break;case 6:Ze=0,di=null,Ps(e,n,f,6);break;case 8:Mh(),pn=6;break t;default:throw Error(s(462))}}bS();break}catch(ct){iv(e,ct)}while(!0);return _a=Ur=null,Ct.H=o,Ct.A=c,Ye=a,Le!==null?0:(rn=null,ze=0,Gl(),pn)}function bS(){for(;Le!==null&&!ue();)ov(Le)}function ov(e){var n=E0(e.alternate,e,Ta);e.memoizedProps=e.pendingProps,n===null?Pu(e):Le=n}function lv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=g0(a,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=g0(a,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:Df(n);var o=n;o===Dn&&(De?(Wl(o),o.tag===5&&o.stateNode!=null&&(sn=o.stateNode)):(Wl(o),De=!0));default:b0(a,n),n=Le=Km(n,Ta),n=E0(a,n,Ta)}e.memoizedProps=e.pendingProps,n===null?Pu(e):Le=n}function Ps(e,n,a,o){_a=Ur=null,Df(n),ys=null,Fo=0;var c=n.return;try{if(hS(e,c,n,a,ze)){pn=1,du(e,Mi(a,e.current)),Le=null;return}}catch(f){if(c!==null)throw Le=c,f;pn=1,du(e,Mi(a,e.current)),Le=null;return}n.flags&32768?(De||o===1?e=!0:Cs||(ze&536870912)!==0?e=!1:(ar=e=!0,(o===2||o===9||o===3||o===6)&&(o=Fn.current,o!==null&&o.tag===13&&(o.flags|=16384))),uv(n,e)):Pu(n)}function Pu(e){var n=e;do{if((n.flags&32768)!==0){uv(n,ar);return}e=n.return;var a=gS(n.alternate,n,Ta);if(a!==null){Le=a;return}if(n=n.sibling,n!==null){Le=n;return}Le=n=e}while(n!==null);pn===0&&(pn=5)}function uv(e,n){do{var a=vS(e.alternate,e);if(a!==null){a.flags&=32767,Le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Le=e;return}Le=e=a}while(e!==null);pn=6,Le=null}function cv(e,n,a,o,c,f,y,A,I,$,ct,St){e.cancelPendingCommit=null;do zu();while(fn!==0);if((Ye&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===rn&&(Le=rn=null,ze=0),kr=n,Pi=e,ia=a,Sh=c,$0=o,AS(e,n,a,y,A,I,St)}}function AS(e,n,a,o,c,f,y){var A=n.lanes|n.childLanes;if(yh=A,A|=af,Yt(e,a,A,o,c,f),Us=null,(a&335544064)===a?(Ns=tS(e),o=10262):(Ns=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,NS(jt,function(){return Rh(),null})):(e.callbackNode=null,e.callbackPriority=0),Su=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=Ct.T,Ct.T=null,c=Ut.p,Ut.p=2,f=Ye,Ye|=4;try{_S(e,n,a)}finally{Ye=f,Ut.p=c,Ct.T=o}}fn=1,Su?Ds=JS(y,e.containerInfo,Ns,Th,bh,CS,Ah,Rh,RS):(Th(),bh(),Ah())}function RS(e){if(fn!==0){var n=Pi.onRecoverableError;n(e,{componentStack:null})}}function CS(){fn===3&&(fn=0,Y0(kr,Pi),fn=4)}function Th(){if(fn===1){fn=0;var e=Pi,n=kr,a=ia,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=Ct.T,Ct.T=null;var c=Ut.p;Ut.p=2;var f=Ye;Ye|=4;try{Ko=Tu=!1,k0(n,e,a),a=Fh;var y=Gm(e.containerInfo),A=a.focusedElem,I=a.selectionRange;if(y!==A&&A&&A.ownerDocument&&Hm(A.ownerDocument.documentElement,A)){if(I!==null&&Jc(A)){var $=I.start,ct=I.end;if(ct===void 0&&(ct=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ct,A.value.length);else{var St=A.ownerDocument||document,Q=St&&St.defaultView||window;if(Q.getSelection){var ot=Q.getSelection(),Qt=A.textContent.length,le=Math.min(I.start,Qt),Ae=I.end===void 0?le:Math.min(I.end,Qt);!ot.extend&&le>Ae&&(y=Ae,Ae=le,le=y);var J=Fm(A,le),X=Fm(A,Ae);if(J&&X&&(ot.rangeCount!==1||ot.anchorNode!==J.node||ot.anchorOffset!==J.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var et=St.createRange();et.setStart(J.node,J.offset),ot.removeAllRanges(),le>Ae?(ot.addRange(et),ot.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ot.addRange(et))}}}}for(St=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&St.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var yt=St[A];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}Xs=!!Ih,Fh=Ih=null}finally{Ye=f,Ut.p=c,Ct.T=o}}e.current=n,fn=2}}function bh(){if(fn===2){fn=0;var e=Pi,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Ct.T,Ct.T=null;var o=Ut.p;Ut.p=2;var c=Ye;Ye|=4;try{I0(e,n.alternate,n)}finally{Ye=c,Ut.p=o,Ct.T=a}}fn=3}}function Ah(){if(fn===4||fn===3){fn=0;var e=Ds;Ds=null,ge();var n=Pi,a=kr,o=ia,c=$0,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?fn=5:(fn=0,kr=Pi=null,fv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(sr=null),nt(o),a=a.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(wt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Ct.T,f=Ut.p,Ut.p=2,Ct.T=null;try{for(var y=n.onRecoverableError,A=0;A<c.length;A++){var I=c[A];y(I.value,{componentStack:I.stack})}}finally{Ct.T=a,Ut.p=f}}if(c=Us,y=Ns,Ns=null,c!==null&&(Us=null,y===null&&(y=[]),e!==null))for(I=0;I<c.length;I++)a=(0,c[I])(y),a!==void 0&&e.finished.finally(a);(ia&3)!==0&&zu(),aa(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===Nu?el++:(el=0,Nu=n):(el=0,Nu=null),nl(0)}}function fv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,zo(n)))}function zu(){return Ds!==null&&(Ds.skipTransition(),Ds=null),Th(),bh(),Ah(),Rh()}function Rh(){if(fn!==5)return!1;var e=Pi,n=yh;yh=0;var a=nt(ia),o=Ct.T,c=Ut.p;try{Ut.p=32>a?32:a,Ct.T=null,a=Sh,Sh=null;var f=Pi,y=ia;if(fn=0,kr=Pi=null,ia=0,(Ye&6)!==0)throw Error(s(331));var A=Ye;if(Ye|=4,Q0(f.current),W0(f,f.current,y,a),Ye=A,nl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(wt,f)}catch{}return!0}finally{Ut.p=c,Ct.T=o,fv(e,n)}}function hv(e,n,a){n=Mi(a,n),n=kf(e.stateNode,n,2),e=Ja(e,n,2),e!==null&&(Wi(e,2),aa(e))}function Qe(e,n,a){if(e.tag===3)hv(e,e,a);else for(;n!==null;){if(n.tag===3){hv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(sr===null||!sr.has(o))){e=Mi(a,e),a=l0(2),o=Ja(n,a,2),o!==null&&(u0(a,o,n,e),Wi(o,2),aa(o));break}}n=n.return}}function Ch(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new SS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(_h=!0,c.add(a),e=wS.bind(null,e,n,a),n.then(e,e))}function wS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,rn===e&&(ze&a)===a&&((pn===4||pn===3&&(ze&62914560)===ze&&300>V()-wu)&&(Ye&2)===0?Os(e,0):Cu|=a,ws===ze&&(ws=0)),aa(e)}function dv(e,n){n===0&&(n=br()),e=Cr(e,n),e!==null&&(Wi(e,n),aa(e))}function DS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),dv(e,a)}function US(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),dv(e,a)}function NS(e,n){return Tt(e,n)}var zs=null,Bs=null,wh=!1,Bu=!1,Dh=!1,lr=0;function aa(e){e!==Bs&&e.next===null&&(Bs===null?zs=Bs=e:Bs=Bs.next=e),Bu=!0,wh||(wh=!0,OS())}function nl(e,n){if(!Dh&&Bu){Dh=!0;do for(var a=!1,o=zs;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-oe(42|e)+1)-1,f&=c&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,vv(o,f))}else f=ze,f=Tn(o,o===rn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||On(o,f)||(a=!0,vv(o,f));o=o.next}while(a);Dh=!1}}function LS(){pv()}function pv(){Bu=wh=!1;var e=0;lr!==0&&qS()&&(e=lr);for(var n=V(),a=null,o=zs;o!==null;){var c=o.next,f=mv(o,n);f===0?(o.next=null,a===null?zs=c:a.next=c,c===null&&(Bs=a)):(a=o,(e!==0||(f&3)!==0)&&(Bu=!0)),o=c}fn!==0&&fn!==5||nl(e),lr!==0&&(lr=0)}function mv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-oe(f),A=1<<y,I=c[y];I===-1?((A&a)===0||(A&o)!==0)&&(c[y]=ca(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=rn,a=ze,a=Tn(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ze===2||Ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&zt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||On(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&zt(o),nt(a)){case 2:case 8:a=At;break;case 32:a=jt;break;case 268435456:a=he;break;default:a=jt}return o=gv.bind(null,e),a=Tt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&zt(o),e.callbackPriority=2,e.callbackNode=null,2}function gv(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zu()&&e.callbackNode!==a)return null;var o=ze;return o=Tn(e,e===rn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ev(e,o,n),mv(e,V()),e.callbackNode!=null&&e.callbackNode===a?gv.bind(null,e):null)}function vv(e,n){if(zu())return null;ev(e,n,!0)}function OS(){WS(function(){(Ye&6)!==0?Tt(ht,LS):pv()})}function Uh(){if(lr===0){var e=Or;e===0&&(e=Te,Te<<=1,(Te&261888)===0&&(Te=256)),lr=e}return lr}function _v(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(e)}function PS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=_v((c[Wt]||null).action),y=o.submitter;y&&(n=(n=y[Wt]||null)?_v(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new Bl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(lr!==0){var I=new FormData(c,y);Ff(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=new FormData(c,y),Ff(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Nh=0;Nh<nf.length;Nh++){var Lh=nf[Nh],zS=Lh.toLowerCase(),BS=Lh[0].toUpperCase()+Lh.slice(1);Ui(zS,"on"+BS)}Ui(km,"onAnimationEnd"),Ui(qm,"onAnimationIteration"),Ui(Ym,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Yy,"onTransitionRun"),Ui(Wy,"onTransitionStart"),Ui(jy,"onTransitionCancel"),Ui(Wm,"onTransitionEnd"),bn("onMouseEnter",["mouseout","mouseover"]),bn("onMouseLeave",["mouseout","mouseover"]),bn("onPointerEnter",["pointerout","pointerover"]),bn("onPointerLeave",["pointerout","pointerover"]),vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function xv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=$;try{f(c)}catch(ct){Hl(ct)}c.currentTarget=null,f=I}else for(y=0;y<o.length;y++){if(A=o[y],I=A.instance,$=A.currentTarget,A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=$;try{f(c)}catch(ct){Hl(ct)}c.currentTarget=null,f=I}}}}function Oe(e,n){var a=n[de];a===void 0&&(a=n[de]=new Set);var o=e+"__bubble";a.has(o)||(yv(n,e,2,!1),a.add(o))}function Oh(e,n,a){var o=0;n&&(o|=4),yv(a,e,o,n)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Ph(e){if(!e[Iu]){e[Iu]=!0,Va.forEach(function(a){a!=="selectionchange"&&(IS.has(a)||Oh(a,!1,e),Oh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Iu]||(n[Iu]=!0,Oh("selectionchange",!1,n))}}function yv(e,n,a,o){switch(u_(n)){case 2:var c=DM;break;case 8:c=UM;break;default:c=ed}a=c.bind(null,n,a,e),c=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function zh(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===c)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;A!==null;){if(y=ae(A),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=f=y;continue t}A=A.parentNode}}o=o.return}ym(function(){var $=f,ct=Hc(a),St=[];t:{var Q=jm.get(e);if(Q!==void 0){var ot=Bl,Qt=e;switch(e){case"keypress":if(Pl(a)===0)break t;case"keydown":case"keyup":ot=My;break;case"focusin":Qt="focus",ot=Yc;break;case"focusout":Qt="blur",ot=Yc;break;case"beforeblur":case"afterblur":ot=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Ry;break;case km:case qm:case Ym:ot=dy;break;case Wm:ot=wy;break;case"scroll":case"scrollend":ot=ly;break;case"wheel":ot=Uy;break;case"copy":case"cut":case"paste":ot=my;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=bm;break;case"submit":ot=by;break;case"toggle":case"beforetoggle":ot=Ly}var le=(n&4)!==0,Ae=!le&&(e==="scroll"||e==="scrollend"),J=le?Q!==null?Q+"Capture":null:Q;le=[];for(var X=$,et;X!==null;){var yt=X;if(et=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||et===null||J===null||(yt=bo(X,J),yt!=null&&le.push(al(X,yt,et))),Ae)break;X=X.return}0<le.length&&(Q=new ot(Q,Qt,null,a,ct),St.push({event:Q,listeners:le}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",ot&&a!==Fc&&(Qt=a.relatedTarget||a.fromElement)&&(ae(Qt)||Qt[ie]))break t;(Q||ot)&&(Qt=ct.window===ct?ct:(ot=ct.ownerDocument)?ot.defaultView||ot.parentWindow:window,Q?(ot=a.relatedTarget||a.toElement,Q=$,ot=ot?ae(ot):null,ot!==null&&(Ae=u(ot),le=ot.tag,ot!==Ae||le!==5&&le!==27&&le!==6)&&(ot=null)):(Q=null,ot=$),Q!==ot&&(le=Em,yt="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(le=bm,yt="onPointerLeave",J="onPointerEnter",X="pointer"),Ae=Q==null?Qt:Pe(Q),et=ot==null?Qt:Pe(ot),Qt=new le(yt,X+"leave",Q,a,ct),Qt.target=Ae,Qt.relatedTarget=et,yt=null,ae(ct)===$&&(le=new le(J,X+"enter",ot,a,ct),le.target=et,le.relatedTarget=Ae,yt=le),Ae=yt,le=Q&&ot?z(Q,ot,FS):null,Q!==null&&Sv(St,Qt,Q,le,!1),ot!==null&&Ae!==null&&Sv(St,Ae,ot,le,!0)))}t:{if(Q=$?Pe($):window,ot=Q.nodeName&&Q.nodeName.toLowerCase(),ot==="select"||ot==="input"&&Q.type==="file")var ne=Lm;else if(Um(Q))if(Om)ne=Xy;else{ne=Gy;var Be=Hy}else ot=Q.nodeName,!ot||ot.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?$&&Ic($.elementType)&&(ne=Lm):ne=Vy;if(ne&&(ne=ne(e,$))){Nm(St,ne,a,ct);break t}Be&&Be(e,Q,$)}switch(Be=$?Pe($):window,e){case"focusin":(Um(Be)||Be.contentEditable==="true")&&(fs=Be,$c=$,Lo=null);break;case"focusout":Lo=$c=fs=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,Vm(St,a,ct);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":Vm(St,a,ct)}var pe;if(jc)t:{switch(e){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else cs?wm(e,a)&&(_e="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Am&&a.locale!=="ko"&&(cs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&cs&&(pe=Sm()):(Xa=ct,Xc="value"in Xa?Xa.value:Xa.textContent,cs=!0)),Be=Fu($,_e),0<Be.length&&(_e=new Tm(_e,e,null,a,ct),St.push({event:_e,listeners:Be}),pe?_e.data=pe:(pe=Dm(a),pe!==null&&(_e.data=pe)))),(pe=Py?zy(e,a):By(e,a))&&(_e=Fu($,"onBeforeInput"),0<_e.length&&(Be=new Tm("onBeforeInput","beforeinput",null,a,ct),St.push({event:Be,listeners:_e}),Be.data=pe)),PS(St,e,$,a,ct)}xv(St,n)})}function al(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=bo(e,a),c!=null&&o.unshift(al(e,c,f)),c=bo(e,n),c!=null&&o.push(al(e,c,f))),e.tag===3)return o;e=e.return}return[]}function FS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sv(e,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||$===null||(I=$,c?($=bo(a,f),$!=null&&y.unshift(al(a,$,I))):c||($=bo(a,f),$!=null&&y.push(al(a,$,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function Mv(e){return(typeof e=="string"?e:""+e).replace(HS,`
`).replace(GS,"")}function Ev(e,n){return n=Mv(n),Mv(e)===n}function Ke(e,n,a,o,c,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||os(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&os(e,""+o);else return;break;case"className":Nl(e,"class",o);break;case"tabIndex":Nl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(e,a,o);break;case"style":_m(e,o,f);return;case"data":if(n!=="object"){Nl(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ll(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ke(e,n,"name",c.name,c,null),Ke(e,n,"formEncType",c.formEncType,c,null),Ke(e,n,"formMethod",c.formMethod,c,null),Ke(e,n,"formTarget",c.formTarget,c,null)):(Ke(e,n,"encType",c.encType,c,null),Ke(e,n,"method",c.method,c,null),Ke(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ll(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);return;case"onScroll":o!=null&&Oe("scroll",e);return;case"onScrollEnd":o!=null&&Oe("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ll(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),Ul(e,"popover",o);break;case"xlinkActuate":ha(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ha(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ha(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ha(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ha(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ha(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ha(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ha(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ha(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ul(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=sy.get(a)||a,Ul(e,a,o);else return}ke=!0}function Bh(e,n,a,o,c,f){switch(a){case"style":_m(e,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")os(e,o);else if(typeof o=="number"||typeof o=="bigint")os(e,""+o);else return;break;case"onScroll":o!=null&&Oe("scroll",e);return;case"onScrollEnd":o!=null&&Oe("scrollend",e);return;case"onClick":o!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!an.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[Wt]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,o,c);break t}ke=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ul(e,a,o)}return}ke=!0}function Vn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,f,y,a,null)}}c&&Ke(e,n,"srcSet",a.srcSet,a,null),o&&Ke(e,n,"src",a.src,a,null);return;case"input":Oe("invalid",e);var A=f=y=c=null,I=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":y=ct;break;case"checked":I=ct;break;case"defaultChecked":$=ct;break;case"value":f=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ke(e,n,o,ct,a,null)}}pm(e,f,A,I,$,y,c,!1);return;case"select":Oe("invalid",e),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Ke(e,n,c,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?ss(e,!!o,n,!1):a!=null&&ss(e,!!o,a,!0);return;case"textarea":Oe("invalid",e),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ke(e,n,y,A,a,null)}gm(e,o,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ke(e,n,I,o,a,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(o=0;o<il.length;o++)Oe(il[o],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(e,n,$,o,a,null)}return;default:if(Ic(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&Bh(e,n,ct,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ke(e,n,A,o,a,null))}var VS={};function XS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,A=null,I=null,$=null,ct=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=St;default:o.hasOwnProperty(ot)||Ke(e,n,ot,null,o,St)}}for(var Q in o){var ot=o[Q];if(St=a[Q],o.hasOwnProperty(Q)&&(ot!=null||St!=null))switch(Q){case"type":ot!==St&&(ke=!0),f=ot;break;case"name":ot!==St&&(ke=!0),c=ot;break;case"checked":ot!==St&&(ke=!0),$=ot;break;case"defaultChecked":ot!==St&&(ke=!0),ct=ot;break;case"value":ot!==St&&(ke=!0),y=ot;break;case"defaultValue":ot!==St&&(ke=!0),A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==St&&Ke(e,n,Q,ot,o,St)}}zc(e,y,A,I,$,ct,f,c);return;case"select":ot=y=A=Q=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:o.hasOwnProperty(f)||Ke(e,n,f,null,o,I)}for(c in o)if(f=o[c],I=a[c],o.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":f!==I&&(ke=!0),Q=f;break;case"defaultValue":f!==I&&(ke=!0),A=f;break;case"multiple":f!==I&&(ke=!0),y=f;default:f!==I&&Ke(e,n,c,f,o,I)}n=A,a=y,o=ot,Q!=null?ss(e,!!a,Q,!1):!!o!=!!a&&(n!=null?ss(e,!!a,n,!0):ss(e,!!a,a?[]:"",!1));return;case"textarea":ot=Q=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ke(e,n,A,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":c!==f&&(ke=!0),Q=c;break;case"defaultValue":c!==f&&(ke=!0),ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ke(e,n,y,c,o,f)}mm(e,Q,ot);return;case"option":for(var Qt in a)if(Q=a[Qt],a.hasOwnProperty(Qt)&&Q!=null&&!o.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:Ke(e,n,Qt,null,o,Q)}for(I in o)if(Q=o[I],ot=a[I],o.hasOwnProperty(I)&&Q!==ot&&(Q!=null||ot!=null))switch(I){case"selected":Q!==ot&&(ke=!0),e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:Ke(e,n,I,Q,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in a)Q=a[le],a.hasOwnProperty(le)&&Q!=null&&!o.hasOwnProperty(le)&&Ke(e,n,le,null,o,Q);for($ in o)if(Q=o[$],ot=a[$],o.hasOwnProperty($)&&Q!==ot&&(Q!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:Ke(e,n,$,Q,o,ot)}return;default:if(Ic(n)){for(var Ae in a)Q=a[Ae],a.hasOwnProperty(Ae)&&Q!==void 0&&!o.hasOwnProperty(Ae)&&Bh(e,n,Ae,void 0,o,Q);for(ct in o)Q=o[ct],ot=a[ct],!o.hasOwnProperty(ct)||Q===ot||Q===void 0&&ot===void 0||Bh(e,n,ct,Q,o,ot);return}}for(var J in a)Q=a[J],a.hasOwnProperty(J)&&Q!=null&&!o.hasOwnProperty(J)&&Ke(e,n,J,null,o,Q);for(St in o)Q=o[St],ot=a[St],!o.hasOwnProperty(St)||Q===ot||Q==null&&ot==null||Ke(e,n,St,Q,o,ot)}function Tv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,y=c.initiatorType,A=c.duration;if(f&&A&&Tv(y)){for(y=0,A=c.responseEnd,o+=1;o<a.length;o++){var I=a[o],$=I.startTime;if($>A)break;var ct=I.transferSize,St=I.initiatorType;ct&&Tv(St)&&(I=I.responseEnd,y+=ct*(I<A?1:(A-$)/(I-$)))}if(--o,n+=8*(f+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ih=null,Fh=null;function rl(e){return e.nodeType===9?e:e.ownerDocument}function bv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Av(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rv(e,n,a,o){return a=rl(a).createElement(e),a[Bt]=o,a[Wt]=n,Vn(a,e,n),un(a),a}function Hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gh=null;function qS(){var e=window.event;return e&&e.type==="popstate"?e===Gh?!1:(Gh=e,!0):(Gh=null,!1)}var Vh=typeof setTimeout=="function"?setTimeout:void 0,YS=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,wv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Vh,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(e){return Cv.resolve(null).then(e).catch(jS)}:Vh;function jS(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function Dv(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),ks(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Qh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Qh(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[Ne]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Qh(e.ownerDocument.body);a=c}while(a);ks(n)}function Uv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Nv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var c=o=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Lv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ZS(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Xh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return ZS(n,a,e)}function QS(e){return e.documentElement.clientHeight}function KS(e){this.addEventListener("load",e),this.addEventListener("error",e)}function JS(e,n,a,o,c,f,y,A,I){var $=n.nodeType===9?n:n.ownerDocument;try{var ct=$.startViewTransition({update:function(){var Q=$.defaultView,ot=Q.navigation&&Q.navigation.transition,Qt=$.fonts.status;o();var le=[];if(Qt==="loaded"&&(QS($),$.fonts.status==="loading"&&le.push($.fonts.ready)),Qt=le.length,e!==null)for(var Ae=e.suspenseyImages,J=0,X=0;X<Ae.length;X++){var et=Ae[X];if(!et.complete){var yt=et.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<Q.innerHeight&&yt.left<Q.innerWidth){if(J+=t_(et),J>Vu){le.length=Qt;break}et=new Promise(KS.bind(et)),le.push(et)}}}if(0<le.length)return Q=Promise.race([Promise.all(le),new Promise(function(ne){return setTimeout(ne,500)})]).then(c,c),(ot?Promise.allSettled([ot.finished,Q]):Q).then(f,f);if(c(),ot)return ot.finished.then(f,f);f()},types:a});$.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var Q=$.documentElement.getAnimations({subtree:!0}),ot=0;ot<Q.length;ot++){var Qt=Q[ot],le=Qt.effect,Ae=le.pseudoElement;if(Ae!=null&&Ae.startsWith("::view-transition")){St.push(Qt),Qt=le.getKeyframes();for(var J=Ae=void 0,X=!0,et=0;et<Qt.length;et++){var yt=Qt[et],ne=yt.width;if(Ae===void 0)Ae=ne;else if(Ae!==ne){X=!1;break}if(ne=yt.height,J===void 0)J=ne;else if(J!==ne){X=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}X&&Ae!==void 0&&J!==void 0&&(le.setKeyframes(Qt),X=getComputedStyle(le.target,le.pseudoElement),X.width!==Ae||X.height!==J)&&(X=Qt[0],X.width=Ae,X.height=J,X=Qt[Qt.length-1],X.width=Ae,X.height=J,le.setKeyframes(Qt))}}y()},function(Q){$.__reactViewTransition===ct&&($.__reactViewTransition=null);try{if(typeof Q=="object"&&Q!==null)switch(Q.name){case"InvalidStateError":(Q.message==="View transition was skipped because document visibility state is hidden."||Q.message==="Skipping view transition because document visibility state has become hidden."||Q.message==="Skipping view transition because viewport size changed."||Q.message==="Transition was aborted because of invalid state")&&(Q=null)}Q!==null&&I(Q)}finally{o(),c(),y()}}),ct.finished.finally(function(){for(var Q=0;Q<St.length;Q++)St[Q].cancel();$.__reactViewTransition===ct&&($.__reactViewTransition=null),A()}),ct}catch{return o(),c(),y(),null}}function qr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}qr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},qr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&o.push(a[c])}return o},qr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ov(e){return{name:e,group:new qr("group",e),imagePair:new qr("image-pair",e),old:new qr("old",e),new:new qr("new",e)}}function gi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}gi.prototype.addEventListener=function(e,n,a){var o=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(zv(f,e,n,a)===-1){var y=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){y.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),o!==null&&(c=y.removeEventListener.bind(y,e,n,a),o.addEventListener("abort",c,{once:!0}),c=o.removeEventListener.bind(o,"abort",c)),o=Is(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:c}),m(this._fragmentFiber.child,!1,$S,e,A,o)}this._eventListeners=f}};function $S(e,n,a,o){return S(e).addEventListener(n,a,o),!1}gi.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=zv(o,e,n,a),n!==-1)){var c=o[n];a=c.attachedListener;var f=c.cleanup;c=Is(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,tM,e,a,c),o.splice(n,1),f!==null&&f()}};function tM(e,n,a,o){return S(e).removeEventListener(n,a,o),!1}function Is(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Pv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function zv(e,n,a,o){if(e.length===0)return-1;o=Pv(o);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&Pv(f.optionsOrUseCapture)===o)return c}return-1}gi.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];o.addEventListener(f.type,f.attachedListener,Is(f.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],o.removeEventListener(f.type,f.attachedListener,Is(f.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},gi.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Bv,e,void 0,void 0)};function Bv(e,n){return e.tag===6?!1:(e=S(e),hM(e,n))}gi.prototype.focusLast=function(e){var n=[];m(this._fragmentFiber.child,!0,kh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Bv(n[a],e);a--);};function kh(e,n){return n.push(e),!1}gi.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=S(e),e=rl(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,eM,e,void 0,void 0))};function eM(e,n){return e.tag===6?!1:(e=S(e),e===n||e.contains(n)?(n.blur(),!0):!1)}gi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,nM,e,void 0,void 0)};function nM(e,n){return e.tag===6||(e=S(e),n.observe(e)),!1}gi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),m(this._fragmentFiber.child,!1,iM,e,void 0,void 0);for(var a=n=0;a<zi.length;a++){var o=zi[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):zi[n++]=o}zi.length=n}};function iM(e,n){return e.tag===6||(e=S(e),n.unobserve(e)),!1}var zi=[],qh=!1;function aM(e,n,a){zi.push({fragmentInstance:e,observer:n,instance:a}),qh||(qh=!0,dM(function(){qh=!1;var o=zi;zi=[];for(var c=0;c<o.length;c++){var f=o[c];f.observer.unobserve(f.instance)}}))}gi.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,rM,e,void 0,void 0),e};function rM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=S(e),n.push.apply(n,e.getClientRects());return!1}gi.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:S(n).getRootNode(e)},gi.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,kh,a,void 0,void 0);var o=S(n);if(a.length===0){if(a=o,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=o=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=S(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),c=S(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(e),A=c.compareDocumentPosition(e),I=y&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=o&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||f&&c===e||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||sM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function sM(e,n,a,o,c){var f=ae(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,F),n===null?n=!1:(m(n,!0,N,f,a),f=x,x=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=z(o,f,F),n===null?n=!1:(m(n,!0,R,f,o),f=x,P=x=null,n=f!==null)),n):!1}function Iv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}gi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,kh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=a?o[1]||o[0]||_(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=S(o),Iv(e,a);return}if(o=S(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var c=n[o];c.tag===6?(c=S(c),Iv(c,a)):S(c).scrollIntoView(e),o+=a?-1:1}};function oM(e,n){return e=S(e),Fv(e,n),!1}function Fv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Hv(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];e.addEventListener(c.type,c.attachedListener,Is(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,A=0;A<zi.length;A++){var I=zi[A];(I.fragmentInstance!==n||I.observer!==f||I.instance!==e)&&(zi[y++]=I)}zi.length=y,f.observe(e)}),Fv(e,n))}function lM(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];e.removeEventListener(c.type,c.attachedListener,Is(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?aM(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Yh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yh(a),me(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function uM(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ne])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function cM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function Gv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function Wh(e){return e.data==="$?"||e.data==="$~"}function jh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zh=null;function Vv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Xv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function hM(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function dM(e){wv(function(){wv(function(n){return e(n)})})}function kv(e,n,a){switch(n=rl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function qv(e,n,a){for(var o in a){var c=a[o];a.hasOwnProperty(o)&&c!=null&&Ke(e,n,o,null,VS,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),me(e)}function Qh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);me(e)}var Ci=new Map,Yv=new Set;function sl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var ba=Ut.d;Ut.d={f:pM,r:mM,D:gM,C:vM,L:_M,m:xM,X:SM,S:yM,M:MM};function pM(){var e=ba.f(),n=Lu();return e||n}function mM(e){var n=nn(e);n!==null&&n.tag===5&&n.type==="form"?jg(n):ba.r(e)}var Fs=typeof document>"u"?null:document;function Wv(e,n,a){var o=Fs;if(o&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Yv.has(c)||(Yv.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Vn(n,"link",e),un(n),o.head.appendChild(n)))}}function gM(e){ba.D(e),Wv("dns-prefetch",e,null)}function vM(e,n){ba.C(e,n),Wv("preconnect",e,n)}function _M(e,n,a){ba.L(e,n,a);var o=Fs;if(o&&e&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(e)+'"]';var f=c;switch(n){case"style":f=Hs(e);break;case"script":f=Gs(e)}if(!(Ci.has(f)||(e=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(ol(f))||n==="script"&&o.querySelector(ll(f))))){var y=o.createElement("link");Vn(y,"link",e),n==="style"&&(y[Fe]=!0,y.onload=y.onerror=function(){kn(y)}),un(y),o.head.appendChild(y)}}}function xM(e,n){ba.m(e,n);var a=Fs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(o)+'"][href="'+yi(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Gs(e)}if(!Ci.has(f)&&(e=L({rel:"modulepreload",href:e},n),Ci.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(f)))return}o=a.createElement("link"),Vn(o,"link",e),un(o),a.head.appendChild(o)}}}function yM(e,n,a){ba.S(e,n,a);var o=Fs;if(o&&e){var c=wn(o).hoistableStyles,f=Hs(e);n=n||"default";var y=c.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(ol(f)))A.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(f))&&Kh(e,a);var I=y=o.createElement("link");un(I),Vn(I,"link",e),I._p=new Promise(function($,ct){I.onload=$,I.onerror=ct}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Hu(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},c.set(f,y)}}}function SM(e,n){ba.X(e,n);var a=Fs;if(a&&e){var o=wn(a).hoistableScripts,c=Gs(e),f=o.get(c);f||(f=a.querySelector(ll(c)),f||(e=L({src:e,async:!0},n),(n=Ci.get(c))&&Jh(e,n),f=a.createElement("script"),un(f),Vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function MM(e,n){ba.M(e,n);var a=Fs;if(a&&e){var o=wn(a).hoistableScripts,c=Gs(e),f=o.get(c);f||(f=a.querySelector(ll(c)),f||(e=L({src:e,async:!0,type:"module"},n),(n=Ci.get(c))&&Jh(e,n),f=a.createElement("script"),un(f),Vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function jv(e,n,a,o){var c=(c=O.current)?sl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Hs(a.href),n=wn(c).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hs(a.href);var f=wn(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(ol(e)))?f._p||(y.instance=f,y.state.loading=5):(f=Ci.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,f)),EM(c,e,f,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Gs(a),n=wn(c).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Hs(e){return'href="'+yi(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function Zv(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function EM(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Fe]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Fe]=!0,n.onload=n.onerror=kn.bind(null,n),Vn(n,"link",a),un(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Gs(e){return'[src="'+yi(e)+'"]'}function ll(e){return"script[async]"+e}function Qv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+yi(a.href)+'"]');if(o)return n.instance=o,un(o),o;var c=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),un(o),Vn(o,"style",c),Hu(o,a.precedence,e),n.instance=o;case"stylesheet":c=Hs(a.href);var f=e.querySelector(ol(c));if(f)return n.state.loading|=4,n.instance=f,un(f),f;o=Zv(a),(c=Ci.get(c))&&Kh(o,c),f=(e.ownerDocument||e).createElement("link"),un(f);var y=f;return y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Vn(f,"link",o),n.state.loading|=4,Hu(f,a.precedence,e),n.instance=f;case"script":return f=Gs(a.src),(c=e.querySelector(ll(f)))?(n.instance=c,un(c),c):(o=a,(c=Ci.get(f))&&(o=L({},a),Jh(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),un(c),Vn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hu(o,a.precedence,e));return n.instance}function Hu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gu=null;function Kv(e,n,a){if(Gu===null){var o=new Map,c=Gu=new Map;c.set(a,o)}else c=Gu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ne]||f[Bt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function $h(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function TM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function $v(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function t_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function e_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=t_(n),e.suspenseyImages.push(n)),e=RM.bind(e),n.decode().then(e,e))}function bM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Hs(o.href),f=n.querySelector(ol(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ul.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,un(f);return}f=n.ownerDocument||n,o=Zv(o),(c=Ci.get(c))&&Kh(o,c),f=f.createElement("link"),un(f);var y=f;y._p=new Promise(function(A,I){y.onload=A,y.onerror=I}),Vn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ul.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vu=0;function AM(e,n){return e.stylesheets&&e.count===0&&ku(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Vu===0&&(Vu=62500*kS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Vu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function n_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ku(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ul(){this.count--,n_(this)}function RM(){this.imgCount--,n_(this)}var Xu=null;function ku(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xu=new Map,n.forEach(CM,e),Xu=null,ul.call(e))}function CM(e,n){if(!(n.state.loading&4)){var a=Xu.get(e);if(a)var o=a.get(null);else{a=new Map,Xu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=ul.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Vs={$$typeof:lt,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function wM(e,n,a,o,c,f,y,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ga(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.hiddenUpdates=Ga(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function i_(e,n,a,o,c,f,y,A,I,$,ct,St){return e=new wM(e,n,a,y,I,$,ct,St,A),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=pf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},_f(f),e}function a_(e){return e?(e=ps,e):ps}function r_(e,n,a,o,c,f){c=a_(c),o.context===null?o.context=c:o.pendingContext=c,o=Ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ja(e,o,n),a!==null&&(si(a,e,n),Ho(a,e,n))}function s_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function td(e,n){s_(e,n),(e=e.alternate)&&s_(e,n)}function o_(e){if(e.tag===13||e.tag===31){var n=Cr(e,67108864);n!==null&&si(n,e,67108864),td(e,67108864)}}function l_(e){if(e.tag===13||e.tag===31){var n=mi();n=at(n);var a=Cr(e,n);a!==null&&si(a,e,n),td(e,n)}}var Xs=!0;function DM(e,n,a,o){var c=Ct.T;Ct.T=null;var f=Ut.p;try{Ut.p=2,ed(e,n,a,o)}finally{Ut.p=f,Ct.T=c}}function UM(e,n,a,o){var c=Ct.T;Ct.T=null;var f=Ut.p;try{Ut.p=8,ed(e,n,a,o)}finally{Ut.p=f,Ct.T=c}}function ed(e,n,a,o){if(Xs){var c=nd(o);if(c===null)zh(e,n,o,qu,a),c_(e,o);else if(LM(c,e,n,a,o))o.stopPropagation();else if(c_(e,o),n&4&&-1<NM.indexOf(e)){for(;c!==null;){var f=nn(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=hn(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var I=1<<31-oe(y);A.entanglements[1]|=I,y&=~I}aa(f),(Ye&6)===0&&(Du=V()+500,nl(0))}}break;case 31:case 13:A=Cr(f,2),A!==null&&si(A,f,2),Lu(),td(f,2)}if(f=nd(o),f===null&&zh(e,n,o,qu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else zh(e,n,o,null,a)}}function nd(e){return e=Hc(e),id(e)}var qu=null;function id(e){if(qu=null,e=ae(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return qu=e,null}function u_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case ht:return 2;case At:return 8;case jt:case Zt:return 32;case he:return 268435456;default:return 32}default:return 32}}var ad=!1,cr=null,fr=null,hr=null,cl=new Map,fl=new Map,dr=[],NM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function hl(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=nn(n),n!==null&&o_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function LM(e,n,a,o,c){switch(n){case"focusin":return cr=hl(cr,e,n,a,o,c),!0;case"dragenter":return fr=hl(fr,e,n,a,o,c),!0;case"mouseover":return hr=hl(hr,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return cl.set(f,hl(cl.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,fl.set(f,hl(fl.get(f)||null,e,n,a,o,c)),!0}return!1}function f_(e){var n=ae(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){l_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){l_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Fc=o,a.target.dispatchEvent(o),Fc=null}else return n=nn(a),n!==null&&o_(n),e.blockedOn=a,!1;n.shift()}return!0}function h_(e,n,a){Yu(e)&&a.delete(n)}function OM(){ad=!1,cr!==null&&Yu(cr)&&(cr=null),fr!==null&&Yu(fr)&&(fr=null),hr!==null&&Yu(hr)&&(hr=null),cl.forEach(h_),fl.forEach(h_)}function Wu(e,n){e.blockedOn===n&&(e.blockedOn=null,ad||(ad=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,OM)))}var ju=null;function d_(e){ju!==e&&(ju=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ju===e&&(ju=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(id(o||a)===null)continue;break}var f=nn(a);f!==null&&(e.splice(n,3),n-=3,Ff(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ks(e){function n(I){return Wu(I,e)}cr!==null&&Wu(cr,e),fr!==null&&Wu(fr,e),hr!==null&&Wu(hr,e),cl.forEach(n),fl.forEach(n);for(var a=0;a<dr.length;a++){var o=dr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)f_(a),a.blockedOn===null&&dr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[Wt]||null;if(typeof f=="function")y||d_(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Wt]||null)A=y.formAction;else if(id(c)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),d_(a)}}}function p_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function rd(e){this._internalRoot=e}Zu.prototype.render=rd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=mi();r_(a,o,e,n,null,null)},Zu.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;r_(e.current,2,null,e,null,null),Lu(),n[ie]=null}};function Zu(e){this._internalRoot=e}Zu.prototype.unstable_scheduleHydration=function(e){if(e){var n=K();e={blockedOn:null,target:e,priority:n};for(var a=0;a<dr.length&&n!==0&&n<dr[a].priority;a++);dr.splice(a,0,e),a===0&&f_(e)}};var m_=t.version;if(m_!=="19.3.0")throw Error(s(527,m_,"19.3.0"));Ut.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var PM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{wt=Qu.inject(PM),_t=Qu}catch{}}return pl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=a0,f=r0,y=s0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=i_(e,1,!1,null,null,a,o,null,c,f,y,p_),e[ie]=n.current,Ph(e),new rd(n)},pl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",f=a0,y=r0,A=s0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=i_(e,1,!0,n,a??null,o,c,I,f,y,A,p_),n.context=a_(null),a=n.current,o=mi(),o=at(o),c=Ka(o),c.callback=null,Ja(a,c,o),a=o,n.current.lanes=a,Wi(n,a),aa(n),e[ie]=n.current,Ph(e),new Zu(n)},pl.version="19.3.0",pl}var b_;function WM(){if(b_)return ld.exports;b_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ld.exports=YM(),ld.exports}var jM=WM();function Sl(r){let t=r[0],i=r[1],s=r[2];return Math.sqrt(t*t+i*i+s*s)}function op(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r}function ZM(r,t,i,s){return r[0]=t,r[1]=i,r[2]=s,r}function A_(r,t,i){return r[0]=t[0]+i[0],r[1]=t[1]+i[1],r[2]=t[2]+i[2],r}function R_(r,t,i){return r[0]=t[0]-i[0],r[1]=t[1]-i[1],r[2]=t[2]-i[2],r}function QM(r,t,i){return r[0]=t[0]*i[0],r[1]=t[1]*i[1],r[2]=t[2]*i[2],r}function KM(r,t,i){return r[0]=t[0]/i[0],r[1]=t[1]/i[1],r[2]=t[2]/i[2],r}function hd(r,t,i){return r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i,r}function JM(r,t){let i=t[0]-r[0],s=t[1]-r[1],l=t[2]-r[2];return Math.sqrt(i*i+s*s+l*l)}function $M(r,t){let i=t[0]-r[0],s=t[1]-r[1],l=t[2]-r[2];return i*i+s*s+l*l}function C_(r){let t=r[0],i=r[1],s=r[2];return t*t+i*i+s*s}function tE(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r}function eE(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r}function lp(r,t){let i=t[0],s=t[1],l=t[2],u=i*i+s*s+l*l;return u>0&&(u=1/Math.sqrt(u)),r[0]=t[0]*u,r[1]=t[1]*u,r[2]=t[2]*u,r}function x1(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function w_(r,t,i){let s=t[0],l=t[1],u=t[2],h=i[0],d=i[1],p=i[2];return r[0]=l*p-u*d,r[1]=u*h-s*p,r[2]=s*d-l*h,r}function nE(r,t,i,s){let l=t[0],u=t[1],h=t[2];return r[0]=l+s*(i[0]-l),r[1]=u+s*(i[1]-u),r[2]=h+s*(i[2]-h),r}function iE(r,t,i,s,l){const u=Math.exp(-s*l);let h=t[0],d=t[1],p=t[2];return r[0]=i[0]+(h-i[0])*u,r[1]=i[1]+(d-i[1])*u,r[2]=i[2]+(p-i[2])*u,r}function aE(r,t,i){let s=t[0],l=t[1],u=t[2],h=i[3]*s+i[7]*l+i[11]*u+i[15];return h=h||1,r[0]=(i[0]*s+i[4]*l+i[8]*u+i[12])/h,r[1]=(i[1]*s+i[5]*l+i[9]*u+i[13])/h,r[2]=(i[2]*s+i[6]*l+i[10]*u+i[14])/h,r}function rE(r,t,i){let s=t[0],l=t[1],u=t[2],h=i[3]*s+i[7]*l+i[11]*u+i[15];return h=h||1,r[0]=(i[0]*s+i[4]*l+i[8]*u)/h,r[1]=(i[1]*s+i[5]*l+i[9]*u)/h,r[2]=(i[2]*s+i[6]*l+i[10]*u)/h,r}function sE(r,t,i){let s=t[0],l=t[1],u=t[2];return r[0]=s*i[0]+l*i[3]+u*i[6],r[1]=s*i[1]+l*i[4]+u*i[7],r[2]=s*i[2]+l*i[5]+u*i[8],r}function oE(r,t,i){let s=t[0],l=t[1],u=t[2],h=i[0],d=i[1],p=i[2],g=i[3],v=d*u-p*l,m=p*s-h*u,_=h*l-d*s,M=d*_-p*m,E=p*v-h*_,T=h*m-d*v,S=g*2;return v*=S,m*=S,_*=S,M*=2,E*=2,T*=2,r[0]=s+v+M,r[1]=l+m+E,r[2]=u+_+T,r}const lE=(function(){const r=[0,0,0],t=[0,0,0];return function(i,s){op(r,i),op(t,s),lp(r,r),lp(t,t);let l=x1(r,t);return l>1?0:l<-1?Math.PI:Math.acos(l)}})();function uE(r,t){return r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2]}class Vi extends Array{constructor(t=0,i=t,s=t){return super(t,i,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,i=t,s=t){return t.length?this.copy(t):(ZM(this,t,i,s),this)}copy(t){return op(this,t),this}add(t,i){return i?A_(this,t,i):A_(this,this,t),this}sub(t,i){return i?R_(this,t,i):R_(this,this,t),this}multiply(t){return t.length?QM(this,this,t):hd(this,this,t),this}divide(t){return t.length?KM(this,this,t):hd(this,this,1/t),this}inverse(t=this){return eE(this,t),this}len(){return Sl(this)}distance(t){return t?JM(this,t):Sl(this)}squaredLen(){return C_(this)}squaredDistance(t){return t?$M(this,t):C_(this)}negate(t=this){return tE(this,t),this}cross(t,i){return i?w_(this,t,i):w_(this,this,t),this}scale(t){return hd(this,this,t),this}normalize(){return lp(this,this),this}dot(t){return x1(this,t)}equals(t){return uE(this,t)}applyMatrix3(t){return sE(this,this,t),this}applyMatrix4(t){return aE(this,this,t),this}scaleRotateMatrix4(t){return rE(this,this,t),this}applyQuaternion(t){return oE(this,this,t),this}angle(t){return lE(this,t)}lerp(t,i){return nE(this,this,t,i),this}smoothLerp(t,i,s){return iE(this,this,t,i,s),this}clone(){return new Vi(this[0],this[1],this[2])}fromArray(t,i=0){return this[0]=t[i],this[1]=t[i+1],this[2]=t[i+2],this}toArray(t=[],i=0){return t[i]=this[0],t[i+1]=this[1],t[i+2]=this[2],t}transformDirection(t){const i=this[0],s=this[1],l=this[2];return this[0]=t[0]*i+t[4]*s+t[8]*l,this[1]=t[1]*i+t[5]*s+t[9]*l,this[2]=t[2]*i+t[6]*s+t[10]*l,this.normalize()}}const D_=new Vi;let cE=1,fE=1,U_=!1;class hE{constructor(t,i={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=i,this.id=cE++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in i)this.addAttribute(s,i[s])}addAttribute(t,i){if(this.attributes[t]=i,i.id=fE++,i.size=i.size||1,i.type=i.type||(i.data.constructor===Float32Array?this.gl.FLOAT:i.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),i.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,i.normalized=i.normalized||!1,i.stride=i.stride||0,i.offset=i.offset||0,i.count=i.count||(i.stride?i.data.byteLength/i.stride:i.data.length/i.size),i.divisor=i.instanced||0,i.needsUpdate=!1,i.usage=i.usage||this.gl.STATIC_DRAW,i.buffer||this.updateAttribute(i),i.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==i.count*i.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,i.count*i.divisor);this.instancedCount=i.count*i.divisor}else t==="index"?this.drawRange.count=i.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,i.count))}updateAttribute(t){const i=!t.buffer;i&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),i?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((i,{name:s,type:l})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const u=this.attributes[s];this.gl.bindBuffer(u.target,u.buffer),this.glState.boundBuffer=u.buffer;let h=1;l===35674&&(h=2),l===35675&&(h=3),l===35676&&(h=4);const d=u.size/h,p=h===1?0:h*h*4,g=h===1?0:h*4;for(let v=0;v<h;v++)this.gl.vertexAttribPointer(i+v,d,u.type,u.normalized,u.stride+p,u.offset+v*g),this.gl.enableVertexAttribArray(i+v),this.gl.renderer.vertexAttribDivisor(i+v,u.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:i=this.gl.TRIANGLES}){var l;this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((u,{name:h})=>{const d=this.attributes[h];d.needsUpdate&&this.updateAttribute(d)});let s=2;((l=this.attributes.index)==null?void 0:l.type)===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(i,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(i,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!U_)return console.warn("No position buffer data found to compute bounds"),U_=!0}computeBoundingBox(t){t||(t=this.getPosition());const i=t.data,s=t.size;this.bounds||(this.bounds={min:new Vi,max:new Vi,center:new Vi,scale:new Vi,radius:1/0});const l=this.bounds.min,u=this.bounds.max,h=this.bounds.center,d=this.bounds.scale;l.set(1/0),u.set(-1/0);for(let p=0,g=i.length;p<g;p+=s){const v=i[p],m=i[p+1],_=i[p+2];l.x=Math.min(v,l.x),l.y=Math.min(m,l.y),l.z=Math.min(_,l.z),u.x=Math.max(v,u.x),u.y=Math.max(m,u.y),u.z=Math.max(_,u.z)}d.sub(u,l),h.add(l,u).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const i=t.data,s=t.size;this.bounds||this.computeBoundingBox(t);let l=0;for(let u=0,h=i.length;u<h;u+=s)D_.fromArray(i,u),l=Math.max(l,this.bounds.center.squaredDistance(D_));this.bounds.radius=Math.sqrt(l)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let dE=1;const N_={};class pE{constructor(t,{vertex:i,fragment:s,uniforms:l={},transparent:u=!1,cullFace:h=t.BACK,frontFace:d=t.CCW,depthTest:p=!0,depthWrite:g=!0,depthFunc:v=t.LEQUAL}={}){t.canvas||console.error("gl not passed as first argument to Program"),this.gl=t,this.uniforms=l,this.id=dE++,i||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=u,this.cullFace=h,this.frontFace=d,this.depthTest=p,this.depthWrite=g,this.depthFunc=v,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=t.createShader(t.VERTEX_SHADER),this.fragmentShader=t.createShader(t.FRAGMENT_SHADER),this.program=t.createProgram(),t.attachShader(this.program,this.vertexShader),t.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:i,fragment:s})}setShaders({vertex:t,fragment:i}){if(t&&(this.gl.shaderSource(this.vertexShader,t),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${L_(t)}`)),i&&(this.gl.shaderSource(this.fragmentShader,i),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${L_(i)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let h=0;h<s;h++){let d=this.gl.getActiveUniform(this.program,h);this.uniformLocations.set(d,this.gl.getUniformLocation(this.program,d.name));const p=d.name.match(/(\w+)/g);d.uniformName=p[0],d.nameComponents=p.slice(1)}this.attributeLocations=new Map;const l=[],u=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let h=0;h<u;h++){const d=this.gl.getActiveAttrib(this.program,h),p=this.gl.getAttribLocation(this.program,d.name);p!==-1&&(l[p]=d.name,this.attributeLocations.set(d,p))}this.attributeOrder=l.join("")}setBlendFunc(t,i,s,l){this.blendFunc.src=t,this.blendFunc.dst=i,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=l,t&&(this.transparent=!0)}setBlendEquation(t,i){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=i}setStencilFunc(t,i,s){this.stencilRef=i,this.stencilFunc.func=t,this.stencilFunc.ref=i,this.stencilFunc.mask=s}setStencilOp(t,i,s){this.stencilOp.stencilFail=t,this.stencilOp.depthFail=i,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:t=!1}={}){let i=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((l,u)=>{let h=this.uniforms[u.uniformName];for(const d of u.nameComponents){if(!h)break;if(d in h)h=h[d];else{if(Array.isArray(h.value))break;h=void 0;break}}if(!h)return O_(`Active uniform ${u.name} has not been supplied`);if(h&&h.value===void 0)return O_(`${u.name} uniform is missing a value parameter`);if(h.value.texture)return i=i+1,h.value.update(i),dd(this.gl,u.type,l,i);if(h.value.length&&h.value[0].texture){const d=[];return h.value.forEach(p=>{i=i+1,p.update(i),d.push(i)}),dd(this.gl,u.type,l,d)}dd(this.gl,u.type,l,h.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function dd(r,t,i,s){s=s.length?mE(s):s;const l=r.renderer.state.uniformLocations.get(i);if(s.length)if(l===void 0||l.length!==s.length)r.renderer.state.uniformLocations.set(i,s.slice(0));else{if(gE(l,s))return;l.set?l.set(s):vE(l,s),r.renderer.state.uniformLocations.set(i,l)}else{if(l===s)return;r.renderer.state.uniformLocations.set(i,s)}switch(t){case 5126:return s.length?r.uniform1fv(i,s):r.uniform1f(i,s);case 35664:return r.uniform2fv(i,s);case 35665:return r.uniform3fv(i,s);case 35666:return r.uniform4fv(i,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?r.uniform1iv(i,s):r.uniform1i(i,s);case 35671:case 35667:return r.uniform2iv(i,s);case 35672:case 35668:return r.uniform3iv(i,s);case 35673:case 35669:return r.uniform4iv(i,s);case 35674:return r.uniformMatrix2fv(i,!1,s);case 35675:return r.uniformMatrix3fv(i,!1,s);case 35676:return r.uniformMatrix4fv(i,!1,s)}}function L_(r){let t=r.split(`
`);for(let i=0;i<t.length;i++)t[i]=i+1+": "+t[i];return t.join(`
`)}function mE(r){const t=r.length,i=r[0].length;if(i===void 0)return r;const s=t*i;let l=N_[s];l||(N_[s]=l=new Float32Array(s));for(let u=0;u<t;u++)l.set(r[u],u*i);return l}function gE(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vE(r,t){for(let i=0,s=r.length;i<s;i++)r[i]=t[i]}let pd=0;function O_(r){pd>100||(console.warn(r),pd++,pd>100&&console.warn("More than 100 program warnings - stopping logs."))}const md=new Vi;let _E=1;class xE{constructor({canvas:t=document.createElement("canvas"),width:i=300,height:s=150,dpr:l=1,alpha:u=!1,depth:h=!0,stencil:d=!1,antialias:p=!1,premultipliedAlpha:g=!1,preserveDrawingBuffer:v=!1,powerPreference:m="default",autoClear:_=!0,webgl:M=2}={}){const E={alpha:u,depth:h,stencil:d,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:v,powerPreference:m};this.dpr=l,this.alpha=u,this.color=!0,this.depth=h,this.stencil=d,this.premultipliedAlpha=g,this.autoClear=_,this.id=_E++,M===2&&(this.gl=t.getContext("webgl2",E)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",E)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(i,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,i){this.width=t,this.height=i,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=i*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:t+"px",height:i+"px"})}setViewport(t,i,s=0,l=0){this.state.viewport.width===t&&this.state.viewport.height===i||(this.state.viewport.width=t,this.state.viewport.height=i,this.state.viewport.x=s,this.state.viewport.y=l,this.gl.viewport(s,l,t,i))}setScissor(t,i,s=0,l=0){this.gl.scissor(s,l,t,i)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,i,s,l){this.state.blendFunc.src===t&&this.state.blendFunc.dst===i&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===l||(this.state.blendFunc.src=t,this.state.blendFunc.dst=i,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=l,s!==void 0?this.gl.blendFuncSeparate(t,i,s,l):this.gl.blendFunc(t,i))}setBlendEquation(t,i){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===i)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=i,i!==void 0?this.gl.blendEquationSeparate(t,i):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}setStencilMask(t){this.state.stencilMask!==t&&(this.state.stencilMask=t,this.gl.stencilMask(t))}setStencilFunc(t,i,s){this.state.stencilFunc===t&&this.state.stencilRef===i&&this.state.stencilFuncMask===s||(this.state.stencilFunc=t||this.gl.ALWAYS,this.state.stencilRef=i||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(t||this.gl.ALWAYS,i||0,s||0))}setStencilOp(t,i,s){this.state.stencilFail===t&&this.state.stencilDepthFail===i&&this.state.stencilDepthPass===s||(this.state.stencilFail=t,this.state.stencilDepthFail=i,this.state.stencilDepthPass=s,this.gl.stencilOp(t,i,s))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:i=null}={}){this.state.framebuffer!==i&&(this.state.framebuffer=i,this.gl.bindFramebuffer(t,i))}getExtension(t,i,s){return i&&this.gl[i]?this.gl[i].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),i?this.extensions[t]?this.extensions[t][s].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,i){return t.renderOrder!==i.renderOrder?t.renderOrder-i.renderOrder:t.program.id!==i.program.id?t.program.id-i.program.id:t.zDepth!==i.zDepth?t.zDepth-i.zDepth:i.id-t.id}sortTransparent(t,i){return t.renderOrder!==i.renderOrder?t.renderOrder-i.renderOrder:t.zDepth!==i.zDepth?i.zDepth-t.zDepth:i.id-t.id}sortUI(t,i){return t.renderOrder!==i.renderOrder?t.renderOrder-i.renderOrder:t.program.id!==i.program.id?t.program.id-i.program.id:i.id-t.id}getRenderList({scene:t,camera:i,frustumCull:s,sort:l}){let u=[];if(i&&s&&i.updateFrustum(),t.traverse(h=>{if(!h.visible)return!0;h.draw&&(s&&h.frustumCulled&&i&&!i.frustumIntersectsMesh(h)||u.push(h))}),l){const h=[],d=[],p=[];u.forEach(g=>{g.program.transparent?g.program.depthTest?d.push(g):p.push(g):h.push(g),g.zDepth=0,!(g.renderOrder!==0||!g.program.depthTest||!i)&&(g.worldMatrix.getTranslation(md),md.applyMatrix4(i.projectionViewMatrix),g.zDepth=md.z)}),h.sort(this.sortOpaque),d.sort(this.sortTransparent),p.sort(this.sortUI),u=h.concat(d,p)}return u}render({scene:t,camera:i,target:s=null,update:l=!0,sort:u=!0,frustumCull:h=!0,clear:d}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(d||this.autoClear&&d!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),l&&t.updateMatrixWorld(),i&&i.updateMatrixWorld(),this.getRenderList({scene:t,camera:i,frustumCull:h,sort:u}).forEach(g=>{g.draw({camera:i})})}}function yE(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}function SE(r,t,i,s,l){return r[0]=t,r[1]=i,r[2]=s,r[3]=l,r}function ME(r,t){let i=t[0],s=t[1],l=t[2],u=t[3],h=i*i+s*s+l*l+u*u;return h>0&&(h=1/Math.sqrt(h)),r[0]=i*h,r[1]=s*h,r[2]=l*h,r[3]=u*h,r}function EE(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]}function TE(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r}function bE(r,t,i){i=i*.5;let s=Math.sin(i);return r[0]=s*t[0],r[1]=s*t[1],r[2]=s*t[2],r[3]=Math.cos(i),r}function P_(r,t,i){let s=t[0],l=t[1],u=t[2],h=t[3],d=i[0],p=i[1],g=i[2],v=i[3];return r[0]=s*v+h*d+l*g-u*p,r[1]=l*v+h*p+u*d-s*g,r[2]=u*v+h*g+s*p-l*d,r[3]=h*v-s*d-l*p-u*g,r}function AE(r,t,i){i*=.5;let s=t[0],l=t[1],u=t[2],h=t[3],d=Math.sin(i),p=Math.cos(i);return r[0]=s*p+h*d,r[1]=l*p+u*d,r[2]=u*p-l*d,r[3]=h*p-s*d,r}function RE(r,t,i){i*=.5;let s=t[0],l=t[1],u=t[2],h=t[3],d=Math.sin(i),p=Math.cos(i);return r[0]=s*p-u*d,r[1]=l*p+h*d,r[2]=u*p+s*d,r[3]=h*p-l*d,r}function CE(r,t,i){i*=.5;let s=t[0],l=t[1],u=t[2],h=t[3],d=Math.sin(i),p=Math.cos(i);return r[0]=s*p+l*d,r[1]=l*p-s*d,r[2]=u*p+h*d,r[3]=h*p-u*d,r}function wE(r,t,i,s){let l=t[0],u=t[1],h=t[2],d=t[3],p=i[0],g=i[1],v=i[2],m=i[3],_,M,E,T,S;return M=l*p+u*g+h*v+d*m,M<0&&(M=-M,p=-p,g=-g,v=-v,m=-m),1-M>1e-6?(_=Math.acos(M),E=Math.sin(_),T=Math.sin((1-s)*_)/E,S=Math.sin(s*_)/E):(T=1-s,S=s),r[0]=T*l+S*p,r[1]=T*u+S*g,r[2]=T*h+S*v,r[3]=T*d+S*m,r}function DE(r,t){let i=t[0],s=t[1],l=t[2],u=t[3],h=i*i+s*s+l*l+u*u,d=h?1/h:0;return r[0]=-i*d,r[1]=-s*d,r[2]=-l*d,r[3]=u*d,r}function UE(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r}function NE(r,t){let i=t[0]+t[4]+t[8],s;if(i>0)s=Math.sqrt(i+1),r[3]=.5*s,s=.5/s,r[0]=(t[5]-t[7])*s,r[1]=(t[6]-t[2])*s,r[2]=(t[1]-t[3])*s;else{let l=0;t[4]>t[0]&&(l=1),t[8]>t[l*3+l]&&(l=2);let u=(l+1)%3,h=(l+2)%3;s=Math.sqrt(t[l*3+l]-t[u*3+u]-t[h*3+h]+1),r[l]=.5*s,s=.5/s,r[3]=(t[u*3+h]-t[h*3+u])*s,r[u]=(t[u*3+l]+t[l*3+u])*s,r[h]=(t[h*3+l]+t[l*3+h])*s}return r}function LE(r,t,i="YXZ"){let s=Math.sin(t[0]*.5),l=Math.cos(t[0]*.5),u=Math.sin(t[1]*.5),h=Math.cos(t[1]*.5),d=Math.sin(t[2]*.5),p=Math.cos(t[2]*.5);return i==="XYZ"?(r[0]=s*h*p+l*u*d,r[1]=l*u*p-s*h*d,r[2]=l*h*d+s*u*p,r[3]=l*h*p-s*u*d):i==="YXZ"?(r[0]=s*h*p+l*u*d,r[1]=l*u*p-s*h*d,r[2]=l*h*d-s*u*p,r[3]=l*h*p+s*u*d):i==="ZXY"?(r[0]=s*h*p-l*u*d,r[1]=l*u*p+s*h*d,r[2]=l*h*d+s*u*p,r[3]=l*h*p-s*u*d):i==="ZYX"?(r[0]=s*h*p-l*u*d,r[1]=l*u*p+s*h*d,r[2]=l*h*d-s*u*p,r[3]=l*h*p+s*u*d):i==="YZX"?(r[0]=s*h*p+l*u*d,r[1]=l*u*p+s*h*d,r[2]=l*h*d-s*u*p,r[3]=l*h*p-s*u*d):i==="XZY"&&(r[0]=s*h*p-l*u*d,r[1]=l*u*p-s*h*d,r[2]=l*h*d+s*u*p,r[3]=l*h*p+s*u*d),r}const OE=yE,PE=SE,zE=EE,BE=ME;class IE extends Array{constructor(t=0,i=0,s=0,l=1){super(t,i,s,l),this.onChange=()=>{},this._target=this;const u=["0","1","2","3"];return new Proxy(this,{set(h,d){const p=Reflect.set(...arguments);return p&&u.includes(d)&&h.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set w(t){this._target[3]=t,this.onChange()}identity(){return TE(this._target),this.onChange(),this}set(t,i,s,l){return t.length?this.copy(t):(PE(this._target,t,i,s,l),this.onChange(),this)}rotateX(t){return AE(this._target,this._target,t),this.onChange(),this}rotateY(t){return RE(this._target,this._target,t),this.onChange(),this}rotateZ(t){return CE(this._target,this._target,t),this.onChange(),this}inverse(t=this._target){return DE(this._target,t),this.onChange(),this}conjugate(t=this._target){return UE(this._target,t),this.onChange(),this}copy(t){return OE(this._target,t),this.onChange(),this}normalize(t=this._target){return BE(this._target,t),this.onChange(),this}multiply(t,i){return i?P_(this._target,t,i):P_(this._target,this._target,t),this.onChange(),this}dot(t){return zE(this._target,t)}fromMatrix3(t){return NE(this._target,t),this.onChange(),this}fromEuler(t,i){return LE(this._target,t,t.order),i||this.onChange(),this}fromAxisAngle(t,i){return bE(this._target,t,i),this.onChange(),this}slerp(t,i){return wE(this._target,this._target,t,i),this.onChange(),this}fromArray(t,i=0){return this._target[0]=t[i],this._target[1]=t[i+1],this._target[2]=t[i+2],this._target[3]=t[i+3],this.onChange(),this}toArray(t=[],i=0){return t[i]=this[0],t[i+1]=this[1],t[i+2]=this[2],t[i+3]=this[3],t}}const FE=1e-6;function HE(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function GE(r,t,i,s,l,u,h,d,p,g,v,m,_,M,E,T,S){return r[0]=t,r[1]=i,r[2]=s,r[3]=l,r[4]=u,r[5]=h,r[6]=d,r[7]=p,r[8]=g,r[9]=v,r[10]=m,r[11]=_,r[12]=M,r[13]=E,r[14]=T,r[15]=S,r}function VE(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function XE(r,t){let i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=t[9],_=t[10],M=t[11],E=t[12],T=t[13],S=t[14],x=t[15],P=i*d-s*h,N=i*p-l*h,R=i*g-u*h,F=s*p-l*d,z=s*g-u*d,L=l*g-u*p,H=v*T-m*E,D=v*S-_*E,b=v*x-M*E,B=m*S-_*T,Z=m*x-M*T,k=_*x-M*S,tt=P*k-N*Z+R*B+F*b-z*D+L*H;return tt?(tt=1/tt,r[0]=(d*k-p*Z+g*B)*tt,r[1]=(l*Z-s*k-u*B)*tt,r[2]=(T*L-S*z+x*F)*tt,r[3]=(_*z-m*L-M*F)*tt,r[4]=(p*b-h*k-g*D)*tt,r[5]=(i*k-l*b+u*D)*tt,r[6]=(S*R-E*L-x*N)*tt,r[7]=(v*L-_*R+M*N)*tt,r[8]=(h*Z-d*b+g*H)*tt,r[9]=(s*b-i*Z-u*H)*tt,r[10]=(E*z-T*R+x*P)*tt,r[11]=(m*R-v*z-M*P)*tt,r[12]=(d*D-h*B-p*H)*tt,r[13]=(i*B-s*D+l*H)*tt,r[14]=(T*N-E*F-S*P)*tt,r[15]=(v*F-m*N+_*P)*tt,r):null}function y1(r){let t=r[0],i=r[1],s=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],_=r[11],M=r[12],E=r[13],T=r[14],S=r[15],x=t*h-i*u,P=t*d-s*u,N=t*p-l*u,R=i*d-s*h,F=i*p-l*h,z=s*p-l*d,L=g*E-v*M,H=g*T-m*M,D=g*S-_*M,b=v*T-m*E,B=v*S-_*E,Z=m*S-_*T;return x*Z-P*B+N*b+R*D-F*H+z*L}function z_(r,t,i){let s=t[0],l=t[1],u=t[2],h=t[3],d=t[4],p=t[5],g=t[6],v=t[7],m=t[8],_=t[9],M=t[10],E=t[11],T=t[12],S=t[13],x=t[14],P=t[15],N=i[0],R=i[1],F=i[2],z=i[3];return r[0]=N*s+R*d+F*m+z*T,r[1]=N*l+R*p+F*_+z*S,r[2]=N*u+R*g+F*M+z*x,r[3]=N*h+R*v+F*E+z*P,N=i[4],R=i[5],F=i[6],z=i[7],r[4]=N*s+R*d+F*m+z*T,r[5]=N*l+R*p+F*_+z*S,r[6]=N*u+R*g+F*M+z*x,r[7]=N*h+R*v+F*E+z*P,N=i[8],R=i[9],F=i[10],z=i[11],r[8]=N*s+R*d+F*m+z*T,r[9]=N*l+R*p+F*_+z*S,r[10]=N*u+R*g+F*M+z*x,r[11]=N*h+R*v+F*E+z*P,N=i[12],R=i[13],F=i[14],z=i[15],r[12]=N*s+R*d+F*m+z*T,r[13]=N*l+R*p+F*_+z*S,r[14]=N*u+R*g+F*M+z*x,r[15]=N*h+R*v+F*E+z*P,r}function kE(r,t,i){let s=i[0],l=i[1],u=i[2],h,d,p,g,v,m,_,M,E,T,S,x;return t===r?(r[12]=t[0]*s+t[4]*l+t[8]*u+t[12],r[13]=t[1]*s+t[5]*l+t[9]*u+t[13],r[14]=t[2]*s+t[6]*l+t[10]*u+t[14],r[15]=t[3]*s+t[7]*l+t[11]*u+t[15]):(h=t[0],d=t[1],p=t[2],g=t[3],v=t[4],m=t[5],_=t[6],M=t[7],E=t[8],T=t[9],S=t[10],x=t[11],r[0]=h,r[1]=d,r[2]=p,r[3]=g,r[4]=v,r[5]=m,r[6]=_,r[7]=M,r[8]=E,r[9]=T,r[10]=S,r[11]=x,r[12]=h*s+v*l+E*u+t[12],r[13]=d*s+m*l+T*u+t[13],r[14]=p*s+_*l+S*u+t[14],r[15]=g*s+M*l+x*u+t[15]),r}function qE(r,t,i){let s=i[0],l=i[1],u=i[2];return r[0]=t[0]*s,r[1]=t[1]*s,r[2]=t[2]*s,r[3]=t[3]*s,r[4]=t[4]*l,r[5]=t[5]*l,r[6]=t[6]*l,r[7]=t[7]*l,r[8]=t[8]*u,r[9]=t[9]*u,r[10]=t[10]*u,r[11]=t[11]*u,r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function YE(r,t,i,s){let l=s[0],u=s[1],h=s[2],d=Math.hypot(l,u,h),p,g,v,m,_,M,E,T,S,x,P,N,R,F,z,L,H,D,b,B,Z,k,tt,lt;return Math.abs(d)<FE?null:(d=1/d,l*=d,u*=d,h*=d,p=Math.sin(i),g=Math.cos(i),v=1-g,m=t[0],_=t[1],M=t[2],E=t[3],T=t[4],S=t[5],x=t[6],P=t[7],N=t[8],R=t[9],F=t[10],z=t[11],L=l*l*v+g,H=u*l*v+h*p,D=h*l*v-u*p,b=l*u*v-h*p,B=u*u*v+g,Z=h*u*v+l*p,k=l*h*v+u*p,tt=u*h*v-l*p,lt=h*h*v+g,r[0]=m*L+T*H+N*D,r[1]=_*L+S*H+R*D,r[2]=M*L+x*H+F*D,r[3]=E*L+P*H+z*D,r[4]=m*b+T*B+N*Z,r[5]=_*b+S*B+R*Z,r[6]=M*b+x*B+F*Z,r[7]=E*b+P*B+z*Z,r[8]=m*k+T*tt+N*lt,r[9]=_*k+S*tt+R*lt,r[10]=M*k+x*tt+F*lt,r[11]=E*k+P*tt+z*lt,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r)}function WE(r,t){return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function S1(r,t){let i=t[0],s=t[1],l=t[2],u=t[4],h=t[5],d=t[6],p=t[8],g=t[9],v=t[10];return r[0]=Math.hypot(i,s,l),r[1]=Math.hypot(u,h,d),r[2]=Math.hypot(p,g,v),r}function jE(r){let t=r[0],i=r[1],s=r[2],l=r[4],u=r[5],h=r[6],d=r[8],p=r[9],g=r[10];const v=t*t+i*i+s*s,m=l*l+u*u+h*h,_=d*d+p*p+g*g;return Math.sqrt(Math.max(v,m,_))}const M1=(function(){const r=[1,1,1];return function(t,i){let s=r;S1(s,i);let l=1/s[0],u=1/s[1],h=1/s[2],d=i[0]*l,p=i[1]*u,g=i[2]*h,v=i[4]*l,m=i[5]*u,_=i[6]*h,M=i[8]*l,E=i[9]*u,T=i[10]*h,S=d+m+T,x=0;return S>0?(x=Math.sqrt(S+1)*2,t[3]=.25*x,t[0]=(_-E)/x,t[1]=(M-g)/x,t[2]=(p-v)/x):d>m&&d>T?(x=Math.sqrt(1+d-m-T)*2,t[3]=(_-E)/x,t[0]=.25*x,t[1]=(p+v)/x,t[2]=(M+g)/x):m>T?(x=Math.sqrt(1+m-d-T)*2,t[3]=(M-g)/x,t[0]=(p+v)/x,t[1]=.25*x,t[2]=(_+E)/x):(x=Math.sqrt(1+T-d-m)*2,t[3]=(p-v)/x,t[0]=(M+g)/x,t[1]=(_+E)/x,t[2]=.25*x),t}})();function ZE(r,t,i,s){let l=Sl([r[0],r[1],r[2]]);const u=Sl([r[4],r[5],r[6]]),h=Sl([r[8],r[9],r[10]]);y1(r)<0&&(l=-l),i[0]=r[12],i[1]=r[13],i[2]=r[14];const p=r.slice(),g=1/l,v=1/u,m=1/h;p[0]*=g,p[1]*=g,p[2]*=g,p[4]*=v,p[5]*=v,p[6]*=v,p[8]*=m,p[9]*=m,p[10]*=m,M1(t,p),s[0]=l,s[1]=u,s[2]=h}function QE(r,t,i,s){const l=r,u=t[0],h=t[1],d=t[2],p=t[3],g=u+u,v=h+h,m=d+d,_=u*g,M=u*v,E=u*m,T=h*v,S=h*m,x=d*m,P=p*g,N=p*v,R=p*m,F=s[0],z=s[1],L=s[2];return l[0]=(1-(T+x))*F,l[1]=(M+R)*F,l[2]=(E-N)*F,l[3]=0,l[4]=(M-R)*z,l[5]=(1-(_+x))*z,l[6]=(S+P)*z,l[7]=0,l[8]=(E+N)*L,l[9]=(S-P)*L,l[10]=(1-(_+T))*L,l[11]=0,l[12]=i[0],l[13]=i[1],l[14]=i[2],l[15]=1,l}function KE(r,t){let i=t[0],s=t[1],l=t[2],u=t[3],h=i+i,d=s+s,p=l+l,g=i*h,v=s*h,m=s*d,_=l*h,M=l*d,E=l*p,T=u*h,S=u*d,x=u*p;return r[0]=1-m-E,r[1]=v+x,r[2]=_-S,r[3]=0,r[4]=v-x,r[5]=1-g-E,r[6]=M+T,r[7]=0,r[8]=_+S,r[9]=M-T,r[10]=1-g-m,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function JE(r,t,i,s,l){let u=1/Math.tan(t/2),h=1/(s-l);return r[0]=u/i,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=u,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(l+s)*h,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*l*s*h,r[15]=0,r}function $E(r,t,i,s,l,u,h){let d=1/(t-i),p=1/(s-l),g=1/(u-h);return r[0]=-2*d,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*p,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*g,r[11]=0,r[12]=(t+i)*d,r[13]=(l+s)*p,r[14]=(h+u)*g,r[15]=1,r}function tT(r,t,i,s){let l=t[0],u=t[1],h=t[2],d=s[0],p=s[1],g=s[2],v=l-i[0],m=u-i[1],_=h-i[2],M=v*v+m*m+_*_;M===0?_=1:(M=1/Math.sqrt(M),v*=M,m*=M,_*=M);let E=p*_-g*m,T=g*v-d*_,S=d*m-p*v;return M=E*E+T*T+S*S,M===0&&(g?d+=1e-6:p?g+=1e-6:p+=1e-6,E=p*_-g*m,T=g*v-d*_,S=d*m-p*v,M=E*E+T*T+S*S),M=1/Math.sqrt(M),E*=M,T*=M,S*=M,r[0]=E,r[1]=T,r[2]=S,r[3]=0,r[4]=m*S-_*T,r[5]=_*E-v*S,r[6]=v*T-m*E,r[7]=0,r[8]=v,r[9]=m,r[10]=_,r[11]=0,r[12]=l,r[13]=u,r[14]=h,r[15]=1,r}function B_(r,t,i){return r[0]=t[0]+i[0],r[1]=t[1]+i[1],r[2]=t[2]+i[2],r[3]=t[3]+i[3],r[4]=t[4]+i[4],r[5]=t[5]+i[5],r[6]=t[6]+i[6],r[7]=t[7]+i[7],r[8]=t[8]+i[8],r[9]=t[9]+i[9],r[10]=t[10]+i[10],r[11]=t[11]+i[11],r[12]=t[12]+i[12],r[13]=t[13]+i[13],r[14]=t[14]+i[14],r[15]=t[15]+i[15],r}function I_(r,t,i){return r[0]=t[0]-i[0],r[1]=t[1]-i[1],r[2]=t[2]-i[2],r[3]=t[3]-i[3],r[4]=t[4]-i[4],r[5]=t[5]-i[5],r[6]=t[6]-i[6],r[7]=t[7]-i[7],r[8]=t[8]-i[8],r[9]=t[9]-i[9],r[10]=t[10]-i[10],r[11]=t[11]-i[11],r[12]=t[12]-i[12],r[13]=t[13]-i[13],r[14]=t[14]-i[14],r[15]=t[15]-i[15],r}function eT(r,t,i){return r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i,r[3]=t[3]*i,r[4]=t[4]*i,r[5]=t[5]*i,r[6]=t[6]*i,r[7]=t[7]*i,r[8]=t[8]*i,r[9]=t[9]*i,r[10]=t[10]*i,r[11]=t[11]*i,r[12]=t[12]*i,r[13]=t[13]*i,r[14]=t[14]*i,r[15]=t[15]*i,r}class Ac extends Array{constructor(t=1,i=0,s=0,l=0,u=0,h=1,d=0,p=0,g=0,v=0,m=1,_=0,M=0,E=0,T=0,S=1){return super(t,i,s,l,u,h,d,p,g,v,m,_,M,E,T,S),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,i,s,l,u,h,d,p,g,v,m,_,M,E,T,S){return t.length?this.copy(t):(GE(this,t,i,s,l,u,h,d,p,g,v,m,_,M,E,T,S),this)}translate(t,i=this){return kE(this,i,t),this}rotate(t,i,s=this){return YE(this,s,t,i),this}scale(t,i=this){return qE(this,i,typeof t=="number"?[t,t,t]:t),this}add(t,i){return i?B_(this,t,i):B_(this,this,t),this}sub(t,i){return i?I_(this,t,i):I_(this,this,t),this}multiply(t,i){return t.length?i?z_(this,t,i):z_(this,this,t):eT(this,this,t),this}identity(){return VE(this),this}copy(t){return HE(this,t),this}fromPerspective({fov:t,aspect:i,near:s,far:l}={}){return JE(this,t,i,s,l),this}fromOrthogonal({left:t,right:i,bottom:s,top:l,near:u,far:h}){return $E(this,t,i,s,l,u,h),this}fromQuaternion(t){return KE(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return XE(this,t),this}compose(t,i,s){return QE(this,t,i,s),this}decompose(t,i,s){return ZE(this,t,i,s),this}getRotation(t){return M1(t,this),this}getTranslation(t){return WE(t,this),this}getScaling(t){return S1(t,this),this}getMaxScaleOnAxis(){return jE(this)}lookAt(t,i,s){return tT(this,t,i,s),this}determinant(){return y1(this)}fromArray(t,i=0){return this[0]=t[i],this[1]=t[i+1],this[2]=t[i+2],this[3]=t[i+3],this[4]=t[i+4],this[5]=t[i+5],this[6]=t[i+6],this[7]=t[i+7],this[8]=t[i+8],this[9]=t[i+9],this[10]=t[i+10],this[11]=t[i+11],this[12]=t[i+12],this[13]=t[i+13],this[14]=t[i+14],this[15]=t[i+15],this}toArray(t=[],i=0){return t[i]=this[0],t[i+1]=this[1],t[i+2]=this[2],t[i+3]=this[3],t[i+4]=this[4],t[i+5]=this[5],t[i+6]=this[6],t[i+7]=this[7],t[i+8]=this[8],t[i+9]=this[9],t[i+10]=this[10],t[i+11]=this[11],t[i+12]=this[12],t[i+13]=this[13],t[i+14]=this[14],t[i+15]=this[15],t}}function nT(r,t,i="YXZ"){return i==="XYZ"?(r[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(r[0]=Math.atan2(-t[9],t[10]),r[2]=Math.atan2(-t[4],t[0])):(r[0]=Math.atan2(t[6],t[5]),r[2]=0)):i==="YXZ"?(r[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(r[1]=Math.atan2(t[8],t[10]),r[2]=Math.atan2(t[1],t[5])):(r[1]=Math.atan2(-t[2],t[0]),r[2]=0)):i==="ZXY"?(r[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(r[1]=Math.atan2(-t[2],t[10]),r[2]=Math.atan2(-t[4],t[5])):(r[1]=0,r[2]=Math.atan2(t[1],t[0]))):i==="ZYX"?(r[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(r[0]=Math.atan2(t[6],t[10]),r[2]=Math.atan2(t[1],t[0])):(r[0]=0,r[2]=Math.atan2(-t[4],t[5]))):i==="YZX"?(r[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(r[0]=Math.atan2(-t[9],t[5]),r[1]=Math.atan2(-t[2],t[0])):(r[0]=0,r[1]=Math.atan2(t[8],t[10]))):i==="XZY"&&(r[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(r[0]=Math.atan2(t[6],t[5]),r[1]=Math.atan2(t[8],t[0])):(r[0]=Math.atan2(-t[9],t[10]),r[1]=0)),r}const F_=new Ac;let iT=class extends Array{constructor(t=0,i=t,s=t,l="YXZ"){super(t,i,s),this.order=l,this.onChange=()=>{},this._target=this;const u=["0","1","2"];return new Proxy(this,{set(h,d){const p=Reflect.set(...arguments);return p&&u.includes(d)&&h.onChange(),p}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this._target[0]=t,this.onChange()}set y(t){this._target[1]=t,this.onChange()}set z(t){this._target[2]=t,this.onChange()}set(t,i=t,s=t){return t.length?this.copy(t):(this._target[0]=t,this._target[1]=i,this._target[2]=s,this.onChange(),this)}copy(t){return this._target[0]=t[0],this._target[1]=t[1],this._target[2]=t[2],this.onChange(),this}reorder(t){return this._target.order=t,this.onChange(),this}fromRotationMatrix(t,i=this.order){return nT(this._target,t,i),this.onChange(),this}fromQuaternion(t,i=this.order,s){return F_.fromQuaternion(t),this._target.fromRotationMatrix(F_,i),s||this.onChange(),this}fromArray(t,i=0){return this._target[0]=t[i],this._target[1]=t[i+1],this._target[2]=t[i+2],this}toArray(t=[],i=0){return t[i]=this[0],t[i+1]=this[1],t[i+2]=this[2],t}};class aT{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ac,this.worldMatrix=new Ac,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new Vi,this.quaternion=new IE,this.scale=new Vi(1),this.rotation=new iT,this.up=new Vi(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(t,i=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,i&&t&&t.addChild(this,!1)}addChild(t,i=!0){~this.children.indexOf(t)||this.children.push(t),i&&t.setParent(this,!1)}removeChild(t,i=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),i&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let i=0,s=this.children.length;i<s;i++)this.children[i].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let i=0,s=this.children.length;i<s;i++)this.children[i].traverse(t)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,i=!1){i?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function rT(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r}function sT(r,t){let i=t[0],s=t[1],l=t[2],u=t[3],h=i+i,d=s+s,p=l+l,g=i*h,v=s*h,m=s*d,_=l*h,M=l*d,E=l*p,T=u*h,S=u*d,x=u*p;return r[0]=1-m-E,r[3]=v-x,r[6]=_+S,r[1]=v+x,r[4]=1-g-E,r[7]=M-T,r[2]=_-S,r[5]=M+T,r[8]=1-g-m,r}function oT(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function lT(r,t,i,s,l,u,h,d,p,g){return r[0]=t,r[1]=i,r[2]=s,r[3]=l,r[4]=u,r[5]=h,r[6]=d,r[7]=p,r[8]=g,r}function uT(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function cT(r,t){let i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=v*h-d*g,_=-v*u+d*p,M=g*u-h*p,E=i*m+s*_+l*M;return E?(E=1/E,r[0]=m*E,r[1]=(-v*s+l*g)*E,r[2]=(d*s-l*h)*E,r[3]=_*E,r[4]=(v*i-l*p)*E,r[5]=(-d*i+l*u)*E,r[6]=M*E,r[7]=(-g*i+s*p)*E,r[8]=(h*i-s*u)*E,r):null}function H_(r,t,i){let s=t[0],l=t[1],u=t[2],h=t[3],d=t[4],p=t[5],g=t[6],v=t[7],m=t[8],_=i[0],M=i[1],E=i[2],T=i[3],S=i[4],x=i[5],P=i[6],N=i[7],R=i[8];return r[0]=_*s+M*h+E*g,r[1]=_*l+M*d+E*v,r[2]=_*u+M*p+E*m,r[3]=T*s+S*h+x*g,r[4]=T*l+S*d+x*v,r[5]=T*u+S*p+x*m,r[6]=P*s+N*h+R*g,r[7]=P*l+N*d+R*v,r[8]=P*u+N*p+R*m,r}function fT(r,t,i){let s=t[0],l=t[1],u=t[2],h=t[3],d=t[4],p=t[5],g=t[6],v=t[7],m=t[8],_=i[0],M=i[1];return r[0]=s,r[1]=l,r[2]=u,r[3]=h,r[4]=d,r[5]=p,r[6]=_*s+M*h+g,r[7]=_*l+M*d+v,r[8]=_*u+M*p+m,r}function hT(r,t,i){let s=t[0],l=t[1],u=t[2],h=t[3],d=t[4],p=t[5],g=t[6],v=t[7],m=t[8],_=Math.sin(i),M=Math.cos(i);return r[0]=M*s+_*h,r[1]=M*l+_*d,r[2]=M*u+_*p,r[3]=M*h-_*s,r[4]=M*d-_*l,r[5]=M*p-_*u,r[6]=g,r[7]=v,r[8]=m,r}function dT(r,t,i){let s=i[0],l=i[1];return r[0]=s*t[0],r[1]=s*t[1],r[2]=s*t[2],r[3]=l*t[3],r[4]=l*t[4],r[5]=l*t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function pT(r,t){let i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=t[9],_=t[10],M=t[11],E=t[12],T=t[13],S=t[14],x=t[15],P=i*d-s*h,N=i*p-l*h,R=i*g-u*h,F=s*p-l*d,z=s*g-u*d,L=l*g-u*p,H=v*T-m*E,D=v*S-_*E,b=v*x-M*E,B=m*S-_*T,Z=m*x-M*T,k=_*x-M*S,tt=P*k-N*Z+R*B+F*b-z*D+L*H;return tt?(tt=1/tt,r[0]=(d*k-p*Z+g*B)*tt,r[1]=(p*b-h*k-g*D)*tt,r[2]=(h*Z-d*b+g*H)*tt,r[3]=(l*Z-s*k-u*B)*tt,r[4]=(i*k-l*b+u*D)*tt,r[5]=(s*b-i*Z-u*H)*tt,r[6]=(T*L-S*z+x*F)*tt,r[7]=(S*R-E*L-x*N)*tt,r[8]=(E*z-T*R+x*P)*tt,r):null}class mT extends Array{constructor(t=1,i=0,s=0,l=0,u=1,h=0,d=0,p=0,g=1){return super(t,i,s,l,u,h,d,p,g),this}set(t,i,s,l,u,h,d,p,g){return t.length?this.copy(t):(lT(this,t,i,s,l,u,h,d,p,g),this)}translate(t,i=this){return fT(this,i,t),this}rotate(t,i=this){return hT(this,i,t),this}scale(t,i=this){return dT(this,i,t),this}multiply(t,i){return i?H_(this,t,i):H_(this,this,t),this}identity(){return uT(this),this}copy(t){return oT(this,t),this}fromMatrix4(t){return rT(this,t),this}fromQuaternion(t){return sT(this,t),this}fromBasis(t,i,s){return this.set(t[0],t[1],t[2],i[0],i[1],i[2],s[0],s[1],s[2]),this}inverse(t=this){return cT(this,t),this}getNormalMatrix(t){return pT(this,t),this}}let gT=0,G_=class extends aT{constructor(t,{geometry:i,program:s,mode:l=t.TRIANGLES,frustumCulled:u=!0,renderOrder:h=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=gT++,this.geometry=i,this.program=s,this.mode=l,this.frustumCulled=u,this.renderOrder=h,this.modelViewMatrix=new Ac,this.normalMatrix=new mT,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}));let i=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:i}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:t}))}};const V_=new Uint8Array(4);function X_(r){return(r&r-1)===0}let vT=1,Rc=class{constructor(t,{image:i,target:s=t.TEXTURE_2D,type:l=t.UNSIGNED_BYTE,format:u=t.RGBA,internalFormat:h=u,wrapS:d=t.CLAMP_TO_EDGE,wrapT:p=t.CLAMP_TO_EDGE,wrapR:g=t.CLAMP_TO_EDGE,generateMipmaps:v=s===(t.TEXTURE_2D||t.TEXTURE_CUBE_MAP),minFilter:m=v?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:_=t.LINEAR,premultiplyAlpha:M=!1,unpackAlignment:E=4,flipY:T=s==(t.TEXTURE_2D||t.TEXTURE_3D),anisotropy:S=0,level:x=0,width:P,height:N=P,length:R=1}={}){this.gl=t,this.id=vT++,this.image=i,this.target=s,this.type=l,this.format=u,this.internalFormat=h,this.minFilter=m,this.magFilter=_,this.wrapS=d,this.wrapT=p,this.wrapR=g,this.generateMipmaps=v,this.premultiplyAlpha=M,this.unpackAlignment=E,this.flipY=T,this.anisotropy=Math.min(S,this.gl.renderer.parameters.maxAnisotropy),this.level=x,this.width=P,this.height=N,this.length=R,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const i=!(this.image===this.store.image&&!this.needsUpdate);if((i||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!i){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,this.level,this.internalFormat,this.format,this.type,this.image[s]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let s=0;s<this.image.length;s++)this.gl.compressedTexImage2D(this.target,s,this.internalFormat,this.image[s].width,this.image[s].height,0,this.image[s].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!X_(this.image.width)||!X_(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,V_);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,V_);this.store.image=this.image}}},_T=class{constructor(t,{width:i=t.canvas.width,height:s=t.canvas.height,target:l=t.FRAMEBUFFER,color:u=1,depth:h=!0,stencil:d=!1,depthTexture:p=!1,wrapS:g=t.CLAMP_TO_EDGE,wrapT:v=t.CLAMP_TO_EDGE,wrapR:m=t.CLAMP_TO_EDGE,minFilter:_=t.LINEAR,magFilter:M=_,type:E=t.UNSIGNED_BYTE,format:T=t.RGBA,internalFormat:S=T,unpackAlignment:x,premultiplyAlpha:P}={}){this.gl=t,this.width=i,this.height=s,this.depth=h,this.stencil=d,this.buffer=this.gl.createFramebuffer(),this.target=l,this.gl.renderer.bindFramebuffer(this),this.textures=[];const N=[];for(let R=0;R<u;R++)this.textures.push(new Rc(t,{width:i,height:s,wrapS:g,wrapT:v,wrapR:m,minFilter:_,magFilter:M,type:E,format:T,internalFormat:S,unpackAlignment:x,premultiplyAlpha:P,flipY:!1,generateMipmaps:!1})),this.textures[R].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+R,this.gl.TEXTURE_2D,this.textures[R].texture,0),N.push(this.gl.COLOR_ATTACHMENT0+R);N.length>1&&this.gl.renderer.drawBuffers(N),this.texture=this.textures[0],p&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new Rc(t,{width:i,height:s,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:t.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(h&&!d&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),d&&!h&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),h&&d&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(t,i){if(!(this.width===t&&this.height===i)){this.width=t,this.height=i,this.gl.renderer.bindFramebuffer(this);for(let s=0;s<this.textures.length;s++)this.textures[s].width=t,this.textures[s].height=i,this.textures[s].needsUpdate=!0,this.textures[s].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+s,this.gl.TEXTURE_2D,this.textures[s].texture,0);this.depthTexture?(this.depthTexture.width=t,this.depthTexture.height=i,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,i)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,t,i)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,t,i))),this.gl.renderer.bindFramebuffer({target:this.target})}}},xT=class extends hE{constructor(t,{attributes:i={}}={}){Object.assign(i,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,i)}};const yT="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop",ST={bayer:0,noise:1,lines:2},k_={atkinson:[[1,0,1/8],[2,0,1/8],[-1,1,1/8],[0,1,1/8],[1,1,1/8],[0,2,1/8]],floyd:[[1,0,7/16],[-1,1,3/16],[0,1,5/16],[1,1,1/16]]},q_=.5,Y_=4,W_=1.2,j_=1.6,MT=1100,gd=r=>{let t=String(r||"").replace("#","");t.length===3&&(t=t.replace(/./g,s=>s+s));const i=parseInt(t.slice(0,6),16);return Number.isNaN(i)?[0,0,0]:[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]},ET=(r,t,i,s,l)=>{const u=r/t/(i/s);return l?u>1?[u,1]:[1,1/u]:u>1?[1,1/u]:[u,1]},TT=(r,t,i)=>[t*(.5+.33*Math.sin(r*.53)+.08*Math.sin(r*1.31+.6)),i*(.5+.28*Math.sin(r*.71+1.1)+.07*Math.cos(r*1.57))],bT=(r,t)=>{r.canvas.width=32,r.canvas.height=32,r.drawImage(t,0,0,32,32);const s=r.getImageData(0,0,32,32).data,l=[0,0,0],u=[0,0,0];let h=0;for(let g=0;g<32;g++)for(let v=0;v<32;v++)if(!(v>0&&g>0&&v<31&&g<31)){for(let m=0;m<3;m++){const _=s[(g*32+v)*4+m]/255;l[m]+=_,u[m]+=_*_}h++}const d=[l[0]/h,l[1]/h,l[2]/h],p=d.reduce((g,v,m)=>g+Math.sqrt(Math.max(0,u[m]/h-v*v)),0)/3;return{matte:d,plain:p<.06}};let vd=null;const AT=()=>{if(vd)return vd;const r=64,t=r*r,i=r-1,s=[];for(let T=-6;T<=6;T++)for(let S=-6;S<=6;S++)s.push(S,T,Math.exp(-(S*S+T*T)/4.5));const l=new Float32Array(t),u=new Uint8Array(t),h=(T,S)=>{const x=T%r,P=(T-x)/r;for(let N=0;N<s.length;N+=3)l[(P+s[N+1]&i)*r+(x+s[N]&i)]+=S*s[N+2]},d=(T,S)=>{let x=0,P=S?-1/0:1/0;for(let N=0;N<t;N++)u[N]===T&&(S?l[N]>P:l[N]<P)&&(P=l[N],x=N);return x};let p=7;const g=()=>(p=p*16807%2147483647,p/2147483647),v=Math.round(t*.1);for(let T=0;T<v;){const S=Math.floor(g()*t);u[S]||(u[S]=1,h(S,1),T++)}for(let T=0;T<t;T++){const S=d(1,!0);u[S]=0,h(S,-1);const x=d(0,!1);if(u[x]=1,h(x,1),x===S)break}const m=u.slice(),_=l.slice(),M=new Uint16Array(t);for(let T=v-1;T>=0;T--){const S=d(1,!0);u[S]=0,h(S,-1),M[S]=T}u.set(m),l.set(_);for(let T=v;T<t;T++){const S=d(0,!1);u[S]=1,h(S,1),M[S]=T}const E=new Uint8Array(t*4);for(let T=0;T<t;T++){const S=Math.floor(M[T]/t*256);E[T*4]=S,E[T*4+1]=S,E[T*4+2]=S,E[T*4+3]=255}return vd=E,E},RT=(r,t,i,s,l,u,h)=>{const d=u?3:1,p=new Float32Array(t*i*d);for(let m=0;m<t*i;m++){const _=r[m*4]/255,M=r[m*4+1]/255,E=r[m*4+2]/255;u?(p[m*3]=h(_),p[m*3+1]=h(M),p[m*3+2]=h(E)):p[m]=h(.2126*_+.7152*M+.0722*E)}const g=l-1,v=new Uint8Array(t*i*4);for(let m=0;m<i;m++){const _=m&1?-1:1;for(let M=0;M<t;M++){const E=_>0?M:t-1-M,T=m*t+E;for(let S=0;S<d;S++){const x=p[T*d+S],P=Math.min(g,Math.max(0,Math.round(x*g)))/g,N=x-P,R=Math.round(P*255);u?v[T*4+S]=R:v[T*4]=v[T*4+1]=v[T*4+2]=R;for(let F=0;F<s.length;F++){const z=E+s[F][0]*_,L=m+s[F][1];z<0||z>=t||L>=i||(p[(L*t+z)*d+S]+=N*s[F][2])}}v[T*4+3]=255}}return v},CT=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,wT=`#version 300 es
precision highp float;

uniform sampler2D tPrev;
uniform vec2 uSize;
uniform vec2 uFrom;
uniform vec2 uTo;
uniform float uRadius;
uniform float uSoftness;
uniform float uStrength;
uniform float uFade;
uniform float uHold;

in vec2 vUv;
out vec4 fragColor;

float strokeDistance(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float h = clamp(dot(p - a, ab) / max(dot(ab, ab), 0.0001), 0.0, 1.0);
  return length(p - a - ab * h);
}

void main() {
  vec2 p = vec2(vUv.x, 1.0 - vUv.y) * uSize;
  float trail = max(texture(tPrev, vUv).r - uFade, 0.0);
  float band = max(uRadius * uSoftness, 1.0) * uHold;
  float d = strokeDistance(p, uFrom, uTo);
  trail = max(trail, clamp((uRadius - d) / band, 0.0, 1.0) * uStrength);
  fragColor = vec4(trail, 0.0, 0.0, 1.0);
}
`,DT=`#version 300 es
precision highp float;
precision highp int;

uniform sampler2D tImage;
uniform sampler2D tMask;
uniform sampler2D tNoise;
uniform sampler2D tDiffused;
uniform vec2 uResolution;
uniform vec2 uCover;
uniform float uLod;
uniform float uCell;
uniform int uPattern;
uniform int uPalette;
uniform float uLevels;
uniform vec3 uInk;
uniform vec3 uPaper;
uniform vec3 uRimColor;
uniform float uRim;
uniform float uContrast;
uniform float uBrightness;
uniform float uReverse;
uniform float uIntro;
uniform float uHold;
uniform vec3 uMatte;
uniform float uKey;
uniform vec2 uSize;
uniform vec4 uBursts[4];
uniform float uBurstWidth;

in vec2 vUv;
out vec4 fragColor;

float bayer(vec2 cell) {
  ivec2 p = ivec2(mod(cell, 8.0));
  int v = p.x ^ p.y;
  int m = ((v & 1) << 5) | ((p.y & 1) << 4) | ((v & 2) << 2) | ((p.y & 2) << 1) | ((v & 4) >> 1) | ((p.y & 4) >> 2);
  return (float(m) + 0.5) / 64.0;
}

float blueNoise(vec2 cell) {
  return (texelFetch(tNoise, ivec2(mod(cell, 64.0)), 0).r * 255.0 + 0.5) / 256.0;
}

float engraving(vec2 cell) {
  float period = 6.0;
  float f = (mod(cell.x + cell.y, period) + 0.5) / period;
  return clamp(abs(f * 2.0 - 1.0) + (bayer(cell) - 0.5) * (2.0 / period), 0.0, 1.0);
}

vec2 imageUv(vec2 uv) {
  return (uv - 0.5) * uCover + 0.5;
}

float within(vec2 p) {
  vec2 s = step(vec2(0.0), p) * step(p, vec2(1.0));
  return s.x * s.y;
}

vec3 grade(vec3 c) {
  return pow(clamp((c - 0.5) * uContrast + 0.5 + uBrightness, 0.0, 1.0), vec3(1.6));
}

float shockwave(vec2 p) {
  float value = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 burst = uBursts[i];
    if (burst.w <= 0.0) continue;
    float offset = distance(p, burst.xy) - burst.z;
    float edge = offset > 0.0 ? offset / (uBurstWidth * 0.35) : -offset / uBurstWidth;
    value = max(value, clamp(1.0 - edge, 0.0, 1.0) * burst.w);
  }
  return value;
}

vec3 toned(vec3 c) {
  return uPalette == 1 ? grade(c) : grade(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))));
}

vec3 quantize(vec3 v, float t) {
  float steps = max(uLevels - 1.0, 1.0);
  vec3 s = v * steps;
  vec3 base = floor(s);
  return min(base + step(vec3(t), s - base), vec3(steps)) / steps;
}

void main() {
  vec2 px = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y);
  vec2 cell = floor(px / uCell);
  vec2 center = (cell + 0.5) * uCell;
  vec2 cellUv = vec2(center.x / uResolution.x, 1.0 - center.y / uResolution.y);

  vec2 sampleUv = imageUv(cellUv);
  float framed = within(sampleUv);
  vec3 level;
  if (uPattern == 3) {
    level = texelFetch(tDiffused, ivec2(cell), 0).rgb;
  } else {
    vec3 c = mix(uMatte, textureLod(tImage, sampleUv, uLod).rgb, framed);
    float t = uPattern == 1 ? blueNoise(cell) : (uPattern == 2 ? engraving(cell) : bayer(cell));
    level = quantize(toned(c), t);
  }

  vec3 color = mix(uInk, mix(uInk, uPaper, level), max(framed, uKey));
  vec3 backdrop = mix(uInk, uPaper, toned(uMatte));
  vec2 photoUv = imageUv(vUv);
  vec3 raw = texture(tImage, photoUv).rgb;
  float plain = uKey * (1.0 - smoothstep(0.05, 0.22, distance(raw, uMatte)));
  vec3 photo = mix(mix(uInk, backdrop, uKey), mix(raw, backdrop, plain), within(photoUv));

  vec2 point = vec2(cellUv.x, 1.0 - cellUv.y) * uSize;
  float mask = max(clamp(texture(tMask, cellUv).r * uHold, 0.0, 1.0), shockwave(point));
  float shown = mix(mask, 1.0 - mask, uReverse);
  float order = bayer(cell.yx);
  float low = order * (1.0 - uRim);
  color = mix(color, uRimColor, step(low, shown) * step(0.001, uRim));
  color = mix(color, photo, step(low + uRim, shown));

  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  float spread = length((cellUv - 0.5) * aspect) / length(aspect * 0.5);
  float appear = step(spread * 0.72 + bayer(cell + vec2(3.0, 5.0)) * 0.28, uIntro * 1.001);
  fragColor = vec4(mix(uInk, color, appear), 1.0);
}
`,UT=({src:r=yT,fit:t="contain",pattern:i="floyd",pixelSize:s=2,levels:l=2,palette:u="duotone",inkColor:h="#120f17",paperColor:d="#f4f1ea",contrast:p=1.15,brightness:g=0,revealRadius:v=200,softness:m=.6,linger:_=1,rimColor:M="#a78bfa",rim:E=0,reverse:T=!1,wander:S=!1,clickBurst:x=!0,className:P="",style:N})=>{const R=ut.useRef(null),F=ut.useRef(null),z=ut.useRef(()=>{});return ut.useEffect(()=>{F.current={fit:t,pattern:i,pixelSize:s,levels:l,palette:u,inkColor:h,paperColor:d,contrast:p,brightness:g,revealRadius:v,softness:m,linger:_,rimColor:M,rim:E,reverse:T,wander:S,clickBurst:x},z.current()}),ut.useEffect(()=>{var te;const L=R.current;if(!L)return;const H=(te=window.matchMedia)==null?void 0:te.call(window,"(prefers-reduced-motion: reduce)").matches,D=new xE({dpr:Math.min(window.devicePixelRatio||1,2),alpha:!1,antialias:!1}),b=D.gl,B=b.canvas;B.style.display="block",B.style.width="100%",B.style.height="100%",L.appendChild(B);const Z=D.isWebgl2&&!!D.getExtension("EXT_color_buffer_float"),k=new xT(b),tt=()=>new Rc(b,{image:new Uint8Array(4),width:1,height:1,generateMipmaps:!1,flipY:!1,minFilter:b.NEAREST,magFilter:b.NEAREST}),lt=new Rc(b,{minFilter:b.LINEAR_MIPMAP_LINEAR,magFilter:b.LINEAR}),q=tt(),it=tt(),Y=(Tt,zt)=>new _T(b,{width:Tt,height:zt,depth:!1,type:Z?b.HALF_FLOAT:b.UNSIGNED_BYTE,internalFormat:Z?b.RGBA16F:b.RGBA,minFilter:b.LINEAR,magFilter:b.LINEAR}),bt=Tt=>{b.deleteFramebuffer(Tt.buffer),b.deleteTexture(Tt.texture.texture)};let vt=[Y(2,2),Y(2,2)];const Mt={tPrev:{value:vt[0].texture},uSize:{value:[1,1]},uFrom:{value:[0,0]},uTo:{value:[0,0]},uRadius:{value:1},uSoftness:{value:.5},uStrength:{value:0},uFade:{value:1},uHold:{value:j_}},Dt={tImage:{value:lt},tMask:{value:vt[0].texture},tNoise:{value:q},tDiffused:{value:it},uResolution:{value:[1,1]},uCover:{value:[1,1]},uLod:{value:0},uCell:{value:3},uPattern:{value:0},uPalette:{value:0},uLevels:{value:2},uInk:{value:[0,0,0]},uPaper:{value:[1,1,1]},uRimColor:{value:[1,1,1]},uRim:{value:0},uContrast:{value:1},uBrightness:{value:0},uReverse:{value:0},uIntro:{value:0},uHold:{value:j_},uMatte:{value:[0,0,0]},uKey:{value:0},uSize:{value:[1,1]},uBursts:{value:Array.from({length:Y_*4},()=>0)},uBurstWidth:{value:60}},fe=(Tt,zt)=>new pE(b,{vertex:CT,fragment:Tt,uniforms:zt,depthTest:!1,depthWrite:!1}),U=new G_(b,{geometry:k,program:fe(wT,Mt)}),W=new G_(b,{geometry:k,program:fe(DT,Dt)}),pt=document.createElement("canvas"),ft=pt.getContext("2d",{willReadFrequently:!0});let xt=null,Lt=0,It="",Ct=!1,Ut=1,re=1,G=!0,Ve=0,ee=performance.now(),se=0,Pt=0,ve=0;const Xt={x:0,y:0,inside:!1,fresh:!0,placed:!1},O={x:0,y:0,px:0,py:0},C=[],st=()=>{Ut=Math.max(1,L.clientWidth),re=Math.max(1,L.clientHeight),D.setSize(Ut,re),Dt.uResolution.value=[B.width,B.height],Mt.uSize.value=[Ut,re],Dt.uSize.value=[Ut,re];const Tt=Math.max(2,Math.round(Ut*q_)),zt=Math.max(2,Math.round(re*q_));(Tt!==vt[0].width||zt!==vt[0].height)&&(vt.forEach(bt),vt=[Y(Tt,zt),Y(Tt,zt)]),Xt.placed||(Xt.x=Ut/2,Xt.y=re/2)},Et=(Tt,zt)=>{if(!xt||!ft)return;const ue=Math.ceil(B.width/Tt),ge=Math.ceil(B.height/Tt),V=[zt.pattern,zt.levels,zt.palette,zt.contrast,zt.brightness,zt.fit,ue,ge,B.width,B.height].join("|");if(V===It)return;It=V;const[Ht,ht]=Dt.uCover.value,At=xt.naturalWidth,jt=xt.naturalHeight;pt.width=ue,pt.height=ge,ft.imageSmoothingEnabled=!0,ft.imageSmoothingQuality="high";const[Zt,he,We]=Dt.uMatte.value;ft.fillStyle=`rgb(${Zt*255}, ${he*255}, ${We*255})`,ft.fillRect(0,0,ue,ge);const Je=(.5-.5*Ht)*At,wt=(.5-.5*ht)*jt,_t=ue*Tt/B.width*Ht*At,Ft=ge*Tt/B.height*ht*jt,oe=Math.max(Je,0),mt=Math.max(wt,0),Ee=Math.min(Je+_t,At),Ue=Math.min(wt+Ft,jt);Ee>oe&&Ue>mt&&ft.drawImage(xt,oe,mt,Ee-oe,Ue-mt,(oe-Je)/_t*ue,(mt-wt)/Ft*ge,(Ee-oe)/_t*ue,(Ue-mt)/Ft*ge);const Te=ln=>Math.pow(Math.min(1,Math.max(0,(ln-.5)*zt.contrast+.5+zt.brightness)),1.6),Xe=ft.getImageData(0,0,ue,ge).data;it.image=RT(Xe,ue,ge,k_[zt.pattern],zt.levels,zt.palette==="rgb",Te),it.width=ue,it.height=ge,it.needsUpdate=!0},Rt=Tt=>{Ve=0;const zt=F.current;if(!zt)return;const ue=Math.min(.05,Math.max(0,(Tt-ee)/1e3));ee=Tt;const ge=zt.wander&&!H;let V=Xt.x,Ht=Xt.y;if(!Xt.inside&&ge){ve=Math.min(1,ve+ue/1.2);const[_t,Ft]=TT(Tt/1e3,Ut,re),oe=ve*ve*(3-2*ve);V+=(_t-V)*oe,Ht+=(Ft-Ht)*oe}else ve=0;if(Pt+=((Xt.inside||ge?1:0)-Pt)*(1-Math.exp(-ue/.16)),Xt.fresh)O.x=O.px=V,O.y=O.py=Ht,Xt.fresh=!1;else{const _t=1-Math.exp(-ue/.035);O.x+=(V-O.x)*_t,O.y+=(Ht-O.y)*_t}const ht=Dt.uBursts.value;ht.fill(0);for(let _t=C.length-1;_t>=0;_t--)(Tt-C[_t].start)/1e3>=W_&&C.splice(_t,1);C.forEach((_t,Ft)=>{const oe=Math.max(0,(Tt-_t.start)/1e3/W_),mt=Math.hypot(Math.max(_t.x,Ut-_t.x),Math.max(_t.y,re-_t.y))+Dt.uBurstWidth.value;ht[Ft*4]=_t.x,ht[Ft*4+1]=_t.y,ht[Ft*4+2]=mt*Math.sin(oe*Math.PI/2),ht[Ft*4+3]=1-oe*oe*oe}),Pt>.002&&(se=Tt+zt.linger*1e3+150);const At=Z?0:1.5/255,jt=zt.linger>0?ue/zt.linger:1;Mt.tPrev.value=vt[0].texture,Mt.uFrom.value=[O.px,O.py],Mt.uTo.value=[O.x,O.y],Mt.uRadius.value=zt.revealRadius*(.45+.55*Pt),Mt.uSoftness.value=zt.softness,Mt.uStrength.value=Pt,Mt.uFade.value=Math.max(jt,At),Dt.uBurstWidth.value=Math.max(60,zt.revealRadius*.9),D.render({scene:U,target:vt[1]}),vt.reverse(),O.px=O.x,O.py=O.y;const Zt=Math.max(1,Math.round(zt.pixelSize*D.dpr));xt&&(Dt.uCover.value=ET(B.width,B.height,xt.naturalWidth,xt.naturalHeight,zt.fit==="contain"));let he=ST[zt.pattern]??0;if(k_[zt.pattern]&&(he=0,xt&&!Ct))try{Et(Zt,zt),he=3}catch{Ct=!0}he===1&&q.width!==64&&(q.image=AT(),q.width=64,q.height=64,q.needsUpdate=!0);const We=xt?Dt.uCover.value[0]*xt.naturalWidth/B.width:1;Dt.tMask.value=vt[0].texture,Dt.uCell.value=Zt,Dt.uLod.value=Math.log2(Math.max(Zt*We,1)),Dt.uPattern.value=he,Dt.uPalette.value=zt.palette==="rgb"?1:0,Dt.uLevels.value=Math.max(2,Math.round(zt.levels)),Dt.uInk.value=gd(zt.inkColor),Dt.uPaper.value=gd(zt.paperColor),Dt.uRimColor.value=gd(zt.rimColor),Dt.uRim.value=Math.min(Math.max(zt.rim,0),.95),Dt.uContrast.value=zt.contrast,Dt.uBrightness.value=zt.brightness,Dt.uReverse.value=zt.reverse?1:0;const Je=xt?Math.min(1,(Tt-Lt)/MT):0;Dt.uIntro.value=1-Math.pow(1-Je,2),D.render({scene:W}),(Xt.inside||ge||Pt>.002||C.length>0||Tt<se||xt&&Je<1)&&G&&(Ve=requestAnimationFrame(Rt))},gt=()=>{Ve||!G||(ee=performance.now(),Ve=requestAnimationFrame(Rt))};z.current=gt;const Kt=new Image;Kt.crossOrigin="anonymous",Kt.decoding="async",Kt.onload=()=>{xt=Kt,lt.image=Kt;try{if(ft){const Tt=bT(ft,Kt);Dt.uMatte.value=Tt.matte,Dt.uKey.value=Tt.plain?1:0}}catch{}Lt=performance.now(),gt()},Kt.src=r;const Gt=Tt=>{const zt=L.getBoundingClientRect();Xt.x=Tt.clientX-zt.left,Xt.y=Tt.clientY-zt.top,Xt.placed=!0},kt=Tt=>{Gt(Tt),Xt.inside||(Xt.inside=!0,Xt.fresh=!0),gt()},xe=()=>{Xt.inside=!1,gt()},Ot=Tt=>{var zt;kt(Tt),!(!((zt=F.current)!=null&&zt.clickBurst)||Tt.pointerType==="mouse"&&Tt.button!==0)&&(C.push({x:Xt.x,y:Xt.y,start:performance.now()}),C.length>Y_&&C.shift())};L.addEventListener("pointermove",kt,{passive:!0}),L.addEventListener("pointerenter",kt,{passive:!0}),L.addEventListener("pointerdown",Ot,{passive:!0}),L.addEventListener("pointerleave",xe,{passive:!0}),L.addEventListener("pointercancel",xe,{passive:!0});const qt=new ResizeObserver(()=>{st(),gt()});qt.observe(L);const $t=new IntersectionObserver(([Tt])=>{G=Tt.isIntersecting,gt()});return $t.observe(L),st(),gt(),()=>{var Tt;cancelAnimationFrame(Ve),z.current=()=>{},qt.disconnect(),$t.disconnect(),Kt.onload=null,L.removeEventListener("pointermove",kt),L.removeEventListener("pointerenter",kt),L.removeEventListener("pointerdown",Ot),L.removeEventListener("pointerleave",xe),L.removeEventListener("pointercancel",xe),(Tt=b.getExtension("WEBGL_lose_context"))==null||Tt.loseContext(),B.parentNode&&B.parentNode.removeChild(B)}},[r]),rt.jsx("div",{ref:R,className:`dither-veil ${P}`.trim(),style:N})},NT=({children:r,color:t="#5227FF",speed:i=1,chaos:s=.12,borderRadius:l=24,className:u,style:h})=>{const d=ut.useRef(null),p=ut.useRef(null),g=ut.useRef(null),v=ut.useRef(0),m=ut.useRef(0),_=ut.useCallback(P=>Math.sin(P*12.9898)*43758.5453%1,[]),M=ut.useCallback((P,N)=>{const R=Math.floor(P),F=Math.floor(N),z=P-R,L=N-F,H=_(R+F*57),D=_(R+1+F*57),b=_(R+(F+1)*57),B=_(R+1+(F+1)*57),Z=z*z*(3-2*z),k=L*L*(3-2*L);return H*(1-Z)*(1-k)+D*Z*(1-k)+b*(1-Z)*k+B*Z*k},[_]),E=ut.useCallback((P,N,R,F,z,L,H,D,b)=>{let B=0,Z=z,k=L;for(let tt=0;tt<N;tt++){let lt=Z;tt===0&&(lt*=b),B+=lt*M(k*P+D*100,H*k*.3),k*=R,Z*=F}return B},[M]),T=ut.useCallback((P,N,R,F,z,L)=>{const H=F+L*z;return{x:P+R*Math.cos(H),y:N+R*Math.sin(H)}},[]),S=ut.useCallback((P,N,R,F,z,L)=>{const H=F-2*L,D=z-2*L,b=Math.PI*L/2,B=2*H+2*D+4*b,Z=P*B;let k=0;if(Z<=k+H){const lt=(Z-k)/H;return{x:N+L+lt*H,y:R}}if(k+=H,Z<=k+b){const lt=(Z-k)/b;return T(N+F-L,R+L,L,-Math.PI/2,Math.PI/2,lt)}if(k+=b,Z<=k+D){const lt=(Z-k)/D;return{x:N+F,y:R+L+lt*D}}if(k+=D,Z<=k+b){const lt=(Z-k)/b;return T(N+F-L,R+z-L,L,0,Math.PI/2,lt)}if(k+=b,Z<=k+H){const lt=(Z-k)/H;return{x:N+F-L-lt*H,y:R+z}}if(k+=H,Z<=k+b){const lt=(Z-k)/b;return T(N+L,R+z-L,L,Math.PI/2,Math.PI/2,lt)}if(k+=b,Z<=k+D){const lt=(Z-k)/D;return{x:N,y:R+z-L-lt*D}}k+=D;const tt=(Z-k)/b;return T(N+L,R+L,L,Math.PI,Math.PI/2,tt)},[T]);ut.useEffect(()=>{const P=d.current,N=p.current;if(!P||!N)return;const R=P.getContext("2d");if(!R)return;const F=10,z=1.6,L=.7,H=s,D=10,b=0,B=60,Z=60,k=()=>{const bt=N.getBoundingClientRect(),vt=bt.width+Z*2,Mt=bt.height+Z*2,Dt=Math.min(window.devicePixelRatio||1,2);return P.width=vt*Dt,P.height=Mt*Dt,P.style.width=`${vt}px`,P.style.height=`${Mt}px`,R.scale(Dt,Dt),{width:vt,height:Mt}};let{width:tt,height:lt}=k(),q=Math.min(window.devicePixelRatio||1,2);const it=bt=>{if(!P||!R)return;const vt=Math.min(window.devicePixelRatio||1,2);if(vt!==q){q=vt;const Ct=k();tt=Ct.width,lt=Ct.height}const Mt=(bt-m.current)/1e3;v.current+=Mt*i,m.current=bt,R.setTransform(1,0,0,1,0,0),R.clearRect(0,0,P.width,P.height),R.scale(vt,vt),R.strokeStyle=t,R.lineWidth=1,R.lineCap="round",R.lineJoin="round";const Dt=B,fe=Z,U=Z,W=tt-2*Z,pt=lt-2*Z,ft=Math.min(W,pt)/2,xt=Math.min(l,ft),Lt=2*(W+pt)+2*Math.PI*xt,It=Math.floor(Lt/2);R.beginPath();for(let Ct=0;Ct<=It;Ct++){const Ut=Ct/It,re=S(Ut,fe,U,W,pt,xt),G=E(Ut*8,F,z,L,H,D,v.current,0,b),Ve=E(Ut*8,F,z,L,H,D,v.current,1,b),ee=re.x+G*Dt,se=re.y+Ve*Dt;Ct===0?R.moveTo(ee,se):R.lineTo(ee,se)}R.closePath(),R.stroke(),g.current=requestAnimationFrame(it)},Y=new ResizeObserver(()=>{const bt=k();tt=bt.width,lt=bt.height});return Y.observe(N),g.current=requestAnimationFrame(it),()=>{g.current&&cancelAnimationFrame(g.current),Y.disconnect()}},[t,i,s,l,E,S]);const x={"--electric-border-color":t,borderRadius:l};return rt.jsxs("div",{ref:p,className:`electric-border ${u??""}`,style:{...x,...h},children:[rt.jsx("div",{className:"eb-canvas-container",children:rt.jsx("canvas",{ref:d,className:"eb-canvas"})}),rt.jsxs("div",{className:"eb-layers",children:[rt.jsx("div",{className:"eb-glow-1"}),rt.jsx("div",{className:"eb-glow-2"}),rt.jsx("div",{className:"eb-background-glow"})]}),rt.jsx("div",{className:"eb-content",children:r})]})},ro={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},_d=r=>typeof r=="number"?`${r}px`:r??void 0,LT=(r,t,i)=>{ut.useEffect(()=>{if(!window.ResizeObserver){const l=()=>r();return window.addEventListener("resize",l),r(),()=>window.removeEventListener("resize",l)}const s=t.map(l=>{if(!l.current)return null;const u=new ResizeObserver(r);return u.observe(l.current),u});return r(),()=>{s.forEach(l=>l==null?void 0:l.disconnect())}},[r,t,i])},OT=(r,t,i)=>{ut.useEffect(()=>{var h;const s=((h=r.current)==null?void 0:h.querySelectorAll("img"))??[];if(s.length===0){t();return}let l=s.length;const u=()=>{l-=1,l===0&&t()};return s.forEach(d=>{const p=d;p.complete?u():(p.addEventListener("load",u,{once:!0}),p.addEventListener("error",u,{once:!0}))}),()=>{s.forEach(d=>{d.removeEventListener("load",u),d.removeEventListener("error",u)})}},[t,r,i])},PT=(r,t,i,s,l,u,h)=>{const d=ut.useRef(null),p=ut.useRef(null),g=ut.useRef(0),v=ut.useRef(0);ut.useEffect(()=>{const m=r.current;if(!m)return;const _=h?s:i;if(_>0){g.current=(g.current%_+_)%_;const E=h?`translate3d(0, ${-g.current}px, 0)`:`translate3d(${-g.current}px, 0, 0)`;m.style.transform=E}const M=E=>{p.current===null&&(p.current=E);const T=Math.max(0,E-p.current)/1e3;p.current=E;const S=l&&u!==void 0?u:t,x=1-Math.exp(-T/ro.SMOOTH_TAU);if(v.current+=(S-v.current)*x,_>0){let P=g.current+v.current*T;P=(P%_+_)%_,g.current=P;const N=h?`translate3d(0, ${-g.current}px, 0)`:`translate3d(${-g.current}px, 0, 0)`;m.style.transform=N}d.current=requestAnimationFrame(M)};return d.current=requestAnimationFrame(M),()=>{d.current!==null&&(cancelAnimationFrame(d.current),d.current=null),p.current=null}},[t,i,s,l,u,h,r])},E1=ut.memo(({logos:r,speed:t=120,direction:i="left",width:s="100%",logoHeight:l=28,gap:u=32,pauseOnHover:h,hoverSpeed:d,fadeOut:p=!1,fadeOutColor:g,scaleOnHover:v=!1,renderItem:m,ariaLabel:_="Partner logos",className:M,style:E})=>{const T=ut.useRef(null),S=ut.useRef(null),x=ut.useRef(null),[P,N]=ut.useState(0),[R,F]=ut.useState(0),[z,L]=ut.useState(ro.MIN_COPIES),[H,D]=ut.useState(!1),b=ut.useMemo(()=>{if(d!==void 0)return d;if(h===!0)return 0;if(h!==!1)return 0},[d,h]),B=i==="up"||i==="down",Z=ut.useMemo(()=>{const Mt=Math.abs(t);let Dt;B?Dt=i==="up"?1:-1:Dt=i==="left"?1:-1;const fe=t<0?-1:1;return Mt*Dt*fe},[t,i,B]),k=ut.useCallback(()=>{var W,pt,ft,xt,Lt,It;const Mt=((W=T.current)==null?void 0:W.clientWidth)??0,Dt=(ft=(pt=x.current)==null?void 0:pt.getBoundingClientRect)==null?void 0:ft.call(pt),fe=(Dt==null?void 0:Dt.width)??0,U=(Dt==null?void 0:Dt.height)??0;if(B){const Ct=((Lt=(xt=T.current)==null?void 0:xt.parentElement)==null?void 0:Lt.clientHeight)??0;if(T.current&&Ct>0){const Ut=Math.ceil(Ct);T.current.style.height!==`${Ut}px`&&(T.current.style.height=`${Ut}px`)}if(U>0){F(Math.ceil(U));const Ut=((It=T.current)==null?void 0:It.clientHeight)??Ct??U,re=Math.ceil(Ut/U)+ro.COPY_HEADROOM;L(Math.max(ro.MIN_COPIES,re))}}else if(fe>0){N(Math.ceil(fe));const Ct=Math.ceil(Mt/fe)+ro.COPY_HEADROOM;L(Math.max(ro.MIN_COPIES,Ct))}},[B]);LT(k,[T,x],[r,u,l,B]),OT(x,k,[r,u,l,B]),PT(S,Z,P,R,H,b,B);const tt=ut.useMemo(()=>({"--logoloop-gap":`${u}px`,"--logoloop-logoHeight":`${l}px`,...g&&{"--logoloop-fadeColor":g}}),[u,l,g]),lt=ut.useMemo(()=>["logoloop",B?"logoloop--vertical":"logoloop--horizontal",p&&"logoloop--fade",v&&"logoloop--scale-hover",M].filter(Boolean).join(" "),[B,p,v,M]),q=ut.useCallback(()=>{b!==void 0&&D(!0)},[b]),it=ut.useCallback(()=>{b!==void 0&&D(!1)},[b]),Y=ut.useCallback((Mt,Dt)=>{if(m)return rt.jsx("li",{className:"logoloop__item",role:"listitem",children:m(Mt,Dt)},Dt);const fe="node"in Mt,U=fe?rt.jsx("span",{className:"logoloop__node","aria-hidden":!!Mt.href&&!Mt.ariaLabel,children:Mt.node}):rt.jsx("img",{src:Mt.src,srcSet:Mt.srcSet,sizes:Mt.sizes,width:Mt.width,height:Mt.height,alt:Mt.alt??"",title:Mt.title,loading:"lazy",decoding:"async",draggable:!1}),W=fe?Mt.ariaLabel??Mt.title:Mt.alt??Mt.title,pt=Mt.href?rt.jsx("a",{className:"logoloop__link",href:Mt.href,"aria-label":W||"logo link",target:"_blank",rel:"noreferrer noopener",children:U}):U;return rt.jsx("li",{className:"logoloop__item",role:"listitem",children:pt},Dt)},[m]),bt=ut.useMemo(()=>Array.from({length:z},(Mt,Dt)=>rt.jsx("ul",{className:"logoloop__list",role:"list","aria-hidden":Dt>0,ref:Dt===0?x:void 0,children:r.map((fe,U)=>Y(fe,`${Dt}-${U}`))},`copy-${Dt}`)),[z,r,Y]),vt=ut.useMemo(()=>({width:B?_d(s)==="100%"?void 0:_d(s):_d(s)??"100%",...tt,...E}),[s,tt,E,B]);return rt.jsx("div",{ref:T,className:lt,style:vt,role:"region","aria-label":_,children:rt.jsx("div",{className:"logoloop__track",ref:S,onMouseEnter:q,onMouseLeave:it,children:bt})})});E1.displayName="LogoLoop";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="173",zT=0,Z_=1,BT=2,T1=1,IT=2,Ua=3,Er=0,oi=1,Na=2,Pa=0,co=1,up=2,Q_=3,K_=4,FT=5,ts=100,HT=101,GT=102,VT=103,XT=104,kT=200,qT=201,YT=202,WT=203,cp=204,fp=205,jT=206,ZT=207,QT=208,KT=209,JT=210,$T=211,tb=212,eb=213,nb=214,hp=0,dp=1,pp=2,po=3,mp=4,gp=5,vp=6,_p=7,b1=0,ib=1,ab=2,Mr=0,rb=1,sb=2,ob=3,lb=4,ub=5,cb=6,fb=7,A1=300,mo=301,go=302,xp=303,yp=304,Nc=306,Sp=1e3,ns=1001,Mp=1002,qi=1003,hb=1004,Ku=1005,oa=1006,xd=1007,is=1008,Fa=1009,R1=1010,C1=1011,Tl=1012,$p=1013,as=1014,La=1015,za=1016,tm=1017,em=1018,vo=1020,w1=35902,D1=1021,U1=1022,Xi=1023,N1=1024,L1=1025,fo=1026,_o=1027,O1=1028,nm=1029,P1=1030,im=1031,am=1033,yc=33776,Sc=33777,Mc=33778,Ec=33779,Ep=35840,Tp=35841,bp=35842,Ap=35843,Rp=36196,Cp=37492,wp=37496,Dp=37808,Up=37809,Np=37810,Lp=37811,Op=37812,Pp=37813,zp=37814,Bp=37815,Ip=37816,Fp=37817,Hp=37818,Gp=37819,Vp=37820,Xp=37821,Tc=36492,kp=36494,qp=36495,z1=36283,Yp=36284,Wp=36285,jp=36286,db=3200,pb=3201,mb=0,gb=1,Sr="",Di="srgb",xo="srgb-linear",Cc="linear",en="srgb",qs=7680,J_=519,vb=512,_b=513,xb=514,B1=515,yb=516,Sb=517,Mb=518,Eb=519,$_=35044,tx="300 es",Oa=2e3,wc=2001;class Mo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ex=1234567;const Ml=Math.PI/180,bl=180/Math.PI;function Eo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[i&63|128]+Yn[i>>8&255]+"-"+Yn[i>>16&255]+Yn[i>>24&255]+Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]).toLowerCase()}function Ie(r,t,i){return Math.max(t,Math.min(i,r))}function rm(r,t){return(r%t+t)%t}function Tb(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function bb(r,t,i){return r!==t?(i-r)/(t-r):0}function El(r,t,i){return(1-i)*r+i*t}function Ab(r,t,i,s){return El(r,t,1-Math.exp(-i*s))}function Rb(r,t=1){return t-Math.abs(rm(r,t*2)-t)}function Cb(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function wb(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Db(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ub(r,t){return r+Math.random()*(t-r)}function Nb(r){return r*(.5-Math.random())}function Lb(r){r!==void 0&&(ex=r);let t=ex+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ob(r){return r*Ml}function Pb(r){return r*bl}function zb(r){return(r&r-1)===0&&r!==0}function Bb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ib(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fb(r,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),g=u((t+s)/2),v=h((t+s)/2),m=u((t-s)/2),_=h((t-s)/2),M=u((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":r.set(d*v,p*m,p*_,d*g);break;case"YZY":r.set(p*_,d*v,p*m,d*g);break;case"ZXZ":r.set(p*m,p*_,d*v,d*g);break;case"XZX":r.set(d*v,p*E,p*M,d*g);break;case"YXY":r.set(p*M,d*v,p*E,d*g);break;case"ZYZ":r.set(p*E,p*M,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function so(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const nx={DEG2RAD:Ml,RAD2DEG:bl,generateUUID:Eo,clamp:Ie,euclideanModulo:rm,mapLinear:Tb,inverseLerp:bb,lerp:El,damp:Ab,pingpong:Rb,smoothstep:Cb,smootherstep:wb,randInt:Db,randFloat:Ub,randFloatSpread:Nb,seededRandom:Lb,degToRad:Ob,radToDeg:Pb,isPowerOfTwo:zb,ceilPowerOfTwo:Bb,floorPowerOfTwo:Ib,setQuaternionFromProperEuler:Fb,normalize:$n,denormalize:so};class Re{constructor(t=0,i=0){Re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ie(this.x,t.x,i.x),this.y=Ie(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ie(this.x,t,i),this.y=Ie(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ie(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ie(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(t,i,s,l,u,h,d,p,g){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,g)}set(t,i,s,l,u,h,d,p,g){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],v=s[4],m=s[7],_=s[2],M=s[5],E=s[8],T=l[0],S=l[3],x=l[6],P=l[1],N=l[4],R=l[7],F=l[2],z=l[5],L=l[8];return u[0]=h*T+d*P+p*F,u[3]=h*S+d*N+p*z,u[6]=h*x+d*R+p*L,u[1]=g*T+v*P+m*F,u[4]=g*S+v*N+m*z,u[7]=g*x+v*R+m*L,u[2]=_*T+M*P+E*F,u[5]=_*S+M*N+E*z,u[8]=_*x+M*R+E*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8];return i*h*v-i*d*g-s*u*v+s*d*p+l*u*g-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=v*h-d*g,_=d*p-v*u,M=g*u-h*p,E=i*m+s*_+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=m*T,t[1]=(l*g-v*s)*T,t[2]=(d*s-l*h)*T,t[3]=_*T,t[4]=(v*i-l*p)*T,t[5]=(l*u-d*i)*T,t[6]=M*T,t[7]=(s*p-g*i)*T,t[8]=(h*i-s*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),g=Math.sin(u);return this.set(s*p,s*g,-s*(p*h+g*d)+h+t,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(yd.makeScale(t,i)),this}rotate(t){return this.premultiply(yd.makeRotation(-t)),this}translate(t,i){return this.premultiply(yd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new Ce;function I1(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Dc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hb(){const r=Dc("canvas");return r.style.display="block",r}const ix={};function oo(r){r in ix||(ix[r]=!0,console.warn(r))}function Gb(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Vb(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xb(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ax=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rx=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kb(){const r={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===en&&(l.r=Ba(l.r),l.g=Ba(l.g),l.b=Ba(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===en&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Sr?Cc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[xo]:{primaries:t,whitePoint:s,transfer:Cc,toXYZ:ax,fromXYZ:rx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:t,whitePoint:s,transfer:en,toXYZ:ax,fromXYZ:rx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),r}const qe=kb();function Ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ys;class qb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ys===void 0&&(Ys=Dc("canvas")),Ys.width=t.width,Ys.height=t.height;const s=Ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ys}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ba(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ba(i[s]/255)*255):i[s]=Ba(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yb=0;class F1{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Eo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Sd(l[h].image)):u.push(Sd(l[h]))}else u=Sd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Sd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wb=0;class li extends Mo{constructor(t=li.DEFAULT_IMAGE,i=li.DEFAULT_MAPPING,s=ns,l=ns,u=oa,h=is,d=Xi,p=Fa,g=li.DEFAULT_ANISOTROPY,v=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Eo(),this.name="",this.source=new F1(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sp:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Mp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sp:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Mp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=A1;li.DEFAULT_ANISOTROPY=1;class gn{constructor(t=0,i=0,s=0,l=1){gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,g=p[0],v=p[4],m=p[8],_=p[1],M=p[5],E=p[9],T=p[2],S=p[6],x=p[10];if(Math.abs(v-_)<.01&&Math.abs(m-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+_)<.1&&Math.abs(m+T)<.1&&Math.abs(E+S)<.1&&Math.abs(g+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(g+1)/2,R=(M+1)/2,F=(x+1)/2,z=(v+_)/4,L=(m+T)/4,H=(E+S)/4;return N>R&&N>F?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=z/s,u=L/s):R>F?R<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),s=z/l,u=H/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=L/u,l=H/u),this.set(s,l,u,i),this}let P=Math.sqrt((S-E)*(S-E)+(m-T)*(m-T)+(_-v)*(_-v));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(m-T)/P,this.z=(_-v)/P,this.w=Math.acos((g+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ie(this.x,t.x,i.x),this.y=Ie(this.y,t.y,i.y),this.z=Ie(this.z,t.z,i.z),this.w=Ie(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ie(this.x,t,i),this.y=Ie(this.y,t,i),this.z=Ie(this.z,t,i),this.w=Ie(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ie(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jb extends Mo{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new li(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new F1(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends jb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class H1 extends li{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=qi,this.minFilter=qi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends li{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=qi,this.minFilter=qi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],g=s[l+1],v=s[l+2],m=s[l+3];const _=u[h+0],M=u[h+1],E=u[h+2],T=u[h+3];if(d===0){t[i+0]=p,t[i+1]=g,t[i+2]=v,t[i+3]=m;return}if(d===1){t[i+0]=_,t[i+1]=M,t[i+2]=E,t[i+3]=T;return}if(m!==T||p!==_||g!==M||v!==E){let S=1-d;const x=p*_+g*M+v*E+m*T,P=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const F=Math.sqrt(N),z=Math.atan2(F,x*P);S=Math.sin(S*z)/F,d=Math.sin(d*z)/F}const R=d*P;if(p=p*S+_*R,g=g*S+M*R,v=v*S+E*R,m=m*S+T*R,S===1-d){const F=1/Math.sqrt(p*p+g*g+v*v+m*m);p*=F,g*=F,v*=F,m*=F}}t[i]=p,t[i+1]=g,t[i+2]=v,t[i+3]=m}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],g=s[l+2],v=s[l+3],m=u[h],_=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+v*m+p*M-g*_,t[i+1]=p*E+v*_+g*m-d*M,t[i+2]=g*E+v*M+d*_-p*m,t[i+3]=v*E-d*m-p*_-g*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,g=d(s/2),v=d(l/2),m=d(u/2),_=p(s/2),M=p(l/2),E=p(u/2);switch(h){case"XYZ":this._x=_*v*m+g*M*E,this._y=g*M*m-_*v*E,this._z=g*v*E+_*M*m,this._w=g*v*m-_*M*E;break;case"YXZ":this._x=_*v*m+g*M*E,this._y=g*M*m-_*v*E,this._z=g*v*E-_*M*m,this._w=g*v*m+_*M*E;break;case"ZXY":this._x=_*v*m-g*M*E,this._y=g*M*m+_*v*E,this._z=g*v*E+_*M*m,this._w=g*v*m-_*M*E;break;case"ZYX":this._x=_*v*m-g*M*E,this._y=g*M*m+_*v*E,this._z=g*v*E-_*M*m,this._w=g*v*m+_*M*E;break;case"YZX":this._x=_*v*m+g*M*E,this._y=g*M*m+_*v*E,this._z=g*v*E-_*M*m,this._w=g*v*m-_*M*E;break;case"XZY":this._x=_*v*m-g*M*E,this._y=g*M*m-_*v*E,this._z=g*v*E+_*M*m,this._w=g*v*m+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],g=i[2],v=i[6],m=i[10],_=s+d+m;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-p)*M,this._y=(u-g)*M,this._z=(h-l)*M}else if(s>d&&s>m){const M=2*Math.sqrt(1+s-d-m);this._w=(v-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+g)/M}else if(d>m){const M=2*Math.sqrt(1+d-s-m);this._w=(u-g)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+m-s-d);this._w=(h-l)/M,this._x=(u+g)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,g=i._z,v=i._w;return this._x=s*v+h*d+l*g-u*p,this._y=l*v+h*p+u*d-s*g,this._z=u*v+h*g+s*p-l*d,this._w=h*v-s*d-l*p-u*g,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,d),m=Math.sin((1-i)*v)/g,_=Math.sin(i*v)/g;return this._w=h*m+this._w*_,this._x=s*m+this._x*_,this._y=l*m+this._y*_,this._z=u*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class dt{constructor(t=0,i=0,s=0){dt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(sx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(sx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,g=2*(h*l-d*s),v=2*(d*i-u*l),m=2*(u*s-h*i);return this.x=i+p*g+h*m-d*v,this.y=s+p*v+d*g-u*m,this.z=l+p*m+u*v-h*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ie(this.x,t.x,i.x),this.y=Ie(this.y,t.y,i.y),this.z=Ie(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ie(this.x,t,i),this.y=Ie(this.y,t,i),this.z=Ie(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ie(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Md.copy(this).projectOnVector(t),this.sub(Md)}reflect(t){return this.sub(Md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ie(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new dt,sx=new Al;class Rl{constructor(t=new dt(1/0,1/0,1/0),i=new dt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Bi):Bi.fromBufferAttribute(u,h),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ju.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ju.copy(s.boundingBox)),Ju.applyMatrix4(t.matrixWorld),this.union(Ju)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ml),$u.subVectors(this.max,ml),Ws.subVectors(t.a,ml),js.subVectors(t.b,ml),Zs.subVectors(t.c,ml),mr.subVectors(js,Ws),gr.subVectors(Zs,js),Yr.subVectors(Ws,Zs);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Yr.z,Yr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Yr.z,0,-Yr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Yr.y,Yr.x,0];return!Ed(i,Ws,js,Zs,$u)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,Ws,js,Zs,$u))?!1:(tc.crossVectors(mr,gr),i=[tc.x,tc.y,tc.z],Ed(i,Ws,js,Zs,$u))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Aa=[new dt,new dt,new dt,new dt,new dt,new dt,new dt,new dt],Bi=new dt,Ju=new Rl,Ws=new dt,js=new dt,Zs=new dt,mr=new dt,gr=new dt,Yr=new dt,ml=new dt,$u=new dt,tc=new dt,Wr=new dt;function Ed(r,t,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){Wr.fromArray(r,u);const d=l.x*Math.abs(Wr.x)+l.y*Math.abs(Wr.y)+l.z*Math.abs(Wr.z),p=t.dot(Wr),g=i.dot(Wr),v=s.dot(Wr);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>d)return!1}return!0}const Qb=new Rl,gl=new dt,Td=new dt;class sm{constructor(t=new dt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Qb.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gl.subVectors(t,this.center);const i=gl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(gl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gl.copy(t.center).add(Td)),this.expandByPoint(gl.copy(t.center).sub(Td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ra=new dt,bd=new dt,ec=new dt,vr=new dt,Ad=new dt,nc=new dt,Rd=new dt;class Kb{constructor(t=new dt,i=new dt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){bd.copy(t).add(i).multiplyScalar(.5),ec.copy(i).sub(t).normalize(),vr.copy(this.origin).sub(bd);const u=t.distanceTo(i)*.5,h=-this.direction.dot(ec),d=vr.dot(this.direction),p=-vr.dot(ec),g=vr.lengthSq(),v=Math.abs(1-h*h);let m,_,M,E;if(v>0)if(m=h*p-d,_=h*d-p,E=u*v,m>=0)if(_>=-E)if(_<=E){const T=1/v;m*=T,_*=T,M=m*(m+h*_+2*d)+_*(h*m+_+2*p)+g}else _=u,m=Math.max(0,-(h*_+d)),M=-m*m+_*(_+2*p)+g;else _=-u,m=Math.max(0,-(h*_+d)),M=-m*m+_*(_+2*p)+g;else _<=-E?(m=Math.max(0,-(-h*u+d)),_=m>0?-u:Math.min(Math.max(-u,-p),u),M=-m*m+_*(_+2*p)+g):_<=E?(m=0,_=Math.min(Math.max(-u,-p),u),M=_*(_+2*p)+g):(m=Math.max(0,-(h*u+d)),_=m>0?u:Math.min(Math.max(-u,-p),u),M=-m*m+_*(_+2*p)+g);else _=h>0?-u:u,m=Math.max(0,-(h*_+d)),M=-m*m+_*(_+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(bd).addScaledVector(ec,_),M}intersectSphere(t,i){Ra.subVectors(t.center,this.origin);const s=Ra.dot(this.direction),l=Ra.dot(Ra)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const g=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,_=this.origin;return g>=0?(s=(t.min.x-_.x)*g,l=(t.max.x-_.x)*g):(s=(t.max.x-_.x)*g,l=(t.min.x-_.x)*g),v>=0?(u=(t.min.y-_.y)*v,h=(t.max.y-_.y)*v):(u=(t.max.y-_.y)*v,h=(t.min.y-_.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),m>=0?(d=(t.min.z-_.z)*m,p=(t.max.z-_.z)*m):(d=(t.max.z-_.z)*m,p=(t.min.z-_.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,i,s,l,u){Ad.subVectors(i,t),nc.subVectors(s,t),Rd.crossVectors(Ad,nc);let h=this.direction.dot(Rd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;vr.subVectors(this.origin,t);const p=d*this.direction.dot(nc.crossVectors(vr,nc));if(p<0)return null;const g=d*this.direction.dot(Ad.cross(vr));if(g<0||p+g>h)return null;const v=-d*vr.dot(Rd);return v<0?null:this.at(v/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(t,i,s,l,u,h,d,p,g,v,m,_,M,E,T,S){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,g,v,m,_,M,E,T,S)}set(t,i,s,l,u,h,d,p,g,v,m,_,M,E,T,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=p,x[2]=g,x[6]=v,x[10]=m,x[14]=_,x[3]=M,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Qs.setFromMatrixColumn(t,0).length(),u=1/Qs.setFromMatrixColumn(t,1).length(),h=1/Qs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),v=Math.cos(u),m=Math.sin(u);if(t.order==="XYZ"){const _=h*v,M=h*m,E=d*v,T=d*m;i[0]=p*v,i[4]=-p*m,i[8]=g,i[1]=M+E*g,i[5]=_-T*g,i[9]=-d*p,i[2]=T-_*g,i[6]=E+M*g,i[10]=h*p}else if(t.order==="YXZ"){const _=p*v,M=p*m,E=g*v,T=g*m;i[0]=_+T*d,i[4]=E*d-M,i[8]=h*g,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=M*d-E,i[6]=T+_*d,i[10]=h*p}else if(t.order==="ZXY"){const _=p*v,M=p*m,E=g*v,T=g*m;i[0]=_-T*d,i[4]=-h*m,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*v,i[9]=T-_*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const _=h*v,M=h*m,E=d*v,T=d*m;i[0]=p*v,i[4]=E*g-M,i[8]=_*g+T,i[1]=p*m,i[5]=T*g+_,i[9]=M*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const _=h*p,M=h*g,E=d*p,T=d*g;i[0]=p*v,i[4]=T-_*m,i[8]=E*m+M,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-g*v,i[6]=M*m+E,i[10]=_-T*m}else if(t.order==="XZY"){const _=h*p,M=h*g,E=d*p,T=d*g;i[0]=p*v,i[4]=-m,i[8]=g*v,i[1]=_*m+T,i[5]=h*v,i[9]=M*m-E,i[2]=E*m-M,i[6]=d*v,i[10]=T*m+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jb,t,$b)}lookAt(t,i,s){const l=this.elements;return vi.subVectors(t,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),_r.crossVectors(s,vi),_r.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),_r.crossVectors(s,vi)),_r.normalize(),ic.crossVectors(vi,_r),l[0]=_r.x,l[4]=ic.x,l[8]=vi.x,l[1]=_r.y,l[5]=ic.y,l[9]=vi.y,l[2]=_r.z,l[6]=ic.z,l[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],v=s[1],m=s[5],_=s[9],M=s[13],E=s[2],T=s[6],S=s[10],x=s[14],P=s[3],N=s[7],R=s[11],F=s[15],z=l[0],L=l[4],H=l[8],D=l[12],b=l[1],B=l[5],Z=l[9],k=l[13],tt=l[2],lt=l[6],q=l[10],it=l[14],Y=l[3],bt=l[7],vt=l[11],Mt=l[15];return u[0]=h*z+d*b+p*tt+g*Y,u[4]=h*L+d*B+p*lt+g*bt,u[8]=h*H+d*Z+p*q+g*vt,u[12]=h*D+d*k+p*it+g*Mt,u[1]=v*z+m*b+_*tt+M*Y,u[5]=v*L+m*B+_*lt+M*bt,u[9]=v*H+m*Z+_*q+M*vt,u[13]=v*D+m*k+_*it+M*Mt,u[2]=E*z+T*b+S*tt+x*Y,u[6]=E*L+T*B+S*lt+x*bt,u[10]=E*H+T*Z+S*q+x*vt,u[14]=E*D+T*k+S*it+x*Mt,u[3]=P*z+N*b+R*tt+F*Y,u[7]=P*L+N*B+R*lt+F*bt,u[11]=P*H+N*Z+R*q+F*vt,u[15]=P*D+N*k+R*it+F*Mt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],g=t[13],v=t[2],m=t[6],_=t[10],M=t[14],E=t[3],T=t[7],S=t[11],x=t[15];return E*(+u*p*m-l*g*m-u*d*_+s*g*_+l*d*M-s*p*M)+T*(+i*p*M-i*g*_+u*h*_-l*h*M+l*g*v-u*p*v)+S*(+i*g*m-i*d*M-u*h*m+s*h*M+u*d*v-s*g*v)+x*(-l*d*v-i*p*m+i*d*_+l*h*m-s*h*_+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=t[9],_=t[10],M=t[11],E=t[12],T=t[13],S=t[14],x=t[15],P=m*S*g-T*_*g+T*p*M-d*S*M-m*p*x+d*_*x,N=E*_*g-v*S*g-E*p*M+h*S*M+v*p*x-h*_*x,R=v*T*g-E*m*g+E*d*M-h*T*M-v*d*x+h*m*x,F=E*m*p-v*T*p-E*d*_+h*T*_+v*d*S-h*m*S,z=i*P+s*N+l*R+u*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/z;return t[0]=P*L,t[1]=(T*_*u-m*S*u-T*l*M+s*S*M+m*l*x-s*_*x)*L,t[2]=(d*S*u-T*p*u+T*l*g-s*S*g-d*l*x+s*p*x)*L,t[3]=(m*p*u-d*_*u-m*l*g+s*_*g+d*l*M-s*p*M)*L,t[4]=N*L,t[5]=(v*S*u-E*_*u+E*l*M-i*S*M-v*l*x+i*_*x)*L,t[6]=(E*p*u-h*S*u-E*l*g+i*S*g+h*l*x-i*p*x)*L,t[7]=(h*_*u-v*p*u+v*l*g-i*_*g-h*l*M+i*p*M)*L,t[8]=R*L,t[9]=(E*m*u-v*T*u-E*s*M+i*T*M+v*s*x-i*m*x)*L,t[10]=(h*T*u-E*d*u+E*s*g-i*T*g-h*s*x+i*d*x)*L,t[11]=(v*d*u-h*m*u-v*s*g+i*m*g+h*s*M-i*d*M)*L,t[12]=F*L,t[13]=(v*T*l-E*m*l+E*s*_-i*T*_-v*s*S+i*m*S)*L,t[14]=(E*d*l-h*T*l-E*s*p+i*T*p+h*s*S-i*d*S)*L,t[15]=(h*m*l-v*d*l+v*s*p-i*m*p-h*s*_+i*d*_)*L,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,g=u*h,v=u*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,v*d+s,v*p-l*h,0,g*p-l*d,v*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,g=u+u,v=h+h,m=d+d,_=u*g,M=u*v,E=u*m,T=h*v,S=h*m,x=d*m,P=p*g,N=p*v,R=p*m,F=s.x,z=s.y,L=s.z;return l[0]=(1-(T+x))*F,l[1]=(M+R)*F,l[2]=(E-N)*F,l[3]=0,l[4]=(M-R)*z,l[5]=(1-(_+x))*z,l[6]=(S+P)*z,l[7]=0,l[8]=(E+N)*L,l[9]=(S-P)*L,l[10]=(1-(_+T))*L,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=Qs.set(l[0],l[1],l[2]).length();const h=Qs.set(l[4],l[5],l[6]).length(),d=Qs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ii.copy(this);const g=1/u,v=1/h,m=1/d;return Ii.elements[0]*=g,Ii.elements[1]*=g,Ii.elements[2]*=g,Ii.elements[4]*=v,Ii.elements[5]*=v,Ii.elements[6]*=v,Ii.elements[8]*=m,Ii.elements[9]*=m,Ii.elements[10]*=m,i.setFromRotationMatrix(Ii),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=Oa){const p=this.elements,g=2*u/(i-t),v=2*u/(s-l),m=(i+t)/(i-t),_=(s+l)/(s-l);let M,E;if(d===Oa)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===wc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=Oa){const p=this.elements,g=1/(i-t),v=1/(s-l),m=1/(h-u),_=(i+t)*g,M=(s+l)*v;let E,T;if(d===Oa)E=(h+u)*m,T=-2*m;else if(d===wc)E=u*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*g,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Qs=new dt,Ii=new En,Jb=new dt(0,0,0),$b=new dt(1,1,1),_r=new dt,ic=new dt,vi=new dt,ox=new En,lx=new Al;class Ha{constructor(t=0,i=0,s=0,l=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],v=l[9],m=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(_,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ie(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Ie(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-m,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,g),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return ox.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ox,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return lx.setFromEuler(this),this.setFromQuaternion(lx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";class G1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let t2=0;const ux=new dt,Ks=new Al,Ca=new En,ac=new dt,vl=new dt,e2=new dt,n2=new Al,cx=new dt(1,0,0),fx=new dt(0,1,0),hx=new dt(0,0,1),dx={type:"added"},i2={type:"removed"},Js={type:"childadded",child:null},Cd={type:"childremoved",child:null};class xi extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t2++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const t=new dt,i=new Ha,s=new Al,l=new dt(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new En},normalMatrix:{value:new Ce}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ks.setFromAxisAngle(t,i),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,i){return Ks.setFromAxisAngle(t,i),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(cx,t)}rotateY(t){return this.rotateOnAxis(fx,t)}rotateZ(t){return this.rotateOnAxis(hx,t)}translateOnAxis(t,i){return ux.copy(t).applyQuaternion(this.quaternion),this.position.add(ux.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(cx,t)}translateY(t){return this.translateOnAxis(fx,t)}translateZ(t){return this.translateOnAxis(hx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ac.copy(t):ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(vl,ac,this.up):Ca.lookAt(ac,vl,this.up),this.quaternion.setFromRotationMatrix(Ca),l&&(Ca.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Ca),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dx),Js.child=t,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(i2),Cd.child=t,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dx),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,t,e2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,n2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const m=p[g];u(t.shapes,m)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),g=h(t.textures),v=h(t.images),m=h(t.shapes),_=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const v=d[g];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xi.DEFAULT_UP=new dt(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new dt,wa=new dt,wd=new dt,Da=new dt,$s=new dt,to=new dt,px=new dt,Dd=new dt,Ud=new dt,Nd=new dt,Ld=new gn,Od=new gn,Pd=new gn;class Gi{constructor(t=new dt,i=new dt,s=new dt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Fi.subVectors(t,i),l.cross(Fi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Fi.subVectors(l,i),wa.subVectors(s,i),wd.subVectors(t,i);const h=Fi.dot(Fi),d=Fi.dot(wa),p=Fi.dot(wd),g=wa.dot(wa),v=wa.dot(wd),m=h*g-d*d;if(m===0)return u.set(0,0,0),null;const _=1/m,M=(g*p-d*v)*_,E=(h*v-d*p)*_;return u.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,Da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Da.x),p.addScaledVector(h,Da.y),p.addScaledVector(d,Da.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return Ld.setScalar(0),Od.setScalar(0),Pd.setScalar(0),Ld.fromBufferAttribute(t,i),Od.fromBufferAttribute(t,s),Pd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ld,u.x),h.addScaledVector(Od,u.y),h.addScaledVector(Pd,u.z),h}static isFrontFacing(t,i,s,l){return Fi.subVectors(s,i),wa.subVectors(t,i),Fi.cross(wa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Fi.cross(wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Gi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;$s.subVectors(l,s),to.subVectors(u,s),Dd.subVectors(t,s);const p=$s.dot(Dd),g=to.dot(Dd);if(p<=0&&g<=0)return i.copy(s);Ud.subVectors(t,l);const v=$s.dot(Ud),m=to.dot(Ud);if(v>=0&&m<=v)return i.copy(l);const _=p*m-v*g;if(_<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector($s,h);Nd.subVectors(t,u);const M=$s.dot(Nd),E=to.dot(Nd);if(E>=0&&M<=E)return i.copy(u);const T=M*g-p*E;if(T<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector(to,d);const S=v*E-M*m;if(S<=0&&m-v>=0&&M-E>=0)return px.subVectors(u,l),d=(m-v)/(m-v+(M-E)),i.copy(l).addScaledVector(px,d);const x=1/(S+T+_);return h=T*x,d=_*x,i.copy(s).addScaledVector($s,h).addScaledVector(to,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const V1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},rc={h:0,s:0,l:0};function zd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=qe.workingColorSpace){return this.r=t,this.g=i,this.b=s,qe.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=qe.workingColorSpace){if(t=rm(t,1),i=Ie(i,0,1),s=Ie(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=zd(h,u,t+1/3),this.g=zd(h,u,t),this.b=zd(h,u,t-1/3)}return qe.toWorkingColorSpace(this,l),this}setStyle(t,i=Di){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Di){const s=V1[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return qe.fromWorkingColorSpace(Wn.copy(this),t),Math.round(Ie(Wn.r*255,0,255))*65536+Math.round(Ie(Wn.g*255,0,255))*256+Math.round(Ie(Wn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=qe.workingColorSpace){qe.fromWorkingColorSpace(Wn.copy(this),i);const s=Wn.r,l=Wn.g,u=Wn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,g;const v=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=v<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-u)/m+(l<u?6:0);break;case l:p=(u-s)/m+2;break;case u:p=(s-l)/m+4;break}p/=6}return t.h=p,t.s=g,t.l=v,t}getRGB(t,i=qe.workingColorSpace){return qe.fromWorkingColorSpace(Wn.copy(this),i),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=Di){qe.fromWorkingColorSpace(Wn.copy(this),t);const i=Wn.r,s=Wn.g,l=Wn.b;return t!==Di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(xr),this.setHSL(xr.h+t,xr.s+i,xr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(xr),t.getHSL(rc);const s=El(xr.h,rc.h,i),l=El(xr.s,rc.s,i),u=El(xr.l,rc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ge;Ge.NAMES=V1;let a2=0;class Lc extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=co,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=fp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(s.blending=this.blending),this.side!==Er&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cp&&(s.blendSrc=this.blendSrc),this.blendDst!==fp&&(s.blendDst=this.blendDst),this.blendEquation!==ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class om extends Lc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ha,this.combine=b1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mn=new dt,sc=new Re;let r2=0;class la{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r2++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=$_,this.updateRanges=[],this.gpuType=La,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(t),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=so(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=so(i,this.array)),i}setX(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=so(i,this.array)),i}setY(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=so(i,this.array)),i}setZ(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=so(i,this.array)),i}setW(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array),u=$n(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$_&&(t.usage=this.usage),t}}class X1 extends la{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class k1 extends la{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ia extends la{constructor(t,i,s){super(new Float32Array(t),i,s)}}let s2=0;const wi=new En,Bd=new xi,eo=new dt,_i=new Rl,_l=new Rl,Ln=new dt;class Tr extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s2++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I1(t)?k1:X1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new Ce().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return Bd.lookAt(t),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ia(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new dt(-1/0,-1/0,-1/0),new dt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];_i.setFromBufferAttribute(u),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sm);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new dt,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];_l.setFromBufferAttribute(d),this.morphTargetsRelative?(Ln.addVectors(_i.min,_l.min),_i.expandByPoint(Ln),Ln.addVectors(_i.max,_l.max),_i.expandByPoint(Ln)):(_i.expandByPoint(_l.min),_i.expandByPoint(_l.max))}_i.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Ln.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Ln));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)Ln.fromBufferAttribute(d,g),p&&(eo.fromBufferAttribute(t,g),Ln.add(eo)),l=Math.max(l,s.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let H=0;H<s.count;H++)d[H]=new dt,p[H]=new dt;const g=new dt,v=new dt,m=new dt,_=new Re,M=new Re,E=new Re,T=new dt,S=new dt;function x(H,D,b){g.fromBufferAttribute(s,H),v.fromBufferAttribute(s,D),m.fromBufferAttribute(s,b),_.fromBufferAttribute(u,H),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,b),v.sub(g),m.sub(g),M.sub(_),E.sub(_);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(m,-M.y).multiplyScalar(B),S.copy(m).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(B),d[H].add(T),d[D].add(T),d[b].add(T),p[H].add(S),p[D].add(S),p[b].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let H=0,D=P.length;H<D;++H){const b=P[H],B=b.start,Z=b.count;for(let k=B,tt=B+Z;k<tt;k+=3)x(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const N=new dt,R=new dt,F=new dt,z=new dt;function L(H){F.fromBufferAttribute(l,H),z.copy(F);const D=d[H];N.copy(D),N.sub(F.multiplyScalar(F.dot(D))).normalize(),R.crossVectors(z,D);const B=R.dot(p[H])<0?-1:1;h.setXYZW(H,N.x,N.y,N.z,B)}for(let H=0,D=P.length;H<D;++H){const b=P[H],B=b.start,Z=b.count;for(let k=B,tt=B+Z;k<tt;k+=3)L(t.getX(k+0)),L(t.getX(k+1)),L(t.getX(k+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new la(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const l=new dt,u=new dt,h=new dt,d=new dt,p=new dt,g=new dt,v=new dt,m=new dt;if(t)for(let _=0,M=t.count;_<M;_+=3){const E=t.getX(_+0),T=t.getX(_+1),S=t.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),d.add(v),p.add(v),g.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(S,g.x,g.y,g.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Ln.fromBufferAttribute(t,i),Ln.normalize(),t.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(d,p){const g=d.array,v=d.itemSize,m=d.normalized,_=new g.constructor(p.length*v);let M=0,E=0;for(let T=0,S=p.length;T<S;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*v;for(let x=0;x<v;x++)_[E++]=g[M++]}return new la(_,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Tr,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=t(p,s);i.setAttribute(d,g)}const u=this.morphAttributes;for(const d in u){const p=[],g=u[d];for(let v=0,m=g.length;v<m;v++){const _=g[v],M=t(_,s);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(t[g]=p[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];t.data.attributes[p]=g.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let m=0,_=g.length;m<_;m++){const M=g[m];v.push(M.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const u=t.morphAttributes;for(const g in u){const v=[],m=u[g];for(let _=0,M=m.length;_<M;_++)v.push(m[_].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let g=0,v=h.length;g<v;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mx=new En,jr=new Kb,oc=new sm,gx=new dt,lc=new dt,uc=new dt,cc=new dt,Id=new dt,fc=new dt,vx=new dt,hc=new dt;class ki extends xi{constructor(t=new Tr,i=new om){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){fc.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const v=d[p],m=u[p];v!==0&&(Id.fromBufferAttribute(m,t),h?fc.addScaledVector(Id,v):fc.addScaledVector(Id.sub(i),v))}i.add(fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(u),jr.copy(t.ray).recast(t.near),!(oc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(oc,gx)===null||jr.origin.distanceToSquared(gx)>(t.far-t.near)**2))&&(mx.copy(u).invert(),jr.copy(t.ray).applyMatrix4(mx),!(s.boundingBox!==null&&jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,jr)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,g=u.attributes.uv,v=u.attributes.uv1,m=u.attributes.normal,_=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const S=_[E],x=h[S.materialIndex],P=Math.max(S.start,M.start),N=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let R=P,F=N;R<F;R+=3){const z=d.getX(R),L=d.getX(R+1),H=d.getX(R+2);l=dc(this,x,t,s,g,v,m,z,L,H),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const P=d.getX(S),N=d.getX(S+1),R=d.getX(S+2);l=dc(this,h,t,s,g,v,m,P,N,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const S=_[E],x=h[S.materialIndex],P=Math.max(S.start,M.start),N=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=P,F=N;R<F;R+=3){const z=R,L=R+1,H=R+2;l=dc(this,x,t,s,g,v,m,z,L,H),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const P=S,N=S+1,R=S+2;l=dc(this,h,t,s,g,v,m,P,N,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function o2(r,t,i,s,l,u,h,d){let p;if(t.side===oi?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===Er,d),p===null)return null;hc.copy(d),hc.applyMatrix4(r.matrixWorld);const g=i.ray.origin.distanceTo(hc);return g<i.near||g>i.far?null:{distance:g,point:hc.clone(),object:r}}function dc(r,t,i,s,l,u,h,d,p,g){r.getVertexPosition(d,lc),r.getVertexPosition(p,uc),r.getVertexPosition(g,cc);const v=o2(r,t,i,s,lc,uc,cc,vx);if(v){const m=new dt;Gi.getBarycoord(vx,lc,uc,cc,m),l&&(v.uv=Gi.getInterpolatedAttribute(l,d,p,g,m,new Re)),u&&(v.uv1=Gi.getInterpolatedAttribute(u,d,p,g,m,new Re)),h&&(v.normal=Gi.getInterpolatedAttribute(h,d,p,g,m,new dt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:g,normal:new dt,materialIndex:0};Gi.getNormal(lc,uc,cc,_.normal),v.face=_,v.barycoord=m}return v}class Cl extends Tr{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],g=[],v=[],m=[];let _=0,M=0;E("z","y","x",-1,-1,s,i,t,h,u,0),E("z","y","x",1,-1,s,i,-t,h,u,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ia(g,3)),this.setAttribute("normal",new Ia(v,3)),this.setAttribute("uv",new Ia(m,2));function E(T,S,x,P,N,R,F,z,L,H,D){const b=R/L,B=F/H,Z=R/2,k=F/2,tt=z/2,lt=L+1,q=H+1;let it=0,Y=0;const bt=new dt;for(let vt=0;vt<q;vt++){const Mt=vt*B-k;for(let Dt=0;Dt<lt;Dt++){const fe=Dt*b-Z;bt[T]=fe*P,bt[S]=Mt*N,bt[x]=tt,g.push(bt.x,bt.y,bt.z),bt[T]=0,bt[S]=0,bt[x]=z>0?1:-1,v.push(bt.x,bt.y,bt.z),m.push(Dt/L),m.push(1-vt/H),it+=1}}for(let vt=0;vt<H;vt++)for(let Mt=0;Mt<L;Mt++){const Dt=_+Mt+lt*vt,fe=_+Mt+lt*(vt+1),U=_+(Mt+1)+lt*(vt+1),W=_+(Mt+1)+lt*vt;p.push(Dt,fe,W),p.push(fe,U,W),Y+=6}d.addGroup(M,Y,D),M+=Y,_+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function ti(r){const t={};for(let i=0;i<r.length;i++){const s=yo(r[i]);for(const l in s)t[l]=s[l]}return t}function l2(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function q1(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}const Uc={clone:yo,merge:ti};var u2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Lc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u2,this.fragmentShader=c2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yo(t.uniforms),this.uniformsGroups=l2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Y1 extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=Oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new dt,_x=new Re,xx=new Re;class Hi extends Y1{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-t/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(yr.x,yr.y).multiplyScalar(-t/yr.z)}getViewSize(t,i){return this.getViewBounds(t,_x,xx),i.subVectors(xx,_x)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ml*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const no=-90,io=1;class f2 extends xi{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Hi(no,io,t,i);l.layers=this.layers,this.add(l);const u=new Hi(no,io,t,i);u.layers=this.layers,this.add(u);const h=new Hi(no,io,t,i);h.layers=this.layers,this.add(h);const d=new Hi(no,io,t,i);d.layers=this.layers,this.add(d);const p=new Hi(no,io,t,i);p.layers=this.layers,this.add(p);const g=new Hi(no,io,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const g of i)this.remove(g);if(t===Oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,g,v]=this.children,m=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,g),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(m,_,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class W1 extends li{constructor(t,i,s,l,u,h,d,p,g,v){t=t!==void 0?t:[],i=i!==void 0?i:mo,super(t,i,s,l,u,h,d,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class h2 extends Yi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new W1(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:oa}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Cl(5,5,5),u=new ei({name:"CubemapFromEquirect",uniforms:yo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:Pa});u.uniforms.tEquirect.value=i;const h=new ki(l,u),d=i.minFilter;return i.minFilter===is&&(i.minFilter=oa),new f2(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class pc extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d2={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new dt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new dt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new dt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new dt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){h=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),x=this._getHandJoint(g,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],_=v.position.distanceTo(m.position),M=.02,E=.005;g.inputState.pinching&&_>M+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&_<=M-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new pc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class p2 extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ha,this.environmentIntensity=1,this.environmentRotation=new Ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hd=new dt,m2=new dt,g2=new Ce;class Jr{constructor(t=new dt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Hd.subVectors(s,i).cross(m2.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Hd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||g2.getNormalMatrix(t),l=this.coplanarPoint(Hd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new sm,mc=new dt;class j1{constructor(t=new Jr,i=new Jr,s=new Jr,l=new Jr,u=new Jr,h=new Jr){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oa){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],p=l[3],g=l[4],v=l[5],m=l[6],_=l[7],M=l[8],E=l[9],T=l[10],S=l[11],x=l[12],P=l[13],N=l[14],R=l[15];if(s[0].setComponents(p-u,_-g,S-M,R-x).normalize(),s[1].setComponents(p+u,_+g,S+M,R+x).normalize(),s[2].setComponents(p+h,_+v,S+E,R+P).normalize(),s[3].setComponents(p-h,_-v,S-E,R-P).normalize(),s[4].setComponents(p-d,_-m,S-T,R-N).normalize(),i===Oa)s[5].setComponents(p+d,_+m,S+T,R+N).normalize();else if(i===wc)s[5].setComponents(d,m,T,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(t){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mc.x=l.normal.x>0?t.max.x:t.min.x,mc.y=l.normal.y>0?t.max.y:t.min.y,mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z1 extends li{constructor(t,i,s,l,u,h,d,p,g,v=fo){if(v!==fo&&v!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===fo&&(s=as),s===void 0&&v===_o&&(s=vo),super(null,l,u,h,d,p,v,s,g),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:qi,this.minFilter=p!==void 0?p:qi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wl extends Tr{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,v=p+1,m=t/d,_=i/p,M=[],E=[],T=[],S=[];for(let x=0;x<v;x++){const P=x*_-h;for(let N=0;N<g;N++){const R=N*m-u;E.push(R,-P,0),T.push(0,0,1),S.push(N/d),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<d;P++){const N=P+g*x,R=P+g*(x+1),F=P+1+g*(x+1),z=P+1+g*x;M.push(N,R,z),M.push(R,F,z)}this.setIndex(M),this.setAttribute("position",new Ia(E,3)),this.setAttribute("normal",new Ia(T,3)),this.setAttribute("uv",new Ia(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wl(t.width,t.height,t.widthSegments,t.heightSegments)}}class v2 extends Lc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _2 extends Lc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lm extends Y1{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,h=u+g*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class x2 extends Hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class y2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=yx();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function yx(){return performance.now()}function Sx(r,t,i,s){const l=S2(s);switch(i){case D1:return r*t;case N1:return r*t;case L1:return r*t*2;case O1:return r*t/l.components*l.byteLength;case nm:return r*t/l.components*l.byteLength;case P1:return r*t*2/l.components*l.byteLength;case im:return r*t*2/l.components*l.byteLength;case U1:return r*t*3/l.components*l.byteLength;case Xi:return r*t*4/l.components*l.byteLength;case am:return r*t*4/l.components*l.byteLength;case yc:case Sc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tp:case Ap:return Math.max(r,16)*Math.max(t,8)/4;case Ep:case bp:return Math.max(r,8)*Math.max(t,8)/2;case Rp:case Cp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Up:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Np:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Lp:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Op:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zp:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Tc:case kp:case qp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case z1:case Yp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wp:case jp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function S2(r){switch(r){case Fa:case R1:return{byteLength:1,components:1};case Tl:case C1:case za:return{byteLength:2,components:1};case tm:case em:return{byteLength:2,components:4};case as:case $p:case La:return{byteLength:4,components:1};case w1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q1(){let r=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function M2(r){const t=new WeakMap;function i(d,p){const g=d.array,v=d.usage,m=g.byteLength,_=r.createBuffer();r.bindBuffer(p,_),r.bufferData(p,g,v),d.onUploadCallback();let M;if(g instanceof Float32Array)M=r.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=r.SHORT;else if(g instanceof Uint32Array)M=r.UNSIGNED_INT;else if(g instanceof Int32Array)M=r.INT;else if(g instanceof Int8Array)M=r.BYTE;else if(g instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:_,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const v=p.array,m=p.updateRanges;if(r.bindBuffer(g,d),m.length===0)r.bufferSubData(g,0,v);else{m.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<m.length;M++){const E=m[_],T=m[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,m[_]=T)}m.length=_+1;for(let M=0,E=m.length;M<E;M++){const T=m[M];r.bufferSubData(g,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=t.get(d);if(g===void 0)t.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:u,update:h}}var E2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T2=`#ifdef USE_ALPHAHASH
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
#endif`,b2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w2=`#ifdef USE_AOMAP
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
#endif`,D2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U2=`#ifdef USE_BATCHING
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
#endif`,N2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z2=`#ifdef USE_IRIDESCENCE
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
#endif`,B2=`#ifdef USE_BUMPMAP
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
#endif`,I2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q2=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Y2=`#define PI 3.141592653589793
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
} // validated`,W2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j2=`vec3 transformedNormal = objectNormal;
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
#endif`,Z2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$2="gl_FragColor = linearToOutputTexel( gl_FragColor );",tA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,aA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rA=`#ifdef USE_ENVMAP
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
#endif`,sA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cA=`#ifdef USE_GRADIENTMAP
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
}`,fA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pA=`uniform bool receiveShadow;
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
#endif`,mA=`#ifdef USE_ENVMAP
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
#endif`,gA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yA=`PhysicalMaterial material;
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
#endif`,SA=`struct PhysicalMaterial {
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
}`,MA=`
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
#endif`,EA=`#if defined( RE_IndirectDiffuse )
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
#endif`,TA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NA=`#if defined( USE_POINTS_UV )
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
#endif`,LA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IA=`#ifdef USE_MORPHTARGETS
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
#endif`,FA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qA=`#ifdef USE_NORMALMAP
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
#endif`,YA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oR=`float getShadowMask() {
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
}`,lR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uR=`#ifdef USE_SKINNING
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
#endif`,cR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fR=`#ifdef USE_SKINNING
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
#endif`,hR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gR=`#ifdef USE_TRANSMISSION
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
#endif`,vR=`#ifdef USE_TRANSMISSION
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
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ER=`uniform sampler2D t2D;
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
}`,TR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CR=`#include <common>
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
}`,wR=`#if DEPTH_PACKING == 3200
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
}`,DR=`#define DISTANCE
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
}`,UR=`#define DISTANCE
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
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`uniform float scale;
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
}`,PR=`uniform vec3 diffuse;
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
}`,zR=`#include <common>
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
}`,BR=`uniform vec3 diffuse;
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
}`,IR=`#define LAMBERT
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
}`,FR=`#define LAMBERT
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
}`,HR=`#define MATCAP
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
}`,GR=`#define MATCAP
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
}`,VR=`#define NORMAL
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
}`,XR=`#define NORMAL
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
}`,kR=`#define PHONG
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
}`,qR=`#define PHONG
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
}`,YR=`#define STANDARD
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
}`,WR=`#define STANDARD
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
}`,jR=`#define TOON
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
}`,ZR=`#define TOON
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
}`,QR=`uniform float size;
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
}`,KR=`uniform vec3 diffuse;
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
}`,JR=`#include <common>
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
}`,$R=`uniform vec3 color;
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
}`,tC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,eC=`uniform vec3 diffuse;
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
}`,we={alphahash_fragment:E2,alphahash_pars_fragment:T2,alphamap_fragment:b2,alphamap_pars_fragment:A2,alphatest_fragment:R2,alphatest_pars_fragment:C2,aomap_fragment:w2,aomap_pars_fragment:D2,batching_pars_vertex:U2,batching_vertex:N2,begin_vertex:L2,beginnormal_vertex:O2,bsdfs:P2,iridescence_fragment:z2,bumpmap_pars_fragment:B2,clipping_planes_fragment:I2,clipping_planes_pars_fragment:F2,clipping_planes_pars_vertex:H2,clipping_planes_vertex:G2,color_fragment:V2,color_pars_fragment:X2,color_pars_vertex:k2,color_vertex:q2,common:Y2,cube_uv_reflection_fragment:W2,defaultnormal_vertex:j2,displacementmap_pars_vertex:Z2,displacementmap_vertex:Q2,emissivemap_fragment:K2,emissivemap_pars_fragment:J2,colorspace_fragment:$2,colorspace_pars_fragment:tA,envmap_fragment:eA,envmap_common_pars_fragment:nA,envmap_pars_fragment:iA,envmap_pars_vertex:aA,envmap_physical_pars_fragment:mA,envmap_vertex:rA,fog_vertex:sA,fog_pars_vertex:oA,fog_fragment:lA,fog_pars_fragment:uA,gradientmap_pars_fragment:cA,lightmap_pars_fragment:fA,lights_lambert_fragment:hA,lights_lambert_pars_fragment:dA,lights_pars_begin:pA,lights_toon_fragment:gA,lights_toon_pars_fragment:vA,lights_phong_fragment:_A,lights_phong_pars_fragment:xA,lights_physical_fragment:yA,lights_physical_pars_fragment:SA,lights_fragment_begin:MA,lights_fragment_maps:EA,lights_fragment_end:TA,logdepthbuf_fragment:bA,logdepthbuf_pars_fragment:AA,logdepthbuf_pars_vertex:RA,logdepthbuf_vertex:CA,map_fragment:wA,map_pars_fragment:DA,map_particle_fragment:UA,map_particle_pars_fragment:NA,metalnessmap_fragment:LA,metalnessmap_pars_fragment:OA,morphinstance_vertex:PA,morphcolor_vertex:zA,morphnormal_vertex:BA,morphtarget_pars_vertex:IA,morphtarget_vertex:FA,normal_fragment_begin:HA,normal_fragment_maps:GA,normal_pars_fragment:VA,normal_pars_vertex:XA,normal_vertex:kA,normalmap_pars_fragment:qA,clearcoat_normal_fragment_begin:YA,clearcoat_normal_fragment_maps:WA,clearcoat_pars_fragment:jA,iridescence_pars_fragment:ZA,opaque_fragment:QA,packing:KA,premultiplied_alpha_fragment:JA,project_vertex:$A,dithering_fragment:tR,dithering_pars_fragment:eR,roughnessmap_fragment:nR,roughnessmap_pars_fragment:iR,shadowmap_pars_fragment:aR,shadowmap_pars_vertex:rR,shadowmap_vertex:sR,shadowmask_pars_fragment:oR,skinbase_vertex:lR,skinning_pars_vertex:uR,skinning_vertex:cR,skinnormal_vertex:fR,specularmap_fragment:hR,specularmap_pars_fragment:dR,tonemapping_fragment:pR,tonemapping_pars_fragment:mR,transmission_fragment:gR,transmission_pars_fragment:vR,uv_pars_fragment:_R,uv_pars_vertex:xR,uv_vertex:yR,worldpos_vertex:SR,background_vert:MR,background_frag:ER,backgroundCube_vert:TR,backgroundCube_frag:bR,cube_vert:AR,cube_frag:RR,depth_vert:CR,depth_frag:wR,distanceRGBA_vert:DR,distanceRGBA_frag:UR,equirect_vert:NR,equirect_frag:LR,linedashed_vert:OR,linedashed_frag:PR,meshbasic_vert:zR,meshbasic_frag:BR,meshlambert_vert:IR,meshlambert_frag:FR,meshmatcap_vert:HR,meshmatcap_frag:GR,meshnormal_vert:VR,meshnormal_frag:XR,meshphong_vert:kR,meshphong_frag:qR,meshphysical_vert:YR,meshphysical_frag:WR,meshtoon_vert:jR,meshtoon_frag:ZR,points_vert:QR,points_frag:KR,shadow_vert:JR,shadow_frag:$R,sprite_vert:tC,sprite_frag:eC},Jt={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},sa={basic:{uniforms:ti([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:ti([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:ti([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:ti([Jt.common,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.roughnessmap,Jt.metalnessmap,Jt.fog,Jt.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:ti([Jt.common,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.gradientmap,Jt.fog,Jt.lights,{emissive:{value:new Ge(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:ti([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:ti([Jt.points,Jt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:ti([Jt.common,Jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:ti([Jt.common,Jt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:ti([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:ti([Jt.sprite,Jt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:ti([Jt.common,Jt.displacementmap,{referencePosition:{value:new dt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:ti([Jt.lights,Jt.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};sa.physical={uniforms:ti([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const gc={r:0,b:0,g:0},Qr=new Ha,nC=new En;function iC(r,t,i,s,l,u,h){const d=new Ge(0);let p=u===!0?0:1,g,v,m=null,_=0,M=null;function E(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?i:t).get(R)),R}function T(N){let R=!1;const F=E(N);F===null?x(d,p):F&&F.isColor&&(x(F,1),R=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(N,R){const F=E(R);F&&(F.isCubeTexture||F.mapping===Nc)?(v===void 0&&(v=new ki(new Cl(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:yo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,L,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Qr.copy(R.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(nC.makeRotationFromEuler(Qr)),v.material.toneMapped=qe.getTransfer(F.colorSpace)!==en,(m!==F||_!==F.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,m=F,_=F.version,M=r.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new ki(new wl(2,2),new ei({name:"BackgroundMaterial",uniforms:yo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.toneMapped=qe.getTransfer(F.colorSpace)!==en,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||_!==F.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,m=F,_=F.version,M=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function x(N,R){N.getRGB(gc,q1(r)),s.buffers.color.setClear(gc.r,gc.g,gc.b,R,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,R=1){d.set(N),p=R,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,x(d,p)},render:T,addToRenderList:S,dispose:P}}function aC(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,h=!1;function d(b,B,Z,k,tt){let lt=!1;const q=m(k,Z,B);u!==q&&(u=q,g(u.object)),lt=M(b,k,Z,tt),lt&&E(b,k,Z,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,R(b,B,Z,k),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function p(){return r.createVertexArray()}function g(b){return r.bindVertexArray(b)}function v(b){return r.deleteVertexArray(b)}function m(b,B,Z){const k=Z.wireframe===!0;let tt=s[b.id];tt===void 0&&(tt={},s[b.id]=tt);let lt=tt[B.id];lt===void 0&&(lt={},tt[B.id]=lt);let q=lt[k];return q===void 0&&(q=_(p()),lt[k]=q),q}function _(b){const B=[],Z=[],k=[];for(let tt=0;tt<i;tt++)B[tt]=0,Z[tt]=0,k[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:k,object:b,attributes:{},index:null}}function M(b,B,Z,k){const tt=u.attributes,lt=B.attributes;let q=0;const it=Z.getAttributes();for(const Y in it)if(it[Y].location>=0){const vt=tt[Y];let Mt=lt[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Mt=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Mt=b.instanceColor)),vt===void 0||vt.attribute!==Mt||Mt&&vt.data!==Mt.data)return!0;q++}return u.attributesNum!==q||u.index!==k}function E(b,B,Z,k){const tt={},lt=B.attributes;let q=0;const it=Z.getAttributes();for(const Y in it)if(it[Y].location>=0){let vt=lt[Y];vt===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor));const Mt={};Mt.attribute=vt,vt&&vt.data&&(Mt.data=vt.data),tt[Y]=Mt,q++}u.attributes=tt,u.attributesNum=q,u.index=k}function T(){const b=u.newAttributes;for(let B=0,Z=b.length;B<Z;B++)b[B]=0}function S(b){x(b,0)}function x(b,B){const Z=u.newAttributes,k=u.enabledAttributes,tt=u.attributeDivisors;Z[b]=1,k[b]===0&&(r.enableVertexAttribArray(b),k[b]=1),tt[b]!==B&&(r.vertexAttribDivisor(b,B),tt[b]=B)}function P(){const b=u.newAttributes,B=u.enabledAttributes;for(let Z=0,k=B.length;Z<k;Z++)B[Z]!==b[Z]&&(r.disableVertexAttribArray(Z),B[Z]=0)}function N(b,B,Z,k,tt,lt,q){q===!0?r.vertexAttribIPointer(b,B,Z,tt,lt):r.vertexAttribPointer(b,B,Z,k,tt,lt)}function R(b,B,Z,k){T();const tt=k.attributes,lt=Z.getAttributes(),q=B.defaultAttributeValues;for(const it in lt){const Y=lt[it];if(Y.location>=0){let bt=tt[it];if(bt===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(bt=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(bt=b.instanceColor)),bt!==void 0){const vt=bt.normalized,Mt=bt.itemSize,Dt=t.get(bt);if(Dt===void 0)continue;const fe=Dt.buffer,U=Dt.type,W=Dt.bytesPerElement,pt=U===r.INT||U===r.UNSIGNED_INT||bt.gpuType===$p;if(bt.isInterleavedBufferAttribute){const ft=bt.data,xt=ft.stride,Lt=bt.offset;if(ft.isInstancedInterleavedBuffer){for(let It=0;It<Y.locationSize;It++)x(Y.location+It,ft.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let It=0;It<Y.locationSize;It++)S(Y.location+It);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let It=0;It<Y.locationSize;It++)N(Y.location+It,Mt/Y.locationSize,U,vt,xt*W,(Lt+Mt/Y.locationSize*It)*W,pt)}else{if(bt.isInstancedBufferAttribute){for(let ft=0;ft<Y.locationSize;ft++)x(Y.location+ft,bt.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ft=0;ft<Y.locationSize;ft++)S(Y.location+ft);r.bindBuffer(r.ARRAY_BUFFER,fe);for(let ft=0;ft<Y.locationSize;ft++)N(Y.location+ft,Mt/Y.locationSize,U,vt,Mt*W,Mt/Y.locationSize*ft*W,pt)}}else if(q!==void 0){const vt=q[it];if(vt!==void 0)switch(vt.length){case 2:r.vertexAttrib2fv(Y.location,vt);break;case 3:r.vertexAttrib3fv(Y.location,vt);break;case 4:r.vertexAttrib4fv(Y.location,vt);break;default:r.vertexAttrib1fv(Y.location,vt)}}}}P()}function F(){H();for(const b in s){const B=s[b];for(const Z in B){const k=B[Z];for(const tt in k)v(k[tt].object),delete k[tt];delete B[Z]}delete s[b]}}function z(b){if(s[b.id]===void 0)return;const B=s[b.id];for(const Z in B){const k=B[Z];for(const tt in k)v(k[tt].object),delete k[tt];delete B[Z]}delete s[b.id]}function L(b){for(const B in s){const Z=s[B];if(Z[b.id]===void 0)continue;const k=Z[b.id];for(const tt in k)v(k[tt].object),delete k[tt];delete Z[b.id]}}function H(){D(),h=!0,u!==l&&(u=l,g(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfProgram:L,initAttributes:T,enableAttribute:S,disableUnusedAttributes:P}}function rC(r,t,i){let s;function l(g){s=g}function u(g,v){r.drawArrays(s,g,v),i.update(v,s,1)}function h(g,v,m){m!==0&&(r.drawArraysInstanced(s,g,v,m),i.update(v,s,m))}function d(g,v,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,m);let M=0;for(let E=0;E<m;E++)M+=v[E];i.update(M,s,1)}function p(g,v,m,_){if(m===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<g.length;E++)h(g[E],v[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,v,0,_,0,m);let E=0;for(let T=0;T<m;T++)E+=v[T]*_[T];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function sC(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Xi&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const H=L===za&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Fa&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==La&&!H)}function p(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const m=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:F,maxSamples:z}}function oC(r){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Jr,d=new Ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const M=m.length!==0||_||s!==0||l;return l=_,s=m.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(m,_){i=v(m,_,0)},this.setState=function(m,_,M){const E=m.clippingPlanes,T=m.clipIntersection,S=m.clipShadows,x=r.get(m);if(!l||E===null||E.length===0||u&&!S)u?v(null):g();else{const P=u?0:s,N=P*4;let R=x.clippingState||null;p.value=R,R=v(E,_,N,M);for(let F=0;F!==N;++F)R[F]=i[F];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(m,_,M,E){const T=m!==null?m.length:0;let S=null;if(T!==0){if(S=p.value,E!==!0||S===null){const x=M+T*4,P=_.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,R=M;N!==T;++N,R+=4)h.copy(m[N]).applyMatrix4(P,d),h.normal.toArray(S,R),S[R+3]=h.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function lC(r){let t=new WeakMap;function i(h,d){return d===xp?h.mapping=mo:d===yp&&(h.mapping=go),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===xp||d===yp)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new h2(p.height);return g.fromEquirectangularTexture(r,h),t.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const uo=4,Mx=[.125,.215,.35,.446,.526,.582],es=20,Gd=new lm,Ex=new Ge;let Vd=null,Xd=0,kd=0,qd=!1;const $r=(1+Math.sqrt(5))/2,ao=1/$r,Tx=[new dt(-$r,ao,0),new dt($r,ao,0),new dt(-ao,0,$r),new dt(ao,0,$r),new dt(0,$r,-ao),new dt(0,$r,ao),new dt(-1,1,-1),new dt(1,1,-1),new dt(-1,1,1),new dt(1,1,1)];class bx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Vd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vd,Xd,kd),this._renderer.xr.enabled=qd,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===mo||t.mapping===go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),kd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:oa,minFilter:oa,generateMipmaps:!1,type:za,format:Xi,colorSpace:xo,depthBuffer:!1},l=Ax(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ax(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uC(u)),this._blurMaterial=cC(u,t,i)}return l}_compileMaterial(t){const i=new ki(this._lodPlanes[0],t);this._renderer.compile(i,Gd)}_sceneToCubeUV(t,i,s,l){const d=new Hi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,_=v.toneMapping;v.getClearColor(Ex),v.toneMapping=Mr,v.autoClear=!1;const M=new om({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),E=new ki(new Cl,M);let T=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,T=!0):(M.color.copy(Ex),T=!0);for(let x=0;x<6;x++){const P=x%3;P===0?(d.up.set(0,p[x],0),d.lookAt(g[x],0,0)):P===1?(d.up.set(0,0,p[x]),d.lookAt(0,g[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,g[x]));const N=this._cubeSize;vc(l,P*N,x>2?N:0,N,N),v.setRenderTarget(l),T&&v.render(E,d),v.render(t,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=_,v.autoClear=m,t.background=S}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===mo||t.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rx());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ki(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;vc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Gd)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Tx[(l-u-1)%Tx.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new ki(this._lodPlanes[l],g),_=g.uniforms,M=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*es-1),T=u/E,S=isFinite(u)?1+Math.floor(v*T):es;S>es&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${es}`);const x=[];let P=0;for(let L=0;L<es;++L){const H=L/T,D=Math.exp(-H*H/2);x.push(D),L===0?P+=D:L<S&&(P+=2*D)}for(let L=0;L<x.length;L++)x[L]=x[L]/P;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-s;const R=this._sizeLods[l],F=3*R*(l>N-uo?l-N+uo:0),z=4*(this._cubeSize-R);vc(i,F,z,3*R,2*R),p.setRenderTarget(i),p.render(m,Gd)}}function uC(r){const t=[],i=[],s=[];let l=r;const u=r-uo+1+Mx.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>r-uo?p=Mx[h-r+uo-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),v=-g,m=1+g,_=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,E=6,T=3,S=2,x=1,P=new Float32Array(T*E*M),N=new Float32Array(S*E*M),R=new Float32Array(x*E*M);for(let z=0;z<M;z++){const L=z%3*2/3-1,H=z>2?0:-1,D=[L,H,0,L+2/3,H,0,L+2/3,H+1,0,L,H,0,L+2/3,H+1,0,L,H+1,0];P.set(D,T*E*z),N.set(_,S*E*z);const b=[z,z,z,z,z,z];R.set(b,x*E*z)}const F=new Tr;F.setAttribute("position",new la(P,T)),F.setAttribute("uv",new la(N,S)),F.setAttribute("faceIndex",new la(R,x)),t.push(F),l>uo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Ax(r,t,i){const s=new Yi(r,t,i);return s.texture.mapping=Nc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function cC(r,t,i){const s=new Float32Array(es),l=new dt(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:um(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Rx(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:um(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Cx(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function um(){return`

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
	`}function fC(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===xp||p===yp,v=p===mo||p===go;if(g||v){let m=t.get(d);const _=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new bx(r)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new bx(r)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function hC(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&oo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function dC(r,t,i,s){const l={},u=new WeakMap;function h(m){const _=m.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const M=u.get(_);M&&(t.remove(M),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(m,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function p(m){const _=m.attributes;for(const M in _)t.update(_[M],r.ARRAY_BUFFER)}function g(m){const _=[],M=m.index,E=m.attributes.position;let T=0;if(M!==null){const P=M.array;T=M.version;for(let N=0,R=P.length;N<R;N+=3){const F=P[N+0],z=P[N+1],L=P[N+2];_.push(F,z,z,L,L,F)}}else if(E!==void 0){const P=E.array;T=E.version;for(let N=0,R=P.length/3-1;N<R;N+=3){const F=N+0,z=N+1,L=N+2;_.push(F,z,z,L,L,F)}}else return;const S=new(I1(_)?k1:X1)(_,1);S.version=T;const x=u.get(m);x&&t.remove(x),u.set(m,S)}function v(m){const _=u.get(m);if(_){const M=m.index;M!==null&&_.version<M.version&&g(m)}else g(m);return u.get(m)}return{get:d,update:p,getWireframeAttribute:v}}function pC(r,t,i){let s;function l(_){s=_}let u,h;function d(_){u=_.type,h=_.bytesPerElement}function p(_,M){r.drawElements(s,M,u,_*h),i.update(M,s,1)}function g(_,M,E){E!==0&&(r.drawElementsInstanced(s,M,u,_*h,E),i.update(M,s,E))}function v(_,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,_,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];i.update(S,s,1)}function m(_,M,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)g(_[x]/h,M[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,u,_,0,T,0,E);let x=0;for(let P=0;P<E;P++)x+=M[P]*T[P];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function mC(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function gC(r,t,i){const s=new WeakMap,l=new gn;function u(h,d,p){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==m){let b=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",b)};var M=b;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let F=d.attributes.position.count*R,z=1;F>t.maxTextureSize&&(z=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const L=new Float32Array(F*z*4*m),H=new H1(L,F,z,m);H.type=La,H.needsUpdate=!0;const D=R*4;for(let B=0;B<m;B++){const Z=x[B],k=P[B],tt=N[B],lt=F*z*4*B;for(let q=0;q<Z.count;q++){const it=q*D;E===!0&&(l.fromBufferAttribute(Z,q),L[lt+it+0]=l.x,L[lt+it+1]=l.y,L[lt+it+2]=l.z,L[lt+it+3]=0),T===!0&&(l.fromBufferAttribute(k,q),L[lt+it+4]=l.x,L[lt+it+5]=l.y,L[lt+it+6]=l.z,L[lt+it+7]=0),S===!0&&(l.fromBufferAttribute(tt,q),L[lt+it+8]=l.x,L[lt+it+9]=l.y,L[lt+it+10]=l.z,L[lt+it+11]=tt.itemSize===4?l.w:1)}}_={count:m,texture:H,size:new Re(F,z)},s.set(d,_),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<g.length;S++)E+=g[S];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",g)}p.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:u}}function vC(r,t,i,s){let l=new WeakMap;function u(p){const g=s.render.frame,v=p.geometry,m=t.get(p,v);if(l.get(m)!==g&&(t.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const K1=new li,wx=new Z1(1,1),J1=new H1,$1=new Zb,ty=new W1,Dx=[],Ux=[],Nx=new Float32Array(16),Lx=new Float32Array(9),Ox=new Float32Array(4);function To(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Dx[l];if(u===void 0&&(u=new Float32Array(l),Dx[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(u,d)}return u}function Rn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Cn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Oc(r,t){let i=Ux[t];i===void 0&&(i=new Int32Array(t),Ux[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function _C(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function xC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2fv(this.addr,t),Cn(i,t)}}function yC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rn(i,t))return;r.uniform3fv(this.addr,t),Cn(i,t)}}function SC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4fv(this.addr,t),Cn(i,t)}}function MC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;Ox.set(s),r.uniformMatrix2fv(this.addr,!1,Ox),Cn(i,s)}}function EC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;Lx.set(s),r.uniformMatrix3fv(this.addr,!1,Lx),Cn(i,s)}}function TC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;Nx.set(s),r.uniformMatrix4fv(this.addr,!1,Nx),Cn(i,s)}}function bC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function AC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2iv(this.addr,t),Cn(i,t)}}function RC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;r.uniform3iv(this.addr,t),Cn(i,t)}}function CC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4iv(this.addr,t),Cn(i,t)}}function wC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function DC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;r.uniform2uiv(this.addr,t),Cn(i,t)}}function UC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;r.uniform3uiv(this.addr,t),Cn(i,t)}}function NC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;r.uniform4uiv(this.addr,t),Cn(i,t)}}function LC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(wx.compareFunction=B1,u=wx):u=K1,i.setTexture2D(t||u,l)}function OC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||$1,l)}function PC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ty,l)}function zC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||J1,l)}function BC(r){switch(r){case 5126:return _C;case 35664:return xC;case 35665:return yC;case 35666:return SC;case 35674:return MC;case 35675:return EC;case 35676:return TC;case 5124:case 35670:return bC;case 35667:case 35671:return AC;case 35668:case 35672:return RC;case 35669:case 35673:return CC;case 5125:return wC;case 36294:return DC;case 36295:return UC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return LC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return PC;case 36289:case 36303:case 36311:case 36292:return zC}}function IC(r,t){r.uniform1fv(this.addr,t)}function FC(r,t){const i=To(t,this.size,2);r.uniform2fv(this.addr,i)}function HC(r,t){const i=To(t,this.size,3);r.uniform3fv(this.addr,i)}function GC(r,t){const i=To(t,this.size,4);r.uniform4fv(this.addr,i)}function VC(r,t){const i=To(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function XC(r,t){const i=To(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function kC(r,t){const i=To(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function qC(r,t){r.uniform1iv(this.addr,t)}function YC(r,t){r.uniform2iv(this.addr,t)}function WC(r,t){r.uniform3iv(this.addr,t)}function jC(r,t){r.uniform4iv(this.addr,t)}function ZC(r,t){r.uniform1uiv(this.addr,t)}function QC(r,t){r.uniform2uiv(this.addr,t)}function KC(r,t){r.uniform3uiv(this.addr,t)}function JC(r,t){r.uniform4uiv(this.addr,t)}function $C(r,t,i){const s=this.cache,l=t.length,u=Oc(i,l);Rn(s,u)||(r.uniform1iv(this.addr,u),Cn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||K1,u[h])}function tw(r,t,i){const s=this.cache,l=t.length,u=Oc(i,l);Rn(s,u)||(r.uniform1iv(this.addr,u),Cn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||$1,u[h])}function ew(r,t,i){const s=this.cache,l=t.length,u=Oc(i,l);Rn(s,u)||(r.uniform1iv(this.addr,u),Cn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ty,u[h])}function nw(r,t,i){const s=this.cache,l=t.length,u=Oc(i,l);Rn(s,u)||(r.uniform1iv(this.addr,u),Cn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||J1,u[h])}function iw(r){switch(r){case 5126:return IC;case 35664:return FC;case 35665:return HC;case 35666:return GC;case 35674:return VC;case 35675:return XC;case 35676:return kC;case 5124:case 35670:return qC;case 35667:case 35671:return YC;case 35668:case 35672:return WC;case 35669:case 35673:return jC;case 5125:return ZC;case 36294:return QC;case 36295:return KC;case 36296:return JC;case 35678:case 36198:case 36298:case 36306:case 35682:return $C;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return ew;case 36289:case 36303:case 36311:case 36292:return nw}}class aw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=BC(i.type)}}class rw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iw(i.type)}}class sw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function Px(r,t){r.seq.push(t),r.map[t.id]=t}function ow(r,t,i){const s=r.name,l=s.length;for(Yd.lastIndex=0;;){const u=Yd.exec(s),h=Yd.lastIndex;let d=u[1];const p=u[2]==="]",g=u[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){Px(i,g===void 0?new aw(d,r,t):new rw(d,r,t));break}else{let m=i.map[d];m===void 0&&(m=new sw(d),Px(i,m)),i=m}}}class bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);ow(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function zx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const lw=37297;let uw=0;function cw(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Bx=new Ce;function fw(r){qe._getMatrix(Bx,qe.workingColorSpace,r);const t=`mat3( ${Bx.elements.map(i=>i.toFixed(4))} )`;switch(qe.getTransfer(r)){case Cc:return[t,"LinearTransferOETF"];case en:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ix(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+cw(r.getShaderSource(t),h)}else return l}function hw(r,t){const i=fw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function dw(r,t){let i;switch(t){case rb:i="Linear";break;case sb:i="Reinhard";break;case ob:i="Cineon";break;case lb:i="ACESFilmic";break;case cb:i="AgX";break;case fb:i="Neutral";break;case ub:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new dt;function pw(){qe.getLuminanceCoefficients(_c);const r=_c.x.toFixed(4),t=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yl).join(`
`)}function gw(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function vw(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function yl(r){return r!==""}function Fx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(r){return r.replace(_w,yw)}const xw=new Map;function yw(r,t){let i=we[t];if(i===void 0){const s=xw.get(t);if(s!==void 0)i=we[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Zp(i)}const Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gx(r){return r.replace(Sw,Mw)}function Mw(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Vx(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ew(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===T1?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===IT?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ua&&(t="SHADOWMAP_TYPE_VSM"),t}function Tw(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case mo:case go:t="ENVMAP_TYPE_CUBE";break;case Nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bw(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case go:t="ENVMAP_MODE_REFRACTION";break}return t}function Aw(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case b1:t="ENVMAP_BLENDING_MULTIPLY";break;case ib:t="ENVMAP_BLENDING_MIX";break;case ab:t="ENVMAP_BLENDING_ADD";break}return t}function Rw(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Cw(r,t,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=Ew(i),g=Tw(i),v=bw(i),m=Aw(i),_=Rw(i),M=mw(i),E=gw(u),T=l.createProgram();let S,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(yl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(yl).join(`
`),x.length>0&&(x+=`
`)):(S=[Vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yl).join(`
`),x=[Vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Mr?"#define TONE_MAPPING":"",i.toneMapping!==Mr?we.tonemapping_pars_fragment:"",i.toneMapping!==Mr?dw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,hw("linearToOutputTexel",i.outputColorSpace),pw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yl).join(`
`)),h=Zp(h),h=Fx(h,i),h=Hx(h,i),d=Zp(d),d=Fx(d,i),d=Hx(d,i),h=Gx(h),d=Gx(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+S+h,R=P+x+d,F=zx(l,l.VERTEX_SHADER,N),z=zx(l,l.FRAGMENT_SHADER,R);l.attachShader(T,F),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function L(B){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(T).trim(),k=l.getShaderInfoLog(F).trim(),tt=l.getShaderInfoLog(z).trim();let lt=!0,q=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(lt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,F,z);else{const it=Ix(l,F,"vertex"),Y=Ix(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Z+`
`+it+`
`+Y)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(k===""||tt==="")&&(q=!1);q&&(B.diagnostics={runnable:lt,programLog:Z,vertexShader:{log:k,prefix:S},fragmentShader:{log:tt,prefix:x}})}l.deleteShader(F),l.deleteShader(z),H=new bc(l,T),D=vw(l,T)}let H;this.getUniforms=function(){return H===void 0&&L(this),H};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(T,lw)),b},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uw++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=z,this}let ww=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Uw(t),i.set(t,s)),s}}class Uw{constructor(t){this.id=ww++,this.code=t,this.usedTimes=0}}function Nw(r,t,i,s,l,u,h){const d=new G1,p=new Dw,g=new Set,v=[],m=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return g.add(D),D===0?"uv":`uv${D}`}function S(D,b,B,Z,k){const tt=Z.fog,lt=k.geometry,q=D.isMeshStandardMaterial?Z.environment:null,it=(D.isMeshStandardMaterial?i:t).get(D.envMap||q),Y=it&&it.mapping===Nc?it.image.height:null,bt=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const vt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Mt=vt!==void 0?vt.length:0;let Dt=0;lt.morphAttributes.position!==void 0&&(Dt=1),lt.morphAttributes.normal!==void 0&&(Dt=2),lt.morphAttributes.color!==void 0&&(Dt=3);let fe,U,W,pt;if(bt){const wt=sa[bt];fe=wt.vertexShader,U=wt.fragmentShader}else fe=D.vertexShader,U=D.fragmentShader,p.update(D),W=p.getVertexShaderID(D),pt=p.getFragmentShaderID(D);const ft=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Lt=k.isInstancedMesh===!0,It=k.isBatchedMesh===!0,Ct=!!D.map,Ut=!!D.matcap,re=!!it,G=!!D.aoMap,Ve=!!D.lightMap,ee=!!D.bumpMap,se=!!D.normalMap,Pt=!!D.displacementMap,ve=!!D.emissiveMap,Xt=!!D.metalnessMap,O=!!D.roughnessMap,C=D.anisotropy>0,st=D.clearcoat>0,Et=D.dispersion>0,Rt=D.iridescence>0,gt=D.sheen>0,Kt=D.transmission>0,Gt=C&&!!D.anisotropyMap,kt=st&&!!D.clearcoatMap,xe=st&&!!D.clearcoatNormalMap,Ot=st&&!!D.clearcoatRoughnessMap,qt=Rt&&!!D.iridescenceMap,$t=Rt&&!!D.iridescenceThicknessMap,te=gt&&!!D.sheenColorMap,Tt=gt&&!!D.sheenRoughnessMap,zt=!!D.specularMap,ue=!!D.specularColorMap,ge=!!D.specularIntensityMap,V=Kt&&!!D.transmissionMap,Ht=Kt&&!!D.thicknessMap,ht=!!D.gradientMap,At=!!D.alphaMap,jt=D.alphaTest>0,Zt=!!D.alphaHash,he=!!D.extensions;let We=Mr;D.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(We=r.toneMapping);const Je={shaderID:bt,shaderType:D.type,shaderName:D.name,vertexShader:fe,fragmentShader:U,defines:D.defines,customVertexShaderID:W,customFragmentShaderID:pt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:It,batchingColor:It&&k._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,instancingMorph:Lt&&k.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:xo,alphaToCoverage:!!D.alphaToCoverage,map:Ct,matcap:Ut,envMap:re,envMapMode:re&&it.mapping,envMapCubeUVHeight:Y,aoMap:G,lightMap:Ve,bumpMap:ee,normalMap:se,displacementMap:_&&Pt,emissiveMap:ve,normalMapObjectSpace:se&&D.normalMapType===gb,normalMapTangentSpace:se&&D.normalMapType===mb,metalnessMap:Xt,roughnessMap:O,anisotropy:C,anisotropyMap:Gt,clearcoat:st,clearcoatMap:kt,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ot,dispersion:Et,iridescence:Rt,iridescenceMap:qt,iridescenceThicknessMap:$t,sheen:gt,sheenColorMap:te,sheenRoughnessMap:Tt,specularMap:zt,specularColorMap:ue,specularIntensityMap:ge,transmission:Kt,transmissionMap:V,thicknessMap:Ht,gradientMap:ht,opaque:D.transparent===!1&&D.blending===co&&D.alphaToCoverage===!1,alphaMap:At,alphaTest:jt,alphaHash:Zt,combine:D.combine,mapUv:Ct&&T(D.map.channel),aoMapUv:G&&T(D.aoMap.channel),lightMapUv:Ve&&T(D.lightMap.channel),bumpMapUv:ee&&T(D.bumpMap.channel),normalMapUv:se&&T(D.normalMap.channel),displacementMapUv:Pt&&T(D.displacementMap.channel),emissiveMapUv:ve&&T(D.emissiveMap.channel),metalnessMapUv:Xt&&T(D.metalnessMap.channel),roughnessMapUv:O&&T(D.roughnessMap.channel),anisotropyMapUv:Gt&&T(D.anisotropyMap.channel),clearcoatMapUv:kt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:xe&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:te&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&T(D.sheenRoughnessMap.channel),specularMapUv:zt&&T(D.specularMap.channel),specularColorMapUv:ue&&T(D.specularColorMap.channel),specularIntensityMapUv:ge&&T(D.specularIntensityMap.channel),transmissionMapUv:V&&T(D.transmissionMap.channel),thicknessMapUv:Ht&&T(D.thicknessMap.channel),alphaMapUv:At&&T(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(se||C),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!lt.attributes.uv&&(Ct||At),fog:!!tt,useFog:D.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:xt,skinning:k.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:Ct&&D.map.isVideoTexture===!0&&qe.getTransfer(D.map.colorSpace)===en,decodeVideoTextureEmissive:ve&&D.emissiveMap.isVideoTexture===!0&&qe.getTransfer(D.emissiveMap.colorSpace)===en,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Na,flipSided:D.side===oi,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:he&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&D.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Je.vertexUv1s=g.has(1),Je.vertexUv2s=g.has(2),Je.vertexUv3s=g.has(3),g.clear(),Je}function x(D){const b=[];if(D.shaderID?b.push(D.shaderID):(b.push(D.customVertexShaderID),b.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)b.push(B),b.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(P(b,D),N(b,D),b.push(r.outputColorSpace)),b.push(D.customProgramCacheKey),b.join()}function P(D,b){D.push(b.precision),D.push(b.outputColorSpace),D.push(b.envMapMode),D.push(b.envMapCubeUVHeight),D.push(b.mapUv),D.push(b.alphaMapUv),D.push(b.lightMapUv),D.push(b.aoMapUv),D.push(b.bumpMapUv),D.push(b.normalMapUv),D.push(b.displacementMapUv),D.push(b.emissiveMapUv),D.push(b.metalnessMapUv),D.push(b.roughnessMapUv),D.push(b.anisotropyMapUv),D.push(b.clearcoatMapUv),D.push(b.clearcoatNormalMapUv),D.push(b.clearcoatRoughnessMapUv),D.push(b.iridescenceMapUv),D.push(b.iridescenceThicknessMapUv),D.push(b.sheenColorMapUv),D.push(b.sheenRoughnessMapUv),D.push(b.specularMapUv),D.push(b.specularColorMapUv),D.push(b.specularIntensityMapUv),D.push(b.transmissionMapUv),D.push(b.thicknessMapUv),D.push(b.combine),D.push(b.fogExp2),D.push(b.sizeAttenuation),D.push(b.morphTargetsCount),D.push(b.morphAttributeCount),D.push(b.numDirLights),D.push(b.numPointLights),D.push(b.numSpotLights),D.push(b.numSpotLightMaps),D.push(b.numHemiLights),D.push(b.numRectAreaLights),D.push(b.numDirLightShadows),D.push(b.numPointLightShadows),D.push(b.numSpotLightShadows),D.push(b.numSpotLightShadowsWithMaps),D.push(b.numLightProbes),D.push(b.shadowMapType),D.push(b.toneMapping),D.push(b.numClippingPlanes),D.push(b.numClipIntersection),D.push(b.depthPacking)}function N(D,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),D.push(d.mask)}function R(D){const b=E[D.type];let B;if(b){const Z=sa[b];B=Uc.clone(Z.uniforms)}else B=D.uniforms;return B}function F(D,b){let B;for(let Z=0,k=v.length;Z<k;Z++){const tt=v[Z];if(tt.cacheKey===b){B=tt,++B.usedTimes;break}}return B===void 0&&(B=new Cw(r,b,D,u),v.push(B)),B}function z(D){if(--D.usedTimes===0){const b=v.indexOf(D);v[b]=v[v.length-1],v.pop(),D.destroy()}}function L(D){p.remove(D)}function H(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:F,releaseProgram:z,releaseShaderCache:L,programs:v,dispose:H}}function Lw(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Ow(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Xx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function kx(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(m,_,M,E,T,S){let x=r[t];return x===void 0?(x={id:m.id,object:m,geometry:_,material:M,groupOrder:E,renderOrder:m.renderOrder,z:T,group:S},r[t]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=M,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=T,x.group=S),t++,x}function d(m,_,M,E,T,S){const x=h(m,_,M,E,T,S);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function p(m,_,M,E,T,S){const x=h(m,_,M,E,T,S);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function g(m,_){i.length>1&&i.sort(m||Ow),s.length>1&&s.sort(_||Xx),l.length>1&&l.sort(_||Xx)}function v(){for(let m=t,_=r.length;m<_;m++){const M=r[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:g}}function Pw(){let r=new WeakMap;function t(s,l){const u=r.get(s);let h;return u===void 0?(h=new kx,r.set(s,[h])):l>=u.length?(h=new kx,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function zw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new dt,color:new Ge};break;case"SpotLight":i={position:new dt,direction:new dt,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new dt,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new dt,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new dt,halfWidth:new dt,halfHeight:new dt};break}return r[t.id]=i,i}}}function Bw(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let Iw=0;function Fw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Hw(r){const t=new zw,i=Bw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new dt);const l=new dt,u=new En,h=new En;function d(g){let v=0,m=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,T=0,S=0,x=0,P=0,N=0,R=0,F=0,z=0,L=0;g.sort(Fw);for(let D=0,b=g.length;D<b;D++){const B=g[D],Z=B.color,k=B.intensity,tt=B.distance,lt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=Z.r*k,m+=Z.g*k,_+=Z.b*k;else if(B.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(B.sh.coefficients[q],k);L++}else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const it=B.shadow,Y=i.get(B);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=B.shadow.matrix,P++}s.directional[M]=q,M++}else if(B.isSpotLight){const q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(Z).multiplyScalar(k),q.distance=tt,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,s.spot[T]=q;const it=B.shadow;if(B.map&&(s.spotLightMap[F]=B.map,F++,it.updateMatrices(B),B.castShadow&&z++),s.spotLightMatrix[T]=it.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,s.spotShadow[T]=Y,s.spotShadowMap[T]=lt,R++}T++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(Z).multiplyScalar(k),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=q,S++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity),q.distance=B.distance,q.decay=B.decay,B.castShadow){const it=B.shadow,Y=i.get(B);Y.shadowIntensity=it.intensity,Y.shadowBias=it.bias,Y.shadowNormalBias=it.normalBias,Y.shadowRadius=it.radius,Y.shadowMapSize=it.mapSize,Y.shadowCameraNear=it.camera.near,Y.shadowCameraFar=it.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=lt,s.pointShadowMatrix[E]=B.shadow.matrix,N++}s.point[E]=q,E++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(k),q.groundColor.copy(B.groundColor).multiplyScalar(k),s.hemi[x]=q,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Jt.LTC_FLOAT_1,s.rectAreaLTC2=Jt.LTC_FLOAT_2):(s.rectAreaLTC1=Jt.LTC_HALF_1,s.rectAreaLTC2=Jt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=_;const H=s.hash;(H.directionalLength!==M||H.pointLength!==E||H.spotLength!==T||H.rectAreaLength!==S||H.hemiLength!==x||H.numDirectionalShadows!==P||H.numPointShadows!==N||H.numSpotShadows!==R||H.numSpotMaps!==F||H.numLightProbes!==L)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=R+F-z,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=L,H.directionalLength=M,H.pointLength=E,H.spotLength=T,H.rectAreaLength=S,H.hemiLength=x,H.numDirectionalShadows=P,H.numPointShadows=N,H.numSpotShadows=R,H.numSpotMaps=F,H.numLightProbes=L,s.version=Iw++)}function p(g,v){let m=0,_=0,M=0,E=0,T=0;const S=v.matrixWorldInverse;for(let x=0,P=g.length;x<P;x++){const N=g[x];if(N.isDirectionalLight){const R=s.directional[m];R.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),m++}else if(N.isSpotLight){const R=s.spot[M];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),h.identity(),u.copy(N.matrixWorld),u.premultiply(S),h.extractRotation(u),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const R=s.point[_];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(S),_++}else if(N.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:d,setupView:p,state:s}}function qx(r){const t=new Hw(r),i=[],s=[];function l(v){g.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function Gw(r){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new qx(r),t.set(l,[d])):u>=h.length?(d=new qx(r),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
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
}`;function kw(r,t,i){let s=new j1;const l=new Re,u=new Re,h=new gn,d=new v2({depthPacking:pb}),p=new _2,g={},v=i.maxTextureSize,m={[Er]:oi,[oi]:Er,[Na]:Na},_=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Vw,fragmentShader:Xw}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Tr;E.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ki(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T1;let x=this.type;this.render=function(z,L,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const D=r.getRenderTarget(),b=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Pa),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const k=x!==Ua&&this.type===Ua,tt=x===Ua&&this.type!==Ua;for(let lt=0,q=z.length;lt<q;lt++){const it=z[lt],Y=it.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const bt=Y.getFrameExtents();if(l.multiply(bt),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/bt.x),l.x=u.x*bt.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/bt.y),l.y=u.y*bt.y,Y.mapSize.y=u.y)),Y.map===null||k===!0||tt===!0){const Mt=this.type!==Ua?{minFilter:qi,magFilter:qi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yi(l.x,l.y,Mt),Y.map.texture.name=it.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const vt=Y.getViewportCount();for(let Mt=0;Mt<vt;Mt++){const Dt=Y.getViewport(Mt);h.set(u.x*Dt.x,u.y*Dt.y,u.x*Dt.z,u.y*Dt.w),Z.viewport(h),Y.updateMatrices(it,Mt),s=Y.getFrustum(),R(L,H,Y.camera,it,this.type)}Y.isPointLightShadow!==!0&&this.type===Ua&&P(Y,H),Y.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(D,b,B)};function P(z,L){const H=t.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Yi(l.x,l.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(L,null,H,_,T,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(L,null,H,M,T,null)}function N(z,L,H,D){let b=null;const B=H.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)b=B;else if(b=H.isPointLight===!0?p:d,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Z=b.uuid,k=L.uuid;let tt=g[Z];tt===void 0&&(tt={},g[Z]=tt);let lt=tt[k];lt===void 0&&(lt=b.clone(),tt[k]=lt,L.addEventListener("dispose",F)),b=lt}if(b.visible=L.visible,b.wireframe=L.wireframe,D===Ua?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:m[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,H.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Z=r.properties.get(b);Z.light=H}return b}function R(z,L,H,D,b){if(z.visible===!1)return;if(z.layers.test(L.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&b===Ua)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,z.matrixWorld);const k=t.update(z),tt=z.material;if(Array.isArray(tt)){const lt=k.groups;for(let q=0,it=lt.length;q<it;q++){const Y=lt[q],bt=tt[Y.materialIndex];if(bt&&bt.visible){const vt=N(z,bt,D,b);z.onBeforeShadow(r,z,L,H,k,vt,Y),r.renderBufferDirect(H,null,k,vt,z,Y),z.onAfterShadow(r,z,L,H,k,vt,Y)}}}else if(tt.visible){const lt=N(z,tt,D,b);z.onBeforeShadow(r,z,L,H,k,lt,null),r.renderBufferDirect(H,null,k,lt,z,null),z.onAfterShadow(r,z,L,H,k,lt,null)}}const Z=z.children;for(let k=0,tt=Z.length;k<tt;k++)R(Z[k],L,H,D,b)}function F(z){z.target.removeEventListener("dispose",F);for(const H in g){const D=g[H],b=z.target.uuid;b in D&&(D[b].dispose(),delete D[b])}}}const qw={[hp]:dp,[pp]:vp,[mp]:_p,[po]:gp,[dp]:hp,[vp]:pp,[_p]:mp,[gp]:po};function Yw(r,t){function i(){let V=!1;const Ht=new gn;let ht=null;const At=new gn(0,0,0,0);return{setMask:function(jt){ht!==jt&&!V&&(r.colorMask(jt,jt,jt,jt),ht=jt)},setLocked:function(jt){V=jt},setClear:function(jt,Zt,he,We,Je){Je===!0&&(jt*=We,Zt*=We,he*=We),Ht.set(jt,Zt,he,We),At.equals(Ht)===!1&&(r.clearColor(jt,Zt,he,We),At.copy(Ht))},reset:function(){V=!1,ht=null,At.set(-1,0,0,0)}}}function s(){let V=!1,Ht=!1,ht=null,At=null,jt=null;return{setReversed:function(Zt){if(Ht!==Zt){const he=t.get("EXT_clip_control");Ht?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);const We=jt;jt=null,this.setClear(We)}Ht=Zt},getReversed:function(){return Ht},setTest:function(Zt){Zt?ft(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(Zt){ht!==Zt&&!V&&(r.depthMask(Zt),ht=Zt)},setFunc:function(Zt){if(Ht&&(Zt=qw[Zt]),At!==Zt){switch(Zt){case hp:r.depthFunc(r.NEVER);break;case dp:r.depthFunc(r.ALWAYS);break;case pp:r.depthFunc(r.LESS);break;case po:r.depthFunc(r.LEQUAL);break;case mp:r.depthFunc(r.EQUAL);break;case gp:r.depthFunc(r.GEQUAL);break;case vp:r.depthFunc(r.GREATER);break;case _p:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}At=Zt}},setLocked:function(Zt){V=Zt},setClear:function(Zt){jt!==Zt&&(Ht&&(Zt=1-Zt),r.clearDepth(Zt),jt=Zt)},reset:function(){V=!1,ht=null,At=null,jt=null,Ht=!1}}}function l(){let V=!1,Ht=null,ht=null,At=null,jt=null,Zt=null,he=null,We=null,Je=null;return{setTest:function(wt){V||(wt?ft(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(wt){Ht!==wt&&!V&&(r.stencilMask(wt),Ht=wt)},setFunc:function(wt,_t,Ft){(ht!==wt||At!==_t||jt!==Ft)&&(r.stencilFunc(wt,_t,Ft),ht=wt,At=_t,jt=Ft)},setOp:function(wt,_t,Ft){(Zt!==wt||he!==_t||We!==Ft)&&(r.stencilOp(wt,_t,Ft),Zt=wt,he=_t,We=Ft)},setLocked:function(wt){V=wt},setClear:function(wt){Je!==wt&&(r.clearStencil(wt),Je=wt)},reset:function(){V=!1,Ht=null,ht=null,At=null,jt=null,Zt=null,he=null,We=null,Je=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let v={},m={},_=new WeakMap,M=[],E=null,T=!1,S=null,x=null,P=null,N=null,R=null,F=null,z=null,L=new Ge(0,0,0),H=0,D=!1,b=null,B=null,Z=null,k=null,tt=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,it=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=it>=2);let bt=null,vt={};const Mt=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),fe=new gn().fromArray(Mt),U=new gn().fromArray(Dt);function W(V,Ht,ht,At){const jt=new Uint8Array(4),Zt=r.createTexture();r.bindTexture(V,Zt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let he=0;he<ht;he++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ht,0,r.RGBA,1,1,At,0,r.RGBA,r.UNSIGNED_BYTE,jt):r.texImage2D(Ht+he,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,jt);return Zt}const pt={};pt[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),pt[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pt[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(r.DEPTH_TEST),h.setFunc(po),ee(!1),se(Z_),ft(r.CULL_FACE),G(Pa);function ft(V){v[V]!==!0&&(r.enable(V),v[V]=!0)}function xt(V){v[V]!==!1&&(r.disable(V),v[V]=!1)}function Lt(V,Ht){return m[V]!==Ht?(r.bindFramebuffer(V,Ht),m[V]=Ht,V===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Ht),V===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Ht),!0):!1}function It(V,Ht){let ht=M,At=!1;if(V){ht=_.get(Ht),ht===void 0&&(ht=[],_.set(Ht,ht));const jt=V.textures;if(ht.length!==jt.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let Zt=0,he=jt.length;Zt<he;Zt++)ht[Zt]=r.COLOR_ATTACHMENT0+Zt;ht.length=jt.length,At=!0}}else ht[0]!==r.BACK&&(ht[0]=r.BACK,At=!0);At&&r.drawBuffers(ht)}function Ct(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const Ut={[ts]:r.FUNC_ADD,[HT]:r.FUNC_SUBTRACT,[GT]:r.FUNC_REVERSE_SUBTRACT};Ut[VT]=r.MIN,Ut[XT]=r.MAX;const re={[kT]:r.ZERO,[qT]:r.ONE,[YT]:r.SRC_COLOR,[cp]:r.SRC_ALPHA,[JT]:r.SRC_ALPHA_SATURATE,[QT]:r.DST_COLOR,[jT]:r.DST_ALPHA,[WT]:r.ONE_MINUS_SRC_COLOR,[fp]:r.ONE_MINUS_SRC_ALPHA,[KT]:r.ONE_MINUS_DST_COLOR,[ZT]:r.ONE_MINUS_DST_ALPHA,[$T]:r.CONSTANT_COLOR,[tb]:r.ONE_MINUS_CONSTANT_COLOR,[eb]:r.CONSTANT_ALPHA,[nb]:r.ONE_MINUS_CONSTANT_ALPHA};function G(V,Ht,ht,At,jt,Zt,he,We,Je,wt){if(V===Pa){T===!0&&(xt(r.BLEND),T=!1);return}if(T===!1&&(ft(r.BLEND),T=!0),V!==FT){if(V!==S||wt!==D){if((x!==ts||R!==ts)&&(r.blendEquation(r.FUNC_ADD),x=ts,R=ts),wt)switch(V){case co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case up:r.blendFunc(r.ONE,r.ONE);break;case Q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case up:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case K_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,N=null,F=null,z=null,L.set(0,0,0),H=0,S=V,D=wt}return}jt=jt||Ht,Zt=Zt||ht,he=he||At,(Ht!==x||jt!==R)&&(r.blendEquationSeparate(Ut[Ht],Ut[jt]),x=Ht,R=jt),(ht!==P||At!==N||Zt!==F||he!==z)&&(r.blendFuncSeparate(re[ht],re[At],re[Zt],re[he]),P=ht,N=At,F=Zt,z=he),(We.equals(L)===!1||Je!==H)&&(r.blendColor(We.r,We.g,We.b,Je),L.copy(We),H=Je),S=V,D=!1}function Ve(V,Ht){V.side===Na?xt(r.CULL_FACE):ft(r.CULL_FACE);let ht=V.side===oi;Ht&&(ht=!ht),ee(ht),V.blending===co&&V.transparent===!1?G(Pa):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const At=V.stencilWrite;d.setTest(At),At&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ve(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){b!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),b=V)}function se(V){V!==zT?(ft(r.CULL_FACE),V!==B&&(V===Z_?r.cullFace(r.BACK):V===BT?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),B=V}function Pt(V){V!==Z&&(q&&r.lineWidth(V),Z=V)}function ve(V,Ht,ht){V?(ft(r.POLYGON_OFFSET_FILL),(k!==Ht||tt!==ht)&&(r.polygonOffset(Ht,ht),k=Ht,tt=ht)):xt(r.POLYGON_OFFSET_FILL)}function Xt(V){V?ft(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function O(V){V===void 0&&(V=r.TEXTURE0+lt-1),bt!==V&&(r.activeTexture(V),bt=V)}function C(V,Ht,ht){ht===void 0&&(bt===null?ht=r.TEXTURE0+lt-1:ht=bt);let At=vt[ht];At===void 0&&(At={type:void 0,texture:void 0},vt[ht]=At),(At.type!==V||At.texture!==Ht)&&(bt!==ht&&(r.activeTexture(ht),bt=ht),r.bindTexture(V,Ht||pt[V]),At.type=V,At.texture=Ht)}function st(){const V=vt[bt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $t(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(V){fe.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),fe.copy(V))}function Tt(V){U.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),U.copy(V))}function zt(V,Ht){let ht=g.get(Ht);ht===void 0&&(ht=new WeakMap,g.set(Ht,ht));let At=ht.get(V);At===void 0&&(At=r.getUniformBlockIndex(Ht,V.name),ht.set(V,At))}function ue(V,Ht){const At=g.get(Ht).get(V);p.get(Ht)!==At&&(r.uniformBlockBinding(Ht,At,V.__bindingPointIndex),p.set(Ht,At))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},bt=null,vt={},m={},_=new WeakMap,M=[],E=null,T=!1,S=null,x=null,P=null,N=null,R=null,F=null,z=null,L=new Ge(0,0,0),H=0,D=!1,b=null,B=null,Z=null,k=null,tt=null,fe.set(0,0,r.canvas.width,r.canvas.height),U.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ft,disable:xt,bindFramebuffer:Lt,drawBuffers:It,useProgram:Ct,setBlending:G,setMaterial:Ve,setFlipSided:ee,setCullFace:se,setLineWidth:Pt,setPolygonOffset:ve,setScissorTest:Xt,activeTexture:O,bindTexture:C,unbindTexture:st,compressedTexImage2D:Et,compressedTexImage3D:Rt,texImage2D:qt,texImage3D:$t,updateUBOMapping:zt,uniformBlockBinding:ue,texStorage2D:xe,texStorage3D:Ot,texSubImage2D:gt,texSubImage3D:Kt,compressedTexSubImage2D:Gt,compressedTexSubImage3D:kt,scissor:te,viewport:Tt,reset:ge}}function Ww(r,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Re,v=new WeakMap;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,C){return M?new OffscreenCanvas(O,C):Dc("canvas")}function T(O,C,st){let Et=1;const Rt=Xt(O);if((Rt.width>st||Rt.height>st)&&(Et=st/Math.max(Rt.width,Rt.height)),Et<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const gt=Math.floor(Et*Rt.width),Kt=Math.floor(Et*Rt.height);m===void 0&&(m=E(gt,Kt));const Gt=C?E(gt,Kt):m;return Gt.width=gt,Gt.height=Kt,Gt.getContext("2d").drawImage(O,0,0,gt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Rt.width+"x"+Rt.height+") to ("+gt+"x"+Kt+")."),Gt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Rt.width+"x"+Rt.height+")."),O;return O}function S(O){return O.generateMipmaps}function x(O){r.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(O,C,st,Et,Rt=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let gt=C;if(C===r.RED&&(st===r.FLOAT&&(gt=r.R32F),st===r.HALF_FLOAT&&(gt=r.R16F),st===r.UNSIGNED_BYTE&&(gt=r.R8)),C===r.RED_INTEGER&&(st===r.UNSIGNED_BYTE&&(gt=r.R8UI),st===r.UNSIGNED_SHORT&&(gt=r.R16UI),st===r.UNSIGNED_INT&&(gt=r.R32UI),st===r.BYTE&&(gt=r.R8I),st===r.SHORT&&(gt=r.R16I),st===r.INT&&(gt=r.R32I)),C===r.RG&&(st===r.FLOAT&&(gt=r.RG32F),st===r.HALF_FLOAT&&(gt=r.RG16F),st===r.UNSIGNED_BYTE&&(gt=r.RG8)),C===r.RG_INTEGER&&(st===r.UNSIGNED_BYTE&&(gt=r.RG8UI),st===r.UNSIGNED_SHORT&&(gt=r.RG16UI),st===r.UNSIGNED_INT&&(gt=r.RG32UI),st===r.BYTE&&(gt=r.RG8I),st===r.SHORT&&(gt=r.RG16I),st===r.INT&&(gt=r.RG32I)),C===r.RGB_INTEGER&&(st===r.UNSIGNED_BYTE&&(gt=r.RGB8UI),st===r.UNSIGNED_SHORT&&(gt=r.RGB16UI),st===r.UNSIGNED_INT&&(gt=r.RGB32UI),st===r.BYTE&&(gt=r.RGB8I),st===r.SHORT&&(gt=r.RGB16I),st===r.INT&&(gt=r.RGB32I)),C===r.RGBA_INTEGER&&(st===r.UNSIGNED_BYTE&&(gt=r.RGBA8UI),st===r.UNSIGNED_SHORT&&(gt=r.RGBA16UI),st===r.UNSIGNED_INT&&(gt=r.RGBA32UI),st===r.BYTE&&(gt=r.RGBA8I),st===r.SHORT&&(gt=r.RGBA16I),st===r.INT&&(gt=r.RGBA32I)),C===r.RGB&&st===r.UNSIGNED_INT_5_9_9_9_REV&&(gt=r.RGB9_E5),C===r.RGBA){const Kt=Rt?Cc:qe.getTransfer(Et);st===r.FLOAT&&(gt=r.RGBA32F),st===r.HALF_FLOAT&&(gt=r.RGBA16F),st===r.UNSIGNED_BYTE&&(gt=Kt===en?r.SRGB8_ALPHA8:r.RGBA8),st===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),st===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function R(O,C){let st;return O?C===null||C===as||C===vo?st=r.DEPTH24_STENCIL8:C===La?st=r.DEPTH32F_STENCIL8:C===Tl&&(st=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===as||C===vo?st=r.DEPTH_COMPONENT24:C===La?st=r.DEPTH_COMPONENT32F:C===Tl&&(st=r.DEPTH_COMPONENT16),st}function F(O,C){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==qi&&O.minFilter!==oa?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function z(O){const C=O.target;C.removeEventListener("dispose",z),H(C),C.isVideoTexture&&v.delete(C)}function L(O){const C=O.target;C.removeEventListener("dispose",L),b(C)}function H(O){const C=s.get(O);if(C.__webglInit===void 0)return;const st=O.source,Et=_.get(st);if(Et){const Rt=Et[C.__cacheKey];Rt.usedTimes--,Rt.usedTimes===0&&D(O),Object.keys(Et).length===0&&_.delete(st)}s.remove(O)}function D(O){const C=s.get(O);r.deleteTexture(C.__webglTexture);const st=O.source,Et=_.get(st);delete Et[C.__cacheKey],h.memory.textures--}function b(O){const C=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(C.__webglFramebuffer[Et]))for(let Rt=0;Rt<C.__webglFramebuffer[Et].length;Rt++)r.deleteFramebuffer(C.__webglFramebuffer[Et][Rt]);else r.deleteFramebuffer(C.__webglFramebuffer[Et]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[Et])}else{if(Array.isArray(C.__webglFramebuffer))for(let Et=0;Et<C.__webglFramebuffer.length;Et++)r.deleteFramebuffer(C.__webglFramebuffer[Et]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Et=0;Et<C.__webglColorRenderbuffer.length;Et++)C.__webglColorRenderbuffer[Et]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[Et]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const st=O.textures;for(let Et=0,Rt=st.length;Et<Rt;Et++){const gt=s.get(st[Et]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),h.memory.textures--),s.remove(st[Et])}s.remove(O)}let B=0;function Z(){B=0}function k(){const O=B;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),B+=1,O}function tt(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function lt(O,C){const st=s.get(O);if(O.isVideoTexture&&Pt(O),O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){const Et=O.image;if(Et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(st,O,C);return}}i.bindTexture(r.TEXTURE_2D,st.__webglTexture,r.TEXTURE0+C)}function q(O,C){const st=s.get(O);if(O.version>0&&st.__version!==O.version){U(st,O,C);return}i.bindTexture(r.TEXTURE_2D_ARRAY,st.__webglTexture,r.TEXTURE0+C)}function it(O,C){const st=s.get(O);if(O.version>0&&st.__version!==O.version){U(st,O,C);return}i.bindTexture(r.TEXTURE_3D,st.__webglTexture,r.TEXTURE0+C)}function Y(O,C){const st=s.get(O);if(O.version>0&&st.__version!==O.version){W(st,O,C);return}i.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture,r.TEXTURE0+C)}const bt={[Sp]:r.REPEAT,[ns]:r.CLAMP_TO_EDGE,[Mp]:r.MIRRORED_REPEAT},vt={[qi]:r.NEAREST,[hb]:r.NEAREST_MIPMAP_NEAREST,[Ku]:r.NEAREST_MIPMAP_LINEAR,[oa]:r.LINEAR,[xd]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},Mt={[vb]:r.NEVER,[Eb]:r.ALWAYS,[_b]:r.LESS,[B1]:r.LEQUAL,[xb]:r.EQUAL,[Mb]:r.GEQUAL,[yb]:r.GREATER,[Sb]:r.NOTEQUAL};function Dt(O,C){if(C.type===La&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===oa||C.magFilter===xd||C.magFilter===Ku||C.magFilter===is||C.minFilter===oa||C.minFilter===xd||C.minFilter===Ku||C.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,bt[C.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,bt[C.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,bt[C.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,vt[C.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,vt[C.minFilter]),C.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,Mt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===qi||C.minFilter!==Ku&&C.minFilter!==is||C.type===La&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const st=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function fe(O,C){let st=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",z));const Et=C.source;let Rt=_.get(Et);Rt===void 0&&(Rt={},_.set(Et,Rt));const gt=tt(C);if(gt!==O.__cacheKey){Rt[gt]===void 0&&(Rt[gt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,st=!0),Rt[gt].usedTimes++;const Kt=Rt[O.__cacheKey];Kt!==void 0&&(Rt[O.__cacheKey].usedTimes--,Kt.usedTimes===0&&D(C)),O.__cacheKey=gt,O.__webglTexture=Rt[gt].texture}return st}function U(O,C,st){let Et=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Et=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Et=r.TEXTURE_3D);const Rt=fe(O,C),gt=C.source;i.bindTexture(Et,O.__webglTexture,r.TEXTURE0+st);const Kt=s.get(gt);if(gt.version!==Kt.__version||Rt===!0){i.activeTexture(r.TEXTURE0+st);const Gt=qe.getPrimaries(qe.workingColorSpace),kt=C.colorSpace===Sr?null:qe.getPrimaries(C.colorSpace),xe=C.colorSpace===Sr||Gt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ot=T(C.image,!1,l.maxTextureSize);Ot=ve(C,Ot);const qt=u.convert(C.format,C.colorSpace),$t=u.convert(C.type);let te=N(C.internalFormat,qt,$t,C.colorSpace,C.isVideoTexture);Dt(Et,C);let Tt;const zt=C.mipmaps,ue=C.isVideoTexture!==!0,ge=Kt.__version===void 0||Rt===!0,V=gt.dataReady,Ht=F(C,Ot);if(C.isDepthTexture)te=R(C.format===_o,C.type),ge&&(ue?i.texStorage2D(r.TEXTURE_2D,1,te,Ot.width,Ot.height):i.texImage2D(r.TEXTURE_2D,0,te,Ot.width,Ot.height,0,qt,$t,null));else if(C.isDataTexture)if(zt.length>0){ue&&ge&&i.texStorage2D(r.TEXTURE_2D,Ht,te,zt[0].width,zt[0].height);for(let ht=0,At=zt.length;ht<At;ht++)Tt=zt[ht],ue?V&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Tt.width,Tt.height,qt,$t,Tt.data):i.texImage2D(r.TEXTURE_2D,ht,te,Tt.width,Tt.height,0,qt,$t,Tt.data);C.generateMipmaps=!1}else ue?(ge&&i.texStorage2D(r.TEXTURE_2D,Ht,te,Ot.width,Ot.height),V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ot.width,Ot.height,qt,$t,Ot.data)):i.texImage2D(r.TEXTURE_2D,0,te,Ot.width,Ot.height,0,qt,$t,Ot.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ue&&ge&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,te,zt[0].width,zt[0].height,Ot.depth);for(let ht=0,At=zt.length;ht<At;ht++)if(Tt=zt[ht],C.format!==Xi)if(qt!==null)if(ue){if(V)if(C.layerUpdates.size>0){const jt=Sx(Tt.width,Tt.height,C.format,C.type);for(const Zt of C.layerUpdates){const he=Tt.data.subarray(Zt*jt/Tt.data.BYTES_PER_ELEMENT,(Zt+1)*jt/Tt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,Zt,Tt.width,Tt.height,1,qt,he)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Tt.width,Tt.height,Ot.depth,qt,Tt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ht,te,Tt.width,Tt.height,Ot.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ht,0,0,0,Tt.width,Tt.height,Ot.depth,qt,$t,Tt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ht,te,Tt.width,Tt.height,Ot.depth,0,qt,$t,Tt.data)}else{ue&&ge&&i.texStorage2D(r.TEXTURE_2D,Ht,te,zt[0].width,zt[0].height);for(let ht=0,At=zt.length;ht<At;ht++)Tt=zt[ht],C.format!==Xi?qt!==null?ue?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,ht,0,0,Tt.width,Tt.height,qt,Tt.data):i.compressedTexImage2D(r.TEXTURE_2D,ht,te,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?V&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,Tt.width,Tt.height,qt,$t,Tt.data):i.texImage2D(r.TEXTURE_2D,ht,te,Tt.width,Tt.height,0,qt,$t,Tt.data)}else if(C.isDataArrayTexture)if(ue){if(ge&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ht,te,Ot.width,Ot.height,Ot.depth),V)if(C.layerUpdates.size>0){const ht=Sx(Ot.width,Ot.height,C.format,C.type);for(const At of C.layerUpdates){const jt=Ot.data.subarray(At*ht/Ot.data.BYTES_PER_ELEMENT,(At+1)*ht/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,At,Ot.width,Ot.height,1,qt,$t,jt)}C.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,qt,$t,Ot.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,te,Ot.width,Ot.height,Ot.depth,0,qt,$t,Ot.data);else if(C.isData3DTexture)ue?(ge&&i.texStorage3D(r.TEXTURE_3D,Ht,te,Ot.width,Ot.height,Ot.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,qt,$t,Ot.data)):i.texImage3D(r.TEXTURE_3D,0,te,Ot.width,Ot.height,Ot.depth,0,qt,$t,Ot.data);else if(C.isFramebufferTexture){if(ge)if(ue)i.texStorage2D(r.TEXTURE_2D,Ht,te,Ot.width,Ot.height);else{let ht=Ot.width,At=Ot.height;for(let jt=0;jt<Ht;jt++)i.texImage2D(r.TEXTURE_2D,jt,te,ht,At,0,qt,$t,null),ht>>=1,At>>=1}}else if(zt.length>0){if(ue&&ge){const ht=Xt(zt[0]);i.texStorage2D(r.TEXTURE_2D,Ht,te,ht.width,ht.height)}for(let ht=0,At=zt.length;ht<At;ht++)Tt=zt[ht],ue?V&&i.texSubImage2D(r.TEXTURE_2D,ht,0,0,qt,$t,Tt):i.texImage2D(r.TEXTURE_2D,ht,te,qt,$t,Tt);C.generateMipmaps=!1}else if(ue){if(ge){const ht=Xt(Ot);i.texStorage2D(r.TEXTURE_2D,Ht,te,ht.width,ht.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,qt,$t,Ot)}else i.texImage2D(r.TEXTURE_2D,0,te,qt,$t,Ot);S(C)&&x(Et),Kt.__version=gt.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function W(O,C,st){if(C.image.length!==6)return;const Et=fe(O,C),Rt=C.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+st);const gt=s.get(Rt);if(Rt.version!==gt.__version||Et===!0){i.activeTexture(r.TEXTURE0+st);const Kt=qe.getPrimaries(qe.workingColorSpace),Gt=C.colorSpace===Sr?null:qe.getPrimaries(C.colorSpace),kt=C.colorSpace===Sr||Kt===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const xe=C.isCompressedTexture||C.image[0].isCompressedTexture,Ot=C.image[0]&&C.image[0].isDataTexture,qt=[];for(let At=0;At<6;At++)!xe&&!Ot?qt[At]=T(C.image[At],!0,l.maxCubemapSize):qt[At]=Ot?C.image[At].image:C.image[At],qt[At]=ve(C,qt[At]);const $t=qt[0],te=u.convert(C.format,C.colorSpace),Tt=u.convert(C.type),zt=N(C.internalFormat,te,Tt,C.colorSpace),ue=C.isVideoTexture!==!0,ge=gt.__version===void 0||Et===!0,V=Rt.dataReady;let Ht=F(C,$t);Dt(r.TEXTURE_CUBE_MAP,C);let ht;if(xe){ue&&ge&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,zt,$t.width,$t.height);for(let At=0;At<6;At++){ht=qt[At].mipmaps;for(let jt=0;jt<ht.length;jt++){const Zt=ht[jt];C.format!==Xi?te!==null?ue?V&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt,0,0,Zt.width,Zt.height,te,Zt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt,zt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt,0,0,Zt.width,Zt.height,te,Tt,Zt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt,zt,Zt.width,Zt.height,0,te,Tt,Zt.data)}}}else{if(ht=C.mipmaps,ue&&ge){ht.length>0&&Ht++;const At=Xt(qt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ht,zt,At.width,At.height)}for(let At=0;At<6;At++)if(Ot){ue?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,qt[At].width,qt[At].height,te,Tt,qt[At].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,zt,qt[At].width,qt[At].height,0,te,Tt,qt[At].data);for(let jt=0;jt<ht.length;jt++){const he=ht[jt].image[At].image;ue?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt+1,0,0,he.width,he.height,te,Tt,he.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt+1,zt,he.width,he.height,0,te,Tt,he.data)}}else{ue?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,te,Tt,qt[At]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,zt,te,Tt,qt[At]);for(let jt=0;jt<ht.length;jt++){const Zt=ht[jt];ue?V&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt+1,0,0,te,Tt,Zt.image[At]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+At,jt+1,zt,te,Tt,Zt.image[At])}}}S(C)&&x(r.TEXTURE_CUBE_MAP),gt.__version=Rt.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function pt(O,C,st,Et,Rt,gt){const Kt=u.convert(st.format,st.colorSpace),Gt=u.convert(st.type),kt=N(st.internalFormat,Kt,Gt,st.colorSpace),xe=s.get(C),Ot=s.get(st);if(Ot.__renderTarget=C,!xe.__hasExternalTextures){const qt=Math.max(1,C.width>>gt),$t=Math.max(1,C.height>>gt);Rt===r.TEXTURE_3D||Rt===r.TEXTURE_2D_ARRAY?i.texImage3D(Rt,gt,kt,qt,$t,C.depth,0,Kt,Gt,null):i.texImage2D(Rt,gt,kt,qt,$t,0,Kt,Gt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),se(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,Rt,Ot.__webglTexture,0,ee(C)):(Rt===r.TEXTURE_2D||Rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Et,Rt,Ot.__webglTexture,gt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(O,C,st){if(r.bindRenderbuffer(r.RENDERBUFFER,O),C.depthBuffer){const Et=C.depthTexture,Rt=Et&&Et.isDepthTexture?Et.type:null,gt=R(C.stencilBuffer,Rt),Kt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=ee(C);se(C)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,gt,C.width,C.height):st?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,gt,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,gt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Kt,r.RENDERBUFFER,O)}else{const Et=C.textures;for(let Rt=0;Rt<Et.length;Rt++){const gt=Et[Rt],Kt=u.convert(gt.format,gt.colorSpace),Gt=u.convert(gt.type),kt=N(gt.internalFormat,Kt,Gt,gt.colorSpace),xe=ee(C);st&&se(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,kt,C.width,C.height):se(C)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,kt,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,kt,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(C.depthTexture);Et.__renderTarget=C,(!Et.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),lt(C.depthTexture,0);const Rt=Et.__webglTexture,gt=ee(C);if(C.depthTexture.format===fo)se(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Rt,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Rt,0);else if(C.depthTexture.format===_o)se(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Rt,0,gt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Rt,0);else throw new Error("Unknown depthTexture format")}function Lt(O){const C=s.get(O),st=O.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==O.depthTexture){const Et=O.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Et){const Rt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Et.removeEventListener("dispose",Rt)};Et.addEventListener("dispose",Rt),C.__depthDisposeCallback=Rt}C.__boundDepthTexture=Et}if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");xt(C.__webglFramebuffer,O)}else if(st){C.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)if(i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Et]),C.__webglDepthbuffer[Et]===void 0)C.__webglDepthbuffer[Et]=r.createRenderbuffer(),ft(C.__webglDepthbuffer[Et],O,!1);else{const Rt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=C.__webglDepthbuffer[Et];r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,gt)}}else if(i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),ft(C.__webglDepthbuffer,O,!1);else{const Et=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,Rt)}i.bindFramebuffer(r.FRAMEBUFFER,null)}function It(O,C,st){const Et=s.get(O);C!==void 0&&pt(Et.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),st!==void 0&&Lt(O)}function Ct(O){const C=O.texture,st=s.get(O),Et=s.get(C);O.addEventListener("dispose",L);const Rt=O.textures,gt=O.isWebGLCubeRenderTarget===!0,Kt=Rt.length>1;if(Kt||(Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture()),Et.__version=C.version,h.memory.textures++),gt){st.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(C.mipmaps&&C.mipmaps.length>0){st.__webglFramebuffer[Gt]=[];for(let kt=0;kt<C.mipmaps.length;kt++)st.__webglFramebuffer[Gt][kt]=r.createFramebuffer()}else st.__webglFramebuffer[Gt]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){st.__webglFramebuffer=[];for(let Gt=0;Gt<C.mipmaps.length;Gt++)st.__webglFramebuffer[Gt]=r.createFramebuffer()}else st.__webglFramebuffer=r.createFramebuffer();if(Kt)for(let Gt=0,kt=Rt.length;Gt<kt;Gt++){const xe=s.get(Rt[Gt]);xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&se(O)===!1){st.__webglMultisampledFramebuffer=r.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Rt.length;Gt++){const kt=Rt[Gt];st.__webglColorRenderbuffer[Gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,st.__webglColorRenderbuffer[Gt]);const xe=u.convert(kt.format,kt.colorSpace),Ot=u.convert(kt.type),qt=N(kt.internalFormat,xe,Ot,kt.colorSpace,O.isXRRenderTarget===!0),$t=ee(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,qt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,st.__webglColorRenderbuffer[Gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(st.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(st.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(gt){i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,C);for(let Gt=0;Gt<6;Gt++)if(C.mipmaps&&C.mipmaps.length>0)for(let kt=0;kt<C.mipmaps.length;kt++)pt(st.__webglFramebuffer[Gt][kt],O,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,kt);else pt(st.__webglFramebuffer[Gt],O,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);S(C)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Gt=0,kt=Rt.length;Gt<kt;Gt++){const xe=Rt[Gt],Ot=s.get(xe);i.bindTexture(r.TEXTURE_2D,Ot.__webglTexture),Dt(r.TEXTURE_2D,xe),pt(st.__webglFramebuffer,O,xe,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,0),S(xe)&&x(r.TEXTURE_2D)}i.unbindTexture()}else{let Gt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Gt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Gt,Et.__webglTexture),Dt(Gt,C),C.mipmaps&&C.mipmaps.length>0)for(let kt=0;kt<C.mipmaps.length;kt++)pt(st.__webglFramebuffer[kt],O,C,r.COLOR_ATTACHMENT0,Gt,kt);else pt(st.__webglFramebuffer,O,C,r.COLOR_ATTACHMENT0,Gt,0);S(C)&&x(Gt),i.unbindTexture()}O.depthBuffer&&Lt(O)}function Ut(O){const C=O.textures;for(let st=0,Et=C.length;st<Et;st++){const Rt=C[st];if(S(Rt)){const gt=P(O),Kt=s.get(Rt).__webglTexture;i.bindTexture(gt,Kt),x(gt),i.unbindTexture()}}}const re=[],G=[];function Ve(O){if(O.samples>0){if(se(O)===!1){const C=O.textures,st=O.width,Et=O.height;let Rt=r.COLOR_BUFFER_BIT;const gt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Kt=s.get(O),Gt=C.length>1;if(Gt)for(let kt=0;kt<C.length;kt++)i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let kt=0;kt<C.length;kt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Rt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Rt|=r.STENCIL_BUFFER_BIT)),Gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[kt]);const xe=s.get(C[kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,st,Et,0,0,st,Et,Rt,r.NEAREST),p===!0&&(re.length=0,G.length=0,re.push(r.COLOR_ATTACHMENT0+kt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(re.push(gt),G.push(gt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Gt)for(let kt=0;kt<C.length;kt++){i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.RENDERBUFFER,Kt.__webglColorRenderbuffer[kt]);const xe=s.get(C[kt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+kt,r.TEXTURE_2D,xe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const C=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function ee(O){return Math.min(l.maxSamples,O.samples)}function se(O){const C=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Pt(O){const C=h.render.frame;v.get(O)!==C&&(v.set(O,C),O.update())}function ve(O,C){const st=O.colorSpace,Et=O.format,Rt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||st!==xo&&st!==Sr&&(qe.getTransfer(st)===en?(Et!==Xi||Rt!==Fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),C}function Xt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=Y,this.rebindTextures=It,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=se}function jw(r,t){function i(s,l=Sr){let u;const h=qe.getTransfer(l);if(s===Fa)return r.UNSIGNED_BYTE;if(s===tm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===em)return r.UNSIGNED_SHORT_5_5_5_1;if(s===w1)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===R1)return r.BYTE;if(s===C1)return r.SHORT;if(s===Tl)return r.UNSIGNED_SHORT;if(s===$p)return r.INT;if(s===as)return r.UNSIGNED_INT;if(s===La)return r.FLOAT;if(s===za)return r.HALF_FLOAT;if(s===D1)return r.ALPHA;if(s===U1)return r.RGB;if(s===Xi)return r.RGBA;if(s===N1)return r.LUMINANCE;if(s===L1)return r.LUMINANCE_ALPHA;if(s===fo)return r.DEPTH_COMPONENT;if(s===_o)return r.DEPTH_STENCIL;if(s===O1)return r.RED;if(s===nm)return r.RED_INTEGER;if(s===P1)return r.RG;if(s===im)return r.RG_INTEGER;if(s===am)return r.RGBA_INTEGER;if(s===yc||s===Sc||s===Mc||s===Ec)if(h===en)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ep||s===Tp||s===bp||s===Ap)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Ep)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ap)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rp||s===Cp||s===wp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Rp||s===Cp)return h===en?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===wp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dp||s===Up||s===Np||s===Lp||s===Op||s===Pp||s===zp||s===Bp||s===Ip||s===Fp||s===Hp||s===Gp||s===Vp||s===Xp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Dp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Up)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Np)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Op)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ip)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xp)return h===en?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc||s===kp||s===qp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Tc)return h===en?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===z1||s===Yp||s===Wp||s===jp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Tc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Yp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const Zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new li,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ei({vertexShader:Zw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ki(new wl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jw extends Mo{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,g=null,v=null,m=null,_=null,M=null,E=null;const T=new Kw,S=i.getContextAttributes();let x=null,P=null;const N=[],R=[],F=new Re;let z=null;const L=new Hi;L.viewport=new gn;const H=new Hi;H.viewport=new gn;const D=[L,H],b=new x2;let B=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=N[U];return W===void 0&&(W=new Fd,N[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=N[U];return W===void 0&&(W=new Fd,N[U]=W),W.getGripSpace()},this.getHand=function(U){let W=N[U];return W===void 0&&(W=new Fd,N[U]=W),W.getHandSpace()};function k(U){const W=R.indexOf(U.inputSource);if(W===-1)return;const pt=N[W];pt!==void 0&&(pt.update(U.inputSource,U.frame,g||h),pt.dispatchEvent({type:U.type,data:U.inputSource}))}function tt(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",tt),l.removeEventListener("inputsourceschange",lt);for(let U=0;U<N.length;U++){const W=R[U];W!==null&&(R[U]=null,N[U].disconnect(W))}B=null,Z=null,T.reset(),t.setRenderTarget(x),M=null,_=null,m=null,l=null,P=null,fe.stop(),s.isPresenting=!1,t.setPixelRatio(z),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){u=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){d=U,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(U){g=U},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(U){if(l=U,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",tt),l.addEventListener("inputsourceschange",lt),S.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,ft=null,xt=null;S.depth&&(xt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pt=S.stencil?_o:fo,ft=S.stencil?vo:as);const Lt={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:u};m=new XRWebGLBinding(l,i),_=m.createProjectionLayer(Lt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),P=new Yi(_.textureWidth,_.textureHeight,{format:Xi,type:Fa,depthTexture:new Z1(_.textureWidth,_.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,pt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Yi(M.framebufferWidth,M.framebufferHeight,{format:Xi,type:Fa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}P.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),fe.setContext(l),fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function lt(U){for(let W=0;W<U.removed.length;W++){const pt=U.removed[W],ft=R.indexOf(pt);ft>=0&&(R[ft]=null,N[ft].disconnect(pt))}for(let W=0;W<U.added.length;W++){const pt=U.added[W];let ft=R.indexOf(pt);if(ft===-1){for(let Lt=0;Lt<N.length;Lt++)if(Lt>=R.length){R.push(pt),ft=Lt;break}else if(R[Lt]===null){R[Lt]=pt,ft=Lt;break}if(ft===-1)break}const xt=N[ft];xt&&xt.connect(pt)}}const q=new dt,it=new dt;function Y(U,W,pt){q.setFromMatrixPosition(W.matrixWorld),it.setFromMatrixPosition(pt.matrixWorld);const ft=q.distanceTo(it),xt=W.projectionMatrix.elements,Lt=pt.projectionMatrix.elements,It=xt[14]/(xt[10]-1),Ct=xt[14]/(xt[10]+1),Ut=(xt[9]+1)/xt[5],re=(xt[9]-1)/xt[5],G=(xt[8]-1)/xt[0],Ve=(Lt[8]+1)/Lt[0],ee=It*G,se=It*Ve,Pt=ft/(-G+Ve),ve=Pt*-G;if(W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ve),U.translateZ(Pt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),xt[10]===-1)U.projectionMatrix.copy(W.projectionMatrix),U.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Xt=It+Pt,O=Ct+Pt,C=ee-ve,st=se+(ft-ve),Et=Ut*Ct/O*Xt,Rt=re*Ct/O*Xt;U.projectionMatrix.makePerspective(C,st,Et,Rt,Xt,O),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function bt(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(l===null)return;let W=U.near,pt=U.far;T.texture!==null&&(T.depthNear>0&&(W=T.depthNear),T.depthFar>0&&(pt=T.depthFar)),b.near=H.near=L.near=W,b.far=H.far=L.far=pt,(B!==b.near||Z!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),B=b.near,Z=b.far),L.layers.mask=U.layers.mask|2,H.layers.mask=U.layers.mask|4,b.layers.mask=L.layers.mask|H.layers.mask;const ft=U.parent,xt=b.cameras;bt(b,ft);for(let Lt=0;Lt<xt.length;Lt++)bt(xt[Lt],ft);xt.length===2?Y(b,L,H):b.projectionMatrix.copy(L.projectionMatrix),vt(U,b,ft)};function vt(U,W,pt){pt===null?U.matrix.copy(W.matrixWorld):(U.matrix.copy(pt.matrixWorld),U.matrix.invert(),U.matrix.multiply(W.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(W.projectionMatrix),U.projectionMatrixInverse.copy(W.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=bl*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(U){p=U,_!==null&&(_.fixedFoveation=U),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=U)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(b)};let Mt=null;function Dt(U,W){if(v=W.getViewerPose(g||h),E=W,v!==null){const pt=v.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let ft=!1;pt.length!==b.cameras.length&&(b.cameras.length=0,ft=!0);for(let It=0;It<pt.length;It++){const Ct=pt[It];let Ut=null;if(M!==null)Ut=M.getViewport(Ct);else{const G=m.getViewSubImage(_,Ct);Ut=G.viewport,It===0&&(t.setRenderTargetTextures(P,G.colorTexture,_.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(P))}let re=D[It];re===void 0&&(re=new Hi,re.layers.enable(It),re.viewport=new gn,D[It]=re),re.matrix.fromArray(Ct.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ct.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),It===0&&(b.matrix.copy(re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ft===!0&&b.cameras.push(re)}const xt=l.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&m){const It=m.getDepthInformation(pt[0]);It&&It.isValid&&It.texture&&T.init(t,It,l.renderState)}}for(let pt=0;pt<N.length;pt++){const ft=R[pt],xt=N[pt];ft!==null&&xt!==void 0&&xt.update(ft,W,g||h)}Mt&&Mt(U,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),E=null}const fe=new Q1;fe.setAnimationLoop(Dt),this.setAnimationLoop=function(U){Mt=U},this.dispose=function(){}}}const Kr=new Ha,$w=new En;function t3(r,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,q1(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,P,N,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(S,x):x.isMeshToonMaterial?(u(S,x),m(S,x)):x.isMeshPhongMaterial?(u(S,x),v(S,x)):x.isMeshStandardMaterial?(u(S,x),_(S,x),x.isMeshPhysicalMaterial&&M(S,x,R)):x.isMeshMatcapMaterial?(u(S,x),E(S,x)):x.isMeshDepthMaterial?u(S,x):x.isMeshDistanceMaterial?(u(S,x),T(S,x)):x.isMeshNormalMaterial?u(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?p(S,x,P,N):x.isSpriteMaterial?g(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===oi&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===oi&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const P=t.get(x),N=P.envMap,R=P.envMapRotation;N&&(S.envMap.value=N,Kr.copy(R),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),S.envMapRotation.value.setFromMatrix4($w.makeRotationFromEuler(Kr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,P,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*P,S.scale.value=N*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,P){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===oi&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const P=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e3(r,t,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,N){const R=N.program;s.uniformBlockBinding(P,R)}function g(P,N){let R=l[P.id];R===void 0&&(E(P),R=v(P),l[P.id]=R,P.addEventListener("dispose",S));const F=N.program;s.updateUBOMapping(P,F);const z=t.render.frame;u[P.id]!==z&&(_(P),u[P.id]=z)}function v(P){const N=m();P.__bindingPointIndex=N;const R=r.createBuffer(),F=P.__size,z=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,F,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,R),R}function m(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const N=l[P.id],R=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let z=0,L=R.length;z<L;z++){const H=Array.isArray(R[z])?R[z]:[R[z]];for(let D=0,b=H.length;D<b;D++){const B=H[D];if(M(B,z,D,F)===!0){const Z=B.__offset,k=Array.isArray(B.value)?B.value:[B.value];let tt=0;for(let lt=0;lt<k.length;lt++){const q=k[lt],it=T(q);typeof q=="number"||typeof q=="boolean"?(B.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,Z+tt,B.__data)):q.isMatrix3?(B.__data[0]=q.elements[0],B.__data[1]=q.elements[1],B.__data[2]=q.elements[2],B.__data[3]=0,B.__data[4]=q.elements[3],B.__data[5]=q.elements[4],B.__data[6]=q.elements[5],B.__data[7]=0,B.__data[8]=q.elements[6],B.__data[9]=q.elements[7],B.__data[10]=q.elements[8],B.__data[11]=0):(q.toArray(B.__data,tt),tt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,N,R,F){const z=P.value,L=N+"_"+R;if(F[L]===void 0)return typeof z=="number"||typeof z=="boolean"?F[L]=z:F[L]=z.clone(),!0;{const H=F[L];if(typeof z=="number"||typeof z=="boolean"){if(H!==z)return F[L]=z,!0}else if(H.equals(z)===!1)return H.copy(z),!0}return!1}function E(P){const N=P.uniforms;let R=0;const F=16;for(let L=0,H=N.length;L<H;L++){const D=Array.isArray(N[L])?N[L]:[N[L]];for(let b=0,B=D.length;b<B;b++){const Z=D[b],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let tt=0,lt=k.length;tt<lt;tt++){const q=k[tt],it=T(q),Y=R%F,bt=Y%it.boundary,vt=Y+bt;R+=bt,vt!==0&&F-vt<it.storage&&(R+=F-vt),Z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=it.storage}}}const z=R%F;return z>0&&(R+=F-z),P.__size=R,P.__cache={},this}function T(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function S(P){const N=P.target;N.removeEventListener("dispose",S);const R=h.indexOf(N.__bindingPointIndex);h.splice(R,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function x(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:p,update:g,dispose:x}}class n3{constructor(t={}){const{canvas:i=Hb(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const P=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Di,this.toneMapping=Mr,this.toneMappingExposure=1;const R=this;let F=!1,z=0,L=0,H=null,D=-1,b=null;const B=new gn,Z=new gn;let k=null;const tt=new Ge(0);let lt=0,q=i.width,it=i.height,Y=1,bt=null,vt=null;const Mt=new gn(0,0,q,it),Dt=new gn(0,0,q,it);let fe=!1;const U=new j1;let W=!1,pt=!1;this.transmissionResolutionScale=1;const ft=new En,xt=new En,Lt=new dt,It=new gn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function re(){return H===null?Y:1}let G=s;function Ve(w,j){return i.getContext(w,j)}try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jp}`),i.addEventListener("webglcontextlost",At,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",Zt,!1),G===null){const j="webgl2";if(G=Ve(j,w),G===null)throw Ve(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ee,se,Pt,ve,Xt,O,C,st,Et,Rt,gt,Kt,Gt,kt,xe,Ot,qt,$t,te,Tt,zt,ue,ge,V;function Ht(){ee=new hC(G),ee.init(),ue=new jw(G,ee),se=new sC(G,ee,t,ue),Pt=new Yw(G,ee),se.reverseDepthBuffer&&_&&Pt.buffers.depth.setReversed(!0),ve=new mC(G),Xt=new Lw,O=new Ww(G,ee,Pt,Xt,se,ue,ve),C=new lC(R),st=new fC(R),Et=new M2(G),ge=new aC(G,Et),Rt=new dC(G,Et,ve,ge),gt=new vC(G,Rt,Et,ve),te=new gC(G,se,O),Ot=new oC(Xt),Kt=new Nw(R,C,st,ee,se,ge,Ot),Gt=new t3(R,Xt),kt=new Pw,xe=new Gw(ee),$t=new iC(R,C,st,Pt,gt,M,p),qt=new kw(R,gt,se),V=new e3(G,ve,se,Pt),Tt=new rC(G,ee,ve),zt=new pC(G,ee,ve),ve.programs=Kt.programs,R.capabilities=se,R.extensions=ee,R.properties=Xt,R.renderLists=kt,R.shadowMap=qt,R.state=Pt,R.info=ve}Ht();const ht=new Jw(R,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(q,it,!1))},this.getSize=function(w){return w.set(q,it)},this.setSize=function(w,j,at=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,it=j,i.width=Math.floor(w*Y),i.height=Math.floor(j*Y),at===!0&&(i.style.width=w+"px",i.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(q*Y,it*Y).floor()},this.setDrawingBufferSize=function(w,j,at){q=w,it=j,Y=at,i.width=Math.floor(w*at),i.height=Math.floor(j*at),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,j,at,nt){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,j,at,nt),Pt.viewport(B.copy(Mt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,j,at,nt){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,j,at,nt),Pt.scissor(Z.copy(Dt).multiplyScalar(Y).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){Pt.setScissorTest(fe=w)},this.setOpaqueSort=function(w){bt=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(w=!0,j=!0,at=!0){let nt=0;if(w){let K=!1;if(H!==null){const Nt=H.texture.format;K=Nt===am||Nt===im||Nt===nm}if(K){const Nt=H.texture.type,Vt=Nt===Fa||Nt===as||Nt===Tl||Nt===vo||Nt===tm||Nt===em,Bt=$t.getClearColor(),Wt=$t.getClearAlpha(),ie=Bt.r,de=Bt.g,ce=Bt.b;Vt?(E[0]=ie,E[1]=de,E[2]=ce,E[3]=Wt,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=ie,T[1]=de,T[2]=ce,T[3]=Wt,G.clearBufferiv(G.COLOR,0,T))}else nt|=G.COLOR_BUFFER_BIT}j&&(nt|=G.DEPTH_BUFFER_BIT),at&&(nt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",At,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",Zt,!1),$t.dispose(),kt.dispose(),xe.dispose(),Xt.dispose(),C.dispose(),st.dispose(),gt.dispose(),ge.dispose(),V.dispose(),Kt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",oe),ht.removeEventListener("sessionend",mt),Ee.stop()};function At(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=ve.autoReset,j=qt.enabled,at=qt.autoUpdate,nt=qt.needsUpdate,K=qt.type;Ht(),ve.autoReset=w,qt.enabled=j,qt.autoUpdate=at,qt.needsUpdate=nt,qt.type=K}function Zt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){const j=w.target;j.removeEventListener("dispose",he),We(j)}function We(w){Je(w),Xt.remove(w)}function Je(w){const j=Xt.get(w).programs;j!==void 0&&(j.forEach(function(at){Kt.releaseProgram(at)}),w.isShaderMaterial&&Kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,at,nt,K,Nt){j===null&&(j=Ct);const Vt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=ca(w,j,at,nt,K);Pt.setMaterial(nt,Vt);let Wt=at.index,ie=1;if(nt.wireframe===!0){if(Wt=Rt.getWireframeAttribute(at),Wt===void 0)return;ie=2}const de=at.drawRange,ce=at.attributes.position;let Se=de.start*ie,Me=(de.start+de.count)*ie;Nt!==null&&(Se=Math.max(Se,Nt.start*ie),Me=Math.min(Me,(Nt.start+Nt.count)*ie)),Wt!==null?(Se=Math.max(Se,0),Me=Math.min(Me,Wt.count)):ce!=null&&(Se=Math.max(Se,0),Me=Math.min(Me,ce.count));const Ne=Me-Se;if(Ne<0||Ne===1/0)return;ge.setup(K,nt,Bt,at,Wt);let Fe,me=Tt;if(Wt!==null&&(Fe=Et.get(Wt),me=zt,me.setIndex(Fe)),K.isMesh)nt.wireframe===!0?(Pt.setLineWidth(nt.wireframeLinewidth*re()),me.setMode(G.LINES)):me.setMode(G.TRIANGLES);else if(K.isLine){let ae=nt.linewidth;ae===void 0&&(ae=1),Pt.setLineWidth(ae*re()),K.isLineSegments?me.setMode(G.LINES):K.isLineLoop?me.setMode(G.LINE_LOOP):me.setMode(G.LINE_STRIP)}else K.isPoints?me.setMode(G.POINTS):K.isSprite&&me.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ae=K._multiDrawStarts,nn=K._multiDrawCounts,Pe=K._multiDrawCount,wn=Wt?Et.get(Wt).bytesPerElement:1,un=Xt.get(nt).currentProgram.getUniforms();for(let kn=0;kn<Pe;kn++)un.setValue(G,"_gl_DrawID",kn),me.render(ae[kn]/wn,nn[kn])}else if(K.isInstancedMesh)me.renderInstances(Se,Ne,K.count);else if(at.isInstancedBufferGeometry){const ae=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,nn=Math.min(at.instanceCount,ae);me.renderInstances(Se,Ne,nn)}else me.render(Se,Ne)};function wt(w,j,at){w.transparent===!0&&w.side===Na&&w.forceSinglePass===!1?(w.side=oi,w.needsUpdate=!0,Tn(w,j,at),w.side=Er,w.needsUpdate=!0,Tn(w,j,at),w.side=Na):Tn(w,j,at)}this.compile=function(w,j,at=null){at===null&&(at=w),x=xe.get(at),x.init(j),N.push(x),at.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),w!==at&&w.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const nt=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Nt=K.material;if(Nt)if(Array.isArray(Nt))for(let Vt=0;Vt<Nt.length;Vt++){const Bt=Nt[Vt];wt(Bt,at,K),nt.add(Bt)}else wt(Nt,at,K),nt.add(Nt)}),N.pop(),x=null,nt},this.compileAsync=function(w,j,at=null){const nt=this.compile(w,j,at);return new Promise(K=>{function Nt(){if(nt.forEach(function(Vt){Xt.get(Vt).currentProgram.isReady()&&nt.delete(Vt)}),nt.size===0){K(w);return}setTimeout(Nt,10)}ee.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let _t=null;function Ft(w){_t&&_t(w)}function oe(){Ee.stop()}function mt(){Ee.start()}const Ee=new Q1;Ee.setAnimationLoop(Ft),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(w){_t=w,ht.setAnimationLoop(w),w===null?Ee.stop():Ee.start()},ht.addEventListener("sessionstart",oe),ht.addEventListener("sessionend",mt),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(j),j=ht.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,j,H),x=xe.get(w,N.length),x.init(j),N.push(x),xt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),U.setFromProjectionMatrix(xt),pt=this.localClippingEnabled,W=Ot.init(this.clippingPlanes,pt),S=kt.get(w,P.length),S.init(),P.push(S),ht.enabled===!0&&ht.isPresenting===!0){const Nt=R.xr.getDepthSensingMesh();Nt!==null&&Ue(Nt,j,-1/0,R.sortObjects)}Ue(w,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(bt,vt),Ut=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ut&&$t.addToRenderList(S,w),this.info.render.frame++,W===!0&&Ot.beginShadows();const at=x.state.shadowsArray;qt.render(at,w,j),W===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=S.opaque,K=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Nt=j.cameras;if(K.length>0)for(let Vt=0,Bt=Nt.length;Vt<Bt;Vt++){const Wt=Nt[Vt];Xe(nt,K,w,Wt)}Ut&&$t.render(w);for(let Vt=0,Bt=Nt.length;Vt<Bt;Vt++){const Wt=Nt[Vt];Te(S,w,Wt,Wt.viewport)}}else K.length>0&&Xe(nt,K,w,j),Ut&&$t.render(w),Te(S,w,j);H!==null&&L===0&&(O.updateMultisampleRenderTarget(H),O.updateRenderTargetMipmap(H)),w.isScene===!0&&w.onAfterRender(R,w,j),ge.resetDefaultState(),D=-1,b=null,N.pop(),N.length>0?(x=N[N.length-1],W===!0&&Ot.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Ue(w,j,at,nt){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)at=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){nt&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const Vt=gt.update(w),Bt=w.material;Bt.visible&&S.push(w,Vt,Bt,at,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||U.intersectsObject(w))){const Vt=gt.update(w),Bt=w.material;if(nt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),It.copy(Vt.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(Bt)){const Wt=Vt.groups;for(let ie=0,de=Wt.length;ie<de;ie++){const ce=Wt[ie],Se=Bt[ce.materialIndex];Se&&Se.visible&&S.push(w,Vt,Se,at,It.z,ce)}}else Bt.visible&&S.push(w,Vt,Bt,at,It.z,null)}}const Nt=w.children;for(let Vt=0,Bt=Nt.length;Vt<Bt;Vt++)Ue(Nt[Vt],j,at,nt)}function Te(w,j,at,nt){const K=w.opaque,Nt=w.transmissive,Vt=w.transparent;x.setupLightsView(at),W===!0&&Ot.setGlobalState(R.clippingPlanes,at),nt&&Pt.viewport(B.copy(nt)),K.length>0&&ln(K,j,at),Nt.length>0&&ln(Nt,j,at),Vt.length>0&&ln(Vt,j,at),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Xe(w,j,at,nt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[nt.id]===void 0&&(x.state.transmissionRenderTarget[nt.id]=new Yi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?za:Fa,minFilter:is,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const Nt=x.state.transmissionRenderTarget[nt.id],Vt=nt.viewport||B;Nt.setSize(Vt.z*R.transmissionResolutionScale,Vt.w*R.transmissionResolutionScale);const Bt=R.getRenderTarget();R.setRenderTarget(Nt),R.getClearColor(tt),lt=R.getClearAlpha(),lt<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&$t.render(at);const Wt=R.toneMapping;R.toneMapping=Mr;const ie=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),x.setupLightsView(nt),W===!0&&Ot.setGlobalState(R.clippingPlanes,nt),ln(w,at,nt),O.updateMultisampleRenderTarget(Nt),O.updateRenderTargetMipmap(Nt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let ce=0,Se=j.length;ce<Se;ce++){const Me=j[ce],Ne=Me.object,Fe=Me.geometry,me=Me.material,ae=Me.group;if(me.side===Na&&Ne.layers.test(nt.layers)){const nn=me.side;me.side=oi,me.needsUpdate=!0,hn(Ne,at,nt,Fe,me,ae),me.side=nn,me.needsUpdate=!0,de=!0}}de===!0&&(O.updateMultisampleRenderTarget(Nt),O.updateRenderTargetMipmap(Nt))}R.setRenderTarget(Bt),R.setClearColor(tt,lt),ie!==void 0&&(nt.viewport=ie),R.toneMapping=Wt}function ln(w,j,at){const nt=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Nt=w.length;K<Nt;K++){const Vt=w[K],Bt=Vt.object,Wt=Vt.geometry,ie=nt===null?Vt.material:nt,de=Vt.group;Bt.layers.test(at.layers)&&hn(Bt,j,at,Wt,ie,de)}}function hn(w,j,at,nt,K,Nt){w.onBeforeRender(R,j,at,nt,K,Nt),w.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(R,j,at,nt,w,Nt),K.transparent===!0&&K.side===Na&&K.forceSinglePass===!1?(K.side=oi,K.needsUpdate=!0,R.renderBufferDirect(at,j,nt,K,w,Nt),K.side=Er,K.needsUpdate=!0,R.renderBufferDirect(at,j,nt,K,w,Nt),K.side=Na):R.renderBufferDirect(at,j,nt,K,w,Nt),w.onAfterRender(R,j,at,nt,K,Nt)}function Tn(w,j,at){j.isScene!==!0&&(j=Ct);const nt=Xt.get(w),K=x.state.lights,Nt=x.state.shadowsArray,Vt=K.state.version,Bt=Kt.getParameters(w,K.state,Nt,j,at),Wt=Kt.getProgramCacheKey(Bt);let ie=nt.programs;nt.environment=w.isMeshStandardMaterial?j.environment:null,nt.fog=j.fog,nt.envMap=(w.isMeshStandardMaterial?st:C).get(w.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",he),ie=new Map,nt.programs=ie);let de=ie.get(Wt);if(de!==void 0){if(nt.currentProgram===de&&nt.lightsStateVersion===Vt)return Pn(w,Bt),de}else Bt.uniforms=Kt.getUniforms(w),w.onBeforeCompile(Bt,R),de=Kt.acquireProgram(Bt,Wt),ie.set(Wt,de),nt.uniforms=Bt.uniforms;const ce=nt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ce.clippingPlanes=Ot.uniform),Pn(w,Bt),nt.needsLights=Ga(w),nt.lightsStateVersion=Vt,nt.needsLights&&(ce.ambientLightColor.value=K.state.ambient,ce.lightProbe.value=K.state.probe,ce.directionalLights.value=K.state.directional,ce.directionalLightShadows.value=K.state.directionalShadow,ce.spotLights.value=K.state.spot,ce.spotLightShadows.value=K.state.spotShadow,ce.rectAreaLights.value=K.state.rectArea,ce.ltc_1.value=K.state.rectAreaLTC1,ce.ltc_2.value=K.state.rectAreaLTC2,ce.pointLights.value=K.state.point,ce.pointLightShadows.value=K.state.pointShadow,ce.hemisphereLights.value=K.state.hemi,ce.directionalShadowMap.value=K.state.directionalShadowMap,ce.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ce.spotShadowMap.value=K.state.spotShadowMap,ce.spotLightMatrix.value=K.state.spotLightMatrix,ce.spotLightMap.value=K.state.spotLightMap,ce.pointShadowMap.value=K.state.pointShadowMap,ce.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=de,nt.uniformsList=null,de}function On(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=bc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Pn(w,j){const at=Xt.get(w);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function ca(w,j,at,nt,K){j.isScene!==!0&&(j=Ct),O.resetTextureUnits();const Nt=j.fog,Vt=nt.isMeshStandardMaterial?j.environment:null,Bt=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xo,Wt=(nt.isMeshStandardMaterial?st:C).get(nt.envMap||Vt),ie=nt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,de=!!at.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),ce=!!at.morphAttributes.position,Se=!!at.morphAttributes.normal,Me=!!at.morphAttributes.color;let Ne=Mr;nt.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ne=R.toneMapping);const Fe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,me=Fe!==void 0?Fe.length:0,ae=Xt.get(nt),nn=x.state.lights;if(W===!0&&(pt===!0||w!==b)){const zn=w===b&&nt.id===D;Ot.setState(nt,w,zn)}let Pe=!1;nt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==nn.state.version||ae.outputColorSpace!==Bt||K.isBatchedMesh&&ae.batching===!1||!K.isBatchedMesh&&ae.batching===!0||K.isBatchedMesh&&ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ae.instancing===!1||!K.isInstancedMesh&&ae.instancing===!0||K.isSkinnedMesh&&ae.skinning===!1||!K.isSkinnedMesh&&ae.skinning===!0||K.isInstancedMesh&&ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ae.instancingMorph===!1&&K.morphTexture!==null||ae.envMap!==Wt||nt.fog===!0&&ae.fog!==Nt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ot.numPlanes||ae.numIntersection!==Ot.numIntersection)||ae.vertexAlphas!==ie||ae.vertexTangents!==de||ae.morphTargets!==ce||ae.morphNormals!==Se||ae.morphColors!==Me||ae.toneMapping!==Ne||ae.morphTargetsCount!==me)&&(Pe=!0):(Pe=!0,ae.__version=nt.version);let wn=ae.currentProgram;Pe===!0&&(wn=Tn(nt,j,K));let un=!1,kn=!1,Va=!1;const an=wn.getUniforms(),vn=ae.uniforms;if(Pt.useProgram(wn.program)&&(un=!0,kn=!0,Va=!0),nt.id!==D&&(D=nt.id,kn=!0),un||b!==w){Pt.buffers.depth.getReversed()?(ft.copy(w.projectionMatrix),Vb(ft),Xb(ft),an.setValue(G,"projectionMatrix",ft)):an.setValue(G,"projectionMatrix",w.projectionMatrix),an.setValue(G,"viewMatrix",w.matrixWorldInverse);const Bn=an.map.cameraPosition;Bn!==void 0&&Bn.setValue(G,Lt.setFromMatrixPosition(w.matrixWorld)),se.logarithmicDepthBuffer&&an.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&an.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,kn=!0,Va=!0)}if(K.isSkinnedMesh){an.setOptional(G,K,"bindMatrix"),an.setOptional(G,K,"bindMatrixInverse");const zn=K.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),an.setValue(G,"boneTexture",zn.boneTexture,O))}K.isBatchedMesh&&(an.setOptional(G,K,"batchingTexture"),an.setValue(G,"batchingTexture",K._matricesTexture,O),an.setOptional(G,K,"batchingIdTexture"),an.setValue(G,"batchingIdTexture",K._indirectTexture,O),an.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&an.setValue(G,"batchingColorTexture",K._colorsTexture,O));const bn=at.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&te.update(K,at,wn),(kn||ae.receiveShadow!==K.receiveShadow)&&(ae.receiveShadow=K.receiveShadow,an.setValue(G,"receiveShadow",K.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(vn.envMap.value=Wt,vn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&j.environment!==null&&(vn.envMapIntensity.value=j.environmentIntensity),kn&&(an.setValue(G,"toneMappingExposure",R.toneMappingExposure),ae.needsLights&&br(vn,Va),Nt&&nt.fog===!0&&Gt.refreshFogUniforms(vn,Nt),Gt.refreshMaterialUniforms(vn,nt,Y,it,x.state.transmissionRenderTarget[w.id]),bc.upload(G,On(ae),vn,O)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(bc.upload(G,On(ae),vn,O),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&an.setValue(G,"center",K.center),an.setValue(G,"modelViewMatrix",K.modelViewMatrix),an.setValue(G,"normalMatrix",K.normalMatrix),an.setValue(G,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const zn=nt.uniformsGroups;for(let Bn=0,rs=zn.length;Bn<rs;Bn++){const fa=zn[Bn];V.update(fa,wn),V.bind(fa,wn)}}return wn}function br(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Ga(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,j,at){Xt.get(w.texture).__webglTexture=j,Xt.get(w.depthTexture).__webglTexture=at;const nt=Xt.get(w);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=at===void 0,nt.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,j){const at=Xt.get(w);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const Wi=G.createFramebuffer();this.setRenderTarget=function(w,j=0,at=0){H=w,z=j,L=at;let nt=!0,K=null,Nt=!1,Vt=!1;if(w){const Wt=Xt.get(w);if(Wt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(G.FRAMEBUFFER,null),nt=!1;else if(Wt.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(Wt.__hasExternalTextures)O.rebindTextures(w,Xt.get(w.texture).__webglTexture,Xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ce=w.depthTexture;if(Wt.__boundDepthTexture!==ce){if(ce!==null&&Xt.has(ce)&&(w.width!==ce.image.width||w.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const ie=w.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Vt=!0);const de=Xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(de[j])?K=de[j][at]:K=de[j],Nt=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?K=Xt.get(w).__webglMultisampledFramebuffer:Array.isArray(de)?K=de[at]:K=de,B.copy(w.viewport),Z.copy(w.scissor),k=w.scissorTest}else B.copy(Mt).multiplyScalar(Y).floor(),Z.copy(Dt).multiplyScalar(Y).floor(),k=fe;if(at!==0&&(K=Wi),Pt.bindFramebuffer(G.FRAMEBUFFER,K)&&nt&&Pt.drawBuffers(w,K),Pt.viewport(B),Pt.scissor(Z),Pt.setScissorTest(k),Nt){const Wt=Xt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Wt.__webglTexture,at)}else if(Vt){const Wt=Xt.get(w.texture),ie=j;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Wt.__webglTexture,at,ie)}else if(w!==null&&at!==0){const Wt=Xt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Wt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(w,j,at,nt,K,Nt,Vt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Bt=Bt[Vt]),Bt){Pt.bindFramebuffer(G.FRAMEBUFFER,Bt);try{const Wt=w.texture,ie=Wt.format,de=Wt.type;if(!se.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-nt&&at>=0&&at<=w.height-K&&G.readPixels(j,at,nt,K,ue.convert(ie),ue.convert(de),Nt)}finally{const Wt=H!==null?Xt.get(H).__webglFramebuffer:null;Pt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(w,j,at,nt,K,Nt,Vt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Bt=Bt[Vt]),Bt){const Wt=w.texture,ie=Wt.format,de=Wt.type;if(!se.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=w.width-nt&&at>=0&&at<=w.height-K){Pt.bindFramebuffer(G.FRAMEBUFFER,Bt);const ce=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.bufferData(G.PIXEL_PACK_BUFFER,Nt.byteLength,G.STREAM_READ),G.readPixels(j,at,nt,K,ue.convert(ie),ue.convert(de),0);const Se=H!==null?Xt.get(H).__webglFramebuffer:null;Pt.bindFramebuffer(G.FRAMEBUFFER,Se);const Me=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Gb(G,Me,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ce),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Nt),G.deleteBuffer(ce),G.deleteSync(Me),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,j=null,at=0){w.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1]);const nt=Math.pow(2,-at),K=Math.floor(w.image.width*nt),Nt=Math.floor(w.image.height*nt),Vt=j!==null?j.x:0,Bt=j!==null?j.y:0;O.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,at,0,0,Vt,Bt,K,Nt),Pt.unbindTexture()};const Yt=G.createFramebuffer(),$e=G.createFramebuffer();this.copyTextureToTexture=function(w,j,at=null,nt=null,K=0,Nt=null){w.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,w=arguments[1],j=arguments[2],Nt=arguments[3]||0,at=null),Nt===null&&(K!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=K,K=0):Nt=0);let Vt,Bt,Wt,ie,de,ce,Se,Me,Ne;const Fe=w.isCompressedTexture?w.mipmaps[Nt]:w.image;if(at!==null)Vt=at.max.x-at.min.x,Bt=at.max.y-at.min.y,Wt=at.isBox3?at.max.z-at.min.z:1,ie=at.min.x,de=at.min.y,ce=at.isBox3?at.min.z:0;else{const bn=Math.pow(2,-K);Vt=Math.floor(Fe.width*bn),Bt=Math.floor(Fe.height*bn),w.isDataArrayTexture?Wt=Fe.depth:w.isData3DTexture?Wt=Math.floor(Fe.depth*bn):Wt=1,ie=0,de=0,ce=0}nt!==null?(Se=nt.x,Me=nt.y,Ne=nt.z):(Se=0,Me=0,Ne=0);const me=ue.convert(j.format),ae=ue.convert(j.type);let nn;j.isData3DTexture?(O.setTexture3D(j,0),nn=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),nn=G.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),nn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Pe=G.getParameter(G.UNPACK_ROW_LENGTH),wn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),un=G.getParameter(G.UNPACK_SKIP_PIXELS),kn=G.getParameter(G.UNPACK_SKIP_ROWS),Va=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Fe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Fe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ie),G.pixelStorei(G.UNPACK_SKIP_ROWS,de),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ce);const an=w.isDataArrayTexture||w.isData3DTexture,vn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const bn=Xt.get(w),zn=Xt.get(j),Bn=Xt.get(bn.__renderTarget),rs=Xt.get(zn.__renderTarget);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let fa=0;fa<Wt;fa++)an&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.get(w).__webglTexture,K,ce+fa),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.get(j).__webglTexture,Nt,Ne+fa)),G.blitFramebuffer(ie,de,Vt,Bt,Se,Me,Vt,Bt,G.DEPTH_BUFFER_BIT,G.NEAREST);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Xt.has(w)){const bn=Xt.get(w),zn=Xt.get(j);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,Yt),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,$e);for(let Bn=0;Bn<Wt;Bn++)an?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,K,ce+Bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,K),vn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,zn.__webglTexture,Nt,Ne+Bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,zn.__webglTexture,Nt),K!==0?G.blitFramebuffer(ie,de,Vt,Bt,Se,Me,Vt,Bt,G.COLOR_BUFFER_BIT,G.NEAREST):vn?G.copyTexSubImage3D(nn,Nt,Se,Me,Ne+Bn,ie,de,Vt,Bt):G.copyTexSubImage2D(nn,Nt,Se,Me,ie,de,Vt,Bt);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else vn?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(nn,Nt,Se,Me,Ne,Vt,Bt,Wt,me,ae,Fe.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(nn,Nt,Se,Me,Ne,Vt,Bt,Wt,me,Fe.data):G.texSubImage3D(nn,Nt,Se,Me,Ne,Vt,Bt,Wt,me,ae,Fe):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Nt,Se,Me,Vt,Bt,me,ae,Fe.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Nt,Se,Me,Fe.width,Fe.height,me,Fe.data):G.texSubImage2D(G.TEXTURE_2D,Nt,Se,Me,Vt,Bt,me,ae,Fe);G.pixelStorei(G.UNPACK_ROW_LENGTH,Pe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,un),G.pixelStorei(G.UNPACK_SKIP_ROWS,kn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Va),Nt===0&&j.generateMipmaps&&G.generateMipmap(nn),Pt.unbindTexture()},this.copyTextureToTexture3D=function(w,j,at=null,nt=null,K=0){return w.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,nt=arguments[1]||null,w=arguments[2],j=arguments[3],K=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,j,at,nt,K)},this.initRenderTarget=function(w){Xt.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),Pt.unbindTexture()},this.resetState=function(){z=0,L=0,H=null,Pt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=qe._getDrawingBufferColorSpace(t),i.unpackColorSpace=qe._getUnpackColorSpace()}}const ey={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Dl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const i3=new lm(-1,1,1,-1,0,1);class a3 extends Tr{constructor(){super(),this.setAttribute("position",new Ia([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ia([0,2,0,0,2,0],2))}}const r3=new a3;class ny{constructor(t){this._mesh=new ki(r3,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,i3)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Qp extends Dl{constructor(t,i){super(),this.textureID=i!==void 0?i:"tDiffuse",t instanceof ei?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Uc.clone(t.uniforms),this.material=new ei({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ny(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Yx extends Dl{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class s3 extends Dl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class o3{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Re);this._width=s.width,this._height=s.height,i=new Yi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:za}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qp(ey),this.copyPass.material.blending=Pa,this.clock=new y2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Yx!==void 0&&(h instanceof Yx?s=!0:h instanceof s3&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class l3 extends Dl{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ge}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const u3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class So extends Dl{constructor(t,i,s,l){super(),this.strength=i!==void 0?i:1,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Re(t.x,t.y):new Re(256,256),this.clearColor=new Ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Yi(u,h,{type:za}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const _=new Yi(u,h,{type:za});_.texture.name="UnrealBloomPass.h"+m,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const M=new Yi(u,h,{type:za});M.texture.name="UnrealBloomPass.v"+m,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),u=Math.round(u/2),h=Math.round(h/2)}const d=u3;this.highPassUniforms=Uc.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ei({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(p[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new Re(1/u,1/h),u=Math.round(u/2),h=Math.round(h/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new dt(1,1,1),new dt(1,1,1),new dt(1,1,1),new dt(1,1,1),new dt(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const v=ey;this.copyUniforms=Uc.clone(v.uniforms),this.blendMaterial=new ei({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:up,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ge,this.oldClearAlpha=1,this.basic=new om,this.fsQuad=new ny(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Re(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this.fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=So.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=So.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this.fsQuad.render(t),d=this.renderTargetsVertical[p];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(s),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=h}getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new ei({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ei({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}So.BlurDirectionX=new Re(1,0);So.BlurDirectionY=new Re(0,1);const c3=({className:r,style:t,trailLength:i=50,inertia:s=.5,grainIntensity:l=.05,bloomStrength:u=.1,bloomRadius:h=1,bloomThreshold:d=.025,brightness:p=1,color:g="#B497CF",mixBlendMode:v="screen",edgeIntensity:m=0,maxDevicePixelRatio:_=.5,targetPixels:M,fadeDelayMs:E,fadeDurationMs:T,zIndex:S=10})=>{const x=ut.useRef(null),P=ut.useRef(null),N=ut.useRef(null),R=ut.useRef(null),F=ut.useRef(null),z=ut.useRef(null),L=ut.useRef([]),H=ut.useRef(0),D=ut.useRef(null),b=ut.useRef(null),B=ut.useRef(new Re(.5,.5)),Z=ut.useRef(new Re(0,0)),k=ut.useRef(1),tt=ut.useRef(typeof performance<"u"?performance.now():Date.now()),lt=ut.useRef(!1),q=ut.useRef(!1),it=ut.useRef(!1),Y=ut.useMemo(()=>typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),[]),bt=M??(Y?9e5:13e5),vt=E??(Y?500:1e3),Mt=T??(Y?1e3:1500),Dt=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,fe=`
    uniform float iTime;
    uniform vec3  iResolution;
    uniform vec2  iMouse;
    uniform vec2  iPrevMouse[MAX_TRAIL_LENGTH];
    uniform float iOpacity;
    uniform float iScale;
    uniform vec3  iBaseColor;
    uniform float iBrightness;
    uniform float iEdgeIntensity;
    varying vec2  vUv;

    float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7))) * 43758.5453123); }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      f *= f * (3. - 2. * f);
      return mix(mix(hash(i + vec2(0.,0.)), hash(i + vec2(1.,0.)), f.x),
                 mix(hash(i + vec2(0.,1.)), hash(i + vec2(1.,1.)), f.x), f.y);
    }
    float fbm(vec2 p){
      float v = 0.0;
      float a = 0.5;
      mat2 m = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for(int i=0;i<5;i++){
        v += a * noise(p);
        p = m * p * 2.0;
        a *= 0.5;
      }
      return v;
    }
    vec3 tint1(vec3 base){ return mix(base, vec3(1.0), 0.15); }
    vec3 tint2(vec3 base){ return mix(base, vec3(0.8, 0.9, 1.0), 0.25); }

    vec4 blob(vec2 p, vec2 mousePos, float intensity, float activity) {
      vec2 q = vec2(fbm(p * iScale + iTime * 0.1), fbm(p * iScale + vec2(5.2,1.3) + iTime * 0.1));
      vec2 r = vec2(fbm(p * iScale + q * 1.5 + iTime * 0.15), fbm(p * iScale + q * 1.5 + vec2(8.3,2.8) + iTime * 0.15));

      float smoke = fbm(p * iScale + r * 0.8);
      float radius = 0.5 + 0.3 * (1.0 / iScale);
      float distFactor = 1.0 - smoothstep(0.0, radius * activity, length(p - mousePos));
      float alpha = pow(smoke, 2.5) * distFactor;

      vec3 c1 = tint1(iBaseColor);
      vec3 c2 = tint2(iBaseColor);
      vec3 color = mix(c1, c2, sin(iTime * 0.5) * 0.5 + 0.5);

      return vec4(color * alpha * intensity, alpha * intensity);
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
      vec2 mouse = (iMouse * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);

      vec3 colorAcc = vec3(0.0);
      float alphaAcc = 0.0;

      vec4 b = blob(uv, mouse, 1.0, iOpacity);
      colorAcc += b.rgb;
      alphaAcc += b.a;

      for (int i = 0; i < MAX_TRAIL_LENGTH; i++) {
        vec2 pm = (iPrevMouse[i] * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        float t = 1.0 - float(i) / float(MAX_TRAIL_LENGTH);
        t = pow(t, 2.0);
        if (t > 0.01) {
          vec4 bt = blob(uv, pm, t * 0.8, iOpacity);
          colorAcc += bt.rgb;
          alphaAcc += bt.a;
        }
      }

      colorAcc *= iBrightness;

      vec2 uv01 = gl_FragCoord.xy / iResolution.xy;
      float edgeDist = min(min(uv01.x, 1.0 - uv01.x), min(uv01.y, 1.0 - uv01.y));
      float distFromEdge = clamp(edgeDist * 2.0, 0.0, 1.0);
      float k = clamp(iEdgeIntensity, 0.0, 1.0);
      float edgeMask = mix(1.0 - k, 1.0, distFromEdge);

      float outAlpha = clamp(alphaAcc * iOpacity * edgeMask, 0.0, 1.0);
      gl_FragColor = vec4(colorAcc, outAlpha);
    }
  `,U=ut.useMemo(()=>({uniforms:{tDiffuse:{value:null},iTime:{value:0},intensity:{value:l}},vertexShader:`
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float iTime;
        uniform float intensity;
        varying vec2 vUv;

        float hash1(float n){ return fract(sin(n)*43758.5453); }

        void main(){
          vec4 color = texture2D(tDiffuse, vUv);
          float n = hash1(vUv.x*1000.0 + vUv.y*2000.0 + iTime) * 2.0 - 1.0;
          color.rgb += n * intensity * color.rgb;
          gl_FragColor = color;
        }
      `}),[l]),W=ut.useMemo(()=>new Qp({uniforms:{tDiffuse:{value:null}},vertexShader:`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D tDiffuse;
          varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tDiffuse, vUv);
            float coverage = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
            vec3 straight = coverage > 1e-5 ? c.rgb / coverage : vec3(0.0);
            gl_FragColor = vec4(clamp(straight, 0.0, 1.0), coverage);
          }
        `}),[]);function pt(xt){const Lt=xt.getBoundingClientRect(),It=600,Ct=Math.min(Math.max(1,Lt.width),Math.max(1,Lt.height));return Math.max(.5,Math.min(2,Ct/It))}ut.useEffect(()=>{const xt=x.current,Lt=xt==null?void 0:xt.parentElement;if(!xt||!Lt)return;let It=!0;const Ct=Lt.style.position;(!Ct||Ct==="static")&&(Lt.style.position="relative");const Ut=new n3({antialias:!Y,alpha:!0,depth:!1,stencil:!1,powerPreference:Y?"low-power":"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1});Ut.setClearColor(0,0),P.current=Ut,Ut.domElement.style.pointerEvents="none",v?Ut.domElement.style.mixBlendMode=String(v):Ut.domElement.style.removeProperty("mix-blend-mode"),xt.appendChild(Ut.domElement);const re=new p2,G=new lm(-1,1,1,-1,0,1),Ve=new wl(2,2),ee=Math.max(1,Math.floor(i));L.current=Array.from({length:ee},()=>new Re(.5,.5)),H.current=0;const se=new Ge(g),Pt=new ei({defines:{MAX_TRAIL_LENGTH:ee},uniforms:{iTime:{value:0},iResolution:{value:new dt(1,1,1)},iMouse:{value:new Re(.5,.5)},iPrevMouse:{value:L.current.map(qt=>qt.clone())},iOpacity:{value:1},iScale:{value:1},iBaseColor:{value:new dt(se.r,se.g,se.b)},iBrightness:{value:p},iEdgeIntensity:{value:m}},vertexShader:Dt,fragmentShader:fe,transparent:!0,depthTest:!1,depthWrite:!1});R.current=Pt;const ve=new ki(Ve,Pt);re.add(ve);const Xt=new o3(Ut);N.current=Xt;const O=new l3(re,G);Xt.addPass(O);const C=new So(new Re(1,1),u,h,d);F.current=C,Xt.addPass(C);const st=new Qp(U);z.current=st,Xt.addPass(st),Xt.addPass(W);const Et=()=>{var ht;if(!It)return;const qt=xt.getBoundingClientRect(),$t=Math.floor(qt.width),te=Math.floor(qt.height);if($t<=0||te<=0){it.current=!1;return}const Tt=Math.min(typeof window<"u"&&window.devicePixelRatio||1,_),zt=$t*te*Tt*Tt,ue=zt<=bt?1:Math.max(.5,Math.min(1,Math.sqrt(bt/Math.max(1,zt)))),ge=Tt*ue;Ut.setPixelRatio(ge),Ut.setSize($t,te,!1),(ht=Xt.setPixelRatio)==null||ht.call(Xt,ge),Xt.setSize($t,te);const V=Math.max(1,Math.floor($t*ge)),Ht=Math.max(1,Math.floor(te*ge));Pt.uniforms.iResolution.value.set(V,Ht,1),Pt.uniforms.iScale.value=pt(xt),C.setSize(V,Ht),it.current=!0};Et();const Rt=new ResizeObserver(()=>{It&&Et()});b.current=Rt,Rt.observe(Lt),Rt.observe(xt);const gt=typeof performance<"u"?performance.now():Date.now(),Kt=()=>{var ge,V;if(!It)return;if(!it.current){D.current=requestAnimationFrame(Kt);return}const qt=performance.now(),$t=(qt-gt)/1e3,te=R.current,Tt=N.current;if(lt.current)Z.current.set(B.current.x-te.uniforms.iMouse.value.x,B.current.y-te.uniforms.iMouse.value.y),te.uniforms.iMouse.value.copy(B.current),k.current=1;else{Z.current.multiplyScalar(s),Z.current.lengthSq()>1e-6&&te.uniforms.iMouse.value.add(Z.current);const Ht=qt-tt.current;if(Ht>vt){const ht=Math.min(1,(Ht-vt)/Mt);k.current=Math.max(0,1-ht)}}const zt=L.current.length;H.current=(H.current+1)%zt,L.current[H.current].copy(te.uniforms.iMouse.value);const ue=te.uniforms.iPrevMouse.value;for(let Ht=0;Ht<zt;Ht++){const ht=(H.current-Ht+zt)%zt;ue[Ht].copy(L.current[ht])}if(te.uniforms.iOpacity.value=k.current,te.uniforms.iTime.value=$t,(V=(ge=z.current)==null?void 0:ge.uniforms)!=null&&V.iTime&&(z.current.uniforms.iTime.value=$t),Tt.render(),!lt.current&&k.current<=.001){q.current=!1,D.current=null;return}D.current=requestAnimationFrame(Kt)},Gt=()=>{q.current||(q.current=!0,D.current=requestAnimationFrame(Kt))},kt=qt=>{const $t=Lt.getBoundingClientRect(),te=nx.clamp((qt.clientX-$t.left)/Math.max(1,$t.width),0,1),Tt=nx.clamp(1-(qt.clientY-$t.top)/Math.max(1,$t.height),0,1);B.current.set(te,Tt),lt.current=!0,tt.current=performance.now(),Gt()},xe=()=>{lt.current=!0,Gt()},Ot=()=>{lt.current=!1,tt.current=performance.now(),Gt()};return Lt.addEventListener("pointermove",kt,{passive:!0}),Lt.addEventListener("pointerenter",xe,{passive:!0}),Lt.addEventListener("pointerleave",Ot,{passive:!0}),Gt(),()=>{var qt;It=!1,it.current=!1,D.current&&cancelAnimationFrame(D.current),q.current=!1,D.current=null,Lt.removeEventListener("pointermove",kt),Lt.removeEventListener("pointerenter",xe),Lt.removeEventListener("pointerleave",Ot),(qt=b.current)==null||qt.disconnect(),re.clear(),Ve.dispose(),Pt.dispose(),R.current=null,Xt.dispose(),N.current=null,Ut.dispose(),Ut.forceContextLoss(),P.current=null,Ut.domElement&&Ut.domElement.parentElement&&Ut.domElement.parentElement.removeChild(Ut.domElement),(!Ct||Ct==="static")&&(Lt.style.position=Ct)}},[i,s,l,u,h,d,bt,vt,Mt,Y,g,p,v,m]),ut.useEffect(()=>{if(R.current){const xt=new Ge(g);R.current.uniforms.iBaseColor.value.set(xt.r,xt.g,xt.b)}},[g]),ut.useEffect(()=>{R.current&&(R.current.uniforms.iBrightness.value=p)},[p]),ut.useEffect(()=>{R.current&&(R.current.uniforms.iEdgeIntensity.value=m)},[m]),ut.useEffect(()=>{var xt,Lt;(Lt=(xt=z.current)==null?void 0:xt.uniforms)!=null&&Lt.intensity&&(z.current.uniforms.intensity.value=l)},[l]),ut.useEffect(()=>{var Lt;const xt=(Lt=P.current)==null?void 0:Lt.domElement;xt&&(v?xt.style.mixBlendMode=String(v):xt.style.removeProperty("mix-blend-mode"))},[v]);const ft=ut.useMemo(()=>({zIndex:S,...t}),[S,t]);return rt.jsx("div",{ref:x,className:`ghost-cursor ${r??""}`,style:ft})},ra=r=>`https://images.unsplash.com/${r}?w=900&q=80&auto=format&fit=max&sat=-100`,Wx=[{src:ra("photo-1506744038136-46273834b3fb"),alt:"Mist drifting through a mountain valley",title:"Valley",subtitle:"Landscape"},{src:ra("photo-1524504388940-b1c1722653e1"),alt:"A woman with long hair in soft studio light",title:"Portrait",subtitle:"Studio"},{src:ra("photo-1486406146926-c627a92ad1ab"),alt:"Glass towers seen from street level",title:"Towers",subtitle:"Architecture"},{src:ra("photo-1502680390469-be75c86b636f"),alt:"A surfer carving inside a breaking wave",title:"Swell",subtitle:"Ocean"},{src:ra("photo-1487958449943-2429e8be8625"),alt:"An angular white building against the sky",title:"Facade",subtitle:"Architecture"},{src:ra("photo-1509631179647-0177331693ae"),alt:"A model in striped trousers leaning on a wall",title:"Pose",subtitle:"Editorial"},{src:ra("photo-1519681393784-d120267933ba"),alt:"The Milky Way above snowy peaks",title:"Night",subtitle:"Sky"},{src:ra("photo-1485968579580-b6d095142e6e"),alt:"A woman in a long coat on a city street",title:"Street",subtitle:"Editorial"},{src:ra("photo-1493246507139-91e8fad9978e"),alt:"Mountains mirrored in a still lake",title:"Mirror",subtitle:"Landscape"},{src:ra("photo-1511818966892-d7d671e672a2"),alt:"A glass skyscraper under a cloudy sky",title:"Glass",subtitle:"Architecture"}],jx={cylinder:{axis:"y",tilt:-5,perspective:2500,curve:1,spread:1,inward:!1,billboard:!1,backfaces:!0,window:0},orbit:{axis:"y",tilt:-16,perspective:1500,curve:0,spread:1.45,inward:!1,billboard:!0,backfaces:!1,window:0},wheel:{axis:"x",tilt:0,perspective:1800,curve:0,spread:1,inward:!1,billboard:!1,backfaces:!0,window:1.7},panorama:{axis:"y",tilt:0,perspective:0,curve:1,spread:1,inward:!0,billboard:!1,backfaces:!1,window:0}},xl={assemble:1500,rise:1400,spin:1800,none:0},f3=8,Zx=2.5,h3=5,Qx=118,d3=9,p3=76,m3=700,Kx=420,cm=Math.PI/180,Jn=(r,t,i)=>Math.min(i,Math.max(t,r)),Wd=r=>((r+180)%360+360)%360-180,xc=r=>1-Math.pow(1-r,4),g3=r=>1-Math.pow(1-r,5),jd=(r,t)=>{const i=t*cm,s=Math.cos(i),l=Math.sin(i);return[r[0],r[1]*s-r[2]*l,r[1]*l+r[2]*s]},Zd=(r,t)=>{const i=t*cm,s=Math.cos(i),l=Math.sin(i);return[r[0]*s+r[2]*l,r[1],-r[0]*l+r[2]*s]},v3=({value:r})=>rt.jsx("span",{className:"circular-carousel__digits",children:String(r).padStart(2,"0").split("").map((t,i)=>rt.jsx("span",{className:"circular-carousel__digit",children:rt.jsx("span",{className:"circular-carousel__reel",style:{transform:`translateY(${-Number(t)*10}%)`},children:"0123456789".split("").map(s=>rt.jsx("span",{children:s},s))})},i))}),_3=()=>{const[r,t]=ut.useState(!1);return ut.useEffect(()=>{var l,u;const i=(l=window.matchMedia)==null?void 0:l.call(window,"(prefers-reduced-motion: reduce)");if(!i)return;const s=()=>t(i.matches);return s(),(u=i.addEventListener)==null||u.call(i,"change",s),()=>{var h;return(h=i.removeEventListener)==null?void 0:h.call(i,"change",s)}},[]),r},x3=({items:r=Wx,preset:t="cylinder",intro:i="rise",cardWidth:s=220,aspectRatio:l=1,gap:u=25,curve:h,tilt:d,perspective:p,autoplay:g="drift",speed:v=14,interval:m=3,direction:_="left",draggable:M=!0,momentum:E=.6,snap:T=!0,pauseOnHover:S=!0,focusOnClick:x=!0,parallax:P=.3,stretch:N=.5,depthFade:R=.55,fadeColor:F="#000000",innerShade:z=.6,cornerRadius:L=12,captions:H=!1,onChange:D,onItemClick:b,className:B="",style:Z})=>{const k=r&&r.length?r:Wx,[tt,lt]=ut.useState(k),[q,it]=ut.useState(null),Y=tt.length,bt=jx[t]?t:"cylinder",vt=jx[bt],Mt=vt.axis,Dt=d??vt.tilt,fe=vt.billboard?0:Jn(h??vt.curve,0,1),U=_3(),W=Math.max(40,s),pt=W/Jn(l,.2,5),ft=Mt==="x"?pt:W,xt=360/Y,Lt=ut.useMemo(()=>{const wt=Math.max(Y,3),_t=(ft+u)*vt.spread,Ft=_t/(2*Math.sin(Math.PI/wt)),oe=wt*_t/(2*Math.PI);return Math.max(Ft+(oe-Ft)*fe,ft*.6)},[Y,ft,u,fe,vt.spread]),It=ut.useMemo(()=>{const wt=fe>.001?f3:1,_t=ft/wt,Ft=fe>.001?Lt/fe:0;return Array.from({length:wt},(oe,mt)=>{const Ee=mt*_t-(mt>0?Zx/2:0),Ue=(mt+1)*_t+(mt<wt-1?Zx/2:0),Te=(Ee+Ue)/2-ft/2,Xe=Ft?Te/Ft:0,ln=Ft?Ft*Math.sin(Xe):Te,hn=Ft?Ft*(1-Math.cos(Xe)):0,Tn=vt.inward?hn:-hn,On=(vt.inward?-Xe:Xe)*180/Math.PI,Pn=Mt==="x"?`translate3d(0px, ${ln}px, ${Tn}px) rotateX(${-On}deg)`:`translate3d(${ln}px, 0px, ${Tn}px) rotateY(${On}deg)`;return{index:mt,total:wt,start:Ee,end:Ue,size:Ue-Ee,move:Pn}})},[ft,Mt,fe,vt.inward,Lt]),Ct=ut.useRef(null),Ut=ut.useRef(null),re=ut.useRef(null),G=ut.useRef(null),Ve=ut.useRef([]),ee=ut.useRef(()=>{}),se=ut.useRef(()=>{}),Pt=ut.useRef(0),[ve,Xt]=ut.useState(0),[O,C]=ut.useState(!1),[st,Et]=ut.useState(!1),Rt=ut.useRef(!1);Rt.current=O;const gt=ut.useRef({angle:0,velocity:0,target:null,dir:0,press:null,drag:!1,hover:!1,pointer:{inside:!1,x:0,y:0},yaw:0,pitch:0,intro:null,introDone:!1,holdUntil:0,stepAt:0,suppressClick:!1,wheelTimer:0,fit:1,shift:0,drop:0,last:0}),Kt={count:Y,step:xt,radius:Lt,layout:vt,axis:Mt,tilt:Dt,perspective:vt.inward?Lt:p??vt.perspective,cardW:W,cardH:pt,intro:U?"none":i in xl?i:"rise",autoplay:U?"off":g,speed:v,interval:Math.max(.5,m),draggable:M,momentum:Jn(E,0,1),snap:T,pauseOnHover:S,parallax:U?0:Jn(P,0,1),stretch:U?0:Jn(N,0,1),depthFade:Jn(R,0,1),captions:H,reduced:U},Gt=ut.useRef(Kt);Gt.current=Kt;const kt=ut.useRef(D);kt.current=D;const xe=vt.inward?-1:1,Ot=(_==="right"?1:-1)*xe;ut.useEffect(()=>{gt.current.dir=Ot,ee.current()},[Ot]);const qt=ut.useRef(k);qt.current=k;const $t=ut.useRef(tt);$t.current=tt;const te=k.map(wt=>wt.src).join("|");ut.useEffect(()=>{let wt=!1;const _t=qt.current,Ft=Rt.current&&_t.length===$t.current.length;Ft||(C(!1),it(null),lt(_t));const oe=_t.slice(0,16).map(Ue=>Ue.src),mt=Ue=>new Promise(Te=>{const Xe=new Image;Xe.decoding="async",Xe.onload=()=>Xe.decode?Xe.decode().then(Te,Te):Te(),Xe.onerror=Te,Xe.src=Ue}),Ee=new Promise(Ue=>setTimeout(Ue,2400));return Promise.race([Promise.all(oe.map(mt)),Ee]).then(()=>{if(wt)return;const Ue=gt.current;if(Ft){const Te=$t.current,Xe=Gt.current;!Xe.reduced&&Te!==_t&&it(ln=>({id:((ln==null?void 0:ln.id)||0)+1,items:Te,delays:Te.map((hn,Tn)=>Math.abs(Wd(Tn*Xe.step+Ue.angle))/180*Kx)})),lt(_t),ee.current();return}Ue.introDone=!1,Ue.intro=null,C(!0),ee.current()}),()=>{wt=!0}},[te]),ut.useEffect(()=>{if(!q)return;const wt=setTimeout(()=>it(null),m3+Kx+80);return()=>clearTimeout(wt)},[q]),ut.useLayoutEffect(()=>{const wt=Ct.current,_t=Ut.current,Ft=re.current,oe=G.current;if(!wt||!_t||!Ft||!oe)return;const mt=gt.current;let Ee=0,Ue=!0;const Te=Yt=>Math.round(Yt/Gt.current.step)*Gt.current.step,Xe=()=>{const Yt=Gt.current,$e=wt.getBoundingClientRect();if(!$e.width||!$e.height)return;const w=Yt.captions?p3:0,j=$e.width*.94,at=($e.height-w)*.92,nt=Yt.perspective;let K=1/0,Nt=-1/0,Vt=1/0,Bt=-1/0;if(Yt.layout.inward)K=-j/2,Nt=j/2,Vt=-Yt.cardH/2,Bt=Yt.cardH/2;else{const ce=[[-Yt.cardW/2,-Yt.cardH/2],[Yt.cardW/2,-Yt.cardH/2],[-Yt.cardW/2,Yt.cardH/2],[Yt.cardW/2,Yt.cardH/2]],Se=Yt.layout.window?Yt.layout.window*Yt.step:180;for(let Me=-Se;Me<=Se;Me+=Se/24)for(const[Ne,Fe]of ce){let me;if(Yt.axis==="x")me=Zd(jd([Ne,Fe,Yt.radius],-Me),Yt.tilt);else if(Yt.layout.billboard){const nn=Zd([0,0,Yt.radius],Me);me=jd([nn[0]+Ne,Fe,nn[2]],Yt.tilt)}else me=jd(Zd([Ne,Fe,Yt.radius],Me),Yt.tilt);if(me=[me[0],me[1],me[2]-Yt.radius],me[2]>=nt*.95)continue;const ae=nt/(nt-me[2]);K=Math.min(K,me[0]*ae),Nt=Math.max(Nt,me[0]*ae),Vt=Math.min(Vt,me[1]*ae),Bt=Math.max(Bt,me[1]*ae)}}const Wt=Math.max(Nt-K,1),ie=Math.max(Bt-Vt,1),de=Math.min(1,j/Wt,at/ie);mt.fit=de,mt.shift=-((Vt+Bt)/2)*de-w/2,mt.drop=Yt.axis==="x"?$e.width/de*.55+Yt.cardW:$e.height/de*.55+Yt.cardH,_t.style.perspective=`${nt}px`,_t.style.transform=`translate3d(0, ${mt.shift}px, 0) scale(${de})`};se.current=Xe;const ln=(Yt,$e)=>{if(!mt.intro)return{radius:1,lift:0};const w=mt.intro.type,j=Math.abs(Wd($e+mt.angle));if(w==="assemble"){const at=j/180*420;return{radius:1+.6*(1-xc(Jn((Yt-at)/1080,0,1))),lift:0}}if(w==="rise"){const at=j/180*480;return{radius:1,lift:(1-g3(Jn((Yt-at)/900,0,1)))*mt.drop}}return w==="spin"?{radius:1+.28*(1-xc(Jn(Yt/xl.spin,0,1))),lift:0}:{radius:1,lift:0}},hn=(Yt,$e,w)=>{!mt.introDone&&Rt.current&&(mt.intro||(Yt.intro==="none"?mt.introDone=!0:mt.intro={type:Yt.intro,start:w}),mt.intro&&w-mt.intro.start>=xl[mt.intro.type]&&(mt.intro=null,mt.introDone=!0));const j=Yt.pauseOnHover&&mt.hover||mt.drag||w<mt.holdUntil,at=Yt.autoplay==="drift"&&!j&&!mt.intro?Yt.speed*mt.dir:0;let nt=!!mt.intro||mt.drag;if(mt.drag||mt.intro)mt.velocity=mt.drag?mt.velocity:0;else if(mt.target!==null){let Bt=$e;const Wt=2*Math.sqrt(Qx);for(;Bt>0;){const ie=Math.min(Bt,.004166666666666667),de=Qx*(mt.target-mt.angle)-Wt*mt.velocity;mt.velocity+=de*ie,mt.angle+=mt.velocity*ie,Bt-=ie}Math.abs(mt.target-mt.angle)<.004&&Math.abs(mt.velocity)<.03&&(mt.angle=mt.target,mt.velocity=0,mt.target=null),nt=!0}else{const Bt=.18+Yt.momentum*1.5;mt.velocity+=(at-mt.velocity)*(1-Math.exp(-$e/Bt)),mt.angle+=mt.velocity*$e,at===0&&Yt.snap&&Math.abs(mt.velocity)<d3&&(mt.target=Te(mt.angle)),nt=nt||at!==0||Math.abs(mt.velocity)>.01||mt.target!==null}Yt.autoplay==="step"&&!j&&!mt.intro&&mt.introDone?(mt.stepAt||(mt.stepAt=w+Yt.interval*1e3),w>=mt.stepAt&&(mt.target=(mt.target??Te(mt.angle))+Yt.step*mt.dir,mt.stepAt=w+Yt.interval*1e3),nt=!0):mt.stepAt=0,w<mt.holdUntil&&(nt=!0);const K=1-Math.exp(-$e/.35),Nt=mt.pointer.inside?mt.pointer.x*Yt.parallax*9:0,Vt=mt.pointer.inside?-mt.pointer.y*Yt.parallax*6:0;return mt.yaw+=(Nt-mt.yaw)*K,mt.pitch+=(Vt-mt.pitch)*K,(Math.abs(Nt-mt.yaw)>.01||Math.abs(Vt-mt.pitch)>.01)&&(nt=!0),nt},Tn=(Yt,$e)=>{var Vt,Bt,Wt;const w=mt.intro?$e-mt.intro.start:0,j=1+Yt.stretch*.12*Math.min(1,Math.abs(mt.velocity)/420);let at=0;if(((Vt=mt.intro)==null?void 0:Vt.type)==="spin"){const ie=xc(Jn(w/xl.spin,0,1));at=-300*mt.dir*(1-ie)}else if(((Bt=mt.intro)==null?void 0:Bt.type)==="assemble"){const ie=xc(Jn(w/xl.assemble,0,1));at=-32*mt.dir*(1-ie)}const nt=mt.angle+at,K=Yt.radius*j;Yt.axis==="x"?(Ft.style.transform=`translate3d(0, 0, ${-K}px) rotateY(${Yt.tilt+mt.yaw}deg) rotateX(${mt.pitch}deg)`,oe.style.transform=`rotateX(${-nt}deg)`):Yt.layout.inward?(Ft.style.transform=`translate3d(0, 0, ${Yt.perspective-1}px) rotateX(${Yt.tilt+mt.pitch}deg) rotateY(${mt.yaw}deg)`,oe.style.transform=`rotateY(${nt}deg)`):(Ft.style.transform=`translate3d(0, 0, ${-K}px) rotateX(${Yt.tilt+mt.pitch}deg) rotateY(${mt.yaw}deg)`,oe.style.transform=`rotateY(${nt}deg)`);for(let ie=0;ie<Yt.count;ie++){const de=Ve.current[ie];if(!de)continue;const ce=ie*Yt.step,Se=ln(w,ce),Me=K*Se.radius;let Ne;Yt.axis==="x"?Ne=`rotateX(${-ce}deg) translateZ(${Me}px)`:Yt.layout.inward?Ne=`rotateY(${ce}deg) translateZ(${-Me}px)`:(Ne=`rotateY(${ce}deg) translateZ(${Me}px)`,Yt.layout.billboard&&(Ne+=` rotateY(${-(ce+nt)}deg)`)),Se.lift&&(Ne+=Yt.axis==="x"?` translateX(${Se.lift}px)`:` translateY(${Se.lift}px)`),de.style.transform=Ne;const Fe=Wd(ce+nt),me=Math.cos(Fe*cm);Yt.layout.inward&&(de.style.visibility=Math.abs(Fe)>86?"hidden":"");const ae=Yt.depthFade*Math.pow((1-me)/2,1.25);de.style.setProperty("--cc-depth",ae.toFixed(3))}const Nt=(Math.round(-mt.angle/Yt.step)%Yt.count+Yt.count)%Yt.count||0;Nt!==Pt.current&&(Pt.current=Nt,Xt(Nt),(Wt=kt.current)==null||Wt.call(kt,Nt))},On=Yt=>{Ee=0;const $e=Gt.current,w=mt.last?Math.min((Yt-mt.last)/1e3,.05):1/60;mt.last=Yt;const j=hn($e,w,Yt);Tn($e,Yt),j&&Ue&&!document.hidden?Ee=requestAnimationFrame(On):mt.last=0},Pn=()=>{!Ee&&Ue&&!document.hidden&&(Ee=requestAnimationFrame(On))};ee.current=Pn;const ca=()=>{document.hidden?(cancelAnimationFrame(Ee),Ee=0,mt.last=0):Pn()},br=new ResizeObserver(()=>{Xe(),Pn()});br.observe(wt);const Ga=new IntersectionObserver(([Yt])=>{Ue=Yt.isIntersecting,Ue?Pn():(cancelAnimationFrame(Ee),Ee=0,mt.last=0)});Ga.observe(wt);const Wi=Yt=>{const $e=Gt.current;if(!$e.draggable)return;const w=Math.abs(Yt.deltaX)>Math.abs(Yt.deltaY)?Yt.deltaX:0;if(!w)return;Yt.preventDefault();const j=180/(Math.PI*$e.radius*mt.fit);mt.target=null,mt.angle-=w*j*($e.layout.inward?-1:1),mt.velocity=-w*j*($e.layout.inward?-1:1)*30,mt.holdUntil=performance.now()+1600,clearTimeout(mt.wheelTimer),mt.wheelTimer=setTimeout(()=>{Gt.current.snap&&(mt.target=Te(mt.angle+mt.velocity*.12)),Pn()},140),Pn()};return wt.addEventListener("wheel",Wi,{passive:!1}),document.addEventListener("visibilitychange",ca),Xe(),Tn(Gt.current,performance.now()),Pn(),()=>{cancelAnimationFrame(Ee),br.disconnect(),Ga.disconnect(),clearTimeout(mt.wheelTimer),wt.removeEventListener("wheel",Wi),document.removeEventListener("visibilitychange",ca)}},[]),ut.useLayoutEffect(()=>{se.current(),ee.current()},[Lt,W,pt,Dt,p,t,H,Y]),ut.useEffect(()=>{ee.current()});const Tt=ut.useCallback(wt=>{const _t=gt.current,Ft=Gt.current;let oe=-wt*Ft.step;oe+=360*Math.round((_t.angle-oe)/360),_t.target=oe,_t.holdUntil=performance.now()+2800,ee.current()},[]),zt=ut.useCallback(wt=>{const _t=gt.current,Ft=Gt.current,oe=_t.target??Math.round(_t.angle/Ft.step)*Ft.step;_t.target=oe-wt*Ft.step*(Ft.layout.inward?-1:1),_t.holdUntil=performance.now()+2800,ee.current()},[]),ue=wt=>{const _t=Ct.current.getBoundingClientRect(),Ft=gt.current.pointer;Ft.x=Jn((wt.clientX-_t.left)/_t.width*2-1,-1,1),Ft.y=Jn((wt.clientY-_t.top)/_t.height*2-1,-1,1)},ge=wt=>{const _t=gt.current;_t.suppressClick=!1,!(!M||wt.button!==0)&&(_t.press={id:wt.pointerId,x:wt.clientX,y:wt.clientY,angle:_t.angle,moved:!1,origin:0,samples:[{time:performance.now(),angle:_t.angle}]})},V=wt=>{const _t=gt.current;wt.pointerType==="mouse"&&(_t.pointer.inside=!0,ue(wt));const Ft=_t.press;if(!Ft||Ft.id!==wt.pointerId){ee.current();return}const oe=Gt.current,mt=oe.axis==="x"?wt.clientY-Ft.y:wt.clientX-Ft.x,Ee=oe.axis==="x"?wt.clientX-Ft.x:wt.clientY-Ft.y;if(!Ft.moved){if(Math.abs(mt)<h3)return;if(Math.abs(Ee)>Math.abs(mt)*1.2&&wt.pointerType!=="mouse"){_t.press=null;return}Ft.moved=!0,Ft.origin=mt,_t.drag=!0,_t.target=null,_t.velocity=0,Et(!0);try{Ct.current.setPointerCapture(wt.pointerId)}catch{}}const Ue=180/(Math.PI*oe.radius*_t.fit);_t.angle=Ft.angle+(mt-Ft.origin)*Ue*(oe.layout.inward?-1:1);const Te=performance.now();for(Ft.samples.push({time:Te,angle:_t.angle});Ft.samples.length>2&&Te-Ft.samples[0].time>110;)Ft.samples.shift();ee.current()},Ht=wt=>{const _t=gt.current,Ft=_t.press;if(!Ft||Ft.id!==wt.pointerId||(_t.press=null,!Ft.moved))return;_t.drag=!1,Et(!1),_t.suppressClick=!0;const oe=Gt.current,mt=Ft.samples[0],Ee=Ft.samples[Ft.samples.length-1],Ue=(Ee.time-mt.time)/1e3,Te=Ue>.008?Jn((Ee.angle-mt.angle)/Ue,-1400,1400):0;_t.velocity=Te,Math.abs(Te)>60&&(_t.dir=Math.sign(Te));const Xe=oe.autoplay==="drift"&&!(oe.pauseOnHover&&_t.hover&&wt.pointerType==="mouse");if(oe.snap&&!Xe){const ln=.18+oe.momentum*1.5;_t.target=Math.round((_t.angle+Te*ln*.55)/oe.step)*oe.step}ee.current()},ht=wt=>{wt.pointerType==="mouse"&&(gt.current.hover=!0,ee.current())},At=wt=>{const _t=gt.current;wt.pointerType==="mouse"&&(_t.hover=!1,_t.pointer.inside=!1),ee.current()},jt=wt=>{var mt,Ee;const _t=gt.current;if(_t.suppressClick){_t.suppressClick=!1;return}const Ft=(Ee=(mt=wt.target).closest)==null?void 0:Ee.call(mt,"[data-cc-index]");if(!Ft)return;const oe=Number(Ft.getAttribute("data-cc-index"));x&&Tt(oe),b==null||b(tt[oe],oe)},Zt=wt=>{const _t=Mt==="x"?"ArrowDown":"ArrowRight",Ft=Mt==="x"?"ArrowUp":"ArrowLeft";if(wt.key===_t)zt(1);else if(wt.key===Ft)zt(-1);else if(wt.key==="Home")Tt(0);else if(wt.key==="End")Tt(Y-1);else if(wt.key==="Enter"||wt.key===" ")b==null||b(tt[Pt.current],Pt.current);else return;wt.preventDefault()},he=tt[ve]||tt[0],We=he?he.title||he.alt||`Image ${ve+1}`:"",Je=(wt,_t,Ft,oe)=>{const mt=Ft?_t.total-1-_t.index:_t.index,Ee=mt===0,Ue=mt===_t.total-1,Te="var(--cc-radius)",Xe=Mt==="x"?`${Ee?Te:0} ${Ee?Te:0} ${Ue?Te:0} ${Ue?Te:0}`:`${Ee?Te:0} ${Ue?Te:0} ${Ue?Te:0} ${Ee?Te:0}`,ln=Ft?ft-_t.end:_t.start,hn=_t.size,Tn=Mt==="x"?{left:-W/2,top:-hn/2,width:W,height:hn}:{left:-hn/2,top:-pt/2,width:hn,height:pt},On=Mt==="x"?{left:0,top:-ln,width:W,height:pt}:{left:-ln,top:0,width:W,height:pt},Pn=Mt==="x"?" rotateX(180deg)":" rotateY(180deg)",ca=q==null?void 0:q.items[oe];return rt.jsx("div",{className:"circular-carousel__tile",style:{...Tn,transform:_t.move+(Ft?Pn:"")},"aria-hidden":"true",children:rt.jsxs("div",{className:"circular-carousel__frame",style:{height:Mt==="x"?hn:pt,borderRadius:Xe},children:[rt.jsx("img",{className:"circular-carousel__photo",src:wt.src,alt:"",draggable:!1,decoding:"async",style:On}),ca&&rt.jsx("img",{className:"circular-carousel__photo circular-carousel__photo--leaving",src:ca.src,alt:"",draggable:!1,decoding:"async",style:{...On,animationDelay:`${Math.round(q.delays[oe])}ms`}},`leaving-${q.id}`),Ft&&rt.jsx("div",{className:"circular-carousel__inner"}),rt.jsx("div",{className:"circular-carousel__shade"})]})},`${Ft?"b":"f"}${_t.index}`)};return rt.jsxs("div",{ref:Ct,className:`circular-carousel ${B}`.trim(),style:{...Z,"--cc-fade":F,"--cc-radius":`${Math.max(0,L)}px`,"--cc-inner":(1-Jn(z,0,1)).toFixed(3)},role:"region","aria-roledescription":"carousel","aria-label":"Image carousel",tabIndex:0,"data-axis":Mt,"data-shape":bt,"data-ready":O?"":void 0,"data-draggable":M?"":void 0,"data-dragging":st?"":void 0,onPointerDown:ge,onPointerMove:V,onPointerUp:Ht,onPointerCancel:Ht,onPointerEnter:ht,onPointerLeave:At,onClick:jt,onKeyDown:Zt,children:[rt.jsx("div",{className:"circular-carousel__view",children:rt.jsx("div",{ref:Ut,className:"circular-carousel__stage",children:rt.jsx("div",{ref:re,className:"circular-carousel__camera",children:rt.jsx("div",{ref:G,className:"circular-carousel__ring",children:tt.map((wt,_t)=>rt.jsxs("div",{ref:Ft=>{Ve.current[_t]=Ft},className:"circular-carousel__card","data-cc-index":_t,role:"group","aria-roledescription":"slide","aria-label":`${wt.title||wt.alt||`Image ${_t+1}`}, ${_t+1} of ${Y}`,children:[It.map(Ft=>Je(wt,Ft,!1,_t)),vt.backfaces&&It.map(Ft=>Je(wt,Ft,!0,_t))]},_t))})})})}),H&&he&&rt.jsxs("div",{className:"circular-carousel__caption","aria-hidden":"true",children:[rt.jsxs("span",{className:"circular-carousel__title",children:[he.title||he.alt,he.subtitle&&rt.jsx("span",{className:"circular-carousel__subtitle",children:he.subtitle})]},ve),rt.jsxs("span",{className:"circular-carousel__count",children:[rt.jsx(v3,{value:ve+1}),rt.jsx("span",{className:"circular-carousel__slash",children:"/"}),rt.jsx("span",{children:String(Y).padStart(2,"0")})]})]}),rt.jsx("div",{className:"circular-carousel__live","aria-live":"polite","aria-atomic":"true",children:`${We}, ${ve+1} of ${Y}`})]})},ua=GM.createContext({});var y3=Object.defineProperty,Jx=Object.getOwnPropertySymbols,S3=Object.prototype.hasOwnProperty,M3=Object.prototype.propertyIsEnumerable,$x=(r,t,i)=>t in r?y3(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,Qd=(r,t)=>{for(var i in t||(t={}))S3.call(t,i)&&$x(r,i,t[i]);if(Jx)for(var i of Jx(t))M3.call(t,i)&&$x(r,i,t[i]);return r};const E3=(r,t)=>{const i=ut.useContext(ua),s=Qd(Qd({},i),r);return ut.createElement("svg",Qd({width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",strokeWidth:1.5,fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},T3=ut.forwardRef(E3);var b3=T3,A3=Object.defineProperty,t1=Object.getOwnPropertySymbols,R3=Object.prototype.hasOwnProperty,C3=Object.prototype.propertyIsEnumerable,e1=(r,t,i)=>t in r?A3(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,Kd=(r,t)=>{for(var i in t||(t={}))R3.call(t,i)&&e1(r,i,t[i]);if(t1)for(var i of t1(t))C3.call(t,i)&&e1(r,i,t[i]);return r};const w3=(r,t)=>{const i=ut.useContext(ua),s=Kd(Kd({},i),r);return ut.createElement("svg",Kd({width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",strokeWidth:1.5,fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},D3=ut.forwardRef(w3);var lo=D3,U3=Object.defineProperty,n1=Object.getOwnPropertySymbols,N3=Object.prototype.hasOwnProperty,L3=Object.prototype.propertyIsEnumerable,i1=(r,t,i)=>t in r?U3(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,Jd=(r,t)=>{for(var i in t||(t={}))N3.call(t,i)&&i1(r,i,t[i]);if(n1)for(var i of n1(t))L3.call(t,i)&&i1(r,i,t[i]);return r};const O3=(r,t)=>{const i=ut.useContext(ua),s=Jd(Jd({},i),r);return ut.createElement("svg",Jd({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M13.5 6L10 18.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M6.5 8.5L3 12L6.5 15.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M17.5 8.5L21 12L17.5 15.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},P3=ut.forwardRef(O3);var z3=P3,B3=Object.defineProperty,a1=Object.getOwnPropertySymbols,I3=Object.prototype.hasOwnProperty,F3=Object.prototype.propertyIsEnumerable,r1=(r,t,i)=>t in r?B3(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,$d=(r,t)=>{for(var i in t||(t={}))I3.call(t,i)&&r1(r,i,t[i]);if(a1)for(var i of a1(t))F3.call(t,i)&&r1(r,i,t[i]);return r};const H3=(r,t)=>{const i=ut.useContext(ua),s=$d($d({},i),r);return ut.createElement("svg",$d({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12",stroke:"currentColor"}),ut.createElement("path",{d:"M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6",stroke:"currentColor"}),ut.createElement("path",{d:"M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z",stroke:"currentColor"}))},G3=ut.forwardRef(H3);var V3=G3,X3=Object.defineProperty,s1=Object.getOwnPropertySymbols,k3=Object.prototype.hasOwnProperty,q3=Object.prototype.propertyIsEnumerable,o1=(r,t,i)=>t in r?X3(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,tp=(r,t)=>{for(var i in t||(t={}))k3.call(t,i)&&o1(r,i,t[i]);if(s1)for(var i of s1(t))q3.call(t,i)&&o1(r,i,t[i]);return r};const Y3=(r,t)=>{const i=ut.useContext(ua),s=tp(tp({},i),r);return ut.createElement("svg",tp({width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",strokeWidth:1.5,fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M13 10V3L5 14H11V21L19 10H13Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},W3=ut.forwardRef(Y3);var j3=W3,Z3=Object.defineProperty,l1=Object.getOwnPropertySymbols,Q3=Object.prototype.hasOwnProperty,K3=Object.prototype.propertyIsEnumerable,u1=(r,t,i)=>t in r?Z3(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,ep=(r,t)=>{for(var i in t||(t={}))Q3.call(t,i)&&u1(r,i,t[i]);if(l1)for(var i of l1(t))K3.call(t,i)&&u1(r,i,t[i]);return r};const J3=(r,t)=>{const i=ut.useContext(ua),s=ep(ep({},i),r);return ut.createElement("svg",ep({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},$3=ut.forwardRef(J3);var tD=$3,eD=Object.defineProperty,c1=Object.getOwnPropertySymbols,nD=Object.prototype.hasOwnProperty,iD=Object.prototype.propertyIsEnumerable,f1=(r,t,i)=>t in r?eD(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,np=(r,t)=>{for(var i in t||(t={}))nD.call(t,i)&&f1(r,i,t[i]);if(c1)for(var i of c1(t))iD.call(t,i)&&f1(r,i,t[i]);return r};const aD=(r,t)=>{const i=ut.useContext(ua),s=np(np({},i),r);return ut.createElement("svg",np({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M2.5 12.5L8 14.5L7 18L8 21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},rD=ut.forwardRef(aD);var sD=rD,oD=Object.defineProperty,h1=Object.getOwnPropertySymbols,lD=Object.prototype.hasOwnProperty,uD=Object.prototype.propertyIsEnumerable,d1=(r,t,i)=>t in r?oD(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,ip=(r,t)=>{for(var i in t||(t={}))lD.call(t,i)&&d1(r,i,t[i]);if(h1)for(var i of h1(t))uD.call(t,i)&&d1(r,i,t[i]);return r};const cD=(r,t)=>{const i=ut.useContext(ua),s=ip(ip({},i),r);return ut.createElement("svg",ip({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M7 9L12 12.5L17 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z",stroke:"currentColor"}))},fD=ut.forwardRef(cD);var hD=fD,dD=Object.defineProperty,p1=Object.getOwnPropertySymbols,pD=Object.prototype.hasOwnProperty,mD=Object.prototype.propertyIsEnumerable,m1=(r,t,i)=>t in r?dD(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,ap=(r,t)=>{for(var i in t||(t={}))pD.call(t,i)&&m1(r,i,t[i]);if(p1)for(var i of p1(t))mD.call(t,i)&&m1(r,i,t[i]);return r};const gD=(r,t)=>{const i=ut.useContext(ua),s=ap(ap({},i),r);return ut.createElement("svg",ap({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M3 5H21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M3 12H21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M3 19H21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},vD=ut.forwardRef(gD);var _D=vD,xD=Object.defineProperty,g1=Object.getOwnPropertySymbols,yD=Object.prototype.hasOwnProperty,SD=Object.prototype.propertyIsEnumerable,v1=(r,t,i)=>t in r?xD(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,rp=(r,t)=>{for(var i in t||(t={}))yD.call(t,i)&&v1(r,i,t[i]);if(g1)for(var i of g1(t))SD.call(t,i)&&v1(r,i,t[i]);return r};const MD=(r,t)=>{const i=ut.useContext(ua),s=rp(rp({},i),r);return ut.createElement("svg",rp({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},s),ut.createElement("path",{d:"M19.2609 9.69589L20.6455 18.6959C20.8319 19.9074 19.8945 21 18.6688 21H5.33122C4.10545 21 3.16809 19.9074 3.35448 18.6959L4.73909 9.69589C4.8892 8.72022 5.7287 8 6.71584 8H17.2842C18.2713 8 19.1108 8.72022 19.2609 9.69589Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),ut.createElement("path",{d:"M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))},ED=ut.forwardRef(MD);var TD=ED;const sp=[{title:"SIDOKA × INTACTOZ",subtitle:"Experiência editorial / Streetwear",src:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1000&q=85",href:"https://intactoz-underground.contamateusfortnite.com/"},{title:"ROSE FREITAS",subtitle:"Produtos / Comunidade / Website",src:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=85",href:"https://rosefreitas.com/"},{title:"ARCEUZ",subtitle:"Plataforma e ferramentas digitais",src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=85",href:"https://github.com/ZenithWe"},{title:"RESENHA MORUMBI",subtitle:"Eventos / Painel de gestão",src:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1000&q=85",href:"https://github.com/ZenithWe/camarote-resenha-morumbi"}],bD=[["Websites Premium","Sites com identidade única, rápidos e responsivos.",sD],["Landing Pages","Páginas de apresentação e conversão.",lo],["Painéis e Sistemas","Dashboards, áreas de usuários e ferramentas.",V3],["E-commerce","Catálogos, produtos e experiências de compra.",TD],["Experiências Visuais","Efeitos, microinterações e interfaces memoráveis.",j3],["Soluções Personalizadas","Sistemas construídos para seu negócio.",z3]],_1=["React","Next.js","JavaScript","HTML / CSS","Tailwind CSS","GSAP","Three.js","Supabase","Vercel","GitHub"];function AD(){const[r,t]=ut.useState(!1),[i,s]=ut.useState(!0),[l,u]=ut.useState(!1);return ut.useEffect(()=>{const h=window.matchMedia("(max-width: 750px), (prefers-reduced-motion: reduce)"),d=()=>u(h.matches);return d(),h.addEventListener("change",d),()=>h.removeEventListener("change",d)},[]),rt.jsxs(rt.Fragment,{children:[rt.jsx("header",{children:rt.jsxs("div",{className:"container nav",children:[rt.jsxs("a",{className:"brand",href:"#home",children:["MF",rt.jsx("span",{children:"."}),"DEV"]}),rt.jsx("button",{className:"menuButton",onClick:()=>t(!r),"aria-label":"Abrir menu","aria-expanded":r,children:rt.jsx(_D,{})}),rt.jsxs("nav",{className:r?"open":"",children:[[["Sobre","#sobre"],["Serviços","#servicos"],["Projetos","#projetos"],["Tecnologias","#stack"]].map(([h,d])=>rt.jsx("a",{onClick:()=>t(!1),href:d,children:h},d)),rt.jsxs("a",{onClick:()=>t(!1),href:"#contato",className:"navcontact",children:["Vamos conversar ",rt.jsx(lo,{width:17})]})]})]})}),rt.jsxs("main",{children:[rt.jsxs("section",{id:"home",className:"hero",children:[rt.jsx("div",{className:"heroGrid"}),!l&&rt.jsx(c3,{color:"#a855f7",trailLength:18,bloomStrength:.13,maxDevicePixelRatio:.45,zIndex:1}),rt.jsxs("div",{className:"container heroContent",children:[rt.jsxs("div",{className:"heroText",children:[rt.jsxs("span",{className:"status",children:[rt.jsx("i",{})," DESENVOLVEDOR & CRIADOR DIGITAL"]}),rt.jsx("p",{className:"index",children:"PORTFÓLIO / 2026"}),rt.jsxs("h1",{children:["Ideias em",rt.jsx("br",{}),rt.jsx("em",{children:"código."}),rt.jsx("br",{}),"Impacto ",rt.jsx("span",{children:"real."})]}),rt.jsxs("p",{className:"lead",children:["Sou ",rt.jsx("strong",{children:"Mateus Freitas"}),". Desenvolvo sites, sistemas e experiências digitais que unem estética, movimento e funcionalidade."]}),rt.jsxs("div",{className:"ctas",children:[rt.jsxs("a",{className:"primary",href:"#projetos",children:["Explorar projetos ",rt.jsx(lo,{})]}),rt.jsxs("a",{className:"secondary",href:"#contato",children:["Vamos criar juntos ",rt.jsx(b3,{})]})]})]}),rt.jsxs("div",{className:"heroArtwork",children:[rt.jsx("div",{className:"violetOrb",children:rt.jsx("div",{className:"orbCore"})}),rt.jsx("span",{className:"floatingLabel",children:"DESIGN × CODE × EXPERIENCE"})]})]}),rt.jsx("span",{className:"scrollHint",children:"↓ SCROLL TO EXPLORE"})]}),rt.jsx("div",{className:"loop",children:rt.jsx(E1,{logos:_1.map(h=>({node:rt.jsxs("span",{className:"loopText",children:[h," ",rt.jsx("span",{children:"✦"})]}),title:h})),speed:65,gap:56,logoHeight:28,fadeOut:!0,fadeOutColor:"#0b0810",pauseOnHover:!0})}),rt.jsxs("section",{id:"sobre",className:"section container",children:[rt.jsxs("div",{className:"sectionHeader",children:[rt.jsx("span",{className:"eyebrow",children:"01 — SOBRE MIM"}),rt.jsxs("h2",{children:["Construindo o",rt.jsx("br",{}),rt.jsx("span",{children:"extraordinário."})]}),rt.jsx("p",{children:"Design não é só aparência. É transformar uma ideia em uma experiência útil, envolvente e memorável."})]}),rt.jsxs("div",{className:"aboutLayout",children:[rt.jsx(NT,{color:"#9d54f8",speed:.55,chaos:.06,borderRadius:6,children:rt.jsxs("article",{className:"aboutCard",children:[rt.jsx("span",{className:"eyebrow",children:"QUEM ESTÁ POR TRÁS DOS PROJETOS"}),rt.jsx("h3",{children:"Olá, sou Mateus."}),rt.jsx("p",{children:"Crio experiências digitais com identidade, movimento e propósito. Desenvolvo projetos para marcas e negócios, conectando interfaces modernas a funcionalidades reais."}),rt.jsx("p",{children:"De sites institucionais a dashboards com autenticação e gestão, cada solução nasce de um desafio diferente."}),rt.jsxs("a",{href:"#contato",className:"textLink",children:["Trabalhar comigo ",rt.jsx(lo,{})]})]})}),rt.jsxs("div",{className:"aboutVisual",children:[rt.jsx(UT,{src:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85",fit:"cover",palette:"duotone",pattern:"floyd",inkColor:"#1b0a31",paperColor:"#bb93ff",rimColor:"#a855f7",rim:.6,pixelSize:3,wander:!0,clickBurst:!0}),rt.jsx("span",{children:"INTERAJA COM A IMAGEM ↗"})]})]})]}),rt.jsx("section",{id:"servicos",className:"section sectionDark",children:rt.jsxs("div",{className:"container",children:[rt.jsxs("div",{className:"sectionHeader",children:[rt.jsx("span",{className:"eyebrow",children:"02 — O QUE EU FAÇO"}),rt.jsxs("h2",{children:["Digital com",rt.jsx("br",{}),rt.jsx("span",{children:"personalidade."})]}),rt.jsx("p",{children:"Um conjunto de soluções para transformar a presença digital do seu projeto."})]}),rt.jsx("div",{className:"serviceGrid",children:bD.map(([h,d,p],g)=>rt.jsxs("article",{className:"serviceCard",children:[rt.jsxs("span",{className:"serviceIndex",children:["0",g+1]}),rt.jsx(p,{width:34,height:34,strokeWidth:1.4}),rt.jsx("h3",{children:h}),rt.jsx("p",{children:d})]},h))})]})}),rt.jsxs("section",{id:"projetos",className:"section projectsSection container",children:[rt.jsxs("div",{className:"sectionHeader",children:[rt.jsx("span",{className:"eyebrow",children:"03 — TRABALHOS SELECIONADOS"}),rt.jsxs("h2",{children:["Projetos em",rt.jsx("br",{}),rt.jsx("span",{children:"destaque."})]}),rt.jsx("p",{children:"Explore alguns dos projetos que desenvolvi. Arraste os cards para navegar pelo carrossel."})]}),rt.jsx("div",{className:"carouselStage",children:rt.jsx(x3,{items:sp.map(h=>({src:h.src,alt:h.title,title:h.title,subtitle:h.subtitle})),preset:"orbit",intro:"assemble",autoplay:"drift",cardWidth:l?160:260,aspectRatio:.8,gap:34,speed:9,captions:!0,onItemClick:(h,d)=>{var p;return window.open((p=sp[d])==null?void 0:p.href,"_blank","noopener,noreferrer")}})}),rt.jsx("div",{className:"projectGrid",children:sp.map((h,d)=>rt.jsxs("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:"projectRow",children:[rt.jsxs("span",{className:"projectNum",children:["0",d+1]}),rt.jsx("span",{className:"projectName",children:h.title}),rt.jsx("span",{className:"projectDesc",children:h.subtitle}),rt.jsx(lo,{})]},h.title))})]}),rt.jsx("section",{id:"stack",className:"section sectionDark",children:rt.jsxs("div",{className:"container",children:[rt.jsxs("div",{className:"sectionHeader",children:[rt.jsx("span",{className:"eyebrow",children:"04 — TECNOLOGIAS"}),rt.jsxs("h2",{children:["Design encontra",rt.jsx("br",{}),rt.jsx("span",{children:"tecnologia."})]}),rt.jsx("p",{children:"Ferramentas para transformar conceitos em produtos reais."})]}),rt.jsx("div",{className:"skillGrid",children:_1.map((h,d)=>rt.jsxs("div",{className:"skill",children:[rt.jsxs("span",{children:["0",String(d+1).padStart(2,"0")]}),rt.jsx("strong",{children:h}),rt.jsx(lo,{width:17})]},h))})]})}),rt.jsx("section",{id:"contato",className:"contact section",children:rt.jsxs("div",{className:"container",children:[rt.jsx("div",{className:"eyebrow",children:"05 — PRÓXIMO PROJETO"}),rt.jsxs("h2",{children:["Vamos criar",rt.jsx("br",{}),rt.jsx("span",{children:"algo incrível?"})]}),rt.jsx("p",{children:"Uma boa ideia merece sair do papel. Vamos conversar sobre a sua."}),rt.jsxs("div",{className:"ctas contactBtns",children:[rt.jsxs("a",{className:"primary",href:"mailto:mateusfreitas.business@gmail.com?subject=Novo%20projeto",children:["Entre em contato ",rt.jsx(hD,{})]}),rt.jsxs("a",{className:"secondary",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ZenithWe",children:["Meu GitHub ",rt.jsx(tD,{})]})]})]})})]}),rt.jsx("footer",{children:rt.jsxs("div",{className:"container footer",children:[rt.jsxs("span",{children:["© ",new Date().getFullYear()," Mateus Freitas"]}),rt.jsx("span",{children:"DESIGN. DEVELOPMENT. EXPERIENCE."}),rt.jsx("a",{href:"#home",children:"Voltar ao topo ↑"})]})})]})}jM.createRoot(document.getElementById("root")).render(rt.jsx(AD,{}));
