import React from "react";
import {Icon} from "./Icon.jsx";
const SZ={sm:{p:"6px 6px 6px 14px",fs:12,badge:18,ic:11},md:{p:"7px 7px 7px 16px",fs:13,badge:21,ic:12},lg:{p:"9px 9px 9px 20px",fs:14,badge:26,ic:14}};
export function Button({children,variant="primary",size="md",icon="arrow-up-right",showIcon=true,disabled=false,onClick,href,style,...rest}){
  const [h,setH]=React.useState(false),[a,setA]=React.useState(false);
  const s=SZ[size]||SZ.md;
  const primary=variant==="primary",inverse=variant==="inverse";
  const bg=primary?(a?"var(--action-primary-bg-active)":h?"var(--action-primary-bg-hover)":"var(--action-primary-bg)"):inverse?(h?"#222":"var(--surface-inverse-card)"):(h?"var(--surface-sunken)":"var(--action-ghost-bg)");
  const fg=primary||inverse?"var(--action-primary-fg)":"var(--action-ghost-fg)";
  const base={display:"inline-flex",alignItems:"center",gap:10,padding:showIcon?s.p:`${s.p.split(" ")[0]} ${s.p.split(" ")[3]}`,
    background:bg,color:fg,border:variant==="ghost"?"1px solid "+(h?"var(--border-strong)":"var(--action-ghost-border)"):"1px solid transparent",
    borderRadius:"var(--radius-pill)",fontFamily:"var(--font-core)",fontSize:s.fs,fontWeight:"var(--fw-medium)",letterSpacing:"-.01em",lineHeight:1,
    cursor:disabled?"not-allowed":"pointer",opacity:disabled?.4:1,textDecoration:"none",whiteSpace:"nowrap",
    transform:a&&!disabled?"scale(var(--press-scale))":"none",transition:"var(--transition-ui)",...style};
  const badge={width:s.badge,height:s.badge,borderRadius:"var(--radius-pill)",background:primary||inverse?"var(--white)":"var(--surface-sunken)",
    color:primary||inverse?"var(--oxford-blue)":"var(--ink-000)",display:"grid",placeItems:"center",flex:"none",
    transform:h&&!disabled?"translateX(2px)":"none",transition:"transform var(--dur-base) var(--ease-standard)"};
  const Tag=href?"a":"button";
  return <Tag href={href} onClick={disabled?undefined:onClick} disabled={Tag==="button"?disabled:undefined} style={base}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setA(false);}} onMouseDown={()=>setA(true)} onMouseUp={()=>setA(false)} {...rest}>
    <span>{children}</span>
    {showIcon&&<span style={badge}><Icon name={icon} size={s.ic} strokeWidth={2} /></span>}
  </Tag>;
}
