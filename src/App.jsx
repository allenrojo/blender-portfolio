import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetail from "./components/ProjectDetail";
import "./App.css";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // scroll instantly to the section
        element.scrollIntoView();
      }
    } else {
      // optional: scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

const WordFlip = () => {
  const words = ["DESIGNER", "MODELER", "RENDERER", "DESIGNER"];
  const extendedWords = [...words, ...words];
  const wordHeight = 16;
  const [index, setIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index + 1 === extendedWords.length) {
        setIsTransitionEnabled(false);
        setIndex(words.length); 
        timeoutRef.current = setTimeout(() => {
          setIsTransitionEnabled(true);
          setIndex(0);
        }, 50);
      } else {
        
        setIsTransitionEnabled(true);
        setIndex((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutRef.current);
    };
  }, [index, extendedWords.length, words.length]);

  return (
    <div className="container">
      <span>3D </span>
      <div className="word-flip">
        {extendedWords.map((word, i) => (
          <div
            key={i}
            className="word"
            style={{
              position: "absolute",
              width: "100%",
              height: `${wordHeight}rem`,
              lineHeight: `${wordHeight}rem`,
              transition: isTransitionEnabled ? "transform 0.6s ease" : "none",
              transform: `translateY(${(i - index) * wordHeight}rem)`,
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

function PageSections() {
  return (
    <div className="page-sections">
      <section id="home">
        {/* Home content */}
        <p className="intro-text">
          I'm a skilled 3D generalist, with more than 5 years experience with crafting immersive architectural
          visualizations and detailed product models that elevate every project.
        </p>
        <WordFlip />
        <p className="name-text">ALLEN ROJO</p>
        <div className="footer-container">
          <p className="footer-text">Scroll to Explore</p>
          <img className="down-arrow" src="/arrow.svg" alt="down arrow" />
        </div>
        <p className="work-text">Some of my recent works and personal projects.</p>
      </section>

      <section id="projects">
        {/* Projects content */}
        <ProjectGrid />
      </section>

      <section id="contact">
        {/* Contact content */}
        <p>Contact</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<PageSections />} />
          <Route path="/projects/:title" element={<ProjectDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
