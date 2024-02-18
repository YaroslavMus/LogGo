import React from 'react'
import './Newsfeed.css'

export default function Newsfeed() {
	return (
		<div className='content_wraper-news'>
			<h1>Newsfeed</h1>
			<h2>Check what your friends up to!</h2>
			<p>Conveniently customize proactive web services for leveraged without continualliery aggregate fricctionle ou wellies richard.and very customize  continually.</p>
			<form >
				<label htmlFor="">
					<textarea placeholder='What’s on your mind , Kevin ?' className='newsfeed_textarea' />
				</label>
				<div className='newsfeed_conteiner-navigation'>
					<label htmlFor="">
						<input type="file" className='newsfeed_input-file' />
					</label>
					<button className='newsfeed_button-smile'></button>
					<button className='newsfeed_button-create'>Создать</button>
				</div>
			</form>
		</div>
	)
}
