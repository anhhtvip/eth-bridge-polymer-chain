import{d as f,Z as m,t as s,v as o,Q as c,S as i,B as _,y as h,m as g,_ as d,x as r,z as l,$ as v}from"./rybyArv1.js";function x(n){if(!n)return;const e=n.slice(0,5),t=n.slice(38,45);return`${e}...${t}`}const B=f({__name:"ConnectButton",setup(n){const{$web3Modal:e}=g(),{address:t,isConnected:u}=m();function p(){e==null||e.openModal()}return(a,S)=>(s(),o("button",{class:"btn btn-primary",onClick:p},[c(u)?(s(),o(i,{key:1},[_(h(("shorterAddress"in a?a.shorterAddress:c(x))(c(t))),1)],64)):(s(),o(i,{key:0},[_(" Connect ")],64))]))}}),C={},b={class:"navbar navbar-expand-lg navbar-light bg-light"},A={class:"container"},$=r("div",{class:"title"},[r("h1",null,"Deposite & Bridge dApp")],-1);function k(n,e){const t=B;return s(),o("nav",b,[r("div",A,[$,l(t)])])}const y=d(C,[["render",k]]),D={};function N(n,e){const t=y;return s(),o("div",null,[l(t),v(n.$slots,"default")])}const T=d(D,[["render",N]]);export{T as default};