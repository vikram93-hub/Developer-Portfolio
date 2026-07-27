type Props = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

export default function ExperienceCard({
  company,
  role,
  duration,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]">

      <h3 className="text-3xl font-bold text-white">
        {company}
      </h3>

      <p className="mt-2 text-xl font-semibold text-cyan-400">
        {role}
      </p>

      <p className="mt-2 text-slate-500">
        {duration}
      </p>

      <p className="mt-5 leading-8 text-slate-400">
        {description}
      </p>

    </div>
  );
}