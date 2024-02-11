import React from 'react'
import './SideBar.css'

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
			<button className='logo_wraper-exit'></button>
		</div>
	)
}

export default SideBar