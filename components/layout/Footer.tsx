import { portfolio } from "@/lib/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              {portfolio.name}
            </h2>

            <p className="text-slate-400 mt-2">
              Building scalable full-stack applications using Java, Spring Boot,
              React and MySQL.
            </p>

          </div>

          <div className="flex gap-6 text-3xl">

            <a
              href={portfolio.social.github}
              target="_blank"
              className="text-slate-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={portfolio.social.leetcode}
              target="_blank"
              className="text-slate-400 hover:text-orange-400 transition"
            >
              <SiLeetcode />
            </a>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">

          © 2026 {portfolio.name}. All rights reserved.

        </div>

      </div>

    </footer>
  );
}