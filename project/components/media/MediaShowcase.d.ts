import * as React from "react";
export interface MediaShowcaseProps{
  image?:string;
  eyebrow?:React.ReactNode;
  headline?:React.ReactNode;
  /** Letterspaced uppercase label, top-right. */
  cornerLabel?:React.ReactNode;
  counter?:string;
  total?:string;
  /** Oversized name of the facility, cropped at the bottom edge. */
  watermark?:string;
  /** Frosted-glass caption card over the photograph. */
  captionTitle?:React.ReactNode;
  captionBody?:React.ReactNode;
  height?:number;
  style?:React.CSSProperties;
}
export declare function MediaShowcase(props:MediaShowcaseProps):JSX.Element;
