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

/** Inline, brand-safe architecture art for the PR Reviewer project */
function McpPrReviewSVG(): JSX.Element {
  return (
    <svg
      role="img"
      aria-label="Diagram: Claude reviews PRs via MCP with GitHub, Databricks, and Notion"
      viewBox="0 0 1200 420"
      className="w-full h-48 md:h-56 lg:h-64 xl:h-72"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gradA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="gradB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.25" />
        </filter>
        <style>
          {`
          .node { fill: #0b1220; stroke: #334155; stroke-width: 1.25; }
          .chip { fill: #0f172a; stroke: #475569; stroke-width: 1.25; }
          .label { font: 600 14px ui-sans-serif, system-ui; fill: #e5e7eb; }
          .sublabel { font: 12px ui-sans-serif, system-ui; fill: #cbd5e1; }
          .wire { stroke: url(#gradB); stroke-width: 2.75; fill: none; }
          .pulse { stroke-dasharray: 6 8; animation: dash 3s linear infinite; }
          @keyframes dash { to { stroke-dashoffset: -140; } }
        `}
        </style>
      </defs>

      {/* background glow */}
      <rect x="0" y="0" width="1200" height="420" fill="#0b1220" />
      <rect x="40" y="24" width="1120" height="372" rx="16" fill="#0f172a" />
      <rect
        x="40"
        y="24"
        width="1120"
        height="372"
        rx="16"
        fill="url(#gradA)"
        opacity="0.08"
      />

      {/* wires */}
      <path
        className="wire"
        d="M230 210 C 360 210, 480 140, 600 140 C 720 140, 840 210, 970 210"
        filter="url(#softShadow)"
      />
      <path
        className="wire pulse"
        d="M230 240 C 360 240, 480 300, 600 300 C 720 300, 840 240, 970 240"
      />

      {/* Claude node */}
      <g transform="translate(140,190)">
        <rect className="node" width="180" height="80" rx="14" />
        <circle cx="44" cy="40" r="18" fill="url(#gradA)" />
        <path
          d="M37 40a7 7 0 0014 0a7 7 0 00-14 0Z"
          fill="#fff"
          opacity=".85"
        />
        <text x="78" y="36" className="label">Claude</text>
        <text x="78" y="56" className="sublabel">AI Reviewer</text>
      </g>

      {/* MCP Server (this repo) */}
      <g transform="translate(510,110)">
        <rect className="chip" width="180" height="200" rx="14" />
        <rect x="20" y="24" width="140" height="28" rx="6" fill="#1e293b" />
        <text x="28" y="43" className="label">MCP Server</text>
        <rect x="20" y="72" width="140" height="20" rx="4" fill="#0ea5e9" opacity=".15" />
        <text x="28" y="86" className="sublabel">fastmcp + CLI Tools</text>
        <rect x="20" y="106" width="140" height="20" rx="4" fill="#22c55e" opacity=".15" />
        <text x="28" y="120" className="sublabel">Diff Reasoning</text>
        <rect x="20" y="140" width="140" height="20" rx="4" fill="#a78bfa" opacity=".15" />
        <text x="28" y="154" className="sublabel">RAG Policies</text>
        <rect x="20" y="174" width="140" height="20" rx="4" fill="#f59e0b" opacity=".15" />
        <text x="28" y="188" className="sublabel">CI/CD Hooks</text>
      </g>

      {/* GitHub */}
      <g transform="translate(960,150)">
        <rect className="node" width="180" height="60" rx="14" />
        <circle cx="40" cy="30" r="12" fill="#fff" />
        <text x="62" y="27" className="label">GitHub</text>
        <text x="62" y="45" className="sublabel">Pull Requests</text>
      </g>

      {/* Notion */}
      <g transform="translate(960,230)">
        <rect className="node" width="180" height="60" rx="14" />
        <rect x="28" y="18" width="24" height="24" rx="4" fill="#fff" />
        <text x="62" y="27" className="label">Notion</text>
        <text x="62" y="45" className="sublabel">PR Summaries</text>
      </g>

      {/* Databricks */}
      <g transform="translate(730,190)">
        <rect className="node" width="180" height="80" rx="14" />
        <rect x="30" y="28" width="24" height="24" rx="4" fill="url(#gradA)" />
        <text x="62" y="46" className="label">Databricks</text>
        <text x="62" y="66" className="sublabel">Repos / Jobs</text>
      </g>

      {/* captions */}
      <text x="160" y="360" className="sublabel" fill="#9ca3af">
        Claude → MCP → GitHub/Databricks/Notion • Automated PR analysis • Policy-aware comments • Optional Notion logging
      </text>
    </svg>
  );
}

/** Inline, brand-safe MLOps pipeline art for the Microsoft featured project */
function MicrosoftMlopsSVG(): JSX.Element {
  return (
    <svg
      role="img"
      aria-label="MLOps pipeline: Data Ingestion → Feature Engineering → Training → Evaluation → Deployment → Online Evaluation"
      viewBox="0 0 1200 420"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="mlopsA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="mlopsB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <filter id="mlopsShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.25" />
        </filter>
        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="url(#mlopsB)" />
        </marker>
        <style>
          {`
            .stage { fill: #0f172a; stroke: #334155; stroke-width: 1.25; }
            .stageTitle { font: 600 13px ui-sans-serif, system-ui; fill: #e5e7eb; }
            .stageNote { font: 12px ui-sans-serif, system-ui; fill: #cbd5e1; }
            .arrow { stroke: url(#mlopsB); stroke-width: 3; marker-end: url(#arrowHead); }
          `}
        </style>
      </defs>

      <rect x="0" y="0" width="1200" height="420" fill="#0b1220" />
      <rect x="24" y="24" width="1152" height="372" rx="18" fill="#0b1220" />
      <rect x="24" y="24" width="1152" height="372" rx="18" fill="url(#mlopsA)" opacity="0.08" />

      {/* pipeline stages: 6 boxes across */}
      <g transform="translate(70, 120)">
        {/* Data Ingestion */}
        <g filter="url(#mlopsShadow)">
          <rect className="stage" x="0" y="0" width="170" height="120" rx="14" />
          <text x="16" y="26" className="stageTitle">Data Ingestion</text>
          <text x="16" y="48" className="stageNote">GPU Telemetry (H100)</text>
          <text x="16" y="66" className="stageNote">RackTelemetry / Redfish</text>
          <text x="16" y="84" className="stageNote">Azure Blob Storage</text>
        </g>
        <line className="arrow" x1="178" y1="60" x2="228" y2="60" />

        {/* Feature Engineering */}
        <g transform="translate(230,0)" filter="url(#mlopsShadow)">
          <rect className="stage" x="0" y="0" width="170" height="120" rx="14" />
          <text x="16" y="26" className="stageTitle">Feature Eng.</text>
          <text x="16" y="48" className="stageNote">Azure Data Factory</text>
          <text x="16" y="66" className="stageNote">Transforms / Joins</text>
          <text x="16" y="84" className="stageNote">Delta Lake</text>
        </g>
        <line className="arrow" x1="408" y1="60" x2="458" y2="60" />

        {/* Training */}
        <g transform="translate(460,0)" filter="url(#mlopsShadow)">
          <rect className="stage" x="0" y="0" width="170" height="120" rx="14" />
          <text x="16" y="26" className="stageTitle">Training</text>
          <text x="16" y="48" className="stageNote">Azure ML</text>
          <text x="16" y="66" className="stageNote">XGBoost / KNN / LR</text>
          <text x="16" y="84" className="stageNote">MLflow Tracking</text>
        </g>
        <line className="arrow" x1="638" y1="60" x2="688" y2="60" />

        {/* Evaluation */}
        <g transform="translate(690,0)" filter="url(#mlopsShadow)">
          <rect className="stage" x="0" y="0" width="170" height="120" rx="14" />
          <text x="16" y="26" className="stageTitle">Evaluation</text>
          <text x="16" y="48" className="stageNote">F1 / ROC-AUC</text>
          <text x="16" y="66" className="stageNote">Brier / MSE</text>
          <text x="16" y="84" className="stageNote">Feature Importance</text>
        </g>
        <line className="arrow" x1="868" y1="60" x2="918" y2="60" />

        {/* Deployment */}
        <g transform="translate(920,0)" filter="url(#mlopsShadow)">
          <rect className="stage" x="0" y="0" width="170" height="120" rx="14" />
          <text x="16" y="26" className="stageTitle">Deployment</text>
          <text x="16" y="48" className="stageNote">Azure ML Endpoints</text>
          <text x="16" y="66" className="stageNote">Batch & Online</text>
          <text x="16" y="84" className="stageNote">Model Registry</text>
        </g>
      </g>

      {/* Online Evaluation callout */}
      <g transform="translate(70, 280)" filter="url(#mlopsShadow)">
        <rect x="0" y="0" width="1020" height="84" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="1.25" />
        <text x="16" y="28" className="stageTitle">Online Evaluation</text>
        <text x="16" y="52" className="stageNote">
          High-volume predictions via MLflow batch when latency isn’t critical; real-time endpoints for immediate feedback and alerting.
        </text>
      </g>
    </svg>
  );
}

type Project = {
  title: string;
  description: string;
  technologies: string[];
  /** EITHER provide an image URL or an inline SVG via `svg` */
  image?: string;
  svg?: JSX.Element;
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
  // NEW: featured tech toggle
  const [isFeaturedTechExpanded, setIsFeaturedTechExpanded] = useState(false);

  const toggleProjectExpansion = (projectIndex: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }));
  };

  /**
   * FEATURED: Microsoft — GPU Failure Prediction (Ushuaia)
   */
  const featuredMicrosoft: Project = {
    title: "Microsoft — GPU Failure Prediction (Ushuaia)",
    description:
      "Production-grade ML platform to classify H100 nodes likely to enter OFR and forecast time-to-failure using survival analysis. Built an end-to-end MLOps pipeline across telemetry ingestion, feature engineering, model training/tuning, and online evaluation—enabling proactive maintenance and reduced downtime at AI cluster scale.",
    technologies: [
      "Azure Blob Storage",
      "Azure Data Factory",
      "Databricks",
      "Delta Lake",
      "Azure Machine Learning",
      "MLflow",
      "XGBoost",
      "Pytorch",
      "TensorFlow",
      "Prophet",
      "LSTM",
      "Random Survival Forest (RSF)",
      "Survival Analysis",
      "PCIe Error Prediction",
      "Batch & Online Inference",
      "AUC / Brier / F1",
      "Document RAG Intelligence System",
    ],
    // image removed in favor of inline pipeline SVG
    alt: "GPU Failure Prediction at Microsoft",
    badges: ["Featured", "Enterprise ML", "Reliability/SRE"],
  };

  /**
   * PROJECTS GRID
   * Spotlight PR Reviewer (Claude + MCP) + the two other projects requested.
   */
  const projects: Project[] = [
    {
      title:
        "PR Reviewer — Claude-Powered GitHub Review (MCP + Databricks + Notion)",
      description:
        "A Model Context Protocol (MCP) server that connects Claude to Databricks repos and Notion knowledge. It auto-summarizes PRs, reasons over diffs, cross-references engineering standards, and proposes actionable review comments.",
      technologies: [
        "Model Context Protocol (MCP)",
        "Claude (Anthropic)",
        "Databricks Repos/API",
        "GitHub API",
        "Notion API",
        "TypeScript",
        "Node.js",
        "Python",
        "RAG (Vector Search)",
        "CI/CD Guardrails",
        "Docker",
      ],
      svg: <McpPrReviewSVG />,
      alt: "Claude + MCP architecture diagram with GitHub, Databricks, and Notion",
      github: "https://github.com/harsh543/mcp-pr-review-databricks",
      demo: "https://www.youtube.com/watch?v=zzgMfgQwXwU",
      badges: ["Developer Productivity", "Live Demo"],
    },
    {
      title: "Investment Assistant with Databricks Mosaic AI",
      description:
        "Production-ready investment decision agent using Mosaic AI Agent Framework. Streams Yahoo Finance, persists to Delta, and applies LLM reasoning for Buy/Sell/Hold with human-in-the-loop Review App.",
      technologies: [
        "Databricks Mosaic AI",
        "Agent Framework",
        "Yahoo Finance API",
        "Delta Tables",
        "MLflow",
        "Model Serving",
      ],
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      alt: "Investment Assistant dashboard concept",
      github: "https://github.com/harsh543/databricks-agent-mosaic",
      badges: ["Agents", "Data + LLM"],
    },
    {
      title: "AI-Powered Hotel Discovery Engine",
      description:
        "Context-aware travel recommender built with Azure AI Search + RAG to surface hotels by cleanliness, location, and service quality—not just price and ratings.",
      technologies: [
        "Azure AI Search",
        "Azure OpenAI Service",
        "Azure AI Foundry",
        "Vector Embeddings",
        "Python",
        "FastAPI",
        "LangChain",
        "RAG Pipeline",
      ],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500",
      alt: "Hotel discovery interface concept",
      github: "https://github.com/harsh543/hotel-review-rag-ai-search",
      demo: "https://www.youtube.com/watch?v=qOR3eW8ik1c",
      badges: ["RAG", "Live Demo"],
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
            className="tech-tag bg-gray-900/90 text-white px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
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
            {/* LEFT: copy + chips */}
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
                    Predict H100 OFR risk & time-to-failure from telemetry to
                    prevent downtime and reduce repair costs.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <ServerCog className="w-4 h-4" />
                    <span className="font-semibold">MLOps Pipeline</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    RackTelemetry/Redfish → ADF feature engineering → Azure ML
                    training/tuning → MLflow batch & online inference.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <FileText className="w-4 h-4" />
                    <span className="font-semibold">Ops Knowledge (Optional)</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Team docs & vendor specs (SharePoint, OneNote, DOCX/PPT) surfaced via Document RAG when needed.
                  </p>
                </div>
              </div>

              {/* Tech tags with expandable "+N more" */}
              <div className="flex flex-wrap items-center gap-2">
                {(isFeaturedTechExpanded
                  ? featuredMicrosoft.technologies
                  : featuredMicrosoft.technologies.slice(0, 12)
                ).map((t, i) => (
                  <span
                    key={`ft-${i}-${t}`}
                    className="bg-white/10 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}

                {featuredMicrosoft.technologies.length > 12 && (
                  <button
                    type="button"
                    onClick={() => setIsFeaturedTechExpanded((v) => !v)}
                    aria-expanded={isFeaturedTechExpanded}
                    className="text-xs px-3 py-1 rounded-full font-semibold
                               bg-blue-500/90 hover:bg-blue-500 focus:outline-none
                               focus:ring-2 focus:ring-offset-2 focus:ring-blue-300
                               text-white transition-all"
                  >
                    {isFeaturedTechExpanded
                      ? "Show less"
                      : `+${featuredMicrosoft.technologies.length - 12} more`}
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT: MLOps pipeline visual (replaces datacenter photo) */}
            <div className="relative bg-slate-950">
              <MicrosoftMlopsSVG />
              {/* Badges */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow">
                GPU Failure Prediction
              </div>
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs">
                Ops docs via <span className="font-semibold">Document RAG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-on-scroll ${
                isVisible ? "animate" : ""
              }`}
              style={{ animationDelay: `${index * 0.15 + 0.05}s` }}
            >
              <div className="relative overflow-hidden bg-slate-950">
                {project.svg ? (
                  <div className="w-full" aria-label={project.alt} role="img">
                    {project.svg}
                  </div>
                ) : (
                  <img
                    src={project.image!}
                    alt={project.alt}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                )}
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
                  Team docs & vendor specs (SharePoint, OneNote, DOCX/PPT) can be grounded via Document RAG when needed.
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
