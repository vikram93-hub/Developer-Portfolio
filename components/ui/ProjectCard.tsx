import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]">

      {/* Project Image */}

      <div className="overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={700}
          height={420}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 text-slate-400 leading-8">
          {description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-3">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-white transition hover:bg-slate-800"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}