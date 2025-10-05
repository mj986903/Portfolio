import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Associate Software Engineer - AI",
    company: "TSS Consultancy Pvt Ltd",
    period: "July 2025 - Present",
    description:
      "Currently working on AI-driven web applications and API integrations, including Aadhaar masking, OVD classification, KYC extraction, KYC match and verification, AOF extraction, photo/document matching, and material checks. Responsible for building reliable and scalable solutions for data processing and verification pipelines.",
    achievements: [
      "Led Project Optimus, handling data uploading, cleaning, splitting, model training, benchmarking, inference, API testing, and PR management for new AI models",
      "Developed a Social Media Analyzer to extract and analyze LinkedIn user details for onboarding and user insights",
      "Designed and implemented a centralized dashboard for API management and monitoring across multiple services",
      "Optimized AI workflows to improve data processing efficiency and reliability",
      "Collaborated with cross-functional teams to ensure seamless integration of AI features into production systems",
    ],
  },
  {
    title: "Associate Software Engineer - Intern",
    company: "TSS Consultancy Pvt Ltd",
    period: "Jan 2025 - July 2025",
    description:
      "Undertook comprehensive training in DSA, C#, ASP.NET, REST API, MS SQL, Entity Framework, Angular, Java, Spring Boot, Python, YOLO model training, microservice architecture, and data annotations. Gained hands-on experience in developing web applications and APIs with a focus on performance, scalability, and user experience.",
    achievements: [
      "Developed Bank Management System with JWT-based authentication, user dashboard with recent activities, account & transaction management, and loan management (Angular + ASP.NET)",
      "Built Book Management System APIs in Java and Python Flask, implementing CRUD operations and data validations",
      "Completed training projects across multiple tech stacks enhancing full-stack development and API integration skills",
      "Gained practical knowledge in microservice architecture, RESTful API development, and AI model training using YOLO",
    ],
  },
  {
    title: "Java Developer Intern",
    company: "TechnoHacks EduTech Official",
    period: "Aug 2023 - Sept 2023",
    description:
      "Completed a short-term internship during college to gain industry experience. Developed and implemented Java-based applications with a focus on writing clean, efficient, and maintainable code. Gained practical exposure to backend logic and problem-solving techniques.",
    achievements: [
      "Worked extensively with core Java concepts including OOPs, exception handling, multithreading, collections, and file I/O",
      "Built multiple console-based projects to strengthen understanding of backend application development",
      "Enhanced coding practices and debugging skills, preparing for real-world software development scenarios",
      "Acquired hands-on experience in translating theoretical knowledge into practical Java applications",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and leading teams to deliver
            exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass glass-hover border-border/50 p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">
                  Key Achievements:
                </p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
