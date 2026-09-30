import * as React from "react";
export interface InputProps{placeholder?:string;value?:string;type?:string;disabled?:boolean;onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;style?:React.CSSProperties}
export declare function Input(props:InputProps):JSX.Element;
