import { useState } from "react";
import { tools } from "../data/tools";
import ToolCard from "./ToolCard";

const CATEGORY_META = {
  "AI-Native Search APIs":                 { label: "AI Search" },
  "SERP APIs (Google Wrappers)":           { label: "SERP APIs" },
  "Browser Automation & Crawling":         { label: "Browser / Crawl" },
  "OSINT & Dork Techniques":               { label: "OSINT" },
  "Proxy & Anti-Detection Infrastructure": { label: "Proxy / Anti-Bot" },
};

const PREVIEW_COUNT = 3;

const GridIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" fill="currentColor" />
    <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.5" fill="currentColor" />
    <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.5" fill="currentColor" />
    <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.5" fill="currentColor" />
  </svg>
);

const ListIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <rect x="1" y="2" width="13" height="2.25" rx="1.125" fill="currentColor" />
    <rect x="1" y="6.375" width="13" height="2.25" rx="1.125" fill="currentColor" />
    <rect x="1" y="10.75" width="13" height="2.25" rx="1.125" fill="currentColor" />
  </svg>
);

export default function ToolsSection({ searchQuery, activeCategory, onCategoryFilter }) {
  const [viewMode, setViewMode] = useState("grid");
  const [expandedCats, setExpandedCats] = useState(new Set());

  const isFiltering = searchQuery || activeCategory;

  function toggleCat(cat) {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  }

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
      {/* Scrollable filter pills */}
      <div className="filter-scroll-wrap" style={{ marginBottom: 40, paddingTop: 16 }}>
        <div className="filter-scroll-bar">
          <button
            onClick={() => onCategoryFilter(null)}
            className={`filter-pill${!activeCategory ? " filter-pill--active" : ""}`}
          >
            All tools
          </button>
          {Object.entries(CATEGORY_META).map(([cat, { label }]) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryFilter(active ? null : cat)}
                className={`filter-pill${active ? " filter-pill--active" : ""}`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="filter-scroll-fade" />
      </div>

      {/* Section header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
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
            {isFiltering ? (
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

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Grid / List toggle */}
          <div className="view-toggle">
            <button
              onClick={() => setViewMode("grid")}
              className={`view-toggle-btn${viewMode === "grid" ? " active" : ""}`}
              title="Grid view"
            >
              <GridIcon />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`view-toggle-btn${viewMode === "list" ? " active" : ""}`}
              title="List view"
            >
              <ListIcon />
            </button>
          </div>

          <a
            href="#matrix"
            style={{ fontSize: 14, fontWeight: 500, color: "#722da5", display: "flex", alignItems: "center", gap: 6, transition: "opacity 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Compare chart →
          </a>
        </div>
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: "80px 0", textAlign: "center" }}>
          <p style={{ fontSize: 18, color: "#6B7280" }}>
            No tools match "{searchQuery}" — try a different keyword.
          </p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {filtered.map(({ cat, icon, items }) => {
          const isExpanded = !!isFiltering || expandedCats.has(cat);
          const visibleItems = isExpanded ? items : items.slice(0, PREVIEW_COUNT);
          const hiddenCount = items.length - PREVIEW_COUNT;

          return (
            <div key={cat}>
              {/* Category header */}
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

              {/* Cards */}
              {viewMode === "grid" ? (
                <div className="tool-grid">
                  {visibleItems.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} />
                  ))}
                </div>
              ) : (
                <div className="tool-list">
                  {visibleItems.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} compact />
                  ))}
                </div>
              )}

              {/* Show more / collapse */}
              {!isFiltering && hiddenCount > 0 && (
                <div style={{ marginTop: 20, textAlign: "center" }}>
                  <button onClick={() => toggleCat(cat)} className="show-more-btn">
                    {isExpanded
                      ? "Collapse ↑"
                      : `Show ${hiddenCount} more ${hiddenCount === 1 ? "tool" : "tools"} ↓`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
