import Link from "next/link";

const programs = [
  {
    title: "Nursery School",
    accentColor: "var(--c-nursery)",
    lightBg: "#FCE8E2",
    textColor: "#9C3D28",
    description:
      "A warm, play-based learning environment where our youngest learners develop foundational skills through creative exploration, storytelling, and guided discovery.",
    features: [
      "Phonics & Early Literacy",
      "Number Readiness & Logic",
      "Creative Arts & Crafts",
      "Social Skills & Teamwork",
      "Music & Physical Movement",
    ],
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Primary School",
    accentColor: "var(--c-primary-school)",
    lightBg: "#E3F6F4",
    textColor: "#1D6A61",
    description:
      "Building strong academic foundations with a balanced curriculum that develops critical thinking, creativity, and a lifelong passion for knowledge.",
    features: [
      "English & Mathematics",
      "Basic Science & Technology",
      "Social Studies & Civic Education",
      "Computer & Digital Studies",
      "French & Creative Expression",
    ],
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Secondary School",
    accentColor: "var(--c-secondary-school)",
    lightBg: "#F1E7FC",
    textColor: "#5821A8",
    description:
      "Preparing students for excellence in WAEC, NECO, and JAMB with rigorous academics, leadership training, and career guidance for future success.",
    features: [
      "Sciences & Arts Specialization",
      "WAEC & NECO Intensive Prep",
      "JAMB / UTME Coaching",
      "Leadership & Character Development",
      "Career & Higher Education Guidance",
    ],
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function ProgramsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--c-bg-warm)" }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic Pathway</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            Three Levels of <span className="text-gold">Excellence</span>
          </h2>
          <p className="section-subtitle">
            From early childhood discovery through secondary school mastery, we provide a holistic learning journey for each stage of development.
          </p>
        </div>

        {/* 3 Program Cards */}
        <div className="programs-cards-grid">
          {programs.map((program) => (
            <div key={program.title} className="program-card">
              <div>
                {/* Accent Top Bar */}
                <div className="card-accent-bar" style={{ backgroundColor: program.accentColor }} />

                {/* Card Body */}
                <div className="program-card-body">
                  <div className="program-card-top">
                    <div
                      className="program-icon-box"
                      style={{ backgroundColor: program.lightBg, color: program.textColor }}
                    >
                      {program.icon}
                    </div>
                  </div>

                  <h3 className="program-title">{program.title}</h3>
                  <p className="program-desc">{program.description}</p>
                </div>

                {/* Features */}
                <ul className="program-features-list">
                  {program.features.map((feature) => (
                    <li key={feature} className="feature-bullet">
                      <span className="bullet-dot" style={{ backgroundColor: program.accentColor }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="program-card-action">
                <Link href="/academics" className="btn-card-learn">
                  Learn More
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
