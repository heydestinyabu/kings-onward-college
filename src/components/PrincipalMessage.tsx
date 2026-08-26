import Image from "next/image";
import Link from "next/link";

export default function PrincipalMessage() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="site-container">
        <div className="welcome-grid" style={{ alignItems: "center" }}>
          {/* Portrait Side with Gold Decorative Accent Frame */}
          <div style={{ position: "relative", width: "100%", maxWidth: "440px", margin: "0 auto" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                border: "3px solid rgba(200, 160, 61, 0.4)",
                aspectRatio: "1/1",
                background: "var(--c-primary-dark)",
              }}
            >
              {/* Note: User can replace with their image or use the generated executive portrait */}
              <Image
                src="/principal.jpg"
                alt="Principal, King's Onward College"
                fill
                style={{ objectFit: "cover" }}
                priority
              />

              {/* Gradient overlay for name tag */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.6) 60%, transparent 100%)",
                  padding: "1.5rem 1.25rem 1rem",
                  color: "#FFFFFF",
                }}
              >
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF" }}>
                  The Principal
                </h4>
                <p style={{ fontSize: "0.8rem", color: "var(--c-accent-light)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  King&apos;s Onward College
                </p>
              </div>
            </div>

            {/* Quote badge floating */}
            <div
              style={{
                position: "absolute",
                top: "-1rem",
                left: "-1rem",
                background: "linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-light) 100%)",
                color: "var(--c-primary-dark)",
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-md)",
                border: "2px solid #FFFFFF",
              }}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
            </div>
          </div>

          {/* Message Text Side */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="section-tag">Leadership & Vision</span>
              <div className="gold-divider-left" />
              <h2 className="section-title">
                A Word From the <span className="text-gold">Principal</span>
              </h2>
            </div>

            <blockquote
              style={{
                borderLeft: "4px solid var(--c-accent)",
                paddingLeft: "1.25rem",
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: "var(--c-primary)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              &ldquo;At King&apos;s Onward College, education is more than academic instruction; it is the deliberate cultivation of intellect, character, and leadership in every young mind entrusted to our care.&rdquo;
            </blockquote>

            <div style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <p>
                Dear Parents, Guardians, and Esteemed Visitors, it gives me great joy to welcome you to King&apos;s Onward College. For over 15 years, our commitment has remained steadfast: providing an inspiring environment where pupils from Nursery through Secondary school are empowered to achieve greatness.
              </p>
              <p>
                We believe that every child has boundless potential waiting to be unlocked. Through our dedicated staff, modern curriculum, well-equipped science and computer laboratories, and strong moral guidance, we nurture students who are confident, resilient, and academically prepared for WAEC, NECO, JAMB, and higher education.
              </p>
              <p>
                We invite you to partner with us in shaping your child&apos;s future.
              </p>
            </div>

            {/* Signature Area */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(17, 45, 78, 0.08)" }}>
              <div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--c-primary)" }}>
                  The Principal & Head of School
                </h4>
                <p style={{ fontSize: "0.8rem", color: "var(--c-text-muted)" }}>
                  King&apos;s Onward College, Benin City
                </p>
              </div>

              <Link href="/admissions" className="btn-gold" style={{ padding: "0.65rem 1.4rem", fontSize: "0.875rem" }}>
                Enrol With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
