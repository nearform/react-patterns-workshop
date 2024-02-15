import{d as _,u as d,a as p,c as m,b as h,r as u,o as s,e as r,f as t,t as a,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as k,m as w,_ as N}from"./index-XsAej-oj.js";import{N as P}from"./NoteDisplay-iZYfShmH.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const c=h(()=>u.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(s(),r("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",L,[t("h1",S,a(l(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(s(!0),r(f,null,g(c.value,(e,i)=>(s(),r("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(l(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(s(),r("hr",z)):w("v-if",!0)]))),128))])],4))}}),E=N(C,[["__file","/home/runner/work/react-patterns-workshop/react-patterns-workshop/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
