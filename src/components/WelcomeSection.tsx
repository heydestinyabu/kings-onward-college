import Image from "next/image";

export default function WelcomeSection() {
  const features = [
    {
      title: "Qualified Teachers",
      desc: "Experienced educators dedicated to student growth",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Safe Environment",
      desc: "Secure and nurturing academic campus",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Modern Facilities",
      desc: "Well-equipped science labs and ICT suite",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Holistic Growth",
      desc: "Academics, moral values, and sports",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        <div className="welcome-grid">
          {/* Visual Showcase Side with hard constraints */}
          <div style={{ position: "relative", width: "100%", maxWidth: "460px", margin: "0 auto" }}>
            <div className="welcome-crest-box">
              <div style={{ position: "relative", width: "220px", height: "220px" }}>
                <Image
                  src="/logo.png"
                  alt="King's Onward College"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            {/* Floating 15+ years badge */}
            <div className="welcome-floating-badge">
              <span className="badge-num">15+</span>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.1 }}>
                  Years of
                </p>
                <p style={{ fontSize: "12px", fontWeight: 700, lineHeight: 1.1 }}>
                  Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="section-tag">Welcome to King&apos;s Onward College</span>
              <div className="gold-divider-left" />
              <h2 className="section-title">
                Where Every Child&apos;s
                <br />
                <span className="text-gold">Potential is Unlocked</span>
              </h2>
            </div>

            <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1rem" }}>
              Established in Benin City, Edo State, King&apos;s Onward College is a beacon of academic excellence and character building. We believe every child possesses unique talents and deserves a rich, stimulating environment to thrive.
            </p>
            <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "2rem" }}>
              From Early Childhood Nursery education through senior secondary school, our passionate educators foster curiosity, discipline, and the critical skills needed for lifelong success.
            </p>

            {/* Feature Cards 2x2 */}
            <div className="feature-cards-grid">
              {features.map((feature) => (
                <div key={feature.title} className="feature-item-card">
                  <div className="feature-icon-wrap">{feature.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "0.15rem" }}>
                      {feature.title}
                    </h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--c-text-muted)", lineHeight: 1.4 }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
