import React from "react";
import { roboto_mono } from "@/lib/fonts";
import { TechnologyType } from "@/data/projectData";

export default function Label({ name, important }: TechnologyType) {
  const labelClass = `
    py-2 px-2 text-sm font-semibold uppercase text-gray-200 min-w-[6rem] text-center cursor-default rounded-md transition-all duration-500 ${
      roboto_mono.className
    } 
    ${
      important === true
        ? `bg-blue-700 hover:bg-blue-600`
        : "bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500"
    }
  `;

  return <div className={labelClass}>{name}</div>;
}
