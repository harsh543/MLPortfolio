import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  ExternalLink,
  Github,
  GitBranch,
  Layers3,
  Linkedin,
  Menu,
  Radio,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  X,
  Zap,
} from "lucide-react";

import harshPhoto from "@assets/1516853437370_1754734932722.jpeg";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
  accent: string;
  icon: typeof Code2;
  label: string;
};

const projects: Project[] = [
  {
    title: "Pulse: Voice-Steered Drums",
    description:
      "A WebMCP drum loop pad that lets anyone play by hand and steer tempo, swing, and sound by voice.",
    tags: ["WebMCP", "TypeScript", "Voice UX"],
    href: "https://devpost.com/software/pulse-voice-steered-drums",
    repo: "https://github.com/harsh543/pulse-webmcp",
    accent: "lime",
    icon: Radio,
    label: "OpenAI WebMCP Challenge",
  },
  {
    title: "RunGuard",
    description:
      "An AI gate for every deploy: reviews changes, catches unsafe releases, explains the block, and runs on every push.",
    tags: ["AI safety", "CI/CD", "Developer tools"],
    href: "https://devpost.com/software/runguard",
    accent: "orange",
    icon: ShieldCheck,
    label: "Hackathon build",
  },
  {
    title: "VitalVoice",
    description:
      "A voice health agent that discovers modular MCP tools at runtime for symptom tracking, medication checks, and clinical summaries.",
    tags: ["MCP", "FastAPI", "Voice AI"],
    href: "https://devpost.com/software/vitalvoice-ai-health-agent-via-mcp",
    repo: "https://github.com/harsh543/vitalvoice",
    accent: "blue",
    icon: Sparkles,
    label: "AI health agent",
  },
  {
    title: "Nemotron Ops Commander",
    description:
      "An AI-powered SRE incident response system combining NVIDIA Nemotron, retrieval, and multi-agent infrastructure operations.",
    tags: ["Nemotron", "RAG", "SRE"],
    href: "https://github.com/harsh543/nemotron-ops-commander",
    accent: "purple",
    icon: Terminal,
    label: "Production-minded prototype",
  },
  {
    title: "Eyewitness",
    description:
      "Physics-first collision fault analysis from dashcam video, with evidence trails that make every verdict inspectable.",
    tags: ["Computer vision", "YOLO11", "Evidence"],
    href: "https://github.com/harsh543/eyewitness",
    accent: "orange",
    icon: Zap,
    label: "Physical AI",
  },
  {
    title: "InboxWhisper",
    description:
      "A hands-free voice assistant that connects speech, reasoning, Gmail, and Calendar actions into one workflow.",
    tags: ["ElevenLabs", "LLM agents", "Automation"],
    href: "https://github.com/harsh543/InboxWhisper",
    accent: "lime",
    icon: Radio,
    label: "Voice automation",
  },
];

const openSourceProjects = [
  {
    name: "MCP Python SDK",
    description: "The official Python SDK for Model Context Protocol servers and clients.",
    href: "https://github.com/harsh543/python-sdk",
  },
  {
    name: "Helion",
    description: "A Python-embedded DSL for fast, scalable ML kernels with less boilerplate.",
    href: "https://github.com/harsh543/helion",
  },
  {
    name: "GPU infrastructure",
    description: "Work across GPU observability, operators, kernels, and serving infrastructure.",
    href: "https://github.com/harsh543",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;

  return (
    <article className={`project-card project-card-${project.accent}`}>
      <div className="project-card-topline">
        <span className="project-index">0{index + 1}</span>
        <span className="project-kind">{project.label}</span>
        <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
      </div>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-card-footer">
        <a href={project.href} target="_blank" rel="noreferrer">
          View project <ArrowUpRight size={16} />
        </a>
        {project.repo && (
          <a
            className="repo-link"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
          >
            <Github size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <nav className={`site-nav ${isScrolled ? "site-nav-scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Harsh Bajaj home">
          <span className="wordmark-mark">HB</span>
          <span>Harsh Bajaj</span>
        </a>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#open-source" onClick={closeMenu}>Open source</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="pulse-dot" />
                Senior AI/ML Engineer · Seattle
              </div>
              <h1>
                I build the
                <span className="headline-highlight"> infrastructure</span>
                <br />
                that lets AI act.
              </h1>
              <p className="hero-lede">
                Production-minded systems for agents, models, and the people who depend on them.
                Currently building AI infrastructure at <strong>Aircall</strong>.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore selected work <ArrowDown size={17} />
                </a>
                <a className="button button-quiet" href="https://github.com/harsh543" target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-proof">
                <div className="proof-avatar">
                  <img src={harshPhoto} alt="Harsh Bajaj" />
                </div>
                <p>
                  AI infrastructure engineer driven by
                  <span> customer impact, security, and production-ready engineering.</span>
                </p>
              </div>
            </div>

            <div className="hero-art" aria-label="AI infrastructure profile">
              <div className="hero-art-glow" />
              <div className="terminal-window">
                <div className="terminal-bar">
                  <span className="terminal-dots"><i /><i /><i /></span>
                  <span>control_plane / status</span>
                  <span className="terminal-live"><span /> live</span>
                </div>
                <div className="terminal-content">
                  <p className="terminal-comment">// make intelligent systems useful</p>
                  <p><span className="terminal-key">const</span> <span className="terminal-name">agent</span> = {"{"}</p>
                  <p className="terminal-indent"><span className="terminal-prop">context</span>: <span className="terminal-string">&quot;just enough&quot;</span>,</p>
                  <p className="terminal-indent"><span className="terminal-prop">tools</span>: <span className="terminal-string">&quot;discoverable&quot;</span>,</p>
                  <p className="terminal-indent"><span className="terminal-prop">actions</span>: <span className="terminal-string">&quot;production-ready&quot;</span>,</p>
                  <p>{"}"}</p>
                  <div className="terminal-divider" />
                  <div className="terminal-metrics">
                    <div><span>gateway</span><strong>healthy</strong></div>
                    <div><span>context</span><strong>optimized</strong></div>
                    <div><span>agents</span><strong>connected</strong></div>
                  </div>
                </div>
              </div>
              <div className="orbit-card orbit-card-top">
                <Layers3 size={17} />
                <span>multi-tenant MCP</span>
              </div>
              <div className="orbit-card orbit-card-bottom">
                <ShieldCheck size={17} />
                <span>OAuth 2.1 + PKCE</span>
              </div>
              <div className="hero-number"><span>01</span><small>systems<br />that ship</small></div>
            </div>
          </div>
          <a className="scroll-cue" href="#signal">
            <span>Scroll to explore</span>
            <ArrowDown size={17} />
          </a>
        </section>

        <section id="signal" className="signal-section">
          <div className="signal-intro">
            <SectionLabel>Signal / 01</SectionLabel>
            <h2>Engineering for the moment after the demo.</h2>
            <p>
              The interesting part of AI is not just what a model can say. It is what the surrounding
              system lets it safely understand, decide, and do.
            </p>
          </div>
          <div className="signal-grid">
            <div className="signal-stat">
              <strong>13<span> days</span></strong>
              <p>advance warning in GPU predictive-failure work</p>
            </div>
            <div className="signal-stat">
              <strong>&lt;120<span> ms</span></strong>
              <p>TP99 latency target for real-time ML pipelines</p>
            </div>
            <div className="signal-stat">
              <strong>99.99<span>%</span></strong>
              <p>fleet uptime through proactive maintenance</p>
            </div>
            <div className="signal-stat signal-stat-muted">
              <strong>144</strong>
              <p>public repositories across AI, infra, and developer tools</p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-wrap">
          <div className="about-heading">
            <SectionLabel>Now / Before</SectionLabel>
            <h2>From model context to real-world context.</h2>
          </div>
          <div className="story-layout">
            <div className="story-copy">
              <p className="story-lede">
                At Aircall, I work on the infrastructure that helps voice and messaging agents
                discover and use capabilities in the middle of a conversation.
              </p>
              <p>
                That means thinking about MCP as production infrastructure: multi-tenancy, OAuth
                2.1 / PKCE, token-efficient context, and systems that stay reliable when the
                conversation is live and the next action matters.
              </p>
              <a className="text-link" href="https://aircall.io/blog/tech/aircall-opens-ai-to-ecosystem/" target="_blank" rel="noreferrer">
                Read the AI ecosystem perspective <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="timeline">
              <div className="timeline-item timeline-current">
                <span className="timeline-dot" />
                <div>
                  <p className="timeline-date">2026 — now</p>
                  <h3>Aircall <em>· Senior AI/ML Engineer</em></h3>
                  <p>Production MCP infrastructure for connected voice-agent workflows.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <div>
                  <p className="timeline-date">2021 — 2025</p>
                  <h3>Microsoft <em>· AI / ML engineering</em></h3>
                  <p>Telemetry, predictive failure intelligence, and infrastructure for AI accelerators.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <div>
                  <p className="timeline-date">Earlier</p>
                  <h3>AWS <em>· systems foundations</em></h3>
                  <p>Building the systems thinking that still shapes how I approach AI today.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-wrap">
          <div className="section-heading-row">
            <div>
              <SectionLabel>Selected work / 02</SectionLabel>
              <h2>Builds with a point of view.</h2>
            </div>
            <a className="text-link heading-link" href="https://github.com/harsh543" target="_blank" rel="noreferrer">
              Browse all on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="open-source" className="opensource-section">
          <div className="section-wrap">
            <div className="opensource-header">
              <div>
                <SectionLabel>Open source / 03</SectionLabel>
                <h2>Systems are better when<br /><span>the edges are open.</span></h2>
              </div>
              <GitBranch className="opensource-icon" size={58} strokeWidth={1} />
            </div>
            <div className="opensource-grid">
              <div className="opensource-copy">
                <p>
                  I contribute where AI meets the hard parts of software: protocols, kernels,
                  serving, observability, and developer experience.
                </p>
                <a className="button button-light" href="https://github.com/harsh543" target="_blank" rel="noreferrer">
                  See the GitHub profile <Github size={17} />
                </a>
              </div>
              <div className="opensource-list">
                {openSourceProjects.map((project, index) => (
                  <a className="opensource-item" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                    <span className="opensource-item-number">0{index + 1}</span>
                    <span>
                      <strong>{project.name}</strong>
                      <small>{project.description}</small>
                    </span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div className="ecosystem-note">
              <div className="ecosystem-note-icon"><BookOpen size={20} /></div>
              <div>
                <p className="section-label">Field note</p>
                <h3>Connect once. Let every agent use it.</h3>
                <p>Aircall&apos;s developer guide is the clearest expression of the ecosystem I&apos;m helping build toward.</p>
              </div>
              <a href="https://aircall.io/blog/tech/ai-ecosystem-developer-guide/" target="_blank" rel="noreferrer">
                Read the guide <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="contact-panel">
            <div className="contact-copy">
              <SectionLabel>Open to the right problem / 04</SectionLabel>
              <h2>Have an ambitious system to build?</h2>
              <p>
                I like hard infrastructure problems, useful agents, and teams that care about
                what happens after launch.
              </p>
            </div>
            <div className="contact-actions">
              <a className="contact-link" href="https://linkedin.com/in/harshbajaj-ai-ml-engineer" target="_blank" rel="noreferrer">
                <Linkedin size={19} />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-link" href="https://devpost.com/harshrocks" target="_blank" rel="noreferrer">
                <Trophy size={19} />
                <span>See the hackathon trail</span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-link" href="https://github.com/harsh543" target="_blank" rel="noreferrer">
                <Github size={19} />
                <span>Follow the work in public</span>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <footer className="site-footer">
            <span>© 2026 Harsh Bajaj</span>
            <span className="footer-center"><Check size={14} /> Building useful AI infrastructure</span>
            <span>Seattle · WA</span>
          </footer>
        </section>
      </main>
    </div>
  );
}