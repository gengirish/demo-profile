import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avinash Upadhyay | Co-founder & Strategy Lead — Cheerio AI",
  description:
    "Co-founder of Cheerio AI — Agentic AI platform for enterprise workflows. Raised ₹8 Crore seed (Artha Venture Fund II). 150+ enterprise customers. ₹500Cr+ revenue generated. XLRI MBA. Ex-Darwinbox.",
  keywords: [
    "Avinash Upadhyay",
    "Cheerio AI",
    "Co-founder",
    "Agentic AI",
    "Enterprise SaaS",
    "AI Startup",
    "XLRI MBA",
    "Darwinbox",
    "B2B SaaS",
    "Venture Fundraising",
    "Go-to-Market",
    "LLM Workflows",
    "IntelliForge AI",
  ],
  authors: [
    {
      name: "Avinash Upadhyay",
      url: "https://www.linkedin.com/in/avinashupadhyay24",
    },
  ],
  openGraph: {
    title: "Avinash Upadhyay | Co-founder @ Cheerio AI — Agentic AI for Enterprise",
    description:
      "Co-founded Cheerio AI · ₹8Cr seed raised · 150+ enterprises · ₹500Cr+ revenue impact · XLRI MBA · Ex-Darwinbox.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Upadhyay | Co-founder @ Cheerio AI",
    description:
      "Building agentic AI for enterprise. ₹8Cr raised. 150+ customers. ₹500Cr+ revenue impact. XLRI MBA.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased`}
        style={{ backgroundColor: "#030014", color: "#e2e8f0" }}
      >
        {children}
      </body>
    </html>
  );
}
