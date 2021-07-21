import React from 'react';
import './footerStyle.scss';
import { Link } from 'react-router-dom';
import Cash from '../../Icons/Cash';
import FaceBook from '../../Icons/Facebook';
import Instgram from '../../Icons/Instgram';
import LinkedIn from '../../Icons/LinkedIn';
import MasterCard from '../../Icons/MasterCard';
import NasNavFooter from '../../Icons/Nasnav-footer';
import Send from '../../Icons/Send';
import Tweeter from '../../Icons/Twitter';
import Visa from '../../Icons/Visa';
import YeshteryFooter from '../../Icons/YeshteryFooter';
import YeshteryMobileFooter from '../../Icons/YeshteryMobileFooter';
import SendFooter from '../../Icons/SendFooter';

function Footer() {
	return (
		<div className='main-footer'>
			<div className='footer-Container'>
				{/* Column1 */}

				<div className='containerFooter'>
					<div className='about'>
						<div className='list-unstyled'>
							<div className='footerLogeY'>
								<Link to='/'>
									<YeshteryFooter />
								</Link>
							</div>
							<div className='footerLogeMobileY'>
								<Link to='/'>
									<YeshteryMobileFooter />
								</Link>
							</div>

							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat.<br></br>
								<br></br> Ut wisi enim ad minim veniam, quis nostrud exerci
								tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
								commodo consequat. Duis autem vel eum iriure dolor in hendrerit
								in vulputate velit esse molestie consequat, vel illum dolore eu
								feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed dia<br></br>
								<br></br> m nonummy nibh euismod tincidunt ut laoreet dolore
								magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
							</p>
						</div>
					</div>

					{/* Column2 */}
					<div className='social'>
						<h4 className='inputCaption'>Subscribe to our newsletter</h4>
						<div className='buttonInInput'>
							<input placeholder='Enter Your Mail' />
							<button className='sendBtn'>
								<h4>Subscribe</h4>
								<Send />
							</button>
							<button className='sendBtnFooter'>
								<h4>Subscribe</h4>
								<SendFooter />
							</button>
						</div>
						<div className='footermenu'>
							<div className='sections'>
								<Link to='/about' className='yLinks'>
									About Us
								</Link>
								<Link to='/about' className='yLinks'>
									Contact Us
								</Link>
								<Link to='/about' className='yLinks'>
									Track Order
								</Link>
								<Link to='/about' className='yLinks'>
									Terms & Conditions
								</Link>
								<Link to='/about' className='yLinks'>
									Privecy Policy
								</Link>
								<Link to='/about' className='yLinks'>
									Sell With Us
								</Link>
								<Link to='/about' className='yLinks'>
									Shipping And Returns
								</Link>
							</div>

							<div className='media'>
								<Link to='/about'>
									<div className='ySocial'>
										<FaceBook />
										<p>/YESHTERY</p>
									</div>
								</Link>
								<Link to='/about'>
									<div className='ySocial'>
										<Instgram />
										<p>/YESHTERY</p>
									</div>
								</Link>
								<Link to='/about'>
									<div className='ySocial'>
										<LinkedIn />
										<p>/YESHTERY</p>
									</div>
								</Link>
								<Link to='/about'>
									<div className='ySocial'>
										<Tweeter />
										<p>/YESHTERY</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/********part Two**********/}
				<hr className='hrStyle' />
				<div className='secondDiv'>
					<div className='copyRights'>
						<p className='col-sm'>
							&copy;{new Date().getFullYear()} | yeshtery, all rights reserved.
						</p>
					</div>

					<div className='payment'>
						<Cash />
						<Visa />
						<MasterCard />
					</div>

					<div className='nasnav'>
						Powered By
						<Link to='/about'>
							<NasNavFooter />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
