import React from 'react'
import './firstProductCartStyle.scss'
import adiddas from '../../images/addid.svg'

const FirstProductCart = () => {
    return (
        <div className='f-cart'>
            <div className='f-cart-img'>
             <div className='reverse-cart-img'></div>
            </div>
            <div className='cart-content'>
             <div className='cart-header'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
             <div className='cart-sale-brand'>
              <div className='cart-cost'>
                <div className='current-cost'>9,999 LE</div>
                <div className='old-and-sale'>
                 <div className='old-cost'>9,999 LE</div>
                 <strong className='sale'>
                 30% Off
                 </strong>
                </div>
              </div>
              <div className='cart-brand'><img src={adiddas}/></div>
             </div>
             <div className='cart-rate'>
              <div className='cart-rate-stars'>*</div>
              <div className='cart-rate-numbers'>4</div>
             </div>
             <div className='cart-pick-from'><p className='pick-from'>Pickup From :</p><strong className='cart-picked-place'>Genena Mall</strong></div>
            </div>

        </div>
    )
}

export default FirstProductCart
