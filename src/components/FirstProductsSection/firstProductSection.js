import React from "react";
import Scroller from "../FirstScroller/scroller";
import DropDown from "../../Icons/DropDown";
import { Link } from "react-router-dom";
import "./firstProductSectionStyle.scss";

const FirstProductSection = ({ filteredData, gender, filterFirstSection }) => {
  return (
    <div className="f-section">
      <div className="f-header">
        <div className="f-title">
          <h3>Best Sellers</h3>
          <h5>Check out our best sellers.</h5>
        </div>
        <div className="f-btn-select">
          <div>
            <div className="f-select">
              <select value={gender} onChange={filterFirstSection}>
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
              <div className="f-drop-down">
                <DropDown />
              </div>
            </div>
          </div>

          <div>
            <Link className="f-view-all-btn">
              <strong>View All</strong>
            </Link>
          </div>
        </div>
      </div>
      <Scroller filteredData={filteredData} />

      <div>
        <Link className="f-view-all-btn-mobile">
          <strong>View All</strong>
        </Link>
      </div>
    </div>
  );
};

export default FirstProductSection;
