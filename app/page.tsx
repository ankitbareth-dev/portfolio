import About from "@/components/about/About";
import Contact from "@/components/Contact";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Project";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
