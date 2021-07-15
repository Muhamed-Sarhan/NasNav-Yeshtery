import React from "react";
import Scroller from "../ThirdScroller/scroller";
import ViewAllBtn from "../ViewAllBtn/viewAllBtn";
import DropDown from "../../Icons/DropDown";
import "./thirdProductSectionStyle.scss";

const ThirdProductSection = ({ filteredData , gender , filterThirdSection }) => {
  return (
    <div className="t-section">
      <div className="t-header">
        <div className="t-title">
          <h3>On Sale</h3>
          <h5>Hurry up! catch these products before the sale ends.</h5>
        </div>
        <div className="t-btn-select">
          <div>
          <div className="select">
          <select value={gender} onChange={filterThirdSection}>
            <option value='all'>All</option>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
          </select>
          <div className="drop-down">
            <DropDown />
          </div>
        </div>
          </div>
          <div>
            <ViewAllBtn />
          </div>
        </div>
      </div>
      <Scroller filteredData={filteredData} />
    </div>
  );
};

export default ThirdProductSection;
