import React from 'react';
import { useSelector } from 'react-redux'
import { FetchComponent } from './FetchComponent';

const Projects = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);


return <div className={`wrapper ${darkMode ? 'dark' : ''}`}>
	<h1>Projects</h1>

    
	<FetchComponent/>
    
  </div>
};

export default Projects;