import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-foreground/5"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-14">
          <Link
            to="/"
            className="mono text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            SG
          </Link>

          {/* Desktop */}
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-foreground/40 hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <ThemeSwitcher />
          </div>

          {/* Mobile */}
          <div className="flex sm:hidden items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/50 hover:text-foreground transition-colors"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-background/95 backdrop-blur-md border-b border-foreground/5">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-foreground/50 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
