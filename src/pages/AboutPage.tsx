import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation resume="/Mohit.pdf" />
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
