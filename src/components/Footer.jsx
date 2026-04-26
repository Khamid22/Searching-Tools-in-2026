const LINKS = {
  Browse: [
    { label: "AI Search APIs", href: "#tools" },
    { label: "SERP APIs", href: "#tools" },
    { label: "Browser Automation", href: "#tools" },
    { label: "OSINT Tools", href: "#tools" },
    { label: "Proxy / Anti-Bot", href: "#tools" },
  ],
  Resources: [
    { label: "Comparison Chart", href: "#matrix" },
    { label: "Architecture Guide", href: "#stack" },
    { label: "S-Tier Picks", href: "#tools" },
  ],
  ABRT: [
    { label: "abrtai.com", href: "https://abrtai.com", external: true },
    { label: "AI Lab", href: "https://abrtai.com", external: true },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)", padding: "80px 40px 40px" }}>
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
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
              <span style={{ fontSize: 15, fontWeight: 500, color: "#ffffff", letterSpacing: "-0.01em" }}>
                DevSearch
              </span>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 220 }}>
              The definitive guide to AI-native search APIs, crawlers, and OSINT tools in 2026.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([col, links]) => (
            <div key={col}>
              <p style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                {col}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(({ label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © 2026 DevSearch · Toolkit 2026
          </p>
          <a
            href="https://abrtai.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              fontWeight: 500,
              background: "var(--gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Part of ABRT AI Lab ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
