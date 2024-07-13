import { Project } from "./Projects";

const ProjectCard: React.FC<Project> = (project) => {
  return (
    <div
      className="ProjectCard"
      style={{
        animationDelay: `${project.number * 0.25}s`,
      }}
    >
      <div>
        <b>{project.name}</b>
      </div>
      <div>
        <i>{project.description}</i>
      </div>
      <br />
      <a href={project.url} target="_blank">
        {project.url}
      </a>
    </div>
  );
};

export default ProjectCard;
