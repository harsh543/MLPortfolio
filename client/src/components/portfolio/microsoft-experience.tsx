import "../../microsoft-experience.css";

const microsoftMetrics = [
  {
    value: "13",
    unit: "days",
    label: "advance warning",
    detail: "Predictive GPU failure detection surfaced risk before failure.",
  },
  {
    value: "10M+",
    unit: "events / day",
    label: "telemetry processed",
    detail: "ML pipelines built to handle a continuous, high-volume event stream.",
  },
  {
    value: "<120",
    unit: "ms TP99",
    label: "latency target",
    detail: "Tail-latency target for real-time ML pipelines.",
  },
  {
    value: "99.99%",
    unit: "availability",
    label: "fleet uptime",
    detail: "Proactive maintenance designed around operational reliability.",
  },
];

export default function MicrosoftExperience() {
  return (
    <section
      aria-labelledby="microsoft-heading"
      className="microsoft-experience"
      id="microsoft"
    >
      <div className="microsoft-experience-inner">
        <div className="microsoft-experience-heading">
          <div className="microsoft-experience-kicker">
            <span className="microsoft-mark" aria-hidden="true">M</span>
            <span>Before Aircall <span className="microsoft-kicker-divider">/</span> 2021—2025</span>
          </div>
          <h2 id="microsoft-heading">
            Production ML
            <br />
            infrastructure at <span>Microsoft.</span>
          </h2>
          <p className="microsoft-experience-summary">
            Architected telemetry and ML pipelines for AI accelerators—turning
            fleet signals into earlier failure warnings and more reliable operations.
          </p>
          <div className="microsoft-role">
            <span className="microsoft-role-rule" aria-hidden="true" />
            <span>AI / ML engineering</span>
          </div>
        </div>

        <div className="microsoft-proof">
          <div className="microsoft-proof-topline">
            <span>Operational signal</span>
            <span>GPU predictive maintenance</span>
          </div>
          <div className="microsoft-metrics">
            {microsoftMetrics.map((metric, index) => (
              <article className="microsoft-metric" key={metric.label}>
                <span className="microsoft-metric-index">0{index + 1}</span>
                <div className="microsoft-metric-value">
                  <strong>{metric.value}</strong>
                  <span>{metric.unit}</span>
                </div>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
          <div className="microsoft-stack">
            <span className="microsoft-stack-label">Technology</span>
            <div className="microsoft-stack-tags" aria-label="Technologies used">
              <span>Databricks</span>
              <span>Apache Spark</span>
              <span>Azure Synapse</span>
              <span>MLflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
