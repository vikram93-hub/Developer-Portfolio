import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { portfolio } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">


        <h2 className="text-2xl font-black text-cyan-400">
          {portfolio.name}
        </h2>


        <p className="text-center text-slate-400">
          Building full-stack applications and improving every day.
        </p>


        <div className="flex gap-6 text-2xl">


          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white hover:scale-110"
          >
            <FaGithub />
          </a>


          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-blue-400 hover:scale-110"
          >
            <FaLinkedin />
          </a>


          <a
            href={portfolio.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-orange-400 hover:scale-110"
          >
            <SiLeetcode />
          </a>


        </div>


        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>


      </div>

    </footer>
  );
}