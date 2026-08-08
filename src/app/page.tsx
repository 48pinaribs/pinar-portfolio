import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Stack from "@/components/Stack";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <Stack />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
