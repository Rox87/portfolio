(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.dk(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.aQ(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.b6(b)
return new t(c,this)}:function(){if(t===null)t=A.b6(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.b6(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
bb(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b8(a){var t,s,r,q,p,o="_$dart_js",n=a[v.dispatchPropertyName]
if(n==null)if($.b9==null){A.db()
n=a[v.dispatchPropertyName]}if(n!=null){t=n.p
if(!1===t)return n.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return n.i
if(n.e===s)throw A.m(A.bm("Return interceptor for "+A.S(t(a,n))))}r=a.constructor
if(r==null)q=null
else{p=$.aK
if(p==null)p=$.aK=A.aT(o)
q=r[p]}if(q!=null)return q
q=A.dg(a)
if(q!=null)return q
if(typeof a=="function")return B.n
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.aK
if(p==null)p=$.aK=A.aT(o)
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
a2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ab.prototype
return J.ac.prototype}if(typeof a=="string")return J.J.prototype
if(a==null)return J.I.prototype
if(typeof a=="boolean")return J.aa.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
if(typeof a=="symbol")return J.M.prototype
if(typeof a=="bigint")return J.K.prototype
return a}if(a instanceof A.j)return a
return J.b8(a)},
d6(a){if(typeof a=="string")return J.J.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
if(typeof a=="symbol")return J.M.prototype
if(typeof a=="bigint")return J.K.prototype
return a}if(a instanceof A.j)return a
return J.b8(a)},
d7(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.u.prototype
if(typeof a=="symbol")return J.M.prototype
if(typeof a=="bigint")return J.K.prototype
return a}if(a instanceof A.j)return a
return J.b8(a)},
bX(a){return J.d7(a).gu(a)},
bc(a){return J.d6(a).gj(a)},
bY(a){return J.a2(a).gi(a)},
a4(a){return J.a2(a).h(a)},
a8:function a8(){},
aa:function aa(){},
I:function I(){},
L:function L(){},
v:function v(){},
ao:function ao(){},
U:function U(){},
u:function u(){},
K:function K(){},
M:function M(){},
n:function n(a){this.$ti=a},
a9:function a9(){},
az:function az(a){this.$ti=a},
a5:function a5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ad:function ad(){},
ab:function ab(){},
ac:function ac(){},
J:function J(){}},A={aZ:function aZ(){},
df(a){var t,s
for(t=$.a1.length,s=0;s<t;++s)if(a===$.a1[s])return!0
return!1},
aA:function aA(a){this.a=a},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
l:function l(){},
bT(a){var t=A.bS(a)
if(t!=null)return t
return"minified:"+a},
dx(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
S(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a4(a)
return t},
ap(a){var t,s,r,q
if(a instanceof A.j)return A.p(A.a3(a),null)
t=J.a2(a)
if(t===B.m||t===B.o||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.p(A.a3(a),null)},
ca(a){var t,s,r
if(typeof a=="number"||A.b5(a))return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.x)return a.h(0)
t=$.bW()
for(s=0;s<1;++s){r=t[s].A(a)
if(r!=null)return r}return"Instance of '"+A.ap(a)+"'"},
ba(a,b){if(a==null)J.bc(a)
throw A.m(A.d5(a,b))},
d5(a,b){var t,s="index"
if(!A.bH(b))return new A.H(!0,b,s,null)
t=J.bc(a)
if(b<0||b>=t)return new A.ay(t,!0,b,s,"Index out of range")
return new A.aB(!0,b,s,"Value not in range")},
m(a){return A.k(a,new Error())},
k(a,b){var t
if(a==null)a=new A.aG()
b.dartException=a
t=A.dm
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
dm(){return J.a4(this.dartException)},
bR(a,b){throw A.k(a,b==null?new Error():b)},
dl(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.bR(A.cG(a,b,c),t)},
cG(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aI("'"+t+"': Cannot "+p+" "+m+l+o)},
dj(a){throw A.m(A.bi(a))},
c4(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aD().constructor.prototype):Object.create(new A.a7(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bh(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.c0(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bh(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
c0(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.m("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.bZ)}throw A.m("Error in functionType of tearoff")},
c1(a,b,c,d){var t=A.bg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bh(a,b,c,d){if(c)return A.c3(a,b,d)
return A.c1(b.length,d,a,b)},
c2(a,b,c,d){var t=A.bg,s=A.c_
switch(b?-1:a){case 0:throw A.m(new A.aC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
c3(a,b,c){var t,s
if($.be==null)$.be=A.bd("interceptor")
if($.bf==null)$.bf=A.bd("receiver")
t=b.length
s=A.c2(t,c,a,b)
return s},
b6(a){return A.c4(a)},
bZ(a,b){return A.aN(v.typeUniverse,A.a3(a.a),b)},
bg(a){return a.a},
c_(a){return a.b},
bd(a){var t,s,r,q=new A.a7("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.m(new A.H(!1,null,null,"Field name "+a+" not found."))},
aT(a){return v.getIsolateTag(a)},
dg(a){var t,s,r,q,p,o=A.b3($.bN.$1(a)),n=$.aS[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aX[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.bC($.bL.$2(a,o))
if(r!=null){n=$.aS[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aX[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.aY(t)
$.aS[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aX[o]=t
return t}if(q==="-"){p=A.aY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bP(a,t)
if(q==="*")throw A.m(A.bm(o))
if(v.leafTags[o]===true){p=A.aY(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bP(a,t)},
bP(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bb(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
aY(a){return J.bb(a,!1,null,!!a.$io)},
di(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.aY(t)
else return J.bb(t,c,null,null)},
db(){if(!0===$.b9)return
$.b9=!0
A.dc()},
dc(){var t,s,r,q,p,o,n,m
$.aS=Object.create(null)
$.aX=Object.create(null)
A.da()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bQ.$1(p)
if(o!=null){n=A.di(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
da(){var t,s,r,q,p,o,n=B.f()
n=A.F(B.h,A.F(B.i,A.F(B.c,A.F(B.c,A.F(B.j,A.F(B.k,A.F(B.l(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bN=new A.aU(q)
$.bL=new A.aV(p)
$.bQ=new A.aW(o)},
F(a,b){return a(b)||b},
d4(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
T:function T(){},
x:function x(){},
au:function au(){},
aF:function aF(){},
aD:function aD(){},
a7:function a7(a,b){this.a=a
this.b=b},
aC:function aC(a){this.a=a},
aU:function aU(a){this.a=a},
aV:function aV(a){this.a=a},
aW:function aW(a){this.a=a},
C:function C(){},
P:function P(){},
af:function af(){},
D:function D(){},
N:function N(){},
O:function O(){},
ag:function ag(){},
ah:function ah(){},
ai:function ai(){},
aj:function aj(){},
ak:function ak(){},
al:function al(){},
am:function am(){},
Q:function Q(){},
an:function an(){},
V:function V(){},
W:function W(){},
X:function X(){},
Y:function Y(){},
b_(a,b){var t=b.c
return t==null?b.c=A.a_(a,"bj",[b.x]):t},
bl(a){var t=a.w
if(t===6||t===7)return A.bl(a.x)
return t===11||t===12},
cb(a){return a.as},
b7(a){return A.aM(v.typeUniverse,a,!1)},
z(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.z(a0,t,a2,a3)
if(s===t)return a1
return A.bt(a0,s,!0)
case 7:t=a1.x
s=A.z(a0,t,a2,a3)
if(s===t)return a1
return A.bs(a0,s,!0)
case 8:r=a1.y
q=A.E(a0,r,a2,a3)
if(q===r)return a1
return A.a_(a0,a1.x,q)
case 9:p=a1.x
o=A.z(a0,p,a2,a3)
n=a1.y
m=A.E(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.b0(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.E(a0,k,a2,a3)
if(j===k)return a1
return A.bu(a0,l,j)
case 11:i=a1.x
h=A.z(a0,i,a2,a3)
g=a1.y
f=A.d1(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.br(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.E(a0,e,a2,a3)
p=a1.x
o=A.z(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.b1(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.m(A.a6("Attempted to substitute unexpected RTI kind "+a))}},
E(a,b,c,d){var t,s,r,q,p=b.length,o=A.aO(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.z(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
d2(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aO(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.z(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
d1(a,b,c,d){var t,s=b.a,r=A.E(a,s,c,d),q=b.b,p=A.E(a,q,c,d),o=b.c,n=A.d2(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ar()
t.a=r
t.b=p
t.c=n
return t},
aQ(a,b){a[v.arrayRti]=b
return a},
bM(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.d9(t)
return a.$S()}return null},
dd(a,b){var t
if(A.bl(b))if(a instanceof A.x){t=A.bM(a)
if(t!=null)return t}return A.a3(a)},
a3(a){if(a instanceof A.j)return A.bF(a)
if(Array.isArray(a))return A.aP(a)
return A.b4(J.a2(a))},
aP(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bF(a){var t=a.$ti
return t!=null?t:A.b4(a)},
b4(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cN(a,t)},
cN(a,b){var t=a instanceof A.x?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cx(v.typeUniverse,t.name)
b.$ccache=s
return s},
d9(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.aM(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
d8(a){return A.A(A.bF(a))},
d0(a){var t=a instanceof A.x?A.bM(a):null
if(t!=null)return t
if(u.R.b(a))return J.bY(a).a
if(Array.isArray(a))return A.aP(a)
return A.a3(a)},
A(a){var t=a.r
return t==null?a.r=new A.aL(a):t},
t(a){return A.A(A.aM(v.typeUniverse,a,!1))},
cM(a){var t=this
t.b=A.d_(t)
return t.b(a)},
d_(a){var t,s,r,q,p
if(a===u.K)return A.cT
if(A.B(a))return A.cX
t=a.w
if(t===6)return A.cK
if(t===1)return A.bJ
if(t===7)return A.cO
s=A.cZ(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.B)){a.f="$i"+r
if(r==="c")return A.cR
if(a===u.m)return A.cQ
return A.cW}}else if(t===10){q=A.d4(a.x,a.y)
p=q==null?A.bJ:q
return p==null?A.bB(p):p}return A.cI},
cZ(a){if(a.w===8){if(a===u.S)return A.bH
if(a===u.i||a===u.H)return A.cS
if(a===u.N)return A.cV
if(a===u.y)return A.b5}return null},
cL(a){var t=this,s=A.cH
if(A.B(t))s=A.cF
else if(t===u.K)s=A.bB
else if(A.G(t)){s=A.cJ
if(t===u.t)s=A.cD
else if(t===u.v)s=A.bC
else if(t===u.u)s=A.cA
else if(t===u.n)s=A.bA
else if(t===u.I)s=A.cC
else if(t===u.z)s=A.bz}else if(t===u.S)s=A.b2
else if(t===u.N)s=A.b3
else if(t===u.y)s=A.cz
else if(t===u.H)s=A.cE
else if(t===u.i)s=A.cB
else if(t===u.m)s=A.by
t.a=s
return t.a(a)},
cI(a){var t=this
if(a==null)return A.G(t)
return A.de(v.typeUniverse,A.dd(a,t),t)},
cK(a){if(a==null)return!0
return this.x.b(a)},
cW(a){var t,s=this
if(a==null)return A.G(s)
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.a2(a)[t]},
cR(a){var t,s=this
if(a==null)return A.G(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.a2(a)[t]},
cQ(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
bI(a){if(typeof a=="object"){if(a instanceof A.j)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
cH(a){var t=this
if(a==null){if(A.G(t))return a}else if(t.b(a))return a
throw A.k(A.bD(a,t),new Error())},
cJ(a){var t=this
if(a==null||t.b(a))return a
throw A.k(A.bD(a,t),new Error())},
bD(a,b){return new A.as("TypeError: "+A.bn(a,A.p(b,null)))},
bn(a,b){return A.ax(a)+": type '"+A.p(A.d0(a),null)+"' is not a subtype of type '"+b+"'"},
q(a,b){return new A.as("TypeError: "+A.bn(a,b))},
cO(a){var t=this
return t.x.b(a)||A.b_(v.typeUniverse,t).b(a)},
cT(a){return a!=null},
bB(a){if(a!=null)return a
throw A.k(A.q(a,"Object"),new Error())},
cX(a){return!0},
cF(a){return a},
bJ(a){return!1},
b5(a){return!0===a||!1===a},
cz(a){if(!0===a)return!0
if(!1===a)return!1
throw A.k(A.q(a,"bool"),new Error())},
cA(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.k(A.q(a,"bool?"),new Error())},
cB(a){if(typeof a=="number")return a
throw A.k(A.q(a,"double"),new Error())},
cC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.k(A.q(a,"double?"),new Error())},
bH(a){return typeof a=="number"&&Math.floor(a)===a},
b2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.k(A.q(a,"int"),new Error())},
cD(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.k(A.q(a,"int?"),new Error())},
cS(a){return typeof a=="number"},
cE(a){if(typeof a=="number")return a
throw A.k(A.q(a,"num"),new Error())},
bA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.k(A.q(a,"num?"),new Error())},
cV(a){return typeof a=="string"},
b3(a){if(typeof a=="string")return a
throw A.k(A.q(a,"String"),new Error())},
bC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.k(A.q(a,"String?"),new Error())},
by(a){if(A.bI(a))return a
throw A.k(A.q(a,"JSObject"),new Error())},
bz(a){if(a==null)return a
if(A.bI(a))return a
throw A.k(A.q(a,"JSObject?"),new Error())},
bK(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.p(a[r],b)
return t},
cY(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bK(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.p(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bE(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.aQ([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.d.t(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.ba(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.p(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.p(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.p(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.p(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.p(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
p(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.p(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.p(a.x,b)+">"
if(m===8){q=A.d3(a.x)
p=a.y
return p.length>0?q+("<"+A.bK(p,b)+">"):q}if(m===10)return A.cY(a,b)
if(m===11)return A.bE(a,b,null)
if(m===12)return A.bE(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.ba(b,o)
return b[o]}return"?"},
d3(a){var t=A.bS(a)
if(t!=null)return t
return"minified:"+a},
cy(a,b){var t=a.tR[b]
while(typeof t=="string")t=a.tR[t]
return t},
cx(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.aM(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a0(a,5,"#")
r=A.aO(t)
for(q=0;q<t;++q)r[q]=s
p=A.a_(a,b,r)
o[b]=p
return p}else return n},
cv(a,b){return A.bw(a.tR,b)},
cu(a,b){return A.bw(a.eT,b)},
aM(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bv(a,null,b,!1)
s.set(b,t)
return t},
aN(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bv(a,b,c,!0)
r.set(c,s)
return s},
cw(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.b0(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
bv(a,b,c,d){return A.cn(A.ch(a,b,c,d))},
w(a,b){b.a=A.cL
b.b=A.cM
return b},
a0(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.r(null,null)
t.w=b
t.as=c
s=A.w(a,t)
a.eC.set(c,s)
return s},
bt(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cs(a,b,s,c)
a.eC.set(s,t)
return t},
cs(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.B(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.G(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.r(null,null)
r.w=6
r.x=b
r.as=c
return A.w(a,r)},
bs(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cq(a,b,s,c)
a.eC.set(s,t)
return t},
cq(a,b,c,d){var t,s
if(d){t=b.w
if(A.B(b)||b===u.K)return b
else if(t===1)return A.a_(a,"bj",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.r(null,null)
s.w=7
s.x=b
s.as=c
return A.w(a,s)},
ct(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.r(null,null)
t.w=13
t.x=b
t.as=r
s=A.w(a,t)
a.eC.set(r,s)
return s},
Z(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
cp(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
a_(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.Z(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.r(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.w(a,s)
a.eC.set(q,r)
return r},
b0(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.Z(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.r(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.w(a,p)
a.eC.set(r,o)
return o},
bu(a,b,c){var t,s,r="+"+(b+"("+A.Z(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.r(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.w(a,t)
a.eC.set(r,s)
return s},
br(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.Z(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.Z(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cp(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.r(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.w(a,q)
a.eC.set(s,p)
return p},
b1(a,b,c,d){var t,s=b.as+("<"+A.Z(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cr(a,b,c,s,d)
a.eC.set(s,t)
return t},
cr(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aO(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.z(a,b,s,0)
n=A.E(a,c,s,0)
return A.b1(a,o,n,c!==n)}}m=new A.r(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.w(a,m)},
ch(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cn(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.cj(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bp(a,s,m,l,!1)
else if(r===46)s=A.bp(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.y(a.u,a.e,l.pop()))
break
case 94:l.push(A.ct(a.u,l.pop()))
break
case 35:l.push(A.a0(a.u,5,"#"))
break
case 64:l.push(A.a0(a.u,2,"@"))
break
case 126:l.push(A.a0(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cl(a,l)
break
case 38:A.ck(a,l)
break
case 63:q=a.u
l.push(A.bt(q,A.y(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bs(q,A.y(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.ci(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bq(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.co(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.y(a.u,a.e,n)},
cj(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bp(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.cy(t,p.x)[q]
if(o==null)A.bR('No "'+q+'" in "'+A.cb(p)+'"')
d.push(A.aN(t,p,o))}else d.push(q)
return n},
cl(a,b){var t,s=a.u,r=A.bo(a,b),q=b.pop()
if(typeof q=="string")b.push(A.a_(s,q,r))
else{t=A.y(s,a.e,q)
switch(t.w){case 11:b.push(A.b1(s,t,r,a.n))
break
default:b.push(A.b0(s,t,r))
break}}},
ci(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.bo(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.y(q,a.e,p)
r=new A.ar()
r.a=t
r.b=o
r.c=n
b.push(A.br(q,s,r))
return
case-4:b.push(A.bu(q,b.pop(),t))
return
default:throw A.m(A.a6("Unexpected state under `()`: "+A.S(p)))}},
ck(a,b){var t=b.pop()
if(0===t){b.push(A.a0(a.u,1,"0&"))
return}if(1===t){b.push(A.a0(a.u,4,"1&"))
return}throw A.m(A.a6("Unexpected extended operation "+A.S(t)))},
bo(a,b){var t=b.splice(a.p)
A.bq(a.u,a.e,t)
a.p=b.pop()
return t},
y(a,b,c){if(typeof c=="string")return A.a_(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cm(a,b,c)}else return c},
bq(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.y(a,b,c[t])},
co(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.y(a,b,c[t])},
cm(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.m(A.a6("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.m(A.a6("Bad index "+c+" for "+b.h(0)))},
de(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.i(a,b,null,c,null)
s.set(c,t)}return t},
i(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.B(d))return!0
t=b.w
if(t===4)return!0
if(A.B(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.i(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.i(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.i(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.i(a,b.x,c,d,e))return!1
return A.i(a,A.b_(a,b),c,d,e)}if(t===6)return A.i(a,q,c,d,e)&&A.i(a,b.x,c,d,e)
if(r===7){if(A.i(a,b,c,d.x,e))return!0
return A.i(a,b,c,A.b_(a,d),e)}if(r===6)return A.i(a,b,c,q,e)||A.i(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.i(a,k,c,j,e)||!A.i(a,j,e,k,c))return!1}return A.bG(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.bG(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.cP(a,b,c,d,e)}if(p&&r===10)return A.cU(a,b,c,d,e)
return!1},
bG(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.i(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.i(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.i(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.i(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.i(a2,f[b+2],a6,h,a4))return!1
break}}while(c<e){if(g[c+1])return!1
c+=3}return!0},
cP(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
while(o!==n){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aN(a,b,s[p])
return A.bx(a,q,null,c,d.y,e)}return A.bx(a,b.y,null,c,d.y,e)},
bx(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.i(a,b[t],d,e[t],f))return!1
return!0},
cU(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e))return!1
return!0},
G(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.B(a))if(t!==6)s=t===7&&A.G(a.x)
return s},
B(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
bw(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aO(a){return a>0?new Array(a):v.typeUniverse.sEA},
r:function r(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
ar:function ar(){this.c=this.b=this.a=null},
aL:function aL(a){this.a=a},
aJ:function aJ(){},
as:function as(a){this.a=a},
e:function e(){},
cc(a,b,c){var t=J.bX(b)
if(!t.l())return a
if(c.length===0){do a+=A.S(t.gk())
while(t.l())}else{a+=A.S(t.gk())
while(t.l())a=a+c+A.S(t.gk())}return a},
ax(a){if(typeof a=="number"||A.b5(a)||a==null)return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ca(a)},
a6(a){return new A.at(a)},
bm(a){return new A.aH(a)},
bi(a){return new A.av(a)},
bk(a,b,c){var t,s
if(A.df(a))return b+"..."+c
t=new A.aE(b)
B.d.t($.a1,a)
try{s=t
s.a=A.cc(s.a,a,", ")}finally{if(0>=$.a1.length)return A.ba($.a1,-1)
$.a1.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
aw:function aw(){},
at:function at(a){this.a=a},
aG:function aG(){},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aI:function aI(a){this.a=a},
aH:function aH(a){this.a=a},
av:function av(a){this.a=a},
R:function R(){},
j:function j(){},
aE:function aE(a){this.a=a},
bS(a){return v.mangledGlobalNames[a]},
dk(a){throw A.k(new A.aA("Field '"+a+"' has been assigned during initialization."),new Error())},
dh(){var t=A.bz(A.by(v.G.document).querySelector("#app"))
if(t!=null)t.innerHTML='<!-- Top Navigation Bar -->\n<nav class="navbar" id="mainNavbar">\n  <div class="nav-container">\n    <a href="#" class="brand-logo">\n      <span class="brand-bracket">&lt;</span>RH<span class="brand-dot">.</span><span class="brand-accent">data</span><span class="brand-bracket">/&gt;</span>\n    </a>\n\n    <div class="nav-links" id="navLinks">\n      <a href="#sobre" class="nav-item">Sobre</a>\n      <a href="#experiencia" class="nav-item">Experi\xeancia</a>\n      <a href="#projetos" class="nav-item">Projetos</a>\n      <a href="#formacao" class="nav-item">Forma\xe7\xe3o</a>\n      <a href="#competencias" class="nav-item">Compet\xeancias</a>\n      <a href="#contato" class="nav-item">Contato</a>\n    </div>\n\n    <div class="nav-actions">\n      <button id="toggleMatrixBtn" class="nav-control-btn" type="button" title="Alternar intensidade do efeito Matrix">\n        <i class="fas fa-terminal"></i>\n        <span id="matrixStatusText">Matrix: OFF</span>\n      </button>\n\n      <a href="https://wa.me/5511999224443?text=Ol%C3%A1%20Rodrigo,%20vi%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary nav-cta">\n        <i class="fab fa-whatsapp"></i>\n        <span>WhatsApp</span>\n      </a>\n\n      <button id="mobileMenuBtn" class="mobile-toggle-btn" type="button" aria-label="Abrir menu de navega\xe7\xe3o">\n        <i class="fas fa-bars"></i>\n      </button>\n    </div>\n  </div>\n</nav>\n\n<main class="main-wrapper">\n  <!-- Hero Section -->\n  <header class="hero-section" id="hero">\n    <div class="container">\n      <div class="hero-badge">\n        <span class="pulse-indicator"></span>\n        <span>Dispon\xedvel para novos desafios \u2022 Engenharia & Ci\xeancia de Dados</span>\n      </div>\n\n      <h1 class="hero-title" id="easterEggName" title="Clique para interagir!">\n        Rodrigo Heloani <span class="text-gradient">de Brito</span>\n      </h1>\n\n      <div class="hero-terminal-pill">\n        <span class="terminal-symbol">&gt;</span>\n        <span class="terminal-text">Engenheiro de Dados S\xeanior | Analista MIS | Especialista em IA</span>\n      </div>\n\n      <p class="hero-summary">\n        Mais de <strong>7 anos de experi\xeancia</strong> projetando arquiteturas de dados resilientes, pipelines de larga escala em <strong>Databricks</strong> e <strong>Azure Cloud</strong>, modelagem financeira/MIS focada em <strong>alavancagem de EBITDA</strong> e implementa\xe7\xe3o pr\xe1tica de <strong>IA Generativa</strong>.\n      </p>\n\n      <div class="hero-cta-group">\n        <a href="https://wa.me/5511999224443?text=Ol%C3%A1%20Rodrigo,%20vi%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="btn btn-primary">\n          <i class="fab fa-whatsapp"></i>\n          <span>Fale Comigo</span>\n        </a>\n\n        <button type="button" class="btn btn-secondary copy-btn" data-copy="rodrigohbx@gmail.com">\n          <i class="fas fa-copy"></i>\n          <span>Copiar E-mail</span>\n        </button>\n\n        <a href="https://www.linkedin.com/in/rodrigoheloani/" target="_blank" rel="noopener noreferrer" class="btn btn-icon" title="LinkedIn">\n          <i class="fab fa-linkedin-in"></i>\n        </a>\n\n        <a href="https://github.com/Rox87" target="_blank" rel="noopener noreferrer" class="btn btn-icon" title="GitHub">\n          <i class="fab fa-github"></i>\n        </a>\n      </div>\n\n      <!-- Quick Metrics Counter Strip -->\n      <div class="metrics-grid">\n        <div class="metric-card">\n          <div class="metric-value">7+</div>\n          <div class="metric-label">Anos de Experi\xeancia em Dados</div>\n          <div class="metric-sub">Databricks, Azure & Big Data</div>\n        </div>\n\n        <div class="metric-card">\n          <div class="metric-value">Santander & Atento</div>\n          <div class="metric-label">Grandes Corpora\xe7\xf5es</div>\n          <div class="metric-sub">Setor Financeiro & Telecom</div>\n        </div>\n\n        <div class="metric-card">\n          <div class="metric-value">Petabytes</div>\n          <div class="metric-label">Volume Processado</div>\n          <div class="metric-sub">Pipelines Distribu\xeddos & PySpark</div>\n        </div>\n\n        <div class="metric-card">\n          <div class="metric-value">GenAI & Cloud</div>\n          <div class="metric-label">Inova\xe7\xe3o Aplicada</div>\n          <div class="metric-sub">LLMs, AKS & Kubernetes</div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <!-- Section: Sobre / Vis\xe3o Executiva -->\n  <section class="section" id="sobre">\n    <div class="container">\n      <div class="section-header">\n        <span class="section-kicker">Perfil Profissional</span>\n        <h2 class="section-title">Engenharia de Dados com Foco em Neg\xf3cio</h2>\n      </div>\n\n      <div class="pillars-grid">\n        <div class="glass-card pillar-card">\n          <div class="pillar-icon">\n            <i class="fas fa-database"></i>\n          </div>\n          <h3 class="pillar-title">Big Data & Lakehouse</h3>\n          <p class="pillar-desc">\n            Arquitetura de dados robusta utilizando <strong>Databricks</strong>, <strong>PySpark</strong> e <strong>Delta Lake</strong> (Medallion Architecture). Desenvolvimento de bibliotecas modulares e pipelines ETL/ELT otimizados para milh\xf5es de registros.\n          </p>\n        </div>\n\n        <div class="glass-card pillar-card">\n          <div class="pillar-icon">\n            <i class="fas fa-chart-line"></i>\n          </div>\n          <h3 class="pillar-title">FinOps & Mitiga\xe7\xe3o de Perdas</h3>\n          <p class="pillar-desc">\n            Atua\xe7\xe3o orientada a resultados financeiros, mitigando perdas operacionais e elevando o <strong>EBITDA</strong>. Experi\xeancia na gest\xe3o de indicadores MIS banc\xe1rios, concilia\xe7\xe3o e cria\xe7\xe3o de dashboards executivos em <strong>Power BI</strong>.\n          </p>\n        </div>\n\n        <div class="glass-card pillar-card">\n          <div class="pillar-icon">\n            <i class="fas fa-robot"></i>\n          </div>\n          <h3 class="pillar-title">Cloud & IA Generativa</h3>\n          <p class="pillar-desc">\n            Especializa\xe7\xe3o em ecossistema <strong>Microsoft Azure</strong> (AKS, Kubernetes, Docker, Serverless). Aplica\xe7\xe3o pr\xe1tica de <strong>IA Generativa</strong>, LLMs, engenharia de prompt e busca sem\xe2ntica para automa\xe7\xe3o inteligente de processos.\n          </p>\n        </div>\n      </div>\n\n      <!-- Quick Info Bar -->\n      <div class="info-bar-card glass-card">\n        <div class="info-item">\n          <i class="fas fa-map-marker-alt"></i>\n          <div>\n            <span class="info-title">Localiza\xe7\xe3o</span>\n            <span class="info-value">Santo Andr\xe9 / SP, Brasil</span>\n          </div>\n        </div>\n\n        <div class="info-item">\n          <i class="fas fa-envelope"></i>\n          <div>\n            <span class="info-title">E-mail</span>\n            <span class="info-value">rodrigohbx@gmail.com</span>\n          </div>\n        </div>\n\n        <div class="info-item">\n          <i class="fas fa-phone-alt"></i>\n          <div>\n            <span class="info-title">Telefone / WhatsApp</span>\n            <span class="info-value">+55 11 999224-4443</span>\n          </div>\n        </div>\n\n        <div class="info-item">\n          <i class="fas fa-certificate"></i>\n          <div>\n            <span class="info-title">Certifica\xe7\xe3o</span>\n            <span class="info-value">Azure Data Science (DP-100)</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Section: Experi\xeancia Profissional -->\n  <section class="section" id="experiencia">\n    <div class="container">\n      <div class="section-header">\n        <span class="section-kicker">Hist\xf3rico de Carreira</span>\n        <h2 class="section-title">Experi\xeancia Profissional</h2>\n      </div>\n\n      <div class="timeline">\n        <!-- Target / Santander -->\n        <div class="glass-card timeline-card">\n          <div class="job-header">\n            <div class="job-meta">\n              <span class="company-badge"><i class="fas fa-landmark"></i> Setor Financeiro / Banc\xe1rio</span>\n              <h3 class="job-title">Analista de Dados MIS</h3>\n              <div class="job-company">Target (Santander) \u2022 S\xe3o Paulo, SP</div>\n            </div>\n            <div class="job-date-pill">05/2025 - Atual \u2022 Presente</div>\n          </div>\n\n          <p class="job-summary">\n            Atua\xe7\xe3o estrat\xe9gica na gera\xe7\xe3o de estudos anal\xedticos, engenharia de dados em Databricks e desenvolvimento de sistemas de intelig\xeancia para o banco.\n          </p>\n\n          <ul class="job-bullets">\n            <li>Gera\xe7\xe3o de estudos anal\xedticos e obten\xe7\xe3o de insights para identifica\xe7\xe3o e predi\xe7\xe3o do perfil do p\xfablico reclamante do banco.</li>\n            <li>Especializa\xe7\xe3o e arquitetura na plataforma <strong>Databricks</strong> para processamento distribu\xeddo de alt\xedssimo volume.</li>\n            <li>Cria\xe7\xe3o de bibliotecas internas em <strong>Python</strong> para automa\xe7\xe3o de processos anal\xedticos complexos.</li>\n            <li>Implementa\xe7\xe3o pioneira de sistemas integrando modelos de <strong>IA Generativa</strong> de ponta aos fluxos operacionais.</li>\n            <li>Desenvolvimento e sustenta\xe7\xe3o de relat\xf3rios gerenciais e dashboards executivos din\xe2micos em <strong>Power BI</strong>.</li>\n          </ul>\n\n          <div class="tech-tags-list">\n            <span class="tech-tag"><i class="fas fa-fire"></i> Databricks</span>\n            <span class="tech-tag"><i class="fab fa-python"></i> Python / PySpark</span>\n            <span class="tech-tag"><i class="fas fa-layer-group"></i> Delta Lake</span>\n            <span class="tech-tag"><i class="fas fa-brain"></i> IA Generativa</span>\n            <span class="tech-tag"><i class="fas fa-chart-pie"></i> Power BI</span>\n            <span class="tech-tag"><i class="fas fa-database"></i> SQL Avan\xe7ado</span>\n            <span class="tech-tag"><i class="fas fa-shield-alt"></i> Governan\xe7a Banc\xe1ria</span>\n          </div>\n        </div>\n\n        <!-- Atento -->\n        <div class="glass-card timeline-card">\n          <div class="job-header">\n            <div class="job-meta">\n              <span class="company-badge"><i class="fas fa-building"></i> Telecomunica\xe7\xf5es & Servi\xe7os</span>\n              <h3 class="job-title">Engenheiro de Dados</h3>\n              <div class="job-company">Atento \u2022 S\xe3o Paulo, SP</div>\n            </div>\n            <div class="job-date-pill">03/2018 - 02/2025 \u2022 7 anos</div>\n          </div>\n\n          <p class="job-summary">\n            Lideran\xe7a e execu\xe7\xe3o de projetos de engenharia de dados de ponta a ponta focados em alavancagem de EBITDA, mitiga\xe7\xe3o de perdas e moderniza\xe7\xe3o cloud-native.\n          </p>\n\n          <ul class="job-bullets">\n            <li>Engenharia de dados estrat\xe9gica com foco direto em melhorar o <strong>EBITDA</strong> mitigando perdas financeiras e impulsionando receitas dos clientes.</li>\n            <li>Especializa\xe7\xe3o em <strong>Microsoft Azure</strong>, com arquitetura profunda em solu\xe7\xf5es <strong>Kubernetes (AKS)</strong> e microsservi\xe7os <strong>Serverless</strong>.</li>\n            <li>Cria\xe7\xe3o, esteiras CI/CD e orquestra\xe7\xe3o de infraestrutura resiliente em nuvem com cont\xeaineres <strong>Docker</strong>.</li>\n            <li>Desenvolvimento de pipelines, automa\xe7\xf5es e servi\xe7os anal\xedticos de alta performance em <strong>Python</strong> e <strong>C#</strong>.</li>\n            <li>Implementa\xe7\xe3o de solu\xe7\xf5es baseadas em intelig\xeancia artificial generativa para automa\xe7\xe3o de triagens e sumariza\xe7\xe3o.</li>\n            <li>Desenvolvimento de pain\xe9is executivos de alto impacto em <strong>Power BI</strong> para tomadores de decis\xe3o corporativos.</li>\n          </ul>\n\n          <div class="tech-tags-list">\n            <span class="tech-tag"><i class="fab fa-microsoft"></i> Microsoft Azure</span>\n            <span class="tech-tag"><i class="fas fa-dharmachakra"></i> Kubernetes (AKS)</span>\n            <span class="tech-tag"><i class="fab fa-docker"></i> Docker</span>\n            <span class="tech-tag"><i class="fab fa-python"></i> Python</span>\n            <span class="tech-tag"><i class="fas fa-code"></i> C# / .NET</span>\n            <span class="tech-tag"><i class="fas fa-chart-line"></i> Otimiza\xe7\xe3o EBITDA</span>\n            <span class="tech-tag"><i class="fas fa-cloud"></i> Serverless</span>\n            <span class="tech-tag"><i class="fas fa-chart-pie"></i> Power BI</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Section: Projetos & Arquiteturas T\xe9cnicas -->\n  <section class="section" id="projetos">\n    <div class="container">\n      <div class="section-header">\n        <span class="section-kicker">Engenharia Aplicada</span>\n        <h2 class="section-title">Solu\xe7\xf5es & Arquiteturas em Destaque</h2>\n      </div>\n\n      <div class="projects-grid">\n        <!-- Project 1 -->\n        <div class="glass-card project-card">\n          <div class="project-header">\n            <div class="project-icon"><i class="fas fa-cubes"></i></div>\n            <span class="project-category">Big Data & Lakehouse</span>\n          </div>\n          <h3 class="project-title">Modern Lakehouse & Analytics Banc\xe1rio</h3>\n          <p class="project-desc">\n            Arquitetura Medallion (Bronze/Silver/Gold) sobre Databricks e Delta Lake para ingest\xe3o e enriquecimento de dados banc\xe1rios de alto volume. Otimiza\xe7\xe3o de queries e bibliotecas customizadas em PySpark que reduziram o tempo de processamento anal\xedtico para minutos.\n          </p>\n          <div class="project-impact">\n            <i class="fas fa-check-circle"></i>\n            <span>Redu\xe7\xe3o significativa no tempo de gera\xe7\xe3o de estudos de p\xfablico e perfilamento de reclama\xe7\xf5es.</span>\n          </div>\n          <div class="project-tags">\n            <span>Databricks</span>\n            <span>PySpark</span>\n            <span>Delta Lake</span>\n            <span>Python</span>\n            <span>Power BI</span>\n          </div>\n        </div>\n\n        <!-- Project 2 -->\n        <div class="glass-card project-card">\n          <div class="project-header">\n            <div class="project-icon"><i class="fas fa-brain"></i></div>\n            <span class="project-category">IA Generativa & NLP</span>\n          </div>\n          <h3 class="project-title">GenAI Intelligence Engine & Sumariza\xe7\xe3o</h3>\n          <p class="project-desc">\n            Implementa\xe7\xe3o de sistema corporativo baseado em modelos LLM de \xfaltima gera\xe7\xe3o e busca contextual para an\xe1lise sem\xe2ntica e sumariza\xe7\xe3o inteligente de ocorr\xeancias, facilitando a tomada de decis\xe3o com extra\xe7\xe3o autom\xe1tica de causa-raiz.\n          </p>\n          <div class="project-impact">\n            <i class="fas fa-check-circle"></i>\n            <span>Automa\xe7\xe3o da triagem textual com alta acur\xe1cia e s\xedntese executiva em linguagem natural.</span>\n          </div>\n          <div class="project-tags">\n            <span>GenAI</span>\n            <span>LLMs</span>\n            <span>Embeddings</span>\n            <span>Python</span>\n            <span>Prompt Engineering</span>\n          </div>\n        </div>\n\n        <!-- Project 3 -->\n        <div class="glass-card project-card">\n          <div class="project-header">\n            <div class="project-icon"><i class="fas fa-shield-alt"></i></div>\n            <span class="project-category">Cloud FinOps & Microservi\xe7os</span>\n          </div>\n          <h3 class="project-title">Motor de Mitiga\xe7\xe3o de Perdas & EBITDA</h3>\n          <p class="project-desc">\n            Ecossistema cloud-native na Azure combinando containers Docker orquestrados via Kubernetes (AKS) e microsservi\xe7os Serverless para identifica\xe7\xe3o em tempo real de gargalos operacionais e discrep\xe2ncias de faturamento.\n          </p>\n          <div class="project-impact">\n            <i class="fas fa-check-circle"></i>\n            <span>Mitiga\xe7\xe3o direta de perdas financeiras, gerando retorno comprovado sobre o EBITDA.</span>\n          </div>\n          <div class="project-tags">\n            <span>Microsoft Azure</span>\n            <span>Kubernetes AKS</span>\n            <span>Docker</span>\n            <span>C#</span>\n            <span>FinOps</span>\n          </div>\n        </div>\n\n        <!-- Project 4 -->\n        <div class="glass-card project-card">\n          <div class="project-header">\n            <div class="project-icon"><i class="fas fa-chart-pie"></i></div>\n            <span class="project-category">MIS & Business Intelligence</span>\n          </div>\n          <h3 class="project-title">Executive MIS Suite & Modelagem Preditiva</h3>\n          <p class="project-desc">\n            Pain\xe9is executivos din\xe2micos em Power BI desenhados para ger\xeancia e diretoria, com modelagem dimensional, DAX complexo e integra\xe7\xe3o com rotinas estat\xedsticas em Python para antecipa\xe7\xe3o de tend\xeancias operacionais e volumetria.\n          </p>\n          <div class="project-impact">\n            <i class="fas fa-check-circle"></i>\n            <span>Visualiza\xe7\xe3o em tempo real de KPIs cr\xedticos para tomada de decis\xe3o em n\xedvel C-Level.</span>\n          </div>\n          <div class="project-tags">\n            <span>Power BI</span>\n            <span>DAX Avan\xe7ado</span>\n            <span>Python</span>\n            <span>Gest\xe3o MIS</span>\n            <span>Finan\xe7as</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Section: Forma\xe7\xe3o & Certifica\xe7\xf5es -->\n  <section class="section" id="formacao">\n    <div class="container">\n      <div class="section-header">\n        <span class="section-kicker">Educa\xe7\xe3o Cont\xednua</span>\n        <h2 class="section-title">Forma\xe7\xe3o Acad\xeamica & Certifica\xe7\xf5es</h2>\n      </div>\n\n      <!-- Featured Microsoft Certification Banner -->\n      <div class="glass-card cert-featured-card">\n        <div class="cert-badge-graphic">\n          <i class="fab fa-microsoft"></i>\n        </div>\n        <div class="cert-info">\n          <div class="cert-tag">Certifica\xe7\xe3o Oficial Microsoft</div>\n          <h3 class="cert-name">Microsoft Certified: Azure Data Science Associate (DP-100)</h3>\n          <p class="cert-desc">\n            Valida\xe7\xe3o de expertise no planejamento e cria\xe7\xe3o de ambientes de computa\xe7\xe3o em nuvem na Azure, treinamento e valida\xe7\xe3o de modelos de Machine Learning, pipelines de dados e implanta\xe7\xe3o de modelos em produ\xe7\xe3o.\n          </p>\n          <div class="cert-status">\n            <i class="fas fa-check-circle"></i> Certifica\xe7\xe3o Oficial \u2022 Expira em 31/05/2025\n          </div>\n        </div>\n      </div>\n\n      <div class="degrees-grid">\n        <!-- MBA 1 -->\n        <div class="glass-card degree-card">\n          <div class="degree-icon"><i class="fas fa-graduation-cap"></i></div>\n          <div class="degree-type">P\xf3s-Gradua\xe7\xe3o / MBA</div>\n          <h3 class="degree-title">MBA em Tecnologia para Neg\xf3cios: Data Science e BI</h3>\n          <div class="degree-institution">Instituto Objetivo</div>\n          <div class="degree-date">01/2023 - 04/2024 \u2022 Conclu\xeddo</div>\n          <p class="degree-desc">\n            Foco em aplica\xe7\xe3o de algoritmos de machine learning, governan\xe7a de dados corporativa, storytelling com dados e estrat\xe9gias de intelig\xeancia de neg\xf3cios.\n          </p>\n        </div>\n\n        <!-- MBA 2 -->\n        <div class="glass-card degree-card">\n          <div class="degree-icon"><i class="fas fa-university"></i></div>\n          <div class="degree-type">P\xf3s-Gradua\xe7\xe3o / MBA</div>\n          <h3 class="degree-title">MBA em Gest\xe3o Banc\xe1ria e Finan\xe7as Corporativas</h3>\n          <div class="degree-institution">Instituto Objetivo</div>\n          <div class="degree-date">12/2023 - 05/2024 \u2022 Conclu\xeddo</div>\n          <p class="degree-desc">\n            Aprofundamento em finan\xe7as empresariais, an\xe1lise de risco, regula\xe7\xe3o banc\xe1ria, valuation e indicadores de performance econ\xf4mica (EBITDA, ROI, ROE).\n          </p>\n        </div>\n\n        <!-- Gradua\xe7\xe3o -->\n        <div class="glass-card degree-card">\n          <div class="degree-icon"><i class="fas fa-laptop-code"></i></div>\n          <div class="degree-type">Gradua\xe7\xe3o / Bacharelado</div>\n          <h3 class="degree-title">Sistemas de Informa\xe7\xe3o</h3>\n          <div class="degree-institution">Universidade Presbiteriana Mackenzie</div>\n          <div class="degree-date">01/2009 - 01/2014 \u2022 Conclu\xeddo</div>\n          <p class="degree-desc">\n            S\xf3lida forma\xe7\xe3o em arquitetura de computadores, estruturas de dados, algoritmos, modelagem de banco de dados relacional e engenharia de software.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Section: Compet\xeancias & Stack -->\n  <section class="section" id="competencias">\n    <div class="container">\n      <div class="section-header">\n        <span class="section-kicker">Arsenal Tecnol\xf3gico</span>\n        <h2 class="section-title">Compet\xeancias T\xe9cnicas & Metodologias</h2>\n      </div>\n\n      <div class="skills-bento-grid">\n        <!-- Card 1: Data Engineering -->\n        <div class="glass-card skill-bento-card">\n          <div class="skill-category-header">\n            <i class="fas fa-database skill-cat-icon"></i>\n            <div>\n              <h3 class="skill-cat-title">Engenharia de Dados & Big Data</h3>\n              <span class="skill-cat-sub">Pipelines escal\xe1veis e arquitetura Lakehouse</span>\n            </div>\n          </div>\n          <div class="skill-chips">\n            <span class="skill-chip"><i class="fas fa-fire"></i> Databricks</span>\n            <span class="skill-chip"><i class="fas fa-cubes"></i> Apache Spark / PySpark</span>\n            <span class="skill-chip"><i class="fas fa-layer-group"></i> Delta Lake</span>\n            <span class="skill-chip"><i class="fab fa-python"></i> Python Avan\xe7ado</span>\n            <span class="skill-chip"><i class="fas fa-database"></i> SQL / T-SQL</span>\n            <span class="skill-chip"><i class="fas fa-project-diagram"></i> Arquitetura Medallion</span>\n            <span class="skill-chip"><i class="fas fa-sync-alt"></i> Pipelines ETL / ELT</span>\n            <span class="skill-chip"><i class="fas fa-table"></i> Modelagem Dimensional</span>\n          </div>\n        </div>\n\n        <!-- Card 2: Cloud & DevOps -->\n        <div class="glass-card skill-bento-card">\n          <div class="skill-category-header">\n            <i class="fas fa-cloud skill-cat-icon"></i>\n            <div>\n              <h3 class="skill-cat-title">Cloud, Infra & DevOps</h3>\n              <span class="skill-cat-sub">Ambientes distribu\xeddos e alta resili\xeancia</span>\n            </div>\n          </div>\n          <div class="skill-chips">\n            <span class="skill-chip"><i class="fab fa-microsoft"></i> Microsoft Azure</span>\n            <span class="skill-chip"><i class="fas fa-dharmachakra"></i> Kubernetes (AKS)</span>\n            <span class="skill-chip"><i class="fab fa-docker"></i> Docker Containers</span>\n            <span class="skill-chip"><i class="fas fa-bolt"></i> Serverless Functions</span>\n            <span class="skill-chip"><i class="fab fa-github"></i> CI/CD & Actions</span>\n            <span class="skill-chip"><i class="fab fa-linux"></i> Linux & Bash</span>\n            <span class="skill-chip"><i class="fas fa-shield-virus"></i> Infraestrutura Resiliente</span>\n          </div>\n        </div>\n\n        <!-- Card 3: AI & Data Science -->\n        <div class="glass-card skill-bento-card">\n          <div class="skill-category-header">\n            <i class="fas fa-robot skill-cat-icon"></i>\n            <div>\n              <h3 class="skill-cat-title">IA Generativa & Ci\xeancia de Dados</h3>\n              <span class="skill-cat-sub">Modelos inteligentes e an\xe1lise preditiva</span>\n            </div>\n          </div>\n          <div class="skill-chips">\n            <span class="skill-chip"><i class="fas fa-brain"></i> IA Generativa</span>\n            <span class="skill-chip"><i class="fas fa-comments"></i> Prompt Engineering</span>\n            <span class="skill-chip"><i class="fas fa-search-plus"></i> Busca Vetorial & RAG</span>\n            <span class="skill-chip"><i class="fas fa-microchip"></i> Machine Learning</span>\n            <span class="skill-chip"><i class="fas fa-calculator"></i> Modelagem Estat\xedstica</span>\n            <span class="skill-chip"><i class="fas fa-chart-line"></i> An\xe1lise Preditiva</span>\n            <span class="skill-chip"><i class="fas fa-flask"></i> Valida\xe7\xe3o de Modelos</span>\n          </div>\n        </div>\n\n        <!-- Card 4: BI, MIS & Finan\xe7as -->\n        <div class="glass-card skill-bento-card">\n          <div class="skill-category-header">\n            <i class="fas fa-chart-pie skill-cat-icon"></i>\n            <div>\n              <h3 class="skill-cat-title">MIS, BI & Finan\xe7as Corporativas</h3>\n              <span class="skill-cat-sub">Decis\xf5es orientadas a dados e rentabilidade</span>\n            </div>\n          </div>\n          <div class="skill-chips">\n            <span class="skill-chip"><i class="fas fa-tachometer-alt"></i> Power BI & DAX</span>\n            <span class="skill-chip"><i class="fas fa-landmark"></i> Gest\xe3o de MIS Banc\xe1rio</span>\n            <span class="skill-chip"><i class="fas fa-money-bill-wave"></i> Otimiza\xe7\xe3o de EBITDA</span>\n            <span class="skill-chip"><i class="fas fa-user-shield"></i> Mitiga\xe7\xe3o de Perdas</span>\n            <span class="skill-chip"><i class="fas fa-balance-scale"></i> Finan\xe7as Corporativas</span>\n            <span class="skill-chip"><i class="fas fa-desktop"></i> Dashboards C-Level</span>\n          </div>\n        </div>\n\n        <!-- Card 5: Soft Skills & Idiomas -->\n        <div class="glass-card skill-bento-card" style="grid-column: 1 / -1;">\n          <div class="skill-category-header">\n            <i class="fas fa-users-cog skill-cat-icon"></i>\n            <div>\n              <h3 class="skill-cat-title">Compet\xeancias Profissionais & Idiomas</h3>\n              <span class="skill-cat-sub">Ponte entre tecnologia complexa e neg\xf3cios</span>\n            </div>\n          </div>\n          <div class="skill-chips">\n            <span class="skill-chip highlight"><i class="fas fa-bullhorn"></i> Comunica\xe7\xe3o T\xe9cnica Acess\xedvel</span>\n            <span class="skill-chip highlight"><i class="fas fa-puzzle-piece"></i> Resolu\xe7\xe3o de Problemas Cr\xedticos</span>\n            <span class="skill-chip highlight"><i class="fas fa-book-open"></i> Aprendizado Cont\xednuo</span>\n            <span class="skill-chip highlight"><i class="fas fa-users"></i> Lideran\xe7a e Motiva\xe7\xe3o de Equipes</span>\n            <span class="skill-chip highlight"><i class="fas fa-shield-alt"></i> Alta Resili\xeancia sob Press\xe3o</span>\n            <span class="skill-chip highlight"><i class="fas fa-globe-americas"></i> Portugu\xeas (Nativo)</span>\n            <span class="skill-chip highlight"><i class="fas fa-language"></i> Ingl\xeas (C1 - Avan\xe7ado)</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Section: Contato -->\n  <section class="section" id="contato">\n    <div class="container">\n      <div class="section-header">\n        <span class="section-kicker">Vamos Conversar?</span>\n        <h2 class="section-title">Entre em Contato</h2>\n      </div>\n\n      <div class="contact-cards-grid">\n        <!-- E-mail -->\n        <div class="glass-card contact-box">\n          <div class="contact-box-icon"><i class="fas fa-envelope"></i></div>\n          <h3 class="contact-box-title">E-mail</h3>\n          <p class="contact-box-detail">rodrigohbx@gmail.com</p>\n          <div class="contact-box-actions">\n            <a href="mailto:rodrigohbx@gmail.com" class="btn btn-sm btn-primary">\n              <i class="fas fa-paper-plane"></i> Enviar Mensagem\n            </a>\n            <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="rodrigohbx@gmail.com">\n              <i class="fas fa-copy"></i> Copiar\n            </button>\n          </div>\n        </div>\n\n        <!-- WhatsApp -->\n        <div class="glass-card contact-box">\n          <div class="contact-box-icon whatsapp-icon"><i class="fab fa-whatsapp"></i></div>\n          <h3 class="contact-box-title">WhatsApp</h3>\n          <p class="contact-box-detail">+55 11 999224-4443</p>\n          <div class="contact-box-actions">\n            <a href="https://wa.me/5511999224443?text=Ol%C3%A1%20Rodrigo,%20vi%20seu%20portf%C3%B3lio!" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">\n              <i class="fab fa-whatsapp"></i> Iniciar Conversa\n            </a>\n            <button type="button" class="btn btn-sm btn-secondary copy-btn" data-copy="+5511999224443">\n              <i class="fas fa-copy"></i> Copiar\n            </button>\n          </div>\n        </div>\n\n        <!-- LinkedIn -->\n        <div class="glass-card contact-box">\n          <div class="contact-box-icon linkedin-icon"><i class="fab fa-linkedin-in"></i></div>\n          <h3 class="contact-box-title">LinkedIn</h3>\n          <p class="contact-box-detail">/in/rodrigoheloani</p>\n          <div class="contact-box-actions">\n            <a href="https://www.linkedin.com/in/rodrigoheloani/" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">\n              <i class="fas fa-external-link-alt"></i> Acessar Perfil\n            </a>\n          </div>\n        </div>\n\n        <!-- GitHub -->\n        <div class="glass-card contact-box">\n          <div class="contact-box-icon"><i class="fab fa-github"></i></div>\n          <h3 class="contact-box-title">GitHub</h3>\n          <p class="contact-box-detail">github.com/Rox87</p>\n          <div class="contact-box-actions">\n            <a href="https://github.com/Rox87" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">\n              <i class="fas fa-code-branch"></i> Ver Reposit\xf3rios\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n<!-- Footer -->\n<footer class="site-footer">\n  <div class="container footer-content">\n    <div class="footer-left">\n      <div class="footer-logo">&lt;RH.data /&gt;</div>\n      <p class="footer-desc">\n        Desenvolvido com <strong>Dart (Web)</strong>, <strong>JavaScript Canvas</strong> e <strong>CSS3 Moderno</strong>.\n      </p>\n      <div class="easter-hint-pill">\n        <i class="fas fa-terminal"></i> <span>Dica: Tente clicar 12 vezes no nome principal no topo da p\xe1gina...</span>\n      </div>\n    </div>\n\n    <div class="footer-right">\n      <div class="footer-social-links">\n        <a href="https://www.linkedin.com/in/rodrigoheloani/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>\n        <a href="https://github.com/Rox87" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fab fa-github"></i></a>\n        <a href="mailto:rodrigohbx@gmail.com" title="E-mail"><i class="fas fa-envelope"></i></a>\n        <a href="https://wa.me/5511999224443" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>\n      </div>\n      <p class="footer-copy">\xa9 2026 Rodrigo Heloani de Brito. Todos os direitos reservados.</p>\n    </div>\n  </div>\n</footer>\n\n<!-- Easter Egg Modal Popup -->\n<div id="modalOverlay" class="modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">\n  <div class="modal-content">\n    <div class="modal-cyber-bar">\n      <div class="modal-title-status">\n        <span class="status-dot-blink"></span>\n        <span>ACESSO PRIVILEGIADO // CHAVE MESTRA CRIPTOGR\xc1FICA [DESBLOQUEADA]</span>\n      </div>\n      <button id="closeModal" class="close-btn" type="button" aria-label="Fechar modal">&times;</button>\n    </div>\n    <div class="image-container">\n      <img id="portfolioImage" src="chave.png" alt="Chave Mestra Criptogr\xe1fica - Acesso aos Sistemas">\n    </div>\n    <div class="modal-footer-caption">\n      <p><strong>"Voc\xea encontrou a chave mestra. A curiosidade e a t\xe9cnica abrem qualquer porta."</strong></p>\n      <span class="modal-shortcut-hint">Pressione ESC para fechar</span>\n    </div>\n  </div>\n</div>\n\n<!-- Toast Feedback Container -->\n<div id="toastContainer" class="toast-container"></div>\n  '}},B={}
var w=[A,J,B]
var $={}
A.aZ.prototype={}
J.a8.prototype={
h(a){return"Instance of '"+A.ap(a)+"'"},
gi(a){return A.A(A.b4(this))}}
J.aa.prototype={
h(a){return String(a)},
gi(a){return A.A(u.y)},
$ib:1,
$iaR:1}
J.I.prototype={
h(a){return"null"},
$ib:1}
J.L.prototype={$ih:1}
J.v.prototype={
h(a){return String(a)}}
J.ao.prototype={}
J.U.prototype={}
J.u.prototype={
h(a){var t=a[$.bV()]
if(t==null)t=a[$.bU()]
if(t==null)return this.v(a)
return"JavaScript function for "+J.a4(t)}}
J.K.prototype={
h(a){return String(a)}}
J.M.prototype={
h(a){return String(a)}}
J.n.prototype={
t(a,b){A.aP(a).c.a(b)
a.$flags&1&&A.dl(a,29)
a.push(b)},
h(a){return A.bk(a,"[","]")},
gu(a){return new J.a5(a,a.length,A.aP(a).q("a5<1>"))},
gj(a){return a.length},
$if:1,
$ic:1}
J.a9.prototype={
A(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.ap(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.az.prototype={}
J.a5.prototype={
gk(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.dj(r)
throw A.m(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.ad.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.A(u.H)},
$id:1}
J.ab.prototype={
gi(a){return A.A(u.S)},
$ib:1,
$ia:1}
J.ac.prototype={
gi(a){return A.A(u.i)},
$ib:1}
J.J.prototype={
h(a){return a},
gi(a){return A.A(u.N)},
gj(a){return a.length},
$ib:1,
$iaq:1}
A.aA.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ae.prototype={
gk(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.m(A.bi(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
A.l.prototype={}
A.T.prototype={}
A.x.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.bT(s==null?"unknown":s)+"'"},
gB(){return this},
$C:"$1",
$R:1,
$D:null}
A.au.prototype={$C:"$2",$R:2}
A.aF.prototype={}
A.aD.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.bT(t)+"'"}}
A.a7.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ap(this.a)+"'")}}
A.aC.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aU.prototype={
$1(a){return this.a(a)}}
A.aV.prototype={
$2(a,b){return this.a(a,b)}}
A.aW.prototype={
$1(a){return this.a(A.b3(a))}}
A.C.prototype={
gi(a){return B.p},
$ib:1}
A.P.prototype={}
A.af.prototype={
gi(a){return B.q},
$ib:1}
A.D.prototype={
gj(a){return a.length},
$io:1}
A.N.prototype={$if:1,$ic:1}
A.O.prototype={$if:1,$ic:1}
A.ag.prototype={
gi(a){return B.r},
$ib:1}
A.ah.prototype={
gi(a){return B.t},
$ib:1}
A.ai.prototype={
gi(a){return B.u},
$ib:1}
A.aj.prototype={
gi(a){return B.v},
$ib:1}
A.ak.prototype={
gi(a){return B.w},
$ib:1}
A.al.prototype={
gi(a){return B.x},
$ib:1}
A.am.prototype={
gi(a){return B.y},
$ib:1}
A.Q.prototype={
gi(a){return B.z},
gj(a){return a.length},
$ib:1}
A.an.prototype={
gi(a){return B.A},
gj(a){return a.length},
$ib:1}
A.V.prototype={}
A.W.prototype={}
A.X.prototype={}
A.Y.prototype={}
A.r.prototype={
q(a){return A.aN(v.typeUniverse,this,a)},
C(a){return A.cw(v.typeUniverse,this,a)}}
A.ar.prototype={}
A.aL.prototype={
h(a){return A.p(this.a,null)}}
A.aJ.prototype={
h(a){return this.a}}
A.as.prototype={}
A.e.prototype={
gu(a){return new A.ae(a,a.length,A.a3(a).q("ae<e.E>"))},
h(a){return A.bk(a,"[","]")}}
A.aw.prototype={}
A.at.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.ax(t)
return"Assertion failed"}}
A.aG.prototype={}
A.H.prototype={
gn(){return"Invalid argument"+(!this.a?"(s)":"")},
gm(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gn()+r+p
if(!t.a)return o
return o+t.gm()+": "+A.ax(t.gp())},
gp(){return this.b}}
A.aB.prototype={
gp(){return A.bA(this.b)},
gn(){return"RangeError"},
gm(){return""}}
A.ay.prototype={
gp(){return A.b2(this.b)},
gn(){return"RangeError"},
gm(){if(A.b2(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.aI.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aH.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.av.prototype={
h(a){return"Concurrent modification during iteration: "+A.ax(this.a)+"."}}
A.R.prototype={
h(a){return"null"}}
A.j.prototype={$ij:1,
h(a){return"Instance of '"+A.ap(this)+"'"},
gi(a){return A.d8(this)},
toString(){return this.h(this)}}
A.aE.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}};(function aliases(){var t=J.v.prototype
t.v=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.aZ,J.a8,A.T,J.a5,A.aw,A.ae,A.l,A.x,A.r,A.ar,A.aL,A.e,A.R,A.aE])
r(J.a8,[J.aa,J.I,J.L,J.K,J.M,J.ad,J.J])
r(J.L,[J.v,J.n,A.C,A.P])
r(J.v,[J.ao,J.U,J.u])
s(J.a9,A.T)
s(J.az,J.n)
r(J.ad,[J.ab,J.ac])
r(A.aw,[A.aA,A.aC,A.aJ,A.at,A.aG,A.H,A.aI,A.aH,A.av])
r(A.x,[A.au,A.aF,A.aU,A.aW])
r(A.aF,[A.aD,A.a7])
s(A.aV,A.au)
r(A.P,[A.af,A.D])
r(A.D,[A.V,A.X])
s(A.W,A.V)
s(A.N,A.W)
s(A.Y,A.X)
s(A.O,A.Y)
r(A.N,[A.ag,A.ah])
r(A.O,[A.ai,A.aj,A.ak,A.al,A.am,A.Q,A.an])
s(A.as,A.aJ)
r(A.H,[A.aB,A.ay])
t(A.V,A.e)
t(A.W,A.l)
t(A.X,A.e)
t(A.Y,A.l)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",d:"double",bO:"num",aq:"String",aR:"bool",R:"Null",c:"List",j:"Object",dt:"Map",h:"JSObject"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cv(v.typeUniverse,JSON.parse('{"ao":"v","U":"v","u":"v","du":"C","aa":{"aR":[],"b":[]},"I":{"b":[]},"L":{"h":[]},"v":{"h":[]},"n":{"c":["1"],"h":[],"f":["1"]},"a9":{"T":[]},"az":{"n":["1"],"c":["1"],"h":[],"f":["1"]},"ad":{"d":[]},"ab":{"d":[],"a":[],"b":[]},"ac":{"d":[],"b":[]},"J":{"aq":[],"b":[]},"C":{"h":[],"b":[]},"P":{"h":[]},"af":{"h":[],"b":[]},"D":{"o":["1"],"h":[]},"N":{"e":["d"],"c":["d"],"o":["d"],"h":[],"f":["d"],"l":["d"]},"O":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"]},"ag":{"e":["d"],"c":["d"],"o":["d"],"h":[],"f":["d"],"l":["d"],"b":[],"e.E":"d"},"ah":{"e":["d"],"c":["d"],"o":["d"],"h":[],"f":["d"],"l":["d"],"b":[],"e.E":"d"},"ai":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"],"b":[],"e.E":"a"},"aj":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"],"b":[],"e.E":"a"},"ak":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"],"b":[],"e.E":"a"},"al":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"],"b":[],"e.E":"a"},"am":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"],"b":[],"e.E":"a"},"Q":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"],"b":[],"e.E":"a"},"an":{"e":["a"],"c":["a"],"o":["a"],"h":[],"f":["a"],"l":["a"],"b":[],"e.E":"a"},"c9":{"c":["a"],"f":["a"]},"cg":{"c":["a"],"f":["a"]},"cf":{"c":["a"],"f":["a"]},"c7":{"c":["a"],"f":["a"]},"cd":{"c":["a"],"f":["a"]},"c8":{"c":["a"],"f":["a"]},"ce":{"c":["a"],"f":["a"]},"c5":{"c":["d"],"f":["d"]},"c6":{"c":["d"],"f":["d"]}}'))
A.cu(v.typeUniverse,JSON.parse('{"D":1}'))
var u=(function rtii(){var t=A.b7
return{Z:t("ds"),s:t("n<aq>"),b:t("n<@>"),T:t("I"),m:t("h"),g:t("u"),p:t("o<@>"),j:t("c<@>"),P:t("R"),K:t("j"),L:t("dv"),N:t("aq"),R:t("b"),o:t("U"),y:t("aR"),i:t("d"),S:t("a"),O:t("bj<R>?"),z:t("h?"),X:t("j?"),v:t("aq?"),u:t("aR?"),I:t("d?"),t:t("a?"),n:t("bO?"),H:t("bO")}})();(function constants(){B.m=J.a8.prototype
B.d=J.n.prototype
B.n=J.u.prototype
B.o=J.L.prototype
B.e=J.ao.prototype
B.a=J.U.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.c=function(hooks) { return hooks; }

B.p=A.t("dn")
B.q=A.t("dp")
B.r=A.t("c5")
B.t=A.t("c6")
B.u=A.t("c7")
B.v=A.t("c8")
B.w=A.t("c9")
B.x=A.t("cd")
B.y=A.t("ce")
B.z=A.t("cf")
B.A=A.t("cg")})();(function staticFields(){$.aK=null
$.a1=A.aQ([],A.b7("n<j>"))
$.bf=null
$.be=null
$.bN=null
$.bL=null
$.bQ=null
$.aS=null
$.aX=null
$.b9=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dr","bV",()=>A.aT("_$dart_dartClosure"))
t($,"dq","bU",()=>A.aT("_$dart_dartClosure_dartJSInterop"))
t($,"dw","bW",()=>A.aQ([new J.a9()],A.b7("n<T>")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.C,SharedArrayBuffer:A.C,ArrayBufferView:A.P,DataView:A.af,Float32Array:A.ag,Float64Array:A.ah,Int16Array:A.ai,Int32Array:A.aj,Int8Array:A.ak,Uint16Array:A.al,Uint32Array:A.am,Uint8ClampedArray:A.Q,CanvasPixelArray:A.Q,Uint8Array:A.an})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.D.$nativeSuperclassTag="ArrayBufferView"
A.V.$nativeSuperclassTag="ArrayBufferView"
A.W.$nativeSuperclassTag="ArrayBufferView"
A.N.$nativeSuperclassTag="ArrayBufferView"
A.X.$nativeSuperclassTag="ArrayBufferView"
A.Y.$nativeSuperclassTag="ArrayBufferView"
A.O.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dh
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
