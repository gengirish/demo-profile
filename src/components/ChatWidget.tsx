"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";

interface Message { role: "user" | "assistant"; content: string; }

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "👋 Hi! I'm Girish's AI assistant. Ask me about his 14-year career, BuildwithAiGiri (25 free AI MVPs!), or any of his projects!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.message }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Sorry, connection issue. Reach Girish at gengirish@gmail.com!" }]);
    } finally { setLoading(false); }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex flex-col rounded-xl shadow-2xl" style={{ width: "360px", maxWidth: "calc(100vw - 48px)", height: "500px", maxHeight: "80vh", background: "rgba(26,26,46,0.95)", border: "1px solid rgba(0,212,255,0.2)", backdropFilter: "blur(16px)" }}>
          <div className="flex items-center justify-between p-4" style={{ borderBottom: "1px solid #16213e" }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)" }}>
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Girish&apos;s AI Assistant</div>
                <div className="text-xs flex items-center gap-1" style={{ color: "#34d399" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse inline-block" style={{ backgroundColor: "#34d399" }} /> Online
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: "#94a3b8" }}><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={msg.role === "user" ? { backgroundColor: "#00d4ff", color: "#030014", fontWeight: 500 } : { background: "rgba(15,15,35,0.8)", color: "#e2e8f0", border: "1px solid rgba(0,212,255,0.1)" }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-3" style={{ background: "rgba(15,15,35,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}>
                  <Loader2 size={16} className="animate-spin" style={{ color: "#00d4ff" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="p-3 flex gap-2" style={{ borderTop: "1px solid #16213e" }}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask about Girish's career..."
              className="flex-1 rounded-lg px-3 py-2 text-sm focus:outline-none transition-colors"
              style={{ backgroundColor: "#030014", border: "1px solid #16213e", color: "#e2e8f0" }}
              onFocus={e => (e.currentTarget.style.borderColor = "#00d4ff")}
              onBlur={e => (e.currentTarget.style.borderColor = "#16213e")} />
            <button onClick={send} disabled={loading || !input.trim()} className="p-2 rounded-lg transition-all disabled:opacity-50" style={{ backgroundColor: "#00d4ff", color: "#030014" }}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
        style={{ background: "linear-gradient(135deg,#00d4ff,#7c3aed)", boxShadow: "0 0 20px rgba(0,212,255,0.3)" }}>
        {open ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
      </button>
    </>
  );
}
