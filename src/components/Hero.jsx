import { useState } from "react";

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleInput(e) {
    setQuery(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <section className="hero-section">
      <div className="hero-inner">

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 16px",
          borderRadius: "var(--radius-btn)",
          background: "rgba(255,255,255,0.18)",
          marginBottom: 28,
          fontSize: 13,
          fontWeight: 500,
          color: "#ffffff",
          letterSpacing: "0.04em",
        }}>
          Developer Toolkit · April 2026
        </div>

        <h1 style={{
          fontSize: "clamp(40px, 6.5vw, 80px)",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#ffffff",
          marginBottom: 24,
          maxWidth: 760,
        }}>
          Find the right search &amp; scraping tool for your stack
        </h1>

        <p style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.65,
          maxWidth: 520,
          marginBottom: 40,
        }}>
          Compare APIs, crawlers, and OSINT tools — pricing, speed, free tiers,
          and S/A/B tier rankings, all in one place.
        </p>

        <div style={{ maxWidth: 560, position: "relative", marginBottom: 28 }}>
          <div style={{
            position: "absolute",
            left: 18,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#9CA3AF",
            pointerEvents: "none",
            display: "flex",
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={handleInput}
            placeholder="Search — Exa, Firecrawl, Playwright, RAG…"
            style={{
              width: "100%",
              padding: "15px 48px 15px 48px",
              borderRadius: 12,
              border: "none",
              background: "#ffffff",
              color: "#0B0B0F",
              fontSize: 15,
              fontFamily: "Inter, sans-serif",
              outline: "none",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          />
          {query && (
            <button
              onClick={() => { setQuery(""); onSearch(""); }}
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#9CA3AF",
                cursor: "pointer",
                padding: 4,
                display: "flex",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="#tools" style={{
            fontSize: 14,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "color 0.15s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
          >
            Browse all tools ↓
          </a>
          <a href="#matrix" style={{
            fontSize: 14,
            fontWeight: 500,
            color: "rgba(255,255,255,0.55)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "color 0.15s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            See comparison chart →
          </a>
        </div>

      </div>
    </section>
  );
}
