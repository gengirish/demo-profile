"use client";
import { testimonials } from "@/data/resume-data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: "#0f0f23" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What People <span style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed,#f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Say</span></h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(to right,#00d4ff,#7c3aed)" }} />
          <p className="mt-4" style={{ color: "#94a3b8" }}>6 LinkedIn recommendations — here are the highlights</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-xl" style={{ background: "rgba(26,26,46,0.8)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(16px)" }}>
              <Quote size={28} style={{ color: "rgba(0,212,255,0.3)" }} className="mb-4" />
              <p className="leading-relaxed mb-6 italic" style={{ color: "#cbd5e1" }}>{t.text}</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #16213e" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)" }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-xs" style={{ color: "#64748b" }}>{t.relationship}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
