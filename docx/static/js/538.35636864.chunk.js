"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[538],{2646:(e,t,i)=>{i.d(t,{A:()=>s});var o=i(579);const s=e=>{var t;let{src:i,width:s,height:n}=e;const r="png"===(null===(t=i.split(".").pop())||void 0===t?void 0:t.toLowerCase())?"png":"svg";return(0,o.jsx)("img",{src:`/img/${r}/${i}`,alt:i,width:s,height:n,style:{width:s,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},8538:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var o=i(5043),s=i(2646);const n=(0,i(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=i(579);const a=()=>{const[e,t]=(0,o.useState)(!1),i=(0,o.useCallback)((()=>{const i=window.scrollY;!e&&i>350?t(!0):i<=350&&t(!1)}),[e]);(0,o.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[i]);return(0,r.jsx)(n,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,r.jsx)(s.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.35636864.chunk.js.map