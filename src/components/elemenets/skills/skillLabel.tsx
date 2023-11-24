import React from "react";
import { roboto_mono } from "@/lib/fonts";

type LabelType = {
  name: string;
  important?: boolean;
  color: string;
};

export default function SkillLabel({ name, important, color }: LabelType) {
  const labelClass = `
    py-1 px-1 text-sm sm:px-2 font-bold text-neutral-900 dark:text-stone-100 min-w-[9rem] text-center cursor-default rounded-md transition-all duration-50 select-none ${
      roboto_mono.className
    } 
    ${
      important === true
        ? `${color} sm:py-4 sm:text-lg dark:hover:text-neutral-900 hover:text-pink-600`
        : "border-2 border-neutral-900 dark:border-neutral-700 sm:py-2"
    }
  `;

  return <div className={labelClass}>{name}</div>;
}
