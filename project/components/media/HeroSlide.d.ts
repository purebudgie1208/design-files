import * as React from "react";
/**
 * @startingPoint section="Media" subtitle="Full-bleed photo hero with oversized translucent wordmark" viewport="1280x520"
 */
export interface HeroSlideProps{
  image?:string;
  /** Oversized translucent watermark across the top of the photograph. */
  watermark?:string;
  year?:React.ReactNode;
  /** Bold lead-in of the bottom caption. */
  headline?:React.ReactNode;
  body?:React.ReactNode;
  height?:number;
  /** Carousel controls, bottom-right. */
  children?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function HeroSlide(props:HeroSlideProps):JSX.Element;
