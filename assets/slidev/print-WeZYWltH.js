import{d,$ as h,y as u,b as a,e as t,x as s,A as i,F as f,Z as v,o as n,a0 as g,l as x,g as b}from"../modules/vue-6JIR2-ud.js";import{u as k,h as y,c as m,b as N}from"../index-lFThUpK3.js";import{N as w}from"./NoteDisplay-bUm-WA4z.js";import"../modules/shiki-ioKdsmC-.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},A={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},M=d({__name:"print",setup($){const{slides:p,total:_}=k();h(`
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
`),y({title:`Notes - ${m.title}`});const l=u(()=>p.value.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(n(),a("div",L,[t("div",T,[t("div",V,[t("h1",B,s(i(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,v(l.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",A,s(e==null?void 0:e.no)+"/"+s(i(_)),1),g(" "+s(e==null?void 0:e.title)+" ",1),C])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<l.value.length-1?(n(),a("hr",F)):b("v-if",!0)]))),128))])]))}}),Z=N(M,[["__file","/home/runner/work/react-patterns-workshop/react-patterns-workshop/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
