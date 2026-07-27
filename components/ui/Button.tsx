import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={`
        rounded-xl px-6 py-3 font-semibold transition-all duration-300
        focus:outline-none focus:ring-0
        active:scale-95
        ${
          variant === "secondary"
            ? "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 active:bg-transparent"
            : "bg-cyan-500 text-slate-950 hover:bg-cyan-400 active:bg-cyan-500"
        }
      `}
    >
      {children}
    </Link>
  );
}