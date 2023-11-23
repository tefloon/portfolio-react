"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LinksPanel from "../elemenets/linksPanel";

export default function Intro() {
  return (
    <section
      id="home"
      className="flex flex-col items-center w-full scroll-mt-40 pb-10"
      aria-description="Section describing the most important information about Antoni"
    >
      <div className="flex flex-col items-center justify-center pb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/images/AntoniGawlikowski_profile.png"
            alt="Profile picture"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-32 w-32 rounded-full object-cover dark:border-stone-300 border-neutral-700 border-4 shadow-xl"
          />
        </motion.div>
        <motion.h3
          className="mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">
            Hi, I'm <span className=" text-sky-400">Antek</span>.
          </span>{" "}
          I'm a <span className="font-bold">front-end</span> with{" "}
          <span className="font-bold">3 years</span> of experience with{" "}
          <span className="underline">React (Next.js)</span>.
        </motion.h3>
      </div>
      <LinksPanel />
    </section>
  );
}
