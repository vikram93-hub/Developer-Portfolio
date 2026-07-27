import FadeIn from "@/components/motion/FadeIn";
import { portfolio } from "@/lib/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>

          <h2 className="text-5xl font-bold text-center text-white mb-16">
            About Me
          </h2>


          <div className="grid lg:grid-cols-2 gap-16 items-center">


            <div>

              <p className="text-slate-300 text-lg leading-9">

                I'm{" "}
                <span className="text-cyan-400 font-bold">
                  {portfolio.name}
                </span>
                , an Integrated M.Tech Software Engineering student and
                aspiring Full Stack Developer focused on Java backend
                development using Spring Boot.

              </p>


              <p className="mt-8 text-slate-400 leading-9">

                I'm currently building strong foundations in Java,
                Spring Boot, REST APIs, MySQL and Data Structures &
                Algorithms while exploring frontend development concepts
                to become a well-rounded full-stack developer.

              </p>

            </div>


            <div className="grid grid-cols-2 gap-6">


              {[
                ["☕", "Java", "Programming"],
                ["🚀", "Spring Boot", "Backend Development"],
                ["🗄️", "MySQL", "Database"],
                ["🧠", "DSA", "Problem Solving"],
              ].map(([icon, title, subtitle]) => (

                <div
                  key={title}
                  className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
                >

                  <div className="text-4xl mb-4">
                    {icon}
                  </div>


                  <h3 className="text-2xl font-bold text-white">
                    {title}
                  </h3>


                  <p className="text-slate-400 mt-2">
                    {subtitle}
                  </p>

                </div>

              ))}


            </div>


          </div>

        </FadeIn>

      </div>
    </section>
  );
}