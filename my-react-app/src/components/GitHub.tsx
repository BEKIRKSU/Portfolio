import React from 'react';
import './GitHub.css';

interface LinkedInProps {
  url: string;
}

const GitHub: React.FC<LinkedInProps> = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
          className="github-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          alt="GitHub"
        />
    </a>
  );
};

export default GitHub;