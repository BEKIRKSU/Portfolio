
import React from 'react';
import './Work.css';

const Work: React.FC = () => {
  return (
    <div className="work-container">
      <h2 className="work-heading">My Work</h2>
      <p className="work-paragraph">
        Here you can find information about my projects and work experience.
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
