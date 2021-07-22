import React from 'react';
import './secondNavStyle.scss';
import Search from '../../../Icons/Search';
import Adidas from '../../../Icons/Adidas';
import Cart from '../../../Icons/Cart';
import Wishlist from '../../../Icons/Wishlist';
import User from '../../../Icons/User';

const SecondNav = ({ handleToggle }) => {
	return (
		<div className='addidas-main-section'>
			<div className='addidas-container'>
				<div className='search-section'>
					<div className='searchI'>
						<Search />
					</div>
					<input placeholder='Search' />
				</div>

				<div className='addidas-logo'>
					<Adidas />
				</div>

				<div className='addidas-main-options'>
					<div className='cartI'>
						<Cart />
						<div className='counter'>
							<strong>0</strong>
						</div>
						<p>Cart</p>
					</div>
					<div>
						<Wishlist />
						<p>Wishlist</p>
					</div>
					<button onClick={handleToggle} className='rightCartBtn'>
						<User />
						<p className='userP'>Login</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SecondNav;
