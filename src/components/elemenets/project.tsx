"use client";

import { motion } from "framer-motion";
import React from "react";
import TechnologyList from "./technologyList";
import { ProjectType } from "@/data/projectData";

export default function Project({
  title,
  imageUrl,
  description,
  technologies,
}: ProjectType) {
  return (
    <motion.article className="flex flex-col w-full group bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-xl">
      <div className="grid grid-cols-3">
        <div className="col-span-1 group-odd:order-2">{imageUrl}</div>
        <div className="col-span-2 group-odd:order-1 p-5">
          <h3 className="text-center text-2xl py-2">{title}</h3>
          <p className="py-4 text-lg">{description}</p>
          <TechnologyList technologies={technologies} />
        </div>
      </div>
    </motion.article>
  );
}
