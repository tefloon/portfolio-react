import Intro from "@/components/sections/intro";
import Navbar from "@/components/elemenets/layout/navbar";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import VSpacer from "@/components/elemenets/layout/vSpacer";
import InfoPanel from "@/components/sections/infoPanel";
import InfoToggle from "@/components/elemenets/infoToggle";

export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto">
      <Navbar />
      <Intro />
      <VSpacer />
      <Skills />
      <VSpacer />
      <Projects />
    </main>
  );
}
