import React from "react";
import "./navsStyle.scss";
import FirstNav from "./FirstNav/firstNav";
import SecondNav from "./SecondNav/secondNav";
import ThirdNav from "./ThirdNav/thirdNav";
import SecondNavMobile from "./SecondNavMobile/secondNavMobile";

const Navs = () => {
  return (
    <div className="wrapper">
      <div className="f-nav-web">
        <FirstNav />
      </div>
      <div className="s-nav-mobile">
        <SecondNavMobile />
      </div>
      <div className="s-nav-web">
        <SecondNav />
      </div>
      <div className="t-nav-web">
        <ThirdNav />
      </div>
    </div>
  );
};

export default Navs;
