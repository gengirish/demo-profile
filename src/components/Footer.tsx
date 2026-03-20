"use client";

import { Linkedin, MapPin, Mail } from "lucide-react";
import { personalInfo } from "@/data/resume-data";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-neural-border/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Interested in data science, IoT analytics, or Big Data solutions?
            I&apos;d love to connect and discuss how data can drive your business forward.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:border-neural-cyan/30 transition-all text-gray-300 hover:text-neural-cyan"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-gray-400">
            <MapPin size={18} />
            {personalInfo.location}
          </div>
          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card hover:border-neural-cyan/30 transition-all text-gray-300 hover:text-neural-cyan"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
          )}
        </div>

        <div className="text-center">
          <div className="font-mono text-2xl font-bold text-gradient mb-4">
            SRK.
          </div>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Neural AI.
          </p>
          <a
            href="https://www.intelliforge.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs text-neural-cyan hover:text-neural-green transition-colors"
          >
            Built by IntelliForge AI
          </a>
          <div className="mt-2">
            <a
              href="https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-neural-purple transition-colors"
            >
              Want a profile like this? Join our WhatsApp group
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
