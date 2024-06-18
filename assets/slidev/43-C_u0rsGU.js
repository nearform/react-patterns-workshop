import{N as V,O as j}from"../modules/unplugin-icons-BAU2bS-A.js";import{d as D,t as F,aA as M,C as w,a7 as R,y as A,aB as q,o as g,b as B,f as T,c as k,g as z,i as O,h as W,k as I,e,l as K,m as U,q as Y,s as X,a6 as o}from"../modules/vue-Cx0_jHut.js";import{v as $,aS as G,C as J,aT as Q,aU as Z,_ as P,aV as L}from"../index-Dxtvmalw.js";import{u as y,p as N,f as ee}from"./context-CFyRt0vm.js";import{I as te}from"./default-D5FNdOQF.js";import"../modules/shiki-BjPRmREE.js";const se=D({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:$.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(p,{expose:a}){a();const s=p,{$clicksContext:t}=y(),n=F(),i=G();M(()=>{t.unregister(i)}),w(()=>{var r;(r=n.value)==null||r.classList.toggle("slidev-code-line-numbers",s.lines)}),R(()=>{var v;if(!t||!((v=s.ranges)!=null&&v.length))return;const r=t.calculateSince(s.at,s.ranges.length-1);t.register(i,r);const h=A(()=>r?Math.max(0,t.current-r.start+1):J),f=A(()=>s.finally==="last"?s.ranges.at(-1):s.finally.toString());w(()=>{if(!n.value)return;let m=s.ranges[h.value]??f.value;const C=m==="hide";n.value.classList.toggle(Q,C),C&&(m=s.ranges[h.value+1]??f.value);const S=n.value.querySelector(".shiki"),b=Array.from(S.querySelectorAll("code > .line")),E=b.length;if(Z(m,E,s.startLine,c=>[b[c]]),s.maxHeight){const c=Array.from(S.querySelectorAll(".line.highlighted"));c.reduce((x,H)=>H.offsetHeight+x,0)>n.value.offsetHeight?c[0].scrollIntoView({behavior:"smooth",block:"start"}):c.length>0&&c[Math.round((c.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:l,copy:d}=q();function _(){var h,f;const r=(f=(h=n.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:f.textContent;r&&d(r)}const u={props:s,clicks:t,el:n,id:i,copied:l,copy:d,copyCode:_,get configs(){return $}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),oe=["title"];function ne(p,a,s,t,n,i){const l=V,d=j;return g(),B("div",{ref:"el",class:O(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.props.lines}]),style:W({"max-height":t.props.maxHeight,"overflow-y":t.props.maxHeight?"scroll":void 0,"--start":t.props.startLine})},[T(p.$slots,"default"),t.configs.codeCopy?(g(),B("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:t.copied?"Copied":"Copy",onClick:a[0]||(a[0]=_=>t.copyCode())},[t.copied?(g(),k(l,{key:0,class:"p-2 w-8 h-8"})):(g(),k(d,{key:1,class:"p-2 w-8 h-8"}))],8,oe)):z("v-if",!0)],6)}const re=P(se,[["render",ne],["__file","/home/runner/work/react-patterns-workshop/react-patterns-workshop/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),ae={__name:"43",setup(p,{expose:a}){a(),N(L);const{$slidev:s,$nav:t,$clicksContext:n,$clicks:i,$page:l,$renderContext:d,$frontmatter:_}=y(),u={$slidev:s,$nav:t,$clicksContext:n,$clicks:i,$page:l,$renderContext:d,$frontmatter:_,InjectedLayout:te,get frontmatter(){return L},get useSlideContext(){return y},get _provideFrontmatter(){return N},get _frontmatterToProps(){return ee}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},ie=e("h1",null,"Step 10: Exercise",-1),le={class:"dense"},ce=e("ul",null,[e("li",null,[o("In "),e("code",null,"src/pages/index.js"),o(" export a "),e("code",null,"getServerSideProps"),o(" async function that asynchronously calls the "),e("code",null,"movieResultsFromDefaultYear()"),o(" function")]),e("li",null,[o("Return an object with a "),e("code",null,"props"),o(" property that has a nested "),e("code",null,"preloadedMovies"),o(" property with the movies data from "),e("code",null,"movieResultsFromDefaultYear()"),o(". E.g.")])],-1),de=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-js"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{")]),o(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  props"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),o(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    preloadedMovies"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," dataFromFunctionCall")]),o(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),o(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1);function pe(p,a,s,t,n,i){const l=re;return g(),k(t.InjectedLayout,Y(X(t._frontmatterToProps(t.frontmatter,42))),{default:I(()=>[ie,e("div",le,[ce,K(l,U({},{ranges:[]}),{default:I(()=>[de]),_:1},16)])]),_:1},16)}const ye=P(ae,[["render",pe],["__file","/@slidev/slides/43.md"]]);export{ye as default};
