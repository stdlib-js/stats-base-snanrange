"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(A,l){
var c=require('@stdlib/math-base-assert-is-nanf/dist'),x=require('@stdlib/number-float64-base-to-float32/dist');function R(e,r,n,s){var v,u,t,a,i;if(e<=0)return NaN;if(e===1||n===0)return c(r[s])?r[s]:0;for(t=s,i=0;i<e&&(a=r[t],a!==a);i++)t+=n;if(i===e)return NaN;for(u=a,v=u,i+=1,i;i<e;i++)t+=n,a=r[t],!c(a)&&(a<u?u=a:a>v&&(v=a));return x(v-u)}l.exports=R
});var p=o(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=f();function k(e,r,n){return b(e,r,n,_(e,n))}m.exports=k
});var d=o(function(C,g){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),F=f();E(y,"ndarray",F);g.exports=y
});var O=require("path").join,T=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=d(),q,j=T(O(__dirname,"./native.js"));h(j)?q=w:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
