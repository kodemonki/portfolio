import { ExperienceData } from "../pages/Experience";

const ExperienceCard: React.FC<ExperienceData> = ({ experience }) => {
  const { name, role, description, skills, technology, date, url } = experience;
  return (
    <div className="Card">
      <div>
        <b>
          {name} - {role} - {date}
        </b>
      </div>
      <div>
        <i>{skills}</i>
      </div>
      <div>
        <i>{technology}</i>
      </div>
      <div>{description}</div>
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
      <br />
    </div>
  );
};

export default ExperienceCard;
