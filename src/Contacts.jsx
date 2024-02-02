// src/Contact.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import './Contacts.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
	

	
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
	
    <div className={`contact-form ${darkMode ? 'dark' : ''}`}>
		<h1>Contacts</h1>
      <h2>Kontakta mig</h2>
      <p>Mejl: ******** <br />Telefon: ******** <br />Annars använd kontaktformuläret nedan:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Namn:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Mejl:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Meddelande:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className='submit-button' type="submit">skicka in</button>
      </form>
    </div>
  );
};

export default Contact;
