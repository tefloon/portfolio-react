"use client";

import React from "react";
import SectionHeader from "../elemenets/layout/sectionHeader";
import { categories } from "@/data/navData";
import { experienceData } from "@/data/experieceData";
import "react-vertical-timeline-component/style.min.css";
import "@/lib/timeline.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col px-12 items-center w-full pb-8 scroll-mt-32 gap-10"
    >
      <SectionHeader {...categories[3]} />
      <VerticalTimeline animate={false} lineColor="#171717">
        {experienceData.map((item) => (
          <React.Fragment key={item.id}>
            <VerticalTimelineElement
              className="dark:text-red-500"
              icon={item.icon}
              iconClassName="timeline-icon"
              date={item.date}
            >
              <h3 className="dark:text-stone-200 text-xl font-semibold pt-2 !pb-0">
                {item.title}
              </h3>
              <p className="!font-light !-mt-1 italic">{item.location}</p>
              <p className="!font-normal">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
