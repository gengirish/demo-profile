import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillDNA from "@/components/SkillDNA";
import ProjectShowcase from "@/components/ProjectShowcase";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <SkillDNA />
        <ProjectShowcase />
        <Certifications />
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
