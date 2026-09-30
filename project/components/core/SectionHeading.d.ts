import * as React from "react";
export interface SectionHeadingProps{
  children?:React.ReactNode;
  /** Clause rendered in gold, appended after children. */
  accent?:React.ReactNode;
  /** Clause rendered in grey — the two-tone statement pattern. */
  trail?:React.ReactNode;
  size?:"display"|"h1"|"h2"|"h3";
  align?:"left"|"center";
  tone?:"light"|"inverse";
  as?:"h1"|"h2"|"h3"|"p";
  style?:React.CSSProperties;
}
export declare function SectionHeading(props:SectionHeadingProps):JSX.Element;
