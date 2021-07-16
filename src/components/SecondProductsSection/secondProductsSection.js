import React from 'react';
import { Link } from 'react-router-dom';
import Scroller from '../SecondScroller/scroller';
import './secondProductsSectionStyle.scss';

const SecondProductsSection = ({ category }) => {
	return (
		<div className='s-section'>
			<div className='s-header'>
				<div className='s-title'>
					<h3>Shop By Category</h3>
					<h5>Start shopping by your favourite category.</h5>
				</div>
			</div>
			<Scroller category={category} />

			<div>
				<Link className='s-view-all-btn-mobile'>
					<strong>View All</strong>
				</Link>
			</div>
		</div>
	);
};

export default SecondProductsSection;
