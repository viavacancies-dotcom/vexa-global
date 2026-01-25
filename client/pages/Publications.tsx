import { useEffect } from "react";
import PublicationCard from "@/components/PublicationCard";

export default function Publications() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const publications = [
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-4 animate-fade-in-up">
            <button className="px-4 py-2 bg-primary text-white rounded font-medium hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              All Publications
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Reports
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Policy Briefs
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Articles
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Working Papers
            </button>
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <div key={pub.id}>
                <PublicationCard {...pub} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-white hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Load More Publications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
