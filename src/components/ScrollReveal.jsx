import React, { useEffect, useRef, useState } from "react";

/**
 * Robust ScrollReveal hook that ensures content is visible immediately on mobile
 * or as soon as it nears the viewport.
 */
export const useScrollReveal = (threshold = 0.02) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If running on smaller screens (< 768px), make elements visible immediately
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) {
      setIsVisible(true);
      return;
    }

    // Check if element is already within viewport on mount
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "50px 0px 50px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

/**
 * ScrollReveal Wrapper Component
 */
export const Reveal = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 500,
}) => {
  const [ref, isVisible] = useScrollReveal(0.02);

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0 scale-100 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-6 opacity-0";
      case "down":
        return "-translate-y-6 opacity-0";
      case "left":
        return "translate-x-6 opacity-0";
      case "right":
        return "-translate-x-6 opacity-0";
      case "scale":
        return "scale-95 opacity-0";
      default:
        return "translate-y-4 opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-500 ease-out transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};
