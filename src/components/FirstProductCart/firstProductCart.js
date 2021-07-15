import React from 'react'
import './firstProductCartStyle.scss'

const FirstProductCart = ({product}) => {
    return (
        <div className='f-cart'>
            <div className='f-cart-img'>
            <img src={product.productImg}/>
             <div className='f-reverse-cart-img'>
             <img src={product.imgIcon}/>
             </div>
            </div>
            <div className='f-cart-content'>
             <div className='f-cart-header'>{product.title}</div>
             <div className='f-cart-sale-brand'>
              <div className='f-cart-cost'>
                <div className='f-current-cost'>{product.currentPrice} {product.currency}</div>
                <div className='f-old-and-sale'>
                 <div className='f-old-cost'>{product.oldPrice} {product.currency}</div>
                 <strong className='f-sale'>
                 {Math.floor(
                    100 - (product.currentPrice / product.oldPrice) * 100
                  )}{" "}
                  % off
                 </strong>
                </div>
              </div>
              <div className='f-cart-brand'><img src={product.brandImg}/></div>
             </div>
             <div className='f-cart-rate'>
              <div className='f-cart-rate-stars'>*</div>
              <div className='f-cart-rate-numbers'>{product.rate} of 5</div>
             </div>
             <div className='f-cart-pick-from'><p className='f-pick-from'>Pickup From :</p><strong className='f-cart-picked-place'>Genena Mall</strong></div>
            </div>

        </div>
    )
}

export default FirstProductCart
