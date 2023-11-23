import React from "react";
import SectionHeader from "../elemenets/sectionHeader";
import { skillData, skillDataType } from "@/data/skillsData";
import SkillSection from "../elemenets/skillSection";
import { frontColors, webTechColors, programmingColors } from "@/data/colors";

export default function Skills() {
  const colors = [frontColors, webTechColors, programmingColors];

  return (
    <section
      id="skills"
      className="flex flex-col items-center h-[600px] w-full scroll-mt-24"
    >
      <SectionHeader header="My Skills" />
      <div className="flex flex-col gap-10 w-full">
        {skillData.map((skillSection, index) => (
          <SkillSection
            key={index}
            {...skillSection}
            colorSet={colors[index % colors.length]}
          />
        ))}
      </div>
    </section>
  );
}
