import { useRef, useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/mj986903" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mj986903",
  },
  { icon: Mail, label: "Email", href: "mailto:mj986903@gmail.com" },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/ig_mohit_joshi",
  },
];

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          toast.error("Unable to send message!");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass p-8 border-border/50 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
              <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="user_name"
                    placeholder="John Doe"
                    className="glass"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    className="glass"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Project Details
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    className="glass min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Card className="glass p-8 border-border/50">
                <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="glass-hover justify-start"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {social.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </Card>

              <Card className="glass p-8 border-border/50">
                <h3 className="text-xl font-bold mb-2">
                  Open to Opportunities
                </h3>
                <p className="text-muted-foreground mb-4">
                  Currently available for exciting projects and collaborations.
                  Let's create something amazing together.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                  <span>Available for hire</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
