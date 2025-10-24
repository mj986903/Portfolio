import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Experience } from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation resume="/Mohit.pdf" />
      <div id="experience">
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
