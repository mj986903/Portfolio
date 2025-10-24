import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation resume="/Mohit.pdf" />
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
