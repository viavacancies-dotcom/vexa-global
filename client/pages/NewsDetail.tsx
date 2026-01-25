import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

// Static news data - same as in News.tsx
const ALL_NEWS_ITEMS = [
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

export default function NewsDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const article = ALL_NEWS_ITEMS.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Article not found
          </h1>
          <Link
            to="/news"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          <div className="mb-4">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary-foreground/20">
              {article.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight animate-fade-in-down">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>by {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
              {article.content}
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary-dark hover:shadow-md transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
