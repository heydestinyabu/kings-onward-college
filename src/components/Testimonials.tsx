const testimonials = [
  {
    role: "JSS 1 Learner Parent",
    text: "King's Onward College has been a blessing to our family. My children have grown academically and morally. The teachers truly care about each child's individual progress.",
  },
  {
    role: "Primary 4 Learner Parent",
    text: "We moved our son from another school and the transformation has been remarkable. The discipline and quality of teaching here are second to none in Benin City.",
  },
  {
    role: "Nursery 2 Learner Parent",
    text: "The school's approach to early childhood education is outstanding. My daughter loves going to school every day and has developed exceptional confidence.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding testimonials-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag" style={{ color: "var(--c-accent-light)" }}>
            Parent Testimonials
          </span>
          <div className="gold-divider" />
          <h2 className="section-title-white">
            What Parents <span style={{ color: "var(--c-accent-light)" }}>Say</span>
          </h2>
          <p className="section-subtitle-white">
            Hear directly from the families who trust King&apos;s Onward College with their children&apos;s education.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-box">
              {/* Quote SVG */}
              <div style={{ marginBottom: "1rem", color: "var(--c-accent-light)" }}>
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
              </div>

              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>

              <div className="testimonial-author">
                <div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
