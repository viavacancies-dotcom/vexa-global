import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import PolicyModal from "@/components/PolicyModal";

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policyModal, setPolicyModal] = useState<{
    isOpen: boolean;
    type: "privacy" | "terms" | null;
  }>({ isOpen: false, type: null });

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

  const privacyPolicyContent = `Privacy Policy

Last Updated: January 2024

1. Introduction

Vexa Global ("we", "us", "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

2. Information Collection and Use

We collect several different types of information for various purposes to provide and improve our Service to you.

Types of Data Collected:
- Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
  * Email address
  * First name and last name
  * Phone number
  * Address, State, Province, ZIP/Postal code, City
  * Cookies and Usage Data

- Usage Data: We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.

3. Use of Data

Vexa Global uses the collected data for various purposes:
- To provide and maintain our Service
- To notify you about changes to our Service
- To allow you to participate in interactive features of our Service when you choose to do so
- To provide customer support
- To gather analysis or valuable information so that we can improve our Service
- To monitor the usage of our Service
- To detect, prevent and address technical and security issues

4. Security of Data

The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

5. Contact Us

If you have any questions about this Privacy Policy, please contact us at:
Vexa Global
contact@vexaglobal.org`;

  const termsOfUseContent = `Terms of Use

Last Updated: January 2024

1. Agreement to Terms

By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

2. Use License

Permission is granted to temporarily download one copy of the materials (information or software) on Vexa Global's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
- Modify or copy the materials
- Use the materials for any commercial purpose or for any public display
- Attempt to decompile or reverse engineer any software contained on the website
- Remove any copyright or other proprietary notations from the materials
- Transferring the materials to another person or "mirror" the materials on any other server
- Using the materials for any purpose other than for viewing

3. Disclaimer

The materials on Vexa Global's website are provided on an 'as is' basis. Vexa Global makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

4. Limitations

In no event shall Vexa Global or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vexa Global's website, even if Vexa Global or an authorized representative has been notified orally or in writing of the possibility of such damage.

5. Accuracy of Materials

The materials appearing on Vexa Global's website could include technical, typographical, or photographic errors. Vexa Global does not warrant that any of the materials on its website are accurate, complete, or current. Vexa Global may make changes to the materials contained on its website at any time without notice.

6. Links

Vexa Global has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vexa Global of the site. Use of any such linked website is at the user's own risk.

7. Modifications

Vexa Global may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.

8. Governing Law

These terms and conditions are governed by and construed in accordance with the laws of Switzerland, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.

9. Contact Information

If you have any questions about these Terms of Use, please contact us at:
Vexa Global
contact@vexaglobal.org`;

  const getPolicyContent = (type: "privacy" | "terms") => {
    return type === "privacy" ? privacyPolicyContent : termsOfUseContent;
  };

  const getPolicyTitle = (type: "privacy" | "terms") => {
    return type === "privacy" ? "Privacy Policy" : "Terms of Use";
  };

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
                &copy; 2024 Vexa Global. All rights reserved.
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
