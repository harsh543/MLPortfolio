import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github, Play } from "lucide-react";

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
      title: "Intelligent Financial Forecasting Agent",
      description: "Architected end-to-end agentic AI system using Azure AI Foundry and Databricks Agent Framework for comprehensive market analysis. Built multi-modal agent that orchestrates CANSLIM evaluation, technical analysis, and macroeconomic forecasting.",
      technologies: ["Azure AI Foundry", "Databricks Agent Framework", "Azure OpenAI GPT-4", "Vector Search", "MLflow", "Financial APIs"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Intelligent Financial Forecasting Agent",
      github: "https://github.com/harsh543/tmm_dataengineering/tree/main/agents-workshop"
    },
    {
      title: "AI-Powered Hotel Discovery Engine",
      description: "Built intelligent travel recommendation system using Azure AI Search and RAG technology to help travelers find accommodations based on contextual preferences like cleanliness, location, and service quality beyond traditional price/rating filters.",
      technologies: ["Azure AI Search", "Azure OpenAI Service", "Azure AI Foundry", "Vector Embeddings", "Python", "FastAPI", "LangChain", "RAG Pipeline"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "AI-Powered Hotel Discovery Engine",
      github: "https://github.com/harsh543/hotel-review-rag-ai-search",
      demo: "https://lnkd.in/gtNE5xsy"
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
              className={`project-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-on-scroll ${
                isVisible ? "animate" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.demo && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      Live Demo
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag bg-blue-50 text-blue-600 px-3 py-1 text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag bg-gray-100 text-gray-600 px-3 py-1 text-sm rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <button className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </button>
                  )}
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

        {/* Additional Project Highlights */}
        <div className={`mt-16 text-center animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Technologies Showcased</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-600 mb-2">🤖 Agentic AI Systems</h4>
                <p className="text-sm text-gray-600">Production-ready AI agents using Azure AI Foundry and Databricks frameworks for complex decision-making workflows.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-600 mb-2">🔍 Vector Databases & RAG</h4>
                <p className="text-sm text-gray-600">Advanced retrieval systems with Azure AI Search, vector embeddings, and semantic understanding for contextual responses.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-600 mb-2">🚀 Production Python & APIs</h4>
                <p className="text-sm text-gray-600">Enterprise-scale deployments with FastAPI, MLflow, and Azure cloud services for 99.99% availability systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
