import * as React from "react";
export interface FooterColumn{title:string;links:string[]}
/**
 * @startingPoint section="Navigation" subtitle="Black footer with giant silver-gradient wordmark" viewport="1280x420"
 */
export interface FooterProps{columns?:FooterColumn[];wordmark?:string;style?:React.CSSProperties}
export declare function Footer(props:FooterProps):JSX.Element;
