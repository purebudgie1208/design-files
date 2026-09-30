import * as React from "react";
export interface GridLinesProps{columns?:number;tone?:"light"|"inverse";style?:React.CSSProperties}
/** The signature vertical hairline grid drawn behind page content. Parent must be position:relative. */
export declare function GridLines(props:GridLinesProps):JSX.Element;
