import * as React from "react";
export interface FeatureCardProps{
  /** Zero-padded ordinal, e.g. "01". */
  index?:string;
  icon?:string;
  title?:React.ReactNode;
  description?:React.ReactNode;
  /** Lifts the card above its row with the inverse shadow. */
  raised?:boolean;
  style?:React.CSSProperties;
}
export declare function FeatureCard(props:FeatureCardProps):JSX.Element;
