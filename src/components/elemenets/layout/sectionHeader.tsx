import React from "react";
import { CategoryType } from "@/data/navData";
import { roboto_s } from "@/lib/fonts";

export default function SectionHeader({
  name,
  fullName,
  id,
  color,
  border,
}: CategoryType) {
  return (
    <div>
      <h3
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
