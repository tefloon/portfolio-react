"use client";

import React from "react";
import { useTheme } from "@/context/themeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  let buttonClass = `flex px-5 grow justify-items-center items-center rounded-r-lg
  ${
    theme === "dark"
      ? "bg-yellow-500 text-neutral-600 hover:text-neutral-900"
      : "bg-sky-700 text-neutral-300 hover:text-neutral-800"
  }`;

  return (
    <>
      <button onClick={toggleTheme} className={buttonClass}>
        {theme === "dark" ? (
          <MdOutlineLightMode className="w-8 h-8" />
        ) : (
          <MdOutlineDarkMode className="w-8 h-8" />
        )}
      </button>
    </>
  );
}
