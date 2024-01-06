import React from 'react';
import LinkedIn from './LinkedIn';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Bekir Kuscu's portfolio.</h1>
      {/* <p className="home-paragraph"> Hello, I'm Bekir Kuscu, a passionate Graduate/Junior Software Engineer with over a year of hands-on experience in technologies such as React JS, C#, JavaScript, TypeScript, and SQL. Throughout my journey, I've honed my skills and cultivated a deep understanding of these tools, enabling me to take on complex challenges and contribute meaningfully to software development projects.</p>
      <p className="home-paragraph">Now, with a sense of excitement and anticipation, I'm thrilled to announce that something truly exciting is in the works! In the coming days, I'll be giving a glimpse into my world of coding, creativity, and innovation. This endeavor serves as a testament to my commitment to pushing the boundaries in software engineering.</p>
      <p className="home-paragraph">My goal is to demonstrate not only my technical prowess, but also my dedication to providing solutions that integrate cutting-edge technology with creativity as I journey with you. Join me for a firsthand look at my software development projects, ideas, and innovations. Let's explore the exciting intersection of technology and imagination together.</p> */}
      <LinkedIn url="https://www.linkedin.com/in/bekir-kuscu" />
      <img
          className="github-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          alt="GitHub"
        />
    </div>
  );
};

export default Home;
