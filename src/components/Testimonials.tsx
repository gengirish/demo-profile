"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/data/resume-data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-neural-pink/50 to-transparent" />
          <h2 className="text-sm font-mono text-neural-pink tracking-wider uppercase">
            Testimonials
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-neural-pink/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 relative"
            >
              <Quote className="text-neural-pink/20 mb-4" size={32} />
              <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-neural-border/30 pt-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-gray-500">{t.relationship}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
