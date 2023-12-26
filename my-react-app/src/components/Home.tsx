
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to Bekir Kuscu's portfolio.</h2>
      <p className="home-paragraph">I am currently a Graduate/Junior Software Engineer.</p>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="linkedin-image"
          src="https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_200_200/0/1638831589865?e=2147483647&v=beta&t=Zq1zixRFUNMSm2Ldgu_hcJAYTL1gWG3VHKXO4kf9lDQ"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
};

export default Home;
