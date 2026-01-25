import { Users, Target, Globe } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About Global Institute
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            An independent think tank dedicated to advancing policy research and providing
            evidence-based analysis on critical global issues.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                To produce rigorous, independent research that informs policy decisions and
                contributes to solving the world's most pressing challenges.
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where evidence-based policy and thoughtful analysis drive solutions
                to global challenges, fostering peace, prosperity, and sustainability.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold">Our Values</h3>
              <p className="text-muted-foreground">
                Independence, integrity, and intellectual rigor in all our work, with a
                commitment to accessibility and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            More Content Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're developing comprehensive information about our governance structure, team,
            and partner networks. Check back soon for detailed sections on our board of
            directors, staff, and institutional partners.
          </p>
          <div className="bg-primary/10 border border-primary rounded-lg p-8">
            <p className="text-muted-foreground">
              In the meantime, feel free to explore our research, publications, and expert
              profiles to learn more about our work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
