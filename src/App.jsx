/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import { About, Contact, Experience, AcademyProjects, Feedbacks, Hero, Navbar, Tech, StarsCanvas, ProjectCard } from "./components";


const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <ProjectCard />
        <AcademyProjects />
        <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>
      </div>
    </div>
  </BrowserRouter>
  );
};

export default App;
