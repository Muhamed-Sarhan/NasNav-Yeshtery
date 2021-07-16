import React from 'react';

const RateMedium = ({ rateStars }) => {
	const rates = new Array(5)
		.fill('/img/myStar.svg', 0, rateStars)
		.fill('/img/mwStar.svg', rateStars);

	return (
		<div className='rateStar'>
			{rates.map((rateUrl, index) => (
				<img key={index} alt='star rating' className='star' src={rateUrl} />
			))}
		</div>
	);
};
export default RateMedium;
