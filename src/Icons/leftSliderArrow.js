import React from "react";
import left from "../images/leftSliderArrow.svg";

const LeftSliderArrow = () => {
  return (
    <div>
      <img src={left} style={{ zIndex: "1000000000" }} />
    </div>
  );
};

export default LeftSliderArrow;
