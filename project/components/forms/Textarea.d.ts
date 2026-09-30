import * as React from "react";
export interface TextareaProps{placeholder?:string;value?:string;rows?:number;disabled?:boolean;onChange?:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;style?:React.CSSProperties}
export declare function Textarea(props:TextareaProps):JSX.Element;
