import React from "react";
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";

export const experienceData = [
  {
    id: 0,
    title: "Product Manager",
    description:
      "Responsible for internal tools, recruitment, programming curriculum and staff coaching.",
    location: "Matplaneta Sp z o.o.",
    icon: React.createElement(MdWork),
    date: "2016 - 2023",
  },
  {
    id: 1,
    title: "Programming Teacher",
    description:
      "Responsible for conductiung courses on JAVA, Python, C# and web technologies.",
    location: "Matplaneta Sp z o.o.",
    icon: React.createElement(MdWork),
    date: "2013 - 2016",
  },
  {
    id: 2,
    title: "English Teacher",
    description:
      "Responsible for Conducting English language courses for children and adults at levels A1-C2",
    location: "Top-School",
    icon: React.createElement(MdWork),
    date: "2013 - 2016",
  },
  {
    id: 3,
    title: "Mechnical Engineering",
    description:
      "Computer-aided engineering / Yacht design studies on Faculty of Power and Aeronautical Enginnering.",
    location: "Warsaw Politechnic",
    icon: React.createElement(IoSchool),
    date: "2006 - 2013",
  },
  {
    id: 4,
    title: "Language Certificate",
    description: "Certificate of Proficiency in English (C2)",
    location: "British Council",
    icon: React.createElement(PiCertificateFill),
    date: "2005",
  },
];
