import React from 'react'
import './offersCartStyle.scss'
import Waddidas from '../../Icons/Waddidas'

const OffersCart = ({product}) => {
    return (
        <div className='o-cart'>
            <div className='o-cart-img'>
            </div>
            <div className='o-cart-caption'>
              <div className='o-main-caption'>{product.title}</div>
              <div className='o-sec-caption'>{product.caption}</div>
              <div className='o-brand-img'><Waddidas/></div>
            </div>
        </div>
    )
}

export default OffersCart
