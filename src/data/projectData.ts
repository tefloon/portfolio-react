export const ProjectData: ProjectType[] = [
  {
    title: "Gym App",
    imageUrl: "/images/projects/gymAppSession.png",
    color: "hover:bg-cyan-600 dark:hover:bg-cyan-400 ",
    description: [
      `A simple but robust app for tracking progress at the gym.`,
      `Uses Prisma and Supabase to store the workouts in a Postrges database.`,
      `Users can sign up and sigh in using a multitude of OAuth providers (gmail, GitHub, Facebook) as well as using the trtaditional email and password.`,
    ],
    link: "https://github.com/tefloon/gym-app-next_v2",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "NextAuth" },
      { name: "Prisma" },
      { name: "Supabase" },
      { name: "Jōtai" },
      { name: "Tailwind" },
    ],
  },
  {
    title: "WebSockets Chat",
    imageUrl: "/images/projects/chat.png",
    color: "hover:bg-purple-600 dark:hover:bg-purple-400 ",
    description: [
      "A chat application build on top of WebSockets API",
      "Text environment for auto-scrolling behaviour and content generation",
      "Accompanied by a simple node.js WebSocket Server",
    ],
    link: "https://github.com/tefloon/WebSockets",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "WebSockets" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Mock Data Creator",
    imageUrl: "/images/projects/mockResult.png",
    color: "hover:bg-blue-600 dark:hover:bg-blue-400 ",
    description: [
      "A simple tool for creating fake polish personal data in JSON or CSV formats.",
      "It works by randomly mixing and matching all the possible names, surnames and addresses of Polish citizens available in GUS' databases (they are public domain)",
    ],
    link: "https://github.com/tefloon/py_MockDataCreator",
    technologies: [{ name: "Python" }],
  },
];

export type TechnologyType = {
  name: string;
};

type LinkType = {
  title: string;
  url: string;
};

export type ProjectType = {
  title: string;
  imageUrl: string;
  color: string;
  description: string[];
  link: string;
  technologies: TechnologyType[];
};
