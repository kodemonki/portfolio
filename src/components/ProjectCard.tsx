import { ProjectData } from "../pages/Projects";

const ProjectCard: React.FC<ProjectData> = ({ project }) => {
  const { name, description, technology, url } = project;
  return (
    <div className="Card">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <i>{description}</i>
      </div>
      <div>
        <i>{technology}</i>
      </div>
      <a href={url} target="_blank">
        <b>Visit Link</b>
      </a>     
    </div>
  );
};

export default ProjectCard;
