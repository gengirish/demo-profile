"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { experience } from "@/data/resume-data";

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-neural-purple/50 to-transparent" />
          <h2 className="text-sm font-mono text-neural-purple tracking-wider uppercase">
            Career Timeline
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-neural-purple/50 to-transparent" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neural-green via-neural-cyan to-neural-purple/30" />

          {experience.map((role, i) => (
            <motion.div
              key={role.period}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 md:pl-20 mb-8"
            >
              <div
                className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full border-2"
                style={{
                  borderColor: role.domainColor,
                  backgroundColor: expanded === i ? role.domainColor : "transparent",
                  boxShadow: expanded === i ? `0 0 12px ${role.domainColor}50` : "none",
                }}
              />

              <div
                className={`glass-card rounded-2xl p-6 cursor-pointer transition-all ${
                  expanded === i ? "border-neural-cyan/30" : ""
                }`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span
                        className="px-2 py-0.5 text-xs rounded font-mono"
                        style={{
                          backgroundColor: `${role.domainColor}20`,
                          color: role.domainColor,
                        }}
                      >
                        Epoch {role.epoch}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">{role.phase}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-2">{role.title}</h3>
                    <p className="text-neural-cyan text-sm">{role.company}</p>
                    <p className="text-xs text-gray-500 mt-1">{role.period}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3 text-xs">
                      <div className="text-center">
                        <div className="font-mono text-neural-green font-bold">
                          {role.accuracy}%
                        </div>
                        <div className="text-gray-600">accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="font-mono text-neural-pink font-bold">
                          {role.loss.toFixed(2)}
                        </div>
                        <div className="text-gray-600">loss</div>
                      </div>
                    </div>
                    {expanded === i ? (
                      <ChevronUp size={18} className="text-gray-500" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-500" />
                    )}
                  </div>
                </div>

                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-neural-border/30"
                  >
                    <p className="text-gray-400 text-sm mb-4">{role.description}</p>
                    <ul className="space-y-2 mb-4">
                      {role.highlights.map((h, j) => (
                        <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-neural-green mt-1">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs rounded bg-neural-surface/80 text-neural-cyan border border-neural-border/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
