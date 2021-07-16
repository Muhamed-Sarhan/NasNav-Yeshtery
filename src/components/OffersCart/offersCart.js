import React from 'react';
import './offersCartStyle.scss';
import Waddidas from '../../Icons/Waddidas';
import AddidasMobileSmaoll from '../../Icons/AddidasMobileSmaoll';

const OffersCart = ({ product }) => {
	return (
		<div className='o-cart'>
			<div className='overlay'></div>
			<div className='o-cart-img'>
				<img src={product.imgOffer} />
			</div>
			<div className='o-cart-caption'>
				<div className='o-main-caption'>{product.title}</div>
				<div className='o-sec-caption'>{product.caption}</div>
				<div className='o-brand-img'>
					<Waddidas />
				</div>
				<div className='o-brand-img-mobile'>
					<AddidasMobileSmaoll />
				</div>
			</div>
		</div>
	);
};

export default OffersCart;
