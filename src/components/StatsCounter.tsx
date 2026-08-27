"use client";

// ═══════════════════════════════════════════════════════════════
// Stats Counter — Animated number counters
// Triggers counting animation when scrolled into view.
// ═══════════════════════════════════════════════════════════════

import { useEffect, useRef, useState } from "react";

interface StatItem {
  number: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "2000", suffix: "+", label: "Students Enrolled" },
  { number: "98", suffix: "%", label: "Exam Success Rate" },
  { number: "15", suffix: "+", label: "Years of Excellence" },
  { number: "50", suffix: "+", label: "Qualified Teachers" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="stats-band">
      <div className="site-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <AnimatedCounter
                target={parseInt(stat.number)}
                suffix={stat.suffix}
              />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
