import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Sparkles,
  Activity,
  ServerCog,
  FileText,
  ExternalLink,
  Github,
  Play,
  ChevronDown,
  ChevronUp,
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

      {/* background */}
      <rect x="0" y="0" width="1200" height="420" fill="#0b1220" />
      <rect x="40" y="24" width="1120" height="372" rx="16" fill="#0f172a" />
      <rect x="40" y="24" width="1120" height="372" rx="16" fill="url(#gradA)" opacity="0.08" />

      {/* wires */}
      <path className="wire" d="M230 210 C 360 210, 480 140, 600 140 C 720 140, 840 210, 970 210" filter="url(#softShadow)" />
      <path className="wire pulse" d="M230 240 C 360 240, 480 300, 600 300 C 720 300, 840 240, 970 240" />

      {/* Claude */}
      <g transform="translate(140,190)">
        <rect className="node" width="180" height="80" rx="14" />
        <circle cx="44" cy="40" r="18" fill="url(#gradA)" />
        <path d="M37 40a7 7 0 0014 0a7 7 0 00-14 0Z" fill="#fff" opacity=".85" />
        <text x="78" y="36" className="label">Claude</text>
        <text x="78" y="56" className="sublabel">AI Reviewer</text>
      </g>

      {/* MCP */}
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

      <text x="160" y="360" className="sublabel" fill="#9ca3af">
        Claude → MCP → GitHub/Databricks/Notion • Automated PR analysis • Policy-aware comments • Optional Notion logging
      </text>
    </svg>
  );
}

/** Full-width MLOps pipeline exactly following: Ingestion → Quality → FE → Training → Registry → Canary/Shadow → Serving → Monitoring → Retraining */
function MicrosoftMlopsFullWidthSVG(): JSX.Element {
  return (
    <svg
      role="img"
      aria-label="MLOps pipeline for GPU failure prediction"
      viewBox="0 0 1600 520"
      className="w-full h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px]"
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
            .panel { fill: #0f172a; stroke: #334155; stroke-width: 1.25; }
            .title { font: 700 13px ui-sans-serif, system-ui; fill: #e5e7eb; }
            .note  { font: 12px ui-sans-serif, system-ui; fill: #cbd5e1; }
            .arrow { stroke: url(#mlopsB); stroke-width: 3; marker-end: url(#arrowHead); }
            .rail  { stroke: #334155; stroke-width: 1.25; stroke-dasharray: 6 6; opacity: .6 }
          `}
        </style>
      </defs>

      {/* background */}
      <rect x="0" y="0" width="1600" height="520" fill="#0b1220" />
      <rect x="16" y="16" width="1568" height="488" rx="20" fill="#0b1220" />
      <rect x="16" y="16" width="1568" height="488" rx="20" fill="url(#mlopsA)" opacity="0.08" />

      {/* single wide rail */}
      <line className="rail" x1="60" y1="140" x2="1540" y2="140" />
      <line className="rail" x1="60" y1="360" x2="1540" y2="360" />

      {/* Stages */}
      {/* 1. Ingestion */}
      <g transform="translate(60, 80)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="180" height="120" rx="14" />
        <text x="12" y="24" className="title">Ingestion</text>
        <text x="12" y="48" className="note">GPU Telemetry (H100)</text>
        <text x="12" y="68" className="note">RackTelemetry / Redfish</text>
        <text x="12" y="88" className="note">Blob → Delta Bronze</text>
      </g>
      <line className="arrow" x1="240" y1="140" x2="280" y2="140" />

      {/* 2. Data Quality */}
      <g transform="translate(280, 80)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="190" height="120" rx="14" />
        <text x="12" y="24" className="title">Quality</text>
        <text x="12" y="48" className="note">Schema/Type checks</text>
        <text x="12" y="68" className="note">Dedup & outliers</text>
        <text x="12" y="88" className="note">Great Expectations</text>
      </g>
      <line className="arrow" x1="470" y1="140" x2="510" y2="140" />

      {/* 3. Feature Engineering */}
      <g transform="translate(510, 80)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="210" height="120" rx="14" />
        <text x="12" y="24" className="title">FE</text>
        <text x="12" y="48" className="note">ADF jobs, joins, windows</text>
        <text x="12" y="68" className="note">Imputation & scaling</text>
        <text x="12" y="88" className="note">Delta Silver → Gold</text>
      </g>
      <line className="arrow" x1="720" y1="140" x2="760" y2="140" />

      {/* 4. Training */}
      <g transform="translate(760, 80)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="210" height="120" rx="14" />
        <text x="12" y="24" className="title">Training</text>
        <text x="12" y="48" className="note">Azure ML (XGB/TF/PT)</text>
        <text x="12" y="68" className="note">HP Tuning + CV</text>
        <text x="12" y="88" className="note">MLflow Tracking</text>
      </g>
      <line className="arrow" x1="970" y1="140" x2="1010" y2="140" />

      {/* 5. Registry */}
      <g transform="translate(1010, 80)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="200" height="120" rx="14" />
        <text x="12" y="24" className="title">Registry</text>
        <text x="12" y="48" className="note">Versioning & lineage</text>
        <text x="12" y="68" className="note">Approvals & gates</text>
        <text x="12" y="88" className="note">AUC/Brier/F1 thresholds</text>
      </g>
      <line className="arrow" x1="1210" y1="140" x2="1250" y2="140" />

      {/* 6. Canary/Shadow */}
      <g transform="translate(1250, 80)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="220" height="120" rx="14" />
        <text x="12" y="24" className="title">Canary / Shadow</text>
        <text x="12" y="48" className="note">Shadow vs prod traffic</text>
        <text x="12" y="68" className="note">Auto-rollback on SLO</text>
        <text x="12" y="88" className="note">Explainability hooks</text>
      </g>

      {/* second rail arrows */}
      <line className="arrow" x1="1360" y1="360" x2="1320" y2="360" />
      <line className="arrow" x1="1120" y1="360" x2="1080" y2="360" />
      <line className="arrow" x1="880" y1="360" x2="840" y2="360" />
      <line className="arrow" x1="640" y1="360" x2="600" y2="360" />
      <line className="arrow" x1="400" y1="360" x2="360" y2="360" />
      <line className="arrow" x1="160" y1="360" x2="120" y2="360" />

      {/* 7. Serving */}
      <g transform="translate(1120, 300)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="220" height="120" rx="14" />
        <text x="12" y="24" className="title">Serving</text>
        <text x="12" y="48" className="note">Azure ML: real-time/batch</text>
        <text x="12" y="68" className="note">Blue/green, HA</text>
        <text x="12" y="88" className="note">Cost-aware routing</text>
      </g>

      {/* 8. Monitoring */}
      <g transform="translate(880, 300)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="220" height="120" rx="14" />
        <text x="12" y="24" className="title">Monitoring</text>
        <text x="12" y="48" className="note">Latency, error, throughput</text>
        <text x="12" y="68" className="note">OFR risk & SLA/SLO</text>
        <text x="12" y="88" className="note">Drift & freshness</text>
      </g>

      {/* 9. Retraining */}
      <g transform="translate(640, 300)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="220" height="120" rx="14" />
        <text x="12" y="24" className="title">Retraining</text>
        <text x="12" y="48" className="note">Triggers: drift/seasonal</text>
        <text x="12" y="68" className="note">Human-in-the-loop labels</text>
        <text x="12" y="88" className="note">Auto pipeline kickoff</text>
      </g>

      {/* loop-back arrow to Ingestion */}
      <path className="arrow" d="M640,360 C 520,360 520,140 240,140" />
    </svg>
  );
}

type Project = {
  title: string;
  description: string;
  technologies: string[];
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
  const [isFeaturedTechExpanded, setIsFeaturedTechExpanded] = useState(false);

  /** FEATURED: Microsoft — GPU Failure Prediction */
  const featuredMicrosoft: Project = {
    title: "Microsoft — GPU Failure Prediction",
    description:
      "Production-grade ML platform to classify H100 nodes likely to enter OFR and forecast time-to-failure using survival analysis.",
    technologies: [
      "Azure Blob Storage",
      "Azure Data Factory",
      "Databricks",
      "Delta Lake",
      "Azure Machine Learning",
      "MLflow",
      "XGBoost",
      "TensorFlow",
      "PyTorch",
      "Random Survival Forest (RSF)",
      "Survival Analysis",
      "Data Quality Checks",
      "Concept Drift Detection",
      "Model Registry",
      "Canary / Shadow Deploy",
      "Auto Rollback",
      "Batch & Online Inference",
      "AUC / Brier / F1",
      "Team/Vendor Docs via RAG (SharePoint, OneNote, DOCX/PPT)",
    ],
    alt: "GPU Failure Prediction at Microsoft",
    badges: ["Featured", "Enterprise ML", "Reliability/SRE"],
  };

  /** PROJECTS GRID (no overflow; always visible) */
  const projects: Project[] = [
    {
      title:
        "🧠 PR Reviewer — Claude-Powered GitHub Review (MCP + Databricks + Notion)",
      description:
        "MCP server that connects Claude to Databricks repos and team knowledge in Notion. Auto-summarizes PRs, reasons over diffs, cross-checks engineering standards, and proposes actionable comments.",
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
        "Production-ready investment decision agent using Mosaic AI Agent Framework. Streams Yahoo Finance, persists to Delta, applies LLM reasoning for Buy/Sell/Hold with a human-in-the-loop Review App.",
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
        "Context-aware travel recommender built with Azure AI Search + RAG to surface hotels by cleanliness, location, and service quality — not just price and ratings.",
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

  const toggleProjectExpansion = (projectIndex: number) => {
    setExpandedProjects((prev) => ({ ...prev, [projectIndex]: !prev[projectIndex] }));
  };

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
      <div className="max-w-[1600px] px-6 mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-3">
            Featured Project
          </h2>
          <p className="text-lg text-text-secondary max-w-5xl mx-auto">
            <span className="font-semibold">End-to-end MLOps Pipeline</span> — Ingestion → Quality → FE → Training → Registry → Canary/Shadow → Serving → Monitoring → Retraining
          </p>
        </div>

        {/* Featured Microsoft Card — ZERO IN on the image (full width) */}
        <div
          className={`rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-xl overflow-hidden animate-on-scroll ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "0s" }}
        >
          {/* Copy */}
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
                  Predict H100 OFR risk & time-to-failure from telemetry to prevent downtime and reduce repair costs.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm mb-1">
                  <ServerCog className="w-4 h-4" />
                  <span className="font-semibold">MLOps Pipeline</span>
                </div>
                <p className="text-white/80 text-sm">
                  Ingestion → Quality → FE → Training → Registry → Canary/Shadow → Serving → Monitoring → Retraining.
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

            {/* Tech chips (+N more toggle) */}
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

          {/* THE IMAGE — full width; nothing else crowding it */}
          <div className="relative bg-slate-950">
            <MicrosoftMlopsFullWidthSVG />
            <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow">
              GPU Failure Prediction
            </div>
          </div>
        </div>

        {/* Your projects — ALWAYS VISIBLE (no overflow/accordion) */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Projects</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
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
                  <h4 className="text-xl font-bold text-text-primary mb-3">
                    {project.title}
                  </h4>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div>
                    {renderTechnologies(project.technologies, index)}
                  </div>

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
                      <a
                        href={project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                        aria-label="Learn more"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Learn More
                      </a>
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
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
}
