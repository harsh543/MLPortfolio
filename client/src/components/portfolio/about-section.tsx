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
        Machine Learning Engineer with expertise in LLMs, Agentic AI, and Vector Search. 
        I design end-to-end MLOps pipelines and distributed inference systems that operate at 
        <span className="text-text-primary font-semibold"> petabyte scale</span>, bridging research with production. 
        My work includes GPU failure prediction with survival analysis, Kubernetes-orchestrated 
        inference with 99.99% uptime, and RAG-powered enterprise knowledge platforms. 
        I focus on transforming cutting-edge research into scalable, reliable AI systems 
        that deliver measurable impact at global scale.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className={`animate-on-scroll ${isVisible ? "animate" : ""}`}>
        <h3 className="text-2xl font-bold text-text-primary mb-6">Professional Focus</h3>
        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
          At Microsoft, I engineered AI infrastructure that prevented 
          <span className="text-text-primary font-semibold"> millions in datacenter downtime</span>. 
          I built ML pipelines predicting 
          <span className="text-text-primary font-semibold"> GPU failures 13 days ahead</span> while 
          processing <span className="text-text-primary font-semibold"> petabytes of telemetry daily</span>. 
          My expertise spans designing 
          <span className="text-text-primary font-semibold"> Kubernetes-orchestrated inference</span> 
          with <span className="text-text-primary font-semibold"> 99.99% availability</span>, 
          architecting authentication platforms serving 
          <span className="text-text-primary font-semibold"> millions of AWS users</span>, and 
          developing <span className="text-text-primary font-semibold"> agentic AI systems</span> 
          with LLMs and RAG to power enterprise-scale intelligence.
        </p>
      </div>
    </div>

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
