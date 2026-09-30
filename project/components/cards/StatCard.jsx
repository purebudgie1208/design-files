import React from "react";
export function StatCard({label,value,description,style,...rest}){
  return <div style={{background:"var(--surface-sunken)",borderRadius:"var(--radius-card)",padding:"24px 28px 30px",display:"flex",flexDirection:"column",gap:0,minHeight:230,justifyContent:"space-between",...style}} {...rest}>
    <div>
      <div style={{fontFamily:"var(--font-core)",fontStyle:"italic",fontSize:19,letterSpacing:"-.01em",color:"var(--text-accent)",paddingBottom:14}}>{label}</div>
      <div style={{height:1,background:"var(--border-hairline)"}} />
    </div>
    <div>
      <div style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:"var(--fs-stat)",lineHeight:"var(--lh-stat)",letterSpacing:"var(--tr-stat)",color:"var(--text-strong)"}}>{value}</div>
      {description&&<div style={{marginTop:12,fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--text-muted)",maxWidth:220}}>{description}</div>}
    </div>
  </div>;
}
