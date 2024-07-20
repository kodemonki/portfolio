import { ExperienceData } from "../pages/Experience";

const ExperienceCard: React.FC<ExperienceData> = ({ experience }) => {
  const { name, role, description, skills, technology } = experience;
  return (
      <div className="Card">
        <div>
          <b>{name} - {role}</b>
        </div>
        <div>
          <i>{skills}</i>
        </div>
        <div>
          <i>{technology}</i>
        </div>
        <div>{description}</div>              
        <br/>
      </div>
  );
};

export default ExperienceCard;
