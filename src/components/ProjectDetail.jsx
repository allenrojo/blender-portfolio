import { NavLink, useParams } from "react-router-dom";
import { projects } from "../projects.js"
import "./ProjectDetail.css";

function ProjectDetail() {
  const { title } = useParams();
  const project = projects.find(p => p.title === title);

  if (!project) return <div>Project not found</div>;

  return (
      <div> Project Detail </div>

  );
}
export default ProjectDetail;