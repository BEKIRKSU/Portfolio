
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Resume from './components/Resume';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
