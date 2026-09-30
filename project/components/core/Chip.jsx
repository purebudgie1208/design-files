import React from "react";
import {Icon} from "./Icon.jsx";
export function Chip({children,icon,tone="light",style,onClick,...rest}){
  const [h,setH]=React.useState(false);
  const inv=tone==="inverse",glass=tone==="glass";
  return <span onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"inline-flex",alignItems:"center",gap:8,padding:"5px 5px 5px 11px",borderRadius:"var(--radius-pill)",
      background:glass?"var(--glass)":inv?"var(--surface-inverse-raised)":h&&onClick?"var(--surface-sunken)":"var(--surface-chip)",
      backdropFilter:glass?"blur(14px)":undefined,
      color:inv||glass?"var(--white)":"var(--ink-000)",fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontWeight:"var(--fw-regular)",lineHeight:1,
      border:"1px solid "+(glass?"rgba(255,255,255,.22)":inv?"var(--border-inverse)":"var(--border-hairline)"),
      cursor:onClick?"pointer":"default",transition:"var(--transition-ui)",...style}} {...rest}>
    <span>{children}</span>
    {icon&&<span style={{width:19,height:19,borderRadius:"var(--radius-pill)",background:glass||inv?"rgba(255,255,255,.14)":"var(--white)",border:"1px solid "+(glass||inv?"transparent":"var(--border-hairline)"),display:"grid",placeItems:"center",transform:h&&onClick?"translateX(2px)":"none",transition:"transform var(--dur-base) var(--ease-standard)"}}><Icon name={icon} size={11} strokeWidth={1.8} /></span>}
  </span>;
}
