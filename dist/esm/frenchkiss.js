/**
 * @license frenchkiss 0.2.2
 * Copyright (c) 2018-2020 Koala Interactive, Inc.
 * License: MIT
 */
var t=/^\s*\w+\s*$/,n=/^\s*(\w+)\s*,\s*(select|plural)\s*,/i,e=JSON.stringify,r=function(t){return'(p["'+t+'"]||(p["'+t+'"]=="0"?0:"'+t+'" in p?"":v("'+t+'",k,l)))'};function o(t){for(var n={},o=function t(n,o){var u=[];var f=n.length;for(var i=0;i<f;++i){var a=n[i],c=a[0],s=a[1],l="";if(0===c&&s)l=e(s);else if(1===c)l=r(s.trim());else if(2===c){for(var v=a[2],p=a[3],h=a[4],g=p.length,b=0;b<g;++b)h?"="===p[b][0][0]?l+='p["'+v+'"]=='+e(p[b][0].substr(1)):(o[v]=1,l+='m["'+v+'"]=='+e(p[b][0])):l+='p["'+v+'"]=='+e(p[b][0]),l+="?"+t(p[b][1],o)+":";l="("+l+t(s,o)+")"}l&&u.push(l)}return u.join("+")||'""'}(u(t),n),f=Object.keys(n),i=f.length,a=[],c=0;c<i;++c)a[c]=f[c]+':f(p["'+f[c]+'"])';return Function("a","f","k","l","v","var p=a||{}"+(i?",m=f?{"+a+"}:{}":"")+";return "+o)}function u(e){for(var r=0,o="",u=e.length,i=[],a=0;a<u;++a){var c=e[a],s=void 0;"{"===c?r++||(s=[0,o]):"}"===c&&(--r||(s=t.test(o)?[1,o]:n.test(o)?f(o):[0,o])),s?(i.push(s),o=""):o+=c}return i.push([0,o]),i}function f(t){for(var e=t.match(n),r=e[1],o="p"===e[2][0].toLowerCase(),f=u(t.replace(n,"")),i=f.length,a=[],c=[0,""],s=0;s<i-1;){var l=f[s++][1].trim(),v=u(f[s++][1]);"other"===l?c=v:o&&"="===l[0]?a.unshift([l,v]):a.push([l,v])}return[2,c,r,a,o]}var i={},a={},c={},s="",l="",v=function(t){return t},p=function(){return""},h=function(t,n){return i[n]&&i[n][t]||a[n]&&"string"==typeof a[n][t]&&(i[n][t]=o(a[n][t]))},g=function t(n,e,r){for(var o=Object.keys(e),u=o.length,f=0;f<u;++f){var i=o[f],a=r+i;"object"==typeof e[i]?(t(n,e[i],a+"."),delete n[i]):n[a]=e[i]+""}},b=function t(n,e,r,o){for(var u=Object.keys(r),f=u.length,i=0;i<f;++i){var a=u[i],c=o+a;"object"==typeof r[a]?t(n,e,r[a],c+"."):n[c]!==r[a]&&(delete e[c],n[c]=r[a]+"")}};export default{cache:i,store:a,t:function(t,n,e){var r,o=e||s;return o&&(r=h(t,o))?r(n,c[o],t,o,p):(o=l)&&(r=h(t,o))?r(n,c[o],t,o,p):v(t,n,e||s)},onMissingKey:function(t){v=t},onMissingVariable:function(t){p=t},locale:function(t){return t&&(s=t),s},fallback:function(t){return t&&(l=t),l},set:function(t,n){g(n,n,""),i[t]={},a[t]=n},unset:function(t){delete i[t],delete a[t]},extend:function(t,n){a[t]||(a[t]={}),i[t]||(i[t]={}),b(a[t],i[t],n,"")},plural:function(t,n){c[t]=n}};
