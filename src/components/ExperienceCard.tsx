import { ExperienceData } from "../pages/Experience";

const ExperienceCard: React.FC<ExperienceData> = ({ experience }) => {
  const { name, role, description, skills, technology } = experience;
  return (
    <div className="container">
      <div className="Card">
        <div>
          <b>{name} - {role}</b>
        </div>
        <hr/>       
        <div>
          <i>{skills}</i>
        </div>
        <div>
          <i>{technology}</i>
        </div>
        <hr/>       
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
