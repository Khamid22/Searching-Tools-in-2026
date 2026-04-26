const COMPARE_TOOLS = [
  {
    name: "Exa",
    tagline: "Neural semantic search",
    color: "#7C3AED",
    tier: "S-Tier",
    pricing: "$5 / 1K queries",
    scores: [
      { label: "Latency",       value: 9 },
      { label: "Pricing Value", value: 7 },
      { label: "Free Tier",     value: 8 },
      { label: "Ease of Use",   value: 8 },
      { label: "AI Readiness",  value: 10 },
    ],
  },
  {
    name: "Tavily",
    tagline: "Agent-first search & synthesis",
    color: "#059669",
    tier: "S-Tier",
    pricing: "$0.008 / credit",
    scores: [
      { label: "Latency",       value: 9 },
      { label: "Pricing Value", value: 7 },
      { label: "Free Tier",     value: 8 },
      { label: "Ease of Use",   value: 10 },
      { label: "AI Readiness",  value: 10 },
    ],
  },
  {
    name: "Firecrawl",
    tagline: "URL → LLM-ready markdown",
    color: "#EA580C",
    tier: "S-Tier (Managed)",
    pricing: "1 credit / page",
    scores: [
      { label: "Latency",       value: 6 },
      { label: "Pricing Value", value: 8 },
      { label: "Free Tier",     value: 9 },
      { label: "Ease of Use",   value: 9 },
      { label: "AI Readiness",  value: 9 },
    ],
  },
  {
    name: "Bright Data",
    tagline: "150M+ IPs, enterprise proxy",
    color: "#0369A1",
    tier: "S-Tier (Enterprise)",
    pricing: "$1.50–$2.50 / 1K reqs",
    scores: [
      { label: "Latency",       value: 8 },
      { label: "Pricing Value", value: 4 },
      { label: "Free Tier",     value: 3 },
      { label: "Ease of Use",   value: 6 },
      { label: "AI Readiness",  value: 6 },
    ],
  },
];

function ScoreBar({ value, color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 6, borderRadius: 3, background: "#F3F4F6", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${value * 10}%`,
          borderRadius: 3,
          background: color,
          transition: "width 0.4s ease",
        }} />
      </div>
      <span style={{ fontSize: 13, color: "#6B7280", minWidth: 20, textAlign: "right" }}>{value}</span>
    </div>
  );
}

export default function MatrixSection() {
  return (
    <section id="matrix" style={{ background: "#F9FAFB", padding: "var(--section-pad) 40px" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>

        <p style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#6B7280",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 16,
        }}>
          Tool Comparison
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 400,
          letterSpacing: "-0.03em",
          color: "#0B0B0F",
          lineHeight: 1.1,
          marginBottom: 14,
        }}>
          Compare popular choices
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280", marginBottom: 48, lineHeight: 1.6, maxWidth: 520 }}>
          Evaluate top picks side-by-side across speed, pricing, free tier, ease of use, and AI readiness.
        </p>

        {/* Comparison label row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
          <span style={{ fontSize: 14, color: "#6B7280", fontWeight: 500 }}>Comparison:</span>
          {COMPARE_TOOLS.map((t) => (
            <span key={t.name} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: "var(--radius-btn)",
              background: "#ffffff",
              border: "1px solid #E5E7EB",
              fontSize: 13,
              fontWeight: 500,
              color: "#374151",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
              {t.name}
            </span>
          ))}
          <a
            href="#tools"
            style={{ marginLeft: "auto", fontSize: 14, fontWeight: 500, color: "#722da5" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            See all tools →
          </a>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          marginBottom: 20,
        }}>
          {COMPARE_TOOLS.map((tool) => (
            <div key={tool.name} style={{
              background: "#ffffff",
              borderRadius: "var(--radius-card)",
              border: "1px solid #E5E7EB",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
            }}>
              <div style={{
                padding: "20px 22px 18px",
                borderBottom: "1px solid #F3F4F6",
                borderTop: `3px solid ${tool.color}`,
              }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#0B0B0F", marginBottom: 4 }}>{tool.name}</div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 10 }}>{tool.tagline}</div>
                <span style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 500,
                  padding: "3px 10px",
                  borderRadius: "var(--radius-btn)",
                  background: tool.color + "18",
                  color: tool.color,
                }}>
                  {tool.tier}
                </span>
              </div>

              <div style={{
                padding: "14px 22px",
                borderBottom: "1px solid #F3F4F6",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}>
                <span style={{ fontSize: 12, color: "#9CA3AF" }}>Starting Price</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#0B0B0F" }}>{tool.pricing}</span>
              </div>

              <div style={{ padding: "16px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
                {tool.scores.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: 12, color: "#6B7280", marginBottom: 5 }}>{s.label}</div>
                    <ScoreBar value={s.value} color={tool.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          marginTop: 24,
          padding: "20px 28px",
          borderRadius: 14,
          background: "#ffffff",
          border: "1px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {COMPARE_TOOLS.slice(0, 3).map((t) => (
              <span key={t.name} style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: t.color + "20",
                border: `1px solid ${t.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 500,
                color: t.color,
              }}>
                {t.name[0]}
              </span>
            ))}
            <span style={{ fontSize: 14, color: "#374151" }}>
              Browse all 16 tools and build your own stack comparison
            </span>
          </div>
          <a
            href="#tools"
            style={{
              display: "inline-block",
              padding: "10px 22px",
              borderRadius: "var(--radius-btn)",
              fontSize: 13,
              fontWeight: 500,
              color: "#ffffff",
              background: "var(--gradient)",
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Browse all tools →
          </a>
        </div>

      </div>
    </section>
  );
}
