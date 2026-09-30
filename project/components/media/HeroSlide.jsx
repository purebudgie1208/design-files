import React from "react";
import {Wordmark} from "../core/Wordmark.jsx";
export function HeroSlide({image,watermark="Oxford",year="2025",headline,body,height=440,children,style,...rest}){
  return <section style={{position:"relative",borderRadius:"var(--radius-media)",overflow:"hidden",height,background:"var(--neutral-300)",...style}} {...rest}>
    <img src={image} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />
    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"6%"}}>
      <Wordmark text={watermark} size={200} tone="translucent" style={{whiteSpace:"nowrap",transform:"scale(1.9)",transformOrigin:"top center"}} />
    </div>
    <div style={{position:"absolute",inset:0,background:"var(--scrim-bottom)"}} />
    <div style={{position:"absolute",left:30,bottom:26,fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",color:"rgba(255,255,255,.9)"}}>{year}</div>
    <div style={{position:"absolute",left:"30%",bottom:22,maxWidth:300,fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"rgba(255,255,255,.88)"}}>
      <strong style={{color:"#fff",fontWeight:"var(--fw-semibold)"}}>{headline}</strong> {body}
    </div>
    <div style={{position:"absolute",right:26,bottom:22}}>{children}</div>
  </section>;
}
