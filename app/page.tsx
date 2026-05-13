import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />     
      <Contact />
      <Footer />
    </main>
  );
}