/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ProjectCard } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setIsLoading(false);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => {
      clearInterval(loadingInterval);
    };
  }, []);

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Navbar />
        <Hero />
        <About />


      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  </BrowserRouter>
  );
};

export default App;
