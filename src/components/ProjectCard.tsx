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
      {url !== "" && (
        <a href={url} target="_blank">
          <b>Visit Link</b>
        </a>
      )}
       {url === "" && (
        <a href={window.location.href} target="_blank">
          <b>Link TBC</b>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
