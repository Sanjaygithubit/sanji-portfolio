"use client";

import { motion } from "framer-motion";
import { Code2, Download, FolderGit2, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-20 md:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-400 md:text-sm">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-purple-500 md:p-8"
          >
            <h3 className="mb-5 text-3xl font-bold text-white md:text-4xl">
              Hi, I'm Sanjay 👋
            </h3>

            <p className="text-base leading-8 text-gray-300 md:text-lg">
              I'm a passionate{" "}
              <span className="font-semibold text-white">
                MERN Stack Developer
              </span>{" "}
              who enjoys building fast, responsive and modern web
              applications. I specialize in React, Next.js,
              Tailwind CSS, Node.js, Express.js and MongoDB while
              focusing on clean code and exceptional user
              experiences.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-purple-500/20 bg-[#0c071f] p-5 text-center transition hover:scale-105 hover:border-purple-500">
                <FolderGit2 className="mx-auto h-8 w-8 text-purple-400" />
                <h4 className="mt-3 text-3xl font-bold text-white">
                  6+
                </h4>
                <p className="mt-1 text-sm text-gray-400">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/20 bg-[#0c071f] p-5 text-center transition hover:scale-105 hover:border-cyan-400">
                <Code2 className="mx-auto h-8 w-8 text-cyan-400" />
                <h4 className="mt-3 text-3xl font-bold text-white">
                  10+
                </h4>
                <p className="mt-1 text-sm text-gray-400">
                  Technologies
                </p>
              </div>

            </div>

            {/* Button */}
            <a
              href="/resume.pdf"
              download
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] md:inline-flex md:w-auto"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl transition-all duration-500 hover:border-cyan-500 md:p-8"
          >
            <h3 className="mb-8 text-3xl font-bold text-white md:text-4xl">
              Why Hire Me?
            </h3>

            <div className="space-y-4">

              {[
                "Responsive Website Development",
                "Modern UI / UX Design",
                "REST API Integration",
                "Clean & Maintainable Code",
                "Fast Performance Optimization",
                "Mobile Friendly Design",
              ].map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0c071f] p-4 transition-all duration-300 hover:translate-x-2 hover:border-purple-500"
                >
                  <Rocket className="h-6 w-6 text-purple-400 transition group-hover:rotate-12" />

                  <span className="text-base text-gray-300 group-hover:text-white">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};