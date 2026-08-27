"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-container">
      {/* Ambient background glows */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200, 160, 61, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30, 127, 216, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="hero-content">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(200, 160, 61, 0.15)",
                border: "1px solid rgba(200, 160, 61, 0.4)",
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--c-accent-light)",
                marginBottom: "1.25rem",
              }}
            >
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--c-accent-light)", display: "inline-block" }} />
              <span>Admissions Currently Ongoing — Enroll Now</span>
            </div>

            <h1 className="hero-heading">
              Nurturing Minds,
              <br />
              <span style={{ color: "var(--c-accent-light)" }}>Building Futures</span>
            </h1>

            <p className="hero-lead">
              At King&apos;s Onward College, we provide world-class education from Nursery through Secondary level in Benin City, Edo State. Every child deserves a foundation for greatness.
            </p>

            <div className="hero-actions">
              <Link href="/admissions" className="btn-primary-blue">
                Begin Admission
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about" className="btn-outline-white">
                Discover More
              </Link>
            </div>

            {/* Stats row */}
            <div className="hero-stats-row">
              {[
                { number: "3", label: "School Divisions" },
                { number: "15+", label: "Years of Excellence" },
                { number: "2000+", label: "Students Enrolled" },
                { number: "98%", label: "Exam Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <div className="hero-stat-val" style={{ color: "var(--c-accent-light)" }}>{stat.number}</div>
                  <div className="hero-stat-desc">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual: Clean Crest Presentation (NO CIRCLE) */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                filter: "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.3))",
              }}
            >
              <Image
                src="/logo.png"
                alt="King's Onward College Crest"
                width={380}
                height={400}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
