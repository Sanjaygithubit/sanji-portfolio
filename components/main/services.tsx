"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  ServerCog,
  Rocket,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    icon: LayoutDashboard,
    description:
      "Building fast, responsive and modern user interfaces using React, Next.js and Tailwind CSS.",
  },
  {
    title: "MERN Stack Development",
    icon: ServerCog,
    description:
      "Developing full-stack web applications with MongoDB, Express.js, React and Node.js.",
  },
  {
    title: "UI / UX Design",
    icon: Code2,
    description:
      "Creating clean, modern and user-friendly interfaces with smooth interactions and responsive layouts.",
  },
  {
    title: "Website Deployment",
    icon: Rocket,
    description:
      "Deploying optimized web applications on Vercel with performance, SEO and scalability in mind.",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="relative flex min-h-screen items-center justify-center py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-purple-400 font-semibold">
            What I Do
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            My <span className="text-cyan-400">Services</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.35)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-300">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-purple-400 transition-all duration-300 group-hover:translate-x-2">
                  Learn More
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};