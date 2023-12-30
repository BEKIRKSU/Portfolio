import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h2 className="resume-heading">Bekir Kuscu Resume/CV</h2>

      <h3 className="resume-section">Personal Profile</h3>
      <p>
        I am a versatile graduate/junior developer with extensive experience across multiple fields offering a unique perspective to tackle diverse challenges and contribute innovatively to project success. I enjoy learning and resolving technical complex issues as it takes me outside of my comfort zone. My personal belief is that we learn better when we work outside of our comfort zone.
      </p>

      <h3 className="resume-section">Technical Skills</h3>
      <p>
        React, TypeScript, C#, JavaScript, Python, SQL, Node.js, CSS, Bootstrap, HTML5, SQL, CSS3, Real-Time Object Detection Algorithm (YOLOv8), Data Science and Machine Learning (Kaggle), Computer Vision Framework (Roboflow), Figma.
      </p>


      <h3 className="resume-section">Projects</h3>


      <h4>MM-Code (Has active users) | Feb. 2023 – Present</h4>
      <p>
        Multilingual Exercises for Syntax Familiarity and Muscle Memory. Inspired by deep practice, this project addresses programming challenges by fostering intuitive coding through repetition and focus. The platform features tailored exercises I created, prompting users to frequently write out code in various languages, enhancing visual familiarity with the syntax and embedding it into muscle memory.
      </p>
      <h4>Eco Scan | GitHub Repo: <a href="https://github.com/Mr-DEM1R/1.618_AI">https://github.com/Mr-DEM1R/1.618_AI</a></h4>
      <p>
        Innovative AI-Powered Waste Management Solution. Led by a Project Manager from Wells Fargo and a technical lead from Capgemini, facilitated agile project management encompassing project board oversight, issue resolution, ticket management, and daily stand-ups.
      </p>


      <h4>Booking/Management System | GitHub Repo: <a href="https://github.com/BEKIRKSU/animal_farm">https://github.com/BEKIRKSU/animal_farm</a></h4>
      <p>
        Effectively Coordinating Reservations and Data Management. Designed and implemented a comprehensive Booking/Management System to streamline operations for managers and enhance user/volunteer experience.
      </p>

      <h4>Revolutionising Resumes/CV’s | GitHub Repo: <a href="https://github.com/BEKIRKSU/CV.O">https://github.com/BEKIRKSU/CV.O</a></h4>
      <p>
        A Fresh Approach to modern day Resume’s and CV’s. A system where individuals can quickly generate professional-looking CVs by simply filling in designated sections. This eliminates the hassle of manual formatting and design decisions.
      </p>

    
      <h4>Snake Game | GitHub Repo: <a href="https://github.com/BEKIRKSU/snake_game">https://github.com/BEKIRKSU/snake_game</a></h4>
      <p>
        Developed the classic ‘Snake Game’ using Python, delivering an engaging and vintage gaming experience.
      </p>


    
      <h3 className="resume-section">Education</h3>

    
      <h4>Trainee Full-Stack Software Engineer | CodeYourFuture (Bootcamp) | October 2022 – Present</h4>
      <p>
        Developing full stack projects from scratch with the guidance of professionals, using JavaScript, React, Node, PostgreSQL, SQL, Python, CSS, and Bootstrap.
      </p>

    
      <h4>University of Hertfordshire | 2020</h4>
      <p>
        BA (Hons) Economics Class of Degree 2:1
      </p>
    </div>
  );
};

export default Resume;
