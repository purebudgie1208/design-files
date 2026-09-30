import * as React from "react";
export interface PhoneInputProps{dialCode?:string;dialCodes?:string[];value?:string;placeholder?:string;disabled?:boolean;onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;onDialCodeChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void;style?:React.CSSProperties}
export declare function PhoneInput(props:PhoneInputProps):JSX.Element;
