import * as React from "react";
export interface ChipProps{children?:React.ReactNode;icon?:string;tone?:"light"|"inverse"|"glass";onClick?:()=>void;style?:React.CSSProperties}
/** Low-emphasis pill: the "Read more ↗" affordance on news cards and glass captions over photography. */
export declare function Chip(props:ChipProps):JSX.Element;
