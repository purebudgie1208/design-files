import React from "react";
import {Icon} from "./Icon.jsx";
export function IconButton({icon="chevron-right",active=false,shape="pill",size=30,disabled=false,onClick,label,style,...rest}){
  const [h,setH]=React.useState(false),[a,setA]=React.useState(false);
  return <button aria-label={label||icon} onClick={disabled?undefined:onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setA(false);}} onMouseDown={()=>setA(true)} onMouseUp={()=>setA(false)}
    style={{width:size,height:size,display:"grid",placeItems:"center",flex:"none",
      borderRadius:shape==="pill"?"var(--radius-pill)":"var(--radius-sm)",
      background:active?(h?"var(--action-primary-bg-hover)":"var(--action-primary-bg)"):(h?"var(--surface-sunken)":"var(--white)"),
      color:active?"var(--white)":"var(--ink-000)",
      border:"1px solid "+(active?"transparent":h?"var(--border-strong)":"var(--border-hairline)"),
      boxShadow:active?"none":"var(--shadow-chip)",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.4:1,
      transform:a&&!disabled?"scale(var(--press-scale))":"none",transition:"var(--transition-ui)",padding:0,...style}} {...rest}>
    <Icon name={icon} size={Math.round(size*.47)} strokeWidth={1.8} />
  </button>;
}
