'use client'
import React, { useRef, useEffect, useState } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out w-full
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className || ""}
      `}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
