import React from "react";
import {Wordmark} from "../core/Wordmark.jsx";
import {NavItem} from "./NavItem.jsx";
import {SearchField} from "../forms/SearchField.jsx";
import {Button} from "../core/Button.jsx";
const GROUP_A=["About","Research","Admissions","News"],GROUP_B=["Community","Colleges","Department"];
export function NavBar({primary=GROUP_A,secondary=GROUP_B,active,onNavigate,onLogin,style,...rest}){
  return <header style={{display:"flex",alignItems:"center",gap:0,padding:"0 22px",height:56,background:"var(--surface-page)",
    borderBottom:"1px solid var(--border-hairline)",position:"relative",zIndex:5,...style}} {...rest}>
    <div style={{display:"flex",alignItems:"center",gap:8,paddingRight:26,borderRight:"1px solid var(--border-hairline)",height:"100%"}}>
      <span style={{fontFamily:"var(--font-core)",fontSize:7.5,letterSpacing:".14em",color:"var(--oxford-blue)",textTransform:"uppercase",lineHeight:1.1,textAlign:"right"}}>University<br/>of</span>
      <Wordmark text="OXFORD" size={15} weight={600} style={{letterSpacing:"-.01em",color:"var(--oxford-blue)"}} />
    </div>
    <nav style={{display:"flex",alignItems:"center",gap:26,padding:"0 26px",height:"100%",borderRight:"1px solid var(--border-hairline)"}}>
      {primary.map(i=><NavItem key={i} active={active===i} onClick={()=>onNavigate&&onNavigate(i)}>{i}</NavItem>)}
    </nav>
    <nav style={{display:"flex",alignItems:"center",gap:26,padding:"0 26px",height:"100%",marginLeft:"auto",borderLeft:"1px solid var(--border-hairline)"}}>
      {secondary.map(i=><NavItem key={i} active={active===i} onClick={()=>onNavigate&&onNavigate(i)}>{i}</NavItem>)}
    </nav>
    <div style={{display:"flex",alignItems:"center",gap:16,paddingLeft:16}}>
      <SearchField />
      <Button showIcon={false} size="md" onClick={onLogin} style={{padding:"9px 24px"}}>Login</Button>
    </div>
  </header>;
}
