import React from 'react';

const Rate = ({ rateStars }) => {
	const rates = new Array(5)
		.fill('/img/star.svg', 0, rateStars)
		.fill('/img/E-star.svg', rateStars);

	return (
		<div className='rateStar'>
			{rates.map((rateUrl, index) => (
				<img key={index} alt='star rating' className='star' src={rateUrl} />
			))}
		</div>
	);
};
export default Rate;
