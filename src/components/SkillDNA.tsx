"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillJourney, graphNodes, projectConnections } from "@/data/resume-data";

export default function SkillDNA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-neural-amber/50 to-transparent" />
          <h2 className="text-sm font-mono text-neural-amber tracking-wider uppercase">
            Career DNA
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-neural-amber/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-semibold text-white mb-6">Career Graph</h3>
            <div className="space-y-4">
              {graphNodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: node.color,
                      boxShadow: `0 0 8px ${node.color}50`,
                    }}
                  />
                  <div className="flex-1 flex items-center gap-3">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${node.size * 20}%`,
                        backgroundColor: `${node.color}40`,
                        border: `1px solid ${node.color}60`,
                      }}
                    />
                    <div className="min-w-fit">
                      <span className="text-sm text-white font-medium">{node.id}</span>
                      <span className="text-xs text-gray-500 ml-2">{node.years}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-neural-border/30">
              <h4 className="text-xs font-mono text-gray-500 mb-3">SKILL CONNECTIONS</h4>
              <div className="space-y-2">
                {projectConnections.slice(0, 4).map((conn, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="text-neural-cyan">{conn.from}</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-neural-green">{conn.to}</span>
                    <span className="text-gray-600 ml-auto">
                      strength: {conn.strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-semibold text-white mb-6">Skill Progression</h3>
            <div className="space-y-6">
              {skillJourney.map((skill, i) => {
                const lastMilestone = skill.milestones[skill.milestones.length - 1];
                return (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{skill.skill}</span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: skill.color }}
                      >
                        {lastMilestone.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-neural-surface rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lastMilestone.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      {skill.milestones.map((m, j) => (
                        <span key={j} className="text-[10px] text-gray-600">
                          {m.company} &apos;{String(m.year).slice(2)}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
