import React from "react";
import "./selectCompStyle.scss";
import DropDown from "../../Icons/DropDown";

const SelectComp = () => {
  return (
    <div className="select">
      <select>
        <option>All</option>
        <option>Men</option>
        <option>Women</option>
      </select>
      <div className="drop-down">
        <DropDown />
      </div>
    </div>
  );
};

export default SelectComp;
