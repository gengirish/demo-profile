"use client";
import { featuredProjects } from "@/data/resume-data";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  client: string;
  domain: string;
  domainColor: string;
  description: string;
  impact: string;
  tech: string[];
  github?: string;
  url?: string;
}

export default function ProjectShowcase() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: "#030014" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Projects</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right,#00d4ff,#7c3aed)" }} />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>From a neural network in 2012 to multi-agent AI systems today — 14 years of building things that matter.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(featuredProjects as Project[]).map((project, i) => (
            <div key={i} className="p-6 flex flex-col rounded-xl transition-all duration-300" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(16px)" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium border" style={{ color: project.domainColor, borderColor: `${project.domainColor}44`, backgroundColor: `${project.domainColor}11` }}>{project.domain}</span>
                <div className="flex gap-2">
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#64748b" }}><Github size={16} /></a>}
                  {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: "#64748b" }}><ExternalLink size={16} /></a>}
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
              <div className="text-xs font-mono mb-3" style={{ color: "#64748b" }}>{project.client}</div>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#94a3b8" }}>{project.description}</p>
              <div className="p-3 rounded-lg mb-4" style={{ background: "rgba(52,211,153,0.05)", border: "1px solid rgba(52,211,153,0.2)" }}>
                <div className="text-xs font-semibold mb-1" style={{ color: "#34d399" }}>📈 Impact</div>
                <div className="text-xs" style={{ color: "#cbd5e1" }}>{project.impact}</div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => <span key={t} className="px-2 py-0.5 text-xs rounded border font-mono" style={{ color: "#94a3b8", backgroundColor: "#030014", borderColor: "#16213e" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
