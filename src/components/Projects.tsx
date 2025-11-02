import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Corebuild Technologies",
    description:
      "Developed a modern, responsive website for Corebuild Technologies — a company specializing in advanced construction and automation solutions. The project focused on creating a professional online presence, highlighting their services, products, and industry expertise with smooth UI/UX and optimized performance.",
    tags: ["Vite", "React", "Tailwind CSS", "JavaScript"],
    gradient: "from-cyan-500 to-blue-500",
    github: "https://github.com/GujjuTech/CoreBuild-Technologies",
    demo : "https://corebuild-technologies.vercel.app/",
  },
  {
    title: "Quizwhiz",
    description:
      "QuizWhiz is a dynamic and interactive quiz application that allows users to create, manage, and take random quizzes seamlessly.",
    tags: ["HTML", "CSS", "Javascript", "Asp .Net", "MySQL"],
    gradient: "from-cyan-500 to-blue-500",
    github: "https://github.com/mj986903/Quizwhiz",
  },
  {
    title: "Invoice Processing System",
    description:
      "It helps organizations streamline their accounts payable processes, reduce manual errors, improve efficiency, and gain better visibility and control over their financial operations.",
    tags: ["JSP", "CSS", "Java", "MySQL"],
    gradient: "from-purple-500 to-pink-500",
    github: "https://github.com/mj986903/Invoice-Processing-System",
  },
  {
    title: "Visitor Management System",
    description:
      "It provides a systematic approach to handling visitor entry, registration, and monitoring while enhancing security and efficiency.",
    tags: ["JSP", "CSS", "Java", "MySQL"],
    gradient: "from-green-500 to-teal-500",
    github: "https://github.com/mj986903/Visitor-Management-System",
  },
];

export const Projects = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work combining creativity, technology, and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass glass-hover border-border/50 overflow-hidden group animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity`}
              />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full glass text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
