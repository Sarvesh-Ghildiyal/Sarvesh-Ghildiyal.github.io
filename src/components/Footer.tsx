import { Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/sarvesh-ghildiyal-6646b722b/",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter className="h-4 w-4" />,
      href: "https://twitter.com/ghildiyal_sarv",
      label: "X",
    },
    {
      icon: <RiDiscordLine className="h-4 w-4" />,
      href: "https://discord.com/users/sarvesh0925",
      label: "Discord",
    },
  ];

  return (
    <footer className="border-t border-foreground/5">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/30">
            © {currentYear} Sarvesh Ghildiyal
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/25 hover:text-accent transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
