import { useState } from "react";
import { TIER_COLORS } from "../data/tools";

function ExpandedDetails({ tool }) {
  return (
    <div style={{ padding: "4px 22px 22px", borderTop: "1px solid #F3F4F6" }}>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Best for</div>
        <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{tool.bestFor}</p>
      </div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Strengths</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {tool.strengths.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: tool.color, fontSize: 13, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.5 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {tool.weaknesses && (
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Limitations</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {tool.weaknesses.map((w, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: "#9CA3AF", fontSize: 13, flexShrink: 0 }}>—</span>
                <span style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{w}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Use Cases</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tool.useCases.map((uc, i) => (
            <span key={i} style={{
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: "var(--radius-btn)",
              background: "#F9FAFB",
              color: "#6B7280",
              border: "1px solid #E5E7EB",
            }}>
              {uc}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompactCard({ tool, tierColor }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 12,
        border: "1px solid #F3F4F6",
        boxShadow: "0 2px 8px -2px rgba(0,0,0,0.06)",
        overflow: "hidden",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px -4px rgba(0,0,0,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px -2px rgba(0,0,0,0.06)")}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "13px 20px" }}>
        {/* Left color strip */}
        <div style={{ width: 4, height: 34, borderRadius: 2, background: tool.color, flexShrink: 0 }} />

        {/* Name + tier */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 150, flexShrink: 0 }}>
          <span style={{ fontSize: 14, fontWeight: 500, color: "#0B0B0F" }}>{tool.name}</span>
          <span style={{
            fontSize: 10,
            fontWeight: 500,
            padding: "2px 8px",
            borderRadius: "var(--radius-btn)",
            background: tierColor + "18",
            color: tierColor,
            flexShrink: 0,
          }}>
            {tool.tier}
          </span>
        </div>

        {/* Tagline */}
        <p style={{
          flex: 1,
          fontSize: 13,
          color: "#6B7280",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          minWidth: 0,
          margin: 0,
        }}>
          {tool.tagline}
        </p>

        {/* Pricing */}
        <span style={{
          fontSize: 12,
          color: "#374151",
          fontWeight: 500,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          {tool.pricing}
        </span>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            padding: "5px 14px",
            borderRadius: "var(--radius-btn)",
            border: "1.5px solid",
            borderColor: expanded ? tool.color : "#E5E7EB",
            background: expanded ? tool.color + "10" : "transparent",
            color: expanded ? tool.color : "#6B7280",
            fontSize: 12,
            fontWeight: 500,
            cursor: "pointer",
            flexShrink: 0,
            transition: "all 0.15s",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          {expanded ? "Less" : "Details"}
          <span style={{
            display: "inline-block",
            transition: "transform 0.2s",
            transform: expanded ? "rotate(180deg)" : "none",
            fontSize: 9,
          }}>
            ▼
          </span>
        </button>
      </div>

      {expanded && <ExpandedDetails tool={tool} />}
    </div>
  );
}

export default function ToolCard({ tool, compact }) {
  const [expanded, setExpanded] = useState(false);
  const tierColor = TIER_COLORS[tool.tier] || "#9ca3af";

  if (compact) {
    return <CompactCard tool={tool} tierColor={tierColor} />;
  }

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "var(--radius-card)",
        border: "1px solid #F3F4F6",
        boxShadow: "var(--shadow-card)",
        overflow: "hidden",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
    >
      {/* Color accent bar */}
      <div style={{ height: 4, background: tool.color }} />

      {/* Header */}
      <div style={{ padding: "20px 22px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: "#0B0B0F", letterSpacing: "-0.01em" }}>
            {tool.name}
          </h3>
          <span style={{
            fontSize: 11,
            fontWeight: 500,
            padding: "3px 10px",
            borderRadius: "var(--radius-btn)",
            background: tierColor + "18",
            color: tierColor,
            flexShrink: 0,
            marginLeft: 8,
          }}>
            {tool.tier}
          </span>
        </div>
        <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{tool.tagline}</p>
      </div>

      {/* Pricing + speed tiles */}
      <div style={{ display: "flex", gap: 8, padding: "0 22px 16px" }}>
        {[
          { label: "Pricing", value: tool.pricing },
          { label: "Speed", value: tool.speed },
        ].map(({ label, value }) => (
          <div key={label} style={{
            flex: 1,
            padding: "10px 14px",
            borderRadius: 10,
            background: "#F7F6F4",
          }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
              {label}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Top 2 strengths */}
      <div style={{ padding: "0 22px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
        {tool.strengths.slice(0, 2).map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ color: tool.color, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
            <span style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.5 }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Free tier badge + use case tags */}
      <div style={{ padding: "0 22px 16px", display: "flex", flexWrap: "wrap", gap: 6 }}>
        <span style={{
          fontSize: 11,
          fontWeight: 500,
          padding: "4px 10px",
          borderRadius: "var(--radius-btn)",
          background: "#F0FDF4",
          color: "#16A34A",
          border: "1px solid #BBF7D0",
        }}>
          {tool.free}
        </span>
        {tool.useCases.slice(0, 2).map((uc, i) => (
          <span key={i} style={{
            fontSize: 11,
            padding: "4px 10px",
            borderRadius: "var(--radius-btn)",
            background: "#F9FAFB",
            color: "#6B7280",
            border: "1px solid #E5E7EB",
          }}>
            {uc}
          </span>
        ))}
      </div>

      {/* Expand button */}
      <div style={{ borderTop: "1px solid #F3F4F6" }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            width: "100%",
            padding: "12px 22px",
            background: "none",
            border: "none",
            fontSize: 13,
            fontWeight: 500,
            color: tool.color,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FAFB")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          {expanded ? "Hide details" : "View full details"}
          <span style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "inline-block" }}>↓</span>
        </button>

        {expanded && <ExpandedDetails tool={tool} />}
      </div>
    </div>
  );
}
