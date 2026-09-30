import React from "react";
import {Chip} from "../core/Chip.jsx";
export function NewsCard({image,date,author,title,readTime,onRead,style,...rest}){
  const [h,setH]=React.useState(false);
  return <article onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:"flex",flexDirection:"column",...style}} {...rest}>
    <div style={{borderRadius:"var(--radius-media)",overflow:"hidden",aspectRatio:"4/3",background:"var(--neutral-200)"}}>
      <img src={image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:h?"scale(1.03)":"scale(1)",transition:"transform var(--dur-slow) var(--ease-out)"}} />
    </div>
    <div style={{display:"flex",justifyContent:"space-between",fontFamily:"var(--font-core)",fontSize:"var(--fs-caption)",color:"var(--text-faint)",margin:"16px 0 10px"}}>
      <span>{date}</span><span>{author}</span>
    </div>
    <h3 style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:"var(--fs-body-l)",lineHeight:1.35,letterSpacing:"-.012em",color:"var(--text-strong)",margin:0,textWrap:"pretty"}}>{title}</h3>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18}}>
      <span style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-caption)",color:"var(--text-faint)"}}>{readTime}</span>
      <Chip icon="arrow-right" onClick={onRead}>Read more</Chip>
    </div>
  </article>;
}
