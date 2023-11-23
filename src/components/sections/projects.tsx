import React from "react";
import Project from "../elemenets/project";

import { ProjectData } from "@/data/projectData";
import SectionHeader from "../elemenets/sectionHeader";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full scroll-mt-24"
    >
      <SectionHeader header="My Projects" />
      <div className="flex flex-col gap-10">
        {ProjectData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
