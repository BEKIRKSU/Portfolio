import React from 'react';
import './Resume.css';
import LinkedIn from './LinkedIn';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h2 className="resume-heading">Bekir Kuscu Resume/CV</h2>
      <p>To download Bekir's resume/cv please click on the link below or visit my LinkedIn profile. ADD MORE WORDS HERE AT LEAST 100 WORDSS ADD MORE WORDS HERE AT LEAST 100 WORDSS
      ADD MORE WORDS HERE AT LEAST 100 WORDSS ADD MORE WORDS HERE AT LEAST 100 WORDSS ADD MORE WORDS HERE AT LEAST 100 WORDSS ADD MORE WORDS HERE AT LEAST 100 WORDSS
      </p>
      <LinkedIn url="https://www.linkedin.com/in/bekir-kuscu" />
    </div>
  );
};

export default Resume;
