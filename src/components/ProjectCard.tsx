import { ProjectData } from "../pages/Projects";

const ProjectCard: React.FC<ProjectData> = ({ project }) => {
  const { name, description, technology, url } = project;
  return (
    <div className="Card">       
      <div>
        <b>{name}</b>
      </div>
      <div>
        <i>{description}</i>
      </div>
      <a href={url} target="_blank">
        <img className="Card__img" src="images/static.png" />
      </a>
      <div>
        <i>{technology}</i>
      </div>
    </div>

  );
};

export default ProjectCard;
