import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Scroll.css';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Project component
const Project = ({ title, description }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Main App component
const Scroll = () => {
  const projects = [
    { title: 'Project 1', description: 'Description 1' },
    { title: 'Project 2', description: 'Description 2' },
    { title: 'Project 3', description: 'Description 3' },
    { title: 'Project 4', description: 'Description 4' },
    { title: 'Project 5', description: 'Description 5' },
    { title: 'Project 6', description: 'Description 6' },
    { title: 'Project 7', description: 'Description 7' },
    { title: 'Project 8', description: 'Description 8' },
    { title: 'Project 9', description: 'Description 9' },
    { title: 'Project 10', description: 'Description 10' },
  ];

  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0.5, filter: 'blur(10px)' }, 
        {
          opacity: 1, 
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="app">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-wrapper"
          ref={el => projectsRef.current[index] = el}
        >
          <Project title={project.title} description={project.description} />
        </div>
      ))}
    </div>
  );
};

export default Scroll;
