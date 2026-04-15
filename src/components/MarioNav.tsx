import { useState, useEffect } from "react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const MarioNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[hsl(220,30%,12%,0.95)] backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">🪙</span>
          <span className="font-pixel text-[9px] md:text-[10px] text-foreground">SHIVANSH</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-pixel text-[7px] md:text-[8px] text-foreground/70 hover:text-mario-coin transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-mario-coin after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-pixel text-xs text-foreground"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[hsl(220,30%,12%,0.98)] backdrop-blur-md px-4 pb-4 border-t border-foreground/10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-pixel text-[9px] text-foreground/70 hover:text-mario-coin transition-colors border-b border-foreground/5"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MarioNav;
