import{S as Z,i as $,s as ee,k as c,l as o,m as d,h,n as v,b as Y,C as H,U as te,a as A,q as S,c as y,r as C,V as ae,M as s}from"../../chunks/index-ad183b7c.js";function W(n,l,r){const e=n.slice();return e[2]=l[r],e}function X(n){let l,r,e,t,i,a,_,p,f,L=n[2].title+"",V,D,u,E,O=n[2].author+"",N,T,x,b,U=n[2].publishedAt+"",M,R,g,j=n[2].description+"",B,G;return{c(){l=c("article"),r=c("div"),e=c("div"),t=c("img"),a=A(),_=c("div"),p=c("h1"),f=c("a"),V=S(L),D=A(),u=c("p"),E=c("span"),N=S(O),T=c("br"),x=A(),b=c("span"),M=S(U),R=A(),g=c("p"),B=S(j),G=A(),this.h()},l(k){l=o(k,"ARTICLE",{class:!0});var I=d(l);r=o(I,"DIV",{class:!0});var P=d(r);e=o(P,"DIV",{});var w=d(e);t=o(w,"IMG",{src:!0,alt:!0}),w.forEach(h),a=y(P),_=o(P,"DIV",{});var m=d(_);p=o(m,"H1",{class:!0});var z=d(p);f=o(z,"A",{href:!0,target:!0,rel:!0});var F=d(f);V=C(F,L),F.forEach(h),z.forEach(h),D=y(m),u=o(m,"P",{class:!0});var q=d(u);E=o(q,"SPAN",{});var J=d(E);N=C(J,O),J.forEach(h),T=o(q,"BR",{}),x=y(q),b=o(q,"SPAN",{});var K=d(b);M=C(K,U),K.forEach(h),q.forEach(h),R=y(m),g=o(m,"P",{class:!0});var Q=d(g);B=C(Q,j),Q.forEach(h),m.forEach(h),P.forEach(h),G=y(I),I.forEach(h),this.h()},h(){ae(t.src,i=n[2].urlToImage)||v(t,"src",i),v(t,"alt",n[2].title),v(f,"href",n[2].url),v(f,"target","_blank"),v(f,"rel","noreferrer"),v(p,"class","post-title svelte-1xqvvkh"),v(u,"class","post-info svelte-1xqvvkh"),v(g,"class","post-desc svelte-1xqvvkh"),v(r,"class","grid"),v(l,"class","post-container")},m(k,I){Y(k,l,I),s(l,r),s(r,e),s(e,t),s(r,a),s(r,_),s(_,p),s(p,f),s(f,V),s(_,D),s(_,u),s(u,E),s(E,N),s(u,T),s(u,x),s(u,b),s(b,M),s(_,R),s(_,g),s(g,B),s(l,G)},p:H,d(k){k&&h(l)}}}function le(n){let l,r=n[0],e=[];for(let t=0;t<r.length;t+=1)e[t]=X(W(n,r,t));return{c(){l=c("section");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=o(t,"SECTION",{id:!0});var i=d(l);for(let a=0;a<e.length;a+=1)e[a].l(i);i.forEach(h),this.h()},h(){v(l,"id","article")},m(t,i){Y(t,l,i);for(let a=0;a<e.length;a+=1)e[a].m(l,null)},p(t,[i]){if(i&1){r=t[0];let a;for(a=0;a<r.length;a+=1){const _=W(t,r,a);e[a]?e[a].p(_,i):(e[a]=X(_),e[a].c(),e[a].m(l,null))}for(;a<e.length;a+=1)e[a].d(1);e.length=r.length}},i:H,o:H,d(t){t&&h(l),te(e,t)}}}function se(n,l,r){let{data:e}=l,t="articles"in e.items?e.items.articles:Array();return console.log(e),n.$$set=i=>{"data"in i&&r(1,e=i.data)},[t,e]}class ne extends Z{constructor(l){super(),$(this,l,se,le,ee,{data:1})}}export{ne as default};
