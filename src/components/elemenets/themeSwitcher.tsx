"use client";

import React from "react";
import { useTheme } from "@/context/themeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        onClick={toggleTheme}
        className="flex px-5 grow justify-items-center items-center bg-red-500 rounded-r bg-opacity-80 hover:bg-opacity-100"
      >
        {theme === "dark" ? (
          <MdOutlineDarkMode className="w-7 h-7" />
        ) : (
          <MdOutlineLightMode className="w-7 h-7" />
        )}
      </button>
    </>
  );
}
