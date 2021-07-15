import React from 'react'
import './thirdNavMobileStyle.scss'
import Category from "../../../Icons/Category";
import HomeIcon from "../../../Icons/HomeIcon";
import Brands from "../../../Icons/brands";
import Account from "../../../Icons/Account";
import { Link } from "react-router-dom";

const ThirdNavMobile = () => {
    return (

  <div className='main-menu-mobile'>
    <div className='main-mobile-container'>
        <Link className="mobile-menu-icon">
          <HomeIcon />
          <p>Home</p>
        </Link>

        <Link className="mobile-menu-icon">
          <Category />
          <p>Categories</p>
        </Link>

        <Link className="mobile-menu-icon">
          <Brands />
          <p>Brands</p>
        </Link>

        <Link className="mobile-menu-icon">
          <Account />
          <p>Account</p>
        </Link>
    </div>
  </div>



      
    )
}

export default ThirdNavMobile
