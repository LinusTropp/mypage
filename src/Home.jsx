import React from 'react';
import { useSelector } from 'react-redux'
const Home = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);
	
	return <div className={`wrapper ${darkMode ? 'dark' : ''}`}>
		<h1>Home</h1>
	<h2>Hej och välkommen till min sida!</h2>
	
	</div>
	
}
export default Home;