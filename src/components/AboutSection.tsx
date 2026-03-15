import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutSection = () => {
  const [showDeeper, setShowDeeper] = useState(false);

  return (
    <section id="about">
      <div className="container-section">
        <h2 className="section-heading">
          About Me<span className="text-accent">.</span>
        </h2>

        <div className="space-y-6 max-w-2xl">
          <p className="prose-body text-foreground/50 italic text-lg sm:text-xl">
            Well, I'm myself trying to figure out!
          </p>

          <p className="prose-body">
            I like <span className="text-accent font-medium">Software</span>. The craft of it — the architecture,
            the elegance of a well-designed system, the satisfaction of software
            as <em>experience</em>.
          </p>

          <p className="prose-body">
            I dream of working in{" "}
            <span className="text-accent font-medium">AI core fundamentals</span> —
            not just using models, but understanding and building them from the ground up.
          </p>

          <p className="prose-body">
            I dream of working at the intersection of{" "}
            <span className="text-accent font-medium">Cognitive Science & AI</span> —
            understanding how minds work, and how machines might learn to do the same.
          </p>

          <p className="prose-body">
            I do want to explore{" "}
            <span className="text-accent font-medium">Quantum Mechanics</span> too.
            Because why not?
          </p>

          <div className="separator-line" />

          <p className="prose-body text-foreground/60">
            So yeah, even I wonder what I'll end up doing. Maybe I just want to do
            it all.
          </p>

          <p className="prose-body font-medium text-foreground/80">
            But I'm smart enough to take one step at a time.
          </p>

          <div className="separator-line" />

          {/* Expandable deeper section */}
          <div>
            <button
              onClick={() => setShowDeeper(!showDeeper)}
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors mono"
            >
              {showDeeper ? "collapse" : "what influences my thinking?"}
              {showDeeper ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>

            {showDeeper && (
              <div className="mt-8 space-y-6 fade-in">
                <p className="prose-body font-medium text-foreground/80">
                  We are living through a genuinely rare moment.
                </p>

                <p className="prose-body">
                  Tim Berners-Lee solved a communication problem at CERN and accidentally gave the
                  world the web. Satoshi Nakamoto published a whitepaper and proposed an entirely new
                  model of human trust. A small team wrote{" "}
                  <em className="text-foreground/70">Attention Is All You Need</em> and rewired how
                  machines process language. These weren't grand plans — they were people who saw
                  something and built it.
                </p>

                <p className="prose-body">
                  What excites me today is raw and specific. Claude Code changing how engineers
                  interact with their codebases. OpenAI and Anthropic pushing what's possible with
                  language. India's own ecosystem —{" "}
                  <span className="text-foreground/70">Wingify, Partex, Sarvam, BrainSightAI, SimpliSmart, Anakin etc</span> — doing
                  serious work quietly. Brain mapping and cognitive neuroscience slowly cracking how
                  biological intelligence actually works. And then the wilder stuff — an XR suit that
                  lets you feel a VR environment, imagine playing something like Ben 10 and actually feeling the
                  transformation. That's not fantasy, that's just an engineering problem waiting to be solved.
                </p>

                <p className="prose-body font-medium text-foreground/70">
                  This is the world being built right now. And I want to be in it — not watching it.
                </p>

                <p className="prose-body">
                  And yes — I see a huge opportunity in{" "}
                  <a
                    href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent"
                  >
                    Agentic Commerce
                  </a>
                  . On the lookout for that as well.
                </p>

                <p className="prose-body italic text-foreground/50">
                  I'm not where I need to be yet. But I will be.
                </p>
              </div>
            )}
          </div>

          <div className="separator-line" />

          <div className="space-y-1 text-sm text-foreground/40 mono">
            <p>B.Tech Computer Science Engineering</p>
            <p>THDC IHET College, Tehri · Affiliated to VMSBUTU, Dehradun · 2021–2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
