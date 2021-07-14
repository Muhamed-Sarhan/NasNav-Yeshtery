import React from 'react'
import './firstProductCartStyle.scss'
import adiddas from '../../images/addid.svg'

const FirstProductCart = ({product}) => {
    return (
        <div className='f-cart'>
            <div className='f-cart-img'>
            <img src={product.productImg}/>
             <div className='reverse-cart-img'>
             <img src={product.imgIcon}/>
             </div>
            </div>
            <div className='cart-content'>
             <div className='cart-header'>{product.title}</div>
             <div className='cart-sale-brand'>
              <div className='cart-cost'>
                <div className='current-cost'>{product.currentPrice} {product.currency}</div>
                <div className='old-and-sale'>
                 <div className='old-cost'>{product.oldPrice} {product.currency}</div>
                 <strong className='sale'>
                 {Math.floor(
                    100 - (product.currentPrice / product.oldPrice) * 100
                  )}{" "}
                  % off
                 </strong>
                </div>
              </div>
              <div className='cart-brand'><img src={product.brandImg}/></div>
             </div>
             <div className='cart-rate'>
              <div className='cart-rate-stars'>*</div>
              <div className='cart-rate-numbers'>{product.rate} of 5</div>
             </div>
             <div className='cart-pick-from'><p className='pick-from'>Pickup From :</p><strong className='cart-picked-place'>Genena Mall</strong></div>
            </div>

        </div>
    )
}

export default FirstProductCart
