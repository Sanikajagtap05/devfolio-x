import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}