"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Sai Ravi Kumar's AI assistant. Ask me anything about his 20+ years of experience in Data Science, Big Data, IoT analytics, and more!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error("Chat request failed");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content || data.message || "I couldn't process that. Please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please make sure the OPENROUTER_API_KEY environment variable is set, or try again later!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[520px] flex flex-col rounded-2xl overflow-hidden border border-neural-border/50 bg-neural-bg/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="px-4 py-3 border-b border-neural-border/30 bg-neural-surface/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-neural-green" />
                <span className="text-sm font-semibold text-white">
                  Talk to My Resume
                </span>
              </div>
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-neural-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="text-neural-green" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                      msg.role === "user"
                        ? "bg-neural-cyan/20 text-neural-cyan border border-neural-cyan/20"
                        : "bg-neural-surface/80 text-gray-300 border border-neural-border/20"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-neural-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={12} className="text-neural-cyan" />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-neural-green/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={12} className="text-neural-green" />
                  </div>
                  <div className="bg-neural-surface/80 border border-neural-border/20 rounded-xl px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-neural-green/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-neural-green/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-neural-green/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 border-t border-neural-border/30 bg-neural-surface/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Sai's experience..."
                  className="flex-1 bg-neural-bg/50 border border-neural-border/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-neural-cyan/50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2 rounded-lg bg-neural-green/20 text-neural-green hover:bg-neural-green/30 transition-colors disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-neural-green/20 border border-neural-green/30 text-neural-green hover:bg-neural-green/30 transition-all flex items-center justify-center glow-green"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
