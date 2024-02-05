import React from 'react'
import './style.css'
import SideBar from './componets/SideBar/SideBar'
import Header from './componets/Header/Header'
import Content from './componets/Content/Content'

function App() {

	return (
		<>
			<div className="main_wraper">
				<SideBar />
				<Header />
				<Content />
			</div>
		</>
	)
}

export default App
