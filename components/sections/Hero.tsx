import Image from "next/image";
import { portfolio } from "@/lib/portfolio";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/motion/FadeIn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className = "min-h-screen items-center pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <FadeIn>

            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
                🚀 Available for Internship
              </span>

              <p className="text-cyan-400 text-xl mt-8 font-semibold">
                Hello, I'm
              </p>

             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mt-4">

                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

                  {portfolio.name}

                </span>

              </h1>

              <h2 className="text-3xl font-semibold text-slate-200 mt-6">
                {portfolio.title}
              </h2>

              <p className="mt-8 text-lg text-slate-400 leading-9 max-w-xl">
                {portfolio.tagline}
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Button href={portfolio.resume}>
                  Download Resume
                </Button>

                <Button href="#contact" variant="secondary">
                  Contact Me
                </Button>

              </div>

              <div className="flex items-center gap-8 text-3xl mt-12">

                <a
                  href={portfolio.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:scale-110 transition-all"
                >
                  <FaGithub />
                </a>

                <a
                  href={portfolio.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={portfolio.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-orange-400 hover:scale-110 transition-all"
                >
                  <SiLeetcode />
                </a>

              </div>

            </div>

          </FadeIn>

          {/* Right */}

          <FadeIn>

            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[120px] opacity-30"></div>

               <Image
  src={portfolio.profileImage}
  alt={portfolio.name}
  width={420}
  height={420}
  className="relative w-72 sm:w-96 rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.4)] object-cover"/>

              </div>

            </div>

          </FadeIn>

        </div>

      </div>
    </section>
  );
}