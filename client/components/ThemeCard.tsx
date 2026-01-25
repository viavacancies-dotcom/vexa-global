import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { memo } from "react";

interface ThemeCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  theme: "geopolitics" | "relations" | "economics" | "technology" | "energy" | "regional";
  count?: number;
}

function ThemeCard({
  id,
  title,
  description,
  icon: Icon,
  theme,
  count = 0,
}: ThemeCardProps) {
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
      to={`/research?topic=${id}`}
      className="group flex flex-col h-full border border-border rounded-lg p-6 bg-card card-hover cursor-pointer no-underline"
    >
      <article>
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all"
          style={{ backgroundColor: accentColorVar[theme] + "20" }}
        >
          <Icon
            className="h-6 w-6"
            style={{ color: accentColorVar[theme] }}
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
          {count > 0 && (
            <span className="text-xs font-medium text-muted-foreground">
              {count} {count === 1 ? "publication" : "publications"}
            </span>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200 ease-in-out">
            Explore <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default memo(ThemeCard);
