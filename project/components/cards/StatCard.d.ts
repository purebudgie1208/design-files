import * as React from "react";
/**
 * @startingPoint section="Cards" subtitle="Gold italic label over a big rounded number" viewport="700x280"
 */
export interface StatCardProps{
  /** Gold italic label, e.g. "Students". */
  label?:React.ReactNode;
  /** Rounded figure with a + suffix, e.g. "25,000+". */
  value?:React.ReactNode;
  description?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function StatCard(props:StatCardProps):JSX.Element;
