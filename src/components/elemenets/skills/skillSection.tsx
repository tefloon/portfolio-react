"use client";

import React from "react";
import { skillSectionType } from "@/data/skillsData";
import Label from "../basic/label";
import { motion } from "framer-motion";

type SkillSectionProps = skillSectionType & { colorString: string };

export default function SkillSection({
  category,
  skills,
  libraries,
  colorString,
}: SkillSectionProps) {
  return (
    <div className="px-4 sm:px-12">
      {/* <h3 className="text-3xl">{category}</h3> */}
      <motion.h3
        className="text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
      >
        {category}
      </motion.h3>
      <hr className="border-b-1 border-neutral-300 pb-2" />
      {skills && (
        <div className="grid md:grid-auto-fit gap-2 px-2">
          {skills.map((skill, index) => (
            <Label
              key={index}
              name={skill.name}
              important={true}
              color={colorString}
            />
          ))}
        </div>
      )}
      <div className="flex flex-row flex-wrap gap-2 py-2 px-2">
        {libraries.map((library, index) => (
          <Label
            key={index}
            name={library.name}
            important={false}
            color={colorString}
          />
        ))}
      </div>
    </div>
  );
}
