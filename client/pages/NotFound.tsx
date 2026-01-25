import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-7xl md:text-8xl font-serif font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or may have been moved. Let's get you
          back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/research"
            className="px-8 py-3 border border-primary text-primary rounded font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Explore Research
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Need help? Contact us at{" "}
            <a
              href="mailto:contact@globalinstitute.org"
              className="text-primary hover:text-primary-dark font-medium"
            >
              contact@globalinstitute.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
