import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL, pages } from "@/lib/seo";
import { SchoolJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const seo = pages.about;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "en_NG",
    url: `${SITE_URL}${seo.path}`,
    siteName: "King's Onward College",
    images: [{ url: seo.ogImage || "/og-about.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage || "/og-about.jpg"],
  },
  alternates: {
    canonical: `${SITE_URL}${seo.path}`,
  },
};

const values = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, from academics to character development.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We instill honesty, respect, and moral uprightness in our students, staff, and community.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We embrace modern teaching methods and technology to prepare students for the digital future.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Discipline",
    description: "We cultivate self-discipline, personal accountability, and deep respect for community.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-container" style={{ minHeight: "45vh", padding: "4rem 0" }}>
        <div className="site-container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-tag" style={{ color: "var(--c-accent-light)" }}>About Us</span>
          <h1 className="hero-heading" style={{ fontSize: "2.75rem", marginBottom: "0.75rem" }}>
            Our <span style={{ color: "var(--c-accent-light)" }}>Story</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: "550px" }}>
            Discover the passion, vision, and dedication behind King&apos;s Onward College.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="site-container">
          <div className="welcome-grid">
            <div>
              <span className="section-tag">Our History</span>
              <div className="gold-divider-left" />
              <h2 className="section-title">
                A Legacy of <span className="text-gold">Excellence</span>
              </h2>
              <div style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p>
                  King&apos;s Onward College was established with a profound mission: to provide quality, value-driven education that nurtures the whole child — intellectually, morally, and socially. Situated in Benin City, Edo State, our institution has grown to become a recognized center of excellence.
                </p>
                <p>
                  Our comprehensive curriculum blends the Nigerian national curriculum with modern teaching methods, ensuring our students excel in WAEC, NECO, and JAMB while developing real-world problem-solving skills.
                </p>
                <p>
                  Today, King&apos;s Onward College continues to set benchmarks in academic achievement and character formation, preparing confident leaders for higher education and global careers.
                </p>
              </div>
            </div>

            <div style={{ position: "relative", width: "100%", maxWidth: "440px", margin: "0 auto" }}>
              <div className="welcome-crest-box">
                <div style={{ position: "relative", width: "200px", height: "200px" }}>
                  <Image src="/logo.png" alt="King's Onward College" fill style={{ objectFit: "contain" }} />
                </div>
              </div>
              <div className="welcome-floating-badge">
                <span className="badge-num">Est.</span>
                <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>2009</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ backgroundColor: "var(--c-bg-warm)" }}>
        <div className="site-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div className="reason-card" style={{ padding: "2.25rem" }}>
              <div className="reason-icon-box">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="reason-title">Our Vision</h3>
              <p className="reason-desc">
                To be a leading educational institution in Nigeria that produces well-rounded, morally upright, and academically distinguished students equipped to compete globally.
              </p>
            </div>

            <div className="reason-card" style={{ padding: "2.25rem" }}>
              <div className="reason-icon-box" style={{ background: "rgba(200, 160, 61, 0.15)", color: "var(--c-accent-dark)" }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="reason-title">Our Mission</h3>
              <p className="reason-desc">
                To provide quality, accessible, and holistic education that fosters critical thinking, moral integrity, and practical skills in a safe, inspiring environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <SchoolJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />

      {/* Core Values */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">What We Stand For</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Our Core <span className="text-gold">Values</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {values.map((v) => (
              <div key={v.title} className="reason-card" style={{ textAlign: "center" }}>
                <div className="reason-icon-box" style={{ margin: "0 auto 1rem" }}>{v.icon}</div>
                <h3 className="reason-title">{v.title}</h3>
                <p className="reason-desc">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
