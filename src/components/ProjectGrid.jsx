import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";

import { projects } from "../projects.js";

import "./ProjectGrid.css";

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  );
}
export default ProjectGrid;

function ProjectCard({ cover, title, tags, span }) {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  console.log('Is in view:', inView);
  const videoSrc = inView && cover.type === "video" ? cover.src : "";

  const handleClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate(`/projects/${encodeURIComponent(title)}`);
    }, 500); // match this to your CSS animation duration
  };

  // Play video on hover
  const handleMouseEnter = () => {
    if (cover.type === "video" && videoRef.current) {
      videoRef.current.play();
    }
  };
  // Pause and reset video on mouse leave
  const handleMouseLeave = () => {
    if (cover.type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };


  return (
    <div
      ref={ref}
      className={`project-card-link ${isAnimating ? "animate-exit" : ""}`}
      style={{ gridColumn: `span ${span || 1}` }}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") handleClick(e); }}
    >
      <div
        className="project-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overlay"></div>
        {cover.type === "video" ? (
          <video 
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
          />
        ) : (
          <img src={cover.src} alt={title} loading="lazy" />
        )}
        <div className="project-info">
          <div className="project-title">{title}</div>
          <div className="project-tags">
            {tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
