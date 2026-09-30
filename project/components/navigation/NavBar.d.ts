import * as React from "react";
/**
 * @startingPoint section="Navigation" subtitle="Oxford top bar with crest lockup, split nav and Login" viewport="1280x120"
 */
export interface NavBarProps{
  primary?:string[];
  secondary?:string[];
  active?:string;
  onNavigate?:(item:string)=>void;
  onLogin?:()=>void;
  style?:React.CSSProperties;
}
export declare function NavBar(props:NavBarProps):JSX.Element;
