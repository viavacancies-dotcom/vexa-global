import { Calendar, User } from "lucide-react";
import { useEffect } from "react";

export default function News() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const newsItems = [
    {
      id: "n1",
      title: "Global Institute Releases Comprehensive Security Analysis",
      date: "March 18, 2024",
      category: "Press Release",
      excerpt:
        "Annual global security report analyzes emerging threats and policy recommendations.",
      author: "Communications Team",
    },
    {
      id: "n2",
      title: "Expert Commentary: The Future of International Trade",
      date: "March 15, 2024",
      category: "News",
      excerpt:
        "Dr. Elena Rossi discusses evolving trade dynamics in recent media appearances.",
      author: "Dr. Elena Rossi",
    },
    {
      id: "n3",
      title: "Institute Hosts High-Level Policy Forum",
      date: "March 10, 2024",
      category: "Event Update",
      excerpt:
        "Senior government officials and researchers convened to discuss global governance challenges.",
      author: "Communications Team",
    },
    {
      id: "n4",
      title: "New Research Initiative on Climate Transitions Launched",
      date: "March 5, 2024",
      category: "Press Release",
      excerpt:
        "Multi-year research program examining energy transitions in developing economies.",
      author: "Dr. Amara Okafor",
    },
    {
      id: "n5",
      title: "Prof. Mitchell Appears on Global Affairs Podcast",
      date: "February 28, 2024",
      category: "News",
      excerpt:
        "Discussion on AI governance and emerging security technologies.",
      author: "Prof. James Mitchell",
    },
    {
      id: "n6",
      title: "Institute Announces New Research Partnerships",
      date: "February 22, 2024",
      category: "Press Release",
      excerpt:
        "Collaboration with international organizations to expand research capacity.",
      author: "Director of Research",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            News & Media
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Press releases, news updates, and media coverage of our research and events.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-primary text-white rounded font-medium hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              All News
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Press Releases
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              News
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Media
            </button>
          </div>

          {/* News List */}
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="border-b border-border pb-8 last:border-b-0">
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {item.category}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-foreground mb-3 hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </h2>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>by {item.author}</span>
                  </div>
                </div>

                <button className="mt-4 text-primary font-medium hover:text-primary-dark transition-colors">
                  Read Full Article →
                </button>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">1</button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              2
            </button>
            <button className="px-4 py-2 border border-border rounded hover:bg-secondary hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest news, press releases, and updates.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ease-in-out"
            />
            <button className="px-8 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
