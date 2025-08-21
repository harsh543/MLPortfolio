import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  ExternalLink,
  Github,
  Play,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Activity,
  ServerCog,
  FileText,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  alt: string;
  github?: string;
  demo?: string;
  badges?: string[];
};

type ExpandedMap = Record<number, boolean>;

export default function ProjectsSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  const [expandedProjects, setExpandedProjects] = useState<ExpandedMap>({});

  const toggleProjectExpansion = (projectIndex: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }));
  };

  /**
   * FEATURED: Microsoft — GPU Failure Prediction (Ushuaia)
   * - Surfaced from Harsh’s internal Microsoft work and attached deck.
   * - Explicitly references PCIe fault-code prediction, classification + survival analysis,
   *   and Azure ML deployment + monitoring.
   * - Mentions “Document RAG Intelligence System” as the ops knowledge layer (SOPs, playbooks, runbooks).
   */
  const featuredMicrosoft: Project = {
    title: "Microsoft — GPU Failure Prediction (Ushuaia)",
    description:
      "Production-grade ML platform to classify H100 nodes likely to enter OFR and forecast time-to-failure using survival analysis. Built an end-to-end pipeline across RackTelemetry/Redfish ingestion, feature engineering, model training/tuning, and online evaluation—enabling proactive maintenance and reduced downtime at AI cluster scale. Paired with my Document RAG Intelligence System for searchable SOPs, on-call runbooks, and fault-code reasoning to accelerate incident response.",
    technologies: [
      // Cloud + Data
      "Azure Blob Storage",
      "Azure Data Factory",
      "Databricks",
      "Delta Lake",
      // ML Platform
      "Azure Machine Learning",
      "MLflow",
      // Modeling
      "XGBoost",
      "KNN",
      "Logistic Regression",
      "Prophet",
      "LSTM",
      "Random Survival Forest (RSF)",
      "Survival Analysis",
      // Telemetry Domain
      "RackTelemetry",
      "Redfish Alerts",
      "PCIe Error Prediction",
      "H100 OFR",
      // Ops/Observability
      "Batch & Online Inference",
      "AUC / Brier / F1",
      // Knowledge
      "Document RAG Intelligence System",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
    alt: "GPU Failure Prediction at Microsoft",
    badges: ["Featured", "Enterprise ML", "Reliability/SRE"],
  };

  /**
   * PROJECTS GRID
   * Replace the 3-item list with ONE spotlighted project:
   * - Databricks MCP Server for Claude + Notion → DevOps & PR Review productivity.
   * - Add ‘Live Demo’ and GitHub links.
   * - Position as a developer-productivity accelerator (CI/CD guardrails, diff-aware context, RAG).
   */
  const projects: Project[] = [
    {
      title:
        "Databricks MCP Server — Claude + Notion for PR Review & DevOps Productivity",
      description:
        "A Model Context Protocol (MCP) server that connects Claude to Databricks repos and Notion knowledge. It auto-summarizes PRs, reasons over diffs, cross-references your Notion engineering standards, and proposes actionable review comments. With RAG-powered grounding—using the same Document RAG Intelligence System that supports my Microsoft reliability work—developers get faster, higher-quality reviews and safer merges. Includes a live demo showcasing end-to-end flow.",
      technologies: [
        "Model Context Protocol (MCP)",
        "Claude (Anthropic)",
        "Databricks Repos/API",
        "Notion API",
        "TypeScript",
        "Node.js",
        "RAG (Vector Search)",
        "DevOps Productivity",
        "CI/CD Guardrails",
        "GitHub PR Workflows",
        "Docker",
      ],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      alt: "Databricks MCP Server for PR Review",
      github: "https://github.com/harsh543/mcp-pr-review-databricks",
      demo: "https://www.youtube.com/watch?v=zzgMfgQwXwU",
      badges: ["Developer Productivity", "Live Demo"],
    },
  ];

  const renderTechnologies = (technologies: string[], projectIndex: number) => {
    const isExpanded = !!expandedProjects[projectIndex];
    const visibleTechs = isExpanded ? technologies : technologies.slice(0, 8);
    const hasMore = technologies.length > 8;

    return (
      <div className="flex flex-wrap gap-2 mb-6">
        {visibleTechs.map((tech, techIndex) => (
          <span
            key={`${tech}-${techIndex}`}
            className={`tech-tag bg-gray-900/90 text-white px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400`}
            aria-label={`Technology: ${tech}`}
          >
            {tech}
          </span>
        ))}

        {hasMore && (
          <button
            onClick={() => toggleProjectExpansion(projectIndex)}
            className="tech-tag bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 flex items-center gap-1 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            aria-expanded={isExpanded}
            aria-controls={`tech-list-${projectIndex}`}
          >
            {isExpanded ? (
              <>
                Show Less
                <ChevronUp className="w-3 h-3 transition-transform group-hover:scale-110" />
              </>
            ) : (
              <>
                +{technologies.length - 8} more
                <ChevronDown className="w-3 h-3 transition-transform group-hover:scale-110" />
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-bg-section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Production ML, reliability engineering, and developer tooling that
            shorten the path from insight → action.
          </p>
        </div>

        {/* Featured Microsoft Card */}
        <div
          className={`mb-12 rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-xl overflow-hidden animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
          style={{ animationDelay: "0s" }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-semibold px-2 py-0.5 bg-white/10 rounded-full tracking-wide">
                  Featured
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                {featuredMicrosoft.title}
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                {featuredMicrosoft.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <Activity className="w-4 h-4" />
                    <span className="font-semibold">Use Case</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Predict H100 OFR risk + time-to-failure from telemetry to
                    prevent downtime and reduce repair costs.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <ServerCog className="w-4 h-4" />
                    <span className="font-semibold">Pipeline</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    RackTelemetry/Redfish → ADF feature engineering → Azure ML
                    training/tuning → batch & online inference with MLflow.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <FileText className="w-4 h-4" />
                    <span className="font-semibold">Knowledge</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Document RAG Intelligence System surfaces SOPs, fault-code
                    playbooks, and incident checklists inline.
                  </p>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {featuredMicrosoft.technologies.slice(0, 12).map((t, i) => (
                  <span
                    key={`ft-${i}`}
                    className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
                <span className="text-xs text-white/70 px-1">
                  + {Math.max(0, featuredMicrosoft.technologies.length - 12)}{" "}
                  more…
                </span>
              </div>
            </div>

            <div className="relative">
              <img
                src={featuredMicrosoft.image}
                alt={featuredMicrosoft.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid (single spotlight entry) */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-on-scroll ${
                isVisible ? "animate" : ""
              }`}
              style={{ animationDelay: `${index * 0.15 + 0.05}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                {!!project.badges?.length && (
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {project.badges.map((b) => (
                      <span
                        key={b}
                        className="bg-black/70 backdrop-blur text-white px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
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
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                {renderTechnologies(project.technologies, index)}

                <div className="flex gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                      aria-label="Open Live Demo"
                    >
                      <Play className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                      aria-label="Learn more"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Learn More
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                      aria-label="Open GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capability Highlights */}
        <div
          className={`mt-16 text-center animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Capabilities
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-600 mb-2">
                  🤖 Agentic AI + RAG
                </h4>
                <p className="text-sm text-gray-600">
                  Document RAG Intelligence System grounds both reliability and
                  developer workflows in authoritative knowledge (SOPs, PR
                  guidelines, runbooks).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-600 mb-2">
                  🔧 Developer Productivity
                </h4>
                <p className="text-sm text-gray-600">
                  MCP-driven code reviews with diff-aware reasoning, policy
                  checks, and CI/CD guardrails reduce review latency and defects.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-600 mb-2">
                  📈 Reliability at Scale
                </h4>
                <p className="text-sm text-gray-600">
                  Telemetry-first modeling (classification + survival analysis)
                  enables proactive maintenance and protects customer workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
