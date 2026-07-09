import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 px-5 sm:px-6 md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Here are some of my recent projects showcasing my experience
            in MERN Stack development, responsive UI design, API
            integration, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
};