import{ae as F,k as N,r as P,g as b,a8 as k,l as S,x as M}from"./BqDk7vYE.js";function q(t,e){const n=e/t*100;return 2/Math.PI*100*Math.atan(n/50)}function E(t={}){const{duration:e=2e3,throttle:n=200,hideDelay:r=500,resetDelay:u=400}=t,f=t.estimatedProgress||q,i=k(),a=P(0),s=P(!1);let m=!1,p,h,v,_;const I=()=>x(0);function x(o=0){if(!i.isHydrating){if(o>=100)return l();d(),a.value=o<0?0:o,n?h=setTimeout(()=>{s.value=!0,y()},n):(s.value=!0,y())}}function D(){v=setTimeout(()=>{s.value=!1,_=setTimeout(()=>{a.value=0},u)},r)}function l(o={}){a.value=100,m=!0,d(),L(),o.force?(a.value=0,s.value=!1):D()}function L(){clearTimeout(v),clearTimeout(_)}function d(){clearTimeout(h),cancelAnimationFrame(p)}function y(){m=!1;let o;function c(g){if(m)return;o??(o=g);const A=g-o;a.value=Math.max(0,Math.min(100,f(e,A))),p=requestAnimationFrame(c)}p=requestAnimationFrame(c)}let T=()=>{};{const o=i.hook("page:loading:start",()=>{I()}),c=i.hook("page:loading:end",()=>{l()}),g=i.hook("vue:error",()=>l());T=()=>{g(),o(),c(),d()}}return{_cleanup:T,progress:b(()=>a.value),isLoading:b(()=>s.value),start:I,set:x,finish:l,clear:d}}function H(t={}){const e=k(),n=e._loadingIndicator=e._loadingIndicator||E(t);return F()&&(e._loadingIndicatorDeps=e._loadingIndicatorDeps||0,e._loadingIndicatorDeps++,N(()=>{e._loadingIndicatorDeps--,e._loadingIndicatorDeps===0&&(n._cleanup(),delete e._loadingIndicator)})),n}const z=S({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:[String,Boolean],default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"},estimatedProgress:{type:Function,required:!1}},setup(t,{slots:e,expose:n}){const{progress:r,isLoading:u,start:f,finish:i,clear:a}=H({duration:t.duration,throttle:t.throttle,estimatedProgress:t.estimatedProgress});return n({progress:r,isLoading:u,start:f,finish:i,clear:a}),()=>M("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:"auto",height:`${t.height}px`,opacity:u.value?1:0,background:t.color||void 0,backgroundSize:`${100/r.value*100}% auto`,transform:`scaleX(${r.value}%)`,transformOrigin:"left",transition:"transform 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});export{z as _};
