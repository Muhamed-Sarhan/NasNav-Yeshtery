import React from 'react';
import './genderNavStyle.scss';

const GenderNav = () => {
  return (
    <div className='main-gender'>
      <div className='gender-container'>
        <p>Men</p>
        <p>Women</p>
        <p>Unisex</p>
        <p>Kids</p>
        <p>Best Seller</p>
        <p>New Arrival</p>
        <p className='categoryBarItemOffers'>Offers</p>
      </div>
    </div>
  );
};

export default GenderNav;
