import React from 'react';
import '../styles/intro.css';

const AboutMe = () => {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-content">
        <div className="intro-text">
          <h2>Hi, I'm Theo!</h2>
          <p>
            Hi, I'm Theo, a passionate and driven individual currently pursuing a dual specialization in Industrial Engineering with a focus on Logistics, Economics, and Administration at CEFET/RJ, and Software Engineering at Estácio. I’m 24 years old and eager to build a career that bridges the gap between engineering and technology.
          </p>
          <p>
            My goal is to leverage my engineering background and software development skills to pursue opportunities in software development or data engineering. I am always looking to learn and grow, driven by a desire to solve complex problems and create impactful solutions.
          </p>
          <p>
            When I’m not immersed in code or analytics, you can find me exploring new technologies, working on personal projects, or staying active through my love for sports. Feel free to connect with me on LinkedIn or check out my projects on GitHub. I’m always open to new opportunities and collaborations.
          </p>
        </div>
        <img src="/profile.jpeg" alt="me" className="intro-picture" />
      </div>
    </section>
  );
};

export default AboutMe;
