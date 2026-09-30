import React from "react";
import {Wordmark} from "../core/Wordmark.jsx";
const COLUMNS=[
 {title:"Explore Oxford",links:["Colleges","History & Tours","Public Engagement"]},
 {title:"Study With Us",links:["UG Courses","Grad Programs","Online Learning"]},
 {title:"Research",links:["Research Units","Funding","Impact Stories"]},
 {title:"Connect",links:["Contact","Press Office","Careers"]}];
export function Footer({columns=COLUMNS,wordmark="Oxford",style,...rest}){
  return <footer style={{background:"var(--surface-inverse)",borderRadius:"var(--radius-media)",overflow:"hidden",padding:"34px 34px 0",position:"relative",containerType:"inline-size",...style}} {...rest}>
    <div style={{display:"grid",gridTemplateColumns:"200px repeat(4,1fr)",gap:24,paddingBottom:34}}>
      <div style={{display:"flex",alignItems:"flex-start"}}>
        <Wordmark text="Oxford" size={30} tone="inverse" />
      </div>
      {columns.map(c=><div key={c.title}>
        <div style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",fontWeight:"var(--fw-medium)",color:"var(--text-on-dark)",marginBottom:12}}>{c.title}</div>
        <ul style={{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:8}}>
          {c.links.map(l=><li key={l}><a href="#" style={{fontFamily:"var(--font-core)",fontSize:"var(--fs-body)",color:"var(--text-on-dark-muted)",textDecoration:"none"}}>{l}</a></li>)}
        </ul>
      </div>)}
    </div>
    <div style={{borderTop:"1px solid var(--border-inverse)",overflow:"hidden",marginLeft:-34,marginRight:-34,paddingTop:14,height:"29cqw"}}>
      <Wordmark text={wordmark} tone="silver" style={{fontSize:"43cqw",lineHeight:.78,whiteSpace:"nowrap",display:"block",textAlign:"center"}} />
    </div>
  </footer>;
}
