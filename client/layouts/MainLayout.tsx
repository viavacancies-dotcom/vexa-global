import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Configurable social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/globalinstitute",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/globalinstitute",
    },
  ];

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
          <div className="flex items-center justify-between" style={{ height: "70px" }}>
            {/* Logo / Institute Name */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F30cffefbd891455492f8e1b92fb414ad%2F71548cef8d674304ac09344916bd53c8?format=webp&width=800&height=1200"
                alt="Vexa Global"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md transition-smooth duration-200 relative group"
                >
                  {link.label}
                  <span className="nav-underline"></span>
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
            <nav className="md:hidden pb-4 grid grid-cols-2 gap-2 animate-fade-in-down">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-all duration-200 ease-in-out text-left"
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
      <footer className="border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
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
