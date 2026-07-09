"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section className="relative flex min-h-[70vh] md:min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20">

      {/* Heading */}
      <div className="absolute top-10 md:top-16 z-20">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Performance{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              &
            </span>{" "}
            Security
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-400">
            Fast, Secure & Optimized Web Applications
          </p>
        </motion.div>
      </div>

      {/* Lock */}
      <div className="relative z-20 flex flex-col items-center mt-16 md:mt-0">

        <div className="group relative flex flex-col items-center">

          <Image
            src="/lock-top.png"
            alt="Lock Top"
            width={60}
            height={60}
            className="translate-y-6 transition-all duration-300 group-hover:translate-y-10 w-12 md:w-[60px] h-auto"
          />

          <Image
            src="/lock-main.png"
            alt="Lock"
            width={90}
            height={90}
            className="w-20 md:w-[90px] h-auto"
          />

        </div>

        <div className="mt-6 rounded-full border border-purple-500/40 bg-[#0c071f]/80 px-6 py-2 backdrop-blur-md">
          <p className="text-sm tracking-wide text-purple-300">
            Encryption Enabled
          </p>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 z-20 px-6 text-center">
        <p className="max-w-xl text-sm md:text-lg text-gray-300 leading-7">
          Building secure, scalable and high-performance web applications
          using modern technologies with a focus on user privacy and
          reliability.
        </p>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source
            src="/videos/encryption-bg.webm"
            type="video/webm"
          />
        </video>

        <div className="absolute inset-0 bg-[#030014]/60" />
      </div>
    </section>
  );
};