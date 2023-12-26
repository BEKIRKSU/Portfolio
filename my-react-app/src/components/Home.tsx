
import React from 'react';
import LinkedIn from './LinkedIn';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to Bekir Kuscu's portfolio.</h2>
      <p className="home-paragraph"> I'm Bekir Kuscu, a passionate Graduate/Junior Software Engineer, 
and I'm excited to announce that something really exciting is coming soon! 
Soon, you'll get a glimpse into my world of coding, creativity, and innovation.</p>
      <LinkedIn url="https://www.linkedin.com/" />
    </div>
  );
};

export default Home;
