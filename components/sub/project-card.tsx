import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.35)]"
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">

        <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
          {title}
        </h2>

        <p className="mt-4 flex-1 leading-7 text-gray-300 line-clamp-4">
          {description}
        </p>

        {/* Button */}
        <div className="mt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500 px-5 py-2 text-sm font-semibold text-purple-300 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
            Live Demo
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>

      </div>
    </Link>
  );
};