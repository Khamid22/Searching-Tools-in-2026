import { stackLayers } from "../data/matrix";

export default function StackSection() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack-inner">
        <p style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#6B7280",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 16,
        }}>
          Architecture Guide
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 400,
          letterSpacing: "-0.03em",
          color: "#0B0B0F",
          lineHeight: 1.1,
          marginBottom: 14,
          maxWidth: 600,
        }}>
          Build your production pipeline
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280", maxWidth: 520, marginBottom: 28, lineHeight: 1.6 }}>
          Layer these tools to achieve full internet coverage — discovery through extraction,
          entity mapping, and enterprise-scale operations.
        </p>
        <p style={{
          borderLeft: "2px solid #F3F4F6",
          paddingLeft: 16,
          color: "#9CA3AF",
          fontSize: 15,
          lineHeight: 1.6,
          marginBottom: 56,
          maxWidth: 520,
        }}>
          Think of it as a conveyor belt: discovery surfaces URLs, extraction pulls content,
          entity graph maps relationships, and scale handles volume.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {stackLayers.map((layer, i) => (
            <div key={i} className="stack-layer">
              <div style={{
                padding: "28px 24px",
                background: layer.color + "10",
                borderRight: `2px solid ${layer.color}20`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 4,
              }}>
                <div style={{
                  fontSize: 10,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: layer.color,
                  opacity: 0.7,
                }}>
                  {layer.layer}
                </div>
                <div style={{ fontSize: 22, fontWeight: 400, color: layer.color, letterSpacing: "-0.02em" }}>
                  {layer.label}
                </div>
              </div>

              <div style={{
                padding: "24px 28px",
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                alignItems: "center",
                background: "#ffffff",
              }}>
                {layer.tools.map((tool, j) => (
                  <span key={j} style={{
                    fontSize: 13,
                    fontWeight: 500,
                    padding: "7px 16px",
                    borderRadius: 10,
                    background: "#F7F6F4",
                    color: "#374151",
                    border: "1px solid #E5E7EB",
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
