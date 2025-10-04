import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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

function PageSections() {
  return (
    <div className="page-sections">
      <section id="home">
        {/* Home content */}
        <h1>3D DESIGNER</h1>
        <p>Scroll to Explore</p>
      </section>

      <section id="projects">
        {/* Projects content */}
        <ProjectGrid />
      </section>

      <section id="contact">
        {/* Contact content */}
        <h1>Contact</h1>
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
