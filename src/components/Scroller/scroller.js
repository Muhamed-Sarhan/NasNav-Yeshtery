import React from 'react'
import FirstProductCart from '../FirstProductCart/firstProductCart'
import './scrollerStyle.scss'
import Prev from '../../Icons/Prev'

const Scroller = ({myRef , filteredData}) => {

    const scroll = (scrollOffset) => {
        myRef.current.scrollLeft += scrollOffset;
      };



    return (
        <div className='products-container'>
        
        <button onClick={() => scroll(-298)} className='prev'>
            <Prev/>
          </button>
          <div className='products-scroll' ref={myRef}>
            {filteredData.map((product)=>(
              <div className='product-cart'>
              <FirstProductCart product={product} key={product.id}/>
              </div>
            ))}
            </div>
            <button onClick={() => scroll(298)} className='next'>
            <Prev/>
          </button>
            
        </div>
    )
}

export default Scroller
