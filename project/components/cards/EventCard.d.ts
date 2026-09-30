import * as React from "react";
export interface EventCardProps{image?:string;title?:React.ReactNode;year?:React.ReactNode;/** Right-aligned faint venue name. */venue?:React.ReactNode;ratio?:string;style?:React.CSSProperties}
export declare function EventCard(props:EventCardProps):JSX.Element;
