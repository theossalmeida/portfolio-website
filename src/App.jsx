import React from 'react';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Intro from './components/Intro';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <AboutMe />
      <MyProjects />
      <WorkExperience />
    </div>
  );
};

export default App;
