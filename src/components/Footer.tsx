import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact Us" },
];

const programs = [
  { href: "/academics#nursery", label: "Nursery School" },
  { href: "/academics#primary", label: "Primary School" },
  { href: "/academics#secondary", label: "Secondary School" },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "facebook") {
    return (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (name === "twitter") {
    return (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* CTA Band */}
      <div className="footer-cta-band">
        <div className="site-container">
          <div className="footer-cta-inner">
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Ready to Give Your Child the Best?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>
                Join the King&apos;s Onward College family and watch your child thrive in an environment of excellence.
              </p>
            </div>
            <Link href="/admissions" className="btn-gold" style={{ padding: "0.85rem 2rem" }}>
              Start Admission
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="site-container">
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div className="logo-badge" style={{ position: "relative", width: "40px", height: "40px", border: "2px solid var(--c-accent)" }}>
                <Image src="/logo.png" alt="Logo" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="brand-text-block">
                <span className="brand-name" style={{ color: "#FFFFFF", fontSize: "1.1rem" }}>King&apos;s Onward</span>
                <span className="brand-sub">College</span>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "320px" }}>
              Nurturing minds, building futures. A premier educational institution in Benin City committed to academic distinction and high moral standards.
            </p>
            <div className="footer-social-icons">
              {["facebook", "twitter", "instagram", "whatsapp"].map((social) => (
                <a key={social} href="#" className="social-circle-btn" aria-label={social}>
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link-item">
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--c-accent)" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="footer-heading">Our Programs</h4>
            <ul className="footer-links-list">
              {programs.map((prog) => (
                <li key={prog.href}>
                  <Link href={prog.href} className="footer-link-item">
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--c-accent)" }} />
                    {prog.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-links-list" style={{ fontSize: "0.85rem" }}>
              <li style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.7)" }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--c-accent)", flexShrink: 0, marginTop: "0.2rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Benin City, Edo State, Nigeria</span>
              </li>
              <li style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.7)" }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--c-accent)", flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+234 XXX XXX XXXX</span>
              </li>
              <li style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.7)" }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--c-accent)", flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@kingsonwardcollege.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} King&apos;s Onward College. All rights reserved.</p>
      </div>
    </footer>
  );
}
