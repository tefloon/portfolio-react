export const skillData = [
  {
    category: "Front-End",
    technologies: [
      { name: "React" },
      { name: "Next.js 13.2+" },
      { name: "Svelte" },
      { name: "SvelteKit" },
      { name: "Astro" },
      { name: "Wordpress" },
    ],
    libraries: [
      { name: "Prisma" },
      { name: "NextAuth" },
      { name: "NextUI" },
      { name: "Jōtai" },
      { name: "Zustand" },
      { name: "Redux" },
      { name: "zod" },
      { name: "famer-motion" },
      { name: "react-query" },
      { name: "react-calendar" },
    ],
  },
  {
    category: "Web technologies",
    technologies: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Tailwind" },
      { name: "WebSockets" },
      { name: "MySQL" },
      { name: "Postgres" },
      { name: "REST APIs" },
    ],
    libraries: [],
  },
  {
    category: "Programming environments & Languages",
    technologies: [
      { name: "Python" },
      { name: "React Native" },
      { name: "C#" },
      { name: "Unity" },
      { name: "Lua" },
      { name: "C++" },
    ],
    libraries: [{ name: "Pandas" }, { name: "MatPlotLib" }, { name: "Jotai" }],
  },
  {
    category: "Tools and systems",
    technologies: [],
    libraries: [
      { name: "GIT" },
      { name: "GitHub" },
      { name: "npm" },
      { name: "PowerShell" },
      { name: "Linux" },
      { name: "Windows" },
      { name: "WSL" },
    ],
  },
];

export type skillDataType = typeof skillData;
export type skillSectionType = (typeof skillData)[0];
