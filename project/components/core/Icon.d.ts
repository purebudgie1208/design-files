import * as React from "react";
export interface IconProps extends React.SVGAttributes<SVGElement>{
  /** Lucide icon name in kebab-case, e.g. "arrow-up-right". */
  name?:string;
  size?:number;
  strokeWidth?:number;
  color?:string;
  style?:React.CSSProperties;
}
/** Monoline outline icon from the Lucide CDN set (substituted for the source's unnamed 1.5px outline set). */
export declare function Icon(props:IconProps):JSX.Element;
