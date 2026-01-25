import { useState } from "react";
import { Mail, Check, AlertCircle } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "inline" | "block";
  title?: string;
  description?: string;
}

export default function NewsletterSignup({
  variant = "block",
  title = "Stay Informed",
  description = "Subscribe to our newsletter for the latest research, analysis, and policy insights.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would normally send to your email service
      // const response = await fetch('/api/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      setStatus("success");
      setEmail("");

      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (variant === "inline") {
    return (
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 ease-in-out"
              disabled={status === "loading"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2 bg-primary text-primary-foreground rounded font-medium text-sm hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out disabled:opacity-50"
          >
            {status === "loading" && "..."}
            {status === "success" && <Check className="h-4 w-4" />}
            {status === "idle" && "Subscribe"}
            {status === "error" && "Try Again"}
          </button>
        </form>
        {status === "success" && (
          <p className="text-xs text-green-600 mt-2">
            Thank you! Check your email to confirm.
          </p>
        )}
      </div>
    );
  }

  return (
    <section className="bg-secondary rounded-lg p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg">
            {description}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-background transition-all duration-200 ease-in-out"
              disabled={status === "loading"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark hover:shadow-md hover:scale-102 active:scale-100 transition-all duration-200 ease-in-out disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" && "Subscribing..."}
            {status === "success" && (
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Subscribed!
              </span>
            )}
            {status === "idle" && "Subscribe"}
            {status === "error" && (
              <span className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> Try Again
              </span>
            )}
          </button>
        </form>

        {/* Privacy Note */}
        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
