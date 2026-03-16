"use client";
import { personalInfo, domains, certifications } from "@/data/resume-data";
import { BookOpen, Cpu, Globe2 } from "lucide-react";

export default function AboutSection() {
  const current = certifications.find(c => c.isCurrent);
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "#0f0f23" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Me</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right,#00d4ff,#7c3aed)" }} />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>{personalInfo.summary}</p>
            {current && (
              <div className="p-5 mb-6 rounded-xl" style={{ background: "rgba(26,26,46,0.8)", borderLeft: "4px solid #00d4ff", border: "1px solid rgba(0,212,255,0.15)" }}>
                <div className="flex items-center gap-2 font-semibold mb-2" style={{ color: "#00d4ff" }}>
                  <BookOpen size={16} /><span>Currently Pursuing</span>
                </div>
                <div className="text-white font-medium">{current.title}</div>
                <div className="text-sm" style={{ color: "#94a3b8" }}>{current.issuer}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {personalInfo.currentPursuit?.specializations.map(s => (
                    <span key={s} className="px-2 py-1 text-xs rounded-full" style={{ color: "#00d4ff", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>{s}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="p-5 rounded-xl" style={{ background: "rgba(26,26,46,0.8)", borderLeft: "4px solid #7c3aed", border: "1px solid rgba(124,58,237,0.2)" }}>
              <div className="flex items-center gap-2 font-semibold mb-2" style={{ color: "#7c3aed" }}>
                <Cpu size={16} /><span>🚀 BuildwithAiGiri Initiative</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
                A 25-week commitment to build 25 AI-powered MVPs completely free — 1-hour brainstorm, 7 days of development, full code handover. No fees. No equity. Just building things that matter.
              </p>
              <a href="https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 text-xs transition-colors" style={{ color: "#7c3aed" }}>
                Join the community →
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg text-white mb-6">
              <Globe2 size={20} style={{ color: "#00d4ff" }} /> Industry Domains
            </div>
            <div className="grid grid-cols-2 gap-3">
              {domains.map((d, i) => (
                <div key={i} className="p-4 flex items-center gap-3 rounded-xl transition-all duration-200" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)" }}>
                  <span className="text-2xl">{d.icon}</span>
                  <span className="text-sm" style={{ color: "#cbd5e1" }}>{d.name}</span>
                </div>
              ))}
            </div>
            <div className="p-5 mt-6 rounded-xl" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="text-white font-semibold mb-4">Quick Facts</div>
              <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
                <li>📍 Hyderabad, Telangana, India</li>
                <li>🎓 B.E. CSE — Gogte Institute of Technology (2011)</li>
                <li>🤖 AI work since 2012 (Hindi Reader neural network)</li>
                <li>💻 86+ GitHub repositories</li>
                <li>⭐ 6 LinkedIn recommendations</li>
                <li>🌐 2K+ LinkedIn followers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
