"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { easeIn, easeOut, motion } from "framer-motion";
import LinksPanel from "../elemenets/intro/introButtons";
import { roboto_s } from "@/lib/fonts";
import useColorInterpolation from "@/hooks/useColorInterpolation";
import { useInView } from "react-intersection-observer";
import { useAtom } from "jotai";
import { currentSection } from "@/context/sectionState";

export default function IntroSection() {
  const color = useColorInterpolation("#a855f7", "#f97316", 5);

  const { ref, inView } = useInView();
  const [selectedSection, setSelectedSection] = useAtom(currentSection);

  useEffect(() => {
    if (inView) {
      setSelectedSection({ name: "Home" });
    }
  }, [inView]);

  return (
    <section
      id="home"
      className="flex flex-col items-center w-full scroll-mt-40 mt-4 pb-2"
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
            ref={ref}
            src="/images/AntoniGawlikowski_profile.png"
            alt="Profile picture"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-32 w-32 rounded-full object-cover dark:border-stone-300 border-neutral-700 border-4 shadow-xl"
          />
        </motion.div>
        <motion.div
          className={`mt-4 px-12 text-2xl font-light !leading-[1.5] sm:text-3xl md:text-4xl text-center transition-all duration-200 ${roboto_s.className}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: easeOut, duration: 0.2 }}
        >
          <div className="pb-4">
            Hi, my name is&nbsp;
            <span
              style={{ color: color }}
              className={`str1 font-black transition-all duration-200`}
            >
              Antek
            </span>
          </div>
          <div>
            I&apos;m a developer with{" "}
            <b
              className={`text-neutral-800 dark:text-white font-semibold transition-all duration-200`}
            >
              3 years
            </b>{" "}
            of experience
            <br />
            <span className="whitespace-nowrap">
              with <u>React</u> and <u>Next.js</u>
            </span>
          </div>
          <div className="pt-5">
            I have{" "}
            <b
              className={`text-neutral-800 dark:text-white font-semibold transition-all duration-200`}
            >
              over 10 years
            </b>{" "}
            of experience with web development and almost{" "}
            <b
              className={`text-neutral-800 dark:text-white font-semibold transition-all duration-200`}
            >
              15 years
            </b>{" "}
            of programming practice.
          </div>
        </motion.div>
      </div>
      <LinksPanel />
    </section>
  );
}
