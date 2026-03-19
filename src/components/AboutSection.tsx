"use client";
import { personalInfo } from "@/data/resume-data";
import { Cpu } from "lucide-react";

const quickFacts = [
  "📍 Bengaluru, Karnataka, India",
  "🎓 MBA — XLRI Jamshedpur (2016)",
  "🎓 B.Tech — VIT University (2014)",
  "🏆 AIR 159 — Global Mathematical Talent Probe",
  "🪖 Twice recommended by Service Selection Board (IAF & Navy)",
  "👥 12,298+ LinkedIn followers",
];

export default function AboutSection() {
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
            <div className="p-5 mb-6 rounded-xl" style={{ background: "rgba(26,26,46,0.8)", borderLeft: "4px solid #00d4ff", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="flex items-center gap-2 font-semibold mb-2" style={{ color: "#00d4ff" }}>
                <span>🚀</span><span>Currently Building</span>
              </div>
              <div className="text-white font-medium">Cheerio AI — Agentic AI for Enterprise</div>
              <p className="text-sm mt-2" style={{ color: "#94a3b8" }}>{personalInfo.currentPursuit}</p>
            </div>
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
            <div className="p-5 rounded-xl" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="text-white font-semibold mb-4">Quick Facts</div>
              <ul className="space-y-2 text-sm" style={{ color: "#94a3b8" }}>
                {quickFacts.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
