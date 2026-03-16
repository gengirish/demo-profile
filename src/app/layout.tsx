import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Girish Hiremath | Principal Software Engineer & AI Architect",
  description: "14 years of enterprise engineering across banking, pharma, telecom, and compliance. Now building AI-powered MVPs with BuildwithAiGiri. Pursuing M.Tech in Data Science & AI at IIIT Dharwad.",
  keywords: ["Girish Hiremath", "Software Engineer", "AI Architect", "Java", "Microservices", "Angular", "Generative AI", "LangChain", "Python", "Hyderabad", "BuildwithAiGiri", "IntelliForge AI"],
  authors: [{ name: "Girish Hiremath", url: "https://www.linkedin.com/in/girish-b-hiremath/" }],
  openGraph: {
    title: "Girish Hiremath | Principal Software Engineer & AI Architect",
    description: "14 years across banking, pharma, telecom & compliance. Now building AI MVPs with BuildwithAiGiri.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Girish Hiremath | Principal Software Engineer & AI Architect",
    description: "14 years across banking, pharma, telecom & compliance. Now building AI MVPs.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: "#030014", color: "#e2e8f0" }}>
        {children}
      </body>
    </html>
  );
}
