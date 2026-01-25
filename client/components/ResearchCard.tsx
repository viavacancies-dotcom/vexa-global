import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

interface ResearchCardProps {
  id: string;
  title: string;
  abstract: string;
  author: string;
  date: string;
  tag: string;
  theme?: "geopolitics" | "relations" | "economics" | "technology" | "energy" | "regional";
  image?: string;
}

export default function ResearchCard({
  id,
  title,
  abstract,
  author,
  date,
  tag,
  theme = "geopolitics",
  image,
}: ResearchCardProps) {
  const themeColors: Record<string, string> = {
    geopolitics: "bg-red-50 border-accent-geopolitics",
    relations: "bg-blue-50 border-accent-relations",
    economics: "bg-amber-50 border-accent-economics",
    technology: "bg-purple-50 border-accent-technology",
    energy: "bg-orange-50 border-accent-energy",
    regional: "bg-teal-50 border-accent-regional",
  };

  const accentColorVar: Record<string, string> = {
    geopolitics: "var(--accent-geopolitics)",
    relations: "var(--accent-relations)",
    economics: "var(--accent-economics)",
    technology: "var(--accent-technology)",
    energy: "var(--accent-energy)",
    regional: "var(--accent-regional)",
  };

  return (
    <Link
      to={`/research/${id}`}
      className="flex flex-col h-full border border-border rounded-lg overflow-hidden bg-card card-hover group cursor-pointer no-underline"
    >
      <article>
        {/* Image or Color Accent */}
        {image ? (
          <div className="h-40 bg-muted overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div
            className="h-2"
            style={{ backgroundColor: accentColorVar[theme] }}
          />
        )}

        <div className="flex flex-col flex-grow p-5">
          {/* Tag */}
          <div className="mb-3">
            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded text-primary bg-secondary">
              {tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200 ease-in-out line-clamp-2">
            {title}
          </h3>

          {/* Abstract */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
            {abstract}
          </p>

          {/* Meta */}
          <div className="flex flex-col gap-2 text-xs text-muted-foreground border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>

          {/* CTA */}
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200 ease-in-out">
            Read More <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}
