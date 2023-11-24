import React from "react";

export default function VSpacer() {
  return (
    <div className="flex flex-col items-center justify-items-center py-16 md:py-32 transition-all duration-200">
      <span className="flex flex-row items-center gap-2">
        <div className="w-[5rem] h-1 border-b border-neutral-700 mb-1"></div>
        <div
          className={`w-2 h-2 rounded-full saturate-200 bg-neutral-700`}
        ></div>
        <div className="w-[5rem] h-1 border-b border-neutral-700 mb-1"></div>
      </span>
    </div>
  );
}
