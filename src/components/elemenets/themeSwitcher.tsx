"use client";

import React from "react";
import { useTheme } from "@/context/themeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  let buttonClass = `flex px-5 grow justify-items-center items-center bg-neutral-900 rounded-r-lg
  ${theme === "dark" ? "hover:text-yellow-500" : "hover:text-blue-500"}`;

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
