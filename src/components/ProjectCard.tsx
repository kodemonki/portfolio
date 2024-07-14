import { ProjectData } from "../pages/Projects";

const ProjectCard: React.FC<ProjectData> = ({ project }) => {
  const { name, description, technology, url } = project;
  return (
    <div className="container">
      <div className="Card">
        <div>
          <b>{name}</b>
        </div>
        <hr />
        <div>
          <i>{description}</i>
        </div>
        <div>
          <i>{technology}</i>
        </div>
       
        <hr />  
        <img className="Card__img" src="images/static.png"/>
        <hr />  
        <a href={url} target="_blank">
          {url}
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;
