import React, { createRef } from 'react'
import ThirdProductCart from '../ThirdProductCart/thirdProductCart'
import './scrollerStyle.scss'
import Prev from '../../Icons/Prev'

const ref = createRef(null);

const Scroller = ({filteredData}) => {


    const scroll = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
      };



    return (
        <div className='products-container'>
        
        <button onClick={() => scroll(-300)} className='prev'>
            <Prev/>
          </button>
          <div className='products-scroll' ref={ref}>
            {filteredData.map((product)=>(
              <div className='product-cart'>
              <ThirdProductCart product={product} key={product.id}/>
              </div>
            ))}
            </div>
            <button onClick={() => scroll(300)} className='next'>
            <Prev/>
          </button>
            
        </div>
    )
}

export default Scroller
