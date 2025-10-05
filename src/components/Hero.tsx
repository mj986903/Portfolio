import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-glow">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">AI-Powered Developer Portfolio</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          Mohit Joshi
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Full Stack Developer
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto">
          Passionate about crafting dynamic web apps. Love blending design and functionality to create seamless tech experiences. Always exploring the latest in web and AI innovations.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <a href="#contact">
              Hire Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="glass-hover" asChild>
            <a href="#experience">View Experience</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
