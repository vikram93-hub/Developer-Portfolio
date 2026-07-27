import { experience } from "@/lib/experience";
import ExperienceCard from "@/components/ui/ExperienceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-20">

      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          title="Education & Learning"
          subtitle="My academic journey and continuous growth in full-stack development."
        />


        <div className="mt-12 space-y-8">

          {experience.map((item, index) => (

            <FadeIn key={item.company} delay={index * 0.15}>

              <ExperienceCard
                company={item.company}
                role={item.role}
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