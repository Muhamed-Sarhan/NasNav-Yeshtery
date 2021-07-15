import React, { createRef } from 'react'
import './scrollerStyle.scss'
import Prev from '../../Icons/Prev'
import SecondProductCart from '../SecondProductCart/secondProductCart';

const ref = createRef(null);

const Scroller = ({category}) => {


    const scroll = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
      };



    return (
        <div className='s-products-container'>
        
        <button onClick={() => scroll(-400)} className='s-prev'>
            <Prev/>
          </button>
          <div className='s-products-scroll' ref={ref}>
            {category.map((product)=>(
              <div className='s-product-cart'>
              <SecondProductCart product={product} key={product.id}/>
              </div>
            ))}
            </div>
            <button onClick={() => scroll(400)} className='s-next'>
            <Prev/>
          </button>
            
        </div>
    )
}

export default Scroller
