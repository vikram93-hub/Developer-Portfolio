type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center">

      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

      <p className="mt-4 text-lg text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}