import React from "react";
import Project from "../elemenets/projects/projectComponent";

import { ProjectData } from "@/data/projectData";
import SectionHeader from "../elemenets/layout/sectionHeader";
import { categories } from "@/data/navData";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col px-12 items-center w-full pb-8 scroll-mt-32"
    >
      <SectionHeader {...categories[4]} />
    </section>
  );
}
