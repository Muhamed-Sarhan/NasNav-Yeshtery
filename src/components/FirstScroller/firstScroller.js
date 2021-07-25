import React, { createRef } from "react";
import FirstProductCart from "../FirstProductCart/firstProductCart";
import "./firstScrollerStyle.scss";
import Prev from "../../Icons/Prev";

const ref = createRef(null);

const FirstScroller = ({ filteredData }) => {
  const firstScroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="products-container">
      <button onClick={() => firstScroll(-300)} className="prev">
        <Prev />
      </button>
      <div className="products-scroll" ref={ref}>
        {filteredData.map((product) => (
          <div className="product-cart">
            <FirstProductCart product={product} key={product.id} />
          </div>
        ))}
      </div>
      <button onClick={() => firstScroll(300)} className="next">
        <Prev />
      </button>
    </div>
  );
};

export default FirstScroller;
