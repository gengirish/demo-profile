"use client";
import { skillCategories } from "@/data/resume-data";

const CAT_COLORS = ["#00d4ff", "#7c3aed", "#f472b6", "#34d399", "#fb923c", "#a78bfa"];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: "#030014" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Expertise</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right,#00d4ff,#7c3aed)" }} />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>8+ years spanning enterprise consulting, B2B SaaS GTM, and agentic AI product building.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => {
            const color = CAT_COLORS[i % CAT_COLORS.length];
            return (
              <div key={i} className="p-6 rounded-xl transition-all duration-300"
                style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(16px)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
                </div>
                <div className="space-y-3">
                  {cat.skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span style={{ color: "#cbd5e1" }}>{skill.name}</span>
                        <span className="font-mono" style={{ color }}>{skill.level}%</span>
                      </div>
                      <div className="w-full rounded-full h-1.5" style={{ backgroundColor: "#030014" }}>
                        <div className="h-1.5 rounded-full transition-all"
                          style={{ width: `${skill.level}%`, backgroundColor: color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
