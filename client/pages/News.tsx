import { Calendar, User } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
      content: "The Global Institute has released its most comprehensive security analysis to date. This annual report examines emerging threats, evolving geopolitical challenges, and provides detailed policy recommendations for governments and international organizations.\n\nThe analysis covers key areas including cybersecurity threats, regional conflicts, economic disruptions, and institutional failures. Drawing on expertise from our global team of specialists, the report offers strategic recommendations for addressing these critical challenges in the coming year.\n\nKey findings include an assessment of how major powers are adapting their strategies, the rise of non-state actors in global security, and the increasing intersection of traditional and emerging security threats. The report emphasizes the importance of multilateral cooperation and evidence-based policymaking.",
    },
    {
      id: "n2",
      title: "Expert Commentary: The Future of International Trade",
      date: "March 15, 2024",
      category: "News",
      excerpt:
        "Dr. Elena Rossi discusses evolving trade dynamics in recent media appearances.",
      author: "Dr. Elena Rossi",
      content: "Dr. Elena Rossi, Director of our Economics & Markets research program, recently appeared on several international media platforms to discuss the future of global trade. In these appearances, she analyzed how protectionist policies, supply chain disruptions, and technological changes are reshaping international commerce.\n\nDr. Rossi highlighted the growing divergence between major trading blocs and the potential for new regional trade agreements to emerge. She emphasized that while trade tensions persist, opportunities exist for cooperation on critical sectors such as green energy and digital infrastructure.\n\nHer commentary drew on the Institute's ongoing research into trade policy, providing policymakers with data-driven insights into the long-term trajectory of global trade relationships.",
    },
    {
      id: "n3",
      title: "Institute Hosts High-Level Policy Forum",
      date: "March 10, 2024",
      category: "Event Update",
      excerpt:
        "Senior government officials and researchers convened to discuss global governance challenges.",
      author: "Communications Team",
      content: "The Global Institute recently hosted a high-level policy forum bringing together government officials, researchers, and thought leaders to discuss urgent global governance challenges. The forum featured keynote addresses from senior diplomats and in-depth panel discussions on topics ranging from climate policy to institutional reform.\n\nParticipants shared perspectives on how existing international institutions can be reformed to better address contemporary challenges. The discussions emphasized the need for greater transparency, more inclusive decision-making processes, and mechanisms for rapid response to emerging crises.\n\nKey takeaways from the forum have been compiled into a policy brief that will be shared with participating governments and relevant international organizations.",
    },
    {
      id: "n4",
      title: "New Research Initiative on Climate Transitions Launched",
      date: "March 5, 2024",
      category: "Press Release",
      excerpt:
        "Multi-year research program examining energy transitions in developing economies.",
      author: "Dr. Amara Okafor",
      content: "The Global Institute has launched an ambitious multi-year research initiative focused on understanding energy transitions in developing economies. This program, led by Dr. Amara Okafor, examines how developing nations can successfully transition to renewable energy while maintaining economic growth and social stability.\n\nThe research encompasses case studies from multiple regions, analyzing policy frameworks, investment patterns, and technological adoption. The initiative will produce detailed reports on best practices, common obstacles, and strategic recommendations for accelerating clean energy transitions.\n\nFunding for this initiative comes from multiple international donors committed to sustainable development. The research findings will directly inform policy discussions at regional development banks and international climate forums.",
    },
    {
      id: "n5",
      title: "Prof. Mitchell Appears on Global Affairs Podcast",
      date: "February 28, 2024",
      category: "News",
      excerpt:
        "Discussion on AI governance and emerging security technologies.",
      author: "Prof. James Mitchell",
      content: "Prof. James Mitchell, Senior Fellow in our Technology & Security program, recently appeared on a leading global affairs podcast to discuss the governance challenges posed by artificial intelligence. The discussion covered rapid AI development, implications for national security, and the need for international cooperation on AI regulation.\n\nProf. Mitchell argued that current governance frameworks are insufficient to manage the risks associated with advanced AI systems. He called for a combination of national regulations, international agreements, and industry self-governance to ensure AI development benefits society while minimizing risks.\n\nThe podcast episode generated significant interest in policy circles and has been referenced in several governmental technology policy discussions.",
    },
    {
      id: "n6",
      title: "Institute Announces New Research Partnerships",
      date: "February 22, 2024",
      category: "Press Release",
      excerpt:
        "Collaboration with international organizations to expand research capacity.",
      author: "Director of Research",
      content: "The Global Institute has announced new research partnerships with leading international organizations, significantly expanding our research capacity and global reach. These partnerships span multiple continents and focus on critical areas including regional security, economic development, and governance reform.\n\nThe collaborations enable resource sharing, joint research projects, and coordinated policy analysis. By working closely with regional organizations that have deep local expertise, the Institute can produce more nuanced and actionable research that reflects diverse perspectives and on-the-ground realities.\n\nThese partnerships represent a strategic commitment to evidence-based policymaking and international cooperation on global challenges. The Institute looks forward to producing groundbreaking research and policy recommendations through these collaborative efforts.",
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
