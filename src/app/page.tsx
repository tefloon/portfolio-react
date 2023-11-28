import IntroSection from "@/components/sections/introSection";
import Navbar from "@/components/elemenets/layout/navbar";
import SkillsSection from "@/components/sections/skillsSection";
import ProjectsSection from "@/components/sections/projectsSection";
import VSpacer from "@/components/elemenets/layout/vSpacer";
import ExperienceSection from "@/components/sections/experienceSection";
import ContactSection from "@/components/sections/contactSection";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <main className="max-w-[1000px] sm:mx-auto mx-0">
        <Navbar />
        <IntroSection />
        <VSpacer />
        <SkillsSection />
        <VSpacer />
        <ProjectsSection />
        <VSpacer />
        <ExperienceSection />
        <VSpacer />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
