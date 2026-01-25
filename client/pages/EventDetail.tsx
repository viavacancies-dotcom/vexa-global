import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Clock } from "lucide-react";
import ExpertCard from "@/components/ExpertCard";

export default function EventDetail() {
  const { id } = useParams();

  // Mock data - in a real app, fetch based on ID
  const event = {
    id: id,
    title: "Webinar: The Future of Global Governance",
    date: "April 10, 2024",
    time: "2:00 PM CET",
    location: "Online",
    eventType: "Webinar" as const,
    summary:
      "Join our experts for a discussion on institutional reform and global cooperation challenges.",
    description: `
      This webinar brings together leading experts to discuss the critical challenges facing international institutions and governance frameworks in the 21st century.
      
      Topics covered:
      - Reforming multilateral institutions
      - New models for international cooperation
      - Addressing global challenges through governance
      - The role of emerging economies
      
      Speakers include researchers from leading think tanks and policymakers from international organizations.
    `,
    speakers: [
      {
        id: "e1",
        name: "Dr. Elena Rossi",
        role: "Director of Research",
        bio: "Leading expert in international economics and trade policy.",
        expertise: ["Economics", "Trade", "Global Markets"],
        email: "e.rossi@globalinstitute.org",
      },
      {
        id: "e2",
        name: "Prof. James Mitchell",
        role: "Senior Fellow, Technology & Security",
        bio: "Specialist in emerging technologies and geopolitics.",
        expertise: ["Technology", "Cybersecurity", "AI Strategy"],
        email: "j.mitchell@globalinstitute.org",
      },
    ],
    capacity: 500,
    registered: 287,
    status: "Upcoming",
  };

  const eventTypeColors: Record<string, string> = {
    Seminar: "bg-blue-100 text-blue-800",
    Conference: "bg-purple-100 text-purple-800",
    Workshop: "bg-green-100 text-green-800",
    Webinar: "bg-amber-100 text-amber-800",
  };

  return (
    <div>
      {/* Back Link */}
      <div className="bg-secondary py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${eventTypeColors[event.eventType]}`}
            >
              {event.eventType}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight animate-fade-in-down">
            {event.title}
          </h1>

          <div className="space-y-4 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6" />
              <div>
                <p className="font-medium">{event.date}</p>
                <p className="text-sm">{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6" />
              <p>{event.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-serif font-bold mb-4">About This Event</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {event.summary}
                </p>

                <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This webinar brings together leading experts to discuss the critical challenges
                  facing international institutions and governance frameworks in the 21st century.
                </p>

                <h3 className="text-2xl font-serif font-bold mt-8 mb-4">Topics Covered</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-8">
                  <li>Reforming multilateral institutions</li>
                  <li>New models for international cooperation</li>
                  <li>Addressing global challenges through governance</li>
                  <li>The role of emerging economies</li>
                </ul>

                <p className="text-sm text-muted-foreground italic">
                  Speakers include researchers from leading think tanks and policymakers from
                  international organizations.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Event Details */}
              <div className="bg-secondary rounded-lg p-6 mb-6">
                <h3 className="font-serif font-bold text-lg mb-6">Event Details</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Date & Time
                    </p>
                    <p className="text-sm text-foreground">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Location
                    </p>
                    <p className="text-sm text-foreground">{event.location}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Status
                    </p>
                    <p className="text-sm text-foreground">{event.status}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Registered
                    </p>
                    <p className="text-sm text-foreground">
                      {event.registered} / {event.capacity} attendees
                    </p>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors">
                  Register Now
                </button>
              </div>

              {/* Speakers Preview */}
              <div className="bg-primary/10 rounded-lg p-6">
                <h3 className="font-serif font-bold text-lg mb-4">Featured Speakers</h3>
                <div className="space-y-3">
                  {event.speakers.map((speaker) => (
                    <div key={speaker.id} className="text-sm">
                      <p className="font-medium text-foreground">{speaker.name}</p>
                      <p className="text-xs text-primary">{speaker.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Featured Speakers Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-serif font-bold mb-12">Featured Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.speakers.map((speaker) => (
                <ExpertCard key={speaker.id} {...speaker} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Secure Your Spot
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Limited capacity available. Register now to join this exclusive webinar.
          </p>
          <button className="inline-block px-8 py-4 bg-white text-primary font-medium rounded hover:bg-secondary transition-smooth hover:shadow-lg hover:-translate-y-1 duration-300">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
