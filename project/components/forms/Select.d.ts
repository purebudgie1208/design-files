import * as React from "react";
export interface SelectProps{options?:string[];value?:string;placeholder?:string;disabled?:boolean;onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void;style?:React.CSSProperties}
export declare function Select(props:SelectProps):JSX.Element;
