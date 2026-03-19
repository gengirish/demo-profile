import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Ravi Kumar Rayapudi | Senior Data Science Specialist Portfolio",
  description:
    "Interactive portfolio of Sai Ravi Kumar Rayapudi — Senior Technical Specialist in Data Science at Otis Elevator Co. with 20+ years of experience across IoT, Big Data, SaaS analytics, and enterprise engineering.",
  keywords: [
    "Sai Ravi Kumar Rayapudi",
    "Data Scientist",
    "Senior Technical Specialist",
    "Otis Elevator",
    "Machine Learning",
    "Big Data",
    "IoT Analytics",
    "Python",
    "Hadoop",
    "Spark",
    "Hyderabad",
    "Data Science Portfolio",
  ],
  authors: [{ name: "Sai Ravi Kumar Rayapudi" }],
  openGraph: {
    title: "Sai Ravi Kumar Rayapudi | Data Science Portfolio",
    description:
      "20+ years transforming raw data into intelligent systems across IoT, SaaS, Big Data, and enterprise platforms.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Ravi Kumar Rayapudi | Data Science Portfolio",
    description:
      "20+ years transforming raw data into intelligent systems across IoT, SaaS, Big Data, and enterprise platforms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
