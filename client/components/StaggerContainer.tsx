import { ReactNode, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerContainer({
  children,
  className = "",
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref}>
      <div
        className={`${className} transition-opacity duration-500`}
        style={{
          opacity: isVisible ? 1 : 0,
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  staggerDelay?: number;
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
  staggerDelay = 0.08,
}: StaggerItemProps) {
  // Memoize style object to prevent prop identity changes on parent re-renders
  const style = useMemo(
    () => ({ animationDelay: `${index * staggerDelay}s` }),
    [index, staggerDelay]
  );

  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{
        ...style,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
}
