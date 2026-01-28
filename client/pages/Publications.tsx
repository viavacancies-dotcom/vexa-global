import { useEffect, useState } from "react";
import PublicationCard from "@/components/PublicationCard";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

// Static data - extracted to module level to prevent recreation on every render
const PUBLICATIONS_DATA = [
  {
    id: "p1",
    title: "Global Security Report 2024",
    type: "Report" as const,
    authors: ["Dr. Elena Rossi", "Prof. James Mitchell"],
    date: "March 2024",
    abstract:
      "Annual comprehensive assessment of global security threats, trends, and institutional responses.",
  },
  {
    id: "p2",
    title: "Climate Policy Brief: Evaluating Carbon Markets",
    type: "Brief" as const,
    authors: ["Dr. Amara Okafor"],
    date: "February 2024",
    abstract:
      "Policy recommendations for enhancing effectiveness and equity in international carbon trading.",
  },
  {
    id: "p3",
    title: "The Digital Divide in International Development",
    type: "Article" as const,
    authors: ["Dr. Yuki Tanaka"],
    date: "January 2024",
    abstract:
      "Infrastructure, policy, and investment strategies for bridging digital access gaps.",
  },
  {
    id: "p4",
    title: "Working Paper: Supply Chain Resilience",
    type: "Paper" as const,
    authors: ["Prof. Michael Zhang"],
    date: "December 2023",
    abstract:
      "Analysis of supply chain vulnerabilities and strategies for building resilience.",
  },
  {
    id: "p5",
    title: "Policy Brief: Education and Economic Development",
    type: "Brief" as const,
    authors: ["Dr. Sarah Johnson"],
    date: "November 2023",
    abstract:
      "The role of education in driving sustainable economic development in emerging markets.",
  },
  {
    id: "p6",
    title: "Annual Report: Global Governance Trends",
    type: "Report" as const,
    authors: ["Dr. Marcus Weber"],
    date: "October 2023",
    abstract:
      "Review of institutional changes and governance challenges across international organizations.",
  },
];

type PublicationType = "All" | "Report" | "Brief" | "Article" | "Paper";

const filterTabs = [
  { label: "All Publications", type: "All" as const },
  { label: "Reports", type: "Report" as const },
  { label: "Policy Briefs", type: "Brief" as const },
  { label: "Articles", type: "Article" as const },
  { label: "Working Papers", type: "Paper" as const },
];

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState<PublicationType>("All");

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredPublications = PUBLICATIONS_DATA.filter(
    (pub) => activeFilter === "All" || pub.type === activeFilter
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Publications
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Access our full library of reports, policy briefs, articles, and research papers.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-4 animate-fade-in-up">
            {filterTabs.map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveFilter(tab.type)}
                className={`px-4 py-2 rounded font-medium transition-all duration-200 ease-in-out hover:scale-102 active:scale-100 ${
                  activeFilter === tab.type
                    ? "bg-primary text-white hover:bg-primary-dark hover:shadow-md"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Publications Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PUBLICATIONS_DATA.map((pub, idx) => (
              <StaggerItem key={pub.id} index={idx}>
                <PublicationCard {...pub} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Load More */}
          <div className="mt-12 text-center animate-fade-in-up">
            <button className="px-8 py-3 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-white hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Load More Publications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
