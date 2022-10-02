// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,a=n.toString,l=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?o:function(t,e,r){var o,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(i.call(t,e)||f.call(t,e)?(o=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=o):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&l&&l.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var c=e;function y(t){return t!=t}var p,b="function"==typeof Math.fround?Math.fround:null,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"";p=d&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,o,n,a;if(null==t)return _.call(t);r=t[v],a=v,e=null!=(n=t)&&s.call(n,a);try{t[v]=void 0}catch(e){return _.call(t)}return o=_.call(t),e?t[v]=r:delete t[v],o}:function(t){return _.call(t)};var m,g=p,j="function"==typeof Float32Array,h=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null,N="function"==typeof Float32Array?Float32Array:void 0;m=function(){var t,e,r;if("function"!=typeof w)return!1;try{e=new w([1,3.14,-3.14,5e40]),r=e,t=(j&&r instanceof Float32Array||"[object Float32Array]"===g(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===h}catch(e){t=!1}return t}()?N:function(){throw new Error("not implemented")};var S=new m(1),A="function"==typeof b?b:function(t){return S[0]=t,S[0]};function F(t,e,r){var o,n,a,l,u;if(t<=0)return NaN;if(1===t||0===r)return y(e[0])?NaN:0;for(a=r<0?(1-t)*r:0,u=0;u<t&&(l=e[a])!=l;u++)a+=r;if(u===t)return NaN;for(o=n=l,u+=1;u<t;u++)y(l=e[a+=r])||(l<n?n=l:l>o&&(o=l));return A(o-n)}function O(t,e,r,o){var n,a,l,u,i;if(t<=0)return NaN;if(1===t||0===r)return y(e[o])?e[o]:0;for(l=o,i=0;i<t&&(u=e[l])!=u;i++)l+=r;if(i===t)return NaN;for(n=a=u,i+=1;i<t;i++)y(u=e[l+=r])||(u<a?a=u:u>n&&(n=u));return A(n-a)}c(F,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:O}),t.default=F,t.ndarray=O,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).snanrange={});
//# sourceMappingURL=index.js.map