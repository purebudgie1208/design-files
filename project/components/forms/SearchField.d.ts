import * as React from "react";
export interface SearchFieldProps{placeholder?:string;value?:string;onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;onSubmit?:()=>void;style?:React.CSSProperties}
/** Borderless italic search input with a small navy square search button — top bar only. */
export declare function SearchField(props:SearchFieldProps):JSX.Element;
