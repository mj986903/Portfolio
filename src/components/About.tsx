import { Code2, Sparkles, Zap, Target, Shield, Palette, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Java, Spring Boot, Python, ASP .NET, Flask, Gunicorn, Microservices, React, Angular",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description: "Computer Vision, AI Automation Pipelines, Vector DBs, LangChain, Data Pipelines",
  },
  {
    icon: Zap,
    title: "Databases",
    description: "MySQL, PostgreSQL, MS SQL Server, MongoDB, Firebase",
  },
  {
    icon: Target,
    title: "DevOps & Deployment",
    description: "Docker, Kubernetes, GitHub Actions, CI/CD, Airflow, Monitoring",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: " Azure, AWS, Google Cloud, Vercel, Netlify",
  },
  {
    icon: Palette,
    title: "UI/UX & Design",
    description: "TailwindCSS, Figma, Material UI, ShadCN",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Azure Authentication, Auth0, JWT, OAuth2, Role-Based Access Control, Data Encryption",
  },
];

export const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            I'm a passionate Full Stack Developer with 1+ years of experience
            crafting dynamic web applications. I love blending design and
            functionality to create seamless tech experiences that users adore.
          </p>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Always exploring the latest in web and AI innovations, I specialize
            in building scalable, performant applications that solve real-world
            problems and delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="glass glass-hover p-6 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
