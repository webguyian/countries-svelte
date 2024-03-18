import{S as Te,R as ne,A as Ae,e as se,a as Ne}from"../chunks/index.dKRPzlIx.js";import{s as ie,n as F,r as Re,c as Oe,f as je}from"../chunks/scheduler.Cewbzyqj.js";import{S as ue,i as ce,e as b,s as N,t as G,c as y,a as T,d as v,f as R,b as K,k as U,l as a,C as he,g as V,h as i,j as X,x as ge,y as pe,E as le,m as Z,w as De,F as me,n as Se,p as Be,q as Pe,r as $,z as Me,u as oe,v as Ie,A as Ue}from"../chunks/index.D7BseO1g.js";import{b as _e}from"../chunks/paths.DMRGNoha.js";import{g as be}from"../chunks/entry.bipEy_4I.js";import{p as Ve}from"../chunks/stores.DetX8kwP.js";async function Qe({fetch:l,url:e}){const t=`${Ae}/all`,n=(await l(t).then(g=>g.json())).slice(0).sort((g,d)=>g.name.common.localeCompare(d.name.common)),o=e.searchParams.get(Te),c=e.searchParams.get(ne);return{allCountries:n,regionQuery:c,searchQuery:o}}const nt=Object.freeze(Object.defineProperty({__proto__:null,load:Qe},Symbol.toStringTag,{value:"Module"}));function He(l){let e,t,r,n,o,c,g,d,s,_="Capital:",p,h,u,f="Region:",m,w,L,z="Population:",B,A,H;return{c(){e=b("a"),t=b("div"),r=N(),n=b("div"),o=b("h2"),c=G(l[2]),g=N(),d=b("dl"),s=b("dt"),s.textContent=_,p=b("dd"),h=G(l[1]),u=b("dt"),u.textContent=f,m=b("dd"),w=G(l[3]),L=b("dt"),L.textContent=z,B=b("dd"),A=G(l[0]),this.h()},l(C){e=y(C,"A",{href:!0,class:!0});var x=T(e);t=y(x,"DIV",{class:!0,style:!0}),T(t).forEach(v),r=R(x),n=y(x,"DIV",{class:!0});var O=T(n);o=y(O,"H2",{class:!0});var Y=T(o);c=K(Y,l[2]),Y.forEach(v),g=R(O),d=y(O,"DL",{class:!0});var M=T(d);s=y(M,"DT",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-12t4xm8"&&(s.textContent=_),p=y(M,"DD",{});var D=T(p);h=K(D,l[1]),D.forEach(v),u=y(M,"DT",{class:!0,"data-svelte-h":!0}),U(u)!=="svelte-phul5s"&&(u.textContent=f),m=y(M,"DD",{});var J=T(m);w=K(J,l[3]),J.forEach(v),L=y(M,"DT",{class:!0,"data-svelte-h":!0}),U(L)!=="svelte-v5ux7r"&&(L.textContent=z),B=y(M,"DD",{});var q=T(B);A=K(q,l[0]),q.forEach(v),M.forEach(v),O.forEach(v),x.forEach(v),this.h()},h(){var C;a(t,"class","border-b border-gray-300 h-40 bg-no-repeat bg-cover bg-center dark:border-gray-700"),he(t,"background-image","url('"+((C=l[4])==null?void 0:C.svg)+"')"),a(o,"class","mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"),a(s,"class","font-bold"),a(u,"class","font-bold"),a(L,"class","font-bold"),a(d,"class","text-sm grid grid-cols-2"),a(n,"class","p-5 text-left"),a(e,"href",H=_e+"/country/"+l[5]),a(e,"class","appearance-none w-[250px] bg-white border border-gray-200 shadow dark:bg-gray-700 dark:border-gray-600")},m(C,x){V(C,e,x),i(e,t),i(e,r),i(e,n),i(n,o),i(o,c),i(n,g),i(n,d),i(d,s),i(d,p),i(p,h),i(d,u),i(d,m),i(m,w),i(d,L),i(d,B),i(B,A)},p(C,[x]){var O;x&16&&he(t,"background-image","url('"+((O=C[4])==null?void 0:O.svg)+"')"),x&4&&X(c,C[2]),x&2&&X(h,C[1]),x&8&&X(w,C[3]),x&1&&X(A,C[0]),x&32&&H!==(H=_e+"/country/"+C[5])&&a(e,"href",H)},i:F,o:F,d(C){C&&v(e)}}}function Fe(l,e,t){let r,n,o,c,g,d,{country:s}=e;return l.$$set=_=>{"country"in _&&t(6,s=_.country)},l.$$.update=()=>{var _,p,h;l.$$.dirty&64&&t(5,{cca3:r,flags:n,region:o}=s,r,(t(4,n),t(6,s)),(t(3,o),t(6,s))),l.$$.dirty&64&&t(2,c=(_=s.name)==null?void 0:_.common),l.$$.dirty&64&&t(1,g=((p=s.capital)==null?void 0:p[0])??"N/A"),l.$$.dirty&64&&t(0,d=(h=s.population)==null?void 0:h.toLocaleString("en-us"))},[d,g,c,o,n,r,s]}class ze extends ue{constructor(e){super(),ce(this,e,Fe,He,ie,{country:6})}}function ye(l,e,t){const r=l.slice();return r[13]=e[t],r}function ve(l){let e,t,r;return{c(){e=b("input"),this.h()},l(n){e=y(n,"INPUT",{type:!0,name:!0}),this.h()},h(){a(e,"type","hidden"),a(e,"name","region")},m(n,o){V(n,e,o),me(e,l[1]),t||(r=Z(e,"input",l[9]),t=!0)},p(n,o){o&2&&me(e,n[1])},d(n){n&&v(e),t=!1,r()}}}function qe(l){let e,t="Filter By Region";return{c(){e=b("span"),e.textContent=t},l(r){e=y(r,"SPAN",{"data-svelte-h":!0}),U(e)!=="svelte-1y7dff7"&&(e.textContent=t)},m(r,n){V(r,e,n)},p:F,d(r){r&&v(e)}}}function Ge(l){let e,t,r;return{c(){e=b("span"),t=G("Filter By: "),r=G(l[1])},l(n){e=y(n,"SPAN",{});var o=T(e);t=K(o,"Filter By: "),r=K(o,l[1]),o.forEach(v)},m(n,o){V(n,e,o),i(e,t),i(e,r)},p(n,o){o&2&&X(r,n[1])},d(n){n&&v(e)}}}function ke(l){let e,t="Clear selected region",r,n;return{c(){e=b("button"),e.textContent=t,this.h()},l(o){e=y(o,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),U(e)!=="svelte-1pnudiw"&&(e.textContent=t),this.h()},h(){a(e,"type","button"),a(e,"class","text-red-600 font-bold w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white")},m(o,c){V(o,e,c),r||(n=Z(e,"click",l[6]),r=!0)},p:F,d(o){o&&v(e),r=!1,n()}}}function we(l){let e,t,r=l[13]+"",n,o,c,g;return{c(){e=b("li"),t=b("button"),n=G(r),o=N(),this.h()},l(d){e=y(d,"LI",{});var s=T(e);t=y(s,"BUTTON",{type:!0,class:!0});var _=T(t);n=K(_,r),_.forEach(v),o=R(s),s.forEach(v),this.h()},h(){a(t,"type","button"),a(t,"class","w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white")},m(d,s){V(d,e,s),i(e,t),i(t,n),i(e,o),c||(g=Z(t,"click",l[7]),c=!0)},p:F,d(d){d&&v(e),c=!1,g()}}}function Ke(l){let e,t,r,n="Search",o,c,g,d='<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg>',s,_,p,h,u='<svg class="w-4 h-4 text-gray-300 hover:text-gray-400 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path></svg>',f,m,w,L,z,B,A,H,C,x,O,Y,M,D=l[1]&&ve(l);function J(k,I){return k[1]?Ge:qe}let q=J(l),j=q(l),P=l[1]&&ke(l),W=se(l[3]),S=[];for(let k=0;k<W.length;k+=1)S[k]=we(ye(l,W,k));return{c(){e=b("div"),t=b("form"),r=b("label"),r.textContent=n,o=N(),c=b("div"),g=b("div"),g.innerHTML=d,s=N(),_=b("input"),p=N(),h=b("button"),h.innerHTML=u,f=N(),D&&D.c(),m=N(),w=b("div"),L=b("button"),j.c(),z=N(),B=ge("svg"),A=ge("path"),H=N(),C=b("div"),x=b("ul"),P&&P.c(),O=N();for(let k=0;k<S.length;k+=1)S[k].c();this.h()},l(k){e=y(k,"DIV",{class:!0});var I=T(e);t=y(I,"FORM",{class:!0,method:!0,action:!0});var E=T(t);r=y(E,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),U(r)!=="svelte-15agd0n"&&(r.textContent=n),o=R(E),c=y(E,"DIV",{class:!0});var Q=T(c);g=y(Q,"DIV",{class:!0,"data-svelte-h":!0}),U(g)!=="svelte-1mwherv"&&(g.innerHTML=d),s=R(Q),_=y(Q,"INPUT",{id:!0,class:!0,name:!0,placeholder:!0,type:!0}),p=R(Q),h=y(Q,"BUTTON",{class:!0,title:!0,type:!0,"data-svelte-h":!0}),U(h)!=="svelte-ufvnpk"&&(h.innerHTML=u),Q.forEach(v),f=R(E),D&&D.l(E),E.forEach(v),m=R(I),w=y(I,"DIV",{class:!0});var ee=T(w);L=y(ee,"BUTTON",{id:!0,class:!0,type:!0});var te=T(L);j.l(te),z=R(te),B=pe(te,"svg",{class:!0,"aria-hidden":!0,xmlns:!0,fill:!0,viewBox:!0});var de=T(B);A=pe(de,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),T(A).forEach(v),de.forEach(v),te.forEach(v),H=R(ee),C=y(ee,"DIV",{id:!0,class:!0});var fe=T(C);x=y(fe,"UL",{class:!0,"aria-labelledby":!0});var re=T(x);P&&P.l(re),O=R(re);for(let ae=0;ae<S.length;ae+=1)S[ae].l(re);re.forEach(v),fe.forEach(v),ee.forEach(v),I.forEach(v),this.h()},h(){a(r,"for","search-filter"),a(r,"class","mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"),a(g,"class","absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none"),a(_,"id","search-filter"),a(_,"class","peer block w-full py-3 ps-12 pe-8 text-sm text-gray-900 shadow rounded bg-white dark:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-200 dark:placeholder-gray-400 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"),a(_,"name","search"),a(_,"placeholder","Search for a country..."),a(_,"type","search"),_.required=!0,a(h,"class","absolute inset-y-0 end-4 peer-invalid:hidden"),a(h,"title","Clear search"),a(h,"type","reset"),a(c,"class","relative"),a(t,"class","w-full md:max-w-72 mb-5 md:mb-0"),a(t,"method","GET"),a(t,"action","/"),a(A,"stroke","currentColor"),a(A,"stroke-linecap","round"),a(A,"stroke-linejoin","round"),a(A,"stroke-width","2"),a(A,"d","m1 1 4 4 4-4"),a(B,"class","w-2.5 h-2.5 ms-3"),a(B,"aria-hidden","true"),a(B,"xmlns","http://www.w3.org/2000/svg"),a(B,"fill","none"),a(B,"viewBox","0 0 10 6"),a(L,"id","dropdown-trigger"),a(L,"class","inline-flex justify-between items-center w-full px-5 py-3 bg-white hover:bg-neutral-100 shadow focus:ring-2 focus:outline-none focus:ring-blue-200 rounded text-sm text-center dark:text-gray-300 dark:bg-gray-700"),a(L,"type","button"),a(x,"class","py-2 text-sm text-gray-700 dark:text-gray-300"),a(x,"aria-labelledby","dropdown-trigger"),a(C,"id","dropdownHover"),a(C,"class","top-12 z-10 w-full bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"),le(C,"absolute",l[2]),le(C,"hidden",!l[2]),a(w,"class","relative min-w-52"),a(e,"class","flex flex-col md:flex-row justify-between mb-8")},m(k,I){V(k,e,I),i(e,t),i(t,r),i(t,o),i(t,c),i(c,g),i(c,s),i(c,_),i(c,p),i(c,h),i(t,f),D&&D.m(t,null),i(e,m),i(e,w),i(w,L),j.m(L,null),i(L,z),i(L,B),i(B,A),i(w,H),i(w,C),i(C,x),P&&P.m(x,null),i(x,O);for(let E=0;E<S.length;E+=1)S[E]&&S[E].m(x,null);l[10](w),Y||(M=[Z(h,"click",l[4]),Z(L,"click",l[5])],Y=!0)},p(k,[I]){if(k[1]?D?D.p(k,I):(D=ve(k),D.c(),D.m(t,null)):D&&(D.d(1),D=null),q===(q=J(k))&&j?j.p(k,I):(j.d(1),j=q(k),j&&(j.c(),j.m(L,z))),k[1]?P?P.p(k,I):(P=ke(k),P.c(),P.m(x,O)):P&&(P.d(1),P=null),I&136){W=se(k[3]);let E;for(E=0;E<W.length;E+=1){const Q=ye(k,W,E);S[E]?S[E].p(Q,I):(S[E]=we(Q),S[E].c(),S[E].m(x,null))}for(;E<S.length;E+=1)S[E].d(1);S.length=W.length}I&4&&le(C,"absolute",k[2]),I&4&&le(C,"hidden",!k[2])},i:F,o:F,d(k){k&&v(e),D&&D.d(),j.d(),P&&P.d(),De(S,k),l[10](null),Y=!1,Re(M)}}}function Ye(l,e,t){let r,n,o;Oe(l,Ve,w=>t(8,o=w));const c=Ne;let g;const d=()=>{r?o.url.searchParams.set(ne,r):o.url.searchParams.delete(ne),be(`?${o.url.searchParams.toString()}`,{invalidateAll:!0})},s=w=>{g&&!g.contains(w.target)&&p()},_=()=>{o.url.searchParams.delete(Te),be(`?${o.url.searchParams.toString()}`,{invalidateAll:!0})},p=()=>{t(2,n=!n),n?document.addEventListener("click",s):document.removeEventListener("click",s)},h=()=>{t(1,r=void 0),p(),d()},u=w=>{const L=w.target.textContent;t(1,r=L),p(),d()};function f(){r=this.value,t(1,r),t(8,o)}function m(w){je[w?"unshift":"push"](()=>{g=w,t(0,g)})}return l.$$.update=()=>{l.$$.dirty&256&&t(1,r=o.url.searchParams.get(ne))},t(2,n=!1),[g,r,n,c,_,p,h,u,o,f,m]}class We extends ue{constructor(e){super(),ce(this,e,Ye,Ke,ie,{})}}function Ce(l,e,t){const r=l.slice();return r[11]=e[t],r}function xe(l){let e,t;return e=new ze({props:{country:l[11]}}),{c(){Se(e.$$.fragment)},l(r){Be(e.$$.fragment,r)},m(r,n){Pe(e,r,n),t=!0},p(r,n){const o={};n&1&&(o.country=r[11]),e.$set(o)},i(r){t||($(e.$$.fragment,r),t=!0)},o(r){oe(e.$$.fragment,r),t=!1},d(r){Ie(e,r)}}}function Ee(l){let e,t="No matching countries found.";return{c(){e=b("p"),e.textContent=t},l(r){e=y(r,"P",{"data-svelte-h":!0}),U(e)!=="svelte-1pch2si"&&(e.textContent=t)},m(r,n){V(r,e,n)},d(r){r&&v(e)}}}function Le(l){let e,t="Load more",r,n;return{c(){e=b("button"),e.textContent=t,this.h()},l(o){e=y(o,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),U(e)!=="svelte-tbrdm2"&&(e.textContent=t),this.h()},h(){a(e,"class","py-2.5 px-8 mb-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700"),a(e,"type","button")},m(o,c){V(o,e,c),r||(n=Z(e,"click",l[3]),r=!0)},p:F,d(o){o&&v(e),r=!1,n()}}}function Ze(l){let e,t,r,n,o,c,g;t=new We({});let d=se(l[0]),s=[];for(let u=0;u<d.length;u+=1)s[u]=xe(Ce(l,d,u));const _=u=>oe(s[u],1,1,()=>{s[u]=null});let p=!l[1]&&Ee(),h=l[2]&&Le(l);return{c(){e=b("div"),Se(t.$$.fragment),r=N(),n=b("div");for(let u=0;u<s.length;u+=1)s[u].c();o=N(),p&&p.c(),c=N(),h&&h.c(),this.h()},l(u){e=y(u,"DIV",{});var f=T(e);Be(t.$$.fragment,f),r=R(f),n=y(f,"DIV",{class:!0});var m=T(n);for(let w=0;w<s.length;w+=1)s[w].l(m);m.forEach(v),o=R(f),p&&p.l(f),c=R(f),h&&h.l(f),f.forEach(v),this.h()},h(){a(n,"class","grid grid-cols-fluid justify-items-center gap-10 mb-8")},m(u,f){V(u,e,f),Pe(t,e,null),i(e,r),i(e,n);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(n,null);i(e,o),p&&p.m(e,null),i(e,c),h&&h.m(e,null),g=!0},p(u,[f]){if(f&1){d=se(u[0]);let m;for(m=0;m<d.length;m+=1){const w=Ce(u,d,m);s[m]?(s[m].p(w,f),$(s[m],1)):(s[m]=xe(w),s[m].c(),$(s[m],1),s[m].m(n,null))}for(Ue(),m=d.length;m<s.length;m+=1)_(m);Me()}u[1]?p&&(p.d(1),p=null):p||(p=Ee(),p.c(),p.m(e,c)),u[2]?h?h.p(u,f):(h=Le(u),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},i(u){if(!g){$(t.$$.fragment,u);for(let f=0;f<d.length;f+=1)$(s[f]);g=!0}},o(u){oe(t.$$.fragment,u),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)oe(s[f]);g=!1},d(u){u&&v(e),Ie(t),De(s,u),p&&p.d(),h&&h.d()}}}function Je(l,e,t){let r,n,o,c,g,d,s,{data:_}=e;const p=()=>{t(6,r=r*2),t(0,g=_.allCountries.slice(0,r))},h=f=>n?f.region===n:f,u=f=>o?f.name.common.toLowerCase().startsWith(o.toLowerCase()):f;return l.$$set=f=>{"data"in f&&t(4,_=f.data)},l.$$.update=()=>{l.$$.dirty&16&&(n=_.regionQuery),l.$$.dirty&16&&(o=_.searchQuery),l.$$.dirty&16&&t(5,c=_.allCountries.filter(h).filter(u)),l.$$.dirty&96&&t(0,g=c.slice(0,r)),l.$$.dirty&32&&t(1,d=c.length??0),l.$$.dirty&3&&t(2,s=d>g.length)},t(6,r=12),[g,d,s,p,_,c,r]}class ot extends ue{constructor(e){super(),ce(this,e,Je,Ze,ie,{data:4})}}export{ot as component,nt as universal};
