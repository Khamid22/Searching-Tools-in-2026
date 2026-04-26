import { tools } from "../data/tools";
import ToolCard from "./ToolCard";

const CATEGORY_META = {
  "AI-Native Search APIs":                 { label: "AI Search" },
  "SERP APIs (Google Wrappers)":           { label: "SERP APIs" },
  "Browser Automation & Crawling":         { label: "Browser / Crawl" },
  "OSINT & Dork Techniques":               { label: "OSINT" },
  "Proxy & Anti-Detection Infrastructure": { label: "Proxy / Anti-Bot" },
};

export default function ToolsSection({ searchQuery, activeCategory, onCategoryFilter }) {
  function matchesSearch(tool, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.tagline.toLowerCase().includes(q) ||
      tool.bestFor.toLowerCase().includes(q) ||
      tool.useCases.some((uc) => uc.toLowerCase().includes(q)) ||
      tool.strengths.some((s) => s.toLowerCase().includes(q))
    );
  }

  const filtered = Object.entries(tools)
    .filter(([cat]) => !activeCategory || cat === activeCategory)
    .map(([cat, { icon, items }]) => ({
      cat,
      icon,
      items: items.filter((t) => matchesSearch(t, searchQuery)),
    }))
    .filter(({ items }) => items.length > 0);

  const totalVisible = filtered.reduce((sum, { items }) => sum + items.length, 0);

  return (
    <section id="tools" className="tools-section">
      {/* Category filter pills */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40, paddingTop: 16 }}>
        <button
          onClick={() => onCategoryFilter(null)}
          style={{
            padding: "8px 18px",
            borderRadius: "var(--radius-btn)",
            border: "1.5px solid",
            borderColor: !activeCategory ? "transparent" : "#E5E7EB",
            background: !activeCategory ? "var(--gradient)" : "transparent",
            color: !activeCategory ? "#ffffff" : "#6B7280",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            transition: "all 0.15s",
          }}
        >
          All tools
        </button>
        {Object.entries(CATEGORY_META).map(([cat, { label }]) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryFilter(active ? null : cat)}
              style={{
                padding: "8px 18px",
                borderRadius: "var(--radius-btn)",
                border: "1.5px solid",
                borderColor: active ? "transparent" : "#E5E7EB",
                background: active ? "var(--gradient)" : "transparent",
                color: active ? "#ffffff" : "#6B7280",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Section header */}
      <div style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 48,
      }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 500, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
            Tool Library
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            color: "#0B0B0F",
            lineHeight: 1.1,
          }}>
            {searchQuery || activeCategory ? (
              <>
                <span style={{ background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {totalVisible}
                </span>{" "}
                {totalVisible === 1 ? "tool" : "tools"} found
              </>
            ) : (
              "Every tool, deep-dived"
            )}
          </h2>
        </div>
        <a
          href="#matrix"
          style={{ fontSize: 14, fontWeight: 500, color: "#722da5", display: "flex", alignItems: "center", gap: 6, transition: "opacity 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Not sure? See comparison chart →
        </a>
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: "80px 0", textAlign: "center" }}>
          <p style={{ fontSize: 18, color: "#6B7280" }}>
            No tools match "{searchQuery}" — try a different keyword.
          </p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {filtered.map(({ cat, icon, items }) => (
          <div key={cat}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
              paddingBottom: 16,
              borderBottom: "1px solid #F3F4F6",
            }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <h3 style={{ fontSize: 15, fontWeight: 400, letterSpacing: "-0.01em", color: "#0B0B0F", margin: 0 }}>
                {cat}
              </h3>
              <span style={{ marginLeft: "auto", fontSize: 13, color: "#9CA3AF", fontWeight: 500 }}>
                {items.length} {items.length === 1 ? "tool" : "tools"}
              </span>
            </div>
            <div className="tool-grid">
              {items.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
