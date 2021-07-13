import React from 'react';
import { Link } from 'react-router-dom';
import './firstNavStyle.scss';
import Yeshtery from '../../../Icons/Yeshtery';
import Menu from '../../../Icons/Menu';
import LeftArrow from '../../../Icons/ArrowLeft';
import RightArrow from '../../../Icons/ArrowRight';
import Phone from '../../../Icons/Phone';
import Track from '../../../Icons/Track';
import Location from '../../../Icons/Location';

const FirstNav = () => {
  return (
    <div className='mainSection'>
      <div className='mainSectionContainer'>
        <div className='yeshteryMenu'>
          <div className='menuIcon'>
            <Menu />
          </div>
          <div className='yeshteryIcon'>
            <Yeshtery />
          </div>
        </div>

        <div className='shoppingCaption'>
          <div className='leftI'>
            <LeftArrow />
          </div>
          <p>Valentine’s Day Offers! Buy Two Get One Free <Link>Shop Now</Link></p>
          <div className='rightI'>
            <RightArrow />
          </div>
        </div>

        <div className='mainOptions'>
          <div>
            <Phone />
            <p>Contact Us</p>
          </div>

          <div>
            <Track />
            <p>Track Order</p>
          </div>

          <div>
            <Location />
            <p className='lastDiv'>Find a Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
