import React from "react";
import {Icon} from "../core/Icon.jsx";
export function SearchField({placeholder="Search ...",value,onChange,onSubmit,style,...rest}){
  const [fo,setFo]=React.useState(false);
  return <div style={{display:"inline-flex",alignItems:"center",gap:8,...style}}>
    <input value={value} onChange={onChange} placeholder={placeholder} onFocus={()=>setFo(true)} onBlur={()=>setFo(false)}
      style={{border:"none",borderBottom:"1px solid "+(fo?"var(--border-strong)":"transparent"),outline:"none",background:"transparent",
        fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontStyle:"italic",color:"var(--text-strong)",width:74,padding:"4px 0",transition:"var(--transition-ui)"}} {...rest} />
    <button onClick={onSubmit} aria-label="Search" style={{width:26,height:26,borderRadius:"var(--radius-sm)",background:"var(--action-primary-bg)",color:"var(--white)",border:"none",display:"grid",placeItems:"center",cursor:"pointer",padding:0}}>
      <Icon name="search" size={13} strokeWidth={2} />
    </button>
  </div>;
}
