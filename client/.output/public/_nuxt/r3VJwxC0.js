import{B as g,c as v,b as y,_ as h}from"./CKa3YBXY.js";import{r as p,a1 as x,v as k,a2 as c,c as w,b as e,w as t,o as U,h as n,a3 as f,d as B,a as T,a4 as S}from"./6MvdGIUj.js";import"./DXAgjXKp.js";const I=T("h1",{class:"text-2xl font-semibold"},"Profil Ma'lumotlari",-1),R={__name:"index",setup(F){let a=p({username:"",name:"",surname:"",phone_number:"",password:""}),r=p(""),u=p(""),d=p(!0);const _=x();k(async()=>{try{const o=await $fetch(g+"/user/get-me",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});a.value=o.data,d.value=!1}catch(o){return o.response&&o.response.status===401&&(localStorage.removeItem("token"),c("/exit")),console.log(o)}});const z=async()=>{d.value=!0;try{if(r.value!==u.value){_.add({title:"Yangi Parol Kiritishda Xato Kiritilgan"}),d.value=!1;return}const o=await $fetch(g+"/user/",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({username:a.value.username,name:a.value.name,surname:a.value.surname,phone_number:a.value.phone_number,password:r.value?r.value:a.value.password})});_.add({title:o.message}),_.add({title:"Boshidan Tizimga Kiring"}),c("/exit")}catch(o){o.response&&o.response.status===401&&(localStorage.removeItem("token"),c("/exit"))}d.value=!1};return(o,s)=>{const i=y,m=h,b=S,V=v;return U(),w("div",null,[e(V,{class:"max-w-[40%]",onSubmit:z},{default:t(()=>[I,e(m,{class:"my-[2%]",label:"Username",name:"name",size:"sm"},{default:t(()=>[e(i,{modelValue:n(a).username,"onUpdate:modelValue":s[0]||(s[0]=l=>n(a).username=l),size:"sm",placeholder:"Usernamizni kiriting"},null,8,["modelValue"])]),_:1}),e(m,{class:"my-[2%]",label:"Ismingiz",name:"name",size:"sm"},{default:t(()=>[e(i,{modelValue:n(a).name,"onUpdate:modelValue":s[1]||(s[1]=l=>n(a).name=l),size:"sm",placeholder:"Ismingizni kiriting"},null,8,["modelValue"])]),_:1}),e(m,{class:"my-[2%]",label:"Familyangiz",name:"surname",size:"sm"},{default:t(()=>[e(i,{modelValue:n(a).surname,"onUpdate:modelValue":s[2]||(s[2]=l=>n(a).surname=l),size:"sm",placeholder:"Familyangizni kiriting"},null,8,["modelValue"])]),_:1}),e(m,{class:"my-[2%]",label:"Telefon Raqamingiz",name:"phone_number",size:"sm"},{default:t(()=>[e(i,{modelValue:n(a).phone_number,"onUpdate:modelValue":s[3]||(s[3]=l=>n(a).phone_number=l),size:"sm",placeholder:"Telefon Raqamingizni kiriting"},null,8,["modelValue"])]),_:1}),e(m,{class:"my-[2%]",label:"Yangi Parol",name:"password",size:"sm"},{default:t(()=>[e(i,{type:"password",modelValue:n(r),"onUpdate:modelValue":s[4]||(s[4]=l=>f(r)?r.value=l:r=l),size:"sm",placeholder:"Yangi parolni kiriting"},null,8,["modelValue"])]),_:1}),e(m,{class:"my-[2%]",label:"Yangi Parolni Takrorlang",name:"password",size:"sm"},{default:t(()=>[e(i,{type:"password",modelValue:n(u),"onUpdate:modelValue":s[5]||(s[5]=l=>f(u)?u.value=l:u=l),size:"sm",placeholder:"Yangi parolni takroran kiriting"},null,8,["modelValue"])]),_:1}),e(m,{class:"my-[2%]",name:"submit",size:"xl"},{default:t(()=>[e(b,{loading:n(d),type:"submit",color:"primary",size:"sm",block:""},{default:t(()=>[B("Tasdiqlash")]),_:1},8,["loading"])]),_:1})]),_:1})])}}};export{R as default};
