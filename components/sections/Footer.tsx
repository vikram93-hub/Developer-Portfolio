import { portfolio } from "@/lib/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-slate-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} {portfolio.name}. Built with passion
          and continuous learning.
        </p>


        <div className="flex items-center gap-6 text-2xl">

          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition"
          >
            <FaGithub />
          </a>


          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>


          <a
            href={portfolio.social.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-orange-400 transition"
          >
            <SiLeetcode />
          </a>

        </div>

      </div>

    </footer>
  );
}