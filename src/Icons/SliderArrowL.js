import React from "react";
import slideleft from "../images/sliderarrow2.svg";

const SlideLeft = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35.785" height="47" viewBox="0 0 35.785 47"><defs><style></style><filter id="a" x="0" y="0" width="35.785" height="47" filterUnits="userSpaceOnUse"><feOffset input="SourceAlpha"/><feGaussianBlur stdDeviation="2.5" result="b"/><feFlood flood-opacity="0.251"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g style={{filter:"url(#a)"}} transform="matrix(1, 0, 0, 1, 0, 0)"><path style={{fill:"#fff"}} d="M2281.318,914.013a1.047,1.047,0,0,0,.655-1.864l-17.67-14.136,17.67-14.136a1.047,1.047,0,0,0-1.308-1.635L2261.974,897.2a1.047,1.047,0,0,0,0,1.635l18.691,14.953A1.04,1.04,0,0,0,2281.318,914.013Z" transform="translate(-2254.08 -874.51)"/></g></svg>
  );
};

export default SlideLeft;