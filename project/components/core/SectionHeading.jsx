import React from "react";
export function SectionHeading({children,accent,trail,size="h2",align="left",tone="light",as="h2",style,...rest}){
  const S={display:{fs:"var(--fs-display-l)",lh:"var(--lh-display-l)",tr:"var(--tr-display-l)"},h1:{fs:"var(--fs-h1)",lh:"var(--lh-h1)",tr:"var(--tr-h1)"},h2:{fs:"var(--fs-h2)",lh:"var(--lh-h2)",tr:"var(--tr-h2)"},h3:{fs:"var(--fs-h3)",lh:"var(--lh-h3)",tr:"var(--tr-h3)"}}[size]||{};
  const Tag=as;
  return <Tag style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-medium)",fontSize:S.fs,lineHeight:S.lh,letterSpacing:S.tr,
    color:tone==="inverse"?"var(--text-on-dark)":"var(--text-strong)",textAlign:align,textWrap:"pretty",...style}} {...rest}>
    {children}
    {accent&&<> <span style={{color:"var(--text-accent)"}}>{accent}</span></>}
    {trail&&<> <span style={{color:tone==="inverse"?"var(--text-on-dark-muted)":"var(--text-muted)"}}>{trail}</span></>}
  </Tag>;
}
