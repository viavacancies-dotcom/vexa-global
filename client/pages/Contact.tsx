import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+41 22 333 4444",
      href: "tel:+41223334444",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@globalinstitute.org",
      href: "mailto:contact@globalinstitute.org",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Research Avenue, Geneva, Switzerland",
      href: "#",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 8:00 AM - 6:00 PM CET",
      href: "#",
    },
  ];

  return (
    <div>
      {/* Hero Section - Compact */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards - Left Side */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Info</h2>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="block p-4 bg-secondary rounded-lg hover:shadow-md transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-primary uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium text-foreground mt-1 group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* Quick Links */}
              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
                  Quick Links
                </h3>
                <div className="space-y-2 text-sm">
                  <a
                    href="mailto:media@globalinstitute.org"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    media@globalinstitute.org
                  </a>
                  <a
                    href="mailto:research@globalinstitute.org"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    research@globalinstitute.org
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-2">
              <div className="bg-secondary rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="research">Research Question</option>
                      <option value="media">Media Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-200"
                      required
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-8 md:py-12 bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-primary mb-2">
                Research & Analysis
              </h4>
              <a
                href="mailto:research@globalinstitute.org"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                research@globalinstitute.org
              </a>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-primary mb-2">
                Communications
              </h4>
              <a
                href="mailto:media@globalinstitute.org"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                media@globalinstitute.org
              </a>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-primary mb-2">
                Events & Partnerships
              </h4>
              <a
                href="mailto:contact@globalinstitute.org"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                contact@globalinstitute.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
