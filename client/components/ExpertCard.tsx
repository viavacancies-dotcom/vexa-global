import { Link } from "react-router-dom";
import { Mail, Briefcase, ArrowRight } from "lucide-react";
import { memo } from "react";

interface ExpertCardProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
  email?: string;
}

function ExpertCard({
  id,
  name,
  role,
  bio,
  expertise,
  image,
  email,
}: ExpertCardProps) {
  return (
    <Link
      to={`/experts/${id}`}
      className="flex flex-col h-full border border-border rounded-lg overflow-hidden bg-card card-interactive group cursor-pointer no-underline"
    >
      <article>
        {/* Profile Image or Placeholder */}
        <div className="h-48 bg-gradient-to-br from-primary-light to-primary flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-4xl font-serif font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex flex-col h-full p-5">
          {/* Header - Name and Role */}
          <div className="mb-4">
            <h3 className="text-lg font-serif font-bold text-foreground mb-1">
              {name}
            </h3>

            {/* Role */}
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Briefcase className="h-4 w-4" />
              <span>{role}</span>
            </div>
          </div>

          {/* Content - Bio and Tags (grows to fill available space) */}
          <div className="flex-grow">
            {/* Bio */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {bio}
            </p>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2">
              {expertise.slice(0, 3).map((exp) => (
                <span
                  key={exp}
                  className="inline-block text-xs px-2 py-1 rounded bg-secondary text-foreground"
                >
                  {exp}
                </span>
              ))}
              {expertise.length > 3 && (
                <span className="inline-block text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                  +{expertise.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Footer - Contact / CTA (pinned to bottom) */}
          <div className="border-t border-border pt-4 mt-4 flex items-center justify-between">
            {/* View Profile button - bottom left */}
            <div className="flex-grow">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors cursor-pointer">
                View Profile <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            {/* Email button - right side */}
            {email && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = `mailto:${email}`;
                }}
                className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default memo(ExpertCard);
