import React from "react";
import { CategoryType } from "@/data/navData";

export default function SectionHeader({
  name,
  fullName,
  id,
  color,
  border,
}: CategoryType) {
  return (
    <div>
      <h3 className={`px-2 text-center text-4xl`}>{fullName}</h3>
      <div
        className={`-mt-1 mb-2 dark:border-b-2 border-b-[.2rem] ${border}`}
      ></div>
    </div>
  );
}
