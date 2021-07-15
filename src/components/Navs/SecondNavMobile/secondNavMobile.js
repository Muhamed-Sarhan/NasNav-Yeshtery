import React from "react";
import "./secondNavMobile.scss";
import MenuMobile from "../../../Icons/MenuMobile";
import AddidasMobile from "../../../Icons/AddidasMobile";
import Search from "../../../Icons/Search";
import CartMobile from "../../../Icons/CartMobile";
import Wishlist from "../../../Icons/Wishlist";

const SecondNavMobile = () => {
  return (
    <div className="menu-mobile">
      <div className='menu-mobile-container'>
      <div className="menu-brand">
        <div>
          <MenuMobile />
        </div>
        <div>
          <AddidasMobile />
        </div>
      </div>
      <div className="menu-mobile-options">
        <div>
          <Search />
        </div>
        <div>
          <CartMobile />
        </div>
        <div>
          <Wishlist />
        </div>
      </div>
      </div>
    </div>
  );
};

export default SecondNavMobile;
