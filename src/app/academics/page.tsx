import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, pages } from "@/lib/seo";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const seo = pages.academics;

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
    images: [{ url: seo.ogImage || "/og-academics.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage || "/og-academics.jpg"],
  },
  alternates: {
    canonical: `${SITE_URL}${seo.path}`,
  },
};

const nurserySubjects = [
  "Phonics & Letter Recognition",
  "Number Readiness & Counting",
  "Creative Arts & Drawing",
  "Social Habits & Manners",
  "Music, Rhymes & Stories",
  "Physical & Health Education",
  "Nature Study & Discovery",
  "Colouring & Handwriting Practice",
];

const primarySubjects = [
  "English Studies & Phonics",
  "Mathematics & Logic",
  "Basic Science & Technology",
  "Social Studies & Civic Education",
  "Christian Religious Studies",
  "French Language",
  "Computer Studies / ICT Suite",
  "Creative Arts & Craft",
  "Agricultural Science",
  "Physical & Health Education",
  "Home Economics",
];

const secondarySubjects = [
  { dept: "Sciences", items: ["Physics", "Chemistry", "Biology", "Further Mathematics", "Agricultural Science"] },
  { dept: "Arts & Humanities", items: ["Literature in English", "Government", "Christian Religious Studies", "History", "Fine Arts"] },
  { dept: "Commercial", items: ["Economics", "Commerce", "Financial Accounting", "Office Practice"] },
  { dept: "General Core", items: ["English Language", "Mathematics", "Civic Education", "Computer Studies", "French"] },
];

const activities = [
  "Inter-house Sports Competition",
  "Debate & Quiz Competitions",
  "Cultural Day Celebrations",
  "Science & Art Exhibitions",
  "Excursions & Educational Field Trips",
  "Music & Drama Performance Club",
  "Press Club / Literary Society",
  "JETS Club (Science & Tech)",
];

export default function AcademicsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-container" style={{ minHeight: "45vh", padding: "4rem 0" }}>
        <div className="site-container" style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <span className="section-tag" style={{ color: "var(--c-accent-light)" }}>Academics</span>
          <h1 className="hero-heading" style={{ fontSize: "2.75rem", marginBottom: "0.75rem" }}>
            Our Academic <span style={{ color: "var(--c-accent-light)" }}>Programs</span>
          </h1>
          <p className="hero-lead" style={{ maxWidth: "580px", margin: "0 auto" }}>
            A rigorous and balanced curriculum designed to unlock every child&apos;s fullest potential.
          </p>
        </div>
      </section>

      {/* Nursery Section */}
      <section id="nursery" className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="site-container">
          <div className="welcome-grid">
            <div>
              <h2 className="section-title">
                Nursery <span style={{ color: "var(--c-nursery)" }}>School</span>
              </h2>
              <div className="gold-divider-left" />
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Our Early Years section provides a warm, stimulating, and play-based environment where young learners take their first joyful steps in education. We build early literacy, numeracy, and social confidence with dedicated caregivers.
              </p>

              <div style={{ background: "rgba(231, 111, 81, 0.08)", borderRadius: "16px", padding: "1.5rem", border: "1px solid rgba(231, 111, 81, 0.2)" }}>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "1rem" }}>
                  Key Areas of Focus
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
                  {nurserySubjects.map((subject) => (
                    <div key={subject} className="feature-bullet" style={{ fontSize: "0.85rem", color: "var(--c-text-main)" }}>
                      <span className="bullet-dot" style={{ background: "var(--c-nursery)" }} />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reason-card" style={{ padding: "2rem" }}>
              <h3 className="reason-title" style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}>
                Why Parents Choose Our Nursery
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { title: "Phonics & Reading", desc: "Structured early reading development using interactive Jolly Phonics methods." },
                  { title: "Play-Based Discovery", desc: "Montessori-inspired learning aids that stimulate curiosity and motor skills." },
                  { title: "Safe & Caring Environment", desc: "Attentive caregivers ensuring each child feels secure, valued, and encouraged." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "0.85rem" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--c-nursery)", marginTop: "0.4rem", flexShrink: 0 }} />
                    <div>
                      <h5 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--c-primary)" }}>{item.title}</h5>
                      <p style={{ fontSize: "0.8rem", color: "var(--c-text-muted)", marginTop: "0.15rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section */}
      <section id="primary" className="section-padding" style={{ backgroundColor: "var(--c-bg-warm)" }}>
        <div className="site-container">
          <div className="welcome-grid">
            <div className="reason-card" style={{ padding: "2rem" }}>
              <h3 className="reason-title" style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}>
                Primary School Distinction
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { title: "Rigorous Core Subjects", desc: "In-depth foundation in Mathematics, English, Sciences, and ICT." },
                  { title: "Common Entrance Success", desc: "Dedicated preparation for Federal & State Unity School Entrance Exams." },
                  { title: "Digital Literacy", desc: "Hands-on computer training in our modern ICT lab." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: "0.85rem" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--c-primary-school)", marginTop: "0.4rem", flexShrink: 0 }} />
                    <div>
                      <h5 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--c-primary)" }}>{item.title}</h5>
                      <p style={{ fontSize: "0.8rem", color: "var(--c-text-muted)", marginTop: "0.15rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-title">
                Primary <span style={{ color: "var(--c-primary-school)" }}>School</span>
              </h2>
              <div className="gold-divider-left" />
              <p style={{ color: "var(--c-text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Our Primary curriculum balances academic rigor with moral grounding and creative exploration. Students build strong analytic skills, effective communication, and collaborative abilities.
              </p>

              <div style={{ background: "rgba(42, 157, 143, 0.08)", borderRadius: "16px", padding: "1.5rem", border: "1px solid rgba(42, 157, 143, 0.2)" }}>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--c-primary)", marginBottom: "1rem" }}>
                  Curriculum Subjects
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem" }}>
                  {primarySubjects.map((subject) => (
                    <div key={subject} className="feature-bullet" style={{ fontSize: "0.85rem", color: "var(--c-text-main)" }}>
                      <span className="bullet-dot" style={{ background: "var(--c-primary-school)" }} />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section id="secondary" className="section-padding" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="site-container">
          <div className="section-header">
            <div className="gold-divider" />
            <h2 className="section-title">
              Secondary <span style={{ color: "var(--c-secondary-school)" }}>School</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive senior school education with departmental specializations for WAEC, NECO, and JAMB success.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {secondarySubjects.map((dept) => (
              <div key={dept.dept} className="reason-card" style={{ padding: "1.75rem" }}>
                <h3 className="reason-title" style={{ color: "var(--c-primary)", marginBottom: "1rem", borderBottom: "2px solid var(--c-bg-warm)", paddingBottom: "0.5rem" }}>
                  {dept.dept}
                </h3>
                <ul className="footer-links-list">
                  {dept.items.map((item) => (
                    <li key={item} className="feature-bullet" style={{ fontSize: "0.85rem" }}>
                      <span className="bullet-dot" style={{ background: "var(--c-secondary-school)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Exam Success Box */}
          <div style={{ background: "var(--c-primary)", borderRadius: "20px", padding: "2.5rem", color: "#FFFFFF", boxShadow: "var(--shadow-md)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", alignItems: "center" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Examination <span style={{ color: "var(--c-accent-light)" }}>Excellence</span>
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Our structured coaching, mock examinations, and individualized mentoring ensure high success in external certifications.
                </p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--c-accent-light)" }}>98%</span>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>WAEC Pass Rate</p>
                  </div>
                  <div>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--c-accent-light)" }}>95%</span>
                    <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>NECO Pass Rate</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["Intensive WAEC & NECO Preparations", "JAMB Computer-Based Test (CBT) Drills", "Science Laboratory Practicals", "Dedicated Career & University Counseling"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(255,255,255,0.08)", padding: "0.75rem 1rem", borderRadius: "10px" }}>
                    <svg width="16" height="16" fill="var(--c-accent)" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-curricular Section */}
      <section className="section-padding" style={{ backgroundColor: "var(--c-bg-warm)" }}>
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">Holistic Development</span>
            <div className="gold-divider" />
            <h2 className="section-title">
              Co-curricular <span className="text-gold">Activities</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {activities.map((act) => (
              <div key={act} className="feature-item-card" style={{ alignItems: "center" }}>
                <svg width="18" height="18" fill="var(--c-accent)" viewBox="0 0 20 20" style={{ flexShrink: 0 }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--c-primary)" }}>{act}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Academics", url: "/academics" },
        ]}
      />
    </>
  );
}
