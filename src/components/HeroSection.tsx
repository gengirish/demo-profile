"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Linkedin, ChevronDown } from "lucide-react";
import { personalInfo, stats } from "@/data/resume-data";

const roles = [
  "Data Scientist",
  "ML Engineer",
  "Big Data Architect",
  "IoT Analytics Leader",
  "Technical Specialist",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          if (displayText.length === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neural-green/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neural-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neural-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-neural-cyan">
            <MapPin size={14} />
            {personalInfo.location}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-white">{personalInfo.name.split(" ").slice(0, -1).join(" ")}</span>
            <br />
            <span className="text-gradient">{personalInfo.name.split(" ").slice(-1)}</span>
          </h1>

          <div className="h-12 flex items-center justify-center mb-6">
            <span className="font-mono text-xl md:text-2xl text-neural-green">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-neural-green ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neural-green/10 border border-neural-green/30 text-neural-green hover:bg-neural-green/20 transition-all hover:glow-green"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-gray-300 hover:text-neural-cyan transition-all"
            >
              View Career Journey
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-xl p-4"
              >
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-neural-cyan/40" size={28} />
      </motion.div>
    </section>
  );
}
