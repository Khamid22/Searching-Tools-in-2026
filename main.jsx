import { useState } from “react”;

const tools = {
“🧠 AI-Native Search APIs”: [
{
name: “Exa”,
tagline: “Neural semantic search for AI agents”,
color: “#7C3AED”,
tier: “S-Tier”,
pricing: “$5 / 1K queries”,
free: “1K free credits”,
speed: “200ms–60s (Fast/Auto/Deep)”,
bestFor: “Semantic discovery, people/company lookups, conceptual research”,
strengths: [
“Independent index of 10B+ pages built from scratch (not a Google wrapper)”,
“3 modes: Exa Fast (<350ms), Exa Auto (balanced), Exa Deep (agentic, best quality)”,
“Custom indexes: 1B+ people, 50M+ companies, 100M+ research papers”,
“Highlights feature compresses full pages to only LLM-relevant tokens (cuts costs 50%+)”,
“Websets API: describe targets in plain English → enriched lead/candidate lists”,
“MCP server available, powers Cursor’s @web feature”,
],
weaknesses: [“Smaller index than Google/Bing for niche long-tail queries”, “Less fresh than Google-wrapper APIs”],
useCases: [“RAG pipelines”, “Competitor intelligence”, “Entity graph building”, “Deep research agents”],
},
{
name: “Tavily”,
tagline: “Agent-first search with synthesis”,
color: “#059669”,
tier: “S-Tier”,
pricing: “$0.008 / credit”,
free: “1K credits/month”,
speed: “<400ms”,
bestFor: “LLM/RAG workflows, LangChain/LlamaIndex agents”,
strengths: [
“Built from ground up for AI agents — not adapted afterward”,
“search_depth: basic vs advanced (genuine quality lever, 2× cost)”,
“Returns answer (synthesized) + results + images in one call”,
“include_raw_content bool adds full page text in same call”,
“Native LangChain & LlamaIndex integration”,
“Semantic re-ranking + Cohere custom re-ranking support”,
“Acquired by Nebius (Feb 2026) — monitor for changes”,
],
weaknesses: [“Multiple backend engines — opacity when debugging hallucinations”, “Credit-based costs add up at volume”],
useCases: [“Deep research agents”, “RAG context injection”, “Answer generation pipelines”],
},
{
name: “Brave Search API”,
tagline: “Independent index, privacy-first”,
color: “#D97706”,
tier: “A-Tier”,
pricing: “$5 / 1K queries”,
free: “~1K/month free”,
speed: “Faster than SerpAPI”,
bestFor: “Privacy-sensitive apps, Google/Bing-independent pipelines”,
strengths: [
“30B+ page index crawled entirely independently — NOT a Google wrapper”,
“SOC 2 Type II certified, no user tracking or profiling”,
“Leads AIMultiple agentic search benchmark at 14.89 score”,
“Endpoints for AI summaries, local results, images, news”,
“Good for healthcare, legal, financial apps needing compliance”,
],
weaknesses: [“Coverage gaps on niche/long-tail queries vs Google”, “Integration docs less mature than Exa/Tavily”],
useCases: [“Compliance-sensitive apps”, “Privacy-first search”, “Google-alternative pipelines”],
},
{
name: “Perplexity Sonar API”,
tagline: “LLM-generated answers with citations”,
color: “#0EA5E9”,
tier: “A-Tier”,
pricing: “Usage-based”,
free: “Limited”,
speed: “Varies (LLM-in-loop)”,
bestFor: “When you want a finished answer, not raw search data”,
strengths: [
“Returns a ready-to-display synthesized answer with inline citations”,
“Grounded in live web data — reduces hallucinations”,
“Best when agent needs output it can show users directly”,
],
weaknesses: [“Less control over raw result data”, “Higher cost when you need raw retrieval building blocks”],
useCases: [“Chatbots needing factual answers”, “Research summaries”, “Citation-backed responses”],
},
],
“📡 SERP APIs (Google Wrappers)”: [
{
name: “SerpAPI”,
tagline: “40+ engines, enterprise reliability”,
color: “#DC2626”,
tier: “A-Tier”,
pricing: “$15 / 1K searches”,
free: “100 searches/month”,
speed: “>700ms (Google-bound)”,
bestFor: “Multi-engine coverage, SEO monitoring, structured SERP data”,
strengths: [
“40+ search engines: Google, Bing, Yahoo, Amazon, eBay, Google Scholar”,
“Battle-tested, highly structured JSON output”,
“Knowledge graph, answer boxes, shopping data”,
“Best for SEO rank tracking, e-commerce price monitoring, academic research”,
“Long-term stability and mature infrastructure”,
],
weaknesses: [”$0.015/search is 3-15× pricier than alternatives”, “Minimum 700ms latency (Google-bound)”, “Not for AI semantic search”],
useCases: [“SEO rank monitoring”, “Price comparison”, “Google Scholar scraping”, “Multi-engine OSINT”],
},
{
name: “Serper”,
tagline: “Google results, budget-friendly”,
color: “#7C3AED”,
tier: “B-Tier”,
pricing: “$50 / month starter”,
free: “2,500 free searches”,
speed: “~1s”,
bestFor: “Cost-conscious Google search in AI apps”,
strengths: [
“Cheapest Google SERP access at scale”,
“Structured JSON with knowledge graphs, answer boxes, related searches”,
“Separate endpoints: news, images, shopping, scholar”,
“Most familiar result patterns for keyword-heavy agents”,
],
weaknesses: [“Google-only (no multi-engine)”, “Same latency bottleneck as all Google wrappers”],
useCases: [“Budget AI apps needing Google data”, “News monitoring”, “Current events research”],
},
],
“🕷️ Browser Automation & Crawling”: [
{
name: “Playwright”,
tagline: “Full browser control, anti-bot capable”,
color: “#1D4ED8”,
tier: “S-Tier (DIY)”,
pricing: “Free & open source”,
free: “Fully free”,
speed: “Depends on site”,
bestFor: “Complex JS sites, custom scraping logic, anti-bot bypass”,
strengths: [
“Chromium + Firefox + WebKit from a single API (Microsoft-backed)”,
“Auto-waiting — no artificial timeouts needed”,
“Pierces shadow DOM, handles iframes seamlessly”,
“Can inject custom JS, manage session cookies, handle infinite scroll”,
“playwright-python brings full power to Python ecosystem”,
“Best for sites that block other scrapers”,
],
weaknesses: [“No managed infrastructure — you own hosting, proxies, scheduling”, “Steeper setup vs. managed APIs”],
useCases: [“Highly protected sites”, “Login-required scraping”, “Complex SPA navigation”, “Custom pipeline control”],
},
{
name: “Firecrawl”,
tagline: “URL → LLM-ready markdown in one call”,
color: “#EA580C”,
tier: “S-Tier (Managed)”,
pricing: “1 credit/page”,
free: “500 credits (no card)”,
speed: “2–5s fresh, sub-1s cached”,
bestFor: “RAG pipelines, LLM knowledge bases, agentic data extraction”,
strengths: [
“Single API call: /scrape, /crawl, /map, /extract endpoints”,
“Outputs clean markdown natively — 67% fewer tokens vs raw HTML”,
“AI Agent endpoint: describe what you need in a prompt, agent navigates autonomously”,
“70,000+ GitHub stars, trusted by major tech companies”,
“LLMs.txt: collapses entire site into one document for embedding”,
“50× faster than Apify in benchmarks for agent workflows”,
“Open source — can self-host”,
],
weaknesses: [“Credits scale with crawl depth — expensive for huge sites”, “Less suited for structured field extraction vs Apify”],
useCases: [“RAG knowledge bases”, “Competitor monitoring”, “AI agent web access”, “Documentation ingestion”],
},
{
name: “Apify”,
tagline: “Marketplace of 4,000+ pre-built scrapers”,
color: “#16A34A”,
tier: “A-Tier”,
pricing: “From $39/month”,
free: “$5 credits/month”,
speed: “Varies by actor”,
bestFor: “Teams needing ready-made scrapers for specific platforms”,
strengths: [
“4,000+ community Actors: Google Maps, LinkedIn, Amazon, Instagram, etc.”,
“Cloud infrastructure handles proxies, browser fingerprinting, scheduling”,
“Crawlee SDK (open source): switchable CheerioCrawler/PlaywrightCrawler”,
“Website Content Crawler Actor produces Firecrawl-like markdown output”,
“Zapier/webhook integrations for no-code pipelines”,
],
weaknesses: [“Learning curve: Actors + compute units + configurations”, “More expensive for high-volume simple crawls”],
useCases: [“Social media data collection”, “e-commerce price monitoring”, “Lead generation at scale”],
},
{
name: “Crawl4AI”,
tagline: “Python-first async crawler, LLM-native”,
color: “#0891B2”,
tier: “A-Tier (OSS)”,
pricing: “Free & open source”,
free: “Fully free”,
speed: “Async, fast”,
bestFor: “Developers wanting Firecrawl-like output with full code control”,
strengths: [
“Clean async Python API with CLI support”,
“Pluggable modules: VirtualScrollConfig, LinkPreviewConfig, custom hooks”,
“Inject your own Playwright scripts or wire into Celery/Redis queues”,
“Markdown output natively — LLM-ready without extra parsing”,
“1.0 released Sept 2025, 6,000+ GitHub stars”,
],
weaknesses: [“You manage your own infrastructure”, “Less battle-tested than Apify at enterprise scale”],
useCases: [“Self-hosted RAG pipelines”, “Custom agent tooling”, “Research automation”],
},
{
name: “Scrapy”,
tagline: “Python’s battle-tested crawling workhorse”,
color: “#65A30D”,
tier: “B-Tier”,
pricing: “Free & open source”,
free: “Fully free”,
speed: “Very fast (HTTP-only, Twisted async)”,
bestFor: “Static HTML sites, high-throughput batch crawling”,
strengths: [
“Built since 2008 — extremely mature and battle-tested”,
“Handles thousands of concurrent requests via Twisted async”,
“Modular: spiders, middleware, item pipelines”,
“scrapy-playwright extension adds JS rendering when needed”,
],
weaknesses: [“Not built for JavaScript-heavy SPAs natively”, “Twisted async is awkward with modern Python patterns”],
useCases: [“News archiving”, “Static site bulk crawling”, “Data mining pipelines”],
},
],
“🔍 OSINT & Dork Techniques”: [
{
name: “Google Dorks (GHDB)”,
tagline: “Advanced search operators for hidden data”,
color: “#B91C1C”,
tier: “Essential Skill”,
pricing: “Free”,
free: “Fully free”,
speed: “Instant”,
bestFor: “OSINT investigations, security audits, finding exposed data”,
strengths: [
“site: — restrict to a domain (site:example.com)”,
“filetype: — find specific file types (filetype:pdf, filetype:xlsx)”,
“intitle: — find keywords in page titles”,
“inurl: — find keywords in URLs (inurl:admin, inurl:login)”,
“intext: — find keywords in page body content”,
“Google Hacking Database (GHDB) at exploit-db.com — thousands of pre-built dorks”,
“Combine with AI (LLMs) to generate dorks from investigative goals automatically”,
“Automation: Pagodo, Zeus Scanner for running dorks at scale”,
“Works on Bing & Yahoo too — different indexes, less commercial curation”,
],
weaknesses: [“Google rate-limits aggressive dorking”, “Some operators increasingly restricted”, “Requires ethical use — legal risk if misused”],
useCases: [“Finding exposed documents/credentials”, “Subdomain mapping”, “Competitor intelligence”, “Security audits”],
},
{
name: “OSINT Frameworks”,
tagline: “Maltego, Recon-ng, SpiderFoot”,
color: “#4338CA”,
tier: “A-Tier”,
pricing: “Free / Enterprise”,
free: “Community editions”,
speed: “Varies”,
bestFor: “Building entity relationship graphs across the internet”,
strengths: [
“Maltego: visual link-chart analysis of connections between entities”,
“Recon-ng: modular framework integrating dorks + APIs + data sources”,
“SpiderFoot: automated OSINT with 200+ data source integrations”,
“theHarvester: emails, subdomains, hosts, IPs from public sources”,
“Can integrate Google Dorks + Exa + SerpAPI into structured workflows”,
],
weaknesses: [“Steep learning curve”, “Enterprise tiers expensive”, “Data accuracy depends on source quality”],
useCases: [“Investigative journalism”, “Threat intelligence”, “Due diligence”, “Entity mapping”],
},
],
“🌐 Proxy & Anti-Detection Infrastructure”: [
{
name: “Bright Data”,
tagline: “150M+ IPs, enterprise-grade proxy network”,
color: “#0369A1”,
tier: “S-Tier (Enterprise)”,
pricing: “$1.50–$2.50 / 1K requests”,
free: “Trial available”,
speed: “High”,
bestFor: “Enterprise-scale scraping, hard anti-bot sites”,
strengths: [
“98.44% success rate — highest in class”,
“150M+ residential, datacenter, and mobile IPs”,
“Ready-made scrapers for common sites”,
“SOC 2, GDPR, CCPA compliant”,
“Best for sites with advanced bot protection (Cloudflare, Akamai, etc.)”,
],
weaknesses: [“Expensive — enterprise pricing”, “Overkill for simple projects”],
useCases: [“Scale scraping of protected sites”, “Price intelligence”, “Ad verification”],
},
{
name: “Crawlee (by Apify)”,
tagline: “Anti-bot crawling SDK with fingerprint spoofing”,
color: “#7C3AED”,
tier: “A-Tier (OSS)”,
pricing: “Free (OSS)”,
free: “Fully free”,
speed: “Fast”,
bestFor: “Production-grade scrapers with built-in anti-detection”,
strengths: [
“Mimics real browsers: headers, TLS fingerprints, stealth plugins”,
“Switchable crawlers: CheerioCrawler (fast static) ↔ PlaywrightCrawler (JS)”,
“Built-in queue management, retry logic, automatic backoff”,
“Automatic proxy rotation and session management”,
“Node.js + Python support”,
],
weaknesses: [“Self-hosted — you manage infrastructure unless on Apify cloud”],
useCases: [“Production scrapers”, “Anti-bot bypass”, “Scheduled crawling pipelines”],
},
],
};

const tierColors = {
“S-Tier”: “#F59E0B”,
“S-Tier (DIY)”: “#F59E0B”,
“S-Tier (Managed)”: “#F59E0B”,
“S-Tier (Enterprise)”: “#F59E0B”,
“A-Tier”: “#60A5FA”,
“A-Tier (OSS)”: “#60A5FA”,
“B-Tier”: “#9CA3AF”,
“Essential Skill”: “#34D399”,
};

const decisionMatrix = [
{ use: “Semantic / conceptual search”, tool: “Exa”, why: “Neural embeddings find related content even without exact keywords” },
{ use: “LangChain / RAG pipeline”, tool: “Tavily”, why: “Native integration, AI-ready output, search_depth quality lever” },
{ use: “Privacy / compliance required”, tool: “Brave Search API”, why: “Independent index, SOC 2, no Google/Bing dependency” },
{ use: “Multi-engine SERP + SEO data”, tool: “SerpAPI”, why: “40+ engines, knowledge graphs, Google Scholar support” },
{ use: “Budget Google access”, tool: “Serper”, why: “Cheapest Google SERP with structured JSON” },
{ use: “URL → LLM markdown (managed)”, tool: “Firecrawl”, why: “Single API call, clean markdown, AI agent endpoint” },
{ use: “Complex JS / anti-bot sites (DIY)”, tool: “Playwright + Crawlee”, why: “Full browser control, fingerprint spoofing, custom logic” },
{ use: “Platform-specific scraping (LinkedIn, Amazon…)”, tool: “Apify”, why: “4,000+ pre-built Actors, managed cloud infra” },
{ use: “OSINT entity mapping”, tool: “Dorks + Maltego/SpiderFoot”, why: “Operators reveal hidden indexed data; frameworks build connection graphs” },
{ use: “Enterprise anti-bot scale”, tool: “Bright Data”, why: “150M+ IPs, 98.44% success rate, compliance certifications” },
{ use: “Self-hosted LLM-native crawler”, tool: “Crawl4AI”, why: “Full code control, async Python, markdown output, free” },
];

export default function App() {
const [activeCategory, setActiveCategory] = useState(null);
const [expandedTool, setExpandedTool] = useState(null);
const [view, setView] = useState(“tools”); // ‘tools’ | ‘matrix’

const categories = Object.keys(tools);
const filtered = activeCategory ? { [activeCategory]: tools[activeCategory] } : tools;

return (
<div style={{
fontFamily: “‘DM Mono’, ‘Courier New’, monospace”,
background: “#0A0A0F”,
minHeight: “100vh”,
color: “#E2E8F0”,
padding: “0”,
}}>
{/* Header */}
<div style={{
background: “linear-gradient(135deg, #0A0A0F 0%, #1a0533 50%, #0A0A0F 100%)”,
borderBottom: “1px solid #2D1B69”,
padding: “32px 24px 24px”,
position: “sticky”,
top: 0,
zIndex: 100,
backdropFilter: “blur(10px)”,
}}>
<div style={{ maxWidth: 900, margin: “0 auto” }}>
<div style={{ display: “flex”, alignItems: “baseline”, gap: 12, marginBottom: 6 }}>
<span style={{ fontSize: 11, color: “#7C3AED”, letterSpacing: 3, textTransform: “uppercase” }}>@ py_ds research</span>
</div>
<h1 style={{
fontSize: “clamp(22px, 5vw, 36px)”,
fontWeight: 700,
margin: “0 0 4px”,
fontFamily: “‘DM Mono’, monospace”,
background: “linear-gradient(90deg, #A78BFA, #60A5FA, #34D399)”,
WebkitBackgroundClip: “text”,
WebkitTextFillColor: “transparent”,
}}>
Internet Search & Scraping Stack
</h1>
<p style={{ margin: 0, color: “#64748B”, fontSize: 13 }}>
Deep-dive reference · {Object.values(tools).flat().length} tools · Updated April 2026
</p>
</div>
</div>

```
  <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
    {/* View Toggle */}
    <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
      {["tools", "matrix"].map(v => (
        <button key={v} onClick={() => setView(v)} style={{
          padding: "7px 18px",
          borderRadius: 4,
          border: "1px solid",
          borderColor: view === v ? "#7C3AED" : "#2D2D4E",
          background: view === v ? "#7C3AED22" : "transparent",
          color: view === v ? "#A78BFA" : "#64748B",
          cursor: "pointer",
          fontSize: 12,
          letterSpacing: 1,
          textTransform: "uppercase",
          fontFamily: "inherit",
        }}>
          {v === "tools" ? "⚙ Tool Cards" : "🗺 Decision Matrix"}
        </button>
      ))}
    </div>

    {view === "matrix" ? (
      <div>
        <p style={{ color: "#64748B", fontSize: 12, marginBottom: 16, letterSpacing: 1 }}>
          // PICK THE RIGHT TOOL FOR YOUR USE CASE
        </p>
        <div style={{ border: "1px solid #2D2D4E", borderRadius: 8, overflow: "hidden" }}>
          {decisionMatrix.map((row, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.2fr 2fr",
              padding: "12px 16px",
              borderBottom: i < decisionMatrix.length - 1 ? "1px solid #1E1E3A" : "none",
              background: i % 2 === 0 ? "#0F0F1A" : "#0A0A0F",
              gap: 12,
              alignItems: "start",
            }}>
              <div style={{ fontSize: 12, color: "#94A3B8" }}>{row.use}</div>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#A78BFA",
                background: "#2D1B6933",
                padding: "2px 8px",
                borderRadius: 3,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>{row.tool}</div>
              <div style={{ fontSize: 11, color: "#475569" }}>{row.why}</div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <>
        {/* Category filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          <button onClick={() => setActiveCategory(null)} style={{
            padding: "5px 12px",
            borderRadius: 3,
            border: "1px solid",
            borderColor: !activeCategory ? "#60A5FA" : "#2D2D4E",
            background: !activeCategory ? "#1D4ED822" : "transparent",
            color: !activeCategory ? "#60A5FA" : "#64748B",
            cursor: "pointer",
            fontSize: 11,
            fontFamily: "inherit",
          }}>All</button>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(activeCategory === cat ? null : cat)} style={{
              padding: "5px 12px",
              borderRadius: 3,
              border: "1px solid",
              borderColor: activeCategory === cat ? "#A78BFA" : "#2D2D4E",
              background: activeCategory === cat ? "#2D1B6922" : "transparent",
              color: activeCategory === cat ? "#A78BFA" : "#64748B",
              cursor: "pointer",
              fontSize: 11,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}>{cat}</button>
          ))}
        </div>

        {/* Tool cards */}
        {Object.entries(filtered).map(([category, categoryTools]) => (
          <div key={category} style={{ marginBottom: 32 }}>
            <h2 style={{
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#475569",
              margin: "0 0 12px",
              paddingBottom: 8,
              borderBottom: "1px solid #1E1E3A",
            }}>
              {category}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {categoryTools.map((tool) => {
                const isExpanded = expandedTool === `${category}-${tool.name}`;
                const key = `${category}-${tool.name}`;
                return (
                  <div key={tool.name}
                    onClick={() => setExpandedTool(isExpanded ? null : key)}
                    style={{
                      border: "1px solid",
                      borderColor: isExpanded ? tool.color + "66" : "#2D2D4E",
                      borderRadius: 6,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "border-color 0.2s",
                      background: isExpanded ? tool.color + "08" : "#0F0F1A",
                    }}>
                    {/* Header row */}
                    <div style={{
                      padding: "12px 16px",
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "center",
                      gap: 12,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                        <span style={{
                          width: 8, height: 8, borderRadius: "50%",
                          background: tool.color,
                          display: "inline-block",
                          flexShrink: 0,
                        }} />
                        <span style={{ fontWeight: 700, fontSize: 14, color: "#F1F5F9" }}>{tool.name}</span>
                        <span style={{
                          fontSize: 10,
                          padding: "2px 6px",
                          borderRadius: 2,
                          background: tierColors[tool.tier] + "22",
                          color: tierColors[tool.tier],
                          border: `1px solid ${tierColors[tool.tier]}44`,
                        }}>{tool.tier}</span>
                        <span style={{ fontSize: 11, color: "#64748B" }}>{tool.tagline}</span>
                      </div>
                      <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
                        <span style={{ fontSize: 11, color: "#475569" }}>{tool.pricing}</span>
                        <span style={{ color: "#334155", fontSize: 12 }}>{isExpanded ? "▲" : "▼"}</span>
                      </div>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div style={{ padding: "0 16px 16px", borderTop: "1px solid #1E1E3A" }}>
                        {/* Meta row */}
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                          gap: 8,
                          padding: "12px 0",
                          marginBottom: 12,
                        }}>
                          {[
                            ["Speed", tool.speed],
                            ["Free Tier", tool.free],
                            ["Best For", tool.bestFor],
                          ].map(([label, value]) => (
                            <div key={label} style={{
                              background: "#0A0A0F",
                              border: "1px solid #1E1E3A",
                              borderRadius: 4,
                              padding: "8px 10px",
                            }}>
                              <div style={{ fontSize: 10, color: "#475569", marginBottom: 3, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
                              <div style={{ fontSize: 11, color: "#94A3B8" }}>{value}</div>
                            </div>
                          ))}
                        </div>

                        {/* Strengths */}
                        <div style={{ marginBottom: 12 }}>
                          <div style={{ fontSize: 10, color: "#34D399", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>✓ Strengths</div>
                          {tool.strengths.map((s, i) => (
                            <div key={i} style={{
                              fontSize: 12,
                              color: "#94A3B8",
                              padding: "3px 0 3px 12px",
                              borderLeft: `2px solid ${tool.color}44`,
                              marginBottom: 3,
                            }}>{s}</div>
                          ))}
                        </div>

                        {/* Weaknesses */}
                        <div style={{ marginBottom: 12 }}>
                          <div style={{ fontSize: 10, color: "#F87171", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>✗ Weaknesses</div>
                          {tool.weaknesses.map((w, i) => (
                            <div key={i} style={{
                              fontSize: 12,
                              color: "#64748B",
                              padding: "3px 0 3px 12px",
                              borderLeft: "2px solid #F8717144",
                              marginBottom: 3,
                            }}>{w}</div>
                          ))}
                        </div>

                        {/* Use cases */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {tool.useCases.map((uc, i) => (
                            <span key={i} style={{
                              fontSize: 10,
                              padding: "3px 8px",
                              borderRadius: 3,
                              background: tool.color + "18",
                              color: tool.color,
                              border: `1px solid ${tool.color}33`,
                            }}>{uc}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </>
    )}

    {/* Footer note */}
    <div style={{
      marginTop: 32,
      padding: "16px",
      border: "1px solid #2D1B69",
      borderRadius: 6,
      background: "#0F0B1F",
      fontSize: 11,
      color: "#475569",
      lineHeight: 1.8,
    }}>
      <span style={{ color: "#7C3AED" }}>// STACK RECOMMENDATION FOR DEEP INTERNET COVERAGE</span><br />
      <span style={{ color: "#94A3B8" }}>
        Layer 1 (Discovery): Exa (semantic) + Serper (fresh Google) + Brave (independent index) + Google Dorks (exposed/hidden data)<br />
        Layer 2 (Extraction): Firecrawl (managed LLM-ready) | Playwright+Crawlee (anti-bot, custom) | Crawl4AI (self-hosted)<br />
        Layer 3 (Entity Graph): SpiderFoot / Maltego for connection mapping across discovered entities<br />
        Layer 4 (Scale): Bright Data proxies for protected sites + Apify for platform-specific actors
      </span>
    </div>
  </div>
</div>
```

);
}
