import type { Metadata } from "next";
import { SITE_URL, pages } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const seo = pages.contact;

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
    images: [{ url: seo.ogImage || "/og-contact.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage || "/og-contact.jpg"],
  },
  alternates: {
    canonical: `${SITE_URL}${seo.path}`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-container" style={{ minHeight: "45vh", padding: "4rem 0" }}>
        <div className="site-container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-tag" style={{ color: "var(--c-accent-light)" }}>Contact Us</span>
          <h1 className="hero-heading" style={{ fontSize: "2.75rem", marginBottom: "0.75rem" }}>
            Get In <span style={{ color: "var(--c-accent-light)" }}>Touch</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: "580px", margin: "0 auto" }}>
            We would love to hear from you. Reach out for admissions, general enquiries, or to schedule a campus tour.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="site-container">
          <div className="welcome-grid" style={{ alignItems: "flex-start" }}>
            {/* Contact Details Column */}
            <div>
              <span className="section-tag">Reach Us</span>
              <div className="gold-divider-left" />
              <h2 className="section-title">
                Administrative <span className="text-gold">Office</span>
              </h2>
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "2rem" }}>
                Our admissions and support team is available during official hours to assist prospective and current families.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="feature-item-card" style={{ padding: "1.25rem" }}>
                  <div className="feature-icon-wrap">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--c-primary)" }}>Campus Address</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", marginTop: "0.25rem" }}>
                      Benin City, Edo State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="feature-item-card" style={{ padding: "1.25rem" }}>
                  <div className="feature-icon-wrap">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--c-primary)" }}>Phone Enquiries</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", marginTop: "0.25rem" }}>
                      +234 XXX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="feature-item-card" style={{ padding: "1.25rem" }}>
                  <div className="feature-icon-wrap">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--c-primary)" }}>Email</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", marginTop: "0.25rem" }}>
                      info@kingsonwardcollege.edu.ng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reason-card" style={{ padding: "2.25rem" }}>
              <h3 className="reason-title" style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", marginBottom: "1.75rem" }}>
                Fill in the details below and an administrative officer will respond shortly.
              </p>

              <BreadcrumbJsonLd
                items={[
                  { name: "Home", url: "/" },
                  { name: "Contact Us", url: "/contact" },
                ]}
              />

              <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "0.4rem" }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David"
                      style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #CFD8DC", fontSize: "0.875rem", outline: "none" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "0.4rem" }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Okon"
                      style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #CFD8DC", fontSize: "0.875rem", outline: "none" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "0.4rem" }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234..."
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #CFD8DC", fontSize: "0.875rem", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "0.4rem" }}>
                    Subject / Division of Interest *
                  </label>
                  <select
                    required
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #CFD8DC", fontSize: "0.875rem", outline: "none", background: "#FFFFFF" }}
                  >
                    <option value="">Select subject</option>
                    <option value="nursery">Nursery School Admission</option>
                    <option value="primary">Primary School Admission</option>
                    <option value="secondary">Secondary School Admission</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "0.4rem" }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How may we assist you?"
                    style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "10px", border: "1px solid #CFD8DC", fontSize: "0.875rem", outline: "none", resize: "none" }}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width: "100%", padding: "0.85rem" }}>
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
