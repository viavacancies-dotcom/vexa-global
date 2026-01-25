import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { memo } from "react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  eventType?: "Seminar" | "Conference" | "Workshop" | "Webinar";
  image?: string;
}

function EventCard({
  id,
  title,
  date,
  location,
  summary,
  eventType = "Seminar",
  image,
}: EventCardProps) {
  const eventTypeColors: Record<string, string> = {
    Seminar: "bg-blue-100 text-blue-800",
    Conference: "bg-purple-100 text-purple-800",
    Workshop: "bg-green-100 text-green-800",
    Webinar: "bg-amber-100 text-amber-800",
  };

  return (
    <Link
      to={`/events/${id}`}
      className="flex flex-col h-full border border-border rounded-lg overflow-hidden bg-card card-hover group cursor-pointer no-underline"
    >
      <article>
        {/* Image or Accent Bar */}
        {image ? (
          <div className="h-40 bg-muted overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-2 bg-gradient-to-r from-primary-light to-primary" />
        )}

        <div className="flex flex-col flex-grow p-5">
          {/* Event Type Badge */}
          <div className="mb-3">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${eventTypeColors[eventType]}`}
            >
              {eventType}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-serif font-bold mb-3 text-foreground line-clamp-2">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {summary}
          </p>

          {/* Date and Location */}
          <div className="space-y-2 text-sm text-muted-foreground border-t border-border pt-4 mb-4">
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{date}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>{location}</span>
            </div>
          </div>

          {/* CTA */}
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            Learn More <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default memo(EventCard);
