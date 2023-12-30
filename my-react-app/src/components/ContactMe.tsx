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
      <form action="#" method="post" className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit">Submit</button>
      </form>
      <LinkedIn url="https://www.linkedin.com/" />
    </div>
  );
};

export default ContactMe;
