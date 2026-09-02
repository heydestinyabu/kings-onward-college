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

// ═══════════════════════════════════════════════════════════════
// FAQ Content — Optimised for Google Rich Results (FAQ Snippets)
// Each page has 5+ questions to maximise snippet eligibility.
// ═══════════════════════════════════════════════════════════════

export interface FAQItem {
  question: string;
  answer: string;
}

export const admissionsFaqs: FAQItem[] = [
  {
    question: "Is admission currently open at King's Onward College?",
    answer: "Yes! Admissions are currently ongoing for Nursery, Primary, and Secondary levels for the current academic session. Spaces are limited — we encourage early application.",
  },
  {
    question: "What age groups does King's Onward College accept?",
    answer: "We accept children from age 2 in our Nursery section, through Primary (ages 6–11), and Secondary school (ages 12–17). Each level has age-appropriate entry requirements.",
  },
  {
    question: "How do I apply for admission?",
    answer: "You can obtain an admission form from our administrative office on campus or apply online through our Admissions page. Fill out the form, submit the required documents (birth certificate, passport photographs, previous school reports), and your child will sit for an entrance assessment.",
  },
  {
    question: "What documents are needed for admission?",
    answer: "Required documents include: a completed application form, birth certificate or statutory declaration of age, 4 recent colour passport photographs, previous academic report cards, transfer certificate (if applicable), immunisation/medical records for Early Years, and a valid parent/guardian identification.",
  },
  {
    question: "How much are the school fees?",
    answer: "Our fees are affordable and competitive compared to other top private schools in Benin City. Fees vary by level (Nursery, Primary, Secondary). Please contact our admissions office or visit our Admissions page for the current fee schedule and payment plan options.",
  },
  {
    question: "Does the school offer WAEC and NECO preparation?",
    answer: "Yes. Our Secondary school programme includes structured WAEC, NECO, and JAMB preparation with experienced teachers, past-question drills, and mock examinations to ensure our students achieve excellent results.",
  },
  {
    question: "Is there a school bus service?",
    answer: "Yes, King's Onward College provides a safe and reliable school bus service covering major routes across Benin City. Bus availability may vary by zone — please contact us for details.",
  },
  {
    question: "Can I visit the campus before enrolling my child?",
    answer: "Absolutely! We welcome prospective parents and guardians to schedule a campus tour. Contact us by phone, email, or through our Contact page to book a convenient time.",
  },
];

export const academicsFaqs: FAQItem[] = [
  {
    question: "What academic levels does King's Onward College offer?",
    answer: "We offer three levels: Nursery (Early Years, ages 2–5), Primary (ages 6–11), and Secondary (ages 12–17). Each level follows a carefully designed curriculum aligned with Nigerian national standards.",
  },
  {
    question: "What subjects are taught in the Nursery section?",
    answer: "Our Nursery curriculum includes Phonics & Letter Recognition, Number Readiness & Counting, Creative Arts & Drawing, Social Habits & Manners, Music, Rhymes & Stories, Physical & Health Education, Nature Study & Discovery, and Colouring & Handwriting Practice.",
  },
  {
    question: "What science subjects are offered at the secondary level?",
    answer: "Our Science track includes Physics, Chemistry, Biology, Further Mathematics, and Agricultural Science. These are taught with hands-on laboratory practicals and are aligned with WAEC and NECO syllabi.",
  },
  {
    question: "Does the school prepare students for JAMB and university admission?",
    answer: "Yes. We provide dedicated JAMB coaching, UTME preparation, and career mentorship for senior secondary students. Our graduates gain admission into top universities across Nigeria and abroad.",
  },
  {
    question: "Are there extracurricular activities and clubs?",
    answer: "Yes! Students can participate in Inter-house Sports, Debate & Quiz Competitions, Cultural Day, Science & Art Exhibitions, Excursions, Music & Drama Club, Press Club, and JETS Club (Science & Technology).",
  },
  {
    question: "Does the school have a computer/ICT lab?",
    answer: "Yes, we have a fully equipped ICT Suite where students learn computer Studies, digital literacy, and basic programming skills — integrated into the curriculum from Primary level.",
  },
  {
    question: "What is the teacher-to-student ratio?",
    answer: "We maintain small class sizes with a low teacher-to-student ratio to ensure personalised attention, better classroom engagement, and stronger academic outcomes for every child.",
  },
];

export const contactFaqs: FAQItem[] = [
  {
    question: "Where is King's Onward College located?",
    answer: "King's Onward College is located in Benin City, Edo State, Nigeria. Our campus is easily accessible from major parts of the city. You can find us on Google Maps on our Contact page.",
  },
  {
    question: "What are the school's operating hours?",
    answer: "Our administrative office is open Monday to Friday, 8:00 AM to 4:00 PM. School activities run from 7:30 AM to 3:30 PM on weekdays. For weekend enquiries, please call ahead.",
  },
  {
    question: "How can I contact the school for enquiries?",
    answer: "You can reach us by phone at +234-XXX-XXX-XXXX, by email at info@kingsonwardcollege.edu.ng, through the contact form on our website, or by visiting our campus in Benin City. We also respond to WhatsApp messages.",
  },
  {
    question: "Can I schedule a campus tour?",
    answer: "Yes! We encourage prospective parents to visit our campus. Contact us via phone, email, or our online contact form to schedule a tour at a time that works for you.",
  },
  {
    question: "Does the school have a social media presence?",
    answer: "Yes, you can follow King's Onward College on Facebook, Instagram, and Twitter/X for updates on school events, achievements, and admissions announcements.",
  },
];

export const aboutFaqs: FAQItem[] = [
  {
    question: "When was King's Onward College established?",
    answer: "King's Onward College was established in 2009 with a mission to provide quality, value-driven education in Benin City, Edo State, Nigeria.",
  },
  {
    question: "What is the school's mission?",
    answer: "Our mission is to provide holistic, world-class education that nurtures every child intellectually, morally, and socially — preparing them to become future leaders of excellence.",
  },
  {
    question: "What are the core values of the school?",
    answer: "Our four core values are Excellence, Integrity, Innovation, and Discipline. These values guide everything we do — from teaching to character development and community engagement.",
  },
  {
    question: "What makes King's Onward College different from other schools?",
    answer: "We combine academic rigor with character formation, maintain small class sizes for personalised attention, use modern teaching methods and technology, and provide a safe, nurturing Christian environment for holistic child development.",
  },
];

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
    description: "King's Onward College is Benin City's premier private school offering exceptional Nursery, Primary, and Secondary education. 15+ years of excellence, 98% exam success rate. Admissions currently ongoing!",
    keywords: [
      "best school in Benin City", "King's Onward College", "Kings Onward College admission",
      "nursery primary secondary school Edo State", "top private school Nigeria",
      "quality education Benin City", "school admission currently ongoing",
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
    title: "Admissions Currently Ongoing | Apply Now | King's Onward College, Benin City",
    description: "Apply for admission into King's Onward College. Nursery, Primary, and Secondary admissions currently ongoing. Affordable fees, world-class education in Benin City, Edo State.",
    keywords: [
      "school admission Benin City", "school admission form Edo State",
      "enroll child school Nigeria", "private school fees Benin City",
      "school admission process Nigeria", "best school admission Edo State",
      "affordable private school Benin City", "King's Onward College admission",
      "school admission open now", "current school admission Nigeria",
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

export function getFAQPageJsonLd(faqs: FAQItem[]) {
  return {
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
}

export function getCourseJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Academic Programs — King's Onward College",
    description: "Nursery, Primary, and Secondary academic programs offered at King's Onward College, Benin City.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Course",
          name: "Nursery School Program",
          description: "Early Years education for children ages 2–5 with play-based learning, phonics, numeracy, and creative arts.",
          provider: {
            "@type": "EducationalOrganization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          educationalLevel: "Early Years",
          url: `${SITE_URL}/academics#nursery`,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "Primary School Program",
          description: "Comprehensive primary education covering English, Mathematics, Science, ICT, French, and Social Studies.",
          provider: {
            "@type": "EducationalOrganization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          educationalLevel: "Primary",
          url: `${SITE_URL}/academics#primary`,
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "Secondary School — Science Track",
          description: "Physics, Chemistry, Biology, Further Mathematics, and Agricultural Science with WAEC/NECO preparation.",
          provider: {
            "@type": "EducationalOrganization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          educationalLevel: "Secondary",
          url: `${SITE_URL}/academics#secondary`,
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Course",
          name: "Secondary School — Arts & Humanities",
          description: "Literature in English, Government, Christian Religious Studies, History, and Fine Arts.",
          provider: {
            "@type": "EducationalOrganization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          educationalLevel: "Secondary",
          url: `${SITE_URL}/academics#secondary`,
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Course",
          name: "Secondary School — Commercial Track",
          description: "Economics, Commerce, Financial Accounting, and Office Practice.",
          provider: {
            "@type": "EducationalOrganization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          educationalLevel: "Secondary",
          url: `${SITE_URL}/academics#secondary`,
        },
      },
    ],
  };
}

export function getWebPageJsonLd(title: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "en-NG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}
