import React from 'react';
import Rate from '../Rating/rate';
import RateMedium from '../Rating/rateMedium';
import RateMobile from '../Rating/rateMobile';
import './thirdProductCartStyle.scss';

const ThirdProductCart = ({ product }) => {
	return (
		<div className='t-cart'>
			<div className='t-cart-img'>
				<img src={product.productImg} />
				<div className='t-reverse-cart-img'>
					<img src={product.imgIcon} />
				</div>
				<div className='f-reverse-cart-img-M'>
					<img src={product.imgIconMobile} />
				</div>
			</div>
			<div className='t-cart-content'>
				<div className='t-cart-header'>{product.title}</div>
				<div className='t-cart-sale-brand'>
					<div className='t-cart-cost'>
						<div className='t-current-cost'>
							{product.currentPrice} {product.currency}
						</div>
						<div className='t-old-and-sale'>
							<div className='t-old-cost'>
								{product.oldPrice} {product.currency}
							</div>
							<strong className='t-sale'>
								{Math.floor(
									100 - (product.currentPrice / product.oldPrice) * 100
								)}{' '}
								% off
							</strong>
						</div>
					</div>
					<div className='t-cart-brand'>
						<img src={product.brandImg} />
					</div>
					<div className='t-cart-brand-M'>
						<img src={product.brandImgMobile} />
					</div>
				</div>
				<div className='t-cart-rate'>
					<div className='t-cart-rate-stars'>
						<Rate rateStars={product.rate} />
					</div>
					<div className='t-cart-rate-stars-medium'>
						<RateMedium rateStars={product.rate} />
					</div>
					<div className='t-cart-rate-stars-mobile'>
						<RateMobile rateStars={product.rate} />
					</div>
					<div className='t-cart-rate-numbers'>{product.rate} of 5</div>
				</div>
			</div>
			<div className='t-cart-pick-from'>
				<p className='t-pick-from'>Pickup From :</p>
				<strong className='t-cart-picked-place'>Genena Mall</strong>
			</div>
		</div>
	);
};

export default ThirdProductCart;
