var ft=Object.defineProperty;var dt=(e,t,n)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(dt(e,typeof t!="symbol"?t+"":t,n),n);import{d as pe,o as k,c as j,a as x,t as q,_ as he,b as pt,r as G,u as ht,e as mt,w as yt,f as Ie,g as bt,v as _t,h as z,i as wt,F as St,j as Et,k as gt,n as Ot}from"./index-1600c7b0.js";const Tt=["href"],Rt={class:"chuck-card__value"},At=["src"],xt={class:"chuck-card__footer"},Ct={class:"chuck-card__id"},Nt={class:"chuck-card__date"},Pt=pe({__name:"ChuckCard",props:{item:{}},setup(e){return(t,n)=>(k(),j("a",{class:"chuck-card",href:t.item.url},[x("div",Rt,q(t.item.value),1),x("img",{src:t.item.icon_url,alt:""},null,8,At),x("div",xt,[x("div",Ct,q(t.item.id),1),x("div",Nt,q(t.item.getDate(t.item.created_at)),1)])],8,Tt))}});const kt=he(Pt,[["__scopeId","data-v-f33c6b42"]]);class jt{constructor(t){A(this,"categories");A(this,"created_at");A(this,"icon_url");A(this,"id");A(this,"updated_at");A(this,"url");A(this,"value");this.categories=t.categories,this.created_at=t.created_at,this.icon_url=t.icon_url,this.id=t.id,this.updated_at=t.updated_at,this.url=t.url,this.value=t.value}getDate(t){const n=new Intl.DateTimeFormat("ru"),r=new Date(t);return n.format(r)}}class Ft{constructor(t){A(this,"$http");this.$http=t}async get(t){const n=await this.$http.get(`/jokes/search?query=${t}`);return{...n.data,result:n.data.result.map(r=>new jt(r))}}}function $e(e,t){return function(){return e.apply(t,arguments)}}const{toString:vt}=Object.prototype,{getPrototypeOf:me}=Object,X=(e=>t=>{const n=vt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>X(t)===e),Q=e=>t=>typeof t===e,{isArray:L}=Array,I=Q("undefined");function Lt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const He=R("ArrayBuffer");function Bt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&He(e.buffer),t}const Dt=Q("string"),O=Q("function"),Me=Q("number"),Z=e=>e!==null&&typeof e=="object",Ut=e=>e===!0||e===!1,J=e=>{if(X(e)!=="object")return!1;const t=me(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},It=R("Date"),$t=R("File"),Ht=R("Blob"),Mt=R("FileList"),qt=e=>Z(e)&&O(e.pipe),zt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=X(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},Jt=R("URLSearchParams"),Vt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function qe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ze=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Je=e=>!I(e)&&e!==ze;function ce(){const{caseless:e}=Je(this)&&this||{},t={},n=(r,s)=>{const o=e&&qe(t,s)||s;J(t[o])&&J(r)?t[o]=ce(t[o],r):J(r)?t[o]=ce({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&$(arguments[r],n);return t}const Wt=(e,t,n,{allOwnKeys:r}={})=>($(t,(s,o)=>{n&&O(s)?e[o]=$e(s,n):e[o]=s},{allOwnKeys:r}),e),Gt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Xt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&me(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Qt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Zt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Me(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Yt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&me(Uint8Array)),en=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},tn=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},nn=R("HTMLFormElement"),rn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),sn=R("RegExp"),Ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},on=e=>{Ve(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},an=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},cn=()=>{},un=(e,t)=>(e=+e,Number.isFinite(e)?e:t),re="abcdefghijklmnopqrstuvwxyz",Oe="0123456789",We={DIGIT:Oe,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+Oe},ln=(e=16,t=We.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function fn(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const dn=e=>{const t=new Array(10),n=(r,s)=>{if(Z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return $(r,(i,c)=>{const f=n(i,s+1);!I(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},pn=R("AsyncFunction"),hn=e=>e&&(Z(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:L,isArrayBuffer:He,isBuffer:Lt,isFormData:zt,isArrayBufferView:Bt,isString:Dt,isNumber:Me,isBoolean:Ut,isObject:Z,isPlainObject:J,isUndefined:I,isDate:It,isFile:$t,isBlob:Ht,isRegExp:sn,isFunction:O,isStream:qt,isURLSearchParams:Jt,isTypedArray:Yt,isFileList:Mt,forEach:$,merge:ce,extend:Wt,trim:Vt,stripBOM:Gt,inherits:Kt,toFlatObject:Xt,kindOf:X,kindOfTest:R,endsWith:Qt,toArray:Zt,forEachEntry:en,matchAll:tn,isHTMLForm:nn,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Ve,freezeMethods:on,toObjectSet:an,toCamelCase:rn,noop:cn,toFiniteNumber:un,findKey:qe,global:ze,isContextDefined:Je,ALPHABET:We,generateString:ln,isSpecCompliantForm:fn,toJSONObject:dn,isAsyncFn:pn,isThenable:hn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ge=m.prototype,Ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ke[e]={value:e}});Object.defineProperties(m,Ke);Object.defineProperty(Ge,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ge);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const mn=null;function ue(e){return a.isPlainObject(e)||a.isArray(e)}function Xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Te(e,t,n){return e?e.concat(t).map(function(s,o){return s=Xe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function yn(e){return a.isArray(e)&&!e.some(ue)}const bn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Y(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,S){return!a.isUndefined(S[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function d(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!f&&a.isBlob(l))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?f&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function u(l,h,S){let E=l;if(l&&!S&&typeof l=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&yn(l)||(a.isFileList(l)||a.endsWith(h,"[]"))&&(E=a.toArray(l)))return h=Xe(h),E.forEach(function(F,te){!(a.isUndefined(F)||F===null)&&t.append(i===!0?Te([h],te,o):i===null?h:h+"[]",d(F))}),!1}return ue(l)?!0:(t.append(Te(S,h,o),d(l)),!1)}const p=[],y=Object.assign(bn,{defaultVisitor:u,convertValue:d,isVisitable:ue});function w(l,h){if(!a.isUndefined(l)){if(p.indexOf(l)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(l),a.forEach(l,function(E,g){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(g)?g.trim():g,h,y))===!0&&w(E,h?h.concat(g):[g])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ye(e,t){this._pairs=[],e&&Y(e,this,t)}const Qe=ye.prototype;Qe.append=function(t,n){this._pairs.push([t,n])};Qe.toString=function(t){const n=t?function(r){return t.call(this,r,Re)}:Re;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ze(e,t,n){if(!t)return e;const r=n&&n.encode||_n,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ye(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class wn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ae=wn,Ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Sn=typeof URLSearchParams<"u"?URLSearchParams:ye,En=typeof FormData<"u"?FormData:null,gn=typeof Blob<"u"?Blob:null,On=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Tn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:Sn,FormData:En,Blob:gn},isStandardBrowserEnv:On,isStandardBrowserWebWorkerEnv:Tn,protocols:["http","https","file","blob","url","data"]};function Rn(e,t){return Y(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function An(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function xn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function et(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=xn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(An(r),s,n,0)}),n}return null}function Cn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const be={transitional:Ye,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(et(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Rn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Y(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Cn(t)):t}],transformResponse:[function(t){const n=this.transitional||be.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{be.headers[e]={}});const _e=be,Nn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Pn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Nn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function V(e){return e===!1||e==null?e:a.isArray(e)?e.map(V):String(e)}function kn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function se(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Fn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class ee{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,d){const u=D(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||d===!0||d===void 0&&s[p]!==!1)&&(s[p||f]=V(c))}const i=(c,f)=>a.forEach(c,(d,u)=>o(d,u,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!jn(t)?i(Pn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return kn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||se(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||se(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||se(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=V(s),delete n[o];return}const c=t?Fn(o):String(o).trim();c!==o&&delete n[o],n[c]=V(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);r[c]||(vn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(ee.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(ee);const C=ee;function oe(e,t){const n=this||_e,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function tt(e){return!!(e&&e.__CANCEL__)}function H(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(H,m,{__CANCEL__:!0});function Ln(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Bn=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Un(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function nt(e,t){return e&&!Dn(t)?Un(e,t):t}const In=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function $n(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Hn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const d=Date.now(),u=r[o];i||(i=d),n[s]=f,r[s]=d;let p=o,y=0;for(;p!==s;)y+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),d-i<t)return;const w=u&&d-u;return w?Math.round(y*1e3/w):void 0}}function Ce(e,t){let n=0;const r=Hn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,f=r(c),d=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:f||void 0,estimated:f&&i&&d?(i-o)/f:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Mn=typeof XMLHttpRequest<"u",qn=Mn&&function(e){return new Promise(function(n,r){let s=e.data;const o=C.from(e.headers).normalize(),i=e.responseType;let c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let d;a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?a.isString(d=o.getContentType())&&o.setContentType(d.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(l+":"+h))}const p=nt(e.baseURL,e.url);u.open(e.method.toUpperCase(),Ze(p,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function y(){if(!u)return;const l=C.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),S={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:l,config:e,request:u};Ln(function(g){n(g),f()},function(g){r(g),f()},S),u=null}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||Ye;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,S.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},T.isStandardBrowserEnv){const l=(e.withCredentials||In(p))&&e.xsrfCookieName&&Bn.read(e.xsrfCookieName);l&&o.set(e.xsrfHeaderName,l)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(h,S){u.setRequestHeader(S,h)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=l=>{u&&(r(!l||l.type?new H(null,e,u):l),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=$n(p);if(w&&T.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},le={http:mn,xhr:qn};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ne=e=>`- ${e}`,zn=e=>a.isFunction(e)||e===null||e===!1,rt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!zn(n)&&(r=le[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ne).join(`
`):" "+Ne(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:le};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new H(null,e)}function Pe(e){return ie(e),e.headers=C.from(e.headers),e.data=oe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),rt.getAdapter(e.adapter||_e.adapter)(e).then(function(r){return ie(e),r.data=oe.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return tt(r)||(ie(e),r&&r.response&&(r.response.data=oe.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const ke=e=>e instanceof C?e.toJSON():e;function v(e,t){t=t||{};const n={};function r(d,u,p){return a.isPlainObject(d)&&a.isPlainObject(u)?a.merge.call({caseless:p},d,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(d,u,p){if(a.isUndefined(u)){if(!a.isUndefined(d))return r(void 0,d,p)}else return r(d,u,p)}function o(d,u){if(!a.isUndefined(u))return r(void 0,u)}function i(d,u){if(a.isUndefined(u)){if(!a.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function c(d,u,p){if(p in t)return r(d,u);if(p in e)return r(void 0,d)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(d,u)=>s(ke(d),ke(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||s,y=p(e[u],t[u],u);a.isUndefined(y)&&p!==c||(n[u]=y)}),n}const st="1.5.1",we={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{we[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const je={};we.transitional=function(t,n,r){function s(o,i){return"[Axios v"+st+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!je[i]&&(je[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Jn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const fe={assertOptions:Jn,validators:we},P=fe.validators;class K{constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=v(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&fe.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:fe.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete o[l]}),n.headers=C.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const d=[];this.interceptors.response.forEach(function(h){d.push(h.fulfilled,h.rejected)});let u,p=0,y;if(!f){const l=[Pe.bind(this),void 0];for(l.unshift.apply(l,c),l.push.apply(l,d),y=l.length,u=Promise.resolve(n);p<y;)u=u.then(l[p++],l[p++]);return u}y=c.length;let w=n;for(p=0;p<y;){const l=c[p++],h=c[p++];try{w=l(w)}catch(S){h.call(this,S);break}}try{u=Pe.call(this,w)}catch(l){return Promise.reject(l)}for(p=0,y=d.length;p<y;)u=u.then(d[p++],d[p++]);return u}getUri(t){t=v(this.defaults,t);const n=nt(t.baseURL,t.url);return Ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){K.prototype[t]=function(n,r){return this.request(v(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(v(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}K.prototype[t]=n(),K.prototype[t+"Form"]=n(!0)});const W=K;class Se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new H(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Se(function(s){t=s}),cancel:t}}}const Vn=Se;function Wn(e){return function(n){return e.apply(null,n)}}function Gn(e){return a.isObject(e)&&e.isAxiosError===!0}const de={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(de).forEach(([e,t])=>{de[t]=e});const Kn=de;function ot(e){const t=new W(e),n=$e(W.prototype.request,t);return a.extend(n,W.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ot(v(e,s))},n}const b=ot(_e);b.Axios=W;b.CanceledError=H;b.CancelToken=Vn;b.isCancel=tt;b.VERSION=st;b.toFormData=Y;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Wn;b.isAxiosError=Gn;b.mergeConfig=v;b.AxiosHeaders=C;b.formToJSON=e=>et(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=rt.getAdapter;b.HttpStatusCode=Kn;b.default=b;const Xn=b,Qn=Xn.create({baseURL:"https://api.chucknorris.io"}),Zn={chuck:new Ft(Qn)},it=pt("chuck",()=>{const e=G([]);async function t(n){const r=await Zn.chuck.get(n);e.value=r.result}return{getCards:t,cards:e}}),Yn={class:"chuck-search"},er={class:"chuck-search__controls"},tr={class:"chuck-search__found"},nr=pe({__name:"ChuckSearch",emits:["onSearch"],setup(e,{emit:t}){const n=ht(),r=mt(),s=G(r.query.search??""),o=G(null),i=it();return yt(s,c=>{n.push({query:{search:c}}),t("onSearch",c)}),Ie(()=>{o.value&&o.value.focus(),t("onSearch",s.value)}),(c,f)=>(k(),j("div",Yn,[x("div",er,[bt(x("input",{class:"chuck-search__control",type:"search ","onUpdate:modelValue":f[0]||(f[0]=d=>s.value=d),placeholder:"Some value",ref_key:"searchRef",ref:o},null,512),[[_t,s.value]])]),x("div",tr,"Found jokes: "+q(z(i).cards.length),1)]))}});const rr=he(nr,[["__scopeId","data-v-efe58b20"]]);var M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function or(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var at=or,ir=typeof M=="object"&&M&&M.Object===Object&&M,ar=ir,cr=ar,ur=typeof self=="object"&&self&&self.Object===Object&&self,lr=cr||ur||Function("return this")(),ct=lr,fr=ct,dr=function(){return fr.Date.now()},pr=dr,hr=/\s/;function mr(e){for(var t=e.length;t--&&hr.test(e.charAt(t)););return t}var yr=mr,br=yr,_r=/^\s+/;function wr(e){return e&&e.slice(0,br(e)+1).replace(_r,"")}var Sr=wr,Er=ct,gr=Er.Symbol,ut=gr,Fe=ut,lt=Object.prototype,Or=lt.hasOwnProperty,Tr=lt.toString,U=Fe?Fe.toStringTag:void 0;function Rr(e){var t=Or.call(e,U),n=e[U];try{e[U]=void 0;var r=!0}catch{}var s=Tr.call(e);return r&&(t?e[U]=n:delete e[U]),s}var Ar=Rr,xr=Object.prototype,Cr=xr.toString;function Nr(e){return Cr.call(e)}var Pr=Nr,ve=ut,kr=Ar,jr=Pr,Fr="[object Null]",vr="[object Undefined]",Le=ve?ve.toStringTag:void 0;function Lr(e){return e==null?e===void 0?vr:Fr:Le&&Le in Object(e)?kr(e):jr(e)}var Br=Lr;function Dr(e){return e!=null&&typeof e=="object"}var Ur=Dr,Ir=Br,$r=Ur,Hr="[object Symbol]";function Mr(e){return typeof e=="symbol"||$r(e)&&Ir(e)==Hr}var qr=Mr,zr=Sr,Be=at,Jr=qr,De=0/0,Vr=/^[-+]0x[0-9a-f]+$/i,Wr=/^0b[01]+$/i,Gr=/^0o[0-7]+$/i,Kr=parseInt;function Xr(e){if(typeof e=="number")return e;if(Jr(e))return De;if(Be(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Be(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=zr(e);var n=Wr.test(e);return n||Gr.test(e)?Kr(e.slice(2),n?2:8):Vr.test(e)?De:+e}var Qr=Xr,Zr=at,ae=pr,Ue=Qr,Yr="Expected a function",es=Math.max,ts=Math.min;function ns(e,t,n){var r,s,o,i,c,f,d=0,u=!1,p=!1,y=!0;if(typeof e!="function")throw new TypeError(Yr);t=Ue(t)||0,Zr(n)&&(u=!!n.leading,p="maxWait"in n,o=p?es(Ue(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y);function w(_){var N=r,B=s;return r=s=void 0,d=_,i=e.apply(B,N),i}function l(_){return d=_,c=setTimeout(E,t),u?w(_):i}function h(_){var N=_-f,B=_-d,Ee=t-N;return p?ts(Ee,o-B):Ee}function S(_){var N=_-f,B=_-d;return f===void 0||N>=t||N<0||p&&B>=o}function E(){var _=ae();if(S(_))return g(_);c=setTimeout(E,h(_))}function g(_){return c=void 0,y&&r?w(_):(r=s=void 0,i)}function F(){c!==void 0&&clearTimeout(c),d=0,r=f=s=c=void 0}function te(){return c===void 0?i:g(ae())}function ne(){var _=ae(),N=S(_);if(r=arguments,s=this,f=_,N){if(c===void 0)return l(f);if(p)return clearTimeout(c),c=setTimeout(E,t),w(f)}return c===void 0&&(c=setTimeout(E,t)),i}return ne.cancel=F,ne.flush=te,ne}var rs=ns;const ss=sr(rs),os={class:"index-page"},is={class:"index-page__search"},as={key:0,class:"span"},cs={key:1,class:"index-page__cards"},us={key:2},ls=pe({__name:"PageIndex",setup(e){const t=it(),n=G(!1);Ie(async()=>{t.getCards()});const s=ss(async o=>{if(o.length>=3)try{n.value=!0,await t.getCards(o)}finally{n.value=!1}},300);return(o,i)=>(k(),j("div",os,[x("div",is,[wt(rr,{onOnSearch:z(s)},null,8,["onOnSearch"])]),n.value?(k(),j("div",as,"Lodaing...")):!n.value&&z(t).cards.length?(k(),j("div",cs,[(k(!0),j(St,null,Et(z(t).cards,(c,f)=>(k(),gt(kt,{class:Ot(["index-page__card",{[`index-page__card--${f+1}`]:!0}]),key:c.id,item:c},null,8,["item","class"]))),128))])):(k(),j("span",us," Пусто.. "))]))}});const ps=he(ls,[["__scopeId","data-v-37bb7ce3"]]);export{ps as default};
