import * as React from "react";
export interface NavItemProps{children?:React.ReactNode;hasMenu?:boolean;active?:boolean;onClick?:()=>void;style?:React.CSSProperties}
export declare function NavItem(props:NavItemProps):JSX.Element;
