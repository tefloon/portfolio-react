export const categories = [
  {
    name: "Home",
    fullName: "",
    id: "#home",
    color: "bg-rose-400 dark:bg-rose-600 focus-within:outline-rose-600",
    border: "border-rose-400 dark:border-rose-600",
  },
  {
    name: "Skills",
    fullName: "My Skills",
    id: "#skills",
    color:
      "bg-fuchsia-400 dark:bg-fuchsia-600 focus-within:outline-fuchsia-600",
    border: "border-fuchsia-400 dark:border-fuchsia-600",
  },
  {
    name: "Projects",
    fullName: "My Recent Projects",
    id: "#projects",
    color: "bg-pink-400 dark:bg-pink-600 focus-within:outline-pink-600",
    border: "border-pink-400 dark:border-pink-600",
  },
  {
    name: "Experience",
    fullName: "My Experience",
    id: "#experience",
    color: "bg-orange-400 dark:bg-orange-600 focus-within:outline-orange-600",
    border: "border-orange-400 dark:border-orange-600",
  },
  {
    name: "Contact",
    fullName: "Contact me",
    id: "#contact",
    color: "bg-amber-400 dark:bg-amber-600 focus-within:outline-amber-600",
    border: "border-amber-400 dark:border-amber-600",
  },
];

export type CategoryType = (typeof categories)[0];
