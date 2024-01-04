import React from 'react';
import './Projects.css';
import LanguagesIcon from './LanguagesIcon';

const Projects: React.FC = () => {
  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="work-container">
      <h1 className="work-heading">BEKIR KUSCU / Projects</h1>
      <ol className="cool-list">
        <li className="cool-list-item" onClick={() => handleLinkClick('https://www.mmcode.io/')}>
          MM-Code / 2023 - 2024
        </li>
        <p>
          Powered by a diverse team of advisors and contributors, we tackled coding challenges with focus and repetition in an Agile environment.
        </p>
        <LanguagesIcon>React.js (JavaScript)</LanguagesIcon>
        <LanguagesIcon>SQL</LanguagesIcon>
        <LanguagesIcon>HTML5</LanguagesIcon>
        <LanguagesIcon>CSS3</LanguagesIcon>
        <LanguagesIcon>Node.js</LanguagesIcon>
        <LanguagesIcon>Bootstrap</LanguagesIcon>
        <LanguagesIcon>Auth0</LanguagesIcon>

        <li className="cool-list-item" onClick={() => handleLinkClick('https://animalfarm-qqai.onrender.com/')}>
          Booking & Management System / 2023
        </li>
        <p>
          -
        </p>
        <LanguagesIcon>React.js (JavaScript)</LanguagesIcon>
        <LanguagesIcon>SQL</LanguagesIcon>
        <LanguagesIcon>HTML5</LanguagesIcon>
        <LanguagesIcon>CSS3</LanguagesIcon>

      <li className="cool-list-item" onClick={() => handleLinkClick('https://github.com/Mr-DEM1R/1.618_AI')}>
          Eco-Scan / 2023
        </li>
        <p>
          -
        </p>
        <LanguagesIcon>Python</LanguagesIcon>
        <LanguagesIcon>OpenCV</LanguagesIcon>
        <LanguagesIcon>YoloV8</LanguagesIcon>
        <LanguagesIcon>Kaggle</LanguagesIcon>
        <LanguagesIcon>Roboflow</LanguagesIcon>
        <LanguagesIcon>Streamlit</LanguagesIcon>

        <li className="cool-list-item" onClick={() => handleLinkClick('https://github.com/BEKIRKSU/CV.O')}>
          CVO / 2023
        </li>
        <p>
          -
        </p>
        <LanguagesIcon>React.js</LanguagesIcon>
        <LanguagesIcon>HTML5</LanguagesIcon>
        <LanguagesIcon>CSS3</LanguagesIcon>

      <li className="cool-list-item" onClick={() => handleLinkClick('https://github.com/BEKIRKSU/snake_game')}>
          Classic Snake Game / 2023
        </li>
        <p>
          -
        </p>
        <LanguagesIcon>Python</LanguagesIcon>
      </ol>

      {/* <h2>Coming Soon:</h2>
      <p className="work-paragraph">
        Bekir Kuscu's Portfolio Website. This space showcases my projects, skills, and journey to becoming a Software Engineer. If you're a fellow programmer, tech enthusiast, or someone just curious about how things work, this space is for you.
      </p>

      <h2>What to Expect</h2>
      <p className="work-paragraph">
        Projects Galore: Explore a collection of my noteworthy coding projects that showcase my expertise and dedication.
      </p>

      <h2>Tech Stack Showcase:</h2>
      <p className="work-paragraph">
        Discover the tools I use to create my work, and the technologies I love to work with.
      </p>  */}

      <h3>Explore my GitHub below for a closer look at my projects and contributions.</h3>
      <a
        href="https://www.github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="github-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          alt="GitHub"
        />
      </a>
    </div>
  );
};

export default Projects;
