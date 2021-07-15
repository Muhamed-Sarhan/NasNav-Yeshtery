import React from 'react'
import './secondProductCartStyle.scss'

const SecondProductCart = ({product}) => {
    return (
        <div className='s-cart'>
            <div className='s-cart-img'>
            <img src={product.imgCate}/>
            </div>
            <div className='s-cart-caption'>
             <p>{product.gender}</p>
             <button className='s-cart-btn'>Explore</button>
            </div>
        </div>
    )
}

export default SecondProductCart
