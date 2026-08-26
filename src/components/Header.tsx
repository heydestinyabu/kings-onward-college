"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification / Info Bar */}
      <div className="top-bar">
        <div className="site-container">
          <div className="top-bar-inner">
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <svg width="14" height="14" fill="var(--accent-sky)" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +234 XXX XXX XXXX
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <svg width="14" height="14" fill="var(--accent-sky)" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@kingsonwardcollege.edu.ng
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span>Benin City, Edo State</span>
              <span style={{ color: "var(--accent-sky)", fontWeight: 700 }}>• Admission 2025/2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="main-nav-header">
        <div className="site-container">
          <div className="header-inner">
            {/* Natural Logo with Brand Text (NO CIRCLE) */}
            <Link href="/" className="brand-logo-link">
              <div className="logo-natural">
                <Image
                  src="/logo.png"
                  alt="King's Onward College Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <div className="brand-text-block">
                <span className="brand-name">King&apos;s Onward</span>
                <span className="brand-sub">College</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nav-links-desktop">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-item-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Apply CTA */}
            <div style={{ display: "none" }} className="lg:block">
              <Link href="/admissions" className="btn-primary-blue" style={{ padding: "0.65rem 1.4rem", fontSize: "0.875rem" }}>
                Apply Now →
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{ padding: "0.5rem", color: "var(--deep-navy)", display: "flex", alignItems: "center" }}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid var(--c-border)",
              padding: "1.25rem",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "10px",
                    fontWeight: 600,
                    color: "var(--c-text-main)",
                    backgroundColor: "var(--c-bg-light)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary-blue"
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                Apply Now →
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
