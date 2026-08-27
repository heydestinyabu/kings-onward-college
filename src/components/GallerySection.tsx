export default function GallerySection() {
  const galleryItems = [
    {
      label: "Classroom Learning",
      tag: "Academics",
      gradient: "linear-gradient(135deg, #1E7FD8 0%, #0D5BA6 100%)",
      icon: "📚",
    },
    {
      label: "Science Laboratory",
      tag: "STEM",
      gradient: "linear-gradient(135deg, #2A9D8F 0%, #17655C 100%)",
      icon: "🔬",
    },
    {
      label: "Sports & Athletics",
      tag: "Sports",
      gradient: "linear-gradient(135deg, #C8A03D 0%, #A27E26 100%)",
      icon: "⚽",
    },
    {
      label: "Cultural Celebrations",
      tag: "Culture",
      gradient: "linear-gradient(135deg, #E76F51 0%, #B84A30 100%)",
      icon: "🎭",
    },
    {
      label: "Computer ICT Suite",
      tag: "Technology",
      gradient: "linear-gradient(135deg, #8338EC 0%, #5215A8 100%)",
      icon: "💻",
    },
    {
      label: "Graduation Ceremony",
      tag: "Events",
      gradient: "linear-gradient(135deg, #10186B 0%, #0A1642 100%)",
      icon: "🎓",
    },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--c-bg-warm)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Campus Life</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            Life at King&apos;s <span className="text-gold">Onward</span>
          </h2>
          <p className="section-subtitle">
            A glimpse into the vibrant daily experiences that make our school a joyful community of learners.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-interactive-grid">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="gallery-card-item"
              style={{ background: item.gradient }}
            >
              {/* Centered emoji icon for visual richness */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  opacity: 0.25,
                  zIndex: 1,
                }}
              >
                {item.icon}
              </div>
              <div className="gallery-card-overlay">
                <span className="gallery-card-tag">{item.tag}</span>
                <p className="gallery-card-title">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner" style={{ marginTop: "3rem" }}>
          <h3 className="cta-title">
            See Our Campus <span style={{ color: "var(--c-accent-light)" }}>In Person</span>
          </h3>
          <p className="cta-desc">
            Schedule a visit to experience our world-class facilities, meet our staff, and see why parents choose King&apos;s Onward College.
          </p>
          <a href="/contact" className="btn-gold" style={{ position: "relative", zIndex: 1 }}>
            Book a Campus Tour
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
