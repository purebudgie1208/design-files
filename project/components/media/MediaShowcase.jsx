import React from "react";
import {Eyebrow} from "../core/Eyebrow.jsx";
import {Chip} from "../core/Chip.jsx";
export function MediaShowcase({image,eyebrow="Our Facilities",headline,cornerLabel="AVAILABLE FACILITY",counter="02",total="08",watermark="Library",captionTitle,captionBody,height=470,style,...rest}){
  return <section style={{position:"relative",borderRadius:"var(--radius-media)",overflow:"hidden",height,background:"var(--ink-900)",...style}} {...rest}>
    <img src={image} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} />
    <div style={{position:"absolute",inset:0,background:"var(--scrim-top)"}} />
    <div style={{position:"absolute",left:26,top:22,right:26,display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:24}}>
      <div style={{maxWidth:520}}>
        <Eyebrow tone="inverse" style={{color:"rgba(255,255,255,.75)",marginBottom:10}}>{eyebrow}</Eyebrow>
        <h2 style={{margin:0,fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:"var(--fs-h2)",lineHeight:"var(--lh-h2)",letterSpacing:"var(--tr-h2)",color:"#fff",textWrap:"pretty"}}>{headline}</h2>
      </div>
      <div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-caption)",letterSpacing:".08em",color:"rgba(255,255,255,.85)",textAlign:"right",lineHeight:1.4}}>{cornerLabel}</div>
    </div>
    {captionTitle&&<div style={{position:"absolute",right:"14%",top:"46%",maxWidth:240,padding:"12px 14px",borderRadius:"var(--radius-md)",background:"var(--glass)",backdropFilter:"blur(14px)",border:"1px solid rgba(255,255,255,.18)"}}>
      <div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontWeight:"var(--fw-medium)",color:"#fff",marginBottom:5}}>{captionTitle}</div>
      <div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-caption)",lineHeight:1.5,color:"rgba(255,255,255,.8)"}}>{captionBody}</div>
    </div>}
    <div style={{position:"absolute",left:18,right:18,bottom:-22,display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
      <div style={{marginLeft:8,marginBottom:10,fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:26,letterSpacing:"-.02em",color:"#fff"}}>
        {counter}<span style={{color:"rgba(255,255,255,.55)",fontSize:18}}>/{total}</span>
      </div>
      <div style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:150,lineHeight:.78,letterSpacing:"var(--tr-display-xl)",color:"rgba(255,255,255,.62)"}}>{watermark}</div>
    </div>
  </section>;
}
