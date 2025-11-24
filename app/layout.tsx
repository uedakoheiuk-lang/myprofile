import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineer Portfolio | Business-Oriented Technical Partner",
  description: "Portfolio of a business-oriented AI Engineer specializing in LLMs, RAG, and Agentic workflows for startups and SMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col relative`}
      >
        {/* Fixed Background Image with Overlay */}
        <div className="fixed inset-0 -z-50">
          <div className="absolute inset-0 bg-black/70 z-10" /> {/* Darker overlay for better readability across all sections */}
          <img
            src="/hero-bg.png"
            alt="Background"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        </div>

        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
