import React from 'react'
import './News.css'
import PostImg from '../../../assets/Postimg.png'
import Minecraft from '../../../assets/Minecraft.png'

export default function News() {
	return (
		<div className='news_wrapper'>
			<div className="news_wrapper-header">
				<div className='header-post_person'>
					<a href="" className='post-img'>
						<img src={PostImg} alt="" />
					</a>
					<span className='header-post_text'>
						<p>Picachuu</p>
						<p>Public</p>
					</span>
				</div>
				<button>
					<span></span>
					<p>Minecraft</p>
				</button>
			</div>
			<img src={Minecraft} alt="" className='news_wrapper-img' />
			<div className="news_wrapper-icons"></div>
			<div className="news_wrapper-likes"></div>
			<div className="news_wrapper-post"></div>
		</div>
	)
}
