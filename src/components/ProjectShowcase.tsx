"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { featuredProjects } from "@/data/resume-data";

export default function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-neural-green/50 to-transparent" />
          <h2 className="text-sm font-mono text-neural-green tracking-wider uppercase">
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-neural-green/50 to-transparent" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:border-neural-cyan/30 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="px-2 py-0.5 text-xs rounded font-mono"
                  style={{
                    backgroundColor: `${project.domainColor}20`,
                    color: project.domainColor,
                  }}
                >
                  {project.domain}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neural-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-neural-cyan/70 mb-3">{project.client}</p>
              <p className="text-sm text-gray-400 mb-4 flex-1">{project.description}</p>

              <div className="mb-4 p-3 rounded-lg bg-neural-green/5 border border-neural-green/20">
                <p className="text-xs text-neural-green">
                  <span className="font-semibold">Impact:</span> {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded bg-neural-surface/80 text-gray-400 border border-neural-border/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
