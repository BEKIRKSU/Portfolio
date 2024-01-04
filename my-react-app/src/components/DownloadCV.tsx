import React from 'react';
import LinkedIn from './LinkedIn';

const DownloadCv: React.FC = () => {

  const cvDownload = () => {
    const resumePath = '../Assets/Bekir-Kuscu-Resume-CV.pdf'; 
    window.open(resumePath, '_blank');
  };

  return (

    <div>
        <button onClick={cvDownload }>Download Resume/CV</button>
        <LinkedIn url="https://www.linkedin.com/in/bekir-kuscu" />
    </div>

  );

};

 

export default DownloadCv;