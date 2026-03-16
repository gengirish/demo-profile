"use client";
import { personalInfo } from "@/data/resume-data";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "#030014", borderTop: "1px solid #16213e" }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-mono font-bold text-xl mb-3" style={{ color: "#00d4ff" }}>girish.dev</div>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              Principal Software Engineer & AI Architect. AI work since 2012. Now building 25 AI MVPs free with BuildwithAiGiri.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
              {["About", "Skills", "Experience", "Projects", "Testimonials"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: "#94a3b8" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00d4ff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Connect</div>
            <div className="space-y-3">
              {[
                { href: personalInfo.linkedin, icon: <Linkedin size={16} />, label: "LinkedIn" },
                { href: personalInfo.github, icon: <Github size={16} />, label: "GitHub (86+ repos)" },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: personalInfo.email },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00d4ff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
            <div className="mt-5 p-4 rounded-lg" style={{ border: "1px solid rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.05)" }}>
              <div className="text-sm font-semibold mb-1" style={{ color: "#7c3aed" }}>🚀 Want a free AI MVP?</div>
              <a href="https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t" target="_blank" rel="noopener noreferrer"
                className="text-xs transition-colors" style={{ color: "#94a3b8" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#7c3aed")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
                Join the BuildwithAiGiri community →
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ borderTop: "1px solid #16213e", color: "#64748b" }}>
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Girish Hiremath. Made with</span>
            <Heart size={14} style={{ color: "#f472b6", fill: "#f472b6" }} />
          </div>
          <a href="https://www.intelliforge.tech/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors" style={{ color: "#64748b" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00d4ff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}>
            Built by <span className="font-semibold ml-1" style={{ color: "#00d4ff" }}>IntelliForge AI</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
