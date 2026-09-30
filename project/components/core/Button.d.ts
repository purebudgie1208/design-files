import * as React from "react";
/**
 * @startingPoint section="Core" subtitle="Navy pill CTA with arrow badge" viewport="700x160"
 */
export interface ButtonProps{
  children?:React.ReactNode;
  /** primary = Oxford Blue pill (default CTA); ghost = white chip with hairline; inverse = dark-surface pill. */
  variant?:"primary"|"ghost"|"inverse";
  size?:"sm"|"md"|"lg";
  /** Lucide name for the badge glyph. */
  icon?:string;
  showIcon?:boolean;
  disabled?:boolean;
  href?:string;
  onClick?:()=>void;
  style?:React.CSSProperties;
}
export declare function Button(props:ButtonProps):JSX.Element;
