import React from "react";
export function GridLines({columns=6,tone="light",style,...rest}){
  const c=tone==="inverse"?"var(--border-inverse)":"var(--border-grid)";
  return <div aria-hidden="true" style={{position:"absolute",inset:0,display:"grid",gridTemplateColumns:`repeat(${columns},1fr)`,pointerEvents:"none",zIndex:0,...style}} {...rest}>
    {Array.from({length:columns}).map((_,i)=><div key={i} style={{borderRight:i<columns-1?`1px solid ${c}`:"none"}} />)}
  </div>;
}
