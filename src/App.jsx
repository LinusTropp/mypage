import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function App() {
	const darkMode = useSelector((state) => state.theme.darkMode);
	useEffect(() => {
		document.body.classList.toggle('dark', darkMode);
	  }, [darkMode]);
  return (
	
	<Router>
		
    <div className={`app-container ${darkMode ? 'dark' : ''}`}>
      <Header/>
		<Routes>
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About showDetails={true} />} />
          <Route path="projects" element={<Projects />} />
          <Route path="Contacts" element={<Contacts />} />
		</Routes>
		<Footer/>
    </div>
	</Router>
	
  );
}

export default App;