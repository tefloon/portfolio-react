import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

export default function LinksPanel() {
  const normalButtonClass =
    "flex flex-row font-semibold items-center gap-2 px-4 py-2 rounded-xl dark:bg-neutral-900 bg-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-blue-900 group";

  return (
    <div className="flex flex-row items-center text-md sm:text-xl gap-5 text-stone-300 select-none">
      <a href="https://github.com/tefloon">
        <span className="flex flex-row font-semibold items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-violet-600 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-violet-600 dark:hover:text-white">
          <MdDownloadForOffline />
          Download CV
        </span>
      </a>
      <a href="https://github.com/tefloon" target="_blank">
        <span className={normalButtonClass}>
          <FaGithub className="group-hover:text-green-500 dark:group-hover:text-green-400" />
          GitHub
        </span>
      </a>
      <a href="https://github.com/tefloon">
        <span className={normalButtonClass}>
          <FaLinkedin className="group-hover:text-blue-500 dark:group-hover:text-blue-400" />
          LinkedIn
        </span>
      </a>
    </div>
  );
}
