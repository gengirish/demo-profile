"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "Initializing neural network...",
  "Loading 20 years of career data...",
  "Parsing 25+ technology stacks...",
  "Connecting IoT sensor pipelines...",
  "Building predictive models...",
  "Data Science Portfolio v2.0 ready.",
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= bootLines.length - 1) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 600);
          return prev;
        }
        return prev + 1;
      });
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neural-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-sm max-w-lg px-6">
            {bootLines.slice(0, currentLine + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`mb-2 ${
                  i === currentLine ? "text-neural-green" : "text-neural-cyan/60"
                }`}
              >
                <span className="text-neural-purple mr-2">{">"}</span>
                {line}
                {i === currentLine && (
                  <span className="inline-block w-2 h-4 bg-neural-green ml-1 animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
