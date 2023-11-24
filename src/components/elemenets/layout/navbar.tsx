"use client";

import React, { useState } from "react";
import ThemeSwitcher from "./themeSwitcher";
import { categories } from "@/data/navData";
import { roboto_s } from "@/lib/fonts";

// TODO: Hamburder menu for width < 1000px
export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("Home");

  const liClasses =
    "flex grow items-center justify-items-center self-stretch group";

  const aClasses = `py-2 px-1 sm:py-4 sm:px-3 outline-none transition-all duration-200 ${roboto_s.className}`;

  return (
    <header className="md:w-[95%] max-w-[1000px] mx-auto text-stone-200 bg-neutral-800 bg-opacity-90 dark:bg-neutral-950 dark:bg-opacity-90 top-0 dark:md:bg-opacity-100  md:top-5 md:rounded-lg mb-12 md:mb-16 z-50 sticky drop-shadow-lg  transition-all duration-200">
      <nav className=" flex flex-row justify-between select-none text-sm sm:text-base transition-all duration-200">
        <div className="grow max-w-[3rem] hidden sm:block"></div>
        <div className="flex grow justify-items-center align-middle ">
          <ul className="navlinks grow flex flex-row justify-between sm:justify-around items-center px-0 sm:px-5 py-2 gap-1 md:gap-0  transition-all duration-200">
            {categories.map((category, index) => (
              <li className={liClasses} key={index}>
                <div
                  className={`flex flex-col items-center justify-center min-w-[6rem] font-semibold rounded-lg focus-within:outline focus-within:outline-offset-2 focus-within:outline-2  ${
                    category.color
                  } ${
                    category.name === currentSection
                      ? "bg-opacity-100 dark:bg-opacity-100 dark:text-white text-neutral-950"
                      : "hover:bg-opacity-100 dark:hover:bg-opacity-100 dark:bg-opacity-0 bg-opacity-0 dark:hover:text-stone-200 hover:text-neutral-900"
                  }`}
                >
                  <a
                    className={`focus:outline-none ${aClasses}`}
                    href={category.id}
                    onClick={() => setCurrentSection(category.name)}
                  >
                    {category.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow max-w-[3rem] hidden sm:block"></div>

        <div className="flex rounded">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
