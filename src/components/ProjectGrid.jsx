import { NavLink } from "react-router-dom";
import { projects } from "../projects.js"
import "./ProjectGrid.css";

function ProjectGrid() {
    return  (
        <div className ="project-grid">
            {
                projects.map((p,i) => (
                    <ProjectCard key={i} {...p} />
                ))
            }
    </div>
    );
}
export default ProjectGrid;

function ProjectCard({ img, title, tags, span }) {
  return (
    <div className="|">
        <div className="project-card" style={{ gridColumn: `span ${span || 1}` }}>
          <img src={img} alt={title} />
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
