"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        delay: index * 0.05,
        duration: 0.4,
      }}
      whileHover={{
        scale: 1.15,
        y: -8,
      }}
      className="cursor-pointer"
      title={name}
    >
     <Image
  src={`/skills/${src}`}
  alt={name}
  width={width}
  height={height}
  style={{
    width: "auto",
    height: "auto",
    maxWidth: "64px",
    maxHeight: "64px",
  }}

        className="transition duration-300 hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
      />
    </motion.div>
  );
};