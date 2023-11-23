import React from "react";

export default function VSpacer({ height }: { height: number }) {
  return (
    <div style={{ height: `${height}rem` }} className="flex items-center">
      <div className="block border-r-2 h-full border-gray-500 dark:border-gray-700 rounded-full"></div>
    </div>
  );
}
