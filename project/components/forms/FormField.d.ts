import * as React from "react";
export interface FormFieldProps{label?:React.ReactNode;children?:React.ReactNode;/** 2 = full width of the two-column form grid. */span?:1|2;style?:React.CSSProperties}
export declare function FormField(props:FormFieldProps):JSX.Element;
