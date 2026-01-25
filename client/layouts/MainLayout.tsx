import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Experts", href: "/experts" },
    { label: "Events", href: "/events" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Institute Name */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-sm">I</span>
              </div>
              <div>
                <h1 className="font-serif text-lg font-bold text-primary hidden sm:block">
                  Global Institute
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block leading-none">
                  Policy & Research
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-smooth duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-1 animate-fade-in-down">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-all duration-200 ease-in-out"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animation: `fadeInDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.05}s both`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Institute Info */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">
                Global Institute
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                An independent think tank dedicated to policy research and
                analysis on global affairs.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 2.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.238 3.746 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18.268 8.277c0-3.978-3.208-7.209-7.166-7.209-3.957 0-7.164 3.231-7.164 7.209 0 3.977 3.207 7.208 7.164 7.208 3.958 0 7.166-3.231 7.166-7.208zm-3.627 0c0 1.974-1.592 3.577-3.555 3.577-1.964 0-3.556-1.603-3.556-3.577 0-1.975 1.592-3.578 3.556-3.578 1.963 0 3.555 1.603 3.555 3.578z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold mb-4">Research</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/research?topic=geopolitics"
                    className="text-muted-foreground hover:text-primary transition-smooth duration-200 inline-block group"
                  >
                    Geopolitics & Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research?topic=technology"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    Technology & AI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research?topic=energy"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    Energy & Climate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    All Research
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-serif font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/publications"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experts"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    Our Experts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/news"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    News & Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <p>123 Research Avenue</p>
                  <p>Geneva, Switzerland</p>
                </li>
                <li>
                  <a
                    href="mailto:contact@globalinstitute.org"
                    className="hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    contact@globalinstitute.org
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+41223334444"
                    className="hover:text-primary transition-colors duration-200 ease-in-out"
                  >
                    +41 22 333 4444
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>
                &copy; 2024 Global Institute. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors duration-200 ease-in-out">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors duration-200 ease-in-out">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
