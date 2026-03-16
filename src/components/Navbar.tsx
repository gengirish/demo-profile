"use client";
import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { background: "rgba(26,26,46,0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid #16213e" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-mono font-bold text-lg" style={{ color: "#00d4ff" }}>
            <Terminal size={20} />
            <span>girish.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium transition-colors duration-200" style={{ color: "#94a3b8" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>{link.label}</a>
            ))}
            <a href="mailto:gengirish@gmail.com"
              className="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
              style={{ borderColor: "#00d4ff", color: "#00d4ff" }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#00d4ff"; e.currentTarget.style.color = "#030014"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#00d4ff"; }}>
              Hire Me
            </a>
          </div>
          <button className="md:hidden" style={{ color: "#94a3b8" }} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4" style={{ background: "rgba(26,26,46,0.95)", borderTop: "1px solid #16213e" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="block px-4 py-3 transition-colors" style={{ color: "#94a3b8" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00d4ff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>{link.label}</a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
