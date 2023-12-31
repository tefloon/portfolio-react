"use client";

import { motion } from "framer-motion";
import React from "react";
import { TechnologyType } from "@/data/projectData";
import SimpleLable from "./projects/simpleLable";

type TechListProps = {
  technologies: TechnologyType[];
};

export default function TechnologyList({ technologies }: TechListProps) {
  return (
    <motion.div
      className="flex flex-row gap-2 w-full pt-3 flex-wrap"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: "easeOut",
        duration: 0.1,
      }}
    >
      {technologies.map((technology, id) => (
        <SimpleLable key={id} {...technology} />
      ))}
    </motion.div>
  );
}
