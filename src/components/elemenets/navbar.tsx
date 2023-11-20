import React from "react";
import ThemeSwitcher from "./themeSwitcher";

// TODO: Hamburder menu for width < 1000px
export default function Navbar() {
  const liClasses =
    "flex grow items-center justify-items-center self-stretch group";

  const aClasses = "py-5 px-3 group-hover:text-white";

  return (
    <header className="w-[95%] max-w-[1000px] m-auto bg-slate-600 bg-opacity-80 sticky top-5 rounded">
      <nav className="flex flex-row justify-between">
        <div className="p-5 text">logo</div>
        <div className="grow max-w-[3rem]"></div>
        <div className="flex grow justify-items-center align-middle">
          <ul className="navlinks grow flex flex-row justify-between items-center px-5 ">
            <li className={liClasses}>
              <a className={aClasses} href="#home">
                Home
              </a>
            </li>
            <li className={liClasses}>
              <a className={aClasses} href="#skills">
                Skills
              </a>
            </li>
            <li className={liClasses}>
              <a className={aClasses} href="#projects">
                Projects
              </a>
            </li>
            <li className={liClasses}>
              <a className={aClasses} href="https://google.com">
                Experience
              </a>
            </li>
            <li className={liClasses}>
              <a className={aClasses} href="https://google.com">
                Education
              </a>
            </li>
            <li className={liClasses}>
              <a className={aClasses} href="https://google.com">
                About
              </a>
            </li>
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
