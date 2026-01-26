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
      <div className="relative bg-white rounded-lg shadow-depth-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in-bounce [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-secondary [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary-dark">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center h-10 w-10 bg-primary rounded-full hover:bg-primary-dark hover:shadow-md transition-all duration-200 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-white" />
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
      </div>
    </div>
  );
}
