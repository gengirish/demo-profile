"use client";
import { experience } from "@/data/resume-data";

const ERA_COLORS: Record<string, string> = {
  "Foundation": "#34d399",
  "Early Career": "#00d4ff",
  "HRTech": "#7c3aed",
  "Founder Mode": "#f472b6",
};
const DEFAULT_COLOR = "#00d4ff";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: "#0f0f23" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Career <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Timeline</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right,#00d4ff,#7c3aed)" }} />
          <p className="mt-4" style={{ color: "#94a3b8" }}>From XLRI MBA to co-founding an agentic AI company — 8 years of building enterprise value</p>
        </div>
        <div className="relative">
          <div className="absolute w-px top-0 bottom-0" style={{ left: "24px", background: "linear-gradient(to bottom,#00d4ff44,#7c3aed44,#f472b644)" }} />
          <div className="space-y-10">
            {[...experience].reverse().map((exp, i) => {
              const color = ERA_COLORS[exp.era] ?? DEFAULT_COLOR;
              return (
                <div key={i} className="relative pl-16">
                  <div className="absolute w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ left: "15px", top: "20px", borderColor: color, backgroundColor: `${color}22` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  </div>
                  <div className="p-6 rounded-xl" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(16px)" }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                        <div className="text-sm" style={{ color: "#64748b" }}>{exp.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono" style={{ color: "#64748b" }}>{exp.period}</div>
                        <span className="px-2 py-1 rounded-full text-xs mt-1 inline-block"
                          style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}33` }}>
                          {exp.era}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded border font-mono"
                          style={{ color: "#94a3b8", backgroundColor: "#030014", borderColor: "#16213e" }}>{t}</span>
                      ))}
                    </div>
                    <div className="pt-4" style={{ borderTop: "1px solid #16213e" }}>
                      <div className="flex justify-between text-xs mb-1" style={{ color: "#64748b" }}>
                        <span>Career Progression</span>
                        <span className="font-mono" style={{ color }}>{Math.round(exp.accuracy * 100)}%</span>
                      </div>
                      <div className="w-full rounded-full h-1.5" style={{ backgroundColor: "#030014" }}>
                        <div className="h-1.5 rounded-full" style={{ width: `${exp.accuracy * 100}%`, backgroundColor: color }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
