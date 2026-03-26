import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Associate Software Engineer - AI",
    company: "TSS Consultancy Pvt Ltd",
    period: "July 2025 - Present",
    location: "Rajkot",
    shortDescription:
      "Built and deployed AI-powered document classification, extraction, and verification APIs to automate KYC/Re-KYC processes.",
    description:
      "Currently working on AI-driven applications and API integrations, including Aadhaar masking, OVD classification, KYC extraction, KYC match and verification, AOF extraction, photo/document matching, and material checks. Responsible for building reliable and scalable solutions for data processing and verification pipelines.",
    summary: [
      "Fine-tuned AI models and developed scalable REST APIs with Spring Boot and Flask for real-time inference.",
      "Containerized applications with Docker & Kubernetes, optimizing Python GPU/CPU Dockerfiles to reduce image size and speed up deployment.",
      "Automated verification workflows, cutting manual check time from 5–7 minutes to 0.5 seconds, handling 100K+ verifications daily.",
      "Optimized AI workflows to improve data processing efficiency and reliability",
      "Collaborated with cross-functional teams to ensure seamless integration of AI features into production systems",
    ],
    achievements: [
      "Replaced manual KYC/Re-KYC verification with AI-powered APIs, reducing processing time by ~99% and handling over 100,000 verifications per day.",
      "Delivered significant cost and manpower savings by eliminating repetitive manual work in compliance operations.",
      "Successfully productionized AI models for real-time inference, ensuring high accuracy and reliability in verification pipelines.",
      "Led Project Optimus, handling data uploading, cleaning, splitting, model training, benchmarking, inference, API testing, and PR management for new AI models",
      "Designed and implemented a centralized dashboard for API management and monitoring across multiple services",
      "Collaborated with cross-functional teams to ensure seamless integration of AI features into production systems",
    ],
    technologies: ["Java", "Spring Boot", "Python", "Flask", "Gunicorn", "PostgreSQL", "Docker", "Kubernetes", "Microservices", "AirFlow", "Github Actions", "Azure", "React", "Angular"],
  },
  {
    id: 2,
    title: "Associate Software Engineer - Intern",
    company: "TSS Consultancy Pvt Ltd",
    period: "Jan 2025 - July 2025",
    location: "Rajkot",
    shortDescription:
      "Comprehensive training in full-stack development, AI model training, and microservice architecture.",
    description:
      "Undertook comprehensive training in DSA, C#, ASP.NET, REST API, MS SQL, Entity Framework, Angular, Java, Spring Boot, Python, YOLO model training, microservice architecture, and data annotations. Gained hands-on experience in developing web applications and APIs with a focus on performance, scalability, and user experience.",
    summary: [
      "Completed intensive training across multiple tech stacks including full-stack development, AI/ML, and microservice architecture.",
      "Built end-to-end applications using Angular + ASP.NET and Java Spring Boot, implementing JWT authentication and RESTful APIs.",
      "Gained practical experience in YOLO model training and Python Flask API development.",
      "Developed strong foundation in database design using MS SQL Server and Entity Framework.",
      "Acquired hands-on experience in microservice architecture and containerization concepts.",
    ],
    achievements: [
      "Developed Bank Management System with JWT-based authentication, user dashboard with recent activities, account & transaction management, and loan management (Angular + ASP.NET)",
      "Built Book Management System APIs in Java and Python Flask, implementing CRUD operations and data validations",
      "Completed training projects across multiple tech stacks enhancing full-stack development and API integration skills",
      "Gained practical knowledge in microservice architecture, RESTful API development, and AI model training using YOLO",
    ],
    technologies: ["Java", "Spring Boot", "Python", "ASP.NET", "Flask", "MS SQL", "Docker", "Microservices", "Authentication", "Angular"],
  },
  {
    id: 3,
    title: "Java Developer Intern",
    company: "TechnoHacks EduTech Official",
    period: "Aug 2023 - Sept 2023",
    location: "Remote",
    shortDescription:
      "Developed Java-based applications and gained practical exposure to backend logic and problem-solving.",
    description:
      "Completed a short-term internship during college to gain industry experience. Developed and implemented Java-based applications with a focus on writing clean, efficient, and maintainable code. Gained practical exposure to backend logic and problem-solving techniques.",
    summary: [
      "Strengthened core Java fundamentals through hands-on implementation of OOP concepts, exception handling, and multithreading.",
      "Built multiple console-based applications demonstrating proficiency in collections framework and file I/O operations.",
      "Developed problem-solving skills by implementing real-world scenarios and debugging complex issues.",
      "Applied best coding practices to write clean, maintainable, and efficient Java code.",
      "Transformed theoretical Java knowledge into practical application development experience.",
    ],
    achievements: [
      "Worked extensively with core Java concepts including OOPs, exception handling, multithreading, collections, and file I/O",
      "Built multiple console-based projects to strengthen understanding of backend application development",
      "Enhanced coding practices and debugging skills, preparing for real-world software development scenarios",
      "Acquired hands-on experience in translating theoretical knowledge into practical Java applications",
    ],
    technologies: ["Java", "OOP", "Collections", "Exception Handling", "Multithreading", "Problem Solving", "Debugging", "Coding Standards"],
  },
];

export const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="glass glass-hover border-border/50 overflow-hidden transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleExpand(exp.id)}
            >
              {/* Header - Always Visible */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-3">
                      {exp.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          +{exp.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="ml-2">
                      {expandedId === exp.id ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedId === exp.id ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-border/50">
                  <div className="space-y-4">
                    {/* Full Description */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Overview
                      </h4>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>

                    {/* Role Summary */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Role Summary
                      </h4>
                      <ul className="space-y-2">
                        {exp.summary.map((sum, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary leading-[1.4] shrink-0 pt-[1px]">
                              →
                            </span>
                            <span className="leading-[1.4]">{sum}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary leading-[1.4] shrink-0 pt-[1px]">
                              →
                            </span>
                            <span className="leading-[1.4]">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
