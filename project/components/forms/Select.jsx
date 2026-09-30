import React from "react";
import {Icon} from "../core/Icon.jsx";
const fieldStyle=(focus)=>({width:"100%",boxSizing:"border-box",fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontWeight:"var(--fw-regular)",color:"var(--text-strong)",background:"var(--surface-field)",border:"1px solid "+(focus?"var(--oxford-blue)":"var(--border-field)"),borderRadius:"var(--radius-field)",padding:"11px 13px",outline:"none",boxShadow:focus?"var(--focus-ring)":"none",transition:"var(--transition-ui)"});
export function Select({options=[],value,onChange,placeholder="Select an option",disabled,style,...rest}){
  const [fo,setFo]=React.useState(false);
  return <span style={{position:"relative",display:"block",...style}}>
    <select value={value} onChange={onChange} disabled={disabled} onFocus={()=>setFo(true)} onBlur={()=>setFo(false)}
      style={{...fieldStyle(fo),appearance:"none",paddingRight:34,color:value?"var(--text-strong)":"var(--text-faint)",opacity:disabled?.4:1}} {...rest}>
      <option value="">{placeholder}</option>
      {options.map(o=><option key={o} value={o}>{o}</option>)}
    </select>
    <span style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",color:"var(--text-muted)"}}><Icon name="chevron-down" size={14} /></span>
  </span>;
}
