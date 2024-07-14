import { useEffect, useState } from "react";
import { getExperience } from "../service/apiRequests";
import ExperienceCard from "../components/ExperienceCard";

export interface ExperienceData {
  experience: Experience;
}

export interface Experience {
  name: string;
  description: string;
  skills: string;
  technology: string;
  number: number;
  role: string;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    getExperience().then((data: Experience[]) => setExperiences(data));
  }, []);

  return (
    <>
      <div className="Page">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              experience={experience}
              key={`${experience.name}${index}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Experience;
