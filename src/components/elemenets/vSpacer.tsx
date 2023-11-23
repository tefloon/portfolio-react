import React from "react";
import { navColors } from "@/data/colors";

export default function VSpacer({ index = 0 }: { index?: number }) {
  return (
    <div className="flex flex-col items-center justify-items-center py-16 ">
      <div className={`w-3 h-3 rounded-full ${navColors[index]}`}></div>
    </div>
  );
}
