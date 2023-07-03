import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>
        Thank you for using Auto Mart Vehicle Management System. If you have any
        questions, feedback, or inquiries, please feel free to contact us using
        the information below:
      </p>
      <div className="contact-info">
        <h3>
          <FontAwesomeIcon icon={faPhone} />
          Phone:
        </h3>
        <p>+1 123-456-7890</p>
        <h3>
          <FontAwesomeIcon icon={faEnvelope} />
          Email:
        </h3>
        <p>info@automart.com</p>
        <h3>Address:</h3>
        <p>123 Main Street, City, Country</p>
      </div>
      <div className="contact-form">
        <h3>Send us a message:</h3>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Message:</label>
            <textarea rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
