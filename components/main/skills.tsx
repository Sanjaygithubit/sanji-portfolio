import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  FRONTEND_SKILL,
  BACKEND_SKILL,
  OTHER_SKILL,
} from "@/constants";

const TOP_ROW = [
  ...FRONTEND_SKILL,
  ...BACKEND_SKILL,
];

const MIDDLE_ROW = OTHER_SKILL;

const BOTTOM_ROW = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 60,
    height: 60,
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center overflow-hidden py-24"
    >
      <SkillText />

      {/* Top Row */}
      <div className="mt-12 flex max-w-7xl flex-wrap justify-center gap-10">
        {TOP_ROW.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Middle Row */}
      <div className="mt-12 flex max-w-4xl flex-wrap justify-center gap-12">
        {MIDDLE_ROW.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i + 20}
          />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="mt-12 flex max-w-xl justify-center gap-12">
        {BOTTOM_ROW.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i + 40}
          />
        ))}
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};