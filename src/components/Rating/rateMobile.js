import React from 'react';

const RateMobile = ({ rateStars }) => {
	const rates = new Array(5)
		.fill('/img/yStar.svg', 0, rateStars)
		.fill('/img/wStar.svg', rateStars);

	return (
		<div className='rateStar'>
			{rates.map((rateUrl, index) => (
				<img key={index} alt='star rating' className='star' src={rateUrl} />
			))}
		</div>
	);
};
export default RateMobile;
