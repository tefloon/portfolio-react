import Intro from "@/components/sections/intro";
import Navbar from "@/components/elemenets/navbar";
import Image from "next/image";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-5 items-center justify-between pb-12 pt-24 max-w-[1000px] m-auto">
        <Intro />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
