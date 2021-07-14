import React from 'react'
import FirstProductCart from '../FirstProductCart/firstProductCart'
import './scrollerStyle.scss'
import Prev from '../../Icons/Prev'

const Scroller = ({myRef}) => {

    const scroll = (scrollOffset) => {
        myRef.current.scrollLeft += scrollOffset;
      };



    return (
        <div className='products-container'>
        <div className='products-scroll' ref={myRef}>
        <button onClick={() => scroll(-298)} className='prev'>
            <Prev/>
          </button>
            <div className='product-cart'>
            <FirstProductCart/>
            </div>
            <div className='product-cart'>
            <FirstProductCart/>
            </div>
            <div className='product-cart'>
            <FirstProductCart/>
            </div>
            <div className='product-cart'>
            <FirstProductCart/>
            </div>
            <div className='product-cart'>
            <FirstProductCart/>
            </div>
            <div className='product-cart'>
            <FirstProductCart/>
            </div>
            <button onClick={() => scroll(298)} className='next'>
            <Prev/>
          </button>
            </div>
        </div>
    )
}

export default Scroller
