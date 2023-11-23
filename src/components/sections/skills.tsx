import React from "react";
import SectionHeader from "../elemenets/sectionHeader";
import { skillData, skillDataType } from "@/data/skillsData";
import SkillSection from "../elemenets/skillSection";

export default function Skills() {
  const colors = [
    "bg-sky-400  dark:bg-sky-600 ",
    "bg-blue-400 dark:bg-blue-600 ",
    "bg-indigo-400 dark:bg-indigo-600 ",
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center w-full scroll-mt-24"
    >
      <SectionHeader header="My Skills" />
      <div className="flex flex-col gap-10 w-full">
        {skillData.map((skillSection, index) => (
          <SkillSection
            key={index}
            {...skillSection}
            colorString={colors[index % colors.length]}
          />
        ))}
      </div>
    </section>
  );
}
