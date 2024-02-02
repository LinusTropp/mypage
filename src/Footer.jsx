import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import './Footer.css';


const Footer = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector(state => state.theme.darkMode);

	const toggleThemeHandler = () => {
		dispatch({ type: 'TOGGLE_THEME' });
	};

  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
		<button className={`button-dark ${darkMode ? 'dark' : ''}`} onClick={toggleThemeHandler}>
			{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
		</button>
	  <h3>LinusLinus™</h3>
    </footer>
  );
};

export default Footer;
