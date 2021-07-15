import React from 'react'
import './offers.scss'
import Scroller from '../OfferScroller/scroller'
import ViewAllBtn from '../ViewAllBtn/viewAllBtn'

const Offers = ({offers}) => {
    return (
        <div className='o-section'>
        <div className="o-header">
        <div className="o-title">
          <h3>Best Offers</h3>
          <h5>Check out the latest discounts.</h5>
        </div>
        <div className="o-btn-select">
          
            <ViewAllBtn />
          
        </div>
      </div>
            <Scroller offers={offers}/>
        </div>
    )
}

export default Offers
