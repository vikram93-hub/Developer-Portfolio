import { experience } from "@/lib/experience";
import ExperienceCard from "@/components/ui/ExperienceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-20">

      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          title="Education & Learning Journey"
          subtitle="My academic background and the technologies I am continuously learning."
        />

        <div className="mt-12 space-y-8">

          {experience.map((item, index) => (

            <FadeIn key={item.institution} delay={index * 0.15}>

              <ExperienceCard
                company={item.institution}
                role={item.degree}
                duration={item.duration}
                description={item.description}
              />

            </FadeIn>

          ))}

        </div>

      </div>

    </section>
  );
}