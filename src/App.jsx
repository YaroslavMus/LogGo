import React from 'react'
import './style.css'
import SideBar from './componets/SideBar/SideBar'
import Header from './componets/Header/Header'
import MainNews from './pages/MainNews/MainNews'

function App() {

	return (
		<>
			<div className="main_wraper">
				<SideBar />
				<Header />
				<MainNews />
			</div>
		</>
	)
}

export default App
