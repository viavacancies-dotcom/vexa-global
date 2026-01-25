import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        "--stagger-delay": `${staggerDelay}s`,
      } as React.CSSProperties}
    >
      {isVisible && children}
    </div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
}: StaggerItemProps) {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {children}
    </div>
  );
}
