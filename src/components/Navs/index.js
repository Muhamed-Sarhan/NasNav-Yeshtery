import React from "react";
import './navsStyle.scss'
import FirstNav from './FirstNav/firstNav'
import SecondNav from "./SecondNav/secondNav";
import ThirdNav from "./ThirdNav/thirdNav";


const Navs = () => {
  return (
    <div className="wrapper">
      <FirstNav/>
      <SecondNav/>
      <ThirdNav/>
    </div>
  );
};

export default Navs;