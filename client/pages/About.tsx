import { Users, Target, Globe, BookOpen, Lightbulb, Award } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To produce rigorous, independent research that informs policy decisions and contributes to solving the world's most pressing challenges.",
    },
    {
      icon: Globe,
      title: "Our Vision",
      description: "A world where evidence-based policy and thoughtful analysis drive solutions to global challenges, fostering peace, prosperity, and sustainability.",
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Independence, integrity, and intellectual rigor in all our work, with a commitment to accessibility and impact.",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Evidence-Based Research",
      description: "We rely on comprehensive data analysis and rigorous methodologies to drive our insights.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We generate actionable recommendations that address today's complex global challenges.",
    },
    {
      icon: Award,
      title: "International Recognition",
      description: "Our work is trusted by policymakers, media, and institutions worldwide.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Global Institute
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            An independent think tank dedicated to advancing policy research and providing evidence-based analysis on critical global issues.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values - Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg group select-none"
                  style={{ backgroundColor: "#F0F8FF" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine rigorous research with practical impact to address the world's most complex policy challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg select-none"
                  style={{ backgroundColor: "#F0F8FF" }}
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 md:py-16 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            By The Numbers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Research Programs" },
              { number: "100+", label: "Expert Researchers" },
              { number: "200+", label: "Annual Publications" },
              { number: "75+", label: "Countries Reached" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg text-center select-none"
                style={{ backgroundColor: "#F0F8FF" }}
              >
                <p className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-primary text-white border-t border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Explore Our Work</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Browse our latest research, publications, and analysis.
              </p>
              <a
                href="/research"
                className="inline-flex items-center text-sm font-medium text-white hover:gap-2 transition-all"
              >
                View Research →
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Meet Our Team</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Learn about the experts behind our research and insights.
              </p>
              <a
                href="/experts"
                className="inline-flex items-center text-sm font-medium text-white hover:gap-2 transition-all"
              >
                Meet Experts →
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Get In Touch</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Have questions or want to collaborate with us?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-white hover:gap-2 transition-all"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Note */}
      <section className="py-8 md:py-12 bg-secondary/50 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            More content coming soon: governance structure, detailed team information, and partner networks.
          </p>
        </div>
      </section>
    </div>
  );
}
