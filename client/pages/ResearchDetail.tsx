import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Calendar, User, Share2, Download } from "lucide-react";
import ResearchCard from "@/components/ResearchCard";

export default function ResearchDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Mock data - in a real app, fetch based on ID
  const research = {
    id: id,
    title: "The Future of International Trade in an Uncertain World",
    abstract:
      "This comprehensive analysis examines emerging trade patterns, protectionist trends, and the reshaping of global supply chains in response to geopolitical tensions and climate imperatives.",
    content: `
      <h2>Introduction</h2>
      <p>International trade has undergone unprecedented challenges in recent years. This research paper provides a detailed examination of the current landscape and future trajectories of global commerce.</p>
      
      <h2>Key Findings</h2>
      <ul>
        <li>Supply chain diversification is becoming essential for economic resilience</li>
        <li>Geopolitical tensions are reshaping bilateral trade relationships</li>
        <li>Climate considerations are increasingly influencing trade policy</li>
        <li>Regional integration may provide stability in uncertain times</li>
      </ul>
      
      <h2>Methodology</h2>
      <p>This analysis is based on comprehensive data collection from international trade organizations, government sources, and academic research spanning the past five years.</p>
      
      <h2>Recommendations</h2>
      <p>Policymakers should prioritize:</p>
      <ul>
        <li>Investment in supply chain resilience</li>
        <li>Multilateral dialogue to reduce trade tensions</li>
        <li>Integration of climate considerations in trade agreements</li>
        <li>Support for developing economies in trade transitions</li>
      </ul>
    `,
    author: "Dr. Elena Rossi",
    date: "March 15, 2024",
    tag: "Trade & Economics",
    theme: "economics" as const,
    downloadLink: "#",
  };

  // Related research
  const relatedResearch = [
    {
      id: "2",
      title: "Artificial Intelligence and National Security",
      abstract: "An in-depth examination of AI's implications for military capabilities.",
      author: "Prof. James Mitchell",
      date: "March 10, 2024",
      tag: "Technology & Strategy",
      theme: "technology" as const,
    },
    {
      id: "3",
      title: "Renewable Energy Transitions in Developing Economies",
      abstract: "Analyzing policy frameworks and investment patterns in renewable energy.",
      author: "Dr. Amara Okafor",
      date: "March 5, 2024",
      tag: "Climate & Energy",
      theme: "energy" as const,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary-foreground/20">
              {research.tag}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight animate-fade-in-down">
            {research.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>by {research.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{research.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">{research.abstract}</h2>
                <div className="text-foreground leading-relaxed">
                  <p className="mb-6 text-foreground">
                    International trade has undergone unprecedented challenges in recent years. This research paper provides a detailed examination of the current landscape and future trajectories of global commerce.
                  </p>

                  <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-foreground">Key Findings</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-foreground">
                    <li>Supply chain diversification is becoming essential for economic resilience</li>
                    <li>Geopolitical tensions are reshaping bilateral trade relationships</li>
                    <li>Climate considerations are increasingly influencing trade policy</li>
                    <li>Regional integration may provide stability in uncertain times</li>
                  </ul>

                  <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-foreground">Methodology</h3>
                  <p className="mb-6 text-foreground">
                    This analysis is based on comprehensive data collection from international trade organizations, government sources, and academic research spanning the past five years.
                  </p>

                  <h3 className="text-2xl font-serif font-bold mt-8 mb-4 text-foreground">Recommendations</h3>
                  <p className="mb-4 text-foreground">Policymakers should prioritize:</p>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>Investment in supply chain resilience</li>
                    <li>Multilateral dialogue to reduce trade tensions</li>
                    <li>Integration of climate considerations in trade agreements</li>
                    <li>Support for developing economies in trade transitions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Download/Share */}
              <div className="bg-secondary rounded-lg p-6 mb-8">
                <h3 className="font-serif font-bold text-lg mb-4">Get This Research</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                  <button className="w-full px-4 py-3 border border-border rounded font-medium hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">About the Author</h3>
                <p className="text-sm text-foreground mb-4">
                  Dr. Elena Rossi is Director of Research at Global Institute, specializing in international economics and trade policy with 20+ years of experience.
                </p>
                <Link
                  to="/experts/e1"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  View Profile →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Research */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Related Research
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore other research on related topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedResearch.map((item) => (
              <ResearchCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
