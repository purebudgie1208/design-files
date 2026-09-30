import * as React from "react";
export interface CarouselProps{count?:number;index?:number;onChange?:(next:number)=>void;orientation?:"horizontal"|"vertical";style?:React.CSSProperties}
/** The paired prev/next chips that step hero slides, stat cards and facility slides. */
export declare function Carousel(props:CarouselProps):JSX.Element;
