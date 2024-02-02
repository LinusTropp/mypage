import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux'


const Header = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
		
      <h1>LinusLinus</h1>
      <nav className={`nav ${darkMode ? 'dark' : ''}`}>
        <Link className={`nav ${darkMode ? 'dark' : ''}`} to="/">Home</Link>
        <Link className={`nav ${darkMode ? 'dark' : ''}`} to="/about">About</Link>
        <Link className={`nav ${darkMode ? 'dark' : ''}`} to="/projects">Projects</Link>
        <Link className={`nav ${darkMode ? 'dark' : ''}`} to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
