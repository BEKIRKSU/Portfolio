
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
