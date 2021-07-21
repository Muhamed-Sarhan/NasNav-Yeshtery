import React, { Component } from 'react';
import ThirdScroller from '../ThirdScroller/scroller';
import DropDownMobile from '../../Icons/DropDownMobile';
import DropDown from '../../Icons/DropDown';
import './thirdProductSectionStyle.scss';
import { Link } from 'react-router-dom';

export default class ThirdProductSection extends Component {
	constructor({ products }) {
		super({ products });
		this.state = {
			filteredSale: products,
			gender: '',
		};
	}

	filterThirdSection = (e) => {
		let genderValue = e.target.value;
		switch (genderValue) {
			case 'men':
				this.setState({
					gender: genderValue,
					filteredSale: this.state.filteredSale.filter((menP) => {
						return menP.gender === 'Men';
					}),
				});
				break;
			case 'women':
				this.setState({
					gender: genderValue,
					filteredSale: this.state.filteredSale.filter((menP) => {
						return menP.gender === 'Women';
					}),
				});
				break;
			default:
				this.setState({
					gender: genderValue,
					filteredSale: this.state.filteredSale,
				});
				break;
		}
	};

	render() {
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
								<select
									value={this.state.gender}
									onChange={this.filterThirdSection}>
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
				<ThirdScroller filteredSale={this.state.filteredSale} />

				<div>
					<Link className='t-view-all-btn-mobile'>
						<strong>View All</strong>
					</Link>
				</div>
			</div>
		);
	}
}
