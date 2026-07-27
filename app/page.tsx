import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import PageLoader from "@/components/ui/PageLoader";
import Learning from "@/components/sections/Learning";

export default function Home() {
  return (
    <main>

      <PageLoader />

      <Hero />

      <About />

       <Navbar />

      <Skills />

      <Learning />

      <Projects />

      <Experience />

      <Contact />

      <Footer />

    </main>
  );
}