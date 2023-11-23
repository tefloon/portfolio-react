"use client";

import React, { useState } from "react";
import ThemeSwitcher from "./themeSwitcher";
import { links } from "@/data/navData";

// TODO: Hamburder menu for width < 1000px
export default function Navbar() {
  const [currentSection, setCurrentSection] = useState("Home");

  const liClasses =
    "flex grow items-center justify-items-center self-stretch group";

  const aClasses =
    "py-5 px-3 font-semibold text-[#232326] group-hover:text-[#f1f1f1]";

  return (
    <header className="w-[95%] max-w-[1000px] m-auto bg-[#E89C2D] bg-opacity-100 sticky top-5 rounded z-50">
      <nav className="flex flex-row justify-between">
        <div className="p-5 text"></div>
        <div className="grow max-w-[3rem]"></div>
        <div className="flex grow justify-items-center align-middle">
          <ul className="navlinks grow flex flex-row justify-around items-center px-5 ">
            {links.map((link) => (
              <li className={liClasses}>
                <a className={aClasses} href={link.id}>
                  {link.name}
                </a>
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
