import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { memo } from "react";

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

function ResearchCard({
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
    geopolitics: "hsl(var(--accent-geopolitics))",
    relations: "hsl(var(--accent-relations))",
    economics: "hsl(var(--accent-economics))",
    technology: "hsl(var(--accent-technology))",
    energy: "hsl(var(--accent-energy))",
    regional: "hsl(var(--accent-regional))",
  };

  return (
    <Link
      to={`/research/${id}`}
      className="flex flex-col h-full border border-border rounded-xl overflow-hidden bg-card card-interactive group cursor-pointer no-underline"
    >
      <article>
        {/* Image or Color Accent */}
        {image ? (
          <div className="h-40 bg-muted overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div
            className="h-3"
            style={{ backgroundColor: accentColorVar[theme] }}
          />
        )}

        <div className="flex flex-col flex-grow p-6">
          {/* Tag */}
          <div className="mb-4">
            <span className="inline-block text-xs font-garet font-semibold px-3 py-1.5 rounded-full text-white transition-all duration-200"
              style={{ backgroundColor: accentColorVar[theme] }}>
              {tag}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-garet font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200 ease-in-out line-clamp-2">
            {title}
          </h3>

          {/* Abstract */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
            {abstract}
          </p>

          {/* Meta */}
          <div className="flex flex-col gap-2.5 text-xs text-muted-foreground border-t border-border/50 pt-5">
            <div className="flex items-center gap-2.5">
              <User className="h-4 w-4 text-primary/60" />
              <span className="font-garet">{author}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar className="h-4 w-4 text-primary/60" />
              <span className="font-garet">{date}</span>
            </div>
          </div>

          {/* CTA */}
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-garet font-semibold text-primary group-hover:gap-3 transition-all duration-200 ease-in-out">
            Read More <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default memo(ResearchCard);
