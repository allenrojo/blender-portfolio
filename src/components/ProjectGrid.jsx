import { NavLink } from "react-router-dom";
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
  return (
    <NavLink
      to={`/projects/${encodeURIComponent(title)}`}
      className="project-card-link"
      style={{ gridColumn: `span ${span || 1}` }}
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
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
