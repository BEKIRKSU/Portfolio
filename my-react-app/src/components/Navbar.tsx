import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
// import BK-Logo from '../Images/BK-Logo'

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              className="BK-image"
              // src={BK-Logo}
              alt="Bekir Kuscu Portfolio Website"
            />
          </Link>
        </li>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/work">Work</Link></li> */}
        <li><Link to="/resume">Resume(CV)</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
