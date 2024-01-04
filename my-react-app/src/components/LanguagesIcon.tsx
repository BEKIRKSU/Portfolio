// LanguagesIcon.tsx
import React, { ReactNode } from 'react';
import './LanguagesIcon.css';

interface LanguagesIconProps {
  children: ReactNode;
}

const LanguagesIcon: React.FC<LanguagesIconProps> = ({ children }) => {
  return (
    <div className="button-like-shape">
      {children}
    </div>
  );
};

export default LanguagesIcon;
