import React from "react";
const pascal=n=>n.split("-").map(s=>s[0].toUpperCase()+s.slice(1)).join("");
export function Icon({name="arrow-right",size=20,strokeWidth=1.5,color="currentColor",style,...rest}){
  const [,force]=React.useReducer(x=>x+1,0);
  React.useEffect(()=>{if(window.lucide)return;const t=setInterval(()=>{if(window.lucide){clearInterval(t);force();}},80);return()=>clearInterval(t);},[]);
  const lib=window.lucide&&(window.lucide.icons||window.lucide);
  let node=lib&&(lib[pascal(name)]||lib[name]);
  if(node&&node[0]==="svg")node=node[2];
  if(!Array.isArray(node))return <span style={{display:"inline-block",width:size,height:size,...style}} />;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={{display:"block",flex:"none",...style}} {...rest}>
    {node.map(([tag,attrs],i)=>React.createElement(tag,{key:i,...attrs}))}
  </svg>;
}
