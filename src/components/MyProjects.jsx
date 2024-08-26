import React, { useState } from 'react';

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Weather App',
      description: 'A web application that provides weather information.',
      githubLink: 'https://github.com/theossalmeida/Weather-App',
      technologies: ['Java', 'Spring Boot', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 2,
      name: 'Restaurante Menu App',
      description: 'A full-stack application for managing restaurant menus.',
      githubLink: 'https://github.com/theossalmeida/fullstack-cardapio',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 3,
      name: 'Discord Bot',
      description: 'A Discord bot that provides music playback and server management features.',
      githubLink: 'https://github.com/theossalmeida/Discord-Music-Bot',
      technologies: ['Python'],
    },
    {
      id: 4,
      name: 'Stock Graphic Generator',
      description: 'A tool for generating stock graphics and visualizations based on data inputs.',
      githubLink: 'https://github.com/theossalmeida/aplicativo-cotacoes',
      technologies: ['Python'],
    },
    {
      id: 5,
      name: 'Mario Game',
      description: 'A simple game based on the classic Mario game, built with JavaScript.',
      githubLink: 'https://github.com/theossalmeida/mario-game-js',
      technologies: ['JavaScript', 'HTML', 'CSS'],
    },
    {
        id: 6,
        name: 'Personal Website',
        description: 'A simple website for my portfolio.',
        githubLink: 'https://github.com/theossalmeida/personal-portfolio',
        technologies: ['JavaScript', 'React', 'Vite', 'HTML', 'CSS'],
      },
  ];

  const handleProjectClick = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => handleProjectClick(project.id)} style={{ cursor: 'pointer' }}>
            <strong>{project.name}</strong>
            {selectedProject === project.id && (
              <div className="project-details">
                <p style={{ marginTop: '10px' }}>{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    marginTop: '10px',
                    color: '#4CAF50', /* Change color to fit design */
                    textDecoration: 'underline', /* Underline to indicate a link */
                  }}
                >
                  View on GitHub
                </a>
                <p style={{ marginTop: '10px' }}>Technologies: {project.technologies.join(', ')}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MyProjects;
