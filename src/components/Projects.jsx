import React, { useState } from 'react';
import '../index.css'; // Ensure styles are loaded globally

const Projects = () => {
  const [activeTab, setActiveTab] = useState('react');

  const reactProjects = [
    {
      title: 'Youtube Clone',
      tech: ['HTML', 'CSS', 'ReactJs'],
      link: '#',
    },
    {
      title: 'News App',
      tech: ['HTML', 'Bootstrap', 'ReactJS'],
      link: '#',
    }
  ];

  const jsProjects = [
    {
      title: 'Weather App',
      tech: ['JavaScript', 'API'],
      link: '#',
    },
    {
      title: 'To-Do List',
      tech: ['JavaScript', 'HTML', 'CSS'],
      link: '#',
    }
  ];

  const cssProjects = [
    {
      title: 'CSS Artwork 1',
      tech: ['HTML', 'CSS'],
      link: '#',
    },
    {
      title: 'Animated Card',
      tech: ['CSS3'],
      link: '#',
    }
  ];

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3 className="project-title">{project.title}</h3>
        <p className="tech-used">Tech Stack Used:</p>
        <ul className="tech-list">
          {project.tech.map((tech, i) => (
            <li key={i}><em>{tech}</em></li>
          ))}
        </ul>
        <a className="know-more-btn" href={project.link} target="_blank" rel="noreferrer">
          Know More
        </a>
      </div>
    ));

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <p className="projects-subtitle">Know my work</p>

      <div className="project-tabs">
        <button
          className={activeTab === 'react' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('react')}
        >
          ReactJS Projects
        </button>
        <button
          className={activeTab === 'js' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('js')}
        >
          JavaScript Projects
        </button>
        <button
          className={activeTab === 'css' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('css')}
        >
          CSS Artwork
        </button>
      </div>

      <div className="project-list">
        {activeTab === 'react' && renderProjects(reactProjects)}
        {activeTab === 'js' && renderProjects(jsProjects)}
        {activeTab === 'css' && renderProjects(cssProjects)}
      </div>
    </section>
  );
};

export default Projects;
