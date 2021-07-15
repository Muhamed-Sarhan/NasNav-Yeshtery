import React from "react";
import "./offers.scss";
import Scroller from "../OfferScroller/scroller";
import { Link } from "react-router-dom";

const Offers = ({ offers }) => {
  return (
    <div className="o-section">
      <div className="o-header">
        <div className="o-title">
          <h3>Best Offers</h3>
          <h5>Check out the latest discounts.</h5>
        </div>

        <div>
          <Link className="t-view-all-btn">
            <strong>View All</strong>
          </Link>
        </div>
      </div>

      <Scroller offers={offers} />
      <div>
        <Link className="t-view-all-btn-mobile">
          <strong>View All</strong>
        </Link>
      </div>
    </div>
  );
};

export default Offers;
