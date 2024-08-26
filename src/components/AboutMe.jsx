import React from 'react';
import '../styles/about.css';

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Hi, I'm Theo!</h2>
          <p><strong>Age:</strong> 24</p>
          <p>
            <strong>Education: </strong> 
            Studying Industrial Engineering with a specialization in Logistics, Economics, and Administration at CEFET/RJ and Software Engineering at Estácio
          </p>
          <p>
            <strong>Current Position: </strong> 
            Intern at Subsea7, where I develop scripts for the backend of engineering software and perform data analytics, all using Python.
          </p>
          <p>
            <strong>Skills: </strong>
            <ul>
              <li>Advanced knowledge in Python, Excel (VBA), PowerBI, PowerAutomate, PowerApps</li>
              <li>Intermediate knowledge in JavaScript, HTML, and CSS</li>
              <li>Basic knowledge in Java</li>
            </ul>
          </p>
          <p>
            <strong>Career Goals: </strong> 
            Looking for job opportunities in software development or data engineering.
          </p>
          <p>
            <strong>Contact Information:</strong>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/theo-santoro-b10764200"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#354569', textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/theossalmeida"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#354569', textDecoration: 'none' }}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:theoalmeida00@gmail.com"
                  style={{ color: '#354569', textDecoration: 'none' }}
                >
                  theoalmeida00@gmail.com
                </a>
              </li>
            </ul>
          </p>
        </div>
        <img src="/profile.jpeg" alt="me" className="about-picture" />
      </div>
    </section>
  );
};

export default AboutMe;
