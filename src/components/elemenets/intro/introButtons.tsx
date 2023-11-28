import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

export default function LinksPanel() {
  const normalButtonClass =
    "flex flex-row font-semibold items-center gap-2 px-4 py-2 rounded-xl dark:bg-neutral-900 bg-neutral-800 hover:bg-neutral-950 hover:text-white hover:border-blue-900 group";

  return (
    <div
      id="links-panel"
      className="pt-4 flex flex-row items-center text-xs sm:text-sm md:test-base gap-5 text-stone-300 select-none"
    >
      <a href="https://github.com/tefloon" className="group outline-none">
        <span className="flex flex-row font-semibold focus-visible: items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-violet-600 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-violet-600 dark:hover:text-white group-focus:outline group-focus:outline-offset-2 dark:group-focus:outline-offset-4 group-focus:outline-4 outline-violet-600">
          <MdDownloadForOffline />
          Download CV
        </span>
      </a>
      <a
        href="https://github.com/tefloon"
        target="_blank"
        className="group outline-none"
      >
        <span
          className={`${normalButtonClass} group-focus:outline group-focus:outline-offset-2 dark:group-focus:outline-offset-4 group-focus:outline-4 outline-green-600`}
        >
          <FaGithub className="group-hover:text-green-500 dark:group-hover:text-green-400 " />
          GitHub
        </span>
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        className="group outline-none"
      >
        <span
          className={`${normalButtonClass} group-focus:outline group-focus:outline-offset-2 dark:group-focus:outline-offset-4 group-focus:outline-4 outline-blue-600`}
        >
          <FaLinkedin className="group-hover:text-blue-500 dark:group-hover:text-blue-400" />
          LinkedIn
        </span>
      </a>
      <a
        href="mailto:antoni.gawlikowski@gmail.com"
        target="_blank"
        className="group outline-none"
      >
        <span
          className={`${normalButtonClass} group-focus:outline group-focus:outline-offset-2 dark:group-focus:outline-offset-4 group-focus:outline-4 outline-blue-600`}
        >
          <IoIosMail className="group-hover:text-orange-500 dark:group-hover:text-orage-400" />
          Mail
        </span>
      </a>
    </div>
  );
}
