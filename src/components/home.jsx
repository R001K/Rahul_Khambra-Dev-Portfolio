import { useState } from 'react';
// import { animateScroll as scroll } from 'react-scroll';
import './home.css';
import Project from './project';
import Tech from './tech';

const Home = () => {
  const [showTech, setShowTech] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const handleBrowseProjects = () => {
    setShowProject(true);
    // scroll.scrollToBottom(); // Smooth scroll to the bottom when showing projects
  };

  const handleBrowseTech = () => {
    setShowTech(true);
    // scroll.scrollToBottom(); // Smooth scroll to the bottom when showing technologies
  };

  return (
    <div className='container'>
      <p className='heading'>Hello, I{'\''}m Rahul Khambra</p>
      <p className='sub-heading'>Full-stack Web Developer</p>
      <hr />
      {showProject ? (
        <Project />
      ) : (
        <button onClick={handleBrowseProjects} className="browse-projects">
          Show Projects
        </button>
      )}
      <hr className='projhr' />
      {showTech ? (
        <Tech />
      ) : (
        <button onClick={handleBrowseTech} className="browse-projects">
          Show Skills
        </button>
      )}
      <hr className='projhr' />
      <a href="https://nidhish-dev.github.io/Contact_me/" className="browse-projects contacta">
  Contact me
</a>
      <hr className='projhr' />
    </div>
  );
};

export default Home;
