"use client";

import Image from "next/image";
import React from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import LinksPanel from "../elemenets/intro/introButtons";

export default function Intro() {
  return (
    <section
      id="home"
      className="flex flex-col items-center w-full scroll-mt-40 mt-0 pb-2"
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
          className="mt-4 px-6 text-2xl font-medium !leading-[1.5] sm:text-3xl md:text-4xl text-center transition-all duration-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: easeOut, duration: 0.2 }}
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="font-bold text-fuchsia-600 dark:text-rose-400">
              Antek
            </span>
            . I &apos;m a <span className="font-bold">web developer</span> with{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              <span className="font-bold">3 years</span> of experience{" "}
            </span>
            <span style={{ whiteSpace: "nowrap" }}>
              with <span className="underline">React (Next.js)</span>
            </span>
            .
          </span>
        </motion.h3>
      </div>
      <LinksPanel />
    </section>
  );
}
