import * as React from "react";
export interface ProgramRowProps{index?:string;title?:React.ReactNode;description?:React.ReactNode;onOpen?:()=>void;/** Draws the closing hairline on the final row. */last?:boolean;style?:React.CSSProperties}
export declare function ProgramRow(props:ProgramRowProps):JSX.Element;
