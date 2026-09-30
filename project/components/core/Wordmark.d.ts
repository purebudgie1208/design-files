import * as React from "react";
export interface WordmarkProps{
  text?:string;
  size?:number;
  /** silver = the footer's top-to-bottom metallic gradient; translucent = hero watermark over photography. */
  tone?:"ink"|"inverse"|"translucent"|"silver";
  weight?:number;
  style?:React.CSSProperties;
}
export declare function Wordmark(props:WordmarkProps):JSX.Element;
