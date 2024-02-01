"use strict";var o=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var c=o(function(A,l){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),k=require('@stdlib/number-float64-base-to-float32/dist');function F(e,i,t){var v,u,n,a,r;if(e<=0)return NaN;if(e===1||t===0)return q(i[0])?NaN:0;for(t<0?n=(1-e)*t:n=0,r=0;r<e&&(a=i[n],a!==a);r++)n+=t;if(r===e)return NaN;for(u=a,v=u,r+=1,r;r<e;r++)n+=t,a=i[n],!q(a)&&(a<u?u=a:a>v&&(v=a));return k(v-u)}l.exports=F
});var g=o(function(B,p){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),R=require('@stdlib/number-float64-base-to-float32/dist');function T(e,i,t,v){var u,n,a,r,f;if(e<=0)return NaN;if(e===1||t===0)return m(i[v])?i[v]:0;for(a=v,f=0;f<e&&(r=i[a],r!==r);f++)a+=t;if(f===e)return NaN;for(n=r,u=n,f+=1,f;f<e;f++)a+=t,r=i[a],!m(r)&&(r<n?n=r:r>u&&(u=r));return R(u-n)}p.exports=T
});var x=o(function(C,j){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),E=g();_(y,"ndarray",E);j.exports=y
});var N=require("path").join,O=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=x(),s,b=O(N(__dirname,"./native.js"));h(b)?s=w:s=b;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
