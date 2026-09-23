import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechOrbit from "@/components/TechOrbit";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        {/* INTERACTIVE BREAK */}
        <TechOrbit />

        <Skills />

        <Services />

        <Projects />

        <Education />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </>
  );
}