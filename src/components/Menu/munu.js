import React from 'react';
import './menuStyle.scss';
import Close from '../../Icons/Close';
import CloseI from '../../Icons/CloseI';
import Right from '../../Icons/Right';
import Left from '../../Icons/Left';
import { Link } from 'react-router-dom';
import WarrowRightMobile from '../../Icons/WarrowRightMobile';
import WarrowLeftMobile from '../../Icons/WarrowLeftMobile';
import YeshteryMobileFooter from '../../Icons/YeshteryMobileFooter';
import YeshteryMenuMobile from '../../Icons/YeshteryMenuMobile';
import Search from '../../Icons/Search';
import CartMobile from '../../Icons/CartMobile';
import Wishlist from '../../Icons/Wishlist';

const MenuYeshtery = ({ isActive, handleToggle }) => {
	return (
		<div className={`menu ${isActive ? 'menu-active' : ''}`}>
			<div className='navBar-mobile-container'>
				<div className='navBar-mobile'>
					<div className='right-arrow-mobile'>
						<WarrowLeftMobile />
					</div>
					<div className='nav-mobile-caption'>
						<p>
							Valentine’s Day Offers! Buy Two Get One Free
							<Link to='/shoppingNow' className='shopNow'>
								shop now
							</Link>
						</p>
					</div>
					<div className='left-arrow-mobile'>
						<WarrowRightMobile />
					</div>
				</div>
			</div>

			<div className='Y-navBar-mobile-container'>
				<div className='Y-navBar-mobile'>
					<div className='logo-y-menu'>
						<YeshteryMenuMobile />
					</div>
					<div className='logo-y-items'>
						<Search />
						<CartMobile />
						<Wishlist />
					</div>
				</div>
			</div>

			<button onClick={handleToggle} className='close-section'>
				<Close />
			</button>
			<button onClick={handleToggle} className='closeI-section'>
				<CloseI />
			</button>
			<div className='menu-container'>
				<div className='user-info'>
					<div className='user-name'>
						<h4>John Doe</h4>
					</div>
					<div className='user-img'></div>
				</div>
				<ul className='menu-content'>
					<li>
						<Link
							to='/about'
							onClick={handleToggle}
							className='menu-content-item'>
							My Orders
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							onClick={handleToggle}
							className='menu-content-item'>
							My Addresses
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							onClick={handleToggle}
							className='menu-content-item'>
							Account Settings
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							onClick={handleToggle}
							className='menu-content-item'>
							Account Summary
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							onClick={handleToggle}
							className='menu-content-item'>
							Logout
						</Link>
					</li>
					<hr className='last-hr' />
				</ul>
			</div>
		</div>
	);
};

export default MenuYeshtery;
