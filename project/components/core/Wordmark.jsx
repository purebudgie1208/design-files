import React from "react";
export function Wordmark({text="Oxford",size=28,tone="ink",weight=500,style,...rest}){
  const color=tone==="translucent"?"rgba(255,255,255,.55)":tone==="inverse"?"var(--white)":"var(--ink-000)";
  const grad=tone==="silver"?{background:"linear-gradient(180deg,#ffffff 0%,#cfcfcf 38%,#4a4a4a 100%)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"}:{color};
  return <span style={{fontFamily:"var(--font-display)",fontWeight:weight,fontSize:size,lineHeight:.9,letterSpacing:"var(--tr-display-xl)",display:"inline-block",...grad,...style}} {...rest}>{text}</span>;
}
