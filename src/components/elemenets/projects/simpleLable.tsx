import React from "react";
import { roboto_mono } from "@/lib/fonts";

type LabelType = {
  name: string;
};

export default function SimpleLable({ name }: LabelType) {
  const labelClass = `
    py-1 px-1 text-sm sm:px-2 font-bold text-neutral-900 dark:text-stone-100 min-w-[9rem] text-center cursor-default rounded-md transition-all duration-500 select-none border-2 border-neutral-900 dark:border-neutral-700 sm:py-2 ${roboto_mono.className} `;

  return <div className={labelClass}>{name}</div>;
}
