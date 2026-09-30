import React from "react";
import {Icon} from "../core/Icon.jsx";
const fieldStyle=(focus)=>({width:"100%",boxSizing:"border-box",fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontWeight:"var(--fw-regular)",color:"var(--text-strong)",background:"var(--surface-field)",border:"1px solid "+(focus?"var(--oxford-blue)":"var(--border-field)"),borderRadius:"var(--radius-field)",padding:"11px 13px",outline:"none",boxShadow:focus?"var(--focus-ring)":"none",transition:"var(--transition-ui)"});
export function PhoneInput({dialCode="+62",dialCodes=["+62","+44","+1","+91"],value,onChange,onDialCodeChange,placeholder="",disabled,style,...rest}){
  const [fo,setFo]=React.useState(false);
  const [code,setCode]=React.useState(dialCode);
  React.useEffect(()=>setCode(dialCode),[dialCode]);
  const changeCode=e=>{setCode(e.target.value);if(onDialCodeChange)onDialCodeChange(e);};
  return <div style={{...fieldStyle(fo),display:"flex",alignItems:"center",gap:8,padding:"0 13px",opacity:disabled?.4:1,...style}}>
    <span style={{display:"inline-flex",alignItems:"center",gap:4,position:"relative"}}>
      <select value={code} onChange={changeCode} disabled={disabled}
        style={{appearance:"none",border:"none",background:"transparent",font:"inherit",fontSize:"var(--fs-body)",color:"var(--text-strong)",paddingRight:14,outline:"none",cursor:"pointer"}}>
        {dialCodes.map(c=><option key={c} value={c}>{c}</option>)}
      </select>
      <span style={{position:"absolute",right:0,pointerEvents:"none",color:"var(--text-muted)"}}><Icon name="chevron-down" size={12} /></span>
    </span>
    <span style={{width:1,height:18,background:"var(--border-field)",flex:"none"}} />
    <input value={value} onChange={onChange||(()=>{})} placeholder={placeholder} disabled={disabled} onFocus={()=>setFo(true)} onBlur={()=>setFo(false)}
      style={{flex:1,border:"none",outline:"none",background:"transparent",font:"inherit",fontSize:"var(--fs-body)",color:"var(--text-strong)",padding:"11px 0"}} {...rest} />
  </div>;
}
