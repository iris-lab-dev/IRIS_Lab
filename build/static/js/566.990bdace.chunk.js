"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[566],{2646:(e,i,t)=>{t.d(i,{A:()=>r});var n=t(579);const r=e=>{var i;let{src:t,width:r,height:l}=e;const s="png"===(null===(i=t.split(".").pop())||void 0===i?void 0:i.toLowerCase())?"png":"svg";return(0,n.jsx)("img",{src:`/img/${s}/${t}`,alt:t,width:r,height:l,style:{width:r,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,i,t)=>{t.d(i,{$:()=>l});const n=(0,t(9).Ay)("button")`
  background: ${e=>e.color||"#000"};
  color: ${e=>e.color?"#000":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(0 0 0 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #000;
    background-color: #000;
  }
`;var r=t(579);const l=e=>{let{color:i,children:t,onClick:l}=e;return(0,r.jsx)(n,{color:i,onClick:l,children:t})}},6566:(e,i,t)=>{t.r(i),t.d(i,{default:()=>I});var n=t(4647),r=t(3614),l=t(9281),s=t(5639),d=t(2646),o=t(1319),a=t(9);const c=(0,a.Ay)("section")`
  position: relative;
  min-height: calc(100vh - var(--header-height));
  padding: 8rem 0 4rem;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,h=(0,a.Ay)("h6")`
  white-space: pre-line;
`,x=(0,a.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
  white-space: pre-line;
`,m=(0,a.Ay)(o.A)`
  width: 100%;
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,p=(0,a.Ay)("div")`
  position: relative;
  max-width: 540px;
  width: 100%;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,g=(0,a.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,f=(0,a.Ay)(p)`
  max-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  ${x} {
    max-width: 720px;
    margin: 1.5rem auto 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 575px) {
    padding-top: 0;

    ${x} {
      max-width: 100%;
    }
  }
`,y=(0,a.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,w=(0,a.Ay)(o.A)`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  row-gap: 2rem;

  .ant-col {
    display: flex;
    justify-content: center;
  }
`,j=(0,a.Ay)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
`,u=(0,a.Ay)("div")`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`,A=((0,a.Ay)("h6")`
  font-size: 22px;
  line-height: 1.3;
  padding: 0 0 0.75rem;
  color: #000;
  font-family: "Motiva Sans Bold", sans-serif;
  font-weight: 700;
  white-space: pre-line;
`,(0,a.Ay)("p")`
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-line;
  max-width: 260px;
  margin: 0 auto;
  text-align: center;
`),v=(0,a.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
`,b=(0,a.Ay)("div")`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    gap: 1rem;
  }
`,k=(0,a.Ay)("div")`
  min-width: 110px;
  font-size: 3rem;
  line-height: 1;
  font-family: "Motiva Sans Bold", sans-serif;
  font-weight: 700;
  color: #000;
`,$=(0,a.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,z=(0,a.Ay)("div")`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  color: #000;
`,C=(0,a.Ay)("span")`
  min-width: 28px;
  font-size: 1rem;
  line-height: 1.6;
  font-family: "Motiva Sans Bold", sans-serif;
  font-weight: 700;
`,B=(0,a.Ay)("span")`
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-line;
`,M=(0,a.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var S=t(579);const I=(0,l.C)()((e=>{let{icon:i,title:t,content:l,section:o,history:a,button:I,t:W,id:_,direction:E}=e;const F="object"===typeof o&&o.length>0,L="object"===typeof a&&a.length>0,O=Boolean(i);return(0,S.jsx)(c,{children:(0,S.jsx)(r.zW,{direction:E,triggerOnce:!0,children:F?(0,S.jsx)(g,{children:(0,S.jsxs)(f,{id:_,children:[(0,S.jsx)(h,{children:W(t)}),l?(0,S.jsx)(x,{children:W(l)}):null,(0,S.jsx)(y,{children:(0,S.jsx)(w,{gutter:[24,24],children:o.map(((e,i)=>(0,S.jsx)(n.A,{lg:7,md:8,sm:12,xs:24,children:(0,S.jsxs)(j,{children:[(0,S.jsx)(u,{children:(0,S.jsx)(d.A,{src:e.icon,width:"108px",height:"108px"})}),(0,S.jsx)(A,{children:W(e.content)})]})},i)))})})]})}):L?(0,S.jsx)(m,{justify:"space-between",align:"middle",id:_,direction:E,children:(0,S.jsx)(n.A,{span:24,children:(0,S.jsxs)(p,{children:[(0,S.jsx)(h,{children:W(t)}),(0,S.jsx)(v,{children:a.map(((e,i)=>(0,S.jsxs)(b,{children:[(0,S.jsx)(k,{children:W(e.year)}),(0,S.jsx)($,{children:e.items.map(((e,i)=>(0,S.jsxs)(z,{children:[(0,S.jsx)(C,{children:W(e.month)}),(0,S.jsx)(B,{children:W(e.content)})]},i)))})]},i)))})]})})}):(0,S.jsxs)(m,{justify:"space-between",align:"middle",id:_,direction:E,children:[O?(0,S.jsx)(n.A,{lg:11,md:11,sm:12,xs:24,children:(0,S.jsx)(d.A,{src:i,width:"100%",height:"100%"})}):null,(0,S.jsx)(n.A,{lg:O?11:24,md:O?11:24,sm:O?11:24,xs:24,children:(0,S.jsxs)(p,{children:[(0,S.jsx)(h,{children:W(t)}),l?(0,S.jsx)(x,{children:W(l)}):null,"right"===E?(0,S.jsx)(M,{children:"object"===typeof I&&I.map(((e,i)=>(0,S.jsx)(s.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:W(e.title)},i)))}):null]})})]})})})}))}}]);
//# sourceMappingURL=566.990bdace.chunk.js.map