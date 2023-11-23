"use client";

import React, { useState } from "react";
import ThemeSwitcher from "./themeSwitcher";
import { categories } from "@/data/navData";
import { navColors } from "@/data/colors";
import InfoToggle from "../infoToggle";

// TODO: Hamburder menu for width < 1000px
export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("Home");

  const liClasses =
    "flex grow items-center justify-items-center self-stretch group";

  const aClasses = "py-4 px-3 ";

  return (
    <header className="w-[95%] max-w-[1000px] mx-auto text-stone-200 bg-neutral-800 bg-opacity-90 dark:bg-neutral-950 dark:bg-opacity-100 top-5 rounded-lg mb-12 z-50 sticky">
      <nav className=" flex flex-row justify-between select-none">
        <div className="grow max-w-[3rem]"></div>
        <div className="flex grow justify-items-center align-middle">
          <ul className="navlinks grow flex flex-row justify-around items-center px-5 py-2">
            {categories.map((link, index) => (
              <li className={liClasses} key={index}>
                <div
                  className={`flex flex-col items-center justify-center min-w-[6rem] font-semibold rounded-lg ${
                    navColors[index]
                  } ${
                    link.name === currentSection
                      ? "bg-opacity-100 dark:bg-opacity-100 dark:text-white text-neutral-950"
                      : "hover:bg-opacity-100 dark:hover:bg-opacity-100 dark:bg-opacity-0 bg-opacity-0 dark:hover:text-stone-200 hover:text-neutral-900"
                  }`}
                >
                  <a
                    className={aClasses}
                    href={link.id}
                    onClick={() => setCurrentSection(link.name)}
                  >
                    {link.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow max-w-[3rem]"></div>

        <div className="flex rounded">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
