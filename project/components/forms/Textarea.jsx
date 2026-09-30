import React from "react";
const fieldStyle=(focus)=>({width:"100%",boxSizing:"border-box",fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontWeight:"var(--fw-regular)",color:"var(--text-strong)",background:"var(--surface-field)",border:"1px solid "+(focus?"var(--oxford-blue)":"var(--border-field)"),borderRadius:"var(--radius-field)",padding:"11px 13px",outline:"none",boxShadow:focus?"var(--focus-ring)":"none",transition:"var(--transition-ui)"});
export function Textarea({placeholder,value,onChange,rows=6,disabled,style,...rest}){
  const [fo,setFo]=React.useState(false);
  return <textarea rows={rows} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}
    onFocus={()=>setFo(true)} onBlur={()=>setFo(false)}
    style={{...fieldStyle(fo),resize:"vertical",lineHeight:"var(--lh-body)",opacity:disabled?.4:1,...style}} {...rest} />;
}
