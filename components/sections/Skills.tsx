import { skills } from "@/lib/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I use to build modern applications."
        />

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-full border bg-gray-900 border-gray-700 shadow-sm hover:-translate-y-1 hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}