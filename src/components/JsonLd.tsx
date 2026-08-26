import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SCHOOL_ADDRESS, SCHOOL_CONTACT } from "@/lib/seo";

// ============================================================
// JSON-LD Structured Data Components for SEO
// These help Google understand your content and can generate
// rich snippets in search results.
// ============================================================

/** Generic wrapper that injects a JSON-LD script tag */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema — used on every page via layout */
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: SCHOOL_ADDRESS.street,
      addressLocality: SCHOOL_ADDRESS.locality,
      addressRegion: SCHOOL_ADDRESS.region,
      addressCountry: SCHOOL_ADDRESS.country,
      postalCode: SCHOOL_ADDRESS.postalCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SCHOOL_CONTACT.phone,
      contactType: "admissions",
      email: SCHOOL_CONTACT.email,
      availableLanguage: ["English"],
    },
    sameAs: [
      // Add social media URLs here when available
      // "https://www.facebook.com/kingsonwardcollege",
      // "https://www.instagram.com/kingsonwardcollege",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 6.335,  // Benin City approximate
        longitude: 5.627,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Nursery School Program",
            description: "Early Years education for children ages 2-5",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Primary School Program",
            description: "Primary education for children ages 6-11",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Secondary School Program",
            description: "Secondary education for students ages 12-17, WAEC/NECO/JAMB preparation",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** School-specific schema for the About page */
export function SchoolJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: SCHOOL_ADDRESS.street,
      addressLocality: SCHOOL_ADDRESS.locality,
      addressRegion: SCHOOL_ADDRESS.region,
      addressCountry: SCHOOL_ADDRESS.country,
    },
    telephone: SCHOOL_CONTACT.phone,
    email: SCHOOL_CONTACT.email,
    areaServed: "Benin City, Edo State",
    educationalLevel: ["Nursery", "Primary", "Secondary"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** BreadcrumbList schema for internal navigation */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** FAQ schema for rich results on relevant pages */
export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** WebPage schema for individual pages */
export function WebPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
