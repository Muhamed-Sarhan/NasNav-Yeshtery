import React, { createRef } from "react";
import ThirdProductCart from "../ThirdProductCart/thirdProductCart";
import "./thirdScrollerStyle.scss";
import Prev from "../../Icons/Prev";

const ref = createRef(null);

const ThirdScroller = ({ filteredSale }) => {
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="products-container">
      <button onClick={() => scroll(-300)} className="prev">
        <Prev />
      </button>
      <div className="products-scroll" ref={ref}>
        {filteredSale.map((product) => (
          <div className="product-cart">
            <ThirdProductCart product={product} key={product.id} />
          </div>
        ))}
      </div>
      <button onClick={() => scroll(300)} className="next">
        <Prev />
      </button>
    </div>
  );
};

export default ThirdScroller;
