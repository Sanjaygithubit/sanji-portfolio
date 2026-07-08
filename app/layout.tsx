import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = {
  ...siteConfig,
  title: "Sanjay | MERN Stack Developer",
  description:
    "Portfolio of Sanjay, a MERN Stack Developer specializing in React, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Sanjay",
    "MERN Stack Developer",
    "React Developer",
    "Next.js",
    "Tailwind CSS",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          inter.className,
          "bg-[#030014] text-white overflow-x-hidden scroll-smooth antialiased"
        )}
      >
        <StarsCanvas />

        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}