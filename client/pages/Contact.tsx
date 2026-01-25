import { Mail, Phone, MapPin, Globe, Users } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl">
            Have questions? Want to collaborate? Interested in our research? Contact us
            to learn more.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
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
                    className="w-full px-4 py-3 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

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
                    className="w-full px-4 py-3 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="research">Research Question</option>
                    <option value="media">Media Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-serif font-bold mb-2">Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Research Avenue<br />
                    Geneva, Switzerland CH-1200
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-serif font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+41223334444" className="hover:text-primary transition-colors">
                      +41 22 333 4444
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-serif font-bold mb-2">Email</h3>
                  <div className="text-muted-foreground space-y-1">
                    <div>
                      <a
                        href="mailto:contact@globalinstitute.org"
                        className="block hover:text-primary transition-colors"
                      >
                        contact@globalinstitute.org
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:media@globalinstitute.org"
                        className="block hover:text-primary transition-colors"
                      >
                        media@globalinstitute.org
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:research@globalinstitute.org"
                        className="block hover:text-primary transition-colors"
                      >
                        research@globalinstitute.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-serif font-bold mb-2">Departments</h3>
                  <div className="text-muted-foreground space-y-1">
                    <div>Research & Analysis</div>
                    <div>Communications</div>
                    <div>Events & Partnerships</div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-serif font-bold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM CET<br />
                    Closed on weekends and Swiss holidays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p>Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
