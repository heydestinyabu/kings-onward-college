import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, pages, admissionsFaqs } from "@/lib/seo";
import { FAQJsonLd, BreadcrumbJsonLd, WebPageJsonLd } from "@/components/JsonLd";

const seo = pages.admissions;

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
    images: [{ url: seo.ogImage || "/og-admissions.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage || "/og-admissions.jpg"],
  },
  alternates: {
    canonical: `${SITE_URL}${seo.path}`,
  },
};

const admissionSteps = [
  {
    step: "01",
    title: "Obtain Form",
    description: "Collect the admission form from our administrative office or apply online.",
  },
  {
    step: "02",
    title: "Submit Application",
    description: "Complete the application with birth certificate, previous school records, and passport photos.",
  },
  {
    step: "03",
    title: "Entrance Assessment",
    description: "Your child completes an age-appropriate entrance evaluation and friendly interview.",
  },
  {
    step: "04",
    title: "Enrollment & Welcome",
    description: "Successful candidates receive an admission offer to finalize registration and uniforms.",
  },
];

const requirements = [
  "Completed official application form",
  "Birth certificate or statutory declaration of age",
  "4 recent colour passport photographs",
  "Previous academic report cards (Primary & Secondary)",
  "Transfer certificate / letter from previous school (if applicable)",
  "Immunization / Medical records (Early Years)",
  "Parent or Guardian valid identification",
];

const feeCards = [
  {
    level: "Nursery School",
    badgeBg: "#FCE8E2",
    badgeColor: "#9C3D28",
    items: [
      { name: "Academic Tuition", value: "Affordable / Competitive" },
      { name: "Daily Nutrition / Care", value: "Included" },
      { name: "Learning Materials", value: "Curated Kit" },
      { name: "School Uniform Set", value: "Available at Office" },
    ],
  },
  {
    level: "Primary School",
    badgeBg: "#E3F6F4",
    badgeColor: "#1D6A61",
    items: [
      { name: "Academic Tuition", value: "Affordable / Competitive" },
      { name: "ICT Suite / Computer Studies", value: "Included" },
      { name: "Textbooks & Workbooks", value: "Complete Pack" },
      { name: "Sports & Co-curricular", value: "Included" },
    ],
  },
  {
    level: "Secondary School",
    badgeBg: "#F1E7FC",
    badgeColor: "#5821A8",
    items: [
      { name: "Academic Tuition", value: "Affordable / Competitive" },
      { name: "Science Lab Practicals", value: "Included" },
      { name: "WAEC / NECO Preparations", value: "Structured Drills" },
      { name: "Career Mentorship", value: "Included" },
    ],
  },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-container" style={{ minHeight: "45vh", padding: "4rem 0" }}>
        <div className="site-container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-tag" style={{ color: "var(--c-accent-light)" }}>Admissions</span>
          <h1 className="hero-heading" style={{ fontSize: "2.75rem", marginBottom: "0.75rem" }}>
            Join Our <span style={{ color: "var(--c-accent-light)" }}>Family</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: "580px", margin: "0 auto" }}>
            Admissions are currently ongoing. Secure your child&apos;s educational future today and give them the foundation for greatness.
          </p>
        </div>
      </section>

      {/* 4-Step Admission Process */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">How to Apply</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Admission <span className="text-gold">Process</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {admissionSteps.map((s) => (
              <div key={s.step} className="reason-card" style={{ padding: "1.75rem" }}>
                <span className="reason-watermark-num">{s.step}</span>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "var(--c-primary)",
                    color: "var(--c-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    marginBottom: "1.25rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {s.step}
                </div>
                <h3 className="reason-title">{s.title}</h3>
                <p className="reason-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Key Info */}
      <section className="section-padding" style={{ backgroundColor: "var(--c-bg-warm)" }}>
        <div className="site-container">
          <div className="welcome-grid">
            <div>
              <span className="section-tag">Checklist</span>
              <div className="gold-divider-left" />
              <h2 className="section-title">
                Required <span className="text-gold">Documents</span>
              </h2>
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Please have the following documentation ready when submitting your child&apos;s registration:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {requirements.map((req) => (
                  <div key={req} className="feature-item-card" style={{ padding: "0.85rem 1rem", alignItems: "center" }}>
                    <svg width="18" height="18" fill="#2A9D8F" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--c-primary)" }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reason-card" style={{ padding: "2.25rem" }}>
              <h3 className="reason-title" style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>
                Essential School Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ borderLeft: "3px solid var(--c-accent)", paddingLeft: "1rem" }}>
                  <h5 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--c-primary)" }}>Academic Year</h5>
                  <p style={{ fontSize: "0.825rem", color: "var(--c-text-muted)", marginTop: "0.2rem" }}>
                    September to July across three intensive, rewarding terms.
                  </p>
                </div>
                <div style={{ borderLeft: "3px solid var(--c-primary-school)", paddingLeft: "1rem" }}>
                  <h5 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--c-primary)" }}>School Daily Schedule</h5>
                  <p style={{ fontSize: "0.825rem", color: "var(--c-text-muted)", marginTop: "0.2rem" }}>
                    Monday – Friday: 7:30 AM to 3:30 PM.
                  </p>
                </div>
                <div style={{ borderLeft: "3px solid var(--c-secondary-school)", paddingLeft: "1rem" }}>
                  <h5 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--c-primary)" }}>Flexible Payment Plans</h5>
                  <p style={{ fontSize: "0.825rem", color: "var(--c-text-muted)", marginTop: "0.2rem" }}>
                    Convenient termly payment options available for parent support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Overview */}
      <section className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">Value & Investment</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Fee <span className="text-gold">Structure</span>
            </h2>
            <p className="section-subtitle">
              We provide premium education at accessible, transparent rates.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {feeCards.map((fee) => (
              <div key={fee.level} className="reason-card" style={{ padding: "0", overflow: "hidden" }}>
                <div style={{ background: fee.badgeBg, color: fee.badgeColor, padding: "1.25rem", textAlign: "center" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", fontWeight: 700 }}>{fee.level}</h3>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <ul className="footer-links-list" style={{ marginBottom: "1.5rem" }}>
                    {fee.items.map((item) => (
                      <li key={item.name} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", paddingBottom: "0.5rem", borderBottom: "1px solid #F0F2F5" }}>
                        <span style={{ color: "var(--c-text-muted)" }}>{item.name}</span>
                        <span style={{ fontWeight: 700, color: "var(--c-primary)" }}>{item.value}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-gold" style={{ width: "100%", padding: "0.75rem", fontSize: "0.875rem" }}>
                    Enquire for Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for Rich Snippets */}
      <section className="section-padding" style={{ backgroundColor: "var(--c-bg-light)" }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">Got Questions?</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {admissionsFaqs.map((faq) => (
              <details key={faq.question} style={{ background: "#FFFFFF", borderRadius: "12px", padding: "1.25rem 1.5rem", border: "1px solid var(--c-border)" }}>
                <summary style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--c-primary)", cursor: "pointer", listStyle: "none" }}>
                  {faq.question}
                </summary>
                <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", color: "var(--c-text-muted)", lineHeight: 1.7 }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Admissions", url: "/admissions" },
        ]}
      />

      {/* FAQ for rich results */}
      <FAQJsonLd faqs={admissionsFaqs} />
      <WebPageJsonLd
        title={seo.title}
        description={seo.description}
        path={seo.path}
      />
    </>
  );
}
