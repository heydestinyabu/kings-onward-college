import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "8rem",
            fontWeight: 800,
            fontFamily: "var(--font-heading)",
            color: "var(--c-primary)",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            color: "var(--c-primary)",
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h2>
        <p
          style={{
            color: "var(--c-text-muted)",
            fontSize: "1rem",
            maxWidth: "420px",
            margin: "0 auto 2rem",
            lineHeight: 1.6,
          }}
        >
          The page you are looking for might have been moved, removed, or is
          temporarily unavailable.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link href="/" className="btn-primary-blue">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn-outline-white">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
