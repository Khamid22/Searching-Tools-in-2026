export default function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #F3F4F6",
    }}>
      <div className="nav-inner">
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "var(--gradient)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            color: "#fff",
            fontWeight: 500,
          }}>
            D
          </div>
          <span style={{ fontSize: 15, fontWeight: 500, color: "#0B0B0F", letterSpacing: "-0.01em" }}>
            DevSearch <span style={{ color: "#9CA3AF", fontWeight: 400 }}>/ Toolkit 2026</span>
          </span>
        </a>

        <div className="nav-links">
          {[
            { label: "Browse Tools", href: "#tools" },
            { label: "Compare", href: "#matrix" },
            { label: "Architecture", href: "#stack" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#6B7280",
                padding: "6px 14px",
                borderRadius: "var(--radius-btn)",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#0B0B0F"; e.currentTarget.style.background = "#F3F4F6"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; e.currentTarget.style.background = "transparent"; }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="nav-cta" style={{ marginLeft: "auto" }}>
          <a
            href="https://abrtai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 18px",
              borderRadius: "var(--radius-btn)",
              background: "var(--gradient)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 500,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span className="cta-label">ABRT AI Lab</span> ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
