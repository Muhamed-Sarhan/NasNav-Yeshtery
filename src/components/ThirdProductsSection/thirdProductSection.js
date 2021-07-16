import React from 'react';
import Scroller from '../ThirdScroller/scroller';
import DropDownMobile from '../../Icons/DropDownMobile';
import DropDown from '../../Icons/DropDown';
import './thirdProductSectionStyle.scss';
import { Link } from 'react-router-dom';

const ThirdProductSection = ({ filteredData, gender, filterThirdSection }) => {
	return (
		<div className='t-section'>
			<div className='t-header'>
				<div className='t-title'>
					<h3>On Sale</h3>
					<h5>Hurry up! catch these products before the sale ends.</h5>
				</div>
				<div className='t-btn-select'>
					<div>
						<div className='t-select'>
							<select value={gender} onChange={filterThirdSection}>
								<option value='all'>All</option>
								<option value='men'>Men</option>
								<option value='women'>Women</option>
							</select>
							<div className='t-drop-down'>
								<DropDown />
							</div>
							<div className='f-drop-down-m'>
								<DropDownMobile />
							</div>
						</div>
					</div>
					<div>
						<Link className='t-view-all-btn'>
							<strong>View All</strong>
						</Link>
					</div>
				</div>
			</div>
			<Scroller filteredData={filteredData} />

			<div>
				<Link className='t-view-all-btn-mobile'>
					<strong>View All</strong>
				</Link>
			</div>
		</div>
	);
};

export default ThirdProductSection;
