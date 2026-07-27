import SectionHeading from "@/components/ui/SectionHeading";
import { portfolio } from "@/lib/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import FadeIn from "@/components/motion/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-24 scroll-mt-20">

      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          title="Contact Me"
          subtitle="Have a project idea or internship opportunity? Let's connect."
        />


        <div className="mt-12 grid md:grid-cols-2 gap-10">


          {/* Contact Information */}

          <FadeIn>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

              <h3 className="text-3xl font-bold text-white">
                Get In Touch
              </h3>


              <p className="mt-5 text-slate-400 leading-8">
                I am currently exploring internship opportunities,
                backend development projects, and collaborations.
                Feel free to reach out.
              </p>


              <div className="mt-8 space-y-5">

                <a
                  href={`mailto:${portfolio.email}`}
                  className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
                >
                  <FaEnvelope className="text-xl" />
                  {portfolio.email}
                </a>


                <a
                  href={portfolio.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>


                <a
                  href={portfolio.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </a>


                <a
                  href={portfolio.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 transition hover:text-orange-400"
                >
                  <SiLeetcode className="text-xl" />
                  LeetCode
                </a>


              </div>

            </div>

          </FadeIn>



          {/* Form */}

          <FadeIn delay={0.2}>

            <form
              action="https://formspree.io/f/mrenroqr"
              method="POST"
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8 space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                aria-label="Your Name"
                className="w-full rounded-xl bg-slate-800 px-5 py-4 text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />


              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                aria-label="Your Email"
                className="w-full rounded-xl bg-slate-800 px-5 py-4 text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />


              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                aria-label="Your Message"
                className="w-full rounded-xl bg-slate-800 px-5 py-4 text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />


              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-95"
              >
                Send Message
              </button>


            </form>

          </FadeIn>


        </div>

      </div>

    </section>
  );
}