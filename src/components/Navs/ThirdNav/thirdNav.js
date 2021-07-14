import React from 'react';
import { Link } from 'react-router-dom';
import './thirdNavStyle.scss';

const ThirdNav = () => {
  return (
    <div className='main-gender'>
      <div className='gender-container'>
        <Link className='categoryMan'>Men</Link>
        <Link>Women</Link>
        <Link>Unisex</Link>
        <Link>Kids</Link>
        <Link>Best Seller</Link>
        <Link>New Arrival</Link>
        <Link className='categoryBarItemOffers'>Offers</Link>
      </div>
    </div>
  );
};

export default ThirdNav;
