import React from 'react'
import './Header.css'
import Avatar from '../../assets/Avatar.png'

export default function Header() {
	return (
		<div className='header_wraper'>
			<label >
				<span></span>
				<input type="text" placeholder='Поиск...' />
			</label>
			<button className='button_alert'></button>
			<button className='button_message'></button>
			<a href="" className='button_avatar' >
				<img src={Avatar} alt="" />
			</a>
		</div>
	)
}
