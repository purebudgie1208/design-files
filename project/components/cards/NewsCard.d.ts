import * as React from "react";
/**
 * @startingPoint section="Cards" subtitle="Article card with meta row and Read more chip" viewport="700x400"
 */
export interface NewsCardProps{
  image?:string;
  /** Formatted "10 Jun 2025". */
  date?:React.ReactNode;
  author?:React.ReactNode;
  title?:React.ReactNode;
  /** Formatted "9 min Read". */
  readTime?:React.ReactNode;
  onRead?:()=>void;
  style?:React.CSSProperties;
}
export declare function NewsCard(props:NewsCardProps):JSX.Element;
