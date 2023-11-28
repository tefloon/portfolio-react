import IntroSection from "@/components/sections/introSection";
import Navbar from "@/components/elemenets/layout/navbar";
import SkillsSection from "@/components/sections/skillsSection";
import ProjectsSection from "@/components/sections/projectsSection";
import VSpacer from "@/components/elemenets/layout/vSpacer";
import ExperienceSection from "@/components/sections/experienceSection";

export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto">
      <Navbar />
      <IntroSection />
      <VSpacer />
      <SkillsSection />
      <VSpacer />
      <ProjectsSection />
      <VSpacer />
      <ExperienceSection />
      <VSpacer />
    </main>
  );
}
