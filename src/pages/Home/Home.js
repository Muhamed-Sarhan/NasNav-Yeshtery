import React, { Component } from 'react';
import './homeStyle.scss';
import data from '../../services/data';
import Slider from '../../components/Slider/slider';
import FirstProductSection from '../../components/FirstProductsSection/firstProductSection';
import SecondProductsSection from '../../components/SecondProductsSection/secondProductsSection';
import ThirdProductSection from '../../components/ThirdProductsSection/thirdProductSection';
import LoadMoreProducts from '../../components/LoadMoreProducts/loadMoreProducts';
import Offers from '../../components/OffersSection/offers';
import Footer from '../../components/Footer/footer';

const { products, category, offers } = data;
class Home extends Component {
	state = {
		products,
		category,
		offers,
		isActive: false,
	};

	render() {
		const { products, category, offers, isActive } = this.state;

		return (
			<div className='Home'>
				<Slider />
				<FirstProductSection products={products} />
				<SecondProductsSection category={category} />
				<ThirdProductSection products={products} />
				<Offers offers={offers} />
				<LoadMoreProducts products={products} />
				<Footer />
			</div>
		);
	}
}

export default Home;
