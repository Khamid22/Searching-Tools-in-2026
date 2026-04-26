import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import FeatureStrip from "./components/FeatureStrip";
import ToolsSection from "./components/ToolsSection";
import MatrixSection from "./components/MatrixSection";
import StackSection from "./components/StackSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero onSearch={setSearchQuery} />
        <StatsStrip />
        <FeatureStrip />
        <ToolsSection
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onCategoryFilter={setActiveCategory}
        />
        <MatrixSection />
        <StackSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
