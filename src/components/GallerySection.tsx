export default function GallerySection() {
  const galleryItems = [
    { label: "Classroom Learning", gradient: "linear-gradient(135deg, #112D4E 0%, #0A192F 100%)" },
    { label: "Science Laboratory", gradient: "linear-gradient(135deg, #1E4E7A 0%, #112D4E 100%)" },
    { label: "Sports & Athletics", gradient: "linear-gradient(135deg, #C8A03D 0%, #A27E26 100%)" },
    { label: "Cultural Celebrations", gradient: "linear-gradient(135deg, #E76F51 0%, #B84A30 100%)" },
    { label: "Graduation Ceremony", gradient: "linear-gradient(135deg, #8338EC 0%, #5215A8 100%)" },
    { label: "Computer ICT Suite", gradient: "linear-gradient(135deg, #2A9D8F 0%, #17655C 100%)" },
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
        <div className="gallery-cards-grid">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="gallery-tile"
              style={{ background: item.gradient }}
            >
              {/* Subtle top-to-bottom dark gradient for clear text visibility */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
              <p className="gallery-tile-title">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
