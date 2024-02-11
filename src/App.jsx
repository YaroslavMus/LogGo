import React from 'react'
import './style.css'
import SideBar from './componets/SideBar/SideBar'
import Header from './componets/Header/Header'
import Newsfeed from './componets/Content/News/Newsfeed'

function App() {

	return (
		<>
			<div className="main_wraper">
				<SideBar />
				<Header />
				<Newsfeed />
			</div>
		</>
	)
}

export default App
