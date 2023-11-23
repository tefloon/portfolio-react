import React from "react";
import { skillSectionType } from "@/data/skillsData";
import Label from "./label";
import { frontColors } from "@/data/colors";

type SkillSectionProps = skillSectionType & { colorSet: string[] };

export default function SkillSection({
  category,
  skills,
  libraries,
  colorSet,
}: SkillSectionProps) {
  return (
    <div className="px-3">
      <h3 className="text-3xl">{category}</h3>
      <hr className="border-b-1 border-neutral-300 pb-4" />
      <div className="grid grid-auto-fit-sm gap-2 px-2">
        {skills.map((skill, index) => (
          <Label
            key={index}
            name={skill.name}
            important={true}
            color={colorSet[index % colorSet.length]}
          />
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-2 py-2 px-2">
        {libraries.map((library, index) => (
          <Label
            key={index}
            name={library.name}
            important={false}
            color={colorSet[index % colorSet.length]}
          />
        ))}
      </div>
    </div>
  );
}
