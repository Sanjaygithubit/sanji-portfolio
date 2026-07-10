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
      className="
        relative
        z-20
        mx-auto
        grid
        w-full
        max-w-7xl
        grid-cols-1
        items-center
        gap-10
        px-6
        pt-24
        pb-16

        md:grid-cols-2
        md:px-10
        md:pt-28

        lg:px-20
        lg:pt-40
      "
    >
      {/* LEFT */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box inline-flex items-center rounded-full border border-[#7042f88b] px-5 py-2"
        >
          <SparklesIcon className="mr-2 h-5 w-5 text-[#b49bff]" />

          <h1 className="Welcome-text text-xs sm:text-sm">
            Hi! Welcome to my portfolio
          </h1>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="
            mt-8
            font-bold
            leading-[1.05]
            text-white

            text-5xl
            sm:text-6xl
            md:text-5xl
            lg:text-7xl
          "
        >
          Crafting{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Modern Digital
          </span>{" "}
          Experiences
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="
            mt-8
            max-w-xl
            text-gray-300

            text-base
            leading-8

            md:text-lg
          "
        >
          I'm <span className="font-semibold text-white">Sanjay</span>, a MERN
          Stack Developer passionate about building fast, responsive and
          user-friendly web applications using React, Next.js, Tailwind CSS,
          Node.js, Express.js and MongoDB.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="
            mt-10
            flex
            w-full
            flex-col
            gap-4

            sm:flex-row
            sm:w-auto
          "
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-3 text-center font-semibold text-white transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-purple-500 px-8 py-3 text-center font-semibold text-white transition hover:bg-purple-500"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="
          hidden
          md:flex
          justify-end
          items-start
        "
      >
        <Image
          src="/hero-bg.svg"
          alt="Hero"
          width={700}
          height={700}
          priority
          draggable={false}
          className="
            select-none

            w-[340px]

            md:-mt-24
            md:w-[380px]

            lg:-mt-10
            lg:w-[560px]

            xl:w-[650px]
          "
        />
      </motion.div>
    </motion.section>
  );
}