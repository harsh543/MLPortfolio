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

/** Full-width Microsoft MLOps pipeline + Datacenter Monitoring inset */
function MicrosoftMlopsFullWidthSVG(): JSX.Element {
  return (
    <svg
      role="img"
      aria-label="MLOps pipeline and Datacenter Monitoring for GPU failure prediction"
      viewBox="0 0 1400 560"
      className="w-full h-[420px] md:h-[480px] lg:h-[520px] xl:h-[560px]"
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
            .chip  { fill: #111827; stroke: #374151; stroke-width: 1; }
          `}
        </style>
      </defs>

      <rect x="0" y="0" width="1400" height="560" fill="#0b1220" />
      <rect x="20" y="20" width="1360" height="520" rx="20" fill="#0b1220" />
      <rect x="20" y="20" width="1360" height="520" rx="20" fill="url(#mlopsA)" opacity="0.08" />

      {/* LEFT 70%: Expanded MLOps pipeline (3 rows) */}
      <g transform="translate(36, 56)">
        {/* Row 1 */}
        <g filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="300" height="110" rx="14" />
          <text x="16" y="28" className="title">Data Ingestion</text>
          <text x="16" y="52" className="note">GPU Telemetry (H100), RackTelemetry</text>
          <text x="16" y="74" className="note">Redfish Alerts → Azure Blob / Delta Bronze</text>
        </g>
        <line className="arrow" x1="302" y1="56" x2="352" y2="56" />
        <g transform="translate(354,0)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="260" height="110" rx="14" />
          <text x="16" y="28" className="title">Data Quality</text>
          <text x="16" y="52" className="note">Schema checks, dedupe, outlier guards</text>
          <text x="16" y="74" className="note">Great Expectations / custom rules</text>
        </g>
        <line className="arrow" x1="616" y1="56" x2="666" y2="56" />
        <g transform="translate(668,0)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="280" height="110" rx="14" />
          <text x="16" y="28" className="title">Feature Engineering</text>
          <text x="16" y="52" className="note">ADF jobs, joins, windowing, imputations</text>
          <text x="16" y="74" className="note">Delta Silver → Gold</text>
        </g>
        <line className="arrow" x1="950" y1="56" x2="1000" y2="56" />
        <g transform="translate(1002,0)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="280" height="110" rx="14" />
          <text x="16" y="28" className="title">Feature Store</text>
          <text x="16" y="52" className="note">Consistency between train/serve</text>
          <text x="16" y="74" className="note">Point-in-time joins</text>
        </g>

        {/* Row 2 */}
        <g transform="translate(0,132)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="330" height="120" rx="14" />
          <text x="16" y="28" className="title">Model Training</text>
          <text x="16" y="52" className="note">Azure ML (XGB / KNN / LR / LSTM / RSF)</text>
          <text x="16" y="74" className="note">Hyperparam tuning & CV</text>
          <text x="16" y="96" className="note">MLflow tracking & artifacts</text>
        </g>
        <line className="arrow" x1="332" y1="192" x2="382" y2="192" />
        <g transform="translate(384,132)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="320" height="120" rx="14" />
          <text x="16" y="28" className="title">Model Registry</text>
          <text x="16" y="52" className="note">Versioning, lineage, approvals</text>
          <text x="16" y="74" className="note">Policy gates (AUC/Brier/F1)</text>
          <text x="16" y="96" className="note">Bias / fairness checks</text>
        </g>
        <line className="arrow" x1="706" y1="192" x2="756" y2="192" />
        <g transform="translate(758,132)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="320" height="120" rx="14" />
          <text x="16" y="28" className="title">Canary & Shadow</text>
          <text x="16" y="52" className="note">Shadow vs prod, canary % traffic</text>
          <text x="16" y="74" className="note">Auto-rollback on SLO breach</text>
          <text x="16" y="96" className="note">Explainability hooks</text>
        </g>

        {/* Row 3 */}
        <g transform="translate(0,272)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="320" height="116" rx="14" />
          <text x="16" y="28" className="title">Model Serving</text>
          <text x="16" y="52" className="note">Azure ML endpoints: real-time & batch</text>
          <text x="16" y="74" className="note">Blue/green, HA</text>
          <text x="16" y="96" className="note">Cost-aware routing</text>
        </g>
        <line className="arrow" x1="322" y1="330" x2="372" y2="330" />
        <g transform="translate(374,272)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="320" height="116" rx="14" />
          <text x="16" y="28" className="title">Monitoring</text>
          <text x="16" y="52" className="note">Latency, error, throughput, OFR risk</text>
          <text x="16" y="74" className="note">Data / concept drift, freshness</text>
          <text x="16" y="96" className="note">SLA/SLO tracking</text>
        </g>
        <line className="arrow" x1="696" y1="330" x2="746" y2="330" />
        <g transform="translate(748,272)" filter="url(#mlopsShadow)">
          <rect className="panel" x="0" y="0" width="320" height="116" rx="14" />
          <text x="16" y="28" className="title">Retraining Triggers</text>
          <text x="16" y="52" className="note">Drift, seasonal, OFR surge</text>
          <text x="16" y="74" className="note">Human-in-the-loop labels</text>
          <text x="16" y="96" className="note">Auto-pipeline kickoff</text>
        </g>
      </g>

      {/* RIGHT inset: Datacenter Monitoring */}
      <g transform="translate(1060, 56)" filter="url(#mlopsShadow)">
        <rect className="panel" x="0" y="0" width="300" height="332" rx="16" />
        <text x="14" y="24" className="title">Datacenter Monitoring</text>
        <text x="14" y="44" className="note">GPU Health • OFR Queue • SLA Impact</text>

        {/* heatmap */}
        <g transform="translate(14,60)">
          <rect className="chip" x="0" y="0" width="272" height="110" rx="10" />
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 6 }).map((__, c) => {
              const x = 10 + c * 42;
              const y = 10 + r * 24;
              const colors = ["#16a34a", "#22c55e", "#f59e0b", "#ef4444"];
              const color = colors[(r + c) % colors.length];
              return <rect key={`cell-${r}-${c}`} x={x} y={y} width="36" height="16" rx="3" fill={color} opacity="0.85" />;
            })
          )}
          <text x="10" y="104" className="note">Cluster Heatmap</text>
        </g>

        {/* alerts */}
        <g transform="translate(14,182)">
          <rect className="chip" x="0" y="0" width="272" height="76" rx="10" />
          <text x="10" y="20" className="title">Alerts</text>
          <text x="10" y="40" className="note">• Node A17: PCIe Correctable ↑ (12h)</text>
          <text x="10" y="58" className="note">• Rack R3: Thermal drift (3h) → Watch</text>
        </g>

        {/* tiny chart */}
        <g transform="translate(14,268)">
          <rect className="chip" x="0" y="0" width="272" height="64" rx="10" />
          <polyline
            points="8,48 28,36 48,40 68,28 88,34 108,22 128,30 148,18 168,26 188,20 208,14 228,18 248,10 264,14"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <text x="10" y="18" className="title">OFR Risk Trend</text>
          <text x="200" y="18" className="note">past 24h</text>
        </g>
      </g>

      {/* badge */}
      <g>
        <rect x="1220" y="24" rx="12" ry="12" width="160" height="28" fill="#10b981" />
        <text x="1240" y="43" className="title">GPU Failure Prediction</text>
      </g>
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
  const [isFeaturedTechExpanded, setIsFeaturedTechExpanded] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<ExpandedMap>({});
  const [showMore, setShowMore] = useState(false);

  /** FEATURED: Microsoft — GPU Failure Prediction*/
  const featuredMicrosoft: Project = {
    title: "Microsoft — GPU Failure Prediction",
    description:
      "Production-grade ML platform to classify H100 nodes likely to enter OFR and forecast time-to-failure using survival analysis. End-to-end MLOps covers ingestion, quality, feature engineering, training, registry, canary/shadow, serving, monitoring, and retraining triggers.",
    technologies: [
      "Azure Blob Storage",
      "Azure Data Factory",
      "Databricks",
      "Delta Lake",
      "Azure Machine Learning",
      "MLflow",
      "XGBoost",
      "Tensorflow",
      "Pytorch",
      "Random Survival Forest (RSF)",
      "Survival Analysis",
      "Data Quality Checks",
      "Concept Drift Detection",
      "Model Registry",
      "Canary / Shadow Deploy",
      "Auto Rollback",
      "Batch & Online Inference",
      "AUC / Brier / F1",
      "Document RAG Intelligence System",
    ],
    alt: "GPU Failure Prediction at Microsoft",
    badges: ["Featured", "Enterprise ML", "Reliability/SRE"],
  };

  /** SECONDARY PROJECTS (hidden behind accordion) */
  const projects: Project[] = [
    {
      title:
        "PR Reviewer — Claude-Powered GitHub Review (MCP + Databricks + Notion)",
      description:
        "MCP server that connects Claude to Databricks repos and Notion knowledge. Auto-summarizes PRs, reasons over diffs, cross-references engineering standards, and proposes actionable comments.",
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
      <div className="max-w-[1400px] px-6 mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-3">
            Featured Project
          </h2>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto">
            <span className="font-semibold">MLOps Pipeline</span> — Ingestion → Quality → FE → Training → Registry → Canary/Shadow → Serving → Monitoring → Retraining
          </p>
        </div>

        {/* Featured: full-width */}
        <div
          className={`rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-xl overflow-hidden animate-on-scroll ${isVisible ? "animate" : ""}`}
          style={{ animationDelay: "0s" }}
        >
          {/* Top copy */}
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

            {/* Info tiles */}
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

            {/* Featured tech chips (+N more toggle) */}
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

          {/* Full-width visual */}
          <div className="relative bg-slate-950">
            <MicrosoftMlopsFullWidthSVG />
            <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow">
              GPU Failure Prediction
            </div>
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs">
              Ops docs via <span className="font-semibold">Document RAG</span>
            </div>
          </div>
        </div>

        {/* Accordion: More Projects */}
        <div className="mt-10">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            aria-controls="more-projects"
            className="mx-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 shadow hover:shadow-md transition
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            {showMore ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide More Projects
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More Projects
              </>
            )}
          </button>

          {/* Collapsible region */}
          <div
            id="more-projects"
            className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${
              showMore ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-8 grid lg:grid-cols-3 gap-8">
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
