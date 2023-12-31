import React from 'react';

const DownloadCv: React.FC = () => {
  const cvDownload = () => {
    const resumePath = 'https://raw.githubusercontent.com/BEKIRKSU/Portfolio/master/src/Assets/Bekir-Kuscu-Resume-CV.pdf';
    window.open(resumePath, '_blank');
  };

  return (
    <div>
      <button onClick={cvDownload}>Download Resume/CV</button>
    </div>
  );
};

export default DownloadCv;
