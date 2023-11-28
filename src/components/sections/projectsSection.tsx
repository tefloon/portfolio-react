import React from "react";
import Project from "../elemenets/projects/projectComponent";

import { ProjectData } from "@/data/projectData";
import SectionHeader from "../elemenets/layout/sectionHeader";
import { categories } from "@/data/navData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col px-12 items-center w-full pb-8 scroll-mt-32"
    >
      <SectionHeader {...categories[2]} />
      <div className="flex flex-col gap-10 mt-4">
        {ProjectData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
