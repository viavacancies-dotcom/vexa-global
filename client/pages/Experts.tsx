import { useEffect } from "react";
import ExpertCard from "@/components/ExpertCard";
import StaggerContainer, { StaggerItem } from "@/components/StaggerContainer";

// Static data - extracted to module level to prevent recreation on every render
const EXPERTS_DATA = [
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
    bio: "Climate scientist and policy analyst focusing on sustainable transitions.",
    expertise: ["Energy", "Climate", "Development"],
    email: "a.okafor@globalinstitute.org",
  },
  {
    id: "e4",
    name: "Dr. Sofia Bergström",
    role: "Senior Fellow, Geopolitics",
    bio: "Expert on European security, Arctic governance, and strategic competition.",
    expertise: ["Geopolitics", "Arctic Studies", "European Affairs"],
    email: "s.bergstrom@globalinstitute.org",
  },
  {
    id: "e5",
    name: "Prof. Rajesh Kumar",
    role: "Fellow, Regional Studies",
    bio: "Specialist in Southeast Asian economies and ASEAN institutional frameworks.",
    expertise: ["ASEAN", "Regional Integration", "Economics"],
    email: "r.kumar@globalinstitute.org",
  },
  {
    id: "e6",
    name: "Dr. Yuki Tanaka",
    role: "Research Associate",
    bio: "Focus on digital inclusion, development technology, and global inequality.",
    expertise: ["Digital Development", "Technology", "Inequality"],
    email: "y.tanaka@globalinstitute.org",
  },
];

export default function Experts() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Experts
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            World-class researchers, analysts, and specialists across key policy areas.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Experts Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTS_DATA.map((expert, idx) => (
              <StaggerItem key={expert.id} index={idx}>
                <ExpertCard {...expert} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
