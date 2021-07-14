import React from "react";
import Scroller from "../Scroller/scroller";
import ViewAllBtn from "../ViewAllBtn/viewAllBtn";
import SelectComp from "../SelectComp/selectComp";
import "./firstProductSectionStyle.scss";

const FirstProductSection = ({ myRef, filteredData }) => {
  return (
    <div className="f-section">
      <div className="header">
        <div className="title">
          <h3>Best Sellers</h3>
          <h5>Check out our best sellers</h5>
        </div>
        <div className="btn-select">
          <div>
            <SelectComp />
          </div>
          <div>
            <ViewAllBtn />
          </div>
        </div>
      </div>
      <Scroller myRef={myRef} filteredData={filteredData} />
    </div>
  );
};

export default FirstProductSection;
