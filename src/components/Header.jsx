import React from 'react';
import '../styles/Header.css'; // Optional for styling

const Header = () => {
  // Smooth scrolling to section
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Portfolio</a></li>
          <li><a href="#experiences" onClick={() => scrollToSection('experiences')}>Experiences</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
