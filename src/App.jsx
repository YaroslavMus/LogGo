import React from 'react'
import './style.css'
import SideBar from './componets/SideBar/SideBar'
import Header from './componets/Header/Header'
import Main from './componets/Main/Main'

function App() {

	return (
		<>
			<div className="main_wraper">
				<SideBar />
				<Header />
				<Main />
			</div>
		</>
	)
}

export default App
