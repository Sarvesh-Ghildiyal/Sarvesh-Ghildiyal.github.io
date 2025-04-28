import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-secondary/20">
      <ParticleBackground />
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-fade-up">
            Sarvesh Ghildiyal
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Building meaningful digital products with responsibility, care, and craft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="flex items-center gap-2">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex items-center gap-2">
              <a href="#contact">
                Contact Me <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
      
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:3rem_3rem] pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default HomeSection;
