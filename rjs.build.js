//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map;
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define('backbone',['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

})(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.3';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
      context: context,
      ctx: obj,
      listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo = function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off = function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
      context: context,
      listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening = function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once = function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce = function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger = function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else if (!this._validate(attrs, options)) {
        return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.defaults({validate: true}, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1};

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();
      var removed = this._removeModels(models, options);
      if (!options.silent && removed.length) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && at == null && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model;
      for (var i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
          return model !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return this.map(attr + '');
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function(attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        // Remove references before triggering 'remove' event to prevent an
        // infinite loop. #3693
        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        if (id != null) delete this._byId[id];

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function(model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if (model) {
        if ((event === 'add' || event === 'remove') && collection !== this) return;
        if (event === 'destroy') this.remove(model, options);
        if (event === 'change') {
          var prevId = this.modelId(model.previousAttributes());
          var id = this.modelId(model.attributes);
          if (prevId !== id) {
            if (prevId != null) delete this._byId[prevId];
            if (id != null) this._byId[id] = model;
          }
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch': 'PATCH',
    'delete': 'DELETE',
    'read': 'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function(eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function(eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function and add the prototype properties.
    child.prototype = _.create(parent.prototype, protoProps);
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

});

// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.4
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


(function(root, factory) {

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define('marionette',['backbone', 'underscore'], function(Backbone, _) {
      return (root.Marionette = root.Mn = factory(root, Backbone, _));
    });
  } else if (typeof exports !== 'undefined') {
    var Backbone = require('backbone');
    var _ = require('underscore');
    module.exports = factory(root, Backbone, _);
  } else {
    root.Marionette = root.Mn = factory(root, root.Backbone, root._);
  }

}(this, function(root, Backbone, _) {
  'use strict';

  /* istanbul ignore next */
  // Backbone.BabySitter
  // -------------------
  // v0.1.10
  //
  // Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
  // Distributed under MIT license
  //
  // http://github.com/marionettejs/backbone.babysitter
  (function(Backbone, _) {
    "use strict";
    var previousChildViewContainer = Backbone.ChildViewContainer;
    // BabySitter.ChildViewContainer
    // -----------------------------
    //
    // Provide a container to store, retrieve and
    // shut down child views.
    Backbone.ChildViewContainer = function(Backbone, _) {
      // Container Constructor
      // ---------------------
      var Container = function(views) {
        this._views = {};
        this._indexByModel = {};
        this._indexByCustom = {};
        this._updateLength();
        _.each(views, this.add, this);
      };
      // Container Methods
      // -----------------
      _.extend(Container.prototype, {
        // Add a view to this container. Stores the view
        // by `cid` and makes it searchable by the model
        // cid (and model itself). Optionally specify
        // a custom key to store an retrieve the view.
        add: function(view, customIndex) {
          var viewCid = view.cid;
          // store the view
          this._views[viewCid] = view;
          // index it by model
          if (view.model) {
            this._indexByModel[view.model.cid] = viewCid;
          }
          // index by custom
          if (customIndex) {
            this._indexByCustom[customIndex] = viewCid;
          }
          this._updateLength();
          return this;
        },
        // Find a view by the model that was attached to
        // it. Uses the model's `cid` to find it.
        findByModel: function(model) {
          return this.findByModelCid(model.cid);
        },
        // Find a view by the `cid` of the model that was attached to
        // it. Uses the model's `cid` to find the view `cid` and
        // retrieve the view using it.
        findByModelCid: function(modelCid) {
          var viewCid = this._indexByModel[modelCid];
          return this.findByCid(viewCid);
        },
        // Find a view by a custom indexer.
        findByCustom: function(index) {
          var viewCid = this._indexByCustom[index];
          return this.findByCid(viewCid);
        },
        // Find by index. This is not guaranteed to be a
        // stable index.
        findByIndex: function(index) {
          return _.values(this._views)[index];
        },
        // retrieve a view by its `cid` directly
        findByCid: function(cid) {
          return this._views[cid];
        },
        // Remove a view
        remove: function(view) {
          var viewCid = view.cid;
          // delete model index
          if (view.model) {
            delete this._indexByModel[view.model.cid];
          }
          // delete custom index
          _.any(this._indexByCustom, function(cid, key) {
            if (cid === viewCid) {
              delete this._indexByCustom[key];
              return true;
            }
          }, this);
          // remove the view from the container
          delete this._views[viewCid];
          // update the length
          this._updateLength();
          return this;
        },
        // Call a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.call`.
        call: function(method) {
          this.apply(method, _.tail(arguments));
        },
        // Apply a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.apply`.
        apply: function(method, args) {
          _.each(this._views, function(view) {
            if (_.isFunction(view[method])) {
              view[method].apply(view, args || []);
            }
          });
        },
        // Update the `.length` attribute on this container
        _updateLength: function() {
          this.length = _.size(this._views);
        }
      });
      // Borrowing this code from Backbone.Collection:
      // http://backbonejs.org/docs/backbone.html#section-106
      //
      // Mix in methods from Underscore, for iteration, and other
      // collection related features.
      var methods = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce" ];
      _.each(methods, function(method) {
        Container.prototype[method] = function() {
          var views = _.values(this._views);
          var args = [ views ].concat(_.toArray(arguments));
          return _[method].apply(_, args);
        };
      });
      // return the public API
      return Container;
    }(Backbone, _);
    Backbone.ChildViewContainer.VERSION = "0.1.10";
    Backbone.ChildViewContainer.noConflict = function() {
      Backbone.ChildViewContainer = previousChildViewContainer;
      return this;
    };
    return Backbone.ChildViewContainer;
  })(Backbone, _);

  /* istanbul ignore next */
  // Backbone.Wreqr (Backbone.Marionette)
  // ----------------------------------
  // v1.3.5
  //
  // Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
  // Distributed under MIT license
  //
  // http://github.com/marionettejs/backbone.wreqr
  (function(Backbone, _) {
    "use strict";
    var previousWreqr = Backbone.Wreqr;
    var Wreqr = Backbone.Wreqr = {};
    Backbone.Wreqr.VERSION = "1.3.5";
    Backbone.Wreqr.noConflict = function() {
      Backbone.Wreqr = previousWreqr;
      return this;
    };
    // Handlers
    // --------
    // A registry of functions to call, given a name
    Wreqr.Handlers = function(Backbone, _) {
      "use strict";
      // Constructor
      // -----------
      var Handlers = function(options) {
        this.options = options;
        this._wreqrHandlers = {};
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
        }
      };
      Handlers.extend = Backbone.Model.extend;
      // Instance Members
      // ----------------
      _.extend(Handlers.prototype, Backbone.Events, {
        // Add multiple handlers using an object literal configuration
        setHandlers: function(handlers) {
          _.each(handlers, function(handler, name) {
            var context = null;
            if (_.isObject(handler) && !_.isFunction(handler)) {
              context = handler.context;
              handler = handler.callback;
            }
            this.setHandler(name, handler, context);
          }, this);
        },
        // Add a handler for the given name, with an
        // optional context to run the handler within
        setHandler: function(name, handler, context) {
          var config = {
            callback: handler,
            context: context
          };
          this._wreqrHandlers[name] = config;
          this.trigger("handler:add", name, handler, context);
        },
        // Determine whether or not a handler is registered
        hasHandler: function(name) {
          return !!this._wreqrHandlers[name];
        },
        // Get the currently registered handler for
        // the specified name. Throws an exception if
        // no handler is found.
        getHandler: function(name) {
          var config = this._wreqrHandlers[name];
          if (!config) {
            return;
          }
          return function() {
            return config.callback.apply(config.context, arguments);
          };
        },
        // Remove a handler for the specified name
        removeHandler: function(name) {
          delete this._wreqrHandlers[name];
        },
        // Remove all handlers from this registry
        removeAllHandlers: function() {
          this._wreqrHandlers = {};
        }
      });
      return Handlers;
    }(Backbone, _);
    // Wreqr.CommandStorage
    // --------------------
    //
    // Store and retrieve commands for execution.
    Wreqr.CommandStorage = function() {
      "use strict";
      // Constructor function
      var CommandStorage = function(options) {
        this.options = options;
        this._commands = {};
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
        }
      };
      // Instance methods
      _.extend(CommandStorage.prototype, Backbone.Events, {
        // Get an object literal by command name, that contains
        // the `commandName` and the `instances` of all commands
        // represented as an array of arguments to process
        getCommands: function(commandName) {
          var commands = this._commands[commandName];
          // we don't have it, so add it
          if (!commands) {
            // build the configuration
            commands = {
              command: commandName,
              instances: []
            };
            // store it
            this._commands[commandName] = commands;
          }
          return commands;
        },
        // Add a command by name, to the storage and store the
        // args for the command
        addCommand: function(commandName, args) {
          var command = this.getCommands(commandName);
          command.instances.push(args);
        },
        // Clear all commands for the given `commandName`
        clearCommands: function(commandName) {
          var command = this.getCommands(commandName);
          command.instances = [];
        }
      });
      return CommandStorage;
    }();
    // Wreqr.Commands
    // --------------
    //
    // A simple command pattern implementation. Register a command
    // handler and execute it.
    Wreqr.Commands = function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({
        // default storage type
        storageType: Wreqr.CommandStorage,
        constructor: function(options) {
          this.options = options || {};
          this._initializeStorage(this.options);
          this.on("handler:add", this._executeCommands, this);
          Wreqr.Handlers.prototype.constructor.apply(this, arguments);
        },
        // Execute a named command with the supplied args
        execute: function(name) {
          name = arguments[0];
          var args = _.rest(arguments);
          if (this.hasHandler(name)) {
            this.getHandler(name).apply(this, args);
          } else {
            this.storage.addCommand(name, args);
          }
        },
        // Internal method to handle bulk execution of stored commands
        _executeCommands: function(name, handler, context) {
          var command = this.storage.getCommands(name);
          // loop through and execute all the stored command instances
          _.each(command.instances, function(args) {
            handler.apply(context, args);
          });
          this.storage.clearCommands(name);
        },
        // Internal method to initialize storage either from the type's
        // `storageType` or the instance `options.storageType`.
        _initializeStorage: function(options) {
          var storage;
          var StorageType = options.storageType || this.storageType;
          if (_.isFunction(StorageType)) {
            storage = new StorageType();
          } else {
            storage = StorageType;
          }
          this.storage = storage;
        }
      });
    }(Wreqr, _);
    // Wreqr.RequestResponse
    // ---------------------
    //
    // A simple request/response implementation. Register a
    // request handler, and return a response from it
    Wreqr.RequestResponse = function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({
        request: function(name) {
          if (this.hasHandler(name)) {
            return this.getHandler(name).apply(this, _.rest(arguments));
          }
        }
      });
    }(Wreqr, _);
    // Event Aggregator
    // ----------------
    // A pub-sub object that can be used to decouple various parts
    // of an application through event-driven architecture.
    Wreqr.EventAggregator = function(Backbone, _) {
      "use strict";
      var EA = function() {};
      // Copy the `extend` function used by Backbone's classes
      EA.extend = Backbone.Model.extend;
      // Copy the basic Backbone.Events on to the event aggregator
      _.extend(EA.prototype, Backbone.Events);
      return EA;
    }(Backbone, _);
    // Wreqr.Channel
    // --------------
    //
    // An object that wraps the three messaging systems:
    // EventAggregator, RequestResponse, Commands
    Wreqr.Channel = function(Wreqr) {
      "use strict";
      var Channel = function(channelName) {
        this.vent = new Backbone.Wreqr.EventAggregator();
        this.reqres = new Backbone.Wreqr.RequestResponse();
        this.commands = new Backbone.Wreqr.Commands();
        this.channelName = channelName;
      };
      _.extend(Channel.prototype, {
        // Remove all handlers from the messaging systems of this channel
        reset: function() {
          this.vent.off();
          this.vent.stopListening();
          this.reqres.removeAllHandlers();
          this.commands.removeAllHandlers();
          return this;
        },
        // Connect a hash of events; one for each messaging system
        connectEvents: function(hash, context) {
          this._connect("vent", hash, context);
          return this;
        },
        connectCommands: function(hash, context) {
          this._connect("commands", hash, context);
          return this;
        },
        connectRequests: function(hash, context) {
          this._connect("reqres", hash, context);
          return this;
        },
        // Attach the handlers to a given message system `type`
        _connect: function(type, hash, context) {
          if (!hash) {
            return;
          }
          context = context || this;
          var method = type === "vent" ? "on" : "setHandler";
          _.each(hash, function(fn, eventName) {
            this[type][method](eventName, _.bind(fn, context));
          }, this);
        }
      });
      return Channel;
    }(Wreqr);
    // Wreqr.Radio
    // --------------
    //
    // An object that lets you communicate with many channels.
    Wreqr.radio = function(Wreqr, _) {
      "use strict";
      var Radio = function() {
        this._channels = {};
        this.vent = {};
        this.commands = {};
        this.reqres = {};
        this._proxyMethods();
      };
      _.extend(Radio.prototype, {
        channel: function(channelName) {
          if (!channelName) {
            throw new Error("Channel must receive a name");
          }
          return this._getChannel(channelName);
        },
        _getChannel: function(channelName) {
          var channel = this._channels[channelName];
          if (!channel) {
            channel = new Wreqr.Channel(channelName);
            this._channels[channelName] = channel;
          }
          return channel;
        },
        _proxyMethods: function() {
          _.each([ "vent", "commands", "reqres" ], function(system) {
            _.each(messageSystems[system], function(method) {
              this[system][method] = proxyMethod(this, system, method);
            }, this);
          }, this);
        }
      });
      var messageSystems = {
        vent: [ "on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce" ],
        commands: [ "execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ],
        reqres: [ "request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ]
      };
      var proxyMethod = function(radio, system, method) {
        return function(channelName) {
          var messageSystem = radio._getChannel(channelName)[system];
          return messageSystem[method].apply(messageSystem, _.rest(arguments));
        };
      };
      return new Radio();
    }(Wreqr, _);
    return Backbone.Wreqr;
  })(Backbone, _);

  var previousMarionette = root.Marionette;
  var previousMn = root.Mn;

  var Marionette = Backbone.Marionette = {};

  Marionette.VERSION = '2.4.4';

  Marionette.noConflict = function() {
    root.Marionette = previousMarionette;
    root.Mn = previousMn;
    return this;
  };

  Backbone.Marionette = Marionette;

  // Get the Deferred creator for later use
  Marionette.Deferred = Backbone.$.Deferred;

  /* jshint unused: false *//* global console */

  // Helpers
  // -------

  // Marionette.extend
  // -----------------

  // Borrow the Backbone `extend` method so we can use it as needed
  Marionette.extend = Backbone.Model.extend;

  // Marionette.isNodeAttached
  // -------------------------

  // Determine if `el` is a child of the document
  Marionette.isNodeAttached = function(el) {
    return Backbone.$.contains(document.documentElement, el);
  };

  // Merge `keys` from `options` onto `this`
  Marionette.mergeOptions = function(options, keys) {
    if (!options) { return; }
    _.extend(this, _.pick(options, keys));
  };

  // Marionette.getOption
  // --------------------

  // Retrieve an object, function or other value from a target
  // object or its `options`, with `options` taking precedence.
  Marionette.getOption = function(target, optionName) {
    if (!target || !optionName) { return; }
    if (target.options && (target.options[optionName] !== undefined)) {
      return target.options[optionName];
    } else {
      return target[optionName];
    }
  };

  // Proxy `Marionette.getOption`
  Marionette.proxyGetOption = function(optionName) {
    return Marionette.getOption(this, optionName);
  };

  // Similar to `_.result`, this is a simple helper
  // If a function is provided we call it with context
  // otherwise just return the value. If the value is
  // undefined return a default value
  Marionette._getValue = function(value, context, params) {
    if (_.isFunction(value)) {
      value = params ? value.apply(context, params) : value.call(context);
    }
    return value;
  };

  // Marionette.normalizeMethods
  // ----------------------

  // Pass in a mapping of events => functions or function names
  // and return a mapping of events => functions
  Marionette.normalizeMethods = function(hash) {
    return _.reduce(hash, function(normalizedHash, method, name) {
      if (!_.isFunction(method)) {
        method = this[method];
      }
      if (method) {
        normalizedHash[name] = method;
      }
      return normalizedHash;
    }, {}, this);
  };

  // utility method for parsing @ui. syntax strings
  // into associated selector
  Marionette.normalizeUIString = function(uiString, ui) {
    return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(r) {
      return ui[r.slice(4)];
    });
  };

  // allows for the use of the @ui. syntax within
  // a given key for triggers and events
  // swaps the @ui with the associated selector.
  // Returns a new, non-mutated, parsed events hash.
  Marionette.normalizeUIKeys = function(hash, ui) {
    return _.reduce(hash, function(memo, val, key) {
      var normalizedKey = Marionette.normalizeUIString(key, ui);
      memo[normalizedKey] = val;
      return memo;
    }, {});
  };

  // allows for the use of the @ui. syntax within
  // a given value for regions
  // swaps the @ui with the associated selector
  Marionette.normalizeUIValues = function(hash, ui, properties) {
    _.each(hash, function(val, key) {
      if (_.isString(val)) {
        hash[key] = Marionette.normalizeUIString(val, ui);
      } else if (_.isObject(val) && _.isArray(properties)) {
        _.extend(val, Marionette.normalizeUIValues(_.pick(val, properties), ui));
        /* Value is an object, and we got an array of embedded property names to normalize. */
        _.each(properties, function(property) {
          var propertyVal = val[property];
          if (_.isString(propertyVal)) {
            val[property] = Marionette.normalizeUIString(propertyVal, ui);
          }
        });
      }
    });
    return hash;
  };

  // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  // Borrowing this code from Backbone.Collection:
  // http://backbonejs.org/docs/backbone.html#section-121
  Marionette.actAsCollection = function(object, listProperty) {
    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
      'last', 'without', 'isEmpty', 'pluck'];

    _.each(methods, function(method) {
      object[method] = function() {
        var list = _.values(_.result(this, listProperty));
        var args = [list].concat(_.toArray(arguments));
        return _[method].apply(_, args);
      };
    });
  };

  var deprecate = Marionette.deprecate = function(message, test) {
    if (_.isObject(message)) {
      message = (
        message.prev + ' is going to be removed in the future. ' +
        'Please use ' + message.next + ' instead.' +
        (message.url ? ' See: ' + message.url : '')
      );
    }

    if ((test === undefined || !test) && !deprecate._cache[message]) {
      deprecate._warn('Deprecation warning: ' + message);
      deprecate._cache[message] = true;
    }
  };

  deprecate._warn = typeof console !== 'undefined' && (console.warn || console.log) || function() {};
  deprecate._cache = {};

  /* jshint maxstatements: 14, maxcomplexity: 7 */

  // Trigger Method
  // --------------

  Marionette._triggerMethod = (function() {
    // split the event name on the ":"
    var splitter = /(^|:)(\w)/gi;

    // take the event section ("section1:section2:section3")
    // and turn it in to uppercase name
    function getEventName(match, prefix, eventName) {
      return eventName.toUpperCase();
    }

    return function(context, event, args) {
      var noEventArg = arguments.length < 3;
      if (noEventArg) {
        args = event;
        event = args[0];
      }

      // get the method name from the event name
      var methodName = 'on' + event.replace(splitter, getEventName);
      var method = context[methodName];
      var result;

      // call the onMethodName if it exists
      if (_.isFunction(method)) {
        // pass all args, except the event name
        result = method.apply(context, noEventArg ? _.rest(args) : args);
      }

      // trigger the event, if a trigger method exists
      if (_.isFunction(context.trigger)) {
        if (noEventArg + args.length > 1) {
          context.trigger.apply(context, noEventArg ? args : [event].concat(_.drop(args, 0)));
        } else {
          context.trigger(event);
        }
      }

      return result;
    };
  })();

  // Trigger an event and/or a corresponding method name. Examples:
  //
  // `this.triggerMethod("foo")` will trigger the "foo" event and
  // call the "onFoo" method.
  //
  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
  // call the "onFooBar" method.
  Marionette.triggerMethod = function(event) {
    return Marionette._triggerMethod(this, arguments);
  };

  // triggerMethodOn invokes triggerMethod on a specific context
  //
  // e.g. `Marionette.triggerMethodOn(view, 'show')`
  // will trigger a "show" event or invoke onShow the view.
  Marionette.triggerMethodOn = function(context) {
    var fnc = _.isFunction(context.triggerMethod) ?
                  context.triggerMethod :
                  Marionette.triggerMethod;

    return fnc.apply(context, _.rest(arguments));
  };

  // DOM Refresh
  // -----------

  // Monitor a view's state, and after it has been rendered and shown
  // in the DOM, trigger a "dom:refresh" event every time it is
  // re-rendered.

  Marionette.MonitorDOMRefresh = function(view) {
    if (view._isDomRefreshMonitored) { return; }
    view._isDomRefreshMonitored = true;

    // track when the view has been shown in the DOM,
    // using a Marionette.Region (or by other means of triggering "show")
    function handleShow() {
      view._isShown = true;
      triggerDOMRefresh();
    }

    // track when the view has been rendered
    function handleRender() {
      view._isRendered = true;
      triggerDOMRefresh();
    }

    // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
    function triggerDOMRefresh() {
      if (view._isShown && view._isRendered && Marionette.isNodeAttached(view.el)) {
        Marionette.triggerMethodOn(view, 'dom:refresh', view);
      }
    }

    view.on({
      show: handleShow,
      render: handleRender
    });
  };

  /* jshint maxparams: 5 */

  // Bind Entity Events & Unbind Entity Events
  // -----------------------------------------
  //
  // These methods are used to bind/unbind a backbone "entity" (e.g. collection/model)
  // to methods on a target object.
  //
  // The first parameter, `target`, must have the Backbone.Events module mixed in.
  //
  // The second parameter is the `entity` (Backbone.Model, Backbone.Collection or
  // any object that has Backbone.Events mixed in) to bind the events from.
  //
  // The third parameter is a hash of { "event:name": "eventHandler" }
  // configuration. Multiple handlers can be separated by a space. A
  // function can be supplied instead of a string handler name.

  (function(Marionette) {
    'use strict';

    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function bindFromStrings(target, entity, evt, methods) {
      var methodNames = methods.split(/\s+/);

      _.each(methodNames, function(methodName) {

        var method = target[methodName];
        if (!method) {
          throw new Marionette.Error('Method "' + methodName +
            '" was configured as an event handler, but does not exist.');
        }

        target.listenTo(entity, evt, method);
      });
    }

    // Bind the event to a supplied callback function
    function bindToFunction(target, entity, evt, method) {
      target.listenTo(entity, evt, method);
    }

    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function unbindFromStrings(target, entity, evt, methods) {
      var methodNames = methods.split(/\s+/);

      _.each(methodNames, function(methodName) {
        var method = target[methodName];
        target.stopListening(entity, evt, method);
      });
    }

    // Bind the event to a supplied callback function
    function unbindToFunction(target, entity, evt, method) {
      target.stopListening(entity, evt, method);
    }

    // generic looping function
    function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
      if (!entity || !bindings) { return; }

      // type-check bindings
      if (!_.isObject(bindings)) {
        throw new Marionette.Error({
          message: 'Bindings must be an object or function.',
          url: 'marionette.functions.html#marionettebindentityevents'
        });
      }

      // allow the bindings to be a function
      bindings = Marionette._getValue(bindings, target);

      // iterate the bindings and bind them
      _.each(bindings, function(methods, evt) {

        // allow for a function as the handler,
        // or a list of event names as a string
        if (_.isFunction(methods)) {
          functionCallback(target, entity, evt, methods);
        } else {
          stringCallback(target, entity, evt, methods);
        }

      });
    }

    // Export Public API
    Marionette.bindEntityEvents = function(target, entity, bindings) {
      iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
    };

    Marionette.unbindEntityEvents = function(target, entity, bindings) {
      iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
    };

    // Proxy `bindEntityEvents`
    Marionette.proxyBindEntityEvents = function(entity, bindings) {
      return Marionette.bindEntityEvents(this, entity, bindings);
    };

    // Proxy `unbindEntityEvents`
    Marionette.proxyUnbindEntityEvents = function(entity, bindings) {
      return Marionette.unbindEntityEvents(this, entity, bindings);
    };
  })(Marionette);


  // Error
  // -----

  var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number'];

  Marionette.Error = Marionette.extend.call(Error, {
    urlRoot: 'http://marionettejs.com/docs/v' + Marionette.VERSION + '/',

    constructor: function(message, options) {
      if (_.isObject(message)) {
        options = message;
        message = options.message;
      } else if (!options) {
        options = {};
      }

      var error = Error.call(this, message);
      _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));

      this.captureStackTrace();

      if (options.url) {
        this.url = this.urlRoot + options.url;
      }
    },

    captureStackTrace: function() {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Marionette.Error);
      }
    },

    toString: function() {
      return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
    }
  });

  Marionette.Error.extend = Marionette.extend;

  // Callbacks
  // ---------

  // A simple way of managing a collection of callbacks
  // and executing them at a later point in time, using jQuery's
  // `Deferred` object.
  Marionette.Callbacks = function() {
    this._deferred = Marionette.Deferred();
    this._callbacks = [];
  };

  _.extend(Marionette.Callbacks.prototype, {

    // Add a callback to be executed. Callbacks added here are
    // guaranteed to execute, even if they are added after the
    // `run` method is called.
    add: function(callback, contextOverride) {
      var promise = _.result(this._deferred, 'promise');

      this._callbacks.push({cb: callback, ctx: contextOverride});

      promise.then(function(args) {
        if (contextOverride) { args.context = contextOverride; }
        callback.call(args.context, args.options);
      });
    },

    // Run all registered callbacks with the context specified.
    // Additional callbacks can be added after this has been run
    // and they will still be executed.
    run: function(options, context) {
      this._deferred.resolve({
        options: options,
        context: context
      });
    },

    // Resets the list of callbacks to be run, allowing the same list
    // to be run multiple times - whenever the `run` method is called.
    reset: function() {
      var callbacks = this._callbacks;
      this._deferred = Marionette.Deferred();
      this._callbacks = [];

      _.each(callbacks, function(cb) {
        this.add(cb.cb, cb.ctx);
      }, this);
    }
  });

  // Controller
  // ----------

  // A multi-purpose object to use as a controller for
  // modules and routers, and as a mediator for workflow
  // and coordination of other objects, views, and more.
  Marionette.Controller = function(options) {
    this.options = options || {};

    if (_.isFunction(this.initialize)) {
      this.initialize(this.options);
    }
  };

  Marionette.Controller.extend = Marionette.extend;

  // Controller Methods
  // --------------

  // Ensure it can trigger events with Backbone.Events
  _.extend(Marionette.Controller.prototype, Backbone.Events, {
    destroy: function() {
      Marionette._triggerMethod(this, 'before:destroy', arguments);
      Marionette._triggerMethod(this, 'destroy', arguments);

      this.stopListening();
      this.off();
      return this;
    },

    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod,

    // A handy way to merge options onto the instance
    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption

  });

  // Object
  // ------

  // A Base Class that other Classes should descend from.
  // Object borrows many conventions and utilities from Backbone.
  Marionette.Object = function(options) {
    this.options = _.extend({}, _.result(this, 'options'), options);

    this.initialize.apply(this, arguments);
  };

  Marionette.Object.extend = Marionette.extend;

  // Object Methods
  // --------------

  // Ensure it can trigger events with Backbone.Events
  _.extend(Marionette.Object.prototype, Backbone.Events, {

    //this is a noop method intended to be overridden by classes that extend from this base
    initialize: function() {},

    destroy: function(options) {
      options = options || {};

      this.triggerMethod('before:destroy', options);
      this.triggerMethod('destroy', options);
      this.stopListening();

      return this;
    },

    // Import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod,

    // A handy way to merge options onto the instance
    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,

    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
    bindEntityEvents: Marionette.proxyBindEntityEvents,

    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
  });

  /* jshint maxcomplexity: 16, maxstatements: 45, maxlen: 120 */

  // Region
  // ------

  // Manage the visual regions of your composite application. See
  // http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/

  Marionette.Region = Marionette.Object.extend({
    constructor: function(options) {

      // set options temporarily so that we can get `el`.
      // options will be overriden by Object.constructor
      this.options = options || {};
      this.el = this.getOption('el');

      // Handle when this.el is passed in as a $ wrapped element.
      this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;

      if (!this.el) {
        throw new Marionette.Error({
          name: 'NoElError',
          message: 'An "el" must be specified for a region.'
        });
      }

      this.$el = this.getEl(this.el);
      Marionette.Object.call(this, options);
    },

    // Displays a backbone view instance inside of the region.
    // Handles calling the `render` method for you. Reads content
    // directly from the `el` attribute. Also calls an optional
    // `onShow` and `onDestroy` method on your view, just after showing
    // or just before destroying the view, respectively.
    // The `preventDestroy` option can be used to prevent a view from
    // the old view being destroyed on show.
    // The `forceShow` option can be used to force a view to be
    // re-rendered if it's already shown in the region.
    show: function(view, options) {
      if (!this._ensureElement()) {
        return;
      }

      this._ensureViewIsIntact(view);
      Marionette.MonitorDOMRefresh(view);

      var showOptions     = options || {};
      var isDifferentView = view !== this.currentView;
      var preventDestroy  = !!showOptions.preventDestroy;
      var forceShow       = !!showOptions.forceShow;

      // We are only changing the view if there is a current view to change to begin with
      var isChangingView = !!this.currentView;

      // Only destroy the current view if we don't want to `preventDestroy` and if
      // the view given in the first argument is different than `currentView`
      var _shouldDestroyView = isDifferentView && !preventDestroy;

      // Only show the view given in the first argument if it is different than
      // the current view or if we want to re-show the view. Note that if
      // `_shouldDestroyView` is true, then `_shouldShowView` is also necessarily true.
      var _shouldShowView = isDifferentView || forceShow;

      if (isChangingView) {
        this.triggerMethod('before:swapOut', this.currentView, this, options);
      }

      if (this.currentView) {
        delete this.currentView._parent;
      }

      if (_shouldDestroyView) {
        this.empty();

      // A `destroy` event is attached to the clean up manually removed views.
      // We need to detach this event when a new view is going to be shown as it
      // is no longer relevant.
      } else if (isChangingView && _shouldShowView) {
        this.currentView.off('destroy', this.empty, this);
      }

      if (_shouldShowView) {

        // We need to listen for if a view is destroyed
        // in a way other than through the region.
        // If this happens we need to remove the reference
        // to the currentView since once a view has been destroyed
        // we can not reuse it.
        view.once('destroy', this.empty, this);

        // make this region the view's parent,
        // It's important that this parent binding happens before rendering
        // so that any events the child may trigger during render can also be
        // triggered on the child's ancestor views
        view._parent = this;
        this._renderView(view);

        if (isChangingView) {
          this.triggerMethod('before:swap', view, this, options);
        }

        this.triggerMethod('before:show', view, this, options);
        Marionette.triggerMethodOn(view, 'before:show', view, this, options);

        if (isChangingView) {
          this.triggerMethod('swapOut', this.currentView, this, options);
        }

        // An array of views that we're about to display
        var attachedRegion = Marionette.isNodeAttached(this.el);

        // The views that we're about to attach to the document
        // It's important that we prevent _getNestedViews from being executed unnecessarily
        // as it's a potentially-slow method
        var displayedViews = [];

        var attachOptions = _.extend({
          triggerBeforeAttach: this.triggerBeforeAttach,
          triggerAttach: this.triggerAttach
        }, showOptions);

        if (attachedRegion && attachOptions.triggerBeforeAttach) {
          displayedViews = this._displayedViews(view);
          this._triggerAttach(displayedViews, 'before:');
        }

        this.attachHtml(view);
        this.currentView = view;

        if (attachedRegion && attachOptions.triggerAttach) {
          displayedViews = this._displayedViews(view);
          this._triggerAttach(displayedViews);
        }

        if (isChangingView) {
          this.triggerMethod('swap', view, this, options);
        }

        this.triggerMethod('show', view, this, options);
        Marionette.triggerMethodOn(view, 'show', view, this, options);

        return this;
      }

      return this;
    },

    triggerBeforeAttach: true,
    triggerAttach: true,

    _triggerAttach: function(views, prefix) {
      var eventName = (prefix || '') + 'attach';
      _.each(views, function(view) {
        Marionette.triggerMethodOn(view, eventName, view, this);
      }, this);
    },

    _displayedViews: function(view) {
      return _.union([view], _.result(view, '_getNestedViews') || []);
    },

    _renderView: function(view) {
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'before:render', view);
      }
      view.render();
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'render', view);
      }
    },

    _ensureElement: function() {
      if (!_.isObject(this.el)) {
        this.$el = this.getEl(this.el);
        this.el = this.$el[0];
      }

      if (!this.$el || this.$el.length === 0) {
        if (this.getOption('allowMissingEl')) {
          return false;
        } else {
          throw new Marionette.Error('An "el" ' + this.$el.selector + ' must exist in DOM');
        }
      }
      return true;
    },

    _ensureViewIsIntact: function(view) {
      if (!view) {
        throw new Marionette.Error({
          name: 'ViewNotValid',
          message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'
        });
      }

      if (view.isDestroyed) {
        throw new Marionette.Error({
          name: 'ViewDestroyedError',
          message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
        });
      }
    },

    // Override this method to change how the region finds the DOM
    // element that it manages. Return a jQuery selector object scoped
    // to a provided parent el or the document if none exists.
    getEl: function(el) {
      return Backbone.$(el, Marionette._getValue(this.options.parentEl, this));
    },

    // Override this method to change how the new view is
    // appended to the `$el` that the region is managing
    attachHtml: function(view) {
      this.$el.contents().detach();

      this.el.appendChild(view.el);
    },

    // Destroy the current view, if there is one. If there is no
    // current view, it does nothing and returns immediately.
    empty: function(options) {
      var view = this.currentView;

      var emptyOptions = options || {};
      var preventDestroy  = !!emptyOptions.preventDestroy;
      // If there is no view in the region
      // we should not remove anything
      if (!view) { return this; }

      view.off('destroy', this.empty, this);
      this.triggerMethod('before:empty', view);
      if (!preventDestroy) {
        this._destroyView();
      }
      this.triggerMethod('empty', view);

      // Remove region pointer to the currentView
      delete this.currentView;

      if (preventDestroy) {
        this.$el.contents().detach();
      }

      return this;
    },

    // call 'destroy' or 'remove', depending on which is found
    // on the view (if showing a raw Backbone view or a Marionette View)
    _destroyView: function() {
      var view = this.currentView;
      if (view.isDestroyed) { return; }

      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'before:destroy', view);
      }
      if (view.destroy) {
        view.destroy();
      } else {
        view.remove();

        // appending isDestroyed to raw Backbone View allows regions
        // to throw a ViewDestroyedError for this view
        view.isDestroyed = true;
      }
      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'destroy', view);
      }
    },

    // Attach an existing view to the region. This
    // will not call `render` or `onShow` for the new view,
    // and will not replace the current HTML for the `el`
    // of the region.
    attachView: function(view) {
      if (this.currentView) {
        delete this.currentView._parent;
      }
      view._parent = this;
      this.currentView = view;
      return this;
    },

    // Checks whether a view is currently present within
    // the region. Returns `true` if there is and `false` if
    // no view is present.
    hasView: function() {
      return !!this.currentView;
    },

    // Reset the region by destroying any existing view and
    // clearing out the cached `$el`. The next time a view
    // is shown via this region, the region will re-query the
    // DOM for the region's `el`.
    reset: function() {
      this.empty();

      if (this.$el) {
        this.el = this.$el.selector;
      }

      delete this.$el;
      return this;
    }

  },

  // Static Methods
  {

    // Build an instance of a region by passing in a configuration object
    // and a default region class to use if none is specified in the config.
    //
    // The config object should either be a string as a jQuery DOM selector,
    // a Region class directly, or an object literal that specifies a selector,
    // a custom regionClass, and any options to be supplied to the region:
    //
    // ```js
    // {
    //   selector: "#foo",
    //   regionClass: MyCustomRegion,
    //   allowMissingEl: false
    // }
    // ```
    //
    buildRegion: function(regionConfig, DefaultRegionClass) {
      if (_.isString(regionConfig)) {
        return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
      }

      if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
        return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
      }

      if (_.isFunction(regionConfig)) {
        return this._buildRegionFromRegionClass(regionConfig);
      }

      throw new Marionette.Error({
        message: 'Improper region configuration type.',
        url: 'marionette.region.html#region-configuration-types'
      });
    },

    // Build the region from a string selector like '#foo-region'
    _buildRegionFromSelector: function(selector, DefaultRegionClass) {
      return new DefaultRegionClass({el: selector});
    },

    // Build the region from a configuration object
    // ```js
    // { selector: '#foo', regionClass: FooRegion, allowMissingEl: false }
    // ```
    _buildRegionFromObject: function(regionConfig, DefaultRegionClass) {
      var RegionClass = regionConfig.regionClass || DefaultRegionClass;
      var options = _.omit(regionConfig, 'selector', 'regionClass');

      if (regionConfig.selector && !options.el) {
        options.el = regionConfig.selector;
      }

      return new RegionClass(options);
    },

    // Build the region directly from a given `RegionClass`
    _buildRegionFromRegionClass: function(RegionClass) {
      return new RegionClass();
    }
  });

  // Region Manager
  // --------------

  // Manage one or more related `Marionette.Region` objects.
  Marionette.RegionManager = Marionette.Controller.extend({
    constructor: function(options) {
      this._regions = {};
      this.length = 0;

      Marionette.Controller.call(this, options);

      this.addRegions(this.getOption('regions'));
    },

    // Add multiple regions using an object literal or a
    // function that returns an object literal, where
    // each key becomes the region name, and each value is
    // the region definition.
    addRegions: function(regionDefinitions, defaults) {
      regionDefinitions = Marionette._getValue(regionDefinitions, this, arguments);

      return _.reduce(regionDefinitions, function(regions, definition, name) {
        if (_.isString(definition)) {
          definition = {selector: definition};
        }
        if (definition.selector) {
          definition = _.defaults({}, definition, defaults);
        }

        regions[name] = this.addRegion(name, definition);
        return regions;
      }, {}, this);
    },

    // Add an individual region to the region manager,
    // and return the region instance
    addRegion: function(name, definition) {
      var region;

      if (definition instanceof Marionette.Region) {
        region = definition;
      } else {
        region = Marionette.Region.buildRegion(definition, Marionette.Region);
      }

      this.triggerMethod('before:add:region', name, region);

      region._parent = this;
      this._store(name, region);

      this.triggerMethod('add:region', name, region);
      return region;
    },

    // Get a region by name
    get: function(name) {
      return this._regions[name];
    },

    // Gets all the regions contained within
    // the `regionManager` instance.
    getRegions: function() {
      return _.clone(this._regions);
    },

    // Remove a region by name
    removeRegion: function(name) {
      var region = this._regions[name];
      this._remove(name, region);

      return region;
    },

    // Empty all regions in the region manager, and
    // remove them
    removeRegions: function() {
      var regions = this.getRegions();
      _.each(this._regions, function(region, name) {
        this._remove(name, region);
      }, this);

      return regions;
    },

    // Empty all regions in the region manager, but
    // leave them attached
    emptyRegions: function() {
      var regions = this.getRegions();
      _.invoke(regions, 'empty');
      return regions;
    },

    // Destroy all regions and shut down the region
    // manager entirely
    destroy: function() {
      this.removeRegions();
      return Marionette.Controller.prototype.destroy.apply(this, arguments);
    },

    // internal method to store regions
    _store: function(name, region) {
      if (!this._regions[name]) {
        this.length++;
      }

      this._regions[name] = region;
    },

    // internal method to remove a region
    _remove: function(name, region) {
      this.triggerMethod('before:remove:region', name, region);
      region.empty();
      region.stopListening();

      delete region._parent;
      delete this._regions[name];
      this.length--;
      this.triggerMethod('remove:region', name, region);
    }
  });

  Marionette.actAsCollection(Marionette.RegionManager.prototype, '_regions');


  // Template Cache
  // --------------

  // Manage templates stored in `<script>` blocks,
  // caching them for faster access.
  Marionette.TemplateCache = function(templateId) {
    this.templateId = templateId;
  };

  // TemplateCache object-level methods. Manage the template
  // caches from these method calls instead of creating
  // your own TemplateCache instances
  _.extend(Marionette.TemplateCache, {
    templateCaches: {},

    // Get the specified template by id. Either
    // retrieves the cached version, or loads it
    // from the DOM.
    get: function(templateId, options) {
      var cachedTemplate = this.templateCaches[templateId];

      if (!cachedTemplate) {
        cachedTemplate = new Marionette.TemplateCache(templateId);
        this.templateCaches[templateId] = cachedTemplate;
      }

      return cachedTemplate.load(options);
    },

    // Clear templates from the cache. If no arguments
    // are specified, clears all templates:
    // `clear()`
    //
    // If arguments are specified, clears each of the
    // specified templates from the cache:
    // `clear("#t1", "#t2", "...")`
    clear: function() {
      var i;
      var args = _.toArray(arguments);
      var length = args.length;

      if (length > 0) {
        for (i = 0; i < length; i++) {
          delete this.templateCaches[args[i]];
        }
      } else {
        this.templateCaches = {};
      }
    }
  });

  // TemplateCache instance methods, allowing each
  // template cache object to manage its own state
  // and know whether or not it has been loaded
  _.extend(Marionette.TemplateCache.prototype, {

    // Internal method to load the template
    load: function(options) {
      // Guard clause to prevent loading this template more than once
      if (this.compiledTemplate) {
        return this.compiledTemplate;
      }

      // Load the template and compile it
      var template = this.loadTemplate(this.templateId, options);
      this.compiledTemplate = this.compileTemplate(template, options);

      return this.compiledTemplate;
    },

    // Load a template from the DOM, by default. Override
    // this method to provide your own template retrieval
    // For asynchronous loading with AMD/RequireJS, consider
    // using a template-loader plugin as described here:
    // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
    loadTemplate: function(templateId, options) {
      var $template = Backbone.$(templateId);

      if (!$template.length) {
        throw new Marionette.Error({
          name: 'NoTemplateError',
          message: 'Could not find template: "' + templateId + '"'
        });
      }
      return $template.html();
    },

    // Pre-compile the template before caching it. Override
    // this method if you do not need to pre-compile a template
    // (JST / RequireJS for example) or if you want to change
    // the template engine used (Handebars, etc).
    compileTemplate: function(rawTemplate, options) {
      return _.template(rawTemplate, options);
    }
  });

  // Renderer
  // --------

  // Render a template with data by passing in the template
  // selector and the data to render.
  Marionette.Renderer = {

    // Render a template with data. The `template` parameter is
    // passed to the `TemplateCache` object to retrieve the
    // template function. Override this method to provide your own
    // custom rendering and template handling for all of Marionette.
    render: function(template, data) {
      if (!template) {
        throw new Marionette.Error({
          name: 'TemplateNotFoundError',
          message: 'Cannot render the template since its false, null or undefined.'
        });
      }

      var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);

      return templateFunc(data);
    }
  };


  /* jshint maxlen: 114, nonew: false */
  // View
  // ----

  // The core view class that other Marionette views extend from.
  Marionette.View = Backbone.View.extend({
    isDestroyed: false,
    supportsRenderLifecycle: true,
    supportsDestroyLifecycle: true,

    constructor: function(options) {
      this.render = _.bind(this.render, this);

      options = Marionette._getValue(options, this);

      // this exposes view options to the view initializer
      // this is a backfill since backbone removed the assignment
      // of this.options
      // at some point however this may be removed
      this.options = _.extend({}, _.result(this, 'options'), options);

      this._behaviors = Marionette.Behaviors(this);

      Backbone.View.call(this, this.options);

      Marionette.MonitorDOMRefresh(this);
    },

    // Get the template for this view
    // instance. You can set a `template` attribute in the view
    // definition or pass a `template: "whatever"` parameter in
    // to the constructor options.
    getTemplate: function() {
      return this.getOption('template');
    },

    // Serialize a model by returning its attributes. Clones
    // the attributes to allow modification.
    serializeModel: function(model) {
      return model.toJSON.apply(model, _.rest(arguments));
    },

    // Mix in template helper methods. Looks for a
    // `templateHelpers` attribute, which can either be an
    // object literal, or a function that returns an object
    // literal. All methods and attributes from this object
    // are copies to the object passed in.
    mixinTemplateHelpers: function(target) {
      target = target || {};
      var templateHelpers = this.getOption('templateHelpers');
      templateHelpers = Marionette._getValue(templateHelpers, this);
      return _.extend(target, templateHelpers);
    },

    // normalize the keys of passed hash with the views `ui` selectors.
    // `{"@ui.foo": "bar"}`
    normalizeUIKeys: function(hash) {
      var uiBindings = _.result(this, '_uiBindings');
      return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'));
    },

    // normalize the values of passed hash with the views `ui` selectors.
    // `{foo: "@ui.bar"}`
    normalizeUIValues: function(hash, properties) {
      var ui = _.result(this, 'ui');
      var uiBindings = _.result(this, '_uiBindings');
      return Marionette.normalizeUIValues(hash, uiBindings || ui, properties);
    },

    // Configure `triggers` to forward DOM events to view
    // events. `triggers: {"click .foo": "do:foo"}`
    configureTriggers: function() {
      if (!this.triggers) { return; }

      // Allow `triggers` to be configured as a function
      var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));

      // Configure the triggers, prevent default
      // action and stop propagation of DOM events
      return _.reduce(triggers, function(events, value, key) {
        events[key] = this._buildViewTrigger(value);
        return events;
      }, {}, this);
    },

    // Overriding Backbone.View's delegateEvents to handle
    // the `triggers`, `modelEvents`, and `collectionEvents` configuration
    delegateEvents: function(events) {
      this._delegateDOMEvents(events);
      this.bindEntityEvents(this.model, this.getOption('modelEvents'));
      this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));

      _.each(this._behaviors, function(behavior) {
        behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
        behavior.bindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
      }, this);

      return this;
    },

    // internal method to delegate DOM events and triggers
    _delegateDOMEvents: function(eventsArg) {
      var events = Marionette._getValue(eventsArg || this.events, this);

      // normalize ui keys
      events = this.normalizeUIKeys(events);
      if (_.isUndefined(eventsArg)) {this.events = events;}

      var combinedEvents = {};

      // look up if this view has behavior events
      var behaviorEvents = _.result(this, 'behaviorEvents') || {};
      var triggers = this.configureTriggers();
      var behaviorTriggers = _.result(this, 'behaviorTriggers') || {};

      // behavior events will be overriden by view events and or triggers
      _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);

      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
    },

    // Overriding Backbone.View's undelegateEvents to handle unbinding
    // the `triggers`, `modelEvents`, and `collectionEvents` config
    undelegateEvents: function() {
      Backbone.View.prototype.undelegateEvents.apply(this, arguments);

      this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
      this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));

      _.each(this._behaviors, function(behavior) {
        behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
        behavior.unbindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
      }, this);

      return this;
    },

    // Internal helper method to verify whether the view hasn't been destroyed
    _ensureViewIsIntact: function() {
      if (this.isDestroyed) {
        throw new Marionette.Error({
          name: 'ViewDestroyedError',
          message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
        });
      }
    },

    // Default `destroy` implementation, for removing a view from the
    // DOM and unbinding it. Regions will call this method
    // for you. You can specify an `onDestroy` method in your view to
    // add custom code that is called after the view is destroyed.
    destroy: function() {
      if (this.isDestroyed) { return this; }

      var args = _.toArray(arguments);

      this.triggerMethod.apply(this, ['before:destroy'].concat(args));

      // mark as destroyed before doing the actual destroy, to
      // prevent infinite loops within "destroy" event handlers
      // that are trying to destroy other views
      this.isDestroyed = true;
      this.triggerMethod.apply(this, ['destroy'].concat(args));

      // unbind UI elements
      this.unbindUIElements();

      this.isRendered = false;

      // remove the view from the DOM
      this.remove();

      // Call destroy on each behavior after
      // destroying the view.
      // This unbinds event listeners
      // that behaviors have registered for.
      _.invoke(this._behaviors, 'destroy', args);

      return this;
    },

    bindUIElements: function() {
      this._bindUIElements();
      _.invoke(this._behaviors, this._bindUIElements);
    },

    // This method binds the elements specified in the "ui" hash inside the view's code with
    // the associated jQuery selectors.
    _bindUIElements: function() {
      if (!this.ui) { return; }

      // store the ui hash in _uiBindings so they can be reset later
      // and so re-rendering the view will be able to find the bindings
      if (!this._uiBindings) {
        this._uiBindings = this.ui;
      }

      // get the bindings result, as a function or otherwise
      var bindings = _.result(this, '_uiBindings');

      // empty the ui so we don't have anything to start with
      this.ui = {};

      // bind each of the selectors
      _.each(bindings, function(selector, key) {
        this.ui[key] = this.$(selector);
      }, this);
    },

    // This method unbinds the elements specified in the "ui" hash
    unbindUIElements: function() {
      this._unbindUIElements();
      _.invoke(this._behaviors, this._unbindUIElements);
    },

    _unbindUIElements: function() {
      if (!this.ui || !this._uiBindings) { return; }

      // delete all of the existing ui bindings
      _.each(this.ui, function($el, name) {
        delete this.ui[name];
      }, this);

      // reset the ui element to the original bindings configuration
      this.ui = this._uiBindings;
      delete this._uiBindings;
    },

    // Internal method to create an event handler for a given `triggerDef` like
    // 'click:foo'
    _buildViewTrigger: function(triggerDef) {

      var options = _.defaults({}, triggerDef, {
        preventDefault: true,
        stopPropagation: true
      });

      var eventName = _.isObject(triggerDef) ? options.event : triggerDef;

      return function(e) {
        if (e) {
          if (e.preventDefault && options.preventDefault) {
            e.preventDefault();
          }

          if (e.stopPropagation && options.stopPropagation) {
            e.stopPropagation();
          }
        }

        var args = {
          view: this,
          model: this.model,
          collection: this.collection
        };

        this.triggerMethod(eventName, args);
      };
    },

    setElement: function() {
      var ret = Backbone.View.prototype.setElement.apply(this, arguments);

      // proxy behavior $el to the view's $el.
      // This is needed because a view's $el proxy
      // is not set until after setElement is called.
      _.invoke(this._behaviors, 'proxyViewProperties', this);

      return ret;
    },

    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: function() {
      var ret = Marionette._triggerMethod(this, arguments);

      this._triggerEventOnBehaviors(arguments);
      this._triggerEventOnParentLayout(arguments[0], _.rest(arguments));

      return ret;
    },

    _triggerEventOnBehaviors: function(args) {
      var triggerMethod = Marionette._triggerMethod;
      var behaviors = this._behaviors;
      // Use good ol' for as this is a very hot function
      for (var i = 0, length = behaviors && behaviors.length; i < length; i++) {
        triggerMethod(behaviors[i], args);
      }
    },

    _triggerEventOnParentLayout: function(eventName, args) {
      var layoutView = this._parentLayoutView();
      if (!layoutView) {
        return;
      }

      // invoke triggerMethod on parent view
      var eventPrefix = Marionette.getOption(layoutView, 'childViewEventPrefix');
      var prefixedEventName = eventPrefix + ':' + eventName;
      var callArgs = [this].concat(args);

      Marionette._triggerMethod(layoutView, prefixedEventName, callArgs);

      // call the parent view's childEvents handler
      var childEvents = Marionette.getOption(layoutView, 'childEvents');

      // since childEvents can be an object or a function use Marionette._getValue
      // to handle the abstaction for us.
      childEvents = Marionette._getValue(childEvents, layoutView);
      var normalizedChildEvents = layoutView.normalizeMethods(childEvents);

      if (normalizedChildEvents && _.isFunction(normalizedChildEvents[eventName])) {
        normalizedChildEvents[eventName].apply(layoutView, callArgs);
      }
    },

    // This method returns any views that are immediate
    // children of this view
    _getImmediateChildren: function() {
      return [];
    },

    // Returns an array of every nested view within this view
    _getNestedViews: function() {
      var children = this._getImmediateChildren();

      if (!children.length) { return children; }

      return _.reduce(children, function(memo, view) {
        if (!view._getNestedViews) { return memo; }
        return memo.concat(view._getNestedViews());
      }, children);
    },

    // Walk the _parent tree until we find a layout view (if one exists).
    // Returns the parent layout view hierarchically closest to this view.
    _parentLayoutView: function() {
      var parent  = this._parent;

      while (parent) {
        if (parent instanceof Marionette.LayoutView) {
          return parent;
        }
        parent = parent._parent;
      }
    },

    // Imports the "normalizeMethods" to transform hashes of
    // events=>function references/names to a hash of events=>function references
    normalizeMethods: Marionette.normalizeMethods,

    // A handy way to merge passed-in options onto the instance
    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,

    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
    bindEntityEvents: Marionette.proxyBindEntityEvents,

    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
  });

  // Item View
  // ---------

  // A single item view implementation that contains code for rendering
  // with underscore.js templates, serializing the view's model or collection,
  // and calling several methods on extended views, such as `onRender`.
  Marionette.ItemView = Marionette.View.extend({

    // Setting up the inheritance chain which allows changes to
    // Marionette.View.prototype.constructor which allows overriding
    constructor: function() {
      Marionette.View.apply(this, arguments);
    },

    // Serialize the model or collection for the view. If a model is
    // found, the view's `serializeModel` is called. If a collection is found,
    // each model in the collection is serialized by calling
    // the view's `serializeCollection` and put into an `items` array in
    // the resulting data. If both are found, defaults to the model.
    // You can override the `serializeData` method in your own view definition,
    // to provide custom serialization for your view's data.
    serializeData: function() {
      if (!this.model && !this.collection) {
        return {};
      }

      var args = [this.model || this.collection];
      if (arguments.length) {
        args.push.apply(args, arguments);
      }

      if (this.model) {
        return this.serializeModel.apply(this, args);
      } else {
        return {
          items: this.serializeCollection.apply(this, args)
        };
      }
    },

    // Serialize a collection by serializing each of its models.
    serializeCollection: function(collection) {
      return collection.toJSON.apply(collection, _.rest(arguments));
    },

    // Render the view, defaulting to underscore.js templates.
    // You can override this in your view definition to provide
    // a very specific rendering for your view. In general, though,
    // you should override the `Marionette.Renderer` object to
    // change how Marionette renders views.
    render: function() {
      this._ensureViewIsIntact();

      this.triggerMethod('before:render', this);

      this._renderTemplate();
      this.isRendered = true;
      this.bindUIElements();

      this.triggerMethod('render', this);

      return this;
    },

    // Internal method to render the template with the serialized data
    // and template helpers via the `Marionette.Renderer` object.
    // Throws an `UndefinedTemplateError` error if the template is
    // any falsely value but literal `false`.
    _renderTemplate: function() {
      var template = this.getTemplate();

      // Allow template-less item views
      if (template === false) {
        return;
      }

      if (!template) {
        throw new Marionette.Error({
          name: 'UndefinedTemplateError',
          message: 'Cannot render the template since it is null or undefined.'
        });
      }

      // Add in entity data and template helpers
      var data = this.mixinTemplateHelpers(this.serializeData());

      // Render and add to el
      var html = Marionette.Renderer.render(template, data, this);
      this.attachElContent(html);

      return this;
    },

    // Attaches the content of a given view.
    // This method can be overridden to optimize rendering,
    // or to render in a non standard way.
    //
    // For example, using `innerHTML` instead of `$el.html`
    //
    // ```js
    // attachElContent: function(html) {
    //   this.el.innerHTML = html;
    //   return this;
    // }
    // ```
    attachElContent: function(html) {
      this.$el.html(html);

      return this;
    }
  });

  /* jshint maxstatements: 20, maxcomplexity: 7 */

  // Collection View
  // ---------------

  // A view that iterates over a Backbone.Collection
  // and renders an individual child view for each model.
  Marionette.CollectionView = Marionette.View.extend({

    // used as the prefix for child view events
    // that are forwarded through the collectionview
    childViewEventPrefix: 'childview',

    // flag for maintaining the sorted order of the collection
    sort: true,

    // constructor
    // option to pass `{sort: false}` to prevent the `CollectionView` from
    // maintaining the sorted order of the collection.
    // This will fallback onto appending childView's to the end.
    //
    // option to pass `{comparator: compFunction()}` to allow the `CollectionView`
    // to use a custom sort order for the collection.
    constructor: function(options) {
      this.once('render', this._initialEvents);
      this._initChildViewStorage();

      Marionette.View.apply(this, arguments);

      this.on({
        'before:show':   this._onBeforeShowCalled,
        'show':          this._onShowCalled,
        'before:attach': this._onBeforeAttachCalled,
        'attach':        this._onAttachCalled
      });
      this.initRenderBuffer();
    },

    // Instead of inserting elements one by one into the page,
    // it's much more performant to insert elements into a document
    // fragment and then insert that document fragment into the page
    initRenderBuffer: function() {
      this._bufferedChildren = [];
    },

    startBuffering: function() {
      this.initRenderBuffer();
      this.isBuffering = true;
    },

    endBuffering: function() {
      // Only trigger attach if already shown and attached, otherwise Region#show() handles this.
      var canTriggerAttach = this._isShown && Marionette.isNodeAttached(this.el);
      var nestedViews;

      this.isBuffering = false;

      if (this._isShown) {
        this._triggerMethodMany(this._bufferedChildren, this, 'before:show');
      }
      if (canTriggerAttach && this._triggerBeforeAttach) {
        nestedViews = this._getNestedViews();
        this._triggerMethodMany(nestedViews, this, 'before:attach');
      }

      this.attachBuffer(this, this._createBuffer());

      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getNestedViews();
        this._triggerMethodMany(nestedViews, this, 'attach');
      }
      if (this._isShown) {
        this._triggerMethodMany(this._bufferedChildren, this, 'show');
      }
      this.initRenderBuffer();
    },

    _triggerMethodMany: function(targets, source, eventName) {
      var args = _.drop(arguments, 3);

      _.each(targets, function(target) {
        Marionette.triggerMethodOn.apply(target, [target, eventName, target, source].concat(args));
      });
    },

    // Configured the initial events that the collection view
    // binds to.
    _initialEvents: function() {
      if (this.collection) {
        this.listenTo(this.collection, 'add', this._onCollectionAdd);
        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
        this.listenTo(this.collection, 'reset', this.render);

        if (this.getOption('sort')) {
          this.listenTo(this.collection, 'sort', this._sortViews);
        }
      }
    },

    // Handle a child added to the collection
    _onCollectionAdd: function(child, collection, opts) {
      // `index` is present when adding with `at` since BB 1.2; indexOf fallback for < 1.2
      var index = opts.at !== undefined && (opts.index || collection.indexOf(child));

      // When filtered or when there is no initial index, calculate index.
      if (this.getOption('filter') || index === false) {
        index = _.indexOf(this._filteredSortedModels(index), child);
      }

      if (this._shouldAddChild(child, index)) {
        this.destroyEmptyView();
        var ChildView = this.getChildView(child);
        this.addChild(child, ChildView, index);
      }
    },

    // get the child view by model it holds, and remove it
    _onCollectionRemove: function(model) {
      var view = this.children.findByModel(model);
      this.removeChildView(view);
      this.checkEmpty();
    },

    _onBeforeShowCalled: function() {
      // Reset attach event flags at the top of the Region#show() event lifecycle; if the Region's
      // show() options permit onBeforeAttach/onAttach events, these flags will be set true again.
      this._triggerBeforeAttach = this._triggerAttach = false;
      this.children.each(function(childView) {
        Marionette.triggerMethodOn(childView, 'before:show', childView);
      });
    },

    _onShowCalled: function() {
      this.children.each(function(childView) {
        Marionette.triggerMethodOn(childView, 'show', childView);
      });
    },

    // If during Region#show() onBeforeAttach was fired, continue firing it for child views
    _onBeforeAttachCalled: function() {
      this._triggerBeforeAttach = true;
    },

    // If during Region#show() onAttach was fired, continue firing it for child views
    _onAttachCalled: function() {
      this._triggerAttach = true;
    },

    // Render children views. Override this method to
    // provide your own implementation of a render function for
    // the collection view.
    render: function() {
      this._ensureViewIsIntact();
      this.triggerMethod('before:render', this);
      this._renderChildren();
      this.isRendered = true;
      this.triggerMethod('render', this);
      return this;
    },

    // Reorder DOM after sorting. When your element's rendering
    // do not use their index, you can pass reorderOnSort: true
    // to only reorder the DOM after a sort instead of rendering
    // all the collectionView
    reorder: function() {
      var children = this.children;
      var models = this._filteredSortedModels();
      var anyModelsAdded = _.some(models, function(model) {
        return !children.findByModel(model);
      });

      // If there are any new models added due to filtering
      // We need to add child views
      // So render as normal
      if (anyModelsAdded) {
        this.render();
      } else {
        // get the DOM nodes in the same order as the models
        var elsToReorder = _.map(models, function(model, index) {
          var view = children.findByModel(model);
          view._index = index;
          return view.el;
        });

        // find the views that were children before but arent in this new ordering
        var filteredOutViews = children.filter(function(view) {
          return !_.contains(elsToReorder, view.el);
        });

        this.triggerMethod('before:reorder');

        // since append moves elements that are already in the DOM,
        // appending the elements will effectively reorder them
        this._appendReorderedChildren(elsToReorder);

        // remove any views that have been filtered out
        _.each(filteredOutViews, this.removeChildView, this);
        this.checkEmpty();

        this.triggerMethod('reorder');
      }
    },

    // Render view after sorting. Override this method to
    // change how the view renders after a `sort` on the collection.
    // An example of this would be to only `renderChildren` in a `CompositeView`
    // rather than the full view.
    resortView: function() {
      if (Marionette.getOption(this, 'reorderOnSort')) {
        this.reorder();
      } else {
        this.render();
      }
    },

    // Internal method. This checks for any changes in the order of the collection.
    // If the index of any view doesn't match, it will render.
    _sortViews: function() {
      var models = this._filteredSortedModels();

      // check for any changes in sort order of views
      var orderChanged = _.find(models, function(item, index) {
        var view = this.children.findByModel(item);
        return !view || view._index !== index;
      }, this);

      if (orderChanged) {
        this.resortView();
      }
    },

    // Internal reference to what index a `emptyView` is.
    _emptyViewIndex: -1,

    // Internal method. Separated so that CompositeView can append to the childViewContainer
    // if necessary
    _appendReorderedChildren: function(children) {
      this.$el.append(children);
    },

    // Internal method. Separated so that CompositeView can have
    // more control over events being triggered, around the rendering
    // process
    _renderChildren: function() {
      this.destroyEmptyView();
      this.destroyChildren({checkEmpty: false});

      if (this.isEmpty(this.collection)) {
        this.showEmptyView();
      } else {
        this.triggerMethod('before:render:collection', this);
        this.startBuffering();
        this.showCollection();
        this.endBuffering();
        this.triggerMethod('render:collection', this);

        // If we have shown children and none have passed the filter, show the empty view
        if (this.children.isEmpty() && this.getOption('filter')) {
          this.showEmptyView();
        }
      }
    },

    // Internal method to loop through collection and show each child view.
    showCollection: function() {
      var ChildView;

      var models = this._filteredSortedModels();

      _.each(models, function(child, index) {
        ChildView = this.getChildView(child);
        this.addChild(child, ChildView, index);
      }, this);
    },

    // Allow the collection to be sorted by a custom view comparator
    _filteredSortedModels: function(addedAt) {
      var viewComparator = this.getViewComparator();
      var models = this.collection.models;
      addedAt = Math.min(Math.max(addedAt, 0), models.length - 1);

      if (viewComparator) {
        var addedModel;
        // Preserve `at` location, even for a sorted view
        if (addedAt) {
          addedModel = models[addedAt];
          models = models.slice(0, addedAt).concat(models.slice(addedAt + 1));
        }
        models = this._sortModelsBy(models, viewComparator);
        if (addedModel) {
          models.splice(addedAt, 0, addedModel);
        }
      }

      // Filter after sorting in case the filter uses the index
      if (this.getOption('filter')) {
        models = _.filter(models, function(model, index) {
          return this._shouldAddChild(model, index);
        }, this);
      }

      return models;
    },

    _sortModelsBy: function(models, comparator) {
      if (typeof comparator === 'string') {
        return _.sortBy(models, function(model) {
          return model.get(comparator);
        }, this);
      } else if (comparator.length === 1) {
        return _.sortBy(models, comparator, this);
      } else {
        return models.sort(_.bind(comparator, this));
      }
    },

    // Internal method to show an empty view in place of
    // a collection of child views, when the collection is empty
    showEmptyView: function() {
      var EmptyView = this.getEmptyView();

      if (EmptyView && !this._showingEmptyView) {
        this.triggerMethod('before:render:empty');

        this._showingEmptyView = true;
        var model = new Backbone.Model();
        this.addEmptyView(model, EmptyView);

        this.triggerMethod('render:empty');
      }
    },

    // Internal method to destroy an existing emptyView instance
    // if one exists. Called when a collection view has been
    // rendered empty, and then a child is added to the collection.
    destroyEmptyView: function() {
      if (this._showingEmptyView) {
        this.triggerMethod('before:remove:empty');

        this.destroyChildren();
        delete this._showingEmptyView;

        this.triggerMethod('remove:empty');
      }
    },

    // Retrieve the empty view class
    getEmptyView: function() {
      return this.getOption('emptyView');
    },

    // Render and show the emptyView. Similar to addChild method
    // but "add:child" events are not fired, and the event from
    // emptyView are not forwarded
    addEmptyView: function(child, EmptyView) {
      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
      // Region#show() handles this.
      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
      var nestedViews;

      // get the emptyViewOptions, falling back to childViewOptions
      var emptyViewOptions = this.getOption('emptyViewOptions') ||
                            this.getOption('childViewOptions');

      if (_.isFunction(emptyViewOptions)) {
        emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex);
      }

      // build the empty view
      var view = this.buildChildView(child, EmptyView, emptyViewOptions);

      view._parent = this;

      // Proxy emptyView events
      this.proxyChildEvents(view);

      view.once('render', function() {
        // trigger the 'before:show' event on `view` if the collection view has already been shown
        if (this._isShown) {
          Marionette.triggerMethodOn(view, 'before:show', view);
        }

        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
        // to public method `renderChildView()`.
        if (canTriggerAttach && this._triggerBeforeAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'before:attach');
        }
      }, this);

      // Store the `emptyView` like a `childView` so we can properly remove and/or close it later
      this.children.add(view);
      this.renderChildView(view, this._emptyViewIndex);

      // Trigger `attach`
      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getViewAndNested(view);
        this._triggerMethodMany(nestedViews, this, 'attach');
      }
      // call the 'show' method if the collection view has already been shown
      if (this._isShown) {
        Marionette.triggerMethodOn(view, 'show', view);
      }
    },

    // Retrieve the `childView` class, either from `this.options.childView`
    // or from the `childView` in the object definition. The "options"
    // takes precedence.
    // This method receives the model that will be passed to the instance
    // created from this `childView`. Overriding methods may use the child
    // to determine what `childView` class to return.
    getChildView: function(child) {
      var childView = this.getOption('childView');

      if (!childView) {
        throw new Marionette.Error({
          name: 'NoChildViewError',
          message: 'A "childView" must be specified'
        });
      }

      return childView;
    },

    // Render the child's view and add it to the
    // HTML for the collection view at a given index.
    // This will also update the indices of later views in the collection
    // in order to keep the children in sync with the collection.
    addChild: function(child, ChildView, index) {
      var childViewOptions = this.getOption('childViewOptions');
      childViewOptions = Marionette._getValue(childViewOptions, this, [child, index]);

      var view = this.buildChildView(child, ChildView, childViewOptions);

      // increment indices of views after this one
      this._updateIndices(view, true, index);

      this.triggerMethod('before:add:child', view);
      this._addChildView(view, index);
      this.triggerMethod('add:child', view);

      view._parent = this;

      return view;
    },

    // Internal method. This decrements or increments the indices of views after the
    // added/removed view to keep in sync with the collection.
    _updateIndices: function(view, increment, index) {
      if (!this.getOption('sort')) {
        return;
      }

      if (increment) {
        // assign the index to the view
        view._index = index;
      }

      // update the indexes of views after this one
      this.children.each(function(laterView) {
        if (laterView._index >= view._index) {
          laterView._index += increment ? 1 : -1;
        }
      });
    },

    // Internal Method. Add the view to children and render it at
    // the given index.
    _addChildView: function(view, index) {
      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
      // Region#show() handles this.
      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
      var nestedViews;

      // set up the child view event forwarding
      this.proxyChildEvents(view);

      view.once('render', function() {
        // trigger the 'before:show' event on `view` if the collection view has already been shown
        if (this._isShown && !this.isBuffering) {
          Marionette.triggerMethodOn(view, 'before:show', view);
        }

        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
        // to public method `renderChildView()`.
        if (canTriggerAttach && this._triggerBeforeAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'before:attach');
        }
      }, this);

      // Store the child view itself so we can properly remove and/or destroy it later
      this.children.add(view);
      this.renderChildView(view, index);

      // Trigger `attach`
      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getViewAndNested(view);
        this._triggerMethodMany(nestedViews, this, 'attach');
      }
      // Trigger `show`
      if (this._isShown && !this.isBuffering) {
        Marionette.triggerMethodOn(view, 'show', view);
      }
    },

    // render the child view
    renderChildView: function(view, index) {
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'before:render', view);
      }
      view.render();
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'render', view);
      }
      this.attachHtml(this, view, index);
      return view;
    },

    // Build a `childView` for a model in the collection.
    buildChildView: function(child, ChildViewClass, childViewOptions) {
      var options = _.extend({model: child}, childViewOptions);
      var childView = new ChildViewClass(options);
      Marionette.MonitorDOMRefresh(childView);
      return childView;
    },

    // Remove the child view and destroy it.
    // This function also updates the indices of
    // later views in the collection in order to keep
    // the children in sync with the collection.
    removeChildView: function(view) {
      if (!view) { return view; }

      this.triggerMethod('before:remove:child', view);

      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'before:destroy', view);
      }
      // call 'destroy' or 'remove', depending on which is found
      if (view.destroy) {
        view.destroy();
      } else {
        view.remove();
      }
      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'destroy', view);
      }

      delete view._parent;
      this.stopListening(view);
      this.children.remove(view);
      this.triggerMethod('remove:child', view);

      // decrement the index of views after this one
      this._updateIndices(view, false);

      return view;
    },

    // check if the collection is empty
    isEmpty: function() {
      return !this.collection || this.collection.length === 0;
    },

    // If empty, show the empty view
    checkEmpty: function() {
      if (this.isEmpty(this.collection)) {
        this.showEmptyView();
      }
    },

    // You might need to override this if you've overridden attachHtml
    attachBuffer: function(collectionView, buffer) {
      collectionView.$el.append(buffer);
    },

    // Create a fragment buffer from the currently buffered children
    _createBuffer: function() {
      var elBuffer = document.createDocumentFragment();
      _.each(this._bufferedChildren, function(b) {
        elBuffer.appendChild(b.el);
      });
      return elBuffer;
    },

    // Append the HTML to the collection's `el`.
    // Override this method to do something other
    // than `.append`.
    attachHtml: function(collectionView, childView, index) {
      if (collectionView.isBuffering) {
        // buffering happens on reset events and initial renders
        // in order to reduce the number of inserts into the
        // document, which are expensive.
        collectionView._bufferedChildren.splice(index, 0, childView);
      } else {
        // If we've already rendered the main collection, append
        // the new child into the correct order if we need to. Otherwise
        // append to the end.
        if (!collectionView._insertBefore(childView, index)) {
          collectionView._insertAfter(childView);
        }
      }
    },

    // Internal method. Check whether we need to insert the view into
    // the correct position.
    _insertBefore: function(childView, index) {
      var currentView;
      var findPosition = this.getOption('sort') && (index < this.children.length - 1);
      if (findPosition) {
        // Find the view after this one
        currentView = this.children.find(function(view) {
          return view._index === index + 1;
        });
      }

      if (currentView) {
        currentView.$el.before(childView.el);
        return true;
      }

      return false;
    },

    // Internal method. Append a view to the end of the $el
    _insertAfter: function(childView) {
      this.$el.append(childView.el);
    },

    // Internal method to set up the `children` object for
    // storing all of the child views
    _initChildViewStorage: function() {
      this.children = new Backbone.ChildViewContainer();
    },

    // Handle cleanup and other destroying needs for the collection of views
    destroy: function() {
      if (this.isDestroyed) { return this; }

      this.triggerMethod('before:destroy:collection');
      this.destroyChildren({checkEmpty: false});
      this.triggerMethod('destroy:collection');

      return Marionette.View.prototype.destroy.apply(this, arguments);
    },

    // Destroy the child views that this collection view
    // is holding on to, if any
    destroyChildren: function(options) {
      var destroyOptions = options || {};
      var shouldCheckEmpty = true;
      var childViews = this.children.map(_.identity);

      if (!_.isUndefined(destroyOptions.checkEmpty)) {
        shouldCheckEmpty = destroyOptions.checkEmpty;
      }

      this.children.each(this.removeChildView, this);

      if (shouldCheckEmpty) {
        this.checkEmpty();
      }
      return childViews;
    },

    // Return true if the given child should be shown
    // Return false otherwise
    // The filter will be passed (child, index, collection)
    // Where
    //  'child' is the given model
    //  'index' is the index of that model in the collection
    //  'collection' is the collection referenced by this CollectionView
    _shouldAddChild: function(child, index) {
      var filter = this.getOption('filter');
      return !_.isFunction(filter) || filter.call(this, child, index, this.collection);
    },

    // Set up the child view event forwarding. Uses a "childview:"
    // prefix in front of all forwarded events.
    proxyChildEvents: function(view) {
      var prefix = this.getOption('childViewEventPrefix');

      // Forward all child view events through the parent,
      // prepending "childview:" to the event name
      this.listenTo(view, 'all', function() {
        var args = _.toArray(arguments);
        var rootEvent = args[0];
        var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));

        args[0] = prefix + ':' + rootEvent;
        args.splice(1, 0, view);

        // call collectionView childEvent if defined
        if (typeof childEvents !== 'undefined' && _.isFunction(childEvents[rootEvent])) {
          childEvents[rootEvent].apply(this, args.slice(1));
        }

        this.triggerMethod.apply(this, args);
      });
    },

    _getImmediateChildren: function() {
      return _.values(this.children._views);
    },

    _getViewAndNested: function(view) {
      // This will not fail on Backbone.View which does not have #_getNestedViews.
      return [view].concat(_.result(view, '_getNestedViews') || []);
    },

    getViewComparator: function() {
      return this.getOption('viewComparator');
    }
  });

  /* jshint maxstatements: 17, maxlen: 117 */

  // Composite View
  // --------------

  // Used for rendering a branch-leaf, hierarchical structure.
  // Extends directly from CollectionView and also renders an
  // a child view as `modelView`, for the top leaf
  Marionette.CompositeView = Marionette.CollectionView.extend({

    // Setting up the inheritance chain which allows changes to
    // Marionette.CollectionView.prototype.constructor which allows overriding
    // option to pass '{sort: false}' to prevent the CompositeView from
    // maintaining the sorted order of the collection.
    // This will fallback onto appending childView's to the end.
    constructor: function() {
      Marionette.CollectionView.apply(this, arguments);
    },

    // Configured the initial events that the composite view
    // binds to. Override this method to prevent the initial
    // events, or to add your own initial events.
    _initialEvents: function() {

      // Bind only after composite view is rendered to avoid adding child views
      // to nonexistent childViewContainer

      if (this.collection) {
        this.listenTo(this.collection, 'add', this._onCollectionAdd);
        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
        this.listenTo(this.collection, 'reset', this._renderChildren);

        if (this.getOption('sort')) {
          this.listenTo(this.collection, 'sort', this._sortViews);
        }
      }
    },

    // Retrieve the `childView` to be used when rendering each of
    // the items in the collection. The default is to return
    // `this.childView` or Marionette.CompositeView if no `childView`
    // has been defined
    getChildView: function(child) {
      var childView = this.getOption('childView') || this.constructor;

      return childView;
    },

    // Serialize the model for the view.
    // You can override the `serializeData` method in your own view
    // definition, to provide custom serialization for your view's data.
    serializeData: function() {
      var data = {};

      if (this.model) {
        data = _.partial(this.serializeModel, this.model).apply(this, arguments);
      }

      return data;
    },

    // Renders the model and the collection.
    render: function() {
      this._ensureViewIsIntact();
      this._isRendering = true;
      this.resetChildViewContainer();

      this.triggerMethod('before:render', this);

      this._renderTemplate();
      this._renderChildren();

      this._isRendering = false;
      this.isRendered = true;
      this.triggerMethod('render', this);
      return this;
    },

    _renderChildren: function() {
      if (this.isRendered || this._isRendering) {
        Marionette.CollectionView.prototype._renderChildren.call(this);
      }
    },

    // Render the root template that the children
    // views are appended to
    _renderTemplate: function() {
      var data = {};
      data = this.serializeData();
      data = this.mixinTemplateHelpers(data);

      this.triggerMethod('before:render:template');

      var template = this.getTemplate();
      var html = Marionette.Renderer.render(template, data, this);
      this.attachElContent(html);

      // the ui bindings is done here and not at the end of render since they
      // will not be available until after the model is rendered, but should be
      // available before the collection is rendered.
      this.bindUIElements();
      this.triggerMethod('render:template');
    },

    // Attaches the content of the root.
    // This method can be overridden to optimize rendering,
    // or to render in a non standard way.
    //
    // For example, using `innerHTML` instead of `$el.html`
    //
    // ```js
    // attachElContent: function(html) {
    //   this.el.innerHTML = html;
    //   return this;
    // }
    // ```
    attachElContent: function(html) {
      this.$el.html(html);

      return this;
    },

    // You might need to override this if you've overridden attachHtml
    attachBuffer: function(compositeView, buffer) {
      var $container = this.getChildViewContainer(compositeView);
      $container.append(buffer);
    },

    // Internal method. Append a view to the end of the $el.
    // Overidden from CollectionView to ensure view is appended to
    // childViewContainer
    _insertAfter: function(childView) {
      var $container = this.getChildViewContainer(this, childView);
      $container.append(childView.el);
    },

    // Internal method. Append reordered childView'.
    // Overidden from CollectionView to ensure reordered views
    // are appended to childViewContainer
    _appendReorderedChildren: function(children) {
      var $container = this.getChildViewContainer(this);
      $container.append(children);
    },

    // Internal method to ensure an `$childViewContainer` exists, for the
    // `attachHtml` method to use.
    getChildViewContainer: function(containerView, childView) {
      if (!!containerView.$childViewContainer) {
        return containerView.$childViewContainer;
      }

      var container;
      var childViewContainer = Marionette.getOption(containerView, 'childViewContainer');
      if (childViewContainer) {

        var selector = Marionette._getValue(childViewContainer, containerView);

        if (selector.charAt(0) === '@' && containerView.ui) {
          container = containerView.ui[selector.substr(4)];
        } else {
          container = containerView.$(selector);
        }

        if (container.length <= 0) {
          throw new Marionette.Error({
            name: 'ChildViewContainerMissingError',
            message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
          });
        }

      } else {
        container = containerView.$el;
      }

      containerView.$childViewContainer = container;
      return container;
    },

    // Internal method to reset the `$childViewContainer` on render
    resetChildViewContainer: function() {
      if (this.$childViewContainer) {
        this.$childViewContainer = undefined;
      }
    }
  });

  // Layout View
  // -----------

  // Used for managing application layoutViews, nested layoutViews and
  // multiple regions within an application or sub-application.
  //
  // A specialized view class that renders an area of HTML and then
  // attaches `Region` instances to the specified `regions`.
  // Used for composite view management and sub-application areas.
  Marionette.LayoutView = Marionette.ItemView.extend({
    regionClass: Marionette.Region,

    options: {
      destroyImmediate: false
    },

    // used as the prefix for child view events
    // that are forwarded through the layoutview
    childViewEventPrefix: 'childview',

    // Ensure the regions are available when the `initialize` method
    // is called.
    constructor: function(options) {
      options = options || {};

      this._firstRender = true;
      this._initializeRegions(options);

      Marionette.ItemView.call(this, options);
    },

    // LayoutView's render will use the existing region objects the
    // first time it is called. Subsequent calls will destroy the
    // views that the regions are showing and then reset the `el`
    // for the regions to the newly rendered DOM elements.
    render: function() {
      this._ensureViewIsIntact();

      if (this._firstRender) {
        // if this is the first render, don't do anything to
        // reset the regions
        this._firstRender = false;
      } else {
        // If this is not the first render call, then we need to
        // re-initialize the `el` for each region
        this._reInitializeRegions();
      }

      return Marionette.ItemView.prototype.render.apply(this, arguments);
    },

    // Handle destroying regions, and then destroy the view itself.
    destroy: function() {
      if (this.isDestroyed) { return this; }
      // #2134: remove parent element before destroying the child views, so
      // removing the child views doesn't retrigger repaints
      if (this.getOption('destroyImmediate') === true) {
        this.$el.remove();
      }
      this.regionManager.destroy();
      return Marionette.ItemView.prototype.destroy.apply(this, arguments);
    },

    showChildView: function(regionName, view, options) {
      var region = this.getRegion(regionName);
      return region.show.apply(region, _.rest(arguments));
    },

    getChildView: function(regionName) {
      return this.getRegion(regionName).currentView;
    },

    // Add a single region, by name, to the layoutView
    addRegion: function(name, definition) {
      var regions = {};
      regions[name] = definition;
      return this._buildRegions(regions)[name];
    },

    // Add multiple regions as a {name: definition, name2: def2} object literal
    addRegions: function(regions) {
      this.regions = _.extend({}, this.regions, regions);
      return this._buildRegions(regions);
    },

    // Remove a single region from the LayoutView, by name
    removeRegion: function(name) {
      delete this.regions[name];
      return this.regionManager.removeRegion(name);
    },

    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this.regionManager.get(region);
    },

    // Get all regions
    getRegions: function() {
      return this.regionManager.getRegions();
    },

    // internal method to build regions
    _buildRegions: function(regions) {
      var defaults = {
        regionClass: this.getOption('regionClass'),
        parentEl: _.partial(_.result, this, 'el')
      };

      return this.regionManager.addRegions(regions, defaults);
    },

    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on this layoutView.
    _initializeRegions: function(options) {
      var regions;
      this._initRegionManager();

      regions = Marionette._getValue(this.regions, this, [options]) || {};

      // Enable users to define `regions` as instance options.
      var regionOptions = this.getOption.call(options, 'regions');

      // enable region options to be a function
      regionOptions = Marionette._getValue(regionOptions, this, [options]);

      _.extend(regions, regionOptions);

      // Normalize region selectors hash to allow
      // a user to use the @ui. syntax.
      regions = this.normalizeUIValues(regions, ['selector', 'el']);

      this.addRegions(regions);
    },

    // Internal method to re-initialize all of the regions by updating the `el` that
    // they point to
    _reInitializeRegions: function() {
      this.regionManager.invoke('reset');
    },

    // Enable easy overriding of the default `RegionManager`
    // for customized region interactions and business specific
    // view logic for better control over single regions.
    getRegionManager: function() {
      return new Marionette.RegionManager();
    },

    // Internal method to initialize the region manager
    // and all regions in it
    _initRegionManager: function() {
      this.regionManager = this.getRegionManager();
      this.regionManager._parent = this;

      this.listenTo(this.regionManager, 'before:add:region', function(name) {
        this.triggerMethod('before:add:region', name);
      });

      this.listenTo(this.regionManager, 'add:region', function(name, region) {
        this[name] = region;
        this.triggerMethod('add:region', name, region);
      });

      this.listenTo(this.regionManager, 'before:remove:region', function(name) {
        this.triggerMethod('before:remove:region', name);
      });

      this.listenTo(this.regionManager, 'remove:region', function(name, region) {
        delete this[name];
        this.triggerMethod('remove:region', name, region);
      });
    },

    _getImmediateChildren: function() {
      return _.chain(this.regionManager.getRegions())
        .pluck('currentView')
        .compact()
        .value();
    }
  });


  // Behavior
  // --------

  // A Behavior is an isolated set of DOM /
  // user interactions that can be mixed into any View.
  // Behaviors allow you to blackbox View specific interactions
  // into portable logical chunks, keeping your views simple and your code DRY.

  Marionette.Behavior = Marionette.Object.extend({
    constructor: function(options, view) {
      // Setup reference to the view.
      // this comes in handle when a behavior
      // wants to directly talk up the chain
      // to the view.
      this.view = view;
      this.defaults = _.result(this, 'defaults') || {};
      this.options  = _.extend({}, this.defaults, options);
      // Construct an internal UI hash using
      // the views UI hash and then the behaviors UI hash.
      // This allows the user to use UI hash elements
      // defined in the parent view as well as those
      // defined in the given behavior.
      this.ui = _.extend({}, _.result(view, 'ui'), _.result(this, 'ui'));

      Marionette.Object.apply(this, arguments);
    },

    // proxy behavior $ method to the view
    // this is useful for doing jquery DOM lookups
    // scoped to behaviors view.
    $: function() {
      return this.view.$.apply(this.view, arguments);
    },

    // Stops the behavior from listening to events.
    // Overrides Object#destroy to prevent additional events from being triggered.
    destroy: function() {
      this.stopListening();

      return this;
    },

    proxyViewProperties: function(view) {
      this.$el = view.$el;
      this.el = view.el;
    }
  });

  /* jshint maxlen: 143 */
  // Behaviors
  // ---------

  // Behaviors is a utility class that takes care of
  // gluing your behavior instances to their given View.
  // The most important part of this class is that you
  // **MUST** override the class level behaviorsLookup
  // method for things to work properly.

  Marionette.Behaviors = (function(Marionette, _) {
    // Borrow event splitter from Backbone
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    function Behaviors(view, behaviors) {

      if (!_.isObject(view.behaviors)) {
        return {};
      }

      // Behaviors defined on a view can be a flat object literal
      // or it can be a function that returns an object.
      behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, 'behaviors'));

      // Wraps several of the view's methods
      // calling the methods first on each behavior
      // and then eventually calling the method on the view.
      Behaviors.wrap(view, behaviors, _.keys(methods));
      return behaviors;
    }

    var methods = {
      behaviorTriggers: function(behaviorTriggers, behaviors) {
        var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
        return triggerBuilder.buildBehaviorTriggers();
      },

      behaviorEvents: function(behaviorEvents, behaviors) {
        var _behaviorsEvents = {};

        _.each(behaviors, function(b, i) {
          var _events = {};
          var behaviorEvents = _.clone(_.result(b, 'events')) || {};

          // Normalize behavior events hash to allow
          // a user to use the @ui. syntax.
          behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, getBehaviorsUI(b));

          var j = 0;
          _.each(behaviorEvents, function(behaviour, key) {
            var match     = key.match(delegateEventSplitter);

            // Set event name to be namespaced using the view cid,
            // the behavior index, and the behavior event index
            // to generate a non colliding event namespace
            // http://api.jquery.com/event.namespace/
            var eventName = match[1] + '.' + [this.cid, i, j++, ' '].join('');
            var selector  = match[2];

            var eventKey  = eventName + selector;
            var handler   = _.isFunction(behaviour) ? behaviour : b[behaviour];

            _events[eventKey] = _.bind(handler, b);
          }, this);

          _behaviorsEvents = _.extend(_behaviorsEvents, _events);
        }, this);

        return _behaviorsEvents;
      }
    };

    _.extend(Behaviors, {

      // Placeholder method to be extended by the user.
      // The method should define the object that stores the behaviors.
      // i.e.
      //
      // ```js
      // Marionette.Behaviors.behaviorsLookup: function() {
      //   return App.Behaviors
      // }
      // ```
      behaviorsLookup: function() {
        throw new Marionette.Error({
          message: 'You must define where your behaviors are stored.',
          url: 'marionette.behaviors.html#behaviorslookup'
        });
      },

      // Takes care of getting the behavior class
      // given options and a key.
      // If a user passes in options.behaviorClass
      // default to using that. Otherwise delegate
      // the lookup to the users `behaviorsLookup` implementation.
      getBehaviorClass: function(options, key) {
        if (options.behaviorClass) {
          return options.behaviorClass;
        }

        // Get behavior class can be either a flat object or a method
        return Marionette._getValue(Behaviors.behaviorsLookup, this, [options, key])[key];
      },

      // Iterate over the behaviors object, for each behavior
      // instantiate it and get its grouped behaviors.
      parseBehaviors: function(view, behaviors) {
        return _.chain(behaviors).map(function(options, key) {
          var BehaviorClass = Behaviors.getBehaviorClass(options, key);

          var behavior = new BehaviorClass(options, view);
          var nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, 'behaviors'));

          return [behavior].concat(nestedBehaviors);
        }).flatten().value();
      },

      // Wrap view internal methods so that they delegate to behaviors. For example,
      // `onDestroy` should trigger destroy on all of the behaviors and then destroy itself.
      // i.e.
      //
      // `view.delegateEvents = _.partial(methods.delegateEvents, view.delegateEvents, behaviors);`
      wrap: function(view, behaviors, methodNames) {
        _.each(methodNames, function(methodName) {
          view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
        });
      }
    });

    // Class to build handlers for `triggers` on behaviors
    // for views
    function BehaviorTriggersBuilder(view, behaviors) {
      this._view      = view;
      this._behaviors = behaviors;
      this._triggers  = {};
    }

    _.extend(BehaviorTriggersBuilder.prototype, {
      // Main method to build the triggers hash with event keys and handlers
      buildBehaviorTriggers: function() {
        _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
        return this._triggers;
      },

      // Internal method to build all trigger handlers for a given behavior
      _buildTriggerHandlersForBehavior: function(behavior, i) {
        var triggersHash = _.clone(_.result(behavior, 'triggers')) || {};

        triggersHash = Marionette.normalizeUIKeys(triggersHash, getBehaviorsUI(behavior));

        _.each(triggersHash, _.bind(this._setHandlerForBehavior, this, behavior, i));
      },

      // Internal method to create and assign the trigger handler for a given
      // behavior
      _setHandlerForBehavior: function(behavior, i, eventName, trigger) {
        // Unique identifier for the `this._triggers` hash
        var triggerKey = trigger.replace(/^\S+/, function(triggerName) {
          return triggerName + '.' + 'behaviortriggers' + i;
        });

        this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
      }
    });

    function getBehaviorsUI(behavior) {
      return behavior._uiBindings || behavior.ui;
    }

    return Behaviors;

  })(Marionette, _);


  // App Router
  // ----------

  // Reduce the boilerplate code of handling route events
  // and then calling a single method on another object.
  // Have your routers configured to call the method on
  // your object, directly.
  //
  // Configure an AppRouter with `appRoutes`.
  //
  // App routers can only take one `controller` object.
  // It is recommended that you divide your controller
  // objects in to smaller pieces of related functionality
  // and have multiple routers / controllers, instead of
  // just one giant router and controller.
  //
  // You can also add standard routes to an AppRouter.

  Marionette.AppRouter = Backbone.Router.extend({

    constructor: function(options) {
      this.options = options || {};

      Backbone.Router.apply(this, arguments);

      var appRoutes = this.getOption('appRoutes');
      var controller = this._getController();
      this.processAppRoutes(controller, appRoutes);
      this.on('route', this._processOnRoute, this);
    },

    // Similar to route method on a Backbone Router but
    // method is called on the controller
    appRoute: function(route, methodName) {
      var controller = this._getController();
      this._addAppRoute(controller, route, methodName);
    },

    // process the route event and trigger the onRoute
    // method call, if it exists
    _processOnRoute: function(routeName, routeArgs) {
      // make sure an onRoute before trying to call it
      if (_.isFunction(this.onRoute)) {
        // find the path that matches the current route
        var routePath = _.invert(this.getOption('appRoutes'))[routeName];
        this.onRoute(routeName, routePath, routeArgs);
      }
    },

    // Internal method to process the `appRoutes` for the
    // router, and turn them in to routes that trigger the
    // specified method on the specified `controller`.
    processAppRoutes: function(controller, appRoutes) {
      if (!appRoutes) { return; }

      var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes

      _.each(routeNames, function(route) {
        this._addAppRoute(controller, route, appRoutes[route]);
      }, this);
    },

    _getController: function() {
      return this.getOption('controller');
    },

    _addAppRoute: function(controller, route, methodName) {
      var method = controller[methodName];

      if (!method) {
        throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
      }

      this.route(route, methodName, _.bind(method, controller));
    },

    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,

    triggerMethod: Marionette.triggerMethod,

    bindEntityEvents: Marionette.proxyBindEntityEvents,

    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
  });

  // Application
  // -----------

  // Contain and manage the composite application as a whole.
  // Stores and starts up `Region` objects, includes an
  // event aggregator as `app.vent`
  Marionette.Application = Marionette.Object.extend({
    constructor: function(options) {
      this._initializeRegions(options);
      this._initCallbacks = new Marionette.Callbacks();
      this.submodules = {};
      _.extend(this, options);
      this._initChannel();
      Marionette.Object.apply(this, arguments);
    },

    // Command execution, facilitated by Backbone.Wreqr.Commands
    execute: function() {
      this.commands.execute.apply(this.commands, arguments);
    },

    // Request/response, facilitated by Backbone.Wreqr.RequestResponse
    request: function() {
      return this.reqres.request.apply(this.reqres, arguments);
    },

    // Add an initializer that is either run at when the `start`
    // method is called, or run immediately if added after `start`
    // has already been called.
    addInitializer: function(initializer) {
      this._initCallbacks.add(initializer);
    },

    // kick off all of the application's processes.
    // initializes all of the regions that have been added
    // to the app, and runs all of the initializer functions
    start: function(options) {
      this.triggerMethod('before:start', options);
      this._initCallbacks.run(options, this);
      this.triggerMethod('start', options);
    },

    // Add regions to your app.
    // Accepts a hash of named strings or Region objects
    // addRegions({something: "#someRegion"})
    // addRegions({something: Region.extend({el: "#someRegion"}) });
    addRegions: function(regions) {
      return this._regionManager.addRegions(regions);
    },

    // Empty all regions in the app, without removing them
    emptyRegions: function() {
      return this._regionManager.emptyRegions();
    },

    // Removes a region from your app, by name
    // Accepts the regions name
    // removeRegion('myRegion')
    removeRegion: function(region) {
      return this._regionManager.removeRegion(region);
    },

    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this._regionManager.get(region);
    },

    // Get all the regions from the region manager
    getRegions: function() {
      return this._regionManager.getRegions();
    },

    // Create a module, attached to the application
    module: function(moduleNames, moduleDefinition) {

      // Overwrite the module class if the user specifies one
      var ModuleClass = Marionette.Module.getClass(moduleDefinition);

      var args = _.toArray(arguments);
      args.unshift(this);

      // see the Marionette.Module object for more information
      return ModuleClass.create.apply(ModuleClass, args);
    },

    // Enable easy overriding of the default `RegionManager`
    // for customized region interactions and business-specific
    // view logic for better control over single regions.
    getRegionManager: function() {
      return new Marionette.RegionManager();
    },

    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on the application instance
    _initializeRegions: function(options) {
      var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {};

      this._initRegionManager();

      // Enable users to define `regions` in instance options.
      var optionRegions = Marionette.getOption(options, 'regions');

      // Enable region options to be a function
      if (_.isFunction(optionRegions)) {
        optionRegions = optionRegions.call(this, options);
      }

      // Overwrite current regions with those passed in options
      _.extend(regions, optionRegions);

      this.addRegions(regions);

      return this;
    },

    // Internal method to set up the region manager
    _initRegionManager: function() {
      this._regionManager = this.getRegionManager();
      this._regionManager._parent = this;

      this.listenTo(this._regionManager, 'before:add:region', function() {
        Marionette._triggerMethod(this, 'before:add:region', arguments);
      });

      this.listenTo(this._regionManager, 'add:region', function(name, region) {
        this[name] = region;
        Marionette._triggerMethod(this, 'add:region', arguments);
      });

      this.listenTo(this._regionManager, 'before:remove:region', function() {
        Marionette._triggerMethod(this, 'before:remove:region', arguments);
      });

      this.listenTo(this._regionManager, 'remove:region', function(name) {
        delete this[name];
        Marionette._triggerMethod(this, 'remove:region', arguments);
      });
    },

    // Internal method to setup the Wreqr.radio channel
    _initChannel: function() {
      this.channelName = _.result(this, 'channelName') || 'global';
      this.channel = _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
      this.vent = _.result(this, 'vent') || this.channel.vent;
      this.commands = _.result(this, 'commands') || this.channel.commands;
      this.reqres = _.result(this, 'reqres') || this.channel.reqres;
    }
  });

  /* jshint maxparams: 9 */

  // Module
  // ------

  // A simple module system, used to create privacy and encapsulation in
  // Marionette applications
  Marionette.Module = function(moduleName, app, options) {
    this.moduleName = moduleName;
    this.options = _.extend({}, this.options, options);
    // Allow for a user to overide the initialize
    // for a given module instance.
    this.initialize = options.initialize || this.initialize;

    // Set up an internal store for sub-modules.
    this.submodules = {};

    this._setupInitializersAndFinalizers();

    // Set an internal reference to the app
    // within a module.
    this.app = app;

    if (_.isFunction(this.initialize)) {
      this.initialize(moduleName, app, this.options);
    }
  };

  Marionette.Module.extend = Marionette.extend;

  // Extend the Module prototype with events / listenTo, so that the module
  // can be used as an event aggregator or pub/sub.
  _.extend(Marionette.Module.prototype, Backbone.Events, {

    // By default modules start with their parents.
    startWithParent: true,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic when extending Marionette.Module.
    initialize: function() {},

    // Initializer for a specific module. Initializers are run when the
    // module's `start` method is called.
    addInitializer: function(callback) {
      this._initializerCallbacks.add(callback);
    },

    // Finalizers are run when a module is stopped. They are used to teardown
    // and finalize any variables, references, events and other code that the
    // module had set up.
    addFinalizer: function(callback) {
      this._finalizerCallbacks.add(callback);
    },

    // Start the module, and run all of its initializers
    start: function(options) {
      // Prevent re-starting a module that is already started
      if (this._isInitialized) { return; }

      // start the sub-modules (depth-first hierarchy)
      _.each(this.submodules, function(mod) {
        // check to see if we should start the sub-module with this parent
        if (mod.startWithParent) {
          mod.start(options);
        }
      });

      // run the callbacks to "start" the current module
      this.triggerMethod('before:start', options);

      this._initializerCallbacks.run(options, this);
      this._isInitialized = true;

      this.triggerMethod('start', options);
    },

    // Stop this module by running its finalizers and then stop all of
    // the sub-modules for this module
    stop: function() {
      // if we are not initialized, don't bother finalizing
      if (!this._isInitialized) { return; }
      this._isInitialized = false;

      this.triggerMethod('before:stop');

      // stop the sub-modules; depth-first, to make sure the
      // sub-modules are stopped / finalized before parents
      _.invoke(this.submodules, 'stop');

      // run the finalizers
      this._finalizerCallbacks.run(undefined, this);

      // reset the initializers and finalizers
      this._initializerCallbacks.reset();
      this._finalizerCallbacks.reset();

      this.triggerMethod('stop');
    },

    // Configure the module with a definition function and any custom args
    // that are to be passed in to the definition function
    addDefinition: function(moduleDefinition, customArgs) {
      this._runModuleDefinition(moduleDefinition, customArgs);
    },

    // Internal method: run the module definition function with the correct
    // arguments
    _runModuleDefinition: function(definition, customArgs) {
      // If there is no definition short circut the method.
      if (!definition) { return; }

      // build the correct list of arguments for the module definition
      var args = _.flatten([
        this,
        this.app,
        Backbone,
        Marionette,
        Backbone.$, _,
        customArgs
      ]);

      definition.apply(this, args);
    },

    // Internal method: set up new copies of initializers and finalizers.
    // Calling this method will wipe out all existing initializers and
    // finalizers.
    _setupInitializersAndFinalizers: function() {
      this._initializerCallbacks = new Marionette.Callbacks();
      this._finalizerCallbacks = new Marionette.Callbacks();
    },

    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod
  });

  // Class methods to create modules
  _.extend(Marionette.Module, {

    // Create a module, hanging off the app parameter as the parent object.
    create: function(app, moduleNames, moduleDefinition) {
      var module = app;

      // get the custom args passed in after the module definition and
      // get rid of the module name and definition function
      var customArgs = _.drop(arguments, 3);

      // Split the module names and get the number of submodules.
      // i.e. an example module name of `Doge.Wow.Amaze` would
      // then have the potential for 3 module definitions.
      moduleNames = moduleNames.split('.');
      var length = moduleNames.length;

      // store the module definition for the last module in the chain
      var moduleDefinitions = [];
      moduleDefinitions[length - 1] = moduleDefinition;

      // Loop through all the parts of the module definition
      _.each(moduleNames, function(moduleName, i) {
        var parentModule = module;
        module = this._getModule(parentModule, moduleName, app, moduleDefinition);
        this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
      }, this);

      // Return the last module in the definition chain
      return module;
    },

    _getModule: function(parentModule, moduleName, app, def, args) {
      var options = _.extend({}, def);
      var ModuleClass = this.getClass(def);

      // Get an existing module of this name if we have one
      var module = parentModule[moduleName];

      if (!module) {
        // Create a new module if we don't have one
        module = new ModuleClass(moduleName, app, options);
        parentModule[moduleName] = module;
        // store the module on the parent
        parentModule.submodules[moduleName] = module;
      }

      return module;
    },

    // ## Module Classes
    //
    // Module classes can be used as an alternative to the define pattern.
    // The extend function of a Module is identical to the extend functions
    // on other Backbone and Marionette classes.
    // This allows module lifecyle events like `onStart` and `onStop` to be called directly.
    getClass: function(moduleDefinition) {
      var ModuleClass = Marionette.Module;

      if (!moduleDefinition) {
        return ModuleClass;
      }

      // If all of the module's functionality is defined inside its class,
      // then the class can be passed in directly. `MyApp.module("Foo", FooModule)`.
      if (moduleDefinition.prototype instanceof ModuleClass) {
        return moduleDefinition;
      }

      return moduleDefinition.moduleClass || ModuleClass;
    },

    // Add the module definition and add a startWithParent initializer function.
    // This is complicated because module definitions are heavily overloaded
    // and support an anonymous function, module class, or options object
    _addModuleDefinition: function(parentModule, module, def, args) {
      var fn = this._getDefine(def);
      var startWithParent = this._getStartWithParent(def, module);

      if (fn) {
        module.addDefinition(fn, args);
      }

      this._addStartWithParent(parentModule, module, startWithParent);
    },

    _getStartWithParent: function(def, module) {
      var swp;

      if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
        swp = module.constructor.prototype.startWithParent;
        return _.isUndefined(swp) ? true : swp;
      }

      if (_.isObject(def)) {
        swp = def.startWithParent;
        return _.isUndefined(swp) ? true : swp;
      }

      return true;
    },

    _getDefine: function(def) {
      if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
        return def;
      }

      if (_.isObject(def)) {
        return def.define;
      }

      return null;
    },

    _addStartWithParent: function(parentModule, module, startWithParent) {
      module.startWithParent = module.startWithParent && startWithParent;

      if (!module.startWithParent || !!module.startWithParentIsConfigured) {
        return;
      }

      module.startWithParentIsConfigured = true;

      parentModule.addInitializer(function(options) {
        if (module.startWithParent) {
          module.start(options);
        }
      });
    }
  });


  return Marionette;
}));

/**
 * Twig.js 0.8.3
 *
 * @copyright 2011-2015 John Roepke and the Twig.js Contributors
 * @license   Available under the BSD 2-Clause License
 * @link      https://github.com/justjohn/twig.js
 */
var Twig=function(Twig){Twig.VERSION="0.8.4";return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.trace=false;Twig.debug=false;Twig.cache=true;Twig.placeholders={parent:"{{|PARENT|}}"};Twig.indexOf=function(arr,searchElement){if(Array.prototype.hasOwnProperty("indexOf")){return arr.indexOf(searchElement)}if(arr===void 0||arr===null){throw new TypeError}var t=Object(arr);var len=t.length>>>0;if(len===0){return-1}var n=0;if(arguments.length>0){n=Number(arguments[1]);if(n!==n){n=0}else if(n!==0&&n!==Infinity&&n!==-Infinity){n=(n>0||-1)*Math.floor(Math.abs(n))}}if(n>=len){return-1}var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement){return k}}if(arr==searchElement){return 0}return-1};Twig.forEach=function(arr,callback,thisArg){if(Array.prototype.forEach){return arr.forEach(callback,thisArg)}var T,k;if(arr==null){throw new TypeError(" this is null or not defined")}var O=Object(arr);var len=O.length>>>0;if({}.toString.call(callback)!="[object Function]"){throw new TypeError(callback+" is not a function")}if(thisArg){T=thisArg}k=0;while(k<len){var kValue;if(k in O){kValue=O[k];callback.call(T,kValue,k,O)}k++}};Twig.merge=function(target,source,onlyChanged){Twig.forEach(Object.keys(source),function(key){if(onlyChanged&&!(key in target)){return}target[key]=source[key]});return target};Twig.Error=function(message){this.message=message;this.name="TwigException";this.type="TwigException"};Twig.Error.prototype.toString=function(){var output=this.name+": "+this.message;return output};Twig.log={trace:function(){if(Twig.trace&&console){console.log(Array.prototype.slice.call(arguments))}},debug:function(){if(Twig.debug&&console){console.log(Array.prototype.slice.call(arguments))}}};if(typeof console!=="undefined"){if(typeof console.error!=="undefined"){Twig.log.error=function(){console.error.apply(console,arguments)}}else if(typeof console.log!=="undefined"){Twig.log.error=function(){console.log.apply(console,arguments)}}}else{Twig.log.error=function(){}}Twig.ChildContext=function(context){var ChildContext=function ChildContext(){};ChildContext.prototype=context;return new ChildContext};Twig.token={};Twig.token.type={output:"output",logic:"logic",comment:"comment",raw:"raw"};Twig.token.definitions=[{type:Twig.token.type.raw,open:"{% raw %}",close:"{% endraw %}"},{type:Twig.token.type.raw,open:"{% verbatim %}",close:"{% endverbatim %}"},{type:Twig.token.type.output,open:"{{",close:"}}"},{type:Twig.token.type.logic,open:"{%",close:"%}"},{type:Twig.token.type.comment,open:"{#",close:"#}"}];Twig.token.strings=['"',"'"];Twig.token.findStart=function(template){var output={position:null,def:null},i,token_template,first_key_position;for(i=0;i<Twig.token.definitions.length;i++){token_template=Twig.token.definitions[i];first_key_position=template.indexOf(token_template.open);Twig.log.trace("Twig.token.findStart: ","Searching for ",token_template.open," found at ",first_key_position);if(first_key_position>=0&&(output.position===null||first_key_position<output.position)){output.position=first_key_position;output.def=token_template}}return output};Twig.token.findEnd=function(template,token_def,start){var end=null,found=false,offset=0,str_pos=null,str_found=null,pos=null,end_offset=null,this_str_pos=null,end_str_pos=null,i,l;while(!found){str_pos=null;str_found=null;pos=template.indexOf(token_def.close,offset);if(pos>=0){end=pos;found=true}else{throw new Twig.Error("Unable to find closing bracket '"+token_def.close+"'"+" opened near template position "+start)}if(token_def.type===Twig.token.type.comment){break}l=Twig.token.strings.length;for(i=0;i<l;i+=1){this_str_pos=template.indexOf(Twig.token.strings[i],offset);if(this_str_pos>0&&this_str_pos<pos&&(str_pos===null||this_str_pos<str_pos)){str_pos=this_str_pos;str_found=Twig.token.strings[i]}}if(str_pos!==null){end_offset=str_pos+1;end=null;found=false;while(true){end_str_pos=template.indexOf(str_found,end_offset);if(end_str_pos<0){throw"Unclosed string in template"}if(template.substr(end_str_pos-1,1)!=="\\"){offset=end_str_pos+1;break}else{end_offset=end_str_pos+1}}}}return end};Twig.tokenize=function(template){var tokens=[],error_offset=0,found_token=null,end=null;while(template.length>0){found_token=Twig.token.findStart(template);Twig.log.trace("Twig.tokenize: ","Found token: ",found_token);if(found_token.position!==null){if(found_token.position>0){tokens.push({type:Twig.token.type.raw,value:template.substring(0,found_token.position)})}template=template.substr(found_token.position+found_token.def.open.length);error_offset+=found_token.position+found_token.def.open.length;end=Twig.token.findEnd(template,found_token.def,error_offset);Twig.log.trace("Twig.tokenize: ","Token ends at ",end);tokens.push({type:found_token.def.type,value:template.substring(0,end).trim()});if(found_token.def.type==="logic"&&template.substr(end+found_token.def.close.length,1)==="\n"){end+=1}template=template.substr(end+found_token.def.close.length);error_offset+=end+found_token.def.close.length}else{tokens.push({type:Twig.token.type.raw,value:template});template=""}}return tokens};Twig.compile=function(tokens){try{var output=[],stack=[],intermediate_output=[],token=null,logic_token=null,unclosed_token=null,prev_token=null,prev_template=null,tok_output=null,type=null,open=null,next=null;while(tokens.length>0){token=tokens.shift();Twig.log.trace("Compiling token ",token);switch(token.type){case Twig.token.type.raw:if(stack.length>0){intermediate_output.push(token)}else{output.push(token)}break;case Twig.token.type.logic:logic_token=Twig.logic.compile.apply(this,[token]);type=logic_token.type;open=Twig.logic.handler[type].open;next=Twig.logic.handler[type].next;Twig.log.trace("Twig.compile: ","Compiled logic token to ",logic_token," next is: ",next," open is : ",open);if(open!==undefined&&!open){prev_token=stack.pop();prev_template=Twig.logic.handler[prev_token.type];if(Twig.indexOf(prev_template.next,type)<0){throw new Error(type+" not expected after a "+prev_token.type)}prev_token.output=prev_token.output||[];prev_token.output=prev_token.output.concat(intermediate_output);intermediate_output=[];tok_output={type:Twig.token.type.logic,token:prev_token};if(stack.length>0){intermediate_output.push(tok_output)}else{output.push(tok_output)}}if(next!==undefined&&next.length>0){Twig.log.trace("Twig.compile: ","Pushing ",logic_token," to logic stack.");if(stack.length>0){prev_token=stack.pop();prev_token.output=prev_token.output||[];prev_token.output=prev_token.output.concat(intermediate_output);stack.push(prev_token);intermediate_output=[]}stack.push(logic_token)}else if(open!==undefined&&open){tok_output={type:Twig.token.type.logic,token:logic_token};if(stack.length>0){intermediate_output.push(tok_output)}else{output.push(tok_output)}}break;case Twig.token.type.comment:break;case Twig.token.type.output:Twig.expression.compile.apply(this,[token]);if(stack.length>0){intermediate_output.push(token)}else{output.push(token)}break}Twig.log.trace("Twig.compile: "," Output: ",output," Logic Stack: ",stack," Pending Output: ",intermediate_output)}if(stack.length>0){unclosed_token=stack.pop();throw new Error("Unable to find an end tag for "+unclosed_token.type+", expecting one of "+unclosed_token.next)}return output}catch(ex){Twig.log.error("Error compiling twig template "+this.id+": ");if(ex.stack){Twig.log.error(ex.stack)}else{Twig.log.error(ex.toString())}if(this.options.rethrow)throw ex}};Twig.parse=function(tokens,context){try{var output=[],chain=true,that=this;Twig.forEach(tokens,function parseToken(token){Twig.log.debug("Twig.parse: ","Parsing token: ",token);switch(token.type){case Twig.token.type.raw:output.push(Twig.filters.raw(token.value));break;case Twig.token.type.logic:var logic_token=token.token,logic=Twig.logic.parse.apply(that,[logic_token,context,chain]);if(logic.chain!==undefined){chain=logic.chain}if(logic.context!==undefined){context=logic.context}if(logic.output!==undefined){output.push(logic.output)}break;case Twig.token.type.comment:break;case Twig.token.type.output:Twig.log.debug("Twig.parse: ","Output token: ",token.stack);output.push(Twig.expression.parse.apply(that,[token.stack,context]));break}});return Twig.output.apply(this,[output])}catch(ex){Twig.log.error("Error parsing twig template "+this.id+": ");if(ex.stack){Twig.log.error(ex.stack)}else{Twig.log.error(ex.toString())}if(this.options.rethrow)throw ex;if(Twig.debug){return ex.toString()}}};Twig.prepare=function(data){var tokens,raw_tokens;Twig.log.debug("Twig.prepare: ","Tokenizing ",data);raw_tokens=Twig.tokenize.apply(this,[data]);Twig.log.debug("Twig.prepare: ","Compiling ",raw_tokens);tokens=Twig.compile.apply(this,[raw_tokens]);Twig.log.debug("Twig.prepare: ","Compiled ",tokens);return tokens};Twig.output=function(output){if(!this.options.autoescape){return output.join("")}var escaped_output=[];Twig.forEach(output,function(str){if(str&&!str.twig_markup){str=Twig.filters.escape(str)}escaped_output.push(str)});return Twig.Markup(escaped_output.join(""))};Twig.Templates={registry:{}};Twig.validateId=function(id){if(id==="prototype"){throw new Twig.Error(id+" is not a valid twig identifier")}else if(Twig.Templates.registry.hasOwnProperty(id)){throw new Twig.Error("There is already a template with the ID "+id)}return true};Twig.Templates.save=function(template){if(template.id===undefined){throw new Twig.Error("Unable to save template with no id")}Twig.Templates.registry[template.id]=template};Twig.Templates.load=function(id){if(!Twig.Templates.registry.hasOwnProperty(id)){return null}return Twig.Templates.registry[id]};Twig.Templates.loadRemote=function(location,params,callback,error_callback){var id=params.id,method=params.method,async=params.async,precompiled=params.precompiled,template=null;if(async===undefined)async=true;if(id===undefined){id=location}params.id=id;if(Twig.cache&&Twig.Templates.registry.hasOwnProperty(id)){if(callback){callback(Twig.Templates.registry[id])}return Twig.Templates.registry[id]}if(method=="ajax"){if(typeof XMLHttpRequest=="undefined"){throw new Twig.Error("Unsupported platform: Unable to do remote requests "+"because there is no XMLHTTPRequest implementation")}var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){var data=null;if(xmlhttp.readyState==4){if(xmlhttp.status==200){Twig.log.debug("Got template ",xmlhttp.responseText);if(precompiled===true){data=JSON.parse(xmlhttp.responseText)}else{data=xmlhttp.responseText}params.url=location;params.data=data;template=new Twig.Template(params);if(callback){callback(template)}}else{if(error_callback){error_callback(xmlhttp)}}}};xmlhttp.open("GET",location,async);xmlhttp.send()}else{(function(){var fs=require("fs"),path=require("path"),data=null,loadTemplateFn=function(err,data){if(err){if(error_callback){error_callback(err)}return}if(precompiled===true){data=JSON.parse(data)}params.data=data;params.path=location;template=new Twig.Template(params);if(callback){callback(template)}};if(async===true){fs.stat(location,function(err,stats){if(err||!stats.isFile())throw new Twig.Error("Unable to find template file "+location);fs.readFile(location,"utf8",loadTemplateFn)})}else{if(!fs.statSync(location).isFile())throw new Twig.Error("Unable to find template file "+location);data=fs.readFileSync(location,"utf8");loadTemplateFn(undefined,data)}})()}if(async===false){return template}else{return true}};function is(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type}Twig.Template=function(params){var data=params.data,id=params.id,blocks=params.blocks,macros=params.macros||{},base=params.base,path=params.path,url=params.url,options=params.options;this.id=id;this.base=base;this.path=path;this.url=url;this.macros=macros;this.options=options;this.reset(blocks);if(is("String",data)){this.tokens=Twig.prepare.apply(this,[data])}else{this.tokens=data}if(id!==undefined){Twig.Templates.save(this)}};Twig.Template.prototype.reset=function(blocks){Twig.log.debug("Twig.Template.reset","Reseting template "+this.id);this.blocks={};this.importedBlocks=[];this.originalBlockTokens={};this.child={blocks:blocks||{}};this.extend=null};Twig.Template.prototype.render=function(context,params){params=params||{};var output,url;this.context=context||{};this.reset();if(params.blocks){this.blocks=params.blocks}if(params.macros){this.macros=params.macros}output=Twig.parse.apply(this,[this.tokens,this.context]);if(this.extend){var ext_template;if(this.options.allowInlineIncludes){ext_template=Twig.Templates.load(this.extend);if(ext_template){ext_template.options=this.options}}if(!ext_template){url=relativePath(this,this.extend);ext_template=Twig.Templates.loadRemote(url,{method:this.url?"ajax":"fs",base:this.base,async:false,id:url,options:this.options})}this.parent=ext_template;return this.parent.render(this.context,{blocks:this.blocks})}if(params.output=="blocks"){return this.blocks}else if(params.output=="macros"){return this.macros}else{return output}};Twig.Template.prototype.importFile=function(file){var url,sub_template;if(!this.url&&!this.path&&this.options.allowInlineIncludes){sub_template=Twig.Templates.load(file);sub_template.options=this.options;if(sub_template){return sub_template}throw new Twig.Error("Didn't find the inline template by id")}url=relativePath(this,file);sub_template=Twig.Templates.loadRemote(url,{method:this.url?"ajax":"fs",base:this.base,async:false,options:this.options,id:url});return sub_template};Twig.Template.prototype.importBlocks=function(file,override){var sub_template=this.importFile(file),context=this.context,that=this,key;override=override||false;sub_template.render(context);Twig.forEach(Object.keys(sub_template.blocks),function(key){if(override||that.blocks[key]===undefined){that.blocks[key]=sub_template.blocks[key];that.importedBlocks.push(key)}})};Twig.Template.prototype.compile=function(options){return Twig.compiler.compile(this,options)};Twig.Markup=function(content){if(typeof content==="string"&&content.length>0){content=new String(content);content.twig_markup=true}return content};function relativePath(template,file){var base,base_path,sep_chr="/",new_path=[],val;if(template.url){if(typeof template.base!=="undefined"){base=template.base+(template.base.charAt(template.base.length-1)==="/"?"":"/")}else{base=template.url}}else if(template.path){var path=require("path"),sep=path.sep||sep_chr,relative=new RegExp("^\\.{1,2}"+sep.replace("\\","\\\\"));file=file.replace(/\//g,sep);if(template.base!==undefined&&file.match(relative)==null){file=file.replace(template.base,"");base=template.base+sep}else{base=template.path}base=base.replace(sep+sep,sep);sep_chr=sep}else{throw new Twig.Error("Cannot extend an inline template.")}base_path=base.split(sep_chr);base_path.pop();base_path=base_path.concat(file.split(sep_chr));while(base_path.length>0){val=base_path.shift();if(val=="."){}else if(val==".."&&new_path.length>0&&new_path[new_path.length-1]!=".."){new_path.pop()}else{new_path.push(val)}}return new_path.join(sep_chr)}return Twig}(Twig||{});(function(){"use strict";if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Object.keys)Object.keys=function(o){if(o!==Object(o)){throw new TypeError("Object.keys called on non-object")}var ret=[],p;for(p in o)if(Object.prototype.hasOwnProperty.call(o,p))ret.push(p);return ret}})();var Twig=function(Twig){Twig.lib={};var sprintfLib=function(){var re={not_string:/[^s]/,number:/[diefg]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function sprintf(){var key=arguments[0],cache=sprintf.cache;if(!(cache[key]&&cache.hasOwnProperty(key))){cache[key]=sprintf.parse(key)}return sprintf.format.call(null,cache[key],arguments)}sprintf.format=function(parse_tree,argv){var cursor=1,tree_length=parse_tree.length,node_type="",arg,output=[],i,k,match,pad,pad_character,pad_length,is_positive=true,sign="";for(i=0;i<tree_length;i++){node_type=get_type(parse_tree[i]);if(node_type==="string"){output[output.length]=parse_tree[i]}else if(node_type==="array"){match=parse_tree[i];if(match[2]){arg=argv[cursor];for(k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k])){throw new Error(sprintf("[sprintf] property '%s' does not exist",match[2][k]))}arg=arg[match[2][k]]}}else if(match[1]){arg=argv[match[1]]}else{arg=argv[cursor++]}if(get_type(arg)=="function"){arg=arg()}if(re.not_string.test(match[8])&&re.not_json.test(match[8])&&(get_type(arg)!="number"&&isNaN(arg))){throw new TypeError(sprintf("[sprintf] expecting number but found %s",get_type(arg)))}if(re.number.test(match[8])){is_positive=arg>=0}switch(match[8]){case"b":arg=arg.toString(2);break;case"c":arg=String.fromCharCode(arg);break;case"d":case"i":arg=parseInt(arg,10);break;case"j":arg=JSON.stringify(arg,null,match[6]?parseInt(match[6]):0);break;case"e":arg=match[7]?arg.toExponential(match[7]):arg.toExponential();break;case"f":arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case"g":arg=match[7]?parseFloat(arg).toPrecision(match[7]):parseFloat(arg);break;case"o":arg=arg.toString(8);break;case"s":arg=(arg=String(arg))&&match[7]?arg.substring(0,match[7]):arg;break;case"u":arg=arg>>>0;break;case"x":arg=arg.toString(16);break;case"X":arg=arg.toString(16).toUpperCase();break}if(re.json.test(match[8])){output[output.length]=arg}else{if(re.number.test(match[8])&&(!is_positive||match[3])){sign=is_positive?"+":"-";arg=arg.toString().replace(re.sign,"")}else{sign=""}pad_character=match[4]?match[4]==="0"?"0":match[4].charAt(1):" ";pad_length=match[6]-(sign+arg).length;pad=match[6]?pad_length>0?str_repeat(pad_character,pad_length):"":"";output[output.length]=match[5]?sign+arg+pad:pad_character==="0"?sign+pad+arg:pad+sign+arg}}}return output.join("")};sprintf.cache={};sprintf.parse=function(fmt){var _fmt=fmt,match=[],parse_tree=[],arg_names=0;while(_fmt){if((match=re.text.exec(_fmt))!==null){parse_tree[parse_tree.length]=match[0]}else if((match=re.modulo.exec(_fmt))!==null){parse_tree[parse_tree.length]="%"}else if((match=re.placeholder.exec(_fmt))!==null){if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if((field_match=re.key.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1];while((replacement_field=replacement_field.substring(field_match[0].length))!==""){if((field_match=re.key_access.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1]}else if((field_match=re.index_access.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1]}else{throw new SyntaxError("[sprintf] failed to parse named argument key")}}}else{throw new SyntaxError("[sprintf] failed to parse named argument key")}match[2]=field_list}else{arg_names|=2}if(arg_names===3){throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")}parse_tree[parse_tree.length]=match}else{throw new SyntaxError("[sprintf] unexpected placeholder")}_fmt=_fmt.substring(match[0].length)}return parse_tree};var vsprintf=function(fmt,argv,_argv){_argv=(argv||[]).slice(0);_argv.splice(0,0,fmt);return sprintf.apply(null,_argv)};function get_type(variable){return Object.prototype.toString.call(variable).slice(8,-1).toLowerCase()}function str_repeat(input,multiplier){return Array(multiplier+1).join(input)}return{sprintf:sprintf,vsprintf:vsprintf}}();var sprintf=sprintfLib.sprintf;var vsprintf=sprintfLib.vsprintf;Twig.lib.sprintf=sprintf;Twig.lib.vsprintf=vsprintf;(function(){var shortDays="Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",");var fullDays="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",");var shortMonths="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",");var fullMonths="January,February,March,April,May,June,July,August,September,October,November,December".split(",");function getOrdinalFor(intNum){return(intNum=Math.abs(intNum)%100)%10==1&&intNum!=11?"st":intNum%10==2&&intNum!=12?"nd":intNum%10==3&&intNum!=13?"rd":"th"}function getISO8601Year(aDate){var d=new Date(aDate.getFullYear()+1,0,4);if((d-aDate)/864e5<7&&(aDate.getDay()+6)%7<(d.getDay()+6)%7)return d.getFullYear();if(aDate.getMonth()>0||aDate.getDate()>=4)return aDate.getFullYear();return aDate.getFullYear()-((aDate.getDay()+6)%7-aDate.getDate()>2?1:0)}function getISO8601Week(aDate){var d=new Date(getISO8601Year(aDate),0,4);d.setDate(d.getDate()-(d.getDay()+6)%7);return parseInt((aDate-d)/6048e5)+1}Twig.lib.formatDate=function(date,format){if(typeof format!=="string"||/^\s*$/.test(format))return date+"";var jan1st=new Date(date.getFullYear(),0,1);var me=date;return format.replace(/[dDjlNSwzWFmMntLoYyaABgGhHisuU]/g,function(option){switch(option){case"d":return("0"+me.getDate()).replace(/^.+(..)$/,"$1");case"D":return shortDays[me.getDay()];case"j":return me.getDate();case"l":return fullDays[me.getDay()];case"N":return(me.getDay()+6)%7+1;case"S":return getOrdinalFor(me.getDate());case"w":return me.getDay();case"z":return Math.ceil((jan1st-me)/864e5);case"W":return("0"+getISO8601Week(me)).replace(/^.(..)$/,"$1");case"F":return fullMonths[me.getMonth()];case"m":return("0"+(me.getMonth()+1)).replace(/^.+(..)$/,"$1");case"M":return shortMonths[me.getMonth()];case"n":return me.getMonth()+1;case"t":return new Date(me.getFullYear(),me.getMonth()+1,-1).getDate();case"L":return new Date(me.getFullYear(),1,29).getDate()==29?1:0;case"o":return getISO8601Year(me);case"Y":return me.getFullYear();case"y":return(me.getFullYear()+"").replace(/^.+(..)$/,"$1");case"a":return me.getHours()<12?"am":"pm";case"A":return me.getHours()<12?"AM":"PM";case"B":return Math.floor(((me.getUTCHours()+1)%24+me.getUTCMinutes()/60+me.getUTCSeconds()/3600)*1e3/24);case"g":return me.getHours()%12!=0?me.getHours()%12:12;case"G":return me.getHours();case"h":return("0"+(me.getHours()%12!=0?me.getHours()%12:12)).replace(/^.+(..)$/,"$1");case"H":return("0"+me.getHours()).replace(/^.+(..)$/,"$1");case"i":return("0"+me.getMinutes()).replace(/^.+(..)$/,"$1");case"s":return("0"+me.getSeconds()).replace(/^.+(..)$/,"$1");case"u":return me.getMilliseconds();case"U":return me.getTime()/1e3}})}})();Twig.lib.strip_tags=function(input,allowed){allowed=(((allowed||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,"").replace(tags,function($0,$1){return allowed.indexOf("<"+$1.toLowerCase()+">")>-1?$0:""})};Twig.lib.parseISO8601Date=function(s){var re=/(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/;var d=[];d=s.match(re);if(!d){throw"Couldn't parse ISO 8601 date string '"+s+"'"}var a=[1,2,3,4,5,6,10,11];for(var i in a){d[a[i]]=parseInt(d[a[i]],10)}d[7]=parseFloat(d[7]);var ms=Date.UTC(d[1],d[2]-1,d[3],d[4],d[5],d[6]);if(d[7]>0){ms+=Math.round(d[7]*1e3)}if(d[8]!="Z"&&d[10]){var offset=d[10]*60*60*1e3;if(d[11]){offset+=d[11]*60*1e3}if(d[9]=="-"){ms-=offset}else{ms+=offset}}return new Date(ms)};Twig.lib.strtotime=function(text,now){var parsed,match,today,year,date,days,ranges,len,times,regex,i,fail=false;if(!text){return fail}text=text.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase();match=text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);if(match&&match[2]===match[4]){if(match[1]>1901){switch(match[2]){case"-":{if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case".":{return fail}case"/":{if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}}}else if(match[5]>1901){switch(match[2]){case"-":{if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case".":{if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case"/":{if(match[1]>12||match[3]>31){return fail}return new Date(match[5],parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}}}else{switch(match[2]){case"-":{if(match[3]>12||match[5]>31||match[1]<70&&match[1]>38){return fail}year=match[1]>=0&&match[1]<=38?+match[1]+2e3:match[1];return new Date(year,parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case".":{if(match[5]>=70){if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}if(match[5]<60&&!match[6]){if(match[1]>23||match[3]>59){return fail}today=new Date;return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0,match[9]||0)/1e3}return fail}case"/":{if(match[1]>12||match[3]>31||match[5]<70&&match[5]>38){return fail}year=match[5]>=0&&match[5]<=38?+match[5]+2e3:match[5];return new Date(year,parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1e3}case":":{if(match[1]>23||match[3]>59||match[5]>59){return fail}today=new Date;return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0)/1e3}}}}if(text==="now"){return now===null||isNaN(now)?(new Date).getTime()/1e3|0:now|0}if(!isNaN(parsed=Date.parse(text))){return parsed/1e3|0}date=now?new Date(now*1e3):new Date;days={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};ranges={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"};function lastNext(type,range,modifier){var diff,day=days[range];if(typeof day!=="undefined"){diff=day-date.getDay();if(diff===0){diff=7*modifier}else if(diff>0&&type==="last"){diff-=7}else if(diff<0&&type==="next"){diff+=7}date.setDate(date.getDate()+diff)}}function process(val){var splt=val.split(" "),type=splt[0],range=splt[1].substring(0,3),typeIsNumber=/\d+/.test(type),ago=splt[2]==="ago",num=(type==="last"?-1:1)*(ago?-1:1);if(typeIsNumber){num*=parseInt(type,10)}if(ranges.hasOwnProperty(range)&&!splt[1].match(/^mon(day|\.)?$/i)){return date["set"+ranges[range]](date["get"+ranges[range]]()+num)}if(range==="wee"){return date.setDate(date.getDate()+num*7)}if(type==="next"||type==="last"){lastNext(type,range,num)}else if(!typeIsNumber){return false}return true}times="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec"+"|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?"+"|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)";regex="([+-]?\\d+\\s"+times+"|"+"(last|next)\\s"+times+")(\\sago)?";match=text.match(new RegExp(regex,"gi"));if(!match){return fail}for(i=0,len=match.length;i<len;i++){if(!process(match[i])){return fail}}return date.getTime()/1e3};Twig.lib.is=function(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type};Twig.lib.copy=function(src){var target={},key;for(key in src)target[key]=src[key];return target};Twig.lib.replaceAll=function(string,search,replace){return string.split(search).join(replace)};Twig.lib.chunkArray=function(arr,size){var returnVal=[],x=0,len=arr.length;if(size<1||!Twig.lib.is("Array",arr)){return[]}while(x<len){returnVal.push(arr.slice(x,x+=size))}return returnVal};Twig.lib.round=function round(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=value>0|-(value<0);isHalf=value%1===.5*sgn;f=Math.floor(value);if(isHalf){switch(mode){case"PHP_ROUND_HALF_DOWN":value=f+(sgn<0);break;case"PHP_ROUND_HALF_EVEN":value=f+f%2*sgn;break;case"PHP_ROUND_HALF_ODD":value=f+!(f%2);break;default:value=f+(sgn>0)}}return(isHalf?value:Math.round(value))/m};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.logic={};Twig.logic.type={if_:"Twig.logic.type.if",endif:"Twig.logic.type.endif",for_:"Twig.logic.type.for",endfor:"Twig.logic.type.endfor",else_:"Twig.logic.type.else",elseif:"Twig.logic.type.elseif",set:"Twig.logic.type.set",setcapture:"Twig.logic.type.setcapture",endset:"Twig.logic.type.endset",filter:"Twig.logic.type.filter",endfilter:"Twig.logic.type.endfilter",block:"Twig.logic.type.block",endblock:"Twig.logic.type.endblock",extends_:"Twig.logic.type.extends",use:"Twig.logic.type.use",include:"Twig.logic.type.include",spaceless:"Twig.logic.type.spaceless",endspaceless:"Twig.logic.type.endspaceless",macro:"Twig.logic.type.macro",endmacro:"Twig.logic.type.endmacro",import_:"Twig.logic.type.import",from:"Twig.logic.type.from",embed:"Twig.logic.type.embed",endembed:"Twig.logic.type.endembed"};Twig.logic.definitions=[{type:Twig.logic.type.if_,regex:/^if\s+([\s\S]+)$/,next:[Twig.logic.type.else_,Twig.logic.type.elseif,Twig.logic.type.endif],open:true,compile:function(token){var expression=token.match[1];token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;delete token.match;return token},parse:function(token,context,chain){var output="",result=Twig.expression.parse.apply(this,[token.stack,context]);chain=true;if(result){chain=false;output=Twig.parse.apply(this,[token.output,context])}return{chain:chain,output:output}}},{type:Twig.logic.type.elseif,regex:/^elseif\s+([^\s].*)$/,next:[Twig.logic.type.else_,Twig.logic.type.elseif,Twig.logic.type.endif],open:false,compile:function(token){var expression=token.match[1];token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;delete token.match;return token},parse:function(token,context,chain){var output="";if(chain&&Twig.expression.parse.apply(this,[token.stack,context])===true){chain=false;output=Twig.parse.apply(this,[token.output,context])}return{chain:chain,output:output}}},{type:Twig.logic.type.else_,regex:/^else$/,next:[Twig.logic.type.endif,Twig.logic.type.endfor],open:false,parse:function(token,context,chain){var output="";if(chain){output=Twig.parse.apply(this,[token.output,context])}return{chain:chain,output:output}}},{type:Twig.logic.type.endif,regex:/^endif$/,next:[],open:false},{type:Twig.logic.type.for_,regex:/^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,next:[Twig.logic.type.else_,Twig.logic.type.endfor],open:true,compile:function(token){var key_value=token.match[1],expression=token.match[2],conditional=token.match[3],kv_split=null;token.key_var=null;token.value_var=null;if(key_value.indexOf(",")>=0){kv_split=key_value.split(",");if(kv_split.length===2){token.key_var=kv_split[0].trim();token.value_var=kv_split[1].trim()}else{throw new Twig.Error("Invalid expression in for loop: "+key_value)}}else{token.value_var=key_value}token.expression=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;if(conditional){token.conditional=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:conditional}]).stack}delete token.match;return token},parse:function(token,context,continue_chain){var result=Twig.expression.parse.apply(this,[token.expression,context]),output=[],len,index=0,keyset,that=this,conditional=token.conditional,buildLoop=function(index,len){var isConditional=conditional!==undefined;return{index:index+1,index0:index,revindex:isConditional?undefined:len-index,revindex0:isConditional?undefined:len-index-1,first:index===0,last:isConditional?undefined:index===len-1,length:isConditional?undefined:len,parent:context}},loop=function(key,value){var inner_context=Twig.ChildContext(context);inner_context[token.value_var]=value;if(token.key_var){inner_context[token.key_var]=key}inner_context.loop=buildLoop(index,len);if(conditional===undefined||Twig.expression.parse.apply(that,[conditional,inner_context])){output.push(Twig.parse.apply(that,[token.output,inner_context]));
index+=1}delete inner_context["loop"];delete inner_context[token.value_var];delete inner_context[token.key_var];Twig.merge(context,inner_context,true)};if(Twig.lib.is("Array",result)){len=result.length;Twig.forEach(result,function(value){var key=index;loop(key,value)})}else if(Twig.lib.is("Object",result)){if(result._keys!==undefined){keyset=result._keys}else{keyset=Object.keys(result)}len=keyset.length;Twig.forEach(keyset,function(key){if(key==="_keys")return;loop(key,result[key])})}continue_chain=output.length===0;return{chain:continue_chain,output:Twig.output.apply(this,[output])}}},{type:Twig.logic.type.endfor,regex:/^endfor$/,next:[],open:false},{type:Twig.logic.type.set,regex:/^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,next:[],open:true,compile:function(token){var key=token.match[1].trim(),expression=token.match[2],expression_stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;token.key=key;token.expression=expression_stack;delete token.match;return token},parse:function(token,context,continue_chain){var value=Twig.expression.parse.apply(this,[token.expression,context]),key=token.key;context[key]=value;return{chain:continue_chain,context:context}}},{type:Twig.logic.type.setcapture,regex:/^set\s+([a-zA-Z0-9_,\s]+)$/,next:[Twig.logic.type.endset],open:true,compile:function(token){var key=token.match[1].trim();token.key=key;delete token.match;return token},parse:function(token,context,continue_chain){var value=Twig.parse.apply(this,[token.output,context]),key=token.key;this.context[key]=value;context[key]=value;return{chain:continue_chain,context:context}}},{type:Twig.logic.type.endset,regex:/^endset$/,next:[],open:false},{type:Twig.logic.type.filter,regex:/^filter\s+(.+)$/,next:[Twig.logic.type.endfilter],open:true,compile:function(token){var expression="|"+token.match[1].trim();token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;delete token.match;return token},parse:function(token,context,chain){var unfiltered=Twig.parse.apply(this,[token.output,context]),stack=[{type:Twig.expression.type.string,value:unfiltered}].concat(token.stack);var output=Twig.expression.parse.apply(this,[stack,context]);return{chain:chain,output:output}}},{type:Twig.logic.type.endfilter,regex:/^endfilter$/,next:[],open:false},{type:Twig.logic.type.block,regex:/^block\s+([a-zA-Z0-9_]+)$/,next:[Twig.logic.type.endblock],open:true,compile:function(token){token.block=token.match[1].trim();delete token.match;return token},parse:function(token,context,chain){var block_output="",output="",isImported=this.importedBlocks.indexOf(token.block)>-1,hasParent=this.blocks[token.block]&&this.blocks[token.block].indexOf(Twig.placeholders.parent)>-1;if(this.blocks[token.block]===undefined||isImported||hasParent||context.loop||token.overwrite){block_output=Twig.expression.parse.apply(this,[{type:Twig.expression.type.string,value:Twig.parse.apply(this,[token.output,context])},context]);if(isImported){this.importedBlocks.splice(this.importedBlocks.indexOf(token.block),1)}if(hasParent){this.blocks[token.block]=Twig.Markup(this.blocks[token.block].replace(Twig.placeholders.parent,block_output))}else{this.blocks[token.block]=block_output}this.originalBlockTokens[token.block]={type:token.type,block:token.block,output:token.output,overwrite:true}}if(this.child.blocks[token.block]){output=this.child.blocks[token.block]}else{output=this.blocks[token.block]}return{chain:chain,output:output}}},{type:Twig.logic.type.endblock,regex:/^endblock(?:\s+([a-zA-Z0-9_]+))?$/,next:[],open:false},{type:Twig.logic.type.extends_,regex:/^extends\s+(.+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim();delete token.match;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){var file=Twig.expression.parse.apply(this,[token.stack,context]);this.extend=file;return{chain:chain,output:""}}},{type:Twig.logic.type.use,regex:/^use\s+(.+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim();delete token.match;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){var file=Twig.expression.parse.apply(this,[token.stack,context]);this.importBlocks(file);return{chain:chain,output:""}}},{type:Twig.logic.type.include,regex:/^include\s+(ignore missing\s+)?(.+?)\s*(?:with\s+([\S\s]+?))?\s*(only)?$/,next:[],open:true,compile:function(token){var match=token.match,includeMissing=match[1]!==undefined,expression=match[2].trim(),withContext=match[3],only=match[4]!==undefined&&match[4].length;delete token.match;token.only=only;token.includeMissing=includeMissing;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;if(withContext!==undefined){token.withStack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:withContext.trim()}]).stack}return token},parse:function(token,context,chain){var innerContext={},withContext,i,template;if(!token.only){innerContext=Twig.ChildContext(context)}if(token.withStack!==undefined){withContext=Twig.expression.parse.apply(this,[token.withStack,context]);for(i in withContext){if(withContext.hasOwnProperty(i))innerContext[i]=withContext[i]}}var file=Twig.expression.parse.apply(this,[token.stack,innerContext]);if(file instanceof Twig.Template){template=file}else{template=this.importFile(file)}return{chain:chain,output:template.render(innerContext)}}},{type:Twig.logic.type.spaceless,regex:/^spaceless$/,next:[Twig.logic.type.endspaceless],open:true,parse:function(token,context,chain){var unfiltered=Twig.parse.apply(this,[token.output,context]),rBetweenTagSpaces=/>\s+</g,output=unfiltered.replace(rBetweenTagSpaces,"><").trim();return{chain:chain,output:output}}},{type:Twig.logic.type.endspaceless,regex:/^endspaceless$/,next:[],open:false},{type:Twig.logic.type.macro,regex:/^macro\s+([a-zA-Z0-9_]+)\s*\(\s*((?:[a-zA-Z0-9_]+(?:,\s*)?)*)\s*\)$/,next:[Twig.logic.type.endmacro],open:true,compile:function(token){var macroName=token.match[1],parameters=token.match[2].split(/[\s,]+/);for(var i=0;i<parameters.length;i++){for(var j=0;j<parameters.length;j++){if(parameters[i]===parameters[j]&&i!==j){throw new Twig.Error("Duplicate arguments for parameter: "+parameters[i])}}}token.macroName=macroName;token.parameters=parameters;delete token.match;return token},parse:function(token,context,chain){var template=this;this.macros[token.macroName]=function(){var macroContext={_self:template.macros};for(var i=0;i<token.parameters.length;i++){var prop=token.parameters[i];if(typeof arguments[i]!=="undefined"){macroContext[prop]=arguments[i]}else{macroContext[prop]=undefined}}return Twig.parse.apply(template,[token.output,macroContext])};return{chain:chain,output:""}}},{type:Twig.logic.type.endmacro,regex:/^endmacro$/,next:[],open:false},{type:Twig.logic.type.import_,regex:/^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim(),contextName=token.match[2].trim();delete token.match;token.expression=expression;token.contextName=contextName;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){if(token.expression!=="_self"){var file=Twig.expression.parse.apply(this,[token.stack,context]);var template=this.importFile(file||token.expression);context[token.contextName]=template.render({},{output:"macros"})}else{context[token.contextName]=this.macros}return{chain:chain,output:""}}},{type:Twig.logic.type.from,regex:/^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,next:[],open:true,compile:function(token){var expression=token.match[1].trim(),macroExpressions=token.match[2].trim().split(/[ ,]+/),macroNames={};for(var i=0;i<macroExpressions.length;i++){var res=macroExpressions[i];var macroMatch=res.match(/^([a-zA-Z0-9_]+)\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/);if(macroMatch){macroNames[macroMatch[1].trim()]=macroMatch[2].trim()}else if(res.match(/^([a-zA-Z0-9_]+)$/)){macroNames[res]=res}else{}}delete token.match;token.expression=expression;token.macroNames=macroNames;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;return token},parse:function(token,context,chain){var macros;if(token.expression!=="_self"){var file=Twig.expression.parse.apply(this,[token.stack,context]);var template=this.importFile(file||token.expression);macros=template.render({},{output:"macros"})}else{macros=this.macros}for(var macroName in token.macroNames){if(macros.hasOwnProperty(macroName)){context[token.macroNames[macroName]]=macros[macroName]}}return{chain:chain,output:""}}},{type:Twig.logic.type.embed,regex:/^embed\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,next:[Twig.logic.type.endembed],open:true,compile:function(token){var match=token.match,includeMissing=match[1]!==undefined,expression=match[2].trim(),withContext=match[3],only=match[4]!==undefined&&match[4].length;delete token.match;token.only=only;token.includeMissing=includeMissing;token.stack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:expression}]).stack;if(withContext!==undefined){token.withStack=Twig.expression.compile.apply(this,[{type:Twig.expression.type.expression,value:withContext.trim()}]).stack}return token},parse:function(token,context,chain){var innerContext={},withContext,i,template;if(!token.only){for(i in context){if(context.hasOwnProperty(i))innerContext[i]=context[i]}}if(token.withStack!==undefined){withContext=Twig.expression.parse.apply(this,[token.withStack,context]);for(i in withContext){if(withContext.hasOwnProperty(i))innerContext[i]=withContext[i]}}var file=Twig.expression.parse.apply(this,[token.stack,innerContext]);if(file instanceof Twig.Template){template=file}else{template=this.importFile(file)}this.blocks={};var output=Twig.parse.apply(this,[token.output,innerContext]);return{chain:chain,output:template.render(innerContext,{blocks:this.blocks})}}},{type:Twig.logic.type.endembed,regex:/^endembed$/,next:[],open:false}];Twig.logic.handler={};Twig.logic.extendType=function(type,value){value=value||"Twig.logic.type"+type;Twig.logic.type[type]=value};Twig.logic.extend=function(definition){if(!definition.type){throw new Twig.Error("Unable to extend logic definition. No type provided for "+definition)}else{Twig.logic.extendType(definition.type)}Twig.logic.handler[definition.type]=definition};while(Twig.logic.definitions.length>0){Twig.logic.extend(Twig.logic.definitions.shift())}Twig.logic.compile=function(raw_token){var expression=raw_token.value.trim(),token=Twig.logic.tokenize.apply(this,[expression]),token_template=Twig.logic.handler[token.type];if(token_template.compile){token=token_template.compile.apply(this,[token]);Twig.log.trace("Twig.logic.compile: ","Compiled logic token to ",token)}return token};Twig.logic.tokenize=function(expression){var token={},token_template_type=null,token_type=null,token_regex=null,regex_array=null,regex=null,match=null;expression=expression.trim();for(token_template_type in Twig.logic.handler){if(Twig.logic.handler.hasOwnProperty(token_template_type)){token_type=Twig.logic.handler[token_template_type].type;token_regex=Twig.logic.handler[token_template_type].regex;regex_array=[];if(token_regex instanceof Array){regex_array=token_regex}else{regex_array.push(token_regex)}while(regex_array.length>0){regex=regex_array.shift();match=regex.exec(expression.trim());if(match!==null){token.type=token_type;token.match=match;Twig.log.trace("Twig.logic.tokenize: ","Matched a ",token_type," regular expression of ",match);return token}}}}throw new Twig.Error("Unable to parse '"+expression.trim()+"'")};Twig.logic.parse=function(token,context,chain){var output="",token_template;context=context||{};Twig.log.debug("Twig.logic.parse: ","Parsing logic token ",token);token_template=Twig.logic.handler[token.type];if(token_template.parse){output=token_template.parse.apply(this,[token,context,chain])}return output};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.expression={};Twig.expression.reservedWords=["true","false","null","TRUE","FALSE","NULL","_context"];Twig.expression.type={comma:"Twig.expression.type.comma",operator:{unary:"Twig.expression.type.operator.unary",binary:"Twig.expression.type.operator.binary"},string:"Twig.expression.type.string",bool:"Twig.expression.type.bool",array:{start:"Twig.expression.type.array.start",end:"Twig.expression.type.array.end"},object:{start:"Twig.expression.type.object.start",end:"Twig.expression.type.object.end"},parameter:{start:"Twig.expression.type.parameter.start",end:"Twig.expression.type.parameter.end"},key:{period:"Twig.expression.type.key.period",brackets:"Twig.expression.type.key.brackets"},filter:"Twig.expression.type.filter",_function:"Twig.expression.type._function",variable:"Twig.expression.type.variable",number:"Twig.expression.type.number",_null:"Twig.expression.type.null",context:"Twig.expression.type.context",test:"Twig.expression.type.test"};Twig.expression.set={operations:[Twig.expression.type.filter,Twig.expression.type.operator.unary,Twig.expression.type.operator.binary,Twig.expression.type.array.end,Twig.expression.type.object.end,Twig.expression.type.parameter.end,Twig.expression.type.comma,Twig.expression.type.test],expressions:[Twig.expression.type._function,Twig.expression.type.bool,Twig.expression.type.string,Twig.expression.type.variable,Twig.expression.type.number,Twig.expression.type._null,Twig.expression.type.context,Twig.expression.type.parameter.start,Twig.expression.type.array.start,Twig.expression.type.object.start]};Twig.expression.set.operations_extended=Twig.expression.set.operations.concat([Twig.expression.type.key.period,Twig.expression.type.key.brackets]);Twig.expression.fn={compile:{push:function(token,stack,output){output.push(token)},push_both:function(token,stack,output){output.push(token);stack.push(token)}},parse:{push:function(token,stack,context){stack.push(token)},push_value:function(token,stack,context){stack.push(token.value)}}};Twig.expression.definitions=[{type:Twig.expression.type.test,regex:/^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*)/,next:Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){token.filter=token.match[2];token.modifier=token.match[1];delete token.match;delete token.value;output.push(token)},parse:function(token,stack,context){var value=stack.pop(),params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),result=Twig.test(token.filter,value,params);if(token.modifier=="not"){stack.push(!result)}else{stack.push(result)}}},{type:Twig.expression.type.comma,regex:/^,/,next:Twig.expression.set.expressions.concat([Twig.expression.type.array.end,Twig.expression.type.object.end]),compile:function(token,stack,output){var i=stack.length-1,stack_token;delete token.match;delete token.value;for(;i>=0;i--){stack_token=stack.pop();if(stack_token.type===Twig.expression.type.object.start||stack_token.type===Twig.expression.type.parameter.start||stack_token.type===Twig.expression.type.array.start){stack.push(stack_token);break}output.push(stack_token)}output.push(token)}},{type:Twig.expression.type.operator.binary,regex:/(^[\+\-~%\?\:]|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^and\s+|^or\s+|^in\s+|^not in\s+|^\.\.)/,next:Twig.expression.set.expressions.concat([Twig.expression.type.operator.unary]),compile:function(token,stack,output){delete token.match;token.value=token.value.trim();var value=token.value,operator=Twig.expression.operator.lookup(value,token);Twig.log.trace("Twig.expression.compile: ","Operator: ",operator," from ",value);while(stack.length>0&&(stack[stack.length-1].type==Twig.expression.type.operator.unary||stack[stack.length-1].type==Twig.expression.type.operator.binary)&&(operator.associativity===Twig.expression.operator.leftToRight&&operator.precidence>=stack[stack.length-1].precidence||operator.associativity===Twig.expression.operator.rightToLeft&&operator.precidence>stack[stack.length-1].precidence)){var temp=stack.pop();output.push(temp)}if(value===":"){if(stack[stack.length-1]&&stack[stack.length-1].value==="?"){}else{var key_token=output.pop();if(key_token.type===Twig.expression.type.string||key_token.type===Twig.expression.type.variable||key_token.type===Twig.expression.type.number){token.key=key_token.value}else{throw new Twig.Error("Unexpected value before ':' of "+key_token.type+" = "+key_token.value)}output.push(token);return}}else{stack.push(operator)}},parse:function(token,stack,context){if(token.key){stack.push(token)}else{Twig.expression.operator.parse(token.value,stack)}}},{type:Twig.expression.type.operator.unary,regex:/(^not\s+)/,next:Twig.expression.set.expressions,compile:function(token,stack,output){delete token.match;token.value=token.value.trim();var value=token.value,operator=Twig.expression.operator.lookup(value,token);Twig.log.trace("Twig.expression.compile: ","Operator: ",operator," from ",value);while(stack.length>0&&(stack[stack.length-1].type==Twig.expression.type.operator.unary||stack[stack.length-1].type==Twig.expression.type.operator.binary)&&(operator.associativity===Twig.expression.operator.leftToRight&&operator.precidence>=stack[stack.length-1].precidence||operator.associativity===Twig.expression.operator.rightToLeft&&operator.precidence>stack[stack.length-1].precidence)){var temp=stack.pop();output.push(temp)}stack.push(operator)},parse:function(token,stack,context){Twig.expression.operator.parse(token.value,stack)}},{type:Twig.expression.type.string,regex:/^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,next:Twig.expression.set.operations,compile:function(token,stack,output){var value=token.value;delete token.match;if(value.substring(0,1)==='"'){value=value.replace('\\"','"')}else{value=value.replace("\\'","'")}token.value=value.substring(1,value.length-1).replace(/\\n/g,"\n").replace(/\\r/g,"\r");Twig.log.trace("Twig.expression.compile: ","String value: ",token.value);output.push(token)},parse:Twig.expression.fn.parse.push_value},{type:Twig.expression.type.parameter.start,regex:/^\(/,next:Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),compile:Twig.expression.fn.compile.push_both,parse:Twig.expression.fn.parse.push},{type:Twig.expression.type.parameter.end,regex:/^\)/,next:Twig.expression.set.operations_extended,compile:function(token,stack,output){var stack_token,end_token=token;stack_token=stack.pop();while(stack.length>0&&stack_token.type!=Twig.expression.type.parameter.start){output.push(stack_token);stack_token=stack.pop()}var param_stack=[];while(token.type!==Twig.expression.type.parameter.start){param_stack.unshift(token);token=output.pop()}param_stack.unshift(token);var is_expression=false;token=output[output.length-1];if(token===undefined||token.type!==Twig.expression.type._function&&token.type!==Twig.expression.type.filter&&token.type!==Twig.expression.type.test&&token.type!==Twig.expression.type.key.brackets&&token.type!==Twig.expression.type.key.period){end_token.expression=true;param_stack.pop();param_stack.shift();end_token.params=param_stack;output.push(end_token)}else{end_token.expression=false;token.params=param_stack}},parse:function(token,stack,context){var new_array=[],array_ended=false,value=null;if(token.expression){value=Twig.expression.parse.apply(this,[token.params,context]);stack.push(value)}else{while(stack.length>0){value=stack.pop();if(value&&value.type&&value.type==Twig.expression.type.parameter.start){array_ended=true;break}new_array.unshift(value)}if(!array_ended){throw new Twig.Error("Expected end of parameter set.")}stack.push(new_array)}}},{type:Twig.expression.type.array.start,regex:/^\[/,next:Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),compile:Twig.expression.fn.compile.push_both,parse:Twig.expression.fn.parse.push},{type:Twig.expression.type.array.end,regex:/^\]/,next:Twig.expression.set.operations_extended,compile:function(token,stack,output){var i=stack.length-1,stack_token;for(;i>=0;i--){stack_token=stack.pop();if(stack_token.type===Twig.expression.type.array.start){break}output.push(stack_token)}output.push(token)},parse:function(token,stack,context){var new_array=[],array_ended=false,value=null;while(stack.length>0){value=stack.pop();if(value.type&&value.type==Twig.expression.type.array.start){array_ended=true;break}new_array.unshift(value)}if(!array_ended){throw new Twig.Error("Expected end of array.")}stack.push(new_array)}},{type:Twig.expression.type.object.start,regex:/^\{/,next:Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),compile:Twig.expression.fn.compile.push_both,parse:Twig.expression.fn.parse.push},{type:Twig.expression.type.object.end,regex:/^\}/,next:Twig.expression.set.operations_extended,compile:function(token,stack,output){var i=stack.length-1,stack_token;for(;i>=0;i--){stack_token=stack.pop();if(stack_token&&stack_token.type===Twig.expression.type.object.start){break}output.push(stack_token)}output.push(token)},parse:function(end_token,stack,context){var new_object={},object_ended=false,token=null,token_key=null,has_value=false,value=null;while(stack.length>0){token=stack.pop();if(token&&token.type&&token.type===Twig.expression.type.object.start){object_ended=true;break}if(token&&token.type&&(token.type===Twig.expression.type.operator.binary||token.type===Twig.expression.type.operator.unary)&&token.key){if(!has_value){throw new Twig.Error("Missing value for key '"+token.key+"' in object definition.")}new_object[token.key]=value;if(new_object._keys===undefined)new_object._keys=[];new_object._keys.unshift(token.key);value=null;has_value=false}else{has_value=true;value=token}}if(!object_ended){throw new Twig.Error("Unexpected end of object.")}stack.push(new_object)}},{type:Twig.expression.type.filter,regex:/^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){token.value=token.match[1];output.push(token)},parse:function(token,stack,context){var input=stack.pop(),params=token.params&&Twig.expression.parse.apply(this,[token.params,context]);stack.push(Twig.filter.apply(this,[token.value,input,params]))}},{type:Twig.expression.type._function,regex:/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,next:Twig.expression.type.parameter.start,transform:function(match,tokens){return"("},compile:function(token,stack,output){var fn=token.match[1];token.fn=fn;delete token.match;delete token.value;output.push(token)},parse:function(token,stack,context){var params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),fn=token.fn,value;if(Twig.functions[fn]){value=Twig.functions[fn].apply(this,params)}else if(typeof context[fn]=="function"){value=context[fn].apply(context,params)}else{throw new Twig.Error(fn+" function does not exist and is not defined in the context")}stack.push(value)}},{type:Twig.expression.type.variable,regex:/^[a-zA-Z_][a-zA-Z0-9_]*/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:Twig.expression.fn.compile.push,validate:function(match,tokens){return Twig.indexOf(Twig.expression.reservedWords,match[0])<0},parse:function(token,stack,context){var value=Twig.expression.resolve(context[token.value],context);stack.push(value)}},{type:Twig.expression.type.key.period,regex:/^\.([a-zA-Z0-9_]+)/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){token.key=token.match[1];delete token.match;delete token.value;output.push(token)},parse:function(token,stack,context){var params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),key=token.key,object=stack.pop(),value;if(object===null||object===undefined){if(this.options.strict_variables){throw new Twig.Error("Can't access a key "+key+" on an null or undefined object.")}else{return null}}var capitalize=function(value){return value.substr(0,1).toUpperCase()+value.substr(1)};if(typeof object==="object"&&key in object){value=object[key]}else if(object["get"+capitalize(key)]!==undefined){value=object["get"+capitalize(key)]}else if(object["is"+capitalize(key)]!==undefined){value=object["is"+capitalize(key)]}else{value=null}stack.push(Twig.expression.resolve(value,object,params))}},{type:Twig.expression.type.key.brackets,regex:/^\[([^\]]*)\]/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:function(token,stack,output){var match=token.match[1];delete token.value;delete token.match;token.stack=Twig.expression.compile({value:match}).stack;output.push(token)},parse:function(token,stack,context){var params=token.params&&Twig.expression.parse.apply(this,[token.params,context]),key=Twig.expression.parse.apply(this,[token.stack,context]),object=stack.pop(),value;if(object===null||object===undefined){if(this.options.strict_variables){throw new Twig.Error("Can't access a key "+key+" on an null or undefined object.")}else{return null}}if(typeof object==="object"&&key in object){value=object[key]}else{value=null}stack.push(Twig.expression.resolve(value,object,params))}},{type:Twig.expression.type._null,regex:/^(null|NULL|none|NONE)/,next:Twig.expression.set.operations,compile:function(token,stack,output){delete token.match;token.value=null;output.push(token)},parse:Twig.expression.fn.parse.push_value},{type:Twig.expression.type.context,regex:/^_context/,next:Twig.expression.set.operations_extended.concat([Twig.expression.type.parameter.start]),compile:Twig.expression.fn.compile.push,parse:function(token,stack,context){stack.push(context)}},{type:Twig.expression.type.number,regex:/^\-?\d+(\.\d+)?/,next:Twig.expression.set.operations,compile:function(token,stack,output){token.value=Number(token.value);output.push(token)},parse:Twig.expression.fn.parse.push_value},{type:Twig.expression.type.bool,regex:/^(true|TRUE|false|FALSE)/,next:Twig.expression.set.operations,compile:function(token,stack,output){token.value=token.match[0].toLowerCase()==="true";delete token.match;output.push(token)},parse:Twig.expression.fn.parse.push_value}];Twig.expression.resolve=function(value,context,params){if(typeof value=="function"){return value.apply(context,params||[])}else{return value}};Twig.expression.handler={};Twig.expression.extendType=function(type){Twig.expression.type[type]="Twig.expression.type."+type};Twig.expression.extend=function(definition){if(!definition.type){throw new Twig.Error("Unable to extend logic definition. No type provided for "+definition)}Twig.expression.handler[definition.type]=definition};while(Twig.expression.definitions.length>0){Twig.expression.extend(Twig.expression.definitions.shift())}Twig.expression.tokenize=function(expression){var tokens=[],exp_offset=0,next=null,type,regex,regex_array,token_next,match_found,invalid_matches=[],match_function;match_function=function(){var match=Array.prototype.slice.apply(arguments),string=match.pop(),offset=match.pop();Twig.log.trace("Twig.expression.tokenize","Matched a ",type," regular expression of ",match);if(next&&Twig.indexOf(next,type)<0){invalid_matches.push(type+" cannot follow a "+tokens[tokens.length-1].type+" at template:"+exp_offset+" near '"+match[0].substring(0,20)+"...'");return match[0]}if(Twig.expression.handler[type].validate&&!Twig.expression.handler[type].validate(match,tokens)){return match[0]}invalid_matches=[];tokens.push({type:type,value:match[0],match:match});match_found=true;next=token_next;exp_offset+=match[0].length;if(Twig.expression.handler[type].transform){return Twig.expression.handler[type].transform(match,tokens)}return""};Twig.log.debug("Twig.expression.tokenize","Tokenizing expression ",expression);while(expression.length>0){expression=expression.trim();for(type in Twig.expression.handler){if(Twig.expression.handler.hasOwnProperty(type)){token_next=Twig.expression.handler[type].next;regex=Twig.expression.handler[type].regex;if(regex instanceof Array){regex_array=regex}else{regex_array=[regex]}match_found=false;while(regex_array.length>0){regex=regex_array.pop();expression=expression.replace(regex,match_function)}if(match_found){break}}}if(!match_found){if(invalid_matches.length>0){throw new Twig.Error(invalid_matches.join(" OR "))}else{throw new Twig.Error("Unable to parse '"+expression+"' at template position"+exp_offset)}}}Twig.log.trace("Twig.expression.tokenize","Tokenized to ",tokens);return tokens};Twig.expression.compile=function(raw_token){var expression=raw_token.value,tokens=Twig.expression.tokenize(expression),token=null,output=[],stack=[],token_template=null;Twig.log.trace("Twig.expression.compile: ","Compiling ",expression);while(tokens.length>0){token=tokens.shift();token_template=Twig.expression.handler[token.type];Twig.log.trace("Twig.expression.compile: ","Compiling ",token);token_template.compile&&token_template.compile(token,stack,output);Twig.log.trace("Twig.expression.compile: ","Stack is",stack);Twig.log.trace("Twig.expression.compile: ","Output is",output)}while(stack.length>0){output.push(stack.pop())}Twig.log.trace("Twig.expression.compile: ","Final output is",output);raw_token.stack=output;delete raw_token.value;return raw_token};Twig.expression.parse=function(tokens,context){var that=this;if(!(tokens instanceof Array)){tokens=[tokens]}var stack=[],token_template=null;Twig.forEach(tokens,function(token){token_template=Twig.expression.handler[token.type];token_template.parse&&token_template.parse.apply(that,[token,stack,context])});return stack.pop()};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.expression.operator={leftToRight:"leftToRight",rightToLeft:"rightToLeft"};var containment=function(a,b){if(b.indexOf!==undefined){return a===b||a!==""&&b.indexOf(a)>-1}else{var el;for(el in b){if(b.hasOwnProperty(el)&&b[el]===a){return true}}return false}};Twig.expression.operator.lookup=function(operator,token){switch(operator){case"..":case"not in":case"in":token.precidence=20;token.associativity=Twig.expression.operator.leftToRight;break;case",":token.precidence=18;token.associativity=Twig.expression.operator.leftToRight;break;case"?":case":":token.precidence=16;token.associativity=Twig.expression.operator.rightToLeft;break;case"or":token.precidence=14;token.associativity=Twig.expression.operator.leftToRight;break;case"and":token.precidence=13;token.associativity=Twig.expression.operator.leftToRight;break;case"==":case"!=":token.precidence=9;token.associativity=Twig.expression.operator.leftToRight;break;case"<":case"<=":case">":case">=":token.precidence=8;token.associativity=Twig.expression.operator.leftToRight;break;case"~":case"+":case"-":token.precidence=6;token.associativity=Twig.expression.operator.leftToRight;break;case"//":case"**":case"*":case"/":case"%":token.precidence=5;token.associativity=Twig.expression.operator.leftToRight;break;case"not":token.precidence=3;token.associativity=Twig.expression.operator.rightToLeft;break;default:throw new Twig.Error(operator+" is an unknown operator.")}token.operator=operator;return token};Twig.expression.operator.parse=function(operator,stack){Twig.log.trace("Twig.expression.operator.parse: ","Handling ",operator);var a,b,c;switch(operator){case":":break;case"?":c=stack.pop();b=stack.pop();a=stack.pop();if(a){stack.push(b)}else{stack.push(c)}break;case"+":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a+b);break;case"-":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a-b);break;case"*":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a*b);break;case"/":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a/b);break;case"//":b=parseFloat(stack.pop());a=parseFloat(stack.pop());
stack.push(parseInt(a/b));break;case"%":b=parseFloat(stack.pop());a=parseFloat(stack.pop());stack.push(a%b);break;case"~":b=stack.pop();a=stack.pop();stack.push((a!=null?a.toString():"")+(b!=null?b.toString():""));break;case"not":case"!":stack.push(!stack.pop());break;case"<":b=stack.pop();a=stack.pop();stack.push(a<b);break;case"<=":b=stack.pop();a=stack.pop();stack.push(a<=b);break;case">":b=stack.pop();a=stack.pop();stack.push(a>b);break;case">=":b=stack.pop();a=stack.pop();stack.push(a>=b);break;case"===":b=stack.pop();a=stack.pop();stack.push(a===b);break;case"==":b=stack.pop();a=stack.pop();stack.push(a==b);break;case"!==":b=stack.pop();a=stack.pop();stack.push(a!==b);break;case"!=":b=stack.pop();a=stack.pop();stack.push(a!=b);break;case"or":b=stack.pop();a=stack.pop();stack.push(a||b);break;case"and":b=stack.pop();a=stack.pop();stack.push(a&&b);break;case"**":b=stack.pop();a=stack.pop();stack.push(Math.pow(a,b));break;case"not in":b=stack.pop();a=stack.pop();stack.push(!containment(a,b));break;case"in":b=stack.pop();a=stack.pop();stack.push(containment(a,b));break;case"..":b=stack.pop();a=stack.pop();stack.push(Twig.functions.range(a,b));break;default:throw new Twig.Error(operator+" is an unknown operator.")}};return Twig}(Twig||{});var Twig=function(Twig){function is(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type}Twig.filters={upper:function(value){if(typeof value!=="string"){return value}return value.toUpperCase()},lower:function(value){if(typeof value!=="string"){return value}return value.toLowerCase()},capitalize:function(value){if(typeof value!=="string"){return value}return value.substr(0,1).toUpperCase()+value.toLowerCase().substr(1)},title:function(value){if(typeof value!=="string"){return value}return value.toLowerCase().replace(/(^|\s)([a-z])/g,function(m,p1,p2){return p1+p2.toUpperCase()})},length:function(value){if(Twig.lib.is("Array",value)||typeof value==="string"){return value.length}else if(Twig.lib.is("Object",value)){if(value._keys===undefined){return Object.keys(value).length}else{return value._keys.length}}else{return 0}},reverse:function(value){if(is("Array",value)){return value.reverse()}else if(is("String",value)){return value.split("").reverse().join("")}else if(is("Object",value)){var keys=value._keys||Object.keys(value).reverse();value._keys=keys;return value}},sort:function(value){if(is("Array",value)){return value.sort()}else if(is("Object",value)){delete value._keys;var keys=Object.keys(value),sorted_keys=keys.sort(function(a,b){return value[a]>value[b]});value._keys=sorted_keys;return value}},keys:function(value){if(value===undefined||value===null){return}var keyset=value._keys||Object.keys(value),output=[];Twig.forEach(keyset,function(key){if(key==="_keys")return;if(value.hasOwnProperty(key)){output.push(key)}});return output},url_encode:function(value){if(value===undefined||value===null){return}return encodeURIComponent(value)},join:function(value,params){if(value===undefined||value===null){return}var join_str="",output=[],keyset=null;if(params&&params[0]){join_str=params[0]}if(is("Array",value)){output=value}else{keyset=value._keys||Object.keys(value);Twig.forEach(keyset,function(key){if(key==="_keys")return;if(value.hasOwnProperty(key)){output.push(value[key])}})}return output.join(join_str)},"default":function(value,params){if(params===undefined||params.length!==1){throw new Twig.Error("default filter expects one argument")}if(value===undefined||value===null||value===""){return params[0]}else{return value}},json_encode:function(value){if(value&&value.hasOwnProperty("_keys")){delete value._keys}if(value===undefined||value===null){return"null"}return JSON.stringify(value)},merge:function(value,params){var obj=[],arr_index=0,keyset=[];if(!is("Array",value)){obj={}}else{Twig.forEach(params,function(param){if(!is("Array",param)){obj={}}})}if(!is("Array",obj)){obj._keys=[]}if(is("Array",value)){Twig.forEach(value,function(val){if(obj._keys)obj._keys.push(arr_index);obj[arr_index]=val;arr_index++})}else{keyset=value._keys||Object.keys(value);Twig.forEach(keyset,function(key){obj[key]=value[key];obj._keys.push(key);var int_key=parseInt(key,10);if(!isNaN(int_key)&&int_key>=arr_index){arr_index=int_key+1}})}Twig.forEach(params,function(param){if(is("Array",param)){Twig.forEach(param,function(val){if(obj._keys)obj._keys.push(arr_index);obj[arr_index]=val;arr_index++})}else{keyset=param._keys||Object.keys(param);Twig.forEach(keyset,function(key){if(!obj[key])obj._keys.push(key);obj[key]=param[key];var int_key=parseInt(key,10);if(!isNaN(int_key)&&int_key>=arr_index){arr_index=int_key+1}})}});if(params.length===0){throw new Twig.Error("Filter merge expects at least one parameter")}return obj},date:function(value,params){var date=Twig.functions.date(value);var format=params&&params.length?params[0]:"F j, Y H:i";return Twig.lib.formatDate(date,format)},date_modify:function(value,params){if(value===undefined||value===null){return}if(params===undefined||params.length!==1){throw new Twig.Error("date_modify filter expects 1 argument")}var modifyText=params[0],time;if(Twig.lib.is("Date",value)){time=Twig.lib.strtotime(modifyText,value.getTime()/1e3)}if(Twig.lib.is("String",value)){time=Twig.lib.strtotime(modifyText,Twig.lib.strtotime(value))}if(Twig.lib.is("Number",value)){time=Twig.lib.strtotime(modifyText,value)}return new Date(time*1e3)},replace:function(value,params){if(value===undefined||value===null){return}var pairs=params[0],tag;for(tag in pairs){if(pairs.hasOwnProperty(tag)&&tag!=="_keys"){value=Twig.lib.replaceAll(value,tag,pairs[tag])}}return value},format:function(value,params){if(value===undefined||value===null){return}return Twig.lib.vsprintf(value,params)},striptags:function(value){if(value===undefined||value===null){return}return Twig.lib.strip_tags(value)},escape:function(value){if(value===undefined||value===null){return}var raw_value=value.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");return Twig.Markup(raw_value)},e:function(value){return Twig.filters.escape(value)},nl2br:function(value){if(value===undefined||value===null){return}var linebreak_tag="BACKSLASH_n_replace",br="<br />"+linebreak_tag;value=Twig.filters.escape(value).replace(/\r\n/g,br).replace(/\r/g,br).replace(/\n/g,br);value=Twig.lib.replaceAll(value,linebreak_tag,"\n");return Twig.Markup(value)},number_format:function(value,params){var number=value,decimals=params&&params[0]?params[0]:undefined,dec=params&&params[1]!==undefined?params[1]:".",sep=params&&params[2]!==undefined?params[2]:",";number=(number+"").replace(/[^0-9+\-Ee.]/g,"");var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),s="",toFixedFix=function(n,prec){var k=Math.pow(10,prec);return""+Math.round(n*k)/k};s=(prec?toFixedFix(n,prec):""+Math.round(n)).split(".");if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep)}if((s[1]||"").length<prec){s[1]=s[1]||"";s[1]+=new Array(prec-s[1].length+1).join("0")}return s.join(dec)},trim:function(value,params){if(value===undefined||value===null){return}var str=Twig.filters.escape(""+value),whitespace;if(params&&params[0]){whitespace=""+params[0]}else{whitespace=" \n\r	\f            ​\u2028\u2029　"}for(var i=0;i<str.length;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break}}for(i=str.length-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break}}return whitespace.indexOf(str.charAt(0))===-1?str:""},truncate:function(value,params){var length=30,preserve=false,separator="...";value=value+"";if(params){if(params[0]){length=params[0]}if(params[1]){preserve=params[1]}if(params[2]){separator=params[2]}}if(value.length>length){if(preserve){length=value.indexOf(" ",length);if(length===-1){return value}}value=value.substr(0,length)+separator}return value},slice:function(value,params){if(value===undefined||value===null){return}if(params===undefined||params.length<1){throw new Twig.Error("slice filter expects at least 1 argument")}var start=params[0]||0;var length=params.length>1?params[1]:value.length;var startIndex=start>=0?start:Math.max(value.length+start,0);if(Twig.lib.is("Array",value)){var output=[];for(var i=startIndex;i<startIndex+length&&i<value.length;i++){output.push(value[i])}return output}else if(Twig.lib.is("String",value)){return value.substr(startIndex,length)}else{throw new Twig.Error("slice filter expects value to be an array or string")}},abs:function(value){if(value===undefined||value===null){return}return Math.abs(value)},first:function(value){if(is("Array",value)){return value[0]}else if(is("Object",value)){if("_keys"in value){return value[value._keys[0]]}}else if(typeof value==="string"){return value.substr(0,1)}return},split:function(value,params){if(value===undefined||value===null){return}if(params===undefined||params.length<1||params.length>2){throw new Twig.Error("split filter expects 1 or 2 argument")}if(Twig.lib.is("String",value)){var delimiter=params[0],limit=params[1],split=value.split(delimiter);if(limit===undefined){return split}else if(limit<0){return value.split(delimiter,split.length+limit)}else{var limitedSplit=[];if(delimiter==""){while(split.length>0){var temp="";for(var i=0;i<limit&&split.length>0;i++){temp+=split.shift()}limitedSplit.push(temp)}}else{for(var i=0;i<limit-1&&split.length>0;i++){limitedSplit.push(split.shift())}if(split.length>0){limitedSplit.push(split.join(delimiter))}}return limitedSplit}}else{throw new Twig.Error("split filter expects value to be a string")}},last:function(value){if(Twig.lib.is("Object",value)){var keys;if(value._keys===undefined){keys=Object.keys(value)}else{keys=value._keys}return value[keys[keys.length-1]]}return value[value.length-1]},raw:function(value){return Twig.Markup(value)},batch:function(items,params){var size=params.shift(),fill=params.shift(),result,last,missing;if(!Twig.lib.is("Array",items)){throw new Twig.Error("batch filter expects items to be an array")}if(!Twig.lib.is("Number",size)){throw new Twig.Error("batch filter expects size to be a number")}size=Math.ceil(size);result=Twig.lib.chunkArray(items,size);if(fill&&items.length%size!=0){last=result.pop();missing=size-last.length;while(missing--){last.push(fill)}result.push(last)}return result},round:function(value,params){params=params||[];var precision=params.length>0?params[0]:0,method=params.length>1?params[1]:"common";value=parseFloat(value);if(precision&&!Twig.lib.is("Number",precision)){throw new Twig.Error("round filter expects precision to be a number")}if(method==="common"){return Twig.lib.round(value,precision)}if(!Twig.lib.is("Function",Math[method])){throw new Twig.Error("round filter expects method to be 'floor', 'ceil', or 'common'")}return Math[method](value*Math.pow(10,precision))/Math.pow(10,precision)}};Twig.filter=function(filter,value,params){if(!Twig.filters[filter]){throw"Unable to find filter "+filter}return Twig.filters[filter].apply(this,[value,params])};Twig.filter.extend=function(filter,definition){Twig.filters[filter]=definition};return Twig}(Twig||{});var Twig=function(Twig){function is(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type}Twig.functions={range:function(low,high,step){var matrix=[];var inival,endval,plus;var walker=step||1;var chars=false;if(!isNaN(low)&&!isNaN(high)){inival=parseInt(low,10);endval=parseInt(high,10)}else if(isNaN(low)&&isNaN(high)){chars=true;inival=low.charCodeAt(0);endval=high.charCodeAt(0)}else{inival=isNaN(low)?0:low;endval=isNaN(high)?0:high}plus=inival>endval?false:true;if(plus){while(inival<=endval){matrix.push(chars?String.fromCharCode(inival):inival);inival+=walker}}else{while(inival>=endval){matrix.push(chars?String.fromCharCode(inival):inival);inival-=walker}}return matrix},cycle:function(arr,i){var pos=i%arr.length;return arr[pos]},dump:function(){var EOL="\n",indentChar="  ",indentTimes=0,out="",args=Array.prototype.slice.call(arguments),indent=function(times){var ind="";while(times>0){times--;ind+=indentChar}return ind},displayVar=function(variable){out+=indent(indentTimes);if(typeof variable==="object"){dumpVar(variable)}else if(typeof variable==="function"){out+="function()"+EOL}else if(typeof variable==="string"){out+="string("+variable.length+') "'+variable+'"'+EOL}else if(typeof variable==="number"){out+="number("+variable+")"+EOL}else if(typeof variable==="boolean"){out+="bool("+variable+")"+EOL}},dumpVar=function(variable){var i;if(variable===null){out+="NULL"+EOL}else if(variable===undefined){out+="undefined"+EOL}else if(typeof variable==="object"){out+=indent(indentTimes)+typeof variable;indentTimes++;out+="("+function(obj){var size=0,key;for(key in obj){if(obj.hasOwnProperty(key)){size++}}return size}(variable)+") {"+EOL;for(i in variable){out+=indent(indentTimes)+"["+i+"]=> "+EOL;displayVar(variable[i])}indentTimes--;out+=indent(indentTimes)+"}"+EOL}else{displayVar(variable)}};if(args.length==0)args.push(this.context);Twig.forEach(args,function(variable){dumpVar(variable)});return out},date:function(date,time){var dateObj;if(date===undefined){dateObj=new Date}else if(Twig.lib.is("Date",date)){dateObj=date}else if(Twig.lib.is("String",date)){dateObj=new Date(Twig.lib.strtotime(date)*1e3)}else if(Twig.lib.is("Number",date)){dateObj=new Date(date*1e3)}else{throw new Twig.Error("Unable to parse date "+date)}return dateObj},block:function(block){if(this.originalBlockTokens[block]){return Twig.logic.parse.apply(this,[this.originalBlockTokens[block],this.context]).output}else{return this.blocks[block]}},parent:function(){return Twig.placeholders.parent},attribute:function(object,method,params){if(Twig.lib.is("Object",object)){if(object.hasOwnProperty(method)){if(typeof object[method]==="function"){return object[method].apply(undefined,params)}else{return object[method]}}}return object[method]||undefined},template_from_string:function(template){if(template===undefined){template=""}return new Twig.Template({options:this.options,data:template})},random:function(value){var LIMIT_INT31=2147483648;function getRandomNumber(n){var random=Math.floor(Math.random()*LIMIT_INT31);var limits=[0,n];var min=Math.min.apply(null,limits),max=Math.max.apply(null,limits);return min+Math.floor((max-min+1)*random/LIMIT_INT31)}if(Twig.lib.is("Number",value)){return getRandomNumber(value)}if(Twig.lib.is("String",value)){return value.charAt(getRandomNumber(value.length-1))}if(Twig.lib.is("Array",value)){return value[getRandomNumber(value.length-1)]}if(Twig.lib.is("Object",value)){var keys=Object.keys(value);return value[keys[getRandomNumber(keys.length-1)]]}return getRandomNumber(LIMIT_INT31-1)}};Twig._function=function(_function,value,params){if(!Twig.functions[_function]){throw"Unable to find function "+_function}return Twig.functions[_function](value,params)};Twig._function.extend=function(_function,definition){Twig.functions[_function]=definition};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.tests={empty:function(value){if(value===null||value===undefined)return true;if(typeof value==="number")return false;if(value.length&&value.length>0)return false;for(var key in value){if(value.hasOwnProperty(key))return false}return true},odd:function(value){return value%2===1},even:function(value){return value%2===0},divisibleby:function(value,params){return value%params[0]===0},defined:function(value){return value!==undefined},none:function(value){return value===null},"null":function(value){return this.none(value)},sameas:function(value,params){return value===params[0]},iterable:function(value){return value&&(Twig.lib.is("Array",value)||Twig.lib.is("Object",value))}};Twig.test=function(test,value,params){if(!Twig.tests[test]){throw"Test "+test+" is not defined."}return Twig.tests[test](value,params)};Twig.test.extend=function(test,definition){Twig.tests[test]=definition};return Twig}(Twig||{});var Twig=function(Twig){"use strict";Twig.exports={VERSION:Twig.VERSION};Twig.exports.twig=function twig(params){"use strict";var id=params.id,options={strict_variables:params.strict_variables||false,autoescape:params.autoescape!=null&&params.autoescape||false,allowInlineIncludes:params.allowInlineIncludes||false,rethrow:params.rethrow||false};if(id){Twig.validateId(id)}if(params.debug!==undefined){Twig.debug=params.debug}if(params.trace!==undefined){Twig.trace=params.trace}if(params.data!==undefined){return new Twig.Template({data:params.data,module:params.module,id:id,options:options})}else if(params.ref!==undefined){if(params.id!==undefined){throw new Twig.Error("Both ref and id cannot be set on a twig.js template.")}return Twig.Templates.load(params.ref)}else if(params.href!==undefined){return Twig.Templates.loadRemote(params.href,{id:id,method:"ajax",base:params.base,module:params.module,precompiled:params.precompiled,async:params.async,options:options},params.load,params.error)}else if(params.path!==undefined){return Twig.Templates.loadRemote(params.path,{id:id,method:"fs",base:params.base,module:params.module,precompiled:params.precompiled,async:params.async,options:options},params.load,params.error)}};Twig.exports.extendFilter=function(filter,definition){Twig.filter.extend(filter,definition)};Twig.exports.extendFunction=function(fn,definition){Twig._function.extend(fn,definition)};Twig.exports.extendTest=function(test,definition){Twig.test.extend(test,definition)};Twig.exports.extendTag=function(definition){Twig.logic.extend(definition)};Twig.exports.extend=function(fn){fn(Twig)};Twig.exports.compile=function(markup,options){var id=options.filename,path=options.filename,template;template=new Twig.Template({data:markup,path:path,id:id,options:options.settings["twig options"]});return function(context){return template.render(context)}};Twig.exports.renderFile=function(path,options,fn){if("function"==typeof options){fn=options;options={}}options=options||{};var params={path:path,base:options.settings["views"],load:function(template){fn(null,template.render(options))}};var view_options=options.settings["twig options"];if(view_options){for(var option in view_options)if(view_options.hasOwnProperty(option)){params[option]=view_options[option]}}Twig.exports.twig(params)};Twig.exports.__express=Twig.exports.renderFile;Twig.exports.cache=function(cache){Twig.cache=cache};return Twig}(Twig||{});var Twig=function(Twig){Twig.compiler={module:{}};Twig.compiler.compile=function(template,options){var tokens=JSON.stringify(template.tokens),id=template.id,output;if(options.module){if(Twig.compiler.module[options.module]===undefined){throw new Twig.Error("Unable to find module type "+options.module)}output=Twig.compiler.module[options.module](id,tokens,options.twig)}else{output=Twig.compiler.wrap(id,tokens)}return output};Twig.compiler.module={amd:function(id,tokens,pathToTwig){return'define(["'+pathToTwig+'"], function (Twig) {\n	var twig, templates;\ntwig = Twig.twig;\ntemplates = '+Twig.compiler.wrap(id,tokens)+"\n	return templates;\n});"},node:function(id,tokens){return'var twig = require("twig").twig;\n'+"exports.template = "+Twig.compiler.wrap(id,tokens)},cjs2:function(id,tokens,pathToTwig){return'module.declare([{ twig: "'+pathToTwig+'" }], function (require, exports, module) {\n'+'	var twig = require("twig").twig;\n'+"	exports.template = "+Twig.compiler.wrap(id,tokens)+"\n});"}};Twig.compiler.wrap=function(id,tokens){return'twig({id:"'+id.replace('"','\\"')+'", data:'+tokens+", precompiled: true});\n"};return Twig}(Twig||{});if(typeof module!=="undefined"&&module.declare){module.declare([],function(require,exports,module){for(key in Twig.exports){if(Twig.exports.hasOwnProperty(key)){exports[key]=Twig.exports[key]}}})}else if(typeof define=="function"&&define.amd){define('twigjs',[],function(){return Twig.exports})}else if(typeof module!=="undefined"&&module.exports){module.exports=Twig.exports}else{window.twig=Twig.exports.twig;window.Twig=Twig.exports}
//# sourceMappingURL=twig.min.js.map;
define('twig',['marionette', 'twigjs'], function f1(Mar, Twig) {

  var GUID = "{BA9B921C-B7C0-4313-BC13-30DC301C1D6E}";

  if (typeof Marionette.Renderer.render[GUID] !== "object") {
    Marionette.Renderer.render = function f2(template, data) {
      return template.render(data);
    }
    Marionette.Renderer.render[GUID] = {};
  }

  function loadResource(resourceName, parentRequire, callback, config) {
    var resourceConfig = parseResource(resourceName);
    var resourcePath = resourceConfig.resourcePath;
    var baseTemplate = resourceConfig.baseTemplate;
    if (Marionette.Renderer.render[GUID][resourcePath]) {
      callback(Marionette.Renderer.render[GUID][resourcePath]);
      return;
    }

    function innerRender(templateContent,  Mar, Twig) {
      return innerFullRender(templateContent, null, Mar, Twig);
    }

    function innerFullRender(templateContent, baseContent, Mar, Twig) {
      if (baseContent) {
        Marionette.Renderer.render[GUID][baseTemplate] = Twig.twig(
          {
            id: baseTemplate,
            data: baseContent,
            allowInlineIncludes:true
          }
        );
      }
      Marionette.Renderer.render[GUID][resourcePath] = Twig.twig(
        {
          id: resourcePath,
          base: baseTemplate,
          data: templateContent,
          allowInlineIncludes: true
        }
      );
      //Marionette.Renderer.render[GUID][resourcePath].compile({});
      callback(Marionette.Renderer.render[GUID][resourcePath]);
    }

    /*innerFullRender(text.get("assets/js/templates/" + resourcePath + ".twig"),
                    text.get("assets/js/templates/" + baseTemplate + ".twig"),
                    Marionette, Twig);*/
    if (baseTemplate) {
      parentRequire([ "text!" + "templates/" + resourcePath + ".twig",
                      "text!" + "templates/" + baseTemplate + ".twig",
                      'marionette', 'twigjs'], innerFullRender);
    } else {
      parentRequire([ "text!" + "templates/" + resourcePath + ".twig",
                      'marionette', 'twigjs'], innerRender);
    }
  };


  function parseResource(resourceName) {
    var resourceParts = resourceName.split(":");
    var resourcePath = resourceParts[0];
    var baseTemplate = resourceParts[1];
    return {
      resourcePath: resourcePath,
      baseTemplate: baseTemplate
    };
  }

  return ({
    load: loadResource,
    normalize: function (name, normalize) {
         return name;
     }
  });

});

/**
 * @license RequireJS text 2.0.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    'use strict';

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.14',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.lastIndexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config && config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config && config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'] &&
            !process.versions['atom-shell'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file[0] === '\uFEFF') {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                if (errback) {
                    errback(e);
                }
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status || 0;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        if (errback) {
                            errback(err);
                        }
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes;
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});


define('text!templates/admin/layout.twig',[],function () { return '{% extends "baseLayout" %}\n{% block body0 %}\n<h1>Это лэйаут админки</h1>\n{{ rand }}\n{%  endblock %}\n';});


define('text!templates/baseLayout.twig',[],function () { return '<h1>base layout</h1>\n{% block body0  %}{%  endblock body0 %}\n';});


define('application/views/admin/layoutView',["marionette","twig!admin/layout:baseLayout", "twig!admin/layout:baseLayout"], function(Marionette, adminLayout, al) {
//  var bb = (new (Marionette.LayoutView.extend({
  //  template: al,
  //  el: '#div'
  //})))
  //bb.model=new Backbone.Model({rand: Math.random()});
  bb.render();
  return new (Marionette.LayoutView.extend({
    template: adminLayout,
    el: '#head'
  }));
});

define('application/application',["marionette",
  "application/views/admin/layoutView"
  ],
  function(Marionette, adminLayoutView, dialogRegion){

  var ContactManager = new Marionette.Application();
  ContactManager.on("before:start", function(event){
    Backbone.history.start()
    /*this.contacts = new ContactsCollection();
    this.contacts.add({id:16, naem:'Joe-16'});
    this.contacts.models[0].save();
    this.contacts.fetch();*/
  });

  /*ContactManager.addRegions({
    headerRegion: "#header-region",
    mainRegion: "#main-region",
    dialogRegion: Marionette.Region.Dialog.extend({
      el: "#dialog-region"
    })
  });*/

  ContactManager.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
  };
  adminLayoutView.render();
  return ContactManager;

});

requirejs.config({
  "baseUrl": "./assets/js",
  "urlArgs": "bust=" +  (new Date()).getTime(),
  "optimize": 'none',
  "paths": {
    "jquery": "../vendor/jquery-2.1.4.min",
    "jquery-ui": "../vendor/jquery-ui-1.11.4/jquery-ui.min",
    "json3": "../vendor/json3.min",
    "underscore": "../vendor/underscore-min",
    "backbone": "../vendor/backbone/backbone-dev",
    "marionette": "../vendor/backbone.marionette/backbone.marionette",
    "twigjs": "../vendor/twig.js/twig.min",
    "twig": "../js/helpers/twigLoader",
    "text": "../vendor/text",
    "templates": "./templates",
    "localstorage": "../vendor/backbone/backbone.localStorage-min",

    "application": "./"
  },

    shim: {
    //underscore: {
      //exports: "_"
    //},
    //"jquery-ui": {
  //    deps: ["jquery"]
  //  },
  twig: {
    deps: ["backbone", "marionette"]
  },
    backbone: {
      deps: ["underscore", "jquery"],
      //exports: "Backbone"
    },
    marionette: {
      deps: ["backbone"],
      //exports: "Marionette"
    }
    //twigjs: {
  //    exports: "Twig"
  //  }
  }

});
require(["application/application"], function(Application){
  Application.start();
});

define("config_application", function(){});
