import React from "react";
export function FormField({label,children,span=1,style,...rest}){
  return <label style={{display:"flex",flexDirection:"column",gap:8,gridColumn:span===2?"span 2":"auto",...style}} {...rest}>
    <span style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-label)",fontWeight:"var(--fw-medium)",letterSpacing:"-.01em",color:"var(--text-strong)"}}>{label}</span>
    {children}
  </label>;
}
