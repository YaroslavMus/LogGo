import React from 'react'
import Newsfeed from '../../componets/Content/Newsfeed/Newsfeed'
import './MainNews.css'
import News from '../../componets/Content/News/News'
import LiveChat from '../../componets/Content/Livechat/LiveChat'

export default function MainNews() {
	return (
		<div className='content_wraper'>
			<div className='content_wraper-left'>
				<Newsfeed />
				<News />
			</div>
			<div className='content_wraper-right'>
				<LiveChat />
			</div>
		</div>
	)
}
