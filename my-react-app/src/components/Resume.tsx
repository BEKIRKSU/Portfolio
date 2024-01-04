import React from 'react';
import './Resume.css';
import DownloadCv from './DownloadCV';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
       <h1 className='resumeHeading'>Bekir's Resume/CV</h1>
        <p>
    Welcome to Bekir Kuscu resume/cv page! Below, you'll find details about my skills, experiences, and education.
    Feel free to download my full resume/CV for a comprehensive overview.
        </p>
      <DownloadCv />
    </div>
  );
};

export default Resume;


