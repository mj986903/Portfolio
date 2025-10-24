import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation resume="/Mohit.pdf" />
      <div id="hero">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
