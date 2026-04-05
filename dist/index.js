"use strict";var l=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var Z=l(function(K,p){
var g=require('@stdlib/math-base-assert-is-positive-zero/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist'),d=require('@stdlib/math-base-assert-is-nan/dist');function O(n,i,t,f,c,q){var v,u,o,r,a,e,s;if(v=i.data,u=i.accessors[0],n===1||t===0)return e=c.call(q,u(v,f),0,f,v),e===void 0||d(e)?NaN:e;for(a=f,s=0;s<n&&(r=c.call(q,u(v,a),s,a,v),r===void 0);s++)a+=t;if(s===n)return NaN;if(d(r))return r;for(o=r,s+=1,s;s<n;s++)if(a+=t,e=c.call(q,u(v,a),s,a,v),e!==void 0){if(d(e))return e;e<r||e===r&&j(e)?r=e:(e>o||e===o&&g(e))&&(o=e)}return(o+r)/2}p.exports=O
});var y=l(function(L,B){
var R=require('@stdlib/math-base-assert-is-positive-zero/dist'),w=require('@stdlib/math-base-assert-is-negative-zero/dist'),m=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),C=Z();function D(n,i,t,f,c,q){var v,u,o,r,a,e;if(n<=0)return NaN;if(e=z(i),e.accessorProtocol)return C(n,e,t,f,c,q);if(n===1||t===0)return r=c.call(q,i[f],0,f,i),r===void 0||m(r)?NaN:r;for(o=f,a=0;a<n&&(u=c.call(q,i[o],a,o,i),u===void 0);a++)o+=t;if(a===n)return NaN;if(m(u))return u;for(v=u,a+=1,a;a<n;a++)if(o+=t,r=c.call(q,i[o],a,o,i),r!==void 0){if(m(r))return r;r<u||r===u&&w(r)?u=r:(r>v||r===v&&R(r))&&(v=r)}return(v+u)/2}B.exports=D
});var P=l(function(M,N){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=y();function G(n,i,t,f,c){return F(n,i,t,E(n,t),f,c)}N.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=P(),I=y();H(x,"ndarray",I);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
