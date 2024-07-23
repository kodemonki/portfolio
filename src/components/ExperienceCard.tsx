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
      <ul>
        <div>
          <li>{skills}</li>
          <li>{technology}</li>
        </div>
      </ul>
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
      {showDescription && (
        <>
          <br />
          <div>{description}</div>
        </>
      )}
      {showDescription && (
        <>
          <br />
          <a
            href={"javascript:void(0)"}
            onClick={() => {
              setShowDescription(false);
            }}
          >
            Show Less Detail
          </a>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
