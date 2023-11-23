import React from "react";
import { roboto_mono } from "@/lib/fonts";
import { navColors, frontColors } from "@/data/colors";

type LabelType = {
  name: string;
  important?: boolean;
  color: string;
};

export default function Label({ name, important, color }: LabelType) {
  const labelClass = `
    py-1 px-1 text-sm sm:text-md sm:px-2 sm:py-2 font-bold text-neutral-900 dark:text-white min-w-[9rem] text-center cursor-default rounded-md transition-all duration-500 ${
      roboto_mono.className
    } 
    ${
      important === true
        ? `${color}`
        : "border-2 border-neutral-900 dark:border-neutral-700"
    }
  `;

  return <div className={labelClass}>{name}</div>;
}
