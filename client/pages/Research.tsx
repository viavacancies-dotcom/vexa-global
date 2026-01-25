import { Filter } from "lucide-react";
import ResearchCard from "@/components/ResearchCard";

export default function Research() {
  const allResearch = [
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12 p-6 bg-secondary rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-serif font-bold">Filter Results</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Topic</label>
                <select className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ease-in-out">
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
                <label className="block text-sm font-medium mb-2">Region</label>
                <select className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ease-in-out">
                  <option>All Regions</option>
                  <option>Europe</option>
                  <option>Asia-Pacific</option>
                  <option>Americas</option>
                  <option>Middle East & Africa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Author</label>
                <select className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ease-in-out">
                  <option>All Authors</option>
                  <option>Dr. Elena Rossi</option>
                  <option>Prof. James Mitchell</option>
                  <option>Dr. Amara Okafor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date Range</label>
                <select className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ease-in-out">
                  <option>All Dates</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResearch.map((research) => (
              <ResearchCard key={research.id} {...research} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-2">
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">1</button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              2
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              3
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
