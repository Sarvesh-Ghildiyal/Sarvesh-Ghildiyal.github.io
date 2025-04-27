
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
