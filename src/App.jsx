import React from 'react';
import LandingPage from './components/landing/LandingPage';
import About from './components/about/About';
import WorkExperience from './components/experience/WorkExperience';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <WorkExperience />
    </>
  );
};

export default App;
