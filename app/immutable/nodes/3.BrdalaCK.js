import{e as P,A as M}from"../chunks/index.dKRPzlIx.js";import{s as re,n as x,d as z}from"../chunks/scheduler.Cewbzyqj.js";import{S as se,i as ie,e as p,c as b,a as k,d,l as f,g as C,w as ne,s as L,f as I,h as m,t as $,b as A,j as R,x as G,y as K,r as S,u as T,z as ce,n as N,p as U,q as F,v as J,k as fe,A as ue}from"../chunks/index.D7BseO1g.js";import{b as q}from"../chunks/paths.DMRGNoha.js";function Q(n,e,r){const l=n.slice();return l[1]=e[r],l}function W(n){let e,r=n[1].key+"",l,t,i,a,o=n[1].value+"",u;return{c(){e=p("dt"),l=$(r),t=$(":"),i=L(),a=p("dd"),u=$(o),this.h()},l(s){e=b(s,"DT",{class:!0});var c=k(e);l=A(c,r),t=A(c,":"),c.forEach(d),i=I(s),a=b(s,"DD",{});var g=k(a);u=A(g,o),g.forEach(d),this.h()},h(){f(e,"class","font-bold mr-2")},m(s,c){C(s,e,c),m(e,l),m(e,t),C(s,i,c),C(s,a,c),m(a,u)},p(s,c){c&1&&r!==(r=s[1].key+"")&&R(l,r),c&1&&o!==(o=s[1].value+"")&&R(u,o)},d(s){s&&(d(e),d(i),d(a))}}}function X(n){let e,r,l=n[1].value&&W(n);return{c(){e=p("div"),l&&l.c(),r=L(),this.h()},l(t){e=b(t,"DIV",{class:!0});var i=k(e);l&&l.l(i),r=I(i),i.forEach(d),this.h()},h(){f(e,"class","flex mb-2")},m(t,i){C(t,e,i),l&&l.m(e,null),m(e,r)},p(t,i){t[1].value?l?l.p(t,i):(l=W(t),l.c(),l.m(e,r)):l&&(l.d(1),l=null)},d(t){t&&d(e),l&&l.d()}}}function de(n){let e,r=P(n[0]),l=[];for(let t=0;t<r.length;t+=1)l[t]=X(Q(n,r,t));return{c(){e=p("dl");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=b(t,"DL",{class:!0});var i=k(e);for(let a=0;a<l.length;a+=1)l[a].l(i);i.forEach(d),this.h()},h(){f(e,"class","text-sm")},m(t,i){C(t,e,i);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(t,[i]){if(i&1){r=P(t[0]);let a;for(a=0;a<r.length;a+=1){const o=Q(t,r,a);l[a]?l[a].p(o,i):(l[a]=X(o),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=r.length}},i:x,o:x,d(t){t&&d(e),ne(l,t)}}}function he(n,e,r){let{items:l}=e;return n.$$set=t=>{"items"in t&&r(0,l=t.items)},[l]}class Y extends se{constructor(e){super(),ie(this,e,he,de,re,{items:0})}}async function me({fetch:n,params:e}){const r=`${M}/alpha/${e.id}`,l=await n(r).then(a=>a.json()),t=l==null?void 0:l[0];let i={};return t.borders&&(i=(await n(`${M}/alpha?codes=${t.borders.join()}&fields=name,cca3`).then(o=>o.json())).reduce((o,u)=>(o[u.cca3]=u.name.common,o),{})),{borderCountries:i,country:t}}const ye=Object.freeze(Object.defineProperty({__proto__:null,load:me},Symbol.toStringTag,{value:"Module"}));function Z(n,e,r){const l=n.slice();return l[10]=e[r],l}function ee(n){var H;let e,r,l,t,i,a=n[0].name.common+"",o,u,s,c,g,y,w,E,_=((H=n[0].flags)==null?void 0:H.svg)&&te(n);c=new Y({props:{items:[{key:"Capital",value:n[7]},{key:"Region",value:n[6]},{key:"Population",value:n[5]}]}}),y=new Y({props:{items:[{key:"Top-Level Domain",value:n[4]},{key:"Currencies",value:n[3]},{key:"Languages",value:n[2]}]}});let v=n[8].length&&le(n);return{c(){e=p("div"),r=p("div"),_&&_.c(),l=L(),t=p("div"),i=p("h2"),o=$(a),u=L(),s=p("div"),N(c.$$.fragment),g=L(),N(y.$$.fragment),w=L(),v&&v.c(),this.h()},l(h){e=b(h,"DIV",{class:!0});var D=k(e);r=b(D,"DIV",{class:!0});var V=k(r);_&&_.l(V),V.forEach(d),l=I(D),t=b(D,"DIV",{class:!0});var j=k(t);i=b(j,"H2",{class:!0});var B=k(i);o=A(B,a),B.forEach(d),u=I(j),s=b(j,"DIV",{class:!0});var O=k(s);U(c.$$.fragment,O),g=I(O),U(y.$$.fragment,O),O.forEach(d),w=I(j),v&&v.l(j),j.forEach(d),D.forEach(d),this.h()},h(){f(r,"class","max-w-lg"),f(i,"class","mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"),f(s,"class","grid grid-cols-2 gap-4"),f(t,"class","text-left"),f(e,"class","grid grid-cols-fluid gap-4 items-center")},m(h,D){C(h,e,D),m(e,r),_&&_.m(r,null),m(e,l),m(e,t),m(t,i),m(i,o),m(t,u),m(t,s),F(c,s,null),m(s,g),F(y,s,null),m(t,w),v&&v.m(t,null),E=!0},p(h,D){var B;(B=h[0].flags)!=null&&B.svg?_?_.p(h,D):(_=te(h),_.c(),_.m(r,null)):_&&(_.d(1),_=null),(!E||D&1)&&a!==(a=h[0].name.common+"")&&R(o,a);const V={};D&224&&(V.items=[{key:"Capital",value:h[7]},{key:"Region",value:h[6]},{key:"Population",value:h[5]}]),c.$set(V);const j={};D&28&&(j.items=[{key:"Top-Level Domain",value:h[4]},{key:"Currencies",value:h[3]},{key:"Languages",value:h[2]}]),y.$set(j),h[8].length?v?v.p(h,D):(v=le(h),v.c(),v.m(t,null)):v&&(v.d(1),v=null)},i(h){E||(S(c.$$.fragment,h),S(y.$$.fragment,h),E=!0)},o(h){T(c.$$.fragment,h),T(y.$$.fragment,h),E=!1},d(h){h&&d(e),_&&_.d(),J(c),J(y),v&&v.d()}}}function te(n){let e,r,l;return{c(){e=p("img"),this.h()},l(t){e=b(t,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){f(e,"class","max-h-80 border dark:border-gray-500"),f(e,"alt",r=n[0].flags.alt),z(e.src,l=n[0].flags.svg)||f(e,"src",l)},m(t,i){C(t,e,i)},p(t,i){i&1&&r!==(r=t[0].flags.alt)&&f(e,"alt",r),i&1&&!z(e.src,l=t[0].flags.svg)&&f(e,"src",l)},d(t){t&&d(e)}}}function le(n){let e,r,l="Border Countries:",t,i=P(n[8]),a=[];for(let o=0;o<i.length;o+=1)a[o]=ae(Z(n,i,o));return{c(){e=p("dl"),r=p("dt"),r.textContent=l,t=p("dd");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=b(o,"DL",{class:!0});var u=k(e);r=b(u,"DT",{class:!0,"data-svelte-h":!0}),fe(r)!=="svelte-18r7dtv"&&(r.textContent=l),t=b(u,"DD",{class:!0});var s=k(t);for(let c=0;c<a.length;c+=1)a[c].l(s);s.forEach(d),u.forEach(d),this.h()},h(){f(r,"class","font-bold whitespace-nowrap mr-4 mb-4"),f(t,"class","flex flex-wrap"),f(e,"class","flex flex-col md:flex-row mt-8 text-sm")},m(o,u){C(o,e,u),m(e,r),m(e,t);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(t,null)},p(o,u){if(u&258){i=P(o[8]);let s;for(s=0;s<i.length;s+=1){const c=Z(o,i,s);a[s]?a[s].p(c,u):(a[s]=ae(c),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=i.length}},d(o){o&&d(e),ne(a,o)}}}function ae(n){let e,r=n[1][n[10]]+"",l,t,i;return{c(){e=p("a"),l=$(r),t=L(),this.h()},l(a){e=b(a,"A",{href:!0,class:!0});var o=k(e);l=A(o,r),t=I(o),o.forEach(d),this.h()},h(){f(e,"href",i=q+"/country/"+n[10]),f(e,"class",oe)},m(a,o){C(a,e,o),m(e,l),m(e,t)},p(a,o){o&258&&r!==(r=a[1][a[10]]+"")&&R(l,r),o&256&&i!==(i=q+"/country/"+a[10])&&f(e,"href",i)},d(a){a&&d(e)}}}function ge(n){let e,r,l,t,i,a,o,u,s=n[0]&&ee(n);return{c(){e=p("div"),r=p("div"),l=p("a"),t=G("svg"),i=G("path"),a=$(`
      Back`),o=L(),s&&s.c(),this.h()},l(c){e=b(c,"DIV",{});var g=k(e);r=b(g,"DIV",{class:!0});var y=k(r);l=b(y,"A",{href:!0,class:!0});var w=k(l);t=K(w,"svg",{class:!0,xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var E=k(t);i=K(E,"path",{"fill-rule":!0,d:!0}),k(i).forEach(d),E.forEach(d),a=A(w,`
      Back`),w.forEach(d),y.forEach(d),o=I(g),s&&s.l(g),g.forEach(d),this.h()},h(){f(i,"fill-rule","evenodd"),f(i,"d","M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"),f(t,"class","mr-2"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"width","16"),f(t,"height","16"),f(t,"fill","currentColor"),f(t,"viewBox","0 0 16 16"),f(l,"href",q+"/"),f(l,"class","inline-flex items-center shadow "+oe),f(r,"class","mb-8 flex")},m(c,g){C(c,e,g),m(e,r),m(r,l),m(l,t),m(t,i),m(l,a),m(e,o),s&&s.m(e,null),u=!0},p(c,[g]){c[0]?s?(s.p(c,g),g&1&&S(s,1)):(s=ee(c),s.c(),S(s,1),s.m(e,null)):s&&(ue(),T(s,1,1,()=>{s=null}),ce())},i(c){u||(S(s),u=!0)},o(c){T(s),u=!1},d(c){c&&d(e),s&&s.d()}}}const oe="py-2 px-6 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700";function _e(n,e,r){let l,t,i,a,o,u,s,c,g,{data:y}=e;return n.$$set=w=>{"data"in w&&r(9,y=w.data)},n.$$.update=()=>{var w,E,_;n.$$.dirty&512&&r(1,l=y.borderCountries),n.$$.dirty&2&&r(8,t=Object.keys(l)),n.$$.dirty&512&&r(0,i=y.country),n.$$.dirty&1&&r(7,a=((w=i.capital)==null?void 0:w[0])??"N/A"),n.$$.dirty&1&&r(6,o=i.region),n.$$.dirty&1&&r(5,u=(E=i.population)==null?void 0:E.toLocaleString("en-us")),n.$$.dirty&1&&r(4,s=(_=i.tld)==null?void 0:_.join(", ")),n.$$.dirty&1&&r(3,c=Object.values(i.currencies??{}).map(v=>v.name).join(", ")),n.$$.dirty&1&&r(2,g=Object.values(i.languages??{}).join(", "))},[i,l,g,c,s,u,o,a,t,y]}class we extends se{constructor(e){super(),ie(this,e,_e,ge,re,{data:9})}}export{we as component,ye as universal};
