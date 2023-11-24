export const ProjectData: ProjectType[] = [
  {
    title: "Gym App",
    imageUrl: "/images/projects/gymAppSession.png",
    color: "hover:bg-cyan-600 dark:hover:bg-cyan-400 ",
    description: `A simple but robust app for tracking progress at the gym. 

Uses Prisma and Supabase to store the workouts in a Postrges database. 

Users can sign up and sigh in using a multitude of OAuth providers (gmail, GitHub, Facebook) as well as using the trtaditional email and password.`,
    link: "https://github.com/tefloon",
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
    title: "Drugi projekt",
    imageUrl: "/images/projects/gymAppSession.png",
    color: "hover:bg-blue-600 dark:hover:bg-blue-400 ",
    description:
      "Enim magna quis commodo eu tempor. Incididunt velit adipisicing eu exercitation culpa cillum labore laboris consectetur. Voluptate enim exercitation cillum dolor irure enim. Adipisicing non deserunt elit anim eiusmod enim aliqua Lorem sit anim ullamco esse minim enim. Ullamco ex cillum exercitation culpa. Aute ipsum sunt aute ea velit. Ex nulla laboris in duis est tempor ea ex culpa irure laborum.",
    link: "",
    technologies: [{ name: "Next.js" }],
  },
  {
    title: "Trzeci projekt",
    imageUrl: "/images/projects/gymAppSession.png",
    color: "hover:bg-purple-600 dark:hover:bg-purple-400 ",
    description:
      "Occaecat exercitation laborum sint cillum pariatur laborum labore elit. Esse ullamco ex enim sit commodo ipsum non laboris consectetur qui excepteur. Sint est in cupidatat magna eiusmod aute qui. Commodo tempor excepteur laborum commodo minim ea cupidatat est sit esse velit ullamco consequat. Excepteur eiusmod et nostrud irure nisi velit adipisicing duis nostrud in dolore.",
    link: "",
    technologies: [{ name: "Python" }, { name: "GitHub" }],
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
  description: string;
  link: string;
  technologies: TechnologyType[];
};
