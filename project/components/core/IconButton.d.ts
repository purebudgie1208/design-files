import * as React from "react";
export interface IconButtonProps{
  icon?:string;
  /** Active state fills Oxford Blue — used for the "next" chip in carousels. */
  active?:boolean;
  shape?:"pill"|"square";
  size?:number;
  disabled?:boolean;
  label?:string;
  onClick?:()=>void;
  style?:React.CSSProperties;
}
export declare function IconButton(props:IconButtonProps):JSX.Element;
