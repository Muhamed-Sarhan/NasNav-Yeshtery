import React, { Component } from 'react';
import FirstScroller from '../FirstScroller/scroller';
import DropDown from '../../Icons/DropDown';
import DropDownMobile from '../../Icons/DropDownMobile';
import { Link } from 'react-router-dom';
import './firstProductSectionStyle.scss';

export default class FirstProductSection extends Component {
	constructor({ products }) {
		super({ products });
		this.state = {
			filteredData: products,
			gender: '',
		};
	}

	filterFirstSection = (e) => {
		let genderValue = e.target.value;
		switch (genderValue) {
			case 'men':
				this.setState({
					gender: genderValue,
					filteredData: this.state.filteredData.filter((menP) => {
						return menP.gender === 'Men';
					}),
				});
				break;
			case 'women':
				this.setState({
					gender: genderValue,
					filteredData: this.state.filteredData.filter((menP) => {
						return menP.gender === 'Women';
					}),
				});
				break;
			default:
				this.setState({
					gender: genderValue,
					filteredData: this.state.filteredData,
				});
				break;
		}
	};

	render() {
		return (
			<div className='f-section'>
				<div className='f-header'>
					<div className='f-title'>
						<h3>Best Sellers</h3>
						<h5>Check out our best sellers.</h5>
					</div>
					<div className='f-btn-select'>
						<div>
							<div className='f-select'>
								<select
									value={this.state.gender}
									onChange={this.filterFirstSection}>
									<option value='all'>All</option>
									<option value='men'>Men</option>
									<option value='women'>Women</option>
								</select>
								<div className='f-drop-down'>
									<DropDown />
								</div>
								<div className='f-drop-down-m'>
									<DropDownMobile />
								</div>
							</div>
						</div>

						<div>
							<Link className='f-view-all-btn'>
								<strong>View All</strong>
							</Link>
						</div>
					</div>
				</div>
				<FirstScroller filteredData={this.state.filteredData} />

				<div>
					<Link className='f-view-all-btn-mobile'>
						<strong>View All</strong>
					</Link>
				</div>
			</div>
		);
	}
}
