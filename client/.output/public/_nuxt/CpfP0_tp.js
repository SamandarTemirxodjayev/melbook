import{g as F,r as m,h as j,n as v,c as z,a as r,b as s,w as o,i as _,j as d,k as I,o as V,d as p,t as b}from"./7D1AE9KK.js";import{_ as D,d as x,a as M}from"./Jz6b3TTS.js";import{_ as N,a as O,b as R}from"./Dc5sforu.js";import{d as q,_ as G,a as L}from"./Cx4OvYUc.js";import{B as c,C as Q}from"./qFn4ZVty.js";import"./BAWvFiHX.js";const Y=r("div",{class:"text-2xl font-bold"},"Bannerlar",-1),P={class:"shadow-2xl border border-gray-500 items-center my-4"},J={class:"flex p-4 justify-end"},H=["src"],K={class:"flex flex-col items-center justify-center py-6 gap-3"},W=r("span",{class:"italic text-sm"},"Ma'lumot Mavjud Emas",-1),X={class:"flex items-center justify-between"},Z=r("h3",{class:"text-base font-semibold leading-6 text-gray-900 dark:text-white"}," Banner Qo'shish ",-1),re={__name:"index",setup(ee){const h=F();let u=m([]),a=m(!1),i=m(!0),f=m(null);j(async()=>{try{const e=await $fetch(c+"/banners",{method:"GET"});u.value=e.data,i.value=!1}catch(e){e.response&&e.response.status===401&&(localStorage.removeItem("token"),v("/exit")),console.log(e)}});const k=[{key:"photo_url",label:"Rasm"},{key:"createdAt",label:"Yaratilgan vaqti"},{key:"updatedAt",label:"Yangilangan vaqti"},{key:"actions",label:"Action"}],w=e=>[[{label:"O'chirish",icon:"i-heroicons-trash-20-solid",click:()=>B(e._id)}]],B=async e=>{i.value=!0;try{const t=await $fetch(c+"/banners/"+e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});if(t.status===200){h.add({title:t.message});const l=await $fetch(c+"/banners",{method:"GET"});u.value=l.data}else h.add({title:t.message})}catch(t){t.response&&t.response.status===401&&(localStorage.removeItem("token"),v("/exit")),console.log(t)}i.value=!1};function T(e){e.target.files.length>0&&(f.value=e.target.files[0])}const U=async()=>{i.value=!0;try{const e=new FormData;e.append("file",f.value);const{data:t}=await $fetch(Q+"/upload",{method:"POST",body:e}),l=await $fetch(c+"/banners",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({photo_url:t.fileUrl})});a.value=!1,h.add({title:l.message});const g=await $fetch(c+"/banners",{method:"GET"});f.value=null,u.value=g.data}catch(e){e.response&&e.response.status===401&&(localStorage.removeItem("token"),v("/exit")),console.log(e)}i.value=!1};return q({escape:{usingInput:!0,whenever:[a],handler:()=>{a.value=!1}}}),(e,t)=>{const l=I,g=M,S=D,$=N,y=O,C=R,A=L,E=G;return V(),z("div",null,[Y,r("div",P,[r("div",J,[s(l,{size:"lg",onClick:t[0]||(t[0]=n=>_(a)?a.value=!0:a=!0)},{default:o(()=>[p("Banner Qo'shish")]),_:1})])]),s(S,{loading:d(i),"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Yuklanmoqda..."},progress:{color:"primary",animation:"carousel"},columns:k,rows:d(u),"empty-state":{icon:"i-heroicons-circle-stack-20-solid",label:"Bannerlar Mavjud Emas"}},{"photo_url-data":o(({row:n})=>[r("img",{src:n.photo_url,alt:""},null,8,H)]),"createdAt-data":o(({row:n})=>[p(b(("dateFormat"in e?e.dateFormat:d(x))(n.createdAt)),1)]),"updatedAt-data":o(({row:n})=>[p(b(("dateFormat"in e?e.dateFormat:d(x))(n.updatedAt)),1)]),"actions-data":o(({row:n})=>[s(g,{items:w(n)},{default:o(()=>[s(l,{color:"gray",variant:"ghost",icon:"i-heroicons-ellipsis-horizontal-20-solid"})]),_:2},1032,["items"])]),"empty-state":o(()=>[r("div",K,[W,s(l,{label:"Banner Qo'shish",onClick:t[1]||(t[1]=n=>_(a)?a.value=!0:a=!0)})])]),_:1},8,["loading","loading-state","rows"]),s(E,{modelValue:d(a),"onUpdate:modelValue":t[3]||(t[3]=n=>_(a)?a.value=n:a=n),"prevent-close":""},{default:o(()=>[s(A,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{header:o(()=>[r("div",X,[Z,s(l,{color:"gray",variant:"ghost",icon:"i-heroicons-x-mark-20-solid",class:"-my-1",onClick:t[2]||(t[2]=n=>_(a)?a.value=!1:a=!1)})])]),default:o(()=>[s(C,{onSubmit:U},{default:o(()=>[s(y,{class:"my-[2%]",label:"Banner Uchun Rasm Tanglang",name:"photo",size:"lg"},{default:o(()=>[s($,{type:"file",size:"lg",onChange:T})]),_:1}),s(y,{class:"my-[2%]",name:"submit",size:"xl"},{default:o(()=>[s(l,{loading:d(i),type:"submit",color:"primary",size:"xl",block:""},{default:o(()=>[p("Tasdiqlash")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}};export{re as default};