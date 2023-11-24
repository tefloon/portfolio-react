"use client";

import React from "react";

import SkillLabel from "./skillLabel";

import { skillSectionType } from "@/data/skillsData";
import { motion } from "framer-motion";
import { roboto_slab } from "@/lib/fonts";

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
        className={`text-xl md:text-2xl transition-all ${roboto_slab.className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        {category}
      </motion.h3>
      <hr className="border-b-1 border-neutral-300 pb-2" />
      {skills && (
        <motion.div
          className="grid md:grid-auto-fit gap-2 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          {skills.map((skill, index) => (
            <SkillLabel
              key={index}
              name={skill.name}
              important={true}
              color={colorString}
            />
          ))}
        </motion.div>
      )}
      <motion.div
        className="flex flex-row flex-wrap gap-2 py-2 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        {libraries.map((library, index) => (
          <SkillLabel
            key={index}
            name={library.name}
            important={false}
            color={colorString}
          />
        ))}
      </motion.div>
    </div>
  );
}
