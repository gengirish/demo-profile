"use client";
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { personalInfo, stats } from "@/data/resume-data";

const roles = ["Principal Software Engineer", "AI Architect", "Full-Stack Developer", "Tech Lead", "AI MVP Builder"];

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const stateRef = useRef({ roleIdx: 0, typing: true });

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    const tick = () => {
      const { roleIdx, typing } = stateRef.current;
      const role = roles[roleIdx];
      if (typing) {
        if (displayed.length < role.length) {
          setDisplayed(role.slice(0, displayed.length + 1));
          timerId = setTimeout(tick, 65);
        } else {
          timerId = setTimeout(() => { stateRef.current.typing = false; tick(); }, 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(prev => prev.slice(0, -1));
          timerId = setTimeout(tick, 35);
        } else {
          stateRef.current.roleIdx = (roleIdx + 1) % roles.length;
          stateRef.current.typing = true;
          tick();
        }
      }
    };
    timerId = setTimeout(tick, 80);
    return () => clearTimeout(timerId);
   
  }, [displayed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ backgroundColor: "#030014" }}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(0,212,255,0.04)", filter: "blur(120px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(124,58,237,0.04)", filter: "blur(120px)" }} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mb-8" style={{ border: "1px solid rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.05)", color: "#00d4ff" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#34d399" }} />
          Open to opportunities · Hyderabad, India
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          {personalInfo.name.split(" ")[0]}{" "}
          <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <div className="h-12 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-mono" style={{ color: "#00d4ff" }}>
            {displayed}<span className="animate-pulse">|</span>
          </span>
        </div>
        <p className="text-lg max-w-2xl mx-auto mb-4" style={{ color: "#94a3b8" }}>{personalInfo.tagline}</p>
        <div className="flex items-center justify-center gap-2 text-sm mb-10" style={{ color: "#64748b" }}>
          <MapPin size={14} /><span>{personalInfo.location}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200"
            style={{ backgroundColor: "#00d4ff", color: "#030014", boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}>
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
            style={{ border: "1px solid #7c3aed", color: "#7c3aed" }}>
            <Github size={18} /> GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200"
            style={{ border: "1px solid #16213e", color: "#cbd5e1" }}>
            <Mail size={18} /> Email Me
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 text-center rounded-xl" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(16px)" }}>
              <div className="text-3xl font-bold font-mono" style={{ color: "#00d4ff" }}>{stat.value}</div>
              <div className="text-sm mt-1" style={{ color: "#94a3b8" }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a href="#about" className="transition-colors animate-bounce" style={{ color: "#64748b" }}>
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
