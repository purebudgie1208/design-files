import React from "react";
import {IconButton} from "../core/IconButton.jsx";
export function Carousel({count=2,index=0,onChange,orientation="horizontal",style,...rest}){
  const vert=orientation==="vertical";
  const go=d=>onChange&&onChange((index+d+count)%count);
  return <div style={{display:"flex",flexDirection:vert?"column":"row",gap:8,...style}} {...rest}>
    <IconButton icon={vert?"chevron-up":"chevron-left"} label="Previous" onClick={()=>go(-1)} />
    <IconButton icon={vert?"chevron-down":"chevron-right"} label="Next" active onClick={()=>go(1)} />
  </div>;
}
