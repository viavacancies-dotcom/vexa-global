import { Link } from "react-router-dom";
import { Download, Share2, Calendar, Users } from "lucide-react";

interface PublicationCardProps {
  id: string;
  title: string;
  type: "Report" | "Brief" | "Article" | "Paper";
  authors: string[];
  date: string;
  abstract: string;
  downloadLink?: string;
}

export default function PublicationCard({
  id,
  title,
  type,
  authors,
  date,
  abstract,
  downloadLink,
}: PublicationCardProps) {
  const typeColors: Record<string, string> = {
    Report: "bg-blue-100 text-blue-800",
    Brief: "bg-green-100 text-green-800",
    Article: "bg-amber-100 text-amber-800",
    Paper: "bg-purple-100 text-purple-800",
  };

  return (
    <article className="flex flex-col h-full border border-border rounded-lg p-6 bg-card card-hover group cursor-pointer">
      {/* Type Badge */}
      <div className="mb-4">
        <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${typeColors[type]}`}
        >
          {type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-serif font-bold mb-3 text-foreground line-clamp-2">
        {title}
      </h3>

      {/* Abstract */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
        {abstract}
      </p>

      {/* Meta Info */}
      <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-4 mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{authors.join(", ")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Link
          to={`/publications/${id}`}
          className="flex-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          View Details
        </Link>
        {downloadLink && (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(downloadLink, "_blank");
            }}
            className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
            aria-label="Download publication"
          >
            <Download className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            // Share functionality would go here
          }}
          className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
          aria-label="Share publication"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
