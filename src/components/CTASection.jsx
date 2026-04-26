export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2 style={{
          fontSize: "clamp(28px, 3.5vw, 48px)",
          fontWeight: 400,
          letterSpacing: "-0.03em",
          color: "#ffffff",
          lineHeight: 1.1,
          marginBottom: 14,
          maxWidth: 500,
        }}>
          Ready to ship your data pipeline?
        </h2>
        <p style={{
          fontSize: 17,
          color: "rgba(255,255,255,0.75)",
          marginBottom: 36,
          maxWidth: 440,
          lineHeight: 1.6,
        }}>
          Start from the S-Tier picks, layer in what you need, and go from zero to production in days.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            href="#tools"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: "var(--radius-btn)",
              fontSize: 15,
              fontWeight: 500,
              color: "#0B0B0F",
              background: "#ffffff",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Browse S-Tier Tools
          </a>
          <a
            href="#matrix"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              borderRadius: "var(--radius-btn)",
              fontSize: 15,
              fontWeight: 500,
              color: "#ffffff",
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.35)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.26)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
          >
            Compare Tools →
          </a>
        </div>
      </div>
    </section>
  );
}
