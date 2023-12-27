
import React from 'react';
import './Work.css';

const Work: React.FC = () => {
  return (
    <div className="work-container">
      <h1 className="work-heading">Bekir Kuscu's Projects</h1>
      <h2>Coming Soon:</h2>
      <p className="work-paragraph">Bekir Kuscu's Portfolio Website This space showcases my projects, skills, and journey to becoming a Software Engineer. If you're a fellow programmer, tech enthusiast, or someone just curious about how things work, this space is for you.
      <h2>What to Expect</h2>
      <p className="work-paragraph">Projects Galore: Explore a collection of my noteworthy coding projects that showcase my expertise and dedication.
      <h2>Tech Stack Showcase:</h2>
      <p className="work-paragraph"> Discover the tools I use to create my work, and the technologies I love to work with.
      <h3> Explore my GitHub below for a closer look at my projects and contributions.</h3>
      </p>
      </p>
      </p>
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

export default Work;
