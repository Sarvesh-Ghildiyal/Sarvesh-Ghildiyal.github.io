import { useEffect, useState } from "react";
import { FileText, Linkedin, Github, Mail, Phone, ArrowDown, ExternalLink } from "lucide-react";

function getOSGreeting(): string {
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return "Hello, Android fella";
  if (/iPhone|iPad|iPod/i.test(ua)) return "Hello, iPhone user";
  if (/Macintosh|Mac OS X/i.test(ua)) return "Hello, Macintosh user";
  if (/Windows/i.test(ua)) return "Hello, Windows user";
  if (/Linux/i.test(ua)) return "Hello, Linux hacker";
  return "Hello, curious visitor";
}

const quickLinks = [
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Resume",
    href: "/Sarvesh_Resume.pdf",
    download: true,
  },
  {
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarvesh-ghildiyal-6646b722b/",
    external: true,
  },
  {
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
    href: "https://github.com/Sarvesh-Ghildiyal",
    external: true,
  },
  {
    icon: <Mail className="h-4 w-4" />,
    label: "ghildiyalsarvesh@gmail.com",
    href: "mailto:ghildiyalsarvesh@gmail.com",
  },
  {
    icon: <Phone className="h-4 w-4" />,
    label: "+91 7017348970",
    href: "tel:+917017348970",
  },
];

const HomeSection = () => {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    setGreeting(getOSGreeting());
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative hero-glow overflow-hidden">
      <div className="container-section w-full relative z-10">
        <div className="max-w-2xl space-y-10">
          {/* Greeting */}
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {greeting}
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-3 text-foreground/40 text-base sm:text-lg">
              I'm <span className="text-foreground/70 font-medium">Sarvesh Ghildiyal</span> — backend engineer, systems thinker, and builder.
            </p>
          </div>

          {/* Status pills */}
          <div className="fade-in flex flex-wrap gap-3" style={{ animationDelay: "0.1s" }}>
            {/* Building Connecte */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/[0.05]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-sm text-foreground/60">
                Building{" "}
                <a
                  href="https://connecte.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline underline-offset-2 inline-flex items-center gap-1"
                >
                  Connecte <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            </div>

            {/* Open to roles */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03]">
              <span className="text-sm text-foreground/60">
                Available for full-time roles
              </span>
            </div>
          </div>

          {/* Recruiter pitch */}
          <div className="space-y-6 fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="prose-body">
              If you're here from a job listing — welcome. Here's everything you need.
            </p>

            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.download ? { download: true } : {})}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/10 text-sm text-foreground/70 hover:text-accent hover:border-accent/40 transition-all duration-200"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Teaser */}
          <div className="fade-in" style={{ animationDelay: "0.35s" }}>
            <p className="prose-body italic text-foreground/50">
              Well, if you're interested in knowing me a little more…{" "}
              <a href="#about" className="link-accent not-italic font-medium">
                keep reading
              </a>
              .
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="fade-in pt-6" style={{ animationDelay: "0.5s" }}>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-foreground/25 hover:text-accent transition-colors text-sm"
            >
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="mono text-xs">scroll</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
