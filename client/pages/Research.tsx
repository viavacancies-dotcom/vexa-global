import { Filter, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ResearchCard from "@/components/ResearchCard";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

// Static data - extracted to module level to prevent recreation on every render
const ALL_RESEARCH = [
  {
    id: "1",
    title: "The Future of International Trade in an Uncertain World",
    abstract:
      "This comprehensive analysis examines emerging trade patterns, protectionist trends, and the reshaping of global supply chains.",
    author: "Dr. Elena Rossi",
    date: "March 15, 2024",
    tag: "Trade & Economics",
    theme: "economics" as const,
  },
  {
    id: "2",
    title: "Artificial Intelligence and National Security",
    abstract:
      "An in-depth examination of AI's implications for military capabilities, cybersecurity, and strategic competition.",
    author: "Prof. James Mitchell",
    date: "March 10, 2024",
    tag: "Technology & Strategy",
    theme: "technology" as const,
  },
  {
    id: "3",
    title: "Renewable Energy Transitions in Developing Economies",
    abstract:
      "Analyzing the policy frameworks, investment patterns, and technical challenges facing developing nations.",
    author: "Dr. Amara Okafor",
    date: "March 5, 2024",
    tag: "Climate & Energy",
    theme: "energy" as const,
  },
  {
    id: "4",
    title: "Geopolitical Implications of Arctic Governance",
    abstract:
      "As climate change reshapes the Arctic, new governance challenges emerge. This brief examines current frameworks.",
    author: "Dr. Sofia Bergström",
    date: "March 18, 2024",
    tag: "Geopolitics",
    theme: "geopolitics" as const,
  },
  {
    id: "5",
    title: "Regional Integration in Southeast Asia Post-Pandemic",
    abstract:
      "Economic recovery and institutional strengthening in ASEAN: opportunities and challenges.",
    author: "Prof. Rajesh Kumar",
    date: "March 12, 2024",
    tag: "Regional Studies",
    theme: "regional" as const,
  },
  {
    id: "6",
    title: "Multilateralism at a Crossroads",
    abstract:
      "Institutional reform and state sovereignty: reimagining global governance for the 21st century.",
    author: "Dr. Marcus Weber",
    date: "March 8, 2024",
    tag: "International Relations",
    theme: "relations" as const,
  },
];

export default function Research() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
  const [selectedDateRange, setSelectedDateRange] = useState("All Dates");

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filter logic
  const filteredResearch = ALL_RESEARCH.filter((research) => {
    const matchesAuthor = selectedAuthor === "All Authors" || research.author === selectedAuthor;
    const matchesTopic = selectedTopic === "All Topics" || research.tag === selectedTopic;
    const matchesRegion = selectedRegion === "All Regions"; // Region filtering would need region data in items
    const matchesDateRange = selectedDateRange === "All Dates"; // Date filtering would need date parsing

    return matchesAuthor && matchesTopic && matchesRegion && matchesDateRange;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Research & Analysis
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Explore our comprehensive research across key policy areas, with advanced
            filtering by topic, region, author, and date.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12 bg-white border border-border rounded-xl shadow-sm animate-fade-in-up overflow-hidden">
            {/* Filter Header */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-secondary/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Filter className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-garet font-semibold text-foreground">Advanced Filters</h2>
              </div>
              <ChevronDown
                className="h-5 w-5 text-primary transition-transform duration-300"
                style={{
                  transform: filtersOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Filter Content */}
            <div
              className="transition-all duration-300 overflow-hidden"
              style={{
                maxHeight: filtersOpen ? "500px" : "0px",
                opacity: filtersOpen ? 1 : 0,
              }}
            >
              <div className="px-6 pb-6 pt-4 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div>
                  <label className="block text-sm font-garet font-semibold mb-3 text-foreground">Topic</label>
                  <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ease-in-out cursor-pointer">
                    <option>All Topics</option>
                    <option>Geopolitics & Security</option>
                    <option>International Relations</option>
                    <option>Economics & Markets</option>
                    <option>Technology & AI</option>
                    <option>Energy & Climate</option>
                    <option>Regional Studies</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-garet font-semibold mb-3 text-foreground">Region</label>
                  <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ease-in-out cursor-pointer">
                    <option>All Regions</option>
                    <option>Europe</option>
                    <option>Asia-Pacific</option>
                    <option>Americas</option>
                    <option>Middle East & Africa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-garet font-semibold mb-3 text-foreground">Author</label>
                  <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ease-in-out cursor-pointer">
                    <option>All Authors</option>
                    <option>Dr. Elena Rossi</option>
                    <option>Prof. James Mitchell</option>
                    <option>Dr. Amara Okafor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-garet font-semibold mb-3 text-foreground">Date Range</label>
                  <select className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ease-in-out cursor-pointer">
                    <option>All Dates</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_RESEARCH.map((research, idx) => (
              <StaggerItem key={research.id} index={idx}>
                <ResearchCard {...research} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-3 animate-fade-in-up">
            <button className="px-4 py-2.5 border border-border rounded-lg text-sm font-garet font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-200 ease-in-out">
              Previous
            </button>
            <button className="px-3 py-2.5 bg-primary text-white rounded-lg text-sm font-garet font-medium hover:bg-primary-light transition-all duration-200 ease-in-out shadow-sm">1</button>
            <button className="px-3 py-2.5 border border-border rounded-lg text-sm font-garet font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-200 ease-in-out">
              2
            </button>
            <button className="px-3 py-2.5 border border-border rounded-lg text-sm font-garet font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-200 ease-in-out">
              3
            </button>
            <button className="px-4 py-2.5 border border-border rounded-lg text-sm font-garet font-medium hover:bg-secondary hover:border-primary/30 transition-all duration-200 ease-in-out">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
