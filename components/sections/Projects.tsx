import FadeIn from "@/components/motion/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold text-white">
              Featured Projects
            </h2>

            <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg">
              Here are some projects I've built while learning Java,
              Spring Boot, React, MySQL, and Full Stack Development.
            </p>

          </div>

        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (
            <FadeIn key={project.title}>
              <ProjectCard
                {...project}
              />
            </FadeIn>
          ))}

        </div>

      </div>
    </section>
  );
}