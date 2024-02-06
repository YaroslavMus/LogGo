import React from 'react'
import './SideBar.css'
import '../../fonts/BakbakOne-Regular.ttf'

function SideBar() {
	return (
		<div className='logo_wraper'>
			<a href="">logo</a>
			<nav>
				<ul>
					<li className='logo_wraper-home'>
						<a href=""></a>
					</li>
					<li className='logo_wraper-me'>
						<a href=""></a>
					</li>
					<li className='logo_wraper-settings'>
						<a href=""></a>
					</li>
				</ul>
			</nav>
			<button><svg width="25.975250" height="25.000000" viewBox="0 0 25.9753 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<path id="Vector" d="M11.8659 0C14.9691 0 17.5 2.48755 17.5 5.55005L17.5 11.5376L9.86919 11.5376C9.32231 11.5376 8.88989 11.9624 8.88989 12.5C8.88989 13.0249 9.32231 13.4624 9.86919 13.4624L17.5 13.4624L17.5 19.4375C17.5 22.5 14.9691 25 11.8405 25L5.6468 25C2.53088 25 0 22.5125 0 19.45L0 5.5625C0 2.48755 2.54361 0 5.65952 0L11.8659 0ZM20.6752 8.18774C21.0502 7.80029 21.6628 7.80029 22.0378 8.17529L25.6877 11.8127C25.8752 12.0002 25.9753 12.2378 25.9753 12.5002C25.9753 12.7502 25.8752 13.0002 25.6877 13.1753L22.0378 16.8127C21.8503 17.0002 21.6003 17.1003 21.3627 17.1003C21.1127 17.1003 20.8627 17.0002 20.6752 16.8127C20.3002 16.4377 20.3002 15.8252 20.6752 15.4502L22.6752 13.4626L17.5002 13.4626L17.5002 11.5378L22.6752 11.5378L20.6752 9.55029C20.3002 9.17529 20.3002 8.56274 20.6752 8.18774Z" fill="#484A51" fillOpacity="1.000000" fillRule="nonzero" />
			</svg>
			</button>
		</div>
	)
}

export default SideBar