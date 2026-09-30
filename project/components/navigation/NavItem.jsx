import React from "react";
import {Icon} from "../core/Icon.jsx";
export function NavItem({children,hasMenu=true,active=false,onClick,style,...rest}){
  const [h,setH]=React.useState(false);
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"inline-flex",alignItems:"center",gap:5,background:"none",border:"none",padding:"6px 0",cursor:"pointer",
      fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontWeight:"var(--fw-regular)",letterSpacing:"-.008em",
      color:active||h?"var(--text-strong)":"var(--neutral-700)",transition:"var(--transition-ui)",...style}} {...rest}>
    {children}{hasMenu&&<Icon name="chevron-down" size={13} strokeWidth={1.6} style={{transform:h?"translateY(1px)":"none",transition:"transform var(--dur-fast) var(--ease-standard)"}} />}
  </button>;
}
