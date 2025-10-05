import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation resume="/Mohit.pdf"/>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="py-12 text-center text-muted-foreground border-t border-border/50 glass">
        <div className="container mx-auto px-4">
          <p className="mb-2">Made with ❤️ by Mohit Joshi</p>
          <p className="text-sm text-muted-foreground/60">© 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
