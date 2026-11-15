"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import { certifications } from "@/data/resume-data";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-neural-amber/50 to-transparent" />
          <h2 className="text-sm font-mono text-neural-amber tracking-wider uppercase">
            Education & Certifications
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-neural-amber/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-neural-amber/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-neural-amber/10">
                  <Award className="text-neural-amber" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{cert.title}</h3>
                  <p className="text-xs text-neural-cyan mt-1">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                  )}
                  <p className="text-sm text-gray-400 mt-3">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
