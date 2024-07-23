import { useState } from "react";
import { ExperienceData } from "../pages/Experience";

const ExperienceCard: React.FC<ExperienceData> = ({ experience }) => {
  const { name, role, description, skills, technology, date, url } = experience;
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="Card">
      <div>
        <b>
          {name} - {role} - {date}
        </b>
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
      <div>
        <i>{skills}</i>
      </div>
      <div>
        <i>{technology}</i>
      </div>
      {!showDescription && (
        <a
          href={"javascript:void(0)"}
          onClick={() => {
            setShowDescription(true);
          }}
        >
          Show More Detail
        </a>
      )}
      {showDescription && <><br/><div>{description}</div></>}
      {showDescription && (
        <a
          href={"javascript:void(0)"}
          onClick={() => {
            setShowDescription(false);
          }}
        >
          Show Less Detail
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
