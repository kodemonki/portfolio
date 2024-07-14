import { Project } from "../pages/Projects";

const ProjectCard: React.FC<Project> = (project) => {
  return (
    <div className="container">
      <div
        className="Card"
        style={{
          animationDelay: `${project.number * 0.25}s`,
        }}
      >
        <div className="box">
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
    </div>
  );
};

export default ProjectCard;
