import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Sanjay | MERN Stack Developer",
  description:
    "Portfolio of Sanjay, a MERN Stack Developer specializing in React, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB. Explore my projects, skills, and web development experience.",

  keywords: [
    "Sanjay",
    "MERN Stack Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
    "Web Developer",
    "Responsive Website",
    "UI Developer",
    "React Portfolio",
    "Next.js Portfolio",
    "Vercel",
  ],

  authors: [
    {
      name: "Muthu Sanjay",
      url: "https://github.com/Sanjaygithubit",
    },
  ],

  creator: "Muthu Sanjay",

  publisher: "Muthu Sanjay",

  applicationName: "Sanjay Portfolio",

  category: "Technology",

  metadataBase: new URL("https://sanji-portfolio.vercel.app"),

  openGraph: {
    title: "Sanjay | MERN Stack Developer",
    description:
      "Explore my portfolio showcasing MERN Stack projects, frontend development, and responsive web applications.",
    url: "https://sanji-portfolio.vercel.app",
    siteName: "Sanjay Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sanjay Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanjay | MERN Stack Developer",
    description:
      "Portfolio of Sanjay showcasing MERN Stack and Frontend Development projects.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};