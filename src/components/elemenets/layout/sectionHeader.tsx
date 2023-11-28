"use client";

import React, { useEffect } from "react";
import { CategoryType } from "@/data/navData";
import { roboto_s } from "@/lib/fonts";
import { useAtom } from "jotai";
import { currentSection } from "@/context/sectionState";
import { useInView } from "react-intersection-observer";

export default function SectionHeader({
  name,
  fullName,
  id,
  color,
  border,
}: CategoryType) {
  const { ref, inView } = useInView();
  const [_, setSelectedSection] = useAtom(currentSection);

  useEffect(() => {
    if (inView) {
      setSelectedSection({ name: name });
    }
  }, [inView]);

  return (
    <div>
      <h3
        ref={ref}
        className={`px-2 text-center text-3xl md:text-4xl font-extrabold ${roboto_s.className}`}
      >
        {fullName}
      </h3>
      <div
        className={`-mt-1 mb-2 dark:border-b-2 border-b-[.2rem] ${border}`}
      ></div>
    </div>
  );
}
