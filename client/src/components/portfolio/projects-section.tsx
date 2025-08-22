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
/* --- MOBILE: concise MLOps pipeline + monitoring sparkline --- */
function MobileMLOpsMini() {
  return (
    <div
      role="group"
      aria-label="Mobile MLOps summary"
      className="p-4 bg-slate-900 text-white"
    >
      {/* Step chips */}
      <div className="flex flex-wrap gap-2 mb-3">
        {["Telemetry", "Features", "TensorFlow", "MLflow"].map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/10"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Inline legend */}
      <div className="flex items-center gap-4 text-[11px] text-white/80 mb-2">
        <div className="flex items-center gap-1">
          <span className="inline-block w-3 h-1.5 rounded bg-emerald-400" />
          AUC
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block w-3 h-1.5 rounded bg-sky-400" />
          F1
        </div>
        <div className="flex items-center gap-1">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500" />
          Drift flag
        </div>
      </div>

      {/* Sparkline card */}
      <div className="rounded-lg bg-black/30 border border-white/5 p-3">
        <div className="flex items-baseline justify-between mb-2">
          <div className="text-xs font-semibold">Monitoring</div>
          <div className="text-[10px] text-white/70">AUC / F1 • SLOs • Drift</div>
        </div>

        {/* Accessible tiny chart */}
        <svg
          viewBox="0 0 320 80"
          role="img"
          aria-label="AUC and F1 trend with a drift event"
          className="w-full h-20"
        >
          <defs>
            <linearGradient id="aucG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
            <linearGradient id="f1G" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          {/* grid */}
          <g opacity=".25" stroke="#334155" strokeWidth="1">
            <path d="M0 20 H320" />
            <path d="M0 40 H320" />
            <path d="M0 60 H320" />
          </g>

          {/* AUC line */}
          <path
            d="M0 60 L40 56 L80 52 L120 48 L160 44 L200 38 L240 32 L280 28 L320 24"
            fill="none"
            stroke="url(#aucG)"
            strokeWidth="3"
          />
          {/* F1 line */}
          <path
            d="M0 64 L40 62 L80 58 L120 54 L160 50 L200 46 L240 44 L280 42 L320 40"
            fill="none"
            stroke="url(#f1G)"
            strokeWidth="2.5"
          />

          {/* Drift event marker */}
          <circle cx="210" cy="46" r="4" fill="#f43f5e" />
          <text x="216" y="44" fontSize="9" fill="#e5e7eb">drift</text>
        </svg>

        {/* SLO row */}
        <div className="mt-2 flex items-center justify-between text-[11px]">
          <div className="text-white/75">
            SLO: p95&nbsp;latency <span className="font-semibold text-white">≤ 120ms</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-600/80 text-white">Healthy</span>
        </div>
      </div>

      {/* Registry/Serving status */}
      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        <div className="rounded-md bg-white/5 px-2 py-1.5">
          <div className="text-white/70">MLflow Model</div>
          <div className="font-semibold">v23 • Production</div>
        </div>
        <div className="rounded-md bg-white/5 px-2 py-1.5">
          <div className="text-white/70">Canary</div>
          <div className="font-semibold">10% traffic</div>
        </div>
      </div>
    </div>
  );
}

/* --- NEW: ultra-compact, mobile-first diagram (TensorFlow + MLflow) --- */
function GpuFailureCompactSVG(): JSX.Element {
  return (
    <svg
      role="img"
      aria-label="Mobile diagram: Telemetry to TensorFlow classifier with MLflow monitoring"
      viewBox="0 0 720 240"
      className="w-[680px] h-[220px] md:hidden"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="gB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <marker id="m" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="url(#gB)" />
        </marker>
        <style>{`
          .card { fill:#0f172a; stroke:#334155; stroke-width:1.25 }
          .ttl  { font:700 13px ui-sans-serif,system-ui; fill:#e5e7eb }
          .sub  { font:12px ui-sans-serif,system-ui; fill:#cbd5e1 }
          .arr  { stroke:url(#gB); stroke-width:3; fill:none; marker-end:url(#m) }
        `}</style>
      </defs>

      <rect x="0" y="0" width="720" height="240" fill="#0b1220" />
      <rect x="8" y="8" width="704" height="224" rx="16" fill="url(#gA)" opacity=".08" />

      {/* Telemetry */}
      <g transform="translate(16,60)">
        <rect className="card" width="150" height="120" rx="12" />
        <text x="12" y="28" className="ttl">Telemetry</text>
        <text x="12" y="52" className="sub">H100/Rack metrics</text>
        <text x="12" y="72" className="sub">Delta Bronze</text>
      </g>
      <line className="arr" x1="166" y1="120" x2="210" y2="120" />

      {/* Features */}
      <g transform="translate(210,60)">
        <rect className="card" width="150" height="120" rx="12" />
        <text x="12" y="28" className="ttl">Features</text>
        <text x="12" y="52" className="sub">Windows/Scaling</text>
        <text x="12" y="72" className="sub">Delta Silver→Gold</text>
      </g>
      <line className="arr" x1="360" y1="120" x2="404" y2="120" />

      {/* TensorFlow Classifier */}
      <g transform="translate(404,46)">
        <rect className="card" width="170" height="148" rx="12" />
        <text x="12" y="28" className="ttl">TensorFlow</text>
        <text x="12" y="52" className="sub">Classifier: OFR risk</text>
        <text x="12" y="72" className="sub">Outputs: p(failure),</text>
        <text x="12" y="88" className="sub">time-to-failure</text>
        <text x="12" y="112" className="sub">Tracked in MLflow</text>
      </g>
      <line className="arr" x1="574" y1="120" x2="612" y2="120" />

      {/* MLflow/Monitoring */}
      <g transform="translate(612,46)">
        <rect className="card" width="92" height="148" rx="12" />
        <text x="12" y="28" className="ttl">MLflow</text>
        <text x="12" y="52" className="sub">Registry</text>
        <text x="12" y="72" className="sub">Serving</text>
        <text x="12" y="92" className="sub">Monitor</text>
      </g>
    </svg>
  );
}

/* --- UPDATED: desktop/tablet diagram (trimmed and clearer) --- */
function MicrosoftMlopsFullWidthSVG(): JSX.Element {
  return (
    <svg
      role="img"
      aria-label="MLOps: Telemetry → Features → TensorFlow Classifier → MLflow Registry/Serving → Monitoring → Retraining"
      viewBox="0 0 1600 420"
      className="hidden md:block w-full h-[340px] lg:h-[400px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="mlA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="mlB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="url(#mlB)" />
        </marker>
        <filter id="sh" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodOpacity="0.25" />
        </filter>
        <style>{`
          .p { fill:#0f172a; stroke:#334155; stroke-width:1.25 }
          .t { font:700 13px ui-sans-serif,system-ui; fill:#e5e7eb }
          .n { font:12px ui-sans-serif,system-ui; fill:#cbd5e1 }
          .a { stroke:url(#mlB); stroke-width:3; fill:none; marker-end:url(#ah) }
          .rail { stroke:#334155; stroke-width:1.25; stroke-dasharray:6 6; opacity:.6 }
        `}</style>
      </defs>

      <rect x="0" y="0" width="1600" height="420" fill="#0b1220" />
      <rect x="16" y="16" width="1568" height="388" rx="20" fill="url(#mlA)" opacity=".08" />

      {/* Top rail */}
      <line className="rail" x1="80" y1="120" x2="1520" y2="120" />

      {/* Ingestion */}
      <g transform="translate(80, 60)" filter="url(#sh)">
        <rect className="p" width="200" height="120" rx="14" />
        <text x="12" y="26" className="t">Telemetry</text>
        <text x="12" y="50" className="n">H100/Rack metrics</text>
        <text x="12" y="70" className="n">Blob → Delta Bronze</text>
      </g>
      <line className="a" x1="280" y1="120" x2="320" y2="120" />

      {/* Features */}
      <g transform="translate(320, 60)" filter="url(#sh)">
        <rect className="p" width="220" height="120" rx="14" />
        <text x="12" y="26" className="t">Feature Engineering</text>
        <text x="12" y="50" className="n">Joins, windows, scaling</text>
        <text x="12" y="70" className="n">Delta Silver → Gold</text>
      </g>
      <line className="a" x1="540" y1="120" x2="580" y2="120" />

      {/* TensorFlow Classifier */}
      <g transform="translate(580, 44)" filter="url(#sh)">
        <rect className="p" width="260" height="152" rx="14" />
        <text x="12" y="28" className="t">Training — TensorFlow</text>
        <text x="12" y="52" className="n">Classifier: OFR risk</text>
        <text x="12" y="72" className="n">Target: failure / TTL</text>
        <text x="12" y="92" className="n">Tracked with MLflow</text>
      </g>
      <line className="a" x1="840" y1="120" x2="880" y2="120" />

      {/* MLflow Registry / Serving */}
      <g transform="translate(880, 60)" filter="url(#sh)">
        <rect className="p" width="240" height="120" rx="14" />
        <text x="12" y="26" className="t">MLflow Registry</text>
        <text x="12" y="50" className="n">Models + lineage</text>
        <text x="12" y="70" className="n">Promote / rollback</text>
      </g>
      <line className="a" x1="1120" y1="120" x2="1160" y2="120" />

      <g transform="translate(1160, 60)" filter="url(#sh)">
        <rect className="p" width="200" height="120" rx="14" />
        <text x="12" y="26" className="t">Serving</text>
        <text x="12" y="50" className="n">Batch + real-time</text>
        <text x="12" y="70" className="n">Blue/green, HA</text>
      </g>
      <line className="a" x1="1360" y1="120" x2="1400" y2="120" />

      {/* Monitoring (bottom) */}
      <line className="rail" x1="1400" y1="300" x2="200" y2="300" />
      <g transform="translate(1260, 240)" filter="url(#sh)">
        <rect className="p" width="220" height="120" rx="14" />
        <text x="12" y="26" className="t">Monitoring</text>
        <text x="12" y="50" className="n">AUC/Brier/F1 • Drift</text>
        <text x="12" y="70" className="n">Freshness • SLOs</text>
      </g>
      <line className="a" x1="1260" y1="300" x2="1200" y2="300" />
      <g transform="translate(980, 240)" filter="url(#sh)">
        <rect className="p" width="220" height="120" rx="14" />
        <text x="12" y="26" className="t">Retraining</text>
        <text x="12" y="50" className="n">Drift/seasonal triggers</text>
        <text x="12" y="70" className="n">Auto pipelines</text>
      </g>
      <path className="a" d="M980,300 C 860,300 860,120 320,120" />
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

     {/* FEATURED Microsoft Card (mobile-safe) */}
      <div
        className={`rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-xl overflow-hidden animate-on-scroll ${isVisible ? "animate" : ""}`}
      >
        {/* Copy */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-semibold px-2 py-0.5 bg-white/10 rounded-full tracking-wide">
              Featured
            </span>
          </div>
      
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">
            {featuredMicrosoft.title}
          </h3>
          <p className="text-white/90 leading-relaxed mb-5 sm:mb-6">
            {featuredMicrosoft.description}
          </p>
      
          {/* 3-up stats fold to 1-up on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sm mb-1">
                <Activity className="w-4 h-4" />
                <span className="font-semibold">Use Case</span>
              </div>
              <p className="text-white/80 text-sm">
                Predict H100 OFR risk & time-to-failure from telemetry.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sm mb-1">
                <ServerCog className="w-4 h-4" />
                <span className="font-semibold">Pipeline</span>
              </div>
              <p className="text-white/80 text-sm">
                Telemetry → Features → <span className="font-semibold">TensorFlow Classifier</span> → MLflow.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sm mb-1">
                <FileText className="w-4 h-4" />
                <span className="font-semibold">Monitoring</span>
              </div>
              <p className="text-white/80 text-sm">
                AUC/Brier/F1, drift, freshness, SLOs with auto-retrain.
              </p>
            </div>
          </div>
      
          {/* Tech chips with wrap + toggle preserved */}
          <div className="flex flex-wrap items-center gap-2">
            {(isFeaturedTechExpanded
              ? featuredMicrosoft.technologies
              : featuredMicrosoft.technologies.slice(0, 12)
            ).map((t, i) => (
              <span key={`ft-${i}-${t}`} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
            {featuredMicrosoft.technologies.length > 12 && (
              <button
                type="button"
                onClick={() => setIsFeaturedTechExpanded(v => !v)}
                aria-expanded={isFeaturedTechExpanded}
                className="text-xs px-3 py-1 rounded-full font-semibold bg-blue-500/90 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
              >
                {isFeaturedTechExpanded ? "Show less" : `+${featuredMicrosoft.technologies.length - 12} more`}
              </button>
            )}
          </div>
        </div>
      
        {/* Diagram area — safe on mobile via horizontal scroll, responsive swap */}
        <div className="relative bg-slate-950">
          <div className="md:hidden">
            <MobileMLOpsMini />
          </div>
          <div className="overflow-x-auto overscroll-x-contain no-scrollbar">
            <GpuFailureCompactSVG />          {/* shows only on mobile via its own md:hidden class */}
            <MicrosoftMlopsFullWidthSVG />    {/* hidden on mobile, md+ only */}
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow">
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
