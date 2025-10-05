import { useNavigate } from "react-router-dom";
import { projects } from "../projects.js";
import { useState } from "react";
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

  const handleClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      navigate(`/projects/${encodeURIComponent(title)}`);
    }, 500); // match this to your CSS animation duration
  };

  return (
    <div
      className={`project-card-link ${isAnimating ? "animate-exit" : ""}`}
      style={{ gridColumn: `span ${span || 1}` }}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") handleClick(e); }}
    >
      <div className="project-card">
        <div className="overlay"></div>
        {cover.type === "video" ? (
          <video src={cover.src} autoPlay muted loop playsInline />
        ) : (
          <img src={cover.src} alt={title} />
        )}
        <div className="project-info">
          <div className="project-title">{title}</div>
          <div className="project-tags">
            {tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
