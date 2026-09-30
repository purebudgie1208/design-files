import React from "react";
import {IconButton} from "../core/IconButton.jsx";
export function ProgramRow({index,title,description,onOpen,last=false,style,...rest}){
  const [h,setH]=React.useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"grid",gridTemplateColumns:"56px minmax(0,1.1fr) minmax(0,1.3fr) 48px",alignItems:"center",gap:24,
      padding:"26px 0",borderTop:"1px solid var(--border-hairline)",borderBottom:last?"1px solid var(--border-hairline)":"none",
      background:h?"var(--neutral-050)":"transparent",transition:"background var(--dur-base) var(--ease-standard)",...style}} {...rest}>
    <span style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-caption)",color:"var(--text-accent)"}}>{index}</span>
    <span style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-regular)",fontSize:"var(--fs-h3)",lineHeight:"var(--lh-h3)",letterSpacing:"var(--tr-h3)",color:"var(--text-strong)"}}>{title}</span>
    <span style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",lineHeight:"var(--lh-body)",color:"var(--text-muted)"}}>{description}</span>
    <IconButton icon="chevron-right" shape="square" size={32} onClick={onOpen} label={typeof title==="string"?title:"Open"} />
  </div>;
}
