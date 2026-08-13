"use strict";var l=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var Z=l(function(K,p){
var g=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist'),d=require('@stdlib/math-base-assert-is-nan/dist');function O(n,a,v,f,c,q){var o,u,t,r,i,e,s;if(o=a.data,u=a.accessors[0],n===1||v===0)return e=c.call(q,u(o,f),0,f,o),e===void 0||d(e)?NaN:e;for(i=f,s=0;s<n&&(r=c.call(q,u(o,i),s,i,o),r===void 0);s++)i+=v;if(s===n)return NaN;if(d(r))return r;for(t=r,s+=1,s;s<n;s++)if(i+=v,e=c.call(q,u(o,i),s,i,o),e!==void 0){if(d(e))return e;e<r||e===r&&j(e)?r=e:(e>t||e===t&&g(e))&&(t=e)}return(t+r)/2}p.exports=O
});var y=l(function(L,B){
var R=require('@stdlib/math-base-assert-is-positive-zero/dist'),w=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),C=Z();function D(n,a,v,f,c,q){var o,u,t,r,i,e;if(n<=0)return NaN;if(e=z(a),e.accessorProtocol)return C(n,e,v,f,c,q);if(n===1||v===0)return r=c.call(q,a[f],0,f,a),r===void 0||m(r)?NaN:r;for(t=f,i=0;i<n&&(u=c.call(q,a[t],i,t,a),u===void 0);i++)t+=v;if(i===n)return NaN;if(m(u))return u;for(o=u,i+=1,i;i<n;i++)if(t+=v,r=c.call(q,a[t],i,t,a),r!==void 0){if(m(r))return r;r<u||r===u&&w(r)?u=r:(r>o||r===o&&R(r))&&(o=r)}return(o+u)/2}B.exports=D
});var P=l(function(M,N){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(n,a,v,f,c){return F(n,a,v,E(n,v),f,c)}N.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=P(),I=y();H(x,"ndarray",I);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
