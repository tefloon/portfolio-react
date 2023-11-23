import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

export default function LinksPanel() {
  const normalButtonClass =
    "flex flex-row font-semibold items-center gap-2 px-4 py-2 rounded-xl dark:bg-gray-900 bg-gray-800 hover:bg-gray-800 hover:text-white hover:border-blue-900";

  return (
    <div className="flex flex-row items-center text-md sm:text-xl gap-5 text-stone-300">
      <a href="https://github.com/tefloon">
        <span className="flex flex-row font-semibold items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-purple-600 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-blue-600 dark:hover:text-white">
          <MdDownloadForOffline />
          Download CV
        </span>
      </a>
      <a href="https://github.com/tefloon" target="_blank">
        <span className={normalButtonClass}>
          <FaGithub />
          GitHub
        </span>
      </a>
      <a href="https://github.com/tefloon">
        <span className={normalButtonClass}>
          <FaLinkedin />
          LinkedIn
        </span>
      </a>
    </div>
  );
}
