import { useEffect, useState } from "react";
import { getProjects } from "../service/apiRequests";
import ProjectCard from "./ProjectCard";

export interface Project {
  name: string;
  description: string;
  url: string;
  number: number;
  x: number;
  y: number;
  order: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((data: Project[]) => setProjects(data));
  }, []);

  return (
    <>
      <div className="Projects">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              number={index}
              name={project.name}
              description={project.description}
              url={project.url}
              x={0}
              y={0}
              order="default"
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
