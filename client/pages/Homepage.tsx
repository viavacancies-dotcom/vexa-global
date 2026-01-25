import { Globe, Shield, TrendingUp, Zap, Wind, Map } from "lucide-react";
import { useEffect } from "react";
import ResearchCard from "@/components/ResearchCard";
import PublicationCard from "@/components/PublicationCard";
import ExpertCard from "@/components/ExpertCard";
import EventCard from "@/components/EventCard";
import ThemeCard from "@/components/ThemeCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";
import { Link } from "react-router-dom";

// Static data - extracted to module level to prevent recreation on every render
const FEATURED_RESEARCH = [
  {
    id: "1",
    title: "The Future of International Trade in an Uncertain World",
    abstract:
      "This comprehensive analysis examines emerging trade patterns, protectionist trends, and the reshaping of global supply chains in response to geopolitical tensions and climate imperatives.",
    author: "Dr. Elena Rossi",
    date: "March 15, 2024",
    tag: "Trade & Economics",
    theme: "economics" as const,
  },
  {
    id: "2",
    title: "Artificial Intelligence and National Security",
    abstract:
      "An in-depth examination of AI's implications for military capabilities, cybersecurity, and the strategic competition between major powers in the digital domain.",
    author: "Prof. James Mitchell",
    date: "March 10, 2024",
    tag: "Technology & Strategy",
    theme: "technology" as const,
  },
  {
    id: "3",
    title: "Renewable Energy Transitions in Developing Economies",
    abstract:
      "Analyzing the policy frameworks, investment patterns, and technical challenges facing developing nations in their transition to renewable energy systems.",
    author: "Dr. Amara Okafor",
    date: "March 5, 2024",
    tag: "Climate & Energy",
    theme: "energy" as const,
  },
];

const LATEST_ANALYSIS = [
  {
    id: "4",
    title: "Geopolitical Implications of Arctic Governance",
    abstract:
      "As climate change reshapes the Arctic, new governance challenges emerge. This brief examines current frameworks and policy recommendations.",
    author: "Dr. Sofia Bergström",
    date: "March 18, 2024",
    tag: "Geopolitics",
    theme: "geopolitics" as const,
  },
  {
    id: "5",
    title: "Regional Integration in Southeast Asia Post-Pandemic",
    abstract:
      "Economic recovery and institutional strengthening in ASEAN: opportunities and challenges for regional cooperation.",
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

const PUBLICATIONS = [
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
    abstract: "Policy recommendations for enhancing effectiveness and equity in international carbon trading mechanisms.",
  },
  {
    id: "p3",
    title: "The Digital Divide in International Development",
    type: "Article" as const,
    authors: ["Dr. Yuki Tanaka"],
    date: "January 2024",
    abstract:
      "Infrastructure, policy, and investment strategies for bridging digital access gaps in developing regions.",
  },
];

const EXPERTS = [
  {
    id: "e1",
    name: "Dr. Elena Rossi",
    role: "Director of Research",
    bio: "Leading expert in international economics and trade policy with 20+ years of experience.",
    expertise: ["Economics", "Trade", "Global Markets"],
    email: "e.rossi@globalinstitute.org",
  },
  {
    id: "e2",
    name: "Prof. James Mitchell",
    role: "Senior Fellow, Technology & Security",
    bio: "Specialist in emerging technologies and their geopolitical implications.",
    expertise: ["Technology", "Cybersecurity", "AI Strategy"],
    email: "j.mitchell@globalinstitute.org",
  },
  {
    id: "e3",
    name: "Dr. Amara Okafor",
    role: "Fellow, Energy & Climate",
    bio: "Climate scientist and policy analyst focusing on sustainable transitions in developing economies.",
    expertise: ["Energy", "Climate", "Development"],
    email: "a.okafor@globalinstitute.org",
  },
];

const UPCOMING_EVENTS = [
  {
    id: "ev1",
    title: "Webinar: The Future of Global Governance",
    date: "April 10, 2024 | 2:00 PM CET",
    location: "Online",
    summary:
      "Join our experts for a discussion on institutional reform and global cooperation challenges.",
    eventType: "Webinar" as const,
  },
  {
    id: "ev2",
    title: "Annual Conference: Rethinking Global Strategy",
    date: "May 15-17, 2024",
    location: "Geneva, Switzerland",
    summary:
      "Three-day conference bringing together policymakers, researchers, and thought leaders.",
    eventType: "Conference" as const,
  },
  {
    id: "ev3",
    title: "Workshop: Policy Analysis & Research Methods",
    date: "April 22, 2024 | 10:00 AM CET",
    location: "Geneva, Switzerland",
    summary:
      "Hands-on workshop for emerging researchers and policy professionals.",
    eventType: "Workshop" as const,
  },
];

const RESEARCH_THEMES = [
  {
    id: "geopolitics",
    title: "Geopolitics & Security",
    description:
      "Analysis of power dynamics, conflicts, and strategic competition in the global system.",
    icon: Shield,
    theme: "geopolitics" as const,
    count: 24,
  },
  {
    id: "relations",
    title: "International Relations",
    description:
      "Institutional frameworks, diplomacy, and cooperation mechanisms between states.",
    icon: Globe,
    theme: "relations" as const,
    count: 18,
  },
  {
    id: "economics",
    title: "Economics & Markets",
    description:
      "Global trade, development, financial systems, and economic policy analysis.",
    icon: TrendingUp,
    theme: "economics" as const,
    count: 31,
  },
  {
    id: "technology",
    title: "Technology & AI",
    description:
      "Digital transformation, emerging technologies, and their societal implications.",
    icon: Zap,
    theme: "technology" as const,
    count: 15,
  },
  {
    id: "energy",
    title: "Energy & Climate",
    description:
      "Energy transitions, climate policy, sustainability, and environmental governance.",
    icon: Wind,
    theme: "energy" as const,
    count: 22,
  },
  {
    id: "regional",
    title: "Regional Studies",
    description:
      "In-depth analysis of specific regions, their dynamics, and international engagement.",
    icon: Map,
    theme: "regional" as const,
    count: 19,
  },
];

export default function Homepage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-16 md:py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-down">
              Understanding Our Complex World
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up">
              Independent research and policy analysis for informed decision-making in a
              rapidly changing global landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link
                to="/research"
                className="inline-block px-8 py-4 bg-white text-primary font-medium rounded hover:bg-secondary hover:shadow-lg hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out text-center"
              >
                Explore Our Research
              </Link>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-primary-foreground/20 text-white font-medium rounded hover:bg-primary-foreground/30 hover:shadow-lg hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out border border-white/30 text-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Themes */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Research Themes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our work spans critical areas of global importance, providing deep
              analysis and policy recommendations across multiple domains.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH_THEMES.map((theme, idx) => (
              <StaggerItem key={theme.id} index={idx}>
                <ThemeCard {...theme} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Featured Research
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Latest insights from our research teams on the most pressing global issues.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {FEATURED_RESEARCH.map((research, idx) => (
              <StaggerItem key={research.id} index={idx}>
                <ResearchCard {...research} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out"
            >
              View All Research
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Analysis Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Latest Analysis
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Recent commentary and analysis on current events and emerging trends.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {LATEST_ANALYSIS.map((item, idx) => (
              <StaggerItem key={item.id} index={idx}>
                <ResearchCard {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out"
            >
              View All Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Featured Publications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our most significant reports, policy briefs, and research papers.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {PUBLICATIONS.map((pub, idx) => (
              <StaggerItem key={pub.id} index={idx}>
                <PublicationCard {...pub} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out"
            >
              View All Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Seminars, conferences, and workshops featuring our experts.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {UPCOMING_EVENTS.map((event, idx) => (
              <StaggerItem key={event.id} index={idx}>
                <EventCard {...event} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Experts Highlight */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our Experts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              World-class researchers and analysts across key fields.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {EXPERTS.map((expert, idx) => (
              <StaggerItem key={expert.id} index={idx}>
                <ExpertCard {...expert} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="text-center">
            <Link
              to="/experts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out"
            >
              View All Experts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup
            title="Stay Informed"
            description="Subscribe to our newsletter for the latest research, policy analysis, and institutional updates delivered to your inbox."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in-down">
            Ready to Engage?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up">
            Whether you're looking for specific research, seeking expert consultation,
            or interested in partnerships, we're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-medium rounded hover:bg-secondary hover:shadow-lg hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out animate-fade-in-up"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
