import React from "react";
import SectionHeader from "../elemenets/layout/sectionHeader";
import { skillData } from "@/data/skillsData";
import { categories, CategoryType } from "@/data/navData";
import SkillSection from "../elemenets/skills/skillUsedTech";

export default function SkillsSection() {
  const colors = [
    "bg-sky-400  dark:bg-sky-600 ",
    "bg-blue-400 dark:bg-blue-600 ",
    "bg-indigo-400 dark:bg-indigo-600 ",
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center w-full scroll-mt-32"
    >
      <SectionHeader {...categories[1]} />
      <div className="flex flex-col gap-10 w-full">
        {skillData.map((skillSection, index) => (
          <React.Fragment key={index}>
            <SkillSection
              {...skillSection}
              colorString={colors[index % colors.length]}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
