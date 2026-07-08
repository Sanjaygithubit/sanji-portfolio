"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "sanjaydev18@gmail.com",
      link: "mailto:sanjaydev18@gmail.com",
    },
    {
      icon: Phone,
      title: "+91 7826954887",
      value: "Call Me",
      link: "tel:+917826954887",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-purple-400 font-semibold">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            I'm available for internships, freelance projects and full-time opportunities.
            Feel free to contact me.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.link}
                initial={{ opacity: 0, y: 40 }}
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
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.35)] transition-all"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl text-white font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  {item.value}
                </p>

                <div className="mt-6 flex items-center gap-2 text-purple-400 group-hover:translate-x-2 transition">
                  Connect
                  <ArrowUpRight size={18} />
                </div>
              </motion.a>
            );
          })}

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">

          <a
            href="/projects\resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 text-white font-semibold hover:scale-105 transition"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="mailto:sanjaydev18@gmail.com"
            className="rounded-full border border-purple-500 px-8 py-4 text-white hover:bg-purple-600 transition"
          >
            Email Me
          </a>

        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 mt-12">

          <a
            href="https://github.com/Sanjaygithubit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:scale-110 hover:border-purple-500 transition"
          >
            <FaGithub className="text-white text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/s-sanjay-57a3b0368/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:scale-110 hover:border-cyan-500 transition"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>

        </div>

      </div>
    </section>
  );
};