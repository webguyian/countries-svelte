import{s as C,n as x,a as E,u as I,g as B,b as q}from"../chunks/scheduler.Cewbzyqj.js";import{S as T,i as A,e as p,s as b,c as g,a as $,k as M,f as k,d as h,l as n,g as y,h as v,m as H,n as K,o as S,p as V,q as j,r as L,u as N,v as D}from"../chunks/index.D7BseO1g.js";import{b as W}from"../chunks/paths.DMRGNoha.js";function O(c){let e,s,o="Where in the world?",i,t,d='<svg data-id="dark-mode" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> <span data-id="dark-mode" class="text-base ml-2">Dark Mode</span> <svg class="w-5 h-5" data-id="light-mode" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> <span data-id="light-mode" class="text-base ml-2">Light Mode</span>',_,m;return{c(){e=p("nav"),s=p("a"),s.textContent=o,i=b(),t=p("button"),t.innerHTML=d,this.h()},l(r){e=g(r,"NAV",{class:!0});var u=$(e);s=g(u,"A",{class:!0,href:!0,"data-svelte-h":!0}),M(s)!=="svelte-1awbn0b"&&(s.textContent=o),i=k(u),t=g(u,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),M(t)!=="svelte-1ju5a0q"&&(t.innerHTML=d),u.forEach(h),this.h()},h(){n(s,"class","font-extrabold text-lg"),n(s,"href",W+"/"),n(t,"class","flex text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md text-sm p-2"),n(t,"type","button"),n(e,"class","flex items-center justify-between px-8 py-4 bg-white shadow dark:bg-[#2b3945] dark:text-white")},m(r,u){y(r,e,u),v(e,s),v(e,i),v(e,t),_||(m=H(t,"click",c[0]),_=!0)},p:x,i:x,o:x,d(r){r&&h(e),_=!1,m()}}}function U(c){return[()=>document.documentElement.classList.toggle("dark")]}class F extends T{constructor(e){super(),A(this,e,U,O,C,{})}}function G(c){let e,s,o,i,t,d,_,m,r;d=new F({});const u=c[1].default,l=E(u,c,c[0],null);return{c(){e=p("link"),s=p("link"),o=p("link"),i=b(),t=p("div"),K(d.$$.fragment),_=b(),m=p("main"),l&&l.c(),this.h()},l(a){const f=S("svelte-way5en",document.head);e=g(f,"LINK",{rel:!0,href:!0}),s=g(f,"LINK",{rel:!0,href:!0,crossorigin:!0}),o=g(f,"LINK",{href:!0,rel:!0}),f.forEach(h),i=k(a),t=g(a,"DIV",{class:!0});var w=$(t);V(d.$$.fragment,w),_=k(w),m=g(w,"MAIN",{class:!0});var z=$(m);l&&l.l(z),z.forEach(h),w.forEach(h),this.h()},h(){document.title="Where in the world?",n(e,"rel","preconnect"),n(e,"href","https://fonts.googleapis.com"),n(s,"rel","preconnect"),n(s,"href","https://fonts.gstatic.com"),n(s,"crossorigin",""),n(o,"href","https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400;6..12,600;6..12,700&display=swap"),n(o,"rel","stylesheet"),n(m,"class","min-h-screen flex flex-col p-8 text-center"),n(t,"class","flex flex-col text-[#111517] bg-[#fafafa] dark:text-white dark:bg-[#202c37]")},m(a,f){v(document.head,e),v(document.head,s),v(document.head,o),y(a,i,f),y(a,t,f),j(d,t,null),v(t,_),v(t,m),l&&l.m(m,null),r=!0},p(a,[f]){l&&l.p&&(!r||f&1)&&I(l,u,a,a[0],r?q(u,a[0],f,null):B(a[0]),null)},i(a){r||(L(d.$$.fragment,a),L(l,a),r=!0)},o(a){N(d.$$.fragment,a),N(l,a),r=!1},d(a){a&&(h(i),h(t)),h(e),h(s),h(o),D(d),l&&l.d(a)}}}function J(c,e,s){let{$$slots:o={},$$scope:i}=e;return c.$$set=t=>{"$$scope"in t&&s(0,i=t.$$scope)},[i,o]}class X extends T{constructor(e){super(),A(this,e,J,G,C,{})}}export{X as component};
