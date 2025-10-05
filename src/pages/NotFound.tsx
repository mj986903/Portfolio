import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="relative z-10 text-center animate-fade-in">
        <div className="glass p-8 rounded-xl border border-primary/20 backdrop-blur-xl">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! You've ventured into deep space.
          </p>
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <a href="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Base
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
