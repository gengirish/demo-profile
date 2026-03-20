"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories } from "@/data/resume-data";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-neural-cyan/50 to-transparent" />
          <h2 className="text-sm font-mono text-neural-cyan tracking-wider uppercase">
            Technical Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-neural-cyan/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-neural-cyan/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-semibold text-white">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full border transition-all"
                    style={{
                      borderColor: `${category.color}33`,
                      color: category.color,
                      backgroundColor: `${category.color}10`,
                    }}
                  >
                    {skill}
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
