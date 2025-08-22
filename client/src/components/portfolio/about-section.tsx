import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  const expertiseAreas = [
    "Databricks Agent Framework (MCP)",
    "Production ML Infrastructure",
    "RAG Systems & Vector Search",
    "Real-time ML Inference",
    "MLflow Evaluation & Monitoring",
    "Enterprise AI Systems"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 animate-on-scroll ${isVisible ? "animate" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">About Me</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Software Engineer II with deep expertise in distributed systems and GPU infrastructure at enterprise scale. Located in Seattle, WA,
            I specialize in LLMs, Agentic AI, and Vector Search, specializing in
        turning research into production-grade systems. I’ve built GPU failure prediction pipelines processing
        10M+ daily events with sub-100ms inference, architected Kubernetes-orchestrated services with 99.99% uptime,
        and deployed RAG-powered knowledge platforms used by global teams. My focus spans 
        end-to-end MLOps pipelines, distributed inference, and multimodal AI agents—delivering scalable solutions that
        bridge cutting-edge research with enterprise impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`animate-on-scroll ${isVisible ? "animate" : ""}`}>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Professional Focus</h3>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
             At Microsoft, I engineer production AI infrastructure that prevents{" "}
            <span className="font-semibold text-text-primary">millions in datacenter downtime</span>. I built ML pipelines
            predicting <span className="font-semibold text-text-primary">GPU failures 13 days ahead</span> while processing{" "}
            <span className="font-semibold text-text-primary">10M+ daily events</span> with{" "}
            <span className="font-semibold text-text-primary">sub-100ms latency</span>. My distributed systems expertise spans
            designing <span className="font-semibold text-text-primary">Kubernetes-orchestrated inference</span> with{" "}
            <span className="font-semibold text-text-primary">99.99% availability</span> to architecting authentication
            platforms serving <span className="font-semibold text-text-primary">millions of AWS users</span>. I develop next-generation
            AI agents using <span className="font-semibold text-text-primary">LLMs</span> and{" "}
            <span className="font-semibold text-text-primary">RAG</span> that power enterprise knowledge systems across global
            cloud platforms.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-text-primary">Core Expertise Areas</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-blue" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`animate-on-scroll ${isVisible ? "animate" : ""}`}>
            <div className="bg-bg-section p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold text-text-primary mb-6">Technical Leadership</h4>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-blue pl-6">
                  <h5 className="font-semibold text-text-primary">Architecture & Scaling</h5>
                  <p className="text-text-secondary">
                    Designed ML systems that scale to enterprise requirements while maintaining performance and reliability
                  </p>
                </div>
                <div className="border-l-4 border-accent-yellow pl-6">
                  <h5 className="font-semibold text-text-primary">Production Excellence</h5>
                  <p className="text-text-secondary">
                    Implemented monitoring, evaluation, and deployment practices for mission-critical AI applications
                  </p>
                </div>
                <div className="border-l-4 border-primary-blue pl-6">
                  <h5 className="font-semibold text-text-primary">Innovation Impact</h5>
                  <p className="text-text-secondary">
                    Delivered 60% productivity improvements through intelligent automation and recommendation systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
