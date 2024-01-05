import React from 'react';
import './LinkedIn.css';

interface LinkedInProps {
  url: string;
}

const LinkedIn: React.FC<LinkedInProps> = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        className="linkedin-image"
        src="https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_200_200/0/1638831589865?e=2147483647&v=beta&t=Zq1zixRFUNMSm2Ldgu_hcJAYTL1gWG3VHKXO4kf9lDQ"
        alt="LinkedIn Bekir Kuscu Profile"
      />
    </a>
  );
};

export default LinkedIn;
