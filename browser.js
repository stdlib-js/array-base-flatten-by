// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function B(r){return"string"==typeof r}function S(r){var e,t,n;if(!B(r))throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,P=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,e)||U.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var N=I;function Y(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){var e,t,n;if(0===(e=r.length))return 0;for(t=1,n=0;n<e;n++)t*=r[n];return t}function $(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}function G(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,i;for(e=r.length,t=[],i=0;i<e;i++)t.push(0);for(n=1,i=e-1;i>=0;i--)t[i]=n,n*=r[i];return t}(r)}function Z(r,e,t,n,i,o){var a,u,f,l,c;for(a=r.length,u=1,c=0;c<a;c++)u*=r[c];if("clamp"===o)i<0?i=0:i>=u&&(i=u-1);else if("wrap"===o)i<0?(i+=u)<0&&0!=(i%=u)&&(i+=u):i>=u&&(i-=u)>=u&&(i%=u);else if(i<0||i>=u)throw new RangeError(S("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",u,i));if(f=t,"column-major"===n){for(c=0;c<a;c++)i-=l=i%r[c],i/=r[c],f+=l*e[c];return f}for(c=a-1;c>=0;c--)i-=l=i%r[c],i/=r[c],f+=l*e[c];return f}Y(G,"assign",(function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)}));var X=Math.floor,J="function",z={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function q(r){var e=z[r];return"function"==typeof e?e:z.default}var D={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function H(r){var e=D[r];return"function"==typeof e?e:D.default}var K={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Q(r){var e=K[r];return"function"==typeof e?e:K.default}var rr={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function er(r){var e=rr[r];return"function"==typeof e?e:rr.default}var tr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function nr(){return tr&&"symbol"==typeof Symbol.toStringTag}var ir=Object.prototype.toString,or=Object.prototype.hasOwnProperty;function ar(r,e){return null!=r&&or.call(r,e)}var ur="function"==typeof Symbol?Symbol:void 0,fr="function"==typeof ur?ur.toStringTag:"",lr=nr()?function(r){var e,t,n;if(null==r)return ir.call(r);t=r[fr],e=ar(r,fr);try{r[fr]=void 0}catch(e){return ir.call(r)}return n=ir.call(r),e?r[fr]=t:delete r[fr],n}:function(r){return ir.call(r)},cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)};function sr(r){return null!==r&&"object"==typeof r}function yr(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function hr(){return/^\s*function\s*([^(]*)/i}Y(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(S("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(sr));var pr=/^\s*function\s*([^(]*)/i;function gr(r){var e,t,n;if(("Object"===(t=lr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return yr(r)?"Buffer":t}Y(hr,"REGEXP",pr);var mr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},wr="function"==typeof Float64Array,br="function"==typeof Float64Array?Float64Array:null,dr="function"==typeof Float64Array?Float64Array:void 0,vr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,NaN]),t=e,r=(wr&&t instanceof Float64Array||"[object Float64Array]"===lr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")},Er="function"==typeof Float32Array,Ar=Number.POSITIVE_INFINITY,Tr="function"==typeof Float32Array?Float32Array:null,_r="function"==typeof Float32Array?Float32Array:void 0,xr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,5e40]),t=e,r=(Er&&t instanceof Float32Array||"[object Float32Array]"===lr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Ar}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")},jr="function"==typeof Uint32Array,Vr="function"==typeof Uint32Array?Uint32Array:null,kr="function"==typeof Uint32Array?Uint32Array:void 0,Lr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(jr&&t instanceof Uint32Array||"[object Uint32Array]"===lr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Rr="function"==typeof Int32Array,Br="function"==typeof Int32Array?Int32Array:null,Sr="function"==typeof Int32Array?Int32Array:void 0,Ir=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([1,3.14,-3.14,2147483648]),t=e,r=(Rr&&t instanceof Int32Array||"[object Int32Array]"===lr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Cr="function"==typeof Uint16Array,Fr="function"==typeof Uint16Array?Uint16Array:null,Or="function"==typeof Uint16Array?Uint16Array:void 0,Mr=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Cr&&t instanceof Uint16Array||"[object Uint16Array]"===lr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")},Pr="function"==typeof Int16Array,Ur="function"==typeof Int16Array?Int16Array:null,Nr="function"==typeof Int16Array?Int16Array:void 0,Yr=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur([1,3.14,-3.14,32768]),t=e,r=(Pr&&t instanceof Int16Array||"[object Int16Array]"===lr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},Wr="function"==typeof Uint8Array,$r="function"==typeof Uint8Array?Uint8Array:null,Gr="function"==typeof Uint8Array?Uint8Array:void 0,Zr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r(e=[1,3.14,-3.14,256,257]),t=e,r=(Wr&&t instanceof Uint8Array||"[object Uint8Array]"===lr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")},Xr="function"==typeof Uint8ClampedArray,Jr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,zr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,qr=function(){var r,e,t;if("function"!=typeof Jr)return!1;try{e=new Jr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Xr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===lr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")},Dr="function"==typeof Int8Array,Hr="function"==typeof Int8Array?Int8Array:null,Kr="function"==typeof Int8Array?Int8Array:void 0,Qr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr([1,3.14,-3.14,128]),t=e,r=(Dr&&t instanceof Int8Array||"[object Int8Array]"===lr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};function re(r){return"number"==typeof r}var ee=Number,te=ee.prototype.toString,ne=nr();function ie(r){return"object"==typeof r&&(r instanceof ee||(ne?function(r){try{return te.call(r),!0}catch(r){return!1}}(r):"[object Number]"===lr(r)))}function oe(r){return re(r)||ie(r)}Y(oe,"isPrimitive",re),Y(oe,"isObject",ie);var ae=ee.NEGATIVE_INFINITY;function ue(r){return X(r)===r}function fe(r){return r<Ar&&r>ae&&ue(r)}function le(r){return re(r)&&fe(r)}function ce(r){return ie(r)&&fe(r.valueOf())}function se(r){return le(r)||ce(r)}function ye(r){return le(r)&&r>=0}function he(r){return ce(r)&&r.valueOf()>=0}function pe(r){return ye(r)||he(r)}function ge(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ue(r.length)&&r.length>=0&&r.length<=4294967295}function me(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ue(r.length)&&r.length>=0&&r.length<=9007199254740991}Y(se,"isPrimitive",le),Y(se,"isObject",ce),Y(pe,"isPrimitive",ye),Y(pe,"isObject",he);var we="function"==typeof ArrayBuffer;function be(r){return we&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===lr(r)}function de(r){return"object"==typeof r&&null!==r&&!cr(r)}var ve=/./;function Ee(r){return"boolean"==typeof r}var Ae=Boolean,Te=Boolean.prototype.toString,_e=nr();function xe(r){return"object"==typeof r&&(r instanceof Ae||(_e?function(r){try{return Te.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===lr(r)))}function je(r){return Ee(r)||xe(r)}function Ve(){return new Function("return this;")()}Y(je,"isPrimitive",Ee),Y(je,"isObject",xe);var ke="object"==typeof self?self:null,Le="object"==typeof window?window:null,Re="object"==typeof globalThis?globalThis:null,Be=function(r){if(arguments.length){if(!Ee(r))throw new TypeError(S("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ve()}if(Re)return Re;if(ke)return ke;if(Le)return Le;throw new Error("unexpected error. Unable to resolve global object.")}(),Se=Be.document&&Be.document.childNodes,Ie=Int8Array,Ce="function"==typeof ve||"object"==typeof Ie||"function"==typeof Se?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?gr(r).toLowerCase():e};function Fe(r){return"function"===Ce(r)}function Oe(r,e){if(!(this instanceof Oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!re(r))throw new TypeError(S("invalid argument. Real component must be a number. Value: `%s`.",r));if(!re(e))throw new TypeError(S("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Oe,"BYTES_PER_ELEMENT",8),Y(Oe.prototype,"BYTES_PER_ELEMENT",8),Y(Oe.prototype,"byteLength",16),Y(Oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Oe.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Me="function"==typeof Math.fround?Math.fround:null,Pe=new xr(1),Ue="function"==typeof Me?Me:function(r){return Pe[0]=r,Pe[0]};function Ne(r,e){if(!(this instanceof Ne))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!re(r))throw new TypeError(S("invalid argument. Real component must be a number. Value: `%s`.",r));if(!re(e))throw new TypeError(S("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ue(r)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ue(e)}),this}function Ye(r){return r instanceof Oe||r instanceof Ne||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function We(r){return ue(r/2)}function $e(){return"function"==typeof ur&&"symbol"==typeof ur("foo")&&ar(ur,"iterator")&&"symbol"==typeof ur.iterator}Y(Ne,"BYTES_PER_ELEMENT",4),Y(Ne.prototype,"BYTES_PER_ELEMENT",4),Y(Ne.prototype,"byteLength",8),Y(Ne.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Ne.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ge=$e()?Symbol.iterator:null;function Ze(r,e,t){N(r,e,{configurable:!1,enumerable:!1,get:t})}function Xe(r){return r.re}function Je(r){return r.im}function ze(r,e){return new xr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function qe(r,e){return new vr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function De(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ge(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ye(n))return new TypeError(S("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Xe(n),Je(n))}return e}function He(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ge(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ye(o))return new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Xe(o),Je(o))}return n}function Ke(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ye(n=e[i]))return null;r[o]=Xe(n),r[o+1]=Je(n),o+=2}return r}var Qe=2*xr.BYTES_PER_ELEMENT,rt=$e();function et(r){return r instanceof ot||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function tt(r){return r===ot||"Complex128Array"===r.name}function nt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Qe}function it(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Qe}function ot(){var r,e,t,n;if(e=arguments.length,!(this instanceof ot))return 0===e?new ot:1===e?new ot(arguments[0]):2===e?new ot(arguments[0],arguments[1]):new ot(arguments[0],arguments[1],arguments[2]);if(0===e)t=new xr(0);else if(1===e)if(ye(arguments[0]))t=new xr(2*arguments[0]);else if(me(arguments[0]))if((n=(t=arguments[0]).length)&&cr(t)&&Ye(t[0])){if(null===(t=Ke(new xr(2*n),t))){if(!We(n))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new xr(arguments[0])}}else{if(nt(t))t=ze(t,0);else if(it(t))t=qe(t,0);else if(!We(n))throw new RangeError(S("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new xr(t)}else if(be(arguments[0])){if(!ue((t=arguments[0]).byteLength/Qe))throw new RangeError(S("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Qe,t.byteLength));t=new xr(t)}else{if(!de(arguments[0]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===rt)throw new TypeError(S("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Fe(t[Ge]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Fe((t=t[Ge]()).next))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=De(t))instanceof Error)throw t;t=new xr(t)}else{if(!be(t=arguments[0]))throw new TypeError(S("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ye(r=arguments[1]))throw new TypeError(S("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ue(r/Qe))throw new RangeError(S("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Qe,r));if(2===e){if(!ue((n=t.byteLength-r)/Qe))throw new RangeError(S("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Qe,n));t=new xr(t,r)}else{if(!ye(n=arguments[2]))throw new TypeError(S("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Qe>t.byteLength-r)throw new RangeError(S("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Qe));t=new xr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function at(r){return r.re}function ut(r){return r.im}function ft(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ge(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ye(n))return new TypeError(S("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(at(n),ut(n))}return e}function lt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ge(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ye(o))return new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(at(o),ut(o))}return n}function ct(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ye(n=e[i]))return null;r[o]=at(n),r[o+1]=ut(n),o+=2}return r}Y(ot,"BYTES_PER_ELEMENT",Qe),Y(ot,"name","Complex64Array"),Y(ot,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Fe(n=arguments[1]))throw new TypeError(S("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(et(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,r.get(s),s)))o[y]=Xe(c),o[y+1]=Je(c);else{if(!(ge(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(me(r)){if(n){for(f=r.length,u=r.get&&r.set?Q("default"):q("default"),s=0;s<f;s++)if(!Ye(u(r,s))){l=!0;break}if(l){if(!We(f))throw new RangeError(S("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,u(r,s),s)))o[y]=Xe(c),o[y+1]=Je(c);else{if(!(ge(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(de(r)&&rt&&Fe(r[Ge])){if(!Fe((o=r[Ge]()).next))throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?He(o,n,e):De(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(ot,"of",(function(){var r,e;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(ot.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(ot.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(ot.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ot.prototype,"BYTES_PER_ELEMENT",ot.BYTES_PER_ELEMENT),Y(ot.prototype,"copyWithin",(function(r,e){if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(ot.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;return o+=1,i||o>=n?{done:!0}:(e=new Ne(r[a+=2],r[a+1]),{value:[o,e],done:!1})})),Y(t,"return",(function(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}})),Ge&&Y(t,Ge,(function(){return e.entries()})),t})),Y(ot.prototype,"get",(function(r){var e;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(r))throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ne((e=this._buffer)[r*=2],e[r+1])})),Ze(ot.prototype,"length",(function(){return this._length})),Y(ot.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ye(t=arguments[1]))throw new TypeError(S("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ye(r)){if(t>=this._length)throw new RangeError(S("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Xe(r),void(n[t+1]=Je(r))}if(et(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Qe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new xr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!me(r))throw new TypeError(S("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ye(r[f])){o=!0;break}if(o){if(!We(a))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Qe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new xr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Xe(u),n[t+1]=Je(u),t+=2}}));var st=2*vr.BYTES_PER_ELEMENT,yt=$e();function ht(r){return r instanceof wt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function pt(r){return r===wt||"Complex64Array"===r.name}function gt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===st/2}function mt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===st}function wt(){var r,e,t,n;if(e=arguments.length,!(this instanceof wt))return 0===e?new wt:1===e?new wt(arguments[0]):2===e?new wt(arguments[0],arguments[1]):new wt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new vr(0);else if(1===e)if(ye(arguments[0]))t=new vr(2*arguments[0]);else if(me(arguments[0]))if((n=(t=arguments[0]).length)&&cr(t)&&Ye(t[0])){if(null===(t=ct(new vr(2*n),t))){if(!We(n))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(arguments[0])}}else{if(gt(t))t=ze(t,0);else if(mt(t))t=qe(t,0);else if(!We(n))throw new RangeError(S("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new vr(t)}else if(be(arguments[0])){if(!ue((t=arguments[0]).byteLength/st))throw new RangeError(S("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",st,t.byteLength));t=new vr(t)}else{if(!de(arguments[0]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===yt)throw new TypeError(S("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Fe(t[Ge]))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Fe((t=t[Ge]()).next))throw new TypeError(S("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ft(t))instanceof Error)throw t;t=new vr(t)}else{if(!be(t=arguments[0]))throw new TypeError(S("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ye(r=arguments[1]))throw new TypeError(S("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ue(r/st))throw new RangeError(S("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",st,r));if(2===e){if(!ue((n=t.byteLength-r)/st))throw new RangeError(S("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",st,n));t=new vr(t,r)}else{if(!ye(n=arguments[2]))throw new TypeError(S("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*st>t.byteLength-r)throw new RangeError(S("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*st));t=new vr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(wt,"BYTES_PER_ELEMENT",st),Y(wt,"name","Complex128Array"),Y(wt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Fe(n=arguments[1]))throw new TypeError(S("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ht(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,r.get(s),s)))o[y]=at(c),o[y+1]=ut(c);else{if(!(ge(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(me(r)){if(n){for(f=r.length,u=r.get&&r.set?Q("default"):q("default"),s=0;s<f;s++)if(!Ye(u(r,s))){l=!0;break}if(l){if(!We(f))throw new RangeError(S("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ye(c=n.call(e,u(r,s),s)))o[y]=at(c),o[y+1]=ut(c);else{if(!(ge(c)&&c.length>=2))throw new TypeError(S("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(de(r)&&yt&&Fe(r[Ge])){if(!Fe((o=r[Ge]()).next))throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?lt(o,n,e):ft(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(S("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(wt,"of",(function(){var r,e;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ze(wt.prototype,"buffer",(function(){return this._buffer.buffer})),Ze(wt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ze(wt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(wt.prototype,"BYTES_PER_ELEMENT",wt.BYTES_PER_ELEMENT),Y(wt.prototype,"copyWithin",(function(r,e){if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(wt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;return o+=1,i||o>=n?{done:!0}:(e=new Oe(r[a+=2],r[a+1]),{value:[o,e],done:!1})})),Y(t,"return",(function(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}})),Ge&&Y(t,Ge,(function(){return e.entries()})),t})),Y(wt.prototype,"get",(function(r){var e;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(r))throw new TypeError(S("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Oe((e=this._buffer)[r*=2],e[r+1])})),Ze(wt.prototype,"length",(function(){return this._length})),Y(wt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ye(t=arguments[1]))throw new TypeError(S("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ye(r)){if(t>=this._length)throw new RangeError(S("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=at(r),void(n[t+1]=ut(r))}if(ht(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!me(r))throw new TypeError(S("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ye(r[f])){o=!0;break}if(o){if(!We(a))throw new RangeError(S("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*st,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new vr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=at(u),n[t+1]=ut(u),t+=2}}));var bt=[vr,xr,Ir,Lr,Yr,Mr,Qr,Zr,qr,ot,wt],dt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],vt=dt.length;function Et(r){var e,t=function(r){var e;if(cr(r))return"generic";if(yr(r))return null;for(e=0;e<vt;e++)if(r instanceof bt[e])return dt[e];return mr[gr(r)]||null}(r);return typeof(e=r).get===J&&typeof e.set===J?{accessorProtocol:!0,accessors:[Q(t),er(t)]}:{accessorProtocol:!1,accessors:[q(t),H(t)]}}function At(r){var e=Et(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}function Tt(r,e,t,n){var i,o,a,u,f,l,c,s;for(i=e.data,a=e.accessors[0],o=e.accessors[1],c=X(r/2),l=(f=n)+(r-1)*t,s=0;s<c;s++)u=a(i,f),o(i,f,a(i,l)),o(i,l,u),f+=t,l-=t;return e}function _t(r,e,t){var n,i,o,a,u,f,l;if(r<=0)return e;if((a=At(e)).accessorProtocol)return Tt(r,a,t,i=t<0?(1-r)*t:0),a.data;if(f=X(r/2),1===t){if(o=r-1,(u=f%3)>0)for(i=0;i<u;i++)n=e[i],e[i]=e[o],e[o]=n,o-=1;if(f<3)return e;for(i=u;i<f;i+=3)n=e[i],e[i]=e[o],e[o]=n,n=e[i+1],e[i+1]=e[o-1],e[o-1]=n,n=e[i+2],e[i+2]=e[o-2],e[o-2]=n,o-=3;return e}for(o=(i=t<0?(1-r)*t:0)+(r-1)*t,l=0;l<f;l++)n=e[i],e[i]=e[o],e[o]=n,i+=t,o-=t;return e}function xt(r,e,t,n,i,o,a,u,f,l,c){var s,y,h,p,g;for(s=(p=i+1)===t,h=n[i],g=0;g<h;g++)(y=o.slice()).push(g),s?(a[f]=l.call(c,e[g],y,r),f+=u):f=xt(r,e[g],t,n,p,y,a,u,f,l,c);return f}function jt(r,e,t,n,i,o,a,u){var f=e.length;return 0===f?n:1===f?(function(r,e,t,n,i,o,a){var u;for(u=0;u<e;u++)t[i]=o.call(a,r[u],[u],r),i+=n}(r,e[0],n,i,o,a,u),n):t?(function(r,e,t,n,i,o,a,u){var f,l,c,s,y,h,p;for(xt(r,r,e,t,0,[],l=$(f=W(t)),1,0,a,u),y=G(t,c="row-major"),s=function(r){var e,t,n;for(t=r.length,e=[],n=0;n<t;n++)e.push(r[n]);return e}(t),_t(e,s,1),_t(e,y,1),p=0;p<f;p++)h=Z(s,y,0,c,p,"throw"),n[o]=l[h],o+=i}(r,f,e,n,i,o,a,u),n):(xt(r,r,f,e,0,[],n,i,o,a,u),n)}function Vt(r,e,t,n,i){return jt(r,e,t,$(W(e)),1,0,n,i)}return Y(_t,"ndarray",(function(r,e,t,n){var i,o,a,u,f,l,c;if(r<=0)return e;if((u=At(e)).accessorProtocol)return Tt(r,u,t,n),u.data;if(l=X(r/2),o=n,1===t){if(a=o+r-1,(f=l%3)>0)for(c=0;c<f;c++)i=e[o],e[o]=e[a],e[a]=i,o+=t,a-=t;if(l<3)return e;for(c=f;c<l;c+=3)i=e[o],e[o]=e[a],e[a]=i,i=e[o+1],e[o+1]=e[a-1],e[a-1]=i,i=e[o+2],e[o+2]=e[a-2],e[a-2]=i,o+=3,a-=3;return e}for(a=o+(r-1)*t,c=0;c<l;c++)i=e[o],e[o]=e[a],e[a]=i,o+=t,a-=t;return e})),Y(Vt,"assign",jt),Vt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).flattenBy=e();
//# sourceMappingURL=browser.js.map
