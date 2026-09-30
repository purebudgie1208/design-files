import React from "react";
export function EventCard({image,title,year,venue,ratio="3/2",style,...rest}){
  const [h,setH]=React.useState(false);
  return <article onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:"flex",flexDirection:"column",gap:14,cursor:"pointer",...style}} {...rest}>
    <div style={{borderRadius:"var(--radius-media)",overflow:"hidden",aspectRatio:ratio,background:"var(--neutral-200)"}}>
      <img src={image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:h?"scale(1.03)":"scale(1)",transition:"transform var(--dur-slow) var(--ease-out)"}} />
    </div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16}}>
      <div>
        <div style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:"var(--fs-body-l)",letterSpacing:"-.012em",color:"var(--text-strong)"}}>{title}</div>
        <div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",color:"var(--text-muted)",marginTop:3}}>{year}</div>
      </div>
      {venue&&<div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",lineHeight:1.35,color:"var(--text-faint)",textAlign:"right",maxWidth:96}}>{venue}</div>}
    </div>
  </article>;
}
