import React from 'react';
import '../styles/experiences.css';

const WorkExperience = () => {
  return (
    <section className="experiences-section" id="experiences">
      <h2>Work Experience</h2>
      <div className="experiences-content">
        <div>
          <h3>FP&A Intern at Grupo Technos</h3>
          <h4>2021 - 2023</h4>
          <ul>
            <li>Provide monthly analysis and reports on expenses and compare them with the budget.</li>
            <li>Create dashboards for department expenses.</li>
            <li>Provide forecasts for upcoming months' expenses.</li>
          </ul>
        </div>
        <div>
          <h3>Engineering Intern at Subsea7</h3>
          <h4>2023 - Present</h4>
          <ul>
            <li>Develop backend scripts for engineering software using Python.</li>
            <li>Create dashboards for project tracking and bug reports.</li>
            <li>Develop low-code automations using PowerAutomate.</li>
            <li>Develop digital solutions using PowerApps.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
