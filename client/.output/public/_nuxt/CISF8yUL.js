import{_ as A,D as B,G as m,l as N,K as D,L as $,N as q,g as w,O as L,P as x,o as t,c as s,W as f,d as P,t as M,V as y,I as U,J as O,a as d,U as v,F as C,T as k,X as p,aB as F,aC as W,Z as I,b as _,w as j,aD as X,aE as Z,aF as H,h as K,a4 as Q}from"./BqDk7vYE.js";import{_ as Y}from"./T2nn6245.js";const ee={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},ae={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},re={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},g=B(m.ui.strategy,m.ui.badge,ee),te=N({inheritAttrs:!1,props:{size:{type:String,default:()=>g.default.size,validator(e){return Object.keys(g.size).includes(e)}},color:{type:String,default:()=>g.default.color,validator(e){return[...m.ui.colors,...Object.keys(g.color)].includes(e)}},variant:{type:String,default:()=>g.default.variant,validator(e){return[...Object.keys(g.variant),...Object.values(g.color).flatMap(a=>Object.keys(a))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:o}=D("badge",$(e,"ui"),g),{size:i,rounded:c}=q({ui:a,props:e}),n=w(()=>{var u,h;const l=((h=(u=a.value.color)==null?void 0:u[e.color])==null?void 0:h[e.variant])||a.value.variant[e.variant];return L(x(a.value.base,a.value.font,c.value,a.value.size[i.value],l==null?void 0:l.replaceAll("{color}",e.color)),e.class)});return{attrs:o,badgeClass:n}}});function oe(e,a,o,i,c,n){return t(),s("span",y({class:e.badgeClass},e.attrs),[f(e.$slots,"default",{},()=>[P(M(e.label),1)])],16)}const E=A(te,[["render",oe]]),z=B(m.ui.strategy,m.ui.divider,ae),se=N({components:{UIcon:U,UAvatar:O},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>z.default.size,validator(e){return Object.keys(z.border.size.horizontal).includes(e)||Object.keys(z.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:o}=D("divider",$(e,"ui"),z),i=w(()=>L(x(a.value.wrapper.base,a.value.wrapper[e.orientation]),e.class)),c=w(()=>x(a.value.container.base,a.value.container[e.orientation])),n=w(()=>x(a.value.border.base,a.value.border[e.orientation],a.value.border.size[e.orientation][e.size],a.value.border.type[e.type]));return{ui:a,attrs:o,wrapperClass:i,containerClass:c,borderClass:n}}});function ie(e,a,o,i,c,n){const l=U,u=O;return t(),s("div",y({class:e.wrapperClass},e.attrs),[d("div",{class:v(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(t(),s(C,{key:0},[d("div",{class:v(e.containerClass)},[f(e.$slots,"default",{},()=>[e.label?(t(),s("span",{key:0,class:v(e.ui.label)},M(e.label),3)):e.icon?(t(),k(l,{key:1,name:e.icon,class:v(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(t(),k(u,y({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):p("",!0)])],2),d("div",{class:v(e.borderClass)},null,2)],64)):p("",!0)],16)}const J=A(se,[["render",ie]]),ne=B(m.ui.strategy,m.ui.verticalNavigation,re),le=N({components:{UIcon:U,UAvatar:O,UBadge:E,ULink:F,UDivider:J},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:o}=D("verticalNavigation",$(e,"ui"),ne,$(e,"class")),i=w(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:a,attrs:o,sections:i,getULinkProps:W,twMerge:L,twJoin:x}}}),de={key:0,class:"sr-only"};function ce(e,a,o,i,c,n){const l=O,u=U,h=E,V=F,T=J;return t(),s("nav",y({class:e.ui.wrapper},e.attrs),[(t(!0),s(C,null,I(e.sections,(G,S)=>(t(),s("ul",{key:`section${S}`},[(t(!0),s(C,null,I(G,(r,R)=>(t(),s("li",{key:`section${S}-${R}`},[_(V,y(e.getULinkProps(r),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:r.click,onKeyup:a[0]||(a[0]=X(b=>b.target.blur(),["enter"]))}),{default:j(({isActive:b})=>[f(e.$slots,"avatar",{link:r,isActive:b},()=>[r.avatar?(t(),k(l,y({key:0},{size:e.ui.avatar.size,...r.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):p("",!0)]),f(e.$slots,"icon",{link:r,isActive:b},()=>[r.icon?(t(),k(u,{key:0,name:r.icon,class:v(e.twMerge(e.twJoin(e.ui.icon.base,b?e.ui.icon.active:e.ui.icon.inactive),r.iconClass))},null,8,["name","class"])):p("",!0)]),f(e.$slots,"default",{link:r,isActive:b},()=>[r.label?(t(),s("span",{key:0,class:v(e.twMerge(e.ui.label,r.labelClass))},[b?(t(),s("span",de," Current page: ")):p("",!0),P(" "+M(r.label),1)],2)):p("",!0)]),f(e.$slots,"badge",{link:r,isActive:b},()=>[r.badge?(t(),k(h,y({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof r.badge=="string"||typeof r.badge=="number"?{label:r.badge}:r.badge},{class:e.ui.badge.base}),null,16,["class"])):p("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),S<e.sections.length-1?(t(),k(T,{key:0,ui:e.ui.divider},null,8,["ui"])):p("",!0)]))),128))],16)}const ue=A(le,[["render",ce]]),be=()=>Z("color-mode").value,ge={class:"fixed left-0 w-[15%] top-0 h-full transition-transform -translate-x-full sm:translate-x-0 border-r border-gray-300 shadow-inner z-10"},pe={class:"mt-4"},ve={class:"ml-2 absolute bottom-[5%]"},fe=d("div",{class:"w-8 h-8"},null,-1),ye={class:"ml-[15%] mt-[1%]"},ke={__name:"default",setup(e){const a=be(),o=w({get(){return a.value==="dark"},set(){a.preference=a.value==="dark"?"light":"dark"}});H();const i=[{label:"Asosiy Sahifa",icon:"i-heroicons-home",to:"/"},{label:"Profil",icon:"i-heroicons-user-circle",to:"/profile"},{label:"Foydalanuvchilar",icon:"i-heroicons-users",to:"/users"},{label:"Bannerlar",icon:"i-heroicons-cpu-chip",to:"/banners"},{label:"Kategoriyalar",icon:"i-heroicons-bars-4",to:"/categories"},{label:"Kitoblar",icon:"i-heroicons-book-open",to:"/books"},{label:"Audiolar",icon:"i-heroicons-speaker-wave",to:"/audios"},{label:"Eslatmalar",icon:"i-heroicons-bell",to:"/notifications"},{label:"Chiqish",icon:"i-heroicons-chevron-double-left",to:"/exit"}];return(c,n)=>{const l=ue,u=Q,h=Y;return t(),s(C,null,[d("div",null,[d("aside",ge,[d("ul",pe,[_(l,{links:i})]),d("div",ve,[_(h,null,{fallback:j(()=>[fe]),default:j(()=>[_(u,{icon:K(o)?"i-heroicons-moon-20-solid":"i-heroicons-sun-20-solid",color:"gray",variant:"ghost","aria-label":"Theme",onClick:n[0]||(n[0]=V=>o.value=!K(o))},null,8,["icon"])]),_:1})])])]),d("div",ye,[f(c.$slots,"default")])],64)}}};export{ke as default};
