import { useEffect, useState } from "react";
import { getProjects } from "../service/apiRequests";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export interface ProjectData {
  project: Project;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  technology: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((data: Project[]) => setProjects(data));
  }, []);

  return (
    <>
      {projects.length > 0 && (
        <div className="Panel__left slide-in-right">
          <div className="CloseBtn">
            <Link to="/">x</Link>
          </div>
          <h2>Projects</h2>
          {projects.map((project, index) => {
            return (
              <ProjectCard key={`${project.name}${index}`} project={project} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Projects;
