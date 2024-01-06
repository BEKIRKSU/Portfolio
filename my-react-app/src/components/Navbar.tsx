import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; 

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              className="BK-image"
              src="Images/BK-PortfolioLogo.png"
              alt="Bekir Kuscu Portfolio Website"
            />
          </Link>
        </li>
        <li><Link to="/" title="Bekir Kuscu Portfolio Website Home Page">Home</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        {/* <li><Link to="/resume" title="Bekir Kuscu Resume/CV">Resume(CV)</Link></li> */}
        <li><Link to="/about" title="About Bekir Kuscu">About</Link></li>
        <li><Link to="/contact" title="Contact Bekir Kuscu Via Email Form">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
