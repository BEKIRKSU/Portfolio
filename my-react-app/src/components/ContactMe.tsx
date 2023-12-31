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
      <form action="https://api.web3forms.com/submit" method="post" className="contact-form">
      <input type="hidden" name="access_key" value="e90e01aa-d270-440f-886c-c1b192d16d0e"/>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <div className="h-captcha" data-captcha="true"></div>
        <button type="submit">Submit</button>
      </form>
      <script src="https://web3forms.com/client/script.js" async defer></script>
      <LinkedIn url="https://www.linkedin.com/" />
    </div>
  );
};

export default ContactMe;
