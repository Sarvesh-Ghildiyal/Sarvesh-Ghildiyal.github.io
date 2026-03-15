const ExperienceSection = () => {
  const experiences = [
    {
      position: "Backend Engineer",
      company: "Wingify",
      period: "Jul 2025 – Jan 2026",
      oneLiner: "Distributed infrastructure, Kafka, AI tooling with MCP & LLMs.",
    },
    {
      position: "Founding Engineer",
      company: "Decube Innovation Labs",
      period: "Dec 2024 – Jul 2025",
      oneLiner: "Early-stage product dev, first client MVP in 6 weeks.",
    },
    {
      position: "Full Stack Developer",
      company: "Vervegen Tech",
      period: "Jun 2024 – Sep 2024",
      oneLiner: "CI/CD pipelines, automated deployments, 50% productivity boost.",
    },
    {
      position: "Virtual Lab Developer",
      company: "IIT Roorkee",
      period: "Jun 2024 – Sep 2024",
      oneLiner: "Chemistry lab simulations with p5.js, Bronze Developer Certification.",
    },
  ];

  return (
    <section id="experience">
      <div className="container-section">
        <h2 className="section-heading">
          Experience<span className="text-accent">.</span>
        </h2>

        <div className="max-w-2xl space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-6 pb-8 last:pb-0 border-l border-foreground/10 hover:border-accent/40 transition-colors duration-300"
            >
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-foreground/15 group-hover:bg-accent transition-colors duration-300" />

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="text-base font-semibold text-foreground/90">
                    {exp.position}
                  </h3>
                  <span className="text-accent text-sm font-medium">
                    @ {exp.company}
                  </span>
                </div>

                <span className="mono text-xs text-foreground/30 block">
                  {exp.period}
                </span>

                <p className="text-sm text-foreground/50 leading-relaxed pt-0.5">
                  {exp.oneLiner}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
