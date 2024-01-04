import React from 'react';
import LinkedIn from './LinkedIn';

const DownloadCv: React.FC = () => {

  const cvDownload = () => {
    const resumePath = '../Assets/Bekir-Kuscu-Resume-CV.pdf'; 
    window.open(resumePath, '_blank');
  };

  return (

    <div>
        <h1>Bekir's Resume/CV</h1>
        <p>
    Welcome to Bekir Kuscu resume/cv page! Below, you'll find details about my skills, experiences, and education.
    Feel free to download my full resume/CV for a comprehensive overview.
        </p>
        <button onClick={cvDownload }>Download Resume/CV</button>
        <LinkedIn url="https://www.linkedin.com/in/bekir-kuscu" />
    </div>

  );

};

 

export default DownloadCv;