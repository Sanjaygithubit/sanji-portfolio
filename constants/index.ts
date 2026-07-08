import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
   RxHome,
  RxPerson,
  RxCode,
  RxClipboard,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 45,
    height: 45,
  },
];

export const SOCIALS = [
  {
    name: "linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/s-sanjay-57a3b0368/",
  },
 
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Sanjaygithubit",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 64,
    height: 64,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 64,
    height: 64,
  },
] as const;

export const FULLSTACK_SKILL = [] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "VS Code",
    image: "vscode.png",
    width: 64,
    height: 64,
  },
  {
    skill_name: "Vercel",
    image: "vercel.png",
    width: 64,
    height: 64,
  },
] as const;
export const PROJECTS = [
  {
    title: "EV Spare Parts Website",
    description:
      'A responsive EV Spare Parts website built using React and Tailwind CSS, featuring product listings, category filtering, WhatsApp integration, contact forms, and a modern user interface optimized for all devices.',
    image: "/projects/project1.png",
    link: "https://ev-flame.vercel.app/",
  },
  {
    title: "Premium Construction Company Website",
    description:
      'Developed a premium construction company website focused on showcasing construction services, project portfolio, company expertise, and customer engagement. The website features responsive layouts, interactive UI elements, and optimized performance for desktop and mobile users.',
    image: "/projects/project2.png",
    link: "https://construction-e4wi-eight.vercel.app/",
  },
  {
    title: "Weather Report Application",
    description:
    'Developed a responsive weather application that provides real-time weather information using a weather API. The application allows users to search for any city and view current temperature, weather conditions, humidity, wind speed, and other essential weather details through a clean, user-friendly interface optimized for both desktop and mobile devices.',
    image: "/projects/project3.png",
    link: "https://weather-report-app-xi.vercel.app/",
  },
   {
    title: "Netflix Login System with Mock Backend",
    description:
    'Developed a Netflix-inspired login application featuring a responsive user interface and a mock backend for user authentication. The project simulates the complete login workflow by validating user credentials, handling authentication responses, displaying error messages for invalid logins, and redirecting authenticated users to a protected dashboard. It demonstrates frontend-backend integration, form validation, and API communication in a realistic development environment.',
    image: "/projects/project4.png",
    link: "https://netflix-clone-frontend-vert.vercel.app/",
  },

] as const;


export const FOOTER_DATA = [
  {
    title: "Navigation",
    data: [
      {
        name: "Home",
        icon: RxHome,
        link: "#home",
      },
      {
        name: "About",
        icon: RxPerson,
        link: "#about",
      },
      {
        name: "Skills",
        icon: RxCode,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: RxClipboard,
        link: "#projects",
      },
    ],
  },

  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Sanjaygithubit",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/s-sanjay-57a3b0368/",
      },
    ],
  },

  {
    title: "Contact",
    data: [
      {
        name: "sanjaydev18@gmail.com",
        icon: null,
        link: "mailto:sanjaydev18@gmail.com",
      },
      {
        name: "Chennai, Tamil Nadu",
        icon: null,
        link: "#",
      },
      {
        name: "Available for Freelance",
        icon: null,
        link: "#",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Tech Stack",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

