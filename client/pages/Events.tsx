import EventCard from "@/components/EventCard";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Events() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const upcomingEvents = [
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
    {
      id: "ev4",
      title: "Seminar: AI and Governance",
      date: "April 5, 2024 | 3:30 PM CET",
      location: "Online",
      summary:
        "Exploring the governance challenges and opportunities posed by artificial intelligence.",
      eventType: "Seminar" as const,
    },
  ];

  const pastEvents = [
    {
      id: "pev1",
      title: "Conference: Trade and Development",
      date: "March 20-21, 2024",
      location: "Brussels, Belgium",
      summary: "International conference on the future of global trade systems.",
      eventType: "Conference" as const,
    },
    {
      id: "pev2",
      title: "Expert Roundtable: Arctic Governance",
      date: "March 15, 2024",
      location: "Geneva, Switzerland",
      summary:
        "Closed-door discussion with government officials and research experts.",
      eventType: "Seminar" as const,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Events
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Seminars, conferences, and workshops featuring our experts and partners.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event, idx) => (
                  <div
                    key={event.id}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, idx) => (
                  <div
                    key={event.id}
                    className="animate-fade-in-up"
                    style={{
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <EventCard {...event} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Event Archive Note */}
          <div className="mt-12 bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-xl font-serif font-bold mb-2">Event Archive</h3>
            <p className="text-muted-foreground">
              For a complete archive of past events, photos, and recordings, visit our event
              archive page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
