
import React from 'react';
import LinkedIn from './LinkedIn';
import './ContactMe.css';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-paragraph">
      Keep an eye out for the grand reveal! Meanwhile, connect with me on social media to be part of the conversation. 
      </p>
      <LinkedIn url="https://www.linkedin.com/" />
    </div>
  );
};

export default ContactMe;
