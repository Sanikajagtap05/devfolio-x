import AboutSection from "../components/AboutSection";
import CertificationSection from "../components/CertificationSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillSection";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationSection />
      <Contact />
    </>
  );
}