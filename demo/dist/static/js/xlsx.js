!function(r){var n={}
function a(e){if(n[e])return n[e].exports
var t=n[e]={i:e,l:!1,exports:{}}
return r[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=r,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var r=Object.create(null)
if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n))
return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="./",a(a.s=35)}([,,function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}e.exports=n},,function(e,M,t){"use strict";(function(e){var n=t(18),s=t(19),i=t(20)
function r(){return h.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(e,t){if(r()<t)throw new RangeError("Invalid typed array length")
return h.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=h.prototype:(null===e&&(e=new h(t)),e.length=t),e}function h(e,t,r){if(!(h.TYPED_ARRAY_SUPPORT||this instanceof h))return new h(e,t,r)
if("number"!=typeof e)return a(this,e,t,r)
if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return c(this,e)}function a(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds")
if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds")
t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n)
h.TYPED_ARRAY_SUPPORT?(e=t).__proto__=h.prototype:e=f(e,t)
return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8")
if(!h.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding')
var n=0|d(t,r),a=(e=o(e,n)).write(t,r)
a!==n&&(e=e.slice(0,a))
return e}(e,t,r):function(e,t){if(h.isBuffer(t)){var r=0|u(t.length)
return 0===(e=o(e,r)).length||t.copy(e,0,0,r),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?o(e,0):f(e,t)
if("Buffer"===t.type&&i(t.data))return f(e,t.data)}var n
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')
if(e<0)throw new RangeError('"size" argument must not be negative')}function c(e,t){if(l(t),e=o(e,t<0?0:0|u(t)),!h.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0
return e}function f(e,t){var r=t.length<0?0:0|u(t.length)
e=o(e,r)
for(var n=0;n<r;n+=1)e[n]=255&t[n]
return e}function u(e){if(e>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes")
return 0|e}function d(e,t){if(h.isBuffer(e))return e.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength
"string"!=typeof e&&(e=""+e)
var r=e.length
if(0===r)return 0
for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r
case"utf8":case"utf-8":case void 0:return P(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r
case"hex":return r>>>1
case"base64":return N(e).length
default:if(n)return P(e).length
t=(""+t).toLowerCase(),n=!0}}function p(e,t,r){var n=e[t]
e[t]=e[r],e[r]=n}function g(e,t,r,n,a){if(0===e.length)return-1
if("string"==typeof r?(n=r,r=0):2147483647<r?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=a?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(a)return-1
r=e.length-1}else if(r<0){if(!a)return-1
r=0}if("string"==typeof t&&(t=h.from(t,n)),h.isBuffer(t))return 0===t.length?-1:m(e,t,r,n,a)
if("number"==typeof t)return t&=255,h.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):m(e,[t],r,n,a)
throw new TypeError("val must be string, number or Buffer")}function m(e,t,r,n,a){var s,i=1,o=e.length,l=t.length
if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1
o/=i=2,l/=2,r/=2}function c(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(a){var f=-1
for(s=r;s<o;s++)if(c(e,s)===c(t,-1===f?0:s-f)){if(-1===f&&(f=s),s-f+1===l)return f*i}else-1!==f&&(s-=s-f),f=-1}else for(o<r+l&&(r=o-l),s=r;0<=s;s--){for(var h=!0,u=0;u<l;u++)if(c(e,s+u)!==c(t,u)){h=!1
break}if(h)return s}return-1}function b(e,t,r,n){r=Number(r)||0
var a=e.length-r
n?a<(n=Number(n))&&(n=a):n=a
var s=t.length
if(s%2!=0)throw new TypeError("Invalid hex string")
s/2<n&&(n=s/2)
for(var i=0;i<n;++i){var o=parseInt(t.substr(2*i,2),16)
if(isNaN(o))return i
e[r+i]=o}return i}function v(e,t,r,n){return L(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r))
return t}(t),e,r,n)}function w(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function C(e,t,r){r=Math.min(e.length,r)
for(var n=[],a=t;a<r;){var s,i,o,l,c=e[a],f=null,h=239<c?4:223<c?3:191<c?2:1
if(a+h<=r)switch(h){case 1:c<128&&(f=c)
break
case 2:128==(192&(s=e[a+1]))&&127<(l=(31&c)<<6|63&s)&&(f=l)
break
case 3:s=e[a+1],i=e[a+2],128==(192&s)&&128==(192&i)&&2047<(l=(15&c)<<12|(63&s)<<6|63&i)&&(l<55296||57343<l)&&(f=l)
break
case 4:s=e[a+1],i=e[a+2],o=e[a+3],128==(192&s)&&128==(192&i)&&128==(192&o)&&65535<(l=(15&c)<<18|(63&s)<<12|(63&i)<<6|63&o)&&l<1114112&&(f=l)}null===f?(f=65533,h=1):65535<f&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),a+=h}return function(e){var t=e.length
if(t<=E)return String.fromCharCode.apply(String,e)
var r="",n=0
for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=E))
return r}(n)}M.Buffer=h,M.SlowBuffer=function(e){+e!=e&&(e=0)
return h.alloc(+e)},M.INSPECT_MAX_BYTES=50,h.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1)
return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),M.kMaxLength=r(),h.poolSize=8192,h._augment=function(e){return e.__proto__=h.prototype,e},h.from=function(e,t,r){return a(null,e,t,r)},h.TYPED_ARRAY_SUPPORT&&(h.prototype.__proto__=Uint8Array.prototype,h.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&h[Symbol.species]===h&&Object.defineProperty(h,Symbol.species,{value:null,configurable:!0})),h.alloc=function(e,t,r){return n=null,s=t,i=r,l(a=e),a<=0?o(n,a):void 0!==s?"string"==typeof i?o(n,a).fill(s,i):o(n,a).fill(s):o(n,a)
var n,a,s,i},h.allocUnsafe=function(e){return c(null,e)},h.allocUnsafeSlow=function(e){return c(null,e)},h.isBuffer=function(e){return!(null==e||!e._isBuffer)},h.compare=function(e,t){if(!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
for(var r=e.length,n=t.length,a=0,s=Math.min(r,n);a<s;++a)if(e[a]!==t[a]){r=e[a],n=t[a]
break}return r<n?-1:n<r?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},h.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return h.alloc(0)
var r
if(void 0===t)for(r=t=0;r<e.length;++r)t+=e[r].length
var n=h.allocUnsafe(t),a=0
for(r=0;r<e.length;++r){var s=e[r]
if(!h.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers')
s.copy(n,a),a+=s.length}return n},h.byteLength=d,h.prototype._isBuffer=!0,h.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;t<e;t+=2)p(this,t,t+1)
return this},h.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;t<e;t+=4)p(this,t,t+3),p(this,t+1,t+2)
return this},h.prototype.swap64=function(){var e=this.length
if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var t=0;t<e;t+=8)p(this,t,t+7),p(this,t+1,t+6),p(this,t+2,t+5),p(this,t+3,t+4)
return this},h.prototype.toString=function(){var e=0|this.length
return 0===e?"":0===arguments.length?C(this,0,e):function(e,t,r){var n=!1
if((void 0===t||t<0)&&(t=0),t>this.length)return""
if((void 0===r||r>this.length)&&(r=this.length),r<=0)return""
if((r>>>=0)<=(t>>>=0))return""
for(e||(e="utf8");;)switch(e){case"hex":return _(this,t,r)
case"utf8":case"utf-8":return C(this,t,r)
case"ascii":return S(this,t,r)
case"latin1":case"binary":return A(this,t,r)
case"base64":return w(this,t,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r)
default:if(n)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase(),n=!0}}.apply(this,arguments)},h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){var e="",t=M.INSPECT_MAX_BYTES
return 0<this.length&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},h.prototype.compare=function(e,t,r,n,a){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer")
if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===a&&(a=this.length),t<0||r>e.length||n<0||a>this.length)throw new RangeError("out of range index")
if(a<=n&&r<=t)return 0
if(a<=n)return-1
if(r<=t)return 1
if(this===e)return 0
for(var s=(a>>>=0)-(n>>>=0),i=(r>>>=0)-(t>>>=0),o=Math.min(s,i),l=this.slice(n,a),c=e.slice(t,r),f=0;f<o;++f)if(l[f]!==c[f]){s=l[f],i=c[f]
break}return s<i?-1:i<s?1:0},h.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},h.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},h.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},h.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0
else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0
else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var a=this.length-t
if((void 0===r||a<r)&&(r=a),0<e.length&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
n||(n="utf8")
for(var s,i,o,l,c,f,h,u,d,p=!1;;)switch(n){case"hex":return b(this,e,t,r)
case"utf8":case"utf-8":return u=t,d=r,L(P(e,(h=this).length-u),h,u,d)
case"ascii":return v(this,e,t,r)
case"latin1":case"binary":return v(this,e,t,r)
case"base64":return l=this,c=t,f=r,L(N(e),l,c,f)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return i=t,o=r,L(function(e,t){for(var r,n,a,s=[],i=0;i<e.length&&!((t-=2)<0);++i)r=e.charCodeAt(i),n=r>>8,a=r%256,s.push(a),s.push(n)
return s}(e,(s=this).length-i),s,i,o)
default:if(p)throw new TypeError("Unknown encoding: "+n)
n=(""+n).toLowerCase(),p=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var E=4096
function S(e,t,r){var n=""
r=Math.min(e.length,r)
for(var a=t;a<r;++a)n+=String.fromCharCode(127&e[a])
return n}function A(e,t,r){var n=""
r=Math.min(e.length,r)
for(var a=t;a<r;++a)n+=String.fromCharCode(e[a])
return n}function _(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||n<r)&&(r=n)
for(var a="",s=t;s<r;++s)a+=F(e[s])
return a}function B(e,t,r){for(var n=e.slice(t,r),a="",s=0;s<n.length;s+=2)a+=String.fromCharCode(n[s]+256*n[s+1])
return a}function T(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
if(r<e+t)throw new RangeError("Trying to access beyond buffer length")}function y(e,t,r,n,a,s){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(a<t||t<s)throw new RangeError('"value" argument is out of bounds')
if(r+n>e.length)throw new RangeError("Index out of range")}function k(e,t,r,n){t<0&&(t=65535+t+1)
for(var a=0,s=Math.min(e.length-r,2);a<s;++a)e[r+a]=(t&255<<8*(n?a:1-a))>>>8*(n?a:1-a)}function x(e,t,r,n){t<0&&(t=4294967295+t+1)
for(var a=0,s=Math.min(e.length-r,4);a<s;++a)e[r+a]=t>>>8*(n?a:3-a)&255}function I(e,t,r,n,a,s){if(r+n>e.length)throw new RangeError("Index out of range")
if(r<0)throw new RangeError("Index out of range")}function R(e,t,r,n,a){return a||I(e,0,r,4),s.write(e,t,r,n,23,4),r+4}function O(e,t,r,n,a){return a||I(e,0,r,8),s.write(e,t,r,n,52,8),r+8}h.prototype.slice=function(e,t){var r,n=this.length
if((e=~~e)<0?(e+=n)<0&&(e=0):n<e&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):n<t&&(t=n),t<e&&(t=e),h.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=h.prototype
else{var a=t-e
r=new h(a,void 0)
for(var s=0;s<a;++s)r[s]=this[s+e]}return r},h.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length)
for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a
return n},h.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length)
for(var n=this[e+--t],a=1;0<t&&(a*=256);)n+=this[e+--t]*a
return n},h.prototype.readUInt8=function(e,t){return t||T(e,1,this.length),this[e]},h.prototype.readUInt16LE=function(e,t){return t||T(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUInt16BE=function(e,t){return t||T(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUInt32LE=function(e,t){return t||T(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUInt32BE=function(e,t){return t||T(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length)
for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a
return(a*=128)<=n&&(n-=Math.pow(2,8*t)),n},h.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||T(e,t,this.length)
for(var n=t,a=1,s=this[e+--n];0<n&&(a*=256);)s+=this[e+--n]*a
return(a*=128)<=s&&(s-=Math.pow(2,8*t)),s},h.prototype.readInt8=function(e,t){return t||T(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){t||T(e,2,this.length)
var r=this[e]|this[e+1]<<8
return 32768&r?4294901760|r:r},h.prototype.readInt16BE=function(e,t){t||T(e,2,this.length)
var r=this[e+1]|this[e]<<8
return 32768&r?4294901760|r:r},h.prototype.readInt32LE=function(e,t){return t||T(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return t||T(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readFloatLE=function(e,t){return t||T(e,4,this.length),s.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return t||T(e,4,this.length),s.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return t||T(e,8,this.length),s.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return t||T(e,8,this.length),s.read(this,e,!1,52,8)},h.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||y(this,e,t,r,Math.pow(2,8*r)-1,0)
var a=1,s=0
for(this[t]=255&e;++s<r&&(a*=256);)this[t+s]=e/a&255
return t+r},h.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||y(this,e,t,r,Math.pow(2,8*r)-1,0)
var a=r-1,s=1
for(this[t+a]=255&e;0<=--a&&(s*=256);)this[t+a]=e/s&255
return t+r},h.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,1,255,0),h.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},h.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,2,65535,0),h.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):k(this,e,t,!0),t+2},h.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,2,65535,0),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):k(this,e,t,!1),t+2},h.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,4,4294967295,0),h.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):x(this,e,t,!0),t+4},h.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,4,4294967295,0),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):x(this,e,t,!1),t+4},h.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var a=Math.pow(2,8*r-1)
y(this,e,t,r,a-1,-a)}var s=0,i=1,o=0
for(this[t]=255&e;++s<r&&(i*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/i>>0)-o&255
return t+r},h.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var a=Math.pow(2,8*r-1)
y(this,e,t,r,a-1,-a)}var s=r-1,i=1,o=0
for(this[t+s]=255&e;0<=--s&&(i*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/i>>0)-o&255
return t+r},h.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,1,127,-128),h.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,2,32767,-32768),h.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):k(this,e,t,!0),t+2},h.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,2,32767,-32768),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):k(this,e,t,!1),t+2},h.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,4,2147483647,-2147483648),h.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):x(this,e,t,!0),t+4},h.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||y(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),h.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):x(this,e,t,!1),t+4},h.prototype.writeFloatLE=function(e,t,r){return R(this,e,t,!0,r)},h.prototype.writeFloatBE=function(e,t,r){return R(this,e,t,!1,r)},h.prototype.writeDoubleLE=function(e,t,r){return O(this,e,t,!0,r)},h.prototype.writeDoubleBE=function(e,t,r){return O(this,e,t,!1,r)},h.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),0<n&&n<r&&(n=r),n===r)return 0
if(0===e.length||0===this.length)return 0
if(t<0)throw new RangeError("targetStart out of bounds")
if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds")
if(n<0)throw new RangeError("sourceEnd out of bounds")
n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r)
var a,s=n-r
if(this===e&&r<t&&t<n)for(a=s-1;0<=a;--a)e[a+t]=this[a+r]
else if(s<1e3||!h.TYPED_ARRAY_SUPPORT)for(a=0;a<s;++a)e[a+t]=this[a+r]
else Uint8Array.prototype.set.call(e,this.subarray(r,r+s),t)
return s},h.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var a=e.charCodeAt(0)
a<256&&(e=a)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string")
if("string"==typeof n&&!h.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255)
if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index")
if(r<=t)return this
var s
if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(s=t;s<r;++s)this[s]=e
else{var i=h.isBuffer(e)?e:P(new h(e,n).toString()),o=i.length
for(s=0;s<r-t;++s)this[s+t]=i[s%o]}return this}
var D=/[^+\/0-9A-Za-z-_]/g
function F(e){return e<16?"0"+e.toString(16):e.toString(16)}function P(e,t){var r
t=t||1/0
for(var n=e.length,a=null,s=[],i=0;i<n;++i){if(55295<(r=e.charCodeAt(i))&&r<57344){if(!a){if(56319<r){-1<(t-=3)&&s.push(239,191,189)
continue}if(i+1===n){-1<(t-=3)&&s.push(239,191,189)
continue}a=r
continue}if(r<56320){-1<(t-=3)&&s.push(239,191,189),a=r
continue}r=65536+(a-55296<<10|r-56320)}else a&&-1<(t-=3)&&s.push(239,191,189)
if(a=null,r<128){if((t-=1)<0)break
s.push(r)}else if(r<2048){if((t-=2)<0)break
s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break
s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point")
if((t-=4)<0)break
s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function N(e){return n.toByteArray(function(e){var t
if((e=(t=e,t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")).replace(D,"")).length<2)return""
for(;e.length%4!=0;)e+="="
return e}(e))}function L(e,t,r,n){for(var a=0;a<n&&!(a+r>=t.length||a>=e.length);++a)t[a+r]=e[a]
return a}}).call(this,t(2))},function(df,e,pf){(function(cf,ff,hf){function uf(e){return(uf="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(n){n.version="0.14.1"
var u=1200,a=1252
"undefined"==typeof cptable&&(void 0!==cf?cf.cptable=pf(8):"undefined"!=typeof window&&(window.cptable=pf(8)))
for(var t=[874,932,936,949,950],e=0;e<=8;++e)t.push(1250+e)
var f={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},h=function(e){-1!=t.indexOf(e)&&(a=f[0]=e)},he=function(e){h(u=e)}
function d(){he(1200),h(1252)}function re(e){for(var t=[],r=0,n=e.length;r<n;++r)t[r]=e.charCodeAt(r)
return t}var ne=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1)
return 255==t&&254==r?function(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r)+(e.charCodeAt(2*r+1)<<8))
return t.join("")}(e.slice(2)):254==t&&255==r?function(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r+1)+(e.charCodeAt(2*r)<<8))
return t.join("")}(e.slice(2)):65279==t?e.slice(1):e},p=function(e){return String.fromCharCode(e)}
"undefined"!=typeof cptable&&(he=function(e){u=e},ne=function(e){return 255===e.charCodeAt(0)&&254===e.charCodeAt(1)?cptable.utils.decode(1200,re(e.slice(2))):e},p=function(e){return 1200===u?String.fromCharCode(e):cptable.utils.decode(u,[255&e,e>>8])[0]})
var g,ue=null,q=(g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",{encode:function(e){for(var t="",r=0,n=0,a=0,s=0,i=0,o=0,l=0,c=0;c<e.length;)s=(r=e.charCodeAt(c++))>>2,i=(3&r)<<4|(n=e.charCodeAt(c++))>>4,o=(15&n)<<2|(a=e.charCodeAt(c++))>>6,l=63&a,isNaN(n)?o=l=64:isNaN(a)&&(l=64),t+=g.charAt(s)+g.charAt(i)+g.charAt(o)+g.charAt(l)
return t},decode:function(e){var t="",r=0,n=0,a=0,s=0,i=0,o=0
e=e.replace(/[^\w\+\/\=]/g,"")
for(var l=0;l<e.length;)r=g.indexOf(e.charAt(l++))<<2|(s=g.indexOf(e.charAt(l++)))>>4,t+=String.fromCharCode(r),n=(15&s)<<4|(i=g.indexOf(e.charAt(l++)))>>2,64!==i&&(t+=String.fromCharCode(n)),a=(3&i)<<6|(o=g.indexOf(e.charAt(l++))),64!==o&&(t+=String.fromCharCode(a))
return t}}),ee=void 0!==ff&&void 0!==hf&&void 0!==hf.versions&&!!hf.versions.node,s=function(){}
if(void 0!==ff){var r=!ff.from
if(!r)try{ff.from("foo","utf8")}catch(e){r=!0}s=r?function(e,t){return t?new ff(e,t):new ff(e)}:ff.from.bind(ff),ff.alloc||(ff.alloc=function(e){return new ff(e)}),ff.allocUnsafe||(ff.allocUnsafe=function(e){return new ff(e)})}function te(e){return ee?ff.alloc(e):new Array(e)}function ae(e){return ee?ff.allocUnsafe(e):new Array(e)}var se=function(e){return ee?s(e,"binary"):e.split("").map(function(e){return 255&e.charCodeAt(0)})}
function i(e){if("undefined"==typeof ArrayBuffer)return se(e)
for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!=e.length;++n)r[n]=255&e.charCodeAt(n)
return t}function l(e){if(Array.isArray(e))return e.map(Tl).join("")
for(var t=[],r=0;r<e.length;++r)t[r]=Tl(e[r])
return t.join("")}function m(e){if("undefined"==typeof ArrayBuffer)throw new Error("Unsupported")
if(e instanceof ArrayBuffer)return m(new Uint8Array(e))
for(var t=new Array(e.length),r=0;r<e.length;++r)t[r]=e[r]
return t}var ie=function(e){return[].concat.apply([],e)},oe=/\u0000/g,le=/[\u0001-\u0006]/g,de={},ce=function(e){function U(e){for(var t="",r=e.length-1;0<=r;)t+=e.charAt(r--)
return t}function H(e,t){for(var r="";r.length<t;)r+=e
return r}function W(e,t){var r=""+e
return t<=r.length?r:H("0",t-r.length)+r}function V(e,t){var r=""+e
return t<=r.length?r:H(" ",t-r.length)+r}function z(e,t){var r=""+e
return t<=r.length?r:r+H(" ",t-r.length)}e.version="0.10.2"
var l=Math.pow(2,32)
function X(e,t){if(l<e||e<-l)return r=e,n=t,a=""+Math.round(r),n<=a.length?a:H("0",n-a.length)+a
var r,n,a,s,i,o=Math.round(e)
return(s=t)<=(i=""+o).length?i:H("0",s-i.length)+i}function y(e,t){return t=t||0,e.length>=7+t&&103==(32|e.charCodeAt(t))&&101==(32|e.charCodeAt(t+1))&&110==(32|e.charCodeAt(t+2))&&101==(32|e.charCodeAt(t+3))&&114==(32|e.charCodeAt(t+4))&&97==(32|e.charCodeAt(t+5))&&108==(32|e.charCodeAt(t+6))}var f=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],h=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]]
function t(e){e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e[65535]="General"}var s={}
function G(e,t,r){for(var n=e<0?-1:1,a=e*n,s=0,i=1,o=0,l=1,c=0,f=0,h=Math.floor(a);c<t&&(o=(h=Math.floor(a))*i+s,f=h*c+l,!(a-h<5e-8));)a=1/(a-h),s=i,i=o,l=c,c=f
if(t<f&&(o=t<c?(f=l,s):(f=c,i)),!r)return[0,n*o,f]
var u=Math.floor(n*o/f)
return[u,n*o-u*f,f]}function k(e,t,r){if(2958465<e||e<0)return null
var n=0|e,a=Math.floor(86400*(e-n)),s=0,i=[],o={D:n,T:a,u:86400*(e-n)-a,y:0,m:0,d:0,H:0,M:0,S:0,q:0}
if(Math.abs(o.u)<1e-6&&(o.u=0),t&&t.date1904&&(n+=1462),.9999<o.u&&(o.u=0,86400==++a&&(o.T=a=0,++n,++o.D)),60===n)i=r?[1317,10,29]:[1900,2,29],s=3
else if(0===n)i=r?[1317,8,29]:[1900,1,0],s=6
else{60<n&&--n
var l=new Date(1900,0,1)
l.setDate(l.getDate()+n-1),i=[l.getFullYear(),l.getMonth()+1,l.getDate()],s=l.getDay(),n<60&&(s=(s+6)%7),r&&(s=0)}return o.y=i[0],o.m=i[1],o.d=i[2],o.S=a%60,a=Math.floor(a/60),o.M=a%60,a=Math.floor(a/60),o.H=a,o.q=s,o}t(s),e.parse_date_code=k
var n=new Date(1899,11,31,0,0,0),a=n.getTime(),i=new Date(1900,2,1,0,0,0)
function o(e,t){var r=e.getTime()
return t?r-=1262304e5:i<=e&&(r+=864e5),(r-(a+6e4*(e.getTimezoneOffset()-n.getTimezoneOffset())))/864e5}function r(e){return e.toString(10)}e._general_int=r
var c=function(){var o=/\.(\d*[1-9])0+$/,t=/\.0*$/,l=/\.(\d*[1-9])0+/,c=/\.0*[Ee]/,f=/(E[+-])(\d)$/
function h(e){return-1<e.indexOf(".")?e.replace(t,"").replace(o,".$1"):e}return function(e){var t,r,n,a,s,i=Math.floor(Math.log(Math.abs(e))*Math.LOG10E)
return h(function(e){for(var t=0;t!=e.length;++t)if(101==(32|e.charCodeAt(t)))return e.replace(l,".$1").replace(c,"E").replace("e","E").replace(f,"$10$2")
return e}(-4<=i&&i<=-1?e.toPrecision(10+i):Math.abs(i)<=9?(a=(n=e)<0?12:11,(s=h(n.toFixed(12))).length<=a?s:(s=n.toPrecision(10)).length<=a?s:n.toExponential(5)):10===i?e.toFixed(10).substr(0,12):((r=(t=e).toFixed(11).replace(o,".$1")).length>(t<0?12:11)&&(r=t.toPrecision(6)),r)))}}()
function x(e,t){switch(uf(e)){case"string":return e
case"boolean":return e?"TRUE":"FALSE"
case"number":return(0|e)===e?r(e):c(e)
case"undefined":return""
case"object":if(null==e)return""
if(e instanceof Date)return b(14,o(e,t&&t.date1904),t)}throw new Error("unsupported value in General format: "+e)}function I(e,t,r,n){var a,s="",i=0,o=0,l=r.y,c=0
switch(e){case 98:l=r.y+543
case 121:switch(t.length){case 1:case 2:a=l%100,c=2
break
default:a=l%1e4,c=4}break
case 109:switch(t.length){case 1:case 2:a=r.m,c=t.length
break
case 3:return h[r.m-1][1]
case 5:return h[r.m-1][0]
default:return h[r.m-1][2]}break
case 100:switch(t.length){case 1:case 2:a=r.d,c=t.length
break
case 3:return f[r.q][0]
default:return f[r.q][1]}break
case 104:switch(t.length){case 1:case 2:a=1+(r.H+11)%12,c=t.length
break
default:throw"bad hour format: "+t}break
case 72:switch(t.length){case 1:case 2:a=r.H,c=t.length
break
default:throw"bad hour format: "+t}break
case 77:switch(t.length){case 1:case 2:a=r.M,c=t.length
break
default:throw"bad minute format: "+t}break
case 115:if("s"!=t&&"ss"!=t&&".0"!=t&&".00"!=t&&".000"!=t)throw"bad second format: "+t
return 0!==r.u||"s"!=t&&"ss"!=t?(60*(o=2<=n?3===n?1e3:100:1===n?10:1)<=(i=Math.round(o*(r.S+r.u)))&&(i=0),"s"===t?0===i?"0":""+i/o:(s=W(i,2+n),"ss"===t?s.substr(0,2):"."+s.substr(2,t.length-1))):W(r.S,t.length)
case 90:switch(t){case"[h]":case"[hh]":a=24*r.D+r.H
break
case"[m]":case"[mm]":a=60*(24*r.D+r.H)+r.M
break
case"[s]":case"[ss]":a=60*(60*(24*r.D+r.H)+r.M)+Math.round(r.S+r.u)
break
default:throw"bad abstime format: "+t}c=3===t.length?1:2
break
case 101:a=l,c=1}return 0<c?W(a,c):""}function j(e){if(e.length<=3)return e
for(var t=e.length%3,r=e.substr(0,t);t!=e.length;t+=3)r+=(0<r.length?",":"")+e.substr(t,3)
return r}e._general_num=c,e._general=x
var Y=function(){var I=/%/g,R=/# (\?+)( ?)\/( ?)(\d+)/,O=/^#*0*\.([0#]+)/,D=/\).*[0#]/,F=/\(###\) ###\\?-####/
function P(e){for(var t,r="",n=0;n!=e.length;++n)switch(t=e.charCodeAt(n)){case 35:break
case 63:r+=" "
break
case 48:r+="0"
break
default:r+=String.fromCharCode(t)}return r}function N(e,t){var r=Math.pow(10,t)
return""+Math.round(e*r)/r}function L(e,t){return t<(""+Math.round((e-Math.floor(e))*Math.pow(10,t))).length?0:Math.round((e-Math.floor(e))*Math.pow(10,t))}function M(e,t,r){if(40===e.charCodeAt(0)&&!t.match(D)){var n=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"")
return 0<=r?M("n",n,r):"("+M("n",n,-r)+")"}if(44===t.charCodeAt(t.length-1))return function(e,t,r){for(var n=t.length-1;44===t.charCodeAt(n-1);)--n
return Y(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}(e,t,r)
if(-1!==t.indexOf("%"))return a=e,i=r,o=(s=t).replace(I,""),l=s.length-o.length,Y(a,o,i*Math.pow(10,2*l))+H("%",l)
var a,s,i,o,l,c
if(-1!==t.indexOf("E"))return function e(t,r){var n,a=t.indexOf("E")-t.indexOf(".")-1
if(t.match(/^#+0.0E\+0$/)){if(0==r)return"0.0E+0"
if(r<0)return"-"+e(t,-r)
var s=t.indexOf(".");-1===s&&(s=t.indexOf("E"))
var i=Math.floor(Math.log(r)*Math.LOG10E)%s
if(i<0&&(i+=s),-1===(n=(r/Math.pow(10,i)).toPrecision(a+1+(s+i)%s)).indexOf("e")){var o=Math.floor(Math.log(r)*Math.LOG10E)
for(-1===n.indexOf(".")?n=n.charAt(0)+"."+n.substr(1)+"E+"+(o-n.length+i):n+="E+"+(o-i);"0."===n.substr(0,2);)n=(n=n.charAt(0)+n.substr(2,s)+"."+n.substr(2+s)).replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.")
n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,r,n){return t+r+n.substr(0,(s+i)%s)+"."+n.substr(i)+"E"})}else n=r.toExponential(a)
return t.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+"0"+n.charAt(n.length-1)),t.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,"e")),n.replace("e","E")}(t,r)
if(36===t.charCodeAt(0))return"$"+M(e,t.substr(" "==t.charAt(1)?2:1),r)
var f,h,u,d,p,g,m,b,v,w,C,E,S,A=Math.abs(r),_=r<0?"-":""
if(t.match(/^00+$/))return _+X(A,t.length)
if(t.match(/^[#?]+$/))return"0"===(c=X(r,0))&&(c=""),c.length>t.length?c:P(t.substr(0,t.length-c.length))+c
if(f=t.match(R))return d=f,p=A,g=_,m=parseInt(d[4],10),b=Math.round(p*m),v=Math.floor(b/m),g+(0===v?"":""+v)+" "+(0==(w=b-v*(C=m))?H(" ",d[1].length+1+d[4].length):V(w,d[1].length)+d[2]+"/"+d[3]+W(C,d[4].length))
if(t.match(/^#+0+$/))return _+X(A,t.length-t.indexOf("0"))
if(f=t.match(O))return c=N(r,f[1].length).replace(/^([^\.]+)$/,"$1."+P(f[1])).replace(/\.$/,"."+P(f[1])).replace(/\.(\d*)$/,function(e,t){return"."+t+H("0",P(f[1]).length-t.length)}),-1!==t.indexOf("0.")?c:c.replace(/^0\./,".")
if(t=t.replace(/^#+([0.])/,"$1"),f=t.match(/^(0*)\.(#*)$/))return _+N(A,f[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,f[1].length?"0.":".")
if(f=t.match(/^#{1,3},##0(\.?)$/))return _+j(X(A,0))
if(f=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+M(e,t,-r):j(""+(Math.floor(r)+(E=r,(S=f[1].length)<(""+Math.round((E-Math.floor(E))*Math.pow(10,S))).length?1:0)))+"."+W(L(r,f[1].length),f[1].length)
if(f=t.match(/^#,#*,#0/))return M(e,t.replace(/^#,#*,/,""),r)
if(f=t.match(/^([0#]+)(\\?-([0#]+))+$/))return c=U(M(e,t.replace(/[\\-]/g,""),r)),h=0,U(U(t.replace(/\\/g,"")).replace(/[0#]/g,function(e){return h<c.length?c.charAt(h++):"0"===e?"0":""}))
if(t.match(F))return"("+(c=M(e,"##########",r)).substr(0,3)+") "+c.substr(3,3)+"-"+c.substr(6)
var B,T=""
if(f=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return h=Math.min(f[4].length,7),u=G(A,Math.pow(10,h)-1,!1),c=""+_," "==(T=Y("n",f[1],u[1])).charAt(T.length-1)&&(T=T.substr(0,T.length-1)+"0"),c+=T+f[2]+"/"+f[3],(T=z(u[2],h)).length<f[4].length&&(T=P(f[4].substr(f[4].length-T.length))+T),c+=T
if(f=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return h=Math.min(Math.max(f[1].length,f[4].length),7),_+((u=G(A,Math.pow(10,h)-1,!0))[0]||(u[1]?"":"0"))+" "+(u[1]?V(u[1],h)+f[2]+"/"+f[3]+z(u[2],h):H(" ",2*h+1+f[2].length+f[3].length))
if(f=t.match(/^[#0?]+$/))return c=X(r,0),t.length<=c.length?c:P(t.substr(0,t.length-c.length))+c
if(f=t.match(/^([#0?]+)\.([#0]+)$/)){c=""+r.toFixed(Math.min(f[2].length,10)).replace(/([^0])0+$/,"$1"),h=c.indexOf(".")
var y=t.indexOf(".")-h,k=t.length-c.length-y
return P(t.substr(0,y)+c+t.substr(t.length-k))}if(f=t.match(/^00,000\.([#0]*0)$/))return h=L(r,f[1].length),r<0?"-"+M(e,t,-r):j((B=r,B<2147483647&&-2147483648<B?""+(0<=B?0|B:B-1|0):""+Math.floor(B))).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?W(0,3-e.length):"")+e})+"."+W(h,f[1].length)
switch(t){case"###,##0.00":return M(e,"#,##0.00",r)
case"###,###":case"##,###":case"#,###":var x=j(X(A,0))
return"0"!==x?_+x:""
case"###,###.00":return M(e,"###,##0.00",r).replace(/^0\./,".")
case"#,###.00":return M(e,"#,##0.00",r).replace(/^0\./,".")}throw new Error("unsupported format |"+t+"|")}function E(e,t,r){if(40===e.charCodeAt(0)&&!t.match(D)){var n=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"")
return 0<=r?E("n",n,r):"("+E("n",n,-r)+")"}if(44===t.charCodeAt(t.length-1))return function(e,t,r){for(var n=t.length-1;44===t.charCodeAt(n-1);)--n
return Y(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}(e,t,r)
if(-1!==t.indexOf("%"))return a=e,i=r,o=(s=t).replace(I,""),l=s.length-o.length,Y(a,o,i*Math.pow(10,2*l))+H("%",l)
var a,s,i,o,l,c
if(-1!==t.indexOf("E"))return function e(t,r){var n,a=t.indexOf("E")-t.indexOf(".")-1
if(t.match(/^#+0.0E\+0$/)){if(0==r)return"0.0E+0"
if(r<0)return"-"+e(t,-r)
var s=t.indexOf(".");-1===s&&(s=t.indexOf("E"))
var i=Math.floor(Math.log(r)*Math.LOG10E)%s
if(i<0&&(i+=s),!(n=(r/Math.pow(10,i)).toPrecision(a+1+(s+i)%s)).match(/[Ee]/)){var o=Math.floor(Math.log(r)*Math.LOG10E);-1===n.indexOf(".")?n=n.charAt(0)+"."+n.substr(1)+"E+"+(o-n.length+i):n+="E+"+(o-i),n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,r,n){return t+r+n.substr(0,(s+i)%s)+"."+n.substr(i)+"E"})}else n=r.toExponential(a)
return t.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+"0"+n.charAt(n.length-1)),t.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,"e")),n.replace("e","E")}(t,r)
if(36===t.charCodeAt(0))return"$"+E(e,t.substr(" "==t.charAt(1)?2:1),r)
var f,h,u,d,p,g=Math.abs(r),m=r<0?"-":""
if(t.match(/^00+$/))return m+W(g,t.length)
if(t.match(/^[#?]+$/))return c=""+r,0===r&&(c=""),c.length>t.length?c:P(t.substr(0,t.length-c.length))+c
if(f=t.match(R))return m+(0===(p=g)?"":""+p)+H(" ",(d=f)[1].length+2+d[4].length)
if(t.match(/^#+0+$/))return m+W(g,t.length-t.indexOf("0"))
if(f=t.match(O))return c=(c=(""+r).replace(/^([^\.]+)$/,"$1."+P(f[1])).replace(/\.$/,"."+P(f[1]))).replace(/\.(\d*)$/,function(e,t){return"."+t+H("0",P(f[1]).length-t.length)}),-1!==t.indexOf("0.")?c:c.replace(/^0\./,".")
if(t=t.replace(/^#+([0.])/,"$1"),f=t.match(/^(0*)\.(#*)$/))return m+(""+g).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,f[1].length?"0.":".")
if(f=t.match(/^#{1,3},##0(\.?)$/))return m+j(""+g)
if(f=t.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+E(e,t,-r):j(""+r)+"."+H("0",f[1].length)
if(f=t.match(/^#,#*,#0/))return E(e,t.replace(/^#,#*,/,""),r)
if(f=t.match(/^([0#]+)(\\?-([0#]+))+$/))return c=U(E(e,t.replace(/[\\-]/g,""),r)),h=0,U(U(t.replace(/\\/g,"")).replace(/[0#]/g,function(e){return h<c.length?c.charAt(h++):"0"===e?"0":""}))
if(t.match(F))return"("+(c=E(e,"##########",r)).substr(0,3)+") "+c.substr(3,3)+"-"+c.substr(6)
var b=""
if(f=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return h=Math.min(f[4].length,7),u=G(g,Math.pow(10,h)-1,!1),c=""+m," "==(b=Y("n",f[1],u[1])).charAt(b.length-1)&&(b=b.substr(0,b.length-1)+"0"),c+=b+f[2]+"/"+f[3],(b=z(u[2],h)).length<f[4].length&&(b=P(f[4].substr(f[4].length-b.length))+b),c+=b
if(f=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return h=Math.min(Math.max(f[1].length,f[4].length),7),m+((u=G(g,Math.pow(10,h)-1,!0))[0]||(u[1]?"":"0"))+" "+(u[1]?V(u[1],h)+f[2]+"/"+f[3]+z(u[2],h):H(" ",2*h+1+f[2].length+f[3].length))
if(f=t.match(/^[#0?]+$/))return c=""+r,t.length<=c.length?c:P(t.substr(0,t.length-c.length))+c
if(f=t.match(/^([#0]+)\.([#0]+)$/)){c=""+r.toFixed(Math.min(f[2].length,10)).replace(/([^0])0+$/,"$1"),h=c.indexOf(".")
var v=t.indexOf(".")-h,w=t.length-c.length-v
return P(t.substr(0,v)+c+t.substr(t.length-w))}if(f=t.match(/^00,000\.([#0]*0)$/))return r<0?"-"+E(e,t,-r):j(""+r).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?W(0,3-e.length):"")+e})+"."+W(0,f[1].length)
switch(t){case"###,###":case"##,###":case"#,###":var C=j(""+g)
return"0"!==C?m+C:""
default:if(t.match(/\.[0#?]*$/))return E(e,t.slice(0,t.lastIndexOf(".")),r)+P(t.slice(t.lastIndexOf(".")))}throw new Error("unsupported format |"+t+"|")}return function(e,t,r){return(0|r)===r?E(e,t,r):M(e,t,r)}}()
function u(e){for(var t=[],r=!1,n=0,a=0;n<e.length;++n)switch(e.charCodeAt(n)){case 34:r=!r
break
case 95:case 42:case 92:++n
break
case 59:t[t.length]=e.substr(a,n-a),a=n+1}if(t[t.length]=e.substr(a),!0===r)throw new Error("Format |"+e+"| unterminated string ")
return t}e._split=u
var R=/\[[HhMmSs]*\]/
function O(e){for(var t=0,r="",n="";t<e.length;)switch(r=e.charAt(t)){case"G":y(e,t)&&(t+=6),t++
break
case'"':for(;34!==e.charCodeAt(++t)&&t<e.length;)++t;++t
break
case"\\":case"_":t+=2
break
case"@":++t
break
case"B":case"b":if("1"===e.charAt(t+1)||"2"===e.charAt(t+1))return!0
case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0
case"A":case"a":if("A/P"===e.substr(t,3).toUpperCase())return!0
if("AM/PM"===e.substr(t,5).toUpperCase())return!0;++t
break
case"[":for(n=r;"]"!==e.charAt(t++)&&t<e.length;)n+=e.charAt(t)
if(n.match(R))return!0
break
case".":case"0":case"#":for(;t<e.length&&(-1<"0#?.,E+-%".indexOf(r=e.charAt(++t))||"\\"==r&&"-"==e.charAt(t+1)&&-1<"0#".indexOf(e.charAt(t+2))););break
case"?":for(;e.charAt(++t)===r;);break
case"*":++t," "!=e.charAt(t)&&"*"!=e.charAt(t)||++t
break
case"(":case")":++t
break
case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;t<e.length&&-1<"0123456789".indexOf(e.charAt(++t)););break
case" ":default:++t}return!1}function d(e,t,r,n){for(var a,s,i,o=[],l="",c=0,f="",h="t",u="H";c<e.length;)switch(f=e.charAt(c)){case"G":if(!y(e,c))throw new Error("unrecognized character "+f+" in "+e)
o[o.length]={t:"G",v:"General"},c+=7
break
case'"':for(l="";34!==(i=e.charCodeAt(++c))&&c<e.length;)l+=String.fromCharCode(i)
o[o.length]={t:"t",v:l},++c
break
case"\\":var d=e.charAt(++c),p="("===d||")"===d?d:"t"
o[o.length]={t:p,v:d},++c
break
case"_":o[o.length]={t:"t",v:" "},c+=2
break
case"@":o[o.length]={t:"T",v:t},++c
break
case"B":case"b":if("1"===e.charAt(c+1)||"2"===e.charAt(c+1)){if(null==a&&null==(a=k(t,r,"2"===e.charAt(c+1))))return""
o[o.length]={t:"X",v:e.substr(c,2)},h=f,c+=2
break}case"M":case"D":case"Y":case"H":case"S":case"E":f=f.toLowerCase()
case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0)return""
if(null==a&&null==(a=k(t,r)))return""
for(l=f;++c<e.length&&e.charAt(c).toLowerCase()===f;)l+=f
"m"===f&&"h"===h.toLowerCase()&&(f="M"),"h"===f&&(f=u),o[o.length]={t:f,v:l},h=f
break
case"A":case"a":var g={t:f,v:f}
if(null==a&&(a=k(t,r)),"A/P"===e.substr(c,3).toUpperCase()?(null!=a&&(g.v=12<=a.H?"P":"A"),g.t="T",u="h",c+=3):"AM/PM"===e.substr(c,5).toUpperCase()?(null!=a&&(g.v=12<=a.H?"PM":"AM"),g.t="T",c+=5,u="h"):(g.t="t",++c),null==a&&"T"===g.t)return""
o[o.length]=g,h=f
break
case"[":for(l=f;"]"!==e.charAt(c++)&&c<e.length;)l+=e.charAt(c)
if("]"!==l.slice(-1))throw'unterminated "[" block: |'+l+"|"
if(l.match(R)){if(null==a&&null==(a=k(t,r)))return""
o[o.length]={t:"Z",v:l.toLowerCase()},h=l.charAt(1)}else-1<l.indexOf("$")&&(l=(l.match(/\$([^-\[\]]*)/)||[])[1]||"$",O(e)||(o[o.length]={t:"t",v:l}))
break
case".":if(null!=a){for(l=f;++c<e.length&&"0"===(f=e.charAt(c));)l+=f
o[o.length]={t:"s",v:l}
break}case"0":case"#":for(l=f;++c<e.length&&-1<"0#?.,E+-%".indexOf(f=e.charAt(c))||"\\"==f&&"-"==e.charAt(c+1)&&c<e.length-2&&-1<"0#".indexOf(e.charAt(c+2));)l+=f
o[o.length]={t:"n",v:l}
break
case"?":for(l=f;e.charAt(++c)===f;)l+=f
o[o.length]={t:f,v:l},h=f
break
case"*":++c," "!=e.charAt(c)&&"*"!=e.charAt(c)||++c
break
case"(":case")":o[o.length]={t:1===n?"t":f,v:f},++c
break
case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(l=f;c<e.length&&-1<"0123456789".indexOf(e.charAt(++c));)l+=e.charAt(c)
o[o.length]={t:"D",v:l}
break
case" ":o[o.length]={t:f,v:f},++c
break
default:if(-1===",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f))throw new Error("unrecognized character "+f+" in "+e)
o[o.length]={t:"t",v:f},++c}var m,b=0,v=0
for(c=o.length-1,h="t";0<=c;--c)switch(o[c].t){case"h":case"H":o[c].t=u,h="h",b<1&&(b=1)
break
case"s":(m=o[c].v.match(/\.0+$/))&&(v=Math.max(v,m[0].length-1)),b<3&&(b=3)
case"d":case"y":case"M":case"e":h=o[c].t
break
case"m":"s"===h&&(o[c].t="M",b<2&&(b=2))
break
case"X":break
case"Z":b<1&&o[c].v.match(/[Hh]/)&&(b=1),b<2&&o[c].v.match(/[Mm]/)&&(b=2),b<3&&o[c].v.match(/[Ss]/)&&(b=3)}switch(b){case 0:break
case 1:.5<=a.u&&(a.u=0,++a.S),60<=a.S&&(a.S=0,++a.M),60<=a.M&&(a.M=0,++a.H)
break
case 2:.5<=a.u&&(a.u=0,++a.S),60<=a.S&&(a.S=0,++a.M)}var w,C=""
for(c=0;c<o.length;++c)switch(o[c].t){case"t":case"T":case" ":case"D":break
case"X":o[c].v="",o[c].t=";"
break
case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":o[c].v=I(o[c].t.charCodeAt(0),o[c].v,a,v),o[c].t="t"
break
case"n":case"(":case"?":for(w=c+1;null!=o[w]&&("?"===(f=o[w].t)||"D"===f||(" "===f||"t"===f)&&null!=o[w+1]&&("?"===o[w+1].t||"t"===o[w+1].t&&"/"===o[w+1].v)||"("===o[c].t&&(" "===f||"n"===f||")"===f)||"t"===f&&("/"===o[w].v||" "===o[w].v&&null!=o[w+1]&&"?"==o[w+1].t));)o[c].v+=o[w].v,o[w]={v:"",t:";"},++w
C+=o[c].v,c=w-1
break
case"G":o[c].t="t",o[c].v=x(t,r)}var E,S,A=""
if(0<C.length){40==C.charCodeAt(0)?(E=t<0&&45===C.charCodeAt(0)?-t:t,S=Y("(",C,E)):(S=Y("n",C,E=t<0&&1<n?-t:t),E<0&&o[0]&&"t"==o[0].t&&(S=S.substr(1),o[0].v="-"+o[0].v)),w=S.length-1
var _=o.length
for(c=0;c<o.length;++c)if(null!=o[c]&&"t"!=o[c].t&&-1<o[c].v.indexOf(".")){_=c
break}var B=o.length
if(_===o.length&&-1===S.indexOf("E")){for(c=o.length-1;0<=c;--c)null!=o[c]&&-1!=="n?(".indexOf(o[c].t)&&(w>=o[c].v.length-1?(w-=o[c].v.length,o[c].v=S.substr(w+1,o[c].v.length)):w<0?o[c].v="":(o[c].v=S.substr(0,w+1),w=-1),o[c].t="t",B=c)
0<=w&&B<o.length&&(o[B].v=S.substr(0,w+1)+o[B].v)}else if(_!==o.length&&-1===S.indexOf("E")){for(w=S.indexOf(".")-1,c=_;0<=c;--c)if(null!=o[c]&&-1!=="n?(".indexOf(o[c].t)){for(s=-1<o[c].v.indexOf(".")&&c===_?o[c].v.indexOf(".")-1:o[c].v.length-1,A=o[c].v.substr(s+1);0<=s;--s)0<=w&&("0"===o[c].v.charAt(s)||"#"===o[c].v.charAt(s))&&(A=S.charAt(w--)+A)
o[c].v=A,o[c].t="t",B=c}for(0<=w&&B<o.length&&(o[B].v=S.substr(0,w+1)+o[B].v),w=S.indexOf(".")+1,c=_;c<o.length;++c)if(null!=o[c]&&(-1!=="n?(".indexOf(o[c].t)||c===_)){for(s=-1<o[c].v.indexOf(".")&&c===_?o[c].v.indexOf(".")+1:0,A=o[c].v.substr(0,s);s<o[c].v.length;++s)w<S.length&&(A+=S.charAt(w++))
o[c].v=A,o[c].t="t",B=c}}}for(c=0;c<o.length;++c)null!=o[c]&&-1<"n(?".indexOf(o[c].t)&&(E=1<n&&t<0&&0<c&&"-"===o[c-1].v?-t:t,o[c].v=Y(o[c].t,o[c].v,E),o[c].t="t")
var T=""
for(c=0;c!==o.length;++c)null!=o[c]&&(T+=o[c].v)
return T}e.is_date=O,e._eval=d
var p=/\[[=<>]/,g=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/
function m(e,t){if(null==t)return!1
var r=parseFloat(t[2])
switch(t[1]){case"=":if(e==r)return!0
break
case">":if(r<e)return!0
break
case"<":if(e<r)return!0
break
case"<>":if(e!=r)return!0
break
case">=":if(r<=e)return!0
break
case"<=":if(e<=r)return!0}return!1}function b(e,t,r){null==r&&(r={})
var n=""
switch(uf(e)){case"string":n="m/d/yy"==e&&r.dateNF?r.dateNF:e
break
case"number":n=14==e&&r.dateNF?r.dateNF:(null!=r.table?r.table:s)[e]}if(y(n,0))return x(t,r)
t instanceof Date&&(t=o(t,r.date1904))
var a=function(e,t){var r=u(e),n=r.length,a=r[n-1].indexOf("@")
if(n<4&&-1<a&&--n,4<r.length)throw new Error("cannot find right format for |"+r.join("|")+"|")
if("number"!=typeof t)return[4,4===r.length||-1<a?r[r.length-1]:"@"]
switch(r.length){case 1:r=-1<a?["General","General","General",r[0]]:[r[0],r[0],r[0],"@"]
break
case 2:r=-1<a?[r[0],r[0],r[0],r[1]]:[r[0],r[1],r[0],"@"]
break
case 3:r=-1<a?[r[0],r[1],r[0],r[2]]:[r[0],r[1],r[2],"@"]}var s=0<t?r[0]:t<0?r[1]:r[2]
if(-1===r[0].indexOf("[")&&-1===r[1].indexOf("["))return[n,s]
if(null==r[0].match(p)&&null==r[1].match(p))return[n,s]
var i=r[0].match(g),o=r[1].match(g)
return m(t,i)?[n,r[0]]:m(t,o)?[n,r[1]]:[n,r[null!=i&&null!=o?2:1]]}(n,t)
if(y(a[1]))return x(t,r)
if(!0===t)t="TRUE"
else if(!1===t)t="FALSE"
else if(""===t||null==t)return""
return d(a[1],t,r,a[0])}function v(e,t){if("number"!=typeof t){t=+t||-1
for(var r=0;r<392;++r)if(null!=s[r]){if(s[r]==e){t=r
break}}else t<0&&(t=r)
t<0&&(t=391)}return s[t]=e,t}e.load=v,e._table=s,e.get_table=function(){return s},e.load_table=function(e){for(var t=0;392!=t;++t)void 0!==e[t]&&v(e[t],t)},e.init_table=t,e.format=b}
ce(de)
var fe,pe={"General Number":"General","General Date":de._table[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":de._table[15],"Short Date":de._table[14],"Long Time":de._table[19],"Medium Time":de._table[18],"Short Time":de._table[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:de._table[2],Standard:de._table[4],Percent:de._table[10],Scientific:de._table[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'},o={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"},C=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g
!function(e){e.version="1.2.0"
var o=function(){for(var e=0,t=new Array(256),r=0;256!=r;++r)e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=r)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1,t[r]=e
return"undefined"!=typeof Int32Array?new Int32Array(t):t}()
function s(e,t){for(var r=-1^t,n=e.length-7,a=0;a<n;)r=(r=(r=(r=(r=(r=(r=(r=r>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])]
for(;a<n+7;)r=r>>>8^o[255&(r^e[a++])]
return-1^r}e.table=o,e.bstr=function(e,t){for(var r=-1^t,n=e.length-1,a=0;a<n;)r=(r=r>>>8^o[255&(r^e.charCodeAt(a++))])>>>8^o[255&(r^e.charCodeAt(a++))]
return a===n&&(r=r>>>8^o[255&(r^e.charCodeAt(a))]),-1^r},e.buf=function(e,t){if(1e4<e.length)return s(e,t)
for(var r=-1^t,n=e.length-3,a=0;a<n;)r=(r=(r=(r=r>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])])>>>8^o[255&(r^e[a++])]
for(;a<n+3;)r=r>>>8^o[255&(r^e[a++])]
return-1^r},e.str=function(e,t){for(var r,n,a=-1^t,s=0,i=e.length;s<i;)r=e.charCodeAt(s++),a=r<128?a>>>8^o[255&(a^r)]:r<2048?(a=a>>>8^o[255&(a^(192|r>>6&31))])>>>8^o[255&(a^(128|63&r))]:55296<=r&&r<57344?(r=64+(1023&r),n=1023&e.charCodeAt(s++),(a=(a=(a=a>>>8^o[255&(a^(240|r>>8&7))])>>>8^o[255&(a^(128|r>>2&63))])>>>8^o[255&(a^(128|n>>6&15|(3&r)<<4))])>>>8^o[255&(a^(128|63&n))]):(a=(a=a>>>8^o[255&(a^(224|r>>12&15))])>>>8^o[255&(a^(128|r>>6&63))])>>>8^o[255&(a^(128|63&r))]
return-1^a}}(fe={})
var b,ge=function(){var a,e={}
function u(e){if("/"==e.charAt(e.length-1))return-1===e.slice(0,-1).indexOf("/")?e:u(e.slice(0,-1))
var t=e.lastIndexOf("/")
return-1===t?e:e.slice(0,t+1)}function d(e){if("/"==e.charAt(e.length-1))return d(e.slice(0,-1))
var t=e.lastIndexOf("/")
return-1===t?e:e.slice(t+1)}function E(e,t){"string"==typeof t&&(t=new Date(t))
var r=t.getHours()
r=(r=r<<6|t.getMinutes())<<5|t.getSeconds()>>>1,e.write_shift(2,r)
var n=t.getFullYear()-1980
n=(n=n<<4|t.getMonth()+1)<<5|t.getDate(),e.write_shift(2,n)}function w(e){Rt(e,0)
for(var t={},r=0;e.l<=e.length-4;){var n=e.read_shift(2),a=e.read_shift(2),s=e.l+a,i={}
switch(n){case 21589:1&(r=e.read_shift(1))&&(i.mtime=e.read_shift(4)),5<a&&(2&r&&(i.atime=e.read_shift(4)),4&r&&(i.ctime=e.read_shift(4))),i.mtime&&(i.mt=new Date(1e3*i.mtime))}e.l=s,t[n]=i}return t}function s(){return a||(a=pf(9))}function i(e,t){if(80==e[0]&&75==e[1])return Z(e,t)
if(e.length<512)throw new Error("CFB file size "+e.length+" < 512")
var r,n,a,s,i,o,l=512,c=[],f=e.slice(0,512)
Rt(f,0)
var h=function(e){if(80==e[e.l]&&75==e[e.l+1])return[0,0]
e.chk(y,"Header Signature: "),e.chk(k,"CLSID: ")
var t=e.read_shift(2,"u")
return[e.read_shift(2,"u"),t]}(f)
switch(r=h[0]){case 3:l=512
break
case 4:l=4096
break
case 0:if(0==h[1])return Z(e,t)
default:throw new Error("Major Version: Expected 3 or 4 saw "+r)}512!==l&&Rt(f=e.slice(0,l),28)
var u=e.slice(0,l)
!function(e,t){var r=9
switch(e.l+=2,r=e.read_shift(2)){case 9:if(3!=t)throw new Error("Sector Shift: Expected 9 saw "+r)
break
case 12:if(4!=t)throw new Error("Sector Shift: Expected 12 saw "+r)
break
default:throw new Error("Sector Shift: Expected 9 or 12 saw "+r)}e.chk("0600","Mini Sector Shift: "),e.chk("000000000000","Reserved: ")}(f,r)
var d=f.read_shift(4,"i")
if(3===r&&0!==d)throw new Error("# Directory Sectors: Expected 0 saw "+d)
f.l+=4,s=f.read_shift(4,"i"),f.l+=4,f.chk("00100000","Mini Stream Cutoff Size: "),i=f.read_shift(4,"i"),n=f.read_shift(4,"i"),o=f.read_shift(4,"i"),a=f.read_shift(4,"i")
for(var p=-1,g=0;g<109&&!((p=f.read_shift(4,"i"))<0);++g)c[g]=p
var m=function(e,t){for(var r=Math.ceil(e.length/t)-1,n=[],a=1;a<r;++a)n[a-1]=e.slice(a*t,(a+1)*t)
return n[r-1]=e.slice(r*t),n}(e,l)
!function e(t,r,n,a,s){var i=T
if(t===T){if(0!==r)throw new Error("DIFAT chain shorter than expected")}else if(-1!==t){var o=n[t],l=(a>>>2)-1
if(!o)return
for(var c=0;c<l&&(i=At(o,4*c))!==T;++c)s.push(i)
e(At(o,a-4),r-1,n,a,s)}}(o,a,m,l,c)
var b=function(e,t,r,n){var a=e.length,s=[],i=[],o=[],l=[],c=n-1,f=0,h=0,u=0,d=0
for(f=0;f<a;++f)if(o=[],a<=(u=f+t)&&(u-=a),!i[u]){for(l=[],h=u;0<=h;){i[h]=!0,o[o.length]=h,l.push(e[h])
var p=r[Math.floor(4*h/n)]
if(n<4+(d=4*h&c))throw new Error("FAT boundary crossed: "+h+" 4 "+n)
if(!e[p])break
h=At(e[p],d)}s[u]={nodes:o,data:et([l])}}return s}(m,s,c,l)
b[s].name="!Directory",0<n&&i!==T&&(b[i].name="!MiniFAT"),b[c[0]].name="!FAT",b.fat_addrs=c,b.ssz=l
var v=[],w=[],C=[]
!function(e,t,r,n,a,s,i,o){for(var l,c=0,f=n.length?2:0,h=t[e].data,u=0,d=0;u<h.length;u+=128){var p=h.slice(u,u+128)
Rt(p,64),d=p.read_shift(2),l=rt(p,0,d-f),n.push(l)
var g={name:l,type:p.read_shift(1),color:p.read_shift(1),L:p.read_shift(4,"i"),R:p.read_shift(4,"i"),C:p.read_shift(4,"i"),clsid:p.read_shift(16),state:p.read_shift(4,"i"),start:0,size:0},m=p.read_shift(2)+p.read_shift(2)+p.read_shift(2)+p.read_shift(2)
0!==m&&(g.ct=_(p,p.l-8))
var b=p.read_shift(2)+p.read_shift(2)+p.read_shift(2)+p.read_shift(2)
0!==b&&(g.mt=_(p,p.l-8)),g.start=p.read_shift(4,"i"),g.size=p.read_shift(4,"i"),g.size<0&&g.start<0&&(g.size=g.type=0,g.start=T,g.name=""),5===g.type?(c=g.start,0<a&&c!==T&&(t[c].name="!StreamData")):4096<=g.size?(g.storage="fat",void 0===t[g.start]&&(t[g.start]=A(r,g.start,t.fat_addrs,t.ssz)),t[g.start].name=g.name,g.content=t[g.start].data.slice(0,g.size)):(g.storage="minifat",g.size<0?g.size=0:c!==T&&g.start!==T&&t[c]&&(g.content=S(g,t[c].data,(t[o]||{}).data))),g.content&&Rt(g.content,0),s[l]=g,i.push(g)}}(s,b,m,v,n,{},w,i),function(e,t,r){for(var n=0,a=0,s=0,i=0,o=0,l=r.length,c=[],f=[];n<l;++n)c[n]=f[n]=n,t[n]=r[n]
for(;o<f.length;++o)n=f[o],a=e[n].L,s=e[n].R,i=e[n].C,c[n]===n&&(-1!==a&&c[a]!==a&&(c[n]=c[a]),-1!==s&&c[s]!==s&&(c[n]=c[s])),-1!==i&&(c[i]=n),-1!==a&&(c[a]=c[n],f.lastIndexOf(a)<o&&f.push(a)),-1!==s&&(c[s]=c[n],f.lastIndexOf(s)<o&&f.push(s))
for(n=1;n<l;++n)c[n]===n&&(-1!==s&&c[s]!==s?c[n]=c[s]:-1!==a&&c[a]!==a&&(c[n]=c[a]))
for(n=1;n<l;++n)if(0!==e[n].type){if(0===(o=c[n]))t[n]=t[0]+"/"+t[n]
else for(;0!==o&&o!==c[o];)t[n]=t[o]+"/"+t[n],o=c[o]
c[n]=0}for(t[0]+="/",n=1;n<l;++n)2!==e[n].type&&(t[n]+="/")}(w,C,v),v.shift()
var E={FileIndex:w,FullPaths:C}
return t&&t.raw&&(E.raw={header:u,sectors:m}),E}function S(e,t,r){for(var n=e.start,a=e.size,s=[],i=n;r&&0<a&&0<=i;)s.push(t.slice(i*l,i*l+l)),a-=l,i=At(r,4*i)
return 0===s.length?Dt(0):ie(s).slice(0,e.size)}function A(e,t,r,n,a){var s=[],i=[]
a||(a=[])
var o=n-1,l=0,c=0
for(l=t;0<=l;){a[l]=!0,s[s.length]=l,i.push(e[l])
var f=r[Math.floor(4*l/n)]
if(n<4+(c=4*l&o))throw new Error("FAT boundary crossed: "+l+" 4 "+n)
if(!e[f])break
l=At(e[f],c)}return{nodes:s,data:et([i])}}function _(e,t){return new Date(1e3*(St(e,t+4)/1e7*Math.pow(2,32)+St(e,t)/1e7-11644473600))}function g(e,t){var r=t||{},n=r.root||"Root Entry"
if(e.FullPaths||(e.FullPaths=[]),e.FileIndex||(e.FileIndex=[]),e.FullPaths.length!==e.FileIndex.length)throw new Error("inconsistent CFB structure")
0===e.FullPaths.length&&(e.FullPaths[0]=n+"/",e.FileIndex[0]={name:n,type:5}),r.CLSID&&(e.FileIndex[0].clsid=r.CLSID),function(e){var t="Sh33tJ5"
if(!ge.find(e,"/"+t)){var r=Dt(4)
r[0]=55,r[1]=r[3]=50,r[2]=54,e.FileIndex.push({name:t,type:2,content:r,size:4,L:69,R:69,C:69}),e.FullPaths.push(e.FullPaths[0]+t),p(e)}}(e)}function p(e,t){g(e)
for(var r=!1,n=!1,a=e.FullPaths.length-1;0<=a;--a){var s=e.FileIndex[a]
switch(s.type){case 0:n?r=!0:(e.FileIndex.pop(),e.FullPaths.pop())
break
case 1:case 2:case 5:n=!0,isNaN(s.R*s.L*s.C)&&(r=!0),-1<s.R&&-1<s.L&&s.R==s.L&&(r=!0)
break
default:r=!0}}if(r||t){var i=new Date(1987,1,19),o=0,l=[]
for(a=0;a<e.FullPaths.length;++a)0!==e.FileIndex[a].type&&l.push([e.FullPaths[a],e.FileIndex[a]])
for(a=0;a<l.length;++a){var c=u(l[a][0])
for(n=!1,o=0;o<l.length;++o)l[o][0]===c&&(n=!0)
n||l.push([c,{name:d(c).replace("/",""),type:1,clsid:k,ct:i,mt:i,content:null}])}for(l.sort(function(e,t){return function(e,t){for(var r=e.split("/"),n=t.split("/"),a=0,s=0,i=Math.min(r.length,n.length);a<i;++a){if(s=r[a].length-n[a].length)return s
if(r[a]!=n[a])return r[a]<n[a]?-1:1}return r.length-n.length}(e[0],t[0])}),e.FullPaths=[],e.FileIndex=[],a=0;a<l.length;++a)e.FullPaths[a]=l[a][0],e.FileIndex[a]=l[a][1]
for(a=0;a<l.length;++a){var f=e.FileIndex[a],h=e.FullPaths[a]
if(f.name=d(h).replace("/",""),f.L=f.R=f.C=-(f.color=1),f.size=f.content?f.content.length:0,f.start=0,f.clsid=f.clsid||k,0===a)f.C=1<l.length?1:-1,f.size=0,f.type=5
else if("/"==h.slice(-1)){for(o=a+1;o<l.length&&u(e.FullPaths[o])!=h;++o);for(f.C=o>=l.length?-1:o,o=a+1;o<l.length&&u(e.FullPaths[o])!=u(h);++o);f.R=o>=l.length?-1:o,f.type=1}else u(e.FullPaths[a+1]||"")==u(h)&&(f.R=a+1),f.type=2}}}function o(e,t){var r=t||{}
if(p(e),"zip"==r.fileType)return function(e,t){var r,n=t||{},a=[],s=[],i=Dt(1),o=n.compression?8:0,l=0,c=0,f=0,h=0,u=0,d=e.FullPaths[0],p=d,g=e.FileIndex[0],m=[],b=0
for(c=1;c<e.FullPaths.length;++c)if(p=e.FullPaths[c].slice(d.length),(g=e.FileIndex[c]).size&&g.content&&"Sh33tJ5"!=p){var v=h,w=Dt(p.length)
for(f=0;f<p.length;++f)w.write_shift(1,127&p.charCodeAt(f))
w=w.slice(0,w.l),m[u]=fe.buf(g.content,0)
var C=g.content
8==o&&(r=C,C=B?B.deflateRawSync(r):M(r)),(i=Dt(30)).write_shift(4,67324752),i.write_shift(2,20),i.write_shift(2,l),i.write_shift(2,o),g.mt?E(i,g.mt):i.write_shift(4,0),i.write_shift(-4,8&l?0:m[u]),i.write_shift(4,8&l?0:C.length),i.write_shift(4,8&l?0:g.content.length),i.write_shift(2,w.length),i.write_shift(2,0),h+=i.length,a.push(i),h+=w.length,a.push(w),h+=C.length,a.push(C),8&l&&((i=Dt(12)).write_shift(-4,m[u]),i.write_shift(4,C.length),i.write_shift(4,g.content.length),h+=i.l,a.push(i)),(i=Dt(46)).write_shift(4,33639248),i.write_shift(2,0),i.write_shift(2,20),i.write_shift(2,l),i.write_shift(2,o),i.write_shift(4,0),i.write_shift(-4,m[u]),i.write_shift(4,C.length),i.write_shift(4,g.content.length),i.write_shift(2,w.length),i.write_shift(2,0),i.write_shift(2,0),i.write_shift(2,0),i.write_shift(2,0),i.write_shift(4,0),i.write_shift(4,v),b+=i.l,s.push(i),b+=w.length,s.push(w),++u}return(i=Dt(22)).write_shift(4,101010256),i.write_shift(2,0),i.write_shift(2,0),i.write_shift(2,u),i.write_shift(2,u),i.write_shift(4,b),i.write_shift(4,h),i.write_shift(2,0),ie([ie(a),ie(s),i])}(e,r)
var n=function(e){for(var t=0,r=0,n=0;n<e.FileIndex.length;++n){var a=e.FileIndex[n]
if(a.content){var s=a.content.length
0<s&&(s<4096?t+=s+63>>6:r+=s+511>>9)}}for(var i=e.FullPaths.length+3>>2,o=t+127>>7,l=(t+7>>3)+r+i+o,c=l+127>>7,f=c<=109?0:Math.ceil((c-109)/127);c<l+c+f+127>>7;)f=++c<=109?0:Math.ceil((c-109)/127)
var h=[1,f,c,o,i,r,t,0]
return e.FileIndex[0].size=t<<6,h[7]=(e.FileIndex[0].start=h[0]+h[1]+h[2]+h[3]+h[4]+h[5])+(h[6]+7>>3),h}(e),a=Dt(n[7]<<9),s=0,i=0
for(s=0;s<8;++s)a.write_shift(1,m[s])
for(s=0;s<8;++s)a.write_shift(2,0)
for(a.write_shift(2,62),a.write_shift(2,3),a.write_shift(2,65534),a.write_shift(2,9),a.write_shift(2,6),s=0;s<3;++s)a.write_shift(2,0)
for(a.write_shift(4,0),a.write_shift(4,n[2]),a.write_shift(4,n[0]+n[1]+n[2]+n[3]-1),a.write_shift(4,0),a.write_shift(4,4096),a.write_shift(4,n[3]?n[0]+n[1]+n[2]-1:T),a.write_shift(4,n[3]),a.write_shift(-4,n[1]?n[0]-1:T),a.write_shift(4,n[1]),s=0;s<109;++s)a.write_shift(-4,s<n[2]?n[1]+s:-1)
if(n[1])for(i=0;i<n[1];++i){for(;s<236+127*i;++s)a.write_shift(-4,s<n[2]?n[1]+s:-1)
a.write_shift(-4,i===n[1]-1?T:i+1)}var o=function(e){for(i+=e;s<i-1;++s)a.write_shift(-4,s+1)
e&&(++s,a.write_shift(-4,T))}
for(i=s=0,i+=n[1];s<i;++s)a.write_shift(-4,b.DIFSECT)
for(i+=n[2];s<i;++s)a.write_shift(-4,b.FATSECT)
o(n[3]),o(n[4])
for(var l=0,c=0,f=e.FileIndex[0];l<e.FileIndex.length;++l)(f=e.FileIndex[l]).content&&((c=f.content.length)<4096||(f.start=i,o(c+511>>9)))
for(o(n[6]+7>>3);511&a.l;)a.write_shift(-4,b.ENDOFCHAIN)
for(i=s=0,l=0;l<e.FileIndex.length;++l)(f=e.FileIndex[l]).content&&(!(c=f.content.length)||4096<=c||(f.start=i,o(c+63>>6)))
for(;511&a.l;)a.write_shift(-4,b.ENDOFCHAIN)
for(s=0;s<n[4]<<2;++s){var h=e.FullPaths[s]
if(h&&0!==h.length){f=e.FileIndex[s],0===s&&(f.start=f.size?f.start-1:T)
var u=0===s&&r.root||f.name
if(c=2*(u.length+1),a.write_shift(64,u,"utf16le"),a.write_shift(2,c),a.write_shift(1,f.type),a.write_shift(1,f.color),a.write_shift(-4,f.L),a.write_shift(-4,f.R),a.write_shift(-4,f.C),f.clsid)a.write_shift(16,f.clsid,"hex")
else for(l=0;l<4;++l)a.write_shift(4,0)
a.write_shift(4,f.state||0),a.write_shift(4,0),a.write_shift(4,0),a.write_shift(4,0),a.write_shift(4,0),a.write_shift(4,f.start),a.write_shift(4,f.size),a.write_shift(4,0)}else{for(l=0;l<17;++l)a.write_shift(4,0)
for(l=0;l<3;++l)a.write_shift(4,-1)
for(l=0;l<12;++l)a.write_shift(4,0)}}for(s=1;s<e.FileIndex.length;++s)if(4096<=(f=e.FileIndex[s]).size){for(a.l=f.start+1<<9,l=0;l<f.size;++l)a.write_shift(1,f.content[l])
for(;511&l;++l)a.write_shift(1,0)}for(s=1;s<e.FileIndex.length;++s)if(0<(f=e.FileIndex[s]).size&&f.size<4096){for(l=0;l<f.size;++l)a.write_shift(1,f.content[l])
for(;63&l;++l)a.write_shift(1,0)}for(;a.l<a.length;)a.write_shift(1,0)
return a}e.version="1.1.0"
var B,l=64,T=-2,y="d0cf11e0a1b11ae1",m=[208,207,17,224,161,177,26,225],k="00000000000000000000000000000000",b={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:T,FREESECT:-1,HEADER_SIGNATURE:y,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:k,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]}
function n(e){for(var t=new Array(e.length),r=0;r<e.length;++r)t[r]=String.fromCharCode(e[r])
return t.join("")}for(var t,r,x=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],v=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],C=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],I="undefined"!=typeof Uint8Array,R=I?new Uint8Array(256):[],c=0;c<256;++c)R[c]=255&((r=139536&((t=c)<<1|t<<11)|558144&(t<<5|t<<15))>>16|r>>8|r)
function O(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=5?0:e[n+1]<<8))>>>r&7}function D(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=3?0:e[n+1]<<8))>>>r&31}function F(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=1?0:e[n+1]<<8))>>>r&127}function P(e,t,r){var n=7&t,a=t>>>3,s=(1<<r)-1,i=e[a]>>>n
return r<8-n?i&s:(i|=e[a+1]<<8-n,r<16-n?i&s:(i|=e[a+2]<<16-n,r<24-n?i&s:(i|=e[a+3]<<24-n)&s))}function N(e,t){var r=e.length,n=t<2*r?2*r:t+5,a=0
if(t<=r)return e
if(ee){var s=ae(n)
if(e.copy)e.copy(s)
else for(;a<e.length;++a)s[a]=e[a]
return s}if(I){var i=new Uint8Array(n)
if(i.set)i.set(e)
else for(;a<e.length;++a)i[a]=e[a]
return i}return e.length=n,e}function L(e){for(var t=new Array(e),r=0;r<e;++r)t[r]=0
return t}var f,M=(f=function(e,t){for(var r=0;r<e.length;){var n=Math.min(65535,e.length-r),a=r+n==e.length
for(t.write_shift(1,+a),t.write_shift(2,n),t.write_shift(2,65535&~n);0<n--;)t[t.l++]=e[r++]}return t.l},function(e){var t=Dt(50+Math.floor(1.1*e.length)),r=f(e,t)
return t.slice(0,r)})
function U(e,t,r){var n=1,a=0,s=0,i=0,o=0,l=e.length,c=I?new Uint16Array(32):L(32)
for(s=0;s<32;++s)c[s]=0
for(s=l;s<r;++s)e[s]=0
l=e.length
var f=I?new Uint16Array(l):L(l)
for(s=0;s<l;++s)c[a=e[s]]++,n<a&&(n=a),f[s]=0
for(c[0]=0,s=1;s<=n;++s)c[s+16]=o=o+c[s-1]<<1
for(s=0;s<l;++s)0!=(o=e[s])&&(f[s]=c[o+16]++)
var h,u,d,p=0
for(s=0;s<l;++s)if(0!=(p=e[s]))for(h=f[s],u=n,d=void 0,d=R[255&h],o=(u<=8?d>>>8-u:(d=d<<8|R[h>>8&255],u<=16?d>>>16-u:(d=d<<8|R[h>>16&255])>>>24-u))>>n-p,i=(1<<n+4-p)-1;0<=i;--i)t[o|i<<p]=15&p|s<<4
return n}var H=I?new Uint16Array(512):L(512),W=I?new Uint16Array(32):L(32)
if(!I){for(var h=0;h<512;++h)H[h]=0
for(h=0;h<32;++h)W[h]=0}!function(){for(var e=[],t=0;t<32;t++)e.push(5)
U(e,W,32)
var r=[]
for(t=0;t<=143;t++)r.push(8)
for(;t<=255;t++)r.push(9)
for(;t<=279;t++)r.push(7)
for(;t<=287;t++)r.push(8)
U(r,H,288)}()
var V=I?new Uint16Array(32768):L(32768),z=I?new Uint16Array(32768):L(32768),X=I?new Uint16Array(128):L(128),G=1,j=1
function Y(e,t){var r,n,a,s,i=D(e,t)+257,o=D(e,t+=5)+1,l=(a=7&(n=t+=5),4+(((r=e)[s=n>>>3]|(a<=4?0:r[s+1]<<8))>>>a&15))
t+=4
for(var c=0,f=I?new Uint8Array(19):L(19),h=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u=1,d=I?new Uint8Array(8):L(8),p=I?new Uint8Array(8):L(8),g=f.length,m=0;m<l;++m)f[x[m]]=c=O(e,t),u<c&&(u=c),d[c]++,t+=3
var b=0
for(d[0]=0,m=1;m<=u;++m)p[m]=b=b+d[m-1]<<1
for(m=0;m<g;++m)0!=(b=f[m])&&(h[m]=p[b]++)
var v=0
for(m=0;m<g;++m)if(0!=(v=f[m])){b=R[h[m]]>>8-v
for(var w=(1<<7-v)-1;0<=w;--w)X[b|w<<v]=7&v|m<<3}var C,E,S,A,_=[]
for(u=1;_.length<i+o;)switch(t+=7&(b=X[F(e,t)]),b>>>=3){case 16:for(c=3+(S=7&(E=t),((C=e)[A=E>>>3]|(S<=6?0:C[A+1]<<8))>>>S&3),t+=2,b=_[_.length-1];0<c--;)_.push(b)
break
case 17:for(c=3+O(e,t),t+=3;0<c--;)_.push(0)
break
case 18:for(c=11+F(e,t),t+=7;0<c--;)_.push(0)
break
default:_.push(b),u<b&&(u=b)}var B=_.slice(0,i),T=_.slice(i)
for(m=i;m<286;++m)B[m]=0
for(m=o;m<30;++m)T[m]=0
return G=U(B,V,286),j=U(T,z,30),t}function K(e,t){var r=function(e,t){if(3==e[0]&&!(3&e[1]))return[te(t),2]
for(var r=0,n=0,a=ae(t||1<<18),s=0,i=a.length>>>0,o=0,l=0;0==(1&n);)if(n=O(e,r),r+=3,n>>>1!=0)for(l=n>>>1==1?(o=9,5):(r=Y(e,r),o=G,j),!t&&i<s+32767&&(i=(a=N(a,s+32767)).length);;){var c=P(e,r,o),f=n>>>1==1?H[c]:V[c]
if(r+=15&f,0==((f>>>=4)>>>8&255))a[s++]=f
else{if(256==f)break
var h=(f-=257)<8?0:f-4>>2
5<h&&(h=0)
var u=s+v[f]
0<h&&(u+=P(e,r,h),r+=h),c=P(e,r,l),r+=15&(f=n>>>1==1?W[c]:z[c])
var d=(f>>>=4)<4?0:f-2>>1,p=C[f]
for(0<d&&(p+=P(e,r,d),r+=d),!t&&i<u&&(i=(a=N(a,u)).length);s<u;)a[s]=a[s-p],++s}}else{7&r&&(r+=8-(7&r))
var g=e[r>>>3]|e[1+(r>>>3)]<<8
if(r+=32,!t&&i<s+g&&(i=(a=N(a,s+g)).length),"function"==typeof e.copy)e.copy(a,s,r>>>3,(r>>>3)+g),s+=g,r+=8*g
else for(;0<g--;)a[s++]=e[r>>>3],r+=8}return[t?a:a.slice(0,s),r+7>>>3]}(e.slice(e.l||0),t)
return e.l+=r[1],r[0]}function $(e,t){if(!e)throw new Error(t)
"undefined"!=typeof console&&console.error(t)}function Z(e,t){var r=e
Rt(r,0)
var n={FileIndex:[],FullPaths:[]}
g(n,{root:t.root})
for(var a=r.length-4;(80!=r[a]||75!=r[a+1]||5!=r[a+2]||6!=r[a+3])&&0<=a;)--a
r.l=a+4,r.l+=4
var s=r.read_shift(2)
r.l+=6
var i=r.read_shift(4)
for(r.l=i,a=0;a<s;++a){r.l+=20
var o=r.read_shift(4),l=r.read_shift(4),c=r.read_shift(2),f=r.read_shift(2),h=r.read_shift(2)
r.l+=8
var u=r.read_shift(4),d=w(r.slice(r.l+c,r.l+c+f))
r.l+=c+f+h
var p=r.l
r.l=u+4,Q(r,o,l,n,d),r.l=p}return n}function Q(e,t,r,n,a){e.l+=2
var s=e.read_shift(2),i=e.read_shift(2),o=function(e){var t=65535&e.read_shift(2),r=65535&e.read_shift(2),n=new Date,a=31&r,s=15&(r>>>=5)
r>>>=4,n.setMilliseconds(0),n.setFullYear(r+1980),n.setMonth(s-1),n.setDate(a)
var i=31&t,o=63&(t>>>=5)
return t>>>=6,n.setHours(t),n.setMinutes(o),n.setSeconds(i<<1),n}(e)
if(8257&s)throw new Error("Unsupported ZIP encryption")
for(var l=e.read_shift(4),c=e.read_shift(4),f=e.read_shift(4),h=e.read_shift(2),u=e.read_shift(2),d="",p=0;p<h;++p)d+=String.fromCharCode(e[e.l++])
if(u){var g=w(e.slice(e.l,e.l+u));(g[21589]||{}).mt&&(o=g[21589].mt),((a||{})[21589]||{}).mt&&(o=a[21589].mt)}e.l+=u
var m=e.slice(e.l,e.l+c)
switch(i){case 8:m=function(e,t){if(!B)return K(e,t)
var r=new B.InflateRaw,n=r._processChunk(e.slice(e.l),r._finishFlushFlag)
return e.l+=r.bytesRead,n}(e,f)
break
case 0:break
default:throw new Error("Unsupported ZIP Compression method "+i)}var b=!1
8&s&&(134695760==(l=e.read_shift(4))&&(l=e.read_shift(4),b=!0),c=e.read_shift(4),f=e.read_shift(4)),c!=t&&$(b,"Bad compressed size: "+t+" != "+c),f!=r&&$(b,"Bad uncompressed size: "+r+" != "+f)
var v=fe.buf(m,0)
l!=v&&$(b,"Bad CRC32 checksum: "+l+" != "+v),J(n,d,m,{unsafe:!0,mt:o})}function J(e,t,r,n){var a=n&&n.unsafe
a||g(e)
var s=!a&&ge.find(e,t)
if(!s){var i=e.FullPaths[0]
i=t.slice(0,i.length)==i?t:("/"!=i.slice(-1)&&(i+="/"),(i+t).replace("//","/")),s={name:d(t),type:2},e.FileIndex.push(s),e.FullPaths.push(i),a||ge.utils.cfb_gc(e)}return s.content=r,s.size=r?r.length:0,n&&(n.CLSID&&(s.clsid=n.CLSID),n.mt&&(s.mt=n.mt),n.ct&&(s.ct=n.ct)),s}return e.find=function(e,t){var r=e.FullPaths.map(function(e){return e.toUpperCase()}),n=r.map(function(e){var t=e.split("/")
return t[t.length-("/"==e.slice(-1)?2:1)]}),a=!1
47===t.charCodeAt(0)?(a=!0,t=r[0].slice(0,-1)+t):a=-1!==t.indexOf("/")
var s=t.toUpperCase(),i=!0===a?r.indexOf(s):n.indexOf(s)
if(-1!==i)return e.FileIndex[i]
var o=!s.match(le)
for(s=s.replace(oe,""),o&&(s=s.replace(le,"!")),i=0;i<r.length;++i){if((o?r[i].replace(le,"!"):r[i]).replace(oe,"")==s)return e.FileIndex[i]
if((o?n[i].replace(le,"!"):n[i]).replace(oe,"")==s)return e.FileIndex[i]}return null},e.read=function(e,t){switch(t&&t.type||"base64"){case"file":return r=e,n=t,s(),i(a.readFileSync(r),n)
case"base64":return i(se(q.decode(e)),t)
case"binary":return i(se(e),t)}var r,n
return i(e,t)},e.parse=i,e.write=function(e,t){var r=o(e,t)
switch(t&&t.type){case"file":return s(),a.writeFileSync(t.filename,r),r
case"binary":return n(r)
case"base64":return q.encode(n(r))}return r},e.writeFile=function(e,t,r){s()
var n=o(e,r)
a.writeFileSync(t,n)},e.utils={cfb_new:function(e){var t={}
return g(t,e),t},cfb_add:J,cfb_del:function(e,t){g(e)
var r=ge.find(e,t)
if(r)for(var n=0;n<e.FileIndex.length;++n)if(e.FileIndex[n]==r)return e.FileIndex.splice(n,1),e.FullPaths.splice(n,1),!0
return!1},cfb_mov:function(e,t,r){g(e)
var n=ge.find(e,t)
if(n)for(var a=0;a<e.FileIndex.length;++a)if(e.FileIndex[a]==n)return e.FileIndex[a].name=d(r),e.FullPaths[a]=r,!0
return!1},cfb_gc:function(e){p(e,!0)},ReadShift:Bt,CheckField:It,prep_blob:Rt,bconcat:ie,use_zlib:function(e){try{var t=new e.InflateRaw
if(t._processChunk(new Uint8Array([3,0]),t._finishFlushFlag),!t.bytesRead)throw new Error("zlib does not expose bytesRead")
B=e}catch(e){console.error("cannot use native zlib: "+(e.message||e))}},_deflateRaw:M,_inflateRaw:K,consts:b},e}()
try{b=pf(9)}catch(e){}function c(e){return"string"==typeof e?i(e):Array.isArray(e)?function(e){if("undefined"==typeof Uint8Array)throw new Error("Unsupported")
return new Uint8Array(e)}(e):e}function v(e,t,r){if(void 0!==b&&b.writeFileSync)return r?b.writeFileSync(e,t,r):b.writeFileSync(e,t)
var n="utf8"==r?Oe(t):t
if("undefined"!=typeof IE_SaveFile)return IE_SaveFile(n,e)
if("undefined"!=typeof Blob){var a=new Blob([c(n)],{type:"application/octet-stream"})
if("undefined"!=typeof navigator&&navigator.msSaveBlob)return navigator.msSaveBlob(a,e)
if("undefined"!=typeof saveAs)return saveAs(a,e)
if("undefined"!=typeof URL&&"undefined"!=typeof document&&document.createElement&&URL.createObjectURL){var s=URL.createObjectURL(a)
if("object"===("undefined"==typeof chrome?"undefined":uf(chrome))&&"function"==typeof(chrome.downloads||{}).download)return URL.revokeObjectURL&&"undefined"!=typeof setTimeout&&setTimeout(function(){URL.revokeObjectURL(s)},6e4),chrome.downloads.download({url:s,filename:e,saveAs:!0})
var i=document.createElement("a")
if(null!=i.download)return i.download=e,i.href=s,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL&&"undefined"!=typeof setTimeout&&setTimeout(function(){URL.revokeObjectURL(s)},6e4),s}}if("undefined"!=typeof $&&"undefined"!=typeof File&&"undefined"!=typeof Folder)try{var o=File(e)
return o.open("w"),o.encoding="binary",Array.isArray(t)&&(t=l(t)),o.write(t),o.close(),t}catch(e){if(!e.message||!e.message.match(/onstruct/))throw e}throw new Error("cannot save file "+e)}function me(e){for(var t=Object.keys(e),r=[],n=0;n<t.length;++n)e.hasOwnProperty(t[n])&&r.push(t[n])
return r}function w(e,t){for(var r=[],n=me(e),a=0;a!==n.length;++a)null==r[e[n[a]][t]]&&(r[e[n[a]][t]]=n[a])
return r}function E(e){for(var t=[],r=me(e),n=0;n!==r.length;++n)t[e[r[n]]]=r[n]
return t}function A(e){for(var t=[],r=me(e),n=0;n!==r.length;++n)t[e[r[n]]]=parseInt(r[n],10)
return t}var S=new Date(1899,11,30,0,0,0),_=S.getTime()+6e4*((new Date).getTimezoneOffset()-S.getTimezoneOffset())
function j(e,t){var r=e.getTime()
return t&&(r-=1263168e5),(r-_)/864e5}function N(e){var t=new Date
return t.setTime(24*e*60*60*1e3+_),t}function Y(e){var t=0,r=0,n=!1,a=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/)
if(!a)throw new Error("|"+e+"| is not an ISO8601 Duration")
for(var s=1;s!=a.length;++s)if(a[s]){switch(r=1,3<s&&(n=!0),a[s].slice(a[s].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+a[s].slice(a[s].length-1))
case"D":r*=24
case"H":r*=60
case"M":if(!n)throw new Error("Unsupported ISO Duration Field: M")
r*=60}t+=r*parseInt(a[s],10)}return t}var B=new Date("2017-02-19T19:06:09.000Z")
isNaN(B.getFullYear())&&(B=new Date("2/19/17"))
var T=2017==B.getFullYear()
function K(e,t){var r=new Date(e)
if(T)return 0<t?r.setTime(r.getTime()+60*r.getTimezoneOffset()*1e3):t<0&&r.setTime(r.getTime()-60*r.getTimezoneOffset()*1e3),r
if(e instanceof Date)return e
if(1917==B.getFullYear()&&!isNaN(r.getFullYear())){var n=r.getFullYear()
return-1<e.indexOf(""+n)||r.setFullYear(r.getFullYear()+100),r}var a=e.match(/\d+/g)||["2017","2","19","0","0","0"],s=new Date(+a[0],+a[1]-1,+a[2],+a[3]||0,+a[4]||0,+a[5]||0)
return-1<e.indexOf("Z")&&(s=new Date(s.getTime()-60*s.getTimezoneOffset()*1e3)),s}function y(e){for(var t="",r=0;r!=e.length;++r)t+=String.fromCharCode(e[r])
return t}function be(e){if("undefined"!=typeof JSON&&!Array.isArray(e))return JSON.parse(JSON.stringify(e))
if("object"!=uf(e)||null==e)return e
if(e instanceof Date)return new Date(e.getTime())
var t={}
for(var r in e)e.hasOwnProperty(r)&&(t[r]=be(e[r]))
return t}function F(e,t){for(var r="";r.length<t;)r+=e
return r}function k(e){var t=Number(e)
if(!isNaN(t))return t
var r=1,n=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return r*=100,""})
return isNaN(t=Number(n))?(n=n.replace(/[(](.*)[)]/,function(e,t){return r=-r,t}),isNaN(t=Number(n))?t:t/r):t/r}function x(e){var t=new Date(e),r=new Date(NaN),n=t.getYear(),a=t.getMonth(),s=t.getDate()
return isNaN(s)?r:n<0||8099<n?r:(0<a||1<s)&&101!=n?t:e.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)?t:e.match(/[^-0-9:,\/\\]/)?r:t}var I,R=5=="abacaba".split(/(:?b)/i).length
function O(e){return e?e.data?ne(e.data):e.asNodeBuffer&&ee?ne(e.asNodeBuffer().toString("binary")):e.asBinary?ne(e.asBinary()):e._data&&e._data.getContent?ne(y(Array.prototype.slice.call(e._data.getContent(),0))):null:null}function D(e){return e&&".bin"===e.name.slice(-4)?function(e){if(!e)return null
if(e.data)return re(e.data)
if(e.asNodeBuffer&&ee)return e.asNodeBuffer()
if(e._data&&e._data.getContent){var t=e._data.getContent()
return"string"==typeof t?re(t):Array.prototype.slice.call(t)}return null}(e):O(e)}function P(e,t){for(var r=me(e.files),n=t.toLowerCase(),a=n.replace(/\//g,"\\"),s=0;s<r.length;++s){var i=r[s].toLowerCase()
if(n==i||a==i)return e.files[r[s]]}return null}function L(e,t){var r=P(e,t)
if(null==r)throw new Error("Cannot find file "+t+" in zip")
return r}function M(e,t,r){if(!r)return D(L(e,t))
if(!t)return null
try{return M(e,t)}catch(e){return null}}function U(e,t,r){if(!r)return O(L(e,t))
if(!t)return null
try{return U(e,t)}catch(e){return null}}function H(e,t){var r=t.split("/")
"/"!=t.slice(-1)&&r.pop()
for(var n=e.split("/");0!==n.length;){var a=n.shift()
".."===a?r.pop():"."!==a&&r.push(a)}return r.join("/")}"undefined"!=typeof JSZipSync&&(I=JSZipSync),df.exports&&void 0===I&&(I=pf(22))
var W='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',V=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,z=/<[\/\?]?[a-zA-Z0-9:]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s?[\/\?]?>/g
W.match(z)||(z=/<[^>]*>/g)
var X=/<\w*:/,G=/<(\/?)\w+:/
function ve(e,t){for(var r={},n=0,a=0;n!==e.length&&32!==(a=e.charCodeAt(n))&&10!==a&&13!==a;++n);if(t||(r[0]=e.slice(0,n)),n===e.length)return r
var s=e.match(V),i=0,o="",l=0,c="",f="",h=1
if(s)for(l=0;l!=s.length;++l){for(f=s[l],a=0;a!=f.length&&61!==f.charCodeAt(a);++a);for(c=f.slice(0,a).trim();32==f.charCodeAt(a+1);)++a
for(h=34==(n=f.charCodeAt(a+1))||39==n?1:0,o=f.slice(a+1+h,f.length-h),i=0;i!=c.length&&58!==c.charCodeAt(i);++i);if(i===c.length)0<c.indexOf("_")&&(c=c.slice(0,c.indexOf("_"))),r[c]=o,r[c.toLowerCase()]=o
else{var u=(5===i&&"xmlns"===c.slice(0,5)?"xmlns":"")+c.slice(i+1)
if(r[u]&&"ext"==c.slice(i-3,i))continue
r[u]=o,r[u.toLowerCase()]=o}}return r}function Z(e){return e.replace(G,"<$1")}var Q,J,we={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},Ce=E(we),Ee=(Q=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g,J=/_x([\da-fA-F]{4})_/g,function e(t){var r=t+"",n=r.indexOf("<![CDATA[")
if(-1==n)return r.replace(Q,function(e,t){return we[e]||String.fromCharCode(parseInt(t,-1<e.indexOf("x")?16:10))||e}).replace(J,function(e,t){return String.fromCharCode(parseInt(t,16))})
var a=r.indexOf("]]>")
return e(r.slice(0,n))+r.slice(n+9,a)+e(r.slice(a+3))}),Se=/[&<>'"]/g,Ae=/[\u0000-\u0008\u000b-\u001f]/g
function _e(e){return(e+"").replace(Se,function(e){return Ce[e]}).replace(Ae,function(e){return"_x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+"_"})}function Be(e){return _e(e).replace(/ /g,"_x0020_")}var Te=/[\u0000-\u001f]/g
function ye(e){return(e+"").replace(Se,function(e){return Ce[e]}).replace(/\n/g,"<br/>").replace(Te,function(e){return"&#x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+";"})}var ke=function(){var t=/&#(\d+);/g
function r(e,t){return String.fromCharCode(parseInt(t,10))}return function(e){return e.replace(t,r)}}(),xe=function(e){return e.replace(/(\r\n|[\r\n])/g,"&#10;")}
function Ie(e){switch(e){case 1:case!0:case"1":case"true":case"TRUE":return!0
default:return!1}}var Re=function(e){for(var t="",r=0,n=0,a=0,s=0,i=0,o=0;r<e.length;)(n=e.charCodeAt(r++))<128?t+=String.fromCharCode(n):(a=e.charCodeAt(r++),191<n&&n<224?(i=(31&n)<<6,i|=63&a,t+=String.fromCharCode(i)):(s=e.charCodeAt(r++),n<240?t+=String.fromCharCode((15&n)<<12|(63&a)<<6|63&s):(o=((7&n)<<18|(63&a)<<12|(63&s)<<6|63&(i=e.charCodeAt(r++)))-65536,t+=String.fromCharCode(55296+(o>>>10&1023)),t+=String.fromCharCode(56320+(1023&o)))))
return t},Oe=function(e){for(var t=[],r=0,n=0,a=0;r<e.length;)switch(n=e.charCodeAt(r++),!0){case n<128:t.push(String.fromCharCode(n))
break
case n<2048:t.push(String.fromCharCode(192+(n>>6))),t.push(String.fromCharCode(128+(63&n)))
break
case 55296<=n&&n<57344:n-=55296,a=e.charCodeAt(r++)-56320+(n<<10),t.push(String.fromCharCode(240+(a>>18&7))),t.push(String.fromCharCode(144+(a>>12&63))),t.push(String.fromCharCode(128+(a>>6&63))),t.push(String.fromCharCode(128+(63&a)))
break
default:t.push(String.fromCharCode(224+(n>>12))),t.push(String.fromCharCode(128+(n>>6&63))),t.push(String.fromCharCode(128+(63&n)))}return t.join("")}
if(ee){var De=function(e){var t,r,n,a=ff.alloc(2*e.length),s=1,i=0,o=0
for(r=0;r<e.length;r+=s)s=1,(n=e.charCodeAt(r))<128?t=n:n<224?(t=64*(31&n)+(63&e.charCodeAt(r+1)),s=2):n<240?(t=4096*(15&n)+64*(63&e.charCodeAt(r+1))+(63&e.charCodeAt(r+2)),s=3):(s=4,t=262144*(7&n)+4096*(63&e.charCodeAt(r+1))+64*(63&e.charCodeAt(r+2))+(63&e.charCodeAt(r+3)),o=55296+((t-=65536)>>>10&1023),t=56320+(1023&t)),0!==o&&(a[i++]=255&o,a[i++]=o>>>8,o=0),a[i++]=t%256,a[i++]=t>>>8
return a.slice(0,i).toString("ucs2")},Fe="foo bar bazâð£"
Re(Fe)==De(Fe)&&(Re=De)
var Pe=function(e){return s(e,"binary").toString("utf8")}
Re(Fe)==Pe(Fe)&&(Re=Pe),Oe=function(e){return s(e,"utf8").toString("binary")}}var Ne,Le,Me,Ue=(Ne={},function(e,t){var r=e+"|"+(t||"")
return Ne[r]?Ne[r]:Ne[r]=new RegExp("<(?:\\w+:)?"+e+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+e+">",t||"")}),He=(Le=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(e){return[new RegExp("&"+e[0]+";","g"),e[1]]}),function(e){for(var t=e.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,"\n").replace(/<[^>]*>/g,""),r=0;r<Le.length;++r)t=t.replace(Le[r][0],Le[r][1])
return t}),We=(Me={},function(e){return void 0!==Me[e]?Me[e]:Me[e]=new RegExp("<(?:vt:)?"+e+">([\\s\\S]*?)</(?:vt:)?"+e+">","g")}),Ve=/<\/?(?:vt:)?variant>/g,ze=/<(?:vt:)([^>]*)>([\s\S]*)</
function Xe(e,t){var r=ve(e),n=e.match(We(r.baseType))||[],a=[]
if(n.length==r.size)return n.forEach(function(e){var t=e.replace(Ve,"").match(ze)
t&&a.push({v:Re(t[2]),t:t[1]})}),a
if(t.WTF)throw new Error("unexpected vector length "+n.length+" != "+r.size)
return a}var Ge=/(^\s|\s$|\n)/
function je(e,t){return"<"+e+(t.match(Ge)?' xml:space="preserve"':"")+">"+t+"</"+e+">"}function Ye(t){return me(t).map(function(e){return" "+e+'="'+t[e]+'"'}).join("")}function Ke(e,t,r){return"<"+e+(null!=r?Ye(r):"")+(null!=t?(t.match(Ge)?' xml:space="preserve"':"")+">"+t+"</"+e:"/")+">"}function $e(e,t){try{return e.toISOString().replace(/\.\d*/,"")}catch(e){if(t)throw e}return""}var Ze,Qe,Je={dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",mx:"http://schemas.microsoft.com/office/mac/excel/2008/main",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",sjs:"http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema",main:["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"]},qe={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",ss:"urn:schemas-microsoft-com:office:spreadsheet",dt:"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml",html:"http://www.w3.org/TR/REC-html40"},et=function(e){for(var t=[],r=0;r<e[0].length;++r)if(e[0][r])for(var n=0,a=e[0][r].length;n<a;n+=10240)t.push.apply(t,e[0][r].slice(n,n+10240))
return t},tt=et,rt=function(e,t,r){for(var n=[],a=t;a<r;a+=2)n.push(String.fromCharCode(Ct(e,a)))
return n.join("").replace(oe,"")},nt=rt,at=function(e,t,r){for(var n=[],a=t;a<t+r;++a)n.push(("0"+e[a].toString(16)).slice(-2))
return n.join("")},st=at,it=function(e,t,r){for(var n=[],a=t;a<r;a++)n.push(String.fromCharCode(wt(e,a)))
return n.join("")},ot=it,lt=function(e,t){var r=St(e,t)
return 0<r?it(e,t+4,t+4+r-1):""},ct=lt,ft=function(e,t){var r=St(e,t)
return 0<r?it(e,t+4,t+4+r-1):""},ht=ft,ut=function(e,t){var r=2*St(e,t)
return 0<r?it(e,t+4,t+4+r-1):""},dt=ut
Ze=Qe=function(e,t){var r=St(e,t)
return 0<r?rt(e,t+4,t+4+r):""}
var pt,gt,mt=function(e,t){var r=St(e,t)
return 0<r?it(e,t+4,t+4+r):""},bt=mt
pt=gt=function(e,t){return function(e,t){for(var r=1-2*(e[t+7]>>>7),n=((127&e[t+7])<<4)+(e[t+6]>>>4&15),a=15&e[t+6],s=5;0<=s;--s)a=256*a+e[t+s]
return 2047==n?0==a?r*(1/0):NaN:(0==n?n=-1022:(n-=1023,a+=Math.pow(2,52)),r*Math.pow(2,n-52)*a)}(e,t)}
var vt=function(e){return Array.isArray(e)}
ee&&(rt=function(e,t,r){return ff.isBuffer(e)?e.toString("utf16le",t,r).replace(oe,""):nt(e,t,r)},at=function(e,t,r){return ff.isBuffer(e)?e.toString("hex",t,t+r):st(e,t,r)},lt=function(e,t){if(!ff.isBuffer(e))return ct(e,t)
var r=e.readUInt32LE(t)
return 0<r?e.toString("utf8",t+4,t+4+r-1):""},ft=function(e,t){if(!ff.isBuffer(e))return ht(e,t)
var r=e.readUInt32LE(t)
return 0<r?e.toString("utf8",t+4,t+4+r-1):""},ut=function(e,t){if(!ff.isBuffer(e))return dt(e,t)
var r=2*e.readUInt32LE(t)
return e.toString("utf16le",t+4,t+4+r-1)},Ze=function(e,t){if(!ff.isBuffer(e))return Qe(e,t)
var r=e.readUInt32LE(t)
return e.toString("utf16le",t+4,t+4+r)},mt=function(e,t){if(!ff.isBuffer(e))return bt(e,t)
var r=e.readUInt32LE(t)
return e.toString("utf8",t+4,t+4+r)},it=function(e,t,r){return ff.isBuffer(e)?e.toString("utf8",t,r):ot(e,t,r)},et=function(e){return 0<e[0].length&&ff.isBuffer(e[0][0])?ff.concat(e[0]):tt(e)},ie=function(e){return ff.isBuffer(e[0])?ff.concat(e):[].concat.apply([],e)},pt=function(e,t){return ff.isBuffer(e)?e.readDoubleLE(t):gt(e,t)},vt=function(e){return ff.isBuffer(e)||Array.isArray(e)}),"undefined"!=typeof cptable&&(rt=function(e,t,r){return cptable.utils.decode(1200,e.slice(t,r)).replace(oe,"")},it=function(e,t,r){return cptable.utils.decode(65001,e.slice(t,r))},lt=function(e,t){var r=St(e,t)
return 0<r?cptable.utils.decode(a,e.slice(t+4,t+4+r-1)):""},ft=function(e,t){var r=St(e,t)
return 0<r?cptable.utils.decode(u,e.slice(t+4,t+4+r-1)):""},ut=function(e,t){var r=2*St(e,t)
return 0<r?cptable.utils.decode(1200,e.slice(t+4,t+4+r-1)):""},Ze=function(e,t){var r=St(e,t)
return 0<r?cptable.utils.decode(1200,e.slice(t+4,t+4+r)):""},mt=function(e,t){var r=St(e,t)
return 0<r?cptable.utils.decode(65001,e.slice(t+4,t+4+r)):""})
var wt=function(e,t){return e[t]},Ct=function(e,t){return 256*e[t+1]+e[t]},Et=function(e,t){var r=256*e[t+1]+e[t]
return r<32768?r:-1*(65535-r+1)},St=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]},At=function(e,t){return e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]},_t=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}
function Bt(e,t){var r,n,a,s,i,o,l="",c=[]
switch(t){case"dbcs":if(o=this.l,ee&&ff.isBuffer(this))l=this.slice(this.l,this.l+2*e).toString("utf16le")
else for(i=0;i<e;++i)l+=String.fromCharCode(Ct(this,o)),o+=2
e*=2
break
case"utf8":l=it(this,this.l,this.l+e)
break
case"utf16le":e*=2,l=rt(this,this.l,this.l+e)
break
case"wstr":if("undefined"==typeof cptable)return Bt.call(this,e,"dbcs")
l=cptable.utils.decode(u,this.slice(this.l,this.l+2*e)),e*=2
break
case"lpstr-ansi":l=lt(this,this.l),e=4+St(this,this.l)
break
case"lpstr-cp":l=ft(this,this.l),e=4+St(this,this.l)
break
case"lpwstr":l=ut(this,this.l),e=4+2*St(this,this.l)
break
case"lpp4":e=4+St(this,this.l),l=Ze(this,this.l),2&e&&(e+=2)
break
case"8lpp4":e=4+St(this,this.l),l=mt(this,this.l),3&e&&(e+=4-(3&e))
break
case"cstr":for(e=0,l="";0!==(a=wt(this,this.l+e++));)c.push(p(a))
l=c.join("")
break
case"_wstr":for(e=0,l="";0!==(a=Ct(this,this.l+e));)c.push(p(a)),e+=2
e+=2,l=c.join("")
break
case"dbcs-cont":for(l="",o=this.l,i=0;i<e;++i){if(this.lens&&-1!==this.lens.indexOf(o))return a=wt(this,o),this.l=o+1,s=Bt.call(this,e-i,a?"dbcs-cont":"sbcs-cont"),c.join("")+s
c.push(p(Ct(this,o))),o+=2}l=c.join(""),e*=2
break
case"cpstr":if("undefined"!=typeof cptable){l=cptable.utils.decode(u,this.slice(this.l,this.l+e))
break}case"sbcs-cont":for(l="",o=this.l,i=0;i!=e;++i){if(this.lens&&-1!==this.lens.indexOf(o))return a=wt(this,o),this.l=o+1,s=Bt.call(this,e-i,a?"dbcs-cont":"sbcs-cont"),c.join("")+s
c.push(p(wt(this,o))),o+=1}l=c.join("")
break
default:switch(e){case 1:return r=wt(this,this.l),this.l++,r
case 2:return r=("i"===t?Et:Ct)(this,this.l),this.l+=2,r
case 4:case-4:return"i"===t||0==(128&this[this.l+3])?(r=(0<e?At:_t)(this,this.l),this.l+=4,r):(n=St(this,this.l),this.l+=4,n)
case 8:case-8:if("f"===t)return n=8==e?pt(this,this.l):pt([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,n
e=8
case 16:l=at(this,this.l,e)}}return this.l+=e,l}var Tt=function(e,t,r){e[r]=255&t,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24&255},yt=function(e,t,r){e[r]=255&t,e[r+1]=t>>8&255,e[r+2]=t>>16&255,e[r+3]=t>>24&255},kt=function(e,t,r){e[r]=255&t,e[r+1]=t>>>8&255}
function xt(e,t,r){var n=0,a=0
if("dbcs"===r){for(a=0;a!=t.length;++a)kt(this,t.charCodeAt(a),this.l+2*a)
n=2*t.length}else if("sbcs"===r){for(t=t.replace(/[^\x00-\x7F]/g,"_"),a=0;a!=t.length;++a)this[this.l+a]=255&t.charCodeAt(a)
n=t.length}else{if("hex"===r){for(;a<e;++a)this[this.l++]=parseInt(t.slice(2*a,2*a+2),16)||0
return this}if("utf16le"===r){var s=Math.min(this.l+e,this.length)
for(a=0;a<Math.min(t.length,e);++a){var i=t.charCodeAt(a)
this[this.l++]=255&i,this[this.l++]=i>>8}for(;this.l<s;)this[this.l++]=0
return this}switch(e){case 1:n=1,this[this.l]=255&t
break
case 2:n=2,this[this.l]=255&t,t>>>=8,this[this.l+1]=255&t
break
case 3:n=3,this[this.l]=255&t,t>>>=8,this[this.l+1]=255&t,t>>>=8,this[this.l+2]=255&t
break
case 4:n=4,Tt(this,t,this.l)
break
case 8:if(n=8,"f"===r){!function(e,t,r){var n=(t<0||1/t==-1/0?1:0)<<7,a=0,s=0,i=n?-t:t
isFinite(i)?0==i?a=s=0:(a=Math.floor(Math.log(i)/Math.LN2),s=i*Math.pow(2,52-a),a<=-1023&&(!isFinite(s)||s<Math.pow(2,52))?a=-1022:(s-=Math.pow(2,52),a+=1023)):(a=2047,s=isNaN(t)?26985:0)
for(var o=0;o<=5;++o,s/=256)e[r+o]=255&s
e[r+6]=(15&a)<<4|15&s,e[r+7]=a>>4|n}(this,t,this.l)
break}case 16:break
case-4:n=4,yt(this,t,this.l)}}return this.l+=n,this}function It(e,t){var r=at(this,this.l,e.length>>1)
if(r!==e)throw new Error(t+"Expected "+e+" saw "+r)
this.l+=e.length>>1}function Rt(e,t){e.l=t,e.read_shift=Bt,e.chk=It,e.write_shift=xt}function Ot(e,t){e.l+=t}function Dt(e){var t=te(e)
return Rt(t,0),t}function Ft(e,t,r){if(e){var n,a,s
Rt(e,e.l||0)
for(var i=e.length,o=0,l=0;e.l<i;){128&(o=e.read_shift(1))&&(o=(127&o)+((127&e.read_shift(1))<<7))
var c=Zl[o]||Zl[65535]
for(s=127&(n=e.read_shift(1)),a=1;a<4&&128&n;++a)s+=(127&(n=e.read_shift(1)))<<7*a
l=e.l+s
var f=(c.f||Ot)(e,s,r)
if(e.l=l,t(f,c.n,o))return}}}function Pt(){var e=[],t=ee?256:2048,r=function(e){var t=Dt(e)
return Rt(t,0),t},n=r(t),a=function(){n&&(n.length>n.l&&((n=n.slice(0,n.l)).l=n.length),0<n.length&&e.push(n),n=null)},s=function(e){return n&&e<n.length-n.l?n:(a(),n=r(Math.max(e+1,t)))}
return{next:s,push:function(e){a(),null==(n=e).l&&(n.l=n.length),s(t)},end:function(){return a(),et([e])},_bufs:e}}function Nt(e,t,r,n){var a,s=+Ql[t]
if(!isNaN(s)){n||(n=Zl[s].p||(r||[]).length||0),a=1+(128<=s?1:0)+1,128<=n&&++a,16384<=n&&++a,2097152<=n&&++a
var i=e.next(a)
s<=127?i.write_shift(1,s):(i.write_shift(1,128+(127&s)),i.write_shift(1,s>>7))
for(var o=0;4!=o;++o){if(!(128<=n)){i.write_shift(1,n)
break}i.write_shift(1,128+(127&n)),n>>=7}0<n&&vt(r)&&e.push(r)}}function Lt(e,t,r){var n=be(e)
if(t.s?(n.cRel&&(n.c+=t.s.c),n.rRel&&(n.r+=t.s.r)):(n.cRel&&(n.c+=t.c),n.rRel&&(n.r+=t.r)),!r||r.biff<12){for(;256<=n.c;)n.c-=256
for(;65536<=n.r;)n.r-=65536}return n}function Mt(e,t,r){var n=be(e)
return n.s=Lt(n.s,t.s,r),n.e=Lt(n.e,t.s,r),n}function Ut(e,t){e.cRel&&e.c<0&&((e=be(e)).c+=8<t?16384:256),e.rRel&&e.r<0&&((e=be(e)).r+=8<t?1048576:5<t?65536:16384)
var r=Yt(e)
return 0===e.cRel&&(r=r.replace(/^([A-Z])/,"$$$1")),0===e.rRel&&(r=r.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")),r}function Ht(e,t){return 0!=e.s.r||e.s.rRel||e.e.r!=(12<=t.biff?1048575:8<=t.biff?65536:16384)||e.e.rRel?0!=e.s.c||e.s.cRel||e.e.c!=(12<=t.biff?65535:255)||e.e.cRel?Ut(e.s,t.biff)+":"+Ut(e.e,t.biff):(e.s.rRel?"":"$")+Vt(e.s.r)+":"+(e.e.rRel?"":"$")+Vt(e.e.r):(e.s.cRel?"":"$")+Xt(e.s.c)+":"+(e.e.cRel?"":"$")+Xt(e.e.c)}function Wt(e){return parseInt(e.replace(/\$(\d+)$/,"$1"),10)-1}function Vt(e){return""+(e+1)}function zt(e){for(var t=e.replace(/^\$([A-Z])/,"$1"),r=0,n=0;n!==t.length;++n)r=26*r+t.charCodeAt(n)-64
return r-1}function Xt(e){var t=""
for(++e;e;e=Math.floor((e-1)/26))t=String.fromCharCode((e-1)%26+65)+t
return t}function Gt(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function jt(e){var t=Gt(e)
return{c:zt(t[0]),r:Wt(t[1])}}function Yt(e){return Xt(e.c)+Vt(e.r)}function Kt(e){var t=e.split(":").map(jt)
return{s:t[0],e:t[t.length-1]}}function $t(e,t){return void 0===t||"number"==typeof t?$t(e.s,e.e):("string"!=typeof e&&(e=Yt(e)),"string"!=typeof t&&(t=Yt(t)),e==t?e:e+":"+t)}function Zt(e){var t={s:{c:0,r:0},e:{c:0,r:0}},r=0,n=0,a=0,s=e.length
for(r=0;n<s&&!((a=e.charCodeAt(n)-64)<1||26<a);++n)r=26*r+a
for(t.s.c=--r,r=0;n<s&&!((a=e.charCodeAt(n)-48)<0||9<a);++n)r=10*r+a
if(t.s.r=--r,n===s||58===e.charCodeAt(++n))return t.e.c=t.s.c,t.e.r=t.s.r,t
for(r=0;n!=s&&!((a=e.charCodeAt(n)-64)<1||26<a);++n)r=26*r+a
for(t.e.c=--r,r=0;n!=s&&!((a=e.charCodeAt(n)-48)<0||9<a);++n)r=10*r+a
return t.e.r=--r,t}function Qt(e,t){var r="d"==e.t&&t instanceof Date
if(null!=e.z)try{return e.w=de.format(e.z,r?j(t):t)}catch(e){}try{return e.w=de.format((e.XF||{}).numFmtId||(r?14:0),r?j(t):t)}catch(e){return""+t}}function Jt(e,t,r){return null==e||null==e.t||"z"==e.t?"":void 0!==e.w?e.w:("d"==e.t&&!e.z&&r&&r.dateNF&&(e.z=r.dateNF),Qt(e,null==t?e.v:t))}function qt(e,t){var r=t&&t.sheet?t.sheet:"Sheet1",n={}
return n[r]=e,{SheetNames:[r],Sheets:n}}function er(e,t,r){var n=r||{},a=e?Array.isArray(e):n.dense
null!=ue&&null==a&&(a=ue)
var s=e||(a?[]:{}),i=0,o=0
if(s&&null!=n.origin)if("number"==typeof n.origin)i=n.origin
else{var l="string"==typeof n.origin?jt(n.origin):n.origin
i=l.r,o=l.c}var c={s:{c:1e7,r:1e7},e:{c:0,r:0}}
if(s["!ref"]){var f=Zt(s["!ref"])
c.s.c=f.s.c,c.s.r=f.s.r,c.e.c=Math.max(c.e.c,f.e.c),c.e.r=Math.max(c.e.r,f.e.r),-1==i&&(c.e.r=i=f.e.r+1)}for(var h=0;h!=t.length;++h)if(t[h]){if(!Array.isArray(t[h]))throw new Error("aoa_to_sheet expects an array of arrays")
for(var u=0;u!=t[h].length;++u)if(void 0!==t[h][u]){var d={v:t[h][u]},p=i+h,g=o+u
if(c.s.r>p&&(c.s.r=p),c.s.c>g&&(c.s.c=g),c.e.r<p&&(c.e.r=p),c.e.c<g&&(c.e.c=g),!t[h][u]||"object"!==uf(t[h][u])||Array.isArray(t[h][u])||t[h][u]instanceof Date)if(Array.isArray(d.v)&&(d.f=t[h][u][1],d.v=d.v[0]),null===d.v)if(d.f)d.t="n"
else{if(!n.cellStubs)continue
d.t="z"}else"number"==typeof d.v?d.t="n":"boolean"==typeof d.v?d.t="b":d.v instanceof Date?(d.z=n.dateNF||de._table[14],n.cellDates?(d.t="d",d.w=de.format(d.z,j(d.v))):(d.t="n",d.v=j(d.v),d.w=de.format(d.z,d.v))):d.t="s"
else d=t[h][u]
a?(s[p]||(s[p]=[]),s[p][g]=d):s[Yt({c:g,r:p})]=d}}return c.s.c<1e7&&(s["!ref"]=$t(c)),s}function tr(e,t){return er(null,e,t)}function rr(e,t){return t||(t=Dt(4)),t.write_shift(4,e),t}function nr(e){var t=e.read_shift(4)
return 0===t?"":e.read_shift(t,"dbcs")}function ar(e,t){var r=!1
return null==t&&(r=!0,t=Dt(4+2*e.length)),t.write_shift(4,e.length),0<e.length&&t.write_shift(0,e,"dbcs"),r?t.slice(0,t.l):t}function sr(e,t){var r,n=e.l,a=e.read_shift(1),s=nr(e),i=[],o={t:s,h:s}
if(0!=(1&a)){for(var l=e.read_shift(4),c=0;c!=l;++c)i.push({ich:(r=e).read_shift(2),ifnt:r.read_shift(2)})
o.r=i}else o.r=[{ich:0,ifnt:0}]
return e.l=n+t,o}!function(e,t){var r
if(void 0!==t)r=t
else try{r=pf(23)}catch(e){r=null}e.rc4=function(e,t){var r=new Array(256),n=0,a=0,s=0,i=0
for(a=0;256!=a;++a)r[a]=a
for(a=0;256!=a;++a)s=s+r[a]+e[a%e.length].charCodeAt(0)&255,i=r[a],r[a]=r[s],r[s]=i
a=s=0
var o=ff(t.length)
for(n=0;n!=t.length;++n)s=(s+r[a=a+1&255])%256,i=r[a],r[a]=r[s],r[s]=i,o[n]=t[n]^r[r[a]+r[s]&255]
return o},e.md5=function(e){if(!r)throw new Error("Unsupported crypto")
return r.createHash("md5").update(e).digest("hex")}}({},"undefined"!=typeof crypto?crypto:void 0)
var ir=sr
function or(e,t){var r,n,a=!1
return null==t&&(a=!0,t=Dt(23+4*e.t.length)),t.write_shift(1,1),ar(e.t,t),t.write_shift(4,1),r={ich:0,ifnt:0},(n=t)||(n=Dt(4)),n.write_shift(2,r.ich||0),n.write_shift(2,r.ifnt||0),a?t.slice(0,t.l):t}function lr(e){var t=e.read_shift(4),r=e.read_shift(2)
return r+=e.read_shift(1)<<16,e.l++,{c:t,iStyleRef:r}}function cr(e,t){return null==t&&(t=Dt(8)),t.write_shift(-4,e.c),t.write_shift(3,e.iStyleRef||e.s),t.write_shift(1,0),t}var fr=nr,hr=ar
function ur(e){var t=e.read_shift(4)
return 0===t||4294967295===t?"":e.read_shift(t,"dbcs")}function dr(e,t){var r=!1
return null==t&&(r=!0,t=Dt(127)),t.write_shift(4,0<e.length?e.length:4294967295),0<e.length&&t.write_shift(0,e,"dbcs"),r?t.slice(0,t.l):t}var pr=nr,gr=ur,mr=dr
function br(e){var t=e.slice(e.l,e.l+4),r=1&t[0],n=2&t[0]
e.l+=4,t[0]&=252
var a=0===n?pt([0,0,0,0,t[0],t[1],t[2],t[3]],0):At(t,0)>>2
return r?a/100:a}function vr(e){var t={s:{},e:{}}
return t.s.r=e.read_shift(4),t.e.r=e.read_shift(4),t.s.c=e.read_shift(4),t.e.c=e.read_shift(4),t}var wr=vr,Cr=function(e,t){return t||(t=Dt(16)),t.write_shift(4,e.s.r),t.write_shift(4,e.e.r),t.write_shift(4,e.s.c),t.write_shift(4,e.e.c),t}
function Er(e){return e.read_shift(8,"f")}function Sr(e,t){return(t||Dt(8)).write_shift(8,e,"f")}var Ar={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},_r=A(Ar)
function Br(e,t){if(t||(t=Dt(8)),!e||e.auto)return t.write_shift(4,0),t.write_shift(4,0),t
e.index?(t.write_shift(1,2),t.write_shift(1,e.index)):e.theme?(t.write_shift(1,6),t.write_shift(1,e.theme)):(t.write_shift(1,5),t.write_shift(1,0))
var r=e.tint||0
if(0<r?r*=32767:r<0&&(r*=32768),t.write_shift(2,r),e.rgb){var n=e.rgb||"FFFFFF"
t.write_shift(1,parseInt(n.slice(0,2),16)),t.write_shift(1,parseInt(n.slice(2,4),16)),t.write_shift(1,parseInt(n.slice(4,6),16)),t.write_shift(1,255)}else t.write_shift(2,0),t.write_shift(1,0),t.write_shift(1,0)
return t}function Tr(e,t){var r=e.read_shift(4)
switch(r){case 0:return""
case 4294967295:case 4294967294:return{2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"}[e.read_shift(4)]||""}if(400<r)throw new Error("Unsupported Clipboard: "+r.toString(16))
return e.l-=4,e.read_shift(0,1==t?"lpstr":"lpwstr")}var yr=2,kr=3,xr=12,Ir=81,Rr=[80,Ir],Or={1:{n:"CodePage",t:yr},2:{n:"Category",t:80},3:{n:"PresentationFormat",t:80},4:{n:"ByteCount",t:kr},5:{n:"LineCount",t:kr},6:{n:"ParagraphCount",t:kr},7:{n:"SlideCount",t:kr},8:{n:"NoteCount",t:kr},9:{n:"HiddenCount",t:kr},10:{n:"MultimediaClipCount",t:kr},11:{n:"ScaleCrop",t:11},12:{n:"HeadingPairs",t:4096|xr},13:{n:"TitlesOfParts",t:4126},14:{n:"Manager",t:80},15:{n:"Company",t:80},16:{n:"LinksUpToDate",t:11},17:{n:"CharacterCount",t:kr},19:{n:"SharedDoc",t:11},22:{n:"HyperlinksChanged",t:11},23:{n:"AppVersion",t:kr,p:"version"},24:{n:"DigSig",t:65},26:{n:"ContentType",t:80},27:{n:"ContentStatus",t:80},28:{n:"Language",t:80},29:{n:"Version",t:80},255:{}},Dr={1:{n:"CodePage",t:yr},2:{n:"Title",t:80},3:{n:"Subject",t:80},4:{n:"Author",t:80},5:{n:"Keywords",t:80},6:{n:"Comments",t:80},7:{n:"Template",t:80},8:{n:"LastAuthor",t:80},9:{n:"RevNumber",t:80},10:{n:"EditTime",t:64},11:{n:"LastPrinted",t:64},12:{n:"CreatedDate",t:64},13:{n:"ModifiedDate",t:64},14:{n:"PageCount",t:kr},15:{n:"WordCount",t:kr},16:{n:"CharCount",t:kr},17:{n:"Thumbnail",t:71},18:{n:"Application",t:80},19:{n:"DocSecurity",t:kr},255:{}},Fr={2147483648:{n:"Locale",t:19},2147483651:{n:"Behavior",t:19},1919054434:{}}
!function(){for(var e in Fr)Fr.hasOwnProperty(e)&&(Or[e]=Dr[e]=Fr[e])}()
var Pr,Nr=w(Or,"n"),Lr=w(Dr,"n"),Mr={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},Ur=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"],Hr=[0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(function(e){return[e>>16&255,e>>8&255,255&e]}),Wr={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.sheetMetadata":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"TODO","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"vba","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"},Vr=(me(Pr={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xlam:"application/vnd.ms-excel.addin.macroEnabled.main+xml",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}}).forEach(function(t){["xlsm","xlam"].forEach(function(e){Pr[t][e]||(Pr[t][e]=Pr[t].xlsx)})}),me(Pr).forEach(function(t){me(Pr[t]).forEach(function(e){Wr[Pr[t][e]]=t})}),Pr),zr=function(e){for(var t=[],r=me(e),n=0;n!==r.length;++n)null==t[e[r[n]]]&&(t[e[r[n]]]=[]),t[e[r[n]]].push(r[n])
return t}(Wr)
Je.CT="http://schemas.openxmlformats.org/package/2006/content-types"
var Xr=Ke("Types",null,{xmlns:Je.CT,"xmlns:xsd":Je.xsd,"xmlns:xsi":Je.xsi}),Gr=[["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels",zr.rels[0]]].map(function(e){return Ke("Default",null,{Extension:e[0],ContentType:e[1]})}),jr={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"}
function Yr(e){var t=e.lastIndexOf("/")
return e.slice(0,t+1)+"_rels/"+e.slice(t+1)+".rels"}function Kr(e,a){if(!e)return e
"/"!==a.charAt(0)&&(a="/"+a)
var s={},i={}
return(e.match(z)||[]).forEach(function(e){var t=ve(e)
if("<Relationship"===t[0]){var r={}
r.Type=t.Type,r.Target=t.Target,r.Id=t.Id,r.TargetMode=t.TargetMode
var n="External"===t.TargetMode?t.Target:H(t.Target,a)
s[n]=r,i[t.Id]=r}}),s["!id"]=i,s}Je.RELS="http://schemas.openxmlformats.org/package/2006/relationships"
var $r=Ke("Relationships",null,{xmlns:Je.RELS})
function Zr(t){var r=[W,$r]
return me(t["!id"]).forEach(function(e){r[r.length]=Ke("Relationship",null,t["!id"][e])}),2<r.length&&(r[r.length]="</Relationships>",r[1]=r[1].replace("/>",">")),r.join("")}function Qr(e,t,r,n,a){if(a||(a={}),e["!id"]||(e["!id"]={}),t<0)for(t=1;e["!id"]["rId"+t];++t);if(a.Id="rId"+t,a.Type=n,a.Target=r,a.Type==jr.HLINK&&(a.TargetMode="External"),e["!id"][a.Id])throw new Error("Cannot rewrite rId "+t)
return e["!id"][a.Id]=a,e[("/"+a.Target).replace("//","/")]=a,t}var Jr="application/vnd.oasis.opendocument.spreadsheet"
function qr(e,t,r){return['  <rdf:Description rdf:about="'+e+'">\n','    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/'+(r||"odf")+"#"+t+'"/>\n',"  </rdf:Description>\n"].join("")}var en,tn=(en='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS '+n.version+"</meta:generator></office:meta></office:document-meta>",function(){return en}),rn=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]]
Je.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/metadata/core-properties",jr.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"
var nn=function(){for(var e=new Array(rn.length),t=0;t<rn.length;++t){var r=rn[t],n="(?:"+r[0].slice(0,r[0].indexOf(":"))+":)"+r[0].slice(r[0].indexOf(":")+1)
e[t]=new RegExp("<"+n+"[^>]*>([\\s\\S]*?)</"+n+">")}return e}()
function an(e){var t={}
e=Re(e)
for(var r=0;r<rn.length;++r){var n=rn[r],a=e.match(nn[r])
null!=a&&0<a.length&&(t[n[1]]=a[1]),"date"===n[2]&&t[n[1]]&&(t[n[1]]=K(t[n[1]]))}return t}var sn=Ke("cp:coreProperties",null,{"xmlns:cp":Je.CORE_PROPS,"xmlns:dc":Je.dc,"xmlns:dcterms":Je.dcterms,"xmlns:dcmitype":Je.dcmitype,"xmlns:xsi":Je.xsi})
function on(e,t,r,n,a){null==a[e]&&null!=t&&""!==t&&(a[e]=t,n[n.length]=r?Ke(e,t,r):je(e,t))}var ln=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]]
function cn(e,t,r,n){var a=[]
if("string"==typeof e)a=Xe(e,n)
else for(var s=0;s<e.length;++s)a=a.concat(e[s].map(function(e){return{v:e}}))
var i="string"==typeof t?Xe(t,n).map(function(e){return e.v}):t,o=0,l=0
if(0<i.length)for(var c=0;c!==a.length;c+=2){switch(l=+a[c+1].v,a[c].v){case"Worksheets":case"工作表":case"Листы":case"أوراق العمل":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Regneark":case"Werkbladen":r.Worksheets=l,r.SheetNames=i.slice(o,o+l)
break
case"Named Ranges":case"名前付き一覧":case"Benannte Bereiche":case"Navngivne områder":r.NamedRanges=l,r.DefinedNames=i.slice(o,o+l)
break
case"Charts":case"Diagramme":r.Chartsheets=l,r.ChartNames=i.slice(o,o+l)}o+=l}}Je.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",jr.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"
var fn=Ke("Properties",null,{xmlns:Je.EXT_PROPS,"xmlns:vt":Je.vt})
Je.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",jr.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties"
var hn=/<[^>]+>[^<]*/g,un=Ke("Properties",null,{xmlns:Je.CUST_PROPS,"xmlns:vt":Je.vt})
function dn(t){var r=[W,un]
if(!t)return r.join("")
var n=1
return me(t).forEach(function(e){++n,r[r.length]=Ke("property",function(e){switch(uf(e)){case"string":return Ke("vt:lpwstr",e)
case"number":return Ke((0|e)==e?"vt:i4":"vt:r8",String(e))
case"boolean":return Ke("vt:bool",e?"true":"false")}if(e instanceof Date)return Ke("vt:filetime",$e(e))
throw new Error("Unable to serialize "+e)}(t[e]),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:n,name:e})}),2<r.length&&(r[r.length]="</Properties>",r[1]=r[1].replace("/>",">")),r.join("")}var pn={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},gn=E(pn)
function mn(e){var t=e.read_shift(4),r=e.read_shift(4)
return new Date(1e3*(r/1e7*Math.pow(2,32)+t/1e7-11644473600)).toISOString().replace(/\.000/,"")}function bn(e,t,r){var n=e.l,a=e.read_shift(0,"lpstr-cp")
if(r)for(;e.l-n&3;)++e.l
return a}function vn(e,t,r){var n=e.read_shift(0,"lpwstr")
return r&&(e.l+=4-(n.length+1&3)&3),n}function wn(e,t,r){return 31===t?vn(e):bn(e,0,r)}function Cn(e,t,r){return wn(e,t,!1===r?0:4)}function En(e){return function(e){for(var t=e.read_shift(4),r=[],n=0;n!=t;++n)r[n]=e.read_shift(0,"lpstr-cp").replace(oe,"")
return r}(e)}function Sn(e,t){for(var r=e.read_shift(4),n={},a=0;a!=r;++a){var s=e.read_shift(4),i=e.read_shift(4)
n[s]=e.read_shift(i,1200===t?"utf16le":"utf8").replace(oe,"").replace(le,"!"),1200===t&&i%2&&(e.l+=2)}return 3&e.l&&(e.l=e.l>>3<<2),n}function An(e){var t=e.read_shift(4),r=e.slice(e.l,e.l+t)
return e.l+=t,0<(3&t)&&(e.l+=4-(3&t)&3),r}function _n(e,t,r){var n,a,s,i=e.read_shift(2),o=r||{}
if(e.l+=2,t!==xr&&i!==t&&-1===Rr.indexOf(t))throw new Error("Expected type "+t+" saw "+i)
switch(t===xr?i:t){case 2:return n=e.read_shift(2,"i"),o.raw||(e.l+=2),n
case 3:return n=e.read_shift(4,"i")
case 11:return 0!==e.read_shift(4)
case 19:return n=e.read_shift(4)
case 30:return bn(e,0,4).replace(oe,"")
case 31:return vn(e)
case 64:return mn(e)
case 65:return An(e)
case 71:return(s={}).Size=(a=e).read_shift(4),a.l+=s.Size+3-(s.Size-1)%4,s
case 80:return Cn(e,i,!o.raw).replace(oe,"")
case 81:return function(e,t){if(!t)throw new Error("VtUnalignedString must have positive length")
return wn(e,t,0)}(e,i).replace(oe,"")
case 4108:return function(e){for(var t,r=e.read_shift(4),n=[],a=0;a!=r/2;++a)n.push([_n(t=e,Ir),_n(t,kr)])
return n}(e)
case 4126:return En(e)
default:throw new Error("TypedPropertyValue unrecognized type "+t+" "+i)}}function Bn(e,t){var r=Dt(4),n=Dt(4)
switch(r.write_shift(4,80==e?31:e),e){case 3:n.write_shift(-4,t)
break
case 5:(n=Dt(8)).write_shift(8,t,"f")
break
case 11:n.write_shift(4,t?1:0)
break
case 64:n=function(e){var t=("string"==typeof e?new Date(Date.parse(e)):e).getTime()/1e3+11644473600,r=t%Math.pow(2,32),n=(t-r)/Math.pow(2,32)
n*=1e7
var a=(r*=1e7)/Math.pow(2,32)|0
0<a&&(r%=Math.pow(2,32),n+=a)
var s=Dt(8)
return s.write_shift(4,r),s.write_shift(4,n),s}(t)
break
case 31:case 80:for((n=Dt(4+2*(t.length+1)+(t.length%2?0:2))).write_shift(4,t.length+1),n.write_shift(0,t,"dbcs");n.l!=n.length;)n.write_shift(1,0)
break
default:throw new Error("TypedPropertyValue unrecognized type "+e+" "+t)}return ie([r,n])}function Tn(e,t){var r=e.l,n=e.read_shift(4),a=e.read_shift(4),s=[],i=0,o=0,l=-1,c={}
for(i=0;i!=a;++i){var f=e.read_shift(4),h=e.read_shift(4)
s[i]=[f,h+r]}s.sort(function(e,t){return e[1]-t[1]})
var u={}
for(i=0;i!=a;++i){if(e.l!==s[i][1]){var d=!0
if(0<i&&t)switch(t[s[i-1][0]].t){case 2:e.l+2===s[i][1]&&(e.l+=2,d=!1)
break
case 80:case 4108:e.l<=s[i][1]&&(e.l=s[i][1],d=!1)}if((!t||0==i)&&e.l<=s[i][1]&&(d=!1,e.l=s[i][1]),d)throw new Error("Read Error: Expected address "+s[i][1]+" at "+e.l+" :"+i)}if(t){var p=t[s[i][0]]
if(u[p.n]=_n(e,p.t,{raw:!0}),"version"===p.p&&(u[p.n]=String(u[p.n]>>16)+"."+("0000"+String(65535&u[p.n])).slice(-4)),"CodePage"==p.n)switch(u[p.n]){case 0:u[p.n]=1252
case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:he(o=u[p.n]>>>0&65535)
break
default:throw new Error("Unsupported CodePage: "+u[p.n])}}else if(1===s[i][0]){if(o=u.CodePage=_n(e,yr),he(o),-1!==l){var g=e.l
e.l=s[l][1],c=Sn(e,o),e.l=g}}else if(0===s[i][0]){if(0===o){l=i,e.l=s[i+1][1]
continue}c=Sn(e,o)}else{var m,b=c[s[i][0]]
switch(e[e.l]){case 65:e.l+=4,m=An(e)
break
case 30:case 31:e.l+=4,m=Cn(e,e[e.l-4]).replace(/\u0000+$/,"")
break
case 3:e.l+=4,m=e.read_shift(4,"i")
break
case 19:e.l+=4,m=e.read_shift(4)
break
case 5:e.l+=4,m=e.read_shift(8,"f")
break
case 11:e.l+=4,m=Dn(e,4)
break
case 64:e.l+=4,m=K(mn(e))
break
default:throw new Error("unparsed value: "+e[e.l])}u[b]=m}}return e.l=r+n,u}var yn=["CodePage","Thumbnail","_PID_LINKBASE","_PID_HLINKS","SystemIdentifier","FMTID"].concat(["Worksheets","SheetNames","NamedRanges","DefinedNames","Chartsheets","ChartNames"])
function kn(e){switch(uf(e)){case"boolean":return 11
case"number":return(0|e)==e?3:5
case"string":return 31
case"object":if(e instanceof Date)return 64}return-1}function xn(e,t,r){var n=Dt(8),a=[],s=[],i=8,o=0,l=Dt(8),c=Dt(8)
if(l.write_shift(4,2),l.write_shift(4,1200),c.write_shift(4,1),s.push(l),a.push(c),i+=8+l.length,!t){(c=Dt(8)).write_shift(4,0),a.unshift(c)
var f=[Dt(4)]
for(f[0].write_shift(4,e.length),o=0;o<e.length;++o){var h=e[o][0]
for((l=Dt(8+2*(h.length+1)+(h.length%2?0:2))).write_shift(4,o+2),l.write_shift(4,h.length+1),l.write_shift(0,h,"dbcs");l.l!=l.length;)l.write_shift(1,0)
f.push(l)}l=ie(f),s.unshift(l),i+=8+l.length}for(o=0;o<e.length;++o)if((!t||t[e[o][0]])&&!(-1<yn.indexOf(e[o][0]))&&null!=e[o][1]){var u=e[o][1],d=0
if(t){var p=r[d=+t[e[o][0]]]
if("version"==p.p&&"string"==typeof u){var g=u.split(".")
u=(+g[0]<<16)+(+g[1]||0)}l=Bn(p.t,u)}else{var m=kn(u);-1==m&&(m=31,u=String(u)),l=Bn(m,u)}s.push(l),(c=Dt(8)).write_shift(4,t?d:2+o),a.push(c),i+=8+l.length}var b=8*(s.length+1)
for(o=0;o<s.length;++o)a[o].write_shift(4,b),b+=s[o].length
return n.write_shift(4,i),n.write_shift(4,s.length),ie([n].concat(a).concat(s))}function In(e,t,r){var n=e.content
if(!n)return{}
Rt(n,0)
var a,s,i,o,l=0
n.chk("feff","Byte Order: "),n.read_shift(2)
var c=n.read_shift(4),f=n.read_shift(16)
if(f!==ge.utils.consts.HEADER_CLSID&&f!==r)throw new Error("Bad PropertySet CLSID "+f)
if(1!==(a=n.read_shift(4))&&2!==a)throw new Error("Unrecognized #Sets: "+a)
if(s=n.read_shift(16),o=n.read_shift(4),1===a&&o!==n.l)throw new Error("Length mismatch: "+o+" !== "+n.l)
2===a&&(i=n.read_shift(16),l=n.read_shift(4))
var h,u=Tn(n,t),d={SystemIdentifier:c}
for(var p in u)d[p]=u[p]
if(d.FMTID=s,1===a)return d
if(l-n.l==2&&(n.l+=2),n.l!==l)throw new Error("Length mismatch 2: "+n.l+" !== "+l)
try{h=Tn(n,null)}catch(e){}for(p in h)d[p]=h[p]
return d.FMTID=[s,i],d}function Rn(e,t,r,n,a,s){var i=Dt(a?68:48),o=[i]
i.write_shift(2,65534),i.write_shift(2,0),i.write_shift(4,842412599),i.write_shift(16,ge.utils.consts.HEADER_CLSID,"hex"),i.write_shift(4,a?2:1),i.write_shift(16,t,"hex"),i.write_shift(4,a?68:48)
var l=xn(e,r,n)
if(o.push(l),a){var c=xn(a,null,null)
i.write_shift(16,s,"hex"),i.write_shift(4,68+l.length),o.push(c)}return ie(o)}function On(e,t){return e.read_shift(t),null}function Dn(e,t){return 1===e.read_shift(t)}function Fn(e,t){return t||(t=Dt(2)),t.write_shift(2,+!!e),t}function Pn(e){return e.read_shift(2,"u")}function Nn(e,t){return t||(t=Dt(2)),t.write_shift(2,e),t}function Ln(e,t){return function(e,t,r){for(var n=[],a=e.l+t;e.l<a;)n.push(r(e,a-e.l))
if(a!==e.l)throw new Error("Slurp error")
return n}(e,t,Pn)}function Mn(e,t,r){var n=e.read_shift(r&&12<=r.biff?2:1),a="sbcs-cont",s=u
r&&8<=r.biff&&(u=1200),r&&8!=r.biff?12==r.biff&&(a="wstr"):e.read_shift(1)&&(a="dbcs-cont"),2<=r.biff&&r.biff<=5&&(a="cpstr")
var i=n?e.read_shift(n,a):""
return u=s,i}function Un(e){var t=u
u=1200
var r,n=e.read_shift(2),a=e.read_shift(1),s=4&a,i=8&a,o=1+(1&a),l=0,c={}
i&&(l=e.read_shift(2)),s&&(r=e.read_shift(4))
var f=2==o?"dbcs-cont":"sbcs-cont",h=0===n?"":e.read_shift(n,f)
return i&&(e.l+=4*l),s&&(e.l+=r),c.t=h,i||(c.raw="<t>"+c.t+"</t>",c.r=c.t),u=t,c}function Hn(e,t,r){if(r){if(2<=r.biff&&r.biff<=5)return e.read_shift(t,"cpstr")
if(12<=r.biff)return e.read_shift(t,"dbcs-cont")}return 0===e.read_shift(1)?e.read_shift(t,"sbcs-cont"):e.read_shift(t,"dbcs-cont")}function Wn(e,t,r){var n=e.read_shift(r&&2==r.biff?1:2)
return 0===n?(e.l++,""):Hn(e,n,r)}function Vn(e,t,r){if(5<r.biff)return Wn(e,0,r)
var n=e.read_shift(1)
return 0===n?(e.l++,""):e.read_shift(n,r.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function zn(e,t,r){return r||(r=Dt(3+2*e.length)),r.write_shift(2,e.length),r.write_shift(1,1),r.write_shift(31,e,"utf16le"),r}function Xn(e,t){var r=e.read_shift(16)
switch(r){case"e0c9ea79f9bace118c8200aa004ba90b":return function(e){var t=e.read_shift(4),r=e.l,n=!1
24<t&&(e.l+=t-24,"795881f43b1d7f48af2c825dc4852763"===e.read_shift(16)&&(n=!0),e.l=r)
var a=e.read_shift((n?t-24:t)>>1,"utf16le").replace(oe,"")
return n&&(e.l+=24),a}(e)
case"0303000000000000c000000000000046":return function(e){e.l+=2
var t=e.read_shift(0,"lpstr-ansi")
if(e.l+=2,57005!=e.read_shift(2))throw new Error("Bad FileMoniker")
if(0===e.read_shift(4))return t.replace(/\\/g,"/")
var r=e.read_shift(4)
if(3!=e.read_shift(2))throw new Error("Bad FileMoniker")
return e.read_shift(r>>1,"utf16le").replace(oe,"")}(e)
default:throw new Error("Unsupported Moniker "+r)}}function Gn(e){var t=e.read_shift(4)
return 0<t?e.read_shift(t,"utf16le").replace(oe,""):""}function jn(e){return[e.read_shift(1),e.read_shift(1),e.read_shift(1),e.read_shift(1)]}function Yn(e,t){var r=jn(e)
return r[3]=0,r}function Kn(e){return{r:e.read_shift(2),c:e.read_shift(2),ixfe:e.read_shift(2)}}function $n(e,t,r,n){return n||(n=Dt(6)),n.write_shift(2,e),n.write_shift(2,t),n.write_shift(2,r||0),n}function Zn(e){return[e.read_shift(2),br(e)]}function Qn(e){var t=e.read_shift(2),r=e.read_shift(2)
return{s:{c:e.read_shift(2),r:t},e:{c:e.read_shift(2),r:r}}}function Jn(e,t){return t||(t=Dt(8)),t.write_shift(2,e.s.r),t.write_shift(2,e.e.r),t.write_shift(2,e.s.c),t.write_shift(2,e.e.c),t}function qn(e){var t=e.read_shift(2),r=e.read_shift(2)
return{s:{c:e.read_shift(1),r:t},e:{c:e.read_shift(1),r:r}}}var ea=qn
function ta(e){e.l+=4
var t=e.read_shift(2),r=e.read_shift(2),n=e.read_shift(2)
return e.l+=12,[r,t,n]}function ra(e){e.l+=2,e.l+=e.read_shift(2)}var na={0:ra,4:ra,5:ra,6:ra,7:function(e){return e.l+=4,e.cf=e.read_shift(2),{}},8:ra,9:ra,10:ra,11:ra,12:ra,13:function(e){var t={}
return e.l+=4,e.l+=16,t.fSharedNote=e.read_shift(2),e.l+=4,t},14:ra,15:ra,16:ra,17:ra,18:ra,19:ra,20:ra,21:ta}
function aa(e,t){var r={BIFFVer:0,dt:0}
switch(r.BIFFVer=e.read_shift(2),2<=(t-=2)&&(r.dt=e.read_shift(2),e.l-=2),r.BIFFVer){case 1536:case 1280:case 1024:case 768:case 512:case 2:case 7:break
default:if(6<t)throw new Error("Unexpected BIFF Ver "+r.BIFFVer)}return e.read_shift(t),r}function sa(e,t,r){var n=1536,a=16
switch(r.bookType){case"biff8":break
case"biff5":n=1280,a=8
break
case"biff4":n=4,a=6
break
case"biff3":n=3,a=6
break
case"biff2":n=2,a=4
break
case"xla":break
default:throw new Error("unsupported BIFF version")}var s=Dt(a)
return s.write_shift(2,n),s.write_shift(2,t),4<a&&s.write_shift(2,29282),6<a&&s.write_shift(2,1997),8<a&&(s.write_shift(2,49161),s.write_shift(2,1),s.write_shift(2,1798),s.write_shift(2,0)),s}function ia(e,t){var r=!t||8<=t.biff?2:1,n=Dt(8+r*e.name.length)
n.write_shift(4,e.pos),n.write_shift(1,e.hs||0),n.write_shift(1,e.dt),n.write_shift(1,e.name.length),8<=t.biff&&n.write_shift(1,1),n.write_shift(r*e.name.length,e.name,t.biff<8?"sbcs":"utf16le")
var a=n.slice(0,n.l)
return a.l=n.l,a}function oa(e,t,r){var n=0
r&&2==r.biff||(n=e.read_shift(2))
var a=e.read_shift(2)
return r&&2==r.biff&&(n=1-(a>>15),a&=32767),[{Unsynced:1&n,DyZero:(2&n)>>1,ExAsc:(4&n)>>2,ExDsc:(8&n)>>3},a]}function la(e,t,r,n){var a=r&&5==r.biff
n||(n=Dt(a?3+t.length:5+2*t.length)),n.write_shift(2,e),n.write_shift(a?1:2,t.length),a||n.write_shift(1,1),n.write_shift((a?1:2)*t.length,t,a?"sbcs":"utf16le")
var s=n.length>n.l?n.slice(0,n.l):n
return null==s.l&&(s.l=s.length),s}var ca=Vn
function fa(e,t,r){var n=e.l+t,a=8!=r.biff&&r.biff?2:4,s=e.read_shift(a),i=e.read_shift(a),o=e.read_shift(2),l=e.read_shift(2)
return e.l=n,{s:{r:s,c:o},e:{r:i,c:l}}}function ha(e,t,r,n){var a=r&&5==r.biff
return n||(n=Dt(a?16:20)),n.write_shift(2,0),e.style?(n.write_shift(2,e.numFmtId||0),n.write_shift(2,65524)):(n.write_shift(2,e.numFmtId||0),n.write_shift(2,t<<4)),n.write_shift(4,0),n.write_shift(4,0),a||n.write_shift(4,0),n.write_shift(2,0),n}function ua(e,t,r){var n=Kn(e)
2==r.biff&&++e.l
var a,s,i=(s=(a=e).read_shift(1),1===a.read_shift(1)?s:1===s)
return n.val=i,n.t=!0===i||!1===i?"b":"e",n}function da(e,t,r,n,a,s){var i,o,l,c=Dt(8)
return $n(e,t,n,c),i=r,o=s,(l=c)||(l=Dt(2)),l.write_shift(1,+i),l.write_shift(1,"e"==o?1:0),c}var pa=function(e,t,r){return 0===t?"":Vn(e,0,r)}
function ga(e,t,r){var n,a=e.read_shift(2),s={fBuiltIn:1&a,fWantAdvise:a>>>1&1,fWantPict:a>>>2&1,fOle:a>>>3&1,fOleLink:a>>>4&1,cf:a>>>5&1023,fIcon:a>>>15&1}
return 14849===r.sbcch&&(n=function(e,t,r){e.l+=4,t-=4
var n=e.l+t,a=Mn(e,0,r),s=e.read_shift(2)
if(s!==(n-=e.l))throw new Error("Malformed AddinUdf: padding = "+n+" != "+s)
return e.l+=s,a}(e,t-2,r)),s.body=n||e.read_shift(t-2),"string"==typeof n&&(s.Name=n),s}var ma=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"]
function ba(e,t,r){var n=e.l+t,a=e.read_shift(2),s=e.read_shift(1),i=e.read_shift(1),o=e.read_shift(r&&2==r.biff?1:2),l=0;(!r||5<=r.biff)&&(5!=r.biff&&(e.l+=2),l=e.read_shift(2),5==r.biff&&(e.l+=2),e.l+=4)
var c=Hn(e,i,r)
32&a&&(c=ma[c.charCodeAt(0)])
var f,h,u,d,p,g,m,b=n-e.l
return r&&2==r.biff&&--b,{chKey:s,Name:c,itab:l,rgce:n==e.l||0===o?[]:(f=e,h=b,u=r,d=o,g=f.l+h,m=Wi(f,d,u),g!==f.l&&(p=Hi(f,g-f.l,m,u)),[m,p])}}function va(e,t,r){if(r.biff<8)return function(e,t,r){3==e[e.l+1]&&e[e.l]++
var n=Mn(e,0,r)
return 3==n.charCodeAt(0)?n.slice(1):n}(e,0,r)
for(var n,a,s=[],i=e.l+t,o=e.read_shift(8<r.biff?4:2);0!=o--;)s.push((n=e,r.biff,a=8<r.biff?4:2,[n.read_shift(a),n.read_shift(a,"i"),n.read_shift(a,"i")]))
if(e.l!=i)throw new Error("Bad ExternSheet: "+e.l+" != "+i)
return s}function wa(e,t,r){var n=ea(e,6)
switch(r.biff){case 2:e.l++,t-=7
break
case 3:case 4:e.l+=2,t-=8
break
default:e.l+=6,t-=12}return[n,function(e,t,r){var n,a=e.l+t,s=2==r.biff?1:2,i=e.read_shift(s)
if(65535==i)return[[],Ot(e,t-2)]
var o=Wi(e,i,r)
return t!==i+s&&(n=Hi(e,t-i-s,o,r)),e.l=a,[o,n]}(e,t,r)]}var Ca=[]
function Ea(e){var t=Dt(24),r=jt(e[0])
t.write_shift(2,r.r),t.write_shift(2,r.r),t.write_shift(2,r.c),t.write_shift(2,r.c)
for(var n="d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),a=0;a<16;++a)t.write_shift(1,parseInt(n[a],16))
return ie([t,function(e){var t=Dt(512),r=0,n=e.Target,a=-1<n.indexOf("#")?31:23
switch(n.charAt(0)){case"#":a=28
break
case".":a&=-3}t.write_shift(4,2),t.write_shift(4,a)
var s=[8,6815827,6619237,4849780,83]
for(r=0;r<s.length;++r)t.write_shift(4,s[r])
if(28==a){for(n=n.slice(1),t.write_shift(4,n.length+1),r=0;r<n.length;++r)t.write_shift(2,n.charCodeAt(r))
t.write_shift(2,0)}else if(2&a){for(s="e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),r=0;r<s.length;++r)t.write_shift(1,parseInt(s[r],16))
for(t.write_shift(4,2*(n.length+1)),r=0;r<n.length;++r)t.write_shift(2,n.charCodeAt(r))
t.write_shift(2,0)}else{for(s="03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "),r=0;r<s.length;++r)t.write_shift(1,parseInt(s[r],16))
for(var i=0;"../"==n.slice(3*i,3*i+3)||"..\\"==n.slice(3*i,3*i+3);)++i
for(t.write_shift(2,i),t.write_shift(4,n.length+1),r=0;r<n.length;++r)t.write_shift(1,255&n.charCodeAt(r))
for(t.write_shift(1,0),t.write_shift(2,65535),t.write_shift(2,57005),r=0;r<6;++r)t.write_shift(4,0)}return t.slice(0,t.l)}(e[1])])}function Sa(e){var t=e[1].Tooltip,r=Dt(10+2*(t.length+1))
r.write_shift(2,2048)
var n=jt(e[0])
r.write_shift(2,n.r),r.write_shift(2,n.r),r.write_shift(2,n.c),r.write_shift(2,n.c)
for(var a=0;a<t.length;++a)r.write_shift(2,t.charCodeAt(a))
return r.write_shift(2,0),r}function Aa(e,t,r){if(!r.cellStyles)return Ot(e,t)
var n=r&&12<=r.biff?4:2,a=e.read_shift(n),s=e.read_shift(n),i=e.read_shift(n),o=e.read_shift(n),l=e.read_shift(2)
return 2==n&&(e.l+=2),{s:a,e:s,w:i,ixfe:o,flags:l}}Ca[8]=function(e,t){var r=e.l+t
e.l+=10
var n=e.read_shift(2)
e.l+=4,e.l+=2,e.l+=2,e.l+=2,e.l+=4
var a=e.read_shift(1)
return e.l+=a,e.l=r,{fmt:n}}
var _a=Kn,Ba=Ln,Ta=Wn,ya=function(){var C={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,255:16969}
function r(e,t){var r=t||{}
return r.dateNF||(r.dateNF="yyyymmdd"),tr(function(e,t){var r=[],n=te(1)
switch(t.type){case"base64":n=se(q.decode(e))
break
case"binary":n=se(e)
break
case"buffer":case"array":n=e}Rt(n,0)
var a=n.read_shift(1),s=!1,i=!1,o=!1
switch(a){case 2:case 3:break
case 48:s=i=!0
break
case 49:i=!0
break
case 131:case 139:s=!0
break
case 140:o=s=!0
break
case 245:s=!0
break
default:throw new Error("DBF Unsupported Version: "+a.toString(16))}var l=0,c=0
2==a&&(l=n.read_shift(2)),n.l+=3,2!=a&&(l=n.read_shift(4)),2!=a&&(c=n.read_shift(2))
var f=n.read_shift(2),h=1252
2!=a&&(n.l+=16,n.read_shift(1),0!==n[n.l]&&(h=C[n[n.l]]),n.l+=1,n.l+=2),o&&(n.l+=36)
for(var u=[],d={},p=c-10-(i?264:0),g=o?32:11;2==a?n.l<n.length&&13!=n[n.l]:n.l<p;)switch((d={}).name=cptable.utils.decode(h,n.slice(n.l,n.l+g)).replace(/[\u0000\r\n].*$/g,""),n.l+=g,d.type=String.fromCharCode(n.read_shift(1)),2==a||o||(d.offset=n.read_shift(4)),d.len=n.read_shift(1),2==a&&(d.offset=n.read_shift(2)),d.dec=n.read_shift(1),d.name.length&&u.push(d),2!=a&&(n.l+=o?13:14),d.type){case"B":i&&8==d.len||!t.WTF||console.log("Skipping "+d.name+":"+d.type)
break
case"G":case"P":t.WTF&&console.log("Skipping "+d.name+":"+d.type)
break
case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":case"0":case"@":case"+":break
default:throw new Error("Unknown Field Type: "+d.type)}if(13!==n[n.l]?n.l=c-1:2==a&&(n.l=521),2!=a){if(13!==n.read_shift(1))throw new Error("DBF Terminator not found "+n.l+" "+n[n.l])
n.l=c}var m=0,b=0
for(r[0]=[],b=0;b!=u.length;++b)r[0][b]=u[b].name
for(;0<l--;)if(42!==n[n.l])for(++n.l,r[++m]=[],b=b=0;b!=u.length;++b){var v=n.slice(n.l,n.l+u[b].len)
n.l+=u[b].len,Rt(v,0)
var w=cptable.utils.decode(h,v)
switch(u[b].type){case"C":r[m][b]=cptable.utils.decode(h,v),r[m][b]=r[m][b].trim()
break
case"D":8===w.length?r[m][b]=new Date(+w.slice(0,4),+w.slice(4,6)-1,+w.slice(6,8)):r[m][b]=w
break
case"F":r[m][b]=parseFloat(w.trim())
break
case"+":case"I":r[m][b]=o?2147483648^v.read_shift(-4,"i"):v.read_shift(4,"i")
break
case"L":switch(w.toUpperCase()){case"Y":case"T":r[m][b]=!0
break
case"N":case"F":r[m][b]=!1
break
case" ":case"?":r[m][b]=!1
break
default:throw new Error("DBF Unrecognized L:|"+w+"|")}break
case"M":if(!s)throw new Error("DBF Unexpected MEMO for type "+a.toString(16))
r[m][b]="##MEMO##"+(o?parseInt(w.trim(),10):v.read_shift(4))
break
case"N":r[m][b]=+w.replace(/\u0000/g,"").trim()
break
case"@":r[m][b]=new Date(v.read_shift(-8,"f")-621356832e5)
break
case"T":r[m][b]=new Date(864e5*(v.read_shift(4)-2440588)+v.read_shift(4))
break
case"Y":r[m][b]=v.read_shift(4,"i")/1e4
break
case"O":r[m][b]=-v.read_shift(-8,"f")
break
case"B":if(i&&8==u[b].len){r[m][b]=v.read_shift(8,"f")
break}case"G":case"P":v.l+=u[b].len
break
case"0":if("_NullFlags"===u[b].name)break
default:throw new Error("DBF Unsupported data type "+u[b].type)}}else n.l+=f
if(2!=a&&n.l<n.length&&26!=n[n.l++])throw new Error("DBF EOF Marker missing "+(n.l-1)+" of "+n.length+" "+n[n.l-1].toString(16))
return t&&t.sheetRows&&(r=r.slice(0,t.sheetRows)),r}(e,r),r)}var E={B:8,C:250,L:1,D:8,"?":0,"":0}
return{to_workbook:function(e,t){try{return qt(r(e,t),t)}catch(e){if(t&&t.WTF)throw e}return{SheetNames:[],Sheets:{}}},to_sheet:r,from_sheet:function(e,t){if("string"==(t||{}).type)throw new Error("Cannot write DBF to JS string")
var r=Pt(),n=qc(e,{header:1,cellDates:!0}),a=n[0],s=n.slice(1),i=0,o=0,l=0,c=1
for(i=0;i<a.length;++i)if(null!=i){if(++l,"number"==typeof a[i]&&(a[i]=a[i].toString(10)),"string"!=typeof a[i])throw new Error("DBF Invalid column name "+a[i]+" |"+uf(a[i])+"|")
if(a.indexOf(a[i])!==i)for(o=0;o<1024;++o)if(-1==a.indexOf(a[i]+"_"+o)){a[i]+="_"+o
break}}var f=Zt(e["!ref"]),h=[]
for(i=0;i<=f.e.c-f.s.c;++i){var u=[]
for(o=0;o<s.length;++o)null!=s[o][i]&&u.push(s[o][i])
if(0!=u.length&&null!=a[i]){var d="",p=""
for(o=0;o<u.length;++o){switch(uf(u[o])){case"number":p="B"
break
case"string":p="C"
break
case"boolean":p="L"
break
case"object":p=u[o]instanceof Date?"D":"C"
break
default:p="C"}if("C"==(d=d&&d!=p?"C":p))break}c+=E[d]||0,h[i]=d}else h[i]="?"}var g=r.next(32)
for(g.write_shift(4,318902576),g.write_shift(4,s.length),g.write_shift(2,296+32*l),g.write_shift(2,c),i=0;i<4;++i)g.write_shift(4,0)
for(g.write_shift(4,768),o=i=0;i<a.length;++i)if(null!=a[i]){var m=r.next(32),b=(a[i].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11)
m.write_shift(1,b,"sbcs"),m.write_shift(1,"?"==h[i]?"C":h[i],"sbcs"),m.write_shift(4,o),m.write_shift(1,E[h[i]]||0),m.write_shift(1,0),m.write_shift(1,2),m.write_shift(4,0),m.write_shift(1,0),m.write_shift(4,0),m.write_shift(4,0),o+=E[h[i]]||0}var v=r.next(264)
for(v.write_shift(4,13),i=0;i<65;++i)v.write_shift(4,0)
for(i=0;i<s.length;++i){var w=r.next(c)
for(w.write_shift(1,0),o=0;o<a.length;++o)if(null!=a[o])switch(h[o]){case"L":w.write_shift(1,null==s[i][o]?63:s[i][o]?84:70)
break
case"B":w.write_shift(8,s[i][o]||0,"f")
break
case"D":s[i][o]?(w.write_shift(4,("0000"+s[i][o].getFullYear()).slice(-4),"sbcs"),w.write_shift(2,("00"+(s[i][o].getMonth()+1)).slice(-2),"sbcs"),w.write_shift(2,("00"+s[i][o].getDate()).slice(-2),"sbcs")):w.write_shift(8,"00000000","sbcs")
break
case"C":var C=String(s[i][o]||"")
for(w.write_shift(1,C,"sbcs"),l=0;l<250-C.length;++l)w.write_shift(1,32)}}return r.next(1).write_shift(1,26),r.end()}}}(),ka=function(){function i(e,t){for(var r,n=e.split(/[\n\r]+/),a=-1,s=-1,i=0,o=0,l=[],c=[],f=null,h={},u=[],d=[],p=[],g=0;i!==n.length;++i){g=0
var m,b=n[i].trim(),v=b.replace(/;;/g,"").split(";").map(function(e){return e.replace(/\u0001/g,";")}),w=v[0]
if(0<b.length)switch(w){case"ID":case"E":case"B":case"O":break
case"P":"P"==v[1].charAt(0)&&c.push(b.slice(3).replace(/;;/g,";"))
break
case"C":var C=!1,E=!1
for(o=1;o<v.length;++o)switch(v[o].charAt(0)){case"X":s=parseInt(v[o].slice(1))-1,E=!0
break
case"Y":for(a=parseInt(v[o].slice(1))-1,E||(s=0),r=l.length;r<=a;++r)l[r]=[]
break
case"K":'"'===(m=v[o].slice(1)).charAt(0)?m=m.slice(1,m.length-1):"TRUE"===m?m=!0:"FALSE"===m?m=!1:isNaN(k(m))?isNaN(x(m).getDate())||(m=K(m)):(m=k(m),null!==f&&de.is_date(f)&&(m=N(m))),"undefined"!=typeof cptable&&"string"==typeof m&&"string"!=(t||{}).type&&(t||{}).codepage&&(m=cptable.utils.decode(t.codepage,m)),C=!0
break
case"E":var S=ci(v[o].slice(1),{r:a,c:s})
l[a][s]=[l[a][s],S]
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+b)}C&&(l[a][s]=m,f=null)
break
case"F":var A=0
for(o=1;o<v.length;++o)switch(v[o].charAt(0)){case"X":s=parseInt(v[o].slice(1))-1,++A
break
case"Y":for(a=parseInt(v[o].slice(1))-1,r=l.length;r<=a;++r)l[r]=[]
break
case"M":g=parseInt(v[o].slice(1))/20
break
case"F":case"G":break
case"P":f=c[parseInt(v[o].slice(1))]
break
case"S":case"D":case"N":break
case"W":for(p=v[o].slice(1).split(" "),r=parseInt(p[0],10);r<=parseInt(p[1],10);++r)g=parseInt(p[2],10),d[r-1]=0===g?{hidden:!0}:{wch:g},bs(d[r-1])
break
case"C":d[s=parseInt(v[o].slice(1))-1]||(d[s]={})
break
case"R":u[a=parseInt(v[o].slice(1))-1]||(u[a]={}),0<g?(u[a].hpt=g,u[a].hpx=Cs(g)):0===g&&(u[a].hidden=!0)
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+b)}A<1&&(f=null)
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+b)}}return 0<u.length&&(h["!rows"]=u),0<d.length&&(h["!cols"]=d),t&&t.sheetRows&&(l=l.slice(0,t.sheetRows)),[l,h]}function r(e,t){var r=function(e,t){switch(t.type){case"base64":return i(q.decode(e),t)
case"binary":return i(e,t)
case"buffer":return i(e.toString("binary"),t)
case"array":return i(y(e),t)}throw new Error("Unrecognized type "+t.type)}(e,t),n=r[0],a=r[1],s=tr(n,t)
return me(a).forEach(function(e){s[e]=a[e]}),s}function d(e,t,r,n){var a="C;Y"+(r+1)+";X"+(n+1)+";K"
switch(e.t){case"n":a+=e.v||0,e.f&&!e.F&&(a+=";E"+hi(e.f,{r:r,c:n}))
break
case"b":a+=e.v?"TRUE":"FALSE"
break
case"e":a+=e.w||e.v
break
case"d":a+='"'+(e.w||e.v)+'"'
break
case"s":a+='"'+e.v.replace(/"/g,"")+'"'}return a}return{to_workbook:function(e,t){return qt(r(e,t),t)},to_sheet:r,from_sheet:function(e,t){var r,n,a,s=["ID;PWXL;N;E"],i=[],o=Zt(e["!ref"]),l=Array.isArray(e),c="\r\n"
s.push("P;PGeneral"),s.push("F;P0;DG0G8;M255"),e["!cols"]&&(n=s,e["!cols"].forEach(function(e,t){var r="F;W"+(t+1)+" "+(t+1)+" "
e.hidden?r+="0":("number"==typeof e.width&&(e.wpx=us(e.width)),"number"==typeof e.wpx&&(e.wch=ds(e.wpx)),"number"==typeof e.wch&&(r+=Math.round(e.wch)))," "!=r.charAt(r.length-1)&&n.push(r)})),e["!rows"]&&(a=s,e["!rows"].forEach(function(e,t){var r="F;"
e.hidden?r+="M0;":e.hpt?r+="M"+20*e.hpt+";":e.hpx&&(r+="M"+20*ws(e.hpx)+";"),2<r.length&&a.push(r+"R"+(t+1))})),s.push("B;Y"+(o.e.r-o.s.r+1)+";X"+(o.e.c-o.s.c+1)+";D"+[o.s.c,o.s.r,o.e.c,o.e.r].join(" "))
for(var f=o.s.r;f<=o.e.r;++f)for(var h=o.s.c;h<=o.e.c;++h){var u=Yt({r:f,c:h});(r=l?(e[f]||[])[h]:e[u])&&(null!=r.v||r.f&&!r.F)&&i.push(d(r,0,f,h))}return s.join(c)+c+i.join(c)+c+"E"+c}}}(),xa=function(){function r(e,t){for(var r=e.split("\n"),n=-1,a=-1,s=0,i=[];s!==r.length;++s)if("BOT"!==r[s].trim()){if(!(n<0)){var o=r[s].trim().split(","),l=o[0],c=o[1],f=r[++s].trim()
switch(+l){case-1:if("BOT"===f){i[++n]=[],a=0
continue}if("EOD"!==f)throw new Error("Unrecognized DIF special command "+f)
break
case 0:"TRUE"===f?i[n][a]=!0:"FALSE"===f?i[n][a]=!1:isNaN(k(c))?isNaN(x(c).getDate())?i[n][a]=c:i[n][a]=K(c):i[n][a]=k(c),++a
break
case 1:f=f.slice(1,f.length-1),i[n][a++]=""!==f?f:null}if("EOD"===f)break}}else i[++n]=[],a=0
return t&&t.sheetRows&&(i=i.slice(0,t.sheetRows)),i}function n(e,t){return tr(function(e,t){switch(t.type){case"base64":return r(q.decode(e),t)
case"binary":return r(e,t)
case"buffer":return r(e.toString("binary"),t)
case"array":return r(y(e),t)}throw new Error("Unrecognized type "+t.type)}(e,t),t)}var c,f
return{to_workbook:function(e,t){return qt(n(e,t),t)},to_sheet:n,from_sheet:(c=function(e,t,r,n,a){e.push(t),e.push(r+","+n),e.push('"'+a.replace(/"/g,'""')+'"')},f=function(e,t,r,n){e.push(t+","+r),e.push(1==t?'"'+n.replace(/"/g,'""')+'"':n)},function(e){var t,r=[],n=Zt(e["!ref"]),a=Array.isArray(e)
c(r,"TABLE",0,1,"sheetjs"),c(r,"VECTORS",0,n.e.r-n.s.r+1,""),c(r,"TUPLES",0,n.e.c-n.s.c+1,""),c(r,"DATA",0,0,"")
for(var s=n.s.r;s<=n.e.r;++s){f(r,-1,0,"BOT")
for(var i=n.s.c;i<=n.e.c;++i){var o=Yt({r:s,c:i})
if(t=a?(e[s]||[])[i]:e[o])switch(t.t){case"n":var l=t.w
l||null==t.v||(l=t.v),null==l?t.f&&!t.F?f(r,1,0,"="+t.f):f(r,1,0,""):f(r,0,l,"V")
break
case"b":f(r,0,t.v?1:0,t.v?"TRUE":"FALSE")
break
case"s":f(r,1,0,isNaN(t.v)?t.v:'="'+t.v+'"')
break
case"d":t.w||(t.w=de.format(t.z||de._table[14],j(K(t.v)))),f(r,0,t.w,"V")
break
default:f(r,1,0,"")}else f(r,1,0,"")}}return f(r,-1,0,"EOD"),r.join("\r\n")})}}(),Ia=function(){function f(e){return e.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function r(e,t){return tr(function(e,t){for(var r=e.split("\n"),n=-1,a=-1,s=0,i=[];s!==r.length;++s){var o=r[s].trim().split(":")
if("cell"===o[0]){var l=jt(o[1])
if(i.length<=l.r)for(n=i.length;n<=l.r;++n)i[n]||(i[n]=[])
switch(n=l.r,a=l.c,o[2]){case"t":i[n][a]=o[3].replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,"\n")
break
case"v":i[n][a]=+o[3]
break
case"vtf":var c=o[o.length-1]
case"vtc":switch(o[3]){case"nl":i[n][a]=!!+o[4]
break
default:i[n][a]=+o[4]}"vtf"==o[2]&&(i[n][a]=[i[n][a],c])}}}return t&&t.sheetRows&&(i=i.slice(0,t.sheetRows)),i}(e,t),t)}var t=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n"),n=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join("\n")+"\n",a=["# SocialCalc Spreadsheet Control Save","part:sheet"].join("\n"),s="--SocialCalcSpreadsheetControlSave--"
return{to_workbook:function(e,t){return qt(r(e,t),t)},to_sheet:r,from_sheet:function(e){return[t,n,a,n,function(e){if(!e||!e["!ref"])return""
for(var t,r=[],n=[],a="",s=Kt(e["!ref"]),i=Array.isArray(e),o=s.s.r;o<=s.e.r;++o)for(var l=s.s.c;l<=s.e.c;++l)if(a=Yt({r:o,c:l}),(t=i?(e[o]||[])[l]:e[a])&&null!=t.v&&"z"!==t.t){switch(n=["cell",a,"t"],t.t){case"s":case"str":n.push(f(t.v))
break
case"n":t.f?(n[2]="vtf",n[3]="n",n[4]=t.v,n[5]=f(t.f)):(n[2]="v",n[3]=t.v)
break
case"b":n[2]="vt"+(t.f?"f":"c"),n[3]="nl",n[4]=t.v?"1":"0",n[5]=f(t.f||(t.v?"TRUE":"FALSE"))
break
case"d":var c=j(K(t.v))
n[2]="vtc",n[3]="nd",n[4]=""+c,n[5]=t.w||de.format(t.z||de._table[14],c)
break
case"e":continue}r.push(n.join(":"))}return r.push("sheet:c:"+(s.e.c-s.s.c+1)+":r:"+(s.e.r-s.s.r+1)+":tvf:1"),r.push("valueformat:1:text-wiki"),r.join("\n")}(e),s].join("\n")}}}(),Ra=function(){function f(e,t,r,n,a){a.raw?t[r][n]=e:"TRUE"===e?t[r][n]=!0:"FALSE"===e?t[r][n]=!1:""===e||(isNaN(k(e))?isNaN(x(e).getDate())?t[r][n]=e:t[r][n]=K(e):t[r][n]=k(e))}var v={44:",",9:"\t",59:";"},w={44:3,9:2,59:1}
function r(n,e){var a=e||{},t=""
null!=ue&&null==a.dense&&(a.dense=ue)
var s=a.dense?[]:{},i={s:{c:0,r:0},e:{c:0,r:0}}
"sep="==n.slice(0,4)&&10==n.charCodeAt(5)?(t=n.charAt(4),n=n.slice(6)):t=function(e){for(var t={},r=!1,n=0,a=0;n<e.length;++n)34==(a=e.charCodeAt(n))?r=!r:!r&&a in v&&(t[a]=(t[a]||0)+1)
for(n in a=[],t)t.hasOwnProperty(n)&&a.push([t[n],n])
if(!a.length)for(n in t=w)t.hasOwnProperty(n)&&a.push([t[n],n])
return a.sort(function(e,t){return e[0]-t[0]||w[e[1]]-w[t[1]]}),v[a.pop()[1]]}(n.slice(0,1024))
var o=0,l=0,c=0,f=0,h=0,u=t.charCodeAt(0),r=!1,d=0
n=n.replace(/\r\n/gm,"\n")
var p,g,m=null!=a.dateNF?(p=a.dateNF,g=(g="number"==typeof p?de._table[p]:p).replace(C,"(\\d+)"),new RegExp("^"+g+"$")):null
function b(){var e=n.slice(f,h),t={}
if('"'==e.charAt(0)&&'"'==e.charAt(e.length-1)&&(e=e.slice(1,-1).replace(/""/g,'"')),0===e.length)t.t="z"
else if(a.raw)t.t="s",t.v=e
else if(0===e.trim().length)t.t="s",t.v=e
else if(61==e.charCodeAt(0))34==e.charCodeAt(1)&&34==e.charCodeAt(e.length-1)?(t.t="s",t.v=e.slice(2,-1).replace(/""/g,'"')):1!=e.length?(t.t="n",t.f=e.slice(1)):(t.t="s",t.v=e)
else if("TRUE"==e)t.t="b",t.v=!0
else if("FALSE"==e)t.t="b",t.v=!1
else if(isNaN(c=k(e)))if(!isNaN(x(e).getDate())||m&&e.match(m)){t.z=a.dateNF||de._table[14]
var r=0
m&&e.match(m)&&(e=function(e,t,n){var a=-1,s=-1,i=-1,o=-1,l=-1,c=-1;(t.match(C)||[]).forEach(function(e,t){var r=parseInt(n[t+1],10)
switch(e.toLowerCase().charAt(0)){case"y":a=r
break
case"d":i=r
break
case"h":o=r
break
case"s":c=r
break
case"m":0<=o?l=r:s=r}}),0<=c&&-1==l&&0<=s&&(l=s,s=-1)
var r=(""+(0<=a?a:(new Date).getFullYear())).slice(-4)+"-"+("00"+(1<=s?s:1)).slice(-2)+"-"+("00"+(1<=i?i:1)).slice(-2)
7==r.length&&(r="0"+r),8==r.length&&(r="20"+r)
var f=("00"+(0<=o?o:0)).slice(-2)+":"+("00"+(0<=l?l:0)).slice(-2)+":"+("00"+(0<=c?c:0)).slice(-2)
return-1==o&&-1==l&&-1==c?r:-1==a&&-1==s&&-1==i?f:r+"T"+f}(0,a.dateNF,e.match(m)||[]),r=1),a.cellDates?(t.t="d",t.v=K(e,r)):(t.t="n",t.v=j(K(e,r))),!1!==a.cellText&&(t.w=de.format(t.z,t.v instanceof Date?j(t.v):t.v)),a.cellNF||delete t.z}else t.t="s",t.v=e
else!(t.t="n")!==a.cellText&&(t.w=e),t.v=c
if("z"==t.t||(a.dense?(s[o]||(s[o]=[]),s[o][l]=t):s[Yt({c:l,r:o})]=t),f=h+1,i.e.c<l&&(i.e.c=l),i.e.r<o&&(i.e.r=o),d==u)++l
else if(l=0,++o,a.sheetRows&&a.sheetRows<=o)return!0}e:for(;h<n.length;++h)switch(d=n.charCodeAt(h)){case 34:r=!r
break
case u:case 10:case 13:if(!r&&b())break e}return 0<h-f&&b(),s["!ref"]=$t(i),s}function a(e,t){return"sep="==e.slice(0,4)?r(e,t):0<=e.indexOf("\t")||0<=e.indexOf(",")||0<=e.indexOf(";")?r(e,t):tr(function(e,t){var r=t||{},n=[]
if(!e||0===e.length)return n
for(var a=e.split(/[\r\n]/),s=a.length-1;0<=s&&0===a[s].length;)--s
for(var i=10,o=0,l=0;l<=s;++l)-1==(o=a[l].indexOf(" "))?o=a[l].length:o++,i=Math.max(i,o)
for(l=0;l<=s;++l){n[l]=[]
var c=0
for(f(a[l].slice(0,i).trim(),n,l,c,r),c=1;c<=(a[l].length-i)/10+1;++c)f(a[l].slice(i+10*(c-1),i+10*c).trim(),n,l,c,r)}return r.sheetRows&&(n=n.slice(0,r.sheetRows)),n}(e,t),t)}function n(e,t){var r="",n="string"==t.type?[0,0,0,0]:Wc(e,t)
switch(t.type){case"base64":r=q.decode(e)
break
case"binary":r=e
break
case"buffer":r=65001==t.codepage?e.toString("utf8"):t.codepage&&"undefined"!=typeof cptable?cptable.utils.decode(t.codepage,e):e.toString("binary")
break
case"array":r=y(e)
break
case"string":r=e
break
default:throw new Error("Unrecognized type "+t.type)}return 239==n[0]&&187==n[1]&&191==n[2]?r=Re(r.slice(3)):"binary"==t.type&&"undefined"!=typeof cptable&&t.codepage&&(r=cptable.utils.decode(t.codepage,cptable.utils.encode(1252,r))),"socialcalc:version:"==r.slice(0,19)?Ia.to_sheet("string"==t.type?r:Re(r),t):a(r,t)}return{to_workbook:function(e,t){return qt(n(e,t),t)},to_sheet:n,from_sheet:function(e){for(var t,r=[],n=Zt(e["!ref"]),a=Array.isArray(e),s=n.s.r;s<=n.e.r;++s){for(var i=[],o=n.s.c;o<=n.e.c;++o){var l=Yt({r:s,c:o})
if((t=a?(e[s]||[])[o]:e[l])&&null!=t.v){for(var c=(t.w||(Jt(t),t.w)||"").slice(0,10);c.length<10;)c+=" "
i.push(c+(0===o?" ":""))}else i.push("          ")}r.push(i.join(""))}return r.join("\n")}}}(),Oa=function(){function r(n,e){if(!n)return n
var a=e||{}
null!=ue&&null==a.dense&&(a.dense=ue)
var s=a.dense?[]:{},i="Sheet1",o=0,l={},c=[i],f={s:{r:0,c:0},e:{r:0,c:0}},h=a.sheetRows||0
if(2==n[2])a.Enum=u
else if(26==n[2])a.Enum=t
else{if(14!=n[2])throw new Error("Unrecognized LOTUS BOF "+n[2])
a.Enum=t,a.qpro=!0,n.l=0}return function(e,t,r){if(e){Rt(e,e.l||0)
for(var n=r.Enum||u;e.l<e.length;){var a=e.read_shift(2),s=n[a]||n[255],i=e.read_shift(2),o=e.l+i,l=(s.f||Ot)(e,i,r)
if(e.l=o,t(l,s.n,a))return}}}(n,function(e,t,r){if(2==n[2])switch(r){case 0:4096<=(a.vers=e)&&(a.qpro=!0)
break
case 6:f=e
break
case 15:a.qpro||(e[1].v=e[1].v.slice(1))
case 13:case 14:case 16:case 51:14==r&&112==(112&e[2])&&1<(15&e[2])&&(15&e[2])<15&&(e[1].z=a.dateNF||de._table[14],a.cellDates&&(e[1].t="d",e[1].v=N(e[1].v))),a.dense?(s[e[0].r]||(s[e[0].r]=[]),s[e[0].r][e[0].c]=e[1]):s[Yt(e[0])]=e[1]}else switch(r){case 22:e[1].v=e[1].v.slice(1)
case 23:case 24:case 25:case 37:case 39:case 40:if(e[3]>o&&(s["!ref"]=$t(f),l[i]=s,s=a.dense?[]:{},f={s:{r:0,c:0},e:{r:0,c:0}},o=e[3],i="Sheet"+(o+1),c.push(i)),0<h&&e[0].r>=h)break
a.dense?(s[e[0].r]||(s[e[0].r]=[]),s[e[0].r][e[0].c]=e[1]):s[Yt(e[0])]=e[1],f.e.c<e[0].c&&(f.e.c=e[0].c),f.e.r<e[0].r&&(f.e.r=e[0].r)}},a),s["!ref"]=$t(f),l[i]=s,{SheetNames:c,Sheets:l}}function i(e,t,r){var n=[{c:0,r:0},{t:"n",v:0},0]
return r.qpro&&20768!=r.vers?(n[0].c=e.read_shift(1),e.l++,n[0].r=e.read_shift(2),e.l+=2):(n[2]=e.read_shift(1),n[0].c=e.read_shift(2),n[0].r=e.read_shift(2)),n}function e(e,t,r){var n=e.l+t,a=i(e,0,r)
if(a[1].t="s",20768!=r.vers)return r.qpro&&e.l++,a[1].v=e.read_shift(n-e.l,"cstr"),a
e.l++
var s=e.read_shift(1)
return a[1].v=e.read_shift(s,"utf8"),a}function o(e){var t=[{c:0,r:0},{t:"n",v:0},0]
return t[0].r=e.read_shift(2),t[3]=e[e.l++],t[0].c=e[e.l++],t}function n(e,t){var r=o(e),n=e.read_shift(4),a=e.read_shift(4),s=e.read_shift(2)
if(65535==s)return r[1].v=0,r
var i=32768&s
return s=(32767&s)-16446,r[1].v=(2*i-1)*((0<s?a<<s:a>>>-s)+(-32<s?n<<s+32:n>>>-(s+32))),r}function a(e,t){var r=o(e),n=e.read_shift(8,"f")
return r[1].v=n,r}var u={0:{n:"BOF",f:Pn},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:function(e){var t={s:{c:0,r:0},e:{c:0,r:0}}
return t.s.c=e.read_shift(2),t.s.r=e.read_shift(2),t.e.c=e.read_shift(2),t.e.r=e.read_shift(2),65535==t.s.c&&(t.s.c=t.e.c=t.s.r=t.e.r=0),t}},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f:function(e,t,r){var n=i(e,0,r)
return n[1].v=e.read_shift(2,"i"),n}},14:{n:"NUMBER",f:function(e,t,r){var n=i(e,0,r)
return n[1].v=e.read_shift(8,"f"),n}},15:{n:"LABEL",f:e},16:{n:"FORMULA",f:function(e,t,r){var n=e.l+t,a=i(e,0,r)
if(a[1].v=e.read_shift(8,"f"),r.qpro)e.l=n
else{var s=e.read_shift(2)
e.l+=s}return a}},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:e},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},255:{n:"",f:Ot}},t={0:{n:"BOF"},1:{n:"EOF"},3:{n:"??"},4:{n:"??"},5:{n:"??"},6:{n:"??"},7:{n:"??"},9:{n:"??"},10:{n:"??"},11:{n:"??"},12:{n:"??"},14:{n:"??"},15:{n:"??"},16:{n:"??"},17:{n:"??"},18:{n:"??"},19:{n:"??"},21:{n:"??"},22:{n:"LABEL16",f:function(e,t){var r=o(e)
return r[1].t="s",r[1].v=e.read_shift(t-4,"cstr"),r}},23:{n:"NUMBER17",f:n},24:{n:"NUMBER18",f:function(e,t){var r=o(e)
r[1].v=e.read_shift(2)
var n=r[1].v>>1
if(1&r[1].v)switch(7&n){case 1:n=500*(n>>3)
break
case 2:n=(n>>3)/20
break
case 4:n=(n>>3)/2e3
break
case 6:n=(n>>3)/16
break
case 7:n=(n>>3)/64
break
default:throw"unknown NUMBER_18 encoding "+(7&n)}return r[1].v=n,r}},25:{n:"FORMULA19",f:function(e,t){var r=n(e)
return e.l+=t-14,r}},26:{n:"??"},27:{n:"??"},28:{n:"??"},29:{n:"??"},30:{n:"??"},31:{n:"??"},33:{n:"??"},37:{n:"NUMBER25",f:function(e,t){var r=o(e),n=e.read_shift(4)
return r[1].v=n>>6,r}},39:{n:"NUMBER27",f:a},40:{n:"FORMULA28",f:function(e,t){var r=a(e)
return e.l+=t-10,r}},255:{n:"",f:Ot}}
return{to_workbook:function(e,t){switch(t.type){case"base64":return r(se(q.decode(e)),t)
case"binary":return r(se(e),t)
case"buffer":case"array":return r(e,t)}throw"Unsupported type "+t.type}}}(),Da=function(){var a=Ue("t"),s=Ue("rPr"),t=/<(?:\w+:)?r>/g,r=/<\/(?:\w+:)?r>/,i=/\r\n/g
function n(e){var t=[[],"",[]],r=e.match(a)
if(!r)return""
t[1]=r[1]
var n=e.match(s)
return n&&function(e,t,r){var n={},a="",s=!1,i=e.match(z),o=0
if(i)for(;o!=i.length;++o){var l=ve(i[o])
switch(l[0].replace(/\w*:/g,"")){case"<condense":case"<extend":break
case"<shadow":if(!l.val)break
case"<shadow>":case"<shadow/>":n.shadow=1
break
case"</shadow>":break
case"<charset":if("1"==l.val)break
f[parseInt(l.val,10)]
break
case"<outline":if(!l.val)break
case"<outline>":case"<outline/>":n.outline=1
break
case"</outline>":break
case"<rFont":n.name=l.val
break
case"<sz":n.sz=l.val
break
case"<strike":if(!l.val)break
case"<strike>":case"<strike/>":n.strike=1
break
case"</strike>":break
case"<u":if(!l.val)break
switch(l.val){case"double":n.uval="double"
break
case"singleAccounting":n.uval="single-accounting"
break
case"doubleAccounting":n.uval="double-accounting"}case"<u>":case"<u/>":n.u=1
break
case"</u>":break
case"<b":if("0"==l.val)break
case"<b>":case"<b/>":n.b=1
break
case"</b>":break
case"<i":if("0"==l.val)break
case"<i>":case"<i/>":n.i=1
break
case"</i>":break
case"<color":l.rgb&&(n.color=l.rgb.slice(2,8))
break
case"<family":n.family=l.val
break
case"<vertAlign":a=l.val
break
case"<scheme":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":s=!0
break
case"</ext>":s=!1
break
default:if(47!==l[0].charCodeAt(1)&&!s)throw new Error("Unrecognized rich format "+l[0])}}var c=[]
n.u&&c.push("text-decoration: underline;"),n.uval&&c.push("text-underline-style:"+n.uval+";"),n.sz&&c.push("font-size:"+n.sz+"pt;"),n.outline&&c.push("text-effect: outline;"),n.shadow&&c.push("text-shadow: auto;"),t.push('<span style="'+c.join("")+'">'),n.b&&(t.push("<b>"),r.push("</b>")),n.i&&(t.push("<i>"),r.push("</i>")),n.strike&&(t.push("<s>"),r.push("</s>")),"superscript"==a?a="sup":"subscript"==a&&(a="sub"),""!=a&&(t.push("<"+a+">"),r.push("</"+a+">")),r.push("</span>")}(n[1],t[0],t[2]),t[0].join("")+t[1].replace(i,"<br/>")+t[2].join("")}return function(e){return e.replace(t,"").split(r).map(n).join("")}}(),Fa=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,Pa=/<(?:\w+:)?r>/,Na=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g
function La(e,t){var r=!t||t.cellHTML,n={}
return e?(e.match(/^\s*<(?:\w+:)?t[^>]*>/)?(n.t=Ee(Re(e.slice(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||"")),n.r=Re(e),r&&(n.h=ye(n.t))):e.match(Pa)&&(n.r=Re(e),n.t=Ee(Re((e.replace(Na,"").match(Fa)||[]).join("").replace(z,""))),r&&(n.h=Da(n.r))),n):null}var Ma=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,Ua=/<(?:\w+:)?(?:si|sstItem)>/g,Ha=/<\/(?:\w+:)?(?:si|sstItem)>/
jr.SST="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
var Wa=/^\s|\s$|[\t\n\r]/,Va=function(e,t){var r=!1
return null==t&&(r=!0,t=Dt(15+4*e.t.length)),t.write_shift(1,0),ar(e.t,t),r?t.slice(0,t.l):t}
function za(e){var t,r,n=Pt()
Nt(n,"BrtBeginSst",(t=e,r||(r=Dt(8)),r.write_shift(4,t.Count),r.write_shift(4,t.Unique),r))
for(var a=0;a<e.length;++a)Nt(n,"BrtSSTItem",Va(e[a]))
return Nt(n,"BrtEndSst"),n.end()}function Xa(e){if("undefined"!=typeof cptable)return cptable.utils.encode(a,e)
for(var t=[],r=e.split(""),n=0;n<r.length;++n)t[n]=r[n].charCodeAt(0)
return t}function Ga(e,t){var r={}
return r.Major=e.read_shift(2),r.Minor=e.read_shift(2),4<=t&&(e.l+=t-4),r}function ja(e){for(var t=e.read_shift(4),r=e.l+t-4,n={},a=e.read_shift(4),s=[];0<a--;)s.push({t:e.read_shift(4),v:e.read_shift(0,"lpp4")})
if(n.name=e.read_shift(0,"lpp4"),n.comps=s,e.l!=r)throw new Error("Bad DataSpaceMapEntry: "+e.l+" != "+r)
return n}function Ya(e){var t,r,n=(r={},(t=e).read_shift(4),t.l+=4,r.id=t.read_shift(0,"lpp4"),r.name=t.read_shift(0,"lpp4"),r.R=Ga(t,4),r.U=Ga(t,4),r.W=Ga(t,4),r)
if(n.ename=e.read_shift(0,"8lpp4"),n.blksz=e.read_shift(4),n.cmode=e.read_shift(4),4!=e.read_shift(4))throw new Error("Bad !Primary record")
return n}function Ka(e,t){var r=e.l+t,n={}
n.Flags=63&e.read_shift(4),e.l+=4,n.AlgID=e.read_shift(4)
var a=!1
switch(n.AlgID){case 26126:case 26127:case 26128:a=36==n.Flags
break
case 26625:a=4==n.Flags
break
case 0:a=16==n.Flags||4==n.Flags||36==n.Flags
break
default:throw"Unrecognized encryption algorithm: "+n.AlgID}if(!a)throw new Error("Encryption Flags/AlgID mismatch")
return n.AlgIDHash=e.read_shift(4),n.KeySize=e.read_shift(4),n.ProviderType=e.read_shift(4),e.l+=8,n.CSPName=e.read_shift(r-e.l>>1,"utf16le"),e.l=r,n}function $a(e,t){var r={},n=e.l+t
return e.l+=4,r.Salt=e.slice(e.l,e.l+16),e.l+=16,r.Verifier=e.slice(e.l,e.l+16),e.l+=16,e.read_shift(4),r.VerifierHash=e.slice(e.l,n),e.l=n,r}function Za(e){var t=Ga(e)
switch(t.Minor){case 2:return[t.Minor,function(e){if(36!=(63&e.read_shift(4)))throw new Error("EncryptionInfo mismatch")
var t=e.read_shift(4),r=Ka(e,t),n=$a(e,e.length-e.l)
return{t:"Std",h:r,v:n}}(e)]
case 3:return[t.Minor,function(){throw new Error("File is password-protected: ECMA-376 Extensible")}()]
case 4:return[t.Minor,function(e){var r=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"]
e.l+=4
var t=e.read_shift(e.length-e.l,"utf8"),n={}
return t.replace(z,function(e){var t=ve(e)
switch(Z(t[0])){case"<?xml":break
case"<encryption":case"</encryption>":break
case"<keyData":r.forEach(function(e){n[e]=t[e]})
break
case"<dataIntegrity":n.encryptedHmacKey=t.encryptedHmacKey,n.encryptedHmacValue=t.encryptedHmacValue
break
case"<keyEncryptors>":case"<keyEncryptors":n.encs=[]
break
case"</keyEncryptors>":break
case"<keyEncryptor":n.uri=t.uri
break
case"</keyEncryptor>":break
case"<encryptedKey":n.encs.push(t)
break
default:throw t[0]}}),n}(e)]}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+t.Minor)}function Qa(e){var t,r,n=0,a=Xa(e),s=a.length+1
for((t=te(s))[0]=a.length,r=1;r!=s;++r)t[r]=a[r-1]
for(r=s-1;0<=r;--r)n=((0==(16384&n)?0:1)|n<<1&32767)^t[r]
return 52811^n}var Ja,qa,es,ts,rs=(Ja=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],qa=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],es=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],ts=function(e,t){return 255&((r=e^t)/2|128*r)
var r},function(e){for(var t,r,n,a=Xa(e),s=function(e){for(var t=qa[e.length-1],r=104,n=e.length-1;0<=n;--n)for(var a=e[n],s=0;7!=s;++s)64&a&&(t^=es[r]),a*=2,--r
return t}(a),i=a.length,o=te(16),l=0;16!=l;++l)o[l]=0
for(1==(1&i)&&(t=s>>8,o[i]=ts(Ja[0],t),--i,t=255&s,r=a[a.length-1],o[i]=ts(r,t));0<i;)t=s>>8,o[--i]=ts(a[i],t),t=255&s,o[--i]=ts(a[i],t)
for(n=(i=15)-a.length;0<n;)t=s>>8,o[i]=ts(Ja[n],t),--n,t=255&s,o[--i]=ts(a[i],t),--i,--n
return o}),ns=function(e){var r=0,n=rs(e)
return function(e){var t=function(e,t,r,n,a){var s,i
for(a||(a=t),n||(n=rs(e)),s=0;s!=t.length;++s)i=t[s],i=255&((i^=n[r])>>5|i<<3),a[s]=i,++r
return[a,r,n]}("",e,r,n)
return r=t[1],t[0]}}
function as(e,t,r){var n=r||{}
return n.Info=e.read_shift(2),e.l-=2,1===n.Info?n.Data=function(e){var t={},r=t.EncryptionVersionInfo=Ga(e,4)
if(1!=r.Major||1!=r.Minor)throw"unrecognized version code "+r.Major+" : "+r.Minor
return t.Salt=e.read_shift(16),t.EncryptedVerifier=e.read_shift(16),t.EncryptedVerifierHash=e.read_shift(16),t}(e):n.Data=function(e,t){var r={},n=r.EncryptionVersionInfo=Ga(e,4)
if(t-=4,2!=n.Minor)throw new Error("unrecognized minor version code: "+n.Minor)
if(4<n.Major||n.Major<2)throw new Error("unrecognized major version code: "+n.Major)
r.Flags=e.read_shift(4),t-=4
var a=e.read_shift(4)
return t-=4,r.EncryptionHeader=Ka(e,a),t-=a,r.EncryptionVerifier=$a(e,t),r}(e,t),n}var ss=function(){function r(e,t){switch(t.type){case"base64":return n(q.decode(e),t)
case"binary":return n(e,t)
case"buffer":return n(e.toString("binary"),t)
case"array":return n(y(e),t)}throw new Error("Unrecognized type "+t.type)}function n(e,t){var r=(t||{}).dense?[]:{}
if(!e.match(/\\trowd/))throw new Error("RTF missing table")
return r["!ref"]=$t({s:{c:0,r:0},e:{c:0,r:0}}),r}return{to_workbook:function(e,t){return qt(r(e,t),t)},to_sheet:r,from_sheet:function(e){for(var t,r=["{\\rtf1\\ansi"],n=Zt(e["!ref"]),a=Array.isArray(e),s=n.s.r;s<=n.e.r;++s){r.push("\\trowd\\trautofit1")
for(var i=n.s.c;i<=n.e.c;++i)r.push("\\cellx"+(i+1))
for(r.push("\\pard\\intbl"),i=n.s.c;i<=n.e.c;++i){var o=Yt({r:s,c:i});(t=a?(e[s]||[])[i]:e[o])&&(null!=t.v||t.f&&!t.F)&&(r.push(" "+(t.w||(Jt(t),t.w))),r.push("\\cell"))}r.push("\\pard\\intbl\\row")}return r.join("")+"}"}}}()
function is(e){for(var t=0,r=1;3!=t;++t)r=256*r+(255<e[t]?255:e[t]<0?0:e[t])
return r.toString(16).toUpperCase().slice(1)}function os(e,t){if(0===t)return e
var r,n,a=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(t,r,n),s=Math.min(t,r,n),i=a-s
if(0===i)return[0,0,t]
var o,l=0,c=a+s
switch(o=i/(1<c?2-c:c),a){case t:l=((r-n)/i+6)%6
break
case r:l=(n-t)/i+2
break
case n:l=(t-r)/i+4}return[l/6,o,c/2]}((n=(r=e).slice("#"===r[0]?1:0).slice(0,6),[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16)]))
return a[2]=t<0?a[2]*(1+t):1-(1-a[2])*(1-t),is(function(e){var t,r=e[0],n=e[1],a=e[2],s=2*n*(a<.5?a:1-a),i=a-s/2,o=[i,i,i],l=6*r
if(0!==n)switch(0|l){case 0:case 6:t=s*l,o[0]+=s,o[1]+=t
break
case 1:t=s*(2-l),o[0]+=t,o[1]+=s
break
case 2:t=s*(l-2),o[1]+=s,o[2]+=t
break
case 3:t=s*(4-l),o[1]+=t,o[2]+=s
break
case 4:t=s*(l-4),o[2]+=s,o[0]+=t
break
case 5:t=s*(6-l),o[2]+=t,o[0]+=s}for(var c=0;3!=c;++c)o[c]=Math.round(255*o[c])
return o}(a))}var ls=6,cs=15,fs=1,hs=ls
function us(e){return Math.floor((e+Math.round(128/hs)/256)*hs)}function ds(e){return Math.floor((e-5)/hs*100+.5)/100}function ps(e){return Math.round((e*hs+5)/hs*256)/256}function gs(e){return ps(ds(us(e)))}function ms(e){var t=Math.abs(e-gs(e)),r=hs
if(.005<t)for(hs=fs;hs<cs;++hs)Math.abs(e-gs(e))<=t&&(t=Math.abs(e-gs(e)),r=hs)
hs=r}function bs(e){e.width?(e.wpx=us(e.width),e.wch=ds(e.wpx),e.MDW=hs):e.wpx?(e.wch=ds(e.wpx),e.width=ps(e.wch),e.MDW=hs):"number"==typeof e.wch&&(e.width=ps(e.wch),e.wpx=us(e.width),e.MDW=hs),e.customWidth&&delete e.customWidth}var vs=96
function ws(e){return 96*e/vs}function Cs(e){return e*vs/96}var Es,Ss,As,_s,Bs,Ts={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"},ys=["numFmtId","fillId","fontId","borderId","xfId"],ks=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"],xs=(Es=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,Ss=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,As=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,_s=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,Bs=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/,function(e,t,r){var n,a,s,i,o,l,c={}
return e&&((n=(e=e.replace(/<!--([\s\S]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"")).match(Es))&&function(e,t,r){t.NumberFmt=[]
for(var n=me(de._table),a=0;a<n.length;++a)t.NumberFmt[n[a]]=de._table[n[a]]
var s=e[0].match(z)
if(s)for(a=0;a<s.length;++a){var i=ve(s[a])
switch(Z(i[0])){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break
case"<numFmt":var o=Ee(Re(i.formatCode)),l=parseInt(i.numFmtId,10)
if(t.NumberFmt[l]=o,0<l){if(392<l){for(l=392;60<l&&null!=t.NumberFmt[l];--l);t.NumberFmt[l]=o}de.load(o,l)}break
case"</numFmt>":break
default:if(r.WTF)throw new Error("unrecognized "+i[0]+" in numFmts")}}}(n,c,r),(n=e.match(_s))&&function(e,n,a,s){n.Fonts=[]
var i={},o=!1
e[0].match(z).forEach(function(e){var t=ve(e)
switch(Z(t[0])){case"<fonts":case"<fonts>":case"</fonts>":break
case"<font":case"<font>":break
case"</font>":case"<font/>":n.Fonts.push(i),i={}
break
case"<name":t.val&&(i.name=t.val)
break
case"<name/>":case"</name>":break
case"<b":i.bold=t.val?Ie(t.val):1
break
case"<b/>":i.bold=1
break
case"<i":i.italic=t.val?Ie(t.val):1
break
case"<i/>":i.italic=1
break
case"<u":switch(t.val){case"none":i.underline=0
break
case"single":i.underline=1
break
case"double":i.underline=2
break
case"singleAccounting":i.underline=33
break
case"doubleAccounting":i.underline=34}break
case"<u/>":i.underline=1
break
case"<strike":i.strike=t.val?Ie(t.val):1
break
case"<strike/>":i.strike=1
break
case"<outline":i.outline=t.val?Ie(t.val):1
break
case"<outline/>":i.outline=1
break
case"<shadow":i.shadow=t.val?Ie(t.val):1
break
case"<shadow/>":i.shadow=1
break
case"<condense":i.condense=t.val?Ie(t.val):1
break
case"<condense/>":i.condense=1
break
case"<extend":i.extend=t.val?Ie(t.val):1
break
case"<extend/>":i.extend=1
break
case"<sz":t.val&&(i.sz=+t.val)
break
case"<sz/>":case"</sz>":break
case"<vertAlign":t.val&&(i.vertAlign=t.val)
break
case"<vertAlign/>":case"</vertAlign>":break
case"<family":t.val&&(i.family=parseInt(t.val,10))
break
case"<family/>":case"</family>":break
case"<scheme":t.val&&(i.scheme=t.val)
break
case"<scheme/>":case"</scheme>":break
case"<charset":if("1"==t.val)break
t.codepage=f[parseInt(t.val,10)]
break
case"<color":if(i.color||(i.color={}),t.auto&&(i.color.auto=Ie(t.auto)),t.rgb)i.color.rgb=t.rgb.slice(-6)
else if(t.indexed){i.color.index=parseInt(t.indexed,10)
var r=Hr[i.color.index]
if(81==i.color.index&&(r=Hr[1]),!r)throw new Error(e)
i.color.rgb=r[0].toString(16)+r[1].toString(16)+r[2].toString(16)}else t.theme&&(i.color.theme=parseInt(t.theme,10),t.tint&&(i.color.tint=parseFloat(t.tint)),t.theme&&a.themeElements&&a.themeElements.clrScheme&&(i.color.rgb=os(a.themeElements.clrScheme[i.color.theme].rgb,i.color.tint||0)))
break
case"<color/>":case"</color>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":o=!0
break
case"</ext>":o=!1
break
default:if(s&&s.WTF&&!o)throw new Error("unrecognized "+t[0]+" in fonts")}})}(n,c,t,r),(n=e.match(As))&&function(e,r,t,n){r.Fills=[]
var a={},s=!1
e[0].match(z).forEach(function(e){var t=ve(e)
switch(Z(t[0])){case"<fills":case"<fills>":case"</fills>":break
case"<fill>":case"<fill":case"<fill/>":a={},r.Fills.push(a)
break
case"</fill>":case"<gradientFill>":break
case"<gradientFill":case"</gradientFill>":r.Fills.push(a),a={}
break
case"<patternFill":case"<patternFill>":t.patternType&&(a.patternType=t.patternType)
break
case"<patternFill/>":case"</patternFill>":break
case"<bgColor":a.bgColor||(a.bgColor={}),t.indexed&&(a.bgColor.indexed=parseInt(t.indexed,10)),t.theme&&(a.bgColor.theme=parseInt(t.theme,10)),t.tint&&(a.bgColor.tint=parseFloat(t.tint)),t.rgb&&(a.bgColor.rgb=t.rgb.slice(-6))
break
case"<bgColor/>":case"</bgColor>":break
case"<fgColor":a.fgColor||(a.fgColor={}),t.theme&&(a.fgColor.theme=parseInt(t.theme,10)),t.tint&&(a.fgColor.tint=parseFloat(t.tint)),t.rgb&&(a.fgColor.rgb=t.rgb.slice(-6))
break
case"<fgColor/>":case"</fgColor>":break
case"<stop":case"<stop/>":case"</stop>":break
case"<color":case"<color/>":case"</color>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":s=!0
break
case"</ext>":s=!1
break
default:if(n&&n.WTF&&!s)throw new Error("unrecognized "+t[0]+" in fills")}})}(n,c,0,r),(n=e.match(Bs))&&function(e,r,t,n){r.Borders=[]
var a={},s=!1
e[0].match(z).forEach(function(e){var t=ve(e)
switch(Z(t[0])){case"<borders":case"<borders>":case"</borders>":break
case"<border":case"<border>":case"<border/>":a={},t.diagonalUp&&(a.diagonalUp=t.diagonalUp),t.diagonalDown&&(a.diagonalDown=t.diagonalDown),r.Borders.push(a)
break
case"</border>":case"<left/>":break
case"<left":case"<left>":case"</left>":case"<right/>":break
case"<right":case"<right>":case"</right>":case"<top/>":break
case"<top":case"<top>":case"</top>":case"<bottom/>":break
case"<bottom":case"<bottom>":case"</bottom>":break
case"<diagonal":case"<diagonal>":case"<diagonal/>":case"</diagonal>":break
case"<horizontal":case"<horizontal>":case"<horizontal/>":case"</horizontal>":break
case"<vertical":case"<vertical>":case"<vertical/>":case"</vertical>":break
case"<start":case"<start>":case"<start/>":case"</start>":break
case"<end":case"<end>":case"<end/>":case"</end>":break
case"<color":case"<color>":break
case"<color/>":case"</color>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":s=!0
break
case"</ext>":s=!1
break
default:if(n&&n.WTF&&!s)throw new Error("unrecognized "+t[0]+" in borders")}})}(n,c,0,r),(n=e.match(Ss))&&(a=n,i=r,(s=c).CellXf=[],l=!1,a[0].match(z).forEach(function(e){var t=ve(e),r=0
switch(Z(t[0])){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break
case"<xf":case"<xf/>":for(delete(o=t)[0],r=0;r<ys.length;++r)o[ys[r]]&&(o[ys[r]]=parseInt(o[ys[r]],10))
for(r=0;r<ks.length;++r)o[ks[r]]&&(o[ks[r]]=Ie(o[ks[r]]))
if(392<o.numFmtId)for(r=392;60<r;--r)if(s.NumberFmt[o.numFmtId]==s.NumberFmt[r]){o.numFmtId=r
break}s.CellXf.push(o)
break
case"</xf>":break
case"<alignment":case"<alignment/>":var n={}
t.vertical&&(n.vertical=t.vertical),t.horizontal&&(n.horizontal=t.horizontal),null!=t.textRotation&&(n.textRotation=t.textRotation),t.indent&&(n.indent=t.indent),t.wrapText&&(n.wrapText=t.wrapText),o.alignment=n
break
case"</alignment>":break
case"<protection":case"</protection>":case"<protection/>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":l=!0
break
case"</ext>":l=!1
break
default:if(i&&i.WTF&&!l)throw new Error("unrecognized "+t[0]+" in cellXfs")}}))),c}),Is=Ke("styleSheet",null,{xmlns:Je.main[0],"xmlns:vt":Je.vt})
function Rs(e,t){var r,n,a,s,i,o=[W,Is]
return e.SSF&&null!=(n=e.SSF,a=["<numFmts>"],[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var t=e[0];t<=e[1];++t)null!=n[t]&&(a[a.length]=Ke("numFmt",null,{numFmtId:t,formatCode:_e(n[t])}))}),r=1===a.length?"":(a[a.length]="</numFmts>",a[0]=Ke("numFmts",null,{count:a.length-2}).replace("/>",">"),a.join("")))&&(o[o.length]=r),o[o.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>',o[o.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>',o[o.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>',o[o.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',s=t.cellXfs,(i=[])[i.length]=Ke("cellXfs",null),s.forEach(function(e){i[i.length]=Ke("xf",null,e)}),i[i.length]="</cellXfs>",(r=2===i.length?"":(i[0]=Ke("cellXfs",null,{count:i.length-2}).replace("/>",">"),i.join("")))&&(o[o.length]=r),o[o.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>',o[o.length]='<dxfs count="0"/>',o[o.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>',2<o.length&&(o[o.length]="</styleSheet>",o[1]=o[1].replace("/>",">")),o.join("")}function Os(e,t,r){r||(r=Dt(6+4*t.length)),r.write_shift(2,e),ar(t,r)
var n=r.length>r.l?r.slice(0,r.l):r
return null==r.l&&(r.l=r.length),n}function Ds(e,t){t||(t=Dt(153)),t.write_shift(2,20*e.sz),function(e,t){t||(t=Dt(2))
var r=(e.italic?2:0)|(e.strike?8:0)|(e.outline?16:0)|(e.shadow?32:0)|(e.condense?64:0)|(e.extend?128:0)
t.write_shift(1,r),t.write_shift(1,0)}(e,t),t.write_shift(2,e.bold?700:400)
var r=0
"superscript"==e.vertAlign?r=1:"subscript"==e.vertAlign&&(r=2),t.write_shift(2,r),t.write_shift(1,e.underline||0),t.write_shift(1,e.family||0),t.write_shift(1,e.charset||0),t.write_shift(1,0),Br(e.color,t)
var n=0
return"major"==e.scheme&&(n=1),"minor"==e.scheme&&(n=2),t.write_shift(1,n),ar(e.name,t),t.length>t.l?t.slice(0,t.l):t}jr.STY="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
var Fs=E(["none","solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"]),Ps=Ot
function Ns(e,t){t||(t=Dt(84))
var r=Fs[e.patternType]
null==r&&(r=40),t.write_shift(4,r)
var n=0
if(40!=r)for(Br({auto:1},t),Br({auto:1},t);n<12;++n)t.write_shift(4,0)
else{for(;n<4;++n)t.write_shift(4,0)
for(;n<12;++n)t.write_shift(4,0)}return t.length>t.l?t.slice(0,t.l):t}function Ls(e,t,r){return r||(r=Dt(16)),r.write_shift(2,t||0),r.write_shift(2,e.numFmtId||0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(1,0),r}function Ms(e,t){return t||(t=Dt(10)),t.write_shift(1,0),t.write_shift(1,0),t.write_shift(4,0),t.write_shift(4,0),t}var Us=Ot
function Hs(e){var t
Nt(e,"BrtBeginBorders",rr(1)),Nt(e,"BrtBorder",(t||(t=Dt(51)),t.write_shift(1,0),Ms(0,t),Ms(0,t),Ms(0,t),Ms(0,t),Ms(0,t),t.length>t.l?t.slice(0,t.l):t)),Nt(e,"BrtEndBorders")}function Ws(e){var t,r
Nt(e,"BrtBeginStyles",rr(1)),Nt(e,"BrtStyle",(t={xfId:0,builtinId:0,name:"Normal"},r||(r=Dt(52)),r.write_shift(4,t.xfId),r.write_shift(2,1),r.write_shift(1,+t.builtinId),r.write_shift(1,0),dr(t.name||"",r),r.length>r.l?r.slice(0,r.l):r)),Nt(e,"BrtEndStyles")}function Vs(e){var t,r,n,a
Nt(e,"BrtBeginTableStyles",(t=0,r="TableStyleMedium9",n="PivotStyleMedium4",(a=Dt(2052)).write_shift(4,t),dr(r,a),dr(n,a),a.length>a.l?a.slice(0,a.l):a)),Nt(e,"BrtEndTableStyles")}function zs(e,t){var r,n,a,s,i,o,l=Pt()
return Nt(l,"BrtBeginStyleSheet"),function(r,n){if(n){var a=0;[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var t=e[0];t<=e[1];++t)null!=n[t]&&++a}),0!=a&&(Nt(r,"BrtBeginFmts",rr(a)),[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var t=e[0];t<=e[1];++t)null!=n[t]&&Nt(r,"BrtFmt",Os(t,n[t]))}),Nt(r,"BrtEndFmts"))}}(l,e.SSF),Nt(r=l,"BrtBeginFonts",rr(1)),Nt(r,"BrtFont",Ds({sz:12,color:{theme:1},name:"Calibri",family:2,scheme:"minor"})),Nt(r,"BrtEndFonts"),Nt(n=l,"BrtBeginFills",rr(2)),Nt(n,"BrtFill",Ns({patternType:"none"})),Nt(n,"BrtFill",Ns({patternType:"gray125"})),Nt(n,"BrtEndFills"),Hs(l),Nt(a=l,"BrtBeginCellStyleXFs",rr(1)),Nt(a,"BrtXF",Ls({numFmtId:0,fontId:0,fillId:0,borderId:0},65535)),Nt(a,"BrtEndCellStyleXFs"),s=l,i=t.cellXfs,Nt(s,"BrtBeginCellXFs",rr(i.length)),i.forEach(function(e){Nt(s,"BrtXF",Ls(e,0))}),Nt(s,"BrtEndCellXFs"),Ws(l),Nt(o=l,"BrtBeginDXFs",rr(0)),Nt(o,"BrtEndDXFs"),Vs(l),Nt(l,"BrtEndStyleSheet"),l.end()}function Xs(e,r,n){r.themeElements.clrScheme=[]
var a={};(e[0].match(z)||[]).forEach(function(e){var t=ve(e)
switch(t[0]){case"<a:clrScheme":case"</a:clrScheme>":break
case"<a:srgbClr":a.rgb=t.val
break
case"<a:sysClr":a.rgb=t.lastClr
break
case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":"/"===t[0].charAt(1)?(r.themeElements.clrScheme.push(a),a={}):a.name=t[0].slice(3,t[0].length-1)
break
default:if(n&&n.WTF)throw new Error("Unrecognized "+t[0]+" in clrScheme")}})}function Gs(){}function js(){}jr.THEME="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
var Ys=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,Ks=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,$s=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/,Zs=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/
function Qs(e,t){if(!e||0===e.length)return Qs(Js())
var r,n,a,s,i,o={}
if(!(r=e.match(Zs)))throw new Error("themeElements not found in theme")
return n=r[0],s=t,(a=o).themeElements={},[["clrScheme",Ys,Xs],["fontScheme",Ks,Gs],["fmtScheme",$s,js]].forEach(function(e){if(!(i=n.match(e[1])))throw new Error(e[0]+" not found in themeElements")
e[2](i,a,s)}),o}function Js(e,t){if(t&&t.themeXLSX)return t.themeXLSX
var r=[W]
return r[r.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',r[r.length]="<a:themeElements>",r[r.length]='<a:clrScheme name="Office">',r[r.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',r[r.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',r[r.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',r[r.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',r[r.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',r[r.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',r[r.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',r[r.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',r[r.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',r[r.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',r[r.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',r[r.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',r[r.length]="</a:clrScheme>",r[r.length]='<a:fontScheme name="Office">',r[r.length]="<a:majorFont>",r[r.length]='<a:latin typeface="Cambria"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Times New Roman"/>',r[r.length]='<a:font script="Hebr" typeface="Times New Roman"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="MoolBoran"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Times New Roman"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:majorFont>",r[r.length]="<a:minorFont>",r[r.length]='<a:latin typeface="Calibri"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Arial"/>',r[r.length]='<a:font script="Hebr" typeface="Arial"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="DaunPenh"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Arial"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:minorFont>",r[r.length]="</a:fontScheme>",r[r.length]='<a:fmtScheme name="Office">',r[r.length]="<a:fillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="1"/>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="0"/>',r[r.length]="</a:gradFill>",r[r.length]="</a:fillStyleLst>",r[r.length]="<a:lnStyleLst>",r[r.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]="</a:lnStyleLst>",r[r.length]="<a:effectStyleLst>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',r[r.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',r[r.length]="</a:effectStyle>",r[r.length]="</a:effectStyleLst>",r[r.length]="<a:bgFillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]="</a:bgFillStyleLst>",r[r.length]="</a:fmtScheme>",r[r.length]="</a:themeElements>",r[r.length]="<a:objectDefaults>",r[r.length]="<a:spDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',r[r.length]="</a:spDef>",r[r.length]="<a:lnDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',r[r.length]="</a:lnDef>",r[r.length]="</a:objectDefaults>",r[r.length]="<a:extraClrSchemeLst/>",r[r.length]="</a:theme>",r.join("")}function qs(e){var t={}
switch(t.xclrType=e.read_shift(2),t.nTintShade=e.read_shift(2),t.xclrType){case 0:e.l+=4
break
case 1:t.xclrValue=Ot(e,4)
break
case 2:t.xclrValue=jn(e)
break
case 3:t.xclrValue=e.read_shift(4)
break
case 4:e.l+=4}return e.l+=8,t}function ei(e){var t=e.read_shift(2),r=e.read_shift(2)-4,n=[t]
switch(t){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:n[1]=qs(e)
break
case 6:n[1]=Ot(e,r)
break
case 14:case 15:n[1]=e.read_shift(1===r?1:2)
break
default:throw new Error("Unrecognized ExtProp type: "+t+" "+r)}return n}jr.IMG="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",jr.DRAW="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
var ti=1024
function ri(e,t){for(var r=[21600,21600],n=["m0,0l0",r[1],r[0],r[1],r[0],"0xe"].join(","),a=[Ke("xml",null,{"xmlns:v":qe.v,"xmlns:o":qe.o,"xmlns:x":qe.x,"xmlns:mv":qe.mv}).replace(/\/>/,">"),Ke("o:shapelayout",Ke("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"}),Ke("v:shapetype",[Ke("v:stroke",null,{joinstyle:"miter"}),Ke("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202","o:spt":202,coordsize:r.join(","),path:n})];ti<1e3*e;)ti+=1e3
return t.forEach(function(e){var t=jt(e[0])
a=a.concat(["<v:shape"+Ye({id:"_x0000_s"+ ++ti,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10"+(e[1].hidden?";visibility:hidden":""),fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",Ke("v:fill",Ke("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}),{color2:"#BEFF82",angle:"-180",type:"gradient"}),Ke("v:shadow",null,{on:"t",obscured:"t"}),Ke("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",je("x:Anchor",[t.c,0,t.r,0,t.c+3,100,t.r+5,100].join(",")),je("x:AutoFill","False"),je("x:Row",String(t.r)),je("x:Column",String(t.c)),e[1].hidden?"":"<x:Visible/>","</x:ClientData>","</v:shape>"])}),a.push("</xml>"),a.join("")}function ni(e,s,t){var i,o,l=Array.isArray(s)
t.forEach(function(e){if(!(i=l?(o=jt(e.ref),s[o.r]||(s[o.r]=[]),s[o.r][o.c]):s[e.ref])){i={},l?s[o.r][o.c]=i:s[e.ref]=i
var t=Zt(s["!ref"]||"BDWGO1000001:A1"),r=jt(e.ref)
t.s.r>r.r&&(t.s.r=r.r),t.e.r<r.r&&(t.e.r=r.r),t.s.c>r.c&&(t.s.c=r.c),t.e.c<r.c&&(t.e.c=r.c)
var n=$t(t)
n!==s["!ref"]&&(s["!ref"]=n)}i.c||(i.c=[])
var a={a:e.author,t:e.t,r:e.r}
e.h&&(a.h=e.h),i.c.push(a)})}jr.CMNT="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
var ai=Ke("comments",null,{xmlns:Je.main[0]}),si=nr
function ii(e){var s=Pt(),i=[]
return Nt(s,"BrtBeginComments"),Nt(s,"BrtBeginCommentAuthors"),e.forEach(function(e){e[1].forEach(function(e){-1<i.indexOf(e.a)||(i.push(e.a.slice(0,54)),Nt(s,"BrtCommentAuthor",ar(e.a.slice(0,54))))})}),Nt(s,"BrtEndCommentAuthors"),Nt(s,"BrtBeginCommentList"),e.forEach(function(a){a[1].forEach(function(e){e.iauthor=i.indexOf(e.a)
var t,r,n={s:jt(a[0]),e:jt(a[0])}
Nt(s,"BrtBeginComment",(t=[n,e],null==r&&(r=Dt(36)),r.write_shift(4,t[1].iauthor),Cr(t[0],r),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(4,0),r)),e.t&&0<e.t.length&&Nt(s,"BrtCommentText",or(e)),Nt(s,"BrtEndComment"),delete e.iauthor})}),Nt(s,"BrtEndCommentList"),Nt(s,"BrtEndComments"),s.end()}var oi="application/vnd.ms-office.vbaProject",li=["xlsb","xlsm","xlam","biff8","xla"]
jr.DS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",jr.MS="http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet"
var ci=function(){var r=/(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g,f={r:0,c:0}
function n(e,t,r,n,a,s){var i=0<n.length?0|parseInt(n,10):0,o=0<s.length?0|parseInt(s,10):0
o<0&&0===a.length&&(o=0)
var l=!1,c=!1
return(0<a.length||0==s.length)&&(l=!0),l?o+=f.c:--o,(0<r.length||0==n.length)&&(c=!0),c?i+=f.r:--i,t+(l?"":"$")+Xt(o)+(c?"":"$")+Vt(i)}return function(e,t){return f=t,e.replace(r,n)}}(),fi=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)([1-9]\d{0,5}|10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6])(?![_.\(A-Za-z0-9])/g,hi=function(e,l){return e.replace(fi,function(e,t,r,n,a,s){var i=zt(n)-(r?0:l.c),o=Wt(s)-(a?0:l.r)
return t+"R"+(0==o?"":a?o+1:"["+o+"]")+"C"+(0==i?"":r?i+1:"["+i+"]")})}
function ui(e,t,r){var i,n=Kt(t).s,a=jt(r),s={r:a.r-n.r,c:a.c-n.c}
return i=s,e.replace(fi,function(e,t,r,n,a,s){return t+("$"==r?r+n:Xt(zt(n)+i.c))+("$"==a?a+s:Vt(Wt(s)+i.r))})}function di(e){return e.replace(/_xlfn\./g,"")}function pi(e){e.l+=1}function gi(e,t){var r=e.read_shift(1==t?1:2)
return[16383&r,r>>14&1,r>>15&1]}function mi(e,t,r){var n=2
if(r){if(2<=r.biff&&r.biff<=5)return bi(e)
12==r.biff&&(n=4)}var a=e.read_shift(n),s=e.read_shift(n),i=gi(e,2),o=gi(e,2)
return{s:{r:a,c:i[0],cRel:i[1],rRel:i[2]},e:{r:s,c:o[0],cRel:o[1],rRel:o[2]}}}function bi(e){var t=gi(e,2),r=gi(e,2),n=e.read_shift(1),a=e.read_shift(1)
return{s:{r:t[0],c:n,cRel:t[1],rRel:t[2]},e:{r:r[0],c:a,cRel:r[1],rRel:r[2]}}}function vi(e,t,r){if(r&&2<=r.biff&&r.biff<=5)return a=gi(n=e,2),s=n.read_shift(1),{r:a[0],c:s,cRel:a[1],rRel:a[2]}
var n,a,s,i=e.read_shift(r&&12==r.biff?4:2),o=gi(e,2)
return{r:i,c:o[0],cRel:o[1],rRel:o[2]}}function wi(e){return[e.read_shift(1),e.read_shift(1)]}function Ci(e,t){var r=[e.read_shift(1)]
if(12==t)switch(r[0]){case 2:r[0]=4
break
case 4:r[0]=16
break
case 0:r[0]=1
break
case 1:r[0]=2}switch(r[0]){case 4:r[1]=Dn(e,1)?"TRUE":"FALSE",12!=t&&(e.l+=7)
break
case 37:case 16:r[1]=Ar[e[e.l]],e.l+=12==t?4:8
break
case 0:e.l+=8
break
case 1:r[1]=Er(e)
break
case 2:r[1]=Vn(e,0,{biff:0<t&&t<8?2:t})
break
default:throw new Error("Bad SerAr: "+r[0])}return r}function Ei(e,t,r){for(var n=e.read_shift(12==r.biff?4:2),a=[],s=0;s!=n;++s)a.push((12==r.biff?wr:Qn)(e,8))
return a}function Si(e,t,r){var n=0,a=0
12==r.biff?(n=e.read_shift(4),a=e.read_shift(4)):(a=1+e.read_shift(1),n=1+e.read_shift(2)),2<=r.biff&&r.biff<8&&(--n,0==--a&&(a=256))
for(var s=0,i=[];s!=n&&(i[s]=[]);++s)for(var o=0;o!=a;++o)i[s][o]=Ci(e,r.biff)
return i}function Ai(e,t,r){return e.l+=2,[(n=e,a=n.read_shift(2),s=n.read_shift(2),{r:a,c:255&s,fQuoted:!!(16384&s),cRel:s>>15,rRel:s>>15})]
var n,a,s}function _i(e){return e.l+=6,[]}var Bi=Ai,Ti=_i,yi=_i,ki=Ai
function xi(e){return e.l+=2,[Pn(e),1&e.read_shift(2)]}var Ii=Ai,Ri=xi,Oi=_i,Di=Ai,Fi=Ai,Pi=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"],Ni={1:{n:"PtgExp",f:function(e,t,r){return e.l++,r&&12==r.biff?[e.read_shift(4,"i"),0]:[e.read_shift(2),e.read_shift(r&&2==r.biff?1:2)]}},2:{n:"PtgTbl",f:Ot},3:{n:"PtgAdd",f:pi},4:{n:"PtgSub",f:pi},5:{n:"PtgMul",f:pi},6:{n:"PtgDiv",f:pi},7:{n:"PtgPower",f:pi},8:{n:"PtgConcat",f:pi},9:{n:"PtgLt",f:pi},10:{n:"PtgLe",f:pi},11:{n:"PtgEq",f:pi},12:{n:"PtgGe",f:pi},13:{n:"PtgGt",f:pi},14:{n:"PtgNe",f:pi},15:{n:"PtgIsect",f:pi},16:{n:"PtgUnion",f:pi},17:{n:"PtgRange",f:pi},18:{n:"PtgUplus",f:pi},19:{n:"PtgUminus",f:pi},20:{n:"PtgPercent",f:pi},21:{n:"PtgParen",f:pi},22:{n:"PtgMissArg",f:pi},23:{n:"PtgStr",f:function(e,t,r){return e.l++,Mn(e,0,r)}},26:{n:"PtgSheet",f:function(e,t,r){return e.l+=5,e.l+=2,e.l+=2==r.biff?1:4,["PTGSHEET"]}},27:{n:"PtgEndSheet",f:function(e,t,r){return e.l+=2==r.biff?4:5,["PTGENDSHEET"]}},28:{n:"PtgErr",f:function(e){return e.l++,Ar[e.read_shift(1)]}},29:{n:"PtgBool",f:function(e){return e.l++,0!==e.read_shift(1)}},30:{n:"PtgInt",f:function(e){return e.l++,e.read_shift(2)}},31:{n:"PtgNum",f:function(e){return e.l++,Er(e)}},32:{n:"PtgArray",f:function(e,t,r){var n=(96&e[e.l++])>>5
return e.l+=2==r.biff?6:12==r.biff?14:7,[n]}},33:{n:"PtgFunc",f:function(e,t,r){var n=(96&e[e.l])>>5
e.l+=1
var a=e.read_shift(r&&r.biff<=3?1:2)
return[eo[a],qi[a],n]}},34:{n:"PtgFuncVar",f:function(e,t,r){var n,a=e[e.l++],s=e.read_shift(1),i=r&&r.biff<=3?[88==a?-1:0,e.read_shift(1)]:[(n=e)[n.l+1]>>7,32767&n.read_shift(2)]
return[s,(0===i[0]?qi:Ji)[i[1]]]}},35:{n:"PtgName",f:function(e,t,r){var n=e.read_shift(1)>>>5&3,a=!r||8<=r.biff?4:2,s=e.read_shift(a)
switch(r.biff){case 2:e.l+=5
break
case 3:case 4:e.l+=8
break
case 5:e.l+=12}return[n,0,s]}},36:{n:"PtgRef",f:function(e,t,r){var n=(96&e[e.l])>>5
return e.l+=1,[n,vi(e,0,r)]}},37:{n:"PtgArea",f:function(e,t,r){return[(96&e[e.l++])>>5,mi(e,2<=r.biff&&r.biff,r)]}},38:{n:"PtgMemArea",f:function(e,t,r){var n=e.read_shift(1)>>>5&3
return e.l+=r&&2==r.biff?3:4,[n,e.read_shift(r&&2==r.biff?1:2)]}},39:{n:"PtgMemErr",f:Ot},40:{n:"PtgMemNoMem",f:Ot},41:{n:"PtgMemFunc",f:function(e,t,r){return[e.read_shift(1)>>>5&3,e.read_shift(r&&2==r.biff?1:2)]}},42:{n:"PtgRefErr",f:function(e,t,r){var n=e.read_shift(1)>>>5&3
return e.l+=4,r.biff<8&&e.l--,12==r.biff&&(e.l+=2),[n]}},43:{n:"PtgAreaErr",f:function(e,t,r){var n=(96&e[e.l++])>>5
return e.l+=r&&8<r.biff?12:r.biff<8?6:8,[n]}},44:{n:"PtgRefN",f:function(e,t,r){var n=(96&e[e.l])>>5
return e.l+=1,[n,function(e,t,r){var n,a,s,i,o,l=r&&r.biff?r.biff:8
if(2<=l&&l<=5)return a=(n=e).read_shift(2),s=n.read_shift(1),i=(32768&a)>>15,o=(16384&a)>>14,a&=16383,1==i&&8192<=a&&(a-=16384),1==o&&128<=s&&(s-=256),{r:a,c:s,cRel:o,rRel:i}
var c=e.read_shift(12<=l?4:2),f=e.read_shift(2),h=(16384&f)>>14,u=(32768&f)>>15
if(f&=16383,1==u)for(;524287<c;)c-=1048576
if(1==h)for(;8191<f;)f-=16384
return{r:c,c:f,cRel:h,rRel:u}}(e,0,r)]}},45:{n:"PtgAreaN",f:function(e,t,r){return[(96&e[e.l++])>>5,function(e,t,r){if(r.biff<8)return bi(e)
var n=e.read_shift(12==r.biff?4:2),a=e.read_shift(12==r.biff?4:2),s=gi(e,2),i=gi(e,2)
return{s:{r:n,c:s[0],cRel:s[1],rRel:s[2]},e:{r:a,c:i[0],cRel:i[1],rRel:i[2]}}}(e,0,r)]}},46:{n:"PtgMemAreaN",f:function(e){return[e.read_shift(1)>>>5&3,e.read_shift(2)]}},47:{n:"PtgMemNoMemN",f:function(e){return[e.read_shift(1)>>>5&3,e.read_shift(2)]}},57:{n:"PtgNameX",f:function(e,t,r){return 5==r.biff?function(e){var t=e.read_shift(1)>>>5&3,r=e.read_shift(2,"i")
e.l+=8
var n=e.read_shift(2)
return e.l+=12,[t,r,n]}(e):[e.read_shift(1)>>>5&3,e.read_shift(2),e.read_shift(4)]}},58:{n:"PtgRef3d",f:function(e,t,r){var n=(96&e[e.l])>>5
e.l+=1
var a=e.read_shift(2)
return r&&5==r.biff&&(e.l+=12),[n,a,vi(e,0,r)]}},59:{n:"PtgArea3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e.read_shift(2,"i")
if(r)switch(r.biff){case 5:e.l+=12}return[n,a,mi(e,0,r)]}},60:{n:"PtgRefErr3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e.read_shift(2),s=4
if(r)switch(r.biff){case 5:s=15
break
case 12:s=6}return e.l+=s,[n,a]}},61:{n:"PtgAreaErr3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e.read_shift(2),s=8
if(r)switch(r.biff){case 5:e.l+=12,s=6
break
case 12:s=12}return e.l+=s,[n,a]}},255:{}},Li={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61}
!function(){for(var e in Li)Ni[e]=Ni[Li[e]]}()
var Mi={1:{n:"PtgElfLel",f:xi},2:{n:"PtgElfRw",f:Di},3:{n:"PtgElfCol",f:Bi},6:{n:"PtgElfRwV",f:Fi},7:{n:"PtgElfColV",f:ki},10:{n:"PtgElfRadical",f:Ii},11:{n:"PtgElfRadicalS",f:Oi},13:{n:"PtgElfColS",f:Ti},15:{n:"PtgElfColSV",f:yi},16:{n:"PtgElfRadicalLel",f:Ri},25:{n:"PtgList",f:function(e){e.l+=2
var t=e.read_shift(2),r=e.read_shift(2),n=e.read_shift(4),a=e.read_shift(2),s=e.read_shift(2)
return{ixti:t,coltype:3&r,rt:Pi[r>>2&31],idx:n,c:a,C:s}}},29:{n:"PtgSxName",f:function(e){return e.l+=2,[e.read_shift(4)]}},255:{}},Ui={0:{n:"PtgAttrNoop",f:function(e){return e.l+=4,[0,0]}},1:{n:"PtgAttrSemi",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=r&&2==r.biff?3:4,[n]}},2:{n:"PtgAttrIf",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=2,[n,e.read_shift(r&&2==r.biff?1:2)]}},4:{n:"PtgAttrChoose",f:function(e,t,r){e.l+=2
for(var n=e.read_shift(r&&2==r.biff?1:2),a=[],s=0;s<=n;++s)a.push(e.read_shift(r&&2==r.biff?1:2))
return a}},8:{n:"PtgAttrGoto",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=2,[n,e.read_shift(r&&2==r.biff?1:2)]}},16:{n:"PtgAttrSum",f:function(e,t,r){e.l+=r&&2==r.biff?3:4}},32:{n:"PtgAttrBaxcel",f:function(e){var t=1&e[e.l+1]
return e.l+=4,[t,1]}},64:{n:"PtgAttrSpace",f:function(e){return e.read_shift(2),wi(e)}},65:{n:"PtgAttrSpaceSemi",f:function(e){return e.read_shift(2),wi(e)}},128:{n:"PtgAttrIfError",f:function(e){var t=255&e[e.l+1]?1:0
return e.l+=2,[t,e.read_shift(2)]}},255:{}}
function Hi(e,t,r,n){if(n.biff<8)return Ot(e,t)
for(var a=e.l+t,s=[],i=0;i!==r.length;++i)switch(r[i][0]){case"PtgArray":r[i][1]=Si(e,0,n),s.push(r[i][1])
break
case"PtgMemArea":r[i][2]=Ei(e,r[i][1],n),s.push(r[i][2])
break
case"PtgExp":n&&12==n.biff&&(r[i][1][1]=e.read_shift(4),s.push(r[i][1]))
break
case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+r[i][0]}return 0!=(t=a-e.l)&&s.push(Ot(e,t)),s}function Wi(e,t,r){for(var n,a,s=e.l+t,i=[];s!=e.l;)t=s-e.l,a=e[e.l],n=Ni[a],24!==a&&25!==a||(n=(24===a?Mi:Ui)[e[e.l+1]]),n&&n.f?i.push([n.n,n.f(e,t,r)]):Ot(e,t)
return i}function Vi(e){for(var t=[],r=0;r<e.length;++r){for(var n=e[r],a=[],s=0;s<n.length;++s){var i=n[s]
if(i)switch(i[0]){case 2:a.push('"'+i[1].replace(/"/g,'""')+'"')
break
default:a.push(i[1])}else a.push("")}t.push(a.join(","))}return t.join(";")}Ui[33]=Ui[32]
var zi={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"}
function Xi(e,t,r){return function(e,t){if(!(e||t&&t.biff<=5&&2<=t.biff))throw new Error("empty sheet name")
return-1<e.indexOf(" ")?"'"+e+"'":e}(function(e,t,r){if(!e)return"SH33TJSERR0"
if(!e.XTI)return"SH33TJSERR6"
var n=e.XTI[t]
if(8<r.biff&&!e.XTI[t])return e.SheetNames[t]
if(r.biff<8)return 1e4<t&&(t-=65536),t<0&&(t=-t),0==t?"":e.XTI[t-1]
if(!n)return"SH33TJSERR1"
var a=""
if(8<r.biff)switch(e[n[0]][0]){case 357:return a=-1==n[1]?"#REF":e.SheetNames[n[1]],n[1]==n[2]?a:a+":"+e.SheetNames[n[2]]
case 358:return null!=r.SID?e.SheetNames[r.SID]:"SH33TJSSAME"+e[n[0]][0]
case 355:default:return"SH33TJSSRC"+e[n[0]][0]}switch(e[n[0]][0][0]){case 1025:return a=-1==n[1]?"#REF":e.SheetNames[n[1]]||"SH33TJSERR3",n[1]==n[2]?a:a+":"+e.SheetNames[n[2]]
case 14849:return"SH33TJSERR8"
default:return e[n[0]][0][3]?(a=-1==n[1]?"#REF":e[n[0]][0][3][n[1]]||"SH33TJSERR4",n[1]==n[2]?a:a+":"+e[n[0]][0][3][n[2]]):"SH33TJSERR2"}}(e,t,r),r)}function Gi(e,t,r,n,a){var s,i,o,l,c=a&&a.biff||8,f={s:{c:0,r:0},e:{c:0,r:0}},h=[],u=0,d=0,p=""
if(!e[0]||!e[0][0])return""
for(var g=-1,m="",b=0,v=e[0].length;b<v;++b){var w=e[0][b]
switch(w[0]){case"PtgUminus":h.push("-"+h.pop())
break
case"PtgUplus":h.push("+"+h.pop())
break
case"PtgPercent":h.push(h.pop()+"%")
break
case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(s=h.pop(),i=h.pop(),0<=g){switch(e[0][g][1][0]){case 0:m=F(" ",e[0][g][1][1])
break
case 1:m=F("\r",e[0][g][1][1])
break
default:if(m="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}i+=m,g=-1}h.push(i+zi[w[0]]+s)
break
case"PtgIsect":s=h.pop(),i=h.pop(),h.push(i+" "+s)
break
case"PtgUnion":s=h.pop(),i=h.pop(),h.push(i+","+s)
break
case"PtgRange":s=h.pop(),i=h.pop(),h.push(i+":"+s)
break
case"PtgAttrChoose":case"PtgAttrGoto":case"PtgAttrIf":case"PtgAttrIfError":break
case"PtgRef":o=Lt(w[1][1],f,a),h.push(Ut(o,c))
break
case"PtgRefN":o=r?Lt(w[1][1],r,a):w[1][1],h.push(Ut(o,c))
break
case"PtgRef3d":u=w[1][1],o=Lt(w[1][2],f,a),p=Xi(n,u,a),h.push(p+"!"+Ut(o,c))
break
case"PtgFunc":case"PtgFuncVar":var C=w[1][0],E=w[1][1]
C||(C=0)
var S=0==(C&=127)?[]:h.slice(-C)
h.length-=C,"User"===E&&(E=S.shift()),h.push(E+"("+S.join(",")+")")
break
case"PtgBool":h.push(w[1]?"TRUE":"FALSE")
break
case"PtgInt":h.push(w[1])
break
case"PtgNum":h.push(String(w[1]))
break
case"PtgStr":h.push('"'+w[1]+'"')
break
case"PtgErr":h.push(w[1])
break
case"PtgAreaN":l=Mt(w[1][1],r?{s:r}:f,a),h.push(Ht(l,a))
break
case"PtgArea":l=Mt(w[1][1],f,a),h.push(Ht(l,a))
break
case"PtgArea3d":u=w[1][1],l=w[1][2],p=Xi(n,u,a),h.push(p+"!"+Ht(l,a))
break
case"PtgAttrSum":h.push("SUM("+h.pop()+")")
break
case"PtgAttrBaxcel":case"PtgAttrSemi":break
case"PtgName":d=w[1][2]
var A=(n.names||[])[d-1]||(n[0]||[])[d],_=A?A.Name:"SH33TJSNAME"+String(d)
_ in to&&(_=to[_]),h.push(_)
break
case"PtgNameX":var B,T=w[1][1]
if(d=w[1][2],!(a.biff<=5)){var y=""
14849==((n[T]||[])[0]||[])[0]||(1025==((n[T]||[])[0]||[])[0]?n[T][d]&&0<n[T][d].itab&&(y=n.SheetNames[n[T][d].itab-1]+"!"):y=n.SheetNames[d-1]+"!"),n[T]&&n[T][d]?y+=n[T][d].Name:n[0]&&n[0][d]?y+=n[0][d].Name:y+="SH33TJSERRX",h.push(y)
break}T<0&&(T=-T),n[T]&&(B=n[T][d]),B||(B={Name:"SH33TJSERRY"}),h.push(B.Name)
break
case"PtgParen":var k="(",x=")"
if(0<=g){switch(m="",e[0][g][1][0]){case 2:k=F(" ",e[0][g][1][1])+k
break
case 3:k=F("\r",e[0][g][1][1])+k
break
case 4:x=F(" ",e[0][g][1][1])+x
break
case 5:x=F("\r",e[0][g][1][1])+x
break
default:if(a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}g=-1}h.push(k+h.pop()+x)
break
case"PtgRefErr":case"PtgRefErr3d":h.push("#REF!")
break
case"PtgExp":o={c:w[1][1],r:w[1][0]}
var I={c:r.c,r:r.r}
if(n.sharedf[Yt(o)]){var R=n.sharedf[Yt(o)]
h.push(Gi(R,0,I,n,a))}else{var O=!1
for(s=0;s!=n.arrayf.length;++s)if(i=n.arrayf[s],!(o.c<i[0].s.c||o.c>i[0].e.c||o.r<i[0].s.r||o.r>i[0].e.r)){h.push(Gi(i[1],0,I,n,a)),O=!0
break}O||h.push(w[1])}break
case"PtgArray":h.push("{"+Vi(w[1])+"}")
break
case"PtgMemArea":break
case"PtgAttrSpace":case"PtgAttrSpaceSemi":g=b
break
case"PtgTbl":case"PtgMemErr":break
case"PtgMissArg":h.push("")
break
case"PtgAreaErr":case"PtgAreaErr3d":h.push("#REF!")
break
case"PtgList":h.push("Table"+w[1].idx+"[#"+w[1].rt+"]")
break
case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":case"PtgMemFunc":case"PtgMemNoMem":break
case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs")
case"PtgSxName":default:throw new Error("Unrecognized Formula Token: "+String(w))}if(3!=a.biff&&0<=g&&-1==["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"].indexOf(e[0][b][0])){var D=!0
switch((w=e[0][g])[1][0]){case 4:D=!1
case 0:m=F(" ",w[1][1])
break
case 5:D=!1
case 1:m=F("\r",w[1][1])
break
default:if(m="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+w[1][0])}h.push((D?m:"")+h.pop()+(D?"":m)),g=-1}}if(1<h.length&&a.WTF)throw new Error("bad formula stack")
return h[0]}function ji(e,t,r){var n=e.l+t,a=Kn(e)
2==r.biff&&++e.l
var s=function(e){var t
if(65535!==Ct(e,e.l+6))return[Er(e),"n"]
switch(e[e.l]){case 0:return e.l+=8,["String","s"]
case 1:return t=1===e[e.l+2],e.l+=8,[t,"b"]
case 2:return t=e[e.l+2],e.l+=8,[t,"e"]
case 3:return e.l+=8,["","s"]}return[]}(e),i=e.read_shift(1)
2!=r.biff&&(e.read_shift(1),5<=r.biff&&e.read_shift(4))
var o=function(e,t,r){var n,a=e.l+t,s=2==r.biff?1:2,i=e.read_shift(s)
if(65535==i)return[[],Ot(e,t-2)]
var o=Wi(e,i,r)
return t!==i+s&&(n=Hi(e,t-i-s,o,r)),e.l=a,[o,n]}(e,n-e.l,r)
return{cell:a,val:s[0],formula:o,shared:i>>3&1,tt:s[1]}}function Yi(e,t,r){var n=Wi(e,e.read_shift(4),r),a=e.read_shift(4)
return[n,0<a?Hi(e,a,n,r):null]}var Ki=Yi,$i=Yi,Zi=Yi,Qi=Yi,Ji={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},qi={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},eo={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0},to={"_xlfn.ACOT":"ACOT","_xlfn.ACOTH":"ACOTH","_xlfn.AGGREGATE":"AGGREGATE","_xlfn.ARABIC":"ARABIC","_xlfn.AVERAGEIF":"AVERAGEIF","_xlfn.AVERAGEIFS":"AVERAGEIFS","_xlfn.BASE":"BASE","_xlfn.BETA.DIST":"BETA.DIST","_xlfn.BETA.INV":"BETA.INV","_xlfn.BINOM.DIST":"BINOM.DIST","_xlfn.BINOM.DIST.RANGE":"BINOM.DIST.RANGE","_xlfn.BINOM.INV":"BINOM.INV","_xlfn.BITAND":"BITAND","_xlfn.BITLSHIFT":"BITLSHIFT","_xlfn.BITOR":"BITOR","_xlfn.BITRSHIFT":"BITRSHIFT","_xlfn.BITXOR":"BITXOR","_xlfn.CEILING.MATH":"CEILING.MATH","_xlfn.CEILING.PRECISE":"CEILING.PRECISE","_xlfn.CHISQ.DIST":"CHISQ.DIST","_xlfn.CHISQ.DIST.RT":"CHISQ.DIST.RT","_xlfn.CHISQ.INV":"CHISQ.INV","_xlfn.CHISQ.INV.RT":"CHISQ.INV.RT","_xlfn.CHISQ.TEST":"CHISQ.TEST","_xlfn.COMBINA":"COMBINA","_xlfn.CONCAT":"CONCAT","_xlfn.CONFIDENCE.NORM":"CONFIDENCE.NORM","_xlfn.CONFIDENCE.T":"CONFIDENCE.T","_xlfn.COT":"COT","_xlfn.COTH":"COTH","_xlfn.COUNTIFS":"COUNTIFS","_xlfn.COVARIANCE.P":"COVARIANCE.P","_xlfn.COVARIANCE.S":"COVARIANCE.S","_xlfn.CSC":"CSC","_xlfn.CSCH":"CSCH","_xlfn.DAYS":"DAYS","_xlfn.DECIMAL":"DECIMAL","_xlfn.ECMA.CEILING":"ECMA.CEILING","_xlfn.ERF.PRECISE":"ERF.PRECISE","_xlfn.ERFC.PRECISE":"ERFC.PRECISE","_xlfn.EXPON.DIST":"EXPON.DIST","_xlfn.F.DIST":"F.DIST","_xlfn.F.DIST.RT":"F.DIST.RT","_xlfn.F.INV":"F.INV","_xlfn.F.INV.RT":"F.INV.RT","_xlfn.F.TEST":"F.TEST","_xlfn.FILTERXML":"FILTERXML","_xlfn.FLOOR.MATH":"FLOOR.MATH","_xlfn.FLOOR.PRECISE":"FLOOR.PRECISE","_xlfn.FORECAST.ETS":"FORECAST.ETS","_xlfn.FORECAST.ETS.CONFINT":"FORECAST.ETS.CONFINT","_xlfn.FORECAST.ETS.SEASONALITY":"FORECAST.ETS.SEASONALITY","_xlfn.FORECAST.ETS.STAT":"FORECAST.ETS.STAT","_xlfn.FORECAST.LINEAR":"FORECAST.LINEAR","_xlfn.FORMULATEXT":"FORMULATEXT","_xlfn.GAMMA":"GAMMA","_xlfn.GAMMA.DIST":"GAMMA.DIST","_xlfn.GAMMA.INV":"GAMMA.INV","_xlfn.GAMMALN.PRECISE":"GAMMALN.PRECISE","_xlfn.GAUSS":"GAUSS","_xlfn.HYPGEOM.DIST":"HYPGEOM.DIST","_xlfn.IFERROR":"IFERROR","_xlfn.IFNA":"IFNA","_xlfn.IFS":"IFS","_xlfn.IMCOSH":"IMCOSH","_xlfn.IMCOT":"IMCOT","_xlfn.IMCSC":"IMCSC","_xlfn.IMCSCH":"IMCSCH","_xlfn.IMSEC":"IMSEC","_xlfn.IMSECH":"IMSECH","_xlfn.IMSINH":"IMSINH","_xlfn.IMTAN":"IMTAN","_xlfn.ISFORMULA":"ISFORMULA","_xlfn.ISO.CEILING":"ISO.CEILING","_xlfn.ISOWEEKNUM":"ISOWEEKNUM","_xlfn.LOGNORM.DIST":"LOGNORM.DIST","_xlfn.LOGNORM.INV":"LOGNORM.INV","_xlfn.MAXIFS":"MAXIFS","_xlfn.MINIFS":"MINIFS","_xlfn.MODE.MULT":"MODE.MULT","_xlfn.MODE.SNGL":"MODE.SNGL","_xlfn.MUNIT":"MUNIT","_xlfn.NEGBINOM.DIST":"NEGBINOM.DIST","_xlfn.NETWORKDAYS.INTL":"NETWORKDAYS.INTL","_xlfn.NIGBINOM":"NIGBINOM","_xlfn.NORM.DIST":"NORM.DIST","_xlfn.NORM.INV":"NORM.INV","_xlfn.NORM.S.DIST":"NORM.S.DIST","_xlfn.NORM.S.INV":"NORM.S.INV","_xlfn.NUMBERVALUE":"NUMBERVALUE","_xlfn.PDURATION":"PDURATION","_xlfn.PERCENTILE.EXC":"PERCENTILE.EXC","_xlfn.PERCENTILE.INC":"PERCENTILE.INC","_xlfn.PERCENTRANK.EXC":"PERCENTRANK.EXC","_xlfn.PERCENTRANK.INC":"PERCENTRANK.INC","_xlfn.PERMUTATIONA":"PERMUTATIONA","_xlfn.PHI":"PHI","_xlfn.POISSON.DIST":"POISSON.DIST","_xlfn.QUARTILE.EXC":"QUARTILE.EXC","_xlfn.QUARTILE.INC":"QUARTILE.INC","_xlfn.QUERYSTRING":"QUERYSTRING","_xlfn.RANK.AVG":"RANK.AVG","_xlfn.RANK.EQ":"RANK.EQ","_xlfn.RRI":"RRI","_xlfn.SEC":"SEC","_xlfn.SECH":"SECH","_xlfn.SHEET":"SHEET","_xlfn.SHEETS":"SHEETS","_xlfn.SKEW.P":"SKEW.P","_xlfn.STDEV.P":"STDEV.P","_xlfn.STDEV.S":"STDEV.S","_xlfn.SUMIFS":"SUMIFS","_xlfn.SWITCH":"SWITCH","_xlfn.T.DIST":"T.DIST","_xlfn.T.DIST.2T":"T.DIST.2T","_xlfn.T.DIST.RT":"T.DIST.RT","_xlfn.T.INV":"T.INV","_xlfn.T.INV.2T":"T.INV.2T","_xlfn.T.TEST":"T.TEST","_xlfn.TEXTJOIN":"TEXTJOIN","_xlfn.UNICHAR":"UNICHAR","_xlfn.UNICODE":"UNICODE","_xlfn.VAR.P":"VAR.P","_xlfn.VAR.S":"VAR.S","_xlfn.WEBSERVICE":"WEBSERVICE","_xlfn.WEIBULL.DIST":"WEIBULL.DIST","_xlfn.WORKDAY.INTL":"WORKDAY.INTL","_xlfn.XOR":"XOR","_xlfn.Z.TEST":"Z.TEST"}
function ro(e){return"of:"==e.slice(0,3)&&(e=e.slice(3)),61==e.charCodeAt(0)&&61==(e=e.slice(1)).charCodeAt(0)&&(e=e.slice(1)),(e=(e=(e=e.replace(/COM\.MICROSOFT\./g,"")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(e,t){return t.replace(/\./g,"")})).replace(/\[.(#[A-Z]*[?!])\]/g,"$1")).replace(/[;~]/g,",").replace(/\|/g,";")}function no(e){var t=e.split(":")
return[t[0].split(".")[0],t[0].split(".")[1]+(1<t.length?":"+(t[1].split(".")[1]||t[1].split(".")[0]):"")]}var ao={},so={}
jr.WS=["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"]
var io="undefined"!=typeof Map
function oo(e,t,r){var n=0,a=e.length
if(r){if(io?r.has(t):r.hasOwnProperty(t))for(var s=io?r.get(t):r[t];n<s.length;++n)if(e[s[n]].t===t)return e.Count++,s[n]}else for(;n<a;++n)if(e[n].t===t)return e.Count++,n
return e[a]={t:t},e.Count++,e.Unique++,r&&(io?(r.has(t)||r.set(t,[]),r.get(t).push(a)):(r.hasOwnProperty(t)||(r[t]=[]),r[t].push(a))),a}function lo(e,t){var r={min:e+1,max:e+1},n=-1
return t.MDW&&(hs=t.MDW),null!=t.width?r.customWidth=1:null!=t.wpx?n=ds(t.wpx):null!=t.wch&&(n=t.wch),-1<n?(r.width=ps(n),r.customWidth=1):null!=t.width&&(r.width=t.width),t.hidden&&(r.hidden=!0),r}function co(e,t){if(e){var r=[.7,.7,.75,.75,.3,.3]
"xlml"==t&&(r=[1,1,1,1,.5,.5]),null==e.left&&(e.left=r[0]),null==e.right&&(e.right=r[1]),null==e.top&&(e.top=r[2]),null==e.bottom&&(e.bottom=r[3]),null==e.header&&(e.header=r[4]),null==e.footer&&(e.footer=r[5])}}function fo(e,t,r){var n=r.revssf[null!=t.z?t.z:"General"],a=60,s=e.length
if(null==n&&r.ssf)for(;a<392;++a)if(null==r.ssf[a]){de.load(t.z,a),r.ssf[a]=t.z,r.revssf[t.z]=n=a
break}for(a=0;a!=s;++a)if(e[a].numFmtId===n)return a
return e[s]={numFmtId:n,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},s}function ho(e,t,r,n,a,s){if("z"!==e.t){"d"===e.t&&"string"==typeof e.v&&(e.v=K(e.v))
try{n.cellNF&&(e.z=de._table[t])}catch(e){if(n.WTF)throw e}if(!n||!1!==n.cellText)try{if(null==de._table[t]&&de.load(o[t]||"General",t),"e"===e.t)e.w=e.w||Ar[e.v]
else if(0===t)if("n"===e.t)(0|e.v)===e.v?e.w=de._general_int(e.v):e.w=de._general_num(e.v)
else if("d"===e.t){var i=j(e.v)
e.w=(0|i)===i?de._general_int(i):de._general_num(i)}else{if(void 0===e.v)return""
e.w=de._general(e.v,so)}else"d"===e.t?e.w=de.format(t,j(e.v),so):e.w=de.format(t,e.v,so)}catch(e){if(n.WTF)throw e}if(n.cellStyles&&null!=r)try{e.s=s.Fills[r],e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb&&(e.s.fgColor.rgb=os(a.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0),n.WTF&&(e.s.fgColor.raw_rgb=a.themeElements.clrScheme[e.s.fgColor.theme].rgb)),e.s.bgColor&&e.s.bgColor.theme&&(e.s.bgColor.rgb=os(a.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0),n.WTF&&(e.s.bgColor.raw_rgb=a.themeElements.clrScheme[e.s.bgColor.theme].rgb))}catch(e){if(n.WTF&&s.Fills)throw e}}}function uo(e,t,r){if(e&&e["!ref"]){var n=Zt(e["!ref"])
if(n.e.c<n.s.c||n.e.r<n.s.r)throw new Error("Bad range ("+r+"): "+e["!ref"])}}var po=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,go=/<(?:\w+:)?sheetData>([\s\S]*)<\/(?:\w+:)?sheetData>/,mo=/<(?:\w:)?hyperlink [^>]*>/gm,bo=/"(\w*:\w*)"/,vo=/<(?:\w:)?col[^>]*[\/]?>/g,wo=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,Co=/<(?:\w:)?pageMargins[^>]*\/>/g,Eo=/<(?:\w:)?sheetPr(?:[^>a-z][^>]*)?\/>/,So=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/
function Ao(e,t,r,n,a,s,i){if(!e)return e
null!=ue&&null==t.dense&&(t.dense=ue)
var o=t.dense?[]:{},l={s:{r:2e6,c:2e6},e:{r:0,c:0}},c="",f="",h=e.match(go)
h?(c=e.slice(0,h.index),f=e.slice(h.index+h[0].length)):c=f=e
var u=c.match(Eo)
u&&_o(u[0],0,a,r)
var d,p,g,m=(c.match(/<(?:\w*:)?dimension/)||{index:-1}).index
if(0<m){var b=c.slice(m,m+50).match(bo)
b&&(d=o,p=b[1],(g=Zt(p)).s.r<=g.e.r&&g.s.c<=g.e.c&&0<=g.s.r&&0<=g.s.c&&(d["!ref"]=$t(g)))}var v,w,C=c.match(So)
C&&C[1]&&(v=C[1],w=a,(v.match(Bo)||[]).forEach(function(e){var t=ve(e)
Ie(t.rightToLeft)&&(w.Views||(w.Views=[{}]),w.Views[0]||(w.Views[0]={}),w.Views[0].RTL=!0)}))
var E=[]
if(t.cellStyles){var S=c.match(vo)
S&&function(e,t){for(var r=!1,n=0;n!=t.length;++n){var a=ve(t[n],!0)
a.hidden&&(a.hidden=Ie(a.hidden))
var s=parseInt(a.min,10)-1,i=parseInt(a.max,10)-1
for(delete a.min,delete a.max,a.width=+a.width,!r&&a.width&&(r=!0,ms(a.width)),bs(a);s<=i;)e[s++]=be(a)}}(E,S)}h&&Fo(h[1],o,t,l,s,i)
var A=f.match(wo)
A&&(o["!autofilter"]={ref:(A[0].match(/ref="([^"]*)"/)||[])[1]})
var _=[],B=f.match(po)
if(B)for(m=0;m!=B.length;++m)_[m]=Zt(B[m].slice(B[m].indexOf('"')+1))
var T=f.match(mo)
T&&function(e,t,r){for(var n=Array.isArray(e),a=0;a!=t.length;++a){var s=ve(Re(t[a]),!0)
if(!s.ref)return
var i=((r||{})["!id"]||[])[s.id]
i?(s.Target=i.Target,s.location&&(s.Target+="#"+s.location)):(s.Target="#"+s.location,i={Target:s.Target,TargetMode:"Internal"}),s.Rel=i,s.tooltip&&(s.Tooltip=s.tooltip,delete s.tooltip)
for(var o=Zt(s.ref),l=o.s.r;l<=o.e.r;++l)for(var c=o.s.c;c<=o.e.c;++c){var f=Yt({c:c,r:l})
n?(e[l]||(e[l]=[]),e[l][c]||(e[l][c]={t:"z",v:void 0}),e[l][c].l=s):(e[f]||(e[f]={t:"z",v:void 0}),e[f].l=s)}}}(o,T,n)
var y,k,x=f.match(Co)
if(x&&(o["!margins"]=(y=ve(x[0]),k={},["left","right","top","bottom","header","footer"].forEach(function(e){y[e]&&(k[e]=parseFloat(y[e]))}),k)),!o["!ref"]&&l.e.c>=l.s.c&&l.e.r>=l.s.r&&(o["!ref"]=$t(l)),0<t.sheetRows&&o["!ref"]){var I=Zt(o["!ref"])
t.sheetRows<=+I.e.r&&(I.e.r=t.sheetRows-1,I.e.r>l.e.r&&(I.e.r=l.e.r),I.e.r<I.s.r&&(I.s.r=I.e.r),I.e.c>l.e.c&&(I.e.c=l.e.c),I.e.c<I.s.c&&(I.s.c=I.e.c),o["!fullref"]=o["!ref"],o["!ref"]=$t(I))}return 0<E.length&&(o["!cols"]=E),0<_.length&&(o["!merges"]=_),o}function _o(e,t,r,n){var a=ve(e)
r.Sheets[n]||(r.Sheets[n]={}),a.codeName&&(r.Sheets[n].CodeName=a.codeName)}var Bo=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/>/
function To(e,t,r,n){if(void 0===e.v&&void 0===e.f||"z"===e.t)return""
var a="",s=e.t,i=e.v
switch(e.t){case"b":a=e.v?"1":"0"
break
case"n":a=""+e.v
break
case"e":a=Ar[e.v]
break
case"d":a=n.cellDates?K(e.v,-1).toISOString():((e=be(e)).t="n",""+(e.v=j(K(e.v)))),void 0===e.z&&(e.z=de._table[14])
break
default:a=e.v}var o=je("v",_e(a)),l={r:t},c=fo(n.cellXfs,e,n)
switch(0!==c&&(l.s=c),e.t){case"n":break
case"d":l.t="d"
break
case"b":l.t="b"
break
case"e":l.t="e"
break
default:if(null==e.v){delete e.t
break}if(n.bookSST){o=je("v",""+oo(n.Strings,e.v,n.revStrings)),l.t="s"
break}l.t="str"}if(e.t!=s&&(e.t=s,e.v=i),e.f){var f=e.F&&e.F.slice(0,t.length)==t?{t:"array",ref:e.F}:null
o=Ke("f",_e(e.f),f)+(null!=e.v?o:"")}return e.l&&r["!links"].push([t,e.l]),e.c&&r["!comments"].push([t,e.c]),Ke("c",o,l)}var yo,ko,xo,Io,Ro,Oo,Do,Fo=(yo=/<(?:\w+:)?c[ >]/,ko=/<\/(?:\w+:)?row>/,xo=/r=["']([^"']*)["']/,Io=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,Ro=/ref=["']([^"']*)["']/,Oo=Ue("v"),Do=Ue("f"),function(e,t,r,n,a,s){for(var i,o,l,c,f,h=0,u="",d=[],p=[],g=0,m=0,b=0,v="",w=0,C=0,E=0,S=0,A=Array.isArray(s.CellXf),_=[],B=[],T=Array.isArray(t),y=[],k={},x=!1,I=e.split(ko),R=0,O=I.length;R!=O;++R){var D=(u=I[R].trim()).length
if(0!==D){for(h=0;h<D&&62!==u.charCodeAt(h);++h);if(++h,w=null!=(o=ve(u.slice(0,h),!0)).r?parseInt(o.r,10):w+1,C=-1,!(r.sheetRows&&r.sheetRows<w))for(n.s.r>w-1&&(n.s.r=w-1),n.e.r<w-1&&(n.e.r=w-1),r&&r.cellStyles&&(x=!(k={}),o.ht&&(x=!0,k.hpt=parseFloat(o.ht),k.hpx=Cs(k.hpt)),"1"==o.hidden&&(x=!0,k.hidden=!0),null!=o.outlineLevel&&(x=!0,k.level=+o.outlineLevel),x&&(y[w-1]=k)),d=u.slice(h).split(yo),h=0;h!=d.length;++h)if(0!==(u=d[h].trim()).length){if(p=u.match(xo),g=h,b=m=0,u="<c "+("<"==u.slice(0,1)?">":"")+u,null!=p&&2===p.length){for(g=0,v=p[1],m=0;m!=v.length&&!((b=v.charCodeAt(m)-64)<1||26<b);++m)g=26*g+b
C=--g}else++C
for(m=0;m!=u.length&&62!==u.charCodeAt(m);++m);if(++m,(o=ve(u.slice(0,m),!0)).r||(o.r=Yt({r:w-1,c:C})),i={t:""},null!=(p=(v=u.slice(m)).match(Oo))&&""!==p[1]&&(i.v=Ee(p[1])),r.cellFormula){null!=(p=v.match(Do))&&""!==p[1]?(i.f=di(Ee(Re(p[1]))),-1<p[0].indexOf('t="array"')?(i.F=(v.match(Ro)||[])[1],-1<i.F.indexOf(":")&&_.push([Zt(i.F),i.F])):-1<p[0].indexOf('t="shared"')&&(c=ve(p[0]),B[parseInt(c.si,10)]=[c,di(Ee(Re(p[1])))])):(p=v.match(/<f[^>]*\/>/))&&B[(c=ve(p[0])).si]&&(i.f=ui(B[c.si][1],B[c.si][0].ref,o.r))
var F=jt(o.r)
for(m=0;m<_.length;++m)F.r>=_[m][0].s.r&&F.r<=_[m][0].e.r&&F.c>=_[m][0].s.c&&F.c<=_[m][0].e.c&&(i.F=_[m][1])}if(null==o.t&&void 0===i.v)if(i.f||i.F)i.v=0,i.t="n"
else{if(!r.sheetStubs)continue
i.t="z"}else i.t=o.t||"n"
switch(n.s.c>C&&(n.s.c=C),n.e.c<C&&(n.e.c=C),i.t){case"n":if(""==i.v||null==i.v){if(!r.sheetStubs)continue
i.t="z"}else i.v=parseFloat(i.v)
break
case"s":if(void 0===i.v){if(!r.sheetStubs)continue
i.t="z"}else l=ao[parseInt(i.v,10)],i.v=l.t,i.r=l.r,r.cellHTML&&(i.h=l.h)
break
case"str":i.t="s",i.v=null!=i.v?Re(i.v):"",r.cellHTML&&(i.h=ye(i.v))
break
case"inlineStr":p=v.match(Io),i.t="s",null!=p&&(l=La(p[1]))?i.v=l.t:i.v=""
break
case"b":i.v=Ie(i.v)
break
case"d":r.cellDates?i.v=K(i.v,1):(i.v=j(K(i.v,1)),i.t="n")
break
case"e":r&&!1===r.cellText||(i.w=i.v),i.v=_r[i.v]}if(E=S=0,A&&void 0!==o.s&&null!=(f=s.CellXf[o.s])&&(null!=f.numFmtId&&(E=f.numFmtId),r.cellStyles&&null!=f.fillId&&(S=f.fillId)),ho(i,E,S,r,a,s),r.cellDates&&A&&"n"==i.t&&de.is_date(de._table[E])&&(i.t="d",i.v=N(i.v)),T){var P=jt(o.r)
t[P.r]||(t[P.r]=[]),t[P.r][P.c]=i}else t[o.r]=i}}}0<y.length&&(t["!rows"]=y)}),Po=Ke("worksheet",null,{xmlns:Je.main[0],"xmlns:r":Je.r})
function No(e,t,r,n){var a,s=[W,Po],i=r.SheetNames[e],o="",l=r.Sheets[i]
null==l&&(l={})
var c,f,h,u,d=l["!ref"]||"A1",p=Zt(d)
if(16383<p.e.c||1048575<p.e.r){if(t.WTF)throw new Error("Range "+d+" exceeds format limit A1:XFD1048576")
p.e.c=Math.min(p.e.c,16383),p.e.r=Math.min(p.e.c,1048575),d=$t(p)}if(n||(n={}),l["!comments"]=[],l["!drawing"]=[],"xlsx"!==t.bookType&&r.vbaraw){var g=r.SheetNames[e]
try{r.Workbook&&(g=r.Workbook.Sheets[e].CodeName||g)}catch(e){}s[s.length]=Ke("sheetPr",null,{codeName:_e(g)})}s[s.length]=Ke("dimension",null,{ref:d}),s[s.length]=(f={workbookViewId:"0"},((((c=r)||{}).Workbook||{}).Views||[])[0]&&(f.rightToLeft=c.Workbook.Views[0].RTL?"1":"0"),Ke("sheetViews",Ke("sheetView",null,f),{})),t.sheetFormat&&(s[s.length]=Ke("sheetFormatPr",null,{defaultRowHeight:t.sheetFormat.defaultRowHeight||"16",baseColWidth:t.sheetFormat.baseColWidth||"10",outlineLevelRow:t.sheetFormat.outlineLevelRow||"7"})),null!=l["!cols"]&&0<l["!cols"].length&&(s[s.length]=function(e,t){for(var r,n=["<cols>"],a=0;a!=t.length;++a)(r=t[a])&&(n[n.length]=Ke("col",null,lo(a,r)))
return n[n.length]="</cols>",n.join("")}(0,l["!cols"])),s[a=s.length]="<sheetData/>",l["!links"]=[],null!=l["!ref"]&&0<(o=function(e,t,r,n){var a,s,i=[],o=[],l=Zt(e["!ref"]),c="",f="",h=[],u=0,d=0,p=e["!rows"],g=Array.isArray(e),m={r:f},b=-1
for(d=l.s.c;d<=l.e.c;++d)h[d]=Xt(d)
for(u=l.s.r;u<=l.e.r;++u){for(o=[],f=Vt(u),d=l.s.c;d<=l.e.c;++d){a=h[d]+f
var v=g?(e[u]||[])[d]:e[a]
void 0!==v&&null!=(c=To(v,a,e,t))&&o.push(c)}(0<o.length||p&&p[u])&&(m={r:f},p&&p[u]&&((s=p[u]).hidden&&(m.hidden=1),b=-1,s.hpx?b=ws(s.hpx):s.hpt&&(b=s.hpt),-1<b&&(m.ht=b,m.customHeight=1),s.level&&(m.outlineLevel=s.level)),i[i.length]=Ke("row",o.join(""),m))}if(p)for(;u<p.length;++u)p&&p[u]&&(m={r:u+1},(s=p[u]).hidden&&(m.hidden=1),b=-1,s.hpx?b=ws(s.hpx):s.hpt&&(b=s.hpt),-1<b&&(m.ht=b,m.customHeight=1),s.level&&(m.outlineLevel=s.level),i[i.length]=Ke("row","",m))
return i.join("")}(l,t)).length&&(s[s.length]=o),s.length>a+1&&(s[s.length]="</sheetData>",s[a]=s[a].replace("/>",">")),null!=l["!protect"]&&(s[s.length]=(h=l["!protect"],u={sheet:1},["objects","scenarios","selectLockedCells","selectUnlockedCells"].forEach(function(e){null!=h[e]&&h[e]&&(u[e]="1")}),["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"].forEach(function(e){null==h[e]||h[e]||(u[e]="0")}),h.password&&(u.password=Qa(h.password).toString(16).toUpperCase()),Ke("sheetProtection",null,u))),null!=l["!autofilter"]&&(s[s.length]=function(e,t,r,n){var a="string"==typeof e.ref?e.ref:$t(e.ref)
r.Workbook||(r.Workbook={}),r.Workbook.Names||(r.Workbook.Names=[])
var s=r.Workbook.Names,i=Kt(a)
i.s.r==i.e.r&&(i.e.r=Kt(t["!ref"]).e.r,a=$t(i))
for(var o=0;o<s.length;++o){var l=s[o]
if("_xlnm._FilterDatabase"==l.Name&&l.Sheet==n){l.Ref="'"+r.SheetNames[n]+"'!"+a
break}}return o==s.length&&s.push({Name:"_xlnm._FilterDatabase",Sheet:n,Ref:"'"+r.SheetNames[n]+"'!"+a}),Ke("autoFilter",null,{ref:a})}(l["!autofilter"],l,r,e)),null!=l["!merges"]&&0<l["!merges"].length&&(s[s.length]=function(e){if(0===e.length)return""
for(var t='<mergeCells count="'+e.length+'">',r=0;r!=e.length;++r)t+='<mergeCell ref="'+$t(e[r])+'"/>'
return t+"</mergeCells>"}(l["!merges"]))
var m,b,v=-1,w=-1
return 0<l["!links"].length&&(s[s.length]="<hyperlinks>",l["!links"].forEach(function(e){e[1].Target&&(m={ref:e[0]},"#"!=e[1].Target.charAt(0)&&(w=Qr(n,-1,_e(e[1].Target).replace(/#.*$/,""),jr.HLINK),m["r:id"]="rId"+w),-1<(v=e[1].Target.indexOf("#"))&&(m.location=_e(e[1].Target.slice(v+1))),e[1].Tooltip&&(m.tooltip=_e(e[1].Tooltip)),s[s.length]=Ke("hyperlink",null,m))}),s[s.length]="</hyperlinks>"),delete l["!links"],null!=l["!margins"]&&(s[s.length]=(co(b=l["!margins"]),Ke("pageMargins",null,b))),s[s.length]="",t&&!t.ignoreEC&&null!=t.ignoreEC||(s[s.length]=je("ignoredErrors",Ke("ignoredError",null,{numberStoredAsText:1,sqref:d}))),0<l["!drawing"].length?(w=Qr(n,-1,"../drawings/drawing"+(e+1)+".xml",jr.DRAW),s[s.length]=Ke("drawing",null,{"r:id":"rId"+w})):delete l["!drawing"],0<l["!comments"].length&&(w=Qr(n,-1,"../drawings/vmlDrawing"+(e+1)+".vml",jr.VML),s[s.length]=Ke("legacyDrawing",null,{"r:id":"rId"+w}),l["!legacy"]=w),2<s.length&&(s[s.length]="</worksheet>",s[1]=s[1].replace("/>",">")),s.join("")}function Lo(e,t,r,n){var a=function(e,t,r){var n=Dt(145),a=(r["!rows"]||[])[e]||{}
n.write_shift(4,e),n.write_shift(4,0)
var s=320
a.hpx?s=20*ws(a.hpx):a.hpt&&(s=20*a.hpt),n.write_shift(2,s),n.write_shift(1,0)
var i=0
a.level&&(i|=a.level),a.hidden&&(i|=16),(a.hpx||a.hpt)&&(i|=32),n.write_shift(1,i),n.write_shift(1,0)
var o=0,l=n.l
n.l+=4
for(var c={r:e,c:0},f=0;f<16;++f)if(!(t.s.c>f+1<<10||t.e.c<f<<10)){for(var h=-1,u=-1,d=f<<10;d<f+1<<10;++d)c.c=d,(Array.isArray(r)?(r[c.r]||[])[c.c]:r[Yt(c)])&&(h<0&&(h=d),u=d)
h<0||(++o,n.write_shift(4,h),n.write_shift(4,u))}var p=n.l
return n.l=l,n.write_shift(4,o),n.l=p,n.length>n.l?n.slice(0,n.l):n}(n,r,t);(17<a.length||(t["!rows"]||[])[n])&&Nt(e,"BrtRowHdr",a)}var Mo=wr,Uo=Cr
function Ho(e,t,r){return null==r&&(r=Dt(12)),cr(t,r),function(e,t){null==t&&(t=Dt(4))
var r=0,n=0,a=100*e
if(e==(0|e)&&-(1<<29)<=e&&e<1<<29?n=1:a==(0|a)&&-(1<<29)<=a&&a<1<<29&&(r=n=1),!n)throw new Error("unsupported RkNumber "+e)
t.write_shift(-4,((r?a:e)<<2)+(r+2))}(e.v,r),r}var Wo=wr,Vo=Cr,zo=["left","right","top","bottom","header","footer"]
function Xo(e,t,r,n,a,s){if(void 0===t.v)return""
var i=""
switch(t.t){case"b":i=t.v?"1":"0"
break
case"d":(t=be(t)).z=t.z||de._table[14],t.v=j(K(t.v)),t.t="n"
break
case"n":case"e":i=""+t.v
break
default:i=t.v}var o,l,c,f,h,u,d,p,g,m,b,v,w,C={r:r,c:n}
switch(C.s=fo(a.cellXfs,t,a),t.l&&s["!links"].push([Yt(C),t.l]),t.c&&s["!comments"].push([Yt(C),t.c]),t.t){case"s":case"str":return void(a.bookSST?(i=oo(a.Strings,t.v,a.revStrings),C.t="s",C.v=i,Nt(e,"BrtCellIsst",(m=C,null==b&&(b=Dt(12)),cr(m,b),b.write_shift(4,m.v),b))):(C.t="str",Nt(e,"BrtCellSt",(d=t,p=C,null==g&&(g=Dt(12+4*d.v.length)),cr(p,g),ar(d.v,g),g.length>g.l?g.slice(0,g.l):g))))
case"n":return void(t.v==(0|t.v)&&-1e3<t.v&&t.v<1e3?Nt(e,"BrtCellRk",Ho(t,C)):Nt(e,"BrtCellReal",(f=t,h=C,null==u&&(u=Dt(16)),cr(h,u),Sr(f.v,u),u)))
case"b":return C.t="b",void Nt(e,"BrtCellBool",(o=t,l=C,null==c&&(c=Dt(9)),cr(l,c),c.write_shift(1,o.v?1:0),c))
case"e":C.t="e"}Nt(e,"BrtCellBlank",(v=C,null==w&&(w=Dt(8)),cr(v,w)))}function Go(t,e){var r,n
e&&e["!merges"]&&(Nt(t,"BrtBeginMergeCells",(r=e["!merges"].length,null==n&&(n=Dt(4)),n.write_shift(4,r),n)),e["!merges"].forEach(function(e){Nt(t,"BrtMergeCell",Vo(e))}),Nt(t,"BrtEndMergeCells"))}function jo(r,e){e&&e["!cols"]&&(Nt(r,"BrtBeginColInfos"),e["!cols"].forEach(function(e,t){e&&Nt(r,"BrtColInfo",function(e,t,r){null==r&&(r=Dt(18))
var n=lo(e,t)
r.write_shift(-4,e),r.write_shift(-4,e),r.write_shift(4,256*(n.width||10)),r.write_shift(4,0)
var a=0
return t.hidden&&(a|=1),"number"==typeof n.width&&(a|=2),r.write_shift(1,a),r.write_shift(1,0),r}(t,e))}),Nt(r,"BrtEndColInfos"))}function Yo(e,t){var r,n
t&&t["!ref"]&&(Nt(e,"BrtBeginCellIgnoreECs"),Nt(e,"BrtCellIgnoreEC",(r=Zt(t["!ref"]),(n=Dt(24)).write_shift(4,4),n.write_shift(4,1),Cr(r,n),n)),Nt(e,"BrtEndCellIgnoreECs"))}function Ko(r,e,n){e["!links"].forEach(function(e){if(e[1].Target){var t=Qr(n,-1,e[1].Target.replace(/#.*$/,""),jr.HLINK)
Nt(r,"BrtHLink",function(e,t){var r=Dt(50+4*(e[1].Target.length+(e[1].Tooltip||"").length))
Cr({s:jt(e[0]),e:jt(e[0])},r),mr("rId"+t,r)
var n=e[1].Target.indexOf("#")
return ar((-1==n?"":e[1].Target.slice(n+1))||"",r),ar(e[1].Tooltip||"",r),ar("",r),r.slice(0,r.l)}(e,t))}}),delete e["!links"]}function $o(e,t,r){Nt(e,"BrtBeginWsViews"),Nt(e,"BrtBeginWsView",function(e,t,r){null==r&&(r=Dt(30))
var n=924
return(((t||{}).Views||[])[0]||{}).RTL&&(n|=32),r.write_shift(2,n),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(4,0),r.write_shift(1,0),r.write_shift(1,0),r.write_shift(2,0),r.write_shift(2,100),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(2,0),r.write_shift(4,0),r}(0,r)),Nt(e,"BrtEndWsView"),Nt(e,"BrtEndWsViews")}function Zo(e,t){var r,n
t["!protect"]&&Nt(e,"BrtSheetProtection",(r=t["!protect"],null==n&&(n=Dt(66)),n.write_shift(2,r.password?Qa(r.password):0),n.write_shift(4,1),[["objects",!1],["scenarios",!1],["formatCells",!0],["formatColumns",!0],["formatRows",!0],["insertColumns",!0],["insertRows",!0],["insertHyperlinks",!0],["deleteColumns",!0],["deleteRows",!0],["selectLockedCells",!1],["sort",!0],["autoFilter",!0],["pivotTables",!0],["selectUnlockedCells",!1]].forEach(function(e){e[1]?n.write_shift(4,null==r[e[0]]||r[e[0]]?0:1):n.write_shift(4,null!=r[e[0]]&&r[e[0]]?0:1)}),n))}function Qo(e,t,r,n){var a=Pt(),s=r.SheetNames[e],i=r.Sheets[s]||{},o=s
try{r&&r.Workbook&&(o=r.Workbook.Sheets[e].CodeName||o)}catch(e){}var l,c,f,h,u=Zt(i["!ref"]||"A1")
if(16383<u.e.c||1048575<u.e.r){if(t.WTF)throw new Error("Range "+(i["!ref"]||"A1")+" exceeds format limit A1:XFD1048576")
u.e.c=Math.min(u.e.c,16383),u.e.r=Math.min(u.e.c,1048575)}return i["!links"]=[],i["!comments"]=[],Nt(a,"BrtBeginSheet"),r.vbaraw&&Nt(a,"BrtWsProp",function(e,t){null==t&&(t=Dt(84+4*e.length))
for(var r=0;r<3;++r)t.write_shift(1,0)
return Br({auto:1},t),t.write_shift(-4,-1),t.write_shift(-4,-1),hr(e,t),t.slice(0,t.l)}(o)),Nt(a,"BrtWsDim",Uo(u)),$o(a,0,r.Workbook),jo(a,i),function(e,t,r,n){var a,s=Zt(t["!ref"]||"A1"),i="",o=[]
Nt(e,"BrtBeginSheetData")
var l=Array.isArray(t),c=s.e.r
t["!rows"]&&(c=Math.max(s.e.r,t["!rows"].length-1))
for(var f=s.s.r;f<=c;++f)if(i=Vt(f),Lo(e,t,s,f),f<=s.e.r)for(var h=s.s.c;h<=s.e.c;++h){f===s.s.r&&(o[h]=Xt(h)),a=o[h]+i
var u=l?(t[f]||[])[h]:t[a]
u&&Xo(e,u,f,h,n,t)}Nt(e,"BrtEndSheetData")}(a,i,0,t),Zo(a,i),l=a,(c=i)["!autofilter"]&&(Nt(l,"BrtBeginAFilter",Cr(Zt(c["!autofilter"].ref))),Nt(l,"BrtEndAFilter")),Go(a,i),Ko(a,i,n),i["!margins"]&&Nt(a,"BrtMargins",(f=i["!margins"],null==h&&(h=Dt(48)),co(f),zo.forEach(function(e){Sr(f[e],h)}),h)),t&&!t.ignoreEC&&null!=t.ignoreEC||Yo(a,i),function(e,t,r,n){if(0<t["!comments"].length){var a=Qr(n,-1,"../drawings/vmlDrawing"+(r+1)+".vml",jr.VML)
Nt(e,"BrtLegacyDrawing",mr("rId"+a)),t["!legacy"]=a}}(a,i,e,n),Nt(a,"BrtEndSheet"),a.end()}function Jo(e,t,r,n,a,s){var i=s||{"!type":"chart"}
if(!e)return s
var o=0,l=0,c="A",f={s:{r:2e6,c:2e6},e:{r:0,c:0}}
return(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(e){var r=function(e){var r=[];(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm)||[]).forEach(function(e){var t=e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/)
t&&(r[+t[1]]=+t[2])})
var t=Ee((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1])
return[r,t]}(e)
f.s.r=f.s.c=0,f.e.c=o,c=Xt(o),r[0].forEach(function(e,t){i[c+Vt(t)]={t:"n",v:e,z:r[1]},l=t}),f.e.r<l&&(f.e.r=l),++o}),0<o&&(i["!ref"]=$t(f)),i}jr.CS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",Ke("chartsheet",null,{xmlns:Je.main[0],"xmlns:r":Je.r})
var qo=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],el=[["activeTab",0,"int"],["autoFilterDateGrouping",!0,"bool"],["firstSheet",0,"int"],["minimized",!1,"bool"],["showHorizontalScroll",!0,"bool"],["showSheetTabs",!0,"bool"],["showVerticalScroll",!0,"bool"],["tabRatio",600,"int"],["visibility","visible"]],tl=[],rl=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]]
function nl(e,t){for(var r=0;r!=e.length;++r)for(var n=e[r],a=0;a!=t.length;++a){var s=t[a]
if(null==n[s[0]])n[s[0]]=s[1]
else switch(s[2]){case"bool":"string"==typeof n[s[0]]&&(n[s[0]]=Ie(n[s[0]]))
break
case"int":"string"==typeof n[s[0]]&&(n[s[0]]=parseInt(n[s[0]],10))}}}function al(e,t){for(var r=0;r!=t.length;++r){var n=t[r]
if(null==e[n[0]])e[n[0]]=n[1]
else switch(n[2]){case"bool":"string"==typeof e[n[0]]&&(e[n[0]]=Ie(e[n[0]]))
break
case"int":"string"==typeof e[n[0]]&&(e[n[0]]=parseInt(e[n[0]],10))}}}function sl(e){al(e.WBProps,qo),al(e.CalcPr,rl),nl(e.WBView,el),nl(e.Sheets,tl),so.date1904=Ie(e.WBProps.date1904)}var il="][*?/\\".split("")
function ol(t,r){if(31<t.length){if(r)return!1
throw new Error("Sheet names cannot exceed 31 chars")}var n=!0
return il.forEach(function(e){if(-1!=t.indexOf(e)){if(!r)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")
n=!1}}),n}function ll(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook")
if(!e.SheetNames.length)throw new Error("Workbook is empty")
var a,s,i,t=e.Workbook&&e.Workbook.Sheets||[]
a=e.SheetNames,s=t,i=!!e.vbaraw,a.forEach(function(e,t){ol(e)
for(var r=0;r<t;++r)if(e==a[r])throw new Error("Duplicate Sheet Name: "+e)
if(i){var n=s&&s[t]&&s[t].CodeName||e
if(95==n.charCodeAt(0)&&22<n.length)throw new Error("Bad Code Name: Worksheet"+n)}})
for(var r=0;r<e.SheetNames.length;++r)uo(e.Sheets[e.SheetNames[r]],e.SheetNames[r],r)}var cl=/<\w+:workbook/,fl=Ke("workbook",null,{xmlns:Je.main[0],"xmlns:r":Je.r})
function hl(e,t){if(t.Workbook&&t.Workbook.Sheets){for(var r,n,a=t.Workbook.Sheets,s=0,i=-1,o=-1;s<a.length;++s)!a[s]||!a[s].Hidden&&-1==i?i=s:1==a[s].Hidden&&-1==o&&(o=s)
i<o||(Nt(e,"BrtBeginBookViews"),Nt(e,"BrtBookView",(r=i,n||(n=Dt(29)),n.write_shift(-4,0),n.write_shift(-4,460),n.write_shift(4,28800),n.write_shift(4,17600),n.write_shift(4,500),n.write_shift(4,r),n.write_shift(4,r),n.write_shift(1,120),n.length>n.l?n.slice(0,n.l):n)),Nt(e,"BrtEndBookViews"))}}function ul(e,t){var r=Pt()
return Nt(r,"BrtBeginBook"),Nt(r,"BrtFileVersion",function(e,t){t||(t=Dt(127))
for(var r=0;4!=r;++r)t.write_shift(4,0)
return ar("SheetJS",t),ar(n.version,t),ar(n.version,t),ar("7262",t),t.length=t.l,t.length>t.l?t.slice(0,t.l):t}()),Nt(r,"BrtWbProp",function(e,t){t||(t=Dt(72))
var r=0
return e&&e.filterPrivacy&&(r|=8),t.write_shift(4,r),t.write_shift(4,0),hr(e&&e.CodeName||"ThisWorkbook",t),t.slice(0,t.l)}(e.Workbook&&e.Workbook.WBProps||null)),hl(r,e),function(e,t){Nt(e,"BrtBeginBundleShs")
for(var r=0;r!=t.SheetNames.length;++r){var n={Hidden:t.Workbook&&t.Workbook.Sheets&&t.Workbook.Sheets[r]&&t.Workbook.Sheets[r].Hidden||0,iTabID:r+1,strRelID:"rId"+(r+1),name:t.SheetNames[r]}
Nt(e,"BrtBundleSh",(a=n,(s=void 0)||(s=Dt(127)),s.write_shift(4,a.Hidden),s.write_shift(4,a.iTabID),mr(a.strRelID,s),ar(a.name.slice(0,31),s),s.length>s.l?s.slice(0,s.l):s))}var a,s
Nt(e,"BrtEndBundleShs")}(r,e),Nt(r,"BrtEndBook"),r.end()}function dl(e,t,r){return".bin"===t.slice(-4)?function(e,n){var a={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},s=!1
n||(n={}),n.biff=12
var i=[],o=[[]]
return o.SheetNames=[],o.XTI=[],Ft(e,function(e,t,r){switch(r){case 156:o.SheetNames.push(e.name),a.Sheets.push(e)
break
case 153:a.WBProps=e
break
case 39:null!=e.Sheet&&(n.SID=e.Sheet),e.Ref=Gi(e.Ptg,0,null,o,n),delete n.SID,delete e.Ptg,i.push(e)
break
case 1036:break
case 357:case 358:case 355:case 667:o[0].length?o.push([r,e]):o[0]=[r,e],o[o.length-1].XTI=[]
break
case 362:0===o.length&&(o[0]=[],o[0].XTI=[]),o[o.length-1].XTI=o[o.length-1].XTI.concat(e),o.XTI=o.XTI.concat(e)
break
case 361:break
case 3072:case 3073:case 2071:case 534:case 677:case 158:case 157:case 610:case 2050:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 596:case 2076:case 2075:case 2082:case 397:case 154:case 1117:case 553:case 2091:break
case 35:s=!0
break
case 36:s=!1
break
case 37:case 38:case 16:break
default:if(0<(t||"").indexOf("Begin"));else if(0<(t||"").indexOf("End"));else if(!s||n.WTF)throw new Error("Unexpected record "+r+" "+t)}},n),sl(a),a.Names=i,a.supbooks=o,a}(e,r):function(n,a){if(!n)throw new Error("Could not find file")
var s={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},i=!1,o="xmlns",l={},c=0
if(n.replace(z,function(e,t){var r=ve(e)
switch(Z(r[0])){case"<?xml":break
case"<workbook":e.match(cl)&&(o="xmlns"+e.match(/<(\w+):/)[1]),s.xmlns=r[o]
break
case"</workbook>":break
case"<fileVersion":delete r[0],s.AppVersion=r
break
case"<fileVersion/>":case"</fileVersion>":break
case"<fileSharing":case"<fileSharing/>":break
case"<workbookPr":case"<workbookPr/>":qo.forEach(function(e){if(null!=r[e[0]])switch(e[2]){case"bool":s.WBProps[e[0]]=Ie(r[e[0]])
break
case"int":s.WBProps[e[0]]=parseInt(r[e[0]],10)
break
default:s.WBProps[e[0]]=r[e[0]]}}),r.codeName&&(s.WBProps.CodeName=r.codeName)
break
case"</workbookPr>":case"<workbookProtection":case"<workbookProtection/>":break
case"<bookViews":case"<bookViews>":case"</bookViews>":break
case"<workbookView":case"<workbookView/>":delete r[0],s.WBView.push(r)
break
case"</workbookView>":break
case"<sheets":case"<sheets>":case"</sheets>":break
case"<sheet":switch(r.state){case"hidden":r.Hidden=1
break
case"veryHidden":r.Hidden=2
break
default:r.Hidden=0}delete r.state,r.name=Ee(Re(r.name)),delete r[0],s.Sheets.push(r)
break
case"</sheet>":break
case"<functionGroups":case"<functionGroups/>":case"<functionGroup":break
case"<externalReferences":case"</externalReferences>":case"<externalReferences>":case"<externalReference":case"<definedNames/>":break
case"<definedNames>":case"<definedNames":i=!0
break
case"</definedNames>":i=!1
break
case"<definedName":(l={}).Name=Re(r.name),r.comment&&(l.Comment=r.comment),r.localSheetId&&(l.Sheet=+r.localSheetId),c=t+e.length
break
case"</definedName>":l.Ref=Ee(Re(n.slice(c,t))),s.Names.push(l)
break
case"<definedName/>":break
case"<calcPr":case"<calcPr/>":delete r[0],s.CalcPr=r
break
case"</calcPr>":case"<oleSize":break
case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break
case"<customWorkbookView":case"</customWorkbookView>":break
case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":case"<pivotCache":break
case"<smartTagPr":case"<smartTagPr/>":break
case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":case"<smartTagType":break
case"<webPublishing":case"<webPublishing/>":break
case"<fileRecoveryPr":case"<fileRecoveryPr/>":break
case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":case"<webPublishObject":break
case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break
case"<ext":i=!0
break
case"</ext>":i=!1
break
case"<ArchID":break
case"<AlternateContent":case"<AlternateContent>":i=!0
break
case"</AlternateContent>":i=!1
break
case"<revisionPtr":break
default:if(!i&&a.WTF)throw new Error("unrecognized "+r[0]+" in workbook")}return e}),-1===Je.main.indexOf(s.xmlns))throw new Error("Unknown Namespace: "+s.xmlns)
return sl(s),s}(e,r)}function pl(e,t,r,n,a,s,i,o){return".bin"===t.slice(-4)?function(e,t,i,o,l,c,f){if(!e)return e
var h=t||{}
o||(o={"!id":{}}),null!=ue&&null==h.dense&&(h.dense=ue)
var u,d,p,g,m,b,v,w,C,E,S=h.dense?[]:{},A={s:{r:2e6,c:2e6},e:{r:0,c:0}},_=!1,B=!1,T=[]
h.biff=12
var y=h["!row"]=0,k=!1,x=[],I={},R=h.supbooks||[[]]
if(R.sharedf=I,R.arrayf=x,R.SheetNames=l.SheetNames||l.Sheets.map(function(e){return e.name}),!h.supbooks&&(h.supbooks=R,l.Names))for(var r=0;r<l.Names.length;++r)R[0][r+1]=l.Names[r]
var O=[],D=[],F=!1
if(Ft(e,function(e,t,r){if(!B)switch(r){case 148:u=e
break
case 0:d=e,h.sheetRows&&h.sheetRows<=d.r&&(B=!0),C=Vt(m=d.r),h["!row"]=d.r,(e.hidden||e.hpt||null!=e.level)&&(e.hpt&&(e.hpx=Cs(e.hpt)),D[e.r]=e)
break
case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:switch(p={t:e[2]},e[2]){case"n":p.v=e[1]
break
case"s":w=ao[e[1]],p.v=w.t,p.r=w.r
break
case"b":p.v=!!e[1]
break
case"e":p.v=e[1],!1!==h.cellText&&(p.w=Ar[p.v])
break
case"str":p.t="s",p.v=e[1]}if((g=f.CellXf[e[0].iStyleRef])&&ho(p,g.numFmtId,null,h,c,f),b=e[0].c,h.dense?(S[m]||(S[m]=[]),S[m][b]=p):S[Xt(b)+C]=p,h.cellFormula){for(k=!1,y=0;y<x.length;++y){var n=x[y]
d.r>=n[0].s.r&&d.r<=n[0].e.r&&b>=n[0].s.c&&b<=n[0].e.c&&(p.F=$t(n[0]),k=!0)}!k&&3<e.length&&(p.f=e[3])}if(A.s.r>d.r&&(A.s.r=d.r),A.s.c>b&&(A.s.c=b),A.e.r<d.r&&(A.e.r=d.r),A.e.c<b&&(A.e.c=b),h.cellDates&&g&&"n"==p.t&&de.is_date(de._table[g.numFmtId])){var a=de.parse_date_code(p.v)
a&&(p.t="d",p.v=new Date(a.y,a.m-1,a.d,a.H,a.M,a.S,a.u))}break
case 1:if(!h.sheetStubs||_)break
p={t:"z",v:void 0},b=e[0].c,h.dense?(S[m]||(S[m]=[]),S[m][b]=p):S[Xt(b)+C]=p,A.s.r>d.r&&(A.s.r=d.r),A.s.c>b&&(A.s.c=b),A.e.r<d.r&&(A.e.r=d.r),A.e.c<b&&(A.e.c=b)
break
case 176:T.push(e)
break
case 494:var s=o["!id"][e.relId]
for(s?(e.Target=s.Target,e.loc&&(e.Target+="#"+e.loc),e.Rel=s):""==e.relId&&(e.Target="#"+e.loc),m=e.rfx.s.r;m<=e.rfx.e.r;++m)for(b=e.rfx.s.c;b<=e.rfx.e.c;++b)h.dense?(S[m]||(S[m]=[]),S[m][b]||(S[m][b]={t:"z",v:void 0}),S[m][b].l=e):(v=Yt({c:b,r:m}),S[v]||(S[v]={t:"z",v:void 0}),S[v].l=e)
break
case 426:if(!h.cellFormula)break
x.push(e),(E=h.dense?S[m][b]:S[Xt(b)+C]).f=Gi(e[1],0,{r:d.r,c:b},R,h),E.F=$t(e[0])
break
case 427:if(!h.cellFormula)break
I[Yt(e[0].s)]=e[1],(E=h.dense?S[m][b]:S[Xt(b)+C]).f=Gi(e[1],0,{r:d.r,c:b},R,h)
break
case 60:if(!h.cellStyles)break
for(;e.e>=e.s;)O[e.e--]={width:e.w/256,hidden:!!(1&e.flags)},F||(F=!0,ms(e.w/256)),bs(O[e.e+1])
break
case 161:S["!autofilter"]={ref:$t(e)}
break
case 476:S["!margins"]=e
break
case 147:l.Sheets[i]||(l.Sheets[i]={}),e.name&&(l.Sheets[i].CodeName=e.name)
break
case 137:l.Views||(l.Views=[{}]),l.Views[0]||(l.Views[0]={}),e.RTL&&(l.Views[0].RTL=!0)
break
case 485:break
case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 49:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 64:case 1053:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 151:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 152:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 3072:case 50:case 2070:case 1045:break
case 35:_=!0
break
case 36:_=!1
break
case 37:case 38:break
default:if(0<(t||"").indexOf("Begin"));else if(0<(t||"").indexOf("End"));else if(!_||h.WTF)throw new Error("Unexpected record "+r+" "+t)}},h),delete h.supbooks,delete h["!row"],!S["!ref"]&&(A.s.r<2e6||u&&(0<u.e.r||0<u.e.c||0<u.s.r||0<u.s.c))&&(S["!ref"]=$t(u||A)),h.sheetRows&&S["!ref"]){var n=Zt(S["!ref"])
h.sheetRows<=+n.e.r&&(n.e.r=h.sheetRows-1,n.e.r>A.e.r&&(n.e.r=A.e.r),n.e.r<n.s.r&&(n.s.r=n.e.r),n.e.c>A.e.c&&(n.e.c=A.e.c),n.e.c<n.s.c&&(n.s.c=n.e.c),S["!fullref"]=S["!ref"],S["!ref"]=$t(n))}return 0<T.length&&(S["!merges"]=T),0<O.length&&(S["!cols"]=O),0<D.length&&(S["!rows"]=D),S}(e,n,r,a,s,i,o):Ao(e,n,r,a,s,i,o)}function gl(e,t,r,n,a,s,i,o){return".bin"===t.slice(-4)?function(e,n,a,t,s){if(!e)return e
t||(t={"!id":{}})
var i={"!type":"chart","!chart":null,"!rel":""},o=[],l=!1
return Ft(e,function(e,t,r){switch(r){case 550:i["!rel"]=e
break
case 651:s.Sheets[a]||(s.Sheets[a]={}),e.name&&(s.Sheets[a].CodeName=e.name)
break
case 562:case 652:case 669:case 679:case 551:case 552:case 476:case 3072:break
case 35:l=!0
break
case 36:l=!1
break
case 37:o.push(t)
break
case 38:o.pop()
break
default:if(0<(t||"").indexOf("Begin"))o.push(t)
else if(0<(t||"").indexOf("End"))o.pop()
else if(!l||n.WTF)throw new Error("Unexpected record "+r+" "+t)}},n),t["!id"][i["!rel"]]&&(i["!chart"]=t["!id"][i["!rel"]]),i}(e,n,r,a,s):function(e,t,r,n,a){if(!e)return e
n||(n={"!id":{}})
var s,i={"!type":"chart","!chart":null,"!rel":""},o=e.match(Eo)
return o&&_o(o[0],0,a,r),(s=e.match(/drawing r:id="(.*?)"/))&&(i["!rel"]=s[1]),n["!id"][i["!rel"]]&&(i["!chart"]=n["!id"][i["!rel"]]),i}(e,0,r,a,s)}function ml(e,t,r,n){return".bin"===t.slice(-4)?function(e,n,a){var s={NumberFmt:[]}
for(var t in de._table)s.NumberFmt[t]=de._table[t]
s.CellXf=[],s.Fonts=[]
var i=[],o=!1
return Ft(e,function(e,t,r){switch(r){case 44:s.NumberFmt[e[0]]=e[1],de.load(e[1],e[0])
break
case 43:s.Fonts.push(e),null!=e.color.theme&&n&&n.themeElements&&n.themeElements.clrScheme&&(e.color.rgb=os(n.themeElements.clrScheme[e.color.theme].rgb,e.color.tint||0))
break
case 1025:case 45:case 46:break
case 47:"BrtBeginCellXFs"==i[i.length-1]&&s.CellXf.push(e)
break
case 48:case 507:case 572:case 475:break
case 1171:case 2102:case 1130:case 512:case 2095:case 3072:break
case 35:o=!0
break
case 36:o=!1
break
case 37:i.push(t)
break
case 38:i.pop()
break
default:if(0<(t||"").indexOf("Begin"))i.push(t)
else if(0<(t||"").indexOf("End"))i.pop()
else if(!o||a.WTF)throw new Error("Unexpected record "+r+" "+t)}}),s}(e,r,n):xs(e,r,n)}function bl(e,t,r){return".bin"===t.slice(-4)?(n=r,s=!(a=[]),Ft(e,function(e,t,r){switch(r){case 159:a.Count=e[0],a.Unique=e[1]
break
case 19:a.push(e)
break
case 160:return!0
case 35:s=!0
break
case 36:s=!1
break
default:if(0<t.indexOf("Begin")||t.indexOf("End"),!s||n.WTF)throw new Error("Unexpected record "+r+" "+t)}}),a):function(e,t){var r=[],n=""
if(!e)return r
var a=e.match(Ma)
if(a){n=a[2].replace(Ua,"").split(Ha)
for(var s=0;s!=n.length;++s){var i=La(n[s].trim(),t)
null!=i&&(r[r.length]=i)}a=ve(a[1]),r.Count=a.count,r.Unique=a.uniqueCount}return r}(e,r)
var n,a,s}function vl(e,t,r){return".bin"===t.slice(-4)?(n=r,a=[],s=[],o=!(i={}),Ft(e,function(e,t,r){switch(r){case 632:s.push(e)
break
case 635:i=e
break
case 637:i.t=e.t,i.h=e.h,i.r=e.r
break
case 636:if(i.author=s[i.iauthor],delete i.iauthor,n.sheetRows&&n.sheetRows<=i.rfx.r)break
i.t||(i.t=""),delete i.rfx,a.push(i)
break
case 3072:break
case 35:o=!0
break
case 36:o=!1
break
case 37:case 38:break
default:if(0<(t||"").indexOf("Begin"));else if(0<(t||"").indexOf("End"));else if(!o||n.WTF)throw new Error("Unexpected record "+r+" "+t)}}),a):function(e,o){if(e.match(/<(?:\w+:)?comments *\/>/))return[]
var l=[],c=[],t=e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/)
t&&t[1]&&t[1].split(/<\/\w*:?author>/).forEach(function(e){if(""!==e&&""!==e.trim()){var t=e.match(/<(?:\w+:)?author[^>]*>(.*)/)
t&&l.push(t[1])}})
var r=e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/)
return r&&r[1]&&r[1].split(/<\/\w*:?comment>/).forEach(function(e){if(""!==e&&""!==e.trim()){var t=e.match(/<(?:\w+:)?comment[^>]*>/)
if(t){var r=ve(t[0]),n={author:r.authorId&&l[r.authorId]||"sheetjsghost",ref:r.ref,guid:r.guid},a=jt(r.ref)
if(!(o.sheetRows&&o.sheetRows<=a.r)){var s=e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),i=!!s&&!!s[1]&&La(s[1])||{r:"",t:"",h:""}
n.r=i.r,"<t></t>"==i.r&&(i.t=i.h=""),n.t=i.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),o.cellHTML&&(n.h=i.h),c.push(n)}}}}),c}(e,r)
var n,a,s,i,o}function wl(e,t,r){return".bin"===t.slice(-4)?(n=[],Ft(e,function(e,t,r){switch(r){case 63:n.push(e)
break
default:if(0<(t||"").indexOf("Begin"));else if(!(0<(t||"").indexOf("End")))throw new Error("Unexpected record "+r+" "+t)}}),n):function(e){var r=[]
if(!e)return r
var n=1
return(e.match(z)||[]).forEach(function(e){var t=ve(e)
switch(t[0]){case"<?xml":break
case"<calcChain":case"<calcChain>":case"</calcChain>":break
case"<c":delete t[0],t.i?n=t.i:t.i=n,r.push(t)}}),r}(e)
var n}function Cl(e,t,r){if(".bin"===t.slice(-4))return function(e,t,r){if(!e)return e
var n=r||{},a=!1
Ft(e,function(e,t,r){switch(r){case 359:case 363:case 364:case 366:case 367:case 368:case 369:case 370:case 371:case 472:case 577:case 578:case 579:case 580:case 581:case 582:case 583:case 584:case 585:case 586:case 587:break
case 35:a=!0
break
case 36:a=!1
break
default:if(0<(t||"").indexOf("Begin"));else if(0<(t||"").indexOf("End"));else if(!a||n.WTF)throw new Error("Unexpected record "+r.toString(16)+" "+t)}},n)}(e,0,r)}function El(e,t,r){return(".bin"===t.slice(-4)?ul:function(t){var r=[W]
r[r.length]=fl
var e=t.Workbook&&0<(t.Workbook.Names||[]).length,n={codeName:"ThisWorkbook"}
t.Workbook&&t.Workbook.WBProps&&(qo.forEach(function(e){null!=t.Workbook.WBProps[e[0]]&&t.Workbook.WBProps[e[0]]!=e[1]&&(n[e[0]]=t.Workbook.WBProps[e[0]])}),t.Workbook.WBProps.CodeName&&(n.codeName=t.Workbook.WBProps.CodeName,delete n.CodeName)),r[r.length]=Ke("workbookPr",null,n),r[r.length]="<sheets>"
for(var a=t.Workbook&&t.Workbook.Sheets||[],s=0;s!=t.SheetNames.length;++s){var i={name:_e(t.SheetNames[s].slice(0,31))}
if(i.sheetId=""+(s+1),i["r:id"]="rId"+(s+1),a[s])switch(a[s].Hidden){case 1:i.state="hidden"
break
case 2:i.state="veryHidden"}r[r.length]=Ke("sheet",null,i)}return r[r.length]="</sheets>",e&&(r[r.length]="<definedNames>",t.Workbook&&t.Workbook.Names&&t.Workbook.Names.forEach(function(e){var t={name:e.Name}
e.Comment&&(t.comment=e.Comment),null!=e.Sheet&&(t.localSheetId=""+e.Sheet),e.Ref&&(r[r.length]=Ke("definedName",String(e.Ref),t))}),r[r.length]="</definedNames>"),2<r.length&&(r[r.length]="</workbook>",r[1]=r[1].replace("/>",">")),r.join("")})(e,r)}function Sl(e,t,r){return(".bin"===t.slice(-4)?za:function(e,t){if(!t.bookSST)return""
var r=[W]
r[r.length]=Ke("sst",null,{xmlns:Je.main[0],count:e.Count,uniqueCount:e.Unique})
for(var n=0;n!=e.length;++n)if(null!=e[n]){var a=e[n],s="<si>"
a.r?s+=a.r:(s+="<t",a.t||(a.t=""),a.t.match(Wa)&&(s+=' xml:space="preserve"'),s+=">"+_e(a.t)+"</t>"),s+="</si>",r[r.length]=s}return 2<r.length&&(r[r.length]="</sst>",r[1]=r[1].replace("/>",">")),r.join("")})(e,r)}function Al(e,t,r){return(".bin"===t.slice(-4)?ii:function(e){var r=[W,ai],n=[]
return r.push("<authors>"),e.forEach(function(e){e[1].forEach(function(e){var t=_e(e.a);-1<n.indexOf(t)||(n.push(t),r.push("<author>"+t+"</author>"))})}),r.push("</authors>"),r.push("<commentList>"),e.forEach(function(t){t[1].forEach(function(e){r.push('<comment ref="'+t[0]+'" authorId="'+n.indexOf(_e(e.a))+'"><text>'),r.push(je("t",null==e.t?"":e.t)),r.push("</text></comment>")})}),r.push("</commentList>"),2<r.length&&(r[r.length]="</comments>",r[1]=r[1].replace("/>",">")),r.join("")})(e,r)}var _l=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,Bl=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/,Tl=function(e){return String.fromCharCode(e)}
function yl(e,t){var r=e.split(/\s+/),n=[]
if(t||(n[0]=r[0]),1===r.length)return n
var a,s,i,o=e.match(_l)
if(o)for(i=0;i!=o.length;++i)-1===(s=(a=o[i].match(Bl))[1].indexOf(":"))?n[a[1]]=a[2].slice(1,a[2].length-1):n["xmlns:"===a[1].slice(0,6)?"xmlns"+a[1].slice(6):a[1].slice(s+1)]=a[2].slice(1,a[2].length-1)
return n}function kl(e){var t={}
if(1===e.split(/\s+/).length)return t
var r,n,a,s=e.match(_l)
if(s)for(a=0;a!=s.length;++a)-1===(n=(r=s[a].match(Bl))[1].indexOf(":"))?t[r[1]]=r[2].slice(1,r[2].length-1):t["xmlns:"===r[1].slice(0,6)?"xmlns"+r[1].slice(6):r[1].slice(n+1)]=r[2].slice(1,r[2].length-1)
return t}function xl(e,t,r,n){var a=n
switch((r[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":a=Ie(n)
break
case"i2":case"int":a=parseInt(n,10)
break
case"r4":case"float":a=parseFloat(n)
break
case"date":case"dateTime.tz":a=K(n)
break
case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break
default:throw new Error("bad custprop:"+r[0])}e[Ee(t)]=a}function Il(e,t,r){if("z"!==e.t){if(!r||!1!==r.cellText)try{"e"===e.t?e.w=e.w||Ar[e.v]:"General"===t?"n"===e.t?(0|e.v)===e.v?e.w=de._general_int(e.v):e.w=de._general_num(e.v):e.w=de._general(e.v):e.w=(n=t||"General",a=e.v,"General"===(s=pe[n]||Ee(n))?de._general(a):de.format(s,a))}catch(e){if(r.WTF)throw e}var n,a,s
try{var i=pe[t]||t||"General"
if(r.cellNF&&(e.z=i),r.cellDates&&"n"==e.t&&de.is_date(i)){var o=de.parse_date_code(e.v)
o&&(e.t="d",e.v=new Date(o.y,o.m-1,o.d,o.H,o.M,o.S,o.u))}}catch(e){if(r.WTF)throw e}}}function Rl(e,t,r){if(r.cellStyles&&t.Interior){var n=t.Interior
n.Pattern&&(n.patternType=Ts[n.Pattern]||n.Pattern)}e[t.ID]=t}function Ol(e,t,r,n,a,s,i,o,l,c){var f="General",h=n.StyleID,u={}
c=c||{}
var d=[],p=0
for(void 0===h&&o&&(h=o.StyleID),void 0===h&&i&&(h=i.StyleID);void 0!==s[h]&&(s[h].nf&&(f=s[h].nf),s[h].Interior&&d.push(s[h].Interior),s[h].Parent);)h=s[h].Parent
switch(r.Type){case"Boolean":n.t="b",n.v=Ie(e)
break
case"String":n.t="s",n.r=ke(Ee(e)),n.v=-1<e.indexOf("<")?Ee(t):n.r
break
case"DateTime":"Z"!=e.slice(-1)&&(e+="Z"),n.v=(K(e)-new Date(Date.UTC(1899,11,30)))/864e5,n.v!=n.v?n.v=Ee(e):n.v<60&&(n.v=n.v-1),f&&"General"!=f||(f="yyyy-mm-dd")
case"Number":void 0===n.v&&(n.v=+e),n.t||(n.t="n")
break
case"Error":n.t="e",n.v=_r[e],!1!==c.cellText&&(n.w=e)
break
default:n.t="s",n.v=ke(t||e)}if(Il(n,f,c),!1!==c.cellFormula)if(n.Formula){var g=Ee(n.Formula)
61==g.charCodeAt(0)&&(g=g.slice(1)),n.f=ci(g,a),delete n.Formula,"RC"==n.ArrayRange?n.F=ci("RC:RC",a):n.ArrayRange&&(n.F=ci(n.ArrayRange,a),l.push([Zt(n.F),n.F]))}else for(p=0;p<l.length;++p)a.r>=l[p][0].s.r&&a.r<=l[p][0].e.r&&a.c>=l[p][0].s.c&&a.c<=l[p][0].e.c&&(n.F=l[p][1])
c.cellStyles&&(d.forEach(function(e){!u.patternType&&e.patternType&&(u.patternType=e.patternType)}),n.s=u),void 0!==n.StyleID&&(n.ixfe=n.StyleID)}function Dl(e){if(ee&&ff.isBuffer(e))return e.toString("utf8")
if("string"==typeof e)return e
if("undefined"!=typeof Uint8Array&&e instanceof Uint8Array)return Re(l(m(e)))
throw new Error("Bad input format: expected Buffer or string")}var Fl=/<(\/?)([^\s?>!\/:]*:|)([^\s?>:\/]+)[^>]*>/gm
function Pl(e,t){var r=t||{}
ce(de)
var n=ne(Dl(e))
"binary"!=r.type&&"array"!=r.type&&"base64"!=r.type||(n="undefined"!=typeof cptable?cptable.utils.decode(65001,re(n)):Re(n))
var a,s=n.slice(0,1024).toLowerCase(),i=!1
if(-1==s.indexOf("<?xml")&&["html","table","head","meta","script","style","div"].forEach(function(e){0<=s.indexOf("<"+e)&&(i=!0)}),i)return cc.to_workbook(n,r)
var o,l=[]
null!=ue&&null==r.dense&&(r.dense=ue)
var c,f,h,u,d,p={},g=[],m=r.dense?[]:{},b="",v={},w={},C=yl('<Data ss:Type="String">'),E=0,S=0,A=0,_={s:{r:2e6,c:2e6},e:{r:0,c:0}},B={},T={},y="",k=0,x=[],I={},R={},O=0,D=[],F=[],P={},N=[],L=!1,M=[],U=[],H={},W=0,V=0,z={Sheets:[],WBProps:{date1904:!1}},X={}
for(Fl.lastIndex=0,n=n.replace(/<!--([\s\S]*?)-->/gm,"");a=Fl.exec(n);)switch(a[3]){case"Data":if(l[l.length-1][1])break
"/"===a[1]?Ol(n.slice(E,a.index),y,C,"Comment"==l[l.length-1][0]?P:v,{c:S,r:A},B,N[S],w,M,r):(y="",C=yl(a[0]),E=a.index+a[0].length)
break
case"Cell":if("/"===a[1])if(0<F.length&&(v.c=F),(!r.sheetRows||r.sheetRows>A)&&void 0!==v.v&&(r.dense?(m[A]||(m[A]=[]),m[A][S]=v):m[Xt(S)+Vt(A)]=v),v.HRef&&(v.l={Target:v.HRef},v.HRefScreenTip&&(v.l.Tooltip=v.HRefScreenTip),delete v.HRef,delete v.HRefScreenTip),(v.MergeAcross||v.MergeDown)&&(W=S+(0|parseInt(v.MergeAcross,10)),V=A+(0|parseInt(v.MergeDown,10)),x.push({s:{c:S,r:A},e:{c:W,r:V}})),r.sheetStubs)if(v.MergeAcross||v.MergeDown){for(var G=S;G<=W;++G)for(var j=A;j<=V;++j)(S<G||A<j)&&(r.dense?(m[j]||(m[j]=[]),m[j][G]={t:"z"}):m[Xt(G)+Vt(j)]={t:"z"})
S=W+1}else++S
else v.MergeAcross?S=W+1:++S
else(v=kl(a[0])).Index&&(S=+v.Index-1),S<_.s.c&&(_.s.c=S),S>_.e.c&&(_.e.c=S),"/>"===a[0].slice(-2)&&++S,F=[]
break
case"Row":"/"===a[1]||"/>"===a[0].slice(-2)?(A<_.s.r&&(_.s.r=A),A>_.e.r&&(_.e.r=A),"/>"===a[0].slice(-2)&&(w=yl(a[0])).Index&&(A=+w.Index-1),S=0,++A):((w=yl(a[0])).Index&&(A=+w.Index-1),H={},("0"==w.AutoFitHeight||w.Height)&&(H.hpx=parseInt(w.Height,10),H.hpt=ws(H.hpx),U[A]=H),"1"==w.Hidden&&(H.hidden=!0,U[A]=H))
break
case"Worksheet":if("/"===a[1]){if((o=l.pop())[0]!==a[3])throw new Error("Bad state: "+o.join("|"))
g.push(b),_.s.r<=_.e.r&&_.s.c<=_.e.c&&(m["!ref"]=$t(_),r.sheetRows&&r.sheetRows<=_.e.r&&(m["!fullref"]=m["!ref"],_.e.r=r.sheetRows-1,m["!ref"]=$t(_))),x.length&&(m["!merges"]=x),0<N.length&&(m["!cols"]=N),0<U.length&&(m["!rows"]=U),p[b]=m}else _={s:{r:2e6,c:2e6},e:{r:0,c:0}},A=S=0,l.push([a[3],!1]),o=yl(a[0]),b=Ee(o.Name),m=r.dense?[]:{},x=[],M=[],U=[],X={name:b,Hidden:0},z.Sheets.push(X)
break
case"Table":if("/"===a[1]){if((o=l.pop())[0]!==a[3])throw new Error("Bad state: "+o.join("|"))}else{if("/>"==a[0].slice(-2))break
yl(a[0]),l.push([a[3],!1]),L=!(N=[])}break
case"Style":"/"===a[1]?Rl(B,T,r):T=yl(a[0])
break
case"NumberFormat":T.nf=Ee(yl(a[0]).Format||"General"),pe[T.nf]&&(T.nf=pe[T.nf])
for(var Y=0;392!=Y&&de._table[Y]!=T.nf;++Y);if(392==Y)for(Y=57;392!=Y;++Y)if(null==de._table[Y]){de.load(T.nf,Y)
break}break
case"Column":if("Table"!==l[l.length-1][0])break
if((c=yl(a[0])).Hidden&&(c.hidden=!0,delete c.Hidden),c.Width&&(c.wpx=parseInt(c.Width,10)),!L&&10<c.wpx){L=!0,hs=ls
for(var K=0;K<N.length;++K)N[K]&&bs(N[K])}L&&bs(c),N[c.Index-1||N.length]=c
for(var $=0;$<+c.Span;++$)N[N.length]=be(c)
break
case"NamedRange":z.Names||(z.Names=[])
var Z=ve(a[0]),Q={Name:Z.Name,Ref:ci(Z.RefersTo.slice(1),{r:0,c:0})}
0<z.Sheets.length&&(Q.Sheet=z.Sheets.length-1),z.Names.push(Q)
break
case"NamedCell":case"B":case"I":case"U":case"S":case"Sub":case"Sup":case"Span":case"Border":case"Alignment":case"Borders":break
case"Font":if("/>"===a[0].slice(-2))break
"/"===a[1]?y+=n.slice(k,a.index):k=a.index+a[0].length
break
case"Interior":if(!r.cellStyles)break
T.Interior=yl(a[0])
break
case"Protection":break
case"Author":case"Title":case"Description":case"Created":case"Keywords":case"Subject":case"Category":case"Company":case"LastAuthor":case"LastSaved":case"LastPrinted":case"Version":case"Revision":case"TotalTime":case"HyperlinkBase":case"Manager":case"ContentStatus":case"Identifier":case"Language":case"AppName":if("/>"===a[0].slice(-2))break
"/"===a[1]?(h=I,u=a[3],d=n.slice(O,a.index),h[u=gn[u]||u]=d):O=a.index+a[0].length
break
case"Paragraphs":break
case"Styles":case"Workbook":if("/"===a[1]){if((o=l.pop())[0]!==a[3])throw new Error("Bad state: "+o.join("|"))}else l.push([a[3],!1])
break
case"Comment":if("/"===a[1]){if((o=l.pop())[0]!==a[3])throw new Error("Bad state: "+o.join("|"));(f=P).t=f.v||"",f.t=f.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),f.v=f.w=f.ixfe=void 0,F.push(P)}else l.push([a[3],!1]),P={a:(o=yl(a[0])).Author}
break
case"AutoFilter":if("/"===a[1]){if((o=l.pop())[0]!==a[3])throw new Error("Bad state: "+o.join("|"))}else if("/"!==a[0].charAt(a[0].length-2)){var J=yl(a[0])
m["!autofilter"]={ref:ci(J.Range).replace(/\$/g,"")},l.push([a[3],!0])}break
case"Name":break
case"ComponentOptions":case"DocumentProperties":case"CustomDocumentProperties":case"OfficeDocumentSettings":case"PivotTable":case"PivotCache":case"Names":case"MapInfo":case"PageBreaks":case"QueryTable":case"DataValidation":case"Sorting":case"Schema":case"data":case"ConditionalFormatting":case"SmartTagType":case"SmartTags":case"ExcelWorkbook":case"WorkbookOptions":case"WorksheetOptions":if("/"===a[1]){if((o=l.pop())[0]!==a[3])throw new Error("Bad state: "+o.join("|"))}else"/"!==a[0].charAt(a[0].length-2)&&l.push([a[3],!0])
break
default:if(0==l.length&&"document"==a[3])return gc(n,r)
if(0==l.length&&"UOF"==a[3])return gc(n,r)
var q=!0
switch(l[l.length-1][0]){case"OfficeDocumentSettings":switch(a[3]){case"AllowPNG":case"RemovePersonalInformation":case"DownloadComponents":case"LocationOfComponents":case"Colors":case"Color":case"Index":case"RGB":case"PixelsPerInch":case"TargetScreenSize":case"ReadOnlyRecommended":break
default:q=!1}break
case"ComponentOptions":switch(a[3]){case"Toolbar":case"HideOfficeLogo":case"SpreadsheetAutoFit":case"Label":case"Caption":case"MaxHeight":case"MaxWidth":case"NextSheetNumber":break
default:q=!1}break
case"ExcelWorkbook":switch(a[3]){case"Date1904":z.WBProps.date1904=!0
break
case"WindowHeight":case"WindowWidth":case"WindowTopX":case"WindowTopY":case"TabRatio":case"ProtectStructure":case"ProtectWindows":case"ActiveSheet":case"DisplayInkNotes":case"FirstVisibleSheet":case"SupBook":case"SheetName":case"SheetIndex":case"SheetIndexFirst":case"SheetIndexLast":case"Dll":case"AcceptLabelsInFormulas":case"DoNotSaveLinkValues":case"Iteration":case"MaxIterations":case"MaxChange":case"Path":case"Xct":case"Count":case"SelectedSheets":case"Calculation":case"Uncalced":case"StartupPrompt":case"Crn":case"ExternName":case"Formula":case"ColFirst":case"ColLast":case"WantAdvise":case"Boolean":case"Error":case"Text":case"OLE":case"NoAutoRecover":case"PublishObjects":case"DoNotCalculateBeforeSave":case"Number":case"RefModeR1C1":case"EmbedSaveSmartTags":break
default:q=!1}break
case"WorkbookOptions":switch(a[3]){case"OWCVersion":case"Height":case"Width":break
default:q=!1}break
case"WorksheetOptions":switch(a[3]){case"Visible":if("/>"===a[0].slice(-2));else if("/"===a[1])switch(n.slice(O,a.index)){case"SheetHidden":X.Hidden=1
break
case"SheetVeryHidden":X.Hidden=2}else O=a.index+a[0].length
break
case"Header":m["!margins"]||co(m["!margins"]={},"xlml"),m["!margins"].header=ve(a[0]).Margin
break
case"Footer":m["!margins"]||co(m["!margins"]={},"xlml"),m["!margins"].footer=ve(a[0]).Margin
break
case"PageMargins":var ee=ve(a[0])
m["!margins"]||co(m["!margins"]={},"xlml"),ee.Top&&(m["!margins"].top=ee.Top),ee.Left&&(m["!margins"].left=ee.Left),ee.Right&&(m["!margins"].right=ee.Right),ee.Bottom&&(m["!margins"].bottom=ee.Bottom)
break
case"DisplayRightToLeft":z.Views||(z.Views=[]),z.Views[0]||(z.Views[0]={}),z.Views[0].RTL=!0
break
case"Unsynced":case"Print":case"Panes":case"Scale":case"Pane":case"Number":case"Layout":case"PageSetup":case"Selected":case"ProtectObjects":case"EnableSelection":case"ProtectScenarios":case"ValidPrinterInfo":case"HorizontalResolution":case"VerticalResolution":case"NumberofCopies":case"ActiveRow":case"ActiveCol":case"ActivePane":case"TopRowVisible":case"TopRowBottomPane":case"LeftColumnVisible":case"LeftColumnRightPane":case"FitToPage":case"RangeSelection":case"PaperSizeIndex":case"PageLayoutZoom":case"PageBreakZoom":case"FilterOn":case"DoNotDisplayGridlines":case"SplitHorizontal":case"SplitVertical":case"FreezePanes":case"FrozenNoSplit":case"FitWidth":case"FitHeight":case"CommentsLayout":case"Zoom":case"LeftToRight":case"Gridlines":case"AllowSort":case"AllowFilter":case"AllowInsertRows":case"AllowDeleteRows":case"AllowInsertCols":case"AllowDeleteCols":case"AllowInsertHyperlinks":case"AllowFormatCells":case"AllowSizeCols":case"AllowSizeRows":case"NoSummaryRowsBelowDetail":case"TabColorIndex":case"DoNotDisplayHeadings":case"ShowPageLayoutZoom":case"NoSummaryColumnsRightDetail":case"BlackAndWhite":case"DoNotDisplayZeros":case"DisplayPageBreak":case"RowColHeadings":case"DoNotDisplayOutline":case"NoOrientation":case"AllowUsePivotTables":case"ZeroHeight":case"ViewableRange":case"Selection":case"ProtectContents":break
default:q=!1}break
case"PivotTable":case"PivotCache":switch(a[3]){case"ImmediateItemsOnDrop":case"ShowPageMultipleItemLabel":case"CompactRowIndent":case"Location":case"PivotField":case"Orientation":case"LayoutForm":case"LayoutSubtotalLocation":case"LayoutCompactRow":case"Position":case"PivotItem":case"DataType":case"DataField":case"SourceName":case"ParentField":case"PTLineItems":case"PTLineItem":case"CountOfSameItems":case"Item":case"ItemType":case"PTSource":case"CacheIndex":case"ConsolidationReference":case"FileName":case"Reference":case"NoColumnGrand":case"NoRowGrand":case"BlankLineAfterItems":case"Hidden":case"Subtotal":case"BaseField":case"MapChildItems":case"Function":case"RefreshOnFileOpen":case"PrintSetTitles":case"MergeLabels":case"DefaultVersion":case"RefreshName":case"RefreshDate":case"RefreshDateCopy":case"VersionLastRefresh":case"VersionLastUpdate":case"VersionUpdateableMin":case"VersionRefreshableMin":case"Calculation":break
default:q=!1}break
case"PageBreaks":switch(a[3]){case"ColBreaks":case"ColBreak":case"RowBreaks":case"RowBreak":case"ColStart":case"ColEnd":case"RowEnd":break
default:q=!1}break
case"AutoFilter":switch(a[3]){case"AutoFilterColumn":case"AutoFilterCondition":case"AutoFilterAnd":case"AutoFilterOr":break
default:q=!1}break
case"QueryTable":switch(a[3]){case"Id":case"AutoFormatFont":case"AutoFormatPattern":case"QuerySource":case"QueryType":case"EnableRedirections":case"RefreshedInXl9":case"URLString":case"HTMLTables":case"Connection":case"CommandText":case"RefreshInfo":case"NoTitles":case"NextId":case"ColumnInfo":case"OverwriteCells":case"DoNotPromptForFile":case"TextWizardSettings":case"Source":case"Number":case"Decimal":case"ThousandSeparator":case"TrailingMinusNumbers":case"FormatSettings":case"FieldType":case"Delimiters":case"Tab":case"Comma":case"AutoFormatName":case"VersionLastEdit":case"VersionLastRefresh":break
default:q=!1}break
case"Sorting":case"ConditionalFormatting":case"DataValidation":switch(a[3]){case"Range":case"Type":case"Min":case"Max":case"Sort":case"Descending":case"Order":case"CaseSensitive":case"Value":case"ErrorStyle":case"ErrorMessage":case"ErrorTitle":case"CellRangeList":case"InputMessage":case"InputTitle":case"ComboHide":case"InputHide":case"Condition":case"Qualifier":case"UseBlank":case"Value1":case"Value2":case"Format":break
default:q=!1}break
case"MapInfo":case"Schema":case"data":switch(a[3]){case"Map":case"Entry":case"Range":case"XPath":case"Field":case"XSDType":case"FilterOn":case"Aggregate":case"ElementType":case"AttributeType":break
case"schema":case"element":case"complexType":case"datatype":case"all":case"attribute":case"extends":case"row":break
default:q=!1}break
case"SmartTags":break
default:q=!1}if(q)break
if(!l[l.length-1][1])throw"Unrecognized tag: "+a[3]+"|"+l.join("|")
if("CustomDocumentProperties"===l[l.length-1][0]){if("/>"===a[0].slice(-2))break
"/"===a[1]?xl(R,a[3],D,n.slice(O,a.index)):O=(D=a).index+a[0].length
break}if(r.WTF)throw"Unrecognized tag: "+a[3]+"|"+l.join("|")}var te={}
return r.bookSheets||r.bookProps||(te.Sheets=p),te.SheetNames=g,te.Workbook=z,te.SSF=de.get_table(),te.Props=I,te.Custprops=R,te}function Nl(e,t){switch(Dc(t=t||{}),t.type||"base64"){case"base64":return Pl(q.decode(e),t)
case"binary":case"buffer":case"file":return Pl(e,t)
case"array":return Pl(l(e),t)}}function Ll(e,t){var r,n,a,s,i,o,l,c,f=[]
return e.Props&&f.push((r=e.Props,n=t,a=[],me(pn).map(function(e){for(var t=0;t<rn.length;++t)if(rn[t][1]==e)return rn[t]
for(t=0;t<ln.length;++t)if(ln[t][1]==e)return ln[t]
throw e}).forEach(function(e){if(null!=r[e[1]]){var t=n&&n.Props&&null!=n.Props[e[1]]?n.Props[e[1]]:r[e[1]]
switch(e[2]){case"date":t=new Date(t).toISOString().replace(/\.\d*Z/,"Z")}"number"==typeof t?t=String(t):!0===t||!1===t?t=t?"1":"0":t instanceof Date&&(t=new Date(t).toISOString().replace(/\.\d*Z/,"")),a.push(je(pn[e[1]]||e[1],t))}}),Ke("DocumentProperties",a.join(""),{xmlns:qe.o}))),e.Custprops&&f.push((s=e.Props,i=e.Custprops,o=["Worksheets","SheetNames"],l="CustomDocumentProperties",c=[],s&&me(s).forEach(function(e){if(s.hasOwnProperty(e)){for(var t=0;t<rn.length;++t)if(e==rn[t][1])return
for(t=0;t<ln.length;++t)if(e==ln[t][1])return
for(t=0;t<o.length;++t)if(e==o[t])return
var r=s[e],n="string"
r="number"==typeof r?(n="float",String(r)):!0===r||!1===r?(n="boolean",r?"1":"0"):String(r),c.push(Ke(Be(e),r,{"dt:dt":n}))}}),i&&me(i).forEach(function(e){if(i.hasOwnProperty(e)&&(!s||!s.hasOwnProperty(e))){var t=i[e],r="string"
t="number"==typeof t?(r="float",String(t)):!0===t||!1===t?(r="boolean",t?"1":"0"):t instanceof Date?(r="dateTime.tz",t.toISOString()):String(t),c.push(Ke(Be(e),t,{"dt:dt":r}))}}),"<"+l+' xmlns="'+qe.o+'">'+c.join("")+"</"+l+">")),f.join("")}function Ml(e){return Ke("NamedRange",null,{"ss:Name":e.Name,"ss:RefersTo":"="+hi(e.Ref,{r:0,c:0})})}function Ul(e,t,r,n,a,s,i){if(!e||null==e.v&&null==e.f)return""
var o={}
if(e.f&&(o["ss:Formula"]="="+_e(hi(e.f,i))),e.F&&e.F.slice(0,t.length)==t){var l=jt(e.F.slice(t.length+1))
o["ss:ArrayRange"]="RC:R"+(l.r==i.r?"":"["+(l.r-i.r)+"]")+"C"+(l.c==i.c?"":"["+(l.c-i.c)+"]")}if(e.l&&e.l.Target&&(o["ss:HRef"]=_e(e.l.Target),e.l.Tooltip&&(o["x:HRefScreenTip"]=_e(e.l.Tooltip))),r["!merges"])for(var c=r["!merges"],f=0;f!=c.length;++f)c[f].s.c==i.c&&c[f].s.r==i.r&&(c[f].e.c>c[f].s.c&&(o["ss:MergeAcross"]=c[f].e.c-c[f].s.c),c[f].e.r>c[f].s.r&&(o["ss:MergeDown"]=c[f].e.r-c[f].s.r))
var h="",u=""
switch(e.t){case"z":return""
case"n":h="Number",u=String(e.v)
break
case"b":h="Boolean",u=e.v?"1":"0"
break
case"e":h="Error",u=Ar[e.v]
break
case"d":h="DateTime",u=new Date(e.v).toISOString(),null==e.z&&(e.z=e.z||de._table[14])
break
case"s":h="String",u=((e.v||"")+"").replace(Se,function(e){return Ce[e]}).replace(Te,function(e){return"&#x"+e.charCodeAt(0).toString(16).toUpperCase()+";"})}var d=fo(n.cellXfs,e,n)
o["ss:StyleID"]="s"+(21+d),o["ss:Index"]=i.c+1
var p='<Data ss:Type="'+h+'">'+(null!=e.v?u:"")+"</Data>"
return 0<(e.c||[]).length&&(p+=e.c.map(function(e){return Ke("Comment",Ke("ss:Data",xe(e.t||""),{xmlns:"http://www.w3.org/TR/REC-html40"}),{"ss:Author":e.a})}).join("")),Ke("Cell",p,o)}function Hl(e,t,r){var n=[],a=r.SheetNames[e],s=r.Sheets[a],i=s?function(e,t,r,n){if(!e)return""
if(!((n||{}).Workbook||{}).Names)return""
for(var a=n.Workbook.Names,s=[],i=0;i<a.length;++i){var o=a[i]
o.Sheet==r&&(o.Name.match(/^_xlfn\./)||s.push(Ml(o)))}return s.join("")}(s,0,e,r):""
return 0<i.length&&n.push("<Names>"+i+"</Names>"),0<(i=s?function(e,t,r,n){if(!e["!ref"])return""
var a=Zt(e["!ref"]),s=e["!merges"]||[],i=0,o=[]
e["!cols"]&&e["!cols"].forEach(function(e,t){bs(e)
var r=!!e.width,n=lo(t,e),a={"ss:Index":t+1}
r&&(a["ss:Width"]=us(n.width)),e.hidden&&(a["ss:Hidden"]="1"),o.push(Ke("Column",null,a))})
for(var l,c,f,h=Array.isArray(e),u=a.s.r;u<=a.e.r;++u){for(var d=[(l=u,c=(e["!rows"]||[])[u],f=void 0,f='<Row ss:Index="'+(l+1)+'"',c&&(c.hpt&&!c.hpx&&(c.hpx=Cs(c.hpt)),c.hpx&&(f+=' ss:AutoFitHeight="0" ss:Height="'+c.hpx+'"'),c.hidden&&(f+=' ss:Hidden="1"')),f+">")],p=a.s.c;p<=a.e.c;++p){var g=!1
for(i=0;i!=s.length;++i)if(!(s[i].s.c>p||s[i].s.r>u||s[i].e.c<p||s[i].e.r<u)){s[i].s.c==p&&s[i].s.r==u||(g=!0)
break}if(!g){var m={r:u,c:p},b=Yt(m),v=h?(e[u]||[])[p]:e[b]
d.push(Ul(v,b,e,t,0,0,m))}}d.push("</Row>"),2<d.length&&o.push(d.join(""))}return o.join("")}(s,t):"").length&&n.push("<Table>"+i+"</Table>"),n.push(function(t,e,r,n){if(!t)return""
var a=[]
if(t["!margins"]&&(a.push("<PageSetup>"),t["!margins"].header&&a.push(Ke("Header",null,{"x:Margin":t["!margins"].header})),t["!margins"].footer&&a.push(Ke("Footer",null,{"x:Margin":t["!margins"].footer})),a.push(Ke("PageMargins",null,{"x:Bottom":t["!margins"].bottom||"0.75","x:Left":t["!margins"].left||"0.7","x:Right":t["!margins"].right||"0.7","x:Top":t["!margins"].top||"0.75"})),a.push("</PageSetup>")),n&&n.Workbook&&n.Workbook.Sheets&&n.Workbook.Sheets[r])if(n.Workbook.Sheets[r].Hidden)a.push(Ke("Visible",1==n.Workbook.Sheets[r].Hidden?"SheetHidden":"SheetVeryHidden",{}))
else{for(var s=0;s<r&&(!n.Workbook.Sheets[s]||n.Workbook.Sheets[s].Hidden);++s);s==r&&a.push("<Selected/>")}return((((n||{}).Workbook||{}).Views||[])[0]||{}).RTL&&a.push("<DisplayRightToLeft/>"),t["!protect"]&&(a.push(je("ProtectContents","True")),t["!protect"].objects&&a.push(je("ProtectObjects","True")),t["!protect"].scenarios&&a.push(je("ProtectScenarios","True")),null==t["!protect"].selectLockedCells||t["!protect"].selectLockedCells?null==t["!protect"].selectUnlockedCells||t["!protect"].selectUnlockedCells||a.push(je("EnableSelection","UnlockedCells")):a.push(je("EnableSelection","NoSelection")),[["formatCells","AllowFormatCells"],["formatColumns","AllowSizeCols"],["formatRows","AllowSizeRows"],["insertColumns","AllowInsertCols"],["insertRows","AllowInsertRows"],["insertHyperlinks","AllowInsertHyperlinks"],["deleteColumns","AllowDeleteCols"],["deleteRows","AllowDeleteRows"],["sort","AllowSort"],["autoFilter","AllowFilter"],["pivotTables","AllowUsePivotTables"]].forEach(function(e){t["!protect"][e[0]]&&a.push("<"+e[1]+"/>")})),0==a.length?"":Ke("WorksheetOptions",a.join(""),{xmlns:qe.x})}(s,0,e,r)),n.join("")}function Wl(e,t){t||(t={}),e.SSF||(e.SSF=de.get_table()),e.SSF&&(ce(de),de.load_table(e.SSF),t.revssf=A(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF,t.cellXfs=[],fo(t.cellXfs,{},{revssf:{General:0}}))
var n,r=[]
r.push(Ll(e,t)),r.push(""),r.push(""),r.push("")
for(var a=0;a<e.SheetNames.length;++a)r.push(Ke("Worksheet",Hl(a,t,e),{"ss:Name":_e(e.SheetNames[a])}))
return r[2]=(n=['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'],t.cellXfs.forEach(function(e,t){var r=[]
r.push(Ke("NumberFormat",null,{"ss:Format":_e(de._table[e.numFmtId])})),n.push(Ke("Style",r.join(""),{"ss:ID":"s"+(21+t)}))}),Ke("Styles",n.join(""))),r[3]=function(e){if(!((e||{}).Workbook||{}).Names)return""
for(var t=e.Workbook.Names,r=[],n=0;n<t.length;++n){var a=t[n]
null==a.Sheet&&(a.Name.match(/^_xlfn\./)||r.push(Ml(a)))}return Ke("Names",r.join(""))}(e),W+Ke("Workbook",r.join(""),{xmlns:qe.ss,"xmlns:o":qe.o,"xmlns:x":qe.x,"xmlns:ss":qe.ss,"xmlns:dt":qe.dt,"xmlns:html":qe.html})}function Vl(e){var t={},r=e.content
if(r.l=28,t.AnsiUserType=r.read_shift(0,"lpstr-ansi"),t.AnsiClipboardFormat=Tr(r,1),r.length-r.l<=4)return t
var n=r.read_shift(4)
return 0==n||40<n?t:(r.l-=4,t.Reserved1=r.read_shift(0,"lpstr-ansi"),r.length-r.l<=4?t:1907505652!==(n=r.read_shift(4))?t:(t.UnicodeClipboardFormat=Tr(r,2),0==(n=r.read_shift(4))||40<n?t:(r.l-=4,void(t.Reserved2=r.read_shift(0,"lpwstr")))))}function zl(e,t,r,n){var a=r,s=[],i=t.slice(t.l,t.l+a)
if(n&&n.enc&&n.enc.insitu)switch(e.n){case"BOF":case"FilePass":case"FileLock":case"InterfaceHdr":case"RRDInfo":case"RRDHead":case"UsrExcl":break
default:if(0===i.length)break
n.enc.insitu(i)}s.push(i),t.l+=a
for(var o=Jl[Ct(t,t.l)],l=0;null!=o&&"Continue"===o.n.slice(0,8);)a=Ct(t,t.l+2),l=t.l+4,"ContinueFrt"==o.n?l+=4:"ContinueFrt"==o.n.slice(0,11)&&(l+=12),s.push(t.slice(l,t.l+4+a)),t.l+=4+a,o=Jl[Ct(t,t.l)]
var c=ie(s)
Rt(c,0)
var f=0
c.lens=[]
for(var h=0;h<s.length;++h)c.lens.push(f),f+=s[h].length
return e.f(c,c.length,n)}function Xl(e,t,r){if("z"!==e.t&&e.XF){var n=0
try{n=e.z||e.XF.numFmtId||0,t.cellNF&&(e.z=de._table[n])}catch(e){if(t.WTF)throw e}if(!t||!1!==t.cellText)try{"e"===e.t?e.w=e.w||Ar[e.v]:0===n||"General"==n?"n"===e.t?(0|e.v)===e.v?e.w=de._general_int(e.v):e.w=de._general_num(e.v):e.w=de._general(e.v):e.w=de.format(n,e.v,{date1904:!!r})}catch(e){if(t.WTF)throw e}if(t.cellDates&&n&&"n"==e.t&&de.is_date(de._table[n]||String(n))){var a=de.parse_date_code(e.v)
a&&(e.t="d",e.v=new Date(a.y,a.m-1,a.d,a.H,a.M,a.S,a.u))}}}function Gl(e,t,r){return{v:e,ixfe:t,t:r}}function jl(e,t){var r={opts:{}},n={}
null!=ue&&null==t.dense&&(t.dense=ue)
var l,a,s,i,o,c,f,h,u=t.dense?[]:{},d={},p={},g=null,m=[],b="",v={},w="",C={},E=[],S=!0,A=[],_=[],B={Sheets:[],WBProps:{date1904:!1},Views:[{}]},T={},y=function(e){return e<8?Hr[e]:e<64&&_[e-8]||Hr[e]},k=function(e,t,r){if(!(1<M)&&(r.sheetRows&&e.r>=r.sheetRows&&(S=!1),S)){var n,a,s,i
if(r.cellStyles&&t.XF&&t.XF.data&&(a=r,(i=(n=t).XF.data)&&i.patternType&&a&&a.cellStyles&&(n.s={},n.s.patternType=i.patternType,(s=is(y(i.icvFore)))&&(n.s.fgColor={rgb:s}),(s=is(y(i.icvBack)))&&(n.s.bgColor={rgb:s}))),delete t.ixfe,delete t.XF,w=Yt(l=e),p&&p.s&&p.e||(p={s:{r:0,c:0},e:{r:0,c:0}}),e.r<p.s.r&&(p.s.r=e.r),e.c<p.s.c&&(p.s.c=e.c),e.r+1>p.e.r&&(p.e.r=e.r+1),e.c+1>p.e.c&&(p.e.c=e.c+1),r.cellFormula&&t.f)for(var o=0;o<E.length;++o)if(!(E[o][0].s.c>e.c||E[o][0].s.r>e.r||E[o][0].e.c<e.c||E[o][0].e.r<e.r)){t.F=$t(E[o][0]),E[o][0].s.c==e.c&&E[o][0].s.r==e.r||delete t.f,t.f&&(t.f=""+Gi(E[o][1],0,e,P,x))
break}r.dense?(u[e.r]||(u[e.r]=[]),u[e.r][e.c]=t):u[w]=t}},x={enc:!1,sbcch:0,snames:[],sharedf:C,arrayf:E,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!t&&!!t.cellStyles,WTF:!!t&&!!t.wtf}
t.password&&(x.password=t.password)
var I=[],R=[],O=[],D=[],F=!1,P=[]
P.SheetNames=x.snames,P.sharedf=x.sharedf,P.arrayf=x.arrayf,P.names=[],P.XTI=[]
var N,L="",M=0,U=0,H=[],W=[]
x.codepage=1200,he(1200)
for(var V=!1;e.l<e.length-1;){var z=e.l,X=e.read_shift(2)
if(0===X&&"EOF"===L)break
var G=e.l===e.length?0:e.read_shift(2),j=Jl[X]
if(j&&j.f){if(t.bookSheets&&"BoundSheet8"===L&&"BoundSheet8"!==j.n)break
if(L=j.n,2===j.r||12==j.r){var Y=e.read_shift(2)
if(G-=2,!x.enc&&Y!==X&&((255&Y)<<8|Y>>8)!==X)throw new Error("rt mismatch: "+Y+"!="+X)
12==j.r&&(e.l+=10,G-=10)}var K
K="EOF"===j.n?j.f(e,G,x):zl(j,e,G,x)
var $=j.n
if(0==M&&"BOF"!=$)continue
switch($){case"Date1904":r.opts.Date1904=B.WBProps.date1904=K
break
case"WriteProtect":r.opts.WriteProtect=!0
break
case"FilePass":if(x.enc||(e.l=0),x.enc=K,!t.password)throw new Error("File is password-protected")
if(null==K.valid)throw new Error("Encryption scheme unsupported")
if(!K.valid)throw new Error("Password is incorrect")
break
case"WriteAccess":x.lastuser=K
break
case"FileSharing":break
case"CodePage":switch(K){case 21010:K=1200
break
case 32768:K=1e4
break
case 32769:K=1252}he(x.codepage=K),V=!0
break
case"RRTabId":x.rrtabid=K
break
case"WinProtect":x.winlocked=K
break
case"Template":case"BookBool":case"UsesELFs":case"MTRSettings":break
case"RefreshAll":case"CalcCount":case"CalcDelta":case"CalcIter":case"CalcMode":case"CalcPrecision":case"CalcSaveRecalc":r.opts[$]=K
break
case"CalcRefMode":x.CalcRefMode=K
break
case"Uncalced":break
case"ForceFullCalculation":r.opts.FullCalc=K
break
case"WsBool":K.fDialog&&(u["!type"]="dialog")
break
case"XF":A.push(K)
break
case"ExtSST":case"BookExt":case"RichTextStream":case"BkHim":break
case"SupBook":P.push([K]),P[P.length-1].XTI=[]
break
case"ExternName":P[P.length-1].push(K)
break
case"Index":break
case"Lbl":N={Name:K.Name,Ref:Gi(K.rgce,0,null,P,x)},0<K.itab&&(N.Sheet=K.itab-1),P.names.push(N),P[0]||(P[0]=[],P[0].XTI=[]),P[P.length-1].push(K),"_xlnm._FilterDatabase"==K.Name&&0<K.itab&&K.rgce&&K.rgce[0]&&K.rgce[0][0]&&"PtgArea3d"==K.rgce[0][0][0]&&(W[K.itab-1]={ref:$t(K.rgce[0][0][1][2])})
break
case"ExternCount":x.ExternCount=K
break
case"ExternSheet":0==P.length&&(P[0]=[],P[0].XTI=[]),P[P.length-1].XTI=P[P.length-1].XTI.concat(K),P.XTI=P.XTI.concat(K)
break
case"NameCmt":if(x.biff<8)break
null!=N&&(N.Comment=K[1])
break
case"Protect":u["!protect"]=K
break
case"Password":0!==K&&x.WTF&&console.error("Password verifier: "+K)
break
case"Prot4Rev":case"Prot4RevPass":break
case"BoundSheet8":d[K.pos]=K,x.snames.push(K.name)
break
case"EOF":if(--M)break
if(p.e){if(0<p.e.r&&0<p.e.c){if(p.e.r--,p.e.c--,u["!ref"]=$t(p),t.sheetRows&&t.sheetRows<=p.e.r){var Z=p.e.r
p.e.r=t.sheetRows-1,u["!fullref"]=u["!ref"],u["!ref"]=$t(p),p.e.r=Z}p.e.r++,p.e.c++}0<I.length&&(u["!merges"]=I),0<R.length&&(u["!objects"]=R),0<O.length&&(u["!cols"]=O),0<D.length&&(u["!rows"]=D),B.Sheets.push(T)}""===b?v=u:n[b]=u,u=t.dense?[]:{}
break
case"BOF":if(8===x.biff&&(x.biff={9:2,521:3,1033:4}[X]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[K.BIFFVer]||8),8==x.biff&&0==K.BIFFVer&&16==K.dt&&(x.biff=2),M++)break
if(S=!0,u=t.dense?[]:{},x.biff<8&&!V&&(V=!0,he(x.codepage=t.codepage||1252)),x.biff<5){""===b&&(b="Sheet1"),p={s:{r:0,c:0},e:{r:0,c:0}}
var Q={pos:e.l-G,name:b}
d[Q.pos]=Q,x.snames.push(b)}else b=(d[z]||{name:""}).name
32==K.dt&&(u["!type"]="chart"),64==K.dt&&(u["!type"]="macro"),I=[],R=[],x.arrayf=E=[],O=[],F=!(D=[]),T={Hidden:(d[z]||{hs:0}).hs,name:b}
break
case"Number":case"BIFF2NUM":case"BIFF2INT":"chart"==u["!type"]&&(t.dense?(u[K.r]||[])[K.c]:u[Yt({c:K.c,r:K.r})])&&++K.c,c={ixfe:K.ixfe,XF:A[K.ixfe]||{},v:K.val,t:"n"},0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:K.c,r:K.r},c,t)
break
case"BoolErr":c={ixfe:K.ixfe,XF:A[K.ixfe],v:K.val,t:K.t},0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:K.c,r:K.r},c,t)
break
case"RK":c={ixfe:K.ixfe,XF:A[K.ixfe],v:K.rknum,t:"n"},0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:K.c,r:K.r},c,t)
break
case"MulRk":for(var J=K.c;J<=K.C;++J){var q=K.rkrec[J-K.c][0]
c={ixfe:q,XF:A[q],v:K.rkrec[J-K.c][1],t:"n"},0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:J,r:K.r},c,t)}break
case"Formula":if("String"==K.val){g=K
break}if((c=Gl(K.val,K.cell.ixfe,K.tt)).XF=A[c.ixfe],t.cellFormula){var ee=K.formula
if(ee&&ee[0]&&ee[0][0]&&"PtgExp"==ee[0][0][0]){var te=ee[0][0][1][0],re=ee[0][0][1][1],ne=Yt({r:te,c:re})
C[ne]?c.f=""+Gi(K.formula,0,K.cell,P,x):c.F=((t.dense?(u[te]||[])[re]:u[ne])||{}).F}else c.f=""+Gi(K.formula,0,K.cell,P,x)}0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k(K.cell,c,t),g=K
break
case"String":if(!g)throw new Error("String record expects Formula");(c=Gl(g.val=K,g.cell.ixfe,"s")).XF=A[c.ixfe],t.cellFormula&&(c.f=""+Gi(g.formula,0,g.cell,P,x)),0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k(g.cell,c,t),g=null
break
case"Array":E.push(K)
var ae=Yt(K[0].s)
if(a=t.dense?(u[K[0].s.r]||[])[K[0].s.c]:u[ae],t.cellFormula&&a){if(!g)break
if(!ae||!a)break
a.f=""+Gi(K[1],0,K[0],P,x),a.F=$t(K[0])}break
case"ShrFmla":if(!S)break
if(!t.cellFormula)break
if(w){if(!g)break
C[Yt(g.cell)]=K[0],((a=t.dense?(u[g.cell.r]||[])[g.cell.c]:u[Yt(g.cell)])||{}).f=""+Gi(K[0],0,l,P,x)}break
case"LabelSst":(c=Gl(m[K.isst].t,K.ixfe,"s")).XF=A[c.ixfe],0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:K.c,r:K.r},c,t)
break
case"Blank":t.sheetStubs&&(c={ixfe:K.ixfe,XF:A[K.ixfe],t:"z"},0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:K.c,r:K.r},c,t))
break
case"MulBlank":if(t.sheetStubs)for(var se=K.c;se<=K.C;++se){var ie=K.ixfe[se-K.c]
c={ixfe:ie,XF:A[ie],t:"z"},0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:se,r:K.r},c,t)}break
case"RString":case"Label":case"BIFF2STR":(c=Gl(K.val,K.ixfe,"s")).XF=A[c.ixfe],0<U&&(c.z=H[c.ixfe>>8&31]),Xl(c,t,r.opts.Date1904),k({c:K.c,r:K.r},c,t)
break
case"Dimensions":1===M&&(p=K)
break
case"SST":m=K
break
case"Format":if(4==x.biff){H[U++]=K[1]
for(var oe=0;oe<U+163&&de._table[oe]!=K[1];++oe);163<=oe&&de.load(K[1],U+163)}else de.load(K[1],K[0])
break
case"BIFF2FORMAT":H[U++]=K
for(var le=0;le<U+163&&de._table[le]!=K;++le);163<=le&&de.load(K,U+163)
break
case"MergeCells":I=I.concat(K)
break
case"Obj":R[K.cmo[0]]=x.lastobj=K
break
case"TxO":x.lastobj.TxO=K
break
case"ImData":x.lastobj.ImData=K
break
case"HLink":for(o=K[0].s.r;o<=K[0].e.r;++o)for(i=K[0].s.c;i<=K[0].e.c;++i)(a=t.dense?(u[o]||[])[i]:u[Yt({c:i,r:o})])&&(a.l=K[1])
break
case"HLinkTooltip":for(o=K[0].s.r;o<=K[0].e.r;++o)for(i=K[0].s.c;i<=K[0].e.c;++i)(a=t.dense?(u[o]||[])[i]:u[Yt({c:i,r:o})])&&a.l&&(a.l.Tooltip=K[1])
break
case"Note":if(x.biff<=5&&2<=x.biff)break
a=t.dense?(u[K[0].r]||[])[K[0].c]:u[Yt(K[0])]
var ce=R[K[2]]
if(!a)break
a.c||(a.c=[]),s={a:K[1],t:ce.TxO.t},a.c.push(s)
break
default:switch(j.n){case"ClrtClient":break
case"XFExt":A[K.ixfe],K.ext.forEach(function(e){e[0]})
break
case"DefColWidth":break
case"DefaultRowHeight":K[1]
break
case"ColInfo":if(!x.cellStyles)break
for(;K.e>=K.s;)O[K.e--]={width:K.w/256},F||(F=!0,ms(K.w/256)),bs(O[K.e+1])
break
case"Row":var fe={}
null!=K.level&&((D[K.r]=fe).level=K.level),K.hidden&&((D[K.r]=fe).hidden=!0),K.hpt&&((D[K.r]=fe).hpt=K.hpt,fe.hpx=Cs(K.hpt))
break
case"LeftMargin":case"RightMargin":case"TopMargin":case"BottomMargin":u["!margins"]||co(u["!margins"]={}),u["!margins"][$.slice(0,-6).toLowerCase()]=K
break
case"Setup":u["!margins"]||co(u["!margins"]={}),u["!margins"].header=K.header,u["!margins"].footer=K.footer
break
case"Window2":K.RTL&&(B.Views[0].RTL=!0)
break
case"Header":case"Footer":case"HCenter":case"VCenter":case"Pls":case"GCW":case"LHRecord":case"DBCell":case"EntExU2":case"SxView":case"Sxvd":case"SXVI":case"SXVDEx":case"SxIvd":case"SXString":case"Sync":case"Addin":case"SXDI":case"SXLI":case"SXEx":case"QsiSXTag":case"Selection":case"Feat":break
case"FeatHdr":case"FeatHdr11":break
case"Feature11":case"Feature12":case"List12":break
case"Country":f=K
break
case"RecalcId":case"DxGCol":break
case"Fbi":case"Fbi2":case"GelFrame":case"Font":case"XFCRC":case"Style":case"StyleExt":break
case"Palette":_=K
break
case"Theme":h=K
break
case"ScenarioProtect":case"ObjProtect":case"CondFmt12":case"Table":case"TableStyles":case"TableStyle":case"TableStyleElement":case"SXStreamID":case"SXVS":case"DConRef":case"SXAddl":case"DConBin":case"DConName":case"SXPI":case"SxFormat":case"SxSelect":case"SxRule":case"SxFilt":case"SxItm":case"SxDXF":case"ScenMan":case"DCon":case"CellWatch":case"PrintRowCol":case"PrintGrid":case"PrintSize":case"XCT":case"CRN":case"Scl":case"SheetExt":case"SheetExtOptional":case"ObNoMacros":case"ObProj":break
case"CodeName":b?T.CodeName=K||T.name:B.WBProps.CodeName=K||"ThisWorkbook"
break
case"GUIDTypeLib":case"WOpt":case"PhoneticInfo":case"OleObjectSize":break
case"DXF":case"DXFN":case"DXFN12":case"DXFN12List":case"DXFN12NoCB":break
case"Dv":case"DVal":break
case"BRAI":case"Series":case"SeriesText":case"DConn":case"DbOrParamQry":case"DBQueryExt":case"OleDbConn":case"ExtString":case"IFmtRecord":break
case"CondFmt":case"CF":case"CF12":case"CFEx":case"Excel9File":case"Units":break
case"InterfaceHdr":case"Mms":case"InterfaceEnd":case"DSF":case"BuiltInFnGroupCount":break
case"Window1":case"HideObj":case"GridSet":case"Guts":case"UserBView":case"UserSViewBegin":case"UserSViewEnd":case"Pane":break
default:switch(j.n){case"Dat":case"Begin":case"End":case"StartBlock":case"EndBlock":case"Frame":case"Area":case"Axis":case"AxisLine":case"Tick":break
case"AxesUsed":case"CrtLayout12":case"CrtLayout12A":case"CrtLink":case"CrtLine":case"CrtMlFrt":case"CrtMlFrtContinue":break
case"LineFormat":case"AreaFormat":case"Chart":case"Chart3d":case"Chart3DBarShape":case"ChartFormat":case"ChartFrtInfo":break
case"PlotArea":case"PlotGrowth":break
case"SeriesList":case"SerParent":case"SerAuxTrend":break
case"DataFormat":case"SerToCrt":case"FontX":break
case"CatSerRange":case"AxcExt":case"SerFmt":case"ShtProps":break
case"DefaultText":case"Text":case"CatLab":case"DataLabExtContents":break
case"Legend":case"LegendException":break
case"Pie":case"Scatter":break
case"PieFormat":case"MarkerFormat":break
case"StartObject":case"EndObject":break
case"AlRuns":case"ObjectLink":case"SIIndex":break
case"AttachedLabel":case"YMult":break
case"Line":case"Bar":case"Surf":case"AxisParent":case"Pos":case"ValueRange":case"SXViewEx9":case"SXViewLink":case"PivotChartBits":case"SBaseRef":case"TextPropsStream":case"LnExt":case"MkrExt":case"CrtCoopt":break
case"Qsi":case"Qsif":case"Qsir":case"QsiSXTag":case"TxtQry":case"FilterMode":break
case"AutoFilter":case"AutoFilterInfo":case"AutoFilter12":case"DropDownObjIds":case"Sort":case"SortData":case"ShapePropsStream":break
case"MsoDrawing":case"MsoDrawingGroup":case"MsoDrawingSelection":break
case"WebPub":case"AutoWebPub":break
case"HeaderFooter":case"HFPicture":case"PLV":case"HorizontalPageBreaks":case"VerticalPageBreaks":break
case"Backup":case"CompressPictures":case"Compat12":break
case"Continue":case"ContinueFrt12":break
case"FrtFontList":case"FrtWrapper":break
default:switch(j.n){case"TabIdConf":case"Radar":case"RadarArea":case"DropBar":case"Intl":case"CoordList":case"SerAuxErrBar":break
case"BIFF2FONTCLR":case"BIFF2FMTCNT":case"BIFF2FONTXTRA":break
case"BIFF2XF":case"BIFF3XF":case"BIFF4XF":break
case"BIFF4FMTCNT":case"BIFF2ROW":case"BIFF2WINDOW2":break
case"SCENARIO":case"DConBin":case"PicF":case"DataLabExt":case"Lel":case"BopPop":case"BopPopCustom":case"RealTimeData":case"Name":break
case"LHNGraph":case"FnGroupName":case"AddMenu":case"LPr":break
case"ListObj":case"ListField":case"RRSort":case"BigName":break
case"ToolbarHdr":case"ToolbarEnd":case"DDEObjName":case"FRTArchId$":break
default:if(t.WTF)throw"Unrecognized Record "+j.n}}}}}else e.l+=G}return r.SheetNames=me(d).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return d[e].name}),t.bookSheets||(r.Sheets=n),r.Sheets&&W.forEach(function(e,t){r.Sheets[r.SheetNames[t]]["!autofilter"]=e}),r.Preamble=v,r.Strings=m,r.SSF=de.get_table(),x.enc&&(r.Encryption=x.enc),h&&(r.Themes=h),r.Metadata={},void 0!==f&&(r.Metadata.Country=f),0<P.names.length&&(B.Names=P.names),r.Workbook=B,r}var Yl={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"}
function Kl(e,t){var r,n,a,s,i,o
if(t||(t={}),Dc(t),d(),t.codepage&&h(t.codepage),e.FullPaths){if(ge.find(e,"/encryption"))throw new Error("File is password-protected")
r=ge.find(e,"!CompObj"),n=ge.find(e,"/Workbook")||ge.find(e,"/Book")}else{switch(t.type){case"base64":e=se(q.decode(e))
break
case"binary":e=se(e)
break
case"buffer":break
case"array":Array.isArray(e)||(e=Array.prototype.slice.call(e))}Rt(e,0),n={content:e}}if(r&&Vl(r),t.bookProps&&!t.bookSheets)a={}
else{var l=ee?"buffer":"array"
if(n&&n.content)a=jl(n.content,t)
else if((s=ge.find(e,"PerfectOffice_MAIN"))&&s.content)a=Oa.to_workbook(s.content,(t.type=l,t))
else{if(!(s=ge.find(e,"NativeContent_MAIN"))||!s.content)throw new Error("Cannot find Workbook stream")
a=Oa.to_workbook(s.content,(t.type=l,t))}t.bookVBA&&e.FullPaths&&ge.find(e,"/_VBA_PROJECT_CUR/VBA/dir")&&(a.vbaraw=(i=e,o=ge.utils.cfb_new({root:"R"}),i.FullPaths.forEach(function(e,t){if("/"!==e.slice(-1)&&e.match(/_VBA_PROJECT_CUR/)){var r=e.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"")
ge.utils.cfb_add(o,r,i.FileIndex[t].content)}}),ge.write(o)))}var c={}
return e.FullPaths&&function(e,t,r){var n=ge.find(e,"!DocumentSummaryInformation")
if(n&&0<n.size)try{var a=In(n,Or,Yl.DSI)
for(var s in a)t[s]=a[s]}catch(e){if(r.WTF)throw e}var i=ge.find(e,"!SummaryInformation")
if(i&&0<i.size)try{var o=In(i,Dr,Yl.SI)
for(var l in o)null==t[l]&&(t[l]=o[l])}catch(e){if(r.WTF)throw e}t.HeadingPairs&&t.TitlesOfParts&&(cn(t.HeadingPairs,t.TitlesOfParts,t,r),delete t.HeadingPairs,delete t.TitlesOfParts)}(e,c,t),a.Props=a.Custprops=c,t.bookFiles&&(a.cfb=e),a}function $l(e,t){var n,a,r=t||{},s=ge.utils.cfb_new({root:"R"}),i="/Workbook"
switch(r.bookType||"xls"){case"xls":r.bookType="biff8"
case"xla":r.bookType||(r.bookType="xla")
case"biff8":i="/Workbook",r.biff=8
break
case"biff5":i="/Book",r.biff=5
break
default:throw new Error("invalid type "+r.bookType+" for XLS CFB")}return ge.utils.cfb_add(s,i,lc(e,r)),8==r.biff&&(e.Props||e.Custprops)&&function(e,t){var r,n=[],a=[],s=[],i=0
if(e.Props)for(r=me(e.Props),i=0;i<r.length;++i)(Nr.hasOwnProperty(r[i])?n:Lr.hasOwnProperty(r[i])?a:s).push([r[i],e.Props[r[i]]])
if(e.Custprops)for(r=me(e.Custprops),i=0;i<r.length;++i)(e.Props||{}).hasOwnProperty(r[i])||(Nr.hasOwnProperty(r[i])?n:Lr.hasOwnProperty(r[i])?a:s).push([r[i],e.Custprops[r[i]]])
var o=[]
for(i=0;i<s.length;++i)-1<yn.indexOf(s[i][0])||null!=s[i][1]&&o.push(s[i])
a.length&&ge.utils.cfb_add(t,"/SummaryInformation",Rn(a,Yl.SI,Lr,Dr)),(n.length||o.length)&&ge.utils.cfb_add(t,"/DocumentSummaryInformation",Rn(n,Yl.DSI,Nr,Or,o.length?o:null,Yl.UDI))}(e,s),8==r.biff&&e.vbaraw&&(n=s,(a=ge.read(e.vbaraw,{type:"string"==typeof e.vbaraw?"binary":"buffer"})).FullPaths.forEach(function(e,t){if(0!=t){var r=e.replace(/[^\/]*[\/]/,"/_VBA_PROJECT_CUR/")
"/"!==r.slice(-1)&&ge.utils.cfb_add(n,r,a.FileIndex[t].content)}})),s}var Zl={0:{n:"BrtRowHdr",f:function(e,t){var r={},n=e.l+t
r.r=e.read_shift(4),e.l+=4
var a=e.read_shift(2)
e.l+=1
var s=e.read_shift(1)
return e.l=n,7&s&&(r.level=7&s),16&s&&(r.hidden=!0),32&s&&(r.hpt=a/20),r}},1:{n:"BrtCellBlank",f:function(e){return[lr(e)]}},2:{n:"BrtCellRk",f:function(e){return[lr(e),br(e),"n"]}},3:{n:"BrtCellError",f:function(e){return[lr(e),e.read_shift(1),"e"]}},4:{n:"BrtCellBool",f:function(e){return[lr(e),e.read_shift(1),"b"]}},5:{n:"BrtCellReal",f:function(e){return[lr(e),Er(e),"n"]}},6:{n:"BrtCellSt",f:function(e){return[lr(e),nr(e),"str"]}},7:{n:"BrtCellIsst",f:function(e){return[lr(e),e.read_shift(4),"s"]}},8:{n:"BrtFmlaString",f:function(e,t,r){var n=e.l+t,a=lr(e)
a.r=r["!row"]
var s=[a,nr(e),"str"]
if(r.cellFormula){e.l+=2
var i=$i(e,n-e.l,r)
s[3]=Gi(i,0,a,r.supbooks,r)}else e.l=n
return s}},9:{n:"BrtFmlaNum",f:function(e,t,r){var n=e.l+t,a=lr(e)
a.r=r["!row"]
var s=[a,Er(e),"n"]
if(r.cellFormula){e.l+=2
var i=$i(e,n-e.l,r)
s[3]=Gi(i,0,a,r.supbooks,r)}else e.l=n
return s}},10:{n:"BrtFmlaBool",f:function(e,t,r){var n=e.l+t,a=lr(e)
a.r=r["!row"]
var s=[a,e.read_shift(1),"b"]
if(r.cellFormula){e.l+=2
var i=$i(e,n-e.l,r)
s[3]=Gi(i,0,a,r.supbooks,r)}else e.l=n
return s}},11:{n:"BrtFmlaError",f:function(e,t,r){var n=e.l+t,a=lr(e)
a.r=r["!row"]
var s=[a,e.read_shift(1),"e"]
if(r.cellFormula){e.l+=2
var i=$i(e,n-e.l,r)
s[3]=Gi(i,0,a,r.supbooks,r)}else e.l=n
return s}},16:{n:"BrtFRTArchID$",f:function(e,t){var r={}
return e.read_shift(4),r.ArchID=e.read_shift(4),e.l+=t-8,r}},19:{n:"BrtSSTItem",f:sr},20:{n:"BrtPCDIMissing"},21:{n:"BrtPCDINumber"},22:{n:"BrtPCDIBoolean"},23:{n:"BrtPCDIError"},24:{n:"BrtPCDIString"},25:{n:"BrtPCDIDatetime"},26:{n:"BrtPCDIIndex"},27:{n:"BrtPCDIAMissing"},28:{n:"BrtPCDIANumber"},29:{n:"BrtPCDIABoolean"},30:{n:"BrtPCDIAError"},31:{n:"BrtPCDIAString"},32:{n:"BrtPCDIADatetime"},33:{n:"BrtPCRRecord"},34:{n:"BrtPCRRecordDt"},35:{n:"BrtFRTBegin"},36:{n:"BrtFRTEnd"},37:{n:"BrtACBegin"},38:{n:"BrtACEnd"},39:{n:"BrtName",f:function(e,t,r){var n=e.l+t
e.l+=4,e.l+=1
var a=e.read_shift(4),s=pr(e),i=Zi(e,0,r),o=ur(e)
e.l=n
var l={Name:s,Ptg:i}
return a<268435455&&(l.Sheet=a),o&&(l.Comment=o),l}},40:{n:"BrtIndexRowBlock"},42:{n:"BrtIndexBlock"},43:{n:"BrtFont",f:function(e,t,r){var n={}
n.sz=e.read_shift(2)/20
var a,s,i=(s=(a=e).read_shift(1),a.l++,{fItalic:2&s,fStrikeout:8&s,fOutline:16&s,fShadow:32&s,fCondense:64&s,fExtend:128&s})
switch(i.fCondense&&(n.condense=1),i.fExtend&&(n.extend=1),i.fShadow&&(n.shadow=1),i.fOutline&&(n.outline=1),i.fStrikeout&&(n.strike=1),i.fItalic&&(n.italic=1),700===e.read_shift(2)&&(n.bold=1),e.read_shift(2)){case 1:n.vertAlign="superscript"
break
case 2:n.vertAlign="subscript"}var o=e.read_shift(1)
0!=o&&(n.underline=o)
var l=e.read_shift(1)
0<l&&(n.family=l)
var c=e.read_shift(1)
switch(0<c&&(n.charset=c),e.l++,n.color=function(e){var t={},r=e.read_shift(1)>>>1,n=e.read_shift(1),a=e.read_shift(2,"i"),s=e.read_shift(1),i=e.read_shift(1),o=e.read_shift(1)
switch(e.l++,r){case 0:t.auto=1
break
case 1:t.index=n
var l=Hr[n]
l&&(t.rgb=is(l))
break
case 2:t.rgb=is([s,i,o])
break
case 3:t.theme=n}return 0!=a&&(t.tint=0<a?a/32767:a/32768),t}(e),e.read_shift(1)){case 1:n.scheme="major"
break
case 2:n.scheme="minor"}return n.name=nr(e),n}},44:{n:"BrtFmt",f:function(e,t){return[e.read_shift(2),nr(e)]}},45:{n:"BrtFill",f:Ps},46:{n:"BrtBorder",f:Us},47:{n:"BrtXF",f:function(e,t){var r=e.l+t,n=e.read_shift(2),a=e.read_shift(2)
return e.l=r,{ixfe:n,numFmtId:a}}},48:{n:"BrtStyle"},49:{n:"BrtCellMeta"},50:{n:"BrtValueMeta"},51:{n:"BrtMdb"},52:{n:"BrtBeginFmd"},53:{n:"BrtEndFmd"},54:{n:"BrtBeginMdx"},55:{n:"BrtEndMdx"},56:{n:"BrtBeginMdxTuple"},57:{n:"BrtEndMdxTuple"},58:{n:"BrtMdxMbrIstr"},59:{n:"BrtStr"},60:{n:"BrtColInfo",f:Aa},62:{n:"BrtCellRString"},63:{n:"BrtCalcChainItem$",f:function(e){var t={}
t.i=e.read_shift(4)
var r={}
r.r=e.read_shift(4),r.c=e.read_shift(4),t.r=Yt(r)
var n=e.read_shift(1)
return 2&n&&(t.l="1"),8&n&&(t.a="1"),t}},64:{n:"BrtDVal"},65:{n:"BrtSxvcellNum"},66:{n:"BrtSxvcellStr"},67:{n:"BrtSxvcellBool"},68:{n:"BrtSxvcellErr"},69:{n:"BrtSxvcellDate"},70:{n:"BrtSxvcellNil"},128:{n:"BrtFileVersion"},129:{n:"BrtBeginSheet"},130:{n:"BrtEndSheet"},131:{n:"BrtBeginBook",f:Ot,p:0},132:{n:"BrtEndBook"},133:{n:"BrtBeginWsViews"},134:{n:"BrtEndWsViews"},135:{n:"BrtBeginBookViews"},136:{n:"BrtEndBookViews"},137:{n:"BrtBeginWsView",f:function(e){var t=e.read_shift(2)
return e.l+=28,{RTL:32&t}}},138:{n:"BrtEndWsView"},139:{n:"BrtBeginCsViews"},140:{n:"BrtEndCsViews"},141:{n:"BrtBeginCsView"},142:{n:"BrtEndCsView"},143:{n:"BrtBeginBundleShs"},144:{n:"BrtEndBundleShs"},145:{n:"BrtBeginSheetData"},146:{n:"BrtEndSheetData"},147:{n:"BrtWsProp",f:function(e,t){var r={}
return e.l+=19,r.name=fr(e,t-19),r}},148:{n:"BrtWsDim",f:Mo,p:16},151:{n:"BrtPane"},152:{n:"BrtSel"},153:{n:"BrtWbProp",f:function(e,t){var r={},n=e.read_shift(4)
r.defaultThemeVersion=e.read_shift(4)
var a=8<t?nr(e):""
return 0<a.length&&(r.CodeName=a),r.autoCompressPictures=!!(65536&n),r.backupFile=!!(64&n),r.checkCompatibility=!!(4096&n),r.date1904=!!(1&n),r.filterPrivacy=!!(8&n),r.hidePivotFieldList=!!(1024&n),r.promptedSolutions=!!(16&n),r.publishItems=!!(2048&n),r.refreshAllConnections=!!(262144&n),r.saveExternalLinkValues=!!(128&n),r.showBorderUnselectedTables=!!(4&n),r.showInkAnnotation=!!(32&n),r.showObjects=["all","placeholders","none"][n>>13&3],r.showPivotChartFilter=!!(32768&n),r.updateLinks=["userSet","never","always"][n>>8&3],r}},154:{n:"BrtWbFactoid"},155:{n:"BrtFileRecover"},156:{n:"BrtBundleSh",f:function(e,t){var r={}
return r.Hidden=e.read_shift(4),r.iTabID=e.read_shift(4),r.strRelID=gr(e,t-8),r.name=nr(e),r}},157:{n:"BrtCalcProp"},158:{n:"BrtBookView"},159:{n:"BrtBeginSst",f:function(e){return[e.read_shift(4),e.read_shift(4)]}},160:{n:"BrtEndSst"},161:{n:"BrtBeginAFilter",f:wr},162:{n:"BrtEndAFilter"},163:{n:"BrtBeginFilterColumn"},164:{n:"BrtEndFilterColumn"},165:{n:"BrtBeginFilters"},166:{n:"BrtEndFilters"},167:{n:"BrtFilter"},168:{n:"BrtColorFilter"},169:{n:"BrtIconFilter"},170:{n:"BrtTop10Filter"},171:{n:"BrtDynamicFilter"},172:{n:"BrtBeginCustomFilters"},173:{n:"BrtEndCustomFilters"},174:{n:"BrtCustomFilter"},175:{n:"BrtAFilterDateGroupItem"},176:{n:"BrtMergeCell",f:Wo},177:{n:"BrtBeginMergeCells"},178:{n:"BrtEndMergeCells"},179:{n:"BrtBeginPivotCacheDef"},180:{n:"BrtEndPivotCacheDef"},181:{n:"BrtBeginPCDFields"},182:{n:"BrtEndPCDFields"},183:{n:"BrtBeginPCDField"},184:{n:"BrtEndPCDField"},185:{n:"BrtBeginPCDSource"},186:{n:"BrtEndPCDSource"},187:{n:"BrtBeginPCDSRange"},188:{n:"BrtEndPCDSRange"},189:{n:"BrtBeginPCDFAtbl"},190:{n:"BrtEndPCDFAtbl"},191:{n:"BrtBeginPCDIRun"},192:{n:"BrtEndPCDIRun"},193:{n:"BrtBeginPivotCacheRecords"},194:{n:"BrtEndPivotCacheRecords"},195:{n:"BrtBeginPCDHierarchies"},196:{n:"BrtEndPCDHierarchies"},197:{n:"BrtBeginPCDHierarchy"},198:{n:"BrtEndPCDHierarchy"},199:{n:"BrtBeginPCDHFieldsUsage"},200:{n:"BrtEndPCDHFieldsUsage"},201:{n:"BrtBeginExtConnection"},202:{n:"BrtEndExtConnection"},203:{n:"BrtBeginECDbProps"},204:{n:"BrtEndECDbProps"},205:{n:"BrtBeginECOlapProps"},206:{n:"BrtEndECOlapProps"},207:{n:"BrtBeginPCDSConsol"},208:{n:"BrtEndPCDSConsol"},209:{n:"BrtBeginPCDSCPages"},210:{n:"BrtEndPCDSCPages"},211:{n:"BrtBeginPCDSCPage"},212:{n:"BrtEndPCDSCPage"},213:{n:"BrtBeginPCDSCPItem"},214:{n:"BrtEndPCDSCPItem"},215:{n:"BrtBeginPCDSCSets"},216:{n:"BrtEndPCDSCSets"},217:{n:"BrtBeginPCDSCSet"},218:{n:"BrtEndPCDSCSet"},219:{n:"BrtBeginPCDFGroup"},220:{n:"BrtEndPCDFGroup"},221:{n:"BrtBeginPCDFGItems"},222:{n:"BrtEndPCDFGItems"},223:{n:"BrtBeginPCDFGRange"},224:{n:"BrtEndPCDFGRange"},225:{n:"BrtBeginPCDFGDiscrete"},226:{n:"BrtEndPCDFGDiscrete"},227:{n:"BrtBeginPCDSDTupleCache"},228:{n:"BrtEndPCDSDTupleCache"},229:{n:"BrtBeginPCDSDTCEntries"},230:{n:"BrtEndPCDSDTCEntries"},231:{n:"BrtBeginPCDSDTCEMembers"},232:{n:"BrtEndPCDSDTCEMembers"},233:{n:"BrtBeginPCDSDTCEMember"},234:{n:"BrtEndPCDSDTCEMember"},235:{n:"BrtBeginPCDSDTCQueries"},236:{n:"BrtEndPCDSDTCQueries"},237:{n:"BrtBeginPCDSDTCQuery"},238:{n:"BrtEndPCDSDTCQuery"},239:{n:"BrtBeginPCDSDTCSets"},240:{n:"BrtEndPCDSDTCSets"},241:{n:"BrtBeginPCDSDTCSet"},242:{n:"BrtEndPCDSDTCSet"},243:{n:"BrtBeginPCDCalcItems"},244:{n:"BrtEndPCDCalcItems"},245:{n:"BrtBeginPCDCalcItem"},246:{n:"BrtEndPCDCalcItem"},247:{n:"BrtBeginPRule"},248:{n:"BrtEndPRule"},249:{n:"BrtBeginPRFilters"},250:{n:"BrtEndPRFilters"},251:{n:"BrtBeginPRFilter"},252:{n:"BrtEndPRFilter"},253:{n:"BrtBeginPNames"},254:{n:"BrtEndPNames"},255:{n:"BrtBeginPName"},256:{n:"BrtEndPName"},257:{n:"BrtBeginPNPairs"},258:{n:"BrtEndPNPairs"},259:{n:"BrtBeginPNPair"},260:{n:"BrtEndPNPair"},261:{n:"BrtBeginECWebProps"},262:{n:"BrtEndECWebProps"},263:{n:"BrtBeginEcWpTables"},264:{n:"BrtEndECWPTables"},265:{n:"BrtBeginECParams"},266:{n:"BrtEndECParams"},267:{n:"BrtBeginECParam"},268:{n:"BrtEndECParam"},269:{n:"BrtBeginPCDKPIs"},270:{n:"BrtEndPCDKPIs"},271:{n:"BrtBeginPCDKPI"},272:{n:"BrtEndPCDKPI"},273:{n:"BrtBeginDims"},274:{n:"BrtEndDims"},275:{n:"BrtBeginDim"},276:{n:"BrtEndDim"},277:{n:"BrtIndexPartEnd"},278:{n:"BrtBeginStyleSheet"},279:{n:"BrtEndStyleSheet"},280:{n:"BrtBeginSXView"},281:{n:"BrtEndSXVI"},282:{n:"BrtBeginSXVI"},283:{n:"BrtBeginSXVIs"},284:{n:"BrtEndSXVIs"},285:{n:"BrtBeginSXVD"},286:{n:"BrtEndSXVD"},287:{n:"BrtBeginSXVDs"},288:{n:"BrtEndSXVDs"},289:{n:"BrtBeginSXPI"},290:{n:"BrtEndSXPI"},291:{n:"BrtBeginSXPIs"},292:{n:"BrtEndSXPIs"},293:{n:"BrtBeginSXDI"},294:{n:"BrtEndSXDI"},295:{n:"BrtBeginSXDIs"},296:{n:"BrtEndSXDIs"},297:{n:"BrtBeginSXLI"},298:{n:"BrtEndSXLI"},299:{n:"BrtBeginSXLIRws"},300:{n:"BrtEndSXLIRws"},301:{n:"BrtBeginSXLICols"},302:{n:"BrtEndSXLICols"},303:{n:"BrtBeginSXFormat"},304:{n:"BrtEndSXFormat"},305:{n:"BrtBeginSXFormats"},306:{n:"BrtEndSxFormats"},307:{n:"BrtBeginSxSelect"},308:{n:"BrtEndSxSelect"},309:{n:"BrtBeginISXVDRws"},310:{n:"BrtEndISXVDRws"},311:{n:"BrtBeginISXVDCols"},312:{n:"BrtEndISXVDCols"},313:{n:"BrtEndSXLocation"},314:{n:"BrtBeginSXLocation"},315:{n:"BrtEndSXView"},316:{n:"BrtBeginSXTHs"},317:{n:"BrtEndSXTHs"},318:{n:"BrtBeginSXTH"},319:{n:"BrtEndSXTH"},320:{n:"BrtBeginISXTHRws"},321:{n:"BrtEndISXTHRws"},322:{n:"BrtBeginISXTHCols"},323:{n:"BrtEndISXTHCols"},324:{n:"BrtBeginSXTDMPS"},325:{n:"BrtEndSXTDMPs"},326:{n:"BrtBeginSXTDMP"},327:{n:"BrtEndSXTDMP"},328:{n:"BrtBeginSXTHItems"},329:{n:"BrtEndSXTHItems"},330:{n:"BrtBeginSXTHItem"},331:{n:"BrtEndSXTHItem"},332:{n:"BrtBeginMetadata"},333:{n:"BrtEndMetadata"},334:{n:"BrtBeginEsmdtinfo"},335:{n:"BrtMdtinfo"},336:{n:"BrtEndEsmdtinfo"},337:{n:"BrtBeginEsmdb"},338:{n:"BrtEndEsmdb"},339:{n:"BrtBeginEsfmd"},340:{n:"BrtEndEsfmd"},341:{n:"BrtBeginSingleCells"},342:{n:"BrtEndSingleCells"},343:{n:"BrtBeginList"},344:{n:"BrtEndList"},345:{n:"BrtBeginListCols"},346:{n:"BrtEndListCols"},347:{n:"BrtBeginListCol"},348:{n:"BrtEndListCol"},349:{n:"BrtBeginListXmlCPr"},350:{n:"BrtEndListXmlCPr"},351:{n:"BrtListCCFmla"},352:{n:"BrtListTrFmla"},353:{n:"BrtBeginExternals"},354:{n:"BrtEndExternals"},355:{n:"BrtSupBookSrc",f:gr},357:{n:"BrtSupSelf"},358:{n:"BrtSupSame"},359:{n:"BrtSupTabs"},360:{n:"BrtBeginSupBook"},361:{n:"BrtPlaceholderName"},362:{n:"BrtExternSheet",f:va},363:{n:"BrtExternTableStart"},364:{n:"BrtExternTableEnd"},366:{n:"BrtExternRowHdr"},367:{n:"BrtExternCellBlank"},368:{n:"BrtExternCellReal"},369:{n:"BrtExternCellBool"},370:{n:"BrtExternCellError"},371:{n:"BrtExternCellString"},372:{n:"BrtBeginEsmdx"},373:{n:"BrtEndEsmdx"},374:{n:"BrtBeginMdxSet"},375:{n:"BrtEndMdxSet"},376:{n:"BrtBeginMdxMbrProp"},377:{n:"BrtEndMdxMbrProp"},378:{n:"BrtBeginMdxKPI"},379:{n:"BrtEndMdxKPI"},380:{n:"BrtBeginEsstr"},381:{n:"BrtEndEsstr"},382:{n:"BrtBeginPRFItem"},383:{n:"BrtEndPRFItem"},384:{n:"BrtBeginPivotCacheIDs"},385:{n:"BrtEndPivotCacheIDs"},386:{n:"BrtBeginPivotCacheID"},387:{n:"BrtEndPivotCacheID"},388:{n:"BrtBeginISXVIs"},389:{n:"BrtEndISXVIs"},390:{n:"BrtBeginColInfos"},391:{n:"BrtEndColInfos"},392:{n:"BrtBeginRwBrk"},393:{n:"BrtEndRwBrk"},394:{n:"BrtBeginColBrk"},395:{n:"BrtEndColBrk"},396:{n:"BrtBrk"},397:{n:"BrtUserBookView"},398:{n:"BrtInfo"},399:{n:"BrtCUsr"},400:{n:"BrtUsr"},401:{n:"BrtBeginUsers"},403:{n:"BrtEOF"},404:{n:"BrtUCR"},405:{n:"BrtRRInsDel"},406:{n:"BrtRREndInsDel"},407:{n:"BrtRRMove"},408:{n:"BrtRREndMove"},409:{n:"BrtRRChgCell"},410:{n:"BrtRREndChgCell"},411:{n:"BrtRRHeader"},412:{n:"BrtRRUserView"},413:{n:"BrtRRRenSheet"},414:{n:"BrtRRInsertSh"},415:{n:"BrtRRDefName"},416:{n:"BrtRRNote"},417:{n:"BrtRRConflict"},418:{n:"BrtRRTQSIF"},419:{n:"BrtRRFormat"},420:{n:"BrtRREndFormat"},421:{n:"BrtRRAutoFmt"},422:{n:"BrtBeginUserShViews"},423:{n:"BrtBeginUserShView"},424:{n:"BrtEndUserShView"},425:{n:"BrtEndUserShViews"},426:{n:"BrtArrFmla",f:function(e,t,r){var n=e.l+t,a=vr(e),s=e.read_shift(1),i=[a]
if(i[2]=s,r.cellFormula){var o=Ki(e,n-e.l,r)
i[1]=o}else e.l=n
return i}},427:{n:"BrtShrFmla",f:function(e,t,r){var n=e.l+t,a=[wr(e,16)]
if(r.cellFormula){var s=Qi(e,n-e.l,r)
a[1]=s,e.l=n}else e.l=n
return a}},428:{n:"BrtTable"},429:{n:"BrtBeginExtConnections"},430:{n:"BrtEndExtConnections"},431:{n:"BrtBeginPCDCalcMems"},432:{n:"BrtEndPCDCalcMems"},433:{n:"BrtBeginPCDCalcMem"},434:{n:"BrtEndPCDCalcMem"},435:{n:"BrtBeginPCDHGLevels"},436:{n:"BrtEndPCDHGLevels"},437:{n:"BrtBeginPCDHGLevel"},438:{n:"BrtEndPCDHGLevel"},439:{n:"BrtBeginPCDHGLGroups"},440:{n:"BrtEndPCDHGLGroups"},441:{n:"BrtBeginPCDHGLGroup"},442:{n:"BrtEndPCDHGLGroup"},443:{n:"BrtBeginPCDHGLGMembers"},444:{n:"BrtEndPCDHGLGMembers"},445:{n:"BrtBeginPCDHGLGMember"},446:{n:"BrtEndPCDHGLGMember"},447:{n:"BrtBeginQSI"},448:{n:"BrtEndQSI"},449:{n:"BrtBeginQSIR"},450:{n:"BrtEndQSIR"},451:{n:"BrtBeginDeletedNames"},452:{n:"BrtEndDeletedNames"},453:{n:"BrtBeginDeletedName"},454:{n:"BrtEndDeletedName"},455:{n:"BrtBeginQSIFs"},456:{n:"BrtEndQSIFs"},457:{n:"BrtBeginQSIF"},458:{n:"BrtEndQSIF"},459:{n:"BrtBeginAutoSortScope"},460:{n:"BrtEndAutoSortScope"},461:{n:"BrtBeginConditionalFormatting"},462:{n:"BrtEndConditionalFormatting"},463:{n:"BrtBeginCFRule"},464:{n:"BrtEndCFRule"},465:{n:"BrtBeginIconSet"},466:{n:"BrtEndIconSet"},467:{n:"BrtBeginDatabar"},468:{n:"BrtEndDatabar"},469:{n:"BrtBeginColorScale"},470:{n:"BrtEndColorScale"},471:{n:"BrtCFVO"},472:{n:"BrtExternValueMeta"},473:{n:"BrtBeginColorPalette"},474:{n:"BrtEndColorPalette"},475:{n:"BrtIndexedColor"},476:{n:"BrtMargins",f:function(t){var r={}
return zo.forEach(function(e){r[e]=Er(t)}),r}},477:{n:"BrtPrintOptions"},478:{n:"BrtPageSetup"},479:{n:"BrtBeginHeaderFooter"},480:{n:"BrtEndHeaderFooter"},481:{n:"BrtBeginSXCrtFormat"},482:{n:"BrtEndSXCrtFormat"},483:{n:"BrtBeginSXCrtFormats"},484:{n:"BrtEndSXCrtFormats"},485:{n:"BrtWsFmtInfo",f:function(){}},486:{n:"BrtBeginMgs"},487:{n:"BrtEndMGs"},488:{n:"BrtBeginMGMaps"},489:{n:"BrtEndMGMaps"},490:{n:"BrtBeginMG"},491:{n:"BrtEndMG"},492:{n:"BrtBeginMap"},493:{n:"BrtEndMap"},494:{n:"BrtHLink",f:function(e,t){var r=e.l+t,n=wr(e,16),a=ur(e),s=nr(e),i=nr(e),o=nr(e)
e.l=r
var l={rfx:n,relId:a,loc:s,display:o}
return i&&(l.Tooltip=i),l}},495:{n:"BrtBeginDCon"},496:{n:"BrtEndDCon"},497:{n:"BrtBeginDRefs"},498:{n:"BrtEndDRefs"},499:{n:"BrtDRef"},500:{n:"BrtBeginScenMan"},501:{n:"BrtEndScenMan"},502:{n:"BrtBeginSct"},503:{n:"BrtEndSct"},504:{n:"BrtSlc"},505:{n:"BrtBeginDXFs"},506:{n:"BrtEndDXFs"},507:{n:"BrtDXF"},508:{n:"BrtBeginTableStyles"},509:{n:"BrtEndTableStyles"},510:{n:"BrtBeginTableStyle"},511:{n:"BrtEndTableStyle"},512:{n:"BrtTableStyleElement"},513:{n:"BrtTableStyleClient"},514:{n:"BrtBeginVolDeps"},515:{n:"BrtEndVolDeps"},516:{n:"BrtBeginVolType"},517:{n:"BrtEndVolType"},518:{n:"BrtBeginVolMain"},519:{n:"BrtEndVolMain"},520:{n:"BrtBeginVolTopic"},521:{n:"BrtEndVolTopic"},522:{n:"BrtVolSubtopic"},523:{n:"BrtVolRef"},524:{n:"BrtVolNum"},525:{n:"BrtVolErr"},526:{n:"BrtVolStr"},527:{n:"BrtVolBool"},528:{n:"BrtBeginCalcChain$"},529:{n:"BrtEndCalcChain$"},530:{n:"BrtBeginSortState"},531:{n:"BrtEndSortState"},532:{n:"BrtBeginSortCond"},533:{n:"BrtEndSortCond"},534:{n:"BrtBookProtection"},535:{n:"BrtSheetProtection"},536:{n:"BrtRangeProtection"},537:{n:"BrtPhoneticInfo"},538:{n:"BrtBeginECTxtWiz"},539:{n:"BrtEndECTxtWiz"},540:{n:"BrtBeginECTWFldInfoLst"},541:{n:"BrtEndECTWFldInfoLst"},542:{n:"BrtBeginECTwFldInfo"},548:{n:"BrtFileSharing"},549:{n:"BrtOleSize"},550:{n:"BrtDrawing",f:gr},551:{n:"BrtLegacyDrawing"},552:{n:"BrtLegacyDrawingHF"},553:{n:"BrtWebOpt"},554:{n:"BrtBeginWebPubItems"},555:{n:"BrtEndWebPubItems"},556:{n:"BrtBeginWebPubItem"},557:{n:"BrtEndWebPubItem"},558:{n:"BrtBeginSXCondFmt"},559:{n:"BrtEndSXCondFmt"},560:{n:"BrtBeginSXCondFmts"},561:{n:"BrtEndSXCondFmts"},562:{n:"BrtBkHim"},564:{n:"BrtColor"},565:{n:"BrtBeginIndexedColors"},566:{n:"BrtEndIndexedColors"},569:{n:"BrtBeginMRUColors"},570:{n:"BrtEndMRUColors"},572:{n:"BrtMRUColor"},573:{n:"BrtBeginDVals"},574:{n:"BrtEndDVals"},577:{n:"BrtSupNameStart"},578:{n:"BrtSupNameValueStart"},579:{n:"BrtSupNameValueEnd"},580:{n:"BrtSupNameNum"},581:{n:"BrtSupNameErr"},582:{n:"BrtSupNameSt"},583:{n:"BrtSupNameNil"},584:{n:"BrtSupNameBool"},585:{n:"BrtSupNameFmla"},586:{n:"BrtSupNameBits"},587:{n:"BrtSupNameEnd"},588:{n:"BrtEndSupBook"},589:{n:"BrtCellSmartTagProperty"},590:{n:"BrtBeginCellSmartTag"},591:{n:"BrtEndCellSmartTag"},592:{n:"BrtBeginCellSmartTags"},593:{n:"BrtEndCellSmartTags"},594:{n:"BrtBeginSmartTags"},595:{n:"BrtEndSmartTags"},596:{n:"BrtSmartTagType"},597:{n:"BrtBeginSmartTagTypes"},598:{n:"BrtEndSmartTagTypes"},599:{n:"BrtBeginSXFilters"},600:{n:"BrtEndSXFilters"},601:{n:"BrtBeginSXFILTER"},602:{n:"BrtEndSXFilter"},603:{n:"BrtBeginFills"},604:{n:"BrtEndFills"},605:{n:"BrtBeginCellWatches"},606:{n:"BrtEndCellWatches"},607:{n:"BrtCellWatch"},608:{n:"BrtBeginCRErrs"},609:{n:"BrtEndCRErrs"},610:{n:"BrtCrashRecErr"},611:{n:"BrtBeginFonts"},612:{n:"BrtEndFonts"},613:{n:"BrtBeginBorders"},614:{n:"BrtEndBorders"},615:{n:"BrtBeginFmts"},616:{n:"BrtEndFmts"},617:{n:"BrtBeginCellXFs"},618:{n:"BrtEndCellXFs"},619:{n:"BrtBeginStyles"},620:{n:"BrtEndStyles"},625:{n:"BrtBigName"},626:{n:"BrtBeginCellStyleXFs"},627:{n:"BrtEndCellStyleXFs"},628:{n:"BrtBeginComments"},629:{n:"BrtEndComments"},630:{n:"BrtBeginCommentAuthors"},631:{n:"BrtEndCommentAuthors"},632:{n:"BrtCommentAuthor",f:si},633:{n:"BrtBeginCommentList"},634:{n:"BrtEndCommentList"},635:{n:"BrtBeginComment",f:function(e){var t={}
t.iauthor=e.read_shift(4)
var r=wr(e,16)
return t.rfx=r.s,t.ref=Yt(r.s),e.l+=16,t}},636:{n:"BrtEndComment"},637:{n:"BrtCommentText",f:ir},638:{n:"BrtBeginOleObjects"},639:{n:"BrtOleObject"},640:{n:"BrtEndOleObjects"},641:{n:"BrtBeginSxrules"},642:{n:"BrtEndSxRules"},643:{n:"BrtBeginActiveXControls"},644:{n:"BrtActiveX"},645:{n:"BrtEndActiveXControls"},646:{n:"BrtBeginPCDSDTCEMembersSortBy"},648:{n:"BrtBeginCellIgnoreECs"},649:{n:"BrtCellIgnoreEC"},650:{n:"BrtEndCellIgnoreECs"},651:{n:"BrtCsProp",f:function(e,t){return e.l+=10,{name:nr(e)}}},652:{n:"BrtCsPageSetup"},653:{n:"BrtBeginUserCsViews"},654:{n:"BrtEndUserCsViews"},655:{n:"BrtBeginUserCsView"},656:{n:"BrtEndUserCsView"},657:{n:"BrtBeginPcdSFCIEntries"},658:{n:"BrtEndPCDSFCIEntries"},659:{n:"BrtPCDSFCIEntry"},660:{n:"BrtBeginListParts"},661:{n:"BrtListPart"},662:{n:"BrtEndListParts"},663:{n:"BrtSheetCalcProp"},664:{n:"BrtBeginFnGroup"},665:{n:"BrtFnGroup"},666:{n:"BrtEndFnGroup"},667:{n:"BrtSupAddin"},668:{n:"BrtSXTDMPOrder"},669:{n:"BrtCsProtection"},671:{n:"BrtBeginWsSortMap"},672:{n:"BrtEndWsSortMap"},673:{n:"BrtBeginRRSort"},674:{n:"BrtEndRRSort"},675:{n:"BrtRRSortItem"},676:{n:"BrtFileSharingIso"},677:{n:"BrtBookProtectionIso"},678:{n:"BrtSheetProtectionIso"},679:{n:"BrtCsProtectionIso"},680:{n:"BrtRangeProtectionIso"},1024:{n:"BrtRwDescent"},1025:{n:"BrtKnownFonts"},1026:{n:"BrtBeginSXTupleSet"},1027:{n:"BrtEndSXTupleSet"},1028:{n:"BrtBeginSXTupleSetHeader"},1029:{n:"BrtEndSXTupleSetHeader"},1030:{n:"BrtSXTupleSetHeaderItem"},1031:{n:"BrtBeginSXTupleSetData"},1032:{n:"BrtEndSXTupleSetData"},1033:{n:"BrtBeginSXTupleSetRow"},1034:{n:"BrtEndSXTupleSetRow"},1035:{n:"BrtSXTupleSetRowItem"},1036:{n:"BrtNameExt"},1037:{n:"BrtPCDH14"},1038:{n:"BrtBeginPCDCalcMem14"},1039:{n:"BrtEndPCDCalcMem14"},1040:{n:"BrtSXTH14"},1041:{n:"BrtBeginSparklineGroup"},1042:{n:"BrtEndSparklineGroup"},1043:{n:"BrtSparkline"},1044:{n:"BrtSXDI14"},1045:{n:"BrtWsFmtInfoEx14"},1046:{n:"BrtBeginConditionalFormatting14"},1047:{n:"BrtEndConditionalFormatting14"},1048:{n:"BrtBeginCFRule14"},1049:{n:"BrtEndCFRule14"},1050:{n:"BrtCFVO14"},1051:{n:"BrtBeginDatabar14"},1052:{n:"BrtBeginIconSet14"},1053:{n:"BrtDVal14"},1054:{n:"BrtBeginDVals14"},1055:{n:"BrtColor14"},1056:{n:"BrtBeginSparklines"},1057:{n:"BrtEndSparklines"},1058:{n:"BrtBeginSparklineGroups"},1059:{n:"BrtEndSparklineGroups"},1061:{n:"BrtSXVD14"},1062:{n:"BrtBeginSXView14"},1063:{n:"BrtEndSXView14"},1064:{n:"BrtBeginSXView16"},1065:{n:"BrtEndSXView16"},1066:{n:"BrtBeginPCD14"},1067:{n:"BrtEndPCD14"},1068:{n:"BrtBeginExtConn14"},1069:{n:"BrtEndExtConn14"},1070:{n:"BrtBeginSlicerCacheIDs"},1071:{n:"BrtEndSlicerCacheIDs"},1072:{n:"BrtBeginSlicerCacheID"},1073:{n:"BrtEndSlicerCacheID"},1075:{n:"BrtBeginSlicerCache"},1076:{n:"BrtEndSlicerCache"},1077:{n:"BrtBeginSlicerCacheDef"},1078:{n:"BrtEndSlicerCacheDef"},1079:{n:"BrtBeginSlicersEx"},1080:{n:"BrtEndSlicersEx"},1081:{n:"BrtBeginSlicerEx"},1082:{n:"BrtEndSlicerEx"},1083:{n:"BrtBeginSlicer"},1084:{n:"BrtEndSlicer"},1085:{n:"BrtSlicerCachePivotTables"},1086:{n:"BrtBeginSlicerCacheOlapImpl"},1087:{n:"BrtEndSlicerCacheOlapImpl"},1088:{n:"BrtBeginSlicerCacheLevelsData"},1089:{n:"BrtEndSlicerCacheLevelsData"},1090:{n:"BrtBeginSlicerCacheLevelData"},1091:{n:"BrtEndSlicerCacheLevelData"},1092:{n:"BrtBeginSlicerCacheSiRanges"},1093:{n:"BrtEndSlicerCacheSiRanges"},1094:{n:"BrtBeginSlicerCacheSiRange"},1095:{n:"BrtEndSlicerCacheSiRange"},1096:{n:"BrtSlicerCacheOlapItem"},1097:{n:"BrtBeginSlicerCacheSelections"},1098:{n:"BrtSlicerCacheSelection"},1099:{n:"BrtEndSlicerCacheSelections"},1100:{n:"BrtBeginSlicerCacheNative"},1101:{n:"BrtEndSlicerCacheNative"},1102:{n:"BrtSlicerCacheNativeItem"},1103:{n:"BrtRangeProtection14"},1104:{n:"BrtRangeProtectionIso14"},1105:{n:"BrtCellIgnoreEC14"},1111:{n:"BrtList14"},1112:{n:"BrtCFIcon"},1113:{n:"BrtBeginSlicerCachesPivotCacheIDs"},1114:{n:"BrtEndSlicerCachesPivotCacheIDs"},1115:{n:"BrtBeginSlicers"},1116:{n:"BrtEndSlicers"},1117:{n:"BrtWbProp14"},1118:{n:"BrtBeginSXEdit"},1119:{n:"BrtEndSXEdit"},1120:{n:"BrtBeginSXEdits"},1121:{n:"BrtEndSXEdits"},1122:{n:"BrtBeginSXChange"},1123:{n:"BrtEndSXChange"},1124:{n:"BrtBeginSXChanges"},1125:{n:"BrtEndSXChanges"},1126:{n:"BrtSXTupleItems"},1128:{n:"BrtBeginSlicerStyle"},1129:{n:"BrtEndSlicerStyle"},1130:{n:"BrtSlicerStyleElement"},1131:{n:"BrtBeginStyleSheetExt14"},1132:{n:"BrtEndStyleSheetExt14"},1133:{n:"BrtBeginSlicerCachesPivotCacheID"},1134:{n:"BrtEndSlicerCachesPivotCacheID"},1135:{n:"BrtBeginConditionalFormattings"},1136:{n:"BrtEndConditionalFormattings"},1137:{n:"BrtBeginPCDCalcMemExt"},1138:{n:"BrtEndPCDCalcMemExt"},1139:{n:"BrtBeginPCDCalcMemsExt"},1140:{n:"BrtEndPCDCalcMemsExt"},1141:{n:"BrtPCDField14"},1142:{n:"BrtBeginSlicerStyles"},1143:{n:"BrtEndSlicerStyles"},1144:{n:"BrtBeginSlicerStyleElements"},1145:{n:"BrtEndSlicerStyleElements"},1146:{n:"BrtCFRuleExt"},1147:{n:"BrtBeginSXCondFmt14"},1148:{n:"BrtEndSXCondFmt14"},1149:{n:"BrtBeginSXCondFmts14"},1150:{n:"BrtEndSXCondFmts14"},1152:{n:"BrtBeginSortCond14"},1153:{n:"BrtEndSortCond14"},1154:{n:"BrtEndDVals14"},1155:{n:"BrtEndIconSet14"},1156:{n:"BrtEndDatabar14"},1157:{n:"BrtBeginColorScale14"},1158:{n:"BrtEndColorScale14"},1159:{n:"BrtBeginSxrules14"},1160:{n:"BrtEndSxrules14"},1161:{n:"BrtBeginPRule14"},1162:{n:"BrtEndPRule14"},1163:{n:"BrtBeginPRFilters14"},1164:{n:"BrtEndPRFilters14"},1165:{n:"BrtBeginPRFilter14"},1166:{n:"BrtEndPRFilter14"},1167:{n:"BrtBeginPRFItem14"},1168:{n:"BrtEndPRFItem14"},1169:{n:"BrtBeginCellIgnoreECs14"},1170:{n:"BrtEndCellIgnoreECs14"},1171:{n:"BrtDxf14"},1172:{n:"BrtBeginDxF14s"},1173:{n:"BrtEndDxf14s"},1177:{n:"BrtFilter14"},1178:{n:"BrtBeginCustomFilters14"},1180:{n:"BrtCustomFilter14"},1181:{n:"BrtIconFilter14"},1182:{n:"BrtPivotCacheConnectionName"},2048:{n:"BrtBeginDecoupledPivotCacheIDs"},2049:{n:"BrtEndDecoupledPivotCacheIDs"},2050:{n:"BrtDecoupledPivotCacheID"},2051:{n:"BrtBeginPivotTableRefs"},2052:{n:"BrtEndPivotTableRefs"},2053:{n:"BrtPivotTableRef"},2054:{n:"BrtSlicerCacheBookPivotTables"},2055:{n:"BrtBeginSxvcells"},2056:{n:"BrtEndSxvcells"},2057:{n:"BrtBeginSxRow"},2058:{n:"BrtEndSxRow"},2060:{n:"BrtPcdCalcMem15"},2067:{n:"BrtQsi15"},2068:{n:"BrtBeginWebExtensions"},2069:{n:"BrtEndWebExtensions"},2070:{n:"BrtWebExtension"},2071:{n:"BrtAbsPath15"},2072:{n:"BrtBeginPivotTableUISettings"},2073:{n:"BrtEndPivotTableUISettings"},2075:{n:"BrtTableSlicerCacheIDs"},2076:{n:"BrtTableSlicerCacheID"},2077:{n:"BrtBeginTableSlicerCache"},2078:{n:"BrtEndTableSlicerCache"},2079:{n:"BrtSxFilter15"},2080:{n:"BrtBeginTimelineCachePivotCacheIDs"},2081:{n:"BrtEndTimelineCachePivotCacheIDs"},2082:{n:"BrtTimelineCachePivotCacheID"},2083:{n:"BrtBeginTimelineCacheIDs"},2084:{n:"BrtEndTimelineCacheIDs"},2085:{n:"BrtBeginTimelineCacheID"},2086:{n:"BrtEndTimelineCacheID"},2087:{n:"BrtBeginTimelinesEx"},2088:{n:"BrtEndTimelinesEx"},2089:{n:"BrtBeginTimelineEx"},2090:{n:"BrtEndTimelineEx"},2091:{n:"BrtWorkBookPr15"},2092:{n:"BrtPCDH15"},2093:{n:"BrtBeginTimelineStyle"},2094:{n:"BrtEndTimelineStyle"},2095:{n:"BrtTimelineStyleElement"},2096:{n:"BrtBeginTimelineStylesheetExt15"},2097:{n:"BrtEndTimelineStylesheetExt15"},2098:{n:"BrtBeginTimelineStyles"},2099:{n:"BrtEndTimelineStyles"},2100:{n:"BrtBeginTimelineStyleElements"},2101:{n:"BrtEndTimelineStyleElements"},2102:{n:"BrtDxf15"},2103:{n:"BrtBeginDxfs15"},2104:{n:"brtEndDxfs15"},2105:{n:"BrtSlicerCacheHideItemsWithNoData"},2106:{n:"BrtBeginItemUniqueNames"},2107:{n:"BrtEndItemUniqueNames"},2108:{n:"BrtItemUniqueName"},2109:{n:"BrtBeginExtConn15"},2110:{n:"BrtEndExtConn15"},2111:{n:"BrtBeginOledbPr15"},2112:{n:"BrtEndOledbPr15"},2113:{n:"BrtBeginDataFeedPr15"},2114:{n:"BrtEndDataFeedPr15"},2115:{n:"BrtTextPr15"},2116:{n:"BrtRangePr15"},2117:{n:"BrtDbCommand15"},2118:{n:"BrtBeginDbTables15"},2119:{n:"BrtEndDbTables15"},2120:{n:"BrtDbTable15"},2121:{n:"BrtBeginDataModel"},2122:{n:"BrtEndDataModel"},2123:{n:"BrtBeginModelTables"},2124:{n:"BrtEndModelTables"},2125:{n:"BrtModelTable"},2126:{n:"BrtBeginModelRelationships"},2127:{n:"BrtEndModelRelationships"},2128:{n:"BrtModelRelationship"},2129:{n:"BrtBeginECTxtWiz15"},2130:{n:"BrtEndECTxtWiz15"},2131:{n:"BrtBeginECTWFldInfoLst15"},2132:{n:"BrtEndECTWFldInfoLst15"},2133:{n:"BrtBeginECTWFldInfo15"},2134:{n:"BrtFieldListActiveItem"},2135:{n:"BrtPivotCacheIdVersion"},2136:{n:"BrtSXDI15"},2137:{n:"BrtBeginModelTimeGroupings"},2138:{n:"BrtEndModelTimeGroupings"},2139:{n:"BrtBeginModelTimeGrouping"},2140:{n:"BrtEndModelTimeGrouping"},2141:{n:"BrtModelTimeGroupingCalcCol"},3072:{n:"BrtUid"},3073:{n:"BrtRevisionPtr"},65535:{n:""}},Ql=w(Zl,"n"),Jl={3:{n:"BIFF2NUM",f:function(e){var t=Kn(e);++e.l
var r=Er(e)
return t.t="n",t.val=r,t}},4:{n:"BIFF2STR",f:function(e,t,r){var n=Kn(e);++e.l
var a=Vn(e,0,r)
return n.t="str",n.val=a,n}},6:{n:"Formula",f:ji},9:{n:"BOF",f:aa},10:{n:"EOF",f:On},12:{n:"CalcCount",f:Pn},13:{n:"CalcMode",f:Pn},14:{n:"CalcPrecision",f:Dn},15:{n:"CalcRefMode",f:Dn},16:{n:"CalcDelta",f:Er},17:{n:"CalcIter",f:Dn},18:{n:"Protect",f:Dn},19:{n:"Password",f:Pn},20:{n:"Header",f:pa},21:{n:"Footer",f:pa},23:{n:"ExternSheet",f:va},24:{n:"Lbl",f:ba},25:{n:"WinProtect",f:Dn},26:{n:"VerticalPageBreaks"},27:{n:"HorizontalPageBreaks"},28:{n:"Note",f:function(e,t,r){return function(e,t,r){if(!(r.biff<8)){var n=e.read_shift(2),a=e.read_shift(2),s=e.read_shift(2),i=e.read_shift(2),o=Vn(e,0,r)
return r.biff<8&&e.read_shift(1),[{r:n,c:a},o,i,s]}}(e,0,r)}},29:{n:"Selection"},34:{n:"Date1904",f:Dn},35:{n:"ExternName",f:ga},38:{n:"LeftMargin",f:Er},39:{n:"RightMargin",f:Er},40:{n:"TopMargin",f:Er},41:{n:"BottomMargin",f:Er},42:{n:"PrintRowCol",f:Dn},43:{n:"PrintGrid",f:Dn},47:{n:"FilePass",f:function(e,t,r){var n,a,s,i,o={Type:8<=r.biff?e.read_shift(2):0}
return o.Type?as(e,t-2,o):(n=e,r.biff,a=r,s=o,i={key:Pn(n),verificationBytes:Pn(n)},a.password&&(i.verifier=Qa(a.password)),s.valid=i.verificationBytes===i.verifier,s.valid&&(s.insitu=ns(a.password))),o}},49:{n:"Font",f:function(e,t,r){var n={dyHeight:e.read_shift(2),fl:e.read_shift(2)}
switch(r&&r.biff||8){case 2:break
case 3:case 4:e.l+=2
break
default:e.l+=10}return n.name=Mn(e,0,r),n}},51:{n:"PrintSize",f:Pn},60:{n:"Continue"},61:{n:"Window1",f:function(e){return{Pos:[e.read_shift(2),e.read_shift(2)],Dim:[e.read_shift(2),e.read_shift(2)],Flags:e.read_shift(2),CurTab:e.read_shift(2),FirstTab:e.read_shift(2),Selected:e.read_shift(2),TabRatio:e.read_shift(2)}}},64:{n:"Backup",f:Dn},65:{n:"Pane"},66:{n:"CodePage",f:Pn},77:{n:"Pls"},80:{n:"DCon"},81:{n:"DConRef"},82:{n:"DConName"},85:{n:"DefColWidth",f:Pn},89:{n:"XCT"},90:{n:"CRN"},91:{n:"FileSharing"},92:{n:"WriteAccess",f:function(e,t,r){if(r.enc)return e.l+=t,""
var n=e.l,a=Vn(e,0,r)
return e.read_shift(t+n-e.l),a}},93:{n:"Obj",f:function(e,t,r){if(r&&r.biff<8)return function(e,t,r){e.l+=4
var n=e.read_shift(2),a=e.read_shift(2),s=e.read_shift(2)
e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=6,t-=36
var i=[]
return i.push((Ca[n]||Ot)(e,t,r)),{cmo:[a,n,s],ft:i}}(e,t,r)
var n=ta(e)
return{cmo:n,ft:function(t,e){for(var r=t.l+e,n=[];t.l<r;){var a=t.read_shift(2)
t.l-=2
try{n.push(na[a](t,r-t.l))}catch(e){return t.l=r,n}}return t.l!=r&&(t.l=r),n}(e,t-22,n[1])}}},94:{n:"Uncalced"},95:{n:"CalcSaveRecalc",f:Dn},96:{n:"Template"},97:{n:"Intl"},99:{n:"ObjProtect",f:Dn},125:{n:"ColInfo",f:Aa},128:{n:"Guts",f:function(e){e.l+=4
var t=[e.read_shift(2),e.read_shift(2)]
if(0!==t[0]&&t[0]--,0!==t[1]&&t[1]--,7<t[0]||7<t[1])throw new Error("Bad Gutters: "+t.join("|"))
return t}},129:{n:"WsBool",f:function(e,t,r){return{fDialog:16&(r&&8==r.biff||2==t?e.read_shift(2):(e.l+=t,0))}}},130:{n:"GridSet",f:Pn},131:{n:"HCenter",f:Dn},132:{n:"VCenter",f:Dn},133:{n:"BoundSheet8",f:function(e,t,r){var n=e.read_shift(4),a=3&e.read_shift(1),s=e.read_shift(1)
switch(s){case 0:s="Worksheet"
break
case 1:s="Macrosheet"
break
case 2:s="Chartsheet"
break
case 6:s="VBAModule"}var i=Mn(e,0,r)
return 0===i.length&&(i="Sheet1"),{pos:n,hs:a,dt:s,name:i}}},134:{n:"WriteProtect"},140:{n:"Country",f:function(e){var t,r=[0,0]
return t=e.read_shift(2),r[0]=Mr[t]||t,t=e.read_shift(2),r[1]=Mr[t]||t,r}},141:{n:"HideObj",f:Pn},144:{n:"Sort"},146:{n:"Palette",f:function(e){for(var t=e.read_shift(2),r=[];0<t--;)r.push(Yn(e))
return r}},151:{n:"Sync"},152:{n:"LPr"},153:{n:"DxGCol"},154:{n:"FnGroupName"},155:{n:"FilterMode"},156:{n:"BuiltInFnGroupCount",f:Pn},157:{n:"AutoFilterInfo"},158:{n:"AutoFilter"},160:{n:"Scl",f:Ba},161:{n:"Setup",f:function(e,t){var r={}
return t<32||(e.l+=16,r.header=Er(e),r.footer=Er(e),e.l+=2),r}},174:{n:"ScenMan"},175:{n:"SCENARIO"},176:{n:"SxView"},177:{n:"Sxvd"},178:{n:"SXVI"},180:{n:"SxIvd"},181:{n:"SXLI"},182:{n:"SXPI"},184:{n:"DocRoute"},185:{n:"RecipName"},189:{n:"MulRk",f:function(e,t){for(var r=e.l+t-2,n=e.read_shift(2),a=e.read_shift(2),s=[];e.l<r;)s.push(Zn(e))
if(e.l!==r)throw new Error("MulRK read error")
var i=e.read_shift(2)
if(s.length!=i-a+1)throw new Error("MulRK length mismatch")
return{r:n,c:a,C:i,rkrec:s}}},190:{n:"MulBlank",f:function(e,t){for(var r=e.l+t-2,n=e.read_shift(2),a=e.read_shift(2),s=[];e.l<r;)s.push(e.read_shift(2))
if(e.l!==r)throw new Error("MulBlank read error")
var i=e.read_shift(2)
if(s.length!=i-a+1)throw new Error("MulBlank length mismatch")
return{r:n,c:a,C:i,ixfe:s}}},193:{n:"Mms",f:On},197:{n:"SXDI"},198:{n:"SXDB"},199:{n:"SXFDB"},200:{n:"SXDBB"},201:{n:"SXNum"},202:{n:"SxBool",f:Dn},203:{n:"SxErr"},204:{n:"SXInt"},205:{n:"SXString"},206:{n:"SXDtr"},207:{n:"SxNil"},208:{n:"SXTbl"},209:{n:"SXTBRGIITM"},210:{n:"SxTbpg"},211:{n:"ObProj"},213:{n:"SXStreamID"},215:{n:"DBCell"},216:{n:"SXRng"},217:{n:"SxIsxoper"},218:{n:"BookBool",f:Pn},220:{n:"DbOrParamQry"},221:{n:"ScenarioProtect",f:Dn},222:{n:"OleObjectSize"},224:{n:"XF",f:function(e,t,r){var n,a,s,i,o,l,c,f={}
return f.ifnt=e.read_shift(2),f.numFmtId=e.read_shift(2),f.flags=e.read_shift(2),f.fStyle=f.flags>>2&1,f.data=(n=e,f.fStyle,a=r,s={},i=n.read_shift(4),o=n.read_shift(4),l=n.read_shift(4),c=n.read_shift(2),s.patternType=Ur[l>>26],a.cellStyles&&(s.alc=7&i,s.fWrap=i>>3&1,s.alcV=i>>4&7,s.fJustLast=i>>7&1,s.trot=i>>8&255,s.cIndent=i>>16&15,s.fShrinkToFit=i>>20&1,s.iReadOrder=i>>22&2,s.fAtrNum=i>>26&1,s.fAtrFnt=i>>27&1,s.fAtrAlc=i>>28&1,s.fAtrBdr=i>>29&1,s.fAtrPat=i>>30&1,s.fAtrProt=i>>31&1,s.dgLeft=15&o,s.dgRight=o>>4&15,s.dgTop=o>>8&15,s.dgBottom=o>>12&15,s.icvLeft=o>>16&127,s.icvRight=o>>23&127,s.grbitDiag=o>>30&3,s.icvTop=127&l,s.icvBottom=l>>7&127,s.icvDiag=l>>14&127,s.dgDiag=l>>21&15,s.icvFore=127&c,s.icvBack=c>>7&127,s.fsxButton=c>>14&1),s),f}},225:{n:"InterfaceHdr",f:function(e,t){return 0===t||e.read_shift(2),1200}},226:{n:"InterfaceEnd",f:On},227:{n:"SXVS"},229:{n:"MergeCells",f:function(e,t){for(var r=[],n=e.read_shift(2);n--;)r.push(Qn(e))
return r}},233:{n:"BkHim"},235:{n:"MsoDrawingGroup"},236:{n:"MsoDrawing"},237:{n:"MsoDrawingSelection"},239:{n:"PhoneticInfo"},240:{n:"SxRule"},241:{n:"SXEx"},242:{n:"SxFilt"},244:{n:"SxDXF"},245:{n:"SxItm"},246:{n:"SxName"},247:{n:"SxSelect"},248:{n:"SXPair"},249:{n:"SxFmla"},251:{n:"SxFormat"},252:{n:"SST",f:function(e,t){for(var r=e.l+t,n=e.read_shift(4),a=e.read_shift(4),s=[],i=0;i!=a&&e.l<r;++i)s.push(Un(e))
return s.Count=n,s.Unique=a,s}},253:{n:"LabelSst",f:function(e){var t=Kn(e)
return t.isst=e.read_shift(4),t}},255:{n:"ExtSST",f:function(e,t){var r={}
return r.dsst=e.read_shift(2),e.l+=t-2,r}},256:{n:"SXVDEx"},259:{n:"SXFormula"},290:{n:"SXDBEx"},311:{n:"RRDInsDel"},312:{n:"RRDHead"},315:{n:"RRDChgCell"},317:{n:"RRTabId",f:Ln},318:{n:"RRDRenSheet"},319:{n:"RRSort"},320:{n:"RRDMove"},330:{n:"RRFormat"},331:{n:"RRAutoFmt"},333:{n:"RRInsertSh"},334:{n:"RRDMoveBegin"},335:{n:"RRDMoveEnd"},336:{n:"RRDInsDelBegin"},337:{n:"RRDInsDelEnd"},338:{n:"RRDConflict"},339:{n:"RRDDefName"},340:{n:"RRDRstEtxp"},351:{n:"LRng"},352:{n:"UsesELFs",f:Dn},353:{n:"DSF",f:On},401:{n:"CUsr"},402:{n:"CbUsr"},403:{n:"UsrInfo"},404:{n:"UsrExcl"},405:{n:"FileLock"},406:{n:"RRDInfo"},407:{n:"BCUsrs"},408:{n:"UsrChk"},425:{n:"UserBView"},426:{n:"UserSViewBegin"},427:{n:"UserSViewEnd"},428:{n:"RRDUserView"},429:{n:"Qsi"},430:{n:"SupBook",f:function(e,t,r){var n=e.l+t,a=e.read_shift(2),s=e.read_shift(2)
if(1025==(r.sbcch=s)||14849==s)return[s,a]
if(s<1||255<s)throw new Error("Unexpected SupBook type: "+s)
for(var i=Hn(e,s),o=[];n>e.l;)o.push(Wn(e))
return[s,a,i,o]}},431:{n:"Prot4Rev",f:Dn},432:{n:"CondFmt"},433:{n:"CF"},434:{n:"DVal"},437:{n:"DConBin"},438:{n:"TxO",f:function(t,r,e){var n=t.l,a=""
try{t.l+=4
var s=(e.lastobj||{cmo:[0,0]}).cmo[1];-1==[0,5,7,11,12,14].indexOf(s)?t.l+=6:function(e){e.read_shift(1)
e.l++
e.read_shift(2)
e.l+=2}(t)
var i=t.read_shift(2)
t.read_shift(2),Pn(t)
var o=t.read_shift(2)
t.l+=o
for(var l=1;l<t.lens.length-1;++l){if(t.l-n!=t.lens[l])throw new Error("TxO: bad continue record")
var c=t[t.l]
if((a+=Hn(t,t.lens[l+1]-t.lens[l]-1)).length>=(c?i:2*i))break}if(a.length!==i&&a.length!==2*i)throw new Error("cchText: "+i+" != "+a.length)
return t.l=n+r,{t:a}}catch(e){return t.l=n+r,{t:a}}}},439:{n:"RefreshAll",f:Dn},440:{n:"HLink",f:function(e,t){var r=Qn(e)
return e.l+=16,[r,function(e,t){var r=e.l+t,n=e.read_shift(4)
if(2!==n)throw new Error("Unrecognized streamVersion: "+n)
var a=e.read_shift(2)
e.l+=2
var s,i,o,l,c,f,h=""
16&a&&(s=Gn(e,e.l)),128&a&&(i=Gn(e,e.l)),257==(257&a)&&(o=Gn(e,e.l)),1==(257&a)&&(l=Xn(e,e.l)),8&a&&(h=Gn(e,e.l)),32&a&&(c=e.read_shift(16)),64&a&&(f=mn(e)),e.l=r
var u=i||o||l||""
u&&h&&(u+="#"+h),u||(u="#"+h)
var d={Target:u}
return c&&(d.guid=c),f&&(d.time=f),s&&(d.Tooltip=s),d}(e,t-24)]}},441:{n:"Lel"},442:{n:"CodeName",f:Wn},443:{n:"SXFDBType"},444:{n:"Prot4RevPass",f:Pn},445:{n:"ObNoMacros"},446:{n:"Dv"},448:{n:"Excel9File",f:On},449:{n:"RecalcId",f:function(e){return e.read_shift(2),e.read_shift(4)},r:2},450:{n:"EntExU2",f:On},512:{n:"Dimensions",f:fa},513:{n:"Blank",f:_a},515:{n:"Number",f:function(e){var t=Kn(e),r=Er(e)
return t.val=r,t}},516:{n:"Label",f:function(e,t,r){e.l
var n=Kn(e)
2==r.biff&&e.l++
var a=Wn(e,e.l,r)
return n.val=a,n}},517:{n:"BoolErr",f:ua},518:{n:"Formula",f:ji},519:{n:"String",f:Ta},520:{n:"Row",f:function(e){var t={}
t.r=e.read_shift(2),t.c=e.read_shift(2),t.cnt=e.read_shift(2)-t.c
var r=e.read_shift(2)
e.l+=4
var n=e.read_shift(1)
return e.l+=3,7&n&&(t.level=7&n),32&n&&(t.hidden=!0),64&n&&(t.hpt=r/20),t}},523:{n:"Index"},545:{n:"Array",f:wa},549:{n:"DefaultRowHeight",f:oa},566:{n:"Table"},574:{n:"Window2",f:function(e,t,r){return r&&2<=r.biff&&r.biff<8?{}:{RTL:64&e.read_shift(2)}}},638:{n:"RK",f:function(e){var t=e.read_shift(2),r=e.read_shift(2),n=Zn(e)
return{r:t,c:r,ixfe:n[0],rknum:n[1]}}},659:{n:"Style"},1030:{n:"Formula",f:ji},1048:{n:"BigName"},1054:{n:"Format",f:function(e,t,r){return[e.read_shift(2),Vn(e,0,r)]}},1084:{n:"ContinueBigName"},1212:{n:"ShrFmla",f:function(e,t,r){var n=qn(e)
e.l++
var a,s,i,o,l,c,f,h=e.read_shift(1)
return[(a=e,s=t-=8,i=r,l=a.l+s,c=a.read_shift(2),f=Wi(a,c,i),65535==c?[[],Ot(a,s-2)]:(s!==c+2&&(o=Hi(a,l-c-2,f,i)),[f,o])),h,n]}},2048:{n:"HLinkTooltip",f:function(e,t){e.read_shift(2)
var r=Qn(e),n=e.read_shift((t-10)/2,"dbcs-cont")
return[r,n=n.replace(oe,"")]}},2049:{n:"WebPub"},2050:{n:"QsiSXTag"},2051:{n:"DBQueryExt"},2052:{n:"ExtString"},2053:{n:"TxtQry"},2054:{n:"Qsir"},2055:{n:"Qsif"},2056:{n:"RRDTQSIF"},2057:{n:"BOF",f:aa},2058:{n:"OleDbConn"},2059:{n:"WOpt"},2060:{n:"SXViewEx"},2061:{n:"SXTH"},2062:{n:"SXPIEx"},2063:{n:"SXVDTEx"},2064:{n:"SXViewEx9"},2066:{n:"ContinueFrt"},2067:{n:"RealTimeData"},2128:{n:"ChartFrtInfo"},2129:{n:"FrtWrapper"},2130:{n:"StartBlock"},2131:{n:"EndBlock"},2132:{n:"StartObject"},2133:{n:"EndObject"},2134:{n:"CatLab"},2135:{n:"YMult"},2136:{n:"SXViewLink"},2137:{n:"PivotChartBits"},2138:{n:"FrtFontList"},2146:{n:"SheetExt"},2147:{n:"BookExt",r:12},2148:{n:"SXAddl"},2149:{n:"CrErr"},2150:{n:"HFPicture"},2151:{n:"FeatHdr",f:On},2152:{n:"Feat"},2154:{n:"DataLabExt"},2155:{n:"DataLabExtContents"},2156:{n:"CellWatch"},2161:{n:"FeatHdr11"},2162:{n:"Feature11"},2164:{n:"DropDownObjIds"},2165:{n:"ContinueFrt11"},2166:{n:"DConn"},2167:{n:"List12"},2168:{n:"Feature12"},2169:{n:"CondFmt12"},2170:{n:"CF12"},2171:{n:"CFEx"},2172:{n:"XFCRC",f:function(e){e.l+=2
var t={cxfs:0,crc:0}
return t.cxfs=e.read_shift(2),t.crc=e.read_shift(4),t},r:12},2173:{n:"XFExt",f:function(e,t){e.l,e.l+=2
var r=e.read_shift(2)
e.l+=2
for(var n=e.read_shift(2),a=[];0<n--;)a.push(ei(e,e.l))
return{ixfe:r,ext:a}},r:12},2174:{n:"AutoFilter12"},2175:{n:"ContinueFrt12"},2180:{n:"MDTInfo"},2181:{n:"MDXStr"},2182:{n:"MDXTuple"},2183:{n:"MDXSet"},2184:{n:"MDXProp"},2185:{n:"MDXKPI"},2186:{n:"MDB"},2187:{n:"PLV"},2188:{n:"Compat12",f:Dn,r:12},2189:{n:"DXF"},2190:{n:"TableStyles",r:12},2191:{n:"TableStyle"},2192:{n:"TableStyleElement"},2194:{n:"StyleExt"},2195:{n:"NamePublish"},2196:{n:"NameCmt",f:function(e,t,r){if(!(r.biff<8)){var n=e.read_shift(2),a=e.read_shift(2)
return[Hn(e,n,r),Hn(e,a,r)]}e.l+=t},r:12},2197:{n:"SortData"},2198:{n:"Theme",f:function(e,t,r){var n=e.l+t
if(124226!==e.read_shift(4))if(r.cellStyles&&I){var a,s=e.slice(e.l)
e.l=n
try{a=new I(s)}catch(e){return}var i=U(a,"theme/theme/theme1.xml",!0)
if(i)return Qs(i,r)}else e.l=n},r:12},2199:{n:"GUIDTypeLib"},2200:{n:"FnGrp12"},2201:{n:"NameFnGrp12"},2202:{n:"MTRSettings",f:function(e){return[0!==e.read_shift(4),0!==e.read_shift(4),e.read_shift(4)]},r:12},2203:{n:"CompressPictures",f:On},2204:{n:"HeaderFooter"},2205:{n:"CrtLayout12"},2206:{n:"CrtMlFrt"},2207:{n:"CrtMlFrtContinue"},2211:{n:"ForceFullCalculation",f:function(e){var t,r,n,a=(r=(t=e).read_shift(2),n=t.read_shift(2),t.l+=8,{type:r,flags:n})
if(2211!=a.type)throw new Error("Invalid Future Record "+a.type)
return 0!==e.read_shift(4)}},2212:{n:"ShapePropsStream"},2213:{n:"TextPropsStream"},2214:{n:"RichTextStream"},2215:{n:"CrtLayout12A"},4097:{n:"Units"},4098:{n:"Chart"},4099:{n:"Series"},4102:{n:"DataFormat"},4103:{n:"LineFormat"},4105:{n:"MarkerFormat"},4106:{n:"AreaFormat"},4107:{n:"PieFormat"},4108:{n:"AttachedLabel"},4109:{n:"SeriesText"},4116:{n:"ChartFormat"},4117:{n:"Legend"},4118:{n:"SeriesList"},4119:{n:"Bar"},4120:{n:"Line"},4121:{n:"Pie"},4122:{n:"Area"},4123:{n:"Scatter"},4124:{n:"CrtLine"},4125:{n:"Axis"},4126:{n:"Tick"},4127:{n:"ValueRange"},4128:{n:"CatSerRange"},4129:{n:"AxisLine"},4130:{n:"CrtLink"},4132:{n:"DefaultText"},4133:{n:"Text"},4134:{n:"FontX",f:Pn},4135:{n:"ObjectLink"},4146:{n:"Frame"},4147:{n:"Begin"},4148:{n:"End"},4149:{n:"PlotArea"},4154:{n:"Chart3d"},4156:{n:"PicF"},4157:{n:"DropBar"},4158:{n:"Radar"},4159:{n:"Surf"},4160:{n:"RadarArea"},4161:{n:"AxisParent"},4163:{n:"LegendException"},4164:{n:"ShtProps",f:function(e,t,r){var n={area:!1}
if(5!=r.biff)return e.l+=t,n
var a=e.read_shift(1)
return e.l+=3,16&a&&(n.area=!0),n}},4165:{n:"SerToCrt"},4166:{n:"AxesUsed"},4168:{n:"SBaseRef"},4170:{n:"SerParent"},4171:{n:"SerAuxTrend"},4174:{n:"IFmtRecord"},4175:{n:"Pos"},4176:{n:"AlRuns"},4177:{n:"BRAI"},4187:{n:"SerAuxErrBar"},4188:{n:"ClrtClient",f:function(e){for(var t=e.read_shift(2),r=[];0<t--;)r.push(Yn(e))
return r}},4189:{n:"SerFmt"},4191:{n:"Chart3DBarShape"},4192:{n:"Fbi"},4193:{n:"BopPop"},4194:{n:"AxcExt"},4195:{n:"Dat"},4196:{n:"PlotGrowth"},4197:{n:"SIIndex"},4198:{n:"GelFrame"},4199:{n:"BopPopCustom"},4200:{n:"Fbi2"},0:{n:"Dimensions",f:fa},2:{n:"BIFF2INT",f:function(e){var t=Kn(e);++e.l
var r=e.read_shift(2)
return t.t="n",t.val=r,t}},5:{n:"BoolErr",f:ua},7:{n:"String",f:function(e){var t=e.read_shift(1)
return 0===t?(e.l++,""):e.read_shift(t,"sbcs-cont")}},8:{n:"BIFF2ROW"},11:{n:"Index"},22:{n:"ExternCount",f:Pn},30:{n:"BIFF2FORMAT",f:ca},31:{n:"BIFF2FMTCNT"},32:{n:"BIFF2COLINFO"},33:{n:"Array",f:wa},37:{n:"DefaultRowHeight",f:oa},50:{n:"BIFF2FONTXTRA",f:function(e,t){e.l+=6,e.l+=2,e.l+=1,e.l+=3,e.l+=1,e.l+=t-13}},52:{n:"DDEObjName"},62:{n:"BIFF2WINDOW2"},67:{n:"BIFF2XF"},69:{n:"BIFF2FONTCLR"},86:{n:"BIFF4FMTCNT"},126:{n:"RK"},127:{n:"ImData",f:function(e){var t=e.read_shift(2),r=e.read_shift(2),n=e.read_shift(4),a={fmt:t,env:r,len:n,data:e.slice(e.l,e.l+n)}
return e.l+=n,a}},135:{n:"Addin"},136:{n:"Edg"},137:{n:"Pub"},145:{n:"Sub"},148:{n:"LHRecord"},149:{n:"LHNGraph"},150:{n:"Sound"},169:{n:"CoordList"},171:{n:"GCW"},188:{n:"ShrFmla"},191:{n:"ToolbarHdr"},192:{n:"ToolbarEnd"},194:{n:"AddMenu"},195:{n:"DelMenu"},214:{n:"RString",f:function(e,t,r){var n=e.l+t,a=Kn(e),s=Hn(e,e.read_shift(2),r)
return e.l=n,a.t="str",a.val=s,a}},223:{n:"UDDesc"},234:{n:"TabIdConf"},354:{n:"XL5Modify"},421:{n:"FileSharing2"},521:{n:"BOF",f:aa},536:{n:"Lbl",f:ba},547:{n:"ExternName",f:ga},561:{n:"Font"},579:{n:"BIFF3XF"},1033:{n:"BOF",f:aa},1091:{n:"BIFF4XF"},2157:{n:"FeatInfo"},2163:{n:"FeatInfo11"},2177:{n:"SXAddl12"},2240:{n:"AutoWebPub"},2241:{n:"ListObj"},2242:{n:"ListField"},2243:{n:"ListDV"},2244:{n:"ListCondFmt"},2245:{n:"ListCF"},2246:{n:"FMQry"},2247:{n:"FMSQry"},2248:{n:"PLV"},2249:{n:"LnExt"},2250:{n:"MkrExt"},2251:{n:"CrtCoopt"},2262:{n:"FRTArchId$",r:12},29282:{}},ql=w(Jl,"n")
function ec(e,t,r,n){var a=+t||+ql[t]
if(!isNaN(a)){var s=n||(r||[]).length||0,i=e.next(4)
i.write_shift(2,a),i.write_shift(2,s),0<s&&vt(r)&&e.push(r)}}function tc(e,t,r){return e||(e=Dt(7)),e.write_shift(2,t),e.write_shift(2,r),e.write_shift(2,0),e.write_shift(1,0),e}function rc(e,t,r,n){if(null!=t.v)switch(t.t){case"d":case"n":var a="d"==t.t?j(K(t.v)):t.v
return void(a==(0|a)&&0<=a&&a<65536?ec(e,2,(v=r,w=n,C=a,tc(E=Dt(9),v,w),E.write_shift(2,C),E)):ec(e,3,(p=r,g=n,m=a,tc(b=Dt(15),p,g),b.write_shift(8,m,"f"),b)))
case"b":case"e":return void ec(e,5,(c=r,f=n,h=t.v,u=t.t,tc(d=Dt(9),c,f),"e"==u?(d.write_shift(1,h),d.write_shift(1,1)):(d.write_shift(1,h?1:0),d.write_shift(1,0)),d))
case"s":case"str":return void ec(e,4,(s=r,i=n,o=t.v,tc(l=Dt(8+2*o.length),s,i),l.write_shift(1,o.length),l.write_shift(o.length,o,"sbcs"),l.l<l.length?l.slice(0,l.l):l))}var s,i,o,l,c,f,h,u,d,p,g,m,b,v,w,C,E
ec(e,1,tc(null,r,n))}function nc(e,t){var r=t||{}
null!=ue&&null==r.dense&&(r.dense=ue)
for(var n=Pt(),a=0,s=0;s<e.SheetNames.length;++s)e.SheetNames[s]==r.sheet&&(a=s)
if(0==a&&r.sheet&&e.SheetNames[0]!=r.sheet)throw new Error("Sheet not found: "+r.sheet)
return ec(n,9,sa(0,16,r)),function(e,t,r,n){var a,s=Array.isArray(t),i=Zt(t["!ref"]||"A1"),o="",l=[]
if(255<i.e.c||16383<i.e.r){if(n.WTF)throw new Error("Range "+(t["!ref"]||"A1")+" exceeds format limit A1:IV16384")
i.e.c=Math.min(i.e.c,255),i.e.r=Math.min(i.e.c,16383),a=$t(i)}for(var c=i.s.r;c<=i.e.r;++c){o=Vt(c)
for(var f=i.s.c;f<=i.e.c;++f){c===i.s.r&&(l[f]=Xt(f)),a=l[f]+o
var h=s?(t[c]||[])[f]:t[a]
h&&rc(e,h,c,f)}}}(n,e.Sheets[e.SheetNames[a]],0,r),ec(n,10),n.end()}function ac(e,t,r){var n,a,s,i,o
ec(e,"Font",(s=(n={sz:12,color:{theme:1},name:"Arial",family:2,scheme:"minor"}).name||"Arial",i=(a=r)&&5==a.biff,(o=Dt(i?15+s.length:16+2*s.length)).write_shift(2,20*(n.sz||12)),o.write_shift(4,0),o.write_shift(2,400),o.write_shift(4,0),o.write_shift(2,0),o.write_shift(1,s.length),i||o.write_shift(1,1),o.write_shift((i?1:2)*s.length,s,i?"sbcs":"utf16le"),o))}function sc(e,t,r,n,a){var s,i,o,l,c,f,h,u,d,p,g,m,b=16+fo(a.cellXfs,t,a)
if(null!=t.v)switch(t.t){case"d":case"n":var v="d"==t.t?j(K(t.v)):t.v
return void ec(e,"Number",(u=r,d=n,p=v,g=b,m=Dt(14),$n(u,d,g,m),Sr(p,m),m))
case"b":case"e":return void ec(e,517,da(r,n,t.v,b,0,t.t))
case"s":case"str":return void ec(e,"Label",(s=r,i=n,o=t.v,l=b,f=!(c=a)||8==c.biff,h=Dt(+f+8+(1+f)*o.length),$n(s,i,l,h),h.write_shift(2,o.length),f&&h.write_shift(1,1),h.write_shift((1+f)*o.length,o,f?"utf16le":"sbcs"),h))}ec(e,"Blank",$n(r,n,b))}function ic(e,t,r){var n,a,s,i,o,l,c,f=Pt(),h=r.SheetNames[e],u=r.Sheets[h]||{},d=(r||{}).Workbook||{},p=(d.Sheets||[])[e]||{},g=Array.isArray(u),m=8==t.biff,b="",v=[],w=Zt(u["!ref"]||"A1"),C=m?65536:16384
if(255<w.e.c||w.e.r>=C){if(t.WTF)throw new Error("Range "+(u["!ref"]||"A1")+" exceeds format limit A1:IV16384")
w.e.c=Math.min(w.e.c,255),w.e.r=Math.min(w.e.c,C-1)}ec(f,2057,sa(0,16,t)),ec(f,"CalcMode",Nn(1)),ec(f,"CalcCount",Nn(100)),ec(f,"CalcRefMode",Fn(!0)),ec(f,"CalcIter",Fn(!1)),ec(f,"CalcDelta",Sr(.001)),ec(f,"CalcSaveRecalc",Fn(!0)),ec(f,"PrintRowCol",Fn(!1)),ec(f,"PrintGrid",Fn(!1)),ec(f,"GridSet",Nn(1)),ec(f,"Guts",(a=[0,0],(s=Dt(8)).write_shift(4,0),s.write_shift(2,a[0]?a[0]+1:0),s.write_shift(2,a[1]?a[1]+1:0),s)),ec(f,"HCenter",Fn(!1)),ec(f,"VCenter",Fn(!1)),ec(f,512,(i=w,l=8!=(o=t).biff&&o.biff?2:4,(c=Dt(2*l+6)).write_shift(l,i.s.r),c.write_shift(l,i.e.r+1),c.write_shift(2,i.s.c),c.write_shift(2,i.e.c+1),c.write_shift(2,0),c)),m&&(u["!links"]=[])
for(var E=w.s.r;E<=w.e.r;++E){b=Vt(E)
for(var S=w.s.c;S<=w.e.c;++S){E===w.s.r&&(v[S]=Xt(S)),n=v[S]+b
var A=g?(u[E]||[])[S]:u[n]
A&&(sc(f,A,E,S,t),m&&A.l&&u["!links"].push([n,A.l]))}}var _,B,T,y,k,x,I=p.CodeName||p.name||h
return m&&d.Views&&ec(f,"Window2",(_=d.Views[0],B=Dt(18),T=1718,_&&_.RTL&&(T|=64),B.write_shift(2,T),B.write_shift(4,0),B.write_shift(4,64),B.write_shift(4,0),B.write_shift(4,0),B)),m&&(u["!merges"]||[]).length&&ec(f,"MergeCells",function(e){var t=Dt(2+8*e.length)
t.write_shift(2,e.length)
for(var r=0;r<e.length;++r)Jn(e[r],t)
return t}(u["!merges"])),m&&function(e,t){for(var r=0;r<t["!links"].length;++r){var n=t["!links"][r]
ec(e,"HLink",Ea(n)),n[1].Tooltip&&ec(e,"HLinkTooltip",Sa(n))}delete t["!links"]}(f,u),ec(f,"CodeName",zn(I)),m&&(y=f,k=u,(x=Dt(19)).write_shift(4,2151),x.write_shift(4,0),x.write_shift(4,0),x.write_shift(2,3),x.write_shift(1,1),x.write_shift(4,0),ec(y,"FeatHdr",x),(x=Dt(39)).write_shift(4,2152),x.write_shift(4,0),x.write_shift(4,0),x.write_shift(2,3),x.write_shift(1,0),x.write_shift(4,0),x.write_shift(2,1),x.write_shift(4,4),x.write_shift(2,0),Jn(Zt(k["!ref"]||"A1"),x),x.write_shift(4,4),ec(y,"Feat",x)),ec(f,"EOF"),f.end()}function oc(e,t,r){var n,a,s,i,o,l=Pt(),c=(e||{}).Workbook||{},f=c.Sheets||[],h=c.WBProps||{},u=8==r.biff,d=5==r.biff
ec(l,2057,sa(0,5,r)),"xla"==r.bookType&&ec(l,"Addin"),ec(l,"InterfaceHdr",u?Nn(1200):null),ec(l,"Mms",function(e,t){t||(t=Dt(e))
for(var r=0;r<e;++r)t.write_shift(1,0)
return t}(2)),d&&ec(l,"ToolbarHdr"),d&&ec(l,"ToolbarEnd"),ec(l,"InterfaceEnd"),ec(l,"WriteAccess",function(e,t){var r=!t||8==t.biff,n=Dt(r?112:54)
for(n.write_shift(8==t.biff?2:1,7),r&&n.write_shift(1,0),n.write_shift(4,859007059),n.write_shift(4,5458548|(r?0:536870912));n.l<n.length;)n.write_shift(1,r?0:32)
return n}(0,r)),ec(l,"CodePage",Nn(u?1200:1252)),u&&ec(l,"DSF",Nn(0)),u&&ec(l,"Excel9File"),ec(l,"RRTabId",function(e){for(var t=Dt(2*e),r=0;r<e;++r)t.write_shift(2,r+1)
return t}(e.SheetNames.length)),u&&e.vbaraw&&(ec(l,"ObProj"),ec(l,"CodeName",zn(h.CodeName||"ThisWorkbook"))),ec(l,"BuiltInFnGroupCount",Nn(17)),ec(l,"WinProtect",Fn(!1)),ec(l,"Protect",Fn(!1)),ec(l,"Password",Nn(0)),u&&ec(l,"Prot4Rev",Fn(!1)),u&&ec(l,"Prot4RevPass",Nn(0)),ec(l,"Window1",((n=Dt(18)).write_shift(2,0),n.write_shift(2,0),n.write_shift(2,29280),n.write_shift(2,17600),n.write_shift(2,56),n.write_shift(2,0),n.write_shift(2,0),n.write_shift(2,1),n.write_shift(2,500),n)),ec(l,"Backup",Fn(!1)),ec(l,"HideObj",Nn(0)),ec(l,"Date1904",Fn("true"==((a=e).Workbook&&a.Workbook.WBProps&&Ie(a.Workbook.WBProps.date1904)?"true":"false"))),ec(l,"CalcPrecision",Fn(!0)),u&&ec(l,"RefreshAll",Fn(!1)),ec(l,"BookBool",Nn(0)),ac(l,0,r),s=l,i=e.SSF,o=r,i&&[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var t=e[0];t<=e[1];++t)null!=i[t]&&ec(s,"Format",la(t,i[t],o))}),function(t,r){for(var e=0;e<16;++e)ec(t,"XF",ha({numFmtId:0,style:!0},0,r))
r.cellXfs.forEach(function(e){ec(t,"XF",ha(e,0,r))})}(l,r),u&&ec(l,"UsesELFs",Fn(!1))
var p,g=l.end(),m=Pt()
u&&ec(m,"Country",(p||(p=Dt(4)),p.write_shift(2,1),p.write_shift(2,1),p)),ec(m,"EOF")
var b=m.end(),v=Pt(),w=0,C=0
for(C=0;C<e.SheetNames.length;++C)w+=(u?12:11)+(u?2:1)*e.SheetNames[C].length
var E=g.length+w+b.length
for(C=0;C<e.SheetNames.length;++C)ec(v,"BoundSheet8",ia({pos:E,hs:(f[C]||{}).Hidden||0,dt:0,name:e.SheetNames[C]},r)),E+=t[C].length
var S=v.end()
if(w!=S.length)throw new Error("BS8 "+w+" != "+S.length)
var A=[]
return g.length&&A.push(g),S.length&&A.push(S),b.length&&A.push(b),et([A])}function lc(e,t){var r=t||{}
switch(r.biff||2){case 8:case 5:return function(e,t){var r=t||{},n=[]
e&&!e.SSF&&(e.SSF=de.get_table()),e&&e.SSF&&(ce(de),de.load_table(e.SSF),r.revssf=A(e.SSF),r.revssf[e.SSF[65535]]=0,r.ssf=e.SSF),r.cellXfs=[],r.Strings=[],r.Strings.Count=0,r.Strings.Unique=0,fo(r.cellXfs,{},{revssf:{General:0}})
for(var a=0;a<e.SheetNames.length;++a)n[n.length]=ic(a,r,e)
return n.unshift(oc(e,n,r)),et([n])}(e,t)
case 4:case 3:case 2:return nc(e,t)}throw new Error("invalid type "+r.bookType+" for BIFF")}var cc=function(){function r(e,t){var r=t||{}
null!=ue&&null==r.dense&&(r.dense=ue)
var n=r.dense?[]:{},a=e.match(/<table/i)
if(!a)throw new Error("Invalid HTML: could not find <table>")
var s=e.match(/<\/table/i),i=a.index,o=s&&s.index||e.length,l=function(e,t,r){if(R||"string"==typeof t)return e.split(t)
for(var n=e.split(t),a=[n[0]],s=1;s<n.length;++s)a.push(r),a.push(n[s])
return a}(e.slice(i,o),/(:?<tr[^>]*>)/i,"<tr>"),c=-1,f=0,h=0,u=0,d={s:{r:1e7,c:1e7},e:{r:0,c:0}},p=[]
for(i=0;i<l.length;++i){var g=l[i].trim(),m=g.slice(0,3).toLowerCase()
if("<tr"!=m){if("<td"==m||"<th"==m){var b=g.split(/<\/t[dh]>/i)
for(o=0;o<b.length;++o){var v=b[o].trim()
if(v.match(/<t[dh]/i)){for(var w=v,C=0;"<"==w.charAt(0)&&-1<(C=w.indexOf(">"));)w=w.slice(C+1)
var E=ve(v.slice(0,v.indexOf(">")))
u=E.colspan?+E.colspan:1,(1<(h=+E.rowspan)||1<u)&&p.push({s:{r:c,c:f},e:{r:c+(h||1)-1,c:f+u-1}})
var S=E.t||""
if(w.length){if(w=He(w),d.s.r>c&&(d.s.r=c),d.e.r<c&&(d.e.r=c),d.s.c>f&&(d.s.c=f),d.e.c<f&&(d.e.c=f),w.length){var A={t:"s",v:w}
r.raw||!w.trim().length||"s"==S||("TRUE"===w?A={t:"b",v:!0}:"FALSE"===w?A={t:"b",v:!1}:isNaN(k(w))?isNaN(x(w).getDate())||(A={t:"d",v:K(w)},r.cellDates||(A={t:"n",v:j(A.v)}),A.z=r.dateNF||de._table[14]):A={t:"n",v:k(w)}),r.dense?(n[c]||(n[c]=[]),n[c][f]=A):n[Yt({r:c,c:f})]=A,f+=u}}else f+=u}}}}else{if(++c,r.sheetRows&&r.sheetRows<=c){--c
break}f=0}}return n["!ref"]=$t(d),n}function l(e,t,r,n){for(var a=e["!merges"]||[],s=[],i=t.s.c;i<=t.e.c;++i){for(var o=0,l=0,c=0;c<a.length;++c)if(!(a[c].s.r>r||a[c].s.c>i||a[c].e.r<r||a[c].e.c<i)){if(a[c].s.r<r||a[c].s.c<i){o=-1
break}o=a[c].e.r-a[c].s.r+1,l=a[c].e.c-a[c].s.c+1
break}if(!(o<0)){var f=Yt({r:r,c:i}),h=n.dense?(e[r]||[])[i]:e[f],u={}
1<o&&(u.rowspan=o),1<l&&(u.colspan=l)
var d=h&&null!=h.v&&(h.h||ye(h.w||(Jt(h),h.w)||""))||""
u.t=h&&h.t||"z",n.editable&&(d='<span contenteditable="true">'+d+"</span>"),u.id="sjs-"+f,s.push(Ke("td",d,u))}}return"<tr>"+s.join("")+"</tr>"}function c(e,t,r){return[].join("")+"<table"+(r&&r.id?' id="'+r.id+'"':"")+">"}var f='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',h="</body></html>"
return{to_workbook:function(e,t){return qt(r(e,t),t)},to_sheet:r,_row:l,BEGIN:f,END:h,_preamble:c,from_sheet:function(e,t){var r=t||{},n=null!=r.header?r.header:f,a=null!=r.footer?r.footer:h,s=[n],i=Kt(e["!ref"])
r.dense=Array.isArray(e),s.push(c(0,0,r))
for(var o=i.s.r;o<=i.e.r;++o)s.push(l(e,i,o,r))
return s.push("</table>"+a),s.join("")}}}()
function fc(e,t){var r=t||{}
null!=ue&&(r.dense=ue)
for(var n,a,s,i,o=r.dense?[]:{},l=e.getElementsByTagName("tr"),c=r.sheetRows||1e7,f={s:{r:0,c:0},e:{r:0,c:0}},h=[],u=0,d=[],p=0,g=0;p<l.length&&g<c;++p){var m=l[p]
if(hc(m)){if(r.display)continue
d[g]={hidden:!0}}var b=m.children
for(n=a=0;n<b.length;++n){var v=b[n]
if(!r.display||!hc(v)){var w=He(v.innerHTML)
for(u=0;u<h.length;++u){var C=h[u]
C.s.c==a&&C.s.r<=g&&g<=C.e.r&&(a=C.e.c+1,u=-1)}i=+v.getAttribute("colspan")||1,(0<(s=+v.getAttribute("rowspan"))||1<i)&&h.push({s:{r:g,c:a},e:{r:g+(s||1)-1,c:a+i-1}})
var E={t:"s",v:w},S=v.getAttribute("t")||""
null!=w&&(0==w.length?E.t=S||"z":r.raw||0==w.trim().length||"s"==S||("TRUE"===w?E={t:"b",v:!0}:"FALSE"===w?E={t:"b",v:!1}:isNaN(k(w))?isNaN(x(w).getDate())||(E={t:"d",v:K(w)},r.cellDates||(E={t:"n",v:j(E.v)}),E.z=r.dateNF||de._table[14]):E={t:"n",v:k(w)})),r.dense?(o[g]||(o[g]=[]),o[g][a]=E):o[Yt({c:a,r:g})]=E,f.e.c<a&&(f.e.c=a),a+=i}}++g}return h.length&&(o["!merges"]=h),d.length&&(o["!rows"]=d),f.e.r=g-1,o["!ref"]=$t(f),c<=g&&(o["!fullref"]=$t((f.e.r=l.length-p+g-1,f))),o}function hc(e){var t,r="",n=(t=e).ownerDocument.defaultView&&"function"==typeof t.ownerDocument.defaultView.getComputedStyle?t.ownerDocument.defaultView.getComputedStyle:"function"==typeof getComputedStyle?getComputedStyle:null
return n&&(r=n(e).getPropertyValue("display")),r||(r=e.style.display),"none"===r}var uc,dc=(uc={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],quarter:["\\Qm",'m\\"th quarter"']},function(e,t){var r=t||{}
null!=ue&&null==r.dense&&(r.dense=ue)
var n,a,s,i,o,l,c,f=Dl(e),h=[],u={name:""},d="",p=0,g={},m=[],b=r.dense?[]:{},v={value:""},w="",C=0,E=-1,S=-1,A={s:{r:1e6,c:1e7},e:{r:0,c:0}},_=0,B={},T=[],y={},k=[],x=1,I=1,R=[],O={Names:[]},D={},F=["",""],P=[],N={},L="",M=0,U=!1,H=!1,W=0
for(Fl.lastIndex=0,f=f.replace(/<!--([\s\S]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");o=Fl.exec(f);)switch(o[3]=o[3].replace(/_.*$/,"")){case"table":case"工作表":"/"===o[1]?(A.e.c>=A.s.c&&A.e.r>=A.s.r&&(b["!ref"]=$t(A)),0<r.sheetRows&&r.sheetRows<=A.e.r&&(b["!fullref"]=b["!ref"],A.e.r=r.sheetRows-1,b["!ref"]=$t(A)),T.length&&(b["!merges"]=T),k.length&&(b["!rows"]=k),s.name=s["名称"]||s.name,"undefined"!=typeof JSON&&JSON.stringify(s),m.push(s.name),g[s.name]=b,H=!1):"/"!==o[0].charAt(o[0].length-2)&&(s=ve(o[0],!1),E=S=-1,A.s.r=A.s.c=1e7,A.e.r=A.e.c=0,b=r.dense?[]:{},T=[],k=[],H=!0)
break
case"table-row-group":"/"===o[1]?--_:++_
break
case"table-row":case"行":if("/"===o[1]){E+=x,x=1
break}if((i=ve(o[0],!1))["行号"]?E=i["行号"]-1:-1==E&&(E=0),(x=+i["number-rows-repeated"]||1)<10)for(W=0;W<x;++W)0<_&&(k[E+W]={level:_})
S=-1
break
case"covered-table-cell":++S,r.sheetStubs&&(r.dense?(b[E]||(b[E]=[]),b[E][S]={t:"z"}):b[Yt({r:E,c:S})]={t:"z"})
break
case"table-cell":case"数据":if("/"===o[0].charAt(o[0].length-2))++S,v=ve(o[0],!1),I=parseInt(v["number-columns-repeated"]||"1",10),l={t:"z",v:null},v.formula&&0!=r.cellFormula&&(l.f=ro(Ee(v.formula))),"string"==(v["数据类型"]||v["value-type"])&&(l.t="s",l.v=Ee(v["string-value"]||""),r.dense?(b[E]||(b[E]=[]),b[E][S]=l):b[Yt({r:E,c:S})]=l),S+=I-1
else if("/"!==o[1]){I=1
var V=x?E+x-1:E
if(++S>A.e.c&&(A.e.c=S),S<A.s.c&&(A.s.c=S),E<A.s.r&&(A.s.r=E),V>A.e.r&&(A.e.r=V),P=[],N={},l={t:(v=ve(o[0],!1))["数据类型"]||v["value-type"],v:null},r.cellFormula)if(v.formula&&(v.formula=Ee(v.formula)),v["number-matrix-columns-spanned"]&&v["number-matrix-rows-spanned"]&&(y={s:{r:E,c:S},e:{r:E+(parseInt(v["number-matrix-rows-spanned"],10)||0)-1,c:S+(parseInt(v["number-matrix-columns-spanned"],10)||0)-1}},l.F=$t(y),R.push([y,l.F])),v.formula)l.f=ro(v.formula)
else for(W=0;W<R.length;++W)E>=R[W][0].s.r&&E<=R[W][0].e.r&&S>=R[W][0].s.c&&S<=R[W][0].e.c&&(l.F=R[W][1])
switch((v["number-columns-spanned"]||v["number-rows-spanned"])&&(y={s:{r:E,c:S},e:{r:E+(parseInt(v["number-rows-spanned"],10)||0)-1,c:S+(parseInt(v["number-columns-spanned"],10)||0)-1}},T.push(y)),v["number-columns-repeated"]&&(I=parseInt(v["number-columns-repeated"],10)),l.t){case"boolean":l.t="b",l.v=Ie(v["boolean-value"])
break
case"float":case"percentage":case"currency":l.t="n",l.v=parseFloat(v.value)
break
case"date":l.t="d",l.v=K(v["date-value"]),r.cellDates||(l.t="n",l.v=j(l.v)),l.z="m/d/yy"
break
case"time":l.t="n",l.v=Y(v["time-value"])/86400
break
case"number":l.t="n",l.v=parseFloat(v["数据数值"])
break
default:if("string"!==l.t&&"text"!==l.t&&l.t)throw new Error("Unsupported value type "+l.t)
l.t="s",null!=v["string-value"]&&(w=Ee(v["string-value"]))}}else{if(U=!1,"s"===l.t&&(l.v=w||"",U=0==C),D.Target&&(l.l=D),0<P.length&&(l.c=P,P=[]),w&&!1!==r.cellText&&(l.w=w),(!U||r.sheetStubs)&&!(r.sheetRows&&r.sheetRows<=E))for(var z=0;z<x;++z){if(I=parseInt(v["number-columns-repeated"]||"1",10),r.dense)for(b[E+z]||(b[E+z]=[]),b[E+z][S]=0==z?l:be(l);0<--I;)b[E+z][S+I]=be(l)
else for(b[Yt({r:E+z,c:S})]=l;0<--I;)b[Yt({r:E+z,c:S+I})]=be(l)
A.e.c<=S&&(A.e.c=S)}S+=(I=parseInt(v["number-columns-repeated"]||"1",10))-1,I=0,l={},w=""}D={}
break
case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":if("/"===o[1]){if((n=h.pop())[0]!==o[3])throw"Bad state: "+n}else"/"!==o[0].charAt(o[0].length-2)&&h.push([o[3],!0])
break
case"annotation":if("/"===o[1]){if((n=h.pop())[0]!==o[3])throw"Bad state: "+n
N.t=w,N.a=L,P.push(N)}else"/"!==o[0].charAt(o[0].length-2)&&h.push([o[3],!1])
w=L="",C=M=0
break
case"creator":"/"===o[1]?L=f.slice(M,o.index):M=o.index+o[0].length
break
case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":case"chart":if("/"===o[1]){if((n=h.pop())[0]!==o[3])throw"Bad state: "+n}else"/"!==o[0].charAt(o[0].length-2)&&h.push([o[3],!1])
w="",C=0
break
case"scientific-number":case"currency-symbol":case"currency-style":break
case"number-style":case"percentage-style":case"date-style":case"time-style":if("/"===o[1]){if(B[u.name]=d,(n=h.pop())[0]!==o[3])throw"Bad state: "+n}else"/"!==o[0].charAt(o[0].length-2)&&(d="",u=ve(o[0],!1),h.push([o[3],!0]))
break
case"script":case"libraries":case"automatic-styles":case"master-styles":break
case"default-style":case"page-layout":case"style":case"map":case"font-face":case"paragraph-properties":case"table-properties":case"table-column-properties":case"table-row-properties":case"table-cell-properties":break
case"number":switch(h[h.length-1][0]){case"time-style":case"date-style":a=ve(o[0],!1),d+=uc[o[3]]["long"===a.style?1:0]}break
case"fraction":break
case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(h[h.length-1][0]){case"time-style":case"date-style":a=ve(o[0],!1),d+=uc[o[3]]["long"===a.style?1:0]}break
case"boolean-style":case"boolean":case"text-style":break
case"text":if("/>"===o[0].slice(-2))break
if("/"===o[1])switch(h[h.length-1][0]){case"number-style":case"date-style":case"time-style":d+=f.slice(p,o.index)}else p=o.index+o[0].length
break
case"named-range":F=no((a=ve(o[0],!1))["cell-range-address"])
var X={Name:a.name,Ref:F[0]+"!"+F[1]}
H&&(X.Sheet=m.length),O.Names.push(X)
break
case"text-content":case"text-properties":case"embedded-text":break
case"body":case"电子表格":case"forms":case"table-column":case"table-header-rows":case"table-rows":case"table-column-group":case"table-header-columns":case"table-columns":case"null-date":case"graphic-properties":case"calculation-settings":case"named-expressions":case"label-range":case"label-ranges":case"named-expression":case"sort":case"sort-by":case"sort-groups":case"tab":case"line-break":case"span":break
case"p":case"文本串":"/"!==o[1]||v&&v["string-value"]?(ve(o[0],!1),C=o.index+o[0].length):w=(0<w.length?w+"\n":"")+(c=f.slice(C,o.index),Ee(c.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(e,t){return Array(parseInt(t,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"\t").replace(/<text:line-break\/>/g,"\n").replace(/<[^>]*>/g,"")))
break
case"s":break
case"database-range":if("/"===o[1])break
try{g[(F=no(ve(o[0])["target-range-address"]))[0]]["!autofilter"]={ref:F[1]}}catch(e){}break
case"date":case"object":break
case"title":case"标题":case"desc":case"binary-data":case"table-source":case"scenario":case"iteration":case"content-validations":case"content-validation":case"help-message":case"error-message":case"database-ranges":case"filter":case"filter-and":case"filter-or":case"filter-condition":case"list-level-style-bullet":case"list-level-style-number":case"list-level-properties":break
case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":case"event-listener":break
case"initial-creator":case"creation-date":case"print-date":case"generator":case"document-statistic":case"user-defined":case"editing-duration":case"editing-cycles":case"config-item":case"page-number":case"page-count":case"time":case"cell-range-source":case"detective":case"operation":case"highlighted-range":break
case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":case"rect":break
case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":case"properties":case"property":break
case"a":if("/"!==o[1]){if(!(D=ve(o[0],!1)).href)break
D.Target=D.href,delete D.href,"#"==D.Target.charAt(0)&&-1<D.Target.indexOf(".")&&(F=no(D.Target.slice(1)),D.Target="#"+F[0]+"!"+F[1])}break
case"table-protection":case"data-pilot-grand-total":case"office-document-common-attrs":break
default:switch(o[2]){case"dc:":case"calcext:":case"loext:":case"ooo:":case"chartooo:":case"draw:":case"style:":case"chart:":case"form:":case"uof:":case"表:":case"字:":break
default:if(r.WTF)throw new Error(o)}}var G={Sheets:g,SheetNames:m,Workbook:O}
return r.bookSheets&&delete G.Sheets,G})
function pc(e,t){t=t||{}
var r=!!P(e,"objectdata")
r&&function(e,t){for(var r,n,a=Dl(e);r=Fl.exec(a);)switch(r[3]){case"manifest":break
case"file-entry":if("/"==(n=ve(r[0],!1)).path&&n.type!==Jr)throw new Error("This OpenDocument is not a spreadsheet")
break
case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption")
default:if(t&&t.WTF)throw r}}(M(e,"META-INF/manifest.xml"),t)
var n=U(e,"content.xml")
if(!n)throw new Error("Missing content.xml in "+(r?"ODS":"UOF")+" file")
var a=dc(r?n:Re(n),t)
return P(e,"meta.xml")&&(a.Props=an(M(e,"meta.xml"))),a}function gc(e,t){return dc(e,t)}var mc,bc,vc,wc=(mc="<office:document-styles "+Ye({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","office:version":"1.2"})+"></office:document-styles>",function(){return W+mc}),Cc=(bc="          <table:table-cell />\n",vc=function(e,t,r){var n=[]
n.push('      <table:table table:name="'+_e(t.SheetNames[r])+'">\n')
var a=0,s=0,i=Kt(e["!ref"]),o=e["!merges"]||[],l=0,c=Array.isArray(e)
for(a=0;a<i.s.r;++a)n.push("        <table:table-row></table:table-row>\n")
for(;a<=i.e.r;++a){for(n.push("        <table:table-row>\n"),s=0;s<i.s.c;++s)n.push(bc)
for(;s<=i.e.c;++s){var f=!1,h={},u=""
for(l=0;l!=o.length;++l)if(!(o[l].s.c>s||o[l].s.r>a||o[l].e.c<s||o[l].e.r<a)){o[l].s.c==s&&o[l].s.r==a||(f=!0),h["table:number-columns-spanned"]=o[l].e.c-o[l].s.c+1,h["table:number-rows-spanned"]=o[l].e.r-o[l].s.r+1
break}if(f)n.push("          <table:covered-table-cell/>\n")
else{var d=Yt({r:a,c:s}),p=c?(e[a]||[])[s]:e[d]
if(p&&p.f&&(h["table:formula"]=_e(("of:="+p.f.replace(fi,"$1[.$2$3$4$5]").replace(/\]:\[/g,":")).replace(/;/g,"|").replace(/,/g,";")),p.F&&p.F.slice(0,d.length)==d)){var g=Kt(p.F)
h["table:number-matrix-columns-spanned"]=g.e.c-g.s.c+1,h["table:number-matrix-rows-spanned"]=g.e.r-g.s.r+1}if(p){switch(p.t){case"b":u=p.v?"TRUE":"FALSE",h["office:value-type"]="boolean",h["office:boolean-value"]=p.v?"true":"false"
break
case"n":u=p.w||String(p.v||0),h["office:value-type"]="float",h["office:value"]=p.v||0
break
case"s":case"str":u=p.v,h["office:value-type"]="string"
break
case"d":u=p.w||K(p.v).toISOString(),h["office:value-type"]="date",h["office:date-value"]=K(p.v).toISOString(),h["table:style-name"]="ce1"
break
default:n.push(bc)
continue}var m=_e(u).replace(/  +/g,function(e){return'<text:s text:c="'+e.length+'"/>'}).replace(/\t/g,"<text:tab/>").replace(/\n/g,"<text:line-break/>").replace(/^ /,"<text:s/>").replace(/ $/,"<text:s/>")
if(p.l&&p.l.Target){var b=p.l.Target
m=Ke("text:a",m,{"xlink:href":b="#"==b.charAt(0)?"#"+b.slice(1).replace(/\./,"!"):b})}n.push("          "+Ke("table:table-cell",Ke("text:p",m,{}),h)+"\n")}else n.push(bc)}}n.push("        </table:table-row>\n")}return n.push("      </table:table>\n"),n.join("")},function(e,t){var r,n=[W],a=Ye({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:meta":"urn:oasis:names:tc:opendocument:xmlns:meta:1.0","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:presentation":"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:chart":"urn:oasis:names:tc:opendocument:xmlns:chart:1.0","xmlns:dr3d":"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0","xmlns:math":"http://www.w3.org/1998/Math/MathML","xmlns:form":"urn:oasis:names:tc:opendocument:xmlns:form:1.0","xmlns:script":"urn:oasis:names:tc:opendocument:xmlns:script:1.0","xmlns:ooo":"http://openoffice.org/2004/office","xmlns:ooow":"http://openoffice.org/2004/writer","xmlns:oooc":"http://openoffice.org/2004/calc","xmlns:dom":"http://www.w3.org/2001/xml-events","xmlns:xforms":"http://www.w3.org/2002/xforms","xmlns:xsd":"http://www.w3.org/2001/XMLSchema","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:sheet":"urn:oasis:names:tc:opendocument:sh33tjs:1.0","xmlns:rpt":"http://openoffice.org/2005/report","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","xmlns:xhtml":"http://www.w3.org/1999/xhtml","xmlns:grddl":"http://www.w3.org/2003/g/data-view#","xmlns:tableooo":"http://openoffice.org/2009/table","xmlns:drawooo":"http://openoffice.org/2010/draw","xmlns:calcext":"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0","xmlns:loext":"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0","xmlns:field":"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0","xmlns:formx":"urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0","xmlns:css3t":"http://www.w3.org/TR/css3-text/","office:version":"1.2"}),s=Ye({"xmlns:config":"urn:oasis:names:tc:opendocument:xmlns:config:1.0","office:mimetype":"application/vnd.oasis.opendocument.spreadsheet"})
"fods"==t.bookType?n.push("<office:document"+a+s+">\n"):n.push("<office:document-content"+a+">\n"),(r=n).push(" <office:automatic-styles>\n"),r.push('  <number:date-style style:name="N37" number:automatic-order="true">\n'),r.push('   <number:month number:style="long"/>\n'),r.push("   <number:text>/</number:text>\n"),r.push('   <number:day number:style="long"/>\n'),r.push("   <number:text>/</number:text>\n"),r.push("   <number:year/>\n"),r.push("  </number:date-style>\n"),r.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'),r.push(" </office:automatic-styles>\n"),n.push("  <office:body>\n"),n.push("    <office:spreadsheet>\n")
for(var i=0;i!=e.SheetNames.length;++i)n.push(vc(e.Sheets[e.SheetNames[i]],e,i))
return n.push("    </office:spreadsheet>\n"),n.push("  </office:body>\n"),"fods"==t.bookType?n.push("</office:document>"):n.push("</office:document-content>"),n.join("")})
function Ec(e,t){if("fods"==t.bookType)return Cc(e,t)
var r=new I,n="",a=[],s=[]
return n="mimetype",r.file(n,"application/vnd.oasis.opendocument.spreadsheet"),n="content.xml",r.file(n,Cc(e,t)),a.push([n,"text/xml"]),s.push([n,"ContentFile"]),n="styles.xml",r.file(n,wc(e,t)),a.push([n,"text/xml"]),s.push([n,"StylesFile"]),n="meta.xml",r.file(n,tn()),a.push([n,"text/xml"]),s.push([n,"MetadataFile"]),n="manifest.rdf",r.file(n,function(e){var t,r,n=[W]
n.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n')
for(var a=0;a!=e.length;++a)n.push(qr(e[a][0],e[a][1])),n.push((t="",r=e[a][0],['  <rdf:Description rdf:about="'+t+'">\n','    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="'+r+'"/>\n',"  </rdf:Description>\n"].join("")))
return n.push(qr("","Document","pkg")),n.push("</rdf:RDF>"),n.join("")}(s)),a.push([n,"application/rdf+xml"]),n="META-INF/manifest.xml",r.file(n,function(e){var t=[W]
t.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'),t.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n')
for(var r=0;r<e.length;++r)t.push('  <manifest:file-entry manifest:full-path="'+e[r][0]+'" manifest:media-type="'+e[r][1]+'"/>\n')
return t.push("</manifest:manifest>"),t.join("")}(a)),r}function Sc(n){return function(e,t){var r=function(e,t){if(!t)return 0
var r=e.SheetNames.indexOf(t)
if(-1==r)throw new Error("Sheet not found: "+t)
return r}(e,t.sheet)
return n.from_sheet(e.Sheets[e.SheetNames[r]],t,e)}}var Ac=Sc(cc),_c=Sc({from_sheet:rf}),Bc=Sc(ka),Tc=Sc(xa),yc=Sc(Ra),kc=Sc(ss),xc=Sc({from_sheet:nf}),Ic=Sc(ya),Rc=Sc(Ia)
function Oc(n){return function(e){for(var t=0;t!=n.length;++t){var r=n[t]
void 0===e[r[0]]&&(e[r[0]]=r[1]),"n"===r[2]&&(e[r[0]]=Number(e[r[0]]))}}}var Dc=Oc([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]]),Fc=Oc([["cellDates",!1],["bookSST",!1],["bookType","xlsx"],["compression",!1],["WTF",!1]])
function Pc(r,e){if(!r)return 0
try{r=e.map(function(e){return e.id||(e.id=e.strRelID),[e.name,r["!id"][e.id].Target,(t=r["!id"][e.id].Type,-1<jr.WS.indexOf(t)?"sheet":jr.CS&&t==jr.CS?"chart":jr.DS&&t==jr.DS?"dialog":jr.MS&&t==jr.MS?"macro":t&&t.length?t:"sheet")]
var t})}catch(e){return null}return r&&0!==r.length?r:null}function Nc(e,t,r,n,a,s,i,o,l,c,f,h){try{s[n]=Kr(U(e,r,!0),t)
var u,d=M(e,t)
switch(o){case"sheet":u=pl(d,t,a,l,s[n],c,f,h)
break
case"chart":if(!(u=gl(d,t,a,l,s[n],c))||!u["!chart"])break
var p=H(u["!chart"].Target,t),g=Yr(p),m=H(function(e,t){if(!e)return"??"
var r=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1]
return t["!id"][r].Target}(U(e,p,!0),Kr(U(e,g,!0),p)),p),b=Yr(m)
u=Jo(U(e,m,!0),0,0,Kr(U(e,b,!0),m),0,u)
break
case"macro":w=t,s[n],w.slice(-4),u={"!type":"macro"}
break
case"dialog":v=t,s[n],v.slice(-4),u={"!type":"dialog"}}i[n]=u}catch(e){if(l.WTF)throw e}var v,w}function Lc(e){return"/"==e.charAt(0)?e.slice(1):e}function Mc(t,r){if(ce(de),Dc(r=r||{}),P(t,"META-INF/manifest.xml"))return pc(t,r)
if(P(t,"objectdata.xml"))return pc(t,r)
if(P(t,"Index/Document.iwa"))throw new Error("Unsupported NUMBERS file")
var e,n,a=function(e){for(var t=me(e.files),r=[],n=0;n<t.length;++n)"/"!=t[n].slice(-1)&&r.push(t[n])
return r.sort()}(t),s=function(e){var r={workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],TODO:[],xmlns:""}
if(!e||!e.match)return r
var n={}
if((e.match(z)||[]).forEach(function(e){var t=ve(e)
switch(t[0].replace(X,"<")){case"<?xml":break
case"<Types":r.xmlns=t["xmlns"+(t[0].match(/<(\w+):/)||["",""])[1]]
break
case"<Default":n[t.Extension]=t.ContentType
break
case"<Override":void 0!==r[Wr[t.ContentType]]&&r[Wr[t.ContentType]].push(t.PartName)}}),r.xmlns!==Je.CT)throw new Error("Unknown Namespace: "+r.xmlns)
return r.calcchain=0<r.calcchains.length?r.calcchains[0]:"",r.sst=0<r.strs.length?r.strs[0]:"",r.style=0<r.styles.length?r.styles[0]:"",r.defaults=n,delete r.calcchains,r}(U(t,"[Content_Types].xml")),i=!1
if(0===s.workbooks.length&&M(t,n="xl/workbook.xml",!0)&&s.workbooks.push(n),0===s.workbooks.length){if(!M(t,n="xl/workbook.bin",!0))throw new Error("Could not find workbook")
s.workbooks.push(n),i=!0}"bin"==s.workbooks[0].slice(-3)&&(i=!0)
var o,l={},c={}
if(!r.bookSheets&&!r.bookProps){if(ao=[],s.sst)try{ao=bl(M(t,Lc(s.sst)),s.sst,r)}catch(e){if(r.WTF)throw e}r.cellStyles&&s.themes.length&&(o=U(t,s.themes[0].replace(/^\//,""),!0)||"",s.themes[0],l=Qs(o,r)),s.style&&(c=ml(M(t,Lc(s.style)),s.style,l,r))}s.links.map(function(e){return Cl(M(t,Lc(e)),e,r)})
var f,h,u,d,p=dl(M(t,Lc(s.workbooks[0])),s.workbooks[0],r),g={},m=""
s.coreprops.length&&((m=M(t,Lc(s.coreprops[0]),!0))&&(g=an(m)),0!==s.extprops.length&&(m=M(t,Lc(s.extprops[0]),!0))&&(u=r,d={},(h=g)||(h={}),f=Re(f=m),ln.forEach(function(e){switch(e[2]){case"string":h[e[1]]=(f.match(Ue(e[0]))||[])[1]
break
case"bool":h[e[1]]="true"===(f.match(Ue(e[0]))||[])[1]
break
case"raw":var t=f.match(new RegExp("<"+e[0]+"[^>]*>([\\s\\S]*?)</"+e[0]+">"))
t&&0<t.length&&(d[e[1]]=t[1])}}),d.HeadingPairs&&d.TitlesOfParts&&cn(d.HeadingPairs,d.TitlesOfParts,h,u)))
var b={}
r.bookSheets&&!r.bookProps||0!==s.custprops.length&&(m=U(t,Lc(s.custprops[0]),!0))&&(b=function(e,t){var r={},n="",a=e.match(hn)
if(a)for(var s=0;s!=a.length;++s){var i=a[s],o=ve(i)
switch(o[0]){case"<?xml":case"<Properties":break
case"<property":n=o.name
break
case"</property>":n=null
break
default:if(0===i.indexOf("<vt:")){var l=i.split(">"),c=l[0].slice(4),f=l[1]
switch(c){case"lpstr":case"bstr":case"lpwstr":r[n]=Ee(f)
break
case"bool":r[n]=Ie(f)
break
case"i1":case"i2":case"i4":case"i8":case"int":case"uint":r[n]=parseInt(f,10)
break
case"r4":case"r8":case"decimal":r[n]=parseFloat(f)
break
case"filetime":case"date":r[n]=K(f)
break
case"cy":case"error":r[n]=Ee(f)
break
default:if("/"==c.slice(-1))break
t.WTF&&"undefined"!=typeof console&&console.warn("Unexpected",i,c,l)}}else if("</"===i.slice(0,2));else if(t.WTF)throw new Error(i)}}return r}(m,r))
var v={}
if((r.bookSheets||r.bookProps)&&(p.Sheets?e=p.Sheets.map(function(e){return e.name}):g.Worksheets&&0<g.SheetNames.length&&(e=g.SheetNames),r.bookProps&&(v.Props=g,v.Custprops=b),r.bookSheets&&void 0!==e&&(v.SheetNames=e),r.bookSheets?v.SheetNames:r.bookProps))return v
e={}
var w={}
r.bookDeps&&s.calcchain&&(w=wl(M(t,Lc(s.calcchain)),s.calcchain))
var C,E,S=0,A={},_=p.Sheets
g.Worksheets=_.length,g.SheetNames=[]
for(var B=0;B!=_.length;++B)g.SheetNames[B]=_[B].name
var T=i?"bin":"xml",y=s.workbooks[0].lastIndexOf("/"),k=(s.workbooks[0].slice(0,y+1)+"_rels/"+s.workbooks[0].slice(y+1)+".rels").replace(/^\//,"")
P(t,k)||(k="xl/_rels/workbook."+T+".rels")
var x=Kr(U(t,k,!0),k)
x&&(x=Pc(x,p.Sheets))
var I=M(t,"xl/worksheets/sheet.xml",!0)?1:0
for(S=0;S!=g.Worksheets;++S){var R="sheet"
x&&x[S]?(C="xl/"+x[S][1].replace(/[\/]?xl\//,""),P(t,C)||(C=x[S][1]),P(t,C)||(C=k.replace(/_rels\/.*$/,"")+x[S][1]),R=x[S][2]):C=(C="xl/worksheets/sheet"+(S+1-I)+"."+T).replace(/sheet0\./,"sheet."),E=C.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),Nc(t,C,E,g.SheetNames[S],S,A,e,R,r,p,l,c)}return s.comments&&function(e,t,r,n,a){for(var s=0;s!=t.length;++s){var i=t[s],o=vl(M(e,i.replace(/^\//,""),!0),i,a)
if(o&&o.length)for(var l=me(r),c=0;c!=l.length;++c){var f=l[c],h=n[f]
h&&h[i]&&ni(0,r[f],o)}}}(t,s.comments,e,A,r),v={Directory:s,Workbook:p,Props:g,Custprops:b,Deps:w,Sheets:e,SheetNames:g.SheetNames,Strings:ao,Styles:c,Themes:l,SSF:de.get_table()},r.bookFiles&&(v.keys=a,v.files=t.files),r.bookVBA&&(0<s.vba.length?v.vbaraw=M(t,Lc(s.vba[0]),!0):s.defaults&&s.defaults.bin===oi&&(v.vbaraw=M(t,"xl/vbaProject.bin",!0))),v}function Uc(e,t){var r,n,a=t||{},s="Workbook",i=ge.find(e,s)
try{if(s="/!DataSpaces/Version",!(i=ge.find(e,s))||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s)
if(r=i.content,(n={}).id=r.read_shift(0,"lpp4"),n.R=Ga(r,4),n.U=Ga(r,4),n.W=Ga(r,4),s="/!DataSpaces/DataSpaceMap",!(i=ge.find(e,s))||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s)
var o=function(e){var t=[]
e.l+=4
for(var r=e.read_shift(4);0<r--;)t.push(ja(e))
return t}(i.content)
if(1!==o.length||1!==o[0].comps.length||0!==o[0].comps[0].t||"StrongEncryptionDataSpace"!==o[0].name||"EncryptedPackage"!==o[0].comps[0].v)throw new Error("ECMA-376 Encrypted file bad "+s)
if(s="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace",!(i=ge.find(e,s))||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s)
var l=function(e){var t=[]
e.l+=4
for(var r=e.read_shift(4);0<r--;)t.push(e.read_shift(0,"lpp4"))
return t}(i.content)
if(1!=l.length||"StrongEncryptionTransform"!=l[0])throw new Error("ECMA-376 Encrypted file bad "+s)
if(s="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary",!(i=ge.find(e,s))||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s)
Ya(i.content)}catch(e){}if(s="/EncryptionInfo",!(i=ge.find(e,s))||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s)
var c=Za(i.content)
if(s="/EncryptedPackage",!(i=ge.find(e,s))||!i.content)throw new Error("ECMA-376 Encrypted file missing "+s)
if(4==c[0]&&"undefined"!=typeof decrypt_agile)return decrypt_agile(c[1],i.content,a.password||"",a)
if(2==c[0]&&"undefined"!=typeof decrypt_std76)return decrypt_std76(c[1],i.content,a.password||"",a)
throw new Error("File is password-protected")}function Hc(e,t){if(ti=1024,"ods"==t.bookType)return Ec(e,t)
e&&!e.SSF&&(e.SSF=de.get_table()),e&&e.SSF&&(ce(de),de.load_table(e.SSF),t.revssf=A(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF),t.rels={},t.wbrels={},t.Strings=[],t.Strings.Count=0,t.Strings.Unique=0,io?t.revStrings=new Map:(t.revStrings={},t.revStrings.foo=[],delete t.revStrings.foo)
var r="xlsb"==t.bookType?"bin":"xml",n=-1<li.indexOf(t.bookType),a={workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],TODO:[],xmlns:""}
Fc(t=t||{})
var s,i,o,l,c,f,h,u,d,p=new I,g="",m=0
if(t.cellXfs=[],fo(t.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),g="docProps/core.xml",p.file(g,function(e,t){var r=t||{},n=[W,sn],a={}
if(!e&&!r.Props)return n.join("")
e&&(null!=e.CreatedDate&&on("dcterms:created","string"==typeof e.CreatedDate?e.CreatedDate:$e(e.CreatedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a),null!=e.ModifiedDate&&on("dcterms:modified","string"==typeof e.ModifiedDate?e.ModifiedDate:$e(e.ModifiedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a))
for(var s=0;s!=rn.length;++s){var i=rn[s],o=r.Props&&null!=r.Props[i[1]]?r.Props[i[1]]:e?e[i[1]]:null
!0===o?o="1":!1===o?o="0":"number"==typeof o&&(o=String(o)),null!=o&&on(i[0],o,null,n,a)}return 2<n.length&&(n[n.length]="</cp:coreProperties>",n[1]=n[1].replace("/>",">")),n.join("")}(e.Props,t)),a.coreprops.push(g),Qr(t.rels,2,g,jr.CORE_PROPS),g="docProps/app.xml",e.Props&&e.Props.SheetNames);else if(e.Workbook&&e.Workbook.Sheets){for(var b=[],v=0;v<e.SheetNames.length;++v)2!=(e.Workbook.Sheets[v]||{}).Hidden&&b.push(e.SheetNames[v])
e.Props.SheetNames=b}else e.Props.SheetNames=e.SheetNames
for(e.Props.Worksheets=e.Props.SheetNames.length,p.file(g,(s=e.Props,i=[],o=Ke,s||(s={}),s.Application="SheetJS",i[i.length]=W,i[i.length]=fn,ln.forEach(function(e){if(void 0!==s[e[1]]){var t
switch(e[2]){case"string":t=String(s[e[1]])
break
case"bool":t=s[e[1]]?"true":"false"}void 0!==t&&(i[i.length]=o(e[0],t))}}),i[i.length]=o("HeadingPairs",o("vt:vector",o("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+o("vt:variant",o("vt:i4",String(s.Worksheets))),{size:2,baseType:"variant"})),i[i.length]=o("TitlesOfParts",o("vt:vector",s.SheetNames.map(function(e){return"<vt:lpstr>"+_e(e)+"</vt:lpstr>"}).join(""),{size:s.Worksheets,baseType:"lpstr"})),2<i.length&&(i[i.length]="</Properties>",i[1]=i[1].replace("/>",">")),i.join(""))),a.extprops.push(g),Qr(t.rels,3,g,jr.EXT_PROPS),e.Custprops!==e.Props&&0<me(e.Custprops||{}).length&&(g="docProps/custom.xml",p.file(g,dn(e.Custprops)),a.custprops.push(g),Qr(t.rels,4,g,jr.CUST_PROPS)),m=1;m<=e.SheetNames.length;++m){var w={"!id":{}},C=e.Sheets[e.SheetNames[m-1]]
switch((C||{})["!type"]||"sheet"){case"chart":default:g="xl/worksheets/sheet"+m+"."+r,p.file(g,(l=m-1,c=t,f=e,h=w,(".bin"===g.slice(-4)?Qo:No)(l,c,f,h))),a.sheets.push(g),Qr(t.wbrels,-1,"worksheets/sheet"+m+"."+r,jr.WS[0])}if(C){var E=C["!comments"]
if(E&&0<E.length){var S="xl/comments"+m+"."+r
p.file(S,Al(E,S,t)),a.comments.push(S),Qr(w,-1,"../comments"+m+"."+r,jr.CMNT)}C["!legacy"]&&p.file("xl/drawings/vmlDrawing"+m+".vml",ri(m,C["!comments"])),delete C["!comments"],delete C["!legacy"]}w["!id"].rId1&&p.file(Yr(g),Zr(w))}return null!=t.Strings&&0<t.Strings.length&&(g="xl/sharedStrings."+r,p.file(g,Sl(t.Strings,g,t)),a.strs.push(g),Qr(t.wbrels,-1,"sharedStrings."+r,jr.SST)),g="xl/workbook."+r,p.file(g,El(e,g,t)),a.workbooks.push(g),Qr(t.rels,1,g,jr.WB),g="xl/theme/theme1.xml",p.file(g,Js(e.Themes,t)),a.themes.push(g),Qr(t.wbrels,-1,"theme/theme1.xml",jr.THEME),g="xl/styles."+r,p.file(g,(u=e,d=t,(".bin"===g.slice(-4)?zs:Rs)(u,d))),a.styles.push(g),Qr(t.wbrels,-1,"styles."+r,jr.STY),e.vbaraw&&n&&(g="xl/vbaProject.bin",p.file(g,e.vbaraw),a.vba.push(g),Qr(t.wbrels,-1,"vbaProject.bin",jr.VBA)),p.file("[Content_Types].xml",function(r,n){var t,a=[]
a[a.length]=W,a[a.length]=Xr,a=a.concat(Gr)
var e=function(e){r[e]&&0<r[e].length&&(t=r[e][0],a[a.length]=Ke("Override",null,{PartName:("/"==t[0]?"":"/")+t,ContentType:Vr[e][n.bookType||"xlsx"]}))},s=function(t){(r[t]||[]).forEach(function(e){a[a.length]=Ke("Override",null,{PartName:("/"==e[0]?"":"/")+e,ContentType:Vr[t][n.bookType||"xlsx"]})})},i=function(t){(r[t]||[]).forEach(function(e){a[a.length]=Ke("Override",null,{PartName:("/"==e[0]?"":"/")+e,ContentType:zr[t][0]})})}
return e("workbooks"),s("sheets"),s("charts"),i("themes"),["strs","styles"].forEach(e),["coreprops","extprops","custprops"].forEach(i),i("vba"),i("comments"),i("drawings"),2<a.length&&(a[a.length]="</Types>",a[1]=a[1].replace("/>",">")),a.join("")}(a,t)),p.file("_rels/.rels",Zr(t.rels)),p.file("xl/_rels/workbook."+r+".rels",Zr(t.wbrels)),delete t.revssf,delete t.ssf,p}function Wc(e,t){var r=""
switch((t||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3]]
case"base64":r=q.decode(e.slice(0,24))
break
case"binary":r=e
break
case"array":return[e[0],e[1],e[2],e[3]]
default:throw new Error("Unrecognized type "+(t&&t.type||"undefined"))}return[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3)]}function Vc(e,t){var r=0
e:for(;r<e.length;)switch(e.charCodeAt(r)){case 10:case 13:case 32:++r
break
case 60:return Nl(e.slice(r),t)
default:break e}return Ra.to_workbook(e,t)}function zc(e,t,r,n){return n?(r.type="string",Ra.to_workbook(e,r)):Ra.to_workbook(t,r)}function Xc(e,t){if(d(),"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer)return Xc(new Uint8Array(e),t)
var r,n,a,s,i,o,l=e,c=!1,f=t||{}
if(so={},f.dateNF&&(so.dateNF=f.dateNF),f.type||(f.type=ee&&ff.isBuffer(e)?"buffer":"base64"),"file"==f.type&&(f.type=ee?"buffer":"binary",l=function(e){if(void 0!==b)return b.readFileSync(e)
if("undefined"!=typeof $&&"undefined"!=typeof File&&"undefined"!=typeof Folder)try{var t=File(e)
t.open("r"),t.encoding="binary"
var r=t.read()
return t.close(),r}catch(e){if(!e.message||!e.message.match(/onstruct/))throw e}throw new Error("Cannot access file "+e)}(e)),"string"==f.type&&(c=!0,f.type="binary",f.codepage=65001,l=(n=e).match(/[^\x00-\x7F]/)?Oe(n):n),"array"==f.type&&"undefined"!=typeof Uint8Array&&e instanceof Uint8Array&&"undefined"!=typeof ArrayBuffer){var h=new ArrayBuffer(3),u=new Uint8Array(h)
if(u.foo="bar",!u.foo)return(f=be(f)).type="array",Xc(m(l),f)}switch((r=Wc(l,f))[0]){case 208:return i=ge.read(l,f),o=f,ge.find(i,"EncryptedPackage")?Uc(i,o):Kl(i,o)
case 9:return Kl(l,f)
case 60:return Nl(l,f)
case 73:if(68===r[1])return function(t,r){var n=r||{},a=!!n.WTF
n.WTF=!0
try{var e=ka.to_workbook(t,n)
return n.WTF=a,e}catch(e){if(n.WTF=a,!e.message.match(/SYLK bad record ID/)&&a)throw e
return Ra.to_workbook(t,r)}}(l,f)
break
case 84:if(65===r[1]&&66===r[2]&&76===r[3])return xa.to_workbook(l,f)
break
case 80:return 75===r[1]&&r[2]<9&&r[3]<9?function(e,t){var r,n=e,a=t||{}
switch(a.type||(a.type=ee&&ff.isBuffer(e)?"buffer":"base64"),a.type){case"base64":r=new I(n,{base64:!0})
break
case"binary":case"array":r=new I(n,{base64:!1})
break
case"buffer":r=new I(n)
break
default:throw new Error("Unrecognized type "+a.type)}return Mc(r,a)}(l,f):zc(e,l,f,c)
case 239:return 60===r[3]?Nl(l,f):zc(e,l,f,c)
case 255:if(254===r[1])return s=l,"base64"==(a=f).type&&(s=q.decode(s)),s=cptable.utils.decode(1200,s.slice(2),"str"),a.type="binary",Vc(s,a)
break
case 0:if(0===r[1]&&2<=r[2]&&0===r[3])return Oa.to_workbook(l,f)
break
case 3:case 131:case 139:case 140:return ya.to_workbook(l,f)
case 123:if(92===r[1]&&114===r[2]&&116===r[3])return ss.to_workbook(l,f)
break
case 10:case 13:case 32:return function(e,t){var r="",n=Wc(e,t)
switch(t.type){case"base64":r=q.decode(e)
break
case"binary":r=e
break
case"buffer":r=e.toString("binary")
break
case"array":r=y(e)
break
default:throw new Error("Unrecognized type "+t.type)}return 239==n[0]&&187==n[1]&&191==n[2]&&(r=Re(r)),Vc(r,t)}(l,f)}return r[2]<=12&&r[3]<=31?ya.to_workbook(l,f):zc(e,l,f,c)}function Gc(e,t){var r=t||{}
return r.type="file",Xc(e,r)}function jc(e,t){switch(t.type){case"base64":case"binary":break
case"buffer":case"array":t.type=""
break
case"file":return v(t.file,ge.write(e,{type:ee?"buffer":""}))
case"string":throw new Error("'string' output type invalid for '"+t.bookType+"' files")
default:throw new Error("Unrecognized type "+t.type)}return ge.write(e,t)}function Yc(e,t,r){r||(r="")
var n=r+e
switch(t.type){case"base64":return q.encode(Oe(n))
case"binary":return Oe(n)
case"string":return e
case"file":return v(t.file,n,"utf8")
case"buffer":return ee?s(n,"utf8"):Yc(n,{type:"binary"}).split("").map(function(e){return e.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}function Kc(e,t){switch(t.type){case"string":case"base64":case"binary":for(var r="",n=0;n<e.length;++n)r+=String.fromCharCode(e[n])
return"base64"==t.type?q.encode(r):"string"==t.type?Re(r):r
case"file":return v(t.file,e)
case"buffer":return e
default:throw new Error("Unrecognized type "+t.type)}}function $c(e,t){ll(e)
var r,n=t||{}
if("array"==n.type){n.type="binary"
var a=$c(e,n)
return n.type="array",i(a)}switch(n.bookType||"xlsb"){case"xml":case"xlml":return Yc(Wl(e,n),n)
case"slk":case"sylk":return Yc(Bc(e,n),n)
case"htm":case"html":return Yc(Ac(e,n),n)
case"txt":return function(e,t){switch(t.type){case"base64":return q.encode(e)
case"binary":case"string":return e
case"file":return v(t.file,e,"binary")
case"buffer":return ee?s(e,"binary"):e.split("").map(function(e){return e.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}(xc(e,n),n)
case"csv":return Yc(_c(e,n),n,"\ufeff")
case"dif":return Yc(Tc(e,n),n)
case"dbf":return Kc(Ic(e,n),n)
case"prn":return Yc(yc(e,n),n)
case"rtf":return Yc(kc(e,n),n)
case"eth":return Yc(Rc(e,n),n)
case"fods":return Yc(Ec(e,n),n)
case"biff2":n.biff||(n.biff=2)
case"biff3":n.biff||(n.biff=3)
case"biff4":return n.biff||(n.biff=4),Kc(lc(e,n),n)
case"biff5":n.biff||(n.biff=5)
case"biff8":case"xla":case"xls":return n.biff||(n.biff=8),jc($l(e,r=n||{}),r)
case"xlsx":case"xlsm":case"xlam":case"xlsb":case"ods":return function(e,t){var r=t||{},n=Hc(e,r),a={}
if(r.compression&&(a.compression="DEFLATE"),r.password)a.type=ee?"nodebuffer":"string"
else switch(r.type){case"base64":a.type="base64"
break
case"binary":a.type="string"
break
case"string":throw new Error("'string' output type invalid for '"+r.bookType+"' files")
case"buffer":case"file":a.type=ee?"nodebuffer":"string"
break
default:throw new Error("Unrecognized type "+r.type)}var s=n.generate(a)
return r.password&&"undefined"!=typeof encrypt_agile?jc(encrypt_agile(s,r.password),r):"file"===r.type?v(r.file,s):"string"==r.type?Re(s):s}(e,n)
default:throw new Error("Unrecognized bookType |"+n.bookType+"|")}}function Zc(e){if(!e.bookType){var t=e.file.slice(e.file.lastIndexOf(".")).toLowerCase()
t.match(/^\.[a-z]+$/)&&(e.bookType=t.slice(1)),e.bookType={xls:"biff8",htm:"html",slk:"sylk",socialcalc:"eth",Sh33tJS:"WTF"}[e.bookType]||e.bookType}}function Qc(e,t,r){var n=r||{}
return n.type="file",n.file=t,Zc(n),$c(e,n)}function Jc(e,t,r,n,a,s,i,o){var l=Vt(r),c=o.defval,f=o.raw||!o.hasOwnProperty("raw"),h=!0,u=1===a?[]:{}
if(1!==a)if(Object.defineProperty)try{Object.defineProperty(u,"__rowNum__",{value:r,enumerable:!1})}catch(e){u.__rowNum__=r}else u.__rowNum__=r
if(!i||e[r])for(var d=t.s.c;d<=t.e.c;++d){var p=i?e[r][d]:e[n[d]+l]
if(void 0!==p&&void 0!==p.t){var g=p.v
switch(p.t){case"z":if(null==g)break
continue
case"e":g=void 0
break
case"s":case"d":case"b":case"n":break
default:throw new Error("unrecognized type "+p.t)}if(null!=s[d]){if(null==g)if(void 0!==c)u[s[d]]=c
else{if(!f||null!==g)continue
u[s[d]]=null}else u[s[d]]=f?g:Jt(p,g,o)
null!=g&&(h=!1)}}else{if(void 0===c)continue
null!=s[d]&&(u[s[d]]=c)}}return{row:u,isempty:h}}function qc(e,t){if(null==e||null==e["!ref"])return[]
var r={t:"n",v:0},n=0,a=1,s=[],i=0,o="",l={s:{r:0,c:0},e:{r:0,c:0}},c=t||{},f=null!=c.range?c.range:e["!ref"]
switch(1===c.header?n=1:"A"===c.header?n=2:Array.isArray(c.header)&&(n=3),uf(f)){case"string":l=Zt(f)
break
case"number":(l=Zt(e["!ref"])).s.r=f
break
default:l=f}0<n&&(a=0)
var h=Vt(l.s.r),u=[],d=[],p=0,g=0,m=Array.isArray(e),b=l.s.r,v=0,w=0
for(m&&!e[b]&&(e[b]=[]),v=l.s.c;v<=l.e.c;++v)switch(u[v]=Xt(v),r=m?e[b][v]:e[u[v]+h],n){case 1:s[v]=v-l.s.c
break
case 2:s[v]=u[v]
break
case 3:s[v]=c.header[v-l.s.c]
break
default:for(null==r&&(r={w:"__EMPTY",t:"s"}),o=i=Jt(r,null,c),w=g=0;w<s.length;++w)s[w]==o&&(o=i+"_"+ ++g)
s[v]=o}for(b=l.s.r+a;b<=l.e.r;++b){var C=Jc(e,l,b,u,n,s,m,c);(!1===C.isempty||(1===n?!1!==c.blankrows:c.blankrows))&&(d[p++]=C.row)}return d.length=p,d}var ef=/"/g
function tf(e,t,r,n,a,s,i,o){for(var l=!0,c=[],f="",h=Vt(r),u=t.s.c;u<=t.e.c;++u)if(n[u]){var d=o.dense?(e[r]||[])[u]:e[n[u]+h]
if(null==d)f=""
else if(null!=d.v){l=!1,f=""+Jt(d,null,o)
for(var p=0,g=0;p!==f.length;++p)if((g=f.charCodeAt(p))===a||g===s||34===g){f='"'+f.replace(ef,'""')+'"'
break}"ID"==f&&(f='"ID"')}else null==d.f||d.F?f="":(l=!1,0<=(f="="+d.f).indexOf(",")&&(f='"'+f.replace(ef,'""')+'"'))
c.push(f)}return!1===o.blankrows&&l?null:c.join(i)}function rf(e,t){var r=[],n=null==t?{}:t
if(null==e||null==e["!ref"])return""
var a=Zt(e["!ref"]),s=void 0!==n.FS?n.FS:",",i=s.charCodeAt(0),o=void 0!==n.RS?n.RS:"\n",l=o.charCodeAt(0),c=new RegExp(("|"==s?"\\|":s)+"+$"),f="",h=[]
n.dense=Array.isArray(e)
for(var u=n.skipHidden&&e["!cols"]||[],d=n.skipHidden&&e["!rows"]||[],p=a.s.c;p<=a.e.c;++p)(u[p]||{}).hidden||(h[p]=Xt(p))
for(var g=a.s.r;g<=a.e.r;++g)(d[g]||{}).hidden||null!=(f=tf(e,a,g,h,i,l,s,n))&&(n.strip&&(f=f.replace(c,"")),r.push(f+o))
return delete n.dense,r.join("")}function nf(e,t){t||(t={}),t.FS="\t",t.RS="\n"
var r=rf(e,t)
if("undefined"==typeof cptable||"string"==t.type)return r
var n=cptable.utils.encode(1200,r,"str")
return String.fromCharCode(255)+String.fromCharCode(254)+n}function af(e){var t,r="",n=""
if(null==e||null==e["!ref"])return[]
var a,s=Zt(e["!ref"]),i="",o=[],l=[],c=Array.isArray(e)
for(a=s.s.c;a<=s.e.c;++a)o[a]=Xt(a)
for(var f=s.s.r;f<=s.e.r;++f)for(i=Vt(f),a=s.s.c;a<=s.e.c;++a)if(r=o[a]+i,n="",void 0!==(t=c?(e[f]||[])[a]:e[r])){if(null!=t.F){if(r=t.F,!t.f)continue
n=t.f,-1==r.indexOf(":")&&(r=r+":"+r)}if(null!=t.f)n=t.f
else{if("z"==t.t)continue
if("n"==t.t&&null!=t.v)n=""+t.v
else if("b"==t.t)n=t.v?"TRUE":"FALSE"
else if(void 0!==t.w)n="'"+t.w
else{if(void 0===t.v)continue
n="s"==t.t?"'"+t.v:""+t.v}}l[l.length]=r+"="+n}return l}function sf(e,t,r){var i,o=r||{},l=+!o.skipHeader,c=e||{},f=0,h=0
if(c&&null!=o.origin)if("number"==typeof o.origin)f=o.origin
else{var n="string"==typeof o.origin?jt(o.origin):o.origin
f=n.r,h=n.c}var a={s:{c:0,r:0},e:{c:h,r:f+t.length-1+l}}
if(c["!ref"]){var s=Zt(c["!ref"])
a.e.c=Math.max(a.e.c,s.e.c),a.e.r=Math.max(a.e.r,s.e.r),-1==f&&(f=a.e.r+1,a.e.r=f+t.length-1+l)}var u=o.header||[],d=0
t.forEach(function(a,s){me(a).forEach(function(e){-1==(d=u.indexOf(e))&&(u[d=u.length]=e)
var t=a[e],r="z",n=""
!t||"object"!==uf(t)||t instanceof Date?("number"==typeof t?r="n":"boolean"==typeof t?r="b":"string"==typeof t?r="s":t instanceof Date&&(r="d",o.cellDates||(r="n",t=j(t)),n=o.dateNF||de._table[14]),c[Yt({c:h+d,r:f+s+l})]=i={t:r,v:t},n&&(i.z=n)):c[Yt({c:h+d,r:f+s+l})]=t})}),a.e.c=Math.max(a.e.c,h+u.length-1)
var p=Vt(f)
if(l)for(d=0;d<u.length;++d)c[Xt(d+h)+p]={t:"s",v:u[d]}
return c["!ref"]=$t(a),c}var of,lf={encode_col:Xt,encode_row:Vt,encode_cell:Yt,encode_range:$t,decode_col:zt,decode_row:Wt,split_cell:Gt,decode_cell:jt,decode_range:Kt,format_cell:Jt,get_formulae:af,make_csv:rf,make_json:qc,make_formulae:af,sheet_add_aoa:er,sheet_add_json:sf,aoa_to_sheet:tr,json_to_sheet:function(e,t){return sf(null,e,t)},table_to_sheet:fc,table_to_book:function(e,t){return qt(fc(e,t),t)},sheet_to_csv:rf,sheet_to_txt:nf,sheet_to_json:qc,sheet_to_html:cc.from_sheet,sheet_to_dif:xa.from_sheet,sheet_to_slk:ka.from_sheet,sheet_to_eth:Ia.from_sheet,sheet_to_formulae:af,sheet_to_row_object_array:qc}
!function(n){function a(e,t,r){return null!=e[t]?e[t]:e[t]=r}function l(e,t,r){return"string"==typeof t?e[t]||(e[t]={t:"z"}):l(e,Yt("number"!=typeof t?t:{r:t,c:r||0}))}n.consts=n.consts||{},n.book_new=function(){return{SheetNames:[],Sheets:{}}},n.book_append_sheet=function(e,t,r){if(!r)for(var n=1;n<=65535&&-1!=e.SheetNames.indexOf(r="Sheet"+n);++n);if(!r)throw new Error("Too many worksheets")
if(ol(r),0<=e.SheetNames.indexOf(r))throw new Error("Worksheet with name |"+r+"| already exists!")
e.SheetNames.push(r),e.Sheets[r]=t},n.book_set_sheet_visibility=function(e,t,r){a(e,"Workbook",{}),a(e.Workbook,"Sheets",[])
var n=function(e,t){if("number"==typeof t){if(0<=t&&e.SheetNames.length>t)return t
throw new Error("Cannot find sheet # "+t)}if("string"!=typeof t)throw new Error("Cannot find sheet |"+t+"|")
var r=e.SheetNames.indexOf(t)
if(-1<r)return r
throw new Error("Cannot find sheet name |"+t+"|")}(e,t)
switch(a(e.Workbook.Sheets,n,{}),r){case 0:case 1:case 2:break
default:throw new Error("Bad sheet visibility setting "+r)}e.Workbook.Sheets[n].Hidden=r},[["SHEET_VISIBLE",0],["SHEET_HIDDEN",1],["SHEET_VERY_HIDDEN",2]].forEach(function(e){n.consts[e[0]]=e[1]}),n.cell_set_number_format=function(e,t){return e.z=t,e},n.cell_set_hyperlink=function(e,t,r){return t?(e.l={Target:t},r&&(e.l.Tooltip=r)):delete e.l,e},n.cell_set_internal_link=function(e,t,r){return n.cell_set_hyperlink(e,"#"+t,r)},n.cell_add_comment=function(e,t,r){e.c||(e.c=[]),e.c.push({t:t,a:r||"SheetJS"})},n.sheet_set_array_formula=function(e,t,r){for(var n="string"!=typeof t?t:Zt(t),a="string"==typeof t?t:$t(t),s=n.s.r;s<=n.e.r;++s)for(var i=n.s.c;i<=n.e.c;++i){var o=l(e,s,i)
o.t="n",o.F=a,delete o.v,s==n.s.r&&i==n.s.c&&(o.f=r)}return e}}(lf),ee&&(of=pf(24).Readable,n.stream={to_json:function(t,e){var r=of({objectMode:!0})
if(null==t||null==t["!ref"])return r.push(null),r
var n={t:"n",v:0},a=0,s=1,i=[],o=0,l="",c={s:{r:0,c:0},e:{r:0,c:0}},f=e||{},h=null!=f.range?f.range:t["!ref"]
switch(1===f.header?a=1:"A"===f.header?a=2:Array.isArray(f.header)&&(a=3),uf(h)){case"string":c=Zt(h)
break
case"number":(c=Zt(t["!ref"])).s.r=h
break
default:c=h}0<a&&(s=0)
var u=Vt(c.s.r),d=[],p=0,g=Array.isArray(t),m=c.s.r,b=0,v=0
for(g&&!t[m]&&(t[m]=[]),b=c.s.c;b<=c.e.c;++b)switch(d[b]=Xt(b),n=g?t[m][b]:t[d[b]+u],a){case 1:i[b]=b-c.s.c
break
case 2:i[b]=d[b]
break
case 3:i[b]=f.header[b-c.s.c]
break
default:for(null==n&&(n={w:"__EMPTY",t:"s"}),l=o=Jt(n,null,f),v=p=0;v<i.length;++v)i[v]==l&&(l=o+"_"+ ++p)
i[b]=l}return m=c.s.r+s,r._read=function(){if(m>c.e.r)return r.push(null)
for(;m<=c.e.r;){var e=Jc(t,c,m,d,a,i,g,f)
if(++m,!1===e.isempty||(1===a?!1!==f.blankrows:f.blankrows)){r.push(e.row)
break}}},r},to_html:function(e,t){var r=of(),n=t||{},a=null!=n.header?n.header:cc.BEGIN,s=null!=n.footer?n.footer:cc.END
r.push(a)
var i=Kt(e["!ref"])
n.dense=Array.isArray(e),r.push(cc._preamble(e,i,n))
var o=i.s.r,l=!1
return r._read=function(){if(o>i.e.r)return l||(l=!0,r.push("</table>"+s)),r.push(null)
for(;o<=i.e.r;){r.push(cc._row(e,i,o,n)),++o
break}},r},to_csv:function(e,t){var r=of(),n=null==t?{}:t
if(null==e||null==e["!ref"])return r.push(null),r
var a=Zt(e["!ref"]),s=void 0!==n.FS?n.FS:",",i=s.charCodeAt(0),o=void 0!==n.RS?n.RS:"\n",l=o.charCodeAt(0),c=new RegExp(("|"==s?"\\|":s)+"+$"),f="",h=[]
n.dense=Array.isArray(e)
for(var u=n.skipHidden&&e["!cols"]||[],d=n.skipHidden&&e["!rows"]||[],p=a.s.c;p<=a.e.c;++p)(u[p]||{}).hidden||(h[p]=Xt(p))
var g=a.s.r,m=!1
return r._read=function(){if(!m)return m=!0,r.push("\ufeff")
if(g>a.e.r)return r.push(null)
for(;g<=a.e.r;)if(!(d[++g-1]||{}).hidden&&null!=(f=tf(e,a,g-1,h,i,l,s,n))){n.strip&&(f=f.replace(c,"")),r.push(f+o)
break}},r}}),n.parse_xlscfb=Kl,n.parse_ods=pc,n.parse_fods=gc,n.write_ods=Ec,n.parse_zip=Mc,n.read=Xc,n.readFile=Gc,n.readFileSync=Gc,n.write=$c,n.writeFile=Qc,n.writeFileSync=Qc,n.writeFileAsync=function(e,t,r,n){var a=r||{}
a.type="file",a.file=e,Zc(a),a.type="buffer"
var s=n
return s instanceof Function||(s=r),b.writeFile(e,$c(t,a),s)},n.utils=lf,n.SSF=de,n.CFB=ge})(e)}).call(this,pf(2),pf(4).Buffer,pf(21))},,,function(a,e,t){(function(R){var n={version:"1.14.0"}
n[437]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[620]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàąçêëèïîćÄĄĘęłôöĆûùŚÖÜ¢Ł¥śƒŹŻóÓńŃźż¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[737]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[850]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[852]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[857]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[861]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[865]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[866]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[874]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[895]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ČüéďäĎŤčěĚĹÍľǪÄÁÉžŽôöÓůÚýÖÜŠĽÝŘťáíóúňŇŮÔšřŕŔ¼§«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[932]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~���������������������������������｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ��������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[129]="����������������������������������������������������������������　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈〉《》「」『』【】＋－±×�÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓�����������∈∋⊆⊇⊂⊃∪∩��������∧∨￢⇒⇔∀∃�����������∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬�������Å‰♯♭♪†‡¶����◯���".split(""),e=0;e!=n[129].length;++e)65533!==n[129][e].charCodeAt(0)&&(r[n[129][e]]=33024+e,t[33024+e]=n[129][e])
for(n[130]="�������������������������������������������������������������������������������０１２３４５６７８９�������ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ�������ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ����ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん��������������".split(""),e=0;e!=n[130].length;++e)65533!==n[130][e].charCodeAt(0)&&(r[n[130][e]]=33280+e,t[33280+e]=n[130][e])
for(n[131]="����������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミ�ムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ��������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�����������������������������������������".split(""),e=0;e!=n[131].length;++e)65533!==n[131][e].charCodeAt(0)&&(r[n[131][e]]=33536+e,t[33536+e]=n[131][e])
for(n[132]="����������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмн�опрстуфхцчшщъыьэюя�������������─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂�����������������������������������������������������������������".split(""),e=0;e!=n[132].length;++e)65533!==n[132][e].charCodeAt(0)&&(r[n[132][e]]=33792+e,t[33792+e]=n[132][e])
for(n[135]="����������������������������������������������������������������①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ�㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡��������㍻�〝〟№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪���������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[135].length;++e)65533!==n[135][e].charCodeAt(0)&&(r[n[135][e]]=34560+e,t[34560+e]=n[135][e])
for(n[136]="���������������������������������������������������������������������������������������������������������������������������������������������������������������亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭���".split(""),e=0;e!=n[136].length;++e)65533!==n[136][e].charCodeAt(0)&&(r[n[136][e]]=34816+e,t[34816+e]=n[136][e])
for(n[137]="����������������������������������������������������������������院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円�園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改���".split(""),e=0;e!=n[137].length;++e)65533!==n[137][e].charCodeAt(0)&&(r[n[137][e]]=35072+e,t[35072+e]=n[137][e])
for(n[138]="����������������������������������������������������������������魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫�橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄���".split(""),e=0;e!=n[138].length;++e)65533!==n[138][e].charCodeAt(0)&&(r[n[138][e]]=35328+e,t[35328+e]=n[138][e])
for(n[139]="����������������������������������������������������������������機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救�朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈���".split(""),e=0;e!=n[139].length;++e)65533!==n[139][e].charCodeAt(0)&&(r[n[139][e]]=35584+e,t[35584+e]=n[139][e])
for(n[140]="����������������������������������������������������������������掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨�劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向���".split(""),e=0;e!=n[140].length;++e)65533!==n[140][e].charCodeAt(0)&&(r[n[140][e]]=35840+e,t[35840+e]=n[140][e])
for(n[141]="����������������������������������������������������������������后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降�項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷���".split(""),e=0;e!=n[141].length;++e)65533!==n[141][e].charCodeAt(0)&&(r[n[141][e]]=36096+e,t[36096+e]=n[141][e])
for(n[142]="����������������������������������������������������������������察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止�死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周���".split(""),e=0;e!=n[142].length;++e)65533!==n[142][e].charCodeAt(0)&&(r[n[142][e]]=36352+e,t[36352+e]=n[142][e])
for(n[143]="����������������������������������������������������������������宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳�準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾���".split(""),e=0;e!=n[143].length;++e)65533!==n[143][e].charCodeAt(0)&&(r[n[143][e]]=36608+e,t[36608+e]=n[143][e])
for(n[144]="����������������������������������������������������������������拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨�逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線���".split(""),e=0;e!=n[144].length;++e)65533!==n[144][e].charCodeAt(0)&&(r[n[144][e]]=36864+e,t[36864+e]=n[144][e])
for(n[145]="����������������������������������������������������������������繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻�操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只���".split(""),e=0;e!=n[145].length;++e)65533!==n[145][e].charCodeAt(0)&&(r[n[145][e]]=37120+e,t[37120+e]=n[145][e])
for(n[146]="����������������������������������������������������������������叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄�逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓���".split(""),e=0;e!=n[146].length;++e)65533!==n[146][e].charCodeAt(0)&&(r[n[146][e]]=37376+e,t[37376+e]=n[146][e])
for(n[147]="����������������������������������������������������������������邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬�凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入���".split(""),e=0;e!=n[147].length;++e)65533!==n[147][e].charCodeAt(0)&&(r[n[147][e]]=37632+e,t[37632+e]=n[147][e])
for(n[148]="����������������������������������������������������������������如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅�楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美���".split(""),e=0;e!=n[148].length;++e)65533!==n[148][e].charCodeAt(0)&&(r[n[148][e]]=37888+e,t[37888+e]=n[148][e])
for(n[149]="����������������������������������������������������������������鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷�斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋���".split(""),e=0;e!=n[149].length;++e)65533!==n[149][e].charCodeAt(0)&&(r[n[149][e]]=38144+e,t[38144+e]=n[149][e])
for(n[150]="����������������������������������������������������������������法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆�摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒���".split(""),e=0;e!=n[150].length;++e)65533!==n[150][e].charCodeAt(0)&&(r[n[150][e]]=38400+e,t[38400+e]=n[150][e])
for(n[151]="����������������������������������������������������������������諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲�沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯���".split(""),e=0;e!=n[151].length;++e)65533!==n[151][e].charCodeAt(0)&&(r[n[151][e]]=38656+e,t[38656+e]=n[151][e])
for(n[152]="����������������������������������������������������������������蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕��������������������������������������������弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲���".split(""),e=0;e!=n[152].length;++e)65533!==n[152][e].charCodeAt(0)&&(r[n[152][e]]=38912+e,t[38912+e]=n[152][e])
for(n[153]="����������������������������������������������������������������僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭�凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨���".split(""),e=0;e!=n[153].length;++e)65533!==n[153][e].charCodeAt(0)&&(r[n[153][e]]=39168+e,t[39168+e]=n[153][e])
for(n[154]="����������������������������������������������������������������咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸�噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩���".split(""),e=0;e!=n[154].length;++e)65533!==n[154][e].charCodeAt(0)&&(r[n[154][e]]=39424+e,t[39424+e]=n[154][e])
for(n[155]="����������������������������������������������������������������奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀�它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏���".split(""),e=0;e!=n[155].length;++e)65533!==n[155][e].charCodeAt(0)&&(r[n[155][e]]=39680+e,t[39680+e]=n[155][e])
for(n[156]="����������������������������������������������������������������廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠�怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛���".split(""),e=0;e!=n[156].length;++e)65533!==n[156][e].charCodeAt(0)&&(r[n[156][e]]=39936+e,t[39936+e]=n[156][e])
for(n[157]="����������������������������������������������������������������戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫�捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼���".split(""),e=0;e!=n[157].length;++e)65533!==n[157][e].charCodeAt(0)&&(r[n[157][e]]=40192+e,t[40192+e]=n[157][e])
for(n[158]="����������������������������������������������������������������曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎�梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣���".split(""),e=0;e!=n[158].length;++e)65533!==n[158][e].charCodeAt(0)&&(r[n[158][e]]=40448+e,t[40448+e]=n[158][e])
for(n[159]="����������������������������������������������������������������檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯�麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌���".split(""),e=0;e!=n[159].length;++e)65533!==n[159][e].charCodeAt(0)&&(r[n[159][e]]=40704+e,t[40704+e]=n[159][e])
for(n[224]="����������������������������������������������������������������漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝�烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱���".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="����������������������������������������������������������������瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿�痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬���".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="����������������������������������������������������������������磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰�窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆���".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="����������������������������������������������������������������紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷�縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋���".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="����������������������������������������������������������������隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤�艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈���".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="����������������������������������������������������������������蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬�蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞���".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="����������������������������������������������������������������襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧�諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊���".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="����������������������������������������������������������������蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜�轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮���".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="����������������������������������������������������������������錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙�閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰���".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="����������������������������������������������������������������顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃�騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈���".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="����������������������������������������������������������������鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯�黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙�������������������������������������������������������������������������������������������".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[237]="����������������������������������������������������������������纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏�塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱���".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="����������������������������������������������������������������犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙�蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑��ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ￢￤＇＂���".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[250]="����������������������������������������������������������������ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊�兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯���".split(""),e=0;e!=n[250].length;++e)65533!==n[250][e].charCodeAt(0)&&(r[n[250][e]]=64e3+e,t[64e3+e]=n[250][e])
for(n[251]="����������������������������������������������������������������涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神�祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙���".split(""),e=0;e!=n[251].length;++e)65533!==n[251][e].charCodeAt(0)&&(r[n[251][e]]=64256+e,t[64256+e]=n[251][e])
for(n[252]="����������������������������������������������������������������髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[252].length;++e)65533!==n[252][e].charCodeAt(0)&&(r[n[252][e]]=64512+e,t[64512+e]=n[252][e])
return{enc:r,dec:t}}(),n[936]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[129]="����������������������������������������������������������������丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪乫乬乭乮乯乲乴乵乶乷乸乹乺乻乼乽乿亀亁亂亃亄亅亇亊�亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂伃伄伅伆伇伈伋伌伒伓伔伕伖伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾伿佀佁佂佄佅佇佈佉佊佋佌佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢�".split(""),e=0;e!=n[129].length;++e)65533!==n[129][e].charCodeAt(0)&&(r[n[129][e]]=33024+e,t[33024+e]=n[129][e])
for(n[130]="����������������������������������������������������������������侤侫侭侰侱侲侳侴侶侷侸侹侺侻侼侽侾俀俁係俆俇俈俉俋俌俍俒俓俔俕俖俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿倀倁倂倃倄倅倆倇倈倉倊�個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯倰倱倲倳倴倵倶倷倸倹倻倽倿偀偁偂偄偅偆偉偊偋偍偐偑偒偓偔偖偗偘偙偛偝偞偟偠偡偢偣偤偦偧偨偩偪偫偭偮偯偰偱偲偳側偵偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎傏傐傑傒傓傔傕傖傗傘備傚傛傜傝傞傟傠傡傢傤傦傪傫傭傮傯傰傱傳傴債傶傷傸傹傼�".split(""),e=0;e!=n[130].length;++e)65533!==n[130][e].charCodeAt(0)&&(r[n[130][e]]=33280+e,t[33280+e]=n[130][e])
for(n[131]="����������������������������������������������������������������傽傾傿僀僁僂僃僄僅僆僇僈僉僊僋僌働僎僐僑僒僓僔僕僗僘僙僛僜僝僞僟僠僡僢僣僤僥僨僩僪僫僯僰僱僲僴僶僷僸價僺僼僽僾僿儀儁儂儃億儅儈�儉儊儌儍儎儏儐儑儓儔儕儖儗儘儙儚儛儜儝儞償儠儢儣儤儥儦儧儨儩優儫儬儭儮儯儰儱儲儳儴儵儶儷儸儹儺儻儼儽儾兂兇兊兌兎兏児兒兓兗兘兙兛兝兞兟兠兡兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦冧冨冩冪冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒凓凔凕凖凗�".split(""),e=0;e!=n[131].length;++e)65533!==n[131][e].charCodeAt(0)&&(r[n[131][e]]=33536+e,t[33536+e]=n[131][e])
for(n[132]="����������������������������������������������������������������凘凙凚凜凞凟凢凣凥処凧凨凩凪凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄剅剆則剈剉剋剎剏剒剓剕剗剘�剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳剴創剶剷剸剹剺剻剼剾劀劃劄劅劆劇劉劊劋劌劍劎劏劑劒劔劕劖劗劘劙劚劜劤劥劦劧劮劯劰労劵劶劷劸効劺劻劼劽勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務勚勛勜勝勞勠勡勢勣勥勦勧勨勩勪勫勬勭勮勯勱勲勳勴勵勶勷勸勻勼勽匁匂匃匄匇匉匊匋匌匎�".split(""),e=0;e!=n[132].length;++e)65533!==n[132][e].charCodeAt(0)&&(r[n[132][e]]=33792+e,t[33792+e]=n[132][e])
for(n[133]="����������������������������������������������������������������匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯匰匱匲匳匴匵匶匷匸匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏�厐厑厒厓厔厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯厰厱厲厳厴厵厷厸厹厺厼厽厾叀參叄叅叆叇収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝呞呟呠呡呣呥呧呩呪呫呬呭呮呯呰呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡�".split(""),e=0;e!=n[133].length;++e)65533!==n[133][e].charCodeAt(0)&&(r[n[133][e]]=34048+e,t[34048+e]=n[133][e])
for(n[134]="����������������������������������������������������������������咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠員哢哣哤哫哬哯哰哱哴哵哶哷哸哹哻哾唀唂唃唄唅唈唊唋唌唍唎唒唓唕唖唗唘唙唚唜唝唞唟唡唥唦�唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋啌啍啎問啑啒啓啔啗啘啙啚啛啝啞啟啠啢啣啨啩啫啯啰啱啲啳啴啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠喡喢喣喤喥喦喨喩喪喫喬喭單喯喰喲喴営喸喺喼喿嗀嗁嗂嗃嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗嗘嗙嗚嗛嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸嗹嗺嗻嗼嗿嘂嘃嘄嘅�".split(""),e=0;e!=n[134].length;++e)65533!==n[134][e].charCodeAt(0)&&(r[n[134][e]]=34304+e,t[34304+e]=n[134][e])
for(n[135]="����������������������������������������������������������������嘆嘇嘊嘋嘍嘐嘑嘒嘓嘔嘕嘖嘗嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀噁噂噃噄噅噆噇噈噉噊噋噏噐噑噒噓噕噖噚噛噝噞噟噠噡�噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽噾噿嚀嚁嚂嚃嚄嚇嚈嚉嚊嚋嚌嚍嚐嚑嚒嚔嚕嚖嚗嚘嚙嚚嚛嚜嚝嚞嚟嚠嚡嚢嚤嚥嚦嚧嚨嚩嚪嚫嚬嚭嚮嚰嚱嚲嚳嚴嚵嚶嚸嚹嚺嚻嚽嚾嚿囀囁囂囃囄囅囆囇囈囉囋囌囍囎囏囐囑囒囓囕囖囘囙囜団囥囦囧囨囩囪囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國圌圍圎圏圐圑�".split(""),e=0;e!=n[135].length;++e)65533!==n[135][e].charCodeAt(0)&&(r[n[135][e]]=34560+e,t[34560+e]=n[135][e])
for(n[136]="����������������������������������������������������������������園圓圔圕圖圗團圙圚圛圝圞圠圡圢圤圥圦圧圫圱圲圴圵圶圷圸圼圽圿坁坃坄坅坆坈坉坋坒坓坔坕坖坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀�垁垇垈垉垊垍垎垏垐垑垔垕垖垗垘垙垚垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹垺垻垼垽垾垿埀埁埄埅埆埇埈埉埊埌埍埐埑埓埖埗埛埜埞埡埢埣埥埦埧埨埩埪埫埬埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥堦堧堨堩堫堬堭堮堯報堲堳場堶堷堸堹堺堻堼堽�".split(""),e=0;e!=n[136].length;++e)65533!==n[136][e].charCodeAt(0)&&(r[n[136][e]]=34816+e,t[34816+e]=n[136][e])
for(n[137]="����������������������������������������������������������������堾堿塀塁塂塃塅塆塇塈塉塊塋塎塏塐塒塓塕塖塗塙塚塛塜塝塟塠塡塢塣塤塦塧塨塩塪塭塮塯塰塱塲塳塴塵塶塷塸塹塺塻塼塽塿墂墄墆墇墈墊墋墌�墍墎墏墐墑墔墕墖増墘墛墜墝墠墡墢墣墤墥墦墧墪墫墬墭墮墯墰墱墲墳墴墵墶墷墸墹墺墻墽墾墿壀壂壃壄壆壇壈壉壊壋壌壍壎壏壐壒壓壔壖壗壘壙壚壛壜壝壞壟壠壡壢壣壥壦壧壨壩壪壭壯壱売壴壵壷壸壺壻壼壽壾壿夀夁夃夅夆夈変夊夋夌夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻�".split(""),e=0;e!=n[137].length;++e)65533!==n[137][e].charCodeAt(0)&&(r[n[137][e]]=35072+e,t[35072+e]=n[137][e])
for(n[138]="����������������������������������������������������������������夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛奜奝奞奟奡奣奤奦奧奨奩奪奫奬奭奮奯奰奱奲奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦�妧妬妭妰妱妳妴妵妶妷妸妺妼妽妿姀姁姂姃姄姅姇姈姉姌姍姎姏姕姖姙姛姞姟姠姡姢姤姦姧姩姪姫姭姮姯姰姱姲姳姴姵姶姷姸姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪娫娬娭娮娯娰娳娵娷娸娹娺娻娽娾娿婁婂婃婄婅婇婈婋婌婍婎婏婐婑婒婓婔婖婗婘婙婛婜婝婞婟婠�".split(""),e=0;e!=n[138].length;++e)65533!==n[138][e].charCodeAt(0)&&(r[n[138][e]]=35328+e,t[35328+e]=n[138][e])
for(n[139]="����������������������������������������������������������������婡婣婤婥婦婨婩婫婬婭婮婯婰婱婲婳婸婹婻婼婽婾媀媁媂媃媄媅媆媇媈媉媊媋媌媍媎媏媐媑媓媔媕媖媗媘媙媜媝媞媟媠媡媢媣媤媥媦媧媨媩媫媬�媭媮媯媰媱媴媶媷媹媺媻媼媽媿嫀嫃嫄嫅嫆嫇嫈嫊嫋嫍嫎嫏嫐嫑嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬嫭嫮嫯嫰嫲嫳嫴嫵嫶嫷嫸嫹嫺嫻嫼嫽嫾嫿嬀嬁嬂嬃嬄嬅嬆嬇嬈嬊嬋嬌嬍嬎嬏嬐嬑嬒嬓嬔嬕嬘嬙嬚嬛嬜嬝嬞嬟嬠嬡嬢嬣嬤嬥嬦嬧嬨嬩嬪嬫嬬嬭嬮嬯嬰嬱嬳嬵嬶嬸嬹嬺嬻嬼嬽嬾嬿孁孂孃孄孅孆孇�".split(""),e=0;e!=n[139].length;++e)65533!==n[139][e].charCodeAt(0)&&(r[n[139][e]]=35584+e,t[35584+e]=n[139][e])
for(n[140]="����������������������������������������������������������������孈孉孊孋孌孍孎孏孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏�寑寔寕寖寗寘寙寚寛寜寠寢寣實寧審寪寫寬寭寯寱寲寳寴寵寶寷寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧屨屩屪屫屬屭屰屲屳屴屵屶屷屸屻屼屽屾岀岃岄岅岆岇岉岊岋岎岏岒岓岕岝岞岟岠岡岤岥岦岧岨�".split(""),e=0;e!=n[140].length;++e)65533!==n[140][e].charCodeAt(0)&&(r[n[140][e]]=35840+e,t[35840+e]=n[140][e])
for(n[141]="����������������������������������������������������������������岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅峆峇峈峉峊峌峍峎峏峐峑峓峔峕峖峗峘峚峛峜峝峞峟峠峢峣峧峩峫峬峮峯峱峲峳峴峵島峷峸峹峺峼峽峾峿崀�崁崄崅崈崉崊崋崌崍崏崐崑崒崓崕崗崘崙崚崜崝崟崠崡崢崣崥崨崪崫崬崯崰崱崲崳崵崶崷崸崹崺崻崼崿嵀嵁嵂嵃嵄嵅嵆嵈嵉嵍嵎嵏嵐嵑嵒嵓嵔嵕嵖嵗嵙嵚嵜嵞嵟嵠嵡嵢嵣嵤嵥嵦嵧嵨嵪嵭嵮嵰嵱嵲嵳嵵嵶嵷嵸嵹嵺嵻嵼嵽嵾嵿嶀嶁嶃嶄嶅嶆嶇嶈嶉嶊嶋嶌嶍嶎嶏嶐嶑嶒嶓嶔嶕嶖嶗嶘嶚嶛嶜嶞嶟嶠�".split(""),e=0;e!=n[141].length;++e)65533!==n[141][e].charCodeAt(0)&&(r[n[141][e]]=36096+e,t[36096+e]=n[141][e])
for(n[142]="����������������������������������������������������������������嶡嶢嶣嶤嶥嶦嶧嶨嶩嶪嶫嶬嶭嶮嶯嶰嶱嶲嶳嶴嶵嶶嶸嶹嶺嶻嶼嶽嶾嶿巀巁巂巃巄巆巇巈巉巊巋巌巎巏巐巑巒巓巔巕巖巗巘巙巚巜巟巠巣巤巪巬巭�巰巵巶巸巹巺巻巼巿帀帄帇帉帊帋帍帎帒帓帗帞帟帠帡帢帣帤帥帨帩帪師帬帯帰帲帳帴帵帶帹帺帾帿幀幁幃幆幇幈幉幊幋幍幎幏幐幑幒幓幖幗幘幙幚幜幝幟幠幣幤幥幦幧幨幩幪幫幬幭幮幯幰幱幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨庩庪庫庬庮庯庰庱庲庴庺庻庼庽庿廀廁廂廃廄廅�".split(""),e=0;e!=n[142].length;++e)65533!==n[142][e].charCodeAt(0)&&(r[n[142][e]]=36352+e,t[36352+e]=n[142][e])
for(n[143]="����������������������������������������������������������������廆廇廈廋廌廍廎廏廐廔廕廗廘廙廚廜廝廞廟廠廡廢廣廤廥廦廧廩廫廬廭廮廯廰廱廲廳廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤�弨弫弬弮弰弲弳弴張弶強弸弻弽弾弿彁彂彃彄彅彆彇彈彉彊彋彌彍彎彏彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢徣徤徥徦徧復徫徬徯徰徱徲徳徴徶徸徹徺徻徾徿忀忁忂忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇�".split(""),e=0;e!=n[143].length;++e)65533!==n[143][e].charCodeAt(0)&&(r[n[143][e]]=36608+e,t[36608+e]=n[143][e])
for(n[144]="����������������������������������������������������������������怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰怱怲怳怴怶怷怸怹怺怽怾恀恄恅恆恇恈恉恊恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀�悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽悾悿惀惁惂惃惄惇惈惉惌惍惎惏惐惒惓惔惖惗惙惛惞惡惢惣惤惥惪惱惲惵惷惸惻惼惽惾惿愂愃愄愅愇愊愋愌愐愑愒愓愔愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬愭愮愯愰愱愲愳愴愵愶愷愸愹愺愻愼愽愾慀慁慂慃慄慅慆�".split(""),e=0;e!=n[144].length;++e)65533!==n[144][e].charCodeAt(0)&&(r[n[144][e]]=36864+e,t[36864+e]=n[144][e])
for(n[145]="����������������������������������������������������������������慇慉態慍慏慐慒慓慔慖慗慘慙慚慛慜慞慟慠慡慣慤慥慦慩慪慫慬慭慮慯慱慲慳慴慶慸慹慺慻慼慽慾慿憀憁憂憃憄憅憆憇憈憉憊憌憍憏憐憑憒憓憕�憖憗憘憙憚憛憜憞憟憠憡憢憣憤憥憦憪憫憭憮憯憰憱憲憳憴憵憶憸憹憺憻憼憽憿懀懁懃懄懅懆懇應懌懍懎懏懐懓懕懖懗懘懙懚懛懜懝懞懟懠懡懢懣懤懥懧懨懩懪懫懬懭懮懯懰懱懲懳懴懶懷懸懹懺懻懼懽懾戀戁戂戃戄戅戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸戹戺戻戼扂扄扅扆扊�".split(""),e=0;e!=n[145].length;++e)65533!==n[145][e].charCodeAt(0)&&(r[n[145][e]]=37120+e,t[37120+e]=n[145][e])
for(n[146]="����������������������������������������������������������������扏扐払扖扗扙扚扜扝扞扟扠扡扢扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋抌抍抎抏抐抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁�拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳挴挵挶挷挸挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖捗捘捙捚捛捜捝捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙掚掛掜掝掞掟採掤掦掫掯掱掲掵掶掹掻掽掿揀�".split(""),e=0;e!=n[146].length;++e)65533!==n[146][e].charCodeAt(0)&&(r[n[146][e]]=37376+e,t[37376+e]=n[146][e])
for(n[147]="����������������������������������������������������������������揁揂揃揅揇揈揊揋揌揑揓揔揕揗揘揙揚換揜揝揟揢揤揥揦揧揨揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆搇搈搉搊損搎搑搒搕搖搗搘搙搚搝搟搢搣搤�搥搧搨搩搫搮搯搰搱搲搳搵搶搷搸搹搻搼搾摀摂摃摉摋摌摍摎摏摐摑摓摕摖摗摙摚摛摜摝摟摠摡摢摣摤摥摦摨摪摫摬摮摯摰摱摲摳摴摵摶摷摻摼摽摾摿撀撁撃撆撈撉撊撋撌撍撎撏撐撓撔撗撘撚撛撜撝撟撠撡撢撣撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆擇擈擉擊擋擌擏擑擓擔擕擖擙據�".split(""),e=0;e!=n[147].length;++e)65533!==n[147][e].charCodeAt(0)&&(r[n[147][e]]=37632+e,t[37632+e]=n[147][e])
for(n[148]="����������������������������������������������������������������擛擜擝擟擠擡擣擥擧擨擩擪擫擬擭擮擯擰擱擲擳擴擵擶擷擸擹擺擻擼擽擾擿攁攂攃攄攅攆攇攈攊攋攌攍攎攏攐攑攓攔攕攖攗攙攚攛攜攝攞攟攠攡�攢攣攤攦攧攨攩攪攬攭攰攱攲攳攷攺攼攽敀敁敂敃敄敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數敹敺敻敼敽敾敿斀斁斂斃斄斅斆斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱斲斳斴斵斶斷斸斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘旙旚旛旜旝旞旟旡旣旤旪旫�".split(""),e=0;e!=n[148].length;++e)65533!==n[148][e].charCodeAt(0)&&(r[n[148][e]]=37888+e,t[37888+e]=n[148][e])
for(n[149]="����������������������������������������������������������������旲旳旴旵旸旹旻旼旽旾旿昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷昸昹昺昻昽昿晀時晄晅晆晇晈晉晊晍晎晐晑晘�晙晛晜晝晞晠晢晣晥晧晩晪晫晬晭晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘暙暚暛暜暞暟暠暡暢暣暤暥暦暩暪暫暬暭暯暰暱暲暳暵暶暷暸暺暻暼暽暿曀曁曂曃曄曅曆曇曈曉曊曋曌曍曎曏曐曑曒曓曔曕曖曗曘曚曞曟曠曡曢曣曤曥曧曨曪曫曬曭曮曯曱曵曶書曺曻曽朁朂會�".split(""),e=0;e!=n[149].length;++e)65533!==n[149][e].charCodeAt(0)&&(r[n[149][e]]=38144+e,t[38144+e]=n[149][e])
for(n[150]="����������������������������������������������������������������朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠朡朢朣朤朥朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗杘杙杚杛杝杢杣杤杦杧杫杬杮東杴杶�杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹枺枻枼枽枾枿柀柂柅柆柇柈柉柊柋柌柍柎柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵柶柷柸柹柺査柼柾栁栂栃栄栆栍栐栒栔栕栘栙栚栛栜栞栟栠栢栣栤栥栦栧栨栫栬栭栮栯栰栱栴栵栶栺栻栿桇桋桍桏桒桖桗桘桙桚桛�".split(""),e=0;e!=n[150].length;++e)65533!==n[150][e].charCodeAt(0)&&(r[n[150][e]]=38400+e,t[38400+e]=n[150][e])
for(n[151]="����������������������������������������������������������������桜桝桞桟桪桬桭桮桯桰桱桲桳桵桸桹桺桻桼桽桾桿梀梂梄梇梈梉梊梋梌梍梎梐梑梒梔梕梖梘梙梚梛梜條梞梟梠梡梣梤梥梩梪梫梬梮梱梲梴梶梷梸�梹梺梻梼梽梾梿棁棃棄棅棆棇棈棊棌棎棏棐棑棓棔棖棗棙棛棜棝棞棟棡棢棤棥棦棧棨棩棪棫棬棭棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆椇椈椉椊椌椏椑椓椔椕椖椗椘椙椚椛検椝椞椡椢椣椥椦椧椨椩椪椫椬椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃楄楅楆楇楈楉楊楋楌楍楎楏楐楑楒楓楕楖楘楙楛楜楟�".split(""),e=0;e!=n[151].length;++e)65533!==n[151][e].charCodeAt(0)&&(r[n[151][e]]=38656+e,t[38656+e]=n[151][e])
for(n[152]="����������������������������������������������������������������楡楢楤楥楧楨楩楪楬業楯楰楲楳楴極楶楺楻楽楾楿榁榃榅榊榋榌榎榏榐榑榒榓榖榗榙榚榝榞榟榠榡榢榣榤榥榦榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽�榾榿槀槂槃槄槅槆槇槈槉構槍槏槑槒槓槕槖槗様槙槚槜槝槞槡槢槣槤槥槦槧槨槩槪槫槬槮槯槰槱槳槴槵槶槷槸槹槺槻槼槾樀樁樂樃樄樅樆樇樈樉樋樌樍樎樏樐樑樒樓樔樕樖標樚樛樜樝樞樠樢樣樤樥樦樧権樫樬樭樮樰樲樳樴樶樷樸樹樺樻樼樿橀橁橂橃橅橆橈橉橊橋橌橍橎橏橑橒橓橔橕橖橗橚�".split(""),e=0;e!=n[152].length;++e)65533!==n[152][e].charCodeAt(0)&&(r[n[152][e]]=38912+e,t[38912+e]=n[152][e])
for(n[153]="����������������������������������������������������������������橜橝橞機橠橢橣橤橦橧橨橩橪橫橬橭橮橯橰橲橳橴橵橶橷橸橺橻橽橾橿檁檂檃檅檆檇檈檉檊檋檌檍檏檒檓檔檕檖檘檙檚檛檜檝檞檟檡檢檣檤檥檦�檧檨檪檭檮檯檰檱檲檳檴檵檶檷檸檹檺檻檼檽檾檿櫀櫁櫂櫃櫄櫅櫆櫇櫈櫉櫊櫋櫌櫍櫎櫏櫐櫑櫒櫓櫔櫕櫖櫗櫘櫙櫚櫛櫜櫝櫞櫟櫠櫡櫢櫣櫤櫥櫦櫧櫨櫩櫪櫫櫬櫭櫮櫯櫰櫱櫲櫳櫴櫵櫶櫷櫸櫹櫺櫻櫼櫽櫾櫿欀欁欂欃欄欅欆欇欈欉權欋欌欍欎欏欐欑欒欓欔欕欖欗欘欙欚欛欜欝欞欟欥欦欨欩欪欫欬欭欮�".split(""),e=0;e!=n[153].length;++e)65533!==n[153][e].charCodeAt(0)&&(r[n[153][e]]=39168+e,t[39168+e]=n[153][e])
for(n[154]="����������������������������������������������������������������欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍歎歏歐歑歒歓歔歕歖歗歘歚歛歜歝歞歟歠歡歨歩歫歬歭歮歯歰歱歲歳歴歵歶歷歸歺歽歾歿殀殅殈�殌殎殏殐殑殔殕殗殘殙殜殝殞殟殠殢殣殤殥殦殧殨殩殫殬殭殮殯殰殱殲殶殸殹殺殻殼殽殾毀毃毄毆毇毈毉毊毌毎毐毑毘毚毜毝毞毟毠毢毣毤毥毦毧毨毩毬毭毮毰毱毲毴毶毷毸毺毻毼毾毿氀氁氂氃氄氈氉氊氋氌氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋汌汍汎汏汑汒汓汖汘�".split(""),e=0;e!=n[154].length;++e)65533!==n[154][e].charCodeAt(0)&&(r[n[154][e]]=39424+e,t[39424+e]=n[154][e])
for(n[155]="����������������������������������������������������������������汙汚汢汣汥汦汧汫汬汭汮汯汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘�泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟洠洡洢洣洤洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽浾浿涀涁涃涄涆涇涊涋涍涏涐涒涖涗涘涙涚涜涢涥涬涭涰涱涳涴涶涷涹涺涻涼涽涾淁淂淃淈淉淊�".split(""),e=0;e!=n[155].length;++e)65533!==n[155][e].charCodeAt(0)&&(r[n[155][e]]=39680+e,t[39680+e]=n[155][e])
for(n[156]="����������������������������������������������������������������淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽淾淿渀渁渂渃渄渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵�渶渷渹渻渼渽渾渿湀湁湂湅湆湇湈湉湊湋湌湏湐湑湒湕湗湙湚湜湝湞湠湡湢湣湤湥湦湧湨湩湪湬湭湯湰湱湲湳湴湵湶湷湸湹湺湻湼湽満溁溂溄溇溈溊溋溌溍溎溑溒溓溔溕準溗溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪滫滬滭滮滯�".split(""),e=0;e!=n[156].length;++e)65533!==n[156][e].charCodeAt(0)&&(r[n[156][e]]=39936+e,t[39936+e]=n[156][e])
for(n[157]="����������������������������������������������������������������滰滱滲滳滵滶滷滸滺滻滼滽滾滿漀漁漃漄漅漇漈漊漋漌漍漎漐漑漒漖漗漘漙漚漛漜漝漞漟漡漢漣漥漦漧漨漬漮漰漲漴漵漷漸漹漺漻漼漽漿潀潁潂�潃潄潅潈潉潊潌潎潏潐潑潒潓潔潕潖潗潙潚潛潝潟潠潡潣潤潥潧潨潩潪潫潬潯潰潱潳潵潶潷潹潻潽潾潿澀澁澂澃澅澆澇澊澋澏澐澑澒澓澔澕澖澗澘澙澚澛澝澞澟澠澢澣澤澥澦澨澩澪澫澬澭澮澯澰澱澲澴澵澷澸澺澻澼澽澾澿濁濃濄濅濆濇濈濊濋濌濍濎濏濐濓濔濕濖濗濘濙濚濛濜濝濟濢濣濤濥�".split(""),e=0;e!=n[157].length;++e)65533!==n[157][e].charCodeAt(0)&&(r[n[157][e]]=40192+e,t[40192+e]=n[157][e])
for(n[158]="����������������������������������������������������������������濦濧濨濩濪濫濬濭濰濱濲濳濴濵濶濷濸濹濺濻濼濽濾濿瀀瀁瀂瀃瀄瀅瀆瀇瀈瀉瀊瀋瀌瀍瀎瀏瀐瀒瀓瀔瀕瀖瀗瀘瀙瀜瀝瀞瀟瀠瀡瀢瀤瀥瀦瀧瀨瀩瀪�瀫瀬瀭瀮瀯瀰瀱瀲瀳瀴瀶瀷瀸瀺瀻瀼瀽瀾瀿灀灁灂灃灄灅灆灇灈灉灊灋灍灎灐灑灒灓灔灕灖灗灘灙灚灛灜灝灟灠灡灢灣灤灥灦灧灨灩灪灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞炟炠炡炢炣炤炥炦炧炨炩炪炰炲炴炵炶為炾炿烄烅烆烇烉烋烌烍烎烏烐烑烒烓烔烕烖烗烚�".split(""),e=0;e!=n[158].length;++e)65533!==n[158][e].charCodeAt(0)&&(r[n[158][e]]=40448+e,t[40448+e]=n[158][e])
for(n[159]="����������������������������������������������������������������烜烝烞烠烡烢烣烥烪烮烰烱烲烳烴烵烶烸烺烻烼烾烿焀焁焂焃焄焅焆焇焈焋焌焍焎焏焑焒焔焗焛焜焝焞焟焠無焢焣焤焥焧焨焩焪焫焬焭焮焲焳焴�焵焷焸焹焺焻焼焽焾焿煀煁煂煃煄煆煇煈煉煋煍煏煐煑煒煓煔煕煖煗煘煙煚煛煝煟煠煡煢煣煥煩煪煫煬煭煯煰煱煴煵煶煷煹煻煼煾煿熀熁熂熃熅熆熇熈熉熋熌熍熎熐熑熒熓熕熖熗熚熛熜熝熞熡熢熣熤熥熦熧熩熪熫熭熮熯熰熱熲熴熶熷熸熺熻熼熽熾熿燀燁燂燄燅燆燇燈燉燊燋燌燍燏燐燑燒燓�".split(""),e=0;e!=n[159].length;++e)65533!==n[159][e].charCodeAt(0)&&(r[n[159][e]]=40704+e,t[40704+e]=n[159][e])
for(n[160]="����������������������������������������������������������������燖燗燘燙燚燛燜燝燞營燡燢燣燤燦燨燩燪燫燬燭燯燰燱燲燳燴燵燶燷燸燺燻燼燽燾燿爀爁爂爃爄爅爇爈爉爊爋爌爍爎爏爐爑爒爓爔爕爖爗爘爙爚�爛爜爞爟爠爡爢爣爤爥爦爧爩爫爭爮爯爲爳爴爺爼爾牀牁牂牃牄牅牆牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅犆犇犈犉犌犎犐犑犓犔犕犖犗犘犙犚犛犜犝犞犠犡犢犣犤犥犦犧犨犩犪犫犮犱犲犳犵犺犻犼犽犾犿狀狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛�".split(""),e=0;e!=n[160].length;++e)65533!==n[160][e].charCodeAt(0)&&(r[n[160][e]]=40960+e,t[40960+e]=n[160][e])
for(n[161]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈〉《》「」『』〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ������⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇①②③④⑤⑥⑦⑧⑨⑩��㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩��ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ���".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������！＂＃￥％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�������︵︶︹︺︿﹀︽︾﹁﹂﹃﹄��︻︼︷︸︱�︳︴����������".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="����������������������������������������������������������������ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╳▁▂▃▄▅▆▇�█▉▊▋▌▍▎▏▓▔▕▼▽◢◣◤◥☉⊕〒〝〞�����������āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ�ńň�ɡ����ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ����������������������".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="����������������������������������������������������������������〡〢〣〤〥〦〧〨〩㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤�℡㈱�‐���ー゛゜ヽヾ〆ゝゞ﹉﹊﹋﹌﹍﹎﹏﹐﹑﹒﹔﹕﹖﹗﹙﹚﹛﹜﹝﹞﹟﹠﹡�﹢﹣﹤﹥﹦﹨﹩﹪﹫�������������〇�������������─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋����������������".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[170]="����������������������������������������������������������������狜狝狟狢狣狤狥狦狧狪狫狵狶狹狽狾狿猀猂猄猅猆猇猈猉猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀獁獂獃獄獅獆獇獈�獉獊獋獌獎獏獑獓獔獕獖獘獙獚獛獜獝獞獟獡獢獣獤獥獦獧獨獩獪獫獮獰獱�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[170].length;++e)65533!==n[170][e].charCodeAt(0)&&(r[n[170][e]]=43520+e,t[43520+e]=n[170][e])
for(n[171]="����������������������������������������������������������������獲獳獴獵獶獷獸獹獺獻獼獽獿玀玁玂玃玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣玤玥玦玧玨玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃珄珅珆珇�珋珌珎珒珓珔珕珖珗珘珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳珴珵珶珷�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[171].length;++e)65533!==n[171][e].charCodeAt(0)&&(r[n[171][e]]=43776+e,t[43776+e]=n[171][e])
for(n[172]="����������������������������������������������������������������珸珹珺珻珼珽現珿琀琁琂琄琇琈琋琌琍琎琑琒琓琔琕琖琗琘琙琜琝琞琟琠琡琣琤琧琩琫琭琯琱琲琷琸琹琺琻琽琾琿瑀瑂瑃瑄瑅瑆瑇瑈瑉瑊瑋瑌瑍�瑎瑏瑐瑑瑒瑓瑔瑖瑘瑝瑠瑡瑢瑣瑤瑥瑦瑧瑨瑩瑪瑫瑬瑮瑯瑱瑲瑳瑴瑵瑸瑹瑺�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[172].length;++e)65533!==n[172][e].charCodeAt(0)&&(r[n[172][e]]=44032+e,t[44032+e]=n[172][e])
for(n[173]="����������������������������������������������������������������瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑璒璓璔璕璖璗璘璙璚璛璝璟璠璡璢璣璤璥璦璪璫璬璭璮璯環璱璲璳璴璵璶璷璸璹璻璼璽璾璿瓀瓁瓂瓃瓄瓅瓆瓇�瓈瓉瓊瓋瓌瓍瓎瓏瓐瓑瓓瓔瓕瓖瓗瓘瓙瓚瓛瓝瓟瓡瓥瓧瓨瓩瓪瓫瓬瓭瓰瓱瓲�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[173].length;++e)65533!==n[173][e].charCodeAt(0)&&(r[n[173][e]]=44288+e,t[44288+e]=n[173][e])
for(n[174]="����������������������������������������������������������������瓳瓵瓸瓹瓺瓻瓼瓽瓾甀甁甂甃甅甆甇甈甉甊甋甌甎甐甒甔甕甖甗甛甝甞甠甡產産甤甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘�畝畞畟畠畡畢畣畤畧畨畩畫畬畭畮畯異畱畳畵當畷畺畻畼畽畾疀疁疂疄疅疇�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[174].length;++e)65533!==n[174][e].charCodeAt(0)&&(r[n[174][e]]=44544+e,t[44544+e]=n[174][e])
for(n[175]="����������������������������������������������������������������疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦疧疨疩疪疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇�瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[175].length;++e)65533!==n[175][e].charCodeAt(0)&&(r[n[175][e]]=44800+e,t[44800+e]=n[175][e])
for(n[176]="����������������������������������������������������������������癅癆癇癈癉癊癋癎癏癐癑癒癓癕癗癘癙癚癛癝癟癠癡癢癤癥癦癧癨癩癪癬癭癮癰癱癲癳癴癵癶癷癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛�皜皝皞皟皠皡皢皣皥皦皧皨皩皪皫皬皭皯皰皳皵皶皷皸皹皺皻皼皽皾盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="����������������������������������������������������������������盄盇盉盋盌盓盕盙盚盜盝盞盠盡盢監盤盦盧盨盩盪盫盬盭盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎眏眐眑眒眓眔眕眖眗眘眛眜眝眞眡眣眤眥眧眪眫�眬眮眰眱眲眳眴眹眻眽眾眿睂睄睅睆睈睉睊睋睌睍睎睏睒睓睔睕睖睗睘睙睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="����������������������������������������������������������������睝睞睟睠睤睧睩睪睭睮睯睰睱睲睳睴睵睶睷睸睺睻睼瞁瞂瞃瞆瞇瞈瞉瞊瞋瞏瞐瞓瞔瞕瞖瞗瞘瞙瞚瞛瞜瞝瞞瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶瞷瞸瞹瞺�瞼瞾矀矁矂矃矄矅矆矇矈矉矊矋矌矎矏矐矑矒矓矔矕矖矘矙矚矝矞矟矠矡矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="����������������������������������������������������������������矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃砄砅砆砇砈砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚�硛硜硞硟硠硡硢硣硤硥硦硧硨硩硯硰硱硲硳硴硵硶硸硹硺硻硽硾硿碀碁碂碃场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="����������������������������������������������������������������碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨碩碪碫碬碭碮碯碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚磛磜磝磞磟磠磡磢磣�磤磥磦磧磩磪磫磭磮磯磰磱磳磵磶磸磹磻磼磽磾磿礀礂礃礄礆礇礈礉礊礋礌础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="����������������������������������������������������������������礍礎礏礐礑礒礔礕礖礗礘礙礚礛礜礝礟礠礡礢礣礥礦礧礨礩礪礫礬礭礮礯礰礱礲礳礵礶礷礸礹礽礿祂祃祄祅祇祊祋祌祍祎祏祐祑祒祔祕祘祙祡祣�祤祦祩祪祫祬祮祰祱祲祳祴祵祶祹祻祼祽祾祿禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="����������������������������������������������������������������禓禔禕禖禗禘禙禛禜禝禞禟禠禡禢禣禤禥禦禨禩禪禫禬禭禮禯禰禱禲禴禵禶禷禸禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙秚秛秜秝秞秠秡秢秥秨秪�秬秮秱秲秳秴秵秶秷秹秺秼秾秿稁稄稅稇稈稉稊稌稏稐稑稒稓稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="����������������������������������������������������������������稝稟稡稢稤稥稦稧稨稩稪稫稬稭種稯稰稱稲稴稵稶稸稺稾穀穁穂穃穄穅穇穈穉穊穋穌積穎穏穐穒穓穔穕穖穘穙穚穛穜穝穞穟穠穡穢穣穤穥穦穧穨�穩穪穫穬穭穮穯穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="����������������������������������������������������������������窣窤窧窩窪窫窮窯窰窱窲窴窵窶窷窸窹窺窻窼窽窾竀竁竂竃竄竅竆竇竈竉竊竌竍竎竏竐竑竒竓竔竕竗竘竚竛竜竝竡竢竤竧竨竩竪竫竬竮竰竱竲竳�竴竵競竷竸竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="����������������������������������������������������������������笯笰笲笴笵笶笷笹笻笽笿筀筁筂筃筄筆筈筊筍筎筓筕筗筙筜筞筟筡筣筤筥筦筧筨筩筪筫筬筭筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆箇箈箉箊箋箌箎箏�箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹箺箻箼箽箾箿節篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="����������������������������������������������������������������篅篈築篊篋篍篎篏篐篒篔篕篖篗篘篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲篳篴篵篶篸篹篺篻篽篿簀簁簂簃簄簅簆簈簉簊簍簎簐簑簒簓簔簕簗簘簙�簚簛簜簝簞簠簡簢簣簤簥簨簩簫簬簭簮簯簰簱簲簳簴簵簶簷簹簺簻簼簽簾籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="����������������������������������������������������������������籃籄籅籆籇籈籉籊籋籌籎籏籐籑籒籓籔籕籖籗籘籙籚籛籜籝籞籟籠籡籢籣籤籥籦籧籨籩籪籫籬籭籮籯籰籱籲籵籶籷籸籹籺籾籿粀粁粂粃粄粅粆粇�粈粊粋粌粍粎粏粐粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴粵粶粷粸粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="����������������������������������������������������������������粿糀糂糃糄糆糉糋糎糏糐糑糒糓糔糘糚糛糝糞糡糢糣糤糥糦糧糩糪糫糬糭糮糰糱糲糳糴糵糶糷糹糺糼糽糾糿紀紁紂紃約紅紆紇紈紉紋紌納紎紏紐�紑紒紓純紕紖紗紘紙級紛紜紝紞紟紡紣紤紥紦紨紩紪紬紭紮細紱紲紳紴紵紶肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="����������������������������������������������������������������紷紸紹紺紻紼紽紾紿絀絁終絃組絅絆絇絈絉絊絋経絍絎絏結絑絒絓絔絕絖絗絘絙絚絛絜絝絞絟絠絡絢絣絤絥給絧絨絩絪絫絬絭絯絰統絲絳絴絵絶�絸絹絺絻絼絽絾絿綀綁綂綃綄綅綆綇綈綉綊綋綌綍綎綏綐綑綒經綔綕綖綗綘健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="����������������������������������������������������������������継続綛綜綝綞綟綠綡綢綣綤綥綧綨綩綪綫綬維綯綰綱網綳綴綵綶綷綸綹綺綻綼綽綾綿緀緁緂緃緄緅緆緇緈緉緊緋緌緍緎総緐緑緒緓緔緕緖緗緘緙�線緛緜緝緞緟締緡緢緣緤緥緦緧編緩緪緫緬緭緮緯緰緱緲緳練緵緶緷緸緹緺尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="����������������������������������������������������������������緻緼緽緾緿縀縁縂縃縄縅縆縇縈縉縊縋縌縍縎縏縐縑縒縓縔縕縖縗縘縙縚縛縜縝縞縟縠縡縢縣縤縥縦縧縨縩縪縫縬縭縮縯縰縱縲縳縴縵縶縷縸縹�縺縼總績縿繀繂繃繄繅繆繈繉繊繋繌繍繎繏繐繑繒繓織繕繖繗繘繙繚繛繜繝俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="����������������������������������������������������������������繞繟繠繡繢繣繤繥繦繧繨繩繪繫繬繭繮繯繰繱繲繳繴繵繶繷繸繹繺繻繼繽繾繿纀纁纃纄纅纆纇纈纉纊纋續纍纎纏纐纑纒纓纔纕纖纗纘纙纚纜纝纞�纮纴纻纼绖绤绬绹缊缐缞缷缹缻缼缽缾缿罀罁罃罆罇罈罉罊罋罌罍罎罏罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="����������������������������������������������������������������罖罙罛罜罝罞罠罣罤罥罦罧罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂羃羄羅羆羇羈羉羋羍羏羐羑羒羓羕羖羗羘羙羛羜羠羢羣羥羦羨義羪羫羬羭羮羱�羳羴羵羶羷羺羻羾翀翂翃翄翆翇翈翉翋翍翏翐翑習翓翖翗翙翚翛翜翝翞翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="����������������������������������������������������������������翤翧翨翪翫翬翭翯翲翴翵翶翷翸翹翺翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫耬耭耮耯耰耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗�聙聛聜聝聞聟聠聡聢聣聤聥聦聧聨聫聬聭聮聯聰聲聳聴聵聶職聸聹聺聻聼聽隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="����������������������������������������������������������������聾肁肂肅肈肊肍肎肏肐肑肒肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇胈胉胊胋胏胐胑胒胓胔胕胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋�脌脕脗脙脛脜脝脟脠脡脢脣脤脥脦脧脨脩脪脫脭脮脰脳脴脵脷脹脺脻脼脽脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="����������������������������������������������������������������腀腁腂腃腄腅腇腉腍腎腏腒腖腗腘腛腜腝腞腟腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃膄膅膆膇膉膋膌膍膎膐膒膓膔膕膖膗膙膚膞膟膠膡膢膤膥�膧膩膫膬膭膮膯膰膱膲膴膵膶膷膸膹膼膽膾膿臄臅臇臈臉臋臍臎臏臐臑臒臓摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="����������������������������������������������������������������臔臕臖臗臘臙臚臛臜臝臞臟臠臡臢臤臥臦臨臩臫臮臯臰臱臲臵臶臷臸臹臺臽臿舃與興舉舊舋舎舏舑舓舕舖舗舘舙舚舝舠舤舥舦舧舩舮舲舺舼舽舿�艀艁艂艃艅艆艈艊艌艍艎艐艑艒艓艔艕艖艗艙艛艜艝艞艠艡艢艣艤艥艦艧艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="����������������������������������������������������������������艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸�苺苼苽苾苿茀茊茋茍茐茒茓茖茘茙茝茞茟茠茡茢茣茤茥茦茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐�".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[199]="����������������������������������������������������������������茾茿荁荂荄荅荈荊荋荌荍荎荓荕荖荗荘荙荝荢荰荱荲荳荴荵荶荹荺荾荿莀莁莂莃莄莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡莢莣莤莥莦莧莬莭莮�莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠�".split(""),e=0;e!=n[199].length;++e)65533!==n[199][e].charCodeAt(0)&&(r[n[199][e]]=50944+e,t[50944+e]=n[199][e])
for(n[200]="����������������������������������������������������������������菮華菳菴菵菶菷菺菻菼菾菿萀萂萅萇萈萉萊萐萒萓萔萕萖萗萙萚萛萞萟萠萡萢萣萩萪萫萬萭萮萯萰萲萳萴萵萶萷萹萺萻萾萿葀葁葂葃葄葅葇葈葉�葊葋葌葍葎葏葐葒葓葔葕葖葘葝葞葟葠葢葤葥葦葧葨葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁�".split(""),e=0;e!=n[200].length;++e)65533!==n[200][e].charCodeAt(0)&&(r[n[200][e]]=51200+e,t[51200+e]=n[200][e])
for(n[201]="����������������������������������������������������������������葽葾葿蒀蒁蒃蒄蒅蒆蒊蒍蒏蒐蒑蒒蒓蒔蒕蒖蒘蒚蒛蒝蒞蒟蒠蒢蒣蒤蒥蒦蒧蒨蒩蒪蒫蒬蒭蒮蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗�蓘蓙蓚蓛蓜蓞蓡蓢蓤蓧蓨蓩蓪蓫蓭蓮蓯蓱蓲蓳蓴蓵蓶蓷蓸蓹蓺蓻蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳�".split(""),e=0;e!=n[201].length;++e)65533!==n[201][e].charCodeAt(0)&&(r[n[201][e]]=51456+e,t[51456+e]=n[201][e])
for(n[202]="����������������������������������������������������������������蔃蔄蔅蔆蔇蔈蔉蔊蔋蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢蔣蔤蔥蔦蔧蔨蔩蔪蔭蔮蔯蔰蔱蔲蔳蔴蔵蔶蔾蔿蕀蕁蕂蕄蕅蕆蕇蕋蕌蕍蕎蕏蕐蕑蕒蕓蕔蕕�蕗蕘蕚蕛蕜蕝蕟蕠蕡蕢蕣蕥蕦蕧蕩蕪蕫蕬蕭蕮蕯蕰蕱蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="����������������������������������������������������������������薂薃薆薈薉薊薋薌薍薎薐薑薒薓薔薕薖薗薘薙薚薝薞薟薠薡薢薣薥薦薧薩薫薬薭薱薲薳薴薵薶薸薺薻薼薽薾薿藀藂藃藄藅藆藇藈藊藋藌藍藎藑藒�藔藖藗藘藙藚藛藝藞藟藠藡藢藣藥藦藧藨藪藫藬藭藮藯藰藱藲藳藴藵藶藷藸恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="����������������������������������������������������������������藹藺藼藽藾蘀蘁蘂蘃蘄蘆蘇蘈蘉蘊蘋蘌蘍蘎蘏蘐蘒蘓蘔蘕蘗蘘蘙蘚蘛蘜蘝蘞蘟蘠蘡蘢蘣蘤蘥蘦蘨蘪蘫蘬蘭蘮蘯蘰蘱蘲蘳蘴蘵蘶蘷蘹蘺蘻蘽蘾蘿虀�虁虂虃虄虅虆虇虈虉虊虋虌虒虓處虖虗虘虙虛虜虝號虠虡虣虤虥虦虧虨虩虪獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="����������������������������������������������������������������虭虯虰虲虳虴虵虶虷虸蚃蚄蚅蚆蚇蚈蚉蚎蚏蚐蚑蚒蚔蚖蚗蚘蚙蚚蚛蚞蚟蚠蚡蚢蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻蚼蚽蚾蚿蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜�蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="����������������������������������������������������������������蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀蝁蝂蝃蝄蝅蝆蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚蝛蝜蝝蝞蝟蝡蝢蝦蝧蝨蝩蝪蝫蝬蝭蝯蝱蝲蝳蝵�蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎螏螐螑螒螔螕螖螘螙螚螛螜螝螞螠螡螢螣螤巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="����������������������������������������������������������������螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁蟂蟃蟄蟅蟇蟈蟉蟌蟍蟎蟏蟐蟔蟕蟖蟗蟘蟙蟚蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯蟰蟱蟲蟳蟴蟵蟶蟷蟸�蟺蟻蟼蟽蟿蠀蠁蠂蠄蠅蠆蠇蠈蠉蠋蠌蠍蠎蠏蠐蠑蠒蠔蠗蠘蠙蠚蠜蠝蠞蠟蠠蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="����������������������������������������������������������������蠤蠥蠦蠧蠨蠩蠪蠫蠬蠭蠮蠯蠰蠱蠳蠴蠵蠶蠷蠸蠺蠻蠽蠾蠿衁衂衃衆衇衈衉衊衋衎衏衐衑衒術衕衖衘衚衛衜衝衞衟衠衦衧衪衭衯衱衳衴衵衶衸衹衺�衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗袘袙袚袛袝袞袟袠袡袣袥袦袧袨袩袪小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="����������������������������������������������������������������袬袮袯袰袲袳袴袵袶袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚裛補裝裞裠裡裦裧裩裪裫裬裭裮裯裲裵裶裷裺裻製裿褀褁褃褄褅褆複褈�褉褋褌褍褎褏褑褔褕褖褗褘褜褝褞褟褠褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="����������������������������������������������������������������褸褹褺褻褼褽褾褿襀襂襃襅襆襇襈襉襊襋襌襍襎襏襐襑襒襓襔襕襖襗襘襙襚襛襜襝襠襡襢襣襤襥襧襨襩襪襫襬襭襮襯襰襱襲襳襴襵襶襷襸襹襺襼�襽襾覀覂覄覅覇覈覉覊見覌覍覎規覐覑覒覓覔覕視覗覘覙覚覛覜覝覞覟覠覡摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="����������������������������������������������������������������覢覣覤覥覦覧覨覩親覫覬覭覮覯覰覱覲観覴覵覶覷覸覹覺覻覼覽覾覿觀觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴觵觶觷觸觹觺�觻觼觽觾觿訁訂訃訄訅訆計訉訊訋訌訍討訏訐訑訒訓訔訕訖託記訙訚訛訜訝印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="����������������������������������������������������������������訞訟訠訡訢訣訤訥訦訧訨訩訪訫訬設訮訯訰許訲訳訴訵訶訷訸訹診註証訽訿詀詁詂詃詄詅詆詇詉詊詋詌詍詎詏詐詑詒詓詔評詖詗詘詙詚詛詜詝詞�詟詠詡詢詣詤詥試詧詨詩詪詫詬詭詮詯詰話該詳詴詵詶詷詸詺詻詼詽詾詿誀浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="����������������������������������������������������������������誁誂誃誄誅誆誇誈誋誌認誎誏誐誑誒誔誕誖誗誘誙誚誛誜誝語誟誠誡誢誣誤誥誦誧誨誩說誫説読誮誯誰誱課誳誴誵誶誷誸誹誺誻誼誽誾調諀諁諂�諃諄諅諆談諈諉諊請諌諍諎諏諐諑諒諓諔諕論諗諘諙諚諛諜諝諞諟諠諡諢諣铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="����������������������������������������������������������������諤諥諦諧諨諩諪諫諬諭諮諯諰諱諲諳諴諵諶諷諸諹諺諻諼諽諾諿謀謁謂謃謄謅謆謈謉謊謋謌謍謎謏謐謑謒謓謔謕謖謗謘謙謚講謜謝謞謟謠謡謢謣�謤謥謧謨謩謪謫謬謭謮謯謰謱謲謳謴謵謶謷謸謹謺謻謼謽謾謿譀譁譂譃譄譅帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="����������������������������������������������������������������譆譇譈證譊譋譌譍譎譏譐譑譒譓譔譕譖譗識譙譚譛譜譝譞譟譠譡譢譣譤譥譧譨譩譪譫譭譮譯議譱譲譳譴譵譶護譸譹譺譻譼譽譾譿讀讁讂讃讄讅讆�讇讈讉變讋讌讍讎讏讐讑讒讓讔讕讖讗讘讙讚讛讜讝讞讟讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座������".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="����������������������������������������������������������������谸谹谺谻谼谽谾谿豀豂豃豄豅豈豊豋豍豎豏豐豑豒豓豔豖豗豘豙豛豜豝豞豟豠豣豤豥豦豧豨豩豬豭豮豯豰豱豲豴豵豶豷豻豼豽豾豿貀貁貃貄貆貇�貈貋貍貎貏貐貑貒貓貕貖貗貙貚貛貜貝貞貟負財貢貣貤貥貦貧貨販貪貫責貭亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="����������������������������������������������������������������貮貯貰貱貲貳貴貵貶買貸貹貺費貼貽貾貿賀賁賂賃賄賅賆資賈賉賊賋賌賍賎賏賐賑賒賓賔賕賖賗賘賙賚賛賜賝賞賟賠賡賢賣賤賥賦賧賨賩質賫賬�賭賮賯賰賱賲賳賴賵賶賷賸賹賺賻購賽賾賿贀贁贂贃贄贅贆贇贈贉贊贋贌贍佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="����������������������������������������������������������������贎贏贐贑贒贓贔贕贖贗贘贙贚贛贜贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸赹赺赻赼赽赾赿趀趂趃趆趇趈趉趌趍趎趏趐趒趓趕趖趗趘趙趚趛趜趝趞趠趡�趢趤趥趦趧趨趩趪趫趬趭趮趯趰趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="����������������������������������������������������������������跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾跿踀踁踂踃踄踆踇踈踋踍踎踐踑踒踓踕踖踗踘踙踚踛踜踠踡踤踥踦踧踨踫踭踰踲踳踴踶踷踸踻踼踾�踿蹃蹅蹆蹌蹍蹎蹏蹐蹓蹔蹕蹖蹗蹘蹚蹛蹜蹝蹞蹟蹠蹡蹢蹣蹤蹥蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="����������������������������������������������������������������蹳蹵蹷蹸蹹蹺蹻蹽蹾躀躂躃躄躆躈躉躊躋躌躍躎躑躒躓躕躖躗躘躙躚躛躝躟躠躡躢躣躤躥躦躧躨躩躪躭躮躰躱躳躴躵躶躷躸躹躻躼躽躾躿軀軁軂�軃軄軅軆軇軈軉車軋軌軍軏軐軑軒軓軔軕軖軗軘軙軚軛軜軝軞軟軠軡転軣軤堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="����������������������������������������������������������������軥軦軧軨軩軪軫軬軭軮軯軰軱軲軳軴軵軶軷軸軹軺軻軼軽軾軿輀輁輂較輄輅輆輇輈載輊輋輌輍輎輏輐輑輒輓輔輕輖輗輘輙輚輛輜輝輞輟輠輡輢輣�輤輥輦輧輨輩輪輫輬輭輮輯輰輱輲輳輴輵輶輷輸輹輺輻輼輽輾輿轀轁轂轃轄荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="����������������������������������������������������������������轅轆轇轈轉轊轋轌轍轎轏轐轑轒轓轔轕轖轗轘轙轚轛轜轝轞轟轠轡轢轣轤轥轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆�迉迊迋迌迍迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="����������������������������������������������������������������這逜連逤逥逧逨逩逪逫逬逰週進逳逴逷逹逺逽逿遀遃遅遆遈遉遊運遌過達違遖遙遚遜遝遞遟遠遡遤遦遧適遪遫遬遯遰遱遲遳遶遷選遹遺遻遼遾邁�還邅邆邇邉邊邌邍邎邏邐邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="����������������������������������������������������������������郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅鄆鄇鄈鄉鄊鄋鄌鄍鄎鄏鄐鄑鄒鄓鄔鄕鄖鄗鄘鄚鄛鄜�鄝鄟鄠鄡鄤鄥鄦鄧鄨鄩鄪鄫鄬鄭鄮鄰鄲鄳鄴鄵鄶鄷鄸鄺鄻鄼鄽鄾鄿酀酁酂酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="����������������������������������������������������������������酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀醁醂醃醄醆醈醊醎醏醓醔醕醖醗醘醙醜醝醞醟醠醡醤醥醦醧醨醩醫醬醰醱醲醳醶醷醸醹醻�醼醽醾醿釀釁釂釃釄釅釆釈釋釐釒釓釔釕釖釗釘釙釚釛針釞釟釠釡釢釣釤釥帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="����������������������������������������������������������������釦釧釨釩釪釫釬釭釮釯釰釱釲釳釴釵釶釷釸釹釺釻釼釽釾釿鈀鈁鈂鈃鈄鈅鈆鈇鈈鈉鈊鈋鈌鈍鈎鈏鈐鈑鈒鈓鈔鈕鈖鈗鈘鈙鈚鈛鈜鈝鈞鈟鈠鈡鈢鈣鈤�鈥鈦鈧鈨鈩鈪鈫鈬鈭鈮鈯鈰鈱鈲鈳鈴鈵鈶鈷鈸鈹鈺鈻鈼鈽鈾鈿鉀鉁鉂鉃鉄鉅狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧饨饩饪饫饬饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="����������������������������������������������������������������鉆鉇鉈鉉鉊鉋鉌鉍鉎鉏鉐鉑鉒鉓鉔鉕鉖鉗鉘鉙鉚鉛鉜鉝鉞鉟鉠鉡鉢鉣鉤鉥鉦鉧鉨鉩鉪鉫鉬鉭鉮鉯鉰鉱鉲鉳鉵鉶鉷鉸鉹鉺鉻鉼鉽鉾鉿銀銁銂銃銄銅�銆銇銈銉銊銋銌銍銏銐銑銒銓銔銕銖銗銘銙銚銛銜銝銞銟銠銡銢銣銤銥銦銧恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="����������������������������������������������������������������銨銩銪銫銬銭銯銰銱銲銳銴銵銶銷銸銹銺銻銼銽銾銿鋀鋁鋂鋃鋄鋅鋆鋇鋉鋊鋋鋌鋍鋎鋏鋐鋑鋒鋓鋔鋕鋖鋗鋘鋙鋚鋛鋜鋝鋞鋟鋠鋡鋢鋣鋤鋥鋦鋧鋨�鋩鋪鋫鋬鋭鋮鋯鋰鋱鋲鋳鋴鋵鋶鋷鋸鋹鋺鋻鋼鋽鋾鋿錀錁錂錃錄錅錆錇錈錉洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="����������������������������������������������������������������錊錋錌錍錎錏錐錑錒錓錔錕錖錗錘錙錚錛錜錝錞錟錠錡錢錣錤錥錦錧錨錩錪錫錬錭錮錯錰錱録錳錴錵錶錷錸錹錺錻錼錽錿鍀鍁鍂鍃鍄鍅鍆鍇鍈鍉�鍊鍋鍌鍍鍎鍏鍐鍑鍒鍓鍔鍕鍖鍗鍘鍙鍚鍛鍜鍝鍞鍟鍠鍡鍢鍣鍤鍥鍦鍧鍨鍩鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="����������������������������������������������������������������鍬鍭鍮鍯鍰鍱鍲鍳鍴鍵鍶鍷鍸鍹鍺鍻鍼鍽鍾鍿鎀鎁鎂鎃鎄鎅鎆鎇鎈鎉鎊鎋鎌鎍鎎鎐鎑鎒鎓鎔鎕鎖鎗鎘鎙鎚鎛鎜鎝鎞鎟鎠鎡鎢鎣鎤鎥鎦鎧鎨鎩鎪鎫�鎬鎭鎮鎯鎰鎱鎲鎳鎴鎵鎶鎷鎸鎹鎺鎻鎼鎽鎾鎿鏀鏁鏂鏃鏄鏅鏆鏇鏈鏉鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="����������������������������������������������������������������鏎鏏鏐鏑鏒鏓鏔鏕鏗鏘鏙鏚鏛鏜鏝鏞鏟鏠鏡鏢鏣鏤鏥鏦鏧鏨鏩鏪鏫鏬鏭鏮鏯鏰鏱鏲鏳鏴鏵鏶鏷鏸鏹鏺鏻鏼鏽鏾鏿鐀鐁鐂鐃鐄鐅鐆鐇鐈鐉鐊鐋鐌鐍�鐎鐏鐐鐑鐒鐓鐔鐕鐖鐗鐘鐙鐚鐛鐜鐝鐞鐟鐠鐡鐢鐣鐤鐥鐦鐧鐨鐩鐪鐫鐬鐭鐮纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡缢缣缤缥缦缧缪缫缬缭缯缰缱缲缳缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="����������������������������������������������������������������鐯鐰鐱鐲鐳鐴鐵鐶鐷鐸鐹鐺鐻鐼鐽鐿鑀鑁鑂鑃鑄鑅鑆鑇鑈鑉鑊鑋鑌鑍鑎鑏鑐鑑鑒鑓鑔鑕鑖鑗鑘鑙鑚鑛鑜鑝鑞鑟鑠鑡鑢鑣鑤鑥鑦鑧鑨鑩鑪鑬鑭鑮鑯�鑰鑱鑲鑳鑴鑵鑶鑷鑸鑹鑺鑻鑼鑽鑾鑿钀钁钂钃钄钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="����������������������������������������������������������������锧锳锽镃镈镋镕镚镠镮镴镵長镸镹镺镻镼镽镾門閁閂閃閄閅閆閇閈閉閊開閌閍閎閏閐閑閒間閔閕閖閗閘閙閚閛閜閝閞閟閠閡関閣閤閥閦閧閨閩閪�閫閬閭閮閯閰閱閲閳閴閵閶閷閸閹閺閻閼閽閾閿闀闁闂闃闄闅闆闇闈闉闊闋椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="����������������������������������������������������������������闌闍闎闏闐闑闒闓闔闕闖闗闘闙闚闛關闝闞闟闠闡闢闣闤闥闦闧闬闿阇阓阘阛阞阠阣阤阥阦阧阨阩阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗�陘陙陚陜陝陞陠陣陥陦陫陭陮陯陰陱陳陸陹険陻陼陽陾陿隀隁隂隃隄隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="����������������������������������������������������������������隌階隑隒隓隕隖隚際隝隞隟隠隡隢隣隤隥隦隨隩險隫隬隭隮隯隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖雗雘雙雚雛雜雝雞雟雡離難雤雥雦雧雫�雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗霘霙霚霛霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="����������������������������������������������������������������霡霢霣霤霥霦霧霨霩霫霬霮霯霱霳霴霵霶霷霺霻霼霽霿靀靁靂靃靄靅靆靇靈靉靊靋靌靍靎靏靐靑靔靕靗靘靚靜靝靟靣靤靦靧靨靪靫靬靭靮靯靰靱�靲靵靷靸靹靺靻靽靾靿鞀鞁鞂鞃鞄鞆鞇鞈鞉鞊鞌鞎鞏鞐鞓鞕鞖鞗鞙鞚鞛鞜鞝臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="����������������������������������������������������������������鞞鞟鞡鞢鞤鞥鞦鞧鞨鞩鞪鞬鞮鞰鞱鞳鞵鞶鞷鞸鞹鞺鞻鞼鞽鞾鞿韀韁韂韃韄韅韆韇韈韉韊韋韌韍韎韏韐韑韒韓韔韕韖韗韘韙韚韛韜韝韞韟韠韡韢韣�韤韥韨韮韯韰韱韲韴韷韸韹韺韻韼韽韾響頀頁頂頃頄項順頇須頉頊頋頌頍頎怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="����������������������������������������������������������������頏預頑頒頓頔頕頖頗領頙頚頛頜頝頞頟頠頡頢頣頤頥頦頧頨頩頪頫頬頭頮頯頰頱頲頳頴頵頶頷頸頹頺頻頼頽頾頿顀顁顂顃顄顅顆顇顈顉顊顋題額�顎顏顐顑顒顓顔顕顖顗願顙顚顛顜顝類顟顠顡顢顣顤顥顦顧顨顩顪顫顬顭顮睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶钷钸钹钺钼钽钿铄铈铉铊铋铌铍铎铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="����������������������������������������������������������������顯顰顱顲顳顴颋颎颒颕颙颣風颩颪颫颬颭颮颯颰颱颲颳颴颵颶颷颸颹颺颻颼颽颾颿飀飁飂飃飄飅飆飇飈飉飊飋飌飍飏飐飔飖飗飛飜飝飠飡飢飣飤�飥飦飩飪飫飬飭飮飯飰飱飲飳飴飵飶飷飸飹飺飻飼飽飾飿餀餁餂餃餄餅餆餇铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒锓锔锕锖锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤镥镦镧镨镩镪镫镬镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="����������������������������������������������������������������餈餉養餋餌餎餏餑餒餓餔餕餖餗餘餙餚餛餜餝餞餟餠餡餢餣餤餥餦餧館餩餪餫餬餭餯餰餱餲餳餴餵餶餷餸餹餺餻餼餽餾餿饀饁饂饃饄饅饆饇饈饉�饊饋饌饍饎饏饐饑饒饓饖饗饘饙饚饛饜饝饞饟饠饡饢饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨鸩鸪鸫鸬鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦鹧鹨鹩鹪鹫鹬鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="����������������������������������������������������������������馌馎馚馛馜馝馞馟馠馡馢馣馤馦馧馩馪馫馬馭馮馯馰馱馲馳馴馵馶馷馸馹馺馻馼馽馾馿駀駁駂駃駄駅駆駇駈駉駊駋駌駍駎駏駐駑駒駓駔駕駖駗駘�駙駚駛駜駝駞駟駠駡駢駣駤駥駦駧駨駩駪駫駬駭駮駯駰駱駲駳駴駵駶駷駸駹瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="����������������������������������������������������������������駺駻駼駽駾駿騀騁騂騃騄騅騆騇騈騉騊騋騌騍騎騏騐騑騒験騔騕騖騗騘騙騚騛騜騝騞騟騠騡騢騣騤騥騦騧騨騩騪騫騬騭騮騯騰騱騲騳騴騵騶騷騸�騹騺騻騼騽騾騿驀驁驂驃驄驅驆驇驈驉驊驋驌驍驎驏驐驑驒驓驔驕驖驗驘驙颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="����������������������������������������������������������������驚驛驜驝驞驟驠驡驢驣驤驥驦驧驨驩驪驫驲骃骉骍骎骔骕骙骦骩骪骫骬骭骮骯骲骳骴骵骹骻骽骾骿髃髄髆髇髈髉髊髍髎髏髐髒體髕髖髗髙髚髛髜�髝髞髠髢髣髤髥髧髨髩髪髬髮髰髱髲髳髴髵髶髷髸髺髼髽髾髿鬀鬁鬂鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="����������������������������������������������������������������鬇鬉鬊鬋鬌鬍鬎鬐鬑鬒鬔鬕鬖鬗鬘鬙鬚鬛鬜鬝鬞鬠鬡鬢鬤鬥鬦鬧鬨鬩鬪鬫鬬鬭鬮鬰鬱鬳鬴鬵鬶鬷鬸鬹鬺鬽鬾鬿魀魆魊魋魌魎魐魒魓魕魖魗魘魙魚�魛魜魝魞魟魠魡魢魣魤魥魦魧魨魩魪魫魬魭魮魯魰魱魲魳魴魵魶魷魸魹魺魻簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="����������������������������������������������������������������魼魽魾魿鮀鮁鮂鮃鮄鮅鮆鮇鮈鮉鮊鮋鮌鮍鮎鮏鮐鮑鮒鮓鮔鮕鮖鮗鮘鮙鮚鮛鮜鮝鮞鮟鮠鮡鮢鮣鮤鮥鮦鮧鮨鮩鮪鮫鮬鮭鮮鮯鮰鮱鮲鮳鮴鮵鮶鮷鮸鮹鮺�鮻鮼鮽鮾鮿鯀鯁鯂鯃鯄鯅鯆鯇鯈鯉鯊鯋鯌鯍鯎鯏鯐鯑鯒鯓鯔鯕鯖鯗鯘鯙鯚鯛酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="����������������������������������������������������������������鯜鯝鯞鯟鯠鯡鯢鯣鯤鯥鯦鯧鯨鯩鯪鯫鯬鯭鯮鯯鯰鯱鯲鯳鯴鯵鯶鯷鯸鯹鯺鯻鯼鯽鯾鯿鰀鰁鰂鰃鰄鰅鰆鰇鰈鰉鰊鰋鰌鰍鰎鰏鰐鰑鰒鰓鰔鰕鰖鰗鰘鰙鰚�鰛鰜鰝鰞鰟鰠鰡鰢鰣鰤鰥鰦鰧鰨鰩鰪鰫鰬鰭鰮鰯鰰鰱鰲鰳鰴鰵鰶鰷鰸鰹鰺鰻觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅龆龇龈龉龊龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞鲟鲠鲡鲢鲣鲥鲦鲧鲨鲩鲫鲭鲮鲰鲱鲲鲳鲴鲵鲶鲷鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="����������������������������������������������������������������鰼鰽鰾鰿鱀鱁鱂鱃鱄鱅鱆鱇鱈鱉鱊鱋鱌鱍鱎鱏鱐鱑鱒鱓鱔鱕鱖鱗鱘鱙鱚鱛鱜鱝鱞鱟鱠鱡鱢鱣鱤鱥鱦鱧鱨鱩鱪鱫鱬鱭鱮鱯鱰鱱鱲鱳鱴鱵鱶鱷鱸鱹鱺�鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾鲿鳀鳁鳂鳈鳉鳑鳒鳚鳛鳠鳡鳌鳍鳎鳏鳐鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
for(n[248]="����������������������������������������������������������������鳣鳤鳥鳦鳧鳨鳩鳪鳫鳬鳭鳮鳯鳰鳱鳲鳳鳴鳵鳶鳷鳸鳹鳺鳻鳼鳽鳾鳿鴀鴁鴂鴃鴄鴅鴆鴇鴈鴉鴊鴋鴌鴍鴎鴏鴐鴑鴒鴓鴔鴕鴖鴗鴘鴙鴚鴛鴜鴝鴞鴟鴠鴡�鴢鴣鴤鴥鴦鴧鴨鴩鴪鴫鴬鴭鴮鴯鴰鴱鴲鴳鴴鴵鴶鴷鴸鴹鴺鴻鴼鴽鴾鴿鵀鵁鵂�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[248].length;++e)65533!==n[248][e].charCodeAt(0)&&(r[n[248][e]]=63488+e,t[63488+e]=n[248][e])
for(n[249]="����������������������������������������������������������������鵃鵄鵅鵆鵇鵈鵉鵊鵋鵌鵍鵎鵏鵐鵑鵒鵓鵔鵕鵖鵗鵘鵙鵚鵛鵜鵝鵞鵟鵠鵡鵢鵣鵤鵥鵦鵧鵨鵩鵪鵫鵬鵭鵮鵯鵰鵱鵲鵳鵴鵵鵶鵷鵸鵹鵺鵻鵼鵽鵾鵿鶀鶁�鶂鶃鶄鶅鶆鶇鶈鶉鶊鶋鶌鶍鶎鶏鶐鶑鶒鶓鶔鶕鶖鶗鶘鶙鶚鶛鶜鶝鶞鶟鶠鶡鶢�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[249].length;++e)65533!==n[249][e].charCodeAt(0)&&(r[n[249][e]]=63744+e,t[63744+e]=n[249][e])
for(n[250]="����������������������������������������������������������������鶣鶤鶥鶦鶧鶨鶩鶪鶫鶬鶭鶮鶯鶰鶱鶲鶳鶴鶵鶶鶷鶸鶹鶺鶻鶼鶽鶾鶿鷀鷁鷂鷃鷄鷅鷆鷇鷈鷉鷊鷋鷌鷍鷎鷏鷐鷑鷒鷓鷔鷕鷖鷗鷘鷙鷚鷛鷜鷝鷞鷟鷠鷡�鷢鷣鷤鷥鷦鷧鷨鷩鷪鷫鷬鷭鷮鷯鷰鷱鷲鷳鷴鷵鷶鷷鷸鷹鷺鷻鷼鷽鷾鷿鸀鸁鸂�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[250].length;++e)65533!==n[250][e].charCodeAt(0)&&(r[n[250][e]]=64e3+e,t[64e3+e]=n[250][e])
for(n[251]="����������������������������������������������������������������鸃鸄鸅鸆鸇鸈鸉鸊鸋鸌鸍鸎鸏鸐鸑鸒鸓鸔鸕鸖鸗鸘鸙鸚鸛鸜鸝鸞鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴鹵鹶鹷鹸鹹鹺鹻鹼鹽麀�麁麃麄麅麆麉麊麌麍麎麏麐麑麔麕麖麗麘麙麚麛麜麞麠麡麢麣麤麥麧麨麩麪�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[251].length;++e)65533!==n[251][e].charCodeAt(0)&&(r[n[251][e]]=64256+e,t[64256+e]=n[251][e])
for(n[252]="����������������������������������������������������������������麫麬麭麮麯麰麱麲麳麵麶麷麹麺麼麿黀黁黂黃黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰黱黲黳黴黵黶黷黸黺黽黿鼀鼁鼂鼃鼄鼅�鼆鼇鼈鼉鼊鼌鼏鼑鼒鼔鼕鼖鼘鼚鼛鼜鼝鼞鼟鼡鼣鼤鼥鼦鼧鼨鼩鼪鼫鼭鼮鼰鼱�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[252].length;++e)65533!==n[252][e].charCodeAt(0)&&(r[n[252][e]]=64512+e,t[64512+e]=n[252][e])
for(n[253]="����������������������������������������������������������������鼲鼳鼴鼵鼶鼸鼺鼼鼿齀齁齂齃齅齆齇齈齉齊齋齌齍齎齏齒齓齔齕齖齗齘齙齚齛齜齝齞齟齠齡齢齣齤齥齦齧齨齩齪齫齬齭齮齯齰齱齲齳齴齵齶齷齸�齹齺齻齼齽齾龁龂龍龎龏龐龑龒龓龔龕龖龗龘龜龝龞龡龢龣龤龥郎凉秊裏隣�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[253].length;++e)65533!==n[253][e].charCodeAt(0)&&(r[n[253][e]]=64768+e,t[64768+e]=n[253][e])
for(n[254]="����������������������������������������������������������������兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[254].length;++e)65533!==n[254][e].charCodeAt(0)&&(r[n[254][e]]=65024+e,t[65024+e]=n[254][e])
return{enc:r,dec:t}}(),n[949]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[129]="�����������������������������������������������������������������갂갃갅갆갋갌갍갎갏갘갞갟갡갢갣갥갦갧갨갩갪갫갮갲갳갴������갵갶갷갺갻갽갾갿걁걂걃걄걅걆걇걈걉걊걌걎걏걐걑걒걓걕������걖걗걙걚걛걝걞걟걠걡걢걣걤걥걦걧걨걩걪걫걬걭걮걯걲걳걵걶걹걻걼걽걾걿겂겇겈겍겎겏겑겒겓겕겖겗겘겙겚겛겞겢겣겤겥겦겧겫겭겮겱겲겳겴겵겶겷겺겾겿곀곂곃곅곆곇곉곊곋곍곎곏곐곑곒곓곔곖곘곙곚곛곜곝곞곟곢곣곥곦곩곫곭곮곲곴곷곸곹곺곻곾곿괁괂괃괅괇괈괉괊괋괎괐괒괓�".split(""),e=0;e!=n[129].length;++e)65533!==n[129][e].charCodeAt(0)&&(r[n[129][e]]=33024+e,t[33024+e]=n[129][e])
for(n[130]="�����������������������������������������������������������������괔괕괖괗괙괚괛괝괞괟괡괢괣괤괥괦괧괨괪괫괮괯괰괱괲괳������괶괷괹괺괻괽괾괿굀굁굂굃굆굈굊굋굌굍굎굏굑굒굓굕굖굗������굙굚굛굜굝굞굟굠굢굤굥굦굧굨굩굪굫굮굯굱굲굷굸굹굺굾궀궃궄궅궆궇궊궋궍궎궏궑궒궓궔궕궖궗궘궙궚궛궞궟궠궡궢궣궥궦궧궨궩궪궫궬궭궮궯궰궱궲궳궴궵궶궸궹궺궻궼궽궾궿귂귃귅귆귇귉귊귋귌귍귎귏귒귔귕귖귗귘귙귚귛귝귞귟귡귢귣귥귦귧귨귩귪귫귬귭귮귯귰귱귲귳귴귵귶귷�".split(""),e=0;e!=n[130].length;++e)65533!==n[130][e].charCodeAt(0)&&(r[n[130][e]]=33280+e,t[33280+e]=n[130][e])
for(n[131]="�����������������������������������������������������������������귺귻귽귾긂긃긄긅긆긇긊긌긎긏긐긑긒긓긕긖긗긘긙긚긛긜������긝긞긟긠긡긢긣긤긥긦긧긨긩긪긫긬긭긮긯긲긳긵긶긹긻긼������긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗깘깙깚깛깞깢깣깤깦깧깪깫깭깮깯깱깲깳깴깵깶깷깺깾깿꺀꺁꺂꺃꺆꺇꺈꺉꺊꺋꺍꺎꺏꺐꺑꺒꺓꺔꺕꺖꺗꺘꺙꺚꺛꺜꺝꺞꺟꺠꺡꺢꺣꺤꺥꺦꺧꺨꺩꺪꺫꺬꺭꺮꺯꺰꺱꺲꺳꺴꺵꺶꺷꺸꺹꺺꺻꺿껁껂껃껅껆껇껈껉껊껋껎껒껓껔껕껖껗껚껛껝껞껟껠껡껢껣껤껥�".split(""),e=0;e!=n[131].length;++e)65533!==n[131][e].charCodeAt(0)&&(r[n[131][e]]=33536+e,t[33536+e]=n[131][e])
for(n[132]="�����������������������������������������������������������������껦껧껩껪껬껮껯껰껱껲껳껵껶껷껹껺껻껽껾껿꼀꼁꼂꼃꼄꼅������꼆꼉꼊꼋꼌꼎꼏꼑꼒꼓꼔꼕꼖꼗꼘꼙꼚꼛꼜꼝꼞꼟꼠꼡꼢꼣������꼤꼥꼦꼧꼨꼩꼪꼫꼮꼯꼱꼳꼵꼶꼷꼸꼹꼺꼻꼾꽀꽄꽅꽆꽇꽊꽋꽌꽍꽎꽏꽑꽒꽓꽔꽕꽖꽗꽘꽙꽚꽛꽞꽟꽠꽡꽢꽣꽦꽧꽨꽩꽪꽫꽬꽭꽮꽯꽰꽱꽲꽳꽴꽵꽶꽷꽸꽺꽻꽼꽽꽾꽿꾁꾂꾃꾅꾆꾇꾉꾊꾋꾌꾍꾎꾏꾒꾓꾔꾖꾗꾘꾙꾚꾛꾝꾞꾟꾠꾡꾢꾣꾤꾥꾦꾧꾨꾩꾪꾫꾬꾭꾮꾯꾰꾱꾲꾳꾴꾵꾶꾷꾺꾻꾽꾾�".split(""),e=0;e!=n[132].length;++e)65533!==n[132][e].charCodeAt(0)&&(r[n[132][e]]=33792+e,t[33792+e]=n[132][e])
for(n[133]="�����������������������������������������������������������������꾿꿁꿂꿃꿄꿅꿆꿊꿌꿏꿐꿑꿒꿓꿕꿖꿗꿘꿙꿚꿛꿝꿞꿟꿠꿡������꿢꿣꿤꿥꿦꿧꿪꿫꿬꿭꿮꿯꿲꿳꿵꿶꿷꿹꿺꿻꿼꿽꿾꿿뀂뀃������뀅뀆뀇뀈뀉뀊뀋뀍뀎뀏뀑뀒뀓뀕뀖뀗뀘뀙뀚뀛뀞뀟뀠뀡뀢뀣뀤뀥뀦뀧뀩뀪뀫뀬뀭뀮뀯뀰뀱뀲뀳뀴뀵뀶뀷뀸뀹뀺뀻뀼뀽뀾뀿끀끁끂끃끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞끟끠끡끢끣끤끥끦끧끨끩끪끫끬끭끮끯끰끱끲끳끴끵끶끷끸끹끺끻끾끿낁낂낃낅낆낇낈낉낊낋낎낐낒낓낔낕낖낗낛낝낞낣낤�".split(""),e=0;e!=n[133].length;++e)65533!==n[133][e].charCodeAt(0)&&(r[n[133][e]]=34048+e,t[34048+e]=n[133][e])
for(n[134]="�����������������������������������������������������������������낥낦낧낪낰낲낶낷낹낺낻낽낾낿냀냁냂냃냆냊냋냌냍냎냏냒������냓냕냖냗냙냚냛냜냝냞냟냡냢냣냤냦냧냨냩냪냫냬냭냮냯냰������냱냲냳냴냵냶냷냸냹냺냻냼냽냾냿넀넁넂넃넄넅넆넇넊넍넎넏넑넔넕넖넗넚넞넟넠넡넢넦넧넩넪넫넭넮넯넰넱넲넳넶넺넻넼넽넾넿녂녃녅녆녇녉녊녋녌녍녎녏녒녓녖녗녙녚녛녝녞녟녡녢녣녤녥녦녧녨녩녪녫녬녭녮녯녰녱녲녳녴녵녶녷녺녻녽녾녿놁놃놄놅놆놇놊놌놎놏놐놑놕놖놗놙놚놛놝�".split(""),e=0;e!=n[134].length;++e)65533!==n[134][e].charCodeAt(0)&&(r[n[134][e]]=34304+e,t[34304+e]=n[134][e])
for(n[135]="�����������������������������������������������������������������놞놟놠놡놢놣놤놥놦놧놩놪놫놬놭놮놯놰놱놲놳놴놵놶놷놸������놹놺놻놼놽놾놿뇀뇁뇂뇃뇄뇅뇆뇇뇈뇉뇊뇋뇍뇎뇏뇑뇒뇓뇕������뇖뇗뇘뇙뇚뇛뇞뇠뇡뇢뇣뇤뇥뇦뇧뇪뇫뇭뇮뇯뇱뇲뇳뇴뇵뇶뇷뇸뇺뇼뇾뇿눀눁눂눃눆눇눉눊눍눎눏눐눑눒눓눖눘눚눛눜눝눞눟눡눢눣눤눥눦눧눨눩눪눫눬눭눮눯눰눱눲눳눵눶눷눸눹눺눻눽눾눿뉀뉁뉂뉃뉄뉅뉆뉇뉈뉉뉊뉋뉌뉍뉎뉏뉐뉑뉒뉓뉔뉕뉖뉗뉙뉚뉛뉝뉞뉟뉡뉢뉣뉤뉥뉦뉧뉪뉫뉬뉭뉮�".split(""),e=0;e!=n[135].length;++e)65533!==n[135][e].charCodeAt(0)&&(r[n[135][e]]=34560+e,t[34560+e]=n[135][e])
for(n[136]="�����������������������������������������������������������������뉯뉰뉱뉲뉳뉶뉷뉸뉹뉺뉻뉽뉾뉿늀늁늂늃늆늇늈늊늋늌늍늎������늏늒늓늕늖늗늛늜늝늞늟늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷������늸늹늺늻늼늽늾늿닀닁닂닃닄닅닆닇닊닋닍닎닏닑닓닔닕닖닗닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉댊댋댌댍댎댏댒댖댗댘댙댚댛댝댞댟댠댡댢댣댤댥댦댧댨댩댪댫댬댭댮댯댰댱댲댳댴댵댶댷댸댹댺댻댼댽댾댿덀덁덂덃덄덅덆덇덈덉덊덋덌덍덎덏덐덑덒덓덗덙덚덝덠덡덢덣�".split(""),e=0;e!=n[136].length;++e)65533!==n[136][e].charCodeAt(0)&&(r[n[136][e]]=34816+e,t[34816+e]=n[136][e])
for(n[137]="�����������������������������������������������������������������덦덨덪덬덭덯덲덳덵덶덷덹덺덻덼덽덾덿뎂뎆뎇뎈뎉뎊뎋뎍������뎎뎏뎑뎒뎓뎕뎖뎗뎘뎙뎚뎛뎜뎝뎞뎟뎢뎣뎤뎥뎦뎧뎩뎪뎫뎭������뎮뎯뎰뎱뎲뎳뎴뎵뎶뎷뎸뎹뎺뎻뎼뎽뎾뎿돀돁돂돃돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩돪돫돬돭돮돯돰돱돲돳돴돵돶돷돸돹돺돻돽돾돿됀됁됂됃됄됅됆됇됈됉됊됋됌됍됎됏됑됒됓됔됕됖됗됙됚됛됝됞됟됡됢됣됤됥됦됧됪됬됭됮됯됰됱됲됳됵됶됷됸됹됺됻됼됽됾됿둀둁둂둃둄�".split(""),e=0;e!=n[137].length;++e)65533!==n[137][e].charCodeAt(0)&&(r[n[137][e]]=35072+e,t[35072+e]=n[137][e])
for(n[138]="�����������������������������������������������������������������둅둆둇둈둉둊둋둌둍둎둏둒둓둕둖둗둙둚둛둜둝둞둟둢둤둦������둧둨둩둪둫둭둮둯둰둱둲둳둴둵둶둷둸둹둺둻둼둽둾둿뒁뒂������뒃뒄뒅뒆뒇뒉뒊뒋뒌뒍뒎뒏뒐뒑뒒뒓뒔뒕뒖뒗뒘뒙뒚뒛뒜뒞뒟뒠뒡뒢뒣뒥뒦뒧뒩뒪뒫뒭뒮뒯뒰뒱뒲뒳뒴뒶뒸뒺뒻뒼뒽뒾뒿듁듂듃듅듆듇듉듊듋듌듍듎듏듑듒듓듔듖듗듘듙듚듛듞듟듡듢듥듧듨듩듪듫듮듰듲듳듴듵듶듷듹듺듻듼듽듾듿딀딁딂딃딄딅딆딇딈딉딊딋딌딍딎딏딐딑딒딓딖딗딙딚딝�".split(""),e=0;e!=n[138].length;++e)65533!==n[138][e].charCodeAt(0)&&(r[n[138][e]]=35328+e,t[35328+e]=n[138][e])
for(n[139]="�����������������������������������������������������������������딞딟딠딡딢딣딦딫딬딭딮딯딲딳딵딶딷딹딺딻딼딽딾딿땂땆������땇땈땉땊땎땏땑땒땓땕땖땗땘땙땚땛땞땢땣땤땥땦땧땨땩땪������땫땬땭땮땯땰땱땲땳땴땵땶땷땸땹땺땻땼땽땾땿떀떁떂떃떄떅떆떇떈떉떊떋떌떍떎떏떐떑떒떓떔떕떖떗떘떙떚떛떜떝떞떟떢떣떥떦떧떩떬떭떮떯떲떶떷떸떹떺떾떿뗁뗂뗃뗅뗆뗇뗈뗉뗊뗋뗎뗒뗓뗔뗕뗖뗗뗙뗚뗛뗜뗝뗞뗟뗠뗡뗢뗣뗤뗥뗦뗧뗨뗩뗪뗫뗭뗮뗯뗰뗱뗲뗳뗴뗵뗶뗷뗸뗹뗺뗻뗼뗽뗾뗿�".split(""),e=0;e!=n[139].length;++e)65533!==n[139][e].charCodeAt(0)&&(r[n[139][e]]=35584+e,t[35584+e]=n[139][e])
for(n[140]="�����������������������������������������������������������������똀똁똂똃똄똅똆똇똈똉똊똋똌똍똎똏똒똓똕똖똗똙똚똛똜똝������똞똟똠똡똢똣똤똦똧똨똩똪똫똭똮똯똰똱똲똳똵똶똷똸똹똺������똻똼똽똾똿뙀뙁뙂뙃뙄뙅뙆뙇뙉뙊뙋뙌뙍뙎뙏뙐뙑뙒뙓뙔뙕뙖뙗뙘뙙뙚뙛뙜뙝뙞뙟뙠뙡뙢뙣뙥뙦뙧뙩뙪뙫뙬뙭뙮뙯뙰뙱뙲뙳뙴뙵뙶뙷뙸뙹뙺뙻뙼뙽뙾뙿뚀뚁뚂뚃뚄뚅뚆뚇뚈뚉뚊뚋뚌뚍뚎뚏뚐뚑뚒뚓뚔뚕뚖뚗뚘뚙뚚뚛뚞뚟뚡뚢뚣뚥뚦뚧뚨뚩뚪뚭뚮뚯뚰뚲뚳뚴뚵뚶뚷뚸뚹뚺뚻뚼뚽뚾뚿뛀뛁뛂�".split(""),e=0;e!=n[140].length;++e)65533!==n[140][e].charCodeAt(0)&&(r[n[140][e]]=35840+e,t[35840+e]=n[140][e])
for(n[141]="�����������������������������������������������������������������뛃뛄뛅뛆뛇뛈뛉뛊뛋뛌뛍뛎뛏뛐뛑뛒뛓뛕뛖뛗뛘뛙뛚뛛뛜뛝������뛞뛟뛠뛡뛢뛣뛤뛥뛦뛧뛨뛩뛪뛫뛬뛭뛮뛯뛱뛲뛳뛵뛶뛷뛹뛺������뛻뛼뛽뛾뛿뜂뜃뜄뜆뜇뜈뜉뜊뜋뜌뜍뜎뜏뜐뜑뜒뜓뜔뜕뜖뜗뜘뜙뜚뜛뜜뜝뜞뜟뜠뜡뜢뜣뜤뜥뜦뜧뜪뜫뜭뜮뜱뜲뜳뜴뜵뜶뜷뜺뜼뜽뜾뜿띀띁띂띃띅띆띇띉띊띋띍띎띏띐띑띒띓띖띗띘띙띚띛띜띝띞띟띡띢띣띥띦띧띩띪띫띬띭띮띯띲띴띶띷띸띹띺띻띾띿랁랂랃랅랆랇랈랉랊랋랎랓랔랕랚랛랝랞�".split(""),e=0;e!=n[141].length;++e)65533!==n[141][e].charCodeAt(0)&&(r[n[141][e]]=36096+e,t[36096+e]=n[141][e])
for(n[142]="�����������������������������������������������������������������랟랡랢랣랤랥랦랧랪랮랯랰랱랲랳랶랷랹랺랻랼랽랾랿럀럁������럂럃럄럅럆럈럊럋럌럍럎럏럐럑럒럓럔럕럖럗럘럙럚럛럜럝������럞럟럠럡럢럣럤럥럦럧럨럩럪럫럮럯럱럲럳럵럶럷럸럹럺럻럾렂렃렄렅렆렊렋렍렎렏렑렒렓렔렕렖렗렚렜렞렟렠렡렢렣렦렧렩렪렫렭렮렯렰렱렲렳렶렺렻렼렽렾렿롁롂롃롅롆롇롈롉롊롋롌롍롎롏롐롒롔롕롖롗롘롙롚롛롞롟롡롢롣롥롦롧롨롩롪롫롮롰롲롳롴롵롶롷롹롺롻롽롾롿뢀뢁뢂뢃뢄�".split(""),e=0;e!=n[142].length;++e)65533!==n[142][e].charCodeAt(0)&&(r[n[142][e]]=36352+e,t[36352+e]=n[142][e])
for(n[143]="�����������������������������������������������������������������뢅뢆뢇뢈뢉뢊뢋뢌뢎뢏뢐뢑뢒뢓뢔뢕뢖뢗뢘뢙뢚뢛뢜뢝뢞뢟������뢠뢡뢢뢣뢤뢥뢦뢧뢩뢪뢫뢬뢭뢮뢯뢱뢲뢳뢵뢶뢷뢹뢺뢻뢼뢽������뢾뢿룂룄룆룇룈룉룊룋룍룎룏룑룒룓룕룖룗룘룙룚룛룜룞룠룢룣룤룥룦룧룪룫룭룮룯룱룲룳룴룵룶룷룺룼룾룿뤀뤁뤂뤃뤅뤆뤇뤈뤉뤊뤋뤌뤍뤎뤏뤐뤑뤒뤓뤔뤕뤖뤗뤙뤚뤛뤜뤝뤞뤟뤡뤢뤣뤤뤥뤦뤧뤨뤩뤪뤫뤬뤭뤮뤯뤰뤱뤲뤳뤴뤵뤶뤷뤸뤹뤺뤻뤾뤿륁륂륃륅륆륇륈륉륊륋륍륎륐륒륓륔륕륖륗�".split(""),e=0;e!=n[143].length;++e)65533!==n[143][e].charCodeAt(0)&&(r[n[143][e]]=36608+e,t[36608+e]=n[143][e])
for(n[144]="�����������������������������������������������������������������륚륛륝륞륟륡륢륣륤륥륦륧륪륬륮륯륰륱륲륳륶륷륹륺륻륽������륾륿릀릁릂릃릆릈릋릌릏릐릑릒릓릔릕릖릗릘릙릚릛릜릝릞������릟릠릡릢릣릤릥릦릧릨릩릪릫릮릯릱릲릳릵릶릷릸릹릺릻릾맀맂맃맄맅맆맇맊맋맍맓맔맕맖맗맚맜맟맠맢맦맧맩맪맫맭맮맯맰맱맲맳맶맻맼맽맾맿먂먃먄먅먆먇먉먊먋먌먍먎먏먐먑먒먓먔먖먗먘먙먚먛먜먝먞먟먠먡먢먣먤먥먦먧먨먩먪먫먬먭먮먯먰먱먲먳먴먵먶먷먺먻먽먾먿멁멃멄멅멆�".split(""),e=0;e!=n[144].length;++e)65533!==n[144][e].charCodeAt(0)&&(r[n[144][e]]=36864+e,t[36864+e]=n[144][e])
for(n[145]="�����������������������������������������������������������������멇멊멌멏멐멑멒멖멗멙멚멛멝멞멟멠멡멢멣멦멪멫멬멭멮멯������멲멳멵멶멷멹멺멻멼멽멾멿몀몁몂몆몈몉몊몋몍몎몏몐몑몒������몓몔몕몖몗몘몙몚몛몜몝몞몟몠몡몢몣몤몥몦몧몪몭몮몯몱몳몴몵몶몷몺몼몾몿뫀뫁뫂뫃뫅뫆뫇뫉뫊뫋뫌뫍뫎뫏뫐뫑뫒뫓뫔뫕뫖뫗뫚뫛뫜뫝뫞뫟뫠뫡뫢뫣뫤뫥뫦뫧뫨뫩뫪뫫뫬뫭뫮뫯뫰뫱뫲뫳뫴뫵뫶뫷뫸뫹뫺뫻뫽뫾뫿묁묂묃묅묆묇묈묉묊묋묌묎묐묒묓묔묕묖묗묙묚묛묝묞묟묡묢묣묤묥묦묧�".split(""),e=0;e!=n[145].length;++e)65533!==n[145][e].charCodeAt(0)&&(r[n[145][e]]=37120+e,t[37120+e]=n[145][e])
for(n[146]="�����������������������������������������������������������������묨묪묬묭묮묯묰묱묲묳묷묹묺묿뭀뭁뭂뭃뭆뭈뭊뭋뭌뭎뭑뭒������뭓뭕뭖뭗뭙뭚뭛뭜뭝뭞뭟뭠뭢뭤뭥뭦뭧뭨뭩뭪뭫뭭뭮뭯뭰뭱������뭲뭳뭴뭵뭶뭷뭸뭹뭺뭻뭼뭽뭾뭿뮀뮁뮂뮃뮄뮅뮆뮇뮉뮊뮋뮍뮎뮏뮑뮒뮓뮔뮕뮖뮗뮘뮙뮚뮛뮜뮝뮞뮟뮠뮡뮢뮣뮥뮦뮧뮩뮪뮫뮭뮮뮯뮰뮱뮲뮳뮵뮶뮸뮹뮺뮻뮼뮽뮾뮿믁믂믃믅믆믇믉믊믋믌믍믎믏믑믒믔믕믖믗믘믙믚믛믜믝믞믟믠믡믢믣믤믥믦믧믨믩믪믫믬믭믮믯믰믱믲믳믴믵믶믷믺믻믽믾밁�".split(""),e=0;e!=n[146].length;++e)65533!==n[146][e].charCodeAt(0)&&(r[n[146][e]]=37376+e,t[37376+e]=n[146][e])
for(n[147]="�����������������������������������������������������������������밃밄밅밆밇밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵������밶밷밹밺밻밼밽밾밿뱂뱆뱇뱈뱊뱋뱎뱏뱑뱒뱓뱔뱕뱖뱗뱘뱙������뱚뱛뱜뱞뱟뱠뱡뱢뱣뱤뱥뱦뱧뱨뱩뱪뱫뱬뱭뱮뱯뱰뱱뱲뱳뱴뱵뱶뱷뱸뱹뱺뱻뱼뱽뱾뱿벀벁벂벃벆벇벉벊벍벏벐벑벒벓벖벘벛벜벝벞벟벢벣벥벦벩벪벫벬벭벮벯벲벶벷벸벹벺벻벾벿볁볂볃볅볆볇볈볉볊볋볌볎볒볓볔볖볗볙볚볛볝볞볟볠볡볢볣볤볥볦볧볨볩볪볫볬볭볮볯볰볱볲볳볷볹볺볻볽�".split(""),e=0;e!=n[147].length;++e)65533!==n[147][e].charCodeAt(0)&&(r[n[147][e]]=37632+e,t[37632+e]=n[147][e])
for(n[148]="�����������������������������������������������������������������볾볿봀봁봂봃봆봈봊봋봌봍봎봏봑봒봓봕봖봗봘봙봚봛봜봝������봞봟봠봡봢봣봥봦봧봨봩봪봫봭봮봯봰봱봲봳봴봵봶봷봸봹������봺봻봼봽봾봿뵁뵂뵃뵄뵅뵆뵇뵊뵋뵍뵎뵏뵑뵒뵓뵔뵕뵖뵗뵚뵛뵜뵝뵞뵟뵠뵡뵢뵣뵥뵦뵧뵩뵪뵫뵬뵭뵮뵯뵰뵱뵲뵳뵴뵵뵶뵷뵸뵹뵺뵻뵼뵽뵾뵿붂붃붅붆붋붌붍붎붏붒붔붖붗붘붛붝붞붟붠붡붢붣붥붦붧붨붩붪붫붬붭붮붯붱붲붳붴붵붶붷붹붺붻붼붽붾붿뷀뷁뷂뷃뷄뷅뷆뷇뷈뷉뷊뷋뷌뷍뷎뷏뷐뷑�".split(""),e=0;e!=n[148].length;++e)65533!==n[148][e].charCodeAt(0)&&(r[n[148][e]]=37888+e,t[37888+e]=n[148][e])
for(n[149]="�����������������������������������������������������������������뷒뷓뷖뷗뷙뷚뷛뷝뷞뷟뷠뷡뷢뷣뷤뷥뷦뷧뷨뷪뷫뷬뷭뷮뷯뷱������뷲뷳뷵뷶뷷뷹뷺뷻뷼뷽뷾뷿븁븂븄븆븇븈븉븊븋븎븏븑븒븓������븕븖븗븘븙븚븛븞븠븡븢븣븤븥븦븧븨븩븪븫븬븭븮븯븰븱븲븳븴븵븶븷븸븹븺븻븼븽븾븿빀빁빂빃빆빇빉빊빋빍빏빐빑빒빓빖빘빜빝빞빟빢빣빥빦빧빩빫빬빭빮빯빲빶빷빸빹빺빾빿뺁뺂뺃뺅뺆뺇뺈뺉뺊뺋뺎뺒뺓뺔뺕뺖뺗뺚뺛뺜뺝뺞뺟뺠뺡뺢뺣뺤뺥뺦뺧뺩뺪뺫뺬뺭뺮뺯뺰뺱뺲뺳뺴뺵뺶뺷�".split(""),e=0;e!=n[149].length;++e)65533!==n[149][e].charCodeAt(0)&&(r[n[149][e]]=38144+e,t[38144+e]=n[149][e])
for(n[150]="�����������������������������������������������������������������뺸뺹뺺뺻뺼뺽뺾뺿뻀뻁뻂뻃뻄뻅뻆뻇뻈뻉뻊뻋뻌뻍뻎뻏뻒뻓������뻕뻖뻙뻚뻛뻜뻝뻞뻟뻡뻢뻦뻧뻨뻩뻪뻫뻭뻮뻯뻰뻱뻲뻳뻴뻵������뻶뻷뻸뻹뻺뻻뻼뻽뻾뻿뼀뼂뼃뼄뼅뼆뼇뼊뼋뼌뼍뼎뼏뼐뼑뼒뼓뼔뼕뼖뼗뼚뼞뼟뼠뼡뼢뼣뼤뼥뼦뼧뼨뼩뼪뼫뼬뼭뼮뼯뼰뼱뼲뼳뼴뼵뼶뼷뼸뼹뼺뼻뼼뼽뼾뼿뽂뽃뽅뽆뽇뽉뽊뽋뽌뽍뽎뽏뽒뽓뽔뽖뽗뽘뽙뽚뽛뽜뽝뽞뽟뽠뽡뽢뽣뽤뽥뽦뽧뽨뽩뽪뽫뽬뽭뽮뽯뽰뽱뽲뽳뽴뽵뽶뽷뽸뽹뽺뽻뽼뽽뽾뽿뾀뾁뾂�".split(""),e=0;e!=n[150].length;++e)65533!==n[150][e].charCodeAt(0)&&(r[n[150][e]]=38400+e,t[38400+e]=n[150][e])
for(n[151]="�����������������������������������������������������������������뾃뾄뾅뾆뾇뾈뾉뾊뾋뾌뾍뾎뾏뾐뾑뾒뾓뾕뾖뾗뾘뾙뾚뾛뾜뾝������뾞뾟뾠뾡뾢뾣뾤뾥뾦뾧뾨뾩뾪뾫뾬뾭뾮뾯뾱뾲뾳뾴뾵뾶뾷뾸������뾹뾺뾻뾼뾽뾾뾿뿀뿁뿂뿃뿄뿆뿇뿈뿉뿊뿋뿎뿏뿑뿒뿓뿕뿖뿗뿘뿙뿚뿛뿝뿞뿠뿢뿣뿤뿥뿦뿧뿨뿩뿪뿫뿬뿭뿮뿯뿰뿱뿲뿳뿴뿵뿶뿷뿸뿹뿺뿻뿼뿽뿾뿿쀀쀁쀂쀃쀄쀅쀆쀇쀈쀉쀊쀋쀌쀍쀎쀏쀐쀑쀒쀓쀔쀕쀖쀗쀘쀙쀚쀛쀜쀝쀞쀟쀠쀡쀢쀣쀤쀥쀦쀧쀨쀩쀪쀫쀬쀭쀮쀯쀰쀱쀲쀳쀴쀵쀶쀷쀸쀹쀺쀻쀽쀾쀿�".split(""),e=0;e!=n[151].length;++e)65533!==n[151][e].charCodeAt(0)&&(r[n[151][e]]=38656+e,t[38656+e]=n[151][e])
for(n[152]="�����������������������������������������������������������������쁀쁁쁂쁃쁄쁅쁆쁇쁈쁉쁊쁋쁌쁍쁎쁏쁐쁒쁓쁔쁕쁖쁗쁙쁚쁛������쁝쁞쁟쁡쁢쁣쁤쁥쁦쁧쁪쁫쁬쁭쁮쁯쁰쁱쁲쁳쁴쁵쁶쁷쁸쁹������쁺쁻쁼쁽쁾쁿삀삁삂삃삄삅삆삇삈삉삊삋삌삍삎삏삒삓삕삖삗삙삚삛삜삝삞삟삢삤삦삧삨삩삪삫삮삱삲삷삸삹삺삻삾샂샃샄샆샇샊샋샍샎샏샑샒샓샔샕샖샗샚샞샟샠샡샢샣샦샧샩샪샫샭샮샯샰샱샲샳샶샸샺샻샼샽샾샿섁섂섃섅섆섇섉섊섋섌섍섎섏섑섒섓섔섖섗섘섙섚섛섡섢섥섨섩섪섫섮�".split(""),e=0;e!=n[152].length;++e)65533!==n[152][e].charCodeAt(0)&&(r[n[152][e]]=38912+e,t[38912+e]=n[152][e])
for(n[153]="�����������������������������������������������������������������섲섳섴섵섷섺섻섽섾섿셁셂셃셄셅셆셇셊셎셏셐셑셒셓셖셗������셙셚셛셝셞셟셠셡셢셣셦셪셫셬셭셮셯셱셲셳셵셶셷셹셺셻������셼셽셾셿솀솁솂솃솄솆솇솈솉솊솋솏솑솒솓솕솗솘솙솚솛솞솠솢솣솤솦솧솪솫솭솮솯솱솲솳솴솵솶솷솸솹솺솻솼솾솿쇀쇁쇂쇃쇅쇆쇇쇉쇊쇋쇍쇎쇏쇐쇑쇒쇓쇕쇖쇙쇚쇛쇜쇝쇞쇟쇡쇢쇣쇥쇦쇧쇩쇪쇫쇬쇭쇮쇯쇲쇴쇵쇶쇷쇸쇹쇺쇻쇾쇿숁숂숃숅숆숇숈숉숊숋숎숐숒숓숔숕숖숗숚숛숝숞숡숢숣�".split(""),e=0;e!=n[153].length;++e)65533!==n[153][e].charCodeAt(0)&&(r[n[153][e]]=39168+e,t[39168+e]=n[153][e])
for(n[154]="�����������������������������������������������������������������숤숥숦숧숪숬숮숰숳숵숶숷숸숹숺숻숼숽숾숿쉀쉁쉂쉃쉄쉅������쉆쉇쉉쉊쉋쉌쉍쉎쉏쉒쉓쉕쉖쉗쉙쉚쉛쉜쉝쉞쉟쉡쉢쉣쉤쉦������쉧쉨쉩쉪쉫쉮쉯쉱쉲쉳쉵쉶쉷쉸쉹쉺쉻쉾슀슂슃슄슅슆슇슊슋슌슍슎슏슑슒슓슔슕슖슗슙슚슜슞슟슠슡슢슣슦슧슩슪슫슮슯슰슱슲슳슶슸슺슻슼슽슾슿싀싁싂싃싄싅싆싇싈싉싊싋싌싍싎싏싐싑싒싓싔싕싖싗싘싙싚싛싞싟싡싢싥싦싧싨싩싪싮싰싲싳싴싵싷싺싽싾싿쌁쌂쌃쌄쌅쌆쌇쌊쌋쌎쌏�".split(""),e=0;e!=n[154].length;++e)65533!==n[154][e].charCodeAt(0)&&(r[n[154][e]]=39424+e,t[39424+e]=n[154][e])
for(n[155]="�����������������������������������������������������������������쌐쌑쌒쌖쌗쌙쌚쌛쌝쌞쌟쌠쌡쌢쌣쌦쌧쌪쌫쌬쌭쌮쌯쌰쌱쌲������쌳쌴쌵쌶쌷쌸쌹쌺쌻쌼쌽쌾쌿썀썁썂썃썄썆썇썈썉썊썋썌썍������썎썏썐썑썒썓썔썕썖썗썘썙썚썛썜썝썞썟썠썡썢썣썤썥썦썧썪썫썭썮썯썱썳썴썵썶썷썺썻썾썿쎀쎁쎂쎃쎅쎆쎇쎉쎊쎋쎍쎎쎏쎐쎑쎒쎓쎔쎕쎖쎗쎘쎙쎚쎛쎜쎝쎞쎟쎠쎡쎢쎣쎤쎥쎦쎧쎨쎩쎪쎫쎬쎭쎮쎯쎰쎱쎲쎳쎴쎵쎶쎷쎸쎹쎺쎻쎼쎽쎾쎿쏁쏂쏃쏄쏅쏆쏇쏈쏉쏊쏋쏌쏍쏎쏏쏐쏑쏒쏓쏔쏕쏖쏗쏚�".split(""),e=0;e!=n[155].length;++e)65533!==n[155][e].charCodeAt(0)&&(r[n[155][e]]=39680+e,t[39680+e]=n[155][e])
for(n[156]="�����������������������������������������������������������������쏛쏝쏞쏡쏣쏤쏥쏦쏧쏪쏫쏬쏮쏯쏰쏱쏲쏳쏶쏷쏹쏺쏻쏼쏽쏾������쏿쐀쐁쐂쐃쐄쐅쐆쐇쐉쐊쐋쐌쐍쐎쐏쐑쐒쐓쐔쐕쐖쐗쐘쐙쐚������쐛쐜쐝쐞쐟쐠쐡쐢쐣쐥쐦쐧쐨쐩쐪쐫쐭쐮쐯쐱쐲쐳쐵쐶쐷쐸쐹쐺쐻쐾쐿쑀쑁쑂쑃쑄쑅쑆쑇쑉쑊쑋쑌쑍쑎쑏쑐쑑쑒쑓쑔쑕쑖쑗쑘쑙쑚쑛쑜쑝쑞쑟쑠쑡쑢쑣쑦쑧쑩쑪쑫쑭쑮쑯쑰쑱쑲쑳쑶쑷쑸쑺쑻쑼쑽쑾쑿쒁쒂쒃쒄쒅쒆쒇쒈쒉쒊쒋쒌쒍쒎쒏쒐쒑쒒쒓쒕쒖쒗쒘쒙쒚쒛쒝쒞쒟쒠쒡쒢쒣쒤쒥쒦쒧쒨쒩�".split(""),e=0;e!=n[156].length;++e)65533!==n[156][e].charCodeAt(0)&&(r[n[156][e]]=39936+e,t[39936+e]=n[156][e])
for(n[157]="�����������������������������������������������������������������쒪쒫쒬쒭쒮쒯쒰쒱쒲쒳쒴쒵쒶쒷쒹쒺쒻쒽쒾쒿쓀쓁쓂쓃쓄쓅������쓆쓇쓈쓉쓊쓋쓌쓍쓎쓏쓐쓑쓒쓓쓔쓕쓖쓗쓘쓙쓚쓛쓜쓝쓞쓟������쓠쓡쓢쓣쓤쓥쓦쓧쓨쓪쓫쓬쓭쓮쓯쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂씃씄씅씆씇씈씉씊씋씍씎씏씑씒씓씕씖씗씘씙씚씛씝씞씟씠씡씢씣씤씥씦씧씪씫씭씮씯씱씲씳씴씵씶씷씺씼씾씿앀앁앂앃앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩앪앫앬앭앮앯앲앶앷앸앹앺앻앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔�".split(""),e=0;e!=n[157].length;++e)65533!==n[157][e].charCodeAt(0)&&(r[n[157][e]]=40192+e,t[40192+e]=n[157][e])
for(n[158]="�����������������������������������������������������������������얖얙얚얛얝얞얟얡얢얣얤얥얦얧얨얪얫얬얭얮얯얰얱얲얳얶������얷얺얿엀엁엂엃엋엍엏엒엓엕엖엗엙엚엛엜엝엞엟엢엤엦엧������엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑옒옓옔옕옖옗옚옝옞옟옠옡옢옣옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉왊왋왌왍왎왏왒왖왗왘왙왚왛왞왟왡왢왣왤왥왦왧왨왩왪왫왭왮왰왲왳왴왵왶왷왺왻왽왾왿욁욂욃욄욅욆욇욊욌욎욏욐욑욒욓욖욗욙욚욛욝욞욟욠욡욢욣욦�".split(""),e=0;e!=n[158].length;++e)65533!==n[158][e].charCodeAt(0)&&(r[n[158][e]]=40448+e,t[40448+e]=n[158][e])
for(n[159]="�����������������������������������������������������������������욨욪욫욬욭욮욯욲욳욵욶욷욻욼욽욾욿웂웄웆웇웈웉웊웋웎������웏웑웒웓웕웖웗웘웙웚웛웞웟웢웣웤웥웦웧웪웫웭웮웯웱웲������웳웴웵웶웷웺웻웼웾웿윀윁윂윃윆윇윉윊윋윍윎윏윐윑윒윓윖윘윚윛윜윝윞윟윢윣윥윦윧윩윪윫윬윭윮윯윲윴윶윸윹윺윻윾윿읁읂읃읅읆읇읈읉읋읎읐읙읚읛읝읞읟읡읢읣읤읥읦읧읩읪읬읭읮읯읰읱읲읳읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛잜잝잞잟잢잧잨잩잪잫잮잯잱잲잳잵잶잷�".split(""),e=0;e!=n[159].length;++e)65533!==n[159][e].charCodeAt(0)&&(r[n[159][e]]=40704+e,t[40704+e]=n[159][e])
for(n[160]="�����������������������������������������������������������������잸잹잺잻잾쟂쟃쟄쟅쟆쟇쟊쟋쟍쟏쟑쟒쟓쟔쟕쟖쟗쟙쟚쟛쟜������쟞쟟쟠쟡쟢쟣쟥쟦쟧쟩쟪쟫쟭쟮쟯쟰쟱쟲쟳쟴쟵쟶쟷쟸쟹쟺������쟻쟼쟽쟾쟿젂젃젅젆젇젉젋젌젍젎젏젒젔젗젘젙젚젛젞젟젡젢젣젥젦젧젨젩젪젫젮젰젲젳젴젵젶젷젹젺젻젽젾젿졁졂졃졄졅졆졇졊졋졎졏졐졑졒졓졕졖졗졘졙졚졛졜졝졞졟졠졡졢졣졤졥졦졧졨졩졪졫졬졭졮졯졲졳졵졶졷졹졻졼졽졾졿좂좄좈좉좊좎좏좐좑좒좓좕좖좗좘좙좚좛좜좞좠좢좣좤�".split(""),e=0;e!=n[160].length;++e)65533!==n[160][e].charCodeAt(0)&&(r[n[160][e]]=40960+e,t[40960+e]=n[160][e])
for(n[161]="�����������������������������������������������������������������좥좦좧좩좪좫좬좭좮좯좰좱좲좳좴좵좶좷좸좹좺좻좾좿죀죁������죂죃죅죆죇죉죊죋죍죎죏죐죑죒죓죖죘죚죛죜죝죞죟죢죣죥������죦죧죨죩죪죫죬죭죮죯죰죱죲죳죴죶죷죸죹죺죻죾죿줁줂줃줇줈줉줊줋줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈〉《》「」『』【】±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="�����������������������������������������������������������������줐줒줓줔줕줖줗줙줚줛줜줝줞줟줠줡줢줣줤줥줦줧줨줩줪줫������줭줮줯줰줱줲줳줵줶줷줸줹줺줻줼줽줾줿쥀쥁쥂쥃쥄쥅쥆쥇������쥈쥉쥊쥋쥌쥍쥎쥏쥒쥓쥕쥖쥗쥙쥚쥛쥜쥝쥞쥟쥢쥤쥥쥦쥧쥨쥩쥪쥫쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®������������������������".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="�����������������������������������������������������������������쥱쥲쥳쥵쥶쥷쥸쥹쥺쥻쥽쥾쥿즀즁즂즃즄즅즆즇즊즋즍즎즏������즑즒즓즔즕즖즗즚즜즞즟즠즡즢즣즤즥즦즧즨즩즪즫즬즭즮������즯즰즱즲즳즴즵즶즷즸즹즺즻즼즽즾즿짂짃짅짆짉짋짌짍짎짏짒짔짗짘짛！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［￦］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="�����������������������������������������������������������������짞짟짡짣짥짦짨짩짪짫짮짲짳짴짵짶짷짺짻짽짾짿쨁쨂쨃쨄������쨅쨆쨇쨊쨎쨏쨐쨑쨒쨓쨕쨖쨗쨙쨚쨛쨜쨝쨞쨟쨠쨡쨢쨣쨤쨥������쨦쨧쨨쨪쨫쨬쨭쨮쨯쨰쨱쨲쨳쨴쨵쨶쨷쨸쨹쨺쨻쨼쨽쨾쨿쩀쩁쩂쩃쩄쩅쩆ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣㅤㅥㅦㅧㅨㅩㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆇㆈㆉㆊㆋㆌㆍㆎ�".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="�����������������������������������������������������������������쩇쩈쩉쩊쩋쩎쩏쩑쩒쩓쩕쩖쩗쩘쩙쩚쩛쩞쩢쩣쩤쩥쩦쩧쩩쩪������쩫쩬쩭쩮쩯쩰쩱쩲쩳쩴쩵쩶쩷쩸쩹쩺쩻쩼쩾쩿쪀쪁쪂쪃쪅쪆������쪇쪈쪉쪊쪋쪌쪍쪎쪏쪐쪑쪒쪓쪔쪕쪖쪗쪙쪚쪛쪜쪝쪞쪟쪠쪡쪢쪣쪤쪥쪦쪧ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ�����ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ�������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�������".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="�����������������������������������������������������������������쪨쪩쪪쪫쪬쪭쪮쪯쪰쪱쪲쪳쪴쪵쪶쪷쪸쪹쪺쪻쪾쪿쫁쫂쫃쫅������쫆쫇쫈쫉쫊쫋쫎쫐쫒쫔쫕쫖쫗쫚쫛쫜쫝쫞쫟쫡쫢쫣쫤쫥쫦쫧������쫨쫩쫪쫫쫭쫮쫯쫰쫱쫲쫳쫵쫶쫷쫸쫹쫺쫻쫼쫽쫾쫿쬀쬁쬂쬃쬄쬅쬆쬇쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃╄╅╆╇╈╉╊���������������������������".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="�����������������������������������������������������������������쬋쬌쬍쬎쬏쬑쬒쬓쬕쬖쬗쬙쬚쬛쬜쬝쬞쬟쬢쬣쬤쬥쬦쬧쬨쬩������쬪쬫쬬쬭쬮쬯쬰쬱쬲쬳쬴쬵쬶쬷쬸쬹쬺쬻쬼쬽쬾쬿쭀쭂쭃쭄������쭅쭆쭇쭊쭋쭍쭎쭏쭑쭒쭓쭔쭕쭖쭗쭚쭛쭜쭞쭟쭠쭡쭢쭣쭥쭦쭧쭨쭩쭪쭫쭬㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙㎚㎛㎜㎝㎞㎟㎠㎡㎢㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰㎱㎲㎳㎴㎵㎶㎷㎸㎹㎀㎁㎂㎃㎄㎺㎻㎼㎽㎾㎿㎐㎑㎒㎓㎔Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆����������������".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="�����������������������������������������������������������������쭭쭮쭯쭰쭱쭲쭳쭴쭵쭶쭷쭺쭻쭼쭽쭾쭿쮀쮁쮂쮃쮄쮅쮆쮇쮈������쮉쮊쮋쮌쮍쮎쮏쮐쮑쮒쮓쮔쮕쮖쮗쮘쮙쮚쮛쮝쮞쮟쮠쮡쮢쮣������쮤쮥쮦쮧쮨쮩쮪쮫쮬쮭쮮쮯쮰쮱쮲쮳쮴쮵쮶쮷쮹쮺쮻쮼쮽쮾쮿쯀쯁쯂쯃쯄ÆÐªĦ�Ĳ�ĿŁØŒºÞŦŊ�㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭㉮㉯㉰㉱㉲㉳㉴㉵㉶㉷㉸㉹㉺㉻ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮½⅓⅔¼¾⅛⅜⅝⅞�".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="�����������������������������������������������������������������쯅쯆쯇쯈쯉쯊쯋쯌쯍쯎쯏쯐쯑쯒쯓쯕쯖쯗쯘쯙쯚쯛쯜쯝쯞쯟������쯠쯡쯢쯣쯥쯦쯨쯪쯫쯬쯭쯮쯯쯰쯱쯲쯳쯴쯵쯶쯷쯸쯹쯺쯻쯼������쯽쯾쯿찀찁찂찃찄찅찆찇찈찉찊찋찎찏찑찒찓찕찖찗찘찙찚찛찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀㈁㈂㈃㈄㈅㈆㈇㈈㈉㈊㈋㈌㈍㈎㈏㈐㈑㈒㈓㈔㈕㈖㈗㈘㈙㈚㈛⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂¹²³⁴ⁿ₁₂₃₄�".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[170]="�����������������������������������������������������������������찥찦찪찫찭찯찱찲찳찴찵찶찷찺찿챀챁챂챃챆챇챉챊챋챍챎������챏챐챑챒챓챖챚챛챜챝챞챟챡챢챣챥챧챩챪챫챬챭챮챯챱챲������챳챴챶챷챸챹챺챻챼챽챾챿첀첁첂첃첄첅첆첇첈첉첊첋첌첍첎첏첐첑첒첓ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(""),e=0;e!=n[170].length;++e)65533!==n[170][e].charCodeAt(0)&&(r[n[170][e]]=43520+e,t[43520+e]=n[170][e])
for(n[171]="�����������������������������������������������������������������첔첕첖첗첚첛첝첞첟첡첢첣첤첥첦첧첪첮첯첰첱첲첳첶첷첹������첺첻첽첾첿쳀쳁쳂쳃쳆쳈쳊쳋쳌쳍쳎쳏쳑쳒쳓쳕쳖쳗쳘쳙쳚������쳛쳜쳝쳞쳟쳠쳡쳢쳣쳥쳦쳧쳨쳩쳪쳫쳭쳮쳯쳱쳲쳳쳴쳵쳶쳷쳸쳹쳺쳻쳼쳽ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(""),e=0;e!=n[171].length;++e)65533!==n[171][e].charCodeAt(0)&&(r[n[171][e]]=43776+e,t[43776+e]=n[171][e])
for(n[172]="�����������������������������������������������������������������쳾쳿촀촂촃촄촅촆촇촊촋촍촎촏촑촒촓촔촕촖촗촚촜촞촟촠������촡촢촣촥촦촧촩촪촫촭촮촯촰촱촲촳촴촵촶촷촸촺촻촼촽촾������촿쵀쵁쵂쵃쵄쵅쵆쵇쵈쵉쵊쵋쵌쵍쵎쵏쵐쵑쵒쵓쵔쵕쵖쵗쵘쵙쵚쵛쵝쵞쵟АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(""),e=0;e!=n[172].length;++e)65533!==n[172][e].charCodeAt(0)&&(r[n[172][e]]=44032+e,t[44032+e]=n[172][e])
for(n[173]="�����������������������������������������������������������������쵡쵢쵣쵥쵦쵧쵨쵩쵪쵫쵮쵰쵲쵳쵴쵵쵶쵷쵹쵺쵻쵼쵽쵾쵿춀������춁춂춃춄춅춆춇춉춊춋춌춍춎춏춐춑춒춓춖춗춙춚춛춝춞춟������춠춡춢춣춦춨춪춫춬춭춮춯춱춲춳춴춵춶춷춸춹춺춻춼춽춾춿췀췁췂췃췅�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[173].length;++e)65533!==n[173][e].charCodeAt(0)&&(r[n[173][e]]=44288+e,t[44288+e]=n[173][e])
for(n[174]="�����������������������������������������������������������������췆췇췈췉췊췋췍췎췏췑췒췓췔췕췖췗췘췙췚췛췜췝췞췟췠췡������췢췣췤췥췦췧췩췪췫췭췮췯췱췲췳췴췵췶췷췺췼췾췿츀츁츂������츃츅츆츇츉츊츋츍츎츏츐츑츒츓츕츖츗츘츚츛츜츝츞츟츢츣츥츦츧츩츪츫�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[174].length;++e)65533!==n[174][e].charCodeAt(0)&&(r[n[174][e]]=44544+e,t[44544+e]=n[174][e])
for(n[175]="�����������������������������������������������������������������츬츭츮츯츲츴츶츷츸츹츺츻츼츽츾츿칀칁칂칃칄칅칆칇칈칉������칊칋칌칍칎칏칐칑칒칓칔칕칖칗칚칛칝칞칢칣칤칥칦칧칪칬������칮칯칰칱칲칳칶칷칹칺칻칽칾칿캀캁캂캃캆캈캊캋캌캍캎캏캒캓캕캖캗캙�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[175].length;++e)65533!==n[175][e].charCodeAt(0)&&(r[n[175][e]]=44800+e,t[44800+e]=n[175][e])
for(n[176]="�����������������������������������������������������������������캚캛캜캝캞캟캢캦캧캨캩캪캫캮캯캰캱캲캳캴캵캶캷캸캹캺������캻캼캽캾캿컀컂컃컄컅컆컇컈컉컊컋컌컍컎컏컐컑컒컓컔컕������컖컗컘컙컚컛컜컝컞컟컠컡컢컣컦컧컩컪컭컮컯컰컱컲컳컶컺컻컼컽컾컿가각간갇갈갉갊감갑값갓갔강갖갗같갚갛개객갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="�����������������������������������������������������������������켂켃켅켆켇켉켊켋켌켍켎켏켒켔켖켗켘켙켚켛켝켞켟켡켢켣������켥켦켧켨켩켪켫켮켲켳켴켵켶켷켹켺켻켼켽켾켿콀콁콂콃콄������콅콆콇콈콉콊콋콌콍콎콏콐콑콒콓콖콗콙콚콛콝콞콟콠콡콢콣콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="�����������������������������������������������������������������콭콮콯콲콳콵콶콷콹콺콻콼콽콾콿쾁쾂쾃쾄쾆쾇쾈쾉쾊쾋쾍������쾎쾏쾐쾑쾒쾓쾔쾕쾖쾗쾘쾙쾚쾛쾜쾝쾞쾟쾠쾢쾣쾤쾥쾦쾧쾩������쾪쾫쾬쾭쾮쾯쾱쾲쾳쾴쾵쾶쾷쾸쾹쾺쾻쾼쾽쾾쾿쿀쿁쿂쿃쿅쿆쿇쿈쿉쿊쿋깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="�����������������������������������������������������������������쿌쿍쿎쿏쿐쿑쿒쿓쿔쿕쿖쿗쿘쿙쿚쿛쿜쿝쿞쿟쿢쿣쿥쿦쿧쿩������쿪쿫쿬쿭쿮쿯쿲쿴쿶쿷쿸쿹쿺쿻쿽쿾쿿퀁퀂퀃퀅퀆퀇퀈퀉퀊������퀋퀌퀍퀎퀏퀐퀒퀓퀔퀕퀖퀗퀙퀚퀛퀜퀝퀞퀟퀠퀡퀢퀣퀤퀥퀦퀧퀨퀩퀪퀫퀬끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫났낭낮낯낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="�����������������������������������������������������������������퀮퀯퀰퀱퀲퀳퀶퀷퀹퀺퀻퀽퀾퀿큀큁큂큃큆큈큊큋큌큍큎큏������큑큒큓큕큖큗큙큚큛큜큝큞큟큡큢큣큤큥큦큧큨큩큪큫큮큯������큱큲큳큵큶큷큸큹큺큻큾큿킀킂킃킄킅킆킇킈킉킊킋킌킍킎킏킐킑킒킓킔뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫달닭닮닯닳담답닷닸당닺닻닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="�����������������������������������������������������������������킕킖킗킘킙킚킛킜킝킞킟킠킡킢킣킦킧킩킪킫킭킮킯킰킱킲������킳킶킸킺킻킼킽킾킿탂탃탅탆탇탊탋탌탍탎탏탒탖탗탘탙탚������탛탞탟탡탢탣탥탦탧탨탩탪탫탮탲탳탴탵탶탷탹탺탻탼탽탾탿턀턁턂턃턄덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="�����������������������������������������������������������������턅턆턇턈턉턊턋턌턎턏턐턑턒턓턔턕턖턗턘턙턚턛턜턝턞턟������턠턡턢턣턤턥턦턧턨턩턪턫턬턭턮턯턲턳턵턶턷턹턻턼턽턾������턿텂텆텇텈텉텊텋텎텏텑텒텓텕텖텗텘텙텚텛텞텠텢텣텤텥텦텧텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="�����������������������������������������������������������������텮텯텰텱텲텳텴텵텶텷텸텹텺텻텽텾텿톀톁톂톃톅톆톇톉톊������톋톌톍톎톏톐톑톒톓톔톕톖톗톘톙톚톛톜톝톞톟톢톣톥톦톧������톩톪톫톬톭톮톯톲톴톶톷톸톹톻톽톾톿퇁퇂퇃퇄퇅퇆퇇퇈퇉퇊퇋퇌퇍퇎퇏래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="�����������������������������������������������������������������퇐퇑퇒퇓퇔퇕퇖퇗퇙퇚퇛퇜퇝퇞퇟퇠퇡퇢퇣퇤퇥퇦퇧퇨퇩퇪������퇫퇬퇭퇮퇯퇰퇱퇲퇳퇵퇶퇷퇹퇺퇻퇼퇽퇾퇿툀툁툂툃툄툅툆������툈툊툋툌툍툎툏툑툒툓툔툕툖툗툘툙툚툛툜툝툞툟툠툡툢툣툤툥툦툧툨툩륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많맏말맑맒맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="�����������������������������������������������������������������툪툫툮툯툱툲툳툵툶툷툸툹툺툻툾퉀퉂퉃퉄퉅퉆퉇퉉퉊퉋퉌������퉍퉎퉏퉐퉑퉒퉓퉔퉕퉖퉗퉘퉙퉚퉛퉝퉞퉟퉠퉡퉢퉣퉥퉦퉧퉨������퉩퉪퉫퉬퉭퉮퉯퉰퉱퉲퉳퉴퉵퉶퉷퉸퉹퉺퉻퉼퉽퉾퉿튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바박밖밗반받발밝밞밟밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="�����������������������������������������������������������������튍튎튏튒튓튔튖튗튘튙튚튛튝튞튟튡튢튣튥튦튧튨튩튪튫튭������튮튯튰튲튳튴튵튶튷튺튻튽튾틁틃틄틅틆틇틊틌틍틎틏틐틑������틒틓틕틖틗틙틚틛틝틞틟틠틡틢틣틦틧틨틩틪틫틬틭틮틯틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="�����������������������������������������������������������������틻틼틽틾틿팂팄팆팇팈팉팊팋팏팑팒팓팕팗팘팙팚팛팞팢팣������팤팦팧팪팫팭팮팯팱팲팳팴팵팶팷팺팾팿퍀퍁퍂퍃퍆퍇퍈퍉������퍊퍋퍌퍍퍎퍏퍐퍑퍒퍓퍔퍕퍖퍗퍘퍙퍚퍛퍜퍝퍞퍟퍠퍡퍢퍣퍤퍥퍦퍧퍨퍩빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="�����������������������������������������������������������������퍪퍫퍬퍭퍮퍯퍰퍱퍲퍳퍴퍵퍶퍷퍸퍹퍺퍻퍾퍿펁펂펃펅펆펇������펈펉펊펋펎펒펓펔펕펖펗펚펛펝펞펟펡펢펣펤펥펦펧펪펬펮������펯펰펱펲펳펵펶펷펹펺펻펽펾펿폀폁폂폃폆폇폊폋폌폍폎폏폑폒폓폔폕폖샥샨샬샴샵샷샹섀섄섈섐섕서석섞섟선섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="�����������������������������������������������������������������폗폙폚폛폜폝폞폟폠폢폤폥폦폧폨폩폪폫폮폯폱폲폳폵폶폷������폸폹폺폻폾퐀퐂퐃퐄퐅퐆퐇퐉퐊퐋퐌퐍퐎퐏퐐퐑퐒퐓퐔퐕퐖������퐗퐘퐙퐚퐛퐜퐞퐟퐠퐡퐢퐣퐤퐥퐦퐧퐨퐩퐪퐫퐬퐭퐮퐯퐰퐱퐲퐳퐴퐵퐶퐷숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="�����������������������������������������������������������������퐸퐹퐺퐻퐼퐽퐾퐿푁푂푃푅푆푇푈푉푊푋푌푍푎푏푐푑푒푓������푔푕푖푗푘푙푚푛푝푞푟푡푢푣푥푦푧푨푩푪푫푬푮푰푱푲������푳푴푵푶푷푺푻푽푾풁풃풄풅풆풇풊풌풎풏풐풑풒풓풕풖풗풘풙풚풛풜풝쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄업없엇었엉엊엌엎�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="�����������������������������������������������������������������풞풟풠풡풢풣풤풥풦풧풨풪풫풬풭풮풯풰풱풲풳풴풵풶풷풸������풹풺풻풼풽풾풿퓀퓁퓂퓃퓄퓅퓆퓇퓈퓉퓊퓋퓍퓎퓏퓑퓒퓓퓕������퓖퓗퓘퓙퓚퓛퓝퓞퓠퓡퓢퓣퓤퓥퓦퓧퓩퓪퓫퓭퓮퓯퓱퓲퓳퓴퓵퓶퓷퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염엽엾엿였영옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="�����������������������������������������������������������������퓾퓿픀픁픂픃픅픆픇픉픊픋픍픎픏픐픑픒픓픖픘픙픚픛픜픝������픞픟픠픡픢픣픤픥픦픧픨픩픪픫픬픭픮픯픰픱픲픳픴픵픶픷������픸픹픺픻픾픿핁핂핃핅핆핇핈핉핊핋핎핐핒핓핔핕핖핗핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응읒읓읔읕읖읗의읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="�����������������������������������������������������������������핤핦핧핪핬핮핯핰핱핲핳핶핷핹핺핻핽핾핿햀햁햂햃햆햊햋������햌햍햎햏햑햒햓햔햕햖햗햘햙햚햛햜햝햞햟햠햡햢햣햤햦햧������햨햩햪햫햬햭햮햯햰햱햲햳햴햵햶햷햸햹햺햻햼햽햾햿헀헁헂헃헄헅헆헇점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="�����������������������������������������������������������������헊헋헍헎헏헑헓헔헕헖헗헚헜헞헟헠헡헢헣헦헧헩헪헫헭헮������헯헰헱헲헳헶헸헺헻헼헽헾헿혂혃혅혆혇혉혊혋혌혍혎혏혒������혖혗혘혙혚혛혝혞혟혡혢혣혥혦혧혨혩혪혫혬혮혯혰혱혲혳혴혵혶혷혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="�����������������������������������������������������������������혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝홞홟홠홡������홢홣홤홥홦홨홪홫홬홭홮홯홲홳홵홶홷홸홹홺홻홼홽홾홿횀������횁횂횄횆횇횈횉횊횋횎횏횑횒횓횕횖횗횘횙횚횛횜횞횠횢횣횤횥횦횧횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="�����������������������������������������������������������������횫횭횮횯횱횲횳횴횵횶횷횸횺횼횽횾횿훀훁훂훃훆훇훉훊훋������훍훎훏훐훒훓훕훖훘훚훛훜훝훞훟훡훢훣훥훦훧훩훪훫훬훭������훮훯훱훲훳훴훶훷훸훹훺훻훾훿휁휂휃휅휆휇휈휉휊휋휌휍휎휏휐휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="�����������������������������������������������������������������휕휖휗휚휛휝휞휟휡휢휣휤휥휦휧휪휬휮휯휰휱휲휳휶휷휹������휺휻휽휾휿흀흁흂흃흅흆흈흊흋흌흍흎흏흒흓흕흚흛흜흝흞������흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵흶흷흸흹흺흻흾흿힀힂힃힄힅힆힇힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="�����������������������������������������������������������������힍힎힏힑힒힓힔힕힖힗힚힜힞힟힠힡힢힣������������������������������������������������������������������������������퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁�".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[199]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠�".split(""),e=0;e!=n[199].length;++e)65533!==n[199][e].charCodeAt(0)&&(r[n[199][e]]=50944+e,t[50944+e]=n[199][e])
for(n[200]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝�".split(""),e=0;e!=n[200].length;++e)65533!==n[200][e].charCodeAt(0)&&(r[n[200][e]]=51200+e,t[51200+e]=n[200][e])
for(n[202]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩羅蘿螺裸邏那樂洛烙珞落諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������納臘蠟衲囊娘廊朗浪狼郎乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧老蘆虜路露駑魯鷺碌祿綠菉錄鹿論壟弄濃籠聾膿農惱牢磊腦賂雷尿壘屢樓淚漏累縷陋嫩訥杻紐勒肋凜凌稜綾能菱陵尼泥匿溺多茶�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬�".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
for(n[248]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃�".split(""),e=0;e!=n[248].length;++e)65533!==n[248][e].charCodeAt(0)&&(r[n[248][e]]=63488+e,t[63488+e]=n[248][e])
for(n[249]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航�".split(""),e=0;e!=n[249].length;++e)65533!==n[249][e].charCodeAt(0)&&(r[n[249][e]]=63744+e,t[63744+e]=n[249][e])
for(n[250]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型�".split(""),e=0;e!=n[250].length;++e)65533!==n[250][e].charCodeAt(0)&&(r[n[250][e]]=64e3+e,t[64e3+e]=n[250][e])
for(n[251]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵�".split(""),e=0;e!=n[251].length;++e)65533!==n[251][e].charCodeAt(0)&&(r[n[251][e]]=64256+e,t[64256+e]=n[251][e])
for(n[252]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆�".split(""),e=0;e!=n[252].length;++e)65533!==n[252][e].charCodeAt(0)&&(r[n[252][e]]=64512+e,t[64512+e]=n[252][e])
for(n[253]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰�".split(""),e=0;e!=n[253].length;++e)65533!==n[253][e].charCodeAt(0)&&(r[n[253][e]]=64768+e,t[64768+e]=n[253][e])
return{enc:r,dec:t}}(),n[950]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[161]="����������������������������������������������������������������　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚����������������������������������﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢﹣﹤﹥﹦～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="����������������������������������������������������������������＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁▂▃▄▅▆▇█▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭����������������������������������╮╰╯═╞╪╡◢◣◥◤╱╲╳０１２３４５６７８９ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ〡〢〣〤〥〦〧〨〩十卄卅ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖ�".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="����������������������������������������������������������������ｗｘｙｚΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏ����������������������������������ㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ˙ˉˊˇˋ���������������������������������€������������������������������".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="����������������������������������������������������������������一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才����������������������������������丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙�".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="����������������������������������������������������������������世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外����������������������������������央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全�".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="����������������������������������������������������������������共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年����������������������������������式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣�".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="����������������������������������������������������������������作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍����������������������������������均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠�".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="����������������������������������������������������������������杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒����������������������������������芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵�".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="����������������������������������������������������������������咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居����������������������������������屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊�".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[170]="����������������������������������������������������������������昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠����������������������������������炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附�".split(""),e=0;e!=n[170].length;++e)65533!==n[170][e].charCodeAt(0)&&(r[n[170][e]]=43520+e,t[43520+e]=n[170][e])
for(n[171]="����������������������������������������������������������������陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品����������������������������������哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷�".split(""),e=0;e!=n[171].length;++e)65533!==n[171][e].charCodeAt(0)&&(r[n[171][e]]=43776+e,t[43776+e]=n[171][e])
for(n[172]="����������������������������������������������������������������拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗����������������������������������活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄�".split(""),e=0;e!=n[172].length;++e)65533!==n[172][e].charCodeAt(0)&&(r[n[172][e]]=44032+e,t[44032+e]=n[172][e])
for(n[173]="����������������������������������������������������������������耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥����������������������������������迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪�".split(""),e=0;e!=n[173].length;++e)65533!==n[173][e].charCodeAt(0)&&(r[n[173][e]]=44288+e,t[44288+e]=n[173][e])
for(n[174]="����������������������������������������������������������������哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙����������������������������������恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓�".split(""),e=0;e!=n[174].length;++e)65533!==n[174][e].charCodeAt(0)&&(r[n[174][e]]=44544+e,t[44544+e]=n[174][e])
for(n[175]="����������������������������������������������������������������浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷����������������������������������砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃�".split(""),e=0;e!=n[175].length;++e)65533!==n[175][e].charCodeAt(0)&&(r[n[175][e]]=44800+e,t[44800+e]=n[175][e])
for(n[176]="����������������������������������������������������������������虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡����������������������������������陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="����������������������������������������������������������������娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽����������������������������������情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="����������������������������������������������������������������毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶����������������������������������瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="����������������������������������������������������������������莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途����������������������������������部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="����������������������������������������������������������������婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍����������������������������������插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="����������������������������������������������������������������溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘����������������������������������窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="����������������������������������������������������������������詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑����������������������������������間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="����������������������������������������������������������������媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業����������������������������������楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="����������������������������������������������������������������睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫����������������������������������腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="����������������������������������������������������������������辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴����������������������������������飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="����������������������������������������������������������������愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢����������������������������������滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="����������������������������������������������������������������罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤����������������������������������說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="����������������������������������������������������������������劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂����������������������������������慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="����������������������������������������������������������������瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯����������������������������������翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="����������������������������������������������������������������輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉����������������������������������鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="����������������������������������������������������������������濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊����������������������������������縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="����������������������������������������������������������������錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇����������������������������������嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="����������������������������������������������������������������瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪����������������������������������薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="����������������������������������������������������������������駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘����������������������������������癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="����������������������������������������������������������������鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸����������������������������������獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="����������������������������������������������������������������願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼����������������������������������纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="����������������������������������������������������������������護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬����������������������������������禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="����������������������������������������������������������������讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲���������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[201]="����������������������������������������������������������������乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕����������������������������������氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋�".split(""),e=0;e!=n[201].length;++e)65533!==n[201][e].charCodeAt(0)&&(r[n[201][e]]=51456+e,t[51456+e]=n[201][e])
for(n[202]="����������������������������������������������������������������汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘����������������������������������吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="����������������������������������������������������������������杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓����������������������������������芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="����������������������������������������������������������������坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋����������������������������������怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="����������������������������������������������������������������泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺����������������������������������矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="����������������������������������������������������������������哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛����������������������������������峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="����������������������������������������������������������������柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂����������������������������������洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="����������������������������������������������������������������穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪����������������������������������苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="����������������������������������������������������������������唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧����������������������������������恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="����������������������������������������������������������������毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸����������������������������������牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="����������������������������������������������������������������笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢����������������������������������荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="����������������������������������������������������������������酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅����������������������������������唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="����������������������������������������������������������������崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟����������������������������������捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="����������������������������������������������������������������淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏����������������������������������痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="����������������������������������������������������������������耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷����������������������������������蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪�".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="����������������������������������������������������������������釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷����������������������������������堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="����������������������������������������������������������������惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒����������������������������������晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="����������������������������������������������������������������湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖����������������������������������琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="����������������������������������������������������������������罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳����������������������������������菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="����������������������������������������������������������������軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈����������������������������������隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="����������������������������������������������������������������媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤����������������������������������搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="����������������������������������������������������������������毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓����������������������������������煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="����������������������������������������������������������������稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯����������������������������������腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="����������������������������������������������������������������觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿����������������������������������遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="����������������������������������������������������������������凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠����������������������������������寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="����������������������������������������������������������������榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊����������������������������������漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="����������������������������������������������������������������禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞����������������������������������耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="����������������������������������������������������������������裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍����������������������������������銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="����������������������������������������������������������������噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉����������������������������������憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="����������������������������������������������������������������澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙����������������������������������獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="����������������������������������������������������������������膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢����������������������������������蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="����������������������������������������������������������������踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓����������������������������������銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="����������������������������������������������������������������噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺����������������������������������憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="����������������������������������������������������������������澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙����������������������������������瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="����������������������������������������������������������������蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠����������������������������������諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="����������������������������������������������������������������錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕����������������������������������魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="����������������������������������������������������������������檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶����������������������������������瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="����������������������������������������������������������������蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞����������������������������������謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="����������������������������������������������������������������鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰����������������������������������鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="����������������������������������������������������������������璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒����������������������������������臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="����������������������������������������������������������������蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪����������������������������������鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="����������������������������������������������������������������徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛����������������������������������礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="����������������������������������������������������������������譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦����������������������������������鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="����������������������������������������������������������������嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩����������������������������������禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="����������������������������������������������������������������鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛����������������������������������鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="����������������������������������������������������������������蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺����������������������������������騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="����������������������������������������������������������������糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊����������������������������������驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
for(n[248]="����������������������������������������������������������������讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏����������������������������������齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚�".split(""),e=0;e!=n[248].length;++e)65533!==n[248][e].charCodeAt(0)&&(r[n[248][e]]=63488+e,t[63488+e]=n[248][e])
for(n[249]="����������������������������������������������������������������纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊����������������������������������龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓�".split(""),e=0;e!=n[249].length;++e)65533!==n[249][e].charCodeAt(0)&&(r[n[249][e]]=63744+e,t[63744+e]=n[249][e])
return{enc:r,dec:t}}(),n[1250]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1251]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1252]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1253]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1254]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1255]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹ�ֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1256]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1257]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1258]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[1e4]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[10006]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[10007]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[10008]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~���������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[161]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������　、。・ˉˇ¨〃々―～�…‘’“”〔〕〈〉《》「」『』〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇①②③④⑤⑥⑦⑧⑨⑩��㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩��ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ���".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������！＂＃￥％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω���������������������������������������".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüê����������ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ����������������������".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="��������������������������������������������������������������������������������������������������������������������������������������������������������������������─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋����������������".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[176]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐�".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[199]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠�".split(""),e=0;e!=n[199].length;++e)65533!==n[199][e].charCodeAt(0)&&(r[n[199][e]]=50944+e,t[50944+e]=n[199][e])
for(n[200]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁�".split(""),e=0;e!=n[200].length;++e)65533!==n[200][e].charCodeAt(0)&&(r[n[200][e]]=51200+e,t[51200+e]=n[200][e])
for(n[201]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳�".split(""),e=0;e!=n[201].length;++e)65533!==n[201][e].charCodeAt(0)&&(r[n[201][e]]=51456+e,t[51456+e]=n[201][e])
for(n[202]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座������".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧饨饩饪饫饬饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡缢缣缤缥缦缧缪缫缬缭缯缰缱缲缳缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶钷钸钹钺钼钽钿铄铈铉铊铋铌铍铎铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒锓锔锕锖锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤镥镦镧镨镩镪镫镬镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨鸩鸪鸫鸬鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦鹧鹨鹩鹪鹫鹬鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅龆龇龈龉龊龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞鲟鲠鲡鲢鲣鲥鲦鲧鲨鲩鲫鲭鲮鲰鲱鲲鲳鲴鲵鲶鲷鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鳌鳍鳎鳏鳐鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
return{enc:r,dec:t}}(),n[10029]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[10079]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),n[10081]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),a.exports&&"undefined"==typeof DO_NOT_EXPORT_CODEPAGE&&(a.exports=n),function(e,t){"use strict"
if(void 0===n){var r=n
a.exports&&"undefined"==typeof DO_NOT_EXPORT_CODEPAGE?a.exports=t(r):e.cptable=t(r)}else n=t(n)}(this,function(B){"use strict"
var T={1200:"utf16le",1201:"utf16be",12e3:"utf32le",12001:"utf32be",16969:"utf64le",20127:"ascii",65e3:"utf7",65001:"utf8"},r=[874,1250,1251,1252,1253,1254,1255,1256,1e4],n=[932,936,949,950],a=[65001],s={},i={},y={},m={},b=function(e){return String.fromCharCode(e)},k=function(e){return e.charCodeAt(0)},x=void 0!==R,v=function(){}
if(x){var t=!R.from
if(!t)try{R.from("foo","utf8")}catch(e){t=!0}v=t?function(e,t){return t?new R(e,t):new R(e)}:R.from.bind(R),R.allocUnsafe||(R.allocUnsafe=function(e){return new R(e)})
var c=1024,f=R.allocUnsafe(c),o=function(e){var l=function(e){for(var t=R.allocUnsafe(65536),r=0;r<65536;++r)t[r]=0
for(var n=Object.keys(e),a=n.length,s=0,i=n[s];s<a;++s)(i=n[s])&&(t[i.charCodeAt(0)]=e[i])
return t}(B[e].enc)
return function(e,t){var r,n=e.length,a=0,s=0,i=0,o=0
if("string"==typeof e)for(r=R.allocUnsafe(n),a=0;a<n;++a)r[a]=l[e.charCodeAt(a)]
else if(R.isBuffer(e)){for(r=R.allocUnsafe(2*n),a=s=0;a<n;++a)(i=e[a])<128?r[s++]=l[i]:i<224?(r[s++]=l[((31&i)<<6)+(63&e[a+1])],++a):i<240?(r[s++]=l[((15&i)<<12)+((63&e[a+1])<<6)+(63&e[a+2])],a+=2):(o=((7&i)<<18)+((63&e[a+1])<<12)+((63&e[a+2])<<6)+(63&e[a+3]),a+=3,r[s++]=o<65536?l[o]:(o-=65536,r[s++]=l[55296+(o>>10&1023)],l[56320+(1023&o)]))
r=r.slice(0,s)}else for(r=R.allocUnsafe(n),a=0;a<n;++a)r[a]=l[e[a].charCodeAt(0)]
return t&&"buf"!==t?"arr"!==t?r.toString("binary"):[].slice.call(r):r}},l=function(e){var t=B[e].dec,a=R.allocUnsafe(131072),r=0,n=""
for(r=0;r<t.length;++r)if(n=t[r]){var s=n.charCodeAt(0)
a[2*r]=255&s,a[2*r+1]=s>>8}return function(e){var t=e.length,r=0,n=0
if(c<2*t&&(c=2*t,f=R.allocUnsafe(c)),R.isBuffer(e))for(r=0;r<t;r++)n=2*e[r],f[2*r]=a[n],f[2*r+1]=a[n+1]
else if("string"==typeof e)for(r=0;r<t;r++)n=2*e.charCodeAt(r),f[2*r]=a[n],f[2*r+1]=a[n+1]
else for(r=0;r<t;r++)n=2*e[r],f[2*r]=a[n],f[2*r+1]=a[n+1]
return f.slice(0,2*t).toString("ucs2")}},h=function(e){for(var t=B[e].enc,c=R.allocUnsafe(131072),r=0;r<131072;++r)c[r]=0
for(var n=Object.keys(t),a=0,s=n[a];a<n.length;++a)if(s=n[a]){var i=s.charCodeAt(0)
c[2*i]=255&t[s],c[2*i+1]=t[s]>>8}return function(e,t){var r=e.length,n=R.allocUnsafe(2*r),a=0,s=0,i=0,o=0,l=0
if("string"==typeof e){for(a=o=0;a<r;++a)s=2*e.charCodeAt(a),n[o++]=c[s+1]||c[s],0<c[s+1]&&(n[o++]=c[s])
n=n.slice(0,o)}else if(R.isBuffer(e)){for(a=o=0;a<r;++a)(l=e[a])<128?s=l:l<224?(s=((31&l)<<6)+(63&e[a+1]),++a):l<240?(s=((15&l)<<12)+((63&e[a+1])<<6)+(63&e[a+2]),a+=2):(s=((7&l)<<18)+((63&e[a+1])<<12)+((63&e[a+2])<<6)+(63&e[a+3]),a+=3),n[o++]=(s<65536?s*=2:(s=2*(55296+((i=s-65536)>>10&1023)),n[o++]=c[s+1]||c[s],0<c[s+1]&&(n[o++]=c[s]),s=2*(56320+(1023&i))),c[s+1]||c[s]),0<c[s+1]&&(n[o++]=c[s])
n=n.slice(0,o)}else for(a=o=0;a<r;a++)s=2*e[a].charCodeAt(0),n[o++]=c[s+1]||c[s],0<c[s+1]&&(n[o++]=c[s])
return t&&"buf"!==t?"arr"!==t?n.toString("binary"):[].slice.call(n):n}},u=function(e){var t,r=B[e].dec,i=R.allocUnsafe(131072),n=0,a=0,s=0,o=0
for(o=0;o<65536;++o)i[2*o]=255,i[2*o+1]=253
for(n=0;n<r.length;++n)(t=r[n])&&(a=t.charCodeAt(0),i[s=2*n]=255&a,i[s+1]=a>>8)
return function(e){var t=e.length,r=R.allocUnsafe(2*t),n=0,a=0,s=0
if(R.isBuffer(e))for(n=0;n<t;n++)a=2*e[n],255===i[a]&&253===i[a+1]&&(a=2*((e[n]<<8)+e[n+1]),++n),r[s++]=i[a],r[s++]=i[a+1]
else if("string"==typeof e)for(n=0;n<t;n++)a=2*e.charCodeAt(n),255===i[a]&&253===i[a+1]&&(a=2*((e.charCodeAt(n)<<8)+e.charCodeAt(n+1)),++n),r[s++]=i[a],r[s++]=i[a+1]
else for(n=0;n<t;n++)a=2*e[n],255===i[a]&&253===i[a+1]&&(a=2*((e[n]<<8)+e[n+1]),++n),r[s++]=i[a],r[s++]=i[a+1]
return r.slice(0,s).toString("ucs2")}}
s[65001]=function e(t){if("string"==typeof t)return e(t.split("").map(k))
var r=t.length,n=0,a=0
c<4*r&&(c=4*r,f=R.allocUnsafe(c))
var s=0
3<=r&&239==t[0]&&187==t[1]&&191==t[2]&&(s=3)
for(var i=1,o=0,l=0;s<r;s+=i)i=1,(l=t[s])<128?n=l:i=l<224?(n=64*(31&l)+(63&t[s+1]),2):l<240?(n=((15&l)<<12)+64*(63&t[s+1])+(63&t[s+2]),3):(n=262144*(7&l)+((63&t[s+1])<<12)+64*(63&t[s+2])+(63&t[s+3]),4),f[o++]=n<65536?(f[o++]=255&n,n>>8):(a=55296+((n-=65536)>>10&1023),n=56320+(1023&n),f[o++]=255&a,f[o++]=a>>>8,f[o++]=255&n,n>>>8&255)
return f.slice(0,o).toString("ucs2")},i[65001]=function(e,t){if(x&&R.isBuffer(e))return t&&"buf"!==t?"arr"!==t?e.toString("binary"):[].slice.call(e):e
var r=e.length,n=0,a=0,s=0,i="string"==typeof e
c<4*r&&(c=4*r,f=R.allocUnsafe(c))
for(var o=0;o<r;++o)n=i?e.charCodeAt(o):e[o].charCodeAt(0),f[s++]=n<=127?n:n<=2047?(f[s++]=192+(n>>6),128+(63&n)):55296<=n&&n<=57343?(n-=55296,++o,a=(i?e.charCodeAt(o):e[o].charCodeAt(0))-56320+(n<<10),f[s++]=240+(a>>>18&7),f[s++]=144+(a>>>12&63),f[s++]=128+(a>>>6&63),128+(63&a)):(f[s++]=224+(n>>12),f[s++]=128+(n>>6&63),128+(63&n))
return t&&"buf"!==t?"arr"!==t?f.slice(0,s).toString("binary"):[].slice.call(f,0,s):f.slice(0,s)}}var e=function(){if(x){if(y[r[0]])return
var e=0,t=0
for(e=0;e<r.length;++e)t=r[e],B[t]&&(y[t]=l(t),m[t]=o(t))
for(e=0;e<n.length;++e)t=n[e],B[t]&&(y[t]=u(t),m[t]=h(t))
for(e=0;e<a.length;++e)t=a[e],s[t]&&(y[t]=s[t]),i[t]&&(m[t]=i[t])}},d=function(e,t){return""},p=function(e){delete y[e],delete m[e]},g={encache:e,decache:function(){if(x){if(!y[r[0]])return
r.forEach(p),n.forEach(p),a.forEach(p)}w=d,C=0},sbcs:r,dbcs:n}
e()
var I="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w=d,C=0
return B.utils={decode:function e(t,r){var n
if(n=y[t])return n(r)
if("string"==typeof r)return e(t,r.split("").map(k))
var a,s=r.length,i=new Array(s),o="",l=0,c=0,f=1,h=0,u=0,d=B[t],p=""
if(d&&(a=d.dec))for(c=0;c<s;c+=f){if(f=2,(o=a[(r[c]<<8)+r[c+1]])||(f=1,o=a[r[c]]),!o)throw new Error("Unrecognized code: "+r[c]+" "+r[c+f-1]+" "+c+" "+f+" "+a[r[c]])
i[h++]=o}else{if(!(p=T[t]))throw new Error("Unrecognized CP: "+t)
switch(p){case"utf8":for(3<=s&&239==r[0]&&187==r[1]&&191==r[2]&&(c=3);c<s;c+=f)f=1,r[c]<128?l=r[c]:f=r[c]<224?(l=64*(31&r[c])+(63&r[c+1]),2):r[c]<240?(l=((15&r[c])<<12)+64*(63&r[c+1])+(63&r[c+2]),3):(l=262144*(7&r[c])+((63&r[c+1])<<12)+64*(63&r[c+2])+(63&r[c+3]),4),i[h++]=(l<65536||(u=55296+((l-=65536)>>10&1023),l=56320+(1023&l),i[h++]=String.fromCharCode(u)),String.fromCharCode(l))
break
case"ascii":if(x&&R.isBuffer(r))return r.toString(p)
for(c=0;c<s;c++)i[c]=String.fromCharCode(r[c])
h=s
break
case"utf16le":if(2<=s&&255==r[0]&&254==r[1]&&(c=2),x&&R.isBuffer(r))return r.toString(p)
for(f=2;c+1<s;c+=f)i[h++]=String.fromCharCode((r[c+1]<<8)+r[c])
break
case"utf16be":for(2<=s&&254==r[0]&&255==r[1]&&(c=2),f=2;c+1<s;c+=f)i[h++]=String.fromCharCode((r[c]<<8)+r[c+1])
break
case"utf32le":for(4<=s&&255==r[0]&&254==r[1]&&0===r[2]&&0===r[3]&&(c=4),f=4;c<s;c+=f)l=(r[c+3]<<24)+(r[c+2]<<16)+(r[c+1]<<8)+r[c],i[h++]=65535<l?(l-=65536,i[h++]=String.fromCharCode(55296+(l>>10&1023)),String.fromCharCode(56320+(1023&l))):String.fromCharCode(l)
break
case"utf32be":for(4<=s&&255==r[3]&&254==r[2]&&0===r[1]&&0===r[0]&&(c=4),f=4;c<s;c+=f)l=(r[c]<<24)+(r[c+1]<<16)+(r[c+2]<<8)+r[c+3],i[h++]=65535<l?(l-=65536,i[h++]=String.fromCharCode(55296+(l>>10&1023)),String.fromCharCode(56320+(1023&l))):String.fromCharCode(l)
break
case"utf7":for(4<=s&&43==r[0]&&47==r[1]&&118==r[2]&&(5<=s&&56==r[3]&&45==r[4]?c=5:56!=r[3]&&57!=r[3]&&43!=r[3]&&47!=r[3]||(c=4));c<s;c+=f)if(43===r[c])if(45!==r[c+(f=1)]){for(;String.fromCharCode(r[c+f]).match(/[A-Za-z0-9+\/]/);)f++
var g=0
45===r[c+f]&&(++f,g=1)
for(var m=[],b="",v=0,w=0,C=0,E=0,S=0,A=0,_=1;_<f-g&&(v=I.indexOf(String.fromCharCode(r[c+_++]))<<2|(E=I.indexOf(String.fromCharCode(r[c+_++])))>>4,m.push(v),-1!==(S=I.indexOf(String.fromCharCode(r[c+_++]))))&&(w=(15&E)<<4|S>>2,m.push(w),-1!==(A=I.indexOf(String.fromCharCode(r[c+_++]))));)C=(3&S)<<6|A,A<64&&m.push(C)
for(b=e(1201,m),_=0;_<b.length;++_)i[h++]=b.charAt(_)}else f=2,i[h++]="+"
else f=1,i[h++]=String.fromCharCode(r[c])
break
default:throw new Error("Unsupported magic: "+t+" "+T[t])}}return i.slice(0,h).join("")},encode:function e(t,r,n){if(t===C&&w)return w(r,n)
if(m[t])return(w=m[C=t])(r,n)
x&&R.isBuffer(r)&&(r=r.toString("utf8"))
var a,s=r.length,i=x?R.allocUnsafe(4*s):[],o=0,l=0,c=0,f=0,h=B[t],u="",d="string"==typeof r
if(h&&(a=h.enc))for(l=0;l<s;++l,++c)255<(o=a[d?r.charAt(l):r[l]])?(i[c]=o>>8,i[++c]=255&o):i[c]=255&o
else{if(!(u=T[t]))throw new Error("Unrecognized CP: "+t)
switch(u){case"utf8":if(x&&d){c=(i=v(r,u)).length
break}for(l=0;l<s;++l,++c)(o=d?r.charCodeAt(l):r[l].charCodeAt(0))<=127?i[c]=o:i[++c]=o<=2047?(i[c]=192+(o>>6),128+(63&o)):55296<=o&&o<=57343?(o-=55296,f=(d?r.charCodeAt(++l):r[++l].charCodeAt(0))-56320+(o<<10),i[c]=240+(f>>>18&7),i[++c]=144+(f>>>12&63),i[++c]=128+(f>>>6&63),128+(63&f)):(i[c]=224+(o>>12),i[++c]=128+(o>>6&63),128+(63&o))
break
case"ascii":if(x&&"string"==typeof r){c=(i=v(r,u)).length
break}for(l=0;l<s;++l,++c){if(!((o=d?r.charCodeAt(l):r[l].charCodeAt(0))<=127))throw new Error("bad ascii "+o)
i[c]=o}break
case"utf16le":if(x&&"string"==typeof r){c=(i=v(r,u)).length
break}for(l=0;l<s;++l)o=d?r.charCodeAt(l):r[l].charCodeAt(0),i[c++]=255&o,i[c++]=o>>8
break
case"utf16be":for(l=0;l<s;++l)o=d?r.charCodeAt(l):r[l].charCodeAt(0),i[c++]=o>>8,i[c++]=255&o
break
case"utf32le":for(l=0;l<s;++l)55296<=(o=d?r.charCodeAt(l):r[l].charCodeAt(0))&&o<=57343&&(o=65536+(o-55296<<10)+(r[++l].charCodeAt(0)-56320)),i[c++]=255&o,o>>=8,i[c++]=255&o,o>>=8,i[c++]=255&o,o>>=8,i[c++]=255&o
break
case"utf32be":for(l=0;l<s;++l)55296<=(o=d?r.charCodeAt(l):r[l].charCodeAt(0))&&o<=57343&&(o=65536+(o-55296<<10)+(r[++l].charCodeAt(0)-56320)),i[c+3]=255&o,o>>=8,i[c+2]=255&o,o>>=8,i[c+1]=255&o,o>>=8,i[c]=255&o,c+=4
break
case"utf7":for(l=0;l<s;l++){var p=d?r.charAt(l):r[l].charAt(0)
if("+"!==p)if(-1<"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'(),-./:?".indexOf(p))i[c++]=p.charCodeAt(0)
else{var g=e(1201,p)
i[c++]=43,i[c++]=I.charCodeAt(g[0]>>2),i[c++]=I.charCodeAt(((3&g[0])<<4)+((g[1]||0)>>4)),i[c++]=I.charCodeAt(((15&g[1])<<2)+((g[2]||0)>>6)),i[c++]=45}else i[c++]=43,i[c++]=45}break
default:throw new Error("Unsupported magic: "+t+" "+T[t])}}return i=i.slice(0,c),x?n&&"buf"!==n?"arr"!==n?i.toString("binary"):[].slice.call(i):i:"str"==n?i.map(b).join(""):i},hascp:function(e){return!(!B[e]&&!T[e])},magic:T,cache:g},B})}).call(this,t(4).Buffer)},function(e,t){},,,,,,,,,function(e,t,r){"use strict"
t.byteLength=function(e){var t=d(e),r=t[0],n=t[1]
return 3*(r+n)/4-n},t.toByteArray=function(e){for(var t,r=d(e),n=r[0],a=r[1],s=new u((c=n,f=a,3*(c+f)/4-f)),i=0,o=0<a?n-4:n,l=0;l<o;l+=4)t=h[e.charCodeAt(l)]<<18|h[e.charCodeAt(l+1)]<<12|h[e.charCodeAt(l+2)]<<6|h[e.charCodeAt(l+3)],s[i++]=t>>16&255,s[i++]=t>>8&255,s[i++]=255&t
var c,f
2===a&&(t=h[e.charCodeAt(l)]<<2|h[e.charCodeAt(l+1)]>>4,s[i++]=255&t)
1===a&&(t=h[e.charCodeAt(l)]<<10|h[e.charCodeAt(l+1)]<<4|h[e.charCodeAt(l+2)]>>2,s[i++]=t>>8&255,s[i++]=255&t)
return s},t.fromByteArray=function(e){for(var t,r=e.length,n=r%3,a=[],s=0,i=r-n;s<i;s+=16383)a.push(l(e,s,i<s+16383?i:s+16383))
1===n?(t=e[r-1],a.push(o[t>>2]+o[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],a.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="))
return a.join("")}
for(var o=[],h=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=n.length;a<s;++a)o[a]=n[a],h[n.charCodeAt(a)]=a
function d(e){var t=e.length
if(0<t%4)throw new Error("Invalid string. Length must be a multiple of 4")
var r=e.indexOf("=")
return-1===r&&(r=t),[r,r===t?0:4-r%4]}function l(e,t,r){for(var n,a,s=[],i=t;i<r;i+=3)n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),s.push(o[(a=n)>>18&63]+o[a>>12&63]+o[a>>6&63]+o[63&a])
return s.join("")}h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,a){var s,i,o=8*a-n-1,l=(1<<o)-1,c=l>>1,f=-7,h=r?a-1:0,u=r?-1:1,d=e[t+h]
for(h+=u,s=d&(1<<-f)-1,d>>=-f,f+=o;0<f;s=256*s+e[t+h],h+=u,f-=8);for(i=s&(1<<-f)-1,s>>=-f,f+=n;0<f;i=256*i+e[t+h],h+=u,f-=8);if(0===s)s=1-c
else{if(s===l)return i?NaN:1/0*(d?-1:1)
i+=Math.pow(2,n),s-=c}return(d?-1:1)*i*Math.pow(2,s-n)},t.write=function(e,t,r,n,a,s){var i,o,l,c=8*s-a-1,f=(1<<c)-1,h=f>>1,u=23===a?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0
for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,i=f):(i=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-i))<1&&(i--,l*=2),2<=(t+=1<=i+h?u/l:u*Math.pow(2,1-h))*l&&(i++,l/=2),f<=i+h?(o=0,i=f):1<=i+h?(o=(t*l-1)*Math.pow(2,a),i+=h):(o=t*Math.pow(2,h-1)*Math.pow(2,a),i=0));8<=a;e[r+d]=255&o,d+=p,o/=256,a-=8);for(i=i<<a|o,c+=a;0<c;e[r+d]=255&i,d+=p,i/=256,c-=8);e[r+d-p]|=128*g}},function(e,t){var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t){var r,n,a=e.exports={}
function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(r===setTimeout)return setTimeout(t,0)
if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0)
try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}()
var l,c=[],f=!1,h=-1
function u(){f&&l&&(f=!1,l.length?c=l.concat(c):h=-1,c.length&&d())}function d(){if(!f){var e=o(u)
f=!0
for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run()
h=-1,t=c.length}l=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t)
if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t)
try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=new Array(arguments.length-1)
if(1<arguments.length)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
c.push(new p(e,t)),1!==c.length||f||o(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(l,c,e){(function(r,n){var a,s,i
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){if("object"==o(c)&&void 0!==l&&"undefined"==typeof DO_NOT_EXPORT_JSZIP)l.exports=e()
else if("undefined"==typeof DO_NOT_EXPORT_JSZIP)JSZipSync=e(),s=[],void 0===(i="function"==typeof(a=e)?a.apply(c,s):a)||(l.exports=i)
else{var t
"undefined"!=typeof window?t=window:void 0!==n?t=n:"undefined"!=typeof $&&$.global?t=$.global:"undefined"!=typeof self&&(t=self),t.JSZipSync=e()}}(function(){return function n(a,s,i){function o(r,e){if(!s[r]){if(!a[r]){if(l)return l(r,!0)
throw new Error("Cannot find module '"+r+"'")}var t=s[r]={exports:{}}
a[r][0].call(t.exports,function(e){var t=a[r][1][e]
return o(t||e)},t,t.exports,n,a,s,i)}return s[r].exports}for(var l=!1,e=0;e<i.length;e++)o(i[e])
return o}({1:[function(e,t,r){"use strict"
var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
r.encode=function(e,t){for(var r,n,a,s,i,o,l,c="",f=0;f<e.length;)s=(r=e.charCodeAt(f++))>>2,i=(3&r)<<4|(n=e.charCodeAt(f++))>>4,o=(15&n)<<2|(a=e.charCodeAt(f++))>>6,l=63&a,isNaN(n)?o=l=64:isNaN(a)&&(l=64),c=c+h.charAt(s)+h.charAt(i)+h.charAt(o)+h.charAt(l)
return c},r.decode=function(e,t){var r,n,a,s,i,o,l="",c=0
for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<e.length;)r=h.indexOf(e.charAt(c++))<<2|(s=h.indexOf(e.charAt(c++)))>>4,n=(15&s)<<4|(i=h.indexOf(e.charAt(c++)))>>2,a=(3&i)<<6|(o=h.indexOf(e.charAt(c++))),l+=String.fromCharCode(r),64!=i&&(l+=String.fromCharCode(n)),64!=o&&(l+=String.fromCharCode(a))
return l}},{}],2:[function(e,t,r){"use strict"
function n(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}n.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},t.exports=n},{}],3:[function(e,t,r){"use strict"
r.STORE={magic:"\0\0",compress:function(e){return e},uncompress:function(e){return e},compressInputType:null,uncompressInputType:null},r.DEFLATE=e("./flate")},{"./flate":8}],4:[function(e,t,r){"use strict"
var i=e("./utils"),o=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]
t.exports=function(e,t){if(void 0===e||!e.length)return 0
var r="string"!==i.getTypeOf(e)
void 0===t&&(t=0)
var n=0
t^=-1
for(var a=0,s=e.length;a<s;a++)n=r?e[a]:e.charCodeAt(a),t=t>>>8^o[255&(t^n)]
return-1^t}},{"./utils":21}],5:[function(e,t,r){"use strict"
var n=e("./utils")
function a(e){this.data=null,this.length=0,this.index=0}a.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(e){},readInt:function(e){var t,r=0
for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t)
return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(e){},lastIndexOfSignature:function(e){},readDate:function(){var e=this.readInt(4)
return new Date(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1)}},t.exports=a},{"./utils":21}],6:[function(e,t,r){"use strict"
r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!1,r.date=null,r.compression=null,r.comment=null},{}],7:[function(e,t,r){"use strict"
var n=e("./utils")
r.string2binary=function(e){return n.string2binary(e)},r.string2Uint8Array=function(e){return n.transformTo("uint8array",e)},r.uint8Array2String=function(e){return n.transformTo("string",e)},r.string2Blob=function(e){var t=n.transformTo("arraybuffer",e)
return n.arrayBuffer2Blob(t)},r.arrayBuffer2Blob=function(e){return n.arrayBuffer2Blob(e)},r.transformTo=function(e,t){return n.transformTo(e,t)},r.getTypeOf=function(e){return n.getTypeOf(e)},r.checkSupport=function(e){return n.checkSupport(e)},r.MAX_VALUE_16BITS=n.MAX_VALUE_16BITS,r.MAX_VALUE_32BITS=n.MAX_VALUE_32BITS,r.pretty=function(e){return n.pretty(e)},r.findCompression=function(e){return n.findCompression(e)},r.isRegExp=function(e){return n.isRegExp(e)}},{"./utils":21}],8:[function(e,t,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,a=e("pako")
r.uncompressInputType=n?"uint8array":"array",r.compressInputType=n?"uint8array":"array",r.magic="\b\0",r.compress=function(e){return a.deflateRaw(e)},r.uncompress=function(e){return a.inflateRaw(e)}},{pako:24}],9:[function(e,t,r){"use strict"
var n=e("./base64")
function a(e,t){if(!(this instanceof a))return new a(e,t)
this.files={},this.comment=null,this.root="",e&&this.load(e,t),this.clone=function(){var e=new a
for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t])
return e}}(a.prototype=e("./object")).load=e("./load"),a.support=e("./support"),a.defaults=e("./defaults"),a.utils=e("./deprecatedPublicUtils"),a.base64={encode:function(e){return n.encode(e)},decode:function(e){return n.decode(e)}},a.compressions=e("./compressions"),t.exports=a},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(e,t,r){"use strict"
var i=e("./base64"),o=e("./zipEntries")
t.exports=function(e,t){var r,n,a,s
for((t=t||{}).base64&&(e=i.decode(e)),r=(n=new o(e,t)).files,a=0;a<r.length;a++)s=r[a],this.file(s.fileName,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileComment.length?s.fileComment:null,createFolders:t.createFolders})
return n.zipComment.length&&(this.comment=n.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(e,a,t){(function(r){"use strict"
var n=function(){}
if(void 0!==r){var t=!r.from
if(!t)try{r.from("foo","utf8")}catch(e){t=!0}n=t?function(e,t){return t?new r(e,t):new r(e)}:r.from.bind(r),r.alloc||(r.alloc=function(e){return new r(e)})}a.exports=function(e,t){return"number"==typeof e?r.alloc(e):n(e,t)},a.exports.test=function(e){return r.isBuffer(e)}}).call(this,void 0!==r?r:void 0)},{}],12:[function(e,t,r){"use strict"
var n=e("./uint8ArrayReader")
function a(e){this.data=e,this.length=this.data.length,this.index=0}(a.prototype=new n).readData=function(e){this.checkOffset(e)
var t=this.data.slice(this.index,this.index+e)
return this.index+=e,t},t.exports=a},{"./uint8ArrayReader":18}],13:[function(e,t,r){"use strict"
var n=e("./support"),v=e("./utils"),w=e("./crc32"),C=e("./signature"),o=e("./defaults"),m=e("./base64"),b=e("./compressions"),l=e("./compressedObject"),a=e("./nodeBuffer"),E=e("./utf8"),S=e("./stringWriter"),A=e("./uint8ArrayWriter"),s=function(e){if(e._data instanceof l&&(e._data=e._data.getContent(),e.options.binary=!0,e.options.base64=!1,"uint8array"===v.getTypeOf(e._data))){var t=e._data
e._data=new Uint8Array(t.length),0!==t.length&&e._data.set(t,0)}return e._data},i=function(e){var t=s(e)
return"string"===v.getTypeOf(t)?!e.options.binary&&n.nodebuffer?a(t,"utf-8"):e.asBinary():t},c=function(e){var t=s(this)
return null==t?"":(this.options.base64&&(t=m.decode(t)),t=e&&this.options.binary?p.utf8decode(t):v.transformTo("string",t),e||this.options.binary||(t=v.transformTo("string",p.utf8encode(t))),t)},f=function(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this._data=t,this.options=r,this._initialMetadata={dir:r.dir,date:r.date}}
f.prototype={asText:function(){return c.call(this,!0)},asBinary:function(){return c.call(this,!1)},asNodeBuffer:function(){var e=i(this)
return v.transformTo("nodebuffer",e)},asUint8Array:function(){var e=i(this)
return v.transformTo("uint8array",e)},asArrayBuffer:function(){return this.asUint8Array().buffer}}
var _=function(e,t){var r,n=""
for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8
return n},B=function(){var e,t,r={}
for(e=0;e<arguments.length;e++)for(t in arguments[e])arguments[e].hasOwnProperty(t)&&void 0===r[t]&&(r[t]=arguments[e][t])
return r},h=function(e,t,r){var n,a,s=v.getTypeOf(t)
if(!0!==(a=(a=r)||{}).base64||null!==a.binary&&void 0!==a.binary||(a.binary=!0),(a=B(a,o)).date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),(r=a).createFolders&&(n=u(e))&&d.call(this,n,!0),r.dir||null==t)r.base64=!1,r.binary=!1,t=null
else if("string"===s)r.binary&&!r.base64&&!0!==r.optimizedBinaryString&&(t=v.string2binary(t))
else{if(r.base64=!1,r.binary=!0,!(s||t instanceof l))throw new Error("The data of '"+e+"' is in an unsupported format !")
"arraybuffer"===s&&(t=v.transformTo("uint8array",t))}var i=new f(e,t,r)
return this.files[e]=i},u=function(e){"/"==e.slice(-1)&&(e=e.substring(0,e.length-1))
var t=e.lastIndexOf("/")
return 0<t?e.substring(0,t):""},d=function(e,t){return"/"!=e.slice(-1)&&(e+="/"),t=void 0!==t&&t,this.files[e]||h.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]},T=function(e,t){var r,n=new l
return e._data instanceof l?(n.uncompressedSize=e._data.uncompressedSize,n.crc32=e._data.crc32,0===n.uncompressedSize||e.dir?(t=b.STORE,n.compressedContent="",n.crc32=0):e._data.compressionMethod===t.magic?n.compressedContent=e._data.getCompressedContent():(r=e._data.getContent(),n.compressedContent=t.compress(v.transformTo(t.compressInputType,r)))):((r=i(e))&&0!==r.length&&!e.dir||(t=b.STORE,r=""),n.uncompressedSize=r.length,n.crc32=w(r),n.compressedContent=t.compress(v.transformTo(t.compressInputType,r))),n.compressedSize=n.compressedContent.length,n.compressionMethod=t.magic,n},y=function(e,t,r,n){r.compressedContent
var a,s,i,o,l=v.transformTo("string",E.utf8encode(t.name)),c=t.comment||"",f=v.transformTo("string",E.utf8encode(c)),h=l.length!==t.name.length,u=f.length!==c.length,d=t.options,p="",g="",m=""
i=t._initialMetadata.dir!==t.dir?t.dir:d.dir,a=(o=t._initialMetadata.date!==t.date?t.date:d.date).getHours(),a<<=6,a|=o.getMinutes(),a<<=5,a|=o.getSeconds()/2,s=o.getFullYear()-1980,s<<=4,s|=o.getMonth()+1,s<<=5,s|=o.getDate(),h&&(g=_(1,1)+_(w(l),4)+l,p+="up"+_(g.length,2)+g),u&&(m=_(1,1)+_(this.crc32(f),4)+f,p+="uc"+_(m.length,2)+m)
var b=""
return b+="\n\0",b+=h||u?"\0\b":"\0\0",b+=r.compressionMethod,b+=_(a,2),b+=_(s,2),b+=_(r.crc32,4),b+=_(r.compressedSize,4),b+=_(r.uncompressedSize,4),b+=_(l.length,2),b+=_(p.length,2),{fileRecord:C.LOCAL_FILE_HEADER+b+l+p,dirRecord:C.CENTRAL_FILE_HEADER+"\0"+b+_(f.length,2)+"\0\0\0\0"+(!0===i?"\0\0\0":"\0\0\0\0")+_(n,4)+l+p+f,compressedObject:r}},p={load:function(e,t){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(e){var t,r,n,a,s=[]
for(t in this.files)this.files.hasOwnProperty(t)&&(n=this.files[t],a=new f(n.name,n._data,B(n.options)),r=t.slice(this.root.length,t.length),t.slice(0,this.root.length)===this.root&&e(r,a)&&s.push(a))
return s},file:function(r,e,t){if(1!==arguments.length)return r=this.root+r,h.call(this,r,e,t),this
if(v.isRegExp(r)){var n=r
return this.filter(function(e,t){return!t.dir&&n.test(e)})}return this.filter(function(e,t){return!t.dir&&e===r})[0]||null},folder:function(r){if(!r)return this
if(v.isRegExp(r))return this.filter(function(e,t){return t.dir&&r.test(e)})
var e=this.root+r,t=d.call(this,e),n=this.clone()
return n.root=t.name,n},remove:function(r){r=this.root+r
var e=this.files[r]
if(e||("/"!=r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r]
else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name]
return this},generate:function(e){e=B(e||{},{base64:!0,compression:"STORE",type:"base64",comment:null}),v.checkSupport(e.type)
var t,r,n=[],a=0,s=0,i=v.transformTo("string",this.utf8encode(e.comment||this.comment||""))
for(var o in this.files)if(this.files.hasOwnProperty(o)){var l=this.files[o],c=l.options.compression||e.compression.toUpperCase(),f=b[c]
if(!f)throw new Error(c+" is not a valid compression method !")
var h=T.call(this,l,f),u=y.call(this,o,l,h,a)
a+=u.fileRecord.length+h.compressedSize,s+=u.dirRecord.length,n.push(u)}var d
d=C.CENTRAL_DIRECTORY_END+"\0\0\0\0"+_(n.length,2)+_(n.length,2)+_(s,4)+_(a,4)+_(i.length,2)+i
var p=e.type.toLowerCase()
for(t="uint8array"===p||"arraybuffer"===p||"blob"===p||"nodebuffer"===p?new A(a+s+d.length):new S(a+s+d.length),r=0;r<n.length;r++)t.append(n[r].fileRecord),t.append(n[r].compressedObject.compressedContent)
for(r=0;r<n.length;r++)t.append(n[r].dirRecord)
t.append(d)
var g=t.finalize()
switch(e.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return v.transformTo(e.type.toLowerCase(),g)
case"blob":return v.arrayBuffer2Blob(v.transformTo("arraybuffer",g))
case"base64":return e.base64?m.encode(g):g
default:return g}},crc32:function(e,t){return w(e,t)},utf8encode:function(e){return v.transformTo("string",E.utf8encode(e))},utf8decode:function(e){return E.utf8decode(e)}}
t.exports=p},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(e,t,r){"use strict"
r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],15:[function(e,t,r){"use strict"
var n=e("./dataReader"),a=e("./utils")
function s(e,t){this.data=e,t||(this.data=a.string2binary(this.data)),this.length=this.data.length,this.index=0}(s.prototype=new n).byteAt=function(e){return this.data.charCodeAt(e)},s.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)},s.prototype.readData=function(e){this.checkOffset(e)
var t=this.data.slice(this.index,this.index+e)
return this.index+=e,t},t.exports=s},{"./dataReader":5,"./utils":21}],16:[function(e,t,r){"use strict"
var n=e("./utils"),a=function(){this.data=[]}
a.prototype={append:function(e){e=n.transformTo("string",e),this.data.push(e)},finalize:function(){return this.data.join("")}},t.exports=a},{"./utils":21}],17:[function(e,t,n){(function(e){"use strict"
if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,n.nodebuffer=void 0!==e,n.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)n.blob=!1
else{var t=new ArrayBuffer(0)
try{n.blob=0===new Blob([t],{type:"application/zip"}).size}catch(e){try{var r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
r.append(t),n.blob=0===r.getBlob("application/zip").size}catch(e){n.blob=!1}}}}).call(this,void 0!==r?r:void 0)},{}],18:[function(e,t,r){"use strict"
var n=e("./dataReader")
function a(e){e&&(this.data=e,this.length=this.data.length,this.index=0)}(a.prototype=new n).byteAt=function(e){return this.data[e]},a.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),a=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===a)return s
return-1},a.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0)
var t=this.data.subarray(this.index,this.index+e)
return this.index+=e,t},t.exports=a},{"./dataReader":5}],19:[function(e,t,r){"use strict"
var n=e("./utils"),a=function(e){this.data=new Uint8Array(e),this.index=0}
a.prototype={append:function(e){0!==e.length&&(e=n.transformTo("uint8array",e),this.data.set(e,this.index),this.index+=e.length)},finalize:function(){return this.data}},t.exports=a},{"./utils":21}],20:[function(e,t,r){"use strict"
for(var o=e("./utils"),l=e("./support"),n=e("./nodeBuffer"),c=new Array(256),a=0;a<256;a++)c[a]=252<=a?6:248<=a?5:240<=a?4:224<=a?3:192<=a?2:1
c[254]=c[254]=1
var s=function(e,t){var r
for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--
return r<0?t:0===r?t:r+c[e[r]]>t?r:t},i=function(e){var t,r,n,a,s=e.length,i=new Array(2*s)
for(t=r=0;t<s;)if((n=e[t++])<128)i[r++]=n
else if(4<(a=c[n]))i[r++]=65533,t+=a-1
else{for(n&=2===a?31:3===a?15:7;1<a&&t<s;)n=n<<6|63&e[t++],a--
i[r++]=1<a?65533:n<65536?n:(n-=65536,i[r++]=55296|n>>10&1023,56320|1023&n)}return i.length!==r&&(i.subarray?i=i.subarray(0,r):i.length=r),o.applyFromCharCode(i)}
r.utf8encode=function(e){return l.nodebuffer?n(e,"utf-8"):function(e){var t,r,n,a,s,i=e.length,o=0
for(a=0;a<i;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<i&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),o+=r<128?1:r<2048?2:r<65536?3:4
for(t=l.uint8array?new Uint8Array(o):new Array(o),a=s=0;s<o;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<i&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),t[s++]=r<128?r:(t[s++]=r<2048?192|r>>>6:(t[s++]=r<65536?224|r>>>12:(t[s++]=240|r>>>18,128|r>>>12&63),128|r>>>6&63),128|63&r)
return t}(e)},r.utf8decode=function(e){if(l.nodebuffer)return o.transformTo("nodebuffer",e).toString("utf-8")
for(var t=[],r=0,n=(e=o.transformTo(l.uint8array?"uint8array":"array",e)).length;r<n;){var a=s(e,Math.min(r+65536,n))
l.uint8array?t.push(i(e.subarray(r,a))):t.push(i(e.slice(r,a))),r=a}return t.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(e,t,c){"use strict"
var r=e("./support"),n=e("./compressions"),f=e("./nodeBuffer")
function a(e){return e}function s(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r)
return t}function i(e){var t=65536,r=[],n=e.length,a=c.getTypeOf(e),s=0,i=!0
try{switch(a){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0))
break
case"nodebuffer":String.fromCharCode.apply(null,f(0))}}catch(e){i=!1}if(!i){for(var o="",l=0;l<e.length;l++)o+=String.fromCharCode(e[l])
return o}for(;s<n&&1<t;)try{"array"===a||"nodebuffer"===a?r.push(String.fromCharCode.apply(null,e.slice(s,Math.min(s+t,n)))):r.push(String.fromCharCode.apply(null,e.subarray(s,Math.min(s+t,n)))),s+=t}catch(e){t=Math.floor(t/2)}return r.join("")}function o(e,t){for(var r=0;r<e.length;r++)t[r]=e[r]
return t}c.string2binary=function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(255&e.charCodeAt(r))
return t},c.arrayBuffer2Blob=function(t){c.checkSupport("blob")
try{return new Blob([t],{type:"application/zip"})}catch(e){try{var r=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
return r.append(t),r.getBlob("application/zip")}catch(e){throw new Error("Bug : can't construct the Blob.")}}},c.applyFromCharCode=i
var l={}
l.string={string:a,array:function(e){return s(e,new Array(e.length))},arraybuffer:function(e){return l.string.uint8array(e).buffer},uint8array:function(e){return s(e,new Uint8Array(e.length))},nodebuffer:function(e){return s(e,f(e.length))}},l.array={string:i,array:a,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return f(e)}},l.arraybuffer={string:function(e){return i(new Uint8Array(e))},array:function(e){return o(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:a,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return f(new Uint8Array(e))}},l.uint8array={string:i,array:function(e){return o(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:a,nodebuffer:function(e){return f(e)}},l.nodebuffer={string:i,array:function(e){return o(e,new Array(e.length))},arraybuffer:function(e){return l.nodebuffer.uint8array(e).buffer},uint8array:function(e){return o(e,new Uint8Array(e.length))},nodebuffer:a},c.transformTo=function(e,t){if(t||(t=""),!e)return t
c.checkSupport(e)
var r=c.getTypeOf(t)
return l[r][e](t)},c.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":r.nodebuffer&&f.test(e)?"nodebuffer":r.uint8array&&e instanceof Uint8Array?"uint8array":r.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(e){if(!r[e.toLowerCase()])throw new Error(e+" is not supported by this browser")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(e){var t,r,n=""
for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase()
return n},c.findCompression=function(e){for(var t in n)if(n.hasOwnProperty(t)&&n[t].magic===e)return n[t]
return null},c.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(e,t,r){"use strict"
var n=e("./stringReader"),a=e("./nodeBufferReader"),s=e("./uint8ArrayReader"),i=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support"),f=e("./object")
function h(e,t){this.files=[],this.loadOptions=t,e&&this.load(e)}h.prototype={checkSignature:function(e){var t=this.reader.readString(4)
if(t!==e)throw new Error("Corrupted zip or bug : unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=f.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={}
for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readString(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t
for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8()},readCentralDir:function(){var e
for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===o.CENTRAL_FILE_HEADER;)(e=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END)
if(-1===e)throw new Error("Corrupted zip : can't find end of central directory")
if(this.reader.setIndex(e),this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,-1===(e=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)))throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator")
this.reader.setIndex(e),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(e){var t=i.getTypeOf(e)
"string"!==t||c.uint8array?this.reader="nodebuffer"===t?new a(e):new s(i.transformTo("uint8array",e)):this.reader=new n(e,this.loadOptions.optimizedBinaryString)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(e,t,r){"use strict"
var n=e("./stringReader"),s=e("./utils"),a=e("./compressedObject"),i=e("./object")
function o(e,t){this.options=e,this.loadOptions=t}o.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},prepareCompressedContent:function(r,n,a){return function(){var e=r.index
r.setIndex(n)
var t=r.readData(a)
return r.setIndex(e),t}},prepareContent:function(e,t,r,n,a){return function(){var e=s.transformTo(n.uncompressInputType,this.getCompressedContent()),t=n.uncompress(e)
if(t.length!==a)throw new Error("Bug : uncompressed data size mismatch")
return t}},readLocalPart:function(e){var t,r
if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readString(this.fileNameLength),e.skip(r),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)")
if(null===(t=s.findCompression(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")")
if(this.decompressed=new a,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(e,e.index,this.compressedSize,t),this.decompressed.getContent=this.prepareContent(e,e.index,this.compressedSize,t,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=s.transformTo("string",this.decompressed.getContent()),i.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(e){if(this.versionMadeBy=e.readString(2),this.versionNeeded=e.readInt(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4),this.fileNameLength=e.readInt(2),this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported")
this.fileName=e.readString(this.fileNameLength),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readString(this.fileCommentLength),this.dir=!!(16&this.externalFileAttributes)},parseZIP64ExtraField:function(e){if(this.extraFields[1]){var t=new n(this.extraFields[1].value)
this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=t.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=t.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=t.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=t.readInt(4))}},readExtraFields:function(e){var t,r,n,a=e.index
for(this.extraFields=this.extraFields||{};e.index<a+this.extraFieldsLength;)t=e.readInt(2),r=e.readInt(2),n=e.readString(r),this.extraFields[t]={id:t,length:r,value:n}},handleUTF8:function(){if(this.useUTF8())this.fileName=i.utf8decode(this.fileName),this.fileComment=i.utf8decode(this.fileComment)
else{var e=this.findExtraFieldUnicodePath()
null!==e&&(this.fileName=e)
var t=this.findExtraFieldUnicodeComment()
null!==t&&(this.fileComment=t)}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789]
if(e){var t=new n(e.value)
return 1!==t.readInt(1)?null:i.crc32(this.fileName)!==t.readInt(4)?null:i.utf8decode(t.readString(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461]
if(e){var t=new n(e.value)
return 1!==t.readInt(1)?null:i.crc32(this.fileComment)!==t.readInt(4)?null:i.utf8decode(t.readString(e.length-5))}return null}},t.exports=o},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(e,t,r){"use strict"
var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(e,t,r){"use strict"
var i=e("./zlib/deflate.js"),o=e("./utils/common"),l=e("./utils/strings"),n=e("./zlib/messages"),a=e("./zlib/zstream"),s=function(e){this.options=o.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},e||{})
var t=this.options
t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new a,this.strm.avail_out=0
var r=i.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy)
if(0!==r)throw new Error(n[r])
t.header&&i.deflateSetHeader(this.strm,t.header)}
function c(e,t){var r=new s(t)
if(r.push(e,!0),r.err)throw r.msg
return r.result}s.prototype.push=function(e,t){var r,n,a=this.strm,s=this.options.chunkSize
if(this.ended)return!1
n=t===~~t?t:!0===t?4:0,a.input="string"==typeof e?l.string2buf(e):e,a.next_in=0,a.avail_in=a.input.length
do{if(0===a.avail_out&&(a.output=new o.Buf8(s),a.next_out=0,a.avail_out=s),1!==(r=i.deflate(a,n))&&0!==r)return this.onEnd(r),!(this.ended=!0);(0===a.avail_out||0===a.avail_in&&4===n)&&("string"===this.options.to?this.onData(l.buf2binstring(o.shrinkBuf(a.output,a.next_out))):this.onData(o.shrinkBuf(a.output,a.next_out)))}while((0<a.avail_in||0===a.avail_out)&&1!==r)
return 4!==n||(r=i.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r)},s.prototype.onData=function(e){this.chunks.push(e)},s.prototype.onEnd=function(e){0===e&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=s,r.deflate=c,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,c(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,c(e,t)}},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(e,t,r){"use strict"
var c=e("./zlib/inflate.js"),f=e("./utils/common"),h=e("./utils/strings"),u=e("./zlib/constants"),n=e("./zlib/messages"),a=e("./zlib/zstream"),s=e("./zlib/gzheader"),i=function(e){this.options=f.assign({chunkSize:16384,windowBits:0,to:""},e||{})
var t=this.options
t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new a,this.strm.avail_out=0
var r=c.inflateInit2(this.strm,t.windowBits)
if(r!==u.Z_OK)throw new Error(n[r])
this.header=new s,c.inflateGetHeader(this.strm,this.header)}
function o(e,t){var r=new i(t)
if(r.push(e,!0),r.err)throw r.msg
return r.result}i.prototype.push=function(e,t){var r,n,a,s,i,o=this.strm,l=this.options.chunkSize
if(this.ended)return!1
n=t===~~t?t:!0===t?u.Z_FINISH:u.Z_NO_FLUSH,o.input="string"==typeof e?h.binstring2buf(e):e,o.next_in=0,o.avail_in=o.input.length
do{if(0===o.avail_out&&(o.output=new f.Buf8(l),o.next_out=0,o.avail_out=l),(r=c.inflate(o,u.Z_NO_FLUSH))!==u.Z_STREAM_END&&r!==u.Z_OK)return this.onEnd(r),!(this.ended=!0)
o.next_out&&(0===o.avail_out||r===u.Z_STREAM_END||0===o.avail_in&&n===u.Z_FINISH)&&("string"===this.options.to?(a=h.utf8border(o.output,o.next_out),s=o.next_out-a,i=h.buf2string(o.output,a),o.next_out=s,o.avail_out=l-s,s&&f.arraySet(o.output,o.output,a,s,0),this.onData(i)):this.onData(f.shrinkBuf(o.output,o.next_out)))}while(0<o.avail_in&&r!==u.Z_STREAM_END)
return r===u.Z_STREAM_END&&(n=u.Z_FINISH),n!==u.Z_FINISH||(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===u.Z_OK)},i.prototype.onData=function(e){this.chunks.push(e)},i.prototype.onEnd=function(e){e===u.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=f.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=i,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(e,t,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array
r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift()
if(r){if("object"!==o(r))throw new TypeError(r+"must be non-object")
for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)}
var a={arraySet:function(e,t,r,n,a){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),a)
else for(var s=0;s<n;s++)e[a+s]=t[r+s]},flattenChunks:function(e){var t,r,n,a,s,i
for(t=n=0,r=e.length;t<r;t++)n+=e[t].length
for(i=new Uint8Array(n),t=a=0,r=e.length;t<r;t++)s=e[t],i.set(s,a),a+=s.length
return i}},s={arraySet:function(e,t,r,n,a){for(var s=0;s<n;s++)e[a+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}}
r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],28:[function(e,t,r){"use strict"
var l=e("./common"),a=!0,s=!0
try{String.fromCharCode.apply(null,[0])}catch(e){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var c=new l.Buf8(256),n=0;n<256;n++)c[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1
function f(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&a))return String.fromCharCode.apply(null,l.shrinkBuf(e,t))
for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n])
return r}c[254]=c[254]=1,r.string2buf=function(e){var t,r,n,a,s,i=e.length,o=0
for(a=0;a<i;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<i&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),o+=r<128?1:r<2048?2:r<65536?3:4
for(t=new l.Buf8(o),a=s=0;s<o;a++)55296==(64512&(r=e.charCodeAt(a)))&&a+1<i&&56320==(64512&(n=e.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),t[s++]=r<128?r:(t[s++]=r<2048?192|r>>>6:(t[s++]=r<65536?224|r>>>12:(t[s++]=240|r>>>18,128|r>>>12&63),128|r>>>6&63),128|63&r)
return t},r.buf2binstring=function(e){return f(e,e.length)},r.binstring2buf=function(e){for(var t=new l.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r)
return t},r.buf2string=function(e,t){var r,n,a,s,i=t||e.length,o=new Array(2*i)
for(r=n=0;r<i;)if((a=e[r++])<128)o[n++]=a
else if(4<(s=c[a]))o[n++]=65533,r+=s-1
else{for(a&=2===s?31:3===s?15:7;1<s&&r<i;)a=a<<6|63&e[r++],s--
o[n++]=1<s?65533:a<65536?a:(a-=65536,o[n++]=55296|a>>10&1023,56320|1023&a)}return f(o,n)},r.utf8border=function(e,t){var r
for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--
return r<0?t:0===r?t:r+c[e[r]]>t?r:t}},{"./common":27}],29:[function(e,t,r){"use strict"
t.exports=function(e,t,r,n){for(var a=65535&e|0,s=e>>>16&65535|0,i=0;0!==r;){for(r-=i=2e3<r?2e3:r;s=s+(a=a+t[n++]|0)|0,--i;);a%=65521,s%=65521}return a|s<<16|0}},{}],30:[function(e,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(e,t,r){"use strict"
var o=function(){for(var e,t=[],r=0;r<256;r++){e=r
for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1
t[r]=e}return t}()
t.exports=function(e,t,r,n){var a=o,s=n+r
e^=-1
for(var i=n;i<s;i++)e=e>>>8^a[255&(e^t[i])]
return-1^e}},{}],32:[function(e,t,r){"use strict"
var u=e("../utils/common"),l=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),c=0,f=4,h=0,g=-2,m=-1,b=4,a=2,v=8,w=9,s=286,i=30,o=19,C=2*s+1,E=15,S=3,A=258,_=A+S+1,B=42,T=113,y=1,k=2,x=3,I=4
function R(e,t){return e.msg=n[t],t}function O(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending
r>e.avail_out&&(r=e.avail_out),0!==r&&(u.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function P(e,t){l._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function N(e,t){e.pending_buf[e.pending++]=t}function L(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function M(e,t){var r,n,a=e.max_chain_length,s=e.strstart,i=e.prev_length,o=e.nice_match,l=e.strstart>e.w_size-_?e.strstart-(e.w_size-_):0,c=e.window,f=e.w_mask,h=e.prev,u=e.strstart+A,d=c[s+i-1],p=c[s+i]
e.prev_length>=e.good_match&&(a>>=2),o>e.lookahead&&(o=e.lookahead)
do{if(c[(r=t)+i]===p&&c[r+i-1]===d&&c[r]===c[s]&&c[++r]===c[s+1]){s+=2,r++
do{}while(c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&s<u)
if(n=A-(u-s),s=u-A,i<n){if(e.match_start=t,o<=(i=n))break
d=c[s+i-1],p=c[s+i]}}}while((t=h[t&f])>l&&0!=--a)
return i<=e.lookahead?i:e.lookahead}function U(e){var t,r,n,a,s,i,o,l,c,f,h=e.w_size
do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=h+(h-_)){for(u.arraySet(e.window,e.window,h,h,0),e.match_start-=h,e.strstart-=h,e.block_start-=h,t=r=e.hash_size;n=e.head[--t],e.head[t]=h<=n?n-h:0,--r;);for(t=r=h;n=e.prev[--t],e.prev[t]=h<=n?n-h:0,--r;);a+=h}if(0===e.strm.avail_in)break
if(i=e.strm,o=e.window,l=e.strstart+e.lookahead,c=a,f=void 0,f=i.avail_in,c<f&&(f=c),r=0===f?0:(i.avail_in-=f,u.arraySet(o,i.input,i.next_in,f,l),1===i.state.wrap?i.adler=d(i.adler,o,f,l):2===i.state.wrap&&(i.adler=p(i.adler,o,f,l)),i.next_in+=f,i.total_in+=f,f),e.lookahead+=r,e.lookahead+e.insert>=S)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+S-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<S)););}while(e.lookahead<_&&0!==e.strm.avail_in)}function H(e,t){for(var r,n;;){if(e.lookahead<_){if(U(e),e.lookahead<_&&t===c)return y
if(0===e.lookahead)break}if(r=0,e.lookahead>=S&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+S-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-_&&(e.match_length=M(e,r)),e.match_length>=S)if(n=l._tr_tally(e,e.strstart-e.match_start,e.match_length-S),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=S){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+S-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask
else n=l._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++
if(n&&(P(e,!1),0===e.strm.avail_out))return y}return e.insert=e.strstart<S-1?e.strstart:S-1,t===f?(P(e,!0),0===e.strm.avail_out?x:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?y:k}function W(e,t){for(var r,n,a;;){if(e.lookahead<_){if(U(e),e.lookahead<_&&t===c)return y
if(0===e.lookahead)break}if(r=0,e.lookahead>=S&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+S-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=S-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-_&&(e.match_length=M(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===S&&4096<e.strstart-e.match_start)&&(e.match_length=S-1)),e.prev_length>=S&&e.match_length<=e.prev_length){for(a=e.strstart+e.lookahead-S,n=l._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-S),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=a&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+S-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=S-1,e.strstart++,n&&(P(e,!1),0===e.strm.avail_out))return y}else if(e.match_available){if((n=l._tr_tally(e,0,e.window[e.strstart-1]))&&P(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return y}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=l._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<S-1?e.strstart:S-1,t===f?(P(e,!0),0===e.strm.avail_out?x:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?y:k}var V,z=function(e,t,r,n,a){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=a}
function X(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new u.Buf16(2*C),this.dyn_dtree=new u.Buf16(2*(2*i+1)),this.bl_tree=new u.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new u.Buf16(E+1),this.heap=new u.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new u.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t
return e&&e.state?(e.total_in=e.total_out=0,e.data_type=a,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?B:T,e.adler=2===t.wrap?0:1,t.last_flush=c,l._tr_init(t),h):R(e,g)}function j(e){var t,r=G(e)
return r===h&&((t=e.state).window_size=2*t.w_size,D(t.head),t.max_lazy_match=V[t.level].max_lazy,t.good_match=V[t.level].good_length,t.nice_match=V[t.level].nice_length,t.max_chain_length=V[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=S-1,t.match_available=0,t.ins_h=0),r}function Y(e,t,r,n,a,s){if(!e)return g
var i=1
if(t===m&&(t=6),n<0?(i=0,n=-n):15<n&&(i=2,n-=16),a<1||w<a||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,g)
8===n&&(n=9)
var o=new X
return(e.state=o).strm=e,o.wrap=i,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=a+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+S-1)/S),o.window=new u.Buf8(2*o.w_size),o.head=new u.Buf16(o.hash_size),o.prev=new u.Buf16(o.w_size),o.lit_bufsize=1<<a+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new u.Buf8(o.pending_buf_size),o.d_buf=o.lit_bufsize>>1,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,j(e)}V=[new z(0,0,0,0,function(e,t){var r=65535
for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(U(e),0===e.lookahead&&t===c)return y
if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0
var n=e.block_start+r
if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,P(e,!1),0===e.strm.avail_out))return y
if(e.strstart-e.block_start>=e.w_size-_&&(P(e,!1),0===e.strm.avail_out))return y}return e.insert=0,t===f?(P(e,!0),0===e.strm.avail_out?x:I):(e.strstart>e.block_start&&(P(e,!1),e.strm.avail_out),y)}),new z(4,4,8,4,H),new z(4,5,16,8,H),new z(4,6,32,32,H),new z(4,4,16,16,W),new z(8,16,32,32,W),new z(8,16,128,128,W),new z(8,32,128,256,W),new z(32,128,258,1024,W),new z(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=j,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?g:(e.state.gzhead=t,h):g},r.deflate=function(e,t){var r,n,a,s
if(!e||!e.state||5<t||t<0)return e?R(e,g):g
if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:g)
if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===B)if(2===n.wrap)e.adler=0,N(n,31),N(n,139),N(n,8),n.gzhead?(N(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),N(n,255&n.gzhead.time),N(n,n.gzhead.time>>8&255),N(n,n.gzhead.time>>16&255),N(n,n.gzhead.time>>24&255),N(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),N(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(N(n,255&n.gzhead.extra.length),N(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(N(n,0),N(n,0),N(n,0),N(n,0),N(n,0),N(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),N(n,3),n.status=T)
else{var i=v+(n.w_bits-8<<4)<<8
i|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(i|=32),i+=31-i%31,n.status=T,L(n,i),0!==n.strstart&&(L(n,e.adler>>>16),L(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(a=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>a&&(e.adler=p(e.adler,n.pending_buf,n.pending-a,a)),F(e),a=n.pending,n.pending!==n.pending_buf_size));)N(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++
n.gzhead.hcrc&&n.pending>a&&(e.adler=p(e.adler,n.pending_buf,n.pending-a,a)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73
if(73===n.status)if(n.gzhead.name){a=n.pending
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(e.adler=p(e.adler,n.pending_buf,n.pending-a,a)),F(e),a=n.pending,n.pending===n.pending_buf_size)){s=1
break}N(n,s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0)}while(0!==s)
n.gzhead.hcrc&&n.pending>a&&(e.adler=p(e.adler,n.pending_buf,n.pending-a,a)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91
if(91===n.status)if(n.gzhead.comment){a=n.pending
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(e.adler=p(e.adler,n.pending_buf,n.pending-a,a)),F(e),a=n.pending,n.pending===n.pending_buf_size)){s=1
break}N(n,s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0)}while(0!==s)
n.gzhead.hcrc&&n.pending>a&&(e.adler=p(e.adler,n.pending_buf,n.pending-a,a)),0===s&&(n.status=103)}else n.status=103
if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(N(n,255&e.adler),N(n,e.adler>>8&255),e.adler=0,n.status=T)):n.status=T),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,h}else if(0===e.avail_in&&O(t)<=O(r)&&t!==f)return R(e,-5)
if(666===n.status&&0!==e.avail_in)return R(e,-5)
if(0!==e.avail_in||0!==n.lookahead||t!==c&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(U(e),0===e.lookahead)){if(t===c)return y
break}if(e.match_length=0,r=l._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(P(e,!1),0===e.strm.avail_out))return y}return e.insert=0,t===f?(P(e,!0),0===e.strm.avail_out?x:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?y:k}(n,t):3===n.strategy?function(e,t){for(var r,n,a,s,i=e.window;;){if(e.lookahead<=A){if(U(e),e.lookahead<=A&&t===c)return y
if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=S&&0<e.strstart&&(n=i[a=e.strstart-1])===i[++a]&&n===i[++a]&&n===i[++a]){s=e.strstart+A
do{}while(n===i[++a]&&n===i[++a]&&n===i[++a]&&n===i[++a]&&n===i[++a]&&n===i[++a]&&n===i[++a]&&n===i[++a]&&a<s)
e.match_length=A-(s-a),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=S?(r=l._tr_tally(e,1,e.match_length-S),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=l._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(P(e,!1),0===e.strm.avail_out))return y}return e.insert=0,t===f?(P(e,!0),0===e.strm.avail_out?x:I):e.last_lit&&(P(e,!1),0===e.strm.avail_out)?y:k}(n,t):V[n.level].func(n,t)
if(o!==x&&o!==I||(n.status=666),o===y||o===x)return 0===e.avail_out&&(n.last_flush=-1),h
if(o===k&&(1===t?l._tr_align(n):5!==t&&(l._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,h}return t!==f?h:n.wrap<=0?1:(2===n.wrap?(N(n,255&e.adler),N(n,e.adler>>8&255),N(n,e.adler>>16&255),N(n,e.adler>>24&255),N(n,255&e.total_in),N(n,e.total_in>>8&255),N(n,e.total_in>>16&255),N(n,e.total_in>>24&255)):(L(n,e.adler>>>16),L(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?h:1)},r.deflateEnd=function(e){var t
return e&&e.state?(t=e.state.status)!==B&&69!==t&&73!==t&&91!==t&&103!==t&&t!==T&&666!==t?R(e,g):(e.state=null,t===T?R(e,-3):h):g},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(e,t,r){"use strict"
t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],34:[function(e,t,r){"use strict"
t.exports=function(e,t){var r,n,a,s,i,o,l,c,f,h,u,d,p,g,m,b,v,w,C,E,S,A,_,B,T
r=e.state,n=e.next_in,B=e.input,a=n+(e.avail_in-5),s=e.next_out,T=e.output,i=s-(t-e.avail_out),o=s+(e.avail_out-257),l=r.dmax,c=r.wsize,f=r.whave,h=r.wnext,u=r.window,d=r.hold,p=r.bits,g=r.lencode,m=r.distcode,b=(1<<r.lenbits)-1,v=(1<<r.distbits)-1
e:do{p<15&&(d+=B[n++]<<p,p+=8,d+=B[n++]<<p,p+=8),w=g[d&b]
t:for(;;){if(d>>>=C=w>>>24,p-=C,0===(C=w>>>16&255))T[s++]=65535&w
else{if(!(16&C)){if(0==(64&C)){w=g[(65535&w)+(d&(1<<C)-1)]
continue t}if(32&C){r.mode=12
break e}e.msg="invalid literal/length code",r.mode=30
break e}E=65535&w,(C&=15)&&(p<C&&(d+=B[n++]<<p,p+=8),E+=d&(1<<C)-1,d>>>=C,p-=C),p<15&&(d+=B[n++]<<p,p+=8,d+=B[n++]<<p,p+=8),w=m[d&v]
r:for(;;){if(d>>>=C=w>>>24,p-=C,!(16&(C=w>>>16&255))){if(0==(64&C)){w=m[(65535&w)+(d&(1<<C)-1)]
continue r}e.msg="invalid distance code",r.mode=30
break e}if(S=65535&w,p<(C&=15)&&(d+=B[n++]<<p,(p+=8)<C&&(d+=B[n++]<<p,p+=8)),l<(S+=d&(1<<C)-1)){e.msg="invalid distance too far back",r.mode=30
break e}if(d>>>=C,p-=C,(C=s-i)<S){if(f<(C=S-C)&&r.sane){e.msg="invalid distance too far back",r.mode=30
break e}if(_=u,(A=0)===h){if(A+=c-C,C<E){for(E-=C;T[s++]=u[A++],--C;);A=s-S,_=T}}else if(h<C){if(A+=c+h-C,(C-=h)<E){for(E-=C;T[s++]=u[A++],--C;);if(A=0,h<E){for(E-=C=h;T[s++]=u[A++],--C;);A=s-S,_=T}}}else if(A+=h-C,C<E){for(E-=C;T[s++]=u[A++],--C;);A=s-S,_=T}for(;2<E;)T[s++]=_[A++],T[s++]=_[A++],T[s++]=_[A++],E-=3
E&&(T[s++]=_[A++],1<E&&(T[s++]=_[A++]))}else{for(A=s-S;T[s++]=T[A++],T[s++]=T[A++],T[s++]=T[A++],2<(E-=3););E&&(T[s++]=T[A++],1<E&&(T[s++]=T[A++]))}break}}break}}while(n<a&&s<o)
n-=E=p>>3,d&=(1<<(p-=E<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<a?a-n+5:5-(n-a),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],35:[function(e,t,r){"use strict"
var P=e("../utils/common"),N=e("./adler32"),L=e("./crc32"),M=e("./inffast"),U=e("./inftrees"),H=1,W=2,V=0,z=-2,X=1,n=852,a=592
function G(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new P.Buf16(320),this.work=new P.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function i(e){var t
return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=X,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new P.Buf32(n),t.distcode=t.distdyn=new P.Buf32(a),t.sane=1,t.back=-1,V):z}function o(e){var t
return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,i(e)):z}function l(e,t){var r,n
return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?z:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):z}function c(e,t){var r,n
return e?(n=new s,(e.state=n).window=null,(r=l(e,t))!==V&&(e.state=null),r):z}var f,h,u=!0
function j(e){if(u){var t
for(f=new P.Buf32(512),h=new P.Buf32(32),t=0;t<144;)e.lens[t++]=8
for(;t<256;)e.lens[t++]=9
for(;t<280;)e.lens[t++]=7
for(;t<288;)e.lens[t++]=8
for(U(H,e.lens,0,288,f,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5
U(W,e.lens,0,32,h,0,e.work,{bits:5}),u=!1}e.lencode=f,e.lenbits=9,e.distcode=h,e.distbits=5}r.inflateReset=o,r.inflateReset2=l,r.inflateResetKeep=i,r.inflateInit=function(e){return c(e,15)},r.inflateInit2=c,r.inflate=function(e,t){var r,n,a,s,i,o,l,c,f,h,u,d,p,g,m,b,v,w,C,E,S,A,_,B,T,y,k,x,I,R,O=0,D=new P.Buf8(4),F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return z
12===(r=e.state).mode&&(r.mode=13),i=e.next_out,a=e.output,l=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,c=r.hold,f=r.bits,h=o,u=l,A=V
e:for(;;)switch(r.mode){case X:if(0===r.wrap){r.mode=13
break}for(;f<16;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(2&r.wrap&&35615===c){D[r.check=0]=255&c,D[1]=c>>>8&255,r.check=L(r.check,D,2,0),f=c=0,r.mode=2
break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",r.mode=30
break}if(8!=(15&c)){e.msg="unknown compression method",r.mode=30
break}if(f-=4,S=8+(15&(c>>>=4)),0===r.wbits)r.wbits=S
else if(S>r.wbits){e.msg="invalid window size",r.mode=30
break}r.dmax=1<<S,e.adler=r.check=1,r.mode=512&c?10:12,f=c=0
break
case 2:for(;f<16;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(r.flags=c,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30
break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30
break}r.head&&(r.head.text=c>>8&1),512&r.flags&&(D[0]=255&c,D[1]=c>>>8&255,r.check=L(r.check,D,2,0)),f=c=0,r.mode=3
case 3:for(;f<32;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}r.head&&(r.head.time=c),512&r.flags&&(D[0]=255&c,D[1]=c>>>8&255,D[2]=c>>>16&255,D[3]=c>>>24&255,r.check=L(r.check,D,4,0)),f=c=0,r.mode=4
case 4:for(;f<16;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}r.head&&(r.head.xflags=255&c,r.head.os=c>>8),512&r.flags&&(D[0]=255&c,D[1]=c>>>8&255,r.check=L(r.check,D,2,0)),f=c=0,r.mode=5
case 5:if(1024&r.flags){for(;f<16;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}r.length=c,r.head&&(r.head.extra_len=c),512&r.flags&&(D[0]=255&c,D[1]=c>>>8&255,r.check=L(r.check,D,2,0)),f=c=0}else r.head&&(r.head.extra=null)
r.mode=6
case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(S=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),P.arraySet(r.head.extra,n,s,d,S)),512&r.flags&&(r.check=L(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e
r.length=0,r.mode=7
case 7:if(2048&r.flags){if(0===o)break e
for(d=0;S=n[s+d++],r.head&&S&&r.length<65536&&(r.head.name+=String.fromCharCode(S)),S&&d<o;);if(512&r.flags&&(r.check=L(r.check,n,d,s)),o-=d,s+=d,S)break e}else r.head&&(r.head.name=null)
r.length=0,r.mode=8
case 8:if(4096&r.flags){if(0===o)break e
for(d=0;S=n[s+d++],r.head&&S&&r.length<65536&&(r.head.comment+=String.fromCharCode(S)),S&&d<o;);if(512&r.flags&&(r.check=L(r.check,n,d,s)),o-=d,s+=d,S)break e}else r.head&&(r.head.comment=null)
r.mode=9
case 9:if(512&r.flags){for(;f<16;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(c!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30
break}f=c=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12
break
case 10:for(;f<32;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}e.adler=r.check=G(c),f=c=0,r.mode=11
case 11:if(0===r.havedict)return e.next_out=i,e.avail_out=l,e.next_in=s,e.avail_in=o,r.hold=c,r.bits=f,2
e.adler=r.check=1,r.mode=12
case 12:if(5===t||6===t)break e
case 13:if(r.last){c>>>=7&f,f-=7&f,r.mode=27
break}for(;f<3;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}switch(r.last=1&c,f-=1,3&(c>>>=1)){case 0:r.mode=14
break
case 1:if(j(r),r.mode=20,6!==t)break
c>>>=2,f-=2
break e
case 2:r.mode=17
break
case 3:e.msg="invalid block type",r.mode=30}c>>>=2,f-=2
break
case 14:for(c>>>=7&f,f-=7&f;f<32;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if((65535&c)!=(c>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30
break}if(r.length=65535&c,f=c=0,r.mode=15,6===t)break e
case 15:r.mode=16
case 16:if(d=r.length){if(o<d&&(d=o),l<d&&(d=l),0===d)break e
P.arraySet(a,n,s,d,i),o-=d,s+=d,l-=d,i+=d,r.length-=d
break}r.mode=12
break
case 17:for(;f<14;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(r.nlen=257+(31&c),c>>>=5,f-=5,r.ndist=1+(31&c),c>>>=5,f-=5,r.ncode=4+(15&c),c>>>=4,f-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30
break}r.have=0,r.mode=18
case 18:for(;r.have<r.ncode;){for(;f<3;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}r.lens[F[r.have++]]=7&c,c>>>=3,f-=3}for(;r.have<19;)r.lens[F[r.have++]]=0
if(r.lencode=r.lendyn,r.lenbits=7,_={bits:r.lenbits},A=U(0,r.lens,0,19,r.lencode,0,r.work,_),r.lenbits=_.bits,A){e.msg="invalid code lengths set",r.mode=30
break}r.have=0,r.mode=19
case 19:for(;r.have<r.nlen+r.ndist;){for(;b=(O=r.lencode[c&(1<<r.lenbits)-1])>>>16&255,v=65535&O,!((m=O>>>24)<=f);){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(v<16)c>>>=m,f-=m,r.lens[r.have++]=v
else{if(16===v){for(B=m+2;f<B;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(c>>>=m,f-=m,0===r.have){e.msg="invalid bit length repeat",r.mode=30
break}S=r.lens[r.have-1],d=3+(3&c),c>>>=2,f-=2}else if(17===v){for(B=m+3;f<B;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}f-=m,S=0,d=3+(7&(c>>>=m)),c>>>=3,f-=3}else{for(B=m+7;f<B;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}f-=m,S=0,d=11+(127&(c>>>=m)),c>>>=7,f-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30
break}for(;d--;)r.lens[r.have++]=S}}if(30===r.mode)break
if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30
break}if(r.lenbits=9,_={bits:r.lenbits},A=U(H,r.lens,0,r.nlen,r.lencode,0,r.work,_),r.lenbits=_.bits,A){e.msg="invalid literal/lengths set",r.mode=30
break}if(r.distbits=6,r.distcode=r.distdyn,_={bits:r.distbits},A=U(W,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,_),r.distbits=_.bits,A){e.msg="invalid distances set",r.mode=30
break}if(r.mode=20,6===t)break e
case 20:r.mode=21
case 21:if(6<=o&&258<=l){e.next_out=i,e.avail_out=l,e.next_in=s,e.avail_in=o,r.hold=c,r.bits=f,M(e,u),i=e.next_out,a=e.output,l=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,c=r.hold,f=r.bits,12===r.mode&&(r.back=-1)
break}for(r.back=0;b=(O=r.lencode[c&(1<<r.lenbits)-1])>>>16&255,v=65535&O,!((m=O>>>24)<=f);){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(b&&0==(240&b)){for(w=m,C=b,E=v;b=(O=r.lencode[E+((c&(1<<w+C)-1)>>w)])>>>16&255,v=65535&O,!(w+(m=O>>>24)<=f);){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}c>>>=w,f-=w,r.back+=w}if(c>>>=m,f-=m,r.back+=m,r.length=v,0===b){r.mode=26
break}if(32&b){r.back=-1,r.mode=12
break}if(64&b){e.msg="invalid literal/length code",r.mode=30
break}r.extra=15&b,r.mode=22
case 22:if(r.extra){for(B=r.extra;f<B;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}r.length+=c&(1<<r.extra)-1,c>>>=r.extra,f-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23
case 23:for(;b=(O=r.distcode[c&(1<<r.distbits)-1])>>>16&255,v=65535&O,!((m=O>>>24)<=f);){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(0==(240&b)){for(w=m,C=b,E=v;b=(O=r.distcode[E+((c&(1<<w+C)-1)>>w)])>>>16&255,v=65535&O,!(w+(m=O>>>24)<=f);){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}c>>>=w,f-=w,r.back+=w}if(c>>>=m,f-=m,r.back+=m,64&b){e.msg="invalid distance code",r.mode=30
break}r.offset=v,r.extra=15&b,r.mode=24
case 24:if(r.extra){for(B=r.extra;f<B;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}r.offset+=c&(1<<r.extra)-1,c>>>=r.extra,f-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30
break}r.mode=25
case 25:if(0===l)break e
if(d=u-l,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30
break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),g=r.window}else g=a,p=i-r.offset,d=r.length
for(l<d&&(d=l),l-=d,r.length-=d;a[i++]=g[p++],--d;);0===r.length&&(r.mode=21)
break
case 26:if(0===l)break e
a[i++]=r.length,l--,r.mode=21
break
case 27:if(r.wrap){for(;f<32;){if(0===o)break e
o--,c|=n[s++]<<f,f+=8}if(u-=l,e.total_out+=u,r.total+=u,u&&(e.adler=r.check=r.flags?L(r.check,a,u,i-u):N(r.check,a,u,i-u)),u=l,(r.flags?c:G(c))!==r.check){e.msg="incorrect data check",r.mode=30
break}f=c=0}r.mode=28
case 28:if(r.wrap&&r.flags){for(;f<32;){if(0===o)break e
o--,c+=n[s++]<<f,f+=8}if(c!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30
break}f=c=0}r.mode=29
case 29:A=1
break e
case 30:A=-3
break e
case 31:return-4
case 32:default:return z}return e.next_out=i,e.avail_out=l,e.next_in=s,e.avail_in=o,r.hold=c,r.bits=f,(r.wsize||u!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&(y=(T=e).output,k=e.next_out,x=u-e.avail_out,null===(R=T.state).window&&(R.wsize=1<<R.wbits,R.wnext=0,R.whave=0,R.window=new P.Buf8(R.wsize)),x>=R.wsize?(P.arraySet(R.window,y,k-R.wsize,R.wsize,0),R.wnext=0,R.whave=R.wsize):(x<(I=R.wsize-R.wnext)&&(I=x),P.arraySet(R.window,y,k-x,I,R.wnext),(x-=I)?(P.arraySet(R.window,y,k-x,x,0),R.wnext=x,R.whave=R.wsize):(R.wnext+=I,R.wnext===R.wsize&&(R.wnext=0),R.whave<R.wsize&&(R.whave+=I)))),h-=e.avail_in,u-=e.avail_out,e.total_in+=h,e.total_out+=u,r.total+=u,r.wrap&&u&&(e.adler=r.check=r.flags?L(r.check,a,u,e.next_out-u):N(r.check,a,u,e.next_out-u)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0===h&&0===u||4===t)&&A===V&&(A=-5),A},r.inflateEnd=function(e){if(!e||!e.state)return z
var t=e.state
return t.window&&(t.window=null),e.state=null,V},r.inflateGetHeader=function(e,t){var r
return e&&e.state?0==(2&(r=e.state).wrap)?z:((r.head=t).done=!1,V):z},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(e,t,r){"use strict"
var F=e("../utils/common"),P=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],L=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],M=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]
t.exports=function(e,t,r,n,a,s,i,o){var l,c,f,h,u,d,p,g,m,b=o.bits,v=0,w=0,C=0,E=0,S=0,A=0,_=0,B=0,T=0,y=0,k=null,x=0,I=new F.Buf16(16),R=new F.Buf16(16),O=null,D=0
for(v=0;v<=15;v++)I[v]=0
for(w=0;w<n;w++)I[t[r+w]]++
for(S=b,E=15;1<=E&&0===I[E];E--);if(E<S&&(S=E),0===E)return a[s++]=20971520,a[s++]=20971520,o.bits=1,0
for(C=1;C<E&&0===I[C];C++);for(S<C&&(S=C),v=B=1;v<=15;v++)if(B<<=1,(B-=I[v])<0)return-1
if(0<B&&(0===e||1!==E))return-1
for(R[1]=0,v=1;v<15;v++)R[v+1]=R[v]+I[v]
for(w=0;w<n;w++)0!==t[r+w]&&(i[R[t[r+w]]++]=w)
if(d=0===e?(k=O=i,19):1===e?(k=P,x-=257,O=N,D-=257,256):(k=L,O=M,-1),v=C,u=s,f=-1,h=(T=1<<(A=S))-1,1===e&&852<T||2===e&&592<T)return 1
for(_=w=y=0;;){for(0,p=v-_,m=i[w]<d?(g=0,i[w]):i[w]>d?(g=O[D+i[w]],k[x+i[w]]):(g=96,0),l=1<<v-_,C=c=1<<A;a[u+(y>>_)+(c-=l)]=p<<24|g<<16|m|0,0!==c;);for(l=1<<v-1;y&l;)l>>=1
if(0!==l?(y&=l-1,y+=l):y=0,w++,0==--I[v]){if(v===E)break
v=t[r+i[w]]}if(S<v&&(y&h)!==f){for(0===_&&(_=S),u+=C,B=1<<(A=v-_);A+_<E&&!((B-=I[A+_])<=0);)A++,B<<=1
if(T+=1<<A,1===e&&852<T||2===e&&592<T)return 1
a[f=y&h]=S<<24|A<<16|u-s|0}}return 0!==y&&(a[u+y]=v-_<<24|64<<16|0),o.bits=S,0}},{"../utils/common":27}],37:[function(e,t,r){"use strict"
t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(e,t,r){"use strict"
var l=e("../utils/common"),o=0,c=1
function n(e){for(var t=e.length;0<=--t;)e[t]=0}var f=0,i=29,h=256,u=h+1+i,d=30,p=19,m=2*u+1,b=15,a=16,g=7,v=256,w=16,C=17,E=18,S=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=new Array(2*(u+2))
n(T)
var y=new Array(2*d)
n(y)
var k=new Array(512)
n(k)
var x=new Array(256)
n(x)
var I=new Array(i)
n(I)
var R=new Array(d)
n(R)
var O,D,F,P=function(e,t,r,n,a){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=a,this.has_stree=e&&e.length},s=function(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}
function N(e){return e<256?k[e]:k[256+(e>>>7)]}function L(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function M(e,t,r){e.bi_valid>a-r?(e.bi_buf|=t<<e.bi_valid&65535,L(e,e.bi_buf),e.bi_buf=t>>a-e.bi_valid,e.bi_valid+=r-a):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function U(e,t,r){M(e,r[2*t],r[2*t+1])}function H(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function W(e,t,r){var n,a,s=new Array(b+1),i=0
for(n=1;n<=b;n++)s[n]=i=i+r[n-1]<<1
for(a=0;a<=t;a++){var o=e[2*a+1]
0!==o&&(e[2*a]=H(s[o]++,o))}}function V(e){var t
for(t=0;t<u;t++)e.dyn_ltree[2*t]=0
for(t=0;t<d;t++)e.dyn_dtree[2*t]=0
for(t=0;t<p;t++)e.bl_tree[2*t]=0
e.dyn_ltree[2*v]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function z(e){8<e.bi_valid?L(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function X(e,t,r,n){var a=2*t,s=2*r
return e[a]<e[s]||e[a]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],a=r<<1;a<=e.heap_len&&(a<e.heap_len&&X(t,e.heap[a+1],e.heap[a],e.depth)&&a++,!X(t,n,e.heap[a],e.depth));)e.heap[r]=e.heap[a],r=a,a<<=1
e.heap[r]=n}function j(e,t,r){var n,a,s,i,o=0
if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],a=e.pending_buf[e.l_buf+o],o++,0===n?U(e,a,t):(U(e,(s=x[a])+h+1,t),0!==(i=S[s])&&M(e,a-=I[s],i),U(e,s=N(--n),r),0!==(i=A[s])&&M(e,n-=R[s],i)),o<e.last_lit;);U(e,v,t)}function Y(e,t){var r,n,a,s=t.dyn_tree,i=t.stat_desc.static_tree,o=t.stat_desc.has_stree,l=t.stat_desc.elems,c=-1
for(e.heap_len=0,e.heap_max=m,r=0;r<l;r++)0!==s[2*r]?(e.heap[++e.heap_len]=c=r,e.depth[r]=0):s[2*r+1]=0
for(;e.heap_len<2;)s[2*(a=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[a]=0,e.opt_len--,o&&(e.static_len-=i[2*a+1])
for(t.max_code=c,r=e.heap_len>>1;1<=r;r--)G(e,s,r)
for(a=l;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*a]=s[2*r]+s[2*n],e.depth[a]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=a,e.heap[1]=a++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,a,s,i,o,l=t.dyn_tree,c=t.max_code,f=t.stat_desc.static_tree,h=t.stat_desc.has_stree,u=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,g=0
for(s=0;s<=b;s++)e.bl_count[s]=0
for(l[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<m;r++)p<(s=l[2*l[2*(n=e.heap[r])+1]+1]+1)&&(s=p,g++),l[2*n+1]=s,c<n||(e.bl_count[s]++,i=0,d<=n&&(i=u[n-d]),o=l[2*n],e.opt_len+=o*(s+i),h&&(e.static_len+=o*(f[2*n+1]+i)))
if(0!==g){do{for(s=p-1;0===e.bl_count[s];)s--
e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,g-=2}while(0<g)
for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)c<(a=e.heap[--r])||(l[2*a+1]!==s&&(e.opt_len+=(s-l[2*a+1])*l[2*a],l[2*a+1]=s),n--)}}(e,t),W(s,c,e.bl_count)}function K(e,t,r){var n,a,s=-1,i=t[1],o=0,l=7,c=4
for(0===i&&(l=138,c=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)a=i,i=t[2*(n+1)+1],++o<l&&a===i||(o<c?e.bl_tree[2*a]+=o:0!==a?(a!==s&&e.bl_tree[2*a]++,e.bl_tree[2*w]++):o<=10?e.bl_tree[2*C]++:e.bl_tree[2*E]++,s=a,c=(o=0)===i?(l=138,3):a===i?(l=6,3):(l=7,4))}function $(e,t,r){var n,a,s=-1,i=t[1],o=0,l=7,c=4
for(0===i&&(l=138,c=3),n=0;n<=r;n++)if(a=i,i=t[2*(n+1)+1],!(++o<l&&a===i)){if(o<c)for(;U(e,a,e.bl_tree),0!=--o;);else 0!==a?(a!==s&&(U(e,a,e.bl_tree),o--),U(e,w,e.bl_tree),M(e,o-3,2)):o<=10?(U(e,C,e.bl_tree),M(e,o-3,3)):(U(e,E,e.bl_tree),M(e,o-11,7))
s=a,c=(o=0)===i?(l=138,3):a===i?(l=6,3):(l=7,4)}}var Z=!1
function Q(e,t,r,n){var a,s,i,o
M(e,(f<<1)+(n?1:0),3),s=t,i=r,o=!0,z(a=e),o&&(L(a,i),L(a,~i)),l.arraySet(a.pending_buf,a.window,s,i,a.pending),a.pending+=i}r._tr_init=function(e){Z||(function(){var e,t,r,n,a,s=new Array(b+1)
for(n=r=0;n<i-1;n++)for(I[n]=r,e=0;e<1<<S[n];e++)x[r++]=n
for(x[r-1]=n,n=a=0;n<16;n++)for(R[n]=a,e=0;e<1<<A[n];e++)k[a++]=n
for(a>>=7;n<d;n++)for(R[n]=a<<7,e=0;e<1<<A[n]-7;e++)k[256+a++]=n
for(t=0;t<=b;t++)s[t]=0
for(e=0;e<=143;)T[2*e+1]=8,e++,s[8]++
for(;e<=255;)T[2*e+1]=9,e++,s[9]++
for(;e<=279;)T[2*e+1]=7,e++,s[7]++
for(;e<=287;)T[2*e+1]=8,e++,s[8]++
for(W(T,u+1,s),e=0;e<d;e++)y[2*e+1]=5,y[2*e]=H(e,5)
O=new P(T,S,h+1,u,b),D=new P(y,A,0,d,b),F=new P(new Array(0),_,0,p,g)}(),Z=!0),e.l_desc=new s(e.dyn_ltree,O),e.d_desc=new s(e.dyn_dtree,D),e.bl_desc=new s(e.bl_tree,F),e.bi_buf=0,e.bi_valid=0,V(e)},r._tr_stored_block=Q,r._tr_flush_block=function(e,t,r,n){var a,s,i=0
0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447
for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o
if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return c
for(t=32;t<h;t++)if(0!==e.dyn_ltree[2*t])return c
return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),i=function(e){var t
for(K(e,e.dyn_ltree,e.l_desc.max_code),K(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=p-1;3<=t&&0===e.bl_tree[2*B[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),a=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=a&&(a=s)):a=s=r+5,r+4<=a&&-1!==t?Q(e,t,r,n):4===e.strategy||s===a?(M(e,2+(n?1:0),3),j(e,T,y)):(M(e,4+(n?1:0),3),function(e,t,r,n){var a
for(M(e,t-257,5),M(e,r-1,5),M(e,n-4,4),a=0;a<n;a++)M(e,e.bl_tree[2*B[a]+1],3)
$(e,e.dyn_ltree,t-1),$(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,i+1),j(e,e.dyn_ltree,e.dyn_dtree)),V(e),n&&z(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(x[r]+h+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){var t
M(e,2,3),U(e,v,T),16===(t=e).bi_valid?(L(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}},{"../utils/common":27}],39:[function(e,t,r){"use strict"
t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}]},{},[9])(9)})}).call(this,e(4).Buffer,e(2))},function(e,t){},function(e,t){},,,,,,,,,,,function(e,t,r){e.exports=r(5)}])
