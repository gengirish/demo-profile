"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Brain, Database, Cpu } from "lucide-react";
import { personalInfo, domains } from "@/data/resume-data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-neural-green/50 to-transparent" />
            <h2 className="text-sm font-mono text-neural-green tracking-wider uppercase">
              About
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-neural-green/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Transforming Data Into
                <span className="text-gradient"> Intelligent Systems</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Brain, label: "Data Science", desc: "ML & Predictive Modeling" },
                  { icon: Database, label: "Big Data", desc: "Hadoop & Spark Ecosystem" },
                  { icon: Cpu, label: "IoT Analytics", desc: "Real-time Sensor Streams" },
                  { icon: Briefcase, label: "20+ Years", desc: "Enterprise Experience" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="glass-card rounded-xl p-4"
                  >
                    <item.icon className="text-neural-cyan mb-2" size={20} />
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Industry Domains</h4>
              <div className="grid grid-cols-2 gap-3">
                {domains.map((domain, i) => (
                  <motion.div
                    key={domain.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 glass-card rounded-lg px-4 py-3"
                  >
                    <span className="text-xl">{domain.icon}</span>
                    <span className="text-sm text-gray-300">{domain.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
