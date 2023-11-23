import Intro from "@/components/sections/intro";
import Navbar from "@/components/elemenets/navbar";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import VSpacer from "@/components/elemenets/vSpacer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between pb-12 pt-20 max-w-[1000px] m-auto">
        <Intro />
        <VSpacer height={4} />
        <Skills />
        {/* <VSpacer height={4} /> */}
        {/* <Projects /> */}
      </main>
    </>
  );
}
