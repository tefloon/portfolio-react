"use client";

import React from "react";
import TechnologyList from "../technologyList";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { ProjectType } from "@/data/projectData";
import { FaGithub } from "react-icons/fa";

export default function Project({
  title,
  imageUrl,
  color,
  description,
  link,
  technologies,
}: ProjectType) {
  const normalButtonClass =
    "flex flex-row font-semibold items-center gap-2 px-4 py-2 rounded-xl dark:bg-neutral-900 bg-neutral-400 hover:bg-neutral-950 hover:text-white hover:border-blue-900";

  return (
    <motion.article
      className={`flex flex-col w-full group group/card cursor-default transition-colors duration-500 bg-neutral-300 drop-shadow-md shadow-neutral-800 text-neutral-950 dark:bg-neutral-900 rounded-xl`}
    >
      <div className="grid grid-cols-3">
        <div className="col-span-1 group-odd/card:order-2">
          <Image
            src={imageUrl}
            alt={`Screenshot of the GymApp screen for editing a session`}
            quality={95}
            width={444}
            height={487}
            className="mt-5 px-5 py-2 group-hover/card:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="col-span-2 group-odd/card:order-1 p-5 dark:text-stone-200 ">
          <h3 className="text-center text-2xl py-2">{title}</h3>
          <p className="py-4 text-lg whitespace-pre-line">{description}</p>
          <h3 className="text-xl">Technologies used:</h3>
          <div className="border-t-2 dark:border-t dark:border-blue-300 border-blue-400 mt-1 mr-28 bg-red-500"></div>
          <TechnologyList technologies={technologies} />
        </div>
      </div>
      <div id="footer" className="p-4">
        <Link href={link} className="group group/ghlink">
          <span
            className={`${normalButtonClass} bg-neutral-400 dark:text-stone-200 dark:bg-neutral-950 dark:hover:bg-neutral-950  dark:hover:text-white`}
          >
            <FaGithub className="group-hover/ghlink:text-green-500 dark:group-hover/ghlink:text-green-400" />
            Github repo
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
