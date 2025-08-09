import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  const projects = [
    {
      title: "Production ML Infrastructure at Microsoft",
      description: "Architected ML pipelines processing 10M+ daily events with 99.99% availability. Built predictive maintenance models for GPU failure detection with 13-day advance warning capability.",
      technologies: ["Databricks", "Apache Spark", "Azure Synapse", "MLflow"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Production ML Infrastructure"
    },
    {
      title: "AI Agent Systems with Databricks",
      description: "Built production-grade agent systems using Databricks Agent Framework and Meta Llama 3.3 70B. Implemented automated workflows for investment decision-making and customer service.",
      technologies: ["Databricks Agent Framework", "Meta Llama 3.3 70B", "Vector Search", "MLflow"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "AI Agent Systems",
      github: "https://github.com/harsh543/tmm_dataengineering/tree/main/agents-workshop"
    },
    {
      title: "RAG-Based Recommendation Systems",
      description: "Developed intelligent recommendation systems using LangChain and vector search. Achieved 60% improvement in discovery time with contextual justifications.",
      technologies: ["LangChain", "LlamaIndex", "Elasticsearch", "Vector Search"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "RAG-Based Recommendation Systems"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-bg-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">Featured Projects</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Production-scale ML systems and AI solutions that deliver enterprise impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl animate-on-scroll ${
                isVisible ? "animate" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag px-3 py-1 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
