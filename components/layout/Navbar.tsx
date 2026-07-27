import { portfolio } from "@/lib/portfolio";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          {portfolio.name}
        </a>

        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-slate-300 transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}

        </div>

      </nav>

    </header>
  );
}