"use client";
import { skillCategories } from "@/data/resume-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: "#030014" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Expertise</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right,#00d4ff,#7c3aed)" }} />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>14 years across the full stack — from enterprise Java backends to modern AI/ML systems. AI work since 2012.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div key={i} className="p-6 rounded-xl transition-all duration-300" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(16px)" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ color: cat.color, borderColor: `${cat.color}44`, backgroundColor: `${cat.color}11` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
