const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Session Analytics Agent",
      context: "Wingify",
      oneLiner: "MCP-based backend for LLM-assisted session recording analysis.",
      technologies: ["MCP", "Azure OpenAI", "AgentSDK", "Python"],
    },
    {
      title: "Competitor's Research Tool",
      context: "Wingify",
      oneLiner: "Agentic interface that auto-generates competitive analysis reports.",
      technologies: ["MCP", "FastMCP", "React", "Google Sheets API"],
    },
    {
      title: "Skia Coffee",
      context: "Decube Innovation Labs",
      oneLiner: "Real-time order tracking & inventory, integrated across mobile and web.",
      technologies: ["Vue.js", "Firebase", "Shiprocket"],
    },
    {
      title: "Cieszyc",
      context: "College Fest · 600+ attendees",
      oneLiner: "Ticketing, event schedules, and payment workflows for a college fest.",
      technologies: ["Laravel", "PHP", "Spatie"],
    },
  ];

  return (
    <section id="projects">
      <div className="container-section">
        <h2 className="section-heading">
          Projects<span className="text-accent">.</span>
        </h2>

        <div className="max-w-2xl space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <h3 className="text-base font-semibold text-foreground/90 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <span className="text-xs mono text-foreground/25">
                  {project.context}
                </span>
              </div>

              <p className="text-sm text-foreground/50 mt-1">
                {project.oneLiner}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mono text-[10px] px-2 py-0.5 rounded-full border border-foreground/8 text-foreground/35 group-hover:border-accent/20 group-hover:text-accent/60 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {index < projects.length - 1 && (
                <div className="border-t border-foreground/5 mt-6" />
              )}
            </div>
          ))}

          <p className="text-sm text-foreground/25 pt-6 mono">
            deeper specs, full stack details, and more →{" "}
            <a
              href="/Sarvesh_Resume.pdf"
              download
              className="link-accent text-sm"
            >
              resume
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/sarvesh-ghildiyal-6646b722b/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent text-sm"
            >
              linkedin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
