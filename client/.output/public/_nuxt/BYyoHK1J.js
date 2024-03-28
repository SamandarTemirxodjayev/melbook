import{_ as V}from"./wNS8vd55.js";import{b as R,a as S,_ as F}from"./B16jJ9f5.js";import{a7 as N,r as v,s as $,L as k,a6 as E,A as T,i as j,a8 as I,a9 as K,h as x,aa as M,g as q,ab as h,ac as H,m as G,ad as J,a1 as X,a2 as U,c as Q,b as p,w,o as W,a3 as B,d as Y,a as Z,a4 as A}from"./BqDk7vYE.js";import{B as ee}from"./D7peMnsk.js";import"./T2nn6245.js";const ae=s=>s==="defer"||s===!1;function te(...s){var P;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,r,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=I(),c=r,u=()=>null,D=()=>a.isHydrating?a.payload.data[t]:a.static.data[t];e.server=e.server??!0,e.default=e.default??u,e.getCachedData=e.getCachedData??D,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??N.deep,e.dedupe=e.dedupe??"cancel";const m=()=>e.getCachedData(t,a)!=null;if(!a._asyncData[t]||!e.immediate){(P=a.payload._errors)[t]??(P[t]=null);const l=e.deep?v:$;a._asyncData[t]={data:l(e.getCachedData(t,a)??e.default()),pending:v(!m()),error:k(a.payload._errors,t),status:v("idle")}}const o={...a._asyncData[t]};o.refresh=o.execute=(l={})=>{if(a._asyncDataPromises[t]){if(ae(l.dedupe??e.dedupe))return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if((l._initial||a.isHydrating&&l._initial!==!1)&&m())return Promise.resolve(e.getCachedData(t,a));o.pending.value=!0,o.status.value="pending";const _=new Promise((i,d)=>{try{i(c(a))}catch(C){d(C)}}).then(async i=>{if(_.cancelled)return a._asyncDataPromises[t];let d=i;e.transform&&(d=await e.transform(i)),e.pick&&(d=ne(d,e.pick)),a.payload.data[t]=d,o.data.value=d,o.error.value=null,o.status.value="success"}).catch(i=>{if(_.cancelled)return a._asyncDataPromises[t];o.error.value=K(i),o.data.value=x(e.default()),o.status.value="error"}).finally(()=>{_.cancelled||(o.pending.value=!1,delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=_,a._asyncDataPromises[t]},o.clear=()=>se(a,t);const g=()=>o.refresh({_initial:!0}),b=e.server!==!1&&a.payload.serverRendered;{const l=M();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const i=l._nuxtOnBeforeMountCbs;l&&(E(()=>{i.forEach(d=>{d()}),i.splice(0,i.length)}),T(()=>i.splice(0,i.length)))}b&&a.isHydrating&&(o.error.value||m())?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):l&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?l._nuxtOnBeforeMountCbs.push(g):e.immediate&&g(),e.watch&&j(e.watch,()=>o.refresh());const _=a.hook("app:data:refresh",async i=>{(!i||i.includes(t))&&await o.refresh()});l&&T(_)}const f=Promise.resolve(a._asyncDataPromises[t]).then(()=>o);return Object.assign(f,o),f}function se(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=null),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=null,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function ne(s,n){const t={};for(const r of n)t[r]=s[r];return t}function oe(s,n,t){const[r={},e]=typeof n=="string"?[{},n]:[n,t],a=q(()=>h(s)),c=r.key||H([e,typeof a.value=="string"?a.value:"",...re(r)]);if(!c||typeof c!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+c);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const u=c===e?"$f"+c:c;if(!r.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:D,lazy:m,default:o,transform:g,pick:b,watch:f,immediate:P,getCachedData:l,deep:_,dedupe:i,...d}=r,C=G({...J,...d,cache:typeof r.cache=="boolean"?void 0:r.cache}),L={server:D,lazy:m,default:o,transform:g,pick:b,immediate:P,getCachedData:l,deep:_,dedupe:i,watch:f===!1?[]:[C,a,...f||[]]};let y;return te(u,()=>{var O;(O=y==null?void 0:y.abort)==null||O.call(y),y=typeof AbortController<"u"?new AbortController:{};const z=h(r.timeout);return z&&setTimeout(()=>y.abort(),z),(r.$fetch||globalThis.$fetch)(a.value,{signal:y.signal,...C})},L)}function re(s){var t;const n=[((t=h(s.method))==null?void 0:t.toUpperCase())||"GET",h(s.baseURL)];for(const r of[s.params||s.query]){const e=h(r);if(!e)continue;const a={};for(const[c,u]of Object.entries(e))a[h(c)]=h(u);n.push(a)}return n}const ie={class:"mt-[15%] flex justify-center items-center"},le=Z("h1",{class:"text-3xl my-[2%] font-bold"},"Tizimga Kirish",-1),pe={__name:"index",setup(s){const n=X(),t=v(""),r=v(""),e=v(!1),a=async()=>{if(t.value==="")return n.add({title:"Loginingizni Kiriting"});if(r.value==="")return n.add({title:"Parolingizni Kiriting"});e.value=!0;const{data:c,error:u}=await oe(ee+"/user/login",{method:"POST",body:JSON.stringify({username:t.value,password:r.value})},"$iX10IJN3fa");if(u.value)return e.value=!1,n.add({title:u.value.data.message});localStorage.setItem("token",c.value.data.token),n.add({title:c.value.message}),U("/"),e.value=!1};return E(()=>{localStorage.getItem("token")&&U("/")}),(c,u)=>{const D=V,m=S,o=F,g=A,b=R;return W(),Q("div",ie,[p(b,{class:"min-w-[50%]",onSubmit:a},{default:w(()=>[le,p(D),p(o,{class:"my-[2%]",label:"Username",name:"username",size:"lg"},{default:w(()=>[p(m,{modelValue:x(t),"onUpdate:modelValue":u[0]||(u[0]=f=>B(t)?t.value=f:null),size:"lg",placeholder:"Loginingizni kiriting"},null,8,["modelValue"])]),_:1}),p(o,{class:"my-[2%]",label:"Parol",name:"password",size:"lg"},{default:w(()=>[p(m,{modelValue:x(r),"onUpdate:modelValue":u[1]||(u[1]=f=>B(r)?r.value=f:null),size:"lg",placeholder:"Parolingizni kiriting"},null,8,["modelValue"])]),_:1}),p(o,{class:"my-[2%]",name:"submit",size:"lg"},{default:w(()=>[p(g,{loading:x(e),type:"submit",color:"primary",size:"lg",block:""},{default:w(()=>[Y("Tasdiqlash")]),_:1},8,["loading"])]),_:1})]),_:1})])}}};export{pe as default};
