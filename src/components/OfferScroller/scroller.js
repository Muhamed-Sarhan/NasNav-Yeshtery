import React, { createRef } from 'react'
import './scrollerStyle.scss'
import Prev from '../../Icons/Prev'
import OffersCart from '../OffersCart/offersCart';


const ref = createRef(null);

const Scroller = ({offers}) => {


    const scroll = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
      };



    return (
        <div className='o-products-container'>
        
        <button onClick={() => scroll(-600)} className='o-prev'>
            <Prev/>
          </button>
          <div className='o-products-scroll' ref={ref}>
            {offers.map((product)=>(
              <div className='o-product-cart'>
              <OffersCart product={product} key={product.id}/>
              </div>
            ))}
            </div>
            <button onClick={() => scroll(600)} className='o-next'>
            <Prev/>
          </button>
            
        </div>
    )
}

export default Scroller
