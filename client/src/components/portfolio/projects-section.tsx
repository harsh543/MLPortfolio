import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github, Award, Users, TrendingUp, Play, Calendar, MapPin } from "lucide-react";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Production ML Infrastructure at Microsoft",
      description: "Architected ML pipelines processing 10M+ daily events with 99.99% availability. Built predictive maintenance models for GPU failure detection with 13-day advance warning capability.",
      technologies: ["Databricks", "Apache Spark", "Azure Synapse", "MLflow"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Production ML Infrastructure",
      category: "ml-infrastructure",
      stats: {
        impact: "10M+ events/day",
        availability: "99.99%",
        prediction: "13-day advance"
      },
      featured: true,
      year: "2024"
    },
    {
      title: "AI Agent Systems with Databricks",
      description: "Built production-grade agent systems using Databricks Agent Framework and Meta Llama 3.3 70B. Implemented automated workflows for investment decision-making and customer service.",
      technologies: ["Databricks Agent Framework", "Meta Llama 3.3 70B", "Vector Search", "MLflow"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "AI Agent Systems",
      github: "https://github.com/harsh543/tmm_dataengineering/tree/main/agents-workshop",
      category: "ai-agents",
      stats: {
        improvement: "80% performance",
        framework: "Production-grade",
        models: "Meta Llama 3.3 70B"
      },
      year: "2024"
    },
    {
      title: "AI-Powered Hotel Search Engine",
      description: "Built intelligent hotel recommendation system using Azure AI Search and RAG technology. Processes hotel reviews with vector embeddings to deliver contextually relevant search results through natural language queries.",
      technologies: ["Azure AI Search", "Azure OpenAI", "Vector Search", "Python", "FastAPI", "LangChain"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "AI-Powered Hotel Search Engine",
      github: "https://github.com/harsh543/hotel-review-rag-ai-search",
      demo: "https://lnkd.in/gtNE5xsy",
      category: "rag-systems",
      stats: {
        queries: "Natural Language",
        technology: "RAG + Vector Search",
        platform: "Azure AI"
      },
      year: "2024"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "ml-infrastructure", label: "ML Infrastructure", count: projects.filter(p => p.category === "ml-infrastructure").length },
    { id: "ai-agents", label: "AI Agents", count: projects.filter(p => p.category === "ai-agents").length },
    { id: "rag-systems", label: "RAG Systems", count: projects.filter(p => p.category === "rag-systems").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(p => p.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-bg-section to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Production-Ready Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Enterprise-scale ML systems and AI solutions delivering measurable impact across Fortune 500 companies
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">10M+</div>
            <div className="text-sm text-gray-600">Events Processed Daily</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">99.99%</div>
            <div className="text-sm text-gray-600">System Availability</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">80%</div>
            <div className="text-sm text-gray-600">Performance Improvement</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-orange-600">13-Day</div>
            <div className="text-sm text-gray-600">Failure Prediction</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
              }`}
            >
              {filter.label}
              <span className="ml-2 text-xs opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Project - Full Width */}
        {featuredProject && activeFilter === "all" && (
          <div className={`mb-16 animate-on-scroll ${isVisible ? "animate" : ""}`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ Featured Project
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{featuredProject.title}</h3>
                  <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(featuredProject.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">{value}</div>
                        <div className="text-blue-200 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.alt}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${activeFilter}`}
              className={`group project-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll ${
                isVisible ? "animate" : ""
              } ${project.featured && activeFilter === "all" ? "hidden" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                    {project.year}
                  </span>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                {project.demo && (
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Stats Section */}
                {project.stats && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">{key}:</span>
                          <span className="font-medium text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag bg-blue-50 text-blue-600 px-3 py-1 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag bg-gray-100 text-gray-600 px-3 py-1 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  )}
                  {!project.demo && (
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2 group"
                      title="View Source Code"
                    >
                      <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging problems in AI/ML infrastructure, distributed systems, and intelligent applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Let's Connect
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
