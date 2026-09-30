import React from "react";
import {Icon} from "../core/Icon.jsx";
export function FeatureCard({index,icon="graduation-cap",title,description,raised=false,style,...rest}){
  const [h,setH]=React.useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{background:raised?"var(--surface-inverse-raised)":h?"#181818":"var(--surface-inverse-card)",
      border:"1px solid var(--border-inverse)",borderRadius:"var(--radius-card)",padding:"20px 22px 24px",
      boxShadow:raised?"var(--shadow-inverse)":"none",display:"flex",flexDirection:"column",gap:0,transition:"var(--transition-ui)",...style}} {...rest}>
    {index&&<div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-caption)",color:"var(--text-on-dark-muted)",marginBottom:26}}>{index}</div>}
    <div style={{color:"var(--white)",marginBottom:16}}><Icon name={icon} size={22} /></div>
    <div style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:"var(--fs-h4)",lineHeight:"var(--lh-h4)",letterSpacing:"var(--tr-h4)",color:"var(--text-on-dark)",marginBottom:10}}>{title}</div>
    <div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--text-on-dark-muted)"}}>{description}</div>
  </div>;
}
