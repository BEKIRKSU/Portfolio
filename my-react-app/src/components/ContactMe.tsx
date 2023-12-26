
import React from 'react';
import LinkedIn from './LinkedIn';
import './ContactMe.css';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-paragraph">
        Feel free to reach out to me. Here are my contact details.
      </p>
      <LinkedIn url="https://www.linkedin.com/" />
    </div>
  );
};

export default ContactMe;
