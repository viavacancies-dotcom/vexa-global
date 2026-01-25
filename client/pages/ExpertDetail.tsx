import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Mail, Briefcase, BookOpen } from "lucide-react";
import PublicationCard from "@/components/PublicationCard";
import ResearchCard from "@/components/ResearchCard";

export default function ExpertDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Mock data - in a real app, fetch based on ID
  const expert = {
    id: id,
    name: "Dr. Elena Rossi",
    role: "Director of Research",
    bio: "Leading expert in international economics and trade policy with 20+ years of experience.",
    fullBio: `Dr. Elena Rossi is the Director of Research at Global Institute, where she leads the economic research program. With over 20 years of experience in international policy analysis, Dr. Rossi has published extensively on trade policy, economic development, and global financial systems.

Her work has been cited by policymakers, international organizations, and academic institutions worldwide. She regularly contributes to major policy forums and provides consultation to governments and international organizations.

Dr. Rossi holds a Ph.D. in International Economics from a leading European university and has held positions at various think tanks and academic institutions.`,
    expertise: ["Economics", "Trade", "Global Markets", "Development", "Policy Analysis"],
    email: "e.rossi@globalinstitute.org",
  };

  // Expert's recent publications
  const publications = [
    {
      id: "p1",
      title: "Global Security Report 2024",
      type: "Report" as const,
      authors: ["Dr. Elena Rossi", "Prof. James Mitchell"],
      date: "March 2024",
      abstract: "Annual comprehensive assessment of global security threats and trends.",
    },
    {
      id: "p4",
      title: "Trade Policy in the 21st Century",
      type: "Article" as const,
      authors: ["Dr. Elena Rossi"],
      date: "February 2024",
      abstract: "Analysis of evolving trade relationships and policy frameworks.",
    },
  ];

  // Expert's recent research
  const research = [
    {
      id: "1",
      title: "The Future of International Trade in an Uncertain World",
      abstract: "This comprehensive analysis examines emerging trade patterns and supply chains.",
      author: "Dr. Elena Rossi",
      date: "March 15, 2024",
      tag: "Trade & Economics",
      theme: "economics" as const,
    },
    {
      id: "5",
      title: "Economic Impacts of Climate Policy",
      abstract: "Analysis of how climate policies affect economic growth and competitiveness.",
      author: "Dr. Elena Rossi",
      date: "February 20, 2024",
      tag: "Economics & Climate",
      theme: "economics" as const,
    },
  ];

  return (
    <div>
      {/* Profile Hero */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0 animate-fade-in-up">
              <span className="text-6xl font-serif font-bold">
                {expert.name.charAt(0)}
              </span>
            </div>

            {/* Info */}
            <div className="flex-grow animate-fade-in-down">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
                {expert.name}
              </h1>
              <div className="flex items-center gap-2 text-lg text-primary-foreground/90 mb-6">
                <Briefcase className="h-5 w-5" />
                <span>{expert.role}</span>
              </div>
              <p className="text-lg text-primary-foreground/80">
                {expert.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-serif font-bold mb-6">Biography</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {expert.fullBio}
                </p>

                <h3 className="text-2xl font-serif font-bold mt-8 mb-4">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {expert.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-secondary rounded-lg p-6 sticky top-20">
                <h3 className="font-serif font-bold text-lg mb-6">Get in Touch</h3>
                <a
                  href={`mailto:${expert.email}`}
                  className="w-full px-4 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 mb-3"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-2">Email</p>
                  <a
                    href={`mailto:${expert.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {expert.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Recent Publications */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-bold">
                Recent Publications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} {...pub} />
              ))}
            </div>
          </div>

          {/* Recent Research */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-serif font-bold">
                Recent Research
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {research.map((item) => (
                <ResearchCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
