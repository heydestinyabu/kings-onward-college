// ═══════════════════════════════════════════════════════════════
// Breadcrumbs — SEO-friendly breadcrumb navigation
// Renders visible breadcrumbs + JSON-LD BreadcrumbList schema
// for enhanced Google search results.
// ═══════════════════════════════════════════════════════════════

import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL, getBreadcrumbJsonLd } from "@/lib/seo";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLdItems = allItems.map((item) => ({
    name: item.label,
    url: `${SITE_URL}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd(jsonLdItems)} />

      <nav
        aria-label="Breadcrumb"
        className="breadcrumbs-nav"
        style={{
          padding: "0.75rem 0",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <ol
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "0.8125rem",
          }}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li
                key={item.href}
                style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                {!isLast ? (
                  <>
                    <Link
                      href={item.href}
                      itemProp="item"
                      style={{
                        color: "var(--accent-sky)",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      <span itemProp="name">{item.label}</span>
                    </Link>
                    <meta itemProp="position" content={String(index + 1)} />
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--c-text-muted)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span
                      itemProp="name"
                      style={{
                        color: "var(--c-text-main)",
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </span>
                    <meta itemProp="position" content={String(index + 1)} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
