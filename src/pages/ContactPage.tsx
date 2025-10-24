import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation resume="/Mohit.pdf" />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
