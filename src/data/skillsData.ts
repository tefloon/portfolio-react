export const skillData = [
  {
    category: "Front-End",
    skills: [
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
      { name: "Jotai" },
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
    skills: [
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
    skills: [
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
    skills: [],
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
