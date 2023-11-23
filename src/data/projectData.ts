export const ProjectData: ProjectType[] = [
  {
    title: "Pierwszy projekt",
    imageUrl: "lala",
    description:
      "Pierwszy projekt Ea do dolor amet consequat. Labore laborum anim occaecat pariatur in laboris qui. Sit elit aliqua aliquip ipsum nulla sint officia anim aliqua laboris velit nulla ut. In anim ut excepteur et duis proident. Commodo amet dolore enim aute consectetur aute mollit ex in enim dolor anim velit veniam. Sit eiusmod deserunt non reprehenderit in deserunt elit nulla.",
    links: [
      {
        title: "Github",
        url: "https://github.com/tefloon",
      },
    ],
    technologies: [
      { name: "Next.js", important: true },
      { name: "React", important: true },
      { name: "TypeScript", important: true },
      { name: "NextAuth", important: true },
      { name: "GitHub", important: false },
      { name: "npm", important: false },
      { name: "Tailwind", important: false },
      { name: "Jōtai", important: false },
    ],
  },
  {
    title: "Drugi projekt",
    imageUrl: "lala",
    description:
      "Enim magna quis commodo eu tempor. Incididunt velit adipisicing eu exercitation culpa cillum labore laboris consectetur. Voluptate enim exercitation cillum dolor irure enim. Adipisicing non deserunt elit anim eiusmod enim aliqua Lorem sit anim ullamco esse minim enim. Ullamco ex cillum exercitation culpa. Aute ipsum sunt aute ea velit. Ex nulla laboris in duis est tempor ea ex culpa irure laborum.",
    links: [],
    technologies: [
      { name: "Next.js", important: true },
      { name: "React", important: true },
      { name: "TypeScript", important: true },
      { name: "NextAuth", important: true },
      { name: "GitHub", important: false },
      { name: "npm", important: false },
      { name: "Tailwind", important: false },
      { name: "Jōtai", important: false },
    ],
  },
  {
    title: "Trzeci projekt",
    imageUrl: "lala",
    description:
      "Occaecat exercitation laborum sint cillum pariatur laborum labore elit. Esse ullamco ex enim sit commodo ipsum non laboris consectetur qui excepteur. Sint est in cupidatat magna eiusmod aute qui. Commodo tempor excepteur laborum commodo minim ea cupidatat est sit esse velit ullamco consequat. Excepteur eiusmod et nostrud irure nisi velit adipisicing duis nostrud in dolore.",
    links: [],
    technologies: [
      { name: "Python", important: true },
      { name: "GitHub", important: false },
    ],
  },
];

export type TechnologyType = {
  name: string;
  important: boolean;
};

type LinkType = {
  title: string;
  url: string;
};

export type ProjectType = {
  title: string;
  imageUrl: string;
  description: string;
  links: LinkType[];
  technologies: TechnologyType[];
};
