import { useEffect, useState } from "react";
import { getProjects } from "../service/apiRequests";
import ProjectCard from "../components/ProjectCard";

export interface ProjectData {
  project:Project;
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
      <div className="Page">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`${project.name}${index}`}
              project={project}         
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
