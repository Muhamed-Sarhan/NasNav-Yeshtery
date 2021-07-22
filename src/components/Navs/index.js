import React from 'react';
import './navsStyle.scss';
import FirstNav from './FirstNav/firstNav';
import SecondNav from './SecondNav/secondNav';
import ThirdNav from './ThirdNav/thirdNav';
import FirstNavMobile from './FirstNavMobile/firstNavMobile';
import SecondNavMobile from './SecondNavMobile/secondNavMobile';
import ThirdNavMobile from './ThirdNavMobile/thirdNavMobile';

const Navs = ({ handleToggle }) => {
	return (
		<div className='wrapper'>
			<div className='f-nav-web'>
				<FirstNav />
			</div>
			<div className='f-nav-mobile'>
				<FirstNavMobile />
			</div>
			<div className='s-nav-web'>
				<SecondNav handleToggle={handleToggle} />
			</div>
			<div className='s-nav-mobile'>
				<SecondNavMobile />
			</div>
			<div className='t-nav-web'>
				<ThirdNav />
			</div>
			<div className='t-nav-mobile'>
				<ThirdNavMobile handleToggle={handleToggle} />
			</div>
		</div>
	);
};

export default Navs;
