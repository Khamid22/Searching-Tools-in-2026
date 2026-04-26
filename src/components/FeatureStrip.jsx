const FEATURES = [
  {
    accent: "#e041ae",
    heading: "Ranked, not just listed",
    body: "Every tool carries an S/A/B tier rating based on real production use — not affiliate revenue or vendor relationships.",
  },
  {
    accent: "#9b35c9",
    heading: "Honest pricing",
    body: "Free tiers, per-query costs, and hidden gotchas are surfaced upfront so you can estimate costs before you integrate.",
  },
  {
    accent: "#722da5",
    heading: "AI-first perspective",
    body: "Each tool is evaluated specifically for RAG pipelines, autonomous agents, and production infrastructure — not generic web scraping.",
  },
];

export default function FeatureStrip() {
  return (
    <div className="feature-strip">
      <div className="feature-strip-inner">
        {FEATURES.map((f, i) => (
          <div key={i} style={{ paddingLeft: 20, borderLeft: `2px solid ${f.accent}` }}>
            <h3 style={{
              fontSize: 16,
              fontWeight: 500,
              color: "#0B0B0F",
              letterSpacing: "-0.01em",
              marginBottom: 10,
            }}>
              {f.heading}
            </h3>
            <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.65, margin: 0 }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
