import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

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
  const wordHeight = 14;
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
      <p>3D </p>
      <div className="word-flip">
        {extendedWords.map((word, i) => (
          <div
            key={i}
            className="word"
            style={{
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

function ManilaTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Manila",
    hour12: false,
  };

  const formattedTime = time.toLocaleTimeString([], options);
  const gmtOffset = "+8";

  return (
    <p>
      Manila, Philippines: (GMT{gmtOffset}) {formattedTime}
    </p>
  );
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent!");
        e.target.reset();
      },
      (error) => {
        console.log("Failed to send email:", error.text);
        alert("Failed to send message, please try again.");
      }
    );
};
function PageSections() {
  return (
    <div className="page-sections">
      <section id="home">
        {/* Home content */}
        <p className="intro-text">
          I'm a skilled 3D generalist, with more than five years of experience
          with crafting immersive architectural visualizations and detailed
          product models that elevate every project.
        </p>
        <WordFlip />
        <p className="name-text">ALLEN ROJO</p>

        <div className="footer-container">
          <p className="footer-text">Scroll to Explore</p>
          <img className="down-arrow" src="/down-arrow.svg" alt="down arrow" />
        </div>
        <div className="work-container">
          <p className="work-text">
            Some of my recent works and personal projects.
          </p>
          <div className="logo-container">
            <img className="large-logo" src="/blender-logo.svg" alt="logo" />
            <img className="large-logo" src="/photoshop-logo.svg" alt="logo" />
            <img
              className="large-logo"
              src="/illustrator-logo.svg"
              alt="logo"
            />
            <img className="large-logo" src="/figma-logo.svg" alt="logo" />
            <img className="large-logo" src="/unreal-logo.svg" alt="logo" />
            <img className="large-logo" src="/qgis-logo.svg" alt="logo" />
          </div>
        </div>
      </section>

      <section id="projects">
        {/* Projects content */}
        <ProjectGrid />
      </section>

      <section id="contact">
        {/* Contact content */}
        <p className="header-1-contact">BIG IDEAS</p>
        <p className="header-2-contact">start with small conversations</p>
        <form className="contact-section" onSubmit={sendEmail}>
          <label>
            YOUR NAME *
            <input type="text" name="user_name" required />
          </label>
          <label>
            PHONE *
            <input type="tel" name="user_phone" required />
          </label>
          <label>
            YOUR EMAIL *
            <input type="email" name="user_email" required />
          </label>
          <label>
            HOW CAN I HELP YOU *
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button type="submit" className="contact-submit">
            LET'S TALK
            <img className="down-arrow" src="/up-arrow.svg" alt="up arrow" />
          </button>
        </form>

        <div className="footer-container-contact">
          <p>©2025 Allen Rojo</p>

          <ManilaTime></ManilaTime>
        </div>
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
