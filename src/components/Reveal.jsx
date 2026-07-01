import React, { useEffect, useRef, useState } from "react";

// Lightweight scroll-reveal using IntersectionObserver (no scroll listeners).
const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 42,
  variant = "up",
  once = true,
}) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, "--reveal-y": `${y}px` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
