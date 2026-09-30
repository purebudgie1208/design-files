import React from "react";
export function Eyebrow({children,tone="muted",style,...rest}){
  const color=tone==="gold"?"var(--text-accent)":tone==="inverse"?"var(--text-on-dark-muted)":"var(--text-muted)";
  return <div style={{fontFamily:"var(--font-core)",fontStyle:"italic",fontSize:"var(--fs-eyebrow)",lineHeight:"var(--lh-eyebrow)",fontWeight:"var(--fw-regular)",color,...style}} {...rest}>{children}</div>;
}
