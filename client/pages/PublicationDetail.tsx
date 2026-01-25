import { useParams, Link } from "react-router-dom";
import { Calendar, Users, Download, Share2 } from "lucide-react";
import PublicationCard from "@/components/PublicationCard";

export default function PublicationDetail() {
  const { id } = useParams();

  // Mock data - in a real app, fetch based on ID
  const publication = {
    id: id,
    title: "Global Security Report 2024",
    type: "Report" as const,
    authors: ["Dr. Elena Rossi", "Prof. James Mitchell"],
    date: "March 2024",
    abstract:
      "Annual comprehensive assessment of global security threats, trends, and institutional responses.",
    content: `
      <h2>Executive Summary</h2>
      <p>The 2024 Global Security Report provides a comprehensive assessment of the international security landscape, examining key threats, emerging challenges, and institutional responses.</p>
      
      <h2>Key Sections</h2>
      <ul>
        <li>Geopolitical Tensions and Regional Conflicts</li>
        <li>Cybersecurity and Digital Threats</li>
        <li>Non-Traditional Security Challenges</li>
        <li>Institutional Responses and Policy Recommendations</li>
      </ul>
    `,
    downloadLink: "#",
  };

  // Related publications
  const relatedPublications = [
    {
      id: "p2",
      title: "Climate Policy Brief: Evaluating Carbon Markets",
      type: "Brief" as const,
      authors: ["Dr. Amara Okafor"],
      date: "February 2024",
      abstract: "Policy recommendations for enhancing effectiveness in carbon trading.",
    },
    {
      id: "p3",
      title: "The Digital Divide in International Development",
      type: "Article" as const,
      authors: ["Dr. Yuki Tanaka"],
      date: "January 2024",
      abstract: "Infrastructure and policy strategies for bridging digital gaps.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {publication.type}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight animate-fade-in-down">
            {publication.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{publication.authors.join(", ")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{publication.date}</span>
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
                <h2 className="text-3xl font-serif font-bold mb-4">Abstract</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {publication.abstract}
                </p>

                <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Executive Summary</h3>
                <p className="mb-6">
                  The 2024 Global Security Report provides a comprehensive assessment of the international security landscape, examining key threats, emerging challenges, and institutional responses.
                </p>

                <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Key Sections</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Geopolitical Tensions and Regional Conflicts</li>
                  <li>Cybersecurity and Digital Threats</li>
                  <li>Non-Traditional Security Challenges</li>
                  <li>Institutional Responses and Policy Recommendations</li>
                </ul>

                <p className="mt-8 p-4 bg-secondary rounded-lg">
                  <strong>Note:</strong> This is a preview of the publication. Download the full report to read the complete analysis and recommendations.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Download/Share */}
              <div className="bg-secondary rounded-lg p-6 mb-8">
                <h3 className="font-serif font-bold text-lg mb-4">Access This Publication</h3>
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

              {/* Publication Info */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Publication Info</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Type</p>
                    <p>{publication.type}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Date</p>
                    <p>{publication.date}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Authors</p>
                    <p>{publication.authors.join(", ")}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Publications */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Related Publications
            </h2>
            <p className="text-lg text-muted-foreground">
              Other publications by the same authors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPublications.map((pub) => (
              <PublicationCard key={pub.id} {...pub} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
