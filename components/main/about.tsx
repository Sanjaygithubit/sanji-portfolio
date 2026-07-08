"use client";

import { motion } from "framer-motion";
import { Code2, Download, FolderGit2, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-purple-400 font-semibold tracking-widest uppercase">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl hover:border-purple-500 transition-all duration-500"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Hi, I'm Sanjay 👋
            </h3>

            <p className="text-gray-300 leading-8">
              I'm a passionate <span className="text-white font-semibold">MERN Stack Developer</span>
              who enjoys building fast, responsive, and modern web applications.
              I specialize in React, Next.js, Tailwind CSS, Node.js, Express.js,
              and MongoDB while focusing on clean code and exceptional user experiences.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl border border-purple-500/20 bg-[#0c071f] p-5 text-center hover:scale-105 hover:border-purple-500 transition">
                <FolderGit2 className="mx-auto text-purple-400" />
                <h4 className="mt-3 text-3xl font-bold text-white">6+</h4>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-[#0c071f] p-5 text-center hover:scale-105 hover:border-cyan-400 transition">
                <Code2 className="mx-auto text-cyan-400" />
                <h4 className="mt-3 text-3xl font-bold text-white">10+</h4>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>

            </div>

            <a
              href="/projects/resume.pdf"
              download
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-7 py-3 font-semibold text-white transition hover:scale-105"
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
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl hover:border-cyan-500 transition-all duration-500"
          >
            <h3 className="mb-8 text-3xl font-bold text-white">
              Why Hire Me?
            </h3>

            <div className="space-y-6">

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
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0c071f] p-5 transition-all duration-300 hover:border-purple-500 hover:translate-x-2"
                >
                  <Rocket className="text-purple-400 group-hover:rotate-12 transition" />

                  <span className="text-gray-300 group-hover:text-white">
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