import FadeIn from "@/components/motion/FadeIn";

export default function Learning() {
  const items = [
    {
      icon: "🚀",
      title: "Spring Boot",
      description: "Building backend applications with REST APIs, JPA, and database integration.",
    },
    {
      icon: "🧠",
      title: "Data Structures & Algorithms",
      description: "Improving problem-solving skills using Java and practicing coding problems.",
    },
    {
      icon: "⚛️",
      title: "Frontend Development",
      description: "Exploring React, TypeScript, and modern UI development concepts.",
    },
    {
      icon: "☁️",
      title: "Cloud & System Design",
      description: "Learning fundamentals of scalable software architecture.",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>

          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Currently Learning
          </h2>


          <div className="grid md:grid-cols-2 gap-8">

            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-700 bg-slate-900 p-8 hover:border-cyan-400 transition"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </FadeIn>

      </div>

    </section>
  );
}