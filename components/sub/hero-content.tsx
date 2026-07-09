"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative z-20 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 pt-28 pb-16 md:flex-row md:px-12 lg:px-20 lg:pt-40"
    >
      {/* Left Content */}
      <div className="flex w-full flex-1 flex-col items-center md:items-start text-center md:text-left">

        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box inline-flex items-center rounded-full border border-[#7042f88b] px-5 py-2"
        >
          <SparklesIcon className="mr-2 h-5 w-5 text-[#b49bff]" />

          <h1 className="Welcome-text text-xs sm:text-sm">
            Hi! Welcome to my portfolio
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="mt-8 max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Crafting{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Modern Digital
          </span>{" "}
          Experiences
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg"
        >
          I'm <span className="font-semibold text-white">Sanjay</span>, a
          MERN Stack Developer passionate about building fast,
          responsive and user-friendly web applications using
          React, Next.js, Tailwind CSS, Node.js, Express.js and
          MongoDB.
        </motion.p>

      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full flex-1 items-center justify-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Hero Illustration"
          width={650}
          height={650}
          priority
          draggable={false}
          className="h-auto w-[280px] sm:w-[360px] md:w-[500px] lg:w-[620px] select-none"
        />
      </motion.div>
    </motion.section>
  );
};