import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      let current = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial call to set active section on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a
          href="#home"
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
        >
          [HOME]
        </a>
        <a
          href="#projects"
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
        >
          [PROJECTS]
        </a>
        <a
          href="#contact"
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
        >
          [CONTACT]
        </a>
      </nav>
      <img className="logo" src="/logo.svg"></img>
    </div>
  );
}
export default Navbar;
