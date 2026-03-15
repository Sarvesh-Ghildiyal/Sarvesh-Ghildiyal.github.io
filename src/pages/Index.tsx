import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Grain texture overlay for visual warmth */}
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
