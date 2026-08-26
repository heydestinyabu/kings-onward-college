// King's Onward College — Master SEO Configuration

export const SITE_NAME = "King's Onward College";
export const SITE_URL = "https://www.kingsonwardcollege.edu.ng";
export const SITE_DESCRIPTION =
  "King's Onward College is a leading educational institution in Benin City, Edo State, Nigeria offering quality Nursery, Primary, and Secondary education. Building future leaders with excellence, discipline, and character.";
export const DEFAULT_OG_IMAGE = SITE_URL + "/og-default.png";
export const TWITTER_HANDLE = "@kingsonwardcol";

export const SCHOOL_ADDRESS = {
  street: "Benin City",
  locality: "Benin City",
  region: "Edo State",
  country: "NG",
  postalCode: "300001",
};

export const SCHOOL_CONTACT = {
  phone: "+234-XXX-XXX-XXXX",
  email: "info@kingsonwardcollege.edu.ng",
};

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
}

export const pages: Record<string, PageSEO> = {
  home: {
    title: "King's Onward College | Best School in Benin City, Edo State | Nursery, Primary & Secondary Education",
    description: "King's Onward College is Benin City's premier private school offering exceptional Nursery, Primary, and Secondary education. 15+ years of excellence, 98% exam success rate. Enrollment open for 2025/2026 academic session!",
    keywords: [
      "best school in Benin City", "King's Onward College", "Kings Onward College admission",
      "nursery primary secondary school Edo State", "top private school Nigeria",
      "quality education Benin City", "school admission 2025 2026",
      "WAEC NECO JAMB preparation school", "affordable private school Benin City",
      "school near me Benin City", "children education Nigeria",
      "best secondary school Edo State", "day school Benin City", "Christian school Benin City",
    ],
    path: "/",
    ogImage: "/og-home.jpg",
  },
  about: {
    title: "About Us | Our History, Mission & Vision | King's Onward College, Benin City",
    description: "Discover the story behind King's Onward College — a leading educational institution in Benin City, Edo State, Nigeria. Learn about our 15+ year legacy, mission, core values, and unwavering commitment to nurturing future leaders.",
    keywords: [
      "about King's Onward College", "school history Benin City",
      "mission vision education Edo State", "quality education Nigeria",
      "school values excellence integrity innovation", "educational excellence Benin City",
      "character education Nigeria", "founding story school Edo State",
    ],
    path: "/about",
    ogImage: "/og-about.jpg",
  },
  academics: {
    title: "Academic Programs | Nursery, Primary & Secondary | King's Onward College",
    description: "Explore our comprehensive academic programs at King's Onward College — Nursery, Primary, and Secondary education with STEM, arts, and structured WAEC/NECO/JAMB preparation in Benin City, Edo State.",
    keywords: [
      "academic programs Benin City", "nursery school curriculum Nigeria",
      "primary school subjects Benin City", "secondary school WAEC NECO preparation",
      "WAEC preparation school Edo State", "JAMB coaching Benin City",
      "STEM education Nigeria", "quality curriculum Edo State",
      "school subjects Nigeria", "science arts commercial secondary school",
    ],
    path: "/academics",
    ogImage: "/og-academics.jpg",
  },
  admissions: {
    title: "Admissions 2025/2026 | Apply Now | King's Onward College, Benin City",
    description: "Apply for admission into King's Onward College for the 2025/2026 academic session. Nursery, Primary, and Secondary admissions now open. Affordable fees, world-class education in Benin City, Edo State.",
    keywords: [
      "admission 2025 2026 Benin City", "school admission form Edo State",
      "enroll child school Nigeria", "private school fees Benin City",
      "school admission process Nigeria", "best school admission Edo State",
      "affordable private school Benin City", "King's Onward College admission",
      "school admission open now", "2025 school admission Nigeria",
    ],
    path: "/admissions",
    ogImage: "/og-admissions.jpg",
  },
  contact: {
    title: "Contact Us | King's Onward College | Benin City, Edo State, Nigeria",
    description: "Get in touch with King's Onward College in Benin City, Edo State. Contact us for admissions, enquiries, campus visits, or general information. We'd love to hear from you!",
    keywords: [
      "contact King's Onward College", "school phone number Benin City",
      "school address Edo State", "enquiry form school Nigeria",
      "campus visit school Benin City", "school email Edo State", "school location Benin City",
    ],
    path: "/contact",
    ogImage: "/og-contact.jpg",
  },
};

// ═══════════════════════════════════════════════════════════════
// JSON-LD Structured Data Generators
// ═══════════════════════════════════════════════════════════════

export function getSchoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    name: SITE_NAME,
    alternateName: "Kings Onward College",
    url: SITE_URL,
    logo: SITE_URL + "/logo.png",
    image: DEFAULT_OG_IMAGE,
    description: SITE_DESCRIPTION,
    foundingDate: "2009",
    address: {
      "@type": "PostalAddress",
      streetAddress: SCHOOL_ADDRESS.street,
      addressLocality: SCHOOL_ADDRESS.locality,
      addressRegion: SCHOOL_ADDRESS.region,
      addressCountry: SCHOOL_ADDRESS.country,
      postalCode: SCHOOL_ADDRESS.postalCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: "6.3350", longitude: "5.6276" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SCHOOL_CONTACT.phone,
      contactType: "admissions",
      availableLanguage: ["English", "Pidgin"],
      areaServed: "NG",
    },
    email: SCHOOL_CONTACT.email,
    telephone: SCHOOL_CONTACT.phone,
    sameAs: [
      "https://www.facebook.com/kingsonwardcollege",
      "https://www.twitter.com/kingsonwardcollege",
      "https://www.instagram.com/kingsonwardcollege",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Nursery School", description: "Early Years education for children ages 2-5 with play-based learning, phonics, numeracy, and creative arts." } },
        { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Primary School", description: "Comprehensive primary education covering English, Mathematics, Science, ICT, French, and Social Studies." } },
        { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Secondary School", description: "Full secondary education with Science, Arts, and Commercial tracks preparing students for WAEC, NECO, and JAMB examinations." } },
      ],
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "250", bestRating: "5", worstRating: "1" },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: SITE_URL + "/search?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_URL + "/logo.png",
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: SCHOOL_ADDRESS.street,
      addressLocality: SCHOOL_ADDRESS.locality,
      addressRegion: SCHOOL_ADDRESS.region,
      addressCountry: SCHOOL_ADDRESS.country,
      postalCode: SCHOOL_ADDRESS.postalCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: 6.335, longitude: 5.627 },
    telephone: SCHOOL_CONTACT.phone,
    email: SCHOOL_CONTACT.email,
    sameAs: [],
  };
}

export function getBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
