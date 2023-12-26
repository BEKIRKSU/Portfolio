
import React from 'react';
import LinkedIn from './LinkedIn';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to Bekir Kuscu's portfolio.</h2>
      <p className="home-paragraph">I am currently a Graduate/Junior Software Engineer.</p>
      <LinkedIn url="https://www.linkedin.com/" />
    </div>
  );
};

export default Home;
