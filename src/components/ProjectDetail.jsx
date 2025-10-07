import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../projects.js";

import Footer from "./Footer.jsx";

import "./ProjectDetail.css";

function ProjectDetail() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.title === decodedTitle);
    setProject(foundProject);

    window.scrollTo(0, 0);
  }, [decodedTitle]);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="project-detail-container">
      <Link to="/#projects" className="back-home-link">
        ← Back to Projects
      </Link>
      <p className="details"> {project.title}</p>
      <p className="details">[description] {project.description}</p>
      <MediaColumn
        images={project.images || []}
        videos={project.videos || []}
      />
      <Footer></Footer>
    </div>
  );
}



function MediaColumn({ images = [], videos = [] }) {
  const mediaItems = [
    ...videos.map((src) => ({ type: "video", src })),
    ...images.map((src) => ({ type: "image", src })),
  ];

  if (mediaItems.length === 0) return null;

  return (
    <div className="media-column">
      {mediaItems.map((item, index) =>
        item.type === "video" ? (
          <video
            key={index}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="media-item"
          >
            <source
              src={item.src}
              type={`video/${item.src.split(".").pop()}`}
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={index}
            src={item.src}
            alt={`media-${index}`}
            className="media-item"
          />
        )
      )}
    </div>
  );
}

export default ProjectDetail;
