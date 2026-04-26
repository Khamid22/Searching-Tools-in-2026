import { allTools, categories } from "../data/tools";

const sTierCount = allTools.filter((t) => t.tier.startsWith("S-Tier")).length;

const STATS = [
  { value: allTools.length, label: "Tools reviewed" },
  { value: categories.length, label: "Categories covered" },
  { value: sTierCount, label: "S-Tier picks" },
  { value: "Free", label: "Tier available on most tools", isText: true },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-strip-inner">
        {STATS.map((stat, i) => (
          <div key={i} style={{
            padding: "8px 0 8px 20px",
            borderLeft: "2px solid transparent",
            borderImage: "linear-gradient(135deg, #e041ae, #722da5) 1",
          }}>
            <div style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "#0B0B0F",
              lineHeight: 1.1,
              marginBottom: 4,
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 13, color: "#9CA3AF" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
