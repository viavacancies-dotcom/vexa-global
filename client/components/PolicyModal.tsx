import { X } from "lucide-react";
import { useEffect } from "react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function PolicyModal({ isOpen, onClose, title, content }: PolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-depth-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in-bounce">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 prose prose-sm max-w-none text-foreground">
          <div className="whitespace-pre-line text-sm leading-relaxed space-y-4">
            {content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-6 py-4 bg-secondary/50">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
