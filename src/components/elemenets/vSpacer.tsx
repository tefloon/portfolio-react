import React from "react";

export default function VSpacer({
  height,
  color,
}: {
  height: number;
  color?: string;
}) {
  return (
    <div style={{ height: `${height}rem` }} className="flex items-center">
      <div
        className={`block border-r-2 h-full ${
          color ? `${color}` : "border-gray-500 dark:border-gray-700"
        } rounded-full`}
      ></div>
    </div>
  );
}
