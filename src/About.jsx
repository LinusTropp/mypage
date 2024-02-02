import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const About = ({ showDetails }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className={`wrapper ${darkMode ? 'dark' : ''}`}>
      <h1>About me</h1>
      {showDetails && (
        <h2>
          Mitt namn är Linus Tropp och jag studerar till frontend-developer. <br/>
          Denna sida är gjord för att visa upp mina kunskaper i React osv.<br/>
          Tack för att du besöker min sida!<br/>
          
          <p>
            Om du har några frågor eller vill kontakta mig, tveka inte att{' '}
            <Link className='a-links' to="/Contacts">
              kontakta mig
            </Link>
            .<p />Vänliga hälsningar Linus Tropp
          </p>
        </h2>
      )}
    </div>
  );
};

export default About;
