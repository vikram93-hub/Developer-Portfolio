"use client";

import { useEffect, useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("home");
const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

<button
  onClick={() => setOpen(!open)}
  className="md:hidden text-3xl text-cyan-400"
>
  ☰
</button>

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }

        });

      },
      {
        threshold: 0.5,
      }
    );


    sections.forEach((section) => observer.observe(section));


    return () => observer.disconnect();

  }, []);


  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        <h1 className="text-2xl font-black text-cyan-400">
          Vikram
        </h1>


        <div className="hidden md:flex gap-8">

          {links.map((link) => (

            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`transition ${
                active === link.toLowerCase()
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {link}
            </a>

          ))}

        </div>


      </div>

{open && (
  <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-6">

    <div className="flex flex-col gap-5">

      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={() => setOpen(false)}
          className="text-slate-300 hover:text-cyan-400"
        >
          {link}
        </a>
      ))}

    </div>

  </div>
)}
    </nav>
  );
}